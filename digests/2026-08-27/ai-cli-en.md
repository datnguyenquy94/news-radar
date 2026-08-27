# AI CLI Tools Community Digest 2026-08-27

> Generated: 2026-08-27 08:50 UTC | Tools covered: 10

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

# Cross-Tool Comparison Report: AI CLI Tools Ecosystem (2026-08-27)

---

## 1. Ecosystem Overview

The AI CLI tools landscape is in a **high-velocity stabilization phase** across all major players. Every active project shipped patches or nightlies addressing critical regressions—Windows desktop instability (Claude Code, Codex, Copilot CLI), MCP protocol alignment (Claude Code, Gemini, Qwen, Pi), and session/subagent reliability (Gemini, Copilot, Qwen, DeepSeek). Release cadences remain weekly or faster, with automated CI pipelines (Codex, Qwen) and bot-driven merges (Codex's `copyberry[bot]`) indicating mature internal tooling. Security hardening is a cross-cutting theme: SSRF fixes (Gemini), OAuth token revocation gaps (Claude Code), workspace trust fail-closed (Gemini), and session data exposure (OpenCode). The ecosystem is converging on **MCP as the universal tool integration layer**, **daemon/session architectures for persistence**, and **reasoning-model-specific handling** as a first-class concern.

---

## 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Updated (24h) | Release Status | Critical Regressions |
|------|---------------------|-------------------|----------------|---------------------|
| **Claude Code** | 10 (high-engagement) | 2 | v2.1.247 stable | Windows GPU crash (MSIX corruption), always-on-top, OAuth tokens not invalidated |
| **OpenAI Codex** | 10 (critical mass) | **50** (bot-merged) | v0.150.1 patch | Windows desktop startup failure (82 comments), macOS auth invalidation, WSL MCP broken |
| **Gemini CLI** | 10 | 11 | v0.59.0-nightly (security) | Subagent MAX_TURNS masked as success, generalist agent hangs, MCP config corruption |
| **GitHub Copilot CLI** | 10 | 0 | **3 patches** (v1.0.81-12/-13/-14) | MCP schema eager injection (354K tokens), FileWatch loop (13GB logs), prerelease lookup bug |
| **Kimi Code CLI** | 1 | 1 | None | Cron reminder erases in-progress assistant reply |
| **OpenCode** | 10 | 10 | None | Desktop tab layout broken (22 👍), `opencode run` 56% hang rate, session data exposure |
| **Pi** | 10 | 10 | None | HttpsProxyAgent regression (fixed), PowerShell stray dot, TUI word-per-line rendering |
| **Qwen Code** | **27** (24 CI trackers) | 10 | v0.22.2 (breaking), desktop-v0.2.2 | CI flakiness flood, hook process leaks, TUI banner truncation |
| **DeepSeek TUI** | 8 | **28** | None | Mega-file decomposition, global runtime lock (fixed), transient context warnings |
| **Grok Build** | 0 | 0 | None | No activity |

**Key observations**: Codex leads in PR throughput (automated pipeline); Qwen dominates issue count due to CI failure bot spam; DeepSeek shows highest PR velocity for architectural refactoring; Copilot CLI uniquely shipped three patches in 24h; Kimi and Grok are low-activity.

---

## 3. Shared Feature Directions

| Requirement | Tools Affected | Specific Needs |
|-------------|----------------|----------------|
| **MCP Protocol Hardening** | Claude Code, Gemini, Qwen, Pi, Copilot CLI, OpenCode | Draft-07 `outputSchema` support (Claude #86142), SSRF protection (Gemini #29081), config corruption fail-closed (Gemini #28787/#28794), eager schema injection token bloat (Copilot #4613), Figma MCP compat (OpenCode #45499), secret scoping per runtime (DeepSeek #5637) |
| **Windows Desktop Stability** | Claude Code, Codex, Copilot CLI, Pi, Qwen | GPU process crashes/MSIX corruption (Claude #80444), CLI binary not found (Codex #40752), WAM/Entra ID auth (Copilot #1.0.81-12), PowerShell command mangling (Pi #8688), banner rendering (Qwen #8124) |
| **Subagent/Delegation Reliability** | Gemini, Copilot CLI, Qwen, DeepSeek | MAX_TURNS recovery (Gemini #22323), parallel subagent UI deadlock (Copilot #4533), hook process-tree reclamation (Qwen #10100), lifecycle outbox for observability (DeepSeek #5645) |
| **Session Persistence & Resumption** | Copilot CLI, Qwen, DeepSeek, OpenCode | Faster large-session resume (Copilot #1.0.81-14), named/standalone session APIs (Qwen #10198/#10179), per-session store roots (DeepSeek #5638), model-switch SQLite corruption (OpenCode #31606) |
| **Reasoning Model Integration** | Pi, Qwen, OpenCode, Gemini | Configurable compaction thinking budgets (Pi #7553/#7602), ZAI/GLM thinking leaks (Pi #8706), Bedrock reasoning variants (OpenCode #45405), subagent under-use (Gemini #21968) |
| **Headless/CI/Non-Interactive Parity** | Qwen, Copilot CLI, DeepSeek, Pi | Web Shell terminal (Qwen #9984), ACP stdio transport (Copilot #3889), supervised control socket (DeepSeek #5533), stats output in headless (Gemini #20536) |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | GitHub Copilot CLI | Qwen Code | OpenCode | Pi | DeepSeek TUI |
|-----------|-------------|--------------|------------|-------------------|-----------|----------|-----|--------------|
| **Primary Focus** | Desktop app polish, feedback loops | Windows desktop stability, MCP security | Subagent autonomy, AST tooling, memory hardening | Enterprise auth, token efficiency, TUI responsiveness | Daemon architecture, OpenTUI migration, CI automation | v2 WebSocket RPC, provider catalog freshness | Reasoning-model granularity, extension platform | Architectural decomposition, supervised operation |
| **Target User** | Generalist developers, Windows/macOS desktop users | Enterprise Windows/WSL users, automation-heavy teams | Power users wanting autonomous agents, codebase explorers | GitHub-native orgs, Entra ID shops, security-conscious | Early adopters of daemon/session model, CI/CD integrators | Self-hosted/desktop users, multi-provider flexibility | Provider-agnostic tinkerers, reasoning-model researchers | Contributors, automation builders, migration evaluators |
| **Technical Approach** | MSIX-packaged Electron desktop + CLI | Rust CLI + Windows Store app + desktop wrapper | Node.js CLI, heavy AST/tooling investment | Node.js/TypeScript, GitHub API deep integration | TypeScript daemon + MCP server extraction + Rust CUA driver | Go/Rust hybrid, ACP-native, v2 RPC transport | TypeScript, provider-agnostic core, extension-first | Rust, massive-file decomposition, runtime isolation |
| **Differentiator** | `SendFeedback` tool, tips system, tight Anthropic integration | `@` mentions, `/copy` picker, Guardian reviewer routing | Auto Memory, skills as primitives, AST-aware navigation | WAM auth, OpenTelemetry hooks, global instructions (requested) | Standalone MCP servers, OpenTUI migration, Mem0 skeleton | ACP-first, dynamic provider catalog, WebSocket RPC v2 | Configurable thinking per operation, UI prompt events | Safe migration planners, per-thread usage ledger, CNY cost tracking |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Signals |
|------|-------|---------|
| **High Momentum / Maturing** | **OpenAI Codex**, **GitHub Copilot CLI**, **Qwen Code** | Codex: 50 PRs/24h (automated), stable patch cadence, enterprise Windows focus. Copilot: 3 patches/24h, WAM auth shipped, OpenTelemetry traces. Qwen: Breaking release + desktop + driver same day, OpenTUI migration underway, daemon session APIs. |
| **Active Stabilization** | **Claude Code**, **Gemini CLI**, **Pi**, **OpenCode** | Claude: High-engagement issues (63 comments on GPU crash), v2.1.247 adds feedback loop. Gemini: Nightly security patches, subagent reliability sprint, MCP config hardening. Pi: 10 PRs fixing reasoning/Windows/terminal regressions, compaction thinking control advancing. OpenCode: v2 RPC transport PR, Bedrock fix, security flaw patched. |
| **Architectural Refactoring** | **DeepSeek TUI** | 28 PRs/24h decomposing 18k LOC files, per-session runtime isolation, lifecycle outbox, migration planner—pre-1.0 structural work. |
| **Low Activity / Early Stage** | **Kimi Code CLI**, **Grok Build** | Kimi: 1 issue, 1 PR—cancellation hygiene focus. Grok: Zero activity. |

**Maturity indicators**: Automated CI/CD (Codex, Qwen), multi-platform desktop packaging (Claude, Codex, Copilot, Qwen), enterprise auth (Copilot WAM, Codex Entra), security hardening cycles (Gemini, Pi, OpenCode), protocol leadership (MCP draft-07 adoption across 6+ tools).

---

## 6. Trend Signals for Developers

1. **MCP is the de facto standard** — Every active tool is investing in MCP server/client hardening, draft-07 compliance, and security (SSRF, secret scoping, config corruption). *Implication: Build tools as MCP servers; expect protocol-level integration.*

2. **Windows is the battleground** — 5/9 active tools have critical Windows desktop regressions this cycle (GPU crashes, binary location, PowerShell mangling, WSL MCP, WAM auth). *Implication: Windows-first testing is non-negotiable; MSIX/AppModel/WSL interop are recurring failure domains.*

3. **Reasoning models require dedicated plumbing** — Thinking budgets, compaction policies, forced-thinking model handling, and provider-specific wire formats (ZAI, Bedrock, DeepSeek, OpenAI Responses) are now first-class concerns. *Implication: Abstract reasoning control per operation (chat vs. compaction vs. subagent).*

4. **Daemon/session architectures replacing ephemeral CLI** — Qwen (daemon API, named sessions), DeepSeek (per-session runtime store), Copilot (resume optimization), OpenCode (v2 RPC), Pi (lazy session loading). *Implication: Design for persistent, resumable, multi-session state from day one.*

5. **Security hardening is continuous, not one-time** — OAuth revocation gaps (Claude), SSRF in OAuth discovery (Gemini), session data exposure (OpenCode), workspace trust fail-open (Gemini), proxy agent regressions (Pi). *Implication: Treat auth/session/transport as attack surface; adopt fail-closed defaults.*

6. **CI/CD noise management is a scaling challenge** — Qwen's 24 bot-filed CI failures in 24h drown signal. Codex's `copyberry[bot]` merges 50 PRs invisibly. *Implication: Invest in CI signal-to-noise tooling; auto-fix pipelines are becoming standard.*

7. **Subagent observability gap** — MAX_TURNS masked as success (Gemini), parallel subagent UI deadlocks (Copilot), hook process leaks (Qwen), transient context warnings (DeepSeek). *Implication: Subagent lifecycle, token accounting, and UI visibility need first-class design.*

8. **Migration tooling as adoption lever** — DeepSeek's safe Claude Code migration planner (#5648) signals competitive focus on lowering switching costs. *Implication: Expect more

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (as of 2026-08-27)

---

## 1. Top Skills Ranking — Most-Discussed PRs

| # | Skill / PR | Functionality | Discussion Highlights | Status |
|---|------------|---------------|----------------------|--------|
| 1 | **[#1298](https://github.com/anthropics/skills/pull/1298)** `skill-creator`: fix `run_eval.py` 0% recall | Critical bug fix: evaluation harness reports `recall=0%` for all skills, breaking the description-optimization loop | 10+ independent reproductions; blocks skill quality validation; Windows stream reading + parallel worker fixes included | **Open** (Jun 10) |
| 2 | **[#1628](https://github.com/anthropics/skills/pull/1628)** **Hivemind**: Zero-Cost Multi-Agent Orchestration | Delegates mechanical work to headless `opencode` workers (free models); Claude stays planner/reviewer/merger | Novel cost-optimization architecture; "expensive model's context is the scarce resource" | **Open** (Aug 21) |
| 3 | **[#1367](https://github.com/anthropics/skills/pull/1367)** **self-audit**: Mechanical verification + 4-dimension reasoning gate | Pre-delivery audit: file existence → reasoning quality (correctness, completeness, consistency, clarity) in severity priority | Universal, stack-agnostic; v1.3.0; addresses "hallucinated outputs" | **Open** (Jun 28) |
| 4 | **[#568](https://github.com/anthropics/skills/pull/568)** **servicenow**: ServiceNow platform skill | Broad platform assistant: ITSM, ITOM, ITAM/SAM, FSM, HRSD, SPM, SecOps, Vuln Response, IntegrationHub | 5-month active discussion; enterprise demand; covers scripting + architecture + governance | **Open** (Mar 8) |
| 5 | **[#723](https://github.com/anthropics/skills/pull/723)** **testing-patterns**: Comprehensive testing stack | Testing Trophy, AAA, React Testing Library, contract testing, E2E, property-based, mutation, CI/CD integration | Fills gap: no existing skill covers full testing philosophy + practice | **Open** (Mar 22) |
| 6 | **[#514](https://github.com/anthropics/skills/pull/514)** **document-typography**: Typographic quality control | Prevents orphans, widows, numbering misalignment in AI-generated docs (PDF, DOCX, HTML) | "Users rarely ask for good typography but always notice bad" | **Open** (Mar 4) |
| 7 | **[#83](https://github.com/anthropics/skills/pull/83)** **skill-quality-analyzer** + **skill-security-analyzer** | Meta-skills: 5-dim quality scoring (structure, examples, resources, triggers, maintainability) + threat modeling | Enables automated skill review; security analyzer checks for prompt injection, data exfiltration | **Open** (Nov 6, 2025) |
| 8 | **[#1615](https://github.com/anthropics/skills/pull/1615)** **scnet-hpc**: SCNet HPC cluster operations | Profile-based SSH/Slurm: connection, partition, memory, modules, accelerators, job generation, cluster discovery | Niche but high-value for HPC users; profile refresh + compute-node ops | **Open** (Aug 20) |

> **Note:** All PRs show `Comments: undefined` in the raw data; ranking reflects issue cross-references, author engagement, and architectural significance.

---

## 2. Community Demand Trends (from Issues)

| Trend | Evidence (Issues) | Signal Strength |
|-------|-------------------|-----------------|
| **🔐 Trust & Security Boundaries** | [#492](https://github.com/anthropics/skills/issues/492) (43 💬, 2👍): Community skills published under `anthropic/` namespace impersonate official skills — **critical trust boundary vulnerability** | 🔴 **Highest** |
| **📦 Skill Distribution & Sharing** | [#228](https://github.com/anthropics/skills/issues/228) (16 💬, 8👍): Org-wide skill library needed; [#189](https://github.com/anthropics/skills/issues/189) (6 💬, 9👍): `document-skills`/`example-skills` duplicate content | 🟠 **High** |
| **🧪 Evaluation Infrastructure Repair** | [#556](https://github.com/anthropics/skills/issues/556) (12 💬, 7👍): `claude -p` never triggers skills (0% trigger rate); [#1390](https://github.com/anthropics/skills/issues/1390): MCP builder eval scores 0/N; [#1298](https://github.com/anthropics/skills/pull/1298), [#1602](https://github.com/anthropics/skills/pull/1602) PRs fixing same | 🟠 **High** |
| **🤖 Multi-Agent / Orchestration** | [#1628](https://github.com/anthropics/skills/pull/1628) Hivemind PR; [#1385](https://github.com/anthropics/skills/issues/1385): 3-gate reasoning pipeline (calibration → adversarial review → verification); [#412](https://github.com/anthropics/skills/issues/412): agent-governance proposal | 🟡 **Growing** |
| **🏢 Enterprise Platform Skills** | [#568](https://github.com/anthropics/skills/pull/568) ServiceNow; [#1615](https://github.com/anthropics/skills/pull/1615) scnet-hpc; [#1175](https://github.com/anthropics/skills/issues/1175) SharePoint security/context concerns | 🟡 **Growing** |
| **💻 Windows Compatibility** | [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050): `run_eval.py` unusable on Windows (subprocess, encoding, `claude.cmd`) | 🟢 **Steady** |
| **📄 Document Fidelity** | [#12](https://github.com/anthropics/skills/issues/12) (4 💬, 1👍): DOCX whitespace corruption; [#538](https://github.com/anthropics/skills/pull/538), [#541](https://github.com/anthropics/skills/pull/541) PDF/DOCX case-sensitivity & `w:id` collision fixes | 🟢 **Steady** |
| **☁️ Platform Integration** | [#29](https://github.com/anthropics/skills/issues/29): Bedrock support; [#16](https://github.com/anthropics/skills/issues/16): Expose Skills as MCPs; [#1487](https://github.com/anthropics/skills/issues/1487): `claude-api` injects 156k tokens | 🟢 **Steady** |

---

## 3. High-Potential Pending Skills (Active PRs Likely to Land)

| PR | Skill | Why It Has Momentum |
|----|-------|---------------------|
| **[#1628](https://github.com/anthropics/skills/pull/1628)** | **Hivemind** (Multi-Agent Orchestration) | Novel cost architecture; addresses token-scarcity pain point; recent (Aug 21) with active iteration |
| **[#1367](https://github.com/anthropics/skills/pull/1367)** | **self-audit** (Quality Gate) | Universal applicability; mechanical + reasoning verification; v1.3.0 maturity |
| **[#723](https://github.com/anthropics/skills/pull/723)** | **testing-patterns** | Comprehensive coverage of testing stack; fills documented gap; 1-month open with updates |
| **[#568](https://github.com/anthropics/skills/pull/568)** | **servicenow** | 5+ month discussion; enterprise breadth (ITSM/ITOM/SecOps/ITAM); author responsive |
| **[#514](https://github.com/anthropics/skills/pull/514)** | **document-typography** | High-impact/low-effort; affects every generated document; clear trigger definition |
| **[#486](https://github.com/anthropics/skills/pull/486)** | **odt** (OpenDocument) | ISO standard format; create/fill/read/convert; template support |
| **[#525](https://github.com/anthropics/skills/pull/525)** | **pyxel** (Retro Game Dev) | MCP server integration; niche but complete workflow (write → run → capture → inspect) |
| **[#83](https://github.com/anthropics/skills/pull/83)** | **skill-quality-analyzer** / **skill-security-analyzer** | Meta-infrastructure; enables automated skill review; security analyzer addresses #492 class of issues |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for *trustworthy skill infrastructure*: fixing the broken evaluation pipeline (#556, #1298, #1390), resolving the critical namespace impersonation vulnerability (#492), and building meta-skills that validate skill quality and security (#83, #1367) — all prerequisites before the ecosystem can reliably scale to enterprise multi-agent workflows (#1628, #1385, #568).**

---

*Report generated from anthropics/skills PR/Issue data (2026-08-27 snapshot). All links point to github.com/anthropics/skills.*

---

# Claude Code Community Digest — 2026-08-27

---

## 1. Today's Highlights

- **v2.1.247 released** with a new `SendFeedback` tool that lets Claude draft feedback reports for review via `/feedback`, plus expanded tips configuration (`tipsFile`, `label`, `cooldownSessions`, `priority`).
- **Windows Desktop stability crisis dominates discussion**: Multiple high-engagement issues report fatal GPU-process crashes (exit code `0x060C201E` / `101457950`) that corrupt the MSIX package, leaving the app unlaunchable until Repair or sign-out — affecting both in-app browser tabs and preview surfaces.
- **Persistent "always-on-top" window bug** spans Windows and macOS Desktop apps with no user-accessible toggle, generating 60+ upvotes across duplicate reports.

---

## 2. Releases

### v2.1.247
- **`SendFeedback` tool added**: When a session encounters an issue, Claude can now draft a feedback report for user review and submission via `/feedback`. Disable with the `feedbackDrafts` setting.
- **Tips system expanded**: New fields `{id, text, cooldownSessions, priority}`, plus `tipsFile` and `label` for richer, configurable in-product guidance.

---

## 3. Hot Issues (Top 10 by Community Impact)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#80444](https://github.com/anthropics/claude-code/issues/80444) | **Windows Desktop: fatal GPU-process crash via in-app Browser tab; MSIX package unlaunchable until Repair** | Blocks Windows users entirely; crash corrupts package state (`appxState=2`). Reproduced on two NVIDIA driver versions. | 63 comments, 11 👍 — active debugging, workarounds sought |
| [#12506](https://github.com/anthropics/claude-code/issues/12506) | **Feature: Execute commands in WSL instead of Windows CMD/PowerShell** | Critical for Windows developers who rely on Linux toolchains; closed but high interest signals demand. | 43 comments, 146 👍 — top-voted enhancement |
| [#85891](https://github.com/anthropics/claude-code/issues/85891) | **Windows 11: Desktop window stays always-on-top, no setting to disable** | Breaks standard window management; forces workarounds. Mirrors macOS issue #66516. | 31 comments, 62 👍 |
| [#68780](https://github.com/anthropics/claude-code/issues/68780) | **Opus 4.8/5.0 reasoning degradation, speed/performance regression** | Core model quality complaint; user threatens EU consumer action. | 36 comments, 35 👍 |
| [#18467](https://github.com/anthropics/claude-code/issues/18467) | **Personal GitHub repos not visible in Claude web; only org repos work** | Blocks personal-account users from GitHub integration on claude.ai/code. | 36 comments, 78 👍 |
| [#43801](https://github.com/anthropics/claude-code/issues/43801) | **SECURITY: "Log out all sessions" + instance revocation does not invalidate OAuth tokens** | Tokens remain valid for days after revocation, even after cold boot — undermines security model. | 34 comments, 5 👍 |
| [#86142](https://github.com/anthropics/claude-code/issues/86142) | **MCP servers declaring draft-07 `outputSchema` rejected client-side as "unsupported dialect"** | Breaks MCP server compatibility; draft-07 is current spec. Closed but indicates version skew. | 30 comments, 12 👍 |
| [#53247](https://github.com/anthropics/claude-code/issues/53247) | **Windows Desktop fails to launch — orphaned Silo/Job Object after crash; only logoff/reboot recovers** | Related to #80444; HRESULT `0x80070020` indicates resource locking in AppModel-Runtime. | 27 comments, 18 👍 |
| [#70622](https://github.com/anthropics/claude-code/issues/70622) | **Feature: Option to disable clickable Yes/No prompts in terminal** | New clickable prompts cause accidental approvals/cancellations; users want keyboard-only mode back. | 22 comments, 83 👍 |
| [#57371](https://github.com/anthropics/claude-code/issues/57371) | **Windows: Way to disable bundled Cowork background service (CoworkVMService) for non-users** | Unwanted service consumes resources; no opt-out. | 24 comments, 53 👍 |

---

## 4. Key PR Progress

| PR | Status | Summary |
|----|--------|---------|
| [#13437](https://github.com/anthropics/claude-code/pull/13437) | OPEN | **fix(hookify)**: Use relative imports for Python module resolution — resolves `'No module named hookify'` error on all platforms. |
| [#58673](https://github.com/anthropics/claude-code/pull/58673) | OPEN | Minimal update (title "s"); likely WIP or placeholder — no description provided. |

> Only 2 PRs updated in the last 24h. The hookify fix (#13437) addresses a cross-platform plugin import regression.

---

## 5. Feature Request Trends

From the issue corpus, the most-requested directions are:

1. **Windows–WSL integration** — Native WSL command execution (#12506, 146 👍), Shift+Enter in WSL terminals (#1262), and broader Windows/Linux parity.
2. **Window management controls** — Disable always-on-top behavior on both Windows (#85891, #89467) and macOS (#66516).
3. **Prompt/permission UX configurability** — Toggle clickable Yes/No prompts (#70622, 83 👍), granular permission persistence for allowed sites (#86384).
4. **Background service opt-outs** — Disable CoworkVMService (#57371, 53 👍) and other bundled daemons.
5. **Git branch flexibility** — Push to task-assigned branches, not only `claude/*` (#24535).
6. **Mobile artifact parity** — Published Code artifacts missing on iOS app (#78792).
7. **MCP spec alignment** — Support for draft-07 `outputSchema` without client-side rejection (#86142).

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Frequency | Representative Issues |
|------------|-----------|----------------------|
| **Windows Desktop instability (GPU crashes, MSIX corruption, orphaned processes)** | Very High | #80444, #81159, #89016, #53247, #89687 |
| **Always-on-top window with no disable option** | High | #85891, #89467, #66516 |
| **OAuth/session revocation not actually invalidating tokens** | High | #43801 |
| **Accidental clicks on new clickable permission prompts** | High | #70622 |
| **WSL/Windows interop gaps (Shift+Enter, command execution, symlinks)** | Medium | #1262, #12506, #88405 |
| **Personal GitHub account repos invisible in web UI** | Medium | #18467 |
| **Model reasoning quality regression (Opus 4.8/5.0)** | Medium | #68780 |
| **MCP draft-07 compatibility broken** | Medium | #86142 |
| **Cowork background service forced on all Windows users** | Medium | #57371 |
| **Mobile app missing Code artifacts** | Low-Medium | #78792 |

---

**Next digest**: 2026-08-28 — tracking v2.1.247 adoption, Windows GPU crash mitigations, and MCP draft-07 resolution.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-27

---

## 1. Today's Highlights

- **v0.150.1 patch released** — Backports retained-image compaction budgeting to stable; remote compaction now counts retained images against the token budget and trims older images by default ([#41003](https://github.com/openai/codex/pull/41003)).
- **Windows desktop app regression wave** — Multiple critical issues reported against build `26.820.7780.0`: CLI binary not found on startup ([#40752](https://github.com/openai/codex/issues/40752), 82 comments), missing `codex-code-mode-host.exe` breaking local execution ([#40817](https://github.com/openai/codex/issues/40817)), and WSL MCP transport failures ([#40881](https://github.com/openai/codex/issues/40881)).
- **50 PRs merged in 24h** — Heavy internal automation (`copyberry[bot]`) closing PRs covering Guardian reviewer routing, MCP confirmation policies, trace propagation, encryption for history/notes tools, and skill catalog optimization.

---

## 2. Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **rust-v0.150.1** | Stable patch | **Bug fix**: Remote compaction now includes retained images in its token budget (`compaction_image_budget` enabled by default). Older images trimmed automatically. ([#41003](https://github.com/openai/codex/pull/41003)) |
| **rust-v0.151.0-alpha.5** → **alpha.2** | Alpha | Iterative alpha releases for 0.151 line (no changelog entries shown). |
| **rust-v0.150.0-alpha.13** → **alpha.12** | Alpha | Pre-release validation for 0.150 stable. |
| **rust-v0.150.0** | Stable (prior) | **Features**: `@` mentions to reference other Codex tasks; `/copy` picker for responses/code blocks/blockquotes; unnamed terminal tasks get descriptive titles. ([#40308](https://github.com/openai/codex/pull/40308), [#39997](https://github.com/openai/codex/pull/39997)) |

> **Full changelog**: [v0.150.0 → v0.150.1](https://github.com/openai/codex/compare/rust-v0.150.0...rust-v0.150.1)

---

## 3. Hot Issues (Top 10 by Community Impact)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| **[#40752](https://github.com/openai/codex/issues/40752)** | Windows Desktop app fails to start after v26.820.60940 update — “Unable to locate Codex CLI” / `spawn EINVAL` on `.cmd` wrapper | Blocks all Windows users on latest build; 82 comments, 49 👍 | **Critical** — widespread breakage, users rolling back |
| **[#39162](https://github.com/openai/codex/issues/39162)** | macOS 26.814.41407: opening existing conversation invalidates ChatGPT auth, redirects to sign-in | Auth regression on macOS; 64 comments, 38 👍 | **High** — forces re-login per conversation |
| **[#40881](https://github.com/openai/codex/issues/40881)** | Windows Desktop fails to create new chats in WSL mode: invalid transport in `mcp_servers.codex_app` | Breaks WSL workflow; 27 comments, 8 👍 | **High** — WSL users blocked |
| **[#20883](https://github.com/openai/codex/issues/20883)** | Codex Desktop should use project-scoped MCP process pool (not per-session) | Architectural: MCP servers spawn per chat, wasting resources; 19 comments, 5 👍 | **Medium** — long-standing perf ask |
| **[#38517](https://github.com/openai/codex/issues/38517)** | Permanent worktree creation fails: `fatal: invalid reference: refs/heads/HEAD` | Git worktree bug on macOS; 17 comments, 8 👍 | **Medium** — blocks worktree workflow |
| **[#28392](https://github.com/openai/codex/issues/28392)** | Windows Store app fails on startup: “Unable to locate the Codex CLI binary” | Persistent Store packaging issue; 16 comments | **Medium** — Store users affected |
| **[#40014](https://github.com/openai/codex/issues/40014)** | Windows: completed child turn visible in UI but `read_thread` returns `items: []` | Data consistency bug between UI and API; 11 comments | **Medium** — breaks tooling reliance on history |
| **[#41049](https://github.com/openai/codex/issues/41049)** | Windows: `code-mode host exited during handshake` — GPT-5.6 model not working | New model integration failure; 10 comments | **High** — model-specific regression |
| **[#40867](https://github.com/openai/codex/issues/40867)** | Windows App: bundled CLI binary exists but cannot be executed | Permissions/packaging issue; 9 comments, 7 👍 | **High** — immediate startup failure |
| **[#35555](https://github.com/openai/codex/issues/35555)** | CLI hard-fails at startup if any process holds write lock on `logs_2.sqlite` (telemetry DB) | No retry/backoff; 5s busy_timeout only; 9 comments | **Medium** — affects all platforms |

---

## 4. Key PR Progress (Top 10 Merged)

| PR | Title | Area | Impact |
|----|-------|------|--------|
| **[#41094](https://github.com/openai/codex/pull/41094)** | Require synchronous review for sensitive MCP actions | Security/MCP | Routes `codex_sensitive_action: true` elicitations to Guardian reviewer |
| **[#41087](https://github.com/openai/codex/pull/41087)** | Expose response usage metadata in completion events | Observability | Parses `usage_metadata.amount` from Responses API; propagates via SSE/WS |
| **[#41072](https://github.com/openai/codex/pull/41072)** | Forward model confirmation policies to actor MCP tools | MCP/Safety | Sends Browser/Computer Use confirmation policies in `openai/confirmation_policies` metadata |
| **[#41070](https://github.com/openai/codex/pull/41070)** | Clarify when to send asynchronous user messages | UX/Tools | Expands `send_user_message_async` description: questions, blockers, findings, in-progress replies |
| **[#41062](https://github.com/openai/codex/pull/41062)** | Forward truncation policies to history notes backend | History/Performance | Serializes output truncation policy into `x-openai-tool-output-truncation-policy` header |
| **[#41058](https://github.com/openai/codex/pull/41058)** | Track Code Mode tool call metadata completeness | Code Mode/Telemetry | Marks whether executed-tool metadata contains full or partial tool call inventory |
| **[#41050](https://github.com/openai/codex/pull/41050)** | Add developer instructions for persistent mode | Reasoning/Persistent | Bundles proactivity/follow-up guidance for `ReasoningEffort::Persistent`; overridable via `persistent_instructions` |
| **[#41046](https://github.com/openai/codex/pull/41046)** | Preserve tool authority for TUI delegation prompts | TUI/Delegation | Delegated prompts retain originating TUI tool authority instead of recording as user input |
| **[#41041](https://github.com/openai/codex/pull/41041)** | Encrypt sensitive history and notes tool arguments | Security/Privacy | Marks search queries, appended/replacement note text as encrypted; sends `x-openai-encrypted-tool-arguments: true` |
| **[#41030](https://github.com/openai/codex/pull/41030)** | Update stable exec-server test to Codex 0.150.1 | CI/Testing | Validates exec-server against latest stable release |
| **[#41003](https://github.com/openai/codex/pull/41003)** | Backport retained-image compaction budgeting to 0.150 | Compaction/Stable | Enables `compaction_image_budget` by default (see release notes) |

> Note: Most PRs authored/closed by `copyberry[bot]` — indicates automated internal merge pipeline.

---

## 5. Feature Request Trends (from Issues)

| Trend | Representative Issues | Signal Strength |
|-------|----------------------|-----------------|
| **Project-scoped MCP pooling** | [#20883](https://github.com/openai/codex/issues/20883), [#38925](https://github.com/openai/codex/issues/38925) | High — multiple reports of per-session MCP spawn causing resource exhaustion |
| **Mouse support in TUI input** | [#23652](https://github.com/openai/codex/issues/23652) (20 👍) | Medium — accessibility/usability ask, previously closed for low votes |
| **Windows Store packaging fixes** | [#28392](https://github.com/openai/codex/issues/28392), [#40752](https://github.com/openai/codex/issues/40752), [#40867](https://github.com/openai/codex/issues/40867) | Critical — recurring binary-location/execution failures across Store releases |
| **Remote control / mobile pairing reliability** | [#38095](https://github.com/openai/codex/issues/38095), [#39855](https://github.com/openai/codex/issues/39855) | Medium — macOS remote enable fails; Windows remote trust verification broken |
| **Git worktree / branch handling** | [#38517](https://github.com/openai/codex/issues/38517) | Medium — `refs/heads/HEAD` resolution failure on permanent worktree creation |
| **Hook system on Windows** | [#24453](https://github.com/openai/codex/issues/24453) | Low — `PreToolUse` hooks not firing for `command_execution` even with `*` matcher |

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Windows desktop app instability post-update** | 5+ critical issues in 24h against `26.820.7780.0`: startup failure ([#40752](https://github.com/openai/codex/issues/40752)), missing binaries ([#40817](https://github.com/openai/codex/issues/40817), [#40867](https://github.com/openai/codex/issues/40867)), WSL MCP broken ([#40881](https://github.com/openai/codex/issues/40881)), send button hangs ([#40968](https://github.com/openai/codex/issues/40968)) | **Very High** — dominant theme today |
| **Auth/session persistence failures** | macOS conversation open → logout ([#39162](https://github.com/openai/codex/issues/39162)); Windows refresh token rejected on first use ([#39925](https://github.com/openai/codex/issues/39925)) | High |
| **Telemetry DB locking blocks CLI startup** | SQLite write lock = hard fail, no retry ([#35555](https://github.com/openai/codex/issues/35555)) | Medium — affects all platforms |
| **History/API inconsistency** | UI shows turn, `read_thread` returns empty ([#40014](https://github.com/openai/codex/issues/40014)) | Medium — undermines tooling trust |
| **MCP process proliferation** | Per-session spawn instead of project pool ([#20883](https://github.com/openai/codex/issues/20883)); accumulation during live session ([#38925](https://github.com/openai/codex/issues/38925)) | Medium — resource waste, crash risk |
| **Code Mode host handshake failures (Windows)** | `code-mode host exited during handshake` on GPT-5.6 ([#41049](https://github.com/openai/codex/issues/41049), [#40943](https://github.com/openai/codex/issues/40943)) | High — new model rollout regression |

---

*Generated from github.com/openai/codex data as of 2026-08-27. Links point to live GitHub items.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-27

---

## 1. Today's Highlights
The project shipped a **security-focused nightly release (v0.59.0-nightly)** patching an SSRF vulnerability in MCP OAuth metadata discovery. Meanwhile, the issue tracker shows sustained focus on **subagent reliability** (MAX_TURNS handling, trajectory visibility, background execution) and **Auto Memory hardening** (redaction, retry loops, patch validation). Two critical MCP config corruption fixes landed, enforcing fail-closed behavior and preventing silent data loss.

---

## 2. Releases
| Version | Date | Key Changes |
|---------|------|-------------|
| **v0.59.0-nightly.20260827.g3c311beac** | 2026-08-27 | **Security**: `fix(core): prevent SSRF in MCP OAuth metadata discovery and authentication` ([#29081](https://github.com/google-gemini/gemini-cli/pull/29081)) — blocks internal network requests during OAuth metadata fetching. |

> **Changelog**: [v0.59.0-nightly.20260826...v0.59.0-nightly.20260827](https://github.com/google-gemini/gemini-cli/compare/v0.59.0-nightly.20260826.g64b5b79a6...v0.59.0-nightly.2026)

---

## 3. Hot Issues (Top 10 by Signal)

| Issue | Priority | Signal | Why It Matters |
|-------|----------|--------|----------------|
| **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** Subagent recovery after `MAX_TURNS` reported as GOAL success | P1 | 13 💬, 2 👍 | Subagents silently mask turn-limit exhaustion as success, breaking trust in autonomous workflows. |
| **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** Generalist agent hangs indefinitely | P1 | 8 💬, 8 👍 | Core delegation path stalls on simple ops (e.g., folder creation); workaround is disabling subagents. |
| **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** Assess AST-aware file reads, search, mapping | P2 | 7 💬, 1 👍 | Epic tracking whether AST tooling (tilth, glyph, ast-grep) reduces turns/tokens for code navigation. |
| **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** Gemini under-uses custom skills & sub-agents | P2 | 6 💬 | Model rarely invokes skills/agents autonomously despite relevant descriptions; requires explicit prompting. |
| **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)** Auto Memory retries low-signal sessions indefinitely | P2 | 5 💬 | Extraction agent skips low-signal transcripts but never marks them processed, causing perpetual re-queue. |
| **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)** Deterministic redaction & reduce Auto Memory logging | P2 | 4 💬 | Secrets enter model context before redaction; service logs skill data — privacy/compliance risk. |
| **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)** Shell command stuck at “Waiting input” after completion | P1 | 4 💬, 3 👍 | Frequent hang on trivial commands; UI shows active shell despite process exit. |
| **[#22232](https://github.com/google-gemini/gemini-cli/issues/22232)** Browser agent: session takeover & lock recovery | P3 | 4 💬 | Persistent profile locking fails fast instead of recovering orphaned sessions (Wayland/headless pain). |
| **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)** Browser subagent fails on Wayland | P1 | 4 💬, 1 👍 | Platform-specific launch failure blocks web automation for Linux/Wayland users. |
| **[#21000](https://github.com/google-gemini/gemini-cli/issues/21000)** Native file tools for task tracker | P3 | 4 💬 | Replace custom task-tracker with filesystem-backed implementation for reliability. |

---

## 4. Key PR Progress (Last 24h)

| PR | Status | Area | Summary |
|----|--------|------|---------|
| **[#29104](https://github.com/google-gemini/gemini-cli/pull/29104)** | Open | CLI/UX | Adds `[Skill]` badge to `/` autocomplete & `/help` — distinguishes user skills from built-ins/MCP. |
| **[#29102](https://github.com/google-gemini/gemini-cli/pull/29102)** | Open | Release | Nightly version bump to `0.59.0-nightly.20260827.g3c311beac`. |
| **[#28902](https://github.com/google-gemini/gemini-cli/pull/28902)** | Open | **Security** | Blocks `$VAR` / `${VAR}` variable-expansion bypass (GHSA-wpqr-6v78-jr5g); hardens issue-dedup workflow. |
| **[#28914](https://github.com/google-gemini/gemini-cli/pull/28914)** | Open | Core | Moves on-retry nudge from `systemInstruction` → `contents` suffix to preserve prefix caching. |
| **[#28787](https://github.com/google-gemini/gemini-cli/pull/28787)** | **Closed** | Core | Fixes corrupt MCP enablement config treated as empty (caused fail-open re-enablement of all servers). |
| **[#28794](https://github.com/google-gemini/gemini-cli/pull/28794)** | **Closed** | Core | Fail-closed on corrupt `mcp-server-enablement.json`; prevents data loss & silent re-enablement. |
| **[#28917](https://github.com/google-gemini/gemini-cli/pull/28917)** | Open | Core | Atomic Whisper model downloads (`.downloading` temp file, length verify, cleanup on failure). |
| **[#28916](https://github.com/google-gemini/gemini-cli/pull/28916)** | Open | Core | Line-buffers Whisper stdout chunks to prevent dropped transcription lines in voice mode. |
| **[#28911](https://github.com/google-gemini/gemini-cli/pull/28911)** | Open | Platform | Sandbox launcher now honors only `DEBUG=true\|1` (rejects `false`/`0` truthy bug). |
| **[#28904](https://github.com/google-gemini/gemini-cli/pull/28904)** | Open | Platform | Normalizes sandbox `DEBUG` semantics; adds regression tests for enabled/disabled values. |
| **[#28903](https://github.com/google-gemini/gemini-cli/pull/28903)** | Open | CLI | Ignores escaped `@` (`\@`) in completion trigger detection. |
| **[#28905](https://github.com/google-gemini/gemini-cli/pull/28905)** | Open | Docs | Corrects auth guidance: individual users → Antigravity CLI; API keys for Gemini CLI. |
| **[#28863](https://github.com/google-gemini/gemini-cli/pull/28863)** | Open | Extensions | Consent prompt for env changes; sanitizes runtime-altering vars in MCP server spawn. |
| **[#29099](https://github.com/google-gemini/gemini-cli/pull/29099)** | Open | Security | Fail-closed workspace trust; filters repo-defined `mcpServers` in restricted/untrusted mode. |

---

## 5. Feature Request Trends
1. **AST-aware code tooling** — Three linked issues ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746), [#22747](https://github.com/google-gemini/gemini-cli/issues/22747)) investigate AST grep/tilth/glyph for precise reads, search, and codebase mapping to cut turn count.
2. **Subagent observability & control** — Trajectory sharing via `/chat share` ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)), backgrounding with `Ctrl+B` ([#22741](https://github.com/google-gemini/gemini-cli/issues/22741)), eval strategy ([#22601](https://github.com/google-gemini/gemini-cli/issues/22601)), and build-fix delegation ([#22602](https://github.com/google-gemini/gemini-cli/issues/22602)).
3. **Auto Memory hardening** — Redaction-before-context ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)), retry-loop fixes ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)), invalid-patch quarantine ([#26523](https://github.com/google-gemini/gemini-cli/issues/26523)).
4. **Skills as first-class primitives** — Better discovery (PR [#29104](https://github.com/google-gemini/gemini-cli/pull/29104)), autonomous invocation ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)), behavioral evals for `activate_skill`/`web_fetch` ([#28788](https://github.com/google-gemini/gemini-cli/pull/28788)).
5. **Non-interactive/headless parity** — Stats output in headless mode ([#20536](https://github.com/google-gemini/gemini-cli/pull/20536)), sandbox DEBUG normalization.

---

## 6. Developer Pain Points
| Pain Point | Evidence |
|------------|----------|
| **Agent hangs / silent stalls** | Generalist agent ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)), shell “Waiting input” ghost ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)), browser agent on Wayland ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983)), Vite interactive prompt ([#22465](https://github.com/google-gemini/gemini-cli/issues/22465)). |
| **Subagent trust & visibility** | MAX_TURNS masked as success ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)), no subagent context in `/bug` ([#21763](https://github.com/google-gemini/gemini-cli/issues/21763)), trajectories not shareable ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)). |
| **Config fragility** | Corrupt MCP enablement → fail-open ([#28787](https://github.com/google-gemini/gemini-cli/pull/28787), [#28794](https://github.com/google-gemini/gemini-cli/pull/28794)), `settings.json` overrides ignored by browser agent ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)), `DEBUG` flag semantics drift ([#28911](https://github.com/google-gemini/gemini-cli/pull/28911), [#28904](https://github.com/google-gemini/gemini-cli/pull/28904)). |
| **Security surface** | SSRF in MCP OAuth (fixed in today’s nightly), variable-expansion bypass ([#28902](https://github.com/google-gemini/gemini-cli/pull/28902)), workspace trust fail-open ([#29099](https://github.com/google-gemini/gemini-cli/pull/2909

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-27

## Today's Highlights
Three patch releases (v1.0.81-12 through -14) landed in the last 24 hours, delivering faster session resumption, OpenTelemetry trace propagation for hooks, and Windows WAM authentication for Entra-ID-protected MCP servers. The community is actively discussing a high-severity regression where MCP schemas are eagerly injected at startup (~354K tokens), a runaway FileWatch loop that freezes the TUI and bloats logs to 13 GB, and a `latest-prerelease` lookup bug stranding users on 1.0.81-9.

## Releases
| Version | Key Changes |
|---------|-------------|
| **v1.0.81-14** | **Improved:** Resume large sessions faster by showing recent history first while older messages load asynchronously. **Fixed:** Repeated `read_agent` calls now consistently return full turn history unless `since_turn` is provided. |
| **v1.0.81-13** | **Added:** Hooks receive current OpenTelemetry trace context (`traceparent`, `tracestate`) and emit correlated spans; command hooks also get env vars. **Fixed:** Hook lifecycle events (`hook.start`/`hook.end`) from hooks inside subagents. |
| **v1.0.81-12** | **Added:** Windows remote MCP servers protected by Microsoft Entra ID can now sign in via OS authentication broker (WAM), usually with no prompt. **Fixed:** Repeatedly resuming sessions no longer causes duplicate history entries. |

## Hot Issues
| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#4613](https://github.com/github/copilot-cli/issues/4613) | **High-severity regression: MCP schemas eagerly injected, adding 354K startup tokens** | Breaks token budgets for trivial prompts; affects all 1.0.80+ users. | 👍 0 · 2 comments · Created 2026-08-26 |
| [#4612](https://github.com/github/copilot-cli/issues/4612) | **Runaway FileWatch host-event loop freezes TUI, grows debug log to 13 GB** | Long-running/resumed sessions enter tight loop emitting `FileWatch` events, UI becomes unresponsive. | 👍 1 · 4 comments · Created 2026-08-26 |
| [#4605](https://github.com/github/copilot-cli/issues/4605) | **`latest-prerelease` lookup strands users on 1.0.81-9** | Releases share `created_at`; GitHub ranks -10 below -2, so updater picks older build. | 👍 3 · 1 comment · Updated 2026-08-26 |
| [#2712](https://github.com/github/copilot-cli/issues/2712) | **MS legal/monetary liability for rate limit behavior** | Rate limits trigger without user action (fleet, background agents); users want accountability. | 👍 4 · 6 comments · Updated 2026-08-27 |
| [#252](https://github.com/github/copilot-cli/issues/252) | **Global Instructions File Support** | Avoid repeating same instructions per repo/worktree; long-standing request. | 👍 12 · 11 comments · Closed 2026-08-26 |
| [#4533](https://github.com/github/copilot-cli/issues/4533) | **Terminal UI stops consuming events when turn spawns parallel subagents** | Rust runtime continues but TUI deadlocks on input/scroll; prerelease 1.0.81-4/5 affected. | 👍 0 · 3 comments · Updated 2026-08-26 |
| [#4623](https://github.com/github/copilot-cli/issues/4623) | **Gemini models fail with 400 for MCP tools with union array items** | Any MCP tool with `items: {type: ["object","null"]}` breaks all Gemini models; GPT/Claude unaffected. | 👍 0 · 0 comments · Created 2026-08-26 |
| [#4629](https://github.com/github/copilot-cli/issues/4629) | **Plugin hooks not loaded when session resumed via `--resume`** | Same plugin fires hooks on fresh session but none on resumed session; `loadDeferredRepoHooks()` issue. | 👍 0 · 0 comments · Created 2026-08-27 |
| [#4628](https://github.com/github/copilot-cli/issues/4628) | **Autopilot background-task timeout exits active parent after subagent completes** | 600s timeout kills entire CLI process even after subagent done and parent resumed; timeout not cancelled. | 👍 0 · 0 comments · Created 2026-08-27 |
| [#407](https://github.com/github/copilot-cli/issues/407) | **Add slash command `/tools` to list all available tools** | Discoverability gap: users can’t easily see what tools Copilot CLI can access. | 👍 31 · 2 comments · Updated 2026-08-26 |

## Key PR Progress
No pull requests were updated in the last 24 hours.

## Feature Request Trends
1. **Global/shared configuration** — Global instructions file (#252, 12 👍), auto-allow permissions on session start (#3877, 2 👍), persistent settings across worktrees.
2. **Discoverability & introspection** — `/tools` command (#407, 31 👍), expose full shell-task output via `large_output_file_path` (#4630), better MCP tool schema visibility.
3. **Authentication & enterprise** — WAM/Entra ID support (delivered in 1.0.81-12), stdio transport for ACP mode (#3889), WorkIQ OAuth in WSL (#4632), plugin marketplace Git credential helpers (#4103).
4. **Multi-agent/delegation flexibility** — Delegate to Claude/Codex (#1499, 6 👍), parallel subagent UI stability (#4533), autopilot timeout behavior (#4628).
5. **Non-interactive/CI robustness** — Permission revocation mid-session (#4433), background task handling, quota validation errors (#4627).

## Developer Pain Points
| Pain Point | Frequency | Representative Issues |
|------------|-----------|----------------------|
| **Token bloat from eager MCP schema injection** | High (regression) | #4613 (354K tokens), #4525 (legacy `initialize` after `server/discover`) |
| **TUI freezes & event-loop stalls** | High | #4612 (FileWatch loop → 13 GB logs), #4533 (parallel subagents deadlock UI), #4053 (NFS/GPFS `which gh` SIGCHLD race) |
| **Session resumption regressions** | Medium | #4629 (plugin hooks not loaded), #4612 (resumed sessions trigger FileWatch loop), #4614 (history loading) |
| **Rate limiting without user action** | Medium | #2712 (fleet/background agents self-throttle), #4627 (quota validation `null` error) |
| **Model-specific MCP compatibility** | Medium | #4623 (Gemini + union array items), #4155 (Gemini 400 Bad Request), #4525 (dual-era MCP SDK) |
| **Clipboard / Wayland reliability** | Recurring | #4615 (`/copy` fails on GNOME/Mutter, xclip fallback gated incorrectly) |
| **Updater logic for prereleases** | Acute | #4605 (users stuck on 1.0.81-9 due to `created_at` tie-breaking) |

---
*Digest generated from github.com/github/copilot-cli data as of 2026-08-27 00:00 UTC.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-27

## 1. Today's Highlights
Activity remains light in the last 24 hours with no new releases. The community surfaced one critical UX regression (Issue #2620) where scheduled cron reminders erase in-progress assistant replies, and one core-engine PR (#2619) that hardens async cancellation semantics for nested Soul tasks.

## 2. Releases
*No new releases published in the last 24 hours.*

## 3. Hot Issues
| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| **#2620** | **[Cron fire mid-reply swallows the previous assistant reply; unrecoverable via Ctrl+O](https://github.com/MoonshotAI/kimi-cli/issues/2620)** | A scheduled cron reminder overwrites the visible transcript while the user is still reading the assistant’s last message. The lost turn cannot be retrieved—even `Ctrl+O` (expand) fails—breaking trust in the chat history and making long-running sessions fragile. | Opened 2026-08-26, 0 comments, 0 👍. Early stage; no workaround yet. |

*Only one issue updated in the last 24 h; older high-impact issues (e.g., #2615 cancelled-task leak, #2589 streaming latency) remain active but unchanged today.*

## 4. Key PR Progress
| # | PR | Description | Status |
|---|----|-------------|--------|
| **#2619** | **[fix(soul): cancel nested task on outer cancellation](https://github.com/MoonshotAI/kimi-cli/pull/2619)** | Extends `run_soul` cleanup to include the initial `asyncio.wait()`, ensures nested Soul/cancel-event tasks are cancelled and awaited when the outer coroutine is cancelled, and adds a regression test for cancellation during nested execution. Fixes #2615. | Open, CI running (`uv run pytest …`). No reviewer assigned yet. |

*Only one PR updated in the last 24 h.*

## 5. Feature Request Trends (from recent issue history)
1. **Session durability** – Persistent, recoverable transcripts across cron/interrupt events (#2620, #2598).  
2. **Cancellation hygiene** – Deterministic teardown of nested async tasks (#2615, #2619).  
3. **Streaming UX polish** – Reduced latency, better partial-render control (#2589, #2572).  
4. **Extensible tooling** – First-class plugin API for custom tools/agents (#2541, #2503).  
5. **Multi-modal input** – Image/audio context in CLI flows (#2490, #2465).

## 6. Developer Pain Points
- **Silent data loss** – Cron or interrupt events can erase unrecoverable assistant output (#2620).  
- **Cancellation leaks** – Nested async tasks survive outer cancellation, causing resource leaks and flaky tests (#2615).  
- **Opaque streaming internals** – Hard to hook into or throttle token streams for custom UX (#2589).  
- **Limited scriptability** – No stable headless/JSON-RPC mode for CI/CD integration (#2541).  
- **Documentation gaps** – Advanced async patterns (Soul, cron, tools) lack cookbook examples.

---

*Data window: 2026-08-26 00:00 → 2026-08-27 00:00 UTC. Source: github.com/MoonshotAI/kimi-cli*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-27

## Today's Highlights
No new releases shipped today, but the project saw intense bug-fixing activity across desktop UI, CLI reliability, provider integrations, and session security. Critical regressions in the desktop tab layout (#36936, 22 👍) and `opencode run` hang rate (~56%, #38723) dominate community attention, while a session data exposure flaw (#45525) raises security concerns. Multiple PRs land fixes for Bedrock reasoning variants, agent list verbosity, CLI argument parsing, and ACP command discovery.

## Releases
*No new releases in the last 24 hours.*

## Hot Issues (10 Noteworthy)

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| [#36936](https://github.com/anomalyco/opencode/issues/36936) Desktop tab layout broken — titles truncated | Major desktop UI regression; users cannot see session titles. Reverting to 1.17 works. | 22 👍, 16 comments — highest engagement today |
| [#38723](https://github.com/anomalyco/opencode/issues/38723) `opencode run` hangs intermittently (56% failure) | Process stays alive with zero stdout, no error, never past `init`. Blocks automation/CI. | 1 👍, 6 comments — high severity, intermittent |
| [#31606](https://github.com/anomalyco/opencode/issues/31606) Model switch mid-session → `SQLiteError: NOT NULL constraint failed: session_message.seq` | Session becomes unusable after model switch; all subsequent messages fail. | 1 👍, 5 comments — data integrity blocker |
| [#45521](https://github.com/anomalyco/opencode/issues/45521) CodeMode tool discovery documented 3 ways; only `search(input)` works | Scaffold, README, and runtime disagree. “Never fails” claim is false. | 0 👍, 2 comments — docs/API surface mismatch |
| [#45405](https://github.com/anomalyco/opencode/issues/45405) GPT-5.6 Bedrock reasoning variants fail (SDK 4.0.158) | Invalid `reasoning` field for prefixed profiles; Bedrock returns HTTP 400. | 0 👍, 2 comments — provider integration broken |
| [#45525](https://github.com/anomalyco/opencode/issues/45525) Unshared/deleted sessions still readable at `/api/share/:id/data` | **Security**: raw conversation data remains public after unshare/delete. | 0 👍, 1 comment — data exposure risk |
| [#45261](https://github.com/anomalyco/opencode/issues/45261) `repairToolCall` rewrites provider-executed calls to `invalid` | Breaks Anthropic sessions; fallback incorrectly handles provider-side tool calls. | 0 👍, 1 comment — core LLM loop regression |
| [#45499](https://github.com/anomalyco/opencode/issues/45499) Figma Desktop MCP fails — `?codemode=` causes 404 | OpenCode appends `?codemode=` to MCP URL; Figma returns 404 for non-empty query. | 1 👍, 0 comments — MCP ecosystem compat |
| [#45514](https://github.com/anomalyco/opencode/issues/45514) Silent infinite retry on stream timeout → UI stuck “thinking” 20+ min | No backoff, max attempts, or user visibility; users cannot distinguish reasoning vs network failure. | 0 👍, 0 comments — observability gap |
| [#45496](https://github.com/anomalyco/opencode/issues/45496) `agent list` prints 8,600+ lines (full permission rules) | Default output unusable for inventory; overflows CI logs and terminals. | 0 👍, 1 comment — CLI UX regression |

## Key PR Progress (10 Important)

| PR | Summary | Linked Issue |
|----|---------|--------------|
| [#45520](https://github.com/anomalyco/opencode/pull/45520) | Bump `@ai-sdk/amazon-bedrock` to 4.0.165; fixes reasoning variants for GPT-5.6 on Bedrock | #45405 |
| [#45513](https://github.com/anomalyco/opencode/pull/45513) | `agent list` now shows one-line summary; full rules behind `--verbose` | #45496 |
| [#45510](https://github.com/anomalyco/opencode/pull/45510) | Fix yargs greediness: `opencode run -f file "prompt"` no longer swallows prompt as file | #40304, #45501 |
| [#45518](https://github.com/anomalyco/opencode/pull/45518) | Suppress `AbortError` stack traces on Ctrl+C during TUI startup | #45409 |
| [#45512](https://github.com/anomalyco/opencode/pull/45512) | Merge duplicate Go usage rows with same resolved quota multiplier | #45502 |
| [#45500](https://github.com/anomalyco/opencode/pull/45500) | ACP `available_commands_update` now advertises built-in `/compact` command | #45504 |
| [#45522](https://github.com/anomalyco/opencode/pull/45522) | Surface MCP connection failures as toasts (server name + error); check workspace status post-toggle | — |
| [#45508](https://github.com/anomalyco/opencode/pull/45508) | **v2**: Desktop adopts WebSocket RPC transport for server requests (stacked on #45488) | — |
| [#45507](https://github.com/anomalyco/opencode/pull/45507) | `sap-ai-core`: normalize `finish_reason`, strip assistant prefill to resolve 400 errors | #45313, #45314 |
| [#45455](https://github.com/anomalyco/opencode/pull/45455) | Preserve downloaded skill directory IDs; prevent `deploy/SKILL.md` and `review/SKILL.md` collision | — |

## Feature Request Trends
1. **MCP hardening** — Connection error visibility (#45522), Figma compat (#45499), workspace-scoped toggles (#45509).
2. **CLI output discipline** — Summarization by default, verbosity flags (#45513, #45512).
3. **v2 architecture migration** — WebSocket RPC transport (#45508), provider catalog reconciliation with `/models` endpoints (#40524).
4. **Provider model freshness** — Dynamic catalog sync instead of static/stale lists (#40524).
5. **Session sharing security** — Immediate revocation of `/api/share/:id/data` on unshare/delete (#45525).

## Developer Pain Points
- **Desktop UI regressions**: Tab layout broken since 1.18; no titles visible (#36936).
- **CLI flakiness**: `opencode run` hangs silently ~56% of runs (#38723); argument parsing eats positional prompts (#40304, #45501).
- **Session fragility**: Model switch corrupts SQLite sequence (#31606); provider tool calls mis-handled by repair logic (#45261).
- **Silent failures**: Stream timeouts retry invisibly for 20+ min (#45514); MCP connect returns 204 even on failure (#45522).
- **Documentation drift**: CodeMode tool discovery shows 3 invocation forms; only 1 works (#45521).
- **Verbosity floods**: `agent list` dumps 8.6K lines; usage tables show duplicate rows (#45496, #45502).
- **Security oversight**: Shared session data persists publicly after revocation (#45525).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-27

## Today's Highlights
A wave of bug fixes and quality-of-life improvements landed today, with emphasis on reasoning-model reliability (Z.AI/GLM thinking leaks, DeepSeek V4 Pro low-effort support), Windows/terminal compatibility (PowerShell stray-dot, Apple Terminal meta keys, TUI markdown wrapping), and extension-platform stability (event-stream cleanup, `ctx.cwd` propagation, whitespace-only tool-result handling). The long-requested configurable compaction models (#7553) advanced via PR #7602.

---

## Releases
**No new releases in the last 24 hours.**

---

## Hot Issues (10 noteworthy)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#7553](https://github.com/earendil-works/pi/issues/7553) | **Configurable thinking level/model for compaction** | Unblocks users who run auto-compaction on reasoning models; currently compaction inherits session thinking budget, making summarization cost unpredictable. | 9 comments, in-progress via PR #7602 |
| [#8444](https://github.com/earendil-works/pi/issues/8444) | **`thinkingTokenBudgetField` ignored** | Docs claim this field maps the budget param, but it’s a no-op — blocks custom provider integration with llama.cpp. | 6 comments, closed (likely dup/fix in flight) |
| [#8610](https://github.com/earendil-works/pi/issues/8610) | **Regression: `HttpsProxyAgent` not a constructor (google-vertex + proxy)** | v0.84.3 code-splitting broke proxy support for Vertex/Gemini; affects enterprise users behind corporate proxies. | 4 comments, **fixed by PR #8723** |
| [#8688](https://github.com/earendil-works/pi/issues/8688) | **Windows PowerShell: stray `.` prepended to commands** | Breaks every PowerShell invocation (`.Get-ChildItem` parsed as member access); Windows devs blocked. | 3 comments, closed (fix likely in PR #8627 area) |
| [#8722](https://github.com/earendil-works/pi/issues/8722) | **Security guard `rm-outside-project` false-positives on write/edit payloads** | Documentation/content containing “delete”-like words triggers guard, breaking legitimate edits. | 2 comments, closed (triage) |
| [#8721](https://github.com/earendil-works/pi/issues/8721) | **Fleet inspector crashes on non-string subagent task** | Uncaught `TypeError: text.replace is not a function` crashes TUI during live subagent rendering. | 2 comments, closed (triage) |
| [#8705](https://github.com/earendil-works/pi/issues/8705) | **Unhandled rejection in `agentLoop` leaves EventStream hanging** | Promise rejections in `runAgentLoop` not caught → stream never ends, session leaks. | 2 comments, **fixed by PR #8704** |
| [#8706](https://github.com/earendil-works/pi/issues/8706) | **ZAI thinking handler leaks reasoning on forced-thinking models** | When thinking=off, `thinking: {type:"disabled"}` sent to GLM-5.3/5.3-flash (which require `null`), causing reasoning to appear in output. | 2 comments, **fixed by PR #8707** |
| [#8675](https://github.com/earendil-works/pi/issues/8675) | **TUI renders one word per line (WSL2/Windows Terminal)** | Markdown paragraphs hard-break on every soft wrap; severe readability regression in 0.84.3. | 2 comments, 3👍, **fixed by PR #8674** |
| [#8697](https://github.com/earendil-works/pi/issues/8697) | **Apple Terminal: Option+arrow sequences unsupported** | Native Terminal.app sends `ESC ESC [A-D`; Pi treats as garbage, breaking word navigation. | 1 comment, **fixed by PR #8696** |

---

## Key PR Progress (10 important)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#8725](https://github.com/earendil-works/pi/pull/8725) | **fix** | **Settle active turn before in-memory fork** — prevents `toolResult` landing in replacement session and `dispose()` cleaning wrong resources. |
| [#8723](https://github.com/earendil-works/pi/pull/8723) | **fix** | **Expose `https-proxy-agent` named export** — resolves #8610 regression for google-vertex behind proxy. |
| [#8719](https://github.com/earendil-works/pi/pull/8719) | **fix** | **Treat whitespace-only tool results as empty** — avoids HTTP 400 from OpenAI-compatible providers on `"\r\n"` output. |
| [#8627](https://github.com/earendil-works/pi/pull/8627) | **feat** | **Use `ctx.cwd` for cwd-sensitive tools** — `read`/`write`/`edit`/`grep`/`find`/`ls`/`glob`/`task` now respect live session cwd. |
| [#8355](https://github.com/earendil-works/pi/pull/8355) | **feat** | **UI prompt events (`ui_prompt_start`/`ui_prompt_end`)** — extensions can show “Waiting for user input” during `ctx.ui.select/confirm/input`. |
| [#8690](https://github.com/earendil-works/pi/pull/8690) | **feat** | **Add GLM-5.3 Flash to Z.AI catalogs** — 1M context, 131k output, reasoning-compatible. |
| [#7602](https://github.com/earendil-works/pi/pull/7602) | **feat** | **Configurable summarization models & thinking levels** — closes #7553; provider errors on compaction context-window limits handled. |
| [#8708](https://github.com/earendil-works/pi/pull/8708) | **fix** | **Resolve `fd`/`rg` versions without GitHub API** — avoids anonymous quota exhaustion on shared egress IPs. |
| [#8707](https://github.com/earendil-works/pi/pull/8707) | **fix** | **Keep ZAI thinking enabled for forced-thinking models** — sends `null` instead of `disabled` when `thinkingLevelMap.off === null`. |
| [#8704](https://github.com/earendil-works/pi/pull/8704) | **fix** | **End event stream on unhandled loop rejection** — catches `runAgentLoop` rejections, calls `stream.end()` to prevent hangs. |

---

## Feature Request Trends
1. **Reasoning/thinking control granularity** — per-operation (compaction, summarization, main chat) thinking budgets and model overrides (#7553, #7602, #8444, #8706, #8707, #8694).
2. **Extension platform maturity** — first-class event hooks (`ui_prompt_*`, `before_agent_start` parity for `sendCustomMessage` #8712), reliable RPC command metadata (#8717, #8718), and `ExtensionAPI.exec` Windows support (#8715).
3. **Session/resume performance** — lazy loading of session files for `/resume` (#8710), repair of malformed JSONL tails (#8346).
4. **Terminal UX polish** — mouse cursor positioning in prompt (#8701), scroll-speed setting (#8716), soft-wrap rendering (#8674), path-aware double-click selection (#8676), Apple Terminal keybindings (#8696).
5. **Provider catalog freshness** — rapid addition of new models (GLM-5.3 Flash #8690, Qwen 3.8 Flash #8709, DeepSeek V4 Pro low effort #8694).

---

## Developer Pain Points (recurring)
- **Windows friction**: PowerShell command mangling (#8688), `.cmd`/npm-global CLI spawn failures (#8715), whitespace-only tool results causing 400s (#8720/#8719).
- **Proxy/enterprise networking**: `HttpsProxyAgent` bundling regression (#8610), GitHub API quota for binary fetches (#8708).
- **Reasoning-model integration fragility**: Thinking-format mismatches across providers (ZAI #8706, Mistral #8700, DeepSeek #8694, OpenAI Responses #8649), signature re-serialization O(n²) perf (#8671).
- **TUI rendering regressions**: Word-per-line (#8675), markdown hard breaks (#8674), CPU peg during streaming reasoning_details (#8711).
- **Event-stream reliability**: Uncaught promise rejections leaving streams open (#8705), steering/follow-up bypassing extension input events (#8718).
- **Security guard overreach**: False positives on written content (#8722), no allowlist/escape mechanism.

---

*Digest generated from GitHub data (issues/PRs updated 2026-08-27). Links point to earendil-works/pi.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-27

## 1. Today's Highlights
- **v0.22.2 released** with a breaking change: the persistent Node REPL is now delivered as a standalone MCP server (#9499). Desktop v0.2.2 and `cua-driver-rs` v0.20.1 (prebuilt, codesigned macOS binaries) also shipped.
- **CI stability dominates** — 27 issues updated today are almost entirely main-branch E2E test failures tracked per-commit; several have `autofix/approved` and are being remediated automatically.
- **Architecture refactors underway** — PRs show active work on Goal recursion budgets, OpenTUI migration foundations, daemon session APIs, structured memory recall, and Web Shell terminal support.

## 2. Releases
| Version | Key Changes |
|---------|-------------|
| **v0.22.2** | **Breaking**: `refactor(node-repl)!` — persistent Node REPL extracted to a standalone MCP server ([#9499](https://github.com/QwenLM/qwen-code/pull/9499)). |
| **desktop-v0.2.2** | Desktop app update (details in release notes at 7b69293). |
| **cua-driver-rs-v0.20.1** | Prebuilt binaries for macOS (codesigned + notarized universal + `.app`), Linux (x86_64/arm64, glibc 2.31), Windows (x86_64/arm64), and Node.js (`@qwen-code/cua-driver`). |

## 3. Hot Issues (Top 10 by Signal)
| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#8124](https://github.com/QwenLM/qwen-code/issues/8124) | Startup banner intermittently missing top lines on first paint (Windows) | Rendering regression in TUI header; affects first impression on Windows. | 10 comments, `welcome-pr`, P2 |
| [#10099](https://github.com/QwenLM/qwen-code/issues/10099) | Command hook cancellation leaves descendant processes running | Security/stability: orphaned child processes on hook timeout/abort. | 2 comments, P2, `roadmap/hooks-events` |
| [#8239](https://github.com/QwenLM/qwen-code/issues/8239) | VP mode: content cut off at bottom, cannot scroll (iTerm2) | Blocks long-output workflows in virtual-buffer mode. | 2 comments, P2, `scope/rendering` |
| [#10058](https://github.com/QwenLM/qwen-code/issues/10058) | Release failed for v0.22.0-nightly (publish job) | Nightly publish pipeline broken; blocks pre-release distribution. | 3 comments, bot-reported |
| [#10222](https://github.com/QwenLM/qwen-code/issues/10222) | Release failed for v0.22.2-nightly (quality job) | Quality gate failing on new nightly; may delay stable. | 3 comments, bot-reported |
| [#8822](https://github.com/QwenLM/qwen-code/issues/8822) | E2E flake: `monitor.test.ts` — watch command not called | Recurring monitor-tool flakiness; `autofix/skip` but still noisy. | 5 comments, P2 |
| [#8153](https://github.com/QwenLM/qwen-code/issues/8153) | SDK permission-control test flake (`auto-edit` mode) | SDK approval-mode regression; `autofix/in-progress`. | 4 comments, P2 |
| [#8870](https://github.com/QwenLM/qwen-code/issues/8870) | ACP integration flake: exit plan mode + permission request | ACP protocol edge case; `autofix/approved`. | 4 comments, P2 |
| [#9237](https://github.com/QwenLM/qwen-code/issues/9237) | CI fail on 90f754e (build-system, SDK) | Build-system breakage tracked per-commit; `autofix/approved`. | 4 comments, P1 |
| [#10186](https://github.com/QwenLM/qwen-code/issues/10186) | CI fail on 5a88324 (latest main) | Fresh main-branch failure; `autofix/skip`. | 3 comments, bot-reported |

> **Pattern**: 24/27 updated issues are CI failure trackers (auto-filed by `qwen-code-dev-bot`). Only 3 are human-reported bugs (#8124, #8239, #10099).

## 4. Key PR Progress (Top 10 by Impact)
| # | Title | Type | Status | Impact |
|---|-------|------|--------|--------|
| [#10259](https://github.com/QwenLM/qwen-code/pull/10259) | `refactor(core): hold Goal sends to caller's recursion budget` | Refactor | Open | Aligns Goal turn accounting with new autonomous spend bound (#9891); removes special-case budget exemption. |
| [#10100](https://github.com/QwenLM/qwen-code/pull/10100) | `fix(core): Reclaim command hook process trees` | Fix | Open (self-review) | **Addresses #10099** — POSIX process groups + SIGTERM/SIGKILL; Windows `taskkill /F /T`. Critical for hook safety. |
| [#10146](https://github.com/QwenLM/qwen-code/pull/10146) | `feat(cli): OpenTUI migration foundation batch` | Feature | Open | Theme, a11y, clipboard, keys, dialogs scaffolding for OpenTUI (#8662). Major UI stack rewrite. |
| [#10198](https://github.com/QwenLM/qwen-code/pull/10198) | `feat(channels): Add owner-scoped named sessions` | Feature | Open | Daemon-managed named tasks (up to 8) with full session persistence per user scope. |
| [#10183](https://github.com/QwenLM/qwen-code/pull/10183) | `feat(memory): add structured on-demand recall` | Feature | Open | Replaces flat auto-memory prompt with structured push/pull protocol + dedicated recall tool. |
| [#10179](https://github.com/QwenLM/qwen-code/pull/10179) | `feat(cli): Add standalone daemon session API` | Feature | Open | REST lifecycle for prompt-less standalone sessions (create, list, resume, archive, export…). |
| [#10149](https://github.com/QwenLM/qwen-code/pull/10149) | `feat(external-context): Add configurable Mem0 extension skeleton` | Feature | Open | Retrieval-only Mem0 stdio extension with versioned schemas & bounded caching (#10113). |
| [#10263](https://github.com/QwenLM/qwen-code/pull/10263) | `feat(cli): reload project runtime after /cd` | Feature | Open (self-review) | Transactional runtime refresh on directory change (settings, file watching, tools, hooks, MCP…). |
| [#9970](https://github.com/QwenLM/qwen-code/pull/9970) | `perf(cli): reduce TUI render overhead` | Perf | Open (autofix/takeover) | Incremental terminal output in virtual-viewport mode + memoized history slice. |
| [#10080](https://github.com/QwenLM/qwen-code/pull/10080) | `fix(core): honor empty core tool allowlists` | Fix | Open | `tools.core: []` now disables all tools (was treated as unrestricted); explicit opt-out. |

## 5. Feature Request Trends (from Issues & PRs)
1. **Daemon & session management** — Named sessions (#10198), standalone session API (#10179), multi-session support.
2. **Memory & context evolution** — Structured recall (#10183), Mem0 integration (#10149), external-context extensibility.
3. **UI stack modernization** — OpenTUI migration (#10146, #8662), virtual-viewport performance (#9970), VP mode fixes (#8239).
4. **Hook safety & observability** — Process-tree reclamation (#10100), hook cancellation semantics (#10099).
5. **Web Shell parity** — Interactive browser terminal (#9984), git update on dirty tree (#9769).
6. **CLI UX polish** — Bootstrap help derivation (#8902), `/cd` runtime reload (#10263), terminal teardown coordination (#7837).

## 6. Developer Pain Points (Recurring)
| Pain Point | Evidence |
|------------|----------|
| **CI flakiness & noise** | 24 auto-filed CI failure issues in 24h; many `autofix/skip` but still flood tracker. Developers lose signal in bot spam. |
| **Hook process leaks** | #10099 (open) + #10100 (fix in review) — orphaned children on timeout/abort is a known gap. |
| **TUI rendering regressions** | #8124 (banner truncation), #8239 (VP mode cutoff), #9970 (render overhead) — cross-platform terminal quirks. |
| **Nightly release pipeline breaks** | #10058 (publish), #10222 (quality) — nightlies failing gates, delaying dogfooding. |
| **Permission/approval mode edge cases** | #8153 (SDK), #8870 (ACP) — flaky tests around tool approval flows. |
| **Windows-specific issues** | #8124 (banner), plus general CI flakes on Windows runners. |

---
*Generated from github.com/QwenLM/qwen-code data as of 2026-08-27. Links point to live GitHub items.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-27

## 1. Today's Highlights
The project is in an active refactoring and stabilization phase. No new release shipped, but 8 issues and 28 PRs moved in the last 24 hours. The dominant theme is **architectural cleanup**: decomposing massive source files (lib.rs 18.7k, config.rs 12.3k, client.rs 11.1k), fixing a v0.9.12 regression that blocked multi-session runs via a global runtime lock, and hardening context-pressure warnings so they persist in the UI. Concurrently, contributor rescues are landing — lifecycle outbox, route-specific tool projection, per-thread usage endpoints, and a safe Claude Code migration planner.

---

## 2. Releases
*No new releases in the last 24 hours.*

---

## 3. Hot Issues (all 8 updated today)

| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#5586](https://github.com/Hmbown/CodeWhale/issues/5586) | **Decompose mega files** (lib.rs 18.7k, config.rs 12.3k, client.rs 11.1k, runtime_threads.rs 9.3k) | Technical debt blocking review velocity, onboarding, and parallel work. Explicitly tagged for the 0.9.12 cleanup lane. | 5 comments, author-driven, high structural impact. |
| [#5620](https://github.com/Hmbown/CodeWhale/issues/5620) | **Context pressure warning is transient; agent doesn’t react** | Safety signal silently lost — medium severity but degrades trust in long-running sessions. | 4 comments; PR #5629 already addresses the display slice. |
| [#5630](https://github.com/Hmbown/CodeWhale/issues/5630) | **Runtime store owner lock blocks multiple sessions** | v0.9.12 regression: machine-global lock hard-fails every CodeWhale after the first. | 1 comment; fixed by PR #5638/#5634 (per-session store root). |
| [#5533](https://github.com/Hmbown/CodeWhale/issues/5533) | **Control surface for supervised operation** (per-session socket, External RuntimeBackendKind) | Enables CI, multiplexers, automation harnesses to manage sessions programmatically. | 4 comments; design-phase, high leverage for enterprise/adoption. |
| [#5637](https://github.com/Hmbown/CodeWhale/issues/5637) | **Scope MCP secret providers to owning runtime** | Security: process-global env mutation leaks secrets across threads; needs per-runtime secret lifetime. | 0 comments; fresh design issue from core contributor. |
| [#5633](https://github.com/Hmbown/CodeWhale/issues/5633) | **Unify route-specific tool projection before dispatch** | Provider routes accept different tool subsets/wire shapes; currently scattered in request builders. | 0 comments; architectural, PR #5636 is a partial fix for Moonshot. |
| [#5290](https://github.com/Hmbown/CodeWhale/issues/5290) | **Fix clickable controls on non-English web routes** | Localization interaction bug (not copy-only); affects all non-English users. | 4 comments; closed today via PR #5647. |
| [#5627](https://github.com/Hmbown/CodeWhale/issues/5627) | **Add Xquik to reviewed MCP recommendations** | UX: users must manually discover/enter endpoint; `/mcp add recommended xquik` fails. | 2 comments; closed today. |

---

## 4. Key PR Progress (10 notable PRs)

| # | Title | Type | Status | Impact |
|---|-------|------|--------|--------|
| [#5648](https://github.com/Hmbown/CodeWhale/pull/5648) | feat(tui): add safe Claude Code migration planner | Feature | Open | Review-first `/import-claude`; inventories Claude sources & MCP servers, translates permissions without silent apply. |
| [#5645](https://github.com/Hmbown/CodeWhale/pull/5645) | feat(tui): rescue lifecycle outbox & extract exec agent | Feature | Open | Opt-in JSONL/webhook outbox for session/turn/stall/subagent events; advances mega-file decomposition (#5586). |
| [#5638](https://github.com/Hmbown/CodeWhale/pull/5638) | fix(runtime): scope thread store per session | Bugfix | **Closed** | Fixes #5630: default store root now `$CODEWHALE_HOME/sessions/<id>/runtime`; enables multi-session on one machine. |
| [#5646](https://github.com/Hmbown/CodeWhale/pull/5646) | fix(tui): rescue route-specific tool projection | Bugfix | Open | Degrades incompatible Moonshot tools per-request instead of failing whole call; preserves contributor authorship. |
| [#5641](https://github.com/Hmbown/CodeWhale/pull/5641) | feat(runtime-api): rescue per-thread usage with CNY coverage | Feature | Open | Adds `GET /v1/threads/{id}/usage` using provider-aware ledger; persists parent + child cost without double-count. |
| [#5644](https://github.com/Hmbown/CodeWhale/pull/5644) | fix(config): shelter ConfigToml parses on 16 MiB stack | Bugfix | Open | Prevents debug-build stack overflow in guided provider-setup/config-save paths. |
| [#5642](https://github.com/Hmbown/CodeWhale/pull/5642) | fix(git): keep read-only probes off user index lock | Bugfix | Open | Applies `GIT_OPTIONAL_LOCKS=0` to internal Git reader; removes `.git/index.lock` contention in user repos. |
| [#5643](https://github.com/Hmbown/CodeWhale/pull/5643) | fix(tui): recover MCP login & restore welcome motion | Bugfix | Open | Replaces internal composer terms with localized send/queue; points failed OAuth to `/mcp login <name>`. |
| [#5629](https://github.com/Hmbown/CodeWhale/pull/5629) | fix(tui): persist context pressure warnings | Bugfix | **Closed** | Promotes warning/high/critical pressure to sticky status (was transient in scrolling metadata). Addresses #5620 display slice. |
| [#5632](https://github.com/Hmbown/CodeWhale/pull/5632) | One worker system; retire Keychain product path | Refactor | Open | Fleet/sub-agents = single worker (spawn inherits parent); roles = labels only; retires OS-keyring path, uses `~/.codewhale/secrets/`. |

---

## 5. Feature Request Trends
1. **Supervised/automated operation** — First-class control socket (message, interrupt, relaunch, status) for CI, multiplexers, harnesses (#5533).  
2. **Model catalog freshness** — Continuous addition of new provider routes (OpenRouter Qwen3.8 Flash, 1M ctx) with verified pricing (#5649, #5631).  
3. **MCP ecosystem integration** — Reviewed recommendations surface, secret scoping per runtime, Tailscale-embedded web server (#5627, #5637, #5635).  
4. **Migration & onboarding** — Safe, review-first importers for competing tools (Claude Code) with transparent permission mapping (#5648).  
5. **Observability** — Per-thread usage endpoints, lifecycle event outbox, persistent context-pressure UI (#5641, #5645, #5629).

---

## 6. Developer Pain Points (recurring)
| Pain Point | Evidence |
|------------|----------|
| **Mega-file maintenance burden** | 4 core files >9k LOC each; explicit cleanup lane issue (#5586) with 5 comments. |
| **Multi-session broken by global locks** | v0.9.12 introduced process-owner lock blocking 2nd+ instance (#5630, fixed in #5638). |
| **Transient safety signals** | Context-pressure warnings vanished into scrollback; agent didn’t react (#5620, #5629). |
| **Stack overflow in debug builds** | Large `ConfigToml` parse overflows default stack; requires 16 MiB dedicated stack (#5644). |
| **Git index.lock contention** | Read-only probes locked user’s working repo index (#5642). |
| **Secret management leakage** | Process-global env mutation exposes MCP creds across threads; no per-runtime lifetime (#5637). |
| **Localization interaction bugs** | Non-English web routes had dead clickable controls (#5290). |
| **MCP discovery friction** | Recommended servers (Xquik) not surfaced; manual endpoint entry required (#5627). |

---

*Data source: `github.com/Hmbown/DeepSeek-TUI` (mirrored as `Hmbown/CodeWhale` in issue/PR links). Digest covers activity updated 2026-08-26 → 2026-08-27.*

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*