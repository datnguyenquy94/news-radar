# AI CLI Tools Community Digest 2026-08-26

> Generated: 2026-08-26 01:46 UTC | Tools covered: 10

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

# Cross-Tool Comparison Report: AI CLI Tools Ecosystem (2026-08-26)

---

## 1. Ecosystem Overview

The AI CLI tools landscape shows **intense fragmentation with convergent pressure points**. All nine tracked tools shipped updates or active development within 24 hours, but maturity varies sharply: Claude Code and OpenAI Codex operate at enterprise scale with dedicated Windows desktop apps, while Kimi, Grok Build, and DeepSeek TUI remain earlier-stage. Three systemic stressors dominate every community: **Windows/MSIX packaging reliability**, **MCP (Model Context Protocol) integration stability**, and **context/compaction management**. Tools backed by model providers (Anthropic, OpenAI, Google, xAI, Moonshot, Alibaba) prioritize first-party model integration; community-driven tools (OpenCode, Pi, DeepSeek TUI) emphasize provider neutrality and extensibility. The ecosystem is consolidating around **TUI-first UX, plugin/MCP ecosystems, and session persistence**—but Windows remains the universal Achilles' heel.

---

## 2. Activity Comparison (2026-08-25 → 2026-08-26)

| Tool | Releases (24h) | Hot Issues Tracked | PRs Updated | Release Status |
|------|----------------|-------------------|-------------|----------------|
| **Claude Code** | 2 patches (v2.1.245, v2.1.246) | 10 | 1 | Stable channel active |
| **OpenAI Codex** | 3 alphas (rust-v0.150.0-alpha.9–11) | 10 | 10 | Alpha cadence → stable imminent |
| **Gemini CLI** | 3 (nightly + 2 preview) | 10 | 10 | Rapid preview cadence |
| **GitHub Copilot CLI** | 2 prereleases (v1.0.81-10, -11) | 10 | 1 | Prerelease channel broken (#4605) |
| **Kimi Code CLI** | 0 | 2 | 0 | **Stalled** — critical bugs, no releases |
| **OpenCode** | 1 (v1.18.23) | 10 | 10 | Stable + v2 beta parallel |
| **Pi** | 0 | 10 | 10 | No release; critical fixes in PRs |
| **Qwen Code** | 0 (nightly publish failed) | 8 | 10 | Nightly blocked; architectural refactor |
| **DeepSeek TUI** | 0 (v0.9.12 RC gating) | 10 | 10 | RC integration (72 commits in #5576) |
| **Grok Build** | 0 | 0 | 0 | **No activity** |

**Key insight**: 7/9 tools had ≥10 PRs updated—high internal velocity. Only Claude Code and Copilot CLI show low public PR counts, suggesting internal-branch development models.

---

## 3. Shared Feature Directions (Cross-Tool Requirements)

| Requirement | Tools Affected | Specific Needs |
|-------------|----------------|----------------|
| **Windows/MSIX reliability** | Claude Code, OpenAI Codex, Copilot CLI, Gemini CLI, Qwen Code, DeepSeek TUI, Pi | GPU crashes (Claude #80444, Codex #39443), binary relocation (Codex #40700), paste broken (Qwen #9061), PowerShell 7 default (Pi #8582), worktree cleanup (Copilot #4593), path handling (DeepSeek #5610) |
| **MCP ecosystem stabilization** | Claude Code, OpenAI Codex, Copilot CLI, Gemini CLI, OpenCode, Qwen Code, Pi | Draft-07 outputSchema (Claude #86142), transport errors (Codex #40715), token injection (Copilot #4604), SSE hangs (Qwen #10056), OAuth SSRF (Gemini #29081), Cloudflare routing (OpenCode v1.18.23) |
| **Context/compaction control** | Claude Code, Gemini CLI, OpenCode, Pi, DeepSeek TUI, Qwen Code | `/compact` silent failure (Claude #89040), auto-memory observability (Claude #82056), compaction survival contract (DeepSeek #4394), task resurrection (Kimi #2523), token/cost streaming (DeepSeek #5581) |
| **Session persistence & portability** | Copilot CLI, OpenCode, Pi, DeepSeek TUI, Qwen Code | Cross-machine sync (Copilot #1153), pinned-session race (OpenCode #44736), AgentSession bugs (Pi #5886), control socket/relaunch (DeepSeek #5533, #5532), WebShell persistence (Qwen #10011) |
| **Provider neutrality / BYOK** | OpenCode, Pi, DeepSeek TUI, Copilot CLI, Gemini CLI | 18 DeepSeek gates (DeepSeek #5588), 136 files coupled to `@google/genai` (Qwen #4063), local model picker (Copilot #3709), SiliconFlow/Opper providers (Pi #4742, #8639), Groq/DeepInfra (OpenCode #45108) |
| **TUI/streaming polish** | DeepSeek TUI, Pi, OpenCode, Gemini CLI, Qwen Code | Row corruption (Pi #8584), persistent terminals (OpenCode #44971), transcript actions (DeepSeek #5608), compact-only mode (Qwen #9993), browser agent Wayland (Gemini #21983) |

---

## 4. Differentiation Analysis

| Dimension | Provider-Backed Tools | Community-Driven Tools |
|-----------|----------------------|------------------------|
| **Core Focus** | First-party model integration, enterprise auth, managed infra | Provider-agnostic core, extensibility, local/self-hosted control |
| **Target Users** | Enterprise teams, paying subscribers, IDE-integrated devs | Power users, OSS contributors, multi-model workflows, CI/automation |
| **Technical Approach** | Electron/MSIX desktop apps, proprietary protocols, cloud sync | Native TUI (Rust/Go), ACP/MCP standards, local-first state, git-native |
| **Release Cadence** | Stable + alpha/preview channels, internal branches | Nightly/RC, public PR-driven, frequent breaking changes |
| **Windows Strategy** | MSIX/AppX (problematic) → standalone installer demanded | Native Windows + WSL + Git Bash, PowerShell 7, gix for git ops |
| **Extensibility** | Plugins/skills/MCP (curated) | Plugin packages (Git-sourced), command shapes, external runtimes |
| **Observability** | Telemetry pipelines, Guardian reviewers, enterprise audit | JSONL outbox, cost streaming, debug log rotation |

**Notable outliers**: 
- **OpenCode** bridges both: v1 stable (provider-neutral), v2 beta (opinionated), heavy Bazel/CI investment.
- **Pi** uniquely targets **multi-runtime** (Node.js + Deno + Bun) and **model-aware adapters** (thinking-level maps, image budgets).
- **DeepSeek TUI** invests heavily in **supervision primitives** (control socket, relaunch, lifecycle outbox) for CI/automation.

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|------|-------|----------|
| **High Momentum / Enterprise-Ready** | **Claude Code**, **OpenAI Codex** | 156-comment CVP issue (Claude), 187👍 installer request (Codex), 3-alpha/24h cadence, dedicated Windows desktop, enterprise auth pipelines |
| **High Momentum / Rapid Iteration** | **Gemini CLI**, **OpenCode**, **Pi**, **DeepSeek TUI** | 10 PRs/24h each, architectural refactors in flight (Gemini AST, OpenCode plugin git, Pi provider neutrality, DeepSeek crate decomposition), nightly/RC cadence |
| **Active but Niche/Constrained** | **GitHub Copilot CLI**, **Qwen Code** | Copilot: 74👍 vim mode (11mo), prerelease channel broken; Qwen: 136-file refactor, nightly publish failed, Windows regression unaddressed |
| **Early / Stalled** | **Kimi Code CLI**, **Grok Build** | Kimi: 2 critical bugs, 0 PRs, no releases; Grok: no activity |

**Maturity signals**: 
- Tools with **stable releases + alpha/preview channels** (Claude, Codex, Gemini, Copilot) show production hardening.
- Tools with **public architectural epics** (OpenCode v2, DeepSeek EPIC-005, Qwen core/cli refactor, Pi provider neutrality) are in pre-1.0 consolidation.
- **Community signal concentration**: Top issues across tools have 10–187👍; Windows installer (Codex #13993), vim mode (Copilot #13), CVP block (Claude #84352) indicate high-stakes user investment.

---

## 6. Trend Signals for Technical Decision-Makers

| Trend | Signal Strength | Implication |
|-------|----------------|-------------|
| **MCP is the de facto tool protocol—but fragmented** | 7/9 tools report MCP bugs; draft-07, SSE, OAuth, permissions all unstable | **Adopt MCP cautiously**: expect transport/auth breaks; invest in provider-agnostic wrappers. |
| **Windows is the blocking platform for adoption** | Every tool with Windows users has MSIX/AppX/packaging regressions | **Mandate standalone installers** (MSI/exe) and WSL-first CI; MSIX is not production-ready for CLI tools. |
| **Session/state persistence is the next UX frontier** | Control sockets, relaunch, WebShell persistence, pinned sessions, cross-machine sync | **Design for interruptible, migratable sessions**—ephemeral CLI sessions are a competitive liability. |
| **Provider lock-in is being actively dismantled** | 136-file decoupling (Qwen), 18-gate audit (DeepSeek), BYOK demands (Copilot), provider catalog (Pi) | **Architect for model-agnostic cores**; first-party model integration should be a plugin, not the kernel. |
| **Observability → Cost Control → Governance** | Token/cost streaming (DeepSeek), telemetry pipelines (Codex), Guardian reviewers (Codex), enterprise policy (Claude, Copilot) | **Build cost/usage metering into the toolchain**; enterprise buyers will require it. |
| **TUI is winning over Electron for core loops** | DeepSeek, OpenCode, Pi, Qwen WebShell all invest in TUI; Electron tools (Claude, Codex, Copilot) fight GPU/process leaks | **Consider TUI-first for developer-facing CLIs**; reserve Electron for GUI-rich workflows (browser, diff review). |
| **Security hardening is accelerating** | SSRF fixes (Gemini, Pi), A2A auth (Gemini), sandbox deny-lists (DeepSeek), Code Integrity (Claude) | **Supply-chain and runtime security are table stakes**; expect OAuth, sandbox, and binary-signing requirements. |

---

### Bottom Line for Decision-Makers

| If You Need... | Best Fit (Aug 2026) |
|----------------|---------------------|
| **Enterprise-ready, managed, Anthropic-integrated** | **Claude Code** (despite Windows/MSIX pain) |
| **OpenAI ecosystem, high alpha velocity, BYOK pressure** | **OpenAI Codex** (watch 0.150 stable) |
| **Google Cloud / Vertex AI, AST-aware tooling, rapid previews** | **Gemini CLI** |
| **GitHub-integrated, Copilot seat holders, vim-mode waiters** | **GitHub Copilot CLI** (prerelease channel broken) |
| **Provider-neutral, Git-native, plugin-extensible, CI-friendly** | **OpenCode** (v1 stable) or **DeepSeek TUI** (v0.9.12 RC) |
| **Multi-runtime, model-aware adapters, Chinese model hubs** | **Pi** |
| **Alibaba/Qwen models, WebShell parity, architectural reset** | **Qwen Code** (post-refactor) |
| **Minimal risk, maximum stability** | **Wait**—no tool is regression-free on Windows; all have critical open bugs. |

**Strategic recommendation**: Standardize on **MCP + ACP interfaces**, not tool-specific SDKs. Invest in **Windows-native packaging (MSIX alternative)** and **session serialization** now—these are the ecosystem's shared blockers.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-08-26 | Source: github.com/anthropics/skills**

---

## 1. Top Skills Ranking — Most-Discussed PRs

| # | Skill / PR | Functionality | Discussion Highlights | Status |
|---|------------|---------------|----------------------|--------|
| 1 | **[#1298](https://github.com/anthropics/skills/pull/1298)** `skill-creator`: fix `run_eval.py` 0% recall | Core fix for skill evaluation pipeline — installs eval artifact as real skill, fixes Windows stream reading, trigger detection, parallel workers | Directly addresses **Issue #556** (12 comments, 7 👍): `claude -p` never triggers skills during evaluation, making optimization loop optimize against noise | **Open** (updated 2026-06-23) |
| 2 | **[#1628](https://github.com/anthropics/skills/pull/1628)** **Hivemind**: Zero-Cost Multi-Agent Orchestration | Delegates mechanical work to headless [opencode](https://opencode.ai) workers on free models; Claude stays planner/reviewer/merger | Novel architecture: expensive model context is scarce resource, not intelligence. Strong interest in multi-agent cost optimization | **Open** (updated 2026-08-24) |
| 3 | **[#1602](https://github.com/anthropics/skills/pull/1602)** Fix evaluation serialization, metrics, encoding, stability | Resolves reliability bugs across skills repo: MCP result serialization, benchmark metrics, encoding issues, script stability | Addresses **Issue #1390** (4 comments): `mcp-builder` evaluation scores 0/N against real MCP servers due to `TextContent` serialization | **Open** (updated 2026-08-24) |
| 4 | **[#1367](https://github.com/anthropics/skills/pull/1367)** **self-audit**: Mechanical verification + 4-dimension reasoning gate | Audits AI output before delivery: Step 0 verifies claimed files exist; Steps 1–4 audit reasoning across correctness, completeness, safety, clarity | Proposes universal quality gate pipeline; referenced in **Issue #1385** (4 comments, 1 👍) for three-gate pipeline (Calibration → Adversarial Review → Delivery Verification) | **Open** (updated 2026-07-02) |
| 5 | **[#568](https://github.com/anthropics/skills/pull/568)** **servicenow**: ServiceNow platform skill | Broad platform assistant covering ITSM, ITOM, ITAM/SAM, FSM, HRSD, SPM, Vulnerability Response, SecOps, IntegrationHub | Enterprise demand for ServiceNow automation; long-lived PR (created Mar, updated Aug 2026) suggests active iteration | **Open** (updated 2026-08-12) |
| 6 | **[#514](https://github.com/anthropics/skills/pull/514)** **document-typography**: Typographic quality control | Prevents orphan/widow lines, numbering misalignment in AI-generated documents | Addresses universal pain point: users rarely ask for good typography but always need it; high practical value for document generation | **Open** (updated 2026-03-13) |
| 7 | **[#723](https://github.com/anthropics/skills/pull/723)** **testing-patterns**: Comprehensive testing stack | Testing Trophy philosophy, unit testing (AAA, naming), React component testing, integration/E2E, test data, CI/CD | Fills gap in testing guidance; community consistently requests test generation skills | **Open** (updated 2026-04-21) |
| 8 | **[#83](https://github.com/anthropics/skills/pull/83)** **skill-quality-analyzer** & **skill-security-analyzer** | Meta-skills for evaluating skills across 5 dimensions (structure, correctness, security, usability, maintainability) | Early meta-tool for skill governance; aligns with **Issue #492** (43 comments) on security/trust boundaries for community skills | **Open** (updated 2026-01-07) |

---

## 2. Community Demand Trends — From Issues

| Trend | Evidence (Issue # / Comments / 👍) | Description |
|-------|-----------------------------------|-------------|
| **Security & Trust Boundaries** | [#492](https://github.com/anthropics/skills/issues/492) (43 💬, 2 👍) | Community skills distributed under `anthropic/` namespace impersonate official skills — users grant elevated permissions to untrusted code. Highest-discussed issue. |
| **Organizational Skill Sharing** | [#228](https://github.com/anthropics/skills/issues/228) (16 💬, 8 👍) | No native org-wide skill library; users manually share `.skill` files via Slack/Teams. High 👍 indicates strong latent demand. |
| **Evaluation Pipeline Reliability** | [#556](https://github.com/anthropics/skills/issues/556) (12 💬, 7 👍), [#1390](https://github.com/anthropics/skills/issues/1390) (4 💬) | `run_eval.py` and `mcp-builder` evaluation fundamentally broken (0% trigger rate, 0/N scores). Blocks skill quality assurance. |
| **Multi-Agent / Cost Optimization** | [#1628](https://github.com/anthropics/skills/pull/1628), [#1385](https://github.com/anthropics/skills/issues/1385) (4 💬, 1 👍) | Hivemind (PR #1628) + Reasoning Quality Gate proposal show demand for orchestrating cheaper models under premium model supervision. |
| **Skill Discovery & Deduplication** | [#189](https://github.com/anthropics/skills/issues/189) (6 💬, 9 👍) | `document-skills` and `example-skills` plugins install identical content → duplicate skills in context window. |
| **Platform Integration (Bedrock, MCP)** | [#29](https://github.com/anthropics/skills/issues/29) (4 💬), [#16](https://github.com/anthropics/skills/issues/16) (4 💬) | Requests for AWS Bedrock compatibility and exposing Skills as MCP servers for interoperability. |
| **Enterprise Platform Skills** | [#568](https://github.com/anthropics/skills/pull/568) (ServiceNow), [#181](https://github.com/anthropics/skills/pull/181) (SAP) | Active PRs for major enterprise platforms (ServiceNow, SAP) indicate corporate adoption pushing for domain-specific skills. |

---

## 3. High-Potential Pending Skills — Active PRs Likely to Land Soon

| PR | Skill | Why High Potential |
|----|-------|-------------------|
| **[#1298](https://github.com/anthropics/skills/pull/1298)** | `skill-creator` eval fix | **Critical path**: Unblocks all skill quality optimization; references highest-technical-discussion issue (#556); multiple related Windows fixes (#1099, #1050) show sustained effort |
| **[#1602](https://github.com/anthropics/skills/pull/1602)** | Evaluation infrastructure fixes | **Cross-cutting**: Fixes MCP builder, serialization, metrics, encoding — enables reliable skill benchmarking across repo |
| **[#1628](https://github.com/anthropics/skills/pull/1628)** | **Hivemind** (multi-agent orchestration) | **Innovation**: Novel zero-cost delegation model; aligns with community's multi-agent trend; very recent (Aug 2026) with active updates |
| **[#1367](https://github.com/anthropics/skills/pull/1367)** | **self-audit** (quality gate) | **Meta-skill**: Universal verification pipeline; connects to Issue #1385 proposal; addresses growing demand for output reliability |
| **[#568](https://github.com/anthropics/skills/pull/568)** | **servicenow** (platform) | **Enterprise pull**: Broad coverage (ITSM, SecOps, ITAM, FSM…); 5-month active iteration suggests organizational backing |
| **[#514](https://github.com/anthropics/skills/pull/514)** | **document-typography** | **High utility/low complexity**: Solves universal document generation pain point; clear scope, no external deps |
| **[#723](https://github.com/anthropics/skills/pull/723)** | **testing-patterns** | **Developer demand**: Comprehensive testing guidance; fills documented gap; aligns with "test generation" trend |
| **[#509](https://github.com/anthropics/skills/pull/509)** | `CONTRIBUTING.md` | **Governance**: Addresses community health gap (Issue #452); repo scores 25% on GitHub health metrics; foundational for scaling contributions |

---

## 4. Skills Ecosystem Insight — One-Sentence Summary

> **The community's most concentrated demand is for trustworthy, evaluatable, and shareable skills — specifically: fixing the broken evaluation pipeline that prevents quality assurance, establishing security boundaries for community-contributed skills, and enabling organizational skill distribution — while simultaneously expanding into enterprise platform automation (ServiceNow, SAP) and multi-agent cost-optimization architectures.**

---

# Claude Code Community Digest — 2026-08-26

---

## 1. Today's Highlights

Two patch releases shipped in 24 hours: **v2.1.246** adds an Auto mode tab to `/permissions` and warns on risky Bash wildcard rules, while **v2.1.245** fixes a Linux startup crash on glibc 2.44 (Arch, Fedora Rawhide, CachyOS). The issue tracker remains dominated by Windows desktop instability (GPU crashes, MSIX update corruption, always-on-top window), persistent cyber-safeguard blocks for CVP-approved orgs, and model behavior regressions around scope overrun and rule enforcement.

---

## 2. Releases

### v2.1.246
| Change | Impact |
|--------|--------|
| **Auto mode tab in `/permissions`** | View/edit classifier rules that auto-approve tool calls |
| **Startup warning for `Bash(git * main)`-style wildcards** | Prevents accidental over-matching when options are inserted before subcommands |
| *Additional changes truncated in feed* | |

### v2.1.245
| Fix | Platforms Affected |
|-----|-------------------|
| Startup crash on glibc 2.44 | Arch Linux, CachyOS, Fedora Rawhide |

> **Action**: Linux users on bleeding-edge distros should upgrade immediately. All users benefit from the permissions UX improvements.

---

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#84352](https://github.com/anthropics/claude-code/issues/84352) | **CVP-approved orgs still blocked by cyber safeguards** | Verified organizations losing access despite prior approval; portal shows "Under review" | 156 comments, 24 👍 — highest engagement |
| [#80444](https://github.com/anthropics/claude-code/issues/80444) | **Windows Desktop: fatal GPU crash in Browser tab (0x060C201E)** | MSIX package becomes unlaunchable until Repair; affects Electron 42/Chrome 148 | 56 comments, 9 👍 — blocks Windows power users |
| [#86142](https://github.com/anthropics/claude-code/issues/86142) | **MCP servers with draft-07 `outputSchema` rejected client-side** | Breaks MCP ecosystem adoption; "unsupported dialect" error before dispatch | 29 comments, 12 👍 — **CLOSED** (fix likely in recent release) |
| [#85891](https://github.com/anthropics/claude-code/issues/85891) | **Windows Desktop: window stays always-on-top, no disable setting** | UX regression; counterpart to macOS issue #66516 | 25 comments, 37 👍 — high user frustration |
| [#82049](https://github.com/anthropics/claude-code/issues/82049) | **Magic-link emails delayed 2–5 minutes since mid-July** | Blocks login flow for Claude Code & claude.ai | 14 comments, 25 👍 — auth pipeline degradation |
| [#89370](https://github.com/anthropics/claude-code/issues/89370) | **`claude` and `install.sh` segfault on Linux** | New regression; installer itself crashes | 9 comments, 10 👍 — blocks fresh installs |
| [#82056](https://github.com/anthropics/claude-code/issues/82056) | **No visibility into auto-memory index load state** | Sessions can't tell if memory loaded whole/truncated/failed | 34 comments, 1 👍 — debugging blind spot |
| [#85901](https://github.com/anthropics/claude-code/issues/85901) | **MSIX missing `CodeIntegrity.cat`; `vk_swiftshader.dll` blocked** | Code Integrity destroys AppX container (0x3CFC); data loss risk | 11 comments, 1 👍 — **CLOSED** (packaging fix) |
| [#89579](https://github.com/anthropics/claude-code/issues/89579) | **Persistent scope overrun: agent builds unrequested artifacts** | Model ignores "delegate don't build" constraints; verifies own drift | 2 comments, 0 👍 — core model behavior regression |
| [#89040](https://github.com/anthropics/claude-code/issues/89040) | **`/compact` silently fails on large conversations** | Summary written but no `compact_boundary`; context unchanged, no error | 2 comments, 0 👍 — silent data integrity issue |

---

## 4. Key PR Progress

| PR | Status | Summary |
|----|--------|---------|
| [#89404](https://github.com/anthropics/claude-code/pull/89404) | OPEN | **validate-agent.sh**: Fix `set -e` arithmetic false-positives (`((warn++))` aborts), stop false-flagging valid agents. Addresses #83803. |

> Only 1 PR updated in 24h — release cadence appears driven by internal branches.

---

## 5. Feature Request Trends (from Issues)

| Theme | Representative Issues | Signal |
|-------|----------------------|--------|
| **Prompt-topic triggers for `.claude/rules/`** | [#87804](https://github.com/anthropics/claude-code/issues/87804) | Rules scoped to file paths only; no semantic/subject trigger |
| **Auto-memory observability** | [#82056](https://github.com/anthropics/claude-code/issues/82056) | Need in-session API to inspect load state (whole/truncated/failed) |
| **Cross-session messaging on Windows** | [#89658](https://github.com/anthropics/claude-code/issues/89658) | Pipe discovery misses `\\.\pipe\LOCAL\` used by MSIX app |
| **Project-scoped plugin portability** | [#89683](https://github.com/anthropics/claude-code/issues/89683) | Team clones don't inherit project-scoped plugin installs |
| **Model constraint enforcement** | [#89244](https://github.com/anthropics/claude-code/issues/89244), [#89464](https://github.com/anthropics/claude-code/issues/89464) | "Stop" rules decay; "expand" rules persist — asymmetric binding |

---

## 6. Developer Pain Points (Recurring Frustrations)

| Area | Pattern | Evidence |
|------|---------|----------|
| **Windows Desktop (MSIX) reliability** | GPU crashes, stealth updates orphaning processes, Code Integrity failures, package servicing killing background agents, AppX locks from CoworkVMService | #80444, #85901, #82277, #73694, #89680, #89658 |
| **Auth & org access** | Magic-link delays (2–5 min), CVP approvals not honored, cyber safeguard re-blocking | #82049, #84352 |
| **Model behavior regressions** | Scope overrun (builds unrequested artifacts), rule decay (prohibitions don't fire on incremental drift), asymmetric constraint binding | #89579, #89464, #89244 |
| **Memory & context management** | `/compact` silent failure, auto-memory load state invisible, ugrep wrapper OOM on bounded repeats | #89040, #82056, #78027 |
| **MCP ecosystem friction** | draft-07 `outputSchema` rejected client-side (fixed), external MCP servers not loaded in spawned tasks | #86142, #67432 |
| **Installer/startup fragility** | Linux segfaults on glibc 2.44 (fixed in 2.1.245), new segfaults on `claude`/`install.sh`, WSL installer writes binary without exec bit | #89370, #77753, v2.1.245 |

---

*Generated from `anthropics/claude-code` GitHub data (releases, issues, PRs updated 2026-08-25 → 2026-08-26).*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-26

---

## 1. Today's Highlights

Three alpha releases (v0.150.0-alpha.9–11) shipped in rapid succession, signaling active iteration on the Rust codebase. The issue tracker is dominated by **Windows Desktop stability regressions** in the 26.820.x series—multiple reports of app startup failures, MCP transport errors, and CLI binary relocation issues. Meanwhile, the community continues pressing for permanent removal of the 5-hour usage limit (140+ 👍 on #34035), and a standalone Windows installer remains the top-voted feature request (187 👍 on #13993).

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| `rust-v0.150.0-alpha.9` | Alpha | Incremental alpha in the 0.150 series |
| `rust-v0.150.0-alpha.10` | Alpha | Follow-up alpha release |
| `rust-v0.150.0-alpha.11` | Alpha | Latest alpha; three cuts in 24h suggest active stabilization |

> **No stable CLI or Desktop release in the last 24h.** The alpha cadence implies a stable 0.150.0 may land soon.

---

## 3. Hot Issues (Top 10 by Community Impact)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#13993](https://github.com/openai/codex/issues/13993) | **Standalone Windows installer (`codex-setup.exe`)** | Enterprise/offline users blocked by Microsoft Store restrictions; 187 👍, 81 comments | 🔥 Highest-voted open feature |
| [#39162](https://github.com/openai/codex/issues/39162) | **macOS 26.814.41407: opening existing conversation invalidates ChatGPT auth** | Regression breaking session continuity; 32 👍, 57 comments | 🔴 Critical auth regression |
| [#33776](https://github.com/openai/codex/issues/33776) | **Windows: `ChatGPT.exe` spawns hundreds of `taskkill.exe`/`conhost.exe` processes** | Resource leak causing WMI storms & DWM degradation; 27 👍, 34 comments | 🔴 Severe Windows perf bug |
| [#34035](https://github.com/openai/codex/issues/34035) | **Make temporary 5-hour usage limit removal permanent** | Plus/Pro/Business users want limit lifted permanently; 140 👍, 14 comments | 📈 Top policy request |
| [#40715](https://github.com/openai/codex/issues/40715) | **Windows 26.820.60940: "invalid transport in mcp_servers.codex_app"** | MCP broken on stable; beta works; 16 👍, 23 comments | 🔴 Regression in latest stable |
| [#22423](https://github.com/openai/codex/issues/22423) | **Unable to locate Codex CLI binary (`CODEX_CLI_PATH`)** | App fails to launch on Windows/WSL; 29 comments | 🔴 Startup blocker |
| [#40700](https://github.com/openai/codex/issues/40700) | **Windows 26.820: bundled `codex.exe` relocation from WindowsApps fails** | App cannot start post-update; 7 comments | 🔴 MSIX packaging regression |
| [#39841](https://github.com/openai/codex/issues/39841) | **Workspace terminal fails with "setup refresh had errors"** | Terminal unusable on Windows 26.818.31338; 13 comments | 🔴 Core workflow broken |
| [#39144](https://github.com/openai/codex/issues/39144) | **GPT-5.6 Sol stuck at 272K context; Terra/Luna get 872K** | Model context window inconsistency post-rollout; 6 👍, 13 comments | ⚠️ Model config drift |
| [#32139](https://github.com/openai/codex/issues/32139) | **Remove manual "Keep Waiting" approval (auto-accept)** | UX friction for long-running tasks; 14 👍, 6 comments | 📈 CLI/TUI quality-of-life |

---

## 4. Key PR Progress (Top 10 by Significance)

| # | PR | Area | Summary |
|---|----|------|---------|
| [#40751](https://github.com/openai/codex/pull/40751) | **Preserve transcript overlay state across updates** | TUI/Rendering | Detaches/restores live tail during history rebuilds; keeps composer pinned to bottom |
| [#40748](https://github.com/openai/codex/pull/40748) | **Fix MCP denial assertion for structured output** | MCP/Tools | Reads denial from text content item in restricted MCP tool output |
| [#40742](https://github.com/openai/codex/pull/40742) | **Prepare isolated Guardian reviewer sessions** | Safety/Guardian | Adds policy prompt, output contract, low-reasoning review model fallback |
| [#40739](https://github.com/openai/codex/pull/40739) | **Enterprise IdP identity resolution for MCP OAuth** | Auth/Enterprise | Resolves stored IdP sessions against auth metadata; binds OIDC claims |
| [#40737](https://github.com/openai/codex/pull/40737) | **Preserve MCP tool output as content items** | MCP/Tools | Converts unstructured results to typed function-call output; preserves media/encrypted |
| [#40736](https://github.com/openai/codex/pull/40736) | **Run exec-server compat tests under Bazel** | CI/Testing | Adds Bazel rule for Noise relay suite; covers current, 0.149.1, min supported |
| [#40728](https://github.com/openai/codex/pull/40728) | **Honor attachment-owned permissions for MCP servers** | MCP/Sandbox | Captures per-MCP permission profile instead of inheriting thread-wide sandbox |
| [#40726](https://github.com/openai/codex/pull/40726) | **Telemetry for SQLite log persistence** | Observability | Batch size, write latency, failures, dropped entries; exporter isolation |
| [#40724](https://github.com/openai/codex/pull/40724) | **Plugin-attributed skill telemetry** | Telemetry/Plugins | Adds `plugin_id`, `model_slug`, `reasoning_effort` to `codex.skill.injected` |
| [#40718](https://github.com/openai/codex/pull/40718) | **Bazel repos for pinned Codex releases** | Build/Release | Module extension for checksum-pinned Linux x86-64 packages; GitHub Releases fallback |

> **Pattern:** Heavy investment in MCP hardening, enterprise auth, Bazel-based release automation, and observability—core infrastructure work ahead of a likely 0.150 stable.

---

## 5. Feature Request Trends

| Trend | Representative Issues | Signal |
|-------|----------------------|--------|
| **Windows distribution parity** | [#13993](https://github.com/openai/codex/issues/13993) (standalone installer), [#38696](https://github.com/openai/codex/issues/38696) (EFS/MSIX relocation) | 187 👍 + multiple packaging bugs |
| **Usage limit liberalization** | [#34035](https://github.com/openai/codex/issues/34035) (permanent 5-hr removal), [#40741](https://github.com/openai/codex/issues/40741) (limit = ½ weekly), [#31818](https://github.com/openai/codex/issues/31818) (inconsistencies) | 140+ 👍 on lead issue |
| **CLI/TUI ergonomics** | [#32139](https://github.com/openai/codex/issues/32139) (auto-accept wait), [#39819](https://github.com/openai/codex/issues/39819) (tool call visibility option), [#28798](https://github.com/openai/codex/pull/28798) (plugin install metadata) | Steady stream of UX polish requests |
| **Hooks & extensibility** | [#23411](https://github.com/openai/codex/issues/23411) (PreToolUse for `exec`), [#21615](https://github.com/openai/codex/issues/21615) (IDE wrapper trust for hooks) | Platform integration depth |
| **Remote/SSH reliability** | [#20930](https://github.com/openai/codex/issues/20930) (notifications), [#19198](https://github.com/openai/codex/issues/19198) (custom PATH), [#39855](https://github.com/openai/codex/issues/39855) (trust verification) | Remote dev workflow gaps |

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Windows Desktop 26.820.x is regressed** | #40715 (MCP transport), #40700 (binary relocation), #40752 (EINVAL on `.cmd` wrapper), #39443 (chrome.dll crash), #33776 (process leak) | Multiple startup/launch blockers; users pinned to beta or older versions |
| **MCP integration fragility** | #40715 (transport), #35485 (node_repl leak), #40748 (denial assertion), #40737 (output preservation), #40728 (permissions) | Core agent-toolchain loop unreliable on Windows |
| **Auth/session instability** | #39162 (macOS conversation open → auth loss), #22423 (CLI binary not found), #39855 (remote trust verification) | Breaks trust in "pick up where you left off" |
| **Resource/process leaks on Windows** | #33776 (taskkill/conhost storm), #35485 (node_repl per-thread leak) | Degrades host OS; requires app restart |
| **Usage limit opacity** | #34035, #40741, #31818 — users confused by 5-hr vs weekly vs temporary removal | Planning uncertainty for paid tiers |
| **Remote/SSH as second-class** | #20930 (no notifications), #19198 (custom PATH), #40459 (wrong project name), #40750 (internal IDs) | Remote devs hit paper cuts daily |

---

## Quick Links

- **Releases**: [rust-v0.150.0-alpha.9](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.9) · [alpha.10](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.10) · [alpha.11](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.11)
- **Top Issue**: [Standalone Windows installer #13993](https://github.com/openai/codex/issues/13993) (187 👍)
- **Top Regression**: [Windows 26.820 MCP failure #40715](https://github.com/openai/codex/issues/40715)
- **Policy Request**: [Permanent 5-hr limit removal #34035](https://github.com/openai/codex/issues/34035) (140 👍)

---

*Digest generated from github.com/openai/codex data as of 2026-08-26. All links point to live GitHub items.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-26

## 1. Today's Highlights
The project shipped **v0.59.0-nightly.20260826** with fixes for symlink handling in ignore paths, Cloud Workstations OAuth redirects, and IDE connection directory mismatches. A major security push landed: PRs hardening MCP OAuth discovery against SSRF (#29081), enforcing A2A server authentication (#28699), and removing hardcoded credentials (#29067). The dependency graph was refreshed with 76 npm updates (#28984), and the VS Code companion received stability fixes for MCP stream handling (#29088, #28789).

## 2. Releases
**v0.59.0-nightly.20260826.g64b5b79a6** (2026-08-26)  
- Changelog for v0.58.0-preview.0  
- `fix(core)`: consistent symlink evaluation in ignore path handling ([#28915](https://github.com/google-gemini/gemini-cli/pull/28915))  
- `refactor(core)`: internal cleanup  

**v0.58.0-preview.0** (2026-08-25)  
- Changelog for v0.57.0-preview.0  
- `fix(core)`: symlink handling in ignore paths  

**v0.57.0** (2026-08-25)  
- `fix(core)`: dynamic Cloud Workstations proxy redirect URI for OAuth ([#28688](https://github.com/google-gemini/gemini-cli/pull/28688))  
- `fix(core)`: resolved swallowed directory mismatch in IDE connections ([#28688](https://github.com/google-gemini/gemini-cli/pull/28688))

## 3. Hot Issues
| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) Subagent recovery after MAX_TURNS reported as GOAL success | Masks real failures; subagents claim success despite hitting turn limits | 13 comments, 👍 2, P1, needs retest |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) Generalist agent hangs indefinitely | Blocks core workflow; users must disable sub-agents to proceed | 8 comments, 👍 8, P1 |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) Leverage model's bash affinity via Zero-Dependency OS Sandboxing | Strategic: aligns tooling with model's native POSIX strengths | 8 comments, 👍 1, P2, large effort |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) Assess AST-aware file reads/search/mapping | Could reduce token waste & turn count via precise code navigation | 7 comments, 👍 1, P2 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) Gemini doesn't use skills/sub-agents autonomously | Undermines extensibility; requires explicit prompting | 6 comments, P2 |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) Auto Memory retries low-signal sessions indefinitely | Wastes compute & pollutes memory with noise | 5 comments, P2 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) Shell execution stuck at "Waiting input" after completion | Frequent UX breakage; simple commands hang the agent | 4 comments, 👍 3, P1 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) Browser subagent fails on Wayland | Linux/Wayland users blocked from browser automation | 4 comments, 👍 1, P1 |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) 400 error with >128 tools | Tool explosion breaks agent; needs smarter scoping | 3 comments, P2 |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) Browser Agent ignores `settings.json` overrides (e.g., `maxTurns`) | Configuration drift; settings silently discarded | 3 comments, P2 |

## 4. Key PR Progress
| PR | Description | Status |
|----|-------------|--------|
| [#28955](https://github.com/google-gemini/gemini-cli/pull/28955) Update deps, add MCP config, integrate ECC bundles | Large dependency refresh + MCP/ECC integration | Open, P1, XL |
| [#29089](https://github.com/google-gemini/gemini-cli/pull/29089) Forward `abortSignal` to `retryWithBackoff` in `BaseLlmClient` | Fixes cancellation propagation for summary/compression/classifier calls | Open, P2 |
| [#28863](https://github.com/google-gemini/gemini-cli/pull/28863) Consent prompts for extension env changes; sanitize runtime-altering vars | Security hardening for MCP server env injection | Open |
| [#29088](https://github.com/google-gemini/gemini-cli/pull/29088) VS Code companion: resolve `stop()` with open MCP stream | Fixes extension deactivation hang | Open |
| [#29087](https://github.com/google-gemini/gemini-cli/pull/29087) Prevent concurrent extension install races via `proper-lockfile` | Eliminates interleaved file copies/metadata corruption | Open |
| [#28789](https://github.com/google-gemini/gemini-cli/pull/28789) VS Code companion: fix `stop()` hang & keep-alive threshold | **Closed** — resolves #28785 | Closed |
| [#28984](https://github.com/google-gemini/gemini-cli/pull/28984) Bump 76 npm dependencies (incl. `@modelcontextprotocol/sdk`, `simple-git`) | Routine maintenance; MCP SDK update notable | Open, XL |
| [#28983](https://github.com/google-gemini/gemini-cli/pull/28983) Detect mixed line endings instead of flagging CRLF on single match | Fixes false-positive CRLF detection | Open, P2 |
| [#29081](https://github.com/google-gemini/gemini-cli/pull/29081) Prevent SSRF in MCP OAuth metadata discovery & auth | Enforces HTTPS, loopback-only HTTP, origin validation (RFC 9728/8414) | Open, Security |
| [#28699](https://github.com/google-gemini/gemini-cli/pull/28699) A2A server: enforce auth & stop checkpoint path traversal | **Closed** — critical auth bypass fix | Closed |

## 5. Feature Request Trends
1. **Subagent Observability & Control** — Trajectory sharing via `/chat share` (#22598), bug reports including subagent context (#21763), settings propagation (#22267).
2. **AST-Aware Tooling** — Precise method-bound reads, codebase mapping, reduced token noise (#22745, #22746, #19561).
3. **Autonomous Skill/Subagent Adoption** — Model should invoke custom skills & sub-agents without explicit prompting (#21968, #20195).
4. **Memory System Reliability** — Deterministic redaction, quarantine invalid patches, stop retrying low-signal sessions (#26522, #26523, #26525).
5. **Browser Agent Hardening** — Wayland support (#21983), session takeover/lock recovery (#22232), config respect.
6. **Native Bash Affinity** — Zero-dependency sandboxing, post-execution intent routing (#19873).
7. **Windows Developer Experience** — Longpaths setup docs (#28926), skip env-dependent tests (#28832).

## 6. Developer Pain Points
- **Agent Hangs & False Successes** — Generalist agent stalls (#21409), subagents report `GOAL` success after `MAX_TURNS` (#22323), shell commands show "Waiting input" post-completion (#25166).
- **Configuration Ignored** — Browser agent drops `settings.json` overrides (#22267), symlinked agent files not recognized (#20079).
- **Tooling Friction** — 400 errors beyond 128 tools (#24246), destructive git commands (`reset --hard`, force push) (#22672), tmp scripts scattered randomly (#23571), interactive prompts block Vite init (#22465).
- **Memory Pollution** — Auto Memory re-processes low-signal sessions endlessly (#26522), invalid patches silently skipped but still summarized (#26523), secrets sent to model before redaction (#26525).
- **Platform Gaps** — Wayland browser failure (#21983), Windows `MAX_PATH` breaks clones (#28926), terminal resize flicker/perf (#21924).
- **Security Gaps** — SSRF via MCP OAuth discovery (#29081), unauthenticated A2A endpoints (#28699), hardcoded credentials in agent cards (#29067).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-26

---

## 1. Today's Highlights
Two prereleases shipped in rapid succession: **v1.0.81-10** introduces a universal **plugins dashboard** (`/plugin`, `/mcp`, `/skills`) and makes `x` the delete key across all UIs; **v1.0.81-11** fixes a critical regression where enterprise-blocked MCP servers spun indefinitely instead of showing as blocked. Meanwhile, the community’s top ask—**vim/vi input mode** (#13, 74 👍)—remains open after 11 months.

---

## 2. Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **[v1.0.81-11](https://github.com/github/copilot-cli/releases/tag/v1.0.81-11)** | Patch | **Fixed:** Enterprise-blocked MCP servers now display as “blocked” in `/mcp` instead of hanging in “pending” state. |
| **[v1.0.81-10](https://github.com/github/copilot-cli/releases/tag/v1.0.81-10)** | Feature | **New:** Plugins dashboard enabled by default (`/plugin`, `/mcp`, `/skills`); opt out with `PLUGINS_DASHBOARD=false`. **Improved:** `x` is now the delete key everywhere (sandbox config, settings, MCP, sessions dialog, diff view). |

> **Note:** Both are prereleases. `copilot update prerelease` currently strands users on `1.0.81-9` due to a GitHub release-sorting bug ([#4605](https://github.com/github/copilot-cli/issues/4605)).

---

## 3. Hot Issues (Top 10 by Community Signal)

| Issue | Area | Why It Matters | Community Reaction |
|-------|------|----------------|-------------------|
| **[#13](https://github.com/github/copilot-cli/issues/13)** Vi/vim input mode | Editor UX | Modal editing is the #1 requested UX improvement; 74 👍, open since Sep 2025. | 8 comments, 74 👍 — strongest signal in repo. |
| **[#3709](https://github.com/github/copilot-cli/issues/3709)** `/model` picker should include BYOK/local models | Models, BYOK | Blocks users who run local/OpenRouter/Ollama models from switching in-session. | 6 comments, 28 👍. |
| **[#4535](https://github.com/github/copilot-cli/issues/4535)** `store_memory` fails in 1.0.81 prereleases: “Instance id is required” | Context/Memory | Regression in prereleases breaks persistent memory writes. | 6 comments, 0 👍 (recent, high severity). |
| **[#4542](https://github.com/github/copilot-cli/issues/4542)** Workspace `.mcp.json` detected but not connected in agent sessions | MCP, Config | False positive: CLI says servers are “Enabled” but they’re unavailable at runtime. | 2 comments, 1 👍. |
| **[#4035](https://github.com/github/copilot-cli/issues/4035)** Voice installer hits 401 on private Azure Artifacts feed | Voice, Install | Public NuGet package exists; installer shouldn’t require Azure DevOps auth. | 4 comments. |
| **[#4272](https://github.com/github/copilot-cli/issues/4272)** New models greyed out: “disabled by organization policy” | Models, Enterprise | Admins see no setting to enable; blocks adoption of newer models. | 1 comment, 3 👍. |
| **[#4560](https://github.com/github/copilot-cli/issues/4560)** Model `auto` forces `reasoningEffort: null`, rejects overrides | Models, Reasoning | Silent degradation: auto mode disables reasoning entirely. | 1 comment. |
| **[#4604](https://github.com/github/copilot-cli/issues/4604)** User-configured `api.githubcopilot.com/mcp/` loses injected token on 1.0.81-10 | MCP, Auth | Breaking change: custom GitHub MCP servers get 401; OAuth rescue impossible (no dynamic client registration). | 0 comments (filed today, high impact). |
| **[#4605](https://github.com/github/copilot-cli/issues/4605)** `latest-prerelease` lookup stranded on 1.0.81-9 due to identical `created_at` | Release Tooling | Users cannot auto-update to -10/-11; manual install required. | 0 comments (filed today, affects all prerelease users). |
| **[#4593](https://github.com/github/copilot-cli/issues/4593)** Archiving worktree session fails on Windows (os error 32) | Sessions, Windows | Process locking prevents cleanup; session process tree not stopped before worktree removal. | 1 comment. |

---

## 4. Key PR Progress

| PR | Status | Summary |
|----|--------|---------|
| **[#4607](https://github.com/github/copilot-cli/pull/4607)** Prepare public prerelease v1.0.81-11 | **Closed/Merged** | Bumps commit timestamp for v1.0.81-11 publish. No code changes; release automation. |

> Only one PR updated in the last 24h — the release-cut for v1.0.81-11. Feature work appears to be landing on internal branches before public PRs.

---

## 5. Feature Request Trends (Distilled from All Issues)

| Theme | Representative Issues | Signal |
|-------|----------------------|--------|
| **Modal editor keybindings** | [#13](https://github.com/github/copilot-cli/issues/13) | 74 👍 — single highest-voted issue. |
| **Model flexibility & BYOK parity** | [#3709](https://github.com/github/copilot-cli/issues/3709), [#4272](https://github.com/github/copilot-cli/issues/4272), [#4560](https://github.com/github/copilot-cli/issues/4560) | 30+ 👍 combined; users want `/model` to list local/BYOK models and control reasoning effort. |
| **MCP usability & auth** | [#4542](https://github.com/github/copilot-cli/issues/4542), [#3380](https://github.com/github/copilot-cli/issues/3380), [#4604](https://github.com/github/copilot-cli/issues/4604), [#4606](https://github.com/github/copilot-cli/issues/4606) | 4 active issues: workspace MCP detection ≠ connection, no bulk disable, token injection broken, Google OAuth issuer mismatch. |
| **Session portability & sharing** | [#1153](https://github.com/github/copilot-cli/issues/1153), [#3537](https://github.com/github/copilot-cli/issues/3537), [#4593](https://github.com/github/copilot-cli/issues/4593) | Export to repo, cross-machine sync, Windows worktree cleanup. |
| **Agent tooling ergonomics** | [#3323](https://github.com/github/copilot-cli/issues/3323) (`ask_user` escape hatch), [#4590](https://github.com/github/copilot-cli/issues/4590) (SDK hook processor disposal) | SDK/extension authors hit lifecycle bugs. |

---

## 6. Developer Pain Points (Recurring Frustrations)

1. **No vim mode after 11+ months** — #13 is the repo’s most-upvoted issue; modal editors are standard for CLI power users.
2. **Prerelease update channel broken** — `copilot update prerelease` stuck on 1.0.81-9 ([#4605](https://github.com/github/copilot-cli/issues/4605)); users must manually install.
3. **MCP “works in list, fails at runtime”** — Workspace `.mcp.json` shows `Enabled` but agents can’t reach them ([#4542](https://github.com/github/copilot-cli/issues/4542)); custom GitHub MCP token injection silently dropped ([#4604](https://github.com/github/copilot-cli/issues/4604)).
4. **Model picker excludes local/BYOK** — `/model` only shows GitHub-hosted models; `COPILOT_MODEL` pins session ([#3709](https://github.com/github/copilot-cli/issues/3709)).
5. **Enterprise policy opacity** — Models greyed out with “ask your admin” link that leads nowhere ([#4272](https://github.com/github/copilot-cli/issues/4272)).
6. **Windows session cleanup failures** — Worktree archiving fails with “file in use” (os error 32) because process tree isn’t terminated first ([#4593](https://github.com/github/copilot-cli/issues/4593)).
7. **Memory tooling regression** — `store_memory` throws “Instance id is required” in all 1.0.81 prereleases ([#4535](https://github.com/github/copilot-cli/issues/4535)).
8. **Voice install broken by private feed** — Installer pulls from Azure Artifacts instead of public NuGet ([#4035](https://github.com/github/copilot-cli/issues/4035)).

---

*Generated from github.com/github/copilot-cli data as of 2026-08-26. Links point to live issues/PRs.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-26

## Today's Highlights
No new releases or pull requests in the last 24 hours. Two critical issues surfaced: a **silent data-loss bug** where `Edit`/`Write` tools report success but never persist changes to disk (v0.38.0, macOS), and a **context compaction regression** causing Kimi to resurrect already-completed-and-deleted tasks on Windows. Both are actively discussed and block productive workflows.

## Releases
*No new releases published in the last 24 hours.*

## Hot Issues
| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#2617](https://github.com/MoonshotAI/kimi-cli/issues/2617) | **Edit/Write tools report success but never write to disk (0.38.0, macOS)** | Core file-mutation primitives are broken—developers cannot trust any write operation. 100% reproducible since ~17:00 UTC 2026-08-25. | 2 comments, 0 👍; author provided detailed env (`~/.kimi-code/...`) and repro steps. High urgency—blocks all coding tasks. |
| [#2523](https://github.com/MoonshotAI/kimi-cli/issues/2523) | **Context compaction bug — Kimi reopens an already completed and deleted task** | Task lifecycle management is corrupted; completed work reappears, polluting context and wasting tokens. Affects Windows (NT 10.0.26200) on v0.6.3. | 1 comment, 0 👍; includes PDF screen recording. Indicates a deeper state-management flaw in compaction logic. |

## Key PR Progress
*No pull requests updated in the last 24 hours.*

## Feature Request Trends
*Insufficient new issue data in the last 24h to derive trends. Historical patterns (not in this window) typically cluster around:*  
- **Reliable file-system primitives** (atomic writes, better error surfacing)  
- **Deterministic context/compaction control** (opt-out, snapshotting)  
- **Cross-platform parity** (Windows/macOS/Linux feature parity)

## Developer Pain Points
1. **Silent write failures** — Tools claim success while doing nothing; no error, no log, no fallback.  
2. **Uncontrollable context compaction** — Completed tasks resurrect, bloating context and breaking mental models.  
3. **Platform-specific regressions** — macOS write path and Windows compaction path both broke in recent versions, suggesting insufficient CI coverage per OS.  

---

*Data window: 2026-08-25 00:00 – 2026-08-26 00:00 UTC. Source: github.com/MoonshotAI/kimi-cli*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-26

---

## 1. Today's Highlights

OpenCode v1.18.23 shipped with critical Cloudflare AI Gateway fixes for third-party provider routing and Anthropic model ID conversion. The community is actively addressing v2 beta regressions: Zen Go gateway returning 500s for non-DeepSeek models on `/v1/responses`, model resolution failures with slash-containing IDs (NVIDIA NIM), and session shell output bypassing tool limits. Meanwhile, TUI improvements land rapidly — persistent session terminals, pinned-session race-condition fixes, and plugin update controls are all in review.

---

## 2. Releases

### v1.18.23 — Cloudflare AI Gateway Fixes
- **Fixed** Cloudflare AI Gateway routing for third-party providers so non-Workers models work through the gateway's REST API ([@superhighfives](https://github.com/anomalyco/opencode/releases/tag/v1.18.23))
- **Fixed** Anthropic models through Cloudflare AI Gateway by converting dotted model IDs (e.g., `claude-haiku-4.5`) to dashed slugs Anthropic expects

---

## 3. Hot Issues (Top 10 by Impact & Activity)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#33618](https://github.com/anomalyco/opencode/issues/33618) | **Qwen 3.7 Plus/Max via OpenRouter: empty tool call names** | Newer Qwen models sporadically emit `✗ "" failed` tool calls, causing retries and aborted sessions. Blocks adoption of latest Qwen via OpenRouter. | 10 comments, 4 👍 — active investigation |
| [#44910](https://github.com/anomalyco/opencode/issues/44910) | **Zen Go `/v1/responses` 500 for all non-DeepSeek models** | Go gateway completely broken for mimo/glm/ox-alpha since ~Aug 25; `/v1/chat/completions` works. Production impact for Zen users. | 2 comments, urgent regression |
| [#45104](https://github.com/anomalyco/opencode/issues/45104) | **ox-alpha-free still 500 on `/v1/responses` despite merged fixes** | Codex (Go plan) fully down; fixes merged but not deployed. Confirms gateway deployment lag. | 1 comment, confirms #44910 severity |
| [#44799](https://github.com/anomalyco/opencode/issues/44799) | **Model resolution fails when model ID contains "/"** | NVIDIA NIM models (e.g., `nvidia/nemotron-3-ultra`) unusable — registry key repeats provider prefix. PR [#45114](https://github.com/anomalyco/opencode/pull/45114) fixes. | 2 comments, blocks NVIDIA provider |
| [#45099](https://github.com/anomalyco/opencode/issues/45099) | **v2: session shell output bypasses 50 KiB tool limit** | Direct shell commands inject ~1 MiB into next request, exceeding context window and causing `provider.unknown` failures. Core v2 regression. | 0 comments, high-severity v2 bug |
| [#44852](https://github.com/anomalyco/opencode/issues/44852) | **Failed parallel tool call leaves dangling `tool_call_id`** | Failed MCP tool (e.g., 403) omits tool-result message; subsequent requests fail with 400. Session corruption risk. | 1 comment, data integrity issue |
| [#14524](https://github.com/anomalyco/opencode/issues/14524) | **Display model cost in model picker** | High-demand UX feature — users need cost visibility when selecting models. PR adds cost column to TUI picker. | 5 comments, 11 👍 — strong community demand |
| [#45113](https://github.com/anomalyco/opencode/issues/45113) | **v2 unconditionally sends `prompt_cache_key` to OpenAI-compatible providers** | Strict gateways reject unknown field with 400. `setCacheKey` option ignored. Breaks third-party relays. | 0 comments, v2 compatibility blocker |
| [#44736](https://github.com/anomalyco/opencode/issues/44736) | **Pinned sessions lost when multiple TUI instances write `session.json`** | Race condition: stale TUI overwrites pins from other instances. PR [#45117](https://github.com/anomalyco/opencode/pull/45117) fixes. | 1 comment, multi-instance data loss |
| [#17846](https://github.com/anomalyco/opencode/issues/17846) | **`--log-level DEBUG` fails to log after 10 log files** | Log rotation bug on macOS; debug logging silently breaks. Affects troubleshooting. | 6 comments, 2 👍 — long-standing annoyance |

---

## 4. Key PR Progress (Top 10 by Significance)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#45110](https://github.com/anomalyco/opencode/pull/45110) | **feat(core): support git plugin packages** | Feature | Enables `opencode2 plugin add` from Git repos (private/in-repo plugins). Uses Arborist's native Git support. Unblocks team plugin workflows. |
| [#44971](https://github.com/anomalyco/opencode/pull/44971) | **feat(tui): add persistent session terminals** | Feature | Single fixed session frame with persistent terminal pane on right. Manages terminal membership via session-scoped state — no recursive pane trees. Major UX upgrade. |
| [#45118](https://github.com/anomalyco/opencode/pull/45118) | **feat(core): support explicit plugin updates** | Feature | Plugins no longer auto-replace (preserves in-memory state). Adds version visibility, inspectable updates, safe activation. Complements #45119 (TUI controls). |
| [#45107](https://github.com/anomalyco/opencode/pull/45107) | **feat(core): add directory projects** | Feature | Non-Git directories become independent projects (not lumped into `global`). Enables natural project switching for worktrees/nested dirs. |
| [#45029](https://github.com/anomalyco/opencode/pull/45029) | **feat(tui): browse projects, directories, and worktrees** | Feature | Open dialog now surfaces Git worktrees, nested project dirs, non-Git locations with sessions. Reduces "open wrong project then navigate" friction. |
| [#45108](https://github.com/anomalyco/opencode/pull/45108) | **feat(ai): add native Groq and DeepInfra providers** | Feature | First-class providers backed by OpenAI Chat protocol. SDK identifiers resolve directly — no manual config needed. Expands provider ecosystem. |
| [#45114](https://github.com/anomalyco/opencode/pull/45114) | **fix(provider): resolve model IDs repeating provider prefix** | Bugfix | Fixes #44799. Strips duplicated provider segment from registry keys (e.g., `nvidia/nvidia/nemotron` → `nvidia/nemotron`). Unblocks NVIDIA NIM. |
| [#45117](https://github.com/anomalyco/opencode/pull/45117) | **fix(tui): stop stale instances from erasing pinned sessions** | Bugfix | Fixes #44736. Reads `session.json` at pin/unpin time instead of caching at startup. Adds file locking/merge logic. |
| [#45109](https://github.com/anomalyco/opencode/pull/45109) | **fix(core): unify model-visible shell output previews** | Bugfix | Single preview pipeline for agent tool calls, background completions, direct session shell. Applies same byte/line limits, tail selection, truncation markers. Fixes #45099 oversized output. |
| [#45120](https://github.com/anomalyco/opencode/pull/45120) | **fix(tool): simplify glob path parameter description** | Bugfix | Fixes #44489. Shortens `glob.path` description to prevent unstable tool-calling with Qwen3-Coder/llama.cpp. Reduces token bloat & confusion. |

---

## 5. Feature Request Trends

| Direction | Evidence | Priority Signal |
|-----------|----------|-----------------|
| **Model cost transparency** | #14524 (11 👍, PR adds cost column to picker) | High — users evaluate cost at selection time |
| **Plugin ecosystem maturity** | #45110 (Git plugins), #45118 (explicit updates), #45119 (TUI update controls) | High — multiple coordinated PRs, team workflow unblocking |
| **Multi-project/directory workflows** | #45107 (directory projects), #45029 (browse worktrees/nested dirs) | Medium-High — addresses "global project" pain point |
| **Provider expansion** | #45108 (Groq, DeepInfra), #44799 (NVIDIA NIM fix) | Medium — broadens model access beyond major labs |
| **Session/terminal persistence** | #44971 (persistent terminals), #44736 (pin sync), #45111 (Ctrl-C dismiss) | Medium — TUI power-user ergonomics |
| **Notification/visibility improvements** | #45124 (model needs input notification), #45112 (agent marquees) | Low-Medium — niche but thoughtful UX asks |

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Frequency | Representative Issues |
|------------|-----------|----------------------|
| **Zen Go gateway instability** | 3 issues in 24h | #44910 (500s), #45104 (ox-alpha down), #45101 (glm-5.2 400) — all `/v1/responses` endpoint |
| **v2 beta regressions** | 4+ issues | #45099 (shell output limit bypass), #45113 (forced `prompt_cache_key`), #44272 (unnecessary runtime loads), #44790 (MCP OAuth metadata) |
| **Model ID / provider resolution fragility** | 2 issues | #44799 (slash in ID), #33618 (Qwen tool call parsing) — both block specific model families |
| **Session state corruption in multi-instance TUI** | 1 issue, 1 PR | #44736 (pin loss), #45117 (fix) — race condition on `session.json` |
| **Tool call / protocol edge cases** | 3 issues | #44852 (dangling `tool_call_id`), #44489 (param description triggers bad calls), #45099 (shell output bypass) |
| **Debugging observability gaps** | 1 long-standing | #17846 (log rotation breaks `--log-level DEBUG`) — 5 months open |
| **Configuration discoverability** | 1 issue | #44812 (cli.json missing JSON schema) — closed but highlights schema gap |

---

*Digest generated from GitHub data as of 2026-08-26. Links point to live issues/PRs on [anomalyco/opencode](https://github.com/anomalyco/opencode).*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-26

## 1. Today's Highlights
A flurry of **critical bug fixes** landed today addressing startup failures after updates, xAI/Grok compaction crashes, and Bedrock OpenAI model image handling. The Windows community continues a high-engagement discussion (#7547, 49 comments) on unifying Pi’s fragmented Windows story, while TUI streaming corruption (#8584) and AgentSession lifecycle bugs (#5886) remain top pain points for daily users.

## 2. Releases
*No new releases in the last 24 hours.*

## 3. Hot Issues (10 Noteworthy)

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| **[#7547](https://github.com/earendil-works/pi/issues/7547)** Windows strategy: “gazzilion developers on Windows… too many ways Pi can be run” | Defines platform priority; outcome drives docs, packaging, and CI investment. | 49 comments, 2 👍 — longest-running open thread. |
| **[#8584](https://github.com/earendil-works/pi/issues/8584)** TUI row corruption after long tool output | Blocks readable streaming output; frequent after wide `sed`/`cat` tool results. | 9 comments, 5 👍 — high visibility UX regression. |
| **[#5886](https://github.com/earendil-works/pi/issues/5886)** AgentSession settlement/continuation bugs | Meta-issue for recurring transcript-continuation failures; affects long-running coding sessions. | 9 comments, 4 👍 — core stability. |
| **[#7855](https://github.com/earendil-works/pi/issues/7855)** “Response was truncated before completion” on OpenAI-compatible APIs | Random truncation forces manual “continue” prompts; reported with vLLM, any OpenAI-compat endpoint. | 7 comments, 4 👍 — reliability blocker. |
| **[#4742](https://github.com/earendil-works/pi/issues/4742)** Add SiliconFlow provider (dual CN/intl endpoints) | Popular Chinese model hub (Qwen, GLM, DeepSeek); OpenAI-compat API. | 7 comments — strong regional demand. |
| **[#8582](https://github.com/earendil-works/pi/issues/8582)** Built-in `powershell` tool uses 5.1 interactively but `pwsh` in `-p` mode | Inconsistent shell version breaks scripts; PWSH 7 is standard on modern Windows. | 6 comments — Windows tooling parity. |
| **[#7049](https://github.com/earendil-works/pi/issues/7049)** Upgrade Undici to 8.8.0 for correct plain-HTTP proxy forwarding | `HTTP_PROXY` + plain HTTP targets currently tunnel via CONNECT incorrectly. | 5 comments — networking correctness. |
| **[#6596](https://github.com/earendil-works/pi/issues/6596)** `taskkill` ENOENT on Node.js 24 | Breaks process-tree cleanup on latest Node; two code paths affected. | 5 comments — runtime compatibility. |
| **[#8456](https://github.com/earendil-works/pi/issues/8456)** Gemini 3.7 Flash rejects `/tree` summarization with MINIMAL thinking | Built-in branch summary omits `reasoning` param; Google adapter needs model-aware defaults. | 4 comments, 2 👍 — model-specific config gap. |
| **[#8138](https://github.com/earendil-works/pi/issues/8138)** Retry classification for Codex “Sorry, something went wrong” | Transient Codex error currently surfaces as terminal; immediate retry succeeds. | 4 comments — error-handling polish. |

## 4. Key PR Progress (10 Important)

| PR | Summary | Impact |
|----|---------|--------|
| **[#8656](https://github.com/earendil-works/pi/pull/8656)** fix: repair startup after pi update (jiti, type errors, generated models) | Restores CLI launch broken by `jiti` v2.6.1 API change and type-gen drift. | **Critical** — unblocks all users on 0.84.3+. |
| **[#8650](https://github.com/earendil-works/pi/pull/8650)** fix(ai): omit Responses `tool_choice` when no tools sent | Fixes `/compact` 400 on xAI/Grok (and Azure OpenAI Responses). | **High** — restores compaction for major providers. |
| **[#8642](https://github.com/earendil-works/pi/pull/8642)** fix(ai): hoist Bedrock tool-result images for OpenAI models | Moves images out of `toolResult.content` → sibling user blocks; unblocks vision on Bedrock OpenAI IDs. | **High** — fixes session-killing 400s. |
| **[#8641](https://github.com/earendil-works/pi/pull/8641)** Load skills when `bash` is available | Restores skill loading if `read` tool disabled but `bash` present; adds regression tests. | **Medium** — extension/tool flexibility. |
| **[#8639](https://github.com/earendil-works/pi/pull/8639)** feat(ai): add Opper provider | New built-in OpenAI-compat provider (api.opper.ai/v3/compat); catalog from models.dev. | **Medium** — expands provider ecosystem. |
| **[#8635](https://github.com/earendil-works/pi/pull/8635)** fix(ai): preserve aborted stop reason during lazy setup | Propagates abort signal through stream setup; prevents mis-classified failures. | **Medium** — improves cancellation fidelity. |
| **[#8629](https://github.com/earendil-works/pi/pull/8629)** feat: add eager tool execution | Opt-in early dispatch for discard-safe `read` calls at `toolcall_end`; reuses outcome at normal dispatch. | **Medium** — latency optimization for local FS reads. |
| **[#8627](https://github.com/earendil-works/pi/pull/8627)** fix(coding-agent): use `ctx.cwd` for cwd-sensitive tools | Extensions’ `read`/`write`/`edit`/`grep`/… now resolve against live session CWD. | **Medium** — fixes path bugs in multi-root workspaces. |
| **[#8547](https://github.com/earendil-works/pi/pull/8547)** feat(tui): move editor cursor on click | Primary-click in prompt moves cursor; matches mouse-enabled terminal expectations. | **Low-Medium** — UX polish for TUI power users. |
| **[#8570](https://github.com/earendil-works/pi/pull/8570)** fix(ai): preserve Codex thread-affinity headers | Adds missing `thread-id` header to Codex Responses requests; maintains upstream session affinity. | **Low-Medium** — Codex stability. |

## 5. Feature Request Trends
1. **Windows-first experience** — Unified install/run story, PowerShell 7 default, WSL integration (#7547, #8582).  
2. **Provider breadth** — SiliconFlow (#4742), Opper (#8639), Cloudflare AI Gateway (#8647), Bedrock OpenAI fixes (#8643).  
3. **TUI/streaming polish** — Row corruption (#8584), image rendering (#8306), cursor-on-click (#8547), pane-width exit (#8657).  
4. **Extension resilience** — npm 11 script blocking (#6600), bundled CLI module resolution (#8620), NAPI crashes (#8655).  
5. **Model-specific adaptations** — Thinking-level maps (Gemini #8456), reasoning-effort clamping (#8653), image-budget handling (#8636).

## 6. Developer Pain Points
- **Windows fragmentation**: Multiple run modes (native, WSL, Git Bash, MSYS2) with inconsistent tooling and docs.  
- **Streaming/TUI fragility**: O(n²) buffer re-parses (#7698), row corruption after wide output (#8584), image layout breaks (#8306).  
- **Extension breakage on upgrade**: `pi update --extensions` blocked by npm 11 defaults (#6600); bundled CLI loses `@earendil-works/*` modules (#8620).  
- **Model/API mismatch errors**: Truncation without retry (#7855), thinking-level rejections (#8456), `tool_choice` 400s (#8649, #8633), image-patch budgets (#8636).  
- **Session continuity**: AgentSession settlement bugs (#5886), compaction summary quality (#8652, #8651), Codex thread affinity (#8570).  
- **Node.js 24 compatibility**: `taskkill` ENOENT (#6596), Undici proxy regression (#7049).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-26

## Today's Highlights
The Qwen Code team is addressing a critical **Windows CLI regression** where Ctrl+V paste has been broken since v0.21.x, while simultaneously pursuing a major **core/cli architectural refactor** targeting 14 structural issues including tight coupling to `@google/genai` types across 136 files. A nightly release (v0.22.0-nightly) failed during publishing, and the team is unifying ACP transport paths onto a single transport-agnostic core with SDK upgrade to 1.x.

---

## Releases
No new releases in the last 24 hours. The nightly build `v0.22.0-nightly.20260826.a6d30ebc6b` failed during the publish job ([#10058](https://github.com/QwenLM/qwen-code/issues/10058)).

---

## Hot Issues

| Issue | Priority | Why It Matters | Community Signal |
|-------|----------|----------------|------------------|
| [#4063](https://github.com/QwenLM/qwen-code/issues/4063) — Core + CLI architecture refactor: 14 structural issues | P0 (architectural) | Identifies 14 structural problems: `ContentGenerator` interface bound to `@google/genai` types (136 files affected), circular deps, leaking abstractions, inconsistent error handling. Foundation for long-term maintainability. | 10 comments, 👍1, `status/in-progress` |
| [#9061](https://github.com/QwenLM/qwen-code/issues/9061) — Ctrl+V paste broken on Windows CLI since 0.21.x | P1, regression | Complete paste failure in CLI on Windows; works in plain PowerShell. Blocks Windows developers. Regression bisected to between 0.21.0–0.21.11. | 7 comments, `priority/P1` |
| [#10057](https://github.com/QwenLM/qwen-code/issues/10057) — `review cleanup` deletes concurrent review artifacts due to dash-prefix collision | P2, data loss | Token `src_foo` (for `src/foo`) is prefix of `src_foo-bar`; cleanup sweeps both. Affects parallel review workflows. | 2 comments, `priority/P2` |
| [#10056](https://github.com/QwenLM/qwen-code/issues/10056) — MCP SSE tool call hangs chat indefinitely, loses permission | Bug, Windows | MCP tool completes but chat freezes; permission state lost. Reproducible on Qwen Desktop 1.0.3 with SSE transport. | 2 comments, `status/need-information` |
| [#10061](https://github.com/QwenLM/qwen-code/issues/10061) — Unify stdio/HTTP ACP paths onto transport-agnostic core; upgrade SDK to 1.x | Feature, architecture | Two divergent ACP implementations (stdio + HTTP) create maintenance burden. SDK at 0.14.1 vs current 1.4.x. | 1 comment, `status/needs-triage` |
| [#10058](https://github.com/QwenLM/qwen-code/issues/10058) — Nightly release v0.22.0-nightly publish failed | CI/CD blocker | Automated release workflow failed at publish step. Blocks nightly distribution. | 1 comment, `autofix/skip` |
| [#9981](https://github.com/QwenLM/qwen-code/issues/9981) — Deferred autofix review findings from PR #9406 | Technical debt | Bot-deferred review items outside PR scope needing manual follow-up. Indicates autofix loop limitations. | 2 comments |
| [#7167](https://github.com/QwenLM/qwen-code/issues/7167) — Fleet Shepherd dashboard (bot maintenance) | Operational | Auto-maintained fleet status: 0 syncs, 0 dispatches, 0 releases, 0 cleanups in last tick. | 3 comments |

---

## Key PR Progress

| PR | Status | Description | Impact |
|----|--------|-------------|--------|
| [#10060](https://github.com/QwenLM/qwen-code/pull/10060) | Open | **Fix `review cleanup` prefix collision** — makes token space prefix-free by changing separator from `-` to `_` for dash-extended targets. Directly fixes #10057. | Prevents data loss in parallel reviews |
| [#10059](https://github.com/QwenLM/qwen-code/pull/10059) | Open | **Remove macOS/Windows CI lanes from PR triggers** — keeps them on nightly, merge queue, and dispatch only. Measured CI time savings across `ci.yml`, `e2e.yml`, `sdk-java.yml`, `live-host.yml`. | Reduces PR latency, saves CI resources |
| [#10055](https://github.com/QwenLM/qwen-code/pull/10055) | Open | **Run autofix scan lane on persistent self-hosted runners** — moves autonomous fix scanning off GitHub-hosted runners with fork-trust and kill-switch routing. | Improves autofix reliability & security |
| [#10050](https://github.com/QwenLM/qwen-code/pull/10050) | Open | **Yield event loop between script tests** — adds global hook to yield to real timer before each test, fixing vitest RPC timeouts in autofix suite (219 tests, ~66s). | Stabilizes CI, prevents flaky timeouts |
| [#10011](https://github.com/QwenLM/qwen-code/pull/10011) | Open | **Persist reasoning effort in WebShell** — session updates immediately; persists as global `model.reasoningEffort` default for future sessions/daemon restarts. | UX consistency for reasoning control |
| [#9995](https://github.com/QwenLM/qwen-code/pull/9995) | Open | **Preserve bridge timeouts for mid-turn media** — image/audio/resource attachments use media bridge's own timeout/retry policy while preserving turn cancellation. | Reliability for multimodal mid-turn injections |
| [#9993](https://github.com/QwenLM/qwen-code/pull/9993) | Closed | **Make compact view the only WebShell mode** — removes toggle, Ctrl+O shortcut, `ui.compactMode` setting, help entry, i18n. Compact rendering now default. | Simplifies UI, reduces code paths |
| [#9984](https://github.com/QwenLM/qwen-code/pull/9984) | Open | **Add opt-in interactive browser terminal to WebShell** — standalone WebShell opts into Terminal action; requires daemon `web_terminal` capability for version compatibility. | New interactive capability for web users |
| [#9761](https://github.com/QwenLM/qwen-code/pull/9761) | Open | **Keep deferred review suggestions recoverable off PR page** — post-convergence suggestions move to deferral list on review body, made tool-recoverable. | Improves review workflow continuity |
| [#9739](https://github.com/QwenLM/qwen-code/pull/9739) | Open | **Bind PRs created via `gh pr create` in session shell** — closes last binding-source gap for session↔PR feature. Two detector paths share logic. | Completes session-PR binding feature |

---

## Feature Request Trends
From the active issues and PRs, the strongest feature directions are:

1. **Transport unification & protocol upgrades** — ACP stdio/HTTP convergence (#10061), MCP SSE stability (#10056), daemon capability negotiation (#9984)
2. **WebShell parity & polish** — persistent settings (#10011), compact-only mode (#9993), interactive terminal (#9984), git dirty-tree handling (#9769)
3. **Review workflow robustness** — prefix-safe cleanup (#10060), deferred suggestion recovery (#9761), session-PR binding completion (#9739)
4. **Architectural decoupling** — core/cli refactor to remove `@google/genai` coupling (#4063), transport-agnostic ACP core (#10061)
5. **CI/CD optimization** — selective platform testing (#10059), persistent runners for autofix (#10055), event-loop yielding for test stability (#10050)

---

## Developer Pain Points
Recurring frustrations evident from issue velocity and comments:

| Pain Point | Evidence |
|------------|----------|
| **Windows CLI usability** | #9061: Ctrl+V paste completely broken since 0.21.x; regression unverified for months |
| **MCP integration fragility** | #10056: SSE tool calls hang chat, lose permission; Desktop-specific |
| **Review system collisions** | #10057: parallel review cleanup deletes unrelated artifacts due to token prefix design |
| **Nightly release reliability** | #10058: publish job failure blocks developer access to latest builds |
| **Architectural tech debt** | #4063: 136 files coupled to `@google/genai` types; 14 structural issues catalogued but unresolved |
| **CI feedback latency** | #10059: macOS/Windows PR tests adding significant queue time; #10050: vitest RPC timeouts in autofix suite |

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-26

## 1. Today's Highlights
The v0.9.12 release cycle is in its final integration phase (PR #5576), with 72 commits addressing release blockers including provider-neutrality audits, workflow schema repair, Fleet UX fixes, and sandbox security hardening. Simultaneously, the team shipped major operational features: a control socket for supervised sessions (#5594), self-relaunch capability (#5593), and a lifecycle event outbox (#5592) — enabling CI/automation workflows. Documentation localization (Chinese) and git-performance work (replacing CLI calls with gix) are also advancing.

## 2. Releases
**No new releases in the last 24 hours.** v0.9.11 was published 2026-08-23; v0.9.12 RC gating is tracked in #5573.

## 3. Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#5316](https://github.com/Hmbown/CodeWhale/issues/5316) | **EPIC-005: CodeWhale TUI Crate Decomposition** | Umbrella epic for architectural refactor; splits monolithic TUI crate for maintainability and parallel builds. | 16 comments — highest engagement; signals long-term structural investment. |
| [#5588](https://github.com/Hmbown/CodeWhale/issues/5588) | **Provider neutrality: 18 DeepSeek-exclusive gates** | Audit found 18 sites where behavior is DeepSeek-gated but should be provider-agnostic; critical for multi-provider support. | 5 comments; authored by maintainer Hmbown — release blocker for v0.9.12. |
| [#4394](https://github.com/Hmbown/CodeWhale/issues/4394) | **Compaction: structured survival contract** | Missing explicit contract for what context survives compaction; affects reliability for long sessions. | 4 comments; open since July — foundational for context management. |
| [#5533](https://github.com/Hmbown/CodeWhale/issues/5533) | **Control surface for supervised operation** | Enables external supervisors (CI, multiplexers) to message/interrupt/relaunch sessions via Unix socket. | 3 comments; **closed via PR #5594** — key for automation. |
| [#5532](https://github.com/Hmbown/CodeWhale/issues/5532) | **Feature: /relaunch — switch running session to new binary** | Eliminates manual restart after `/update`; improves UX for frequent updates. | 4 comments; **closed via PR #5593**. |
| [#5531](https://github.com/Hmbown/CodeWhale/issues/5531) | **Local lifecycle event outbox (JSONL + webhook)** | Structured event stream (turn_stalled, turn_failed) for observability/alerting in unattended runs. | 3 comments; **closed via PR #5592**. |
| [#5562](https://github.com/Hmbown/CodeWhale/issues/5562) | **Stale write-claims lock sub-agents out** | Write-claims persist forever, cascade-locking other agents; verifier role contradicts its description. | 3 comments; Windows-reported, **closed** — sub-agent reliability. |
| [#5617](https://github.com/Hmbown/CodeWhale/issues/5617) | **Reduce background git commands; avoid `.git/index.lock` contention** | `git status` probes from TUI hold lock, causing `git commit` failures in active repos. | 2 comments; fresh (Aug 25) — developer pain point. |
| [#5618](https://github.com/Hmbown/CodeWhale/issues/5618) | **Replace internal `git` CLI reads with gix (gitoxide)** | Follow-up to #5617: eliminate process spawn overhead & lock contention via pure-Rust git library. | 1 comment; architectural direction. |
| [#5482](https://github.com/Hmbown/CodeWhale/issues/5482) | **EPIC(docs): restructure & fully localize to Chinese** | Growing Chinese user base; machine translation insufficient; many docs stale. | 2 comments; ongoing localization push (PR #5544, #5613). |

## 4. Key PR Progress (Top 10 by Significance)

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#5576](https://github.com/Hmbown/CodeWhale/pull/5576) | **0.9.12 integration: must-fix + UX fixes** | OPEN (WIP) | 72-commit integration branch; all release blockers code-complete; awaits version bump + changelog gates (#5573). |
| [#5594](https://github.com/Hmbown/CodeWhale/pull/5594) | **Control socket - part d (final)** | CLOSED | Unix-domain JSON-RPC control socket per session (`[control_socket] enabled = true`); enables supervised operation. Closes #5533. |
| [#5593](https://github.com/Hmbown/CodeWhale/pull/5593) | **/relaunch command - part c** | CLOSED | Self-relaunch: `/relaunch` swaps binary in-place, persists state, restores terminal. Closes #5532. |
| [#5592](https://github.com/Hmbown/CodeWhale/pull/5592) | **Lifecycle outbox - part b** | CLOSED | Opt-in JSONL/webhook outbox for lifecycle events (turn_stalled, turn_failed, etc.) for TUI + headless. Closes #5531. |
| [#5608](https://github.com/Hmbown/CodeWhale/pull/5608) | **feat(tui): add focused transcript actions** | CLOSED | Transcript block actions: `y` copy content, `Y` copy metadata, `Enter` fullscreen, `r` raw markdown. Closes #5551 (slice). |
| [#5616](https://github.com/Hmbown/CodeWhale/pull/5616) | **fix(tui): move git_status/git_diff off async executor** | CLOSED | Blocking `git` CLI calls moved off tokio worker pool; prevents session hangs. Addresses #5617 root cause. |
| [#5610](https://github.com/Hmbown/CodeWhale/pull/5610) | **fix(tui): preserve Windows verbatim paths through POSIX split** | CLOSED | Fixes two Windows CI failures blocking FEAT-019 (memory command shapes). |
| [#5609](https://github.com/Hmbown/CodeWhale/pull/5609) | **refactor(tui): adopt command shapes in memory group (FEAT-019)** | CLOSED | Converts `/note`, `/memory` to external command shapes (FEAT-014/015 pattern). |
| [#5584](https://github.com/Hmbown/CodeWhale/pull/5584) | **fix(subagents): persist child approval receipts** | CLOSED | Child approvals now commit Asked/terminal outcomes to session receipt store; fixes durability gap. Closes #5543. |
| [#5613](https://github.com/Hmbown/CodeWhale/pull/5613) | **docs(i18n): fix English inaccuracies & add zh_hans Tier-2 translations** | CLOSED | Corrects English docs contradicting code; adds first Simplified-Chinese translations for Tier-2 pages. |

## 5. Feature Request Trends
1. **Provider-agnostic architecture** — Systematic removal of DeepSeek-specific assumptions (#5588, EPIC-005 decomposition).
2. **Supervision & automation primitives** — Control socket, relaunch, lifecycle outbox, external runtime backend (#5533, #5532, #5531).
3. **TUI power-user UX** — Per-block actions, line-range mentions (`@path:120-160`), hidden-file picker toggle, tutorial pager (#5551, #5550, #5556).
4. **Observability & cost control** — Per-step token/cost streaming (#5581, #5578), Fleet cost ceiling (#5567), schema cost estimates (#5603).
5. **Security hardening** — Sandbox deny-lists (#5568), hard-link write escape fix (#5569), OAuth reactive refresh (#5572).
6. **Documentation localization** — Full Chinese translation + restructuring (EPIC #5482, ongoing PRs).
7. **Git performance & reliability** — Replace CLI probes with gix (#5617, #5618), fix lock contention.

## 6. Developer Pain Points
- **Session restart friction**: `/update` requires manual restart; `/relaunch` now solves this (#5532 → #5593).
- **Git lock contention**: Background `git status` probes block commits; moving to gix (#5617, #5618).
- **Sub-agent coordination failures**: Stale write-claims permanently lock agents; verifier role misbehavior (#5562).
- **Compaction opacity**: 842k/1M context never auto-compacted; no survival contract (#5577, #4394).
- **Fleet UX confusion**: Config view Enter loops, model switching buried (#5589).
- **Clipboard fallback in headless/SSH**: Export fails silently; now writes backup file (#5555).
- **Windows path handling**: Verbatim paths broken through POSIX word-splitting (#5610).
- **Documentation drift**: English docs contradict code; Chinese users blocked by stale/machine-translated docs (#5482, #5613).

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*