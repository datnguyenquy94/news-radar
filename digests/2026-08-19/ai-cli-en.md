# AI CLI Tools Community Digest 2026-08-19

> Generated: 2026-08-19 01:42 UTC | Tools covered: 10

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

# Cross-Tool Comparison Report: AI CLI Tools Ecosystem (2026-08-19)

---

## 1. Ecosystem Overview

The AI CLI tools landscape is characterized by **rapid release cadences** (7 of 9 active tools shipped updates in the last 24h) and a **convergence on enterprise-grade reliability concerns**. Security hardening, session durability, and multi-provider interoperability dominate engineering velocity across the board. While Anthropic, OpenAI, and Google-backed tools lead in raw issue volume and community signal, newer entrants (Qwen, Pi, CodeWhale) demonstrate sophisticated architectures—particularly around multi-agent orchestration and verification pipelines. The ecosystem is bifurcating: **consumer/individual tools** (Claude Code, Codex, Gemini CLI) prioritize UX polish and model access breadth, while **team/enterprise-focused tools** (Copilot CLI, Qwen Code, Pi) invest heavily in policy enforcement, auditability, and session governance.

---

## 2. Activity Comparison

| Tool | Releases (24h) | Hot Issues Tracked | PRs Updated (24h) | Critical Regressions Noted |
|------|----------------|-------------------|-------------------|----------------------------|
| **Claude Code** | v2.1.235 (stable) | 10 | 1 (stale) | Cowork VM on Intel Mac; Windows MSIX update failure |
| **OpenAI Codex** | v0.148.0 stable + v0.149.0-alpha | 10 | 10 (security sprint) | Windows browser plugin; MCP process leaks |
| **Gemini CLI** | v0.56.0-nightly | 10 | 10 (7 closed) | Generalist agent hangs; shell "stuck" states |
| **GitHub Copilot CLI** | v1.0.81-1 | 10 | 1 (non-functional) | Sandbox forced on; org models missing from catalogue |
| **Kimi Code CLI** | — | 2 | 2 (1 new, 1 closed after 6mo) | Web UI rendering for non-Kimi providers |
| **OpenCode** | — | 10 | 10 | **Message ID rollover** (data integrity); streaming truncation |
| **Pi** | — | 10 | 10 (6 closed) | Session corruption (concurrent writers); SSE stall hangs |
| **Qwen Code** | v0.21.14-preview | 10 | 10 | **Ollama tool use broken** (user message dropped) |
| **CodeWhale** | v0.9.9 | 10 | 10 (9 merged) | `/new` drops system prompt (fixed in release) |
| **Grok Build** | — | 0 | 0 | No activity |

**Key observation**: OpenAI Codex, Pi, Qwen Code, and CodeWhale show the highest **PR merge velocity** (8–10 PRs/day), indicating mature CI/CD and active maintainer bandwidth. Claude Code and Copilot CLI show unusually low public PR activity, suggesting internal-branch development models.

---

## 3. Shared Feature Directions

