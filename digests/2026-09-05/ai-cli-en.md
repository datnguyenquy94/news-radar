# AI CLI Tools Community Digest 2026-09-05

> Generated: 2026-09-05 04:04 UTC | Tools covered: 10

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

# AI CLI Tools Ecosystem Cross-Tool Comparison Report
**Date:** 2026-09-05 | **Tools Analyzed:** 10 major AI CLI tools

---

## 1. Ecosystem Overview

The AI CLI tools landscape is characterized by **rapid, fragmented iteration** across vendor-backed and community-driven projects. All active tools shipped releases or significant fixes within 24 hours, with GitHub Copilot CLI leading at **3 releases in 24 hours**. Windows platform parity remains the dominant cross-cutting pain point (affecting 5/9 active tools), while model-version fidelity, session resilience, and plugin/extensibility architectures are converging as strategic differentiators. The ecosystem shows a clear bifurcation: **vendor-backed tools** (Claude Code, Codex, Copilot CLI, Gemini CLI) prioritize enterprise features and model integration, while **community/alternative tools** (OpenCode, Pi, Qwen Code, DeepSeek TUI) focus on local-model support, privacy defaults, and TUX polish.

---

## 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Updated (24h) | Release Status | Release Version |
|------|---------------------|-------------------|----------------|-----------------|
| **Claude Code** | 10 (high-engagement) | 2 | ✅ Released | v2.1.261 |
| **OpenAI Codex** | 10 (high-engagement) | 14 (merged) | ✅ Released | rust-v0.153.3 → v0.153.4 |
| **Gemini CLI** | 10 | 10 | ✅ Nightly | v0.60.0-nightly.20260905 |
| **GitHub Copilot CLI** | 10 (regression-heavy) | 1 (template) | ✅ Released ×3 | v1.0.84-1, v1.0.84-0, v1.0.83 |
| **Kimi Code CLI** | 2 | 1 | ❌ None | — |
| **OpenCode** | 10 | 10 | ✅ Released ×2 | v1.18.28 → v1.18.29 |
| **Pi** | 10 | 10 | ✅ Released (broken) | v0.85.0* |
| **Qwen Code** | 10 | 10 | ❌ None | — |
| **DeepSeek TUI** | 5 | 10 (incl. 8 dependabot) | ❌ None | — |
| **Grok Build** | 0 | 0 | ❌ No activity | — |

*\*Pi v0.85.0 shipped with undeclared runtime dependency breaking fresh installs; fix in PR #9170*

---

## 3. Shared Feature Directions

