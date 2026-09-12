# AI CLI Tools Community Digest 2026-09-12

> Generated: 2026-09-12 04:14 UTC | Tools covered: 10

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

# Cross-Tool Comparison Report: AI CLI Tools Ecosystem (2026-09-12)

---

## 1. Ecosystem Overview

The AI CLI tools landscape is maturing along three parallel tracks: **platform hardening** (Windows/macOS stability, sandbox security), **orchestration primitives** (multi-session, subagent, memory persistence), and **enterprise-grade observability** (telemetry privacy, cost tracking, accessibility). All major tools shipped incremental updates today, but no major version releases—indicating a consolidation phase focused on reliability over feature expansion. Community signal converges on **cross-session context continuity**, **Windows/WSL2 parity**, and **configurable sandbox/network boundaries** as the highest-leverage investment areas. The ecosystem remains fragmented by provider allegiance, yet technical challenges (session integrity, MCP reliability, token/cost management) are remarkably consistent.

---

## 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Merged/Updated (24h) | Release Status | Top Community Signal |
|------|---------------------|--------------------------|----------------|---------------------|
| **Claude Code** | 10 (high-engagement) | 0 | v2.1.269 (stable) | Windows Desktop + Remote Control fragility (99👍 on #85891) |
| **OpenAI Codex** | 10 | 10 (rapid alpha cycle) | 4× alpha (0.155.0-a.3.7–3.10) | Windows project sync & browser auth; macOS kernel leaks |
| **Gemini CLI** | 10 | 10 (security-focused) | v0.61.0-nightly | Subagent MAX_TURNS misreporting; Pro auth loop |
| **GitHub Copilot CLI** | 10 | 0 | v1.0.84-5 (stable) | MCP server dropout on resume/clear; Windows plugin lock |
| **Kimi Code** | 3 | 0 | None | Linux/WSL2 hard deadlock (unkillable, kills SSH) |
| **OpenCode** | 10 | 10 (a11y + stability) | None | MCP child process leak in `serve`; streaming a11y |
| **Pi** | 10 | 10 (Windows + provider plumbing) | None | Windows strategy unification (62 comments); compaction bounds |
| **Qwen Code** | 4 | 10 (caching + ACP) | v0.23.3-nightly (breaking) | OpenAI Responses reasoning/tool-call adjacency break |
| **DeepSeek TUI** | 10 | 10 (session export + execpolicy) | v0.9.13 (verification) | V4 Pro sunset in 48h; context pressure non-reactive |
| **Grok Build** | 0 | 0 | No activity | — |

**Key insight:** OpenAI Codex, OpenCode, Pi, Qwen Code, and DeepSeek TUI show the highest PR velocity (10+ PRs/day), reflecting active internal development cycles. Claude Code and Copilot CLI rely on batched internal merges with 0 public PR activity.

---

## 3. Shared Feature Directions

| Requirement | Tools Affected | Specific Community Needs |
|-------------|----------------|--------------------------|
| **Cross-session context continuity** | Claude Code (#24798, #80969), Copilot CLI (#2436), OpenCode (#36676), DeepSeek TUI (#6086), Pi (#9512) | Reliable session resume, memory import/export, inter-session communication, project-level persistence |
| **Windows/WSL2 parity & stability** | Claude Code (#85891, #49917), Codex (#42215, #16786), Copilot CLI (#3700, #4095), Kimi (#2640), Qwen (#11685), Pi (#7547) | Installer reliability, WSL2 CPU idle spin, shell detection, path handling, sandbox routing |
| **MCP / tool server reliability** | Copilot CLI (#4753, #4818, #4370), OpenCode (#47727), Codex (#44945), Claude Code (#93087) | Graceful handoff on resume/clear, OAuth refresh, `server/discover` compat, process lifecycle mgmt |
| **Sandbox / network policy control** | Claude Code (#93525, #87959), Codex (#40060), Gemini (#29214, #29283), DeepSeek (#6098, #6097) | Predictable egress allowlists, execpolicy precision, filesystem boundaries, heredoc/false-positive handling |
| **Token/cost observability & compaction** | Pi (#9478, #9512), Qwen (#10410, #11627), DeepSeek (#5620), OpenCode (#34215) | Bounded summarization input, prompt cache preservation, per-message char caps, usage normalization |
| **Accessibility (a11y) compliance** | OpenCode (#33137, #46396, #41408), Pi (#9503), DeepSeek (#6045) | Streaming content in a11y tree, NVDA/VoiceOver support, light-theme contrast, modal usability |
| **Multi-account / profile switching** | Codex (#25383), Pi (#7658), Qwen (#11521) | Programmatic auth.json writes, provider-agnostic credential mgmt, per-project model profiles |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | OpenCode | Pi | Qwen Code | DeepSeek TUI |
|-----------|-------------|--------------|------------|-------------|----------|-----|-----------|--------------|
| **Primary Focus** | Enterprise desktop + cloud sandbox | Voice + multi-modal TUI; Rust core | Security hardening + subagent autonomy | GitHub ecosystem integration + MCP | Accessibility + server-mode daemon | Extensibility + provider-agnostic core | Prompt caching + ACP/daemon hardening | Session durability + execpolicy granularity |
| **Target User** | Professional devs, teams, cloud workflows | Power users, voice-first, Rust enthusiasts | Google Cloud / Gemini ecosystem users | GitHub-centric orgs, Copilot subscribers | Blind/low-vision devs, server operators | Extension authors, multi-provider users | Qwen/DashScope ecosystem, review automation | DeepSeek users, TUI purists, security-focused |
| **Technical Approach** | TypeScript/Node, heavy cloud integration | Rust TUI, app-server architecture | TypeScript, heavy sandbox investment | TypeScript/Node, VS Code tight coupling | TypeScript/Effect, a11y-first, cgroup isolation | TypeScript, plugin-first, terminal-agnostic | TypeScript, nightly cadence, OpenAI Responses focus | Rust, crate decomposition, portable command contract |
| **Differentiator** | Remote Control, Cowork cloud sandbox | Voice pipeline, personality retirement | Prompt injection hardening, `--yolo`→wildcard | Semantic JSONL interchange, HydraFusion OTel | Streaming a11y, bidi/RTL native, cgroup escape | Mid-conversation system messages, sampling params | Hierarchical memory recall, fleet dashboard | Deny-rule expressiveness, session tar.xz export |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|------|-------|----------|
| **High Momentum (Rapid Iteration)** | OpenAI Codex, OpenCode, Pi, Qwen Code, DeepSeek TUI | 10+ PRs/day; nightly/alpha cadence; active RFC-style issue discussions; maintainer-driven consensus (#7547 Pi, #18001 OpenCode) |
| **Steady Enterprise Cadence** | Claude Code, GitHub Copilot CLI, Gemini CLI | Stable releases with focused fixes; high-engagement issues (99👍, 21👍); batched internal merges; clear priority tags (P1/P2) |
| **Early / Niche** | Kimi Code, Grok Build | <5 issues updated; critical blockers unresolved (Kimi Linux deadlock); no PR velocity; limited community surface |

**Maturity signals:** Claude Code and Copilot CLI show enterprise-grade issue hygiene (labels, priority, regression tracking). OpenCode leads on accessibility compliance. Pi and Qwen Code demonstrate sophisticated provider-agnostic architectures. DeepSeek TUI's crate decomposition (EPIC-005) signals architectural maturity.

---

## 6. Trend Signals (Strategic Value for Developers)

1. **Session/Context as a First-Class Abstraction** — Every tool invests in import/export, resume, and cross-session memory. *Decision factor:* Choose tools with semantic interchange formats (Copilot CLI JSONL, DeepSeek tar.xz) for portability.

2. **Windows Is the Differentiator** — Tools solving WSL2 CPU spin (Codex, Copilot), installer corruption (Claude), shell detection (Pi), and PTY/cgroup issues (Qwen, Kimi) will win enterprise adoption. *Watch:* Pi's unified Windows strategy (#7547) and Codex's app-server sandbox routing (#44945).

3. **MCP Is the Integration Backbone** — Reliability gaps (hand-off, OAuth, discovery) are universal. *Signal:* Tools standardizing on graceful shutdown (Qwen #11642), cgroup isolation (OpenCode #48591), and `server/discover` compat (Copilot #4370) reduce integration tax.

4. **Compaction & Cache Are Cost Controls** — Pi's per-message char cap (#9478), Qwen's deferred-tool cache preservation (#10410), and DeepSeek's context pressure reactivity (#5620) show token economics driving UX. *Implication:* Expect `logPrompts`/`logPrompts=false` privacy gates (Qwen #11670, Pi) to become standard.

5. **Accessibility Is No Longer Optional** — OpenCode's triple a11y fix (#48597), Pi's contrast fixes (#9503), and DeepSeek's modal overhaul (#6045) indicate compliance-driven development. *Procurement factor:* a11y maturity may gate enterprise procurement.

6. **Provider-Agnostic Core Wins Long-Term** — Pi's mid-conversation system messages (#9116), Qwen's unified reasoning profiles (#11521), and OpenCode's plugin API (#46690) enable model/provider switching without workflow rewrite. *Architecture signal:* Invest in tools abstracting provider primitives (sampling params, auth, tool schemas).

7. **Nightly/Alpha Velocity ≠ Production Readiness** — Codex (4 alphas/day), Qwen (breaking nightly), Gemini (nightly security fixes) iterate fast but carry migration risk. *Risk mitigation:* Track stable-channel lag; prefer tools with deprecation windows (Claude, Copilot) for production pipelines.

---

**Bottom Line for Technical Decision-Makers:** The ecosystem is converging on **session durability**, **Windows fidelity**, and **sandbox predictability** as table stakes. Differentiation now lies in **orchestration primitives** (multi-agent, cross-session), **observability** (cost, a11y, telemetry), and **extensibility surfaces** (MCP, plugin API, provider abstraction). For greenfield adoption, prioritize tools with stable interchange formats, proven Windows/WSL2 support, and active a11y/compliance investment.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-09-12 | Repository: [anthropics/skills](https://github.com/anthropics/skills)*

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| Rank | Skill / PR | Functionality | Discussion Highlights | Status |
|------|------------|---------------|----------------------|--------|
| 1 | **[#1298](https://github.com/anthropics/skills/pull/1298)** `skill-creator`: fix `run_eval.py` 0% recall | Core infrastructure fix — repairs the skill description evaluation pipeline that incorrectly reports 0% recall for all skills, breaking the optimization loop | Referenced by [Issue #556](https://github.com/anthropics/skills/issues/556) (12 comments, 7👍) with 10+ independent reproductions; fixes Windows stream reading, trigger detection, parallel workers | **Open** (updated 2026-09-12) |
| 2 | **[#1742](https://github.com/anthropics/skills/pull/1742)** `mcp-builder`: MCP ≥2.0 compatibility | Updates `streamablehttp_client` → `streamable_http_client` and custom headers API for MCP 2.0+ | Fixes [#1668](https://github.com/anthropics/skills/issues/1668); critical for MCP ecosystem compatibility | **Open** (updated 2026-09-11) |
| 3 | **[#1628](https://github.com/anthropics/skills/pull/1628)** **Hivemind**: Zero-Cost Multi-Agent Orchestration | Delegates mechanical work to headless `opencode` workers (free models) while Claude Code remains planner/reviewer/merger | Novel cost-optimization architecture; "expensive model's context is the scarce resource" | **Open** (updated 2026-08-24) |
| 4 | **[#1367](https://github.com/anthropics/skills/pull/1367)** **self-audit**: Mechanical verification + 4-dimension reasoning gate | Pre-delivery audit: file existence verification → reasoning quality audit (correctness, completeness, clarity, safety) in severity order | Universal, stack-agnostic meta-skill; v1.3.0 | **Open** (updated 2026-07-02) |
| 5 | **[#514](https://github.com/anthropics/skills/pull/514)** **document-typography**: Typographic quality control | Prevents orphan words, widow paragraphs, numbering misalignment in AI-generated documents | Addresses "issues affecting every document Claude generates"; users rarely request good typography explicitly | **Open** (updated 2026-03-13) |
| 6 | **[#1627](https://github.com/anthropics/skills/pull/1627)** **buffer-api**: Agent Skill for Buffer GraphQL API | Schedule, manage, analyze social posts from any AI agent (Claude, Cursor, Codex, OpenClaw, Hermes, n8n) | Portable across agent platforms; covers account/channel discovery, post scheduling, analytics | **Open** (updated 2026-09-05) |
| 7 | **[#486](https://github.com/anthropics/skills/pull/486)** **odt**: OpenDocument text creation & template filling | Create, fill, read, convert `.odt`/`.ods` files; parse ODT → HTML | ISO standard format support; triggers on "ODT", "ODS", "OpenDocument", "LibreOffice" | **Open** (updated 2026-04-14) |
| 8 | **[#1602](https://github.com/anthropics/skills/pull/1602)** Evaluation serialization & benchmark fixes | Fixes MCP result serialization, metric calculation, encoding, script stability across `mcp-builder`, `skill-creator`, `web-artifacts-builder` | Resolves "multiple reliability, platform compatibility, and metric calculation bugs" | **Open** (updated 2026-08-24) |

> **Note**: PR comment counts show as `undefined` in source data; ranking based on issue cross-references, recency, and architectural significance.

---

## 2. Community Demand Trends (From Issues)

| Trend | Evidence | Community Signal |
|-------|----------|------------------|
| **Trust & Security Infrastructure** | [#492](https://github.com/anthropics/skills/issues/492) (43 comments, 2👍) — Community skills masquerading as official `anthropic/` namespace skills | **Critical**: Users granting elevated permissions to impersonated skills |
| **Organizational Collaboration** | [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8👍) — Org-wide skill sharing without manual file transfer | **High**: 8👍 indicates strong demand for native sharing |
| **Evaluation Pipeline Reliability** | [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 7👍) — `claude -p` never triggers skills (0% trigger rate) | **Blocking**: Core skill-creator loop non-functional |
| **Context Window Management** | [#1487](https://github.com/anthropics/skills/issues/1487) (4 comments) — `claude-api` injects ~156k tokens, exhausting context | **Emerging**: Bundled skills causing OOM in single tool call |
| **MCP Integration & Interop** | [#16](https://github.com/anthropics/skills/issues/16) (4 comments) — Expose Skills as MCPs; [#1390](https://github.com/anthropics/skills/issues/1390) (4 comments) — MCP eval broken | **Foundational**: Skills ↔ MCP boundary needs standardization |
| **AWS Bedrock Support** | [#29](https://github.com/anthropics/skills/issues/29) (4 comments) — Skills on Bedrock | **Platform expansion**: Enterprise deployment requirement |
| **Quality Gates & Self-Verification** | [#1385](https://github.com/anthropics/skills/issues/1385) (4 comments, 1👍) — 3-gate pipeline (Calibration → Adversarial Review → Verification) | **Meta-skill demand**: Automated reasoning quality assurance |
| **Duplicate Skill Pollution** | [#189](https://github.com/anthropics/skills/issues/189) (6 comments, 9👍) — `document-skills` + `example-skills` install identical content | **DX issue**: 9👍 shows widespread frustration |

---

## 3. High-Potential Pending Skills (Active Open PRs Likely to Land)

| PR | Skill | Why It's High-Potential |
|----|-------|------------------------|
| **[#1298](https://github.com/anthropics/skills/pull/1298)** | `skill-creator` eval fix | Blocks all skill description optimization; 10+ reproductions; recent activity (Sept 12) |
| **[#1742](https://github.com/anthropics/skills/pull/1742)** | MCP 2.0 compatibility | Ecosystem-critical; MCP 2.0 is current standard; active maintenance |
| **[#1602](https://github.com/anthropics/skills/pull/1602)** | Evaluation serialization fixes | Cross-cutting reliability patch; affects 3+ skill builders |
| **[#1628](https://github.com/anthropics/skills/pull/1628)** | **Hivemind** multi-agent orchestration | Novel architecture; addresses cost/context constraints; active discussion |
| **[#1367](https://github.com/anthropics/skills/pull/1367)** | **self-audit** quality gate | Meta-skill with broad applicability; versioned (v1.3.0); near-complete |
| **[#514](https://github.com/anthropics/skills/pull/514)** | **document-typography** | Solves universal pain point (every generated document); clear spec |
| **[#486](https://github.com/anthropics/skills/pull/486)** | **odt** OpenDocument support | Standards-compliant format; fills gap in document generation stack |
| **[#1627](https://github.com/anthropics/skills/pull/1627)** | **buffer-api** agent skill | Cross-platform agent integration; practical social media automation |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is not for new domain skills, but for *trustworthy skill infrastructure*: fixing the broken evaluation pipeline that prevents skill optimization, securing the namespace against impersonation, enabling organizational sharing, and preventing context-window exhaustion from bundled skills — essentially, making the skill *platform* reliable before expanding the skill *catalog*.**

---

# Claude Code Community Digest — 2026-09-12

---

## 1. Today's Highlights

**v2.1.269** shipped with two developer-facing features: `claude plugin eval` for running plugin evaluation suites with scored JSON/HTML reports, and `/output-style [name]` to list and switch output styles across local, Remote Control, and cloud sessions. The issue tracker remains dominated by Windows Desktop stability problems (always-on-top window, installer corruption, Remote Control persistence after updates) and Cowork sandbox egress/networking regressions on both Windows and macOS.

---

## 2. Releases

### v2.1.269
- **`claude plugin eval`** — Run a plugin's eval suite against Claude Code; produces reproducible scored results with JSON + HTML report output. See `claude plugin eval --help`.
- **`/output-style [name]`** — List available output styles and switch between them. Works locally, over Remote Control, and in cloud/OT environments.

---

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#85891](https://github.com/anthropics/claude-code/issues/85891) | **Windows 11: Desktop window stays always-on-top, no setting to disable** | Blocks multitasking; Windows counterpart to macOS issue #66516. Affects all Desktop users on Win11. | **99 comments, 236 👍** — Highest engagement in tracker; users report workflow-breaking behavior. |
| [#24798](https://github.com/anthropics/claude-code/issues/24798) | **Inter-session communication for multi-Claude workflows** | Enables direct project workflow between siloed sessions — critical for parallel module work. | **84 comments, 21 👍** — Long-standing enhancement (Feb 2026); closed but signals strong demand for orchestration primitives. |
| [#49917](https://github.com/anthropics/claude-code/issues/49917) | **Windows installer fails with HRESULT 0x80073CF6 after prior "successful" install leaves package inconsistent** | Blocks clean reinstalls/upgrades; leaves users stuck on broken versions. | **42 comments, 8 👍** — Persistent installation corruption on Windows. |
| [#93525](https://github.com/anthropics/claude-code/issues/93525) | **Cowork cloud sandbox: egress allowlist collapses to ~5 hosts despite "All domains" setting** | Regression breaking outbound connectivity for cloud sandboxes; defeats configured network policy. | **33 comments, 3 👍** — Duplicate marked but active discussion; affects cloud workflow reliability. |
| [#79773](https://github.com/anthropics/claude-code/issues/79773) | **Max 20x upgrade not reflected in weekly limits — depleting at Max 5x rate** | Billing/entitlement mismatch; paid users not receiving provisioned capacity. | **15 comments, 3 👍** — Direct revenue impact; users report limits not updating since July upgrade. |
| [#93494](https://github.com/anthropics/claude-code/issues/93494) | **Cowork (macOS): all outbound egress lost mid-session from both desktop workspace and cloud container** | Complete network loss mid-session; file access works but all external calls fail. | **6 comments, 4 👍** — Fresh regression (Sep 10); blocks cloud development on macOS. |
| [#68262](https://github.com/anthropics/claude-code/issues/68262) | **Subfolders / nested organization within a Claude.ai Project (web, desktop, mobile)** | Project structure scaling; users need hierarchical organization beyond flat project lists. | **6 comments, 22 👍** — High upvote-to-comment ratio; clear product gap for team/organization use. |
| [#87959](https://github.com/anthropics/claude-code/issues/87959) | **Worktree-isolation Bash guard refuses every compound command (heredocs, `&&`/`;` chains) even without git usage** | Overly restrictive sandbox breaks legitimate shell workflows; false positives on command parsing. | **5 comments** — Technical regression in worktree isolation logic; affects power users heavily. |
| [#93667](https://github.com/anthropics/claude-code/issues/93667) | **VS Code: setting to keep IDE selection indicator in footer instead of inline prompt (v2.1.268 regression)** | UI regression moved selection indicator into prompt input, hiding collapse control and response. | **4 comments, 7 👍** — Recent regression (Sep 10); impacts VS Code extension usability daily. |
| [#93743](https://github.com/anthropics/claude-code/issues/93743) | **Project memory/session storage collides across projects due to non-ASCII path slug encoding (Windows)** | Korean/non-ASCII paths collapse to same slug (`-`), causing session/memory corruption across distinct projects. | **2 comments** — Critical i18n bug; data loss risk for international users on Windows. |

---

## 4. Key PR Progress

**No pull requests updated in the last 24 hours.**  
*(The repository shows 0 PRs with recent activity. Feature work and fixes are likely landing via internal branches or batched merges.)*

---

## 5. Feature Request Trends

From the open enhancement issues and high-engagement discussions, three clear directions emerge:

1. **Multi-session orchestration & state sharing** — #24798 (inter-session communication), #93349 (revive Remote Control session from mobile), #80969/#90189/#91915 (Remote Control persistence across updates/relaunches). Developers want *reliable, always-on* agent connectivity and the ability to sequence dependent tasks across sessions.

2. **Project & workspace structure scaling** — #68262 (nested subfolders in projects), #93743 (non-ASCII path handling), #72174 (TUI rendering artifacts). Teams need hierarchical organization and robust path handling for internationalized environments.

3. **Sandbox & networking control** — #93525, #93494 (Cowork egress), #87959 (worktree Bash guard), #92195 (browser pane permissions). Developers demand *predictable, configurable* network/filesystem isolation — not opaque allowlists that collapse or over-block.

---

## 6. Developer Pain Points (Recurring High-Frequency Frustrations)

| Pain Point | Evidence | Affected Surface |
|------------|----------|------------------|
| **Windows Desktop instability** | #85891 (always-on-top), #49917 (installer corruption), #91915 (Remote Control lost after auto-update), #93743 (path slug collision) | Desktop app, installer, Remote Control, session storage |
| **Remote Control reliability** | #80969 (never re-arms on restored sessions), #90189 (doesn't survive app updates), #91915 (headless machines unreachable), #93349 (no mobile revive) | Desktop, CLI, mobile, cloud |
| **Cowork/cloud sandbox networking** | #93525 (egress allowlist collapse), #93494 (total egress loss mid-session), #92195 (browser permission persistence) | Cloud sandbox, browser pane, Cowork |
| **Session/context integrity bugs** | #58996 (`/compact` stuck at 95%), #81955 (agent text re-enters context as user), #93087 (orphaned MCP servers), #92896 (9s/1.4GB stall per turn) | Core, MCP, compaction, memory |
| **VS Code extension regressions** | #93667 (selection indicator moved inline), #93052 (absolute path misdetected as slash command), #72714 (`/worktree` corrupts main repo `.git/config`) | VS Code extension, worktree, UI |
| **Billing/entitlement sync** | #79773 (Max 20x not reflected in limits) | Account, usage metering |

**Bottom line:** The loudest signal is **Windows Desktop + Remote Control fragility** — multiple independent issues converge on "app updates break background connectivity" and "installer leaves system in bad state." Cowork networking regressions are the second cluster, affecting cloud developers on both platforms. Core session/context bugs (compaction, MCP cleanup, per-turn stalls) persist but affect a narrower power-user segment.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-09-12

## 1. Today's Highlights
The Codex team shipped four rapid alpha releases (0.155.0-alpha.3.7–3.10) while closing 20+ PRs in a single day—focused on retiring legacy personality selectors, hardening Windows sandbox routing through the app server, and stabilizing voice/caption pipelines. Community attention remains concentrated on Windows desktop reliability (project sync, browser auth, sandbox locks) and macOS resource leaks that cause HID/WindowServer stalls during long sessions.

## 2. Releases
| Version | Type | Notes |
|---------|------|-------|
| `0.155.0-alpha.3.7` – `0.155.0-alpha.3.10` | Alpha (Rust) | Four incremental alpha builds in 24h; no individual changelogs published. Likely contain the PR fixes listed below (sandbox routing, voice runtime bundling, personality removal). Track via [releases page](https://github.com/openai/codex/releases). |

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#42215](https://github.com/openai/codex/issues/42215) | **Windows: Project context sync fails at filesystem stage** | Blocks local Work chats in existing ChatGPT Projects on Windows 11; 23-file repo reproduces reliably. | 31 comments, active since Sep 2 — highest engagement in batch. |
| [#43410](https://github.com/openai/codex/issues/43410) | **Windows Browser control fails with API-key auth** | Edge plugin connects but first operation errors `unsupported Codex auth method: apikey`; breaks browsing workflows for API-key users. | 24 comments, 13 👍 — clear demand for API-key parity. |
| [#25744](https://github.com/openai/codex/issues/25744) | **macOS: Computer Use/MCP helper leaks → HID lag & WindowServer stalls** | Long-running sessions accumulate zombie children; impacts system responsiveness broadly. | 22 comments, 3 👍 — persistent since June, affects power users. |
| [#16786](https://github.com/openai/codex/issues/16786) | **Windows: `git ls-files` spawn storm grows `ntfs.sys` nonpaged pool** | Continuous background git ops leak kernel memory; can destabilize host OS. | 15 comments, 4 👍 — deep OS-level symptom, hard workaround. |
| [#44561](https://github.com/openai/codex/issues/44561) | **TUI: Disable “astra stars” whimsy effect by default** | Visual noise causes confusion (“thought screen was glitching”); opt-out requires config edit. | 12 comments, 17 👍 — strong consensus for off-by-default. |
| [#41377](https://github.com/openai/codex/issues/41377) | **iOS Remote: Transcript history vanishes in long chats** | Earlier assistant/tool turns disappear from UI; session intact but unscrollable. | 12 comments, 3 👍 — mobile productivity blocker. |
| [#37856](https://github.com/openai/codex/issues/37856) | **VS Code extension: Stale thread owner blocks chat** | Renderer reload leaves thread owned by dead client; “open in another application” false positive. | 12 comments, 8 👍 — daily friction for VS Code users. |
| [#44102](https://github.com/openai/codex/issues/44102) | **Windows Desktop 26.903.61454: Follow-up messages fail after first turn** | Regression in latest Windows build; breaks multi-turn conversations. | 11 comments — recent regression, high urgency. |
| [#38762](https://github.com/openai/codex/issues/38762) | **`migrate-rollouts` leaves subagent threads with empty projected history** | Offline migration corrupts thread state; affects CLI users on `main`. | 11 comments — data-integrity risk during upgrades. |
| [#40060](https://github.com/openai/codex/issues/40060) | **Windows sandbox: ExecPolicy false positive with `Start-Process` + URL** | Benign PowerShell scripts blocked; classifier logic unchanged since 0.146.0. | 10 comments — sandbox over-blocking erodes trust. |

## 4. Key PR Progress (Top 10 Merged/Closed Today)

| # | PR | Summary | Impact |
|---|----|---------|--------|
| [#44957](https://github.com/openai/codex/pull/44957) | **Add model grouping to Agent Command Center** | Cycle grouping (project/status/model) via `Ctrl+S`; shows active grouping in footer. | UX improvement for multi-model task management. |
| [#44952](https://github.com/openai/codex/pull/44952) | **Keep voice captions visible across speaker updates/handoff** | Prevents premature caption disappearance during history insertion races. | Fixes voice UX flakiness. |
| [#44948](https://github.com/openai/codex/pull/44948) | **Context snapshots for async questions & plugin refresh** | Adds integration scenarios for `request_user_input_async` and plugin reload mid-session. | Hardens async/remote workflows. |
| [#44946](https://github.com/openai/codex/pull/44946) | **Retire Friendly/Pragmatic personality selection** | Removes legacy personality variables; uses literal model instruction templates; `supports_personality=false` for new presets. | Simplifies model config; reduces prompt-surface complexity. |
| [#44945](https://github.com/openai/codex/pull/44945) | **Route TUI Windows sandbox setup through app server** | Uses `windowsSandbox/setupStart` for elevated/unelevated setup; verifies effective sandbox mode. | Unifies sandbox orchestration; fixes remote executor config. |
| [#44944](https://github.com/openai/codex/pull/44944) | **Enforce managed provider requirements on existing app-server threads** | Checks retained providers against current managed `model_provider` requirements on thread reuse. | Prevents stale provider config from bypassing policy. |
| [#44935](https://github.com/openai/codex/pull/44935) | **Remove personality selection from TUI** | Drops `/personality` command, popup, tooltip, persistence; stops sending override. | Aligns TUI with model-level retirement (#44946). |
| [#44933](https://github.com/openai/codex/pull/44933) | **Remove Windows world-writable scans/warnings from TUI** | Eliminates startup/permission-change scans, dialogs, telemetry. | Reduces noise; scans were unactionable for most users. |
| [#44922](https://github.com/openai/codex/pull/44922) | **Bundle native voice runtimes in Windows releases** | Packages voice helper + native audio libs; adds platform cert validation for TLS on fresh Windows. | Enables voice on clean Windows installs without manual deps. |
| [#25383](https://github.com/openai/codex/pull/25383) | **App-server account session lifecycle (Rust)** | Adds `accountSession/*` routes (login, add, list, switch, logout); multi-account profile switching foundation. | Enables Desktop multi-account support — long-requested. |

## 5. Feature Request Trends
1. **Windows parity & stability** — Project sync, browser auth, sandbox exec, scheduled tasks, and kernel resource leaks dominate Windows feedback.
2. **Mobile/remote session fidelity** — Transcript loss (iOS), link-message desync, thread projection stalls indicate remote state sync is a systemic gap.
3. **TUI polish over novelty** — Whimsy effect opt-out (17 👍), personality removal PRs show users prefer clean, predictable terminals.
4. **Voice pipeline hardening** — Caption persistence, audio format refresh, runtime bundling signal investment in voice as a first-class modality.
5. **Multi-account / profile switching** — PR #25383 landing suggests desktop multi-account is imminent; issues around session isolation will follow.

## 6. Developer Pain Points (Recurring Themes)
| Area | Representative Issues | Frequency Signal |
|------|----------------------|------------------|
| **Windows desktop reliability** | #42215, #43410, #16786, #44102, #36475, #44736, #44963 | 7+ issues in top 30; kernel-level leaks + auth + sandbox |
| **macOS background process leaks** | #25744, #31160 (Intel Computer Use missing) | Long-standing; causes system-wide HID/WindowServer stalls |
| **Session/thread state corruption** | #38762, #42662, #33947, #37856, #41377 | Migration, remote, VS Code, and mobile all hit projection bugs |
| **Sandbox over-blocking / false positives** | #40060, #36475, #43890 | ExecPolicy, lock failures, auto-deny on elevated cmds |
| **Config friction** | #44561 (whimsy), personality removal PRs | Users want sane defaults, not hidden toggles |

---

*Digest generated from GitHub data as of 2026-09-12. Links point to live issues/PRs on `openai/codex`.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-09-12

---

## 1. Today's Highlights

Today’s nightly release **v0.61.0-nightly.20260912** ships two critical security hardening fixes: preventing indirect prompt injection via build-file modifications and untrusted flags, plus strengthened sandbox filesystem boundaries and runtime-state isolation. Meanwhile, the issue backlog shows persistent pain around **subagent reliability** (MAX_TURNS misreporting, hangs, missing skills usage) and **authentication loops** affecting Pro users. A notable PR maps `--yolo` to a wildcard `allowedTools: ["*"]` policy, removing the legacy `ApprovalMode.YOLO` state.

---

## 2. Releases

### v0.61.0-nightly.20260912.g9c1b0a610 ([Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.61.0-nightly.20260912.g9c1b0a610))
- **fix(core)**: Prevent indirect prompt injection via build file modifications and untrusted flags ([#29250](https://github.com/google-gemini/gemini-cli/pull/29250))
- **fix(sandbox)**: Harden filesystem boundaries and isolate runtime state ([#29214](https://github.com/google-gemini/gemini-cli/pull/29214), [#29283](https://github.com/google-gemini/gemini-cli/pull/29283))

> *Nightly builds are published daily; these changes will roll into the next stable release.*

---

## 3. Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent recovery after MAX_TURNS reported as GOAL success** | Subagents silently report success despite hitting turn limits, masking failures in multi-agent workflows. | 13 comments, 2👍, `priority/p1`, `status/need-retesting` |
| [#29267](https://github.com/google-gemini/gemini-cli/issues/29267) | **Stuck in auth loop (Pro user)** | Pro subscribers unable to authenticate; blocks daily usage. | 10 comments, `priority/p2`, `area/security` |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent hangs forever** | Deferral to generalist agent causes hour-long hangs; workaround is disabling subagents. | 8 comments, 8👍, `priority/p1` |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | **Leverage model's bash affinity via Zero-Dependency OS Sandboxing** | Epic to align tooling with Gemini 3’s native bash chaining (`grep`/`sed`/`awk`) for better performance. | 9 comments, 1👍, `effort/large`, `kind/enhancement` |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **Assess impact of AST-aware file reads/search/mapping** | Investigation into whether AST tooling reduces turns/tokens for codebase navigation. | 7 comments, 1👍, `kind/feature` |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | **Gemini does not use skills/sub-agents autonomously** | Model ignores custom skills unless explicitly instructed, limiting extensibility. | 6 comments, `priority/p2` |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | **Add deterministic redaction & reduce Auto Memory logging** | Secrets may enter model context before redaction; logging exposes skill data. | 5 comments, `priority/p2`, `area/security` |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell command execution stuck at "Waiting input" after completion** | Simple commands hang post-execution, showing false "awaiting input" state. | 4 comments, 3👍, `priority/p1` |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | **Browser agent: automatic session takeover & lock recovery** | Persistent browser profiles fail fast on lock contention instead of recovering. | 4 comments, `kind/feature` |
| [#21335](https://github.com/google-gemini/gemini-cli/issues/21335) | **`/compress` not persistent across session resume** | Token-saving summaries lost on restart; users re-pay context costs. | 2 comments, 2👍, `effort/small` |

---

## 4. Key PR Progress (10 Notable PRs)

| PR | Status | Summary | Impact |
|----|--------|---------|--------|
| [#29250](https://github.com/google-gemini/gemini-cli/pull/29250) | **Closed** (in nightly) | Prevent indirect prompt injection via build files & untrusted flags | **Security hardening** — blocks supply-chain injection vectors |
| [#29214](https://github.com/google-gemini/gemini-cli/pull/29214) / [#29283](https://github.com/google-gemini/gemini-cli/pull/29283) | **Closed** (in nightly) | Harden sandbox filesystem boundaries, isolate runtime state | **Sandbox escape mitigation** for Docker/Podman/runsc/Seatbelt |
| [#29287](https://github.com/google-gemini/gemini-cli/pull/29287) | **Closed** | Map `--yolo` → `allowedTools: ["*"]`; remove `ApprovalMode.YOLO` | Simplifies approval model; fulfills [#11303](https://github.com/google-gemini/gemini-cli/issues/11303) |
| [#29205](https://github.com/google-gemini/gemini-cli/pull/29205) | **Open** | Submit MCP prompt text without JSON encoding | Fixes quoting/newline corruption in MCP responses |
| [#29200](https://github.com/google-gemini/gemini-cli/pull/29200) | **Open** | Enforce MCP policy consistently at runtime | Fixes case-sensitivity & empty-allowlist logic gaps |
| [#29217](https://github.com/google-gemini/gemini-cli/pull/29217) | **Open** | Don’t rewrite explicit `gemini-2.5-flash` model selection | Prevents silent auto-upgrade of pinned models |
| [#29211](https://github.com/google-gemini/gemini-cli/pull/29211) | **Open** | Stop scheduling state updates from inside a state updater | Fixes React anti-pattern causing UI instability |
| [#29201](https://github.com/google-gemini/gemini-cli/pull/29201) | **Open** | Preserve approved shell commands across confirmation retries | Fixes infinite permission loop for multi-injection TOML commands |
| [#29203](https://github.com/google-gemini/gemini-cli/pull/29203) | **Open** | Strip shell wrappers carrying extra flags (`bash -c`, `powershell -Command`) | Closes policy bypass via flagged wrappers |
| [#29282](https://github.com/google-gemini/gemini-cli/pull/29282) | **Open** | Persist OAuth credentials immediately after login | Directly addresses [#29267](https://github.com/google-gemini/gemini-cli/issues/29267) auth-loop bug |
| [#29286](https://github.com/google-gemini/gemini-cli/pull/29286) | **Open** | Implement Google Search tool in `RobustAutonomousAgent` | Adds web search capability to autonomous agent |

---

## 5. Feature Request Trends

From the issue landscape, four clear directions emerge:

1. **Subagent/skill autonomy** — Users want the model to *proactively* invoke custom skills and subagents ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968), [#22745](https://github.com/google-gemini/gemini-cli/issues/22745)) rather than requiring explicit instruction.
2. **AST-aware code navigation** — Strong interest in replacing grep/glob with structural tooling (`tilth`, `glyph`) for precise, low-token reads ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746), [#19561](https://github.com/google-gemini/gemini-cli/issues/19561)).
3. **Browser agent resilience** — Persistent sessions, lock recovery, and Wayland support are blocking real-world web automation ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232), [#21983](https://github.com/google-gemini/gemini-cli/issues/21983), [#22267](https://github.com/google-gemini/gemini-cli/issues/22267)).
4. **Memory system robustness** — Deterministic redaction, inbox quarantine, and retry limits for Auto Memory ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525), [#26522](https://github.com/google-gemini/gemini-cli/issues/26522), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523)).

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Subagent unreliability** | MAX_TURNS misreported as success ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)), generalist agent hangs ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)), skills ignored ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)) | **High** — 4+ P1/P2 issues, multiple 👍 |
| **Authentication instability** | Auth loop blocking Pro users ([#29267](https://github.com/google-gemini/gemini-cli/issues/29267)), OAuth not persisting ([#29282](https://github.com/google-gemini/gemini-cli/pull/29282)) | **High** — Directly blocks paid users |
| **Shell/command execution hangs** | "Waiting input" after completion ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)), interactive prompt stalls ([#22465](https://github.com/google-gemini/gemini-cli/issues/22465)), permission retry loops ([#29201](https://github.com/google-gemini/gemini-cli/pull/29201)) | **Medium-High** — Core workflow breakage |
| **Session/context persistence** | `/compress` lost on resume ([#21335](https://github.com/google-gemini/gemini-cli/issues/21335)), symlinked agents not recognized ([#20079](https://github.com/google-gemini/gemini-cli/issues/20079)), subagent context missing from bug reports ([#21763](https://github.com/google-gemini/gemini-cli/issues/21763)) | **Medium** — Workflow friction |
| **Tool explosion / 400 errors** | >128/400 tools triggers 400 errors ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)), model creates temp scripts everywhere ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)) | **Medium** — Scalability limit |

---

*Digest generated from github.com/google-gemini/gemini-cli data as of 2026-09-12. All links point to live GitHub items.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-09-12

---

## 1. Today's Highlights
- **v1.0.84-5 released** with session/memory import commands for the semantic JSONL interchange format and a rewrite of shell completions that now derive directly from the CLI’s parsing grammar.
- **MCP stability remains the top pain point**: multiple reports of servers being stranded or cancelled during session resume/clear, OAuth refresh failures with Entra/Atlassian, and a regression where `server/discover` errors break initialization.
- **Windows/WSL2 regressions persist**: high CPU idle spin in WSL2, sandbox warnings on 25H2, and plugin updates blocked by VS Code file locks.

---

## 2. Releases
### v1.0.84-5
- **Added**: `copilot session import` and `copilot memory import` commands supporting the semantic JSONL interchange format for portable session/memory transfer.
- **Improved**: Shell completions (`copilot <TAB>`) now generated from the same grammar the CLI parses with—root flags appear alongside subcommands, and each subcommand surfaces only its own options.
- **Link**: [Release v1.0.84-5](https://github.com/github/copilot-cli/releases/tag/v1.0.84-5)

---

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#4095](https://github.com/github/copilot-cli/issues/4095) | **Windows: plugin update fails with “Access is denied” while VS Code runs** (Copilot extension holds watcher handles on `installed-plugins`) | Blocks plugin updates entirely on Windows when VS Code is open—a common developer workflow. | 21 👍, 2 comments |
| [#4438](https://github.com/github/copilot-cli/issues/4438) | **`disable-model-invocation: true` makes a skill unreachable, not manual-only** | Skills marked manual-only become completely invisible to explicit `/skill` invocation, breaking intended UX. | 7 👍, 5 comments |
| [#4699](https://github.com/github/copilot-cli/issues/4699) | **OOM crash (`JavaScript heap out of memory`) on long `--resume` sessions; crash dumps written to cwd** | Long-running resumed sessions hit 4 GiB V8 cap repeatedly; diagnostic reports pollute working directory. | 5 👍, 3 comments |
| [#3700](https://github.com/github/copilot-cli/issues/3700) | **WSL2 regression: MainThread spins ~215% CPU while idle, TUI frozen until restart** | Renders CLI unusable in WSL2; reproduces on every fresh session after reboot. | 2 👍, 4 comments |
| [#4795](https://github.com/github/copilot-cli/issues/4795) | **Atlassian MCP OAuth fails: callback URL mismatch (random port vs registered 33418)** | Blocks Atlassian MCP integration entirely; affects enterprise users relying on Jira/Confluence MCP. | 3 👍, 3 comments |
| [#4370](https://github.com/github/copilot-cli/issues/4370) | **MCP initialization fails when `server/discover` returns `-32602` (FastMCP compat)** | FastMCP servers (popular Python framework) can’t connect because CLI treats unimplemented `server/discover` as fatal. | 3 👍, 3 comments |
| [#4753](https://github.com/github/copilot-cli/issues/4753) | **v1.0.83: session resume cancels in-flight stdio MCP server connections (~1s timeout, was ~16s)** | MCP servers still initializing during resume are silently dropped, leaving them unavailable for the session. | 1 👍, 4 comments |
| [#4035](https://github.com/github/copilot-cli/issues/4035) / [#4814](https://github.com/github/copilot-cli/issues/4814) | **Voice installer fails: 401 on private Azure Artifacts feed for `Microsoft.AI.Foundry.Local.Core`** | Voice mode broken for all users; package exists on public nuget.org but installer targets private feed. | 5 comments (combined) |
| [#1168](https://github.com/github/copilot-cli/issues/1168) | **Excessive authorization prompts during single request (“authorization fatigue”)** | Single high-level request triggers >12 consent dialogs, severely degrading UX. | 2 👍, 4 comments |
| [#4818](https://github.com/github/copilot-cli/issues/4818) | **Remote/HTTP MCP servers stranded ‘failed’ after every `/clear` or session relaunch** | Foreground-session handoff tears down MCP graph; HTTP servers never recover without full CLI restart. | New, 0 comments |

---

## 4. Key PR Progress
*No pull requests updated in the last 24 hours.*

---

## 5. Feature Request Trends
1. **Cross-session context sharing** ([#2436](https://github.com/github/copilot-cli/issues/2436)) — developers want Session B to leverage context built in Session A.
2. **OpenTelemetry enrichment for HydraFusion** ([#4825](https://github.com/github/copilot-cli/issues/4825)) — per-phase model, verdict, and credit attributes emitted to OTel for observability.
3. **OpenAI Flex Tier support** ([#4821](https://github.com/github/copilot-cli/issues/4821)) — 50% cost reduction for non-latency-critical workloads.
4. **Session lifecycle hooks** ([#4820](https://github.com/github/copilot-cli/issues/4820)) — run a skill/process at session end (pre-`/clear`).
5. **AGENTS.md discovery respecting repo boundaries** ([#4822](https://github.com/github/copilot-cli/issues/4822)) — stop walking ancestors past `.git` root.
6. **Improved `/skills list` readability** ([#4823](https://github.com/github/copilot-cli/issues/4823)) — consistent indentation for wrapped descriptions.
7. **Ctrl-T enqueue execution** ([#4824](https://github.com/github/copilot-cli/issues/4824)) — queued prompts should auto-execute after current turn completes.

---

## 6. Developer Pain Points (Recurring Frustrations)

| Area | Pattern | Representative Issues |
|------|---------|----------------------|
| **MCP Reliability** | Servers dropped during session handoff (`/clear`, resume), OAuth silent-refresh broken for Entra/Atlassian, `server/discover` strictness breaks FastMCP | #4753, #4818, #4464, #4795, #4370 |
| **Windows/WSL2 Stability** | High CPU idle spin (WSL2), sandbox unsupported on 25H2, plugin updates blocked by VS Code locks, PATH corruption by installer | #3700, #4652, #4095, #4816 |
| **Memory/Resource Leaks** | OOM on long resumed sessions (4 GiB V8 cap), crash dumps polluting cwd | #4699, #4026 |
| **Authorization Fatigue** | Dozens of consent prompts per request; assisted permissions mode times out after ~1 hour | #1168, #4764 |
| **Voice Mode Broken** | Installer hits private Azure Artifacts feed (401) instead of public nuget.org | #4035, #4814 |
| **Skill System UX** | `disable-model-invocation` breaks explicit invocation; duplicate lookups; `/skills list` hard to read | #4438, #4637, #4823 |
| **Exfiltration Protection Overreach** | Legitimate spec content (e.g., `${env.VAR}`) blocked as potential secret leakage | #4065 |

---

*Generated from github.com/github/copilot-cli data as of 2026-09-12 00:00 UTC.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-09-12

## 1. Today's Highlights
No new releases or pull requests in the last 24 hours. Three issues were updated: two long-standing bugs on macOS (web-mode port flapping and "reckless" agent behavior) were closed without comment, while a critical Linux/WSL2 hard deadlock (v0.42.0) remains open and blocks SSH sessions.

## 2. Releases
*None in the last 24h.*

## 3. Hot Issues

| # | Title | Status | Why It Matters |
|---|-------|--------|----------------|
| [#2640](https://github.com/MoonshotAI/kimi-cli/issues/2640) | **Linux/WSL2 random hard deadlock; SIGTERM/SIGQUIT ineffective; kills SSH session** | 🟢 Open | Highest severity: unrecoverable TUI freeze after prolonged use, process ignores standard termination signals, and cascades to the controlling SSH connection. Blocks production use on Linux/WSL2. |
| [#1409](https://github.com/MoonshotAI/kimi-cli/issues/1409) | **Web mode (`/web`) keeps refreshing and connects to different port** | 🔴 Closed | macOS 1.20.0: web preview unstable, port churn breaks dev-loop. Closed silently—root cause unclear; watch for regression. |
| [#1404](https://github.com/MoonshotAI/kimi-cli/issues/1404) | **Reckless behaviour (agent executes destructive actions without confirmation)** | 🔴 Closed | macOS 1.19.0: safety regression where the agent acted on a plan without explicit approval. Closed without resolution details; verify fix in current build. |

*Only three issues updated in the window; all are listed above.*

## 4. Key PR Progress
*No pull requests updated in the last 24h.*

## 5. Feature Request Trends
No explicit feature requests surfaced today. Implicit demand signals from the bugs:
- **Reliability hardening** for long-running TUI sessions (Linux/WSL2).
- **Deterministic port allocation** for `/web` preview.
- **Stronger confirmation gating** before agent executes mutating operations.

## 6. Developer Pain Points
1. **Unkillable CLI processes on Linux/WSL2** — developers lose SSH terminals and must force-kill at the host level.  
2. **Silent closures on macOS bugs** — two issues closed without changelog entries or reproduction verification, eroding trust in release quality.  
3. **Agent safety regressions** — “reckless” behaviour suggests guardrails around tool-use confirmation are brittle or version-dependent.

---

*Digest generated from GitHub data as of 2026-09-12 00:00 UTC. Links point to live issues on `MoonshotAI/kimi-cli`.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-09-12

## Today's Highlights
The community delivered significant accessibility and stability fixes today. A critical memory leak in `opencode serve` (MCP child processes accumulating indefinitely) has a test-driven fix ready. Simultaneously, three long-standing screen-reader accessibility issues — streaming content hidden behind `aria-hidden`, NVDA incompatibility, and inaccessible AI thinking/tool calls — are resolved in a single PR. The 2.0 track advances with server-side project persistence and cgroup isolation for managed services.

## Releases
No new releases in the last 24 hours.

## Hot Issues

| Issue | Status | Why It Matters | Community Signal |
|-------|--------|----------------|------------------|
| **[#18001](/anomalyco/opencode/issues/18001)** `/loop` command for automated iterative task execution | CLOSED | Highly requested automation primitive (43 👍); enables hands-off repetitive workflows | 12 comments, 43 👍 |
| **[#47727](/anomalyco/opencode/issues/47727)** `serve`: per-request instances never disposed — MCP processes leak until OOM | OPEN | Production blocker for polling clients; each request spawns undisposable MCP subprocesses | 3 comments, PR #48595 merged |
| **[#42170](/anomalyco/opencode/issues/42170)** Desktop fails to load sessions: `no such column: project_id` | OPEN | Schema migration gap after workspace→provider/binding refactor; blocks launch on dev builds | 6 comments |
| **[#34215](/anomalyco/opencode/issues/34215)** Desktop hangs at startup — 179 MB `opencode.global.dat` from base64 PDF attachments | CLOSED | Root cause: prompt history storing massive base64 blobs; 7.5 GB read I/O in minutes | 3 comments, 6 👍 |
| **[#33137](/anomalyco/opencode/issues/33137)** Screen readers cannot access streaming assistant content | OPEN | `aria-hidden` on streaming container excludes live output from a11y tree | 2 comments, 1 👍, fixed in #48597 |
| **[#46396](/anomalyco/opencode/issues/46396)** Desktop: screen reader cannot access AI thinking/tool calls during generation | OPEN | Intermediate reasoning steps invisible to AT; blocks blind developers | 2 comments, fixed in #48597 |
| **[#41408](/anomalyco/opencode/issues/41408)** NVDA cannot read streaming replies or counter numbers | OPEN | Browse-mode NVDA misses live content; animated counters also unreadable | 2 comments, partially fixed in #48597 |
| **[#48588](/anomalyco/opencode/issues/48588)** Managed `serve --service` trapped in client cgroup → watchdog kill loops | OPEN | Systemd/container memory limits starve shared server; requires cgroup escape | 1 comment, PR #48591 open |
| **[#48592](/anomalyco/opencode/issues/48592)** [2.0] Web: persist open projects/preferences server-side | OPEN | LocalStorage-only sidebar state lost on cache clear or device switch; server already has project table | 1 comment |
| **[#48585](/anomalyco/opencode/issues/48585)** Interactive `/visualize` command with multi-target diagramming | OPEN | New visualization primitive for architecture/docs; interactive confirmation step | 1 comment, PR #48586 open |

## Key PR Progress

| PR | Type | Summary | Linked Issues |
|----|------|---------|---------------|
| **[#48595](/anomalyco/opencode/pull/48595)** | Bug fix (test) | Guards MCP subprocess lifetime under `Instance.HttpApi`; ensures disposal on request scope end | Fixes #47727 |
| **[#48591](/anomalyco/opencode/pull/48591)** | Bug fix (compliance) | Spawns managed `serve` in dedicated systemd scope (`detached: true` + cgroup escape) | Fixes #48588 |
| **[#48597](/anomalyco/opencode/pull/48597)** | Bug fix | Exposes streaming assistant content to a11y tree; removes `aria-hidden` during generation | Fixes #33137, #46396; addresses #41408 |
| **[#48586](/anomalyco/opencode/pull/48586)** | Feature | Adds `/visualize` CLI + interactive confirmation; multi-target diagramming support | Closes #48585 |
| **[#48587](/anomalyco/opencode/pull/48587)** | Feature | Native Arabic/RTL (bidi) rendering in TUI via UAX #9; isolates URLs/paths/code spans | Closes #38524, #40004, #39525, #32984 |
| **[#48590](/anomalyco/opencode/pull/48590)** | Feature | Backports bidi support to `beta` line for `opencode2` parity | Refs #38524, #40004, #39525, #32984 |
| **[#48589](/anomalyco/opencode/pull/48589)** | Feature | Bidi-js layout engine: first-strong-char direction detection, LRI/PDI isolation, grapheme clustering | — |
| **[#48435](/anomalyco/opencode/pull/48435)** | Refactor | Replaces deep `Equal.equals` in timeline row reconciliation with stable keys; avoids Effect hash walks | Closes #48434 |
| **[#48559](/anomalyco/opencode/pull/48559)** | Refactor | Error values get real prototype chain (`Error` → `TypeError` → `RangeError`…); JS-native naming | — |
| **[#46690](/anomalyco/opencode/pull/46690)** | Feature | Exposes session forms, session list, global event stream to plugin API | Enables Telegram bot, extensibility |

## Feature Request Trends
1. **Automation & scripting** — `/loop` (#18001), `/visualize` (#48585), agent-managed reminders (#36676) show demand for programmable, repeatable workflows.
2. **Server-side state for web** — Persist projects/preferences (#48592), `--dir` for serve (#36658), cgroup isolation (#48588) indicate maturation of `opencode serve` as a multi-tenant service.
3. **Accessibility parity** — Three concurrent a11y issues (#33137, #46396, #41408) plus RTL/bidi work signal organizational commitment to inclusive UX.
4. **Configuration clarity** — AGENTS.md inheritance docs (#36699), `OPENCODE_CONFIG` precedence fix (#36663), reasoning-effort persistence (#36703) reflect friction in config mental model.
5. **Subscription/billing reliability** — First recurring payment failure (#48500) surfaces as Go monetization scales.

## Developer Pain Points
- **Memory leaks in long-running servers** — `serve` instances + MCP children never GC’d (#47727); cgroup inheritance starves shared daemon (#48588).
- **Schema migration brittleness** — `project_id` column drop breaks upgrades (#42170); 1.4.17→1.17.18 migration diverges from fresh install (#36709).
- **Desktop startup performance** — Unbounded base64 prompt history bloats global DB to 179 MB+ (#34215).
- **Streaming content invisible to AT** — `aria-hidden` on live output blocks screen readers (#33137, #46396, #41408).
- **Windows-specific quirks** — Case-sensitive permissions (#36690), Zellij pane vs session termination (#36671), UTF-8 corruption from stdout/stderr merge (#36655).
- **Config precedence surprises** — Global agent markdowns override `OPENCODE_CONFIG` contrary to docs (#36663).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-09-12

## Today's Highlights
The Pi ecosystem continues its rapid iteration on Windows compatibility and extension infrastructure. A major community discussion (#7547, 62 comments) is converging on a unified Windows strategy, while multiple PRs land fixes for shell detection, Store aliases, and keybinding routing. On the AI provider front, sampling parameter handling and mid-conversation system messages are now stabilized, and compaction reliability gains a per-message character cap to prevent runaway token estimates.

---

## Releases
No new releases in the last 24 hours.

---

## Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#7547](https://github.com/earendil-works/pi/issues/7547) | **Windows strategy: unify run modes & docs** | 62 comments, 2 👍 — Core maintainers and users debating which Windows invocation methods (WSL, native, Git Bash, PowerShell, Store) to officially support vs. delegate. Outcome will shape CI, docs, and installer effort. | 🔥 Highest engagement; petrroll (maintainer) driving consensus. |
| [#9052](https://github.com/earendil-works/pi/issues/9052) | **Fullscreen mode: wheel scroll 3× slower** | 9 comments, 4 👍 — UX regression in the new fixed-input fullscreen mode; blocks adoption for power users who rely on fast scrolling. | yangfeng20 provided clear repro; team acknowledged. |
| [#5323](https://github.com/earendil-works/pi/issues/5323) | **Vertex / GCP metadata server auth** | 9 comments, 2 👍 — Synchronous `existsSync` on credential paths blocks startup; needs async metadata-server fallback for Cloud Run / GKE workloads. | yairwein (Google) tracking; impacts enterprise GCP users. |
| [#8928](https://github.com/earendil-works/pi/issues/8928) | **Parallel startup: false "No API key" with expired OAuth** | 7 comments — Race condition in multi-process launches; expired creds for *other* providers leak into active provider error. Deterministic repro shared. | deandevz spent 3h debugging in prod; related to #1871, #4919, #6880. |
| [#7321](https://github.com/earendil-works/pi/issues/7321) | **Multi-line paste broken on Termux (no bracketed paste)** | 5 comments, 1 👍 — First `\r` submits instead of inserting; blocks mobile/Termux workflows. Root cause identified in input handling. | 6mad provided terminal capabilities matrix. |
| [#6108](https://github.com/earendil-works/pi/issues/6108) | **`/reload` re-runs extension dependency side-effects** | 5 comments — Release binary re-evaluates dependency modules on reload, duplicating theme registrations etc. Affects extension authors. | dmasiero traced to `@plannotator/pi-extension` → `@pierre/diffs`. |
| [#9267](https://github.com/earendil-works/pi/issues/9267) | **Fuzzy search: replace char-scan with `indexOf`** | 4 comments, 1 👍 — Micro-optimization in `fuzzy.ts` to cut session-search scan cost without changing ranking. | my-name-is-yu benchmarked; low-risk perf win. |
| [#9262](https://github.com/earendil-works/pi/issues/9262) | **`find` tool: Windows separators (`\`) silently return zero results** | 4 comments — Glob patterns with backslashes fail silently; users think files don’t exist. Follow-up to #6817. | weiconghe: “no error — wrong conclusion.” |
| [#7658](https://github.com/earendil-works/pi/issues/7658) | **Extension API: persist API keys to `auth.json`** | 4 comments — Extensions can register providers but cannot programmatically store credentials; forces manual user steps. | arseniy-gl: “missing programmatic way.” |
| [#9512](https://github.com/earendil-works/pi/issues/9512) | **Compaction hits summary cap with GPT-6 Astra @ max reasoning** | 2 comments — Context overflow recovery fails when summarization output hits token cap; inherited session reasoning budget not accounted for. | tianrendong: intermittent but blocks long sessions. |

---

## Key PR Progress

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#9514](https://github.com/earendil-works/pi/pull/9514) | fix(tui): route hardcoded keys through configurable bindings | **Closed** | All hardcoded TUI shortcuts (editor, input, model picker) now respect keybinding config; adds Ctrl+C clear/cancel and Shift-modified delete/space regression tests. |
| [#9505](https://github.com/earendil-works/pi/pull/9505) | fix(ai): honor `model.samplingParams` in openai-completions stream path | **Closed** | Sampling params from `models.json` (vLLM `repetition_penalty`, llama.cpp `dry_multiplier`, etc.) now flow through tool-capable stream path, not just `streamSimple`. |
| [#9504](https://github.com/earendil-works/pi/pull/9504) | fix(coding-agent): accept Windows Store shell aliases | **Open** | Uses `accessSync(F_OK)` instead of `existsSync` for shell validation; avoids `EACCES` on Store aliases (nodejs/node#36790). Preserves Unix behavior & search order. |
| [#9503](https://github.com/earendil-works/pi/pull/9503) | fix(coding-agent): improve light theme warning contrast | **Closed** | Warn ANSI colors now meet WCAG AA 4.5:1 on light backgrounds; fixes stale colors after auto theme switch. |
| [#9501](https://github.com/earendil-works/pi/pull/9501) | fix(coding-agent): resolve Windows shells from installation dirs | **Open** | Unifies scattered Windows binary discovery (hardcoded paths, env vars, fallbacks) into documented, maintainable logic. |
| [#9117](https://github.com/earendil-works/pi/pull/9117) | feat(coding-agent): deliver prompt/tool changes as system message deltas | **Closed** | Mid-session prompt & tool loadout changes sent as system deltas instead of full rewrite; reduces token churn & improves continuity. |
| [#9116](https://github.com/earendil-works/pi/pull/9116) | feat(ai): add mid-conversation system messages | **Closed** | Foundation for #9117: pi-ai + core now pass `system` role through without breaking; enables dynamic prompt updates. |
| [#9491](https://github.com/earendil-works/pi/pull/9491) | feat(coding-agent): add customization documentation evals | **Closed** | New eval harness compares default system prompt vs. documentation-stripped baseline across provider types; isolates agent state per run. |
| [#9489](https://github.com/earendil-works/pi/pull/9489) | fix(bedrock-converse): normalize `usage.input` to net per model family | **Closed** | Fixes #8752: Anthropic Claude models report net input tokens; other families report gross. Now normalized for accurate cost tracking. |
| [#9478](https://github.com/earendil-works/pi/pull/9478) | fix(coding-agent): cap per-message chars in compaction token estimate | **Closed** | Fixes #9476: 6.6 MB `web_fetch` JSON caused false compaction trigger 3 min after prior compaction. Caps per-message estimate to prevent runaway. |

---

## Feature Request Trends
1. **Windows-first experience** — Shell detection, Store aliases, keybinding quirks (Alt+letter on non-Latin layouts), path separators, and unified docs/installer (#7547, #9504, #9501, #9510, #9262).
2. **Extension credential & API surface** — Persist API keys to `auth.json` (#7658), expose OAuth HTML renderers (#6930), export event-hook types (#9511), deferred reload API (#9468).
3. **Provider-agnostic AI plumbing** — Mid-conversation system messages (#9116), sampling params propagation (#9505), prompt cache keys for compatible proxies (#9442), canonical Codex turn attribution (#9488), Bedrock Mantle support (#8572).
4. **TUI/UX polish** — Configurable keybindings (#9514), fullscreen scroll perf (#9052), bracketed-paste fallback (#7321), light-theme contrast (#9503), fuzzy search optimization (#9267).
5. **Compaction & context reliability** — Bounded summarization input (#8371), per-message char cap (#9478), GPT-6 Astra token-cap handling (#9512), OpenAI Responses SSE terminal event drop (#9513).

---

## Developer Pain Points
| Area | Recurring Frustrations |
|------|------------------------|
| **Windows** | Shell discovery fragmentation; `existsSync` false-negatives on Store aliases; Alt+key dead on non-Latin layouts; backslash globs silent-fail; libuv assertion on RPC shutdown (#9507). |
| **Authentication** | Expired OAuth creds for *inactive* providers poison parallel startup (#8928); Vertex/GCP metadata server sync check blocks Cloud Run; no extension API to write `auth.json` (#7658). |
| **Extensions** | `/reload` re-executes dependency side-effects (#6108); missing event-hook types (#9511); `ctx.ui.notify` last-wins race (#9462); no deferred reload primitive (now added in #9468). |
| **Performance** | Fuzzy search O(n) char scan (#9267); compaction input unbounded (#8371) → token-cap failures (#9512); large tool results skew estimates (#9478). |
| **Terminal Compatibility** | Termux bracketed paste (#7321); Shift+Enter submits on Windows Terminal (#7175); Alt+letter dead on Cyrillic/Hebrew/Greek layouts (#9510, #9509). |
| **Provider Interop** | OpenAI-compatible gateways reject Pi’s OpenAI-specific fields/roles/auth (#9508); Bedrock Converse usage accounting mismatch (#9489); Google `TOO_MANY_TOOL_CALLS` unhandled (#9502). |

---

*Generated from `github.com/badlogic/pi-mono` activity (2026-09-11 → 2026-09-12). All links point to live issues/PRs.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-09-12

---

## 1. Today's Highlights

The nightly release `v0.23.3-nightly.20260911.aaa6a32aae` lands with a breaking change removing the `channels` feature and a cleanup of DingTalk integration. A critical bug (#11665) in the OpenAI Responses pipeline threatens reasoning/tool-call adjacency — a core invariant for agentic workflows. Meanwhile, the PR backlog shows heavy investment in prompt caching, memory recall, ACP/daemon hardening, and telemetry privacy controls.

---

## 2. Releases

### `v0.23.3-nightly.20260911.aaa6a32aae` ([release notes](https://github.com/QwenLM/qwen-code/releases/tag/v0.23.3-nightly.20260911.aaa6a32aae))
| Change | Impact |
|--------|--------|
| `refactor(dingtalk)`: remove obsolete background response aggregation ([#11570](https://github.com/QwenLM/qwen-code/pull/11570)) | Internal cleanup; no user-facing impact |
| `feat(channels)!`: remove `channels` feature | **Breaking** — any workflows relying on channel-based routing will need migration |

> **Note**: This is a nightly build; expect further churn before stable.

---

## 3. Hot Issues

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| [#11665](https://github.com/QwenLM/qwen-code/issues/11665) **Responses cleanup breaks reasoning/tool-call adjacency** | Violates OpenAI Responses API invariant — `reasoning` + `function_call` must stay atomic. Affects any agent using function calling with reasoning models. | 4 comments, P2 priority, `status/ready-for-human` — actively triaged |
| [#11627](https://github.com/QwenLM/qwen-code/issues/11627) **DashScope image reattachment breaks prompt cache** | Reattached historical images shift cache breakpoint, preventing prefix reuse. Direct hit on latency/cost for multimodal workloads. | 2 comments, P2, `category/performance` — DashScope users impacted |
| [#7167](https://github.com/QwenLM/qwen-code/issues/7167) **Fleet Shepherd Dashboard** | Auto-maintained fleet health signal; shows bot fleet sync status, PR scan state. Useful for infra visibility. | 3 comments, long-running (since Jul), `status/need-information` |
| [#11685](https://github.com/QwenLM/qwen-code/issues/11685) **Deferred review findings from PR #11679 (Windows monitor debug dirs)** | Autofix bot deferred Windows-specific fixes outside PR scope. Signals cross-platform gaps in live monitor tooling. | 0 comments, freshly created — follow-up needed |

---

## 4. Key PR Progress

| PR | Area | Summary |
|----|------|---------|
| [#10410](https://github.com/QwenLM/qwen-code/pull/10410) `autofix/takeover` | Core / Caching | **Preserve prompt cache for deferred tools** — two-step `tool_search`/`tool_call` bridge avoids cache invalidation when schemas are revealed late. |
| [#10183](https://github.com/QwenLM/qwen-code/pull/10183) `autofix/takeover` | Memory | **Structured on-demand recall** — replaces flat memory prompt with hierarchical ref/title tree + query-focused subtree + dedicated recall tool. |
| [#11625](https://github.com/QwenLM/qwen-code/pull/11625) `autofix/takeover` | Build / pnpm | **Gate pnpm-lock on package-lock + declare hoisted imports** — enforces dual-lockfile consistency, fixes drift flagged in #10444. |
| [#11659](https://github.com/QwenLM/qwen-code/pull/11659) `review/self-reported` | CLI / OpenTUI | **Fix expanded confirmation dialog rendering** — resolves E2E flake where dialog body duplicated in pending card, breaking alt-screen viewport. |
| [#11653](https://github.com/QwenLM/qwen-code/pull/11653) `autofix/takeover` | ACP Bridge | **Reject unlimited cgroup sentinel for child heaps** — derives V8 old-space target from actual memory, not `2^64` sentinel. |
| [#11642](https://github.com/QwenLM/qwen-code/pull/11642) | VS Code | **Graceful ACP CLI shutdown** — closes stdin first (75s window), then SIGKILL. Runs SessionEnd hooks, MCP shutdown, process cleanup. |
| [#10136](https://github.com/QwenLM/qwen-code/pull/10136) `review/self-reported` | Review | **Fix-audit shape for critical-only re-reviews** — narrows scope when incremental anchor exists; predicts posture at plan time. |
| [#11521](https://github.com/QwenLM/qwen-code/pull/11521) | Core / Models | **External model reasoning profiles** — typed profile + effort subset + default per provider; unified across Chat/Responses/Anthropic/Gemini/CLI/WebShell. |
| [#11606](https://github.com/QwenLM/qwen-code/pull/11606) | DashScope | **Gate request metadata to qwen-family models** — avoids sending metadata to non-qwen endpoints; adds `enableRequestMetadata` override. |
| [#11670](https://github.com/QwenLM/qwen-code/pull/11670) | Telemetry | **Gate `request_text`/`response_text` on `logPrompts`** — omits conversation content from OTLP export when disabled; privacy/compliance win. |

---

## 5. Feature Request Trends

| Direction | Evidence |
|-----------|----------|
| **Prompt caching as first-class primitive** | #10410 (deferred tools), #11627 (DashScope cache breakage), #11521 (reasoning profiles affect cache keys) |
| **Structured, queryable memory** | #10183 (hierarchical recall), #11540 (base-tree reuse fencing for review sandboxes) |
| **Cross-platform daemon/ACP hardening** | #11653 (cgroup sentinel), #11642 (graceful shutdown), #11685 (Windows monitor dirs), #10906 (WebShell task output) |
| **Telemetry privacy & compliance** | #11670 (logPrompts gate), #11606 (metadata gating) |
| **Background agent observability** | #10954 (`GET /background-agents`), #7167 (Fleet Shepherd dashboard) |
| **Review workflow automation** | #10136 (fix-audit shape), #11540 (lease trust records), #11685 (deferred autofix findings) |

---

## 6. Developer Pain Points

| Pain Point | Frequency / Signal |
|------------|---------------------|
| **Cache invalidation surprises** | Multiple PRs/issues around prompt cache keys broken by tool schema changes, image reattachment, or model metadata |
| **Windows-specific daemon/PTY issues** | #11685 (monitor debug dirs), #11659 (OpenTUI viewport), #11001 (PTY cleanup wait) — recurring alt-screen / path / cgroup gaps |
| **ACP / VS Code integration brittleness** | #11642 (hard kill vs graceful), #11584 (session source switch), #10906 (task output visibility) — users want reliable embed |
| **Telemetry over-collection** | #11670 shows demand for granular opt-out; enterprises need `logPrompts=false` to actually strip content |
| **Review sandbox isolation leaks** | #11540 (base-tree reuse outside mount), #11685 (deferred findings) — trust records needed where bind-mounts can't reach |
| **Nightly breaking changes without migration path** | `feat(channels)!` removal in nightly; no deprecation window visible — erodes confidence for automation consumers |

---

*Generated from `QwenLM/qwen-code` GitHub data (2026-09-11 → 2026-09-12). Links point to live issues/PRs.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-09-12

## 1. Today's Highlights
- **Critical upstream change**: DeepSeek announced discontinuation of V4 Pro service effective 2026-09-14 12:00 Beijing Time; all Pro requests will route to V4.1 Flash at Flash pricing ([#6025](https://github.com/Hmbown/Codewhale/issues/6025)).  
- **Architecture sweep findings** surfaced a second turn loop in `acp_server.rs` and a 71-row `/settings` screen slated for decluttering ([#6088](https://github.com/Hmbown/Codewhale/issues/6088), [#6087](https://github.com/Hmbown/Codewhale/issues/6087)).  
- **v0.9.13 in final verification**; v0.9.14 milestone queued with catalog-owned model capabilities and session scratchpad work ([#6094](https://github.com/Hmbown/Codewhale/issues/6094)).

---

## 2. Releases
*No new releases published in the last 24 hours. v0.9.13 remains in final CI verification.*

---

## 3. Hot Issues (10 Noteworthy)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#6025](https://github.com/Hmbown/Codewhale/issues/6025) | **DeepSeek V4 Pro discontinuation (Sept 14)** | Immediate provider migration required; impacts all users on Pro tier. | 4 comments, urgent triage |
| [#5316](https://github.com/Hmbown/Codewhale/issues/5316) | **EPIC-005: CodeWhale TUI Crate Decomposition** | Umbrella tracking for core crate split (C03–C10); foundational for modularity. | 22 comments, active ownership |
| [#5620](https://github.com/Hmbown/Codewhale/issues/5620) | **Context pressure warning transient, no proactive reaction** | Silent context degradation defeats safety signal; medium severity. | 15 comments, runtime/agent |
| [#5929](https://github.com/Hmbown/Codewhale/issues/5929) | **Parallel-execution test flakes in `codewhale-tui` lib suite** | 6 tests fail under load only; CI reruns cost 25 min each. | 6 comments, reliability blocker |
| [#6102](https://github.com/Hmbown/Codewhale/issues/6102) | **Session resume fails with ENOENT resolving runtime store dir** | UX regression: interrupted sessions cannot be resumed. | 4 comments, session mgmt |
| [#6045](https://github.com/Hmbown/Codewhale/issues/6045) | **User-input modal clips options, hides typed input** | Composer dialog broken on real terminals (22-row cap, no scroll). | 4 comments, TUI/UX |
| [#5856](https://github.com/Hmbown/Codewhale/issues/5856) | **Computer-use plugin: live-install receipt + first look-act loop** | Built-in bundle acceptance path undefined; release blocker. | 3 comments, tools |
| [#6017](https://github.com/Hmbown/Codewhale/issues/6017) | **Durable memory across sessions?** | External interest (MemCode CEO) for pluggable memory layer. | 3 comments, extensibility |
| [#6098](https://github.com/Hmbown/Codewhale/issues/6098) | **Deny rules match heredoc body text, blocking valid writes** | Over-matching breaks `cat >> file <<'EOF'` workflows. | 1 comment, execpolicy bug |
| [#6097](https://github.com/Hmbown/Codewhale/issues/6097) | **Typed `permissions.toml` deny rules not enforced in sub-agent loops** | Security gap: child agents bypass explicit deny rules. | 1 comment, subagents/security |

---

## 4. Key PR Progress (10 Important)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#6096](https://github.com/Hmbown/Codewhale/pull/6096) | `feat(commands)` | Adopts portable command contract for `/export` (FEAT-025/EPIC-006). |
| [#6100](https://github.com/Hmbown/Codewhale/pull/6100) | `feat(web_search)` | Adds **Serply** search provider (`provider = "serply"`). |
| [#6056](https://github.com/Hmbown/Codewhale/pull/6056) | `feat(session)` | **Closed** — exports full-fidelity session archives as `tar.xz` (CLI + lib). |
| [#6054](https://github.com/Hmbown/Codewhale/pull/6054) | `feat(execpolicy)` | **Closed** — deny-matching expressiveness: cmd.exe slash flags, env-var refs, globs, regex. |
| [#6053](https://github.com/Hmbown/Codewhale/pull/6053) | `feat(tools)` | **Closed** — tool results can carry images via `metadata.images[]` for vision models. |
| [#6051](https://github.com/Hmbown/Codewhale/pull/6051) | `fix(zai)` | **Closed** — honors reasoning controls on forced-thinking GLM-5.3 / BigModel. |
| [#6052](https://github.com/Hmbown/Codewhale/pull/6052) | `fix(tui)` | **Closed** — 5 audit fixes: finance network bypass, tool gating, model-facing docs. |
| [#6057](https://github.com/Hmbown/Codewhale/pull/6057) | `chore(deps)` | **Closed** — security bumps: resolves 9 Dependabot alerts (npm dev/transitive). |
| [#6055](https://github.com/Hmbown/Codewhale/pull/6055) | `feat(subagent)` | Rate-limit-adaptive launch scheduling (dynamic semaphore capacity). |
| [#6081](https://github.com/Hmbown/Codewhale/pull/6081) | `fix(client)` | **Closed** — explains missing Gemini `thought_signature`; suggests built-in Google provider. |

*Dependabot PRs (#6103–#6107) bump `dirs`, `rustls`, `lru`, `encoding_rs`, `flate2` — routine maintenance.*

---

## 5. Feature Request Trends
1. **Pluggable memory backends** — Native-only `MemoryBackend` enum; requests for `Custom`/`MCP` variants ([#6050](https://github.com/Hmbown/Codewhale/issues/6050), [#6017](https://github.com/Hmbown/Codewhale/issues/6017)).  
2. **Session durability & portability** — Scratchpad, Agent Mail, workshop outputs unified addressing ([#6086](https://github.com/Hmbown/Codewhale/issues/6086)); full-fidelity export ([#6056](https://github.com/Hmbown/Codewhale/pull/6056)).  
3. **Multi-session / fleet UX** — Session peek, picker improvements, sub-agent launch scheduling ([#5271](https://github.com/Hmbown/Codewhale/issues/5271), [#6014](https://github.com/Hmbown/Codewhale/issues/6014), [#6055](https://github.com/Hmbown/Codewhale/pull/6055)).  
4. **Provider/model granularity** — Per-model `context_window` override ([#6108](https://github.com/Hmbown/Codewhale/issues/6108)), catalog-owned capabilities ([#6094](https://github.com/Hmbown/Codewhale/issues/6094)).  
5. **TUI decluttering & affordances** — `/settings` grouping, launch-screen MCP block copy/paste, modal fixes ([#6087](https://github.com/Hmbown/Codewhale/issues/6087), [#6085](https://github.com/Hmbown/Codewhale/issues/6085), [#6045](https://github.com/Hmbown/Codewhale/issues/6045)).  
6. **Headless/CLI parity** — `codewhale exec` hooks & typed permissions ([#6099](https://github.com/Hmbown/Codewhale/issues/6099)), `@file` fuzzy search exposed to local API ([#6095](https://github.com/Hmbown/Codewhale/issues/6095)).

---

## 6. Developer Pain Points
- **Context management opacity**: Pressure warnings fire but agent doesn’t react; no proactive compaction ([#5620](https://github.com/Hmbown/Codewhale/issues/5620)).  
- **Test flakiness under parallelism**: 6 lib tests fail only under load, wasting CI minutes ([#5929](https://github.com/Hmbown/Codewhale/issues/5929)).  
- **Session resume breakage**: ENOENT on runtime store dir prevents recovery ([#6102](https://github.com/Hmbown/Codewhale/issues/6102)).  
- **Composer modal usability**: Clipped options, no scroll, no back-navigation on standard terminals ([#6045](https://github.com/Hmbown/Codewhale/issues/6045)).  
- **Sub-agent permission bypass**: `permissions.toml` deny rules ignored in child tool loops ([#6097](https://github.com/Hmbown/Codewhale/issues/6097)).  
- **Heredoc false positives**: Deny matcher scans body text, blocks legitimate file writes ([#6098](https://github.com/Hmbown/Codewhale/issues/6098)).  
- **Config schema drift**: CLI `config doctor`/`get`/`set` disagree with TUI on key existence ([#6083](https://github.com/Hmbown/Codewhale/issues/6083)).  
- **Provider migration urgency**: V4 Pro sunset in 48 hours forces immediate model/config updates ([#6025](https://github.com/Hmbown/Codewhale/issues/6025)).

---

*Digest generated from GitHub data as of 2026-09-12 00:00 UTC. All links point to Hmbown/Codewhale repository.*

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*