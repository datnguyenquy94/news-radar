# AI CLI Tools Community Digest 2026-08-05

> Generated: 2026-08-05 03:18 UTC | Tools covered: 10

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

# Cross-Tool Comparison Report: AI CLI Tools Ecosystem (2026-08-05)

---

## 1. Ecosystem Overview

The AI CLI tools landscape is in a **stabilization and hardening phase** across all major players. While rapid feature iteration continues (multi-agent control, omni-modal input, ACP/Runtime APIs), the dominant signal from all communities is **reliability debt paydown**: memory leaks, session persistence, cross-platform parity, and enterprise-grade authentication. Three distinct architectural patterns are emerging: (a) **monolithic TUI + agent runtime** (Claude Code, Gemini CLI, DeepSeek TUI), (b) **daemon + thin CLI + web/IDE surfaces** (OpenCode, Qwen Code, Pi), and (c) **extension-first IDE integration with CLI escape hatch** (GitHub Copilot CLI, OpenAI Codex). Windows/MSIX stability and enterprise SSO/CA support are now table-stakes blockers for adoption in regulated environments.

---

## 2. Activity Comparison

| Tool | Issues (Hot) | PRs (Key) | Release Status | Critical Blockers |
|------|--------------|-----------|----------------|-------------------|
| **Claude Code** | 10 (335👍 top) | 9 fixes | **v2.1.222** (isolation/security) | Windows MSIX GPU crashes, 15GB WSL2 leak, multi-account connector |
| **OpenAI Codex** | 10 (387👍 top) | 10 merged (bot) | 4× **alpha** (0.147.0) | macOS `syspolicyd` runaway (3mo), extension prompt loss, forced MultiAgentV2 |
| **Gemini CLI** | 10 (P1 hangs) | 10 (security/core) | None | Subagent false success, generalist agent hangs, ACP session loss |
| **GitHub Copilot CLI** | 10 (29👍 top) | 2 (security req.) | **v1.0.79-1** (breaking config) | MCP init fail (FastMCP), slash skills broken, enterprise validator, macOS TLS |
| **Kimi Code CLI** | 6 (24👍 top) | 3 | None | 500K-token reliability cliff, Windows exits/IME, ACP model discovery |
| **OpenCode** | 10 (13👍 top) | 8 (subagent control) | **v1.18.13** (RTL/PR metadata) | Billing 402 errors, migration deletes event log, WSL render, soft-locks |
| **Pi** | 10 (13 comments) | 10 (TUI/enterprise) | None (v0.83.0 vuln deps) | Copilot GHE compaction, Windows `find` globs, TUI scroll jumps, `node:sqlite` missing |
| **Qwen Code** | 10 (active triage) | 10 (omni/perf/CI) | **Preview + Nightly** | MCP SSE hangs, CI noise, terminal resize dupes, review latency |
| **DeepSeek TUI** | 10 (build crisis) | 10 (ACP/Runtime API) | v0.9.4 train (77 commits) | 683k-line monolith rebuilds, Anthropic `type` param, single API key, sandbox |
| **Grok Build** | — | — | No activity | — |

---

## 3. Shared Feature Directions (Cross-Tool Convergence)

