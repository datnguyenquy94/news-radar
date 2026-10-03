# AI CLI Tools Community Digest 2026-10-03

> Generated: 2026-10-03 04:58 UTC | Tools covered: 10

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

# Cross-Tool Comparison Report: AI CLI Tools Ecosystem (2026-10-03)

---

## 1. Ecosystem Overview

The AI CLI tools landscape is bifurcating into **platform-integrated** (Claude Code, GitHub Copilot CLI, OpenAI Codex, Gemini CLI) and **independent/extensible** (OpenCode, Pi, Qwen Code, DeepSeek TUI) categories. All active projects are converging on three architectural priorities: **extensibility platforms** (mods/plugins/skills), **managed/background agent runtimes** for multi-session workflows, and **enterprise-grade reliability** (auth, sandboxing, auditability). Regression velocity remains high across the board — every tool with recent releases shipped fixes for issues introduced in the prior 1–5 versions, signaling that rapid iteration is outpacing stabilization. Desktop/GUI parity with terminal UX is a universal gap; no tool has achieved feature parity.

---

## 2. Activity Comparison (2026-10-03)

| Tool | New Issues (24h) | PRs Merged/Updated (24h) | Release Status | Top Community Signal |
|------|------------------|--------------------------|----------------|----------------------|
| **Claude Code** | 15 | 4 open (core team) | v2.1.288 stable | #91870 Mods: 238 💬, 130 👍 |
| **OpenAI Codex** | 7+ (VS Code queue cluster) | 10+ (alpha sprint) | 6 alphas (v0.162.0-alpha.4–9) | #49834 VS Code queue: 19 💬 |
| **Gemini CLI** | 10 | 7 merged, 3 open | Nightly v0.64.0 | #21409 Agent hang: 8 💬, 8 👍 |
| **GitHub Copilot CLI** | 10 | 1 (external) | 3 patches (v1.0.92-1/2/3) | #4438 Skill discovery: 11 💬, 12 👍 |
| **Kimi Code CLI** | 0 | 0 | — | No activity |
| **OpenCode** | 10 | 12+ | None | #23153 Crypto pay: 55 👍, 24 💬 |
| **Pi** | 10+ | 17 merged/updated | v1.0.0 stable (managed) | #7547 Windows strategy: 72 💬 |
| **Qwen Code** | 5 | 10+ | Nightly v0.24.7 | #13078 CVE audit fail: 7 💬 |
| **DeepSeek TUI** | 8 | 10+ | 0.10.1 release branch | #5316 Crate epic: 31 💬 |
| **Grok Build** | 0 | 0 | — | No activity |

