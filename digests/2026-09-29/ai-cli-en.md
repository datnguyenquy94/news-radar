# AI CLI Tools Community Digest 2026-09-29

> Generated: 2026-09-29 05:25 UTC | Tools covered: 10

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

# Cross-Tool Comparison Report: AI CLI Ecosystem — 2026-09-29

---

## 1. Ecosystem Overview

The AI CLI landscape is bifurcating into **mature, enterprise-anchored tools** (Claude Code, GitHub Copilot CLI, OpenAI Codex) with dedicated platform integrations and **experimental, architecture-first projects** (OpenCode, Pi, Qwen Code, DeepSeek TUI) pushing multi-agent orchestration, local-model hosting, and provider-agnostic routing. Today's activity clusters around **stabilization sprints** — Windows daemon fixes (Codex), auth loops (Claude, Copilot, Gemini), subagent reliability (Gemini, OpenCode), and CI/test infrastructure (Qwen, DeepSeek). No major feature launches; the signal is **hardening over novelty**.

---

## 2. Activity Comparison (2026-09-29)

| Tool | Releases Today | Hot Issues (Top 10) | PRs Merged/Updated | Community Signal (👍/comments) |
|------|----------------|---------------------|---------------------|--------------------------------|
| **Claude Code** | 1 (v2.1.284 — Sonnet 5.5 default) | 10 | 6 (2 closed, 4 open) | High: #20697 157👍, #12346 139👍, #1757 84 comments |
| **OpenAI Codex** | 3 alphas (0.160.0-a.2/3, 0.159.0-a.13) | 10 | **20+ merged today** (coordinated push) | High: #48074 112👍/68c, #48125 19👍/19c |
| **Gemini CLI** | 1 nightly (v0.63.0-nightly) | 10 | 10 (2 P1 bugfixes, 3 security) | Medium: #21409 8👍/8c, #22323 2👍/13c |
| **GitHub Copilot CLI** | 2 patches (v1.0.90-0/1) | 10 | 0 | Medium: #1274 12👍/29c, #2958 16👍/5c |
| **Kimi Code** | 0 | 0 | 0 | None |
| **OpenCode** | 0 | 10 | 10 (3 closed, 7 open) | Low: #49389 4👍/7c, #49992 4👍/3c |
| **Pi** | 0 | 10 | 10 (5 closed, 5 open) | Low: #10031 2👍/17c, #6393 2👍/3c |
| **Qwen Code** | 0 | 6 | 10 (all open) | Low: #12970 5c, #12976 4c |
| **DeepSeek TUI** | 0 | 10 | 10 (6 closed, 4 open) | Low: #5316 29c (epic), #6698 0c (CI blocker) |
| **Grok Build** | 0 | 0 | 0 | None |

**Key observation**: Codex leads raw PR velocity (20+ merged in a single-day stabilization push). Claude Code and Copilot CLI show sustained high community engagement on long-standing issues. Experimental tools (OpenCode, Pi, Qwen, DeepSeek) are PR-active but with lower external community signal.

---

## 3. Shared Feature Directions (Cross-Tool Convergence)

