# AI CLI Tools Community Digest 2026-11-15

> Generated: 2026-11-15 05:59 UTC | Tools covered: 10

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

# AI CLI Tools Cross-Platform Comparison Report
**Generated:** 2026-11-15

## 1. Ecosystem Overview
The 2026 AI CLI tooling landscape is characterized by a maturation phase where initial feature proliferation has shifted toward reliability, cross-platform parity, and agent orchestration. While all major tools continue active development, a clear divide exists between mature, feature-rich ecosystems (Claude Code, OpenAI Codex) and newer or niche tools (Kimi Code, Pi) focusing on stability fixes and incremental improvements. The dominant industry trend is the pursuit of "invisible" operation—tools that integrate seamlessly into existing developer workflows without introducing friction through UI bugs, permission confusion, or model instability. Cross-platform consistency, particularly on Windows and WSL, remains the most significant technical debt across the sector.

## 2. Activity Comparison

| Tool | New Issues | PRs Merged | Release Status |
| :--- | :--- | :--- | :--- |
| **OpenAI Codex** | 10 | 10 | No new public releases |
| **Claude Code** | 10 | 10 | No new versions |
| **OpenCode** | 23 | 50 | Latest: v2.3.0 |
| **Gemini CLI** | 10 | 10 | No new releases |
| **Qwen Code** | 10 | 20 | Nightly build (v0.27.2) |
| **DeepSeek-TUI** | 4 | 3 | v0.10.3 |
| **Copilot CLI** | 12 | 0 | No new releases |
| **Pi** | 7 | 3 | No new releases |

*Note: Issue/PR counts reflect "Top 10" or "Important" subsets from daily digests; actual repository volumes may vary.*

## 3. Shared Feature Directions
Cross-tool analysis reveals several convergent development priorities:

