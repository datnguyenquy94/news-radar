# AI CLI Tools Community Digest 2026-09-07

> Generated: 2026-09-07 04:12 UTC | Tools covered: 10

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

# Cross-Tool AI CLI Ecosystem Comparison — 2026-09-07

---

## 1. Ecosystem Overview

The AI CLI landscape is defined by **rapid convergence on core primitives** (plan modes, multi-agent orchestration, session persistence, browser automation) while **differentiating on integration depth** (cloud auth, IDE embedding, enterprise governance). All major vendors—Anthropic, OpenAI, Google, GitHub, MoonshotAI, Qwen, and community projects—are shipping daily iterations, but critical regressions in stability, auth, and cross-platform support reveal that **reliability has overtaken features as the primary community concern**. Windows parity, enterprise SSO, and provider-agnostic fallback chains are now strategic workstreams across the board.

---

## 2. Activity Comparison (24h)

| Tool | Hot Issues | Key PRs | Release Status | Notable Velocity Signal |
|------|------------|---------|----------------|-------------------------|
| **Claude Code** | 10 | 10 (1 open, 9 closed) | None | 16 plugin fixes batched; 197-comment CVP regression |
| **OpenAI Codex** | 10 | 10 (all merged by bot, 1 open) | None | 20 PRs merged in 24h; Windows desktop crisis |
| **Gemini CLI** | 10 | 10 (6 closed, 4 open) | **Nightly v0.60.0** | Daily nightlies; P1 Enterprise auth block (35 comments) |
| **GitHub Copilot CLI** | 10 | 1 (open) | None | 21 active issues, near-zero PR throughput |
| **Kimi Code CLI** | 4 | 2 (both open) | None | Low volume, high-signal feature requests |
| **OpenCode** | 10 | 10 | None | 3-PR persistence rearchitect (VS Code Memento model) |
| **Pi** | 10 | 10 (6 closed, 4 open) | None | Provider fallback + extension API + cost observability merged |
| **Qwen Code** | 6 (all) | 10 (1 closed, 9 open) | **Preview v0.23.1 + Nightly** | Web Shell + browser automation + mesh admission in same cycle |
| **DeepSeek TUI** | 10 | 10 (7 closed, 3 open) | None (v0.9.13 blocked) | 6 flaky tests root-caused; Fleet architecture advancing |
| **Grok Build** | 0 | 0 | None | No activity |

---

## 3. Shared Feature Directions (Cross-Tool Requirements)

