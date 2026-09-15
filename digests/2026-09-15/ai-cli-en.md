# AI CLI Tools Community Digest 2026-09-15

> Generated: 2026-09-15 04:34 UTC | Tools covered: 10

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

# AI CLI Tools Ecosystem — Cross-Tool Comparison Report (2026-09-15)

---

## 1. Ecosystem Overview

The AI CLI landscape is bifurcating into **enterprise-grade platforms** (Claude Code, OpenAI Codex, GitHub Copilot CLI, Gemini CLI) shipping daily patches with dedicated teams, and **community-driven/emerging tools** (OpenCode, Qwen Code, Pi, DeepSeek TUI, Kimi) iterating on architectural foundations. A clear convergence is visible around **session durability**, **multi-agent orchestration**, **extensibility via hooks/plugins**, and **cross-provider normalization** — but execution maturity varies dramatically. Windows reliability, sandbox isolation, and model-provider interoperability remain universal pain points. The pace of alpha/nightly releases (Codex 4 in 24h, Gemini nightly, Qwen nightly) signals intense competition on developer experience fundamentals rather than model capabilities alone.

---

## 2. Activity Comparison (2026-09-15)

| Tool | Releases (24h) | Hot Issues (Top 10) | PRs Updated (24h) | Release Cadence |
|------|----------------|---------------------|-------------------|-----------------|
| **Claude Code** | 2 patches (v2.1.272, v2.1.271) | 10 (top: 175 comments, 426 👍) | 3 (2 closed, 1 docs) | Weekly patches + RFC-driven features |
| **OpenAI Codex** | 4 alphas (0.155.0-α.2.4→α.6) | 10 (top: 53 comments, 50 👍) | **10+ merged** | Rapid alpha stabilization sprints |
| **Gemini CLI** | 1 nightly (v0.61.0-nightly) | 10 (top: 13 comments, 8 👍) | **10 merged** | Daily nightlies + security hardening |
| **GitHub Copilot CLI** | 3 patches (v1.0.84-6→-8) | 10 (top: 5 comments) | 0 (patch-driven) | Multi-patch daily cycles |
| **Qwen Code** | 1 release + nightly + CUA driver | 10 (top: 5 comments) | **10 merged** | Feature-rich releases + nightly |
| **OpenCode** | 1 release (v1.18.31) | 10 (top: 63 👍, 45 comments) | 9 (mixed open/closed) | Weekly releases + architectural PRs |
| **Pi** | None | 10 (top: 6 comments, 5 👍) | **10 merged** | PR-driven, no tagged releases recently |
| **DeepSeek TUI** | None (v0.9.13 current) | 10 (top: 27 comments) | 5 (2 major v0.9.14 slices) | Milestone-based (v0.9.14 in progress) |
| **Kimi Code CLI** | None | 4 (2 new, 2 closed) | 0 | Low velocity, sporadic updates |
| **Grok Build** | None | — | 0 | Inactive |

**Key Signal**: Codex, Gemini, Qwen, and Pi show highest **engineering throughput** (10+ PRs/day). Copilot CLI and Claude Code favor **rapid patch releases** over PR visibility. OpenCode and DeepSeek TUI are in **architectural transition phases** (layout overhaul, crate decomposition).

---

## 3. Shared Feature Directions (Cross-Tool Convergence)