| Requirement | Tools Affected | Specific Community Needs |
|-------------|----------------|--------------------------|
| **Multi-account / multi-workspace auth** | Claude Code (#27302, 335👍), Kimi (#2583), Copilot CLI (#1285, #4349), Pi (#7603) | Simultaneous Google/GitHub/Slack/MS365/Copilot GHE sessions; per-workspace token isolation |
| **Subagent interrupt/steer/cancel control plane** | OpenCode (#32425), DeepSeek TUI (#5242), Gemini CLI (#22323), Claude Code (#64706) | First-class subagent lifecycle API; resume from checkpoint; per-agent `effort`/model config |
| **ACP / Runtime API standardization** | Gemini CLI (#27913, #28693), DeepSeek TUI (#5225, #5129–33), Kimi (#2583, #2364), OpenCode (implied) | `session/load` restore, model discovery/switch, tool exposure over HTTP, permission negotiation |
| **Enterprise SSO / private-CA / managed policy parity** | Copilot CLI (#4349, #4364, #4005), Pi (#7413, #7579, #7603), Claude Code (#53408), OpenAI Codex (#15151) | Enum validation alignment, cert trust stores, billing-entity detection, org-agent visibility |
| **Session persistence & crash recovery** | Gemini CLI (#28672, #28693), Qwen Code (#8412), OpenCode (#30963), Pi (#7396), DeepSeek TUI (#5133) | ACP `session/load`, journal truncation markers, event log migration safety, verifier receipts |
| **Omni-modal input unification** | Qwen Code (#8512, #8332), Gemini CLI (browser subagent), DeepSeek TUI (ACP tools) | Single pipeline for image/audio/video/URL/tool-result media with token-dimension guards |
| **Windows/MSIX first-class support** | Claude Code (#81275, #53247, #84005), OpenAI Codex (#31108, #13553), Kimi (#2587, #2584), Pi (#7547, #6817), Copilot CLI (#4328) | GPU process stability, IME input, `find` glob paths, TLS/CA, WSL2 keybindings, binary packaging |
| **Configurable compaction/summarization** | Pi (#7602), Qwen Code (#8421, #8425), OpenCode (#40566), Gemini CLI (#28672) | Per-compaction model/thinking budget, compression cache sharing, tail-image preservation |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Kimi Code | OpenCode | Pi | Qwen Code | DeepSeek TUI |
|-----------|-------------|--------------|------------|-------------|-----------|----------|-----|-----------|--------------|
| **Primary UX** | Monolithic TUI + worktree isolation | Desktop + CLI + VS Code ext | TUI + ACP server | IDE-first + CLI escape | CLI + ACP server | Daemon + TUI + Web UI | TUI + extension runtime | CLI + Daemon + Web UI + SDK | Monolithic TUI (Rust) |
| **Agent Model** | Subagents + background tasks | MultiAgentV2 (catalog-forced) | Generalist + browser subagent | Skills + subconscious sidekick | Autonomous agents (context-limited) | Goal-loop + subagents (interruptible) | Coding agent + compaction | Goal workflow + daemon | Subagents + ACP tools |
| **Enterprise Focus** | Connectors (Google/GitHub/Slack/MS365) | ChatGPT/Pro/Team auth + PSP | Vertex AI / Google Cloud | **GitHub Copilot GHE/Managed** | Moonshot platform | xAI / SuperGrok + BYO | Cortecs / LLM Gateway / BYO router | Qwen / Alibaba Cloud + models.dev | DeepSeek + OpenModel / Anthropic-compat |
| **Extensibility** | Hooks, skills, MCP, connectors | Plugins, skills, MCP | Skills, MCP, ACP tools | Slash skills, MCP, plugins | ACP permission modes, skills | MCP Registry, skills, runtime API | Extensions, skills, MCP, providers | Browser-ext, omni-modal, SDK | ACP tools, Runtime API, MCP Registry |
| **Differentiator** | Worktree-isolated sessions; hook security | ChatGPT desktop parity; PSP routing | Auto Memory; SGLang/local endpoints | Org-level agents; managed settings | Remote Control (24👍); ACP-first | Subagent steer/cancel; RTL TUI | EU AI router (Cortecs); server sessions | Omni-modal bridge; compression cache share | Build-time epic; verifier receipts; MCP Registry |
| **Target User** | Pro devs / teams needing isolation | ChatGPT Pro/Enterprise users | Google Cloud / Vertex devs | GitHub Enterprise orgs | Autonomous long-session users | Power users / fleet operators | Privacy / EU / BYO-router advocates | Alibaba Cloud / Qwen ecosystem | Rust/TUI enthusiasts; headless integrators |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|------|-------|----------|
| **High Momentum / Rapid Iteration** | **Qwen Code**, **OpenCode**, **DeepSeek TUI**, **Pi** | Daily/nightly releases; 10+ PRs/day; epic refactors (DeepSeek v0.9.5, Pi server rewrite); omni-modal & ACP investment |
| **Stabilization Focus (Maturity Push)** | **Claude Code**, **Gemini CLI**, **Copilot CLI** | Patch releases fixing critical regressions; security/isolation hardening; enterprise blocker triage; breaking config changes signal v1+ discipline |
| **Platform-Bound / Slower Cadence** | **OpenAI Codex** | Alpha-only CLI; macOS blocker 3mo unresolved; Desktop/Extension primary; bot-authored PRs suggest internal velocity not community-facing |
| **Early / Niche** | **Kimi Code**, **Grok Build** | Kimi: strong ACP/remote vision but Windows/context cliffs; Grok: no public activity |

**Community Health Indicators:**
- **Highest engagement**: Claude Code (#27302, 335👍, 226 comments), OpenAI Codex (#25719, 387👍, 81 comments), Copilot CLI (#1709, 29👍)
- **Most transparent roadmap**: Qwen Code (README refresh #8556), Pi (Windows strategy #7547), DeepSeek TUI (build epic #5249)
- **Enterprise adoption signals**: Copilot CLI (multiple GHE blockers), Pi (Copilot GHE compaction), Claude Code (MS365/Google connectors)

---

## 6. Trend Signals for Technical Decision-Makers

| Trend | Signal Strength | Implication for Developers/Orgs |
|-------|-----------------|----------------------------------|
| **ACP / Runtime API as integration layer** | ★★★★★ (5/8 tools) | **Standardize on ACP** for editor/IDE/

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (as of 2026-08-05)

---

## 1. Top Skills Ranking — Most-Discussed PRs

| Rank | Skill / PR | Functionality | Discussion Highlights | Status |
|------|------------|---------------|----------------------|--------|
| 1 | **[fix(skill-creator): run_eval.py 0% recall fix](https://github.com/anthropics/skills/pull/1298)** | Core tooling fix: resolves `run_eval.py` reporting 0% recall for all skill descriptions, breaking the description-optimization loop | Referenced in **Issue #556** (12 comments, 7👍); 10+ independent reproductions; blocks skill quality improvement pipeline | OPEN |
| 2 | **[Add document-typography skill](https://github.com/anthropics/skills/pull/514)** | Prevents typographic defects in AI-generated documents: orphan/widow control, numbering alignment, hyphenation | Addresses universal pain point — "every document Claude generates" affected; users rarely request good typography explicitly | OPEN |
| 3 | **[feat: add testing-patterns skill](https://github.com/anthropics/skills/pull/723)** | Comprehensive testing guidance: Testing Trophy, AAA pattern, React Testing Library, E2E, property-based, contract testing | Covers full stack; philosophy + practical patterns; high utility for code-quality workflows | OPEN |
| 4 | **[feat(skills): add self-audit — mechanical verification + reasoning quality gate](https://github.com/anthropics/skills/pull/1367)** | Pre-delivery audit: file existence verification → 4-dimension reasoning audit (correctness, completeness, safety, clarity) | Universal, stack-agnostic; damage-severity prioritization; v1.3.0 | OPEN |
| 5 | **[Add color-expert skill](https://github.com/anthropics/skills/pull/1302)** | Color science expertise: naming systems (ISCC-NBS, Munsell, XKCD, RAL), color spaces (OKLCH, OKLAB, CAM16), accessibility | Self-contained reference; "what to use when" tables; fills design-system gap | OPEN |
| 6 | **[Add ODT skill](https://github.com/anthropics/skills/pull/486)** | OpenDocument (.odt/.ods) creation, template filling, parsing to HTML; triggers on ODT/ODF/LibreOffice mentions | ISO-standard format support; MCP server integration via pyxel-mcp | OPEN |
| 7 | **[Add pyxel skill for retro game development](https://github.com/anthropics/skills/pull/525)** | Pyxel retro game engine via MCP server; write → run_and_capture → inspect → iterate workflow | Niche but complete; author is Pyxel creator (kitao); updated through July | OPEN |
| 8 | **[fix(skill-creator): Windows subprocess + encoding bugs](https://github.com/anthropics/skills/pull/1050)** | Two 1-line fixes: `claude.cmd` PATHEXT resolution + cp1252 encoding for subprocess pipes | **Issue #1061** (3 comments, 2👍); blocks Windows users from skill-creator pipeline | OPEN |

> **Note**: PR comment counts show as "undefined" in source data; ranking inferred from linked Issue activity, cross-references, and update frequency.

---

## 2. Community Demand Trends — From Issues

| Trend | Evidence | Signal Strength |
|-------|----------|-----------------|
| **Skill distribution & trust security** | [#492](https://github.com/anthropics/skills/issues/492) (43 comments, 2👍): Community skills masquerading under `anthropic/` namespace — trust boundary abuse | 🔴 Critical |
| **Org-wide skill sharing** | [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8👍): Need shared library / direct sharing links; current flow = download → Slack → manual upload | 🟠 High |
| **Skill-creator toolchain reliability** | [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 7👍), [#1169](https://github.com/anthropics/skills/issues/1169), [#1061](https://github.com/anthropics/skills/issues/1061): `run_eval.py` 0% recall, Windows subprocess failures, encoding bugs | 🟠 High |
| **Duplicate/conflicting skill bundles** | [#189](https://github.com/anthropics/skills/issues/189) (6 comments, 9👍): `document-skills` + `example-skills` install identical content → context window bloat | 🟡 Medium |
| **Meta-skills for quality/governance** | [#83](https://github.com/anthropics/skills/pull/83) (skill-quality-analyzer, skill-security-analyzer), [#412](https://github.com/anthropics/skills/issues/412) (agent-governance), [#1385](https://github.com/anthropics/skills/issues/1385) (reasoning quality gate pipeline) | 🟡 Medium |
| **Context window / token efficiency** | [#1487](https://github.com/anthropics/skills/issues/1487): `claude-api` skill injects ~156k tokens in one call; [#1329](https://github.com/anthropics/skills/issues/1329): compact-memory for symbolic agent state | 🟡 Medium |
| **MCP / Bedrock integration** | [#16](https://github.com/anthropics/skills/issues/16) (Expose Skills as MCPs), [#29](https://github.com/anthropics/skills/issues/29) (Bedrock support) | 🟢 Emerging |

---

## 3. High-Potential Pending Skills — Active PRs Likely to Land

| PR | Skill | Why It Has Momentum |
|----|-------|---------------------|
| [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator: run_eval.py 0% recall fix** | Blocks core quality pipeline; 10+ reproductions; multiple dependent PRs (#1323, #1099, #1050) |
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | Comprehensive, well-structured; fills testing guidance gap; no competing PR |
| [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit** | Universal applicability; mechanical + reasoning gates; active iteration (v1.3.0) |
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | Universal need; zero-config value; addresses invisible quality degradation |
| [#1302](https://github.com/anthropics/skills/pull/1302) | **color-expert** | Self-contained reference; design-system adjacent; no overlap with existing skills |
| [#509](https://github.com/anthropics/skills/pull/509) | **CONTRIBUTING.md** | Addresses 25% community health score; single highest-impact doc addition |
| [#1050](https://github.com/anthropics/skills/pull/1050) | **Windows skill-creator fixes** | 2-line changes; unblocks Windows contributors; low review burden |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is fixing the skill-creator toolchain (trigger evaluation, Windows compatibility, description optimization) so that skill authors can reliably build, test, and distribute high-quality skills — while simultaneously demanding secure, org-aware skill distribution to prevent namespace spoofing and enable team sharing.**

---

# Claude Code Community Digest — 2026-08-05

## Today's Highlights
Version **v2.1.222** shipped two critical isolation fixes: worktree-isolated sessions can no longer execute destructive git commands against the main checkout, and PreToolUse auto-allow hooks no longer bypass tool restrictions in background agent tasks. The issue tracker shows a surge of new Windows/MSIX stability reports (browser pane GPU crashes, update file locks, Cowork bridge drops) alongside long-standing memory leaks and connector auth failures. Community attention remains highest on multi-account connector support (#27302, 335 👍) and WSL2 grep-triggered OOM cascades (#54394).

---

## Releases

### v2.1.222
- **Security/Isolation**: Worktree-isolated sessions and their subagents now have isolation enforced for *file edits* and *Bash commands* in every session type — previously only git commands were blocked.
- **Hook Security**: Fixed PreToolUse auto-allow hooks incorrectly bypassing tool restrictions when invoked from background agent tasks.

---

## Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#27302](https://github.com/anthropics/claude-code/issues/27302) | **Support multiple Connector accounts (same connector, different accounts)** | Top-voted enhancement (335 👍); blocks teams using multiple Google/GitHub/Slack workspaces in one Claude Code instance. | 226 comments, open since Feb |
| [#54394](https://github.com/anthropics/claude-code/issues/54394) | **v2.1.117 ugrep wrapper amplifies regex backtracking → V8 heap OOM (WSL2)** | Embedded `ugrep` routes every `grep` through `claude.exe`; pathological regexes explode V8 heap to 8 GB ceiling, freezing host. | 22 comments, has repro, `perf:memory` |
| [#53247](https://github.com/anthropics/claude-code/issues/53247) | **Claude Desktop fails to launch on Windows — orphaned Silo/Job Object after crash** | Only logoff or reboot recovers; HRESULT `0x80070020` in AppModel-Runtime. Blocks all Windows Desktop users after any crash. | 13 comments, 11 👍 |
| [#21108](https://github.com/anthropics/claude-code/issues/21108) | **Claude accesses git origin on startup before any commands** | Privacy/security concern: unauthenticated network call at launch with no user consent or configuration toggle. | 13 comments, 15 👍 |
| [#81275](https://github.com/anthropics/claude-code/issues/81275) | **Desktop Browser pane crashes GPU process (exit code 0x60C201E) on Intel/NVIDIA/WARP** | Cowork browser preview completely non-functional on Windows MSIX 1.24012.9; affects all GPU backends. | 11 comments, new (Jul 26) |
| [#21378](https://github.com/anthropics/claude-code/issues/21378) | **🚨 CRITICAL: Memory leak → freeze after 20+ min (15 GB RAM)** | Long-running sessions consume 15 GB+ on WSL2; process never releases memory. Blocker for extended coding sessions. | 8 comments, 12 👍 |
| [#53408](https://github.com/anthropics/claude-code/issues/53408) | **MCP Microsoft 365 connector rejects personal accounts (Hotmail/Outlook/Live)** | OAuth flow halts at Microsoft sign-in; only work/school accounts supported. Affects individual developers. | 7 comments, 19 👍 |
| [#64706](https://github.com/anthropics/claude-code/issues/64706) | **Agent tool ignores `effort:` frontmatter in subagent .md files** | Subagents inherit global `effortLevel` instead of per-agent frontmatter; breaks cost/quality tuning per task. | 5 comments, 5 👍 |
| [#81077](https://github.com/anthropics/claude-code/issues/81077) | **PostToolUse `additionalContext` re-serialized between turns, invalidating prompt cache** | Hook-injected context changes shape across turns, busting cache and increasing token usage/latency. | 2 comments, 1 👍 |
| [#84027](https://github.com/anthropics/claude-code/issues/84027) | **Harness dirties isolated worktrees via `.claude/settings.local.json`, blocking auto-cleanup** | Every isolated worktree gets a write, marking it dirty; periodic sweep skips dirty worktrees → storage leak. | 0 comments, filed today |

---

## Key PR Progress

| # | PR | Summary | Status |
|---|----|---------|--------|
| [#84004](https://github.com/anthropics/claude-code/pull/84004) | `fix(plugin-dev): limit frontmatter parsing` | Parses only the opening YAML frontmatter block; rejects files missing opening/closing `---` markers. Prevents horizontal rules in Markdown body from being misparsed. | Open |
| [#84003](https://github.com/anthropics/claude-code/pull/84003) | `fix(scripts): propagate top-level failures` | Duplicate-maintenance scripts now return failing process status on top-level rejection; errors still logged, output flushed. | Open |
| [#83999](https://github.com/anthropics/claude-code/pull/83999) | `fix(scripts): validate gh flag values` | Restricted `gh` wrapper now rejects value-taking flags missing their value (e.g., `gh issue list --limit` without number). | Open |
| [#83995](https://github.com/anthropics/claude-code/pull/83995) | `fix(scripts): validate label option values` | `--add-label` / `--remove-label` now require a label name; prevents unbound-variable aborts and option-consumption bugs. | Open |
| [#83993](https://github.com/anthropics/claude-code/pull/83993) | `fix(scripts): reject self-referential duplicates` | `comment-on-duplicates.sh` no longer proposes an issue as a duplicate of itself; avoids self-referential comments polluting automation. | Open |
| [#83992](https://github.com/anthropics/claude-code/pull/83992) | `fix(plugin-dev): assert expected hook decision` | `test-hook.sh` adds `--expect allow\|deny\|ask` flag; catches hooks that incorrectly allow operations they should deny. Fixes #83800. | Open |
| [#83990](https://github.com/anthropics/claude-code/pull/83990) | `fix(plugin-dev): report missing jq dependency` | `test-hook.sh` now checks for `jq` before use; reports missing dependency instead of misclassifying valid JSON as malformed. Fixes #83802. | Open |
| [#83890](https://github.com/anthropics/claude-code/pull/83890) | `Create pylint.yml` | Adds Pylint CI configuration (author: KrypticKode007). | Open |
| [#83374](https://github.com/anthropics/claude-code/pull/83374) | `docs(plugin-dev): document MessageDisplay streaming semantics` | Adds `MessageDisplay` hook event to bundled Hook Development skill: trigger description, event guidance, quick-reference table. | Open |
| [#83738](https://github.com/anthropics/claude-code/pull/83738) | `Fix/83484 symlink path expansion` | `claude install` now expands home directory (`%h` → `$HOME`) when creating `~/.local/bin/claude` symlink; fixes broken symlinks on Linux. | Open |

---

## Feature Request Trends
1. **Multi-account / multi-workspace connector support** — #27302 (335 👍) leads; users need simultaneous auth to multiple Google, GitHub, Slack, MS365 workspaces.
2. **Per-agent/model persistence controls** — #84020 (model lock), #64706 (per-subagent `effort:`), #84022 (configurable `persistHookOutput` threshold) all point to desire for granular, non-global settings.
3. **Skill/dotfile portability** — #84014 (`additionalSkillDirs` in settings.json) reflects demand to version-control skills alongside dotfiles via symlinks.
4. **Telemetry/observability hardening** — #84024 (OTEL headers not applied), #82092 (missing `otlpHeaders` causing `missing_token` rejections), #81077 (cache invalidation) show growing production telemetry needs.
5. **Cross-device browser control safeguards** — #77605 requests reliable device identification for Chrome MCP to prevent cross-machine hijacking.

---

## Developer Pain Points
| Area | Recurring Themes |
|------|------------------|
| **Windows/MSIX stability** | GPU process crashes in Browser pane (#81275, #83997), update file locks by `CoworkVMService` (#84005, #76357), orphaned Job Objects blocking relaunch (#53247), Cowork bridge daily drops (#83933), Cowork toggle grayed out (#82574). |
| **Memory/performance** | 15 GB leak on WSL2 after 20 min (#21378), ugrep regex backtracking → V8 OOM (#54394), hook output >10K silently dropped (#84021), prompt cache invalidated by hook re-serialization (#81077). |
| **Connector/auth fragility** | MS365 rejects personal accounts (#53408), Notion OAuth "Invalid authorization request" (#84025, #84019), multi-account unsupported (#27302). |
| **Isolation/worktree hygiene** | Harness writes `.claude/settings.local.json` into isolated worktrees, preventing auto-cleanup (#84027); v2.1.222 fixes git isolation but file/Bash isolation was missing until now. |
| **Terminal/session integrity** | Crash leaves terminal in mouse-tracking mode (#84029), CLI vs mobile report different models for same session (#84028), session limit false positives (#84026). |
| **Hook/plugin developer experience** | Hardcoded 10K `persistHookOutput` limit (#84022, #84021), missing `MessageDisplay` docs (#83374), `test-hook.sh` lacks jq check/expected-decision assertion (#83990, #83992), frontmatter parsing bugs (#84004). |

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-05

## Today's Highlights
OpenAI shipped four rapid-fire alpha releases (0.147.0-alpha.1 through .7) in the last 24 hours, signaling an active stabilization push. The community’s top concern remains the macOS `syspolicyd`/`trustd` resource leak (#25719, 387 👍), now in its third month without a fix. Meanwhile, the CLI team merged a batch of internal hardening PRs covering skill caching, tool search, MCP auth, and token-budget configuration.

---

## Releases
| Version | Type | Notes |
|---------|------|-------|
| `rust-v0.147.0-alpha.7` | Alpha | Latest in the 0.147 series; no changelog published yet |
| `rust-v0.147.0-alpha.6.4` | Alpha | Incremental alpha |
| `rust-v0.147.0-alpha.6.3` | Alpha | Incremental alpha |
| `rust-v0.147.0-alpha.6.1` | Alpha | Incremental alpha |

*All releases are Rust CLI builds; no desktop/app store updates in this window.*

---

## Hot Issues (Top 10 by Community Impact)

| # | Title | Status | 👍 | Comments | Why It Matters |
|---|-------|--------|-----|----------|----------------|
| [#25719](https://github.com/openai/codex/issues/25719) | macOS `syspolicyd`/`trustd` CPU & memory runaway | **OPEN** | 387 | 81 | Highest-voted open bug; affects all macOS Desktop users; causes system-wide slowdowns |
| [#13041](https://github.com/openai/codex/issues/13041) | WebSocket upgrade → 1008 Policy close → HTTPS fallback loop | CLOSED | 170 | 74 | Connectivity regression on Linux; fallback degrades latency & reliability |
| [#31846](https://github.com/openai/codex/issues/31846) | GPT-5.3 Codex Spark: “Unsupported parameter: reasoning.summary” | CLOSED | 37 | 35 | Model/API mismatch breaking Pro users on launch day |
| [#9926](https://github.com/openai/codex/issues/9926) | `ask_user_question` tool (tabbed questionnaire UI) | CLOSED | 48 | 27 | High-demand UX improvement for structured agent↔human clarification |
| [#25928](https://github.com/openai/codex/issues/25928) | VS Code/Cursor: submitted prompts randomly disappear | **OPEN** | 16 | 23 | Extension reliability blocker on Windows; impacts daily workflow |
| [#32705](https://github.com/openai/codex/issues/32705) | MultiAgentV2 forced by model metadata despite disabled flag | **OPEN** | 16 | 4 | Architecture concern: runtime choice overridden by catalog, breaking opt-out |
| [#21079](https://github.com/openai/codex/issues/21079) | Make CLI sessions appear in Desktop history | CLOSED | 13 | 16 | Cross-surface continuity; Claude Code import works, native CLI doesn’t |
| [#18299](https://github.com/openai/codex/issues/18299) | File viewer hides dot files (`.agents`, `.codex`, etc.) | CLOSED | 33 | 14 | Developer ergonomics; config/agent files invisible in UI |
| [#37009](https://github.com/openai/codex/issues/37009) | Memory writer hardcodes `gpt-5.6-luna/terra` for custom model providers | **OPEN** | 0 | 3 | **Filed today** — breaks BYO-model setups; memory feature assumes OpenAI models |
| [#31108](https://github.com/openai/codex/issues/31108) | Computer Use screenshot capture fails on Windows 10 (`SetIsBorderRequired`) | **OPEN** | 1 | 3 | Blocks visual agent operations on Win10; Computer Use unusable |

---

## Key PR Progress (Merged in Last 24h)

| # | Title | Area | Impact |
|---|-------|------|--------|
| [#37000](https://github.com/openai/codex/pull/37000) | Keep shared skill caches fresh across plugin loads | Skills/Caching | Prevents stale plugin data reuse; coalesces concurrent loads |
| [#36998](https://github.com/openai/codex/pull/36998) | Support deferred custom tools in tool search | Tooling | Enables lazy-loading of freeform/custom tools in search index |
| [#36993](https://github.com/openai/codex/pull/36993) | Support `includeTurns` reads for paginated threads | Threads/History | Restores full-history view for paginated thread storage |
| [#36992](https://github.com/openai/codex/pull/36992) | Allow injecting model catalog caches | Models/Infra | Testability & runtime cache substitution for model metadata |
| [#36990](https://github.com/openai/codex/pull/36990) | Remove legacy collaboration mode variants (`PairProgramming`, `Execute`) | Modes | Simplifies mode system to `Default` + `Plan` only |
| [#36989](https://github.com/openai/codex/pull/36989) | Preserve shared bundled skill caches | Skills/Caching | Prevents one service from deleting another’s bundled skill cache |
| [#36987](https://github.com/openai/codex/pull/36987) | Opt-in concurrent exec-server request dispatch | Exec Server | `--concurrent-requests` flag unblocks health checks during long runs |
| [#36986](https://github.com/openai/codex/pull/36986) | Process-scoped PSP routing for ChatGPT requests | Auth/Networking | `--psp` flag attaches `oai-chat-psp` cookie for first-party routing |
| [#36983](https://github.com/openai/codex/pull/36983) | Preserve ChatGPT auth for trusted staging MCP servers | MCP/Auth | Extends trusted-origin logic to `chatgpt-staging.com` subdomains |
| [#36966](https://github.com/openai/codex/pull/36966) | Allow disabling built-in image viewer (`features.view_image`) | UI/Tools | Opt-out flag for native `view_image` tool; respects subagents/guardian |

*All PRs authored by `copyberry[bot]` — automated/internal landed changes.*

---

## Feature Request Trends (from Issues)

1. **Cross-surface session unity** — CLI ↔ Desktop history merge (#21079), Cursor import parity.
2. **Granular runtime control** — Opt-out of forced MultiAgentV2 (#32705), disable built-in skills (#14316), disable image viewer (#36966).
3. **Structured human-in-the-loop** — `ask_user_question` tool (#9926) shows demand for constrained Q&A over free-form chat.
4. **Remote/SSH polish** — Case-sensitivity bugs (#18186), approval UI broken in Remote SSH (#34652).
5. **Windows-first reliability** — Non-ASCII usernames (#13553), PowerShell polling lag (#36176), Computer Use screenshots (#31108).
6. **BYO-model compatibility** — Hardcoded model names in memory writer (#37009), custom provider support gaps.

---

## Developer Pain Points (Recurring Themes)

| Pain Point | Evidence |
|------------|----------|
| **macOS resource leak** | #25719 (387 👍, 65+ days open) — `syspolicyd`/`trustd` runaway makes Desktop unusable for many |
| **Extension prompt loss** | #25928 — Cursor/VS Code queue randomly drops prompts before execution |
| **Forced runtimes** | #32705 — Model catalog overrides local `features.multi_agent_v2 = false` |
| **Windows second-class** | #13553 (non-ASCII usernames), #36176 (PowerShell polling lag), #31108 (Computer Use broken on Win10) |
| **Auth foot-guns** | #15151 — `OPENAI_API_KEY` silently overrides OAuth, yielding misleading 401s |
| **Config discoverability** | #14316, #18546 — No UI to disable built-in skills or auto-updates; requires TOML edits |
| **Remote SSH fragility** | #18186 (uppercase paths), #34652 (approval buttons dead), #25904 (Android app sees host but can’t connect) |

---

*Digest generated from GitHub data as of 2026-08-05 00:00 UTC. Links point to live issues/PRs on `github.com/openai/codex`.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-05

## 1. Today's Highlights
No new releases in the last 24 hours. The repository shows intense maintenance activity focused on **agent reliability** (subagent hangs, recovery logic, skill adoption), **security hardening** (SSRF, variable expansion bypass, OAuth redirect fixes), and **core stability** (context corruption, quota fallbacks, session compression). A new evaluation framework for the Caretaker Agent triage pipeline was introduced, signaling investment in automated issue management.

## 2. Releases
*None in the last 24 hours.*

## 3. Hot Issues (Top 10 by Impact & Discussion)

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) Subagent reports `GOAL` success after hitting `MAX_TURNS` | Masks real failures; breaks trust in subagent delegation. **P1, needs retest.** | 12 comments, 2 👍 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) Generalist agent hangs indefinitely | Blocks core workflows; users must disable subagents to proceed. **P1, high user pain.** | 8 comments, 8 👍 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) Shell commands stuck at "Waiting input" after completion | Frequent, silent hang on simple commands; undermines CLI reliability. **P1.** | 4 comments, 3 👍 |
| [#27913](https://github.com/google-gemini/gemini-cli/issues/27913) ACP `session/load` advertises support but doesn’t restore memory | Breaks ACP contract; sessions lost on restart. **P1, medium effort.** | 2 comments |
| [#28693](https://github.com/google-gemini/gemini-cli/issues/28693) ACP sessions killed mid-turn never persisted | Data loss on crash/OOM/SIGKILL; `session/load` returns "not found". **New today.** | 1 comment |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) Gemini rarely uses custom skills/subagents autonomously | Reduces value of extensibility; requires explicit prompting. **P2.** | 6 comments |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) Auto Memory retries low-signal sessions indefinitely | Wastes resources; clogs extraction pipeline. **P2.** | 5 comments |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) 400 error when >128 tools available | Hard limit blocks large workspaces; needs smarter tool scoping. **P2.** | 3 comments |
| [#22093](https://github.com/google-gemini/gemini-cli/issues/22093) Subagents run without permission since v0.33.0 | Regression: agents activate despite disabled config. **P2, needs retest.** | 3 comments |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) Browser subagent fails on Wayland | Platform gap for Linux/Wayland users. **P1, agent/browser.** | 4 comments, 1 👍 |

## 4. Key PR Progress (Top 10 by Significance)

| PR | Type | Summary |
|----|------|---------|
| [#28691](https://github.com/google-gemini/gemini-cli/pull/28691) | **Security** | Blocks `$VAR`/`${VAR}` expansion bypass (GHSA-wpqr-6v78-jr5g); hardens issue-dedup workflow. **P1.** |
| [#28557](https://github.com/google-gemini/gemini-cli/pull/28557) | **Security** | Fixes SSRF in `web-fetch.ts` via async DNS resolution; prevents internal IP bypass via hostnames. **P1/P2.** |
| [#28672](https://github.com/google-gemini/gemini-cli/pull/28672) | **Core/Agent Fix** | Repairs `/compress` session reload failure & quota-fallback tool response loss. **P1, large.** |
| [#28671](https://github.com/google-gemini/gemini-cli/pull/28671) | **Core Fix** | Resolves context corruption & model "autocomplete" on interrupted tool executions/quota fallbacks. |
| [#28681](https://github.com/google-gemini/gemini-cli/pull/28681) | **Feature** | Adds SGLang & local OpenAI-compatible endpoint support. **Large/XL scope.** |
| [#28689](https://github.com/google-gemini/gemini-cli/pull/28689) | **Core Fix** | Unwraps nested `gaxios` streaming errors from `error.cause.message` for proper structured handling. |
| [#28530](https://github.com/google-gemini/gemini-cli/pull/28530) | **Infra/Eval** | Adds Caretaker Agent triage evaluation framework: LLM-as-a-Judge rubric + parallel Git Worktree runner. |
| [#28664](https://github.com/google-gemini/gemini-cli/pull/28664) | **MCP Fix** | Reflects full server config (`env`, `cwd`, `headers`) in consent prompts; hardens stdio env. |
| [#28597](https://github.com/google-gemini/gemini-cli/pull/28597) | **Core Fix** | Loads `.env` files before resolving settings placeholders, fixing load-order race condition. |
| [#28641](https://github.com/google-gemini/gemini-cli/pull/28641) | **UI Fix** | Prevents ghost text infinite loop at narrow widths (CJK/emoji); adds regression test. **Help wanted.** |

## 5. Feature Request Trends
From open issues, the community is pushing for:
1. **Smarter agent autonomy** — Agents should proactively use skills/subagents without explicit instruction ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968), [#22745](https://github.com/google-gemini/gemini-cli/issues/22745)).
2. **AST-aware code tools** — Precise method-level reads, navigation, and mapping to reduce token noise and turns ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)).
3. **Robust session persistence** — ACP session load/restore, crash resilience, and subagent trajectory visibility ([#27913](https://github.com/google-gemini/gemini-cli/issues/27913), [#28693](https://github.com/google-gemini/gemini-cli/issues/28693), [#22598](https://github.com/google-gemini/gemini-cli/issues/22598)).
4. **Browser agent hardening** — Session takeover, lock recovery, Wayland support, settings adherence ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232), [#21983](https://github.com/google-gemini/gemini-cli/issues/21983), [#22267](https://github.com/google-gemini/gemini-cli/issues/22267)).
5. **Auto Memory quality** — Deterministic redaction, invalid patch quarantine, signal-based processing ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523), [#26516](https://github.com/google-gemini/gemini-cli/issues/26516)).

## 6. Developer Pain Points (Recurring Frustrations)
- **Silent hangs & false successes**: Subagents report `GOAL`/`success` after timing out ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)); generalist agent hangs for hours ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)); shell commands show "awaiting input" post-completion ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)).
- **Configuration ignored**: Browser agent disregards `settings.json` (maxTurns, etc.) ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)); subagents activate despite disabled config ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)).
- **Session/data loss**: ACP `session/load` doesn’t restore memory ([#27913](https://github.com/google-gemini/gemini-cli/issues/27913)); crashed sessions never persisted ([#28693](https://github.com/google-gemini/gemini-cli/issues/28693)); `/compress` breaks session reload ([#28672](https://github.com/google-gemini/gemini-cli/pull/28672)).
- **Tooling limits**: 400-tool cap triggers 400 errors ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)); model litters workspace with tmp scripts ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)).
- **Terminal UX regressions**: Ghost text wrapping loops at narrow widths ([#28641](https://github.com/google-gemini/gemini-cli/pull/28641)); external editor exit corrupts buffer ([#24935](https://github.com/google-gemini/gemini-cli/issues/24935)); resize flicker ([#21924](https://github.com/google-gemini/gemini-cli/issues/21924)).

---
*Digest generated from github.com/google-gemini/gemini-cli data as of 2026-08-05.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-05

## 1. Today's Highlights
- **v1.0.79-1 released** with a breaking configuration change: the sandbox setting `allowDevToolCaches` is renamed to `allowDevToolAccess` (old key silently ignored; existing `false` opt-outs revert to default-on).  
- **Multiple enterprise-blocking regressions** surfaced in the last 24 h: MCP initialization fails against FastMCP servers (#4370), enterprise MCP registry validation rejects valid `"enable"` enum (#4349), and macOS TLS rejects private-CA certs (#4364).  
- **Security remediation PR #4366** requires immediate maintainer action to rotate secrets in CI/production.

---

## 2. Releases
| Version | Key Changes |
|---------|-------------|
| **v1.0.79-1** | **BREAKING**: `sandbox.allowDevToolCaches` → `sandbox.allowDevToolAccess`. The old key is no longer read; any prior `false` value silently reverts to the default (enabled). Update your `settings.json` accordingly. [Release](https://github.com/github/copilot-cli/releases/tag/v1.0.79-1) |

---

## 3. Hot Issues (Top 10 by Community Impact)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#1504](https://github.com/github/copilot-cli/issues/1504) | **Custom theme support** — users want shareable JSON themes via `/theme create` | High-demand UX extensibility; 23 👍, 8 comments | 🔥 **23 👍** |
| [#1697](https://github.com/github/copilot-cli/issues/1697) | **Session forking** — branch a conversation into parallel sessions with shared context | Core workflow gap for multi-task dev; 25 👍 | 🔥 **25 👍** |
| [#1709](https://github.com/github/copilot-cli/issues/1709) | **Auto-update plugins** — eliminate manual per-plugin updates | Reduces maintenance burden; closed but 29 👍 shows strong demand | 🔥 **29 👍** |
| [#1285](https://github.com/github/copilot-cli/issues/1285) | **Org-level agents not appearing** in CLI/VS Code despite correct `.github-private` setup | Enterprise adoption blocker; 9 👍, 7 comments | 👍 **9** |
| [#4370](https://github.com/github/copilot-cli/issues/4370) | **MCP init fails** when `server/discover` returns `-32602` (FastMCP unimplemented) | Breaks all FastMCP-based servers; regression in 1.0.79-1 | 🆕 **Critical regression** |
| [#4361](https://github.com/github/copilot-cli/issues/4361) | **Slash-command skills broken** — client no longer rewrites `/skill` to NL, fires doomed RPC | Plugin ecosystem regression; skills unusable via slash | 🆕 **Critical regression** |
| [#4349](https://github.com/github/copilot-cli/issues/4349) | **Managed-settings validator rejects `"enable"`** for `disableBypassPermissionsMode`, blocking ALL custom MCP | Enterprise policy fetch fails closed; zero MCP works | 🆕 **Enterprise blocker** |
| [#4364](https://github.com/github/copilot-cli/issues/4364) | **macOS TLS rejects private-CA cert** (Apple -67901) for enterprise MCP registry | Fail-closed blocks all MCP on macOS; requires rustls/Apple cert fix | 🆕 **Platform blocker** |
| [#4139](https://github.com/github/copilot-cli/issues/4139) | **BYOK / custom model endpoints** (Google Cloud, Azure, local) | Strategic extensibility; 6 👍, closed but signals direction | 👍 **6** |
| [#4005](https://github.com/github/copilot-cli/issues/4005) | **"Copilot billing entity isn’t selected"** prevents memory saves in enterprise | Memory feature broken for enterprise users; 3 👍, 4 comments | 👍 **3** |

---

## 4. Key PR Progress

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#4366](https://github.com/github/copilot-cli/pull/4366) | **ACTION REQUIRED: Security findings resolution** | Open | Vault-chatops bot generated PR to remediate fundamental secrets findings in CI/production. Maintainers must replace `<UPDATE_ME>` placeholders and merge. |
| [#4355](https://github.com/github/copilot-cli/pull/4355) | **Merge** | Open | Author: XavierMP14. No description; likely internal merge automation. |

---

## 5. Feature Request Trends (Distilled from All Issues)

1. **Session & Context Management** — forking (#1697), cloud sync (#1947), delete command (#2019), stash/restore reliability (#4334), persistent context bar (#2532).  
2. **Extensibility & Plugin Ecosystem** — auto-update (#1709), slash-command skill invocation (#4361, #4048), custom themes (#1504), BYOK models (#4139).  
3. **Enterprise & Governance** — org-agent visibility (#1285), managed-settings schema alignment (#4349), private-CA TLS support (#4364), billing-entity selection (#4005).  
4. **MCP & Tooling Integration** — robust server discovery (#4370), Web Search stability (#2692), subconscious sidekick control (#3859).  
5. **Cross-Platform Terminal Polish** — WSL2 keybinding fixes (#4328), zellij/DA1 escape-sequence handling (#4267), osc-11 color respect (#3898).

---

## 6. Developer Pain Points (Recurring Frustrations)

| Area | Symptom | Frequency |
|------|---------|-----------|
| **Regressions in patch releases** | v1.0.72+ broke `view` tool (#4202); v1.0.79-1 broke MCP init (#4370) & slash skills (#4361) | High — 3 regressions in 24 h |
| **Enterprise configuration fragility** | Enum validation too strict (#4349), TLS fail-closed (#4364), billing-entity detection (#4005), org-agents invisible (#1285) | High — multiple open enterprise blockers |
| **Session UX gaps** | No fork, no cloud sync, stash lost on switch, no delete command, no persistent token bar | Medium — long-standing, high 👍 |
| **Plugin/skill discoverability** | Skills missing from `/skills` & slash (#4048, #4361), no auto-update (#1709) | Medium — ecosystem friction |
| **Terminal/keyboard quirks** | Ctrl+H → Ctrl+Backspace in WSL2 (#4328), DA1 escape spam in zellij (#4267), osc-11 color clash (#3898) | Medium — platform-specific but sharp |

---

*Generated from github/copilot-cli data as of 2026-08-05 00:00 UTC. Links point to live GitHub items.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-05

---

## 1. Today's Highlights
- **Agent reliability regression at scale**: A new critical issue (#2586) documents sharp degradation in agent behavior once context exceeds ~500K tokens, manifesting as repetitive action loops and instruction drift — a blocker for long-running autonomous workflows.
- **Windows stability & IME regressions**: Two fresh bugs (#2587, #2584) report abnormal CLI exits and Thai/IME character duplication on Windows, surfacing platform-specific fragility in v0.29.x–0.31.x.
- **ACP protocol maturation**: PR #2364 (permission mode switching) and Issue #2583 (model discovery & mid-session switching) signal active investment in the Agent Communication Protocol for third-party client integration.

---

## 2. Releases
*No new releases in the last 24 hours.*

---

## 3. Hot Issues

| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#2586](https://github.com/MoonshotAI/kimi-cli/issues/2586) | Agent reliability degrades at high context fill (~500K tokens) | Core reliability blocker for autonomous coding; loops & drift make long sessions unusable. | New, 1 comment, 0 👍 — urgent technical depth. |
| [#2587](https://github.com/MoonshotAI/kimi-cli/issues/2587) | CLI exits abnormally during normal session (Windows, v0.29.2) | Hard crash on Windows; interrupts daily workflow. | New, 0 comments. |
| [#2584](https://github.com/MoonshotAI/kimi-cli/issues/2584) | Thai/IME characters duplicated in prompt on Windows | Input regression for non-Latin languages; affects international adoption. | New, 0 comments. |
| [#2583](https://github.com/MoonshotAI/kimi-cli/issues/2583) | ACP: advertise models & support mid-session model switching | Enables dynamic model selection in external clients (Zed, mobile apps). | New, 0 comments. |
| [#1282](https://github.com/MoonshotAI/kimi-cli/issues/1282) | Remote Control: continue local session from any device | High-demand mobility feature; 24 👍, 12 comments — strong community pull. | Updated 2026-08-04, 24 👍. |
| [#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283) | Memory System: persistent context across sessions | Foundational for personalization & long-term agent memory; 17 comments. | Updated 2026-08-04, 0 👍. |

*Only 6 issues updated in last 24h; all listed above.*

---

## 4. Key PR Progress

| # | Title | Status | Impact |
|---|-------|--------|--------|
| [#2364](https://github.com/MoonshotAI/kimi-cli/pull/2364) | feat(acp): support permission mode switching | Open (stacked on #2363) | Unblocks ACP clients to request/change permission modes dynamically; resolves #1414. |
| [#2585](https://github.com/MoonshotAI/kimi-cli/pull/2585) | feat(cli): set `AI_AGENT=kimi` for subprocesses | Open | Standardizes agent detection for tooling/orchestrators; covers both pip/uv and binary entrypoints. |
| [#2200](https://github.com/MoonshotAI/kimi-cli/pull/2200) | fix(shell): adapt timeouts for long commands | Open (since May) | Auto-extends timeout for known-slow commands (git clone, builds, installs); reduces false failures. |

---

## 5. Feature Request Trends
1. **Persistent Memory & Personalization** — #1283 (Memory System) leads; users want cross-session recall of project patterns, preferences, and AI-managed notes.
2. **Session Mobility** — #1282 (Remote Control) tops engagement (24 👍); demand for seamless device handoff with full local env preservation.
3. **ACP/Protocol Extensibility** — #2583 + PR #2364 show push to make Kimi a first-class ACP server: model discovery, mid-session switching, permission negotiation.
4. **Scalable Context Handling** — #2586 exposes architectural ceiling at ~500K tokens; implicit demand for better context compression, summarization, or hierarchical memory.

---

## 6. Developer Pain Points
- **Context-window reliability cliff**: Agents become unreliable past ~500K tokens (loops, drift, no escalation) — breaks trust in autonomous multi-step tasks.
- **Windows instability**: Hard exits (#2587) and IME input corruption (#2584) make Windows a second-class platform in recent versions.
- **Opaque session limits**: No documented context ceiling; developers discover limits empirically.
- **ACP client gaps**: External clients cannot list/switch models or negotiate permissions mid-session, limiting ecosystem integration.
- **Timeout rigidity**: Fixed 60s shell timeout fails on legitimate long-running commands (git, builds); PR #2200 addresses but remains unmerged since May.

---

*Digest generated from GitHub data as of 2026-08-05 00:00 UTC. All links point to live items on `MoonshotAI/kimi-cli`.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-05

## Today's Highlights
OpenCode released **v1.18.13** with critical RTL layout fixes for Desktop and PR metadata enrichment in TUI. The community surfaced a high-severity migration bug (#30963) that deletes event logs on upgrade, while multiple "Insufficient Balance" reports (#27593, #30950) suggest subscription billing inconsistencies. A major PR (#32425) introduces subagent interrupt/steer/cancel — a long-requested control plane for multi-agent workflows.

---

## Releases
### v1.18.13
**TUI:** GitHub PR reviews now include PR number and URL in context.  
**Desktop:** Fixed RTL layout issues across tabs, drawers, resizing, titlebar, and directional icons.  
[Release Notes](https://github.com/anomalyco/opencode/releases/tag/v1.18.13)

---

## Hot Issues
| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| [#27593](https://github.com/anomalyco/opencode/issues/27593) **402 Insufficient Balance on ds4-flash** | Users with 98% quota hit billing errors on specific models; suggests catalog<->billing sync bug. | 17 comments, 13 👍 |
| [#30862](https://github.com/anomalyco/opencode/issues/30862) **Stuck with no response after update** | Complete UI freeze post-upgrade; reinstalls don't help. Blocks all workflows. | 12 comments |
| [#20234](https://github.com/anomalyco/opencode/issues/20234) **WSL outputs one word/line during thinking** | Rendering regression in WSL makes streaming output unreadable. | 10 comments, 4 👍 |
| [#20118](https://github.com/anomalyco/opencode/issues/20118) **PRAGMA journal_mode = WAL fails** | DB corruption on version downgrade; poor error handling + missing logs. | 10 comments, 11 👍 |
| [#30963](https://github.com/anomalyco/opencode/issues/30963) **Migration deletes entire event log** | `DELETE FROM event` runs unconditionally in merged PR — data loss risk for all users. | 4 comments, 1 👍 |
| [#30590](https://github.com/anomalyco/opencode/issues/30590) **Dialogs soft-lock the app** | Permission/confirmation modals become unresponsive; requires force-kill. | 3 comments |
| [#30920](https://github.com/anomalyco/opencode/issues/30920) **Terminal raw mode not restored on abort** | ESC×2 leaves terminal in raw mode; keys act as Ctrl-combos, breaks CJK input. | 3 comments |
| [#30831](https://github.com/anomalyco/opencode/issues/30831) **`opencode completion` truncates output** | Generates invalid zsh script (unmatched quote); breaks shell init for all users. | 3 comments |
| [#31006](https://github.com/anomalyco/opencode/issues/31006) **Silent exit (code 0) when detached w/o TTY** | `serve` subcommand exits cleanly with no output when spawned via `stdio: ["ignore",...]` — breaks daemonization. | 2 comments |
| [#31014](https://github.com/anomalyco/opencode/issues/31014) **MCP OAuth can't use public proxy redirect URLs** | `redirectUri` overloaded for provider callback + local listener; breaks containerized/remote deployments. | 2 comments |

---

## Key PR Progress
| PR | Summary | Impact |
|----|---------|--------|
| [#40566](https://github.com/anomalyco/opencode/pull/40566) **feat(core): preserve compaction tail images** | Raises retained compaction context 8K→15K tokens; preserves user/tool-result images in checkpoint; updates public contracts. | Major context-retention upgrade for long sessions. |
| [#32425](https://github.com/anomalyco/opencode/pull/32425) **feat(opencode): interrupt running subagent** | Adds steer/cancel/abort for subagents; addresses stuck-agent recovery. Closes #38966. | First-class subagent control plane — top community ask. |
| [#40538](https://github.com/anomalyco/opencode/pull/40538) / [#40537](https://github.com/anomalyco/opencode/pull/40537) **fix(core): make xAI OAuth device-only** | Replaces loopback OAuth with RFC 8628 device flow; removes PKCE/CORS/callback server; migrates creds seamlessly. | Enables SuperGrok auth in headless/remote environments. |
| [#33127](https://github.com/anomalyco/opencode/pull/33127) **feat(tui): sidebar history + scroll-to-message** | History panel lists user messages; click to jump. Closes #32165. | Navigation UX parity with modern chat UIs. |
| [#40126](https://github.com/anomalyco/opencode/pull/40126) **feat(session): support Gemini image generation** | Carries inline image data through V2 session pipeline. Closes #40124. | Unblocks multimodal Gemini workflows. |
| [#40558](https://github.com/anomalyco/opencode/pull/40558) **fix(core): unify patch path resolution** | Uses shared `LocationMutation` contract for patch source/move targets; matches edit/write auth & symlink handling. | Consistency & correctness for filesystem mutations. |
| [#40487](https://github.com/anomalyco/opencode/pull/40487) **fix(core): retire legacy provider aliases** | Removes Azure Cognitive Services & Google Vertex Anthropic standalone providers; migrates legacy IDs in config/agents/policies. | Reduces provider surface area; prevents legacy re-creation. |
| [#40552](https://github.com/anomalyco/opencode/pull/40552) **fix(core): avoid eager directory snapshots** | Defers filesystem snapshot rebuild until directory/mixed search requested; avoids per-file cost during ripgrep indexing. | Significant perf win for large repos. |
| [#40551](https://github.com/anomalyco/opencode/pull/40551)

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-05

## Today's Highlights
The community is actively addressing Windows compatibility gaps (#7547, #6817, #7427) and enterprise Copilot authentication failures during compaction (#7413, #7579). Meanwhile, the TUI layer sees rapid iteration: fullscreen diff scrolling (#7597), mermaid diagram rendering (#7624), and scroll/jump regressions (#7616) are all in flight. A security advisory surfaced pinned vulnerable dependencies in v0.83.0 (#7628).

---

## Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#7547](https://github.com/earendil-works/pi/issues/7547) | **Windows: strategy for Pi on Windows** | 13 comments. Core team seeks consensus on supported Windows runtimes (native, WSL, Bun, Node) to focus docs, CI, and bug triage. | High engagement; maintainers asking users to report their setup and pain points. |
| [#7413](https://github.com/earendil-works/pi/issues/7413) | **Compaction fails on GitHub Copilot GHE — “unknown stamp”** | 6 comments. Enterprise Copilot seats cannot compact; normal chat works. Blocks long-running sessions. | Users confirm repro; likely auth token format mismatch in summarization path. |
| [#7579](https://github.com/earendil-works/pi/issues/7579) | **Compaction 421 on Copilot enterprise — baseUrl dropped** | 4 comments. Summarization request loses resolved `baseUrl`, causing 421 Misdirected Request. | Root cause identified in `ModelRuntime.prepareRequest()` bypass for compaction. |
| [#6817](https://github.com/earendil-works/pi/issues/6817) | **`find` tool fails on path patterns with separators (Windows)** | 5 comments. `src/**/*.ts` returns “No files found”; only bare globs work. | Path-separator handling bug in `find.ts`; impacts cross-platform agent workflows. |
| [#7465](https://github.com/earendil-works/pi/issues/7465) | **Add payload size to iTerm2 inline images** | 7 comments. Required by `@xterm/addon-image@0.9.0`; images silently fail in xterm.js. | PR #7612 opened; fix is trivial (add `size=` param to OSC 1337). |
| [#7553](https://github.com/earendil-works/pi/issues/7553) | **Configurable thinking level/model for compaction** | 6 comments. Auto-compaction inherits session thinking budget, inflating cost/latency on reasoning models. | PR #7602 implements per-compaction model & thinking config. |
| [#7628](https://github.com/earendil-works/pi/issues/7628) | **Security: v0.83.0 pins vulnerable `undici@8.5.0`, `brace-expansion@5.0.7`** | 1 comment but high severity. `npm audit` flags known CVEs; shrinkwrap needs bump. | Maintainers likely to patch release; extension authors should audit deps. |
| [#7594](https://github.com/earendil-works/pi/issues/7594) | **`node:sqlite` missing in release binary → plugin breakage** | 4 comments. Extensions using `node:sqlite` (e.g., `pi-total-recall`) fail to load. | Packaging regression; binary build must include SQLite native module. |
| [#7616](https://github.com/earendil-works/pi/issues/7616) | **Chat scroll jumps when tool blocks exceed viewport** | 2 comments. Differential renderer clears full screen on large tool output, losing scroll position. | UX regression in fullscreen mode; PR #7597 addresses diff scrolling but not transcript. |
| [#7633](https://github.com/earendil-works/pi/issues/7633) | **`read` tool parses & sorts JSON keys instead of raw content** | 1 comment (new). Breaks diffs, config inspection; keys reordered per JS iteration order. | Regression in tool response formatting; needs raw passthrough for JSON files. |

---

## Key PR Progress (Top 10 by Significance)

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#7602](https://github.com/earendil-works/pi/pull/7602) | **Configurable summarization models** | Open | Implements per-compaction model & thinking level (closes #7553). Adds provider error handling for context-window limits. |
| [#7597](https://github.com/earendil-works/pi/pull/7597) | **Scrollable extension selector for long diffs (fullscreen)** | Open | Wraps diff title in `ScrollView`; pins actions so tall diffs remain reviewable. |
| [#7624](https://github.com/earendil-works/pi/pull/7624) | **Render Mermaid diagrams in markdown** | Open | Adds `grok-mermaid` rendering (closes #7623). |
| [#7612](https://github.com/earendil-works/pi/pull/7612) | **Add `size` param to iTerm2 image encoder** | Open | Satisfies `@xterm/addon-image@0.9.0`; fixes image rendering in xterm.js (closes #7465). |
| [#7626](https://github.com/earendil-works/pi/pull/7626) | **Own SQLite backend tests in storage package** | Closed | Moves tests to `packages/storage/sqlite-node`; adds migration, corruption, lease, FTS coverage. |
| [#7614](https://github.com/earendil-works/pi/pull/7614) | **Remove legacy server implementation** | Closed | Deletes experimental child-process server, `server` executable, and legacy exports. Simplifies build. |
| [#7396](https://github.com/earendil-works/pi/pull/7396) | **Server session backend (durable JSONL + locking)** | Closed | Persists coding-agent sessions with cross-process locking, crash recovery, live transcript projection. |
| [#7571](https://github.com/earendil-works/pi/pull/7571) | **Built-in Cortecs provider (EU AI router)** | Closed | Adds Cortecs as `openai-completions` provider backed by models.dev. |
| [#7610](https://github.com/earendil-works/pi/pull/7610) | **LLM Gateway & DevPass providers** | Open | Adds OpenRouter-style router providers (closes #7480 re-opened). |
| [#7632](https://github.com/earendil-works/pi/pull/7632) | **Retry transient management HTTP requests** | Open | Retries idempotent management calls (pi.dev, GH releases, tools) to fix #6675. |

---

## Feature Request Trends

1. **Enterprise-grade auth & compaction** — Multiple issues (#7413, #7579, #7603) around Copilot/GHE, Azure, and role handling (`developer` role rejected). Users need seamless SSO token propagation across all request paths.
2. **Windows parity** — #7547 (strategy), #6817 (glob paths), #7427 (skills loading), #7528 (dialog width crash). Windows is no longer second-class; users expect first-class support.
3. **TUI polish for power users** — Fullscreen diff scrolling (#7597), mermaid diagrams (#7624), scroll-position preservation (#7616), keybinding completeness (#7629), per-invocation theming (#7622).
4. **Extension API hardening** — #7617 (advertised capabilities broken), #7615 (tool override fragility), #7618 (hard-coded system prompt pieces), #7599 (RPC over sockets), #7621 (argument completions RPC).
5. **Model/provider ecosystem expansion** — Cortecs (#7571), LLM Gateway (#7610), Qwen Individual (#7631), configurable compaction models (#7602). Community wants “bring your own router” flexibility.

---

## Developer Pain Points (Recurring Frustrations)

| Area | Signal | Frequency |
|------|--------|-----------|
| **Compaction reliability on enterprise Copilot** | 3 distinct issues (#7413, #7579, #7608) + PR #7602 in progress | High — blocks long sessions |
| **Windows tooling basics** | `find` globs, skills loading, dialog crashes, binary packaging | High — affects onboarding |
| **TUI scroll/jump regressions** | Fullscreen clear-screen on large tool output (#7616), duplicate compaction blocks (#7608), keybinding gaps (#7629) | Medium — daily UX friction |
| **Extension load failures** | Missing `node:sqlite` in binary (#7594), MCP adapter dep resolution (#7627), tool override renderer conflicts (#7615) | Medium — breaks custom workflows |
| **Security hygiene** | Pinned vulnerable deps in shrinkwrap (#7628), OAuth token leakage in error logs (#7605) | Low count, high severity |
| **Model selection quirks** | Bare model ID picks unauthenticated provider (#7327), `lm-studio` apiKey drops all models (#7620) | Medium — config confusion |

---

*Generated from `earendil-works/pi` GitHub activity (2026-08-04 → 2026-08-05). Links point to live issues/PRs.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-05

## 1. Today's Highlights
Qwen Code shipped two releases today: a preview build (v0.21.6-preview.0) adding browser-extension readiness diagnostics and headless Goal workflow documentation, plus a nightly (v0.21.5-nightly.20260805) with the same changes. The issue tracker shows active work on MCP reliability (SSE hang fix), daemon session recovery after log truncation, and a push to refresh the README with the full product matrix. PR velocity remains high with 50 updates in 24h, focused on CI hardening, omni-modal input expansion, and review-tool performance.

## 2. Releases
| Version | Type | Key Changes |
|---------|------|-------------|
| [v0.21.6-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.6-preview.0) | Preview | • `feat(browser-ext)`: alpha readiness diagnostics ([#6739](https://github.com/QwenLM/qwen-code/pull/6739))<br>• `docs`: headless Goal workflows documented |
| [v0.21.5-nightly.20260805.32e274157](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.5-nightly.20260805.32e274157) | Nightly | Same changes as preview; nightly validation build |

## 3. Hot Issues (10 Noteworthy)
| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#8550](https://github.com/QwenLM/qwen-code/issues/8550) | `qwen mcp list` hangs indefinitely on SSE server that never sends `endpoint` | Blocks CLI tooling for MCP server discovery; P2 bug with ready-for-agent label | 4 comments, active triage |
| [#8532](https://github.com/QwenLM/qwen-code/issues/8532) | CI logs make mocked disk-full test errors look like runner ENOSPC | Noise in CI obscures real runner failures; affects developer trust in CI | 5 comments, P3 |
| [#8558](https://github.com/QwenLM/qwen-code/issues/8558) | Use API-backed model metadata for limits and capabilities | Moves hardcoded model limits to authoritative provider metadata (models.dev); enables future-proof capability detection | 2 comments, P2, roadmap-tagged |
| [#8412](https://github.com/QwenLM/qwen-code/issues/8412) | **CLOSED** fix(webui): Recover complete turns after live journal truncation | Daemon session recovery after 10k-event/8MiB truncation; improves long-session reliability | 3 comments, fixed via [#8414](https://github.com/QwenLM/qwen-code/pull/8414) |
| [#8557](https://github.com/QwenLM/qwen-code/issues/8557) | Shrinking terminal reprints transcript blocks (duplicate output) | macOS/Warp rendering bug; degrades TUI experience during resize | 2 comments, P3, UI/rendering |
| [#8551](https://github.com/QwenLM/qwen-code/issues/8551) | Add Korean (ko) to docs site and README language bar | Internationalization expansion; community-contributed localization | 3 comments, P3 |
| [#8556](https://github.com/QwenLM/qwen-code/issues/8556) | Refresh README to showcase full product matrix with screenshots | Discovery gap: README only shows CLI; misses Desktop, IDE plugins, Daemon, SDK, IM | 2 comments, P3, documentation |
| [#7167](https://github.com/QwenLM/qwen-code/issues/7167) | Fleet Shepherd Dashboard (auto-maintained) | Fleet health monitoring; 0 syncs/dispatches this tick — possible idle fleet | Bot-maintained, 3 comments |
| [#8554](https://github.com/QwenLM/qwen-code/pull/8554) | docs: document the Session Workflow setting | Experimental setting shipped without user-facing docs; now documented | PR linked, 0 comments |
| [#8482](https://github.com/QwenLM/qwen-code/pull/8482) | fix(core): never-delivered MCP call is first delivery, not replay | Fixes flaky test since replay-safety gate; ensures correct MCP reconnection semantics | PR open, autofix/takeover |

## 4. Key PR Progress (10 Important)
| # | Title | Type | Status | Impact |
|---|-------|------|--------|--------|
| [#8332](https://github.com/QwenLM/qwen-code/pull/8332) | feat(cli): add audio bridge for attachments | Feature | Open | Transcribes audio via batch voice model when primary model lacks audio support; enables `@` audio attachments in interactive/headless |
| [#8512](https://github.com/QwenLM/qwen-code/pull/8512) | feat(omni): S2 input expansion — image/audio/URL sources | Feature | Open | Extends omni experiment beyond video: images, audio, URL media, tool-result media, token-dimension guard |
| [#8423](https://github.com/QwenLM/qwen-code/pull/8423) | feat(serve): observe daemon/child memory against real denominators | Feature | Open | Replaces estimated memory denominators with actual RSS/heap readings; enables accurate memory pressure signaling |
| [#8421](https://github.com/QwenLM/qwen-code/pull/8421) | fix(core): remove fixed Goal continuation limit | Fix | Open | Removes hard 50-continuation cap; Goals now run until lifecycle outcome, user pause, or explicit policy |
| [#8425](https://github.com/QwenLM/qwen-code/pull/8425) | feat(core): share compression cache with Gemini/Vertex AI | Perf | Open | Reuses conversation prefix via Google GenAI implicit caching; falls back to cold compression on errors |
| [#8555](https://github.com/QwenLM/qwen-code/pull/8555) | fix(cli): time out silent MCP SSE startup | Fix | Open | Addresses #8550: wall-clock timeout on SSE connection attempt; prevents indefinite hang |
| [#8386](https://github.com/QwenLM/qwen-code/pull/8386) | ci: run Windows merge queue tests on ECS | CI | Open | Routes Windows merge-queue to validated self-hosted `ecs-win` runner; keeps `windows-2022` fallback |
| [#8490](https://github.com/QwenLM/qwen-code/pull/8490) | feat(review): test diff's reverse-dependency closure, fail open | CI | Open | Scopes review test suite to affected workspaces (like build); falls back to full suite on failure |
| [#8498](https://github.com/QwenLM/qwen-code/pull/8498) | perf(review): retire dry chunks and pipeline verification in reverse audit | Perf | Open | Cuts review latency by removing expensive reverse-audit loop iterations (5-round cap) |
| [#8442](https://github.com/QwenLM/qwen-code/pull/8442) | fix: add onCompromised handlers to proper-lockfile calls | Fix | **Closed** | Prevents daemon crash when lock lost; logs warning instead of throwing |

## 5. Feature Request Trends
1. **Model Metadata Abstraction** — Move from hardcoded limits to provider-authoritative metadata (models.dev, future provider-native) ([#8558](https://github.com/QwenLM/qwen-code/issues/8558)).
2. **Omni-Modal Input Unification** — Single pipeline for image/audio/video/URL/tool-result media with token-dimension guards ([#8512](https://github.com/QwenLM/qwen-code/pull/8512)).
3. **Product Discoverability** — README refresh to show full matrix: CLI, TUI, Headless, IDE plugins, Desktop, Daemon, SDK, IM ([#8556](https://github.com/QwenLM/qwen-code/issues/8556)).
4. **Internationalization** — Korean language support for docs and README ([#8551](https://github.com/QwenLM/qwen-code/issues/8551)).
5. **Session Workflow Controls** — Experimental setting for live journal truncation recovery and Web Shell presentation ([#8554](https://github.com/QwenLM/qwen-code/pull/8554)).
6. **MCP Reliability** — Timeouts, reconnection semantics, and SSE transport hardening ([#8550](https://github.com/QwenLM/qwen-code/issues/8550), [#8482](https://github.com/QwenLM/qwen-code/pull/8482)).

## 6. Developer Pain Points
- **MCP SSE Transport Fragility** — `qwen mcp list` hangs silently on slow/unresponsive SSE endpoints; no startup timeout ([#8550](https://github.com/QwenLM/qwen-code/issues/8550), fixed in [#8555](https://github.com/QwenLM/qwen-code/pull/8555)).
- **CI Noise & Flakiness** — Mocked test errors (disk-full) pollute CI logs, mimicking real runner failures ([#8532](https://github.com/QwenLM/qwen-code/issues/8532)); Windows merge-queue instability requiring self-hosted runner migration ([#8386](https://github.com/QwenLM/qwen-code/pull/8386)).
- **Terminal Rendering Glitches** — macOS/Warp duplicate transcript blocks on window resize ([#8557](https://github.com/QwenLM/qwen-code/issues/8557)).
- **Daemon Session Recovery** — Live journal truncation (10k events/8MiB) lost turn context; now fixed with authoritative truncation markers ([#8412](https://github.com/QwenLM/qwen-code/issues/8412) → [#8414](https://github.com/QwenLM/qwen-code/pull/8414)).
- **Review Latency** — Full test suite on every review (13–16 min); reverse-dependency scoping + fail-open now in progress ([#8490](https://github.com/QwenLM/qwen-code/pull/8490), [#8498](https://github.com/QwenLM/qwen-code/pull/8498)).
- **Lockfile Daemon Crashes** — Missing `onCompromised` handlers caused daemon exits on lock loss; patched ([#8442](https://github.com/QwenLM/qwen-code/pull/8442)).

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-05

---

## 1. Today's Highlights

The project is in a **build-performance crisis**: the 683k-line `codewhale-tui` monolith (86% of workspace) recompiles on every edit, commit, and test, prompting an epic refactor (v0.9.5) to split crates, decouple git-SHA stamping, and drop fat-LTO from local gates. Meanwhile, **multi-provider UX gaps** surface: Anthropic-compatible APIs reject a `type` parameter (#4978), unknown model IDs silently fall back to 128K context (#5244/#5239), and users cannot store multiple API keys (#5250). The v0.9.4 release train (#5135) is staging with 77 commits, while ACP/Runtime API expansions (#5225, #5129–#5133) unlock headless/editor integrations.

---

## 2. Releases

**None in the last 24h.** The v0.9.4 release train (#5135) is open with 77 commits ahead of `main`, integrating rail unification, MCP registry, and runtime API work.

---

## 3. Hot Issues

| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#4978](https://github.com/Hmbown/CodeWhale/issues/4978) | **Anthropic API `type` validation error** | Breaks OpenModel/Anthropic-compatible providers; intermittent `400: 'type' must be in ["enabled","disabled","auto"]` | 6 comments, active repro attempts |
| [#4991](https://github.com/Hmbown/CodeWhale/issues/4991) | **Compilation times & TUI monolith** | Core dev pain: 683k-line crate dominates workspace; every edit/commit/test pays full rebuild cost | 4 comments, sparked #5249 epic |
| [#4955](https://github.com/Hmbown/CodeWhale/issues/4955) | **Zero-sandbox / `--no-sandbox` mode** | Kernel Seatbelt sandbox breaks basic shell cmds daily; no escape hatch for local dev | 4 comments, 👍1 |
| [#5209](https://github.com/Hmbown/CodeWhale/issues/5209) | **File edit silently accepts wrong params** | `new_str` vs `replace` returns fake success → 3–5× re-edits; silent data corruption risk | 3 comments |
| [#5250](https://github.com/Hmbown/CodeWhale/issues/5250) | **Only one API key saved** | Switching providers (DeepSeek ↔ GLM) requires re-entering keys; no multi-key store | 1 comment, fresh |
| [#5244](https://github.com/Hmbown/CodeWhale/issues/5244) | **Unknown model IDs → silent 128K fallback** | 1M-context models compact at 128K with no warning; residual bug from #5239 | 1 comment, author=Hmbown |
| [#5241](https://github.com/Hmbown/CodeWhale/issues/5241) | **Pricing endpoint 503 → all sessions `unverified_live_pricing`** | Cost display broken since 0.9.3; affects all providers/routes | 1 comment |
| [#5249](https://github.com/Hmbown/CodeWhale/issues/5249) | **Epic: v0.9.5 build-time lane** | Systematic attack on monolith tax: crate split, SHA decoupling, test consolidation, profile split | 0 comments, author=Hmbown, 4 sub-issues |
| [#5248](https://github.com/Hmbown/CodeWhale/issues/5248) | **Shrink 708-pkg build graph** | 95 build scripts, 52 proc-macros, 10+ duplicate versions; `codewhale-tui` carries redundant deps | 0 comments, author=Hmbown |
| [#5243](https://github.com/Hmbown/CodeWhale/issues/5243) | **OAuth login must adopt minted token** | xAI/ChatGPT device login succeeds but session lacks credentials; requires manual provider-picker step | 0 comments, author=Hmbown |

---

## 4. Key PR Progress

| # | Title | Type | Impact |
|---|-------|------|--------|
| [#5135](https://github.com/Hmbown/CodeWhale/pull/5135) | **release: v0.9.4 release train** | Release | 77 commits; integrates rail unification, MCP registry, runtime APIs |
| [#5242](https://github.com/Hmbown/CodeWhale/pull/5242) | **feat(tui/subagent): resume interrupted children from checkpoint** | Feature | Enables long-running subagents (doc review, multi-step search) to resume after interruption |
| [#5225](https://github.com/Hmbown/CodeWhale/pull/5225) | **feat(acp): expose file/search/git/patch/shell tools over session/prompt** | Feature | Unlocks ACP clients (Zed, `acp-deepseek-adapter`) to execute tools, not just chat |
| [#5133](https://github.com/Hmbown/CodeWhale/pull/5133) | **feat(runtime-api): persistent goal-loop state & completion controls** | API | Managed clients can read/transition active goals via HTTP |
| [#5132](https://github.com/Hmbown/CodeWhale/pull/5132) | **Runtime API: verifier receipts & evidence** | API | Exposes per-task failure details, not just aggregate counter |
| [#5131](https://github.com/Hmbown/CodeWhale/pull/5131) | **feat: Runtime API memory endpoints** | API | Bounded inspection + lifecycle controls for agent memory |
| [#5130](https://github.com/Hmbown/CodeWhale/pull/5130) | **feat(runtime-api): bounded MCP server config & lifecycle** | API | CRUD for MCP servers via HTTP (was TOML-only) |
| [#5129](https://github.com/Hmbown/CodeWhale/pull/5129) | **feat(runtime-api): skill lifecycle endpoints** | API | Install/update/uninstall/trust/audit skills over HTTP |
| [#5240](https://github.com/Hmbown/CodeWhale/pull/5240) | **feat(tui/shell): surface real wait elapsed time in tool content** | UX | Model sees actual wait duration → stops busy-polling short waits |
| [#5238](https://github.com/Hmbown/CodeWhale/pull/5238) | **feat(mcp): MCP Registry discovery with Registry-first tool selection** | Feature | Model prefers public MCP Registry stdio servers over `exec_shell`/custom code |

---

## 5. Feature Request Trends

1. **Multi-provider credential management** — Store multiple API keys per provider (#5250), OAuth token adoption (#5243), and provider-agnostic key rotation.
2. **Sandbox escape hatches** — `--no-sandbox` mode (#4955), filesystem allowlists for external artifacts (#5005 closed), and per-command sandbox toggles.
3. **Model capability transparency** — Explicit warnings when model IDs are unknown (#5244), accurate context-window reporting (#5239), and reasoning-stream surfacing (#5233).
4. **Headless/editor integration** — ACP tool execution (#5225), Runtime API surface expansion (#5129–#5133), and MCP Registry discovery (#5238).
5. **Build-performance investment** — Crate splitting, incremental compilation, test harness consolidation, and profile decoupling (#5249, #5248, #5245, #5247, #5246).

---

## 6. Developer Pain Points

| Pain Point | Frequency | Evidence |
|------------|-----------|----------|
| **Monolith recompilation tax** | Critical | 683k-line `codewhale-tui` rebuilds on every edit, commit (`git SHA` stamp), and test (25 integration binaries); fat-LTO on pre-push |
| **Silent tool failures** | High | File edit accepts wrong params (#5209), unknown models degrade to 128K (#5244), pricing 503 hides costs (#5241) |
| **Provider-switching friction** | High | Single API key slot (#5250), OAuth token not auto-adopted (#5243), Anthropic-compat `type` param rejected (#4978) |
| **Sandbox overreach** | High | Seatbelt breaks shell cmds daily (#4955), no allowlist for Xcode DerivedData (#5005) |
| **Observability gaps** | Medium | Wait duration hidden from model (#5240), verifier only shows aggregate counter (#5132), no memory inspection (#5131) |

---

*Digest generated from GitHub data (issues/PRs updated 2026-08-04 to 2026-08-05). All links point to `Hmbown/CodeWhale`.*

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*