# AI CLI Tools Community Digest 2026-09-20

> Generated: 2026-09-20 04:36 UTC | Tools covered: 10

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

# Cross-Tool Comparison Report: AI CLI Tools Ecosystem (2026-09-20)

---

## 1. Ecosystem Overview

The AI CLI tools landscape is in a **consolidation and hardening phase** rather than feature expansion. All major tools shipped either patch releases or alpha/nightly builds focused on stability regressions—Windows/Desktop reliability, session/transcript integrity, and MCP integration maturity. A clear pattern emerges: **core instruction-following and data-integrity bugs** (Claude Code Opus 5, Gemini subagent false success, Codex Windows send-button) are dominating backlogs over new capabilities. The ecosystem is converging on three architectural fronts: **multi-session orchestration** (Qwen, Pi, DeepSeek), **persistent task/state management** (Gemini, Claude, OpenCode), and **zero-trust tool result handling** (Qwen, Pi, Kimi). Desktop/TUI parity and cross-platform hardening remain the primary differentiators.

---

## 2. Activity Comparison

| Tool | Issues (Hot) | PRs Updated | Release Status | Critical Regressions |
|------|--------------|-------------|----------------|---------------------|
| **Claude Code** | 10 (33 comments top) | 3 merged | None | Opus 5 instruction-following, Cowork Windows data-loss, Remote Control 403s |
| **OpenAI Codex** | 10 (65👍 top) | 20+ (TUI overhaul) | 2 alphas (0.156.0-α.8/9) | Windows send-button hang, 8-min launch, TUI sparkle blocks selection |
| **Gemini CLI** | 10 (13 comments top) | 10 (2 closed) | Nightly v0.62.0 | Subagent false success, generalist agent hangs, >400 tools 400 error |
| **GitHub Copilot CLI** | 10 (11👍 top) | 0 | None | Alpine segfault, WSL2 wedge, Figma MCP discovery, desktop credential staleness |
| **Kimi Code CLI** | 10 (8 comments top) | 5 (2 closed) | None | Windows ASCII crash, Ubuntu regression, concurrent write permission denied |
| **OpenCode** | 10 (3👍 top) | 2 | None | Free-tier quota false exhaustion (surge today), config flag ignored |
| **Pi** | 10 (20 comments top) | 10 (5 closed) | **v0.86.0** | TUI streaming pins core, Shrinkwrap duplication, compaction reliability |
| **Qwen Code** | 10 (4 comments top) | 10 (1 closed) | **v0.24.1** (breaking) | CI flakiness, MCP MIME trust, transcript bloat |
| **DeepSeek TUI** | 10 (8 comments top) | 10 (all fixes/deps) | None (v0.10.0 WIP) | Branch persistence loss, headless exec blocks, test stack overflow |
| **Grok Build** | 0 | 0 | None | No activity |

**Key Observations:**
- **Pi** and **Qwen** are the only tools with stable releases today; both include breaking changes or significant fixes.
- **Codex** leads in PR volume (20+) due to coordinated TUI transcript v2 rollout.
- **OpenCode** shows a concerning surge in free-tier quota bugs (5+ issues filed today).
- **Claude Code** and **Codex** have the highest community engagement (comment/👍 counts).

---

## 3. Shared Feature Directions