| Requirement | Tools Affected | Specific Needs |
|-------------|----------------|----------------|
| **Windows/WSL2 Parity** | Claude Code, Codex, Copilot CLI, Gemini CLI, Pi, Kimi Code | Orphaned process cleanup, EFS plugin loading, WSL path deserialization, Ctrl+V paste, terminal input handling |
| **Model Version Fidelity** | Codex, Gemini CLI, Copilot CLI, OpenCode, Pi | Explicit pinning honored (Gemini #28859), integer-version filtering (OpenCode #19948), Astra visibility (Codex #42874), provider-specific max_tokens (Pi #8760) |
| **Session/Context Resilience** | All 9 active tools | Compaction reliability (Claude #74318, Pi #9167), transcript integrity (Qwen #11060), child session visibility (OpenCode #29175), sandbox isolation (Gemini #29214) |
| **Plugin/Extensibility Overhaul** | Claude Code, OpenCode, Copilot CLI, Pi, Qwen Code | Function Hooks middleware (Claude #91870), session/forms/events API (OpenCode #46690), MCP OAuth CIMD (Copilot v1.0.83), pre-tool hooks (Pi #9175), Skills runtime (Qwen #10697) |
| **Local Model First-Class Support** | OpenCode, Pi, DeepSeek TUI, Qwen Code | Ollama/LM Studio integration (OpenCode #19948), Bedrock Mantle (Pi #5363), Ollama token budget (DeepSeek #5820), self-hosted model discovery |
| **Cost/Token Observability** | Claude Code, Codex, Copilot CLI, Pi, Qwen Code | Subagent cache spend (Claude #74318), Code Mode batching (Codex #35050), BYOK cache disable (Copilot #4720), auto-compaction accuracy (Pi #9167), export bloat (Qwen #11031) |

---

## 4. Differentiation Analysis

| Dimension | Vendor-Backed (Claude, Codex, Copilot, Gemini) | Community/Alternative (OpenCode, Pi, Qwen, DeepSeek) |
|-----------|-----------------------------------------------|-----------------------------------------------------|
| **Target User** | Enterprise teams, paid subscribers, cloud-integrated workflows | Power users, local-first advocates, privacy-conscious devs, OSS contributors |
| **Technical Approach** | Managed sandbox/cloud execution, proprietary model integration, telemetry-by-default | Local execution, BYOK/BYO-model, opt-in telemetry, stdio/MCP-based extensibility |
| **Feature Focus** | Model capabilities (Astra, Flash 3.6), enterprise auth (CIMD, Bedrock), TUI polish | Plugin architecture depth, session/tree navigation, export fidelity, allocator/build portability |
| **Release Cadence** | Frequent patches (multiple/day), staged rollouts, hotfix-driven | Patch pairs (OpenCode), nightlies (Gemini, Qwen), community PR-driven |
| **Platform Priority** | macOS/Linux first; Windows as persistent gap | Cross-platform parity explicit goal; Windows bugs treated as P0 |

**Unique Differentiators:**
- **Claude Code:** Organization policy diagnostics, Function Hooks proposal (plugin-system overhaul)
- **Codex:** GPT-6-Astra async questions in TUI, Code Mode batching optimization
- **Copilot CLI:** Windows 11 taskbar live cards, MCP OAuth CIMD, per-agent model lists
- **Gemini CLI:** AST-aware tooling epic, sandbox credential isolation, NTFS 8.3 handling
- **OpenCode:** AWS Bedrock credential chain, parallel plugin loading, LSP LRU eviction
- **Pi:** Persistent Claude thinking effort, session tree navigation, Meta Muse provider
- **Qwen Code:** `--bg` detached sessions, Web Shell turn navigation, workspace-scoped Skills
- **DeepSeek TUI:** Automatic skill evolution from dialog, pure-Rust allocator option, atomic commit splitting

---

## 5. Community Momentum & Maturity

| Tier | Tools | Indicators |
|------|-------|------------|
| **High Momentum (Daily multi-PR/issue velocity)** | Codex, Copilot CLI, OpenCode, Pi, Qwen Code | 10+ PRs/day, rapid hotfix cycles, active design discussions (Function Hooks, Skills runtime), multiple concurrent releases |
| **Sustained Activity (Daily releases + high engagement)** | Claude Code, Gemini CLI | 100+ comment issues, org-policy diagnostics, security-focused nightlies, P1 model fidelity fixes |
| **Niche/Steady (Focused community, specific strengths)** | DeepSeek TUI | Rapid bug-turnaround (Ollama fix in hours), dependabot hygiene, agent-memory roadmap |
| **Low Activity (Early stage or maintenance)** | Kimi Code CLI | 2 issues, 1 PR, Windows input regression, docs-focused enhancement |
| **Inactive** | Grok Build | Zero 24h activity |

**Maturity Signals:**
- **Most mature engineering practices:** OpenCode (AWS credential chain, LSP LRU, parallel plugin loading), Pi (CI guard against missing deps, compaction race tests)
- **Most enterprise-ready:** Copilot CLI (CIMD, per-agent model policy, Windows 11 integration), Claude Code (org-policy diagnostics, `/status` visibility)
- **Highest community friction:** Codex (8/10 top issues Windows), Claude Code (230+ comments on Windows orphaned processes)

---

## 6. Trend Signals for Technical Decision-Makers

| Trend | Evidence | Strategic Implication |
|-------|----------|----------------------|
| **MCP/ACP as Universal Plugin Layer** | Copilot CLI CIMD, OpenCode session APIs, Codex sandbox adapters, Pi provider expansion | **Invest in MCP server development**; stdio-based tool exposure becoming de facto standard across vendors |
| **Local-First + Cloud Hybrid** | OpenCode Ollama, Pi Bedrock Mantle, DeepSeek Ollama fixes, Qwen daemon sessions | **Architecture must support both**; pure cloud tools adding local, pure local adding cloud gateways |
| **Session as First-Class Object** | Pi session trees, Qwen `--bg`/turn nav, OpenCode child sessions, Copilot live cards | **Session management > chat history**; persistence, branching, resumption, export are competitive features |
| **Security Hardening Accelerating** | Gemini env sanitization + symlink resolution, Pi compaction races, Copilot sandbox bypass, Claude org-policy diagnostics | **Enterprise adoption gated on supply-chain/sandbox guarantees**; expect more "security-focused" patch releases |
| **Windows as Strategic Battleground** | 5 tools with P0 Windows issues, Copilot taskbar integration, Kimi/DeepSeek input fixes | **Windows CI/test matrix investment required**; Store/EFS/WSL2/Terminal quirks are systemic, not incidental |
| **Model Routers/Providers Proliferating** | Pi (Meta, Bedrock, OpenRouter), OpenCode (Bedrock chain), Codex (Astra/Bedrock), Copilot (Astra) | **Abstract model selection**; hardcoded model logic becoming technical debt |

---

## Recommendation Summary

| For... | Recommended Primary Tool(s) | Rationale |
|--------|----------------------------|-----------|
| **Enterprise teams (Windows-heavy)** | Copilot CLI → Claude Code | Best Windows integration (taskbar, sandbox), org policy visibility, rapid patch cadence |
| **Local-first / privacy / OSS** | OpenCode → Pi → DeepSeek TUI | Opt-in telemetry, local model parity, AWS Bedrock chain, pure-Rust build, agent memory roadmap |
| **Cutting-edge model access** | Codex → Copilot CLI → Pi | Astra async questions, GPT-6 first, Meta Muse, Bedrock Mantle |
| **Session-heavy / automation workflows** | Pi → Qwen Code → OpenCode | Session trees, `--bg` agents, child sessions, compaction reliability |
| **Cross-platform consistency** | Gemini CLI → OpenCode | Explicit Windows/WSL2/NTFS fixes, sandbox isolation, symlink handling |

*The ecosystem rewards **polyglot toolchains** — no single CLI covers all bases. Expect continued convergence on MCP/ACP, session objects, and local-cloud hybrid architectures through 2026.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report  
*Data as of 2026-09-05 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking — Most-Discussed PRs

| # | Skill / PR | Functionality | Discussion Highlights | Status |
|---|------------|---------------|----------------------|--------|
| 1 | **skill-creator evaluation fix** ([#1298](https://github.com/anthropics/skills/pull/1298)) | Fixes `run_eval.py` reporting 0% recall for all skills; installs eval artifact as real skill, fixes Windows stream reading, trigger detection, parallel workers | Directly addresses **Issue #556** (12 comments, 7 👍) — the core evaluation loop was optimizing against noise; 10+ independent reproductions | Open |
| 2 | **Windows compatibility for skill-creator** ([#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050)) | Fixes `claude.cmd` vs `claude` executable resolution, subprocess pipe reading, encoding bugs on Windows | Same root cause as #556; `run_loop.py` unusable on Windows — every query recorded as “not triggered” | Open |
| 3 | **Multi-area reliability fixes** ([#1602](https://github.com/anthropics/skills/pull/1602)) | Fixes MCP-builder serialization, benchmark metrics, encoding, script stability across skills | Resolves silent failures in `mcp-builder` evaluation (related to **Issue #1390**, 4 comments) | Open |
| 4 | **self-audit** ([#1367](https://github.com/anthropics/skills/pull/1367)) | Mechanical file verification → four-dimension reasoning audit (correctness, completeness, safety, clarity) in damage-severity order | Universal, stack-agnostic quality gate; v1.3.0 adds damage-severity prioritization | Open |
| 5 | **Hivemind: Zero-Cost Multi-Agent Orchestration** ([#1628](https://github.com/anthropics/skills/pull/1628)) | Delegates mechanical work to headless **opencode** workers (free models); Claude stays planner/reviewer/merger | Targets expensive-model context as scarce resource; novel cost-optimization pattern | Open |
| 6 | **ServiceNow platform skill** ([#568](https://github.com/anthropics/skills/pull/568)) | Broad ServiceNow assistant: ITSM, ITOM, ITAM/SAM, FSM, HRSD, CSM, SPM, SecOps, Vulnerability Response, IntegrationHub | Enterprise demand; updated through Aug 2026; covers scripting + architecture + governance | Open |
| 7 | **testing-patterns** ([#723](https://github.com/anthropics/skills/pull/723)) | Full testing stack: Testing Trophy, AAA, React Testing Library, contract/E2E/performance, CI/CD, flakiness | Comprehensive reference skill; addresses testing maturity gap in AI-assisted dev | Open |
| 8 | **document-typography** ([#514](https://github.com/anthropics/skills/pull/514)) | Prevents orphan/widow lines, header stranding, numbering misalignment in AI-generated docs | “Affects every document Claude generates”; users rarely ask for good typography explicitly | Open |

---

## 2. Community Demand Trends — From Issues

| Trend | Evidence (Issue # / Comments / 👍) | What Users Want |
|-------|-----------------------------------|-----------------|
| **Trust & namespace security** | [#492](https://github.com/anthropics/skills/issues/492) (43 💬, 2 👍) | Community skills published under `anthropic/` namespace impersonate official skills — users grant elevated permissions to untrusted code |
| **Org-wide skill sharing** | [#228](https://github.com/anthropics/skills/issues/228) (16 💬, 8 👍) | Native shared skill library / direct sharing links; current workflow = download → Slack → manual upload |
| **Skill evaluation reliability** | [#556](https://github.com/anthropics/skills/issues/556) (12 💬, 7 👍) | `run_eval.py` never triggers skills (0% trigger rate); optimization loop is broken |
| **Duplicate skill installation** | [#189](https://github.com/anthropics/skills/issues/189) (6 💬, 9 👍) | `document-skills` + `example-skills` plugins install identical skills → context window bloat |
| **Context-window efficiency** | [#1487](https://github.com/anthropics/skills/issues/1487) (4 💬) | `claude-api` skill injects ~156k tokens in one call, exhausting context |
| **MCP/skill interoperability** | [#16](https://github.com/anthropics/skills/issues/16) (4 💬), [#1390](https://github.com/anthropics/skills/issues/1390) (4 💬) | Expose skills as MCPs; MCP-builder evaluation fails against real servers |
| **Bedrock / enterprise deployment** | [#29](https://github.com/anthropics/skills/issues/29) (4 💬) | Skills on AWS Bedrock — unclear if supported |
| **Meta-skills for skill quality** | [#83](https://github.com/anthropics/skills/pull/83) (PR), [#1385](https://github.com/anthropics/skills/issues/1385) (4 💬, 1 👍) | Quality gates: pre-task calibration → adversarial review → delivery verification |

---

## 3. High-Potential Pending Skills (Active PRs, Not Yet Merged)

| PR | Skill | Why It May Land Soon |
|----|-------|----------------------|
| [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator evaluation fix** | Blocks all skill optimization; 10+ reproductions; referenced by multiple follow-up PRs |
| [#1099](https://github.com/anthropics/skills/pull/1099) / [#1050](https://github.com/anthropics/skills/pull/1050) | **Windows skill-creator support** | Unblocks Windows contributors; 1-line fixes; same root cause as #556 |
| [#1602](https://github.com/anthropics/skills/pull/1602) | **Cross-skill reliability patches** | Touches MCP-builder, benchmarks, encoding — high leverage for stability |
| [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit** | Universal quality gate; v1.3.0 iterating fast; addresses reasoning reliability |
| [#1628](https://github.com/anthropics/skills/pull/1628) | **Hivemind** | Novel cost-optimization pattern; leverages free models via opencode |
| [#568](https://github.com/anthropics/skills/pull/568) | **ServiceNow** | Broad enterprise coverage; active maintenance through Aug 2026 |
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | Fills testing maturity gap; comprehensive reference implementation |
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | Solves universal AI-doc quality issue; low maintenance, high impact |

---

## 4. Skills Ecosystem Insight

> **The community’s most concentrated demand is *trustworthy, evaluatable, and shareable skills* — not just more skills. Users are blocked by broken evaluation tooling (0% trigger rate), namespace spoofing that breaks permission models, and no native org-wide distribution; every high-engagement issue traces to “can I rely on this skill, share it safely, and know it works?”**

---

# Claude Code Community Digest — 2026-09-05

## 1. Today's Highlights
- **v2.1.261 released** with organization-policy diagnostics in `/status` and `claude doctor`, plus new `bashOutputMaxChars`/`taskOutputMaxChars` settings to increase command/background output limits.
- **Windows desktop stability remains the top community pain point**: three high-engagement issues (#42776, #53247, #89680) detail orphaned processes, file locks, and stealth updates forcing reboots — collectively 230+ comments.
- **Function Hooks proposal (#91870)** gained rapid traction (100 comments, 62 👍) as a potential plugin-system overhaul, while a regression in `bypassPermissions` mode (#91650, #91683) is blocking Windows users with Read-deny rules.

---

## 2. Releases
### v2.1.261
- **Organization policy visibility**: `/status` and `claude doctor` now surface *why* an org policy failed to load (e.g., proxy not passing endpoint).
- **Output buffer controls**: `bashOutputMaxChars` and `taskOutputMaxChars` settings let users raise the cap on command and background-task output.
- *No breaking changes noted.*

---

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#42776](https://github.com/anthropics/claude-code/issues/42776) | **Windows Desktop fails to relaunch — orphaned process file lock** | Blocks all Windows desktop users after a crash; requires manual cleanup or reboot. | 159 comments, 75 👍 — highest engagement in repo. |
| [#91870](https://github.com/anthropics/claude-code/issues/91870) | **Function Hooks — make plugins 10× more powerful** | Proposes Express/Koa-style middleware hooks with side-effect tracking; could replace current plugin model. | 100 comments, 62 👍 — strong design discussion. |
| [#53247](https://github.com/anthropics/claude-code/issues/53247) | **Windows Desktop launch fails — orphaned Silo/Job Object (0x80070020)** | Same root cause as #42776 but at launch; only logoff/reboot recovers. | 60 comments, 28 👍. |
| [#91650](https://github.com/anthropics/claude-code/issues/91650) | **`bypassPermissions` prompts on `cd` with Read() deny rules (Windows Git Bash)** | Regression in 2.1.257–2.1.259: absolute `cd` triggers guard incorrectly. | 10 comments, 56 👍 — high impact for permission-heavy workflows. |
| [#89467](https://github.com/anthropics/claude-code/issues/89467) | **Windows app window forced always-on-top, no disable option** | UX blocker for multitasking; no setting/shortcut to turn off. | 15 comments, 10 👍. |
| [#89680](https://github.com/anthropics/claude-code/issues/89680) | **Stealth auto-update leaves orphaned AppX container; new version unlaunchable until reboot** | Silent updates break running sessions; no deferral/opt-out. | 15 comments, 1 👍. |
| [#91683](https://github.com/anthropics/claude-code/issues/91683) | **`bypassPermissions` prompts on `cd DIR && grep …` with Read() deny (regression 2.1.259)** | Same permission regression as #91650 but affects compound commands cross-platform. | 7 comments, 26 👍. |
| [#81658](https://github.com/anthropics/claude-code/issues/81658) | **Cross-platform sync failure — Cowork conversations/chats disappear** | Suspected server-side incident; affects Desktop/Web/Android. | 16 comments, 4 👍. |
| [#92246](https://github.com/anthropics/claude-code/issues/92246) | **Windows desktop self-updates mid-session — 9 forced restarts in 9 days, no opt-out** | Direct user-hostile behavior; kills active work without prompt. | 1 comment (new today), 0 👍 — early but severe. |
| [#74318](https://github.com/anthropics/claude-code/issues/74318) | **Subagent prompt-cache strategy inflates spend ~14% — 3 structural fixes** | Measured cost regression; detailed technical proposal with interacting fixes. | 5 comments, 4 👍. |

---

## 4. Key PR Progress

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#87079](https://github.com/anthropics/claude-code/pull/87079) | `fix(security-guidance): make ** glob patterns match zero-depth paths` | Open | Security-critical: `**/*.ts` currently excludes top-level files due to `fnmatch` semantics; silent non-coverage of security rules. |
| [#61691](https://github.com/anthropics/claude-code/pull/61691) | `Add diagnostic script for GitHub connector showing 'Connected' but no tools` | Open | PowerShell repair script for recurring Cowork GitHub MCP connector bug (shows connected, exposes zero tools). Closes #61682. |

*Only 2 PRs updated in last 24h; both address security/connectivity bugs rather than new features.*

---

## 5. Feature Request Trends
From the issue pool, the strongest recurring themes are:

1. **Plugin/extensibility overhaul** — Function Hooks (#91870) and lazy MCP connections (#63251, #82952) point to demand for a composable, on-demand extension model.
2. **Permission-system granularity** — Configurable MEMORY.md compaction (#91188), per-subagent `Agent()` allowlists (#92259), and denial-message attribution (#87153) all ask for finer control.
3. **Session/window management** — Always-on-top toggle (#89467), multi-session same-folder support (#91745), context-ring warning restoration (#91385), and background-task model selection (#70610).
4. **Cowork/Remote Control reliability** — Sync loss (#81658), stale pairings (#90243), missing tools in scheduled tasks (#92249), and session-creation bugs (#91991).
5. **Cost observability** — Subagent cache spend (#74318) and general token-budget transparency.

---

## 6. Developer Pain Points (Recurring Frustrations)

| Area | Pattern | Representative Issues |
|------|---------|----------------------|
| **Windows Desktop stability** | Orphaned processes, file locks, forced updates, always-on-top window, screenshot masking | #42776, #53247, #89467, #89680, #91079, #92085, #92246 |
| **Permission system regressions** | `bypassPermissions` incorrectly prompting on `cd`/compound commands with Read-deny rules | #91650, #91683 |
| **Subagent/agent tooling gaps** | Missing `ListAgents`/`SendMessage` in scheduled/remote sessions; allowlists ignored in nested defs; cache cost inflation | #92016, #92249, #92259, #74318 |
| **MCP/Connector reliability** | GitHub connector "connected but no tools"; Sentry OAuth redirect-URI failure; per-session RAM bloat | #61691, #81643, #82952 |
| **Update/upgrade UX** | Silent stealth updates killing sessions; no deferral; MSIX container corruption | #89680, #92246 |
| **Observability gaps** | Denial messages lack rule/file context; context ring no longer warns; Cowork chat sort order | #87153, #91385, #87723 |

---

*Digest generated from GitHub data as of 2026-09-05. Links point to live issues/PRs for full context.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-09-05

## 1. Today's Highlights

- **GPT-6-Astra rollout continues**: Two hotfix releases (v0.153.3 → v0.153.4) in 24h address Astra visibility in the bundled model picker and qualify its async-question guidance by tool availability. Astra is now the bundled default when no model is explicitly configured.
- **TUI async questions land**: A batch of 7 merged PRs (#42889–#42897) delivers full asynchronous question support in the terminal UI — including selectable choices, inline "Other" answers, draft preservation, and queue navigation.
- **Windows pain points dominate**: 8 of the top 10 issues by engagement are Windows-specific, spanning missing Settings tabs, WSL path deserialization, plugin EFS encryption failures, and persistent Pets input bugs.

---

## 2. Releases

| Version | Key Changes |
|---------|-------------|
| **rust-v0.153.4** | • Fixed Astra visibility in bundled model picker (now listed & default)<br>• Qualified Astra async-question guidance with “When available” prefix ([#42874](https://github.com/openai/codex/pull/42874), [#42878](https://github.com/openai/codex/pull/42878)) |
| **rust-v0.153.3** | • Added GPT-6-Astra to Amazon Bedrock model picker for Mantle/US routes<br>• Corrected Astra async-question guidance to use supported tool & text-only input ([#42805](https://github.com/openai/codex/pull/42805), [#42809](https://github.com/openai/codex/pull/42809)) |

---

## 3. Hot Issues (Top 10 by Community Engagement)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#28919](https://github.com/openai/codex/issues/28919) | **Windows: Missing “Control other devices” tab in Settings → Connections** | Blocks remote-device workflows for Pro users on Windows; 59 comments, 54 👍 | High — long-standing (since Jun), no workaround |
| [#41049](https://github.com/openai/codex/issues/41049) | **Windows: `code-mode host exited during handshake` — 5.6 model broken** | Core Code Mode fails at initialization; affects Pro 20x subscribers | 46 comments — active regression |
| [#35050](https://github.com/openai/codex/issues/35050) | **GPT-5.6 serializes independent Code Mode calls; batching cuts usage 27–45%** | Model behavior inflates token spend; explicit batching workaround exists | 30 comments, 41 👍 — strong developer interest |
| [#25220](https://github.com/openai/codex/issues/25220) | **Windows: Bundled plugins (Computer Use, Browser, etc.) unavailable — EFS copyfile failure** | Store-installed app cannot load plugins on EFS-encrypted WindowsApps | 29 comments — blocks Computer Use/Browser on Windows |
| [#41463](https://github.com/openai/codex/issues/41463) | **Windows + WSL: Cannot create projects — `AbsolutePathBuf` deserialized without base path** | Breaks project creation in WSL2; 27 comments, 18 👍 | 27 comments — WSL2 blocker |
| [#41513](https://github.com/openai/codex/issues/41513) | **Windows Pets: Click-through + cannot drag (built-in & custom)** | Desktop companion feature broken across versions | 23 comments, 10 👍 |
| [#32069](https://github.com/openai/codex/issues/32069) | **Feature: Hide Pets menu item; add configurable prompt polishing** | UX polish request — users want cleaner UI + prompt refinement | 16 comments, 17 👍 |
| [#41960](https://github.com/openai/codex/issues/41960) | **Windows: Pets unresponsive to clicks/drag** | Duplicate of #41513 but separate report; confirms regression | 15 comments, 17 👍 |
| [#41566](https://github.com/openai/codex/issues/41566) | **Paginated rollout emits duplicate ordinal after unfinished turn → freezes thread history** | Data-corruption risk in conversation persistence | 15 comments — silent data loss |
| [#25820](https://github.com/openai/codex/issues/25820) | **CLI login blocked by phone verification rate limit (Pro subscriber)** | Auth flow breaks for paying customers | 12 comments, 6 👍 |

---

## 4. Key PR Progress (Merged in Last 24h)

| PR | Area | Summary |
|----|------|---------|
| [#42891](https://github.com/openai/codex/pull/42891) | TUI | **Integrate async questions into TUI** — collapsible question count, expandable answer editor, queue/skip navigation, composer draft preservation |
| [#42894](https://github.com/openai/codex/pull/42894) | TUI | **Selectable answers for async questions** — numbered, wrapped choices; must be fully visible before submit |
| [#42897](https://github.com/openai/codex/pull/42897) | TUI | **Inline “Other” answers** — editable free-text choice appended to suggested options |
| [#42903](https://github.com/openai/codex/pull/42903) | TUI | **Preserve question state** — drafts, selections, expanded state, handled message IDs across restore/reconnect |
| [#42889](https://github.com/openai/codex/pull/42889) | TUI | **Building blocks** — per-question drafts, navigation, replay deduplication, submit/queue via shared composer |
| [#42900](https://github.com/openai/codex/pull/42900) | Core | **Root turn identity** — background/empty-input turns get `root_turn_id`; detached memory requests include turn identity |
| [#42904](https://github.com/openai/codex/pull/42904) | Core | **Static Default collaboration mode instructions** — removes template rendering & `codex-utils-template` dep |
| [#42879](https://github.com/openai/codex/pull/42879) | Models | **List GPT-6-Astra in model picker** — visibility=`list`, appears first, picker snapshot updated |
| [#42841](https://github.com/openai/codex/pull/42841) | Sandbox | **Native Windows MXC sandbox adapter** — MXC detection, stdio inheritance, deny-path verification |
| [#42850](https://github.com/openai/codex/pull/42850) | Infra | **jemalloc for Linux musl binaries** — `tikv-jemallocator` on x86_64/aarch64 musl targets |
| [#42847](https://github.com/openai/codex/pull/42847) | TUI | **Preserve Markdown on copy** — HTML + Markdown to clipboard for rich-text paste |
| [#42852](https://github.com/openai/codex/pull/42852) | Safety | **Harden Guardian reviews post-compaction** — retain user auth constraints, bounded root excerpts |
| [#42883](https://github.com/openai/codex/pull/42883) | Observability | **Client-side exec-server RPC attempt metrics** — labeled by method, includes rejected/timed-out calls |
| [#42854](https://github.com/openai/codex/pull/42854) | Threads | **Persist Daybreak preferences in thread metadata** — per-thread toggle survives restarts |
| [#42842](https://github.com/openai/codex/pull/42842) | TUI | **Astra sparkle effects in composer** — sparse fading stars in true-color terminals, pauses on popups |

---

## 5. Feature Request Trends (from Open Issues)

1. **Windows parity** — Missing Settings tabs (#28919), WSL path handling (#41463), plugin loading (#25220), first-launch cua_node extraction delay (#41170)
2. **Pets UX control** — Hide menu item (#32069), fix input region offset (#42661), disable entirely
3. **Model behavior tuning** — Reduce Code Mode serialization (#35050), respect AGENTS.md/project rules (#31177), stop over-reporting completion
4. **Session/thread reliability** — Sandbox mode mismatch on resume (#25590), workspace leak across projects (#24224), duplicate ordinal freeze (#41566), deleted conversations stuck in Recents (#41661)
5. **CLI auth & limits** — Phone verification rate limit (#25820), Luna Reserve not honored after limit (#40939), auto-resume after rate window (#12503)
6. **TUI power-user features** — Dynamic conversation titles (#14044), auto-accept “Keep Waiting” (#32139), Markdown copy fidelity (#42847 ✅ merged)

---

## 6. Developer Pain Points (Recurring High-Frequency Frustrations)

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Windows as second-class platform** | 8/10 top issues Windows-specific; Store install breaks plugins (EFS), WSL path bugs, Pets input broken, missing Settings tabs, 15-min cold start | Blocks adoption for Windows-first devs; Pro subscribers affected |
| **Model usage unpredictability** | GPT-5.6 serializes calls (+27–45% cost), over-reports completion, ignores project rules | Direct cost & trust impact; workarounds require manual batching |
| **Session persistence bugs** | Sandbox downgrade on resume, workspace leak, duplicate ordinal freeze, deleted convos stuck, sidebar grouping resets | Data loss risk; forces manual cleanup / rework |
| **Auth/entitlement friction** | Phone verification rate-limits Pro users, Luna Reserve not honored in CLI, rate-window auto-resume missing | Paying customers locked out; CLI vs App entitlement mismatch |
| **Plugin / Computer Use gaps** | Bundled plugins unavailable on Windows, `cua.getApp` not a function, first-launch extraction hang | Core “agentic” features unreliable on Windows |
| **Pets as forced distraction** | Click-through, drag failure, offset input region, no hide option — across 4+ issues | Feature perceived as bloat; accessibility concern |

---

*Digest generated from github.com/openai/codex data as of 2026-09-05. Links point to live GitHub items.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-09-05

---

## 1. Today's Highlights

The v0.60.0 nightly release ships two security-focused fixes: environment-variable sanitization for MCP server spawns and hardened workspace boundary checks with symlink resolution. Meanwhile, the issue tracker shows persistent friction around model selection (Flash 3.6/3.7 missing from picker, 2.5-flash silently rewritten to 3.5-flash), subagent reliability (hangs, incorrect success reporting, Wayland failures), and Auto Memory quality (indefinite retries, silent skips). A batch of sandbox/container hardening PRs landed, isolating host config directories and enforcing strict path ownership.

---

## 2. Releases

### v0.60.0-nightly.20260905.g85aca163f
**Released:** 2026-09-05 | [Release Notes](https://github.com/google-gemini/gemini-cli/releases/tag/v0.60.0-nightly.20260905.g85aca163f)

| Change | Area | Impact |
|--------|------|--------|
| Prompt for consent on environment changes; sanitize runtime-altering env vars | `extensions` / MCP | Prevents silent injection of sensitive env vars into MCP server processes |
| Enhance workspace path boundary checks & symlink resolution | `core` / safety | Strengthens command safety and file discovery against path traversal via symlinks |

---

## 3. Hot Issues (Top 10 by Signal)

| # | Title | Area | Why It Matters | Community Signal |
|---|-------|------|----------------|------------------|
| [#29164](https://github.com/google-gemini/gemini-cli/issues/29164) | 3.6 and 3.7 flash still not available in the model picker | `core` | Blocks access to latest Flash models; 15 👍, 7 comments | High demand, P1 |
| [#28859](https://github.com/google-gemini/gemini-cli/issues/28859) | Any `--model gemini-<X.Y>-flash` silently served by gemini-3.5-flash | `agent` | Silent fallback breaks reproducibility; 14 👍, 4 comments | P1, security-adjacent |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent recovery after MAX_TURNS reported as GOAL success | `agent` | Masks interruption as success, corrupting eval/debugging | 2 👍, 13 comments, needs retest |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs forever on simple tasks | `agent` | Renders subagent delegation unusable; 8 👍, 8 comments | P1, blocks workflows |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Browser subagent fails on Wayland | `agent` / `browser` | Linux/Wayland users blocked; 1 👍, 4 comments | P1, platform gap |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell command execution stuck at "Waiting input" after completion | `core` | Frequent hang on trivial commands; 3 👍, 4 comments | P1, UX regression |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Add deterministic redaction & reduce Auto Memory logging | `security` | Secrets leak into model context before redaction | 5 comments, P2 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Assess impact of AST-aware file reads, search, mapping | `agent` | Epic for token-efficient code navigation; 1 👍, 7 comments | P2, strategic |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini does not use skills/sub-agents autonomously | `agent` | Core delegation feature underutilized; 6 comments | P2, behavior gap |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | Browser Agent ignores `settings.json` overrides (e.g., maxTurns) | `agent` | Config ignored silently; 3 comments | P2, config bug |

---

## 4. Key PR Progress (Top 10 by Impact)

| # | Title | Status | Summary |
|---|-------|--------|---------|
| [#29217](https://github.com/google-gemini/gemini-cli/pull/29217) | `fix(config): don't rewrite explicit gemini-2.5-flash model selection` | **Open**, P1 | Stops `isFlashModel()` from matching pinned `gemini-2.5-flash`; fixes silent upgrade to 3.5-flash |
| [#29215](https://github.com/google-gemini/gemini-cli/pull/29215) | `fix(core): enforce envelope metadata provenance for untrusted tool outputs` | **Open** | Hardens MCP/tool output handling: model must derive identity/status from verified envelope only |
| [#29214](https://github.com/google-gemini/gemini-cli/pull/29214) | `fix(sandbox): harden filesystem boundaries and isolate runtime state` | **Open** | Replaces host `~/.gemini` mounts with sanitized read-only configs; resolves symlinks in sensitivity checks |
| [#29216](https://github.com/google-gemini/gemini-cli/pull/29216) | `fix(cli): isolate settings directory in sandbox containers` | **Open** | Prevents credential leakage (OAuth tokens, auth) from host into container sandboxes |
| [#29170](https://github.com/google-gemini/gemini-cli/pull/29170) | `fix(core): enhance workspace path boundary checks and symlink resolution` | **Closed** → **v0.60.0-nightly** | POSIX/Windows boundary enforcement, realpath canonicalization in command safety & file discovery |
| [#28863](https://github.com/google-gemini/gemini-cli/pull/28863) | `fix(extensions): prompt for consent on environment changes and sanitize runtime-altering env vars` | **Closed** → **v0.60.0-nightly** | Consent strings now include MCP env config; strips dangerous vars before spawn |
| [#29116](https://github.com/google-gemini/gemini-cli/pull/29116) | `fix(core): mitigate NTFS 8.3 short name (SFN) path` | **Open** | Handles `git~1`, `node_m~1` etc. in normalization & `AllowedPathChecker` |
| [#29114](https://github.com/google-gemini/gemini-cli/pull/29114) | `fix(core): prevent duplicate handleExit execution on spawn failure` | **Open** | Re-entrancy guard for `error`+`close` event race in `shellExecutionService` |
| [#29110](https://github.com/google-gemini/gemini-cli/pull/29110) | `fix(core): route read_file content through FileSystemService` | **Open** | Enables ACP clients with `fs.readTextFile` to intercept reads (parity with write/replace) |
| [#28951](https://github.com/google-gemini/gemini-cli/pull/28951) | `feat(pr-generation): Cloud Run job, Workflow orchestration, deployment pipeline` | **Closed** | Production infra for automated PR generation (Caretaker pipeline) |

---

## 5. Feature Request Trends

| Theme | Representative Issues | Direction |
|-------|----------------------|-----------|
| **Model access & version fidelity** | [#29164](https://github.com/google-gemini/gemini-cli/issues/29164), [#28859](https://github.com/google-gemini/gemini-cli/issues/28859) | Explicit model pinning honored; picker updated for 3.6/3.7 Flash |
| **Subagent reliability & observability** | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323), [#21409](https://github.com/google-gemini/gemini-cli/issues/21409), [#22598](https://github.com/google-gemini/gemini-cli/issues/22598), [#21763](https://github.com/google-gemini/gemini-cli/issues/21763) | Accurate termination reasons, hang prevention, trajectory sharing, bug-report inclusion |
| **AST-aware tooling for token efficiency** | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746), [#19561](https://github.com/google-gemini/gemini-cli/issues/19561) | Surgical reads via grep→AST→full file hierarchy; eval for `codebase_investigator` |
| **Auto Memory quality & safety** | [#26525](https://github.com/google-gemini/gemini-cli/issues/26525), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523), [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | Deterministic redaction, invalid patch quarantine, stop retrying low-signal sessions |
| **Sandbox/container hardening** | [#29214](https://github.com/google-gemini/gemini-cli/pull/29214), [#29216](https://github.com/google-gemini/gemini-cli/pull/29216), [#29115](https://github.com/google-gemini/gemini-cli/pull/29115) | Config isolation, credential protection, strict ACL/ownership checks |
| **Browser agent robustness** | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983), [#22232](https://github.com/google-gemini/gemini-cli/issues/22232), [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | Wayland support, lock recovery, config override respect |

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Silent model substitution** | [#28859](https://github.com/google-gemini/gemini-cli/issues/28859) (14 👍), [#29217](https://github.com/google-gemini/gemini-cli/pull/29217) fix | High — breaks reproducibility, trust |
| **Subagent hangs & false success** | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) (8 👍), [#22323](https://github.com/google-gemini/gemini-cli/issues/22323), [#21763](https://github.com/google-gemini/gemini-cli/issues/21763) | High — blocks delegation workflows |
| **Shell "Waiting input" ghost hangs** | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) (3 👍), multiple duplicates | Medium-high — frequent UX disruption |
| **Missing latest models in picker** | [#29164](https://github.com/google-gemini/gemini-cli/issues/29164) (15 👍) | High — visible gap vs. announced releases |
| **Auto Memory opacity & secret risk** | [#26525](https://github.com/google-gemini/gemini-cli/issues/26525), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523), [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | Medium — security & quality concerns |
| **Browser agent platform gaps** | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) (Wayland), [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) (locks) | Medium — Linux/Wayland users blocked |
| **Config ignored silently** | [#22267](https://github.com/google-gemini/gemini-cli/issues/22267), [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) (symlink agents) | Medium — erodes trust in settings |

---

*Generated from `google-gemini/gemini-cli` GitHub data as of 2026-09-05. Links point to live issues/PRs.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-09-05

---

## 1. Today's Highlights

The CLI shipped **three releases in 24 hours** (v1.0.84-1, v1.0.84-0, v1.0.83), headlined by **GPT-6 Astra model support**, Windows 11 taskbar live session cards, and MCP OAuth CIMD support. Meanwhile, the issue tracker shows a cluster of **regressions in v1.0.81–1.0.83** around MCP initialization, ACP permission prompts, BYOK prompt caching, and session/resume model handling—several tagged as regressions of earlier fixes.

---

## 2. Releases

| Version | Date | Key Changes |
|---------|------|-------------|
| **[v1.0.84-1](https://github.com/github/copilot-cli/releases/tag/v1.0.84-1)** | 2026-09-05 | **Added**: GPT-6 Astra model support. |
| **[v1.0.84-0](https://github.com/github/copilot-cli/releases/tag/v1.0.84-0)** | 2026-09-05 | **Added**: Managed sandbox sessions can be disabled for the rest of the session via approved bypass prompt. **Fixed**: PowerShell sandbox block offers to run outside sandbox; sandboxed `gh` commands now work with multiple GitHub accounts in credential store. |
| **[v1.0.83](https://github.com/github/copilot-cli/releases/tag/v1.0.83)** | 2026-09-04 | **Added**: Windows 11 taskbar live hover status cards for running sessions; Client ID Metadata Document (CIMD) support for MCP OAuth sign-in; custom agents can list multiple models in `model` (tried in order) and `model-policy: required` keeps agent on specified models. |

---

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#2904](https://github.com/github/copilot-cli/issues/2904) | **Custom Agent YAML should support `reasoning-effort`** | Agents currently inherit global `--effort`; per-agent control is critical for cost/latency tuning. | 👍 23 · 8 comments · open since Apr |
| [#4328](https://github.com/github/copilot-cli/issues/4328) | **Ctrl+H misinterpreted as Ctrl+Backspace under WSL2/WT** | Breaks documented keybinding; affects all WSL2 + Windows Terminal users. | 7 comments · 👍 0 |
| [#4525](https://github.com/github/copilot-cli/issues/4525) | **v1.0.81-1 sends legacy `initialize` after modern `server/discover` → -32022** | Breaks MCP stdio servers using Python SDK 2.0 dual-era runner; regression in MCP handshake. | 👍 3 · 6 comments · **closed** (likely fixed in 1.0.83+) |
| [#1688](https://github.com/github/copilot-cli/issues/1688) | **Configurable auto-compaction threshold in `config.json`** | High-capacity models (Opus 4.6) degrade at 45–60% context; current threshold too high. | 👍 5 · 3 comments · open since Feb |
| [#4647](https://github.com/github/copilot-cli/issues/4647) | **v1.0.81 broke compatibility with chroma-mcp** | Popular vector-store MCP server stopped working; indicates MCP protocol regression. | 3 comments |
| [#3194](https://github.com/github/copilot-cli/issues/3194) | **Mouse scroll cycles history in Android Studio terminal** | Input handling regression since v1.0.43; affects JetBrains terminal users. | 👍 2 · 3 comments |
| [#2644](https://github.com/github/copilot-cli/issues/2644) | **Shift+Arrow / Ctrl+A text selection not supported in prompt input** | Missing standard line-editing shortcuts; UX parity with shells/IDEs. | 👍 1 · 2 comments · open since Apr |
| [#4590](https://github.com/github/copilot-cli/issues/4590) | **Extension SDK reconnect disposes hook processor → "Hook processor not configured"** | Multi-extension sessions break on MCP host reload; session stability issue. | 2 comments |
| [#4731](https://github.com/github/copilot-cli/issues/4731) | **Cancelled tool call triggers `tools/list` into same busy server → permanent tool loss** | Cascading timeout strips server tools for process lifetime; severe MCP reliability bug. | *Filed today, 0 comments yet* |
| [#4720](https://github.com/github/copilot-cli/issues/4720) | **v1.0.82 BYOK silently disables prompt caching (~5× cost increase)** | No cache-control headers sent in BYOK mode; `cached_tokens=0` on every turn. | *Filed today, 0 comments yet* |

---

## 4. Key PR Progress

Only **one PR** updated in the last 24h:

| PR | Status | Summary |
|----|--------|---------|
| [#3771](https://github.com/github/copilot-cli/pull/3771) | Open | *Initial project setup* — appears to be a template/scaffold PR from an external contributor; no code review activity yet. |

> **Note:** Core development appears to ship via direct commits to `main` (evidenced by rapid patch releases) rather than PR workflow.

---

## 5. Feature Request Trends (from all 35 issues)

| Theme | Representative Issues | Signal |
|-------|----------------------|--------|
| **Per-agent/model granularity** | #2904 (reasoning effort), #4645 (session.resume ignores `model`), #4724 (idle compaction aligned to cache TTL) | High — 3+ issues, strong 👍 on #2904 |
| **MCP protocol robustness** | #4525, #4647, #4731, #4729 (research agent calls missing `github/get_me`), #4721 (canvas JSON corruption) | Critical — multiple regressions in 1.0.81–1.0.83 |
| **Input/terminal UX parity** | #4328 (WSL2 Ctrl+H), #3194 (Android Studio scroll), #2644 (Shift+Arrow selection), #4707 (scrollbar copy pollution) | Persistent — spans 5+ months |
| **Session resilience & state** | #4590 (hook processor disposal), #4645 (model ignored on resume), #4727 (Changes tab stale after merge), #4726 (OTel span missing input on reload) | Growing — multi-session/extension workflows |
| **Enterprise/Plugin governance** | #4715 (block built-in marketplaces), #4471 (plugins TUI doesn't persist disabled state) | Niche but strategic for org adoption |
| **Cost observability** | #4720 (BYOK cache disabled), #1688 (compaction threshold), #4710 (runaway file-search CPU/disk) | Direct $$ impact |

---

## 6. Developer Pain Points (Recurring Frustrations)

1. **Regression density in recent minors** — v1.0.81 through 1.0.83 introduced MCP handshake breaks, ACP permission bypass, BYOK cache disable, and session model pinning loss. Users expect patch releases to *fix* not *break*.
2. **MCP ecosystem fragility** — StdIO server compatibility, tool discovery races, and JSON-RPC corruption (#4721) make custom MCP servers unreliable.
3. **Terminal input layer bugs** — WSL2, JetBrains, and general readline parity issues persist for months; suggest upstream terminal library upgrade or dedicated input test matrix.
4. **Opaque session internals** — Hook processor disposal, tool-list refresh races, and OTel span gaps indicate insufficient session lifecycle instrumentation.
5. **BYOK cost surprises** — Silent cache disable (#4720) and lack of configurable compaction (#1688) hit power users’ wallets directly.
6. **Windows/WSL2 as second-class** — Taskbar cards added in 1.0.83, but Ctrl+H, voice dictation (#4716), and sandbox PowerShell issues remain.

---

*Digest generated from `github/copilot-cli` data as of 2026-09-05 00:00 UTC. Links point to live GitHub items.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-09-05

## Today's Highlights
- No new releases in the last 24 hours.  
- A documentation enhancement (#1210) for third-party coding agent integration was closed after minor discussion.  
- A Windows Terminal/PowerShell keybinding regression (#2634) blocking `Ctrl+V` paste was reported on v0.40.1.  
- One open PR (#2524) fixes replacement counting in `StrReplaceFile` for chained edits.

---

## Releases
No new releases published in the last 24 hours.

---

## Hot Issues
| # | Title | Status | Why It Matters | Community Reaction |
|---|-------|--------|----------------|-------------------|
| [#1210](https://github.com/MoonshotAI/kimi-cli/issues/1210) | [enhancement] Improve documentation for third-party Coding Agent usage | **Closed** | Requests clearer guidance on using Kimi K2 Thinking model in Claude Code (Tab-switch) and persistent env var setup — lowers adoption friction for cross-tool workflows. | 1 comment, 0 👍; author referenced Z.ai’s Claude Code docs as a model. |
| [#2634](https://github.com/MoonshotAI/kimi-cli/issues/2634) | [bug] Keybinding failure — `Ctrl+V` paste not working in Windows Terminal + PowerShell | **Open** | Blocks basic paste workflow on a major Windows dev setup (v0.40.1); likely a regression in terminal input handling. | 0 comments, 0 👍; fresh report, no workaround yet. |

*Only 2 issues updated in the last 24h — both shown above.*

---

## Key PR Progress
| # | Title | Status | Description |
|---|-------|--------|-------------|
| [#2524](https://github.com/MoonshotAI/kimi-cli/pull/2524) | fix(tools): count StrReplaceFile replacements against the running content | **Open** | Fixes under-counting when sequential `StrReplaceFile` edits depend on prior replacements (resolves #2526). Ensures accurate diff reporting for chained refactors. |

*Only 1 PR updated in the last 24h.*

---

## Feature Request Trends
From the single enhancement issue (#1210), the emerging ask is:
- **First-class docs for IDE/agent interop** — developers want copy-paste ready config snippets (env vars, model switching) for Claude Code, Cursor, etc., mirroring what competitors (e.g., Z.ai) provide.
- **Persistent auth/config** — avoiding per-session `export` commands.

---

## Developer Pain Points
1. **Windows terminal input regressions** — `Ctrl+V` paste broken in PowerShell/Windows Terminal (v0.40.1), a core daily-driver workflow.
2. **Fragmented third-party integration docs** — developers reverse-engineer setup instead of following official guides.
3. **Tooling reliability in chained edits** — `StrReplaceFile` miscounts replacements when edits build on each other (addressed in #2524).

---

*Data window: 2026-09-04 00:00 – 2026-09-05 00:00 UTC. Source: github.com/MoonshotAI/kimi-cli*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-09-05

## Today's Highlights
OpenCode shipped two patch releases (v1.18.29, v1.18.28) fixing Codex OAuth model filtering for integer-version models like `gpt-6` and adding GitHub Copilot session tracking via interaction headers. The community remains focused on plugin reliability (npm install timeouts), Claude Code hook parity, and local model integration (Ollama), with several high-engagement issues tracking privacy defaults and dashboard accuracy.

---

## Releases

### v1.18.29
**Core bugfixes:** Codex OAuth now recognizes integer GPT versions (e.g., `gpt-6`), restoring visibility of `gpt-6-astra` for OpenAI subscription users.  
**Contributor:** @Peter267 fixed Chinese docs bold rendering.  
[Release notes](https://github.com/anomalyco/opencode/releases/tag/v1.18.29)

### v1.18.28
**Core improvement:** Session ID sent as GitHub Copilot interaction header for cross-request tracing.  
**Desktop fixes:** Uses desktop client ID during device auth; increases open-in-app icon size.  
[Release notes](https://github.com/anomalyco/opencode/releases/tag/v1.18.28)

---

## Hot Issues (Top 10 by Community Signal)

| Issue | Status | Comments | 👍 | Why It Matters |
|-------|--------|----------|----|----------------|
| [#12472](https://github.com/anomalyco/opencode/issues/12472) Native Claude Code hooks compatibility | OPEN | 19 | 40 | Highest-voted open issue; users need `PreToolUse`/`PostToolUse`/`Stop` parity for workflow automation. |
| [#19948](https://github.com/anomalyco/opencode/issues/19948) Ollama local model integration (Windows) | CLOSED | 23 | 5 | Desktop users hit invalid JSON from local models; blocks local-first workflows. |
| [#25832](https://github.com/anomalyco/opencode/issues/25832) Image reading regression | CLOSED | 18 | 5 | Vision capability broken since Apr 29; affects HTML/CSS iteration from screenshots. |
| [#17188](https://github.com/anomalyco/opencode/issues/17188) Default sharing disabled — privacy by default | CLOSED | 5 | 13 | Strong community push for opt-in telemetry/sharing; privacy-first defaults. |
| [#44684](https://github.com/anomalyco/opencode/issues/44684) Plugin installer timeout / boot hang | OPEN | 5 | 0 | npm registry fetches stall headless runs; impacts CI and private registry users. |
| [#35148](https://github.com/anomalyco/opencode/issues/35148) Bad gateway error loop | CLOSED | 9 | 13 | Recurring 502s disrupt sessions; desktop v1.16.2. |
| [#47142](https://github.com/anomalyco/opencode/issues/47142) Dashboard usage % calculation incorrect | OPEN | 4 | 0 | Summing per-model % ignores quota differences; misleads budget tracking. |
| [#29175](https://github.com/anomalyco/opencode/issues/29175) Plugin-created child sessions invisible in parent UI | CLOSED | 4 | 0 | `session.create(parentID)` sessions not discoverable; breaks multi-agent plugin UIs. |
| [#35565](https://github.com/anomalyco/opencode/issues/35565) URL whitelisting for webfetch/websearch/codesearch | CLOSED | 2 | 0 | Security/compliance need: restrict outbound network targets per project. |
| [#35625](https://github.com/anomalyco/opencode/issues/35625) MCP OAuth re-registers dynamic client every run | CLOSED | 1 | 0 | Forces repeated browser consent; breaks automation for MCP servers. |

---

## Key PR Progress (Top 10 by Impact)

| PR | Status | Summary |
|----|--------|---------|
| [#47436](https://github.com/anomalyco/opencode/pull/47436) | OPEN | **feat(ai):** Resolve Bedrock credentials via AWS default chain (profile, SSO, IMDS, web identity) — eliminates static key requirement. |
| [#46690](https://github.com/anomalyco/opencode/pull/46690) | OPEN | **feat(plugin):** Expose session forms, session list, global event stream — enables rich plugin UIs (e.g., Telegram bots). |
| [#47430](https://github.com/anomalyco/opencode/pull/47430) | OPEN | **fix(core):** Configurable timeout for `npm install` (closes #31463, #44684) — prevents indefinite hangs on registry stalls. |
| [#47339](https://github.com/anomalyco/opencode/pull/47339) | OPEN | **fix(session):** Stop retrying free/Go quota errors with long `retry-after` — avoids stuck sessions on daily limits. |
| [#47423](https://github.com/anomalyco/opencode/pull/47423) | OPEN | **feat(core):** Provider OAuth `client_credentials` flow (Basic/POST auth, in-memory cache, auto-renew) — supports service-to-service auth. |
| [#47391](https://github.com/anomalyco/opencode/pull/47391) | CLOSED | **perf(plugin):** Parallel internal plugin loading via `Effect.forEach` — faster startup, no functional change. |
| [#47392](https://github.com/anomalyco/opencode/pull/47392) | CLOSED | **fix(lsp):** Idle TTL + LRU eviction for LSP clients — prevents unbounded memory growth. |
| [#35311](https://github.com/anomalyco/opencode/pull/35311) | OPEN | **fix(core):** Multiple clones of same repo treated as distinct projects — resolves 12 linked issues. |
| [#47427](https://github.com/anomalyco/opencode/pull/47427) | OPEN | **fix(desktop):** Prevent large-paste crashes (especially Windows) — bounds input handling. |
| [#47414](https://github.com/anomalyco/opencode/pull/47414) | OPEN | **fix(core):** Preserve legacy markdown agent `variant` (e.g., `high`) when `temperature` added — backward compat. |

---

## Feature Request Trends

1. **Claude Code parity** — Hooks (`PreToolUse`/`PostToolUse`/`Stop`), skills, and settings migration remain the top-voted gap (#12472, 40 👍).
2. **Local model first-class support** — Ollama, LM Studio, and local inference need reliable JSON output and model discovery (#19948).
3. **Plugin extensibility** — Session/forms/event APIs (#46690), child session visibility (#29175), and npm install resilience (#44684, #47430).
4. **Privacy & compliance** — Opt-in sharing (#17188), URL whitelisting (#35565), project-scoped storage (#47429).
5. **Enterprise auth** — Bedrock AWS chain (#47436), provider `client_credentials` (#47423), MCP OAuth reuse (#35625).
6. **Observability** — Accurate usage dashboards (#47142), session tracking headers (v1.18.28), structured logs.

---

## Developer Pain Points

- **Plugin install reliability:** Registry timeouts hang headless/CI runs; no timeout bound (#44684, #31463, #41934, #27971, #47212).
- **Vision regression:** Image input broken for months (#25832) — blocks design-to-code workflows.
- **TUI/Desktop stability:** Large pastes crash desktop (#47425); spinner component crashes (#35562); renderer crashes on object-map lists (#35551).
- **Session/model management:** Child sessions invisible (#29175); tool schema `additionalProperties:false` missing `required` fails strict validators (#35528); free-tier retries stall sessions (#47339).
- **Migration/upgrade friction:** DB migration locks on unclean exit (#16678); custom-elements TS errors block enterprise builds (#47390).
- **Workspace performance:** Eager worktree/MCP discovery for all historical projects slows startup (#47428).
- **OAuth friction:** DigitalOcean retired endpoint (#27764); MCP re-registration per run (#35625); Codex integer version filtering (#19948 fix).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-09-05

## Today's Highlights
Pi **v0.85.0** shipped with persistent Claude thinking effort support for Anthropic transports, but the release introduced a packaging regression: `dist/cli.js` statically imports `@earendil-works/pi-server` without declaring it as a dependency, breaking fresh installs. A fix PR (#9170) is open. Meanwhile, the community is actively discussing a new **Amazon Bedrock Mantle provider** (#5363, 18 comments) and a **high CPU usage regression on macOS** during long sessions (#7730, 15 comments).

---

## Releases
### v0.85.0 — 2026-09-04
**New Feature:** *Persistent Claude thinking effort* — Anthropic transports now preserve per-turn thinking effort and recover safely from signed-thinking mismatches. See [Model Configuration docs](https://github.com/earendil-works/pi/blob/v0.85.0/packages/coding-agent/docs/models.md#model-configuration).

**Known Regression:** The published npm tarball omits `@earendil-works/pi-server` from `dependencies`, causing `ERR_MODULE_NOT_FOUND` on import. Tracked in [#9132](https://github.com/earendil-works/pi/issues/9132), [#9156](https://github.com/earendil-works/pi/issues/9156), [#9158](https://github.com/earendil-works/pi/issues/9158), [#9171](https://github.com/earendil-works/pi/issues/9171), [#9173](https://github.com/earendil-works/pi/issues/9173). Fix PR: [#9170](https://github.com/earendil-works/pi/pull/9170).

---

## Hot Issues
| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#5363](https://github.com/earendil-works/pi/issues/5363) | **Add amazon-bedrock-mantle provider** | Bedrock Mantle models use OpenAI-compatible API, incompatible with existing Converse-based provider. High demand for AWS-native model access. | 18 comments, 15 👍 — **in progress** |
| [#7730](https://github.com/earendil-works/pi/issues/7730) | **High CPU usage on Mac OS with long session** | CPU swings 50–110% (memory 600–800 MB), likely tied to context/session length. Blocks macOS developers on extended tasks. | 15 comments, 10 👍 — **open** |
| [#5593](https://github.com/earendil-works/pi/issues/5593) | **Tab-completing slash command inserts trailing space** | Breaks argument autocomplete flow (space triggers it). UX papercut for heavy TUI users. | 7 comments — **in progress** |
| [#8896](https://github.com/earendil-works/pi/issues/8896) | **`/export` HTML drops `display:false` custom messages** | `display:false` is documented as TUI-only; export silently discards context meant for model but not terminal. Data-loss risk. | 6 comments — **open** |
| [#9052](https://github.com/earendil-works/pi/issues/9052) | **Fullscreen mode wheel scrolling 3× slower** | Fixed input box is desirable, but scroll speed regression makes fullscreen unusable for long histories. | 5 comments, 2 👍 — **open** (PR [#9166](https://github.com/earendil-works/pi/pull/9166) adds Alt+wheel 5× speed) |
| [#8760](https://github.com/earendil-works/pi/issues/8760) | **OpenRouter `:free` models fail with 400 (max_tokens too high)** | Pi sends catalog `maxOutputTokens` exceeding provider hard limit. Affects multiple free models. | 5 comments — **open** |
| [#9132](https://github.com/earendil-works/pi/issues/9132) | **0.85.0: `dist/cli.js` imports undeclared `@earendil-works/pi-server`** | **Release-blocking packaging bug** — fresh installs broken. Multiple duplicate reports. | 4 comments, 5 👍 — **closed** (fix in [#9170](https://github.com/earendil-works/pi/pull/9170)) |
| [#8720](https://github.com/earendil-works/pi/issues/8720) | **Whitespace-only tool result bricks session (HTTP 400)** | Bash `"\r\n"` on Windows → empty tool content → provider rejects → bad message stays in history, poisoning all subsequent turns. | 4 comments — **open** |
| [#9073](https://github.com/earendil-works/pi/issues/9073) | **JsonlSessionRepo cwd-scoped ID collision** | Distinct cwds (`tenant-a/project` vs `tenant/a-project`) encode to same directory, causing session ID conflicts. | 2 comments — **open** |
| [#9167](https://github.com/earendil-works/pi/issues/9167) | **Auto-compaction pre-flight undercounts single-turn tokens** | Sessions blow past hard context limit with 400 before compaction fires, even with `reserveTokens` configured. | 1 comment — **closed** (untriaged) |

---

## Key PR Progress
| # | Title | Status | Impact |
|---|-------|--------|--------|
| [#9170](https://github.com/earendil-works/pi/pull/9170) | **fix: declare pi-server runtime dependency** | Open | Resolves v0.85.0 install breakage; adds `@earendil-works/pi-server` to `dependencies`. |
| [#9179](https://github.com/earendil-works/pi/pull/9179) | **fix: reject tree navigation during compaction** | Open | Prevents race between compaction and tree navigation; retains context on originating branch. Includes regression tests. |
| [#9172](https://github.com/earendil-works/pi/pull/9172) | **fix: prevent broken package root publication** | Open | CI guard (depends on #9170) to catch missing-dep publishes before they hit npm. |
| [#9163](https://github.com/earendil-works/pi/pull/9163) | **feat(tui): simplify clipboard handling** | Open | Removes heavy Rust clipboard crate; enables NixOS builds; reduces native surface. |
| [#9096](https://github.com/earendil-works/pi/pull/9096) | **feat(ai): add Meta provider with Muse subscription OAuth** | Open | First-class Meta provider; unusual daily token re-mint flow; streaming currently “fake” (burst). Resolves [#7543](https://github.com/earendil-works/pi/issues/7543). |
| [#9166](https://github.com/earendil-works/pi/pull/9166) | **feat(tui): accelerate Alt-modified wheel scrolling** | Open | 5× scroll speed with Alt held — directly addresses [#9052](https://github.com/earendil-works/pi/issues/9052). |
| [#9164](https://github.com/earendil-works/pi/pull/9164) | **fix: preserve model selector selection after refresh** | Closed | Background catalog refresh no longer resets user’s cursor position in `/model`. |
| [#9157](https://github.com/earendil-works/pi/pull/9157) | **fix: render session tree search cursor** | Open | Adds visible cursor block to “Type to search” input in Session Tree (parity with Resume Session). |
| [#9149](https://github.com/earendil-works/pi/pull/9149) | **fix: selector save keybindings** | Closed | Replaces hardcoded `Ctrl+S` with `app.models.save` / `app.thinking.save` bindings; respects user rebinds. Fixes [#8797](https://github.com/earendil-works/pi/issues/8797). |
| [#9155](https://github.com/earendil-works/pi/pull/9155) | **fix: reject prompts during tree navigation** | Open | RPC `prompt()` calls error out cleanly if tree navigation active; prevents state corruption. |

---

## Feature Request Trends
1. **Provider Expansion** — Strong demand for cloud-native model gateways: Amazon Bedrock Mantle (#5363), Meta Muse (#9096), OrcaRouter (#9135). Common theme: OpenAI-compatible endpoints with custom auth/routing.
2. **TUI Polish** — Fullscreen mode usability (scroll speed [#9052], image rendering [#9169]), clipboard ergonomics (#9138, #9163), search UX (#9157).
3. **Session Resilience** — Compaction reliability (#9167, #9179), export fidelity (#8896), session relocation for worktrees (#9162), cwd-scoped ID stability (#9073).
4. **Extension API Depth** — Hidden-thinking label scoping (#9161), pre-tool-execution hooks (#9175), structured message queue access (#9174), keybinding conflict warnings (#9176).
5. **Model Selector UX** — Stale scoped models after background refresh (#9180), keybinding alignment (#9149), per-model thinking config persistence (v0.85.0 feature).

---

## Developer Pain Points
| Area | Recurring Frustrations |
|------|------------------------|
| **Packaging & Releases** | v0.85.0 shipped with undeclared runtime dependency — multiple duplicate issues filed; erodes trust in `latest` tag. |
| **macOS Performance** | High CPU on long sessions (#7730) — no clear workaround; blocks adoption for macOS-heavy teams. |
| **Session Corruption** | Whitespace-only tool output permanently bricks history (#8720); auto-compaction can miss single-turn overflows (#9167). |
| **Provider Compatibility** | OpenRouter free models reject `max_tokens` (#8760); OpenRouter Claude Opus 5 rejects `output_config` (#9165) — requires provider-specific shims. |
| **TUI Autocomplete** | Trailing space on slash-command tab-complete breaks argument flow (#5593); keybinding rebinds ignored in model/thinking selectors (#8797). |
| **Export Fidelity** | `/export` drops `display:false` messages silently (#8896) — violates “what the model sees is what you get” expectation. |
| **Race Conditions** | Tree navigation vs. compaction (#9179), concurrent extension dialogs hang (#6978), background catalog refresh vs. UI selection (#9180). |

--- 

*Generated from `github.com/earendil-works/pi` data as of 2026-09-05. Links point to live issues/PRs.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-09-05

## 1. Today's Highlights
The team is tackling a critical **export performance regression** (#11031, #11035) where HTML exports balloon to ~19.5 MB by embedding the full Web Shell runtime in every file — a fix now loads the renderer from a CDN instead. Meanwhile, **daemon-session integrity** is under active repair: two P2 bugs (#11060, #11063) address missing `promptId` in live transcripts and orphaned workers after channel deletion. CI stability work continues with a main-branch failure (#11061) and flaky test fixes (#10758, #11001).

## 2. Releases
No new releases in the last 24 hours.

## 3. Hot Issues (10 Noteworthy)

| Issue | Priority | Why It Matters | Community Reaction |
|-------|----------|----------------|-------------------|
| [#11031](https://github.com/QwenLM/qwen-code/issues/11031) | P1 | **Export HTML embeds 19.5 MB Web Shell runtime per file** — blocks usable exports for all users. Fix (#11035) shifts to CDN-loaded renderer. | 3 comments; fix PR opened same day |
| [#11060](https://github.com/QwenLM/qwen-code/issues/11060) | P2 | **Active transcript omits Daemon `promptId`** — breaks live replay/reconciliation for integrations until turn completes. | 2 comments; fix PR #11062 opened |
| [#11063](https://github.com/QwenLM/qwen-code/issues/11063) | P2 | **Explicit Channel DELETE leaves owned workers running** when config missing — orphaned processes persist across retries. | 2 comments; daemon/core impact |
| [#11067](https://github.com/QwenLM/qwen-code/issues/11067) | — | **Skill `PreToolUse` hook skipped when invoked via `/skill-name`** — safety gates bypassed, security risk. | 1 comment; skills runtime gap |
| [#11066](https://github.com/QwenLM/qwen-code/issues/11066) | P3 | **E2E test `pgrep` pattern breaks on non-`qwen*` checkouts** — CI flakiness for forks/CI environments. | 2 comments; test infra |
| [#11065](https://github.com/QwenLM/qwen-code/issues/11065) | P3 | **Hand-maintained argv scans for value-slot skipping** — tech debt from PR #10943 review; consolidation needed. | 2 comments; CLI refactor |
| [#11061](https://github.com/QwenLM/qwen-code/issues/11061) | — | **Main CI failed on `b7d302a`** — `Test (ubuntu-latest, Node 22.x)` failed before test reporting. | 1 comment; release blocker |
| [#11064](https://github.com/QwenLM/qwen-code/issues/11064) | — | **Deferred autofix findings from PR #10999** — technical debt items requiring manual follow-up. | 0 comments; maintenance |
| [#7167](https://github.com/QwenLM/qwen-code/issues/7167) | — | **Fleet Shepherd Dashboard** — bot-maintained fleet health; 0 syncs/dispatches this tick. | 3 comments; infra visibility |
| [#11031](https://github.com/QwenLM/qwen-code/issues/11031) | P1 | (Duplicate entry — see top) | |

## 4. Key PR Progress (10 Important)

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#11035](https://github.com/QwenLM/qwen-code/pull/11035) | Fix | **Load transcript renderer from unpkg** — removes embedded React/Web Shell bundle from HTML exports; cuts file size from ~19.5 MB to KB. | Directly resolves #11031 |
| [#11062](https://github.com/QwenLM/qwen-code/pull/11062) | Fix | **Persist prompt identity for active transcript replay** — writes `_meta.promptId` on initial user record for live/persisted correlation. | Fixes #11060 |
| [#11037](https://github.com/QwenLM/qwen-code/pull/11037) | Fix | **Coalesce concurrent `Config.initialize()` calls** — prevents “already initialized” errors under parallel startup. | Core stability |
| [#10943](https://github.com/QwenLM/qwen-code/pull/10943) | Feat | **`qwen --bg "<prompt>"`** — starts background Agent View session that outlives shell; `qwen sessions` manages them. | New CLI workflow |
| [#11054](https://github.com/QwenLM/qwen-code/pull/11054) | Feat | **Headless global turn navigation (Phase 2A)** — turn-index cache, immutable page ranges, exact locators, React hooks. | Web Shell session UX |
| [#10991](https://github.com/QwenLM/qwen-code/pull/10991) | Refactor | **Decouple extension activation refresh** — commits activation policy durably; new capability flag for clients. | Daemon/extension contract |
| [#10957](https://github.com/QwenLM/qwen-code/pull/10957) | Perf | **Import core modules directly** — avoids package-root resolution; faster CLI startup, cleaner dependency graph. | DevEx/performance |
| [#10697](https://github.com/QwenLM/qwen-code/pull/10697) | Feat | **Workspace-scoped Skills runtime** — durable config + live discovery, revision/epoch tracking, session reconciliation. | Skills architecture |
| [#11049](https://github.com/QwenLM/qwen-code/pull/11049) | Fix | **Strip `reasoning_content` from Cerebras requests** — provider-specific field removal at request boundary. | Provider compatibility |
| [#10885](https://github.com/QwenLM/qwen-code/pull/10885) | Feat | **Scheduled task model & group routing** — per-run model override, session grouping, named groups in Web Shell. | Automation flexibility |

## 5. Feature Request Trends
- **Export/Shareability**: Lightweight, portable HTML exports (CDN-loaded assets, no embedded runtimes) — #11031, #11035
- **Background/Detached Sessions**: `--bg` agent sessions, session lifecycle management — #10943, #8927 (sessionRotation)
- **Web Shell UX Polish**: Turn navigation, plan DAG usability, inspector chrome, scheduled task routing — #10938, #11054, #10885
- **Skills as First-Class Runtime**: Workspace-scoped runtimes, installer skills (zvec-grep), hook reliability — #10697, #10723, #11067
- **Daemon/Channel Robustness**: Session bounding, prompt identity persistence, worker cleanup, extension activation contracts — #8927, #11060, #11063, #10991

## 6. Developer Pain Points
- **Export bloat**: 19.5 MB minimum HTML files make sharing impractical — top priority fix in progress.
- **Live transcript gaps**: Missing `promptId` during active turns breaks replay/reconnection tooling — #11060.
- **Orphaned daemon workers**: Channel deletion doesn’t converge running workers when config is gone — #11063.
- **Skill hook reliability**: `PreToolUse` bypassed on slash-command invocation — safety gate failure — #11067.
- **CI flakiness**: Font-dependent pixel tests (#10758), PTY cleanup races (#11001), pgrep pattern brittleness (#11066).
- **CLI argv tech debt**: Hand-rolled parsing for value-slot flags resists maintenance — #11065.
- **Main-branch CI instability**: Pre-test failures block merges — #11061.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-09-05

## 1. Today's Highlights
The project saw rapid bug-fix turnaround: a regression in Ollama’s token budget calculation (#5820) and a transcript-clutter bug in `todo_write` (#5871) both received PR fixes within 24 hours. Meanwhile, dependabot opened 10 dependency-update PRs, and a community member proposed adding `rusty_alloc` as a C-free allocator alternative.

## 2. Releases
*No new releases published in the last 24 hours.*

## 3. Hot Issues

| # | Title | Status | Why It Matters | Community Reaction |
|---|-------|--------|----------------|-------------------|
| [#5820](https://github.com/Hmbown/Codewhale/issues/5820) | Ollama provider: input budget collapses to 1024 tokens on 32K local models | **OPEN** | Default 64K output reservation clamps the context window on 32K models, crippling long-context local inference. | 4 comments; fix PR [#5883](https://github.com/Hmbown/Codewhale/pull/5883) already open. |
| [#5860](https://github.com/Hmbown/Codewhale/issues/5860) | [enhancement] Continuous Self-Learning from Dialog (Automatic Skill Evolution) | **OPEN** | Proposes automatic skill extraction from repeated agent interactions—core to “agent memory” roadmap. | 3 comments; design discussion underway. |
| [#5871](https://github.com/Hmbown/Codewhale/issues/5871) | To-do list history clutters transcript with no way to clear it | **CLOSED** | Every `todo_write` snapshot persisted permanently, bloating conversation view. | 1 comment; fixed by PR [#5873](https://github.com/Hmbown/Codewhale/pull/5873). |
| [#5872](https://github.com/Hmbown/Codewhale/issues/5872) | Add `rusty_alloc` as opt-in feature next to `mimalloc` | **OPEN** | Removes C compiler/build-script requirement; enables pure-Rust cross-compilation. | 1 comment; maintainers evaluating. |
| [#5866](https://github.com/Hmbown/Codewhale/issues/5866) | Key Ophthalmology CPT & ICD-10 Updates for 2026 | **CLOSED** | Irrelevant/spam issue (medical billing content). | Closed quickly; no technical discussion. |

## 4. Key PR Progress

| # | Title | Status | Impact |
|---|-------|--------|--------|
| [#5883](https://github.com/Hmbown/Codewhale/pull/5883) | fix(tui): derive local output budget from route window | **OPEN** | Fixes #5820: dynamically sizes output reservation from model’s declared context window. |
| [#5873](https://github.com/Hmbown/Codewhale/pull/5873) | fix(tui): replace stale todo transcript snapshots | **CLOSED** | Fixes #5871: keeps only latest `todo_write` snapshot in transcript. |
| [#5882](https://github.com/Hmbown/Codewhale/pull/5882) | test: restore contributor CI baseline and process lifecycle checks | **CLOSED** | Restores reliable CI for external contributors; fixes flaky symlink/Windows tests. |
| [#5870](https://github.com/Hmbown/Codewhale/pull/5870) | Fix: Tools: atomic commit splitting — order unrelated changes by dependency | **OPEN** | Addresses #3999: improves automated commit hygiene by topological ordering. |
| [#5877](https://github.com/Hmbown/Codewhale/pull/5877) | chore(deps): bump `rmcp` 2.2.0 → 3.2.0 | **OPEN** | Major MCP Rust SDK upgrade; may bring new protocol features/breaking changes. |
| [#5880](https://github.com/Hmbown/Codewhale/pull/5880) | chore(deps): bump `jsonschema` 0.46.10 → 0.52.1 | **OPEN** | Python schema validation update; watch for API shifts. |
| [#5878](https://github.com/Hmbown/Codewhale/pull/5878) | chore(deps): bump `actions/create-github-app-token` 2 → 3 | **OPEN** | GitHub Actions major version; check for workflow syntax changes. |
| [#5875](https://github.com/Hmbown/Codewhale/pull/5875) | chore(deps): bump `base64` 0.22.1 → 0.23.1 | **OPEN** | Minor Rust crate update; includes SIMD optimizations. |
| [#5876](https://github.com/Hmbown/Codewhale/pull/5876) | chore(deps): bump `lru` 0.18.2 → 0.18.3 | **OPEN** | Cache crate patch; likely bug fixes. |
| [#5874](https://github.com/Hmbown/Codewhale/pull/5874) | chore(deps): bump `docker/setup-qemu-action` 4.2.0 → 4.3.0 | **OPEN** | CI infrastructure update for multi-arch builds. |

## 5. Feature Request Trends
1. **Agent Memory & Learning** — Automatic skill extraction from dialog history (#5860) signals demand for persistent, evolving agent capabilities.
2. **Local Model Ergonomics** — Fixing token-budget logic for Ollama (#5820, #5883) shows pain points around context-window management on self-hosted models.
3. **Build/Portability Simplification** — Request for `rusty_alloc` (#5872) reflects desire to drop C toolchain dependencies.
4. **Transcript Hygiene** — Rapid fix for `todo_write` clutter (#5871 → #5873) indicates UX sensitivity around conversation noise.

## 6. Developer Pain Points
- **Context-window miscalculation** on local providers (Ollama) silently truncates input, breaking long-context workflows.
- **Transcript bloat** from tool-call snapshots makes conversation review difficult; users want granular visibility control.
- **C-toolchain friction** for Rust dependencies (`mimalloc`) hinders cross-compilation and onboarding.
- **CI flakiness** (symlinks, Windows, trust tokens) blocks contributor velocity; recent PR #5882 targets this directly.

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*