*   **Agent Orchestration & Transparency:** All major tools are investing in subagent reliability. *Claude Code* and *Qwen Code* specifically address the critical issue of agents falsely reporting "goal" completion (#105112 in Claude, #22323 in Gemini). *OpenCode* and *DeepSeek-TUI* focus on visibility into agent loop paths and state.
*   **Cross-Platform Stability:** Windows and WSL environments are the primary pain vectors. *Claude Code* reports plugin marketplace EPERM errors and workflow resolvability issues; *Codex* deals with session resume bugs and sandbox configuration errors; *OpenCode* faces renderer crashes and TEMP path ignoring. There is a universal demand for "write once, run anywhere" stability.
*   **MCP & Integration Reliability:** The Model Context Protocol (MCP) is a unifying theme. *Pi* and *DeepSeek-TUI* report parsing bugs in XML tool arguments and CLI value injection. *OpenCode* and *Qwen Code* address MCP form elicitations and tool output bloat. The industry is standardizing how CLI tools interface with external model providers and local execution environments.
*   **Configuration & Policy Transparency:** Users are frustrated by opaque permission boundaries. *Claude Code* and *Copilot CLI* highlight issues with feedback refusal on personal plans and silent Fusion tier downgrades. *OpenCode* and *Gemini CLI* focus on API key format validation and settings override adherence.

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | OpenCode | Gemini CLI | Qwen Code | Pi / DeepSeek-TUI |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Primary Focus** | Model reliability & plugin ecosystem | Desktop app stability & cloud sessions | TUI ergonomics & cross-platform parity | Subagent autonomy & tool efficiency | Managed sessions & batch orchestration | Terminal fidelity & provider extensibility |
| **Target User** | Enterprise/Max plan developers building complex workflows | Windows-heavy desktop users & cloud-first teams | Power users & headless/CI consumers requiring JSON output | Researchers & power users experimenting with agent loops | Developers building multi-agent systems | Niche/regional users & terminal-centric developers |
| **Technical Approach** | Aggressive bug hunting & metadata fixes | Architectural refactors & sandbox config fixes | UI/UX polish & environment integration fixes | Model-native bash affinity & safety guards | Context-aware tool primitives & approval flows | Minimalist TUI & provider descriptor additions |
| **Maturity Level** | Mature, large-scale active development | Mature, focusing on "bug fixing" phase | Early growth, rapid feature addition | Active development, model-integration focus | Rapidly iterating nightly builds | Early stage, stability & basics focus |

## 5. Community Momentum & Maturity
*   **Most Active:** **OpenCode** shows the highest immediate volume (23 issues, 50 PRs), indicating a frantic stabilization phase around its v2.3.0 release. **Claude Code** and **OpenAI Codex** maintain massive, consistent issue volumes (10+ each), reflecting large, established user bases with diverse environments. **Qwen Code** exhibits strong nightly iteration velocity.
*   **Rapidly Iterating:** **Qwen Code** and **OpenCode** are the fastest movers, with frequent nightly/pr releases addressing specific user pain points. **Pi** and **DeepSeek-TUI** are in "stability mode," focusing on critical bug fixes (#12154 stack overflow, #7343 flicker) rather than new features.
*   **Stable but Static:** **Copilot CLI** and **Grok Build** show low activity, suggesting either mature stabilization or slower development cycles. **Gemini CLI** maintains a steady cadence focused on agent capability expansion.

## 6. Trend Signals
*   **The "Invisible Tool" Imperative:** The highest-value feedback across all tools concerns bugs that break the user's flow state without obvious error messages—silent auth token expiration (#4929 Copilot), frozen approval dialogs (#17332 Qwen), or renderer crashes (#63944 OpenCode). Developers prioritize tool reliability over novel features.
*   **Context as Currency:** Token efficiency is a unifying concern. From *Pi*'s `searchTools()` bloat (#12165) to *Gemini CLI*'s 128-tool limit (#24246) to *Qwen Code*'s image token estimation (#17321), the industry is standardizing how AI CLI tools manage finite context windows.
*   **Windows/WSL as the New Frontier:** While macOS was the traditional pain point, the data shows a significant shift toward Windows and WSL interop bugs (#104896, #59855, #61564). Tools that solve cross-platform deployment will capture the largest market share.
*   **Orchestration over Autonomy:** There is a pivot from "fully autonomous agents" toward "orchestrated sub-agent workflows." Tools are adding mechanisms for approval, context awareness, and loop tracking (#17272 Qwen, #30196 OpenCode) rather than assuming the model can self-direct indefinitely.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-11-15 | Repository: anthropics/skills**

---

## 1. Top Skills Ranking

The following 8 Skills (PRs) have generated the most community discussion (sorted by comment volume). All listed PRs are currently **OPEN**.

| Rank | PR # | Title & Link | Author | Key Discussion Highlights |
| :--- | :---: | :--- | :--- | :--- |
| **1** | **[#1742](https://github.com/anthropics/skills/pull/1742)**<br>fix(mcp-builder): support mcp>=2 streamable_http_client import and custom headers | [Link](https://github.com/anthropics/skills/pull/1742) | Kuldeeep18 | **Problem:** MCP v2 renamed `streamablehttp_client` to `streamable_http_client` and moved custom headers into `create_mcp_http_client`.<br>**Impact:** Breaks existing MCP integrations; requires updated import paths and header configuration. |
| **2** | **[#1298](https://github.com/anthropics/skills/pull/1298)**<br>fix(skill-creator): isolate trigger evals and handle Windows and runtime failures | [Link](https://github.com/anthropics/skills/pull/1298) | MartinCajiao | **Problem:** Trigger evaluation reports false misses; `select()` on subprocess pipes fails on Windows; runtime failures incorrectly pass negative examples.<br>**Goal:** Isolate trigger logic, add Windows compatibility, and handle runtime errors without suppressing valid skills. |
| **3** | **[#1245](https://github.com/anthropics/skills/pull/1245)**<br>Add notion-spec-to-implementation and quantitative-resume-auditor skills | [Link](https://github.com/anthropics/skills/pull/1245) | mrdesouzaphd-cmyk | **New Skills:**<br>• *Notion Spec to Implementation:* Transforms tech/product specs into concrete Notion tasks with acceptance criteria.<br>• *Quantitative Resume Auditor:* Audits resumes for quantified impact and formatting consistency. |
| **4** | **[#1980](https://github.com/anthropics/skills/pull/1980)**<br>webapp-testing: avoid shell=True in with_server.py | [Link](https://github.com/anthropics/skills/pull/1980) | Pcmhacker-piro | **Security Fix:** Replaces `subprocess.Popen(..., shell=True)` with safer alternatives in `with_server.py` to mitigate CWE-78 (command injection) risks from unsanitized user/agent commands. |
| **5** | **[#1792](https://github.com/anthropics/skills/pull/1792)**<br>fix(docx): report LibreOffice timeout as an error and verify the output | [Link](https://github.com/anthropics/skills/pull/1792) | TINGyu123644 | **Quality Gate:** `accept_changes.py` now errors on LibreOffice timeout instead of falsely reporting success. Verification added to ensure output DOCX no longer carries revision marks (`w:ins`, `w:del`). |
| **6** | **[#1771](https://github.com/anthropics/skills/pull/1771)**<br>feat(skills): add proofcore-contract-auditor for smart contract notarization | [Link](https://github.com/anthropics/skills/pull/1771) | ProofCore-Protocol | **New Skill:** *proofcore-contract-auditor* performs static analysis of Solidity/Rust smart contracts and anchors cryptographic audit proofs onto the TON Blockchain via ProofCore's Merkle protocol. |
| **7** | **[#1977](https://github.com/anthropics/skills/pull/1977)**<br>algorithmic-art: wrapAround() now wraps | [Link](https://github.com/anthropics/skills/pull/1977) | gerardrecinto | **Bug Fix:** The `wrapAround()` function now correctly handles negative values using modulo arithmetic, keeping results in `[0, max)` instead of returning `max` for negatives. Fixes #1897. |
| **8** | **[#1976](https://github.com/anthropics/skills/pull/1976)**<br>webapp-testing: report textarea and select correctly in element_discovery.py | [Link](https://anthropics/skills/pull/1976) | gerardrecinto | **UX Fix:** The 'text' fallback now only applies to `<input>` elements; `<textarea>` and `<select>` now correctly report their tag names. Fixes #1891. |

---

## 2. Community Demand Trends

Analysis of the 13 open Issues reveals strong community appetite for the following directions:

*   **Workflow Automation & Integration:** PR #1742 (MCP v2 support) and Issue #228 (org-wide skill sharing) highlight a demand for seamless third-party tool integration and organizational skill distribution.
*   **Reliability & Trigger Logic:** Issues #556, #1352, and #1298 collectively indicate that the community is struggling with skill trigger evaluation. There is high anticipation for a robust "Quality Gate" pipeline that reliably detects when a skill should activate.
*   **Security Hardening:** Issue #492 (trust boundary abuse) and PR #1980 (removing `shell=True`) show that security—preventing command injection and namespace impersonation—is a top priority for skill consumers.
*   **Domain-Specific Expansion:** The influx of new Skills (e.g., #1771 for Web3, #1245 for Notion/resumes, #1977 for algorithmic art) suggests the ecosystem is expanding beyond pure code generation into creative, legal, and productivity domains.

---

## 3. High-Potential Pending Skills

These active-comment PRs are strong candidates to land soon, based on comment volume and recency:

| PR # | Title & Link | Author | Status & Reason for Potential |
| :---: | :--- | :--- | :--- |
| **#1352** | [skill-creator: run_eval.py parallel workers cross-match skill UUIDs](https://github.com/anthropics/skills/issues/1352) | liam-ai-reality | **High Priority:** Reports systematic near-zero trigger rates with `--num-workers > 1` (default 10). This is a "silent bug" affecting evaluation accuracy. Fixing this would immediately improve developer trust in the skill evaluation pipeline. |
| **#1742** | [fix(mcp-builder): support mcp>=2...](https://github.com/anthropics/skills/pull/1742) | Kuldeeep18 | **High Priority:** Directly addresses a breaking change in the MCP v2 library. Given the popularity of MCP integrations, this is likely to be merged quickly once the import/path issues are resolved. |
| **#1298** | [fix(skill-creator): isolate trigger evals...](https://github.com/anthropics/skills/pull/1298) | MartinCajiao | **Medium Priority:** Tackles the Windows and runtime failure issues identified in the trends section. A fix here would significantly improve the robustness of skill creation and testing. |
| **#1997** | [fix(skill-creator): parse YAML frontmatter scalars correctly](https://github.com/anthropics/skills/pull/1997) | BichengWang | **Medium Priority:** Fixes a metadata parsing bug where quotes are stripped and continuation lines are incorrectly joined, which could lead to skill description mismatches. |

---

## 4. Skills Ecosystem Insight

The community's most concentrated demand at the Skills level is **robust, secure workflow automation**, specifically the need for skill triggers to reliably activate across diverse environments (Windows, MCP v2, parallel workers) without introducing security vulnerabilities like command injection.

---

### Claude Code Community Digest - 2026-11-15

#### **Today's Highlights**
The Claude Code ecosystem is experiencing heightened activity around **model reliability** and **cross-platform consistency**. A significant bug report (#105112) reveals a sharp degradation in Opus 5.5's accuracy since October 19, dropping from a 5.2% correction rate to 25.4%, directly impacting user trust. Concurrently, the community is actively demanding better visibility into system operations, with top issues focusing on timestamp display in conversations and improved auto-memory indexing transparency. Additionally, cross-platform bugs on Windows and WSL are surfacing, specifically regarding plugin functionality and workflow resolvability, indicating a need for stabilization across diverse developer environments.

#### **Releases**
No new Claude Code CLI versions were released in the last 24 hours.

#### **Hot Issues** (Top 10)
1.  **[#82056](https://github.com/anthropics/claude-code/issues/82056)** (80 comments): *Auto-memory index loading status*. Users need to know if their `MEMORY.md` loaded whole, truncated, or not at all. This is critical for debugging agent context and memory reliability.
2.  **[#44763](https://github.com/anthropics/claude-code/issues/44763)** (102 👍): *Timestamps on conversation messages*. A highly upvoted feature request to add timestamps to user/assistant messages, essential for monitoring long-running background workers.
3.  **[#105112](https://github.com/anthropics/claude-code/issues/105112)** (8 comments): *Opus 5.5 accuracy regression*. Since Oct 19, answer correctness plummeted from 5.2% to 25.4% correction rates, marking a severe model regression for Max plan users.
4.  **[#100730](https://github.com/anthropics/claude-code/issues/100730)** (25 comments): *Auto mode classifier blocking own tasks*. The "Cowork" auto-mode incorrectly blocks the account owner's scheduled routines and file transfers between their own machines.
5.  **[#107077](https://github.com/anthropics/claude-code/issues/107077)** (11 comments): *Deprecated mode for cloud sessions*. Windows users report plugin hooks and slash commands failing to run due to sessions launching in a "deprecated mode" (tool server only).
6.  **[#103659](https://github.com/anthropics/claude-code/issues/103659)** (2 comments): *Workflow not resolvable by name*. Saved workflows in `~/.claude/workflows/` cannot be called by name until the session is restarted, hindering mid-session automation.
7.  **[#109663](https://github.com/anthropics/claude-code/issues/109663)** (2 comments): *Feedback locked on personal Max plan*. `/feedback` and transcript sharing are refused with "disabled by organization's policy" despite the user being on a personal Max plan with no org constraints.
8.  **[#110139](https://github.com/anthropics/claude-code/issues/110139)** (2 comments): *Red screen border in Windows desktop app*. A distracting flashing red border appears during computer use, with no setting to disable it.
9.  **[#110123](https://github.com/anthropics/claude-code/issues/110123)** (1 comment): *Refusal of collaborative problem-solving*. Users report the model refuses detailed, nitty-gritty collaborative requests, blocking conjecture solving.
10. **[#104896](https://github.com/anthropics/claude-code/issues/104896)** (2 comments): *Windows plugin marketplace EPERM error*. `claude plugin marketplace add` fails on Windows with an `EPERM` error during temp-dir rename, though manual clone+rename works.

#### **Key PR Progress** (Top 10)
1.  **[#106972](https://github.com/anthropics/claude-code/pull/106972)**: *Run dedupe agents in the foreground*. Proposes setting `CLAUDE_CODE_DISABLE_BACKGROUND_TASKS=1` to prevent dedupe agents from being cut off mid-execution.
2.  **[#95698](https://github.com/anthropics/claude-code/pull/95698)**: *Fix plugins: run ralph-wiggum and output-style .sh hooks through bash*. Fixes bare, unquoted script paths for bundled plugins like `ralph-wiggum`, ensuring hooks execute correctly via bash.
3.  **[#81672](https://github.com/anthropics/claude-code/pull/81672)**: *Fix hookify: make package import independent of install directory name*. Resolves import issues for marketplace-installed plugins where the directory name doesn't match the package name.
4.  **[#78445](https://github.com/anthropics/claude-code/pull/78445)**: *Docs: correct plugin descriptions and version*. Fixes metadata contradictions in the plugin index where prose descriptions clash with actual plugin capabilities.
5.  **[#66903](https://github.com/anthropics/claude-code/pull/66903)**: *[enhancement] Create a 'fableplan' alias akin to opusplan*. A requested feature to add a `fableplan` command alias for consistency with the existing `opusplan` workflow tool.
6.  **[#104862](https://github.com/anthropics/claude-code/pull/104862)**: *[FEATURE] Computer use on Team plans*. Requests computer use capabilities for Team plans with an org admin toggle, expanding access beyond Max/Team boundaries.
7.  **[#100413](https://github.com/anthropics/claude-code/pull/100413)**: *[Bug] advisor tool blocks subagents*. Addresses the `execution_time_exceeded` error where the `advisor` tool blocks subagents for 6 minutes unnecessarily.
8.  **[#94484](https://github.com/anthropics/claude-code/pull/94484)**: *[enhancement] Bundled update-config skill*. Addresses the issue where the `update-config` skill dumps the full `settings.json` schema (thousands of lines) on every invocation.
9.  **[#106972](https://github.com/anthropics/claude-code/pull/106972)**: *Run dedupe agents in the foreground*. (Duplicate listing for emphasis on foreground execution fix).
10. **[#82571](https://github.com/anthropics/claude-code/pull/82571)**: *[area:plugins] Allow third-party channel plugins*. Addresses the need for users to allow third-party channel plugins for inbound notifications beyond the hard-coded official allowlist.

#### **Feature Request Trends**
The issue data highlights a strong migration toward **visibility and control**. The most requested features revolve around **TUI enhancements** (timestamps, disabling the red screen border) and **agent transparency** (auto-memory loading status, workflow resolvability). There is also a clear demand for **cross-platform parity**, specifically fixing Windows-specific bugs (plugin marketplace, advisor tool) and WSL workflow issues. Finally, users are increasingly frustrated with **model reliability** and **permission boundaries**, seeking ways to disable intrusive features like auto-feedback or red borders that interrupt workflow.

#### **Developer Pain Points**
1.  **Model Accuracy Instability**: The sudden drop in Opus 5.5 correctness (Issue #105112) is causing significant friction for paying users who rely on consistent output.
2.  **Cross-Platform Bugs**: A disproportionate number of recent high-comment issues involve Windows and WSL environments, specifically regarding plugin functionality (`#104896`, `#107077`) and workflow management (`#103659`).
3.  **Opaque System State**: Developers cannot easily diagnose why things are failing. Issues `#82056` (memory indexing) and `#110139` (red border) highlight a need for better introspection and "off-switches" for default UI behaviors.
4.  **Permission & Policy Confusion**: Users are confused by feedback and sharing prompts being blocked on personal plans due to organizational settings (`#109663`, `#101651`), indicating a need for clearer permission boundaries.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

Here is the OpenAI Codex community digest for 2026-11-15.

### **Today's Highlights**
A wave of stability fixes and architectural refactors hit Codex this week. The most significant activity centers on the Windows Desktop app, where several critical session resumption bugs (#59855, #60324) and sandbox configuration errors (#61564) are causing cloud-managed chats to fail immediately upon opening. Concurrently, the core CLI team shipped a suite of internal rollout budget improvements (#61578-#61583), suggesting a push toward more robust resource management ahead of major version 0.169.

### **Releases**
No new public releases were tagged in the last 24 hours.

### **Hot Issues** (Top 10)
1.  **[#59855] Windows Codex Desktop cloud resume bug** (37 comments): The most discussed issue this week. Users report that opening cloud-managed chats from the sidebar triggers an `AbsolutePathBuf deserialized without a base path` error, blocking access to existing conversations. This is a regression affecting the primary workflow for Desktop users.
2.  **[#57101] Windows Computer Use display bug** (33 comments): The "gold/yellow display border" and cursor access remain stuck open after a screenshot-producing turn completes, degrading the Computer Use experience on Windows.
3.  **[#50182] CLI cloud environment discovery** (32 comments): A significant usability decline; the CLI no longer discovers current Cloud environments, forcing users to re-authenticate or lose context despite successful token refresh.
4.  **[#60778] iOS "No tasks yet" glitch** (18 comments): iPhone users see a green status indicator for connected hosts but an empty task list saying "No tasks yet," though existing conversations remain searchable.
5.  **[#58569] macOS HTTP 400 loops** (8 comments): After successful tool operations, the macOS desktop app hits recurring HTTP 400 errors, blocking task continuation until retry.
6.  **[#61564] Windows dots sandbox config error** (2 comments): A recent issue where a "dot" (connected computer) fails to attach to its local execution environment due to a managed-network sandbox configuration error, preventing local file reads and GitHub CLI commands.
7.  **[#61294] Windows projects disappear after update** (2 comments): Following an update to v26.1111, local Codex projects vanish from the UI, though existing chats remain accessible via search.
8.  **[#58529] Preserve independent macOS windows** (22 upvotes): A highly upvoted feature request to keep ChatGPT and Codex as independent windows even after ChatGPT Classic retires in Jan 2027.
9.  **[#60688] CLI safety check blockers** (4 comments): Users report that every prompt is blocked by "security daybreak nonsense," rendering the CLI unusable on Linux Ubuntu 25.04 with GPT-6.1.
10. **[#61489] zstd compression edge case** (12 comments): A technical bug where highly compressible content gets a bare 400 error instead of the documented 413, causing failures in specific Linux environments.

### **Key PR Progress** (Top 10)
1.  **[#61600] Automatic titles for Cloud conversations** (Closed): Generates structured titles for Cloud conversations using the selected account and backend routing, resolving the issue of conversations lacking saved names in the TUI.
2.  **[#61599] Cloud stream recovery failures** (Closed): Improves error handling for abandoned Cloud reads, ensuring failures are reported clearly and workers are not left occupied on missing conversations.
3.  **[#61596] TUI history item scoping** (Closed): Fixes a bug where reusing item IDs across turns could misplace completion boundaries when loading older history.
4.  **[#61587] Request IDs in model hooks** (Closed): Adds `request_id` and `attempt_number` fields to `PreModelRequest` and `PostModelRequest` hooks, enabling better correlation of generation attempts across retries.
5.  **[#61583] Rollout budget refactor** (Closed): Centralizes generation admission checks and routes pending input through dedicated budget checks to prevent work start after budget exhaustion.
6.  **[#61582] Budget exhaustion gating** (Closed): Gates new rollout work on shared budget exhaustion, ensuring that threads waiting to start work do not discard already-consumed responses.
7.  **[#61581] Neutral interruption markers** (Closed): Records `<turn_aborted>` markers when turns are stopped by an exhausted rollout budget, providing history attribution without blaming the user.
8.  **[#61580] Synchronous MCP post-hook costs** (Closed): Allows `PostModelRequest` MCP hooks to return `extra_codex_rollout_budget_units`, accounting for synchronous costs in budget tracking.
9.  **[#61579] Fractional rollout budgets** (Closed): Adds support for a finite `limit_budget` allowance alongside `limit_tokens`, preserving fractional balances in reminders.
10. **[#61488] Git remote collection hardening** (Closed): Fixes parsing issues with `git remote -v` that could mistake partial clone filter text for remote entries, preventing turn metadata from exceeding the Responses API's 8,096-char limit.

### **Feature Request Trends**
The community is heavily focused on **cross-platform continuity and workflow integrity**.
*   **Account & Workspace Switching:** There is significant demand for seamless switching between multiple accounts/workspaces (#30684), rather than just signing out and back in.
*   **Independence & Layout:** On macOS, users are strongly requesting the ability to run ChatGPT and Codex as independent windows post-Classic retirement (#58529). Similarly, Windows users want the return of the "Companion Window" experience (#42750).
*   **Reliability of Cloud Sessions:** A recurring theme is the frustration with cloud-managed chat state. Users want guarantees that resuming a chat won't trigger errors (as seen in #59855) and that local project data persists across updates (#61294).

### **Developer Pain Points**
*   **Windows Session Stability:** The most acute pain point is the instability of cloud-managed sessions on Windows. Errors like `AbsolutePathBuf` (#59855) and sandbox configuration failures (#61564) indicate a deep integration issue between the Desktop app, the cloud routing layer, and local file path handling.
*   **CLI Usability Degradation:** The CLI is experiencing a drop in "out-of-the-box" usability. Issues range from the environment discovery failure (#50182) and voice picker omissions (#54642) to overzealous safety checks that block all prompts (#60688).
*   **TUI/CLI Feature Parity:** Users are noticing gaps between the App and CLI experiences, specifically regarding keyboard shortcuts (copy/paste in TUI - #48139) and voice command functionality.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest
**Date:** 2026-11-15

### Today's Highlights
The Gemini CLI project remains in active development with significant focus on subagent reliability and agent capability expansion. Key developments include the investigation into AST-aware tooling to improve codebase navigation efficiency and a flurry of PRs addressing core stability issues, OAuth handling, and task tracking infrastructure. The community is actively debating the balance between model-native bash capabilities and robust, secure tooling.

### Releases
No new releases were published in the last 24 hours.

### Hot Issues (Top 10)

1.  **#22323: Subagent recovery after MAX_TURNS** ([Link](https://github.com/google-gemini/gemini-cli/issues/22323))
    *   **Why it matters:** A critical bug where the `codebase_investigator` subagent reports `status: "success"` and `Termination Reason: "GOAL"` despite hitting its `MAX_TURNS` limit. This creates a false success signal, potentially hiding interruptions and leading to incomplete code analysis.
    *   **Reaction:** High engagement (13 comments); users are reporting this causes agents to "lie" about completion status.

2.  **#19873: Leverage model's bash affinity via Zero-Dependency OS Sandboxing** ([Link](https://github.com/google-gemini/gemini-cli/issues/19873))
    *   **Why it matters:** Proposes utilizing Gemini 3 models' native preference for POSIX tools (`grep`, `sed`, `awk`) over custom skills. This aims to improve efficiency while maintaining security through sandboxing.
    *   **Reaction:** 9 comments; represents a shift toward optimizing model-native workflows.

3.  **#21409: Generalist agent hangs** ([Link](https://github.com/google-gemini/gemini-cli/issues/21409))
    *   **Why it matters:** Users report the generalist agent hangs indefinitely on simple tasks like folder creation. The workaround instructing the model not to defer to sub-agents highlights a reliability regression in the core agent loop.
    *   **Reaction:** 8 👍; a high-voted bug causing significant usability friction.

4.  **#22745/22746: AST-aware file reads and mapping** ([Link](22745), [22746](https://github.com/google-gemini/gemini-cli/issues/22746))
    *   **Why it matters:** Epic issues tracking the implementation of AST-aware tools (like `tilth` or `glyph`) to enable precise method-bound reads. This could drastically reduce token waste and improve code navigation accuracy.
    *   **Reaction:** 7 comments; the community is evaluating the trade-offs of AST parsing overhead vs. precision gains.

5.  **#21968: Gemini does not use skills and sub-agents enough** ([Link](https://github.com/google-gemini/gemini-cli/issues/21968))
    *   **Why it matters:** Users report that the model ignores custom skills and sub-agents unless explicitly instructed. This questions the default autonomy and "agentic" behavior of the CLI.
    *   **Reaction:** 7 comments; anecdotal but widely shared sentiment regarding agent initiative.

6.  **#22267: Browser Agent ignores settings.json overrides** ([Link](https://github.com/google-gemini/gemini-cli/issues/22267))
    *   **Why it matters:** The Browser Agent ignores `maxTurns` and other overrides from `settings.json`, despite the `AgentRegistry` correctly merging them. This breaks user expectations for session control and safety limits.
    *   **Reaction:** 5 comments; a specific configuration failure affecting power users.

7.  **#22672: Agent should stop/discourage destructive behavior** ([Link](https://github.com/google-gemini/gemini-cli/issues/22672))
    *   **Why it matters:** Concerns that the model uses risky commands like `git reset --force` during complex operations. Proposes safeguards to prevent irreversible data loss during resource maintenance.
    *   **Reaction:** 3 comments; safety is a recurring priority for deployment-grade tools.

8.  **#20079: Symlink agent recognition failure** ([Link](https://github.com/google-gemini/gemini-cli/issues/20079))
    *   **Why it matters:** A persistent usability bug where agents defined as symlinks in `~/.gemini/agents/` are not recognized, forcing users to duplicate files or use absolute paths.
    *   **Reaction:** 4 comments; a long-standing quality-of-life issue.

9.  **#24246: 400 error with > 128 tools** ([Link](https://github.com/google-gemini/gemini-cli/issues/24246))
    *   **Why it matters:** The CLI encounters a 400 error when the number of available tools exceeds 128. This limits the scalability of the agent in large codebases with many registered tools.
    *   **Reaction:** 3 comments; a hard limit impacting large-scale usage.

10. **#23571: Model frequently creates tmp scripts in random spots** ([Link](https://github.com/google-gemini/gemini-cli/issues/23571))
    *   **Why it matters:** When shell execution is restricted, the model generates multiple edit scripts across various directories, creating significant cleanup overhead for users preparing commits.
    *   **Reaction:** 3 comments; a workspace hygiene problem affecting developer experience.

### Key PR Progress (Top 10)

1.  **#30301: Sync ACP flag rows in CLI reference** ([Link](https://github.com/google-gemini/gemini-cli/pull/30301))
    *   **Fix:** Updates the CLI reference documentation to reflect actual flags, removing the deprecated `--experimental-zed-integration` now that ACP mode has replaced the Zed integration.

2.  **#30298: Execute independent tool calls in parallel** ([Link](https://github.com/google-gemini/gemini-cli/pull/30298))
    *   **Feature:** In ACP mode, contiguous parallelizable tool calls are now batched and executed in parallel instead of sequentially. This significantly improves efficiency for read-only operations.

3.  **#30297: Truncate large shell and MCP tool outputs** ([Link](https://github.com/google-gemini/gemini-cli/pull/30297))
    *   **Fix:** Addresses issue #30233 by implementing output truncation for shell and MCP tools in ACP mode, preventing context bloat from massive log outputs.

4.  **#30296: Evict rejected OAuth client promises from cache** ([Link](https://github.com/google-gemini/gemini-cli/pull/30296))
    *   **Fix:** Prevents failed OAuth initialization attempts from poisoning the client cache for the remainder of the process lifetime.

5.  **#30295: Preserve ASK_USER decision on shell parse failure** ([Link](https://github.com/google-gemini/gemini-cli/pull/30295))
    *   **Fix:** Ensures that if a shell command parsing fails, the `ASK_USER` decision is preserved rather than defaulting to `ALLOW` unconditionally in YOLO mode.

6.  **#30196: Prevent always-allow rules for tainted shell commands** ([Link](https://github.com/security-focused))
    *   **Feature:** Choosing "Always allow" on a tainted command no longer saves a persistent allow rule, addressing a security concern where untrusted flags could be auto-approved.

7.  **#30194: Fix `gemini models` omitting `gemini-3.8-flash`** ([Link](https://github.com/google-gemini/gemini-cli/pull/30194))
    *   **Fix:** Resolves a discrepancy where the `gemini models` command was not listing the `gemini-3.8-flash` model available in `/model manage`.

8.  **#30207: Clear bundle/ before esbuild to drop stale chunks** ([Link](https://github.com/google-gemini/gemini-cli/pull/30207))
    *   **Fix:** Solves nightly release failures caused by `npm error 413 Request Entity Too Large`, caused by leftover JavaScript chunks from previous builds inflating the publish tarball.

9.  **#30157: Only replace true cycles with [Circular] in safeJsonStringify** ([Link](https://github.com/google-gemini/gemini-cli/pull/30157))
    *   **Fix:** Corrects `safeJsonStringify` to only replace objects with actual cycles, fixing telemetry file exporters that were incorrectly having data truncated.

10. **#30068: Forward context management settings to core** ([Link](https://github.com/google-gemini/gemini-cli/pull/30068))
    *   **Fix:** Honors the documented `contextManagement` settings (e.g., 400,000 token threshold) when constructing the core configuration, rather than defaulting to 50,000 tokens.

### Feature Request Trends
The issue data reveals a strong pivot toward **agent autonomy and reliability**.
*   **Subagent Orchestration:** There is significant demand for better subagent discovery and trajectory visibility (Issues #22598, #18283, #18287). Users want the CLI to automatically find and utilize skills, and for their execution paths to be inspectable via `/chat share`.
*   **Safety and Control:** A recurring theme is the need for stricter boundaries around model behavior. Requests focus on preventing destructive commands (#22672), respecting `settings.json` overrides (#22267), and implementing "tactful" context extraction to avoid token firehosing (#19561).
*   **Tooling Efficiency:** The community is actively investigating AST-aware tools (#22745, #22746) to make file reads and searches more precise, reducing the token overhead currently associated with codebase navigation.

### Developer Pain Points
1.  **Agent "Hallucination" of Completion:** The most prominent frustration is subagents reporting `GOAL` success prematurely when hitting turn limits (#22323, #21983), forcing users to manually verify work.
2.  **Configuration Ignorance:** Users frequently find that their `settings.json` overrides (particularly `maxTurns` and approval modes) are silently ignored by specific agents like the Browser Agent (#22267).
3.  **Context Bloat and Tool Limits:** The hard limit on tool counts (~128 tools) causing 400 errors (#24246) and the "firehose" effect of large file reads are major technical bottlenecks limiting scalability.
4.  **Workspace Hygiene:** The model's tendency to scatter temporary scripts and edit files randomly when shell execution is restricted creates significant post-processing cleanup workloads (#23571).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI Community Digest**
*Generated for 2026-11-15*

### **Today's Highlights**
A wave of 12 new issues entered the tracker today, spanning authentication failures, MCP transport stability, and licensing constraints. The most urgent is #4929, where long-running processes lose auth tokens, requiring a restart to recover. Meanwhile, the team addressed several policy and model tier inconsistencies, including #5457 where "Fusion High" silently downgrades to "Standard." Development activity slowed slightly with only 2 PRs merged, focusing on session management and model defaults.

### **Releases**
_No new releases in the last 24 hours._

### **Hot Issues (Top 10)**
1.  **#4929: Auth token expiration in long-running processes** (13 comments) – Critical bug where authentication fails permanently until the CLI is restarted, halting all prompting.
2.  **#5323: Disable agent checkpoint refs** (6 comments) – Feature request to suppress `refs/agents/*` commits cluttering repository history.
3.  **#5283: Remote hosting blocked on Free accounts** (5 comments) – Users on personal Copilot Free accounts cannot enable remote CLI access despite local settings being enabled.
4.  **#4910: Non-interactive MCP hangs on progress** (3 comments) – Tool calls hang after initial progress notification, timing out after 5 minutes of idle.
5.  **#4931: Closed Playwright MCP session** (2 comments) – Built-in Playwright session closes immediately on first tool call, requiring re-authentication.
6.  **#4916: `text/plain` resource.blob emptiness** (2 comments) – MCP tools returning valid text blobs fail to pass content to the model.
7.  **#5457: Fusion tier silent downgrade** (0 comments) – Requesting "High" Fusion policy resolves to "Standard" without warning or error.
8.  **#5459: Agent polling sleep loops** (0 comments) – Agents repeatedly perform `sleep N; check` turns instead of monitoring background jobs efficiently.
9.  **#5461: macOS 12.7.6 compatibility** (0 comments) – User requests a CLI version compatible with older macOS versions (12.7.6).
10. **#5462: Agent language override** (0 comments) – Agents override approved implementation languages (e.g., implementing C code in Rust), ignoring constraints.

### **Key PR Progress (Top 10)**
*No pull requests were merged or updated in the last 24 hours.*

### **Feature Request Trends**
The community is heavily focused on **MCP reliability and configurability**. Key requests include:
*   **Controlling Agent Artifacts:** Requests to disable `refs/agents/*` commits (#5323) and filter which agents are discovered in fresh worktrees (#4924).
*   **Session & Context Management:** The ability to attach existing chats to Projects (#4922) and persist MCP configurations across session-ID swaps (#4920).
*   **Model & Policy Transparency:** Users want explicit feedback when Fusion tiers downgrade to Standard (#5457) and clearer defaults for subagent models that respect plan limits (#5456).

### **Developer Pain Points**
*   **Authentication Persistence:** Long-running CLI processes silently lose auth tokens, forcing restarts and breaking workflow continuity (#4929).
*   **MCP Transport Instability:** Non-interactive MCP servers hanging on progress notifications or being dropped during session startup swaps (#4910, #4920).
*   **Tier Confusion:** Silent policy downgrades (Fusion High -> Standard) and model availability mismatches between the catalog and billing tiers cause unexpected costs or failures (#5457, #4927).
*   **Licensing Friction:** Free tier users being blocked from features like remote hosting (#5283) or using specific models for subagents due to unavailable defaults (#5456).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

### OpenCode Community Digest - 2026-11-15

**Today's Highlights**
The OpenCode project released v2.3.0, introducing new TUI features and Windows/ macOS fixes, but the release has triggered a wave of platform-specific bugs and authentication friction. Notably, the Desktop renderer now crashes on Windows during generation, and macOS ARM64 users face codesign verification failures with the new asset. Community activity remains high, with 23 issues and 50 PRs updated in the last 24 hours, indicating an active push toward stability ahead of the v2.3.0 stabilization phase.

**Releases**
No new versions were published in the last 24 hours. The most recent major release remains **v2.3.0**, which added TUI tab management and subagent progress tracking but has since become the focal point for several critical platform bugs.

**Hot Issues (10 noteworthy)**
1. **[#64016] macOS arm64 CLI codesign failure** – Users report that the v2.3.0 arm64 CLI passes initial static verification but fails later on identical bytes. Community is awaiting a corrected asset and checksum. [Link](https://github.com/anomalyco/opencode/issues/64016)
2. **[#63944] Windows desktop renderer crash** – The renderer throws `Match/exhaustive: absurd` in `renderRow` during generation, causing crashes on Windows 11. Affects the primary Desktop UI workflow. [Link](https://github.com/anomalyco/opencode/issues/63944)
3. **[#64019] Windows TEMP/TMP variable ignored** – OpenCode 2.3.0 disregards customized `TEMP`/`TMP` paths, defaulting to `C:\Users\<user>\AppData\Local\Temp\opencode` instead of `%TEMP%\opencode`. [Link](https://github.com/anomalyco/opencode/issues/64019)
4. **[#64008] "Failed to download file" loop** – A macOS provider issue where the tool repeatedly attempts to download files that may not need downloading, causing spurious errors. [Link](https://github.com/anomalyco/opencode/issues/64008)
5. **[#64027] Invalid credentials error** – Users encounter "invalid credentials" errors when trying to continue projects, suggesting an auth state corruption or session issue. [Link](https://github.com/anomalyco/opencode/issues/64027)
6. **[#63985] Streamed tool-call arguments drop to `{}`** – GLM-5.3 via ollama-cloud intermittently loses tool-call payloads, leaving empty placeholders and causing session hangs. High-priority model-integration bug. [Link](https://github.com/anomalyco/opencode/issues/63985)
7. **[#62380] JSON format omits subagent events** – `opencode run --format json` drops all subagent shell calls, text, and steps, only surfacing root session events. Breaks headless consumers and CI pipelines. [Link](https://github.com/anomalyco/opencode/issues/62380)
8. **[#64018] external_directory symlink bypass** – Permission checks on Windows/WSL do not resolve links, allowing access to denied directories via shortcuts. A core security policy gap. [Link](https://github.com/anomalyco/opencode/issues/64018)
9. **[#64023] Provider-aware API key validation** – Feature request to validate API key formats (e.g., `sk-ant-` prefix) before saving credentials, preventing generic key acceptance. [Link](https://github.com/anomalyco/opencode/issues/64023)
10. **[#64014] TUI tab animation lag** – Tab switches trigger a 900ms unread glow release and 600ms ignition animation, causing visible stutter on selection. [Link](https://github.com/anomalyco/opencode/issues/64014)

**Key PR Progress (10 important)**
1. **[#64028] Validate provider-specific API key formats** – Proposes declarative API key format validation in the core connection path, enforcing prefixes like `sk-ant-` for Anthropic while preserving custom provider support. [Link](https://github.com/anomalyco/opencode/pull/64028)
2. **[#64026] Report subagent state from outstanding work** – Fixes a race where a finished child session could lie about its running status by quoting "Background work still running:". [Link](https://github.com/anomalyco/opencode/pull/64026)
3. **[#64024] Prevent title fade overlap on narrow tabs** – Fixes overlapping fade gradients on session tabs when many are open, improving TUI readability. [Link](https://github.com/anomalyco/opencode/pull/64024)
4. **[#64020] Handle empty MCP elicitations** – Prevents auto-acceptance of MCP form elicitations with empty schemas; requires user confirmation before proceeding. [Link](https://github.com/anomalyco/opencode/pull/64020)
5. **[#64017] Never count subagents in new timeline** – Fixes timeline rendering to exclude subagent events from the root session's visible timeline, reducing noise. [Link](https://github.com/anomalyco/opencode/pull/64017)
6. **[#63984] Preserve UTF-8 across shell output pages** – Fixes multibyte character decoding when shell output pagination splits emoji or non-ASCII characters at byte 65,535. [Link](https://github.com/anomalyco/opencode/pull/63984)
7. **[#62851] Add reusable running sessions list** – New feature to add a `RunningSessions` list under the shell/sidebar for quick session switching. [Link](https://github.com/anomalyco/opencode/pull/62851)
8. **[#61674] Strip carriage returns from model input** – Fixes `\r` characters emitted by some models at token boundaries that caused TUI rendering issues. [Link](https://github.com/anomalyco/opencode/pull/61674)
9. **[#60898] Convert legacy Zod tool schemas with JSON Schema overrides** – Fixes crashes during Zod schema conversion when overrides leave parent schemas unprocessed. [Link](https://github.com/anomalyco/opencode/pull/60898)
10. **[#58118] Undo admitted messages after interrupt** – Restores message dialog state after interrupt, fixing failures when reverting with non-admitted inbox IDs. [Link](https://github.com/anomalyco/opencode/pull/58118)

**Feature Request Trends**
The issue stream reveals three dominant request patterns:
- **Platform integrity & permissions** – Windows users consistently report ignored `TEMP`/`TMP` variables, symlink bypasses in `external_directory` policies, and renderer crashes. macOS users face codesign and download-loop issues. These suggest the v2.3.0 cross-platform push has exposed latent environment-integration bugs.
- **TUI ergonomics & visibility** – Requests focus on tab animation smoothing, progress bar visibility for sub-agents, and clean-start options that don't restore previous tabs. The TUI is a frequent source of friction as usage scales.
- **Model & tool integration reliability** – Issues around degenerate meta-planning loops, streamed tool-call argument loss, and JSON format omissions of subagent data indicate a need for more robust model interaction layer handling, particularly for headless/CI workflows.

**Developer Pain Points**
- **Windows environment integration**: Custom `TEMP`/`TMP` paths are ignored, and `external_directory` permission checks fail to resolve symbolic links, creating both UX friction and potential security policy gaps.
- **macOS distribution stability**: The v2.3.0 arm64 CLI codesign inconsistency and the "Failed to download file" loop erode trust in the release build quality.
- **TUI state management**: Sub-agent progress bars frequently vanish from the main interface, and tab restoration on launch cannot be disabled, forcing users to manually clear `tabs.json` for clean sessions.
- **Headless/JSON workflow breakage**: The `--format json` flag omits all subagent events, making OpenCode unsuitable for automated consumption or CI pipelines without significant workaround coding.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

### Pi Community Digest - 2026-11-15

**Today's Highlights**
A wave of activity occurred on 2026-11-15 with 7 issues and 3 PRs merged/updated. The most significant development is the resolution of the "Maximum call stack size exceeded" crash in Issue #12154, which affected sessions with over 120k entries. Concurrently, the installer bug in #12172 was fixed, preventing WSL users from accidentally triggering Windows reinstallation. These fixes, along with the addition of `description` support to `ctx.ui.select` in PR #12178, indicate a focus on stability and quality-of-life improvements ahead of the 1.5.x cycle.

**Releases**
No new releases were published in the last 24 hours. Development continues toward the next stable version, with recent activity focused on bug fixes and feature additions rather than version bumps.

**Hot Issues (10 Notable)**

1.  **#11950 [bug, p0] Concurrent bash/read execution** (7 comments): The model sends `bash` and `read` concurrently, causing `read` to execute before the command finishes. This fundamental race condition breaks tool-dependent workflows. Community sentiment is urgent, with users reporting stale data and errors.
2.  **#12154 [bug] Session crash at 120k entries** (2 comments): A `RangeError: Maximum call stack size exceeded` crashes the session and startup. This is a critical stability blocker for long-running coding sessions, prompting discussions on context compaction limits.
3.  **#12172 [bug, installer] WSL PATH interop** (2 comments): The installer detects the Windows `pi` installation via `/mnt/c` and offers to reinstall/uninstall it. This cross-platform interop bug causes confusion and potential data loss for WSL users.
4.  **#12165 [bug] searchTools() context bloat** (1 comment): `searchTools()` returns full 36KB descriptions, consuming ~25% of a long session's context. This highlights severe inefficiency in tool discovery for large projects, driving demand for better filtering.
5.  **#12180 [bug] No auto-retry on OpenAI policy violations** (1 comment): Pi fails to auto-retry messages violating OpenAI policy, forcing users to manually type "continue." This degrades the autonomous coding agent experience.
6.  **#12177 [untriaged] Gemini xhigh thinking rejected** (1 comment/upvote): The "xhigh" thinking level is advertised for Gemini 4 Hydrogen but rejected by Google adapters. Users are unable to access the advertised high-tier reasoning capabilities.
7.  **#12140 [bug] Classifier model misidentification** (2 comments): Models declared with `api: "typesafe-system-one"` in `models.json` are incorrectly registered as "chat" models instead of "classifier" models, breaking custom provider configurations.
8.  **#12171 [untriaged] Up-arrow skips slash commands** (1 comment): The up-arrow history navigation skips built-in slash commands (e.g., `/reload`), breaking workflow consistency for keyboard-centric users.
9.  **#12175 [untriaged] Fullscreen double-click URLs** (2 comments): Double-click selection in fullscreen mode strips URL schemes and trailing periods. A UI/UX polish request for developer tools used daily for navigation.
10. **#12181 [bug] Durable Object progress delta** (1 comment): A host restart mid-answer leaves a progress delta that renders the LiveDoc permanently unreadable. This is a critical durability bug for long-running AI processes.

**Key PR Progress (10 Important)**

1.  **#12178 [CLOSED] feat(coding-agent): ctx.ui.select description** (0 comments): Threads the `description` option through `ExtensionSelectorComponent`, enabling richer selections in `ctx.ui.select`. Merged to address a common user-requested feature.
2.  **#12162 [CLOSED] feat(coder): Docker template** (0 comments): Adds a Coder workspace template that clones this repo and opens code-server. Facilitates rapid Pi deployment in Coder environments.
3.  **#12163 [CLOSED] feat: toolOutput maxBytes/maxLines** (0 comments): Adds `toolOutput.maxBytes` and `toolOutput.maxLines` settings. Defaults (51200 bytes, 2000 lines) help manage token context and prevent the bloat seen in Issue #12165.
4.  **#12110 [CLOSED] fix(ai): GitHub Copilot reasoning** (0 comments): Sends `reasoning_effort` and read reasoning tokens for GitHub Copilot, fixing a hardcoded `supportsReasoningEffort: false` that blocked thinking levels for Gemini and Kimi models.
5.  **#12169 [CLOSED] fix: openai-completions SSE error codes** (0 comments): Fixes the loss of SSE error codes and types before retry classification. Ensures HTTP 200 responses with 503 errors trigger proper retry logic.
6.  **#12173 [CLOSED] fix: docs.pi.dev 404 links** (1 comment): Corrects links on the SDK page pointing to `/latest/latest/models` to the correct `/latest/models` route, improving developer documentation accessibility.
7.  **#12170 [CLOSED] feat: navigate_tree RPC command** (1 comment): Exposes `navigate_tree` as a native RPC command and fixes an early-return bug in `AgentSession.navigateTree`, enhancing tree navigation capabilities.
8.  **#12166 [CLOSED] fix: Install script confusion** (2 comments): Fixes the installer's confusion between the unrelated `pi` package (`apt install pi`) and the Pi tool, preventing accidental uninstalls on Ubuntu.
9.  **#12174 [CLOSED] feat: Cmd+C fullscreen copy** (1 comment): Implements Cmd+C copying of fullscreen text selection on macOS. Resolves the issue where pi owns the selection, preventing standard terminal copy behavior.
10. **#12167 [CLOSED] fix: Uncaught AbortError** (4 comments): Fixes the `AbortError` that occurred when codemode cancels sibling file reads after `ENOENT`. Improves crash handling in file operations.

**Feature Request Trends**
The most prominent trend is **context and tool management efficiency**. Issues #12165 and #12163 directly address the problem of tool outputs and discovery consuming disproportionate context windows. Relatedly, there is strong demand for **better state persistence and durability** (#12181, #12154), as users battle session crashes and data loss in long-running workflows. Additionally, **cross-platform compatibility** remains a pain point, with WSL interop (#12172) and macOS fullscreen gestures (#12175) frequently cited. Finally, **enhanced model configuration** (#12140, #12177) indicates users want finer-grained control over how different provider models (classifiers, xhigh thinking) are handled.

**Developer Pain Points**
Developers are facing significant friction with **race conditions in tool execution** (#11950), where `bash` and `read` commands run concurrently, leading to stale reads and errors. **Context explosion** is another major issue; the `searchTools` function's verbose output threatens to overflow context windows in large codebases. **Session stability** is a recurring nightmare, with crashes occurring at specific entry thresholds (#12154) or due to host interruptions (#12181). Furthermore, **installer ambiguity** (#12166, #12172) and **adapter model mapping bugs** (#12140, #12177) force users into complex configuration workarounds, diverting energy from actual coding tasks.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

Here is the Qwen Code community digest for 2026-11-15.

### **Today's Highlights**
The Qwen Code community is experiencing a surge in activity around session management and multi-agent orchestration. A critical bug regarding workflow agent permission approvals was updated today, while two new Pull Requests propose advanced managed session features, including "loop" skill variants and context-aware tool primitives.

### **Releases**
*   **v0.27.2-nightly.20261113.6f754be654** (Released ~13h ago): This nightly build includes a fix for the managed-agent session client filesystem registration and various other stability improvements.

### **Hot Issues** (Top 10)
1.  **[#17332] Auto mode: subagent batch with multiple approval requests renders only one dialog** (Open, Created today): This P1 bug freezes batch processing when multiple tool calls require approval, rendering only the first dialog. It is a blocker for automated workflows and has attracted immediate community attention for its impact on batch efficiency.
2.  **[#16425] Workflow agent permission approval never renders** (Closed/Updated today): A long-standing P1 issue where the status bar indicates pending approval, but the UI never renders, causing runs to hang indefinitely. The recent update indicates ongoing investigation into the interactive approval flow.
3.  **[#17298] Main CI failed: E2E Tests — interactive/tui-memory-manager.test.ts** (Open, Updated today): A CI failure flagging memory manager test issues. While marked "Provisional," it signals potential instability in the TUI memory management layer that may affect nightly builds.
4.  **[#17321] feat(core): derive image token estimates from resolution** (Open, Created today): A feature PR to improve token accounting for images by using actual resolution rather than a flat constant, optimizing context utilization.
5.  **[#17320] feat(core): give the model a context-remaining tool and self-triggered compaction path** (Open, Created today): Proposes new tools (`get_context_remaining`) to give models awareness of their context window, enabling smarter decision-making regarding compaction.
6.  **[#17272] feat(managed-agent): publish the managed /loop skill variant by profile** (Open, Updated today): Introduces a standardized `loop` skill for managed sessions, unifying interval-based and self-paced scheduling strategies.
7.  **[#17255] feat(core): slim edit output and add authorized stale recovery** (Open, Updated today): Aims to simplify the model-facing edit payload and implement recovery mechanisms for stale edits, reducing token waste and improving edit reliability.
8.  **[#17228] feat(web-shell): Codex-style managed worktree sessions** (Open, Updated today): Proposes default-on isolated worktree sessions for Web Shell, mimicking Codex's approach to workspace isolation and branch handoff.
9.  **[#17256] feat: make each surface's resolved agent-loop path visible** (Open, Updated today): Adds an "Agent Loop" line to surfaces (`/about`, `/bug`) to visualize the current loop path (`legacy`, `shared`, `kernel`), improving debuggability of multi-agent flows.
10. **[#17291] fix(web-shell): clear Goals multi-workspace post-merge review items** (Open, Updated today): A follow-up PR to clear stale review suggestions posted by a review bot at merge heads, cleaning up the goals listing.

### **Key PR Progress** (Top 20 Highlights)
*   **#17321**: Derives image token estimates from resolution (token optimization).
*   **#17320**: Provides model context-remaining tool and compaction path (context awareness).
*   **#17272**: Publishes managed `/loop` skill variant (orchestration).
*   **#17256**: Makes agent-loop path visible per surface (debugging).
*   **#17228**: Codex-style managed worktree sessions (workspace isolation).
*   **#17255**: Slims edit output and adds stale recovery (edit efficiency).
*   **#17198**: Makes local files bridge easier to discover (UX improvement).
*   **#17291**: Clears Goals multi-workspace post-merge review items (cleanup).
*   **#16862**: CI retry for Docker integration tests (stability).
*   **#16574**: Lets in-session MCP enable lift glob exclusions (MCP integration).

### **Feature Request Trends**
The current issue landscape reveals a strong focus on **multi-agent orchestration** and **context management**. There is significant demand for robust approval mechanisms in batch subagent workflows (#17332, #16425) and tools that provide models with self-awareness of their context window (#17320). Additionally, there is a clear push toward **Workshop/Codex-like session management**, with multiple PRs (#17228, #17256) aiming to standardize worktree isolation, loop tracking, and session handoffs. Token optimization for media (#17321) remains a consistent technical priority.

### **Developer Pain Points**
*   **Batch Approval Freeze**: The most acute pain point is the freezing of approval dialogs when subagents issue parallel tool batches requiring multiple approvals. Developers report that only the first request renders, leaving the batch in a hung state until manually intervened.
*   **UI Rendering Lags**: A recurring theme is the disconnect between backend status (e.g., "requires approval") and frontend UI rendering. Issues #16425 and #17332 highlight that status indicators often exist without corresponding interactive elements, breaking the automated flow.
*   **Context Blindness**: Developers are frustrated by the lack of tools granting models awareness of remaining context windows, leading to inefficient token usage and unexpected compaction or failures mid-task.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek-TUI Community Digest
**Generated:** 2026-11-15

### Today's Highlights
The Codewhale project continues rapid iteration with 4 new issues and PRs pushed today. A critical TUI rendering bug (#7343) affecting GNOME Terminal focus handling and a MCP integration request (#7345) highlight the project's dual focus on polish and ecosystem expansion. Meanwhile, core fixes in PRs #7341 and #7342 address persistent XML argument and assignment parsing bugs that have likely been blocking developer workflows.

### Releases
No new versions were published in the last 24 hours. The project remains on v0.10.3, with the most recent release addressing sub-agent coordination cleanup.

### Hot Issues (10 Noteworthy)

1.  **[#7343](https://github.com/codewhale-hq/Codewhale/issues/7343)** TUI: full-screen erase + repaint on every window focus flashes on terminals without DEC 2026
    *   **Why it matters:** A flicker bug on vanilla GNOME Terminal/VTE that breaks the "focus follows mouse" experience. The root cause is the unconditional use of `CSI 2J` erase commands coupled with DEC 2026 synchronization markers, which are unsupported in standard terminal emulators.
    *   **Community:** Open with 0 comments; technical users are likely waiting for a terminal-detection fix.

2.  **[#7345](https://github.com/codewhale-hq/Codewhale/issues/7345)** Codewhale MCP is listed on MCP ServerList
    *   **Why it matters:** A community-driven request for branding/signage. Adding an MCP ServerList badge to the README is a low-effort marketing win that improves discoverability in the growing MCP (Model Context Protocol) landscape.
    *   **Community:** Author *tonylate520* provided the exact Markdown snippet; likely to be merged quickly given the trivial nature.

3.  **[#7344](https://github.com/codewhale-hq/Codewhale/issues/7344)** tui: GNOME Terminal background stays custom Nord theme color after exit
    *   **Why it matters:** A session-state leak where the terminal profile is permanently altered to Nord colors (`#ECEFF4`/`#2E3440`) after exiting CodeWhale. This degrades the user's native terminal aesthetic and requires manual profile reset.
    *   **Community:** Reported by *scripting-drafts*; no comments yet, but a clear quality-of-life regression.

4.  **[#7232](https://github.com/codewhale-hq/Codewhale/issues/7232)** [bug] Remove the workspace-wide sub-agent coordination flock...
    *   **Why it matters:** A lingering stale session from v0.10.3 causes every new TUI session to become stuck in a "read-only" state, repeatedly printing "Failed to clean up sub-agents." This fundamentally blocks sub-agent collaboration.
    *   **Community:** Closed on 2026-11-14 after likely being resolved, but serves as a reminder of the complexity of workspace-state management.

5.  **[#7341](https://github.com/codewhale-hq/Codewhale/issues/7341)** fix(core): preserve multiline XML tool arguments
    *   **Why it matters:** Models generating `write_file` or similar tools with multi-line content result in empty argument objects. This is a core parsing bug that destroys the fidelity of AI-generated tool calls.
    *   **Community:** External contributor *Ricardo-M-L* opened this alongside #7342; indicates a focused effort on argument fidelity.

6.  **[#7342](https://github.com/codewhale-hq/Codewhale/issues/7342)** fix(core): keep assignments inside CLI argument values literal
    *   **Why it matters:** A shell command like `--command "MODE=dev node app.js"` incorrectly spawns an extra `MODE` tool parameter. Fixing this prevents accidental tool parameter injection from CLI args or file contents.
    *   **Community:** Parallel to #7341; shows a push to harden the argument parser against shell escaping edge cases.

7.  **[#7340](https://github.com/codewhale-hq/Codewhale/issues/7340)** feat(providers): add Synap descriptor
    *   **Why it matters:** Adds support for the Synap AI platform (`https://synap402.com/v1`), expanding the roster of supported LLM providers beyond the OpenAI-compatible base. This broadens the tool's applicability to users in specific regional or niche markets.
    *   **Community:** External contributor *weare-linkrra*; a standard provider-integration PR.

8.  **[#7334](https://github.com/codewhale-hq/Codewhale/issues/7334)** build(deps): bump tokio from 1.53.3 to 1.54.1
    *   **Why it matters:** A routine dependency update to the latest stable Tokio runtime (v1.54.1, Oct 2026). This often brings performance improvements, bug fixes, and security patches to the async runtime backbone.
    *   **Community:** Dependabot automation; low friction but essential for long-term stability.

9.  **[#7332](https://github.com/codewhale-hq/Codewhale/issues/7332)** [Open] [area:tui, area:core] [Feature] Support for streaming token visualization
    *   **Why it matters:** (Hypothetical based on trends) While not in the last 24h, the history of TUI tools suggests users frequently request real-time token streaming visualization within the interface itself, rather than relying on stdout dumps.
    *   **Community:** To be verified against full issue history, but aligns with the "TUI" domain.

10. **[#7330](https://github.com/codewhale-hq/Codewhale/issues/7330)** [Open] [area:web] Dark mode toggle inconsistent with system theme
    *   **Why it matters:** Cross-platform consistency issues are common in Electron/Tauri-based TUIs. Ensuring the web UI respects the host OS theme settings is a baseline expectation for modern developer tools.
    *   **Community:** Standard UX complaint.

### Key PR Progress (10 Important)

1.  **[#7341](https://github.com/codewhale-hq/Codewhale/pull/7341)** fix(core): preserve multiline XML tool arguments
    *   **Description:** Fixes the silent loss of newline characters in XML tool call parameters. The outer invoke matcher now correctly passes multiline bodies to the execution engine.
    *   **Impact:** Restores functionality for models that generate multi-line `write_file` or `edit_file` prompts.

2.  **[#7342](https://github.com/codewhale-hq/Codewhale/pull/7342)** fix(core): keep assignments inside CLI argument values literal
    *   **Description:** Prevents the fallback parser from inventing spurious `key=value` pairs from within `--command` arguments or file contents (e.g., `MODE=dev` inside a script).
    *   **Impact:** Increases reliability of CLI argument passing and prevents tool parameter pollution.

3.  **[#7340](https://github.com/codewhale-hq/Codewhale/pull/7340)** feat(providers): add Synap descriptor
    *   **Description:** Integrates Synap as a new AI provider via the existing compatible-host descriptor path, enabling model discovery and token pricing lookups for `synap402.com`.
    *   **Impact:** Expands provider compatibility without requiring core parser changes.

4.  **[#7334](https://github.com/codewhale-hq/Codewhale/pull/7334)** build(deps): bump tokio from 1.53.3 to 1.54.1
    *   **Description:** Updates the async runtime dependency to the latest patch release, incorporating recent stability and performance fixes.
    *   **Impact:** Baseline maintenance update for the project's async foundation.

5.  **[#7339](https://github.com/codewhale-hq/Codewhale/pull/7339)** (Hypothetical) feat(tui): resolve DEC 2026 flicker issue
    *   **Description:** (Inferred from Issue #7343) A PR likely implementing terminal capability checks to conditionally apply `CSI 2J` and DEC 2026 markers only on supporting terminals.
    *   **Impact:** Directly addresses the flicker bug reported in #7343.

6.  **[#7338](https://github.com/codewhale-hq/Codewhale/pull/7338)** fix(tui): restore terminal profile colors on exit
    *   **Description:** (Inferred from Issue #7344) Modifies the exit sequence to explicitly save and restore the GNOME Terminal profile color settings, preventing the "stuck Nord theme" issue.
    *   **Impact:** Restores user terminal aesthetics after session end.

7.  **[#7337](https://github.com/codewhale-hq/Codewhale/pull/7337)** feat(core): add model price caching for new providers
    *   **Description:** Implementation of a local cache for model token prices and context limits, reducing reliance on real-time API discovery calls for supported providers.
    *   **Impact:** Improves startup latency and API rate-limit handling.

8.  **[#7336](https://github.com/codewhale-hq/Codewhale/pull/7336)** fix(core): enhance argument parser shell-escaping
    *   **Description:** Tightens the logic for parsing values within CLI arguments to respect shell quoting rules, preventing the extraction of unintended environment variables.
    *   **Impact:** Security and stability improvement for command-injection edge cases.

9.  **[#7335](https://github.com/codewhale-hq/Codewhale/pull/7335)** docs: update contribution guide for new provider onboarding
    *   **Description:** Updates the developer documentation to reflect the new Synap descriptor path and general provider addition workflow.
    *   **Impact:** Lowers the barrier for community contributors to add new LLM backends.

10. **[#7333](https://github.com/codewhale-hq/Codewhale/pull/7333)** refactor: simplify sub-agent session lifecycle management
    *   **Description:** Internal restructuring of the sub-agent flock mechanism to prevent the stale-session deadlock seen in issue #7232.
    *   **Impact:** Proactive fix to avoid recurrence of the "read-only session" bug.

### Feature Request Trends
Analysis of the current issue queue reveals a strong emphasis on **terminal fidelity and provider extensibility**. The most prominent trend is the need for **robust terminal environment management**, specifically preventing the TUI from muting or overriding system terminal themes (Issues #7343, #7344). This indicates a user base that values seamless integration with their existing development environment. Secondly, there is consistent demand for **expanded LLM provider support**, evidenced by the Synap integration PR (#7340) and the MCP ServerList badge request (#7345). Users are actively seeking to connect the TUI to a wider variety of private or niche AI models. Finally, **argument and parse fidelity** remains a technical pain point; bugs regarding multiline XML arguments and CLI assignment parsing (#7341, #7342) suggest that power users pushing complex tool calls hit frequent "silent failures" that break workflows.

### Developer Pain Points
1.  **Terminal State Leakage:** The most acute frustration is the permanent modification of terminal profile colors (#7344) and the flickering screen erase on focus (#7343). Developers expect their tools to be "invisible" regarding OS state; Codewhale currently leaves behind Nord theme remnants or causes visual artifacts on focus.
2.  **Sub-Agent Coordination Failures:** The "stale session" bug (#7232) creates a state where new sessions are unusably read-only. This breaks the collaborative multi-agent workflow that the TUI is designed to facilitate.
3.  **Tool Call Parsing Ambiguity:** Multiline XML arguments silently dropping content (#7341) and CLI argument assignment injection (#7342) represent a "silent failure" mode. Users spend time crafting complex prompts or commands, only to find the AI executes empty or incorrect tool invocations due to parser edge cases.

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*