# AI CLI Tools Community Digest 2026-08-28

> Generated: 2026-08-28 11:03 UTC | Tools covered: 10

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

# AI CLI Tools Ecosystem: Cross-Tool Comparison Report (2026-08-28)

---

## 1. Ecosystem Overview

The AI CLI tool landscape is in a **stabilization-and-hardening phase** rather than feature expansion. All active projects shipped patches or nightlies in the last 24 hours, but zero stable feature releases occurred. The dominant pattern is **regression remediation**: Windows Desktop reliability (Claude Code, Codex), TUI rendering fidelity (Pi, Codex, Copilot CLI), session/history integrity (Codex, Gemini, Copilot CLI), and provider integration parity (DeepSeek TUI, Pi, OpenCode). Enterprise/air-gapped deployment needs are driving new restricted modes (Claude Code `--restricted`, Copilot CLI GHEC fixes, OpenCode Azure/Entra ID). Multi-agent/subagent architectures remain the primary source of cross-cutting bugs across Claude Code, Gemini, Copilot CLI, and Qwen Code.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Release Status | Release Type |
|------|--------------|-----------|----------------|--------------|
| **Claude Code** | 50 active | 1 updated | **2 patches** (v2.1.250, v2.1.248) | Stable patch |
| **OpenAI Codex** | 47 updated | 50 updated (18 closed) | **3 alphas** (0.151.0-α.6→.8) | Alpha series |
| **Gemini CLI** | ~10 hot | 10 updated | **1 nightly** (v0.59.0) | Nightly |
| **GitHub Copilot CLI** | 10 hot | 0 updated | **2 releases** (v1.0.81, v1.0.82-0) | Stable + prerelease |
| **Kimi Code CLI** | 6 updated | 3 open | None | — |
| **OpenCode** | 15+ new | 10 open | **2 patches** (v1.18.24–25) | Stable patch |
| **Pi** | 10 hot | 10 updated | None | — |
| **Qwen Code** | 5 hot | 10 updated | **1 nightly** (v0.22.2) | Nightly |
| **DeepSeek TUI** | 7 hot | 12 closed/updated | None | — |
| **Grok Build** | 0 | 0 | None | — |

**Notes:** "Issues" = items updated/filed in last 24h per digest; "PRs" = PRs with activity in window. Codex leads in raw PR velocity (automation-driven); Copilot CLI shows concerning PR silence despite multiple regressions.

---

## 3. Shared Feature Directions (Cross-Tool Requirements)