| Requirement | Tools Affected | Specific Needs |
|-------------|----------------|----------------|
| **Extensibility / Plugin Architecture** | Claude Code (#91870 Mods RFC), OpenCode (plugin SDK), Qwen Code (dynamic workflows, hooks), Pi (extension hooks), Copilot CLI (MCP marketplaces) | Function hooks, dynamic workflow loading, marketplace discovery, agent/skill isolation, cross-session messaging |
| **Session Durability & Resume** | Claude Code (context loss on resume), Codex (follow-ups vanish, history loss), Copilot CLI (stale connection IDs), OpenCode (timestamp staleness), Pi (exact session-ID lookup), Qwen Code (ACP serialization) | Persistent tool schemas, permission mode retention, attachment inheritance, transcript integrity, fast session lookup |
| **Multi-Agent / Subagent Orchestration** | Claude Code (Cowork/Remote), Codex (duplicate MCP stacks), Gemini CLI (subagent MAX_TURNS, hangs), Copilot CLI (latency, orphaned subagents), Qwen Code (container subagents), DeepSeek TUI (Fleet models) | Turn-limit transparency, recovery semantics, skill discovery, capacity management, idle reclamation, cross-worktree support |
| **Cross-Provider Normalization** | Pi (Bedrock/Anthropic/Vercel cache accounting), Qwen Code (DeepSeek token limits), Codex (custom provider schema rejections), DeepSeek TUI (model pin migration), Copilot CLI (Grok/Gemini tool limits) | Unified cache-token accounting, tool-schema sanitization, model-capability registry, graceful degradation on limits |
| **Sandbox & Isolation Hardening** | Claude Code (Linux `unshare` failures), Codex (Windows sandbox registration), Gemini CLI (expansion guards, `bwrap`), Qwen Code (`bwrap` backend, container subagents), Copilot CLI (network allow/deny) | Per-call expansion bounds, kernel-level sandboxing (`bwrap`), container-backed execution, Windows sandbox registration resilience |
| **Windows Parity** | Claude Code (Plan9 mount breakage), Codex (Chrome auth, silent exits, sandbox), Copilot CLI (console flashing, PowerShell), OpenCode (timeout rigidity), Qwen Code (extension update locks) | Hidden console launch, Plan9/WSL2 reliability, native host registration, file-lock workarounds, timeout configurability |
| **Observability & Cost Control** | Pi (token accounting, cache hits), Codex (quota visibility, rate-limit dashboards), DeepSeek TUI (usage diagnostics), Qwen Code (hook progress events), Claude Code (usage/rate-limit webhooks) | Real-time quota dashboards, per-model/per-tool token accounting, cache hit/miss tracking, compaction cost visibility |

---

## 4. Differentiation Analysis

| Dimension | Enterprise Platforms (Claude, Codex, Copilot, Gemini) | Community / Emerging (OpenCode, Qwen, Pi, DeepSeek TUI, Kimi) |
|-----------|------------------------------------------------------|---------------------------------------------------------------|
| **Target User** | Professional/enterprise developers, teams, orgs | Power users, OSS contributors, early adopters, niche workflows |
| **Release Discipline** | Patch/alpha cadence, backward compat priority | Milestone/nightly, breaking changes accepted |
| **Architecture** | Monolithic binaries + managed services (Remote, Cowork) | Modular crates (DeepSeek TUI), daemon/ACP (Qwen, OpenCode), transcript-first (Pi) |
| **Extensibility Model** | Proprietary hooks (Claude Mods), MCP (Copilot, Codex), Skills (Gemini) | Open plugin SDKs (OpenCode), dynamic workflows (Qwen), extension hooks (Pi) |
| **Provider Strategy** | First-party model lock-in + select partners (Bedrock, Vertex) | Provider-agnostic, multi-gateway (Pi), local-first (DeepSeek TUI, OpenCode) |
| **UI/UX Philosophy** | Polished TUI + IDE extensions + web dashboards | Keyboard-first TUI, terminal-native, scriptable |
| **Enterprise Features** | SSO, audit logs, policy directories, managed sandboxes | Limited; Pi adding policy dir vetting, OpenCode project-based worktrees |
| **Differentiator** | **Reliability at scale, IDE integration, org governance** | **Architectural flexibility, local control, transparency, hackability** |

**Notable Outliers**:
- **Pi**: Transcript-as-source-of-truth architecture; mid-conversation system messages as first-class entries; aggressive provider normalization.
- **DeepSeek TUI**: Crate decomposition for maintainability; Fleet/sub-agent model routing; GPUI/IDE multi-client via event projection.
- **Qwen Code**: ACP daemon for multi-tenant serving; CUA driver for computer-use; container/bwrap sandboxing opts.
- **Kimi Code**: Minimal community traction; focused on CJK IME and collaborative review workflows.

---

## 5. Community Momentum & Maturity

| Tier | Tools | Indicators |
|------|-------|------------|
| **High Momentum + High Maturity** | **Claude Code**, **GitHub Copilot CLI** | Sustained patch velocity, high-engagement issues (100+ comments), enterprise adoption signals, dedicated security/enterprise PRs |
| **High Momentum + Rapid Iteration** | **OpenAI Codex**, **Gemini CLI**, **Qwen Code** | Daily alphas/nightlies, 10+ PRs/day, active architectural PRs (daemon decoupling, sandbox backends, extension systems) |
| **Architectural Transition (High Risk/High Reward)** | **OpenCode**, **DeepSeek TUI**, **Pi** | Major refactors in progress (layout, crate decomposition, transcript model), strong community debate (63 👍 on layout), foundational PRs merging |
| **Low Velocity / Niche** | **Kimi Code CLI**, **Grok Build** | <5 issues/day, no recent releases, limited PR activity |

**Maturity Markers**:
- **Claude Code**: Only tool with "weeks not days" committed feature timeline (Mods RFC) and Windows regression tracked as production blocker.
- **Codex**: Only tool with explicit **retry classification for quota errors** (PR #45602) and **daemon lifecycle decoupling** from CLI install.
- **Gemini CLI**: Leading on **security hardening** (RFC 9207, policy dir vetting, credential-safe logging) and **zero-dependency sandboxing** research.
- **Pi**: Most sophisticated **cross-provider normalization** work (3 concurrent cache-token bugs across Bedrock/Anthropic/Vercel).

---

## 6. Trend Signals (Developer Decision Value)

| Trend | Evidence | Implication for Developers |
|-------|----------|----------------------------|
| **Session/Context as Infrastructure** | 7/9 tools fixing resume, serialization, transcript integrity | Invest in tools with **durable session models** (Pi, Qwen ACP, OpenCode); avoid tools where resume = context loss |
| **MCP as Universal Interop Layer** | Copilot, Codex, Claude, Qwen, DeepSeek TUI all debugging MCP | **MCP 2026-07-28 compliance** is table stakes; expect tooling to converge on MCP for agent-tool communication |
| **Sandboxing Moving to Kernel/Container Level** | Gemini `bwrap`, Qwen `bwrap` + container subagents, Codex Windows registered packages | **Local-first isolation** winning over VM-based; `bwrap`/container backends becoming standard for untrusted code execution |
| **Extensibility Shifting from Config to Code** | Claude Mods (function hooks), Qwen dynamic workflows, OpenCode plugin SDK, Pi extension hooks | **Programmatic extensibility** > YAML/JSON config; plan for hook/plugin APIs when evaluating tools |
| **Windows is the Differentiator** | Every enterprise tool has critical Windows bugs; community tools often Windows-last | **Windows CI/CD and native host integration** signal team investment; avoid tools with "uninstall KB" workarounds |
| **Model-Agnostic Tooling Winning** | Pi (10+ providers), Qwen (DeepSeek/MiniMax/OpenAI), DeepSeek TUI (Fleet), OpenCode (local providers) | **Provider lock-in is anti-pattern**; tools normalizing cache, reasoning, tool schemas across vendors reduce switching cost |
| **Observability Becoming Product Requirement** | Pi token accounting, Codex quota dashboards, Deep

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (as of 2026-09-15)

---

## 1. Top Skills Ranking — Most-Discussed PRs

Based on recent activity, scope of changes, and community engagement signals (all PRs show "undefined" comments; ranked by recency + significance):

| Rank | Skill / PR | Functionality | Discussion Highlights | Status |
|------|------------|---------------|----------------------|--------|
| 1 | **[md2video-audio](https://github.com/anthropics/skills/pull/1703)** (PR #1703) | Compiles Markdown → professional MP4 videos with human-like voiceovers via Marp + TTS; zero-cost, no API keys | New multimedia output modality; enables doc→video pipelines for presentations, tutorials, social content | **Open** (updated 2026-09-14) |
| 2 | **[Hivemind](https://github.com/anthropics/skills/pull/1628)** (PR #1628) | Multi-agent orchestration: delegates mechanical work to headless `opencode` workers on free models; Claude stays planner/reviewer | Addresses context-window scarcity; novel "expensive model as orchestrator" pattern; zero-cost parallel execution | **Open** (updated 2026-08-24) |
| 3 | **[scnet-hpc](https://github.com/anthropics/skills/pull/1615)** (PR #1615) | Operate SCNet HPC clusters via profile-based SSH/Slurm: job generation, cluster discovery, module/accelerator guidance | Enterprise/HPC workflow; profile-driven cluster ops; fills gap for scientific computing users | **Open** (updated 2026-08-24) |
| 4 | **[buffer-api](https://github.com/anthropics/skills/pull/1627)** (PR #1627) | Portable Agent Skill for Buffer GraphQL API: schedule/manage/analyze social posts from any AI agent (Claude, Cursor, Codex, etc.) | Cross-agent portability; social-media automation; GraphQL-native skill design | **Open** (updated 2026-09-05) |
| 5 | **[pyxel](https://github.com/anthropics/skills/pull/525)** (PR #525) | Retro game development via Pyxel MCP server: write → run_and_capture → inspect → iterate loop for 8-bit/pixel-art games | Niche but high-engagement domain; MCP-based game dev loop; long-running PR (updated 2026-09-13) | **Open** |
| 6 | **[document-typography](https://github.com/anthropics/skills/pull/514)** (PR #514) | Typographic QC for AI-generated docs: prevents orphans, widows, numbering misalignment | Universal pain point (every doc Claude generates); quality-of-life for all document skills | **Open** (updated 2026-03-13) |
| 7 | **[ODT Skill](https://github.com/anthropics/skills/pull/486)** (PR #486) | Create/fill/read/convert OpenDocument Format (.odt, .ods); LibreOffice/ISO-standard alternative to DOCX | Open-format demand; template filling + parse to HTML; enterprise/interop use cases | **Open** (updated 2026-04-14) |
| 8 | **[UIZZE Partner Skill](https://github.com/anthropics/skills/pull/1595)** (PR #1595) | Anti-UI-slop skill: product-specific UI direction, required states, hard finish gate; optional MCP with 800k+ real screens | Partner ecosystem growth; design-quality enforcement; large visual reference library | **Open** (updated 2026-08-29) |

> **Note:** Several high-impact *fix* PRs (e.g., #1298 skill-creator Windows fixes, #1742 mcp-builder MCP 2.0 compat, #1765 office UTF-8 decoding) show recent activity but are maintenance rather than new skills.

---

## 2. Community Demand Trends — From Issues

| Trend | Evidence (Top Issues) | Implication |
|-------|----------------------|-------------|
| **Security & Trust Boundaries** | [#492](https://github.com/anthropics/skills/issues/492) (43 comments, 👍2): Community skills distributed under `anthropic/` namespace enable impersonation/trust abuse | **Critical**: Namespace governance, skill signing, or official vs. community demarcation needed |
| **Org-Wide Skill Sharing** | [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 👍8): No native sharing; manual .skill file exchange via Slack/Teams | **High**: Marketplace/registry with org scopes, install links, versioning |
| **Evaluation & Trigger Reliability** | [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 👍7): `run_eval.py` shows 0% trigger rate; [#1390](https://github.com/anthropics/skills/issues/1390) (4 comments): evaluation.py scores 0/N vs real MCP servers | **High**: Tooling gaps block skill authors from validating triggers/quality |
| **Context Window Management** | [#1487](https://github.com/anthropics/skills/issues/1487) (4 comments): `claude-api` skill eagerly injects ~156k tokens, exhausting context | **High**: Lazy-loading, token budgets, and selective injection patterns needed |
| **Duplicate/Plugin Conflicts** | [#189](https://github.com/anthropics/skills/issues/189) (6 comments, 👍9): `document-skills` + `example-skills` install identical content → duplicates | **Medium**: Plugin dependency resolution, deduplication, or clearer boundaries |
| **Bedrock/Cloud Provider Support** | [#29](https://github.com/anthropics/skills/issues/29) (4 comments): No documented path for AWS Bedrock | **Medium**: Multi-provider skill compatibility (auth, model routing) |
| **Skill-as-MCP Exposure** | [#16](https://github.com/anthropics/skills/issues/16) (4 comments): Expose skills via MCP protocol for interoperability | **Emerging**: Skills ↔ MCP bidirectional bridge |

---

## 3. High-Potential Pending Skills — Active PRs Likely to Land Soon

| PR | Skill | Why It’s High-Potential | Blockers/Risks |
|----|-------|------------------------|----------------|
| [#1742](https://github.com/anthropics/skills/pull/1742) | **mcp-builder: MCP ≥2.0 compat** | Fixes breaking change in upstream MCP SDK; unblocks all MCP-based skills | Straightforward import/header fixes; recently updated (2026-09-13) |
| [#1765](https://github.com/anthropics/skills/pull/1765) | **office: UTF-8 redlining diffs** | Fixes Windows/non-UTF-8 locale corruption in DOCX/PPTX/XLSX validators | Small, targeted fix; reproducer included; updated 2026-09-14 |
| [#1724](https://github.com/anthropics/skills/pull/1724) | **mcp-builder: default model → claude-sonnet-5** | Aligns evaluation harness with current best model; trivial version bump | One-line change + doc update; updated 2026-09-07 |
| [#1607](https://github.com/anthropics/skills/pull/1607) | **claude-api: mark retired models** | Removes deprecated model IDs from skill guidance; reduces confusion | Simple data update; fixes #1603; updated 2026-09-01 |
| [#1602](https://github.com/anthropics/skills/pull/1602) | **evaluation: serialization, metrics, encoding, stability** | Broad reliability fixes across evaluation harness (MCP result extraction, JSON errors, encoding) | Touches multiple skills; needs review but high value |
| [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator: isolate trigger evals, Windows fixes** | Fixes false negatives in trigger detection; Windows `select()` pipe issue; runtime failure handling | Long-running (since 2026-06-10); core tooling fix; updated 2026-09-15 |

> **Watchlist:** #1703 (md2video-audio), #1628 (Hivemind), #1627 (buffer-api) — all new skills with novel patterns, recently updated, no obvious blockers.

---

## 4. Skills Ecosystem Insight — One-Sentence Summary

> **The community’s most concentrated demand is for *reliable, secure, and shareable skill infrastructure* — fixing evaluation/trigger tooling, resolving namespace trust boundaries, and enabling org-wide distribution — rather than any single functional skill category.**

---

# Claude Code Community Digest — 2026-09-15

---

## 1. Today's Highlights

Two patch releases shipped in the last 24 hours: **v2.1.272** (bug fixes and reliability improvements) and **v2.1.271** (fast mode for Remote sessions + mouse scroll support in the fullscreen `/config` panel). The community's top discussion remains **#91870** — the "Mods" extensibility RFC — now at 175 comments and 106 👍, with the team confirming a "weeks not days" ship timeline for function hooks. A critical Windows regression (**#92984**, 113 comments) blocks Cowork Plan9 shares after KB5124008; uninstalling the update is the current workaround.

---

## 2. Releases

| Version | Key Changes |
|---------|-------------|
| **v2.1.272** | Bug fixes and reliability improvements (no detailed changelog provided) |
| **v2.1.271** | • **Fast mode** for Claude Code Remote sessions (cloud & self-hosted runners) — respects host's fast-mode setting or `/fast` command where org policy allows<br>• **Mouse wheel scrolling** in the fullscreen `/config` panel |

[View releases](https://github.com/anthropics/claude-code/releases)

---

## 3. Hot Issues (Top 10 by Community Signal)

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| **[#91870](https://github.com/anthropics/claude-code/issues/91870)** Mods — make Claude 10x more extensible | RFC for **function hooks** plugin system; team committed to shipping in "weeks" | 175 comments, 106 👍 — highest engagement item |
| **[#77136](https://github.com/anthropics/claude-code/issues/77136)** Claude 4.7–5.0/Fable repetitive rhetorical tics | Model quality regression: coherent prose generation failing despite explicit style instructions | 122 comments, **426 👍** — strongest upvote signal in dataset |
| **[#92984](https://github.com/anthropics/claude-code/issues/92984)** Cowork (Windows): Plan9 mount fails after KB5124008 | Blocks all Windows Cowork users on current Win11 update; uninstall KB is only workaround | 113 comments, 58 👍 — active production blocker |
| **[#86928](https://github.com/anthropics/claude-code/issues/86928)** Sandboxed Bash intermittently fails: `unshare(CLONE_NEWUSER): Invalid argument` | ~10% failure rate on sandboxed Bash calls on Linux; `reproduced` label | 17 comments, 8 👍 |
| **[#88405](https://github.com/anthropics/claude-code/issues/88405)** Symlinked files in `.claude/rules/` not auto-loaded | Docs claim symlinks supported; reality contradicts — breaks shared-rule workflows | 12 comments, 5 👍 |
| **[#93782](https://github.com/anthropics/claude-code/issues/93782)** Regression 2.1.269: dictation paste broken in VS Code terminal (WSL2) | Voice input (Wispr Flow) no longer inserts via simulated Ctrl+V; 2.1.268 works | 7 comments, 3 👍 — `regression` label |
| **[#92758](https://github.com/anthropics/claude-code/issues/92758)** Local MCP servers: "Not ready after 60s" despite successful remote connection | Shared-pool readiness bug in Cowork Desktop (Windows) | 7 comments |
| **[#82624](https://github.com/anthropics/claude-code/issues/82624)** Web/CCR git stop hook: two false positives, one prescribes non-converging amend loop | Built-in hook rewrites history on correct commits; blocks agent turns | 7 comments, 1 👍 |
| **[#89392](https://github.com/anthropics/claude-code/issues/89392)** Bash tool silently strips backslashes on Windows/Git Bash | `\\` → `\` corruption in command argv; silent data loss | 6 comments |
| **[#94393](https://github.com/anthropics/claude-code/issues/94393)** Monitor tool: ignores `persistent` flag, timeout capped at 3.6M ms but actual lifetime ~30 min | Schema vs. behavior mismatch; breaks long-running monitoring | 2 comments, 4 👍 |

---

## 4. Key PR Progress

| PR | Status | Summary |
|----|--------|---------|
| **[#94184](https://github.com/anthropics/claude-code/pull/94184)** | **CLOSED** | `mods/diff`: pinned header with body-only scroll, built-in list/base chords, wheel routing, DiffDialog off fullscreen — parity with native `/diff` panel |
| **[#71627](https://github.com/anthropics/claude-code/pull/71627)** | OPEN | Docs: note that prompt-approved sandbox hosts are **session-scoped** (lost on resume) — clarifies `settings-bash-sandbox.json` behavior |
| **[#83890](https://github.com/anthropics/claude-code/pull/83890)** | **CLOSED** | Add `pylint.yml` — CI linting configuration |

> Only 3 PRs updated in the last 24h; two are closed merges, one is a documentation clarification.

---

## 5. Feature Request Trends

From the issue landscape, developers are consistently asking for:

1. **Extensibility via function hooks/plugins** — #91870 (Mods RFC), #94424 (usage/rate-limit events), #92533 (hook/agent isolation conflict), #82610 (marketplace plugins not surfaced in Desktop)
2. **Cowork/Remote session polish** — default project folder (#44933), Plan9 reliability (#92984), MCP readiness (#92758), session resume stability (#94229)
3. **VS Code extension parity** — session deletion (#93835), permission mode persistence across updates (#85077), diff UX duplication (#84542)
4. **Observability & debugging** — usage/rate-limit webhooks (#94424), monitor tool fixes (#94393), handover doc respect (#94367)
5. **Cross-platform terminal fidelity** — IME support (#70955), dictation paste (#93782), symlink handling (#88405), backslash preservation (#89392)

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence |
|------------|----------|
| **Model output quality regression** | #77136 (426 👍) — rhetorical tics, incoherent prose across 4.7–5.0/Fable despite explicit prompting |
| **Windows Cowork fundamentally fragile** | Plan9 mount breakage post-Windows update (#92984), MCP readiness race (#92758), mapped drive session invisibility (#78461), startup toggle unkillable (#48078), "can't reach computer" ghost state (#94229) |
| **Sandbox / isolation flakiness** | Linux `unshare` failures (#86928), agent worktree isolation broken by *any* Bash hook (#92533), memory-pressure reaper overkill (#78674) |
| **Session resume = context loss** | Dropped connector tool schemas (#91589), permission mode reset (#85077), scheduled tasks can't self-archive (#94418), binary output corrupts session permanently (#94408) |
| **Built-in tooling UX regressions** | Dictation paste broken (#93782), diff duplication (#84542), monitor tool schema lying (#94393), permission indicator glyph missing from fonts (#85021) |
| **Plugin/hook ecosystem gaps** | Marketplace plugins invisible in Desktop (#82610), git stop hook false positives (#82624), no usage/rate-limit events for dashboard mods (#94424) |

---

*Digest generated from github.com/anthropics/claude-code data as of 2026-09-15. Links point to live issues/PRs.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-09-15

---

## 1. Today's Highlights

The Codex team shipped four rapid-fire alpha releases (0.155.0-alpha.2.4 through alpha.6) in the last 24 hours, signaling active stabilization work on the 0.155 series. Meanwhile, the issue tracker is dominated by **model capacity/rate-limit errors** affecting Pro and Prox20 users across platforms, and a **cluster of Windows-specific regressions** — Chrome browser integration failing with API-key auth, sandbox registration races, and silent app exits. On the PR side, 20+ merges today focus on daemon lifecycle decoupling, Windows sandbox hardening, attachment handling, and retry logic for throttling/quota errors.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| `rust-v0.155.0-alpha.6` | Alpha | Latest in the 0.155 stabilization series |
| `rust-v0.155.0-alpha.5` | Alpha | Incremental alpha |
| `rust-v0.155.0-alpha.4` | Alpha | Incremental alpha |
| `rust-v0.155.0-alpha.2.4` | Alpha | Patch-series alpha |

> **Takeaway**: Four alphas in 24h suggests the team is iterating quickly on a specific regression or feature gate before a stable 0.155.0 cut. No changelogs published yet — watch the [releases page](https://github.com/openai/codex/releases) for notes.

---

## 3. Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#28507](https://github.com/openai/codex/issues/28507) | **Selected model at capacity** (Pro 5x, Windows) | 53 comments, 50 👍 — longest-running capacity report (since Jun 16), blocks paid users entirely | 🔥 **Highest engagement** — users report persistent "try a different model" with no workaround |
| [#43410](https://github.com/openai/codex/issues/43410) | **[Windows][Browser] Chrome control fails with API-key auth** | 30 comments, 17 👍 — `unsupported Codex auth method: apikey` breaks browser automation for custom-model users | Cross-referenced in #45317, #45589 — appears systemic |
| [#42765](https://github.com/openai/codex/issues/42765) | **Weekly limit dropped 45%→0% with zero usage** (Pro, Desktop) | 13 comments, 2 👍 — quota accounting bug; users lose credits while idle | Related to #43566, #44531 — suggests backend metering drift |
| [#43237](https://github.com/openai/codex/issues/43237) | **GPT-6 Astra rejects `hi` with `invalid_prompt`** (CLI, Linux/macOS) | 15 comments — minimal reproduction; model-side validation regression on trivial input | 1 👍 but technically significant — hints at prompt-preprocessing change |
| [#37453](https://github.com/openai/codex/issues/37453) | **Windows: duplicate MCP/node_repl stacks on subagent resume** | 13 comments — resource leak on historical thread resume; performance degradation over time | MCP lifecycle + subagent interaction bug |
| [#45019](https://github.com/openai/codex/issues/45019) | **App-server queued follow-up no longer exists** (macOS, X20 Pro) | 6 comments, **26 👍** — high 👍/comment ratio indicates widespread silent failure | Also reported as closed dup [#45592](https://github.com/openai/codex/issues/45592) |
| [#44723](https://github.com/openai/codex/issues/44723) | **Automations inject `function_call_output` without `call_id` → 400** | 8 comments — heartbeat/cron breaks sessions permanently on strict providers (DeepSeek) | Schema validation gap in automation pipeline |
| [#42520](https://github.com/openai/codex/issues/42520) | **Windows: Chrome native host JSON never created; stale junction** | 10 comments, 1 👍 — browser integration install succeeds but runtime artifacts missing | Fresh install regression in 26.901.x |
| [#45307](https://github.com/openai/codex/issues/45307) | **Windows: Send button disabled after first turn** (26.908.40834) | 6 comments — blocks multi-turn conversations; regression in latest desktop build | New in current release channel |
| [#29915](https://github.com/openai/codex/issues/29915) | **Permission/approval mode not persisted** (new & existing threads) | 6 comments, 4 👍 — long-standing (Jun 24), affects both desktop and CLI workflows | UX papercut with safety implications |

---

## 4. Key PR Progress (Top 10 Merged Today)

| # | PR | Area | Summary |
|---|----|------|---------|
| [#45602](https://github.com/openai/codex/pull/45602) | **Retry classification** | Fix `slow_down` → retryable (503); treat exhausted credits/spend limits as retryable stream errors |
| [#45580](https://github.com/openai/codex/pull/45580) | **Daemon update from CLI** | `codex app-server daemon update --from-cli` copies/pins invoking CLI package (supports downgrades, local builds) |
| [#45579](https://github.com/openai/codex/pull/45579) | **Attachment fork copy** | Non-ephemeral forks now inherit source thread attachments (new IDs, preserved payloads) |
| [#45559](https://github.com/openai/codex/pull/45559) | **Windows sandbox registration** | Resume refresh after provisioning service restarts (prevents interrupted readiness revocation) |
| [#45558](https://github.com/openai/codex/pull/45558) | **Daemon seeding from CLI** | Daemon lifecycle commands no longer require standalone managed install; CLI package supplies executable |
| [#45556](https://github.com/openai/codex/pull/45556) | **Attachment APIs** | Replace `persist` with `upload`/`resolve`; return inline bytes or file IDs; pass stores into sessions |
| [#45550](https://github.com/openai/codex/pull/45550) | **Windows registered package exec** | Opt-in `CODEX_WINDOWS_REGISTERED_CORE=1`; launch via service-recorded aliases with ownership validation |
| [#45549](https://github.com/openai/codex/pull/45549) | **Stream preservation** | Flush/consolidate answer + plan streams on turn termination — prevents lost math content |
| [#45548](https://github.com/openai/codex/pull/45548) | **Seatbelt Unix sockets** | Honor prepared `allow_unix_sockets` / `dangerously_allow_all_unix_sockets` in managed sandbox |
| [#45546](https://github.com/openai/codex/pull/45546) | **Daemon package decoupling** | Move daemon out of standalone CLI install → dedicated package; preserves CLI selection/shell profile |

> **Theme**: Heavy investment in **daemon lifecycle independence**, **Windows sandbox robustness**, and **attachment/session durability** — directly addressing the pain points surfaced in issues.

---

## 5. Feature Request Trends (from Issues)

| Direction | Evidence |
|-----------|----------|
| **Granular rate-limit visibility** | Multiple issues (#28507, #42765, #43566, #44531) ask for real-time quota dashboards, per-model limits, and idle-drain explanations |
| **Custom provider parity** | #44723, #37786, #45585 — strict Responses-API providers (DeepSeek, etc.) reject Codex schemas; need `wire_api="responses"` compliance |
| **Windows desktop reliability** | Browser integration (#43410, #42520, #45317, #45589), sandbox (#37453, #44736, #45593), silent exit (#37602), Send button (#45307) |
| **Session durability** | History loss (#42025), fork attachments (#45579), approval persistence (#29915), follow-up queue (#45019, #45592) |
| **Automation safety** | Heartbeat/cron breaking threads (#44723, #37786) — need schema validation and idempotency guarantees |

---

## 6. Developer Pain Points (Recurring Frustrations)

1. **"Model at capacity" opacity** — No visibility into which model, why, or when it clears; Pro/Prox20 users feel deprioritized (#28507, #44395, #44531)
2. **Windows as second-class platform** — Chrome extension install fails (#45589), native host missing (#42520), API-key auth rejected (#43410, #45317), sandbox races (#45559), silent crashes (#37602)
3. **Quota accounting drift** — Weekly limits decrement with zero activity (#42765, #43566); no audit trail or reconciliation
4. **Custom provider friction** — Schema rejections on `automation_update` (#37786), `tool_search` (#45585), missing `call_id` (#44723) — Codex emits schemas that strict OpenAI-compatible endpoints reject
5. **Session fragility** — Follow-ups vanish (#45019), history disappears on projection errors (#42025), forks lose attachments (fixed in #45579), approval modes reset (#29915)
6. **macOS stability** — SIGTRAP crashes on conversation reset (#45222), follow-up queue failures (#45592)

---

## Quick Links

- **Repo**: [github.com/openai/codex](https://github.com/openai/codex)
- **Releases**: [github.com/openai/codex/releases](https://github.com/openai/codex/releases)
- **Issues (new)**: [github.com/openai/codex/issues?q=created%3A%3E2026-09-14](https://github.com/openai/codex/issues?q=created%3A%3E2026-09-14)
- **PRs (merged today)**: [github.com/openai/codex/pulls?q=merged%3A2026-09-15+is%3Apr](https://github.com/openai/codex/pulls?q=merged%3A2026-09-15+is%3Apr)

---

*Digest generated from GitHub data as of 2026-09-15. For real-time updates, watch the repository or subscribe to issue/PR notifications.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-09-15

## Today's Highlights
The project shipped nightly **v0.61.0-nightly.20260915** with a focus on hardening core infrastructure: authentication error handling, sandbox expansion guards, stdin lifecycle, and enterprise policy directory security. Meanwhile, the issue backlog reveals a concentrated push to stabilize subagent orchestration (recovery, turn limits, skill adoption) and the Auto Memory pipeline (redaction, deduplication, inbox hygiene). A notable security fix lands RFC 9207 issuer validation for MCP OAuth flows.

---

## Releases
**v0.61.0-nightly.20260915.g9c1b0a610** — Automated nightly bump. The changelog (compare) shows the batch of core/security fixes merged yesterday (see Key PR Progress below). No user-facing feature flags in this drop.

---

## Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent reports GOAL success after hitting MAX_TURNS** | Masks real failures; downstream consumers (evals, CI) see false positives. P1, needs retest. | 13 comments, 2 👍 — active maintainer triage. |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent hangs indefinitely** | Blocks users who rely on delegation; workaround is “don’t use subagents.” | 8 comments, 8 👍 — high pain, P1. |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | **Zero-dependency OS sandboxing & post-execution intent routing** | Strategic: align CLI with Gemini 3’s native bash affinity; large effort. | 9 comments, 1 👍 — design discussion. |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **AST-aware file reads/search/mapping (EPIC)** | Could cut token spend & turn count via precise method-level reads. | 7 comments, 1 👍 — investigation phase. |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | **Gemini under-uses custom skills/sub-agents** | Reduces value of extensibility surface; users must explicitly invoke. | 6 comments. |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | **Auto Memory: deterministic redaction & reduce logging** | Secrets leak into model context before redaction; compliance risk. | 5 comments — security area. |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell exec stuck at “Waiting input” after completion** | Frequent UX break; simple commands hang the loop. P1, medium effort. | 4 comments, 3 👍. |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | **Browser agent: session takeover & lock recovery** | Persistent profiles deadlock on orphaned processes; fail-fast is too brittle. | 4 comments. |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | **Browser subagent fails on Wayland** | Linux desktop parity blocker; agent terminates with GOAL but no output. | 4 comments, 1 👍. |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | **400 error when >128 tools registered** | Tool explosion from skills/agents breaks API limits; needs scoping logic. | 3 comments. |

---

## Key PR Progress (Top 10 by Impact)

| # | PR | Area | Summary |
|---|----|------|---------|
| [#29242](https://github.com/google-gemini/gemini-cli/pull/29242) | **fix(core): stop matching 401 as substring in `isAuthenticationError`** | Auth/Security | Prevents spurious re-auth on error messages containing “401” (e.g., port 4012). |
| [#29335](https://github.com/google-gemini/gemini-cli/pull/29335) | **fix(core): preserve `AgentLoopContext` properties across object spread** | Core/Stability | Fixes prototype getter loss in `Config` class — potential source of context corruption. |
| [#29332](https://github.com/google-gemini/gemini-cli/pull/29332) | **fix(core): bound sandbox expansion per call** | Core/Safety | Stops infinite recursion when a tool repeatedly demands expansion; avoids OOM. |
| [#29329](https://github.com/google-gemini/gemini-cli/pull/29329) | **fix(cli): pause stdin after truncation, don’t destroy** | CLI/UX | `destroy()` made stdin unreadable for later readers; now pauses and logs give-up. |
| [#29328](https://github.com/google-gemini/gemini-cli/pull/29328) | **fix(a2a-server): honour `LOG_LEVEL`, keep creds out of logs** | Security/Observability | Logger hardcoded `info`; now respects env. Strips credentials from structured logs. |
| [#29330](https://github.com/google-gemini/gemini-cli/pull/29330) | **fix(cli): keep pre-logger input, read once** | CLI/React | Fixes React StrictMode purity violation in message state updaters. |
| [#29327](https://github.com/google-gemini/gemini-cli/pull/29327) | **fix(sdk): honour `AgentShellOptions.env` & `timeoutSeconds`** | SDK/Runtime | `exec()` ignored env & timeout — `sleep 30` with 1s timeout now actually times out. |
| [#29333](https://github.com/google-gemini/gemini-cli/pull/29333) | **fix(core): vet permissions of convention-found policy dirs** | Enterprise/Security | Validates user/workspace policy dir ownership & write perms, not just system tier. |
| [#29336](https://github.com/google-gemini/gemini-cli/pull/29336) | **fix(core): secure non-system policy dirs against write perms** | Enterprise/Security | Extends `isDirectorySecure` to all tiers; enables current-user ownership on POSIX/Win. |
| [#29117](https://github.com/google-gemini/gemini-cli/pull/29117) | **fix(core): enforce RFC 9207 issuer identification in MCP OAuth** | Auth/Standards | Validates `iss` in authorization response to prevent token misrouting. |

---

## Feature Request Trends (from Issue Corpus)
1. **Subagent maturity** — Recovery semantics, turn-limit transparency, skill discovery, trajectory sharing (`/chat share`), and persistent task tracking (deprecate `WriteToDo`).
2. **Memory & context hygiene** — Auto Memory redaction before model ingestion, deduplication of low-signal sessions, inbox quarantine for malformed patches.
3. **Toolchain evolution** — AST-aware read/search (tilth/glyph), native file-based task CRUD, bash-native sandboxing (zero-dep OS sandbox).
4. **Browser agent hardening** — Wayland support, profile lock recovery, settings.json override respect (`maxTurns`).
5. **Enterprise/Compliance** — Policy directory permission vetting, deterministic audit logs, credential-safe logging.

---

## Developer Pain Points (Recurring Frustrations)
- **Silent subagent failures** — MAX_TURNS reported as success; no context in `/bug` reports.
- **Agent hangs** — Generalist and browser agents stall on simple ops (folder create, Vite init, Wayland).
- **Shell exec ghost waits** — “Waiting input” after command finishes; forces manual cancellation.
- **Tool cardinality explosion** — >128 tools → 400 errors; no automatic scoping.
- **Memory opacity** — Auto Memory redaction post-hoc, inbox silently drops invalid patches, no visibility into extraction decisions.
- **Config fragility** — Symlinked agents ignored, `/compress` not persisted, settings.json overrides ignored by browser agent.
- **Terminal UX** — Resize flicker, stdin destruction breaking subsequent reads.

---

*Generated from github.com/google-gemini/gemini-cli data as of 2026-09-15. All links point to live GitHub items.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-09-15

---

## 1. Today's Highlights

Three patch releases (v1.0.84-6 through v1.0.84-8) shipped in the last 24 hours, delivering a concise transcript view, a new `/config` sidebar, sandbox network allow/deny rules, and fixes for Claude thinking-mode handling and session-end hooks. Meanwhile, the issue tracker shows a surge of fresh reports—10+ filed today—highlighting subagent latency, memory pressure on Linux, Windows console flashing, and MCP 2026-07-28 protocol gaps. No pull requests were updated today, indicating the team is in a rapid-patch cycle driven by community feedback.

---

## 2. Releases

| Version | Key Changes |
|---------|-------------|
| **v1.0.84-8** | • `transcriptView: "concise"` groups tool activity into expandable summaries<br>• Pause/resume Agent Factory runs from `/factories` dialog<br>• Model lists now refresh after sign-in/account switch/sign-out |
| **v1.0.84-7** | • Fixed thinking shape for adaptive-only Claude models (reasoning effort capped at `high` when thinking disabled)<br>• Run `sessionEnd` hooks when `/clear` closes a session |
| **v1.0.84-6** | • Added `/config` sidebar for in-CLI configuration<br>• Sandbox network host allow/deny rules without replacing upstream proxy<br>• Managed Edit/Write rules now cover recognized shell redirections & in-place `sed` |

> All three releases: [github.com/github/copilot-cli/releases](https://github.com/github/copilot-cli/releases)

---

## 3. Hot Issues (10 noteworthy)

| # | Title | Why it matters | Community signal |
|---|-------|----------------|------------------|
| [#4849](https://github.com/github/copilot-cli/issues/4849) | **Reduce latency and review-loop overhead in subagent workflows** | Core productivity blocker: subagent startup/handoff/review cycles take minutes per round-trip. Filed *today* by a heavy user. | 5 comments, 0 👍 — active discussion on architecture changes |
| [#4525](https://github.com/github/copilot-cli/issues/4525) | **[CLOSED] MCP legacy `initialize` sent after modern `server/discover`** | Broke MCP stdio servers using Python SDK 2.0 dual-era runner. Fixed in recent patches. | 7 comments, 3 👍 — high visibility, now resolved |
| [#4725](https://github.com/github/copilot-cli/issues/4725) | **Frequent JavaScript heap out of memory (Linux)** | CLI crashes every few minutes with V8 mark-compact exhaustion (~4 GB heap). Blocks Linux developers. | 5 comments, 1 👍 — needs memory profiling / GC tuning |
| [#4505](https://github.com/github/copilot-cli/issues/4505) | **Resumed session retains stale connection item IDs** | After resume, every prompt fails with `CAPIError: 400 input item ID does not belong to this connection`. Session unrecoverable. | 4 comments, 3 👍 — data-integrity regression |
| [#4549](https://github.com/github/copilot-cli/issues/4549) | **[Windows] Visible PowerShell console window flashes on every shell command** | Steals focus, creates near-constant distraction during agent activity. Major UX regression on Windows. | 2 comments, 1 👍 — needs hidden-conhost launch |
| [#4843](https://github.com/github/copilot-cli/issues/4843) | **Colors don't respect terminal theme in Warp (Mac)** | OS light/dark mode overrides Warp theme, making text unreadable. Affects growing Warp user base. | 2 comments, 0 👍 — theme-detection logic fix needed |
| [#4556](https://github.com/github/copilot-cli/issues/4556) | **Server-managed `extraKnownMarketplaces` fetched but never registered** | Enterprise plugin marketplaces silently fail to activate. Blocks org-wide plugin distribution. | 2 comments, 2 👍 — config merge path missing |
| [#3572](https://github.com/github/copilot-cli/issues/3572) | **Org-level custom agents invisible unless CWD has GitHub remote** | Enterprise agents only discoverable when launched from org repo. Limits adoption in monorepos / subdirs. | 2 comments, 3 👍 — long-standing (May), needs discovery refactor |
| [#4850](https://github.com/github/copilot-cli/issues/4850) | **Background subagent remains "running" indefinitely after activity stops** | Parent session never receives result; cannot cancel. Filed *today*. | 1 comment, 0 👍 — orphaned subagent lifecycle bug |
| [#4836](https://github.com/github/copilot-cli/issues/4836) | **Grok 4.5: 351 tools fail with HTTP 400 instead of reporting 350-tool limit** | Silent failure when tool count exceeds model limit. No guardrail or helpful error. | 0 comments — new model compatibility gap |

---

## 4. Key PR Progress

**No pull requests were updated in the last 24 hours.** The team appears to be shipping fixes directly via rapid patch releases (v1.0.84-6 → -8) rather than merging PRs. Watch the [PR queue](https://github.com/github/copilot-cli/pulls) for upcoming changes.

---

## 5. Feature Request Trends

| Theme | Representative Issues | Signal |
|-------|----------------------|--------|
| **Subagent / multi-agent orchestration** | #4849 (latency), #4850 (orphaned subagents), #4841 (plan-mode UI) | 3 fresh issues today — developers pushing complex delegation workflows |
| **MCP 2026-07-28 protocol support** | #4834 (multi round-trip), #4525 (legacy initialize), #4842 (OAuth refresh) | Protocol upgrade gap blocking enterprise MCP servers |
| **Enterprise policy granularity** | #4783 (yolo sandbox policy), #4837 (enabledPlugins persistence), #4847 (managed-settings refresh) | Admins need per-scope, per-sandbox controls |
| **Cross-terminal theming** | #4843 (Warp), #4839 (taskbar icon) | CLI visual integration with modern terminals |
| **Model-provider compatibility** | #4840 (BYOK Deepseek), #4836 (Grok tool limit), #4835 (Gemini enum bug) | Rapid model churn requires adaptive tool/schema handling |

---

## 6. Developer Pain Points

1. **Subagent workflow latency** — Minutes per review cycle make iterative development painful (#4849).
2. **Memory instability on Linux** — Recurring OOM crashes force restarts every few minutes (#4725).
3. **Session resumption reliability** — Stale connection IDs corrupt resumed sessions; `/fork` doesn't help (#4505).
4. **Windows console flashing** — Visible PowerShell windows on every tool call destroy focus (#4549).
5. **Enterprise plugin/agent discovery broken** — Policy-driven marketplaces and org agents silently fail to activate (#4556, #3572, #4837).
6. **MCP protocol mismatch** — CLI lags behind 2026-07-28 spec; dual-era servers break initialization (#4525, #4834).
7. **Model-specific tool/schema limits** — Hard failures (HTTP 400) instead of graceful degradation for Grok/Gemini/Deepseek (#4836, #4835, #4840).
8. **Misleading UI copy** — “Save feedback bundle” looks like submit; no taskbar icon toggle (#4848, #4839).
9. **Sandbox policy leakage** — “Allow dev tool access” bypasses filesystem rules for `python` etc. (#4846).
10. **Fail-closed auth window swallows `--yolo`** — Launch flags applied pre-auth, then discarded when policy resolves (#4844).

---

*Digest generated from github.com/github/copilot-cli data as of 2026-09-15. Links point to live GitHub items.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-09-15

## 📌 Today's Highlights
No new releases in the past 24 hours. The issue tracker saw four updates: two older bugs/enhancements were closed (clipboard macOS shortcut support, PicoClaw API access), while two new issues surfaced — an IME composition bug in `kimi web` and a feature request for structured visual annotations in Kimi Work sessions.

---

## 🚀 Releases
*No new releases published in the last 24 hours.*

---

## 🔥 Hot Issues (All 4 updated in last 24h)

| # | Title | Status | Why It Matters | Community Signal |
|---|-------|--------|----------------|------------------|
| [#1433](https://github.com/MoonshotAI/kimi-cli/issues/1433) | Clipboard image paste ignores `Cmd+V` on macOS | **Closed** | Fixes a platform parity gap: macOS users couldn't paste images via native shortcut. Indicates attention to cross-platform UX. | 👍 1, 2 comments |
| [#1435](https://github.com/MoonshotAI/kimi-cli/issues/1435) | Add PicoClaw support for Kimi For Coding API | **Closed** | Request to whitelist an open-source agent (PicoClaw) for the Coding plan API. Reflects ecosystem integration demand. | No reactions |
| [#2643](https://github.com/MoonshotAI/kimi-cli/issues/2643) | IME composition `Enter` treated as "send" in kimi web | **Open** | Critical for CJK users: pressing Enter to confirm composition inadvertently sends incomplete messages. High-friction UX bug. | New, 0 comments |
| [#2642](https://github.com/MoonshotAI/kimi-cli/issues/2642) | Visual annotations & review feedback on Agent replies in Kimi Work | **Open** | Structured, in-context review workflow for long-form Agent outputs (plans, reports). Moves beyond free-text follow-ups. | New, 0 comments |

---

## 🛠 Key PR Progress
*No pull requests updated in the last 24 hours.*

---

## 📈 Feature Request Trends
From the current issue set, two clear directions emerge:

1. **Ecosystem openness** — Developers want to bring their own agents/tools (e.g., PicoClaw) to the Kimi For Coding API, suggesting demand for looser API access controls or an official integration pathway.
2. **Collaborative review workflows** — The Kimi Work annotation request signals a shift from chat-style interaction toward structured human-in-the-loop review: inline comments, threaded feedback, and revision cycles on Agent-generated artifacts.

---

## 😣 Developer Pain Points
| Pain Point | Evidence | Frequency Hint |
|------------|----------|----------------|
| **Cross-platform shortcut inconsistencies** | `Cmd+V` ignored for image paste on macOS (#1433) | Recurring class of bug; appears in v1.22.0 |
| **IME-hostile input handling** | Composition `Enter` sends message prematurely (#2643) | Affects all CJK users; high daily friction |
| **Lack of structured feedback loops** | Only free-text follow-up for Agent output revision (#2642) | Explicitly requested as a workflow blocker |
| **API access restrictions for OSS agents** | PicoClaw blocked from Coding plan API (#1435) | Limits community-driven integrations |

---

*Digest generated from `github.com/MoonshotAI/kimi-cli` data as of 2026-09-15 00:00 UTC.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-09-15

## 1. Today's Highlights
OpenCode v1.18.31 shipped with critical ACP session restoration fixes and TUI authentication error handling. The community is intensely debating the forced removal of the legacy two-panel layout (3 issues, 93+ upvotes combined), while a macOS showstopper (`undefined is not an object` on every prompt) and a Copilot legacy plan exhaustion bug in v2.0 demand urgent attention. Core engineering is advancing session timestamp freshness, model credential reuse, and MCP tool schema sanitization.

## 2. Releases
**v1.18.31** — Core bugfix: restores ACP session model, effort, mode, and reasoning chunk boundaries when loading/resuming/forking sessions ([#49109](https://github.com/anomalyco/opencode/pull/49109)). TUI bugfix: surfaces remote config authentication errors at startup and exits with failure status. Extensions improvements (details truncated).

## 3. Hot Issues
| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| [#37012](https://github.com/anomalyco/opencode/issues/37012) Keep legacy layout option | Users lose single-window access to workspaces, agents, models; new UI requires multi-step navigation | 63 👍, 45 comments — highest engagement |
| [#48882](https://github.com/anomalyco/opencode/issues/48882) Restore persistent left sidebar | Direct follow-up to sidebar redesign (#20242); breaks established two-panel workflow | 21 👍, 16 comments |
| [#48835](https://github.com/anomalyco/opencode/issues/48835) New layout lacks multi-worktree support | Forced migration removes worktree capability entirely; blocks multi-repo workflows | 9 👍, 7 comments |
| [#48811](https://github.com/anomalyco/opencode/issues/48811) macOS: every prompt fails with `undefined is not an object` | Complete breakage on macOS; error in `SystemPrompt.environment` | 29 👍, 7 comments |
| [#48330](https://github.com/anomalyco/opencode/issues/48330) Copilot Legacy Plan consumed in single session v2.0 | 1500 req/mo exhausted in one session; v1 worked correctly | 7 comments, 0 👍 (high severity) |
| [#26602](https://github.com/anomalyco/opencode/issues/26602) Desktop 5-min Headers Timeout with slow local providers | Hardcoded 5-min timeout ignores provider config; kills long local LLM requests | 2 👍, 14 comments |
| [#30611](https://github.com/anomalyco/opencode/issues/30611) Sessions fail on transient network errors instead of retrying | Only `ECONNRESET` retried; other transient failures kill assistant turn | 1 👍, 9 comments |
| [#36893](https://github.com/anomalyco/opencode/issues/36893) `session.time_updated` stale during active turns | Active sessions sort as "old" in recency lists; breaks session management | 7 comments, PR #49105 in progress |
| [#46628](https://github.com/anomalyco/opencode/issues/46628) MCP tool schemas not sanitized for Anthropic | Root-level `anyOf/oneOf/allOf` causes 400 before any tool call | 6 comments |
| [#49095](https://github.com/anomalyco/opencode/issues/49095) CLI service unresponsive under multi-session load | Single Node.js process saturates CPU; session creation/switch degrades severely | 2 comments, new today |

## 4. Key PR Progress
| PR | Description | Status |
|----|-------------|--------|
| [#49105](https://github.com/anomalyco/opencode/pull/49105) fix(core): bump session `time_updated` on step lifecycle events | Fixes #36893 — updates timestamp during active turns for correct recency sort | Open |
| [#49109](https://github.com/anomalyco/opencode/pull/49109) fix(core): reuse models across credential switches | Prevents full model catalog rebuild on `/connect` account changes; perf win | Open |
| [#48985](https://github.com/anomalyco/opencode/pull/48985) fix(llm): preserve compatible tool signatures | Fixes #8321 — retains provider-owned continuation data in streamed tool calls | Open |
| [#49099](https://github.com/anomalyco/opencode/pull/49099) fix(ai): classify content policy errors by provider codes | Structured extraction for Azure (`content_filter`), OpenRouter (`error_type`) | Closed |
| [#49089](https://github.com/anomalyco/opencode/pull/49089) fix(tui): reset terminal modes and position epilogue cleanly on exit | Fixes #48776 — prevents corrupted terminal state and epilogue overprint | Closed |
| [#49076](https://github.com/anomalyco/opencode/pull/49076) feat(codemode): Uint8Array, drop `Program` prefix, unify interpreter context | Adds binary types; major interpreter cleanup (stacked with #49100, #49104) | Open |
| [#49103](https://github.com/anomalyco/opencode/pull/49103) fix(desktop): add standard Mac tab shortcuts | Adds ⌘⇧[ / ⌘⇧] for tab cycling; exposes commands in Shortcuts settings | Open |
| [#49097](https://github.com/anomalyco/opencode/pull/49097) fix(plugin): serve bundled SDK to loose plugin files on Bun | Resolves `@opencode/plugin` resolution in shipped Bun executable | Open |
| [#48867](https://github.com/anomalyco/opencode/pull/48867) feat(core): make worktree APIs project-based | Worktree ops now require `projectID`; enables inventory without full config load | Closed |
| [#48423](https://github.com/anomalyco/opencode/pull/48423) refactor(core): replace websocket flags with single transport preference | Collapses `capabilities.responsesWebsockets` + `websocket` into one user-overridable field | Open |

## 5. Feature Request Trends
1. **Layout flexibility** — 3 high-engagement issues demand legacy two-panel layout as an option; users cite workspace access, discoverability, and multi-worktree support as regressions.
2. **Provider ergonomics** — Interactive provider registration in `/connect` (#49091), well-known auth using bundled Bun runtime (#49094), and mise-managed upgrades (#48905).
3. **Session reliability** — Automatic retry with exponential backoff for LLM timeouts (#37412, closed but signals demand), session resume on transient errors (#30611).
4. **Multi-worktree / project-first workflows** — Worktree APIs moving to project-based (#48867), but UI still lacks multi-worktree support (#48835).
5. **Clipboard / remote access** — Copy-to-clipboard fails when hosted on LAN/IP (#37405), project picker sends host paths to remote server silently (#44150).

## 6. Developer Pain Points
- **Forced UI migration without parity** — Legacy layout removed but new layout lacks multi-worktree, persistent sidebar, and single-window access; users feel workflow broken.
- **macOS instability** — Showstopper `TypeError: undefined is not an object (evaluating 'a.name')` in `SystemPrompt.environment` blocks all prompts (#48811, 29 👍).
- **Provider timeout rigidity** — 5-min hardcoded desktop timeout ignores `timeout: false` or larger values (#26602).
- **Session fragility** — Non-`ECONNRESET` network blips kill turns (#30611); timestamps stale during active work (#36893).
- **Copilot v2.0 cost explosion** — Legacy per-request plan exhausted in one session (#48330).
- **MCP ↔ Anthropic incompatibility** — Root-level `anyOf/oneOf/allOf` in tool schemas causes 400 before execution (#46628).
- **CLI scalability ceiling** — Single-process bottleneck degrades severely at 5+ concurrent sessions (#49095).
- **Touch/accessibility gaps** — Web attachment remove button invisible on touch devices (#49102).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-09-15

## Today's Highlights
The Pi ecosystem is actively tackling cross-provider normalization bugs—especially around cache-token accounting for Bedrock, Anthropic, and Vercel AI Gateway—while shipping UX fixes for session handling, TUI rendering, and Windows shell detection. A notable architectural PR introduces mid-conversation system messages as first-class transcript entries, enabling durable instruction changes and tool availability across resumptions and branches.

---

## Releases
No new releases in the last 24 hours.

---

## Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#8752](https://github.com/earendil-works/pi/issues/8752) | **bedrock-converse: `usage.input` not normalized across model families** | Anthropic vs. OpenAI-family models report `inputTokens` differently (net vs. gross of cache), causing false cache-miss alerts and doubled input cost. Affects all Bedrock users. | 6 comments, 5 👍 |
| [#9210](https://github.com/earendil-works/pi/issues/9210) | **Anthropic Messages via gateway: `cacheWrite1h` never set** | 1-hour cache writes billed at 5-minute rate (1.25×) because `cacheWrite1h` stays `0` even when gateway honors TTL. Direct cost impact. | 5 comments |
| [#9211](https://github.com/earendil-works/pi/issues/9211) | **`vercelGatewayRouting` inert on `vercel-ai-gateway` provider** | Routing config (`only`, `order`) only applied in `openai-completions` adapter, but all built-in Vercel Gateway models use `anthropic-messages` API. Provider selection broken. | 5 comments |
| [#9391](https://github.com/earendil-works/pi/issues/9391) | **Stale signed thinking blocks replayed after compaction** | Compaction re-sends old thinking blocks with mismatched prefixes; Anthropic drops them every turn (`prefix_binding_mismatch`). Breaks long sessions. | 4 comments, 1 👍 |
| [#9457](https://github.com/earendil-works/pi/issues/9457) | **bedrock-converse: 1h cache writes bill at 5m rate** | `cacheWrite1h` never derived from `cacheDetails`; same root cause as #9210 but on Bedrock. Duplicate billing bug across providers. | 3 comments, 4 👍 |
| [#9440](https://github.com/earendil-works/pi/issues/9440) | **`--session-id` with fresh ID scans all transcripts** | 4K+ transcripts → 16s startup vs. 0.47s with `--no-session`. Blocks programmatic session creation at scale. | 3 comments |
| [#9051](https://github.com/earendil-works/pi/issues/9051) | **`session_compact` custom message misses immediate overflow retry** | Injected context-restoration message queued until retry ends, so immediate retry runs without it. Compaction reliability gap. | 3 comments |
| [#9610](https://github.com/earendil-works/pi/issues/9610) | **Confirm/select dialogs clipped on short terminals** | On ~12–20 row terminals (phone SSH), dialog body hidden; no keyboard scroll. Mobile/SSH usability regression. | 2 comments |
| [#9596](https://github.com/earendil-works/pi/issues/9596) | **Concurrent `pi -c` runs corrupt shared session file** | Two runs in same directory append to same transcript with no lock/warning. Silent data corruption. | 2 comments |
| [#9602](https://github.com/earendil-works/pi/issues/9602) | **Compaction overflows by including omitted thinking messages** | Thinking messages previously stripped from requests re-included during summarization, blowing context window. | 2 comments |

---

## Key PR Progress (Top 10 by Significance)

| # | PR | Summary | Status |
|---|----|---------|--------|
| [#9548](https://github.com/earendil-works/pi/pull/9548) | **Mid-conversation system messages** | System prompt/tool changes recorded in transcript (not silently rewritten). Enables durable instruction changes, branch restoration, cached prefix preservation. | Open |
| [#9601](https://github.com/earendil-works/pi/pull/9601) | **Avoid transcript scans for exact session IDs** | Fixes #9440: exact session-ID lookup instead of full transcript load. Microbenchmark: 16s → 0.47s startup. | Open |
| [#9607](https://github.com/earendil-works/pi/pull/9607) | **Apply provider hooks to summarization streams** | Compaction/branch summary now run `before_provider_request` extensions (previously skipped). Closes extension gap. | Merged |
| [#9605](https://github.com/earendil-works/pi/pull/9605) | **Add GMI Cloud provider** | OpenAI-compatible aggregator (`api.gmi-serving.com/v1`) added as built-in. Reuses `openai-completions`; `GMI_API_KEY` auth. | Merged |
| [#9604](https://github.com/earendil-works/pi/pull/9604) | **Report shell PID to caller** | New `onSpawn(pid)` in `BashOperations.exec` options. Enables host-side process-tree tracking for headless/desktop hosts. | Merged |
| [#8732](https://github.com/earendil-works/pi/pull/8732) | **Preserve `reasoning_content` on cross-model replay (DeepSeek)** | Fixes DeepSeek-family rejection when assistant messages with reasoning replayed without `reasoning_content`. Critical for gateway users. | Merged |
| [#9594](https://github.com/earendil-works/pi/pull/9594) | **Add Gemini-only Antigravity provider** | First-class OAuth provider for subscription-backed Gemini (Antigravity). Restores access removed in earlier upstream. | Merged |
| [#9274](https://github.com/earendil-works/pi/pull/9274) | **Preserve indentation in rendered diffs** | Fixes intra-line renderer dropping indentation on removed lines when text inserted before unchanged content. | Open |
| [#9591](https://github.com/earendil-works/pi/pull/9591) | **Export `detectSupportedImageMimeType` (bytes variant)** | Enables read-tool extensions streaming bytes to detect MIME without temp files. Addresses #9608. | Merged |
| [#8474](https://github.com/earendil-works/pi/pull/8474) | **Bundle Node runtime for `pi-coding-agent`** | Dramatically fewer files loaded at startup. Targets Windows Defender I/O slowdowns. Ongoing optimization. | Merged |

---

## Feature Request Trends
1. **Provider normalization & expansion** — Bedrock, Vercel AI Gateway, GMI Cloud, Antigravity, Wallaby, opencode-go all need first-class support with correct cache/reasoning handling.
2. **Session durability & branching** — Mid-conversation system messages (#9548), exact session-ID lookup (#9601), compaction reliability (#9051, #9602), concurrent-run safety (#9596).
3. **Extension empowerment** — System prompt append (#9434), provider hooks on summarization (#9607), tool-result injection (#7824), image MIME detection (#9591).
4. **TUI polish for constrained environments** — Kitty/Orca image support (#9329), dialog scrolling (#9610), mouse-wheel config (#9447), ESC+CR handling (#9456).
5. **Windows parity** — Shell resolution from install dirs (#9501), Store alias acceptance (#9504), bundled runtime (#8474).

---

## Developer Pain Points
- **Cache-token accounting is fractured** — Three separate issues (#8752, #9210, #9457) show 1h vs. 5m cache writes mis-billed across Bedrock, Anthropic, and Vercel Gateway. Normalization layer missing.
- **Compaction/thinking blocks are fragile** — Stale signed blocks replayed (#9391), omitted thinking re-included (#9602), custom messages missed on retry (#9051). Core loop instability in long sessions.
- **Session I/O doesn’t scale** — Full transcript scan for new session IDs (#9440), no locking for concurrent runs (#9596), timestamp timezone bug (#9609).
- **TUI rendering edge cases** — Image overlay z-order (#6995), dialog clipping (#9610), infinite recursion on wide graphemes (#9606), flicker on remote edits (#9351).
- **Cross-model reasoning loss** — DeepSeek `reasoning_content` dropped on replay (#8732), Gemini `thoughtSignature` lost on streamed tool calls (#9444), thinking inlined unbounded on model switch (#9433).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-09-15

## 1. Today's Highlights

Qwen Code shipped **v0.23.4** with a breaking change removing configurable message-prefix filtering from channels, simplifying message routing to follow standard sender/group/mention policies. The release includes updated **CUA Driver v0.20.8** binaries (macOS codesigned/notarized, Linux glibc 2.31+, Windows UIAccess worker). Critical P1 bugs surfaced around **ACP session serialization** (#11795), **DeepSeek token-limit misconfiguration** (#11894), and **oversized `available_commands_update` tearing down channels** (#11908). Meanwhile, the extensions system gained **dynamic workflow shipping** (#11805) and **cross-session messaging enabled by default** (#11840).

---

## 2. Releases

| Version | Key Changes |
|---------|-------------|
| **[v0.23.4](https://github.com/QwenLM/qwen-code/releases/tag/v0.23.4)** | **Breaking:** Removed configurable message-prefix filtering from channels; messages now follow normal sender/group/mention/pairing policies. |
| **[v0.23.4-nightly.20260914.f024b37689](https://github.com/QwenLM/qwen-code/releases/tag/v0.23.4-nightly.20260914.f024b37689)** | Nightly build with test fixes (Windows inode gates) and CUA driver updates. |
| **[cua-driver-rs v0.20.8](https://github.com/QwenLM/qwen-code/releases/tag/cua-driver-rs-v0.20.8)** | Prebuilt binaries: macOS (codesigned + notarized universal + `.app`), Linux (x86_64/arm64, glibc 2.31), Windows (unsigned UIAccess worker + native SDK, x86_64/arm64). |
| **[cua-driver-rs v0.20.7](https://github.com/QwenLM/qwen-code/releases/tag/cua-driver-rs-v0.20.7)** | Same platform matrix as v0.20.8; prior patch release. |

---

## 3. Hot Issues (10 Noteworthy)

| Issue | Priority | Why It Matters | Community Signal |
|-------|----------|----------------|------------------|
| **[#11795](https://github.com/QwenLM/qwen-code/issues/11795)** Permission queue keyed on ACP connection blocks all daemon sessions | P1 | One idle session’s unanswered prompt silently blocks *every* session on the daemon. Fix #11802 (serialization) open; fixes for visibility, TTL, intra-session caveats pending. | 5 comments, active discussion on fix scope |
| **[#11894](https://github.com/QwenLM/qwen-code/issues/11894)** `deepseek-flash` resolves to 128k/32k instead of V4 1M/384k | P2 | Token-limit lookup matches model name only; `deepseek-flash` misses V4 rules → long sessions fail on compression. PR #11909 fixes regex. | 4 comments, fix PR opened same day |
| **[#11908](https://github.com/QwenLM/qwen-code/issues/11908)** Oversized `available_commands_update` trips `MAX_JSON_NODES`, kills channel, subsequent requests 404 | P1 | Session-start notification >10k JSON nodes classified as invalid → channel torn down, child `SIGKILL`ed, all later requests fail with “No session”. | 3 comments, critical daemon stability |
| **[#11905](https://github.com/QwenLM/qwen-code/issues/11905)** MiniMax rejects parameterless built-in tools (error 2013) | P1 | Model `MiniMax-M3` via official API rejects tool calls without parameters; blocks built-in tool usage. | 3 comments, integration blocker |
| **[#11895](https://github.com/QwenLM/qwen-code/issues/11895)** `/review` dimension agents read main checkout instead of PR worktree | P1 | Agents pinned to worktree via `working_dir` but brief passes absolute diff path → agents read wrong files. | 3 comments, review workflow broken |
| **[#11907](https://github.com/QwenLM/qwen-code/issues/11907)** `qwen serve`: manage ACP capacity with idle reclamation & user choice | P2 (feat) | Proposes budget-based admission, automatic idle reclamation, and user-facing UX for capacity limits across workspaces. | 2 comments, architectural direction |
| **[#11901](https://github.com/QwenLM/qwen-code/issues/11901)** `/hooks` dialog builds own view instead of reading session’s active hooks | P3 | Ink UI dialog reads settings files directly, diverging from what session actually runs; stale/missing hooks shown. | 3 comments, UX consistency |
| **[#11902](https://github.com/QwenLM/qwen-code/issues/11902)** Disabled hook state lost on reload when command changes | P3 | Hook registry matches entries by key including command; command change → new key → `enabled` flag dropped. | 3 comments, settings persistence |
| **[#11899](https://github.com/QwenLM/qwen-code/issues/11899)** VS Code companion: legacy ACP permission slot force-cancels second concurrent request | P3 | Pre-cutover transport allows only one pending permission per webview; second request auto-cancels first. Resolved post-#11802. | 3 comments, IDE integration |
| **[#11898](https://github.com/QwenLM/qwen-code/issues/11898)** Follow-ups from #11881: PTY load reason, `.pdb` in win-x64, linux-arm64 guide | P2 | Automated review findings on merged PR: carry PTY load reason, drop `.pdb` from Windows archives, correct doc claim. | 3 comments, packaging polish |

---

## 4. Key PR Progress (10 Important)

| PR | Type | Summary |
|----|------|---------|
| **[#11805](https://github.com/QwenLM/qwen-code/pull/11805)** | Feature | Extensions can ship dynamic workflow scripts from `workflows/` dir or `qwen-extension.json` `workflows` field → third saved-workflow tier after project/user. |
| **[#11840](https://github.com/QwenLM/qwen-code/pull/11840)** | Feature | Cross-session messaging **enabled by default**; sessions discoverable/reachable via review rules without config. `agents.crossSessionMessaging: false` opts out. |
| **[#11909](https://github.com/QwenLM/qwen-code/pull/11909)** | Fix | DeepSeek token limits: regex updated to `/^deepseek-(?:v4|flash)/` so `deepseek-flash` resolves to 1M context / 384K output (fixes #11894). |
| **[#11711](https://github.com/QwenLM/qwen-code/pull/11711)** | Feature | Container execution for subagents on Unix: `QWEN_AGENT_EXECUTION_BACKEND=docker\|podman` (operator-set, immutable by project/env). |
| **[#11906](https://github.com/QwenLM/qwen-code/pull/11906)** | Feature (Closed) | Hook progress events on MessageBus: `hook-progress` emitted on start/end with event name, display name, type, batch position, `statusMessage`. |
| **[#11904](https://github.com/QwenLM/qwen-code/pull/11904)** | Feature | `/hooks` menu now reloads registry from settings before render: re-reads user/workspace settings, calls `Config.setHooksFromSettings()`, `HookSystem.reload()`. |
| **[#11903](https://github.com/QwenLM/qwen-code/pull/11903)** | Feature (Closed) | OpenTUI `/hooks` dialog replaced with full read-only browser (event → matchers → hooks → details), matching Ink UX. |
| **[#11822](https://github.com/QwenLM/qwen-code/pull/11822)** | Feature | Shared channel output modes: `per_turn` (default), `per_response`, `per_task`; DingTalk integrated first. |
| **[#11614](https://github.com/QwenLM/qwen-code/pull/11614)** | Feature | Linux `bwrap` kernel sandbox backend (opt-in): confines agent without container runtime, root, daemon, or image. |
| **[#11821](https://github.com/QwenLM/qwen-code/pull/11821)** | Fix | Shell splitter now treats word-initial `#` as comment (adds comment state to parser), fixing false splits on commented commands. |

---

## 5. Feature Request Trends

From the active issues and PRs, the strongest community demand signals are:

1. **Daemon/ACP Scalability** — Multiple issues (#11795, #11907, #11908) demand better session isolation, capacity management, and idle reclamation for `qwen serve` multi-tenant use.
2. **Hook System Maturity** — Three hook-related issues/PRs (#11901, #11902, #11903, #11904, #11906) in one day: registry reload, state persistence, progress events, full TUI/Ink parity.
3. **Cross-Session Collaboration** — Default-on cross-session messaging (#11840) + review/worktree fixes (#11895) show push toward team workflows.
4. **Extension Extensibility** — Dynamic workflows (#11805), shared channel modes with DingTalk (#11822), and Windows extension update fallback (#11889) indicate ecosystem investment.
5. **Sandboxing & Isolation** — `bwrap` backend (#11614), container subagents (#11711), and PTY load-reason tracking (#11898) reflect security/isolation hardening.

---

## 6. Developer Pain Points

| Pain Point | Evidence |
|------------|----------|
| **Silent daemon session blocking** | #11795: one unanswered prompt freezes all sessions; queueing invisible to host. |
| **Token-limit misconfiguration for vendor models** | #11894: DeepSeek `flash` name mismatch kills long sessions; regex-based lookup fragile. |
| **Channel teardown on large payloads** | #11908: `MAX_JSON_NODES=10k` hard limit tears down ACP channel on session start, cascades to 404s. |
| **IDE companion permission race** | #11899: VS Code pre-cutover transport auto-cancels first permission when second arrives. |
| **Windows extension update failures** | #11889: directory rename fails under lock; fallback copy transaction needed. |
| **Hook state loss on command change** | #11902: disabled flag tied to command-inclusive key; editing command resets enablement. |
| **CI flakiness on Windows/macOS** | 10+ closed CI-failure issues in 24h (e.g., #11600, #11678, #11744, #11790) — install/test steps failing intermittently. |
| **Review agents reading wrong filesystem** | #11895: worktree pin ignored for absolute paths in agent brief. |

---

*Generated from GitHub data as of 2026-09-15. Links point to live issues/PRs on github.com/QwenLM/qwen-code.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-09-15

## 1. Today's Highlights
The v0.9.14 milestone is in active development with a second stacked PR (#6175) delivering lazy MCP initialization, session recovery with picker UX, and launch remedies. Critical stability fixes for console freezes, approval deadlocks, and session retention landed in #6161. Meanwhile, the team is executing a major architectural refactor: crate decomposition (EPIC-005), event projection for watch-only clients, bounded channels, and dependency deduplication — all tracked under the Core execution plan.

## 2. Releases
No new releases in the last 24 hours. `v0.9.13` remains the latest tagged version; `main` is the live development line with v0.9.14 milestone work queued.

## 3. Hot Issues (Top 10)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#5316](https://github.com/Hmbown/Codewhale/issues/5316) | **EPIC-005: CodeWhale TUI Crate Decomposition** | Umbrella issue for breaking the monolithic TUI crate into smaller, owned crates (C03–C10). Foundational for maintainability, testability, and parallel development. | 27 comments — active design discussion |
| [#6150](https://github.com/Hmbown/Codewhale/issues/6150) | **Op::SendMessage → TurnSpec extraction** | Refactors a 20-field god payload into a structured `TurnSpec`, enabling per-turn authority fields and proving the UI never blocks on `send()`. Critical for ACP/app-server fixes. | 3 comments — technical deep-dive |
| [#6152](https://github.com/Hmbown/Codewhale/issues/6152) | **Event projection: broadcast/watch for watch-only clients** | Replaces single-consumer `mpsc` with `broadcast`/`watch` so GPUI/IDE surfaces can observe sessions without consuming events. Unblocks multi-client runtime contract. | 2 comments — architecture decision |
| [#6184](https://github.com/Hmbown/Codewhale/issues/6184) | **Engine silently freezes mid-run** | User messages persist but model output stops; no errors, logs, or crashes. High-severity reliability blocker for long tool-heavy runs. | 1 comment — newly filed, urgent |
| [#6185](https://github.com/Hmbown/Codewhale/issues/6185) | **Resume renders empty transcript despite intact journal** | `codewhale resume` shows nothing after force-quit; tool-call repair re-runs on every load but never persists. Data-loss adjacent UX failure. | 1 comment — newly filed |
| [#6011](https://github.com/Hmbown/Codewhale/issues/6011) | **Usage & tool diagnostics: token accounting + cache hits** | Per-component/model token accounting, cache hit rates, per-tool sinks, compaction cost, and tool-call error patterns. Observability for cost/performance tuning. | 7 comments — C11 core execution |
| [#5587](https://github.com/Hmbown/Codewhale/issues/5587) | **Dead-code sweep phases 2–4** | Classifying 379 `allow(dead_code)` sites; 18 truly dead remain. Systematic cleanup reduces compile times and cognitive load. | 7 comments — ongoing audit |
| [#6050](https://github.com/Hmbown/Codewhale/issues/6050) | **Pluggable agent memory backend seam** | Adds `Custom`/`External`/`MCP` variants to `MemoryBackend` enum with causal-memory/mem0 reference impls. Unblocks third-party memory integrations. | 3 comments — enhancement |
| [#5915](https://github.com/Hmbown/Codewhale/issues/5915) | **Fleet models: provider → model → shortlist → role** | Redesigns model selection flow for sub-agents: shortlist → role assignment → fleet-aware operator. Core Fleet value proposition. | 3 comments — founder-directed |
| [#6035](https://github.com/Hmbown/Codewhale/issues/6035) | **Model pins don't propagate after vendor retirement** | Pinned model IDs in 6+ places with no migration when vendors retire IDs (e.g., DeepSeek V4.1 Flash). Causes silent breakage. | 2 comments — config hygiene |

## 4. Key PR Progress (Top 5)

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#6175](https://github.com/Hmbown/Codewhale/pull/6175) | **v0.9.14 slice run 2** | OPEN | 9 issue slices + lint fix: lazy MCP, session recovery + picker UX, launch remedy row, stacked on `origin/main` post-#6161. |
| [#6161](https://github.com/Hmbown/Codewhale/pull/6161) | **v0.9.14: console-freeze, approval-death, compaction, session-retention fixes** | CLOSED | Fixes two diagnosed console-freeze/silent-death defects (`/mcp` during turn; unattended approval idle-timeout), orphaned `tool_result` in compaction, dest... |
| [#5867](https://github.com/Hmbown/Codewhale/pull/5867) | **feat(config): add `[reasoning_only]` section** | CLOSED | Makes reasoning-only retry count user-configurable (was hardcoded `MAX_REASONING_ONLY_REPROMPTS = 2`). |
| [#6171](https://github.com/Hmbown/Codewhale/pull/6171) | **feat(providers): add AICraft OpenAI-compatible provider template** | OPEN | Adds `aicraftapi.com` as OpenAI-compatible provider following existing descriptor-row pattern (SenseNova, Baseten, Groq, etc.). |
| [#6170](https://github.com/Hmbown/Codewhale/pull/6170) | **fix(weixin-bridge): make runnable + simplify Quick Start** | OPEN | Fixes non-existent paths, missing startup commands, unread env file, and first-message crash in WeChat bridge. |

## 5. Feature Request Trends
1. **Multi-client runtime contract** — Broadcast/watch event projection (#6152), app-server routes for artifacts/files/instructions/queue/credentials (#6163, #6168, #6177, #6181, #6182, #6183) to support GPUI/IDE surfaces.
2. **Pluggable backends** — Memory (#6050), provider templates (#6171), MCP OAuth fixes (#6040) — moving from hardcoded to extensible.
3. **Fleet/sub-agent maturity** — Model shortlist/role assignment (#5915), sub-agent shell reliability (#5529), workflow dispatch visibility (#5528).
4. **Observability & diagnostics** — Token accounting/cache hits (#6011), goal gates/verification (#6013), build warning policy (#6132).
5. **Config hygiene & migration** — Model pin propagation (#6035), dead-code cleanup (#5587), dependency deduplication (#6151).

## 6. Developer Pain Points
- **Silent engine freezes** — No logs, errors, or crashes; user input persists but model stops responding (#6184).
- **Session resume broken** — Journal intact but transcript empty; repair logic re-runs without persisting (#6185).
- **Approval UX gaps** — No timeout on tool-approval prompts; unattended runs die on idle timeout (#6101, #6161).
- **Model management friction** — Pagination missing in `/models` (#6009), pins don't migrate on vendor retirement (#6035), provider templates require manual PRs.
- **Sub-agent unreliability** — Wall-time deaths, provider-route failures, shell tooling workarounds make Fleet delegation unusable (#5529).
- **Workflow visibility** — Dispatch/schema errors never surface in TUI; runs fail silently (#5528).
- **Build friction** — Duplicate dependencies (reqwest 0.12/0.13, toml/toml_edit, thiserror 1/2, bitflags 1/2) double build times (#6151).

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*