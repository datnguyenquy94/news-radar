# AI CLI Tools Community Digest 2026-09-18

> Generated: 2026-09-18 04:20 UTC | Tools covered: 10

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

# Cross-Tool Comparison Report: AI CLI Ecosystem (2026-09-18)

---

## 1. Ecosystem Overview

The AI CLI landscape is **fragmented but rapidly converging on three architectural pillars**: (1) **extensibility platforms** (Claude Code's Mods, OpenCode's skills, Gemini's subagents), (2) **multi-session durability** (session resume, checkpointing, background daemons), and (3) **enterprise-grade provider abstraction** (gateway/proxy routing, multi-cloud auth, MCP standardization). Windows parity has emerged as the universal Achilles' heel—every tool with a desktop/TUI component reports launch hangs, update failures, or terminal integration bugs. Safety guardrails for destructive filesystem operations are now table stakes after Codex's critical data-loss incident. Release cadences cluster around weekly stable + nightly channels, with hotfixes shipping within hours for regressions.

---

## 2. Activity Comparison (2026-09-18)

| Tool | Releases (24h) | Hot Issues Tracked | Key PRs Merged/Updated | Critical/Blocking Issues |
|------|----------------|-------------------|------------------------|---------------------------|
| **Claude Code** | 1 hotfix (v2.1.276) | 10 | 3 | Max plan session accounting (#38335, 857 comments) |
| **OpenAI Codex** | 1 stable (v0.155.0) + 1 alpha | 10 | 10 | Windows mass deletion (#46022), WSL project corruption (#41290) |
| **Gemini CLI** | 1 nightly (v0.62.0) | 10 | 10 (mostly security) | Subagent false success (#22323), Auto Memory secret leak (#26525) |
| **GitHub Copilot CLI** | 1 stable (v1.0.86) | 10 | 0 | Figma MCP registration (#4870), Windows VS Code file-lock (#4095) |
| **Kimi Code CLI** | 0 | 10 (9 closed in triage) | 1 open | Desktop config sync (#2649), subagent auth timeout (#2650) |
| **OpenCode** | 0 (v2.0.7 assets missing) | 10 | 10 | Legacy layout demand (#37012, 68 👍), MonoCode auth (#49580) |
| **Pi** | 0 | 10 | 10 | Compaction data loss (#9482), Windows shell ignored (#9361) |
| **Qwen Code** | 1 nightly (v0.24.0) | 10 | 10 | Heap OOM on glob (#12151), mobile WebShell jank (#6181) |
| **DeepSeek TUI** | 0 (v0.9.14 stabilization) | 10 | 3 | Session resume broken across processes (#6207, #6225) |
| **Grok Build** | 0 | 0 | 0 | No activity |

**Signal**: OpenAI Codex, OpenCode, Pi, and Qwen Code show highest PR velocity (10+ each). Claude Code and Codex have highest community engagement on single issues (857 and 77 comments respectively).

---

## 3. Shared Feature Directions (Cross-Tool Requirements)

| Requirement | Tools Demanding | Specific Needs |
|-------------|----------------|----------------|
| **Windows/WSL First-Class Parity** | Codex, Claude Code, Copilot CLI, DeepSeek TUI, Kimi | Launch performance (Codex 15-min `cua_node` extract), terminal integration (Claude always-on-top #85891), file-locking with VS Code (Copilot #4095), job-control/SIGTTIN (DeepSeek #6169), shell resolution (Pi #9361) |
| **Extensibility / Plugin Platform** | Claude Code, OpenCode, Gemini, Copilot CLI, Qwen | Mods function hooks (Claude #91870), skills/AGENTS.md auto-load (OpenCode #37629), subagent skill sharing (Gemini #21968), custom agent instruction files (Copilot v1.0.86), managed extension dir (Qwen #12147) |
| **MCP Protocol Maturity** | Claude Code, Copilot CLI, Kimi, OpenCode, Pi | Draft-07 `outputSchema` (Claude #86142), stdio discovery timeout (Copilot #4753), schema validation (Kimi #734), LiteLLM stream parsing (OpenCode #25487), provider error opacity (Pi #9482) |
| **Session Durability & Resume** | DeepSeek, OpenCode, Qwen, Gemini, Pi | Cross-process session ownership (DeepSeek #6207), session visibility (OpenCode #41855), mutation race protection (Qwen #12136), `/compress` persistence (Gemini #21335), compaction integrity (Pi #9391, #9602) |
| **Safety Guardrails for Destructive Ops** | Codex, Claude Code, Gemini, Pi | Hard confirmation + recovery gate (Codex #33624), permission "always allow" persistence (Claude #47180), Auto Memory secret redaction timing (Gemini #26525), empty-body 400 misclassification (Pi #9482) |
| **Provider Abstraction / Gateway Support** | Claude Code, Copilot CLI, Pi, OpenCode, Kimi | Native UI for inference routing (Claude #56606), per-agent provider selection (Copilot #4703), Azure Foundry Chat Completions (Pi #9714), ModelScope provider (DeepSeek #6299), proxy-compatible request signing (Claude v2.1.276) |
| **Background / Daemon Automation** | Qwen, OpenCode, Gemini, Codex | `qwen daemon` system service (#5768), event-driven wakeup (Codex #32188), subagent background extraction (Gemini #26522), `/loop` staged rollout (Qwen #5124) |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | OpenCode | Qwen Code | Pi | DeepSeek TUI | Kimi |
|-----------|-------------|--------------|------------|-------------|----------|-----------|-----|--------------|------|
| **Primary UX** | Desktop app + CLI | TUI + Web + CLI | CLI-first | CLI (VS Code extension sibling) | TUI + Web + VS Code | Web Shell + CLI | TUI + CLI | TUI-only | Desktop + CLI |
| **Extensibility Model** | Mods (function hooks, shipping soon) | BrowserSkill, MCP | Subagents + skills | Custom agents + MCP + instruction files | Skills + AGENTS.md + protected context | Extensions + Fleet Shepherd bots | Extensions + event hooks | Sub-agents (Fleet) | Skills + Desktop config |
| **Enterprise Focus** | High (Bedrock/SSO #28795, gateway UI) | Medium (Pro/Plus tiers, quota) | Medium (OAuth, sandbox) | High (GitHub Enterprise, repo MCP) | Low (community-driven) | High (managed extensions, air-gap) | High (Azure Foundry, LLM Gateway) | Low | Medium (proxy login, corporate) |
| **Multi-Session/Concurrency** | Remote control + Cowork | Project-based, WSL envs | Subagent delegation | Session resume + marketplace | Session rail + history + web attach | Channel-resident agents + daemon | Session compaction + journal | Session resume (broken) | Dream Memory + subagents |
| **Technical Differentiator** | Anthropic model integration, signed-in account display | Voice conversations, live reasoning, `cua_node` sandbox | Auto Memory (background extraction), AST-aware nav | GitHub repo context + marketplace | Legacy layout option, VS Code activity bar | Web Shell lane graph, Fleet automation | Provider config flexibility, compaction correctness | Sub-agent delegation depth, ModelScope | Desktop↔CLI config sync, OSC notifications |
| **Maturity Indicators** | v2.1.x, 857-comment billing bug | v0.155.x, critical data-loss regression | v0.62 nightly, security hardening sprint | v1.0.86, stable versioning | v2.0.7 (broken release), high layout churn | v0.24 nightly, heavy Web Shell invest | No versioning, PR-driven | v0.9.14, stabilization sprint | No recent release, triage mode |

**Target User Segments**:
- **Enterprise/Teams**: Copilot CLI, Claude Code, Qwen Code, Pi
- **Individual Power Users**: OpenCode, Codex, Gemini CLI
- **Automation/Background Workflows**: Qwen Code, OpenCode, Gemini CLI
- **Terminal Purists**: DeepSeek TUI, Pi, OpenCode
- **Cross-Platform Desktop**: Claude Code, Kimi, Copilot CLI

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|------|-------|----------|
| **High Momentum / Rapid Iteration** | **OpenAI Codex**, **Qwen Code**, **OpenCode**, **Pi** | 10+ PRs/24h, nightly + stable channels, major feature PRs landing (voice, Web Shell lane graph, session rail, Azure Foundry) |
| **High Engagement / Maturing** | **Claude Code**, **GitHub Copilot CLI** | Stable versioning (v2.1/v1.0), high-impact community issues (857/22 👍), enterprise feature requests, but slower PR velocity |
| **Stabilization / Hardening Phase** | **Gemini CLI**, **DeepSeek TUI** | Security-focused PRs (Gemini 10/10), v0.9.14 sprint (DeepSeek), fewer new features, more bug fixes |
| **Low Velocity / Early Stage** | **Kimi Code CLI**, **Grok Build** | Kimi: triage pass closing 11 bugs, 1 PR; Grok: no activity |

**Maturity Markers**:
- **Stable versioning + semver**: Copilot CLI (v1.0.86), Claude Code (v2.1.276)
- **Release artifact reliability**: **Gap**—OpenCode v2.0.7 missing assets, Codex Windows extraction, Kimi no release
- **Security hardening**: Gemini (10 security PRs), Pi (compaction/provider fixes), Qwen (glibc preflight)

---

## 6. Trend Signals for Technical Decision-Makers

| Trend | Evidence | Strategic Implication |
|-------|----------|----------------------|
| **MCP is the de facto tool protocol, but implementations diverge** | 7/9 tools report MCP issues (schema validation, discovery, auth, stdio timeout) | Invest in MCP compliance testing; expect fragmentation until spec stabilizes |
| **Windows is the compatibility tax** | Every desktop/TUI tool has Windows-specific blockers (launch, update, terminal, file-lock) | Budget 20-30% extra for Windows QA; prefer WSL2-targeted tools for Windows teams |
| **Session durability > raw model quality** | Session resume, compaction, checkpointing, background daemons top feature requests across tools | Evaluate tools on session architecture first; model access is commoditized |
| **Extensibility shifting from "plugins" to "composable agents/skills"** | Mods (Claude), Skills (OpenCode), Subagents (Gemini), Custom Agents (Copilot), Fleet (Qwen) | Build internal tooling on skill/agent abstractions, not raw prompt templates |
| **Provider abstraction layers maturing** | Gateway UI (Claude), per-agent provider (Copilot), Azure Foundry (Pi), ModelScope (DeepSeek), Bedrock (Claude) | Multi-cloud/provider strategy now feasible; avoid vendor lock-in at CLI layer |
| **Safety incidents drive governance features** | Codex data loss → hard confirmation gates; Pi empty-body 400 → destructive compaction; Gemini secret leak → redaction timing | Require audit trails, confirmation gates, and scope enforcement in any production deployment |
| **Web/TUI convergence** | Codex TUI + Web, OpenCode TUI + Web + VS Code, Qwen Web Shell flagship, Pi TUI + CLI | Web-based shells becoming first-class; evaluate for remote/team collaboration scenarios |
| **Background automation as differentiator** | Qwen daemon/loop, OpenCode event-driven, Gemini Auto Memory, Codex wakeup-on-completion | For CI/CD/automation workflows, prioritize tools with durable background execution models |

---

## Recommendation Matrix

| Use Case | Recommended Primary | Watch List |
|----------|---------------------|------------|
| **Enterprise team (GitHub-centric)** | GitHub Copilot CLI | Claude Code, Qwen Code |
| **Enterprise team (multi-cloud, custom infra)** | Pi, Qwen Code | Claude Code |
| **Individual developer (terminal-native)** | OpenCode, Pi | DeepSeek TUI, Gemini CLI |
| **Automation / background agents** | Qwen Code, OpenCode | Gemini CLI, Codex |
| **Remote / mobile / web-first** | Codex, Qwen Code | OpenCode |
| **Windows-only environment** | *None fully mature* | Copilot CLI (VS Code integration), Codex (WSL focus) |
| **Cutting-edge extensibility** | Claude Code (Mods), OpenCode (skills) | Qwen Code (Fleet), Copilot CLI (custom agents) |

---

*Report compiled from 2026-09-18 community digests across 9 active AI CLI repositories. Grok Build excluded (no activity). All links reference live GitHub issues/PRs.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-09-18 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking (Most-Active PRs)

| Rank | Skill | Functionality | Discussion Highlights | Status |
|------|-------|---------------|----------------------|--------|
| 1 | **[proofcore-contract-auditor](https://github.com/anthropics/skills/pull/1771)** | Automated static analysis of Solidity/Rust smart contracts; anchors cryptographic audit proofs on TON blockchain via ProofCore's zero-storage Merkle protocol | Newest submission (Sep 15); addresses Web3 security audit workflow | `OPEN` |
| 2 | **[md2video-audio](https://github.com/anthropics/skills/pull/1703)** | Compiles Markdown → professional MP4 videos with human-like voiceovers via Marp + TTS | Zero-cost video generation; directly usable for docs-to-video pipelines | `OPEN` |
| 3 | **[mcp-builder](https://github.com/anthropics/skills/pull/1742)** | Fixes `streamable_http_client` import + custom headers for MCP ≥2.0 | Fixes [#1668](https://github.com/anthropics/skills/issues/1668); unblocks MCP server authors on new SDK | `OPEN` |
| 4 | **[skill-creator trigger fix](https://github.com/anthropics/skills/pull/1769)** | Resolves `recall=0%` false negatives in trigger evaluation | Fixes [#1721](https://github.com/anthropics/skills/issues/1721); core skill-authoring tooling | `OPEN` |
| 5 | **[Hivemind](https://github.com/anthropics/skills/pull/1628)** | Delegates mechanical work to headless `opencode` workers (free models); Claude stays planner/reviewer | Zero-cost multi-agent orchestration; reduces expensive model context usage | `OPEN` |
| 6 | **[buffer-api](https://github.com/anthropics/skills/pull/1627)** | Portable Agent Skill for Buffer GraphQL API — schedule/manage/analyze social posts from any agent | Cross-agent compatibility (Claude, Cursor, Codex, n8n, etc.) | `OPEN` |
| 7 | **[skill-creator Windows fix](https://github.com/anthropics/skills/pull/1298)** | Isolates trigger evals; fixes `select()` on Windows pipes; handles runtime failures | Long-running (Jun–Sep); foundational for reliable skill authoring on Windows | `OPEN` |
| 8 | **[pyxel](https://github.com/anthropics/skills/pull/525)** | Retro game development in Python: deterministic headless runs, frame inspection, state checks | Niche but active (Mar–Sep); includes verification/debugging workflow | `OPEN` |

> **Note:** PR comment counts are unavailable (`undefined`); ranking based on recency, issue linkage, and ecosystem relevance.

---

## 2. Community Demand Trends (From Issues)

| Priority | Demand Signal | Evidence |
|----------|---------------|----------|
| 🔴 **Critical** | **Supply-chain security / namespace trust** | [#492](https://github.com/anthropics/skills/issues/492) (43 comments, 2👍): Community skills distributed under `anthropic/` namespace impersonate official skills — trust boundary abuse |
| 🟠 **High** | **Org-wide skill sharing & distribution** | [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8👍): No native sharing; manual file transfer via Slack/Teams required |
| 🟠 **High** | **Skill triggering reliability** | [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 7👍): `claude -p` never triggers skills (0% trigger rate in eval) |
| 🟡 **Medium** | **Duplicate skill bundles** | [#189](https://github.com/anthropics/skills/issues/189) (6 comments, 9👍): `document-skills` + `example-skills` install identical content |
| 🟡 **Medium** | **Context-window exhaustion** | [#1487](https://github.com/anthropics/skills/issues/1487) (4 comments): `claude-api` skill injects ~156k tokens in one call |
| 🟡 **Medium** | **Evaluation harness broken** | [#1390](https://github.com/anthropics/skills/issues/1390) (4 comments): `mcp-builder` evaluation scores 0/N against real MCP servers |
| 🟢 **Emerging** | **Symbolic memory compression** | [#1329](https://github.com/anthropics/skills/issues/1329) (9 comments): `compact-memory` skill for symbolic agent state notation |
| 🟢 **Emerging** | **Quality gates / reasoning pipelines** | [#1385](https://github.com/anthropics/skills/issues/1385) (4 comments, 1👍): 3-gate pipeline (Calibration → Adversarial Review → Verification) |

---

## 3. High-Potential Pending Skills (Active PRs Likely to Land)

| Skill | PR | Why It’s Poised to Merge |
|-------|-----|--------------------------|
| **mcp-builder MCP 2.0 compatibility** | [#1742](https://github.com/anthropics/skills/pull/1742) | Fixes concrete breaking change; unblocks ecosystem; minimal scope |
| **skill-creator trigger evaluation fix** | [#1769](https://github.com/anthropics/skills/pull/1769) | Fixes core authoring tooling; referenced by [#1721](https://github.com/anthropics/skills/issues/1721) |
| **office redlining UTF-8 decode** | [#1765](https://github.com/anthropics/skills/pull/1765) | Fixes [#1707](https://github.com/anthropics/skills/issues/1707); Windows/non-UTF-8 locale support |
| **claude-api model deprecation updates** | [#1607](https://github.com/anthropics/skills/pull/1607) | Fixes [#1603](https://github.com/anthropics/skills/issues/1603); routine maintenance, low risk |
| **mcp-builder evaluation model bump** | [#1724](https://github.com/anthropics/skills/pull/1724) | Updates default to `claude-sonnet-5`; aligns eval with current best model |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is not for new domain skills, but for *trustworthy distribution, reliable triggering, and sustainable authoring tooling* — the infrastructure layer that makes skills safe to share, dependable to invoke, and practical to maintain at scale.**

---

# Claude Code Community Digest — 2026-09-18

## Today's Highlights
A critical regression fix dropped in **v2.1.276** restoring functionality for users routing traffic through proxies/gateways via `ANTHROPIC_BASE_URL`. The community's top pain point remains **session limit exhaustion on Max plans** (#38335, 857 comments), while the **Mods extensibility framework** (#91870) continues gathering momentum as the next major platform evolution. Windows desktop stability issues—always-on-top window behavior and update failures—dominate platform-specific reports.

---

## Releases

### v2.1.276 (Hotfix)
**Fixed:** Every request failing with `400 … Input tag 'advisor_20260301'` when `ANTHROPIC_BASE_URL` points at a proxy or gateway — a regression introduced in 2.1.275.  
[Release Notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.276)

### v2.1.275
**Added:** Signed-in account display in Claude apps gateway sign-in (confirmation before credential save, visible in `/status`).  
**Added:** Send-now key binding (`Ctrl+Enter` / `Ctrl+X Ctrl+S`) to interrupt current turn and flush queued messages.  
[Release Notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.275)

---

## Hot Issues (Top 10 by Community Signal)

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| **[#38335](https://github.com/anthropics/claude-code/issues/38335)** Max plan session limits exhausted abnormally fast (CLI) | Core billing/consumption bug affecting paying customers since March; blocks heavy CLI workflows | 857 comments, 476 👍 — highest engagement in repo history |
| **[#91870](https://github.com/anthropics/claude-code/issues/91870)** Mods: make Claude 10x more extensible | Function hooks platform preview; "shipping in weeks" per maintainer update | 196 comments, 120 👍 — design discussion shaping vNext architecture |
| **[#85891](https://github.com/anthropics/claude-code/issues/85891)** Windows 11: Desktop window stays always-on-top | UX-breaking regression; no setting to disable; forces window management workarounds | 107 comments, 263 👍 — Windows parity gap |
| **[#69238](https://github.com/anthropics/claude-code/issues/69238)** No response from API when Advisor triggered (macOS) | Advisor tool (Opus 4.8) fails silently with retry loop; blocks automated workflows | 65 comments, 109 👍 — core tooling reliability |
| **[#86142](https://github.com/anthropics/claude-code/issues/86142)** MCP draft-07 `outputSchema` rejected client-side | Blocks MCP server upgrades; "unsupported dialect" error before dispatch | 53 comments, 14 👍 — **CLOSED** (fix likely in recent build) |
| **[#47180](https://github.com/anthropics/claude-code/issues/47180)** Cowork scheduled tasks ignore "Always allow" permissions | Permissions re-prompt on every scheduled run; breaks unattended automation | 38 comments, 47 👍 — permission persistence gap |
| **[#92099](https://github.com/anthropics/claude-code/issues/92099)** Windows Desktop errors on auto-update | Update process fails; leaves app in broken state | 15 comments, 18 👍 — Windows install reliability |
| **[#73638](https://github.com/anthropics/claude-code/issues/73638)** Session rename mid-tool-call corrupts transcript (400 on future prompts) | Data corruption edge case; transcript becomes unrecoverable | 13 comments, 1 👍 — subtle but severe |
| **[#28795](https://github.com/anthropics/claude-code/issues/28795)** AWS Bedrock + AWS SSO support in `claude remote-control` | Enterprise auth gap; blocks hybrid cloud deployments | 13 comments, 95 👍 — high enterprise demand |
| **[#56606](https://github.com/anthropics/claude-code/issues/56606)** Native UI to switch Desktop between 1P / 3P (Gateway) inference | No in-app toggle for inference backend; requires config edits | 12 comments, 13 👍 — UX gap for gateway users |

---

## Key PR Progress

| PR | Summary | Impact |
|----|---------|--------|
| **[#95198](https://github.com/anthropics/claude-code/pull/95198)** `mods/diff: type openPane's answer as unknown` | Types `$.ui.open` return as `Promise<unknown>` for forward compatibility with richer result object | Unblocks Mods diff pane evolution; no runtime change |
| **[#94847](https://github.com/anthropics/claude-code/pull/94847)** `diff: first edit opens pane only when it has a file to list` | Prevents empty diff pane on writes to ignored/outside-repo paths | UX polish — eliminates confusing empty states |
| **[#87077](https://github.com/anthropics/claude-code/pull/87077)** `fix(pr-review-toolkit): repair invalid YAML frontmatter in all agents` | Quotes agent description scalars containing `:` dialogue lines; fixes YAML parsing failures | Restores agent loading for PR review toolkit; foundational fix |

---

## Feature Request Trends (from Issues)

1. **Extensibility Platform (Mods/Hooks)** — #91870 leads; developers want first-class function hooks, skill composition, and plugin marketplace semantics.
2. **Gateway/Proxy First-Class Support** — #56606, #38335, v2.1.276 regression: native UI for inference routing, proxy-compatible request signing, and usage accounting.
3. **Enterprise Auth & Cloud Integrations** — #28795 (AWS Bedrock + SSO), plus implicit demand for OIDC, device auth, and token lifecycle management.
4. **Windows Desktop Parity** — #85891 (always-on-top), #92099 (update failures), #93627 (MSIX relaunch), #91311 (MCP widget export), #94732 (input refill bug).
5. **Permission & Automation Reliability** — #47180 (Cowork permissions), #95280 (`once: true` hooks ignored), #95279 (subagent monitor revival) — all point to "set-and-forget" automation gaps.
6. **MCP Protocol Maturity** — #86142 (draft-07), #94718 (optional params), #91311 (widget export) — schema validation and tool calling edge cases.

---

## Developer Pain Points (Recurring Themes)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Session/usage accounting opacity** | #38335 (857 comments): Max plan limits drain inexplicably; no visibility into token accounting | Critical |
| **Windows desktop instability** | 6+ issues in top 30: always-on-top, update failures, MSIX relaunch, input refill, MCP widget export, KB compatibility | High |
| **Permission system unreliability** | #47180 (Cowork), #95280 (hooks `once: true`), #95279 (subagent monitors) — "always allow" not honored, hooks persist, monitors don't revive | High |
| **MCP integration friction** | #86142 (schema dialect), #94718 (optional params), #91311 (widget export), #90471 (advisor_tool_result in VS Code) — client-side validation too strict, rendering gaps | Medium-High |
| **Gateway/proxy routing breaks** | v2.1.275 regression (fixed in .276), #56606 (no UI toggle), #38335 (usage tracking via proxy) — proxy users are second-class | Medium |
| **Transcript/session corruption edge cases** | #73638 (rename mid-call), #95262 (remote-control 401 lockout) — recovery requires session restart | Medium |
| **Mobile/remote-control flakiness** | #87003 (Android push never arrives), #95262 (token refresh deadlock) — remote workflows unreliable | Medium |

---

*Digest generated from GitHub data (anthropics/claude-code) as of 2026-09-18. Links point to live issues/PRs.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-09-18

## 1. Today's Highlights
OpenAI Codex shipped **v0.155.0 stable** with experimental voice conversations (`/voice`) and live reasoning summaries in the TUI status row. Meanwhile, a **critical data-loss incident** (#46022) on Windows—where Codex deleted hundreds of GB outside project scope—has surfaced as the highest-severity open issue. Windows/WSL stability remains the dominant pain point, with multiple reports of launch hangs, project corruption, and `cua_node` extraction blocking the UI for 10–15 minutes.

## 2. Releases
| Version | Type | Key Changes |
|---------|------|-------------|
| **[rust-v0.155.0](https://github.com/openai/codex/releases/tag/rust-v0.155.0)** | Stable | • Experimental `/voice` conversations with live transcripts & mic controls (enabled via `/experimental`)<br>• TUI: live reasoning summaries in status row + completion timestamps after turns |
| **[rust-v0.156.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.156.0-alpha.1)** | Alpha | Early next-cycle preview |
| **[rust-v0.155.0-alpha.9.2/16–18](https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.18)** | Alpha | Incremental fixes leading to stable |

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|---------------------|
| **[#46022](https://github.com/openai/codex/issues/46022)** | **CRITICAL DATA LOSS** — Windows: mass deletion of hundreds of GB outside project scope (unrelated projects, apps, Windows components) | Highest-severity safety regression; Full Access mode allowed destructive FS escape | 6 👍, 6 comments — urgent investigation needed |
| **[#41290](https://github.com/openai/codex/issues/41290)** | Windows/WSL: project creation & removal fail after switching Agent Environment to WSL | Blocks WSL workflow entirely; affects Pro subscribers on Windows 11 26200+ | **77 comments, 54 👍** — most-discussed issue |
| **[#42501](https://github.com/openai/codex/issues/42501)** | Windows 26.901.1978.0: UI never appears; `cua_node` staging fails to copy `node_repl.exe` | Post-update launch failure; multiple `ChatGPT.exe` processes but no window | 20 comments, 3 👍 |
| **[#41170](https://github.com/openai/codex/issues/41170)** | Windows first launch: no window for ~15 min while extracting bundled `cua_node` runtime | Synchronous extraction blocks event loop; terrible first-run experience | 14 comments, 1 👍 |
| **[#45835](https://github.com/openai/codex/issues/45835)** | Codex App repeatedly shows “Selected model is at capacity” despite healthy connectivity | False-positive rate-limit errors disrupting Pro Lite users | 13 comments, 3 👍 |
| **[#33624](https://github.com/openai/codex/issues/33624)** | Safety: require hard confirmation + recovery gate for bulk/home-directory deletion even in Full Access | Directly addresses #46022-class incidents; policy gap in destructive ops | 12 comments |
| **[#45317](https://github.com/openai/codex/issues/45317)** | Chrome BrowserSkill rejects API-key auth: “unsupported Codex auth method: apikey” | Breaks browser integration for API-key users; regression after update | 9 comments |
| **[#44364](https://github.com/openai/codex/issues/44364)** | Windows: Chrome control fails without TUN; `cua_repl` proxy workaround verified | Network stack dependency blocks browser automation on Windows | 8 comments, 3 👍 |
| **[#26199](https://github.com/openai/codex/issues/26199)** | Windows: `Ctrl+Shift+V` plain-text paste inserts clipboard content twice | Persistent UX papercut since June; affects Enterprise users | 8 comments, 6 👍 |
| **[#43811](https://github.com/openai/codex/issues/43811)** | Severe weekly quota depletion / possible usage accounting bug | Plus subscribers seeing abnormal quota burn; potential billing impact | 4 comments, 6 👍 |

## 4. Key PR Progress (Merged in Last 24h)

| PR | Area | Summary |
|----|------|---------|
| **[#46335](https://github.com/openai/codex/pull/46335)** | MCP / Environments | Keep MCP policy evaluation consistent with turn environments — snapshot env at turn start to prevent mid-turn tool availability changes |
| **[#46334](https://github.com/openai/codex/pull/46334)** | Platform Abstraction | Share `Platform` identity across path, network, and sandbox config; adds metadata parsing & native detection to `codex-utils-path-uri` |
| **[#46333](https://github.com/openai/codex/pull/46333)** | Windows Sandbox | Handle disabled sandbox accounts during cleanup — persist re-disable obligation for crash safety |
| **[#46332](https://github.com/openai/codex/pull/46332)** | TUI | Dim conversation recaps; remove cyan from `Next:`, keep italics/bold; snapshot test added |
| **[#46331](https://github.com/openai/codex/pull/46331)** | Network Policy | Defer socket/domain validation until after feature/managed composition — prevents false rejections |
| **[#46330](https://github.com/openai/codex/pull/46330)** | Async Utils | Move exponential backoff helper to `codex-async-utils` so `codex-cloud-config` can use it without `codex-core` runtime dep |
| **[#46328](https://github.com/openai/codex/pull/46328)** | Project Trust | Avoid persisting trust for projectless directories — prevents pre-approval of later-added config |
| **[#46324](https://github.com/openai/codex/pull/46324)** | Compaction | Broaden fallback to current model after model switch — compaction no longer stuck on previous model errors |
| **[#46319](https://github.com/openai/codex/pull/46319)** | CLI / Exec JSON | Preserve web-search actions & results in `codex exec --json` — explicit mapping for `open_page`/`find_in_page` |
| **[#46318](https://github.com/openai/codex/pull/46318)** | Auth / Gateways | Add OAuth credential management for model provider gateways — PKCE browser sign-in, loopback callbacks, encrypted keystore |

## 5. Feature Request Trends (from Issues)
1. **Windows/WSL First-Class Support** — Project lifecycle, launch performance, sandbox integration, and paste handling all need parity with macOS/Linux.
2. **Safety Guardrails for Destructive Ops** — Hard confirmations, recovery gates, and scope enforcement for bulk deletions (even in Full Access).
3. **Browser/Remote Integration Reliability** — Chrome extension auth, TUN dependency, Android remote voice, and native messaging manifests.
4. **Token/Quota Transparency** — Accurate usage accounting,(TokenBudget reminders with native compaction #36057), and rate-limit messaging.
5. **Session/Project Organization** — Project-level topics/grouped threads in sidebar (#30986), better project trust semantics.
6. **Event-Driven Background Exec** — Wakeup on completion instead of polling (#32188).

## 6. Developer Pain Points (Recurring Frustrations)
- **Windows Launch & Stability** — 10–15 min hangs on first launch/update (`cua_node` extraction), headless processes, update-icon stuck, WSL project corruption.
- **Silent Data Destruction** — #46022 reveals a trust gap: Full Access can escape project boundaries with no confirmation.
- **Browser Integration Fragility** — Chrome auth regression, TUN requirement, native messaging manifest missing on macOS 27.
- **Quota/Rate-Limit Opacity** — “Model at capacity” false positives, weekly quota accounting bugs, no visibility into consumption.
- **TUI/UX Regressions** — Progress bar downgrade (#17313), conversation recap styling, paste double-insert.
- **Remote/Voice Gaps** — Android remote voice broken while text works; voice feature experimental and Windows-only in 0.155.0.

---

*Generated from `openai/codex` GitHub data (releases, issues, PRs updated 2026-09-18). All links point to live GitHub items.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-09-18

## 1. Today's Highlights
The project shipped a nightly release (v0.62.0-nightly) addressing OAuth token persistence and a UI rendering guard. Meanwhile, the issue backlog highlights systemic friction in **subagent reliability** (hangs, false success reports, skill under-utilization) and **Auto Memory safety** (secret redaction timing, infinite retries). Security hardening continues across Windows sandbox validation, checkpoint path traversal, and environment-variable expansion collisions.

## 2. Releases
**v0.62.0-nightly.20260918.g9450ade79** — *2026-09-18*  
- **fix(core)**: Retain OAuth refresh token on refresh; make credential deletion idempotent ([#29339](https://github.com/google-gemini/gemini-cli/pull/29339))  
- **fix(ui)**: Guard against negative layout dimensions in border rendering ([#29339](https://github.com/google-gemini/gemini-cli/pull/29339))

## 3. Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent reports GOAL success after hitting MAX_TURNS** | Masks real failures; breaks trust in autonomous delegation. | 13 comments, 2 👍 — P1, needs retest |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent hangs indefinitely** | Blocks core workflow; workaround is disabling subagents. | 8 comments, 8 👍 — P1, needs retest |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell execution stuck at “Waiting input” post-completion** | Frequent false hangs on trivial commands; high friction. | 4 comments, 3 👍 — P1, medium effort |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26526) | **Auto Memory redaction happens *after* model sees secrets** | Security gap: secrets enter model context before redaction. | 5 comments — P2, security |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | **Auto Memory retries low-signal sessions forever** | Wastes cycles; clogs background extraction pipeline. | 4 comments — P2 |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | **400 error when >128 tools registered** | Hard limit breaks extensibility; needs smarter tool scoping. | 3 comments — P2 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | **Browser subagent fails on Wayland** | Platform regression; blocks web automation on Linux. | 4 comments, 1 👍 — P1, needs retest |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | **Browser Agent ignores `settings.json` (e.g., `maxTurns`)** | Configuration drift; settings silently dropped. | 3 comments — P2, needs retest |
| [#21335](https://github.com/google-gemini/gemini-cli/issues/21335) | **`/compress` not persisted across session resume** | Token-saving feature lost on restart; UX regression. | 2 comments, 2 👍 — P2, small effort |
| [#18836](https://github.com/google-gemini/gemini-cli/issues/18836) | **Replace in-context WriteToDo with persistent file-based tracking** | Strategic shift to durable task state; reduces context rot. | 3 comments — P3, enhancement |

## 4. Key PR Progress (Top 10 by Significance)

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#29386](https://github.com/google-gemini/gemini-cli/pull/29386) | OPEN | Fix A2A server: `express.json` registered after routes → `req.body` undefined |
| [#29282](https://github.com/google-gemini/gemini-cli/pull/29282) | OPEN | **Security**: Persist OAuth credentials immediately after login (stops re-prompt) |
| [#29184](https://github.com/google-gemini/gemini-cli/pull/29184) | CLOSED | **Security**: Validate Git args in Windows sandbox — block silent `git diff --output` |
| [#29192](https://github.com/google-gemini/gemini-cli/pull/29192) | CLOSED | **Security**: Contain legacy raw-tag path traversal in checkpoints directory |
| [#29186](https://github.com/google-gemini/gemini-cli/pull/29186) | CLOSED | **Security**: Fix `exitCode` null check in shell sandbox denial heuristic |
| [#29187](https://github.com/google-gemini/gemini-cli/pull/29187) | CLOSED | **Security**: Use `safeLiteralReplace` for LLM prompt placeholders (prevents `$`-injection) |
| [#29188](https://github.com/google-gemini/gemini-cli/pull/29188) | CLOSED | Fix `read-many-files` include-pattern matching (exact name/extension) |
| [#29195](https://github.com/google-gemini/gemini-cli/pull/29195) | CLOSED | Degrade non-array checkpoint history instead of crashing `/resume` |
| [#29190](https://github.com/google-gemini/gemini-cli/pull/29190) | CLOSED | Track all `activate()` disposables in VS Code companion (prevents leak) |
| [#29271](https://github.com/google-gemini/gemini-cli/pull/29271) | OPEN | Refactor: simplify project structure, remove complex build scripts, centralize metadata |

## 5. Feature Request Trends
1. **Durable, file-backed task tracking** — Replace ephemeral in-context todos (`WriteToDo`) with CRUD-persisted task files ([#18836](https://github.com/google-gemini/gemini-cli/issues/18836), [#21000](https://github.com/google-gemini/gemini-cli/issues/21000)).
2. **AST-aware code navigation** — Investigate tools (tilth, glyph) for precise method-level reads, search, and mapping to cut token waste ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)).
3. **Subagent observability & sharing** — Surface subagent trajectories via `/chat share` for debugging/eval ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598), [#21763](https://github.com/google-gemini/gemini-cli/issues/21763)).
4. **Smarter tool scoping** — Dynamic tool selection to avoid 128+/400-tool limits ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)).
5. **“Tactful Extraction” hierarchy** — Surgical read strategy: grep → AST → targeted reads to curb context bloat ([#19561](https://github.com/google-gemini/gemini-cli/issues/19561)).

## 6. Developer Pain Points (Recurring Frustrations)
- **Subagent unreliability**: Hangs (#21409), false success (#22323), ignored skills (#21968), config overrides dropped (#22267).
- **Shell tool flakiness**: “Waiting input” ghost hangs (#25166), destructive git commands (#22672), tmp-script litter (#23571).
- **Auto Memory trust issues**: Secrets leak before redaction (#26525), infinite low-signal retries (#26522), silent patch drops (#26523).
- **Platform gaps**: Wayland browser agent broken (#21983), symlinked agents not loaded (#20079).
- **Session durability**: `/compress` lost on resume (#21335), checkpoint corruption crashes resume (#29195).
- **Security friction**: Windows sandbox bypasses (#29184), path traversal in chat delete (#29192), env-var collision bugs (#29277, #29278).

---

*Generated from `google-gemini/gemini-cli` GitHub activity (2026-09-18). Links point to live issues/PRs.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-09-18

## 1. Today's Highlights
GitHub Copilot CLI v1.0.86 shipped yesterday, enabling custom agents to opt into repository-level instruction files (AGENTS.md, copilot-instructions.md, CLAUDE.md) via `include-custom-instructions: true`. The community is actively discussing a regression in MCP server discovery during session resume (v1.0.83) and a persistent Figma MCP server registration failure that works in VS Code but not the CLI.

## 2. Releases
### v1.0.86 (2026-09-17)
- **Custom agents can now opt into repository instruction files** by setting `include-custom-instructions: true` in their frontmatter, allowing them to respect AGENTS.md, copilot-instructions.md, and CLAUDE.md from the workspace.
- **Session resume improvements**: Resuming an active session without plugin-directory, discovery, or working-directory overrides now preserves marketplace state more reliably.
- [Release notes](https://github.com/github/copilot-cli/releases/tag/v1.0.86)

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#4870](https://github.com/github/copilot-cli/issues/4870) | **Figma MCP server fails to register tools** — CLI treats `-32601` on `server/discover` as fatal, but VS Code handles it | Blocks a popular design-to-code workflow; inconsistency with VS Code suggests CLI-specific MCP implementation gap | 9 👍, 5 comments, opened yesterday |
| [#4753](https://github.com/github/copilot-cli/issues/4753) | **v1.0.83: session resume cancels in-flight stdio MCP connections** (~1s timeout vs ~16s in v1.0.82) | Regression causing MCP servers to become silently unavailable after resume; impacts all stdio-based MCP users | 2 👍, 4 comments, closed but recent |
| [#4095](https://github.com/github/copilot-cli/issues/4095) | **Windows: plugin update fails with "Access is denied" while VS Code runs** (Copilot extension holds watcher handles) | Blocks plugin updates on Windows when VS Code is open; affects desktop app workflow too | 22 👍, 3 comments, high impact for Windows devs |
| [#4886](https://github.com/github/copilot-cli/issues/4886) | **`--plugin-dir` skills load but omitted from `/skills` and `/env`** | Local plugin skills work but are invisible in interactive dashboards; inconsistency between UI and JSON output | 2 comments, opened 2 days ago |
| [#3304](https://github.com/github/copilot-cli/issues/3304) | **`ERR_HTTP2_INVALID_SESSION` causes repeated transient retries** mid-turn on long responses | Recurring network instability breaking long reasoning sessions; multiple reports over months | 4 comments, persistent since May |
| [#4892](https://github.com/github/copilot-cli/issues/4892) | **Extension hosts & MCP servers re-enumerated hourly** in-session reload cycle | Unexpected resource churn; may cause state loss or performance degradation during long sessions | 1 comment, corrected report yesterday |
| [#4447](https://github.com/github/copilot-cli/issues/4447) | **Backspace removes words instead of characters** (v1.0.79+) | Basic input regression affecting all interactive users; high frustration factor | 1 👍, 2 comments, since August |
| [#3380](https://github.com/github/copilot-cli/issues/3380) | **Add `--disable-repo-mcps` flag** to skip `.mcp.json` / `.github/mcp-config.json` | No clean way to ignore repo-shipped MCP configs; forces per-name disable workaround | 1 👍, 3 comments, feature request |
| [#4703](https://github.com/github/copilot-cli/issues/4703) | **Per-agent provider selection for custom agents** | Current BYOK/model config is process-wide; blocks multi-endpoint agent workflows in one session | 1 comment, architectural limitation |
| [#2616](https://github.com/github/copilot-cli/issues/2616) | **Native OS notification when long tasks complete** | Quality-of-life request to reduce context-switching overhead during async operations | 2 comments, long-standing request |

## 4. Key PR Progress
No pull requests were updated in the last 24 hours. The release v1.0.86 appears to have been cut directly from main without recent PR activity in this window.

## 5. Feature Request Trends
From the issue corpus, these directions dominate community requests:

1. **MCP Configuration Control** — Granular enable/disable flags (`--disable-repo-mcps`, per-server toggles), better discovery error handling, and OAuth issuer mismatch fixes (Google Workspace).
2. **Agent/Provider Flexibility** — Per-agent model/provider selection, custom agent instruction file adoption, and rubber-duck availability under auto model.
3. **Session Reliability** — Persistent session state across crashes/restarts, plan-mode consistency, sandboxed plan.md writes, and hourly reload side effects.
4. **Windows Parity** — File-locking conflicts with VS Code, symlink documentation, and plugin update failures.
5. **Input/Terminal Polish** — Backspace behavior, paste handling, copy formatting, and taskbar icon control.

## 6. Developer Pain Points
| Pain Point | Frequency | Impact |
|------------|-----------|--------|
| **MCP server discovery/registration failures** (Figma, stdio timeout, hourly re-enum) | 5+ issues | High — breaks tool ecosystems |
| **Session resume/reliability regressions** (v1.0.83 MCP cancel, plan-mode hangs, data loss) | 4+ issues | High — loses hours of work |
| **Windows file-locking with VS Code** | 1 issue, 22 👍 | High — blocks updates entirely |
| **Input handling regressions** (backspace=word, paste mangles, copy truncates) | 3+ issues | Medium — daily friction |
| **Network/HTTP2 instability** (`ERR_HTTP2_INVALID_SESSION`) | 1 long-running issue | Medium — breaks long sessions |
| **Missing configuration escapes** (no `--disable-repo-mcps`, no per-agent provider) | 2+ issues | Medium — forces workarounds |
| **Observability gaps** (skills missing from `/skills`, no task notifications) | 2+ issues | Low-Medium — workflow friction |

---

*Digest generated from github/copilot-cli data as of 2026-09-18. Links point to live GitHub items.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-09-18

## Today's Highlights
No new releases shipped in the last 24 hours. The maintainers closed 11 historical bugs spanning proxy handling, installation scripts, UI theming, MCP stability, and markdown parsing—indicating a focused triage pass. One new Desktop bug (#2649) and one subagent auth timeout (#2650) remain open, while PR #2651 targets a runaway tool-call loop regression.

---

## Releases
*None in the last 24 h.*

---

## Hot Issues (10 Noteworthy)

| # | Title | Status | Why It Matters | Community Signal |
|---|-------|--------|----------------|------------------|
| [#1234](https://github.com/MoonshotAI/kimi-cli/issues/1234) | Env-var proxy ignored by `aiohttp` defaults during `kimi login` | **Closed** | Blocks corporate/developer networks that require explicit proxy config; fix unblocks login for restricted environments. | 👍 2, 14 comments |
| [#1107](https://github.com/MoonshotAI/kimi-cli/issues/1107) | Install script fails when `uv` is missing | **Closed** | First-run experience breakage; affects every new user without `uv` pre-installed. | 6 comments |
| [#2649](https://github.com/MoonshotAI/kimi-cli/issues/2649) | Desktop “Dream Memory” toggle doesn’t persist to `daimon/config.json` | **Open** | User-facing config sync broken; suggests server-side feature gate not released. | 2 comments, filed yesterday |
| [#2650](https://github.com/MoonshotAI/kimi-cli/issues/2650) | Subagent spawn fails intermittently on OAuth timeout to `auth.kimi.ai` | **Open** | Flaky auth kills autonomous subagent workflows; retries eventually succeed but UX is poor. | Filed yesterday |
| [#1301](https://github.com/MoonshotAI/kimi-cli/issues/1301) | Ghostty light theme: ‘yolo’ identifier low contrast | **Closed** | Accessibility/readability regression in a popular terminal. | 👍 1 |
| [#1296](https://github.com/MoonshotAI/kimi-cli/issues/1296) | Intermittent “disconnected MCP” errors | **Closed** | MCP reliability directly impacts tool-use stability. | 2 comments |
| [#1291](https://github.com/MoonshotAI/kimi-cli/issues/1291) | Invalid stdin markdown crashes CLI pre-model | **Closed** | Hard crash on malformed input; robustness gap in input sanitization. | 2 comments |
| [#734](https://github.com/MoonshotAI/kimi-cli/issues/734) | Google GenAI provider rejects `$schema` in tool params | **Closed** | Blocks Exa MCP and other schema-rich tools on Gemini provider. | 2 comments |
| [#1339](https://github.com/MoonshotAI/kimi-cli/issues/1339) | `@` file mention leaks `.git/objects/` internals | **Closed** | UX noise + potential secret exposure in repo picker. | 1 comment |
| [#1342](https://github.com/MoonshotAI/kimi-cli/issues/1342) | Missing OSC 9/777 notifications for task completion | **Closed** | Terminal integrations (iTerm2, WezTerm, kitty) can’t auto-notify users. | 1 comment |

---

## Key PR Progress

| # | Title | Status | Impact |
|---|-------|--------|--------|
| [#2651](https://github.com/MoonshotAI/kimi-cli/pull/2651) | `fix: stop repeated tool-call loops` | **Open** | Hard-stops duplicate tool calls at the repeat limit (resolves #2637). Prevents runaway loops that waste tokens and stall sessions. |

*Only one PR updated in the last 24 h; the above is the sole entry.*

---

## Feature Request Trends (from open/closed issues)
1. **Terminal integration polish** — OSC notifications (#1342), theme contrast (#1301), file-mention filtering (#1339).  
2. **MCP/Provider hardening** — schema validation (#734), disconnect resilience (#1296), subagent auth reliability (#2650).  
3. **Desktop ↔ CLI config sync** — feature flags persisting locally (#2649).  
4. **Install/onboarding robustness** — proxy-aware login (#1234), `uv`-optional installer (#1107).  
5. **Flow/Skill interruptibility** — interactive flow cancellation (#1480).

---

## Developer Pain Points (recurring frustrations)
- **Flaky authentication** — both login-time proxy issues and subagent OAuth timeouts point to auth-path fragility.  
- **Silent config failures** — toggles that don’t persist (#2649) or install scripts that error without `uv` (#1107) erode trust.  
- **Tool-call runaway** — PR #2651 confirms duplicate-call loops reach production; developers want stricter guards.  
- **Terminal UX gaps** — missing notifications, theme contrast, and noisy file pickers show the CLI’s terminal-native experience still has sharp edges.  
- **Provider-specific schema rejects** — `$schema` in tool params breaks Google GenAI (#734), forcing workarounds for MCP users.

---

*Data sourced from `github.com/MoonshotAI/kimi-cli` issues & PRs updated 2026-09-17 → 2026-09-18.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-09-18

---

## 1. Today's Highlights

OpenCode's v2.0.7 rollout is surfacing installation and startup regressions across package managers (pacman, Bun) and third-party frontends (MonoCode), while the community remains deeply divided over the new layout—**the legacy layout retention request (#37012) has 68 👍 and 48 comments**. On the engineering side, a flurry of PRs landed TUI usability upgrades (session history rail, `/btw` side-question command, reasoning-token throughput), a VS Code activity-bar entry, and core fixes for rate-limit accounting and large-file streaming.

---

## 2. Releases

**No new releases in the last 24 hours.** The v2.0.7 tag exists on GitHub but appears missing from the release assets, causing upgrade failures for distro-managed installs (#49660).

---

## 3. Hot Issues (10 Noteworthy)

| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#37012](https://github.com/anomalyco/opencode/issues/37012) | **[FEATURE] Keep legacy layout option** | Users cite discoverability, workspace flexibility, and muscle-memory loss in the redesign. Highest engagement in the backlog. | 68 👍 · 48 comments · open since Jul 15 |
| [#49580](https://github.com/anomalyco/opencode/issues/49580) | **[BUG] Free tier fails with MonoCode frontend** | Blocks third-party UI adoption; error `can only be used from within OpenCode` suggests auth/session binding is too strict. | 36 comments · 2 👍 · filed Sep 17 |
| [#49658](https://github.com/anomalyco/opencode/issues/49658) | **v2.0.7 startup fails: `UnknownError Transport Unable to connect`** | Fresh installs on macOS ARM64 (Bun) cannot reach background server; exit code 130. | 2 comments · filed today |
| [#49660](https://github.com/anomalyco/opencode/issues/49660) | **`/update` offers 2.0.7 on pacman but upgrade broken** | GitHub release artifacts missing; distro packages can’t self-update. | 1 comment · filed today |
| [#31972](https://github.com/anomalyco/opencode/issues/31972) | **New Layout: Plan/Build toggle broken** | Core mode-switching (UI + `Ctrl+.`) non-functional when new layout enabled. | 8 👍 · 10 comments · closed |
| [#31831](https://github.com/anomalyco/opencode/issues/31831) | **Idle CPU 185% / 500 MB+ RAM on macOS Apple Silicon** | Persistent background work even with no active conversation. | 4 👍 · 5 comments · closed |
| [#41855](https://github.com/anomalyco/opencode/issues/41855) | **Session list & TUI switcher omit existing sessions** | Sessions exist on disk but invisible to `opencode session list` and TUI picker. | 2 comments · open since Aug 11 |
| [#25487](https://github.com/anomalyco/opencode/issues/25487) | **Stream parsing error with LiteLLM proxy** | `text part <uuid> not found` on second LLM round-trip; blocks OpenAI-compatible proxies. | 8 comments · closed |
| [#37629](https://github.com/anomalyco/opencode/issues/37629) | **[FEATURE] File-specific skill auto-loading + protected context** | Long-running sessions lose skill/AGENTS.md context after compaction. | 4 comments · closed |
| [#37111](https://github.com/anomalyco/opencode/issues/37111) | **`opencode web` deadlocks in `@parcel/watcher` on Linux** | Multi-project attach causes main-thread deadlock; process stays “online” but unresponsive. | 1 👍 · 3 comments · closed |

---

## 4. Key PR Progress (10 Important)

| # | Title | Type | Status | Impact |
|---|-------|------|--------|--------|
| [#49665](https://github.com/anomalyco/opencode/pull/49665) | **feat(tui): add session history rail** | Feature | Open | Persistent left-side rail grouping sessions by recency (Today/Yesterday/Older) on every route. |
| [#49646](https://github.com/anomalyco/opencode/pull/49646) | **feat(tui): add `/btw` side question command** | Feature | Closed | Quick side-questions via `session.generate` without polluting main conversation. |
| [#49643](https://github.com/anomalyco/opencode/pull/49643) | **feat(vscode): add OpenCode to activity bar** | Feature | Open | First-class VS Code sidebar with session launch, terminal, and web UI shortcuts. |
| [#49647](https://github.com/anomalyco/opencode/pull/49647) | **feat(app): stream large attachments with progress** | Feature | Closed | Prevents UI freeze when dropping 100 MB+ files; shows upload chips + toast. |
| [#49666](https://github.com/anomalyco/opencode/pull/49666) | **refactor(core): move provider policies into settings** | Refactor | Open | Centralizes compaction, transport, and model limits per provider; removes global buffers. |
| [#49651](https://github.com/anomalyco/opencode/pull/49651) | **fix(llm): keep unified rate-limit window utilization** | Bug Fix | Open | Correctly parses `anthropic-ratelimit-*` headers on subscription accounts. |
| [#48689](https://github.com/anomalyco/opencode/pull/48689) | **fix(tui): include reasoning tokens in throughput** | Bug Fix | Closed | Tok/s indicator now accounts for reasoning tokens, not just visible output. |
| [#45002](https://github.com/anomalyco/opencode/pull/45002) | **feat(core): repair malformed tool arguments pre-validation** | Feature | Open | Internal plugin normalizes common LLM argument errors before schema validation. |
| [#49668](https://github.com/anomalyco/opencode/pull/49668) | **fix(app): create local sessions in project root** | Bug Fix | Closed | Resolves session paths against canonical project root, not current worktree. |
| [#32370](https://github.com/anomalyco/opencode/pull/32370) | **feat(tui): add `linux_clipboard_selection` config** | Feature | Open | Primary clipboard (selection) support via `wl-copy`/`xclip` with MIME fixes. |

---

## 5. Feature Request Trends

1. **Layout & Navigation Control** — Legacy layout retention (#37012), vertical session list like Codex (#41064), session history rail (#49665).
2. **Session & Context Persistence** — Skill/AGENTS.md reload post-compaction (#37627, #37629), session visibility in CLI/TUI (#41855), search within session content (#49659).
3. **Third-Party Frontend Compatibility** — MonoCode auth/session sharing (#49580), deep-link `opencode://new` with `cwd`/`q` (#49657).
4. **Resource Efficiency** — Idle CPU/RAM reduction (#31347, #31831), reasoning-token accounting (#48689).
5. **Editor Integrations** — VS Code activity bar (#49643), Linux primary clipboard (#32370).
6. **Workflow Micro-Tools** — `/btw` side questions (#49646), scrollbar message markers (#37699), pause during build (#37738).

---

## 6. Developer Pain Points

- **v2.0.7 Distribution Gaps**: Missing GitHub release assets break `/update` and distro upgrades (#49660); Bun install fails at background-server connect (#49658).
- **New Layout Regression Cluster**: Plan/Build toggle broken (#31972, #37101), session leakage across desktop windows (#37078), discoverability complaints (#37012).
- **Provider/Proxy Interop**: LiteLLM stream parsing (#25487), free-tier model blocked outside first-party UI (#49580), rate-limit header parsing (#49651).
- **Background Resource Bloat**: Persistent 185% CPU / 500 MB+ RAM on idle (#31831), worker request-limit exhaustion (#35265).
- **Session State Fragility**: Sessions invisible to lister/switcher (#41855), context loss after compaction (#37627), worktree path resolution (#49668).
- **Linux-Specific Deadlocks**: `@parcel/watcher` native subscribe deadlocks main thread during multi-project web bootstrap (#37111).

---

*Generated from GitHub data (anomalyco/opencode) as of 2026-09-18 00:00 UTC.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-09-18

## Today's Highlights
The Pi ecosystem saw significant bug-fix activity around provider reliability, compaction correctness, and Windows shell resolution. Critical fixes landed for malformed `Retry-After` headers causing tight retry loops, opaque 4xx errors blocking retries, and compaction overflow from thinking-only messages. A notable Windows regression where `shellPath` is non-deterministically ignored when extensions load remains open and actively discussed.

---

## Releases
No new releases published in the last 24 hours.

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#7836](https://github.com/earendil-works/pi/issues/7836) | **Edit fuzzy match misses lines with whitespace differences** | `normalizeForFuzzyMatch` doesn't collapse whitespace runs, causing edit failures when only whitespace differs. Affects small models disproportionately. | 12 comments, 1 👍 — Closed but reveals core diffing fragility |
| [#8684](https://github.com/earendil-works/pi/issues/8684) | **`PI_OFFLINE` silently disables all provider model discovery** | Documented as disabling only startup housekeeping, but actually blocks *all* model-catalog network discovery for the session. Undocumented behavior breaking air-gapped/offline workflows. | 10 comments — Open, high visibility |
| [#9361](https://github.com/earendil-works/pi/issues/9361) | **Windows: `shellPath` non-deterministically ignored with extensions** | Valid `shellPath` in settings silently ignored when extensions load; falls back to WSL `bash.exe`. Non-deterministic, breaks custom shell configs. | 7 comments — Open, Windows-specific regression |
| [#9571](https://github.com/earendil-works/pi/issues/9571) | **Malformed `Retry-After` HTTP-date causes NaN delay → tight retry loop** | 429 responses with malformed dates trigger immediate retries (zero backoff), hammering providers. Fixed in PR #9724. | 6 comments — Open, critical reliability bug |
| [#9391](https://github.com/earendil-works/pi/issues/9391) | **Stale signed thinking blocks replayed after compaction → Anthropic drops them** | Post-compaction, 15 thinking blocks replayed every turn; Anthropic rejects with `prefix_binding_mismatch`. Degrades long-session quality. | 5 comments, 1 👍 — Open |
| [#9602](https://github.com/earendil-works/pi/issues/9602) | **Compaction overflow from thinking messages omitted in earlier requests** | Thinking messages excluded from model requests but included in compaction prompt, blowing past token limits. Fixed in PR #9717. | 5 comments — Open |
| [#8760](https://github.com/earendil-works/pi/issues/8760) | **OpenRouter `:free` models fail with 400 — `max_tokens` exceeds provider limit** | Pi sends catalog `maxOutputTokens` which exceeds upstream hard limits for multiple free models. | 5 comments — Closed |
| [#9577](https://github.com/earendil-works/pi/issues/9577) | **Signal-killed bash tools resolve successfully (partial output)** | SIGKILL/SIGTERM on shell returns partial output as success; caller can't distinguish from clean exit. | 4 comments — Closed |
| [#9647](https://github.com/earendil-works/pi/issues/9647) | **`session_compact` fires before clearing compaction state** | Extensions see active compaction abort controller during `session_compact` event, blocking follow-up actions. | 4 comments — Open |
| [#9482](https://github.com/earendil-works/pi/issues/9482) | **Empty-body 400 misclassified as context overflow → destructive auto-compaction** | Transient gateway 400s with empty bodies trigger auto-compaction, destroying ~400k tokens of history. Severity: serious. | 2 comments — Open |

---

## Key PR Progress

| # | PR | Description | Status |
|---|----|-------------|--------|
| [#9724](https://github.com/earendil-works/pi/pull/9724) | **fix(ai): fall back to exponential backoff for malformed Retry-After dates** | Fixes #9571: `getRetryDelayMs` now treats unparseable dates as missing headers, falling back to exponential backoff; validates finite delays. | Closed |
| [#9722](https://github.com/earendil-works/pi/pull/9722) | **fix(ai): retry opaque 4xx errors without diagnostic body** | Adds `4\d{2} status code \(no body\)` to retryable patterns; fixes gateways returning bare 4xx (e.g., OpenAI SDK `BadRequestError`). | Closed |
| [#9717](https://github.com/earendil-works/pi/pull/9717) | **fix(coding-agent): bound thinking-only messages in compaction summaries** | Fixes #9602: limits reasoning content in compaction prompts when providers omit thinking-only messages during normal requests. | Closed |
| [#9720](https://github.com/earendil-works/pi/pull/9720) | **fix(ai): drive Mistral reasoning via `thinkingLevelMap`, add `zai-glm-5-3`** | Replaces hardcoded model allowlist with `thinkingLevelMap` check; adds GLM-5.3 to Mistral catalog. | Closed |
| [#9714](https://github.com/earendil-works/pi/pull/9714) | **feat(ai): support Azure Foundry Chat Completions deployments** | Implements #9645: extends Azure provider beyond Responses API to support Chat Completions (e.g., DeepSeek V4 Pro on Foundry). | Open |
| [#9719](https://github.com/earendil-works/pi/pull/9719) | **feat(tui): make default tool shell vertical padding configurable** | Adds `toolShellPaddingY` setting (0/1, default 1) for theme-driven spacing control in default-shell renderer. | Closed |
| [#9630](https://github.com/earendil-works/pi/pull/9630) | **feat(coding-agent): add event handler unsubscribe** | `pi.on()` now returns unsubscribe fn; handlers copied per-dispatch to avoid in-flight modification issues. | Closed |
| [#9705](https://github.com/earendil-works/pi/pull/9705) | **feat(coding-agent): add TUI context footer eval** | Injects terminal for in-process rendering; adds Docker-isolated doc eval with clamped progress bar; validates dynamic rendering. | Closed |
| [#9668](https://github.com/earendil-works/pi/pull/9668) | **feat(coding-agent): add prompt cache warming** | Experimental support for keeping provider caches warm across requests. WIP. | Open |
| [#7610](https://github.com/earendil-works/pi/pull/7610) | **feat(ai): add LLM Gateway and LLM Gateway DevPass providers** | Adds LLM Gateway (OpenRouter-style router) as built-in `openai-completions` providers. Long-standing PR, recently updated. | Open |

---

## Feature Request Trends
From the issue landscape, three clear directions emerge:

1. **Provider Configuration Flexibility** — Users need reliable base URL/key overrides per-model (not global), proper offline-mode scoping (#8684), and support for emerging APIs (Azure Foundry Chat Completions #9714, LLM Gateway #7610).

2. **Compaction & Session Integrity** — Multiple issues (#9391, #9602, #9727) demand decoupling compaction trigger thresholds from summary budgets, preserving thinking-block signatures across compaction, and preventing history destruction from misclassified errors (#9482).

3. **Extensibility & Observability** — Requests for event lifecycle fixes (#9647), handler unsubscription (#9630), trace visualization in TUI (#9728), and session discard commands (#9707) show growing extension-author needs.

---

## Developer Pain Points
Recurring frustrations surfacing across issues:

- **Silent Configuration Failures** — Windows shell resolution (#9361), `PI_OFFLINE` overreach (#8684), OpenRouter baseUrl override regression (#9725): settings appear respected but are silently ignored or overridden.
- **Provider Error Opacity** — Empty-body 4xx (#9482, #9723), malformed `Retry-After` (#9571), "Bad Gateway" without status (#9712): errors lack diagnostic bodies, causing misclassification and destructive fallbacks.
- **Compaction Data Loss** — Auto-compaction triggered by transient errors destroys massive context (#9482); thinking blocks replayed incorrectly post-compaction (#9391); reserveTokens coupling trigger/summary budgets (#9727).
- **Session Durability** — In-place migration without backup (#9708), timestamp ambiguity (local time with `Z` suffix #9609), no session discard command (#9707).
- **Tool Execution Ambiguity** — Signal-killed bash tools report success (#9577); `--print` exits 0 with empty output on token exhaustion (#9718).

---

*Digest generated from GitHub data for earendil-works/pi-mono. All links point to original issues/PRs.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-09-18

---

## 1. Today's Highlights

A new nightly release (`v0.24.0-nightly.20260917`) shipped with documentation updates and CI fixes. The community is actively tackling a **heap OOM regression** caused by `GitIgnoreParser` caching matchers per directory in repos with large untracked folders (#12151). Meanwhile, the **Web Shell** receives major performance work: a shared session workflow projection (#11237) and a new lane-graph commit history view (#12152). The Fleet Shepherd automation gained a "close no-op bot PRs" lever (#12150), reducing CI noise.

---

## 2. Releases

### `v0.24.0-nightly.20260917.f822124af5` — 2026-09-17
- **docs(serve)**: Recorded merged ACP boundary acceptance (PR #12024)
- **fix(ci)**: Wait for published export readiness before proceeding  
→ *Routine nightly; no user-facing feature changes.*

---

## 3. Hot Issues (10 Noteworthy)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#12151](https://github.com/QwenLM/qwen-code/issues/12151) | **Heap OOM from glob in repos with big untracked folder** — `GitIgnoreParser` caches a matcher per directory | **P1 regression**: crashes sessions minutes in after a glob like `**/something/metrics.py`. Root cause: unbounded cache growth in `GitIgnoreParser`. | Opened today, 3 comments. High urgency for large-repo users. |
| [#6181](https://github.com/QwenLM/qwen-code/issues/6181) | **Mobile web-shell session switching is janky** — full transcript render, uncompressed history load, O(transcript) per-frame costs | **P1 UX blocker** on mobile: drawer close animation drops frames, freezes for seconds on large sessions. Four-layer cost stack identified. | Closed today after fixes; 4 comments. |
| [#12147](https://github.com/QwenLM/qwen-code/issues/12147) | **Load deployment-managed extensions from a directory** (`--extension-dir`) | Decouples extension delivery from user writable settings; enables managed/air-gapped deployments. | Opened today, 3 comments, `need-discussion`. |
| [#12143](https://github.com/QwenLM/qwen-code/issues/12143) | **Reclaim unused Docker BuildKit cache on ECS runners** | CI runners accumulate 100s of GiB; cleanup job reports success but reclaims 0B → `ENOSPC` failures. | Opened today, 3 comments. Infra pain point. |
| [#12146](https://github.com/QwenLM/qwen-code/issues/12146) | **Align restore request fields across runtime, SDK, OpenAPI** | Contract drift between `POST /session/:id/load|resume` implementations; breaks SDK/docs parity. | Opened today, 3 comments, `ready-for-human`. |
| [#5887](https://github.com/QwenLM/qwen-code/issues/5887) | **`qwen tag` — persistent multiplayer channel-resident agent (DingTalk-first)** | Enables shared channel agent (like Claude Tag): one session per channel, scheduled/autonomous work. | Closed, 3 comments, 3 👍. High community interest. |
| [#4228](https://github.com/QwenLM/qwen-code/issues/4228) | **Harden `/goal` into reliable long-horizon workflow primitive** | Product roadmap: make goal-driven execution production-ready (stop-hook caps, recovery, observability). | Closed, 3 comments. Strategic. |
| [#5768](https://github.com/QwenLM/qwen-code/issues/5768) | **Introduce `qwen daemon` — registerable system service for durable cron/loop** | Gives background automation a persistent owner; survives no foreground `qwen` process. | Closed, 3 comments. Foundation for `#loop` and scheduled tasks. |
| [#6542](https://github.com/QwenLM/qwen-code/issues/6542) | **Read-only Advisor feedback loop for complex agent tasks** | Second-opinion reviewer inspects context, returns structured guidance before major work / on stall / pre-completion. | Closed, 4 comments. Agent-safety pattern. |
| [#11954](https://github.com/QwenLM/qwen-code/issues/11954) | **Fleet Shepherd Dashboard** (auto-maintained) | Bot fleet observability: PR states, scan signals, sync/dispatch/release/cleanup counts. | 0 comments (bot), but shows automation maturity. |

---

## 4. Key PR Progress (10 Important)

| # | PR | Summary | Impact |
|---|----|---------|--------|
| [#11237](https://github.com/QwenLM/qwen-code/pull/11237) | **perf(web-shell): derive session workflow projection once, share across surfaces** | Memoizes projection in `App`, eliminates redundant per-surface computation. Fixes #10865. | Major Web Shell perf win; unblocks mobile smoothness. |
| [#12152](https://github.com/QwenLM/qwen-code/pull/12152) | **feat(web-shell): draw commit history as lane graph across all branches with search** | Lane graph with S-curves, merge commit hollow nodes, detail expand, "All branches" toggle, search. | New flagship history UX; parity with GitHub/GitLab graphs. |
| [#12136](https://github.com/QwenLM/qwen-code/pull/12136) | **fix(cli): refuse session mutations for sessions attached to any live runtime** | Returns 409 on delete/mutate if session has in-flight prompt on *any* runtime (scheduled, background, interactive). | Prevents data corruption; closes race window. |
| [#11769](https://github.com/QwenLM/qwen-code/pull/11769) | **fix(core): purge deleted session's prompts from log history** | `Logger.removeSessionsMessages()` cleans `~/.qwen/tmp/<project>/logs.json` on session delete. | Fixes log pollution; storage hygiene. |
| [#12096](https://github.com/QwenLM/qwen-code/pull/12096) | **fix(core): handle simple Bash comments in permission rules** | Trailing `# comment` no longer splits into phantom command segments for Bash-evaluated commands. | Fixes false permission denials (#11815). |
| [#12148](https://github.com/QwenLM/qwen-code/pull/12148) | **fix(goal): say which newer records recovery walked past** | `selectGoalRecoveryFromRecords` emits `skippedUuids` + `GOAL_PERSISTENCE_RECOVERY` event. | Observability for goal recovery; debuggability. |
| [#11859](https://github.com/QwenLM/qwen-code/pull/11859) | **ci(pnpm): install with pnpm everywhere, retire `package-lock.json`** | CI now uses pinned pnpm; `npm publish` and all scripts use pnpm. Completes #10444 Stages 2–3. | Consistent dependency graph; supply-chain hygiene. |
| [#12115](https://github.com/QwenLM/qwen-code/pull/12115) | **fix(installer): preflight glibc for standalone Linux archives** | Blocks install on glibc-too-old hosts (e.g., CentOS 7) before downloading Node 22 archive. | Prevents post-install runtime crashes. |
| [#11778](https://github.com/QwenLM/qwen-code/pull/11778) | **fix(hooks)!: resolve Windows command hooks via cmd fallback + PowerShell probe** | `cmd.exe` hooks fall back to PowerShell; explicit shell config respected. Breaking change for hook authors. | Unblocks Windows hook reliability. |
| [#12150](https://github.com/QwenLM/qwen-code/pull/12150) | **ci(shepherd): close bot PRs whose merge would change nothing** | Fleet Shepherd posts notice on first tick, closes on later tick if head SHA unchanged. | Reduces stale bot PR noise; CI budget savings. |

---

## 5. Feature Request Trends

| Direction | Evidence (Issues/PRs) | Maturity |
|-----------|----------------------|----------|
| **Background / Daemon Automation** | #5768 (daemon as system service), #6010 (hot-reloadable channels), #5124/#5136 (`/loop` staged rollout), #5887 (`qwen tag` channel agent) | **Active implementation**; multiple closed issues, PRs landing |
| **Multiplayer / Shared Sessions** | #5887 (channel-resident agent), #11072 (Agent Team roster in CLI/WebShell), #12050 (slash-command exports as artifacts) | **Shipping**; WebShell + CLI convergence |
| **Goal/Long-Horizon Workflows** | #4228 (harden `/goal`), #12148 (recovery observability), #6542 (Advisor read-only reviewer) | **Roadmap execution**; recovery + telemetry hardening |
| **Extension / Deployment Management** | #12147 (`--extension-dir` for managed extensions), #11859 (pnpm everywhere), #12115 (glibc preflight) | **Enterprise hardening**; air-gap/managed deploy focus |
| **Observability & Diagnostics** | #4181/#4182 (`/doctor` memory interpretation + structured output), #4475 (AUTO mode telemetry), #12146 (REST contract alignment) | **Incremental**; telemetry gaps being closed |
| **Mobile / WebShell Polish** | #6181 (mobile jank), #11237 (shared projection), #12152 (lane graph), #11913 (session creation deadline) | **Heavy investment**; WebShell becoming first-class |

---

## 6. Developer Pain Points

| Pain Point | Frequency / Severity | Representative Items |
|------------|----------------------|----------------------|
| **Memory / OOM in large repos** | High (crashes sessions) | #12151 (glob → `GitIgnoreParser` cache explosion), #4181/#4182 (`/doctor` lacks interpretation) |
| **Mobile WebShell unusable on large sessions** | High (P1, user-visible jank) | #6181 (4-layer cost stack), #11237 (projection sharing fix) |
| **CI flakiness & disk pressure** | Recurring (ENOSPC, transient macOS E2E death) | #12143 (BuildKit cache), #11134 (macOS E2E retry), #11001 (PTY cleanup) |
| **Windows hook execution broken** | Blocking for Windows users | #11778 (cmd/PowerShell fallback), #10455 (unwritable config dir crash) |
| **Session mutation races** | Data-loss risk | #12136 (delete during in-flight prompt), #11769 (log history pollution) |
| **Extension/dependency delivery friction** | Deployment blocker | #12147 (no `--extension-dir`), #11859 (npm vs pnpm drift), #12115 (glibc surprise) |
| **Contract drift (REST/SDK/OpenAPI)** | Integration breakage | #12146 (restore request fields), #8918 (config→registry contract) |

---

*Digest generated from GitHub data (last 24h). Links point to live issues/PRs on `QwenLM/qwen-code`.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-09-18

## 1. Today's Highlights
The project is deep in a v0.9.14 stabilization sprint: **session resumption is broken across process boundaries** (multiple high-comment bugs), **sub-agent reliability remains fragile** (token budget exhaustion, write-claim contention, child tool-result bloat), and the TUI has **fundamental job-control gaps** (SIGTTIN suspension, no runtime foreground checks). Two performance PRs landed capping sub-agent tool results and adding ModelScope provider support; no new release cut today.

---

## 2. Releases
*No new releases in the last 24 hours.*

---

## 3. Hot Issues (10 Noteworthy)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#6207](https://github.com/Hmbown/Codewhale/issues/6207) | **Session picker refuses saved sessions whose runtime store exists but isn’t the running host’s own** | Core resume workflow broken; users cannot reopen valid sessions after process restart. | 19 comments — highest engagement; marked **CLOSED** but root cause likely systemic. |
| [#6225](https://github.com/Hmbown/Codewhale/issues/6225) | **Unable to resume from within new process** | Same symptom as #6207; confirms session ownership validation is too strict across process boundaries. | 8 comments; duplicate pattern. |
| [#6194](https://github.com/Hmbown/Codewhale/issues/6194) | **Sub-agents die mid-task with no warning, no hand-back, uncommitted work** | Five sub-agent dispatches failed in four distinct ways in one session — core Fleet delegation unreliable. | 5 comments; authored by repo owner (Hmbown). |
| [#6152](https://github.com/Hmbown/Codewhale/issues/6152) | **Event projection for watch-only clients: broadcast/watch instead of single-consumer channel** | Architectural blocker for IDE surfaces / multiple TUI watchers; single `mpsc` prevents “one runtime contract.” | 5 comments; part of 0.9.14 refactor backlog. |
| [#6169](https://github.com/Hmbown/Codewhale/issues/6169) | **TUI has no job-control handshake: SIGTTIN suspends backgrounded process, terminal keeps raw modes** | Backgrounding the TUI (Ctrl-Z, tmux detach) corrupts terminal state; in-flight turn lost to checkpoint only. | 5 comments; critical for terminal UX. |
| [#6185](https://github.com/Hmbown/Codewhale/issues/6185) | **Resume renders empty transcript despite intact journal; repair re-runs on every load** | Journal persists but transcript not rebuilt; identical tool-call repair runs repeatedly without persistence. | 5 comments; data-loss adjacent. |
| [#6278](https://github.com/Hmbown/Codewhale/issues/6278) | **Write-claim contention forbids N workers writing disjoint files under shared root** | Natural fan-out pattern (parallel workers → disjoint outputs) rejected; blocks legitimate delegation. | 4 comments; authored by Hmbown. |
| [#5529](https://github.com/Hmbown/Codewhale/issues/5529) | **Sub-agents cannot reliably execute: wall-time deaths, provider-route failures, shell tooling gaps** | Long-standing meta-issue aggregating three failure modes; still **OPEN** after a month. | 3 comments; high strategic importance. |
| [#6211](https://github.com/Hmbown/Codewhale/issues/6211) | **Replace runtime polling loops and blocking shapes with watch/notify** | Multiple hot-path polling loops (workflow completion, catalog scans) waste CPU; independently shippable fixes. | 3 comments; perf backlog. |
| [#6311](https://github.com/Hmbown/Codewhale/issues/6311) | **Extreme window flickering in MATE terminal — worse on 0.9.13** | Regression in render path; affects daily usability on a common desktop terminal. | 2 comments; fresh (created today). |

---

## 4. Key PR Progress (All 3 Active PRs)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#6294](https://github.com/Hmbown/Codewhale/pull/6294) | **Fix** | **Cap child tool results at capture time** (fixes #6282). Truncates at 1 MiB / 10k tokens *during capture* (codex-rs style), preventing read-starvation deaths where a 542 KB file read burned 638k tokens and killed the worker with zero workspace changes. **CLOSED/Merged**. |
| [#6299](https://github.com/Hmbown/Codewhale/pull/6299) | **Feature** | **Add ModelScope as built-in OpenAI-compatible provider** (api-inference.modelscope.cn/v1). Supports Qwen, DeepSeek, Kimi, GLM, MiniMax, etc. Requires user API key. **CLOSED/Merged**. |
| [#6170](https://github.com/Hmbown/Codewhale/pull/6170) | **Docs** | **Weixin-bridge Quick Start overhaul**: fixes non-existent paths, missing startup command, unread env file, and first-message crash. **OPEN** (awaiting review). |

---

## 5. Feature Request Trends (Distilled from Issues)

| Direction | Evidence |
|-----------|----------|
| **Reliable sub-agent delegation** | #5529, #6194, #6189, #6277, #6278, #6282 — wall-time budgets, token accounting, write isolation, result capping, report-turn reservation. |
| **Multi-client / IDE runtime contract** | #6152 (broadcast/watch), #6176 (app-server turn queue inspect/cancel), #6214 (Arc snapshots for history). |
| **Session resilience & portability** | #6207, #6225, #6185 — ownership validation, transcript rebuild, repair persistence. |
| **Terminal correctness** | #6169 (job control), #6311 (MATE flicker), #6228 (selection copy regression), #6290 (menu key vocab). |
| **Config/schema hygiene** | #6312 (dead config key), #6315 (missing sub-agent metrics source), #6316 (stale `token_budget` docs), #6289 (provider template removal). |

---

## 6. Developer Pain Points (Recurring Frustrations)

1. **“Resume just works” is false** — session ownership tied to *process identity* not *user identity*; forces single-process workflow.
2. **Sub-agents are “fire and forget” with no accountability** — no hand-back, no partial results, no visibility into *why* they died (budget? provider? signal?).
3. **Write isolation is over-eager** — disjoint files under same root rejected; blocks the most natural parallel pattern.
4. **Terminal state machine is brittle** — no SIGTSTP/SIGCONT handling; backgrounding corrupts raw mode and loses in-flight work.
5. **Observability gaps** — sub-agent metrics missing (#6315), config keys documented but unused (#6312), docs drift from runtime (#6316).
6. **Performance regressions in hot paths** — polling loops, deep clones per frame/event, catalog test hangs (#6295).

---

*Digest generated from GitHub data as of 2026-09-18 00:00 UTC. Links point to Hmbown/Codewhale (primary repo for DeepSeek TUI).*

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*