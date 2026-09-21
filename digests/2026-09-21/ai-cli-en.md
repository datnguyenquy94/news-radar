# AI CLI Tools Community Digest 2026-09-21

> Generated: 2026-09-21 04:34 UTC | Tools covered: 10

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

# Cross-Tool Comparison Report: AI CLI Tools Ecosystem (2026-09-21)

---

## 1. Ecosystem Overview

The AI CLI tools landscape is in a **stabilization-and-extensibility phase** across all major players. Anthropic, OpenAI, and GitHub are prioritizing plugin/hook architectures and Windows parity, while Google (Qwen) and Moonshot (Kimi) iterate on multi-session hosting and web-shell embeddability. OpenCode and Pi differentiate through terminal-first runtime design and provider-agnostic interoperability layers. A clear pattern emerges: **core chat loops are stabilizing; the competitive frontier has shifted to extensibility surfaces, cross-platform reliability, and enterprise-grade observability**. Community engagement remains highest on Claude Code and Codex, but smaller projects (DeepSeek TUI, Kimi) show rapid PR velocity on focused technical debt.

---

## 2. Activity Comparison

| Tool | Hot Issues (Top 10) | Key PRs (24h) | Release Status | Notable Signals |
|------|---------------------|---------------|----------------|-----------------|
| **Claude Code** | 10 | 5 | ❌ None | Highest engagement: #91870 (204 comments), #77136 (436 👍) |
| **OpenAI Codex** | 10 | 10 | ✅ 5 alphas (0.156.0) | Aggressive alpha cadence; #41622 (83 👍) for config control |
| **Gemini CLI** | — | — | — | ⚠️ Digest generation failed |
| **GitHub Copilot CLI** | 10 | 0 | ❌ None | 31 issues updated; severe resource leak (#4807: 33 GB log) |
| **Kimi Code CLI** | 3 | 3 | ❌ None | Focused fixes: Windows encoding, IME, OpenCode compat |
| **OpenCode** | 10 | 10 | ❌ None | v2 stabilization; browser sign-in UX overhaul (#50267) |
| **Pi** | 10 | 7 | ✅ v0.86.1 | New Meta Muse provider; Windows top issue (67 comments) |
| **Qwen Code** | 10 | 10 | ✅ v0.24.2 + nightly | Multi-session host controls; WebShell embedder APIs |
| **DeepSeek TUI** | 5 | 6 | ❌ 0.10.0 in dev | 6 follow-up PRs post-0.10.0 prep; silent freeze fixed |
| **Grok Build** | 0 | 0 | ❌ None | No activity in 24h |

---

## 3. Shared Feature Directions

| Direction | Tools Affected | Specific Community Needs |
|-----------|----------------|--------------------------|
| **Plugin/Hook Extensibility** | Claude Code (#91870, #14920), OpenCode (#49108, #49982), Pi (#9116, #9117), Qwen Code (#12311) | First-class function hooks, granular skill toggles, dynamic tool loadout changes, skill source isolation |
| **Windows Parity & Reliability** | Claude Code (#85663, #76694), Codex (#44102, #25600, #43347), Copilot CLI (#4918, #3958), Kimi (#2657, #2643), Qwen (#12375), Pi (#7547, #9497) | Native installers, ConPTY/terminal fixes, IME support, PowerShell guard tuning, ARM64 binary compat |
| **Multi-Session / Agent Orchestration** | OpenCode (#22103, #49982), Qwen Code (#12303, #12348), Codex (#38350), Copilot CLI (#3589), Pi (#9807) | Subagent token visibility, cross-session message routing, session import sync, host-level caps/settling policies |
| **Provider Interoperability Layer** | Pi (#9508, #9815, #9816), OpenCode (#50155, #50206, #50117), Qwen Code (#12290), Kimi (#2656) | OpenAI-compatible API normalization, strict-mode negotiation, Retry-After compliance, Bedrock/DeepSeek param mapping |
| **Observability & Cost Transparency** | Claude Code (#95783, #95781), Codex (#41220, #37445, #46912), Copilot CLI (#4224), OpenCode (#50264, #22103), Qwen Code (#12373) | Prompt-cache warmth/TTL, quota burn attribution, OTel billing attributes, debug log rotation, subagent cost breakdown |
| **MCP Ecosystem Maturity** | Claude Code (#92215), Codex (#20503, #45341), Copilot CLI (#4870, #4606), Qwen Code (#12290, #12357), Pi (#9448) | OAuth flow reliability, stdio/HTTP transport parity, tool schema validation, extension provider registration |

---

## 4. Differentiation Analysis

| Tool | Feature Focus | Target Users | Technical Approach |
|------|---------------|--------------|-------------------|
| **Claude Code** | Enterprise extensibility (Mods/hooks), desktop/IDE parity, model quality control | Professional dev teams, enterprise | First-party plugin framework; tight Anthropic model coupling; heavy IDE investment |
| **OpenAI Codex** | Conversation UX polish, quota transparency, Computer Use automation | Power users, automation builders | Rapid alpha iteration; TUI rendering granularity; realtime/voice integration |
| **GitHub Copilot CLI** | MCP reliability, session integrity, enterprise cost accounting | GitHub-native orgs, BYOK users | Deep GitHub integration; checkpoint/git-based session model; OTel-first observability |
| **OpenCode** | Terminal-first runtime, provider-agnostic, desktop service architecture | Terminal purists, multi-provider users | Effect/TS runtime; browser-mediated auth; ACP protocol; session DB migration hygiene |
| **Pi** | Provider interoperability, extension ecosystem, session scalability | Polyglot model users, self-hosters | Multi-provider abstraction layer; RPC steering; skills filter DSL; Kitty graphics protocol |
| **Qwen Code** | WebShell embeddability, multi-session host controls, live voice | Web IDE builders, fleet operators | ACP-based web shell; QR pairing; worktree management; nightly release cadence |
| **Kimi Code CLI** | Cross-platform terminal fidelity, OpenCode compat, large-context resilience | Asian-market devs, CJK users | Go runtime; OpenCode header compat; streaming parser hardening; IME-aware web UI |
| **DeepSeek TUI** | Byte-stream terminal control, look-act computer-use loop, release hardening | TUI enthusiasts, agent runtime experimenters | Rust/TUI; authenticated terminal byte streams; pet agent cross-surface ownership |
| **Grok Build** | *(Insufficient data)* | *(Unknown)* | *(Unknown)* |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Indicators |
|------|-------|------------|
| **High Momentum / Mature** | **Claude Code**, **OpenAI Codex** | Highest issue engagement (400+ 👍), dedicated teams, rapid PR throughput, enterprise adoption signals |
| **Active Iteration / Growing** | **OpenCode**, **Qwen Code**, **Pi** | 10+ PRs/24h, regular releases, focused roadmap issues (v0.10.0, v0.24.2, v0.86.1), strong feature velocity |
| **Stabilizing / Niche Focus** | **GitHub Copilot CLI**, **Kimi Code CLI**, **DeepSeek TUI** | Lower issue volume but high-severity bugs (data loss, resource leaks), targeted PR bursts, platform-specific gaps |
| **Low Visibility** | **Gemini CLI** (digest failed), **Grok Build** (no activity) | Insufficient public signal to assess |

**Key Insight**: Momentum correlates with **extensibility investment** — tools building plugin/hook frameworks (Claude, OpenCode, Pi, Qwen) show sustained PR activity. Tools reliant on first-party integrations (Copilot CLI, Codex) exhibit more stability-focused cycles.

---

## 6. Trend Signals for Technical Decision-Makers

| Trend | Evidence | Strategic Implication |
|-------|----------|----------------------|
| **Extensibility > Core Model** | 7/9 tools prioritize hooks/plugins/MCP over model upgrades | Invest in tools with **open plugin architectures**; vendor lock-in risk decreases |
| **Windows Is the Differentiator** | Every tool has Windows-specific blockers (install, ConPTY, IME, ARM64) | **Windows CI/CD validation is now table stakes**; tools without native Windows support will lose enterprise deals |
| **Quota/Cost Transparency Demands** | Codex (48 comments), Claude (prompt-cache), Copilot (OTel attrs), OpenCode (TogetherAI usage) | **Observability is a purchasing criterion**; expect standardized cost APIs (OpenCost-style) within 6 months |
| **Multi-Session Hosting = New Primitive** | OpenCode, Qwen, Pi, Codex all building session orchestration | **Agent fleets and parallel subagents** are becoming standard workflow; single-session CLIs are legacy |
| **Provider Abstraction Layer Consolidation** | Pi, OpenCode, Kimi, Qwen all normalizing OpenAI-compatible APIs | **Standardized provider adapters** will emerge; avoid tools hardcoded to single provider |
| **Terminal Byte-Stream Control** | DeepSeek TUI, Pi (Kitty), OpenCode (ACP) investing in raw terminal I/O | **Rich TUIs with graphics/IME support** will replace basic REPLs; evaluate terminal protocol support |
| **Session Persistence = Trust Boundary** | Copilot CLI (checkpoint data loss), OpenCode (V1 migration debris), Qwen (debug log growth) | **Session integrity tooling** (backup, verify, migrate) is an unmet need — opportunity for tooling vendors |

---

## Recommendation Summary

| Decision Context | Recommended Primary | Rationale |
|------------------|---------------------|-----------|
| **Enterprise standardization** | Claude Code / GitHub Copilot CLI | Maturity, IDE integration, compliance tooling |
| **Multi-provider / self-hosted flexibility** | Pi / OpenCode | Best provider abstraction, extension ecosystem |
| **Web IDE / fleet embedding** | Qwen Code | WebShell ACP, QR pairing, worktree management |
| **Terminal-native power users** | DeepSeek TUI / OpenCode | Byte-stream control, session import/export, Rust/TS runtimes |
| **Automation / Computer Use** | OpenAI Codex | Most advanced Computer Use, realtime voice, quota visibility |
| **CJK / Windows-first teams** | Kimi Code CLI | IME fixes, GBK encoding, OpenCode compat |

> **Bottom Line**: The ecosystem has converged on **extensibility, Windows parity, and multi-session orchestration** as the three strategic battlegrounds. Tools investing in all three (OpenCode, Pi, Qwen) show the highest technical velocity; incumbents (Claude, Codex, Copilot) lead on polish and enterprise trust but carry legacy architecture debt.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-09-21 | Source: anthropics/skills*

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| Rank | Skill / PR | Functionality | Discussion Highlights | Status |
|------|------------|---------------|----------------------|--------|
| 1 | **[proofcore-contract-auditor](https://github.com/anthropics/skills/pull/1771)** (#1771) | Automated static analysis of Solidity/Rust smart contracts with cryptographic audit proofs anchored to TON blockchain via ProofCore's zero-storage Merkle protocol | Newest high-profile Web3 skill; zero-storage proof anchoring is novel; Web3 developer demand visible | **Open** (Sep 15) |
| 2 | **[md2video-audio](https://github.com/anthropics/skills/pull/1703)** (#1703) | Compiles Markdown → professional MP4 videos with human-like voiceovers via Marp + TTS; zero-cost workflow | Unique multimedia skill; addresses content creator workflow; Marp integration reduces dependencies | **Open** (Sep 1, updated Sep 15) |
| 3 | **[AWT (AI Watch Tester)](https://github.com/anthropics/skills/pull/822)** (#822) | AI-powered E2E testing: zero-code test generation via browser vision, self-healing selectors, CI/CD integration | Long-running (Mar–Sep); addresses critical testing gap; vision-based approach differentiates from Playwright/Cypress | **Open** (Mar 31, updated Sep 19) |
| 4 | **[skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** (#83) | Meta-skills evaluating other skills across 5 dimensions (structure, examples, resources, triggers, security) | Oldest active PR (Nov 2025); enables skill governance; security analyzer addresses #492 trust concerns | **Open** (Nov 6, updated Jan 7) |
| 5 | **[pyxel](https://github.com/anthropics/skills/pull/525)** (#525) | Retro game development in Python: deterministic headless runs, frame inspection, state checks | Niche but passionate community; deterministic testing for games is hard; Pyxel author (kitao) submitted | **Open** (Mar 5, updated Sep 16) |
| 6 | **[scnet-hpc](https://github.com/anthropics/skills/pull/1615)** (#1615) | SCNet HPC cluster operations: profile-based SSH/Slurm workflows, module/accelerator guidance | Enterprise HPC niche; profile-based config reduces cognitive load; active maintenance (Aug–Sep) | **Open** (Aug 20, updated Aug 24) |
| 7 | **[blast-radius](https://github.com/anthropics/skills/pull/1776)** (#1776) | Pre-flight checklist for bulk/destructive operations: classifies impact, requires explicit confirmation tiers | Safety-critical pattern; addresses "query right about rows, wrong about world" gap; novel UX for destructive ops | **Open** (Sep 17) |
| 8 | **[document-typography](https://github.com/anthropics/skills/pull/514)** (#514) | Prevents typographic defects: orphan/widow control, numbering alignment in AI-generated docs | Universal pain point (every document); low-level but high-impact; quality-of-life for all doc generation | **Open** (Mar 4, updated Mar 13) |

> **Note:** All PRs show `Comments: undefined` in source data; ranking based on recency, update frequency, and issue cross-references.

---

## 2. Community Demand Trends (from Issues)

| Trend | Evidence (Issues) | Community Signal |
|-------|-------------------|------------------|
| **Trust & Security Governance** | [#492](https://github.com/anthropics/skills/issues/492) (43 comments, 2👍): Community skills masquerading as official `anthropic/` namespace; [#83](https://github.com/anthropics/skills/pull/83) meta-analyzers | **Highest engagement** — users demand namespace isolation, skill signing, and automated security review |
| **Organizational Skill Sharing** | [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8👍): No native org-wide sharing; manual .skill file transfer via Slack/Teams | **Strong enterprise demand** — 8👍 indicates production blockers for teams |
| **Evaluation & Trigger Reliability** | [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 7👍): `run_eval.py` 0% trigger rate; [#1769](https://github.com/anthropics/skills/pull/1769): skill-creator reports 100% precision / 0% recall | **Core infrastructure pain** — evaluation harness broken, blocking skill iteration |
| **Context Window Management** | [#1487](https://github.com/anthropics/skills/issues/1487) (4 comments): `claude-api` skill injects 156k tokens in one call | **Emerging bottleneck** — skills must become token-aware as context limits tighten |
| **Deduplication & Plugin Hygiene** | [#189](https://github.com/anthropics/skills/issues/189) (6 comments, 9👍): `document-skills` + `example-skills` install identical content | **Maintenance burden** — 9👍 shows widespread frustration with duplicate skill loading |
| **Agent Governance & Safety** | [#412](https://github.com/anthropics/skills/issues/412) (6 comments): Proposal for policy enforcement, threat detection, audit trails; [#1385](https://github.com/anthropics/skills/issues/1385): Reasoning Quality Gate pipeline | **Maturing direction** — moving from "skills as tools" to "skills as governed agents" |

---

## 3. High-Potential Pending Skills (Active PRs Likely to Land)

| PR | Skill | Why It Has Momentum | Blockers / Next Steps |
|----|-------|---------------------|----------------------|
| [#1742](https://github.com/anthropics/skills/pull/1742) | **mcp-builder: mcp≥2.0 compatibility** | Fixes #1668; MCP 2.0 breaking changes (`streamable_http_client`, custom headers); updated Sep 19 | Minor — API adaptation, tests needed |
| [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator: Windows/runtime fixes** | Addresses false misses in trigger evals; select() pipe failures on Windows; isolates per-worker probes | Platform-specific testing; 3-month iteration suggests complexity |
| [#1769](https://github.com/anthropics/skills/pull/1769) | **skill-creator: 0% recall fix** | Fixes #1721; root cause of broken trigger evaluation; currently misleads optimization loop | Critical for skill-creator credibility; recent (Sep 14) |
| [#1765](https://github.com/anthropics/skills/pull/1765) | **office: UTF-8 diff decoding** | Fixes #1707; non-ASCII content breaks redlining on Windows; affects DOCX/PPTX/XLSX | Low-risk encoding fix; ready for review |
| [#1790](https://github.com/anthropics/skills/pull/1790) | **docx: missing document.xml.rels creation** | Defect 2 fix; creates comment relationships when rels missing; prevents corruption | Targeted fix; created Sep 19, minimal scope |
| [#1724](https://github.com/anthropics/skills/pull/1724) | **mcp-builder: default to claude-sonnet-5** | Updates stale model default (claude-3-7-sonnet); aligns evaluation with current capabilities | Simple version bump; updated Sep 7, awaiting review |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for trustworthy, evaluatable, and shareable skills — shifting from "more skills" to "skills you can safely depend on in production."**

The top issues (#492, #228, #556, #189) all converge on **governance gaps**: namespace spoofing, no org sharing, broken evaluation, and duplicate installations. Meanwhile, new skill proposals (AWT, proofcore-contract-auditor, blast-radius) emphasize **safety, verification, and auditability**. The ecosystem is maturing from a playground into an enterprise-ready capability layer, and the blocking issues are infrastructure, not imagination.

---

*Report generated from github.com/anthropics/skills public data. PR comment counts unavailable in source; rankings inferred from update recency, issue cross-references, and maintainer engagement.*

---

# Claude Code Community Digest — 2026-09-21

---

## 1. Today's Highlights

- **Mods/Extensibility Initiative Gaining Momentum**: Issue #91870 ("Mods - make Claude 10x more extensible") has exploded to 204 comments and 124 reactions, with the team confirming function hooks shipping "in weeks, not days." This signals a major architectural shift toward plugin extensibility.
- **Model Quality Regression Persists**: Issue #77136 (124 comments, 436 👍) documents worsening rhetorical tics and coherence failures across Claude 4.7–5.0 and Fable models — a high-signal regression affecting production workflows.
- **Windows Installation Breakage**: Issue #85663 reports all Windows install methods (npm, winget, ps1, cmd) failing with `defines.json` syntax errors, blocking new adopters on the platform.

---

## 2. Releases

**No new releases in the last 24 hours.**

---

## 3. Hot Issues (Top 10 by Community Signal)

| Issue | Type | Why It Matters | Community Reaction |
|-------|------|----------------|-------------------|
| [#91870](https://github.com/anthropics/claude-code/issues/91870) | Enhancement (hooks, plugins) | **Mods system** — official extensibility framework with function hooks; team committed to shipping in weeks. | 204 comments, 124 👍 — highest engagement in repo history |
| [#77136](https://github.com/anthropics/claude-code/issues/77136) | Bug (model) | **Model quality regression** across 4.7–5.0/Fable: repetitive tics, incoherent prose despite style instructions. | 124 comments, 436 👍 — highest 👍 count, widespread workflow impact |
| [#76694](https://github.com/anthropics/claude-code/issues/76694) | Bug (desktop, cowork) | **Cowork regression**: "Choose a folder" context menu replaced by Chat-style upload-only menu post-merge. | 30 comments, 27 👍 — blocks project onboarding flow |
| [#14920](https://github.com/anthropics/claude-code/issues/14920) | Enhancement (plugins) | **Disable individual plugin skills** — granular control over bundled plugin capabilities (e.g., commit commands). | 17 comments, 93 👍 — long-standing request (Dec 2025) |
| [#45534](https://github.com/anthropics/claude-code/issues/45534) | Bug (vscode, regression) | **VSCode extension streaming broken** since 2.1.37 — responses no longer stream, degrading UX. | 10 comments, 2 👍 — regression in core IDE integration |
| [#95326](https://github.com/anthropics/claude-code/issues/95326) | Bug (chrome, permissions) | **Claude in Chrome blocks all tools on reddit.com** since 2026-09-18 — safety false positive. | 7 comments, 5 👍 — recent regression affecting web workflows |
| [#77298](https://github.com/anthropics/claude-code/issues/77298) | Enhancement (agents) | **Per-call `effort` parameter for Agent tool** — currently requires full agent definition file to override reasoning effort. | 6 comments, 18 👍 — ergonomic gap in subagent control |
| [#92215](https://github.com/anthropics/claude-code/issues/92215) | Bug (mcp, auth) | **Claude Design MCP 403s** — OAuth flow broken, design-scoped token never attached, docs reference nonexistent command. | 6 comments, 4 👍 — first-party MCP integration failure |
| [#84698](https://github.com/anthropics/claude-code/issues/84698) | Bug (desktop) | **Unrequested background `git fetch` on diff/commit refresh** — no setting to disable, untraceable. | 6 comments, 3 👍 — privacy/bandwidth concern |
| [#85663](https://github.com/anthropics/claude-code/issues/85663) | Bug (windows, installation) | **All Windows install methods fail** with `defines.json` syntax error referencing `C:\Program Files\nodejs`. | 4 comments, 0 👍 — complete install blocker on Windows |

---

## 4. Key PR Progress (Last 24h)

| PR | Status | Summary |
|----|--------|---------|
| [#95423](https://github.com/anthropics/claude-code/pull/95423) | Open | **Diff mod optimization**: Skip refetch after read-only shell commands (`ls`, `git status`, `cat`, `grep`) — mirrors built-in panel behavior. |
| [#95698](https://github.com/anthropics/claude-code/pull/95698) | Open | **Plugin hook fix**: Run `ralph-wiggum` and `output-style` `.sh` hooks through `bash` with quoted paths (fixes #95673, half of #78490). |
| [#95587](https://github.com/anthropics/claude-code/pull/95587) | Closed | **Diff pane parity**: Resumed sessions with edits open pane immediately; `/clear` leaves pane open; session line follows engine start — matches built-in behavior. |
| [#94847](https://github.com/anthropics/claude-code/pull/94847) | Open | **Diff pane guard**: Only auto-open on first edit if there's a tracked file to show — prevents empty pane for ignored/outside-repo writes. |
| [#95618](https://github.com/anthropics/claude-code/pull/95618) | Closed | **Telemetry for built-in plugins only**: Batched rows, origin-filtered to exclude user-installed/admin-listed plugins. |

---

## 5. Feature Request Trends

1. **Extensibility & Hooks** — #91870 (Mods), #14920 (disable plugin skills), #77298 (per-call agent effort), #69545 (SubAgentStart hook `updatedInput`) — developers want first-class, granular control over agent/tool behavior.
2. **Model Control & Localization** — #91679, #90603 (default to US English for en-US), #77136 (fix rhetorical tics) — demand for predictable, locale-aware output.
3. **Desktop/IDE Parity** — #76694 (Cowork folder picker), #45534 (VSCode streaming), #81425 (VSCode hang), #92860 (file watch consistency) — desktop and IDE integrations lag behind CLI.
4. **MCP & Auth Reliability** — #92215 (Design MCP), #95292 (Google Drive `update_file`), #95775 (Discord channel plugin) — first-party and community MCP connectors need robustness.
5. **Observability & Cost Transparency** — #95783 (prompt-cache warmth/TTL in Desktop), #95781 (usage limit false positive), #84051/#84081 (auto-update failure modes) — developers want visibility into cache, usage, and update health.

---

## 6. Developer Pain Points (Recurring Themes)

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Model quality regression** | #77136 (436 👍), #90603, #91679 | Core product reliability — incoherent output, wrong locale, repetitive tics across versions |
| **Windows as second-class platform** | #85663 (all install methods broken), #76694, #95326, #95775, #95776 | Blocks adoption; multiple regressions specific to Windows |
| **Auto-update fragility** | #84051 (interrupted update breaks CLI), #84081 (stub install when `allowScripts` blocks postinstall) | No self-healing; manual recovery required |
| **Hook/plugin execution gaps** | #95698 (bare script paths), #95774 (PreToolUse `systemMessage` never renders), #69545 (SubAgentStart missing `updatedInput`) | Extensibility surface incomplete; hooks silently fail |
| **Permission/auto-mode opacity** | #95777 (classifier blocks post-approval), #81432 (mode cycling UX), #81425 (VSCode hang in auto-mode) | Developers can't predict or control autonomy boundaries |
| **Silent failures in background operations** | #84698 (untraceable `git fetch`), #95775 (Discord notifications dropped), #86566 (channel inbound dropped) | Debugging impossible; trust erosion |

---

*Data sourced from `github.com/anthropics/claude-code` — Issues/PRs updated 2026-09-20 → 2026-09-21.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-09-21

## 1. Today's Highlights

The Codex team shipped five rapid-fire alpha releases (0.156.0-alpha.10 through .14) in 24 hours, signaling an active stabilization push for the next minor version. On the issue front, **Windows Desktop reliability dominates**: multiple reports confirm a "first turn works, second message hangs" regression (issues #44102, #45797, #46299, #46590), while a high-profile quota accounting anomaly (#41220, 48 comments) suggests background app activity silently burns weekly limits. The CLI saw a popular enhancement request (#41622, 83 👍) to disable automatic conversation recaps via config.

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| `rust-v0.156.0-alpha.14` | Alpha | Latest in the 0.156.0 pre-release series |
| `rust-v0.156.0-alpha.13` | Alpha | |
| `rust-v0.156.0-alpha.12` | Alpha | |
| `rust-v0.156.0-alpha.11` | Alpha | |
| `rust-v0.156.0-alpha.10` | Alpha | |

**Summary**: Five consecutive alpha builds in 24 hours indicate aggressive iteration on the 0.156.0 line. No changelogs attached to releases; changes likely reflected in the PRs below.

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#25178](https://github.com/openai/codex/issues/25178) | **Windows Computer Use screenshot fails on Win10 22H2** (`SetIsBorderRequired` unsupported) | Blocks Computer Use screenshot capture on older Windows 10 builds; 73 comments, 28 👍 | 🔥 High — long-standing, blocks a core feature |
| [#38350](https://github.com/openai/codex/issues/38350) | **Recurring scheduled tasks disable themselves after successful runs** | Silent disabling of automations breaks workflows; no user action required | 69 comments — widespread confusion |
| [#41220](https://github.com/openai/codex/issues/41220) | **Abnormal Codex quota depletion & usage-accounting inconsistencies** | Cross-report tracker for "quota burns faster than expected"; 17 👍 | 48 comments, 17 👍 — billing/trust impact |
| [#29343](https://github.com/openai/codex/issues/29343) | **Chrome plugin / Computer Use refuses certain sites** | Silent refusal without error degrades browser automation reliability | 31 comments, 12 👍 |
| [#44102](https://github.com/openai/codex/issues/44102) | **Windows Desktop: follow-up messages cannot send after first turn** | Core conversation loop broken on Windows 26.903.61454 | 27 comments, 2 👍 |
| [#37445](https://github.com/openai/codex/issues/37445) | **Desktop app silently consumes 6% weekly limit per background run** | Controlled repro: idle app burns quota via "pending turns" | 19 comments, 13 👍 |
| [#41622](https://github.com/openai/codex/issues/41622) | **Add config to disable automatic conversation recaps (CLI)** | Top-voted enhancement; users want control over recap generation | 16 comments, **83 👍** |
| [#25600](https://github.com/openai/codex/issues/25600) | **Windows App fails to start: app-server websocket closed (0xC0000005)** | Hard crash on launch; blocks all Windows users on affected builds | 11 comments |
| [#43347](https://github.com/openai/codex/issues/43347) | **Closing last Browser Use tab crashes Windows desktop app** | Tab management triggers full app termination | 11 comments |
| [#46853](https://github.com/openai/codex/issues/46853) | **Codex falsely reported repo/deployment state; prepared unsafe public incident report** | Alarming: model hallucinated ops state and drafted public disclosure | 8 comments — safety/reliability concern |

## 4. Key PR Progress (Top 10 by Significance)

| # | PR | Description | Impact |
|---|----|-------------|--------|
| [#46938](https://github.com/openai/codex/pull/46938) | **Independent TUI rendering toggles for Mermaid, math, tables** | New `tui.rendering.{mermaid,math,tables}` config keys; disable per-renderer to show source | UX polish — granular rendering control |
| [#46931](https://github.com/openai/codex/pull/46931) | **Shared, keymap-aware tips in fullscreen composer** | Tips now reflect user's actual keybindings via shared catalog | Accessibility — personalized shortcut hints |
| [#46929](https://github.com/openai/codex/pull/46929) | **Remove `Error` prefix from TUI `config.toml` load errors** | Cleaner error messaging in TUI | DX improvement |
| [#46922](https://github.com/openai/codex/pull/46922) | **Fix realtime V3 transcript reconciliation for handoffs** | Prevents fragment overwrites in interleaved speaker transcripts | Voice/realtime reliability |
| [#46917](https://github.com/openai/codex/pull/46917) | **Enforce current provider requirements for model catalog** | Catalog refreshes now validate provider requirements at read time, not just startup | Correctness — dynamic provider changes |
| [#46912](https://github.com/openai/codex/pull/46912) | **Keep quota warnings visible in TUI composer hint row** | Persistent quota reminder near composer | Addresses quota visibility pain point |
| [#46910](https://github.com/openai/codex/pull/46910) | **Preserve transcript position when opening settings pickers** | Reading position maintained across `/model`, `/theme`, etc. | UX — no scroll loss |
| [#46905](https://github.com/openai/codex/pull/46905) | **Identify local background servers in `/status`** | Shows "Local background server" vs socket address for local daemons | Observability |
| [#46895](https://github.com/openai/codex/pull/46895) | **Right-click copying for transcript & composer selections** | Native context-menu copy with clipboard feedback | Standard desktop behavior |
| [#46884](https://github.com/openai/codex/pull/46884) | **Plain clicks on transcript links + bare URL styling** | Links open on unmodified click; bare URLs styled like Markdown links | Usability polish |

## 5. Feature Request Trends

From the issue corpus, the most-requested directions are:

1. **Quota transparency & control** — Multiple issues (#41220, #37445, #46901) demand visibility into *what* consumes quota (background suggestions, idle app) and ability to disable non-user-initiated usage.

2. **Windows Desktop stability** — Cluster of "first turn OK, second fails" (#44102, #45797, #46299, #46590), launch crashes (#25600), and tab-close crashes (#43347) indicate a platform-specific reliability gap.

3. **Configurability over automation** — #41622 (disable recaps, 83 👍), #44546 (remove desktop pet entirely), and requests for granular feature toggles show users want *less* magic, more control.

4. **Computer Use / Browser automation hardening** — Screenshot failures (#25178), site refusals (#29343), Chrome extension connection issues (#45449), and tab enumeration timeouts (#46609) point to fragile integration layer.

5. **MCP / auth completeness** — #20503 (OAuth scopes in dynamic registration), #45341 (API key auth rejected by browser control) show gaps in enterprise/custom-provider workflows.

## 6. Developer Pain Points

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Windows conversation loop broken** | 4+ issues (#44102, #45797, #46299, #46590) describing identical "turn 1 works, turn 2 hangs" | Critical — blocks daily use |
| **Quota burned by invisible background activity** | #37445 (6%/run measured), #41220 (cross-report tracker), #46901 (exhausted in hours) | High — trust/billing impact |
| **App crashes on routine actions** | Closing tab crashes app (#43347), launch crash (#25600), auth plugin locks keychain (#40226) | High — stability |
| **Silent feature failures** | Computer Use refuses sites without error (#29343), browser control auth mismatch (#45341), scheduled tasks auto-disable (#38350) | Medium — debuggability |
| **Unwanted UI features forced on users** | Desktop pet removal request (#44546, 13 👍), forced recaps (#41622, 83 👍) | Medium — agency |

---

*Digest generated from GitHub data as of 2026-09-21. Links point to live issues/PRs on `github.com/openai/codex`.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

⚠️ Summary generation failed.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-09-21

---

## 1. Today's Highlights
No new releases shipped in the last 24 hours. The issue tracker shows **31 issues updated**, with heavy community engagement around **MCP server reliability** (Figma, Google Workspace), **session corruption bugs** (checkpoint restore deleting untracked files, JSONL truncation on resume), and **resource leaks** (idle CLI spawning 33 GB log + 200% CPU). Three brand-new issues surfaced today: ARM64 ripgrep crash on 64 KiB pages, `/ask` broken in auto mode, and auto model selection underperforming on Linux kernel work.

---

## 2. Releases
*None in the last 24 hours.*

---

## 3. Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Status | Why It Matters |
|---|-------|--------|----------------|
| [#4870](https://github.com/github/copilot-cli/issues/4870) | **Figma MCP remote server fails to load** — `-32601` on `server/discover` treated as fatal (works in VS Code) | CLOSED | 8 comments, 11 👍. Core MCP interop gap: CLI treats discover error as fatal while VS Code handles it gracefully. Blocks Figma design-to-code workflows. |
| [#1675](https://github.com/github/copilot-cli/issues/1675) | **Checkpoint restore (`git clean -fd`) permanently deletes all untracked files** | CLOSED | 5 comments. Data-loss severity: Escape → restore wipes uncommitted work silently. Affects any user using checkpoint rollback. |
| [#4224](https://github.com/github/copilot-cli/issues/4224) | **OTel spans for subagent calls omit billing attributes** (`github.copilot.nano_aiu`, `github.copilot.cost`) | CLOSED | 5 comments, 1 👍. Breaks enterprise cost accounting; subagent usage invisible to external dashboards. |
| [#4839](https://github.com/github/copilot-cli/issues/4839) | **Option to disable taskbar icon** | OPEN | 4 comments, 3 👍. UX friction for multi-session users; no config to suppress OS-level taskbar entries. |
| [#1886](https://github.com/github/copilot-cli/issues/1886) | **`.github/lsp.json` and `.github/mcp.json` do not work** | CLOSED | 4 comments, 4 👍. Project-level tool config ignored; forces global config workaround. |
| [#4606](https://github.com/github/copilot-cli/issues/4606) | **Google Workspace MCP OAuth fails** — trailing-slash issuer mismatch on `accounts.google.com` | OPEN | 3 comments, 1 👍. Blocks Google Workspace MCP adoption; auth metadata parsing bug. |
| [#3589](https://github.com/github/copilot-cli/issues/3589) | **Multiple `sessionStart`/`subagentStart` hooks: only last `additionalContext` injected** | OPEN | 3 comments, 2 👍. Hook composition broken; prevents modular context injection from multiple extensions. |
| [#4807](https://github.com/github/copilot-cli/issues/4807) | **Idle CLI enters `FileWatch` event storm → 221% CPU, 33+ GB log** | OPEN | 2 comments. Severe resource leak; idle process becomes DoS vector. Requires urgent runtime fix. |
| [#4918](https://github.com/github/copilot-cli/issues/4918) | **Built-in ARM64 ripgrep crashes on Linux with 64 KiB pages** (jemalloc `Unsupported system page size`) | OPEN | 0 comments (new today). Blocks search on modern ARM64 Linux (e.g., AWS Graviton3, Apple Silicon Linux). |
| [#4917](https://github.com/github/copilot-cli/issues/4917) | **Auto model selection picks models too weak for Linux kernel patch-series work** | OPEN | 0 comments (new today). Auto mode chooses `gpt-5.6-sol` class models that fail commit-boundary tasks; stronger models needed. |

---

## 4. Key PR Progress
*No pull requests updated in the last 24 hours.*

---

## 5. Feature Request Trends
1. **MCP Ecosystem Maturity** — Multiple issues (#4870, #4606, #1886, #4731) demand robust stdio/HTTP MCP server support: proper error handling, OAuth flows, config discovery, and resilience against cancelled calls.
2. **Session & Context Control** — Users want granular control: disable taskbar icons (#4839), stash prompts (#3034), fix Escape behavior (#3692), and prevent auto-continue on aborted work (#4673).
3. **Model & Cost Transparency** — BYOK catalog gaps (#3118), missing billing attrs in OTel (#4224), and auto-mode model quality (#4917) show demand for predictable model routing and cost observability.
4. **Hook & Extension Composability** — Hook ordering (#3589), skill toggle scaling (#2320), and extension deadlocks (#2348) indicate growing plugin/hook usage hitting architectural limits.
5. **Cross-Platform Parity** — Windows `.bat/.cmd` MCP launch (#3958), ARM64 Linux binary compatibility (#4918), iTerm2 PTY support (#2726) — platform-specific regressions remain frequent.

---

## 6. Developer Pain Points (Recurring Frustrations)
- **Silent Data Loss**: Checkpoint restore (`git clean -fd`) deleting untracked files (#1675) and session resume corrupting `events.jsonl` with truncated/concatenated records (#4098, #2012) erode trust in session persistence.
- **Resource Leaks in Idle State**: #4807 (33 GB log, 2 CPU cores) is the most severe, but search tool stalls (#4448) and extension deadlocks (#2348) also manifest as runaway processes.
- **MCP Fragility**: Figma (#4870), Google (#4606), and generic stdio MCP (#3958, #4731) failures show the protocol integration layer treats edge cases as fatal rather than recoverable.
- **Config Ignored or Ineffective**: `contextTier` no-op (#3762), project-level `lsp.json`/`mcp.json` ignored (#1886), taskbar icon no off-switch (#4839) — configuration surface area not matching user expectations.
- **Auto-Mode Quality Regression**: #4917 (kernel work), #4919 (`/ask` broken in auto), #2670 (BYOK misclassified as premium) — users losing confidence in “auto” routing and model selection logic.

---

*Digest generated from github/copilot-cli issue activity (2026-09-20 → 2026-09-21). Links point to live GitHub issues.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-09-21

## Today's Highlights
No new releases shipped in the last 24 hours. Three active PRs address cross-cutting reliability fixes: Windows stdout encoding crashes, CJK IME composition handling in the web UI, and OpenCode Go session-header compatibility. Two fresh bugs surface a subagent OAuth timeout and a 900 KB prompt-induced stack overflow in the path regex engine.

## Releases
*None in the last 24h.*

## Hot Issues
| # | Title | State | Why it matters | Community signal |
|---|-------|-------|----------------|------------------|
| [#2650](https://github.com/MoonshotAI/kimi-cli/issues/2650) | Intermittent subagent launch failure: OAuth token fetch to auth.kimi.ai times out | OPEN | Subagent spawns fail non-deterministically despite a valid main session; blocks agentic workflows that rely on parallel subagents. | 1 comment, 0 👍 — recent regression (filed 2026-09-17), needs triage. |
| [#2655](https://github.com/MoonshotAI/kimi-cli/issues/2655) | Client crashes on large prompts: stack overflow in path regex (~900 KB input) | OPEN | Hard crash before any network request; regex recursion depth exceeded on large context pastes. Affects power users feeding big codebases. | 0 comments, 0 👍 — filed 2026-09-20, v2.0.2, high severity. |
| [#1534](https://github.com/MoonshotAI/kimi-cli/issues/1534) | CLI causes confusion and automatic repetition in the terminal interface | CLOSED | Long-standing terminal resize/redraw bug causing garbled output and phantom repeats; fixed upstream. | 0 comments, 0 👍 — closed 2026-09-21 after 6 months. |

## Key PR Progress
| # | Title | Author | Scope | Status |
|---|-------|--------|-------|--------|
| [#2658](https://github.com/MoonshotAI/kimi-cli/pull/2658) | fix(web): preserve IME composition on Enter submission | dvd233 | Web UI: prevents premature prompt submit while CJK IME composition is active (macOS/WKWebView). Fixes #2643. | OPEN |
| [#2657](https://github.com/MoonshotAI/kimi-cli/pull/2657) | fix(print): handle unsupported stdout encodings | dvd233 | Print mode: sanitizes streamed output to stdout encoding (e.g., GBK on Windows) to avoid `UnicodeEncodeError`. Fixes #2629. | OPEN |
| [#2656](https://github.com/MoonshotAI/kimi-cli/pull/2656) | fix(llm): send x-opencode-session for OpenCode Go hosts | FOWEPJF255 | LLM client: adds required `x-opencode-session` header for official OpenCode hosts (`opencode.ai`, `*.opencode.ai`). Resolves #2653. | OPEN |

## Feature Request Trends
*Inferred from recent issue/PR activity:*
1. **Robust subagent orchestration** — reliable auth-token propagation and retry logic for spawned agents.
2. **Large-context resilience** — streaming parsers and non-recursive regexes to handle >500 KB prompts without stack overflow.
3. **Cross-platform terminal fidelity** — consistent rendering on Windows legacy consoles and during resize/IME events.
4. **OpenCode ecosystem parity** — first-class header/compat support for OpenCode Go hosts.

## Developer Pain Points
| Pain point | Evidence |
|------------|----------|
| **Flaky subagent authentication** | #2650: OAuth timeout kills entire subagent spawn; no automatic retry. |
| **Hard crashes on big inputs** | #2655: 900 KB paste → stack overflow in path regex; no graceful degradation. |
| **Windows encoding crashes** | #2657 / #2629: `UnicodeEncodeError` on GBK consoles terminates print-mode streams. |
| **IME composition loss in web UI** | #2658 / #2643: Enter key submits unfinished CJK composition. |
| **Terminal redraw corruption** | #1534: Resize causes garbled output & phantom repeats (now closed). |

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-09-21

## 1. Today's Highlights
- **No new releases** in the last 24 hours; focus remains on v2 stabilization and desktop/service reliability.
- **Critical Bedrock image handling bug fixed** (#48069) — GPT-6 Astra sessions no longer stall after reading images.
- **Desktop onboarding overhaul** (#50267) now routes OpenCode Go/Console sign-in through the browser, moving API keys behind an Advanced toggle.

## 2. Releases
*No releases published in the last 24 hours.*

---

## 3. Hot Issues (Top 10 by Impact & Community Reaction)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| **#48069** | [CLOSED] Bedrock GPT-6 Astra fails after read tool returns an image | Blocks Bedrock ConverseStream for non-Claude/Nova/Llama models; sessions stall with HTTP 400. **Fixed in #50272**. | 13 comments, 3 👍 |
| **#27018** | [CLOSED] v1.14.48 localserver disconnects | Regression in Desktop: local server turns red on send, breaking all interactions. | 13 comments, 2 👍 |
| **#50093** | [OPEN] Free usage exceeded — escalating retry timers across models | Users hit 6h+ wait loops even when switching free models; blocks Zen tier workflows. | 8 comments, 5 👍 |
| **#22103** | [CLOSED] Show subagent token usage in TUI counter | High-demand visibility feature; token counter currently only shows main session. | 7 comments, 9 👍 |
| **#14791** | [CLOSED] Agent favors bash over grep/glob tools | Agent ignores purpose-built search tools, falling back to `rg`/`grep` via bash — slower, less precise. | 5 comments, 7 👍 |
| **#49982** | [OPEN] Plugin reload failure silently drops custom agents/commands | `TypeError: pe is not a function` on config change; live service loses discovered agents until restart. | 4 comments |
| **#49108** | [OPEN] Explicit skill sources & source-qualified duplicates | Needed for multi-harness setups; auto-scan merges skill trees unintentionally. | 4 comments |
| **#50155** | [OPEN] DeepSeek V4 Flash requires Global regions but Privacy setting missing | Paid Go subscribers cannot select required region; blocks model access. | 3 comments, 1 👍 |
| **#50206** | [OPEN] Malformed XML/DSML tool-call output from Go models | Models emit DSML-like markup instead of valid tool calls, causing execution failures. | 2 comments |
| **#49938** | [OPEN] `default2` workspace missing after opencode.ai redesign | Paid Go workspace invisible in new UI; users cannot access subscription. | 2 comments, 5 👍 |

---

## 4. Key PR Progress (Top 10 by Impact)

| # | PR | Type | Summary |
|---|----|------|---------|
| **#50276** | fix(core): background long-running shell commands | Bug fix | Prevents agent indefinite block when spawning foreground servers (Uvicorn, etc.). Fixes #50278. |
| **#50277** | fix(opencode): support `pull_request_review` trigger | Bug fix | Adds missing `pull_request_review` to `USER_EVENTS`; enables `/oc` in PR review bodies. Closes #50247. |
| **#50267** | feat(app): browser sign-in for Go/Console | Feature | Onboarding now opens Console in browser; API key flow moved to Advanced. Major UX improvement. |
| **#50272** | fix(opencode): hoist Bedrock tool images except Claude/Nova/Llama 4 | Bug fix | Strips images from tool results for unsupported Bedrock models. Fixes #48069, #49443. |
| **#48878** | fix(tui): force terminal reset on exit for Windows ConPTY | Bug fix | Resolves corrupted terminal state on exit (Alacritty + zellij). Closes #48776. |
| **#49560** | fix(tui): allow custom destination path in move session | Bug fix | `/move` now accepts paths outside current worktree. Closes 4 issues (#49212, #40200, #43938, #35306). |
| **#50231** | chore: upgrade Effect to rc.115 | Refactor | Adopts breaking changes in socket lifecycle, schema parsing, CLI, FS, network APIs. |
| **#50274** | fix(opencode): suppress internal compaction output in ACP | Bug fix | Narrow fix for auto-compaction leaking internal output. Related to #40494. |
| **#50270** | fix(core): delete legacy V1 session rows on session removal | Bug fix | Cleans up `session`/`message`/`part`/`todo` rows left by V1→V2 migration. Closes #50260. |
| **#50264** | fix(opencode): bump togetherai for stream usage reporting | Bug fix | Updates `@ai-sdk/togetherai` to 2.0.68; enables `stream_options.include_usage` for token/cost tracking. Fixes #47716. |

---

## 5. Feature Request Trends
1. **Multi-workspace & skill isolation** — Explicit skill sources (#49108), workspace visibility (#49938), project-local agents (#50269).
2. **Token & cost observability** — Subagent usage in TUI (#22103), compaction transparency (#50187), TogetherAI usage reporting (#50264).
3. **Provider parity & model access** — QwenCloud International (#43067), DeepSeek region selection (#50155), Bedrock thinking param normalization (#50117).
4. **Search & indexing control** — Explicit file-index refresh command (#40392), whole-word path ranking in Code Mode (#50275).
5. **Desktop UX polish** — Tab-close protection (#38350), image/file picker on Windows (#50153), server status spacing (#50273).

---

## 6. Developer Pain Points (Recurring Frustrations)
- **Silent failures in background service** — Plugin reload errors drop custom agents/commands without notification (#49982).
- **Free-tier quota escalation** — Retry timers grow across model switches, effectively locking users out (#50093, #50235).
- **Windows-specific regressions** — File picker IPC failure (#50153), project picker anchored to wrong directory (#50271), ConPTY terminal corruption (#48878).
- **Model output format instability** — Go models emitting DSML/XML instead of structured tool calls (#50206); Bedrock thinking param mismatch (#50117).
- **Migration debris** — V1 session rows persist after V2 migration, polluting DB (#50270).
- **Large-project startup latency** — LLM calls fail in big directories until workspace switched (#38415).

---

*Generated from GitHub data (anomalyco/opencode) for 2026-09-21. All links point to the respective issues/PRs.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-09-21

## Today's Highlights
Pi **v0.86.1** shipped with a new **Meta Muse provider** (OAuth via `/login meta` or `META_API_KEY`), unlocking access to Muse Spark models. The release also addresses a cluster of 0.86.0 regressions: import failures on Windows, clipboard copy regression in containers, bash timeout unit confusion, and NInfer compatibility. Community focus remains on Windows usability (#7547, 67 comments) and provider interoperability bugs.

---

## Releases
### v0.86.1
- **New Provider**: Meta Muse subscription support — sign in with `/login meta` or set `META_API_KEY`. See [provider docs](https://github.com/earendil-works/pi/blob/v0.86.1/packages/coding-agent/docs/providers.md#meta-muse-subscription).
- **Bug Fixes** (from linked PRs/issues): Windows import error (#9794), clipboard OSC 52 regression (#9688), bash timeout seconds-vs-ms confusion (#9785), NInfer strict-tools error (#9816), Cerebras strict-mode exclusion (#9804), agent loop stream termination (#9799), bash temp-file WriteStream errors (#9800).

---

## Hot Issues
| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#7547](https://github.com/earendil-works/pi/issues/7547) | **Windows: How do you use Pi? What issues are you seeing?** | 67 comments, 2👍 — largest open thread. Core team seeking data to prioritize Windows support (WSL, native, containers, SSH). | High engagement; developers report fragmented experiences across WSL2, Git Bash, PowerShell, Dev Containers. |
| [#9508](https://github.com/earendil-works/pi/issues/9508) | **pi-ai sends unsupported OpenAI-specific fields to compatible providers** | Open, 5 comments. Breaks OpenAI-compatible endpoints (400/422) by sending `strict` tool schema, extra roles, auth headers. | Blocks adoption of self-hosted/local providers (Ollama, vLLM, TGI). |
| [#9062](https://github.com/earendil-works/pi/issues/9062) | **Tool-call argument parsing becomes quadratic with fragmented deltas** | Open, 5 comments. `processResponsesStream()` re-parses full accumulated JSON on every delta → O(N²) on long tool calls. | Performance regression for large `bash`/`edit` tool outputs; affects all streaming providers. |
| [#9448](https://github.com/earendil-works/pi/issues/9448) | **`pi auth check` cannot see providers from extensions** | Open, 3 comments, 1👍. Extensions register providers at runtime; `auth check` only scans built-ins → false `invalid_state`. | Breaks CI/CD gating that relies on `pi auth check` for extension-provided models. |
| [#9497](https://github.com/earendil-works/pi/issues/9497) | **Windows: CJK IME input laggy, candidate window missing** | Open, 3 comments. Workaround: `showHardwareCursor` fixes it, but hurts UX. | Affects Chinese/Japanese/Korean developers on Windows; core text-input regression. |
| [#9822](https://github.com/earendil-works/pi/issues/9822) | **Codex tool calls leak as raw harmony text after compaction (gpt-5.6-luna)** | Closed, 5 comments. Tool calls emitted as plain assistant text in Codex harmony format instead of structured blocks. | Model retries endlessly; no tool execution. Specific to `openai-codex` provider + new model. |
| [#9815](https://github.com/earendil-works/pi/issues/9815) | **Mistral API doesn't respect `Retry-After` header on 429** | Closed, 5 comments. Rate-limit handling ignores standard header → immediate retry → sustained 429s. | Provider-retry utility needs standards compliance. |
| [#9688](https://github.com/earendil-works/pi/issues/9688) | **Clipboard copy regression in containers/SSH** | Closed, 4 comments, 2👍. OSC 52 emission now requires SSH detection; breaks interactive containers without SSH. | Fixed in v0.86.1 via detection logic adjustment. |
| [#9807](https://github.com/earendil-works/pi/issues/9807) | **TUI full re-render causes lag at 800+ messages** | Closed, 2 comments. 1.7 MB session → full scrollback re-render on every keystroke/scroll. | Compared unfavorably to OpenCode's incremental diffing; architecture-level concern. |
| [#9803](https://github.com/earendil-works/pi/issues/9803) | **RPC steer success cannot correlate with extension-handled input** | Open, 2 comments. Since 0.86.0, steer passes through extension handlers; success response doesn't identify which input was queued. | Breaks RPC clients needing deterministic steer tracking. |

---

## Key PR Progress
| # | Title | Type | Impact |
|---|-------|------|--------|
| [#9096](https://github.com/earendil-works/pi/pull/9096) | **feat: Meta provider with Muse subscription OAuth** | Feature | New provider in v0.86.1; unusual daily token re-minting, burst-style streaming. |
| [#9116](https://github.com/earendil-works/pi/pull/9116) | **feat(ai): add mid-conversation system messages** | Feature | Enables dynamic prompt/tool changes without full rewrite; foundation for #9117. |
| [#9117](https://github.com/earendil-works/pi/pull/9117) | **feat(coding-agent): deliver prompt/tool changes as system deltas** | Feature | Stacked on #9116; coding agent now streams system-message deltas for tool loadout changes. |
| [#9804](https://github.com/earendil-works/pi/pull/9804) | **fix(ai): exclude Cerebras from supportsStrictMode** | Bugfix | Cerebras rejects mixed strict/non-strict tools; extensions with non-strict tools caused 400s. |
| [#9800](https://github.com/earendil-works/pi/pull/9800) | **fix(coding-agent): handle bash output temp file WriteStream errors** | Bugfix | Prevents unhandled rejections when large bash output triggers temp-file streaming. |
| [#9799](https://github.com/earendil-works/pi/pull/9799) | **fix(agent): terminate agentLoop streams on unrecoverable failure** | Bugfix | Adds rejection handler to loop promise; catches provider/auth/network failures before first event. |
| [#8743](https://github.com/earendil-works/pi/pull/8743) | **fix(coding-agent): ignore stale tool image conversions** | Bugfix | Kitty image cache now tied to source image; prevents stale/partial renders during rapid tool updates. |

---

## Feature Request Trends
1. **Windows-first support** — #7547 (67 comments) shows demand for unified docs, out-of-box WSL2/native/container guidance, and IME fixes (#9497).
2. **Provider interoperability layer** — Multiple issues (#9508, #9815, #9805, #9816) request standardized handling of OpenAI-compatible APIs: strict-mode negotiation, retry-header compliance, error-code mapping, tool-schema dialects.
3. **Extension provider parity** — #9448, #9817, #9821: extensions need first-class provider registration, npm resolution, and bound streaming methods.
4. **Session scalability** — #9807 (TUI render), #9820 (session listing O(N) file reads), #9062 (quadratic tool parsing) point to architectural limits at ~800 messages / large tool calls.
5. **Settings ergonomics** — #9806, #9808: skills filter syntax (`-` vs `!`, glob vs exact) is undocumented and counterintuitive; #9631: image resize limits now exposed.

---

## Developer Pain Points
| Area | Recurring Frustration | Frequency |
|------|----------------------|-----------|
| **Windows** | Fragmented run modes (WSL, native, container, SSH); IME broken; import errors; clipboard quirks | High (top issue + 3 regressions in 0.86.0) |
| **Provider compatibility** | OpenAI-compatible endpoints reject Pi requests (strict tools, extra fields, auth); rate-limit handling non-standard; model-specific quirks (Codex harmony, Z.AI errors) | High (5+ issues in 24h) |
| **Extension ecosystem** | Providers invisible to `auth check`; npm resolution fails for `main`/`exports` packages; streaming methods unbound | Medium (3 issues) |
| **Performance at scale** | TUI full re-render lag; quadratic tool-call parsing; session listing reads entire files | Medium (3 issues) |
| **Settings/UX discoverability** | Skills filter syntax undocumented; image resize limits hidden; Homebrew install missing from README | Low-Medium (4 issues, mostly quick fixes) |

---

*Digest generated from `earendil-works/pi` GitHub activity (2026-09-20 → 2026-09-21). Links point to live issues/PRs.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-09-21

---

## 1. Today's Highlights

- **v0.24.2 released** with a focused fix restoring the remote workspace add flow in the web shell, plus a nightly build (v0.24.2-nightly.20260920) adding Live Voice microphone capture via AudioWorklet.
- **Cross-session messaging hardening** is underway: PR #12348 ensures inbound messages are judged by the *actual* session settings (not just the sender-provided ID), addressing a gap from #12292.
- **Windows daemon guard over-blocking** benign PowerShell invocations (e.g., `pwsh -NoProfile -Command "Get-Date -Format o"`), flagged in #12375 as a security enhancement needing discussion.

---

## 2. Releases

| Version | Key Changes |
|---------|-------------|
| **v0.24.2** | • `feat(web-shell)`: Restore remote workspace add flow ([#12085](https://github.com/QwenLM/qwen-code/pull/12085)) |
| **v0.24.2-nightly.20260920.eceaede18e** | • `feat(web-shell)`: Capture Live Voice microphone via AudioWorklet ([#12338](https://github.com/QwenLM/qwen-code/pull/12338)) |

> No breaking changes reported.

---

## 3. Hot Issues (Top 10 by Relevance & Activity)

| # | Title | Why It Matters | Community Signals |
|---|-------|----------------|-------------------|
| [#12287](https://github.com/QwenLM/qwen-code/issues/12287) | **Workflow retry-from-history: hardening follow-ups** | Splits ~1900-line PR #12190 into reviewable pieces; touches runner resume, checkpoint schema, daemon logic. | 9 comments, P2 priority, roadmap/background-automation |
| [#12303](https://github.com/QwenLM/qwen-code/issues/12303) | **Cross-session gate: settling, capping, naming sessions** | Defines host-level policies for multi-session hosts (settling, caps, naming) — foundational for multi-agent roadmap. | 7 comments, P2, needs-discussion |
| [#12375](https://github.com/QwenLM/qwen-code/issues/12375) | **Windows daemon guard rejects benign explicit PowerShell** | Blocks legitimate `pwsh` calls (e.g., date query) pre-execution; impacts Windows ACP-hosted sessions. | 4 comments, P3, security, needs-discussion |
| [#12290](https://github.com/QwenLM/qwen-code/issues/12290) | **MCP inline-media bounding trusts server-declared MIME, not bytes** | Security/risk: admission & labelling based on unbounded declared MIME, not actual content. | 4 comments, P2, scope/mcp |
| [#12335](https://github.com/QwenLM/qwen-code/issues/12335) | **WebShell: host controls for model add/delete** | Requests `modelManagement={{ allowAdd, allowDelete }}` prop for embedded WebShell — embedder control. | 3 comments, feature-request |
| [#12373](https://github.com/QwenLM/qwen-code/issues/12373) | **Session debug logs not cleaned by background housekeeping** | `QWEN_DEBUG_LOG_FILE` creates per-session `.txt` files; 30-day cleanup doesn’t apply → disk growth. | 3 comments, P2, performance/logging |
| [#12357](https://github.com/QwenLM/qwen-code/issues/12357) | **Main CI failed: E2E MCP add-tool test flakiness** | Automated CI failure on `mcp-server.test.ts`; marked `autofix/skip`, `autofix/approved` — needs human triage. | 2 comments, bot-reported |
| [#12376](https://github.com/QwenLM/qwen-code/issues/12376) | **Can’t switch model to Qwen Code: auth error (v0.13.0)** | User on Linux/Node 22 blocked by `/auth` re-auth prompt; may indicate token/refresh regression. | 2 comments, P3, auth/model-switching, welcome-pr |
| [#12366](https://github.com/QwenLM/qwen-code/issues/12366) | **Deferred review findings from PR #12311 (structured shell results)** | Autofix-deferred items from structured shell execution results PR; requires maintainer follow-up. | 2 comments, bot-reported |
| [#11954](https://github.com/QwenLM/qwen-code/issues/11954) | **Fleet Shepherd Dashboard** | Auto-maintained fleet health dashboard (scans, syncs, releases, cleanups) — observability for bot fleet. | 0 comments, bot-maintained |

---

## 4. Key PR Progress (Top 10 by Impact)

| # | Title | Type | Status | Summary |
|---|-------|------|--------|---------|
| [#12377](https://github.com/QwenLM/qwen-code/pull/12377) | `fix(live): report cause when Live Voice fails to start with non-Error` | Bugfix | **Closed** | Fixes `[object Object]` error banner by handling non-Error rejections from ACP bridge. |
| [#12364](https://github.com/QwenLM/qwen-code/pull/12364) | `fix(web-shell): verify wildcard export targets against packed file list` | Bugfix | Open | Publish verifier now validates npm subpath patterns (e.g., `"./*": "./dist/*"`) instead of stating literal paths. |
| [#12348](https://github.com/QwenLM/qwen-code/pull/12348) | `feat(core): judge cross-session message by session its host names` | Feature | Open | Inbound gate resolves session by host-published ID (not sender spelling); supports `/clear` aliasing. |
| [#11563](https://github.com/QwenLM/qwen-code/pull/11563) | `fix(channels): preserve Feishu rich content and quoted resources` | Feature | Open | Preserves images, links, code blocks, downloads resources from quoted parents using original message IDs. |
| [#12354](https://github.com/QwenLM/qwen-code/pull/12354) | `feat: add ui.hideStatusBar to reduce flickering (Issue #6137)` | Feature | Open | New `ui.hideStatusBar` setting (default `false`); conditionally renders OpenTUI footer. |
| [#12311](https://github.com/QwenLM/qwen-code/pull/12311) | `feat(web-shell): present structured shell execution results` | Feature | Open | Organizes shell output into Command/Output/Details tabs; elapsed time, scrollable regions, icon copy. |
| [#12322](https://github.com/QwenLM/qwen-code/pull/12322) | `feat(web-shell): enable expiring QR pairing on non-loopback listeners` | Feature | Open | QR mobile access on authenticated non-loopback; 60s expiry, 45s refresh, independent device creds. |
| [#12340](https://github.com/QwenLM/qwen-code/pull/12340) | `perf(cli): optimize one-shot headless execution` | Perf | Open | One-shot defaults to pipe-based `child_process`; POSIX `exec` replaces process (no supervisor retention). |
| [#12347](https://github.com/QwenLM/qwen-code/pull/12347) | `fix(workflows): write resumed run's checkpoint before it registers` | Bugfix | **Closed** | Resume now writes checkpoint *before* register, waits, rolls back on failure; fresh runs unchanged. |
| [#12154](https://github.com/QwenLM/qwen-code/pull/12154) | `feat(web-shell): manage repository worktrees from git dialog` | Feature | Open | New "Worktrees" tab in git dialog: lists slugs, badges (main/current/locked/missing), branch, HEAD, workdir. |

---

## 5. Feature Request Trends

| Direction | Evidence (Issues/PRs) |
|-----------|------------------------|
| **Multi-session / multi-agent host controls** | #12303 (cross-session gate policies), #12348 (host-named session resolution), #12287 (workflow retry hardening) |
| **WebShell embedder extensibility** | #12335 (model add/delete controls), #12311 (structured shell results), #12322 (QR pairing), #12154 (worktree management) |
| **Windows/daemon compatibility** | #12375 (PowerShell guard), #12376 (auth/model-switch on Linux), #12340 (POSIX one-shot optimization) |
| **Observability & debugging** | #12373 (debug log cleanup), #12356 (trajectory panel for run timing), #11954 (fleet dashboard) |
| **MCP robustness** | #12290 (MIME-by-bytes), #12357 (E2E MCP test flakiness) |

---

## 6. Developer Pain Points

| Pain Point | Frequency / Signals |
|------------|---------------------|
| **Windows daemon over-blocking legitimate commands** | #12375: benign `pwsh` calls rejected pre-execution; blocks common admin tasks. |
| **Auth/model-switching failures on older versions** | #12376: v0.13.0 user cannot switch to Qwen Code model — `/auth` loop; may affect upgrade path. |
| **Debug log accumulation** | #12373: per-session `.txt` files bypass 30-day cleanup → unbounded disk growth when `QWEN_DEBUG_LOG_FILE` enabled. |
| **CI flakiness in E2E/MCP tests** | #12357: main-branch CI failure on MCP add-tool test; multiple `autofix` tags indicate recurring instability. |
| **Cross-session message routing ambiguity** | #12303, #12348: host holding multiple sessions lacks clear settling/capping/naming policy; sender-provided IDs unreliable. |
| **MCP media handling trusts server MIME** | #12290: security risk — bounding/admission based on declared MIME, not actual bytes; unbounded label space. |

---

*Generated from `github.com/QwenLM/qwen-code` data (releases, issues, PRs updated 2026-09-20 → 2026-09-21).*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-09-21

## 1. Today's Highlights
The 0.10.0 release train advanced significantly: six follow-up PRs landed in the last 24 h, fixing CI, stack overflows in test suites, Linux sleep-inhibitor leaks, terminal byte-stream plumbing, and session-import synchronization. A critical silent-freeze bug (#6184) was closed after root-cause analysis. The v0.10.0 redesign issue (#6094) remains the central coordination point for the upcoming release.

## 2. Releases
No new releases published in the last 24 h. Version 0.10.0 is in active development (see #6094).

## 3. Hot Issues
| # | Title | Status | Why It Matters | Community Signal |
|---|-------|--------|----------------|------------------|
| [#6184](https://github.com/Hmbown/Codewhale/issues/6184) | Engine silently freezes mid-run | **CLOSED** | Critical reliability bug: long tool-heavy runs stop producing output without logs/errors; user input still persisted. Root cause identified and fixed in follow-up PRs. | 7 comments, 0 👍 |
| [#6094](https://github.com/Hmbown/Codewhale/issues/6094) | v0.10.0 — redesign, release checks, how to help | **OPEN** | Umbrella tracking issue for the major 0.10.0 redesign; defines scope, acceptance criteria, and contribution entry points. | 7 comments, 1 👍 |
| [#5856](https://github.com/Hmbown/Codewhale/issues/5856) | Computer-use plugin: live-install receipt + look-act loop | **OPEN** | Release-blocker for built-in computer-use capability; requires bundle discovery, trust/enable flow, and first-loop validation. | 5 comments, 0 👍 |
| [#6362](https://github.com/Hmbown/Codewhale/issues/6362) | Test stack overflow aborts `codewhale-tui` lib suite | **CLOSED** | `configured_model_api_tests` overflow thread stacks, killing `cargo test --lib` and blocking CI. Fixed in #6370. | 2 comments, 0 👍 |
| [#6155](https://github.com/Hmbown/Codewhale/issues/6155) | Pet: qualify `/pet` habitat & shared owner across TUI+desktop | **OPEN** | Cross-surface ownership work for the `/pet` agent; needs real-terminal qualification and shared-owner acceptance. | 2 comments, 0 👍 |

## 4. Key PR Progress
| # | Title | Status | Summary |
|---|-------|--------|---------|
| [#6370](https://github.com/Hmbown/Codewhale/pull/6370) | 0.10.0 release readiness | **CLOSED** | Green CI across all platforms; includes #6362 stack fixes, water cadence, Extensions trust review, SIGPIPE-safe MCP startup. |
| [#6371](https://github.com/Hmbown/Codewhale/pull/6371) | 0.10.0 follow-up: input deadline, terminal routes, tokio child inhibitor | **CLOSED** | Fixes user-input timeout never firing; moves terminal routes off runtime workers; converts sleep inhibitor to managed tokio child. |
| [#6372](https://github.com/Hmbown/Codewhale/pull/6372) | 0.10.0 follow-up 2: no orphaned inhibitor, bounded blocking tasks | **CLOSED** | Eliminates leftover `sleep infinity` per turn on Linux; bounds terminal-route blocking tasks. |
| [#6373](https://github.com/Hmbown/Codewhale/pull/6373) | docs(environments): update Linux sleep inhibitor description | **CLOSED** | Updates `ENVIRONMENTS.md` to reflect `cat`-pipe guard instead of `systemd-inhibit sleep infinity`. |
| [#6361](https://github.com/Hmbown/Codewhale/pull/6361) | feat(runtime-api): terminal byte stream, stream resume, pet agent-count pin | **CLOSED** | Delivers authenticated byte I/O, resize, exit, bounded replay; adds stream resume + idempotent submit; pins pet agent count. |
| [#6369](https://github.com/Hmbown/Codewhale/pull/6369) | fix(session): synchronize engine after foreign session import | **CLOSED** | Ensures `/resume <file>` and inline-JSON imports switch engine to new session ID/transcript instead of staying on old history. |

## 5. Feature Request Trends
1. **Terminal-first agent runtime** — Byte-stream terminal control (#6361), look-act loop for computer-use (#5856), and pet agent habitat qualification (#6155) show a push toward rich, stateful terminal interactions.
2. **Cross-surface session/agent sharing** — Shared owner across TUI + desktop (#6155) and foreign session import sync (#6369) indicate demand for seamless multi-client workflows.
3. **Release hardening & observability** — Stack-size fixes (#6362), CI stability (#6370), and inhibitor cleanup (#6371, #6372) reflect a maturing release process.

## 6. Developer Pain Points
- **Silent engine hangs** (#6184): No logs, errors, or crashes during long tool-heavy runs — only persisted user messages with no model response.
- **Test suite fragility** (#6362): Stack overflows in model-API tests abort the entire lib test binary, blocking CI.
- **Orphaned system resources** (#6371, #6372): Linux sleep inhibitors (`sleep infinity`) leaked per interactive turn; terminal-route tasks could block unbounded.
- **Session state divergence** (#6369): Importing a foreign session left the engine on the old history, causing desync.
- **Documentation drift** (#6373): `ENVIRONMENTS.md` lagged behind actual inhibitor implementation.

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*