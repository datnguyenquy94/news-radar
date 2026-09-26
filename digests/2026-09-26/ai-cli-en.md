# AI CLI Tools Community Digest 2026-09-26

> Generated: 2026-09-26 04:38 UTC | Tools covered: 10

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

# AI CLI Tools Ecosystem — Cross-Tool Comparison Report (2026-09-26)

---

## 1. Ecosystem Overview

The AI CLI landscape is bifurcating into **stabilization-focused** (Claude Code, Gemini CLI, Qwen Code) and **rapid-iteration** (OpenAI Codex, DeepSeek TUI, OpenCode) camps. Extensibility frameworks (Claude Code Mods, OpenCode Agent Manager, Pi Virtual Models, DeepSeek Cordis host) are converging as the primary architectural battleground. Windows/Linux desktop parity and MCP/plugin reliability have emerged as cross-cutting production blockers. Enterprise governance features (model pinning, audit trails, token budgets) are moving from nice-to-have to shipping criteria. The ecosystem is consolidating around **managed/daemon architectures** with WebSocket-native transports and durable session semantics.

---

## 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Updated (24h) | Release Status | Notable Signal |
|------|---------------------|-------------------|----------------|----------------|
| **Claude Code** | ~10 hot + cluster of 4 fresh MCP bugs | 5 (3 mod declarations pre-runtime) | v2.1.283 stable | Mods framework (218 💬, 126 👍) shipping "in weeks" |
| **OpenAI Codex** | 10+ (5 Windows console-window cluster) | 10 (2 critical Windows fixes) | 0.159.0-alpha.3, 0.158.0-alpha.15.1, 0.157.1 patch | #28969: 210 👍, 90 comments (disable 60s auto-resolve) |
| **Gemini CLI** | 10 (agent reliability cluster) | 10 (all stability/P1) | v0.63.0-nightly only | Subagent false-success (#22323), generalist hang (#21409) |
| **GitHub Copilot CLI** | 45 updated | 0 | v1.0.89-4 | System prompt 20.5k token overhead (#2627: 20 👍) |
| **Kimi Code CLI** | 0 | 0 | — | No activity |
| **OpenCode** | 10 (v2 migration + MCP storms) | 10 (major: compaction rewrite, agent manager) | None | Windows plugin leak ~38 GB fixed (#51425) |
| **Pi** | 10 (TUI stability + provider gaps) | 10 (virtual models, codemode+MCP) | None | Critical TUI crash fix (#10057), virtual models (#10035) |
| **Qwen Code** | 10 (Managed Agent + Remote-SSH P1) | 10 (Hosted Harness, workspace exec, tool-result contract) | v0.24.6 (CLI/Desktop/SDKs) | Remote-SSH EPIPE regression (#12416: 13 💬, P1) |
| **DeepSeek TUI** | 13 | 50 (stabilization sprint) | None (0.10.1 prepping) | Decision Gate (#6604), runtime crate split (#6586) |
| **Grok Build** | 0 | 0 | — | No activity |

---

## 3. Shared Feature Directions (Cross-Tool Requirements)

| Requirement | Tools Affected | Specific Needs |
|-------------|----------------|----------------|
| **Extensibility/Plugin Framework** | Claude Code (Mods), OpenCode (Agent Manager), Pi (Virtual Models), DeepSeek TUI (Cordis host), Qwen Code (Managed Agent) | Function hooks, declarative mods, plugin API, tool-result contracts, sandboxed execution |
| **MCP/Plugin Reliability** | Claude Code (4 fresh bugs), OpenCode (cold-start storms), Pi (OAuth discovery), Qwen Code (registration URL), Gemini CLI (tool-discovery timeout) | Warm-up pools, retry/backoff, bounded discovery, OAuth registration preservation, spawn race fixes |
| **Windows Daemon/Console Hygiene** | OpenAI Codex (5+ issues), Qwen Code (encoding, auto-update), OpenCode (staging leak), DeepSeek TUI (SIGPIPE) | Invisible daemon spawns, system code page detection, clean auto-restart, disk leak prevention |
| **Session Durability & Resume** | Claude Code (compaction bugs), OpenCode (path-coupled history), Pi (first-turn loss), Qwen Code (workspace bindings), DeepSeek TUI (receipts) | Portable project IDs, atomic state writes, duplicate response dedup, workspace-scoped execution dirs |
| **Enterprise Governance** | Claude Code (availableModelsMatch, gateway headers), Copilot CLI (system prompt control), OpenCode (usage/currency), Qwen Code (Hosted Harness CI gates) | Model pinning, audit headers, token budgets, cost visibility, compliance modes |
| **Headless/Automation Modes** | Claude Code (remote-control --headless), OpenAI Codex (reconnect retry), OpenCode (loopback links), Pi (headless auth), DeepSeek TUI (runtime crate) | Daemon modes, TTY-free operation, scheduled tasks, RPC/CLI parity, CI gates |

---

## 4. Differentiation Analysis

| Tool | Feature Focus | Target Users | Technical Approach |
|------|---------------|--------------|-------------------|
| **Claude Code** | Extensibility (Mods), enterprise observability, memory system | Enterprise teams, power users | Managed settings, gateway hint headers, mod declarations pre-runtime |
| **OpenAI Codex** | TUI polish, Windows parity, alpha velocity | Desktop developers, Windows users | Rust-based, rapid alpha cadence, TUI-first with reconnect resilience |
| **Gemini CLI** | Agent orchestration robustness, AST-aware tooling, security hardening | Google ecosystem users, security-conscious teams | Nightly-only, P1 stability sprints, zero-dependency sandboxing vision |
| **GitHub Copilot CLI** | Token economics, skill system, cross-surface sync | GitHub Enterprise, Copilot subscribers | System prompt optimization, routing tiers, plugin marketplace |
| **OpenCode** | Multi-agent platform, resource governance, desktop parity | Local-model users, multi-project teams | Agent Manager (10 lifecycle states), task graphs, v2 migration path |
| **Pi** | Virtual models, provider abstraction, codemode sandboxing | Multi-provider power users, routing enthusiasts | Virtual model routing, Jev codemode, MCP client/server in core |
| **Qwen Code** | Managed Agent architecture, Web Shell, durable sessions | Enterprise, remote/SSH workflows, multi-agent | Staged proposals (W0–O1–F), Hosted Harness, ACP bridge for legacy |
| **DeepSeek TUI** | Latency optimization (Decision Gate), TypeScript extensibility, trust hardening | Latency-sensitive users, plugin authors | Superfast classifier, Cordis TS host, runtime/Rust split, provenance |
| **Kimi / Grok** | — | — | No recent signal |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|------|-------|----------|
| **High Momentum / Rapid Iteration** | **OpenAI Codex**, **DeepSeek TUI**, **OpenCode**, **Pi** | Codex: 3 alpha + 1 patch in 24h; DeepSeek: 50 PRs/13 issues in sprint; OpenCode: major architectural PRs merging; Pi: virtual models + codemode landing |
| **Stabilization / Enterprise Readiness** | **Claude Code**, **Qwen Code**, **Gemini CLI** | Claude: Mods committed "in weeks" after 218 💬; Qwen: v0.24.6 multi-surface release + Managed Agent stages; Gemini: 10 P1/P2 stability PRs, nightly-only discipline |
| **Moderate / Feature-Complete** | **GitHub Copilot CLI** | Regular patches, 45 issues updated, but 0 PRs in 24h; system prompt debt (20.5k tokens) unresolved |
| **Dormant / No Signal** | **Kimi Code CLI**, **Grok Build** | Zero activity in 24h window |

**Maturity Indicators**: Qwen Code and Claude Code ship multi-surface (CLI/Desktop/SDK) releases with staged proposals. OpenCode and Pi invest heavily in desktop parity. Codex and DeepSeek TUI remain TUI-first with aggressive alpha velocity.

---

## 6. Trend Signals (Reference for Developers)

1. **Managed/Daemon Architectures Win** — Every active tool is building or hardening a persistent daemon with WebSocket transport, durable sessions, and headless operation. The "CLI as thin client" model is standardizing.

2. **Extensibility = Plugin + Protocol** — Raw plugin APIs are insufficient. Winning patterns: **Mods** (Claude), **Agent Manager + Task Graph** (OpenCode), **Virtual Models** (Pi), **Cordis Host** (DeepSeek), **Managed Tool Result Contract** (Qwen). Expect convergence on **declarative, sandboxed, versioned** extension manifests.

3. **Windows Is the Differentiator** — Codex's console-window epidemic, Qwen's encoding fix, OpenCode's 38 GB leak, DeepSeek's SIGPIPE fix — tools that solve Windows daemon hygiene gain adoption; those that don't lose enterprise.

4. **Token/Context Economics Are Product Features** — Copilot's 20.5k system prompt, Claude's auto-compact bugs, Gemini's firehose reads, Pi's thinking-block compaction blowup — **token budgeting, AST-aware reads, compaction correctness** are now competitive axes.

5. **MCP Is Production Infrastructure** — No longer experimental. Cold-start storms (OpenCode), OAuth discovery breaks (Qwen, Pi), tool-result corruption (Claude), timeout bounds (Gemini) — **MCP reliability == product reliability**.

6. **Governance Moves Downstack** — Model pinning (Claude `availableModelsMatch`), gateway observability headers (Claude `x-claude-code-prompt-id`), usage dashboards (OpenCode `/usage`), CI gates (Qwen Hosted Harness) — compliance features are shipping in core, not add-ons.

7. **First-Run Experience Is a Retention Lever** — DeepSeek's onboarding overhaul, Pi's stuck "Working..." state, Codex's desktop hang, Claude's CLAUDE.md ignores — tools investing in **zero-config success** (provider picker, key management, approval UX) reduce churn.

---

**Decision Guidance**: For **enterprise standardization**, prioritize Claude Code (governance), Qwen Code (managed agent maturity), or Copilot CLI (GitHub integration). For **local-model / multi-agent experimentation**, OpenCode and Pi lead architecture. For **Windows desktop developers**, Codex (once console fixes land) and Qwen Code (encoding fixed) are viable. For **latency-sensitive power users**, DeepSeek TUI's Decision Gate and Cordis host are unique. Monitor **Mods (Claude)** and **Managed Agent stages (Qwen)** — they set the extensibility trajectory for 2027.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-09-26 | Source: anthropics/skills*

---

## 1. Top Skills Ranking — Most-Discussed PRs

| # | Skill | Functionality | Discussion Focus | Status |
|---|-------|---------------|------------------|--------|
| **[#1298](https://github.com/anthropics/skills/pull/1298)** | **skill-creator (core fix)** | Fixes trigger evaluation: isolates per-worker probes, handles Windows `select()` failures, prevents unrelated tools from stopping scans | Foundational reliability for *all* skill triggering; Windows compatibility blocker | `OPEN` (active since Jun, updated Sep 16) |
| **[#1771](https://github.com/anthropics/skills/pull/1771)** | **proofcore-contract-auditor** | Web3 static analysis for Solidity/Rust; anchors cryptographic audit proofs on TON via ProofCore's zero-storage Merkle protocol | New niche: on-chain verification + AI auditing; zero-storage proof architecture | `OPEN` (fresh, Sep 15) |
| **[#1742](https://github.com/anthropics/skills/pull/1742)** | **mcp-builder (compat fix)** | Updates for `mcp>=2.0`: `streamable_http_client` rename, custom headers via `create_mcp_http_client` | Unblocks MCP 2.x adoption; critical for skill authors building MCP servers | `OPEN` (updated Sep 19) |
| **[#1703](https://github.com/anthropics/skills/pull/1703)** | **md2video-audio** | Compiles Markdown → MP4 with Marp slides + realistic TTS voiceovers; zero-cost (local tooling) | Content automation pipeline; "markdown to video" workflow demand | `OPEN` (updated Sep 15) |
| **[#822](https://github.com/anthropics/skills/pull/822)** | **awt (AI Watch Tester)** | Vision + browser control for zero-code E2E test generation; auto-healing selectors; CI integration | AI-driven QA; longest-running open PR (since Mar, updated Sep 19) | `OPEN` |
| **[#723](https://github.com/anthropics/skills/pull/723)** | **testing-patterns** | Comprehensive testing philosophy: Trophy model, AAA, React Testing Library, contract testing, property-based, mutation testing | Reference skill for *how to test*; high educational value | `OPEN` (updated Sep 21) |
| **[#1615](https://github.com/anthropics/skills/pull/1615)** | **scnet-hpc** | Profile-based SSH/Slurm workflows for SCNet HPC clusters: connection, partition, module, accelerator guidance | HPC/cluster automation; niche but deep operational scope | `OPEN` (updated Aug 24) |
| **[#525](https://github.com/anthropics/skills/pull/525)** | **pyxel** | Retro game dev in Python: headless input-driven runs, frame inspection, state checks | Creative coding / education; by Pyxel author (kitao) | `OPEN` (updated Sep 22) |

> **Note**: PR comment counts not exposed in API data; ranking inferred from update frequency, scope breadth, and cross-referenced issue activity.

---

## 2. Community Demand Trends — From Issues

| Trend | Evidence (Issues) | Signal Strength |
|-------|-------------------|-----------------|
| **Skill distribution & trust model** | [#492](https://github.com/anthropics/skills/issues/492) (43 comments, 👍2): Community skills under `anthropic/` namespace = trust boundary abuse; [#189](https://github.com/anthropics/skills/issues/189) (6 comments, 👍9): Duplicate skills from `document-skills` + `example-skills` | 🔥 **Highest** — Security + DX friction |
| **Org-level skill sharing** | [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 👍8): No native sharing; manual `.skill` file exchange via Slack/Teams | 🔥 **High** — Enterprise adoption blocker |
| **Trigger/eval reliability** | [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 👍7): `run_eval.py` → 0% trigger rate; [#1390](https://github.com/anthropics/skills/issues/1390) (4 comments): MCP builder eval scores 0/N (silent `TextContent` serialization failure) | 🔥 **High** — Core loop broken |
| **Context window management** | [#1487](https://github.com/anthropics/skills/issues/1487) (4 comments): `claude-api` skill injects ~156k tokens in one call | ⚠️ **Rising** — Token economics |
| **Meta-skills (skills that analyze skills)** | [#83](https://github.com/anthropics/skills/pull/83): `skill-quality-analyzer` + `skill-security-analyzer`; [#1329](https://github.com/anthropics/skills/issues/1329): `compact-memory` for symbolic agent state | 📈 **Emerging** — Recursive tooling |
| **Governance & safety patterns** | [#412](https://github.com/anthropics/skills/issues/412) (6 comments): Agent governance skill (policy enforcement, threat detection, audit trails) | 📈 **Emerging** — Enterprise/regulated |

---

## 3. High-Potential Pending Skills — Active PRs Likely to Land

| PR | Skill | Why It Has Momentum |
|----|-------|---------------------|
| **[#1742](https://github.com/anthropics/skills/pull/1742)** | mcp-builder MCP 2.x compat | Fixes reported breakage (#1668); active maintenance; unblocks ecosystem |
| **[#1298](https://github.com/anthropics/skills/pull/1298)** | skill-creator trigger fixes | Core infrastructure; Windows support; 3+ months iteration |
| **[#1792](https://github.com/anthropics/skills/pull/1792)** / **[#1790](https://github.com/anthropics/skills/pull/1790)** | docx: timeout errors + missing rels | Paired fixes from same author; concrete OOXML bugs; updated Sep 25 |
| **[#1771](https://github.com/anthropics/skills/pull/1771)** | proofcore-contract-auditor | Novel Web3 + ZK-proof angle; complete implementation; fresh submission |
| **[#1703](https://github.com/anthropics/skills/pull/1703)** | md2video-audio | Zero-cost video pipeline; strong demo value; content creator demand |
| **[#539](https://github.com/anthropics/skills/pull/539)** | skill-creator YAML validation | Prevents silent frontmatter corruption; small, high-leverage fix |

---

## 4. Skills Ecosystem Insight — One-Sentence Summary

> **The community's most concentrated demand is not for new domain skills, but for *trustworthy skill distribution, reliable triggering/evaluation, and organizational sharing primitives* — the meta-infrastructure that makes skills safe, discoverable, and operable at scale.**

---

# Claude Code Community Digest — 2026-09-26

---

## 1. Today's Highlights

- **v2.1.283 released** with gateway hint headers (`x-claude-code-prompt-id`) for LLM gateway observability and a new `availableModelsMatch` managed setting for exact model matching.
- **Mods extensibility framework** (#91870) dominates discussion with 218 comments and 126 👍 — the team confirmed shipping "in weeks" after incorporating community feedback.
- **MCP/plugin stability cluster**: multiple fresh reports of MCP tool results replaced by unreadable placeholders, Telegram channel pollers dying on session conflicts, and plugin spawn failures after marketplace refreshes.

---

## 2. Releases

### v2.1.283
| Change | Impact |
|--------|--------|
| `x-claude-code-prompt-id` header (opt-in via `CLAUDE_CODE_GATEWAY_HINT_HEADERS=1`) | Enables LLM gateways to group requests belonging to a single user prompt — critical for observability and cost attribution in enterprise proxies. |
| `availableModelsMatch` managed setting (`"exact"` mode) | Allows `availableModels` entries to permit *only* the listed model, blocking fallbacks — tighter control for compliance/regulatory environments. |

---

## 3. Hot Issues (Top 10 by Signal)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#91870](https://github.com/anthropics/claude-code/issues/91870) | **Mods — make Claude 10× more extensible** | Function hooks, plugin API, and declarative mods — the biggest architectural shift since launch. Team committed to shipping "in weeks." | 218 💬, 126 👍 |
| [#2544](https://github.com/anthropics/claude-code/issues/2544) | **CLAUDE.md mandatory rules consistently ignored** | 15-month-old bug: `CLAUDE.md` directives (e.g., "never commit secrets") are silently dropped across repos/platforms. Undermines trust in memory system. | 24 💬, 41 👍 |
| [#33323](https://github.com/anthropics/claude-code/issues/33323) | **Task queue for queuing multiple prompts** | Users want to enqueue 3–5 tasks sequentially/parallel without babysitting. Codex CLI already ships this. | 23 💬, 56 👍 |
| [#30447](https://github.com/anthropics/claude-code/issues/30447) | **`claude remote-control --headless` daemon mode** | Combines remote control + headless → always-on, TTY-free instances on servers. Unlocks new deployment class. | 8 💬, 39 👍 |
| [#97336](https://github.com/anthropics/claude-code/issues/97336) | **MCP tool results replaced by `<<ccr:...,html,NNNB>>` placeholder** | Model receives opaque token instead of tool output — hallucinates or reports tool broken. Affects two unrelated MCP servers. | 3 💬, fresh |
| [#92434](https://github.com/anthropics/claude-code/issues/92434) | **Auto-compact uses previous turn’s token count** | Re-injected instruction files overflow context window instead of triggering compaction — silent context loss. | 5 💬 |
| [#81571](https://github.com/anthropics/claude-code/issues/81571) | **Telegram plugin: 2nd session kills running poller** | Starting a second `--channels` session terminates the first poller permanently — channel goes dead until restart. | 3 💬 |
| [#78719](https://github.com/anthropics/claude-code/issues/78719) | **Plugin MCP fails to spawn after marketplace refresh** | `plugin:telegram` won’t start at session start post-refresh; `/mcp → Reconnect` fixes instantly. Race condition in spawn logic. | 3 💬 |
| [#97342](https://github.com/anthropics/claude-code/issues/97342) | **Post-compaction: superseded CLAUDE.md kept + duplicated** | Compaction preserves stale `CLAUDE.md` attachment *and* emits a fresh copy — double instructions, wasted tokens. | 1 💬, fresh |
| [#95670](https://github.com/anthropics/claude-code/issues/95670) | **Safeguard blocks firing on every request (identical reasoning_extraction)** | All requests blocked across models with same detail string; works fine on claude.ai — Claude Code specific. | 2 💬 |

---

## 4. Key PR Progress

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#97334](https://github.com/anthropics/claude-code/pull/97334) | `sec-default: conversation rows continue past user tier` | Open | Extends conversation retention beyond user-tier limits; gated on engine `session.append` event. Tests red until CLI releases the event. |
| [#97293](https://github.com/anthropics/claude-code/pull/97293) | `mods: process.run truncation flags + fs.list mtimeMs` | Open | Adds `isStdoutTruncated`/`isStderrTruncated` to `$.process.run` results and `mtimeMs` to `$.fs.list` entries. Declarations only — waits for CLI release. |
| [#97241](https://github.com/anthropics/claude-code/pull/97241) | `sec-default: system prompt sections continue past user tier` | Open | Mirrors #97334 for system prompt composition; requires engine `prompt.compose` event. |
| [#96953](https://github.com/anthropics/claude-code/pull/96953) | `diff: focus hook answers to either engine-stamped name` | **Closed** | Fixes plugin registration name mismatch: engine stamps `cc-plugin-diff`, mod expected `diff`. Now accepts either. |
| [#41611](https://github.com/anthropics/claude-code/pull/41611) | `add the missing source to claude code` | Open | Long-standing PR (Mar 2026) — purpose unclear from title; likely source-map or attribution related. |

> **Note**: Three PRs (#97334, #97293, #97241) are **mod declarations** intentionally submitted before the CLI carries the corresponding engine events — tests fail by design until the runtime lands.

---

## 5. Feature Request Trends (from Issues)

| Theme | Representative Issues | Signal |
|-------|----------------------|--------|
| **Task orchestration / queueing** | [#33323](https://github.com/anthropics/claude-code/issues/33323), [#30447](https://github.com/anthropics/claude-code/issues/30447) | 56 👍, 39 👍 |
| **Extensibility (hooks, plugins, mods)** | [#91870](https://github.com/anthropics/claude-code/issues/91870), [#97349](https://github.com/anthropics/claude-code/issues/97349) | 126 👍 |
| **Headless / daemon / CI-friendly modes** | [#30447](https://github.com/anthropics/claude-code/issues/30447), [#97352](https://github.com/anthropics/claude-code/issues/97352) (proxy support) | 39 👍 |
| **Memory / CLAUDE.md reliability** | [#2544](https://github.com/anthropics/claude-code/issues/2544), [#97342](https://github.com/anthropics/claude-code/issues/97342), [#97179](https://github.com/anthropics/claude-code/issues/97179) | 41 👍 |
| **Remote Control robustness** | [#96049](https://github.com/anthropics/claude-code/issues/96049), [#96600](https://github.com/anthropics/claude-code/issues/96600) | Cross-device, scheduled tasks |
| **MCP / plugin stability** | [#97336](https://github.com/anthropics/claude-code/issues/97336), [#81571](https://github.com/anthropics/claude-code/issues/81571), [#78719](https://github.com/anthropics/claude-code/issues/78719), [#97314](https://github.com/anthropics/claude-code/issues/97314) | Cluster of fresh bugs |

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **CLAUDE.md / memory system unreliable** | Rules ignored (#2544), stale instructions preserved post-compact (#97342), model mutates user procedures unprompted (#97179) | High (15+ months, multiple reports) |
| **MCP / plugin ecosystem fragility** | Tool results → placeholders (#97336), poller killed by 2nd session (#81571), spawn failure after refresh (#78719), machine-wide silent failure cache (#97314) | High (4 fresh bugs in 24h) |
| **Auto-compact / context window bugs** | Wrong turn used for token decision (#92434), duplicate instruction emission (#97342) | Medium |
| **Safeguard false positives** | Blocks all requests with identical `reasoning_extraction` (#95670), triggers on local device testing (#97351) | Medium |
| **Remote Control session/account binding broken** | Links lost on account switch (#96049), scheduled tasks ignore defaults (#96600) | Medium |
| **Shell snapshot captures wrong options** | `grep "on"` matches `monitor`/`onecmd` → spurious `set -o` in every Bash tool (#97353) | Fresh, niche but reproducible |
| **Proxy / network stack issues** | Absolute-URI requests sent to proxy instead of CONNECT (#97352) | Fresh, blocks containerized deployments |
| **OAuth token handling inconsistency** | `apiKeyHelper` output rejected (401) while `CLAUDE_CODE_OAUTH_TOKEN` works (#97350) | Fresh |

---

*Generated from `anthropics/claude-code` GitHub data (releases, issues, PRs updated 2026-09-25 → 2026-09-26).*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-09-26

---

## 1. Today's Highlights

The Codex team shipped a rapid succession of alpha releases (0.158.0-alpha.14 through 0.159.0-alpha.3) alongside a stable patch (0.157.1), signaling active iteration on the 0.158/0.159 series. Windows users are reporting a critical regression in 0.157.0 where the managed daemon spawns visible console windows for every hook, MCP server, and shell command — multiple high-engagement issues confirm this blocks daily workflows. Meanwhile, the Linux desktop app (26.924.20706) has a regression where local tasks hang on "Starting your task" while the CLI remains functional, suggesting an app-server integration issue.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| **0.159.0-alpha.1/2/3** | Alpha | Three consecutive alpha builds in 24h; no changelog published yet |
| **0.158.0-alpha.14/15/15.1** | Alpha | Incremental alpha progression; 15.1 appears to be a quick follow-up patch |
| **0.157.1** | Patch | Chores only; compare link returns 404 — minimal visible changes |

> **Takeaway**: The team is moving fast on the 0.158→0.159 alpha track. Windows and Linux desktop regressions in 0.157.0/26.924.x warrant caution for production users.

---

## 3. Hot Issues (Top 10 by Community Impact)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#28969](https://github.com/openai/codex/issues/28969) | **Add setting to disable 60s auto-resolve for questions** | Long-standing UX friction: developers want control over confirmation timeouts during long-running tasks | 👍 210 · 90 comments · Open since Jun |
| [#31836](https://github.com/openai/codex/issues/31836) | **Projects "Sort by Last Updated" broken in desktop app** | Core navigation feature broken on macOS; projects don't reorder | 👍 52 · 51 comments |
| [#37599](https://github.com/openai/codex/issues/37599) | **Windows: `codex-code-mode-host` opens visible Terminal window** | Visible window spam breaks focus; affects CLI 0.147+ | 👍 3 · 19 comments · **Closed** |
| [#48090](https://github.com/openai/codex/issues/48090) | **Windows managed daemon opens two visible console windows on start** | New regression in 0.157.0; blocks daemon adoption on Windows | 👍 2 · 12 comments |
| [#48043](https://github.com/openai/codex/issues/48043) | **CLI 0.157.0 fails to start on Windows (daemon privilege error)** | Hard blocker: 0.156.1 works, 0.157.0 doesn't | 👍 11 · 11 comments |
| [#48059](https://github.com/openai/codex/issues/48059) | **Terminal windows repeatedly pop up during normal use (Windows)** | Daemon spawns consoles for every hook/command — major UX regression | 👍 13 · 5 comments |
| [#44768](https://github.com/openai/codex/issues/44768) | **Windows: app-server daemon opens visible console for every hook/shell command** | Root cause of window spam; affects all daemon-attached sessions | 👍 3 · 7 comments |
| [#48212](https://github.com/openai/codex/issues/48212) | **Linux Desktop 26.924.20706: tasks stuck on "Starting your task"** | Desktop app regression; CLI works — points to app-server handshake issue | 👍 9 · 7 comments |
| [#48313](https://github.com/openai/codex/issues/48313) | **Windows 26.924.1866.0: blank white screen after update** | Catastrophic launch failure post-Store update | 👍 0 · 4 comments (new) |
| [#18822](https://github.com/openai/codex/issues/18822) | **VS Code: "Rate limits remaining" missing from status bar** | Observability gap for Business/Enterprise users tracking quota | 👍 7 · 10 comments · Open since Apr |

**Pattern**: Windows daemon console-window spam (#48090, #48059, #44768, #37599, #48023) dominates — 5+ issues describing the same root cause. Linux desktop task-start hang (#48212, #48354) is the second cluster.

---

## 4. Key PR Progress (Top 10 by Relevance)

| # | PR | Category | Summary |
|---|----|----------|---------|
| [#48272](https://github.com/openai/codex/pull/48272) | **Windows daemon stdio fix** | **Critical fix** | Clears inheritance flags on launcher stdio before spawning managed Windows daemons — directly addresses console-window spam |
| [#48238](https://github.com/openai/codex/pull/48238) | **Suppress console windows for local MCP servers** | **Critical fix** | Uses `CREATE_NO_WINDOW` when launching local stdio MCP servers (including npx/.cmd shims) |
| [#48352](https://github.com/openai/codex/pull/48352) | **TUI turn tips** | UX enhancement | Shows random tip beneath working status after 30s; completion tips after 3rd successful turn |
| [#48350](https://github.com/openai/codex/pull/48350) | **Reconnect command formatting** | UX polish | Prints `To reconnect, run:` on separate line with indented resume command |
| [#48318](https://github.com/openai/codex/pull/48318) | **TUI reconnect retry logic** | Reliability | Removes 5-attempt cap; retries with 8s delay until 120s shared deadline |
| [#48224](https://github.com/openai/codex/pull/48224) | **Preserve model/access-program pairs during compaction** | Correctness | Fixes compaction using previous model with current turn's access program |
| [#48222](https://github.com/openai/codex/pull/48222) | **Preserve late result metadata for truncated code-mode calls** | Reliability | Retains validated call bindings so result metadata attaches correctly |
| [#48211](https://github.com/openai/codex/pull/48211) | **Keep Codex visible during external editor handoff** | TUI UX | Preserves/repaints last frame when handing terminal to external editor |
| [#48206](https://github.com/openai/codex/pull/48206) | **Warnings viewer: keep-and-next action** | TUI UX | Press `k` to keep current warning while advancing |
| [#48198](https://github.com/openai/codex/pull/48198) | **Honor execution environment proxy requirements** | Networking | Carries `NetworkProxyConfig.enabled` into traffic restrictions |

**Signal**: Two PRs (#48272, #48238) directly target the Windows console-window epidemic. TUI quality-of-life improvements continue (#48352, #48350, #48318, #48206).

---

## 5. Feature Request Trends

From the issue corpus, developers are consistently asking for:

1. **Windows-first daemon hygiene** — Eliminate all visible console spawns (hooks, MCP, shell, code-mode-host); make daemon truly invisible
2. **Configurable confirmation timeouts** — `#28969` (210 👍) shows overwhelming demand for disabling the 60s auto-resolve
3. **Desktop app parity with CLI** — Linux/Windows desktop regressions where CLI works but app hangs (#48212, #48354, #48313)
4. **TUI keyboard symmetry** — `#17103` (Ctrl+V text paste), `#47376` (numeric menu selection) — power users want full keyboard control
5. **Observability in IDE extensions** — `#18822` (rate limits in status bar) — enterprise users need quota visibility
6. **Model/effort CLI flags** — `#48321` requests `--effort` flag for shared app-server sessions without config.toml edits

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Windows console window spam** | 5+ issues (#48090, #48059, #44768, #37599, #48023, #48325) all describing daemon/MCP/hook window pops | High — makes Windows CLI unusable for many; blocks daemon adoption |
| **0.157.0 Windows startup failure** | #48043 (11 👍) — hard blocker, 0.156.1 works | High — forces downgrade |
| **Desktop app "Starting your task" hang** | #48212, #48354 (Linux), #47054 (Windows second message) | High — desktop users stuck; CLI workaround exists but breaks workflow |
| **Auto-resolve 60s timeout** | #28969 (210 👍, 90 comments, 3+ months open) | Medium-High — long-running tasks interrupted; no config escape hatch |
| **TUI text selection latency** | #48233 — ~0.5s lag highlighting text in 0.157.0 | Medium — frequent copy-paste workflow degraded |
| **Blank white screen on Windows launch** | #48313 — catastrophic post-update failure | High (new) — zero-access state |

---

## Quick Links

- **Releases**: [0.159.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.159.0-alpha.3) · [0.158.0-alpha.15.1](https://github.com/openai/codex/releases/tag/rust-v0.158.0-alpha.15.1) · [0.157.1](https://github.com/openai/codex/releases/tag/rust-v0.157.1)
- **Windows console fix tracking**: [#48272](https://github.com/openai/codex/pull/48272) · [#48238](https://github.com/openai/codex/pull/48238)
- **Top community ask**: [#28969](https://github.com/openai/codex/issues/28969) — disable 60s auto-resolve

---

*Generated from github.com/openai/codex data as of 2026-09-26. All links point to live GitHub items.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-09-26

---

## 1. Today's Highlights

The project shipped **v0.63.0-nightly.20260926** with a fix for invalid `diff.external` overrides, while the core team advanced critical stability work: PRs addressing **shell injection cancellation propagation**, **atomic persistent-state writes**, **duplicate tool-response elimination on session resume**, and **MCP tool-discovery timeout bounds** all moved forward. Meanwhile, the issue backlog highlights persistent agent-reliability pain points—subagent turn-limit misreporting, generalist-agent hangs, and browser-agent Wayland failures—signaling that agent orchestration robustness remains the top engineering focus.

---

## 2. Releases

### v0.63.0-nightly.20260926.g2fe7c2d3f
- **fix(core)**: Removed invalid `diff.external` override ([#29467](https://github.com/google-gemini/gemini-cli/pull/29467))  
- **chore(release)**: Version bump to 0.63.0-nightly.20260923.gf50ba8608 ([#29471](https://github.com/google-gemini/gemini-cli/pull/29471))

> Nightly channel only; no stable release in the last 24 h.

---

## 3. Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent recovery after MAX_TURNS reported as GOAL success** | Masks real failures; subagents claim success despite hitting turn limits before doing any work. **P1, 13 comments, 2 👍** |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent hangs indefinitely** | Blocks all deferred work; workaround is disabling subagents entirely. **P1, 8 comments, 8 👍** |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | **Leverage model’s bash affinity via zero-dependency sandboxing** | Strategic epic to align CLI with Gemini 3’s native tool-use strengths. **P2, 9 comments, 1 👍** |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **Assess AST-aware file reads, search, and mapping** | Could drastically reduce token waste and turn count for code navigation. **P2, 7 comments, 1 👍** |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | **Gemini under-uses custom skills/sub-agents** | Discoverability gap; users must explicitly invoke capabilities the model should infer. **P2, 6 comments** |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | **Add deterministic redaction & reduce Auto Memory logging** | Security: secrets enter model context before redaction; service logs skill data. **P2, 5 comments** |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | **Browser Agent ignores `settings.json` overrides (maxTurns, etc.)** | Configuration contract broken for a key subagent. **P2, 4 comments** |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | **Browser subagent fails on Wayland** | Platform blocker for Linux/Wayland users. **P1, 4 comments, 1 👍** |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | **400 error with >128 tools** | Hard tool-count limit breaks large workspaces; needs smarter tool scoping. **P2, 3 comments** |
| [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) | **Agent should discourage destructive behavior (git reset --force, etc.)** | Safety: model occasionally chooses dangerous ops when safer alternatives exist. **P2, 3 comments, 1 👍** |

---

## 4. Key PR Progress (Top 10 by Engineering Impact)

| # | PR | Summary | Status |
|---|----|---------|--------|
| [#29459](https://github.com/google-gemini/gemini-cli/pull/29459) | **fix(cli): propagate cancellation into shell command injections** | `!{...}` injections now respect caller’s `AbortSignal`; prevents hung custom commands. | Open, P1 |
| [#29402](https://github.com/google-gemini/gemini-cli/pull/29402) | **fix(cli): make persistent state writes failure-safe** | Atomic temp-file + fsync + rename prevents truncated `state.json` on crash. | Open, P1 |
| [#29400](https://github.com/google-gemini/gemini-cli/pull/29400) | **Fix duplicate tool responses on session resume (`-r`)** | Deduplicates `functionResponse` persisted both in tool calls and durable user messages. | Open, P1 |
| [#29399](https://github.com/google-gemini/gemini-cli/pull/29399) | **fix(core): preserve unrelated comments during edits** | Strengthens replace-tool contract; adds behavioral eval for multi-part edits. | Open, P2 |
| [#29398](https://github.com/google-gemini/gemini-cli/pull/29398) | **fix(mcp): bound initial tool discovery to short timeout** | Avoids 10-min hang when MCP server returns mismatched JSON-RPC id. | Open, P1 |
| [#29397](https://github.com/google-gemini/gemini-cli/pull/29397) | **fix(agent): prevent session context poisoning & infinite loops on interrupted turns** | Stops synthetic “interrupted” assistant turns from corrupting history. | Open, P2 |
| [#29394](https://github.com/google-gemini/gemini-cli/pull/29394) | **fix(scheduler): enforce user hold directives by blocking mutating tools** | Scheduler-layer gate honors “wait / explain first” prompts. | Open, P1 |
| [#29448](https://github.com/google-gemini/gemini-cli/pull/29448) | **fix(auth): prevent infinite auth loop from file contention, headless keyring, supervisor drops** | Resolves Windows/WSL/headless auth loops; adds encrypted-file fallback. | Open, P1 |
| [#29499](https://github.com/google-gemini/gemini-cli/pull/29499) | **fix(core): serialize file tool ops & make writes atomic** | Eliminates lost-update races from parallel sub-agents on same file. | Open, P1 |
| [#29387](https://github.com/google-gemini/gemini-cli/pull/29387) | **fix(cli): don’t let one malformed extension fail all extension loading** | Moves validation inside try/catch so bad extensions are skipped with warning. | Open |

---

## 5. Feature Request Trends (Distilled from Issues)

1. **AST-aware code navigation** — Multiple issues (#22745, #22746, #19561) push for structural (AST) read/search to cut token bloat and misaligned reads.  
2. **Persistent, file-based task tracking** — #18836, #21000, #20195 argue `WriteToDo` in-context tracking causes context rot; want CRUD task files.  
3. **Subagent observability & sharing** — #22598, #21763 request subagent trajectories in `/chat share` and bug reports.  
4. **Model self-awareness** — #21432 wants accurate CLI flag/hotkey knowledge so the agent can guide users correctly.  
5. **Per-workspace policy isolation** — #18397 asks for workspace-scoped policies instead of global only.  
6. **Safer default behaviors** — #22672, #23571 seek guardrails against destructive git/DB ops and random temp-script sprawl.  
7. **Auto-Memory hardening** — #26522, #26523, #26516 target retry loops, invalid-patch quarantine, and extraction quality.  
8. **Browser-agent resilience** — #22232, #22267, #21983 cover session takeover, config respect, and Wayland support.  
9. **Terminal rendering performance** — #21924 targets flicker-free resize via `RenderStatic` migration.  
10. **Escape-sequence handling** — #22466 tracks `\n` escaping bugs reported by users.

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence |
|------------|----------|
| **Subagent reliability** | Hangs (#21409), false success (#22323), config ignored (#22267), Wayland failure (#21983), no visibility in bugs/shares (#21763, #22598). |
| **Session/resume corruption** | Duplicate tool responses (#29400), context poisoning from interrupted turns (#29397), auth loops (#29448), session-file collisions (#29463). |
| **Tool-call safety & control** | Action bias ignores “hold” directives (#29394), destructive git/DB ops (#22672), temp scripts everywhere (#23571), 128-tool hard limit (#24246). |
| **Auto-Memory opacity** | Secrets in context before redaction (#26525), low-signal retry storms (#26522), silent invalid-patch drops (#26523). |
| **Extension & config fragility** | One bad extension kills all loading (#29387), symlinked agents not recognized (#20079), `\n` escaping bugs (#22466). |
| **Platform gaps** | Wayland browser agent (#21983), Windows/WSL auth (#29448), headless keyring fallback. |
| **Token/turn efficiency** | Firehose file reads (+15k tokens/turn per #19561), no AST surgical reads, model under-uses skills (#21968). |
| **Terminal UX** | Resize flicker (#21924), interactive prompts stall agent (#22465). |

---

*Generated from `google-gemini/gemini-cli` GitHub data (issues & PRs updated 2026-09-26). All links point to live GitHub items.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-09-26

## Today's Highlights
Version **1.0.89-4** shipped with an auto-suggested routing tier and a quick feedback prompt after model switching. The issue backlog remains active with 45 items updated in the last 24 hours; top community concerns center on skill invocation regressions, authentication token refresh failures, and system-prompt token overhead. No pull requests were updated in the past day.

---

## Releases
### v1.0.89-4
- **Added**: Auto-suggests a routing tier with one-click/shortcut switching; quick feedback prompt appears after manually selecting a model.
- **Improved**: Direct plugin installs can now be toggled on/off; previously disabled plugins stop loading immediately.

---

## Hot Issues (Top 10 by Community Impact)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#4438](https://github.com/github/copilot-cli/issues/4438) | `disable-model-invocation: true` makes skills unreachable even via explicit slash invocation | Breaks the documented “manual-only” skill pattern; blocks workflows that rely on project-scoped skills. | 8 comments, 11 👍 — high engagement for a regression. |
| [#4929](https://github.com/github/copilot-cli/issues/4929) | Process-local auth token stops refreshing; all prompts fail until restart | Long-running sessions (common in CI/daemon modes) become permanently broken; `/login` doesn’t recover. | 6 comments, fresh (opened 2026-09-22). |
| [#2627](https://github.com/github/copilot-cli/issues/2627) | Configurable system prompt to reduce ~20.5k fixed token overhead | Directly impacts context-window economics; 10% of 200k window consumed before user input. | 5 comments, **20 👍** — strongest upvote signal in the set. |
| [#232](https://github.com/github/copilot-cli/issues/232) | Add `--system-prompt` CLI parameter for global instructions | Complements #2627; enables org-level guardrails without repo-level files. | 6 comments, 11 👍 — long-standing request (open since Oct 2025). |
| [#4775](https://github.com/github/copilot-cli/issues/4775) | Mission Control dashboard links 404 (`/copilot/tasks/` vs `/agents/tasks/`) | Breaks cross-product UX; users can’t jump from dashboard to live CLI sessions. | 6 comments, 2 👍. |
| [#4680](https://github.com/github/copilot-cli/issues/4680) | CLI sends wrong model ID (`gpt-5.4-nano`) to custom OpenAI-compatible endpoints | Kills sessions for non-OpenAI models; hard blocker for BYOM (Bring Your Own Model) users. | 4 comments, recent (opened 2026-09-01). |
| [#4960](https://github.com/github/copilot-cli/issues/4960) | Enterprise custom model listed in `/model` but unselectable | Enterprise adopters see the model but can’t use it; silent failure mode. | 2 comments, opened 2026-09-24. |
| [#4710](https://github.com/github/copilot-cli/issues/4710) | Runaway `copilot-file-search` thread pins CPU & writes unbounded logs while idle | Resource leak in background; affects laptop battery & disk on long sessions. | 2 comments, reproducible on Ubuntu 24.04. |
| [#4907](https://github.com/github/copilot-cli/issues/4907) | Periodic MCP reconnect notifications flood conversation history | Pollutes context with noise; degrades signal-to-noise in long sessions. | 2 comments, fresh (2026-09-18). |
| [#4969](https://github.com/github/copilot-cli/issues/4969) | Plugin marketplace add fails entirely if any plugin description >1024 chars | All-or-nothing validation blocks entire marketplaces; no partial load or truncation. | 1 comment, opened 2026-09-25 — sharp regression. |

---

## Key PR Progress
**No pull requests were updated in the last 24 hours.**  
*Watch the [PR dashboard](https://github.com/github/copilot-cli/pulls) for incoming fixes targeting the issues above.*

---

## Feature Request Trends
1. **System-prompt control** — Two high-signal issues (#2627, #232) demand configurable or CLI-passed system prompts to reclaim token budget and enable org-wide policies.
2. **Skill invocation granularity** — #4438 and #4637 reveal a mismatch between “disable model invocation” and “allow explicit slash invocation”; users want a clean manual-only mode.
3. **Cross-app session sync** — #4082 (9 👍) asks for CLI ↔ Desktop App session continuity, signaling multi-surface workflows.
4. **Model-selection UX** — #3138 (preserve draft while switching models) and #4960 (enterprise model selectable) show friction in the model picker.
5. **MCP reliability** — #4089 (Atlassian MCP tools missing) and #4907 (reconnect spam) indicate growing MCP adoption with rough edges.

---

## Developer Pain Points
| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Token overhead anxiety** | 20k+ fixed system tokens; no opt-out | 20 👍 on #2627 |
| **Session instability** | Auth token expiry (#4929), runaway threads (#4710), compaction loss (#1571) | 3 distinct high-impact bugs |
| **Skill system regressions** | `disable-model-invocation` breaks explicit calls (#4438), duplicate lookups (#4637) | 2 active bugs, 8+ comments each |
| **Custom endpoint breakage** | Wrong model ID sent (#4680), enterprise models unselectable (#4960) | Blocks BYOM/Enterprise adoption |
| **Noise in conversation history** | MCP reconnect spam (#4907), dictation deletes text (#4787) | Degrades daily usability |
| **Windows rendering** | Scrollbar misalignment (#3501, closed but recurring theme) | Platform-specific friction |

---

*Generated from github/copilot-cli data as of 2026-09-26. Links point to live GitHub items for deeper context.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-09-26

---

## 1. Today's Highlights

OpenCode's v2.x transition continues to surface migration friction: legacy 1.x session data blocks initialization (#51441), documented skills frontmatter remains unimplemented (#51427), and MCP cold-start storms mark healthy servers as failed (#48743). On the fix side, a major session compaction rewrite landed in PR #51447, the agent-manager/task-graph pipeline merged (#51426), and Windows plugin staging leaks (~38 GB) were patched (#51425). Desktop UX improvements include zoom persistence (#50169), project-aware window titles (#51442), and loopback connection links (#51431).

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues (Top 10)

| Issue | Status | Why It Matters | Community Signal |
|-------|--------|----------------|------------------|
| [#9281](https://github.com/anomalyco/opencode/issues/9281) Unified usage tracking via `/usage` | **Closed** | OAuth users had no visibility into plan/rate-limit consumption across providers. | 34 👍, 12 comments — high demand for billing transparency. |
| [#27110](https://github.com/anomalyco/opencode/issues/27110) Limit max parallel subagents | **Open** | Local models hit context/memory walls when too many subagents run concurrently. | 36 👍, 6 comments — critical for on-device LLM users. |
| [#29703](https://github.com/anomalyco/opencode/issues/29703) Changing project folder loses session history | **Closed** | Renaming/moving a project directory orphaned all chat history tied to the old path. | 25 👍, 10 comments — data-loss fear for reorganizing workspaces. |
| [#48743](https://github.com/anomalyco/opencode/issues/48743) MCP warm-up / pre-spawn mechanism | **Open** | 14+ local stdio MCP servers all marked `failed` at session start due to concurrent cold-starts; manual restart required. | 6 comments, 2 👍 — blocks teams relying on many local MCPs. |
| [#50672](https://github.com/anomalyco/opencode/issues/50672) Hardcoded port 49374 blocks second client on shared loopback | **Open** | Multi-user/WSL setups can't run two OpenCode instances; port is machine-global but registration is per-user. | 4 comments — architecture limitation for shared environments. |
| [#51425](https://github.com/anomalyco/opencode/issues/51425) Windows plugin staging dirs leak ~38 GB | **Closed** | Unbounded `packages/<spec>.staging-*` directories accumulated gigabytes per plugin install. | 2 comments — severe disk-space regression on Windows. |
| [#51441](https://github.com/anomalyco/opencode/issues/51441) InitializationBlocked by legacy 1.x session data | **Open** | Opening a 1.x project folder in 2.x triggers `core/instructions` unavailable error; no migration path. | 2 comments — blocks v1→v2 upgrades. |
| [#51437](https://github.com/anomalyco/opencode/issues/51437) Failed MCP servers never retried, silently disappear | **Closed** | Batch MCP failures at startup are never retried; servers vanish from tool list despite recovering seconds later. | 2 comments — reliability gap for MCP-heavy workflows. |
| [#51427](https://github.com/anomalyco/opencode/issues/51427) Documented `slash` frontmatter not implemented in v2.0.18 | **Closed** | Skills docs promise a `slash` field for `/skill-id` invocation; parser ignores it entirely. | 2 comments — docs/code drift erodes trust in skill system. |
| [#51424](https://github.com/anomalyco/opencode/issues/51424) Go subscription shows "Insufficient funds" with 0% usage | **Open** | Active Go subscribers hit 500/400 errors on Kimi/DeepSeek models despite dashboard showing 0% consumption. | 1 comment — billing/subscription integration bug affecting paying users. |

---

## 4. Key PR Progress (Top 10)

| PR | Status | Summary |
|----|--------|---------|
| [#51447](https://github.com/anomalyco/opencode/pull/51447) `refactor(core): rewrite session compaction` | **Open** | Consolidates automatic, overflow, and manual compaction into a single `compact(trigger)` service; moves native compaction behind `LLMClient.compact`, removes `NativeCompactionPlugin`. |
| [#51426](https://github.com/anomalyco/opencode/pull/51426) `feat(core): agent manager and task graph pipeline` | **Closed** | Phases 1–4 of agent-first platform: `AgentManager` with 10 lifecycle states, gated budgets, duplicate create/clone semantics; multi-agent run orchestration. |
| [#51407](https://github.com/anomalyco/opencode/pull/51407) `fix(codemode): bound replacement strings, recursion depth, thenable chains` | **Open** | Six exact/local fixes from recursion/allocation audit; eliminates unbounded allocations and host hangs in codemode. |
| [#51422](https://github.com/anomalyco/opencode/pull/51422) `fix(core): resolve configured instructions` | **Open** | Restores the `instructions` config resolver dropped in v2; closes #51341, #51262. |
| [#50169](https://github.com/anomalyco/opencode/pull/50169) `fix(desktop): persist zoom across app restarts` | **Open** | Saves last zoom factor (Ctrl+/Ctrl-) to config; fixes #50168 and #49096. |
| [#51431](https://github.com/anomalyco/opencode/pull/51431) `fix(desktop): preserve selected directories and propose local connection links` | **Open** | Implements connection-link design (#51430), fixes explicit directory selection (#50821); improves project-switching UX. |
| [#51435](https://github.com/anomalyco/opencode/pull/51435) `feat(tui): add rawPlaceholders opt-in for verbatim prompt placeholders` | **Closed** | Allows TUI plugins overriding `session_prompt` to pass raw placeholder text without `Ask anything… "<suggestion>"` wrapping. |
| [#51429](https://github.com/anomalyco/opencode/pull/51429) `feat: usage display currency` | **Closed** | Adds `display.currency` config (default USD); lets users view costs in local currency. Continues #41208. |
| [#51448](https://github.com/anomalyco/opencode/pull/51448) `fix(tui): skip model selection after MCP connection` | **Open** | Closes integration dialog after MCP connect instead of opening model picker; provider/service connections still hand off to model selection. |
| [#51168](https://github.com/anomalyco/opencode/pull/51168) `fix(opencode): include attached image path in model context` | **Open** | Ensures `FilePart` with `data:` URLs carry path annotations so downstream providers resolve images correctly; fixes #41454. |

---

## 5. Feature Request Trends

1. **Resource governance for local models** — Parallel subagent limits (#27110), MCP warm-up pools (#48743), and background-shell polling tuning (#51436) all point to a need for configurable concurrency budgets.
2. **Portable project identity** — Folder-path coupling causes history loss (#29703) and stale workspace ghosts (#36234); users want logical project IDs decoupled from filesystem paths.
3. **Subscription/usage transparency** — Unified `/usage` (#9281), currency display (#51429), and Go-tier billing bugs (#51424, #39153) show demand for first-class cost observability.
4. **MCP reliability** — Cold-storm failures (#48743), silent drop without retry (#51437), and connection-link UX (#51430) indicate MCP is now core infrastructure needing production-grade ops.
5. **Desktop parity & polish** — Zoom persistence (#50168), window titles (#51442), About menu (#51433), LaTeX rendering (#51432), and loopback links (#51431) collectively signal Desktop is a primary target, not an afterthought.

---

## 6. Developer Pain Points

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **v1→v2 migration breaks silently** | Legacy session data blocks init (#51441), skills frontmatter ignored (#51427), instructions resolver missing (#51422) | 3+ issues in 24h |
| **MCP cold-start storms** | 14+ servers all marked failed at once (#48743), no retry/backoff (#51437) | 2 high-impact issues |
| **Disk leaks on Windows** | Plugin staging dirs accumulate ~38 GB (#51425) | 1 critical, Windows-specific |
| **Shared-loopback port collision** | Hardcoded 49374 blocks multi-user/WSL (#50672) | 1 architectural blocker |
| **Subscription/billing opacity** | Go tier shows "insufficient funds" at 0% usage (#51424), 500 errors (#39153), no unified usage view (#9281) | 3 billing-related issues |
| **Tool-call loops & missing args** | Repeated exec calls (#28596), intermittent missing `mode` in plugin tools (#51446) | 2 agent reliability bugs |
| **Session/API schema drift** | `GET /api/session/:id/message` 400 on `limit` param (#51445), export bundles stale logs (#51444) | 2 API/debugging regressions |

---

*Generated from anomalyco/opencode GitHub data (issues & PRs updated 2026-09-26). Links point directly to GitHub for full context.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-09-26

## Today's Highlights
The Pi team closed a critical TUI stability issue where lost stdout connections were misreported as crashes (`#10056`/`#10057`), while advancing two major feature fronts: virtual models support (`#10035`) and codemode+MCP integration (`#10040`). Provider-side fixes dominate the changelog—OpenRouter pricing accuracy, Kimi OAuth, Anthropic strict tools, and OpenAI SDK upgrades—all shipping in rapid succession.

## Hot Issues

| Issue | Status | Why It Matters |
|-------|--------|----------------|
| [#10031](https://github.com/earendil-works/pi/issues/10031) Pi stuck in "Working..." after ESC | **Closed** (15 💬, 2 👍) | High-frequency regression since ~v0.84.0; forced `Ctrl+C` + `pi -c` recovery. Top community pain point this cycle. |
| [#7885](https://github.com/earendil-works/pi/issues/7885) npm search not indexing new pi-packages | **Closed** (15 💬) | Gallery stale since Aug 4; blocks package discoverability for all authors. |
| [#8913](https://github.com/earendil-works/pi/issues/8913) Fullscreen mouse tracking unconditionally enabled | **Open** (6 💬) | No opt-out for `?1003` any-event tracking; breaks terminal apps that rely on mouse. Renderer already supports `mouse` option—just unexposed. |
| [#9980](https://github.com/earendil-works/pi/issues/9980) OpenRouter cost off by 2–3× for open models | **Open** (5 💬) | Uses cheapest provider price instead of actual routed provider; misleads budget tracking for GLM, Qwen, etc. |
| [#10033](https://github.com/earendil-works/pi/issues/10033) Compaction prompt includes full thinking, blows context | **Open** (5 💬) | Auto-compaction fails on reasoning models (DeepSeek V4.1); thinking blocks duplicated into summary prompt. |
| [#9974](https://github.com/earendil-works/pi/issues/9974) Responses API tool calls duplicated/corrupted from llama.cpp | **Closed** (5 💬) | SSE stream parsing bug; caused duplicate `function_call` execution and corrupted arguments. |
| [#9579](https://github.com/earendil-works/pi/issues/9579) Fixed 16 MiB image budget exceeds small provider limits | **Closed** (5 💬) | Compaction retry still oversized for 6 MiB providers; budget derived from Anthropic 32 MiB limit. |
| [#9918](https://github.com/earendil-works/pi/issues/9918) Codex replays empty signed final answers | **Closed** (5 💬) | Empty `final_answer` items persisted and replayed, stalling turns. Mirrors upstream oh-my-pi#11904. |
| [#9954](https://github.com/earendil-works/pi/issues/9954) Kimi provider fails with ENOENT on Anthropic credentials | **Open** (2 💬, 1 👍) | Ambient Anthropic SDK credential probing breaks Kimi OAuth flow on machines with Claude Code installed. |
| [#9953](https://github.com/earendil-works/pi/issues/9953) `makeStrictJsonSchema` keeps `minimum`/`maxLength`, Anthropic rejects 400 | **Open** (2 💬, 1 👍) | Strict tool schema validation keywords not stripped; every constrained tool call fails on Anthropic. |

## Key PR Progress

| PR | Status | Summary |
|----|--------|---------|
| [#10057](https://github.com/earendil-works/pi/pull/10057) fix(tui): do not exit process when stdout goes away | **Closed** | Converts `EPIPE`/`ECONNRESET` on raw stdout from fatal `process.exit(1)` to graceful shutdown; fixes false crash reports. |
| [#10051](https://github.com/earendil-works/pi/pull/10051) feat(client): actionable MCP OAuth dynamic client registration errors | **Closed** | Adds detection + user-guided remediation for `incompatible auth server` errors; includes wrapper + tests. |
| [#10050](https://github.com/earendil-works/pi/pull/10050) fix(coding-agent): keep extension console output off interactive TUI | **Open** | Redirects extension `console.*`/`process.stdout` writes through TUI renderer; prevents layout corruption. |
| [#10040](https://github.com/earendil-works/pi/pull/10040) feat(coding-agent): Codemode and MCP | **Open** | Large feature drop: codemode for model sandboxing (Jev) + MCP client/server support. |
| [#10044](https://github.com/earendil-works/pi/pull/10044) fix(ai): upgrade OpenAI SDK to 7.19.0 | **Closed** | Adds `fast` service tier types for GPT-6 pricing; drops local `prompt_cache_options` type (now in SDK). |
| [#10039](https://github.com/earendil-works/pi/pull/10039) fix(coding-agent): honor truecolor in custom themes | **Closed** | Resolves color mode from env/terminal before theme construction; avoids global capability mutation. |
| [#10037](https://github.com/earendil-works/pi/pull/10037) Perf/collapse historical tool output | **Closed** | Collapses older tool-call/result rows in transcript to reduce render overhead on long sessions. |
| [#10035](https://github.com/earendil-works/pi/pull/10035) Virtual models | **Open** | Experimental virtual model abstraction—enables routing, fallbacks, and composite model behaviors. |
| [#8262](https://github.com/earendil-works/pi/pull/8262) feat(coding-agent): dispatch hooks on every turn-start path | **Open** | Ensures `input`/`before_agent_start` hooks fire for `sendCustomMessage(triggerTurn: true)` path. |
| [#1481](https://github.com/earendil-works/pi/pull/1481) fix(tui): chain slash arg autocomplete after Tab | **Closed** | After `/model<Tab>` → `/model `, immediately triggers argument completions if command defines them. |

## Feature Request Trends
1. **TUI controllability** — Mouse tracking opt-out (`#8913`), configurable wheel scroll (`#9758`), truecolor theme support (`#10039`), tool-row visibility toggle (`#10011`).
2. **Provider parity & pricing** — OpenRouter cost accuracy (`#9980`), Kimi/CommandCode/OpenRusRouter support (`#9954`, `#9553`, `#10060`), Anthropic `thinking.display` control (`#9905`).
3. **Headless/RPC authentication** — CLI/OAuth flows for non-TUI clients (`#10059`), agent-dir auth without interactive login.
4. **Virtual models & routing** — First-class virtual model abstraction (`#10035`) for fallbacks, load-balancing, and composite behaviors.
5. **Codemode/MCP ecosystem** — Sandbox execution (`#10040`) and MCP client/server integration as core primitives.

## Developer Pain Points
- **TUI fragility**: Stuck "Working..." state (`#10031`), stdout loss masquerading as crash (`#10056`), extension console output corrupting layout (`#10002`), special-key failures over SSH/Alacritty (`#10042`).
- **Provider integration gaps**: OAuth credential conflicts (`#9954`), strict-tool schema rejections (`#9953`), cost miscalculation (`#9980`), model catalog staleness (`#7885`).
- **Session/compaction reliability**: First-turn failure loses entire session (`#10000`), compaction prompt blows context with thinking blocks (`#10033`), turn-end boundary errors during stream teardown (`#10048`).
- **Tool-call handling**: Duplicated/corrupted calls from llama.cpp (`#9974`), empty final-answer replay (`#9918`), samplingParams dropped on tool turns (`#9506`).
- **Dependency drift**: TypeScript 7 migration blocked by `@typescript/typescript6` deprecation (`#9965`), ESM require errors on fresh Windows installs (`#10058`).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-09-26

---

## 1. Today's Highlights

Qwen Code shipped **v0.24.6** across CLI, Desktop, and TypeScript/Java SDKs, delivering a managed-runtime fix for session creation diagnostics and the first private **Hosted Harness** client (no-tool text turns). The **Managed Agent** initiative advanced with three new staged proposals (W0c execution directory, O1 tool-result references, F hosted-process CI gates) and supporting PRs. A long-standing Windows encoding bug (CP-866 mis-detected as windows-1252) finally has a fix merged that consults the system code page before chardet.

---

## 2. Releases

| Release | Key Changes |
|---------|-------------|
| **v0.24.6** (CLI, Desktop, TS/Java SDKs) | • `fix(serve)`: preserve session creation failure diagnostics (#12331)<br>• `feat(sdk-java)`: add Hosted Harness private client (#12654)<br>• Bundled CLI version aligned across SDKs |
| **v0.24.5-nightly.20260925** | • Same Hosted Harness client (#12654)<br>• `test(java)`: pin runtime-broker guard |
| **Desktop v0.24.6** | • Mirrors CLI v0.24.6 fixes<br>• Web Shell sidebar update/restart flow prepared (see PR #12734) |

---

## 3. Hot Issues (10 Noteworthy)

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| **#12380** *Managed Agent dual-path architecture* | Defines the multi-stage roadmap (W0–O1–F) to decouple model inference from tool execution, enable durable sessions, workspace bindings, and WebSocket-native transport. Foundation for all subsequent managed-agent work. | 25 comments, cross-cutting labels (session-management, multi-agent, daemon, web-shell) |
| **#12416** *Remote-SSH `write EPIPE` / `BridgeChannelClosedError`* | Blocks Remote-SSH users on companion 0.24.2; bundled CLI works standalone. High-impact regression for VS Code Remote workflows. | 13 comments, P1 priority |
| **#12723** *O1 tool-result reference contract & local capture adapter* | Makes tool output durable, addressable by reference, separate from UI preview. Critical for replay, audit, and multi-agent handoff. | 4 comments, linked to design doc at `6891216` |
| **#12724** *W0c: run Session tools in its Workspace binding's directory* | Moves from single server-chosen CWD to per-session workspace directory. Enables correct relative paths in multi-project workspaces. | 3 comments, depends on #12681 (W0a binding) |
| **#12728** *Stage F Hosted no-tool real-process verification & CI gate* | Turns ad-hoc verification into repeatable CI coverage for the private Hosted Harness. Prevents regressions before tool execution lands. | 3 comments, CI-focused |
| **#12727** *`/update` command quits console but version persists on Windows* | UX regression: auto-restart after update doesn’t actually apply the new binary on Windows PowerShell. | 4 comments, Windows-specific pain point |
| **#8278** *Encoding detection: chardet before system code page (CP-866 → windows-1252)* | **Fixed by #12731**. Long-standing bug corrupting non-UTF-8 console output on Windows (Russian, Chinese, Japanese, Korean code pages). | 3 comments, 56-day-old issue finally resolved |
| **#12735** *Stale worktree cleanup deletes user-named worktrees with untracked files* | Aggressive cleanup logic (`agent-<7hex>` pattern) can destroy user worktrees containing uncommitted work. Data-loss risk. | 1 comment, newly filed |
| **#12669** *Web Shell: delete no-workspace session by leaving first* | UX polish: enables deletion of standalone sessions from sidebar instead of disabled action. Follow-up to #12636. | 4 comments, web-shell scope |
| **#12165** *MCP OAuth drops `registrationUrl` from WWW-Authenticate, breaking Atlassian remote MCP* | **Fixed by #12205**. OAuth discovery flow lost dynamic registration endpoint, blocking Atlassian MCP integration. | 4 comments, closed via PR |

---

## 4. Key PR Progress (10 Important)

| PR | Type | Summary |
|----|------|---------|
| **#12731** | **Fix** | `fix(core)`: consult system code page before chardet for non-UTF-8 output. Resolves #8278 (CP-866, CP-936, CP-932, CP-949). |
| **#12713** | **Feature** | `feat(serve)`: enable private Hosted Harness no-tool text turns. Java client can create/load managed sessions, submit prompts, stream text/terminal events via SSE. |
| **#12732** | **Feature** | `feat(cli)`: run Managed Runtime tools in Session's Workspace directory (W0c-1). Implements `managed-context/1` protocol from #12700. |
| **#12729** | **Feature** | `feat(managed-agent)`: define `managed-tool-result/1` contract (O1a). Immutable segmented output, reference-addressable, separate from UI preview. |
| **#12733** | **Test** | `test(managed-agent)`: add Hosted no-tool process gates. Isolated home, deterministic loopback model, repo-backed Session Store fixture. Joins no-AK integration gate. |
| **#12698** | **Feature** | `feat(acp-bridge)`: route sessions across legacy and managed engines. Opt-in Legacy/Managed channels, server-owned engine selection, shared admission, fixed live-session ownership. |
| **#12205** | **Fix** | `fix(mcp)`: preserve registration URL from `WWW-Authenticate` header discovery. Fixes Atlassian remote MCP OAuth (#12165). |
| **#12734** | **Feature** | `feat(web-shell)`: prepare updates and restart from sidebar. Background download, Update button, graceful daemon restart, UI reload. |
| **#12718** | **Fix** | `fix(core)`: tolerate win32 directory-sync refusal in managed session resources. Fixes Windows 145 CI failures + macOS 2 fixture bugs (case-insensitive/non-UTF-8 fs). |
| **#12561** | **Feature** | `feat(hooks)`: notify integrators when managed memories change. Emits `MemoryChanged` hook on create/update/delete/toggle; non-blocking, no rollback. |

---

## 5. Feature Request Trends

| Trend | Evidence |
|-------|----------|
| **Managed Agent / Multi-Agent Architecture** | #12380 (master proposal), #12723 (O1), #12724 (W0c), #12728 (F), #12698 (ACB bridge), #12709 (W0b admission), #12713 (Hosted Harness) — 7+ issues/PRs in 24h |
| **Session & Workspace Durability** | Workspace bindings (#12681, #12709), per-session execution dirs (#12724), durable tool results (#12729), session ownership in bridge (#12698) |
| **Web Shell / Desktop Parity** | Sidebar update/restart (#12734), delete standalone sessions (#12669), background agent exposure (#10954) |
| **MCP / OAuth Hardening** | Registration URL preservation (#12205), OAuth discovery fixes (#12165) |
| **Encoding / Windows Console Reliability** | System code page priority (#12731), worktree cleanup safety (#12735) |
| **Background Agent Control** | Peek/answer/stop subcommands (#10949), supervisor agent listing (#10954) |

---

## 6. Developer Pain Points

| Pain Point | Frequency / Severity |
|------------|----------------------|
| **Remote-SSH / Companion instability** | #12416 (P1, 13 comments) — `write EPIPE` / `BridgeChannelClosedError` on every session creation in 0.24.2 |
| **Windows encoding corruption** | #8278 (56 days open, fixed today) — CP-866/936/932/949 always decoded as windows-1252 due to chardet-first logic |
| **Auto-update UX on Windows** | #12727 — `/update` downloads, quits console, but `qwen` still reports old version after restart |
| **Aggressive worktree cleanup** | #12735 — Stale-worktree sweep deletes user-named worktrees with untracked files (data-loss risk) |
| **MCP OAuth discovery gaps** | #12165 — Dynamic registration URL dropped from `WWW-Authenticate`, blocking Atlassian and similar servers |
| **Web Shell session management gaps** | #12669 — Cannot delete current no-workspace session from sidebar (action disabled) |
| **CI flakiness on Windows/macOS** | #12718 — 145 Windows failures + macOS fixture bugs from directory-fsync refusal & case-insensitive fs |

---

*Generated from github.com/QwenLM/qwen-code data as of 2026-09-26. All links point to original GitHub items.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-09-26

## 1. Today's Highlights

The project is in an intense **0.10.1 stabilization sprint** with 13 issues and 50 PRs updated in 24 hours. Core focus areas: eliminating hardcoded limits in code mode, fixing first-run onboarding failures, adding a "Superfast Decision Gate" to bypass LLM calls for routine decisions, and splitting the runtime into a separate crate. No new release cut yet—v0.10.1 docs/credits are being prepped in PR #6606.

## 2. Releases

*No new releases in the last 24 hours.*

## 3. Hot Issues (10 Noteworthy)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#6603](https://github.com/Hmbown/Codewhale/issues/6603) | **Add optional Decision Gate** | Proposes a lightweight classifier to skip the large model for routine intent/tool decisions—saves 1–3s and API cost per trivial turn. | Open, 1 comment, author Andrea-Bruno; PR #6604 already implements shadow mode. |
| [#6509](https://github.com/Hmbown/Codewhale/issues/6509) | **Code mode drops nested-call receipts on 30s timeout** | Four non-configurable caps (30s deadline, 32K/16K result caps) silently truncate tool output and lose nested call records. | Closed; fix landed in PR #6583. |
| [#6542](https://github.com/Hmbown/Codewhale/issues/6542) | **Recurring tool errors: edit mismatches, cwd scope, update_goal** | 5% tool error rate in founder sessions; top causes are old-text mismatches (6.9% of edits) and workspace boundary confusion. | Closed; root-cause audit done, fixes likely in recent PRs. |
| [#6562](https://github.com/Hmbown/Codewhale/issues/6562) | **MCP/plugin calls in code mode via single approval gate** | MCP is 3% of calls but 71% of tokens; Cursor’s schema folders cut tokens 46.9%. Unified gate avoids double authority. | Closed; implemented in PR #6583. |
| [#6510](https://github.com/Hmbown/Codewhale/issues/6510) | **`exec --auto` bypasses Engine, duplicates prompts** | Without `--auto`, `exec` skips BASE_PROMPT, AGENTS.md, skills, hooks, tools, and session recording—two code paths. | Closed; unified in PR #6588. |
| [#6566](https://github.com/Hmbown/Codewhale/issues/6566) | **First run: no onboarding, first message lost/doubled** | Brand-new users hit provider picker, key errors, approval cards with no guidance; messages duplicated or dropped. | Closed; fixed in PR #6592. |
| [#6517](https://github.com/Hmbown/Codewhale/issues/6517) | **Delete ~2,650 lines of dead `crates/workflow`** | `WorkflowReplayExecutor` only used in tests; `review.rs`, `yolo.rs` duplicated logic. Reduces maintenance surface. | Closed; removal likely in PR #6586. |
| [#6516](https://github.com/Hmbown/Codewhale/issues/6516) | **Remove dead config/flags/env: output_mode, workshop, DEEPSEEK_* twins** | 10+ stale config keys, env vars, CLI flags still parsed/documented but unused—confuses users and clutters code. | Closed; cleanup in progress. |
| [#6579](https://github.com/Hmbown/Codewhale/issues/6579) | **Restore green Linux full-workspace test gate** | Authoritative test suite red on clean `main`—blocks confidence in merges. | Closed; pipeline restored. |
| [#6585](https://github.com/Hmbown/Codewhale/issues/6585) | **Provenance on instructions/memory; agent text as claims** | “Whose word wins” ranking exists in prompts but unenforced; needs cryptographic provenance and fail-closed honesty. | Open, founder-approved direction; foundational for trust. |

## 4. Key PR Progress (10 Important)

| PR | Status | Summary |
|----|--------|---------|
| [#6604](https://github.com/Hmbown/Codewhale/pull/6604) | Open | **Superfast Decision Gate (shadow mode)** — new `crates/tui/src/superfast.rs` + hook in engine turn loop; measures/log only, off by default. |
| [#6605](https://github.com/Hmbown/Codewhale/pull/6605) | Open | **`exec --auto` SIGPIPE fix + DSML strip** — survives closed pipes, removes DeepSeek DSML in one-shot exec. |
| [#6602](https://github.com/Hmbown/Codewhale/pull/6602) | Open | **Runtime fixes B2–B7**: undo repair on missing HEAD, approval waits, hooks on runtime threads, edit/patch integrity. |
| [#6600](https://github.com/Hmbown/Codewhale/pull/6600) | Open | **TypeScript + Cordis extension host (Phase 1, behind flag)** — plugins/MCP move to TS; Rust core stays authoritative. |
| [#6601](https://github.com/Hmbown/Codewhale/pull/6601) | Open | **Trust hardening**: credentials masked at rest, honest approval timeouts, fail-closed grants, workspace trust. |
| [#6589](https://github.com/Hmbown/Codewhale/pull/6589) | Open | **Workflow truth + safe `/share` + worktree cleanup + per-thread provider switch** — combined parity batch. |
| [#6591](https://github.com/Hmbown/Codewhale/pull/6591) | Open | **Session receipts** — lists what a session did from existing records; respects `CODEWHALE_HOME`. |
| [#6587](https://github.com/Hmbown/Codewhale/pull/6587) | Open | **Right-click everywhere** — reaches every surface, items do what they say, “Open in editor” stays in workspace. |
| [#6586](https://github.com/Hmbown/Codewhale/pull/6586) | Closed | **Runtime/TUI split (RS-0..RS-7)** — creates `codewhale-runtime` crate, moves non-UI modules, adds boundary ratchet. |
| [#6583](https://github.com/Hmbown/Codewhale/pull/6583) | Closed | **MCP/plugin calls in code mode via single approval gate** — closes #6562, refs #6509; nested calls use `plan_tool_calls` + `request_tool_approval`. |

## 5. Feature Request Trends

1. **Latency/cost reduction for trivial decisions** — Decision Gate (#6603, #6604) to avoid LLM round-trips on routine turns.
2. **Extensibility in TypeScript** — Cordis-based plugin host (#6600) replacing Rust plugin surface; aligns with DeepSeek Harness model.
3. **Session observability** — Receipts (#6591), provenance (#6585), structured hook receipts (#6582) for auditability.
4. **First-run polish** — Onboarding, provider picker, key management, message deduplication (#6566, #6592).
5. **Config hygiene** — Systematic removal of dead flags/env vars (#6516) and dead crates (#6517).

## 6. Developer Pain Points

| Pain Point | Evidence |
|------------|----------|
| **Hardcoded, non-configurable limits** | 30s deadline, 32K/16K caps in code mode (#6509); no knobs for MCP token budgets (#6562). |
| **First-run friction** | No onboarding, lost/doubled messages, developer-facing approval cards, provider picker UX (#6566). |
| **Silent config typos** | `config set` accepts unknown keys, writes to wrong file, no did-you-mean (#6563). |
| **Dual code paths for `exec`** | `--auto` vs. bare `exec` use different prompts, skip Engine, lose session recording (#6510). |
| **Broken test gate** | Full-workspace libtest red on clean `main` (#6579) — erodes merge confidence. |
| **Tool error noise** | 5% error rate; edit old-text mismatches, cwd/workspace scope contention, `update_goal` with no goal (#6542). |
| **Dead code/config accumulation** | 2,650 lines in `crates/workflow`, 10+ stale config keys/env vars (#6517, #6516). |

---

*Data sourced from `github.com/Hmbown/Codewhale` (DeepSeek TUI) — issues/PRs updated 2026-09-25 to 2026-09-26.*

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*