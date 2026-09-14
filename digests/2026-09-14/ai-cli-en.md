# AI CLI Tools Community Digest 2026-09-14

> Generated: 2026-09-14 04:33 UTC | Tools covered: 10

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

# Cross-Tool Comparison Report: AI CLI Tools Ecosystem (2026-09-14)

---

## 1. Ecosystem Overview

The AI CLI tools landscape is in a **stabilization and hardening phase** rather than feature expansion. Across 9 active projects, zero major releases shipped in the last 24 hours; instead, teams are resolving Windows reliability regressions, session/sub-agent correctness bugs, and TUI rendering regressions. Windows desktop parity has emerged as the single largest cross-cutting investment—6 of the top 10 tools report critical Windows blockers (orphaned processes, sandbox failures, always-on-top windows, BOM handling). Concurrently, **agent orchestration maturity** (sub-agent isolation, prompt caching, token observability, session resume) is the dominant product differentiator. Community engagement is high on reliability issues (hundreds of 👍/comments) but low on new feature requests, signaling a shift from "what can it do?" to "does it work reliably in my environment?"

---

## 2. Activity Comparison

| Tool | Issues (Hot) | PRs (24h) | Release (24h) | Primary Focus |
|------|--------------|-----------|---------------|---------------|
| **Claude Code** | 10 | 6 (4 open) | ❌ None | Windows stability, model behavior patterns |
| **OpenAI Codex** | 10 | 13 (all merged) | ❌ None | Windows sandbox, TUI polish, infrastructure |
| **Gemini CLI** | 10 | 10 (mixed) | ✅ Nightly v0.61.0 | Subagent reliability, shell execution, AST tooling |
| **GitHub Copilot CLI** | 5 | 0 | ❌ None | Agent observability, workspace config, voice |
| **Kimi Code CLI** | 1 | 1 (docs) | ❌ None | Rate limit transparency, provider docs |
| **OpenCode** | 10 | 10 (mixed) | ❌ None | UI regression, Muse Spark reasoning tokens |
| **Pi** | 10 | 10 (all open) | ❌ None | Session corruption, TUI performance, provider gaps |
| **Qwen Code** | 10 | 10 (mixed) | ✅ Nightly v0.23.3 | Daemon isolation, Windows BOM, sandboxing |
| **DeepSeek TUI** | 10 | 6 (4 closed) | ✅ v0.9.13 | Sub-agent runtime, `/pet` mode, sandbox escape |
| **Grok Build** | 0 | 0 | ❌ None | *Inactive* |

**Key insight**: 7/9 active tools have ≥10 hot issues; 6/9 have ≥10 PRs in flight. Only Qwen Code and DeepSeek TUI shipped user-facing releases.

---

## 3. Shared Feature Directions (Cross-Tool Requirements)

| Requirement | Tools Affected | Specific Needs |
|-------------|----------------|----------------|
| **Windows Desktop Parity & Stability** | Claude Code, OpenAI Codex, Gemini CLI, Copilot CLI, Qwen Code, OpenCode, Pi | Orphaned process cleanup (Claude, Codex), sandbox ACL corruption (Codex), always-on-top window (Claude), UTF-8 BOM settings corruption (Qwen), env var refresh without restart (OpenCode), console flashing (OpenCode) |
| **Sub-Agent / Multi-Agent Reliability** | Claude Code, Gemini CLI, Copilot CLI, OpenCode, Qwen Code, DeepSeek TUI, Pi | Isolation guarantees (Claude), MAX_TURNS misreporting (Gemini), prompt caching bypass (Copilot), encrypted_content staleness (OpenCode), permission queue scoping (Qwen), 9 defect fixes in fan-out (DeepSeek), aborted turn context poisoning (Pi) |
| **Prompt Cache / Token Observability** | Claude Code, Copilot CLI, Qwen Code, DeepSeek TUI, Pi | Cache forensics dashboard (Claude), token cost surprise (Copilot), cache busting on MCP changes (Qwen), tok/s audit & ClickHouse analytics (DeepSeek), prompt cache key proxy support (Pi) |
| **Session Continuity & Resume** | Gemini CLI, OpenCode, Qwen Code, Pi, DeepSeek TUI | Session protection from deletion (Gemini), session resume with model switch (OpenCode), rewind across boundaries (Qwen), aborted turn cleanup (Pi), session resume reasoning tokens (DeepSeek) |
| **MCP / Tool Integration Hardening** | Claude Code, Copilot CLI, OpenCode, Qwen Code, DeepSeek TUI, Pi | Local MCP readiness (Claude), workspace `.mcp.json` ignored (Copilot), MCP tool results to logs (OpenCode), container execution backend (Qwen), MCP re-auth freeze (DeepSeek), serverTools declaration (Pi) |
| **TUI/Terminal Rendering Quality** | OpenAI Codex, OpenCode, Pi, Qwen Code, DeepSeek TUI | Scrollback preservation (Codex), forced UI regression (OpenCode), redraw storms (Pi), OpenTUI parity (Qwen), Markdown copy preservation (DeepSeek) |
| **Sandboxing / Isolation Options** | OpenAI Codex, Gemini CLI, Qwen Code, DeepSeek TUI | MXC sandbox wiring (Codex), zero-dependency OS sandboxing (Gemini), bwrap/container backends (Qwen), `--no-sandbox` mode (DeepSeek) |

---

## 4. Differentiation Analysis

| Dimension | Leaders / Unique Approaches |
|-----------|----------------------------|
| **Target User** | **Claude Code**: Enterprise/production SaaS teams (271-incident retrospective); **Codex**: Pro subscribers needing Windows desktop + browser automation; **Gemini CLI**: Developers wanting AST-aware precision tooling; **Copilot CLI**: GitHub-native workflows, voice-first users; **Qwen Code**: Multi-tenant daemon users, channel integrators (DingTalk); **DeepSeek TUI**: Power users wanting persistent cross-surface avatar, local-first control; **OpenCode**: Users wanting configurable UI + long-term memory; **Pi**: Multi-account OAuth, provider-agnostic turn attribution |
| **Technical Approach** | **Claude Code**: Plugin/mod architecture (`claude plugin test`), security-guidance glob rules; **Codex**: Windows sandbox library extraction (`codex-windows-sandbox`), MXC integration; **Gemini CLI**: RobustAutonomousAgent, Google Search tool, AST-aware reads; **Qwen Code**: ACP permission queue scoping, bwrap/container execution backends, dynamic extension workflows; **DeepSeek TUI**: 980-dot persistent world state shared across TUI/browser/native, rustls, gix migration; **OpenCode**: SQLite long-term memory, visualize CLI, provider/model registry split; **Pi**: Canonical Codex turn attribution (`requestIdentity`), deferred tool arg parsing, JSON coercion |
| **Maturity Signals** | **Claude Code**: Production incident meta-analysis, 5 systemic patterns documented; **Qwen Code**: Nightly CI with E2E shards, container sandbox GA; **DeepSeek TUI**: Versioned releases with blocker bug fixes, npm package deprecation managed; **Gemini CLI**: Nightly automation, CRLF diff normalization, surrogate-pair truncation fixes |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|------|-------|----------|
| **High Momentum / Rapid Iteration** | **OpenAI Codex** (13 PRs merged in 24h, all sandbox/TUI infra), **DeepSeek TUI** (v0.9.13 with 9 blocker fixes + `/pet` mode), **Qwen Code** (nightly + 10 PRs, daemon/sandbox/extension features) | Daily merges, release cadence, blocker resolution velocity |
| **Active Stabilization** | **Claude Code** (high-engagement Windows issues, 271-incident retrospective), **Gemini CLI** (nightly, 10 PRs, CRLF/UTF-16 fixes), **OpenCode** (10 PRs addressing UI regression + reasoning tokens), **Pi** (10 PRs targeting session corruption + TUI perf) | High issue engagement (100s of 👍), systematic bug fixes, infra investment |
| **Moderate / Focused** | **GitHub Copilot CLI** (5 issues, 0 PRs — agent observability gap), **Kimi Code CLI** (1 issue, 1 docs PR — low velocity window) | Fewer contributors, narrower scope, or longer release cycles |
| **Inactive** | **Grok Build** | No activity in window |

**Maturity markers**: Only **Qwen Code** and **DeepSeek TUI** ship user-facing releases with changelogs. **Claude Code** and **Codex** show enterprise-grade postmortem culture. **Gemini CLI** and **Qwen Code** invest heavily in CI/test infrastructure (nightly automation, E2E shards, OpenTUI parity testing).

---

## 6. Trend Signals for Technical Decision-Makers

| Trend | Signal Strength | Implication |
|-------|-----------------|-------------|
| **Windows is the new Linux** | 🔥🔥🔥 7/9 tools have critical Windows blockers | Any team adopting AI CLI must validate Windows CI/CD parity; sandbox/process-model differences are the #1 source of user-facing regressions. |
| **Agent orchestration > single-turn chat** | 🔥🔥🔥 Sub-agent isolation, prompt caching, session resume, token budgets appear in 7/9 tools | Tool selection should prioritize *agent runtime maturity* (queue scoping, reasoning token handling, compaction) over raw model access. |
| **Prompt cache / cost observability becoming table stakes** | 🔥🔥 Claude (forensics), Copilot (cache bypass), Qwen (cache busting), DeepSeek (ClickHouse), Pi (proxy cache keys) | Expect built-in dashboards within 2 quarters; evaluate tools on current token accounting accuracy. |
| **TUI is a differentiation battleground** | 🔥🔥 Codex (scrollback), OpenCode (sidebar regression), Pi (redraw storms), Qwen (OpenTUI parity), DeepSeek (Markdown copy) | Terminal UX quality now directly impacts daily productivity; test TUI workflows before standardization. |
| **Local-first / sandbox escape demand rising** | 🔥🔥 DeepSeek (`--no-sandbox`), Qwen (bwrap/container), Gemini (zero-dep sandbox), Codex (MXC) | Power users reject opaque kernel sandboxes; tools offering *configurable isolation* (none → bwrap → container → VM) win adoption. |
| **Multi-account / multi-provider identity** | 🔥 Pi (4 issues), Qwen (ACP sessions), Claude (plugin auth) | Enterprise SSO + personal account coexistence is an unsolved UX problem; early solutions will attract org buyers. |
| **Extension / plugin ecosystems formalizing** | 🔥 Qwen (dynamic workflows), Claude (mods/plugins), OpenCode (visualize, memory), DeepSeek (skill evolution) | Tools with *versioned, shareable automation units* (not just scripts) will compound community value faster. |

