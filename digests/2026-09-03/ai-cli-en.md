# AI CLI Tools Community Digest 2026-09-03

> Generated: 2026-09-03 04:04 UTC | Tools covered: 10

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

# Cross-Tool Comparison Report: AI CLI Tools Ecosystem (2026-09-03)

---

## 1. Ecosystem Overview

The AI CLI tools landscape is in a **consolidation-and-hardening phase**. Major players (Claude Code, Codex, Gemini CLI, Copilot CLI) are shipping enterprise-grade features—managed MCP distribution, Windows daemon support, sandbox hardening, and multi-model fallback—while simultaneously fighting regressions in permission systems, session persistence, and cross-platform parity. A second tier (OpenCode, Pi, Qwen Code, CodeWhale) is iterating rapidly on architectural foundations: agent runtimes, plugin systems, TUI modernization, and provider-agnostic designs. **Windows stability, MCP reliability, and session lifecycle management** are the three universal pain points. No tool has "solved" the agent reliability problem; all are investing heavily in subagent orchestration, model routing, and observability.

---

## 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Updated (24h) | Release Today | Release Version | Primary Focus |
|------|---------------------|-------------------|---------------|-----------------|---------------|
| **Claude Code** | 10 (hot) + 5 feature | 4 | ✅ | v2.1.259 | Enterprise MCP, headless permissions, Windows stability |
| **OpenAI Codex** | 10 (hot) | 20+ merged | ✅ | v0.153.0 | Vim undo/redo, plugin CLI, Windows daemon, session resume |
| **Gemini CLI** | 10 (hot) | 37 merged/updated | ❌ | — | Security CVEs, sandbox hardening, subagent reliability |
| **GitHub Copilot CLI** | 10 (hot) | 0 | ✅ | v1.0.83-2/3 | Multi-model fallback, MCP fixes, Linux sandbox egress |
| **Kimi Code CLI** | 5 (all closed) | 0 | ❌ | — | Maintenance sweep (SSH, undo, Mermaid, agent files) |
| **OpenCode** | 10 (noteworthy) | 10 | ✅ | v1.18.27 | Timeout fixes, small-model routing, `/goal` plugin |
| **Pi** | 10 (hot) | 10 | ❌ | — | Provider quirks (Gemini, OpenRouter, Codex), AgentHarness runtime |
| **Qwen Code** | 5 | 10 | ✅ | live-host-v0.2.0 | OpenTUI migration, CI hardening, skill/MCP ecosystem |
| **DeepSeek TUI (CodeWhale)** | 10 | 10 | ❌ (v0.9.12 assembling) | — | Provider neutrality, IDE program (VS Code fork), Lambda microVMs |
| **Grok Build** | 0 | 0 | ❌ | — | No activity |

**Key Observation**: Codex leads in PR velocity (20+ merged); Gemini CLI matches with 37 PRs (mostly security/CI). Claude Code and Copilot CLI ship user-facing patches. CodeWhale and OpenCode are in major architectural transitions.

---

## 3. Shared Feature Directions (Cross-Tool Requirements)

