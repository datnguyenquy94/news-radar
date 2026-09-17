# AI CLI Tools Community Digest 2026-09-17

> Generated: 2026-09-17 04:35 UTC | Tools covered: 10

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

# Cross-Tool Comparison Report: AI CLI Ecosystem (2026-09-17)

---

## 1. Ecosystem Overview

The AI CLI landscape is bifurcating into **platform-integrated tools** (Claude Code, Codex, Gemini CLI, Copilot CLI) backed by model providers with cloud infrastructure, and **community-driven/framework tools** (OpenCode, Pi, Qwen Code, DeepSeek TUI, Kimi) emphasizing local-first architecture, extensibility, and model-agnostic design. All tools are converging on **MCP (Model Context Protocol) as the universal tooling layer**, **subagent/orchestration primitives** for complex workflows, and **session/context governance** to manage million-token contexts. Windows reliability and accessibility remain systemic gaps across the ecosystem. Release cadences range from daily alphas (Codex, Qwen) to weekly stables (Claude Code, Copilot CLI), with several tools (OpenCode, Pi, DeepSeek TUI) operating in rapid refactor cycles addressing architectural debt.

---

## 2. Activity Comparison (2026-09-17)

| Tool | Issues Updated | PRs Merged/Open | Release Status | Notable Velocity Signal |
|------|----------------|-----------------|----------------|-------------------------|
| **Claude Code** | 10+ hot issues | 3 PRs (diff pane polish) | v2.1.274 stable | Mature stable cadence; MCP & Windows bugs dominate |
| **OpenAI Codex** | 10+ high-signal issues | 20 PRs merged (alpha series) | 10+ alphas (v0.155 series) | Highest PR velocity; capacity/quota crisis consuming community |
| **Gemini CLI** | 10 hot issues | 10 PRs (security, PTY, MCP) | v0.62.0 nightly | Nightly cadence; subagent reliability & memory hardening focus |
| **GitHub Copilot CLI** | 10 hot issues | 0 PRs (direct commits) | 3 patches in 24h (v1.0.86.x) | Rapid patching; session resilience & custom agent config |
| **Kimi Code CLI** | 2 issues | 1 PR (HOL Guard example) | None | Low volume; critical retry-loop bug (#2647) unaddressed |
| **OpenCode** | 10+ issues | 10+ PRs (attachments, Bedrock, crash fix) | None (v1.18+ implied) | High PR throughput; free-tier auth confusion widespread |
| **Pi** | 41 issues updated | 10 PRs merged | None | High issue hygiene; TUI stability & streaming reliability focus |
| **Qwen Code** | 10+ issues | 10+ PRs (hooks, sandbox, ACP) | v0.24.0 stable + nightly | Stable release + aggressive feature PRs; context governance surge |
| **DeepSeek TUI** | 10 hot issues | 17 PRs merged | None (v0.9.14 assembling) | Massive refactor (EPIC-005); 17 PRs in 24h on crate decomposition |
| **Grok Build** | 0 | 0 | None | No public activity |

---

## 3. Shared Feature Directions (Cross-Tool Requirements)

| Requirement | Tools Demanding | Specific Needs |
|-------------|-----------------|----------------|
| **MCP Multi-tenancy & Reliability** | Claude Code (#36024), Codex (#24135), Copilot CLI (#3100, #4542), Gemini CLI, OpenCode (#49464), Qwen Code | Multi-account support (Gmail, GitHub), Bearer-token auth for headless, schema leniency (boolean sub-schemas), connection supervision, hot-reload without session break |
| **Subagent/Orchestration Primitives** | Claude Code (#95002 security bug), Codex (#46075), Gemini CLI (#22323, #21409), OpenCode, Qwen Code (#11206), DeepSeek TUI (#6278, #6244) | Scoped tool permissions (not silent escalation), turn-limit reporting accuracy, context isolation, parallel worker fan-out, role disambiguation, budget guardrails |
| **Context/Token Governance** | Qwen Code (#12028, #12054), OpenCode (#49463), Pi (#9602, #9051), Gemini CLI (#26525), Claude Code (#94867) | Non-conversation token visibility (tools, system prompt, skills), accurate `/context` accounting, compaction control, redaction before model ingress, cache isolation across sessions |
| **Windows Parity & Reliability** | Claude Code (#92543, #95009), Codex (#25220, #44781), Copilot CLI (#1882, #4765), Gemini CLI (#29354), OpenCode (#49458), DeepSeek TUI (#9129) | Bash truncation/escape fixes, session corruption recovery, plugin loading under `Program Files`, ConPTY mouse/terminal support, rootless Podman, batch/cmd editor support |
| **Session Resilience & Recovery** | All tools | Transcript corruption recovery (Copilot CLI), crash-on-invalid-project (OpenCode), resume-from-journal (DeepSeek TUI, Pi), auto-restart (Claude Code #88765), compaction durability (Gemini CLI #21335) |
| **Accessibility (A11y)** | Claude Code (#87978), Codex (TUI focus), Gemini CLI, Copilot CLI | Turn-completion signals for screen readers, keyboard navigation, VoiceOver/Windows Narrator support |
| **Cost/Quota Transparency** | Codex (#41220), Claude Code (#94867, #95000), Copilot CLI, Kimi Code (#2647) | Real-time quota dashboards, per-request breakdowns, "at capacity" semantics clarity, circuit-breakers on hard limits |

---

## 4. Differentiation Analysis

| Dimension | Platform-Integrated Tools | Community/Framework Tools |
|-----------|---------------------------|---------------------------|
| **Primary Moat** | Model access (proprietary models, priority capacity), cloud sync, IDE integration | Model-agnostic architecture, local-first, extensibility, no vendor lock-in |
| **Target User** | Enterprise developers, platform subscribers, IDE-centric workflows | Power users, researchers, self-hosters, multi-model workflows, automation builders |
| **Technical Approach** | Managed backend (daemon, app-server), proprietary protocols (ACP, custom), cloud auth | Local binaries, stdio/JSON-RPC, MCP-native, pluggable model runtimes (Ollama, vLLM, OpenRouter) |
| **Session Model** | Cloud-synced, account-bound, server-assisted compaction | Local filesystem (JSONL, SQLite), user-controlled compaction, portable sessions |
| **Extension Surface** | Skills/agents (Copilot, Qwen), MCP servers, VS Code companion | Hooks (PreToolUse), custom agents, slash commands, SDK/extension APIs (Pi, OpenCode) |
| **Release Philosophy** | Stable channels + alpha/preview (Claude, Copilot, Qwen), rapid alpha (Codex) | Nightly/rolling (Gemini, Pi, DeepSeek), semantic versioning with breaking changes (OpenCode) |
| **Differentiator** | **Claude Code**: Diff pane UX, Anthropic model integration<br>**Codex**: TUI Mermaid, `--no-daemon` CI mode, Guardian reviews<br>**Gemini CLI**: AST-aware tooling, zero-dep bash sandbox, Auto Memory<br>**Copilot CLI**: Repo instruction files (`AGENTS.md`), GitHub ecosystem, autopilot | **OpenCode**: Server API (`/api/experimental/fs/write`), Bedrock media guardrails<br>**Pi**: Extension API for session lifecycle, prompt cache warming<br>**Qwen Code**: bwrap confinement at tool execution, ACP capacity mgmt, Computer Use relay<br>**DeepSeek TUI**: Crate decomposition, capability-shaped commands, steering delivery truth<br>**Kimi Code**: Hook-based policy gates (HOL Guard example) |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|------|-------|----------|
| **High Momentum / Production-Ready** | **Claude Code**, **GitHub Copilot CLI**, **Qwen Code** | Stable releases, high issue engagement (80+ 👍 on top issues), enterprise adoption signals, dedicated platform teams |
| **High Momentum / Rapid Iteration** | **OpenAI Codex**, **Gemini CLI**, **OpenCode**, **Pi**, **DeepSeek TUI** | Daily alphas/nightlies, 10-20+ PRs/day, architectural refactors in progress, strong community debugging |
| **Emerging / Niche** | **Kimi Code CLI** | Low issue volume, critical unaddressed bug, example-driven extension model |
| **Dormant / Unknown** | **Grok Build** | No public GitHub activity |

**Maturity Indicators:**
- **Claude Code** and **Copilot CLI** show mature triage: issues labeled, P1/P2 tags, regression tracking.
- **Codex** has highest raw volume but noise from capacity crisis; meta-issue (#41220) shows organized community.
- **DeepSeek TUI**'s EPIC-005 (29 comments, 38 days) demonstrates structured technical debt payoff.
- **Qwen Code** uniquely ships stable + nightly + desktop simultaneously with coordinated PRs.

---

## 6. Trend Signals for Technical Decision-Makers

| Trend | Signal Strength | Implication |
|-------|-----------------|-------------|
| **MCP is the de facto standard** | 🔴 Critical | All 9 active tools invest heavily in MCP compliance, multi-tenancy, and transport reliability. Build tooling on MCP, not proprietary protocols. |
| **Subagents → First-class orchestration** | 🔴 Critical | Every tool building scoped permissions, turn accounting, context isolation. Design workflows assuming subagent boundaries are security/cost boundaries. |
| **Context governance > raw context size** | 🟠 High | Million-token models shift bottleneck to *non-conversation* tokens (tools, skills, system prompt). Tools adding token budgets, redaction, compaction control. |
| **Local-first / model-agnostic gaining ground** | 🟠 High | OpenCode, Pi, Qwen, DeepSeek TUI prioritize stdio transports, pluggable providers, portable sessions. Enterprise evals should include vendor-neutral options. |
| **Windows is the compatibility testbed** | 🟠 High | Bash truncation, session corruption, plugin loading, ConPTY — every tool has Windows-specific P1 bugs. CI must include Windows interactive terminal tests. |
| **Session durability = product quality** | 🟡 Medium | Transcript corruption, resume failures, compaction loss are top user complaints. Invest in journal-based recovery, atomic writes, schema versioning. |
| **Accessibility becoming compliance requirement** | 🟡 Medium | VoiceOver, screen readers, keyboard-only nav — tools with enterprise ambitions (Claude, Codex, Copilot) treating as P1. |
| **Cost observability = trust** | 🟡 Medium | Codex quota crisis (#41220), Claude slash-command billing surprise (#95000), Kimi retry-loop (#2647). Users demand per-request audit trails, circuit-breakers. |
| **Architectural refactors signal maturity** | 🟢 Positive | DeepSeek TUI crate decomposition, Pi TUI stabilization, OpenCode attachment pipeline — teams paying down debt before feature bloat. |

---

## Decision Guidance

| If Your Priority Is... | Recommended Primary Tool(s) | Evaluation Notes |
|------------------------|----------------------------|------------------|
| **Enterprise integration, Anthropic models, diff UX** | Claude Code | Best diff pane, mature releases, but Windows Bash + MCP gaps |
| **OpenAI ecosystem, CI automation, TUI richness** | Codex | `--no-daemon`, Mermaid, Guardian — but capacity/quota instability |
| **Google ecosystem, AST tooling, local sandboxing** | Gemini CLI | Zero-dep bash, Auto Memory — nightly only, subagent reliability WIP |
| **GitHub-native, repo instructions, VS Code sync** | Copilot CLI | `AGENTS.md` support, autopilot — macOS input bugs, MCP remote gaps |
| **Model-agnostic, self-hosted, extensible architecture** | OpenCode, Pi, Qwen Code | OpenCode server API, Pi extension API, Qwen bwrap/ACP — earlier maturity |
| **Cutting-edge TUI, architectural transparency** | DeepSeek TUI | Aggressive refactor, capability commands — pre-1.0, session resume fragile |
| **China-region / Moonshot models** | Kimi Code | Hook-based policy — critical retry-loop bug unpatched |

**Bottom Line**: The ecosystem is standardizing on **MCP + subagents + local session files**. Platform tools lead on model access and IDE integration; framework tools lead on architectural flexibility and vendor neutrality. For production deployments today: **Claude Code** or **Copilot CLI** for platform-aligned teams; **OpenCode** or **Qwen Code** for model-agnostic/local-first requirements. Monitor **Codex** quota resolution and **DeepSeek TUI** v0.9.14 for next-gen TUI patterns.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (as of 2026-09-17)

---

## 1. Top Skills Ranking — Most-Discussed PRs

| Rank | Skill / PR | Functionality | Discussion Highlights | Status |
|------|------------|---------------|----------------------|--------|
| 1 | **[proofcore-contract-auditor](https://github.com/anthropics/skills/pull/1771)** (#1771) | Automated static analysis of Solidity/Rust smart contracts; anchors cryptographic audit proofs on TON blockchain via ProofCore's zero-storage Merkle protocol. | Newest high-profile submission (Sep 15); targets Web3/security niche; first skill with on-chain proof anchoring. | **Open** (2 days old) |
| 2 | **[md2video-audio](https://github.com/anthropics/skills/pull/1703)** (#1703) | Zero-cost Markdown → professional MP4 video with realistic TTS voiceovers; uses Marp for slides, edge-tts for audio, FFmpeg for composition. | Active iteration (updated Sep 15); addresses content-creator workflow; "zero-cost" positioning resonates. | **Open** (16 days old) |
| 3 | **[Hivemind](https://github.com/anthropics/skills/pull/1628)** (#1628) | Multi-agent orchestration: Claude Code plans/reviews/merges; delegates mechanical work to headless **opencode** workers on free models. | Novel "expensive model context is scarce resource" architecture; 3-day discussion window; zero-cost positioning. | **Open** (27 days old) |
| 4 | **[buffer-api](https://github.com/anthropics/skills/pull/1627)** (#1627) | Portable Agent Skill for Buffer GraphQL API — schedule/manage/analyze social posts from any AI agent (Claude, Cursor, Codex, etc.). | Cross-agent portability emphasis; covers full Buffer lifecycle (queues, analytics, channels). | **Open** (27 days old) |
| 5 | **[scnet-hpc](https://github.com/anthropics/skills/pull/1615)** (#1615) | Profile-based SSH/Slurm workflows for SCNet HPC clusters: connection profiles, job generation, cluster discovery, compute-node ops. | Niche HPC audience; profile-based config reduces friction for recurring cluster tasks. | **Open** (28 days old) |
| 6 | **[pyxel](https://github.com/anthropics/skills/pull/525)** (#525) | Retro game development in Python: deterministic headless runs, frame inspection, state checks, separate refs for behavior/presentation/optimization. | Long-running (6+ months); author is Pyxel maintainer (kitao); comprehensive dev-loop tooling. | **Open** (196 days old) |
| 7 | **[document-typography](https://github.com/anthropics/skills/pull/514)** (#514) | Prevents orphan/widow lines, numbering misalignment in AI-generated docs — "issues affect every document Claude generates." | Strong problem framing (universal pain point); closed Mar 13 but referenced in later fixes. | **Closed** (merged?) |
| 8 | **[skill-quality-analyzer / skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** (#83) | Meta-skills: 5-dimension quality scoring (structure, examples, resources, triggers, maintainability) + security pattern detection (secrets, perms, injection). | Earliest meta-skill proposal; enables skill-on-skill governance; referenced in later security discussions. | **Open** (316 days old) |

> **Note:** PR comment counts are unavailable in the dataset; ranking combines recency, update frequency, problem scope, and cross-references in Issues.

---

## 2. Community Demand Trends — From Issues

| Trend | Evidence (Issue # / Comments / 👍) | What Developers Want |
|-------|-----------------------------------|----------------------|
| **Trust & Security Hardening** | [#492](https://github.com/anthropics/skills/issues/492) (43 💬, 2 👍) — community skills masquerading as official `anthropic/` namespace; [#1487](https://github.com/anthropics/skills/issues/1487) (4 💬) — claude-api injects 156k tokens, exhausting context window | Namespace isolation, supply-chain verification, token-budget-aware skill loading |
| **Organizational Skill Distribution** | [#228](https://github.com/anthropics/skills/issues/228) (16 💬, 8 👍) — org-wide sharing without manual file transfer; [#189](https://github.com/anthropics/skills/issues/189) (6 💬, 9 👍) — duplicate skills from `document-skills` + `example-skills` plugins | Shared skill registry, deduplication, one-click org install |
| **Skill Trigger & Evaluation Reliability** | [#556](https://github.com/anthropics/skills/issues/556) (12 💬, 7 👍) — `run_eval.py` 0% trigger rate; [#1769](https://github.com/anthropics/skills/pull/1769) — skill-creator reports 0% recall; [#1390](https://github.com/anthropics/skills/issues/1390) (4 💬) — mcp-builder evaluation scores 0/N | Working trigger detection, trustworthy eval harnesses, CI-ready skill validation |
| **Meta-Skills for Skill Governance** | [#83](https://github.com/anthropics/skills/pull/83) (meta-analyzers); [#1385](https://github.com/anthropics/skills/issues/1385) (4 💬, 1 👍) — Reasoning Quality Gate Pipeline (calibration → adversarial review → verification); [#412](https://github.com/anthropics/skills/issues/412) (6 💬, closed) — agent-governance skill | Quality gates, security scanning, governance policies as reusable skills |
| **Context Window & Token Efficiency** | [#1487](https://github.com/anthropics/skills/issues/1487) (claude-api 156k tokens); [#1329](https://github.com/anthropics/skills/issues/1329) (9 💬) — compact-memory: symbolic notation for agent state; [#202](https://github.com/anthropics/skills/issues/202) (8 💬, closed) — skill-creator token inefficiency | Lazy-loading, compressed memory representations, token-aware skill design |
| **Cross-Platform / Windows Fixes** | [#1298](https://github.com/anthropics/skills/pull/1298) — Windows select() pipe failures; [#1765](https://github.com/anthropics/skills/pull/1765) — UTF-8 decoding for redlining diffs on Windows; [#538](https://github.com/anthropics/skills/pull/538) — case-sensitivity bugs | First-class Windows support, encoding-safe file ops |

---

## 3. High-Potential Pending Skills — Active PRs Likely to Land Soon

| PR | Skill | Why It Has Momentum | Est. Merge Readiness |
|----|-------|---------------------|----------------------|
| [#1742](https://github.com/anthropics/skills/pull/1742) | **mcp-builder: mcp≥2 streamable_http_client + custom headers** | Fixes breaking change in upstream MCP SDK; referenced in [#1668](https://github.com/anthropics/skills/issues/1668); updated Sep 17 (today) | **High** — targeted fix, recent activity |
| [#1769](https://github.com/anthropics/skills/pull/1769) | **skill-creator: fix 0% recall trigger detection** | Blocks skill authoring workflow; fixes [#1721](https://github.com/anthropics/skills/issues/1721); 2-day-old PR with clear root cause | **High** — critical path for skill creators |
| [#1765](https://github.com/anthropics/skills/pull/1765) | **office: UTF-8 decode redlining diffs** | Fixes [#1707](https://github.com/anthropics/skills/issues/1707); Polish char test validation; trivial scope | **High** — single-file fix, validated |
| [#1724](https://github.com/anthropics/skills/pull/1724) | **mcp-builder: default model → claude-sonnet-5** | Updates stale model reference; aligns eval harness with current best model; 10-day-old PR | **Medium** — low risk, maintenance |
| [#1628](https://github.com/anthropics/skills/pull/1628) | **Hivemind: Zero-Cost Multi-Agent Orchestration** | Novel architecture, active author engagement, addresses token-cost pain point | **Medium** — needs design review |
| [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator: isolate trigger evals, Windows/runtime fixes** | Long-running (100 days), tackles core flakiness (false misses, Windows select(), unrelated tool interference) | **Medium** — complex but foundational |

---

## 4. Skills Ecosystem Insight — One-Sentence Summary

> **The community's most concentrated demand is for *trustworthy, composable skill infrastructure*: reliable trigger/evaluation mechanics, secure namespace isolation, org-level distribution, and token-efficient execution — treating skills as first-class, governable software artifacts rather than prompt snippets.**

---

# Claude Code Community Digest — 2026-09-17

---

## 1. Today's Highlights

- **v2.1.274 released** with critical memory warnings, a new MCP startup wait timeout (`CLAUDE_CODE_MCP_STARTUP_WAIT_MS`), and an `effort` attribute addition (details truncated in feed).
- **MCP ecosystem dominates discussion**: the top issue (#36024, 82 👍) requests multi-account Gmail support, while fresh bugs reveal parameter validation deadlocks and Chrome native messaging failures.
- **Windows Bash tool reliability** resurfaces with two new reports: silent truncation at ~8K chars and permanent session death after `unalias`/`unsetenv` errors.

---

## 2. Releases

### v2.1.274
| Change | Impact |
|--------|--------|
| **Critical memory warning** visible in UI with remediation steps | Prevents silent OOM crashes; guides safe restart |
| `CLAUDE_CODE_MCP_STARTUP_WAIT_MS` env var (0 = no wait) | Bounds non-interactive turn latency when MCP servers are slow |
| `effort` attribute added (details pending) | Likely relates to model reasoning effort control |

> **Note**: Release notes truncated in source; check [v2.1.274](https://github.com/anthropics/claude-code/releases/tag/v2.1.274) for full changelog.

---

## 3. Hot Issues (Top 10 by Noteworthiness)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#36024](https://github.com/anthropics/claude-code/issues/36024) | **Multi-account Gmail MCP** | Highest-voted open enhancement (82 👍); blocks users with personal + work accounts | 33 comments, 82 👍 — **top community ask** |
| [#94718](https://github.com/anthropics/claude-code/issues/94718) | **MCP optional param rejection & deadlock** | Zod validation rejects omitted optional params despite JSON Schema `default`; breaks tool calls with mutually-exclusive groups | 4 comments, has repro, macOS |
| [#95004](https://github.com/anthropics/claude-code/issues/95004) | **Chrome native messaging host never contacted** | `/chrome` shows `Status: Disabled` despite working extension; CLI ↔ host connection broken | 3 comments, new today |
| [#95002](https://github.com/anthropics/claude-code/issues/95002) | **Subagent `tools:` Bash specifier grants full Bash** | Security regression: `Bash(git diff:*)` scopes to *unrestricted* Bash silently | 0 comments, has repro, **critical permission bypass** |
| [#95000](https://github.com/anthropics/claude-code/issues/95000) | **Unrecognized slash commands now billable model calls** | Previously free deterministic rejection → paid variable model call; undocumented cost increase | 0 comments, has repro, **billing surprise** |
| [#92543](https://github.com/anthropics/claude-code/issues/92543) | **Windows Bash truncation at ~8,181 chars + `\\` halving** | Long commands silently truncated; backslash escaping broken in `bash.exe -c` | 1 comment, has repro, persistent since Sep 6 |
| [#95009](https://github.com/anthropics/claude-code/issues/95009) | **Windows/Git Bash session dies permanently** | After `unalias: unsetenv` error, *every* Bash command fails; survives CLI restart, session-bound | 0 comments, has repro, **session corruption** |
| [#80702](https://github.com/anthropics/claude-code/issues/80702) | **LaTeX math corrupted by GFM escaping in terminal** | Raw LaTeX shown + silently corrupted; blocks math-heavy workflows on Windows/PowerShell | 3 comments, 1 👍, open since Jul |
| [#87978](https://github.com/anthropics/claude-code/issues/87978) | **A11y: VoiceOver no turn-completion signal** | Blind users cannot know when streaming ends; `axScreenReader: true` helps but incomplete | 1 comment, macOS, **accessibility gap** |
| [#94867](https://github.com/anthropics/claude-code/issues/94867) | **Weekly limit math anomaly** | Two 5-hour window limits consumed entire weekly quota; suggests budget accounting bug | 1 comment, cost tracking concern |

---

## 4. Key PR Progress

| PR | Status | Summary |
|----|--------|---------|
| [#94847](https://github.com/anthropics/claude-code/pull/94847) | OPEN | **Diff pane UX fix**: only auto-opens on first edit *when it has a file to list*; avoids empty pane for ignored/external paths |
| [#94843](https://github.com/anthropics/claude-code/pull/94843) | CLOSED | **Type-safe viewport access**: diff prompt hint reads `viewport.isFullscreen` via optional chaining to support engines lacking the field |
| [#94653](https://github.com/anthropics/claude-code/pull/94653) | CLOSED | **Diff pane docking awareness**: pane opens only where layout can dock it (not just on width ≥144 cols); fixes inline dialog on main screen |

> All three PRs target the `mods/diff` subsystem — iterative polish on diff pane visibility and layout integration.

---

## 5. Feature Request Trends

| Direction | Evidence |
|-----------|----------|
| **MCP multi-tenancy** | #36024 (Gmail multi-account) + new channel/plugin issues (#95011 Telegram) |
| **Windows-first parity** | Bash truncation (#92543), session death (#95009), auth/desktop bugs (#94910, #95001, #95008) |
| **Accessibility completion** | VoiceOver turn signals (#87978), desktop nav (#87977) — both from same reporter |
| **Cost transparency** | Weekly limit math (#94867), slash command billing (#95000) |
| **Session resilience** | Auto-restart/resume (#88765), session corruption recovery (#95009) |

---

## 6. Developer Pain Points (Recurring Themes)

1. **MCP fragility** — parameter validation rejects valid schemas, Chrome native messaging dead, channel plugins don't auto-reply.
2. **Windows Bash tool is unreliable** — truncation, escaping bugs, permanent session corruption, no recovery.
3. **Silent permission escalation** — subagent `tools:` specifiers accepted but ignored, granting full Bash access.
4. **Undocumented cost model changes** — slash command fallback to model calls introduces variable billing.
5. **Accessibility gaps remain** — no turn-completion event for screen readers; desktop app navigation broken.
6. **IntelliJ agent incident spam** — 8 near-identical "Agent incident" issues filed today (#94992–#94999), suggesting either a noisy reporter or systemic agent reliability problem in the JetBrains plugin.

---

*Generated from github.com/anthropics/claude-code data as of 2026-09-17. Links point to live GitHub items.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-09-17

---

## 1. Today's Highlights

The Codex team shipped **10+ alpha releases** in the past 24 hours (v0.155.0-alpha.11 through .16 plus v8 updates), signaling rapid iteration on the 0.155 series. Meanwhile, the community is vocal about **systemic capacity/quota issues** — three of the top five issues report "model at capacity" errors despite healthy allowances, affecting Pro/20x subscribers across Windows, macOS, and Linux. On the engineering side, 20 PRs landed today, notably adding `--no-daemon` CLI flag, Mermaid diagram rendering in TUI, and fixes for MCP interaction threading and image context accounting.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| `rust-v0.155.0-alpha.16` → `alpha.11` | Alpha | Six consecutive alpha builds in 24h; likely incremental CLI/backend fixes |
| `rusty-v8-v152.2.0` | Dependency | V8 engine update for the embedded JS runtime |
| `rust-v0.155.0-alpha.2.6` / `alpha.2.5` | Alpha | Parallel alpha branch (possibly hotfix/feature track) |

> **No stable release** in this window. Alpha cadence suggests 0.155.0 is approaching RC.

---

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#41220](https://github.com/openai/codex/issues/41220) | **Meta-tracker: Abnormal quota depletion & usage-accounting inconsistencies** | Cross-report tracker for subscription credits draining faster than token usage predicts; affects billing trust | 46 comments, 17 👍 — highest engagement |
| [#43337](https://github.com/openai/codex/issues/43337) | **Account-specific capacity errors despite available weekly allowance** | Pro 20x users hit "model at capacity" on `gpt-6-astra`/`gpt-5.6-luna` at `low` reasoning; not a global outage | 44 comments, 5 👍 |
| [#44781](https://github.com/openai/codex/issues/44781) | **[Desktop] Edit+resend queued message → "App-server queued follow-up no longer exists"** | Core chat UX break on Windows; blocks conversation continuation | 42 comments, **50 👍** — most upvoted |
| [#25220](https://github.com/openai/codex/issues/25220) | **[Windows] Bundled plugins unavailable — copyfile fails on EFS-encrypted WindowsApps** | Computer Use, Browser, Chrome, LaTeX plugins broken on Store installs with EFS | 39 comments, 4 👍 |
| [#45835](https://github.com/openai/codex/issues/45835) | **App repeatedly shows "Selected model is at capacity" despite healthy connectivity** | Pro Lite on Windows; frequent false capacity errors | 13 comments |
| [#37996](https://github.com/openai/codex/issues/37996) | **Stream disconnected before completion** | Linux Pro users see mid-stream cuts; "error processing request" | 11 comments |
| [#45564](https://github.com/openai/codex/issues/45564) | **Disabling animations freezes Working timer (TUI)** | Timer stops updating while work continues; requires terminal hide/show to recover | 8 comments |
| [#45832](https://github.com/openai/codex/issues/45832) | **Windows CLI: "Selected model is at capacity" on gpt-6-astra/gpt-5.6-sol** | 20x Pro on Win11 25H2; PowerShell terminal | 8 comments, 4 👍 |
| [#44342](https://github.com/openai/codex/issues/44342) | **Windows: existing-chat sends blocked by loading-local-config/pending codex-home** | Reload recovers; normal restart recurs — startup race condition | 7 comments, 3 👍 |
| [#24135](https://github.com/openai/codex/issues/24135) | **`codex exec`: no non-interactive MCP tool approval without `--dangerously-bypass-approvals-and-sandbox`** | Blocks CI/automation; read-only sandbox lost when bypassing | 5 comments |

---

## 4. Key PR Progress (Notable Merges Today)

| PR | Change | Impact |
|----|--------|--------|
| [#46088](https://github.com/openai/codex/pull/46088) | **Add `--no-daemon` to bypass shared background server** | CLI can run fully standalone; preserved across `resume`/`fork`; enables cleaner CI/container use |
| [#46054](https://github.com/openai/codex/pull/46054) | **Render Mermaid code blocks as diagrams in TUI** | `codex-mermaid` rendering with syntax-theme colors; fallback to source for invalid/oversized diagrams |
| [#46066](https://github.com/openai/codex/pull/46066) | **Keep MCP user interaction on root thread** | Fixes browser sign-in / human-input prompts from subagents; prevents auto-accept of interactive requests |
| [#46072](https://github.com/openai/codex/pull/46072) | **Account for file images in context budgets & Guardian reviews** | Images now counted in token estimates and included in Guardian context — fixes undercounting |
| [#46075](https://github.com/openai/codex/pull/46075) | **Use captured step settings when spawning subagents** | Subagents inherit correct model/reasoning after mid-turn settings changes; effort overrides validated against right model |
| [#46077](https://github.com/openai/codex/pull/46077) | **Keep composer responsive during Command Center session creation** | Removes blocking config/server scans for new sessions; faster TUI startup |
| [#46065](https://github.com/openai/codex/pull/46065) | **Route prepared images through attachment store** | Uploads images from messages/tool outputs before history recording; fallback to inline on failure |
| [#46071](https://github.com/openai/codex/pull/46071) | **Add configurable F8 shortcut for voice conversations** | `tui.keymap.chat.toggle_voice` binding; preserves composer draft |
| [#46107](https://github.com/openai/codex/pull/46107) | **Box app-server request handler futures to reduce stack usage** | `Box::pin` avoids large stack temporaries during request queuing |
| [#46069](https://github.com/openai/codex/pull/46069) | **Use syntax theme colors for inline code & file paths** | Replaces fixed cyan with theme-aware Markdown raw-text foreground |

> All 20 PRs shown were **closed/merged today** by `copyberry[bot]` — automated landing of pre-approved changes.

---

## 5. Feature Request Trends (from Issues)

| Theme | Representative Issues | Signal |
|-------|----------------------|--------|
| **Quota/capacity transparency** | #41220, #43337, #45835, #45832, #45599, #46079, #46103, #46109 | Users want real-time quota dashboards, per-model usage breakdowns, and clearer "at capacity" semantics |
| **Windows Desktop stability** | #44781, #25220, #44342, #45797, #45986, #46106, #46095 | Plugin loading, chat persistence, browser tooling, and remote pairing all fragile on Windows |
| **Non-interactive/CI automation** | #24135, #12869 | Need approved MCP tool calls, stable stdio streams, and sandbox-preserving bypasses for `codex exec` |
| **TUI/CLI polish** | #45564, #46046, #46067, #46069, #46071 | Animation/timer sync, focus management, timestamp format, theme consistency, keybindings |
| **Remote/mobile sync** | #46084, #46091, #46099 | Session state staleness, QR/manual pairing failures across Android ↔ Windows/macOS |
| **Model behavior/accountability** | #46093, #46089 | False policy flags on `gpt-5.6-sol`; suspicions of silent model substitution |

---

## 6. Developer Pain Points (Recurring Frustrations)

1. **"Model at capacity" false positives** — Multiple Pro/20x users report errors despite unused weekly allowances; appears account-specific, not global. No workaround except model switching.

2. **Windows Desktop chat breakdown** — Editing/resending messages breaks conversation state (#44781); first-turn-only success after reinstall (#45797); config-loading deadlocks (#44342).

3. **Plugin/Tooling failures on Windows Store builds** — EFS encryption breaks bundled plugin extraction (#25220); Browser tool timeouts persist post-upgrade (#46106, #46095).

4. **MCP automation blocked** — No way to pre-approve MCP tool calls in `codex exec` without nuking sandbox (#24135); stale HTTP sessions degrade CLI (#12869).

5. **Quota accounting opacity** — Meta-issue #41220 aggregates 10+ reports of credits burning 2–5× faster than token counts suggest; no audit trail or per-request breakdown.

6. **Remote Control desync** — Android ↔ Windows session state loads stale snapshots (#46084); pairing fails silently (#46091, #46099).

7. **TUI timer/UI glitches** — Disabled animations freeze elapsed-time display (#45564); Agents view steals composer focus (#46046).

---

*Digest generated from `github.com/openai/codex` data as of 2026-09-17. Links point to live GitHub items.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-09-17

## 1. Today's Highlights
The nightly release **v0.62.0-nightly.20260917** shipped with routine version bumps. Meanwhile, the issue backlog reveals a concentrated focus on **subagent reliability** (turn-limit reporting, context poisoning, skill adoption) and **Auto Memory hardening** (redaction, retry loops, inbox quarantine). On the PR front, critical fixes landed for **MCP OAuth RFC 9207 compliance**, **extension update rollback safety**, and **PTY resource cleanup** — all targeting production stability.

---

## 2. Releases
| Version | Type | Key Changes |
|---------|------|-------------|
| [`v0.62.0-nightly.20260917.g6a466a7e2`](https://github.com/google-gemini/gemini-cli/releases/tag/v0.62.0-nightly.20260917.g6a466a7e2) | Nightly | Automated version bump; see [full changelog](https://github.com/google-gemini/gemini-cli/compare/v0.62.0-nightly.20260916.g6a466a7e2...v0.62.0-nightly.20260917.g6a466a7e2) for incremental diffs. |

---

## 3. Hot Issues (Top 10 by Impact & Discussion)

| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent recovery after `MAX_TURNS` reported as GOAL success | Masks true interruption; breaks trust in subagent status reporting. **P1, needs retest** | 13 comments, 2 👍 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs indefinitely | Blocks core workflow; workaround = disable subagents. **P1, needs retest** | 8 comments, 8 👍 |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | Leverage model’s bash affinity via zero-dep sandboxing | Strategic: aligns tooling with Gemini 3’s native POSIX strengths. **P2, large effort** | 9 comments, 1 👍 |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Add deterministic redaction & reduce Auto Memory logging | Security: secrets enter model context before redaction. **P2** | 5 comments |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | Stop Auto Memory retrying low-signal sessions indefinitely | Prevents resource waste & inbox pollution. **P2** | 4 comments |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell execution stuck at “Waiting input” after completion | UX regression; affects simple commands. **P1, medium effort** | 4 comments, 3 👍 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Assess AST-aware file reads/search/mapping | Epic: could cut turns & token noise via precise code navigation. **P2** | 7 comments, 1 👍 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini underuses custom skills/sub-agents | Adoption gap: skills require explicit invocation. **P2** | 6 comments |
| [#22465](https://github.com/google-gemini/gemini-cli/issues/22465) | CLI hangs at interactive prompt creating Vite app | Common onboarding friction; needs behavioral eval. **P2** | 2 comments |
| [#21335](https://github.com/google-gemini/gemini-cli/issues/21335) | `/compress` not persistent across session resume | Token-saving feature lost on restart. **P2, small effort** | 2 comments, 2 👍 |

---

## 4. Key PR Progress (10 Notable Merges/Open PRs)

| PR | Status | Area | Summary |
|----|--------|------|---------|
| [#29117](https://github.com/google-gemini/gemini-cli/pull/29117) | **Closed** | Core / Security | Enforce RFC 9207 issuer identification in MCP OAuth flow — prevents token misrouting. |
| [#29166](https://github.com/google-gemini/gemini-cli/pull/29166) | **Closed** | Extensions | Back up extension dir before update; fixes broken rollback on failed updates. |
| [#29172](https://github.com/google-gemini/gemini-cli/pull/29172) | **Closed** | Core | Promote `gemini-3.8-flash` to default flash model; register 3.5–3.8 flash variants. |
| [#29265](https://github.com/google-gemini/gemini-cli/pull/29265) | **Open** | Agent | Prevent session context poisoning on interrupted turns (SIGINT/timeout). **P1** |
| [#29304](https://github.com/google-gemini/gemini-cli/pull/29304) | **Open** | Core | Fix surrogate-pair splitting during truncation (emoji-safe `sanitizeForDisplay`). |
| [#29340](https://github.com/google-gemini/gemini-cli/pull/29340) | **Open** | Core | Improve PTY fd cleanup & execution lifecycle mgmt (POSIX). |
| [#29358](https://github.com/google-gemini/gemini-cli/pull/29358) | **Open** | CLI | Align reverse-search (Ctrl+R) highlights with original text offsets. |
| [#29354](https://github.com/google-gemini/gemini-cli/pull/29354) | **Open** | Core | Add `--userns=keep-id` for rootless Podman sandboxes (fixes `EACCES` on rebuilds). |
| [#29359](https://github.com/google-gemini/gemini-cli/pull/29359) | **Open** | Agent | Preserve table rows/columns in `web_fetch` via `html-to-text` table selector. |
| [#29225](https://github.com/google-gemini/gemini-cli/pull/29225) | **Open** | Agent | Fix Skill Loader function (details pending). |

---

## 5. Feature Request Trends
1. **Subagent First-Class Citizenship** — Better status reporting (#22323), trajectory sharing (#22598), config override respect (#22267), symlink support (#20079).
2. **Model-Native Tooling** — Zero-dependency bash sandboxing (#19873), AST-aware code navigation (#22745, #22746), tactical extraction (#19561).
3. **Memory System Hardening** — Deterministic redaction (#26525), retry/quarantine logic (#26522, #26523), quality tracking (#26516).
4. **Session Persistence & UX** — `/compress` durability (#21335), terminal resize performance (#21924), interactive prompt handling (#22465).
5. **Observability** — Bug reports including subagent context (#21763), self-awareness of CLI flags/hotkeys (#21432).

---

## 6. Developer Pain Points (Recurring Frustrations)
- **Silent Failures & Misreporting**: Subagents claim success after hitting turn limits (#22323); generalist agent hangs without error (#21409).
- **Context Corruption**: Interrupted turns poison session history (#29265); Auto Memory leaks secrets pre-redaction (#26525).
- **Tooling Friction**: >128 tools triggers 400 errors (#24246); shell commands falsely show “awaiting input” (#25166); model litters tmp scripts (#23571).
- **Config Brittleness**: Browser agent ignores `settings.json` (#22267); symlinked agents not loaded (#20079); `/compress` lost on resume (#21335).
- **Platform Gaps**: Wayland breaks browser agent (#21983); rootless Podman permission errors (#29354); surrogate-pair truncation breaks emoji rendering (#29304).

---

*Generated from `google-gemini/gemini-cli` GitHub data as of 2026-09-17. All links point to live issues/PRs.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-09-17

## Today's Highlights
Three patch releases (v1.0.86-0 → v1.0.86-2) shipped in 24 hours, focusing on session resilience (corrupt-transcript recovery, resume fixes), UX polish (readable reasoning text, autopilot stop behavior), and a new opt-in for custom agents to consume repository instruction files (`AGENTS.md`, `copilot-instructions.md`, `CLAUDE.md`). Meanwhile, the issue tracker shows a wave of closures on long-standing requests (reasoning-effort per agent, subagent visibility, Windows batch-editor support) alongside fresh regressions in auto-model mode, MCP reload logic, and macOS keyboard input.

## Releases
| Version | Key Changes |
|---------|-------------|
| **v1.0.86-2** | Fixes resume logic when no plugin/discovery/working-directory overrides are present. |
| **v1.0.86-1** | **Added**: Custom agents can set `include-custom-instructions: true` in frontmatter to pull in repo-level instruction files. **Fixed**: Resume-session regression from v1.0.86-0. |
| **v1.0.86-0** | **Fixed**: Session resume survives recoverable transcript corruption; expanded reasoning text no longer dimmed; autopilot halts after accepted task completion instead of continuing. |

## Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|---------------------|
| [#2904](https://github.com/github/copilot-cli/issues/2904) | **Custom Agent YAML Frontmatter Should Support Reasoning Effort** | Enables per-agent reasoning budgets instead of global `--effort` flag; critical for cost/latency tuning. | 9 comments, **23 👍** — *Closed (implemented?)* |
| [#1322](https://github.com/github/copilot-cli/issues/1322) | **Show Subagent Tool Call Details** | Parity with VS Code Copilot Chat; developers need visibility into subagent actions for debugging. | 7 comments, **25 👍** — *Closed* |
| [#2050](https://github.com/github/copilot-cli/issues/2050) | **Claude Sonnet 4.6 503 GOAWAY Errors** | Model-specific connection instability blocks production workflows; Gemini works as fallback. | 9 comments, 4 👍 — *Closed* |
| [#3100](https://github.com/github/copilot-cli/issues/3100) | **HTTP MCP Server with Bearer Token Fails OAuth Discovery** | Forces OAuth flow even when static Bearer token is supplied; blocks headless/remote MCP usage. | 1 comment, **10 👍** — *Open* |
| [#4847](https://github.com/github/copilot-cli/issues/4847) | **Managed-Settings Refresh Breaks IDE MCP Reload & `/allow-all`** | Long-running VS Code sessions lose MCP connectivity and permission state automatically. | 3 comments, 3 👍 — *Open* |
| [#4887](https://github.com/github/copilot-cli/issues/4887) | **Auto Model Mode Errors on `/btw` / `/ask`** | Regression in v1.0.86-2: model selector “Auto” breaks slash commands; per-model selection works. | 3 comments — *Open (filed today)* |
| [#4542](https://github.com/github/copilot-cli/issues/4542) | **Workspace `.mcp.json` Detected but Not Connected in Agent Session** | CLI shows servers as “Enabled” yet they’re unavailable inside interactive sessions. | 3 comments, 1 👍 — *Open* |
| [#2753](https://github.com/github/copilot-cli/issues/2753) | **Plugin Skills Missing from `<available_skills>`** | Marketplace skills appear in `/skills` UI but aren’t injected into the agent’s system prompt. | 2 comments — *Open* |
| [#4765](https://github.com/github/copilot-cli/issues/4765) | **CLI Fails to Read Config from Non-Git-Root Working Directory** | Multi-repo workspaces without a parent `.git` lose `.mcp.json`, hooks, and other config. | 2 comments — *Open* |
| [#3009](https://github.com/github/copilot-cli/issues/3009) | **MCP OAuth Callback Unreachable in Remote Containers/Codespaces** | No manual token-paste fallback; blocks MCP usage in cloud dev environments. | 2 comments, 1 👍 — *Open* |

## Key PR Progress
> **No pull requests updated in the last 24 hours.** All recent changes landed via direct commits to the release branches.

## Feature Request Trends
1. **Per-agent model control** — Reasoning effort, temperature, and model pinning per `.agent.md` (see #2904).
2. **Subagent observability** — Drill-down tool-call UI, streaming logs, and timing breakdowns (#1322).
3. **MCP hardening** — Bearer-token auth fallback (#3100), workspace config hot-reload (#4542, #4562), remote-container OAuth (#3009).
4. **Windows parity** — Batch/cmd editor support (#1882), Git config leakage (#4531), SEA cache path normalization (#2890).
5. **Session UX** — `/btw`-style side queries without context pollution (#2778), reliable `/undo` semantics (#3674).
6. **Sandbox & policy granularity** — Network allowlists that actually reflect UI state (#4854), plan-mode read-only detection (#4220).
7. **Plugin/skill discoverability** --plugin-dir skills in `/skills` & `/env` (#4886), plugin skills in agent prompt (#2753).
8. **Internationalization** — Chinese IME cursor positioning (#3170).

## Developer Pain Points
| Area | Recurring Friction |
|------|---------------------|
| **MCP / Remote Dev** | OAuth callback unreachable in Codespaces/containers; no manual code paste; workspace config ignored outside git root; auto-refresh breaks live sessions. |
| **Session Stability** | Transcript corruption recovery needed; auto-model mode breaks slash commands; `/undo` resurrects deleted files; plan mode false-positives on read-only `gh api`. |
| **Configuration Loading** | Non-git-root workspaces invisible to config loader; `--plugin-dir` skills hidden from UI; SEA cache mismatch on macOS. |
| **Input & Rendering** | macOS Terminal keyboard lockup (v1.0.84-8); Chinese IME cursor offset; `/skills` UI blocks mouse text selection. |
| **LSP / Tooling** | OmniSharp/tsgo initialize timeouts on large projects; malformed file paths crash TypeScript LSP. |
| **Windows** | Silent crash on Win11 Insider (BEX64); batch-script editor support missing; Git config env vars leak into child processes. |

---
*Digest generated from github/copilot-cli data as of 2026-09-17. Links point to live GitHub items.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-09-17

---

## 1. Today's Highlights
No new releases shipped in the last 24 hours. The community surfaced a **critical runtime bug** (#2647) where a 5-hour usage-limit error triggers an unbounded retry loop—spawning detached subagents that consume quota for 14+ hours. A new example PR (#2648) demonstrates integrating HOL Guard as a `PreToolUse` gate for shell-command safety.

---

## 2. Releases
*No releases published in the last 24 hours.*

---

## 3. Hot Issues

| # | Title | State | Why It Matters | Community Signal |
|---|-------|-------|----------------|------------------|
| [#2647](https://github.com/MoonshotAI/kimi-cli/issues/2647) | Session keeps burning quota after terminal 403 "5-hour usage limit": subagent spawns detached retry-loop calling kimi CLI overnight, main agent retries for 14h | **OPEN** | **High-severity reliability issue.** A single auth error cascades into runaway processes that exhaust quota overnight, with no back-off or circuit-breaker. Directly impacts cost control and platform stability. | 0 comments, 0 👍 (filed 2026-09-16) — needs triage and urgent fix. |
| [#1276](https://github.com/MoonshotAI/kimi-cli/issues/1276) | `[bug] @ is missing files in autocomplete` | **CLOSED** | Autocomplete regression for `@`-file references—core UX for context injection. Fixed in v1.16.0. | 2 comments, 0 👍 (created 2026-02-27, closed 2026-09-17). |

> **Note:** Only 2 issues updated in the last 24h; both are included above.

---

## 4. Key PR Progress

| # | Title | State | Description |
|---|-------|-------|-------------|
| [#2648](https://github.com/MoonshotAI/kimi-cli/pull/2648) | `examples: add HOL Guard PreToolUse gate` | **OPEN** | Adds a reference `PreToolUse` hook that pipes shell commands to **HOL Guard** (`hol-guard command test <cmd> --json`) before execution. Allows only when `classification.explicitly_benign == true` && `minimum_action == allow`; exits with code 2 on denial. Useful template for policy-as-code guardrails. |

> **Note:** Only 1 PR updated in the last 24h.

---

## 5. Feature Request Trends
*Insufficient issue volume in the last 24h to extract trends.*  
Historical patterns (from broader repo activity) show recurring requests for:
- **Quota-aware retry/backoff policies** (now underscored by #2647)
- **Structured hook ecosystem** (PreToolUse, PostToolUse, Notification) — exemplified by #2648
- **Autocomplete & context-injection reliability** (see #1276)

---

## 6. Developer Pain Points
1. **Unbounded retry loops on auth/quota errors** — #2647 reveals no circuit-breaker, exponential back-off, or session-level abort when the provider returns a hard limit. Subagents detach and continue spinning, causing silent cost overruns.
2. **Autocomplete fragility** — @-file completion regressions (#1276) erode the primary context-injection workflow.
3. **Lack of built-in policy gates** — Community is building custom `PreToolUse` hooks (HOL Guard, etc.) because the CLI ships no native command-classification or allow-list mechanism.

---

*Digest generated from GitHub data (MoonshotAI/kimi-cli) as of 2026-09-17 00:00 UTC.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-09-17

## Today's Highlights
A critical regression in `SystemPrompt.environment` is crashing both `opencode run` and the TUI on every prompt (#48372, 25 👍), while multiple users report free-tier authentication failures despite running v1.18+. Meanwhile, the team is rapidly iterating on attachment handling—new PRs enable arbitrary file uploads delivered by path when models lack native support (#49466, #49467)—and a fix for Bedrock’s image-in-tool-result limit is in review (#49444).

---

## Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#48372](https://github.com/anomalyco/opencode/issues/48372) | **SystemPrompt.environment throws `TypeError`, crashes every prompt** | Blocks all interactive use (TUI & CLI); regression in v1.18.x | 25 👍, 8 comments — highest engagement today |
| [#48069](https://github.com/anomalyco/opencode/issues/48069) | **Bedrock GPT-6 Astra fails after read tool returns an image** | Provider returns HTTP 400; model doesn’t support image field in user messages | 3 👍, 13 comments — active debugging |
| [#47487](https://github.com/anomalyco/opencode/issues/47487) | **Agent accumulates 51 images, hits provider 50-image limit, session bricked** | No recovery path; user stuck with unrecoverable session | 5 comments — highlights missing guardrails |
| [#49430](https://github.com/anomalyco/opencode/issues/49430) / [#49438](https://github.com/anomalyco/opencode/issues/49438) / [#49435](https://github.com/anomalyco/opencode/issues/49435) / [#49473](https://github.com/anomalyco/opencode/issues/49473) | **“Free tier can only be used from within OpenCode” / “v1.17.0+ required” on v1.18+** | Widespread auth confusion; affects free-tier users across models | 4 distinct reports in 24h — possible backend/config drift |
| [#49442](https://github.com/anomalyco/opencode/issues/49442) | **TUI `/open` shows stale projects that can’t be removed; desktop crashes on non-existent project** | UX breakage for project switching; crash on invalid path | 4 comments — basic project hygiene missing |
| [#49464](https://github.com/anomalyco/opencode/issues/49464) | **MCP “Failed to get tools” when inputSchema contains boolean sub-schema** | Valid JSON Schema (boolean `true` in `properties`) marks entire server failed | New — MCP compatibility gap |
| [#49451](https://github.com/anomalyco/opencode/issues/49451) | **Slash skill commands don’t reload edited `SKILL.md`; requires restart** | Dev loop broken for skill authors; no hot-reload | 1 comment — workflow friction |
| [#49458](https://github.com/anomalyco/opencode/issues/49458) | **Global plugin under `C:\Program Files\...` silently ignored on Windows** | No error, no log, no event; plugins simply don’t load | Windows-specific silent failure |
| [#49463](https://github.com/anomalyco/opencode/issues/49463) | **Feature: deterministic retention of user messages + configurable compaction prompt** | Post-compaction context loss; users want control over what survives | New feature request, 0 comments yet |
| [#49452](https://github.com/anomalyco/opencode/issues/49452) | **v2.0.5: `opencode serve` returns 401 when auth env vars unset/empty** | Loopback-only server demands auth even when explicitly disabled | 2 comments — server hardening regression |

---

## Key PR Progress

| # | PR | Type | Summary |
|---|----|------|---------|
| [#49466](https://github.com/anomalyco/opencode/pull/49466) | feat(server) | Add `POST /api/experimental/fs/write` — enables server-side file staging for attachments models can’t read natively |
| [#49467](https://github.com/anomalyco/opencode/pull/49467) | feat(app) | **Attach any file**; unsupported types delivered as paths the model can open with tools (stacked on #49466) |
| [#49444](https://github.com/anomalyco/opencode/pull/49444) | fix(session) | **Bedrock: only keep tool-result images for Anthropic/Nova models** — fixes #48069 by respecting `supportsMediaInToolResult` per-model |
| [#49471](https://github.com/anomalyco/opencode/pull/49471) | fix(ai) | **SystemPrompt.environment crash fix** — targets #48372; restores prompt execution |
| [#49474](https://github.com/anomalyco/opencode/pull/49474) | feat(tui) | Restore V1-style tool detail visibility controls (hide completed outputs) — closes #45872 |
| [#49472](https://github.com/anomalyco/opencode/pull/49472) | fix(app) | Evict deleted sessions from home sessions index cache (mirrors archive path) — fixes stale UI after deletion |
| [#49445](https://github.com/anomalyco/opencode/pull/49445) | feat(app) | Alternate implementation: deliver unsupported attachments by path (similar to #49467) |
| [#49470](https://github.com/anomalyco/opencode/pull/49470) | fix(app) | Restore summary status indicator (server status dot) with full state coverage + tests |
| [#49469](https://github.com/anomalyco/opencode/pull/49469) | fix(ai) | Revert mid-conversation effort-switch preservation (#48513); simplifies model variant handling |
| [#47640](https://github.com/anomalyco/opencode/pull/47640) | feat | Offline document preview & text extraction for Office files & PDFs (fork catch-up) |

---

## Feature Request Trends
1. **Compaction control** — Users want deterministic retention of original user messages and a configurable compaction prompt (#49463) rather than opaque summarization.
2. **Universal attachment handling** — Strong push for “attach anything, deliver by path if model can’t read” (#49467, #49445) to unblock workflows with PDFs, PPTX, etc.
3. **MCP schema leniency** — Support for boolean sub-schemas in `inputSchema.properties` (#49464) to align with JSON Schema 2020-12.
4. **Skill hot-reload** — Edit `SKILL.md` and have `/skill` reflect changes without process restart (#49451).
5. **TUI session hygiene** — Remove stale projects, persist deletion/archive across views (#49442, #49472).

---

## Developer Pain Points
- **Free-tier auth confusion** — Multiple users on v1.18+ hit “free tier only within OpenCode” or “v1.17.0+ required” errors; suggests backend version check drift or token validation bug.
- **Unrecoverable session states** — Image accumulation (#47487), infinite compaction loops (#30443), and crash-on-invalid-project (#49442) leave users with no CLI escape hatch.
- **Windows second-class behavior** — Silent plugin load failure under `Program Files` (#49458), folder picker anchored to home dir (#43173), no `xdg-open` fallback in headless (#49447).
- **Provider-specific guardrails missing** — Bedrock’s 50-image limit and per-model media support not enforced client-side, causing hard failures.
- **Mobile/web UI fragility** — Session delete flicker (#37693), tab persistence bugs (#49454), headless browser spawn crashes.

---

*Digest generated from GitHub activity (issues/PRs updated 2026-09-17). Links point to anomalyco/opencode.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-09-17

## Today's Highlights
The Pi team closed 14 issues and merged 10 PRs in the last 24 hours, with a strong focus on TUI stability (line clipping, mouse tracking), clipboard encoding fixes, compaction queue bugs, and provider catalog corrections. Several high-impact bugs remain open: the `openai-codex`/`gpt-5.5` connection reliability issue (#4945, 79 comments), agent loop hangs on stalled provider streams (#8331), and TUI redraw storms on long transcripts (#9255).

---

## Releases
No new releases in the last 24 hours.

---

## Hot Issues (Top 10 by Impact & Activity)

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| **[#4945](https://github.com/earendil-works/pi/issues/4945)** `openai-codex` / `gpt-5.5` Connection Reliability | TUI freezes on `Working...` with no stream, tools, or errors; only recovery is Escape → aborted turn. Affects daily workflow for heavy users. | 79 comments, 33 👍 — highest engagement in repo |
| **[#8331](https://github.com/earendil-works/pi/issues/8331)** Agent loop hangs forever on stalled SSE stream | During provider incidents (e.g., Anthropic 529), `for await` in `streamAssistantResponse` never resolves, freezing sessions indefinitely. | 5 comments, 2 👍 — critical for production reliability |
| **[#9255](https://github.com/earendil-works/pi/issues/9255)** TUI full-screen redraw storm on long transcripts | `doRender()` takes full-render path nearly every frame when streaming thinking tail exceeds viewport, causing violent jumps/doubled text. | 4 comments, 1 👍 — UX blocker for long sessions |
| **[#9410](https://github.com/earendil-works/pi/issues/9410)** Escape interrupt causes ~60s TUI freeze in large sessions | Pressing Escape on ~465k token context freezes CLI on `⠸ Working` for ~58s; editor unresponsive, no logs. | 4 comments — severe regression in v0.85.1 |
| **[#8928](https://github.com/earendil-works/pi/issues/8928)** Parallel startup reports "No API key" for ~48s with expired OAuth | Multi-process setups hit 48s delay; error misleadingly points at active provider's credentials. Deterministic repro provided. | 9 comments — ops pain for CI/parallel agents |
| **[#9602](https://github.com/earendil-works/pi/issues/9602)** Compaction overflows by including omitted thinking messages | Thinking blocks omitted from earlier requests get included in compaction prompt, blowing past 16k output limit on local Qwen. | 4 comments — breaks local model workflows |
| **[#9051](https://github.com/earendil-works/pi/issues/9051)** `session_compact` custom message misses immediate overflow retry | Compact handler's `pi.sendMessage(..., { triggerTurn: false })` queued until retried turn ends, so retry runs without compacted context. | 4 comments — subtle but breaks compaction recovery |
| **[#9455](https://github.com/earendil-works/pi/issues/9455)** Google GenAI: `thinkingLevel: "MINIMAL"` 400 on gemini-3.8-flash | Disabling thinking via `reasoning: undefined` or `thinkingLevel: "MINIMAL"` fails with 400; blocks thinking control for Gemini. | 3 comments — provider integration bug |
| **[#9129](https://github.com/earendil-works/pi/issues/9129)** Windows bash timeout leaves pipeline processes orphaned | `taskkill /F /T` on MSYS2 bash doesn't kill pipeline stages; intermediate processes survive, leaking resources. | 4 comments — Windows-specific reliability issue |
| **[#9099](https://github.com/earendil-works/pi/issues/9099)** pi.dev registry serves wrong OpenRouter baseUrl (missing `/v1`) | Non-batch Anthropic models get `https://openrouter.ai/api` instead of `/api/v1`, causing 404 HTML responses. | 2 comments — catalog data bug affecting all OpenRouter users |

---

## Key PR Progress (Top 10 Merged/Open)

| PR | Type | Summary |
|----|------|---------|
| **[#9692](https://github.com/earendil-works/pi/pull/9692)** | **Fix (TUI)** | Clips overflowing render lines instead of crashing on `Rendered line exceeds terminal width` (fixes #9691). |
| **[#9682](https://github.com/earendil-works/pi/pull/9682)** | **Fix (Clipboard)** | Forces UTF-8 via `printf %s` before `pbcopy` on macOS, fixing non-ASCII corruption (—, José, ≈). |
| **[#9677](https://github.com/earendil-works/pi/pull/9677)** | **Fix (Compaction)** | Prevents compaction queue rollback from replaying accepted messages by using per-promise acknowledgements. |
| **[#9662](https://github.com/earendil-works/pi/pull/9662)** | **Fix (Bash Hook)** | Fails `!`/`!!`/RPC `bash` when `user_bash` handler throws (was silent fallback to local shell). Breaking change documented. |
| **[#9655](https://github.com/earendil-works/pi/pull/9655)** | **Fix (TUI/Windows)** | Moves mouse/alternate-screen init to `afterTerminalStart()` so DECSET sequences emit after raw mode (ConPTY fix). |
| **[#9694](https://github.com/earendil-works/pi/pull/9694)** | **Test (AI)** | Updates DeepSeek model refs from `deepseek-flash` → `deepseek-v4-flash` per catalog rename. |
| **[#9693](https://github.com/earendil-works/pi/pull/9693)** | **Test (Cross-platform)** | Makes footer cwd test use `path.sep` so it passes on Windows (`\`) and Unix (`/`). |
| **[#9663](https://github.com/earendil-works/pi/pull/9663)** | **Chore (SDK)** | Replaces deprecated `getModel` with `modelRuntime.getModel(...)` in SDK examples & README. |
| **[#9601](https://github.com/earendil-works/pi/pull/9601)** | **Perf (Coding Agent)** | Uses exact session-ID lookup instead of full transcript scan for headers; drops `async` for sync cache hits. |
| **[#9668](https://github.com/earendil-works/pi/pull/9668)** | **Feat (WIP)** | Adds prompt cache warming — experimental support for keeping caches warm across turns. |

---

## Feature Request Trends
From the issue corpus, the strongest recurring requests are:

1. **Session lifecycle control via Extension API** — #5952 (closed but signals demand), #9434 (open PR): safe `pi.newSession()` / `pi.requestSessionReplacement()` and `systemPromptAppend` for extensions.
2. **Structured/JSON output enforcement** — #1086 (closed but persistent): provider-level JSON schema support for automation pipelines.
3. **Reliable streaming & interrupt handling** — Multiple issues (#4945, #8331, #9410) demand graceful degradation on stalled streams and instant Escape response.
4. **Compaction robustness** — #9051, #9602, #9652, #9677: thinking-block handling, overflow retries, and queue rollback fixes.
5. **Cross-platform parity** — Windows bash killing (#9129), clipboard encoding (#9684), path separators (#9693), ConPTY mouse (#9655).

---

## Developer Pain Points
| Pain Point | Frequency | Representative Issues |
|------------|-----------|----------------------|
| **TUI freezes on large contexts / Escape** | High | #4945 (79c), #9410 (60s freeze), #9255 (redraw storm) |
| **Silent agent hangs on provider stalls** | High | #8331 (SSE stall), #9681 (empty tool_use stop) |
| **Compaction breaking on thinking/overflow** | Medium | #9051, #9602, #9652, #9677 |
| **Provider catalog / config drift** | Medium | #9099 (OpenRouter URL), #9455 (Gemini thinking), #9680 (capability detection) |
| **Windows-specific process/clipboard/terminal bugs** | Medium | #9129 (bash kill), #9684 (pbcopy), #9655 (ConPTY), #9693 (paths) |
| **Extension API gaps for session management** | Medium | #5952, #9434, #9639 (persist option) |

---

*Generated from github.com/badlogic/pi-mono — 41 issues & 19 PRs updated in last 24h.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-09-17

## 1. Today's Highlights
- **v0.24.0 shipped** with a breaking change: command hooks now expand project-directory variables via bash (PR #11864). Desktop v0.24.0 and a nightly build were also published.
- **Hook system stability** remains a focus: three long-standing hook regressions (#8622, #6321, #11858) were closed, while new issues track disabled-hook state loss (#11902) and Stop-hook block counting (#12062).
- **Context/token governance** emerged as a cross-cutting theme with four new issues (#12028, #12033, #12047, #12048, #12054) targeting non-conversation context bloat, `/context` accuracy, and telemetry gaps.

## 2. Releases
| Version | Type | Key Changes |
|---------|------|-------------|
| **v0.24.0** | Stable | **Breaking**: `fix(core)!` — bash now expands project-directory variables in command hooks ([#11864](https://github.com/QwenLM/qwen-code/pull/11864)). |
| **v0.24.0-nightly.20260916.b8def02aad** | Nightly | Docs: recorded merged ACP boundary acceptance; CI fix for published export. |
| **v0.23.5-preview.0** | Preview | Test: un-skipped Windows inode gate; `fix(cua)`: preserve Linux observations. |
| **desktop-v0.24.0** | Desktop | `fix(cli)`: scope ACP permission queue to session ([#11802](https://github.com/QwenLM/qwen-code/pull/11802)); `feat(channels)`: shared output modes. |

## 3. Hot Issues (10 Noteworthy)

| Issue | Status | Why It Matters |
|-------|--------|----------------|
| **[#11976](https://github.com/QwenLM/qwen-code/issues/11976)** Webview fails in VS Code Remote (Container) | ✅ Closed | Critical remote-dev blocker; fixed via `asExternalUri` for dynamic port binding. Ships in companion 0.24.0. |
| **[#8622](https://github.com/QwenLM/qwen-code/issues/8622)** Hook regression: PreToolUse/PostToolUse/PreCompact/SessionStart never fire | ✅ Closed | 0.21.6 regression affecting automation workflows; only `UserPromptSubmit`/`Stop` dispatched. |
| **[#6321](https://github.com/QwenLM/qwen-code/issues/6321)** `PreToolUse` hook `permissionDecision: "ask"` silently denied | ✅ Closed | Documented “ask” behavior never prompted users; tool calls rejected without confirmation. |
| **[#11902](https://github.com/QwenLM/qwen-code/issues/11902)** Disabled hook state lost on reload when command changes | 🟢 Open | Registry matches hooks by composite key; changing command drops `enabled` flag. Impacts `/hooks` UI persistence. |
| **[#12028](https://github.com/QwenLM/qwen-code/issues/12028)** Non-conversation context token governance | 🟢 Open | System prompt, tool schemas, `QWEN.md`, skills dominate token spend on 1M-context models; no visibility/control. |
| **[#12054](https://github.com/QwenLM/qwen-code/issues/12054)** Built-in tool schemas = 45.9% of non-conversation context (21k tokens) | 🟢 Open | Largest single context block; no size tracking or truncation strategy. Part of #12028. |
| **[#12047](https://github.com/QwenLM/qwen-code/issues/12047)** `/context` uses process-global cached-token count → cross-session charging | 🟢 Open | Daemon sessions billed for other sessions’ cache; `collectContextData` reads from singleton. |
| **[#12061](https://github.com/QwenLM/qwen-code/issues/12061)** Callback identity changes replace active tool scheduler mid-batch | 🟢 Open | `useReactToolScheduler` recreates scheduler on callback change; inline async callback in `useLlmStream` triggers rerender. |
| **[#12055](https://github.com/QwenLM/qwen-code/issues/12055)** Allow rejecting tool-permission prompt with reason fed back to model | 🟢 Open | UX gap: rejection is binary; model can’t learn *why* it was refused. Requested for CLI, VS Code, ACP clients. |
| **[#12056](https://github.com/QwenLM/qwen-code/issues/12056)** Pin latest plan/todo above conversation in VS Code companion | 🟢 Open | Plan scrolls out of view; sticky panel requested (originates from #1895 item 4). |

## 4. Key PR Progress (10 Important)

| PR | Status | Summary |
|----|--------|---------|
| **[#11538](https://github.com/QwenLM/qwen-code/pull/11538)** `feat: select OpenAI wire API per model` | 🟢 Open | Per-model `wireApi: "chat-completions" \| "responses"` for OpenAI-compatible providers; works across CLI, ACP, daemon, Web Shell, VS Code. |
| **[#11206](https://github.com/QwenLM/qwen-code/pull/11206)** `feat(mesh): persistent shared-thread agent collaboration` | 🟢 Open | Persistent workspace agents on shared threads: create/assign work, address agents, interject, inspect attributed history, cancel, resolve blockers. |
| **[#11799](https://github.com/QwenLM/qwen-code/pull/11799)** `feat(computer-use): remote session uses local desktop via node_repl relay` | 🟢 Open | Headless server session borrows user’s desktop `node_repl` (with CUA SDK) for Computer Use; one-time setup on desktop. |
| **[#12064](https://github.com/QwenLM/qwen-code/pull/12064)** `feat(core): move bwrap confinement to tool execution` | 🟢 Open | Linux sandbox scoped to command execution & file mutation workers; CLI keeps transport/auth/approvals on host. Operator-only `tools.executionSandbox` policy. |
| **[#12008](https://github.com/QwenLM/qwen-code/pull/12008)** `feat(serve): let users stop workspace runtimes to release ACP capacity` | 🟢 Open | User-directed ACP capacity recovery: inspect affected sessions, stop workspace runtime, preserve registration/files. |
| **[#11563](https://github.com/QwenLM/qwen-code/pull/11563)** `fix(channels): preserve Feishu rich content & quoted resources` | 🟢 Open | Images, named links, code blocks, quoted-parent resources preserved; multiple images via vision input contract. Deferred review findings in #12058. |
| **[#11859](https://github.com/QwenLM/qwen-code/pull/11859)** `ci(pnpm): install with pnpm everywhere, retire package-lock.json` | 🟢 Open | Completes #10444 Stages 2/3: CI uses pinned pnpm, matches release dependency graph; `npm publish` and scripts use pnpm. |
| **[#9466](https://github.com/QwenLM/qwen-code/pull/9466)** `refactor: anchor rewind mapping to stable prompt identity` | 🟢 Open | Rewind resolves target via persisted prompt identity (not positional turn order); survives resume, headless `-p --resume`, turn reordering. |
| **[#12062](https://github.com/QwenLM/qwen-code/pull/12062)** `fix(core): count Stop-hook blocks across tool round trips` | 🟢 Open | Consecutive Stop-hook blocks tracked per prompt across rounds; bounded record retired on allowed stops/new input/retries/goal turns. |
| **[#12052](https://github.com/QwenLM/qwen-code/pull/12052)** `fix(core): avoid false interruption after completed slash commands` | 🟢 Open | Exclude successful local slash-command input from restored model history; keep command+output in visible transcript. |

## 5. Feature Request Trends
1. **Context/Token Transparency & Control** — 5 issues (#12028, #12033, #12047, #12048, #12054) demand visibility into non-conversation token spend, accurate `/context` breakdowns, and per-session cache accounting.
2. **Hook System Completeness** — Beyond fixing regressions, requests for `InstructionsLoaded` hook (#4664), append-to-system-prompt (#10332), and hook state persistence (#11902) show desire for richer automation surfaces.
3. **Remote/Hybrid Development UX** — VS Code Remote fixes (#11976, #12059), Computer Use relay (#11799), and ACP capacity management (#12008) target seamless server↔local workflows.
4. **Plan/Task Visibility** — Sticky todo panel in VS Code (#12056, #1895) and Goal runtime trimming (#12053) reflect need for persistent high-level context during long sessions.
5. **Model/Provider Flexibility** — Per-model wire API selection (#11538), OpenCode Go support (#12057), and Feishu rich-content preservation (#11563) indicate expanding integration matrix.

## 6. Developer Pain Points
- **Hook reliability**: Multiple regressions (dispatch, “ask” prompt, state loss) erode trust in automation layer.
- **Token “dark matter”**: Non-conversation context (tools, system prompt, skills) consumes 20k+ tokens invisibly; no governance knobs.
- **Cross-session leakage**: Daemon architecture shares global caches (`/context` charging, hook registry), causing incorrect accounting.
- **Remote webview fragility**: Dynamic ports, IPv6, CSP, and forwarded-port Host gates break VS Code Remote/Container/WSL/SSH scenarios.
- **Scheduler instability**: React callback identity churn replaces active tool schedulers mid-execution (#12061).
- **Binary permission UX**: Tool rejection lacks “reason” feedback loop, forcing model to guess (#12055).
- **Windows CI debt**: Three persistent portability failures (bwrap git helper, directory naming, inode gates) require targeted fixes (#12063).

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-09-17

## 1. Today's Highlights
The project continues its aggressive **v0.9.14 refactor push** with 17 PRs merged in 24 hours, targeting performance regressions (deep-copy elimination, polling→watch migration), MCP protocol modernization, and subagent reliability fixes. Two critical production bugs were resolved: session restore false-positives (#6207) and steering delivery lies (#6276). The umbrella crate-decomposition epic (EPIC-005, #5316) remains the longest-running discussion (29 comments), signaling architectural debt is the top community concern.

## 2. Releases
**None** — No new versions published in the last 24h. v0.9.14 is actively being assembled via stacked PRs.

## 3. Hot Issues (Top 10 by Impact & Discussion)

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| **[#5316] EPIC-005: CodeWhale TUI Crate Decomposition** | 973k→957k lines still leaves 118/128 modules in one component; blocks all modularization. | 29 comments, 38 days open — **highest engagement**; Linear plan is execution authority. |
| **[#6207] Session picker rejects valid saved sessions** | Users cannot resume sessions despite valid runtime stores; false "another host" error. | 16 comments, 2 days — **production blocker** for session workflow. |
| **[#5586] Decompose mega-files: lib.rs (18.7k), config.rs (12.3k), client.rs (11.1k)** | Directly feeds EPIC-005; these files are the core coupling hotspots. | 8 comments, part of C09 execution plan. |
| **[#6036] "Fleet" and "agent" are the same concept stored twice** | Data duplication causes confusion; `scout` exists in both stores identically. | 5 comments, founder-acknowledged design flaw; decision recorded in #6038 to keep both but rename. |
| **[#6185] Resume renders empty transcript despite intact journal** | Force-quit recovery broken; repair re-runs on every load but never persists. | 4 comments, **data-loss adjacent** — journal exists but UI shows nothing. |
| **[#6278] Write-claim contention forbids N workers writing disjoint files** | Natural fan-out pattern (parallel workers → disjoint outputs) rejected by ledger. | 3 comments, **blocks subagent scaling**; root cause in `coord/ledger.rs:587`. |
| **[#6244] Fleet role selector ambiguity blocks agent spawn** | Production failure: `role:general` ambiguous when multiple members share role. | 3 comments, **tool-boundary hard failure** — model gets unactionable error. |
| **[#6282] Cap child tool results at 1 MiB / 10k tokens** | 542KB file read burned 638k input tokens → worker death, zero workspace changes. | 2 comments, **cost/runaway prevention** — pacing checked between steps, not intra-step. |
| **[#6187] MCP: no connection supervision** | Dead servers stay "ready" until next call fails; no auto-reconnect or `list_changed`. | 2 comments, **reliability gap** — lazy-only recovery. |
| **[#6293] Decompose tools/subagent/mod.rs (19k lines)** | 19k lines + 23k test lines; every fix pays "find defect in unholdable file" tax. | 0 comments (new), but **architectural prerequisite** for subagent stability. |

## 4. Key PR Progress (Top 10 by Impact)

| PR | Status | Summary |
|----|--------|---------|
| **[#6286] fix(tui): preserve chat roles after compaction** | CLOSED | Compaction moved generated summaries before retained prompt to satisfy strict paired chat templates (`user→assistant→tool→user`). |
| **[#6258] Shoreline: TUI redesign rebased onto main** | CLOSED | Fresh-install default UI; rescued from stalled #6222 (200 commits behind). |
| **[#6288/6171] feat(providers): add AICraft OpenAI-compatible template** | CLOSED | Community contribution (BX166); follows SenseNova/Groq/Cerebras pattern. |
| **[#6284] test(runtime): pin interrupted-turn pending-user-input settlement** | CLOSED | Closes #6275; adds interrupt twin test for `TurnComplete(Interrupted)` settling pending prompts. |
| **[#6279] fix(tui): gate recommended_plugins to once per engine** | CLOSED | Closes #6274; `RecommendedPluginGate` suppresses tips for loaded skills, one-shot per engine lifetime. |
| **[#6281] feat(mcp): negotiate protocol revision (2025-06-18) + dsh converter** | CLOSED | First half of #6280; unpins 2024-11-05 revision, adds bundle-mode converter. |
| **[#6096] feat(commands): adopt capability shapes in session-export (FEAT-025)** | CLOSED | Rewires `/export` through portable command contract; structural only, no behavior change. |
| **[#6273] perf(tui): stop deep-copying session 3× per debounced save** | CLOSED | Closes #6214 T3; eliminates two of three full-history clones in save path. |
| **[#6271] v0.9.14 slices: #6213 T4/T5, #6244, #6235** | CLOSED | Four independent fixes: stop re-parsing arg buffer/delta, fix fleet role ambiguity, fix detached `$EDITOR` spawn. |
| **[#6265] perf(tui): hand tool-output rows back as shared handle (Arc)** | CLOSED | Part of #6213 T1; replaces deep-copy with `Arc` handle for finalized tool output rows. |

## 5. Feature Request Trends
1. **Architectural decomposition** — Mega-crate/mega-file breakdown (EPIC-005, #5586, #6034, #6293) dominates; 3+ year debt payoff.
2. **Subagent reliability & scaling** — Write-contention (#6278), budget death (#6277), result capping (#6282), role ambiguity (#6244) form a cluster.
3. **MCP modernization** — Protocol negotiation (#6280/#6281), connection supervision (#6187), plugin re-hashing (#6209).
4. **Performance via structural sharing** — `Arc` snapshots for session history (#6214), row caches (#6213 T1), filter hoisting (#6267), template compilation (#6266).
5. **Observability & debugging** — Steering delivery truth (#6276), telemetry flake fixes (#6270/#6268), security sweep automation (#6058).

## 6. Developer Pain Points
- **Session resume is fragile**: False "another host" errors (#6207), empty transcripts despite intact journals (#6185), dual persistence owners (#6144).
- **Subagent delegation doesn't match mental model**: Disjoint-file writes rejected (#6278), worker budget consumed by descendants (#6277), runaway token burns (#6282).
- **Navigation inconsistency**: Same keys behave differently across menus (#6290); Fleet menu "convoluted" per founder.
- **Mega-file tax**: 19k-line `subagent/mod.rs` (#6293), 18k-line `lib.rs` (#5586) make every fix high-risk; `use super::*` coupling.
- **Steering lies to users**: Runtime API reports delivery before engine decides; engine silently drops (#6276) — user clears composer, guidance lost.
- **MCP feels abandoned**: No supervision (#6187), pinned to 2024 spec (#6280), re-hashes bundles per call (#6209).

---

*Data source: `github.com/Hmbown/DeepSeek-TUI` (issues/PRs labeled under Codewhale project). All links point to original GitHub items.*

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*