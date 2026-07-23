# OpenClaw Ecosystem Digest 2026-07-22

> Issues: 208 | PRs: 500 | Projects covered: 12 | Generated: 2026-07-22 02:26 UTC

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

# OpenClaw Project Digest: 2026-07-22

## Today's Overview
OpenClaw is experiencing high development velocity today, with over 200 issue updates and 500 pull request activities. The project is currently prioritizing security hardening (masked secrets and permission manifests), multi-platform reliability (Slack, Telegram, and Matrix), and infrastructure stability. The high volume of PR activity suggests an intensive maintenance cycle focused on refining the gateway's message delivery and session management.

## Releases
*No new releases were recorded in the last 24 hours.*

## Project Progress
The following PRs were merged or closed today, advancing the project's stability and localization efforts:
*   **i18n Refresh:** Updated native locales for Android, Wear OS, iOS, and macOS ([#112441](https://github.com/openclaw/openclaw/pull/112441)).
*   **Gateway Stability:** Fixed stale wake delays occurring after node re-pairing ([#109647](https://github.com/openclaw/openclaw/pull/109647)).
*   **Memory Routing:** Resolved an issue where memory embeddings incorrectly fell back to `api.openai.com` when a custom `baseURL` was configured ([#93878](https://github.com/openclaw/openclaw/pull/93878)).
*   **Canvas Fix:** Prevented the sending of undefined coordinates during partial placement ([#110435](https://github.com/openclaw/openclaw/pull/110435)).
*   **Matrix Support:** Added `mm:` namespace prefix to reasoning tags for MiniMax models ([#99417](https://github.com/openclaw/openclaw/pull/99417)).

## Community Hot Topics
*   **Security & Privacy:** Significant community interest in **Masked Secrets** ([#10659](https://github.com/openclaw/openclaw/issue/10659)) to prevent agents from viewing raw API keys, and **Capability-based permissions** ([#12678](https://github.com/openclaw/openclaw/issue/12678)) for skills.
*   **Performance Bottlenecks:** Users are reporting high response latency and gateway stalls when using **Active Memory** with the Codex app-server path ([#86996](https://github.com/openclaw/openclaw/issue/86996)).
*   **Platform Expansion:** Active development on **Slack Agent View** support ([#103895](https://github.com/openclaw/openclaw/pull/103895)) and **Telegram Business Bot** integration ([#20786](https://github.com/openclaw/openclaw/issue/20786)).

## Bugs & Stability
**High Severity:**
*   **Auth Regression:** Main agent blocked by persistent workspace-state migration after Anthropic auth recovery ([#111498](https://github.com/openclaw/openclaw/issue/111498)).
*   **Security Risk:** `models.json` generator writing API keys as plain strings rather than secret references ([#88562](https://github.com/openclaw/openclaw/issue/88562)).
*   **Auth Failure:** `cli-backend` agent returning 401 for Anthropic while shell commands work ([#95612](https://github.com/openclaw/openclaw/issue/95612)).
*   **Subagent Logic:** MCP tools failing to inject into subagents despite allowlist configurations ([#85030](https://github.com/openclaw/openclaw/issue/85030)).

**Medium/Low Severity:**
*   **UX Friction:** Session status fields ("failed", "timeout") misleading agents into spawning duplicate sessions ([#64103](https://github.com/openclaw/openclaw/issue/64103)).
*   **Data Leak:** Auto-backgrounded exec failures posting raw system cards to end users ([#104389](https://github.com/openclaw/openclaw/issue/104389)).

## Feature Requests & Roadmap Signals
*   **Security Hardening:** Strong signals for **Filesystem Sandboxing** ([#7722](https://github.com/openclaw/openclaw/issue/7722)), **Skill Permission Manifests** ([#12219](https://github.com/openclaw/openclaw/issue/12219)), and **Per-spawn tool restrictions** ([#15032](https://github.com/openclaw/openclaw/issue/15032)).
*   **Developer Experience:** Requests for **Plugin Hot-Reload** ([#14438](https://github.com/openclaw/openclaw/issue/14438)), **Backup/Restore utilities** ([#13616](https://github.com/openclaw/openclaw/issue/13616)), and a **Project-based Dashboard** ([#13676](https://github.com/openclaw/openclaw/issue/13676)).
*   **Advanced Agent Control:** Users are requesting **maxTurns/maxToolCalls** limits ([#9912](https://github.com/openclaw/openclaw/issue/9912)) and **Private Mode** for demos ([#7403](https://github.com/openclaw/openclaw/issue/7403)).

## User Feedback Summary
*   **Security Concerns:** Users are increasingly worried about prompt injection attacks extracting credentials, driving the demand for "Masked Secrets."
*   **Operational Complexity:** Feedback indicates a need for better environment migration tools (Backup/Restore) and clearer diagnostic info for context overflows.
*   **Platform Specifics:** Users are seeking better handling for Telegram-specific features like custom emojis and

---

## Cross-Ecosystem Comparison

# Ecosystem Comparison Report: AI Agent & Personal Assistant Landscape
**Date:** 2026-07-22
**Analyst Note:** This report synthesizes community activity across 12 major projects to identify architectural trends, competitive positioning, and security imperatives.

---

### 1. Ecosystem Overview
The open-source AI agent landscape is transitioning from "experimental prototyping" to "production-grade infrastructure." Current development is dominated by three pillars: **hardened security** (secret masking and workspace isolation), **multi-platform ubiquity** (integrating Slack, Telegram, and Matrix), and **reliable persistence** (moving away from in-memory states toward durable, filesystem-backed storage). The ecosystem is increasingly focused on "agentic reliability"—ensuring models can recover from errors and follow complex, multi-step goal structures without "runaway" loops.

### 2. Activity Comparison

| Project | Issues (Recent) | PRs (Recent) | Release Status | Health Score |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 200+ | 500+ | Maintenance | **High (Hyper-Active)** |
| **CoPaw** | 9 | 49 | v2.0.1-beta.1 | **High (Rapid Iteration)** |
| **ZeroClaw** | 6 | 50 | Maintenance | **High (Security-Focused)** |
| **IronClaw** | 13 | 50 | v1.0.0-rc.1 | **High (Architectural Rebuild)** |
| **NanoBot** | 9 | 32 | Maintenance | **Moderate (Stable/Hardening)** |
| **Hermes Agent** | 13 | 50 | Maintenance | **Moderate (Infrastructure-Heavy)** |
| **LobsterAI** | N/A | 10 | Maintenance | **Moderate (UX-Focused)** |
| **PicoClaw** | 8 | 8 | Maintenance | **Moderate (Steady State)** |
| **NanoClaw** | N/A | 12 | Maintenance | **Low (Regional Focus)** |
| **Moltis** | 1 (Active) | 0 | Maintenance | **Low (Steady State)** |
| **NullClaw** | 0 | 0 | N/A | **Inactive** |
| **ZeptoClaw** | 0 | 0 | N/A | **Inactive** |

### 3. OpenClaw's Position
**OpenClaw** currently serves as the "core reference" project in this ecosystem, distinguished by its massive development velocity and platform breadth.
*   **Advantages:** Superior multi-platform support (Slack, Telegram, Matrix) and a sophisticated focus on "Masked Secrets" and "Capability-based permissions," which addresses the primary security anxiety of enterprise users.
*   **Technical Approach:** Prioritizes gateway stability and session management over niche UI features, positioning it as a foundational infrastructure layer for agents.
*   **Community Size:** Outpaces peers in raw PR volume, suggesting a larger contributor base and a more robust "maintenance cycle" for high-frequency updates.

### 4. Shared Technical Focus Areas
Several critical requirements are emerging across the majority of projects:
*   **Security Hardening:** Demand for **Masked Secrets** (OpenClaw, NanoBot, ZeroClaw) and **Workspace Isolation** (ZeroClaw, PicoClaw) to prevent prompt injection and unauthorized file access.
*   **Reliable Model Routing:** Need for dynamic model selection based on topic, cost, or reasoning requirements (Moltis, CoPaw, OpenClaw).
*   **Persistence & Recovery:** Transitioning to durable storage (IronClaw, OpenClaw) and "self-healing" logic where agents can recover from tool-call failures (IronClaw, ZeroClaw).
*   **Multi-Channel Sync:** Integration with Telegram, Feishu, and Matrix is a universal requirement for "personal assistant" utility.

### 5. Differentiation Analysis
*   **Architectural Strategy:** **IronClaw** is undergoing a total "Reborn" architectural shift for enterprise scalability. **ZeroClaw** is doubling down on "Goal" system verification.
*   **Target User Persona:** **LobsterAI** focuses on consumer-facing "Artifacts" and UX polishing. **NanoClaw** targets regional markets (LINE integration). **CoPaw** targets workflow-heavy users (OMP modes, contract auditing).
*   **Developer Experience:** **OpenClaw** and **Hermes Agent** are prioritizing SDKs and unified theming/config to lower the barrier for complex agent deployment.

### 6. Community Momentum & Maturity
*   **Rapid Iteration Tier:** *OpenClaw, CoPaw, ZeroClaw, IronClaw.* These projects are in high-intensity development phases, frequently updating core architectures and security protocols.
*   **Stabilization Tier:** *NanoBot, Hermes Agent, PicoClaw.* These projects are focusing on bug fixes, OOM prevention, and refining existing features rather than launching new architectural modules.
*   **Steady/Niche Tier:** *Moltis, NanoClaw.* These projects show lower activity, focusing on specific regional needs or specific orchestration logic (Model Routing).

### 7. Trend Signals
*   **"Human-in-the-Loop" (HITL) as a Standard:** Strong demand for confirmation mechanisms before shell execution (NanoBot, CoPaw) indicates a shift toward safer, supervised autonomy.
*   **The "Standardization" Push:** Projects like **ZeroClaw** pushing for OpenAI-compatible endpoints signal a move toward making agents compatible with existing LLM tools (LangChain, Aider).
*   **Diagnostic Visibility:** A growing demand for "Doctor" diagnostics and "Trace Analysis" (IronClaw, OpenClaw) suggests that as agents become more complex, the ability to debug "silent failures" is becoming a top-tier requirement for developers.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest | 2026-07-22

## Today's Overview
The NanoBot project shows high development velocity today, with 32 Pull Request updates and 9 issues closed in the last 24 hours. The current development cycle is heavily focused on infrastructure hardening, specifically addressing resource leaks, security vulnerabilities, and process management. The project maintains a healthy balance between adding new provider support (e.g., ModelScope) and refining the agent's core execution environment.

## Releases
*No new releases were recorded in the last 24 hours.*

## Project Progress
Significant progress was made today across security, stability, and provider expansion:
*   **Provider Expansion:** Integrated **ModelScope** as a built-in provider via OpenAI-compatible endpoints, supporting various open-source models ([#4965](https://github.com/HKUDS/nanobot/pull/4965)).
*   **Security Hardening:** Updated documentation to prioritize environment variables over plaintext API keys ([#5010](https://github.com/HKUDS/nanobot/pull/5010)) and implemented atomic configuration writes to prevent file corruption during crashes ([#4984](https://github.com/HKUDS/nanobot/pull/4984)).
*   **Stability Fixes:** Resolved a critical Out-of-Memory (OOM) bug where the agent would crash when reading multi-GB files ([#4785](https://github.com/HKUDS/nanobot/issue/4785)) and fixed a memory leak where the `Session.messages` list grew indefinitely ([#4787](https://github.com/HKUDS/nanobot/issue/4787)).
*   **Process Management:** Fixed an issue where child processes became orphaned during executor shutdowns ([#4794](https://github.com/HKUDS/nanobot/issue/4794)).
*   **Tooling Refinement:** Improved tool runner logging to prevent silent failures of preparation calls ([#4811](https://github.com/HKUDS/nanobot/pull/4811)) and quarantined invalid tool results to stabilize provider replay ([#4663](https://github.com/HKUDS/nanobot/pull/4663)).

## Community Hot Topics
*   **Ollama Caching & Latency:** A high-engagement discussion regarding prompt prefixes and the 60-second delay in local model turns ([#4867](https://github.com/HKUDS/nanobot/issue/4867)). This highlights a significant UX friction point for users running local hardware.
*   **Model-Specific Behaviors:** Active discussion on Qwen models exposing thinking/reasoning content in chat responses ([#4934](https://github.com/HKUDS/nanobot/issue/4934)).
*   **Session Management:** Interest in binding specific model presets to sessions to ensure consistent behavior across different agent tasks ([#4866](https://github.com/HKUDS/nanobot/pull/4866)).

## Bugs & Stability
*Ranked by severity:*
1.  **Security:** Plaintext API keys in `config.json` ([#4803](https://github.com/HKUDS/nanobot/issue/4803)) — **FIXED** via recommendation for environment variables ([#5010](https://github.com/HKUDS/nanobot/pull/5010)).
2.  **Critical Stability:** OOM on large files ([#4785](https://github.com/HKUDS/nanobot/issue/4785)) — **FIXED**.
3.  **Resource Leak:** Unbounded message list growth ([#4787](https://github.com/HKUDS/nanobot/issue/4787)) — **FIXED**.
4.  **Process Management:** Orphaned child processes ([#4794](https://github.com/HKUDS/nanobot/issue/4794)) — **FIXED**.
5.  **UX/Logic:** Qwen models exposing reasoning content ([#4934](https://github.com/HKUDS/nanobot/issue/4934)) — **OPEN**.

## Feature Requests & Roadmap Signals
*   **Human-in-the-loop (HITL):** Strong demand for a confirmation mechanism before executing shell commands to mitigate security risks ([#5013](https://github.com/HKUDS/nanobot/issue/5013)).
*   **UX Improvements:** Requests for "normie-friendly" UI configurations to hide complex settings ([#4399](https://github.com/HKUDS/nanobot/pull/4399)) and polished agent output streaming ([#4963](https://github.com/HKUDS/nanobot/pull/4963)).
*   **Control Logic:** Need for a `/cancel-goal` command to break agents stuck in sustained-goal loops ([#5022](https://github.com/HKUDS/nanobot/pull/5022)).
*   **Context Management:** Support for explicit context/skill loading ([#5018](https://github.com/HKUDS/nanobot/pull/5018)).

## User Feedback Summary
*   **Pain Points:** Users are struggling with "looping" agents that ignore "stop" commands when a system-level goal is active. There is also significant concern regarding the security of plaintext secrets in configuration files.
*   **Use Cases:** Heavy emphasis on local model integration (Ollama), shell environment safety, and multi-channel communication (WeChat, Feishu, Telegram).
*   **Satisfaction:** Positive movement on provider support (ModelScope) and the hardening of the filesystem/shell guards.

## Backlog Watch
*   **#4934 (Qwen Reasoning Leak):** Needs investigation into provider-specific thinking style mapping.
*   **#4866 (Model Presets):** High-priority feature for session consistency.
*   **#5022 (/cancel-goal):** Critical for preventing agent "runaway" behavior in complex tasks.
*   **#4987 (Filesystem Checks):** Security-focused PR to bind workspace checks to opened file handles.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest - 2026-07-22

## Today's Overview
The Hermes Agent project shows high development velocity today, with 50 Pull Requests updated and 13 Issues reviewed. Activity is heavily concentrated on refining the "Kanban" system's reliability, expanding the MCP (Model Context Protocol) catalog, and improving cross-platform UI consistency. The project maintains a healthy balance between core infrastructure stability (worker process management) and user-facing feature enhancements (themes and platform plugins).

## Releases
*No new releases were recorded today.*

## Project Progress
Several key updates were finalized today, focusing on infrastructure and UI framework improvements:
*   **Widget-app SDK (#68306):** Merged a new SDK for TUI applications, establishing a state+reducer+render model that mirrors the desktop component model.
*   **Kanban Admission Caps (#68928, #68793):** Successfully integrated admission caps for the Kanban dispatcher, allowing for rolling task-start limits and daily spend caps across multiple profiles.
*   **Candidate-Inclusive Display (#69040):** Resolved a bug where verification candidates were being collapsed out of the in-memory model during repair message sequences.
*   **Test Stability (#68896):** Fixed a CI flake regarding the MCP circuit-breaker by anchoring to monotonic time.

## Community Hot Topics
The community is currently focused on three primary areas:
*   **Kanban & Codex Continuity:** Significant discussion and PR activity regarding the durability of Kanban delivery and prompt ownership (#69034, #69035, #69036, #69037).
*   **Unified Theming:** A major push for a cross-surface theme SDK (#68857) to ensure consistent aesthetics across CLI, TUI, and Desktop.
*   **Platform Expansion:** High interest in expanding Hermes' reach via the X Chat (encrypted DMs) platform plugin (#68930) and new MCP servers for Cloudflare and TouchDesigner (#68044, #68607).

## Bugs & Stability
**High Severity:**
*   **Worker Deadlock (#68915):** The agent worker enters a permanent deadlock when a shell command backgrounds a process (e.g., `node server.js &`). This is a critical stability issue for long-running tasks. [Issue #68915](https://github.com/nousresearch/hermes-agent/issues/68915)
*   **Gemini Auth/Schema Errors (#69031):** Critical blocks for Google AI Studio users experiencing 401 Unauthorized and 400 Invalid Argument errors. [Issue #69031](https://github.com/nousresearch/hermes-agent/issues/69031)

**Medium Severity:**
*   **Holographic Memory Crashes (#68682):** Crashes occur when stored facts have mismatched `hrr_dim` dimensions across sessions. [Issue #68682](https://github.com/nousresearch/hermes-agent/issues/68682)
*   **Windows Process Orphaning (#69033):** Local terminal tools fail to detach child processes on Windows, leading to orphaned bash/find/grep processes. [Issue #69033](https://github.com/nousresearch/hermes-agent/issues/69033)

**Low Severity:**
*   **Pet RPC Polling Spam (#69039):** Even when disabled, the TUI sends polling requests, potentially hitting RPC timeouts under heavy load. [Issue #69039](https://github.com/nousresearch/hermes-agent/issues/69039)

## Feature Requests & Roadmap Signals
*   **Ephemeral Session Mode (#69043):** Users are requesting a "use-and-forget" mode that doesn't load memory files or save to the SQLite database.
*   **Settings Search Bar (#69025):** A request to improve the UX for navigating the growing list of configuration fields.
*   **Cross-Platform Theme SDK (#68857):** This signals a roadmap move toward a unified "skin" engine where a single YAML file controls all interfaces.
*   **X Chat Integration (#68930):** Signals a move toward more private, encrypted communication channels for the agent.

## User Feedback Summary
*   **Pain Points:** Users reported "silent failures" in web tools due to plugin initialization issues (#27683) and persistent issues with Kimi CN streaming decompression (#28049). 
*   **UX Friction:** There are reports of "messy" UI where multi-task popups overlap chat history (#69027) and instability in the theme selector grid (#69026).
*   **Satisfaction:** The inclusion of major MCP servers (Cloudflare, TouchDesigner) is well-received as it expands the agent's utility.

## Backlog Watch
*   **Kimi CN Streaming (#28049):** This issue remains open and affects users of the `api.moonshot.cn` endpoint with Kimi K2.6 models.
*   **Worker Deadlock (#68915):** Needs urgent reproduction and resolution as it can hang the entire agent worker.
*   **Desktop Tilde Paths (#69014):** Awaiting a decision on expanding tilde paths and fallback logic for desktop plugins.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest: 2026-07-22

## Today's Overview
PicoClaw maintains a steady development pace with a balanced mix of infrastructure hardening, bug fixes, and platform-specific enhancements. Today saw activity across 8 issues and 8 pull requests, indicating active maintenance and community engagement. The project is currently focusing on stabilizing authentication flows, improving multi-platform compatibility (DingTalk, Feishu, Matrix), and addressing security-related library dependencies.

## Releases
*No new releases were recorded in the last 24 hours.*

## Project Progress
The following items were merged or closed today, advancing the project's stability and customization capabilities:
*   **Bot Identity Customization:** PR #303 was closed, enabling users to configure the bot's greeting name via `bot_name` settings, resolving a hardcoded "PicoClaw" identity issue on Telegram and DingTalk ([#303](https://github.com/sipeed/picoclaw/pull/303)).
*   **System Execution Security:** PR #3282 was closed, introducing policy-gated system execution (`system.exec.v1`) for the slim node companion, allowing for safer, restricted execution of canonical arguments ([#3282](https://github.com/sipeed/picoclaw/pull/3282)).
*   **Bug Fixes:** 
    *   Resolved Volcengine Doubao Seed tool call leakage ([#3153](https://github.com/sipeed/picoclaw/issues/3153)).
    *   Fixed rate-limiting logic for models without configured fallbacks ([#3232](https://github.com/sipeed/picoclaw/issues/3232)).
    *   Corrected a regression in the Antigravity provider regarding `tool_schema_transform` ([#3274](https://github.com/sipeed/picoclaw/issues/3274)).
    *   Applied backward compatibility fixes ([#3233](https://github.com/sipeed/picoclaw/pull/3233)).

## Community Hot Topics
*   **Security & Maintenance:** Issue #3088 highlights a high-priority need to replace the unmaintained `libolm` with `vodozemac` ([#3088](https://github.com/sipeed/picoclaw/issues/3088)).
*   **Authentication Reliability:** PR #3280 addresses a critical pain point where OAuth logins fail in headless or remote environments due to burned authorization codes ([#3280](https://github.com/sipeed/picoclaw/pull/3280)).
*   **Model Resilience:** PR #3200 proposes a configurable default fallback chain, a highly requested feature for ensuring reliability when primary models fail ([#3200](https://github.com/sipeed/picoclaw/pull/3200)).

## Bugs & Stability
**Severity Ranking:**
1.  **Critical (Stability):** Matrix sync loop dies permanently after network/server disruption with no reconnection logic ([#3203](https://github.com/sipeed/picoclaw/issues/3203)).
2.  **High (Authentication):** OAuth login failure in remote setups, causing users to lose authorization codes ([#3280](https://github.com/sipeed/picoclaw/pull/3280)).
3.  **Medium (Performance):** Web UI chat input becomes significantly laggy as chat history grows ([#3281](https://github.com/sipeed/picoclaw/issues/3281)).
4.  **Medium (UI/UX):** DingTalk chat list preview displays "PicoClaw" instead of actual message content ([#3255](https://github.com/sipeed/picoclaw/issues/3255)).

## Feature Requests & Roadmap Signals
*   **Enhanced Platform Support:** PR #3256 aims to support native audio and video message types for Feishu ([#3256](https://github.com/sipeed/picoclaw/pull/3256)).
*   **Advanced Model Handling:** PR #3228 seeks to enable Anthropic prompt caching by supporting `SystemParts` with `cache_control` ([#3228](https://github.com/sipeed/picoclaw/pull/3228)).
*   **Configuration Expansion:** The push for a configurable fallback chain (#3200) suggests a move toward more robust, production-ready agent configurations.

## User Feedback Summary
Users are reporting specific friction points regarding **remote deployment** (OAuth hurdles) and **UI responsiveness** (input lag). There is a clear demand for **brand personalization** (bot names) and **reliable failover** (fallback chains). Overall, the feedback suggests a transition from "experimental" use toward "production" stability.

## Backlog Watch
*   **#3088 (High Priority):** Migration to `vodozemac` is a critical security/maintenance task that requires maintainer attention.
*   **#3203 (Stability):** The Matrix reconnection logic is a significant "silent death" bug that affects long-term uptime.
*   **#3281 (Usability):** The Web UI lag issue may hinder adoption for users with long-running conversations.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest - 2026-07-22

## Today's Overview
NanoClaw is currently experiencing a period of high development velocity, evidenced by 12 Pull Requests updated within the last 24 hours. The project's current focus is split between infrastructure stability (specifically containerization and networking) and expanding the "skills" ecosystem for communication channels. The activity suggests a transition from core infrastructure hardening to refining the user experience for regional markets.

## Releases
*No new releases were recorded in the last 24 hours.*

## Project Progress
The following PRs were merged/closed today, advancing the project's capabilities:
*   **Sync & Maintenance:** PR #3116 [follows-guidelines] sync pr was completed.
*   **Observability:** PR #3114 [follows-guidelines] Langfuse tracing skill was closed, enhancing the project's ability to track agent traces.
*   **Documentation:** PR #3095 [core-team] successfully updated the branch maintenance guide for the registry-branch model, improving contributor workflow.

## Community Hot Topics
*   **LINE Integration Request:** Issue [#3096](https://github.com/nanocoai/nanoclaw/issues/3096) is a significant point of discussion. Users are pushing for LINE Official Account support, noting its dominance in Japan, Taiwan, and Thailand. This highlights a need for broader regional accessibility.
*   **Setup Reliability:** PR [#3112](https://github.com/nanocoai/nanoclaw/pull/3112) addresses a critical port collision between OneCLI and local PostgreSQL instances, a recurring pain point for developers setting up the environment.
*   **WhatsApp Media Handling:** Active development on [#3113](https://github.com/nanocoai/nanoclaw/pull/3113) and [#2896](https://github.com/nanocoai/nanoclaw/pull/2896) shows a concerted effort to stabilize media processing in messaging workflows.

## Bugs & Stability
The following issues were identified or updated, ranked by severity:
1.  **High - Port Collisions:** [#3112](https://github.com/nanocoai/nanoclaw/pull/3112) - OneCLI installer's bundled Postgres container defaults to port 5432, causing installation failures on hosts with existing Postgres instances.
2.  **High - Permission Errors:** [#1530](https://github.com/nanocoai/nanoclaw/pull/1530) - Docker volume mounts fail on SELinux-enforcing systems (Fedora, RHEL) without the `:z` relabeling option.
3.  **Medium - Message Loss:** [#3111](https://github.com/nanocoai/nanoclaw/pull/3111) - Telegram's legacy Markdown parser strips URLs containing underscores (e.g., GitLab merge requests), causing messages to be dropped silently.
4.  **Medium - Workspace Visibility:** [#2236](https://github.com/nanocoai/nanoclaw/pull/2236) - A mismatch between the `WORKDIR` in the Dockerfile and the actual mount path causes the agent's workspace to be invisible in containers.

## Feature Requests & Roadmap Signals
*   **Regional Expansion:** The request for `/add-line` skill ([#3096](https://github.com/nanocoai/nanoclaw/issues/3096)) signals a priority for the Asian market.
*   **Communication Expansion:** PR [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) indicates the addition of **Dial** to the channel picker and wizard, suggesting a move toward multi-channel communication support.
*   **Localization:** PR [#2950](https://github.com/nanocoai/nanoclaw/pull/2950) adds a Traditional Chinese README, signaling an effort to broaden the user base.

## User Feedback Summary
*   **Deployment Friction:** Users are reporting difficulties with "out of the box" functionality on specific Linux distributions (SELinux issues) and port conflicts during initial setup.
*   **Channel Gaps:** There is clear demand for more diverse messaging integrations beyond standard SMS/WhatsApp/Telegram, specifically focusing on regional giants like LINE.
*   **Observability:** The inclusion of Langfuse tracing suggests users are seeking better visibility into agent decision-making and execution paths.

## Backlog Watch
*   **SELinux Fix (#1530):** This PR has been open since March. While it is a critical fix for system administrators, it requires finalization to ensure it is merged into the main branch to standardize container behavior.
*   **WhatsApp Regression (#2896):** This is a complex fix involving the `appendMediaFailureNote` logic. It requires careful review to ensure no further regressions occur in the approval-answer path.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest: 2026-07-22

## 1. Today's Overview
The IronClaw project is currently undergoing a major architectural transition, moving from the legacy V1 system to the "Reborn" architecture. Activity remains high with 50 PR updates and a significant focus on infrastructure hardening, storage consolidation, and operator tooling. The project health appears robust, characterized by a high volume of "XL" sized refactors and a clear roadmap toward a more resilient, observable agent runtime.

## 2. Releases
**ironclaw-v1.0.0-rc.1** (Released: 2026-07-20)
*   **Type:** Major Architectural Rebuild (Release Candidate)
*   **Changes:** This is a ground-up rebuild of the agent runtime, storage, extension host, and web UI.
*   **Migration Notes:** This is **not** an incremental update on the 0.29.x line. The `ironclaw` binary has been redefined as the rearchitected CLI.

## 3. Project Progress
The team successfully closed several critical architectural and operational items today:
*   **Storage Consolidation:** Retired `InMemoryTurnStateStore` and removed in-memory ratchet stores (#6263, #6430) in favor of durable, filesystem-backed stores.
*   **Operator Tooling:** Completed the "Reborn" operator setup, configuration diagnostics, and a new logs query/tail/follow API with redaction (#4533, #4597, #4596).
*   **Authorization & Dispatch:** Finalized the witness-always-present and dispatch-through-witness logic (#6396, #6432).
*   **Runtime Architecture:** Merged the unified generic extension runtime and state machine reconciliation (#6116).

## 4. Community Hot Topics
*   **Product Surface Refactoring:** A massive refactor (#6441) to move the WebUI and product-auth components onto a `ProductSurface` trait, signaling a move toward more decoupled service boundaries.
*   **Design System Evolution:** Development of a design system for WebUI v2 (#5563) is a priority, intended to allow the AI to implement UI improvements autonomously.
*   **MCP Discovery:** Discussion and drafting regarding per-user hosted-MCP discovery (#6365) for worker agents.
*   **Trace Analysis:** Efforts to harvest and replay full LLM traces (#6422, #6439) to improve agent reliability and testing.

## 5. Bugs & Stability
*   **High Severity:** **Restore SSE streams across navigation (#6425)**. This addresses a critical WebUI issue where streams are lost during thread or tab navigation.
*   **High Severity:** **Model-visible failures recoverable (#6437)**. This aims to route failures through typed recovery or model-visible outcomes rather than opaque executor failures, which is vital for agent "self-healing."
*   **Medium Severity:** **Replay QA traces (#6439)**. While a testing tool, it is being used to identify and reproduce failures found in harvested traces.

## 6. Feature Requests & Roadmap Signals
*   **Custom Instructions:** A high-priority request for a dedicated "Master Prompt" or personalization section in the UI, similar to ChatGPT/Claude (#6433).
*   **Google Extension Enhancements:** Adding context-efficient capabilities like `gmail.fetch_message_summaries` (#5503).
*   **Error-Recoverability Endgame:** A long-term "Epic" goal (#6284) where the model is expected to recover from 100% of the errors it encounters.

## 7. User Feedback Summary
*   **Personalization:** Users are seeking a more seamless way to set persistent preferences without manually injecting instructions into every chat turn.
*   **Observability:** There is a clear demand for better "Doctor" diagnostics and log management tools to debug agent behavior in production-like environments.

## 8. Backlog Watch
*   **Error-Recoverability Endgame (#6284):** This remains a massive, high-level goal that requires significant ongoing effort to ensure the model can act on every failure.
*   **Design System Isolation (#5563):** Maintainers are pushing to finish the design system in isolation before allowing deeper product integration to ensure stability.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest: 2026-07-22

## Today's Overview
LobsterAI shows a high level of development activity today with 10 pull requests updated, primarily focusing on refining the user experience (UX) regarding "Artifacts" and model interaction stability. The project is currently in a polishing phase, addressing specific UI frustrations like ad management and improving the consistency of multi-modal inputs. Overall project health is strong, characterized by rapid iteration on both core logic and deployment workflows.

## Releases
*No new releases were recorded today.*

## Project Progress
Significant progress was made today regarding infrastructure stability and the "Artifacts" feature set:
*   **Communication Stability:** Resolved SSE truncation issues specifically for OpenClaw ([PR #2372](https://github.com/netease-youdao/LobsterAI/pull/2372)).
*   **Browser Interaction:** Improved browser comment synchronization, including support for element style modifications without comments and better handling of draft clearing ([PR #2371](https://github.com/netease-youdao/LobsterAI/pull/2371)).
*   **Monetization & Sharing:** Unified the subscription and sharing logic for Artifacts, including specific UI for sharing vs. local deployment and refined permission prompts ([PR #2370](https://github.com/netease-youdao/LobsterAI/pull/2370), [PR #2369](https://github.com/netease-youdao/LobsterAI/pull/2369)).
*   **Deployment:** Implemented a silent Windows installer via PowerShell to improve the installation experience for desktop users ([PR #2368](https://github.com/netease-youdao/LobsterAI/pull/2368)).

## Community Hot Topics
The community is currently focused on two primary areas:
*   **UX Customization:** There is a clear demand for persistent UI controls, specifically a toggle to hide sidebar ad banners ([PR #2374](https://github.com/netease-youdao/LobsterAI/pull/2374)).
*   **Multi-modal Consistency:** A significant discussion point involves ensuring that image attachments correctly sync with the capabilities of the currently selected model ([PR #2373](https://github.com/netease-youdao/LobsterAI/pull/2373)).

## Bugs & Stability
*   **High Severity:** **Image Attachment Desync.** When switching between vision and non-vision models, the system fails to update the handling of image attachments (Base64 vs. File Path). This prevents vision models from "seeing" images if the user switches from a non-vision model to a vision model ([Issue #1861](https://github.com/netease-youdao/LobsterAI/issues/1861)).
*   **Medium Severity:** **SSE Truncation.** Fixed an issue where Server-Sent Events were being truncated in specific environments, affecting stream stability ([PR #2372](https://github.com/netease-youdao/LobsterAI/pull/2372)).

## Feature Requests & Roadmap Signals
*   **Ad Management:** The addition of a permanent "Hide Sidebar Ad" toggle suggests a move toward providing more user agency over the UI.
*   **Artifact Evolution:** The heavy focus on sharing, deployment, and subscription gates for Artifacts indicates that "Artifacts" are a primary growth lever for the project's roadmap.
*   **Enhanced Interaction:** Improvements to browser comments and element modification states suggest a roadmap toward deeper "agentic" browser interaction.

## User Feedback Summary
*   **Pain Points:** Users are experiencing frustration with "stale" states when switching models (specifically regarding images) and the lack of a permanent way to dismiss ads.
*   **Use Cases:** Frequent use of the "Artifacts" feature for sharing and local deployment is evident from the recent PR focus.

## Backlog Watch
*   **Issue #1861:** This is a long-standing issue (created in April 2026) regarding image attachment handling. While [PR #2373](https://github.com/netease-youdao/LobsterAI/pull/2373) aims to address this, the original issue remains open and requires verification.
*   **Stale Dependencies:** Several dependency updates ([PR #1279](https://github.com/netease-youdao/LobsterAI/pull/1279), [PR #1280](https://github.com/netease-youdao/LobsterAI/pull/1280), [PR #1281](https://github.com/netease-youdao/LobsterAI/pull/1281)) are currently marked as stale and need maintainer attention to ensure the project remains secure and up-to-date.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest: 2026-07-22

## Today's Overview
The Moltis project maintains a steady but low-intensity activity profile today, with no new releases or merged features. Activity is primarily focused on ongoing discussions regarding architectural enhancements and automated dependency maintenance. The current status reflects a project in a steady-state development phase, focusing on refining the roadmap rather than rapid-fire deployment.

## Project Progress
There were no merged or closed Pull Requests today. Development progress is currently centered on open discussions and maintenance tasks rather than finalized code integrations.

## Community Hot Topics
*   **Model Routing Per Topic ([Issue #574](https://github.com/moltis-org/moltis/issues/574))**
    *   **Status:** Open (Enhancement)
    *   **Activity:** 5 comments, 1 reaction.
    *   **Analysis:** This is the primary point of community interest. The request highlights a growing need for granular control over model selection based on the specific context or topic of a task. This suggests users are looking for ways to optimize for cost, latency, and specialized reasoning capabilities by routing queries to different LLMs dynamically.

## Bugs & Stability
No new bugs, crashes, or regressions were reported today. The project appears stable in its current deployment state.

## Feature Requests & Roadmap Signals
*   **Model Routing ([Issue #574](https://github.com/moltis-org/moltis/issues/574))**
    *   **Signal:** This is a significant roadmap signal. The request for topic-based routing indicates that as users scale their use of Moltis, they require sophisticated orchestration logic to manage multiple model providers efficiently.
    *   **Prediction:** Given the level of engagement (5 comments), this is likely to be prioritized in a future major update to improve operational efficiency for enterprise-level agent workflows.

## User Feedback Summary
While specific qualitative feedback was not summarized in today's data, the request for Model Routing serves as a proxy for user pain points regarding **cost management** and **model optimization**. Users are signaling that a "one-size-fits-all" model approach is insufficient for complex, multi-topic agentic workflows.

## Backlog Watch
*   **Issue #574 ([Model Routing Per topic](https://github.com/moltis-org/moltis/issues/574))**: This issue has been open since April 2026. Despite the lack of a merged PR today, it remains a high-priority item for maintainer attention to prevent stagnation of the project's orchestration capabilities.
*   **PR #1161 ([chore(deps): bump astro](https://github.com/moltis-org/moltis/pull/1161))**: This is a standard Dependabot maintenance task; no immediate action is required from maintainers unless the merge is delayed.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# Project Digest: CoPaw (QwenPaw)
**Date:** 2026-07-22
**Project Status:** Highly Active / Development Phase

---

### 1. Today's Overview
CoPaw is experiencing a period of intense development activity, characterized by a high volume of pull request updates (49) and a significant turnover of closed issues (9). The project is currently stabilizing its v2.0 branch, as evidenced by the release of a new beta version and several core architectural improvements regarding tool registration and workflow modes. The community is actively pushing for more granular control over model selection and improved UX for file handling.

### 2. Releases
*   **v2.0.1-beta.1**
    *   **Changes:** Fixed absolute import issues in the Tauri entry point, bumped versioning, and implemented error handling for `OSError` in the `memoryspace` module.
    *   **Note:** This is a beta release aimed at stabilizing the core infrastructure before a full production rollout.
    *   **Link:** [v2.0.1-beta.1](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.0.1-beta.1)

### 3. Project Progress
Significant progress was made today through the closure of several key PRs and features:
*   **Workflow Integration:** Completed the integration of OMP workflow modes (UltraQA, Ralph, Ultrawork, Autopilot, and Team) and expanded `spawn_subagent` capabilities ([#5882](https://github.com/agentscope-ai/QwenPaw/pull/5882)).
*   **Tool Governance:** Unified tool registration via `@tool_descriptor` and `PluginApi`, streamlining how the system handles built-in and plugin tools ([#6190](https://github.com/agentscope-ai/QwenPaw/pull/6190)).
*   **UX Improvements:** Added one-click agent configuration copying ([#6262](https://github.com/agentscope-ai/QwenPaw/pull/6262)) and finalized configurable log rotation limits ([#6183](https://github.com/agentscope-ai/QwenPaw/pull/6183)).
*   **Bug Fixes:** Resolved LaTeX rendering issues ([#6320](https://github.com/agentscope-ai/QwenPaw/issues/6320)) and fixed session collision/contamination issues ([#6299](https://github.com/agentscope-ai/QwenPaw/issues/6299)).

### 4. Community Hot Topics
*   **Granular Model Control:** There is a strong community demand for switching models at the conversation level rather than just the agent level ([#6318](https://github.com/agentscope-ai/QwenPaw/issues/6318)). This is being addressed via a pending PR for per-session model overrides ([#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992)).
*   **File Handling UX:** Users are requesting drag-and-drop support for images and documents (PDF, Office) to facilitate workflows like contract auditing ([#6297](https://github.com/agentscope-ai/QwenPaw/issues/6297)).
*   **Mobile Adaptation:** Requests for Web Console mobile optimization are gaining traction ([#6281](https://github.com/agentscope-ai/QwenPaw/issues/6281)).

### 5. Bugs & Stability
| Severity | Issue | Description | Status |
| :--- | :--- | :--- | :--- |
| **Critical** | [#6314](https://github.com/agentscope-ai/QwenPaw/issues/6314) | `RemoteProtocolError`: Peer closed connection without complete body. | **Closed** |
| **High** | [#6324](https://github.com/agentscope-ai/QwenPaw/issues/6324) | Large model responses being truncated (noted on MiniMax-M3). | **Open** |
| **High** | [#6307](https://github.com/agentscope-ai/QwenPaw/issues/6307) | **Performance Regression:** v2.0 introduces ~2s fixed overhead per reply. | **Open** |
| **Medium** | [#6301](https://github.com/agentscope-ai/QwenPaw/issues/6301) | Incorrect timestamp timezone conversion for naive UTC sessions. | **Fix in Progress** ([#6309](https://github.com/agentscope-ai/QwenPaw/pull/6309)) |

### 6. Feature Requests & Roadmap Signals
*   **Content Creation:** A new "QwenPaw Creator" app-type plugin is in development to bring script-to-video workflows into the ecosystem ([#6284](https://github.com/agentscope-ai/QwenPaw/pull/6284)).
*   **Agent Logic:** Request for pre-condition rules in `AGENTS.md` to prevent agents from skipping critical verification steps ([#6321](https://github.com/agentscope-ai/QwenPaw/issues/6321)).
*   **Customization:** Exploration of a configurable theme/skin module for the console ([#6312](https://github.com/agentscope-ai/QwenPaw/pull/6312)).

### 7. User Feedback Summary
*   **Pain Points:** Users are reporting frustration with the 2-second latency overhead in the new version (#6307) and difficulties in managing different models for different specific tasks within the same agent.
*   **Use Cases:** Strong interest in "Contract Auditing" (requiring document uploads) and "Script to Video" creation.
*   **Sentiment:** Generally positive regarding the rapid iteration of the v2.0 architecture, but there is growing concern over performance regressions and mobile accessibility.

### 8. Backlog Watch
*   **Performance Optimization:** Issue **#6307** (v2.0 overhead) is a high-priority item for maintainers to address to ensure user retention.
*   **Core Logic:** Issue **#6321** (pre-condition rules) represents a significant jump in agent reliability and needs a structured response from the core team.
*   **Mobile Support:** Issue **#6281** remains open; as the Web Console grows, mobile adaptation will become a critical milestone.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest: 2026-07-22

## Today's Overview
ZeroClaw is currently experiencing a period of high-intensity development, evidenced by 50 pull request updates in the last 24 hours. While the number of new issues remains low (6 updates), the volume of active PRs suggests significant architectural work is underway, particularly regarding the "Goal" system and remote persistence foundations. The project is showing a strong focus on production-grade security, observability, and protocol standardization.

## Releases
*No new releases were recorded today.*

## Project Progress
Three items were closed or merged today, focusing on communication infrastructure and routing logic:
*   **[Closed] RFC: Structured Security Audit Pipeline (#9086):** Finalized the proposal for tamper-evident logging and resilient upload anomaly detection to address the lack of a production audit trail. [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/9086)
*   **[Closed] SOP Routing Bug (#9120):** Resolved a regression where SOP routing incorrectly evaluated switches after a false top-level `when` condition. [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/9120)
*   **[Closed] Mattermost WebSocket Listener (#7082):** Successfully added an optional WebSocket listener mode to the Mattermost channel implementation to move beyond REST API polling. [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/7082)

## Community Hot Topics
The following areas are seeing significant activity and represent the current pulse of the project:
*   **Goal System Overhaul:** A massive stack of PRs (#8687, #8688, #8689) is being developed to introduce trusted goal tools, delegation boundaries, and a goal controller/verifier. This indicates a move toward more complex, multi-step agentic workflows. [Links](https://github.com/zeroclaw-labs/zeroclaw/pull/8687), [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/8688), [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/8689)
*   **OpenAI Protocol Compatibility:** PR #8486 aims to add an OpenAI chat completions endpoint, which is a high-priority request for users who want to use standard LLM client libraries and IDE extensions. [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/8486)
*   **Plugin Verification:** PR #8949 is a large, stacked update adding webhook GET handling and challenge-echoes for plugin verification. [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/8949)

## Bugs & Stability
The following issues were updated/reported today, ranked by severity:
1.  **S0 - Shell Tool Workspace Boundary Bypass (#9247):** A critical security risk where the shell tool does not enforce the same workspace boundaries as file tools, potentially allowing unauthorized file access via symlinks. [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/9247)
2.  **High Risk - SSRF Gate for `image_gen` (#8826):** A security vulnerability where the tool fetches images from server-supplied URLs without proper host classification. [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/8826)
3.  **High Risk - SSRF Gate for `file_download` (#8713):** Another SSRF surface where the operator-configured endpoint URL lacked a host classifier. [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/8713)
4.  **S2 - Reasoning-only Turn Hang (#9234):** A UI/UX bug where the web chat hangs when a model produces reasoning but no content. [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/9234)

## Feature Requests & Roadmap Signals
*   **Remote Persistence:** PR #9249 introduces the foundation for a session-backend, signaling a move toward persistent state across remote sessions. [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/9249)
*   **Evaluation Dashboard:** A request (#9228) for a longitudinal dashboard to track pass-rates and trend analysis for evaluation harnesses. [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/9228)
*   **Windows Native Shell:** Support for PowerShell as the native shell on Windows is being integrated (#9182). [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/9182)
*   **Matrix Progress Drafts:** Support for single-message progress drafts and reasoning on the Matrix channel. [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/8443)

## User Feedback Summary
*   **Security Concerns:** Users and contributors are highly focused on preventing SSRF and ensuring strict workspace boundaries, suggesting that ZeroClaw is moving toward high-stakes production environments.
*   **Standardization:** There is a clear demand for "standard" interfaces (like OpenAI Chat Completions) to lower the barrier for integration with existing tools like LangChain and Aider.
*   **Observability:** The community is pushing for better "audit trails" and "trend tracking" rather than just raw logs, indicating a need for better operational visibility.

## Backlog Watch
*   **RFC: Preserve Todo tracker configuration (#9246):** This high-risk RFC regarding ZeroCode ownership migration is pending and requires maintainer attention to ensure configuration persistence. [Link](https://github.com/zeroclaw-labs/zeroclaw/issues/9246)
*   **Refactor: TodoWrite display config (#9013):** A significant refactor to move display concerns out of the daemon and into the client/UI layer. [Link](https://github.com/zeroclaw-labs/zeroclaw/pull/9013)

</details>