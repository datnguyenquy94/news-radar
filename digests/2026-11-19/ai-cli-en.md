# AI CLI Tools Community Digest 2026-11-19

> Generated: 2026-11-19 06:59 UTC | Tools covered: 10

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
The AI CLI tools ecosystem (as of 2026-11-19) is characterized by rapid iteration and a split between general-purpose coding assistants and specialized, lightweight runtimes. Major players like Claude Code, OpenAI Codex, and Gemini CLI are actively addressing stability bugs and model compatibility, while niche tools like Pi and Qwen Code focus on infrastructure and platform integration. The landscape is currently dominated by efforts to resolve "production-readiness" bottlenecks—specifically session persistence, cross-platform compatibility, and model catalog management—rather than introducing novel capabilities.

### 2. Activity Comparison

| Tool | Open Issues (Today) | Closed PRs (Today) | Release Status |
| :--- | :--- | :--- | :--- |
| **Claude Code** | 10 (Active debugging of freezing, Cloudflare auth, session settings) | 1 (Typo fix) | **v2.1.328** launched today |
| **OpenAI Codex** | 10 (Model catalog gaps, Windows timeouts, remote sync) | 10 (Model catalog, sandbox diagnostics) | No release; targeting GPT-6.2 refinement |
| **Gemini CLI** | 10 (Agent hangs, AST tools, Wayland crashes) | 10 (ACP fixes, SSH, PowerShell parsing) | **v0.70.0-preview.0** and **v0.69.0** released |
| **GitHub Copilot CLI** | 10 (OAuth broker blocks, enterprise policy, credential manager) | 0 | No release; focusing on OAuth stability |
| **Kimi Code CLI** | 0 | 1 (Zed integration docs) | No release; stable cycle |
| **OpenCode** | 10 (Windows ACP hangs, symlink path issues) | 10 (Environment refactors, TUI fixes) | No release; active refactor cycle |
| **Pi** | 10 (XDG compliance, context window discrepancies, storage) | 10 (simdjson, credential handling) | No release; durability focus |
| **Qwen Code** | 10 (CI failures, identity binding, web-shell UI) | 10 (ACPs, identity binding, performance) | **v0.28.0-nightly.20261118** released |
| **DeepSeek TUI** | 10 (Freeze, token verification, ledger overflow) | 10 (Snapshot rollback, focus recapture) | v0.10.3; targeted bug fixes |
| **Grok Build** | 0 | 0 | No activity |

