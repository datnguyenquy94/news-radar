# AI CLI Tools Community Digest 2026-08-06

> Generated: 2026-08-06 03:20 UTC | Tools covered: 10

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

# Cross-Tool Comparison Report: AI CLI Tools Ecosystem (2026-08-06)

---

## 1. Ecosystem Overview

The AI CLI tools landscape is in a **high-velocity stabilization phase** across all major players. Every active project shipped releases or pre-releases in the last 24 hours, with a clear bifurcation: **enterprise-grade tools (Claude Code, Codex, Copilot CLI, Gemini CLI, Qwen Code)** are hardening core workflows—MCP reliability, session persistence, multi-agent orchestration, and security boundaries—while **newer entrants (OpenCode, Pi, DeepSeek TUI, Kimi)** are rapidly building runtime APIs, plugin markets, and desktop parity. Windows remains a systemic weak spot across the board. Security regressions (Claude Code git proxy, Qwen shell classifier) and silent data corruption (Kimi StrReplaceFile, Claude Code MCP param dropping) signal that **supply-chain and execution-sandbox trust** is now a primary differentiator.

---

## 2. Activity Comparison

| Tool | Releases (24h) | Hot Issues Tracked | PRs Updated | Release Cadence |
|------|----------------|-------------------|-------------|-----------------|
| **Claude Code** | 1 stable (v2.1.223) | 10 | 5 open | ~weekly stable |
| **OpenAI Codex** | 1 patch + 6 alphas | 10 | 10 merged | Daily alpha train |
| **Gemini CLI** | 1 stable + 1 preview + 1 nightly | 10 | 10 (3 closed) | Multi-channel |
| **GitHub Copilot CLI** | 4 pre-releases (1.0.79-2..5) | 10 | 0 | Rapid pre-release |
| **Kimi Code CLI** | 0 | 3 | 3 open | Low frequency |
| **OpenCode** | 1 stable (v1.18.14) | 10 | 10 (5 open) | ~bi-weekly stable |
| **Pi** | 0 | 10 | 10 (6 closed) | Irregular |
| **Qwen Code** | 1 stable + 1 nightly + 1 desktop v0.1.0 | 10 | 10 open | Multi-channel |
| **DeepSeek TUI** | 0 (v0.9.4 train open) | 1 | 14 open | Train-based |
| **Grok Build** | 0 | 0 | 0 | Inactive |

**Key Signal**: Codex’s 6 alpha drops and Copilot CLI’s 4 pre-releases in 24h indicate **release-train acceleration** ahead of major feature landings (multi-agent V2, session UI). Qwen’s desktop v0.1.0 marks a strategic pivot to packaged apps.

---

## 3. Shared Feature Directions