| Requirement | Tools Affected | Specific Needs |
|-------------|----------------|----------------|
| **Windows Desktop Reliability** | Claude Code, Codex, Copilot CLI, Kimi (WSL) | Launch failures, update collisions, MCP/Cowork breakage, handshake errors, headless launches |
| **Multi-Account / Profile Management** | Claude Code (#18435: 761 👍), Codex, Copilot CLI (GHEC) | Seamless personal/work/org switching, token scope clarity, data-residency auth |
| **Subagent / Multi-Agent Robustness** | Claude Code, Gemini, Copilot CLI, Qwen Code, OpenCode | Tool inheritance, hook firing, session resume/steer, false success reports, turn-limit handling |
| **Session History Fidelity & Compaction** | Codex, Gemini, Copilot CLI, Pi, Qwen Code | Pagination loss, stdout duplication, compaction failures on custom models, checkpoint gaps |
| **Provider-Native Tool Parity (Web Search, Code Exec)** | DeepSeek TUI (5 providers), Pi (Bedrock, OpenRouter, OpenAI Responses), OpenCode (Bedrock, Azure), Codex (code-mode) | Native `web_search`, reasoning normalization, `tool_choice` handling, streaming fallback |
| **Enterprise / Restricted Deployment Modes** | Claude Code (`--restricted`), Copilot CLI (GHEC), OpenCode (Azure Entra ID, `--base-path`), Pi (XDG, proxy) | Air-gapped execution, config lockdown, reverse proxy, audit trails, data residency |
| **TUI/CLI Workflow Flexibility** | Codex (collapsing, in-place edit, `/add-dir`), Pi (soft breaks, copy-paste), Copilot CLI (hooks on resume), DeepSeek TUI (`/copy`) | Granular UX control, mid-session dir add, prompt edit without fork, clipboard integration |
| **Observability / Telemetry** | Claude Code (OTel), Codex (Guardian, thread source), Copilot CLI (OTel to hooks), Pi (compaction retry), Qwen Code (CI disk-floor) | OpenTelemetry, cost tracking, auth recovery events, compaction resilience, CI health gates |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | GitHub Copilot CLI | OpenCode | Qwen Code | DeepSeek TUI | Pi | Kimi Code |
|-----------|-------------|--------------|------------|-------------------|----------|-----------|--------------|-----|-----------|
| **Primary Focus** | Enterprise security, Desktop/IDE polish | TUI/CLI power-user UX, Windows parity | Subagent reliability, Auto Memory, Browser agent | Plugin/MCP ecosystem, Enterprise GHEC | Self-hosting, Azure/Bedrock, V2 tool parity | Web-shell orchestration, CI resilience, Review automation | Provider-native tooling breadth, Build scalability | TUI rendering fidelity, Extension API, Config ergonomics | API ergonomics, Plan-mode, BYO provider config |
| **Target User** | Enterprise teams, security-conscious orgs | Power CLI users, long-session developers | Autonomous agent workflows, Web agents | GitHub-native enterprises, plugin builders | Self-hosters, on-prem, proxy-heavy envs | Web-shell/team workflow users, CI-heavy orgs | Multi-provider polyglots, compile-time sensitivity | Linux/WSL power users, extension authors | API integrators, K3 model users |
| **Technical Approach** | Restricted modes, settings governance, Desktop app | Rust TUI, Guardian security, Realtime voice | Nightly cadence, ACP protocol, Skill system | Node/TypeScript, MCP 2026-07-28, Hooks + OTel | Go, V1/V2 config compat, Reverse proxy flags | TypeScript, WebShell + ACP, Daemon architecture | Rust monolith decomposition, Provider adapters | TypeScript, XDG compliance, Hook dispatch completeness | Python/TypeScript, OpenAI-compatible providers |
| **Maturity Signal** | Stable patches, high-vote issues, Desktop crisis | Alpha churn, high PR automation, Windows blocker | Nightly only, P1 subagent bugs, Wayland blocker | Stable but prerelease regressions, 0 PRs today | Patch velocity, single-contributor bug surge | Nightly + CI hardening, workflow cockpit | No releases, heavy infra PRs, compile tax | No releases, rendering regressions, XDG gap | No releases, critical Plan-mode regression |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Indicators |
|------|-------|------------|
| **High Momentum / Active Stabilization** | **Claude Code**, **OpenAI Codex**, **OpenCode**, **DeepSeek TUI** | Daily releases/alphas; 40–50+ issues/PRs/day; dedicated triage; enterprise adoption signals (restricted modes, GHEC, Entra ID) |
| **Steady Iteration / Feature-Complete Core** | **GitHub Copilot CLI**, **Qwen Code**, **Gemini CLI** | Regular stable/nightly cadence; clear roadmap (plugins, web-shell, skills); but Copilot CLI showing prerelease fragility |
| **Early / Infrastructure-Heavy** | **Pi**, **Kimi Code** | No recent releases; core rendering/infra bugs block daily use; PRs target foundations (XDG, monolith, hook types) |
| **Dormant / No Signal** | **Grok Build** | Zero activity in window |

**Key Insight:** Momentum ≠ maturity. Codex has highest velocity but is alpha-only with Windows blockers. Claude Code has stable patches but a Desktop crisis. OpenCode ships patches fast but V2 tooling regressions suggest architectural churn. DeepSeek TUI invests heavily in build infrastructure (monolith decomposition) before user-facing features.

---

## 6. Trend Signals for Technical Decision-Makers

| Trend | Evidence | Strategic Implication |
|-------|----------|----------------------|
| **Restricted/Air-Gapped Modes Are Table Stakes** | Claude Code `--restricted`, Copilot CLI GHEC fixes, OpenCode Azure Entra ID, Pi proxy support | Enterprise procurement will require demonstrable lockdown capability; evaluate each tool's `--restricted` equivalent before adoption. |
| **Windows Is the Differentiator** | 4+ critical Windows bugs each in Claude Code & Codex; Copilot CLI GHEC auth broken; Kimi WSL gaps | Teams with Windows developers must validate *current* Desktop/CLI builds; do not assume parity. |
| **Subagent Architecture Is Unsolved** | Every tool with agents (Claude, Gemini, Copilot, Qwen, OpenCode) reports tool inheritance, hook, or resume failures | Do not build critical automation on subagent delegation yet; treat as experimental. |
| **Session Persistence > Raw Model Quality** | History loss (Codex), compaction failures (Copilot, Pi), session resume bugs (Copilot, Qwen, Gemini) | Long-running workflow reliability now outweighs model benchmark scores for CLI tool selection. |
| **Provider-Native Tools > Generic MCP** | DeepSeek TUI adding 5 native search adapters; Pi fixing OpenAI Responses compaction; OpenCode Bedrock reasoning | Vendor-specific tool contracts (web_search, code_exec) are winning over lowest-common-denominator MCP; expect fragmentation. |
| **Build/Infra Tax Determines Velocity** | DeepSeek TUI monolith (682k lines) blocking all PRs; Pi trailing-space copy-paste bugs; OpenCode V2 tool regressions | Tools investing in build scalability (incremental compile, test isolation, CI health gates) will ship fixes faster. |
| **Configuration Drift Is a Silent Killer** | Claude Code symlink rules not loaded, Gemini `settings.json` ignored, Pi non-XDG config, Copilot CLI MCP config dropped | Validate config loading *behavior* vs. docs before standardizing; expect silent fallback to defaults. |

---

## Recommendation Summary

| If Your Priority Is... | Evaluate First |
|------------------------|----------------|
| **Enterprise security & Desktop IDE integration** | Claude Code (despite Windows Desktop bugs, `--restricted` is unique) |
| **Long-session TUI power usage on Linux/macOS** | OpenAI Codex (alpha) or Pi (if TUI bugs resolve) |
| **GitHub-native enterprise with plugin ecosystem** | GitHub Copilot CLI (pin v1.0.81, avoid prereleases) |
| **Self-hosted / on-prem / proxy environments** | OpenCode (Azure Entra ID, `--base-path`, V1/V2 compat) |
| **Web-shell team workflows & CI resilience** | Qwen Code (nightly, workflow cockpit, CI hardening) |
| **Multi-provider polyglot with native tooling** | DeepSeek TUI (once monolith decomposition lands) |
| **Autonomous subagent workflows** | *Wait* — all tools show P1 gaps; Gemini closest but Wayland blocks browser agent |

**Bottom Line:** No tool is "production-ready across the board" today. Adopt per-use-case, pin versions, and track the specific regression clusters above. The next 4–6 weeks will likely see Windows Desktop fixes (Claude, Codex), subagent hardening (Gemini, Copilot, Qwen), and restricted-mode parity (all enterprise-targeted tools).

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report  
*Data as of 2026-08-28 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking (Most-Active PRs)

| # | Skill / PR | Functionality | Discussion Highlights | Status |
|---|------------|---------------|----------------------|--------|
| 1 | **[#1298](https://github.com/anthropics/skills/pull/1298)** `skill-creator`: fix `run_eval.py` 0% recall | Core tooling fix: installs eval artifact as real skill, fixes Windows stream reading, trigger detection, parallel workers | References **#556** (12 comments, 7 👍) + 10+ independent reproductions; description-optimization loop was optimizing against noise | **OPEN** (updated 2026-06-23) |
| 2 | **[#1628](https://github.com/anthropics/skills/pull/1628)** **Hivemind**: Zero-Cost Multi-Agent Orchestration | Delegates mechanical work to headless *opencode* workers on free models; Claude stays planner/reviewer/merger | Novel cost-optimization architecture; addresses “expensive model context is the scarce resource” | **OPEN** (created 2026-08-21) |
| 3 | **[#1367](https://github.com/anthropics/skills/pull/1367)** **self-audit**: Mechanical verification + 4-dimension reasoning gate | Pre-delivery audit: Step 0 verifies every claimed output file exists; then reasoning audit in damage-severity priority | Universal, stack-agnostic; v1.3.0; targets “silent hallucination” failure mode | **OPEN** (updated 2026-07-02) |
| 4 | **[#568](https://github.com/anthropics/skills/pull/568)** **servicenow**: ServiceNow platform skill | Broad platform assistant covering ITSM, ITOM, ITAM/SAM, FSM, HRSD, SPM, SecOps, IntegrationHub | Enterprise-focused; 5-month active discussion (updated 2026-08-12) | **OPEN** |
| 5 | **[#723](https://github.com/anthropics/skills/pull/723)** **testing-patterns**: Comprehensive testing stack | Testing Trophy, AAA pattern, React Testing Library, contract testing, E2E, property-based, mutation testing | Full-stack testing guidance; addresses “what NOT to test” | **OPEN** (updated 2026-04-21) |
| 6 | **[#514](https://github.com/anthropics/skills/pull/514)** **document-typography**: Typographic quality control | Prevents orphans, widows, numbering misalignment in AI-generated documents | “Affects every document Claude generates”; user rarely asks for good typography explicitly | **OPEN** (updated 2026-03-13) |
| 7 | **[#1602](https://github.com/anthropics/skills/pull/1602)** Evaluation & benchmark stability fixes | Fixes MCP-builder serialization, benchmark metrics, encoding, script stability across platforms | Resolves “multiple reliability, platform compatibility, and metric calculation bugs” | **OPEN** (updated 2026-08-24) |
| 8 | **[#486](https://github.com/anthropics/skills/pull/486)** **odt**: OpenDocument creation / template fill / parse | Create, fill, read, convert `.odt`/`.ods`; triggers on “ODT”, “ODF”, “LibreOffice”, “ISO standard format” | Open-source format support; complements existing docx/pdf skills | **OPEN** (updated 2026-04-14) |

---

## 2. Community Demand Trends (From Issues)

| Trend | Evidence (Issues) | Community Signal |
|-------|-------------------|------------------|
| **Skill distribution & trust model** | [#492](https://github.com/anthropics/skills/issues/492) (43 comments, 2 👍) — community skills under `anthropic/` namespace enable impersonation; [#189](https://github.com/anthropics/skills/issues/189) (6 comments, 9 👍) — duplicate skills from `document-skills` + `example-skills` | **High** — namespace governance & deduplication are top security/UX concerns |
| **Org-wide skill sharing** | [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8 👍) — no native sharing; manual `.skill` file transfer via Slack/Teams | **High** — enterprise adoption blocker |
| **Evaluation & trigger reliability** | [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 7 👍) — `run_eval.py` 0% trigger rate; [#1390](https://github.com/anthropics/skills/issues/1390) (4 comments) — MCP evaluation scores 0/N | **High** — core tooling broken on Windows & real MCP servers |
| **Context-window efficiency** | [#1487](https://github.com/anthropics/skills/issues/1487) (4 comments) — `claude-api` skill injects ~156k tokens in one call; [#1329](https://github.com/anthropics/skills/issues/1329) (9 comments) — `compact-memory` symbolic notation proposal | **Medium-High** — token budget pressure driving compression skills |
| **Agent governance & safety** | [#412](https://github.com/anthropics/skills/issues/412) (6 comments) — *agent-governance* skill proposal (policy enforcement, trust scoring); [#1385](https://github.com/anthropics/skills/issues/1385) (4 comments, 1 👍) — 3-gate reasoning quality pipeline | **Medium** — emerging “AI safety for agents” category |
| **Platform integrations** | [#29](https://github.com/anthropics/skills/issues/29) (4 comments) — Bedrock support; [#16](https://github.com/anthropics/skills/issues/16) (4 comments) — expose Skills as MCPs | **Medium** — cloud/vendor interoperability demand |
| **Document fidelity** | [#12](https://github.com/anthropics/skills/issues/12) (4 comments, 1 👍) — whitespace corruption in docx/OOXML; [#538](https://github.com/anthropics/skills/pull/538), [#541](https://github.com/anthropics/skills/pull/541) — case-sensitivity & `w:id` collision fixes | **Medium** — production document generation reliability |

---

## 3. High-Potential Pending Skills (Active PRs Likely to Land Soon)

| PR | Skill | Why It Has Momentum |
|----|-------|---------------------|
| **[#1298](https://github.com/anthropics/skills/pull/1298)** | `skill-creator` eval fixes | Blocks all skill authors; 10+ reproductions; referenced by #556 (12 comments) |
| **[#1602](https://github.com/anthropics/skills/pull/1602)** | Evaluation/benchmark stability | Cross-cutting reliability fixes; updated 2026-08-24 |
| **[#1628](https://github.com/anthropics/skills/pull/1628)** | **Hivemind** (multi-agent orchestration) | Novel architecture; zero-cost positioning; very recent (Aug 2026) |
| **[#1367](https://github.com/anthropics/skills/pull/1367)** | **self-audit** (mechanical + reasoning gate) | Universal applicability; v1.3.0; addresses silent failures |
| **[#568](https://github.com/anthropics/skills/pull/568)** | **servicenow** (enterprise platform) | Broad coverage; 5-month active iteration; enterprise demand |
| **[#723](https://github.com/anthropics/skills/pull/723)** | **testing-patterns** | Comprehensive stack coverage; fills testing guidance gap |
| **[#514](https://github.com/anthropics/skills/pull/514)** | **document-typography** | “Affects every document”; low user awareness → high latent value |
| **[#486](https://github.com/anthropics/skills/pull/486)** | **odt** (OpenDocument) | Open-format complement to docx/pdf; template-driven workflows |

---

## 4. Skills Ecosystem Insight

> **The community’s most concentrated demand is for *trustworthy, composable skill infrastructure*: reliable evaluation tooling, secure namespace governance, org-level sharing, and token-efficient execution — not just new domain skills.**

---

# Claude Code Community Digest — 2026-08-28

---

## 1. Today's Highlights

Two patch releases shipped in the last 24 hours: **v2.1.250** (bug fixes and reliability improvements) and **v2.1.248**, which introduces a new `--restricted` mode (`CLAUDE_CODE_RESTRICTED=1`) that removes command/code execution tools and `WebFetch`, confines file tools to the working directory, blocks `bypassPermissions`, and ignores user/project/local settings—designed for locked-down environments. The issue tracker shows 50 active items; top community concerns center on Windows Desktop stability, multi-account management in Claude Desktop, and a regression in the sticky prompt header (v2.1.247+).

---

## 2. Releases

| Version | Key Changes |
|---------|-------------|
| **[v2.1.250](https://github.com/anthropics/claude-code/releases/tag/v2.1.250)** | Bug fixes and reliability improvements |
| **[v2.1.248](https://github.com/anthropics/claude-code/releases/tag/v2.1.248)** | **New `--restricted` flag / `CLAUDE_CODE_RESTRICTED=1`**: strips built-in command/code tools and `WebFetch` (unless explicitly allowed via `--tools`), restricts file tools to CWD, refuses `bypassPermissions`, ignores user/project/local settings files. Targeted at secure/air-gapped deployments. |

---

## 3. Hot Issues (Top 10 by Community Impact)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| **[#18435](https://github.com/anthropics/claude-code/issues/18435)** | **Multi-account support in Claude Desktop** | 761 👍, 170 comments — #1 voted enhancement. Users need seamless switching between personal/work/org accounts without re-auth. | 🔥 Highest engagement; spans auth, IDE, desktop |
| **[#53247](https://github.com/anthropics/claude-code/issues/53247)** | **Windows Desktop launch failure (orphaned Job Object)** | HRESULT 0x80070020; requires logoff/reboot. Blocks Windows users entirely after a crash. | 18 👍, 29 comments — critical platform blocker |
| **[#61682](https://github.com/anthropics/claude-code/issues/61682)** | **GitHub connector "Connected" but no tools in Cowork (Windows)** | MCP integration silently broken; tools not exposed despite success status. | 24 👍, 24 comments — Cowork + MCP + Windows intersection |
| **[#49655](https://github.com/anthropics/claude-code/issues/49655)** | **Desktop update fails with 0x80073CF6 when CoworkVMService running** | Update pipeline collides with background service; forces manual cleanup. | 10 👍, 23 comments — CLOSED but recurring pattern |
| **[#82049](https://github.com/anthropics/claude-code/issues/82049)** | **Magic-link emails delayed 2–5 min since mid-July** | Auth flow latency directly impacts Claude Code session startup. | 36 👍, 19 comments — infra/auth regression |
| **[#34692](https://github.com/anthropics/claude-code/issues/34692)** | **Pre/PostToolUse hooks don't fire for subagent tool calls** | Hooks are primary extensibility mechanism; subagents bypass them silently. | 7 👍, 10 comments — CLOSED but architecture gap remains |
| **[#32364](https://github.com/anthropics/claude-code/issues/32364)** | **OpenTelemetry config support in Claude Code Web** | Observability gap for enterprise/web users; no OTel env var injection. | 35 👍, 8 comments — growing enterprise ask |
| **[#66440](https://github.com/anthropics/claude-code/issues/66440)** | **C# syntax highlighting disappears after brief moment (macOS)** | Editor UX regression; affects language server integration trust. | 10 👍, 8 comments |
| **[#88405](https://github.com/anthropics/claude-code/issues/88405)** | **Symlinked files in `.claude/rules/` not auto-loaded (docs claim they are)** | Documentation/implementation mismatch; breaks shared-rule workflows. | 4 👍, 6 comments |
| **[#90299](https://github.com/anthropics/claude-code/issues/90299)** | **Sticky prompt header stopped rendering in v2.1.247 (macOS regression)** | UI regression in current release; header is key navigation aid in long sessions. | 1 👍, 1 comment — fresh regression in v2.1.247 |

---

## 4. Key PR Progress

| PR | Status | Summary |
|----|--------|---------|
| **[#69226](https://github.com/anthropics/claude-code/pull/69226)** | CLOSED | Frontend-design skill updated to v1.1.0 — plugin version bump for installed copies. |

> Only 1 PR updated in the last 24h. The repository appears to be in a stabilization phase with focus on patch releases rather than feature merges.

---

## 5. Feature Request Trends (from all 50 issues)

| Theme | Representative Issues | Signal |
|-------|----------------------|--------|
| **Multi-account / profile management** | #18435 (761 👍), #78776 (disable cross-device sync), #90298 (verify `setup-token` org scope) | **Strongest demand** — users juggle personal/work/org identities across Desktop, CLI, Web |
| **Windows Desktop reliability** | #53247, #49655, #61682, #87710, #88988 | **Platform-specific crisis** — launch failures, update collisions, MCP/Cowork breakage |
| **Observability & enterprise tooling** | #32364 (OTel), #85477 (rules governance diagnostics), #67657 (OTel env vars in settings) | Growing need for audit trails, cost tracking, config validation |
| **Subagent / multi-agent robustness** | #84125 (LSP tool pruned from subagents), #90264 (background-task orphaning, drift), #34692 (hooks bypassed) | Multi-agent workflows exposing architecture gaps in tool inheritance & session management |
| **Security / restricted modes** | #88518 (strict read-before-write opt-in), #90326 (malware reminder false positives), #90327 (overzealous safeguards) | Tension between safety defaults and developer velocity; demand for granular controls |

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Windows Desktop is unreliable** | Launch failure (#53247), update failure (#49655), MCP tools missing (#61682, #88988), session history loss (#87710) | Windows users effectively blocked or forced to CLI/Web |
| **Auth/session management friction** | Magic-link delays (#82049), no multi-account switching (#18435), forced cross-device sync (#78776), token scope opacity (#90298), keychain prompt loops (#87348) | Daily workflow interruption; enterprise adoption blocker |
| **Regression cadence in patch releases** | Sticky header broken in v2.1.247 (#90299), Bash `\\` collapsing (#88561), Write tool lost read-before-write guard (#88518) | Eroding trust in auto-update; teams pin versions |
| **Subagent tool inheritance is broken** | LSP missing (#84125), hooks don't fire (#34692), fork permission mode lost (#89911) | Advanced multi-agent patterns unreliable |
| **Documentation ≠ behavior** | Symlinks in `.claude/rules/` not loaded (#88405), `env` block in settings ignored (#67657) | Wasted debugging time; feature expectations mismatched |

---

*Generated from `anthropics/claude-code` GitHub data (releases, issues, PRs) as of 2026-08-28.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-28

---

## 1. Today's Highlights

Three consecutive alpha releases (0.151.0-alpha.6→.8) shipped in the last 24 hours, signaling rapid iteration on the 0.151 series. The issue tracker shows intense community focus on Windows stability (login loops, headless launches, handshake failures) and TUI/CLI usability (command collapsing, prompt editing, directory management). Meanwhile, 18 PRs were closed today—mostly by automation bot `copyberry[bot]`—covering Guardian review hardening, history backend budgets, subagent service-tier propagation, and MCP/keymap infrastructure.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| `0.151.0-alpha.8` | Alpha | Latest in the 0.151 series; no changelog provided in release notes. |
| `0.151.0-alpha.7` | Alpha | Incremental alpha. |
| `0.151.0-alpha.6` | Alpha | Incremental alpha. |

*No stable release in this window. Alpha cadence suggests active development toward a 0.151 stable.*

---

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#39903](https://github.com/openai/codex/issues/39903) | **Add option to disable “Ran N commands” collapsing** | TUI usability: users want full command visibility instead of auto-collapsed output. | 33 comments, **60 👍** — highest engagement in this batch. |
| [#41049](https://github.com/openai/codex/issues/41049) | **Windows: code-mode host exited during handshake (5.6 model)** | Blocks GPT-5.6 on Windows; handshake failure prevents any tool execution. | 32 comments, 1 👍 — acute breakage for Windows Pro users. |
| [#35746](https://github.com/openai/codex/issues/35746) | **Paginated history drops valid rollout records & reuses ordinals** | Session integrity bug: history pagination loses/duplicates records, breaking replay/debug. | 31 comments, 1 👍 — long-standing (since 0.146), affects CLI power users. |
| [#32759](https://github.com/openai/codex/issues/32759) | **GPT-5.6 Sol fails shell commands: code-mode handshake exit** | Same handshake class as #41049 but on macOS; suggests cross-platform regression. | 18 comments, 5 👍. |
| [#40036](https://github.com/openai/codex/issues/40036) | **Windows 11 login loop after recent update** | Auth regression: users cannot sign in at all on latest Desktop build. | 14 comments. |
| [#11747](https://github.com/openai/codex/issues/11747) | **Add `/add-dir` slash command for mid-session directory access** | Workflow gap: `--add-dir` only works at startup; no way to expand scope live. | 14 comments, **45 👍** — high demand, open since Feb. |
| [#39678](https://github.com/openai/codex/issues/39678) | **Remote (Android→macOS) “No project” fails with trust error** | Remote control broken for mobile→desktop; blocks on-the-go workflows. | 11 comments, 6 👍. |
| [#41179](https://github.com/openai/codex/issues/41179) | **Windows Desktop 26.820.9563.0 launches headless (no window)** | Post-upgrade regression: app runs but creates no renderer/window. | 11 comments. |
| [#32309](https://github.com/openai/codex/issues/32309) | **High-frequency code-mode polling amplified by large resumed context** | Performance/cost issue: ~600M tokens/day vs expected 150–200M; polling loop suspected. | 10 comments, 4 👍. |
| [#35005](https://github.com/openai/codex/issues/35005) | **Option to edit earlier prompt in-place instead of forking** | UX friction: forced forking on prompt edit breaks linear workflow; users want a toggle. | 8 comments, **19 👍**. |

---

## 4. Key PR Progress (10 Notable Merges/Updates)

| # | PR | Summary | Impact |
|---|----|---------|--------|
| [#41313](https://github.com/openai/codex/pull/41313) | **Decouple HTTP retry backoff from overload integration testing** | Test reliability: removes flaky timing coupling in overload tests. | CI stability. |
| [#41309](https://github.com/openai/codex/pull/41309) | **Honor required reviews when reusing Guardian scores** | Security: prevents cached low-risk scores from bypassing mandatory reviews after model switch. | Guardian hardening. |
| [#41308](https://github.com/openai/codex/pull/41308) | **Make subagents follow the root service tier** | Consistency: subagents now inherit parent thread’s service tier (including remote compaction). | Multi-agent parity. |
| [#41292](https://github.com/openai/codex/pull/41292) | **Forward history note images to the model** | Multimodal: history backend now sends images as `input_image` function-call outputs. | Visual context in history. |
| [#41285](https://github.com/openai/codex/pull/41285) | **Drive keymap conflict checks from the action registry** | Maintainability: single source of truth for keybindings; eliminates duplicate action lists. | TUI configurability. |
| [#41260](https://github.com/openai/codex/pull/41260) | **Let history backend enforce tool output budgets** | Performance: removes redundant client-side truncation; backend already budgets before encryption. | Token efficiency. |
| [#41250](https://github.com/openai/codex/pull/41250) | **Include thread source in realtime connection metadata** | Observability: realtime voice calls now carry `thread_source` for origin tracking. | Debugging/replay. |
| [#41243](https://github.com/openai/codex/pull/41243) | **Add configurable gating for the sleep tool** | Extensibility: `sleep_tool` feature flag with `model_driven`/`always_on` modes. | Tool control granularity. |
| [#41239](https://github.com/openai/codex/pull/41239) | **Surface model provider auth recovery progress** | UX: emits `authRecoveryStarted`/`Completed` events during credential refresh. | Transparency on auth hiccups. |
| [#41223](https://github.com/openai/codex/pull/41223) | **Add recency sorting to `project/list`** | Discovery: projects now sortable by `recencyAt` (newest thread), default descending. | Project management. |

*Additional notable: [#10192](https://github.com/openai/codex/pull/10192) (TUI → app-server v2 migration) and [#15261](https://github.com/openai/codex/pull/15261) (Guardian transcript boundary storage) received updates today, indicating ongoing foundational work.*

---

## 5. Feature Request Trends

| Theme | Representative Issues | Signal |
|-------|----------------------|--------|
| **TUI/CLI workflow flexibility** | [#39903](https://github.com/openai/codex/issues/39903) (disable collapsing), [#35005](https://github.com/openai/codex/issues/35005) (in-place prompt edit), [#11747](https://github.com/openai/codex/issues/11747) (`/add-dir` mid-session) | 120+ 👍 combined; users want granular control over session UX. |
| **Windows Desktop stability** | [#41049](https://github.com/openai/codex/issues/41049), [#40036](https://github.com/openai/codex/issues/40036), [#41179](https://github.com/openai/codex/issues/41179), [#40761](https://github.com/openai/codex/issues/40761) | 4 distinct regressions in current Windows build (login, handshake, headless, auth loop). |
| **Remote/mobile ↔ desktop parity** | [#39678](https://github.com/openai/codex/issues/39678) (Android→macOS), [#35217](https://github.com/openai/codex/issues/35217) (SSH reconnect leaks), [#38128](https://github.com/openai/codex/issues/38128) (GrapheneOS enrollment) | Remote control is a growth surface with recurring trust/connection bugs. |
| **History/session fidelity** | [#35746](https://github.com/openai/codex/issues/35746) (pagination loss), [#41269](https://github.com/openai/codex/issues/41269) (3× stdout duplication), [#40512](https://github.com/openai/codex/issues/40512) (live projection drops output) | Developers rely on accurate replay; duplication wastes tokens/storage. |
| **Reasoning-mode limits** | [#41160](https://github.com/openai/codex/issues/41160) (remove 5-hour window for Extra High/Max/Ultra) | Power users hit caps on long-running agent workflows. |

---

## 6. Developer Pain Points (Recurring Frustrations)

1. **Windows is a second-class platform** — Four critical bugs in the current Desktop build (handshake failure, login loop, headless launch, auth-loop) all target Windows 10/11. Users on `26.820.*` builds are effectively blocked.

2. **Session history is lossy and bloated** — Pagination drops records (#35746), live projection diverges from JSONL (#40512), and stdout is stored 3–4× per command (#41269). This undermines debugging, replay, and token accounting.

3. **Forced forking on prompt edit breaks flow** — Since 0.145.0, editing an earlier prompt *always* forks (#35005). No in-place edit option exists despite 19 👍 and a clear config-toggle proposal.

4. **Remote/SSH reliability gaps** — SSH reconnect storms leak thousands of app-server processes on NFS homes (#35217); Android→macOS pairing fails on trust errors (#39678); GrapheneOS enrollment blocked by safety checks (#38128).

5. **Code-mode handshake failures across OSes** — Both Windows (#41049) and macOS (#32759) report `code-mode host exited during handshake` with GPT-5.6, suggesting a shared regression in the exec pipeline.

6. **No mid-session workspace expansion** — The 2.5-year-old request for `/add-dir` (#11747, 45 👍) remains open; users must restart CLI to add directories.

---

*Generated from github.com/openai/codex data (releases, 47 issues, 50 PRs updated 2026-08-27→28). Links point to live GitHub items.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-28

## 1. Today's Highlights
- **Nightly v0.59.0** shipped with core stability fixes: unique MCP tool name truncation, Git config sanitization consistency, and a fix for interrupted-response placeholders polluting history.
- **Subagent reliability** remains the top pain point: multiple P1 bugs track hangs, false "GOAL success" reports after turn limits, and ignored `settings.json` overrides.
- **Auto Memory** is under active hardening — three issues address indefinite retries, secret redaction timing, and invalid patch handling.

---

## 2. Releases
| Version | Type | Key Changes |
|---------|------|-------------|
| `v0.59.0-nightly.20260828.g3c311beac` | Nightly | Automated bump; includes fixes for MCP tool name collisions (#28971), Git config triplet consistency (#28938), interrupted response persistence (#28939), and `DEBUG` env boolean parsing (#28942). [Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.59.0-nightly.20260827.g3c311beac...v0.59.0-nightly.20260828.g3c311beac) |

---

## 3. Hot Issues (Top 10 by Impact & Discussion)

| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent reports **GOAL success** after hitting `MAX_TURNS` | Masks real failures; breaks trust in autonomous delegation. | 13 comments, 2 👍, P1, `status/need-retesting` |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent hangs** indefinitely on simple tasks | Blocks core workflow; workaround is disabling subagents. | 8 comments, 8 👍, P1 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell command **stuck at "Waiting input"** after completion | Frequent, high-friction UX break; affects simple commands. | 4 comments, 3 👍, P1 |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | Auto Memory **retries low-signal sessions indefinitely** | Wastes quota & latency; no backoff or quarantine. | 5 comments, P2 |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Auto Memory **redaction happens post-model-context** | Secrets enter model context before redaction; logging risk. | 4 comments, P2, `area/security` |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | **Browser subagent fails on Wayland** | Linux desktop adoption blocker; `sessionMode: persistent` broken. | 4 comments, 1 👍, P1, `agent/browser` |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | Browser Agent **ignores `settings.json` overrides** (e.g., `maxTurns`) | Configuration drift; users cannot tune agent behavior. | 3 comments, P2 |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | **400 error with >128 tools** | Tool explosion breaks agent; needs smarter scoping. | 3 comments, P2 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **AST-aware file ops** investigation (EPIC) | Strategic: could cut turns/tokens via precise code navigation. | 7 comments, 1 👍, P2 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Model **underuses skills/sub-agents** unless explicitly told | Reduces autonomy; skills system ROI undermined. | 6 comments, P2 |

---

## 4. Key PR Progress (Top 10 by Significance)

| # | Title | Status | Impact |
|---|-------|--------|--------|
| [#28971](https://github.com/google-gemini/gemini-cli/pull/28971) | **Fix: keep truncated MCP tool names unique** | Open | Prevents registry collisions when two tools share prefix/suffix after 30+30 char truncation. |
| [#28938](https://github.com/google-gemini/gemini-cli/pull/28938) | **Fix: keep `GIT_CONFIG_*` triplets consistent** | Open | Avoids unparsable Git config after redaction; stops sensitive values leaking post-sanitization. |
| [#28939](https://github.com/google-gemini/gemini-cli/pull/28939) | **Fix: avoid persisting interrupted response placeholder** | Open | Stops `[The previous response was interrupted…]` from becoming permanent model history. |
| [#28930](https://github.com/google-gemini/gemini-cli/pull/28930) | **Fix: drop unsafe `diff.external` override** | Open | Corrects empty-string override that broke internal diff; restores sandbox diff behavior. |
| [#28942](https://github.com/google-gemini/gemini-cli/pull/28942) | **Fix: strict boolean parsing for `DEBUG` env** | Open | `DEBUG=false/0` now respected; eliminates spurious debug logs in sandbox launcher. |
| [#29110](https://github.com/google-gemini/gemini-cli/pull/29110) | **Fix: route `read_file` through `FileSystemService`** | Open | Enables ACP clients with virtual FS to intercept reads; parity with `write_file`/`replace`. |
| [#29099](https://github.com/google-gemini/gemini-cli/pull/29099) | **Fix: fail-closed workspace trust & filter MCP servers** | Open | Hardens `@google/gemini-cli-a2a-server` startup in untrusted/restricted envs. |
| [#29106](https://github.com/google-gemini/gemini-cli/pull/29106) | **Fix: flush final SSE event on EOF** | Open | Recovers `finishReason`/usage metadata lost on truncated streams. |
| [#28926](https://github.com/google-gemini/gemini-cli/pull/28926) | **Docs: Windows `core.longpaths` setup** | Open | Unblocks Windows contributors hitting `MAX_PATH` on deep snapshot trees. |
| [#28804](https://github.com/google-gemini/gemini-cli/pull/28804) | **Feat: evals for `read_many_files`, `get_internal_docs`, MCP resources** | Closed | Expands behavioral test coverage for new tooling surface. |

---

## 5. Feature Request Trends
1. **AST-aware code navigation** (#22745, #22746, #19561) — surgical reads, method-level mapping, token frugality.
2. **Persistent, file-based task tracking** (#18836, #21000) — replace in-context `WriteToDo` with CRUD task files.
3. **Subagent observability & sharing** (#22598, #21763) — expose trajectories via `/chat share`, include in bug reports.
4. **Auto Memory quality & safety** (#26522, #26523, #26525) — backoff, quarantine, pre-context redaction.
5. **Browser agent hardening** (#22232, #21983, #22267) — session takeover, Wayland support, config adherence.
6. **Tool scoping & limits** (#24246, #22745) — dynamic tool selection to avoid 128+/400-tool ceilings.

---

## 6. Developer Pain Points (Recurring Themes)
- **Silent failures & false success**: Subagents report `GOAL` success after turn limits (#22323), browser agents terminate without error (#21983), shell commands show "awaiting input" post-completion (#25166).
- **Configuration ignored**: `settings.json` overrides for `maxTurns` etc. not respected by Browser Agent (#22267); symlinked agent files not loaded (#20079).
- **Resource leaks & noise**: Auto Memory re-processes low-signal sessions endlessly (#26522), logs pre-redaction content (#26525), and accepts invalid patches (#26523).
- **Platform friction**: Wayland breaks browser agent (#21983), Windows `MAX_PATH` blocks clones (#28926), terminal resize causes flicker (#21924).
- **Model autonomy gaps**: Skills/sub-agents unused unless prompted (#21968), destructive git commands not discouraged (#22672), tmp scripts scattered (#23571).

---

*Generated from `google-gemini/gemini-cli` GitHub data (issues & PRs updated 2026-08-28).*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-28

---

## 1. Today's Highlights

The v1.0.81 release (2026-08-27) shipped the **plugins dashboard** to all users with new `/plugin`, `/mcp`, and `/skills` commands, plus MCP 2026-07-28 spec support across CLI/SDK/IDE clients and OpenTelemetry propagation to hooks. However, the prerelease channel (1.0.81-*) has introduced regressions: `store_memory` failures due to missing instance IDs, TUI freezes from a runaway FileWatch loop, and broken GHEC data-residency authentication in prompt mode (`copilot -p`). A follow-up v1.0.82-0 was cut today with fixes.

---

## 2. Releases

| Version | Date | Key Changes |
|---------|------|-------------|
| **v1.0.82-0** | 2026-08-28 | Fixes and changes (details pending changelog) |
| **v1.0.81** | 2026-08-27 | • Plugins dashboard GA: `/plugin`, `/mcp`, `/skills` (opt-out via `PLUGINS_DASHBOARD=false`)<br>• MCP 2026-07-28 support shipped to CLI, SDK, IDE, and in-memory clients<br>• Hooks now receive current OpenTelemetry context |

> **Note:** v1.0.81 prereleases (1.0.81-1 through 1.0.81-11) are implicated in multiple regressions tracked below.

---

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| **[#4535](https://github.com/github/copilot-cli/issues/4535)** | `store_memory` fails in v1.0.81 prereleases: "Instance id is required" | Core memory persistence broken; native writer invoked without required instance ID. Blocks agent memory workflows. | 7 comments, author DavidTeju (Femi's agent: GPT-5.6 Sol) |
| **[#4612](https://github.com/github/copilot-cli/issues/4612)** | Runaway FileWatch host-event loop freezes TUI, grows debug log to 13 GB | Long-running sessions enter tight loop emitting `FileWatch` events; UI becomes unresponsive, disk fills. | 6 comments, 1 👍, author tdihp |
| **[#4533](https://github.com/github/copilot-cli/issues/4533)** | Terminal UI stops consuming events when turn spawns parallel subagents | TUI deadlocks on input/scroll while Rust runtime continues; subagents run for minutes unseen. | 4 comments, author bikramjitk |
| **[#4527](https://github.com/github/copilot-cli/issues/4527)** | `copilot -p` fails with 401 on GHEC data residency since 1.0.81-1 | Prompt mode hits `api.githubcopilot.com` instead of tenant endpoint; interactive mode works. Blocks enterprise non-interactive use. | 2 comments, 3 👍, author AvitalLivshits |
| **[#4602](https://github.com/github/copilot-cli/issues/4602)** | `store_memory` fails + all MCP servers stripped: managedSettings fails closed on serverFetchFailed flap | Single root cause (managedSettings fails closed) triggers two severe symptoms: memory write failure and MCP server removal. | 1 comment, author tabriggs |
| **[#4639](https://github.com/github/copilot-cli/issues/4639)** | Event-storage exhaustion retry storm → GC/compaction loop → Node OOM | Long sessions hit remote storage exhaustion; exporter retries 500-event flushes, forcing GC/emergency compaction until OOM. | 1 comment, author justinchuby |
| **[#4647](https://github.com/github/copilot-cli/issues/4647)** | v1.0.81 broke compatibility with chroma-mcp | Popular vector-store MCP server fails post-upgrade; config unchanged. | 1 comment, author janwilch |
| **[#4629](https://github.com/github/copilot-cli/issues/4629)** | Plugin hooks not loaded when session resumed via `--resume` | Hooks fire on fresh sessions but silently skipped on resume; breaks plugin continuity. | 1 comment, author DDKinger |
| **[#4646](https://github.com/github/copilot-cli/issues/4646)** | Compaction fails with "CAPIError: 400 Tool choice must be auto" on custom models | Manual `/compact` and auto-compaction break for custom models (e.g., OpenRouter-registered); blocks context management. | 0 comments (new), author neorack |
| **[#4645](https://github.com/github/copilot-cli/issues/4645)** | `session.resume` silently ignores `model` parameter; persisted model wins | Resume with different model drops requested model without error; next inference uses stale model. | 0 comments (new), author jerry-santana |

---

## 4. Key PR Progress

**No pull requests updated in the last 24 hours.**  
*(The repository shows 0 PRs with recent activity. Fixes for the above issues are likely landing via internal branches or will appear in upcoming PRs.)*

---

## 5. Feature Request Trends

From the issue corpus, the community is converging on these directions:

| Trend | Representative Issues | Signal |
|-------|----------------------|--------|
| **Session continuity & resume semantics** | [#4642](https://github.com/github/copilot-cli/issues/4642) (`--name` create-or-resume), [#4645](https://github.com/github/copilot-cli/issues/4645) (model param ignored on resume), [#4629](https://github.com/github/copilot-cli/issues/4629) (hooks lost on resume) | 3 issues, 0 comments each (fresh asks) |
| **Observability & debugging hooks** | [#4640](https://github.com/github/copilot-cli/issues/4640) (steering messages skip `userPromptTransformed`), [#4637](https://github.com/github/copilot-cli/issues/4637) (duplicate skill lookup noise), [#4641](https://github.com/github/copilot-cli/issues/4641) (JSON Schema for settings.json) | 3 issues |
| **MCP ecosystem hardening** | [#4647](https://github.com/github/copilot-cli/issues/4647) (chroma-mcp breakage), [#4636](https://github.com/github/copilot-cli/issues/4636) (additional-mcp-config removed at startup), [#1385](https://github.com/github/copilot-cli/issues/1385) (explicit command rewritten to pipx) | 3 issues spanning 6 months |
| **Enterprise / data residency** | [#4527](https://github.com/github/copilot-cli/issues/4527) (GHEC prompt-mode auth), [#4650](https://github.com/github/copilot-cli/issues/4650) (enterprise login blocks `-p`/`--agent`) | 2 issues, 3 👍 on #4527 |
| **Compaction transparency & control** | [#4643](https://github.com/github/copilot-cli/issues/4643) (compaction at 20% usage, no checkpoint record), [#4646](https://github.com/github/copilot-cli/issues/4646) (compaction fails on custom models) | 2 issues |
| **Auditability of agent reviews** | [#4621](https://github.com/github/copilot-cli/issues/4621) (rubber duck reviews leave no verifiable record) | 1 issue, links #4380/#4432 |

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Prerelease regressions breaking core workflows** | #4535 (memory), #4533 (TUI deadlock), #4527 (GHEC auth), #4647 (MCP compat), #4636 (additional MCP config dropped) — all traced to 1.0.81-* | 5+ issues in 48h |
| **Long-running session instability** | #4612 (FileWatch loop → 13 GB logs), #4639 (event-storage exhaustion → OOM), #4486 (permission timeouts overnight) | 3 issues |
| **Silent failures / missing feedback** | #4645 (model param ignored silently), #4629 (hooks not loaded silently), #4643 (compaction claims checkpoint but none exists), #4556 (marketplace fetched but not registered) | 4 issues |
| **Enterprise / GHEC data-residency gaps** | #4527 (prompt mode hits wrong endpoint), #4650 (auth fails with `-p`/`--agent`), #4602 (managedSettings fails closed) | 3 issues, 3 👍 on #4527 |
| **MCP server lifecycle fragility** | #4647 (chroma-mcp broken), #4636 (additional config removed), #1385 (command rewritten), #3576 (Windows npx spawn — closed but recent update) | 4 issues across versions |
| **TUI rendering & input bugs** | #4612 (freeze), #4648 (black input background), #4533 (input/scroll dead), #4614 (macOS MallocStackLogging noise) | 4 issues |

---

## Quick Links

- **Repository:** [github/copilot-cli](https://github.com/github/copilot-cli)
- **Releases:** [github.com/github/copilot-cli/releases](https://github.com/github/copilot-cli/releases)
- **Issues (all):** [github.com/github/copilot-cli/issues](https://github.com/github/copilot-cli/issues)
- **v1.0.81 release notes:** See release entry above

---

*Digest generated 2026-08-28 from GitHub data (last 24h). For real-time updates, watch the repository.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-28

## Today's Highlights
No new releases shipped today. The community surfaced a **critical Plan-mode regression** in v0.38.0 (K3) where the agent enters an infinite Bash/ReadFile loop instead of emitting a plan. Two documentation gaps were flagged: an `openai_legacy` provider example and a heated developer complaint about API ergonomics (empty `content` with `tool_calls` causing 400 errors). Three security/bug-fix PRs advanced, notably an `asyncssh` CVE patch and a hook-content extraction fix.

---

## Releases
*No releases published in the last 24 hours.*

---

## Hot Issues

| # | Title | Status | Why It Matters | Community Signal |
|---|-------|--------|----------------|------------------|
| [#2623](https://github.com/MoonshotAI/kimi-cli/issues/2623) | Plan mode: agent loops indefinitely on Bash echo / ReadFile instead of writing plan (kimi-code 0.38.0, K3) | 🟢 OPEN | **Regression in latest release** — Plan mode unusable; agent spins on `echo`/`ReadFile` instead of calling `ExitPlanMode`. Blocks planning workflow for K3 users. | 1 comment, created today |
| [#2621](https://github.com/MoonshotAI/kimi-cli/issues/2621) | 开发 Kimi API 都是吃 **** 的吗？ \| API returns 400 when echoing model's own empty-content tool-call message | 🟢 OPEN | **Developer experience fire** — Model emits `tool_calls` with empty `content`; sending it back yields `400: text content is empty`. Forces every integrator to add a workaround. | 1 👍, strong language indicates deep frustration |
| [#2624](https://github.com/MoonshotAI/kimi-cli/issues/2624) | docs: openai_legacy hosted /v1 example (not openai_responses, not /login) | 🟢 OPEN | **Doc gap for BYO OpenAI-compatible endpoints** — `type: openai_legacy` vs `openai_responses` confusion; base URL format (`/v1` vs `/`) undocumented. | Filed by `cursor[bot]` (automated doc sweep) |
| [#1211](https://github.com/MoonshotAI/kimi-cli/issues/1211) | Notion Remote MCP creds are not stored beyond active session | 🔴 CLOSED | Long-standing auth persistence bug for Notion MCP; finally resolved after 6 months. | 3 comments, closed today |
| [#1272](https://github.com/MoonshotAI/kimi-cli/issues/1272) | jetbrains-ai-assistant ACP: file references not recognized | 🔴 CLOSED | IDE integration friction — files dropped in JetBrains chat not auto-recognized by Kimi via ACP. | 1 comment, closed today |
| [#1279](https://github.com/MoonshotAI/kimi-cli/issues/1279) | Feature Request: Native git-ai integration for AI code attribution | 🔴 CLOSED | Request for vendor-agnostic AI attribution standard (`git-ai`) support in `git blame`. Closed without implementation. | 0 comments, closed today |

---

## Key PR Progress

| # | Title | Status | Impact |
|---|-------|--------|--------|
| [#2622](https://github.com/MoonshotAI/kimi-cli/pull/2622) | deps: bump asyncssh to 2.23.1 in pykaos (GHSA-2wxc-x7rj-hg8f) | 🟢 OPEN | **Security patch** — Fixes two CVEs in SSH dependency used by `pykaos` workspace. Urgent for any deployment using SSH remotes. |
| [#2176](https://github.com/MoonshotAI/kimi-cli/pull/2176) | fix(hooks): extract text from ContentPart for UserPromptSubmit hook | 🟢 OPEN | **Hook reliability** — `UserPromptSubmit` hook received empty `prompt`/`matcher_value` when `user_input` is `list[ContentPart]` (default). Fixes regex matching & prompt inspection for all non-string inputs. |
| [#2595](https://github.com/MoonshotAI/kimi-cli/pull/2595) | fix(StrReplaceFile): refuse to edit files that are not valid UTF-8 | 🟢 OPEN | **Data integrity** — `StrReplaceFile` previously corrupted binary/non-UTF8 files by replacing invalid bytes with U+FFFD on *entire file* write. Now refuses edit with clear error. |

---

## Feature Request Trends
1. **IDE/Editor Integration Depth** — JetBrains ACP file handling (#1272), git-ai blame attribution (#1279)  
2. **MCP/Remote Auth Persistence** — Notion creds survival across sessions (#1211)  
3. **Provider Config Ergonomics** — Clearer `openai_legacy` vs `openai_responses` docs (#2624)  
4. **Plan/Task Mode Reliability** — Infinite-loop regression shows demand for stable multi-step planning (#2623)

---

## Developer Pain Points
| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **API message-format fragility** | Empty `content` + `tool_calls` round-trips cause 400; every wrapper must sanitize (#2621) | High (vocal, affects all API consumers) |
| **Plan-mode instability** | v0.38.0 K3 loops on tool calls instead of exiting plan (#2623) | Critical (blocks core workflow) |
| **Hook system type gaps** | `ContentPart[]` not handled in `UserPromptSubmit` (#2176) | Medium (affects automation authors) |
| **Binary file corruption risk** | `StrReplaceFile` mangled non-UTF8 files silently (#2595) | Medium (data-loss potential) |
| **MCP credential volatility** | Notion tokens lost on session end (#1211) | Medium (resolved, but pattern may exist elsewhere) |

---

*Digest generated from GitHub data as of 2026-08-28 00:00 UTC. Links point to live issues/PRs.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-28

## 1. Today's Highlights

Two patch releases (v1.18.24–25) shipped with critical Azure authentication fixes and Bedrock reasoning caching corrections. The issue tracker saw a surge of 15+ new bugs today—many from a single contributor—covering editor tooling regressions (glob, edit, webfetch, formatters), terminal WebSocket path normalization, and subscription/billing discrepancies. Multiple PRs are already open addressing these regressions, signaling rapid triage.

## 2. Releases

### v1.18.25 (2026-08-28)
- **Core bugfix**: Azure CLI sign-in now works without requiring Bun runtime.  
  → [Release](https://github.com/anomalyco/opencode/releases/tag/v1.18.25)

### v1.18.24 (2026-08-28)
- **Bugfix**: Bedrock reasoning responses no longer cached into unreplayable empty messages.  
- **Improvement**: Azure providers support Microsoft Entra ID via Azure CLI (no API key required).  
- **Improvement**: V1 reads supported V2 config fields for forward compatibility.  
  → [Release](https://github.com/anomalyco/opencode/releases/tag/v1.18.24)

## 3. Hot Issues (Top 10 by Impact & Activity)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#785](https://github.com/anomalyco/opencode/issues/785) | **Disable streaming mode?** | Proxy providers (e.g., Credal) lack streaming support; blocks enterprise adoption. | 38 👍, 33 comments — long-standing, high-demand |
| [#6536](https://github.com/anomalyco/opencode/issues/6536) | **Mobile app** | Users want native mobile access beyond browser; closed but signals strong demand. | 49 👍, 16 comments |
| [#37815](https://github.com/anomalyco/opencode/issues/37815) | **Kimi K3 model fails on Console Go** | Specific model regression; other Console Go models work. | 8 👍, 8 comments |
| [#45278](https://github.com/anomalyco/opencode/issues/45278) | **Payment declined after 3 months** | Billing reliability issue; card unchanged, bank confirms valid. | 7 comments, 1 👍 |
| [#32985](https://github.com/anomalyco/opencode/issues/32985) | **GNU Screen compatibility** | No truecolor, broken copy/paste, no mouse in Screen 4.09. | 3 👍, 4 comments |
| [#33940](https://github.com/anomalyco/opencode/issues/33940) | **Undo reverts all sessions** | Cross-session undo corruption; critical for multi-session workflows. | 2 👍, 4 comments |
| [#41206](https://github.com/anomalyco/opencode/issues/41206) | **Go quota vs usage history mismatch** | Billing transparency; quota doesn't match visible usage. | 1 👍, 4 comments |
| [#45890](https://github.com/anomalyco/opencode/issues/45890) | **api.opencode.net wrong TLS cert (CN=git.opendesktop.org)** | **Production API outage since ~08:30 UTC**; all API calls fail. | 0 👍, 0 comments (new, critical) |
| [#36423](https://github.com/anomalyco/opencode/issues/36423) | **v2 subagent: no resume/steer** | Regression from v1 `task` tool; background agents uncontrollable. | 3 👍, 3 comments |
| [#45897](https://github.com/anomalyco/opencode/issues/45897) | **Go plan: advertised $30/wk vs actual $7.5/wk** | Potential false advertising claim; pricing transparency. | 0 👍, 2 comments |

## 4. Key PR Progress (Top 10 by Significance)

| # | PR | Type | Description |
|---|----|------|-------------|
| [#45915](https://github.com/anomalyco/opencode/pull/45915) | **fix** | Binds formatter subprocesses with timeout (closes #45908); prevents session hangs from `mix format`, `ktlint`, etc. |
| [#45903](https://github.com/anomalyco/opencode/pull/45903) | **fix** | `webfetch` now decodes using `Content-Type` charset + HTML `<meta charset>` (closes #45902); fixes mojibake on GBK/Shift_JIS/ISO-8859-1. |
| [#45906](https://github.com/anomalyco/opencode/pull/45906) | **fix** | `webfetch` converts `application/xhtml+xml` responses (closes #45905); was returning raw XML tag soup. |
| [#45898](https://github.com/anomalyco/opencode/pull/45898) | **fix** | `glob` V2 now requires `external_directory` approval when escaping active Location (closes #45896); security hardening. |
| [#45894](https://github.com/anomalyco/opencode/pull/45894) | **fix** | `edit` tool writes `newString` literally, no `$` pattern expansion (closes #45892); prevented silent file corruption. |
| [#45888](https://github.com/anomalyco/opencode/pull/45888) | **fix** | `edit` matches LF regions in mixed-ending files (closes #45880); read strips `\r`, edit now handles correctly. |
| [#45900](https://github.com/anomalyco/opencode/pull/45900) | **fix** | Normalizes terminal WebSocket path (closes #45891); fixes double-slash when server URL ends with `/`. |
| [#45886](https://github.com/anomalyco/opencode/pull/45886) | **fix** | Bash timeout settlement preserves captured output (closes #45881); partial output no longer lost on timeout. |
| [#45103](https://github.com/anomalyco/opencode/pull/45103) | **feat** | Desktop: deep links to open existing sessions (`opencode://open-session?...`); closes #44167. |
| [#28326](https://github.com/anomalyco/opencode/pull/28326) | **feat** | `--base-path` flag for reverse proxy deployments (closes #7624); long-awaited self-hosting enablement. |

## 5. Feature Request Trends

1. **Non-streaming / proxy compatibility** — #785 (38 👍) shows enterprises blocked by streaming-only providers.
2. **Native mobile/desktop experience** — #6536 (49 👍) + #45103 (deep links) + #45889 (WSL sidecar restart) indicate strong demand for first-class desktop & mobile apps.
3. **Subagent/agent control parity with v1** — #36423 requests resume/steer for background agents; regression from v1 `task` tool.
4. **Billing transparency & quota accuracy** — #41206, #45278, #45899, #45907, #45893 cluster around subscription mismatches and declined payments.
5. **Self-hosting / reverse proxy support** — #28326 (base path) and related infra work show growing on-prem interest.

## 6. Developer Pain Points (Recurring Frustrations)

- **Editor tooling regressions in V2**: Today alone, 7+ issues filed by one contributor (`skyzhao1223`) on `glob`, `edit`, `webfetch`, `read`, `apply_patch`, formatters — suggesting V2 tool parity is incomplete.
- **Terminal integration fragility**: GNU Screen (#32985), WebSocket double-slash (#45891), WSL sidecar restart (#45889) — terminal UX remains a weak spot.
- **Session state bugs**: Cross-session undo (#33940), async prompt status stuck busy (#45607), session switching perf (#45887).
- **Billing/subscription opacity**: Multiple users report quota mismatches, declined cards, inactive subscriptions despite payment — erodes trust in Go plan.
- **API reliability**: TLS cert mismatch on `api.opencode.net` (#45890) caused immediate outage; no status page visibility noted.

---

*Generated from github.com/anomalyco/opencode data as of 2026-08-28. Links point to live GitHub items.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-28

## 1. Today's Highlights
The TUI rendering pipeline remains the top friction area: multiple reports of text rendering as one-word-per-line, soft breaks treated as hard breaks, and thinking blocks fragmenting across lines — especially after long tool output or with certain providers (OpenRouter GLM, DeepSeek, Kimi). Simultaneously, provider integration bugs surfaced across OpenAI Responses (compaction `tool_choice` error), Bedrock (usage normalization), and OpenRouter `:free` models (excessive `max_tokens`). A Windows-specific regression where `!`-prefixed shell commands ignore `settings.shellPath` was patched the same day.

## 2. Releases
No new releases in the last 24 hours.

## 3. Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#2870](https://github.com/earendil-works/pi/issues/2870) | **Follow XDG Base Directory** | Linux config still clutters `$HOME` instead of `$XDG_CONFIG_HOME`; 52 👍, 20 comments — long-standing standards compliance gap. | High: 52 👍, multi-year request |
| [#8584](https://github.com/earendil-works/pi/issues/8584) | **TUI row corruption during streaming** | Assistant text renders one word/line after long tool output; blocks readability in daily use. | 14 comments, 6 👍 — active regression |
| [#6922](https://github.com/earendil-works/pi/issues/6922) | **Default llama.cpp model shows "No models available"** | Blocks local-model users on startup; 14 👍, 12 comments. | 14 👍 — core workflow blocker |
| [#8673](https://github.com/earendil-works/pi/issues/8673) | **Soft line breaks render as hard breaks** | Thinking blocks and markdown paragraphs become ragged single-line fragments; root cause in `marked` parser. | 4 comments, 2 👍 — fixed via #8674 |
| [#8675](https://github.com/earendil-works/pi/issues/8675) | **TUI renders text one word per line (WSL2)** | Consistent repro on Windows Terminal; same symptom as #8621. | 3 comments, 4 👍 — platform-specific |
| [#8774](https://github.com/earendil-works/pi/issues/8774) | **Compaction fails on OpenAI Responses: `tool_choice` without tools** | Breaks `/compact`, threshold, and overflow recovery for Responses API users. | 2 comments — critical for compaction users |
| [#8762](https://github.com/earendil-works/pi/issues/8762) | **Session selector parses entire JSONL for every session** | `--resume`/Ctrl+R slow with large sessions; only names needed for list. | 2 comments — perf regression |
| [#8761](https://github.com/earendil-works/pi/issues/8761) | **Expose fullscreen TUI `openUrl` handler to extensions** | Hardcoded `openBrowser`; extensions can't override link handling. | 2 comments — extensibility gap |
| [#8757](https://github.com/earendil-works/pi/issues/8757) | **Tool-argument validator missing object→string coercion** | Mirror of existing string→object fix; breaks `write`/`edit` content "must be string". | 2 comments — symmetry bug |
| [#8711](https://github.com/earendil-works/pi/issues/8711) | **TUI pegs 100% CPU streaming OpenRouter thinking (GLM-5.3-flash)** | `reasoning_details` stored as one object/token; session degrades until restart. | 2 comments, 1 👍 — perf + memory leak |

## 4. Key PR Progress (Top 10 by Impact)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#8674](https://github.com/earendil-works/pi/pull/8674) | **Fix** | Render markdown soft breaks as spaces, not hard breaks — fixes #8673. |
| [#8764](https://github.com/earendil-works/pi/pull/8764) | **Fix** | Honor `settings.shellPath` for `!`-prefixed config/header commands on Windows — fixes #8763. |
| [#8766](https://github.com/earendil-works/pi/pull/8766) | **Feature** | Compact, file-focused `write`/`edit` output with line numbers and diff-style preview. |
| [#6848](https://github.com/earendil-works/pi/pull/6848) | **Fix** | Retry with exponential backoff for compaction summarization stream failures — fixes #6647. |
| [#8262](https://github.com/earendil-works/pi/pull/8262) | **Feature** | Dispatch `input`/`before_agent_start` hooks on *every* turn-start path (including `sendCustomMessage(triggerTurn: true)`). |
| [#8731](https://github.com/earendil-works/pi/pull/8731) | **Feature** | Opt-in `copyOnSelect` toggle; `Ctrl+X` copies selection when disabled — addresses #7720. |
| [#8723](https://github.com/earendil-works/pi/pull/8723) | **Fix** | Expose `https-proxy-agent` named export for plugin bundling — fixes #8610. |
| [#8743](https://github.com/earendil-works/pi/pull/8743) | **Fix** | Ignore stale Kitty image conversions; tie cache to source image version. |
| [#7602](https://github.com/earendil-works/pi/pull/7602) | **Feature** | Configurable summarization models & thinking levels for compaction/branch summaries — closes #7553. |
| [#3106](https://github.com/earendil-works/pi/pull/3106) / [#6248](https://github.com/earendil-works/pi/pull/6248) | **Fix** | Stop padding TUI lines with trailing spaces (breaks copy-paste in xterm.js/VS Code terminal). |

## 5. Feature Request Trends
1. **TUI rendering fidelity** — soft-break handling, word-wrapping, thinking-block flow, table column selection, copy-paste hygiene (trailing spaces, overlay exclusion).
2. **Provider parity & normalization** — Bedrock usage accounting, OpenRouter `:free` model limits, OpenAI Responses API compaction, DeepSeek `reasoning_content` replay, llama.cpp default model support.
3. **Extension API surface** — `openUrl` handler, hook dispatch on all turn paths, configurable summarization models, shell command resolution via settings.
4. **Session/performance** — lazy session metadata loading, compaction retry/resilience, CPU/memory leaks during streaming.
5. **Configuration ergonomics** — XDG Base Directory compliance, JSONC (comments/trailing commas) for settings, Windows shell-path respect.

## 6. Developer Pain Points
- **Daily-driver TUI bugs**: One-word-per-line rendering, fragmented thinking blocks, and trailing-space pollution make copy-paste and reading output painful — especially after tool calls or with reasoning models.
- **Provider integration fragility**: Compaction fails silently on OpenAI Responses; Bedrock double-counts cache tokens; OpenRouter free models exceed `max_tokens`; DeepSeek requires `reasoning_content` on replay.
- **Windows second-class experience**: `!`-shell commands ignore configured shell; Kitty keyboard protocol breaks dictation paste; WSL2 triggers distinct rendering bugs.
- **Extension limitations**: No way to customize link handling, hook gaps on programmatic turn starts, no access to proxy agent, no session-list performance hooks.
- **Config friction**: Non-XDG config location, strict JSON (no comments), shell-path ignored in key resolution paths.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-28

---

## 1. Today's Highlights

The project shipped a new nightly build (`v0.22.2-nightly.20260828.7357136dd1`) with fixes for web-shell session persistence and DingTalk channel formatting. Meanwhile, the triage workflow is being hardened against GitHub API size limits, and CI reliability improvements are rolling out to prevent disk-pressure failures and orphaned `.qwen` state. A main-branch E2E test failure was auto-reported, signaling ongoing stabilization work.

---

## 2. Releases

### v0.22.2-nightly.20260828.7357136dd1
**Key changes:**
- `fix(web-shell)`: Restored saved session diffs ([#10093](https://github.com/QwenLM/qwen-code/pull/10093))
- `fix(channels)`: Preserved DingTalk rich-text multi-part formatting (truncated in notes)

> Nightly builds are published daily; this one addresses session-state regression in the web shell and a channel formatting bug.

---

## 3. Hot Issues (Top 5 from last 24h)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#10210](https://github.com/QwenLM/qwen-code/issues/10210) | **Agent Team: `team_delete` reports success after filesystem cleanup fails** | Core multi-agent reliability bug — silent cleanup failures leave orphaned state, breaking subsequent team ops. | 4 comments, P2, `welcome-pr` |
| [#10322](https://github.com/QwenLM/qwen-code/issues/10322) | **Triage Stage 1-pre subsumption check breaks silently at contents-API size ceiling** | Per-file `gh api contents` calls hit GitHub's 1 MB/base64 limit on large files, causing silent triage failures. | 3 comments, P2, CI/CD impact |
| [#10391](https://github.com/QwenLM/qwen-code/issues/10391) | **Web shell: session group assignments disappear after `qwen serve` restart** | Persistence bug in web-shell session management — groups render empty post-restart, sessions fall back to "ungrouped". | 2 comments, P2, UX regression |
| [#10392](https://github.com/QwenLM/qwen-code/issues/10392) | **CI: extend protected qwen leftover sweep to `review-pr` job's base checkout** | Follow-up to #10214; prevents orphaned `.qwen` trees from poisoning PR validation runs. | 2 comments, CI hardening |
| [#10395](https://github.com/QwenLM/qwen-code/issues/10395) | **Main CI failed: E2E Tests on d853f09f520b** | Auto-filed failure tracker for a pre-test CI crash; blocks merge queue until resolved. | 1 comment, `autofix/in-progress` |

---

## 4. Key PR Progress (Top 10 by significance)

| # | PR | Type | Summary |
|---|-----|------|---------|
| [#10396](https://github.com/QwenLM/qwen-code/pull/10396) | **fix(triage)** | Replaces per-file contents-API downloads with constant-cost `gh pr diff` comparison for Stage 1-pre subsumption — fixes #10322. |
| [#10394](https://github.com/QwenLM/qwen-code/pull/10394) | **ci** | Adds `check-disk-floor.sh` pre-flight gate for heavy self-hosted jobs (Test, web-shell smoke, merge-queue); samples disk/inode pressure. |
| [#10390](https://github.com/QwenLM/qwen-code/pull/10390) | **feat(web-shell)** | Unblocks "Update Project" on dirty working tree — shows resolution panel (stash/commit) instead of opaque error. |
| [#10397](https://github.com/QwenLM/qwen-code/pull/10397) | **feat(web-shell)** | Branch picker now shows git state hints (ahead/behind/diverged) beside Update/Commit/Push actions. |
| [#10384](https://github.com/QwenLM/qwen-code/pull/10384) | **ci** | Extracts no-AK integration gate into its own CI job (`Integration Tests (no-AK, No Sandbox)`) for clearer signal. |
| [#10352](https://github.com/QwenLM/qwen-code/pull/10352) | **feat(core)** | Forwards bounded MCP tool arguments to AUTO-mode classifier (was empty `{}`), improving tool-selection accuracy. |
| [#10269](https://github.com/QwenLM/qwen-code/pull/10269) | **fix(serve)** | Hot-reloads runtime model providers on install/delete — rebuilds ACP child env & reloads workspace settings without restart. |
| [#10214](https://github.com/QwenLM/qwen-code/pull/10214) | **fix(ci)** | Recovers protected `.qwen` leftovers (`.qwen`, `.qwen.root-orig`) before checkout via `if: always()` ownership restore. |
| [#9740](https://github.com/QwenLM/qwen-code/pull/9740) | **feat(review)** | Makes `/review` Step 4 execution-grade: adds `qwen review ab-drive` to run one script against PR & base trees, paired capture. |
| [#8583](https://github.com/QwenLM/qwen-code/pull/8583) | **feat(web-shell)** | Experimental **Session Workflow Cockpit** — plan capture, revision-bound approval, transcript projection, Agent execution, WebShell unified. |

---

## 5. Feature Request Trends

From the active PR/issue landscape, three clear directions emerge:

1. **Workflow & Session Orchestration**  
   - Session groups, workflow cockpit (#8583), daemon-exposed task controls (#9546), scoped memory tasks (#9895) — developers want first-class, persistent, multi-session workflows with approval gates and lineage.

2. **Review & Verification Automation**  
   - Execution-grade review (#9740), AB-drive differential testing, content-filter-aware probe trees (#9741) — shift toward *running* verification, not just static analysis.

3. **CI/CD Resilience & Observability**  
   - Disk-floor gating (#10394), leftover sweeps (#10214, #10392), no-AK gate isolation (#10384), silent API ceiling fixes (#10322) — heavy investment in making self-hosted CI deterministic and debuggable.

---

## 6. Developer Pain Points

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Silent CI/API failures** | Contents-API size ceiling (#10322), E2E pre-test crash (#10395), disk-pressure OOM | High — 3+ issues/PRs in 24h |
| **Session/web-shell state loss** | Group assignments vanish on restart (#10391), session diffs not restored (fixed in nightly) | Recurring — multiple web-shell PRs targeting persistence |
| **Orphaned `.qwen` state poisoning runs** | Containerized `/verify` makes `.qwen` root-owned RO; abrupt termination leaves leftovers (#10214, #10392) | Structural — affects CI, review-pr, merge queue |
| **MCP tool opacity in AUTO mode** | Classifier saw `Arguments: {}` for all MCP tools (#10352) | Targeted fix in progress |
| **Dirty-working-tree dead ends** | "Update Project" blocked with no resolution path (#10390) | UX friction — now addressed with stash/commit panel |

---

*Generated from GitHub data for QwenLM/qwen-code on 2026-08-28. All links point to live issues/PRs.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-28

## Today's Highlights
The project is in a heavy infrastructure and provider-expansion sprint. A coordinated batch of PRs (#5682–#5687) adds **provider-native web search for DeepSeek, Qwen, Moonshot/Kimi, Z.AI/BigModel, and Xiaomi MiMo**, closing the parity gap with OpenAI/Anthropic/xAI routes. Simultaneously, the maintainers are rescuing the MCP/plugin session-boot UX (#5658, #5677) and continuing the monolith-decomposition epic (#5249) to cut the 682k-line `codewhale-tui` crate's compile tax.

## Releases
No new releases in the last 24 hours.

## Hot Issues
| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| **#5620** [bug] Context pressure warning is transient; agent doesn’t react | Silent context degradation defeats a key safety signal; medium severity but high reliability impact. | 9 comments, active discussion since 08-26 |
| **#5587** Dead-code sweep phases 2–4: 75 test-only markers, ~242 stale `allow(dead_code)` | Systematic cleanup of 379 `allow(dead_code)` sites; reduces noise and enables stricter lints. | 4 comments, author-driven (Hmbown) |
| **#5579** Plugin UX parity with Claude Code: proactive recommendations, reload discoverability, hot-reload | Direct user request to match Claude Code’s plugin ergonomics; high visibility for extensibility. | 3 comments, enhancement label |
| **#4402** v0.9.2 Attention UX: focus-aware notifications, action-required title state, return recap | Unifies fragmented attention signals (notifications, title, task state) into a coherent contract. | 2 comments, multi-label (doc, ux, reliability) |
| **#5668** v0.9.12: add `/copy` for last completed model output | Frequent friction point—users currently manual-select terminal text after long turns. | 2 comments, clear scope |
| **#5249** Epic: v0.9.5 build-time lane — stop the monolith tax | 86% of workspace lives in one 682k-line crate; invalidates on every commit/test/release. | 2 comments, epic, performance-critical |
| **#5681** Extend provider-native web search to DeepSeek, Qwen, Kimi, Z.AI/BigModel, MiMo | Tracks the feature gap now being closed by PRs #5683–#5687. | 0 comments, created today |

## Key PR Progress
| PR | Status | Summary |
|----|--------|---------|
| **#5683** | CLOSED | DeepSeek native search adapter (Responses `web_search` tool contract) |
| **#5684** | OPEN | Qwen native search for `qwen3.8-max`, `qwen3.7-plus`, `qwen3.7-max` on ModelStudio |
| **#5685** | OPEN | Z.AI/BigModel native search (`search-prime` on `api.z.ai`, `search_std` on `open.bigmodel.cn`) |
| **#5686** | OPEN | Moonshot/Kimi native search (K3 Formula, legacy K2.6 `$web_search`, Kimi Code `/search`) |
| **#5687** | OPEN | Xiaomi MiMo native search for `mimo-v2.5-pro` / `mimo-v2.5` |
| **#5682** | CLOSED | Enforce native-search constraints before fallback; empty native results → explicit fallback receipts |
| **#5677** | CLOSED | Rescue MCP/plugin session boot UX: surface connecting servers on first frame, parallel connect, richer status |
| **#5658** | CLOSED | Original MCP/plugin boot surfacing (Hunter’s 22s invisible boot) — now rescued onto main |
| **#5679** | CLOSED | Keep tool-result batches contiguous; defer images until batch valid; reject duplicate/orphan tool-call IDs |
| **#5666** | CLOSED | Gate 13 audited test-only helpers with `#[cfg(test)]` (first slice of #5587 dead-code sweep) |
| **#5680** | CLOSED | Retire stale release-note gate `changelog_declares_fingerprint_persisted_key_change` |
| **#5669** | CLOSED | Update nixpkgs (fixes 403 on crates.io); add monthly dependabot for nixpkgs |

*Dependency bumps (futures-util, async-trait, uuid, jsonschema, rio-vt, next, typescript, tailwindcss) omitted for brevity but all landed/updated today.*

## Feature Request Trends
1. **Provider-native tooling parity** — Web search, and by extension other provider-native tools (code execution, file search), for every first-party route (DeepSeek, Qwen, Kimi, Z.AI, MiMo).
2. **Plugin/extension first-class UX** — Hot-reload, proactive recommendations, marketplace discoverability, session-aware boot (matching Claude Code).
3. **Attention-aware notifications** — Focus-aware completion signals, action-required title states, return recaps (vs. elapsed-time heuristics).
4. **Clipboard integration** — Explicit `/copy` for last model output, reducing terminal-text selection friction.
5. **Build-time scalability** — Monolith decomposition, incremental compilation, SHA-stamp decoupling, test binary isolation.

## Developer Pain Points
- **Monolith compile tax**: 682k-line single crate dominates edit-compile-commit-test loops; every local commit invalidates TUI+CLI via build-SHA stamp.
- **Invisible session boot**: MCP servers and plugins connect sequentially with no UI progress; failures surface only as toasts.
- **Context-pressure blindness**: Warning fires but agent doesn’t proactively compact/summarize; warning disappears before user notices.
- **Fragmented attention signals**: Notifications, terminal title, and task state don’t form a unified contract; focus-unaware.
- **Manual copy workflow**: No TUI command to grab the last assistant response; forces terminal selection during/after long turns.
- **Dead-code noise**: Hundreds of `allow(dead_code)` mask real drift; test-only helpers leak into non-test builds.

---

*All links point to `github.com/Hmbown/CodeWhale` (the canonical repo for DeepSeek TUI).*

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*