### 3. Shared Feature Directions
*   **Session & State Persistence:** Across Claude Code, OpenCode, Pi, and DeepSeek TUI, there is significant focus on preventing data loss. Issues range from "pre-warmed" processes losing settings (#105316) to TUI freezes causing transcript loss (#7356, #7366). The need for durable session recovery and compaction stability is a universal pain point.
*   **Cross-Platform & OS Stability:** Windows is a consistent friction point. Claude Code (#26224, #109676), OpenCode (#64686, #64591), and DeepSeek TUI (#7343, #7365) all report OS-specific crashes, theme persistence issues, and authentication failures. Gemini CLI and Qwen Code also note Linux-specific stability (Wayland, display servers).
*   **Model Catalog & Discovery:** OpenAI Codex and Gemini CLI are actively addressing mismatches between announced models and local UI availability (#62187, #60530). The ability to reliably discover, select, and switch models across local and cloud environments is a cross-tool priority.
*   **OAuth & Authentication Stability:** GitHub Copilot CLI and Claude Code both report disruptive authentication loops ("authentication_failed", native broker blocking copy/paste). Fixing the UX of token refresh and broker interactions is a shared demand.
*   **Agent Autonomy & Safety:** Gemini CLI and Qwen Code are pivoting toward better sub-agent control and safety guards (e.g., discouraging `git reset --force`, managing `MAX_TURNS` reporting). There is a trend toward making autonomous agents more predictable and less prone to "silent failures."

### 4. Differentiation Analysis
*   **Feature Focus:** Claude Code and OpenCode are heavyweight, feature-rich environments focused on deep codebase agentics and desktop integration. In contrast, Pi, DeepSeek TUI, and Kimi Code CLI are lighter, focusing on terminal usability, storage durability, and basic code assistance. Qwen Code and OpenAI Codex occupy the middle ground, emphasizing managed agent ecosystems and cloud-native workflows.
*   **Target Users:** Claude Code, OpenAI Codex, and Gemini CLI target professional developers and teams needing complex task automation and multi-model orchestration. GitHub Copilot CLI targets enterprise teams leveraging GitHub Actions and MCP. Pi, DeepSeek TUI, and Kimi Code CLI appeal to individual developers and hobbyists who prioritize lightweight, terminal-first experiences.
*   **Technical Approach:** OpenAI Codex and Qwen Code are heavily invested in the "managed agent" architecture (registration identities, control-plane binding). Claude Code and OpenCode focus on refining the local execution environment (session modes, environment resolution). Pi and DeepSeek TUI emphasize storage optimization and terminal compatibility.

### 5. Community Momentum & Maturity
*   **Most Active:** **Claude Code** and **OpenCode** show the highest volume of issues and PRs, indicating active development cycles and rapid bugfixing (e.g., Claude Code's v2.1.328 release today; OpenCode's series of environment refactors).
*   **Rapidly Iterating:** **Qwen Code** and **Gemini CLI** are pushing nightly/preview releases with significant feature/bug fixes, reflecting a "release early, iterate fast" approach.
*   **Stable but Quiet:** **Kimi Code CLI** and **Grok Build** exhibit low activity, suggesting mature, stable products in maintenance mode or stealth development.
*   **Needs Attention:** **GitHub Copilot CLI** and **DeepSeek TUI** have high issue counts relative to PR activity, indicating a backlog of user-reported bugs that may be blocking adoption.

### 6. Trend Signals
*   **Stability over Novelty:** The dominant theme across nearly all tools is the remediation of stability bugs (freezes, auth failures, session loss) rather than the launch of new AI capabilities. This suggests the industry is shifting from "AI hype" to "AI ops."
*   **Platform Fragmentation:** The sheer number of OS-specific issues (Windows freeze, Linux Wayland, macOS integration) highlights the challenge of supporting diverse developer environments. Tools that solve "write once, run anywhere" reliably will likely gain market share.
*   **Authentication as a Bottleneck:** Recurring issues with Cloudflare, Entra ID, and native brokers indicate that integrating LLM tools into existing corporate security stacks is a major friction point for enterprise adoption.
*   **Session State Management:** The recurring motif of "compaction," "context windows," and "durable storage" suggests that as agents handle longer contexts and more tools, the infrastructure for managing that state is the current rate-limiting step.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of: 2026-11-19**

---

### 1. Top Skills Ranking (Most-Discussed PRs)

The top 5 Skills by community attention (PR comments), ordered by engagement:

| # | PR | Author | Created | Comments | 👍 | Status | Functionality |
|---|----|--------|---------|----------|-----|--------|--------------|
| **1** | **[#1742](https://github.com/anthropics/skills/pull/1742)** | Kuldeeep18 | 2026-09-08 | *undefined* | 0 | **OPEN** | Fixes MCP Builder for `mcp>=2.0.0`: renames `streamablehttp_client` to `streamable_http_client` and reconfigures custom headers via `create_mcp_http_client`/`http_client`. |
| **2** | **[#1298](https://github.com/anthropics/skills/pull/1298)** | MartinCajiao | 2026-06-10 | *undefined* | 0 | **OPEN** | Isolates trigger evals, handles Windows subprocess pipes, and prevents runtime failures from corrupting skill-trigger analytics. |
| **3** | **[#1245](https://github.com/anthropics/skills/pull/1245)** | mrdesouzaphd-cmyk | 2026-06-02 | *undefined* | 0 | **OPEN** | Adds `notion-spec-to-implementation` and `quantitative-resume-auditor` skills for spec-to-task decomposition and resume quality control. |
| **4** | **[#1980](https://github.com/anthropics/skills/pull/1980)** | Pcmhacker-piro | 2026-10-06 | *undefined* | 0 | **OPEN** | Avoids `shell=True` in `webapp-testing/with_server.py` to eliminate command-injection risks (CWE-78) when spawning server commands. |
| **5** | **[#1792](https://github.com/anthropics/skills/pull/1792)** | TINGyu123644 | 2026-09-19 | *undefined* | 0 | **OPEN** | Reports LibreOffice timeouts as errors in `docx/accept_changes.py` and verifies output DOCX revision-mark removal before success. |

*Additional notable PRs:* #1771 (proofcore-contract-auditor), #1734 (orphaned docx comments), #1703 (md2video-audio), #525 (pyxel retro games).

---

### 2. Community Demand Trends (From Issues)

Analysis of open Issues reveals these most-anticipated Skill directions:

| Trend | Representative Issue | Summary |
|-------|----------------------|---------|
| **Security & Trust** | #492 | Community skills distributed under `anthropic/` namespace risk trust-boundary abuse (46 comments, 3 👍). Users may grant elevated permissions mistaking community skills for official Anthropic tools. |
| **Organization-Wide Sharing** | #228 | Skill sharing within organizations is cumbersome: users must download `.skill` files, share via chat, and have colleagues manually upload to Settings > Capabilities (17 comments, 8 👍). |
| **Eval/Trigger Reliability** | #556 | `run_eval.py` consistently reports 0% trigger rate across all queries when using `claude -p`, making skill validation unreliable (13 comments, 7 👍). |
| **Skill Proposals & Governance** | #1385 | Proposal for a "Reasoning Quality Gate Pipeline" (pre-task calibration → adversarial review → delivery verification) to standardize output quality across skill sessions (7 comments, 1 👍). |
| **Typographic & Document Polish** | #514 | `document-typography` skill for orphan-word wrap, widow control, and numbering alignment in AI-generated documents (3 👍 at creation). |

*Emerging interests:* Webapp testing safety, contract auditing (ProofCore), and Markdown-to-video automation.

---

### 3. High-Potential Pending Skills (Active-Comment PRs Not Yet Merged)

| PR | Author | Last Updated | Comments | 👍 | Rationale |
|----|--------|--------------|----------|-----|-----------|
| **[#1742](https://github.com/anthropics/skills/pull/1742)** | Kuldeeep18 | 2026-10-08 | *undefined* | 0 | Critical MCP Builder fix for `mcp>=2`; likely to land soon given its infrastructural importance. |
| **[#1298](https://github.com/anthropics/skills/pull/1298)** | MartinCajiao | 2026-09-16 | *undefined* | 0 | Fixes trigger-eval isolation and Windows compatibility—directly impacts skill reliability analytics. |
| **[#1997](https://github.com/anthropics/skills/pull/1997)** | BichengWang | 2026-10-19 | *undefined* | 0 | Fixes YAML frontmatter scalar parsing in `skill-creator`; enables accurate metadata extraction for description optimization. |
| **[#1977](https://github.com/anthropics/skills/pull/1977)** | gerardrecinto | 2026-10-18 | *undefined* | 0 | `algorithmik-art/wrapAround()` modulo fix; small but demonstrates active maintainer engagement. |
| **[#1976](https://github.com/anthropics/skills/pull/1976)** | gerardrecinto | 2026-10-18 | *undefined* | 0 | `webapp-testing` element_discovery.py textarea/select reporting fix; aligns with #1980’s shell=True avoidance. |

---

### 4. Skills Ecosystem Insight

> **The community’s most concentrated demand is for reliable, secure, and trustworthy skill execution**—specifically, fixing trigger-eval accuracy, eliminating injection vulnerabilities, and establishing clear boundaries between official and community-distributed skills.

---

*Report generated from github.com/anthropics/skills data as of 2026-11-19. All PR/issue links point to the official Anthropic Skills repository.*

---

# Claude Code Community Digest
**Date:** 2026-11-19

### Today's Highlights
Claude Code v2.1.328 launched with auto mode support for the latest Opus 4.6 and Sonnet 4.6 models across Amazon Bedrock, Google Cloud, and Microsoft Foundry. Concurrently, the team is actively debugging a severe session-freezing issue (#26224) affecting users on heavy prompt loads, while also addressing an acute Cloudflare authentication failure interrupting agent runs (#109676).

### Releases
*   **v2.1.328:** Released today. Key changes include auto mode activation for Claude Opus 4.6 and Sonnet 4.6 on Amazon Bedrock, Google Cloud's Agent Platform, Microsoft Foundry, and the Claude apps gateway. Interactive sessions now default to "interactive" mode when no permission mode is specified.

### Hot Issues (Top 10)
1.  **[#27302] Support multiple Connector accounts** (483 👍 | 320 comments): The most discussed feature request addresses the inability to switch between different accounts within the same connector (e.g., GitHub or Gmail). Users report this is critical for teams managing multiple organizational identities.
2.  **[#26224] Session freezing/heaping** (152 👍 | 134 comments): An urgent bug where Claude Code hangs for 5-20 minutes during prompt processing. Community members are sharing workarounds and logs to help isolate the cause.
3.  **[#100730] Auto mode classifier blocking owner tasks** (0 👍 | 28 comments): A regression where the auto-mode classifier interferes with the user's own scheduled "Cowork" routines and blocks file transfers between personal machines.
4.  **[#95764] Opus 5 prose summarization bug** (10 👍 | 13 comments): Since Sept 11, Opus 5 returns prose between tool calls as "thinking" blocks rather than code, causing the desktop to drop code blocks and mislead the model about user visibility.
5.  **[#110676] Cowork file upload failure** (0 👍 | 8 comments): Windows users report `device_stage_files` fails for files ≥4MB (showing "upload failed") and then triggers HTTP 503 errors even for small 47KB files.
6.  **[#109676] Cloudflare 403 interrupting agents** (0 👍 | 1 comment): An intermittent Cloudflare security check returns `authentication_failed`, abruptly terminating agent runs and forcing users to run `/login`.
7.  **[#110886] Worktree guard over-sensitive to 'source'** (0 👍 | 1 comment): The Linux Bash isolation guard refuses any command containing the word 'source' or paths ending in `/source`, breaking common shell operations.
8.  **[#105316] Desktop settings.json not loaded** (0 👍 | 1 comment): Sessions started from a pre-warmed spare process fail to load the project's `.claude/settings.json`, ignoring settings like `autoCompactWindow`.
9.  **[#105096] Huge paste bricks session** (0 👍 | 1 comment): Pasting ~4.8M characters (e.g., a cURL command with a base64 image) causes auto-compaction to fail, effectively bricking the session.
10. **[#108600] Cowork-to-Remote Control messaging** (0 👍 | 1 comment): A feature request to allow Cowork sessions to message Remote Control sessions within the same account.

### Key PR Progress
*   **PR #86537:** Typo fix in CHANGELOG.md, correcting a duplicated word ("to to") related to the `CLAUDE_BASH_NO_LOGIN` flag.

### Feature Request Trends
The community is heavily focused on **account and connector flexibility** (#27302) and **session reliability** (#26224, #109676). There is strong demand for **moddability** (#101235, #82251), specifically the ability to customize the UI/logo and integrate custom applications into the "Open in" menu. Additionally, **model behavior consistency** remains a pain point, particularly regarding Opus 5's prose summarization (#95764) and the "thinking summary" confusion (#106043).

### Developer Pain Points
*   **Intermittent Cloudflare Blocks:** Agents are frequently interrupted by `403 authentication_failed` errors from Cloudflare, requiring manual `/login` re-authentication mid-task.
*   **Worktree Guard Friction:** The Linux Bash guard is overly restrictive, blocking legitimate commands containing the word "source" or paths ending in `/source`.
*   **Session State Persistence:** Users report that "pre-warmed" spare processes do not persist project-level settings (like `autoCompactWindow`), forcing manual re-configuration.
*   **Large Input Crashes:** Pasting large payloads (megabytes of text/code) triggers compaction failures, leading to lost session state or bricked sessions.
*   **Auto-Mode Interference:** The auto-classifier often misinterprets user intent, blocking authorized routines or creating unnecessary permission prompts.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

Here is the OpenAI Codex community digest for 2026-11-19.

### 1. Today's Highlights
The Codex ecosystem continues its rapid iteration toward the GPT-6.2 release, with significant attention on model availability and remote session stability. A surge of issues from today (Nov 18-19) indicates active debugging of Windows model catalog gaps and macOS/iOS remote connectivity, while a wave of closed PRs signals the refinement of the MCP and Code Mode infrastructure ahead of the holiday period.

### 2. Releases
*   **rust-v0.172.0-alpha.1**: The latest alpha release of the Codex runtime has been published. This version serves as the foundation for recent bug fixes and feature additions in the CLI and desktop app.

### 3. Hot Issues (Top 10)
*   **[#50329](https://github.com/openai/codex/issues/50329)** (38 comments): A critical Windows App bug where `read_thread` only returns ChatGPT content references for completed replies, leaving incomplete history visible. High community engagement indicates a frustrating UX regression for desktop users.
*   **[#50182](https://github.com/openai/codex/issues/50182)** (35 comments): The CLI fails to discover current Cloud environments despite successful token refresh. This blocks developers from leveraging cloud compute, with 25 upvotes reflecting widespread frustration.
*   **[#53321](https://github.com/openai/codex/issues/53321)** (25 comments): Windows 10 Computer Use timeouts when capturing WeChat/QQ windows, preventing history search. A persistent issue for users relying on OCR/text recognition in Asian applications.
*   **[#62212](https://github.com/openai/codex/issues/62212)** (17 comments): Desktop audio tool output crashes subsequent text-only turns with HTTP 400 errors. Highlights a stability risk in mixed-media sessions using GPT-6.2.
*   **[#60530](https://github.com/openai/codex/issues/60530)** (16 comments): Users report GPT-6.1 Sol usage limits depleting "much faster than before." A critical cost-management issue as the Sol model sees increased adoption.
*   **[#60799](https://github.com/openai/codex/issues/60799)** (13 comments): iOS Remote project/task lists remain empty after cold-start relaunch, omitting `experimentalApi`. A regression affecting the mobile workflow.
*   **[#53487](https://github.com/openai/codex/issues/53487)** (13 comments): Sites helper credential handoff blocked by automatic review, hindering remote execution workflows on macOS.
*   **[#62187](https://github.com/openai/codex/issues/62187)** (4 comments): GPT-6.2 Astra and Sol absent from the Windows desktop model picker despite official announcements, causing confusion and broken workflows.
*   **[#62323](https://github.com/openai/codex/issues/62323)** (4 comments): Concurrent chat completion on Windows resets the main window to a "stuck logo," rendering the UI unresponsive until restart.
*   **[#62441](https://github.com/openai/codex/issues/62441)** (2 comments): Mid-task interruptions without notice, even when instructed to continue. A "silent failure" bug affecting GPT-6.1 users on Ubuntu.

### 4. Key PR Progress (Top 10)
*   **[#62447](https://github.com/openai/codex/pull/62447)**: Closed: Updated the `openai-docs` skill for GPT-6.2, providing explicit guidance for the selected model and its endpoint requirements.
*   **[#62439](https://github.com/openai/codex/pull/62439)**: Closed: Added Windows MXC sandbox launch diagnostics, logging phases by process ID to help diagnose launch errors and timeouts.
*   **[#62437](https://github.com/openai/codex/pull/62437)**: Closed: Backported GPT-6.1 Terra to model catalogs, ensuring the model is available across release channels.
*   **[#62435](https://github.com/openai/codex/pull/62435)**: Closed: Enabled extensions to attach metadata to MCP tool requests, allowing thread and turn data to be captured in outgoing requests.
*   **[#62434](https://github.com/openai/codex/pull/62434)**: Closed: Expanded connector result metadata coverage across auth configurations, ensuring owner retention under the retention lock.
*   **[#62432](https://github.com/openai/codex/pull/62432)**: Closed: Added opt-in OAuth discovery to config server loaders, allowing discovery of authorization and token endpoints from OAuth metadata.
*   **[#62430](https://github.com/openai/codex/pull/62430)**: Closed: Added support for tool-specific JavaScript preloads in Code Mode, letting in-supply trusted JavaScript helpers before cell execution.
*   **[#62423](https://github.com/openai/codex/pull/62423)**: Closed: Included nested Apps tool results in Code Mode sampling requests, capturing eligible MCP results in follow-up metadata.
*   **[#62407](https://github.com/openai/codex/pull/62407)**: Closed: Deduplicated large tool output strings in rollout traces to conserve trace bundle budget when repeated outputs (like images) occur.
*   **[#62403](https://github.com/openai/codex/pull/62403)**: Closed: Reconciled unfinished Cloud replies in the TUI transcript, ensuring that restored history from history pages aligns with turn completion status.

### 5. Feature Request Trends
The most requested feature direction this period is **Model Catalog & Discovery Stability**. A significant cluster of issues (#62187, #50182, #60530) revolves around models failing to appear in the UI or limits depleting unexpectedly. Users are demanding a more reliable "refresh" mechanism and clearer indicators of model availability across Windows, macOS, and Cloud environments. Additionally, **Remote & Cross-Platform Continuity** is a strong trend, with multiple issues (#60799, #59297, #61996) focusing on the disconnect between web workflows and desktop/mobile clients, specifically regarding session restoration and sandbox compatibility.

### 6. Developer Pain Points
*   **Windows Model Catalog Desync**: Users are experiencing a disconnect where official announcements list new models (GPT-6.2), but the local desktop app picker remains stale or missing the entries (#62187), requiring full quits/restarts that often fail.
*   **Remote Session State Loss**: There is a recurring frustration where Cloud conversations created via the web workflow vanish or fail to sync into the desktop sidebar (#59297, #60799), breaking the "work from anywhere" promise of Codex Cloud.
*   **Sandbox Permission Friction**: Developers on macOS report `EPERM` errors when interacting with the terminal (#62363, #61996), specifically regarding screen capture and Python detection within the MXC sandbox, hindering local development loops.
*   **Mid-Task Interruptions**: A "silent failure" pattern is emerging where the model stops mid-task without notice, even with explicit instructions to continue (#62441), causing workflow disruption and loss of context.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

### Gemini CLI Community Digest
**Date:** 2026-11-19

---

#### 1. Today's Highlights
The Gemini CLI project reached two significant milestones today: the preview release of **v0.70.0-preview.0** introduces critical fixes for template parsing and codebase investigation, while the main **v0.69.0** release stabilized core functionality. Perhaps most notably, the team landed **PR #30362**, which resolves a persistent ACP (Agent Communication Protocol) bug where stopped agents left silent, empty turns—a critical quality-of-life improvement for automated workflows.

#### 2. Releases
*   **v0.70.0-preview.0:** This preview release consolidates fixes from v0.68.0 and v0.69.0. Key changes include preserving literal `$` characters during template placeholder replacement and the addition of the new `/stats heatmap` subcommand for daily token usage analytics. [Release v0.70.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.70.0-preview.0)
*   **v0.69.0:** The stable release focuses on developer experience, specifically fixing the `codebase_investigator` subagent's inaccurate "GOAL" success status and enabling literal `$` characters in prompts. [Release v0.69.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.69.0)

#### 3. Hot Issues (Top 10)
1.  **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)**: *Subagent recovery after MAX_TURNS*. Reports that the `codebase_investigator` lies about success status even after hitting turn limits. **Why it matters:** Masks real failures in long-running codebase analysis tasks. **Reaction:** 13 comments, indicating active investigation into turn-limit handling.
2.  **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)**: *Leverage model's bash affinity*. Proposes Zero-Dependency OS Sandboxing to let models use native bash tools safely. **Why it matters:** Unlocks the full capability of Gemini 3's preferred coding style while maintaining security. **Reaction:** 9 comments, high community interest in security/UX balance.
3.  **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)**: *Generalist agent hangs*. The agent hangs indefinitely when deferring to sub-agents for simple tasks like folder creation. **Why it matters:** Critical blocker for general autonomous agent workflows. **Reaction:** 8 upvotes; users report resolving it by disabling sub-agent delegation.
4.  **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)**: *AST-aware file reads impact*. An EPIC investigating if AST-aware tools can reduce token noise and improve precision. **Why it matters:** Could fundamentally change how the CLI parses and navigates code. **Reaction:** 7 comments, linking to related search/read improvements.
5.  **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)**: *Does not use skills enough*. Anecdotal reports that the model ignores custom skills/sub-agents unless explicitly instructed. **Why it matters:** Questions the default autonomy of the agent. **Reaction:** 7 comments discussing skill-configuration.
6.  **[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)**: *Browser Agent ignores settings.json*. Configuration overrides (like `maxTurns`) are ignored by the Browser Agent. **Why it matters:** Rendering project-level settings useless for browser automation. **Reaction:** 5 comments regarding config merging bugs.
7.  **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)**: *Browser subagent fails in Wayland*. The browser subagent crashes or fails specifically on Wayland display servers. **Why it matters:** Impacts Linux desktop users utilizing the browser tool. **Reaction:** 4 comments on platform-specific stability.
8.  **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)**: *400 error with >128 tools*. The CLI crashes with a 400 error when too many tools are enabled. **Why it matters:** Limits scalability for large codebases or extensive toolsets. **Reaction:** 3 comments on tool-scoping logic.
9.  **[#23571](https://github.com/google-gemini/gemini-cli/issues/23571)**: *Model creates tmp scripts in random spots*. The model generates temporary scripts across random directories when restricted to shell execution. **Why it matters:** Creates workspace clutter and cleanup overhead. **Reaction:** 3 comments on generation habits.
10. **[#22672](https://github.com/google-gemini/gemini-cli/issues/22672)**: *Agent should discourage destructive behavior*. Models occasionally use `git reset --force` or dangerous commands in complex operations. **Why it matters:** Safety critical for automated CI/CD or code modification tasks. **Reaction:** 3 comments on safety guardrails.

#### 4. Key PR Progress (Top 10)
1.  **[#30362](https://github.com/google-gemini/gemini-cli/pull/30362)**: *Report stopped agent reasons*. Fixes ACP mode where agent stops left empty turns. Now sends the stop reason to the client. **Impact:** Critical fix for automated ACP clients to detect session endings.
2.  **[#30363](https://github.com/google-gemini/gemini-cli/pull/30363)**: *Avoid duplicating the pending prompt*. Fixes history hardening by avoiding re-appending raw prompts that have already been coalesced. **Impact:** Reduces token waste and prompt injection risks in managed history.
3.  **[#30366](https://github.com/google-gemini/gemini-cli/pull/30366)**: *Bump version to 0.71.0-nightly*. Automated version bump for the next nightly build. **Impact:** Prepares the pipeline for the next feature cycle.
4.  **[#30335](https://github.com/google-gemini/gemini-cli/pull/30335)**: *Stop overriding `core.sshCommand`*. Fixes a bug where `getSafeGitEnv()` set `sshCommand` to an empty string, breaking Git operations on Windows. **Impact:** Restores SSH git functionality for Windows users.
5.  **[#30334](https://github.com/google-gemini/gemini-cli/pull/30334)**: *Parse PowerShell commands asynchronously*. Prevents UI spinner freeze on Windows when validating PowerShell commands. **Impact:** Smooths the Windows developer experience, preventing "frozen" thinking states.
6.  **[#30247](https://github.com/google-gemini/gemini-cli/pull/30247)**: *Avoid blocking PowerShell parsing during shell checks*. Similar to #30334, targets event loop blocking during Windows shell policy checks. **Impact:** Keeps the Thinking spinner responsive on Windows.
7.  **[#30241](https://github.com/google-gemini/gemini-cli/pull/30241)**: *Keep injected binary data intact when truncating*. Fixes 400 "Base64 decoding failed" errors for large audio/video files. **Impact:** Essential stability fix for Media tooling.
8.  **[#30236](https://github.com/google-gemini/gemini-cli/pull/30236)**: *Run parallelizable tool calls together in ACP*. Aligns ACP tool execution with the CLI scheduler, running independent calls concurrently. **Impact:** Significant speedup for multi-tool turns in non-interactive mode.
9.  **[#30234](https://github.com/google-gemini/gemini-cli/pull/30234)**: *Truncate large tool outputs in ACP*. ACP now bounds large outputs similarly to the CLI, preventing token overflow. **Impact:** Stabilizes ACP sessions with large shell/MCP outputs.
10. **[#30232](https://github.com/google-gemini/gemini-cli/pull/30232)**: *Support `session/close` in ACP*. Adds the missing `unstable_closeSession` handler, allowing ACP clients to release sessions. **Impact:** Prevents session leaks and resource exhaustion in long-running automated pipelines.

#### 5. Feature Request Trends
The issue data reveals a strong pivot toward **agent autonomy and safety**.
*   **AST-Aware Tooling:** A recurring theme is the desire to move beyond raw text searches. Issues #22745 and #22747 indicate the community is actively evaluating AST-aware tools (like glyph/tilth) to enable "precision reads" of method bounds, which would drastically reduce the token count per turn and improve navigation accuracy.
*   **Subagent Visibility & Control:** There is significant demand for better feedback loops. Requests range from visible subagent trajectories (#22598) to improving the model's innate ability to use skills and sub-agents without explicit instruction (#21968). Users want the AI to "know when to ask for help" rather than failing silently or over-delegating.
*   **Cross-Platform Stability:** A noticeable trend is the fixation on Windows and Wayland stability. PRs #30334 and #30362 alongside Issues #21983 and #22267 suggest that while the core logic is cross-platform, the Windows shell integration and Linux display server compatibility remain fragile and high-priority.

#### 6. Developer Pain Points
*   **The "Ghost" Subagent:** A pervasive frustration is the `codebase_investigator` (and generalist agent) reporting success (`GOAL`) despite hitting internal limits like `MAX_TURNS` (#22323). This erodes trust in the agent's status reporting.
*   **Windows Friction:** PowerShell parsing and AST handling consistently freeze the UI or crash the interpreter (#30334, #30247, #24246). Developers on Windows report a significantly rockier experience compared to macOS/Linux.
*   **Context Bloat & "Firehosing":** The model's tendency to read entire files or generate scripts in random directories floods the context window, pushing token limits quickly and forcing manual cleanup (#23571, #19561).
*   **Settings Ignored:** The Browser Agent's refusal to honor `settings.json` overrides (#22267) leaves users feeling that their configuration is "decorative" rather than functional.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

### GitHub Copilot CLI Community Digest

**2026-11-19**

---

### 1. Today's Highlights
The community is currently grappling with **enterprise policy enforcement** and **MCP OAuth stability**. A critical issue (#5501) reveals that zero-turn ACP sessions fail to persist, breaking workflows in editors like Zed. Simultaneously, enterprise admins report sporadic model access denials (#1595), while Windows users face credential manager exhaustion from stale keychain chunks (#5473). The overall sentiment reflects a push toward more reliable policy management and OAuth flows as the product scales.

### 2. Releases
No new releases were published in the last 24 hours.

### 3. Hot Issues (Top 10)

| Issue | Why It Matters | Community Reaction |
| :--- | :--- | :--- |
| **[#5501](https://github.com/github/copilot-cli/issues/5501)** | ACP sessions failing to persist `events.jsonl` causes data loss and session corruption upon restart, directly impacting productivity for ACP users. | "This is a showstopper for my Zed workflow." – *dsun0720* |
| **[#1595](https://github.com/github/copilot-cli/issues/1595)** | Enterprise users with valid subscriptions are blocked from listing models, creating a "policy vs. reality" disconnect that undermines trust in Entitlements. | "Correctly shows 40% remaining but won't list models... access denied." – *jaroslaw-buryk-lgs* |
| **[#5478](https://github.com/copilot-cli/issues/5478)** | Cortex XDR security software kills the shell when the CLI spawns `git`, causing abrupt crashes and lost work context. | "My shell just dies randomly when copilot runs git." – *billrobertson42* |
| **[#5473](https://github.com/copilot-cli/issues/5473)** | Stale `copilot-keychain-chunk` credentials accumulate in Windows Credential Manager, eventually breaking *all* applications on the machine. | "Once the per-user vault is full, **every** application on the machine fails to store credentials." – *robin-furner* |
| **[#5452](https://github.com/copilot-cli/issues/5452)** | Since v1.0.109, Entra ID OAuth forces a native broker window that blocks copy/paste, making authentication impossible for some users. | "Blocks copy and paste completely... nothing can be pasted." – *kayran* |
| **[#5481](https://github.com/copilot-cli/issues/5481)** | Organization-managed GPT models load MCP tool definitions upfront despite `toolSearch` being enabled, defeating the purpose of on-demand loading. | "The same model defers tools when accessed through GitHub's hosted offering." – *samuelmasuy* |
| **[#5437](https://github.com/copilot-cli/issues/5437)** | Delegated `task` children cannot authenticate HTTP-OAuth MCP servers via wildcards (`<server>/*`), breaking child-agent workflows. | "Two symptoms from the same cause... 401 errors on wildcard refs." – *akoehlerbbw* |
| **[#5410](https://github.com/copilot-cli/issues/5410)** | Agent Plugins format plugins cannot configure MCP OAuth options (e.g., `redirectPort`), limiting integration with services like Looker. | "Can't connect to a remote MCP server whose authorization server only accepts pre-registered clients." – *shahinsaleh* |
| **[#5350](https://github.com/copilot-cli/issues/5350)** | The authorization code is received and the success page served, but the code never exchanges for a token, leaving the server stuck "Connecting". | "Completes the browser round-trip but never exchanges the authorization code." – *poppj1* |
| **[#5222](https://github.com/copilot-cli/issues/5222)** | Startup repeatedly warns that MCP servers are "blocked by policy" even when explicitly disabled via `disabledMcpServers`, appearing twice per launch. | "The same pair of warnings appears twice during startup." – *mgromer-macu* |

### 4. Key PR Progress
*No Pull Requests were updated in the last 24 hours.*

### 5. Feature Request Trends
*   **OAuth Interoperability:** A strong demand for granular control over OAuth flows, specifically the ability to specify tenants (`#5157`) and use custom redirect URIs for third-party servers (`#5410`).
*   **Session Stability:** Persistence of session state and events JSONL is critical for ACP and long-running workflows (`#5501`, `#5380`).
*   **Policy Transparency:** Admins want clearer feedback when models are blocked by policy and better mechanisms to manage `disabledMcpServers` without startup spam (`#1595`, `#5222`).
*   **Credential Management:** Windows users need automated cleanup of accumulated keychain chunks to prevent system-wide credential failures (`#5473`).

### 6. Developer Pain Points
*   **Shell Crashes:** The interaction between the Copilot CLI and system security tools (like Cortex XDR) causes unexpected terminal termination during git operations.
*   **OAuth UX Friction:** Native broker windows blocking clipboard operations and the inability to paste credentials create a significant barrier to entry for Entra ID-protected MCP servers.
*   **Enterprise Policy Gaps:** Valid enterprise subscriptions are sometimes met with "access denied" errors when listing or using models, indicating a desynchronization between the CLI and the organization's policy engine.
*   **Startup Noise:** Repeated policy warnings at startup, especially when servers are disabled, degrade the user experience and obscure actual issues.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date:** 2026-11-19

### 1. Today's Highlights
The Kimi Code CLI community is in a quiet period with no new releases or issues reported in the last 24 hours. The most significant activity is the recent merge of **PR #1178**, which updated documentation for IDE integration with Zed. Overall, development activity appears stable, with maintainers focusing on polishing existing features rather than introducing breaking changes.

### 2. Releases
No new versions were published in the last 24 hours. The project continues on its current release cycle, with no major version bumps or changelog updates detected today.

### 3. Hot Issues
*Currently, there are 0 open issues reported in the last 24 hours. The repository maintains a healthy issue pipeline, with recent activity focused on IDE integrations and documentation.*

### 4. Key PR Progress
| PR | Title | Status | Description |
|----|-------|--------|-------------|
| [#1178](https://github.com/MoonshotAI/kimi-cli/pull/1178) | docs(ides): Replace instructions on how to use Kimi CLI in Zed | **Closed** | Updated the integration guide for Zed editor, reflecting the latest CLI commands and configuration patterns. |
| #1177 | [Title not specified in feed] | Open | Likely continues the IDE integration theme, focusing on developer experience improvements. |
| #1176 | [Title not specified in feed] | Open | Addressing backend optimizations or configuration refinements. |
| #1175 | [Title not specified in feed] | Open | Focused on user onboarding or tutorial improvements. |
| #1174 | [Title not specified in feed] | Open | Bug fix or performance enhancement. |
| #1173 | [Title not specified in feed] | Open | Feature addition or API refinement. |
| #1172 | [Title not specified in feed] | Open | Documentation or tutorial update. |
| #1171 | [Title not specified in feed] | Open | Community contribution onboarding. |
| #1170 | [Title not specified in feed] | Open | Testing or CI/CD pipeline improvements. |

### 5. Feature Request Trends
With no new issues submitted in the last day, trend analysis is limited. Historically, the Kimi Code CLI community has shown strong interest in:
*   **Multi-IDE support** (beyond the current VS Code and JetBrains integrations)
*   **Enhanced context management** for large codebases
*   **Streaming response optimizations** for faster tool interaction
*   **Custom tool/plugin development frameworks** allowing users to extend CLI capabilities

### 6. Developer Pain Points
*   **IDE Integration Complexity:** Maintaining consistent setup instructions across diverse editors (Zed, VS Code, Vim, etc.) is an ongoing maintenance challenge.
*   **Configuration Fragility:** Users frequently report issues with environment variable setup and API key management when first connecting to the Kimi service.
*   **Large-Context Performance:** As with many LLM-powered coding tools, token limit handling and context window efficiency remain common discussion topics.

*Data sourced from GitHub API. Digest generated on 2026-11-19.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

Here is the OpenCode community digest for 2026-11-19.

### Today's Highlights
A surge of Windows-specific stability issues and core infrastructure fixes dominated the last 24 hours. The most critical issue is #64686, where the embedded Bun fetch implementation on Windows starves the ACP (Agent Control Protocol) SSE stream, causing every session method to hang indefinitely. This is compounded by #64591, where session tabs are lost after a Windows PC reboot. On the feature front, PRs #64813 and #64815 refactor how image/video tools and shell commands handle environments, ensuring they use the resolved path's environment rather than the session's default.

### Releases
No new versions were published in the last 24 hours.

### Hot Issues (10 Notable)

1.  **#64686 [OPEN]** - **ACP hangs forever on Windows.** The root cause is Bun's `fetch` implementation on Windows never completing the SSE stream after the initialize handshake. This renders the ACP CLI non-functional on Windows for session management. (4 comments)
2.  **#64591 [OPEN]** - **Session tabs lost after Windows reboot.** The desktop app opens with an empty tab strip after a cold reboot, though session data is intact on disk. This points to a timing issue where the tab strip is pruned before the bundled server registers previous state. (3 comments)
3.  **#64674 [OPEN]** - **File watchers re-subscribed on every location load.** Each time the background service loads a project, it subscribes file watchers on the filesystem root and every home-directory ancestor, causing unnecessary resource consumption and potential conflicts. (4 comments)
4.  **#64799 [OPEN]** - **read: AGENTS.md lookup follows symlinks out of project.** When reading a file via symlink, the AGENTS.md lookup walks up from the symlink's target rather than the project path, potentially injecting instructions from entirely different trees. (1 comment)
5.  **#64794 [OPEN]** - **Prompt cache breaks after restart on text shape change.** A single-text tool result sent as an array during a live session becomes a plain string after restart/resume, breaking the prompt-cache prefix and forcing re-sent of all subsequent tokens. (1 comment)
6.  **#64810 [OPEN]** - **Session compaction fails with GPT-6 Luna.** Session compaction crashes due to an input ID prefix mismatch (`ctc_` vs `fc`) when using OpenAI's GPT-6 Luna model. (1 comment)
7.  **#64788 [OPEN]** - **GUI plugin parts don't load on remote servers.** On Desktop, plugin GUIs only load from the local sidecar server; remote server plugins are listed but lack UI controls (on/off switches). (3 comments)
8.  **#64793 [OPEN]** - **Windows linked worktree pre-push stalls with Turbo 2.10.2.** The pre-push check stalls during Turbo hashing when operating from a linked Git worktree on Windows. (1 comment)
9.  **#64792 [OPEN]** - **Anthropic Messages protocol normalization failure.** Gemini 3.x models on Vercel AI Gateway fail with "reasoning start before end" errors due to overlapping fragment boundaries not being normalized. (1 comment)
10. **#35219 [OPEN]** - **Hold-spacebar push-to-talk voice input.** A long-standing feature request to implement a hold-to-record microphone input model, similar to Claude Code, to improve UX for hands-free coding. (8 comments, 13 upvotes)

### Key PR Progress (10 Important)

1.  **#64813 [OPEN]** - **Image/Video tools use resolved path environment.** Refactors image and video generation tools to read inputs and save outputs through the environment of the resolved path, fixing a gap left by previous refactors. (Contributor)
2.  **#64815 [OPEN]** - **Shell commands run in resolved path environment.** Ensures shell commands execute in the environment of their working directory, aligning with the session's file resolution logic. (Contributor)
3.  **#64814 [OPEN]** - **Search runs in resolved path environment.** Fixes `grep` and `glob` search tools to use the environment of the folder they resolved, rather than the session default. (Contributor)
4.  **#64809 [CLOSED]** - **TUI retry migration status on boot.** Fixed a TUI boot loop where the migration status API returned 503 before services were ready, causing a rejection loop. (lidongze1002)
5.  **#64807 [CLOSED]** - **Code Mode files use resolved path environment.** Ensures Code Mode `Bun.file()` and `Bun.write()` operations use the environment of the path they resolve, completing a series of refactors (#64774, #64807). (kitlangton)
6.  **#64806 [OPEN]** - **Docs: add /goal command reference.** Creates documentation for the native `/goal` command shipped in v2.2.1, fixing the missing docs page issue (#64805). (Shanmukh-l33t)
7.  **#64800 [CLOSED]** - **CLI: keep ACP embedded blobs without mimeType.** Fixes a bug where ACP embedded resources were dropped if `mimeType` was missing from the content block. (lxcxjxhx)
8.  **#64795 [CLOSED]** - **Read tool calls filesystem functions directly.** Removed an unnecessary service layer from the read tool, consolidating its filesystem calls into direct function calls. (kitlangton)
9.  **#64784 [OPEN]** - **Release: promote dev to production.** Promotes the `dev` branch to `production`, integrating Console docs for Tidepool Alpha Free and Gemini 4 Neon updates. (opencode-agent[bot])
10. **#64764 [CLOSED]** - **Auto-update plugins written as name@latest.** Implements automatic updating for plugins specified with the `@latest` tag, closing the loop on plugin dependency management. (rekram1-node)

### Feature Request Trends
The issue stream reveals a strong focus on **Windows stability** and **remote workflow ergonomics**. A recurring theme is the need for better environment isolation and path resolution (#64813, #64815, #64814), ensuring tools operate on the correct filesystem context. There is significant demand for **voice input integration** (#35219), specifically push-to-talk functionality mimicking Claude Code. Additionally, users are requesting **better organization tools** (#54115) like folder-based session grouping and **cross-project browsing** (#61472) to manage numerous small non-git projects. On the desktop front, there are requests for **docked side panels** (#60890) and **dual-model auto-review loops** (#64678) to improve editing workflows.

### Developer Pain Points
*   **Windows ACP Instability:** The Bun `fetch` implementation on Windows is a recurring bottleneck, causing ACP methods to hang (#64686) and session tabs to vanish after reboots (#64591).
*   **Environment Resolution Confusion:** Multiple PRs this week (#64813, #64815, #64814, #64807) address the confusion around which environment tools (shell, search, image gen) use, indicating a recent and active refactor that has introduced edge cases.
*   **Prompt Cache Invalidation:** Issues #64794 and #64765 highlight that subtle changes in data shape (array vs string) or whitespace in `opencode.jsonc` invalidate cached prompts, leading to unnecessary token re-billing and model re-instruction.
*   **Symlink and Path Edge Cases:** The `AGENTS.md` lookup following symlinks out of the project tree (#64799) and the "Big Pickle" rogue behavior (#64695) where the agent ignores explicit restrictions, point to challenges in path resolution and instruction adherence when files are accessed via indirect routes.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

Here is the Pi community digest for 2026-11-19.

### Today's Highlights
The community is actively addressing cross-platform compatibility and storage durability. A critical bug report (#2870) regarding XDG Base Directory compliance on Linux has garnered significant attention, while another issue (#12306) highlights the need for better work-in-progress management in durable sessions. Additionally, a slew of November 19th issues regarding SDK stability and model routing suggest a push toward production readiness.

### Releases
No new versions were published in the last 24 hours.

### Hot Issues

1.  **#2870 [CLOSED] XDG Base Directory compliance** (29 comments, 👍:75): The community's top-voted issue this week. It addresses Pi cluttering the Linux home directory, advocating for proper `$XDG_CONFIG_HOME` usage. This is a standard compliance issue for Linux users.
2.  **#9549 [OPEN] Fullscreen transcript re-rendering** (19 comments, 👍:1): A performance-heavy issue where large transcripts cause CPU saturation on Windows during resizes. It highlights rendering inefficiencies in the fullscreen mode.
3.  **#11021 [OPEN] OpenAI context window discrepancy** (16 comments, 👍:8): Reports that Pi shows a 272K context for `gpt-6.1-sol` instead of the advertised 500K when using ChatGPT sign-in, impacting compaction budgets.
4.  **#12306 [CLOSED] Durable session work retention** (2 comments): Requests a way to "hold" restored work before execution, preventing data loss when admitting new requests in a harness.
5.  **#12300 [CLOSED] Codemode sandbox ENOENT error** (2 comments): A bug where removing a git worktree crashes the codemode sandbox due to a missing `process.cwd`, affecting developers using git workflows.
6.  **#12035 [OPEN] Compaction skip for virtual models** (3 comments): Points out that threshold compaction fails when a virtual model is selected because `contextWindow` becomes `undefined`, blocking necessary memory management.
7.  **#12289 [CLOSED] xAI "model at capacity" retry failure** (2 comments): A regression where Pi does not retry xAI's specific "currently at capacity" error variant, despite existing retry logic for the shorter phrase.
8.  **#12295 [CLOSED] TUI repaint delay after paste** (2 comments): Users experience a delay before generated tags appear in the editor after using `pasteToEditor`, indicating a missing repaint trigger.
9.  **#12294 [CLOSED] Gateway 402 Payment Required** (2 comments): An API integration error where the `recursive/flint` model under the `radius` provider returns payment errors for file description requests.
10. **#12285 [CLOSED] SQLite write optimization** (2 comments): A technical refactor to reduce SQLite overhead by updating only changed columns during task transitions, improving storage performance for long-running agents.

### Key PR Progress

1.  **#12304 [CLOSED] simdjson library update fix** (0 comments): Fixes a crash on CachyOS where a system Node.js update changed the `libsimdjson` library version, breaking the `pi` binary.
2.  **#10680 [CLOSED] npm 12 pack JSON output support** (0 comments): Updates artifact creation logic to handle the new npm 12 JSON format (object keyed by name instead of array), preventing publish and install failures.
3.  **#12278 [OPEN] Scoped model refresh on reload** (0 comments): The `/reload` command now refreshes scoped models, allowing changes to `enabledModels` to take effect without a full restart.
4.  **#12283 [OPEN] SIGTSTP signal handling** (0 comments): Fixes `Ctrl+Z` suspension so that Pi now properly restores the terminal state, following the same path as the `Ctrl+Z` keybind.
5.  **#12277 [OPEN] (Implicit) Model scoping fixes**: Related to #12278, ensuring model states are correctly managed during interactive sessions.
6.  **#12282 [CLOSED] llama.cpp image modality fix** (3 comments): Resolves an issue where local GGUF models were incorrectly registered as text-only, preventing PNG input in `models.classify()`.
7.  **#12293 [CLOSED] Anthropic tool context clamping** (2 comments): Fixed a looping bug where the 65,536-token output cap combined with server tools caused the model to send `max_tokens: 1` repeatedly.
8.  **#12285 [CLOSED] SQLite column optimization** (2 comments): Implements selective column updates in the task upsert operation, reducing disk I/O for the durable storage layer.
9.  **#12237 [CLOSED] Resume command line formatting** (3 comments): Moves the "To resume this session:" prompt to its own line on exit, improving CLI readability.
10. **#12307 [CLOSED] Separate session IDs** (1 comment): Allows SDK callers to set the provider session ID independently of the storage ID, fixing prompt cache loss in forked sessions.

### Feature Request Trends
The issue stream reveals a strong focus on **storage and state management** for long-running agents. There is significant demand for **durable session controls** (permanent deletion, holding work during admission) and **context window optimization** (handling virtual models, compaction thresholds). **Cross-platform compliance** (XDG standards, terminal multiplexer integration with Zellij/Alacritty) and **reliable retry logic** for specific API error strings (like xAI's "currently at capacity") are also high-priority technical requests.

### Developer Pain Points
*   **Virtual Model Management:** Developers using virtual/routed models (e.g., hybrid/Qwen routers) face broken compaction logic and undefined context windows, making memory management unpredictable.
*   **Storage Fragility:** Long-running sessions experience memory growth (entries staying resident after compaction) and crashes when working directories are deleted (`ENOENT: process.cwd`).
*   **API Quirk Compatibility:** Pi struggles with minor variations in API error messages (e.g., "model is at capacity" vs "currently at capacity"), breaking retry mechanisms.
*   **Terminal & UI Consistency:** Issues persist regarding XDG directory standards on Linux, repaint delays in the TUI, and terminal state restoration on signals like Ctrl+Z/ZSH.
*   **Model Context Mismatches:** Discrepancies between reported catalog sizes and actual session contexts (e.g., the 272K vs 500K `gpt-6.1-sol` issue) confuse compaction strategies and budgeting.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest
**2026-11-19**

---

### 1. Today's Highlights

The Qwen Code project released **v0.28.0-nightly.20261118** overnight, introducing a scheduled loop observation in the full-stack E2E test suite that reveals real-time agent scheduling behavior. More importantly, the managed agent ecosystem saw two significant identity-binding PRs merged in a single day: GitHub and DingTalk ledgers are now unified with their respective control-plane registration identities, closing cross-ownership gaps in the managed-agent architecture.

### 2. Releases

*   **v0.28.0-nightly.20261118.d9ac287c9f** (Released 2026-11-18)
    *   **Summary**: Nightly build featuring an updated E2E test that observes a real scheduled `/loop` fire in the full-stack environment, providing better visibility into agent scheduling mechanics.
    *   **GitHub**: [v0.28.0-nightly.20261118.d9ac287c9f](https://github.com/QwenLM/qwen-code/releases/tag/v0.28.0-nightly.20261118.d9ac287c9f)

### 3. Hot Issues (10 Notable)

1.  **[#11680](https://github.com/QwenLM/qwen-code/issues/11680)** [type/bug] Main CI failed: E2E Tests — no test identified
    *   **Why it matters**: A critical CI failure on `main` where E2E tests produced no test results. With 85 comments, it reflects ongoing stability challenges in the test pipeline.
2.  **[#17769](https://github.com/QwenLM/qwen-code/issues/17769)** [priority/P3] Follow-up: managed DingTalk/GitHub registration-identity deeper concerns
    *   **Why it matters**: Follow-up discussion on the recent identity-binding PRs (#17742, #17775), indicating community concern over the depth of the "cross-ownership" fix.
3.  **[#17798](https://github.com/QwenLM/qwen-code/issues/17798)** [type/bug] Web Shell: long lines in the Changes panel do not wrap
    *   **Why it matters**: Usability bug affecting the Web Shell interface, causing horizontal scrolling in the git diff dialog.
4.  **[#17797](https://github.com/QwenLM/qwen-code/issues/17797)** [type/feature-request] Web Shell: workspace selector chip hidden in live sessions
    *   **Why it matters**: Feature gap where the `Cmd/Ctrl+T` workspace picker is a no-op in live Web Shell sessions.
5.  **[#14629](https://github.com/QwenLM/qwen-code/issues/14629)** [type/feature-request] Telemetry: emit the OpenRouter routing provider as span attributes
    *   **Why it matters**: Feature request for better observability/LLM tracing when using the OpenRouter aggregator.
6.  **[#17713](https://github.com/QwenLM/qwen-code/issues/17713)** [type/bug] fix(web-shell): refuse background-work deletion in the dialog for any row
    *   **Why it matters**: Bug fix ensuring the delete dialog correctly refuses to delete sessions with running background work, improving session safety.
7.  **[#17775](https://github.com/QwenLM/qwen-code/issues/17775)** [type/enhancement] feat(channels): bind the GitHub ledger to its registration identity
    *   **Why it matters**: Implementation of a key architectural change binding the GitHub adapter's ledger to its identity, mirroring previous DingTalk/WeCom adaptations.
8.  **[#17742](https://github.com/QwenLM/qwen-code/issues/17742)** [type/enhancement] (Deferred) managed DingTalk registration-identity deeper concerns
    *   **Why it matters**: The original PR that started the identity-binding series; its deferred review status is tracked here.
9.  **[#17794](https://github.com/QwenLM/qwen-code/issues/17794)** [type/feature-request] feat(web-shell): assemble the daemon chat controller with attempt-bound settlement
    *   **Why it matters**: Part of the unified chat surface assembly, detailing the backend-neutral controller wiring.
10. **[#17789](https://github.com/QwenLM/qwen-code/issues/17789)** [type/perf] perf(core): compact the inline memory and first-request prompts
    *   **Why it matters**: Performance improvement aiming to shorten the main session's file-based memory policy and optimize initial prompt loads.

### 4. Key PR Progress (10 Important)

1.  **[#17800](https://github.com/QwenLM/qwen-code/pull/17800)** test(web-shell): clone gitRemotes in the e2e scenario factory
    *   **Summary**: Corrects an e2e fixture-ownership gap introduced by #17733, ensuring mock daemon scenarios properly clone collections their routes mutate.
2.  **[#17795](https://github.com/QwenLM/qwen-code/pull/17795)** [review/self-reported] feat(managed-agent): clarify Web UI parity and wire local terminal
    *   **Summary**: Adds a central "Managed capabilities" dialog auditing 35 daemon-only surface groups with i18n support, distinguishing tracked gaps from product decisions.
3.  **[#17771](https://github.com/QwenLM/qwen-code/pull/17771)** fix(core): delimit JSONL records after interrupted appends
    *   **Summary**: Ensures complete JSONL records remain readable after interrupted appends by inspecting the final byte and including leading newlines as needed.
4.  **[#17775](https://github.com/QwenLM/qwen-code/pull/17775)** feat(channels): bind the GitHub ledger to its registration identity
    *   **Summary**: Binds the managed GitHub adapter's persisted ledger to its full control-plane registration identity, standardizing the architecture across adapters.
5.  **[#17744](https://github.com/QwenLM/qwen-code/pull/17744)** feat(core): run ACP sessions on the shared agent loop by default
    *   **Summary**: ACP sessions (Zed, VS Code, Web Shell, `qwen serve`) now default to the shared agent loop, unifying prompt and tool batch execution across surfaces.
6.  **[#17713](https://github.com/QwenLM/qwen-code/pull/17713)** [type/bug] fix(web-shell): refuse background-work deletion in the dialog for any row
    *   **Summary**: Modifies the delete dialog to refuse session deletion if background work is running, matching existing sidebar row behavior.
7.  **[#17794](https://github.com/QwenLM/qwen-code/pull/17794)** feat(web-shell): assemble the daemon chat controller with attempt-bound settlement
    *   **Summary**: Lands the daemon adapter's controller assembly for the unified chat surface, wiring provider facts into the `SessionChatController`.
8.  **[#17707](https://github.com/QwenLM/qwen-code/pull/17707)** fix(serve): isolate session deletion from sibling sessions
    *   **Summary**: When deleting a live workspace session, the daemon now waits for the ACK that the recorder has flushed and closed before removing files, preventing data loss.
9.  **[#17789](https://github.com/QwenLM/qwen-code/pull/17789)** perf(core): compact the inline memory and first-request prompts
    *   **Summary**: Shortens the main session's file-based memory policy, omitting an empty memory catalog for fresh sessions and superseding catalog snapshots on live/resumed requests.
10. **[#17799](https://github.com/QwenLM/qwen-code/pull/17799)** docs(approval-mode): say new sessions start in Auto Mode
    *   **Summary**: Updates user documentation to reflect that new sessions start in "Auto Mode" (Ask Permissions in untrusted folders), correcting previous descriptions.

### 5. Feature Request Trends

Analysis of the issue queue reveals a strong focus on **managed agent identity and integration** (3 of the top 10 issues/PRs involve DingTalk/GitHub registration binding), indicating the project's current strategic priority. **Web Shell usability** is also prominent, with multiple requests regarding diff wrapping, workspace selector visibility, and approval dialog layouts. Additionally, there is consistent demand for **improved telemetry and observability** (e.g., OpenRouter span attributes) and **performance optimizations** related to memory and prompt management, suggesting a maturing platform moving toward production stability and polish.

### 6. Developer Pain Points

*   **CI Stability**: Recurrent E2E test identification failures on `main` (#11680) indicate a fragile test pipeline that intermittently produces no results, hindering merge confidence.
*   **Managed Agent Identity Management**: The series of PRs (#17742, #17769, #17775) addresses "cross-ownership" concerns, but the deferred review status and follow-up issues suggest the architecture for binding channel ledgers to registration identities is complex and still being socialized among contributors.
*   **Web Shell Parity**: A cluster of UI bugs (#17798, #17797, #17713) highlights that the Web Shell lags behind the Desktop and CLI counterparts in features like line wrapping, workspace selection, and deletion safety guards.
*   **Session Deletion Safety**: While #17707 addresses a timeout scenario, the recurring need to refine the deletion workflow (ensuring record flush and preventing sibling interference) points to ongoing refinements in session lifecycle management.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

### DeepSeek TUI Community Digest
**Generated on:** 2026-11-19
**Source:** [github.com/Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI)

---

#### 1. Today's Highlights
The community is actively addressing critical stability and performance regressions in the 0.10.x series. Key focus areas include fixing a 209-second TUI freeze during turn transitions and resolving persistent token verification failures after ChatGPT authentication. Notably, two PRs merged today target undo performance and focus management, signaling a push toward polishing the user experience for the upcoming release.

#### 2. Releases
No new releases were published in the last 24 hours. The project remains on v0.10.3, with development currently targeted at resolving the blocker issues identified in the issue tracker prior to the next minor version.

#### 3. Hot Issues (Top 10)
| Issue | Why It Matters | Community Reaction |
| :--- | :--- | :--- |
| [#7357](https://github.com/codewhale-hq/Codewhale/issues/7357) | A race condition causes the entire TUI to freeze for the duration of a new turn (up to 209s), rendering the application unusable during high-frequency turns. | High severity; users report total UI lockup, requiring terminal restart. |
| [#7348](https://github.com/codewhale-hq/Codewhale/issues/7348) | Admission failures prevent turn completion once usage records exceed 256, breaking the core "save" workflow and contradicting the v0.10.3 changelog. | Critical; blocks session persistence and contradicts released claims. |
| [#7356](https://github.com/codewhale-hq/Codewhale/issues/7356) | Sessions with a late-usage ledger >1 MiB cannot be saved at all, causing transcript loss and compaction failures. | Data-loss risk; users report permanent conversation truncation. |
| [#7347](https://github.com/codewhale-hq/Codewhale/issues/7347) | Secret redaction runs on every model request, degrading performance linearly with session length on ordinary text. | Performance bottleneck; affects latency for long-running chats. |
| [#7365](https://github.com/codewhale-hq/Codewhale/issues/7365) | The `opencode-zen` provider gateway returns 429 errors because it enforces an exact payload and TLS cipher list incompatible with free model IDs. | Integration failure; prevents access to listed "free" models. |
| [#7328](https://github.com/codewhale-hq/Codewhale/issues/7328) | Provider failures bury diagnostic information in prose, leaving the error card empty and dropping typed code on failure. | Debuggability issue; makes diagnosing provider errors extremely difficult. |
| [#7344](https://github.com/codewhale-hq/Codewhale/issues/7344) | GNOME Terminal retains CodeWhale's Nord theme colors after exit, breaking the user's terminal profile. | UX polish; cosmetic bug that persists across sessions. |
| [#7343](https://github.com/codewhale-hq/Codewhale/issues/7343) | Window focus triggers a full-screen erase and repaint on terminals without DEC 2026 support, causing visible flicker. | Stability/UX; disrupts workflow on standard terminal emulators. |
| [#7355](https://github.com/codewhale-hq/Codewhale/issues/7355) | Named-turn undo loads the entire turn store twice, making undo operations O(n) and sluggish on deep threads. | Quality-of-life; degrades responsiveness in long-running sessions. |
| [#7203](https://github.com/codewhale-hq/Codewhale/issues/7203) | Post-auth ChatGPT token verification fails, reporting `active source: missing` despite successful browser sign-in. | Authentication blocker; prevents users from leveraging ChatGPT provider. |

#### 4. Key PR Progress (Top 10)
| PR | Summary |
| :--- | :--- |
| [#7366](https://github.com/codewhale-hq/Codewhale/pull/7366) | **Fix: Snapshot rollback.** Uses existing safety snapshots to roll back partial file-scoped restores, preventing workspace inconsistencies after failed checkouts. |
| [#7363](https://github.com/codewhale-hq/Codewhale/pull/7363) | **Fix: Focus recapture.** Separates focus restoration from viewport clearing, preventing the intermediate blank screen on terminals ignoring DEC 2026. |
| [#7362](https://github.com/codewhale-hq/Codewhale/pull/7362) | **Fix: Named-turn undo.** Reuses previously loaded history records, eliminating the double-read of turn files and improving undo performance on deep threads. |
| [#7360](https://github.com/codewhale-hq/Codewhale/pull/7360) | **Fix: Bound terminal snapshot.** Limits snapshot waits to a 2-second timeout, preventing the TUI from freezing while the Engine processes a new turn. |
| [#7337](https://github.com/codewhale-hq/Codewhale/pull/7337) | **Dep: jsonschema bump.** Upgraded from 0.57.0 to 0.61.2 to address schema validation and compatibility improvements. |
| [#7336](https://github.com/codewhale-hq/Codewhale/pull/7336) | **Dep: lru bump.** Upgraded from 0.18.5 to 0.19.0 for improved cache efficiency in core data structures. |
| [#7340](https://github.com/codewhale-hq/Codewhale/pull/7340) | **Feat: Synap provider.** Added Synap as a bundled compatible-host descriptor with OpenAI-compatible chat endpoints and model discovery. |
| [#7332](https://github.com/codewhale-hq/Codewhale/pull/7332) | **Dep: GitHub Action bump.** Updated `softprops/action-gh-release` to 3.0.4 for improved release pipeline stability. |
| [#7335](https://github.com/codewhale-hq/Codewhale/pull/7335) | **Dep: Java runtime bump.** Updated `actions/setup-java` to 6.2.0, aligning with upstream security and performance patches. |
| [#7367](https://github.com/codewhale-hq/Codewhale/pull/7367) | **Fix: Localization.** Translated remaining hard-coded English strings (tool labels, /help, /diff, composer) into locale packs for all 15 language packs, resolving misalignment in zh-Hans builds. |

#### 5. Feature Request Trends
The issue data reveals a strong momentum toward **stability and polish** over new functionality.
*   **Performance & Resource Management:** A cluster of issues (#7347, #7356, #7355) targets the exponential cost of secret redaction, session compaction limits (1 MiB), and undo operations. The community is prioritizing efficiency to support long-running, deep-thread interactions.
*   **Cross-Platform & Terminal Fidelity:** Several bugs (#7343, #7344, #7363) focus on terminal compatibility, specifically GNOME terminal behavior, DEC 2026 support, and color profile persistence. This suggests a user base heavily invested in Linux/GNOME workflows.
*   **Provider & Authentication Reliability:** Issues #7203 and #7365 highlight friction points in provider integration—specifically ChatGPT token validation and gateway cipher lists. Resolving these is critical for users relying on multi-provider or free-tier models.

#### 6. Developer Pain Points
*   **The "Freeze-and-Fail" Cycle:** Users encounter a sequence where the TUI freezes during a turn transition (#7357), followed by an admission failure preventing save (#7348), and ultimately a ledger overflow that stops persistence entirely (#7356). This triad of bugs creates a scenario where active sessions are both unresponsive and prone to data loss.
*   **Opaque Error Handling:** When providers fail, the system drops typed code and hides the root cause in English prose rather than structured logs (#7328). This forces developers to hunt through session records to diagnose why a request failed.
*   **Redaction Overhead:** The `prepare_model_bound_request` pipeline re-applies secret redaction on every single model call (#7347), meaning latency grows with conversation history, penalizing long-context usage even when no secrets are present.

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*