| Requirement | Tools Affected | Specific Needs |
|-------------|----------------|----------------|
| **Cross-client/session continuity** | Claude Code (#20697, #62476, #97999), Copilot CLI (#3434), Gemini CLI (#18836, #21000), OpenCode (#51269), Pi (#10031) | Skill/settings sync, transcript persistence, CLAUDE.md enforcement, session resume after interrupt |
| **Subagent/child-session reliability** | Gemini CLI (#21409, #22323, #21968), OpenCode (#51269, #51464), Qwen Code (#12931), DeepSeek TUI (#6721) | Validation fixes, metadata propagation, settings inheritance, hang/false-success elimination |
| **Provider-agnostic model routing** | Pi (#10035, #10122, #9714, #9993), OpenCode (#52014, #51978), DeepSeek TUI (#6710, #6719), Qwen Code (#12946) | Virtual models, managed local servers (llama.cpp), OpenAI-compatible parity, Azure/Vertex/Bedrock first-class |
| **Authentication/token lifecycle hardening** | Claude Code (#1757, #97344), Copilot CLI (#4929, #4971, #4968), Gemini CLI (#29448), Codex (#36268) | Persistent sessions, Chrome extension stability, MCP OAuth reuse, headless keyring support |
| **TUI/terminal rendering stability** | Codex (#48125, #49162), OpenCode (#42225), DeepSeek TUI (#6697, #6704, #9828), Pi (#9828) | Resize reflow, clipboard parity (middle-click, blockquote), scrollback corruption, hover artifacts |
| **CI/test infrastructure reliability** | Qwen Code (#12974, #12979), DeepSeek TUI (#6698, #6712), OpenCode (implicit), Codex (implicit) | Flake elimination, shared-process vs. parallel test parity, E2E telemetry alignment |

---

## 4. Differentiation Analysis

| Dimension | Enterprise/Platform Tools | Experimental/Architecture-First Tools |
|-----------|---------------------------|---------------------------------------|
| **Primary Focus** | Reliability, platform integration, enterprise auth, cost predictability | Multi-agent orchestration, local-model sovereignty, provider abstraction, extensibility |
| **Target Users** | Professional developers in org workflows (CI/CD, GitHub/GitLab, VS Code) | Power users, researchers, platform builders, local-first advocates |
| **Technical Approach** | Tight coupling to proprietary models/services; opaque backends | Bring-your-own-model; pluggable providers; WASM/JS extension runtimes; explicit protocol contracts |
| **Release Cadence** | Stable + alpha channels (Codex), monthly patches (Copilot), scheduled defaults (Claude) | Nightlies (Gemini), continuous PR-driven (OpenCode, Pi, Qwen, DeepSeek) |
| **Pain Point Profile** | Auth churn, usage limits, data loss, platform-specific install bugs | Subagent validation, context-window wedging, provider drift, config friction, CI flakes |

**Notable outliers**:  
- **Gemini CLI** straddles both — Google-backed but nightly-released with subagent-first architecture.  
- **Pi** uniquely invests in **managed local inference** (llama.cpp lifecycle) and **Codemode/MCP** (JS-in-WASM tool execution).  
- **DeepSeek TUI** pursues **cross-platform determinism** (shared event authority for TUI/native/browser).

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|------|-------|----------|
| **High Momentum / Mature** | **Claude Code**, **OpenAI Codex**, **GitHub Copilot CLI** | Sustained high 👍/comment counts on multi-month issues; dedicated platform teams; enterprise adoption signals (GitLab parity requests, MSIX packaging, SSO) |
| **High Velocity / Maturing** | **Gemini CLI** | Nightly cadence, P1 bugfix turnaround <24h, security hardening pipeline, subagent epic tracking |
| **Active Development / Early Adoption** | **OpenCode**, **Pi**, **Qwen Code**, **DeepSeek TUI** | Daily PR merges, architectural epics (TUI decomposition, virtual models, managed-agent platform), but low external 👍/comment volume — community is contributor-heavy |
| **Dormant / No Signal** | **Kimi Code**, **Grok Build** | Zero activity in 24h window |

**Momentum indicator**: Codex's 20+ same-day PR merges (all by `copyberry[bot]`) signals a **coordinated stabilization sprint** — rare even for mature projects. Claude Code's 15-month-open auth issue (#1757) with 73👍 shows **maturity debt** despite high engagement.

---

## 6. Trend Signals for Technical Decision-Makers

| Trend | Signal Strength | Implication |
|-------|-----------------|-------------|
| **Local-model orchestration is becoming table stakes** | Pi (managed llama.cpp), OpenCode (provider error hardening), DeepSeek TUI (Tsubasa/OpenAI-compat), Qwen Code (hosted MCP runtime) | Tools that cannot run/manage local models via standard APIs will lose power users. Expect `llama.cpp` lifecycle management to become a checklist item. |
| **Subagent/child-session = new primitive** | Gemini, OpenCode, Qwen, DeepSeek all fixing validation, metadata, settings inheritance | CLI tools must treat subagents as first-class citizens with durable identity, not ephemeral prompts. |
| **Auth/session reliability > new model features** | Top pain point across Claude, Codex, Copilot, Gemini, Pi | Enterprise buyers will gate adoption on "works in CI/CD without daily re-login." Token refresh transparency is a differentiator. |
| **Provider-agnostic routing > single-model optimization** | Pi virtual models, OpenCode catalog fixes, DeepSeek wire routing, Qwen tenant filters | Lock-in resistance is rising. Tools exposing model catalogs, reasoning variants, and cost-aware routing win. |
| **TUI is a stability minefield** | Codex, OpenCode, DeepSeek, Pi all fighting resize/clipboard/scrollback bugs | Terminal UX is a **differentiation surface** — but only if rock-solid. Invest in PTY lifecycle, not just widgets. |
| **CI/test infrastructure debt is slowing everyone** | Qwen (main-branch blocks), DeepSeek (shared-process flakes), implicit in others | Projects adopting **hermetic, reproducible test environments** (Nix, containerized) will ship faster. |

---

## Bottom Line for Developers

- **Choose Claude Code / Copilot CLI / Codex** if you need **platform integration, enterprise auth, and predictable costs** — but budget for auth churn and usage-limit opacity.
- **Choose Gemini CLI** if you want **Google-model access with subagent architecture** and can tolerate nightly-edge roughness.
- **Watch OpenCode, Pi, Qwen Code, DeepSeek TUI** if you are building **custom agent platforms, local-first workflows, or provider-agnostic tooling** — they are defining the next abstraction layer, but APIs are unstable.
- **Avoid Kimi Code / Grok Build** until activity resumes.

*Data as of 2026-09-29. Next digest cycle recommended 2026-10-06 to capture post-stabilization velocity.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-09-29 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking — Most Discussed PRs

| Rank | Skill / PR | Functionality | Discussion Highlights | Status |
|------|------------|---------------|----------------------|--------|
| 1 | **[skill-creator fixes #1298](https://github.com/anthropics/skills/pull/1298)** | Core skill-authoring toolchain: isolates trigger evaluations, fixes Windows `select()` pipe failures, prevents runtime failures from masquerading as non-triggers | Long-running (100+ days); addresses fundamental reliability of skill evaluation pipeline; referenced in multiple issues (#1383, #1394) | **Open** (active, updated 2026-09-16) |
| 2 | **[mcp-builder MCP 2.0 compat #1742](https://github.com/anthropics/skills/pull/1742)** | Updates MCP builder for `mcp>=2.0`: `streamable_http_client` rename, custom headers via `create_mcp_http_client` | Fixes #1668; critical for MCP ecosystem compatibility; rapid iteration (created/updated within Sept) | **Open** (active, updated 2026-09-27) |
| 3 | **[AWT — AI Watch Tester #822](https://github.com/anthropics/skills/pull/822)** | Zero-code E2E testing: gives Claude vision + browser control; auto-generates tests from natural language; visual regression detection | 180+ days open; multiple updates; addresses major gap in AI-driven testing; high community interest in "zero-code" test gen | **Open** (active, updated 2026-09-19) |
| 4 | **[testing-patterns #723](https://github.com/anthropics/skills/pull/723)** | Comprehensive testing skill: Testing Trophy philosophy, AAA pattern, React Testing Library, contract testing, E2E, property-based, mutation testing | Broad scope covering full stack; recently updated (2026-09-21); positions as definitive testing reference for Claude | **Open** (active, updated 2026-09-21) |
| 5 | **[md2video-audio #1703](https://github.com/anthropics/skills/pull/1703)** | Compiles Markdown → MP4 with human-like voiceovers via Marp + TTS; zero-cost (no API keys) | Novel media generation use case; rapid development (2 weeks); taps growing "docs-as-video" trend | **Open** (active, updated 2026-09-15) |
| 6 | **[proofcore-contract-auditor #1771](https://github.com/anthropics/skills/pull/1771)** | Web3 static analysis for Solidity/Rust; anchors cryptographic audit proofs on TON blockchain via ProofCore Merkle protocol | First Web3 security skill in repo; specialized but high-value niche; submitted by protocol team (ProofCore-Protocol) | **Open** (new, updated 2026-09-16) |
| 7 | **[notion-spec-to-implementation #1245](https://github.com/anthropics/skills/pull/1245)** | Transforms Notion specs → implementable tasks with acceptance criteria + progress tracking; paired with quantitative-resume-auditor | Dual-skill PR; 118 days active; addresses spec→code workflow automation; practical enterprise demand | **Open** (active, updated 2026-09-28) |
| 8 | **[blast-radius #1776](https://github.com/anthropics/skills/pull/1776)** | Pre-execution safety checklist for bulk/destructive ops: classifies impact, requires confirmations, archives state | Addresses "query right, operation wrong" gap; safety-first pattern; very recent but conceptually important | **Open** (new, updated 2026-09-18) |

---

## 2. Community Demand Trends — From Issues

| Trend | Evidence (Issue + 👍/Comments) | Core Need |
|-------|-------------------------------|-----------|
| **Supply-chain security & trust boundaries** | [#492](https://github.com/anthropics/skills/issues/492) (43 💬, 2 👍) — community skills masquerading as official `anthropic/` namespace | Namespace isolation, verified publisher badges, installation warnings |
| **Organizational skill governance** | [#228](https://github.com/anthropics/skills/issues/228) (16 💬, 8 👍) — no org-wide sharing; manual .skill file distribution | Shared skill library, one-click install links, team workspaces |
| **Evaluation infrastructure reliability** | [#556](https://github.com/anthropics/skills/issues/556) (12 💬, 7 👍) — `claude -p` never triggers skills (0% trigger rate); [#1390](https://github.com/anthropics/skills/issues/1390) — mcp-builder eval scores 0/N | Working `run_eval.py`, real MCP server test harness, trigger debugging |
| **Plugin duplication & management** | [#189](https://github.com/anthropics/skills/issues/189) (6 💬, 9 👍) — `document-skills` + `example-skills` install identical content | Deduplication, plugin composition, skill registry |
| **Context window optimization** | [#1487](https://github.com/anthropics/skills/issues/1487) (4 💬) — `claude-api` injects 156k tokens in one call | Lazy loading, token budgeting, progressive disclosure |
| **Skill authoring tooling maturity** | [#1383](https://github.com/anthropics/skills/issues/1383) (4 💬) — silent benchmark failures, Windows trigger eval broken, skill shadowing; [#1394](https://github.com/anthropics/skills/issues/1394) (4 💬, 2 👍) — XSS in eval-viewer | Cross-platform CI, secure HTML rendering, benchmark parity |
| **AI agent safety & governance** | [#1385](https://github.com/anthropics/skills/issues/1385) (4 💬, 1 👍) — 3-gate pipeline: calibration → adversarial review → verification; [#1776](https://github.com/anthropics/skills/pull/1776) blast-radius skill | Pre-task calibration, adversarial patterns, destructive-op guardrails |

---

## 3. High-Potential Pending Skills — Active PRs Likely to Land

| PR | Skill | Why It Has Momentum |
|----|-------|---------------------|
| [#1771](https://github.com/anthropics/skills/pull/1771) | **proofcore-contract-auditor** | Protocol-backed; Web3 security is underserved; cryptographic proof anchoring is novel |
| [#1703](https://github.com/anthropics/skills/pull/1703) | **md2video-audio** | Zero-cost video generation from docs; high demo value; taps content-repurposing trend |
| [#822](https://github.com/anthropics/skills/pull/822) | **AWT (AI Watch Tester)** | 6-month gestation; solves "Claude can't test what it can't see"; vision+browser = force multiplier |
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | Encyclopedia-scale; recently refreshed; becomes default reference for "how do I test X with Claude?" |
| [#1245](https://github.com/anthropics/skills/pull/1245) | **notion-spec-to-implementation** + **quantitative-resume-auditor** | 4-month active cycle; dual deliverable; spec→code automation is top enterprise ask |
| [#1776](https://github.com/anthropics/skills/pull/1776) | **blast-radius** | Safety primitive; composable with any destructive skill; addresses liability concerns |
| [#1615](https://github.com/anthropics/skills/pull/1615) | **scnet-hpc** | HPC/Slurm workflow automation; niche but high-value for research computing; profile-based design |
| [#486](https://github.com/anthropics/skills/pull/486) | **ODT skill** | OpenDocument (ISO standard) support; LibreOffice integration; fills format gap vs. docx/pdf |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for *trustworthy, production-grade skill infrastructure* — secure distribution namespaces, reliable evaluation harnesses, org-level governance, and safety guardrails — rather than any single domain-specific skill.**  
> *Evidence: Top 3 issues by engagement (#492 security, #228 org sharing, #556 eval reliability) all target the *platform layer*; 7 of 15 issues concern tooling/quality/safety, not new capabilities.*

---

*Report generated from public Git

---

# Claude Code Community Digest — 2026-09-29

## 1. Today's Highlights

- **Claude Sonnet 5.5 (`claude-sonnet-5-5`)** is now the default Sonnet model on the Anthropic API, offering 1M context window at $2/$10 per Mtok with $0.20/Mtok cache reads — a significant upgrade for long-context workflows.
- Authentication stability remains the top community pain point: the "constant login required" issue (#1757, 84 comments, 73 👍) persists since June, and new reports confirm Chrome extension sign-in loss on restart (#97344).
- A concerning **weekly usage limit regression** (#97398) shows ~3.6× faster consumption since the Sep 25 reset, with users hitting limits at ~93 responses per 1% vs. ~935 previously.

---

## 2. Releases

### v2.1.284
- **New default model**: Claude Sonnet 5.5 (`claude-sonnet-5-5`) — 1M context, $2/$10 per Mtok input/output, $0.20/Mtok cache reads
- **Auto-mode UX**: Added "Yes, but ask again next time" option for the prompt before reading outside working directories
- [Release notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.284)

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#1757](https://github.com/anthropics/claude-code/issues/1757) | **Constant re-authentication required** (auth/core) | Users must re-login via web almost daily; breaks unattended automation | 84 comments, 73 👍 — open since Jun 2025 |
| [#12346](https://github.com/anthropics/claude-code/issues/12346) | **GitLab integration** (tools/api) | Feature parity with GitHub: repo connection, MRs, mobile access | 53 comments, 139 👍 — highest upvoted open enhancement |
| [#20697](https://github.com/anthropics/claude-code/issues/20697) | **Sync Skills between Desktop & CLI** (core) | Skills created in one client don't propagate to the other | 49 comments, 157 👍 — strongest community demand |
| [#62476](https://github.com/anthropics/claude-code/issues/62476) | **Silent transcript deletion after 30 days** (bug) | Conversation history auto-purged without user consent or notice | 25 comments, 27 👍 — data loss concern |
| [#87640](https://github.com/anthropics/claude-code/issues/87640) | **Fable 5 false-positive on "Hi"** (model) | Single-word greeting triggers `reasoning_extraction` safeguard | 22 comments, 20 👍 — overzealous safety filtering |
| [#41456](https://github.com/anthropics/claude-code/issues/41456) | **Status bar for Desktop app** (statusline/desktop) | No persistent status/info bar in Desktop UI | 17 comments, 70 👍 — basic UX gap |
| [#88747](https://github.com/anthropics/claude-code/issues/88747) | **Worktree hooksPath writes absolute path** (tools) | Worktrees inherit main checkout's hooks, breaking isolation | 15 comments, 1 👍 — git workflow breakage |
| [#70647](https://github.com/anthropics/claude-code/issues/70647) | **macOS installer produces unsealed app bundle** (installation) | `ClaudeCode.app` fails code signature validation, macOS blocks launch | 15 comments, 5 👍 — macOS install broken |
| [#93680](https://github.com/anthropics/claude-code/issues/93680) | **Bash tool uses /proc/self/fd/N instead of mkdirat** (bash) | Fails on systems without procfs (containers, minimal Linux) — regression in 2.1.263 | 3 comments — platform compatibility regression |
| [#97999](https://github.com/anthropics/claude-code/issues/97999) | **CLAUDE.md rules not enforced across sessions** (model) | Project instructions ignored in new sessions, defeating persistent config | 1 comment — fresh report, core reliability issue |

---

## 4. Key PR Progress

| # | PR | Status | Summary |
|---|-----|--------|---------|
| [#94847](https://github.com/anthropics/claude-code/pull/94847) | **diff: lazy pane open on first edit** | Open | Diff pane now opens only when there's a tracked file to show; avoids empty pane on ignored/outside-repo writes |
| [#98018](https://github.com/anthropics/claude-code/pull/98018) | **mods: revert agents-md truncated reads & diff forced colors** | Closed | Reverts #96363/#96364 — restores prior behavior after regressions |
| [#96364](https://github.com/anthropics/claude-code/pull/96364) | **agents-md: auto-paginated Read no longer counts as delivery** | Closed | Fixes nested AGENTS.md re-attachment logic when Read is paginated due to token cap |
| [#96363](https://github.com/anthropics/claude-code/pull/96363) | **diff: pass --no-color to prevent ANSI escapes in diff body** | Closed | Fixes git diff output corruption when `color.ui=always` or `color.diff=always` is set |
| [#97952](https://github.com/anthropics/claude-code/pull/97952) | **ci: security hardening for GitHub Actions calling Claude** | Open | Adds egress-firewall runner, pinned action versions, least-privilege tokens for triage/dedupe workflows |
| [#31204](https://github.com/anthropics/claude-code/pull/31204) | **Add AI Learning Roadmap interactive canvas app** | Closed | React/Vite node-edge graph for AI learning paths with localStorage persistence (community contribution) |

---

## 5. Feature Request Trends

From the issue landscape, the strongest community demand clusters around:

1. **Cross-client continuity** — Skill/settings sync between Desktop and CLI (#20697, 157 👍), transcript persistence (#62476), CLAUDE.md enforcement (#97999)
2. **Git platform parity** — GitLab integration (#12346, 139 👍) matching existing GitHub support
3. **Desktop app maturity** — Status bar (#41456, 70 👍), sidebar regression fixes (#97406), sleep/process issues (#89110)
4. **Authentication reliability** — Persistent sessions, Chrome extension stability (#97344), uninstall without paid account (#11789)
5. **Model behavior control** — Instruction following (#13689), safeguard false-positives (#87640), rule adherence (#98025)

---

## 6. Developer Pain Points

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Authentication churn** | #1757 (84 comments, 15 months open), #97344 (Chrome), #11789 (uninstall blocked) | Breaks CI/CD, unattended runs, multi-device workflows |
| **Usage limit opacity & regression** | #97398 (3.6× faster drain post-reset), no visibility into token accounting | Unpredictable costs, planning impossible |
| **Data loss / history gaps** | #62476 (30-day auto-delete), #97894 (empty session list vs. disk transcripts) | Lost context, debugging difficulty, trust erosion |
| **Platform-specific regressions** | #70647 (macOS install broken), #93680 (Linux Bash tool), #97406/#93239 (Windows Desktop), #92785 (Mac freeze) | Blocks adoption on affected platforms |
| **Worktree/git integration bugs** | #88747 (hooksPath), #81776 (--cloud bundle vs. remote) | Breaks standard git workflows, monorepo setups |
| **Model instruction drift** | #98025 (bypassed "no prod changes" rule twice), #13689 (instruction following), #87640 (over-filtering) | Safety/reliability concerns for production use |

---

*Digest generated from github.com/anthropics/claude-code data as of 2026-09-29. All links point to live GitHub items.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-09-29

---

## 1. Today's Highlights

The Codex team shipped three rapid alpha releases (0.160.0-alpha.2/3, 0.159.0-alpha.13) while merging **20+ PRs today** targeting a wave of Windows regressions introduced in 0.158.0—console-window flashing, sandbox failures, and app-server daemon visibility bugs. Linux users also hit a middle-click paste regression in 0.158.0, now fixed in PR #49112. The dominant theme: stabilizing the Windows daemon/subprocess pipeline and restoring TUI clipboard behavior across platforms.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| `0.160.0-alpha.3` | Alpha | Latest in 0.160 series; follows alpha.2 by hours |
| `0.160.0-alpha.2` | Alpha | Iteration on 0.160 branch |
| `0.159.0-alpha.13` | Alpha | Late 0.159 stabilization |

> No changelogs published yet; see PRs below for de-facto release notes.

---

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#48074](https://github.com/openai/codex/issues/48074) | **Windows: terminal windows repeatedly flash during requests after installing the Codex daemon** | Core daemon regression; breaks workflow for all Windows CLI users. 112 👍, 68 comments. | 🔥 Highest engagement; users report unusable CLI on Windows 11. |
| [#46388](https://github.com/openai/codex/issues/46388) | **Windows: elevated sandbox initialization fails in 0.155.0 (0.154.0 works)** | Sandbox regression blocking elevated workflows; 21 comments. | Regression bisected to 0.155.0; workaround = downgrade. |
| [#44768](https://github.com/openai/codex/issues/44768) | **Windows: app-server daemon opens visible console for every hook/shell command** | Daemon UX polish; console spam during every tool call. 19 comments, 7 👍. | Long-standing; worsened by shared daemon architecture. |
| [#48125](https://github.com/openai/codex/issues/48125) | **Linux/SSH: "I CANT FUCKING COPY TEXT" — copy broken in TUI** | Critical TUI usability; 19 comments, 19 👍. | Closed today; likely fixed by PR #49153 / #49112. |
| [#48945](https://github.com/openai/codex/issues/48945) | **Windows 0.158.0: sandbox setup opens visible terminal windows** | Duplicate of #48074/#44768; 11 👍, 7 comments. | Confirms 0.158.0 regression scope. |
| [#48466](https://github.com/openai/codex/issues/48466) | **Windows Desktop: cold startup stalls on "Loading"; restarting app-server fixes it** | Desktop app reliability; 12 comments. | Points to app-server handshake race. |
| [#49162](https://github.com/openai/codex/issues/49162) | **Linux 0.158.0: mouse selection no longer supports middle-click paste** | Linux power-user workflow broken; 3 comments, filed today. | Fixed in PR #49112 (merged today). |
| [#36268](https://github.com/openai/codex/issues/36268) | **Android: "Authorize this phone" loops forever after ChatGPT reinstall** | Mobile auth flow broken for months; 14 comments. | Persistent cross-platform auth bug. |
| [#48421](https://github.com/openai/codex/issues/48421) | **Windows MSIX: "Run as administrator" fails — no package identity** | Admin launch broken for packaged app; 8 comments. | MSIX-specific; blocks enterprise workflows. |
| [#48311](https://github.com/openai/codex/issues/48311) | **Windows: built-in LaTeX compiler fails — "Unable to find standard directories"** | Niche but complete break for LaTeX users; 6 👍. | Platform path-resolution issue in bundled toolchain. |

---

## 4. Key PR Progress (Top 10 Merged Today)

| # | PR | Summary | Category |
|---|----|---------|----------|
| [#49164](https://github.com/openai/codex/pull/49164) | **Suppress Windows console windows for background subprocesses** | Adds `codex_utils_process::background_spawn` with Job Object + `CREATE_NO_WINDOW`; fixes flashing consoles from daemon/hooks. | **Windows Core Fix** |
| [#49112](https://github.com/openai/codex/pull/49112) | **Add X11 primary selection and middle-click paste support** | Publishes selections to `PRIMARY`; pastes on middle-click. Restores Linux TUI workflow broken in 0.158.0. | **Linux TUI Fix** |
| [#49153](https://github.com/openai/codex/pull/49153) | **Omit blockquote markers when copying quoted selections in TUI** | Returns plain text for blockquote selections; fixes copy-paste pollution. | **TUI UX** |
| [#49161](https://github.com/openai/codex/pull/49161) | **Honor app-server provider defaults in the TUI** | Stops client overrides from hiding server sessions in resume/fork history. | **Daemon/Server** |
| [#49160](https://github.com/openai/codex/pull/49160) | **Support projectless TUI sessions with workspace defaults** | Skips folder trust prompts for ad-hoc directories; applies workspace defaults. | **Onboarding** |
| [#49144](https://github.com/openai/codex/pull/49144) | **Preserve server reasoning summary & verbosity settings in TUI** | Prevents local defaults from overwriting server/thread settings. | **Settings Sync** |
| [#49135](https://github.com/openai/codex/pull/49135) | **Treat explicit provider model catalogs as authoritative** | Fixes stale/duplicate model listings from providers with `model_catalog_url`. | **Model Catalog** |
| [#49130](https://github.com/openai/codex/pull/49130) | **Move content-filter guidance into shared Responses retry handler** | Centralizes `content_filter` retry logic with recovery guidance. | **Resilience** |
| [#49119](https://github.com/openai/codex/pull/49119) | **Add recovery guidance to content-filter retries** | Instructs model on permitted alternatives when content filtered. | **Resilience** |
| [#49105](https://github.com/openai/codex/pull/49105) | **Resume unsent TUI input after reconnecting** | Tracks unsent vs unconfirmed messages; auto-resumes queued input post-reconnect. | **Reconnection UX** |

> All 20 PRs shown in the feed were **closed/merged today** by `copyberry[bot]` — indicating a coordinated stabilization push.

---

## 5. Feature Request Trends (from Issues)

| Trend | Evidence | Frequency |
|-------|----------|-----------|
| **Windows console/daemon hygiene** | #48074, #44768, #48945, #48876, #48921, #49122, #49134 | 7+ issues |
| **TUI clipboard/selection parity (Linux/Windows/macOS)** | #48125, #49162, #36158, #48951 | 4+ issues |
| **App-server/daemon reliability & visibility** | #48074, #48466, #28905, #44768 | 4+ issues |
| **Mobile/Android auth flow** | #36268, #31794 | 2 long-standing |
| **Desktop app cold-start / spinner hangs** | #48466, #48484, #49170 | 3 issues |
| **MSIX/Windows packaging quirks (admin, identity)** | #48421, #48466 | 2 issues |
| **Browser/Chrome sandbox on Windows** | #41055, #47270 | 2 issues |

---

## 6. Developer Pain Points (Recurring Frustrations)

1. **Windows daemon = console spam** — Every hook/shell command flashes a window (0.158.0 regression). Users call it "unusable" and downgrade to 0.154.0/0.157.0.
2. **TUI copy/paste broken across platforms** — Linux lost middle-click; Windows copy adds blockquote markers; SSH copy broken entirely. Core editing workflow disrupted.
3. **App-server as single point of failure** — Desktop app stalls on startup if daemon handshake fails; restarting daemon fixes it. No fallback.
4. **Mobile auth loop** — Android "Authorize this phone" infinite loop persists since July; blocks mobile-first developers.
5. **MSIX packaging breaks admin workflows** — "Run as administrator" loses package identity; enterprise users blocked.
6. **Sandbox/elevation regressions** — 0.155.0+ breaks elevated sandbox; no clear migration path documented.
7. **No visible sound/notification controls on Windows** — Desktop plays sounds ignoring system settings; no in-app toggle.

---

## Quick Links

- **Repo**: [github.com/openai/codex](https://github.com/openai/codex)
- **All issues updated today**: [Query](https://github.com/openai/codex/issues?q=updated%3A2026-09-29+is%3Aissue)
- **All PRs merged today**: [Query](https://github.com/openai/codex/pulls?q=merged%3A2026-09-29+is%3Apr)

---

*Generated from GitHub data as of 2026-09-29 23:59 UTC. Alpha releases move fast — verify version before reporting.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-09-29

## 1. Today's Highlights
The nightly release **v0.63.0-nightly.20260929** ships a critical auth fix preventing infinite loops caused by file contention and headless keyring issues. Meanwhile, the PR pipeline is dominated by stability hardening: two separate fixes resolve a 100% CPU hang when `@`-commands appear inside quoted strings in piped input, and a grep command-injection hardening lands. On the issue side, subagent reliability (hanging, misreported success, ignored settings) and browser-agent Wayland support remain the highest-engagement pain points.

---

## 2. Releases
### v0.63.0-nightly.20260929.gfe6350238
* **Fix**: `fix(auth): prevent infinite auth loop from file contention, headless keyring, and supervisor state drops` (#29448)  
  Addresses a regression where concurrent file access and missing keyring daemons could stall the CLI indefinitely in headless environments.  
  **Changelog**: [compare](https://github.com/google-gemini/gemini-cli/compare/v0.63.0-n...)

---

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent reports GOAL success after hitting MAX_TURNS** | Masks real failures; breaks automation that trusts termination reason. | 13 comments, 2 👍 — P1, needs retest |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent hangs indefinitely** | Blocks all delegated work; workaround is disabling subagents entirely. | 8 comments, 8 👍 — P1, high user impact |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | **Leverage model’s bash affinity via zero-dep sandboxing** | Strategic: aligns tooling with model’s native POSIX workflow for better code exploration. | 9 comments, 1 👍 — P2, large effort |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **Assess AST-aware file reads/search/mapping** | Could cut token waste & turns by reading precise method bounds. | 7 comments, 1 👍 — Epic tracking multiple spikes |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | **Gemini under-uses custom skills/sub-agents** | Reduces value of extensibility; users must explicitly invoke. | 6 comments — P2, needs retest |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | **Browser Agent ignores `settings.json` overrides (maxTurns, etc.)** | Configuration drift; users can’t tune browser agent behavior. | 4 comments — P2 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | **Browser subagent fails on Wayland** | Linux/Wayland users blocked from browser automation. | 4 comments, 1 👍 — P1 |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | **400 error when >128 tools available** | Hard limit surprises users with large toolsets; needs smarter scoping. | 3 comments — P2 |
| [#23571](https://github.com/google-gemini/gemini-cli/issues/23571) | **Model scatters tmp scripts across workspace** | Pollutes repos; cleanup overhead before commit. | 3 comments — P2 |
| [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) | **Agent should discourage destructive commands (git reset --force, etc.)** | Safety guardrail gap for high-risk operations. | 3 comments, 1 👍 — P2 |

---

## 4. Key PR Progress (Top 10 by Impact)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#29547](https://github.com/google-gemini/gemini-cli/pull/29547) | **Bugfix (P1)** | Prevents `@`-command regex from swallowing quoted strings (`"@scope/pkg"`) and stalling glob expansion — fixes 100% CPU hang in headless mode. |
| [#29436](https://github.com/google-gemini/gemini-cli/pull/29436) | **Bugfix (P1)** | Duplicate root-cause fix for the same `@`-in-quotes hang; ensures regex doesn’t greedily consume multi-line code. |
| [#29536](https://github.com/google-gemini/gemini-cli/pull/29536) | **Security** | Hardens `grep.ts` against command-line option injection (CWE-88) by enforcing explicit `-e` delimiter for patterns. |
| [#29546](https://github.com/google-gemini/gemini-cli/pull/29546) | **Feature (P2)** | Enables `/skill-name` activation in **non-interactive mode** (CI/scripts), previously only worked in TUI. |
| [#29333](https://github.com/google-gemini/gemini-cli/pull/29333) | **Security (P2)** | Vets permissions of **all policy directories** (user, workspace) — not just system — preventing writable-policy exploits. |
| [#29336](https://github.com/google-gemini/gemini-cli/pull/29336) | **Security (P2)** | Enforces secure ownership on non-system policy dirs; adds POSIX/Windows `allowUserOwnership` logic. |
| [#29332](https://github.com/google-gemini/gemini-cli/pull/29332) | **Reliability (P2)** | Bounds sandbox-expansion recursion to prevent OOM crash when a tool repeatedly returns `sandbox_expansion_required`. |
| [#29328](https://github.com/google-gemini/gemini-cli/pull/29328) | **Security (P1)** | A2A server now honours `LOG_LEVEL` and stops leaking credentials into logs. |
| [#29435](https://github.com/google-gemini/gemini-cli/pull/29435) | **Bugfix (P2)** | Fixes process hang on session exit: proper `stdin` drain/unref and MCP transport teardown. |
| [#29440](https://github.com/google-gemini/gemini-cli/pull/29440) | **Bugfix** | Uses UTF-8 byte offsets for `web-fetch` citations (matching `web-search`), fixing misplaced citations on emoji/multibyte text. |

---

## 5. Feature Request Trends
1. **Subagent-first architecture** — Multiple epics (#19873, #20195, #22745, #18287) push for parallel, discoverable, AST-aware subagents with shared memory.
2. **Persistent, file-based task tracking** — Replacing in-context `WriteToDo` with CRUD task files (#18836, #21000) to survive context rot and session boundaries.
3. **Model-native bash workflow** — Zero-dependency sandboxing that lets the model chain `grep`/`sed`/`awk` directly (#19873), reducing tool-call overhead.
4. **Configuration parity** — Browser agent and subagents must respect `settings.json` overrides (#22267, #22232) like core agents do.
5. **Token frugality** — “Tactful Extraction” hierarchy (grep → surgical read) and AST-aware reads to cut per-turn tokens (#19561, #22745).

---

## 6. Developer Pain Points (Recurring Themes)
| Pain Point | Evidence |
|------------|----------|
| **Subagent unreliability** | Hanging (#21409), false success (#22323), ignored skills (#21968), missing bug-report context (#21763). |
| **Browser agent fragility** | Wayland failure (#21983), settings ignored (#22267), profile lock crashes (#22232). |
| **Headless/pipe-mode hangs** | `@`-command regex CPU spin (#29434/#29547), stdin timeout drops input silently (#29329). |
| **Tool explosion** | 400 error at >128 tools (#24246); no automatic scoping. |
| **Workspace pollution** | Model writes tmp scripts everywhere (#23571); no designated sandbox dir. |
| **Destructive command risk** | `git reset --force`, DB mutations without confirmation (#22672). |
| **Terminal rendering jank** | Full-history re-render on resize (#21924); flicker on large sessions. |
| **Symlink agent discovery broken** | `~/.gemini/agents/foo.md` symlink not recognized (#20079). |

---

*Generated from `google-gemini/gemini-cli` GitHub data (issues, PRs, releases) updated 2026-09-29.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-09-29

## 1. Today's Highlights
Two patch releases (v1.0.90-0/1) landed in the last 24 hours, fixing MCP OAuth token reuse for servers like Datadog and a session-resume regression where withdrawn prompts reappeared. Meanwhile, the issue tracker shows a cluster of authentication/token-refresh failures (#4929, #4971, #4968) and Nix/direnv subprocess deadlocks (#1838, #3392) affecting developer workflows.

---

## 2. Releases

| Version | Date | Key Changes |
|---------|------|-------------|
| **v1.0.90-1** | 2026-09-29 | **Fixed**: MCP OAuth sign-in reuses valid cached tokens (e.g., Datadog); withdrawn running prompts stay removed after session resume. |
| **v1.0.90-0** | 2026-09-29 | General fixes and changes (details in changelog). |
| **v1.0.89** | 2026-09-28 | Left-click focuses `ask_user`/elicitation inputs; added support for `.claude/rules` as custom instructions; sidebar shows blue dot for unread session turns. |
| **v1.0.89-7 / -6** | 2026-09-28 | PR creation now respects repo PR templates; configurable `TGREP_FILE_COUNT_THRESHOLD` for indexed search; shell output no longer shows trailing command-completion metadata. |

> 🔗 **Release assets**: [github.com/github/copilot-cli/releases](https://github.com/github/copilot-cli/releases)

---

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#1274](https://github.com/github/copilot-cli/issues/1274) | **CLI constantly getting 400 errors for invalid request body** | Blocks code-review workflows; 95% failure rate reported. | 29 comments, 12 👍 — high-impact regression. |
| [#4929](https://github.com/github/copilot-cli/issues/4929) | **Process-local auth token stops refreshing; all prompts fail until restart** | Long-running sessions become unusable; `/login` doesn’t recover. | 13 comments — auth reliability blocker. |
| [#1838](https://github.com/github/copilot-cli/issues/1838) | **CLI hangs in Nix/direnv due to subprocess I/O deadlock** | Entire toolchain stalls on Nix flake + direnv setups. | 7 comments, 12 👍 — platform-specific but severe. |
| [#3392](https://github.com/github/copilot-cli/issues/3392) | **Bash tool breaks on NixOS ≥ v1.0.49** | `Failed to start bash process` on every agent command. | 5 comments, 13 👍 — regression since v1.0.49. |
| [#2958](https://github.com/github/copilot-cli/issues/2958) | **Per-mode default model config (plan vs. autopilot)** | Top feature request: separate model defaults per interaction mode. | 5 comments, 16 👍 — strong community demand. |
| [#4971](https://github.com/github/copilot-cli/issues/4971) | **Hourly “Authorization error… credentials expired”** | Recurring auth failure; `/login` and `mcp reload` don’t help. | 3 comments — mirrors #4929 pattern. |
| [#4968](https://github.com/github/copilot-cli/issues/4968) | **OAuth redirect URI port mismatch breaks MCP login** | Fixed-port CIMD vs. ephemeral runtime port breaks most MCP servers. | 2 comments — architectural OAuth bug. |
| [#4606](https://github.com/github/copilot-cli/issues/4606) | **Google Workspace MCP OAuth fails on trailing-slash issuer mismatch** | Blocks Google Workspace MCP before browser flow starts. | 3 comments, 1 👍 — enterprise MCP blocker. |
| [#2216](https://github.com/github/copilot-cli/issues/2216) | **Text selection highlight low contrast on dark terminals** | Accessibility: selected text unreadable on dark backgrounds. | 6 comments, 2 👍 — UX polish needed. |
| [#3042](https://github.com/github/copilot-cli/issues/3042) | **“ask” permissionDecision shows two confirmations per gated tool call** | Double-prompt UX regression for hook-based permissions. | 4 comments — workflow friction. |

---

## 4. Key PR Progress
*No pull requests updated in the last 24 hours.*  
Monitor [github.com/github/copilot-cli/pulls](https://github.com/github/copilot-cli/pulls) for incoming fixes targeting the auth/Nix clusters above.

---

## 5. Feature Request Trends
1. **Per-mode model configuration** (#2958, #3070) — developers want `plan` and `autopilot` modes to default to different models, mirroring VS Code chat modes.  
2. **MCP OAuth robustness** (#4968, #4606, #4983) — redirect-URI handling, issuer matching, and slow-initialize timeouts are blocking enterprise MCP adoption.  
3. **Session resilience** (#3434, #4929) — surviving updates, toggles, and token refresh without losing context.  
4. **Editor integration for long inputs** (#4050) — `$EDITOR` support for `ask_user` multi-paragraph responses.  
5. **Custom agent frontmatter arrays** (#3070) — `model:` as string[] for model-picker parity with VS Code.

---

## 6. Developer Pain Points (Recurring Themes)
| Pain Point | Representative Issues | Frequency |
|------------|----------------------|-----------|
| **Auth token lifecycle** | #4929, #4971, #4968, #4606 | Very high — multiple daily reports |
| **Nix/direnv subprocess deadlocks** | #1838, #3392 | High — blocks entire NixOS/Nix-flake user base |
| **400/4xx request failures** | #1274, #3042 | High — breaks core prompt/execution loop |
| **Session/context loss on restart** | #3434, #4983 | Medium — hurts long-running workflows |
| **Terminal rendering/accessibility** | #2216, #1936, #1726 | Medium — UX polish gaps on dark themes |
| **Windows-specific quirks** | #1250, #2997, #4972 | Medium — silent fails, bracketed paste, MCP orphan processes |

---

*Digest generated from github.com/github/copilot-cli data as of 2026-09-29 00:00 UTC.  
Next digest: 2026-09-30.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-09-29

## Today's Highlights
The OpenCode v2 ecosystem is seeing a surge of day-zero fixes and infrastructure hardening: TUI i18n groundwork landed, provider error handling was hardened across multiple routes, and session-title generation now strips model commentary. Meanwhile, subagent/child-session validation failures (#51269) and terminal-resize regressions (#42225) remain the top user-facing blockers.

---

## Hot Issues (10 Noteworthy)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#42225](https://github.com/anomalyco/opencode/issues/42225) | **TUI does not re-layout on terminal shrink** | Core UX regression: stale width leaves blank space or overflow in browser-hosted terminals (xterm.js). Open since Aug, 9 comments. | 👍 0 · 9 comments |
| [#51269](https://github.com/anomalyco/opencode/issues/51269) | **V2: subagent LLM request fails validation** | Every subagent dispatch fails at client-side schema validation (`system[4]` InvalidType vs `LLM.SystemPart`). Blocks all child-session workflows. | 👍 0 · 7 comments |
| [#49389](https://github.com/anomalyco/opencode/issues/49389) | **[FEATURE] Five session capabilities unreachable from plugins** | Core exposes session enumeration/creation/control but plugin API lacks write-side access. Blocks ecosystem tooling. | 👍 4 · 7 comments |
| [#51464](https://github.com/anomalyco/opencode/issues/51464) | **GitLab Astra fails fresh subagent creation** | `gitlab/duo-chat-gpt-6-astra` sends parent session ID as `subagent.sessionID`; Opus 5.5 works. Provider-specific regression. | 👍 0 · 6 comments |
| [#44007](https://github.com/anomalyco/opencode/issues/44007) | **TUI `--auto` stalls background tabs at permission requests** | Auto-approval only works for focused tab; background tabs block until selected. | 👍 0 · 4 comments |
| [#49992](https://github.com/anomalyco/opencode/issues/49992) | **VSCode plugin broken: unrecognized `--port` flag** | Plugin invokes `opencode --port` but CLI requires `opencode serve --port`. Blocks VSCode integration entirely. | 👍 4 · 3 comments |
| [#51857](https://github.com/anomalyco/opencode/issues/51857) | **Web: stalled-stream watchdog lost in v2 refactor** | SSE silent death (tab suspend, network flap) requires hard refresh. Watchdog from #47571 was dropped. | 👍 0 · 3 comments |
| [#51972](https://github.com/anomalyco/opencode/issues/51972) | **[FEATURE] Native task routing with reasoning-variant selection** | Request for model-aware routing across resolved models + compatible reasoning variants. New today. | 👍 0 · 3 comments |
| [#51997](https://github.com/anomalyco/opencode/issues/51997) | **V2 session titles include model commentary** | Titles start with planning text (`We need title only...`) despite valid title returned. Affects `gpt-6-luna`. | 👍 0 · 2 comments |
| [#52004](https://github.com/anomalyco/opencode/issues/52004) | **Title generation picks metered model over free** | `Model.small` matches hardcoded family names, ignoring cost. Free models on same provider never selected. | 👍 0 · 2 comments |

---

## Key PR Progress (10 Important)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#52014](https://github.com/anomalyco/opencode/pull/52014) | **fix(ai)** | Read provider error messages from common body layouts (xAI, Groq, etc.). Closed. |
| [#52013](https://github.com/anomalyco/opencode/pull/52013) | **fix(desktop)** | Isolated dev service now uses fixed port `0x0C0C` (3084) instead of random. Closed. |
| [#50798](https://github.com/anomalyco/opencode/pull/50798) | **feat(tui)** | Match main model metadata in child sessions (fixes #50795). Open. |
| [#51978](https://github.com/anomalyco/opencode/pull/51978) | **fix(ai)** | Show raw provider error bodies when no structured message recognized. Closed. |
| [#52011](https://github.com/anomalyco/opencode/pull/52011) | **fix(opencode)** | Include repository URL in published `opencode-ai` npm metadata (fixes #52010). Open. |
| [#51236](https://github.com/anomalyco/opencode/pull/51236) | **fix(ui)** | Calm diff word highlights via `@pierre/diffs 1.5.1` — one highlight per change. Closed. |
| [#52009](https://github.com/anomalyco/opencode/pull/52009) | **fix(session-ui)** | "Moved to …" renders as timeline divider (shared `TimelineSeparator`). Closed. |
| [#52006](https://github.com/anomalyco/opencode/pull/52006) | **fix(core)** | Exclude commentary from generated session titles (fixes #51997). Open. |
| [#52008](https://github.com/anomalyco/opencode/pull/52008) | **fix(ai)** | Defer Mistral thinking metadata until block end; buffer native thinking units. Open. |
| [#52000](https://github.com/anomalyco/opencode/pull/52000) | **feat(tui)** | Add per-locale i18n infrastructure + wire UI strings (adapts #48731). Open. |

---

## Feature Request Trends
1. **Plugin API parity** — Multiple issues (#49389, #34957, #35364) demand write-access to session lifecycle, tool context, and hidden/ephemeral sessions from plugins.
2. **Subagent/child-session control** — Stop background subagents from web UI (#52016), fix validation (#51269), improve model metadata visibility (#50795).
3. **i18n & localization** — TUI i18n groundwork (#51998, #52000), Console Chinese support (#52001), fix zh/zht terminology (#51982).
4. **Model routing intelligence** — Task-aware routing with reasoning-variant selection (#51972), cost-aware title model picker (#52004).
5. **Export/portability** — Include system prompt in session export (#39033), repository metadata in npm package (#52010).

---

## Developer Pain Points
- **Subagent workflow broken by default** — Validation errors (#51269), GitLab Astra regression (#51464), hidden model metadata (#50795), no stop control (#52016).
- **TUI resize & auto-mode regressions** — Shrink not handled (#42225), background tabs stall on permissions (#44007), silent empty-turn success (#52015).
- **Provider error opacity** — Raw JSON shown instead of messages (#51978, #52014), thinking-block cache 400s on Anthropic (#51141), Bedrock reasoning finalization (#51959, #51999).
- **Configuration friction** — VSCode plugin uses wrong CLI syntax (#49992), OpenAI-compatible provider settings unresolvable (#52002), global plugin double-registration (#52003).
- **Session hygiene** — Titles polluted with commentary (#51997), metered models chosen over free (#52004), worktree sessions bind to main repo (#51992).
- **Web/desktop reliability** — SSE watchdog lost (#51857), Electron bump needed (#52005), isolated dev port conflicts (#52013).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-09-29

## Today's Highlights
The Pi ecosystem continues rapid iteration on reasoning-model ergonomics and local-model orchestration. Major PRs landed managed `llama.cpp` server lifecycle, virtual model routing, and Codemode/MCP support—signaling a push toward "bring your own model" flexibility. Meanwhile, the community surfaces persistent context-window wedging, tool-call corruption, and TUI scrollback corruption as the top reliability blockers for daily drivers.

---

## Releases
*No new releases in the last 24 hours.*

---

## Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#10031](https://github.com/earendil-works/pi/issues/10031) | **Pi stuck in "Working..." after ESC interrupt** | High-frequency UX regression since ~v0.84; forces hard kill + `pi -c` recovery. | 17 comments, 2 👍 — multiple machines, month-long duration |
| [#9508](https://github.com/earendil-works/pi/issues/9508) | **OpenAI-compatible providers reject Pi's request fields** | Breaks non-OpenAI endpoints (Ollama, vLLM, etc.) with 400/422 errors. | 8 comments — provider interop gap |
| [#10033](https://github.com/earendil-works/pi/issues/10033) | **Compaction prompt blows context window with thinking blocks** | Auto-compaction *never* succeeds on reasoning models (DeepSeek V4.1). | 7 comments, 1 👍 — architectural compaction flaw |
| [#9974](https://github.com/earendil-works/pi/issues/9974) | **llama.cpp Responses API tool calls duplicated/corrupted** | Tool execution runs twice or with mangled args; silent data corruption risk. | 6 comments — streaming parser bug |
| [#9905](https://github.com/earendil-works/pi/issues/9905) | **Anthropic `thinking.display` hardcoded to "summarized"** | No CLI control over thinking visibility; limits debugging/inspection. | 6 comments — missing configurability |
| [#9409](https://github.com/earendil-works/pi/issues/9409) | **Sessions wedge at context ceiling on reasoning models** | Permanent `stopReason: "length"` loops; compaction recovery fails. | 4 comments — session unrecoverable |
| [#10074](https://github.com/earendil-works/pi/issues/10074) | **Anthropic edit calls corrupt non-ASCII (Korean) → control chars** | Silent `\uXXXX` → `\b`/`\f` corruption; file damage + retry storms. | 4 comments — encoding pipeline bug |
| [#9828](https://github.com/earendil-works/pi/issues/9828) | **Fullscreen exit corrupts terminal scrollback** | Overlapping lines, history interleaving on teardown; macOS + tmux. | 4 comments — TUI teardown race |
| [#6393](https://github.com/earendil-works/pi/issues/6393) | **Allow disabling `/share` command** | Security hardening: prevent accidental sensitive-data leaks. | 3 comments, 2 👍 — long-standing privacy ask |
| [#10077](https://github.com/earendil-works/pi/issues/10077) | **llama.cpp `contextWindow` reset to 128k in models-store.json** | Ignores `presets.ini` `ctx-size=65536`; causes truncation surprises. | 3 comments — config persistence bug |

---

## Key PR Progress (Top 10 by Scope & Readiness)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#10040](https://github.com/earendil-works/pi/pull/10040) | **feat** | **Codemode + MCP**: JS-in-WASM (QuickJS) execution with tool access, per-session store, model catalog, classifiers. |
| [#10122](https://github.com/earendil-works/pi/pull/10122) | **feat** | **Managed llama.cpp server**: Pi spawns/stops `llama-server` on-demand via local socket + random API key; zero-config local models. |
| [#10035](https://github.com/earendil-works/pi/pull/10035) | **feat** | **Virtual models**: Extension-registered catalog entries that route to physical models + thinking levels per request. |
| [#9714](https://github.com/earendil-works/pi/pull/9714) | **feat** | **Azure Foundry Chat Completions**: Unblocks DeepSeek V4 Pro on Azure (was Responses-API only). |
| [#9993](https://github.com/earendil-works/pi/pull/9993) | **feat** | **Vertex AI + Anthropic Claude**: Exposes Claude Opus/Sonnet/Haiku via Google Cloud credentials. |
| [#10142](https://github.com/earendil-works/pi/pull/10142) | **fix** | **Bedrock Converse reasoning effort**: Sends `reasoning_effort` to OpenAI models on Bedrock (was Claude-only). |
| [#10136](https://github.com/earendil-works/pi/pull/10136) | **fix** | **macOS Finder paste**: Inserts file *paths* not icons; preserves image/text fallbacks. |
| [#10135](https://github.com/earendil-works/pi/pull/10135) | **fix** | **Compaction usage normalization**: Prevents footer crash on resume by sanitizing `summaryUsage` from provider. |
| [#10134](https://github.com/earendil-works/pi/pull/10134) | **fix** | **Built-in tool renderer**: Preserves `description`/`parameters`/`execute` *and* prompt fields (was stripping them). |
| [#10150](https://github.com/earendil-works/pi/pull/10150) | **docs** | **Footer documentation**: New section explaining cost calculation, token rates, and status widgets. |

---

## Feature Request Trends
1. **Model routing & virtualization** — Virtual models (#10035, #10147), per-request model selection, and policy-driven fallbacks.
2. **Local-model orchestration** — Managed `llama.cpp` lifecycle (#10122), config-driven context windows (#10077), WebSocket transport for local endpoints (#5446).
3. **Provider parity** — First-class support for OpenAI-compatible APIs (#9508), Azure Chat Completions (#9714), Vertex Anthropic (#9993), Bedrock reasoning (#10142).
4. **Session resilience** — Compaction that respects thinking tokens (#10033), threshold-compaction recovery (#10137), context-ceiling unwedging (#9409).
5. **Extension surface expansion** — Typed TUI dialogs for remote responders (#10123, #10124), programmatic tool dispatch (#10153), scoped-model merge (#10147).

---

## Developer Pain Points (Recurring Frustrations)
- **Reasoning-model context management**: Thinking blocks explode compaction prompts, wedge sessions at ceiling, and break resume — *the #1 reliability complaint*.
- **Tool-call fidelity**: Duplicated calls (llama.cpp), corrupted Unicode (Anthropic), dropped fields (built-in renderer), timeout defaults (edit tool).
- **Provider drift**: Pi sends OpenAI-only fields to compatible endpoints; hardcoded Anthropic params; missing reasoning params on Bedrock/Vertex.
- **TUI stability**: Scrollback corruption on fullscreen exit (#9828), frozen partial frames in regular mode (#10141), Kitty protocol leaks on SSH (#7294, #10079).
- **Session durability**: ESC interrupt leaves "Working..." zombie (#10031); aborted turns emit false extension errors (#10149); unanswered tool calls wedge forever (#10148).
- **Config persistence**: `models-store.json` overwrites `presets.ini` context sizes; type-checking depends on live catalog fetch (#10129).

---

*Data sourced from `github.com/badlogic/pi-mono` — Issues & PRs updated 2026-09-28 → 2026-09-29.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-09-29

## Today's Highlights
The project saw significant CI instability today with two main-branch failures blocking merges: a test infrastructure failure and an E2E telemetry test regression linked to recent memory migration changes. Simultaneously, a critical bug was identified where `invalid_tool_params` errors are incorrectly diagnosed as `max_tokens` truncation, causing wasteful retry loops. The managed-agent stack continues rapid iteration with tenant filter hardening, private hosted MCP runtime implementation, and durable shell result delivery.

---

## Releases
No new releases published in the last 24 hours.

---

## Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| [#12970](https://github.com/QwenLM/qwen-code/issues/12970) **invalid_tool_params misdiagnosed as max_tokens truncation** | Core bug: every malformed tool-call argument is falsely blamed on token limits, triggering identical retries that consume quota and stall agents. Root cause in streaming parser/OpenAI converter. | 5 comments, P2 priority, `status/ready-for-human` — active triage; fix PR [#12982](#key-pr-progress) already opened. |
| [#12974](https://github.com/QwenLM/qwen-code/issues/12974) **Main CI failed: Test (ubuntu-latest, Node 22.x)** | Pre-test infrastructure failure on `main` blocks all merges; no test results reported. | Bot-filed, `status/ready-for-agent`, `autofix/skip` — requires human investigation of CI environment. |
| [#12979](https://github.com/QwenLM/qwen-code/issues/12979) **E2E Tests failed: gen-ai-telemetry & Advisor suites** | Two CLI E2E suites broken by recent memory-migration change; telemetry span alignment and native Advisor tool tests failing. | Bot-filed, `status/ready-for-agent`, `autofix/in-progress` — mitigation PR [#12981](#key-pr-progress) disables managed auto-memory in affected tests. |
| [#12976](https://github.com/QwenLM/qwen-code/issues/12976) **Declare tenant filter 403 on remaining filtered routes** | Security hardening: ensures `403 actor_scope_mismatch` is declared on all Managed Agent routes covered by `TenantContextFilter` for consistent authZ documentation. | 4 comments, P3 feature request — part of managed-agent authZ completeness. |
| [#12980](https://github.com/QwenLM/qwen-code/issues/12980) **Web-shell: reference chip attaches to earlier matching plain text** | UX bug: composer text matching a later inline reference chip causes misattribution; renders typed text as chip, hiding actual selection. | 3 comments, P3, `category/ui` — affects web-shell composer reliability. |
| [#11954](https://github.com/QwenLM/qwen-code/issues/11954) **Fleet Shepherd Dashboard** | Auto-maintained fleet health dashboard; last tick 2026-09-29T05:09:07Z, scan-signal age 11m, zero syncs/dispatches/releases. | 0 comments — operational visibility bot, no action needed. |

---

## Key PR Progress

| PR | Description | Status |
|----|-------------|--------|
| [#12982](https://github.com/QwenLM/qwen-code/pull/12982) **fix(core): stop misdiagnosing malformed tool-call args as max_tokens truncation** | Fixes #12970: streaming parser no longer rewrites `finish_reason` to `length` on brace-depth errors; preserves provider's actual `finish_reason` and surfaces `invalid_tool_params` correctly. | Open, self-review |
| [#12981](https://github.com/QwenLM/qwen-code/pull/12981) **test(integration): disable managed auto-memory in advisor and telemetry CLI tests** | Mitigates #12979: sets `memory.enableManagedAutoMemory: false` in two broken E2E suites; confines change to test setup, no production behavior change. | Open, bot-authored |
| [#12975](https://github.com/QwenLM/qwen-code/pull/12975) **fix(runtime-broker): Close deferred W0c-2 findings from #12761** | Resolves 7 deferred findings from managed-context Broker review: session state checks before context install, release-gate guards, and broker-side validation. | Open, self-review |
| [#12972](https://github.com/QwenLM/qwen-code/pull/12972) **fix(runtime-broker): read ready, seed and request integers exactly** | Java broker now reads all protocol integers (handshake guards, stored records) as exact types (`Integer`, `Long`, `BigInteger`) via shared rule — prevents coercion bugs. | Open, autofix takeover |
| [#12946](https://github.com/QwenLM/qwen-code/pull/12946) **feat(managed-agent): Implement private Hosted MCP runtime (H1)** | Adds `hosted-workspace-mcp/1` profile: Runtime owns stdio/Streamable HTTP/SSE connections + credentials; models receive pinned tool schemas with durable lifecycle. | Open |
| [#12966](https://github.com/QwenLM/qwen-code/pull/12966) **fix(managed-agent): Declare tenant filter's 403 on task read routes** | Implements A10 from #12847: tenant filter's `403 actor_scope_mismatch` declared on `/v1/agents/` and web-shell task read routes. | Open |
| [#12894](https://github.com/QwenLM/qwen-code/pull/12894) **feat(managed-agent): Add durable remote Shell result delivery** | O2 remote result path: bounded stdout/stderr publication, immutable catalog/object storage, fixed-version range reads, Session receipt admission, Tool v3 routing, Hosted recovery. | Open |
| [#12931](https://github.com/QwenLM/qwen-code/pull/12931) **fix(core): run safe Code Mode calls concurrently** | Enables `Promise.allSettled` for independent tool calls in Code Mode; each call retains own result/failure, preserving output and guiding model to inspect all results. | Open |
| [#12933](https://github.com/QwenLM/qwen-code/pull/12933) **fix(core): preserve Code Mode cache when enabling workflow** | Loading bundled review skill no longer clears Code Mode cache; workflow enabled without changing model's existing tool declarations. | Open |
| [#12585](https://github.com/QwenLM/qwen-code/pull/12585) **fix(acp): persist embedded text resources for transcript replay** | Persists bounded original ACP embedded text `resource` blocks with owning prompt; replays as typed user chunks; daemon UI SDK exposes separately from links/attachments. | Open, autofix takeover, self-review |

---

## Feature Request Trends
From the active issues and PRs, the strongest feature directions are:

1. **Managed Agent Platform Hardening** — Tenant isolation (`403` declarations on all routes), private hosted MCP runtime, durable shell result delivery, and standalone stack deployment (#12976, #12946, #12894, #12358).
2. **Code Mode Reliability** — Concurrent safe tool execution, cache preservation during workflow enablement, and correct tool-call error classification (#12931, #12933, #12970).
3. **Telemetry & Observability Completeness** — GenAI telemetry span alignment across LLM/tool fields, advisor tool instrumentation, and memory-migration test stability (#12979, #12917).
4. **Web-Shell UX Polish** — Reference chip anchoring, composer behavior, and status-bar configurability (#12980, #12354).
5. **ACP/Transcript Fidelity** — Embedded resource persistence, cron prompt recording, and offline replay (#12585, #8838).

---

## Developer Pain Points
Recurring frustrations visible in the last 24h:

| Pain Point | Evidence |
|------------|----------|
| **CI flakiness blocking velocity** | Two main-branch failures (#12974, #12979) with `autofix` labels but requiring human intervention; infra failures before tests even run. |
| **Error misclassification wasting tokens** | #12970: `invalid_tool_params` → false `max_tokens` diagnosis → identical retries burning quota; fixed in #12982. |
| **Memory migration breaking tests** | #12979: managed auto-memory background extractor broke telemetry and Advisor E2E suites; mitigated by disabling in tests (#12981). |
| **Reference chip misattachment in web-shell** | #12980: plain-text matching later chip steals annotation; renders user input as chip, hides actual reference. |
| **Tenant filter 403 undeclared on routes** | #12976: authZ errors returned but not declared in OpenAPI/spec, hurting client SDK generation and debugging. |
| **Java broker integer coercion bugs** | #12972: protocol integers read as non-exact types causing handshake/record guard failures; now fixed with exact-type rule. |

---

*Digest generated from github.com/QwenLM/qwen-code data as of 2026-09-29. Links point to live GitHub items.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-09-29

## 1. Today's Highlights
The Codewhale team closed three high-visibility TUI rendering bugs (#6697, #6704) and an OpenRouter pricing regression (#6690) while shipping fixes for stream-open retry logic (#6711) and provider wire routing (#6710). A new Tsubasa provider descriptor lands (#6719) alongside a critical PTY lifecycle fix preventing idle terminals from being marked stale (#6716). CI flakiness in shared-process tests is being addressed (#6712) after a gate failure on main (#6698).

## 2. Releases
No new releases published in the last 24 hours.

## 3. Hot Issues (10 Noteworthy)

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| [#5316](https://github.com/Hmbown/Codewhale/issues/5316) **EPIC-005: CodeWhale TUI Crate Decomposition** | Umbrella epic driving architectural decomposition of the TUI crate per Linear execution plan (C03–C10). 29 comments indicate active cross-team coordination. | 29 comments, 0 👍 — ongoing since Aug 10 |
| [#6699](https://github.com/Hmbown/Codewhale/issues/6699) **SSE stream-open failures skip retry budget** | Network failures *before* response headers terminate turns immediately — the only code path without retry. PR #6711 fixes this. | 2 comments, updated today |
| [#6700](https://github.com/Hmbown/Codewhale/issues/6700) **Stream retry budgets & timeouts hardcoded as `const`** | Operators on unreliable/proxied networks cannot tune timeouts without patching binaries. PR #6711 adds configuration surface. | 1 comment, updated today |
| [#6109](https://github.com/Hmbown/Codewhale/issues/6109) **Deterministic audiovisual pet across surfaces** | Cross-platform (browser/TUI/native) shared world model for the "Codewhale" avatar — requires unified event authority & replay model. | 2 comments, founder-authored |
| [#6160](https://github.com/Hmbown/Codewhale/issues/6160) **App-server terminal byte contract (ConPTY, resize, session)** | Defines the GPUI-owned interactive terminal contract — blocking native pane work in codewhale-platform#566. | 0 comments, founder-authored |
| [#6721](https://github.com/Hmbown/Codewhale/issues/6721) **Emergency compaction impacts `save session` task** | Compaction interrupted a session-save command, risking context transfer reliability. FYI for compaction/UX interplay. | 0 comments, created today |
| [#6695](https://github.com/Hmbown/Codewhale/issues/6695) **Add Tsubasa provider descriptor** | Community-requested preset for Tsubasa (OpenAI-compatible gateway) — avoids custom provider definition. PR #6719 merged. | 0 comments, approved by founder |
| [#6689](https://github.com/Hmbown/Codewhale/issues/6689) **Hooks: export post-admission execution receipt** | `tool_call_after` hooks lack the effective command, cwd, and full stdout/stderr — PR #6713 adds `DEEPSEEK_TOOL_EXECUTION_RECEIPT`. | 0 comments, PR merged today |
| [#6698](https://github.com/Hmbown/Codewhale/issues/6698) **Shared-process workspace gate fails on main** | Clean `main` fails `cargo test --workspace --all-features` (9 TUI lib tests) while nextest passes — CI reliability blocker. | 0 comments, reported by core contributor |
| [#6644](https://github.com/Hmbown/Codewhale/issues/6644) **TUI `/undo`: path-scoped restore, uncapped lookup, fork-inherited points** | Runtime API `patch-undo` upgraded but TUI command still uses legacy selection with three gaps. Closed (superseded by PR #6714?). | 0 comments, closed Sep 28 |

## 4. Key PR Progress (10 Important)

| PR | Type | Summary |
|----|------|---------|
| [#6711](https://github.com/Hmbown/Codewhale/pull/6711) **fix(engine): retry stream-open failures; make stream budgets configurable** | Bug fix + Config | Adds bounded retry for `create_message_stream` connect/SSE-header failures; exposes `stream_open_retry_budget`, `stream_open_timeout`, `stream_read_timeout` via config. Closes #6699, refs #6700. |
| [#6710](https://github.com/Hmbown/Codewhale/pull/6710) **fix(opencode-zen): route catalog-proven models on declared wire** | Bug fix | Fixes 58/111 catalog models failing as "unproven endpoint" by routing via live `/models` wire declarations. Closes #6705. |
| [#6714](https://github.com/Hmbown/Codewhale/pull/6714) **fix(tui): no hover rules on jump button; no black holes behind detail target** | Bug fix | Removes `UNDERLINED` hover layer from 3×3 jump button (#6697); fixes black background artifact after 30 min (#6704). Closes both. |
| [#6713](https://github.com/Hmbown/Codewhale/pull/6713) **feat(hooks): export post-admission execution receipt to `tool_call_after`** | Feature | Delivers `DEEPSEEK_TOOL_EXECUTION_RECEIPT` env var with rewritten command, cwd, exit code, stdout/stderr previews. Closes #6689. |
| [#6719](https://github.com/Hmbown/Codewhale/pull/6719) **feat(providers): add Tsubasa descriptor on compatible transport** | Feature | Bundles Tsubasa (`id: tsubasa`, base_url `https://api.tsubasa.ai/v1`) as OpenAI-compatible preset. No new `ProviderKind`. Closes #6695. |
| [#6716](https://github.com/Hmbown/Codewhale/pull/6716) **Keep idle owned PTYs available for reconnect and resize** | Bug fix | Excludes owned PTYs from stale marking (was: 60s no output → `tty: null` → resize/reconnect broken). Critical for long-running shells. |
| [#6712](https://github.com/Hmbown/Codewhale/pull/6712) **fix(tests): remove shared-process races behind #6698 gate flakes** | CI fix | Fixes 9 TUI lib test races in `cargo test --workspace --all-features` (single-process) while nextest (multi-process) stayed green. Refs #6698. |
| [#6718](https://github.com/Hmbown/Codewhale/pull/6718) **fix(tui): workflow run bar and fan-out rows say what happened** | UX fix | Improves workflow footer: shows refusal/failure reasons instead of solid bar; adds per-row status for fan-out agents. Founder-reported. |
| [#6715](https://github.com/Hmbown/Codewhale/pull/6715) **fix(auth): choose, show and switch ChatGPT/xAI accounts** | Auth UX | Adds account selector on login, displays active account in UI, surfaces which account hit usage limits. Founder-driven. |
| [#6720](https://github.com/Hmbown/Codewhale/pull/6720) **fix(onboarding,web): shell PATH one-liner, `/` shortcut guard, locale option lang, localized dates** | Onboarding/Web | Installer PATH guidance + web a11y/i18n fixes (no deploy until next web release). |

## 5. Feature Request Trends
From the issue corpus, three clear directions emerge:

1. **Configuration externalization** — Hardcoded `const` timeouts/retry budgets (#6700), provider wire lists (#6705), and terminal contracts (#6160) are being promoted to config/schema-driven surfaces.
2. **Cross-platform determinism** — The "audiovisual pet" (#6109) and terminal byte contract (#6160) reflect a push for *identical* engine/TUI/native behavior via shared event authority and replay models.
3. **Provider ecosystem breadth** — Lightweight descriptor additions (Tsubasa #6695, Yolo-Auto #6408) on existing compatible transports show preference for data-driven provider expansion over new `ProviderKind` variants.

## 6. Developer Pain Points
| Pain Point | Evidence |
|------------|----------|
| **Unreliable stream establishment** | #6699: SSE connect/header failures kill turns with zero retry — unique gap in an otherwise retried path. |
| **Opaque/too-short CLI limits** | #6688: `exec` prompt via argv capped at ~128 KiB (E2BIG); no stdin/file alternative. |
| **CI flakiness in monorepo test modes** | #6698: Shared-process `cargo test` fails on main while nextest passes — 9 TUI tests racy. |
| **Hook observability gaps** | #6689: `tool_call_after` lacks effective command, cwd, full I/O — required for audit/debug tooling. |
| **TUI visual regressions over time** | #6704: Text background turns black after ~30 min; #6697: Jump button renders horizontal lines on hover. |
| **Provider catalog staleness** | #6705: 58/111 OpenCode Zen models blocked by compiled-in wire list — requires live catalog sync. |

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*