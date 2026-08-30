# AI CLI Tools Community Digest 2026-08-30

> Generated: 2026-08-30 05:01 UTC | Tools covered: 10

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

# Cross-Tool Comparison Report: AI CLI Tools Ecosystem (2026-08-30)

---

## 1. Ecosystem Overview

The AI CLI tools landscape is bifurcating into **mature platform plays** (Claude Code, OpenAI Codex, GitHub Copilot CLI) with enterprise distribution channels and **specialized/emerging contenders** (Gemini CLI, OpenCode, Pi, Qwen Code, DeepSeek TUI) iterating rapidly on niche capabilities. All tools face **Windows/WSL integration debt** as the single largest cross-platform friction surface. A convergence is visible around **multi-agent orchestration**, **MCP/tool extensibility**, and **session durability** — but implementation approaches differ sharply. Security hardening (sandboxing, hook trust boundaries, quota metering) has shifted from afterthought to blocker for production adoption.

---

## 2. Activity Comparison

| Tool | Issues Updated | PRs Updated | Release Today | Release Notes |
|------|----------------|-------------|---------------|---------------|
| **Claude Code** | 10 high-signal | 1 (docs) | ❌ | — |
| **OpenAI Codex** | 10 high-signal | 7 (merged) | ✅ | **rust-v0.151.0** stable: MCP grace period + tool-result interception |
| **Gemini CLI** | 10 high-signal | 10 (mixed) | ✅ | **v0.59.0-nightly**: hook migration fixes, `read_file` → FileSystemService |
| **GitHub Copilot CLI** | 10 high-signal | 2 (1 merged) | ✅ | **v1.0.82/82-2**: worktree fix, Ctrl+E, auth error surfacing |
| **Kimi Code CLI** | 1 (critical) | 0 | ❌ | — |
| **OpenCode** | 10 high-signal | 10 (merged) | ❌ | — |
| **Pi** | 10 high-signal | 10 (merged) | ❌ | — |
| **Qwen Code** | 5 high-signal | 10 (mixed) | ❌ | — |
| **DeepSeek TUI** | 10 high-signal | 10 (mixed) | ❌ | v0.9.12 in pre-release validation |
| **Grok Build** | 0 | 0 | ❌ | No activity |

**Key observation**: OpenAI Codex, Gemini CLI, OpenCode, Pi, and DeepSeek TUI show **high PR velocity** (7–10 merged/updated). Claude Code and Copilot CLI rely more on **direct-to-release fixes** with fewer visible PRs. Kimi and Grok are effectively dormant.

---

## 3. Shared Feature Directions