| Requirement | Tools Demanding It | Specific Needs |
|-------------|-------------------|----------------|
| **Multi-account / profile switching** | Claude Code (#18435, 732 👍), Copilot CLI (org model visibility), Pi (Enterprise Copilot login) | Isolated contexts per client/project; policy-aware model catalogues |
| **Session durability & portability** | OpenCode (sync engine), Qwen Code (on-disk state in CI), Pi (writer ownership), CodeWhale (approval persistence) | Deterministic sync, export/import, concurrent writer prevention, replay fidelity |
| **MCP / tool ecosystem hardening** | Codex (10 security PRs), Copilot CLI (OAuth, stdio leaks), Pi (credential leakage), OpenCode (SSE corruption) | Sandbox enforcement, credential file permissions, process reaping, transport validation |
| **Agent/subagent observability** | Gemini CLI (recovery, trajectory), Qwen Code (leader health dash), Copilot CLI (per-agent metrics), OpenCode (subagent IDs) | Health status, token accounting, debuggable trajectories, explicit shutdown control |
| **Workspace / worktree isolation** | Codex (VS Code workspace scoping, 65 👍), Claude Code (worktree hooks, ARG_MAX), OpenCode (multi-dir), Qwen Code (peer sessions) | Project-scoped history, lifecycle hooks, sandbox per worktree, cross-session collaboration |
| **Provider-agnostic / BYOK support** | Kimi Code (OpenAI-compat UI break), Pi (OpenAI-compat login), Copilot CLI (BYOK refresh), Qwen Code (Ollama) | Custom endpoint onboarding, token hot-reload, streaming parity, model catalogue sync |
| **Security & supply-chain hardening** | Codex (10 PRs: trust roots, TOCTOU, ext:: blocking), Pi (subprocess cred leakage), Qwen Code (witness forms) | Worktree trust validation, OAuth credential permissions, git transport blocking, hook script binding |

---

## 4. Differentiation Analysis

| Dimension | Consumer/Individual Focus | Team/Enterprise Focus | Platform/Infrastructure Focus |
|-----------|---------------------------|----------------------|------------------------------|
| **Primary Tools** | Claude Code, Codex, Gemini CLI, CodeWhale | Copilot CLI, Qwen Code, Pi | OpenCode, Qwen Code (daemon), Pi |
| **Core Value Prop** | Best model access, TUX polish, low friction | Policy enforcement, audit trails, org governance | Session architecture, verification pipelines, extensibility |
| **Technical Approach** | Monolithic TUI + cloud sync | Daemon + policy engine + MCP gateway | Event-sourced sessions, deterministic sync, crate decomposition |
| **Target User** | Solo devs, consultants, hobbyists | Engineering teams, enterprises, regulated envs | Platform builders, power users, quant/finance (Kimi) |
| **Differentiator** | Anthropic/OpenAI/Google model priority | GitHub/Enterprise identity integration | **Session as durable log** (OpenCode), **verification witness forms** (Qwen), **stream watchdog + writer ownership** (Pi) |

**Notable architectural splits**:
- **Session model**: OpenCode/Pi/Qwen treat sessions as **durable, append-only logs** with deterministic replay; Claude Code/Codex/Gemini use **ephemeral TUI state + cloud sync**.
- **Agent model**: Qwen Code/Pi/OpenCode build **multi-agent orchestration primitives** (leader/worker, peer collaboration); others focus on **single-agent tool use** with subagent delegation.
- **Extension model**: Codex/Copilot/Pi invest in **MCP as universal tool protocol**; Qwen/OpenCode/CodeWhale build **native plugin/skill systems** with stricter sandboxing.

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|------|-------|----------|
| **High Momentum & Maturity** | **OpenAI Codex**, **CodeWhale**, **Pi**, **Qwen Code** | 8–10 PRs/day merged; security/architectural refactors landing daily; structured release gates (CodeWhale non-interactive multi-target; Qwen SWE-bench CI); low issue-to-PR latency |
| **High Community Signal, Lower Public Velocity** | **Claude Code**, **GitHub Copilot CLI** | Highest issue engagement (732 👍 on multi-account), but minimal public PR activity—suggests **internal monorepo workflow**; regressions in latest releases indicate release pressure |
| **Active but Niche / Early** | **Gemini CLI**, **OpenCode**, **Kimi Code** | Gemini: P1 agent hangs dominate; OpenCode: critical data-integrity bug (ID rollover) exposes architecture risk; Kimi: low issue volume, 6-month PR latency signals maintainer bandwidth constraints |
| **Dormant** | **Grok Build** | No activity in tracking window |

**Maturity indicators**: Tools with **automated release pipelines** (CodeWhale, Qwen, Codex) and **security sprint cadences** (Codex, Pi) score highest. Tools where **critical regressions ship in stable** (Copilot CLI sandbox, Claude Code Cowork VM) indicate release process gaps.

---

## 6. Trend Signals for Technical Decision-Makers

| Trend | Signal Strength | Reference Value |
|-------|-----------------|-----------------|
| **Session governance > chat history** | 🔥 High (5+ tools) | Invest in **durable session logs with deterministic replay**—not just scrollback. OpenCode's sync engine, Pi's writer ownership, Qwen's on-disk state are the pattern. |
| **MCP hardening is the new security perimeter** | 🔥 High (4+ tools, 20+ PRs) | Treat **MCP servers as untrusted code**: sandbox stdio, validate OAuth creds, reap processes, block `git ext::` transport. Codex's PR sprint is the reference implementation. |
| **Multi-agent observability becoming table stakes** | 📈 Rising (4 tools) | **Leader health dashboards, per-agent token accounting, explicit shutdown tools** (Qwen, Copilot, Gemini, OpenCode) — required for any team automation. |
| **Provider-agnostic BYOK is a compliance requirement** | 📈 Rising (4 tools) | **Hot credential refresh, custom endpoint onboarding, model catalogue sync** — enterprise blockers if missing (Copilot, Pi, Kimi, Qwen). |
| **Windows remains the second-class platform** | 🔴 Persistent (3+ tools) | MSIX failures (Claude), browser plugin/RDP/composer bugs (Codex), sandbox/JVM breaks (Copilot), status indicator regression (CodeWhale) — **Windows CI/CD investment lags**. |
| **Verification / eval infrastructure as moat** | 💎 Emerging (Qwen, Pi, Gemini) | **SWE-bench CI gates** (Qwen), **component-level behavioral evals** (Gemini), **witness forms for live services** (Qwen) — shifts AI CLI from "vibe coding" to **auditable engineering**. |
| **Localization & accessibility as growth lever** | 🌱 Early (CodeWhale, Kimi) | **Full Chinese localization** (CodeWhale dictionary spine), **quant/finance vertical showcase** (Kimi) — non-English markets and domain-specific workflows are underserved. |

---

## Strategic Takeaways

1. **For tool selection**: If **enterprise governance** is paramount → Copilot CLI (GitHub identity), Pi (session safety), Qwen (verification). If **model breadth + solo UX** → Codex, Claude Code. If **platform extensibility** → OpenCode, CodeWhale.

2. **For contributors**: Highest leverage areas are **MCP security**, **session durability**, and **Windows parity** — all have critical bugs and active maintainer attention.

3. **For platform builders**: The **event-sourced session architecture** (OpenCode/Pi/Qwen) is technically superior to cloud-sync TUI state for reliability, audit, and multi-agent workflows — expect this pattern to propagate.

4. **Risk watch**: **Claude Code's Cowork VM regression** and **Copilot CLI's sandbox regression** signal that **VM/sandbox isolation remains unsolved** at scale. **OpenCode's message ID rollover** is a cautionary tale for any system using bounded integer IDs for event ordering.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-08-19 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| # | Skill / PR | Functionality | Discussion Highlights | Status |
|---|------------|---------------|----------------------|--------|
| 1 | **[#1298](https://github.com/anthropics/skills/pull/1298)** `fix(skill-creator): run_eval.py 0% recall` | Core fix for the skill evaluation pipeline — `run_eval.py` reports 0% recall for all skills, breaking the description-optimization loop (`run_loop.py`, `improve_description.py`). Includes Windows stream reading, trigger detection, and parallel worker fixes. | **Issue #556** (12 comments, 7 👍) confirms "0% trigger rate across all queries"; multiple independent reproductions. Blocks skill quality validation. | 🟢 Open |
| 2 | **[#514](https://github.com/anthropics/skills/pull/514)** `document-typography` | Typographic QC for AI-generated documents: prevents orphan/widow lines, heading stranding, numbering misalignment. Triggers on any document generation request. | Addresses a universal pain point — "users rarely ask for good typography but always need it." | 🟢 Open |
| 3 | **[#1367](https://github.com/anthropics/skills/pull/1367)** `self-audit` (v1.3.0) | Mechanical file verification + four-dimension reasoning quality gate (pre-task calibration → adversarial review → delivery verification). Universal, stack-agnostic. | Proposed alongside **Issue #1385** (4 comments) — a three-gate reasoning pipeline. High architectural ambition. | 🟢 Open |
| 4 | **[#568](https://github.com/anthropics/skills/pull/568)** `servicenow` | Broad ServiceNow platform assistant: ITSM, ITOM, ITAM/SAM, FSM, HRSD, SPM, SecOps, Vulnerability Response, IntegrationHub. | Long-lived PR (Mar–Aug 2026); covers entire platform surface, not just scripting. Enterprise demand signal. | 🟢 Open |
| 5 | **[#723](https://github.com/anthropics/skills/pull/723)** `testing-patterns` | Comprehensive testing skill: Trophy model, AAA pattern, React Testing Library, contract testing, E2E, property-based, mutation testing, CI integration. | Fills a gap — no existing skill covers the full testing stack with opinionated patterns. | 🟢 Open |
| 6 | **[#83](https://github.com/anthropics/skills/pull/83)** `skill-quality-analyzer` / `skill-security-analyzer` | Meta-skills for the marketplace: 5-dimension quality scoring (structure, examples, resources, triggers, maintainability) + security analysis (injection, secrets, permissions, supply chain). | Addresses the "how do I know a skill is good?" problem. Prerequisite for trustworthy skill distribution. | 🟢 Open |
| 7 | **[#486](https://github.com/anthropics/skills/pull/486)** `odt` | OpenDocument (.odt/.ods) creation, template filling, parsing, ODT→HTML conversion. Triggers on ODT/ODF/LibreOffice mentions. | Open-standard document format support; complements existing docx/pdf skills. | 🟢 Open |
| 8 | **[#525](https://github.com/anthropics/skills/pull/525)** `pyxel` | Retro/pixel-art/8-bit game development via `pyxel-mcp` MCP server. Workflow: write → run_and_capture → inspect → iterate. | Niche but complete — demonstrates MCP + skill integration for interactive domains. | 🟢 Open |

> **Note:** PR comment counts are not exposed in the dataset; ranking reflects list order (stated as "sorted by comments") and cross-referenced Issue activity.

---

## 2. Community Demand Trends (From Issues)

| Trend | Evidence | Demand Signal |
|-------|----------|---------------|
| **Trust & Namespace Security** | **#492** (43 comments, 2 👍): Community skills distributed under `anthropic/` namespace impersonate official skills, enabling trust-boundary abuse. | 🔴 **Critical** — Highest engagement; blocks enterprise adoption. |
| **Organizational Skill Sharing** | **#228** (16 comments, 8 👍): No org-wide skill library; manual .skill file sharing via Slack/Teams. | 🟠 **High** — Workflow friction for teams. |
| **Evaluation Pipeline Reliability** | **#556** (12 comments, 7 👍): `claude -p` never triggers skills (0% recall); **#1298**, **#1099**, **#1050** all target this. | 🟠 **High** — Blocks skill iteration/quality. |
| **Duplicate/Conflicting Skill Distribution** | **#189** (6 comments, 9 👍): `document-skills` and `example-skills` plugins install identical content → duplicates in context window. | 🟡 **Medium** — Packaging hygiene issue. |
| **Context Window Pressure** | **#1487** (4 comments): `claude-api` skill injects ~156k tokens in one call; **#1329** proposes `compact-memory` for symbolic state compression. | 🟡 **Medium** — Growing concern as skills bundle more context. |
| **Windows Compatibility** | **#1099**, **#1050**, **#1298** all address Windows subprocess/encoding bugs in skill-creator. | 🟡 **Medium** — Platform parity gap. |
| **Agent Governance & Safety** | **#412** (closed, 6 comments): Proposal for `agent-governance` skill (policy enforcement, threat detection, audit trails). | 🟢 **Emerging** — Safety-as-a-skill pattern. |
| **Skill-as-MCP / Interop** | **#16** (4 comments): Expose skills as MCPs for universal API surface. | 🟢 **Emerging** — Architectural direction. |
| **Bedrock/Cloud Provider Support** | **#29** (4 comments): No guidance for AWS Bedrock integration. | 🟢 **Emerging** — Multi-cloud demand. |

---

## 3. High-Potential Pending Skills (Active PRs Likely to Land)

| PR | Skill | Why It Has Momentum |
|----|-------|---------------------|
| **[#1298](https://github.com/anthropics/skills/pull/1298)** | `skill-creator` eval pipeline fix | **Blocking issue** (#556, 12 comments); multiple contributors (MartinCajiao, joshuawowk, gstreet-ops) converging on same fix; Windows + Linux parity. |
| **[#514](https://github.com/anthropics/skills/pull/514)** | `document-typography` | Universal utility — every document generation benefits; low controversy, high ROI. |
| **[#538](https://github.com/anthropics/skills/pull/538)** | PDF case-sensitivity fix | Trivial correctness fix (8 lowercase/uppercase mismatches); breaks on case-sensitive FS. |
| **[#541](https://github.com/anthropics/skills/pull/541)** | DOCX `w:id` collision fix | Prevents document corruption; root cause identified (shared ID space across bookmarks/changes/comments). |
| **[#83](https://github.com/anthropics/skills/pull/83)** | `skill-quality-analyzer` / `skill-security-analyzer` | Prerequisite for **#492** (trust boundary); enables automated marketplace vetting. |
| **[#723](https://github.com/anthropics/skills/pull/723)** | `testing-patterns` | Fills a complete capability gap; opinionated, comprehensive, CI-ready. |
| **[#1367](https://github.com/anthropics/skills/pull/1367)** | `self-audit` | Ambitious but aligns with **#1385** (reasoning pipeline proposal); could become canonical quality gate. |
| **[#509](https://github.com/anthropics/skills/pull/509)** | `CONTRIBUTING.md` | Addresses **#452** (community health 25% score); single highest-impact repo health fix. |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for a trustworthy, evaluatable, and shareable skill ecosystem — not just more skills.** The top issues (namespace spoofing, org sharing, broken eval pipeline, duplicate installs) all converge on *distribution and quality infrastructure*, while new skill PRs increasingly focus on meta-skills (quality analyzer, self-audit, testing-patterns) that raise the floor for all skills.

---

# Claude Code Community Digest — 2026-08-19

---

## 1. Today's Highlights

- **v2.1.235 released** with an optional `spellcheck` setting (using `aspell`/`hunspell`/`ispell`) and fixes for whole-prompt-cache invalidation during LSP reconnects.
- **Cowork VM regressions dominate new reports**: multiple Intel Mac users (x86_64) report VM connection timeouts, NVMe disk enumeration failures, and guest kernel hangs after the 1.32352.0 bundle update.
- **Windows update reliability remains a pain point**: MSIX updates fail with "file in use" errors requiring reboots, and daemon proactive refresh hangs ~9 hours before falling back to a non-existent keychain.

---

## 2. Releases

### v2.1.235
- **Added**: Optional `spellcheck` setting — underlines misspelled words in the prompt input as you type, using installed `aspell`, `hunspell`, or `ispell`.
- **Fixed**: Whole-prompt-cache invalidation when a language server disconnects or reconnects mid-session.
- **Fixed**: Nested m… (truncated in source)

---

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#18435](https://github.com/anthropics/claude-code/issues/18435) | **Multi-account support in Desktop** — switch between Claude profiles | Highest-voted open enhancement (732 👍, 167 comments); critical for consultants/agencies managing multiple clients | 👍 732 · 167 comments |
| [#2254](https://github.com/anthropics/claude-code/issues/2254) | **Disable welcome banner** in TUI | Long-standing UX friction (open since 2025); users lose terminal space on every launch | 👍 107 · 36 comments |
| [#76357](https://github.com/anthropics/claude-code/issues/76357) | **Windows MSIX update fails** — "file in use", app unlaunchable until reboot | Blocks every update on Windows Store/MSIX installs; reproducible across versions | 👍 6 · 26 comments |
| [#21108](https://github.com/anthropics/claude-code/issues/21108) | **Claude contacts git origin on startup** before any command | Security/privacy concern: network call without user action; confirmed reproduced on Linux | 👍 17 · 15 comments |
| [#87503](https://github.com/anthropics/claude-code/issues/87503) | **Cowork VM timeout on Intel Mac** after 1.32352.0 (guest never connects) | Regression blocking Cowork on x86_64 Macs; multiple duplicates filed today | 👍 0 · 11 comments |
| [#87512](https://github.com/anthropics/claude-code/issues/87512) | **Cowork VM: NVMe disks not enumerated** on Intel Mac — hangs at `/init` | Same regression wave; kernel-level blocker for VM boot | 👍 0 · 10 comments |
| [#73468](https://github.com/anthropics/claude-code/issues/73468) | **macOS sandbox unusable** — `ARG_MAX` exceeded with many git worktrees | Seatbelt profile passed inline grows unbounded; breaks *all* sandboxed commands | 👍 5 · 9 comments |
| [#27744](https://github.com/anthropics/claude-code/issues/27744) | **PostWorktreeCreate hook** for env initialization in worktrees | Closed but high engagement (29 👍); signals strong demand for worktree lifecycle hooks | 👍 29 · 10 comments |
| [#78264](https://github.com/anthropics/claude-code/issues/78264) | **Custom session titles overridden** by AI titles; `/resume` forks duplicates | Breaks session discoverability; affects daily workflow for heavy CLI users | 👍 3 · 8 comments |
| [#87805](https://github.com/anthropics/claude-code/issues/87805) | **Jammed background tasks + Remote Control loops** consume Max usage after forced token rotation | Silent credit burn after auto-update OAuth rotation; combines daemon + Remote Control bugs | 👍 0 · 2 comments |

---

## 4. Key PR Progress

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#41611](https://github.com/anthropics/claude-code/pull/41611) | `add the missing source to claude code` | Open (created 2026-03-31, updated 2026-08-18) | Adds missing source attribution; stale PR (5 months old) — likely superseded or blocked |

> **Note**: Only 1 PR updated in the last 24h. The PR backlog appears quiet; most engineering velocity is likely on internal branches or the release train.

---

## 5. Feature Request Trends (from all Issues)

1. **Multi-account / profile switching** (#18435) — overwhelming demand for isolated contexts per client/project.
2. **Worktree lifecycle hooks** (#27744, #81833) — `PostWorktreeCreate`, `PreWorktreeDestroy` for automated env setup.
3. **Auto-memory observability** (#87783, #79217, #85075) — users want source tracking, index limits, and drift detection for auto-generated memories.
4. **TUI customization** (#2254, #87810) — disable banners, word-by-word gloss for non-native speakers, interlinear translation in thinking blocks.
5. **Cowork UX polish** (#87807, #87811) — question widget timing, scheduled task reliability, browser fallback stability.
6. **Cross-session messaging reliability** (#87323, #87694, #86608) — messages sent but not received, context exclusion, gate failures.

---

## 6. Developer Pain Points (Recurring Frustrations)

| Area | Pattern | Representative Issues |
|------|---------|----------------------|
| **Windows reliability** | MSIX updates break app until reboot; daemon refresh hangs 9h; keychain fallback missing | #76357, #87812, #87534 |
| **Cowork VM on Intel Mac** | Post-1.32352.0: NVMe not enumerated, guest kernel hangs, vsock connect fails, VPN false blame | #87503, #87512, #87642, #87750 |
| **Sandbox / macOS limits** | `ARG_MAX` exceeded with many worktrees; sandbox becomes 100% unusable | #73468 |
| **Session management** | Custom titles lost, `/resume` forks duplicates, history missing after restart | #78264, #87806, #87560 |
| **Billing / usage opacity** | Auto-recharges despite plan allowance; July 17 incident unresolved; forced token rotation burns credits | #81703, #83062, #87805 |
| **Cross-session messaging** | Send reports success but recipient never receives; context exclusion; inbox gate off | #87323, #87694, #86608 |
| **Auto-mode plan mismatch** | CLI rejects Auto Mode ("unavailable for your plan") but Desktop allows it | #87534 |

---

*Generated from github.com/anthropics/claude-code data as of 2026-08-19. Links point to live issues/PRs.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-19

---

## 1. Today's Highlights

- **v0.148.0 stable released** with major TUI enhancements: conversation export to Markdown (`/export`), session forking via `codex exec fork`, and draft-prompt-before-init. An alpha v0.149.0 follows immediately.
- **Windows regression wave** — multiple reports of browser plugin failures (trusted RPC path errors), auth sign-out on thread open, cyan composer over RDP, and archive/delete failures on `\\?\` paths.
- **Security hardening sprint** — 10+ security-focused PRs merged today covering worktree trust validation, safe-command basename exploits, MCP OAuth credential file permissions, git ext-transport blocking, and hook script content binding.

---

## 2. Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **rust-v0.148.0** | Stable | • `/export` command → Markdown (clipboard or file)  • `codex exec fork` + archive/restore in resume picker  • Draft prompts during TUI init  • Numerous bug fixes |
| **rust-v0.149.0-alpha.1** | Alpha | First alpha after v0.148; likely iterative fixes |
| **rust-v0.148.0-alpha.22/23** | Alpha | Pre-release validation builds |

🔗 [v0.148.0 Release](https://github.com/openai/codex/releases/tag/rust-v0.148.0) | [v0.149.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.149.0-alpha.1)

---

## 3. Hot Issues (Top 10 by Impact & Activity)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#39136](https://github.com/openai/codex/issues/39136) | **Windows: Browser plugin init fails — trusted RPC dependency outside trusted code path** | Blocks in-app browser on Windows; 63 comments, 21 👍 in 24h | 🔥 Critical regression in 26.814 |
| [#25319](https://github.com/openai/codex/issues/25319) | **VS Code: Scope chats to current workspace/project** | Long-standing UX gap; 65 👍, 33 comments | High-demand workspace isolation |
| [#2880](https://github.com/openai/codex/issues/2880) | **TUI: Copy/Export message as Markdown** | ✅ **Addressed in v0.148** via `/export` | 78 👍, 31 comments — now shipped |
| [#23200](https://github.com/openai/codex/issues/23200) | **Mobile: Headless remote Linux hosts without desktop app online** | Enables server-only workflows; 48 👍, 19 comments | Strong remote-dev demand |
| [#32318](https://github.com/openai/codex/issues/32318) | **Windows CLI: Custom provider `namespace` tool routing errors** | Intermittent failures with OpenRouter/custom models | 18 comments, 5 👍 |
| [#37398](https://github.com/openai/codex/issues/37398) | **Desktop: 5s owner-discovery timeout opening unloaded chats** | Perf regression; 16 comments, 10 👍 | Measurable UX degradation |
| [#25015](https://github.com/openai/codex/issues/25015) | **App-server leaks MCP processes for subagents → linear memory growth** | Production stability risk on Linux | 8 comments, 4 👍 |
| [#37418](https://github.com/openai/codex/issues/37418) | **CLI 0.147: False “MCP startup interrupted” despite success** | Noise/confusion; 7 comments | Cosmetic but erodes trust |
| [#38754](https://github.com/openai/codex/issues/38754) | **Windows: Local stdio MCP servers repeatedly spawned, not reaped** | Resource leak per turn; 7 comments, 2 👍 | Windows-specific MCP bug |
| [#39231](https://github.com/openai/codex/issues/39231) | **CLI: `TurnDiffTracker` unbounded growth → OOM in hours** | Memory leak; 3 comments, 0 👍 but high severity | Silent killer for long sessions |

---

## 4. Key PR Progress (Top 10 by Security/Feature Impact)

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#39342](https://github.com/openai/codex/pull/39342) | `git-utils: validate linked worktree trust roots` | Open | Prevents forged `.git` files from inheriting trust via worktree path traversal |
| [#39341](https://github.com/openai/codex/pull/39341) | `shell-command: reject path-qualified safe executables` | Open | Stops `./echo` from bypassing approval by masquerading as system `echo` |
| [#39339](https://github.com/openai/codex/pull/39339) | `rmcp-client: create OAuth fallback credentials private` | Open | Fixes TOCTOU: credentials file created 0600 atomically, no world-readable window |
| [#39337](https://github.com/openai/codex/pull/39337) | `git-utils: validate linked worktree trust metadata` | Open | Requires `gitdir` backlink resolution for worktree trust inheritance |
| [#39336](https://github.com/openai/codex/pull/39336) | `hooks: bind command trust to script contents` | Open | Hook trust now hashes script body; modified scripts require re-review |
| [#39335](https://github.com/openai/codex/pull/39335) | `Enforce environment MCP policies` | **Closed** | Blocks attachment-scoped MCP servers when env config pending/failed |
| [#39334](https://github.com/openai/codex/pull/39334) | `rmcp-client: sandbox executor stdio servers` | Open | MCP stdio commands now run with filesystem sandbox intent, not host access |
| [#39333](https://github.com/openai/codex/pull/39333) | `core-plugins: isolate curated plugin ls-remote` | Open | Pre-trust `git ls-remote` runs without repo config (blocks `ext::` transport) |
| [#39331](https://github.com/openai/codex/pull/39331) | `Route hook MCP calls through current connections` | **Closed** | Hook MCP calls reuse runtime connections; no separate catalog-bound startup |
| [#39329](https://github.com/openai/codex/pull/39329) | `shell-command: require approval for git diff-driver subcommands` | Open | `git show/diff/log -p` now require approval (can execute `.gitattributes` drivers) |

> **Pattern:** Today’s PRs are overwhelmingly **security hardening** — trust boundaries, credential handling, sandbox enforcement, and supply-chain attack surface reduction.

---

## 5. Feature Request Trends (from Issues)

| Theme | Representative Issues | Signal |
|-------|----------------------|--------|
| **Workspace-scoped chat/history** | [#25319](https://github.com/openai/codex/issues/25319) (65 👍) | Top enhancement; VS Code extension needs project isolation |
| **Remote/headless execution** | [#23200](https://github.com/openai/codex/issues/23200) (48 👍) | Mobile → Linux server without desktop dependency |
| **Conversation portability** | [#2880](https://github.com/openai/codex Yuan) (78 👍) → **Shipped v0.148** | Export/Markdown now native |
| **Session management** | Fork, archive, restore ([#37367](https://github.com/openai/codex/pull/37367) in v0.148) | First-class session lifecycle |
| **Proxy/network configurability** | [#39237](https://github.com/openai/codex/issues/39237) | `respect_system_proxies` broken on macOS |
| **Model/provider extensibility** | [#32318](https://github.com/openai/codex/issues/32318), [#35300](https://github.com/openai/codex/issues/35300), [#37674](https://github.com/openai/codex/issues/37674) | Custom providers, prompt caching, Bedrock cache controls |

---

## 6. Developer Pain Points (Recurring Frustrations)

| Area | Symptoms | Frequency |
|------|----------|-----------|
| **Windows desktop stability** | Browser plugin RPC errors, auth sign-out, cyan composer over RDP, archive failures on `\\?\` paths, MCP spawn leaks | **5+ issues in 24h** — regression cluster in 26.814 |
| **Memory/resource leaks** | `TurnDiffTracker` OOM, MCP process stacks not reaped, plugin upgrade staging dirs accumulating (26 GB / 234 dirs) | 3 distinct leak reports |
| **MCP reliability** | False “startup interrupted”, repeated spawn/reap failures, subagent process leaks, OAuth credential exposure | Cross-platform, high severity |
| **Proxy/network respect** | `respect_system_proxies=true` ignored on macOS (CLI + Desktop) | Blocks enterprise/corporate usage |
| **Auth/account edge cases** | Edu plans, workspace-only 401 → sign-out, Pro account handling | 2 auth-related issues today |
| **TUI/terminal rendering** | Windows Terminal `WT_SESSION` flips background, macOS tinted icon not respected | Platform-specific visual bugs |
| **Config migration/compat** | New `models_cache.json` breaks older clients sharing `CODEX_HOME` | Version skew pain |

---

## Quick Links

- **Repo:** https://github.com/openai/codex
- **Releases:** https://github.com/openai/codex/releases
- **Issues (new):** https://github.com/openai/codex/issues?q=sort%3Aupdated-desc+is%3Aissue
- **PRs (security sprint):** https://github.com/openai/codex/pulls?q=is%3Apr+updated%3A2026-08-19

---

*Digest generated from GitHub data as of 2026-08-19 23:59 UTC. Next digest: 2026-08-20.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-19

## 1. Today's Highlights
- **Nightly v0.56.0** shipped with SSR Agent fixes: added Vertex AI locations documentation link and prevented subagents from running when agent mode is disabled.
- **Security hardening** dominates recent PRs: OAuth callback timeout handling, credential leakage prevention in subprocesses, and 404 handling for Cloud Shell default projects.
- **Agent reliability** remains the top pain point—subagent recovery, generalist agent hangs, and shell command "stuck" states are all P1/P2 issues actively discussed.

## 2. Releases
### v0.56.0-nightly.20260819.g571851b10
- **SSR Agent**: Added Vertex AI locations documentation link ([#28865](https://github.com/google-gemini/gemini-cli/pull/28865))
- **SSR Agent**: Prevent subagents from executing when agent mode is disabled ([#22093](https://github.com/google-gemini/gemini-cli/pull/28865))

## 3. Hot Issues (Top 10 by Impact & Discussion)

| Issue | Priority | Area | Why It Matters | Community Reaction |
|-------|----------|------|----------------|-------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) Subagent recovery after MAX_TURNS reports GOAL success | P1 | Agent | Masks real failures; subagent claims success despite hitting turn limit | 12 comments, 2 👍 — needs retesting |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) Generalist agent hangs indefinitely | P1 | Agent | Blocks all simple operations (folder creation); workaround is disabling subagents | 8 comments, 8 👍 — high user impact |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) Shell command stuck at "Waiting input" after completion | P1 | Core | Frequent hangs on simple CLI commands; shows active shell incorrectly | 4 comments, 3 👍 — needs retesting |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) Robust component-level evaluations | P1 | Agent/Eval | 76 behavioral evals across 6 models; foundational for regression prevention | 7 comments — epic tracking |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) Auto Memory retries low-signal sessions indefinitely | P2 | Agent | Wastes resources; sessions never marked processed if extraction agent skips them | 5 comments |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) Deterministic redaction for Auto Memory | P2 | Security | Secrets sent to model before redaction; service logs skill data | 4 comments |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) AST-aware file reads/search/mapping assessment | P2 | Agent | Could reduce turns & token noise via precise method-bound reads | 7 comments, 1 👍 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) Gemini underuses skills & sub-agents | P2 | Agent | Agents not auto-invoked even for relevant tasks; requires explicit instruction | 6 comments |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) Browser agent resilience: session takeover & lock recovery | P3 | Agent | Fail-fast on locked profile breaks persistent sessions | 4 comments |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) Browser subagent fails on Wayland | P1 | Agent/Browser | Blocks browser automation on Wayland; GOAL termination but actual failure | 4 comments, 1 👍 |

## 4. Key PR Progress (Top 10 by Significance)

| PR | Status | Area | Summary |
|----|--------|------|---------|
| [#28899](https://github.com/google-gemini/gemini-cli/pull/28899) | Open | Release | Nightly version bump to 0.56.0 |
| [#28898](https://github.com/google-gemini/gemini-cli/pull/28898) | Open | Security/Core | Harden subprocess execution: prevent credential leakage, sanitize GitHub API interactions |
| [#28883](https://github.com/google-gemini/gemini-cli/pull/28883) | **Closed** | Agent | Fix #20079: Support symlinked agent markdown files in `~/.gemini/agents/` |
| [#28877](https://github.com/google-gemini/gemini-cli/pull/28877) | **Closed** | Agent | Fix #18551: Prevent false-positive loop detection on uniform streaming content |
| [#28876](https://github.com/google-gemini/gemini-cli/pull/28876) | **Closed** | Security | Fix #18062: Handle 404 for missing Cloud Shell default project (`cloudshell-gca`) |
| [#28873](https://github.com/google-gemini/gemini-cli/pull/28873) | **Closed** | Security | Fix #28512: Prevent unhandled promise rejection on OAuth callback timeout |
| [#28870](https://github.com/google-gemini/gemini-cli/pull/28870) | **Closed** | Core/ACP | Fix #21783: Emit pending tool call update before requesting permission (ACP compliance) |
| [#28892](https://github.com/google-gemini/gemini-cli/pull/28892) | Open | Core | Preserve empty text turns with tools/media in chat history validation |
| [#28895](https://github.com/google-gemini/gemini-cli/pull/28895) | Open | Core | Fix #28894: Recognize mixed function-call turns |
| [#28893](https://github.com/google-gemini/gemini-cli/pull/28893) | Open | Agent | Fix #28859: Preserve explicit Flash model IDs (e.g., `gemini-3.6-flash`) during rollout rewrite |

## 5. Feature Request Trends
- **Agent orchestration maturity**: Multiple epics (#19873, #22745, #21000) push for native bash affinity, AST-aware tooling, and task-tracker integration—moving beyond tool-calling toward true shell-native agents.
- **Evaluation infrastructure**: #24353 (component-level evals) and #28369 (local eval reports) show investment in systematic regression testing across model versions.
- **Memory & context control**: #26522, #26523, #26525, #19561 all target Auto Memory reliability, token efficiency, and surgical context extraction.
- **Browser agent hardening**: #22232, #21983, #22267 cluster around session persistence, Wayland support, and settings propagation.
- **Subagent observability**: #22598 (trajectory sharing), #21763 (bug report context), #22323 (recovery semantics) demand better introspection into nested agent runs.

## 6. Developer Pain Points (Recurring Themes)
1. **Agent hangs & silent failures** — Generalist agent hangs (#21409), shell "stuck" states (#25166), browser agent Wayland failure (#21983) all manifest as unresponsive CLI with poor diagnostics.
2. **Subagent trust issues** — False success reporting (#22323), underutilization (#21968), missing context in bug reports (#21763), and trajectory invisibility (#22598) erode confidence in delegation.
3. **Configuration friction** — Symlinked agents ignored (#20079), settings.json overrides ignored by browser agent (#22267), 128+ tool limit causing 400 errors (#24246).
4. **Security/privacy gaps in Auto Memory** — Pre-redaction model exposure (#26525), indefinite low-signal retries (#26522), invalid patch quarantine (#26523).
5. **Terminal UX polish** — Ghost text infinite loop at narrow widths (#28641), resize flicker (#21924), markdown table wrapping (#18240), `\n` escape bugs (#22466).

---

*Data sourced from `google-gemini/gemini-cli` GitHub activity (issues, PRs, releases) updated 2026-08-19.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-19

---

## 1. Today's Highlights

Version **1.0.81-1** shipped with Gemini 3.7 Flash support, a `/sandbox` shortcut (Ctrl+E) to open settings in your editor, and per-agent usage metrics in JSON output. However, the release introduced **sandbox enforcement regressions** (#4521, #4522, #4524) where the CLI forces sandboxing even when explicitly disabled, and blocks git/JVM operations inside the sandbox. Meanwhile, enterprise users report **organization-enabled models (Claude Sonnet 5, Opus 5, Kimi K3) missing from the catalogue** (#4390), and MCP/ OAuth integrations remain fragile (#4490, #4392).

---

## 2. Releases

### **v1.0.81-1** — 2026-08-18
| Category | Changes |
|----------|---------|
| **Added** | • Gemini 3.7 Flash model support<br>• `Ctrl+E` in `/sandbox` opens `settings.json` in your editor<br>• Per-agent usage metrics in `--usage-output-file` JSON |
| **Improved** | • Press `x` to remove scheduled `/every` and `/after` prompts in Schedule Manager |
| **Fixed** | • Partial fix for “allow-all” toggle (details truncated in notes) |

> ⚠️ **Known regressions in this release**: Sandbox cannot be disabled (#4521), sandbox overrides `sandbox.enabled=false` while policy is undetermined (#4522), git/JVM operations blocked inside sandbox (#4524).

---

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| **[#4390](https://github.com/github/copilot-cli/issues/4390)** | **Org-enabled models missing from catalogue** (Claude Sonnet 5/Opus 5, Kimi K3) | Blocks enterprise teams from using approved Anthropic/Kimi models; CLI reports “disabled by your organization” despite policy allowing them. | 10 💬, 7 👍 — **High severity for Copilot Business** |
| **[#4522](https://github.com/github/copilot-cli/issues/4522)** | **1.0.81 forces sandbox while managed policy undetermined** | Explicit `sandbox.enabled=false` ignored; breaks workflows for users without MDM/file-based policy. Regression in latest release. | 2 💬, 6 👍 — **Release-blocking regression** |
| **[#2904](https://github.com/github/copilot-cli/issues/2904)** | **Custom agent YAML frontmatter lacks `reasoning-effort`** | Forces global `--effort` flag; prevents per-agent tuning (e.g., high-effort for code-review, low for explore). | 7 💬, 20 👍 — **Top-voted feature request** |
| **[#2958](https://github.com/github/copilot-cli/issues/2958)** | **Per-mode default model config (plan vs. autopilot)** | Users want different models for planning vs. execution without manual switching. | 4 💬, 16 👍 — **Strong demand for mode-aware config** |
| **[#4490](https://github.com/github/copilot-cli/issues/4490)** | **Atlassian MCP OAuth broken in 1.0.80 (RFC 8414 §3.3)** | `MCPOAuthError: issuer mismatch` — worked in 1.0.78; blocks Jira/Confluence MCP users. | 3 💬 — **Auth regression affecting third-party MCPs** |
| **[#4392](https://github.com/github/copilot-cli/issues/4392)** | **Post-auth MCP client rebuild leaks stdio processes** | Orphaned child processes accumulate on every start → CPU/memory leak. | 2 💬 — **Resource leak, impacts long-running sessions** |
| **[#3682](https://github.com/github/copilot-cli/issues/3682)** | **BYOK credential refresh without CLI restart** | Short-lived tokens (Entra ID, AWS STS, OIDC) expire mid-session; requires full restart. | 2 💬, 6 👍 — **Critical for enterprise BYOK users** |
| **[#4516](https://github.com/github/copilot-cli/issues/4516)** | **Sandbox RW grants not honored by JVM processes** | Maven, Gradle, `javac` fail with “Operation not permitted” despite `/sandbox` allow-list. | 0 💬, new — **Blocks Java/Kotlin workflows in sandbox** |
| **[#4438](https://github.com/github/copilot-cli/issues/4438)** | **`disable-model-invocation: true` makes skill unreachable** | Skill disappears from `skill()` tool entirely; should be manual-only, not hidden. | 2 💬, 2 👍 — **Skill discovery broken** |
| **[#3698](https://github.com/github/copilot-cli/issues/3698)** | **MCP stdio connect leak: unbounded child processes** | Slow/unreachable MCP servers spawn unreaped children → CPU pin, system lag. | 0 💬, 3 👍 — **Long-standing stability issue** |

---

## 4. Key PR Progress

| # | PR | Status | Notes |
|---|----|--------|-------|
| **[#3163](https://github.com/github/copilot-cli/pull/3163)** | ViewSonic monitor | Open (2026-05-06) | Appears unrelated/spam — references hardware monitor and GitHub Actions runners; no code changes visible. |

> **Only 1 PR updated in 24h**, and it is non-functional. Core team merges are likely landing via internal branches or direct pushes; public PR velocity is near zero.

---

## 5. Feature Request Trends (Distilled from All Issues)

| Theme | Representative Issues | Signal |
|-------|----------------------|--------|
| **Granular model/agent configuration** | #2904 (reasoning effort per agent), #2958 (per-mode defaults), #1990 (built-in agents inherit instructions) | 30+ 👍 combined — users want **policy-as-code** for model behavior |
| **MCP ecosystem hardening** | #3162 (false policy blocks), #4096 (OAuth token bridging), #4490 (RFC 8414), #4392 (process leaks), #4515 (dual content/structuredContent) | 5+ active bugs — **MCP reliability is a top friction point** |
| **Sandbox control & escape hatches** | #4521 (cannot disable), #4522 (forced on), #4524 (blocks git), #4516 (JVM paths), #4482 (allowed_directories ignored) | 5 regressions in 1.0.81 — **sandbox UX needs urgent iteration** |
| **Session & context persistence** | #4313 (scroll history), #2622 (manual rename overwritten), #4511 (AIC display wrong), #812 (AGENTS.md not reloaded) | Quality-of-life gaps in **long-running session UX** |
| **Plugin/marketplace discoverability** | #4513 (cache ignores `ref`), #4523 (no search/filter) | Emerging as marketplace grows |

---

## 6. Developer Pain Points (Recurring Frustrations)

1. **Sandbox is “on by default, hard to off”** — 1.0.81 ignores explicit config, blocks `git`, breaks JVM tools, and grants don’t propagate to child processes. Teams feel **locked into a beta feature**.
2. **Model catalogue ≠ organization policy** — Approved models (Claude 5, Kimi K3) invisible in CLI; forces fallback to weaker models or manual BYOK.
3. **MCP integrations are brittle** — OAuth tokens not bridged (#4096), stdio leaks (#4392, #3698), false policy blocks (#3162), spec violations (#4490, #4515). **“Works in app, broken in CLI”** is a pattern.
4. **No hot-reload for credentials or config** — BYOK tokens (#3682), AGENTS.md (#812), hooks (#4520) all require CLI restart.
5. **Session metadata is unreliable** — AIC undercounts (#4511), manual renames lost (#2622), no history scroll (#4313). Hard to audit or resume work.
6. **Plugin/marketplace tooling is bare-bones** — No search (#4523), cache keyed by URL not ref (#4513), hooks silently ignored (#4520).

---

*Digest generated from `github/copilot-cli` data as of 2026-08-19 00:00 UTC. Links point to live GitHub items.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-19

## Today's Highlights
No new releases shipped in the last 24 hours. The community surfaced a **Web UI rendering regression** affecting non-Kimi (OpenAI-compatible) providers where assistant messages fragment into one delta per line after tab switches or reloads. Separately, a **third-party benchmark** open-sourced a full report on using Kimi Code CLI (K3) for out-of-sample quantitative strategy generation, signaling growing adoption in algorithmic trading workflows.

---

## Releases
*No new releases in the last 24h.*

---

## Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| **#2607** Web UI: assistant messages re-render as one-fragment-per-line after tab switch/reload for non-Kimi (OpenAI-compatible) providers | **Regression in multi-provider UX.** Streaming renders correctly initially, but remount (tab switch, reload, session reopen) breaks message coalescing — critical for users on custom OpenAI-compatible endpoints. | 1 comment, 0 👍 — newly filed, awaiting triage. |
| **#2608** Benchmarked K3 + Kimi Code on out-of-sample quant strategy generation — full report open-sourced | **Real-world validation.** Independent creator (Bilibili/YouTube) publishes full methodology & results using Kimi Code as primary driver for Freqtrade ETH perpetual futures strategy. Strong signal for CLI credibility in quant/finance niche. | 0 comments, 0 👍 — just posted; likely to attract quant-focused developers. |

---

## Key PR Progress

| PR | Status | Summary |
|----|--------|---------|
| **#2606** Dev/knowledge plane | OPEN | New feature PR — title suggests a "knowledge plane" abstraction for dev tooling. No description yet; awaiting maintainer discussion per contribution guidelines. |
| **#848** fix(kaos): log ssh failures when enabled | CLOSED | Merged after 6+ months (opened 2026-02-02). Adds SSH failure logging to `kaos` subsystem when enabled. Closed via Devin AI review flow. |

---

## Feature Request Trends
*Insufficient new issue volume (2 total) to extract trends this cycle.*  
Historical signal (from #2608): **domain-specific workflow integration** (quant/finance, freqtrade, strategy backtesting) is emerging as a showcase vertical. Watch for issues requesting better sandboxing, data connectors, or reproducible experiment tracking.

---

## Developer Pain Points
1. **Multi-provider Web UI fragility** (#2607): Custom OpenAI-compatible providers suffer display corruption on remount — blocks teams standardizing on non-Kimi backends.
2. **Long PR review latency** (#848): 6-month merge time for a logging fix hints at maintainer bandwidth constraints or triage backlog.
3. **Contribution friction** (#2606 template): Contribution guide explicitly warns PRs without prior issue discussion may be closed — raises barrier for drive-by fixes.

---

*Data source: `github.com/MoonshotAI/kimi-cli` — Issues & PRs updated 2026-08-18.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-19

## Today's Highlights
The OpenCode ecosystem is grappling with a **critical message ID rollover bug** (Issue #43303) that causes new messages to sort before historical ones since 14 Aug 2026, silently breaking session history and revert operations. Simultaneously, multiple providers (DeepSeek, Grok, GPT-5.6 variants) exhibit **streaming failures and truncated responses**, while the team advances a **deterministic session sync engine** (PR #43302) to replace the TUI's fragile per-session sync path.

---

## Releases
No new releases in the last 24 hours.

---

## Hot Issues (10 Noteworthy)

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| **[#43303](https://github.com/anomalyco/opencode/issues/43303)** Message IDs wrapped on 2026-08-14 — new messages sort before old ones, silencing sessions and deleting history on revert | **Critical data-integrity bug**: 48-bit ID (36-bit ms + 12-bit counter) rolled over; every message since 11:19 UTC sorts *before* all prior messages, breaking session ordering, revert, and history. | 2 comments, 0 👍 — under-reported severity |
| **[#32149](https://github.com/anomalyco/opencode/issues/32149)** Opencode Stops Processing Requests Without Response | Core reliability: app enters "thinking" state then halts with no output; 15 comments over 2 months indicates persistent, widespread impact. | 15 comments, 6 👍 |
| **[#33495](https://github.com/anomalyco/opencode/issues/33495)** Zen balance does not remove free usage cap; paid users hit 200-request limit | **Billing entitlement failure**: users with $20+ Zen balance still receive 429s at free-tier quota. | 7 comments, 1 👍 |
| **[#41469](https://github.com/anomalyco/opencode/issues/41469)** Session silently stops on empty LLM response (finish: unknown, 0 tokens) | Empty completions treated as normal turn completion; session loop exits silently — no error, no retry. | 5 comments, 0 👍 |
| **[#41582](https://github.com/anomalyco/opencode/issues/41582)** Truncated model response for OpenCode Go models (DeepSeek-V4-Pro, Kimi-K3, MiMo-V2-Pro) | Server-side streaming cutoff mid-response across multiple models; affects paid Go tier. | 4 comments, 2 👍 |
| **[#40176](https://github.com/anomalyco/opencode/issues/40176)** deepseek-v4-flash via Console Go stops after text output: no tool_calls, finish_reason stop | Model emits text then `finish_reason: stop` before tool calls arrive; agent loop exits mid-task. | 2 comments, 0 👍 |
| **[#43313](https://github.com/anomalyco/opencode/issues/43313)** Grok 4.5 hangs after image attachments | Desktop app on Windows: image attachment → agent attempts Read on PNG → stops responding. | 0 comments, 0 👍 (new) |
| **[#43311](https://github.com/anomalyco/opencode/issues/43311)** Batched MCP tool calls corrupt parameters with SSE transport | Second+ MCP tool call in batch fails with "JSON Parse error: Unexpected EOF" on SSE (port 4201). | 0 comments, 0 👍 (new) |
| **[#42748](https://github.com/anomalyco/opencode/issues/42748)** message.updated.1 re-serializes summary.diffs on every update → quadratic write growth | Each message update writes full diff patches; bytes written grow O(updates × diff size). Performance regression for large edits. | 3 comments, 0 👍 |
| **[#42775](https://github.com/anomalyco/opencode/issues/42775)** Incorrect sampling parameters hard-coded based on model name/id | OpenCode forces `temperature: 0.55`, `top_p: 1` for Qwen models regardless of config; no opt-out. | 2 comments, 0 👍 |

---

## Key PR Progress (10 Important)

| PR | Type | Summary |
|----|------|---------|
| **[#43302](https://github.com/anomalyco/opencode/pull/43302)** feat(client): session sync engine | **Major refactor** | Replaces TUI per-session sync with deterministic engine: `view = render(fold(snapshot ⊕ durable log) ⊕ outbox ⊕ overlay)`. One snapshot fetch + merged server stream (`session.log?after=seq&follow=true&ephemeral=true`). |
| **[#43320](https://github.com/anomalyco/opencode/pull/43320)** fix(app): hide built-in plugins | **UX cleanup** | Filters built-in server plugins from plugin lists in project/global settings and status popover; keeps package, local, SDK plugins visible. |
| **[#43314](https://github.com/anomalyco/opencode/pull/43314)** fix(session): degrade undecodable image attachments instead of failing the prompt | **Bug fix** | AVIF/HEIC/BMP/TIFF or oversized images no longer crash the prompt; they're degraded gracefully (closes #43262). |
| **[#43319](https://github.com/anomalyco/opencode/pull/43319)** tui: let injected text parts opt into markdown rendering | **Feature** | Plugins/tools posting via `session.prompt` can now opt into markdown rendering in TUI (closes #43318). |
| **[#43310](https://github.com/anomalyco/opencode/pull/43310)** fix(opencode): remove Qwen sampling defaults | **Bug fix** | Stops forcing `temperature: 0.55` / `top_p: 1` for all Qwen models; provider/server defaults apply, plugins can still override. |
| **[#43200](https://github.com/anomalyco/opencode/pull/43200)** refactor(ui): promote current design system | **Refactor** | Promotes UI primitives to canonical `@opencode-ai/ui/*`; removes `/v2` exports, legacy duplicates, stories. |
| **[#42978](https://github.com/anomalyco/opencode/pull/42978)** fix(app): show current worktree branch | **Bug fix** | Desktop now resolves branch correctly for manually created Git worktrees in new-session context (closes #42976). |
| **[#29831](https://github.com/anomalyco/opencode/pull/29831)** fix(core): resolve spawn completion on exit, not only close (Windows detached-child hang) | **Platform fix** | Shell commands that spawn background processes no longer hang waiting for child output on Windows. |
| **[#43282](https://github.com/anomalyco/opencode/pull/43282)** fix(core): expose valid subagent IDs in the subagent tool | **Bug fix** | Subagent tool now lists valid agent types in its schema (closes #36761). |
| **[#43309](https://github.com/anomalyco/opencode/pull/43309)** feat(opencode): make generated title length configurable | **Feature** | Adds `title_max_words` config to cap auto-generated session titles (closes #43118). |

---

## Feature Request Trends
1. **Multi-directory / worktree support** — Issue #43316 requests first-class ability to open one project across multiple directories/worktrees without local splitting workarounds.
2. **Session portability** — Issue #32696 (3 👍) asks for Export/Import sessions as first-class features in Desktop App (CLI already supports this).
3. **Provider expansion** — CommandCode (#26338, 36 👍), Qwen3.8-27B (#42729), SCX.ai (PR #42520) show demand for more model providers.
4. **Markdown/rendering extensibility** — Mermaid detection in untagged fences (#43304), injected text markdown opt-in (#43318/#43319).
5. **Internationalization** — Issue #43307 asks if OpenCode has joined i18n project; community interest in localization.

---

## Developer Pain Points
| Pain Point | Evidence |
|------------|----------|
| **Streaming reliability** | Multiple reports of truncated/aborted streams across DeepSeek, Kimi, MiMo, Grok, GPT-5.6 variants; empty responses silently kill sessions (#41469, #41582, #40176, #39831, #43313). |
| **Session sync fragility** | TUI per-session sync replaced by new engine (#43302); message ID rollover (#43303) exposes fundamental ordering assumptions. |
| **Provider quota/enforcement bugs** | Paid Zen users hit free-tier limits (#33495); API key not recognized (#43305); hard-coded sampling overrides user config (#42775). |
| **MCP transport issues** | SSE transport corrupts batched tool calls (#43311); runtime MCP bridging still stabilizing (#37684). |
| **Windows-specific hangs** | Detached child processes hang shell commands (#29831); Grok 4.5 + images hangs on Windows (#43313); app unresponsive (#43296). |
| **Performance regressions** | Quadratic event writes from diff re-serialization (#42748); no scrollbars in settings on Linux/Wayland (#43299). |

---

*Digest generated from GitHub data (issues/PRs updated 2026-08-18 → 2026-08-19). Links point to anomalyco/opencode.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-19

## Today's Highlights
The Pi team shipped a flurry of stability fixes addressing provider streaming hangs, session concurrency bugs, and Anthropic fallback cost misattribution. A new `disabledCommands` setting gives organizations control over built-in slash commands like `/share`. Meanwhile, the OpenAI-compatible provider login flow gained first-class support, simplifying custom endpoint onboarding.

---

## Releases
*No new releases in the last 24 hours.*

---

## Hot Issues (10 Noteworthy)

| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#8251](https://github.com/earendil-works/pi/issues/8251) | **GitHub Enterprise Copilot login fails after device flow due to concurrent policy requests (HTTP 429)** | Blocks Enterprise Copilot users; `Promise.all` hammering `/models` endpoint triggers rate limits immediately after successful auth. | 4 comments, closed with fix in progress |
| [#6339](https://github.com/earendil-works/pi/issues/6339) | **Auto-compaction threshold never evaluated during agentic run** | Proactive compaction only runs at run boundaries, not mid-run — long sessions can OOM before compaction triggers. | 3 comments, long-standing (Jul → Aug) |
| [#8331](https://github.com/earendil-works/pi/issues/8331) | **Agent loop hangs forever when provider stream stalls mid-response** | SSE stall (e.g., Anthropic 529) leaves `for await` blocked indefinitely — no watchdog timeout at stream layer. | 1 comment, **fixed in [#8330](https://github.com/earendil-works/pi/pull/8330)** |
| [#8334](https://github.com/earendil-works/pi/issues/8334) | **Session persistence allows two live writers → divergent branches** | Concurrent `pi -c` on same session file corrupts history; provider requests alternate between stale branches. | 1 comment, **fixed in [#8333](https://github.com/earendil-works/pi/pull/8333)** |
| [#8285](https://github.com/earendil-works/pi/issues/8285) | **Anthropic fallback usage priced with requested model** | Server-side fallback (e.g., `claude-opus-4-8` after `claude-fable-5` refusal) bills wrong model — cost tracking broken. | 1 comment, **fixed in [#8319](https://github.com/earendil-works/pi/pull/8319)** |
| [#8328](https://github.com/earendil-works/pi/issues/8328) | **Threshold compaction never fires for zero-usage providers** | Providers omitting final `usage` block (despite `stream_options.include_usage`) skip compaction entirely. | 1 comment |
| [#8305](https://github.com/earendil-works/pi/issues/8305) | **`pi` User-Agent leaks OpenAI SDK default on Completions/Responses paths** | Only `xai` provider sends custom UA; custom OpenAI-compatible endpoints see generic SDK UA — breaks analytics/routing. | 1 comment, open |
| [#8300](https://github.com/earendil-works/pi/issues/8300) | **Two processes can share one session file (no in-use detection)** | Duplicate of #8334 root cause; no file lock or PID tracking — enables silent data corruption. | 1 comment |
| [#8299](https://github.com/earendil-works/pi/issues/8299) | **Windows npm install 5× slower than release binary (Defender I/O scan)** | 13k+ unbundled files trigger AV on every cold start; binary launch is near-instant. | 1 comment, docs/installer fix needed |
| [#8336](https://github.com/earendil-works/pi/issues/8336) | **Z.ai `glm-5.3` catalog entry breaks thinking-level selector** | `supportsReasoningEffort:false` + no `thinkingLevelMap` makes UI selector a no-op for this model. | 1 comment, catalog-side fix |

---

## Key PR Progress (10 Important)

| PR | Type | Summary | Status |
|----|------|---------|--------|
| [#8333](https://github.com/earendil-works/pi/pull/8333) | **Fix** | Enforce single live writer per session; verify physical tail before provider turns; add opt-in provider-lineage auditing. | **Closed** (fixes #8334) |
| [#8330](https://github.com/earendil-works/pi/pull/8330) | **Fix** | Stream inactivity watchdog — stalled SSE streams now timeout instead of hanging agent loop forever. | **Closed** (fixes #8331) |
| [#8319](https://github.com/earendil-works/pi/pull/8319) | **Fix** | Thread actual fallback model through usage cost calculation (replaces reverted #8308). | **Open** |
| [#8320](https://github.com/earendil-works/pi/pull/8320) / [#8324](https://github.com/earendil-works/pi/pull/8324) | **Feature** | Add "OpenAI Compatible API" & "OpenAI Compatible (Custom Models)" to `/login` flow — prompts for base URL, model, key; writes `models.json` with defaults. | **Closed** |
| [#8326](https://github.com/earendil-works/pi/pull/8326) | **Feature** | `disabledCommands` setting — hide & block built-in slash commands (e.g., `/share`, `/export`) via `settings.json`. | **Closed** (closes #8325) |
| [#8316](https://github.com/earendil-works/pi/pull/8316) | **Feature** | New `agent_recovery_exhausted` extension hook — fires after native retries + overflow compaction exhausted; handler can `{ retry: true }` to switch model mid-session. | **Closed** (closes #8317) |
| [#8314](https://github.com/earendil-works/pi/pull/8314) | **Fix** | Round-trip Bedrock `redactedContent` reasoning (encrypted CoT from OpenAI-on-Bedrock) across turns — was dropped previously. | **Closed** (fixes #8315) |
| [#8327](https://github.com/earendil-works/pi/pull/8327) | **Perf** | Yield long Markdown rendering via `RenderContext` deadline/callback — prevents TUI event-loop starvation on large outputs. | **Closed** |
| [#8303](https://github.com/earendil-works/pi/pull/8303) | **Fix** | Collapse tool-result images *including* Kitty/iTerm children — previously only hid text, leaving full images visible in collapsed view. | **Closed** (fixes #8304) |
| [#8254](https://github.com/earendil-works/pi/pull/8254) | **Fix** | Prevent Copilot policy login rate limits: fetch catalog first, update only unconfigured tool-capable models, retry 429s with bounded backoff. | **Open** (fixes #7850) |

---

## Feature Request Trends
1. **Provider extensibility** — First-class OpenAI-compatible login (#8320/#8324), Bedrock Mantle Responses provider (#6216), Z.ai catalog fixes (#8336).
2. **Session safety & concurrency** — Writer ownership (#8333/#8334), in-use detection (#8300), reload safety (#8311).
3. **Observability & control** — `disabledCommands` (#8326), User-Agent hygiene (#8305), provider-lineage auditing (#8333), retry classification hooks (#8138, #8317).
4. **Compaction intelligence** — Mid-run threshold checks (#6339), cache-friendly compaction (#8307), zero-usage provider support (#8328).
5. **Reasoning/Thinking token parity** — Generalized `thinkingTokenBudgetField` (#8275), Bedrock redacted reasoning (#8314), thinking-level selector fixes (#8336).

---

## Developer Pain Points (Recurring)
| Area | Frequency | Core Frustration |
|------|-----------|------------------|
| **Provider streaming reliability** | High | Stalled SSE hangs agent loop indefinitely; no built-in timeout/watchdog (fixed in #8330). |
| **Session corruption risk** | High | Concurrent processes silently fork session history; no file locking or PID ownership (fixed in #8333). |
| **Cost tracking accuracy** | Medium | Anthropic fallback bills wrong model; OpenAI-compatible usage attribution inconsistent. |
| **Windows cold-start performance** | Medium | npm install 13k+ files → 3s+ launch under Defender; binary is 5× faster but under-promoted. |
| **Extensibility gaps** | Medium | No hook for post-recovery model switch (#8317), no pre-persistence message rewrite (#8292), no skill namespacing (#8329). |
| **TUI rendering jank** | Medium | Large Markdown blocks event loop (#8327); scroll jumps on long conversations (#8309); image collapse broken (#8304). |
| **Catalog/model metadata drift** | Low | Z.ai `glm-5.3` entry breaks thinking UI; Codex context ceiling not discoverable (#8332). |

---

*Generated from `earendil-works/pi` GitHub activity (issues + PRs updated 2026-08-18 → 2026-08-19).*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-19

---

## 1. Today's Highlights

Qwen Code shipped **v0.21.14-preview.0** introducing a live-session registry and `qwen sessions ps` CLI for inspecting active daemon sessions. Concurrently, the team completed a full **SWE-bench Verified (500/500) + Terminal-Bench 2.0 (89/89)** validation run against v0.21.13, with results written back to the release — a major confidence signal for the upcoming stable. On the bug front, a **P1 regression on Ollama backends** (#9438) breaks all tool use by dropping the user message in follow-up requests, and a nightly release failed quality gates (#9442).

---

## 2. Releases

### v0.21.14-preview.0
- **feat(core):** Live-session registry + `qwen sessions ps` command (PR #8969) — enables operators to list and inspect daemon-held sessions.
- **feat(daemon):** Attach skill-toggle mutation metadata for finer-grained capability control.
- **Benchmarks:** Full end-to-end SWE-bench Verified (500 cases) + Terminal-Bench 2.0 (89 cases) passed on v0.21.13 reference; smoke tests for sandbox recovery and credential refresh also green.

> 🔗 [Release v0.21.14-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.14-preview.0)

---

## 3. Hot Issues (Top 10 by Impact)

| # | Issue | Priority | Why It Matters | Community Signal |
|---|-------|----------|----------------|------------------|
| [#9438](https://github.com/QwenLM/qwen-code/issues/9438) | User message dropped after tool call on Ollama → 500 “no user query found” | **P1 / Bug / Core** | **Blocks all tool use for Ollama/OpenAI-compatible providers** — the follow-up request omits the required `role: "user"` turn. | 3 comments, 0 👍 — urgent, active triage |
| [#9434](https://github.com/QwenLM/qwen-code/issues/9434) | `ask` returns from Edit/WriteFile PreToolUse hooks don’t show diffs | **P2 / Bug / Core** | Hooks that escalate to human (`ask`) lose the diff context, making review blind. Affects path-filtering and policy workflows. | 3 comments |
| [#9449](https://github.com/QwenLM/qwen-code/issues/9449) | Leader-visible Agent Team health status & terminal failure notifications | **P2 / Feature / Multi-agent** | Teams already track member state internally; surfacing it to the leader enables observability for long-running multi-agent jobs. | 2 comments |
| [#9443](https://github.com/QwenLM/qwen-code/issues/9443) | Automated PR verification: distinguish “no behavioral change” from “never exercised” | **P2 / Enhancement / CI-CD** | Current A/B reports “no response changes” even when code paths are untested — false confidence. Critical for review pipeline trust. | 2 comments |
| [#9437](https://github.com/QwenLM/qwen-code/issues/9437) | Rework rewind mapping: single source of truth for UI/API alignment | **P2 / Enhancement / Session** | History mapping currently derives from two independent representations (turn count vs prompt count), causing recurring drift bugs. | 2 comments |
| [#9446](https://github.com/QwenLM/qwen-code/issues/9446) | Review pipeline: live-service witness form & graft for batch-unreachable claims | **P2 / Feature / CI-CD** | All current witness forms are batch-shaped; this asks for a form that can verify live, stateful services (e.g., daemon session resolution). | 2 comments |
| [#9439](https://github.com/QwenLM/qwen-code/issues/9439) | Experiment: Electron Computer Use activity surfaces | **P3 / Feature / Web-Shell** | Explores desktop-only UX for computer-use in the isolated Electron Web Shell preview (#9168/#9169). | 2 comments |
| [#9442](https://github.com/QwenLM/qwen-code/issues/9442) | Release failed for v0.21.11-nightly.20260819 (quality gate) | **Bug / Autofix** | Nightly release pipeline broke on `quality` job — signals flakiness or regression in lint/test suite. | 0 comments (bot-filed) |
| [#9401](https://github.com/QwenLM/qwen-code/issues/9401) | (PR) Make team shutdown a leader-only tool | **P2 / Fix / Core** | Removes `type` param from `send_message`; introduces dedicated `request_shutdown` tool — cleaner control plane. | PR #9401, 0 comments |
| [#9402](https://github.com/QwenLM/qwen-code/issues/9402) | (PR) Agent board — share work across independently started agents | **Feature / Multi-agent** | Enables peer-to-peer collaboration between sessions started by different users/times/dirs — not leader/worker. | PR #9402, 0 comments |

---

## 4. Key PR Progress (Top 10 by Significance)

| PR | Title | Type | Summary |
|----|-------|------|---------|
| [#9445](https://github.com/QwenLM/qwen-code/pull/9445) | feat(review): add runtime-axis, table-sweep, isolation witness forms | **Feature** | Three new witness forms for the verifier: runtime-axis (claims about unshipped runtime versions), table-sweep (systematic param combos), isolation (private scratch worktree). |
| [#9144](https://github.com/QwenLM/qwen-code/pull/9144) | refactor(cli): keep acp-integration off serve internals | **Refactor** | Completes boundary cleanup (#8084): removes `serve/` imports from `acp-integration`, adds ESLint guard, moves Live Voice helpers under `acp-integration/`. |
| [#9399](https://github.com/QwenLM/qwen-code/pull/9399) | docs: add peer session collaboration design | **Design Doc** | Specifies how independently started sessions discover and collaborate — distinct from leader/spawned workers. Foundation for #9402. |
| [#9413](https://github.com/QwenLM/qwen-code/pull/9413) | feat(review): record each round’s posting volume in ledger marker | **Feature** | Machine-readable marker now includes `posted` count (after severity floor), enabling auditability of review throughput. |
| [#9444](https://github.com/QwenLM/qwen-code/pull/9444) | test(ci): stage on-disk session state in serve A/B | **Test/Infra** | Serve A/B now runs against a daemon with persisted transcripts (case-insensitive ID resolution, duplicate refusal, etc.) — catches real-world session bugs. |
| [#9448](https://github.com/QwenLM/qwen-code/pull/9448) | feat(review): rule on contract documentation, matrix layered guards | **Feature** | Adds path-scoped checklist for consumer-facing contracts (wire protocols, API refs, SDK guides); verifies prose matches code. |
| [#9369](https://github.com/QwenLM/qwen-code/pull/9369) | fix(ci): port heal chain’s wipe guard to triage and A/B wipes | **Fix/Infra** | Unifies “empty workspace, keep directory” logic across 3 workflows with hardened guards (trailing-slash strip, canonicalization, runner-workspace allowlist). |
| [#9447](https://github.com/QwenLM/qwen-code/pull/9447) | feat(review): teach verifiers four run disciplines from live two-arm verification | **Feature** | Codifies lessons from #9341 verification: stateful targets need matrix warm-up, probe isolation, flip-check restoration, and reverse-order validation. |
| [#9301](https://github.com/QwenLM/qwen-code/pull/9301) | feat(goal): account the tokens a Goal spends | **Feature** | `GoalRecord.tokensUsed` aggregated per goal; surfaced in `/stats` and `get_goal` summary — enables cost tracking per objective. |
| [#9388](https://github.com/QwenLM/qwen-code/pull/9388) | feat(web-shell): add transcript contract prevalidation | **Feature/Infra** | Freezes V1 export schema, synthetic fixtures, hashes, capability matrix for shared chat transcript contract across Web, Tauri, VS Code, HTML export. |

---

## 5. Feature Request Trends

1. **Multi-agent observability & control** — Leader health dashboards (#9449), peer session collaboration (#9399/#9402), leader-only shutdown (#9401), teammate count tied to config cap (#9403).
2. **Review pipeline depth** — New witness forms for live services (#9446), runtime-axis/table-sweep/isolation (#9445), contract doc verification (#9448), run disciplines from real verifications (#9447).
3. **Session durability & portability** — On-disk session state in CI (#9444), rewind mapping unification (#9437), transcript contract standardization (#9388).
4. **Provider/integration robustness** — Ollama message ordering fix (#9438), TLS-enabled daemon reachability for channel workers (#9392), DingTalk file delivery & forwarded records (#9350/#9339).
5. **Dynamic workflows & token accounting** — Settings-gated workflow enablement (#9098), per-goal token tracking (#9301).

---

## 6. Developer Pain Points

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Ollama/OpenAI-compat provider breakage** | #9438: tool use entirely broken — user message dropped in follow-up | **Critical (P1)** |
| **Hook UX gaps** | #9434: `ask` escalations hide diffs; reviewers can’t see what they’re approving | High |
| **Review pipeline false negatives** | #9443: “no behavioral change” ≠ “code exercised” — erodes trust in automated review | High |
| **Session history drift** | #9437: dual-representation rewind mapping causes recurring alignment bugs | Medium |
| **Nightly release instability** | #9442: quality gate failure on v0.21.11-nightly | Medium |
| **Multi-agent opacity** | #9449/#9401/#9403: no visibility into teammate health, shutdown control, or cap enforcement | Medium |
| **Web-shell transcript interop** | #9388: need frozen contract for cross-platform (Web/Tauri/VS Code/HTML) export | Medium |

---

*Generated from GitHub data (issues, PRs, releases) for QwenLM/qwen-code as of 2026-08-19.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) Community Digest — 2026-08-19

## 1. Today's Highlights
CodeWhale **v0.9.9** shipped with fixes for narrow-terminal rendering, strict rustdoc compliance, and stabilized configuration keys. The epic crate-decomposition (EPIC-005) advances with FEAT-015 merging command context adapters and a migration gate—zero production commands moved yet, but the extraction infrastructure is live. A critical bug where `/new` dropped the system prompt (only sending a folded `<context_update>`) was fixed and released in this version.

## 2. Releases
| Version | Key Changes | Link |
|---------|-------------|------|
| **v0.9.9** | Fixed: compact-row metrics <60 cols (#5486); strict rustdoc bare URLs (#5489). Changed: stable config keys; npm package renamed to `codewhale` (legacy `deepseek-tui` deprecated). All 20 Cargo crates + GHCR/Homebrew/CNB published non-interactively. | [PR #5499](https://github.com/Hmbown/CodeWhale/pull/5499) |

## 3. Hot Issues (Top 10 by Impact/Activity)
| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#5316](https://github.com/Hmbown/CodeWhale/issues/5316) | **EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella)** | Architectural umbrella for splitting the monolithic TUI crate; tracks every sub-EPIC/FEAT. 7 comments, active since 08-10. | High — structural refactor enabling independent crate releases & faster CI. |
| [#5337](https://github.com/Hmbown/CodeWhale/issues/5337) | **Web: finish #4934 dictionary spine — retire every `isZh` branch** | Eliminates per-string ternary i18n; moves all page bodies to per-locale dictionary modules. 5 comments, multiple PRs landing. | High — removes technical debt, unblocks full Chinese localization. |
| [#5437](https://github.com/Hmbown/CodeWhale/issues/5437) | **TUI: formalize status-bar color grammar + surface repo/worktree state** | Design-review outcome: keep the “color vocabulary”; add repo/worktree context to header. 4 comments, PR #5511 merged. | Medium — UX polish with clear maintainer buy-in. |
| [#5299](https://github.com/Hmbown/CodeWhale/issues/5299) | **Release: move npm publication to trusted publishing** | Removes manual browser+2FA step for npm; enables fully automated releases. 3 comments. | Medium — release-engineering hygiene. |
| [#5508](https://github.com/Hmbown/CodeWhale/issues/5508) | **Enhancement: continuous loop (infinite turn until interrupt)** | Enables AI coordinators to run perpetual turn cycles without sleep hacks. 3 comments, new 08-18. | Emerging — high-value for multi-agent workflows. |
| [#5505](https://github.com/Hmbown/CodeWhale/issues/5505) | **Bug: System prompt dropped after `/new`** | **Fixed in v0.9.9** — model received only a folded context update, losing project instructions. 2 comments, closed same day. | Critical — session continuity regression. |
| [#5360](https://github.com/Hmbown/CodeWhale/issues/5360) | **v0.9.8: make one-shot approval outcomes durable & fail-closed** | Adopts DeepSeek Harness pattern: persist ask/decision to session log, reject stale decisions. 1 comment, PR #5491 merged. | High — security/approval integrity. |
| [#5512](https://github.com/Hmbown/CodeWhale/issues/5512) | **Bug: header status indicator (cw/whale/dots) never renders since 0.9.7** | Windows 11 regression; worked in 0.8.64. 1 comment, open. | Medium — visible UI regression on Windows. |
| [#5497](https://github.com/Hmbown/CodeWhale/issues/5497) | **Fix(tasks): terminalize stuck durable executions & bound event growth** | Workers can hang forever if `turn.completed` never fires; cancellation lacks grace period. 1 comment, open. | High — reliability for long-running tasks. |
| [#5482](https://github.com/Hmbown/CodeWhale/issues/5482) | **EPIC(docs): review, restructure, fully localize docs to Chinese** | Growing CN user base; machine translation errors + stale English sources. Tier 1 delivered via PR #5507. | High — accessibility & community growth. |

## 4. Key PR Progress (Top 10 Merged/Open)
| # | Title | Type | Status | Summary |
|---|-------|------|--------|---------|
| [#5491](https://github.com/Hmbown/CodeWhale/pull/5491) | `fix(tui): persist approval outcomes before execution` | Fix | **Merged** | Closes #5360 — writes approval receipt to session log before execute; denies on persist failure; reconstructs state on resume. |
| [#5506](https://github.com/Hmbown/CodeWhale/pull/5506) | `feat(tui): add command context adapters and migration gate (FEAT-015)` | Feat | **Merged** | DI + migration infra for slash-command extraction; **zero production commands moved** — safe incremental path. |
| [#5507](https://github.com/Hmbown/CodeWhale/pull/5507) | `docs(i18n): complete Tier 1 of Chinese docs localization` | Docs | **Merged** | Restructures `docs/` → `docs/zh_hans/`; migrates existing translations; foundation for full localization. |
| [#5504](https://github.com/Hmbown/CodeWhale/pull/5504) | `feat(web): move docs/hooks & troubleshooting onto dictionary spine` | Feat | **Merged** | Eliminates 24 `isZh` branches; both pages now use locale dictionaries. |
| [#5511](https://github.com/Hmbown/CodeWhale/pull/5511) | `feat(tui): show repository context in git chrome` | Feat | **Merged** | Header shows `repo · branch*` or `repo/worktree · branch*` with ahead/behind counts; truncates long names. |
| [#5509](https://github.com/Hmbown/CodeWhale/pull/5509) | `fix(tui): restore /title as independent terminal window title` | Fix | **Open** | Reverts merge of `/title` + `/rename`; restores separate terminal-tab title control. |
| [#5510](https://github.com/Hmbown/CodeWhale/pull/5510) | `docs(readme): restore the star history chart` | Docs | **Open** | Replaces removed star-history chart with fan-out GIF (assets/fanout.gif). |
| [#5500](https://github.com/Hmbown/CodeWhale/pull/5500) | `test(ci): harden release gate concurrency` | CI | **Merged** | Serializes telemetry_contract under nextest; retries fixture lock; uses existing 10s deadline. |
| [#5495](https://github.com/Hmbown/CodeWhale/pull/5495) | `ci: cap every ci.yml job with timeout-minutes` | CI | **Merged** | Replaces 360-min default with explicit timeouts; prevents 6-hr stuck gates (live incident #5492). |
| [#5404](https://github.com/Hmbown/CodeWhale/pull/5404) | `fix(client): fail closed on SSE UTF-8 split across HTTP/2 DATA` | Fix | **Merged** | Fixes macOS DeepSeek Flash garbling (U+FFFD/CJK) from partial multi-byte chars in SSE frames. |

## 5. Feature Request Trends
1. **Multi-agent / coordinator workflows** — Infinite turn loops (#5508), durable task execution (#5497), subagent fan-out (README GIF).
2. **Full Chinese localization** — Dictionary-spine i18n (#5337), docs restructure (#5482/#5507), per-language folders.
3. **Approval & session durability** — Persist outcomes (#5360/#5491), fail-closed defaults, session resume fidelity.
4. **Configurable resource budgets** — Model-visible read/tool-result limits (#5405), auto-router timeout (#5494).
5. **Release automation** — Trusted npm publishing (#5299), CI timeout bounding (#5495/#5496), non-interactive multi-target releases.

## 6. Developer Pain Points (Recurring)
| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Session state loss on `/new`** | #5505 (critical, fixed same day) | High — blocks workflow continuity |
| **Windows TUI rendering regressions** | #5512 (status indicator missing since 0.9.7) | Medium — platform-specific |
| **Stuck durable tasks / unbounded workers** | #5497 (no grace period on cancel) | High — reliability for automation |
| **Manual npm release step** | #5299 (expired credentials, browser+2FA) | Medium — release friction |
| **CI jobs hanging without timeouts** | #5495 (6-hr stall on Lint job) | High — CI reliability |
| **i18n technical debt (`isZh` everywhere)** | #5337 (12+ branches per page) | High — maintenance burden |
| **Approval decision loss on crash/restart** | #5360 (no durable log) | Medium — security/compliance |

---

*Data source: `github.com/Hmbown/CodeWhale` — Issues/PRs updated 2026-08-18 → 2026-08-19. All links point to the CodeWhale repository (successor to legacy `deepseek-tui`).*

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*