| Requirement | Tools Affected | Specific Community Needs |
|-------------|----------------|--------------------------|
| **MCP Reliability & Security** | Claude Code, Codex, Gemini CLI, Copilot CLI, Qwen Code, OpenCode | Param dropping (Claude #72228), auth header leaks (Claude #80045), server/discover assumptions (Copilot #4370), OAuth refresh (Gemini #28481), policy blocks (Copilot #3934) |
| **Multi-Agent / Subagent Orchestration** | Codex, Gemini CLI, Qwen Code, OpenCode, DeepSeek TUI | Cross-provider encrypted payloads (Codex #34833), subagent hangs/false success (Gemini #21409, #22323), tmux-backed interactive sub-agents (Qwen #8613), goal-loop state API (DeepSeek #5133), checkpoint resume (DeepSeek #5242) |
| **Session Persistence & Portability** | Claude Code, Codex, Gemini CLI, Copilot CLI, OpenCode, Qwen Code | `--continue` blind to `-p` sessions (Claude #82536), rollout `cwd` staleness (Codex #37198), auto-compress on overflow (Gemini #28488), multi-session UI (Copilot 1.0.79-5), workspace flows (OpenCode #38790), desktop session mirrors (Qwen desktop-v0.1.0) |
| **Windows First-Class Support** | Claude Code, Codex, Copilot CLI, OpenCode, Qwen Code, Kimi Code | GPU crashes (Claude #83744), OAuth broken (Codex #25203), native crashes (Copilot #4026), ConPTY/PowerShell exit kills (OpenCode #27749), desktop `EISDIR` crash (Qwen #8615), linker arg quoting (DeepSeek #5095) |
| **Model/Provider Flexibility (BYOM)** | Codex, OpenCode, Pi, Qwen Code, DeepSeek TUI | Cross-provider subagent encryption (Codex), local model tool-call execution (OpenCode #14026), LM Studio/Meta/Bedrock/Qwen providers (Pi), dynamic modality resolution (Qwen #8529), ACP tool execution (DeepSeek #5225) |
| **Context/Token Management** | Claude Code, Gemini CLI, Pi, Qwen Code, OpenCode | No local timezone (Claude #84145), auto-compact on overflow (Gemini #28488), compaction 400 retry loops (Pi #6879, OpenCode #39291), checkpoint evidence (Qwen #8465), thinking token budget (Pi #7638) |
| **Desktop/TUI Rendering Robustness** | Claude Code, Codex, Gemini CLI, Copilot CLI, Qwen Code, DeepSeek TUI, OpenCode | 5-hr crash+reinstall (Claude #83403), light-terminal invisibility (Codex #2020), tmux flicker (Qwen #8580), alt-screen regressions (Copilot #1799), ratatui CPR race (DeepSeek #5192), Solid.js infinite loop (OpenCode #31099) |

---

## 4. Differentiation Analysis

| Dimension | Enterprise/Platform Tools | Emerging/Specialized Tools |
|-----------|---------------------------|----------------------------|
| **Primary Focus** | **Claude Code**: Enterprise governance (marketplace allow/block, Cloud/Cowork), model quality control<br>**Codex**: Security hardening (cyber-capable models), multi-agent V2, session migration<br>**Gemini CLI**: Subagent reliability, eval infrastructure, memory hardening<br>**Copilot CLI**: Multi-session UI, worktree integration, GHEC parity<br>**Qwen Code**: Desktop app parity, multimodal/omni models, daemon/serve backend | **OpenCode**: V2 protocol migration, hosted workspaces, plugin marketplace<br>**Pi**: Provider diversity, harness extensibility, XDG/X11 hygiene<br>**DeepSeek TUI**: Runtime API parity (memory, MCP, goals, skills, verifier receipts), ACP as full agent protocol<br>**Kimi Code**: Memory system, encoding safety, capability degradation over abort |
| **Target Users** | Professional/enterprise dev teams, platform engineers, security-conscious orgs | Power users, OSS contributors, researchers, desktop-first workflows |
| **Technical Approach** | Monolithic CLIs with cloud-backed services, heavy sandboxing, managed marketplaces | Modular runtime APIs, protocol-first (ACP, V2), self-hostable, hackable internals |
| **Release Strategy** | Multi-channel (stable/preview/nightly/alpha), frequent patches, security-first | Train-based (OpenCode, DeepSeek), irregular but large feature drops |
| **Trust Boundary** | Cloud-managed (Claude Cloud, Codex, Copilot GHEC) | Local-first, user-controlled execution environments |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|------|-------|----------|
| **High Momentum, High Maturity** | **OpenAI Codex**, **GitHub Copilot CLI** | Codex: 6 alphas + 10 merged PRs in 24h; 143 👍 on multi-root workspace. Copilot: 4 pre-releases, multi-session UI shipping, enterprise MCP policy work. |
| **High Momentum, Maturing** | **Qwen Code**, **Gemini CLI** | Qwen: Desktop v0.1.0 + 10 PRs + security hardening. Gemini: 3-channel releases, 10 PRs, eval infra scaling (76 tests/6 models). |
| **Steady Enterprise Velocity** | **Claude Code** | Stable weekly cadence, but critical regressions (git proxy, ugrep memory) and model quality debates indicate growing pains at scale. |
| **Rapid Iteration, Pre-1.0** | **OpenCode**, **DeepSeek TUI**, **Pi** | OpenCode: V2 migration + hosted workspaces + plugin marketplace (23 👍). DeepSeek: 14 PRs expanding runtime API surface. Pi: 10 PRs fixing leaks, adding providers. |
| **Early Stage / Niche** | **Kimi Code CLI** | Only 3 issues/PRs, but focused on memory system and encoding safety—addressing gaps others haven’t prioritized. |
| **Inactive** | **Grok Build** | No activity. |

**Community Health Indicators**: Codex and Copilot CLI show highest **engagement velocity** (PR throughput + issue 👍). Claude Code has highest **severity density** (P0 regressions blocking paying users). DeepSeek TUI demonstrates **architectural clarity** (runtime API parity as explicit goal).

---

## 6. Trend Signals for Technical Decision-Makers

| Trend | Signal Strength | Implications |
|-------|-----------------|--------------|
| **Protocol-First Interoperability (ACP, MCP, V2)** | 🔥🔥🔥 | DeepSeek TUI exposing every TUI capability via HTTP; Codex standardizing `tool_search` namespace; Qwen daemon aligning with CLI permissions. **Build integrations against protocols, not CLIs.** |
| **Desktop App as Default Delivery** | 🔥🔥 | Qwen desktop-v0.1.0, Copilot CLI multi-session UI, Claude Code Desktop crashes. **Expect Electron/Tauri wrappers with bundled runtimes to become primary UX.** |
| **Windows as Tier-1 Blockers** | 🔥🔥🔥 | Every Windows-active tool has P0 crashes/auth breaks. **CI must include native Windows (not just WSL); ConPTY/psmux/PowerShell exit handling is a shared unsolved problem.** |
| **Security Boundaries Hardening** | 🔥🔥 | Claude Code git proxy regression, Qwen shell classifier bypass, Copilot background-agent hook bypass, Kimi silent corruption. **Supply-chain and execution-sandbox audits are now table stakes.** |
| **Multi-Agent = Distributed Systems Problem** | 🔥🔥 | Encrypted payloads, checkpoint resumption, goal-loop state, verifier receipts. **Treat subagents as microservices: observability, retry, timeout, circuit-breaker required.** |
| **Context Management → Explicit Control** | 🔥🔥 | Auto-compress (Gemini), thinking token budget (Pi), checkpoint evidence (Qwen), compaction retry loops (OpenCode, Pi). **Developers demand knobs, not magic.** |
| **Provider Diversity > Single-Vendor Lock-in** | 🔥 | Pi adding 5+ providers in one day; Codex/Ollama/DeepSeek cross-provider bugs; Qwen dynamic modality resolution. **Design for model-agnostic tool calling from day one.** |
| **Memory/Context Persistence as Product Differentiator** | 🔥 | Claude session portability, Kimi memory system (19 👍), OpenCode V1→V2 migration, DeepSeek bounded memory API. **Cross-session continuity is the next UX battleground.** |

---

## Bottom Line for Developers

- **If you need enterprise governance & cloud integration today**: **Claude Code** (despite regressions) or **Copilot CLI** (GHEC parity advancing fast).
- **If you want cutting-edge multi-agent & protocol flexibility**: **OpenAI Codex** (alpha) or **DeepSeek TUI** (runtime API).
- **If you prioritize local-first, hackable, desktop-native**: **Qwen Code** (desktop v0.1.0) or **OpenCode** (V2 + hosted workspaces).
- **If you need multimodal/omni model support now**: **Qwen Code** (S2 expansion) or **Gemini CLI** (subagent eval infra).
- **Watch Windows

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-08-06 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| # | Skill / PR | Functionality | Discussion Highlights | Status |
|---|------------|---------------|----------------------|--------|
| 1 | **[#1298](https://github.com/anthropics/skills/pull/1298)** `skill-creator`: fix `run_eval.py` 0% recall | Core fix for the skill description optimization loop — installs eval artifact as real skill, fixes Windows stream reading, trigger detection, parallel workers | Root cause of **#556** (12 comments, 7 👍) and **#1169**; description-optimization loop was "optimizing against noise" | 🟢 Open |
| 2 | **[#514](https://github.com/anthropics/skills/pull/514)** `document-typography` | Typographic QC for AI-generated documents: prevents orphan words, widow paragraphs, numbering misalignment | Addresses "issues affect every document Claude generates"; users rarely request good typography explicitly | 🟢 Open |
| 3 | **[#1367](https://github.com/anthropics/skills/pull/1367)** `self-audit` (v1.3.0) | Mechanical file verification → four-dimension reasoning audit (damage-severity priority); universal across projects/stacks | Proposed alongside **#1385** (Reasoning Quality Gate Pipeline, 4 comments); meta-skill for output quality gates | 🟢 Open |
| 4 | **[#723](https://github.com/anthropics/skills/pull/723)** `testing-patterns` | Comprehensive testing skill: Testing Trophy, AAA pattern, React Testing Library, contract testing, E2E, property-based, mutation testing | Covers full stack from philosophy to CI integration; high practical value for engineering teams | 🟢 Open |
| 5 | **[#83](https://github.com/anthropics/skills/pull/83)** `skill-quality-analyzer` + `skill-security-analyzer` | Meta-skills for marketplace: 5-dimension quality scoring (structure, docs, examples, resources, security) + threat modeling | Addresses skill review automation; security analyzer covers prompt injection, path traversal, secret leakage | 🟢 Open |
| 6 | **[#1302](https://github.com/anthropics/skills/pull/1302)** `color-expert` | Self-contained color expertise: naming systems (ISCC-NBS, Munsell, XKCD, RAL), color spaces (OKLCH, OKLAB, CAM16), accessibility | Broad applicability across design, data viz, frontend, print; "what to use when" decision tables | 🟢 Open |
| 7 | **[#1479](https://github.com/anthropics/skills/pull/1479)** `plan-file-hygiene` | Lifecycle management for planning artifacts (addresses **#1417**); prevents accumulation of stale planning docs | Community-identified gap: "planning artifacts accumulate with no lifecycle" (**#1417**) | 🟢 Open |
| 8 | **[#486](https://github.com/anthropics/skills/pull/486)** `odt` (OpenDocument) | Create, fill, read, convert ODT/ODS; triggers on "ODT", "ODS", "OpenDocument", "LibreOffice" | ISO-standard format support; complements existing `docx`/`pdf` skills | 🟢 Open |

> **Note**: PR comment counts show as `undefined` in source data; ranking inferred from issue cross-references, update frequency, and community engagement signals.

---

## 2. Community Demand Trends (From Issues)

| Trend | Evidence (Issues) | Signal Strength |
|-------|-------------------|-----------------|
| **Skill distribution security & trust boundaries** | **#492** (43 comments, 2 👍): Community skills masquerading as official `anthropic/` namespace skills; trust boundary abuse | 🔴 Critical |
| **Org-wide skill sharing & collaboration** | **#228** (16 comments, 8 👍): Need shared skill library / direct sharing links instead of manual file transfer via Slack/Teams | 🟠 High |
| **Fix broken skill evaluation/creation tooling** | **#556** (12 comments, 7 👍), **#1169** (3 comments, 1 👍), **#202** (8 comments, closed): `run_eval.py` 0% recall, `skill-creator` reads like docs not ops | 🟠 High |
| **Meta-skills for skill quality & governance** | **#412** (6 comments, closed): `agent-governance` for policy enforcement/threat detection; **#83** PR adds quality/security analyzers | 🟡 Growing |
| **Duplicate/de-duplication of bundled skills** | **#189** (6 comments, 9 👍): `document-skills` + `example-skills` install identical content → context window waste | 🟡 Growing |
| **Context window optimization** | **#1487** (4 comments): `claude-api` skill injects ~156k tokens in single call; **#1329** (9 comments): `compact-memory` for symbolic agent state | 🟡 Growing |
| **Enterprise/Platform integration** | **#29** (4 comments): Bedrock support; **#1175** (4 comments, closed): SharePoint Online permissions in skills; **#16** (4 comments): Expose skills as MCPs | 🟢 Niche |

---

## 3. High-Potential Pending Skills (Active Open PRs)

| PR | Skill | Why It Has Momentum |
|----|-------|---------------------|
| **[#1298](https://github.com/anthropics/skills/pull/1298)** | `skill-creator` eval fixes | Blocks entire description-optimization pipeline; 3+ related issues (**#556**, **#1169**, **#1323**); Windows + Linux fixes bundled |
| **[#514](https://github.com/anthropics/skills/pull/514)** | `document-typography` | Universal pain point (every generated document); no competing skill; clear spec |
| **[#723](https://github.com/anthropics/skills/pull/723)** | `testing-patterns` | Comprehensive coverage (unit → E2E → contract → mutation); high reuse value for dev teams |
| **[#1367](https://github.com/anthropics/skills/pull/1367)** | `self-audit` | Meta-skill aligning with **#1385** proposal; mechanical + reasoning gates; universal applicability |
| **[#1479](https://github.com/anthropics/skills/pull/1479)** | `plan-file-hygiene` | Directly addresses community-identified lifecycle gap (**#1417**); recent (Jul 2026), active discussion |
| **[#1302](https://github.com/anthropics/skills/pull/1302)** | `color-expert` | Cross-domain utility (design, viz, frontend, print); self-contained; decision tables reduce hallucination |
| **[#83](https://github.com/anthropics/skills/pull/83)** | `skill-quality-analyzer` / `skill-security-analyzer` | Enables automated skill review; security analyzer covers OWASP-style threats for skills |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is fixing the broken skill creation & evaluation pipeline (especially `run_eval.py` 0% recall on Windows/Linux) so that new skills can be reliably authored, tested, and optimized — while simultaneously demanding secure, shareable skill distribution and meta-skills that govern skill quality at scale.**

---

# Claude Code Community Digest — 2026-08-06

---

## 1. Today's Highlights

- **v2.1.223 released** with owner wildcard support (`owner/*`) for marketplace allow/block lists and new warnings for workflow agents, forked skills, slash commands, and resumed background agents.
- **Critical Cloud/Cowork regression** (#76248): git proxy now blocks all pushes to non-authorized repos—even with a user-supplied PAT—breaking remote workflows since ~10 Jul.
- **Model quality debate intensifies**: Opus 4.8 criticized for "toxic" language; Opus 5.0 accused of "incoherence" (#77136, 8 👍), while a new undocumented `heron_brook` prompt section overrides delegation policy for Opus 5 only (#84053).

---

## 2. Releases

### v2.1.223
- **Marketplace controls**: Added `"owner/*"` wildcard entries to `strictKnownMarketplaces` and `blockedMarketplaces` managed settings.
- **Warnings**: New warnings when workflow agents, forked skills, slash commands, or resumed background agents are used.
- [Release notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.223)

---

## 3. Hot Issues (Top 10 by Impact & Engagement)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#76248](https://github.com/anthropics/claude-code/issues/76248) | **Cloud/Cowork: git proxy blocks all pushes** — PAT pass-through broken | Blocks all remote pushes in cloud sessions; appeared mid-session without notice. | 11 comments, 5 👍, **has repro** |
| [#77136](https://github.com/anthropics/claude-code/issues/77136) | **Opus 4.8 "toxic" language; Opus 5.0 "incoherent"** | Core model quality complaint affecting daily usability. | 8 comments, **8 👍** |
| [#72228](https://github.com/anthropics/claude-code/issues/72228) | **MCP tool calls silently drop parameters after long value** | Silent data loss on parameter-rich MCP calls (6.2% field loss measured). | 5 comments, 1 👍, **has repro** |
| [#83403](https://github.com/anthropics/claude-code/issues/83403) | **Desktop crashes at ~5-hour limit; requires full reinstall** | Hard crash + unrecoverable state; major productivity blocker. | 7 comments |
| [#82536](https://github.com/anthropics/claude-code/issues/82536) | **`--continue` cannot find sessions created by `-p`** | Interactive resume broken; sessions created via `-p` invisible to `--continue`. | 7 comments |
| [#83342](https://github.com/anthropics/claude-code/issues/83342) | **Bundled ugrep balloons to 9–14 GB RSS** on bounded-interval BRE | Memory explosion during routine grep; affects all agent Bash tool calls. | 4 comments |
| [#83744](https://github.com/anthropics/claude-code/issues/83744) | **Windows Desktop: GPU process crash (exitCode 101457950) kills app** | Hard crash on Windows 1.24012.11.0; whole app terminates. | 4 comments |
| [#74715](https://github.com/anthropics/claude-code/issues/74715) | **Chrome "Always allow" persisted as `duration:"once"`** | Site permissions never stick; prompt repeats every browser action. | 4 comments, **platform:windows** |
| [#80045](https://github.com/anthropics/claude-code/issues/80045) | **MCP `env` secrets exposed in plaintext via `--mcp-config` argv** | Tokens visible in `ps`/`/proc`/EDR logs when launched via VS Code extension. | 1 comment, **Security** |
| [#84145](https://github.com/anthropics/claude-code/issues/84145) | **No local time/timezone in context** — model reasons in UTC | System prompt gives bare date; transcripts are UTC-only → "this evening" in morning. | 1 comment, 1 👍 |

---

## 4. Key PR Progress (All 5 Open PRs)

| # | PR | Summary | Status |
|---|----|---------|--------|
| [#84365](https://github.com/anthropics/claude-code/pull/84365) | `fix(scripts): allow any user to prevent auto-close with thumbs down` | Matches dedupe bot promise; any 👎 prevents issue closure. | Open |
| [#84364](https://github.com/anthropics/claude-code/pull/84364) | `fix(hookify): fail closed on exceptions in pretooluse hook` | Exceptions now emit `permissionDecision: 'deny'` (was allowing gated tools). | Open |
| [#41661](https://github.com/anthropics/claude-code/pull/41661) | **Add 14 Revolutionary Claude Code Plugins** — Security, Performance, Architecture, Fullstack Automation | 14 plugin dirs + marketplace.json update (27 total); production-ready. | Open (since Mar) |
| [#16929](https://github.com/anthropics/claude-code/pull/16929) | `fix(code-review): respect --comment flag for GitHub posting` | `/code-review` now outputs to terminal by default; `--comment` posts to GH. | Open (since Jan) |
| [#84138](https://github.com/anthropics/claude-code/pull/84138) | `fix: workaround for self-signed certificate error in Cowork` | Addresses Bun not loading system certs on macOS (closes #24470). | Open |

---

## 5. Feature Request Trends

1. **Session portability & persistence** — Make transcripts/memory project-portable while keeping scratch files local-only ([#81946](https://github.com/anthropics/claude-code/issues/81946)); pin sessions / custom sort order in history sidebar ([#84368](https://github.com/anthropics/claude-code/issues/84368)).
2. **Input/gesture customization** — Disable left-arrow detach-to-background gesture (not rebindable via keybindings) ([#84348](https://github.com/anthropics/claude-code/issues/84348)); fix Option+Backspace/Cmd+Left/Right broken in Warp ([#72649](https://github.com/anthropics/claude-code/issues/72649)).
3. **MCP robustness** — Auto-reconnect stdio MCP servers after binary update ([#84363](https://github.com/anthropics/claude-code/issues/84363)); fix GitHub plugin auth header template leak ([#84367](https://github.com/anthropics/claude-code/issues/84367)).
4. **Security hardening** — Remove secrets from CLI argv ([#80045](https://github.com/anthropics/claude-code/issues/80045)); device identification for Chrome cross-machine control ([#77605](https://github.com/anthropics/claude-code/issues/77605)).
5. **Context awareness** — Inject local time/timezone into system prompt ([#84145](https://github.com/anthropics/claude-code/issues/84145)).

---

## 6. Developer Pain Points (Recurring Themes)

| Area | Pain Point | Representative Issues |
|------|------------|----------------------|
| **Cloud/Cowork** | Git push broken for non-authorized repos; PAT pass-through removed silently | [#76248](https://github.com/anthropics/claude-code/issues/76248) |
| **MCP Reliability** | Silent parameter dropping on long values; servers don't auto-reconnect; auth header bugs | [#72228](https://github.com/anthropics/claude-code/issues/72228), [#84363](https://github.com/anthropics/claude-code/issues/84363), [#84367](https://github.com/anthropics/claude-code/issues/84367) |
| **Desktop Stability** | 5-hour crash + reinstall loop (Win); GPU process crash (Win); startup toggle stuck (Win) | [#83403](https://github.com/anthropics/claude-code/issues/83403), [#83744](https://github.com/anthropics/claude-code/issues/83744), [#48078](https://github.com/anthropics/claude-code/issues/48078) |
| **Session Management** | `--continue` doesn't see `-p` sessions; no auto-reconnect for background agents | [#82536](https://github.com/anthropics/claude-code/issues/82536) |
| **Model Behavior** | Opus 4.8 "toxic" tone; Opus 5.0 incoherence; undocumented prompt overrides delegation | [#77136](https://github.com/anthropics/claude-code/issues/77136), [#84053](https://github.com/anthropics/claude-code/issues/84053) |
| **Resource Leaks** | ugrep 9–14 GB RSS on regex; bundled binary routing plain `grep` | [#83342](https://github.com/anthropics/claude-code/issues/83342) |
| **Windows-Specific** | Chrome perms not persisting; Proxifier LSP breaks API (ECONNRESET); Warp terminal keybindings | [#74715](https://github.com/anthropics/claude-code/issues/74715), [#83735](https://github.com/anthropics/claude-code/issues/83735), [#72649](https://github.com/anthropics/claude-code/issues/72649) |
| **Security** | MCP secrets in process argv; Chrome extension cross-machine drive without device ID | [#80045](https://github.com/anthropics/claude-code/issues/80045), [#77605](https://github.com/anthropics/claude-code/issues/77605) |

---

*Generated from `anthropics/claude-code` GitHub data as of 2026-08-06. Links point to live issues/PRs.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-06

---

## 1. Today's Highlights

The 0.146.1 patch lands a critical security fix: cyber-capable models now use stricter automatic-review defaults with clearer terminal permission prompts. Meanwhile, the 0.147.0 alpha train advances rapidly (six alpha drops in 24h), signaling heavy iteration on multi-agent V2, skill system refactors, and session persistence. Windows and cross-provider subagent bugs dominate community discussion, with OAuth, Computer Use, and encrypted payload handling all surfacing regressions.

---

## 2. Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **rust-v0.146.1** | Patch | **Security hardening**: safer automatic-review defaults for cyber-capable models; permission changes now explained in-terminal ([#37057](https://github.com/openai/codex/pull/37057)). |
| **rust-v0.147.0-alpha.13** | Alpha | Continuing rapid alpha cadence (6 drops today). Full changelog vs 0.146.0: [compare](https://github.com/openai/codex/compare/rust-v0.146.0...rust-v0.146.1). |

> **Note**: 0.147.0 alphas (.6.5, .10–.13) shipped same-day — expect consolidated beta soon.

---

## 3. Hot Issues (Top 10 by Community Signal)

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| **[#25203](https://github.com/openai/codex/issues/25203)** GitHub OAuth callback fails with “Unable to find Electron app” on Windows | Blocks GitHub auth entirely on Windows Desktop app; 38 comments, 21 👍 | High urgency — workaround requires manual token paste |
| **[#2880](https://github.com/openai/codex/issues/2880)** Copy/Export Message as Markdown | Long-standing UX gap for docs/issue transfer; 78 👍 shows strong demand | Closed but highly upvoted — likely shipped or in progress |
| **[#2020](https://github.com/openai/codex/issues/2020)** Light-background terminal support | Hard-coded dark colors make CLI unusable on light themes; 60 👍 | Closed — accessibility win for daylight developers |
| **[#2909](https://github.com/openai/codex/issues/2909)** Multi-root workspace support (VS Code) | Monorepo users can’t use extension; 143 👍 = top feature ask | Closed — major workflow unblock for enterprise |
| **[#25319](https://github.com/openai/codex/issues/25319)** Scope VS Code chats to current workspace | Chat history leaks across projects; 54 👍 | Open — privacy/organisation critical |
| **[#27694](https://github.com/openai/codex/issues/27694)** macOS Dock crash via `CodexDockTilePlugin` recursion | Hard crash on macOS 26.5; 17 comments, 8 👍 | Closed — stability fix for Apple Silicon |
| **[#34833](https://github.com/openai/codex/issues/34833)** MultiAgentV2 cross-provider subagent can’t consume encrypted task | Breaks custom-provider (non-OpenAI) child agents; 8 comments | Open — blocks BYOM (Bring Your Own Model) multi-agent |
| **[#33551](https://github.com/openai/codex/issues/33551)** Multi-Agent V2 sends OpenAI-specific `agent_message` to external providers | Same root cause as #34833; Ollama/other providers fail | Open — 7 comments, 4 👍 |
| **[#26112](https://github.com/openai/codex/issues/26112)** Caller-defined display names for spawned subagents | UX: subagents get random nicknames instead of semantic roles (Auditor, Librarius) | Open — 7 comments, low 👍 but high utility |
| **[#25934](https://github.com/openai/codex/issues/25934)** TUI markdown links not clickable (OSC 8) | Release notes claimed support; broken across terminals | Open — 6 comments, regression in 0.136.0 |

---

## 4. Key PR Progress (Today’s Merged Batch)

| PR | Area | Summary |
|----|------|---------|
| **[#37190](https://github.com/openai/codex/pull/37190)** | Security | **Interrupt cyber model turns after one Guardian denial** — circuit-breaker for `cyber`-specialty models; aligns with 0.146.1 release. |
| **[#37206](https://github.com/openai/codex/pull/37206)** | Images | **Unified image budget** — single 6k-pixel/10k-patch limit; hides legacy `detail` controls from `view_image`. |
| **[#37204](https://github.com/openai/codex/pull/37204)** | Messaging | **Durable user-message queue** — FIFO dispatch when thread idle; survives restarts. |
| **[#37199](https://github.com/openai/codex/pull/37199)** | Analytics | **Thread archive events** — `codex_thread_archive_event` with ID, action, timestamp. |
| **[#37198](https://github.com/openai/codex/pull/37198)** | Sessions | **Persisted `cwd` preferred** — fixes stale rollout `cwd` causing list/read mismatches. |
| **[#37191](https://github.com/openai/codex/pull/37191)** | Migration | **Preserve legacy semantics during rollout migration** — avoids context shifts on resume. |
| **[#37189](https://github.com/openai/codex/pull/37189)** | Multi-agent | **Track multi-agent usage hints in world state** — survives config changes / old history. |
| **[#37188](https://github.com/openai/codex/pull/37188)** | Tools | **Reserve `tool_search` namespace** — prevents collisions with built-in search tool. |
| **[#37175](https://github.com/openai/codex/pull/37175)** | History | **Legacy rollout → paginated history migration** — dry-run + apply modes, per-rollout outcomes. |
| **[#37166](https://github.com/openai/codex/pull/37166)** | TUI | **Keep textarea cursors in viewport** — fixes overflow/wrap cursor drift. |

> **Pattern**: Today’s PRs are largely internal hardening (migration, queue, analytics, security) — user-facing features (multi-agent, skills, images) are being stabilized under the hood.

---

## 5. Feature Request Trends

| Theme | Evidence | Signal |
|-------|----------|--------|
| **Workspace/project isolation** | #2909 (143 👍), #25319 (54 👍), #19426 (23 👍) | **High** — monorepo & multi-project workflows need scoped trust/chat/history |
| **Cross-provider / BYOM multi-agent** | #34833, #33551, #36586, #36321 | **High** — encrypted payloads & OpenAI-specific items break custom providers |
| **Subagent UX & observability** | #26112 (display names), #37113 (wait routing), #36321 (empty payload) | **Medium** — naming, debugging, task visibility |
| **Terminal accessibility** | #2020 (60 👍), #25934 (OSC 8 links) | **Medium** — light themes, clickable links, rendering fidelity |
| **Session persistence & sync** | #11907 (cross-surface sync), #37198 (cwd), #37191 (migration) | **Medium** — reliable resume across CLI/IDE/Desktop |
| **Computer Use / Windows sandbox** | #29242, #29238, #29267, #37043, #37201 | **Medium** — `sandboxPolicy` missing, `EnumWindows` failures block Windows automation |

---

## 6. Developer Pain Points (Recurring Frustrations)

1. **Windows is a second-class platform** — OAuth broken (#25203), Computer Use fails pre-execution (#29242, #29238, #29267, #37043, #37201), Korean profile crash (#28262), UI transparency glitches (#25754), usage-limit false positives (#37186).

2. **Multi-agent V2 + custom providers = broken** — Encrypted `agent_message` items unreadable by Ollama/DeepSeek/other Responses-compatible APIs (#34833, #33551, #36586). Subagents spawn but receive empty payloads (#36321, #37113).

3. **Session/history fragmentation** — VS Code chats leak across workspaces (#25319), archive restore doesn’t refresh (#11907), rollout `cwd` staleness (#37198), migration risks context drift (#37191).

4. **TUI/CLI rendering gaps** — Light-terminal invisibility (#2020), unclickable OSC 8 links (#25934), textarea cursor drift (#37166).

5. **Opaque model behavior** — No visibility into prompt cache breakpoints for GPT-5.6 (#35300), Guardian denial thresholds undocumented, cyber-model auto-review surprises (fixed in 0.146.1).

6. **Desktop app resource leaks** — macOS GPU/WindowServer CPU stays high post-session (#23026), Dock plugin recursion crash (#27694).

---

## Quick Links

- **Repo**: [github.com/openai/codex](https://github.com/openai/codex)
- **Releases**: [github.com/openai/codex/releases](https://github.com/openai/codex/releases)
- **Issues (all)**: [github.com/openai/codex/issues](https://github.com/openai/codex/issues)
- **Pull Requests**: [github.com/openai/codex/pulls](https://github.com/openai/codex/pulls)

--- 

*Digest generated from GitHub data as of 2026-08-06 00:00 UTC. For real-time updates, watch the repo or subscribe to release notifications.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-06

## 1. Today's Highlights
The project shipped **v0.54.0 stable** and **v0.55.0-preview.1** today, alongside a nightly build that fixes a macOS seatbelt profile fallback and adds PR-generator core infrastructure. A critical regression from v0.53.0 — a `400 Bad Request` caused by stripped `thoughtSignature` in parallel tool calls — has been patched in multiple PRs (#28586, #28607). The backlog shows sustained focus on subagent reliability, memory-system hardening, and terminal UX polish.

---

## 2. Releases
| Version | Type | Key Changes |
|---------|------|-------------|
| **v0.55.0-preview.1** | Preview | Bumps from nightly `20260728`; includes v0.54.0 and v0.53.0 changelogs. |
| **v0.55.0-nightly.20260806.g761f604c1** | Nightly | `fix(cli)`: fall back to embedded macOS seatbelt profiles if missing (#28551); `feat(pr-generator-core)`: environment config parser, command executor, GitHub integration (#28551). |
| **v0.54.0** | Stable | Rolls up v0.53.0-preview and v0.52.0 changelogs; version bump from nightly `20260722`. |

> **Upgrade note:** If you are on v0.53.x, upgrade to v0.54.0 or the v0.55.0 preview to avoid the `thoughtSignature` 400 error.

---

## 3. Hot Issues (Top 10 by Impact & Discussion)

| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent recovery after `MAX_TURNS` reported as GOAL success | Masks real failures; subagents claim success while hitting turn limits. | 12 comments, 👍 2, P1, `need-retesting` |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs indefinitely | Blocks core workflows; users disable subagents as workaround. | 8 comments, 👍 8, P1 |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | Robust component-level evaluations | Scaling eval infra (76 behavioral tests across 6 models) is critical for release confidence. | 7 comments, P1, `aiq/eval_infra` |
| [#28698](https://github.com/google-gemini/gemini-cli/issues/28698) | High memory usage detected | New report on v0.53.1; memory grows during idle loops. | 5 comments, P2, `need-information` |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | Auto Memory retries low-signal sessions indefinitely | Wastes cycles & clutters inbox; no backoff for unreadable transcripts. | 5 comments, P2 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell command execution stuck at “Waiting input” after completion | Frequent UX breakage; simple commands hang the agent. | 4 comments, 👍 3, P1 |
| [#22186](https://github.com/google-gemini/gemini-cli/issues/22186) | `get-shit-done` output hook crashes near completion | Crashes during summary print; blocks a popular workflow. | 3 comments, P1 |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | 400 error with > 128 tools | Hard tool-count limit forces smarter tool scoping. | 3 comments, P2 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Browser subagent fails on Wayland | Linux/Wayland users blocked from browser automation. | 4 comments, 👍 1, P1, `agent/browser` |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | Browser Agent ignores `settings.json` overrides (e.g., `maxTurns`) | Config drifts from declared settings; undermines trust in configuration. | 3 comments, P2 |

---

## 4. Key PR Progress (Top 10 by Technical Impact)

| # | Title | Status | Impact |
|---|-------|--------|--------|
| [#28586](https://github.com/google-gemini/gemini-cli/pull/28586) | `fix(core): preserve thoughtSignature in functionCall parts to fix 400 error` | Open | Directly resolves the v0.53.0 regression breaking parallel tool calls. |
| [#28607](https://github.com/google-gemini/gemini-cli/pull/28607) | `fix(core): preserve functionCall thoughtSignature when stripping thought parts` | **Closed** | Same root cause; merged fix for `stripThoughts()` in `geminiChat.ts`. |
| [#28676](https://github.com/google-gemini/gemini-cli/pull/28676) | `fix(cli): forward termination signals to relaunched child process` | Open | Prevents orphaned child processes on `kill -TERM`; improves process hygiene. |
| [#28481](https://github.com/google-gemini/gemini-cli/pull/28481) | `fix(core): refresh MCP OAuth tokens with the stored client ID` | **Closed** | Fixes OAuth refresh for dynamic client registration; stops forced re-auth loops. |
| [#28488](https://github.com/google-gemini/gemini-cli/pull/28488) | `feat(cli): auto-compress chat history on context window overflow` | **Closed** | Adds `model.autoCompressOnOverflow` setting; avoids hard stops on context limits. |
| [#28581](https://github.com/google-gemini/gemini-cli/pull/28581) | `fix(cli): skip diff hunk markers during @ processing` | Open | Eliminates recursive glob searches on large diffs; prevents heap growth. |
| [#28695](https://github.com/google-gemini/gemini-cli/pull/28695) | `fix(sdk): don't abort sendStream on malformed tool arguments` | **Closed** | Hardens `sendStream()` against model-output JSON parse failures. |
| [#28660](https://github.com/google-gemini/gemini-cli/pull/28660) | `fix(sdk): keep sendStream alive on malformed tool arguments` | Open | Defensive parsing + structured `functionResponse` errors for invalid args. |
| [#28689](https://github.com/google-gemini/gemini-cli/pull/28689) | `fix(core): unwrap nested gaxios streaming errors from cause message` | **Closed** | Improves quota/rate-limit error classification for GCA. |
| [#28688](https://github.com/google-gemini/gemini-cli/pull/28688) | `fix(core): dynamically resolve Cloud Workstations proxy redirect URI for OAuth` | Open | Unblocks OAuth in Cloud Workstations VMs (localhost redirect mismatch). |

---

## 5. Feature Request Trends
1. **Subagent Observability & Control** — Trajectory sharing via `/chat share` (#22598), config overrides respected (#22267), self-awareness of CLI flags/hotkeys (#21432).
2. **AST-Aware Code Intelligence** — Investigating `tilth`/`glyph` for precise method reads, search, and codebase mapping (#22745, #22746).
3. **Memory System Hardening** — Deterministic redaction, invalid-patch quarantine, backoff for low-signal sessions (#26525, #26523, #26522).
4. **Browser Agent Resilience** — Session takeover, lock recovery, Wayland support (#22232, #21983).
5. **Model Self-Regulation** — Discourage destructive commands (`git reset --force`), enforce safer DB/resource ops (#22672).

---

## 6. Developer Pain Points (Recurring Frustrations)
- **Subagent unreliability**: Hangs (#21409), false success reports (#22323), ignored config (#22267), unwanted auto-spawn (#22093).
- **Memory/Context management**: Auto-memory retries (#26522), redaction after model exposure (#26525), context-overflow crashes instead of compression (now mitigated by #28488).
- **Terminal/Shell UX**: Commands stuck at “Waiting input” (#25166), resize flicker (#21924), external editor buffer corruption (#24935), `\n` escaping bugs (#22466).
- **Tooling limits**: Hard 128-tool ceiling triggering 400s (#24246), diff-hunk `@` false positives causing heap pressure (#28581).
- **Platform gaps**: Wayland browser agent failure (#21983), Cloud Workstations OAuth redirect mismatch (#28688), macOS seatbelt profile missing (#28551).
- **Observability gaps**: Bug reports lack subagent context (#21763), subagent trajectories not shareable (#22598).

---

*Generated from `google-gemini/gemini-cli` GitHub data (releases, issues, PRs updated 2026-08-06).*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-06

---

## 1. Today's Highlights
Four pre-releases (v1.0.79-2 through v1.0.79-5) landed in the last 24 hours, introducing multi-session management via a new Sessions tab/sidebar, worktree-backed session creation (`/worktree new`), and a pinned-prompt UI that defaults off on small terminals. Meanwhile, 24 issues were updated—several flagging regressions in MCP initialization, Windows native crashes, BYOK effort display, and clipboard/layout glitches—signaling a busy stabilization window ahead of the next stable cut.

---

## 2. Releases
| Version | Type | Key Changes |
|---------|------|-------------|
| **v1.0.79-5** | Pre-release | **Added**: Manage multiple concurrent sessions from Sessions tab & sidebar. **Improved**: Prompt pinning off by default (`pinnedPrompts: true` to enable). **Fixed**: Sandboxed wrapper builds now receive dev-tool caches per build manifest. |
| **v1.0.79-4** | Pre-release | Minor pre-release bump. |
| **v1.0.79-3** | Pre-release | **Improved**: `/worktree new` starts a session in a fresh worktree. |
| **v1.0.79-2** | Pre-release | **Improved**: Pinned prompt moves up one row (into tab-bar reserved space), reducing timeline cost; auto-disabled on terminals <30 rows. |

> All four builds are pre-releases; no stable tag yet. [Release history](https://github.com/github/copilot-cli/releases)

---

## 3. Hot Issues (Top 10 by Community Signal & Impact)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#1799](https://github.com/github/copilot-cli/issues/1799) | **Alt-screen mode causing regressions; no off-switch** | Terminal rendering changes break workflows; users want a config toggle. | 👍 8 · 12 comments · open since Mar |
| [#4202](https://github.com/github/copilot-cli/issues/4202) | **`view` tool reports “Path does not exist” for real files (1.0.72+)** | Regression in core file-read tool; blocks non-interactive automation. | 👍 1 · 5 comments · repro provided |
| [#3135](https://github.com/github/copilot-cli/issues/3135) | **BYOK statusline shows “medium” effort despite `--effort high`** | Display vs. actual request mismatch erodes trust in custom-model configs. | 👍 1 · 3 comments |
| [#3013](https://github.com/github/copilot-cli/issues/3013) | **Hooks don’t fire for background/task agents (security gap)** | Sub-agents bypass dangerous-command hooks → potential jailbreak vector. | 👍 0 · 3 comments · **CLOSED** (fix likely in 1.0.79 series) |
| [#3934](https://github.com/github/copilot-cli/issues/3934) | **MCP server “blocked by policy” on GHEC despite valid config** | Enterprise MCP adoption blocked; works in VS Code/IntelliJ but not CLI. | 👍 1 · 2 comments |
| [#4345](https://github.com/github/copilot-cli/issues/4345) | **“Reasoning effort ‘medium’ not supported for claude-haiku-4.5”** | Feature-flag combo triggers repeated sub-agent failures. | 👍 4 · 2 comments |
| [#3172](https://github.com/github/copilot-cli/issues/3172) | **Clipboard ownership spam breaks status-line layout** | UI noise on every cross-app copy; layout shift disrupts readability. | 👍 7 · 2 comments |
| [#4026](https://github.com/github/copilot-cli/issues/4026) | **Native runtime crashes repeatedly on Windows (since May, 4+ versions)** | High-severity stability blocker for Windows users; no reliable repro. | 👍 0 · 2 comments |
| [#4370](https://github.com/github/copilot-cli/issues/4370) | **MCP init fails when `server/discover` returns `-32602` (FastMCP)** | Breaks popular MCP servers that don’t implement `server/discover`. | 👍 1 · 2 comments · new 2026-08-04 |
| [#4382](https://github.com/github/copilot-cli/issues/4382) | **`execve` ENOEXEC on Oracle Linux 10; binary runs via `ld.so`** | Linux distro compatibility issue; install works but direct exec fails. | 👍 0 · 0 comments · new 2026-08-05 |

---

## 4. Key PR Progress
*No pull requests updated in the last 24 hours.*  
(Monitor [PRs](https://github.com/github/copilot-cli/pulls) for merges tied to the 1.0.79 stabilization.)

---

## 5. Feature Request Trends (from all open issues)
1. **MCP ergonomics & policy control** — Granular allow/block lists, registry discovery fixes, OAuth 3LO support ([#3934](https://github.com/github/copilot-cli/issues/3934), [#4371](https://github.com/github/copilot-cli/issues/4371), [#4378](https://github.com/github/copilot-cli/issues/4378), [#4374](https://github.com/github/copilot-cli/issues/4374)).
2. **BYOM/BYOK model flexibility** — In-session model switching, discovery API, correct effort display ([#3135](https://github.com/github/copilot-cli/issues/3135), [#4376](https://github.com/github/copilot-cli/issues/4376)).
3. **Session & workflow UX** — Multi-session UI (now shipping), worktree integration, queued-message handling ([#4373](https://github.com/github/copilot-cli/issues/4373), [#4372](https://github.com/github/copilot-cli/issues/4372)).
4. **Enterprise/GHEC parity** — Data-residency policy fetching, Azure DevOps remote support, auth reliability ([#4378](https://github.com/github/copilot-cli/issues/4378), [#4374](https://github.com/github/copilot-cli/issues/4374), [#1037](https://github.com/github/copilot-cli/issues/1037)).
5. **Terminal rendering polish** — Alt-screen toggle, clipboard noise, pinned-prompt density, status-line accuracy ([#1799](https://github.com/github/copilot-cli/issues/1799), [#3172](https://github.com/github/copilot-cli/issues/3172), [#3135](https://github.com/github/copilot-cli/issues/3135)).

---

## 6. Developer Pain Points (Recurring High-Frequency Frustrations)
- **Windows native instability** — Crashes across months/versions with no clear repro ([#4026](https://github.com/github/copilot-cli/issues/4026)).
- **MCP integration fragility** — Policy blocks, registry 400s, `server/discover` assumptions, OAuth gaps ([#3934](https://github.com/github/copilot-cli/issues/3934), [#4370](https://github.com/github/copilot-cli/issues/4370), [#4371](https://github.com/github/copilot-cli/issues/4371), [#4374](https://github.com/github/copilot-cli/issues/4374), [#4378](https://github.com/github/copilot-cli/issues/4378)).
- **Tool regressions in point releases** — `view` tool broken since 1.0.72 ([#4202](https://github.com/github/copilot-cli/issues/4202)), `web_search` hallucinations ([#4093](https://github.com/github/copilot-cli/issues/4093)).
- **Background-agent security bypass** — Hooks skipped for task agents ([#3013](https://github.com/github/copilot-cli/issues/3013)).
- **Auth & connectivity flakiness** — Device-flow DNS failures ([#1037](https://github.com/github/copilot-cli/issues/1037)), browser canvas storage isolation ([#4379](https://github.com/github/copilot-cli/issues/4379)).
- **UI noise & layout breaks** — Clipboard spam, pinned-prompt crowding, notification badge ghosts ([#3172](https://github.com/github/copilot-cli/issues/3172), [#4381](https://github.com/github/copilot-cli/issues/4381)).

---

*Digest generated from github/copilot-cli data as of 2026-08-06 00:00 UTC. All links point to live GitHub items.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-06

## Today's Highlights
- **No new release** in the last 24 hours.  
- **Three active issues** surfaced: a long-standing feature request for a persistent Memory System (#1283), a data-corruption bug in `StrReplaceFile` (#2591), and a UX gap where missing model capabilities cause mid-task aborts after side effects (#2588).  
- **Three PRs** directly address the capability-abort problem: #2592 degrades unsupported tool media instead of aborting, #2590 adds actionable config guidance to the error message, and #2589 documents the `qwen-audio-agent` voice ACP client.

---

## Releases
*None in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283) | **Memory System — Persistent context across sessions** | Enables cross-session continuity (project patterns, user prefs, AI-managed notes). High-impact for power users. | 19 comments, open since Feb 2026; sustained interest but no implementation yet. |
| [#2591](https://github.com/MoonshotAI/kimi-cli/issues/2591) | **StrReplaceFile corrupts undecodable bytes outside edited region** | Silent data corruption: any non-UTF-8 byte in the file becomes U+FFFD on write, even far from the edit. Critical for binary/mixed-encoding files. | Newly filed; 0 comments so far — likely to attract attention due to severity. |
| [#2588](https://github.com/MoonshotAI/kimi-cli/issues/2588) | **Model without capabilities aborts mid-task after MCP tool side effects** | Breaks trust: tool runs, side effects apply, then run aborts with unhelpful error. Blocks MCP image-returning tools for users on OpenAI-compatible endpoints. | Newly filed; 0 comments. Two PRs already targeting it (#2590, #2592). |

---

## Key PR Progress

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#2592](https://github.com/MoonshotAI/kimi-cli/pull/2592) | `fix(soul): degrade unsupported tool media instead of aborting mid-task` | Open | Replaces hard abort with graceful degradation when a model lacks declared capabilities for returned media (e.g., images). Preserves prior side effects. Resolves #2588. |
| [#2590](https://github.com/MoonshotAI/kimi-cli/pull/2590) | `fix(soul): name the config fix in the unsupported-capability error` | Open | Improves error message to explicitly show the `capabilities` TOML snippet to add. Addresses the “no hint at the fix” half of #2588. |
| [#2589](https://github.com/MoonshotAI/kimi-cli/pull/2589) | `docs: mention qwen-audio-agent as a voice ACP client` | Open | Adds one sentence + link to the ACP docs section, highlighting the open-source full-duplex voice runtime that launches `kimi acp`. |

---

## Feature Request Trends
1. **Persistent Memory / Context** — #1283 (19 comments) is the clearest signal: users want automatic + manual memory that survives CLI restarts.  
2. **MCP & Tool Ecosystem Maturity** — Issues like #2588 reveal demand for robust MCP tool handling (images, audio, streaming) without brittle capability declarations.  
3. **Encoding Safety** — #2591 shows growing concern for correct handling of non-UTF-8 files in core editing tools.

---

## Developer Pain Points
- **Silent corruption in file edits** (`StrReplaceFile` rewriting entire file with `errors="replace"`).  
- **Opaque capability errors** — missing `capabilities` in `config.toml` causes post-side-effect aborts with no remediation hint.  
- **No cross-session memory** — users repeatedly re-explain project conventions, coding style, and preferences.  
- **Documentation gaps for emerging clients** — voice/ACP integrations (e.g., `qwen-audio-agent`) need visibility in official docs.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-06

## Today's Highlights
OpenCode shipped **v1.18.14** with a streamlined xAI device-code login flow and fixes for structured provider error handling. The codebase continues its V2 migration: V1 compatibility was removed (#40382), native V2 types adopted (#40608), and a beta workspace-selection flow landed (#38790). Community discussion remains heavy on Windows terminal stability, provider compatibility, and the long-requested plugin marketplace.

---

## Releases

### v1.18.14
- **Core Improvements**: Simplified xAI login to a single device-code flow that works better in headless and remote environments.
- **Bugfixes**: Preserved structured mid-stream provider errors so compatible providers can retry failed responses; retried more transient provider and network errors.
- [Release notes](https://github.com/anomalyco/opencode/releases/tag/v1.18.14)

---

## Hot Issues

| # | Title | State | Why It Matters | Community Reaction |
|---|-------|-------|----------------|-------------------|
| [#40791](https://github.com/anomalyco/opencode/issues/40791) | GO subscription unusable: slow, GPT models blocked (403) | **OPEN** | Paid-tier breakage reported same day; impacts revenue trust. | 3 comments, filed today |
| [#28696](https://github.com/anomalyco/opencode/issues/28696) | Plugin/Agent/Skills marketplace | **OPEN** | Top-voted feature (23 👍); master issue for unified registry/discovery. | 7 comments, 23 👍 |
| [#39291](https://github.com/anomalyco/opencode/issues/39291) | Compaction sends mutated `thinking` block → permanent 400 retry loop | **OPEN** | Core context-compaction bug with Anthropic extended thinking; blocks sessions. | 2 comments |
| [#35881](https://github.com/anomalyco/opencode/issues/35881) | `kotlin-ls` auto-install silently fails (empty cache, no error) | **OPEN** | LSP auto-install reliability gap for Kotlin/Gradle projects. | 2 comments |
| [#14026](https://github.com/anomalyco/opencode/issues/14026) | Some models (qwen2.5-coder, ministral) output tool calls but don't execute | **CLOSED** | Local model compatibility regression; 9 comments, 1 👍. | 9 comments |
| [#16226](https://github.com/anomalyco/opencode/issues/16226) | Setting: send prompt only with Send button, not Enter | **CLOSED** | UX friction for multi-paragraph prompts; 8 comments. | 8 comments |
| [#27749](https://github.com/anomalyco/opencode/issues/27749) | `/exit` or `/quit` kills terminal on Windows PowerShell | **CLOSED** | Windows terminal lifecycle regression; 7 comments, 1 👍. | 7 comments |
| [#31042](https://github.com/anomalyco/opencode/issues/31042) | `small_model` ignored for title agent; FreeUsageLimitError retry loop ~90s | **CLOSED** | Config bypass + retry storm; 5 comments. | 5 comments |
| [#31105](https://github.com/anomalyco/opencode/issues/31105) | CLI terminal repeats message marker numbers (e.g., "259 259…") | **CLOSED** | Rendering corruption floods terminal; cross-window repro. | 5 comments |
| [#31099](https://github.com/anomalyco/opencode/issues/31099) | Renderer freezes ~12 min in (Solid.js `findDOMIndex` infinite loop) | **CLOSED** | Desktop Electron renderer hang; 5 comments. | 5 comments |

---

## Key PR Progress

| # | Title | State | Summary |
|---|-------|-------|---------|
| [#38790](https://github.com/anomalyco/opencode/pull/38790) | **[beta] feat(app): add workspace flows to new layout** | **OPEN** | New session composer: choose Local repo, New workspace, or Existing workspaces; branch-aware pill; respects git worktrees. |
| [#40608](https://github.com/anomalyco/opencode/pull/40608) | **refactor(app): use native v2 types** | **OPEN** | Replace legacy type aliases with generated V2 client types; store/render native V2 permission fields; remove legacy adapter. |
| [#40382](https://github.com/anomalyco/opencode/pull/40382) | **refactor(app): remove v1 compatibility** | **CLOSED** | Drop V1 protocol detection, adapters, legacy client surfaces, migration docs; route exclusively through V2 client; remove `@opencode-ai/sdk`. |
| [#40794](https://github.com/anomalyco/opencode/pull/40794) | **[contributor] fix(desktop): disable packaged console logging** | **OPEN** | Disable `electron-log` console transport in packaged builds (stdout/stderr may have no durable reader); keep file logging & debug exports. |
| [#40784](https://github.com/anomalyco/opencode/pull/40784) | **[contributor] feat(core): hosted workspace execution with modal driver** | **OPEN** | V2 Hosted Workspace: durable execution environment (machine with root); sandbox is one Workspace type; sessions target `workspaceID` via existing runner graph. |
| [#35311](https://github.com/anomalyco/opencode/pull/35311) | **fix(core): Multiple clones of same repo are different projects** | **OPEN** | Closes 13+ issues; deduplicates projects by resolved git root instead of path; fixes session/project mismatch for worktrees/multi-clone. |
| [#40787](https://github.com/anomalyco/opencode/pull/40787) | **[contributor] refactor: remove obsolete and unreachable code** | **OPEN** | Delete 1,500 lines + one unused workspace package: migration relics, dead exports, draft examples, accidental artifacts; preserve active migration paths. |
| [#40723](https://github.com/anomalyco/opencode/pull/40723) | **feat(core): migrate v1 data to v2** | **CLOSED** | REST-triggered V1 session history migration with resumable progress; import legacy JSON credentials; update TUI migration flow & ACP events. |
| [#40781](https://github.com/anomalyco/opencode/pull/40781) | **feat(app): export session as json from ui** | **CLOSED** | Add `Export…` to session 3-dot menu, Context tab action button, and `/export` command palette action. |
| [#40717](https://github.com/anomalyco/opencode/pull/40717) | **feat: add Swedish community translation** | **OPEN** | Community-contributed Swedish README + glossary; linked from language list; regenerates locale index. |

---

## Feature Request Trends
1. **Plugin/Extension Marketplace** — #28696 (23 👍) is the flagship ask: unified discovery, install, update, and versioning for agents, skills, and tools.
2. **Workspace-Centric UX** — #38790 (beta PR) and #40784 (hosted workspaces) show product direction toward durable, selectable execution environments rather than repo-bound sessions.
3. **Input/Interaction Polish** — Send-button vs Enter (#16226), configurable keybindings (#31100), message splitting/editing (#17251).
4. **Provider/Model Flexibility** — Local LAN discovery (#27554), small-model config respect (#31042, #25344), GO tier model access (#40791).
5. **Automation/Review Skills** — `/simplify` for concurrent code review (#29272), system-prompt environment plugin API (#31158).

---

## Developer Pain Points
- **Windows Terminal Lifecycle** — Four distinct issues (#27749, #28673, #30495, #26480) report `/exit`, Ctrl+C, or normal exit killing the parent shell (ConPTY/psmux/nushell/PowerShell). High recurrence since v1.14.25.
- **Provider/Model Compatibility** — Local models (qwen, ministral, GLM) emit tool calls but don't execute (#14026); GO subscription blocks GPT models with 403 (#40791); z.ai/GLM network errors not retried (#31133).
- **Memory/Renderer Stability** — Unbounded SSE memory growth (#31087), Solid.js infinite loop freezing renderer at ~12 min (#31099), compaction-induced 400 retry loops (#39291).
- **Session/Title Generation Bugs** — `small_model` ignored for title agent (#31042), auto-title silently fails when provider lacks small model (#25344).
- **CLI/TUI Rendering Corruption** — Repeated numeric markers flooding terminal (#31105), `opentui` path-type errors (#29895), TUI stays active after agent loop exits (#31109).

---

*Generated from GitHub data (releases, 46 issues, 50 PRs updated 2026-08-06). Links point to anomalyco/opencode.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-06

## 1. Today's Highlights
The Pi ecosystem saw a flurry of **platform stability fixes** and **developer-experience polish** today. Critical leaks in the X11 clipboard subsystem and extension event bus were patched, while the TUI gained line-range `@file` references and natural model sorting. Multiple provider integrations were updated (Copilot, Qwen, Bedrock), and a long-standing Windows strategy discussion (#7547) continues to gather community input.

## 2. Releases
No new releases published in the last 24 hours.

## 3. Hot Issues (Top 10)

| Issue | Status | Why It Matters | Community Signal |
|-------|--------|----------------|------------------|
| **[#7547] Windows strategy & usage survey** | OPEN | Seeks to consolidate the fragmented ways Pi runs on Windows (WSL, native, Bun, etc.) to focus docs, bug fixes, and OOB experience. | 18 comments — active design discussion |
| **[#6879] Auto-compaction never triggers past 100% context** | OPEN | Context window exceeds threshold without compaction until provider rejects the request (373k tokens). Core reliability issue for long-running agents. | 11 comments, 13 👍 |
| **[#5263] Make in-session model changes ephemeral by default** | OPEN | UX proposal: model/thinking changes should stay session-local; global defaults moved to `/settings`. Reduces cross-session surprise. | 11 comments, 12 👍 |
| **[#534] Config folder violates XDG Base Dir Spec (Linux)** | CLOSED | Config lived in `$HOME` instead of `$XDG_CONFIG_HOME`. Fix aligns with Linux conventions. | 14 comments, 23 👍 |
| **[#7600] X11 connection leak in pi-coding-agent** | OPEN | Long-running process leaked 182 X11 connections over 8 days, hitting Xorg’s 256-client limit. Blocks new X clients. | 2 comments, high severity |
| **[#7193] Extension event-bus listeners survive reload/disposal** | CLOSED | Stale listeners accumulated across extension reloads, causing memory leaks and duplicate events. | 2 comments, 1 👍 |
| **[#6879] Auto-compaction bug** | OPEN | See above — duplicated in list due to high impact. |
| **[#5323] Improve Vertex + GCP metadata server support** | OPEN | Synchronous `existsSync` on credential paths blocks startup; needs async metadata-server detection for serverless/GKE. | 6 comments, 1 👍 |
| **[#7689] Handle `end_turn: false` for Codex backend** | OPEN | Codex can return `response.completed` with `end_turn: false`; Pi currently assumes turn ends, breaking multi-turn flows. | 1 comment |
| **[#7678] Token accounting jumps to auto-compaction at 72.5%** | CLOSED | Premature compaction trigger with Kimi K2P7; suggests token-counting drift. | 1 comment |

## 4. Key PR Progress (Top 10)

| PR | Status | Summary |
|----|--------|---------|
| **[#7694] fix(coding-agent): avoid Linux clipboard X11 leaks** | OPEN | Replaces native clipboard addon with `wl-paste`/`xclip`/`xsel` fallbacks; adds regression tests for loader behavior. Directly addresses #7600. |
| **[#7679] feat(coding-agent): support line ranges in `@file` references** | CLOSED | Implements `#L<start>-L<end>` syntax (1-based, inclusive) for CLI file refs; preserves path recovery, rejects image ranges, adds line metadata to prompt tags. Closes #7673. |
| **[#6216] feat: Add Amazon Bedrock Mantle OpenAI Responses provider** | OPEN | New provider using OpenAI’s Bedrock client; supersedes earlier attempt. Enables Mantle’s OpenAI-compatible endpoint. |
| **[#7692] / [#7690] fix: naturally sort model selectors** | CLOSED | Shared numeric-aware, case-insensitive comparator for `/model` and `/scoped-models`; keeps canonical IDs stable. Closes #7693. |
| **[#7659] feat(ai): add Qwen Token Plan Individual provider** | OPEN | Adds `qwen-token-plan-individual` provider with 8 documented models; enforces `QWEN_TOKEN_PLAN_API_KEY`; preserves CN/Intl providers. |
| **[#7671] feat: colocate tool prompt contributions with tool definitions** | OPEN | Moves each built-in tool’s system-prompt snippet next to its implementation; unchanged legacy output; adds regression coverage. |
| **[#7597] fix: make extension selector scrollable in fullscreen** | CLOSED | Wraps diff title in `ScrollView`; pins actions so long diffs remain reviewable. |
| **[#7638] feat(ai): support `thinking_token_budget` on openai-completions** | CLOSED | Prevents reasoning-heavy turns from consuming entire `max_tokens` and returning empty assistant messages that falsely end the run. |
| **[#7686] feat: add configurable Harness factory** | OPEN | Internal factory for experimental Harness v2; preserves caller-provided tools/activation/policy; rebuilds prompts from active tool objects. |
| **[#7656] fix: event bus leak** | CLOSED | Scopes `pi.events.on()` to extension runtime; removes stale listeners on reload/disposal; adds regression test. Closes #7193. |

## 5. Feature Request Trends
1. **Provider diversity & login flows** — LM Studio (#7668), Meta Model API (#7543), Bedrock Mantle (#6216), Qwen Token Plan Individual (#7659), Vertex/GCP metadata (#5323).
2. **Context & prompt ergonomics** — `AGENTS.override.md` per-directory overrides (#7642, #7664, #7681), line-range `@file` refs (#7673, #7679), ephemeral in-session model changes (#5263).
3. **Model selector usability** — Natural sorting of variant IDs (#7693, #7690, #7692), scoped-model catalog parity.
4. **Harness/agent-loop extensibility** — Configurable Harness factory (#7686), tool prompt colocation (#7671), `thinking_token_budget` (#7638).
5. **Windows first-class support** — Strategic discussion to unify WSL, native Bun, and portable distributions (#7547).

## 6. Developer Pain Points
- **Resource leaks on Linux/X11**: Clipboard and event-bus leaks causing hard failures after days of uptime (#7600, #7193).
- **Context-window management**: Auto-compaction not triggering reliably; token accounting drift triggering premature compaction (#6879, #7678).
- **Provider auth fragility**: Copilot models disappearing after login (#7634), Anthropic OAuth redirecting to localhost over SSH (#7691), Vertex sync credential checks blocking startup (#5323).
- **Bundled binary quirks**: Bun-compiled `pi` auto-loads `bunfig.toml` preload from CWD, crashing startup (#7684).
- **Cross-instance state bleed**: Model selection changes in one Pi instance affect `/new` sessions in another (#7677).
- **Documentation gaps**: Keybindings omit double `Ctrl+C` exit behavior (#7687), approval comment parsing regressed on trailing commas (#7663).

---

*Data sourced from `github.com/earendil-works/pi-mono` (issues & PRs updated 2026-08-05 → 2026-08-06).*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-06

## 1. Today's Highlights
- **Desktop v0.1.0 shipped** — the first packaged desktop application for Windows/macOS/Linux, introducing a native wrapper around the Web Shell with persistent session mirrors and workspace management.
- **Security hardening in progress** — a critical P1 vulnerability (#8582) in the read-only shell classifier allows command-substitution bypass via line continuations and `${var@P}` expansions; a fix is actively tracked.
- **CI stability overhaul** — multiple PRs (#8602, #8603, #8435, #8436) address systemic `/review` timeouts, autofix concurrency races, and runner routing to the self-hosted ECS pool.

---

## 2. Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **v0.21.6** | Stable | • Experimental native Live Voice support in WebShell (macOS) via global shortcut ([#7859](https://github.com/QwenLM/qwen-code/pull/7859))<br>• Web Shell keeps conversation turns expanded during active background tasks<br>• Core test de-flaking (glob external-path) |
| **v0.21.6-nightly.20260806.cb3dc107f** | Nightly | Single test fix: dedicated empty dir for glob external-path test |
| **desktop-v0.1.0** | First Desktop | • Packaged Electron/Tauri(?) desktop app with bundled Node.js runtime<br>• Workspace persistence (`desktop-state.json`)<br>• CI container shell fix ([#7838](https://github.com/QwenLM/qwen-code/pull/7838)) |

---

## 3. Hot Issues (Top 10 by Impact & Recency)

| # | Title | Priority | Why It Matters | Community Signal |
|---|-------|----------|----------------|------------------|
| [#8582](https://github.com/QwenLM/qwen-code/issues/8582) | **Security: read-only shell classifier auto-approves command substitution hidden by line continuation or `${var@P}`** | P1 | **Critical bypass** — AST + runtime gates both miss obfuscated command substitution, allowing arbitrary code execution in “read-only” mode. | 5 comments, 0 👍 (new, high-severity) |
| [#8615](https://github.com/QwenLM/qwen-code/issues/8615) | **[Desktop 0.1.0 / Windows] Bundled runtime crashes on startup: `EISDIR lstat 'C:'` when opening workspace** | P1 | Blocks **Windows desktop launch entirely**; canonicalization of workspace path hits root drive. | 4 comments, reported day of release |
| [#8597](https://github.com/QwenLM/qwen-code/issues/8597) | **CI `/review`: reverse-audit fan-out launch hangs silently until outer timeout kills run** | P1 | **12+ timeouts in 2 days** (360-min budget burned); root cause = unbounded streaming response lifetime in fan-out. | 3 comments, author `wenshao` (core maintainer) |
| [#8580](https://github.com/QwenLM/qwen-code/issues/8580) | **TUI flickers continuously in tmux < 3.5: full-screen clear+repaint 2–3×/sec** | P2 | Renders CLI **unusable in older tmux** (common on servers); Ink renderer overflow + unqueried DEC 2026 guard. | 3 comments, detailed root-cause analysis |
| [#8584](https://github.com/QwenLM/qwen-code/issues/8584) | **Anthropic model-ID parsing rejects dotted-minor aliases (`claude-opus-4.8`) & lacks Opus 5 token limits** | P2 | Breaks **proxy/deployment model IDs** used in enterprise; token limits missing for newest Opus. | 3 comments, external integration pain |
| [#8606](https://github.com/QwenLM/qwen-code/issues/8606) | **VSCode companion: Edit/Write file links resolve to `<workspace-root>/<basename>` → “file not found” for nested files** | P2 | **Core IDE integration broken** — file operations unusable for any non-root file. | 3 comments, v0.21.6 regression |
| [#8593](https://github.com/QwenLM/qwen-code/issues/8593) | **Desktop: markdown links in assistant messages styled but clicking does nothing** | P2 | **Silent failure** — links render with pointer cursor but no navigation (browser/built-in). | 4 comments, desktop UX blocker |
| [#8592](https://github.com/QwenLM/qwen-code/issues/8592) | **Desktop: switching UI language in Settings has no effect** | P2 | **i18n non-functional** — dropdown changes ignored, UI stays English. | 3 comments, basic settings broken |
| [#8557](https://github.com/QwenLM/qwen-code/issues/8557) | **CLI: shrinking terminal window reprints transcript blocks in scrollback (duplicate output)** | P3 | **Visual corruption** on macOS/Warp; transcript re-render on resize duplicates history. | 5 comments, Warp-specific? |
| [#8618](https://github.com/QwenLM/qwen-code/issues/8618) | **`serve`: align same-host daemon text reads with CLI permissions** | P2 | **Permission inconsistency** — daemon rejects host reads outside workspace even after tool approval. | 2 comments, daemon/CLI parity |

---

## 4. Key PR Progress (Top 10 by Significance)

| PR | Title | Type | Status | Impact |
|----|-------|------|--------|--------|
| [#8602](https://github.com/QwenLM/qwen-code/pull/8602) | **fix(core): cap streaming response total lifetime, slim review fan-out launch** | Bugfix / Stability | Open | **Directly fixes #8597** — adds per-request total-lifetime cap (not just inter-chunk) and reduces fan-out concurrency. |
| [#8613](https://github.com/QwenLM/qwen-code/pull/8613) | **feat(web-shell): tmux-backed interactive terminal sub-agent** | Feature | Open | **Major new capability** — agents can spawn interactive CLIs/REPLs/TUIs in tmux on daemon host; Web Shell shows live terminal view. |
| [#8619](https://github.com/QwenLM/qwen-code/pull/8619) | **fix(desktop): strip Windows verbatim prefix from workspace paths** | Bugfix | Open | **Fixes #8615** — replaces `std::fs::canonicalize` with `dunce::canonicalize` to handle `\\?\C:\…` prefixes. |
| [#8616](https://github.com/QwenLM/qwen-code/pull/8616) | **feat(telemetry): align session lifecycle with OpenTelemetry** | Feature / Observability | Open | Adds standard `session.start`/`session.end` OTel LogRecords with `session.id` + `previous_id` for resumption. |
| [#8620](https://github.com/QwenLM/qwen-code/pull/8620) | **fix(serve): Allow approved same-host text reads outside workspace** | Bugfix | Open | **Fixes #8618** — permits approved host fs reads via ACP bridge, aligning daemon with CLI permission model. |
| [#8529](https://github.com/QwenLM/qwen-code/pull/8529) | **feat(core): resolve model modalities from API metadata (models.dev)** | Feature | Open | Dynamic modality resolution (image/audio/video) at config time + background refresh; unblocks omni experiments. |
| [#8512](https://github.com/QwenLM/qwen-code/pull/8512) | **feat(omni): S2 input expansion — image/audio/URL sources & token-dimension guard** | Feature | Open | Extends multimodal upload to images/audio/URLs + tool-result media; adds token-dimension validation. |
| [#8465](https://github.com/QwenLM/qwen-code/pull/8465) | **feat(core): checkpoint long-running Goal evidence** | Feature | Open | Durable evidence checkpoint before catalog limit; pauses continuation, compresses via independent verifier. |
| [#8388](https://github.com/QwenLM/qwen-code/pull/8388) | **feat(review): capture-tui — rendering claims get pixels, not prose (Phase 2)** | Feature | Open | `qwen review capture-tui` drives code in private tmux, captures rendered pane as pixel evidence for visual claims. |
| [#7897](https://github.com/QwenLM/qwen-code/pull/7897) | **fix(cli): skip terminal redraw optimizer on WSL/ConPTY** | Bugfix | Open | **Fixes #7634** — disables batched cursor-up sequences that ConPTY mishandles, eliminating streaming duplication. |

---

## 5. Feature Request Trends (Distilled from Issues & PRs)

| Direction | Evidence | Maturity |
|-----------|----------|----------|
| **Native desktop parity with Web Shell** | Desktop v0.1.0 shipped but has basic gaps: link handling (#8593), i18n (#8592), Windows crash (#8615), session mirror pruning (#8420) | Early — v0.1.0 just released |
| **Multimodal / Omni model support** | PRs #8512 (S2 expansion), #8529 (modality resolution), #8584 (Anthropic ID parsing) — image, audio, URL, tool-result media | Active development (experiment flag) |
| **Daemon/serve as first-class backend** | ACP bridge permission alignment (#8618/#8620), tmux sub-agent (#8613), session lifecycle telemetry (#8616) | Maturing — core infrastructure |
| **CI/CD reliability & self-hosted scaling** | PRs #8602, #8603, #8435, #8436 — timeout caps, ECS routing, concurrency serialization, cancellation handling | High priority — burning budget |
| **Terminal rendering robustness** | TUI flicker in tmux (#8580), WSL/ConPTY duplication (#7897), resize scrollback corruption (#8557) | Ongoing — platform-specific quirks |
| **Security hardening of tool execution** | Shell classifier bypass (#8582), read-only mode gaps, command-substitution detection | Urgent — P1 vulnerability open |

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Frequency | Representative Issues |
|------------|-----------|----------------------|
| **Desktop app instability on Windows** | High (release-day) | #8615 (crash on workspace open), #8619 (path canonicalization) |
| **IDE companion broken for nested files** | High (v0.21.6) | #8606 (VSCode file links resolve to basename only) |
| **CI `/review` timeouts wasting budget** | High (12+ in 2 days) | #8597 (fan-out hang), #8602 (streaming lifetime) |
| **Terminal/TUI rendering bugs across platforms** | Medium | #8580 (tmux flicker), #7897 (WSL duplication), #8557 (resize duplication) |
| **Silent UX failures in Desktop** | Medium | #8593 (links don’t navigate), #8592 (language switch no-op) |
| **Model integration friction (Anthropic/OpenAI)** | Medium | #8584 (ID parsing, token limits), #8399 (abort error unrecognized) |
| **Daemon vs CLI permission mismatches** | Low-Medium | #8618/#8620 (approved reads rejected outside workspace) |

---

*Generated from `github.com/QwenLM/qwen-code` data as of 2026-08-06. Links point to live GitHub items.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-06

## 1. Today's Highlights
The project is advancing its **v0.9.4 release train** (PR #5135) with a heavy focus on **Runtime API expansion** — six PRs add memory inspection, MCP server lifecycle, goal-loop state, verifier receipts, and skill management endpoints. Meanwhile, TUX polish continues: a fix pins `ratatui@0.30.0` to avoid a cursor-position race at startup (#5192), and a Windows beginner guide in Chinese lands (#5229). A community member has also opened discussion about a **Reasonix-style interface** (#4029), signaling interest in alternative interaction paradigms.

## 2. Releases
No new releases published in the last 24 hours. The v0.9.4 integration train (PR #5135) remains open, 77 commits ahead of `main`.

## 3. Hot Issues
| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#4029](https://github.com/Hmbown/CodeWhale/issues/4029) | **Planning to create an interface similar to Reasonix?** | Explores adopting a Reasonix-like UX — could attract users wanting a more structured, reasoning-centric workflow. | 4 comments, 0 👍; early discussion, no consensus yet. |

*Only one issue updated in the last 24h; the backlog is quiet.*

## 4. Key PR Progress
| # | PR | Type | Summary |
|---|----|------|---------|
| [#5135](https://github.com/Hmbown/CodeWhale/pull/5135) | Release | **v0.9.4 release train** — supersedes #5044, 77 commits ahead of `main`; includes 18 train commits from `codewhale-ops`. |
| [#5225](https://github.com/Hmbown/CodeWhale/pull/5225) | Feature (ACP) | **Expose file/search/git/patch/shell tools over ACP `session/prompt`** — enables editors/Zed/bridges to drive real code edits, not just chat. |
| [#5131](https://github.com/Hmbown/CodeWhale/pull/5131) | Feature (Runtime API) | **Bounded memory inspection & lifecycle controls** (`/v1/memory` endpoints, gated by `require_runtime_token`). |
| [#5130](https://github.com/Hmbown/CodeWhale/pull/5130) | Feature (Runtime API) | **MCP server CRUD + lifecycle** — `POST/DELETE/PATCH /v1/apps/mcp/servers`, no more manual TOML edits. |
| [#5133](https://github.com/Hmbown/CodeWhale/pull/5133) | Feature (Runtime API) | **Goal-loop state & completion controls** — `GET/POST /v1/threads/{id}/goal` for managed clients. |
| [#5132](https://github.com/Hmbown/CodeWhale/pull/5132) | Feature (Runtime API) | **Verifier receipts & evidence** — three new read-only endpoints under `/v1/fleet/runs/{run_id}/` for debugging failures. |
| [#5129](https://github.com/Hmbown/CodeWhale/pull/5129) | Feature (Runtime API) | **Full skill lifecycle** — install, update, uninstall, trust, audit via HTTP (previously TUI-only). |
| [#5240](https://github.com/Hmbown/CodeWhale/pull/5240) | Feature (TUI) | **Surface real `wait` elapsed time in tool content** — moves `duration_ms` from metadata to model-visible content, reduces busy-polling. |
| [#5242](https://github.com/Hmbown/CodeWhale/pull/5242) | Feature (TUI) | **Resume interrupted sub-agents from checkpoint** — `agents/followup` now continues `interrupted_continuable` children instead of dead-lettering. |
| [#5192](https://github.com/Hmbown/CodeWhale/pull/5192) | Fix | **Pin `ratatui=0.30.0`** — avoids blocking CPR query race in `ratatui-core≥0.1.1` that froze startup. |
| [#5234](https://github.com/Hmbown/CodeWhale/pull/5234) | Fix | **Disable alternate scroll during mouse capture** — fixes trackpad/wheel scrolling transcript instead of composer history. |
| [#5095](https://github.com/Hmbown/CodeWhale/pull/5095) | Fix | **Re-quote Windows linker args with spaces** — unbreaks OpenHarmony SDK paths like `D:\DevEco Studio\...`. |

*14 PRs updated; 12 shown above (2 docs-only omitted for brevity).*

## 5. Feature Request Trends
1. **Runtime API parity with TUI** — Six PRs in one day expose memory, MCP, goals, verifier evidence, and skills over HTTP. The clear direction: **make every TUI capability programmatically addressable** for desktop/web clients and bridges.
2. **ACP as a first-class integration layer** — #5225 extends `session/prompt` to execute tools, turning ACP from chat-only into a **full agent protocol** for Zed, VS Code, and custom adapters.
3. **Observability & debuggability** — Verifier receipts (#5132), goal state (#5133), and wait-time visibility (#5240) all serve the same need: **give the model and operator ground-truth feedback** to avoid hallucinated progress.
4. **Resumability & checkpointing** — Sub-agent resume (#5242) and memory lifecycle (#5131) point to **long-running, interruptible workflows** as a core use case.

## 6. Developer Pain Points
| Pain Point | Evidence |
|------------|----------|
| **Startup freeze on newer `ratatui`** | #5192 pins to 0.30.0; `ratatui-core 0.1.1+` issues a blocking CPR query that deadlocks the event loop. |
| **Mouse/scroll conflict in long transcripts** | #5234: alternate-scroll mode (DECSET 1006) hijacks wheel input when mouse capture is active, breaking transcript navigation. |
| **Windows path handling in toolchains** | #5095: `cmd.exe` strips quotes from linker args, breaking spaced OpenHarmony SDK paths — requires re-quoting in build scripts. |
| **ACP tool execution gap** | #5225: ACP `session/prompt` streamed only model text, never ran requested tools — forced integrations to stay chat-only. |
| **No HTTP path for skill management** | #5129: desktop/web clients had to shell out or edit TOML to install/update skills; now exposed via Runtime API. |
| **Invisible wait duration** | #5240: model saw identical tool results regardless of actual elapsed time, causing premature retries or busy-polling. |

---

*Data sourced from `Hmbown/CodeWhale` (DeepSeek TUI) GitHub activity, 2026-08-05 00:00 – 2026-08-06 00:00 UTC.*

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*