| Requirement | Tools Demanding It | Specific Needs |
|-------------|-------------------|----------------|
| **Multi-agent / cross-session orchestration** | Qwen Code (#8724, #10542), OpenCode (#41249), Gemini CLI (#21968, #22267), Pi (#8840 web GUI) | Agent-to-agent messaging, live subagent observability, session rotation, unified task tracking |
| **MCP / tool extensibility hardening** | OpenAI Codex (0.151.0 grace period + interception), Copilot CLI (#4647, #4660, #4662), Gemini CLI (#24246 tool ceiling), DeepSeek TUI (#5713 wire support) | Stable OAuth/discovery, configurable timeouts, tool-count scaling, wire-protocol variants (Responses, Anthropic) |
| **Session durability & recovery** | Copilot CLI (#4165, #4664, #4663), OpenCode (#46215), Pi (#8843 lazy resume), Qwen Code (#8927 rotation), DeepSeek TUI (#5715) | Resume without OOM/hang, compaction robustness, crash-recovery visible to model, lazy JSONL parsing |
| **Windows/WSL first-class support** | Claude Code (#80444, #85199, #89599), OpenAI Codex (7/10 top issues), Copilot CLI (#4165), Pi (#8841, #8846), Qwen Code (#10538) | GPU crash/MSIX repair loops, sandbox path mapping, headless startup, conhost flashing, CUA driver panic |
| **Security / trust boundary hardening** | Qwen Code (#10427 4 holes), Gemini CLI (#26525 late redaction), DeepSeek TUI (#5723 NoNewPrivs), OpenCode (#34598 GLM routing) | Hook egress gating, cache metering audit, sandbox privilege calibration, provider routing transparency |
| **AST-aware / precision tooling** | Gemini CLI (#22745, #22746), OpenCode (implied by monorepo perf), Pi (extension SDK) | Method-level reads, structural search, hierarchical discovery, token/turn reduction |

---

## 4. Differentiation Analysis

| Dimension | Platform Plays (Claude, Codex, Copilot) | Specialized Contenders (Gemini, OpenCode, Pi, Qwen, DeepSeek) |
|-----------|------------------------------------------|---------------------------------------------------------------|
| **Target User** | Enterprise teams, generalist devs, IDE-integrated workflows | Power users, agent-builders, multi-agent researchers, OSS hackers |
| **Distribution** | MSIX (Windows Store), native installers, IDE extensions | npm/pip/cargo, binary releases, containerized runtimes |
| **Architecture** | Monolithic CLI + cloud backend (Anthropic/OpenAI/GitHub) | Modular crates/services (OpenCode, DeepSeek), local-first (Pi, Qwen) |
| **Differentiation** | **Claude**: CLAUDE.md rules, Auto Mode, Cowork cloud sessions<br>**Codex**: MCP extensibility, Vim motions, Rust core<br>**Copilot**: GitHub ecosystem, `.agents` convention, PR review integration | **Gemini**: Sub-agent/skill ecosystem, Auto Memory, AST-aware reads<br>**OpenCode**: Provider router abstraction, TUI-first, monorepo perf<br>**Pi**: `pi web` GUI, extension SDK, multimodal prompts<br>**Qwen**: Goal autonomy with budgets, WebShell ACP, cross-session inbox<br>**DeepSeek**: Crate decomposition, BYOK aggregators, TUI command shapes |
| **Risk Profile** | Vendor lock-in, opaque cloud behavior, update breakage | Fragmentation, maintenance burden, smaller ecosystems |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|------|-------|----------|
| **High Momentum / Maturing** | **OpenAI Codex**, **Gemini CLI**, **OpenCode**, **Pi**, **DeepSeek TUI** | 7–10 PRs/day, structured release cycles (nightly/alpha/stable), active issue triage, feature epics with multiple sub-tasks |
| **Stable but Reactive** | **Claude Code**, **GitHub Copilot CLI** | Fewer visible PRs; fixes ship via point releases; high-impact issues accumulate (Windows crashes, v1.0.81 regressions) |
| **Low Activity / Early** | **Kimi Code CLI**, **Grok Build** | <2 issues/PRs in 24h; Kimi has critical billing bug with no response; Grok silent |

**Maturity signals**: Codex (0.151.0 stable), Copilot (v1.0.82), Gemini (v0.59 nightly), DeepSeek (v0.9.12 RC) have versioned release trains. Claude Code lacks visible versioning in digest. OpenCode, Pi, Qwen operate on continuous merge-to-main.

---

## 6. Trend Signals for Technical Decision-Makers

| Trend | Signal Strength | Implication |
|-------|-----------------|-------------|
| **Windows is the compatibility tax** | 🔴 Critical | 4/10 tools list Windows/WSL as #1 pain point. MSIX, sandbox path mapping, and GPU crashes block enterprise adoption. Invest in Windows CI *now* or accept exclusion. |
| **MCP → standardized agent protocol** | 🟢 Strong | Codex 0.151.0 adds grace period + result interception; Copilot/Gemini/DeepSeek demand wire-protocol variants. MCP is becoming the *de facto* tool interface — design for it. |
| **Session state = new database** | 🟢 Strong | Compaction bugs (Codex #35355, Copilot #4663), resume OOM (Copilot #4664), lazy parsing (Pi #8843), cross-session inbox (Qwen #10542). Session durability is a competitive differentiator. |
| **Multi-agent is moving from demo → production** | 🟡 Emerging | Qwen's goal budgets, OpenCode's subagent sidebar, Gemini's skill autonomy, Pi's web GUI all target *observable, controllable* agent fleets. Expect "agent mesh" APIs in 2026 H2. |
| **Security hardening is non-negotiable** | 🔴 Critical | Qwen's 4 hook trust holes, Gemini's late redaction, DeepSeek's NoNewPrivs regression, OpenCode's GLM routing opacity. Enterprise buyers will audit these. |
| **Local-first / BYOK gaining traction** | 🟡 Emerging | DeepSeek's Concentrate/Eden AI providers, OpenCode's provider router request (#20235), Pi's profile isolation. Developers want model choice without vendor lock-in. |
| **TUI → Web GUI convergence** | 🟡 Emerging | Pi's `pi web` (full TUI parity via WebSocket), DeepSeek's header pods, Codex's floating pet. Hybrid frontends reduce terminal dependency. |

---

## Bottom Line for Decision-Makers

- **For enterprise standardization**: **OpenAI Codex** (MCP leadership, stable releases, Vim support) and **GitHub Copilot CLI** (ecosystem integration) lead — but both require Windows/WSL validation budgets.
- **For agent-centric workflows**: **Qwen Code** (goal autonomy + cross-session), **OpenCode** (provider abstraction + monorepo perf), **Gemini CLI** (skill ecosystem) offer the deepest primitives.
- **For extensibility/research**: **Pi** (extension SDK + web GUI), **DeepSeek TUI** (crate modularity + BYOK) provide the most hackable foundations.
- **Avoid** tools with unresolved critical bugs in your target environment (Claude Code on Windows, Kimi on metered plans, Qwen Computer Use on Windows).

*Data snapshot: 2026-08-30 community digests. All links point to live GitHub issues/PRs for verification.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report  
*Data as of 2026-08-30 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking — Most-Discussed PRs (5–8)

| # | Skill / PR | Functionality | Discussion Highlights | Status |
|---|------------|---------------|----------------------|--------|
| **#1628** | **Hivemind: Zero-Cost Multi-Agent Orchestration** | Delegates mechanical work to headless **opencode** workers (free models) while Claude Code remains planner/reviewer/merger. | Novel cost-optimization architecture; addresses “expensive model context is the scarce resource.” | 🟢 Open (2026-08-21) |
| **#1367** | **self-audit: Mechanical Verification + 4-Dimension Reasoning Gate** | Pre-delivery audit: Step 0 verifies every claimed output file exists; Steps 1–4 score reasoning on correctness, completeness, consistency, clarity (damage-severity priority). | Universal, stack-agnostic quality gate; ties to Issue #1385 (three-gate pipeline proposal). | 🟢 Open (2026-06-28) |
| **#568** | **ServiceNow Platform Skill** | Broad ServiceNow assistant covering ITSM, ITOM, ITAM/SAM, FSM, HRSD, SPM, SecOps, IntegrationHub, Vulnerability Response. | Longest-running skill PR (5 months); enterprise demand for platform-wide coverage vs. narrow scripting helpers. | 🟢 Open (2026-03-08) |
| **#723** | **testing-patterns** | Comprehensive testing stack: Trophy model, AAA pattern, React Testing Library, contract testing, E2E, property-based, mutation testing, flakiness detection. | Fills a gap in the marketplace for a unified testing methodology skill. | 🟢 Open (2026-03-22) |
| **#514** | **document-typography** | Prevents orphan/widow lines, widow paragraphs, numbering misalignment in AI-generated documents. | Addresses “every document Claude generates” pain point; low-effort, high-visibility quality fix. | 🟢 Open (2026-03-04) |
| **#486** | **ODT Skill** | Create, fill, read, convert OpenDocument Format (.odt, .ods); template filling, ODT→HTML parsing. | Open-standard document workflow; complements existing docx/pdf skills. | 🟢 Open (2026-03-01) |
| **#83** | **skill-quality-analyzer & skill-security-analyzer** | Meta-skills evaluating other skills across 5 dimensions (structure, examples, resources, security, maintainability). | “Skills that audit skills” — foundational for marketplace trust; references Issue #492 (namespace spoofing). | 🟢 Open (2025-11-06) |
| **#1615** | **scnet-hpc** | Profile-based SSH/Slurm workflows for SCNet HPC clusters: connection, partition, module, accelerator guidance, job generation, cluster discovery. | Niche but high-value for HPC users; recent submission with active iteration. | 🟢 Open (2026-08-20) |

> **Note:** PR comment counts are not exposed in the dataset; ranking weighs *issue cross-references*, *discussion duration*, *👍 on linked issues*, and *recency of updates*.

---

## 2. Community Demand Trends — From Issues

| Theme | Evidence (Issue #, Comments, 👍) | Core Ask |
|-------|----------------------------------|----------|
| **Trust & Security Boundaries** | **#492** (43 💬, 2 👍) — Community skills published under `anthropic/` namespace impersonate official skills. | Namespace isolation, verified publisher badges, install-time trust signals. |
| **Org-Wide Skill Sharing** | **#228** (16 💬, 8 👍) — No native sharing; manual .skill file exchange via Slack/Teams. | Shared skill library, one-click org install, versioned updates. |
| **Evaluation & Trigger Reliability** | **#556** (12 💬, 7 👍) — `run_eval.py` reports 0% trigger rate; `claude -p` never invokes skills. <br> **#1390** (4 💬) — `mcp-builder` evaluation scores 0/N (TextContent not JSON-serializable). | Fix `skill-creator` evaluation harness; make trigger detection deterministic on Windows/Linux. |
| **Skill Duplication & Marketplace Hygiene** | **#189** (6 💬, 9 👍) — `document-skills` & `example-skills` install identical content → duplicates in context. | Deduplication, clear plugin boundaries, marketplace curation. |
| **Context Window Management** | **#1487** (4 💬) — `claude-api` skill injects ~156k tokens in one call, exhausting context. | Lazy-loading, token-budget-aware skill design, partial-reference injection. |
| **MCP / Bedrock / Cross-Platform** | **#16** (4 💬) — Expose skills as MCPs. <br> **#29** (4 💬) — Bedrock support. <br> **#1050/#1099** — Windows subprocess/encoding fixes. | First-class MCP packaging, Bedrock-compatible distribution, Windows parity. |
| **Reasoning Quality Gates** | **#1385** (4 💬, 1 👍) — 3-gate pipeline: Pre-task Calibration → Adversarial Review → Delivery Verification. <br> **#1367** (PR) — Implements mechanical + 4-dim audit. | Built-in, configurable quality gates for agent output. |

---

## 3. High-Potential Pending Skills — Active PRs Likely to Land Soon

| PR | Skill | Why It Has Momentum |
|----|-------|---------------------|
| **#1628** | Hivemind (Multi-Agent Orchestration) | Addresses cost/context scarcity; novel architecture; very recent, active author. |
| **#1367** | self-audit (Quality Gate) | Directly implements Issue #1385 proposal; universal applicability; high engagement. |
| **#723** | testing-patterns | Fills a clear methodology gap; broad appeal across languages/frameworks. |
| **#568** | ServiceNow | Enterprise demand; 5-month iteration shows commit; covers full platform surface. |
| **#514** | document-typography | Low complexity, high visibility fix for *every* generated document. |
| **#486** | ODT | Completes the open-standard document triad (docx/pdf/odt). |
| **#83** | skill-quality-analyzer / skill-security-analyzer | Meta-layer for marketplace trust; addresses Issue #492 security concern. |
| **#1615** | scnet-hpc | Niche but complete; recent updates suggest active maintainer. |

---

## 4. Skills Ecosystem Insight — One-Sentence Summary

> **The community’s most concentrated demand is for *trustworthy, composable, and evaluatable skills*: they want a secure namespace, reliable trigger/evaluation tooling, org-level distribution, and built-in quality gates so that skills can be safely shared, automatically tested, and confidently composed into multi-agent workflows without context-window exhaustion or namespace spoofing.**

---

# Claude Code Community Digest — 2026-08-30

## Today's Highlights

No new releases shipped today. The community's attention is concentrated on **Windows desktop stability crises** — GPU process crashes leaving MSIX packages unlaunchable until Repair, "always-on-top" window bugs, and silent update failures that orphan child processes. A parallel thread reveals **Auto Mode's Bash-first steering regression** silently overriding the Edit/Write toolchain and disabling nested CLAUDE.md rules. One new PR adds troubleshooting docs for a Cowork queue race condition.

---

## Releases

*No releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#80444](https://github.com/anthropics/claude-code/issues/80444) | **Windows Desktop: Fatal GPU-process crash (0x060C201E) in Browser tab → MSIX unlaunchable until Repair** | Blocks all Windows Store users; crash corrupts package state (appxState=2). Reproduced on two NVIDIA driver versions. | 78 comments, 14 👍 — highest engagement in dataset |
| [#85199](https://github.com/anthropics/claude-code/issues/85199) | **Windows Desktop: Repeated crashes requiring "Advanced Options → Repair"** | Confirms #80444 is widespread; users stuck in reinstall/repair loops. | 40 comments, 6 👍 |
| [#9631](https://github.com/anthropics/claude-code/issues/9631) | **Feature: Microsoft Word (.docx) editing with track changes** | Top-voted enhancement (31 👍); unlocks legal/enterprise workflows. | 26 comments, 31 👍 |
| [#88041](https://github.com/anthropics/claude-code/issues/88041) | **Auto-mode "bashFirst" prompt forces sed/heredoc edits instead of Edit/Write tools** | Hardcoded in CLI binary; undermines toolchain design and path-scoped rules. | 13 comments, 26 👍 |
| [#87971](https://github.com/anthropics/claude-code/issues/87971) | **Auto Mode abuses bash tools for reads/writes/edits on Windows** | Duplicate of #88041 from Windows/VS Code perspective; confirms cross-platform regression. | 8 comments, 38 👍 |
| [#88093](https://github.com/anthropics/claude-code/issues/88093) | **Windows Desktop: Window stays always-on-top** | Breaks multitasking; no workaround. | 11 comments, 19 👍 |
| [#65844](https://github.com/anthropics/claude-code/issues/65844) | **macOS Fullscreen TUI: Cmd+C intercepted, breaks mouse copy** | Long-standing (since Jun 2026); affects all OSC 8 terminals. | 9 comments, 22 👍 |
| [#89599](https://github.com/anthropics/claude-code/issues/89599) | **Windows MSIX: Idle stealth update quits app, child process survives, register fails 0x80073D02** | Silent update mechanism leaves app unlaunchable until hidden process killed. | 5 comments |
| [#90680](https://github.com/anthropics/claude-code/issues/90680) | **Fable 5 safeguard false-positive blocks writing regression test for own security fix** | Safety system blocks legitimate security work; recovery UI causes silent model downgrade. | 4 comments |
| [#89731](https://github.com/anthropics/claude-code/issues/89731) | **Auto mode's Bash-first steering reverses 2.1.21/2.1.31 fix** | Regression: previous versions *fixed* this exact behavior; now reintroduced. | 3 comments, 3 👍 |

---

## Key PR Progress

| # | PR | Description |
|---|----|-------------|
| [#61720](https://github.com/anthropics/claude-code/pull/61720) | **Docs: Troubleshooting for Cowork queue not spawning follow-up turn** | Documents race condition between queue post-turn handler and rate-limit handler (closes #61718). Only PR updated in last 24h. |

---

## Feature Request Trends

1. **Document editing parity** — #9631 (31 👍) leads demand for native `.docx` track-changes support; signals enterprise/legal adoption pressure.
2. **Auto Mode toolchain alignment** — Multiple issues (#88041, #87971, #89731, #90450) converge on: *stop forcing Bash/heredocs; honor Edit/Write/Read tools and CLAUDE.md scoping*.
3. **Windows desktop reliability** — Crash/repair loops (#80444, #85199, #89599, #89679), always-on-top (#88093), and update mechanics dominate Windows feedback.
4. **Cross-platform TUI polish** — macOS copy/paste (#65844), Linux Ctrl+click double-open (#82078), bare-URL linkifier CJK bugs (#78267).
5. **Scheduled/background execution trust** — Background bash false exit codes (#90659), scheduled tasks ignoring unattended framing (#89632), macOS scheduled-task wedge (#89639).

---

## Developer Pain Points

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Windows MSIX package fragility** | 4+ high-comment issues on GPU crashes, repair loops, stealth-update orphans, freeze-vanish crashes | Windows Store users effectively blocked; requires manual Repair/kill hidden processes |
| **Auto Mode ignores first-class tools** | Hardcoded `bashFirst` prompt in CLI binary overrides Edit/Write/Read; disables nested CLAUDE.md | Developers lose confidence in "native" toolchain; workarounds require manual prompt injection |
| **Fable 5 safeguard false positives** | Blocks writing regression tests for *already-shipped* security fixes; silent downgrade on recovery | Security teams cannot use Claude to verify their own patches |
| **Cowork/cloud session reliability** | Queue race conditions (#61718), GitHub repo access broken (#84581), model selection reverts (#87440) | Team/collaborative workflows unreliable |
| **Diagnosability gaps** | Context limits + custom base URLs + silent misconfigurations cost "several months" debugging (#82931) | No visibility into why model behaves differently; opaque failure modes |
| **macOS keychain credential loop** | SecurityAgent prompt stack never resolves; "Always Allow" doesn't persist (#87348) | Re-authentication friction on every session |

---

*Data sourced from `github.com/anthropics/claude-code` — Issues/PRs updated 2026-08-30.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-30

---

## 1. Today's Highlights

The 0.151.0 stable release ships MCP hardening: a configurable grace period for optional server discovery and a new extension point to inspect or mutate MCP tool results before they reach the model. Meanwhile, Windows/WSL instability dominates the issue tracker — seven of the top ten hottest issues involve sandbox handshake failures, path-mapping mismatches, or headless-startup regressions on the Desktop app. A batch of seven merged PRs cleans up Rust packaging (rules_rs platforms, asset directories) and fixes session-state bugs (turn lineage, thread cwd restoration, diagnostic uploads).

---

## 2. Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **rust-v0.151.0** | Stable | • Configurable grace period for discovering tools from optional MCP servers (#41199)<br>• Extensions can now inspect or replace MCP tool results before they reach the model (#41202)<br>• Plugin catalogs combine per-repository configuration and report invalid marketplace entries |
| **rust-v0.152.0-alpha.1** | Alpha | Pre-release for next feature cycle |
| **rust-v0.151.0-alpha.7.2** | Alpha | Incremental alpha update |

---

## 3. Hot Issues (Top 10 by Community Signal)

| Issue | Area | Why It Matters | Community Signal |
|-------|------|----------------|------------------|
| [#25828](https://github.com/openai/codex/issues/25828) | Auth / CLI | Phone verification completely blocks login for users in Indonesia; no workaround after weeks | 28 comments · 5 👍 |
| [#29639](https://github.com/openai/codex/issues/29639) | Windows / WSL / MCP | WSL workspace + Windows Desktop app = broken `node_repl` sandbox (`sandboxCwd` path mismatch) | 16 comments · 3 👍 |
| [#39280](https://github.com/openai/codex/issues/39280) | macOS / Browser | Chrome extension claims tabs but all real-page actions fail policy verification | 13 comments · 4 👍 |
| [#34971](https://github.com/openai/codex/issues/34971) | Context / Performance | Long sessions re-process massive cached context → latency spikes, JSONL bloat, credit burn | 11 comments |
| [#41290](https://github.com/openai/codex/issues/41290) | Windows / WSL | Switching Agent Environment to WSL breaks project create/remove entirely | 10 comments · 3 👍 |
| [#41241](https://github.com/openai/codex/issues/41241) | Windows / Tool-host | Local tool host exits during handshake after Store update; `node_repl.exe` fails | 9 comments |
| [#36087](https://github.com/openai/codex/issues/36087) | Windows / Sandbox | Intermittent `helper_unknown_error` applying deny-read ACLs in workspace-write mode | 9 comments · 1 👍 |
| [#41465](https://github.com/openai/codex/issues/41465) | Windows / UI | Floating pet remains click-through and undraggable (regression in 26.825.x) | 7 comments · 1 👍 |
| [#41540](https://github.com/openai/codex/issues/41540) | Windows / Startup | Headless startup ~12 min after auto-update: `node_repl.exe` relocation failure (0x80071770) | 7 comments |
| [#35355](https://github.com/openai/codex/issues/35355) | Model / Context | Compaction promotes partial output from interrupted commands into confirmed task state | 6 comments |

---

## 4. Key PR Progress (All 7 Merged in Last 24h)

| PR | Category | Summary |
|----|----------|---------|
| [#41586](https://github.com/openai/codex/pull/41586) | Editor UX | Adds Vim search motions (`/`, `?`, `n`, `N`) to composer with operator support (delete/change/yank) |
| [#41570](https://github.com/openai/codex/pull/41570) | Multi-agent | Fixes grammar in proactive multi-agent instructions |
| [#41569](https://github.com/openai/codex/pull/41569) | Observability | Hardens diagnostic report uploads: core event first, then gzipped attachments with size bounds & truncation |
| [#41567](https://github.com/openai/codex/pull/41567) | Session State | Restores thread `cwd` from owned settings snapshots (handles forked history & compaction edge cases) |
| [#41562](https://github.com/openai/codex/pull/41562) | Session State | Preserves turn lineage across automatic goal continuations; strips stale lineage on external input/edits |
| [#41477](https://github.com/openai/codex/pull/41477) | Build / Packaging | Moves embedded Rust resources (`core`, `tui`) under dedicated asset directories; separates from source/test fixtures |
| [#41476](https://github.com/openai/codex/pull/41476) | Build / Release | Switches multi-platform release binaries to `rules_rs` platform definitions (replaces LLVM triples) |

---

## 5. Feature Request Trends

1. **Async event injection into live sessions** — #33556 (5 👍) asks for webhooks/file-watchers to push turns into *visible* sessions, not just headless remote-control threads.
2. **First-party session recovery** — #40779 requests a reindex tool when conversations vanish from UI but JSONL persists on disk.
3. **MCP extensibility** — 0.151.0 delivers two highly requested hooks: grace-period config and pre-model tool-result interception.
4. **Cross-platform parity** — Repeated demand for Windows/WSL/macOS feature parity (browser, sandbox, tool-host, pet overlay).
5. **Vim keybindings** — Now shipped in #41586; was a long-standing composer request.

---

## 6. Developer Pain Points (Recurring Themes)

| Pain Point | Representative Issues | Frequency |
|------------|----------------------|-----------|
| **Windows/WSL integration broken** | #29639, #41290, #41241, #36087, #41540, #41539, #41093, #41592 | 8/30 top issues |
| **Authentication / phone verification** | #25828 | High impact (blocks access) |
| **Session/context corruption** | #34971, #35355, #40779, #35804, #41594 | 5/30 top issues |
| **Memory/performance regressions** | #41240 (5+ GB in blank chat), #24458 (macOS browser CPU) | 2 critical reports |
| **Browser automation failures** | #39280 (macOS policy), #24458 (React app crashes) | 2 platforms affected |
| **Sandbox/permission model bugs** | #36087 (ACLs), #38097 (managed FS profile), #15053 (asyncio EPERM) | 3 distinct sandbox issues |
| **Store/auto-update breakage** | #41540, #41539, #41241, #41093 | 4 issues tied to MSIX updates |

> **Bottom line:** The 0.151.0 MCP improvements are welcome, but the Windows/WSL/Desktop app stability cluster represents the single largest friction surface for developers right now.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-30

---

## 1. Today's Highlights

The project shipped **v0.59.0-nightly** with a focus on hook migration fixes (timeout unit conversion, event-name casing) and a core I/O refactor routing `read_file` through `FileSystemService` for ACP compatibility. Meanwhile, the issue backlog highlights three systemic pain points: **sub-agent reliability** (false success reporting, hangs, under-utilization), **Auto Memory quality** (infinite retries, redaction gaps), and **terminal/shell UX** (stuck commands, scrollback clearing, Wayland browser failures).

---

## 2. Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| [v0.59.0-nightly.20260830.g0bd1d4397](https://github.com/google-gemini/gemini-cli/releases/tag/v0.59.0-nightly.20260830.g0bd1d4397) | Nightly | Automated version bump; includes merged fixes for hook migration (timeout ms/s, `SubagentStop` casing), `read_file` filesystem service routing, auth error false positives, preview-model silent substitution warning, and a batch of new behavioral evals (task tracker, multi-tool chains, security boundaries). |

---

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent reports GOAL success after hitting MAX_TURNS** | Masks real failures; breaks trust in autonomous delegation. | 13 comments, 2 👍 — P1, needs retesting |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent hangs indefinitely** | Blocks core workflows; workaround is disabling sub-agents entirely. | 8 comments, 8 👍 — P1, high user impact |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell commands stuck at “Waiting input” after completion** | Frequent false “awaiting user input” state stalls automation. | 4 comments, 3 👍 — P1, core UX regression |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | **Gemini rarely invokes custom skills/sub-agents autonomously** | Undermines extensibility model; users must explicitly prompt. | 6 comments — P2, adoption blocker |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | **Auto Memory retries low-signal sessions forever** | Wastes compute, pollutes memory index with noise. | 5 comments — P2, background system health |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | **Auto Memory redaction happens post-model; logs leak secrets** | Security risk: secrets enter model context & service logs. | 4 comments — P2, security hardening |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **EPIC: Assess AST-aware file reads/search/mapping** | Strategic investment: could cut tokens/turns & improve precision. | 7 comments, 1 👍 — P2, long-term leverage |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | **Browser subagent fails on Wayland** | Linux/Wayland users blocked from web automation. | 4 comments, 1 👍 — P1, platform gap |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | **Browser Agent ignores `settings.json` overrides (e.g., maxTurns)** | Configuration drift; users cannot tune sub-agent limits. | 3 comments — P2, config system bug |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | **400 error when >128 tools registered** | Hard tool-count ceiling limits extensibility. | 3 comments — P2, scalability limit |

---

## 4. Key PR Progress (Top 10 by Impact)

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#29125](https://github.com/google-gemini/gemini-cli/pull/29125) | OPEN | **Hook timeout unit fix**: Converts migrated Claude `timeout: 30` (seconds) → 30000 ms; prevents 30 ms timeouts. |
| [#29124](https://github.com/google-gemini/gemini-cli/pull/29124) | OPEN | **Hook event-name casing**: Fixes `SubAgentStop` → `SubagentStop` mapping so migrated `SubagentStop` hooks actually fire. |
| [#29110](https://github.com/google-gemini/gemini-cli/pull/29110) | OPEN | **`read_file` via FileSystemService**: Enables ACP clients to intercept reads; aligns with `write_file`/`replace` pattern. |
| [#28827](https://github.com/google-gemini/gemini-cli/pull/28827) | CLOSED | **Auth error false-positive fix**: Stops treating stray “401” in port numbers/exit codes as auth failures. |
| [#28828](https://github.com/google-gemini/gemini-cli/pull/28828) | CLOSED | **Preview-model silent substitution warning**: Now emits warning when requested preview model falls back to `auto-gemini-2.5`. |
| [#28823](https://github.com/google-gemini/gemini-cli/pull/28823) | CLOSED | **Evals: task-graph deps, visualization, file/shell error recovery** — expands behavioral test coverage. |
| [#28824](https://github.com/google-gemini/gemini-cli/pull/28824) | CLOSED | **Evals: multi-tool chains, large-file context safety, security boundaries** — hardens reliability & safety. |
| [#28822](https://github.com/google-gemini/gemini-cli/pull/28822) | CLOSED | **Evals: todo/task tracker CRUD** — validates new persistent task-tracking flow. |
| [#28967](https://github.com/google-gemini/gemini-cli/pull/28967) | OPEN | **Terminal scrollback fix**: Removes `clearTerminal` ANSI escape on static refresh in standard buffer mode. |
| [#28968](https://github.com/google-gemini/gemini-cli/pull/28968) | OPEN | **Dedupe symlinked skills dirs**: Prevents double-scanning `.gemini/skills` ↔ `.agents/skills` junctions on Windows. |

---

## 5. Feature Request Trends

1. **Sub-agent & Skill Ecosystem Maturity**  
   - Autonomous skill/sub-agent invocation ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968))  
   - Trajectory visibility & sharing ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598))  
   - Configurable limits honored ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267))  
   - Symlink support for agent definitions ([#20079](https://github.com/google-gemini/gemini-cli/issues/20079))

2. **AST-Aware & Precision Tooling**  
   - Method-level reads, structural search, codebase mapping ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746))  
   - “Tactful Extraction” hierarchical discovery ([#19561](https://github.com/google-gemini/gemini-cli/issues/19561))

3. **Persistent, File-Backed Task Tracking**  
   - Replace in-context `WriteToDo` with CRUD file store ([#18836](https://github.com/google-gemini/gemini-cli/issues/18836), [#21000](https://github.com/google-gemini/gemini-cli/issues/21000))

4. **Auto Memory Hardening**  
   - Deterministic redaction, retry quotas, invalid-patch quarantine ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523), [#26525](https://github.com/google-gemini/gemini-cli/issues/26525))

5. **Browser Agent Resilience**  
   - Profile lock recovery, Wayland support, config overrides ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232), [#21983](https://github.com/google-gemini/gemini-cli/issues/21983), [#22267](https://github.com/google-gemini/gemini-cli/issues/22267))

---

## 6. Developer Pain Points (Recurring Themes)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Sub-agent false success / silent hangs** | #22323 (MAX_TURNS → GOAL), #21409 (generalist hang), #21763 (bugreport lacks sub-agent context) | High — 3 P1 issues, multiple “need-retesting” tags |
| **Shell/terminal UX glitches** | #25166 (stuck “Waiting input”), #22465 (Vite interactive prompt), #28967 (scrollback clear), #21924 (resize flicker) | High — core daily-driver friction |
| **Auto Memory noise & security** | #26522 (infinite retries), #26525 (late redaction), #26523 (invalid patches) | Medium — background system reliability |
| **Tool-count ceiling & discovery** | #24246 (>128 tools → 400), #28968 (symlink double-scan) | Medium — extensibility scaling |
| **Config drift / ignored settings** | #22267 (browser agent ignores settings.json), #28966/#28965 (excludeTools docs/examples wrong) | Medium — trust in config system |
| **Platform gaps (Wayland, Windows junctions)** | #21983 (Wayland browser), #28968 (junction dedupe) | Niche but blocking for affected users |

---

*Generated from `google-gemini/gemini-cli` GitHub data (2026-08-30 00:00–23:59 UTC). Links point to live issues/PRs.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-30

---

## 1. Today's Highlights
Two patch releases (v1.0.82 and v1.0.82-2) shipped yesterday, fixing a worktree-switch regression and adding a Ctrl+E shortcut to re-expand plan cards. Meanwhile, the issue tracker shows a cluster of regressions introduced in v1.0.81—MCP compatibility breaks, OAuth discovery failures, and a new heap-OOM crash on long-session resume—signaling a turbulent upgrade cycle for extension authors and enterprise users.

---

## 2. Releases
| Version | Date | Key Changes |
|---------|------|-------------|
| **v1.0.82** | 2026-08-29 | • Typing during `/worktree` or `/move` prep no longer breaks the switch<br>• `Ctrl+E` re-expands the plan approval card to show the full plan<br>• Auth failures now surface the specific HTTP error (e.g., `401 Bad credentials`) instead of a generic `/login` prompt |
| **v1.0.82-2** | 2026-08-29 | Hotfix duplicating the two UI fixes above (no new changes listed) |

[Release v1.0.82](https://github.com/github/copilot-cli/releases/tag/v1.0.82) · [Release v1.0.82-2](https://github.com/github/copilot-cli/releases/tag/v1.0.82-2)

---

## 3. Hot Issues (10 Noteworthy)

| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#4027](https://github.com/github/copilot-cli/issues/4027) | **Tool 'str_replace' does not exist** | Recurring Java editing failure; forces fallback to diff tool, slowing coding loops. | **13 👍** – highest reaction count in this batch |
| [#4647](https://github.com/github/copilot-cli/issues/4647) | **v1.0.81 broke compatibility with chroma-mcp** | Blocks a popular vector-store MCP server; indicates MCP surface regression. | 2 comments, active triage |
| [#4660](https://github.com/github/copilot-cli/issues/4660) | **Remote ADO MCP server OAuth fails in v1.0.81 WAM implementation** | Enterprise Azure DevOps integration broken; `/mcp auth` yields “Authentication Failed”. | 1 comment, triage |
| [#4664](https://github.com/github/copilot-cli/issues/4664) | **Heap out of memory when resuming long-standing session** | Hard crash on session resume; V8 heap ~2 GB before OOM. Blocks power users with large histories. | New, 0 comments |
| [#4663](https://github.com/github/copilot-cli/issues/4663) | **Failed compaction retried unchanged every turn** | Unbounded billed retries, monotonic context growth, no user-visible error. Cost & reliability risk. | New, filed by Microsoft engineer |
| [#4662](https://github.com/github/copilot-cli/issues/4662) | **AgentHost MCP OAuth metadata discovery fails with path component in issuer URL** | Breaks OAuth for any provider using non-root issuer paths (e.g., `mcp.example.com/oauth`). | New, 0 comments |
| [#4165](https://github.com/github/copilot-cli/issues/4165) | **`copilot --resume` hangs at “Resuming session” on Windows cold start** | Windows-only TUI freeze; workaround exists but degrades UX. | 4 comments, 1 👍 |
| [#4553](https://github.com/github/copilot-cli/issues/4553) | **Infinite loop & `apply_patch` failure due to JSON-wrapping error** | Model emits malformed patch payload; CLI retries identical payload endlessly. | 0 comments, but high severity |
| [#2955](https://github.com/github/copilot-cli/issues/2955) | **`/allow-all` does not suppress bash tool prompts** | Permission dialog still appears for every shell command despite global allow. | 1 👍, long-standing (Apr) |
| [#4204](https://github.com/github/copilot-cli/issues/4204) | **Add `.agents` discovery for instructions, agents, hooks in any opened folder** | Feature request to unify customization convention beyond Git repos. | 2 comments, design discussion |

---

## 4. Key PR Progress

| # | Title | Status | Impact |
|---|-------|--------|--------|
| [#2381](https://github.com/github/copilot-cli/pull/2381) | **install: add fish shell support for PATH configuration** | **CLOSED** | Fixes silent PATH misconfiguration for fish users; removes POSIX `export` fallback that fish ignores. |
| [#4659](https://github.com/github/copilot-cli/pull/4659) | **Initial commit with exported changes from codespace** | OPEN | Appears to be a codespace export test; no functional change yet. |

Only two PRs updated in the window—one merged (fish shell), one trivial. Core fixes are landing directly via releases.

---

## 5. Feature Request Trends
1. **Unified `.agents` convention** ([#4204](https://github.com/github/copilot-cli/issues/4204)) – Users want a single folder (`.agents/`) to hold instructions, agents, hooks, and skills, discoverable in any workspace, not just Git repos.  
2. **MCP ecosystem parity** – Multiple issues (#4647, #4660, #4662) demand stable OAuth & discovery for remote MCP servers, especially Azure DevOps and path-based issuers.  
3. **Session durability** – Resume reliability (Windows hang #4165, OOM #4664) and compaction robustness (#4663) are top asks for long-running workflows.  
4. **Permission granularity** – `/allow-all` should truly suppress all shell prompts ([#2955](https://github.com/github/copilot-cli/issues/2955)).

---

## 6. Developer Pain Points
- **v1.0.81 regression wave**: MCP breaks, OAuth failures, and new memory/loop bugs make teams hesitant to upgrade.  
- **Java editing friction**: Missing `str_replace` tool forces fallback loops (#4027, 13 👍).  
- **Windows TUI instability**: `--resume` hang (#4165) and lack of visibility into resume progress.  
- **Silent failure modes**: Compaction retries (#4663) and patch loops (#4553) burn tokens/context without user feedback.  
- **Shell integration gaps**: Fish support just landed (#2381); other non-POSIX shells may have similar issues.

---

*Generated from github/copilot-cli data as of 2026-08-30. Links point to live GitHub items.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-30

## 1. Today's Highlights
No new releases or pull requests in the last 24 hours. The sole updated issue (#2626) reports a critical billing anomaly where `cache_read` tokens are charged on every turn while `cache_creation` remains zero, causing >10× quota amplification for a paying annual subscriber. Community attention is focused on this potential metering bug.

## 2. Releases
*No new releases published in the last 24 hours.*

## 3. Hot Issues

| # | Title | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#2626](https://github.com/MoonshotAI/kimi-cli/issues/2626) | **Abnormal quota consumption: cache_read billed every turn with cache_creation always 0 (>10x amplification)** | Directly impacts paying customers' quota limits; suggests a cache-metering logic error that could affect all users on metered plans. | 1 comment (author follow-up), 0 upvotes — low visibility but high severity for affected subscribers. |

*Only one issue updated in the last 24h; no other noteworthy issues in this window.*

## 4. Key PR Progress
*No pull requests updated in the last 24 hours.*

## 5. Feature Request Trends
Insufficient data from the last 24h to identify trends. Historically, the repo sees requests around:
- Improved caching / token accounting transparency
- Better quota observability (real-time dashboards, alerts)
- Offline / local-first execution modes
- Expanded language / framework templates

## 6. Developer Pain Points
**From today’s single high-signal issue:**
- **Opaque quota accounting**: Developers cannot verify cache behavior (`cache_creation` stuck at 0) and see unexplained `cache_read` charges.
- **Lack of real-time usage visibility**: The user discovered the drain only after losing ~40% of a 5-hour window in minutes.
- **Support responsiveness**: Issue filed directly to GitHub rather than a dedicated billing-support channel, suggesting friction in escalation paths.

---

*Digest generated from GitHub data for MoonshotAI/kimi-cli covering 2026-08-29 → 2026-08-30.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-30

## 1. Today's Highlights
No new releases shipped today. The team closed **15+ issues and PRs** focused on TUI stability, provider correctness (Bedrock, DeepSeek, GLM), and desktop app fixes. A cluster of PRs targets performance regressions in large monorepos (unbounded concurrency, FFF initialization blocking, MCP subprocess duplication). Community discussion centers on model routing ignore bugs in Xcode ACP integration and inference access blocks despite valid credentials.

## 2. Releases
**No releases published in the last 24 hours.**

## 3. Hot Issues (10 Noteworthy)

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| [#34743](https://github.com/anomalyco/opencode/issues/34743) **Xcode 27 beta ACP ignores `opencode.json` model config** | Breaks custom model routing for macOS/iOS devs using Xcode integration; model falls back to `big-pickle` despite explicit config. | 16 comments, 0 👍 — active debugging, affects workflow on latest Xcode beta |
| [#46219](https://github.com/anomalyco/opencode/issues/46219) **API inference blocked (401 `INFERENCE_ACCESS_BLOCKED`) while catalog works** | Valid API keys fetch model catalogs but inference rejected; suggests authz logic divergence between catalog and inference paths. | 3 comments, fresh today — potential billing/quota edge case |
| [#20235](https://github.com/anomalyco/opencode/issues/20235) **Request GitHub Copilot auto model routing API access** | High-demand feature: users want OpenCode to leverage Copilot's model router (`/models/session`) instead of manual selection. | 8 comments, **29 👍** — strongest community upvote in this batch |
| [#41249](https://github.com/anomalyco/opencode/issues/41249) **Live Subagents sidebar for TUI** | External plugin (`opencode-subagents-view`) exists; request to upstream into core TUI for agent observability. | 6 comments, new plugin ecosystem signal |
| [#27661](https://github.com/anomalyco/opencode/issues/27661) **Home/End keys scroll message list instead of moving cursor** | Basic text editing broken in TUI input; high friction for long prompts. | 6 comments, **8 👍** — UX papercut affecting daily use |
| [#34598](https://github.com/anomalyco/opencode/issues/34598) **GLM-5.2 routes to Alibaba Cloud with content filtering, no ToS disclosure** | Privacy/compliance risk: user content scanned by third party without consent notice. | 5 comments, 1 👍 — trust & safety concern |
| [#43477](https://github.com/anomalyco/opencode/issues/43477) **Muse model fails: "Endpoint is unavailable"** | Upstream endpoint regression for a supported model; blocks users on that provider. | 4 comments, fresh (Aug 19) |
| [#23900](https://github.com/anomalyco/opencode/issues/23900) **LM Studio remote host connection fails** | Only works via localhost port-forward; limits team/remote dev setups. | 4 comments, longstanding (Apr) |
| [#24795](https://github.com/anomalyco/opencode/issues/24795) **Allow editing "always" permission pattern before confirm** | Auto-generated permission patterns often over-broad; users want to refine before persisting. | 4 comments, **6 👍** — security/usability balance |
| [#46217](https://github.com/anomalyco/opencode/issues/46217) **`system-reminder` duplicates uncontrolled (hundreds/thousands of copies)** | Session bloat from runaway reminder injection; degrades performance and context. | 2 comments, fresh today — Spanish report, likely i18n-related |

## 4. Key PR Progress (10 Important)

| PR | Type | Summary |
|----|------|---------|
| [#46218](https://github.com/anomalyco/opencode/pull/46218) | **Fix (ai)** | Preserve forced reasoning signature on `message_stop`; retain provider metadata namespacing for Bedrock/Responses API correctness. |
| [#46215](https://github.com/anomalyco/opencode/pull/46215) | **Fix (app, 2.0)** | Recover sessions with unavailable locations: show transcript, replace composer with recovery UI (choose directory, retry). |
| [#46214](https://github.com/anomalyco/opencode/pull/46214) | **Fix (core, perf)** | Bound `ProjectCopy.refresh` concurrency (was `unbounded`), add no-change fast path; fixes CPU thrashing on large repos (S×R git processes). |
| [#46211](https://github.com/anomalyco/opencode/pull/46211) | **Fix (core, perf)** | Defer FFF (Fast File Finder) native lib init to avoid 50+s blocking scan during cold location acquisition. |
| [#46210](https://github.com/anomalyco/opencode/pull/46210) | **Fix (mcp, perf)** | Share identical MCP subprocesses across Locations via global pool; eliminates 5×3=15 → 3 subprocesses for 5 locations × 3 MCP servers. |
| [#46193](https://github.com/anomalyco/opencode/pull/46193) | **Fix (ai)** | Fail Bedrock Converse streams on `malformed_model_output`/`malformed_tool_use` instead of silent success; surface `InvalidProviderOutput`. |
| [#43362](https://github.com/anomalyco/opencode/pull/43362) | **Fix (ai)** | Preserve Responses API reasoning state: project reasoning items canonically, retain replay-safe metadata for stateless continuation. |
| [#46202](https://github.com/anomalyco/opencode/pull/46202) | **Fix (tui)** | Scope `reasoning-effort` variant to agent (not model); seed from agent config frontmatter (`variant: low|max`). |
| [#46205](https://github.com/anomalyco/opencode/pull/46205) | **Refactor (session-ui)** | Extract shared `ToolHeader` component for timeline rows; unifies Read/Grep/Glob/List, Shell, Webfetch, Edit/Write, reasoning, tool-group summaries. |
| [#46200](https://github.com/anomalyco/opencode/pull/46200) | **Fix (app, iOS PWA)** | Inset navigation below native chrome: keep `viewport-fit=cover`, add safe-area padding, 32px extra top clearance for landscape. |

## 5. Feature Request Trends
1. **Model routing abstraction** — Users want OpenCode to integrate with provider routers (Copilot `/models/session`, #20235) rather than manual model pinning.
2. **Agent/Subagent observability** — Live sidebar for subagents (#41249), per-agent reasoning effort (#46202), session state freshness polling (#33783).
3. **Permission UX refinement** — Edit "always" patterns pre-confirm (#24795), granular control over tool approvals.
4. **Desktop app polish** — Minimize-to-tray/close confirmation (#27463), custom install path (#34664), iOS PWA safe insets (#46200).
5. **Plan mode configurability** — Custom plans directory, opt-out of plugin dependency installs (#46199).

## 6. Developer Pain Points
- **Xcode ACP model config ignored** — Custom models via `opencode.json` not respected in Xcode 27 beta (#34743).
- **Inference authz mismatch** — Catalog accessible but inference returns 401 `INFERENCE_ACCESS_BLOCKED` (#46219).
- **TUI input basics broken** — Home/End scroll message list instead of cursor movement (#27661).
- **Provider routing opacity** — GLM models silently route to Alibaba Cloud with content scanning, no disclosure (#34598).
- **Session corruption from malformed XML** — Embedded `<｜DSML｜tool_calls>` tags break session reload (#34695).
- **Monorepo performance cliffs** — Unbounded concurrency in `ProjectCopy.refresh`, synchronous FFF scan, MCP subprocess multiplication (#46214, #46211, #46210).
- **System reminder spam** — Uncontrolled duplication bloats context (#46217).
- **Remote LM Studio unsupported** — Only works via localhost tunnel (#23900).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-30

## 1. Today's Highlights
The Pi coding agent saw a surge of bug fixes and polish work over the past day, with 10 PRs merged addressing regressions in 0.84.3–0.84.4 (markdown rendering, thinking trail breaks, Windows path normalization, provider edge cases). Community focus remains on TUI stability (#8584 row corruption after long tool output), Mac CPU spikes in long sessions (#7730), and multimodal prompt support (#3200). A major `pi web` GUI PR (#8840) landed, delivering full TUI parity via a local WebSocket server.

## 2. Releases
No new releases in the last 24 hours.

## 3. Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#8584](https://github.com/earendil-works/pi/issues/8584) | **TUI row corruption during streaming** — assistant text renders one word per line after long tool output | Blocks core UX; appears after wide tool output (e.g., `sed` on wide files). 25 comments, 9 👍. | Active debugging; users confirm frequent occurrence. |
| [#7730](https://github.com/earendil-works/pi/issues/7730) | **High CPU on macOS with long sessions** (50–110%, 600–800 MB) | Performance regression tied to context/session length; affects Mac users heavily. 13 comments, 9 👍. | Anecdotal link to context size; no fix yet. |
| [#3200](https://github.com/earendil-works/pi/issues/3200) | **Video/audio content in `prompt` command** (multimodal) | Needed for Gemma 4, GPT-4o, etc. Extends existing image support. 10 comments, 6 👍. | Strong demand; blocked on API design. |
| [#8061](https://github.com/earendil-works/pi/issues/8061) | **Context budget ignores `maxTokens` output reservation** — overflow retry fails | Requests rejected at 78% input; compact-and-retry also fails. 3 comments, 2 👍. | Critical for large-context models (Gemini 1M). |
| [#8643](https://github.com/earendil-works/pi/issues/8643) | **Bedrock: OpenAI models reject images nested in `toolResult.content`** | Provider interop bug; fix + test ready on fork. 3 comments. | Blocks Bedrock + OpenAI-compatible image flows. |
| [#8753](https://github.com/earendil-works/pi/issues/8753) | **0.84.3 regression: `reasoning_details` echo degenerates Venice GLM reasoning** | Deterministic reasoning collapse per turn; 0.84.2 clean. 3 comments. | Bisected to `preservedReasoningDetails` change. |
| [#8829](https://github.com/earendil-works/pi/issues/8829) | **`wrapUIPromptContext` loses prototype methods on class-based UIs** | Breaks custom UI extensions using classes. 3 comments. | SDK copy semantics need fixing. |
| [#8843](https://github.com/earendil-works/pi/issues/8843) | **Lazy session resume: large sessions take ~10s before first prompt** | Cold-start latency scales linearly with session size. 1 comment. | Architectural; needs lazy JSONL parsing. |
| [#8846](https://github.com/earendil-works/pi/issues/8846) | **Windows: `bash` tool `windowsHide:true` flashes conhost windows** | Native console children (npm, node) spawn visible black windows. 1 comment. | UX polish for Windows TUI users. |
| [#8751](https://github.com/earendil-works/pi/issues/8751) | **Markdown soft line breaks render as hard breaks in TUI** | CommonMark violation; single `\n` in paragraph should be space. 2 comments, 1 👍. | Fix pending in `Markdown.renderInlineTokens()`. |

## 4. Key PR Progress (10 Most Impactful)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#8840](https://github.com/earendil-works/pi/pull/8840) | **feat** | **`pi web` GUI** — browser GUI with full TUI parity, token-gated local HTTP + WebSocket server. Reuses `AgentSessionRuntime`. |
| [#8844](https://github.com/earendil-works/pi/pull/8844) | **feat(ai)** | **Tencent Token Plan provider** — adds `tc-code-latest`, DeepSeek V4, GLM-5.2, Minimax-M2.7 via `TENCENT_TOKEN_PLAN_API_KEY`. |
| [#8725](https://github.com/earendil-works/pi/pull/8725) | **fix** | **Settle active turn before in-memory fork** — prevents `toolResult` landing in replacement session; fixes dispose race. |
| [#8297](https://github.com/earendil-works/pi/pull/8297) | **fix** | **Exclude superseded retry attempts from restored context** — cleans provider context, compaction, token budgets, branch summaries. |
| [#8818](https://github.com/earendil-works/pi/pull/8818) | **fix(ai)** | **Omit Responses `tool_choice` when no tools** — sends `tools: []` for xAI/Grok to avoid 400 on compaction. |
| [#8828](https://github.com/earendil-works/pi/pull/8828) | **fix(tui)** | **Detect Zed terminal capabilities** — Alacritty-based; hyperlinks + true color, no images. Documents keymap for Pi hotkeys. |
| [#8112](https://github.com/earendil-works/pi/pull/8112) | **fix** | **Realpath extension entries before jiti import** — fixes pnpm isolated layout symlink resolution (#8092). |
| [#8262](https://github.com/earendil-works/pi/pull/8262) | **feat** | **Dispatch hooks on every turn-start path** — adds cancellable turn preflight; fixes `sendCustomMessage(triggerTurn: true)` missing `input`/`before_agent_start`. |
| [#8819](https://github.com/earendil-works/pi/pull/8819) | **chore** | **Project name: `pi` → `Pi`** — branding consistency. |
| [#8232](https://github.com/earendil-works/pi/pull/8232) | **chore** | **Dev branch** — CI/commenting sandbox (marked **DONT MERGE**). |

## 5. Feature Request Trends
1. **Multimodal prompt API** — video/audio alongside images (#3200, #8713 LMStudio image support).
2. **Profile isolation** — built-in `--profile` for separate auth/sessions/settings per project (#3966).
3. **Provider catalog expansion** — Tencent (#8844), Command Code (#8836), DeepSeek Responses (#7559), Minimax (#8839).
4. **Extension SDK enhancements** — skill visibility control (#8533), namespace opt-in (#8834), status line sharing (#8794).
5. **Web GUI / alternative frontends** — `pi web` (#8840) signals first-class browser UI investment.
6. **Accessibility** — NVDA screen-reader consistency (#8831).

## 6. Developer Pain Points
- **TUI rendering fragility** — row corruption (#8584), markdown soft-break regression (#8751), thinking trail line-breaks (#8780), table cell SGR reset ignoring `NO_COLOR` (#8825).
- **Session scale limits** — 10s cold resume (#8843), CPU spikes on macOS (#7730), context budget miscalculation (#8061).
- **Windows integration gaps** — path backslash normalization (#8841), conhost flashing (#8846), PowerShell stderr misclassification (#8842).
- **Provider interop quirks** — Bedrock image hoisting (#8643), xAI `tool_choice` 400 (#8820), Minimax schema error (#8839), OpenAI cache misses (#8463).
- **Extension lifecycle bugs** — `reload()` skipping `session_start` with empty bindings (#8832), prototype loss in UI context copy (#8829).
- **Onboarding friction** — missing installation section in README (#6907).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-30

## Today's Highlights
Cross-session messaging infrastructure advances with two PRs hardening the peer inbox and adding operator-configurable Goal token budgets. A Windows-specific panic in the Computer Use driver (v0.20.0) blocks embedded runtime creation on x64. CI reliability improves via disk-space gating and a deflaked UTF-16 estimation test.

## Releases
No new releases in the last 24 hours.

## Hot Issues

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| [#8724](https://github.com/QwenLM/qwen-code/issues/8724) Cross-session messaging (in-progress, P2) | Enables multi-agent workflows on a single machine — `list_agents`/`send_message` primitives with fail-closed receipt gate. Core roadmap item. | 12 comments, active development across #9576, #10158, #10542 |
| [#10538](https://github.com/QwenLM/qwen-code/issues/10538) Computer Use driver panic on Windows (P2) | `@qwen-code/cua-sdk@0.20.0` panics on every embedded runtime creation (Windows 11 x64, Node 24.18). Blocks Computer Use on Windows. | 2 comments, fresh report, platform-critical |
| [#10536](https://github.com/QwenLM/qwen-code/issues/10536) Main CI E2E failure (bot) | Main-branch CI failed before test reporting on commit `74e71c5`. Auto-tracked per commit. | 1 comment, CI health signal |
| [#7167](https://github.com/QwenLM/qwen-code/issues/7167) Fleet Shepherd Dashboard (bot) | Auto-maintained fleet health dashboard; last tick shows 0 syncs/dispatches/releases. Operational visibility. | 3 comments, infra monitoring |
| [#10540](https://github.com/QwenLM/qwen-code/issues/10540) Deferred review findings from PR #10439 (bot) | Autofix-deferred items outside PR footprint; maintainers can promote to issues/PRs. Technical debt tracking. | 0 comments, process hygiene |

## Key PR Progress

| PR | Type | Summary |
|----|------|---------|
| [#10543](https://github.com/QwenLM/qwen-code/pull/10543) | Feature | Adds `model.goalTokenBudget` config to size or disable the autonomous token grant armed by #9891 on every new Goal. |
| [#10542](https://github.com/QwenLM/qwen-code/pull/10542) | Feature | Hardens cross-session messaging inbox (#9576, #10158): keeps inbox reachable, fails loudly when binding fails. Step 4a of #8724. |
| [#10116](https://github.com/QwenLM/qwen-code/pull/10116) | Feature | Skips automatic PR review round when `synchronize` only refreshes base branch — avoids wasted compute. |
| [#10425](https://github.com/QwenLM/qwen-code/pull/10425) | Feature | WebShell sessions bound to a PR now inherit its `Fixes #N` closing references with issue state (open/completed/not-planned). |
| [#10534](https://github.com/QwenLM/qwen-code/pull/10534) | Fix | Restores native VS Code Diff approval flow after WebShell cutover (#9811); Accept/Reject now resolve WebShell permissions. |
| [#10427](https://github.com/QwenLM/qwen-code/pull/10427) | Security | Closes 4 trust-boundary holes in hook execution: HTTP hooks no longer follow redirects, shell hooks sanitize env, network egress gated, config validation tightened. Reopens #8396. |
| [#10394](https://github.com/QwenLM/qwen-code/pull/10394) | CI | Gates heavy self-hosted jobs (Test, web-shell smoke, merge-queue CLI) on free disk/inode floors via `check-disk-floor.sh`; persists pressure samples. Follow-up to #10035. |
| [#10171](https://github.com/QwenLM/qwen-code/pull/10171) | Feature | Adds `propose_goal` core tool: model proposes a session Goal, user approves in dialog; approval sets Goal exactly like `/goal set`. |
| [#10411](https://github.com/QwenLM/qwen-code/pull/10411) | Feature | Exposes Workflow execution via daemon as opt-in session task extension: inspect runs (phase, dispatch, token, log, approval, lineage), control active runs. |
| [#10489](https://github.com/QwenLM/qwen-code/pull/10489) | Fix | Persists WebShell model/reasoning preference via existing `model.reasoningEffort` setting across daemon sessions (`none`=disabled, tiers=enabled). |

## Feature Request Trends
1. **Multi-agent / cross-session orchestration** — #8724, #10542, #8927 (sessionRotation) show sustained investment in agent-to-agent communication and session lifecycle control.
2. **Goal autonomy with guardrails** — #10543 (token budget), #10171 (propose+approve), #9891 (auto-arm) form a coherent arc: autonomous Goals, but operator-configurable spend and explicit user consent.
3. **WebShell parity & polish** — #10534 (diff approval), #10489 (reasoning persistence), #10390 (git update on dirty tree), #9305 (VP alignment) close UX gaps from the ACP→WebShell migration.
4. **Review pipeline intelligence** — #10116 (skip on base-refresh), #10169 (audit applied fixes), #10425 (PR→issue binding) make automated review cheaper and more context-aware.
5. **Operator configurability** — `general.outputStyle` (#10283), `model.goalTokenBudget` (#10543), `sessionRotation` (#8927) expose knobs previously hard-coded.

## Developer Pain Points
1. **Windows Computer Use broken** — #10538: driver 0.20.0 panics on every runtime creation; blocks Windows developers entirely.
2. **CI flakiness & resource pressure** — #10536 (E2E failure), #10394 (disk gating), #10527 (heartbeat test race), #10532 (UTF-16 test timeout) indicate self-hosted runner instability.
3. **Hook trust boundaries** — #10427 reveals four independent holes where repo-controlled config reached code execution/network; security-sensitive users need audited upgrades.
4. **WebShell regression fallout** — #10534 (lost native diff approval), #10390 (git update blocked by dirty tree) show migration edge cases still surfacing.
5. **Session/agent state opacity** — #8724 (cross-session messaging), #8927 (session rotation), #10425 (PR→issue binding) reflect demand for observable, controllable multi-session state.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-30

## 1. Today's Highlights
The v0.9.12 release cycle enters its final gate phase with the milestone tracker (#5573) now code-complete and 22 comments coordinating the last verification steps. Simultaneously, a high-severity sandbox regression (#5723) blocks `sudo` in agent shells via `NoNewPrivs`, halting production deployments. The crate decomposition epic (#5316) continues its structural refactor with 19 comments tracking progress across sub-EPICs.

## 2. Releases
No new releases in the last 24 hours. v0.9.12 is in pre-release validation (integration branch `codex/v0912-integration-20260823`).

## 3. Hot Issues

| Issue | Status | Why It Matters | Community Signal |
|-------|--------|----------------|------------------|
| [#5573](https://github.com/Hmbown/CodeWhale/issues/5573) v0.9.12 milestone tracker | OPEN | Central coordination for the upcoming release; lists P0 money/safety blockers, UX fixes, and full release-chain gates. | 22 comments, active triage |
| [#5316](https://github.com/Hmbown/CodeWhale/issues/5316) EPIC-005: Crate Decomposition | OPEN | Architectural restructure splitting the TUI crate; enables independent versioning, faster builds, and clearer ownership. | 19 comments, updated today |
| [#5723](https://github.com/Hmbown/CodeWhale/issues/5723) `NoNewPrivs` blocks `sudo` in agent shell | OPEN | **High severity**: breaks existing deployment workflows that require privilege escalation; sandbox configuration regression. | 1 comment, reported today |
| [#5715](https://github.com/Hmbown/CodeWhale/issues/5715) Session recovery invisible to model | OPEN | After force-quit, prior work exists on disk but the model has no context — breaks continuity for long tasks. | 0 comments, reported today |
| [#5713](https://github.com/Hmbown/CodeWhale/issues/5713) Custom provider `wire` support for `responses`/`anthropic` | OPEN | Unblocks OpenAI-compatible providers using Responses or Anthropic Messages wire formats (e.g., OpenCode Zen). | 1 comment |
| [#5718](https://github.com/Hmbown/CodeWhale/issues/5718) Retire Keychain product path + single-worker spawn | OPEN | Removes legacy OS-keyring dependency; simplifies session architecture toward a single-worker model. | 0 comments |
| [#5350](https://github.com/Hmbown/CodeWhale/issues/5350) Simplify third-party model config with templates | CLOSED | Adds pre-built templates for OpenCode Zen, Agnes, Sensenova, etc.; reduces config to API key only + test-connection button. | 7 comments |
| [#5668](https://github.com/Hmbown/CodeWhale/issues/5668) Add `/copy` for last model output | CLOSED | New TUI command copies the most recent completed assistant response — eliminates manual terminal selection. | 3 comments |
| [#790](https://github.com/Hmbown/CodeWhale/issues/790) Expand i18n coverage (commands, modals, widgets) | CLOSED | Follow-up to zh-Hant support; targets hardcoded English strings across user-visible TUI surfaces. | 4 comments |
| [#1754](https://github.com/Hmbown/CodeWhale/issues/1754) Let AI select shell/lang for `execute tool_call` | CLOSED | Addresses Windows failures where AI emits bash commands in PowerShell/cmd environments. | 3 comments |

## 4. Key PR Progress

| PR | Status | Summary |
|----|--------|---------|
| [#5717](https://github.com/Hmbown/CodeWhale/pull/5717) | OPEN | **FEAT-021**: Migrates project command group (`/init`, `/lsp`, `/share`, `/goal`) to external command shapes (FEAT-014/015 pattern). |
| [#5725](https://github.com/Hmbown/CodeWhale/pull/5725) | OPEN | Adds **Concentrate** as a first-class opt-in BYOK provider (OpenAI Responses-compatible gateway at `api.concentrate.ai/v1`). |
| [#5724](https://github.com/Hmbown/CodeWhale/pull/5724) | OPEN | Fixes sandbox read deny-list to match against **resolved paths**, greening failing macOS/Windows CI (6+ test failures on `main`). |
| [#5721](https://github.com/Hmbown/CodeWhale/pull/5721) | OPEN | Introduces `CODEWHALE_API_KEY` for machine-token CLI auth — no local session file, no browser flow. |
| [#5719](https://github.com/Hmbown/CodeWhale/pull/5719) | OPEN | Rescues #5716: implements `wire = "responses" \| "anthropic"` for `kind="openai-compatible"` + OpenCode Zen Muse/Spark support. |
| [#5722](https://github.com/Hmbown/CodeWhale/pull/5722) | OPEN | Wires header **pod** (live workers/max) and **notifications** segments with shipped design language (truncate-before-wrap, ink roles). |
| [#5703](https://github.com/Hmbown/CodeWhale/pull/5703) | OPEN | Aligns `cw operate` to landed CWC `OperateRecord` (camelCase fields, new REST endpoints: `GET/POST/PATCH /v1/operate`, `PUT /plan`, etc.). |
| [#5712](https://github.com/Hmbown/CodeWhale/pull/5712) | OPEN | **Cloud-dispatch remote runner**: confirmed dispatch runs a cloud agent in a sandbox and opens the forge PR with real receipts. |
| [#5720](https://github.com/Hmbown/CodeWhale/pull/5720) | OPEN | Rescues #5686: adds native **Moonshot/Kimi search** to web; preserves authorship, fixes review findings. |
| [#5661](https://github.com/Hmbown/CodeWhale/pull/5661) | CLOSED | Makes **context pressure an agent directive** (not just display warning) — model now sees and respects the directive. |

## 5. Feature Request Trends
1. **Provider ecosystem expansion** — First-class support for aggregators (Concentrate, Eden AI) and wire-protocol variants (Responses, Anthropic Messages) on OpenAI-compatible endpoints.
2. **Enterprise launch hardening** — Operator packets, security review docs, Tailscale-enabled web runtime, machine-token auth (`CODEWHALE_API_KEY`).
3. **Session continuity** — Persistent context across force-quits, crash recovery visible to the model, single-worker spawn model.
4. **TUI command system modernization** — External command shapes, `/copy`, `/dispatch`, `/hunt` jurisdiction system, header segments.
5. **Sandbox & security refinement** — Resolved-path deny-lists, `NoNewPrivs` tuning, Keychain retirement, read-guard CI stability.

## 6. Developer Pain Points
- **Sandbox over-restriction**: `NoNewPrivs` blocks `sudo` in agent shells, breaking deployment workflows (#5723).
- **Session amnesia**: Force-quit loses model-visible context despite work persisting on disk (#5715).
- **Third-party model config friction**: Manual Base URL/model/env var entry; models stuck in `not checked`/`cache failed` (#5350).
- **CI instability**: macOS/Windows sandbox read-guard tests failing on `main` and all dependent PRs (#5724).
- **i18n gaps**: Commands, modals, widgets, approval dialogs remain hardcoded in English (#790).
- **Shell mismatch**: AI emits bash commands in PowerShell/cmd environments on Windows (#1754).
- **Output capture**: No native way to copy the last model response without terminal selection (#5668).
- **Pane truncation**: Table/plan/task content cut off with no zoom/expand mechanism (#1261).
- **Legacy secret store**: Keychain/Keyring code paths still present, complicating session architecture (#5718).
- **Provider wire rigidity**: `openai-compatible` kind ignores `wire` config, forcing Chat Completions only (#5713).

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*