| Requirement | Tools Affected | Specific Needs |
|-------------|----------------|----------------|
| **Multi-session / Multi-agent Orchestration** | Qwen Code (#12303, #12292), Pi (#9434, #9690), DeepSeek TUI (#6094, #6038), Claude Code (#95625), OpenCode (#49755) | Cross-session policy gates, managed session records, fleet dashboards, host-level resource capping, session isolation with shared context |
| **Persistent Task/State Management** | Gemini CLI (#29393, #18836), Claude Code (#93666, #95294), Qwen Code (#12302), Pi (#2616, #9792) | File-based CRUD trackers (replacing in-context WriteToDo), atomic state writes, session resumption by activity time, MRU cycling |
| **MCP Hardening & Zero-Trust Tool Results** | Qwen Code (#12290, #10835), Pi (#9757, #9770), Kimi CLI (#1487, #2259), GitHub Copilot CLI (#4870, #41437), Codex (#20605, #41437) | MIME/type validation vs server-declared, image bounding/resizing, stderr isolation, hot-reload, non-fatal discovery errors, credential rotation |
| **Desktop/TUI Parity & Performance** | Codex (#46733-46751), Pi (#6665, #9746), DeepSeek TUI (#6365, #6363), Qwen Code (#11658, #9305), Claude Code (#93528, #78369) | Transcript search/rewind/selection, streaming CPU optimization, CJK boundaries, fullscreen regressions, viewport alignment |
| **Cross-Platform Windows Reliability** | Claude Code (#89687, #93482), Codex (#40968, #41822, #44135), Kimi CLI (#773, #1429, #1436), Copilot CLI (#3439, #4069), Gemini CLI (#21983) | MSIX/AppX launch fixes, silent stale writes, send-button hangs, 8-min startup, Git Bash compatibility, Wayland support |
| **Privacy/Telemetry Control** | Claude Code (#92649, #95618), Codex (implied), Pi (implied), OpenCode (#49755) | Opt-in auto-feedback, built-in plugin telemetry only, budget UI accuracy, data exfiltration prevention |

---

## 4. Differentiation Analysis

| Dimension | Leaders | Approach |
|-----------|---------|----------|
| **Enterprise/Deployment Grade** | **Qwen Code**, **Pi** | Managed extensions dir (#12183), bwrap per-tool confinement (#12269), fleet dashboard (#11954), prompt cache warming (#9668), session system prompt append (#9434) |
| **Terminal/Ux Innovation** | **Codex**, **DeepSeek TUI**, **Pi** | Transcript v2 with search/rewind/copy (20 PRs), painted-column copy, visual-row cursor, per-thinking-level sampling (#9776), hardware cursor on blur |
| **Model/Provider Agnosticism** | **Pi**, **OpenCode**, **Gemini CLI** | Meta Muse OAuth (#9096), provider registry design (#5653), AST-aware tooling for native POSIX affinity (#19873), custom agent configs |
| **Developer Workflow Automation** | **Gemini CLI**, **Kimi CLI**, **Copilot CLI** | Persistent task tracker (#29393), shell-mode skip/auto-approve (#729, #1414), VCS-agnostic rewind (#1381), non-interactive CLI hardening |
| **Session Durability & Replay** | **Qwen Code**, **Pi**, **Claude Code** | Retry-from-history (#12291), trajectory view (#12293), compaction observability (#9051), session move command (#49560) |
| **Platform-Native Integration** | **Claude Code**, **Codex**, **Copilot CLI** | Remote Control, Cowork, MSIX/Desktop, VS Code Copilot parity, GitHub MCP server catalog |

**Target User Segments:**
- **Qwen/Pi**: Enterprise/ops teams needing air-gapped, policy-controlled runtimes
- **Codex/DeepSeek**: Power terminal users investing in TUI-as-IDE
- **Claude Code/Copilot**: Existing platform subscribers (Anthropic/GitHub) seeking integrated workflows
- **Gemini/Kimi**: Developers prioritizing model-native tooling (bash affinity, shell-mode automation)

---

## 5. Community Momentum & Maturity

| Tier | Tools | Indicators |
|------|-------|------------|
| **High Momentum (Rapid Iteration + High Engagement)** | **OpenAI Codex**, **Claude Code** | 20+ PRs/day (Codex TUI overhaul), 30-65👍 on top issues, alpha cadence, dedicated UX investment |
| **Steady Maturity (Regular Releases + Structural Fixes)** | **Pi**, **Qwen Code**, **Gemini CLI** | Stable releases with breaking changes, nightly/weekly cadence, architectural epics (AST, cache warming, multi-session) |
| **Consolidation Phase (Bug-Focused + Platform Gaps)** | **GitHub Copilot CLI**, **Kimi Code CLI** | High % closed issues (80%+), platform-specific regressions dominate, fewer feature PRs |
| **Early/Volatile (Architectural Churn)** | **DeepSeek TUI**, **OpenCode** | v0.10.0 redesign in flight, major protocol shifts (ACP, Runtime client), quota/accounting instability |
| **Inactive** | **Grok Build** | No 24h activity |

**Maturity Signals:**
- **Pi** and **Qwen** demonstrate production-grade release engineering (changelogs, breaking change notes, multi-component releases).
- **Codex**'s 20-PR TUI transcript overhaul shows coordinated feature-team velocity.
- **Claude Code**'s telemetry refactor (#95618) restricting to built-in plugins shows privacy maturity.
- **OpenCode**'s free-tier quota surge suggests billing/accounting infrastructure gaps.

---

## 6. Trend Signals for Technical Decision-Makers

| Trend | Evidence | Strategic Implication |
|-------|----------|----------------------|
| **Instruction-Following Reliability > Raw Model Capability** | Claude Code Opus 5 ignoring CLAUDE.md (#90542), Gemini subagents false success (#22323), Codex Astra rejecting prompts (#46082) | **Evaluation criteria must include long-context adherence testing**, not just benchmarks. Tools with contract-enforcement layers (CLAUDE.md, system prompts) gain trust. |
| **Session as Persistent Artifact, Not Ephemeral Chat** | Qwen trajectory view (#12293), Pi compaction observability (#9051), Gemini persistent tracker (#29393), OpenCode session move (#49560) | **Invest in session serialization, replay, and audit tooling**. CI/CD integration depends on inspectable, restartable sessions. |
| **Zero-Trust MCP/Tool Result Handling** | Qwen MIME validation (#12290), Pi parseChunkUsage hardening (#9757), Kimi stderr isolation (#2259), Copilot Figma discovery (#4870) | **Assume tool results are malicious/malformed**. Sandbox per-tool (bwrap), validate MIME vs bytes, bound image sizes, isolate stderr. |
| **Desktop/TUI Convergence on "IDE-Grade" Terminal UX** | Codex transcript v2 (20 PRs), Pi streaming CPU fix (#6665), DeepSeek painted-column copy

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report  
*Data as of 2026-09-20 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking (Most Active PRs by Recent Engagement)

| # | Skill / PR | Functionality | Discussion Highlights | Status |
|---|------------|---------------|----------------------|--------|
| 1 | **[proofcore-contract-auditor](https://github.com/anthropics/skills/pull/1771)** (#1771) | Automated static analysis of Solidity/Rust smart contracts; anchors cryptographic audit proofs to TON blockchain via ProofCore’s zero-storage Merkle protocol. | New Web3-focused skill; addresses growing demand for on-chain verification tooling. | **Open** (2026-09-15) |
| 2 | **[mcp-builder fixes](https://github.com/anthropics/skills/pull/1742)** (#1742) | Updates `streamablehttp_client` → `streamable_http_client` for MCP ≥2.0; adds custom header support via `create_mcp_http_client`. | Fixes breaking changes in MCP 2.0; critical for skill authors building MCP servers. | **Open** (2026-09-08) |
| 3 | **[md2video-audio](https://github.com/anthropics/skills/pull/1703)** (#1703) | Compiles Markdown → MP4 with Marp slides + realistic TTS voiceovers; zero-cost (local tooling). | Novel content-creation workflow; taps “docs-to-video” automation trend. | **Open** (2026-09-01) |
| 4 | **[blast-radius](https://github.com/anthropics/skills/pull/1776)** (#1776) | Pre-execution safety checklist for bulk/destructive ops (user archival, access revocation, mass deletion, batch mail). | Addresses “query right, operation wrong” gap; strong interest in operational safety patterns. | **Open** (2026-09-17) |
| 5 | **[AWT — AI Watch Tester](https://github.com/anthropics/skills/pull/822)** (#822) | Vision + browser control for zero-code E2E test generation; auto-healing selectors; CI/CD integration. | Long-running PR (since Mar 2026); community sees high value in AI-driven QA. | **Open** (2026-03-31) |
| 6 | **[skill-creator trigger eval fixes](https://github.com/anthropics/skills/pull/1298)** (#1298) | Isolates trigger evaluations, fixes Windows `select()` on pipes, prevents unrelated tools from stopping scan. | Core infrastructure fix; resolves false negatives in skill triggering (linked to Issue #556). | **Open** (2026-06-10) |
| 7 | **[pyxel](https://github.com/anthropics/skills/pull/525)** (#525) | Retro game dev skill: deterministic headless runs, frame inspection, state checks for Pyxel engine. | Niche but passionate community; shows skills expanding into creative coding. | **Open** (2026-03-05) |
| 8 | **[scnet-hpc](https://github.com/anthropics/skills/pull/1615)** (#1615) | Profile-based SSH/Slurm workflows for SCNet HPC clusters: connection, partitions, modules, accelerators. | Enterprise/HPC use case; indicates demand for cluster orchestration skills. | **Open** (2026-08-20) |

> **Note**: PR comment counts are not exposed in the API response; ranking uses “Updated” recency (all Sep 2026) and issue cross-references as engagement proxies.

---

## 2. Community Demand Trends (From Issues)

| Trend | Evidence (Top Issues) | Signal Strength |
|-------|----------------------|-----------------|
| **Trust & Security Hardening** | [#492](https://github.com/anthropics/skills/issues/492) (43 💬, 2 👍): Community skills masquerading as official `anthropic/` namespace; trust boundary abuse. | 🔴 Critical |
| **Organizational Skill Distribution** | [#228](https://github.com/anthropics/skills/issues/228) (16 💬, 8 👍): Native org-wide sharing vs. manual file transfer via Slack/Teams. | 🟠 High |
| **Skill Triggering Reliability** | [#556](https://github.com/anthropics/skills/issues/556) (12 💬, 7 👍): `claude -p` never triggers skills (0% rate); `run_eval.py` broken. | 🟠 High |
| **Developer Experience & Tooling** | [#189](https://github.com/anthropics/skills/issues/189) (6 💬, 9 👍): Duplicate skills from `document-skills`/`example-skills` plugins; [#1362](https://github.com/anthropics/skills/issues/1362) (3 💬): `web-artifacts-builder` broken on pnpm ≥10.1. | 🟡 Medium |
| **Meta-Skills for Skill Authoring** | [#202](https://github.com/anthropics/skills/issues/202) (8 💬): `skill-creator` reads like docs, not an operational skill; [#83](https://github.com/anthropics/skills/pull/83): `skill-quality-analyzer` + `skill-security-analyzer`. | 🟡 Medium |
| **Agent Governance & Safety** | [#412](https://github.com/anthropics/skills/issues/412) (6 💬): Policy enforcement, threat detection, audit trails for agent systems; [#1776](https://github.com/anthropics/skills/pull/1776): blast-radius checklist. | 🟢 Emerging |
| **Context Window Optimization** | [#1487](https://github.com/anthropics/skills/issues/1487) (4 💬): `claude-api` skill injects ~156k tokens, exhausting context. | 🟢 Emerging |
| **Reasoning Quality Pipelines** | [#1385](https://github.com/anthropics/skills/issues/1385) (4 💬, 1 👍): Three-gate pipeline (Calibration → Adversarial Review → Verification). | 🟢 Emerging |

---

## 3. High-Potential Pending Skills (Active PRs Likely to Land Soon)

| PR | Skill | Why It’s Poised to Merge |
|----|-------|--------------------------|
| [#1742](https://github.com/anthropics/skills/pull/1742) | **mcp-builder MCP 2.0 compat** | Fixes blocking breakage for all MCP-based skills; referenced in Issue #1668. |
| [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator trigger eval isolation** | Directly addresses Issue #556 (0% trigger rate); core infrastructure. |
| [#1769](https://github.com/anthropics/skills/pull/1769) | **skill-creator 0% recall fix** | Fixes #1721; silent failure mode misleading optimization loops. |
| [#1765](https://github.com/anthropics/skills/pull/1765) | **Office redlining UTF-8 decode** | Fixes #1707; enables non-ASCII doc content on Windows. |
| [#1790](https://github.com/anthropics/skills/pull/1790) | **docx comment rels creation** | Resolves Defect 2 in comment handling; small, targeted fix. |
| [#1724](https://github.com/anthropics/skills/pull/1724) | **mcp-builder eval model bump** | Updates default to `claude-sonnet-5`; low-risk, high-value. |
| [#1703](https://github.com/anthropics/skills/pull/1703) | **md2video-audio** | Complete, self-contained skill; novel capability; active author engagement. |
| [#1771](https://github.com/anthropics/skills/pull/1771) | **proofcore-contract-auditor** | High-profile Web3 integration; external protocol (ProofCore) backing. |

---

## 4. Skills Ecosystem Insight

> **The community’s most concentrated demand is for *trustworthy, reliably-triggered skills that can be safely shared across organizations*—with immediate pain points around namespace spoofing, broken skill invocation, and the absence of native distribution tooling.**

---

# Claude Code Community Digest — 2026-09-20

---

## 1. Today's Highlights

No new releases shipped today. The issue tracker shows **active regression clusters** around Opus 5 instruction-following (rules ignored, directives overridden), Cowork data-loss on Windows (silent stale writes), and Remote Control auth failures on macOS (403s). Three PRs landed diff-pane UX fixes and a telemetry refactor restricting collection to built-in plugins only.

---

## 2. Releases

*None in the last 24 hours.*

---

## 3. Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#90542](https://github.com/anthropics/claude-code/issues/90542) | **Opus 5 ignores entire CLAUDE.md contract** — 700-line rule set violated across 4.5h session, including rules quoted verbatim moments earlier | Core reliability: instruction-following breakdown on flagship model; affects all long-running sessions | 33 comments, high urgency |
| [#91424](https://github.com/anthropics/claude-code/issues/91424) | **Opus 5 overrides explicit user directives with inferred defaults** on prose tasks; degrades after correction | Model steering failure; user intent discarded in favor of heuristic defaults | 9 comments |
| [#93482](https://github.com/anthropics/claude-code/issues/93482) | **Cowork `device_commit_files` reports success but on-disk content lags one commit behind** (silent stale write, fresh mtime) | Data-loss risk on Windows; silent corruption with no error surface | 8 comments, has repro |
| [#89687](https://github.com/anthropics/claude-code/issues/89687) | **Windows MSIX Desktop updater force-registers into live AppX container** — app unlaunchable (0x80070020) until sign-out | Blocks all Desktop app users on Windows; requires OS-level workaround | 7 comments |
| [#77372](https://github.com/anthropics/claude-code/issues/77372) | **Remote Control: stale environments undeletable; ghost sessions cause permanent 404s** — even fresh envs fail on different session IDs | Breaks remote development workflow; session state corruption | 7 comments, 2👍, has repro |
| [#78369](https://github.com/anthropics/claude-code/issues/78369) | **Plan side panel shows stale first-proposal snapshot** — never updates across plan-mode cycles | UX regression for planning workflow; misleading context | 4 comments |
| [#82610](https://github.com/anthropics/claude-code/issues/82610) | **Desktop local sessions never surface marketplace plugin tools** — only bundled skills-plugin found | Plugin ecosystem broken for Desktop users; 3rd-party skills invisible | 3 comments |
| [#89043](https://github.com/anthropics/claude-code/issues/89043) | **Subagents cannot reply to inter-agent messages** — sender `from=general-purpose` (type, not routable ID) | Multi-agent workflows blocked; `SendMessage` fails with unroutable target | 3 comments, *closed* |
| [#93528](https://github.com/anthropics/claude-code/issues/93528) | **Desktop (macOS) Code tab: new messages hang at "Sending..." indefinitely** | Core chat path broken on primary platform; blocks all interaction | 2 comments |
| [#92649](https://github.com/anthropics/claude-code/issues/92649) | **Auto-drafted feedback box transmits private session content on single keystroke** — on by default, no opt-in/confirmation | Privacy/security: silent data exfiltration risk; enabled by default | 2 comments |

---

## 4. Key PR Progress

| # | PR | Description |
|---|----|-------------|
| [#94847](https://github.com/anthropics/claude-code/pull/94847) | **Diff pane: open only when first edit has a file to list** — avoids empty pane on ignored/outside-repo writes |
| [#95618](https://github.com/anthropics/claude-code/pull/95618) | **Telemetry: complete rows via `$`, batched sends, built-in plugins only** — hooks filter out user/admin-installed plugins with reason |
| [#95587](https://github.com/anthropics/claude-code/pull/95587) | **Diff: resumed sessions with edits open pane; `/clear` leaves it up; session line follows engine start** — parity with built-in panel |

---

## 5. Feature Request Trends

1. **Session & Chat Management** — MRU session cycling ([#93666](https://github.com/anthropics/claude-code/issues/93666)), pinned-chat sort modes/reset ([#75511](https://github.com/anthropics/claude-code/issues/75511)), mark sessions complete ([#95294](https://github.com/anthropics/claude-code/issues/95294))
2. **Auth Transparency** — Expose auth method (subscription vs API key) in status line ([#95598](https://github.com/anthropics/claude-code/issues/95598)), clarify Remote Control sign-in errors ([#95620](https://github.com/anthropics/claude-code/issues/95620))
3. **Agent/Subagent Control** — Model selection for Fable subagents ([#76379](https://github.com/anthropics/claude-code/issues/76379)), persistent multi-bot gateway mode with per-bot memory ([#95625](https://github.com/anthropics/claude-code/issues/95625))
4. **Feedback & Telemetry Control** — View/track submitted feedback ([#92520](https://github.com/anthropics/claude-code/issues/92520)), opt-in for auto-feedback ([#92649](https://github.com/anthropics/claude-code/issues/92649))
5. **Cross-Platform Parity** — Network egress for WebSocket on Cowork web ([#94355](https://github.com/anthropics/claude-code/issues/94355)), WSL managed-settings discovery ([#91816](https://github.com/anthropics/claude-code/issues/91816))

---

## 6. Developer Pain Points (Recurring Themes)

| Pain Point | Evidence |
|------------|----------|
| **Opus 5 instruction-following regression** | #90542 (contract ignored), #91424 (directives overridden), #93749 (fabricated turns/leaked reminders) |
| **Silent data corruption / stale state** | #93482 (Cowork stale write), #78369 (stale plan panel), #82676 (skills missing until first message) |
| **Remote Control / Desktop auth fragility** | #77372 (ghost 404s), #95619 (desktop 403s), #95620 (ambiguous sign-in errors), #95624 (silent project loss) |
| **Windows/MSIX platform gaps** | #89687 (updater breaks launch), #93239 (Enter interrupts), #86756 (broken MCP kills cold start) |
| **Plugin/skill discovery broken** | #82610 (marketplace plugins invisible), #95582 (skill descriptions missing), #82676 (remote skills omitted) |
| **Privership defaults** | #92649 (auto-feedback exfiltrates), #95618 (telemetry now restricted to built-ins — reactive fix) |
| **WSL / cross-filesystem issues** | #91816 (managed-settings fails when `/mnt/c` inaccessible), #95614 (Bash `*` reinterpreted on replay) |

---

*Generated from `anthropics/claude-code` GitHub data (issues/PRs updated 2026-09-19 → 2026-09-20).*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-09-20

## 1. Today's Highlights
The Codex team shipped two rapid alpha releases (0.156.0-alpha.8/9) while the community surfaces critical Windows Desktop regressions—most notably a send-button hang blocking all follow-up prompts (44 comments, 17 👍) and an 8-minute post-update launch caused by 4,680 failed encrypted copy retries. Meanwhile, a massive TUI overhaul landed via 20+ PRs, introducing transcript search, compact browsing, selection/copy, and warning viewers—signaling a major UX push for terminal users.

## 2. Releases
| Version | Type | Notes |
|---------|------|-------|
| `rust-v0.156.0-alpha.9` | Alpha | Follow-up to alpha.8; no changelog published yet. |
| `rust-v0.156.0-alpha.8` | Alpha | Baseline for current alpha series. |

> **Note:** Both are Rust toolchain publishes; CLI/Desktop bundles will follow. Track [releases](https://github.com/openai/codex/releases) for user-facing builds.

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#40968](https://github.com/openai/codex/issues/40968) | **Windows Desktop: Send button spins forever, prompts never submit** | Blocks all follow-up interaction on Windows; affects Pro x5 subscribers. | 44 comments, 17 👍 |
| [#44561](https://github.com/openai/codex/issues/44561) | **Turn off “whimsy” (Astra stars) by default** | Visual noise in TUI; users mistook it for a glitch. Strong consensus for opt-in. | 24 comments, **65 👍** |
| [#44135](https://github.com/openai/codex/issues/44135) | **Windows: Chrome control fails with `nodeRepl.fetch request failed`** | Browser automation broken on Windows; Edge also fails. Extension/host checks pass. | 21 comments, 4 👍 |
| [#41822](https://github.com/openai/codex/issues/41822) | **Windows: 4,680 doomed encrypted copy retries → ~8 min first launch post-update** | Severe startup regression; MSIX/Store installs affected. | 10 comments, 1 👍 |
| [#44398](https://github.com/openai/codex/issues/44398) | **Astra sparkle animation blocks mouse text selection in kitty** | Core editing UX broken in popular terminal; macOS + Kitty. | 10 comments, 16 👍 |
| [#19984](https://github.com/openai/codex/issues/19984) | **TUI loses/misreports active turn timer after state replay/restore** | Long-standing session-state bug; affects billing/usage tracking. | 9 comments |
| [#28259](https://github.com/openai/codex/issues/28259) | **`codex exec resume` appends to Desktop transcript without updating Desktop UI** | Cross-client sync broken; CLI/Desktop transcript divergence. | 8 comments |
| [#20605](https://github.com/openai/codex/issues/20605) | **Hot-load local MCP changes into existing thread** | Developer workflow friction; requires full restart to pick up tool updates. | 8 comments |
| [#41437](https://github.com/openai/codex/issues/41437) | **Upwork MCP startup fails “Unexpected response type” on Windows** | MCP ecosystem breakage on Windows; blocks tool discovery. | 8 comments, 4 👍 |
| [#45209](https://github.com/openai/codex/issues/45209) | **Queued follow-up fails: “App-server queued follow-up no longer exists”** | Message loss in Desktop app-server path; data integrity concern. | 7 comments |

## 4. Key PR Progress (TUI Transcript Overhaul)
All 20 PRs are from `copyberry[bot]` and form a cohesive **transcript v2 / alternate-screen TUI** feature set. Highlights:

| PR | Feature / Fix |
|----|---------------|
| [#46733](https://github.com/openai/codex/pull/46733) | **Integrate interactive transcript into alternate-screen TUI** — renders history + live output above composer with scrolling, selection, copying, links, pagination. |
| [#46734](https://github.com/openai/codex/pull/46734) | **Transcript search (`F3`/`/`) + per-activity detail toggles (`Ctrl+T`)** — incremental, case-insensitive, loads older history on demand. |
| [#46739](https://github.com/openai/codex/pull/46739) | **Compact prompt browsing (double `Esc`)** — left/right to select prompts, up/down to scroll, `Enter` to rewind. |
| [#46732](https://github.com/openai/codex/pull/46732) | **Selection & copying in transcript viewer** — mouse/keyboard selection, drag autoscroll, `Ctrl+Space`, link open on modified click. |
| [#46751](https://github.com/openai/codex/pull/46751) | **Warning footer + dedicated warnings viewer** — deduplicated count in passive footer, full viewer without cluttering conversation. |
| [#46750](https://github.com/openai/codex/pull/46750) | **Preserve startup drafts & submit when session ready** — fixes lost keystrokes on slow connect. |
| [#46749](https://github.com/openai/codex/pull/46749) | **Stabilize transcript/composer interactions** — suggestions/hints preserve draft; local command output revealed when scrolling history. |
| [#46731](https://github.com/openai/codex/pull/46731) | **Dynamic tool activity rendering + history ordering** — retains concurrent tool completion order in scrollback. |
| [#46710](https://github.com/openai/codex/pull/46710) | **Restore rich tool details in persisted transcripts** — reuses live history cells for commands, MCP, patches, agent activity. |
| [#46709](https://github.com/openai/codex/pull/46709) | **Compact activity renderers + source-text preservation** — bounded previews with full transcript fidelity across wrap/stream. |

> **Takeaway:** The TUI is gaining IDE-grade transcript navigation—search, rewind, selection, and fidelity parity with live output. Enable via `features.transcript_v2`.

## 5. Feature Request Trends
1. **MCP hot-reload / dynamic tool discovery** (#20605, #41437) — developers want zero-restart iteration on local MCP servers.
2. **Cross-client session sync** (#28259, #40973) — CLI ↔ Desktop ↔ VS Code transcript/state consistency.
3. **Windows parity** — Chrome/Edge control, sandbox elevation, auth routing, startup performance.
4. **TUI composability** — search, compact mode, selection, warnings, draft persistence (#44561, #46733–#46751).
5. **Dictation & agent orchestration in VS Code** (#40859) — avoid context-switch to Desktop for voice/thread management.
6. **GitHub plugin org-install visibility** (#36473) — surface GitHub App install flow for private repos.

## 6. Developer Pain Points (Recurring Themes)
| Area | Pain Point | Evidence |
|------|------------|----------|
| **Windows Desktop** | Send-button hang, 8-min post-update launch, Chrome/Edge control broken, auth routing 432 errors, sandbox elevation regression (0.155.0) | #40968, #41822, #44135, #46382, #46388 |
| **TUI/CLI UX** | Whimsy animation forced-on, sparkle blocks text selection, turn timer drift, 100% CPU on long single-line exec, paste image paths broken | #44561, #44398, #19984, #33755, #9283 |
| **Session/Transcript** | CLI resume doesn’t update Desktop UI, stale encrypted compaction breaks threads after key rotation, auto-compact loops, queued follow-up loss | #28259, #36704, #46423, #45209 |
| **MCP / Tools** | No hot-reload, Windows startup “Unexpected response type”, approval prompts not surfaced via app-server | #20605, #41437, #21982 |
| **macOS Desktop** | Chrome Computer Use header-policy load failure, TIOCSTI crash on browser/desktop control, sign-in requirements load failure | #44988, #46212, #46758 |
| **Model Behavior** | GPT-6 Astra rejects all prompts “Invalid prompt” (Windows), Recap returns Chinese in English conversation | #46082, #42327 |

---

**Next Watch:** Windows 0.155.0→0.156.0 rollout (sandbox fix?), TUI `transcript_v2` graduation to stable, MCP hot-reload design, and Astra whimsy default flip.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-09-20

## 1. Today's Highlights
The project shipped nightly **v0.62.0-nightly.20260920** with critical fixes for model pinning (explicit `--model` flags no longer silently rewritten) and session resumption (now resolves to most recently active session). Two high-impact PRs landed: **AST-aware structural search** (#29396) enabling precise symbol navigation, and a **persistent file-based task tracker** (#29393) replacing the in-context `WriteToDo` tool. Meanwhile, the issue backlog shows sustained focus on subagent reliability, Auto Memory hardening, and terminal rendering performance.

## 2. Releases
**v0.62.0-nightly.20260920.gcfbcaa8df** — Automated nightly build.  
[Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.62.0-nightly.20260919.gcfbcaa8df...v0.62.0-nightly.20260920.gcfbcaa8df) (compare view only; no manual release notes published).

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent recovery after MAX_TURNS reported as GOAL success** | Subagents falsely report success when hitting turn limits, masking failures in multi-repo investigations. | 13 comments, 2 👍 — P1, needs retesting |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent hangs indefinitely** | Deferring to generalist agent causes hour-long stalls on simple ops (folder creation); workaround is disabling subagents. | 8 comments, 8 👍 — P1, high user pain |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | **Leverage model's bash affinity via Zero-Dependency OS Sandboxing** | Strategic epic to align CLI with Gemini 3's native POSIX toolchain preference without sacrificing security. | 9 comments, 1 👍 — P2, large effort |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **Assess impact of AST-aware file reads, search, and mapping** | Tracking investigation for AST tooling to reduce token noise and misaligned reads; directly relates to merged PR #29396. | 7 comments, 1 👍 — P2, customer issue |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | **Gemini does not use skills and sub-agents enough** | Model rarely invokes custom skills/subagents autonomously even when highly relevant (e.g., gradle, git skills). | 6 comments — P2, needs retesting |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | **Add deterministic redaction and reduce Auto Memory logging** | Auto Memory sends transcripts to extraction model *before* redaction; secrets may hit model context/logs. | 5 comments — P2, security area |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | **400 error with >128 tools (actually >400)** | Tool explosion breaks agent; request for smarter tool scoping. | 3 comments — P2, needs info |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | **Enhance browser_agent resilience: session takeover & lock recovery** | Browser agent fails fast on locked profiles (persistent mode); needs automatic recovery. | 4 comments — P3, customer issue |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | **browser subagent fails in Wayland** | Browser agent termination with GOAL reason on Wayland; platform-specific blocker. | 4 comments, 1 👍 — P1, agent/browser |
| [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) | **Symlinked agent files not recognized** | `~/.gemini/agents/filename.md` symlinks ignored; breaks dotfile management workflows. | 4 comments — P2, needs info |

## 4. Key PR Progress (Top 10 by Impact)

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#29396](https://github.com/google-gemini/gemini-cli/pull/29396) | **feat(agent): add AST-aware structural search tool** | Open | Implements `ast_search` tool with regex-based AST analysis for precise symbol navigation (addresses #22745). |
| [#29393](https://github.com/google-gemini/gemini-cli/pull/29393) | **feat(tracker): replace WriteToDo with persistent file-based task tracking (CRUD)** | Open | Replaces in-context `WriteToDo` with `TrackerService`-backed persistence, solving context rot & token bloat (#18836). |
| [#29420](https://github.com/google-gemini/gemini-cli/pull/29420) | **fix(core): preserve explicit Gemini 3 Pro preview model IDs** | Open | Stops silent rewrite of `--model gemini-3-pro-preview` → `gemini-3.1-pro-preview` when rollout enabled. |
| [#29294](https://github.com/google-gemini/gemini-cli/pull/29294) | **fix(cli): prevent terminal flickering from stdout contention & cursor focus** | Open | Addresses aggressive flicker during background command execution; closes #29295. |
| [#29411](https://github.com/google-gemini/gemini-cli/pull/29411) | **fix(cli): resolve resume latest to most recently active session** | Open | `--resume` now picks by last activity time, not start time; fixes stale spike resumption (#29410). |
| [#29402](https://github.com/google-gemini/gemini-cli/pull/29402) | **fix(cli): make persistent state writes failure-safe** | Open | Atomic temp-file + fsync + rename for `state.json`; prevents truncated writes from clearing persistent state. |
| [#29368](https://github.com/google-gemini/gemini-cli/pull/29368) | **fix(acp): resolve session/load by ID even without resumable content** | Open | Fixes ACP session load failure when session file exists but lacks resumable content (#29288). |
| [#29407](https://github.com/google-gemini/gemini-cli/pull/29407) | **fix(core): preserve shared references in JSON serialization** | Open | Replaces global `WeakSet` with ancestor-path tracking; fixes `[Circular]` corruption in OTel exports (#29406). |
| [#26540](https://github.com/google-gemini/gemini-cli/pull/26540) | **fix(core): resolve policy engine bugs affecting tool approvals** | **Closed** | Fixes regex null-byte bug, approval persistence in YOLO/AUTO_EDIT modes, and unnecessary prompts. |
| [#24554](https://github.com/google-gemini/gemini-cli/pull/24554) | **feat(ui): implement persistent sticky topic header** | **Closed** | Moves `TopicStickyHeader` to persistent top-of-layout position for constant context during scrolling. |

## 5. Feature Request Trends
1. **Subagent/skill autonomy** — Model should proactively invoke custom skills and subagents (#21968, #20195) rather than requiring explicit instruction.
2. **AST-aware tooling** — Strong push for structural code navigation (search, read, mapping) to reduce token waste and improve precision (#22745, #22746, #19561).
3. **Persistent, file-based task tracking** — Replace ephemeral in-context `WriteToDo` with CRUD-backed tracker (#18836, #21000, #29393).
4. **Browser agent hardening** — Session takeover, lock recovery, Wayland support, and config adherence (#22232, #21983, #22267).
5. **Auto Memory safety & quality** — Deterministic redaction, low-signal session quarantine, invalid patch surfacing (#26525, #26522, #26523).
6. **Model pinning fidelity** — Explicit `--model` flags must not be silently rewritten (#29420, #29222).
7. **Terminal rendering performance** — Flicker-free resize, high-frequency typing, background command contention (#21924, #29294).

## 6. Developer Pain Points
- **Subagent opacity** — Failures hidden by false "GOAL success" status; no subagent context in `/bug` reports (#22323, #21763).
- **Generalist agent hangs** — Complete stalls on trivial tasks, forcing users to disable subagents entirely (#21409).
- **Skill/subagent discoverability** — Model ignores available capabilities unless explicitly prompted (#21968).
- **Tool explosion errors** — 400 errors when tool count exceeds ~128/400; no automatic scoping (#24246).
- **Auto Memory trust issues** — Secrets potentially leaked to extraction model; invalid patches silently dropped (#26525, #26523).
- **Config fragility** — Symlinked agents ignored (#20079); browser agent ignores `settings.json` overrides (#22267); model pins rewritten (#29420).
- **Terminal UX degradation** — Flickering during background ops, resize lag, cursor contention (#21924, #29294).
- **Session resumption confusion** — `--resume` picked stale sessions by start time instead of activity (#29411).

---

*Generated from github.com/google-gemini/gemini-cli data as of 2026-09-20. All links point to live GitHub items.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-09-20

## 1. Today's Highlights
No new releases shipped in the last 24 hours, but the issue tracker shows active triage across platform compatibility, MCP integration, and session stability. High-impact regressions on Alpine Linux (segfaults), Windows/mintty (TUI lag), and WSL2 (mid-turn terminal wedges) remain top community concerns. Several MCP-related issues—Figma server discovery failures and credential staleness in the desktop app—signal growing friction as MCP adoption deepens.

## 2. Releases
*No new releases in the last 24 hours.*

## 3. Hot Issues (10 Noteworthy)

| Issue | Status | Why It Matters | Community Reaction |
|-------|--------|----------------|-------------------|
| [#107](https://github.com/github/copilot-cli/issues/107) Tool calls cause Segmentation Fault on Alpine Linux | **CLOSED** | Blocks CLI use in minimal containers; root cause likely musl libc / Rust TLS interaction. | 16 comments, 4 👍 — fix merged but workaround docs requested. |
| [#3439](https://github.com/github/copilot-cli/issues/3439) 1.0.49 regression: TUI rendering lag inside tmux on mintty/Cygwin | **CLOSED** | Windows developers on Cygwin/mintty hit severe UI freezes; bisected to 1.0.49. | 9 comments — regression acknowledged, fix backported. |
| [#4765](https://github.com/github/copilot-cli/issues/4765) CLI fails to read config from working directory which isn't a repo root | **CLOSED** | Breaks multi-repo workspaces; `.mcp.json` and hooks ignored outside git root. | 8 comments — config discovery logic expanded to cwd. |
| [#4069](https://github.com/github/copilot-cli/issues/4069) TUI wedges mid-turn (EIO/EPIPE) on WSL2 + Windows Terminal | **CLOSED** | Session becomes unresponsive; Ctrl+C ignored; crash dumps pollute cwd. | 8 comments, 9 👍 — transport hardening + dump relocation landed. |
| [#4870](https://github.com/github/copilot-cli/issues/4870) Figma MCP server fails to load — `-32601` on `server/discover` treated as fatal | **OPEN** | Figma’s hosted MCP works in VS Code but CLI marks it fatally failed; blocks design→code workflows. | 7 comments, 11 👍 — needs spec-compliant error handling. |
| [#4699](https://github.com/github/copilot-cli/issues/4699) OOM crash on long `--resume` sessions; crash dumps written to cwd | **OPEN** | 4 GiB V8 cap hit in ~14h sessions; diagnostic reports litter project directories. | 5 comments, 6 👍 — heap limit tuning + dump path config requested. |
| [#2543](https://github.com/github/copilot-cli/issues/2543) Concurrent sub-agent events corrupt session state — permanent "tool_use ids without tool_result" | **CLOSED** | Sub-agent parallelism breaks message ordering; all subsequent turns fail. | 5 comments, 2 👍 — event serialization fix merged. |
| [#1381](https://github.com/github/copilot-cli/issues/1381) "Rewind not available because you're not in a git repository" | **CLOSED** | Non-git VCS (e.g., jj) users lose essential rewind; VS Code Copilot supports it. | 5 comments, 11 👍 — VCS-agnostic snapshot backend added. |
| [#2892](https://github.com/github/copilot-cli/issues/2892) MCP stdio transport for sub-agents closes after ~4 seconds | **CLOSED** | Sub-agents lose MCP access mid-task; tool calls fail silently. | 4 comments — keep-alive / lifecycle sync fixed. |
| [#4905](https://github.com/github/copilot-cli/issues/4905) Desktop app: sessions die minutes after spawn — GitHub credential registration stale | **OPEN** | Bundled CLI in desktop app loses auth; `github-mcp-server` catalog goes fatal. | 4 comments, 2 👍 — token refresh loop needs hardening. |

## 4. Key PR Progress
*No pull requests updated in the last 24 hours.*

## 5. Feature Request Trends
1. **MCP Robustness** — Graceful handling of non-fatal discovery errors (`-32601`), credential rotation, and stdio transport lifecycle for sub-agents.
2. **Context Window Control** — Configurable `contextTier`/`long_context` flag for models supporting 1M tokens (Claude Opus 4.6); auto-compaction loop avoidance with large instruction files.
3. **VCS-Agnostic Session Features** — Rewind, checkpoint, and snapshot restore without requiring git.
4. **Non-Interactive Parity** — Reliable `contextTier` application, scheduled-prompt bell suppression, and MCP tool-call completion without idle timeouts.
5. **Hook Composition** — Merge `additionalContext` from multiple `sessionStart`/`subagentStart` hooks instead of last-wins.

## 6. Developer Pain Points
| Area | Recurring Frustration |
|------|----------------------|
| **Platform Compatibility** | Alpine/musl segfaults, Windows/mintty TUI lag, WSL2 terminal wedges, Ghostty/tmux viewport shifts, WSL clipboard BOM injection. |
| **Session Reliability** | OOM on long resumes, sub-agent state corruption, `cwd`/`branch` persistence loss in `session-store.db`, credential staleness in desktop app. |
| **MCP Integration** | Fatal treatment of spec-permitted errors, stdio transport premature closure, periodic reconnect spam in history, Figma server incompatibility. |
| **Context & Memory** | Hard 200K cap on 1M-capable models, auto-compaction loops from large instructions, hook context merging loss. |
| **UX Polish** | Non-gray hint text in WSL, `Ctrl+G` editor launch failure on Windows, bell on scheduled prompts, copy-on-select footer stale. |

---  
*Data sourced from github.com/github/copilot-cli issue tracker (last 24h). All links point to live GitHub items.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-09-20

---

## 1. Today's Highlights

No new releases shipped today. The maintainers closed **15 stale issues** spanning Windows encoding crashes, MCP HTTPS header requirements, shell-mode UX improvements, and web UI bugs — signaling a cleanup sprint ahead of the next release cycle. Five PRs were updated yesterday, focusing on Windows binary metadata, shell timeout heuristics, non-UTF-8 output tolerance, and MCP stderr routing.

---

## 2. Releases

**None** in the last 24 hours.

---

## 3. Hot Issues (10 Noteworthy)

| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#773](https://github.com/MoonshotAI/kimi-cli/issues/773) | **Windows: ASCII codec crash on any input** | Blocked all Windows users on v1.3; root cause is lack of defensive encoding handling in the CLI entry point. | 8 comments, 👍1 — high visibility for a platform-blocking bug. |
| [#1332](https://github.com/MoonshotAI/kimi-cli/issues/1332) | **Ubuntu 22.04 crash after upgrade to v1.17.0** | Regression on Linux; likely linked to dependency or native module mismatch. | 3 comments — reproduction details provided. |
| [#1429](https://github.com/MoonshotAI/kimi-cli/issues/1429) | **Windows concurrent write → Permission denied (Errno 13)** | Concurrency bug in file I/O; affects multi-agent / parallel task workflows. | 2 comments — core reliability issue. |
| [#1321](https://github.com/MoonshotAI/kimi-cli/issues/1321) | **System kernel variable pollutes env → total CLI failure** | Missing defensive sanitization of environment variables crashes the entire process. | 👍1, 2 comments — highlights fragility of env parsing. |
| [#1289](https://github.com/MoonshotAI/kimi-cli/issues/1289) | **Illegal HTTP header from trailing space in `uname().version`** | Platform fingerprinting code emits malformed headers; breaks MCP / proxy integrations. | 2 comments — subtle but cross-platform. |
| [#1487](https://github.com/MoonshotAI/kimi-cli/issues/1487) | **HTTPS MCP requires default User-Agent header** | MCP HTTP client non-compliant; some servers reject requests. | 2 comments — standards compliance gap. |
| [#1436](https://github.com/MoonshotAI/kimi-cli/issues/1436) | **Git Bash on Windows fails to start `kimi`** | Shell-compatibility hole; affects developers using Git Bash as primary terminal. | 2 comments — Windows tooling gap. |
| [#1340](https://github.com/MoonshotAI/kimi-cli/issues/1340) | **Web UI code-block copy button broken** | Degrades web-interface UX; reported on Linux + Android Termux. | 2 comments — frontend regression. |
| [#1414](https://github.com/MoonshotAI/kimi-cli/issues/1414) | **Add “switch to yolo mode” button in permission prompt** | High-demand UX shortcut; 👍3 shows strong community desire for frictionless auto-approve. | 1 comment, 👍3 — top enhancement signal. |
| [#729](https://github.com/MoonshotAI/kimi-cli/issues/729) | **Add “skip” option when model requests command execution** | Allows uninterrupted automated workflows; currently blocks on every command confirmation. | 3 comments — workflow automation pain point. |

---

## 4. Key PR Progress (5 Updated)

| # | Title | Status | Impact |
|---|-------|--------|--------|
| [#2183](https://github.com/MoonshotAI/kimi-cli/pull/2183) | **fix(shell): attach dropped image paths eagerly** | OPEN | Pre-loads local images into `ImageURLPart` at prompt time instead of deferring to `ReadMediaFile`; reduces latency & avoids race conditions for vision models. |
| [#2350](https://github.com/MoonshotAI/kimi-cli/pull/2350) | **fix: tolerate non-UTF-8 worker output** | OPEN | Replaces strict UTF-8 decode with `errors="replace"` for stdout/stderr on Windows (cp1252, etc.); surfaces real worker errors instead of masking them with `UnicodeDecodeError`. Fixes #2313. |
| [#2181](https://github.com/MoonshotAI/kimi-cli/pull/2181) | **fix: add Windows binary version info** | CLOSED | Embeds `FileVersionInfo` (from `pyproject.toml`) into PyInstaller builds; enables `kimi --version` and Explorer metadata on Windows. CI gate added. Fixes #2178. |
| [#2200](https://github.com/MoonshotAI/kimi-cli/pull/2200) | **fix(shell): adapt timeouts for long commands** | CLOSED | Auto-extends 60s default for `git clone`, package installs, builds, etc.; preserves explicit caller timeouts. Reduces false “command timed out” failures. |
| [#2259](https://github.com/MoonshotAI/kimi-cli/pull/2259) | **fix: redirect stdio MCP stderr to logs** | CLOSED | Routes stdio MCP server stderr to `~/.kimi/logs/mcp/<server>.log` instead of polluting the interactive terminal; adds regression test for sanitized log paths. |

---

## 5. Feature Request Trends

1. **Shell-mode persistence & ergonomics** — pseudo-`cd` (#766), configurable command display length (#1492), skip/auto-approve flows (#729, #1414).  
2. **Multi-task / concurrency support** — users ask for parallel conversations (#1482) and non-blocking command execution.  
3. **Windows-first reliability** — encoding, path handling, Git Bash, binary metadata, concurrent I/O.  
4. **MCP hardening** — HTTPS headers (#1487), stderr isolation (#2259), stdio transport robustness.  
5. **Web UI polish** — copy button (#1340), 404 on root route (#1452), prompt/directory display regression (#1475).

---

## 6. Developer Pain Points (Recurring)

| Area | Frequency | Representative Issues |
|------|-----------|------------------------|
| **Windows encoding / filesystem** | 4 | #773, #1429, #1436, #1321 |
| **Shell-mode UX friction** | 4 | #729, #766, #1414, #1492 |
| **MCP / HTTP transport bugs** | 2 | #1487, #2259 (PR) |
| **Web UI regressions** | 2 | #1340, #1452 |
| **Environment / kernel leakage** | 2 | #1321, #1289 |
| **Multi-task / concurrency limits** | 1 | #1482 |

**Takeaway:** The backlog shows a clear pivot toward **Windows parity**, **shell-mode automation**, and **MCP production hardening** — all prerequisites for a stable 1.x LTS branch.

---

*Generated from GitHub data as of 2026-09-20. Links point to live issues/PRs on `MoonshotAI/kimi-cli`.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-09-20

## Today's Highlights
No new releases in the last 24 hours. The issue tracker shows a surge of **free-tier usage limit errors** (#49755, #50079, #50081, #50093, #50096) affecting multiple users today, suggesting a possible quota/accounting regression. Meanwhile, the team closed 18 older issues (many from July) covering Windows compatibility, TUI polish, PWA safe-area fixes, and subagent stability. On the PR side, work continues on session management (`move` command, selector v2), non-interactive CLI hardening, and provider credential handling.

## Releases
**None** in the last 24 hours.

## Hot Issues (10 noteworthy)

| # | Title | State | Why it matters | Community signal |
|---|-------|-------|----------------|------------------|
| [#35432](https://github.com/anomalyco/opencode/issues/35432) | Config `tool_call: false` does not disable tools | **OPEN** | Core config flag ignored; tools sent to models that don’t support them (e.g., morphllm). Blocks users on non-tool-calling models. | 5 comments, open since Jul |
| [#49755](https://github.com/anomalyco/opencode/issues/49755) | Console fails to load workspace budget; “Free usage exceeded” erroneously | **OPEN** | Budget UI broken + false free-tier exhaustion. Affects paid users. | 3 comments, 2 👍, updated today |
| [#50093](https://github.com/anomalyco/opencode/issues/50093) | Free usage exceeded; retry timers escalate across free models | **OPEN** | Retry backoff grows (6h → longer) even when switching models. Suggests shared quota bug. | 2 comments, 2 👍, filed today |
| [#50081](https://github.com/anomalyco/opencode/issues/50081) | “Free tier only usable from within OpenCode” error with Custom Agents | **OPEN** | Custom agent configs incorrectly flagged as external use. Blocks agent workflows. | 2 comments, filed today |
| [#49893](https://github.com/anomalyco/opencode/issues/49893) | Stripe setup fails when reauthorizing Alipay for Go renewal | **OPEN** | Billing flow broken for Alipay users; subscription renewal at risk. | 4 comments, filed yesterday |
| [#49486](https://github.com/anomalyco/opencode/issues/49486) | LaTeX math formulas ($…$, $$…$$) rendered as raw text in CLI/TUI | **OPEN** | Math-heavy workflows (research, docs) unreadable in terminal. | 3 comments, open since Sep 17 |
| [#20699](https://github.com/anomalyco/opencode/issues/20699) | Agent sends duplicate message (hidden + visible) | **CLOSED** | Long-standing UX bug; agent echoed greeting internally. Fixed after 5 months. | 7 comments, 1 👍 |
| [#34652](https://github.com/anomalyco/opencode/issues/34652) | Tool calls fail with SchemaError on nested array args from Anthropic | **CLOSED** | Native Anthropic provider stringifies arrays → schema validation crash. Critical for tool-heavy flows. | 6 comments |
| [#35499](https://github.com/anomalyco/opencode/issues/35499) | `MaxListenersExceededWarning` with `opencode web --mdns` | **CLOSED** | Event listener leak in mDNS mode; potential memory/performance issue. | 4 comments, 2 👍 |
| [#47918](https://github.com/anomalyco/opencode/issues/47918) | Expose per-session automatic approval (Yolo) via ACP `configOptions` | **OPEN** | Feature request: allow programmatic control of auto-approval per session. | 3 comments, feature |

## Key PR Progress (10 important)

| # | Title | State | Impact |
|---|-------|-------|--------|
| [#49560](https://github.com/anomalyco/opencode/pull/49560) | `fix(tui): allow custom destination path in move session` | **OPEN** | Unblocks `/move` to arbitrary paths; closes 4 issues (#49212, #40200, #43938, #35306). |
| [#50068](https://github.com/anomalyco/opencode/pull/50068) | `fix(cli): harden noninteractive runs` | **OPEN** | Makes `opencode run

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-09-20

## 1. Today's Highlights

Pi **v0.86.0** ships with **prompt cache warming**—a cost-aware mechanism to keep Anthropic prompt caches alive during long tool runs and optional idle periods. The release also resolves a wave of compaction/cancellation regressions (#9340, #9777, #9783) and adds Meta's Muse provider via OAuth. Meanwhile, the TUI's streaming path remains a hotspot: uncached `Intl.Segmenter` and per-chunk Markdown rebuilds still pin a full core (#6665, 13 comments, 6 👍).

## 2. Releases

### v0.86.0 — 2026-09-20
| Change | Impact |
|--------|--------|
| **Prompt cache warming** | Keeps valuable Anthropic prompt caches warm during long tool runs and optionally while idle via cost-aware refreshes. [Docs](https://github.com/earendil-works/pi/blob/v0.86.0/packages/coding-agent/docs/settings.md#cache-warming) |
| **Compaction/cancellation fixes** | Stops auto-compaction from starting after `abort()` (#9340), exposes cancellable auth wait (#9777), closes cancellation gaps (#9783) |
| **Meta Muse provider** | OAuth-based provider for Meta's Muse Spark (PR #9096) |
| **Bug reporting** | Improved error telemetry |

[Release Notes](https://github.com/earendil-works/pi/releases/tag/v0.86.0)

## 3. Hot Issues

| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#5653](https://github.com/earendil-works/pi/issues/5653) | **Move off Shrinkwrap** | Duplicate `pi-ai` copies break the module-level provider registry; blocks clean monorepo installs. | 20 comments, `inprogress`, `to-discuss` |
| [#6665](https://github.com/earendil-works/pi/issues/6665) | **TUI pins a full core while streaming** | Uncached `Intl.Segmenter` + per-chunk Markdown rebuild → 100% CPU on one core during streaming. | 13 comments, 6 👍, `inprogress` |
| [#7739](https://github.com/earendil-works/pi/issues/7739) | **Startup-time budget targeting jcode latency** | Formal budget to close the gap vs. jcode (median PTY launch: jcode ~40ms vs Pi ~120ms). | 9 comments, open |
| [#9051](https://github.com/earendil-works/pi/issues/9051) | **session_compact misses immediate overflow retry** | Custom compaction message queued until retry ends, so the retry runs without restored context. | 5 comments, open |
| [#9391](https://github.com/earendil-works/pi/issues/9391) | **Stale thinking blocks replayed after compaction** | Anthropic drops 15 thinking blocks every request with `prefix_binding_mismatch` post-compaction. | 6 comments, 1 👍, closed |
| [#9169](https://github.com/earendil-works/pi/issues/9169) | **Images broken in fullscreen TUI (Windows/WezTerm)** | Regression in fullscreen mode only; regular TUI works. | 5 comments, 1 👍, closed |
| [#7543](https://github.com/earendil-works/pi/issues/7543) | **Meta Model API** | Request to add Meta's Muse Spark via standard `/login` flow. | 4 comments, 5 👍, closed (PR #9096 merged) |
| [#9777](https://github.com/earendil-works/pi/issues/9777) | **Auto-compaction auth wait lacks progress/cancel** | Compaction stalls on auth with no indicator; `abortCompaction()` no-op until auth resolves. | 4 comments, closed (PR #9779) |
| [#9783](https://github.com/earendil-works/pi/issues/9783) | **Cancellation gaps after de2de549b** | Escape during compaction calls `abortCompaction()` not `session.abort()`, leaving recovery gaps. | 3 comments, closed |
| [#2616](https://github.com/earendil-works/pi/issues/2616) | **SessionManager sync-only I/O** | Blocking `appendFileSync`/`readFileSync` propagates through `AgentSession`, blocking async persistence. | 7 comments, closed |

## 4. Key PR Progress

| # | Title | Type | Status | Summary |
|---|-------|------|--------|---------|
| [#9668](https://github.com/earendil-works/pi/pull/9668) | feat(coding-agent): add prompt cache warming | Feature | **Closed** | Experimental cache warming for Anthropic; cost-aware refresh during long runs/idle. Ships in v0.86.0. |
| [#9096](https://github.com/earendil-works/pi/pull/9096) | feat(ai,coding-agent): add Meta provider with Muse OAuth | Feature | **Open** | New provider for Meta Muse Spark; unusual daily token re-minting, burst-style streaming. Resolves #7543. |
| [#9781](https://github.com/earendil-works/pi/pull/9781) | fix(coding-agent): stop recovery after prompt cancellation | Fix | **Closed** | Prevents `_handlePostAgentRun()` from starting retry/compaction after `abort()`. Fixes #9340. |
| [#9779](https://github.com/earendil-works/pi/pull/9779) | fix(coding-agent): expose cancellable auto-compaction auth | Fix | **Closed** | Adds progress indicator & active cancellation controller during auth wait. Fixes #9777. |
| [#9120](https://github.com/earendil-works/pi/pull/9120) | fix(tui): rank skill autocomplete by bare name | Fix | **Closed** | Strips `skill:` prefix for fuzzy matching so `/idea` prefers `skill:research-idea` over `skill:deep-research`. Fixes #8813. |
| [#9772](https://github.com/earendil-works/pi/pull/9772) | fix(tui): stop scrollback clear/replay & ConPTY autowrap drift | Fix | **Closed** | Disables autowrap during main-screen renders; fixes ConPTY eager line-wrap drift (#9583). |
| [#9746](https://github.com/earendil-works/pi/pull/9746) | fix(tui): handle CJK punctuation in file autocomplete | Fix | **Closed** | Treats CJK punctuation as word boundary for path completion (e.g., `我们需要实现新功能，docs<tab>`). |
| [#9570](https://github.com/earendil-works/pi/pull/9570) | fix(ai): map TOO_MANY_TOOL_CALLS to error stop reason | Fix | **Open** | Handles new Gemini `FinishReason.TOO_MANY_TOOL_CALLS` (added in `@google/genai@2.21.0`). |
| [#9776](https://github.com/earendil-works/pi/pull/9776) | Per thinking sampling parameters | Feature | **Open** | Adds `samplingParamsByThinkingLevel` to override sampling per thinking mode (e.g., different temps for thinking vs. final). |
| [#9434](https://github.com/earendil-works/pi/pull/9434) | feat(coding-agent): extensions append to session system prompt | Feature | **Closed** | `session_start` handlers can return `systemPromptAppend`; collected in order with metadata & error isolation. |

## 5. Feature Request Trends

1. **Provider ecosystem expansion** — Meta Muse (#7543), OpenCode Zen compatibility (#9690), Qwen token-plan models (#9771).
2. **Compaction control & observability** — Context-budget setting independent of model window (#9486), `before_provider_request` hook for compaction (#9773), QR code for device login (#9774).
3. **TUI rendering performance** — Core-pinning streaming (#6665), CJK punctuation boundaries (#9746), Orca terminal Kitty support (#9329), hardware cursor on blur (#5268).
4. **Extension/SDK ergonomics** — Session system prompt append (#9434), manifest glob/exclusion support (docs vs reality #9788), SDK undici dispatcher conflict (#9787).
5. **Thinking/reasoning UX** — Per-thinking-level sampling (#9776), hidden thinking blank-line artifacts (#9765), stale thinking block cleanup (#9391).

## 6. Developer Pain Points

| Area | Recurring Frustrations |
|------|------------------------|
| **Install/dependency** | Shrinkwrap duplication breaks provider registry (#5653); 0.84.3 bundled CLI fails to load extensions (#8620); SDK pulls nested `undici` as global dispatcher (#9787). |
| **TUI performance** | Streaming pins a core (#6665); fullscreen image regression on Windows/WezTerm (#9169); ConPTY autowrap drift (#9583); CJK autocomplete boundaries (#9746). |
| **Compaction reliability** | Stale thinking blocks replayed post-compaction (#9391); custom compact message misses overflow retry (#9051); auth wait uncancelable (#9777); cancellation gaps (#9783, #9340). |
| **Session persistence** | `SessionManager` sync-only I/O blocks async backends (#2616); `create()` reports persisted but writes nothing until first assistant message (#9792). |
| **Tooling gaps** | `find`/`grep` lack timeout & return empty success on kill (#9770); `bash` timeout unit confusion (sec vs ms) with no sane max (#9785); `parseChunkUsage` drops unknown provider fields (#9757). |
| **Documentation drift** | `docs/packages.md` claims glob/`!exclusion` support but loader resolves literal paths only (#9788). |

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-09-20

## 1. Today's Highlights
Qwen Code shipped **v0.24.1** across CLI, Desktop, and TypeScript SDK, introducing a breaking change that removes the `active_goal` stream event. The release focuses on stability: CI infrastructure fixes, MCP image bounding, and transcript export budget increases. Parallel work advances multi-session governance, workflow replay from history, and browser-use concurrency — signaling a shift toward production-grade orchestration.

## 2. Releases

| Version | Component | Key Changes |
|---------|-----------|-------------|
| **v0.24.1** | CLI | **Breaking:** `refactor(goal)!` stops emitting `active_goal` stream event ([#12181](https://github.com/QwenLM/qwen-code/pull/12181)). Nightly build `v0.24.1-nightly.20260919.c1c00cbaab` includes CI cache reclamation and simplifications. |
| **v0.24.1** | Desktop | Fixes ACP permission queue scoping to session ([#11802](https://github.com/QwenLM/qwen-code/pull/11802)); adds shared output modes for channels. |
| **v0.1.13** | TypeScript SDK | Bundles CLI **v0.24.1** (built from same source branch). |

## 3. Hot Issues (Top 10)

| Issue | Type | Why It Matters | Community Signal |
|-------|------|----------------|------------------|
| [#12287](https://github.com/QwenLM/qwen-code/issues/12287) | Bug (P2) | Hardens workflow **retry-from-history** after PR #12190 ballooned to 1,900+ lines across 6 autofix rounds — touches runner resume, checkpoint schema, daemon boundaries. | 4 comments, split from feature PR for focused review. |
| [#12303](https://github.com/QwenLM/qwen-code/issues/12303) | Feature (P2) | Designs **cross-session gate** for a host managing multiple sessions: settling, capping, naming. Blocked on host-level policy (no host exists today). | 3 comments, `need-discussion`, `roadmap/multi-agent`. |
| [#11617](https://github.com/QwenLM/qwen-code/issues/11617) | Bug | Deferred review findings from **Playwright-based Browser SDK** (#11241) — fixes outside original PR scope. | Auto-tracked, 3 comments, cc @tanzhenxin. |
| [#11609](https://github.com/QwenLM/qwen-code/issues/11609) | Feature | **Concurrent sessions sharing one Chrome profile** — follows #11242 (profile contention fix). Enables true multi-tab automation. | 3 comments, closed (likely superseded by #12300). |
| [#12290](https://github.com/QwenLM/qwen-code/issues/12290) | Bug (P2) | MCP `boundInlineImageParts` trusts **server-declared MIME** over actual bytes — unbounded label space risks mis-handling. | 3 comments, core security/stability. |
| [#12293](https://github.com/QwenLM/qwen-code/issues/12293) | Feature | **Trajectory view** in Web Shell: read-only timeline of model requests, tool calls, tokens, latency, raw args/results. | 2 comments, `status/needs-triage`, observability ask. |
| [#12289](https://github.com/QwenLM/qwen-code/issues/12289) | Bug | Main CI `Lint & Static` failed on `main` (install deps step) — auto-tracked per commit. | Closed, `autofix/approved`. |
| [#12288](https://github.com/QwenLM/qwen-code/issues/12288) | Bug | Main CI `Test` failed on `main` (install deps) — same pattern. | Closed, `autofix/approved`. |
| [#12295](https://github.com/QwenLM/qwen-code/issues/12295) | Bug | Another `Test` install-deps failure on `main`. | Closed, `autofix/approved`. |
| [#11954](https://github.com/QwenLM/qwen-code/issues/11954) | Chore | **Fleet Shepherd Dashboard** — auto-maintained bot fleet health (scans, syncs, releases). | 0 comments, infra visibility. |

## 4. Key PR Progress (Top 10)

| PR | Status | Summary | Impact |
|----|--------|---------|--------|
| [#12291](https://github.com/QwenLM/qwen-code/pull/12291) | Open | **Retry/rerun workflows from persisted history** — replaces #12190; carries all autofix findings into #12287. | Core orchestration resilience. |
| [#12304](https://github.com/QwenLM/qwen-code/pull/12304) | Open | **ACP bridge: surface request/tool timing on paged transcript replay** — emits `ui_telemetry` frames (latency, TTFT). | Debugging & observability. |
| [#12292](https://github.com/QwenLM/qwen-code/pull/12292) | Open | **Cross-session gate judges per-target-session settings** — approval/denial now session-scoped, not process-global. | Multi-tenant session safety. |
| [#12302](https://github.com/QwenLM/qwen-code/pull/12302) | Open | **Managed Session Record v1 foundation** — header, event, commit-marker types; strict parsers; validation; reserved subtypes. | Structured session persistence. |
| [#12269](https://github.com/QwenLM/qwen-code/pull/12269) | Open | **Route runtime tools through `bwrap`** — per-tool confinement (Shell, Monitor, Write, Edit) with immutable workspace policy. | Sandbox security hardening. |
| [#12183](https://github.com/QwenLM/qwen-code/pull/12183) | Open | **Load deployment-managed extensions from directory** — `--managed-extensions <root>` discovers child dirs as extensions. | Enterprise/ops deployment model. |
| [#12305](https://github.com/QwenLM/qwen-code/pull/12305) | Open | **Fix Web Shell export: exclude Live Voice strings** — keeps HTML renderer under byte budget, unblocks CI. | Release stability. |
| [#12298](https://github.com/QwenLM/qwen-code/pull/12298) | Closed | **Raise export renderer budget** (1.87M→1.97M / 1.93M→2.03M MB) — re-anchors measurement. | Transcript growth headroom. |
| [#12300](https://github.com/QwenLM/qwen-code/pull/12300) | Open | **Browser-use: accept set of Chrome extension IDs** — NM registration lists all origins; hello from any accepted. | Concurrent session support. |
| [#10835](https://github.com/QwenLM/qwen-code/pull/10835) | Open | **Bound oversized MCP tool images** — resizes JPEG/PNG/WebP to view budget; preserves format/alpha if within limit. | MCP reliability. |

## 5. Feature Request Trends
From the issue/PR landscape, three clear directions emerge:

1. **Multi-session / multi-agent orchestration** — Cross-session gates (#12292, #12303), managed session records (#12302), fleet dashboard (#11954), and concurrent browser sessions (#11609, #12300) point to a host managing many isolated, policy-governed sessions.

2. **Workflow durability & replay** — Retry-from-history (#12291, #12287), trajectory view (#12293), and transcript timing (#12304) treat sessions as inspectable, restartable artifacts — not ephemeral chats.

3. **Deployment-grade extension & sandbox model** — Managed extensions directory (#12183), bwrap confinement (#12269), and MCP hardening (#12290, #10835) signal a move toward air-gapped, policy-controlled runtimes for enterprise.

## 6. Developer Pain Points
Recurring friction surfaced in the last 24h:

| Pain Point | Evidence |
|------------|----------|
| **CI flakiness on `main`** | 4 auto-filed CI failure issues (#12288, #12289, #12295, #12296) — all `install dependencies` step failures; `autofix/approved` suggests known remediation but recurring. |
| **Transcript/export bloat** | PR #12298 raises budget; #12305 strips Live Voice strings to pass build — growing session artifacts stress tooling. |
| **MCP trust boundaries** | #12290: server-declared MIME trusted over bytes; #10835: oversized images unbounded — both indicate need for **zero-trust tool result handling**. |
| **OpenTUI viewport bugs** | #11658 (expanded confirmations overflow), #9305 (bottom-align short content) — TUI parity still settling. |
| **Startup fragility** | #10455: crash on unwritable config file; #11001: PTY cleanup races — edge cases in host environments (CI, containers, restricted homes). |

---

*Generated from GitHub data for QwenLM/qwen-code on 2026-09-20. All links point to live issues/PRs.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-09-20

## 1. Today's Highlights
The v0.10.0 redesign is actively underway with multiple planning issues tracking architectural decisions (ACP integration, Fleet vs Agent profiles, Runtime client conversion). A critical branch-persistence bug (`/branch` discarding abandoned branches on save) was identified and fixed in `ffca963f9`. The TUI layer received significant safety and UX hardening: visual-row cursor navigation, painted-column transcript copying, and stack-overflow fixes in the test suite.

## 2. Releases
No new releases published in the last 24 hours. v0.10.0 remains in development per #6094.

## 3. Hot Issues (10 Noteworthy)

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| [#6310](https://github.com/Hmbown/Codewhale/issues/6310) ACP follow-up: empty terminal responses & Full Access discovery | Core ACP protocol integration; nightly verified in Paseo with socket creation and zero unwanted approval round-trips | 8 comments, active verification |
| [#6094](https://github.com/Hmbown/Codewhale/issues/6094) v0.10.0 — redesign, release checks, how to help | Master tracking issue for the major redesign superseding unpublished 0.9.14 | 6 comments, 1👍, founder-owned |
| [#6367](https://github.com/Hmbown/Codewhale/issues/6367) **CLOSED** bug(`/branch`): branch structure discarded by save path | `/branch` worked visibly but snapshot-rebuild path silently dropped abandoned branches & entry IDs; fixed in `ffca963f9` | 5 comments, rapid fix |
| [#5848](https://github.com/Hmbown/Codewhale/issues/5848) Ollama live catalog: qualify installed release after #6002 | Acceptance testing for local Ollama server integration; extraction already landed | 4 comments, v0.10.0 gate |
| [#6038](https://github.com/Hmbown/Codewhale/issues/6038) **CLOSED** Decision: keep both Fleet and Agent profiles | Foundational architectural decision — confusion was naming/duplicated fields, not the model itself | 3 comments, ratified |
| [#6139](https://github.com/Hmbown/Codewhale/issues/6139) App-server: finish Runtime client conversion & acceptance | HTTP/proxy path now connects to real Runtime; `/tool` path still owns local Runtime — conversion in progress | 3 comments, v0.10.0 blocker |
| [#6362](https://github.com/Hmbown/Codewhale/issues/6362) bug(tests): `configured_model_api_tests` overflow test thread stack | Stack overflows abort entire lib test binary (`cargo test -p codewhale-tui --lib`); blocks workspace gate | 1 comment, CI-blocking |
| [#5847](https://github.com/Hmbown/Codewhale/issues/5847) Replace XOR thinking-collapse logic with intent-based expand/collapse | Triple-XOR in `history.rs:435` inverts intent (verbose ON + default-expanded ON → collapsed); UX regression | 1 comment, UX-critical |
| [#5838](https://github.com/Hmbown/Codewhale/issues/5838) **CLOSED** epic(ide): Codewhale Studio — VS Code fork as canonical desktop | Stage 3 of IDE program: VS Code fork replaces thin Tauri shell; program anchor for downstream slices | 1 comment, strategic |
| [#6236](https://github.com/Hmbown/Codewhale/issues/6236) **CLOSED** bug(exec): `request_user_input` waits forever in headless run | Headless `codewhale exec` blocks indefinitely with no responder and no diagnostic output | 2 comments, reliability |

## 4. Key PR Progress (10 Important)

| PR | Type | Summary |
|----|------|---------|
| [#6369](https://github.com/Hmbown/Codewhale/pull/6369) | Fix | Synchronize engine after foreign session import (`/resume <file>` / inline JSON) — engine was staying on previous session's history |
| [#6365](https://github.com/Hmbown/Codewhale/pull/6365) | Fix | Painted-column transcript copy, composer tabs, ink test setup — supersedes tab-stop model with ratatui-verified painted columns |
| [#6363](https://github.com/Hmbown/Codewhale/pull/6363) | Fix | 6 focused commits: visual-row cursor stepping, history detach, explicit ink, headless input withhold — each with regression tests |
| [#6333](https://github.com/Hmbown/Codewhale/pull/6333) | Hardening | Safety sweep: SAFETY contracts for all `unsafe`, `tokio::fs` for async I/O, bounded recursion/read budgets |
| [#6345](https://github.com/Hmbown/Codewhale/pull/6345) | Deps | `jsonschema` 0.52.1 → 0.56.0 (Python release, JSON Schema 2020-12 support) |
| [#6343](https://github.com/Hmbown/Codewhale/pull/6343) | Deps | `clap` 4.6.6 → 4.6.7 (new features, bug fixes) |
| [#6342](https://github.com/Hmbown/Codewhale/pull/6342) | Deps | `clap_complete` 4.6.9 → 4.6.11 |
| [#6339](https://github.com/Hmbown/Codewhale/pull/6339) | Deps | `rust-i18n-support` 4.2.1 → 4.2.2 |
| [#6357](https://github.com/Hmbown/Codewhale/pull/6357) | Deps | `autoprefixer` 10.5.4 → 10.6.1 in `/web` (grid gap fix) |
| [#6355](https://github.com/Hmbown/Codewhale/pull/6355) | Deps | `@types/node` 26.4.0 → 26.6.1 in `/web` |

## 5. Feature Request Trends
1. **ACP Protocol Maturity** — Full Access discovery, empty response handling, socket lifecycle (#6310)
2. **IDE Unification** — VS Code fork (Codewhale Studio) as canonical desktop, replacing Tauri shell (#5838)
3. **Cloud Substrate Shift** — Lambda microVM Computer image with embedded `app-server` + `openvscode-server` sidecar (#5837)
4. **Session/Branch Fidelity** — Persistent branch structures, abandoned entry survival, foreign session import sync (#6367, #6369)
5. **Observability Gaps** — Compaction metrics missing producers, dual readers with no writers (#6368)
6. **Ollama First-Class Support** — Live catalog qualification, installed-release acceptance (#5848)

## 6. Developer Pain Points
- **Headless Execution Reliability**: `request_user_input` blocks indefinitely without responder or diagnostics (#6236)
- **TUI Copy/Paste Regression**: Since #6156, partial selections copy entire cells instead of fragments (#6228)
- **Theme Accessibility**: Black-on-black text in multiple themes (gruvbox-dark, underwater) on macOS (#6234)
- **Prompt Input UX**: Key-Up deletes entire multi-line prompt instead of moving cursor up (#6291)
- **Test Suite Stability**: Stack overflows in `configured_model_api_tests` abort entire lib test run, blocking CI (#6362)
- **Legacy Code Paths**: `LiveDaytonaLauncher` still wired in cloud dispatch despite product direction change (#5836)
- **Collapsing Logic Bugs**: Triple-XOR inverts expand/collapse intent across verbose/fold/default-expanded states (#5847)

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*