# AI CLI Tools Community Digest 2026-09-24

> Generated: 2026-09-24 04:23 UTC | Tools covered: 10

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

# Cross-Tool Comparison Report: AI CLI Tools Ecosystem (2026-09-24)

---

## 1. Ecosystem Overview

The AI CLI tools landscape shows **9 of 10 major tools actively shipping or iterating**, with only Grok Build silent. The market splits into **vendor-first** (Claude Code, Codex, Gemini CLI, Copilot CLI, Grok Build) and **community/independent** (Kimi, OpenCode, Pi, Qwen Code, DeepSeek TUI) categories. All active tools are converging on **agent reliability, sandbox/permission granularity, session durability, and model/provider flexibility** as table-stakes capabilities. Release cadences range from rapid alpha streams (Codex: 6 in 24h) to stable monthly promotions (Gemini v0.61.0). Critical production blockers—usage-limit sync (Claude), Windows sandbox (Codex), temp-file leaks (OpenCode)—indicate the ecosystem is still hardening for daily-driver reliability.

---

## 2. Activity Comparison

| Tool | Hot Issues (Top 10) | Key PRs (Top 10) | Release Status (24h) | Release Count |
|------|---------------------|------------------|----------------------|---------------|
| **Claude Code** | 10 | 4 | **v2.1.281** (gateway policies, Bedrock assume_role) | 1 |
| **OpenAI Codex** | 10 | 10 | **6 alpha releases** (0.158.0-alpha.2 → .6) | 6 |
| **Gemini CLI** | 10 | 10 | **v0.61.0 stable**, v0.62.0-preview.0, nightly | 3 |
| **GitHub Copilot CLI** | 10 | 1 | **v1.0.89-1 prerelease** (GPT-6 Sol/Luna) | 1 |
| **Kimi Code CLI** | 1 | 0 | None | 0 |
| **OpenCode** | 10 | 10 | None | 0 |
| **Pi** | 10 | 10 | None | 0 |
| **Qwen Code** | 10 | 10 | **v0.24.4-nightly** (CUA driver, deferred-tool fix) | 1 |
| **DeepSeek TUI** | 10 | 10 | None (0.10.1 targeting) | 0 |
| **Grok Build** | 0 | 0 | None | 0 |

**Note**: Issue/PR counts reflect *curated top-10 lists* in each digest, not total repo activity. Codex and DeepSeek show highest maintainer-driven issue volume (33 new issues filed by DeepSeek maintainer today).

---

## 3. Shared Feature Directions

