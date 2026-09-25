# AI CLI Tools Community Digest 2026-09-25

> Generated: 2026-09-25 04:35 UTC | Tools covered: 10

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

# Cross-Tool Comparison Report: AI CLI Tools Ecosystem (2026-09-25)

---

## 1. Ecosystem Overview

The AI CLI tools landscape shows **bimodal maturity**: established tools (Claude Code, Codex, Gemini CLI, Copilot CLI) are deep into enterprise hardening—OAuth/SSO fixes, Windows desktop parity, sandbox reliability, and session durability—while newer entrants (OpenCode, Pi, Qwen Code, DeepSeek TUI) iterate rapidly on core architecture (multi-agent orchestration, provider-agnostic runtimes, TUI/UX polish). A clear **convergence on multi-agent, durable sessions, and provider interoperability** is visible across all active projects. Grok Build and Kimi Code show minimal recent activity.

---

## 2. Activity Comparison (2026-09-25)

| Tool | Releases (24h) | Hot Issues (Top 10) | PRs Merged/Updated (24h) | Primary Focus |
|------|----------------|---------------------|---------------------------|---------------|
| **Claude Code** | v2.1.282 (stable) | 10 (49👍 top) | 8 | Telemetry plumbing, diff robustness, Windows Desktop bridge, MCP OAuth |
| **OpenAI Codex** | v0.157.0 stable + 7 alphas | 10 (89👍 top) | 10 | GPT-6 models, Bedrock, Windows desktop/sandbox, safety filters |
| **Gemini CLI** | v0.62.0-nightly | 10 (8👍 top) | 10 | Subagent reliability, auth loops, session resume, file-op serialization |
| **GitHub Copilot CLI** | v1.0.89-2 / -3 (patches) | 10 (7👍 top) | 1 | Session OOM, auth refresh, parallel workspaces, Windows sandbox |
| **Kimi Code CLI** | — | 0 | 1 (security dep) | Dependency maintenance only |
| **OpenCode** | — | 10 (100👍 top) | 10 | V2 stabilization, compaction, TUI timing, plugin API gaps |
| **Pi** | — | 10 (8👍 top) | 10 (merged) | Provider compatibility, OTLP telemetry, streaming robustness |
| **Qwen Code** | v0.24.5 (multi-component) | 10 (19 comments top) | 10 | Startup perf (2.2×), Managed Agent architecture, self-update fix |
| **DeepSeek TUI** | v0.10.1 imminent | 10 (11 comments top) | 18 (merged) | Session restore, compaction, config validation, static audit, model routing |
| **Grok Build** | — | 0 | 0 | No activity |