---

## Bottom Line for Evaluators

| If your priority is… | Best-fit tools (Sept 2026) |
|----------------------|----------------------------|
| **Windows reliability today** | Qwen Code (BOM fix, daemon isolation), DeepSeek TUI (v0.9.13 sandbox escape) |
| **Agent workflow correctness** | Qwen Code (permission queue scoping), DeepSeek TUI (9 defect fixes), OpenCode (reasoning token recovery) |
| **Cost/token transparency** | Claude Code (cache forensics), DeepSeek TUI (ClickHouse analytics), Pi (prompt cache keys) |
| **Extensibility & automation** | Qwen Code (dynamic workflows), Claude Code (mods), OpenCode (SQLite memory + visualize) |
| **Cross-platform TUX polish** | OpenAI Codex (scrollback/history), DeepSeek TUI (Markdown copy), Gemini CLI (CRLF/UTF-16 fixes) |
| **Enterprise auditability** | Claude Code (incident retrospective, security-guidance), Pi (turn attribution, OAuth labels) |

*Data as of 2026-09-14. Landscape shifts weekly; re-evaluate on 30-day cadence.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (as of 2026-09-14)

---

## 1. Top Skills Ranking — Most-Discussed PRs by Community Attention

| Rank | Skill / PR | Functionality | Discussion Highlights | Status |
|------|------------|---------------|----------------------|--------|
| 1 | **[skill-creator] Fix run_eval.py 0% Recall Bug** ([#1298](https://github.com/anthropics/skills/pull/1298)) | Core evaluation harness for skill descriptions; runs `claude -p` against test queries to measure trigger precision/recall | **Blocker for skill optimization loop** — 10+ independent reproductions (Issue [#556](https://github.com/anthropics/skills/issues/556), 12 comments). Root cause: Windows subprocess pipe reading fails silently, causing all queries to register as "not triggered." | 🟡 Open |
| 2 | **[mcp-builder] MCP ≥2.0 Compatibility** ([#1742](https://github.com/anthropics/skills/pull/1742)) | Generates MCP server scaffolding; handles transport, auth, and tool registration | Fixes breaking changes in `mcp>=2.0`: `streamablehttp_client → streamable_http_client`, custom headers via `create_mcp_http_client`. Addresses Issue [#1668](https://github.com/anthropics/skills/issues/1668). | 🟡 Open |
| 3 | **[self-audit] Mechanical + Reasoning Quality Gate** ([#1367](https://github.com/anthropics/skills/pull/1367)) | Pre-delivery audit: Step 0 verifies every claimed output file exists; Step 1–4 run four-dimension reasoning audit (correctness, completeness, consistency, security) in damage-severity order | Universal, stack-agnostic; positions itself as a "final gate" before any AI output reaches users. v1.3.0 adds severity-prioritized reasoning audit. | 🟡 Open |
| 4 | **[Hivemind] Zero-Cost Multi-Agent Orchestration** ([#1628](https://github.com/anthropics/skills/pull/1628)) | Delegates mechanical work to headless **opencode** workers on free models; Claude Code remains sole planner/reviewer/merger | Targets context-window scarcity: expensive model context is the bottleneck, not intelligence. Novel "planner + cheap workers" pattern. | 🟡 Open |
| 5 | **[document-typography] Typographic Quality Control** ([#514](https://github.com/anthropics/skills/pull/514)) | Prevents orphan words, widow paragraphs, numbering misalignment in generated documents | Addresses a universal pain point: "every document Claude generates" suffers typographic issues users rarely explicitly request fixes for. | 🟡 Open |
| 6 | **[skill-quality-analyzer / skill-security-analyzer] Meta-Skills** ([#83](https://github.com/anthropics/skills/pull/83)) | Quality analyzer (5 dimensions: structure, examples, resources, triggers, maintainability) + Security analyzer (permission scope, injection risk, data handling) | First "skills that analyze skills" — enables marketplace quality gates and supply-chain security. | 🟡 Open |
| 7 | **[claude-api] Retired Model Cleanup** ([#1607](https://github.com/anthropics/skills/pull/1607)) | Marks `claude-opus-4-1`, `claude-sonnet-4-0`, `claude-opus-4-0`, `claude-3-haiku-20240307` as retired in model registry | Directly addresses Issue [#1603](https://github.com/anthropics/skills/issues/1603); prevents agents from targeting unavailable models. | 🟡 Open |
| 8 | **[pyxel] Retro Game Development Skill** ([#525](https://github.com/anthropics/skills/pull/525)) | Wraps `pyxel-mcp` MCP server for Pyxel (Python retro game engine); covers write → run_and_capture → inspect → iterate loop | Niche but complete: demonstrates MCP-as-skill pattern for interactive graphical workloads. | 🟡 Open |

> **Note:** All 50 PRs show `Comments: undefined` in the raw data; ranking above weights PRs linked to high-comment Issues (#556, #1390, #1487) and structural significance (meta-skills, core infra fixes).

---

## 2. Community Demand Trends — From Issues

| Trend | Evidence (Issues) | What Users Want |
|-------|-------------------|-----------------|
| **Supply-Chain Security & Trust Boundaries** | [#492](https://github.com/anthropics/skills/issues/492) (43 comments, 2👍) — Community skills published under `anthropic/` namespace impersonate official skills | Namespace isolation, verified publisher badges, installation-time trust signals |
| **Organizational Skill Distribution** | [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8👍) — Manual `.skill` file sharing via Slack/Teams | Org-wide skill library, one-click install links, versioned sharing |
| **Evaluation & Reliability Infrastructure** | [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 7👍), [#1390](https://github.com/anthropics/skills/issues/1390) (4 comments) — `run_eval.py` 0% trigger rate; `evaluation.py` scores 0/N on real MCP servers | Working eval harness, Windows support, JSON-serializable MCP responses |
| **Context-Window Efficiency** | [#1487](https://github.com/anthropics/skills/issues/1487) (4 comments) — `claude-api` injects 156k tokens in one call | Lazy-loading, modular skill activation, token budgets |
| **Meta-Skills (Skills for Skills)** | [#83](https://github.com/anthropics/skills/pull/83), [#1385](https://github.com/anthropics/skills/issues/1385) (4 comments, 1👍) — Quality gates, reasoning pipelines | Automated skill review, pre-task calibration, adversarial review, delivery verification |
| **MCP-as-Skill Pattern** | [#16](https://github.com/anthropics/skills/issues/16) (4 comments), [#1742](https://github.com/anthropics/skills/pull/1742), [#525](https://github.com/anthropics/skills/pull/525) | Standardized exposure of skills as MCP servers; bidirectional skill↔MCP interop |
| **Cross-Platform / Bedrock Support** | [#29](https://github.com/anthropics/skills/issues/29) (4 comments), [#1099](https://github.com/anthropics/skills/pull/1099) (Windows fix) | AWS Bedrock compatibility, Windows-native subprocess handling |

---

## 3. High-Potential Pending Skills — Active PRs Likely to Land Soon

| PR | Skill | Why It Has Momentum |
|----|-------|---------------------|
| **[#1298](https://github.com/anthropics/skills/pull/1298)** | `skill-creator` eval fix | Blocks the entire description-optimization loop; 10+ reproductions; Windows fix in parallel PR [#1099](https://github.com/anthropics/skills/pull/1099) |
| **[#1742](https://github.com/anthropics/skills/pull/1742)** | `mcp-builder` MCP 2.0 support | Ecosystem dependency upgrade; unblocks all new MCP server generation |
| **[#1602](https://github.com/anthropics/skills/pull/1602)** | Evaluation serialization & metrics fixes | Fixes 4 reliability bugs across `mcp-builder`, `skill-creator`, `web-artifacts-builder`; platform compatibility |
| **[#1367](https://github.com/anthropics/skills/pull/1367)** | `self-audit` v1.3.0 | Only universal pre-delivery gate; addresses reasoning quality — a top community ask (Issue [#1385](https://github.com/anthropics/skills/issues/1385)) |
| **[#1628](https://github.com/anthropics/skills/pull/1628)** | `hivemind` multi-agent orchestration | Novel cost/performance architecture; aligns with "context is scarce" narrative |
| **[#514](https://github.com/anthropics/skills/pull/514)** | `document-typography` | Solves invisible-but-ubiquitous doc quality issue; low complexity, high impact |
| **[#83](https://github.com/anthropics/skills/pull/83)** | `skill-quality-analyzer` / `skill-security-analyzer` | Enables marketplace trust; foundational for Issue [#492](https://github.com/anthropics/skills/issues/492) resolution |
| **[#1607](https://github.com/anthropics/skills/pull/1607)** | `claude-api` retired models | Simple, targeted fix for stale model registry; prevents runtime errors |

---

## 4. Skills Ecosystem Insight — One-Sentence Summary

> **The community's most concentrated demand is for trustworthy, evaluatable, and composable skill infrastructure — specifically: security-isolated distribution, working automated evaluation (especially on Windows), meta-skills that gate quality, and MCP-native interoperability — rather than any single domain-specific skill.**

---

# Claude Code Community Digest — 2026-09-14

---

## 1. Today's Highlights

No new releases shipped in the last 24 hours. The issue tracker is dominated by **Windows desktop stability problems** — orphaned processes blocking relaunches, always-on-top window behavior with no disable option, and stealth updates leaving apps unlaunchable until reboot. A notable pattern: a 90-day retrospective of 271 production incidents surfaced five systemic model-behavior issues (over-trusting LLM callees, silent empty-response propagation, test fixtures masking bugs, structural checks mistaken for behavioral proof, and one-time authorizations generalized incorrectly).

---

## 2. Releases

*None in the last 24 hours.*

---

## 3. Hot Issues (Top 10 by Community Impact)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#42776](https://github.com/anthropics/claude-code/issues/42776) | **Desktop fails to relaunch on Windows — orphaned process file lock** | Core reliability blocker; users must reboot or kill processes manually to restart the app. | 183 comments, 88 👍 — highest engagement in tracker |
| [#85891](https://github.com/anthropics/claude-code/issues/85891) | **Windows 11: main window stays always-on-top, no setting to disable** | Breaks standard window management; forces users to minimize/close to access other apps. | 101 comments, 243 👍 — most upvoted issue |
| [#53247](https://github.com/anthropics/claude-code/issues/53247) | **Desktop fails to launch — orphaned Silo/Job Object after crash (HRESULT 0x80070020)** | Same root cause as #42776 but deeper in AppModel runtime; only logoff/reboot recovers. | 82 comments, 32 👍 |
| [#89467](https://github.com/anthropics/claude-code/issues/89467) | **Windows: app window always-on-top, no way to disable (Win10 repro)** | Confirms #85891 affects Win10 too; separate repro with 54 👍. | 24 comments, 54 👍 |
| [#89680](https://github.com/anthropics/claude-code/issues/89680) | **Stealth update leaves orphaned processes holding old AppX container; new version unlaunchable (0x80070020)** | Silent auto-update breaks subsequent launches until reboot; affects all Windows desktop users. | 18 comments, 1 👍 |
| [#89599](https://github.com/anthropics/claude-code/issues/89599) | **Idle stealth update quits app, child process survives, register fails 0x80073D02** | Variant of #89680; refile of previously auto-closed #63397. | 10 comments |
| [#94177](https://github.com/anthropics/claude-code/issues/94177) | **Prompt-cache forensics: 68% of cache writes from 36 events (TTL expiry, microcompact, resume)** | Data-driven cost analysis: cache reads = 64% of API-equivalent cost; proposes mitigations. | 1 comment, fresh today |
| [#94168–#94172](https://github.com/anthropics/claude-code/issues/94168) | **271-incident retrospective: 5 systemic model-behavior patterns** | Rare meta-analysis from production SaaS builds; reveals recurring failure modes in Claude-generated code. | 5 linked issues, all created today |
| [#87243](https://github.com/anthropics/claude-code/issues/87243) | **Sibling subagents share ONE scratchpad dir — generic filenames silently overwrite** | Violates documented isolation guarantee; data corruption risk in multi-agent workflows. | 4 comments |
| [#92758](https://github.com/anthropics/claude-code/issues/92758) | **Local MCP servers fail "Not ready after 60s" despite remote connection success** | Blocks Cowork/remote-control workflows on Windows; shared-pool readiness bug. | 3 comments |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|----|-------------|--------|
| [#94184](https://github.com/anthropics/claude-code/pull/94184) | **mods/diff: pinned header with body-only scroll, built-in list/base chords, wheel routing, DiffDialog off fullscreen** | Major diff UX overhaul: header/file-list pinned, hunk scrolling via wheel, keyboard chords (ctrl/opt+↑↓, ctrl+x b) functional from prompt. | Open |
| [#93951](https://github.com/anthropics/claude-code/pull/93951) | **mods: diff, sec-default, telemetry tests moved next to mods** | Test colocation for plugin-style mods; runs via `claude plugin test`. | Closed |
| [#87079](https://github.com/anthropics/claude-code/pull/87079) | **fix(security-guidance): make `**` glob patterns match zero-depth paths** | Fixes silent exclusion of top-level files from security rules (fnmatch `**/*.ts` required literal `/`). Addresses [#86545](https://github.com/anthropics/claude-code/issues/86545). | Open |
| [#79148](https://github.com/anthropics/claude-code/pull/79148) | **fix: add mandatory `hookify.` prefix to example rule filenames** | Loader only discovers `.claude/hookify.*.local.md`; examples lacked prefix, causing silent failures. | Open |
| [#89404](https://github.com/anthropics/claude-code/pull/89404) | **validate-agent.sh: don't abort at first warning; stop false-flagging valid agents** | Fixes `set -euo pipefail` arithmetic-increment aborts; resolves [#83803](https://github.com/anthropics/claude-code/issues/83803). | Open |
| [#41621](https://github.com/anthropics/claude-code/pull/41621) | **Add missing CLI build infrastructure and bundler configuration** | Full TypeScript→single-executable build pipeline (esbuild); comprehensive build docs. | Closed |

---

## 5. Feature Request Trends

| Direction | Evidence |
|-----------|----------|
| **Windows parity & stability** | 6 of top 10 issues are Windows desktop bugs (always-on-top, orphaned processes, stealth updates, MCP readiness, bash tooling, dictation). |
| **Notification/OS integration** | [#67220](https://github.com/anthropics/claude-code/issues/67220) requests native Windows toast notifications (closed); [#92288](https://github.com/anthropics/claude-code/issues/92288) asks for local status feed for ambient "Claude needs you" tooling. |
| **Localization** | [#31413](https://github.com/anthropics/claude-code/issues/31413) (16 comments, 15 👍) requests UI language localization support. |
| **Granular UX control** | [#75599](https://github.com/anthropics/claude-code/issues/75599) wants opt-out for click-to-confirm in select menus (9 comments, 18 👍). |
| **Slash-command ergonomics** | [#89720](https://github.com/anthropics/claude-code/issues/89720) requests autocomplete when `/` typed mid-prompt (10 comments, 6 👍). |
| **Cost/cache observability** | [#94177](https://github.com/anthropics/claude-code/issues/94177) provides measured cache-forensics data; community likely to demand built-in dashboards. |

---

## 6. Developer Pain Points

1. **Windows desktop is fundamentally unreliable** — three distinct orphaned-process bugs (#42776, #53247, #89680/#89599) make restarting the app require reboot or manual process cleanup. Stealth updates exacerbate this.

2. **Always-on-top window with no off switch** — two high-profile issues (#85891, #89467) with 344 combined 👍; forces users into awkward window-management workarounds.

3. **Silent security-rule failures** — `**` glob patterns in `security-guidance` plugin exclude top-level files without warning ([#86545](https://github.com/anthropics/claude-code/issues/86545), fix in [#87079](https://github.com/anthropics/claude-code/pull/87079)).

4. **Multi-agent isolation broken** — subagents share scratchpad dirs ([#87243](https://github.com/anthropics/claude-code/issues/87243)); forks inherit parent's dir — contradicts documented "session-specific, isolated" promise.

5. **Model behavior patterns recurring in production** — the 271-incident retrospective (#94168–#94172) reveals Claude-generated code systematically: over-trusts LLM callees, ignores empty-array responses, masks bugs via hand-seeded test fixtures, treats type/test passing as behavioral proof, and generalizes one-time auth into standing auth.

6. **Remote-control session recovery broken** — crashed servers leave sessions unreclaimable ([#91087](https://github.com/anthropics/claude-code/issues/91087)); dormant sessions become permanently unreachable ([#93920](https://github.com/anthropics/claude-code/issues/93920)).

7. **Plugin/hook discoverability broken by convention mismatches** — hookify prefix missing from examples ([#79148](https://github.com/anthropics/claude-code/pull/79148)); `claude plugin update` fails for bare names ([#86564](https://github.com/anthropics/claude-code/issues/86564)).

---

*Digest generated from github.com/anthropics/claude-code data as of 2026-09-14 00:00 UTC.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-09-14

## 1. Today's Highlights
- **No new releases** in the last 24 hours; development focus appears to be on Windows sandbox stabilization and TUI/UX refinements.
- **Windows sandbox issues dominate** the hot issue list — elevated sandbox failures, ACL state corruption, and "Windows Setup Incomplete" loops are blocking desktop users.
- **13 PRs merged today** (all by `copyberry[bot]`), primarily refactoring Windows sandbox internals, extracting shared helpers, and improving TUI scrollback/history search behavior.

---

## 2. Releases
*None in the last 24 hours.*

---

## 3. Hot Issues (Top 10 by Community Impact)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#38350](https://github.com/openai/codex/issues/38350) | **Recurring scheduled tasks disable themselves after successful runs** (codex-web) | Silent deactivation of automations breaks workflows; no user action or notification. | 67 comments — highest engagement; users report multiple tasks affected. |
| [#31606](https://github.com/openai/codex/issues/31606) | **Reset failed, did not apply and 1 reset is wasted** (rate-limits, Windows) | Pro users lose paid reset credits; counter decrements without effect. | 59 comments, **65 👍** — strong signal this impacts paying customers. |
| [#44720](https://github.com/openai/codex/issues/44720) | **ChatGPT "hit a snag" crash** (macOS, pets) | App instability on latest build (26.908.31457); reproducible with screenshot. | 34 comments, 6 👍 — recent regression on macOS. |
| [#43410](https://github.com/openai/codex/issues/43410) | **Browser control fails with API-key auth on Windows** (Edge plugin) | Blocks computer-use workflows for API-key users; `unsupported Codex auth method: apikey`. | 26 comments, 16 👍 — affects custom-model/bring-your-own-key setups. |
| [#44781](https://github.com/openai/codex/issues/44781) | **Editing queued message triggers "follow-up no longer exists"** (Windows Desktop) | Breaks message editing flow in multi-turn conversations; data loss risk. | 25 comments, **29 👍** — high frustration for desktop power users. |
| [#42853](https://github.com/openai/codex/issues/42853) | **GPT-6 Astra missing from model picker for eligible Pro accounts** (Windows) | Latest flagship model inaccessible despite subscription entitlement. | 25 comments, 5 👍 — provisioning/entitlement sync issue. |
| [#43375](https://github.com/openai/codex/issues/43375) | **Multiple GPT-5/6 models return "at capacity"** | Broad model availability degradation; not single-model specific. | 22 comments, 11 👍 — suggests capacity planning or routing bug. |
| [#43163](https://github.com/openai/codex/issues/43163) | **GPT-6 Astra returns `invalid_prompt` for harmless prompts** (Windows) | False-positive safety filtering blocks legitimate coding tasks across machines. | 13 comments, 3 👍 — model behavior regression. |
| [#36586](https://github.com/openai/codex/issues/36586) | **Subagent payload invisible to custom providers (DeepSeek)** | `encrypted_content` block dropped with `multi_agent_version v2`; breaks BYO-model multi-agent. | 11 comments, 6 👍 — affects advanced multi-agent users. |
| [#45302](https://github.com/openai/codex/issues/45302) | **Windows sandbox elevated blocked: corrupt `deny_read_acl_state.json`** | NUL-byte corruption in sandbox state file blocks all elevated operations. | 5 comments, fresh (created 2026-09-13) — critical sandbox blocker. |

---

## 4. Key PR Progress (All 13 PRs merged today by `copyberry[bot]`)

| PR | Area | Summary |
|----|------|---------|
| [#45312](https://github.com/openai/codex/pull/45312) | Windows Sandbox | Extract sandbox config preparation into `prepare_windows_sandbox_config` helper; preserves mode/enforcement separation. |
| [#45176](https://github.com/openai/codex/pull/45176) | Windows Sandbox | **Wire MXC sandbox into command execution** — explicit backend selection, exec-server reporting, violation classification. |
| [#45178](https://github.com/openai/codex/pull/45178) | Windows Sandbox | Split cleanup into preparation/completion phases; `PreparedWindowsSandboxCleanup` guard retains setup lock. |
| [#45169](https://github.com/openai/codex/pull/45169) | Windows Sandbox | Move setup helper + tests into `codex-windows-sandbox` library; expose installation record types/storage. |
| [#45182](https://github.com/openai/codex/pull/45182) | Windows Sandbox | Validate token groups before copying SIDs; add shared `token_groups` helper with size limits. |
| [#45224](https://github.com/openai/codex/pull/45224) | Windows Desktop | Register uninstall ownership **before** sandbox setup; fixes orphaned installations. |
| [#45180](https://github.com/openai/codex/pull/45180) | Network/Config | Extract `PreparedNetworkConfig`; separate proxy prep from managed network requirements. |
| [#45271](https://github.com/openai/codex/pull/45271) | TUI | Preserve terminal scrollback when growing viewport; use newlines at history scroll region bottom. |
| [#45262](https://github.com/openai/codex/pull/45262) | TUI | Route pastes into active history search (`Ctrl+R`); sanitized text appends to query. |
| [#45255](https://github.com/openai/codex/pull/45255) | UX/Command Center | Open new sessions directly from command center; `n` for blank session, single-letter shortcuts. |
| [#45276](https://github.com/openai/codex/pull/45276) | Agents/Worktree | Add `new_worktree` action (`w`) for local sessions with worktree support; uses cached default branch. |
| [#45248](https://github.com/openai/codex/pull/45248) | Telemetry/Metadata | Use captured step settings for request metadata/tool hooks; fixes stale model/effort reporting mid-turn. |
| [#45185](https://github.com/openai/codex/pull/45185) | Tool Calling | Bind direct tool-call metadata to invocation outputs; handles call ID reuse. |

> **Pattern:** Heavy investment in **Windows sandbox architecture** (6/13 PRs) and **TUI/UX polish** (3/13). No feature PRs — all refactors, fixes, and infrastructure.

---

## 5. Feature Request Trends (Distilled from Issues)

1. **Windows Sandbox Reliability** — Elevated mode failures, ACL corruption, setup loops, and MXC integration are the #1 friction point for Windows desktop users.
2. **Model Access & Capacity** — GPT-6 Astra missing from picker, "at capacity" errors across GPT-5/6, and `invalid_prompt` false positives indicate entitlement sync and routing gaps.
3. **Rate Limit / Reset UX** — Reset consumption without effect (#31606, #35116) and cache misses on reasoning-level changes (#35416) hurt Pro/20x subscribers.
4. **Computer Use / Browser Automation** — API-key auth breaks browser control (#43410), `cua.getState` fails on Windows (#45340), IntelliJ freezes during accessibility traversal (#38873).
5. **Multi-Agent / Subagent Support** — Custom provider payload loss (#36586), forked worker intent misinterpretation (#13491) — advanced agent workflows are fragile.
6. **Localization** — Simplified Chinese setting leaves most UI in English (#44802, #45335) — i18n coverage incomplete.
7. **Mobile/Remote Access** — iOS intermittently fails to open running task conversations (#28340).

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Frequency | Evidence |
|------------|-----------|----------|
| **Windows sandbox breaks after updates** | Very High | #45302 (corrupt state), #35349 (setup loop), #45153 (lock failed), #45179 (15-min extraction hang) |
| **Paid resets consumed without effect** | High | #31606 (65 👍), #35116 — direct monetary impact |
| **Model availability roulette** | High | #43375 (multi-model capacity), #42853 (missing Astra), #43163 (false safety blocks) |
| **Silent automation failures** | Medium | #38350 (tasks self-disable), #28340 (mobile can't reattach) |
| **Custom provider / BYO-model gaps** | Medium | #36586 (subagent payload dropped), #43410 (API-key auth breaks browser) |
| **TUI/terminal regressions** | Medium | #45271 (scrollback loss), #45262 (paste in history search) — addressed in today's PRs |
| **Language setting non-functional** | Low-Medium | #44802, #45335 — partial i18n application |

---

*Generated from `github.com/openai/codex` data as of 2026-09-14. All links point to live GitHub issues/PRs.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-09-14

## 1. Today's Highlights
The project shipped nightly **v0.61.0-nightly.20260914** and merged a fix for nested `.gitignore` trailing-slash patterns (#29290). Active discussion continues around subagent reliability (MAX_TURNS misreporting, hangs, and skill adoption), Auto Memory hardening, and shell-execution stability. Several long-standing bugs—session deletion safety, CRLF diff corruption, and settings validation—were closed this week.

## 2. Releases
| Version | Type | Link |
|---------|------|------|
| **v0.61.0-nightly.20260914.g9c1b0a610** | Nightly | [Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.61.0-nightly.20260913.g9c1b0a610...v0.61.0-nightly.20260914.g9c1b0a610) |

*Automated version bump; no user-facing changelog published.*

## 3. Hot Issues (Top 10 by Community Signal)

| # | Title | Why It Matters | Signal |
|---|-------|----------------|--------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent recovery after MAX_TURNS reported as GOAL success | Silent success masking turn-limit exhaustion breaks trust in subagent outcomes; P1, needs retest | 13 💬, 2 👍 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs indefinitely | Core workflow blocker; users must disable subagents to proceed | 8 💬, 8 👍 |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | Leverage model’s bash affinity via Zero-Dependency OS Sandboxing | Strategic epic to align CLI with Gemini 3’s native tool-use training; large effort | 9 💬, 1 👍 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell command stuck at “Waiting input” after completion | Frequent UX regression; simple commands appear hung | 4 💬, 3 👍 |
| [#29290](https://github.com/google-gemini/gemini-cli/issues/29290) | Nested `.gitignore` trailing-slash patterns anchored incorrectly | Breaks file discovery in monorepos; **fixed today in #29323** | 5 💬 |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Deterministic redaction & reduce Auto Memory logging | Security: secrets may reach model context before redaction | 5 💬 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini under-uses custom skills & sub-agents | Reduces automation potential; requires explicit prompting | 6 💬 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Assess AST-aware file reads, search, mapping | Exploration for precision tooling to cut token waste & turns | 7 💬, 1 👍 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Browser subagent fails on Wayland | Platform gap for Linux users adopting Wayland | 4 💬, 1 👍 |
| [#29314](https://github.com/google-gemini/gemini-cli/issues/29314) | ShellProcessor ignores abort signal, blocks prompt pipeline | New P1: hung custom commands freeze the entire CLI | 2 💬 (filed yesterday) |

## 4. Key PR Progress (Last 24h)

| # | Title | Status | Impact |
|---|-------|--------|--------|
| [#29323](https://github.com/google-gemini/gemini-cli/pull/29323) | fix(core): handle trailing-slash patterns in nested `.gitignore` correctly | **Open** | Fixes #29290; restores correct directory ignore semantics in monorepos |
| [#29321](https://github.com/google-gemini/gemini-cli/pull/29321) | chore/release: bump version to 0.61.0-nightly.20260914.g9c1b0a610 | **Open** | Nightly publish automation |
| [#29134](https://github.com/google-gemini/gemini-cli/pull/29134) | fix(cli): protect current session from deletion | **Closed** | Prevents accidental active-session removal via `--delete-session` |
| [#29132](https://github.com/google-gemini/gemini-cli/pull/29132) | fix(core): normalize line endings in diff context snippets | **Closed** | Stops CRLF/CR causing full-file diffs in model context |
| [#29131](https://github.com/google-gemini/gemini-cli/pull/29131) | fix(core): normalize line endings in `getDiffContextSnippet` | **Closed** | Companion fix for CRLF diff corruption |
| [#29319](https://github.com/google-gemini/gemini-cli/pull/29319) | fix(sdk): guard `JSON.parse` on tool-call args in `sendStream` | **Open** | Prevents malformed JSON from crashing the streaming pipeline |
| [#29320](https://github.com/google-gemini/gemini-cli/pull/29320) | fix(a2a-server): register `express.json` before A2A routes | **Open** | Ensures JSON-RPC bodies are parsed for A2A endpoints |
| [#29304](https://github.com/google-gemini/gemini-cli/pull/29304) | fix(cli): avoid splitting surrogate pairs during truncation | **Open** | Fixes emoji/truncation rendering bugs in UTF-16 |
| [#29286](https://github.com/google-gemini/gemini-cli/pull/29286) | Implement Google search tool in RobustAutonomousAgent | **Open** | Adds web-search capability to autonomous agent loop |
| [#29229](https://github.com/google-gemini/gemini-cli/pull/29229) | fix(cli): reject non-finite numbers in settings editor | **Open** | Blocks `Infinity`/`NaN` from corrupting JSON settings |

## 5. Feature Request Trends
1. **Subagent & Skill Maturity** – Multiple issues (#21968, #20195, #22598) demand better discovery, persistence (`/compress` #21335), observability, and automatic invocation of custom skills/subagents.
2. **AST-Aware Tooling** – Epic #22745 + #22746 explore precise, token-efficient code navigation via AST reads/mapping.
3. **Native Bash Affinity** – #19873 pushes for sandboxed POSIX tool chains to match model training.
4. **Auto Memory Hardening** – Redaction, deduplication, and inbox quarantine (#26525, #26522, #26523).
5. **Browser Agent Resilience** – Profile locking, Wayland support, settings override adherence (#22232, #21983, #22267).
6. **Session & History UX** – Session protection (#29134), shareable subagent trajectories (#22598), compress persistence (#21335).

## 6. Developer Pain Points
- **Silent Subagent Failures** – MAX_TURNS reported as success (#22323), hangs (#21409), missing context in bug reports (#21763).
- **Shell Execution Flakiness** – “Waiting input” ghost hangs (#25166), abort signal ignored (#29314), tmp script litter (#23571).
- **Configuration Leaks** – Browser agent ignores `settings.json` (#22267); symlinked agents not loaded (#20079).
- **Token/Context Waste** – CRLF diff explosions (#29130/#29131), full-file diffs, surrogate-pair truncation (#29304).
- **Auto Memory Noise** – Low-signal retries (#26522), unredacted secrets (#26525), invalid patches clogging inbox (#26523).
- **Tool Count Limits** – 400-error at >128 tools (#24246) forces manual tool scoping.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-09-14

## Today's Highlights
No new releases shipped in the last 24 hours. Community focus centers on agent reliability: a critical bug where long subagent tool-call sequences break prompt caching (#4829), a Linux voice-mode crash in the Nemotron ASR stack (#4833), and a regression where workspace `.mcp.json` files are ignored entirely (#4832). A long-standing request for live progress streaming on background sub-agents resurfaced (#2254).

---

## Releases
*No new releases in the last 24 hours.*

---

## Hot Issues

| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#4829](https://github.com/github/copilot-cli/issues/4829) | **Subagents executing long tool-call sequences in a single turn fail prompt caching and compound token consumption** | Autonomous subagents can run hundreds of tool calls in one turn, bypassing prompt caching and inflating token costs. Blocks reliable multi-step agent workflows on Windows/PowerShell with Gemini 3.8 Flash. | 1 comment, 0 👍 — recently triaged, high technical severity |
| [#4833](https://github.com/github/copilot-cli/issues/4833) | **Voice mode crashes CLI with ONNX Runtime assertion in Nemotron ASR on Linux** | Voice input triggers `SIGABRT` / core dump on Linux x64 (Manjaro, kernel 6.12). Renders voice feature unusable on Linux; indicates native ONNX runtime integration instability. | 0 comments, 0 👍 — new, critical regression in v1.0.83 |
| [#4832](https://github.com/github/copilot-cli/issues/4832) | **Workspace `.mcp.json` is never loaded in CLI 1.0.83 — `mcp list` shows no Workspace group** | Workspace-scoped MCP servers are silently ignored; `copilot mcp list` only shows User servers. Breaks project-level tooling configuration; no servers started, no log evidence of loading attempt. | 0 comments, 0 👍 — new, configuration regression |
| [#2254](https://github.com/github/copilot-cli/issues/2254) | **Add live progress streaming for background sub-agents** | Multi-phase orchestrator agents (plan → implement → deliver → review) only show tool-call counts. Teams lack real-time visibility into long-running background work, hurting observability and debugging. | 1 comment, 0 👍 — open since Mar 2024, persistent UX gap |
| [#1029](https://github.com/github/copilot-cli/issues/1029) | **Reject and feedback on a tool call should trigger replanning for all other tool calls** | Current UX requires feedback per tool call; expected behavior is global re-plan after any rejection. Closed without fix (possibly superseded), but highlights agent steering friction. | 0 comments, 0 👍 — closed Sep 14, historical pain point |

---

## Key PR Progress
*No pull requests updated in the last 24 hours.*

---

## Feature Request Trends
1. **Agent Observability & Streaming** — Strong demand for real-time progress, logs, and tool-call streaming for background/long-running sub-agents (#2254).
2. **Workspace-First Configuration** — Expectation that project-scoped configs (`.mcp.json`) load automatically and reliably (#4832).
3. **Cross-Platform Voice/ASR Stability** — Linux voice support is a priority but blocked by native runtime crashes (#4833).
4. **Token/Cost Efficiency for Agents** — Prompt caching and token management for high-volume agent turns (#4829).

---

## Developer Pain Points
- **Silent Config Failures**: Workspace MCP configs ignored with no error or log output (#4832).
- **Agent Cost Surprises**: Long tool-call sequences evade caching, causing unexpected token spend (#4829).
- **Platform Gaps**: Voice mode crashes on Linux; Windows/PowerShell agent behavior differs (#4829, #4833).
- **Opaque Background Work**: No live insight into multi-phase agent execution (#2254).
- **Fragmented Feedback Loops**: Per-tool-call rejection flow feels manual; developers want atomic re-plan (#1029).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-09-14

## Today's Highlights
No new releases in the past 24 hours. Community activity centered on a single bug report (#1383) regarding multi-agent rate limits for Allegretto subscribers, and a documentation PR (#2641) clarifying OpenAI-compatible provider configuration. Overall repository velocity appears low for this period.

---

## Releases
**No new releases published in the last 24 hours.**

---

## Hot Issues
| # | Title | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#1383](https://github.com/MoonshotAI/kimi-cli/issues/1383) | **[Bug] Multi-agent rate limit despite Allegretto “multi-agent” benefit** | User reports hitting `API rate limit` when running two concurrent agents (“crayfish”) on OpenClaw via the Allegretto plan, which advertises multi-agent support. Indicates a possible mismatch between marketed quota and enforced limits. | 6 comments, 0 👍. Discussion focuses on whether the limit is per-API-key, per-account, or per-concurrent-session. No official response yet. |

*Only one issue updated in the last 24h; older issues not included in this snapshot.*

---

## Key PR Progress
| # | Title | Status | Summary |
|---|-------|--------|---------|
| [#2641](https://github.com/MoonshotAI/kimi-cli/pull/2641) | `docs(providers): clarify OpenAI-compatible configuration` | **Open** | Documents that custom OpenAI-compatible providers require both an API-root base URL and the model ID accepted by the service. Notes that non-empty `OPENAI_BASE_URL` and `OPENAI_API_KEY` env vars override provider fields for `openai_legacy` and `openai_responses`. Bilingual (EN/CN) updates. |

*Only one PR updated in the last 24h.*

---

## Feature Request Trends
From the limited issue sample, the following directions are surfacing:

1. **Quota transparency for multi-agent workflows** – Developers need clear, published limits (concurrent agents, requests/minute) tied to each subscription tier.
2. **OpenAI-compatible provider ergonomics** – Explicit docs and validation for `base_url` + `model_id` pairing, plus env-var precedence rules.

*Broader trend analysis requires a wider issue window; current data is insufficient.*

---

## Developer Pain Points
| Pain Point | Frequency (in window) | Evidence |
|------------|----------------------|----------|
| **Unexpected rate limits on paid multi-agent plans** | 1 (high impact) | #1383 – Allegretto user blocked at 2 concurrent agents; no clarity on whether limit is technical or billing. |
| **Ambiguous OpenAI-compatible provider setup** | 1 (mitigated by PR) | #2641 – Docs gap: developers unsure which fields are required and how env vars interact with config. |

*Recurring themes (auth flow, Windows path handling, streaming stability) do not appear in this 24h slice but are historically common in the repo.*

---

*Digest generated from GitHub data for `MoonshotAI/kimi-cli` covering 2026-09-13 → 2026-09-14.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-09-14

## Today's Highlights
The community is reacting strongly to the recent UI redesign that removed the persistent left sidebar, with multiple issues requesting its restoration as an option. Simultaneously, a critical regression affects Muse Spark models on Zen/Console: the `encrypted_content` reasoning token becomes stale when resuming sessions, switching models, or processing images/tool calls, blocking several workflows. Two PRs (#48908, #48918) are already targeting fixes for the reasoning token issue.

---

## Releases
No new releases in the last 24 hours.

---

## Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| **[#48741](https://github.com/anomalyco/opencode/issues/48741)** — Muse Spark critical errors on Zen when receiving images/tool calls | Blocks all Muse Spark family models on Zen provider; `encrypted_content` not issued to caller | 25 comments, 2 👍 — high engagement, active discussion |
| **[#48882](https://github.com/anomalyco/opencode/issues/48882)** — Restore legacy UI with persistent left sidebar as option | Recent sidebar redesign (#20242) broke two-panel workflow; users want classic layout back | 9 comments, 4 👍 — strong support for configurable UI |
| **[#48888](https://github.com/anomalyco/opencode/issues/48888)** — Original layout forcibly replaced with single-conversation interface | Users with many projects/conversations forced into single panel; navigation requires extra clicks | 7 comments — frustration with forced UX change |
| **[#48902](https://github.com/anomalyco/opencode/issues/48902)** — Chinese request to restore old layout | "New layout is hard to use, please revert" — mirrors #48882/#48888 sentiment | 3 comments, 3 👍 — international consensus on UI regression |
| **[#48915](https://github.com/anomalyco/opencode/issues/48915)** — Muse Spark 1.3: resuming session after idle fails with encrypted_content error | Session resume broken for Muse Spark on OpenAI Responses API; new sessions work | 2 comments — related to #48741, #48805 |
| **[#48805](https://github.com/anomalyco/opencode/issues/48805)** — Muse Spark model switching fails with encrypted_content error | Switching models mid-session triggers same reasoning token failure | 4 comments — confirms pattern across model switches |
| **[#48903](https://github.com/anomalyco/opencode/issues/48903)** — 1.18.30 Homebrew macOS: every prompt fails with TypeError `'a.name'` in SystemPrompt.environment | Complete breakage on macOS arm64 Homebrew install; missing `references` field in config | 1 comment, 1 👍 — release-blocking for affected users |
| **[#48917](https://github.com/anomalyco/opencode/issues/48917)** — `serve`: InstanceStore.boot eagerly initializes every project — startup O(projects), minute-scale | Server startup scales linearly with project count; 2–20s per directory | 0 comments — performance regression needing attention |
| **[#48910](https://github.com/anomalyco/opencode/issues/48910)** — MCP local tool calls return `result: null`, response text goes to Logs | All 42 tools from MCP server affected; breaks tool-use workflows | 1 comment — data flow bug in MCP integration |
| **[#48919](https://github.com/anomalyco/opencode/issues/48919)** — CLI: no way to refresh environment variables without restarting | PATH changes require full restart; no in-session refresh mechanism | 4 comments — PR #48921 already addressing |

---

## Key PR Progress

| PR | Type | Description |
|----|------|-------------|
| **[#48908](https://github.com/anomalyco/opencode/pull/48908)** | Bug fix | Recover from stale encrypted reasoning on provider rejection (closes #48741) |
| **[#48918](https://github.com/anomalyco/opencode/pull/48918)** | Bug fix | Recover stale encrypted reasoning for Muse Spark session resume (fixes #48915) |
| **[#48921](https://github.com/anomalyco/opencode/pull/48921)** | Feature | Refresh Windows environment variables in-session (closes #48919) |
| **[#48862](https://github.com/anomalyco/opencode/pull/48862)** | Bug fix | Preserve OpenAI Chat HTTP/HTTPS image URLs instead of treating as base64 |
| **[#48886](https://github.com/anomalyco/opencode/pull/48886)** | Bug fix | Map Vertex `serviceTier` to `X-Vertex-AI-LLM-Shared-Request-Type` header |
| **[#48901](https://github.com/anomalyco/opencode/pull/48901)** | Refactor | Split provider and model registries to eliminate per-location catalog duplication |
| **[#48914](https://github.com/anomalyco/opencode/pull/48914)** | Refactor | Remove terminal pane setting; persistent panes always on Linux/macOS, disabled on Windows |
| **[#48605](https://github.com/anomalyco/opencode/pull/48605)** | Feature | Add interactive `opencode visualize` CLI command with destination picker |
| **[#48498](https://github.com/anomalyco/opencode/pull/48498)** | Feature | SQLite-backed long-term memory: teach, recall, learn persistence system |
| **[#43165](https://github.com/anomalyco/opencode/pull/43165)** | Feature | Configurable LLM request/response logging via `experimental.log_messages` |

---

## Feature Request Trends
1. **Legacy UI restoration** — Multiple issues (#48882, #48888, #48902, #48893) demand the persistent left sidebar and two-panel layout as a configurable option, not a forced replacement.
2. **Muse Spark/Zen provider hardening** — Encrypted reasoning token handling needs robustness across session resume, model switching, image input, and tool calls.
3. **In-session environment refresh** — Windows users need PATH/environment updates without restart (#48919, PR #48921).
4. **Session scalability** — Compaction failures at 128k+ tokens (#17340) and O(projects) server startup (#48917) indicate scaling pain points.
5. **MCP/TUI parity** — Browser tools non-functional in TUI but present in catalog (#48920); MCP tool results misrouted to logs (#48910).

---

## Developer Pain Points
- **Forced UI regression**: Removal of persistent sidebar breaks multi-project workflows; no opt-out.
- **Muse Spark on Zen broken**: `encrypted_content` failures on image input, tool calls, model switching, and session resume — affects core model family.
- **Windows friction**: Console flashing on subprocess (#42440), env var snapshotting (#48919), skill tool "fibers interrupted" (#48907).
- **Session limits**: Compaction fails at model context ceiling despite stripping media (#17340); 6MB request body blocks legitimate images (#35112).
- **MCP integration gaps**: Tool results lost to logs (#48910); browser tools unusable in TUI (#48920).
- **Config fragility**: Missing `references` field breaks macOS Homebrew install (#48903); auto-accept permissions resets on startup (#48897).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-09-14

## Today's Highlights
No new releases today. The issue tracker shows active triage around session stability (whitespace-only tool results bricking sessions, aborted turns leaving corrupt context), provider integration gaps (Grok 403 mislabeled, Vercel Gateway routing inert), and TUI rendering regressions (redraw storms, LaTeX fallback, forced mouse tracking). Multiple PRs target core agent-loop fixes: reload races, image queue handling, stop-reason preservation, and tool-argument coercion.

---

## Hot Issues

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| [#8684](https://github.com/earendil-works/pi/issues/8684) `PI_OFFLINE` silently disables all provider model discovery | Documented as disabling only startup housekeeping; actually blocks *all* model-catalog network calls for the session. Breaks offline workflows that still need local model metadata. | 8 comments, opened 2026-08-26 |
| [#7739](https://github.com/earendil-works/pi/issues/7739) Startup-time budget targeting jcode-comparable latency | Pi 0.62.0 lags jcode v0.9.1888-dev in median PTY launch latency/memory. Sets measurable target to close the gap. | 8 comments, opened 2026-08-06 |
| [#8720](https://github.com/earendil-works/pi/issues/8720) Whitespace-only tool result bricks session (HTTP 400) | Bash on Windows emits `\r\n`; OpenAI-compatible providers reject empty/whitespace tool content. Bad message persists in history, poisoning every subsequent request. | 6 comments, opened 2026-08-27 |
| [#9298](https://github.com/earendil-works/pi/issues/9298) Grok 403 labeled “OpenAI API error” | Misattribution hides the real cause (Grok subscription/credits) and confuses debugging. Root: openai-responses formatter. | 5 comments, opened 2026-09-07 |
| [#8913](https://github.com/earendil-works/pi/issues/8913) Fullscreen unconditionally enables mouse tracking (1003 any-event) | Renderer supports a `mouse` option but no CLI/env/setting exposes it. Users cannot opt out of aggressive mouse capture. | 5 comments, opened 2026-08-31 |
| [#8827](https://github.com/earendil-works/pi/issues/8827) Legacy LaTeX font switches (`\rm`, `\bf`, `\it`) force raw fallback | Math blocks with legacy TeX switches render as literal source instead of unicode math. `\mathrm{}` works. | 5 comments, opened 2026-08-29 |
| [#9256](https://github.com/earendil-works/pi/issues/9256) Resumed session re-renders tool-result images at full size | Large screenshots dominate the visible transcript on `pi -c`. No thumbnail/option to collapse. | 4 comments, opened 2026-09-06 |
| [#9306](https://github.com/earendil-works/pi/issues/9306) Aborted/error turn leaves unmatched `toolCall` blocks; next continuation rejected | Unmatched tool calls remain in context after `stopReason: "error" \| "aborted"`. Provider rejects subsequent `runAgentLoopContinue`. | 4 comments, opened 2026-09-08 |
| [#9211](https://github.com/earendil-works/pi/issues/9211) `vercelGatewayRouting` inert on vercel-ai-gateway provider | Config documented in `docs/models.md` but only sent via `openai-completions` adapter; built-in catalog uses `anthropic-messages`. | 4 comments, opened 2026-09-05 |
| [#9255](https://github.com/earendil-works/pi/issues/9255) Full-screen redraw storm on long transcripts | `firstChanged < prevViewportTop` triggers `fullRender(true)` nearly every frame when streaming thinking tail grows past viewport top. Causes violent jumping/doubled text. | 4 comments, opened 2026-09-06 |

---

## Key PR Progress

| PR | Summary | Status |
|----|---------|--------|
| [#9222](https://github.com/earendil-works/pi/pull/9222) | **fix(coding-agent): reject reload during active session operations** — Guards `AgentSession.reload()` and RPC extension reloads with `isStreaming`/`isRunningTool` checks to prevent wrapper access to invalidated runner. | Open |
| [#8612](https://github.com/earendil-works/pi/pull/8612) | **fix(coding-agent): clear delivered image-only queue entries** — Removes queue entries even when user message has no text; keeps steering/follow-up pending counts in sync. Covers #8581. | Open |
| [#8743](https://github.com/earendil-works/pi/pull/8743) | **fix(coding-agent): ignore stale tool image conversions** — Ties Kitty conversion cache to source image; discards late conversions that race with final tool image. | Open |
| [#8635](https://github.com/earendil-works/pi/pull/8635) | **fix(ai): preserve aborted stop reason during lazy setup** — Threads abort signal through lazy stream wrappers; reports setup failures as aborted when request already aborted. Fixes #8409. | Open |
| [#9442](https://github.com/earendil-works/pi/pull/9442) | **fix(ai): allow prompt cache keys for compatible proxies** — Adds `compat.supportsPromptCacheKey` so proxies can receive session key with default short retention. | Open |
| [#9459](https://github.com/earendil-works/pi/pull/9459) | **fix(coding-agent): prefer recorded model changes on resume** — Uses last `model_change` event over last assistant message’s model; falls back for pre-change sessions. | Open |
| [#9488](https://github.com/earendil-works/pi/pull/9488) | **fix(ai): add canonical Codex turn attribution** — Introduces provider-neutral `requestIdentity` (session, thread, turn, window, request-kind) for reliable attribution across continuations/retries/compaction. | Open |
| [#9461](https://github.com/earendil-works/pi/pull/9461) | **fix(ai): defer streamed tool argument parsing until read** — Moves JSON reparsing from every delta to first `.arguments` access (cached). Addresses #9265. | Open |
| [#9569](https://github.com/earendil-works/pi/pull/9569) | **fix(ai): coerce JSON-encoded object/array tool arguments** — Recovers arguments the model double-encoded as JSON strings (common when model mixes encoding levels). | Open |
| [#9570](https://github.com/earendil-works/pi/pull/9570) | **fix(ai): map `TOO_MANY_TOOL_CALLS` to error stop reason** — Handles new Gemini `FinishReason.TOO_MANY_TOOL_CALLS` (added in `@google/genai@2.21.0`) instead of throwing. | Open |

---

## Feature Request Trends
1. **Multi-account OAuth per provider** — Four separate issues (#1391, #1770, #5502, #7814) request labeled credentials (work/personal) for the same provider without re-auth or custom extensions.
2. **Session continuity & inheritance** — `/new` should optionally inherit model/effort (#9054); compaction summarization shouldn’t hit output caps at high thinking levels (#9075, #9512); resume should preserve model selection (#9459).
3. **Provider model discovery transparency** — `PI_OFFLINE` scope mismatch (#8684); default context size wrong when `models.json` entry matches provider-exposed model (#9566).
4. **TUI customization** — Opt-out of forced mouse tracking (#8913); light/dark/auto appearance with background override (#9573); fix redraw storms (#9255).
5. **Server-side tool declarations** — `serverTools` in model config for provider-built-ins (OpenAI Responses `web_search`, Zhipu GLM search) (#9556).

---

## Developer Pain Points
- **Session corruption from edge cases**: Whitespace-only tool output bricks the entire session (#8720); aborted turns leave unmatched `toolCall` blocks that poison subsequent requests (#9306).
- **Startup latency gap**: Measurably slower than jcode; no budget or regression guard yet (#7739).
- **Extension tool override broken**: Registering a tool with a built-in name (`grep`, `find`) is accepted but never replaces the built-in in the final tool list (#9071).
- **Image handling on resume**: Full-size inline re-render of tool-result screenshots dominates transcript (#9256).
- **Redraw performance on long transcripts**: Streaming thinking tail triggers full-screen redraw nearly every frame (#9255).
- **LaTeX rendering inconsistencies**: Legacy font switches force raw fallback (#8827); subscripts/superscripts render partially (#9564).
- **Provider error misattribution**: Grok 403 shown as OpenAI billing error (#9298); malformed `Retry-After` causes tight retry loops (#9571).
- **Jiti cache permission issues**: Unwritable `/tmp/jiti` symlink causes full TypeScript recompilation on every launch (#9565).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-09-14

---

## 1. Today's Highlights

- **Critical daemon bug fixed**: A production-blocking issue (#11795) where one idle session's unanswered permission prompt silently blocked all other sessions on the same daemon has been addressed in PR #11802 by scoping the ACP permission queue to the session.
- **Windows settings corruption resolved**: UTF-8 BOM in `settings.json` (common on Windows) no longer triggers silent reset to `{}` — PR #11807 strips the BOM before parsing.
- **Extension workflows go dynamic**: PR #11805 introduces a third workflow tier — extensions can now ship `.js` files from their `workflows/` directory, enabling richer, versioned automation without core changes.

---

## 2. Releases

### v0.23.3-nightly.20260913.faa395885e
Nightly build with two notable changes:
- **DingTalk refactor**: Removed obsolete background response aggregation ([#11570](https://github.com/QwenLM/qwen-code/pull/11570))
- **Channel cleanup**: Removed deprecated channel implementation

### cua-driver-rs v0.20.6
Prebuilt binaries for the Computer Use Agent driver:
- **macOS**: Codesigned + notarized universal binary + `QwenCuaDriver.app`
- **Linux**: Unsigned (x86_64 + arm64, glibc 2.31+)
- **Windows**: Unsigned UIAccess worker + native SDK payload (x86_64 + arm64)

---

## 3. Hot Issues

| Issue | Priority | Why It Matters | Community Signal |
|-------|----------|----------------|------------------|
| [#11795](https://github.com/QwenLM/qwen-code/issues/11795) Permission queue blocks all daemon sessions | P1 / Bug | **Production incident** — one unanswered prompt freezes every session on a shared daemon indefinitely. Root cause: queue keyed on ACP connection, not session. | 4 comments, triage-verified, independently reproduced |
| [#11803](https://github.com/QwenLM/qwen-code/issues/11803) UTF-8 BOM in settings.json treated as corrupted | P1 / Bug | Windows Notepad/PowerShell 5.1 write BOM by default; users silently lose all settings on startup. | 2 comments, immediate PR fix (#11807) |
| [#11809](https://github.com/QwenLM/qwen-code/issues/11809) Main CI: E2E Tests failed | CI Failure | Blocked main branch; Linux sandbox docker shard failed in `Run E2E` step. Auto-tracked per commit. | Bot-created, 1 comment |
| [#11408](https://github.com/QwenLM/qwen-code/issues/11408) Deferred review findings from PR #9466 | Open | Follow-up work from major rewind refactor; tracks items outside original PR scope. | 4 comments, linked to #9466 |
| [#11804](https://github.com/QwenLM/qwen-code/issues/11804) Chat deployment link | Need Info | Minimal context; appears to be a user-reported deployment issue. | 2 comments, status: need-information |
| [#6443](https://github.com/QwenLM/qwen-code/issues/6443) Improve DingTalk with interactive cards | Closed (P2) | Native cards for running status, stop button, ask-user forms — improves channel UX significantly. | 4 comments, implemented via #11570 |
| [#8935](https://github.com/QwenLM/qwen-code/issues/8935) Add DingTalk Workspace channel | Closed (P2) | Standalone DWS channel with authenticated `dws` CLI profile for @ messages, direct chats. | 3 comments |
| [#4777](https://github.com/QwenLM/qwen-code/issues/4777) Deferred tools bust prompt cache on every MCP change | Closed | MCP tool discovery/reveal invalidated cached system prompt — performance hit on every tool change. | 3 comments |
| [#6575](https://github.com/QwenLM/qwen-code/issues/6575) voiceBridge for channel audio prompts | Closed | Transcribe channel audio via configured voiceModel before sending to text-only models (visionBridge pattern). | 2 comments |
| [#7167](https://github.com/QwenLM/qwen-code/issues/7167) Fleet Shepherd Dashboard | Bot-maintained | Automated fleet health: 0 syncs, 0 dispatches, 0 releases this tick; 1 idle PR (#11792). | Auto-updated, 3 comments |

---

## 4. Key PR Progress

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#11805](https://github.com/QwenLM/qwen-code/pull/11805) | Feature | **Extensions ship dynamic workflows** — `.js` files from `workflows/` dir or `qwen-extension.json` become a third saved-workflow tier (after project/user). | Extensibility: versioned, shareable automation without core changes |
| [#11807](https://github.com/QwenLM/qwen-code/pull/11807) | Bug Fix | **Strip UTF-8 BOM before parsing settings.json** — prevents false corruption reset on Windows. | Fixes #11803; restores settings persistence for Windows users |
| [#11802](https://github.com/QwenLM/qwen-code/pull/11802) | Bug Fix | **Scope ACP permission queue to session** — eliminates cross-session blocking on daemon. | Fixes #11795 (P1 production incident); unblocks multi-session daemons |
| [#11806](https://github.com/QwenLM/qwen-code/pull/11806) | Bug Fix | **Close 5 OpenTUI parity gaps vs. ink** — measured against reference renderer on real hardware. | Stabilizes OpenTUI migration; fixes rendering divergences |
| [#11801](https://github.com/QwenLM/qwen-code/pull/11801) | Feature | **WebShell: global turn nav follows reading position** — scroll highlights nearest turn, rail re-centers on content change. | UX: seamless navigation in long transcripts |
| [#11711](https://github.com/QwenLM/qwen-code/pull/11711) | Feature | **Container execution for subagents** — opt-in via `QWEN_AGENT_EXECUTION_BACKEND=docker\|podman`; agents/projects can require `executionBackend: container`. | Security/isolation: sandboxed subagent execution on Unix |
| [#11614](https://github.com/QwenLM/qwen-code/pull/11614) | Feature | **bwrap kernel sandbox backend (Linux)** — no container runtime, root, daemon, or image required; opt-in by name. | Lightweight sandboxing alternative for Linux |
| [#11521](https://github.com/QwenLM/qwen-code/pull/11521) | Feature | **External model reasoning profiles** — typed profile, effort subset, default effort per model; drives Chat Completions, Responses, Anthropic, Gemini, CLI/ACP, WebShell. | Unified reasoning control across providers |
| [#10183](https://github.com/QwenLM/qwen-code/pull/10183) | Feature | **Structured on-demand recall for memory** — two-level ref/title tree on corpus change, query-focused subtree per turn, dedicated recall tool. | Memory: scalable, precise context retrieval |
| [#9466](https://github.com/QwenLM/qwen-code/pull/9466) | Refactor | **Anchor rewind to stable prompt identity** — survives session resume, headless `-p --resume`, turn reordering. | Core reliability: rewind works across session boundaries |

---

## 5. Feature Request Trends

1. **Channel/Integration Richness** — Multiple closed issues (#6443, #8935, #6575) show demand for native interactive cards, workspace channels, and audio bridging in DingTalk and other channels.
2. **Session UX & Performance** — #3869 (search in picker, lazy history, background refresh), #2933 (`/rename` + `Ctrl+R`), #4777 (cache busting) indicate focus on session management ergonomics.
3. **Sandboxing & Isolation** — #11614 (bwrap), #11711 (container subagents), #11795 (permission queue scoping) reflect growing need for secure, multi-tenant execution.
4. **Extension Ecosystem** — #11805 (dynamic workflows) + #1046 (VSCode plugin) point to extensibility as a strategic direction.
5. **Cross-Platform Parity** — Windows fixes (#11803, #11792, #11787) and macOS CI retries (#11134) show ongoing investment in platform equivalence.

---

## 6. Developer Pain Points

| Pain Point | Frequency | Evidence |
|------------|-----------|----------|
| **Daemon session interference** | High (P1 incident) | #11795: one stuck prompt blocks all sessions silently; fixed in #11802 |
| **Windows settings corruption** | High (silent data loss) | #11803: BOM triggers reset to `{}`; fixed in #11807 |
| **CI flakiness on Windows/macOS** | Recurring | #11787 (Windows baseline), #11792 (monitor debug store), #11134 (macOS E2E retry) |
| **Prompt cache invalidation** | Architectural | #4777: deferred tools listing baked into system prompt busts cache on every MCP change |
| **OpenTUI migration gaps** | Active | #11806: 5 parity issues vs. ink found in side-by-side testing |
| **Test brittleness** | Ongoing | #11436 (ACP child matching), #11001 (PTY cleanup), #10455 (unwritable config dir) |
| **Module import dominates CI time** | Structural | #10909: release-run test time bound by import, not scheduling — phased fix planned |

---

*Generated from github.com/QwenLM/qwen-code data as of 2026-09-14. Links point to live GitHub items.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-09-14

---

## 1. Today's Highlights

**v0.9.13 ships with critical sub-agent runtime fixes** — nine blocker defects in the six-worker fan-out were resolved in the last 24 hours, covering delivery verification, spawn-depth bounding, per-call budgets, and parking/resume semantics. Simultaneously, the **`/pet` mode** landed: a deterministic, cross-platform audiovisual pet that takes over the terminal viewport, driven by the same 980-dot world state used in browser and native hosts. The legacy `deepseek-tui` npm package is now officially deprecated; all future releases publish under `codewhale`.

---

## 2. Releases

| Version | Date | Key Changes |
|---------|------|-------------|
| **v0.9.13** | 2026-09-13 (tagged after CI green) | • Nine sub-agent runtime blockers fixed (#6121–#6130)<br>• `/pet` mode: full-terminal persistent pet with work-driven dot forms (#6154)<br>• Persistent world & dot-form engine shared across TUI, browser, Apple, Android (#6110)<br>• File-scoped restore endpoint added; whole-tree rollback gated (#6111)<br>• Runtime API: `GET /v1/workspace/files/search` for file suggestions (#6120)<br>• `rustls` bumped to 0.23.44 (#6105)<br>• **Breaking**: `deepseek-tui` npm package deprecated; install `codewhale` instead |

[Release v0.9.13](https://github.com/Hmbown/Codewhale/releases/tag/v0.9.13)

---

## 3. Hot Issues (Top 10 by Impact & Activity)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#6121](https://github.com/Hmbown/Codewhale/issues/6121) | **Sub-agent runtime: nine defects in six-worker fan-out (0.9.13 blocker)** | Foundational reliability for multi-agent workflows; fixes delivery verification, spawn-depth enforcement, per-call budgets, parking/resume, lineage tracking. | 1 comment, closed — all nine child issues resolved pre-release. |
| [#6156](https://github.com/Hmbown/Codewhale/issues/6156) | **TUI: copy drag selection as Markdown source, not rendered text** | Preserves code fences, links, structure when copying from terminal — critical for developer workflows sharing snippets. | 1 comment, open — fresh UX pain point. |
| [#5860](https://github.com/Hmbown/Codewhale/issues/5860) | **Continuous Self-Learning from Dialog (Automatic Skill Evolution)** | Proposes automatic `SKILL.md` extraction from repeated problem patterns — turns static skills into living knowledge base. | 5 comments, open — high-interest enhancement. |
| [#4955](https://github.com/Hmbown/Codewhale/issues/4955) | **Zero-sandbox / `--no-sandbox` mode for local dev** | Kernel Seatbelt sandbox breaks basic shell commands; users want fully unsandboxed local mode. | 5 comments, 1 👍, open — recurring friction for power users. |
| [#5975](https://github.com/Hmbown/Codewhale/issues/5975) | **Model picker (route·configured) severely laggy; per-column sort; mouse broken** | Core UX surface — model selection is slow with real catalogs, lacks sorting, mouse non-functional. | 1 comment, closed — fixed in v0.9.13. |
| [#5974](https://github.com/Hmbown/Codewhale/issues/5974) | **Extensions page: re-auth on MCP server freezes TUI; Diagnose button no-op** | MCP re-auth blocks entire UI; diagnostic affordance broken — impacts plugin reliability. | 1 comment, closed — fixed in v0.9.13. |
| [#5618](https://github.com/Hmbown/Codewhale/issues/5618) | **Replace internal `git` CLI reads with gix (gitoxide)** | Eliminates process-spawn overhead for repo badge probes, workspace context, `@status`/`@diff`, Git tools. | 2 comments, open — performance & dependency reduction. |
| [#5482](https://github.com/Hmbown/Codewhale/issues/5482) | **EPIC(docs): restructure & fully localize docs to Chinese** | Large Chinese user base blocked by English-only/stale docs; machine translation insufficient. | 3 comments, open — community-driven localization effort. |
| [#1097](https://github.com/Hmbown/Codewhale/issues/1097) | **FreeBSD support (npm binary / pkg)** | FreeBSD users cannot install via npm; need native binary or pkg support. | 3 comments, open — platform gap. |
| [#6094](https://github.com/Hmbown/Codewhale/issues/6094) | **v0.9.14 — start here: what's planned, how to help, how to report** | Public milestone tracking for next release; catalog-owned model capabilities, provider billing, etc. | 1 comment, open — coordination hub. |

---

## 4. Key PR Progress (Last 24h)

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#6154](https://github.com/Hmbown/Codewhale/pull/6154) | `feat(tui): /pet mode` | **Closed** | Full-terminal pet toggle; reveals assistant answer on turn completion; Escape returns. |
| [#6110](https://github.com/Hmbown/Codewhale/pull/6110) | `feat(pet): persistent world & work-driven dot forms` | **Closed** | 980-dot deterministic world shared across TUI, browser, Apple, Android; forms = reasoning knots, code strands, FS branches, etc. |
| [#6111](https://github.com/Hmbown/Codewhale/pull/6111) | `feat(tui): file-scoped restore endpoint` | **Closed** | Per-file revert (GUI parity); fixes two whole-tree rollback defects. |
| [#6120](https://github.com/Hmbown/Codewhale/pull/6120) | `feat(runtime-api): expose workspace file suggestions` | **Closed** | `GET /v1/workspace/files/search?query=...` — composer-grade discovery/ranking. |
| [#6134](https://github.com/Hmbown/Codewhale/pull/6134) | `Professionalize Computer Use + official download page` | **Open** | Computer Use 0.3.0: standalone helper, native permissions, background practice, human Pause/Stop. |
| [#6105](https://github.com/Hmbown/Codewhale/pull/6105) | `chore(deps): bump rustls 0.23.43 → 0.23.44` | **Open** | Security/maintenance update via dependabot. |

---

## 5. Feature Request Trends (Distilled from All Issues)

| Theme | Representative Issues | Signal Strength |
|-------|----------------------|-----------------|
| **Agent/Sub-agent orchestration** | #6121–#6130 (9 blockers), #5625 (mid-turn guidance), #5581 (event granularity) | 🔥🔥🔥 Core runtime investment |
| **Persistent, cross-surface pet/avatar** | #6109, #6110, #6154 | 🔥🔥🔥 Shipping in v0.9.13 |
| **Sandbox escape / local-first modes** | #4955 (zero-sandbox), #5637 (MCP secret scoping) | 🔥🔥 High friction for power users |
| **Model/provider economics visibility** | #5976 (cost unknown), #5977 (tok/s audit), #6019 (ClickHouse analytics) | 🔥🔥 Founder-driven, production-critical |
| **TUI UX polish** | #5975 (model picker perf), #6156 (Markdown copy), #2342 (clickable file refs), #5974 (MCP re-auth freeze) | 🔥🔥 Daily-driver pain points |
| **Git performance & reliability** | #5618 (gix), #6124 (delivery verifier), #6123 (write-scope) | 🔥🔥 Under-the-hood quality |
| **Platform expansion** | #1097 (FreeBSD), #4986 (desktop app), #6134 (Computer Use helper) | 🔥 Growing |
| **Documentation localization** | #5482 (Chinese EPIC) | 🔥 Community-driven |

---

## 6. Developer Pain Points (Recurring Frustrations)

1. **Sandbox overreach** — Seatbelt kernel sandbox breaks routine shell commands; `--sandbox=off` still leaves internal sandbox active. Users want true `--no-sandbox` for trusted local machines (#4955).

2. **Sub-agent reliability gaps** — Before v0.9.13: no delivery verification, unbounded fan-out, no per-call token budgets, parking/resume race conditions, orphaned agent IDs, misleading recovery verbs (#6121–#6130).

3. **Model picker unusable at scale** — Laggy rendering, no column sort, mouse dead — fixed in v0.9.13 but signals catalog growth outpacing UI (#5975).

4. **MCP auth UX broken** — Re-auth freezes entire TUI; Diagnose button non-functional — fixed in v0.9.13 (#5974).

5. **Cost/token observability incomplete** — "Unknown" cost for cataloged providers (Concentrate), tok/s denominator suspect, no analytical backend — ClickHouse addition underway (#5976, #5977, #6019).

6. **Git CLI spawn overhead** — Every internal read (badge, context, tools) shells out; migration to `gix` underway but not done (#5618).

7. **Documentation language barrier** — English-only/stale docs block Chinese-speaking majority; machine translation introduces errors (#5482).

8. **Platform gaps** — FreeBSD no binary; no first-class desktop app (users manage terminals, working dirs, shortcuts manually) (#1097, #4986).

9. **Copy/paste loses Markdown structure** — Drag selection copies rendered text, stripping fences/links — fresh issue, high daily impact (#6156).

10. **No automatic skill evolution** — Powerful `SKILL.md` system but static; users manually curate; request for pattern extraction from dialog history (#5860).

---

*Generated from GitHub data as of 2026-09-14. All links point to `Hmbown/Codewhale` repository.*

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*