| Requirement | Tools Demanding It | Specific Needs |
|-------------|-------------------|----------------|
| **Session Portability & Persistence** | Claude Code, OpenAI Codex, Gemini CLI, Kimi, OpenCode, Pi, Qwen Code, DeepSeek TUI | Cross-device resume (Kimi #1282), export/import (OpenCode #34875), historical transcript (Qwen #11208), session identity integrity (DeepSeek #5931), compaction without rule loss (Claude #67500) |
| **Plan/Goal-Driven Agent Control** | Claude Code, OpenAI Codex, Gemini CLI, Kimi, OpenCode, Qwen Code, DeepSeek TUI | Explicit plan mode (Kimi #1354, OpenCode #35900), `/goal` command (Kimi #2252), goal spend tracking (Qwen #11248), compaction verbatim retention (DeepSeek #5965), task-tool exposure (Claude #80015) |
| **Multi-Agent Orchestration** | OpenAI Codex, OpenCode, Qwen Code, DeepSeek TUI | Worktree/swarm (Codex #43286), TeamJules worker swarm + GitPigeon mesh (OpenCode #47669), mesh admission/turn gates (Qwen #11206), Fleet provider→model→role pipeline (DeepSeek #5915) |
| **Enterprise/Cloud Auth & Governance** | Claude Code, Gemini CLI, GitHub Copilot CLI, OpenCode, Pi | CVP approval sync (Claude #84352), Workspace+Cloud Project (Gemini #29101), GHEC data residency (Copilot #4527), AWS SSO auto-refresh (OpenCode #1934), live auth resolution (Pi #9233) |
| **Windows First-Class Support** | Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Pi, DeepSeek TUI | Path separators (Claude #68694), desktop launch/stalls (Codex #42501, #41079), CRLF/sandbox (Gemini #28983), WSL2 memory leak (Copilot #4694), shell detection (Pi #9229), `toggle_pin` thread block (DeepSeek #5923) |
| **Plugin/Extension Platform Maturity** | Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi, OpenCode, Pi, Qwen Code, DeepSeek TUI | Marketplace reliability (Claude #45810), remote permission profiles (Codex #43340), MCP tool collisions (Gemini #28971), ACP protocol hardening (Copilot #4537), MCP config migration (Kimi #1356), declarative commands (OpenCode #47719), per-call confirmation (Pi #9227), white-label Web Shell (Qwen #11244), MCP UX clarity (DeepSeek #5971) |
| **Browser/Web Automation as Primitive** | Qwen Code, Pi, OpenCode | Chrome Native Messaging + browser-use skill (Qwen #11242, #11245), coding agent web actions (Pi), Office/PDF preview (OpenCode #47640) |
| **Cost/Token Observability at Runtime** | Qwen Code, Pi, DeepSeek TUI, Claude Code | Per-goal spend footer (Qwen #11248), provider-reported cost ingestion (Pi #6881), compaction budget knobs (DeepSeek #5965), configurable autocompact threshold (Claude #91188) |

---

## 4. Differentiation Analysis

| Tool | Primary Focus | Target User | Technical Approach |
|------|---------------|-------------|-------------------|
| **Claude Code** | Enterprise adoption, plugin marketplace, TUI+Desktop parity | Enterprise teams, plugin authors | Cyber Verification Program, security-guidance hooks, marketplace economy |
| **OpenAI Codex** | Remote/SSH development, voice interaction, Windows desktop | Remote-first devs, voice-users | TUI worktree browser, GStreamer voice pipeline, Node-version-sensitive VS Code extension |
| **Gemini CLI** | Enterprise Workspace auth, subagent architecture, sandbox security | Google Cloud/Workspace enterprises | Node 22 sandbox, AST-aware tooling, MCP tool-name collision guards, deterministic redaction |
| **GitHub Copilot CLI** | ACP protocol compliance, BYOK economics, GHEC parity | GitHub Enterprise orgs, BYOK users | ACP-mode permission flow, prompt caching for cost, tenant-aware endpoints |
| **Kimi Code CLI** | Plan-driven UX, cross-device continuity, ecosystem interop | Polyglot CLI users, planning-centric workflows | `/goal` command, remote session handoff, MCP config import, Moonshot API payload hardening |
| **OpenCode** | VS Code-grade persistence, multi-agent swarm, plugin declarativity | Power users, team automation | Memento-style renderer persistence, TeamJules/GitPigeon P2P mesh, Effect/Promise plugin runtime |
| **Pi** | Provider resilience, extension API as platform, "bring your own gateway" | Advanced users, gateway operators | Cross-provider fallback chains, LLM Gateway providers, per-call tool confirmation, provider-reported cost |
| **Qwen Code** | Web Shell as IDE, browser automation, white-label deployment | Web-centric teams, SaaS builders | Chrome Native Messaging host, dynamic workflow DAG in browser, multi-agent mesh admission, configurable branding |
| **DeepSeek TUI** | Fleet model orchestration, configurable TUI chrome, ACP compliance | Rust/TUI enthusiasts, multi-model routers | Provider→model→shortlist→role pipeline, posture-bar/metrics-line presets, `rusty_alloc` opt-in, session receipt integrity |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Indicators |
|------|-------|------------|
| **High Momentum + Maturing** | **Claude Code**, **OpenAI Codex**, **Gemini CLI** | Daily PR volume (10–20), enterprise programs (

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (as of 2026-09-07)

---

## 1. Top Skills Ranking — Most-Discussed PRs

| # | Skill | Functionality | Discussion Highlights | Status |
|---|-------|---------------|----------------------|--------|
| **[#1298](https://github.com/anthropics/skills/pull/1298)** | **skill-creator: eval harness fix** | Fixes `run_eval.py` reporting 0% recall on all skill descriptions; resolves Windows stream reading, trigger detection, parallel workers | Core infrastructure blocker — 10+ independent reproductions (#556); description-optimization loop currently "optimizing against noise" | Open (Jun 2026) |
| **[#556](https://github.com/anthropics/skills/issues/556)** | **run_eval.py trigger detection** | `claude -p` never triggers skills/commands (0% trigger rate across all queries) | **12 comments, 7 👍** — highest-engagement issue; root cause of #1298 | Open (Mar 2026) |
| **[#1628](https://github.com/anthropics/skills/pull/1628)** | **Hivemind: Zero-Cost Multi-Agent Orchestration** | Delegates mechanical work to headless opencode workers on free models; Claude stays planner/reviewer/merger | Novel cost-optimization architecture; "expensive model's context is the scarce resource" | Open (Aug 2026) |
| **[#1367](https://github.com/anthropics/skills/pull/1367)** | **self-audit: mechanical + reasoning quality gate** | Pre-delivery audit: mechanical file verification → 4-dimension reasoning audit (damage-severity priority) | Universal, stack-agnostic; v1.3.0; addresses hallucination/quality at delivery time | Open (Jun 2026) |
| **[#568](https://github.com/anthropics/skills/pull/568)** | **ServiceNow platform skill** | Broad ServiceNow assistant: ITSM, ITOM, ITAM/SAM, FSM, HRSD, SPM, SecOps, IntegrationHub | Enterprise demand; 5-month active discussion; covers full platform surface | Open (Mar–Aug 2026) |
| **[#486](https://github.com/anthropics/skills/pull/486)** | **ODT skill: OpenDocument creation/fill/parse** | Create, fill, read, convert .odt/.ods; template filling; ODT→HTML parsing | Open-standard document workflow; triggers on "ODT", "ODF", "LibreOffice" mentions | Open (Mar–Apr 2026) |
| **[#723](https://github.com/anthropics/skills/pull/723)** | **testing-patterns skill** | Full testing stack: Testing Trophy, AAA, React Testing Library, E2E, contract, property-based, mutation | Comprehensive reference; addresses "what to test vs. NOT test" philosophy gap | Open (Mar–Apr 2026) |
| **[#514](https://github.com/anthropics/skills/pull/514)** | **document-typography skill** | Prevents orphans, widows, numbering misalignment in AI-generated documents | "Affects every document Claude generates"; users rarely ask but quality suffers | Open (Mar 2026) |

> **Note**: PR comment counts show as `undefined` in source data; ranking combines Issue engagement (#556 → #1298), PR longevity, and architectural significance.

---

## 2. Community Demand Trends — From Issues

| Trend | Evidence (Issues) | Signal |
|-------|-------------------|--------|
| **Trust & Namespace Security** | [#492](https://github.com/anthropics/skills/issues/492) (43 comments, 2 👍) — Community skills distributed under `anthropic/` namespace impersonate official skills | **Critical**: Users grant elevated permissions to spoofed skills |
| **Org-Wide Skill Sharing** | [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8 👍) — Manual .skill file sharing via Slack/Teams; needs shared library or direct links | **High**: Workflow friction for team adoption |
| **Evaluation Infrastructure Reliability** | [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 7 👍), [#1390](https://github.com/anthropics/skills/issues/1390) (4 comments) — `run_eval.py` 0% trigger rate; MCP builder scores 0/N | **High**: Skill authors cannot validate quality |
| **Context Window Pressure** | [#1487](https://github.com/anthropics/skills/issues/1487) (4 comments) — `claude-api` skill injects ~156k tokens in one call | **Emerging**: Bundled skills exhaust context |
| **Duplicate/Conflict Management** | [#189](https://github.com/anthropics/skills/issues/189) (6 comments, 9 👍) — `document-skills` + `example-skills` install identical content | **Operational**: Plugin deduplication needed |
| **Cross-Platform (Windows) Support** | [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050) — `run_eval.py` unusable on Windows; `claude.cmd` vs `claude` | **Foundational**: Windows parity blocker |
| **Bedrock/Enterprise Deployment** | [#29](https://github.com/anthropics/skills/issues/29) (4 comments) — Skills on AWS Bedrock unclear | **Niche but strategic**: Enterprise cloud parity |

---

## 3. High-Potential Pending Skills — Active PRs Likely to Land

| PR | Skill | Why It Has Momentum |
|----|-------|---------------------|
| **[#1298](https://github.com/anthropics/skills/pull/1298)** | skill-creator eval fix | Fixes the #1 infrastructure bug (#556, 12 comments); prerequisite for all skill authoring |
| **[#1602](https://github.com/anthropics/skills/pull/1602)** | Evaluation/benchmark stability fixes | Resolves MCP builder serialization, encoding, metrics across repo; broad reliability PR |
| **[#1607](https://github.com/anthropics/skills/pull/1607)** | claude-api: mark retired models | Simple, targeted fix for #1603; keeps model registry current |
| **[#538](https://github.com/anthropics/skills/pull/538)** | PDF skill case-sensitivity fix | 8 filename mismatches breaking case-sensitive FS; trivial but blocking |
| **[#539](https://github.com/anthropics/skills/pull/539)** | skill-creator: YAML description validation | Prevents silent frontmatter corruption; developer-experience guardrail |
| **[#1734](https://github.com/anthropics/skills/pull/1734)** | Detect orphaned docx comments | Fresh (Sep 6); addresses DOCX corruption edge case from #541 |
| **[#1627](https://github.com/anthropics/skills/pull/1627)** | buffer-api Agent Skill | Portable GraphQL scheduling for any agent (Claude, Cursor, Codex, n8n); cross-ecosystem appeal |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is reliable skill authoring infrastructure — specifically, a working evaluation harness (`run_eval.py`) that accurately measures trigger rates and recall, enabling trustworthy skill creation, optimization, and quality gates across platforms (especially Windows).**

All high-engagement issues (#556, #492, #228, #189) and the most architecturally significant PRs (#1298, #1602, #1099, #1050) converge on **toolchain reliability, trust boundaries, and distribution friction** — not on new domain skills. The ecosystem is bottlenecked on *meta-tooling* before it can scale domain coverage.

---

# Claude Code Community Digest — 2026-09-07

---

## 1. Today's Highlights

No new releases in the last 24 hours. Community attention is focused on two critical regressions: a **cyber safeguard block affecting CVP-approved organizations** (197 comments) and **Claude Code freezing for 5–20 minutes on prompts** (130 comments, 151 👍). Meanwhile, a batch of 16 plugin/script fixes landed, primarily addressing Windows path handling, shell injection, and security-guidance glob patterns.

---

## 2. Releases

*None in the last 24 hours.*

---

## 3. Hot Issues (Top 10 by Impact & Engagement)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#84352](https://github.com/anthropics/claude-code/issues/84352) | **CVP-approved org still receives cyber safeguard blocks** | Approved Cyber Verification Program orgs are being blocked; verification portal shows "Under review" despite prior approval email. Blocks production workflows for vetted teams. | 197 comments, 27 👍 — highest engagement in dataset |
| [#26224](https://github.com/anthropics/claude-code/issues/26224) | **Claude Code hangs/freezes 5–20+ min on prompts** | Long-standing (since Feb) critical performance regression; model becomes unresponsive mid-session. Affects all platforms. | 130 comments, 151 👍 — most upvoted bug |
| [#80015](https://github.com/anthropics/claude-code/issues/80015) | **Task-list tools (TaskCreate/TaskUpdate/TaskList/TaskGet) no longer exposed to model** | Recent update removed task-management tools from model toolset; tasks visible in UI but model cannot create/read/modify them. Breaks agentic workflows. | 14 comments, 13 👍 |
| [#13517](https://github.com/anthropics/claude-code/issues/13517) | **Custom statusLine command in settings.json not executed** | TUI status line customization broken on macOS; command defined in `~/.claude/settings.json` never runs. | 23 comments, 21 👍 |
| [#76694](https://github.com/anthropics/claude-code/issues/76694) | **Cowork: "Choose a folder" lost after Chat/Cowork merge** | Context menu replaced with Chat-style upload-only knowledge menu; cannot select project folders for Cowork. UX regression. | 12 comments, 15 👍 |
| [#67500](https://github.com/anthropics/claude-code/issues/67500) | **Context compaction loses critical behavioral rules** | After compaction, model drops session status block, memory writes, no-stop policy. Recurring across sessions. | 12 comments |
| [#82131](https://github.com/anthropics/claude-code/issues/82131) | **Autocompact thrashing: context refills to limit within 3 turns, 3× in a row** | Compaction loop renders sessions unusable; context rebounds too fast. | 12 comments |
| [#91188](https://github.com/anthropics/claude-code/issues/91188) | **Make auto-memory compaction reminder threshold configurable** | Hardcoded 200 lines / 25 KB trigger forces unwanted compaction reminders; no suppression option. | 28 comments |
| [#45810](https://github.com/anthropics/claude-code/issues/45810) | **Marketplace update button disabled even when update available** | Plugin marketplace UI shows update but button greyed out/non-interactive. Blocks plugin maintenance. | 17 comments, 8 👍 |
| [#80148](https://github.com/anthropics/claude-code/issues/80148) | **Setting to disable automatic editor group locking in VS Code extension** | Extension locks editor groups automatically; users want opt-out for custom workflow. | 5 comments, 13 👍 |

---

## 4. Key PR Progress (10 Notable)

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#87079](https://github.com/anthropics/claude-code/pull/87079) | `fix(security-guidance): make ** glob patterns match zero-depth paths` | **Open** | Fixes silent exclusion of top-level files from security-patterns.json rules; `**/*.ts` now matches `foo.ts` at root. |
| [#68707](https://github.com/anthropics/claude-code/pull/68707) | `feat(bug-reporter): add /bug command to file GitHub issues from terminal` | **Closed** | New `bug-reporter` plugin with `/bug` slash command for in-terminal issue filing. |
| [#68689](https://github.com/anthropics/claude-code/pull/68689) | `fix(security-guidance): block symlink escape in extensibility config reads` | **Closed** | Prevents symlink-based local file disclosure (e.g., `.claude/claude-security-guidance.md` → `~/.ssh/id_rsa`). |
| [#68786](https://github.com/anthropics/claude-code/pull/68786) | `fix(plugin-dev): avoid shell injection in test-hook.sh via stdin redirection` | **Closed** | Fixes command injection via `$TEST_INPUT` embedded in `bash -c` string. |
| [#68785](https://github.com/anthropics/claude-code/pull/68785) | `fix(plugin-dev): hook JSON to stdout, tighten su* glob, fix CI detection & JSON injection` | **Closed** | Corrects example hooks: JSON to stdout (not stderr), safer globs, fixed CI detection. |
| [#68701](https://github.com/anthropics/claude-code/pull/68701) | `fix(security-guidance): strip CRLF from Python version probe on Windows` | **Closed** | Windows `\r\n` line endings broke version comparison `[ "$v" = "3" ]`. |
| [#68699](https://github.com/anthropics/claude-code/pull/68699) | `fix(hookify): add Python wrapper and normalize plugin root paths on Windows` | **Closed** | Backslash paths in `CLAUDE_PLUGIN_ROOT` broke inline bash; MS Store `python3` stub returned exit 49 in non-TTY. |
| [#68694](https://github.com/anthropics/claude-code/pull/68694) | `fix(security-guidance): normalize CLAUDE_PLUGIN_ROOT path separators on Windows` | **Closed** | All six hook commands now convert backslashes to forward slashes. |
| [#68693](https://github.com/anthropics/claude-code/pull/68693) | `fix(scripts): add duplicate label additively, don't replace existing labels` | **Closed** | GitHub PATCH was replacing full label set; now preserves platform/area/priority labels when marking duplicate. |
| [#68702](https://github.com/anthropics/claude-code/pull/68702) | `fix(ralph-wiggum): guard PROMPT_PARTS expansion against set -u on bash 3.x (macOS)` | **Closed** | `${PROMPT_PARTS[*]}` → `${PROMPT_PARTS[*]:-}` prevents unbound variable error on macOS default bash. |

---

## 5. Feature Request Trends

1. **Memory & Context Control** — Configurable compaction thresholds (#91188), persistence of behavioral rules post-compaction (#67500), autocompact thrashing fixes (#82131).
2. **Multi-Account / Multi-Workspace Support** — Desktop sidebar sessions tied to single account (#74662); per-workspace plugin sync silent failures (#90329).
3. **IDE Integration Polish** — Disable auto editor-group locking in VS Code (#80148), inline image rendering in VS Code sidebar (WSL) (#85520).
4. **Terminal UX Enhancements** — Terminal graphics protocols for inline images (#79706), statusLine command execution (#13517), Japanese text search in Desktop (#85518).
5. **Plugin/Marketplace Reliability** — Update button enablement (#45810), sync/download reliability (#90329), Cowork project chat sorting (#87723).

---

## 6. Developer Pain Points (Recurring Frustrations)

| Area | Pattern | Representative Issues |
|------|---------|----------------------|
| **Performance & Stability** | Freezes/hangs 5–20 min; Bash tool kills commands at ~5 s (EDR interaction); autocompact thrashing | [#26224](https://github.com/anthropics/claude-code/issues/26224), [#92586](https://github.com/anthropics/claude-code/issues/92586), [#82131](https://github.com/anthropics/claude-code/issues/82131) |
| **Context / Memory Loss** | Compaction drops session rules, memory writes, task tools; no recovery | [#67500](https://github.com/anthropics/claude-code/issues/67500), [#80015](https://github.com/anthropics/claude-code/issues/80015) |
| **Security / Auth False Positives** | CVP-approved orgs blocked; cyber safeguard re-triggers despite approval | [#84352](https://github.com/anthropics/claude-code/issues/84352) |
| **Windows-Specific Breakage** | Bash tool env grows unbounded (hook `CLAUDE_ENV_FILE`); path separators; case-sensitive drive-letter comparison | [#78146](https://github.com/anthropics/claude-code/issues/78146), [#91618](https://github.com/anthropics/claude-code/issues/91618) |
| **Plugin/Extension UX** | Marketplace update button dead; plugin sync green but no download; Cowork folder picker removed | [#45810](https://github.com/anthropics/claude-code/issues/45810), [#90329](https://github.com/anthropics/claude-code/issues/90329), [#76694](https://github.com/anthropics/claude-code/issues/76694) |
| **Model Behavior** | Unwanted file deletions; model downgrades (Fable 5.1 → Opus 4.8) for unclear reasons; AskUserQuestion corrupts CJK text | [#92589](https://github.com/anthropics/claude-code/issues/92589), [#92591](https://github.com/anthropics/claude-code/issues/92591), [#92588](https://github.com/anthropics/claude-code/issues/92588) |

---

*Digest generated from GitHub data (anthropics/claude-code) as of 2026-09-07 00:00 UTC.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-09-07

---

## 1. Today's Highlights

No new releases shipped today. The repository saw a surge of **20 PRs merged** (mostly by `copyberry[bot]`), focusing on TUI polish, worktree management, voice playback, Bazel/Cargo build hygiene, and remote-session permission handling. On the issue side, **Windows desktop stability dominates** — missing "Control Other Devices" tab, paginated history stalls, app launch failures, and GPT-5.5 404 errors — while **rate-limit and safety-check false positives** are spiking across CLI and desktop.

---

## 2. Releases

*None in the last 24 hours.*

---

## 3. Hot Issues (Top 10)

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| **[#28919](https://github.com/openai/codex/issues/28919)** Windows: missing “Control Other Devices” tab in Settings → Connections | Blocks remote-device pairing on Windows; 59 👍, 63 comments since June | **High** — long-standing, Pro subscribers affected |
| **[#41079](https://github.com/openai/codex/issues/41079)** Windows: paginated thread history stalls on duplicate ordinal | Local history projection desyncs from canonical JSONL; messages disappear from UI | **High** — 30 comments, data-integrity concern |
| **[#34499](https://github.com/openai/codex/issues/34499)** Cannot create local Work chat inside ChatGPT Project (Windows) | Breaks project-scoped workflows for Plus/Business users | **Medium-High** — 15 👍, 23 comments |
| **[#41960](https://github.com/openai/codex/issues/41960)** Windows: Pets don’t respond to clicks/drag | UI interaction regression in desktop pet system | **Medium** — 24 👍, 20 comments |
| **[#42663](https://github.com/openai/codex/issues/42663)** Remote SSH: VS Code extension fails on Node 22 (`using` syntax parse error) | Blocks remote development on modern Node; requires Node 20 fallback | **High** — 5 👍, 10 comments, CI/CD impact |
| **[#42501](https://github.com/openai/codex/issues/42501)** Windows 26.901.1978.0: UI never appears (cua_node staging copy failure) | App launches background processes but no window; Store update broke launch | **High** — 10 comments, launch blocker |
| **[#40939](https://github.com/openai/codex/issues/40939)** CLI cannot use Luna Reserve after standard limit exhausted | Entitlement mismatch between CLI and desktop app for same account | **Medium** — 9 comments, billing/quota friction |
| **[#43344](https://github.com/openai/codex/issues/43344)** *New today* Windows: GPT-5.5 returns 404 “model not found” in new conversations | Model routing regression on Windows desktop; Pro subscribers hit immediately | **Critical** — 3 comments, 1 👍, filed today |
| **[#43312](https://github.com/openai/codex/issues/43312)** *New today* Repeated false-positive cybersecurity safety checks escalate to near-every-turn | Safety system cascades; affects both ChatGPT and Codex | **High** — 2 comments, cross-product impact |
| **[#43124](https://github.com/openai/codex/issues/43124)** macOS: history freezes at older turns (projection ordinal mismatch) | Same paginated-history stall pattern as Windows #41079, now on macOS | **Medium** — 5 comments, cross-platform signal |

---

## 4. Key PR Progress (Top 10)

| PR | Summary | Impact |
|----|---------|--------|
| **[#43340](https://github.com/openai/codex/pull/43340)** Enable remote named permission profile selection in TUI | Fixes disabled dropdown for custom server-side permission profiles | Remote-session UX |
| **[#43330](https://github.com/openai/codex/pull/43330)** Preserve saved permissions when resuming/forking remote tasks | Prevents local overrides from clobbering server-side permission state | Remote-session correctness |
| **[#43286](https://github.com/openai/codex/pull/43286)** Add managed worktree browser to TUI | Searchable `/worktree` view with owner metadata, resume/copy actions | Developer workflow (TUI) |
| **[#43279](https://github.com/openai/codex/pull/43279)** Include linked worktrees in TUI session discovery | Fixes missed conversations in linked worktrees; moves Git ops off event loop | Session discovery + perf |
| **[#43248](https://github.com/openai/codex/pull/43248)** Connect voice-host RTP audio to speaker playback | Implements GStreamer pipeline with jitter buffer, speaker suppression | Voice mode functionality |
| **[#43244](https://github.com/openai/codex/pull/43244)** Add bounded GStreamer playback components to voice host | Bounded mono F32LE writer, cancellation on epoch change | Voice reliability |
| **[#43308](https://github.com/openai/codex/pull/43308)** Replace Windows app-server shutdown files with socket requests | `/daemon/shutdown` endpoint with PID acknowledgment; removes file-based race | Windows daemon robustness |
| **[#43304](https://github.com/openai/codex/pull/43304)** Isolate Bazel build commit metadata from Rust compilation inputs | Prevents remote-cache misses from stamped user/host/timestamp values | Build reproducibility / CI speed |
| **[#43282](https://github.com/openai/codex/pull/43282)** Make Bazel binary stamping opt-in | `stamped_binaries` list in `codex_rust_crate`; default empty | Cache efficiency |
| **[#43281](https://github.com/openai/codex/pull/43281)** Move npm package staging into separate release workflow job | Staging with `contents: read`, artifact upload, release job downloads | Release pipeline security/separation |

> *All above PRs were closed/merged today by `copyberry[bot]`. One notable open PR: **[#31471](https://github.com/openai/codex/pull/31471)** (faster-connectors) extracting apps cache into `ConnectorRuntimeManager`.*

---

## 5. Feature Request Trends

1. **Remote/SSH development parity** — Node version compatibility (#42663), permission profile sync (#43340, #43330), worktree discovery (#43279).
2. **Session/history integrity** — Paginated projection stalls on Windows (#41079) and macOS (#43124); working-directory tracking after rename (#26836); ghost conversations (#41987).
3. **Voice mode maturity** — RTP playback (#43248, #43244), floating-orb click-through (#43226).
4. **Model/entitlement routing** — Luna Reserve in CLI (#40939), GPT-5.5 404 (#43344), capacity errors (#42169, #43322).
5. **Safety-check observability** — False-positive cybersecurity flags cascading (#43312, #43321, #43237).

---

## 6. Developer Pain Points

| Pain Point | Evidence |
|------------|----------|
| **Windows desktop instability** | Launch failures (#42501), missing settings tabs (#28919), history stalls (#41079), window sizing bugs (#42493), pet/input regressions (#41960, #43226) |
| **Remote SSH broken on Node 22** | `using` syntax parse error in extension bundle (#42663) forces Node 20 pinning |
| **Rate-limit / quota opacity** | Luna Reserve not honored in CLI (#40939), “model at capacity” storms (#42169, #43322), allowance burn rate complaints (#43341) |
| **Safety false positives escalating** | Cybersecurity flag cascades across products (#43312), GPT-6 Astra rejecting `hi` (#43237), GPT-5.6 Sol `protectionType=cyber` leak (#43321) |
| **Session sync across surfaces** | Ghost sidebar entries (#41987), working-directory drift after rename (#26836), remote resume permission clobber (#43330) |
| **Build/release friction** | Bazel stamp pollution invalidating remote cache (#43304), npm staging coupled to release job (#43281) |

---

*Generated from `github.com/openai/codex` data as of 2026-09-07 00:00 UTC. All links point to live GitHub items.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-09-07

## 1. Today's Highlights
- **Critical Enterprise auth regression** (#29101) blocks Google Workspace accounts despite valid Cloud Project configuration — 35 comments, P1 priority.
- **Session deletion safety gap** (#29133/#29134): `--list-sessions` fails to mark the active session, allowing `--delete-session` to remove the live session; fix PR #29134 is open.
- **Nightly v0.60.0** released with symlinked-workspace glob fixes, MCP tool-name collision guards, CRLF handling improvements, and Node 22 sandbox base image.

## 2. Releases
| Version | Type | Key Changes |
|---------|------|-------------|
| **v0.60.0-nightly.20260907.g85aca163f** | Nightly | • Fix glob for symlinked workspace roots (#28975)  • Prevent MCP tool-name collisions after truncation (#28971)  • Detect mixed line endings correctly (#28983)  • Bump sandbox image to `node:22-slim` (Node 20 EOL) (#28973)  • Guard `formatTruncatedToolOutput` against non-positive `maxChars` (#28972)  • Document missing `HookDecision` values (#28978) |

[Full Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.60.0-nightly.20260906.g85aca163f...v0.60.0-nightly.20260907.g85aca163f)

## 3. Hot Issues (Top 10 by Community Impact)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| **#29101** | [Auth failure blocking Enterprise Workspace accounts](https://github.com/google-gemini/gemini-cli/issues/29101) | Blocks all Enterprise users on Workspace + Cloud Project setup; P1, 35 comments, 2👍 | 🔥 **Highest engagement** — active investigation needed |
| **#22323** | [Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323) | Masks subagent failures; undermines trust in autonomous workflows | 13 comments, 2👍 — long-standing (Mar 2026) |
| **#21409** | [Generalist agent hangs forever](https://github.com/google-gemini/gemini-cli/issues/21409) | Core agent unusable when deferring to generalist; 8👍 shows broad impact | 8 comments, 8👍 — workaround: disable sub-agents |
| **#29133** | [`--list-sessions` never marks current session](https://github.com/google-gemini/gemini-cli/issues/29133) | Data-loss risk: live session deletable via CLI; interactive browser works correctly | 9 comments — PR #29134 open |
| **#19873** | [Leverage model's bash affinity via Zero-Dependency OS Sandboxing](https://github.com/google-gemini/gemini-cli/issues/19873) | Strategic: align tooling with Gemini 3's native bash training; large effort | 9 comments, 1👍 — epic tracking |
| **#25166** | [Shell command execution stuck at "Waiting input"](https://github.com/google-gemini/gemini-cli/issues/25166) | Frequent hangs on simple commands; 3👍 indicates common pain | 4 comments, 3👍 — P1, needs retesting |
| **#26525** | [Add deterministic redaction & reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525) | Security: secrets enter model context before redaction; skill logging exposure | 5 comments — P2 security |
| **#24246** | [400 error with > 128 tools](https://github.com/google-gemini/gemini-cli/issues/24246) | Hard tool limit breaks extensibility; needs smarter scoping | 3 comments — P2 core |
| **#22745** | [Assess AST-aware file reads/search/mapping](https://github.com/google-gemini/gemini-cli/issues/22745) | Potential token/turn reduction via precise code navigation | 7 comments, 1👍 — investigative epic |
| **#22672** | [Agent should discourage destructive behavior](https://github.com/google-gemini/gemini-cli/issues/22672) | Safety: model uses `git reset --force`, DB mutations without safeguards | 3 comments, 1👍 — P2 |

## 4. Key PR Progress (Top 10 by Significance)

| # | PR | Status | Summary |
|---|----|--------|---------|
| **#29134** | [fix(cli): protect current session from deletion](https://github.com/google-gemini/gemini-cli/pull/29134) | **OPEN** | Passes active session ID to `--list-sessions`/`--delete-session`; matches by short-ID suffix; adds regression tests. Fixes #29133. |
| **#28975** | [fix(core): keep glob results for symlinked workspace roots](https://github.com/google-gemini/gemini-cli/pull/28975) | **CLOSED** | Resolves macOS `/tmp` → `/private/tmp` symlink issue (#28416); broader than original bug. |
| **#28971** | [fix(core): keep truncated MCP tool names unique](https://github.com/google-gemini/gemini-cli/pull/28971) | **CLOSED** | Prevents registry collisions when two MCP tools share first/last 30 chars after truncation. |
| **#28983** | [fix(core): detect mixed line endings instead of flagging CRLF on single match](https://github.com/google-gemini/gemini-cli/pull/28983) | **CLOSED** | Improves `detectLineEnding()` to require majority CRLF; avoids false CRLF classification. |
| **#28973** | [fix(sandbox): bump sandbox image to node:22-slim](https://github.com/google-gemini/gemini-cli/pull/28973) | **CLOSED** | Security: Node 20 EOL (2026-04-30); moves builder + runtime to Node 22 LTS. |
| **#29131** | [fix(core): normalize line endings in getDiffContextSnippet](https://github.com/google-gemini/gemini-cli/pull/29131) | **OPEN** | Prevents full-file diff dumps on CRLF/LF mismatch; fixes context bloat in model input. |
| **#29132** | [fix(core): normalize line endings in diff context snippets](https://github.com/google-gemini/gemini-cli/pull/29132) | **OPEN** | Complementary fix for diff snippet generation; adds CRLF regression test. |
| **#29184** | [fix(core): validate git args in Windows sandbox to block silent `git diff --output`](https://github.com/google-gemini/gemini-cli/pull/29184) | **OPEN** | Security: `git diff --output=<path>` truncates files silently on Windows (read-only bypass). |
| **#29229** | [fix(cli): reject non-finite numbers in settings editor](https://github.com/google-gemini/gemini-cli/pull/29229) | **OPEN** | `Number.isFinite` guards against `Infinity`/`NaN` corrupting JSON settings (fixes #29226). |
| **#29106** | [fix(core): flush final SSE event on EOF without trailing blank line](https://github.com/google-gemini/gemini-cli/pull/29106) | **CLOSED** | Recovers `finishReason`/usage metadata lost on truncated/non-conformant streams. |

## 5. Feature Request Trends
1. **Subagent observability & control** — Trajectory sharing (#22598), context in bug reports (#21763), settings propagation (#22267), recovery semantics (#22323).
2. **AST-aware code intelligence** — Precise reads, search, mapping to cut turns/tokens (#22745, #22746, #19873).
3. **Memory system hardening** — Deterministic redaction, inbox quarantine, retry limits (#26525, #26522, #26523, #26516).
4. **Agent self-awareness** — Accurate CLI flags, hotkeys, self-execution knowledge (#21432).
5. **Browser agent resilience** — Profile lock recovery, Wayland support, settings overrides (#22232, #21983, #22267).
6. **Terminal UX polish** — Flicker-free resize (#21924), `/compress` persistence (#21335), symlink agent recognition (#20079).

## 6. Developer Pain Points (Recurring Frustrations)
| Pain Point | Evidence |
|------------|----------|
| **Enterprise auth broken** | #29101: 35 comments, P1, blocks Workspace+Cloud Project flow |
| **Agent hangs / silent failures** | #21409 (generalist), #25166 (shell "Waiting input"), #22465 (interactive prompts) |
| **Subagent opacity** | #22323 (false success), #21763 (no context in bugs), #21968 (under-utilization) |
| **Session/data safety** | #29133 (live session deletable), #21335 (`/compress` not persisted) |
| **Tooling limits** | #24246 (128-tool cap), #23571 (scattered tmp scripts), #22466 (`\n` escape bugs) |
| **Security surface** | #29184 (Windows `git diff --output`), #26525 (secrets in context), #28973 (Node 20 EOL) |
| **Cross-platform line-ending bugs** | #28983, #29131, #29132 — multiple PRs in one cycle |

---

*Digest generated from github.com/google-gemini/gemini-cli data as of 2026-09-07. Nightly releases daily; issues/PRs reflect 24h update window.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-09-07

---

## 1. Today's Highlights

No new releases shipped in the last 24 hours. The issue tracker shows **21 active items**, with enterprise/authentication regressions and ACP-mode stability dominating discussion. A long-standing request for **project-scoped plugins (#1665)** was closed after 18 👍, while a critical **BYOK prompt-caching regression (#4720)** and **WSL2 memory leak (#4694)** remain open with zero comments — suggesting they may be under-triaged.

---

## 2. Releases

**None in the last 24 hours.**

---

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#1665](https://github.com/github/copilot-cli/issues/1665) | **Support project/repo-scoped plugins** (CLOSED) | Enables team-shared agent configurations without per-user installs; unblocks org-wide standards. | 18 👍, 14 comments — highest engagement in dataset |
| [#4720](https://github.com/github/copilot-cli/issues/4720) | **BYOK silently disables prompt caching (~5× cost)** | Every turn re-sends full context at full price; `cached_tokens=0` confirmed. Direct cost impact for BYOK users. | 0 comments — likely under-triaged; high severity |
| [#4694](https://github.com/github/copilot-cli/issues/4694) | **WSL2: 31 GB RSS / 57% CPU on long sessions** | Makes CLI unusable for extended agent runs on Windows; blocks enterprise WSL adoption. | 0 comments — critical performance regression |
| [#4695](https://github.com/github/copilot-cli/issues/4695) | **MCP OAuth tokens not reused across sessions** | Forces repeated re-auth for HTTP MCP servers; breaks seamless agent workflows. | 5 comments, active triage |
| [#4537](https://github.com/github/copilot-cli/issues/4537) | **ACP mode auto-approves tool calls (regression of #845)** | Shell commands/file edits execute unattended; security & safety regression since 1.0.81-1. | 2 👍, 2 comments — confirmed regression |
| [#4527](https://github.com/github/copilot-cli/issues/4527) | **`copilot -p` fails 401 on GHEC data residency** (CLOSED) | Non-interactive prompt mode hits wrong endpoint (`api.githubcopilot.com` vs tenant); interactive works. | 4 👍, 3 comments — enterprise blocker fixed |
| [#4692](https://github.com/github/copilot-cli/issues/4692) | **Default enterprise model not recognized in CLI** | Org-set model `MAI-Code-1.1-Flash` works in VS Code/Desktop but CLI falls back; inconsistency. | 4 comments — cross-surface parity gap |
| [#4743](https://github.com/github/copilot-cli/issues/4743) | **ACP `end_turn` precedes background-shell completion** | Client receives `stopReason: "end_turn"` while background tools still running; autonomous follow-ups emit after RPC completes. | 0 comments — related to #4555, breaks ACP contract |
| [#4735](https://github.com/github/copilot-cli/issues/4735) | **Assistant text folded into "Thought for Ns" summary** | User-facing text before tool calls hidden as reasoning; UX regression for multi-paragraph responses. | 0 comments — rendering bug |
| [#4738](https://github.com/github/copilot-cli/issues/4738) | **`ask_user` form: Enter early submits/cancels, discards input** | High-severity data loss; user-typed content unrecoverable. No autosave/restore. | 0 comments — UX critical |

---

## 4. Key PR Progress

| # | PR | Summary | Status |
|---|----|---------|--------|
| [#4739](https://github.com/github/copilot-cli/pull/4739) | **docs: propose terminal-owned macOS notifications** | Documents macOS notification click problem; adds MIT-licensed terminal notification example with portable regression tests. *Reference proposal only — not a shipped change.* | Open, 0 comments |

*Only 1 PR updated in the last 24h; no code changes merged.*

---

## 5. Feature Request Trends

1. **Project/Repo-Scoped Configuration** — #1665 (closed but high demand) shows strong appetite for team-shared plugins, agents, and settings without global installs.
2. **Keyboard/Input Parity** — #2644 (Shift+Arrow, Ctrl+A), #4736 (Ctrl+E for inline autocomplete) — developers expect full readline/Emacs bindings in prompt input.
3. **ACP Protocol Hardening** — #4537, #4555, #4743, #4740 — multiple issues around permission flow, session lifecycle, and background-task signaling indicate ACP is a primary integration surface needing stability.
4. **Enterprise/GHEC Parity** — #4527, #4692 — CLI must match VS Code/Desktop for model selection, auth endpoints, and data-residency routing.
5. **Observability & Cost Control** — #4720 (prompt caching), #4733 (max_output_tokens event loss), #4694 (resource usage) — BYOK and enterprise users need predictable economics and telemetry.

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **ACP-mode regressions** | Auto-approval (#4537), session abort (#4555), `end_turn` race (#4743), voice deadlock (#4740) | 4+ issues in 24h |
| **Enterprise auth/model mismatch** | GHEC data-residency 401 (#4527), default model ignored (#4692) | 2 critical blockers |
| **BYOK cost surprises** | Prompt caching disabled silently (#4720) — 5× cost; no visibility | 1 high-impact, 0 comments |
| **WSL2 resource exhaustion** | 31 GB RSS / 57% CPU (#4694) — blocks long-running agents | 1 critical, 0 comments |
| **Input UX gaps** | No Shift+Arrow selection (#2644), Enter destroys form input (#4738), Ctrl+E missing (#4736) | 3+ keyboard issues |
| **Rendering/reasoning confusion** | User text hidden as "Thought" (#4735), malformed tool markup (#4706) | 2 display bugs |
| **MCP/OAuth session persistence** | Token cache fragmentation (#4695) forces re-auth | 1 active |

---

*Digest generated from github.com/github/copilot-cli data as of 2026-09-07. Links point to live issues/PRs.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-09-07

## 1. Today's Highlights
- **No new releases** in the last 24 hours; development activity centers on issue triage and two open PRs.  
- The community is actively discussing **cross-device session continuity** (remote control), a **`/goal` command** for plan-driven coding, and a dedicated **plan mode** to prevent premature execution.  
- A new PR introduces **caching and path-handling improvements** for the shared-directory utility, while another addresses **double-encoded tool-call arguments** from the Moonshot API.

---

## 2. Releases
*None in the last 24 hours.*

---

## 3. Hot Issues
| # | Title & Link | Why It Matters | Community Signal |
|---|--------------|----------------|------------------|
| 1282 | [Feature Request: Remote Control – Continue local sessions from any device](https://github.com/MoonshotAI/kimi-cli/issues/1282) | Enables seamless workflow handoff between desktop and mobile/browser; high-value for hybrid/remote developers. | **32 👍**, 13 comments – strongest engagement in this batch. |
| 2252 | [Add `/goal` command & allow coding-plan import into Codex](https://github.com/MoonshotAI/kimi-cli/issues/2252) | Aligns Kimi with Codex/Claude Code plan-driven workflows; requested for interoperability with mainstream agent platforms. | 2 👍, 9 comments – indicates niche but vocal demand. |
| 1354 | [Plan mode: prevent autonomous execution before planning finishes](https://github.com/MoonshotAI/kimi-cli/issues/1354) | Addresses core UX friction: agent runs ahead of user intent. Critical for trust in planning-centric workflows. | 7 👍, 1 comment – clear pain point. |
| 1356 | [Seamless MCP skill-config migration from other CLIs](https://github.com/MoonshotAI/kimi-cli/issues/1356) | Lowers switching cost for users of Claude CLI, Cursor, Windsurf, Continue, etc.; boosts ecosystem adoption. | 0 👍, 0 comments – early signal, strategic importance. |

---

## 4. Key PR Progress
| # | Title & Link | Type | Status & Notes |
|---|--------------|------|----------------|
| 2636 | [Optimize `get_share_dir` with caching and path handling](https://github.com/MoonshotAI/kimi-cli/pull/2636) | Perf / Refactor | Opened today; adds memoization and robust path resolution for shared assets. Author notes “was bored so did this.” |
| 2513 | [fix(kosong): recursively decode double-encoded tool-call arguments](https://github.com/MoonshotAI/kimi-cli/pull/2513) | Bug Fix | Open since Jul-19; resolves Pydantic validation failures caused by nested JSON strings in `function.arguments`. Includes shared `decode_tool_arguments` helper. |

---

## 5. Feature Request Trends
1. **Session portability** – Remote control / cross-device sync (Issue #1282).  
2. **Plan-driven interaction** – `/goal` command, explicit plan mode, import/export of coding plans (Issues #2252, #1354).  
3. **Ecosystem interoperability** – MCP config migration, Codex plan import (Issues #1356, #2252).  
4. **Execution control** – Preventing premature tool calls during planning phase (Issue #1354).

---

## 6. Developer Pain Points
- **Unintended autonomous execution**: Agents act before the user finishes describing the plan, eroding trust.  
- **Fragmented configs**: Re-creating MCP/skill definitions across CLI tools creates friction for polyglot users.  
- **API payload quirks**: Double-encoded JSON in tool-call arguments forces client-side workarounds (PR #2513).  
- **Session lock-in**: Inability to resume a local CLI session from another device disrupts flow.

---

*Data sourced from `github.com/MoonshotAI/kimi-cli` — Issues & PRs updated 2026-09-06 → 2026-09-07.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-09-07

## Today's Highlights
OpenCode's v2 development continues with a major performance overhaul: a three-PR stack (#47704–#47706) rearchitects renderer persistence to mirror VS Code's `Memento` model, introducing namespace-cached storage, scheduled serialization, and content-addressed chunking for large draft text. Meanwhile, the plugin system gains session title hooks and declarative command registration (#47663, #47719), and TeamJules automation lands worker-swarm orchestration with GitPigeon P2P mesh sync (#47669, #47656). On the bug front, a critical agent loop (277 MCP calls) and AWS SSO credential refresh remain top community pain points.

---

## Releases
No new releases in the last 24 hours.

---

## Hot Issues (Top 10 by Impact & Community Signal)

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| **[#1934](https://github.com/anomalyco/opencode/issues/1934)** Feat: Auto-run `aws sso login` on credential expiry | High-frequency pain for AWS users; credentials expire multiple times daily. | 👍 14, 8 comments — **Closed** (impl. likely in v2) |
| **[#33490](https://github.com/anomalyco/opencode/issues/33490)** GLM-5.2 via OpenCode Go rejects `instructions` field | Provider integration bug blocks Z.ai models; affects Go subscription users. | 7 comments, 👍 3 — **Closed** |
| **[#35294](https://github.com/anomalyco/opencode/issues/35294)** Desktop: blocking `models.dev` fetch causes "Local Server could not be reached" | Startup regression in v1.17.12+; network hiccup bricks the app. | 4 comments — **Closed** |
| **[#31942](https://github.com/anomalyco/opencode/issues/31942)** Agent loops 277× on MCP `resource_list` without circuit breaker | Runaway agent burns token budget; no loop detection exists. | 3 comments — **Closed** |
| **[#35326](https://github.com/anomalyco/opencode/issues/35326)** `opencode web` doesn't inherit terminal CWD | UX friction: web UI starts at `/` instead of project root. | 5 comments, 👍 1 — **Closed** |
| **[#47715](https://github.com/anomalyco/opencode/issues/47715)** TUI: question tabs wrap mid-word with many questions | Usability regression in v2; labels like `Movies` → `Movi`/`es`. | 2 comments — **Open** (new today) |
| **[#47716](https://github.com/anomalyco/opencode/issues/47716)** Together AI: token usage always 0 (missing `stream_options.include_usage`) | Cost tracking broken for all Together AI models; DB stores zeros. | 2 comments — **Open** (new today) |
| **[#47721](https://github.com/anomalyco/opencode/issues/47721)** Request accumulates 52 images, exceeds provider max of 50 | Image-heavy sessions hit hard provider limits; no auto-pruning. | 1 comment — **Open** (new today, tagged `[2.0]`) |
| **[#47710](https://github.com/anomalyco/opencode/issues/47710)** Desktop GUI doesn't pass shell `PATH` to plugin subprocesses | Plugins relying on external CLIs break when launched from GUI. | 1 comment — **Open** (new today, `needs:compliance`) |
| **[#35900](https://github.com/anomalyco/opencode/issues/35900)** Improve Plan Mode UX with dedicated planning doc + Build workflow | Community-requested separation of planning vs. implementation. | 2 comments, 👍 3 — **Closed** |

---

## Key PR Progress (Top 10 by Technical Significance)

| PR | Type | Summary |
|----|------|---------|
| **[#47706](https://github.com/anomalyco/opencode/pull/47706)** | Perf | **Externalize large draft text into content-addressed chunks** — 3rd layer of VS Code-style persistence; big pastes upload one chunk per save. |
| **[#47705](https://github.com/anomalyco/opencode/pull/47705)** | Perf | **Serialize persisted stores on a schedule** — replaces per-setter writes with batched flushes (owner cleanup, page hide). |
| **[#47704](https://github.com/anomalyco/opencode/pull/47704)** | Perf | **Cache storage namespaces & batch writes in renderer** — 1st layer: bulk load per namespace, `Map` reads, single bulk write per window. |
| **[#47663](https://github.com/anomalyco/opencode/pull/47663)** | Feature | **Plugin: session title hook + request options bag** — splits session request hooks by LLM request type; shared `SessionRequestOptions` type. |
| **[#47719](https://github.com/anomalyco/opencode/pull/47719)** | Feature | **Plugin: register template commands** — declarative `template`/`agent`/`model`/`subagent` commands for Promise & Effect plugins. |
| **[#47669](https://github.com/anomalyco/opencode/pull/47669)** | Feature | **TeamJules: worker swarm + AutomationQueue priority ordering** — multi-agent orchestration with priority queues. |
| **[#47656](https://github.com/anomalyco/opencode/pull/47656)** | Feature | **TeamJules: GitPigeon live mesh sync** — P2P sync of agent worktrees with dispatcher, API handler, and Session UI for live streaming. |
| **[#47640](https://github.com/anomalyco/opencode/pull/47640)** | Feature | **Preview & text extraction for Office files & PDF** — offline document preview + attachment text extraction. |
| **[#47702](https://github.com/anomalyco/opencode/pull/47702)** | Bug Fix | **Route Muse Spark models to Responses API** — fixes 0-token/500 errors for Spark 1.2/1.3 (contributor/free tiers). |
| **[#44825](https://github.com/anomalyco/opencode/pull/44825)** | Bug Fix | **Route filesystem through Location environment** — canonicalizes paths, reads, listings via Location env (fixes worktree issues). |

---

## Feature Request Trends (from all Issues)

1. **Session Portability & Backup** — Export/import session history across machines (#34875, #47713); configurable retention/cleanup for unbounded SQLite growth.
2. **Project Identity Decoupling** — Configurable project name independent of folder name (#47708).
3. **Plan Mode Evolution** — Dedicated planning document, Build workflow separation, better UX (#35900).
4. **Cloud Credential Automation** — Auto-refresh for AWS SSO (#1934), GCP Vertex env var support (#35880).
5. **Linux CLI Clipboard Fixes** — Bundle `xclip`/`xsel`/`wl-clipboard` (#35977, #35978).
6. **Timeline & Navigation Enhancements** — Tab/Shift-Tab cycling in timeline popup (#39438), server-side pagination for long sessions (#35895).
7. **Provider Coverage & Correctness** — Firecrawl developer search (#46534), Together AI usage tracking (#47716), Muse Spark API routing (#47702).

---

## Developer Pain Points (Recurring Themes)

| Pain Point | Frequency | Representative Issues |
|------------|-----------|----------------------|
| **AWS SSO credential expiry requires manual `aws sso login`** | High (daily for some) | #1934 |
| **Desktop app startup blocked by network calls** | Regression in v1.17.12+ | #35294 |
| **Agent runaway loops (no circuit breaker)** | Critical (token burn) | #31942 |
| **TUI usability: tab wrapping, copy/paste, text selection** | Multiple | #47715, #35977, #35978, #47717 |
| **Token usage tracking broken for providers** | Together AI, GLM | #47716, #33490 |
| **JSON config corruption from MCP tool edits** | Crashes on syntax error | #35954 |
| **Long-running bash commands cannot be interrupted** | Blocks workflow | #37007, #41753 |
| **Desktop GUI doesn't propagate shell `PATH` to plugins** | Breaks CLI-dependent plugins | #47710 |
| **Update prompts recommend older versions** | v2 beta confusion | #47714 |
| **Worktree sessions break SSE event filtering** | Location mismatch | #35917 |

---

*Digest generated from GitHub data (anomalyco/opencode) as of 2026-09-07. Links point to live issues/PRs.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-09-07

## Today's Highlights
The community is heavily focused on **provider reliability** and **Windows parity** this cycle. A critical `openai-codex`/`gpt-5.5` streaming stall (#4945, 76 comments) remains the top pain point, while a broad Windows strategy discussion (#7547, 57 comments) signals growing demand for first-class Windows support. Meanwhile, core maintainers merged fixes for cross-provider fallback on transport errors, DNS resolution for split-horizon hosts (MagicDNS/Tailscale), and Copilot GPT-6 Astra routing — all landing in the last 24 hours.

---

## Releases
*No new releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#4945](https://github.com/earendil-works/pi/issues/4945) | **openai-codex Connection Reliability Issues** | `gpt-5.5` TUI freezes on "Working…" with no stream, tool call, or error; only Escape recovers. Blocks daily workflows for heavy Codex users. | 76 comments, 32 👍 — highest engagement in repo |
| [#7547](https://github.com/earendil-works/pi/issues/7547) | **Windows: How do you use Pi? What issues are you seeing?** | Meta-issue to prioritize Windows investment (WSL, native, MSYS, PowerShell). Outcome shapes docs, CI, and out-of-box experience. | 57 comments, 2 👍 — broad community census |
| [#9052](https://github.com/earendil-works/pi/issues/9052) | **Fullscreen mode wheel scrolling 3× slower than regular** | UX regression: fixed input box is great, but scroll speed makes long transcripts painful. | 6 comments, 3 👍 |
| [#8826](https://github.com/earendil-works/pi/issues/8826) | **Cap agent retry backoff for prolonged transient outages** | Exponential backoff unbounded during multi-hour upstream outages (503, "too many open files"); needs configurable ceiling. | 4 comments |
| [#9229](https://github.com/earendil-works/pi/issues/9229) | **Windows: `shell_path` ignored, prefers WSL bash even when WSL disabled** | Config regression: `shell_path` in `settings.json` not respected; `wsl.exe` presence triggers WSL bash despite feature off. | 4 comments |
| [#9209](https://github.com/earendil-works/pi/issues/9209) | **Copilot GPT-6 Astra routed to unsupported Chat Completions endpoint** | Model rejected with 400: "not accessible via /chat/completions". Requires Responses API routing. | 4 comments |
| [#8823](https://github.com/earendil-works/pi/issues/8823) | **Esc during streaming fails to cancel in-flight request** | Abort registered but HTTP request continues until provider finishes; turn persists with `stopReason: "aborted"`. | 3 comments |
| [#9246](https://github.com/earendil-works/pi/issues/9246) | **anthropic-messages: spend unused 4th cache breakpoint on stable checkpoint** | Only 3 of 4 Anthropic cache breakpoints used (system, last tool, last user); 4th wasted — opportunity for conversation checkpoint. | 3 comments |
| [#9247](https://github.com/earendil-works/pi/issues/9247) | **JSON/RPC: expose provider-native terminal failure classification** | Extensions need machine-readable failure types (context overflow, rate limit, refusal, unknown) + retryability for smart recovery. | 3 comments |
| [#8306](https://github.com/earendil-works/pi/issues/8306) | **Fullscreen TUI image rendering error** | Only top line of images displayed; caused by incorrect refresh logic in fullscreen mode. | 3 comments |

---

## Key PR Progress

| # | PR | Summary | Status |
|---|----|---------|--------|
| [#9259](https://github.com/earendil-works/pi/pull/9259) | **feat(coding-agent): apply steering message promptly by interrupting running turn** | Long-running tool calls (slow installs, tests) now interrupted immediately when user sends steering message; no more queueing until turn ends. | Closed |
| [#9261](https://github.com/earendil-works/pi/pull/9261) | **feat(ai): add `sendStrictToolField` compat flag** | Allows Anthropic-compatible gateways (AWS Bedrock proxies) that require `additionalProperties: false` but reject top-level `strict: true`. | Closed |
| [#6881](https://github.com/earendil-works/pi/pull/6881) | **feat(ai): use provider-reported cost when responses include it** | Reads `usage.cost` / `cost_details.upstream_inference_cost` from OpenAI, Anthropic, Vercel AI Gateway; falls back to catalog rates. | Open (in progress) |
| [#9253](https://github.com/earendil-works/pi/pull/9253) | **fix(ai): route Copilot GPT models through Responses (fixes astra)** | Switches `github-copilot/gpt-6-astra` to Responses API; removes legacy GPT-4 routing logic. | Open |
| [#9252](https://github.com/earendil-works/pi/pull/9252) | **fix(coding-agent): pin undici connect lookup to system `dns.lookup`** | Fixes `ENOTFOUND` for MagicDNS/Tailscale hosts by forcing Node's system resolver (nsswitch, /etc/hosts) in undici dispatcher. | Closed |
| [#9251](https://github.com/earendil-works/pi/pull/9251) | **feat(coding-agent): hop to fallback provider on transport errors** | Opt-in cross-provider fallback chain on DNS/timeout/connection refused; session continues on configured backup provider. | Closed |
| [#9080](https://github.com/earendil-works/pi/pull/9080) | **feat(tui): add jump-to-latest control** | New UI affordance to instantly scroll to newest message; based on @dgtlntv's prototype. | Closed |
| [#9233](https://github.com/earendil-works/pi/pull/9233) | **fix(coding-agent): resolve model auth live instead of startup snapshot** | Avoids race where unawaited background auth refresh leaves `configuredProviders` unsettled at startup, causing false "unconfigured" errors. | Closed |
| [#7610](https://github.com/earendil-works/pi/pull/7610) | **feat(ai): add LLM Gateway & LLM Gateway DevPass providers** | Built-in `openai-completions` providers for llmgateway.io (OpenRouter-style router), contributed by LLM Gateway team. | Open |
| [#9227](https://github.com/earendil-works/pi/pull/9227) | **feat(coding-agent): add per-call tool confirmation extension** | Extension point for per-tool-call approval UI; enables human-in-the-loop workflows. | Closed |

---

## Feature Request Trends
1. **Provider resilience & fallback** — Multiple issues/PRs around retry caps (#8826), cross-provider failover (#9242, #9251), and live auth resolution (#9233) show a push for production-grade reliability.
2. **Windows first-class support** — Shell detection (#9229), keybinding quirks (#7175), path separators (#9262), CRLF leakage (#9264), and the strategy meta-issue (#7547) form a coherent Windows workstream.
3. **Extension API maturity** — Acknowledged user-turn delivery (#9236), runtime TUI mode switching (#9238), per-call tool confirmation (#9227), and failure classification (#9247) indicate extensions evolving from toys to platform primitives.
4. **Provider compatibility layer** — Anthropic `strict` field decoupling (#9261), OpenCode Go session header (#9230, #9237), Copilot Responses API routing (#9253), and LLM Gateway (#7610) reflect a "bring your own gateway" reality.
5. **Cost observability** — Provider-reported cost ingestion (#6881) and cache breakpoint optimization (#9246) target real-world spend control.

---

## Developer Pain Points
- **Streaming stalls & uncancellable requests** — `#4945` (Codex freeze) and `#8823` (Esc no-op) erode trust in long-running agent loops.
- **Windows death by a thousand cuts** — `shell_path` ignored, Shift+Enter submits, glob patterns with backslashes silently fail, CRLF leaks into model context, WSL detection false positives.
- **Session resume fidelity** — Images re-rendered full-size (#9256), model restored from echoed name not `model_change` (#9243), scroll position lost on redraw (#9240).
- **DNS/connectivity in managed networks** — MagicDNS/Tailscale hosts fail with `ENOTFOUND` because undici bypasses system resolver (#9244, fixed in #9252).
- **Provider-specific quirks leaking into core** — Anthropic gateway rejects `strict` field (#9263), OpenCode Go requires custom header (#9230), Copilot routes Astra wrong (#9209) — each demands a bespoke compat flag.

---

*Digest generated from `earendil-works/pi` GitHub activity (issues & PRs updated 2026-09-06 → 2026-09-07).*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-09-07

---

## 1. Today's Highlights
Two preview/nightly releases shipped with **Web Shell workflow visualization** — developers can now see and manage dynamic workflow runs directly in the browser UI. Simultaneously, the team landed foundational **multi-agent mesh admission** and **browser-use** capabilities (Chrome Native Messaging + built-in browser tasks), signaling a push toward persistent, collaborative agent workflows and web automation. A CI regression on `main` triggered an automated failure-tracking issue (#11249).

---

## 2. Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **v0.23.1-preview.1** | Preview | • `feat(web-shell)`: visualize & manage dynamic workflow runs ([#10594](https://github.com/QwenLM/qwen-code/pull/10594))<br>• `perf(web-shell)`: derive session workflow project |
| **v0.23.0-nightly.20260906.92a8a8d179** | Nightly | Same changes as preview; includes workflow visualization and project derivation |

> Both releases share the same commit (`92a8a8d`). Preview is likely the stabilized cut for wider testing.

---

## 3. Hot Issues (6 total — all shown)

| Issue | Type | Why It Matters | Community Signal |
|-------|------|----------------|------------------|
| [#3361](https://github.com/QwenLM/qwen-code/issues/3361) | **Bug** (needs triage) | Agent reads successful shell output as *empty* when using OpenAI-compatible APIs — breaks `git`, `pwd`, etc. | 6 comments, open since Apr; core reliability blocker for non-native APIs |
| [#4114](https://github.com/QwenLM/qwen-code/issues/4114) | **Bug** (needs info/triage) | Chinese report: `read_file` returns empty for multiple project files — possible encoding/path regression | 2 comments; may overlap with #3361 |
| [#11253](https://github.com/QwenLM/qwen-code/issues/11253) | **Bug** (new) | `gitCreateBranch` discards commits from a failing `post-checkout` hook — data-loss risk in hooked repos | Filed today; touches Git internals & hook safety |
| [#11249](https://github.com/QwenLM/qwen-code/issues/11249) | **CI Failure** (bot) | Main-branch CI failed on `ubuntu-latest`/Node 22 before tests ran — infra or flake | Auto-filed; blocks merge confidence |
| [#7167](https://github.com/QwenLM/qwen-code/issues/7167) | **CI/CD** (need info) | Fleet Shepherd dashboard tick — fleet health monitoring | 3 comments; operational visibility |
| [#11243](https://github.com/QwenLM/qwen-code/issues/11243) | **Feature** (daemon/web-shell) | Expose update status in WebShell + auto-follow nightly releases — white-label & self-update UX | 1 comment; includes mockup screenshot |

---

## 4. Key PR Progress (10 selected from 50)

| PR | Status | Summary | Impact |
|----|--------|---------|--------|
| [#11248](https://github.com/QwenLM/qwen-code/pull/11248) | Open | **Goal spend tracking**: footer pill, status card, and headless TEXT now show `used / budget` (tokens/sec) | Observability for cost-constrained agents |
| [#11254](https://github.com/QwenLM/qwen-code/pull/11254) | Open | **Web Shell Goal spend mirror** — duplicates #11248 for Web Shell status strip & Goals dialog | Consistent budget UX across surfaces |
| [#11245](https://github.com/QwenLM/qwen-code/pull/11245) | Open | **Built-in Browser Use skill** — drive user’s existing Chrome (signed-in sessions, dashboards, forms) | Major web-automation primitive |
| [#11242](https://github.com/QwenLM/qwen-code/pull/11242) | Open | **Chrome Native Messaging relay** — local host + extension bridge CDP to SDK | Enables #11245; secure browser<->agent channel |
| [#11206](https://github.com/QwenLM/qwen-code/pull/11206) | Open | **Multi-agent mesh admission foundation** — mention routing, turn gates, token gates, queue admission, atomic booking | Core infra for persistent collaborative agents |
| [#11252](https://github.com/QwenLM/qwen-code/pull/11252) | **Closed** | **Bind mesh dispatcher to agent turns** — persisted identity, thread tools, correlated delivery/usage | Completes mesh runtime loop |
| [#11208](https://github.com/QwenLM/qwen-code/pull/11208) | Open | **Bounded historical transcript viewport** — read-only scrollback beyond retained page, gap recovery | Session-long context navigation |
| [#11247](https://github.com/QwenLM/qwen-code/pull/11247) | Open | **Customizable artifact icons** — extension/mime/kind mapping + host renderer override | Extensible UI for tool outputs |
| [#11244](https://github.com/QwenLM/qwen-code/pull/11244) | Open | **Configurable product name/logo** in Web Shell via `settings.json` (SVG path) | White-label deployments without rebuild |
| [#11158](https://github.com/QwenLM/qwen-code/pull/11158) | Open | **Recover from benign malformed tool calls** — stop retry-loop, surface error, continue turn | Fixes #10689; reduces false turn failures |

---

## 5. Feature Request Trends (from Issues + PRs)

1. **Web Shell as a first-class IDE surface** — workflow DAG navigation (#10938), split-view session switching (#11250), sidebar scope unification (#11240), historical transcript (#11208), artifact customization (#11247), white-labeling (#11244).
2. **Browser automation as a built-in skill** — Native Messaging host + extension (#11242), high-level task API (#11245).
3. **Multi-agent / mesh runtime** — admission control, turn gating, token budgets, persistent thread identity (#11206, #11252).
4. **Daemon/CLI update transparency** — expose version state, auto-follow nightly channel (#11243).
5. **Goal/token budget observability** — per-goal spend vs. window across CLI, Web Shell, headless (#11248, #11254).
6. **Extension scoping to workspace runtimes** — global catalog reconciled per workspace (#11086).

---

## 6. Developer Pain Points (recurring themes)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Shell output misread as empty** | #3361 (OpenAI-compat), #4114 (read_file returns empty) | 2 issues, 8+ comments; blocks basic Git/FS ops |
| **Tool cancellation UX** | #10280 clarifies `Esc` semantics; model currently retries cancelled tools | 1 PR, long-standing confusion |
| **Malformed tool call retry storms** | #11158: 4 blind retries before giving up | 1 PR fixing #10689; wastes tokens/time |
| **CI flakes on main** | #11249 auto-filed; Node 22 `ubuntu-latest` pre-test failure | Recurring infra noise |
| **Git hook data loss** | #11253: `post-checkout` commits discarded on branch create | New but high-severity for hooked workflows |
| **Session/context navigation limits** | #11208 (historical viewport), #11250 (split-view waiting sessions) | Multiple PRs addressing scrollback & multi-pane UX |

---

*Digest generated from `github.com/QwenLM/qwen-code` activity on 2026-09-07. All links point to live GitHub items.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-09-07

## 1. Today's Highlights
The project is in a heavy stabilization phase ahead of v0.9.13: six flaky tests in the `codewhale-tui` lib suite have been root-caused and five fixed (#5970), a critical ACP schema violation blocking JetBrains IDEA connections was reported (#5969), and the bottom-chrome redesign gained configurable compact/hidden presets (#5973). Simultaneously, the Fleet model-selection architecture is advancing with provider→model→shortlist→role flows (#5915) and per-task model selection for subagents (#5955 merged).

## 2. Releases
**No new releases in the last 24 hours.** Version v0.9.13 is blocked on changelog receipts for seven merged features (#5967).

## 3. Hot Issues (10 Noteworthy)

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| [#5969](https://github.com/Hmbown/Codewhale/issues/5969) **ACP `initialize` response violates schema** — `sessionCapabilities.list` is a boolean instead of an object, breaking JetBrains IDEA integration | Blocks strict ACP clients; high-impact IDE compatibility regression | 2 comments, created & updated today |
| [#5929](https://github.com/Hmbown/Codewhale/issues/5929) **Parallel-execution flakes: 6 tests fail under load, pass in isolation** | CI reliability tax — each flake costs a rerun or 25-min matrix; 5/6 now fixed via #5970 | 4 comments, author `Hmbown` (maintainer) |
| [#5316](https://github.com/Hmbown/Codewhale/issues/5316) **EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella)** | Major architectural refactor tracking issue; 22 comments indicate active cross-team coordination | 22 comments, long-running epic |
| [#5932](https://github.com/Hmbown/Codewhale/issues/5932) **Test isolation leak: onboarding tests persist fixture provider into real `~/.codewhale/setup_state.json`** | Tests contaminating developer machine config — serious developer-experience hazard | 2 comments, maintainer-reported |
| [#5950](https://github.com/Hmbown/Codewhale/issues/5950) **Bottom chrome (posture bar + metrics line) not configurable; `/statusline` effectively dead** | UX regression in 0.9.12 shell redesign; users lost visibility/control of context | 2 comments, addressed by #5962 + #5973 |
| [#5915](https://github.com/Hmbown/Codewhale/issues/5915) **Fleet models: provider → model → shortlist → role with save-in-role and fleet-aware operator** | Foundational multi-model routing architecture; "founder direction" indicates strategic priority | 2 comments, author `Hmbown` |
| [#5939](https://github.com/Hmbown/Codewhale/issues/5939) **Runtime MCP catalog refresh un-defers and activates entire MCP tool surface mid-turn** | Performance & correctness bug: mid-turn OAuth login floods model with all MCP tools | 0 comments, maintainer-reported, fixed by #5957 |
| [#5923](https://github.com/Hmbown/Codewhale/issues/5923) **Windows: `window_control::toggle_pin` blocks TUI thread on host terminal message pump** | Platform-specific hang risk; cross-process `SetWindowPos`/`ShowWindow` on UI thread | 0 comments, maintainer-reported |
| [#5931](https://github.com/Hmbown/Codewhale/issues/5931) **Session identity & receipt integrity failures only logged (14× session-id divergence, 2× approval receipt write failures)** | Silent data-integrity risks; orphaned checkpoints, unreadable turn items after monitor failure | 0 comments, maintainer-reported, partially fixed by #5960/#5972 |
| [#5848](https://github.com/Hmbown/Codewhale/issues/5848) **Extract y2 Ollama live-catalog default from brand rewrite** | Provider-catalog work tangled with brand rewrite; blocked on extraction | 1 comment, maintainer-authored |

## 4. Key PR Progress (10 Important)

| PR | Status | Summary |
|----|--------|---------|
| [#5973](https://github.com/Hmbown/Codewhale/pull/5973) | Open | **Bottom chrome presets**: `[tui].posture_bar` & `[tui].metrics_line` accept `full\|compact\|hidden`; live toggle via `/config posture_bar compact --save` (closes #5950 second half) |
| [#5970](https://github.com/Hmbown/Codewhale/pull/5970) | Closed | **Flaky-test fixes**: 5 of 6 parallel-execution flakes root-caused & isolated; sixth analyzed parallel-safe (closes #5929 partially) |
| [#5972](https://github.com/Hmbown/Codewhale/pull/5972) | Open | **Runtime store failures as visible notices**: load/save errors surface in TUI instead of silent logs (closes #5931 runtime half) |
| [#5971](https://github.com/Hmbown/Codewhale/pull/5971) | Closed | **MCP UX**: `/mcp` leads with "need-login" servers; failed refresh preserves endpoint receipt; footer chip shows `◆ auth required` (closes #5926) |
| [#5968](https://github.com/Hmbown/Codewhale/pull/5968) | Closed | **`rusty_alloc` opt-in global allocator**: pure-Rust mimalloc v2.4.5 alternative, no C compiler/build script (closes #5872) |
| [#5966](https://github.com/Hmbown/Codewhale/pull/5966) | Closed | **Catalog-driven account keys + first-class `codewhale` route + sandbox/ShannonNet batch**: dynamic provider registry rebase |
| [#5965](https://github.com/Hmbown/Codewhale/pull/5965) | Closed | **Compaction tuning**: custom summarizer prompt suffix (`[compaction].summarizer_instructions_suffix`) + configurable verbatim retention (`[compaction].verbatim_retain_ratio`) (closes #5956) |
| [#5964](https://github.com/Hmbown/Codewhale/pull/5964) | Closed | **Command discoverability**: slash menu shows subcommands/usage while typing; `/help` surfaces usage strings (closes #5952) |
| [#5963](https://github.com/Hmbown/Codewhale/pull/5963) | Closed | **`request_user_input` limits configurable**: questions (1–10), options per question (2–10) via config/schema/validator sync (closes #5949) |
| [#5958](https://github.com/Hmbown/Codewhale/pull/5958) | Closed | **Fleet model filter empty-state**: renders hint instead of panic `index out of bounds` (closes #5953) |

## 5. Feature Request Trends
1. **Multi-model Fleet orchestration** — provider→model→shortlist→role pipeline with saved role profiles (#5915, #5955, #5945)
2. **Configurable UI chrome** — granular control over posture bar, metrics line, statusline composition (#5950, #5962, #5973)
3. **Command discoverability** — inline usage/subcommand hints, `/help` integration (#5952, #5964)
4. **Compaction customization** — summarizer prompt suffix, verbatim retention knobs (#5956, #5965)
5. **MCP UX clarity** — distinguish "needs login" from "failed", preserve raw receipts, login-path guidance (#5926, #5971, #5959)
6. **Allocator flexibility** — opt-in pure-Rust `rusty_alloc` alongside `mimalloc` (#5872, #5968)
7. **Per-task tool limits** — configurable `request_user_input` bounds (#5949, #5963)

## 6. Developer Pain Points
- **Flaky CI**: Parallel test suite produces intermittent failures costing reruns/25-min matrices (#5929, #5970)
- **Test pollution**: Integration tests writing to real user config (`~/.codewhale/setup_state.json`) (#5932)
- **Silent integrity failures**: Session-id divergence (14×), approval receipt write failures (2×), turn-item unreadability — only logged, not surfaced (#5931, #5960, #5972)
- **Startup input loss**: Keystrokes typed during launch partially dropped, mangled commands sent to model (#5925)
- **Windows thread blocking**: `toggle_pin` crosses process boundary onto host terminal message pump (#5923)
- **ACP schema drift**: `initialize` response non-compliant, breaks JetBrains IDEA (#5969)
- **Mid-turn MCP explosion**: Runtime catalog refresh floods model with entire deferred MCP surface (#5939, #5957)
- **Fleet navigation dead-ends**: No "back" between roster/workers/saved-teams; `Esc` always closes entirely (#5954)

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*