**Key**: High PR velocity ≠ high issue engagement. OpenCode (#8751, 100👍) and Codex (#41622, 89👍) show strongest community pull for specific features.

---

## 3. Shared Feature Directions (Cross-Tool Requirements)

| Requirement | Tools Affected | Specific Needs |
|-------------|----------------|----------------|
| **Multi-agent / durable session orchestration** | Claude Code, Codex, Gemini CLI, Copilot CLI, OpenCode, Qwen Code, DeepSeek TUI | Subagent turn-limit reporting (Gemini), background agent coordination (Qwen, Codex), session resume without double-replay (Gemini, Claude), compaction reliability (OpenCode, DeepSeek, Copilot), WebSocket-based agent loops (Qwen) |
| **Provider-agnostic runtime / MCP hardening** | Claude Code, Codex, Gemini CLI, OpenCode, Pi, Qwen Code | MCP OAuth trailing slash (Claude), token refresh `expiresAt: 0` (Claude), OpenAI-field sanitization for Bedrock/OpenRouter (Pi, Qwen), MCP handler reuse (Codex), local server leak fixes (OpenCode) |
| **Windows desktop parity & sandbox reliability** | Claude Code, Codex, Copilot CLI, Gemini CLI | Bridge handshake timeouts (Claude), multi-monitor window spill (Codex), sandbox helper failures (Codex, Copilot), WSL2 ARM64 clipboard (Copilot), auth loops on Windows/WSL (Gemini) |
| **Session durability & crash recovery** | All except Kimi/Grok | OOM on long sessions (Copilot, Codex, OpenCode), compaction loops (Copilot, OpenCode, DeepSeek), auth token refresh without restart (Copilot, Claude), transcript corruption on power loss (Codex) |
| **TUI/UX configurability** | Codex, OpenCode, Pi, DeepSeek TUI, Qwen Code | Hide tool calls (Codex, 89👍), adjustable verbosity (Claude), context % accuracy (OpenCode), model picker UX (DeepSeek), accessible announcements (Qwen) |
| **Startup performance & resource efficiency** | Qwen Code, OpenCode, DeepSeek TUI, Pi | Qwen: 2.2–2.4× faster, 60% less RSS; OpenCode: allocation loop fix; DeepSeek: resume by moving not cloning; Pi: streaming robustness |

---

## 4. Differentiation Analysis

| Dimension | Enterprise/Platform Tools | Developer-First / Hackable Tools |
|-----------|---------------------------|----------------------------------|
| **Primary Focus** | SSO/OAuth hardening, audit trails, policy compliance, cross-platform desktop parity | Inner-loop speed, hot-reload extensibility, provider freedom, TUI customization |
| **Target Users** | Enterprise teams, regulated environments, multi-device workflows | Power users, plugin authors, multi-model experimenters, local-first advocates |
| **Technical Approach** | Managed runtimes (Claude Desktop, Codex background server, Copilot daemon), proprietary protocols | Open protocols (ACP, MCP), local-first storage, schema-driven config (Pi, OpenCode, DeepSeek) |
| **Release Cadence** | Stable + patch (Claude, Copilot), stable + rapid alpha (Codex) | Nightly + frequent patches (Gemini, Qwen, DeepSeek, OpenCode, Pi) |
| **Extensibility Model** | Skills/agents via first-party registry (Claude, Codex, Copilot) | Plugin APIs, schema-backed config, community skills (OpenCode, Pi, DeepSeek, Qwen) |

**Notable outliers**:  
- **Qwen Code** bridges both: Managed Agent architecture for fleet/enterprise + Web Shell polish for developers.  
- **Pi** targets framework builders: provider-agnostic core, OTLP telemetry, extension lifecycle rigor.  
- **DeepSeek TUI** innovates on UX: deterministic cross-surface avatar, conversational settings, model routing.

---

## 5. Community Momentum & Maturity

| Tier | Tools | Indicators |
|------|-------|------------|
| **High momentum, maturing** | **Claude Code**, **OpenAI Codex**, **Gemini CLI** | 10+ issues/PRs daily, enterprise blockers tracked, dedicated security/perf PRs, multi-platform desktop investment |
| **High momentum, early-core** | **OpenCode**, **Qwen Code**, **DeepSeek TUI** | 10–18 PRs/day, architectural proposals with deep discussion (OpenCode #8751 100👍, Qwen #12380 19 comments), rapid stabilization cycles |
| **Niche / framework focus** | **Pi** | 10 PRs merged/day, strong provider-interop push, but issue auto-closure erodes contributor trust |
| **Maintenance mode** | **GitHub Copilot CLI** | Only 1 PR in 24h despite 10 high-severity issues (OOM, auth, parallel sessions); patch-only releases |
| **Low activity** | **Kimi Code CLI**, **Grok Build** | Security dep update only / zero activity |

**Signal**: Tools investing in **session durability** and **provider interop** (Claude, Codex, Gemini, Qwen, OpenCode) show healthiest contributor velocity. Copilot CLI's issue/PR gap suggests resource reallocation.

---

## 6. Trend Signals for Technical Decision-Makers

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **Multi-agent is the new baseline** | Every active tool has subagent/orchestration issues; Qwen's Managed Agent proposal, OpenCode's sibling communication, Gemini's subagent recovery | Expect APIs for agent spawn, handoff, budgeting, and durable execution to stabilize in 2026H2 |
| **Provider-agnostic runtimes winning** | Pi, Qwen, OpenCode, DeepSeek all building abstraction layers over OpenAI/Anthropic/Bedrock/OpenRouter/Ollama | Vendor lock-in risk decreasing; evaluate tools on *router quality* not just default model |
| **Windows is the hardest platform** | 4+ tools report desktop/sandbox/auth regressions specific to Windows/WSL | Teams on Windows should budget extra validation; prefer tools with dedicated Windows CI (Claude, Codex, Copilot) |
| **Session durability = trust** | OOM, compaction loops, auth stalls, transcript loss appear in 7/10 tools | "Pick up where you left off" is now a correctness requirement, not a nice-to-have |
| **TUI configurability demand exceeds supply** | Codex (89👍), Claude (multiple opposing requests), OpenCode (100👍 hot-reload), DeepSeek (model picker UX) | Binary verbose/quiet modes insufficient; expect per-user verbosity profiles and component-level toggles |
| **Telemetry/observability becoming first-class** | Claude (telemetry hooks), Codex (multi-agent metrics), Pi (OTLP exporter), OpenCode (flock heartbeat) | Production fleet management needs

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-09-25 | Source: anthropics/skills*

---

## 1. Top Skills Ranking — Most-Discussed PRs by Community Attention

| Rank | Skill (PR) | Functionality | Discussion Signals | Status |
|------|------------|---------------|-------------------|--------|
| 1 | **[skill-creator fix: trigger eval isolation & Windows support](https://github.com/anthropics/skills/pull/1298)** (#1298) | Core infrastructure: fixes false trigger misses, Windows `select()` pipe failures, and runtime-failure handling in skill evaluation harness | Long-running (Jun 10 → Sep 16); touches every skill's test reliability | `OPEN` |
| 2 | **[mcp-builder: MCP ≥2.0 compatibility](https://github.com/anthropics/skills/pull/1742)** (#1742) | Updates `streamablehttp_client` → `streamable_http_client` + custom header API for MCP 2.0+; unblocks all MCP skill development | Active maintenance (Sep 8 → Sep 19); fixes #1668 | `OPEN` |
| 3 | **[proofcore-contract-auditor](https://github.com/anthropics/skills/pull/1771)** (#1771) | Web3 skill: static analysis of Solidity/Rust contracts + cryptographic audit proofs anchored on TON via ProofCore's zero-storage Merkle protocol | New submission (Sep 15); high-value niche (smart-contract security) | `OPEN` |
| 4 | **[md2video-audio](https://github.com/anthropics/skills/pull/1703)** (#1703) | Zero-cost Markdown → professional MP4 with human-like voiceovers (Marp slides + TTS) | Creative/media pipeline; updated Sep 15 | `OPEN` |
| 5 | **[testing-patterns](https://github.com/anthropics/skills/pull/723)** (#723) | Comprehensive testing skill: Trophy model, AAA pattern, React Testing Library, contract testing, E2E, property-based, mutation testing | Long-running (Mar 22 → Sep 21); addresses universal developer need | `OPEN` |
| 6 | **[blast-radius](https://github.com/anthropics/skills/pull/1776)** (#1776) | Safety checklist for bulk/destructive ops (archiving users, revoking access, deleting rows, batch mail); classifies impact before execution | DevOps/safety focus; new (Sep 17–18) | `OPEN` |
| 7 | **[notion-spec-to-implementation + quantitative-resume-auditor](https://github.com/anthropics/skills/pull/1245)** (#1245) | Two skills: (1) Notion specs → implementable tasks with acceptance criteria; (2) Resume auditing with quantified metrics | Productivity/HR domain; long-running (Jun 2 → Sep 24) | `OPEN` |
| 8 | **[pyxel](https://github.com/anthropics/skills/pull/525)** (#525) | Retro game development in Python: headless input-driven runs, frame inspection, state checks | Creative coding niche; long-running (Mar 5 → Sep 22) | `OPEN` |

> **Note:** All PRs show `Comments: undefined` in the raw data; ranking weights recency of updates, longevity of discussion, and cross-cutting impact (infrastructure > domain-specific).

---

## 2. Community Demand Trends — From Issues (Sorted by Engagement)

| Trend | Evidence (Top Issues) | Demand Signal |
|-------|----------------------|---------------|
| **Security & Trust Boundaries** | [#492](https://github.com/anthropics/skills/issues/492) (43 comments, 2👍): Community skills masquerading under `anthropic/` namespace — *critical trust vulnerability* | 🔴 **Highest urgency** — namespace isolation & provenance verification needed |
| **Org-Wide Skill Sharing** | [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8👍): No native sharing; manual `.skill` file exchange via Slack/Teams | 🟠 **Strong product demand** — marketplace/library feature |
| **Core Evaluation Reliability** | [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 7👍): `run_eval.py` triggers skills at 0% rate; [#1390](https://github.com/anthropics/skills/issues/1390) (4 comments): mcp-builder eval scores 0/N due to swallowed `TextContent` errors | 🟠 **Blocking infrastructure** — skill authors cannot validate triggers |
| **Skill Lifecycle & UX** | [#62](https://github.com/anthropics/skills/issues/62) (10 comments): Skills disappearing after file rename; [#189](https://github.com/anthropics/skills/issues/189) (6 comments, 9👍): `document-skills`/`example-skills` install duplicate content | 🟡 **UX polish** — installation, deduplication, persistence |
| **Specialized Domain Skills** | [#1329](https://github.com/anthropics/skills/issues/1329) (9 comments): `compact-memory` (symbolic agent state); [#412](https://github.com/anthropics/skills/issues/412) (6 comments): `agent-governance` (policy enforcement, trust scoring); [#1385](https://github.com/anthropics/skills/issues/1385) (4 comments, 1👍): Reasoning Quality Gate Pipeline | 🟡 **Emerging niches** — agent memory, governance, reasoning quality |
| **Context/Token Efficiency** | [#1487](https://github.com/anthropics/skills/issues/1487) (4 comments): `claude-api` skill injects ~156k tokens, exhausting context window | 🟡 **Performance constraint** — lazy loading / token budgeting needed |
| **Document Processing Hardening** | [#538](https://github.com/anthropics/skills/pull/538), [#541](https://github.com/anthropics/skills/pull/541), [#1790](https://github.com/anthropics/skills/pull/1790), [#1792](https://github.com/anthropics/skills/pull/1792): Case-sensitivity, bookmark ID collisions, missing rels, LibreOffice timeouts | 🟢 **Active maintenance** — docx/ODT/PDF pipeline stabilizing |

---

## 3. High-Potential Pending Skills — Active PRs Likely to Land Soon

| Skill (PR) | Why It Has Momentum | Target Merge Signal |
|------------|---------------------|---------------------|
| **[mcp-builder MCP 2.0 fix](https://github.com/anthropics/skills/pull/1742)** (#1742) | Unblocks *all* MCP skill development; recent updates (Sep 19); fixes reported issue #1668 | Infrastructure PR — high maintainer priority |
| **[docx: LibreOffice timeout → error + output verification](https://github.com/anthropics/skills/pull/1792)** (#1792) | Most recent update (Sep 25); hardens production document pipeline; pairs with #1790 | Bug-fix PR — low risk, high value |
| **[blast-radius](https://github.com/anthropics/skills/pull/1776)** (#1776) | Addresses universal DevOps safety gap; clean scope; no external deps | New skill — clear safety ROI |
| **[proofcore-contract-auditor](https://github.com/anthropics/skills/pull/1771)** (#1771) | Web3 audit automation + on-chain proofs; unique value prop; submitted by protocol team (ProofCore) | Domain skill — external contributor investment |
| **[testing-patterns](https://github.com/anthropics/skills/pull/723)** (#723) | Universal developer need; comprehensive coverage; long iteration (6 months) suggests thorough review | Meta-skill — foundational for skill authors |
| **[notion-spec-to-implementation](https://github.com/anthropics/skills/pull/1245)** (#1245) | Bridges product spec → code workflow; paired with resume auditor (HR use case); active Sep 24 | Productivity suite — enterprise-relevant |

---

## 4. Skills Ecosystem Insight — One-Sentence Summary

> **The community's most concentrated demand is for trustworthy, shareable, and reliably-evaluable Skills infrastructure — starting with namespace security, org-wide distribution, and a working evaluation harness — while simultaneously expanding into specialized domains (Web3 audit, HPC, video generation, agent governance) that turn Claude Code into a domain-specific automation platform.**

---

# Claude Code Community Digest — 2026-09-25

---

## 1. Today's Highlights

- **v2.1.282 released** with a new `maxProseWidth` setting to cap Claude's prose width in wide terminals (tables/code blocks keep full width), plus startup notices and `/status` / `claude doctor` entries for telemetry variables in settings files.
- **Windows Desktop bridge instability** dominates new reports: handshake timeouts (~18 min), devices stuck "Asleep," and process leaks accumulating `claude.exe` sessions.
- **MCP OAuth regressions** persist across Entra ID (trailing slash), token refresh (expiresAt: 0), and credential persistence — affecting auth for Grafana, Slack, and enterprise IdPs.

---

## 2. Releases

### v2.1.282
| Change | Impact |
|--------|--------|
| `maxProseWidth` setting | Caps prose rendering width in wide terminals; tables/code blocks unaffected |
| Startup notice + `/status` / `claude doctor` telemetry entries | Surfaces ignored telemetry variables in project settings files |
| *(No breaking changes noted)* | |

[View release](https://github.com/anthropics/claude-code/releases/tag/v2.1.282)

---

## 3. Hot Issues (Top 10 by Engagement & Severity)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#52871](https://github.com/anthropics/claude-code/issues/52871) | **MCP OAuth appends trailing slash to `resource`, breaking Entra ID (AADSTS9010010)** | Blocks enterprise SSO for Azure/Entra ID; reproducible, has workaround | 49 comments, 29 👍 — *highest engagement open bug* |
| [#12070](https://github.com/anthropics/claude-code/issues/12070) | **Session permission `acceptEdits` not persisting on Linux** | Forces repeated Edit prompts per session; breaks workflow automation | 14 comments, 26 👍 — *long-standing (Nov 2025)* |
| [#96911](https://github.com/anthropics/claude-code/issues/96911) | **Windows Desktop: bridge handshake timeout ~18 min, survives reboot/update** | Cowork/remote sessions completely unavailable; self-recovers mysteriously | 10 comments, filed today |
| [#63025](https://github.com/anthropics/claude-code/issues/63025) | **SSH Remote: `projects` field nulled in `~/.claude.json` after desktop restart** | UI shows "No messages yet" despite intact `.jsonl` transcripts; data visibility loss | 10 comments, 5 👍 |
| [#96918](https://github.com/anthropics/claude-code/issues/96918) | **Windows Desktop: linked computer stuck "Asleep or app closed"; cloud sessions fail** | Cowork + scheduled tasks broken; survives reboot, re-login, device removal | 8 comments, filed today |
| [#81303](https://github.com/anthropics/claude-code/issues/81303) | **Taskbar icon blurry on Windows 11 at high DPI** | Visual polish issue affecting daily UX | 8 comments, 4 👍 — *closed today* |
| [#75905](https://github.com/anthropics/claude-code/issues/75905) | **Desktop window raises on mouse hover (Linux Mint/Cinnamon)** | Violates standard window manager behavior; unique to Claude among Electron apps | 7 comments, 2 👍 |
| [#74671](https://github.com/anthropics/claude-code/issues/74671) | **Remote Control: no way to enable Claude in Chrome for spawned sessions** | Chrome extension tools not inherited by `claude remote-control` sessions | 5 comments, 5 👍 |
| [#96299](https://github.com/anthropics/claude-code/issues/96299) | **Windows: `claude.exe` processes accumulate, never terminate → high RAM/disk** | Resource leak over workday; sessions not cleaned up on close | 2 comments, filed 2026-09-23 |
| [#90569](https://github.com/anthropics/claude-code/issues/90569) | **Sandbox deny list grows unbounded with git worktrees (~250 → E2BIG)** | Automation with many worktrees fails; no user-configured deny rules | 1 comment, filed 2026-08-29 |

---

## 4. Key PR Progress (Last 24h)

| PR | Area | Summary |
|----|------|---------|
| [#96953](https://github.com/anthropics/claude-code/pull/96953) | diff | Focus hook now matches engine-stamped element names (`cc-plugin-diff`) instead of internal constant |
| [#96930](https://github.com/anthropics/claude-code/pull/96930) | telemetry, agents-md | Test plugins now hook collector stream by name (`meddling`/`swallowing`); stand in for telemetry via events |
| [#96917](https://github.com/anthropics/claude-code/pull/96917) | telemetry | `$.telemetry.log`/`mark` moved to hooks on events `telemetry.log`/`telemetry.mark` with gated entry checks |
| [#96364](https://github.com/anthropics/claude-code/pull/96364) | agents-md | Auto-paginated `Read` of nested `AGENTS.md` no longer counts as "delivered" (prevents duplicate attachment) |
| [#96363](https://github.com/anthropics/claude-code/pull/96363) | diff | Added `--no-color` to `git diff` calls; prevents ANSI escapes from emptying diff body when `color.ui=always` |
| [#96487](https://github.com/anthropics/claude-code/pull/96487) | telemetry | Telemetry rows now carry engine version, base version, build time from `$.session.version()` (since 2.1.281) |
| [#95423](https://github.com/anthropics/claude-code/pull/95423) | diff | Shell commands marked `isReadOnly` (ls, git status, cat, grep) no longer trigger diff refetch |
| [#96570](https://github.com/anthropics/claude-code/pull/96570) | diff | `command.run` hook uses literal command name for engine scan to recognize slash commands at startup |

> **Theme:** Heavy investment in **telemetry plumbing**, **diff tool robustness** (color, read-only commands, hook naming), and **AGENTS.md pagination semantics**.

---

## 5. Feature Request Trends

| Direction | Representative Issues | Signal |
|-----------|----------------------|--------|
| **Terminal/Display control** | [#96968](https://github.com/anthropics/claude-code/issues/96968) (adjustable column width), v2.1.282 `maxProseWidth`, [#57991](https://github.com/anthropics/claude-code/issues/57991), [#63813](https://github.com/anthropics/claude-code/issues/63813) | Multiple opposing requests → need per-user config |
| **MCP OAuth hardening** | [#52871](https://github.com/anthropics/claude-code/issues/52871), [#95113](https://github.com/anthropics/claude-code/issues/95113) (expiresAt: 0), [#74667](https://github.com/anthropics/claude-code/issues/74667) (isLocal misreport) | Enterprise blocker; 3+ distinct auth bugs open |
| **Desktop app parity (Linux)** | [#96963](https://github.com/anthropics/claude-code/issues/96963) (Arch/pacman), [#75905](https://github.com/anthropics/claude-code/issues/75905) (window focus) | CLI-only on Linux; desktop packaging gap |
| **Session/permission persistence** | [#12070](https://github.com/anthropics/claude-code/issues/12070), [#96970](https://github.com/anthropics/claude-code/issues/96970) (token reset on resume) | Core UX friction for daily drivers |
| **TUI verbosity levels** | [#96962](https://github.com/anthropics/claude-code/issues/96962) (middle: command + first N output lines) | Binary verbose/collapsed insufficient |
| **Secrets/credential broker** | [#88165](https://github.com/anthropics/claude-code/issues/88165) (model never sees values) | Accessibility + security use case |
| **GitHub integration reliability** | [#96973](https://github.com/anthropics/claude-code/issues/96973), [#96969](https://github.com/anthropics/claude-code/issues/96969), [#96964](https://github.com/anthropics/claude-code/issues/96964) | 3 reports filed today; reconnect loop |

---

## 6. Developer Pain Points (Recurring Frustrations)

1. **MCP OAuth is fragile in enterprise** — trailing slashes, missing refresh tokens, `expiresAt: 0`, and `isLocal` misidentification break SSO for Entra ID, Grafana, Slack. No clear migration path.

2. **Windows Desktop bridge reliability** — handshake timeouts, device state stuck "Asleep," process leaks (`claude.exe` accumulation), and device identity regeneration on reinstall (`ant-did` vs `remoteToolsDeviceName` mismatch) make Cowork/remote feel beta.

3. **Session state loss on restart** — SSH Remote nulls `projects` field; permission modes (`acceptEdits`) don't persist; token usage doesn't reset on agent resume. Users lose trust in "pick up where you left off."

4. **GitHub integration flakiness** — "Reconnect" loop despite connected account; multiple same-day reports suggest regression in auth handshake.

5. **Sandbox scalability** — Deny list grows unbounded with git worktrees; hits `E2BIG` at ~250 worktrees. No user control, blocks automation-heavy workflows.

6. **Subagent reporting contract unclear** — Second `SubagentHandback` after resume rejected silently; docs promise `SendMessage` fallback but behavior is inconsistent.

7. **High-DPI / window manager quirks** — Blurry taskbar icon (Win11), hover-raise (Linux Mint/Cinnamon), fixed column width (wide monitors). Electron-level polish gaps.

8. **Token/usage accounting opacity** — Agent teams report cumulative tokens instead of reset on resume; no visibility into per-session vs. aggregate limits.

---

*Generated from `anthropics/claude-code` GitHub data (issues, PRs, releases) updated 2026-09-25.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-09-25

---

## 1. Today's Highlights

Codex shipped **rust-v0.157.0** with major new features: GPT-6 Sol/Luna models, Amazon Bedrock support, fullscreen transcripts by default, and automatic background-server startup. Nine alpha releases (v0.158.0-alpha.7–13) followed rapidly, indicating active iteration on the next minor version. The issue tracker shows strong community engagement on Windows desktop stability (multi-monitor window spills, Work chat in Projects, second-message send failures) and CLI sandbox reliability on Windows/Linux.

---

## 2. Releases

### **rust-v0.157.0** (Stable)
- **New models**: GPT-6 Sol and Luna added, including Amazon Bedrock support and migration prompts for older models ([#47332](https://github.com/openai/codex/pull/47332), [#47347](https://github.com/openai/codex/pull/47347))
- **Transcript UX**: Fullscreen transcripts enabled by default; Shift-click extends text selections ([#47178](https://github.com/openai/codex/pull/47178), [#47414](https://github.com/openai/codex/pull/47414))
- **Background server**: Automatic startup for eligible environments

### **rust-v0.158.0-alpha.7 through alpha.13** (Pre-release)
- Rapid alpha cadence (7 builds in 24h) — likely polish/fixes atop v0.157.0 baseline; no individual changelogs published.

---

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#29343](https://github.com/openai/codex/issues/29343) | **Chrome plugin / browser / computer-use refuse certain sites** | Blocks browser automation on protected sites; affects Pro users (€225/mo) | 35 comments, 12 👍 — long-standing (since Jun), high frustration |
| [#25826](https://github.com/openai/codex/issues/25826) | **Windows maximized window spills onto adjacent monitors** | Core desktop UX bug on multi-monitor setups; affects daily workflow | 34 comments, 20 👍 — open since Jun, clear regression |
| [#34499](https://github.com/openai/codex/issues/34499) | **Cannot create local Work chat inside ChatGPT Project (Windows)** | Breaks Project + Work integration; Plus subscribers blocked | 30 comments, 16 👍 — regression in July release |
| [#45019](https://github.com/openai/codex/issues/45019) | **App-server queued follow-up no longer exists** | Core messaging pipeline failure; high 👍 indicates widespread impact | 25 comments, **61 👍** — strongest signal in this batch |
| [#43058](https://github.com/openai/codex/issues/43058) | **GPT-6 Astra flags benign prompts as policy violations** | False-positive safety filter blocks legitimate coding prompts | 22 comments — affects CLI users on Linux |
| [#41622](https://github.com/openai/codex/issues/41622) | **Add config to disable automatic conversation recaps (CLI)** | Highly requested UX control; recaps add latency/noise for power users | 22 comments, **89 👍** — top-voted enhancement |
| [#44696](https://github.com/openai/codex/issues/44696) | **Windows sandbox helper fails on every exec_command / file read** | Sandbox initialization broken on Windows 11; blocks CLI usage | 21 comments, 2 👍 — deterministic failure |
| [#43237](https://github.com/openai/codex/issues/43237) | **GPT-6 Astra rejects `hi` with invalid_prompt (Linux/macOS)** | Minimal reproduction shows model-side regression; cross-platform | 17 comments, 2 👍 |
| [#18396](https://github.com/openai/codex/issues/18396) | **Add way to hide tool calls/output in TUI** | Long-standing (Apr) TUI clutter request; 40 👍 shows sustained demand | 17 comments, 40 👍 |
| [#46590](https://github.com/openai/codex/issues/46590) | **Windows desktop: second message stuck loading, never sent** | Critical chat regression; first message works, second hangs | 15 comments, 2 👍 — recent (Sep 19) |

---

## 4. Key PR Progress (Notable Merges from Last 24h)

| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#47989](https://github.com/openai/codex/pull/47989) | Startup-only PID namespace inheritance for exec-server | Sandbox / Linux | Fixes `/proc` mount denial edge case breaking process introspection |
| [#47988](https://github.com/openai/codex/pull/47988) | Reuse MCP handlers across equivalent bindings | MCP / Tooling | Eliminates redundant handler recreation + search index rebuild on catalog refresh |
| [#47984](https://github.com/openai/codex/pull/47984) | Multi-agent spawn latency & failure metrics | Observability | New metrics: `codex.multi_agent.spawn.phase.duration_ms` (residency, fork, child, admission, total) + failure counters |
| [#47981](https://github.com/openai/codex/pull/47981) | Prepare MCP calls from advertised tool identities | MCP / Runtime | Removes full runtime binding build; matches by server/tool/connector ID with current filters |
| [#47975](https://github.com/openai/codex/pull/47975) | Prevent stale voice answers reappearing during speech recovery | Voice / UX | Filters recovered/overflowed/paraphrased answers from re-rendering under new questions |
| [#47974](https://github.com/openai/codex/pull/47974) | Preserve Git directory protections across writable roots | Security / Sandbox | Resolves `.git` dir writable leakage via Seatbelt/bubblewrap mounts |
| [#47971](https://github.com/openai/codex/pull/47971) | Pro Max plan support + Pro display name updates | Billing / Auth | Adds `promax` tier; renames: `prolite`→"Pro", `pro`→"Pro (More)", `promax`→"Pro (Max)" |
| [#47970](https://github.com/openai/codex/pull/47970) | Expose current environment selections for running turn | Threading / Env | New `current_turn_environment_selections()` reflects mid-turn env updates (vs. turn-start snapshot) |
| [#47967](https://github.com/openai/codex/pull/47967) | Surface Flex capacity failures as distinct terminal error | Error Handling / Flex | Recognizes `flex_unavailable` in 429/stream errors; ends turns without retry, reports "Flex capacity unavailable" |
| [#47964](https://github.com/openai/codex/pull/47964) | Preserve `x-amzn-mantle-client-agent: codex` header for Bedrock Runtime | Providers / AWS | Fixes header clearing inherited from base Bedrock provider |

---

## 5. Feature Request Trends (from Issues)

1. **CLI Configurability** — Strong demand for documented `config.toml` controls: disable recaps ([#41622](https://github.com/openai/codex/issues/41622), 89 👍), configurable compaction model ([#22486](https://github.com/openai/codex/issues/22486), 13 👍), hide tool calls in TUI ([#18396](https://github.com/openai/codex/issues/18396), 40 👍).

2. **Windows Desktop Polish** — Multi-monitor window management ([#25826](https://github.com/openai/codex/issues/25826)), Work/Project integration ([#34499](https://github.com/openai/codex/issues/34499), [#45596](https://github.com/openai/codex/issues/45596)), second-message send reliability ([#46590](https://github.com/openai/codex/issues/46590)), git commit UI ([#47511](https://github.com/openai/codex/issues/47511), 30 👍).

3. **Sandbox Reliability on Windows** — Helper errors on every exec ([#44696](https://github.com/openai/codex/issues/44696)), OpenSSH Session 0 desktop access ([#37722](https://github.com/openai/codex/issues/37722)), Modern Standby Job Object conflicts ([#44503](https://github.com/openai/codex/issues/44503)), visible terminal spawn ([#37599](https://github.com/openai/codex/issues/37599)).

4. **Model Behavior & Safety Tuning** — False-positive policy flags on benign prompts ([#43058](https://github.com/openai/codex/issues/43058), [#43237](https://github.com/openai/codex/issues/43237)); request for model-independent compaction ([#22486](https://github.com/openai/codex/issues/22486)).

5. **Computer Use / Browser Automation** — Site access refusals ([#29343](https://github.com/openai/codex/issues/29343)), macOS keyboard/paste duplication ([#36868](https://github.com/openai/codex/issues/36868)), Windows native app discovery ([#47998](https://github.com/openai/codex/issues/47998)), local HTML file blocking ([#47992](https://github.com/openai/codex/issues/47992)).

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Windows desktop app instability** | Window spill (#25826), Work chat broken (#34499, #45596, #45667), 2nd message hangs (#46590), git commit button missing (#47511), auto-commit fails (#47531), browser blocks local files (#47992), Computer Use can't discover apps (#47998) | **8 distinct issues** in 24h |
| **Sandbox / exec failures on Windows** | Helper unknown_error on every command (#44696), OpenSSH Session 0 desktop access (#37722), Modern Standby Job Object error (#44503), visible terminal window spawn (#37599) | **4 issues**, deterministic blockers |
| **False-positive safety filters** | GPT-6 Astra flags `hi` and benign prompts (#43058, #43237) — cross-platform, minimal repros | **2 issues**, model-side regression |
| **Rate limit / usage display bugs** | Limit reached at 2% remaining (#18355), analytics shows wrong 5-hr reset time (#47788), VS Code status bar missing rate limits (#18822) | **3 issues**, trust-eroding UX |
| **Voice / transcript UX gaps** | Voice mode fails to open (#44194), shared history DB corruption after power loss (#44595), stale answers reappear (#47975 fix), startup tips in wrong place (#47954 fix) | **4 issues** + **2 fixes** in PRs |
| **MacOS browser / computer-use regressions** | Chrome extension reports missing despite install (#45449), Node/OpenSSL config crashes browser tool (#37067), keyboard/paste duplication system-wide (#36868) | **3 issues**, platform-specific |

---

*Digest generated from github.com/openai/codex data as of 2026-09-25. Links point to live GitHub items.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-09-25

---

## 1. Today's Highlights
- **Nightly release v0.62.0-nightly.20260925** ships with changelog updates for v0.61.0 and a fix distinguishing missing vs. malformed MCP enablement config.  
- **Core stability push**: Multiple PRs landed/merged addressing file-operation race conditions, auth loops on Windows/WSL, and session-resume double-replay bugs.  
- **Agent reliability remains the top theme**: Open issues highlight subagent turn-limit misreporting, generalist-agent hangs, browser-agent Wayland failures, and Auto Memory retry/redaction gaps.

---

## 2. Releases
| Version | Date | Key Changes |
|---------|------|-------------|
| `v0.62.0-nightly.20260925.gbedef96ef` | 2026-09-25 | • Changelog for v0.61.0-preview.1 & v0.61.0<br>• `fix(cli)`: distinguish missing MCP enablement config from malformed ([PR #29469](https://github.com/google-gemini/gemini-cli/pull/29469), [PR #29472](https://github.com/google-gemini/gemini-cli/pull/29472)) |

---

## 3. Hot Issues (Top 10 by Community Impact)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent recovery after MAX_TURNS reported as GOAL success** | Masks real failures; subagent claims success while hitting turn limits. | 13 comments, 2 👍 — P1, needs retesting |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent hangs forever** | Blocks workflows; only workaround is disabling subagents. | 8 comments, 8 👍 — P1, high user pain |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | **Leverage model’s bash affinity via Zero-Dependency OS Sandboxing** | Strategic: aligns CLI with Gemini 3’s native tool-use strengths. | 9 comments, 1 👍 — P2, large effort |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **Assess AST-aware file reads/search/mapping** | Could reduce token waste & turns via precise code navigation. | 7 comments, 1 👍 — P2, epic tracking |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | **Gemini under-uses skills & sub-agents** | Limits automation potential; requires explicit user prompting. | 6 comments — P2 |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | **Add deterministic redaction & reduce Auto Memory logging** | Security: secrets enter model context before redaction. | 5 comments — P2, security area |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | **Browser Agent ignores settings.json overrides (maxTurns)** | Configuration drift; users can’t tune browser subagent. | 4 comments — P2 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | **browser subagent fails in Wayland** | Platform gap for Linux/Wayland users. | 4 comments, 1 👍 — P1 |
| [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) | **Symlinked agent files not recognized** | Breaks dotfile-management workflows. | 4 comments — P2 |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | **400 error with >128 tools** | Hard tool-count limit blocks large workspaces. | 3 comments — P2 |

---

## 4. Key PR Progress (Top 10 by Impact)

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#29495](https://github.com/google-gemini/gemini-cli/pull/29495) | OPEN | **Serialize file tool ops & atomic writes** — fixes lost-update races in parallel subagents (core, P1, large) |
| [#29448](https://github.com/google-gemini/gemini-cli/pull/29448) | OPEN | **Fix infinite auth loop** — resolves file contention, headless keyring fallback, supervisor state drops (auth, P1) |
| [#29366](https://github.com/google-gemini/gemini-cli/pull/29366) | OPEN | **Stop double-replay of tool responses on session resume** — breaks function-call/response pairing (core, P1) |
| [#29282](https://github.com/google-gemini/gemini-cli/pull/29282) | CLOSED | **Persist OAuth credentials after login** — eliminates re-prompt on restart (security, P2) |
| [#29278](https://github.com/google-gemini/gemini-cli/pull/29278) | CLOSED | **Collision-free env expansion keys** — prevents `__GCLI_EXPAND_TARGET__` clashes (core, P2) |
| [#29277](https://github.com/google-gemini/gemini-cli/pull/29277) | CLOSED | **Prevent env var collision in `expandEnvVars`** — same root cause as #29278 (core, P2) |
| [#29368](https://github.com/google-gemini/gemini-cli/pull/29368) | OPEN | **ACP: resolve session/load by ID without resumable content** — fixes session restore (non-interactive, P1) |
| [#29375](https://github.com/google-gemini/gemini-cli/pull/29375) | OPEN | **Stateful decoder for DevTools HTTP chunks** — avoids UTF-8 split errors in streaming logs (core, P2) |
| [#29376](https://github.com/google-gemini/gemini-cli/pull/29376) | OPEN | **Stop Windows IDE detection from running Unix `ps`** — fixes fallback logic (core, P2) |
| [#29482](https://github.com/google-gemini/gemini-cli/pull/29482) | OPEN | **Optional fast Decision Gate before main model** — routes simple messages to cheap path (experimental, large) |

---

## 5. Feature Request Trends (Distilled from Issues)

| Direction | Representative Issues | Signal |
|-----------|----------------------|--------|
| **Subagent/skill orchestration** | #21968, #22598, #20195, #18836 | Users want agents to *autonomously* discover & delegate to skills/subagents; trajectory visibility (`/chat share`) requested. |
| **AST-aware code navigation** | #22745, #22746, #19561 | “Tactful Extraction” hierarchy (grep → AST read → full file) to cut tokens/turns. |
| **Persistent, file-based task tracking** | #18836, #21000 | Replace in-context `WriteToDo` with CRUD on disk for cross-session continuity. |
| **Browser agent hardening** | #22267, #22232, #21983 | Config respect, session takeover, Wayland support — making browser automation production-ready. |
| **Auto Memory safety & quality** | #26525, #26522, #26523, #26516 | Deterministic redaction, retry/quarantine logic, inbox patch validation. |
| **Sandboxed bash-native execution** | #19873 | Zero-dependency OS sandbox to let model chain `grep`/`sed`/`awk` securely. |

---

## 6. Developer Pain Points (Recurring Frustrations)

1. **Subagent opacity** — Turn-limit failures masquerade as success (#22323); trajectories invisible in `/chat share` (#22598); bug reports lack subagent context (#21763).
2. **Agent hangs & deadlocks** — Generalist agent stalls on simple ops (#21409); browser agent locks on Wayland (#21983) or profile contention (#22232).
3. **Config ignored** — Browser agent disregards `settings.json` overrides (#22267); symlinked agents not loaded (#20079).
4. **Auth & session fragility** — Infinite login loops on Windows/WSL/headless (#29448); double-replay on resume breaks backends (#29366); ACP session load fails without resumable content (#29368).
5. **Tool-count ceiling** — 400-tool limit triggers 400 errors (#24246); forces manual tool-scoping.
6. **Token bloat from coarse reads** — Large file dumps inflate context (~36k baseline, +15k/turn) — driving demand for AST/grep-first workflows (#19561, #22745).
7. **Destructive model behavior** — Unprompted `git reset --force`, DB mutations (#22672); tmp-script litter across workspace (#23571).

---

*Generated from `google-gemini/gemini-cli` GitHub data (releases, issues, PRs updated 2026-09-25).*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-09-25

## Today's Highlights
Two patch releases (v1.0.89-2 and v1.0.89-3) shipped in the last 24 hours, addressing form-state isolation in `/ask-user` prompts, MCP OAuth scope handling, and a Windows sandbox improvement. Meanwhile, the issue tracker shows a cluster of high-impact regressions: session-management deadlocks preventing concurrent local workspaces, repeated OOM crashes on long-running `--resume` sessions, and an auth-token refresh stall that requires a full process restart.

## Releases
| Version | Type | Key Changes |
|---------|------|-------------|
| **v1.0.89-3** | Patch | **Fixed:** Ask-user forms now keep custom “Other” answers separate across questions. |
| **v1.0.89-2** | Patch | **Added:** MCP pre-registered OAuth clients honor configured `oauthScopes`; `Esc Esc` in empty chat input retracts the pending prompt before the model starts answering. **Improved:** Sandboxed commands on supported Windows versions (details truncated). |

[View releases](https://github.com/github/copilot-cli/releases)

## Hot Issues
| # | Title | State | 💬 | 👍 | Why It Matters |
|---|-------|-------|----|----|----------------|
| [#4742](https://github.com/github/copilot-cli/issues/4742) | Cannot create a second Local (branch) session while one is running | OPEN | 11 | 5 | Blocks parallel branch workspaces in the desktop app; regression in 1.1.15. |
| [#4699](https://github.com/github/copilot-cli/issues/4699) | OOM crash on long `--resume` sessions; crash dumps pollute cwd | OPEN | 6 | 7 | 4 GiB V8 heap cap hit repeatedly; diagnostic reports written to working dir. |
| [#4725](https://github.com/github/copilot-cli/issues/4725) | Frequent JavaScript heap out of memory | OPEN | 6 | 1 | Crashes every few minutes with Mark-Compact GC logs; suggests memory leak. |
| [#4905](https://github.com/github/copilot-cli/issues/4905) | Sessions die minutes after spawn — credential registration unavailable | OPEN | 5 | 4 | `github-mcp-server` catalog goes stale; session becomes fatal in desktop app 1.1.22. |
| [#4929](https://github.com/github/copilot-cli/issues/4929) | Process-local auth token stops refreshing; all prompts fail until restart | OPEN | 5 | 0 | Long-running process permanently loses auth; `/login` doesn’t recover it. |
| [#4780](https://github.com/github/copilot-cli/issues/4780) | Session compaction OOMs and never completes, leaving session unresumable | OPEN | 2 | 3 | Compaction enters crash loop at ~4.3 GB cap; every `--resume` re-triggers it. |
| [#3534](https://github.com/github/copilot-cli/issues/3534) | WSL2 ARM64: `/copy` fails with `clip.exe exited with code 1` | OPEN | 7 | 5 | Quoting bug in `cmd.exe` wrapper breaks clipboard on ARM64 WSL2 since 1.0.55. |
| [#4775](https://github.com/github/copilot-cli/issues/4775) | Mission Control dashboard links 404 (`/copilot/tasks/` vs `/agents/tasks/`) | OPEN | 5 | 2 | Dashboard renders dead links; sessions only reachable via CLI `--resume`. |
| [#4535](https://github.com/github/copilot-cli/issues/4535) | `store_memory` fails in v1.0.81 prereleases: `Instance id is required` | CLOSED | 9 | 1 | Native memory writer invoked without instance ID; fixed in later prerelease. |
| [#4851](https://github.com/github/copilot-cli/issues/4851) | Azure MCP server fails sending HTTP request (BrokenPipe) | OPEN | 2 | 6 | Rust runtime fails validating Azure API Center MCP registry; broke overnight. |

## Key PR Progress
| # | Title | State | Summary |
|---|-------|-------|---------|
| [#4948](https://github.com/github/copilot-cli/pull/4948) | Update github-script action pin | OPEN | Bumps `actions/github-script` to v9.0.0; no runtime deps affected. |

*Only one PR updated in the last 24 h; the backlog is dominated by issue triage and runtime fixes.*

## Feature Request Trends
1. **Memory & session durability** — Multiple OOM/compaction issues (#4699, #4725, #4780, #4639) show demand for robust long-running sessions and better crash diagnostics.
2. **Auth resilience** — Token refresh without restart (#3682, #4929) and BYOK credential rotation are recurring asks.
3. **Parallel workspace support** — #4742 highlights the need for true concurrent local sessions per project.
4. **Plugin ecosystem maturity** — Sparse checkout for plugin installs (#2399), marketplace registration fixes (#4556), and plugin skill injection (#2753) indicate growing plugin adoption friction.
5. **Enterprise policy clarity** — Sandbox override (#4522), MCP policy blocking (#3934), and fail-closed bypass caps (#4844) reflect managed-environment pain points.

## Developer Pain Points
- **Session instability**: OOM crashes, compaction loops, and wedged states (#4699, #4725, #4755, #4780) make long tasks unreliable.
- **Auth fragility**: Token expiration kills the process; no in-process recovery (#4929, #3682).
- **Platform-specific breakage**: WSL2 ARM64 clipboard (#3534), Windows ConstrainedLanguage errors (#4683), GLIBC mismatches on older Linux (#3276), and WinGet in-place update crashes (#2702).
- **Observability gaps**: Crash dumps land in cwd (#4699), dashboard links 404 (#4775), and compaction retries silently bill tokens (#4663).
- **Update cadence friction**: Auto-update requiring multiple restarts (#2408) and binary replacement crashes (#2702) erode trust in the release pipeline.

---

*Data sourced from `github/copilot-cli` — releases, issues, and PRs updated 2026-09-24/25.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-09-25

## 1. Today's Highlights
- **Single maintenance PR closed**: Dependency update for `asyncssh` (2.21.1 → 2.23.1) in the `pykaos` workspace to remediate two CVEs (GHSA-2wxc-x7rj-hg8f, GHSA-qr67-gv47-xwwh). No new releases, issues, or feature work in the last 24h.

## 2. Releases
*No new releases published in the last 24 hours.*

## 3. Hot Issues
*No issues created or updated in the last 24 hours.*

## 4. Key PR Progress
| PR | Status | Summary |
|----|--------|---------|
| [#2622](https://github.com/MoonshotAI/kimi-cli/pull/2622) | **CLOSED** | **Security dependency bump**: Updates `asyncssh` from 2.21.1 to 2.23.1 in `packages/kaos/pyproject.toml` and `uv.lock`. Addresses GHSA-2wxc-x7rj-hg8f (potential auth bypass) and GHSA-qr67-gv47-xwwh (DoS via malformed packets). Merged by `katsugtgz`. |

## 5. Feature Request Trends
*Insufficient recent issue activity to identify trends. Historical data (outside 24h window) shows ongoing requests for:*
- Improved multi-file editing workflows
- Better context-window management for large repos
- Enhanced streaming/async tool outputs
- Windows native terminal integration

## 6. Developer Pain Points
*No new friction reports in the last 24h. Recurring themes from prior periods:*
- **Dependency drift** in Python workspace packages (mitigated today by #2622)
- **Lockfile sync** between `pyproject.toml` and `uv.lock` across monorepo packages
- **CI flakiness** in integration tests involving SSH-based tooling

---
*Data sourced from `github.com/MoonshotAI/kimi-cli` (last 24h). Next digest: 2026-09-26.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-09-25

## Today's Highlights
OpenCode's v2 stabilization continues with significant core fixes landing: compaction overflow recovery, context-window limit enforcement, and heartbeat timestamp corrections for the Effect flock. The TUI gains practical UX improvements (elapsed tool timing, context-% accuracy, storage-watcher resilience), while the plugin ecosystem faces a critical gap—token-usage exposure was removed in 2.0.x, breaking context-pruning plugins. A highly-upvoted community request for hot-reloading agents/skills/commands (#8751, 100 👍) remains open, signaling strong demand for a faster inner-loop.

## Releases
No new releases in the last 24 hours.

---

## Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#8751](https://github.com/anomalyco/opencode/issues/8751) | **Hot-reload agents, skills, commands** | Eliminates restart cycle when developing custom agents/skills; highest-voted open feature. | 24 comments, **100 👍** |
| [#50843](https://github.com/anomalyco/opencode/issues/50843) | **GitLab Duo fails on self-managed instances** | Blocks enterprise GitLab users; two root causes identified (context + token refresh). | 8 comments |
| [#36677](https://github.com/anomalyco/opencode/issues/36677) | **V2 server persistent allocation loop** | Long-lived `opencode2 serve` burns 1 CPU core + 1.3 GB RSS idle; regression risk for always-on setups. | 4 comments |
| [#43935](https://github.com/anomalyco/opencode/issues/43935) | **Desktop renderer OOM on large JSON paste** | 165 KB JSON crashes Electron renderer (V8 heap OOM); data-loss risk during session import. | 3 comments |
| [#49658](https://github.com/anomalyco/opencode/issues/49658) | **v2.0.7: background server connection fails (exit 130)** | Fresh installs fail at `Starting background server`; `Transport Unable to connect` on macOS ARM64. | 3 comments |
| [#51265](https://github.com/anomalyco/opencode/issues/51265) | **Plugin API: no token usage in 2.0.x** | DCP-style context-pruning plugins dead; `needs:compliance` tag signals platform regression. | 1 comment |
| [#51249](https://github.com/anomalyco/opencode/issues/51249) | **MCP local servers leaked per session** | Process count grows monotonically; only service restart clears them—resource exhaustion risk. | 1 comment |
| [#51252](https://github.com/anomalyco/opencode/issues/51252) | **Native `providers` block ignored in V2 2.0.16** | Custom provider definitions work in V1 config but silently dropped in V2; migration blocker. | 1 comment |
| [#35341](https://github.com/anomalyco/opencode/issues/35341) | **Auto-register `/` commands from Claude Code skills** | Reduces friction adopting Claude Code skill ecosystem; 7 👍 shows latent demand. | 2 comments, 7 👍 |
| [#51219](https://github.com/anomalyco/opencode/issues/51219) | **Free tier lockout after credit exhaustion** | Upgraded users cannot fall back to free tier; hard paywall with no graceful degradation. | 2 comments |

---

## Key PR Progress (Top 10 by Technical Significance)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#51267](https://github.com/anomalyco/opencode/pull/51267) | Fix (core) | Recovers compaction when summary request overflows model input; first of three splits from #51238. |
| [#51238](https://github.com/anomalyco/opencode/pull/51238) | Fix (core) | Fits primary/compaction output limits to catalog + remaining context; starts auto-compaction at 90% input window. |
| [#51264](https://github.com/anomalyco/opencode/pull/51264) | Fix (codemode) | Restores `thisArg` on iteration callbacks, `toString` in computed keys, `ToPrimitive` in String/Number args. |
| [#51257](https://github.com/anomalyco/opencode/pull/51257) | Feat (codemode) | Adds `WeakMap`/`WeakSet` globals—enables memoization & visited-node tracking in interpreted code. |
| [#50892](https://github.com/anomalyco/opencode/pull/50892) | Feat (tui) | Shows elapsed time on tool parts (closes #50891); previously no timing visibility in TUI. |
| [#51250](https://github.com/anomalyco/opencode/pull/51250) | Fix (tui) | Uses effective `limit.input` for context % (fixes gpt-5.3-codex 400k/1M mismatch). |
| [#51248](https://github.com/anomalyco/opencode/pull/51248) | Fix (core) | Refreshes Effect flock heartbeat timestamps each interval; prevents stale-timeout churn. |
| [#51266](https://github.com/anomalyco/opencode/pull/51266) | Feat (app) | Adds provider account switching menu; refreshes integrations/models from server state. |
| [#51090](https://github.com/anomalyco/opencode/pull/51090) | Fix (app) | Keeps "Working" indicator visible during reasoning-only turns; suppresses "Used 1 Thought" row. |
| [#51254](https://github.com/anomalyco/opencode/pull/51254) / [#51255](https://github.com/anomalyco/opencode/pull/51255) | Feat (cli) | Adds `opencode session prune <duration>` to both v1 & v2 CLIs with preview + confirmation. |

---

## Feature Request Trends
1. **Developer-loop acceleration** — Hot-reload for agents/skills/commands (#8751), portable wrapper scripts (#15789), auto-registration of Claude Code `/` commands (#35341).
2. **Multi-agent orchestration** — Sibling subagent communication (#38964), subagent→parent questioning (#38963), instruction-file agent targeting (#38961).
3. **Platform parity & extensibility** — Multi-language UI (#38280), provider account switching (#51266), ugrep backend for large-file search (#39034), audio rendering (#38994), Prime Agent/RLM thinking mode (#40838).
4. **Session lifecycle control** — Session pruning (PRs #51254/#51255), global session path anchoring (#51260).

---

## Developer Pain Points (Recurring High-Friction Themes)
| Area | Representative Issues |
|------|----------------------|
| **V2 stability** | Allocation loop (#36677), background server connect failure (#49658), config `providers` ignored (#51252), instructions never loaded (#51262). |
| **Desktop/TUI usability** | Windows cmd paste broken (#38455), SSH mouse scroll hijacks history (#39029), renderer OOM on large paste (#43935), "more" pager fallback (#38977). |
| **Plugin/integration gaps** | Token usage removed from Plugin API v2 (#51265), plugin reload mid-turn corrupts catalog (#51128), MCP servers leaked (#51249), websearch tinyfish 400s (#51263). |
| **Provider/auth reliability** | GitLab Duo self-managed broken (#50843), Vertex/Copilot 400 errors (#26205, #38982), deepseek model 400 (#50467), reasoning_effort=max rejected (#50818). |
| **Billing/access** | Free-tier lockout after paid credit exhaustion (#51219), model proceeds without waiting for user answer (#38971). |

---

*Digest generated from GitHub data (issues/PRs updated 2026-09-25). Links point to anomalyco/opencode.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-09-25

## Today's Highlights
The Pi ecosystem saw a flurry of correctness fixes and provider-compatibility work over the last 24 hours, with **10 PRs merged** addressing streaming robustness, tool-result handling on abort, HTML export visibility for hidden messages, and OpenTelemetry exporter support. Meanwhile, the issue tracker surfaced a cluster of **OpenAI-compatible provider regressions** (Bedrock, OpenRouter, custom gateways) around request-field sanitization, context-size defaults, and reasoning-item replay — indicating growing friction as developers wire Pi to non-OpenAI backends.

---

## Releases
*No new releases published in the last 24 hours.*

---

## Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#8896](https://github.com/earendil-works/pi/issues/8896) | **`/export HTML` drops `display:false` custom messages** | Silent data loss in exported sessions; breaks audit/debug workflows. Fixed by [#10020](https://github.com/earendil-works/pi/pull/10020). | 8 comments, closed with fix merged |
| [#8643](https://github.com/earendil-works/pi/issues/8643) | **Bedrock rejects images nested in `toolResult.content`** | Blocks vision workflows on AWS Bedrock for OpenAI-format models. Fix + test ready on fork. | 7 comments, 2 👍, open |
| [#9674](https://github.com/earendil-works/pi/issues/9674) | **`mistral-conversations`: empty content deltas open text blocks (GLM 5.x)** | Causes 400 errors on replay; forces fallback to `openai-completions` losing native prompt cache. | 7 comments, open |
| [#9508](https://github.com/earendil-works/pi/issues/9508) | **pi-ai sends OpenAI-specific fields to compatible providers** | 400/422 errors on otherwise-working gateways (OpenRouter, local proxies). High-impact interop bug. | 6 comments, open |
| [#9566](https://github.com/earendil-works/pi/issues/9566) | **Context size defaults to 128k despite real size available** | Truncates context for Ollama/local models; incorrect cost/token metadata. | 5 comments, 3 👍, open |
| [#9512](https://github.com/earendil-works/pi/issues/9512) | **Compaction hits summary cap with GPT-6 Astra at max reasoning** | Context-overflow recovery fails mid-session; blocks long-running agents. | 5 comments, 1 👍, open |
| [#9932](https://github.com/earendil-works/pi/issues/9932) | **`before_agent_start`: forced system prompt keeps removed tools** | Tool-set reconciliation race; extensions can’t reliably prune tools at startup. | 4 comments, open |
| [#9967](https://github.com/earendil-works/pi/issues/9967) | **`openai-responses`: replaying reasoning `id` breaks behind load-balancing proxy** | Multi-turn conversations fail on Bifrost/other proxies; `id` not sticky across backends. | 4 comments, closed (no action) |
| [#9817](https://github.com/earendil-works/pi/issues/9817) | **Extensions can’t resolve npm packages with `package.json` `main`/`exports`** | Breaks extension ecosystem for modern npm packages (e.g., `yaml`). | 3 comments, 1 👍, closed (no action) |
| [#10022](https://github.com/earendil-works/pi/issues/10022) | **OpenRouter compaction requests drop `x-session-id` when `cacheRetention: none`** | Loses session analytics & sticky routing on OpenRouter; affects cost tracking. | 2 comments, closed |

---

## Key PR Progress (10 Most Impactful)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#10027](https://github.com/earendil-works/pi/pull/10027) | **fix(ai,coding-agent)** | Streaming robustness, reasoning clamp, compaction validity, edit recovery — broad correctness sweep from daily-driver fork. |
| [#10020](https://github.com/earendil-works/pi/pull/10020) | **feat(coding-agent)** | Adds show/hide toggle for hidden `CustomMessage` entries in HTML export; fixes [#8896](https://github.com/earendil-works/pi/issues/8896). |
| [#10009](https://github.com/earendil-works/pi/pull/10009) | **feat(otel)** | New `@earendil-works/pi-otel` package: OTLP/HTTP exporter for existing telemetry contract; opt-in wiring. Implements [#10006](https://github.com/earendil-works/pi/issues/10006). |
| [#9995](https://github.com/earendil-works/pi/pull/9995) | **fix(agent)** | Fixes `tool_result` drop on parallel abort — ensures every tool call emits start/result events even when loop exits early. |
| [#9993](https://github.com/earendil-works/pi/pull/9993) | **feat(ai,coding-agent)** | Adds Anthropic Claude support to Google Vertex AI provider (Model Garden); previously only Gemini was exposed. |
| [#9957](https://github.com/earendil-works/pi/pull/9957) | **fix(tui)** | Kitty image sizing now chooses dimension with less aspect-ratio distortion; improves rendering for wide/short images ([#8938](https://github.com/earendil-works/pi/issues/8938)). |
| [#9714](https://github.com/earendil-works/pi/pull/9714) | **feat(ai)** | Azure Foundry Chat Completions support (DeepSeek V4 Pro); expands Azure provider beyond Responses API. |
| [#10016](https://github.com/earendil-works/pi/pull/10016) | **fix(coding-agent)** | Resumes aborted runs when a wake follow-up is queued; prevents dropped `triggerTurn` on abort-then-follow-up. |
| [#10021](https://github.com/earendil-works/pi/pull/10021) | **feat(coding-agent)** | Syntax highlighting for heredocs & inline scripts in `bash` calls; targets Opus/Fable model output patterns. |
| [#8398](https://github.com/earendil-works/pi/pull/8398) | **feat** | Major TUI/theme refactor: exposes color values directly, enables color math, lays groundwork for non-terminal UIs. |

---

## Feature Request Trends
1. **Provider-agnostic request sanitization** — Multiple issues ([#9508](https://github.com/earendil-works/pi/issues/9508), [#8643](https://github.com/earendil-works/pi/issues/8643), [#9674](https://github.com/earendil-works/pi/issues/9674)) demand that Pi strip or transform OpenAI-specific fields/roles before sending to compatible endpoints.
2. **First-class async tool calling** — [#9113](https://github.com/earendil-works/pi/issues/9113) (OpenAI async tool calling) signals demand for background tool execution without blocking the agent loop.
3. **Session/telemetry observability** — [#10006](https://github.com/earendil-works/pi/issues/10006)/[#10009](https://github.com/earendil-works/pi/pull/10009) (OTLP exporter) and [#10022](https://github.com/earendil-works/pi/issues/10022) (OpenRouter `x-session-id`) show appetite for production-grade tracing and session correlation.
4. **Extension runtime hardening** — [#9817](https://github.com/earendil-works/pi/issues/9817) (npm resolution), [#9932](https://github.com/earendil-works/pi/issues/9932) (tool-set race), [#10025](https://github.com/earendil-works/pi/issues/10025) (stale ctx) point to a maturing extension API needing stricter lifecycle guarantees.
5. **Compaction/summarization reliability** — [#9512](https://github.com/earendil-works/pi/issues/9512) (token cap on GPT-6 Astra) and [#10027](https://github.com/earendil-works/pi/pull/10027) (compaction validity) highlight pressure to make long-context workflows predictable.

---

## Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Silent auto-closure of valid issues** | [#10008](https://github.com/earendil-works/pi/issues/10008) explicitly calls out “nobody cares and things get just auto-closed”; multiple issues closed `[no-action]` despite repros. | Erodes trust; duplicates pile up; contributors disengage. |
| **OpenAI-compatible ≠ actually compatible** | [#9508](https://github.com/earendil-works/pi/issues/9508), [#8643](https://github.com/earendil-works/pi/issues/8643), [#9674](https://github.com/earendil-works/pi/issues/9674), [#10022](https://github.com/earendil-works/pi/issues/10022) — each provider needs bespoke fixes. | Forces users to fork or abandon non-OpenAI backends. |
| **Context-size/config metadata mismatch** | [#9566](https://github.com/earendil-works/pi/issues/9566) (128k default), [#9512](https://github.com/earendil-works/pi/issues/9512) (compaction cap) — Pi assumes model caps instead of querying provider. | Truncated context, failed compactions, incorrect cost estimates. |
| **Extension lifecycle races** | [#9932](https://github.com/earendil-works/pi/issues/9932) (system prompt vs tool set), [#10025](https://github.com/earendil-works/pi/issues/10025) (stale ctx assert), [#9997](https://github.com/earendil-works/pi/issues/9997) (hang on shutdown). | Extensions crash or deadlock; no clear migration path for API changes. |
| **TUI rendering edge cases** | [#8938](https://github.com/earendil-works/pi/issues/8938) (image stretch), [#10026](https://github.com/earendil-works/pi/issues/10026) (cursor hidden), [#9419](https://github.com/earendil-works/pi/issues/9419) (fullscreen) — visual glitches on exit/overlay. | Degrades daily UX; hard to debug in headless/CI. |

---

*Digest generated from `earendil-works/pi` GitHub activity (2026-09-24 → 2026-09-25). All links point to the live issues/PRs.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-09-25

---

## 1. Today's Highlights

Qwen Code shipped **v0.24.5** across CLI, Desktop, and TypeScript SDK, with a nightly build and Java SDK updates. The release focuses on stability: a critical fix for the self-update mechanism that was stripping execute bits from vendored `ripgrep` binaries (#12673), and a **2.2–2.4× faster fresh startup** with **60% less RSS** (#12622). Meanwhile, the Managed Agent architecture proposal (#12380) continues to drive deep discussion (19 comments) around dual-path execution, durable sessions, and WebSocket-based multi-agent coordination.

---

## 2. Releases

| Version | Component | Key Changes |
|---------|-----------|-------------|
| **v0.24.5** | CLI (core) | `feat(channels)`: decouple group-member access from `senderPolicy`; no breaking changes. |
| **v0.24.5-nightly.20260924.ffea2d024e** | CLI (nightly) | Same branch; includes `feat(sdk-java)`: Hosted Harness private client. |
| **v0.1.15** | TypeScript SDK | Bundles CLI **0.24.5**. |
| **v0.24.5** | Desktop | `fix(serve)`: preserve session-creation failure diagnostics; `feat(sdk-java)`: managed runtime support. |

> **Note**: The CLI self-update regression (loss of `ripgrep` execute bit) was identified in **#12668** and fixed in **#12673** — expected in the next patch.

---

## 3. Hot Issues (Top 10 by Impact & Discussion)

| Issue | Category | Why It Matters | Community Signal |
|-------|----------|----------------|------------------|
| **[#12380](https://github.com/QwenLM/qwen-code/issues/12380)** `proposal(serve): Define Managed Agent dual-path architecture` | Core / Multi-agent / Platform | Defines staged architecture for durable sessions, workspace bindings, recoverable tool executions, and WebSocket-based agent loop — foundational for multi-agent & fleet scenarios. | 19 comments, active design discussion, multiple roadmap tags. |
| **[#8097](https://github.com/QwenLM/qwen-code/issues/8097)** Background agent coordination gap | Core / Multi-agent | Duplicate work, premature completion, and non-interactive `send_message` break reliable subagent orchestration. | 9 comments, persistent since July, blocks complex workflows. |
| **[#12668](https://github.com/QwenLM/qwen-code/issues/12668)** Self-update drops `ripgrep` exec bit | Platform / Packaging | **Critical regression**: `EACCES` on every `rg` spawn after `npm` self-update. Affects all users on auto-update. | 4 comments, P1, fix merged in #12673. |
| **[#12169](https://github.com/QwenLM/qwen-code/issues/12169)** Batch API bypasses pinned dispatcher | Core / Networking | Batch uploads fail behind proxies/TLS interception while other requests succeed — one-line fix per site. | 4 comments, clear repro, low-risk fix. |
| **[#12670](https://github.com/QwenLM/qwen-code/issues/12670)** Runtime Broker: reboot pins `LOST` binding | SDK / Daemon | Host reboot during in-flight execution leaves binding stuck forever — blocks session recovery. | 3 comments, found in E2E test of #12627. |
| **[#11626](https://github.com/QwenLM/qwen-code/issues/11626)** `system-reminder` prefixes leak into shell mode | CLI / Interactive | One-shot notices (recovered agents, worktree restore) incorrectly prepended to shell commands. | 4 comments, fixed in #12605. |
| **[#12669](https://github.com/QwenLM/qwen-code/issues/12669)** Web Shell: delete no-workspace session by leaving first | UI / Session mgmt | UX improvement: enable delete action for standalone sessions via implicit leave. | 3 comments, follow-up to #12636. |
| **[#12644](https://github.com/QwenLM/qwen-code/issues/12629)** Empty MCP approval subtitles (`{}`) | Web Shell / UI | Noise in approvals/transcript for argument-less MCP calls. | Fixed in #12644. |
| **[#10152](https://github.com/QwenLM/qwen-code/issues/10152)** Skill toggle feedback incomplete | Web Shell / UI | Missing success/error states, stale selections after refresh. | 5 follow-ups, addressed in #12641. |
| **[#11810](https://github.com/QwenLM/qwen-code/issues/11810)** Context compression announced multiple times | Accessibility / Web Shell | Screen-reader spam from repeated live-region updates. | Fixed in #12643 (persistent announcement area). |

---

## 4. Key PR Progress (Top 10 by Impact)

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| **[#12622](https://github.com/QwenLM/qwen-code/pull/12622)** | Perf | **Halve fresh-startup time to typeable, cut RSS 60%**. Measure-first approach; includes deferred imports, lazy config, reduced parser work. | Major UX win for all CLI users. |
| **[#12673](https://github.com/QwenLM/qwen-code/pull/12673)** | Fix | Restore `ripgrep` exec bit on managed npm update activation. npm/pnpm pack only preserves `bin` entries; vendor binaries were `0644`. | Fixes **#12668** (P1 regression). |
| **[#12674](https://github.com/QwenLM/qwen-code/pull/12674)** | Tooling | Check in startup benchmark harness (wall-clock + RSS) for manual runs against loopback model server. | Enables regression tracking for #12622 gains. |
| **[#12665](https://github.com/QwenLM/qwen-code/pull/12665)** | Fix | Report dropped `@`-references (outside workspace, git/qwen ignored, unreadable, server refs) instead of silent drop. | Improves debuggability of context injection. |
| **[#12222](https://github.com/QwenLM/qwen-code/pull/12222)** | Feat | Add `model.generationConfig.toolParametersMandatory` opt-in: send empty `parameters: {}` for zero-arg tools (strict OpenAI compat). | Unblocks strict-compatible servers. |
| **[#12637](https://github.com/QwenLM/qwen-code/pull/12637)** | Feat (Java SDK) | Add v2 tool operations (`execute`, `status`, `cancel`) to runtime transport with four-field identity. | Core for Managed Runtime v2 integration. |
| **[#12643](https://github.com/QwenLM/qwen-code/pull/12643)** | Fix (a11y) | Single persistent announcement area per workspace/session for context compression progress/result. | Fixes **#11810**; VoiceOver verification pending. |
| **[#12641](https://github.com/QwenLM/qwen-code/pull/12641)** | Fix (UI) | Complete Skill toggle feedback: success notice persists on refresh, error restores controls, stale selection handled. | Closes 5 follow-ups from **#10152**. |
| **[#12605](https://github.com/QwenLM/qwen-code/pull/12605)** | Fix | Keep one-shot `system-reminder` prefixes out of shell mode; latches stay armed for next model prompt. | Fixes **#11626**. |
| **[#12675](https://github.com/QwenLM/qwen-code/pull/12675)** | Fix | Resolve npm global config when npm refuses to print it (secret-like path); fallback to known locations. | Hardens self-update reliability. |

---

## 5. Feature Request Trends

From the issue landscape, three clear directions dominate:

1. **Managed Agent & Multi-Agent Orchestration**  
   - Dual-path architecture (#12380), background agent coordination (#8097), Runtime Broker durability (#12670), session/workspace ownership models.  
   - *Signal*: 19-comment design thread, multiple roadmap tags (`multi-agent`, `platform-distribution`, `daemon`).

2. **Web Shell as First-Class Platform Surface**  
   - Session deletion UX (#12669), MCP approval polish (#12644), Skill toggle completeness (#10152→#12641), a11y for compression announcements (#11810→#12643), unread marker persistence (#12672).  
   - *Signal*: Concentrated PR activity from `BlackishGreen33`, `zonemeen` — Web Shell is receiving sustained polish.

3. **Strict LLM Provider Compatibility**  
   - `toolParametersMandatory` (#12222), Batch API dispatcher alignment (#12169), runtime attestation validation (#12676).  
   - *Signal*: Targeted fixes for enterprise/proxy/TLS environments and OpenAI-API-strict servers.

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Status |
|------------|----------|--------|
| **Self-update breaks vendored binaries** | `ripgrep` loses exec bit → `EACCES` on every search (#12668) | Fixed in #12673 (next patch) |
| **Silent failures in context injection** | `@`-references dropped without notice (#12665) | Fixed in #12665 |
| **Shell mode polluted by internal notices** | `system-reminder` prefixes sent to bash (#11626) | Fixed in #12605 |
| **Batch API fails behind corporate proxies** | Direct `fetch` bypasses pinned dispatcher (#12169) | Fix identified, pending PR |
| **Startup latency & memory** | Fresh `qwen` slow, high RSS | **Major improvement** in #12622 (2.2–2.4× faster, 60% less RSS) |
| **Background agent reliability** | Duplicate work, premature completion, broken `send_message` (#8097) | Open, architectural |
| **Session recovery after host failure** | In-flight execution pins `LOST` binding forever (#12670) | Open, found in E2E test |
| **Accessibility gaps in Web Shell** | Repeated compression announcements (#11810), missing Skill feedback (#10152) | Addressed in #12643, #12641 |

---

> **Next Watch**: The Managed Agent architecture (#12380) is the highest-leverage design discussion — its resolution will shape v0.25+ multi-agent, fleet, and platform-distribution roadmaps. The startup perf gains (#12622) set a new baseline; expect benchmark harness (#12674) to gate future regressions.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-09-25

## 1. Today's Highlights
The project is in heavy stabilization for **v0.10.1** with 18 PRs merged in the last 24h addressing critical bugs: session restoration on Windows, compaction failures, config validation, model picker UX, and a sweeping static audit that surfaced 9 security/reliability issues (unbounded reads, fail-open paths, non-atomic writes, sync work on async runtime, etc.). A contributor PR (#6568) adds schema-backed validation to `codewhale config set`, closing a silent-failure vector. The website is being refreshed for the GPUI beta (#6567).

---

## 2. Releases
**No new releases in the last 24h.** The v0.10.1 cut is imminent; the merged PRs represent its release candidate fixes.

---

## 3. Hot Issues (10 Noteworthy)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#6310](https://github.com/Hmbown/Codewhale/issues/6310) | **ACP follow-up: empty terminal responses & Full Access discovery** | Core ACP integration bug fixed; verified in nightly. Unblocks agent-client protocol for external editors. | 11 comments, **CLOSED** |
| [#6109](https://github.com/Hmbown/Codewhale/issues/6109) | **Deterministic audiovisual pet across surfaces** | Novel “Codewhale” avatar: persistent dots + whale form sharing one deterministic event log across TUI, browser, native. | 2 comments, **OPEN** (founder-driven) |
| [#6421](https://github.com/Hmbown/Codewhale/issues/6421) | **deepseek-flash incorrectly rejects image input** | Model capability regression in 0.10.0; blocks multimodal workflows. | 2 comments, **CLOSED** |
| [#6418](https://github.com/Hmbown/Codewhale/issues/6418) | **Unable to restore session (Windows path canonicalization)** | Data-loss risk for Windows users; `/resume` failed on `\\?\` prefix mismatch. | 1 comment, **CLOSED** (fixed in #6522) |
| [#6566](https://github.com/Hmbown/Codewhale/issues/6566) | **First-run onboarding completely missing; first message lost/doubled** | New users see no onboarding, provider picker shows dev-facing errors, approval card leaks internals. | 0 comments, **OPEN** (audit finding) |
| [#6563](https://github.com/Hmbown/Codewhale/issues/6563) | **`config set` accepts typos/unknown keys silently** | `calm_mode flase` → writes to wrong file; `bogus_key 42` → pollutes config. Security/usability hole. | 0 comments, **OPEN** (fixed in #6568) |
| [#6564](https://github.com/Hmbown/Codewhale/issues/6564) | **Settings by conversation: propose-only tool with per-change approval** | Founder ask: natural-language settings (`/settings "make it quiet"`) → diff card → approve/reject per change. | 0 comments, **OPEN** (design phase) |
| [#6562](https://github.com/Hmbown/Codewhale/issues/6562) | **Code mode for MCP/plugins: discovery without re-pinning + typed bindings** | MCP is 3% of calls but 71% of tokens; needs schema-driven discovery & shared gate (like Cloudflare/Cursor). | 0 comments, **OPEN** (research) |
| [#6540](https://github.com/Hmbown/Codewhale/issues/6540) | **Compaction: 15/16 recorded compactions failed; 0% cache hit** | Token efficiency crisis: emergency passes on local models (~2–6k tokens vs 1k budget) silently failed. | 0 comments, **CLOSED** (fixed in #6544) |
| [#6553–#6561](https://github.com/Hmbown/Codewhale/issues/6553) | **Static audit backlog: 9 systemic reliability/security classes** | Unbounded buffers, fail-open errors, child process leaks, non-idempotent retries, TOCTOU races, non-atomic writes, sync-on-async, missing DoS limits. | 0 comments each, **OPEN** (agent-ready tasks) |

---

## 4. Key PR Progress (10 Important)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#6483](https://github.com/Hmbown/Codewhale/pull/6483) | **fix(tui)** | Undo now rolls back files for the turn being undone (VS Code client regression). |
| [#6496](https://github.com/Hmbown/Codewhale/pull/6496) | **fix(runtime)** | `run_verifiers` approval no longer hangs; approval cards explain what will happen. |
| [#6523](https://github.com/Hmbown/Codewhale/pull/6523) | **fix(tui)** | Model picker: `⇧P`/`⇧F` pin/Fleet work **while searching**; shows receipt on action. |
| [#6446](https://github.com/Hmbown/Codewhale/pull/6446) | **perf(sessions)** | Resume large sessions by **moving** transcript instead of 3× cloning (memory win). |
| [#6567](https://github.com/Hmbown/Codewhale/pull/6567) | **feat(web)** | Website header/hero refresh for GPUI beta: unified install choice, mobile menu, GPUI design tokens. |
| [#6448](https://github.com/Hmbown/Codewhale/pull/6448) | **feat(fleet)** | Two-press `Stop` for writing agents; per-descendant receipts; cascading stop with disarm. |
| [#6539](https://github.com/Hmbown/Codewhale/pull/6539) | **feat(auto)** | **Official model routing**: `/router` (or `/model router`) with Decision router (Jev via OpenRouter/TypeSafe), `min_confidence`, per-turn System-1 choice. |
| [#6548](https://github.com/Hmbown/Codewhale/pull/6548) | **fix(tools)** | Edit misses show closest region (12 lines); `cwd` errors name root; `update_goal` no-op without goal. |
| [#6549](https://github.com/Hmbown/Codewhale/pull/6549) | **fix(agents)** | Budget death writes deterministic digest to `.codewhale/state/subagent-results/<sha>.md` **before** hand-back. |
| [#6544](https://github.com/Hmbown/Codewhale/pull/6544) | **fix(compaction)** | Stops false emergency passes on fallback windows; reuses turn’s cache prefix → 15/16 compactions now succeed. |
| [#6551](https://github.com/Hmbown/Codewhale/pull/6551) | **fix(build)** | Clears 8 unfulfilled `#[expect(dead_code)]` for rustc 1.89; adds MSRV CI job. |
| [#6552](https://github.com/Hmbown/Codewhale/pull/6552) | **fix(audit)** | DSH integration tests now write audit events to hermetic home, not real `~/.codewhale/audit.log`. |
| [#6522](https://github.com/Hmbown/Codewhale/pull/6522) | **fix(sessions)** | Windows `/resume`: compare canonicalized store paths (handles `\\?\` prefix). |
| [#6519](https://github.com/Hmbown/Codewhale/pull/6519) | **fix(tui)** | TUI keeps drawing when unfocused (fixes frozen side-by-side); `Esc` hint only where it closes workbar. |
| [#6537](https://github.com/Hmbown/Codewhale/pull/6537) | **fix(tui)** | `/model` lists: current → pins/Fleet → recent (8); drops legacy `enabled_models` table. |
| [#6527](https://github.com/Hmbown/Codewhale/pull/6527) | **fix(app-server)** | Removes `POST /tool` and its empty second tool registry/approval authority. |
| [#6568](https://github.com/Hmbown/Codewhale/pull/6568) | **fix(config)** | **Contributor**: Validates `config set` values against `SETTINGS_SCHEMA`; rejects typos/unknown keys with did-you-mean. |

---

## 5. Feature Request Trends
1. **Conversational Settings** (#6564) — `/settings <intent>` → proposed diffs → per-change approval cards.  
2. **MCP/Plugin Code Mode** (#6562) — Schema discovery without re-pinning; typed bindings via shared gate (Cloudflare/Cursor parity).  
3. **Official Model Routing** (#6525 → #6539) — Interactive `/router` with Jev (OpenRouter/TypeSafe) presets; now landed.  
4. **Deterministic Cross-Surface Avatar** (#6109) — Single event log driving TUI/browser/native “Codewhale” visualization.  
5. **First-Run Onboarding** (#6566) — Guided provider setup, no lost messages, hide dev-facing UI.  
6. **Background Work Visibility** (#6565) — Footer shows actionable status (not chatter); cache rate always visible.

---

## 6. Developer Pain Points (Recurring)
| Pain Point | Evidence |
|------------|----------|
| **Silent config corruption** | `config set` accepts typos/unknown keys (#6563, fixed in #6568) |
| **Session restoration broken on Windows** | Path canonicalization mismatch (#6418, fixed in #6522) |
| **First-run experience is non-existent** | No onboarding, lost/doubled first message, dev UI leaks (#6566) |
| **Model picker shows stale models** | GLM-5.2, old OpenRouter models; misses `deepseek-flash` (61/78 sessions) (#6533, fixed in #6537) |
| **Workbar `Esc` hint misleads** | Reads “close workbar” but cancels turn → loses work (#6502, fixed in #6519) |
| **Compaction silently fails** | 15/16 failed; 0% cache hit on local models (#6540, fixed in #6544) |
| **Build breaks on new Rust** | 8 unfulfilled `dead_code` expectations on 1.89 (#6543, fixed in #6551) |
| **Tests pollute real audit log** | `integration.dsh.*` events in `~/.codewhale/audit.log` (#6534, fixed in #6552) |
| **Duplicate tool authority in app-server** | `POST /tool` used empty registry + local approval map (#6505, fixed in #6527) |
| **Workflow card unreadable** | Truncated title, cryptic phase summary, alarm color when healthy (#6503) |
| **Background work footer noise** | Step chatter, agent name mismatch, `needs-you` never reaches footer (#6565) |
| **Systemic reliability gaps** | 9 audit classes: unbounded reads, fail-open, child leaks, non-idempotent retries, TOCTOU, non-atomic writes, sync-on-async, missing limits (#6553–#6561) |

---

*Digest generated from github.com/Hmbown/DeepSeek-TUI (Codewhale) activity 2026-09-24 → 2026-09-25.*

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*