| Requirement | Tools Affected | Specific Community Needs |
|-------------|----------------|--------------------------|
| **MCP Server Reliability & Distribution** | Claude Code, Codex, Copilot CLI, Gemini CLI, OpenCode, Pi, Qwen Code | Managed org-wide MCP config (Claude `managedMcpServers`), OAuth token reuse (Copilot #4695), coordinated refresh (Codex #42413), HTTP/SSE support, startup ordering (Codex #42406), proxy auth (Claude #76248) |
| **Windows Parity & Stability** | Claude Code, Codex, Copilot CLI, Gemini CLI, Pi, Qwen Code | Desktop window management (Claude #85891), daemon support (Codex #42405), sandbox egress (Copilot v1.0.83-2), headless launch (Codex #41540), path separators (Copilot #4701), PID reuse (Qwen #10687) |
| **Session Persistence & Resume** | Codex, Copilot CLI, OpenCode, Pi, Claude Code | Session resume with state (Codex #42419), custom agent restore (Copilot #4674), history scoping (OpenCode #46969), fork compaction boundaries (Pi #8990), permission inheritance (Claude #89911) |
| **Multi-Model / BYOK Routing** | Copilot CLI, OpenCode, Codex, Pi, Qwen Code | In-session `/model` switching to local/BYOK (Copilot #3709), small-model for lightweight turns (OpenCode #46929), provider-neutral catalog (CodeWhale #5848), thinking/reasoning control unification (Pi) |
| **Subagent / Delegation Reliability** | Gemini CLI, OpenCode, Claude Code, Codex, Qwen Code | Hang prevention (Gemini #21409), false success reporting (Gemini #22323), autonomous skill use (Gemini #21968), goal/loop primitives (OpenCode #27167), agent-view mode demotion (Claude #89911) |
| **Security & Sandbox Hardening** | Gemini CLI, Copilot CLI, Pi, Qwen Code, Codex | CVE patches (Gemini simple-git, shell-quote), Linux sandbox egress (Copilot), NTFS short-name mitigation (Gemini #29116), macOS Seatbelt (Gemini #29171), capability policies (Pi #9044) |
| **TUI/UX Modernization** | Codex, Qwen Code, CodeWhale, OpenCode, Pi | Vim mode undo/redo (Codex), OpenTUI migration (Qwen #8662), fleet vocabulary/themes (CodeWhale #5862), composer input hardening (Codex #42408), footer extensibility (Pi) |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | OpenCode | Pi | Qwen Code | CodeWhale |
|-----------|-------------|--------------|------------|-------------|----------|-----|-----------|-----------|
| **Primary Focus** | Enterprise governance, managed MCP, permission granularity | Developer experience polish, TUI/daemon, plugin ecosystem | Security hardening, subagent architecture, AST tooling | GitHub integration, multi-model fallback, enterprise parity | Agent runtime flexibility, model routing, plugin SDK | Provider-agnostic runtime, architectural purity, recovery | Daemon/server extensibility, TUI migration, skill ecosystem | IDE-native (VS Code fork), provider neutrality, cloud substrate pivot |
| **Target User** | Enterprise teams, org admins, security-conscious devs | Power users, plugin authors, Vim enthusiasts | Google ecosystem devs, security-first teams, agent builders | GitHub-native orgs, BYOK users, enterprise Copilot seats | Advanced users building custom agents, plugin devs | Framework builders, multi-provider integrators, runtime hackers | Cloud/daemon operators, skill authors, Chinese-market devs | IDE power users, cloud automation, fleet operators |
| **Technical Approach** | Centralized config (`managedMcpServers`), server-controlled gates, proprietary desktop | Rust daemon + TUI, plugin SDK, AF_UNIX IPC, composer abstraction | Zero-dep OS sandboxing, AST-aware tools, model-native bash affinity | ACP protocol, GitHub-hosted models + BYOK, per-agent provider scoping | Plugin-first architecture, Effect-based permissions, small-model catalog | Recoverable `AgentHarness`, capability policies, mid-turn prompt mutation | OpenTUI renderer, worktree-isolated channels, MCP skill bundling | VS Code fork + microVMs, fleet vocabulary, per-session control sockets |
| **Maturity Signal** | High enterprise adoption, but Windows debt & permission regressions | High polish, rapid iteration, Windows daemon = milestone | Heavy stabilization, CVE-driven, subagent reliability gaps | Tight GitHub integration, MCP growing pains, memory leaks | Architectural clarity, strong plugin model, Windows gaps | Deep provider integration, architectural ambition, UX rough edges | CI investment, TUI rewrite in progress, daemon focus | Strategic pivot (Daytona→Lambda), mega-file decomposition, pre-1.0 |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|------|-------|----------|
| **High Momentum / Enterprise-Ready** | **Claude Code**, **OpenAI Codex** | Claude: 676 👍 on multi-account (#36151), enterprise features shipping. Codex: 20+ PRs/day, Windows daemon shipped, 79 👍 on command collapsing (#39903). Both have dedicated desktop apps and org management. |
| **Rapid Iteration / Architectural Investment** | **Gemini CLI**, **OpenCode**, **Pi**, **CodeWhale** | Gemini: 37 PRs (security + architecture). OpenCode: v1.18.27 + `/goal` plugin + small-model routing same day. Pi: `AgentHarness` runtime landed, provider quirk fixes. CodeWhale: 10-slice UX PR + IDE program ratified. |
| **Platform-Integrated / Steady** | **GitHub Copilot CLI**, **Qwen Code** | Copilot: bi-weekly patches, MCP + multi-model focus, but OOM/memory leaks persist. Qwen: OpenTUI migration batches, CI lane investment, daemon APIs. |
| **Maintenance / Niche** | **Kimi Code CLI**, **Grok Build** | Kimi: stale issue sweep only. Grok: zero activity. |

**Maturity Indicators**:
- **Claude Code** & **Codex** have the clearest enterprise signals (managed settings, daemon, compliance features).
- **Gemini CLI** leads on security hygiene (CVE response within hours).
- **OpenCode** & **Pi** show strongest *architectural* velocity (recoverable runtimes, capability policies).
- **CodeWhale** is the only tool executing a **strategic platform pivot** (VS Code fork + Lambda microVMs).

---

## 6. Trend Signals for Technical Decision-Makers

| Trend | Signal Strength | Implication |
|-------|-----------------|-------------|
| **MCP is the de facto agent-tool protocol** | 🔥 **Critical** — 8/9 tools actively debugging MCP OAuth, startup, proxy, and distribution | Standardize on MCP for tool exposure; expect managed MCP registries (Claude `managedMcpServers` is the first) |
| **Windows is the new Linux** | 🔥 **Critical** — Every tool has Windows-specific blockers (daemon, sandbox, paths, updates) | CI must include Windows 11 Insider builds; daemon/headless support is table stakes |
| **Session = Persistent State, not Chat History** | 🔥 **High** — Resume, fork, compaction, goal-tracking, agent restore are universal asks | Build for *session lifecycle* (save/restore/fork), not just conversation turns |
| **Model Routing > Single Model** | 🔥 **High** — Small-model for light turns (OpenCode), BYOK switching (Copilot), provider-neutral catalog (CodeWhale) | Design agent runtimes with **model catalog + routing policy** as first-class primitives |
| **Subagent Reliability is the Differentiator** | 🔥 **High** — Hangs, false success, ignored skills, permission demotion plague all tools | Invest in **observability** (trajectories, debug context) and **contracts** (goal/loop, capability policies) |
| **Security Hygiene as Competitive Advantage** | 📈 **Growing** — Gemini's CVE velocity, Pi's `AgentHarness` policies, Copilot's sandbox egress | Supply-chain hardening (sigstore, SBOM), runtime capability policies, and secret redaction are becoming requirements |
| **TUI → IDE Convergence** | 📈 **Growing** — Codex daemon + TUI, CodeWhale VS Code fork, Qwen `qwen serve`, OpenCode browser pane | The "CLI" is becoming a **headless engine** with multiple frontends (TUI, IDE, Web, API) |
| **Provider-Neutral Architecture** | 📈 **Growing** — CodeWhale 18-gate audit, Pi multi-provider quirks, Qwen skill catalog | Avoid vendor-locked primitives; build against **capability interfaces**, not provider SDKs |

---

## Bottom Line for Decision-Makers

| If You Need... | Best Fit Today | Watch Next |
|----------------|----------------|------------|
| **Enterprise governance + managed MCP** | Claude Code | Codex (daemon + managed apps) |
| **Polished TUI + plugin extensibility** | OpenAI Codex | OpenCode (plugin SDK) |
| **Security-first + subagent architecture** | Gemini CLI | Pi (AgentHarness) |
| **GitHub-native + BYOK flexibility** | Copilot CLI | Codex (plugin CLI) |
| **Custom agent runtime / framework building** | OpenCode / Pi | CodeWhale (IDE program) |
| **Daemon/server + skill ecosystem** | Qwen Code | Copilot CLI (ACP) |
| **IDE-integrated agentic workflow** | (CodeWhale → VS Code fork) | Copilot CLI (VS Code native) |

**Strategic Recommendation**: The ecosystem is converging on **MCP + daemon + session lifecycle + model routing** as the core stack. Tools that treat the CLI as a *headless engine* with pluggable frontends (Codex, CodeWhale, Qwen, OpenCode) are architecturally ahead. Enterprises should standardize on **MCP for tooling**, **daemon for session sharing**, and **capability policies for security**—and evaluate tools on their ability to *compose* these primitives rather than on single-model benchmarks.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-09-03 | Source: anthropics/skills*

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| Rank | Skill | Functionality | Discussion Highlights | Status |
|------|-------|---------------|----------------------|--------|
| 1 | **[skill-creator: fix run_eval.py recall=0%](https://github.com/anthropics/skills/pull/1298)** | Core evaluation harness for skill descriptions; fixes Windows stream reading, trigger detection, parallel workers | 10+ independent reproductions of 0% recall bug; blocks description-optimization loop | **Open** (Jun 10 – Jun 23) |
| 2 | **[document-typography](https://github.com/anthropics/skills/pull/514)** | Typographic QC for AI-generated docs: orphan/widow prevention, numbering alignment | Addresses universal pain point in every document Claude generates | **Open** (Mar 4 – Mar 13) |
| 3 | **[scnet-hpc](https://github.com/anthropics/skills/pull/1615)** | SCNet HPC cluster operations via profile-based SSH/Slurm workflows | Niche but complete: connection profiles, job generation, cluster discovery | **Open** (Aug 20 – Aug 24) |
| 4 | **[pdf: case-sensitive file refs](https://github.com/anthropics/skills/pull/538)** | Fixes 8 case-sensitivity mismatches in SKILL.md (REFERENCE.md→reference.md, FORMS.md→forms.md) | Breaks on case-sensitive filesystems; straightforward fix | **Open** (Mar 6 – Apr 29) |
| 5 | **[odt](https://github.com/anthropics/skills/pull/486)** | OpenDocument (.odt/.ods) create, fill, read, convert; ISO-standard document support | Trigger keywords: ODT, ODS, ODF, LibreOffice, open-source formats | **Open** (Mar 1 – Apr 14) |
| 6 | **[frontend-design clarity](https://github.com/anthropics/skills/pull/210)** | Revises skill for actionability: every instruction followable in single conversation | Shifts from educational tone to operational directives | **Open** (Jan 5 – Mar 7) |
| 7 | **[skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** | Meta-skills: 5-dim quality analysis (structure, examples, resources, security, maintainability) + security scanning | Addresses marketplace quality control gap | **Open** (Nov 6 – Jan 7) |
| 8 | **[docx: tracked change w:id collision](https://github.com/anthropics/skills/pull/541)** | Prevents document corruption when adding tracked changes to docs with existing bookmarks | Root cause: shared w:id space across bookmarks/changes/comments | **Open** (Mar 6 – Apr 16) |

> **Note**: PR comment counts show as "undefined" in source data; ranking follows repository's "sorted by comments" ordering.

---

## 2. Community Demand Trends (From Issues)

| Trend | Evidence (Issue #) | Community Signal |
|-------|-------------------|------------------|
| **Security & Trust Boundaries** | [#492](https://github.com/anthropics/skills/issues/492) (43 comments, 👍2) | Critical: community skills distributed under `anthropic/` namespace enable impersonation; users grant elevated permissions to fake "official" skills |
| **Organizational Skill Sharing** | [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 👍8) | High demand: eliminate manual .skill file sharing via Slack/Teams; need shared library or direct sharing links |
| **Evaluation Infrastructure Reliability** | [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 👍7) | `run_eval.py` reports 0% trigger rate across all queries; blocks skill-creator optimization loop |
| **Windows Compatibility** | [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050) | Multiple PRs fixing `claude.cmd` vs `claude` subprocess, encoding, pipe reading on Windows |
| **Context Window Management** | [#1487](https://github.com/anthropics/skills/issues/1487) (4 comments) | `claude-api` skill eagerly injects ~156k tokens, exhausting context in single call |
| **MCP Evaluation Broken** | [#1390](https://github.com/anthropics/skills/issues/1390) (4 comments) | `mcp-builder` evaluation.py scores 0/N against real MCP servers (TextContent not JSON serializable) |
| **Quality Gate Pipelines** | [#1385](https://github.com/anthropics/skills/issues/1385) (4 comments, 👍1) | Proposal: 3-gate pipeline (Pre-task Calibration → Adversarial Review → Delivery Verification) |
| **Bedrock/Cloud Provider Support** | [#29](https://github.com/anthropics/skills/issues/29) (4 comments) | Unclear how to use skills with AWS Bedrock; documentation gap |

---

## 3. High-Potential Pending Skills (Active PRs Likely to Land Soon)

| Skill | PR | Why It's Poised to Merge |
|-------|-----|--------------------------|
| **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | Comprehensive testing stack (Trophy model, AAA, React Testing Library, contract, E2E, performance, flaky test mitigation); broad applicability |
| **servicenow** | [#568](https://github.com/anthropics/skills/pull/568) | Enterprise-grade: covers ITSM, ITOM, ITAM/SAM, FSM, HRSD, SPM, SecOps, Vulnerability Response; active updates through Aug 12 |
| **self-audit** | [#1367](https://github.com/anthropics/skills/pull/1367) | Mechanical verification + 4-dimension reasoning audit; universal across tech stacks; v1.3.0 suggests iteration maturity |
| **Hivemind (multi-agent orchestration)** | [#1628](https://github.com/anthropics/skills/pull/1628) | Zero-cost delegation to headless opencode workers; novel architecture addressing expensive-model context scarcity |
| **pyxel (retro game dev)** | [#525](https://github.com/anthropics/skills/pull/525) | MCP server integration for Pyxel engine; clear trigger conditions; active through Jul 15 |
| **claude-api model updates** | [#1607](https://github.com/anthropics/skills/pull/1607) | Maintenance: marks 4 retired model IDs; fixes #1603; updated Sep 1 |
| **evaluation/serialization fixes** | [#1602](https://github.com/anthropics/skills/pull/1602) | Cross-cutting reliability: MCP result extraction, benchmark metrics, encoding, script stability |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for *trustworthy, production-ready skill infrastructure*: reliable evaluation harnesses that don't report false metrics, secure distribution that prevents namespace spoofing, and organizational sharing workflows that eliminate manual file passing — all while fixing Windows compatibility and context-window exhaustion that block real-world adoption.**

---

# Claude Code Community Digest — 2026-09-03

---

## 1. Today's Highlights

- **v2.1.259 released** with two enterprise-focused features: `managedMcpServers` for org-wide HTTP/SSE MCP server distribution, and `--permission-prompts none` for fully unattended headless execution.
- **Windows Desktop stability dominates community attention** — multiple high-engagement issues track always-on-top window behavior, stealth-update orphaned processes (0x80070020), and CoworkVMService blocking installs/updates.
- **Permission system regression in 2.1.259** confirmed: `bypassPermissions` mode now incorrectly prompts on compound `cd && grep` commands when Read deny rules exist.

---

## 2. Releases

### v2.1.259
| Change | Impact |
|--------|--------|
| `managedMcpServers` managed setting | Organizations can pre-configure HTTP/SSE MCP servers for all users (same schema as `.mcp.json`); command-based entries are skipped |
| `--permission-prompts none` | Disables all permission prompts for unattended/headless hosts — anything that would prompt is auto-approved |

[Release Notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.259)

---

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#36151](https://github.com/anthropics/claude-code/issues/36151) | **Multi-account switching in Claude Mobile** (no shared email) | Top feature request; 676 👍, 169 comments — users blocked by single-account limitation | 🔥 **Highest engagement** — clear product gap for multi-identity workflows |
| [#85891](https://github.com/anthropics/claude-code/issues/85891) | **Windows 11: Desktop window always-on-top, no disable setting** | Core UX break; window steals focus permanently | 145 👍, 65 comments — duplicate of #66516 (macOS), Windows parity gap |
| [#53247](https://github.com/anthropics/claude-code/issues/53247) | **Desktop fails to launch — orphaned Silo/Job Object after crash** | Requires logoff/reboot to recover; HRESULT 0x80070020 | 22 👍, 51 comments — persistent Windows sandboxing bug |
| [#76248](https://github.com/anthropics/claude-code/issues/76248) | **Cowork git proxy blocks all pushes — PAT pass-through broken** | Breaks cloud session workflows; regression mid-session | 12 👍, 32 comments — `CCR_TEST_GITPROXY` rollout suspected |
| [#91683](https://github.com/anthropics/claude-code/issues/91683) | **bypassPermissions prompts on `cd && grep` with Read deny rules (2.1.259 regression)** | New release breaks previously working permission bypass | 0 👍, 1 comment — **critical regression**, reported same day as release |
| [#91650](https://github.com/anthropics/claude-code/issues/91650) | **Bash cd-compound-read guard prompts on absolute cd with Read deny rules** | Same root cause as #91683; affects 2.1.257–2.1.259 | 9 👍, 1 comment — Windows Git Bash specific |
| [#89680](https://github.com/anthropics/claude-code/issues/89680) | **Stealth update leaves orphaned processes holding old AppX container** | New version unlaunchable (0x80070020) until reboot | 0 👍, 8 comments — update mechanism flaw |
| [#89911](https://github.com/anthropics/claude-code/issues/89911) | **Inherited permission mode silently demoted in agents-view spawns** | Server-controlled gate (`tengu_agentview_inherit_mode_demote`) demotes plan→auto | 0 👍, 5 comments — hidden behavior change |
| [#89251](https://github.com/anthropics/claude-code/issues/89251) | **Permission-mode system prompt routes writes via Bash, bypassing PreToolUse hooks** | Security boundary bypass: model instructed to use `cat`/`sed` instead of Write tool | 1 👍, 4 comments — hooks circumvented by design |
| [#91296](https://github.com/anthropics/claude-code/issues/91296) | **`bypassPermissions` in settings.local.json silently ignored, missing from Shift+Tab cycle** | Config not respected; UI cycle incomplete | 3 👍, 4 comments — config + UX bug |

---

## 4. Key PR Progress

| PR | Status | Description |
|----|--------|-------------|
| [#87079](https://github.com/anthropics/claude-code/pull/87079) | OPEN | **Fix `**` glob patterns in security-guidance** — `fnmatch` treats `**/*.ts` as requiring literal `/`, excluding top-level files; silent non-coverage of security rules |
| [#61691](https://github.com/anthropics/claude-code/pull/61691) | OPEN | **Diagnostic script for GitHub MCP connector** — shows "Connected" but exposes zero tools; addresses recurring Cowork bug chain (#28695, #41658, #57582) |
| [#41938](https://github.com/anthropics/claude-code/pull/41938) | CLOSED | **Linux/macOS Bash script for DevContainer startup** — parity with existing Windows PowerShell script |
| [#86537](https://github.com/anthropics/claude-code/pull/86537) | OPEN | **CHANGELOG typo fix** — duplicated "to to" in v1.0.124 entry for `CLAUDE_BASH_NO_LOGIN` |

> **Note:** Only 4 PRs updated in last 24h — low contribution velocity; most activity is issue triage.

---

## 5. Feature Request Trends

| Trend | Evidence | Priority Signal |
|-------|----------|-----------------|
| **Multi-account / identity management** | #36151 (676 👍), cross-device sync requests | 🔥 **Critical** — top community ask |
| **Windows Desktop parity with macOS** | #85891 (always-on-top), #53247 (launch failure), #89680 (update), #49655 (CoworkVMService) | 🔥 **High** — platform blocker for Windows users |
| **Permission system granularity & reliability** | #91296 (config ignored), #89911 (silent demotion), #89251 (hook bypass), #91683/#91650 (regressions) | 🔥 **High** — core workflow friction |
| **Cowork/Cloud session git integration** | #76248 (proxy blocks PAT), #61691 (connector shows 0 tools) | ⚠️ **Medium** — enterprise workflow breakage |
| **Secret storage hardening** | #73582 (OS secret store vs plaintext) | 📈 **Growing** — security compliance need |
| **Status line / observability extensibility** | #73770 (per-model rate limits in statusline) | 📈 **Niche but vocal** — power-user customization |

---

## 6. Developer Pain Points (Recurring Frustrations)

1. **Windows is a second-class platform** — Desktop app has persistent window-management bugs (always-on-top), update failures (orphaned AppX containers, CoworkVMService DACL locks), and launch crashes requiring reboot. Multiple issues span 5+ months without resolution.

2. **Permission system is unstable and opaque** — v2.1.259 introduced regressions (`bypassPermissions` prompting on compound commands), silent mode demotion in agent-view spawns, and system prompts that explicitly route around hook boundaries. Config in `settings.local.json` is ignored.

3. **Cowork cloud sessions are unreliable** — Git proxy blocks pushes even with user PATs; GitHub MCP connector reports "Connected" but exposes zero tools; diagnostic scripts needed as workarounds.

4. **Mobile/desktop identity disconnect** — No multi-account switching on mobile; no session linking between Claude Code and claude.ai chat (#76440).

5. **Stealth updates break running sessions** — Auto-updates leave orphaned processes, corrupt containers, and require full reboot — no graceful handoff.

6. **Documentation lags implementation** — Undocumented `effort` field in subagents (#91415), outdated security-guidance plugin docs (#89728), hooks-guide examples broken on paths with spaces (#88188).

---

*Generated from github.com/anthropics/claude-code data as of 2026-09-03*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-09-03

---

## 1. Today's Highlights

Codex shipped **v0.153.0** with Vim-mode undo/redo (`u` / `Ctrl+R`) that preserves full drafts including pasted content and attachments, plus a new plugin CLI for listing, installing, and removing plugins. The team also merged **20+ PRs** today—most notably enabling the **app-server daemon on Windows**, adding **session resume to the agent command center**, and hardening **MCP OAuth refresh coordination** and **composer input handling**.

---

## 2. Releases

### `rust-v0.153.0` (stable) · `rust-v0.153.0-alpha.6` · `rust-v0.153.0-alpha.5.1`

| Change | Details |
|--------|---------|
| **Vim mode undo/redo** | `u` and `Ctrl+R` now work in Vim mode, preserving complete drafts including pasted content and attachments ([#41941](https://github.com/openai/codex/pull/41941), [#42140](https://github.com/openai/codex/pull/42140)) |
| **Plugin CLI** | New subcommands to list, install, and remove plugins |

---

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#39903](https://github.com/openai/codex/issues/39903) | **Add option to disable “Ran N commands” collapsing** | TUI users want full visibility of executed commands without auto-collapsing; critical for debugging long sessions | 60 comments, **79 👍** — highest engagement in 24h |
| [#41622](https://github.com/openai/codex/issues/41622) | **Setting to disable automatic conversation recaps in CLI** | Auto-recaps consume tokens and clutter context for experienced users | 15 comments, **41 👍** |
| [#25828](https://github.com/openai/codex/issues/25828) | **Phone verification fails for Indonesia numbers** | Blocks login entirely for users in affected regions; ongoing since June | 32 comments, 5 👍 |
| [#40968](https://github.com/openai/codex/issues/40968) | **Windows desktop: Send button spins forever** | Core chat interaction broken on Windows 11 Insider builds | 23 comments, 4 👍 |
| [#40219](https://github.com/openai/codex/issues/40219) | **macOS: Server-deleted conversations reappear in Recents** | Data sync inconsistency; deleted chats cannot be permanently removed | 15 comments, **14 👍** |
| [#41513](https://github.com/openai/codex/issues/41513) | **Windows: Floating pets become click-through** | UI regression affecting both built-in and custom pets | 20 comments, 6 👍 |
| [#41540](https://github.com/openai/codex/issues/41540) | **Windows headless startup: `node_repl.exe` relocation failure (0x80071770)** | App fails to launch window after Store auto-update; 12-min block | 15 comments, 1 👍 |
| [#39823](https://github.com/openai/codex/issues/39823) | **CLI/TUI session resume fails with “already has an active writer”** | Breaks session continuity after approval-mode use or switching | 13 comments, 2 👍 |
| [#31017](https://github.com/openai/codex/issues/31017) | **Codex cannot access `gh` (GitHub CLI) despite valid login** | Breaks GitHub-integrated workflows on macOS | 10 comments, **12 👍** |
| [#41541](https://github.com/openai/codex/issues/41541) | **v0.150 processes 32.8M-token workloads 1.6–1.8× faster, depleting Pro quota** | Performance gain ironically burns weekly quota faster; billing surprise | 8 comments |

---

## 4. Key PR Progress (Merged Today)

| PR | Area | Summary |
|----|------|---------|
| [#42405](https://github.com/openai/codex/pull/42405) | **Windows / Daemon** | **Support app-server daemon on Windows** — enables background server sharing across Codex sessions (AF_UNIX daemon, `codex agents` startup) |
| [#42419](https://github.com/openai/codex/pull/42419) | **TUI / Agent Command Center** | **Add session resume (`Ctrl+O`)** to agent command center with state preservation |
| [#42428](https://github.com/openai/codex/pull/42428) | **Composer / TUI** | **Replace command-center input with shared composer** — multiline, paste, Vim mode, keybindings, validation |
| [#42413](https://github.com/openai/codex/pull/42413) | **MCP / Auth** | **Coordinated MCP OAuth refresh** — RMCP refreshes/persists credentials via pinned store under lock |
| [#42417](https://github.com/openai/codex/pull/42417) | **Managed Apps / Network** | **Expose `application.network` managed requirements** — exact-domain allow/deny with normalization |
| [#42410](https://github.com/openai/codex/pull/42410) | **Safety / Chat** | **Allow reviewing/continuing misalignment-paused chats** — users can inspect findings before proceeding |
| [#42408](https://github.com/openai/codex/pull/42408) | **Composer / Input** | **Harden embedded composer** — keep `!`, `/`, `?` literal in plain-text; preserve buffers on mode change |
| [#42406](https://github.com/openai/codex/pull/42406) | **MCP / Plugins** | **Honor explicit plugin mentions during MCP startup** — wait for requested tools before continuing turn |
| [#42392](https://github.com/openai/codex/pull/42392) | **Windows / Daemon** | **Managed daemon updates on Windows** — non-interactive PowerShell installer, readiness handshake |
| [#42395](https://github.com/openai/codex/pull/42395) | **Versioning / MCP** | **Expose `CODEX_VERSION` to shell/exec environments** and add `codex_version` to MCP turn metadata |

---

## 5. Feature Request Trends

| Trend | Representative Issues | Signal |
|-------|----------------------|--------|
| **Granular UI control** | [#39903](https://github.com/openai/codex/issues/39903) (command collapsing), [#41622](https://github.com/openai/codex/issues/41622) (auto-recaps), [#35975](https://github.com/openai/codex/issues/35975) (intent navigation rail) | High 👍 + sustained discussion |
| **Session continuity & resume** | [#39823](https://github.com/openai/codex/issues/39823) (writer conflict), [#30485](https://github.com/openai/codex/issues/30485) (mobile↔desktop handoff), [#29284](https://github.com/openai/codex/issues/29284) (cross-host project discovery) | Multiple platforms affected |
| **Windows parity** | [#40968](https://github.com/openai/codex/issues/40968), [#41513](https://github.com/openai/codex/issues/41513), [#41540](https://github.com/openai/codex/issues/41540), [#41539](https://github.com/openai/codex/issues/41539), [#42215](https://github.com/openai/codex/issues/42215) | Cluster of regressions on 26200+ builds |
| **MCP / Plugin ergonomics** | [#42427](https://github.com/openai/codex/issues/42427) (DCR discovery), [#30967](https://github.com/openai/codex/issues/30967) (per-thread skill selection), [#42406](https://github.com/openai/codex/pull/42406) (explicit mentions) | Growing as MCP adoption rises |
| **Quota / cost transparency** | [#41541](https://github.com/openai/codex/issues/41541) (throughput vs quota), [#41969](https://github.com/openai/codex/issues/41969) (Pro Lite depletion), [#41130](https://github.com/openai/codex/issues/41130) (hidden backfill requests) | Pro/Pro Lite users hitting limits unexpectedly |

---

## 6. Developer Pain Points

1. **Windows instability on Insider builds (26200+)** — Send-button hang, headless startup, pet click-through, project-context sync failure, Git LFS temp leaks. Multiple independent reports suggest systemic regression.

2. **Session state corruption across surfaces** — Deleted conversations resurrecting in Recents (macOS + Windows), session-resume writer conflicts, mobile↔desktop permission downgrades, cross-host project discovery failures.

3. **Auth/identity friction** — Phone verification broken for Indonesia (3+ months), `gh` CLI not recognized on macOS, MCP OAuth DCR discovery ignoring `resource_metadata`.

4. **Opacity around token consumption** — Background backfill requests causing 429s, faster throughput silently burning Pro quota, no visibility into “banked” quota resets.

5. **TUI/CLI configurability gaps** — No off-switch for command collapsing, auto-recaps, or Vim-mode draft preservation quirks; power users forced into defaults.

---

*Generated from github.com/openai/codex data as of 2026-09-03. All links point to live GitHub items.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-09-03

## Today's Highlights
The project is in a heavy stabilization phase: no new releases, but 37 PRs merged or updated in the last 24 hours addressing critical security CVEs (simple-git, shell-quote, fast-uri), sandbox hardening, and core reliability fixes. Meanwhile, the issue backlog reveals persistent pain around subagent reliability (hangs, false success reports), shell command stalls, and the Auto Memory system’s noisy retries. A major model upgrade PR (`gemini-3.8-flash` as default) signals the next capability jump.

---

## Releases
*No new releases in the last 24 hours.*

---

## Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent recovery after MAX_TURNS reported as GOAL success** | Subagents silently report “success” when they actually hit turn limits, masking failures in multi-step workflows. | 13 comments, 2 👍, **P1**, `status/need-retesting` |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent hangs indefinitely** | Delegation to the generalist agent freezes the CLI (up to 1 hr); workaround is disabling subagents. | 8 comments, **8 👍**, **P1**, `status/need-retesting` |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell command execution stuck on “Waiting input”** | Simple commands (ls, mkdir) complete but CLI shows “Awaiting user input,” blocking automation. | 4 comments, 3 👍, **P1**, `effort/medium` |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | **Leverage model’s bash affinity via Zero-Dependency OS Sandboxing** | Architectural epic to let Gemini 3 use native POSIX tools securely—core to “agent as bash user” vision. | 9 comments, 1 👍, **P2**, `effort/large` |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **Assess AST-aware file reads, search, and mapping** | Investigation into AST tooling (tilth, glyph) to cut token waste and improve code navigation precision. | 7 comments, 1 👍, **P2** |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | **Gemini does not use skills/sub-agents autonomously** | Agents ignore custom skills unless explicitly invoked, defeating the extensibility model. | 6 comments, **P2** |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | **Deterministic redaction & reduce Auto Memory logging** | Secrets hit model context before redaction; background extractor logs skill data—security & privacy risk. | 5 comments, **P2**, `area/security` |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | **Browser subagent fails on Wayland** | Browser agent terminates with `GOAL` but produces no output on Wayland; blocks Linux adoption. | 4 comments, 1 👍, **P1**, `agent/browser` |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | **Browser agent resilience: session takeover & lock recovery** | Persistent browser profiles fail fast on lock contention; needs automatic recovery for CI/long runs. | 4 comments, **P3** |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | **400 error with >128 tools** | Tool explosion (400+) breaks API calls; agent needs smarter tool scoping. | 3 comments, **P2** |

---

## Key PR Progress (Top 10 by Impact)

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#28902](https://github.com/google-gemini/gemini-cli/pull/28902) | **Fix: block `$VAR` / `${VAR}` variable expansion bypass** | **CLOSED** | **P1 Security** — Completes GHSA-wpqr-6v78-jr5g fix; hardens bash/PowerShell substitution detection. |
| [#29094](https://github.com/google-gemini/gemini-cli/pull/29094) | **Upgrade simple-git to 3.32.3 (CVE-2026-28292)** | OPEN | **CRITICAL CVE** — Dependency upgrade to patch command-injection vector in `simple-git`. |
| [#29095](https://github.com/google-gemini/gemini-cli/pull/29095) | **Upgrade shell-quote to 1.8.4 (CVE-2026-9277)** | OPEN | **CRITICAL CVE** — Fixes argument-injection vulnerability in shell escaping. |
| [#28914](https://github.com/google-gemini/gemini-cli/pull/28914) | **Inject on-retry nudge into conversation contents** | **CLOSED** | Moves retry nudge from system instruction to user-turn suffix, preserving prefix caching. |
| [#28917](https://github.com/google-gemini/gemini-cli/pull/28917) | **Atomic download & failure cleanup in WhisperModelManager** | **CLOSED** | Writes to `.downloading` temp file, verifies length, atomic rename—prevents corrupted models. |
| [#28916](https://github.com/google-gemini/gemini-cli/pull/28916) | **Buffer partial stdout chunks in WhisperTranscriptionProvider** | **CLOSED** | Line-buffers stdout so timestamped transcription lines split across events are reassembled. |
| [#29093](https://github.com/google-gemini/gemini-cli/pull/29093) | **Fixes #29077 — ignoreCache for .gitignore performance** | OPEN | **P1** — In-memory cache + subtree pruning drastically reduces repeated pattern matching. |
| [#29172](https://github.com/google-gemini/gemini-cli/pull/29172) | **Add gemini-3.8-flash as default flash model** | OPEN | Registers 3.5-flash-lite through 3.8-flash; promotes 3.8-flash to default—major model bump. |
| [#29115](https://github.com/google-gemini/gemini-cli/pull/29115) | **Enforce strict permission/ownership checks on system config paths** | OPEN | Windows ACL + POSIX verification before loading system-wide configs—supply-chain hardening. |
| [#29170](https://github.com/google-gemini/gemini-cli/pull/29170) | **Enhance workspace boundary checks & symlink resolution** | OPEN | Path escape checks in command safety, file discovery, and dir listing on POSIX/Windows. |

---

## Feature Request Trends
1. **AST-aware code intelligence** — Multiple issues (#22745, #22746, #19561) push for surgical, token-efficient code navigation via AST tools (tilth, glyph) instead of blunt `read_file`/`grep`.
2. **Subagent-first architecture** — Demand for reliable, observable subagents: auto-delegation (#21968), trajectory sharing (#22598), correct failure reporting (#22323), and bug-report context (#21763).
3. **Auto Memory maturation** — Redaction-before-context (#26525), invalid-patch quarantine (#26523), retry backoff for low-signal sessions (#26522), and unified tracking (#26516).
4. **Sandbox & security hardening** — Zero-dependency OS sandboxing (#19873), NTFS short-name mitigation (#29116), macOS Seatbelt isolation (#29171), config ACL enforcement (#29115).
5. **Model self-awareness & UX polish** — Accurate CLI flag/hotkey knowledge (#21432), tactile extraction hierarchy (#19561), task-tracker via native tools (#21000).

---

## Developer Pain Points (Recurring Frustrations)
- **Subagent unreliability**: Hangs (#21409), false success (#22323), ignored settings (#22267), missing debug context (#21763).
- **Shell integration bugs**: “Waiting input” ghost state (#25166), destructive git commands (#22672), tmp-script sprawl (#23571).
- **Browser agent fragility**: Wayland incompatibility (#21983), profile lock failures (#22232).
- **Tooling overload**: 400+ tools trigger 400 errors (#24246); no automatic scoping.
- **Config & extension friction**: Symlink agents ignored (#20079), DEBUG flag semantics mismatch (#28911, #28904), README drift (#29138).
- **Terminal UX**: Resize flicker (#21924), output-hook crashes (#22186), escaped `@` triggering completion (#28903).

---

*Digest generated from GitHub data (issues/PRs updated 2026-09-03). All links point to live items on `google-gemini/gemini-cli`.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-09-03

## Today's Highlights
Two patch releases (v1.0.83-3 and v1.0.83-2) shipped in the last 24 hours, adding multi-model fallback support for custom agents and Claude Fable 5.1 integration, plus Linux sandbox network egress hardening. The issue tracker shows a surge of critical bugs around MCP server reliability, session memory leaks (OOM crashes), custom agent restoration on resume, and BYOK/local model switching limitations — all actively discussed by the community.

---

## Releases

### v1.0.83-3 (2026-09-02)
**Fixes and changes** — Minor patch following v1.0.83-2.

### v1.0.83-2 (2026-09-02)
**Added**
- **Multi-model fallback for custom agents**: `model` field in agent frontmatter now accepts a list; CLI tries each in order until one is available. `model-policy: required` locks the agent to that list.
- **Claude Fable 5.1 support** added to the model catalogue.

**Improved**
- **Linux sandbox network egress restriction**: sandboxes now restrict outbound traffic to the configured proxy only, improving isolation.

[Release v1.0.83-3](https://github.com/github/copilot-cli/releases/tag/v1.0.83-3) · [Release v1.0.83-2](https://github.com/github/copilot-cli/releases/tag/v1.0.83-2)

---

## Hot Issues (Top 10 by Community Impact)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#3709](https://github.com/github/copilot-cli/issues/3709) | **Allow `/model` to switch between multiple models, including BYOK/local providers, in one session** | BYOK pins a session to a single model; `/model` picker only shows GitHub-hosted models. Blocks hybrid workflows (cloud + local). | 👍 29 · 7 comments — Highest engagement; clear demand for model-agnostic session switching. |
| [#2630](https://github.com/github/copilot-cli/issues/2630) | **Custom agent `mcp-servers` not connected in sub-agent or `--prompt` contexts** | MCP servers declared in agent YAML are ignored when agent is invoked as sub-agent (via `task` tool) or via `--prompt`. Breaks agent composability. | 👍 1 · 9 comments — Closed but signals architectural gap in agent delegation. |
| [#4664](https://github.com/github/copilot-cli/issues/4664) | **CLI crashes with JS heap OOM when resuming long-standing session** | Node/V8 hits ~4 GiB heap cap during session resume, before user can interact. Blocks long-running workflows. | 👍 0 · 5 comments — Critical reliability blocker; multiple similar OOM reports this week. |
| [#4525](https://github.com/github/copilot-cli/issues/4525) | **v1.0.81-1 sends legacy `initialize` after successful modern `server/discover`, causing -32022** | MCP init regression: dual-era handshake breaks compatibility with Python MCP SDK 2.0.0 stdio servers. | 👍 2 · 5 comments — Protocol-level bug affecting MCP ecosystem interop. |
| [#4695](https://github.com/github/copilot-cli/issues/4695) | **MCP OAuth tokens for HTTP servers not reliably reused across sessions** | Duplicate cache-key entries force repeated re-auth (PKCE flow), degrading UX for HTTP MCP servers. | 👍 0 · 4 comments — Fresh issue (created 2026-09-02), active triage. |
| [#4224](https://github.com/github/copilot-cli/issues/4224) | **OTel spans for subagent calls omit billing attributes** | Subagent model calls consume real AI credits but lack `github.copilot.nano_aiu`/`cost` attributes, breaking cost accounting. | 👍 1 · 4 comments — Enterprise observability gap; linked to #4207. |
| [#4438](https://github.com/github/copilot-cli/issues/4438) | **`disable-model-invocation: true` makes skill unreachable, not manual-only** | Skill with this flag disappears from model's `skill()` tool entirely (`Skill not found`), not just auto-invocation. | 👍 6 · 4 comments — Semantic mismatch between intent and behavior. |
| [#4680](https://github.com/github/copilot-cli/issues/4680) | **CLI sends wrong model ID (`gpt-5.4-nano`) to custom OpenAI-compatible endpoint** | Configured model name (e.g., `mimo-v2.5`) ignored; hardcoded ID sent instead, killing the session. | 👍 0 · 3 comments — BYOK regression; breaks custom provider workflows. |
| [#2861](https://github.com/github/copilot-cli/issues/2861) | **Compaction failed: empty response from model (3x retry, manual `/compact` on Opus 4.6)** | `/compact` command fails repeatedly with empty model response, stalling context management. | 👍 4 · 3 comments — Persistent compaction reliability issue. |
| [#4674](https://github.com/github/copilot-cli/issues/4674) | **Resuming a session does not restore the custom agent (regression of #917)** | Custom agent's `mcp-servers` and `tools` allow-list not reapplied on resume; session continues as default agent. | 👍 0 · 3 comments — Regression of previously fixed bug; breaks agent persistence. |

---

## Key PR Progress
**No pull requests updated in the last 24 hours.** All recent changes delivered via direct-to-main releases (v1.0.83-2, v1.0.83-3).

---

## Feature Request Trends (from all 37 issues)

1. **Multi-provider / BYOK model switching in-session** — Users want `/model` to list and switch to local/BYOK models, not just GitHub-hosted (#3709, #4703).
2. **Per-agent provider scoping** — `COPILOT_PROVIDER_BASE_URL` is process-wide; need per-agent endpoint configuration (#4703).
3. **Enterprise model parity** — CLI doesn't respect organization-managed default model (shows "not available" while VS Code/Desktop work) (#4692).
4. **Shell configuration on Windows** — Persistent request to configure default shell (bash vs PowerShell) (#2271, #4683, #4702).
5. **Skill discovery in ACP mode** — `skillDirectories` from `settings.json` ignored in `copilot --acp` (#4700).
6. **Agent plugin discovery** — Agent Plugins 1.0 custom agents under `com.github.copilot/agents` not discovered (#4655).
7. **Context tier control via ACP** — Expose `contextTier` as session config option for ACP clients (#4275).

---

## Developer Pain Points (Recurring Frustrations)

| Area | Pattern | Representative Issues |
|------|---------|----------------------|
| **Memory / Stability** | OOM crashes on long/resumed sessions; heap hits 4 GiB cap; crash dumps written to CWD; libuv handle leaks (31k+ handles) | #4664, #4686, #4699, #4694 |
| **MCP Reliability** | Servers fail to connect at startup (3 of 18); no retry; live handles destroyed mid-session (`NativeMcpHostHandle has been destroyed`); OAuth token cache thrashing; legacy/modern handshake mismatch | #4598, #4525, #4695, #4697 |
| **Agent / Session Persistence** | Custom agent not restored on resume (regression); `mcp-servers`/`tools` not reapplied; sub-agents don't inherit MCP config; `allow-all` mode resets after inactivity | #4674, #2630, #4696 |
| **Windows / Enterprise** | PowerShell ConstrainedLanguage mode spams `$host.SetShouldExit()` errors; path separator mismatch (`\` vs `/`) duplicates instruction files; permission preview truncates paths; enterprise default model not honored | #4683, #4702, #4701, #4692, #2271 |
| **Compaction / Context** | `/compact` fails with empty model response (multiple models); session context grows unbounded | #2861, #4698 |
| **Tooling / UX** | Clipboard broken in VS Code → WSL → tmux/screen; skill with `disable-model-invocation: true` becomes fully unreachable; wrong model ID sent to custom endpoints | #4191, #4438, #4680 |

---

*Digest generated from github.com/github/copilot-cli data as of 2026-09-03. All links point to live GitHub issues/releases.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-09-03

## 1. Today's Highlights
No new releases or pull requests in the last 24 hours. Five issues were closed today, all originally filed in early March 2026, indicating a maintenance sweep of stale enhancement requests and bug reports. The closed items cover SSH connectivity, undo functionality, Mermaid diagram rendering, OpenClaw-style agent features, and `--agent-file` parity for the web UI.

## 2. Releases
None.

## 3. Hot Issues
All five issues updated today are now **CLOSED**. They represent recurring community asks that have been resolved or declined.

| Issue | Type | Summary | Why It Matters | Community Reaction |
|-------|------|---------|----------------|-------------------|
| [#1293](https://github.com/MoonshotAI/kimi-cli/issues/1293) | Bug | **SSH communication failure** on headless servers without DNS control (v1.16.0) | Blocks remote/headless usage—a key developer workflow | 1 👍, 1 comment |
| [#1311](https://github.com/MoonshotAI/kimi-cli/issues/1311) | Enhancement | **Undo function** (like OpenCode) | Improves iterative coding safety; high user demand | 1 👍 |
| [#1310](https://github.com/MoonshotAI/kimi-cli/issues/1310) | Enhancement | **Inline Mermaid diagrams** in WebUI | Visualizes architecture/docs directly in chat; parsing already exists | 1 👍 |
| [#1309](https://github.com/MoonshotAI/kimi-cli/issues/1309) | Enhancement | **OpenClaw-like features**: heartbeat, cron, memories, nanobot integration | Brings autonomous agent capabilities to CLI/WebUI | 0 👍 |
| [#1307](https://github.com/MoonshotAI/kimi-cli/issues/1307) | Enhancement | **`--agent-file` for `kimi web`** (CLI parity) | Enables custom agent configs in WebUI; author already implemented a fix | 3 👍 |

## 4. Key PR Progress
No pull requests updated in the last 24 hours.

## 5. Feature Request Trends
From the closed issues, three clear directions emerge:
- **Agent extensibility** — Custom agent files (`--agent-file`), persistent memories, scheduled tasks (cron), and heartbeat monitoring.
- **Rich UI/UX** — Inline diagram rendering (Mermaid), undo/redo for safe exploration.
- **Remote/headless robustness** — SSH compatibility without DNS or GUI dependencies.

## 6. Developer Pain Points
| Pain Point | Evidence |
|------------|----------|
| **Remote/headless environments break CLI** | #1293: SSH servers without DNS/GUI cannot communicate |
| **No safety net for destructive edits** | #1311: Missing undo forces cautious/slow iteration |
| **WebUI lags behind CLI in configurability** | #1307: `--agent-file` missing from `kimi web` |
| **Limited autonomous agent primitives** | #1309: No built-in cron, memory, or heartbeat vs. Kimi Claw on web |
| **Diagram output requires external tools** | #1310: Mermaid parsing exists but not rendered inline |

---

*Data sourced from `github.com/MoonshotAI/kimi-cli` — Issues updated 2026-09-03.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-09-03

## 1. Today's Highlights
OpenCode shipped **v1.18.27** with critical timeout fixes for slow model startups and streamed chunks (both defaulting to 5 minutes). The community is heavily focused on **session lifecycle improvements** — the `/goal` feature request (#27167) has 140 upvotes and an example plugin PR (#46328) is now open. Meanwhile, a major PR (#46928) landed allowing agents to use lightweight models for simple turns, addressing a key performance bottleneck.

## 2. Releases
### v1.18.27
**Core bugfixes:**
- Default provider header timeouts → 5 minutes (reduces slow-model startup failures)
- Default streamed chunk timeouts → 5 minutes, with `false` to disable
- Anthropic `thinking.blockBinding` can now opt out via config  
🔗 [Release v1.18.27](https://github.com/anomalyco/opencode/releases/tag/v1.18.27)

## 3. Hot Issues (10 Noteworthy)

| Issue | Status | Why It Matters | Community Reaction |
|-------|--------|----------------|-------------------|
| [#27167](https://github.com/anomalyco/opencode/issues/27167) Add native session goals with `/goal` | OPEN | Highest-voted feature (140 👍); enables persistent session intent/lifecycle | 78 comments, strong demand for native goal tracking |
| [#46929](https://github.com/anomalyco/opencode/issues/46929) Allow agents to use small/fast model for lightweight turns | CLOSED | Addresses perf: every agent turn uses main model even for status/confirmations | Implemented via PR #46928 same day |
| [#32634](https://github.com/anomalyco/opencode/issues/32634) Hardcoded "continue or ask" in compaction prompt | OPEN | Forces autonomous continuation, causing resource-heavy actions | 3 comments, 2 👍; core autonomy control issue |
| [#46969](https://github.com/anomalyco/opencode/issues/46969) `history_previous` mixes prompt history across projects | OPEN | History leaks between unrelated projects; breaks project-scoped workflows | New, 1 comment; relates to closed #25811/#19536 |
| [#45823](https://github.com/anomalyco/opencode/issues/45823) Recursive JSON schema with houseCARL + Muse Spark 1.2 | OPEN | MCP + model compatibility break; blocks specific model/MCP combo | 2 comments; niche but blocks users |
| [#34971](https://github.com/anomalyco/opencode/issues/34971) v2: `experimental.policies` not enforced for model selection | CLOSED | Security/compliance gap: denied providers still selectable | 3 👍, 1 comment; policy enforcement critical for orgs |
| [#46807](https://github.com/anomalyco/opencode/issues/46807) `read` tool offset validation message misleading (says ≥0, schema requires >0) | OPEN | LLM hallucinates `offset: -1`; confusing error wastes cycles | New, 1 comment; DX papercut |
| [#35347](https://github.com/anomalyco/opencode/issues/35347) Explore tool results tree auto-expand + agent activity flow | CLOSED | UX: search results stay collapsed; no visual agent activity trace | 2 👍; UX polish for agent visibility |
| [#31592](https://github.com/anomalyco/opencode/issues/31592) Session title no longer auto-updates | CLOSED | Regression in v1.16.2; breaks OpenSpec workflow | 4 comments; title auto-update was expected behavior |
| [#35360](https://github.com/anomalyco/opencode/issues/35360) Web UI silent dead front-end when backend unreachable | CLOSED | No error banner/toast/spinner; send stays enabled despite disconnect | 1 comment; resilience/reliability gap |

## 4. Key PR Progress (10 Important)

| PR | Status | Description |
|----|--------|-------------|
| [#46928](https://github.com/anomalyco/opencode/pull/46928) | CLOSED | **feat(core): agents opt into small model for lightweight turns** — Uses `Catalog.model.small()` for status/confirmation turns; major perf win |
| [#46328](https://github.com/anomalyco/opencode/pull/46328) | OPEN | **feat(plugin): goal-loop example plugin** — Implements `/goal` & `/loop` via plugin SDK (no core changes); closes #27167 |
| [#46974](https://github.com/anomalyco/opencode/pull/46974) | OPEN | **fix: preserve revert consistency** — Prevents new prompt during undo save; fixes race in V2 sessions |
| [#42461](https://github.com/anomalyco/opencode/pull/42461) | OPEN | **fix: make revert boundaries chronological** — Truncates by timestamp position, not opaque IDs; handles ID rollover |
| [#46970](https://github.com/anomalyco/opencode/pull/46970) | OPEN | **fix: reuse current location for directory browsing** — Avoids booting new runtime per directory; keeps MCP servers stable |
| [#46973](https://github.com/anomalyco/opencode/pull/46973) | OPEN | **feat(app): experimental settings dedicated page** — Moves Tabs/Project names from Appearance → Experimental page |
| [#46530](https://github.com/anomalyco/opencode/pull/46530) | OPEN | **feat(plugin): expose permission assertions** — Adds `ctx.permission.assert()` for Effect/Promise plugins; enables browser tool URL checks |
| [#44838](https://github.com/anomalyco/opencode/pull/44838) | OPEN | **feat(desktop): browser pane via plugin RPC** — Adds Browser tab with address bar, nav controls; sandboxed Chromium |
| [#46531](https://github.com/anomalyco/opencode/pull/46531) | OPEN | **feat(browser): public-API browser plugin** — Experimental `browser` tool in `@opencode-ai/plugin-browser`; uses only public interfaces |
| [#46272](https://github.com/anomalyco/opencode/pull/46272) | OPEN | **fix: stop repeated identical tool call loops** — Halts after 10 consecutive same-tool/same-args calls; prevents infinite loops |

## 5. Feature Request Trends
From the issue corpus, three clear directions dominate:

1. **Session intent & lifecycle management** — `/goal` (#27167), `/loop` (plugin example #46328), history scoping (#46969). Users want persistent, project-aware session state.
2. **Model routing flexibility** — Small-model for lightweight turns (#46929 ✅), policy-enforced provider selection (#34971), per-turn model overrides. Cost/latency optimization is a top concern.
3. **Agent observability & control** — Explore tree auto-expand (#35347), timeline detail presets (#46717 ✅), execution failure visibility in TUI (#46968). Developers need to *see* and *steer* autonomous agents.

## 6. Developer Pain Points
Recurring frustrations surfacing in the last 24h:

- **Cross-project history leakage** (#46969) — Prompt history bleeds between unrelated projects; project scoping still not respected.
- **Misleading validation errors** (#46807) — Schema says `>0`, error says `≥0`; LLMs hallucinate `-1` and get confusing feedback.
- **Silent failures** (#35360, #46968) — Web UI shows no disconnect state; TUI shows no error when session fails before first message.
- **Windows-specific breakage** — Backslash paths (#35329), terminal title not restored (#35328), `Stop-Process -Name node` kills opencode (#35332), NSIS installer kills CLI (#35331). Multiple Windows issues closed but signal platform gaps.
- **MCP config fragility** (#35359) — Adding `environment`/`enabled` keys to MCP entries crashes *all* CLI commands with exit code 1, zero output.
- **Compaction prompt autonomy** (#32634) — Hardcoded "continue if you have next steps" drives uncontrolled agent loops; no config to adjust.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-09-03

## Today's Highlights
Critical provider integration bugs dominate today's activity: Gemini 3.x tool calls fail due to missing `thought_signature`, OpenRouter free models error on `max_tokens` limits, and Codex SSE parsing causes heap OOM. Architecturally, two major PRs landed—`AgentHarness` as the canonical recoverable runtime with opt-in capability policies, and a system prompt refactor enabling mid-turn updates. Windows path handling and streaming cancellation reliability remain persistent pain points.

---

## Releases
No new releases in the last 24 hours.

---

## Hot Issues

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| [#6996](https://github.com/earendil-works/pi/issues/6996) **Gemini 3.x tool use broken** — missing `thought_signature` in history breaks all tool flows on `gemini-3.5/3.6-flash`. | Blocks Gemini 3.x adoption; open since July with 8 comments. | 8 comments, ongoing investigation |
| [#8845](https://github.com/earendil-works/pi/issues/8845) **Branch summarization hardcodes `maxTokens: 2048`** — deterministic failure on large branches. | Core `/tree` feature broken for real-world repos; simple fix blocked by hardcoded constant. | 7 comments |
| [#6817](https://github.com/earendil-works/pi/issues/6817) **`find` tool fails on Windows with path patterns** (`src/**/*.ts`). | Windows path separator handling bug in `find.ts`; filename-only patterns work. | 6 comments, cross-platform blocker |
| [#8760](https://github.com/earendil-works/pi/issues/8760) **OpenRouter `:free` models reject `max_tokens`** — Pi sends catalog value exceeding provider limit. | Affects multiple free models; 400 errors on every request. | 4 comments |
| [#8643](https://github.com/earendil-works/pi/issues/8643) **Bedrock OpenAI models reject images in `toolResult.content`** — need hoisting like `openai-completions.ts`. | Image tool results broken on Bedrock; fix + test ready on fork. | 4 comments, 1 👍 |
| [#8706](https://github.com/earendil-works/pi/issues/8706) **ZAI forced-thinking models leak reasoning** when thinking toggled off. | `glm-5.3/5.3-flash` output polluted; `thinking: { type: "disabled" }` sent incorrectly. | 3 comments |
| [#6513](https://github.com/earendil-works/pi/issues/6513) **Codex cached WebSocket retains previous account** after credential change. | Session reuse routes requests to wrong OpenAI account; security/auth bug. | 3 comments |
| [#8823](https://github.com/earendil-works/pi/issues/8823) **Esc during streaming rarely cancels in-flight request** — abort registered but provider finishes naturally. | UX regression; users cannot reliably interrupt long generations. | 2 comments |
| [#9036](https://github.com/earendil-works/pi/issues/9036) **Codex SSE parser buffers entire response → heap OOM** (CLOSED, fixed in #9037). | Fatal V8 OOM on large Codex streams; unbounded string accumulation. | 1 comment, critical fix merged |
| [#9035](https://github.com/earendil-works/pi/issues/9035) **TUI crashes when extension tool returns bare string** instead of `AgentToolResult` (CLOSED). | Extension API passes un-normalized values; TypeError crashes process. | 1 comment, normalization fix needed |

---

## Key PR Progress

| PR | Status | Summary |
|----|--------|---------|
| [#9044](https://github.com/earendil-works/pi/pull/9044) | **CLOSED** | **`AgentHarness` as canonical recoverable runtime** — adds prompt/compact/abort/resume/lanes/watch lifecycle + opt-in `ToolPolicy` (tool/path/command/audit decisions). Composed into `Agent` without default behavior change. |
| [#8998](https://github.com/earendil-works/pi/pull/8998) | **OPEN** (draft) | **System prompt refactor** — enables partial/mid-conversation system prompt updates for extensions. Large architectural change to support dynamic tool/system changes without session wipe. |
| [#8383](https://github.com/earendil-works/pi/pull/8383) | **OPEN** | **Gemini 3.7-flash thinking disable fix** — sends `LOW` instead of `MINIMAL` (unsupported). Addresses 400 `INVALID_ARGUMENT` on thinking disable. |
| [#8994](https://github.com/earendil-works/pi/pull/8994) | **OPEN** | **Signal-killed processes → non-zero exit codes** — fixes OOM-killed bash tools appearing as success (`exitCode ?? 0` mapped `null` to 0). |
| [#9037](https://github.com/earendil-works/pi/pull/9037) | **CLOSED** | **Bounded, CRLF-aware Codex SSE parsing** — fixes #9036 OOM. Adds buffer limits, spec-compliant line ending handling, residual buffer drain. |
| [#8818](https://github.com/earendil-works/pi/pull/8818) | **CLOSED** | **Omit `tool_choice` when no tools sent** (xAI fix) — sends `tools: []` for Grok so compaction succeeds (was 400ing). |
| [#9041](https://github.com/earendil-works/pi/pull/9041) | **OPEN** | **Reject stale JSONL writes after `delete()`** — prevents headerless JSONL recreation via `NodeExecutionEnv.appendFile()` on deleted session. |
| [#9039](https://github.com/earendil-works/pi/pull/9039) | **CLOSED** | **`PI_DISABLE_MOUSE` env var** — opts out of fullscreen mouse tracking (`?1000/1002/1003` sequences). |
| [#9015](https://github.com/earendil-works/pi/pull/9015) | **CLOSED** | **Enable `reasoning_effort` for llama.cpp provider** — supports upstream PR #26045 (July 2026). |
| [#8990](https://github.com/earendil-works/pi/pull/8990) | **OPEN** | **Preserve compaction boundary when forking** — remaps boundaries pointing to removed labels, retains provider context, adds regression test. |

---

## Feature Request Trends
1. **Mid-turn system prompt mutations** — Multiple issues (#9046, #8998) and PRs demand first-class support for dynamic system prompt updates during a session, not just at init.
2. **Unified thinking/reasoning control** — Consistent `reasoningEffort`/`thinkingLevel` mapping across Gemini, ZAI, OpenAI, llama.cpp, vLLM; handling of "mapless" models (#9026).
3. **Extension/skill discovery determinism** — Filesystem-dependent `readdir` order causes non-reproducible loads (#9025); need stable sorting.
4. **Footer extensibility** — OpenCode Go quota (#9030), periodic shell commands (#9024), frameless/prompt-prefix editor options (#9032).
5. **Capability policy hooks** — Opt-in `ToolPolicy` for allow/deny decisions with audit events (#9043, implemented in #9044).
6. **Per-tool timeouts** — Agent-loop enforcement to prevent hung tools stalling entire runs (#9027).

---

## Developer Pain Points
- **Provider quirk fatigue**: Each provider (Gemini, OpenRouter, Bedrock, xAI, ZAI, Codex) has unique API deviations requiring bespoke fixes — `thought_signature`, `max_tokens` caps, image hoisting, `tool_choice` semantics, thinking formats, SSE parsing.
- **Windows path handling**: Recurring separator/glob issues in `find`, installation, and tool execution.
- **Streaming cancellation unreliability**: Esc key abort often doesn't kill HTTP request until provider finishes (#8823, #9022).
- **Session lifecycle edge cases**: Deleted sessions accepting writes (#9038), forked sessions losing compaction boundaries (#8990), compaction interleaving with prompts (#8301).
- **Extension tool contract fragility**: Bare string returns crash TUI (#9035); WebSocket credential leakage (#6513).
- **Memory safety on large streams**: Unbounded buffering in Codex SSE parser (#9036) and likely elsewhere.

---

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-09-03

---

## 1. Today's Highlights

The OpenTUI migration (#8662) continues its phased rollout with batch 4 landing in the latest release (`live-host-v0.2.0`), signaling steady progress on the terminal UX overhaul. CI infrastructure received multiple hardening fixes: retry logic for contended unit tests (#10868), timeout ceilings for shared ECS runners (#10858, #10870), and a new lightweight ECS lane for fast jobs (#10575). A new performance issue (#10865) identifies triple derivation of session workflow projections in the web shell, a follow-up to recent optimization work.

---

## 2. Releases

### `live-host-v0.2.0` — Qwen Live Host v0.2.0
- **Key changes**: CI fix making shared ECS Vitest concurrency tunable (#10667); OpenTUI migration batch 4 merged.
- **Notes**: Part of the ongoing TUI renderer migration from Ink to OpenTUI (tracking issue #8662).
- **Link**: [Release page](https://github.com/QwenLM/qwen-code/releases/tag/live-host-v0.2.0)

---

## 3. Hot Issues (Top 10 by Impact & Activity)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#8662](https://github.com/QwenLM/qwen-code/issues/8662) | **Migrate TUI rendering from Ink to OpenTUI** (tracking) | Core UX overhaul; addresses flicker, input latency, and renderer patches (~1K lines). Batch 4 just released. | 24 comments, P3 priority, active since Aug 7 |
| [#10865](https://github.com/QwenLM/qwen-code/issues/10865) | **perf(web-shell): session workflow projection derived 3× per render** | Redundant index rebuilds on every render; direct follow-up to #8583/#8389. | New, P2, ready for agent |
| [#10872](https://github.com/QwenLM/qwen-code/issues/10872) | **Pluggable middleware for language-aware thinking rewrite** | Enables translation/filtering of reasoning output for CLI & `qwen serve`; extensibility hook. | New feature request, needs triage |
| [#7167](https://github.com/QwenLM/qwen-code/issues/7167) | **Fleet Shepherd Dashboard** (bot-maintained) | Auto-sync dashboard for bot fleet health; last tick shows 0 syncs/dispatches. | Bot-maintained, updated today |
| [#10864](https://github.com/QwenLM/qwen-code/issues/10864) | **Main CI failed on commit 2a42805** | Pre-test failure on main branch; auto-tracked per commit. | Closed, bot-created |
| *Remaining 5 issues* | Lower-priority or bot-maintenance items | See [full list](https://github.com/QwenLM/qwen-code/issues?q=updated%3A%3E2026-09-02) | — |

> **Note**: Only 5 issues updated in last 24h; the table above covers all.

---

## 4. Key PR Progress (Top 10 by Significance)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#10667](https://github.com/QwenLM/qwen-code/pull/10667) | **fix(ci)** | Make shared ECS Vitest concurrency tunable (in v0.2.0) |
| [#10868](https://github.com/QwenLM/qwen-code/pull/10868) | **fix(ci)** | Retry contended unit attempts; add step timeout; split `test:ci` for retry flag propagation |
| [#10858](https://github.com/QwenLM/qwen-code/pull/10858) | **fix(ci)** | Raise scripts test suite timeout on shared ECS; remove shadowed per-test ceilings |
| [#10870](https://github.com/QwenLM/qwen-code/pull/10870) | **test** | Skip ms-budget assertions on shared ECS pool via `expectWithinLatencyBudget` helper |
| [#10575](https://github.com/QwenLM/qwen-code/pull/10575) | **ci** | Move 8 sub-second jobs to new `ecs-light` lane (median 12s–2m) |
| [#10756](https://github.com/QwenLM/qwen-code/pull/10756) | **ci** | Split lint/static checks into separate `lint_and_static` job |
| [#10723](https://github.com/QwenLM/qwen-code/pull/10723) | **feat(skills)** | Add built-in **zvec-grep (zg)** installer — local lexical+semantic code search via MCP |
| [#10837](https://github.com/QwenLM/qwen-code/pull/10837) | **feat(serve)** | Add `GET /session/:id/resources` — capability-gated catalog of Skill/MCP snapshots |
| [#10643](https://github.com/QwenLM/qwen-code/pull/10643) | **feat(channels)** | Opt-in Git worktree isolation for named Channel tasks (`/session new --worktree`) |
| [#10687](https://github.com/QwenLM/qwen-code/pull/10687) | **fix(cli)** | Guard channel pidfiles against PID reuse with Linux process-start token |

---

## 5. Feature Request Trends

1. **TUI Modernization** — OpenTUI migration (#8662) is the largest active UX investment; batches ship incrementally.
2. **Daemon/Server Extensibility** — Session resource catalog (#10837), worktree-isolated tasks (#10643), and thinking-output middleware (#10872) point toward a programmable `qwen serve` surface.
3. **MCP & Skill Ecosystem** — Bundled zvec-grep skill (#10723) shows momentum for first-party MCP tooling.
4. **CI/CD Observability** — Disk-pressure sampling with host occupancy (#10869), timeout budgets (#10870), and lane splitting (#10575) reflect investment in self-hosted runner telemetry.

---

## 6. Developer Pain Points

| Pain Point | Evidence |
|------------|----------|
| **Flaky/slow CI on shared ECS** | Multiple PRs adding retries (#10868), timeouts (#10870, #10858), and dedicated light lane (#10575) |
| **TUI rendering artifacts** | 1K-line Ink patch set; flicker/input issues driving OpenTUI rewrite (#8662) |
| **Web-shell render performance** | Triple projection derivation per render (#10865) despite recent optimization |
| **PID reuse in daemon pidfiles** | Fixed in #10687 — indicates real-world collisions on long-running hosts |
| **Review workflow cancellation on push** | #10123 salvages superseded runs instead of cancelling |

---

*Generated from GitHub data as of 2026-09-03. Links point to live items on github.com/QwenLM/qwen-code.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) Community Digest — 2026-09-03

---

## 1. Today's Highlights

The project is in full **v0.9.12 release integration mode**, with PR #5862 merging 10 UX slices (workbar rename, underwater theme default, fleet vocabulary, provider-neutral branding, hover contracts, retro theme). Simultaneously, the **IDE program** ratified on 2026-09-02 advances: Daytona is being removed in favor of AWS Lambda microVMs (#5836, #5837), ACP server work continues (#5835), and a VS Code fork is anointed as the canonical desktop app (#5838). Provider-neutrality cleanup (#5588 → #5832) and mega-file decomposition (#5586) remain critical path items.

---

## 2. Releases

**No new releases in the last 24h.** v0.9.12 is actively being assembled via integration PR #5862 and milestone tracker #5573.

---

## 3. Hot Issues (Top 10 by Impact & Activity)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#5573](https://github.com/Hmbown/Codewhale/issues/5573) | **v0.9.12 milestone tracker** | Central coordination issue for the release; tracks operator handoff, slice table, gates, and PR/reinstall/self-test steps. 23 comments show active daily coordination. | 🔥 23 comments, updated 2026-09-02 |
| [#5316](https://github.com/Hmbown/Codewhale/issues/5316) | **EPIC-005: TUI Crate Decomposition** | Umbrella epic for breaking the monolithic `tui` crate; every sub-epic and feat reports here. Foundational for maintainability. | 21 comments, long-running epic |
| [#5586](https://github.com/Hmbown/Codewhale/issues/5586) | **Decompose mega files (lib.rs 18.7k, config.rs 12.3k, client.rs 11.1k, runtime_threads.rs 9.3k)** | Directly addresses developer pain: 10k+ line files cause review/merge conflicts and cognitive overload. Part of 0.9.12 cleanup lane. | 6 comments, high technical priority |
| [#5588](https://github.com/Hmbown/Codewhale/issues/5588) | **Provider neutrality: 18 DeepSeek-exclusive gates** | Audit found 380 naming-compat issues; 18 gates where behavior is DeepSeek-gated but should be provider-neutral. Fixed in PR #5832. | 7 comments, **CLOSED** via #5832 |
| [#5836](https://github.com/Hmbown/Codewhale/issues/5836) | **Remove Daytona; cloud dispatch → Lambda microVM** | Founder direction (2026-09-02): Daytona removed product-wide; AWS Lambda microVMs are the single managed Computer substrate. | 0 comments, strategic pivot |
| [#5838](https://github.com/Hmbown/Codewhale/issues/5838) | **EPIC: Codewhale Studio — VS Code fork as canonical desktop** | Stage 3 of ratified IDE program: VS Code fork replaces thin Tauri shell. Program anchor for downstream work. | 0 comments, strategic |
| [#5533](https://github.com/Hmbown/Codewhale/issues/5533) | **Per-session control socket for supervised operation** | Enables external supervisors (tmux, CI, automation) to message/interrupt/relaunch/status via Unix JSON-RPC socket. Landed in #5831. | 5 comments, **CLOSED** via #5831 |
| [#5860](https://github.com/Hmbown/Codewhale/issues/5860) | **Continuous Self-Learning from Dialog (Automatic Skill Evolution)** | Proposes automatic pattern extraction from repeated problem-solving → dynamic `SKILL.md` generation. Long-term AI-native vision. | 1 comment, forward-looking |
| [#5830](https://github.com/Hmbown/Codewhale/issues/5830) | **Zvec / zg backend for semantic codebase_search** | Integrates Alibaba's open-source in-process vector DB (zvec) + zg CLI for local-first ripgrep+BM25+vector search via MCP. | 0 comments, infra modernization |
| [#5847](https://github.com/Hmbown/Codewhale/issues/5847) | **Replace XOR thinking-collapse logic with intent-based expand/collapse** | Fixes a triple-XOR bug where `verbose ON + default-expanded ON` incorrectly renders collapsed. Half-fixed in #5857. | 0 comments, UX correctness |

---

## 4. Key PR Progress (Top 10 by Significance)

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#5862](https://github.com/Hmbown/Codewhale/pull/5862) | **OPEN** | **0.9.12 Fleet-only UX mega-PR**: integrates 10 slices (hover contract, workbar rename, underwater default, provider-neutral branding, settings regroup, logo, hover, roles, retro theme). Release blocker. |
| [#5832](https://github.com/Hmbown/Codewhale/pull/5832) | **CLOSED** | **Provider neutrality gates** (#5588): removes remaining-credit lookup coupling, un-gates ghost-text suggestions, dispatches provider-agnostic logic. |
| [#5831](https://github.com/Hmbown/Codewhale/pull/5831) | **CLOSED** | **Per-session control socket** (#5533): Unix JSON-RPC at `<sessions-dir>/<id>/control.sock` with `message`/`interrupt`/`relaunch`/`status` verbs. |
| [#5858](https://github.com/Hmbown/Codewhale/pull/5858) | **OPEN** | **Collapse `ocean_treatment` into `ThemeId::Underwater`**: 11 commits for locale, mark assets, config migration, picker repaint, abyss test. |
| [#5833](https://github.com/Hmbown/Codewhale/pull/5833) | **OPEN** | **FEAT-019 Memory capability**: adds `CommandCapabilities::MEMORY`, `CommandMemoryContext` facet, TUI adapter with typed outcomes (search/remember/get/export/reindex/delete). |
| [#5829](https://github.com/Hmbown/Codewhale/pull/5829) | **CLOSED** | **FEAT-022 Skills command shapes**: ports `/skills`, `/skill`, `/review`, `/restore` to portable contextual dispatch with retained-host validation. |
| [#5840](https://github.com/Hmbown/Codewhale/pull/5840) | **CLOSED** | **Runtime: persist tool-call identity** (#5823): fixes 400 "missing field name" on thread restart with tool-call history. |
| [#5843](https://github.com/Hmbown/Codewhale/pull/5843) | **OPEN** | **Align typed config & schema with live value spaces**: typed theme carries custom themes, orphaned locale keys dropped, dead-code PASS at 425. |
| [#5855](https://github.com/Hmbown/Codewhale/pull/5855) | **OPEN** | **Computer-use plugin bundle**: screenshot/click/type over MCP; 9/9 server protocol tests pass; live 1920px JPEG captured on macOS. |
| [#5842](https://github.com/Hmbown/Codewhale/pull/5842) | **OPEN** | **Runtime API: plugin + marketplace management over `/v1/apps`** (engine side); app side to follow. Gated local plugin system. |

---

## 5. Feature Request Trends (Distilled from All Issues)

| Trend | Evidence | Priority Signal |
|-------|----------|-----------------|
| **IDE-native integration** | #5835 (ACP server), #5834 (VS Code extension upgrade), #5838 (VS Code fork), #5837 (microVM + openvscode-server) | 🔥 Strategic — founder-ratified 2026-09-02 |
| **Provider-agnostic architecture** | #5588 (18 gates), #5443 (retire DeepSeek-era identifiers), #5849 (live catalog model resolution), #5848 (Ollama default from catalog) | 🔥 High — active cleanup in 0.9.12 |
| **Computer-use / agentic automation** | #5856 (computer-use plugin live-install), #5836 (Lambda microVM), #5837 (microVM rootfs + sidecar), #5830 (zvec semantic search) | 🔥 High — new plugin boundary, cloud substrate pivot |
| **Self-improving agent loops** | #5860 (auto skill evolution from dialog), #5852 (workflow-mode hardening), #5847 (thinking collapse intent) | 📈 Emerging — AI-native UX differentiation |
| **TUI shell polish & theming** | #5862 (fleet UX), #5858 (underwater collapse), #5857 (thinking fold), #5859 (copy warmth), #5861 (canonical whale on auth) | ✅ Ongoing — 0.9.12 release focus |
| **Configuration & schema hygiene** | #5843 (typed config alignment), #5844 (delete AppMode pretenders), #5443 (tiered migration), #5841 (retire DEEPSEEK_YOLO) | ✅ Ongoing — tech debt reduction |
| **Supervised/headless operation** | #5533 (control socket), #5637 (MCP secret providers scoped to runtime), #5845 (Meta device-code login) | 📈 Growing — enterprise/CI demand |
| **Voice & multimodal input** | #5846 (on-device STT + API fallback + keybinding + animation) | 🌱 Early — follows thinking-block interaction pattern |

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Frequency & Evidence | Impact |
|------------|---------------------|--------|
| **Mega-files blocking velocity** | #5586 explicitly calls out 4 files >10k lines (lib.rs 18.7k, config.rs 12.3k, client.rs 11.1k, runtime_threads.rs 9.3k) causing "pain"; #5316 epic tracks decomposition | High — merge conflicts, review latency, onboarding barrier |
| **DeepSeek-coupled logic leaking into provider layer** | #5588: 380 naming-compat issues, 18 suspect gates; #5443: tiered migration needed for DEEPSEEK_* identifiers | High — blocks multi-provider credibility |
| **No single source of truth for fleet/subagent roles** | #5575: role posture defined in 5+ places (worker_profile, verifier, etc.), drifted multiple times; verifier contradiction was symptom | Medium — subtle bugs, inconsistent behavior |
| **Destructive TTL cleanup without verification** | #5824: lane TTL trusts persisted `worktree_path`, can recursively delete unverified paths; fixed in #5854 | Critical — data loss risk |
| **Thread restart breaks tool-call history serialization** | #5823: `serve --http` threads with tool-call history fail with 400 after runtime restart; fixed in #5840 | High — breaks HTTP server reliability |
| **Stale ACP / IDE integration docs** | #5835: `RUNTIME_API.md` ACP docs stale; #5834: VS Code extension is a scaffold | Medium — blocks IDE adoption |
| **Thinking-block interaction bug (XOR logic)** | #5847: triple-XOR inverts intent (verbose ON + default-expanded ON = collapsed); half-fixed in #5857 | Medium — UX confusion |
| **No keyboard path for thinking-block expand** | #5847 / #5846: `ReasoningAction::Expand` is mouse-only; voice input should follow same inline pattern | Medium — accessibility gap |
| **Daytona dependency on cloud substrate** | #5836: Daytona removed by founder direction; migration to Lambda microVMs required across engine + apps | High — strategic technical debt |

---

*Digest generated from GitHub data (Hmbown/Codewhale) as of 2026-09-03. Links point to live issues/PRs.*

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*