| Requirement | Tools Affected | Specific Community Needs |
|-------------|----------------|--------------------------|
| **Agent reliability & autonomy** | Claude, Gemini, Qwen, DeepSeek, OpenCode | Subagent turn-limit handling (Gemini #22323), generalist hangs (Gemini #21409), auto-review gates (DeepSeek #6475), MCP tool exposure (OpenCode #51023) |
| **Sandbox/permission granularity** | Codex, Copilot, Kimi, OpenCode, Claude | Windows helper failures (Codex #44696), sandbox ghost-enabled (Copilot #4521), YOLO mode `rm -rf` escape (Kimi #2596), approval grants consolidation (DeepSeek #6481) |
| **Session durability & portability** | Claude, Qwen, Gemini, Pi | Project move breaks sessions (Qwen #12553), historical cost tracking (Claude #78148), resume model fidelity (Pi #9459), fork-from-current-point (Pi #9533) |
| **Model/provider flexibility & BYOK** | Codex, Copilot, OpenCode, Qwen, Pi | Custom endpoints (Copilot #4003), DeepSeek BYOK (Codex #2995, Copilot #4840), OpenAI-compatible `max_tokens` (OpenCode #47398), provider cost reporting (Pi #6881) |
| **Cross-platform parity** | Codex, OpenCode, Pi, Kimi | Windows sandbox (Codex #47383, #44696), ripgrep proxy (OpenCode #51022), CJK IME (Pi #9497), shell resolution (Pi #9361) |
| **Cost/usage transparency** | Claude, Codex, DeepSeek, Pi | Historical tracking (Claude #78148), spend visible to model (DeepSeek #6490), provider-reported cost (Pi #6881), usage-limit sync (Claude #16157) |
| **MCP/ACP integration reliability** | Claude, OpenCode, Qwen, Pi | Auto-reconnect (Claude #10071), tools not exposed (OpenCode #51023), filesystem hangs (Qwen #11460), stream events (Pi #9901) |
| **TUI/UX polish & configurability** | Codex, Pi, Qwen, DeepSeek | Whimsy disable (Codex #44561), completion timestamps (Codex #47676), OpenTUI geometry (Qwen #12559), non-blocking asks (DeepSeek #6489) |
| **Memory/context hygiene** | Claude, Gemini, Qwen, DeepSeek | Auto-memory redaction (Gemini #26525), prompt cache rewrite (Claude #96578), replayed image labels (Qwen #12591), scratch dir per session (DeepSeek #6491) |
| **Architecture refactoring** | Claude, Qwen, OpenCode, DeepSeek | Guardian v2 unconditional (Codex #47686), dual-path managed agents (Qwen #12380), V2 plugin loader (OpenCode #48365), approval grant store (DeepSeek #6481) |

---

## 4. Differentiation Analysis

| Tool | Primary Focus | Target Users | Technical Approach |
|------|---------------|--------------|-------------------|
| **Claude Code** | Enterprise integration, gateway policies, Max subscriber workflows | Anthropic Max/Enterprise customers, teams needing GitHub/org integration | Desktop app + CLI, gateway-managed policies, Bedrock IAM roles |
| **OpenAI Codex** | Rapid iteration, sandbox-as-infrastructure, Guardian v2 authZ | OpenAI API users, ML/CUDA developers, Windows/Linux power users | Rust CLI, thread-owned context model, Windows sandbox hardening |
| **Gemini CLI** | Agent architecture, AST-aware tools, browser automation, A2A | Google ecosystem users, agent-heavy workflows, Web/desktop hybrid | TypeScript/Node, subagent delegation, browser agent, A2A server |
| **GitHub Copilot CLI** | VS Code parity, enterprise/custom endpoints, voice mode | GitHub Enterprise, Copilot subscribers, VS Code loyalists | Node/TypeScript, deep VS Code integration, Foundry Local voice |
| **Kimi Code CLI** | Safety-first autonomous mode, workspace isolation | Early adopters, security-conscious users | Go? (unspecified), YOLO mode with path validation gaps |
| **OpenCode** | V2 plugin ecosystem, model provider parity, billing/console trust | Plugin authors, multi-provider users, Linux server deployments | Go? (unspecified), V2 schema break, temp-file leak risk |
| **Pi** | Extension/RPC surface, session fidelity, config-as-code, cross-platform | Extension builders, long-session users, Windows/Linux/macOS parity | TypeScript/Node, durable storage conformance, JSON Schema config |
| **Qwen Code** | Managed/remote agents, headless performance, dual-path architecture | Multi-machine teams, A2A collaborators, headless CI users | TypeScript/Node, remote runtimes, CUA driver, batch API workflow |
| **DeepSeek TUI** | Approvals system overhaul, child-agent authority, auto-review engine | TUI power users, safety-conscious autonomous workflows | Rust, Engine-owned grant store, risk×authorization schema |
| **Grok Build** | (No observable activity) | xAI ecosystem | Unknown |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Signals |
|------|-------|---------|
| **High Momentum (Rapid Iteration)** | **Codex** (6 alphas/24h, 10 PRs), **Qwen** (5 perf PRs/24h), **DeepSeek** (33 maintainer issues filed), **Pi** (10 PRs merged) | Daily/nightly cadence, architectural overhauls in progress, maintainer-driven issue triage |
| **Active Community (High Engagement)** | **Claude** (1.5k comments on #16157), **Codex** (93👍 on #25319), **Gemini**, **OpenCode** (10👍 on temp-leak #28089) | Critical production blockers, enterprise users vocal, long-standing issues |
| **Maturing (Stable Releases)** | **Gemini** (v0.61.0 stable), **Copilot** (prerelease with GPT-6), **Qwen** (nightly + CUA driver) | Versioned releases, GA model support, desktop app parity |
| **Early / Niche** | **Kimi** (1 safety issue), **Grok** (silent) | Low issue volume, single maintainer focus, pre-1.0 stability |

**Key Insight**: Community-driven tools (OpenCode, Pi, Qwen, DeepSeek) show **higher PR velocity** than most vendor tools, suggesting tighter feedback loops. Vendor tools have **higher-severity production incidents** (Claude usage limits, Codex Windows sandbox) due to larger deployed bases.

---

## 6. Trend Signals (Industry Direction)

| Trend | Evidence | Developer Actionability |
|-------|----------|------------------------|
| **Agents → Managed/Remote/Distributed** | Qwen dual-path (#12380), DeepSeek child-agent authority (#6485), Pi fork/session resilience (#9533), OpenCode subagent notifications (#50751) | Design for **session portability** and **cross-machine agent identity** now; expect A2A/ACP standardization |
| **Permission Models → Granular, Auditable, Engine-Owned** | DeepSeek grant store (#6481), Kimi YOLO escape (#2596), Copilot sandbox ghost (#4521), Codex Guardian v2 (#47686) | Build **approval UIs** that survive restarts; separate **risk assessment** from **authorization decisions** |
| **Sessions as First-Class Portable Artifacts** | Qwen project-move break (#12553), Pi resume fidelity (#9459), Claude historical cost (#78148), DeepSeek scratch dir (#6491) | Treat session state as **migratable data**; implement **turn-boundary labeling** for replayed context |
| **Headless/One-Shot Performance Arms Race** | Qwen 5 PRs eliminating double-boot (#12602), Codex prewarm WebSocket (#47701), Pi optimistic render (#9956) | Optimize **cold-start latency**; skip interactive-only probes in CI; use compile caches |
| **Model Routing & Tiered Inference** | Qwen System One gate (#12589), OpenCode per-model concurrency (#12461), Pi classifier infra (#9948), DeepSeek cheap-model review (#6479) | Implement **model routers**; expose **cost/latency budgets** to agents; support **offline catalogs** |
| **Extensibility via Standard Protocols (MCP/ACP)** | All major tools: MCP auto-reconnect (Claude), tool exposure (OpenCode), filesystem (Qwen), stream events (Pi) | Build **protocol-compliant servers**; expect **client-side capability discovery** (Codex #47683) |
| **Security Hardening by Default** | Claude secret leakage fix (#96364), Codex network policy enforcement (#47703, #47742), Pi config schemas (#9880) | Audit **diff/git output for secrets**; enforce **network policies** on all backends; publish **config schemas** |
| **Observability → Cost/Token Transparency** | Claude usage limits (#16157), DeepSeek spend visible (#64

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-09-24 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking (Most-Active PRs)

| # | Skill | Functionality | Discussion Highlights | Status |
|---|-------|---------------|----------------------|--------|
| [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator: trigger evaluation fix** | Core infrastructure: isolates trigger evals, fixes Windows `select()` pipe failures, prevents unrelated tools from stopping scans, handles runtime failures correctly | Critical fix for skill-creator's evaluation harness; addresses false negatives in trigger detection | **Open** (updated 2026-09-16) |
| [#1771](https://github.com/anthropics/skills/pull/1771) | **proofcore-contract-auditor** | Web3 skill: automated static analysis of Solidity/Rust smart contracts + cryptographic audit proofs anchored to TON Blockchain via ProofCore's zero-storage Merkle protocol | First Web3 auditing skill; integrates blockchain-anchored verification | **Open** (created 2026-09-15) |
| [#1742](https://github.com/anthropics/skills/pull/1742) | **mcp-builder: MCP 2.x compatibility** | Fixes breaking changes in `mcp>=2.0.0`: `streamablehttp_client` → `streamable_http_client`, custom headers via `create_mcp_http_client` | Unblocks MCP server generation for latest SDK | **Open** (updated 2026-09-19) |
| [#1703](https://github.com/anthropics/skills/pull/1703) | **md2video-audio** | Zero-cost Markdown → MP4 pipeline: Marp slides → professional video with human-like voiceovers | Novel multimedia generation skill; zero external API cost | **Open** (updated 2026-09-15) |
| [#822](https://github.com/anthropics/skills/pull/822) | **AWT (AI Watch Tester)** | AI-powered E2E testing: zero-code test generation via browser control + vision; auto-healing selectors; CI/CD integration | Long-running PR (since Mar 2026); brings browser automation natively to Skills | **Open** (updated 2026-09-19) |
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | Comprehensive testing skill: Testing Trophy philosophy, AAA pattern, React Testing Library, contract testing, E2E strategies, flakiness mitigation | Broad-scope testing methodology skill; active maintenance | **Open** (updated 2026-09-21) |
| [#1776](https://github.com/anthropics/skills/pull/1776) | **blast-radius** | Safety checklist for bulk/destructive operations: classifies impact, requires explicit confirmation, archives state pre-operation | Addresses "query right about rows, wrong about world" gap | **Open** (updated 2026-09-18) |
| [#525](https://github.com/anthropics/skills/pull/525) | **pyxel** | Retro game development: creation, debugging, headless input-driven runs, frame inspection, state verification | Niche but complete game-dev workflow; long-standing PR | **Open** (updated 2026-09-22) |

> **Note:** PR comment counts show as "undefined" in source data; ranking reflects position in "top 20 by comments" list and recent update activity.

---

## 2. Community Demand Trends (From Issues)

| Priority | Demand Signal | Evidence |
|----------|---------------|----------|
| **🔴 Critical: Trust & Security** | Namespace spoofing — community skills distributed under `anthropic/` namespace impersonate official skills | [#492](https://github.com/anthropics/skills/issues/492) — 43 comments, 2👍 — *highest engagement issue* |
| **🟠 High: Organizational Workflow** | Org-wide skill sharing (no manual file transfer/Slack/Teams) | [#228](https://github.com/anthropics/skills/issues/228) — 16 comments, 8👍 |
| **🟠 High: Evaluation Reliability** | `run_eval.py` / `claude -p` never triggers skills (0% trigger rate) | [#556](https://github.com/anthropics/skills/issues/556) — 12 comments, 7👍 |
| **🟡 Medium: Meta-Skills** | Skill quality/security analyzers; skill-creator best-practice rewrite | [#83](https://github.com/anthropics/skills/pull/83), [#202](https://github.com/anthropics/skills/issues/202) |
| **🟡 Medium: Governance & Safety** | Agent governance patterns (policy enforcement, threat detection, audit trails) | [#412](https://github.com/anthropics/skills/issues/412) — closed but signals demand |
| **🟢 Emerging: Memory/Context Efficiency** | Compact symbolic memory notation for long-running agents | [#1329](https://github.com/anthropics/skills/issues/1329) — 10 comments |
| **🟢 Emerging: Quality Gates** | Three-stage reasoning pipeline: calibration → adversarial review → delivery verification | [#1385](https://github.com/anthropics/skills/issues/1385) — 4 comments, 1👍 |

---

## 3. High-Potential Pending Skills (Active PRs Likely to Land)

| PR | Skill | Why It's Poised to Merge |
|----|-------|--------------------------|
| [#1742](https://github.com/anthropics/skills/pull/1742) | **mcp-builder MCP 2.x fix** | Fixes concrete breaking change; unblocks ecosystem; recent activity (Sep 19) |
| [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator trigger eval fix** | Core infrastructure; resolves 0% recall bug ([#1769](https://github.com/anthropics/skills/pull/1769) duplicates this) |
| [#1792](https://github.com/anthropics/skills/pull/1792) / [#1790](https://github.com/anthropics/skills/pull/1790) | **docx: LibreOffice timeout + rels creation** | Two focused fixes for docx corruption/timeout; authored by same contributor; recent (Sep 19) |
| [#1769](https://github.com/anthropics/skills/pull/1769) | **skill-creator 0% recall fix** | Directly addresses [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 7👍) |
| [#539](https://github.com/anthropics/skills/pull/539) | **skill-creator YAML validation** | Prevents silent parsing failures; practical DX improvement |
| [#1771](https://github.com/anthropics/skills/pull/1771) | **proofcore-contract-auditor** | Novel Web3 category; complete implementation; recent submission |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for *trustworthy, reliably-triggering skills that integrate safely into organizational workflows* — not just new capabilities, but fixes to the evaluation harness, namespace security, and sharing infrastructure that make skills viable for production team use.**

---

# Claude Code Community Digest — 2026-09-24

---

## 1. Today's Highlights

**v2.1.281** shipped with two gateway-focused improvements: support for newer Claude Desktop policy keys (`blockReadsOutsideWorkingDirectories`, `disableBypassPermissionsMode`) and `assume_role` for Bedrock upstreams. Meanwhile, the community is signaling distress around **usage-limit sync failures** (Max subscribers hitting limits despite $100 credits visible on claude.ai) and a **wave of GitHub integration breakages** filed today. Opus 5.5’s safety classifier is also drawing fire for false positives on routine research and local scripts.

---

## 2. Releases

### v2.1.281
- **Claude Apps Gateway**: Added support for `blockReadsOutsideWorkingDirectories` and `disableBypassPermissionsMode` in `desktop` policy blocks.
- **Bedrock Upstreams**: Gateway now supports `assume_role` to call Bedrock as an IAM role instead of using static credentials.

[Release Notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.281)

---

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#16157](https://github.com/anthropics/claude-code/issues/16157) | **Max subscribers instantly hit usage limits** despite $100 credit balance on claude.ai | **Highest-engagement bug in repo history** (1,497 comments, 694 👍). Blocks paying customers from using the product. | 🔥 Critical — users report work stoppage; workarounds involve `CLAUDE_CODE_DISABLE_AUTO_MEMORY=1` |
| [#10071](https://github.com/anthropics/claude-code/issues/10071) | **MCP auto-reconnect** after connection loss | MCP servers frequently disconnect; no automatic recovery forces manual intervention. | 29 comments, 43 👍 — strong demand for resilience |
| [#7618](https://github.com/anthropics/claude-code/issues/7618) | **VS Code terminal steals focus** when running Claude Code externally via `/ide` | Breaks workflow for developers using external terminals; focus theft is a persistent UX papercut. | 22 comments, 38 👍 |
| [#78148](https://github.com/anthropics/claude-code/issues/78148) | **Historical cost/usage tracking across sessions** | `/cost` only shows current session; no weekly/monthly view for budgeting. | 12 comments — recurring ask since 2025 |
| [#77697](https://github.com/anthropics/claude-code/issues/77697) | **macOS Keychain auth prompt on every credential read** | Keychain item written without trusted-application list → constant auth dialogs. | 9 comments, 12 👍 — macOS-specific but high friction |
| [#95966](https://github.com/anthropics/claude-code/issues/95966) | **Scheduled tasks silently skip fire window** (Desktop app) | Tasks fail to run with no error, no history entry, `nextRunAt` unchanged. | 6 comments — reliability concern for automation users |
| [#96105](https://github.com/anthropics/claude-code/issues/96105) | **macOS 12 Desktop stuck on bundled 2.1.260**; Opus 5.5 greyed out | Version mismatch between app bundle and SDK wrapper strands users on old builds. | 5 comments — affects Monterey/Intel users |
| [#94003](https://github.com/anthropics/claude-code/issues/94003) | **WindowServer ~47% CPU during streaming** (deep CoreAnimation re-walk at 120Hz) | Significant battery/performance hit on macOS during long responses. | 4 comments — profiling data included |
| [#96589](https://github.com/anthropics/claude-code/issues/96589) / [#96572](https://github.com/anthropics/claude-code/issues/96572) | **Opus 5.5 classifier blocks ordinary work** (public research, own-machine scripts) | Safety system false-positives on legitimate tasks with no explanation. | Filed today, 0 comments but high severity |
| [#96578](https://github.com/anthropics/claude-code/issues/96578) | **Prompt cache re-written every turn** in fresh sessions; fixed by `CLAUDE_CODE_DISABLE_AUTO_MEMORY=1` | Cache-write costs explode in one repo; env var workaround suggests auto-memory bug. | Filed today, repro included |

---

## 4. Key PR Progress

| # | PR | Description | Impact |
|---|----|-------------|--------|
| [#96570](https://github.com/anthropics/claude-code/pull/96570) | **command.run hook names command by literal** | Engine's hook scanner now reads literal command names from `command.run` matchers, fixing startup slash-command waiting logic. | Hook reliability |
| [#96487](https://github.com/anthropics/claude-code/pull/96487) | **Telemetry rows carry engine version, base version, build time** | Uses `$.session.version()` (available from 2.1.281) to tag telemetry with full build metadata. | Observability |
| [#96434](https://github.com/anthropics/claude-code/pull/96434) | **Security-guidance: keep denied/secret files out of reviewer's reach** | Fixes #96276 — reviewer prompts assembled from `git diff`/`git show` could leak tracked secrets (`secrets.yaml`, `config/prod.json`). | Security hardening |
| [#96363](https://github.com/anthropics/claude-code/pull/96363) | **diff: pass `--no-color` to prevent ANSI escapes emptying diff body** | Forced git colors (`color.ui=always`) broke diff parsing; `--no-color` restores reliable hunk matching. | Diff tool stability |
| [#96364](https://github.com/anthropics/claude-code/pull/96364) | **agents-md: auto-paginated Read no longer counts as delivery** | Paginated reads of large `AGENTS.md` files now correctly allow re-attachment on subsequent reads. | Agent instruction reliability |
| [#79150](https://github.com/anthropics/claude-code/pull/79150) | **Docs: align code-review README with validation-based command** | Removes outdated references to blame agent, 0–100 scoring, and non-existent config threshold. | Documentation accuracy |

---

## 5. Feature Request Trends

1. **Usage & Cost Transparency** — Historical tracking (#78148), session-limit visibility (#16157), custom reset days (#96583). Developers want billing-grade observability.
2. **MCP Resilience** — Auto-reconnect (#10071), notification delivery guarantees (#95775). MCP is treated as infrastructure; it needs infrastructure-grade reliability.
3. **GitHub Integration Polish** — 5+ issues filed today alone (#96579, #96582, #96586, #96587, #96590, #96594) around org/repo listing, connection flow, and credit claiming.
4. **Project Portability** — `claude project mv` to re-point state after directory moves (#96018).
5. **Remote Control Reliability** — `/remote-control` enable confirmation missing, sessions not appearing on web/mobile (#96591).

---

## 6. Developer Pain Points

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Usage limit sync broken for Max subscribers** | #16157 (1.5k comments), #96585 (filed today) | 🔥 Critical — blocks paid users |
| **GitHub integration fundamentally broken** | 6+ issues filed 2026-09-24 alone; org/repo listing, connection flow, credit claim all failing | 🔥 Critical — new feature, high visibility |
| **Opus 5.5 safety classifier over-blocking** | #96589, #96572 (filed today); blocks public research & local scripts | High — trust erosion |
| **macOS Keychain auth prompts every read** | #77697 (9 comments, 12 👍, open since July) | Medium — daily friction |
| **VS Code extension focus/rendering bugs** | #7618 (focus theft), #96571 (caret rendering) | Medium — affects IDE workflow |
| **Desktop app update/sync failures** | #96105 (stranded on 2.1.260), #93528 (messages hang at "Sending...") | Medium — reliability |
| **Scheduled tasks silently fail** | #95966 (5-day observed failure) | Low volume, high severity for automation |
| **WindowServer CPU spike during streaming** | #94003 (47% CPU, CoreAnimation re-walk) | Low volume, macOS-specific |

---

*Digest generated from github.com/anthropics/claude-code data as of 2026-09-24. Links point to live GitHub items.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-09-24

## Today's Highlights
The Codex team shipped a rapid succession of **six alpha releases** (0.158.0-alpha.2 through alpha.6) in the past 24 hours, signaling an active stabilization push for the 0.158 series. Community attention remains focused on **Windows sandbox reliability** (multiple helper failures, credential issues, WSL2 mount problems) and **TUI/UX polish** (whimsy effects, async question handling, timestamp config). A significant internal refactor landed: the **Guardian v2 thread-owned context model** is now unconditional, removing legacy authorization paths and simplifying history/fork handling.

---

## Releases
| Version | Type | Notes |
|---------|------|-------|
| `rust-v0.158.0-alpha.6` | Alpha | Latest in 0.158 series; rapid iteration suggests pre-release stabilization |
| `rust-v0.158.0-alpha.5` | Alpha | |
| `rust-v0.158.0-alpha.4` | Alpha | |
| `rust-v0.158.0-alpha.3` | Alpha | |
| `rust-v0.158.0-alpha.2` | Alpha | |
| `rust-v0.157.0-alpha.11` | Alpha | Prior series still receiving updates |
| `rust-v0.155.0-alpha.16.4` | Alpha | Maintenance on older branch |

*All releases are CLI/Rust artifacts; no changelogs provided in release notes. Track [releases](https://github.com/openai/codex/releases) for details.*

---

## Hot Issues (Top 10 by Community Impact)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#25319](https://github.com/openai/codex/issues/25319) | **Scope VS Code chats to current workspace** | Top-voted enhancement (93 👍, 39 comments). Critical for mono-repo/multi-project workflows; prevents context bleed across projects. | 🔥 High demand, long-standing (open since May) |
| [#3141](https://github.com/openai/codex/issues/3141) | **GPU access inside sandbox** | Blocks ML/CUDA workloads on Linux; 62 👍, 37 comments. Fundamental for AI/ML devs using Codex for model training. | 🔥 High technical blockers |
| [#44561](https://github.com/openai/codex/issues/44561) | **Disable whimsy/astra stars by default** | 77 👍, 33 comments. Visual noise causing confusion ("thought screen was glitching"); simple config default fix. | 🎨 UX polish, easy win |
| [#47383](https://github.com/openai/codex/issues/47383) | **Windows 10: Core setup fails, blocks approval modes** | New regression in 26.917.6896.0; breaks desktop app on Win10. 25 comments, active investigation. | 🚨 Critical Windows regression |
| [#44696](https://github.com/openai/codex/issues/44696) | **Windows sandbox helper fails on every exec/read** | `helper_unknown_error` on all sandbox ops (0.153.0-alpha.5). 19 comments, 2 👍. Core sandbox broken on Windows. | 🚨 Sandbox reliability |
| [#45317](https://github.com/openai/codex/issues/45317) | **Chrome integration rejects API-key auth** | Browser skill 0.2.1 broke API-key flow; "unsupported auth method: apikey". 18 comments. | 🔐 Auth regression |
| [#43594](https://github.com/openai/codex/issues/43594) | **Windows Computer Use gated to Darwin** | `@oai/sky` unregistered on Windows despite functional backend. 14 comments, 2 👍. Platform parity gap. | 🖥️ Windows feature parity |
| [#17793](https://github.com/openai/codex/issues/17793) | **Backspace deletes multiple chars in TUI** | Long-standing (Apr), 21 comments, 5 👍. Core editing UX bug on Linux/Kitty. | ⌨️ Daily-driver annoyance |
| [#47511](https://github.com/openai/codex/issues/47511) | **Missing git commit/push button in desktop** | Regression in 26.917.51856; 13 👍, 5 comments. Visible UI element removed. | 🔘 UI regression |
| [#47718](https://github.com/openai/codex/issues/47718) | **GPT-6 less reliable than GPT-5.5 for legacy C++** | New model quality concern; 4 comments, same-day. Early signal on model regression for systems code. | 🤖 Model behavior watch |

---

## Key PR Progress (Notable Merges)

| # | PR | Description | Impact |
|---|----|-------------|--------|
| [#47686](https://github.com/openai/codex/pull/47686) | **Make thread-owned Guardian context always enabled** | Deprecates `features.guardianv2.thread_context`; removes profile overrides. | 🏗️ Major architecture simplification |
| [#47689](https://github.com/openai/codex/pull/47689) | **Make Guardian thread context capture unconditional** | Removes session-level capture mode; simplifies fork handling & approval freshness. | 🏗️ History/fork logic cleanup |
| [#47688](https://github.com/openai/codex/pull/47688) | **Remove legacy Guardian authorization evidence paths** | Uses retained root context for subagent auth; removes legacy history path & answer buffer. | 🔐 AuthZ simplification |
| [#47690](https://github.com/openai/codex/pull/47690) | **Remove obsolete Guardian context capture mode branches** | Simplifies input ordering, compaction, fork handling. | 🧹 Code deletion (always good) |
| [#47695](https://github.com/openai/codex/pull/47695) | **Repair rejected Windows sandbox credentials during provisioning** | Detects Windows password rejection *before* runtime logon; fixes silent sandbox setup failures. | 🪟 Direct Windows sandbox fix |
| [#47703](https://github.com/openai/codex/pull/47703) | **Preserve account network policy for ChatGPT backend requests** | Prevents HTTP client bypass of configured network policy; revocation now blocks correctly. | 🔒 Security hardening |
| [#47742](https://github.com/openai/codex/pull/47742) | **Honor network policy in history notes & image generation** | Extends network policy to extension backends; closes same bypass vector. | 🔒 Security hardening |
| [#47712](https://github.com/openai/codex/pull/47712) | **Update unified exec output buffers atomically** | Fixes race where cancellation could interrupt between transcript & polling buffer. | ⚡ Reliability fix |
| [#47701](https://github.com/openai/codex/pull/47701) | **Allow idle threads to prewarm/repair WebSocket connections** | Exposes `CodexThread::prewarm()`; avoids warmup repeat on healthy connections. | ⚡ Latency improvement |
| [#47683](https://github.com/openai/codex/pull/47683) | **Add executor capability discovery V2 infrastructure** | New `capabilities/discoverV2` request; prewarms plugin/skill locations at startup. | 🔌 Extensibility foundation |

---

## Feature Request Trends
From the issue landscape, three clear directions dominate community asks:

1. **Workspace/Project Isolation** — #25319 (VS Code), plus implicit need in sandbox/desktop contexts. Developers want *strict* per-project boundaries for chat history, approvals, and filesystem scope.

2. **Sandbox Parity Across Platforms** — GPU access (#3141), Windows helper fixes (#44696, #47383), WSL2 mount support (#47429), Btrfs compatibility (#47415). The sandbox is the *primary execution environment* but remains fragile on non-Linux platforms.

3. **TUI/CLI Configurability** — Disable whimsy (#44561, #44640), completion timestamps (#47676, #36681), service-tier persistence (#47534), async question UX (#47535). Users treat the CLI as a daily driver and want full control over visual/noise elements.

*Secondary but rising:* **Model selection transparency** (#47420 missing GPT-6 Sol, #47718 quality regression), **Desktop app feature parity** (git buttons #47511, rate limits #18822, Computer Use #43594).

---

## Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Windows sandbox fundamentally unreliable** | Helper errors on *every* exec/read (#44696), credential rejection silent until runtime (#47695), Core setup blocks approvals (#47383), WSL2 mount rejection (#47429) | 5+ issues in 24h |
| **Visual noise in TUI (astra stars/sparkles)** | #44561 (77 👍), #44640 (18 👍), #47717 (PR fixing recursive sparkle dispatch) | 3 issues + PR |
| **Config changes not persisting** | Service tier reverts to Fast (#47534), sandbox profile overridden on macOS (#33552) | 2+ issues |
| **Auth regressions** | Chrome API-key rejected (#45317), Windows sandbox creds (#47695), network policy bypass (#47703, #47742) | 3 security-related |
| **Desktop app regressions** | Missing git button (#47511), GUI message timeout (#43460), crash on macOS (#30824), Computer Use gating (#43594) | 4+ issues |
| **Async question UX broken** | Questions stay collapsed, combined answers leave pending (#47535), "close it there" impossible from mobile (#46647) | 2 issues |

---

*Digest generated from GitHub data as of 2026-09-24. All links point to live issues/PRs on `github.com/openai/codex`.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-09-24

## 1. Today's Highlights
The project shipped **v0.61.0 stable** alongside **v0.62.0-preview.0** and a new nightly, introducing Gemini 3.8 Flash and 3.5 Flash Lite model support, a retry progress indicator for connection recovery, and a critical fix for A2A server metadata endpoints. Meanwhile, the issue backlog reveals persistent agent reliability concerns—subagent turn-limit handling, browser agent Wayland failures, and Auto Memory extraction bugs—dominating maintainer attention.

## 2. Releases
| Version | Type | Key Changes |
|---------|------|-------------|
| **v0.61.0** | Stable | Promoted from preview; includes changelog for v0.60.0-preview.0 and version bump automation. |
| **v0.61.0-preview.1** | Preview | Cherry-pick patch (62364cb) onto preview branch. |
| **v0.62.0-preview.0** | Preview | • **feat**: Added Gemini 3.8 Flash (`gemini-3.8-flash`) and 3.5 Flash Lite (`gemini-3.5-flash-lite`) as GA models ([#29443](https://github.com/google-gemini/gemini-cli/pull/29443))<br>• **fix(a2a-server)**: Early return on unsupported store in tasks metadata endpoint ([#29334](https://github.com/google-gemini/gemini-cli/pull/29334)) |
| **v0.62.0-nightly.20260924.g8e70c862f** | Nightly | • **fix(cli)**: Display retry progress indicator during connection recovery (429/503) ([#29468](https://github.com/google-gemini/gemini-cli/pull/29468))<br>• **test**: Check VS Code integration test presence before running ([#29462](https://github.com/google-gemini/gemini-cli/pull/29462)) |

> **Full changelog**: [v0.61.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.61.0) · [v0.62.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.62.0-preview.0)

## 3. Hot Issues (Top 10 by Signal)
| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent reports GOAL success after hitting MAX_TURNS** | Masks real failures; breaks trust in agent delegation. | 13 comments, 2 👍, P1, needs retest |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent hangs indefinitely** | Blocks workflows; only workaround is disabling subagents. | 8 comments, 8 👍, P1, needs retest |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **EPIC: Assess AST-aware file reads/search/mapping** | Strategic investigation—could reduce token waste & turn count. | 7 comments, 1 👍, P2 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | **Gemini under-uses skills & sub-agents** | Core agent autonomy gap; requires explicit user instruction. | 6 comments, P2, needs retest |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | **Auto Memory: deterministic redaction & reduced logging** | Security: secrets enter model context before redaction. | 5 comments, P2, security area |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | **Auto Memory retries low-signal sessions indefinitely** | Wastes compute; inbox never clears skipped sessions. | 4 comments, P2 |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | **Browser Agent ignores `settings.json` overrides (maxTurns)** | Config drift; users can’t tune browser agent behavior. | 4 comments, P2, needs retest |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | **Browser agent: auto session takeover & lock recovery** | Persistent profile locks break UX on restart/crash. | 4 comments, P3 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | **Browser subagent fails on Wayland** | Platform regression; blocks Linux/Wayland users. | 4 comments, 1 👍, P1, needs retest |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | **400 error when >128 tools available** | Tool explosion breaks API calls; needs smart scoping. | 3 comments, P2, needs info |

## 4. Key PR Progress (Top 10 by Impact)
| # | PR | Status | Summary |
|---|----|--------|---------|
| [#29443](https://github.com/google-gemini/gemini-cli/pull/29443) | **Feat: Gemini 3.8 Flash / 3.5 Flash Lite** | Closed | Adds two new GA models; promotes them to default Flash/Lite tiers. |
| [#29468](https://github.com/google-gemini/gemini-cli/pull/29468) | **Fix: retry progress indicator during connection recovery** | Closed | Shows real retry state (not stuck “Thinking…”) on 429/503 with full error verbosity. |
| [#29265](https://github.com/google-gemini/gemini-cli/pull/29265) | **Fix: prevent session context poisoning on interrupted turns** | Closed | Prevents SIGINT/timeout from corrupting chat history and breaking subsequent prompts. |
| [#29451](https://github.com/google-gemini/gemini-cli/pull/29451) | **Fix: bound tool output size & optimize memory in long loops** | Open | Caps tool output, optimizes memory lifecycle for build/test-heavy agent runs. |
| [#29359](https://github.com/google-gemini/gemini-cli/pull/29359) | **Fix: keep table rows/columns in `web_fetch`** | Open | Restores structured table data lost by `html-to-text` default rendering. |
| [#29354](https://github.com/google-gemini/gemini-cli/pull/29354) | **Fix: `--userns=keep-id` for rootless Podman sandboxes** | Open | Resolves `EACCES` on mounted files during native dependency rebuilds. |
| [#29358](https://github.com/google-gemini/gemini-cli/pull/29358) | **Fix: align reverse-search (Ctrl+R) highlights** | Open | Maps lowercase match offsets back to original text; adds regression tests. |
| [#27754](https://github.com/google-gemini/gemini-cli/pull/27754) | **Fix: missing return after 501 in A2A metadata endpoint** | Closed | Prevents `ERR_HTTP_HEADERS_SENT` crash on unsupported store. |
| [#27863](https://github.com/google-gemini/gemini-cli/pull/27863) | **Fix: prioritize structured display titles in tool invocation** | Closed | Improves non-interactive UI: `_toolDisplayName` → `_toolName` → fallback. |
| [#29352](https://github.com/google-gemini/gemini-cli/pull/29352) | **Docs: document all hook decision values (`ask`, `approve`)** | Open | Completes hooks reference; fixes [#28977](https://github.com/google-gemini/gemini-cli/issues/28977). |

## 5. Feature Request Trends
1. **Agent Architecture & Autonomy** — Persistent file-based task tracking ([#18836](https://github.com/google-gemini/gemini-cli/issues/18836)), subagent trajectory sharing ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)), and better skill/sub-agent discovery ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)).
2. **AST-Aware Code Navigation** — Dedicated EPIC ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745)) and tooling investigation ([#22746](https://github.com/google-gemini/gemini-cli/issues/22746)) for precise, token-efficient reads.
3. **Browser Agent Hardening** — Session takeover, lock recovery ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232)), config respect ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)), Wayland support ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983)).
4. **Memory & Context Hygiene** — Deterministic redaction ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)), inbox quarantine ([#26523](https://github.com/google-gemini/gemini-cli/issues/26523)), retry backoff ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)).
5. **Sandbox & Tooling Ergonomics** — Rootless Podman fixes ([#29354](https://github.com/google-gemini/gemini-cli/pull/29354)), tool count limiting ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)), destructive command guardrails ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)).

## 6. Developer Pain Points
- **Agent Reliability**: Subagents misreport success on turn limits ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)), generalist hangs ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)), and browser agent crashes on Wayland ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983)) top the frustration list.
- **Configuration Drift**: Browser agent ignores `settings.json` ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)); symlinked agent files unrecognized ([#20079](https://github.com/google-gemini/gemini-cli/issues/20079)).
- **Context & Token Bloat**: `/compress` not persisted across sessions ([#21335](https://github.com/google-gemini/gemini-cli/issues/21335)), large file reads firehose context ([#19561](https://github.com/google-gemini/gemini-cli/issues/19561)), model spawns temp scripts everywhere ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)).
- **Tooling Friction**: 400 errors at >128 tools ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)), Windows extension update locks ([#19013](https://github.com/google-gemini/gemini-cli/pull/19013)), reverse-search highlight misalignment ([#29358](https://github.com/google-gemini/gemini-cli/pull/29358)).
- **Observability Gaps**: Bug reports lack subagent context ([#21763](https://github.com/google-gemini/gemini-cli/issues/21763)), subagent trajectories not shareable ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)), Auto Memory inbox opacity ([#26523](https://github.com/google-gemini/gemini-cli/issues/26523)).

---
*Digest compiled from GitHub data (releases, issues, PRs) as of 2026-09-24. All links point to google-gemini/gemini-cli.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-09-24

---

## 1. Today's Highlights

- **New prerelease v1.0.89-1** ships with **GPT-6 Sol and GPT-6 Luna** in the model picker, plus fixes for view tool line-range handling and empty-input Up-arrow recall in local sessions.  
- **49 issues** saw activity in the last 24h; top concerns cluster around **memory store failures**, **BYOK/custom endpoint support**, **HTTP/2 GOAWAY race conditions**, and **auth token refresh stalls** in long-running processes.  
- **Voice mode installs are failing** with 401 errors on internal Foundry Local NuGet feeds, blocking dictation for multiple users.

---

## 2. Releases

### v1.0.89-1 (prerelease)
| Category | Changes |
|----------|---------|
| **Added** | GPT-6 Sol and GPT-6 Luna models now appear in the picker when available. |
| **Fixed** | • View tool now honors line ranges when providers send flattened `view_range` arguments.<br>• In local sessions, pressing **Up** in an empty chat input recalls the pending message and preserves queued prompts. |

---

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#4535](https://github.com/github/copilot-cli/issues/4535) | `store_memory` fails in v1.0.81 prereleases: `Instance id is required` | Blocks memory persistence for agents; regression in prerelease chain. | 10 comments, 1 👍 — **Closed** (fix likely in 1.0.89-1). |
| [#2995](https://github.com/github/copilot-cli/issues/2995) | Can't use DeepSeek API via BYOK | Enterprise/local model adoption blocked; high demand for custom endpoints. | 9 comments, 9 👍 — **Closed** (workaround documented?). |
| [#2421](https://github.com/github/copilot-cli/issues/2421) | HTTP/2 GOAWAY race condition → cascading retries & premium request waste | Silent billing waste & instability under load; consolidates 5 prior issues. | 8 comments, 19 👍 — **Closed** (core networking fix). |
| [#4847](https://github.com/github/copilot-cli/issues/4847) | Auto managed-settings refresh breaks IDE MCP reload & `/allow-all` | Breaks VS Code integration in long sessions; disables permission bypass. | 4 comments, 3 👍 — **Open**. |
| [#4003](https://github.com/github/copilot-cli/issues/4003) | Support custom model endpoint in CLI (parity with VS Code) | Critical for air-gapped, local, and enterprise model deployments. | 4 comments — **Open**. |
| [#4521](https://github.com/github/copilot-cli/issues/4521) | Sandbox cannot be disabled (UI shows disabled, runtime uses it) | Security/perf risk; users can’t opt out of sandbox overhead. | 4 comments, 4 👍 — **Closed**. |
| [#4663](https://github.com/github/copilot-cli/issues/4663) | Failed compaction retried every turn → unbounded billed retries & context growth | Runaway costs & latency; no backoff, fallback, or user-visible error. | 3 comments — **Open**. |
| [#4929](https://github.com/github/copilot-cli/issues/4929) | Process-local auth token stops refreshing; all prompts fail until restart | Session-killing auth stall; `/login` doesn’t recover the process. | 3 comments — **Open**. |
| [#4840](https://github.com/github/copilot-cli/issues/4840) | BYOK broken with DeepSeek: `tools[4].type: unknown variant 'custom'` | New regression in tool schema handling for custom providers. | 2 comments, 1 👍 — **Open** (updated 2026-09-24). |
| [#4814](https://github.com/github/copilot-cli/issues/4814) / [#4667](https://github.com/github/copilot-cli/issues/4667) | Voice mode install fails — 401 on internal Foundry Local NuGet feed | Dictation unusable; affects multiple users across versions. | 1 comment each — **Open**. |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|----|-------------|--------|
| [#4948](https://github.com/github/copilot-cli/pull/4948) | Update `actions/github-script` pin to v9.0.0 | CI dependency hygiene; no runtime impact. | **Open** |

*Only one PR updated in the last 24h — release work appears to be in the prerelease tag rather than open PRs.*

---

## 5. Feature Request Trends (from all 49 active issues)

1. **Model & Provider Flexibility** — Custom endpoints (VS Code parity), BYOK stability, DeepSeek/other provider support (#4003, #2995, #4840).
2. **Session & State Resilience** — Auth token auto-refresh, compaction backoff/fallback, memory store reliability (#4929, #4663, #4535).
3. **Permission & Sandbox Control** — Persistent `/allow-all`, sandbox opt-out, auto-allow on startup (#3877, #4521).
4. **Observability & Debugging** — Rate-limit UI, background task live output, sub-agent panel (#2827, #2682, #1783).
5. **Plugin & MCP Ecosystem** — Auto-update plugins from marketplace, local MCP server fallback when registry fetch fails (#3331, #4512).
6. **Terminal & Input Polish** — Keyboard shortcuts for session switching, key-event handling in unfocused panes, Warp theme respect (#3779, #4213, #4843).

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Frequency | Representative Issues |
|------------|-----------|----------------------|
| **Auth/session instability in long-running processes** | High | #4929 (token refresh stall), #4847 (settings refresh breaks MCP), #3933 (autopilot drops). |
| **Custom model/BYOK breakage** | High | #2995 (DeepSeek), #4003 (endpoint parity), #4840 (tool schema error). |
| **Silent billing waste & retries** | Medium | #2421 (GOAWAY race), #4663 (compaction retry storm). |
| **Sandbox/permission UX mismatches** | Medium | #4521 (sandbox ghost-enabled), #3877 (no auto-allow). |
| **Voice mode install broken** | Emerging | #4814, #4667 (401 on internal feed). |
| **Config directory & CLI flag inconsistencies** | Low but persistent | #2197 (`--config-dir` ignored for some writes). |

---

*Digest generated from github.com/github/copilot-cli data as of 2026-09-24 00:00 UTC.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-09-24

## 1. Today's Highlights
No new releases or pull requests were published in the last 24 hours. The sole active issue (#2596) reports a critical safety incident where the agent, running in YOLO permission mode, executed `rm -rf` on a pre-existing user directory outside the workspace (`~/.pi/agent/sessions`), resulting in session data loss. The issue remains open with one community comment.

## 2. Releases
No new releases in the last 24 hours.

## 3. Hot Issues
| # | Title | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#2596](https://github.com/MoonshotAI/kimi-cli/issues/2596) | Agent ran `rm -rf` on a pre-existing directory outside the workspace, deleting user session data | **Critical safety regression**: The agent performed destructive filesystem operations beyond its sandbox, violating the principle of least privilege. The failure to detect a failed symlink creation (`ln -sfn` onto an existing directory) and subsequent blind cleanup indicates insufficient guardrails in YOLO mode. | 1 comment; 0 upvotes. Community focus is on root-cause analysis and hardening path-validation logic before YOLO mode is considered production-ready. |

## 4. Key PR Progress
No pull requests updated in the last 24 hours.

## 5. Feature Request Trends
Insufficient issue volume in the last 24 hours to identify trends. Historically, the repository shows demand for:
- Stricter sandboxing / workspace isolation
- Better audit logging of agent filesystem actions
- Granular permission modes between “ask” and “YOLO”

## 6. Developer Pain Points
- **Unbounded destructive actions in YOLO mode** — Developers report anxiety when enabling autonomous mode due to lack of path confinement and pre-flight checks.
- **Silent failure of prerequisite operations** — The agent proceeded with cleanup despite the earlier `ln -sfn` failure, highlighting missing idempotency/verification steps.
- **Workspace boundary enforcement** — Expectation that the CLI should never traverse or modify paths outside the declared project root without explicit user consent.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-09-24

## 1. Today's Highlights
OpenCode's v2 transition continues to dominate activity: the v2 plugin loader still breaks V1 plugins with no migration path (multiple issues), MCP tool exposure is silently failing in Desktop, and a critical temp-file leak (#28089, 11 comments, 10👍) has consumed hundreds of GB on Linux systems since May. Meanwhile, the team shipped fixes for Copilot model routing, Gemini schema handling, and output-limit defaults across providers.

---

## 2. Releases
**No new releases in the last 24 hours.**

---

## 3. Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#28089](https://github.com/anomalyco/opencode/issues/28089) | **Temp `.so` leak in `/tmp` — hundreds of GB over time** | Long-running Linux instances (CentOS 7) fill disks with orphaned ELF shared objects; no cleanup logic. | 11 comments, 10👍 — open since May, still unresolved |
| [#50201](https://github.com/anomalyco/opencode/issues/50201) | **Paid Go workspace lost after Console migration** | Billing/subscription data disappeared during Console migration; users see empty org. | 8 comments, 4👍 — direct revenue impact |
| [#48365](https://github.com/anomalyco/opencode/issues/48365) | **V2 beta: V1 plugins unloadable, no migration path** | All V1-style plugins fail under V2 schema; custom commands unreachable headless; no V2 docs for agents. | 2 comments — structural blocker for plugin ecosystem |
| [#51023](https://github.com/anomalyco/opencode/issues/51023) | **MCP server connected but zero tools exposed to agent** | Sidecar shows healthy MCP connection (`tools/list` parsed), yet agent sees no tools. | Filed today — silent integration failure |
| [#47398](https://github.com/anomalyco/opencode/issues/47398) | **v2: `max_tokens` never sent for OpenAI-compatible models** | Requests to `@ai-sdk/openai-compatible` omit `max_tokens`; `limit.output` ignored; thinking truncates at provider default. | 2 comments, 1👍 — affects all non-Anthropic providers |
| [#39170](https://github.com/anomalyco/opencode/issues/39170) | **Desktop: inline LaTeX (`$...$`) not rendered** | Block math (`$$...$$`) works; inline shows raw source. Windows Desktop app. | 5 comments, 2👍 — UX regression for math-heavy workflows |
| [#50678](https://github.com/anomalyco/opencode/issues/50678) | **MiMo 2.6 Flash unusable — infinite tool loops** | Model spams `Glob`/`Find`/`Read` calls repeatedly after a few iterations. | 2 comments — model-specific regression |
| [#51022](https://github.com/anomalyco/opencode/issues/51022) | **ripgrep auto-download ignores Windows system proxy** | Download fails silently behind WinINET proxy; never retries until restart. | Filed today — Windows enterprise blocker |
| [#50751](https://github.com/anomalyco/opencode/issues/50751) | **Subagent completion notification never reaches parent** | Background subagent finishes (persisted in UI/SQLite) but parent waits indefinitely. | 2 comments — orchestration reliability gap |
| [#50299](https://github.com/anomalyco/opencode/issues/50299) | **New Console is English-only (v1 had 18 locales)** | Regression: Console at opencode.ai/console/ dropped all localizations. | 1 comment — i18n regression for global users |

---

## 4. Key PR Progress (Top 10 by Scope & Impact)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#51021](https://github.com/anomalyco/opencode/pull/51021) | **feat(core)** | **Fit output limits to context window** — closes #46595, #47398. V2 now sends `max_tokens` per provider (was fixed 32k Anthropic-only; others got 4k default). |
| [#51026](https://github.com/anomalyco/opencode/pull/51026) | **fix(opencode)** | **Resolve Copilot models to bundled SDK & Responses endpoint** — fixes Grok/Gemini/MAI Code routing to `/responses` (was only `gpt-5+`). |
| [#51017](https://github.com/anomalyco/opencode/pull/51017) | **fix(ai)** | **Apply Gemini/Kimi schema handling by model name** — follows up #51009; ensures `parametersJsonSchema` used for OpenAI-compatible Gemini endpoints. |
| [#51029](https://github.com/anomalyco/opencode/pull/51029) | **feat(core)** | **MCP Code Mode defaults** — disables PostHog's server-side Code Mode (nested Code Mode broke tool calls). |
| [#50517](https://github.com/anomalyco/opencode/pull/50517) | **fix(ui)** | **Desktop theme fixes** — closes #50500: background seeds, light-mode contrast, token typos across `packages/ui`. |
| [#51025](https://github.com/anomalyco/opencode/pull/51025) | **feat(tui)** | **Show model token cost in subagent picker & shell durations** — TUI now surfaces per-agent cost estimates. |
| [#50364](https://github.com/anomalyco/opencode/pull/50364) | **fix(app)** | **Preserve settings route on refresh** — encodes scope/tab/subtab in URL; restores exact page after reload. |
| [#50892](https://github.com/anomalyco/opencode/pull/50892) | **feat(tui)** | **Show elapsed time on tool parts** — closes #50891; adds timing to tool calls in TUI (was static spinner only). |
| [#50188](https://github.com/anomalyco/opencode/pull/50188) | **feat(core)** | **Note renamed legacy tools when migrating V1 sessions** — warns models calling `bash`/`task`/`todowrite` or old `filePath` args post-migration. |
| [#51019](https://github.com/anomalyco/opencode/pull/51019) | **fix(opencode)** | **Retry instance state after failed lookup** — closes #50906; fixes `ScopedCache` poisoning from bad config (e.g., command frontmatter schema error). |

---

## 5. Feature Request Trends

| Trend | Evidence (Issues) |
|-------|-------------------|
| **V2 plugin migration tooling & docs** | #48365 (V1 plugins unloadable, no path), #42878 (v1 module shape fails silently), #50590 (function default export rejected), #50172 (v1 loader never falls back to legacy exports) |
| **Localization / i18n completeness** | #50299 (Console English-only, v1 had 18 locales), #51016 (compaction summary & slash-command menu hardcoded English), #51013 (PR: use recognized dev terminology in zh.ts) |
| **MCP integration reliability** | #51023 (tools not exposed despite healthy connection), #51029 (PostHog nested Code Mode), #48925 (ACP agent stuck on PowerShell scripts) |
| **Model provider parity** | #47398 (`max_tokens` missing for OpenAI-compatible), #38893 (native runtime blocks Google/Bedrock/Azure/OpenRouter), #50678 (MiMo 2.6 Flash loops), #51026 (Copilot routing) |
| **Desktop polish** | #39170 (inline LaTeX), #38898 (window buttons on Arabic Windows), #51028 (renderer unresponsive on launch), #50500 (theme/contrast bugs) |

---

## 6. Developer Pain Points (Recurring Frustrations)

1. **V2 migration is a breaking-change minefield** — Plugins, configs, sessions, and custom commands all fail silently or with cryptic errors. No automated migration, no compat layer, sparse docs. (#48365, #42878, #50590, #50172, #50188)

2. **Silent failures in core integrations** — MCP tools not exposed (#51023), ripgrep download fails without retry (#51022), subagent completion notifications lost (#50751), instance state cache poisoned by one bad file (#51019). Debugging is hard; logs often absent.

3. **Model provider inconsistency** — `max_tokens` handling differs per provider (#47398), native runtime hard-blocks non-OpenAI providers (#38893), Copilot endpoint routing broken for non-GPT models (#51026), Gemini schema format mismatched on gateways (#51017).

4. **Desktop stability regressions** — Renderer freezes on launch (#51028), theme/contrast bugs in light mode (#50500), window button layout broken on non-English Windows (#38898), inline math broken (#39170).

5. **Billing/Console trust issues** — Paid Go workspace vanished after migration (#50201); users cannot see subscriptions/invoices. Direct revenue & trust impact.

6. **Resource leaks in long-running processes** — Temp `.so` accumulation in `/tmp` since May (#28089, 11 comments, 10👍) indicates insufficient soak testing on Linux servers.

---

*Generated from GitHub data for anomalyco/opencode on 2026-09-24. All links point to live issues/PRs.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-09-24

## 1. Today's Highlights

No new releases shipped in the last 24 hours. The community is actively resolving Windows shell resolution non-determinism (#9361), CJK IME input regressions (#9497), and a critical clipboard regression on Linux containers (#9688). Several provider integration fixes landed for OpenAI Responses, Mistral, and Bedrock, alongside TUI rendering fixes for the `read` tool.

---

## 2. Releases

**None** — No new versions published in the last 24 hours.

---

## 3. Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#7885](https://github.com/earendil-works/pi/issues/7885) | **npm search not indexing new pi-packages** (closed) | Blocks new packages from appearing on pi.dev/packages gallery; affects discoverability for all package authors. | 14 comments — high engagement; root cause appears to be npm search indexing lag. |
| [#9361](https://github.com/earendil-works/pi/issues/9361) | **Windows: `shellPath` ignored non-deterministically with extensions** (open) | Extensions cause configured shell to be bypassed, falling back to WSL `bash.exe` — breaks user expectations and script reliability. | 10 comments; Windows users report inconsistent behavior. |
| [#5294](https://github.com/earendil-works/pi/issues/5294) | **Request timeout with llama.cpp despite `http timeout = false`** (closed) | Long-running local models still time out; suggests a hidden timeout path not controlled by the setting. | 9 comments; workaround involves backend config. |
| [#9688](https://github.com/earendil-works/pi/issues/9688) | **Clipboard copy regression in containers** (closed, 2 👍) | OSC 52 copy now only triggers on SSH detection, breaking clipboard in interactive containers (common CI/devbox workflow). | 8 comments; fix reverted the SSH gate. |
| [#8643](https://github.com/earendil-works/pi/issues/8643) | **Bedrock: OpenAI models reject images in `toolResult.content`** (open, 1 👍) | Images nested in tool results fail on Bedrock OpenAI models; requires hoisting to sibling user blocks (like `openai-completions` does). | 6 comments; fix ready on fork. |
| [#9497](https://github.com/earendil-works/pi/issues/9497) | **Windows CJK IME input lag / missing candidate window** (open) | IME nearly unusable on Windows; `showHardwareCursor` workaround exists but isn't default. | 4 comments; affects all CJK users. |
| [#9886](https://github.com/earendil-works/pi/issues/9886) | **`clearQueue()` silently destroys extension custom messages** (open) | Extensions using `sendCustomMessage()` lose queued messages on clear — breaks "edit queue" patterns. | 4 comments; data-loss risk. |
| [#9098](https://github.com/earendil-works/pi/issues/9098) | **Expose prompt disposition in RPC responses** (open) | Extensions can't distinguish handled/queued/started prompts — limits automation and UI feedback. | 5 comments; small API addition, high leverage. |
| [#9986](https://github.com/earendil-works/pi/issues/9986) | **Abort during tool execution leaves unanswered tool calls** (open) | Tail tool calls vanish from history on abort; no error surfaced — corrupts session state. | 3 comments; regression in abort handling. |
| [#9932](https://github.com/earendil-works/pi/issues/9932) | **`before_agent_start` forced prompt keeps removed tools** (open) | Tool set reconciliation happens after forced system prompt capture — stale tools advertised to model. | 3 comments; ordering bug in extension pipeline. |

---

## 4. Key PR Progress (Top 10 by Significance)

| # | PR | Summary | Status |
|---|----|---------|--------|
| [#9988](https://github.com/earendil-works/pi/pull/9988) | **Fix `read` tool renderer: coerce line-range args to numbers** | Models send `offset`/`limit` as strings → string concat (`25 + "13" - 1` = `2512`). `Number()` coercion fixes TUI display. | Closed |
| [#9459](https://github.com/earendil-works/pi/pull/9459) | **Prefer recorded `model_change` on session resume** | Fixes resume restoring wrong model when provider echoes different name; uses explicit `model_change` events over assistant message echo. | Closed |
| [#9948](https://github.com/earendil-works/pi/pull/9948) | **Unify image & classifier model infrastructure** | Large refactor to support non-chat model types (embeddings, classifiers, image gen) in the model system. | Closed |
| [#6881](https://github.com/earendil-works/pi/pull/6881) | **Use provider-reported cost in responses** | Reads `usage.cost` / `cost_details.upstream_inference_cost` from OpenAI-compatible responses; falls back to catalog rates. | Open (in progress) |
| [#9901](https://github.com/earendil-works/pi/pull/9901) | **Expose provider stream events to extensions** | Adds `onProviderStreamEvent` through pi-ai → agent core → coding-agent extensions; closes #9784. | Closed |
| [#9956](https://github.com/earendil-works/pi/pull/9956) | **Paint user message on Enter before preflight** | Eliminates Enter→bubble lag by rendering optimistic user bubble immediately, before `session.prompt` preflight. | Closed |
| [#9970](https://github.com/earendil-works/pi/pull/9970) | **Add PkgDiet dependency guardrail skill** | Pre-install npm package analysis via PkgDiet MCP server; evaluates risk before `npm install`/`yarn add`. | Closed |
| [#9763](https://github.com/earendil-works/pi/pull/9763) | **Add pi.dev compatibility check to PR gate** | Makes PR gate the single authorization boundary; dispatches approved commits to pi.dev using `PI_DEV_PAT`. | Closed |
| [#9977](https://github.com/earendil-works/pi/pull/9977) | **Export durable storage conformance suite** | Publishes `@earendil-works/pi-durable/testing` with runner-agnostic cases + Vitest/Jest adapter for storage implementations. | Closed |
| [#7948](https://github.com/earendil-works/pi/pull/7948) | **Defer extension runtime reloads** | Replaces `await ctx.reload()` with fire-and-forget `ctx.requestReload()`; coalesces and defers until safe points. | Open |

---

## 5. Feature Request Trends

1. **Model & Provider Extensibility** — Multiple issues/PRs around Bedrock image handling (#8643), Mistral reasoning deltas (#9674), Ollama `max` reasoning level (#9981), GPT-6 context limits (#9964), and provider cost reporting (#6881). The ecosystem is pushing for first-class support of diverse provider quirks.

2. **Extension & RPC Surface Area** — Requests to expose stream events (#9901), prompt disposition (#9098), and fix extension message queue semantics (#9886, #9932) show developers building richer integrations needing finer-grained control.

3. **Session & State Reliability** — Resume model restoration (#9243, #9459), abort cleanup (#9986, #9941), and fork-from-current-point (#9533) indicate workflows around long-running, interruptible sessions are maturing.

4. **Configuration as Code** — PR #9880 publishing JSON Schemas for all config files (`models.json`, `settings.json`, `keybindings.json`, themes) enables tooling, validation, and documentation generation.

5. **Cross-Platform Parity** — Windows shell resolution (#9361), CJK IME (#9497), and clipboard/container issues (#9688, #9786) remain active pain points for non-macOS/Linux-native users.

---

## 6. Developer Pain Points (Recurring Frustrations)

| Area | Specific Pain | Frequency |
|------|---------------|-----------|
| **Windows Shell & Terminal** | `shellPath` ignored non-deterministically; CJK IME broken without undocumented flag; legacy Ctrl-key fallbacks conflict with Kitty protocol | 3 issues in 24h |
| **Container / Headless Clipboard** | OSC 52 gated on SSH detection breaks clipboard in devcontainers, CI, SSH-less containers | 2 issues (#9688, #9786) |
| **Abort / Interrupt Semantics** | Tool calls vanish on abort; steer messages lost during unwind; queue clear destroys extension messages | 4 issues (#9986, #9941, #9932, #9886) |
| **Model Config Drift** | `samplingParams` dropped on tool turns (#9506); reasoning levels clamped silently (#9981); provider cost ignored (#6881) | 3+ issues |
| **Session Resume Fidelity** | Wrong model restored due to provider echo; fork only from history not current point | 2 issues (#9243, #9533) |
| **Extension Reload Safety** | Reload during tool execution loses context; no safe reload API | 2 PRs (#7948, #9222) addressing |

---

*Generated from `earendil-works/pi` GitHub data (issues & PRs updated 2026-09-23 → 2026-09-24).*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-09-24

## 1. Today's Highlights
The project shipped a nightly release (v0.24.4-nightly) with a critical fix for the deferred-tool bridge and updated CUA driver binaries across macOS, Linux, and Windows. Simultaneously, the team is aggressively optimizing one-shot headless CLI performance—eliminating double-boot, skipping interactive-only probes, and honoring privacy opt-outs under `--bare`—while advancing a major architectural proposal for a dual-path Managed Agent architecture with durable sessions and A2A agent sharing.

---

## 2. Releases

### v0.24.4-nightly.20260923.d0cd622a68
**Link:** [Release Page](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.4-nightly.20260923.d0cd622a68)

**Key Changes:**
- **Fix(core,docs):** Corrected stale/untested behavior in the deferred-tool bridge ([#12355](https://github.com/QwenLM/qwen-code/pull/12355))
- **CUA Driver v0.20.11:** Prebuilt binaries vendored under `packages/cua-driver`
  - **macOS:** Codesigned + notarized universal binary + `QwenCuaDriver.app`
  - **Linux:** Unsigned (x86_64 + arm64, glibc 2.31 floor)
  - **Windows:** Unsigned UIAccess worker + native SDK payload (x86_64 + arm64)

---

## 3. Hot Issues (Top 10 by Impact & Activity)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| **#4063** | **[refactor: core + cli 架构 Review — 12 structural issues](https://github.com/QwenLM/qwen-code/issues/4063)** | Comprehensive architecture audit identifying 14 structural problems (P0: `ContentGenerator` tied to `@google/genai` across 136 files; P1: circular deps, God classes, leaky abstractions). Sets roadmap for core refactoring. | 👍 1 • 12 comments • *In progress* |
| **#12380** | **[proposal(serve): Managed Agent dual-path architecture](https://github.com/QwenLM/qwen-code/issues/12380)** | Defines staged delivery for managed agents: decouples model inference from tool provisioning, adds durable session ownership, workspace bindings, recoverable tool execution, and WebSocket stability. Foundation for multi-agent/platform distribution. | 11 comments • *Needs discussion* • P2 |
| **#12553** | **[bug(session): project rename/move breaks saved sessions](https://github.com/QwenLM/qwen-code/issues/12553)** | Sessions scoped to absolute project path become unreachable after rename/move—even with full session UUID. Blocks workspace portability. | 4 comments • P2 • *Needs discussion* |
| **#12405** | **[perf(cli): one-shot headless follow-ups — startup latency & memory](https://github.com/QwenLM/qwen-code/issues/12405)** | After PTY removal (RSS 660→434 MB), remaining overhead is startup latency and CLI process baseline. Drives #12598, #12599, #12600, #12602, #12603. | 4 comments • P2 |
| **#12596** | **[feat(external-context): Out-of-the-box Mem0 provider](https://github.com/QwenLM/qwen-code/issues/12596)** | Adds zero-config Mem0 integration (baseUrl + API key). Resolves direction from #10113: not admin-only, but user-installable package. | 3 comments • P2 • *Needs discussion* |
| **#12589** | **[Feature: optional System One Decision Gate (von-install + /superfast)](https://github.com/QwenLM/qwen-code/issues/12589)** | Proposes lightweight classifier to route simple decisions (chat vs tool, urgency) without waking full LLM. Could drastically cut latency for trivial turns. | 3 comments • P3 • *Needs discussion* |
| **#12591** | **[Label replayed images by user turn](https://github.com/QwenLM/qwen-code/issues/12591)** | Follow-up to #12549: replayed images need turn-boundary labels so model knows which images belong to which historical turn. Critical for long-context accuracy. | 3 comments • P2 |
| **#12584** | **[Runtime Broker leaves lapsed tool execution unfenced](https://github.com/QwenLM/qwen-code/issues/12584)** | Java SDK bug: tool execution stuck in `CANCEL_REQUESTED` with expired lease blocks session release until manual cancel. Reliability risk for daemon users. | 3 comments • P2 |
| **#12597** | **[True "disable auto-compaction" switch](https://github.com/QwenLM/qwen-code/issues/12597)** | Requests explicit `context.autoCompaction.enabled: false` to skip all three tiers (warn/auto/hard). Manual `/compact` still works. | 1 comment • *Needs triage* |
| **#11997** | **[bug(web-shell): label-only composer tags have zero padding-right](https://github.com/QwenLM/qwen-code/issues/11997)** | Visual regression in Web Shell/Desktop: read-only composer tags render text flush against right border. Affects every sent message. | 4 comments • P2 |

---

## 4. Key PR Progress (Top 10 by Impact)

| # | PR | Description | Status |
|---|----|-------------|--------|
| **#12602** | **[perf(cli): stop one-shot runs from booting CLI twice](https://github.com/QwenLM/qwen-code/pull/12602)** | Eliminates double `execve` on explicit one-shot (`qwen -p …`) when no boot-time vars changed. Uses Node compile cache. Major startup win. | *Open* • Self-reviewed |
| **#12603** | **[perf(cli): skip interactive-only probes on headless startup](https://github.com/QwenLM/qwen-code/pull/12603)** | Headless/ACP runs no longer build `/ide` command (process-tree walk) or resolve `auto` theme synchronously. Cuts latency. | *Open* • Self-reviewed |
| **#12604** | **[fix(cli): honor usage-statistics opt-out under --bare](https://github.com/QwenLM/qwen-code/pull/12604)** | `--bare` now respects `privacy.usageStatisticsEnabled: false` from system/user settings. Fixes #12600. | *Open* • Self-reviewed |
| **#12582** | **[feat(agents): run agents on other computers, bind Codex/Claude Code, share over A2A](https://github.com/QwenLM/qwen-code/pull/12582)** | Stacked on #11206: adds remote runtimes (single-use join tokens), external agent binding (Codex/Claude Code), and A2A sharing. | *Open* |
| **#11206** | **[feat(mesh): persistent shared-thread agent collaboration](https://github.com/QwenLM/qwen-code/pull/11206)** | Persistent workspace agent identities on shared threads: create/assign work, address agents, interject, inspect attributed results, cancel, resolve blockers. | *Open* |
| **#12549** | **[fix(core): label each reattached image as replayed/OUTDATED](https://github.com/QwenLM/qwen-code/pull/12549)** | Every replayed image gets inline label: `Image #<id>: replayed snapshot from earlier in this session, may be OUTDATED`. Addresses context confusion. | *Open* |
| **#12492** | **[feat(cli): agent-prepared Batch API workflow (/batch-api)](https://github.com/QwenLM/qwen-code/pull/12492)** | Adds `qwen batch submit|status|fetch|cancel` + agent-prepared workflow: user types `/batch-api <task>`, agent judges fit, prepares batch. | *Open* |
| **#12601** | **[fix(web-shell): stop rendering empty args/input JSON in tool cards](https://github.com/QwenLM/qwen-code/pull/12601)** | Cleans up tool-card rendering for shell-ish tools (non-`run_shell_command`), MCP tools, and edit-approval diffs. Desktop app benefits. | *Open* |
| **#12559** | **[fix(cli): match ink's OpenTUI popup geometry & completion truncation](https://github.com/QwenLM/qwen-code/pull/12559)** | OpenTUI renderer now mirrors ink's fixed/clipped popup region and clips tall pickers instead of pushing composer off-screen. | *Open* • Autofix takeover |
| **#12593** | **[ci(web-shell): give E2E Smoke 30 minutes](https://github.com/QwenLM/qwen-code/pull/12593)** | Extends Web Shell E2E smoke job from 20→30 min (184 tests, 7.5 min setup). Prevents false failures on passing PRs. | **Closed** |

---

## 5. Feature Request Trends

| Trend | Evidence (Issues/PRs) | Trajectory |
|-------|----------------------|------------|
| **Managed/Remote Agent Architecture** | #12380 (dual-path), #11206 (mesh), #12582 (remote runtimes + A2A), #12595 (message routing) | **High** — Multi-agent, cross-machine, platform-agnostic direction |
| **Session Durability & Portability** | #12553 (project move breaks sessions), #12380 (durable ownership), #12591 (turn-boundary labels) | **High** — Sessions as first-class, movable artifacts |
| **External Memory/Context Providers** | #12596 (Mem0 provider), #10113 (referenced), #12585 (ACP resource persistence) | **Medium-High** — Pluggable long-term memory |
| **Performance: Headless/One-Shot Optimization** | #12405, #12598, #12599, #12600, #12602, #12603 (6 PRs in 24h) | **Very High** — Concerted push for CLI startup latency |
| **Model Switching & Tiered Inference** | #12589 (System One gate), #12461 (per-model concurrency caps) | **Medium** — Cost/latency optimization via routing |
| **Privacy & Telemetry Control** | #12600/#12604 (usage stats opt-out), #12587 (Desktop update opt-out), #12597 (auto-compaction disable) | **Medium** — Granular user control over data/behavior |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Representative Items |
|------------|-----------|----------------------|
| **Session fragility on workspace changes** | High | #12553 (rename/move breaks sessions), #12591 (replayed images lack turn context) |
| **One-shot CLI startup latency** | Very High | #12405 + 5 follow-up PRs (#12598, #12599, #12600, #12602, #12603) all targeting this |
| **Web Shell/Desktop UI regressions** | Medium | #11997 (padding), #12601 (empty tool cards), #12593 (E2E timeout) |
| **MCP integration instability on Windows** | Medium | #11460 (filesystem hangs after first interaction), #12258 (larger apps, scoped tools) |
| **Auto-compaction lack of control** | Emerging | #12597 (explicit disable switch requested) |
| **Daemon/Runtime Broker reliability** | Medium | #12584 (lapsed tool execution blocks session), #12461 (concurrency cap enforcement) |
| **Model selection UX for deprecated models** | Low | #12594 (reject discontinued OAuth models with clear guidance) |

---

*Digest generated from GitHub data as of 2026-09-24. All links point to live GitHub items.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-09-24

## 1. Today's Highlights
The project is in active feature-planning mode for the 0.10.1/0.10.2/0.11 release series, with **33 new issues filed today** by the maintainer (Hmbown) detailing a comprehensive overhaul of the approvals system, auto-review engine, child-agent authority model, and Full Access UX. No new releases shipped, but multiple PRs are landing fixes for 0.10.1 readiness (deferred tool execution, child approval keys, undo rollback, Windows paste protection). The volume of structured design issues signals a major architectural push on agent permissions and review workflows.

## 2. Releases
**None in the last 24h.** The team is targeting 0.10.1 (source qualification tracked in [#6458](https://github.com/Hmbown/Codewhale/issues/6458)) followed by 0.10.2 (approvals program) and 0.11 (child-agent authority intersection).

## 3. Hot Issues (Top 10 by Noteworthiness)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#6310](https://github.com/Hmbown/Codewhale/issues/6310) | **ACP follow-up: empty terminal responses & Full Access discovery** | Root-cause fix verified in nightly; unblocks ACP integration for 0.10.0. | 10 comments, active verification |
| [#6467](https://github.com/Hmbown/Codewhale/issues/6467) | **Approvals program: never lost, never silently decided** | Parent issue ratifying the entire approvals redesign (child approvals, Full Access, auto-review, grants). | Foundational for 0.10.2 |
| [#6488](https://github.com/Hmbown/Codewhale/issues/6488) | **Agent affordances: six harness gaps from model-side review** | Systematic audit of every place the harness is ambiguous/silent/lossy from the model's perspective. | Ratified 2026-09-23 |
| [#6481](https://github.com/Hmbown/Codewhale/issues/6481) | **0.11 A1: one Engine-owned approval grant store** | Consolidates three disjoint grant stores (TUI, runtime, network) into a single source of truth. | Architectural consolidation |
| [#6475](https://github.com/Hmbown/Codewhale/issues/6475) | **0.10.2 G1: Auto-Review separates "failed" from "denied"** | Review failures fall back to human instead of masquerading as safety verdicts. | Trust/safety critical |
| [#6477](https://github.com/Hmbown/Codewhale/issues/6477) | **0.10.2 G3: Auto-Review risk × authorization schema** | Formalizes reviewer output schema with host-side mapping table for consistent decisions. | Review quality |
| [#6473](https://github.com/Hmbown/Codewhale/issues/6473) | **0.10.2 M1+M2: confirm every entry into Full Access** | Adds confirmation + per-session default with "Keep on for this repo" — addresses sandbox bypass UX. | Security UX |
| [#6491](https://github.com/Hmbown/Codewhale/issues/6491) | **Per-session scratch directory named to the model** | Gives models a dedicated `~/.codewhale/sessions/<id>/scratch/` instead of littering `/tmp` or repo. | Developer ergonomics |
| [#6490](https://github.com/Hmbown/Codewhale/issues/6490) | **Spend & context visible to model; one notice before auto-compaction** | Exposes token budget, cost, remaining spend; warns before memory compaction. | Transparency |
| [#6489](https://github.com/Hmbown/Codewhale/issues/6489) | **Decisions waiting on you: non-blocking ask with default** | New `request_user_input {blocking:false, default_option}` surfaces on "needs you" UI. | Non-blocking UX |

## 4. Key PR Progress (Top 10 by Impact)

| PR | Status | Summary |
|----|--------|---------|
| [#6498](https://github.com/Hmbown/Codewhale/pull/6498) | OPEN | **feat(approvals): child agent approval never lost** — owner-labelled card, footer, agent wait wakes. Fixes #6468/#6464/#6465/#6310. |
| [#6497](https://github.com/Hmbown/Codewhale/pull/6497) | OPEN | **fix(agents): refuse spawns that lose requested tools** — structured error when allowlist narrowing leaves zero tools. Fixes #6493. |
| [#6496](https://github.com/Hmbown/Codewhale/pull/6496) | OPEN | **fix(runtime): approved `run_verifiers` no longer hangs** — approval cards now state what will happen. 0.10.1 blocker. |
| [#6483](https://github.com/Hmbown/Codewhale/pull/6483) | OPEN | **fix(tui): let undo roll back files for the turn it is undoing** — fixes VS Code session document ID mismatch causing 409 on revert. |
| [#6437](https://github.com/Hmbown/Codewhale/pull/6437) | OPEN | **feat(tools): run well-formed first calls to deferred tools** — eliminates round-trip "retry with schema" for every deferred tool. Fixes #6494. |
| [#6431](https://github.com/Hmbown/Codewhale/pull/6431) | CLOSED | **fix(fleet): publish without two-link window on Linux/macOS** — avoids `open_file` rejecting racing readers during atomic publish. |
| [#6430](https://github.com/Hmbown/Codewhale/pull/6430) | CLOSED | **fix(fleet): preserve durable provider refusals during retries** — bounded retry-classification repair for 0.10.1 availability. |
| [#6428](https://github.com/Hmbown/Codewhale/pull/6428) | CLOSED | **fix(tui): retain raw-paste protection for Windows input** — startup-trust regression fix for Windows Terminal. |
| [#6424](https://github.com/Hmbown/Codewhale/pull/6424) | CLOSED | **fix(models): retain DeepSeek Flash image input in offline catalogs** — corrects text-only misclassification. |
| [#6440](https://github.com/Hmbown/Codewhale/pull/6440) | OPEN | **build: hold one machine-wide lock per dev Cargo build** — coordinates multi-agent builds on memory-constrained Mac. |

## 5. Feature Request Trends (from Issue Cluster Analysis)

1. **Unified Approvals & Grants Architecture** — 8+ issues (#6467, #6471–#6474, #6477–#6481, #6485) converging on a single Engine-owned grant store, child approvals that survive restart, and Full Access with explicit scope/badges.
2. **Auto-Review as First-Class Gateway** — 5 issues (#6475–#6480) designing risk×authorization schema, trust-boundary context, circuit breaker, override flow, and cheap-model routing.
3. **Child Agent Authority = Intersection with Live Owner** — #6485 mandates dynamic re-derivation on owner posture change (spawn, resume, replacement, Fleet start).
4. **Model-Facing Transparency** — #6490 (spend/context visibility), #6491 (scratch dir), #6492 (machine receipts), #6489 (non-blocking asks) all push structured data to the model.
5. **Deferred/First-Call Tool UX** — #6437/#6494 eliminate wasted round-trips; #6493 refuses spawns that silently lose tools.
6. **Cross-Surface Consistency** — ACP, TUI, runtime, mobile/app all aligning on approval semantics (#6470, #6471, #6474).

## 6. Developer Pain Points (Recurring Themes)

| Pain Point | Evidence |
|------------|----------|
| **Approval state loss across restarts/surfaces** | #6467 (parent), #6472 (grants survive restart), #6471 (ACP divergence), #6468 (child key scheme broken) |
| **Silent tool loss during agent spawn** | #6493 (allowlist narrowing leaves zero tools), #6497 (fix: refuse spawn) |
| **Auto-Review opacity & failure modes** | #6475 (failure ≠ deny), #6476 (reviewer lacks auth context), #6478 (circuit breaker needed) |
| **Full Access UX is dangerous/invisible** | #6473 (no confirm, durable by default), #6470 (badge required), #6310 (ACP bypasses safety floors) |
| **Model lacks runtime context** | #6490 (no spend/budget visibility), #6491 (no scratch dir), #6492 (child reports are prose-only) |
| **Deferred tool first-call tax** | #6437/#6494 (every deferred tool costs a retry round-trip) |
| **Windows paste/input regressions** | #6428 (raw-paste protection lost), #6424 (DeepSeek Flash image input dropped) |

---

*Digest generated from GitHub API data for Hmbown/Codewhale (DeepSeek TUI) covering 2026-09-24. Links point to live issues/PRs.*

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*