**Active tools (7/10)**: Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, OpenCode, Pi, Qwen Code, DeepSeek TUI.  
**Highest PR velocity**: Pi (17), OpenAI Codex (10+), DeepSeek TUI (10+), Qwen Code (10+), OpenCode (12+).  
**Highest issue engagement**: Pi (#7547, 72 comments), OpenCode (#23153, 55 👍), Claude Code (#91870, 130 👍).

---

## 3. Shared Feature Directions (Cross-Tool Consensus)

| Requirement | Tools Affected | Specific Needs |
|-------------|----------------|----------------|
| **Extensibility/Plugin Platform Maturity** | Claude Code (mods), Gemini CLI (skills/sub-agents), GitHub Copilot CLI (skills), OpenCode (V2 plugins), DeepSeek TUI (TS harness), Qwen Code (lazy tool discovery) | Stable APIs, config propagation, lazy discovery, versioned contracts, marketplace distribution |
| **Managed/Background Agent Runtime** | Qwen Code (Managed Agent Runtime), OpenAI Codex (app-server, remote), OpenCode (SSE resilience), GitHub Copilot CLI (background agent steer), Pi (subagents) | Durable processes, session trust without terminal, broker auth, reboot recovery, observability |
| **Enterprise Auth & Multi-Provider Support** | OpenAI Codex (GovCloud, Bedrock tiers, BYOM), GitHub Copilot CLI (BYOK Deepseek/GLM), OpenCode (GitLab Duo, Vertex, proxy auth), Pi (Azure Foundry, Bedrock, Cloudflare), Qwen Code (broker auth) | Custom provider persistence, capability overrides, token caching, proxy/NTLM, compliance UX |
| **Worktree/Git Workflow Correctness** | Claude Code (hooks leak, skills scope), OpenCode (worktree discovery), GitHub Copilot CLI (allowed_directories), Gemini CLI (symlinked agents) | Isolation guarantees, config scoping, hook/containment boundaries |
| **Desktop/GUI Parity with Terminal** | Claude Code (Mermaid, themes, statusline, worktree skills), OpenAI Codex (VS Code extension queue), OpenCode (Desktop macOS free-tier error, worktree sidebar), Pi (TUI redraw storms, CPU), DeepSeek TUI (native terminal adoption) | Rendering fidelity, long-session stability, feature parity, accessibility |
| **Session/Context Reliability** | All tools | Compaction fidelity, resume correctness, token accounting, state persistence, crash recovery |

---

## 4. Differentiation Analysis

| Dimension | Platform-Integrated Tools | Independent/Extensible Tools |
|-----------|---------------------------|------------------------------|
| **Primary Integration Target** | Vendor cloud (Anthropic, OpenAI, Google, GitHub) | Multi-provider, BYOM, local-first |
| **Extensibility Model** | Curated (mods, skills, marketplace) | Open plugin architectures (V2 typed composition, TS harness) |
| **Session Model** | Single-threaded, terminal-centric | Multi-session, background, web-shell, fleet |
| **Enterprise Focus** | SSO, subscription enforcement, audit logs | Proxy auth, self-hosted GitLab/Vertex, crypto payments, GovCloud |
| **Technical Approach** | Managed runtime, opaque internals | Exposed internals (scheduler, MCP, SSE, Bazel/C++ backbone) |
| **Target User** | Individual devs, teams on vendor platform | Power users, platform builders, orgs needing control |
| **Release Cadence** | Stable + patches (Claude, Copilot) / Alpha sprint (Codex) | Nightly + release branches (Pi, Qwen, DeepSeek) |

**Notable divergences**:
- **Claude Code** invests heaviest in *mods as platform* (highest-engagement issue in repo history).
- **OpenAI Codex** is in a *VS Code extension stabilization sprint* — 6 alphas in 24h targeting message-queue corruption.
- **Gemini CLI** leads on *core stability hygiene* — 7 merged PRs in 24h fixing atomic writes, scheduler enforcement, MCP timeouts.
- **Qwen Code** uniquely pushes *Managed Agent Runtime* as a productized multi-tenant service (broker auth, durable processes, web shell).
- **Pi** is rewriting its *C++/Bazel backbone* (Bazel 8, rio-vt, llama.cpp classifiers) while fixing v1.0.0 regressions.
- **DeepSeek TUI** bets on *Rust execution authority + TypeScript extensibility* and native terminal adoption.
- **OpenCode** emphasizes *plugin author DX* (historical changesets, session domain exposure, typed composition).

---

## 5. Community Momentum & Maturity

| Tier | Tools | Indicators |
|------|-------|------------|
| **High Momentum / Rapid Iteration** | OpenAI Codex, Pi, Qwen Code, DeepSeek TUI, OpenCode | Daily/alpha releases, 10+ PRs/24h, architectural refactors in flight (crate decomposition, Bazel migration, Managed Runtime) |
| **High Engagement / Platform Defining** | Claude Code, OpenCode | Highest 👍/comment counts on strategic issues (mods, crypto pay, Windows strategy) |
| **Stabilization Focus** | Gemini CLI, GitHub Copilot CLI | Patch/nightly cadence, core correctness PRs (atomic state, scheduler, MCP reconnection), fewer architectural bets |
| **Low/No Activity** | Kimi Code CLI, Grok Build | Zero 24h activity |

**Maturity signals**:
- **Most production-hardened**: GitHub Copilot CLI (v1.0.92 patches), Claude Code (v2.1.x stable).
- **Most experimental**: OpenAI Codex (alpha sprint), Pi (v1.0.0 post-release fire drill), DeepSeek TUI (0.10.1 branch with breaking arch changes).
- **Best regression discipline**: Gemini CLI (7 fixes for core correctness in 24h, no new regressions reported).
- **Worst regression velocity**: Claude Code (5 regressions in 5 versions: statusline, worktree skills, mods default-off, VS Code freeze, daemon statusline).

---

## 6. Trend Signals for Technical Decision-Makers

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **Extensibility is the new moat** | Claude Code mods (238 💬), Gemini sub-agents, OpenCode V2 plugins, DeepSeek TS harness, Qwen lazy discovery | Tool choice increasingly hinges on plugin API stability and ecosystem breadth, not just model quality |
| **Background/async agents → default workflow** | Qwen Managed Runtime, Codex app-server, Copilot background steer, OpenCode SSE watchdog, Pi subagents | CLI tools evolving from REPLs to *session managers*; expect fleet/orchestration APIs next |
| **Enterprise requirements driving core architecture** | Codex GovCloud/Bedrock, Copilot BYOK, OpenCode proxy auth/GitLab Duo, Pi Azure Foundry/Bedrock, Qwen broker auth | Vendors without enterprise auth/sandboxing/compliance stories will lose org adoption |
| **Desktop GUI is a liability, not a feature** | Every tool with a desktop app has parity gaps (Claude, Codex, OpenCode, Pi) | Terminal-first UX wins; web-based shells (Qwen Web Shell, OpenCode Web) may surpass native desktop |
| **Windows remains a second-class platform** | Codex sandbox/Store issues, Copilot temp-file bugs, Pi ConPTY/mintty fragmentation, DeepSeek npm-launcher kills, OpenCode 45s watchdog | Teams on Windows should expect more friction; WSL2 is the de facto supported path |
| **MCP (Model Context Protocol) is the integration standard — but fragile** | Codex, Copilot, Gemini, OpenCode, DeepSeek, Qwen all report MCP regressions | MCP implementations are immature; treat as beta, build fallbacks |
| **Token/context accounting accuracy is a competitive differentiator** | Pi 8× overestimate, Codex JSON overhead fixes, Qwen bound retries, Gemini persistent state atomicity | Tools that accurately report usage/costs and avoid context bloat will win cost-sensitive teams

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-10-03 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking (Most Discussed PRs)

| Rank | Skill / PR | Functionality | Discussion Highlights | Status |
|------|------------|---------------|----------------------|--------|
| 1 | **[skill-creator fixes** `#1298`](https://github.com/anthropics/skills/pull/1298) | Core skill-authoring toolchain: trigger evaluation isolation, Windows compatibility, runtime failure handling | Long-running (Jun–Sep), foundational fixes for skill development workflow; addresses false misses in trigger evals | **Open** |
| 2 | **[mcp-builder MCP 2.0 support** `#1742`](https://github.com/anthropics/skills/pull/1742) | Updates MCP builder for `mcp>=2.0` (`streamable_http_client` rename, custom headers via `create_mcp_http_client`) | Fixes `#1668`; critical for MCP server authors upgrading to 2.0 | **Open** |
| 3 | **[proofcore-contract-auditor** `#1771`](https://github.com/anthropics/skills/pull/1771) | Web3 skill: static analysis of Solidity/Rust contracts + cryptographic audit proofs anchored on TON via ProofCore | Novel Web3 security use case; zero-storage Merkle protocol integration | **Open** |
| 4 | **[md2video-audio** `#1703`](https://github.com/anthropics/skills/pull/1703) | Zero-cost Markdown → MP4 video with human-like voiceovers (Marp slides + TTS) | Creative/content automation; leverages Marp + edge TTS | **Open** |
| 5 | **[notion-spec-to-implementation** `#1245`](https://github.com/anthropics/skills/pull/1245) | Transforms Notion specs → implementation tasks with acceptance criteria + progress tracking | Dual-skill PR (also includes `quantitative-resume-auditor`); active since Jun, updated Sep 30 | **Open** |
| 6 | **[AWT (AI Watch Tester)** `#822`](https://github.com/anthropics/skills/pull/822) | AI-powered E2E testing: vision + browser control, zero-code test generation, self-healing selectors | Long-standing (Mar–Sep); integrates external OSS project (AI-Watch-Tester) | **Open** |
| 7 | **[testing-patterns** `#723`](https://github.com/anthropics/skills/pull/723) | Comprehensive testing stack: Trophy model, AAA, React Testing Library, contract testing, E2E patterns | Broad developer demand; updated Sep 21 | **Open** |
| 8 | **[blast-radius** `#1776`](https://github.com/anthropics/skills/pull/1776) | Pre-destructive-operation checklist: classifies impact scope, validates reversibility, requires approvals | Safety-focused workflow; addresses "query right, operation wrong" gap | **Open** |

> **Note:** All PRs show `Comments: undefined` in source data; ranking based on recency, update frequency, and issue cross-references.

---

## 2. Community Demand Trends (From Issues)

| Trend | Evidence (Top Issues) | Community Signal |
|-------|----------------------|------------------|
| **Trust & Namespace Security** | `#492` (43 comments, 2👍) — Community skills masquerading as official `anthropic/` namespace | **Highest engagement**; users demand clear trust boundaries |
| **Org-Wide Skill Sharing** | `#228` (16 comments, 8👍) — Native sharing in Claude.ai vs. manual file transfer | Strong product ask; 8👍 indicates broad team adoption pain |
| **Evaluation Reliability** | `#556` (12 comments, 7👍) — `run_eval.py` 0% trigger rate; `#1383` (4 comments) — silent benchmark failures | Core tooling broken; blocks skill quality assurance |
| **Deduplication & Packaging** | `#189` (6 comments, 9👍) — `document-skills` + `example-skills` install identical content | High 👍/comment ratio = widespread annoyance |
| **Context Window Pressure** | `#1487` (4 comments) — `claude-api` injects 156k tokens in one call | Emerging scalability concern for bundled skills |
| **Meta-Skills for Skill Quality** | `#83` (skill-quality-analyzer, skill-security-analyzer); `#1394` (XSS in eval-viewer) | Community building tools to audit skills themselves |

**Top Requested New Skill Directions:**
1. **Agent Governance/Safety** (`#412` closed but referenced) — policy enforcement, threat detection, audit trails
2. **Compact Memory** (`#1329`, 9 comments) — symbolic notation for persistent agent state
3. **Reasoning Quality Gates** (`#1385`, 4 comments, 1👍) — calibration → adversarial review → verification pipeline

---

## 3. High-Potential Pending Skills (Active PRs Likely to Land)

| PR | Skill | Why It Has Momentum |
|----|-------|---------------------|
| `#1742` | **mcp-builder MCP 2.0 compat** | Fixes breaking change for all MCP server authors; referenced issue `#1668` |
| `#1298` | **skill-creator trigger eval fixes** | Foundational; blocks reliable skill authoring; 3+ months of iteration |
| `#1771` | **proofcore-contract-auditor** | Unique Web3 security niche; cryptographic proof anchoring is differentiated |
| `#1703` | **md2video-audio** | High-visibility creative automation; zero-cost (no API keys) |
| `#1245` | **notion-spec-to-implementation** | Enterprise workflow (Notion → code); dual-skill value; active maintainer updates |
| `#822` | **AWT (AI Watch Tester)** | Integrates mature OSS; addresses top pain point (E2E testing) |
| `#723` | **testing-patterns** | Comprehensive reference skill; aligns with `#556` eval reliability demand |
| `#1776` | **blast-radius** | Safety-critical for bulk operations; simple but high-impact checklist pattern |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for trustworthy, shareable, and evaluatable skill infrastructure — not just new skills, but the platform guarantees (namespace security, org sharing, reliable evals, deduplication) that make skills safe to adopt at scale.**

---

# Claude Code Community Digest — 2026-10-03

---

## 1. Today's Highlights

- **v2.1.288 released** with two key additions: `$.ui.selection()` for mods (returns last fullscreen selection + transcript row context) and a built-in `gh api` for cloud sessions lacking GitHub CLI.
- **Mods extensibility (#91870)** remains the highest-engagement thread (238 comments, 130 👍), with the team actively iterating on feedback since the Sep 3 launch.
- **15 new issues filed today**, signaling active regression hunting: statusline breakage in daemon sessions (#99144), worktree skill loading regression (#99145), VS Code freeze on 3rd prompt (#99132), and mods default-off despite docs (#99130).

---

## 2. Releases

### v2.1.288
| Change | Impact |
|--------|--------|
| `$.ui.selection()` added for mods | Enables mods to access user’s last fullscreen text selection and its transcript row — foundation for context-aware extensions |
| Built-in `gh api` for cloud sessions | Removes dependency on host having GitHub CLI installed; fixes control-character sending bug in the built-in |

[View Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.288)

---

## 3. Hot Issues (Top 10 by Signal)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#91870](https://github.com/anthropics/claude-code/issues/91870) | **Mods — make Claude 10× more extensible** | Core extensibility platform; defines plugin/mod API surface for years ahead | 238 comments, 130 👍 — *highest engagement in repo history* |
| [#8327](https://github.com/anthropics/claude-code/issues/8327) | **`ANTHROPIC_API_KEY` overrides Pro/Max → "org disabled"** | Blocks paying subscribers who set env var for other tools; auth precedence bug | 121 comments, 19 👍 — *long-standing (Sep 2025), cross-platform* |
| [#15148](https://github.com/anthropics/claude-code/issues/15148) | **LSP `lspServers` config ignored from marketplace.json** | Renders TypeScript/Pyright/Go LSP plugins non-functional after install | 23 comments, 73 👍 — *plugin ecosystem blocker* |
| [#90450](https://github.com/anthropics/claude-code/issues/90450) | **Auto Mode Bash-first silently disables `CLAUDE.md` & path rules** | Undermines project-level guidance; silent failure mode is dangerous | 19 comments, 48 👍 — *auto-mode trust/reliability concern* |
| [#88747](https://github.com/anthropics/claude-code/issues/88747) | **Worktree writes absolute `core.hooksPath` → runs main checkout’s hooks** | Breaks worktree isolation; hooks leak across worktrees | 18 comments, 1 👍 — *git workflow correctness* |
| [#52517](https://github.com/anthropics/claude-code/issues/52517) | **Mermaid not rendered in Desktop Code tab** | GUI parity gap vs terminal TUI; affects docs/diagram-heavy workflows | 16 comments, 32 👍 — *desktop UX polish* |
| [#79305](https://github.com/anthropics/claude-code/issues/79305) | **Desktop: custom themes / accent colors (CLI parity)** | Multi-monitor window recognition; accessibility & personalization | 11 comments, 39 👍 — *desktop parity request* |
| [#99144](https://github.com/anthropics/claude-code/issues/99144) | **Statusline missing in daemon-hosted sessions since 2.1.283** | Regression in current release; breaks custom statuslines for all daemon users | 0 comments, 0 👍 — *filed today, high severity* |
| [#99145](https://github.com/anthropics/claude-code/issues/99145) | **Desktop worktree loads skills from main checkout, not worktree** | Contradicts documented 2.1.277 behavior; breaks worktree-scoped skills | 0 comments, 0 👍 — *filed today, worktree regression* |
| [#99130](https://github.com/anthropics/claude-code/issues/99130) | **Mods default-off in 2.1.288 despite docs saying on-by-default since 2.1.287** | Rollout flag mismatch; confuses early adopters & docs credibility | 0 comments, 0 👍 — *filed today, release-blocking clarity issue* |

---

## 4. Key PR Progress

| PR | Status | Summary |
|----|--------|---------|
| [#99141](https://github.com/anthropics/claude-code/pull/99141) | Open | **Diff pane persistence**: `/diff` keeps pane open even when nothing can draw yet; shows immediately once content available. Stacked on #99118. |
| [#99137](https://github.com/anthropics/claude-code/pull/99137) | Open | **Security default tightening**: `sec-default` now holds any `deny` (rule, classic hook ask, managed env) over user-installed plugins. Plugins can only tighten, never loosen. |
| [#99118](https://github.com/anthropics/claude-code/pull/99118) | Open | **Diff toasts unblocked**: Other plugins’ toasts now show while `/diff` pane/dialog is open (was `holdToasts: true`). |
| [#97293](https://github.com/anthropics/claude-code/pull/97293) | Open | **Mods declarations**: `process.run` results carry `isStdoutTruncated`/`isStderrTruncated`; `fs.list` entries carry `mtimeMs`. Test fakes updated. |
| [#77977](https://github.com/anthropics/claude-code/pull/77977) | **Closed** | **Docs**: Documented `skipLfs` for `github`/`git` marketplace sources with examples. |

> All open PRs are from **poteat** (core team), focused on mods/diff/security foundations.

---

## 5. Feature Request Trends (from all issues)

| Theme | Representative Issues | Signal |
|-------|----------------------|--------|
| **Mods/Plugin Ecosystem Maturity** | #91870 (core), #15148 (LSP config), #99135 (MCP agent-id forwarding), #99130 (rollout flag) | Highest engagement; platform-defining |
| **Desktop App Parity with CLI** | #52517 (Mermaid), #79305 (themes), #98254/#99139 (animated spark), #99142 (Linux hang), #99145 (worktree skills) | 5+ issues today alone; GUI gaps accumulating |
| **Worktree & Git Workflow Correctness** | #88747 (hooks leak), #99145 (skills scope), #99136 (diff untracked files) | Recurring git-integration pain |
| **Auto-Mode Trust & Control** | #90450 (silent CLAUDE.md disable), #99133 (false prod-deploy block), #99132 (VS Code freeze) | Safety/usability tension in autonomous flows |
| **Authentication & Subscription Flexibility** | #8327 (API key vs Pro), #78985/#96949 (dev/QA sign-in), #99131 (private repo access) | Enterprise/team adoption blockers |
| **Mobile/Remote Experience** | #87003 (Android push), #82300 (Windows Computer Use) | Platform coverage gaps |

---

## 6. Developer Pain Points (Recurring Frustrations)

1. **Silent behavior changes in Auto Mode** — #90450, #99133: users discover disabled `CLAUDE.md` or blocked deploys *after* the fact, with no opt-in/visibility.
2. **Worktree isolation leaks** — #88747, #99145: hooks, skills, config bleed across worktrees despite documented isolation.
3. **Desktop app as second-class citizen** — Mermaid, themes, status indicators, long-session stability, worktree skill loading all lag CLI.
4. **Auth precedence confusion** — #8327 (1 yr old): `ANTHROPIC_API_KEY` silently breaks Pro/Max; no clear precedence doc or warning.
5. **Regression velocity in recent releases** — 2.1.283–2.1.288 introduced: statusline loss (#99144), worktree skill regression (#99145), mods default-off (#99130), VS Code freeze (#99132) — all in last 5 versions.
6. **Mobile push unreliable** — #87003 (re-filed from 2025): "CLI says push sent, Android never receives" across devices/OSes.
7. **LSP plugin ecosystem broken** — #15148: marketplace.json `lspServers` ignored; installed plugins non-functional.

---

*Digest generated from GitHub data as of 2026-10-03. Links point to live issues/PRs for full context.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-10-03

## 1. Today's Highlights

The Codex team shipped six rapid alpha releases (v0.162.0-alpha.4 through alpha.9) in a single day, signaling an intense stabilization push for the upcoming 0.162 stable. Meanwhile, a cluster of **VS Code extension regressions** around message queuing ("undefined is not valid JSON" on send-lock release) and **Windows sandbox/daemon instability** dominate the issue tracker, with multiple high-comment reports confirming cross-platform impact. A new `incremental_tools` feature flag and GovCloud Bedrock support landed via PRs, hinting at enterprise-focused expansion.

---

## 2. Releases

| Version | Notes |
|---------|-------|
| **rust-v0.162.0-alpha.4 → alpha.9** | Six alpha cuts in 24h — no individual changelogs published, but the cadence suggests pre-release hardening for 0.162.0. Expect sandbox, daemon, and message-queue fixes given concurrent issue activity. |

[View all releases](https://github.com/openai/codex/releases)

---

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#42243](https://github.com/openai/codex/issues/42243) | **Codex Pet overlay reappears after "Tuck Away"** (macOS) | Persistent UI bug affecting Plus users; 32 👍, 24 comments | High frustration — "makes the app feel unpolished" |
| [#49834](https://github.com/openai/codex/issues/49834) | **VS Code: "undefined" JSON parse error on queued message send-lock release** (Linux) | Core extension regression blocking follow-up prompts; 19 comments | "Completely breaks multi-turn workflows" |
| [#49975](https://github.com/openai/codex/issues/49975) | **Messages stuck in send queue — same JSON error** (Windows) | Duplicate of #49834 on Windows; confirms cross-platform root cause | 18 comments, 0 👍 (recent) |
| [#50118](https://github.com/openai/codex/issues/50118) | **VS Code queues prompts after completed turn; `markedStreaming=true` stuck** | Thread state corruption causing silent prompt loss; 12 comments, 6 👍 | "Intermittent but severe — lose work silently" |
| [#50265](https://github.com/openai/codex/issues/50265) | **VS Code: submitted prompts disappear without processing since Oct 1** | Widespread text loss reported across companies; 4 comments | "Critical regression — multiple teams affected" |
| [#25770](https://github.com/openai/codex/issues/25770) | **Windows Store: update fails — old MSIX package locked** | Long-standing (since June) Store update blocker; 19 comments | Enterprise/Store users blocked from updates |
| [#49618](https://github.com/openai/codex/issues/49618) | **Remote pairing loop: Windows ↔ Android "Approve this phone" repeats** | Breaks remote workflow entirely; 12 comments, 8 👍 | "Unusable remote on Android" |
| [#49234](https://github.com/openai/codex/issues/49234) | **Windows: all commands fail with "helper_unknown_error: setup refresh had errors"** | Sandbox/daemon initialization failure; 4 comments, 2 👍 | "Complete CLI breakdown on Windows" |
| [#21252](https://github.com/openai/codex/issues/21252) | **CLI: option to hide tool activity in TUI** | Long-requested UX improvement (32 👍, 12 comments) | "Transcript becomes unreadable during long sessions" |
| [#37526](https://github.com/openai/codex/issues/37526) | **App-server drops remote clients when outbound queue fills (128 msg)** | Regression of previously fixed #18203; 5 comments, 3 👍 | "Same bug, different code path — remote unreliable" |

---

## 4. Key PR Progress (Top 10 by Significance)

| # | PR | Description | Impact |
|---|----|-------------|--------|
| [#50464](https://github.com/openai/codex/pull/50464) | **Add `incremental_tools` feature flag** | New under-development flag for incremental tool execution; disabled by default | Foundation for streaming/partial tool results |
| [#50472](https://github.com/openai/codex/pull/50472) | **Enable Ultrafast tiers for Amazon Bedrock Astra models** | Restores `ultrafast` service tier selection for Bedrock | Enterprise Bedrock users gain latency tier control |
| [#50459](https://github.com/openai/codex/pull/50459) | **Capability overrides for custom model providers** | Allows `external_web_access`, `remote_compaction` config per provider | Extensibility for BYOM (bring your own model) setups |
| [#50510](https://github.com/openai/codex/pull/50510) | **Require GovCloud guidance acknowledgment after Bedrock setup** | Compliance UX for AWS GovCloud deployments | GovCloud/regulatory readiness |
| [#50507](https://github.com/openai/codex/pull/50507) | **Record Windows sandbox service stop diagnostics** | Persists lifecycle reason + HRESULT to registry | Debuggability for sandbox crashes (#49234) |
| [#50499](https://github.com/openai/codex/pull/50499) | **Include installer stderr in daemon update failures** | Captures last 2 KiB of stderr on failed daemon installs | Faster triage for Windows update issues |
| [#50480](https://github.com/openai/codex/pull/50480) | **Skip managed config loading for Windows sandbox refreshes** | Avoids redundant cloud-policy fetch on registration-only refreshes | Performance + reliability for sandbox updates |
| [#50477](https://github.com/openai/codex/pull/50477) | **Use app-server default output cap for TUI workspace commands** | Removes fixed 64 KiB cap; respects server default | Consistent output handling across interfaces |
| [#50470](https://github.com/openai/codex/pull/50470) | **Account for JSON overhead when truncating MCP tool results** | Measures full serialized size including escaping/wrapper | Prevents oversized payloads in thread history |
| [#50467](https://github.com/openai/codex/pull/50467) | **Copy transcript selections as literal text (preserve rich HTML)** | Fixes Markdown escaping in plain-text clipboard | UX polish for transcript sharing |

---

## 5. Feature Request Trends

| Trend | Evidence | Trajectory |
|-------|----------|------------|
| **TUI/CLI transcript control** | #21252 (hide tool activity, 32 👍), #41626 (recap accuracy) | High — core workflow friction for power users |
| **Remote/mobile parity** | #39343 (Android missing `/compact`, `/side`, `/fork`), #49618 (pairing loop), #48448 (Android remote broken) | Rising — mobile/remote is a strategic surface |
| **Side-agent / sub-agent integration** | #37112 (side agents communicate with main thread, closed but signals demand) | Emerging — agent delegation patterns maturing |
| **Custom model provider extensibility** | #50459 (capability overrides), #50472 (Bedrock tiers) | Active — enterprise/BYOM push |
| **Safety/confirmation UX** | #43192 (acknowledgement loop), #42523 (safety block resume), #49873 (dot safety-pause desync) | Persistent — trust/control balance unresolved |

---

## 6. Developer Pain Points (Recurring Themes)

| Pain Point | Frequency | Representative Issues |
|------------|-----------|----------------------|
| **VS Code extension message-queue corruption** | **Critical** — 5+ issues in 24h (#49834, #49975, #50118, #50265, #50363, #50403, #50404) | "undefined is not valid JSON", `markedStreaming=true` stuck, prompts silently dropped |
| **Windows sandbox/daemon instability** | **High** — #49234, #49284, #25770, #50495, #50524 | "helper_unknown_error", ACL loss after sandbox, Store update locking, browser/computer-use sandbox exit |
| **Remote/mobile sync failures** | **High** — #49618, #48448, #39343, #37526 | Pairing loops, Android remote broken, missing slash commands, app-server queue drops |
| **Safety/confirmation loops** | **Medium** — #43192, #42523, #49873 | Acknowledgement not persisting, tasks un-resumable after block, dot desync |
| **TUI transcript noise** | **Medium** — #21252 (32 👍), #41626 | Tool-call spam hides reasoning; recap hallucinates completion |
| **Windows Store / MSIX update pipeline** | **Low but chronic** — #25770 (open since June) | Old package locked, cannot update via Store |

---

**Bottom line:** The 0.162 alpha sprint is clearly targeting the VS Code message-queue regression and Windows sandbox reliability — the two highest-impact regressions. Meanwhile, enterprise features (GovCloud, custom providers, Bedrock tiers) and remote/mobile parity are advancing in parallel. Expect 0.162.0 stable within days if alpha velocity holds.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-10-03

---

## 1. Today's Highlights
- **Nightly v0.64.0** ships a UX fix: `Enter` and `Spacebar` now reliably confirm selection-list options (PR #29502).  
- A wave of **core-stability PRs** landed in the last 24 h, addressing session-resume duplicates, persistent-state corruption, MCP timeout hangs, and scheduler-level enforcement of user “hold” directives.  
- The issue backlog continues to concentrate on **sub-agent reliability** (hangs, misreported success, config ignores) and **AST-aware tooling** investigations.

---

## 2. Releases
| Version | Date | Key Change |
|---------|------|------------|
| `v0.64.0-nightly.20261003.gfb972b2f8` | 2026-10-03 | `fix(cli)`: Ensure `Enter`/`Spacebar` reliably confirm selection list options ([#29502](https://github.com/google-gemini/gemini-cli/pull/29502)) |

---

## 3. Hot Issues (Top 10 by Community Signal)

| # | Title | Why It Matters | Reaction |
|---|-------|----------------|----------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent recovery after `MAX_TURNS` reported as GOAL success | Masks real failures; breaks trust in autonomous delegation | 13 💬, 2 👍 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs indefinitely | Blocks entire workflows; work-around is disabling sub-agents | 8 💬, 8 👍 |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | Leverage model’s bash affinity via zero-dependency sandboxing | Strategic direction: native POSIX tool chains vs. custom tools | 9 💬, 1 👍 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Assess impact of AST-aware file reads, search, mapping | Potential step-change in token efficiency & precision | 7 💬, 1 👍 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini under-uses custom skills/sub-agents | Reduces value of extensibility surface | 7 💬 |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | Browser Agent ignores `settings.json` overrides (`maxTurns`) | Configuration drift; security/UX risk | 4 💬 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Browser subagent fails on Wayland | Platform gap for Linux desktop users | 4 💬, 1 👍 |
| [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) | Symlinked agent files not recognized | Breaks dotfile-management workflows | 4 💬 |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | 400 error when >128 tools registered | Hard scalability ceiling for tool-rich workspaces | 3 💬 |
| [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) | Agent should discourage destructive behavior (`git reset --force`, etc.) | Safety & trust for autonomous operations | 3 💬, 1 👍 |

---

## 4. Key PR Progress (Last 24 h)

| PR | Status | Area | Summary |
|----|--------|------|---------|
| [#29402](https://github.com/google-gemini/gemini-cli/pull/29402) | ✅ Merged | Core | Atomic, failure-safe writes for `PersistentState` (prevents truncated `state.json`) |
| [#29397](https://github.com/google-gemini/gemini-cli/pull/29397) | ✅ Merged | Agent | Prevents context poisoning & infinite loops after interrupted turns |
| [#29394](https://github.com/google-gemini/gemini-cli/pull/29394) | ✅ Merged | Scheduler | Enforces user “hold” directives by blocking mutating tools at scheduler layer |
| [#29400](https://github.com/google-gemini/gemini-cli/pull/29400) | ✅ Merged | Core | Eliminates duplicate `functionResponse` turns on session resume (`-r`) |
| [#29398](https://github.com/google-gemini/gemini-cli/pull/29398) | ✅ Merged | MCP | Bounds initial tool discovery to short timeout (fixes 10-min hang) |
| [#29399](https://github.com/google-gemini/gemini-cli/pull/29399) | ✅ Merged | Core | Preserves unrelated comments during edits; adds behavioral eval |
| [#29387](https://github.com/google-gemini/gemini-cli/pull/29387) | ✅ Merged | Extensions | Graceful degradation: one malformed extension no longer blocks all loading |
| [#29582](https://github.com/google-gemini/gemini-cli/pull/29582) | 🟢 Open | Perf | Hierarchical ignore filtering + subtree pruning → fixes multi-sec delays on large repos |
| [#29617](https://github.com/google-gemini/gemini-cli/pull/29617) | 🟢 Open | CLI | Stops eager recursive expansion for `@<directory>` references |
| [#29597](https://github.com/google-gemini/gemini-cli/pull/29597) | 🟢 Open | Sandbox | IPC socket fallback for gVisor/runsc (unblocks loopback isolation) |

---

## 5. Feature Request Trends (from Issues)
1. **Sub-agent maturity** — reliable spawning, config propagation, trajectory sharing, parallelism (#22323, #21968, #22598, #18287).  
2. **AST-aware code navigation** — structural search/read to cut tokens & turns (#22745, #22746, #22747, #19561).  
3. **Persistent, file-backed task tracking** — replace in-context `WriteToDo` with CRUD task files (#18836, #21000).  
4. **Sandbox & platform parity** — rootless Podman, Wayland, gVisor IPC (#29505, #21983, #29597).  
5. **Self-awareness & discoverability** — agent knows its own flags, hotkeys, skills; skills activatable via `/skill-name` non-interactively (#21432, #29546, #18285).  
6. **Evaluation & observability** — stable internal evals, bug reports with sub-agent context, chat sharing of trajectories (#23166, #21763, #22598).

---

## 6. Developer Pain Points (Recurring Frustrations)
- **Silent misreporting**: sub-agents claim “GOAL success” after hitting turn limits (#22323).  
- **Hang loops**: generalist agent or MCP discovery stalls for minutes/hours (#21409, #29398).  
- **Config ignored**: Browser Agent, symlinked agents, per-workspace policies (#22267, #20079, #18397).  
- **Context bloat**: fuzzy file matching pulls binary assets; tmp scripts litter workspace (#29457, #23571).  
- **Destructive defaults**: model reaches for `git reset --force`, `rm -rf` without confirmation (#22672).  
- **Flicker/resize jank**: terminal resize triggers full history re-render (#21924).  
- **Skill invisibility**: custom skills/sub-agents rarely auto-invoked (#21968).  

---  
*Digest generated from github.com/google-gemini/gemini-cli data as of 2026-10-03 00:00 UTC.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-10-03

## 1. Today's Highlights
Three patch releases (v1.0.92-1 through v1.0.92-3) landed in the last 24 hours, fixing keyboard/input ordering, Windows sandbox temp-file handling, MCP server reconnection after idle expiration, and context rollover retention. The community is actively discussing a critical skill-discovery regression (`disable-model-invocation: true` makes skills unreachable), workspace MCP config loading failures, and BYOK compatibility with newer model providers.

## 2. Releases

### v1.0.92-3 (Latest)
**Added**
- Pre-conversation Ctrl+E environment picker to switch between local and cloud runs

**Fixed**
- Keyboard, paste, and mouse input now stay ordered and responsive during rapid interaction
- Sandboxed shell commands offer a network bypass prompt whenever the proxy blocks a destination

### v1.0.92-2
**Fixed**
- Sandboxed commands on Windows write temporary files to the granted temp directory, so tools that rename a temp file into place work
- Prompt-mode sessions fire a single sessionEnd hook after Stop-hook continuations complete

### v1.0.92-1
**Fixed**
- Reconnect to remote MCP servers after idle Streamable HTTP sessions expire
- Messaging a running background agent now steers its active turn at the next processing opportunity
- Context rollovers keep your latest requests in the recovery context
- Hide the automatic sandbox CA setup prompt

## 3. Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| [#4438](https://github.com/github/copilot-cli/issues/4438) **Skill discovery broken when `disable-model-invocation: true`** | Skills marked as manual-only become completely unreachable — `copilot skill list` shows them but explicit invocation returns "Skill not found". Blocks workflow automation. | 11 comments, 12 👍 — High engagement indicates widespread impact |
| [#4832](https://github.com/github/copilot-cli/issues/4832) **Workspace `.mcp.json` never loaded (v1.0.83+)** | Workspace MCP servers are ignored entirely; `mcp list` shows no Workspace group. Servers never start, breaking team-shared MCP configurations. | 4 comments — Closed but recent update suggests verification needed |
| [#3172](https://github.com/github/copilot-cli/issues/3172) **Clipboard ownership message breaks terminal layout** | "Somebody else owns the clipboard now" status message appears on cross-app copy/paste, corrupting UI rendering. | 4 comments, 13 👍 — Long-standing (May 2026), high upvotes signal UX pain |
| [#4840](https://github.com/github/copilot-cli/issues/4840) **BYOK broken with Deepseek: `custom` tool type not recognized** | BYOK fails with deserialization error: `tools[4].type: unknown variant 'custom', expected 'function'`. Blocks alternative provider usage. | 3 comments, 1 👍 — New provider compatibility issue |
| [#4012](https://github.com/github/copilot-cli/issues/4012) **BYOK: reasoning effort unsupported for `glm-5.2:cloud`** | `--reasoning-effort max` rejected despite valid config. Indicates model capability detection gaps in BYOK path. | 3 comments, 23 👍 — Highest upvotes in list; strong demand for reasoning controls |
| [#1825](https://github.com/github/copilot-cli/issues/1825) **Empty input schema breaks MCP tool registration** | Tools with no parameters (empty JSON schema) cause CLI to reject entire MCP server, failing all prompts. | 3 comments, 10 👍 — Schema validation too strict for legitimate zero-param tools |
| [#4569](https://github.com/github/copilot-cli/issues/4569) **GitHub Mobile shows "Queued" after remote CLI responds** | Mobile app doesn't refresh remote session state; GitHub.com shows correct response. Sync gap between clients. | 2 comments — Cross-platform session consistency issue |
| [#4482](https://github.com/github/copilot-cli/issues/4482) **`allowed_directories` in permissions-config.json ignored for shell commands** | Configured allowed paths don't suppress "outside allowed directory" prompts; `/add-dir` works per-session only. Config not honored. | 2 comments — Permission config regression |
| [#5015](https://github.com/github/copilot-cli/issues/5015) **Keyboard-accessible pager mode for chat history (Vim/less-style)** | Mouse-disabled users only have PgUp/PgDn (full-screen jumps); no line-by-line scroll for long diffs/output. Accessibility gap. | 2 comments, 3 👍 — New issue, clear UX improvement request |
| [#4842](https://github.com/github/copilot-cli/issues/4842) **Concurrent MCP OAuth refresh cancels one reconnect (false hard-failure)** | Two servers getting 401 simultaneously causes one refresh to cancel with "Cancelled" error, surfacing spurious failure. | 1 comment — Race condition in token refresh logic |

## 4. Key PR Progress

| PR | Description |
|----|-------------|
| [#5046](https://github.com/github/copilot-cli/pull/5046) **Initial commit** | Appears to be a new contributor's first PR (author: `c6r8h48msf-debug`). No description provided; likely early-stage or test submission. |

*Note: Only 1 PR updated in the last 24h. The release velocity suggests fixes are landing via internal/release branches rather than public PRs.*

## 5. Feature Request Trends

From the issue corpus, these directions dominate community demand:

1. **Granular permission controls** — Multiple issues (#3032, #4482, #5033, #5047) request pattern-based allow-lists, config-respected directory allowances, and assisted approval exposure in ACP mode. Users want to move beyond binary `/allow-all`.

2. **MCP reliability & observability** — Workspace config loading (#4832), reload staleness (#4562), OAuth race conditions (#4842, #5040, #5039), token caching across sessions (#2780), and verbose notification noise (#5034) indicate MCP integration is a primary friction surface.

3. **BYOK / multi-provider parity** — Deepseek (#4840), GLM reasoning (#4012), HydraFusion fallback breakage (#5042), and protocol version negotiation (#5039) show users pushing custom model routing hard.

4. **Session & context management** — Compaction failures (#5045), image loss on rewind (#5037), frozen UI with growing event log (#5035), and plan-mode context inheritance (#5041) point to context lifecycle gaps.

5. **Terminal UX polish** — Clipboard glare (#3172), pager navigation (#5015), input ordering (fixed in v1.0.92-3), and Herdr copy shortcut conflict (#5043) reflect daily-driver friction.

## 6. Developer Pain Points

| Pain Point | Frequency Indicators | Impact |
|------------|---------------------|--------|
| **MCP server flakiness** | 7+ issues (#4832, #4562, #4842, #5040, #5039, #5025, #2780) | High — Blocks team workflows, auth, and tool discovery |
| **Skill/agent configuration not honored** | #4438 (12 👍), #2024, #5033 | High — Automation broken; manual workarounds required |
| **BYOK model compatibility gaps** | #4840, #4012 (23 👍), #5042 | Medium-High — Prevents provider choice; reasoning controls missing |
| **Permission config ignored at runtime** | #4482, #3032 (2 👍), #5047 | Medium — Security UX fails; forces `/allow-all` |
| **Context/session state corruption** | #5045, #5037, #5035, #5041, #5042 | Medium — Data loss, frozen UI, model downgrade mid-session |
| **Terminal accessibility gaps** | #3172 (13 👍), #5015 (3 👍), #5043 | Medium — Clipboard noise, no fine scroll, shortcut conflicts |

---

*Digest generated from `github/copilot-cli` data as of 2026-10-03. Links point to live GitHub items.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-10-03

## Today's Highlights
OpenCode's ecosystem is actively addressing provider integration gaps (GitLab Duo, Vertex Anthropic routing, custom provider persistence) and stability issues around session management, desktop app UX, and Windows service reliability. A new model — Fledge Alpha Free — is being documented across Zen and Console platforms. Plugin architecture improvements (V2 typed composition, session domain exposure) and SSE stream resilience work signal ongoing core hardening.

---

## Releases
No new releases in the last 24 hours.

---

## Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| [#23153](https://github.com/anomalyco/opencode/issues/23153) **Pay Go with crypto** | Long-standing feature request (since Apr 2026) for crypto payment support on OpenCode Go subscriptions. | 55 👍, 24 comments — high community demand |
| [#50843](https://github.com/anomalyco/opencode/issues/50843) **GitLab Duo fails on self-managed instances** | Blocks enterprise/self-hosted GitLab users; two root causes identified (context passing, token refresh). | 11 comments, active investigation |
| [#49596](https://github.com/anomalyco/opencode/issues/49596) **Desktop macOS: free tier "only usable within OpenCode" error** | Official Desktop app incorrectly rejects free-tier models; affects all macOS Desktop users. | 8 comments, 1 👍 — critical UX regression |
| [#29478](https://github.com/anomalyco/opencode/issues/29478) **Web: duplicate final answers persisted** | Backend session duplication bug causing data integrity issues in exported sessions. | 8 comments, 2 👍 — closed but root cause relevant |
| [#50650](https://github.com/anomalyco/opencode/issues/50650) **Desktop: custom provider save throws "unavailable on this server"** | Custom OpenAI-compatible provider form is completely broken in Desktop (even on bundled local server). | 5 comments, 3 👍 — blocks extensibility |
| [#31851](https://github.com/anomalyco/opencode/issues/31851) **Desktop: git worktrees not discovered/usable** | Manual `git worktree add` worktrees invisible in sidebar and cannot be opened as projects. | 5 comments, 5 👍 — workflow blocker for git power users |
| [#39560](https://github.com/anomalyco/opencode/issues/39560) **Critical data loss after consecutive updates** | Sessions, history, plugins, providers wiped after rapid updates; high-severity regression. | 5 comments, 1 👍 — trust-impacting |
| [#52049](https://github.com/anomalyco/opencode/issues/52049) **Windows CLI: 45s idle watchdog kills managed service** | Background service repeatedly restarted on Windows, aborting all sessions/subagents. | 4 comments — platform-specific stability issue |
| [#52870](https://github.com/anomalyco/opencode/issues/52870) **Feature: read-only historical execution changesets for V2 plugins** | Plugin authors need access to past execution history without callback coupling. | 3 comments — emerging plugin API need |
| [#52894](https://github.com/anomalyco/opencode/issues/52894) **Feature: show exact free usage limit reset time** | Users hit "rate limit exceeded" with no visibility into when quota resets. | 1 comment — UX clarity gap |

---

## Key PR Progress

| PR | Type | Description |
|----|------|-------------|
| [#52895](https://github.com/anomalyco/opencode/pull/52895) | Docs | Add **Fledge Alpha Free** to all 18 localized Zen docs (pricing, availability, privacy) |
| [#52896](https://github.com/anomalyco/opencode/pull/52896) | Docs | Add Fledge Alpha Free to V2 Console model docs |
| [#52892](https://github.com/anomalyco/opencode/pull/52892) | Docs | Auto-generated doc update for Fledge Alpha Free across V1/V2 (model ID, endpoint, privacy exception) |
| [#52890](https://github.com/anomalyco/opencode/pull/52890) | Bug fix | Preserve multiple system text parts as ordered arrays in **Mistral Chat** and **Cohere Chat** (was joining into single string) |
| [#52888](https://github.com/anomalyco/opencode/pull/52888) | Bug fix | Preserve Gemini `systemInstruction.parts` instead of joining with newlines |
| [#52868](https://github.com/anomalyco/opencode/pull/52868) | Feature | **Typed composition & lifetime primitives** for GUI extensions: dependency declaration, parallel activation, graph validation |
| [#52887](https://github.com/anomalyco/opencode/pull/52887) | Bug fix | Await plugin activation before text generation (fixes race condition) |
| [#52886](https://github.com/anomalyco/opencode/pull/52886) | Bug fix | Scope `grep` to exact file paths; preserve `include` filtering; adds regression tests |
| [#52734](https://github.com/anomalyco/opencode/pull/52734) | Feature | **Proxy authentication** support for Negotiate, NTLM, Basic — unblocks corporate gateway users |
| [#52882](https://github.com/anomalyco/opencode/pull/52882) | Refactor | Serve cached, pre-compressed embedded UI assets (eliminates per-request disk reads, adds compression) |
| [#51871](https://github.com/anomalyco/opencode/pull/51871) | Bug fix | **SSE stall watchdog + reconnect backoff** — recovers stale event streams after tab suspend/background |
| [#51874](https://github.com/anomalyco/opencode/pull/51874) | Perf | Add composite index `session(time_created, id)` for session list ordering & cursor pagination |

---

## Feature Request Trends

1. **Provider & Model Flexibility** — Crypto payments (#23153), custom provider persistence (#50650), Vertex Anthropic routing fixes (#39069), DeepSeek v4 endpoint support (#40261), Fledge Alpha Free integration (PRs #52895/96/92)
2. **Plugin Architecture Maturation** — Historical changesets (#52870), live session activity exposure (#52893), transcript pagination/scroll API (#52436), typed composition primitives (PR #52868)
3. **Usage Transparency** — Exact free-tier reset time (#52894), cached vs fresh token breakdown (#34298), AI credit calculation accuracy (#40280)
4. **Desktop/Web Parity** — Worktree discovery (#31851), archived session recovery (#40287), Plan/Build button visibility (#40288), mobile folder picker scrolling (#52883)
5. **Enterprise/Proxy Support** — Proxy auth (PR #52734), GitLab Duo self-managed (#50843), Windows service stability (#52049)

---

## Developer Pain Points

| Area | Recurring Themes |
|------|------------------|
| **Provider Configuration** | Custom providers silently fail (Desktop), env vars overridden by stale SQLite keys (#52891), transport settings ignored (#52879), Vertex/GitLab routing bugs |
| **Session & Data Integrity** | Duplicate messages persisted (#29478), data loss after updates (#39560), session list performance (#51874), no archive recovery UI (#40287) |
| **Windows-Specific Instability** | 45s watchdog kills service (#52049), upgrade fails when multiple binaries exist (#52152), first-launch stalls in worktrees (#47212) |
| **SSE/Stream Reliability** | Stalled streams after tab background (#51871), chunk timeout ignores heartbeats (#51879), missing cache policy for embedded UI (#51875) |
| **Plugin/Extension DX** | V2 plugin APIs missing session domain hooks (#52893), no historical changeset access (#52870), activation race conditions (#52887) |
| **Mobile/Web UX Gaps** | Folder picker unscrollable on Chrome Android (#52883), invalid server routes on session open (#40305), keybinds not respected (#50293) |

---

*Digest generated from GitHub data (issues/PRs updated 2026-10-03). Links point to anomalyco/opencode.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-10-03

## Today's Highlights

The Pi project saw intense bug-fixing activity around the v1.0.0 release, with **17 PRs merged or updated** addressing regressions in TUI rendering, model provider integrations (Bedrock, OpenAI, Anthropic, Azure), and CLI tooling. The community is actively debugging **Windows/Termux compatibility gaps** and **long-session performance degradation** (CPU spikes on macOS, full redraw storms in TUI). Several critical issues around token accounting, auto-compaction, and OAuth persistence surfaced post-release.

---

## Releases

No new releases in the last 24 hours. The latest stable is **v1.0.0** (managed install via `pi upgrade`).

---

## Hot Issues (Top 10 by Impact & Community Signal)

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| [#7547](https://github.com/earendil-works/pi/issues/7547) **Windows strategy clarification** | Core maintainers seeking direction on which Windows runtimes (WSL, ConPTY, mintty, native) to support first-class vs. delegate. Affects onboarding for "gazzilion developers on windows." | 72 comments, 2 👍 — highest engagement in repo |
| [#7730](https://github.com/earendil-works/pi/issues/7730) **macOS 100%+ CPU in long sessions** | CPU swings 50–110% with 600–800MB RAM; suspected context-size correlation. Blocks "babysitting PRs" use case. | 18 comments, 10 👍 — strong pain signal |
| [#10300](https://github.com/earendil-works/pi/issues/10300) **ChatGPT OAuth ID token not persisted** | Breaks extension access to account identity; token refresh uses same lossy conversion. Directly impacts OpenAI subscription users. | 13 comments, fresh (created 10/1) |
| [#9255](https://github.com/earendil-works/pi/issues/9255) **TUI full redraw storm on long transcripts** | `firstChanged < prevViewportTop` triggers `fullRender(true)` nearly every frame when streaming tail grows past viewport. Causes violent jumping/doubled text. | 10 comments, 1 👍 |
| [#10162](https://github.com/earendil-works/pi/issues/10162) **Too many input images halt agent** | Long-running agent tasks (QA, PR babysitting) fail when image inputs accumulate. Auto-compaction doesn't rescue. | 6 comments |
| [#10256](https://github.com/earendil-works/pi/issues/10256) **Terminal color query leaks into prompt (mintty/ConPTY)** | Startup opens external editor; prompt polluted with RGB escape sequences. Regression in 0.99.x vs 0.87.1. Windows-specific. | 6 comments, 1 👍 |
| [#9807](https://github.com/earendil-works/pi/issues/9807) **TUI lag at 800+ messages (full re-render)** | Unlike OpenCode's incremental diffing, Pi re-renders entire scrollback on every interaction. 1.7MB JSONL = noticeable scroll/typing lag. | 5 comments |
| [#10257](https://github.com/earendil-works/pi/issues/10257) **Codex switch fails with custom-tool ID mismatch** | Mid-chat model switch (Muse → GPT-6.1 Sol) errors: `Expected ID beginning with 'ctc', got 'fc_'`. Replayed `codemode` calls use wrong prefix. | 5 comments |
| [#10002](https://github.com/earendil-works/pi/issues/10002) **Extension console.output overwrites TUI** | `console.error()` from extensions writes raw to terminal, corrupting layout until redraw. Breaks extension UX isolation. | 5 comments |
| [#10330](https://github.com/earendil-works/pi/issues/10330) **Auto-compaction broken in CLI mode** | `pi --mode json -- "prompt"` never triggers auto-compaction; works in TUI. Critical for headless/CI workflows. | 3 comments, fresh (10/2) |

---

## Key PR Progress (Top 10 Merged/Updated)

| PR | Type | Summary |
|----|------|---------|
| [#10383](https://github.com/earendil-works/pi/pull/10383) **perf(tui)** | **Perf fix** | Diff raw lines by pointer equality; avoids normalizing every line before diff. Fixes O(n) full-buffer string compare per frame. **Merged**. |
| [#10382](https://github.com/earendil-works/pi/pull/10382) **feat(coding-agent)** | **Feature** | Native llama.cpp classifier model support via `/v1/systemone` probe. Decision models (Julia-1, Laya, Kev, lev, OpenJev) registered as typesafe-system-one classifiers. **Open**. |
| [#9714](https://github.com/earendil-works/pi/pull/9714) **feat(ai)** | **Feature** | Azure Foundry Chat Completions support (DeepSeek V4 Pro). Expands Azure provider beyond Responses API. **Open**. |
| [#10328](https://github.com/earendil-works/pi/pull/10328) **fix(ai)** | **Bug fix** | Bedrock: send `block_binding: { prefix_mismatch_behavior: "drop_block" }` for adaptive thinking. Drops stale thinking blocks instead of 400ing on system prompt/tool changes. **Merged**. |
| [#10372](https://github.com/earendil-works/pi/pull/10372) **feat(cpp)** | **Infra** | Bazel 8 workspace for C++ backbone: module macros, style gate, clang-tidy, interfaces/src layout. First modules: `IClock`, `SystemClock`. **Merged**. |
| [#10329](https://github.com/earendil-works/pi/pull/10329) **fix(ai)** | **Bug fix** | Bedrock OpenAI models: add long-context pricing tier (>272k tokens = 2× input/cache, 1.5× output). Applied in generator. **Merged**. |
| [#10368](https://github.com/earendil-works/pi/pull/10368) **fix(coding-agent)** | **Bug fix** | Hidden tools (`hiddenDeclarations`) no longer leak into `<rules>` and skills hint. Model no longer sees guidance for invisible tools. **Merged**. |
| [#10365](https://github.com/earendil-works/pi/pull/10365) **fix(ai)** | **Bug fix** | Fold disjoint streaming `reasoning_tokens` into output for OpenAI-compatible gateways. Fixes usage accounting mismatch between streaming/non-streaming. **Merged**. |
| [#10316](https://github.com/earendil-works/pi/pull/10316) **feat(ai)** | **Feature** | Cloudflare Clef classifiers added to Workers AI: `@cf/cloudflare/clef` (27B, $0.24/M) and `clef-flash` (9B, $0.09/M), 65k context. **Merged**. |
| [#10361](https://github.com/earendil-works/pi/pull/10361) **fix(coding-agent)** | **Bug fix** | Preserve multiline syntax highlighting: apply active formatter to each non-empty line after TUI splits highlighted spans. Fixes #10143. **Merged**. |

---

## Feature Request Trends

1. **Windows-first-class support** — Unified strategy for ConPTY, mintty, WSL, Windows Terminal; reduce "too many ways to run Pi on Windows" fragmentation (#7547).
2. **Long-session durability** — Auto-compaction in CLI mode (#10330), image-input compaction (#10162), token accounting accuracy (#10287), CPU/memory bounds (#7730, #9807).
3. **Model-switching fidelity** — Seamless mid-chat provider/model transitions without ID/schema mismatches (#10257, #10324).
4. **Extension runtime isolation** — Prevent extension console output from corrupting TUI (#10002), preserve `before_agent_start` contributions across run types (#10267).
5. **Theme/customization granularity** — Per-element theme tokens (model name in footer #10338), Home/End behavior toggles (#10314), hide tool rows toggle (#10011).
6. **Mobile/Termux parity** — Clipboard paste (#10391), image rendering (#10371), managed-install cleanup (#10392).

---

## Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence |
|------------|----------|
| **Post-upgrade breakage** | v1.0.0 managed install: missing `@earendil-works/pi-agent-core/node` for subagents (#10347), WebP EXIF parser hang (#10346), brace-expansion vuln in shrinkwrap (#10332). |
| **OAuth/token management fragility** | ChatGPT ID token dropped (#10300), OpenAI refresh_token_invalidated loop (#10377), Bedrock thinking block signature binding (#10324). |
| **TUI rendering regressions** | Full redraw storms (#9255, #9807), image collapse on scroll (#10319), multiline highlight loss (#10361), color query leak (#10256). |
| **Streaming/token accounting mismatches** | Anthropic SSE CRLF split-chunk parse failure (#10390), OpenAI gateway reasoning_tokens discrepancy (#10365), `getContextUsage()` 8× overestimate after retry (#10287). |
| **Platform-specific blind spots** | Termux (Android) clipboard/image/cleanup (#10391, #10371, #10392), mintty/ConPTY color queries (#10256), Kitty non-PNG discard (#10292). |
| **Extension API surprises** | `prompt()` in `agent_settled` silently defers (#10388), `before_agent_start` contributions dropped on non-user runs (#10267), hidden tools leak into rules (#10368). |

---

*Data sourced from `github.com/earendil-works/pi` — issues/PRs updated 2026-10-02 to 2026-10-03 UTC.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-10-03

## Today's Highlights
The project shipped a nightly release (v0.24.7-nightly) with a critical fix aligning Code Mode text with lazy tool discovery and a permissions fix honoring approved tools. Development momentum centers on the **Managed Agent Runtime** — authentication/credential broker, durable local-process recovery, SSE frame resilience, and session trust without terminals. A daily CVE audit failure (#13078) triggered CI triage, while background session CLI commands (`peek`, `answer`, `stop`) advance toward GA.

## Releases
**v0.24.7-nightly.20261002.a011f66944** — *Nightly build*  
- `fix(core)`: Align Code Mode text with lazy tool discovery ([#12990](https://github.com/QwenLM/qwen-code/pull/12990))  
- `fix(permissions)`: Honor approved tool permissions  
*No breaking changes; safe for nightly testers.*

## Hot Issues
| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| [#13078](https://github.com/QwenLM/qwen-code/issues/13078) **Daily dependency CVE audit failed** | Scheduled security scan blocked; may indicate new high-severity vuln or npm audit endpoint outage. Blocks release confidence. | 7 comments, active triage by `github-actions[bot]` |
| [#13189](https://github.com/QwenLM/qwen-code/issues/13189) **Managed engine M5a follow-ups: blocked-session contract & worker settings** | Post-review action items for Managed engine registration (M6 gate). Defines session contract & worker config slices. | Authored by `wenshao` (core maintainer); 3 comments, design-focused |
| [#13254](https://github.com/QwenLM/qwen-code/issues/13254) **Deferred review findings from PR #12513: batch workspace session live-state snapshots** | Autofix bot surfaced review items outside original PR scope — batch snapshots for Web Shell session state. | Auto-generated by `qwen-code-dev-bot`; 1 comment |
| [#8281](https://github.com/QwenLM/qwen-code/issues/8281) **Add Email channel with IMAP/SMTP support** | Long-standing feature request (Aug 2026) for agent-mailbox communication. Closed but signals integration demand. | 6 comments, `need-discussion` label, roadmap/background-automation |
| [#11954](https://github.com/QwenLM/qwen-code/issues/11954) **Fleet Shepherd Dashboard** | Automated fleet health dashboard (bot-maintained). Zero manual syncs/dispatches this tick — fleet idle. | Bot-updated; operational visibility only |

> **Note**: Only 5 issues updated in last 24h; all shown above.

## Key PR Progress
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#13210](https://github.com/QwenLM/qwen-code/pull/13210) | `feat` **Managed Agent Broker Auth** | Adds authenticated principals, broker-provisioned writer credentials, bilingual design docs. Prerequisite for Managed Agent Runtime. | **High** — unlocks secure multi-tenant agent sessions |
| [#13211](https://github.com/QwenLM/qwen-code/pull/13211) | `feat` **Default Durable Local-Process & Trusted Reboot Recovery** | Flips `durable-local-process` and trusted reboot recovery to **on by default** (was opt-in). Completes background Shell/Monitor prerequisite (H3 of #12380). | **High** — improves session resilience out-of-the-box |
| [#13219](https://github.com/QwenLM/qwen-code/pull/13219) | `fix` **Bound Retry Loops with Terminal States** | All async retry loops in managed-agent stack now have budgets & terminal states; message projection heals past permanent sequence gaps. | **High** — eliminates wedged projections & unbounded retries |
| [#13206](https://github.com/QwenLM/qwen-code/pull/13206) | `fix` **Skip Corrupt Managed SSE Frames & Merge Gap Resyncs** | Web Shell panel no longer freezes on corrupt replay frames; adds gap resync for missed events. | **Medium** — hardens managed-agent session panel UX |
| [#13146](https://github.com/QwenLM/qwen-code/pull/13146) | `fix` **Web Shell Trust Workspace Without Terminal** | Daemon route records folder trust decision; surfaces **Trust** action in Projects panel. Removes terminal dependency. | **Medium** — enables headless/web-only trust flows |
| [#13033](https://github.com/QwenLM/qwen-code/pull/13033) | `feat` **Defer Agent/Goal Declarations by Default** | Coordination tools (`agent`, `list_agents`, `get_goal`, `update_goal`, `propose_goal`) now lazy-discoverable; no `tools.eager` needed. | **Medium** — reduces startup overhead, aligns with lazy tool discovery |
| [#13128](https://github.com/QwenLM/qwen-code/pull/13128) | `fix` **Surface Failed/Unavailable LSP Diagnostics as Errors** | `NativeLspService.diagnostics()` and `workspaceDiagnostics()` now reject when no server ready (failed, starting, no active client). | **Medium** — prevents silent “clean” results when LSP is broken |
| [#10949](https://github.com/QwenLM/qwen-code/pull/10949) | `feat` **CLI: Peek, Answer, Stop Background Session** | Adds `qwen sessions peek|answer|stop <session>` for background Agent View sessions (stack 3/3). | **Medium** — completes background session lifecycle control |
| [#13243](https://github.com/QwenLM/qwen-code/pull/13243) | `fix` **Bound Managed Function-Hook Module Evaluation** | Fixes unbounded `await import()` for handler modules (ignored timeout/cancellation); fixes test import. Critical findings from #13129. | **Medium** — prevents hang/crash in function-hook loading |
| [#12943](https://github.com/QwenLM/qwen-code/pull/12943) | `feat` **Adaptive Navigation Rail & Unified Live Settings (Web Shell)** | Home-only hosts: single 300px column; multi-entry hosts: 56px rail + 300px column. Collapsible rail. | **Low-Medium** — improves Web Shell layout flexibility |

## Feature Request Trends
1. **Managed Agent Runtime & Multi-Tenancy** — Authentication broker (#13210), durable processes (#13211), session trust (#13146), background sessions (#10949, #10943). Clear push toward hosted, reusable agent infrastructure.
2. **Background/Async Agent Operations** — `qwen --bg`, session peek/answer/stop, fleet dashboard (#11954). Developers want fire-and-forget agents with observability.
3. **Web Shell as First-Class UI** — Adaptive layouts (#12943), SSE resilience (#13206), trust without terminal (#13146), live-state snapshots (#13254).
4. **Memory/Recall Intelligence** — Opt-in selector skip for unique recall hits (#13158). Moving beyond naive retrieval to context-aware memory.
5. **Email/External Channel Integration** — IMAP/SMTP channel (#8281) shows demand for agent communication via standard protocols.

## Developer Pain Points
| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Unbounded async operations causing hangs** | Retry loops without terminal states (#13219), unbounded `await import()` (#13243), SSE frame corruption freezing panel (#13206) | High — 3 PRs fixing same class of bug |
| **Silent failures in diagnostics/tooling** | LSP diagnostics reporting “clean” when servers unavailable (#13128), CVE audit failing without clear signal (#13078) | Medium — 2 incidents in 24h |
| **Session/contract ambiguity in Managed engine** | Blocked-session contract undefined (#13189), writer lease epoch drift across timezones (#13192), transcript corruption (`}{` glue) handling (#13035) | Medium — design-level gaps surfaced in review |
| **CI flakiness & noise** | Yamllint/shellcheck lanes failing on empty git lists (#12650), CVE audit endpoint instability (#13078) | Recurring — bot-generated fixes needed |
| **Configuration merge strategy mismatches** | `REPLACE` declared but unimplemented for `modelProviders`/`providerProtocol` (#12613) | Low — but indicates schema/runtime drift |

---

*Digest generated from GitHub data as of 2026-10-03. Links point to live issues/PRs on [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code).*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-10-03

## 1. Today's Highlights
The 0.10.1 release branch has landed, introducing official **ChatGPT sign-in**, extensible TypeScript tooling, and native terminal adoption while retaining Rust execution authority. A critical **MCP regression in v0.10.0** blocks all configured servers from exposing tools in-session, and a **CPU usage regression** across v0.9.12→v0.10.0 has been quantified on FreeBSD. The TUI crate decomposition epic (EPIC-005) continues with 31 comments tracking the post-FEAT-026 refactor.

## 2. Releases
No new releases published in the last 24 hours. The **0.10.1 release branch** ([#6815](https://github.com/Hmbown/Codewhale/pull/6815)) is open and integrates ChatGPT sign-in, extension capabilities, and native terminal adoption.

## 3. Hot Issues

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| **[#5316](https://github.com/Hmbown/Codewhale/issues/5316)** EPIC-005: TUI Crate Decomposition | Umbrella tracking the post-FEAT-026 crate split; 31 comments indicate active architectural discussion | High — 31 comments, ongoing since Aug |
| **[#6828](https://github.com/Hmbown/Codewhale/issues/6828)** MCP servers expose no tools in v0.10.0 | **Critical regression**: enabled MCP servers return empty `tool_search`; blocks model tool discovery entirely | New, un-triaged — 0 comments but blocks MCP workflows |
| **[#6728](https://github.com/Hmbown/Codewhale/issues/6728)** CPU Usage Regression v0.9.12→v0.10.0 | Quantified idle→moderate→heavy CPU growth across three releases on FreeBSD; binary size grew 82→90 MB | 1 comment, needs triage — performance alert |
| **[#6827](https://github.com/Hmbown/Codewhale/issues/6827)** Windows: killing `node.exe` terminates Codewhale | npm launcher architecture causes cascade kill; agent’s own “stop node” commands can self-terminate | Windows-specific blocker, 0 comments |
| **[#6818](https://github.com/Hmbown/Codewhale/issues/6818)** Ratatui component explorer for website | UX/docs investment: interactive component gallery to accelerate TUI adoption | Authored by maintainer (Hmbown), 0 comments |
| **[#6816](https://github.com/Hmbown/Codewhale/issues/6816)** Migrate to official ChatGPT sign-in contract | Replaces local plan access with OpenAI’s open-source OAuth flow; impacts auth UX | Authored by maintainer, 0 comments |
| **[#6328](https://github.com/Hmbown/Codewhale/issues/6328)** Schedule list UI for watches/heartbeat | UI for cron-driven agent schedules; blocked on core cron routes | 0 comments, tracked since Sep |
| **[#6814](https://github.com/Hmbown/Codewhale/issues/6814)** Complete Ratatui component catalogue (CLOSED) | Documentation milestone: native preview fidelity + CI/gallery workflows green | Completed Oct 2, 0 comments |

## 4. Key PR Progress

| PR | Type | Summary |
|----|------|---------|
| **[#6815](https://github.com/Hmbown/Codewhale/pull/6815)** | Release | **0.10.1 branch**: ChatGPT sign-in, TS extension harness, native terminal; Rust keeps execution/perm/session authority |
| **[#6829](https://github.com/Hmbown/Codewhale/pull/6829)** | Fix | **TUI**: wrap diff/tool output at grapheme boundaries (keycaps, ZWJ emoji, combining sequences) — fixes #4479 class |
| **[#6817](https://github.com/Hmbown/Codewhale/pull/6817)** | Feature | **Runtime API**: read per-tool-call file mutations from snapshots; enables “what did this shell command change?” UI |
| **[#6820](https://github.com/Hmbown/Codewhale/pull/6820)** | RFC | **Architecture**: evaluate consolidating `code_execution` (Python) + `js_execution` (Node) into `shell` tool |
| **[#6819](https://github.com/Hmbown/Codewhale/pull/6819)** | Fix | **CLI**: `config doctor` now case-insensitively detects HTTP(S) protocols (fixes false positives for `HTTPS://…`) |
| **[#6822](https://github.com/Hmbown/Codewhale/pull/6822)** | Deps | **rio-vt 0.5.26→0.5.28**: terminal parser updates (VT emulation fixes) |
| **[#6821](https://github.com/Hmbown/Codewhale/pull/6821)** | Deps | **rmcp 3.4.0→3.5.0**: MCP Rust SDK update (macro fixes, protocol improvements) |
| **[#6826](https://github.com/Hmbown/Codewhale/pull/6826)** | Deps | uuid 1.26.0→1.26.1 (v7 counter fix) |
| **[#6824](https://github.com/Hmbown/Codewhale/pull/6824)** | Deps | encoding_rs 0.8.41→0.8.42 |
| **[#6823](https://github.com/Hmbown/Codewhale/pull/6823)** | Deps | thiserror 2.0.20→2.0.21 (generic unit variant parsing fix) |

## 5. Feature Request Trends
1. **MCP reliability & discoverability** — v0.10.0 broke tool exposure; community expects first-class MCP debugging (tool search, connection inspection).
2. **Native terminal parity** — 0.10.1 adopts native terminal; issues track Windows npm-launcher fragility and VT emulation fidelity (rio-vt bumps).
3. **Extensibility surface** — TypeScript tool/command/hook/skill harness (0.10.1) + RFC to unify interpreter tools under Shell.
4. **Observability** — Per-tool-call file mutation API (#6817), schedule UI (#6328), component explorer (#6818).
5. **Auth standardization** — Migration to official ChatGPT OAuth contract (#6816).

## 6. Developer Pain Points
- **MCP broken in v0.10.0** — zero tools exposed despite enabled servers; `tool_search` empty; `mcp connect` cannot attach to live sessions ([#6828](https://github.com/Hmbown/Codewhale/issues/6828)).
- **CPU/performance regression** — measurable idle→heavy degradation across three minor versions; binary bloat (+10%) on FreeBSD ([#6728](https://github.com/Hmbown/Codewhale/issues/6728)).
- **Windows npm-launcher instability** — `node.exe` kill cascades to `codewhale.exe`; agent’s own stop commands can suicide the session ([#6827](https://github.com/Hmbown/Codewhale/issues/6827)).
- **Grapheme-aware rendering gaps** — diff/tool output still wraps by `char`, breaking keycaps/ZWJ emoji alignment ([#6829](https://github.com/Hmbown/Codewhale/pull/6829)).
- **Config validation false positives** — `config doctor` rejects valid `HTTPS://` URLs due to case-sensitive protocol check ([#6819](https://github.com/Hmbown/Codewhale/pull/6819)).

---

*Generated from github.com/Hmbown/Codewhale activity (2026-10-02 → 2026-10-03).*

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*