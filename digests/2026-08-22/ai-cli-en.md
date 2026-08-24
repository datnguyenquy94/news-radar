# AI CLI Tools Community Digest 2026-08-22

> Generated: 2026-08-22 01:39 UTC | Tools covered: 10

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

# Cross-Tool AI CLI Ecosystem Comparison — 2026-08-22

---

## 1. Ecosystem Overview

The AI CLI landscape is bifurcating into **enterprise-grade platforms** (Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI) shipping daily releases with compliance, sandboxing, and remote-operation features, and **specialized/emerging tools** (OpenCode, Qwen Code, DeepSeek TUI, Pi, Kimi) iterating rapidly on agent orchestration, review automation, and terminal-native UX. Windows desktop reliability remains a systemic weak spot across 6/10 tools.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (as of 2026-08-22)

---

## 1. Top Skills Ranking — Most-Discussed PRs

| Rank | PR | Skill / Focus | Functionality | Discussion Highlights | Status |
|------|-----|---------------|---------------|----------------------|--------|
| 1 | [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator: run_eval.py fix** | Fixes `run_eval.py` reporting 0% recall for all skill descriptions; addresses Windows stream reading, trigger detection, and parallel workers. Core infrastructure for skill evaluation loop. | Referenced in [Issue #556](https://github.com/anthropics/skills/issues/556) (12 comments, 7👍) — "no query ever triggers the skill"; 10+ independent reproductions. Blocks description-optimization loop. | **Open** (updated 2026-06-23) |
| 2 | [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | Prevents orphan/widow lines, widow paragraphs, numbering misalignment in AI-generated documents. Triggers on any document generation request. | Addresses universal pain point: "users rarely ask for good typography but always notice bad typography." | **Open** (updated 2026-03-13) |
| 3 | [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit** | Mechanical file verification + four-dimension reasoning audit (damage-severity priority). Universal — any project, any stack, any model. | Tied to [Issue #1385](https://github.com/anthropics/skills/issues/1385) (4 comments, 1👍) proposing a three-gate quality pipeline. Novel meta-skill for output quality. | **Open** (updated 2026-07-02) |
| 4 | [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | Comprehensive testing skill: Testing Trophy model, AAA pattern, React Testing Library, contract testing, E2E, property-based, mutation testing, CI integration. | Broad coverage of modern testing stack; addresses gap in repository for dedicated testing guidance. | **Open** (updated 2026-04-21) |
| 5 | [#568](https://github.com/anthropics/skills/pull/568) | **servicenow** | Enterprise ServiceNow platform skill: ITSM, ITOM, ITAM/SAM, FSM, HRSD, SPM, SecOps, IntegrationHub. Broad platform assistant, not narrow scripting helper. | Long-lived PR (created Mar, updated Aug 12); reflects enterprise demand for platform-specific skills. | **Open** (updated 2026-08-12) |
| 6 | [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer / skill-security-analyzer** | Meta-skills for evaluating other skills across 5 dimensions (structure, examples, resources, triggers, security). Security analyzer checks for injection, secrets, permissions. | Addresses [Issue #202](https://github.com/anthropics/skills/issues/202) (8 comments) about skill-creator best practices. Foundation for skill governance. | **Open** (updated 2026-01-07) |
| 7 | [#486](https://github.com/anthropics/skills/pull/486) | **odt** | OpenDocument (.odt/.ods) creation, template filling, parsing to HTML. Triggers on ODT/ODS/ODF/LibreOffice mentions. | Open-standard document format support; complements existing docx/pdf skills. | **Open** (updated 2026-04-14) |
| 8 | [#525](https://github.com/anthropics/skills/pull/525) | **pyxel** | Retro/pixel-art/8-bit game development via [pyxel-mcp](https://github.com/kitao/pyxel-mcp). Workflow: write → run_and_capture → inspect → iterate. | Niche but active (updated Jul 15); demonstrates MCP-integrated skill pattern. | **Open** (updated 2026-07-15) |

> **Note:** PR comment counts show as `undefined` in source data; ranking inferred from Issue cross-references, recency, update frequency, and strategic importance to the ecosystem.

---

## 2. Community Demand Trends (from Issues)

| Trend | Evidence | Demand Signal |
|-------|----------|---------------|
| **Trust & Namespace Security** | [#492](https://github.com/anthropics/skills/issues/492) (43 comments, 2👍) — Community skills distributed under `anthropic/` namespace impersonate official skills, enabling trust boundary abuse. | **Critical** — Highest engagement issue; demands namespace governance. |
| **Organizational Skill Sharing** | [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8👍) — No org-wide sharing; manual download/upload via Slack/Teams. | **High** — Workflow friction for teams; 8👍 indicates strong latent demand. |
| **Evaluation Infrastructure Reliability** | [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 7👍) — `run_eval.py` never triggers skills (0% trigger rate); blocks skill-creator optimization loop. | **High** — Core tooling broken; 7👍 on bug report. |
| **Duplicate Skill Installation** | [#189](https://github.com/anthropics/skills/issues/189) (6 comments, 9👍) — `document-skills` and `example-skills` plugins install identical content, causing duplicates. | **High** — 9👍; packaging/distribution bug affecting all users. |
| **Context Window Management** | [#1487](https://github.com/anthropics/skills/issues/1487) (4 comments) — `claude-api` skill injects ~156k tokens in one call, exhausting context. | **Emerging** — Token efficiency becoming a skill-design constraint. |
| **MCP Integration** | [#16](https://github.com/anthropics/skills/issues/16) (4 comments) — Request to expose Skills as MCPs for standardized APIs. | **Strategic** — Aligns with broader MCP ecosystem momentum. |
| **Agent Governance / Safety** | [#412](https://github.com/anthropics/skills/issues/412) (6 comments, closed) — Proposal for policy enforcement, threat detection, trust scoring, audit trails. | **Growing** — Safety/governance meta-skills requested. |
| **Compact Memory / State Management** | [#1329](https://github.com/anthropics/skills/issues/1329) (9 comments) — Symbolic notation for compact agent state to reduce context usage. | **Niche but active** — Long-running agent optimization. |

---

## 3. High-Potential Pending Skills (Active PRs Likely to Land)

| PR | Skill | Why It Has Momentum |
|------|-------|---------------------|
| [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator evaluation fix** | Blocks core skill development loop; 10+ reproductions; referenced in high-engagement Issue #556. |
| [#1099](https://github.com/anthropics/skills/pull/1099) / [#1050](https://github.com/anthropics/skills/pull/1050) | **Windows compatibility for skill-creator** | Two independent PRs fixing same Windows subprocess/encoding bugs; practical blocker for Windows contributors. |
| [#538](https://github.com/anthropics/skills/pull/538) | **PDF skill case-sensitivity fix** | Trivial 8-line fix; breaks on case-sensitive filesystems; low-risk, high-value. |
| [#541](https://github.com/anthropics/skills/pull/541) | **DOCX tracked-change ID collision fix** | Prevents document corruption; root cause identified (shared `w:id` space); targeted fix. |
| [#539](https://github.com/anthropics/skills/pull/539) | **YAML description validation** | Prevents silent parsing failures; early detection in `quick_validate.py`; improves author DX. |
| [#1538](https://github.com/anthropics/skills/pull/1538) | **Spec compliance for template skills** | Two skills fail `skills-ref validate`; this repo is the reference implementation — spec compliance is foundational. |
| [#509](https://github.com/anthropics/skills/pull/509) | **CONTRIBUTING.md** | Closes [#452](https://github.com/anthropics/skills/issues/452); repo scores 25% on GitHub community health; single highest-impact doc addition. |
| [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit** | Novel quality-gate meta-skill; aligns with Issue #1385 pipeline proposal; universal applicability. |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for *reliable skill authoring infrastructure* (evaluation, validation, Windows support, spec compliance) and *trust/governance primitives* (namespace security, org sharing, quality analyzers) — not new domain skills. Contributors are blocked by broken tooling and safety gaps before they can effectively ship domain expertise.**

---

# Claude Code Community Digest — 2026-08-22

---

## 1. Today's Highlights

- **v2.1.239 released**: Cost estimates now factor the 1.1× US-only-inference premium for data-residency workspaces; first-time fullscreen renderer offer extended to Bedrock, Vertex, Foundry, and other previously excluded setups.  
- **Safety-filter false positives dominate discussion**: Multiple reports of Fable 5 / Opus 5 safeguards halting authorized security, drone, and automation work—some sessions silently downgraded to older models.  
- **Windows desktop stability remains a top pain point**: Orphaned process locks preventing relaunch (128 comments) and Cowork folder-mount regressions persist.

---

## 2. Releases

| Version | Key Changes |
|---------|-------------|
| **v2.1.239** | • Cost estimates (`/cost`, status line, `--max-budget-usd`) now include the 1.1× US-only-inference premium for data-residency workspaces.<br>• One-time fullscreen renderer offer added for Bedrock, Vertex, Foundry, and other previously excluded setups; new installs there now start in fullscreen. |

[Release notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.239)

---

## 3. Hot Issues (Top 10 by Community Impact)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#84352](https://github.com/anthropics/claude-code/issues/84352) | **CVP-approved org still receives cyber safeguard blocks** | Verified organizations are being blocked despite prior approval; portal shows “Under review.” | 133 comments, 21 👍 |
| [#42776](https://github.com/anthropics/claude-code/issues/42776) | **Windows Desktop fails to relaunch due to orphaned process file lock** | Long-standing blocker for Windows users; requires manual cleanup every restart. | 128 comments, 63 👍 |
| [#19649](https://github.com/anthropics/claude-code/issues/19649) | **Model overuses Bash tools (sed/grep) instead of built-in Read/Grep/Edit** | Reduces reliability and portability; model ignores purpose-built tools. | 45 comments, 101 👍 |
| [#62699](https://github.com/anthropics/claude-code/issues/62699) | **Cannot copy text from output via `Ctrl+Shift+C` or right-click** | Basic terminal UX broken; impacts accessibility and workflow efficiency. | 41 comments, 67 👍 |
| [#24968](https://github.com/anthropics/claude-code/issues/24968) | **Accessibility: turn-duration verbs not customizable** | Screen-reader users cannot adjust verbose timing announcements. | 17 comments, 58 👍 |
| [#76187](https://github.com/anthropics/claude-code/issues/76187) | **Cowork (Windows): project context folders never mount in new sessions** | Regression since July 8 update; nested folders silently detach mid-session. | 12 comments, 1 👍 |
| [#52517](https://github.com/anthropics/claude-code/issues/52517) | **Mermaid code blocks not rendered in Claude Code tab (Desktop)** | GUI users lose diagram rendering that works in terminal TUI. | 9 comments, 17 👍 |
| [#77830](https://github.com/anthropics/claude-code/issues/77830) | **`Claude-Session:` commit trailer ignores `attribution: {commit: ""}` setting** | Explicit opt-out setting is disregarded; trailer injected via Bash tool description. | 9 comments, 1 👍 |
| [#82967](https://github.com/anthropics/claude-code/issues/82967) | **GPU process crashes (UnknownVizError) when using Browser tools** | Deterministic crash corrupts app package, forcing full reinstall. | 9 comments, 1 👍 |
| [#88041](https://github.com/anthropics/claude-code/issues/88041) | **Auto-mode “bashFirst” prompt instructs sed/heredoc instead of Edit/Write tools** | Hard-coded system prompt bypasses safer built-in file tools. | 5 comments, 6 👍 |

---

## 4. Key PR Progress

> **No pull requests updated in the last 24 hours.**

---

## 5. Feature Request Trends

| Theme | Representative Issues | Signal |
|-------|----------------------|--------|
| **Accessibility & UX polish** | [#24968](https://github.com/anthropics/claude-code/issues/24968) (customizable turn verbs), [#62699](https://github.com/anthropics/claude-code/issues/62699) (copy/paste) | 125+ combined 👍 |
| **Model tooling discipline** | [#19649](https://github.com/anthropics/claude-code/issues/19649) (prefer built-ins over Bash), [#88041](https://github.com/anthropics/claude-code/issues/88041) (auto-mode prompt) | 107 combined 👍 |
| **Desktop parity with terminal** | [#52517](https://github.com/anthropics/claude-code/issues/52517) (Mermaid rendering), [#86617](https://github.com/anthropics/claude-code/issues/86617)/[#86838](https://github.com/anthropics/claude-code/issues/86838) (PR badges) | Steady upvotes |
| **Permissions & settings fidelity** | [#77830](https://github.com/anthropics/claude-code/issues/77830) (attribution), [#86858](https://github.com/anthropics/claude-code/issues/86858) (Android remote-control bypass) | Growing frustration |

---

## 6. Developer Pain Points

1. **Safety-filter false positives** – Cluster of 10+ closed AUP issues ([#73213–#73228](https://github.com/anthropics/claude-code/issues?q=label%3Aaup)) and new reports ([#84353](https://github.com/anthropics/claude-code/issues/84353)) show Fable 5 / Opus 5 blocking legitimate security, drone, and automation work, sometimes silently downgrading models.  
2. **Windows desktop reliability** – Orphaned process locks (#42776, 5+ months open) and Cowork folder-mount regression (#76187) make Windows a second-class platform.  
3. **Settings not honored** – Attribution trailer (#77830), `bypassPermissions` on Android (#86858), and auto-mode prompts (#88041) ignore explicit user configuration.  
4. **Desktop app stability** – GPU crashes corrupting the Electron package (#82967) and UI regressions after updates (#86617, #86838) erode trust in the GUI.  
5. **Terminal UX gaps** – Copy/paste broken (#62699), no Mermaid in Desktop tab (#52517), and verbose accessibility announcements (#24968) hinder daily workflows.

---

*Generated from `anthropics/claude-code` GitHub data as of 2026-08-22 00:00 UTC.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-22

---

## 1. Today's Highlights

The past 24 hours show a **cluster of critical regressions on Windows** — WSL Git detection broken since v26.721.3404, Android Remote Control failing to load conversations across multiple versions, and a login loop blocking desktop access. Simultaneously, the Rust CLI is iterating rapidly through the 0.150.0-alpha series (six releases in 24h) with heavy focus on **Guardian V2 sandbox approvals, executor stop hooks, and browser/computer-use policy plumbing**. The PR velocity suggests a push to stabilize remote session recovery and granular permission handling before a broader release.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| `rust-v0.150.0-alpha.6` → `alpha.2` | Alpha (CLI) | Six alpha cuts in 24h; incremental fixes toward 0.150.0. No changelogs published — likely Guardian V2, sandbox, and remote-session work (see PRs below). |
| `rust-v0.149.0-alpha.7.1`, `alpha.4.1` | Alpha (CLI) | Patch releases on the 0.149 branch; bundled in recent Windows desktop builds (e.g., `26.818.31338`). |

> **Note:** Desktop app versions (`26.818.x`, `26.814.x`) are Microsoft Store packages; the embedded CLI version is the actionable signal for developers.

---

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#35119](https://github.com/openai/codex/issues/35119) | **WSL repos marked non-Git / "Git unavailable" on Windows 26.721.3404** | Blocks all WSL2 workflows; regression from `26.715.10079`. Affects core developer loop. | 24 comments, 17 👍 — high urgency |
| [#33493](https://github.com/openai/codex/issues/33493) | **Local compaction v2 retains unbounded `input_image` payloads → repeated auto-compaction** | Memory/performance leak in image-heavy sessions; affects desktop stability. | 22 comments, 6 👍 |
| [#39815](https://github.com/openai/codex/issues/39815) | **Android Remote pairs but conversations fail; `/wham/tasks/list` 503** | Remote Control unusable on Android → Windows host; worked previously. | 13 comments, 3 👍 |
| [#39856](https://github.com/openai/codex/issues/39856) | **QR pairing succeeds but `nextConnectionCount=0` on 26.818.31338** | Session establishment fails post-pairing; same root as #39815? | 9 comments |
| [#39954](https://github.com/openai/codex/issues/39954) | **Windows + Android Remote: reconnect loop after initialize/thread-list** | Stale "server already online" → now reconnect loop; Remote Control broken. | 9 comments |
| [#39947](https://github.com/openai/codex/issues/39947) | **Android Remote unusable: host appears disconnected, long tasks won't open** | Duplicate symptom cluster; confirms systemic Remote regression. | 9 comments, 3 👍 |
| [#39974](https://github.com/openai/codex/issues/39974) | **Remote Control unstable across Android & iOS; Windows desktop works** | Cross-platform mobile failure; isolates issue to host↔mobile protocol. | 8 comments |
| [#34764](https://github.com/openai/codex/issues/34764) | **Computer Use fails: protected files fail copy from WindowsApps** | Blocks Computer Use on Windows; runtime relocation broken. | 7 comments, 1 👍 |
| [#35718](https://github.com/openai/codex/issues/35718) | **NUL-filled `.sandbox/deny_read_acl_state.json` breaks sandbox permanently; survives reinstall** | Corrupt state file in `CODEX_HOME` bricks sandbox; "Windows setup didn't finish" screen. | 6 comments |
| [#40029](https://github.com/openai/codex/issues/40029) | **Infinite sign-in loop: app never receives chatgpt.com session cookie → 401** | Complete auth break on macOS 26.6.1; backend calls fail with missing biscuit. | 2 comments |

> **Pattern:** Windows + Remote (Android/iOS) is the dominant failure domain. WSL, sandbox state corruption, and auth loops are secondary but high-severity.

---

## 4. Key PR Progress (Top 10 by Technical Significance)

| # | PR | Summary | Area |
|---|----|---------|------|
| [#40038](https://github.com/openai/codex/pull/40038) | **Add unfinished root turn suspension** | `CodexThread::suspend_turn_and_shutdown` + `SuspendTurnOutcome` — enables runtime recovery of active turns without marking complete/aborted. | Session recovery |
| [#40031](https://github.com/openai/codex/pull/40031) | **Preserve strict MCP auto-review outcomes** | Propagates canonical denial/timeout/abort from Guardian instead of generic decline; keeps rationale & metadata. | Guardian V2 / MCP |
| [#40028](https://github.com/openai/codex/pull/40028) | **Log Guardian V2 classification results** | Structured logging for each classification: thread, turn, tool call, risk score, threshold, sample time, accepted/superseded. | Observability |
| [#40024](https://github.com/openai/codex/pull/40024) | **Honor granular sandbox approvals in unified exec** | Uses shared approval-policy check for `require_escalated` commands; respects `sandbox_approval` granularity. | Sandbox / Permissions |
| [#40021](https://github.com/openai/codex/pull/40021) | **Cancel Guardian reviews with their tool calls** | Propagates cancellation tokens into Guardian reviews; interrupts pending review when tool is cancelled. | Guardian / Concurrency |
| [#40020](https://github.com/openai/codex/pull/40020) | **Add e2e tests for executor Stop hooks** | Verifies plugin `Stop` hook lifecycle: starts after env attach, stops after disconnect; validates metadata. | Executor plugins / Testing |
| [#40018](https://github.com/openai/codex/pull/40018) | **Add browser & computer use configuration** | Typed `browser_use` (history, per-origin, download, upload, CDP) + `computer_use` (default app, macOS bundle IDs, Windows AUMIDs/executables). | Browser / Computer Use |
| [#40015](https://github.com/openai/codex/pull/40015) | **Harden remote installed plugin cache reconciliation** | Scopes snapshots to active account; discards in-flight loads on account change; serializes reconciliation with installs/uninstalls. | Remote / Plugins |
| [#40013](https://github.com/openai/codex/pull/40013) | **Reuse Guardian reviews in async risk scoring** | Retains bounded evidence from sync allow/deny reviews; feeds as trusted context to async V2 classifier. | Guardian V2 |
| [#40007](https://github.com/openai/codex/pull/40007) | **Implement Amazon Bedrock setup in app server** | `account/bedrock/discover` (AWS profiles/creds) + `account/bedrock/setup` (validated profile, region persistence). | Custom providers / Bedrock |

> **Theme:** The PR batch is **Guardian V2 hardening + session recovery + remote plugin/account hygiene + browser/computer-use policy surface**. This aligns with the Remote/Windows issues surfacing in production.

---

## 5. Feature Request Trends (from Issues)

| Direction | Evidence | Frequency |
|-----------|----------|-----------|
| **Multi-profile / simultaneous config support** | [#18655](https://github.com/openai/codex/issues/18655) (5 comments, 2 👍) — "restart app to swap profiles" | Recurring |
| **Provider-compatible native edit tool for third-party models** | [#33405](https://github.com/openai/codex/issues/33405) (4 comments, 3 👍) — `apply_patch` absent for non-OpenAI models | High impact for BYOM users |
| **Granular sandbox approval policies** | Implied by [#40024](https://github.com/openai/codex/pull/40024) PR + [#35718](https://github.com/openai/codex/issues/35718) corruption | Active development |
| **Remote session list freshness / sync** | [#24454](https://github.com/openai/codex/issues/24454) (3 comments, 5 👍) — Android list 4 days stale | Persistent |
| **Fast mode visibility for unsupported models** | [#39999](https://github.com/openai/codex/pull/39999) PR hides status when unsupported | UX polish |

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Manifestation | Affected Surface |
|------------|---------------|------------------|
| **Windows + WSL integration broken** | Git detection fails, sandbox state corrupts, Computer Use can't copy protected files | Desktop app, CLI, Sandbox |
| **Android/iOS Remote Control unreliable** | Pairing works but sessions don't load, 503s, reconnect loops, stale lists | Remote / Mobile |
| **Auth/session cookie handling fragile** | Infinite login loops, missing biscuits, 401s on backend calls | Desktop app (Win/macOS) |
| **Sandbox state survives uninstall** | NUL-filled `deny_read_acl_state.json` in `CODEX_HOME` bricks setup | Sandbox / Windows |
| **Image-heavy sessions leak via compaction** | Unbounded `input_image` payloads → repeated auto-compaction | Desktop / Context mgmt |
| **Third-party model tool parity** | No native `apply_patch` for custom providers; MCP tool call decoding fails ([#29002](https://github.com/openai/codex/issues/29002)) | CLI / Custom models |

---

## Quick Links

- **Repo:** https://github.com/openai/codex
- **Issues (last 24h):** https://github.com/openai/codex/issues?q=updated%3A%3E2026-08-21
- **PRs (last 24h):** https://github.com/openai/codex/pulls?q=updated%3A%3E2026-08-21
- **Releases:** https://github.com/openai/codex/releases

---

*Digest compiled from GitHub data as of 2026-08-22. All links point to live GitHub items.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-22

## 1. Today's Highlights
The project shipped a nightly release (`v0.56.0-nightly.20260822`) hardening the macOS Seatbelt sandbox by isolating Docker/container runtime sockets and binaries — a critical security fix contributed by first-time contributor **@josebalius**. Meanwhile, the PR generation pipeline saw a flurry of large-scale merges: Cloud Run job deployment, iterative orchestrator state machine, GCS trajectory logging, and an LLM-as-a-Judge diff evaluator were all integrated, signaling a major push toward automated PR generation and evaluation infrastructure. Core agent stability remains a top focus, with multiple P1 bugs open around subagent recovery, generalist agent hangs, and shell execution stalls.

---

## 2. Releases
**v0.56.0-nightly.20260822.g5411f113c** ([Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0-nightly.20260822.g5411f113c) | [PR #28935](https://github.com/google-gemini/gemini-cli/pull/28935))
- **Security hardening (macOS):** Seatbelt sandbox now explicitly denies access to container runtime daemon UNIX sockets, CLI binaries (`docker`, `podman`, `nerdctl`), Mach/XPC service lookups, and POSIX shared memory — preventing sandbox escape via container hypervisor filesystem mounts (e.g., Docker Desktop VirtioFS).
- **Contributor:** First-time contribution by **@josebalius**.

---

## 3. Hot Issues (Top 10 by Impact & Engagement)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| **#22323** | [Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagents silently report `status: "success"` + `Termination Reason: "GOAL"` even when hitting turn limits without doing work — masks failures in multi-agent workflows. | 👍 2 · 13 comments · **P1** · `status/need-retesting` |
| **#21409** | [Generalist agent hangs indefinitely](https://github.com/google-gemini/gemini-cli/issues/21409) | Simple ops (folder creation) hang for up to an hour when CLI defers to generalist agent; workaround is disabling subagents. | 👍 8 · 8 comments · **P1** · `status/need-retesting` |
| **#25166** | [Shell execution stuck at "Waiting input" after command completes](https://github.com/google-gemini/gemini-cli/issues/25166) | Post-execution hang on trivial commands; UI shows "Awaiting user input" despite process exit. | 👍 3 · 4 comments · **P1** · `area/core` |
| **#19873** | [Leverage model's bash affinity via Zero-Dependency OS Sandboxing & Post-Execution Intent Routing](https://github.com/google-gemini/gemini-cli/issues/19873) | Epic to align tooling with Gemini 3's native bash/chaining strengths (grep/sed/awk) without compromising security/UX. | 👍 1 · 8 comments · **P2** · `effort/large` |
| **#22745** | [Assess impact of AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745) | Investigation into whether AST-aware tools reduce misaligned reads, token noise, and improve codebase navigation precision. | 👍 1 · 7 comments · **P2** · `kind/feature` |
| **#21968** | [Gemini underuses custom skills & sub-agents](https://github.com/google-gemini/gemini-cli/issues/21968) | Model rarely invokes skills/sub-agents autonomously even when highly relevant; requires explicit instruction. | 👍 0 · 6 comments · **P2** · `status/need-retesting` |
| **#26522** | [Auto Memory retries low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522) | Extraction agent skips low-signal sessions but they remain unprocessed → re-surfaced repeatedly, wasting cycles. | 👍 0 · 5 comments · **P2** |
| **#26525** | [Add deterministic redaction & reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525) | Secrets sent to model before redaction; service logs skill content — security/privacy risk in memory pipeline. | 👍 0 · 4 comments · **P2** · `area/security` |
| **#22232** | [Browser agent resilience: auto session takeover & lock recovery](https://github.com/google-gemini/gemini-cli/issues/22232) | `browser_agent` fails fast on locked profiles (persistent mode); needs graceful recovery instead of hard failure. | 👍 0 · 4 comments · **P3** · `kind/feature` |
| **#21983** | [Browser subagent fails on Wayland](https://github.com/google-gemini/gemini-cli/issues/21983) | Browser agent terminates with `GOAL` but fails on Wayland display server — platform compatibility gap. | 👍 1 · 4 comments · **P1** · `agent/browser` |

---

## 4. Key PR Progress (Top 10 by Scope & Significance)

| # | PR | Status | Summary |
|---|----|--------|---------|
| **#28955** | [Update deps, add MCP config, integrate ECC bundles](https://github.com/google-gemini/gemini-cli/pull/28955) | OPEN (xl) | Major dependency refresh + Model Context Protocol (MCP) configuration + ECC (Encrypted Client Certificates) bundle integration — foundational for secure agent-tool communication. |
| **#28951** | [Add Cloud Run job, Workflow orchestration, deployment pipeline](https://github.com/google-gemini/gemini-cli/pull/28951) | OPEN (m) | Production-ready Cloud Run Job + Cloud Workflows + `deploy.sh` for the Caretaker PR Generation pipeline — enables scalable, automated PR creation. |
| **#28934** | [History rollback & retry nudge optimizations](https://github.com/google-gemini/gemini-cli/pull/28934) | OPEN (l) | On tool cancellation: rollback synthetic history instead of appending → prevents context bloat, reduces API volume, improves prefix caching on retries. |
| **#28933** | [Iterative orchestrator state machine for PR generation](https://github.com/google-gemini/gemini-cli/pull/28933) | **CLOSED** (l) | Centralized orchestrator for multi-turn coding/eval/repair loops with ESLint static analysis, trajectory logging, sandbox isolation. |
| **#28948** | [Evaluation suite harness & e2e benchmark runner](https://github.com/google-gemini/gemini-cli/pull/28948) | OPEN (xl) | `eval_suite.py`, `eval_orchestrator.py`, `run_e2e_triage_pr_gen_eval.py` — full benchmarking infra for PR generation agent across curated issues. |
| **#28932** | [Antigravity agent runner & async stream resolution](https://github.com/google-gemini/gemini-cli/pull/28932) | **CLOSED** (l/m) | `AgentRunner` for async Antigravity execution: turn timeouts, chunk export for GCS trajectory logging, `chat()`/`resolve()` stream handling. |
| **#28922** | [GCS trajectory logging & artifact preservation](https://github.com/google-gemini/gemini-cli/pull/28922) | **CLOSED** (l) | Persists stream chunks + generated diffs to GCS for debugging, post-mortem, and eval analysis. |
| **#28952** | [Interactive diff comparison visualizer generator](https://github.com/google-gemini/gemini-cli/pull/28952) | OPEN (xl) | `generate_diff_viewer.py` → side-by-side HTML (Diff2HTML + Highlight.js) for agent PR diffs vs. ground-truth fixes vs. baseline. |
| **#28949** | [LLM diff judge evaluation module & rubric](https://github.com/google-gemini/gemini-cli/pull/28949) | OPEN (l) | `eval_diff_judge.py` + `judge_prompt.md` — LLM-as-a-Judge for automated scoring of generated PR diffs against accepted PRs. |
| **#28956** | [Resolve symlinked/junctioned skills dirs via realpath](https://github.com/google-gemini/gemini-cli/pull/28956) | OPEN (s) | Fixes Windows junctions (`mklink /J`) and symlinks for `.agents`/`.gemini` interop — enables open Agent Skills standard compliance. |

---

## 5. Feature Request Trends (Distilled from Issues)

| Theme | Representative Issues | Signal |
|-------|----------------------|--------|
| **Agent Autonomy & Delegation** | #21968 (underused skills), #22745 (AST-aware tools), #19873 (bash-native workflows) | Strong push to make agents *proactively* use specialized skills, sub-agents, and native CLI toolchains without explicit prompting. |
| **Observability & Debuggability** | #22598 (subagent trajectory in `/chat share`), #21763 (bugreport lacks subagent context), #28922/52/49 (GCS logging, diff visualizer, LLM judge) | Investment in full-trajectory visibility: shareable subagent runs, structured eval artifacts, and automated quality scoring. |
| **Sandbox & Execution Security** | #28935 (Seatbelt hardening), #26525 (deterministic redaction), #19873 (zero-dep sandboxing) | Hardening isolation boundaries (macOS Seatbelt, container sockets) and moving secret handling *before* model context. |
| **Memory System Reliability** | #26522 (indefinite retries), #26523 (invalid patch quarantine), #26516 (memory bugs tracking) | Auto Memory pipeline needs idempotency, invalid-input quarantine, and processing guarantees. |
| **Cross-Platform & Standards Compliance** | #28956 (symlink/junction skills), #21983 (Wayland), #20079 (symlink agents) | Windows junctions, Wayland, and filesystem symlinks — making CLI behave correctly across platforms and config conventions. |

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Agent hangs / silent failures** | #21409 (generalist hang 1hr), #25166 (shell "Waiting input" post-exit), #22465 (stuck at Vite interactive prompt) | **High** — 3+ P1/P2 issues with "hang/stuck" behavior; users resort to disabling subagents. |
| **Subagent opacity** | #22323 (false GOAL success), #21763 (bugreport excludes subagent context), #22598 (trajectories not shareable) | **High** — Multi-agent workflows are hard to debug, audit, or trust when subagent state is invisible. |
| **Skill/agent discovery broken** | #21968 (model ignores skills), #20079 (symlink agents not recognized), #28956 (junction skills not resolved) | **Medium** — Config/std conventions (symlinks, `.agents` dir) not honored; model doesn't self-discover capabilities. |
| **Auto Memory noise & privacy** | #26522 (indefinite low-signal retries), #26525 (secrets in model context), #26523 (invalid patches not surfaced) | **Medium** — Memory pipeline leaks both compute (retries) and secrets (pre-redaction logging). |
| **Browser agent fragility** | #21983 (Wayland fail), #22232 (lock fail-fast), #22267 (ignores `settings.json` maxTurns) | **Medium** — Browser subagent lacks resilience, config adherence, and cross-display support. |
| **Context/token bloat** | #19561 (36k baseline, +15k/turn on large reads), #28934 (history rollback to prevent bloat) | **Medium** — Token efficiency drives UX (latency/cost) and model quality; surgical reads & history mgmt are active work. |

---

*Digest generated from `google-gemini/gemini-cli` GitHub data (2026-08-22). All links point to live GitHub issues/PRs.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-22

---

## 1. Today's Highlights

A new prerelease (v1.0.81-7) introduces **session restoration on startup**, so crashes or machine restarts no longer require manually reopening terminals. The release also adds model-level `infoMessages`/`warningMessages` to `models.list` and a `copilot app` command to launch the desktop app. Meanwhile, the issue tracker shows a surge of regressions in the 1.0.81 prerelease series: BigInt serialization crashes in MCP responses, `store_memory` failures, terminal UI freezes during parallel sub-agent execution, and Windows console-window flashing on every shell command.

---

## 2. Releases

### v1.0.81-7 (Prerelease)
- **Session Restoration**: Startup now offers to restore sessions that were open when the CLI exited unexpectedly (crash, reboot, kill).
- **Model Metadata**: `models.list` now surfaces service-published `infoMessages` and `warningMessages` per model.
- **Desktop App Launcher**: New `copilot app` command opens the GitHub Copilot desktop application.
- **Link**: [Release v1.0.81-7](https://github.com/github/copilot-cli/releases/tag/v1.0.81-7)

---

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#3282](https://github.com/github/copilot-cli/issues/3282) | **Add multiple BYOK model capability** | Users want to switch between multiple Bring-Your-Own-Key models *within a session* without restarting or re-exporting env vars. | 26 👍, 8 comments — high-demand workflow gap |
| [#3709](https://github.com/github/copilot-cli/issues/3709) | **`/model` picker should include BYOK/local models** | The model picker only shows GitHub-hosted models; local/BYOK models are invisible, forcing manual config edits. | 27 👍, 4 comments — UX parity request |
| [#1313](https://github.com/github/copilot-cli/issues/1313) | **Session Branching** | Fork a session at any point, preserving history in both branches — critical for experimentation without losing context. | 13 👍, 7 comments — long-standing feature request |
| [#4345](https://github.com/github/copilot-cli/issues/4345) | **Reasoning effort 'medium' unsupported for claude-haiku-4.5** | Feature-flag collision causes repeated errors during sub-agent execution; blocks users on affected model combos. | 4 👍, 8 comments — active regression in prerelease |
| [#4211](https://github.com/github/copilot-cli/issues/4211) | **BigInt serialization crash in MCP responses** | MCP servers returning large integers crash the CLI with `TypeError: Do not know how to serialize a BigInt`, aborting all tasks. | 3 👍, 5 comments — data-loss risk |
| [#4535](https://github.com/github/copilot-cli/issues/4535) | **`store_memory` fails: "Instance id is required"** | Memory tool broken in 1.0.81 prereleases; native writer invoked without required instance ID. | 0 👍, 4 comments — core memory feature broken |
| [#4533](https://github.com/github/copilot-cli/issues/4533) | **Terminal UI freezes during parallel sub-agents** | UI stops consuming events (input + scroll dead) when a turn spawns parallel sub-agents; runtime continues but user is locked out. | 0 👍, 1 comment — severe UX regression |
| [#4549](https://github.com/github/copilot-cli/issues/4549) | **Windows: visible PowerShell window flashes on every shell command** | Each agent shell command spawns a visible `conhost` window, stealing focus constantly — unusable on Windows. | 0 👍, 1 comment — Windows blocker |
| [#4542](https://github.com/github/copilot-cli/issues/4542) | **Workspace `.mcp.json` detected but not connected in sessions** | `mcp list` shows workspace servers as enabled, but they’re unavailable inside actual agent sessions (interactive/-i/-p). | 1 👍, 1 comment — config drift |
| [#4560](https://github.com/github/copilot-cli/issues/4560) | **Model "auto" disables reasoning effort & rejects config** | `auto` model forces `reasoningEffort: null` and ignores any attempt to set one, limiting reasoning control. | 0 👍, 0 comments — silent capability loss |

---

## 4. Key PR Progress

**No pull requests were updated in the last 24 hours.** The project appears to be in a stabilization phase for the 1.0.81 prerelease series, with fixes likely landing directly to branches or pending review.

---

## 5. Feature Request Trends

From the full issue set, the strongest community demand clusters around:

1. **Multi-model / BYOK Flexibility** (#3282, #3709) — Users treat the CLI as a polyglot model router and need first-class support for switching between local, BYOK, and hosted models mid-session.
2. **Session Management Power Tools** (#1313, #4554, #4511) — Branching, unscoped resume, and accurate token accounting (AIC) are seen as essential for complex, long-running workflows.
3. **MCP Ecosystem Maturity** (#4211, #4542, #4552, #4556) — BigInt handling, workspace config sync, connection resilience, and marketplace registration are blocking production MCP adoption.
4. **ACP Protocol Compliance** (#4561, #4555, #4562) — Cancel semantics, background-agent lifecycle, and config hot-reload are critical for IDE/tool integrators building on ACP.
5. **Windows Parity** (#4549, #4540) — Console-window flashing and `wta.exe` path quoting are daily usability papercuts unique to Windows.

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Prerelease regressions breaking core loops** | `store_memory` broken (#4535), UI freeze on parallel agents (#4533), BigInt crash (#4211), MCP connect drift (#4542) | 5+ issues in 24h |
| **Windows as second-class platform** | Visible console flash per command (#4549), `wta.exe` path quoting (#4540) | 2 distinct blockers |
| **Model/Reasoning config opacity** | `auto` model silently disables reasoning (#4560), BYOK models hidden from picker (#3709), reasoning-effort flag collision (#4345) | 3+ config UX gaps |
| **Session state fragility** | No branching (#1313), resume scoped to cwd (#4554), AIC undercounts (#4511), pending prompts linger (#4564) | 4+ session-management gaps |
| **ACP/IDE integration gaps** | Wrong cancel stopReason (#4561), prompt aborts background agents (#4555), MCP reload uses stale config (#4562) | 3+ protocol compliance issues |

---

*Generated from github.com/github/copilot-cli data as of 2026-08-22. Links point to live GitHub items.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-22

---

## 1. Today's Highlights

- **Critical bug surfaced**: A background subagent can continue issuing LLM calls after being marked `timed_out` or `killed`, bypassing quota tracking and `TaskStop` control (#2615).  
- **Documentation hardening**: PR #2614 clarifies plugin trust boundaries, credential handling for `inject`, and persistent data directories—reducing supply-chain risk for plugin authors and users.  
- No new releases in the last 24 hours.

---

## 2. Releases

*No new releases published in the last 24 hours.*

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|---------------------|
| [#2615](https://github.com/MoonshotAI/kimi-cli/issues/2615) | **Background subagent keeps making LLM calls after TaskStop/timeout marks it terminal** | Silent quota leakage and unstoppable rogue agents break cost control and reliability guarantees for long-running workflows. | 0 👍, 0 comments (newly filed); high severity warrants immediate triage. |

*Only one issue updated in the last 24 h.*

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|----|-------------|--------|
| [#2614](https://github.com/MoonshotAI/kimi-cli/pull/2614) | **docs(plugins): document security and persistent data** | Adds trust-boundary guidance for local plugin execution, warns against credential leakage via `inject`, clarifies that reinstall replaces the plugin directory, and recommends a separate data directory for persistence. | Open — documentation only, ready for review/merge. |

*Only one PR updated in the last 24 h.*

---

## 5. Feature Request Trends (from recent issue corpus)

1. **Observability & quota enforcement** — developers want hard limits and visibility on background-agent token usage.  
2. **Plugin sandboxing** — requests for stricter isolation (filesystem, network, env) beyond current docs.  
3. **Durable task state** — survive CLI restarts without losing subagent context or leaking resources.  
4. **Declarative plugin manifests** — versioned, signed manifests to replace ad-hoc `inject` scripts.  

---

## 6. Developer Pain Points

- **Silent resource leaks** — background tasks escaping lifecycle hooks (#2615 is the latest manifestation).  
- **Opaque plugin security model** — unclear what `inject` can access; docs PR #2614 is a first response.  
- **No built-in cost dashboard** — teams build external wrappers to track per-agent spend.  
- **Fragile task recovery** — `TaskStop`/`timeout` don’t guarantee cleanup, forcing manual process kills.

---

*Digest generated from github.com/MoonshotAI/kimi-cli activity (2026-08-21 → 2026-08-22).*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-22

---

## 1. Today's Highlights

OpenCode shipped two patch releases (v1.18.20–21) addressing critical stability issues: response loops triggered by `finish_reason: unknown`, network-error retry hardening, and a regression where v1.18.21 caused infinite continuation of complete responses. Concurrently, the V2 desktop beta is surfacing migration-era bugs—session path canonicalization on macOS, provider-state nesting, event-watermark regression, and workspace-session loading freezes—all with targeted PRs already open. The community’s top pain point remains unpredictable agent stops (issues #38749, #34473, #43939), now partially mitigated by the latest patches.

---

## 2. Releases

| Version | Key Changes |
|---------|-------------|
| **v1.18.21** | • Continue responses when model reports `finish_reason: unknown` instead of stopping early<br>• Route Vertex AI `eu`/`us` multi-region Gemini requests through REP endpoints<br>• Desktop: keep file search results visible during next search load |
| **v1.18.20** | • Surface failed subagent tool calls with resumable `task_id`<br>• Retry provider responses ending with `finish_reason: network_error` (and variants `network-error`, `network_error`)<br>• Surface resumable subagent failures instead of returning opaque errors |

> **Note**: v1.18.21 introduced a regression (#43939) where complete responses labeled `finish=unknown` are repeatedly continued. Fix in progress via PR #44031.

---

## 3. Hot Issues (Top 10 by Impact & Activity)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#6245](https://github.com/anomalyco/opencode/issues/6245) | **ctrl+p in VSCode doesn't work** | Keybinding conflict with VSCode's "Go to File"; blocks command palette access in terminal/extension contexts. | 👍 24 • 11 comments • **CLOSED** |
| [#38749](https://github.com/anomalyco/opencode/issues/38749) | **Agent keeps stopping abruptly** | Core reliability: agent halts mid-response without error, plays "session complete" sound. Affects desktop v1.17.11+. | 👍 4 • 10 comments • **OPEN** |
| [#34473](https://github.com/anomalyco/opencode/issues/34473) | **Opencode randomly stops responses** | Same symptom as #38749; no error thrown, stops during thinking or before output. | 👍 3 • 6 comments • **OPEN** |
| [#33775](https://github.com/anomalyco/opencode/issues/33775) | **Asked for API key every provider switch** | UX regression: stored keys in `auth.json` not reused when switching via `/connect`. | 👍 1 • 8 comments • **OPEN** |
| [#35376](https://github.com/anomalyco/opencode/issues/35376) | **Lazy-load MCP tool definitions** | Token overhead: all 9 MCP servers' tools injected into every system prompt. **CLOSED** (likely superseded by V2 architecture). | 👍 0 • 7 comments |
| [#43939](https://github.com/anomalyco/opencode/issues/43939) | **v1.18.21 loops on `finish=unknown`** | Regression from #43892 fix: providers returning complete text with `unknown` finish cause infinite continuation. | 👍 0 • 1 comment • **OPEN** (fix: PR #44031) |
| [#44028](https://github.com/anomalyco/opencode/issues/44028) | **Stable/beta channels split sessions across `session`/`session_v2`** | Data integrity: shared data dir silently fragments session history between versions. | 👍 0 • 1 comment • **OPEN** |
| [#44023](https://github.com/anomalyco/opencode/issues/44023) | **Desktop crashes on launch with older connected server** | `TypeError: Cannot read properties of undefined (reading 'temperature')` in `normalizeAgentList`. Blocks startup. | 👍 0 • 0 comments • **OPEN** (fix: PR #44025) |
| [#44022](https://github.com/anomalyco/opencode/issues/44022) | **V2 Desktop freezes on Workspaces Settings** | Fetching all sessions serially freezes UI for seconds even with 2 directories. | 👍 0 • 0 comments • **OPEN** (fix: PR #44027) |
| [#43987](https://github.com/anomalyco/opencode/issues/43987) | **V2 FFF ignores `**/target/` gitignore rules** | Indexing pollution: build artifacts returned from `/api/fs/find` despite valid anchored ignore rules. | 👍 0 • 2 comments • **CLOSED** |

---

## 4. Key PR Progress (Top 10 by Significance)

| # | PR | Type | Summary | Linked Issue |
|---|----|------|---------|--------------|
| [#44031](https://github.com/anomalyco/opencode/pull/44031) | **fix(opencode): stop looping after unknown finish with text** | Bugfix | Prevents infinite continuation when provider returns complete text + `finish=unknown`. | #43939 |
| [#44002](https://github.com/anomalyco/opencode/pull/44002) | **fix(core): recover partial provider failures** | Bugfix | Auto-recovers retryable provider-internal/rate-limit failures after partial output; crosses durable local tools. | — |
| [#43165](https://github.com/anomalyco/opencode/pull/43165) | **feat(opencode): Message logger** | Feature | Configurable LLM request/response logging via `experimental.log_messages` (`info`/`debug`/`trace`). | #29186 |
| [#44020](https://github.com/anomalyco/opencode/pull/44020) | **fix(core): migrate provider-local state** | Bugfix | Extracts current assistant provider's metadata during V1→V2 migration (removes extra nesting). | #44019 |
| [#44015](https://github.com/anomalyco/opencode/pull/44015) | **fix(core): canonicalize macos session paths** | Bugfix | Resolves on-disk casing for session keys/filters on case-insensitive APFS. | #44014 |
| [#44013](https://github.com/anomalyco/opencode/pull/44013) | **fix(core): preserve migration event watermark** | Bugfix | Prevents V1 projection rebuild from lowering event counter below durable V2 events. | #44012 |
| [#44009](https://github.com/anomalyco/opencode/pull/44009) | **fix(tui): auto-approve background tab permissions** | Bugfix | Moves auto-approval responder to tab context; unblocks background tabs in `--auto` mode. | #44007 |
| [#44025](https://github.com/anomalyco/opencode/pull/44025) | **fix(app): tolerate incomplete agent configuration** | Bugfix | Guards `normalizeAgentList` against missing `temperature` from older server versions. | #44023 |
| [#44027](https://github.com/anomalyco/opencode/pull/44027) | **fix(app): load workspace sessions by directory** | Bugfix | Stops Settings→Workspaces freeze by fetching sessions per-directory, not globally. | #44022 |
| [#38143](https://github.com/anomalyco/opencode/pull/38143) | **feat(app): show project name in session title** | Feature | Addresses "cannot identify current project" UX (#44030) by embedding project name in tab titles. | — |

---

## 5. Feature Request Trends

| Theme | Evidence | Trajectory |
|-------|----------|------------|
| **Provider resilience & observability** | #43324 (quota-aware retry), #43165 (message logging), #44002 (partial failure recovery) | Active — core team investing in retry/telemetry infrastructure |
| **MCP scalability** | #35376 (lazy-load tools), #43993 (Bun fetch timeout for remote MCP) | Addressed in V2 architecture; ongoing transport hardening |
| **Multi-project/session UX** | #44030 (project identification), #38143 (project name in title), #6245 (keybinding conflicts) | V2 desktop prioritizing workspace clarity |
| **Cross-version data compatibility** | #44028 (stable/beta session split), #44019/44012/44014 (migration bugs) | Critical path for V2 GA; multiple migration fixes in flight |
| **Desktop stability** | #44023 (crash on old server), #44022 (workspace freeze), #44033 (sidecar timeout) | High priority for beta channel |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Representative Issues |
|------------|-----------|----------------------|
| **Unpredictable agent stops** | High (3+ issues, 17+ 👍 combined) | #38749, #34473, #43939 — agent halts mid-stream without error, often with "session complete" sound |
| **Provider auth friction** | Medium | #33775 — API key re-prompt on every `/connect` switch despite `auth.json` storage |
| **V2 migration data corruption** | Medium (cluster of 4+ issues) | #44019 (provider state nesting), #44012 (watermark regression), #44014 (macOS path casing), #44028 (session split) |
| **Desktop beta instability** | High (new cluster) | #44023 (crash on launch), #44022 (settings freeze), #44033 (sidecar timeout), #44032 (missing dark mode) |
| **Keybinding/terminal conflicts** | Medium | #6245 (ctrl+p), #44007 (TUI `--auto` blocks background tabs) |
| **Indexing pollution** | Low | #43987 (FFF ignores `**/target/`), #35376 (MCP tool bloat) |

---

*Generated from github.com/anomalyco/opencode data as of 2026-08-22. Links point to live issues/PRs.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-22

## Today's Highlights
The Pi community is actively resolving terminal compatibility regressions (Windows Terminal, Kitty) and provider integration gaps (OpenRouter, xAI, Anthropic caching). A critical auto-compaction bug (#6879) remains open with high engagement, while several SDK extensibility proposals landed in quick succession. No new release was cut in the last 24h.

## Releases
No new releases published in the last 24 hours.

## Hot Issues
| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| [#6879](https://github.com/earendil-works/pi/issues/6879) **Auto-compaction never triggers past 100% context** | Core reliability: sessions grow until provider rejection (373k tokens), risking data loss and cost spikes. | 19 comments, 17 👍 — highest engagement in queue |
| [#2733](https://github.com/earendil-works/pi/issues/2733) **Backspace/Delete broken in Windows Terminal** | Blocks Windows users on 0.64+; regression from 0.62. | 11 comments, closed (fix likely in 0.65+) |
| [#8157](https://github.com/earendil-works/pi/issues/8157) **Migrate grok-mermaid → lovely-mermaid** | Technical debt reduction; lovely-mermaid has better parser coverage and fewer corner cases. | 9 comments, active discussion |
| [#7130](https://github.com/earendil-works/pi/issues/7130) **Backspace deletes 2 chars in Kitty (KKP release events)** | Kitty protocol handling regression; affects power users on Linux/macOS. | 9 comments, open |
| [#7995](https://github.com/earendil-works/pi/issues/7995) **openai-responses: missing Anthropic `cacheControlFormat`** | 2.5× cost penalty for Claude via OpenRouter; caching unsupported in Responses API path. | 7 comments, in progress |
| [#7779](https://github.com/earendil-works/pi/issues/7779) **Shared `PI_CODING_AGENT_DIR` fails for multi-user (0600 perms)** | Blocks team/shared-machine workflows; `auth.json`/`models-store.json` unreadable by other users. | 6 comments, closed (fix merged) |
| [#8183](https://github.com/earendil-works/pi/issues/8183) **Document `Ctrl+Shift+F` conflict in Windows Terminal** | UX friction: Pi’s fullscreen search overrides terminal’s find shortcut. | 4 comments, open (docs fix) |
| [#8456](https://github.com/earendil-works/pi/issues/8456) **Gemini 3.7 Flash rejects `/tree` summarization (MINIMAL thinking)** | Adapter sends unsupported thinking level; breaks branch summarization for new Gemini. | 3 comments, closed (adapter fix) |
| [#8421](https://github.com/earendil-works/pi/issues/8421) **Generalize Termux resize exemption to mobile SSH/mosh** | Full redraw on resize breaks iOS/mobile SSH clients; Termux-only check is too narrow. | 3 comments, closed (generalized) |
| [#8452](https://github.com/earendil-works/pi/issues/8452) **Improve default compaction prompt for continuation fidelity** | Current prompt loses observed-vs-inferred distinction; degrades long-session coherence. | 2 comments, closed (prompt updated) |

## Key PR Progress
| PR | Description | Status |
|----|-------------|--------|
| [#8459](https://github.com/earendil-works/pi/pull/8459) | **fix(tui)**: Keep `/` and `-` inside fullscreen double-click word selection (fixes #7746) | Closed |
| [#8443](https://github.com/earendil-works/pi/pull/8443) | **feat(interactive-mode)**: `/share` via Radius artifacts under experimental flag (auth flow + artifact gen) | Closed |
| [#8433](https://github.com/earendil-works/pi/pull/8433) | **feat(coding-agent)**: Add `--exclude-extensions` to skip named extensions (granular extension control) | Closed |
| [#8428](https://github.com/earendil-works/pi/pull/8428) | **fix(coding-agent)**: Re-pair tool results when rebuilding session context (resume/compaction/branch nav) | Closed |
| [#8424](https://github.com/earendil-works/pi/pull/8424) | **fix(coding-agent)**: Discard failed extension factory state (stage flags, clean listeners on throw) | Open |
| [#8422](https://github.com/earendil-works/pi/pull/8422) | **fix(ai)**: Omit `reasoning.effort` for xAI Grok Build (HTTP 400 on `"none"`/`explicit` levels) | Open |
| [#8232](https://github.com/earendil-works/pi/pull/8232) | **dev branch** — WIP integration branch for CI/commenting (do not merge) | Open |

## Feature Request Trends
1. **Provider parity & caching** — Anthropic-style prompt caching in OpenAI-compatible paths (#7995), reasoning handling for mandatory-reasoning models (#8454), xAI Grok Build compatibility (#8422), new providers (SiliconFlow #4742, Parasail #8450, AgentCore MMDS #8455).
2. **SDK extensibility** — Five SDK proposals in one day: configurable block expand/collapse (#8448), sticky headers (#8447), wheel sensitivity (#8446), click hooks on custom tool rows (#8445), skill mid-sentence invocation (#8457).
3. **Session/compaction control** — Manual full-span compaction (#8453), smarter default prompt (#8452), RPC login (#8451), grep tool customization (#5354).
4. **Terminal/UX polish** — Windows Terminal key conflicts (#2733, #8183), Kitty protocol edge cases (#7130, #8442), mobile resize handling (#8421), path-aware double-click (#7746).
5. **Multi-user/shared environments** — File permission fixes (#7779), extension exclusion (#8433), RPC auth (#8451).

## Developer Pain Points
- **Context management unreliability**: Auto-compaction silently fails past threshold (#6879), forcing manual intervention or provider errors.
- **Terminal regression whack-a-mole**: Windows Terminal backspace (#2733), Kitty double-delete (#7130), legacy `0x7f` Backspace in herdr (#8442), `Ctrl+Shift+F` collision (#8183) — all in active rotation.
- **Provider adapter gaps**: Missing caching (#7995), reasoning flags (#8422, #8454), credential chains (#8455), streaming truncation tolerance (#8460).
- **Extension sandboxing**: No way to exclude third-party extensions (#8433), factory failures leave dirty state (#8424), custom tool rows lack click handling (#8445).
- **Mobile/remote UX**: Resize redraws break iOS/mosh (#8421), Termux-only exemption too narrow.
- **Session persistence fidelity**: Tool-result pairing lost on rebuild (#8428), compaction prompt loses semantic structure (#8452).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-22

## 1. Today's Highlights
- **Nightly release v0.21.14** shipped with a review-loop diagnostics fix and CI stability improvements.  
- **SWE-bench Verified & Terminal-Bench full suites passed** on the v0.21.15 benchmark reference, confirming end-to-end release readiness.  
- **Review subsystem dominates PR activity**: 10+ open PRs iterating on convergence detection, Aone Code parity, TUI capture, and cross-session messaging.

## 2. Releases
| Version | Type | Key Changes |
|---------|------|-------------|
| `v0.21.14-nightly.20260822.7a4566cb3b` | Nightly | • `feat(review)`: explain why a review loop isn't settling ([#9461](https://github.com/QwenLM/qwen-code/pull/9461))<br>• `fix(ci)`: stop fallback CVE audit breakage (partial note) |

> **Benchmark validation**: Both `dsw-eas-tb-smoke` and `dsw-eas-full` pipelines report **SUCCEEDED** on `swe-bench/swe-bench-verified@2` (500 tasks) + Terminal-Bench 2.0 (89 tasks) against benchmark ref `v0.21.15`.

## 3. Hot Issues (Top 4 updated in last 24h)

| # | Title | Priority/Type | Why It Matters | Community Signal |
|---|-------|---------------|----------------|------------------|
| [#9699](https://github.com/QwenLM/qwen-code/issues/9699) | CI: Dependency CVE audit fails on every PR since 2026-08-21 | P1 / Security / CI-CD | Blocks all merges; `npm audit --omit=dev --audit-level=high` reports 8 vulns (1 high) in transitive deps. | 4 comments, **CLOSED** (mitigation likely landed) |
| [#9704](https://github.com/QwenLM/qwen-code/issues/9704) | Tool result write delay causes transient “Tool result missing from saved history” on concurrent session load | P2 / Core / Session | Race condition when loading transcript mid-tool-execution; UX friction for daemon/multi-session users. | 2 comments, **OPEN** |
| [#8617](https://github.com/QwenLM/qwen-code/issues/8617) | VS Code plugin selection dialog obscures content | P3 / UI / VSCode | Dialog doesn't auto-dismiss/overlay correctly; users must exit dialog to read AI output. | 4 comments, **OPEN** (Ubuntu reporter) |
| [#7167](https://github.com/QwenLM/qwen-code/issues/7167) | Fleet Shepherd Dashboard (bot fleet status) | — / CI-CD | Auto-maintained ops dashboard; shows 1 idle PR (#9602), 0 syncs/dispatches/releases/cleanups this tick. | 3 comments, **NEED-INFO** |

## 4. Key PR Progress (Top 10 by activity/impact)

| # | Title | Author | Status | Summary |
|---|-------|--------|--------|---------|
| [#9678](https://github.com/QwenLM/qwen-code/pull/9678) | `perf(review)`: give review agents their own subagent type | wenshao | OPEN | Review dimension agents now run as dedicated `review-agent` subagent declaring only 6 needed tools (vs. `general-purpose` inheriting all). Reduces tool surface & latency. |
| [#9273](https://github.com/QwenLM/qwen-code/pull/9273) | `feat(review)`: capture-tui — rendering claims get pixels, not prose | wenshao | OPEN (autofix/takeover) | Adds `qwen review capture-tui`: drives command in private tmux, captures pane text (`.ans`), renders PNG when `freeze` available. Evidence-based UI review. |
| [#9576](https://github.com/QwenLM/qwen-code/pull/9576) | `feat(core)`: accept cross-session messages behind inbound gate | qqqys | OPEN (autofix/takeover) | Sessions bind UNIX domain socket; accept newline-delimited JSON from siblings. Policy-gated injection into local input queue as marked non-user messages. |
| [#9394](https://github.com/QwenLM/qwen-code/pull/9394) | `feat(channels)`: add DingTalk Workspace channel | qqqys | OPEN (autofix/takeover) | Built-in DWS CLI profile support: DMs, @mentions, ambient groups, doc-mention notifications, native todos, source-scoped sessions, reply-to-origin. |
| [#9340](https://github.com/QwenLM/qwen-code/pull/9340) | `feat(review)`: say when the approach, not the patch, is the open question | qqqys | OPEN (autofix/takeover) | Adds advisory when PR has grown enough that *change shape* (not current diff) is the blocker. Surfaces architectural drift early. |
| [#9602](https://github.com/QwenLM/qwen-code/pull/9602) | `fix(core)`: clear tool display list before awaiting completion callback | qwen-code-dev-bot | OPEN (autofix/needs-human) | Moves display-clear from `finally` block to *before* completion callback; adds regression test. Fixes stale UI during tool finalization. |
| [#8927](https://github.com/QwenLM/qwen-code/pull/8927) | `feat(channels)`: bound session lifetime with `sessionRotation` | qwen-code-dev-bot | OPEN (review/self-reported) | Per-channel `sessionRotation.maxTurns` / `maxAge` forces fresh session after bound; prevents context bloat in long-running channels. |
| [#9305](https://github.com/QwenLM/qwen-code/pull/9305) | `fix(ui)`: bottom-align short VP content so blank space is at top | qwen-code-dev-bot | OPEN | In VP mode (`useTerminalBuffer`), short conversations now bottom-align (composer-adjacent) instead of top-align with gap at bottom. Fixes #9300. |
| [#9526](https://github.com/QwenLM/qwen-code/pull/9526) | `feat(review)`: persistently-critical convergence advisory (land-with-residual-risk) | wenshao | OPEN (autofix/takeover) | When Criticals persist across rounds + posting volume stable, emits `land-with-residual-risk` advisory. Telemetry-gated exit from stuck loops. |
| [#9689](https://github.com/QwenLM/qwen-code/pull/9689) | `docs`: classify architecture invariants by enforcement mechanism | yiliang114 | OPEN (review/self-reported) | Canonical `docs/design/9152-architecture-invariant-classification.md`: maps every invariant to mechanical enforcement (ESLint rules, boundary tests, drift detectors, etc.). |

## 5. Feature Request Trends (from Issues & PRs)
1. **Review-loop intelligence** — Convergence detection, machine-readable diagnostics, “approach vs. patch” advisories, residual-risk landing.  
2. **Multi-platform review parity** — Aone Code (Alibaba internal) reaching feature parity with GitHub: context fetch, comment threading, presubmit, inline anchor validation, web URL composition.  
3. **Cross-session / inter-process communication** — UNIX socket gateway for sibling sessions, channel session rotation, DingTalk Workspace integration.  
4. **Evidence-based UI review** — `capture-tui` (tmux + PNG/ANSI snapshots) replaces prose claims with pixel-perfect rendering evidence.  
5. **Architecture governance** — Formal invariant classification tied to mechanical enforcement (lint, tests, drift detection).

## 6. Developer Pain Points (Recurring Themes)
| Pain Point | Evidence |
|------------|----------|
| **CI flakiness from external audits** | #9699: `npm audit` breaks every PR; requires constant mitigation. |
| **Session/transcript race conditions** | #9704: concurrent load mid-tool-execution shows phantom “missing history”. |
| **VS Code extension UX polish** | #8617: selection dialog obscures AI output; no auto-dismiss/overlay. |
| **Review-loop stalls without actionable signal** | Multiple PRs (#9461, #9526, #9623) adding diagnostics, machine-readable convergence, residual-risk exit. |
| **Platform-specific review gaps** | 4+ PRs (#9621, #9624, #9627, #9634) closing Aone Code parity gaps (composeUrl, comment-status, presubmit, anchor validation). |

---

*Digest generated from GitHub data as of 2026-08-22. Links point to live items on github.com/QwenLM/qwen-code.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-22

---

## 1. Today's Highlights

The CodeWhale TUI (DeepSeek TUI) project is advancing on multiple fronts: a major **crate decomposition epic (EPIC-005)** continues restructuring the codebase, while a **supervised-operation stack** PR (#5535) introduces lifecycle event outbox, per-session control socket, `/relaunch` command, and a fix for goal-continuation quiet-period bypass. Meanwhile, **sub-agent reliability** and **workflow failure visibility** have surfaced as critical pain points blocking the Fleet delegation value proposition.

---

## 2. Releases

*No new releases in the last 24 hours.*

---

## 3. Hot Issues (Top 10)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#5316](https://github.com/Hmbown/CodeWhale/issues/5316) | **EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella)** | Architectural rewrite splitting the monolithic `codewhale-tui` crate; tracks all sub-epics & FEATs. Foundation for maintainability & plugin ecosystem. | 11 comments, active since Aug 10 — core team coordination hub. |
| [#5529](https://github.com/Hmbown/CodeWhale/issues/5529) | **Sub-agents cannot reliably execute** | Three failure modes: wall-time budget deaths, provider-route failures, shell tooling workarounds. **Blocks Fleet delegation** — the product’s core value prop. | Authored by maintainer `Hmbown`; zero comments but high urgency. |
| [#5528](https://github.com/Hmbown/CodeWhale/issues/5528) | **Workflow runs fail silently** | Dispatch/schema errors never surface in TUI — no toast, status line, or panel entry. Operators see “working” while runs fail. | Maintainer-reported; silent failures erode trust in automation. |
| [#5541](https://github.com/Hmbown/CodeWhale/issues/5541) | **Feature: DeepSeek-V4-Flash-Vision-Exp** | First multimodal model in DeepSeek family; needs model list addition + vision plumbing. High impact for web/dev tasks. | 1 comment; signals upstream model velocity. |
| [#5534](https://github.com/Hmbown/CodeWhale/issues/5534) | **Bug: Goal-continuation cadence bypassed** | `continuation_delay_seconds` quiet period ignored on within-turn dispatch path — resumed/CLI sessions fire passes instantly. | 1 comment; PR #5535 includes fix. |
| [#5533](https://github.com/Hmbown/CodeWhale/issues/5533) | **Feature: Control surface for supervised operation** | Per-session control socket (message/interrupt/relaunch/status) + `RuntimeBackendKind::External` for CI/automation harnesses. | 1 comment; part of supervised-operation stack. |
| [#5532](https://github.com/Hmbown/CodeWhale/issues/5532) | **Feature: `/relaunch` — switch running session to current binary** | Eliminates manual restart after `/update`; enables seamless binary upgrades during long-lived sessions. | 1 comment; implemented in PR #5535. |
| [#5531](https://github.com/Hmbown/CodeWhale/issues/5531) | **Feature: Local lifecycle event outbox (JSONL + webhook)** | Emits `turn_stalled`/`turn_failed`/`subagent_spawn` events for external supervisors (herdr, alerting, overnight runs). | 1 comment; implemented in PR #5535. |
| [#4069](https://github.com/Hmbown/CodeWhale/issues/4069) | **feat: indexing privacy controls (.codewhaleignore)** | `.cursorignore`-style exclude for secrets, vendor trees, local artifacts. Trust & privacy requirement for enterprise adoption. | 1 comment; updated Aug 21 — long-standing doc/enhancement. |
| [#5526](https://github.com/Hmbown/CodeWhale/issues/5526) | **Deprecated shell completion** | `codew completions powershell` generates outdated scripts referencing `codewhale-tui` binary. UX friction for PowerShell users. | 4 comments; fixed in PR #5530. |

---

## 4. Key PR Progress (Top 10)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#5535](https://github.com/Hmbown/CodeWhale/pull/5535) | **Supervised operation stack** | Feature | **5 commits**: lifecycle outbox (JSONL+webhook), `/relaunch`, per-session control socket (`RuntimeBackendKind::External`), goal-continuation quiet-period fix. Enables machine-readable supervision of long-lived sessions. |
| [#5530](https://github.com/Hmbown/CodeWhale/pull/5530) | **fix(cli): route legacy completions through public binary** | Fix | Routes `codewhale completions <shell>` to canonical generator; generated scripts use `codewhale` (not `codewhale-tui`). Closes #5526. |
| [#5525](https://github.com/Hmbown/CodeWhale/pull/5525) | **refactor(tui): adopt command shapes in utility group (FEAT-018)** | Refactor | Converts 7 utility commands to external command shapes (FEAT-014/015). Execution boundary change without file moves. Part of crate decomposition. |
| [#5524](https://github.com/Hmbown/CodeWhale/pull/5524) | **feat(tui): add multi-file read_lints operation** | Feature | `lsp` tool now supports `read_lints` for multiple workspace files via shared `LspManager` transport pool. Addresses #4070. |
| [#5523](https://github.com/Hmbown/CodeWhale/pull/5523) | **refactor(tui): extract tool call stages from turn loop** | Refactor | Splits monolithic turn loop into `plan_tool_calls` / `execute_planned_tools` / `process_tool_results`. Preserves control order, cancellation, outcome collection. |
| [#5540](https://github.com/Hmbown/CodeWhale/pull/5540) | **chore(deps): bump similar 3.1.2 → 3.2.0** | Dependency | Diff library update: structured line-or-char diff output, improved Unicode handling. |
| [#5539](https://github.com/Hmbown/CodeWhale/pull/5539) | **chore(deps): bump rio-vt 0.5.19 → 0.5.25** | Dependency | Terminal emulator backend updates; multiple bug fixes & performance improvements. |
| [#5538](https://github.com/Hmbown/CodeWhale/pull/5538) | **chore(deps): bump jsonschema 0.46.10 → 0.49.9** | Dependency | JSON Schema validation library; Python-side fixes. |
| [#5537](https://github.com/Hmbown/CodeWhale/pull/5537) | **chore(deps): bump docker/setup-buildx-action 4.2.0 → 4.3.0** | CI/Dependency | Buildx action update for multi-arch Docker builds. |
| [#5390](https://github.com/Hmbown/CodeWhale/pull/5390) | **chore(deps): bump rmcp 2.2.0 → 3.1.2** | Dependency | Model Context Protocol Rust SDK major update; macro fixes, protocol improvements. |

---

## 5. Feature Request Trends

1. **Supervised / Headless Operation** — Control sockets, lifecycle outbox, `/relaunch`, external runtime backend. Driven by CI, automation harnesses, overnight fleet runs.
2. **Multimodal Model Support** — DeepSeek-V4-Flash-Vision-Exp integration; vision tooling for web/dev tasks.
3. **Privacy & Workspace Hygiene** — `.codewhaleignore` for indexing exclusion (secrets, vendor, artifacts).
4. **LSP & Code Intelligence Expansion** — Multi-file `read_lints`, richer language-server tooling.
5. **Shell & CLI Polish** — Completion script accuracy, canonical command naming, deprecated path removal.
6. **Crate Decomposition & Modularity** — Ongoing EPIC-005 work to extract crates, enable plugin architecture.

---

## 6. Developer Pain Points

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Sub-agent execution unreliability** | Wall-time deaths, provider routing failures, shell tooling gaps (#5529) | **Blocks Fleet delegation** — core product differentiator unusable. |
| **Silent workflow failures** | No TUI visibility for dispatch/schema errors (#5528) | Operators cannot trust automation; debugging requires log spelunking. |
| **Outdated shell completions** | `codew completions` emits wrong binary name (#5526) | Daily friction for PowerShell users; fixed but signals maintenance debt. |
| **Goal-continuation cadence bypass** | Quiet period ignored on within-turn dispatch (#5534) | Causes runaway turn loops in resumed/CLI sessions. |
| **Manual restart after update** | `/update` requires full app restart (#5532) | Disrupts long-lived supervised sessions; `/relaunch` in progress. |
| **No indexing privacy controls** | Secrets/vendor artifacts swept into context (#4069) | Blocker for enterprise/compliance-sensitive workspaces. |

---

*Digest generated from GitHub data (last 24h) for `Hmbown/CodeWhale`. All links point to live issues/PRs.*

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*