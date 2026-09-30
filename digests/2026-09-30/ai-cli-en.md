# AI CLI Tools Community Digest 2026-09-30

> Generated: 2026-09-30 05:13 UTC | Tools covered: 10

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

# AI CLI Tools Ecosystem — Cross-Tool Comparison Report (2026-09-30)

---

## 1. Ecosystem Overview

The AI CLI landscape is bifurcating into **enterprise-grade managed-agent platforms** (Claude Code, OpenAI Codex, Qwen Code, OpenCode) and **developer-experience-focused TUI/IDE companions** (Gemini CLI, Copilot CLI, Pi, DeepSeek TUI). All major tools shipped releases or patches in the last 24h, but stability regressions dominate discourse: context/token ceiling bugs, MCP protocol fragility, Windows/WSL parity gaps, and session persistence failures. A clear convergence is forming around **durable hosted execution** (managed agents, remote result delivery, cross-session memory) and **security/governance defaults** (org-level deny rules, plugin sandboxing, cost controls). Meanwhile, **Windows remains a second-class platform** for 7/10 tools, and **quota/accounting transparency** is a cross-vendor trust crisis.

---

## 2. Activity Comparison

| Tool | Releases (24h) | Hot Issues | Key PRs | Community Signal (Top Issue 👍) | Maturity Indicator |
|------|----------------|------------|---------|----------------------------------|---------------------|
| **Claude Code** | v2.1.285 (stable) | 10 | 8 (4 closed) | 45 👍 (#67609: Fable 5 >100K tokens) | Enterprise hardening sprint |
| **OpenAI Codex** | 0.159.2 stable + 2 alpha | 10 | 20 (batch merged) | 140 👍 (#48074: Windows console flash) | Rapid alpha iteration, stable line patching |
| **Gemini CLI** | v0.62.0 stable + preview + nightly | 10 | 10 (2 closed) | 8 👍 (#21409: agent hangs) | Three-channel release cadence |
| **GitHub Copilot CLI** | 4 patches (v1.0.90-2→-5) | 10 | 1 | 14 👍 (#1285: org agents missing) | High-frequency patch train |
| **Kimi Code CLI** | — | — | — | — | Dormant |
| **OpenCode** | None | 10 | 10 | 2 👍 (#51761: TUI OOM) | Stability crisis (memory leak, migration loss) |
| **Pi** | v0.99.1 + v0.99.0 | 10 | 10 | 69 comments (#7547: Windows strategy) | Feature-rich, binary distribution fragile |
| **Qwen Code** | v0.24.7 (CLI/SDK/Desktop) | 10 | 10 | 3 comments (#13076: Windows flash-exit) | Managed-agent protocol alignment focus |
| **DeepSeek TUI** | None (v0.10.1 sprint) | 10 | 10 | 6 👍 (#10184: ChatGPT login) | Intense regression-fix sprint |
| **Grok Build** | — | — | — | — | Dormant |

---

## 3. Shared Feature Directions (Cross-Tool Convergence)

| Requirement | Tools Affected | Specific Needs |
|-------------|----------------|----------------|
| **MCP Protocol Hardening** | Claude Code (#41973, #98256), Codex (#49478, #49473), Copilot CLI (#4870, #2581), Gemini CLI (#29444, #24246), OpenCode (#52214), Pi (v0.99.0 MCP), Qwen Code (#12894 broker routing), DeepSeek TUI (#6789) | Auth-before-discovery, server-authoritative permissions, tool-name spec compliance, elicitation fix, connection retry/backoff, >128 tool limit |
| **Managed/Durable Agent Execution** | Claude Code (subagent fan-out #95313), OpenCode (#52212, #12894), Qwen Code (#12894 O2 delivery), Pi (codemode parallel MCP), Gemini CLI (#22598 trajectory sharing) | Workspace-bound sessions, remote result delivery (object storage), session receipt admission, cross-restart question preservation, subagent delegation persistence |
| **Security & Governance Defaults** | Claude Code (4 PRs: sec-default, allowManagedModsOnly), Codex (enterprise auth migration #49473), Copilot CLI (--mcp-github-auth scoping), OpenCode (provider error classification) | Org deny-rules > user allow, managed-mods-only, scoped MCP auth, context-overflow classification for retry logic |
| **Cost/Quota Transparency** | Claude Code (#95313, #98230), Codex (12+ quota issues #41220), Copilot CLI (implicit via model-provider UX), Gemini CLI (token bloat #19561) | Per-model weekly limits in status line, confirmation before expensive fan-out, real-time usage breakdown, continuity mode at quota exhaustion |
| **Windows/WSL First-Class Support** | Codex (#48074, #27117, #32121), Copilot CLI (#3534, #3281), OpenCode (#52205, #52197), Pi (#10204, #7547), Qwen Code (#13076), DeepSeek TUI (#6745) | Native pwsh update path, UNC→POSIX translation, ACL-safe patching, ExecutionPolicy bypass, no console flashing, shell env import |
| **Session Resilience & Recovery** | Claude Code (#78136, #96546), Codex (#42973, #48774), Copilot CLI (#4805, #4894), OpenCode (#52212, #50481), Qwen Code (#13075, #13029), DeepSeek TUI (#6721, #6788) | Lock-file reclamation, cloud↔CLI handoff, compaction reliability, OAuth behind proxy, ACP rewind correctness, undo/retry mutating model context |

---

## 4. Differentiation Analysis

| Dimension | Enterprise/Platform Tools | Developer-Experience Tools |
|-----------|---------------------------|----------------------------|
| **Primary Focus** | Managed-agent infrastructure, org governance, protocol durability | TUI polish, local model orchestration, extensibility, hackability |
| **Target Users** | Enterprise teams, platform engineers, CI/CD automation | Individual devs, power users, OSS contributors, local-LLM enthusiasts |
| **Technical Approach** | Server-backed runtimes (Claude Code, Codex, Qwen Code, OpenCode), broker/worker protocols, multi-language SDKs | Single-binary TUIs (Gemini, Pi, DeepSeek, Copilot CLI), plugin/extension systems, WASM/JS codemodes |
| **Release Cadence** | Stable + alpha channels, batch PR merges, compliance gates | Nightly/preview/stable tri-channel, rapid patch trains, binary distribution |
| **Key Differentiator** | **Claude Code**: Org security defaults, plugin governance<br>**Codex**: Responses API integration, enterprise auth<br>**Qwen Code**: TS/Java cross-lang protocol, Web Shell observability<br>**OpenCode**: Provider-agnostic broker, ACP automation | **Gemini CLI**: AST-aware tooling, zero-dep sandboxing<br>**Pi**: Codemode (JS parallel MCP), builtin modularity, llama.cpp orchestration<br>**DeepSeek TUI**: Reusable PR review Action, task-store polling, session integrity<br>**Copilot CLI**: GitHub org agent discovery, MCP scoping, session hooks |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|------|-------|----------|
| **High Momentum / Enterprise Ready** | **Claude Code**, **OpenAI Codex**, **Qwen Code** | Daily releases, 20+ PR batches, dedicated security sprints, managed-agent milestones, cross-language protocol work |
| **High Momentum / Stability Crisis** | **OpenCode**, **DeepSeek TUI** | Critical regressions (OOM leak, migration data loss, undo/retry corruption), intense fix sprints, compliance tags |
| **Active Feature Velocity** | **Gemini CLI**, **Pi**, **GitHub Copilot CLI** | Three-channel releases, major feature drops (codemode, MCP, AST tooling), 4 patches in 24h |
| **Dormant / Low Activity** | **Kimi Code CLI**, **Grok Build** | No GitHub activity in 24h window |

**Maturity Signals**: Claude Code and Codex show enterprise hardening (security defaults, audit trails). Qwen Code invests heavily in protocol correctness (TS/Java validators, broker state machine). OpenCode and DeepSeek TUI are in "fix-the-foundation" phase before feature expansion.

---

## 6. Trend Signals for Technical Decision-Makers

| Trend | Signal Strength | Implication |
|-------|-----------------|-------------|
| **MCP is becoming production infrastructure** | 🔴 Critical (8/10 tools) | Invest in MCP server reliability: auth-before-discovery, retry logic, tool-name compliance, >128 tool scaling. Treat MCP as critical path, not experiment. |
| **Managed agents ≠ chat sessions** | 🔴 Critical (5/10 tools) | Architect for durable execution: workspace-bound sessions, remote result storage, cross-restart state, broker/worker separation. Session lifecycle must be explicit, not implicit. |
| **Windows parity is a blocker for enterprise adoption** | 🟠 High (7/10 tools) | Require Windows CI gates: UNC paths, ACL semantics, pwsh native, no console flashing, ExecutionPolicy handling. "Works on Mac/Linux" is insufficient. |
| **Quota/accounting opacity erodes trust** | 🟠 High (3 major vendors) | Demand per-request usage telemetry, predictable accounting, graceful degradation (continuity mode). Build internal dashboards if vendors don't provide. |
| **Security defaults shifting to org-level** | 🟢 Emerging (Claude Code leading) | Plan for policy-as-code: deny-rules > allow, managed-mods-only, scoped MCP auth, plugin sandboxing. User-level config is becoming "opt-out" not default. |
| **Web Shell / Observability UX diverging** | 🟢 Emerging (Qwen Code, Pi, Codex) | Web-based execution observability (waterfall trajectories, adaptive rails, diff annotation) is becoming a differentiator for team collaboration and debugging. |
| **Local model orchestration maturing** | 🟡 Growing (Pi, DeepSeek, Gemini) | llama.cpp managed servers, codemode parallelism, AST-aware tooling reduce cloud dependency. Evaluate for air-gapped / cost-sensitive workloads. |

---

## Summary for Decision-Makers

| If Your Priority Is… | Recommended Primary Tool(s) | Watch / Pilot |
|----------------------|----------------------------|---------------|
| **Enterprise governance & security** | **Claude Code** (sec-defaults, plugin policy) | Qwen Code (protocol rigor) |
| **Managed-agent durability at scale** | **Qwen Code** (O2 delivery, TS/Java parity), **OpenAI Codex** (Responses API, enterprise auth) | OpenCode (provider-agnostic broker) |
| **Local-first / extensible TUX** | **Pi** (codemode, builtin modularity), **Gemini CLI** (AST tooling, sandboxing) | DeepSeek TUI (session integrity, PR review Action) |
| **GitHub-native org workflows** | **GitHub Copilot CLI** (org agents, MCP scoping) | — |
| **Windows-first teams** | **OpenAI Codex** (0.159.2 fixes flashing), **GitHub Copilot CLI** (ARM64 patches) | Monitor Qwen Code (#13077), OpenCode (#52205), Pi (#10204) for parity |

**Bottom Line**: The ecosystem is consolidating around **managed-agent protocols** and **org-level governance**. Tools that haven't solved session durability, MCP hardening, and Windows parity will struggle in enterprise adoption. For developers, the next 3–6 months will determine whether the "TUI companion" or "managed-agent platform" model wins for daily workflows — or if a hybrid emerges.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-09-30 | Source: anthropics/skills*

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| Rank | Skill | Functionality | Discussion Highlights | Status |
|------|-------|---------------|----------------------|--------|
| 1 | **[proofcore-contract-auditor](https://github.com/anthropics/skills/pull/1771)** | Automated static analysis of Solidity/Rust smart contracts with cryptographic audit proofs anchored to TON Blockchain via ProofCore's zero-storage Merkle protocol | Novel Web3 security primitive; first skill bridging AI code review with on-chain verification | 🟢 Open (Sept 15) |
| 2 | **[md2video-audio](https://github.com/anthropics/skills/pull/1703)** | Zero-cost Markdown → professional MP4 video with human-like voiceovers (Marp slides + TTS) | Addresses high-demand content repurposing; "zero-cost" positioning suggests local-only execution | 🟢 Open (Sept 1) |
| 3 | **[notion-spec-to-implementation](https://github.com/anthropics/skills/pull/1245)** | Transforms Notion specs into implementable Claude Code tasks with acceptance criteria & progress tracking | Dual-skill PR (also includes quantitative-resume-auditor); longest-active feature PR (3+ months) | 🟢 Open (Jun 2, updated Sept 30) |
| 4 | **[AWT (AI Watch Tester)](https://github.com/anthropics/skills/pull/822)** | Vision + browser control for zero-code E2E test generation; visual regression & CI/CD integration | 6-month discussion cycle; represents "AI-driven QA" category demand | 🟢 Open (Mar 31, updated Sept 19) |
| 5 | **[testing-patterns](https://github.com/anthropics/skills/pull/723)** | Comprehensive testing philosophy + patterns: Trophy model, AAA, React Testing Library, contract testing, E2E | Broadest scope skill proposed; covers unit→integration→E2E; active maintenance (updated Sept) | 🟢 Open (Mar 22, updated Sept 21) |
| 6 | **[pyxel](https://github.com/anthropics/skills/pull/525)** | Retro game development in Python: headless input-driven runs, frame inspection, state verification | Niche but complete workflow (create→debug→verify); author is Pyxel creator (@kitao) | 🟢 Open (Mar 5, updated Sept 22) |
| 7 | **[skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** | Meta-skills: 5-dim quality scoring (structure, examples, resources, triggers, safety) + threat modeling | Foundation for skill governance; referenced in security Issue #492 | 🟢 Open (Nov 2025) |
| 8 | **[blast-radius](https://github.com/anthropics/skills/pull/1776)** | Pre-execution checklist for bulk/destructive operations: classifies impact radius, requires explicit confirmation | Safety-first pattern; addresses "query right about rows, wrong about world" gap | 🟢 Open (Sept 17) |

---

## 2. Community Demand Trends (From Issues)

| Trend | Evidence (Issues) | Signal Strength |
|-------|-------------------|-----------------|
| **Skill Distribution & Trust Security** | [#492](https://github.com/anthropics/skills/issues/492) (43💬, 2👍): Community skills masquerading as official `anthropic/` namespace; [#189](https://github.com/anthropics/skills/issues/189) (6💬, 9👍): Duplicate skills from bundled plugins | 🔴 Critical — namespace spoofing enables permission escalation |
| **Organizational Skill Sharing** | [#228](https://github.com/anthropics/skills/issues/228) (16💬, 8👍): No native org-wide sharing; manual file transfer via Slack/Teams | 🟠 High — enterprise adoption blocker |
| **Evaluation & Trigger Reliability** | [#556](https://github.com/anthropics/skills/issues/556) (12💬, 7👍): `run_eval.py` 0% trigger rate; [#1383](https://github.com/anthropics/skills/issues/1383) (4💬): Silent benchmark failures, Windows trigger eval breaks, skill shadowing | 🟠 High — core developer experience broken |
| **Context Window Management** | [#1487](https://github.com/anthropics/skills/issues/1487) (4💬): `claude-api` skill injects 156k tokens in one call | 🟡 Medium — token efficiency becoming critical |
| **AI Governance & Safety Patterns** | [#412](https://github.com/anthropics/skills/issues/412) (6💬): Agent governance skill proposal; [#1385](https://github.com/anthropics/skills/issues/1385) (4💬, 1👍): 3-gate reasoning quality pipeline | 🟡 Medium — emerging "AI safety engineering" category |
| **Document Intelligence** | [#1734](https://github.com/anthropics/skills/pull/1734): Orphaned DOCX comments; [#1792](https://github.com/anthropics/skills/pull/1792): LibreOffice timeout handling; [#514](https://github.com/anthropics/skills/pull/514): Typographic QC | 🟡 Medium — document fidelity & automation |

---

## 3. High-Potential Pending Skills (Active PRs Likely to Land)

| Skill | PR | Why It's Likely | Blockers |
|-------|-----|-----------------|----------|
| **mcp-builder fix (streamable_http_client)** | [#1742](https://github.com/anthropics/skills/pull/1742) | Fixes breaking change in MCP ≥2.0; directly references Issue #1668; recent activity (Sept 29) | None apparent — compatibility fix |
| **skill-creator: package_skill.py direct execution** | [#1681](https://github.com/anthropics/skills/pull/1681) | Unblocks standalone script usage; updates outdated docs/paths; active (updated Sept 27) | Module import resolution |
| **docx: LibreOffice timeout error handling** | [#1792](https://github.com/anthropics/skills/pull/1792) | Converts silent success-on-timeout to verified error; output validation added | Requires LibreOffice dependency |
| **claude-api: retired model markers** | [#1607](https://github.com/anthropics/skills/pull/1607) | Simple metadata fix for 4 retired models; fixes Issue #1603 | None — documentation update |
| **scnet-hpc** | [#1615](https://github.com/anthropics/skills/pull/1615) | Complete HPC workflow (SSH, Slurm, profiles); domain-specific but well-scoped | Niche audience (SCNet clusters) |
| **ODT skill** | [#486](https://github.com/anthropics/skills/pull/486) | OpenDocument create/fill/read/convert; ISO standard coverage; 6-month gestation | Case-sensitivity/file structure |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for *trustworthy, shareable, and evaluatable skill primitives* — not just new capabilities, but the infrastructure to securely distribute, reliably trigger, and rigorously validate skills across teams and CI/CD pipelines.**

---

# Claude Code Community Digest — 2026-09-30

---

## 1. Today's Highlights

**v2.1.285 shipped** with three developer-facing additions: a `CLAUDE_CODE_DISABLE_WEB_FETCH` env var to disable WebFetch, `claude --desktop` to launch the desktop app on the current directory or resume a session, and `claude plugin configure <plugin>` for interactive plugin setup. Meanwhile, the top community pain point remains the **Fable 5 advisor tool failing on transcripts >100K tokens** (#67609, 45 👍), and a **security-defaults overhaul** is landing across four merged PRs that let orgs lock down plugin permissions and managed mods.

---

## 2. Releases

### v2.1.285
| Change | Description |
|--------|-------------|
| `CLAUDE_CODE_DISABLE_WEB_FETCH` | New env var to completely disable the WebFetch tool |
| `claude --desktop` | Opens Claude Desktop on the current directory; supports `--continue` / `--resume <id>` |
| `claude plugin configure <plugin>` | Interactive configuration flow for installed plugins |

---

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#67609](https://github.com/anthropics/claude-code/issues/67609) | **Advisor tool returns "unavailable" on claude-fable-5 when transcript >100K tokens** | Blocks long-running sessions on the flagship model; advisor effectively disabled for large contexts | 26 comments, **45 👍** — highest engagement in the queue |
| [#42700](https://github.com/anthropics/claude-code/issues/42700) | **TTS readback + voice mode for Remote Control sessions** | Accessibility + hands-free workflows for remote/headless usage | 24 comments, **34 👍** — strong demand for voice-first UX |
| [#41973](https://github.com/anthropics/claude-code/issues/41973) | **MCP Agent tool reports empty available-agent list in `mcp serve` mode** | Breaks agent discovery when Claude Code runs as MCP server | 18 comments, **13 👍** — core MCP interop regression |
| [#88319](https://github.com/anthropics/claude-code/issues/88319) | **Fable 5 safeguards false-positive `[reasoning_extraction]` terminates code-review subagents** | Legitimate mutation-testing/adversarial-review vocabulary flagged as extraction attempts | 8 comments — safeguard tuning needed for dev workflows |
| [#95313](https://github.com/anthropics/claude-code/issues/95313) | **Require user confirmation before spawning expensive agents** | Cost control: unattended sessions fan out 16+ max-effort subagents burning weekly limits | 7 comments — cost governance gap |
| [#82916](https://github.com/anthropics/claude-code/issues/82916) | **JetBrains/IntelliJ plugin: output truncated/lost, duplicated text after resize** | IDE integration reliability; scrollback broken | 3 comments, 1 👍 |
| [#97954](https://github.com/anthropics/claude-code/issues/97954) | **Cowork (Windows): tools/MCP connectors unavailable when voice mode activated** | Voice mode breaks tool access on Windows | 2 comments — cross-feature regression |
| [#78136](https://github.com/anthropics/claude-code/issues/78136) | **`/cost` command resets on session resume (VS Code Extension)** | Cost tracking unreliable across sessions | 2 comments, **CLOSED** |
| [#89126](https://github.com/anthropics/claude-code/issues/89126) | **Setting to hide permission-mode footer indicator** | Status line customization parity with `hideVimModeIndicator` | 2 comments, **4 👍** |
| [#98256](https://github.com/anthropics/claude-code/issues/98256) | **MCP elicitation: capability declared but requests auto-declined ("print mode") in interactive VSCode** | MCP elicitation broken in VS Code interactive sessions | 2 comments — new regression |

---

## 4. Key PR Progress (Top 8)

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#98275](https://github.com/anthropics/claude-code/pull/98275) | `agents-md: send AGENTS.md loaded line to debug log` | **CLOSED** | Projects with `AGENTS.md` but no `CLAUDE.md` now log the loaded path to debug instead of transcript |
| [#97241](https://github.com/anthropics/claude-code/pull/97241) | `sec-default: system prompt sections continue past user tier` | **CLOSED** | Org-seated `sec-default` now prevents user plugins from shaping system prompt sections |
| [#97334](https://github.com/anthropics/claude-code/pull/97334) | `sec-default: conversation rows continue past user tier` | **OPEN** | Engine-level enforcement; test gated on released CLI carrying the event |
| [#97293](https://github.com/anthropics/claude-code/pull/97293) | `mods: declarations carry process.run truncation flags & list entries' mtimeMs` | **OPEN** | Type declarations for new CLI fields (`isStdoutTruncated`, `isStderrTruncated`, `mtimeMs`); awaits CLI release |
| [#98080](https://github.com/anthropics/claude-code/pull/98080) | `sec-default: settings deny rule holds over plugin allow/ask` | **CLOSED** | Org deny rules now win over user-tier plugin allow/ask; opt-out via managed settings |
| [#98083](https://github.com/anthropics/claude-code/pull/98083) | `sec-default: allowManagedModsOnly managed option` | **CLOSED** | New managed setting `allowManagedModsOnly` blocks all user-installed mods when enabled |
| [#96434](https://github.com/anthropics/claude-code/pull/96434) | `security-guidance: keep denied/secret files out of reviewer's reach` | **OPEN** | Fixes #96276 — reviewer prompts no longer inject files blocked by session permissions (secrets, tracked configs) |
| [#97952](https://github.com/anthropics/claude-code/pull/97952) | `ci: security hardening for GitHub Actions workflows calling Claude` | **OPEN** | Egress-firewall runners, pinned action versions, least-privilege tokens for `claude-issue-triage`, `claude-dedupe-issues`, `claude.yml` |

---

## 5. Feature Request Trends

| Theme | Representative Issues | Signal |
|-------|----------------------|--------|
| **Voice / TTS / hands-free** | #42700 (TTS + voice for Remote Control), #97954 (voice breaks MCP on Windows) | 2 high-engagement issues; accessibility + remote workflow push |
| **Cost governance & limits** | #95313 (confirm before expensive agents), #98230 (per-model weekly limits in status line, unattended session controls), #78136 (cost reset on resume) | 3 issues; teams hitting surprise bills from fan-out subagents |
| **MCP reliability & ergonomics** | #41973 (empty agent list in serve mode), #90494 (no retry for late-starting MCP servers), #96733 (HTTP session recovery race), #98256 (elicitation auto-declined in VSCode) | 4 issues; MCP becoming production infra, needs hardening |
| **Plugin ecosystem maturity** | #98317 (reviewer notes on resubmit), #95788 (auto-update leaves stale gitCommitSha), #98083 (allowManagedModsOnly) | 3 issues; plugin dir + org policy converging |
| **Cross-session / multi-agent coordination** | #94000 (send cap 10 not configurable, ignores inbound human messages), #96546 (workflow tool returns unrelated session content) | 2 issues; session mesh needs quotas & isolation |
| **Status line / UI customization** | #89126 (hide permission-mode footer), #98230 (expose rate limits in status line) | 2 issues; power users want information density control |
| **Enterprise / network policy** | #98323 (firewall/proxy config for models) | 1 issue; blocker for regulated environments |

---

## 6. Developer Pain Points (Recurring Frustrations)

1. **Fable 5 token ceiling** — Advisor tool hard-fails at ~100K tokens (#67609), forcing context compaction or model downgrade for long sessions.

2. **Over-aggressive safeguards** — `reasoning_extraction` false positives kill legitimate code-review/QA subagents using mutation-testing vocabulary (#88319).

3. **MCP connection fragility** — No retry/backoff for servers starting after Claude Code (#90494); HTTP session recovery races leak sessions (#96733); agent discovery broken in `mcp serve` (#41973).

4. **IDE integration regressions** — JetBrains terminal loses output/scrollback (#82916); VS Code `/cost` resets on resume (#78136); MCP elicitation auto-declined in interactive VS Code (#98256).

5. **Cost tracking blind spots** — Weekly limits consumed silently by unattended fan-out; hooks' usage warnings ignored (#98230); no per-model visibility in status line.

6. **Voice mode breaks tooling** — On Windows, activating voice mode disables MCP connectors and tools (#97954).

7. **Bash/PTY inheritance bugs** — Bash tool children inherit TUI's real PTY; SSH passphrase prompts wedge fullscreen mouse tracking across resumes (regression in 2.1.281, #97297).

8. **Plugin update metadata drift** — GitHub-sourced plugin auto-updates leave `gitCommitSha` at previous commit (#95788).

9. **Cross-session messaging quota** — Hard-coded 10-send cap since last human input; inbound human messages don't reset it (#94000).

10. **Workflow tool session bleed** — Sequential `agent()` sub-agent calls return content from unrelated concurrent sessions (#96546).

---

*Generated from github.com/anthropics/claude-code data as of 2026-09-30. All links point to live issues/PRs.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-09-30

---

## 1. Today's Highlights

OpenAI shipped a rapid sequence of alpha releases (0.161.0-alpha.1→3, 0.160.0-alpha.6→6.1) alongside a stable 0.159.2 patch that fixes the notorious Windows console-window flashing bug (#49385). Meanwhile, the community is loudly reporting **systemic quota-accounting regressions** across Pro/Plus tiers — over a dozen issues describe weekly allowances draining 2–2.4× faster than expected, sometimes dropping from ~80% to 0% in hours. On the engineering side, 20+ internal PRs landed today hardening MCP auth flows, TUI permissions, diagnostic log retention, and Windows UNC-path handling.

---

## 2. Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **0.161.0-alpha.1/2/3** | Alpha | Rapid iteration on 0.161 branch; no public changelog yet |
| **0.160.0-alpha.6/6.1** | Alpha | Pre-release stabilization |
| **0.159.2** | Stable | **Bug fix**: Suppressed console windows flashing on Windows when Codex launches background processes/sandboxed commands ([#49385](https://github.com/openai/codex/issues/49385)) |
| **0.159.1** | Stable | **New default model**: GPT-6.1 Sol added to bundled catalog + Amazon Bedrock Mantle/Runtime catalogs ([#49323](https://github.com/openai/codex/pull/49323), [#49342](https://github.com/openai/codex/pull/49342)) |
| **0.159.0** | Stable | `instant_interrupt` opt-in for steering during model responses; compact welcome screen + consistent headers + occasional tips ([#48135](https://github.com/openai/codex/pull/48135), [#48513](https://github.com/openai/codex/pull/48513)) |

> **Note**: 0.159.x is the current stable line; 0.160/0.161 are alpha tracks.

---

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| **[#48074](https://github.com/openai/codex/issues/48074)** | Windows: terminal windows repeatedly flash during requests after daemon install | **Highest-engagement bug** (118 comments, 140 👍). Blocks daily workflow on Windows; fixed in 0.159.2 but users on older builds still affected. | 🔥 140 👍 — "Unusable on Windows Terminal / cmd" |
| **[#41220](https://github.com/openai/codex/issues/41220)** | [Meta] Abnormal Codex usage/quota depletion & accounting inconsistencies | **Cross-report tracker** for quota drain syndrome. 54 comments, 18 👍. Aggregates 10+ duplicate reports. | 📊 Central hub for quota debugging |
| **[#49362](https://github.com/openai/codex/issues/49362)** | Sol 6.1 not appearing in Codex despite 0.159.1 release | Model rollout mismatch — users on 26.924.22138 don't see the new default model. | 8 👍, 5 comments — "Available elsewhere but not in Codex" |
| **[#48333](https://github.com/openai/codex/issues/48333)** | Windows Desktop 26.924.1866.0 stuck on startup spinner until app-server killed | Desktop app deadlock; requires manual `codex.exe` termination. 24 comments, 8 👍. | 🛑 "App won't load reliably enough to open About dialog" |
| **[#48324](https://github.com/openai/codex/issues/48324)** | ChatGPT Windows Desktop: "Unable to load organization settings" before composer loads | Blocks Codex entirely in Windows desktop app; web/CLI work. 27 comments, 4 👍. | 🚫 "Composer never appears — can't even submit feedback" |
| **[#27117](https://github.com/openai/codex/issues/27117)** | Windows standalone update from pwsh inherits PSModulePath → `Get-FileHash` fails | Long-standing (Jun 9) update breakage for PowerShell 7 users. 40 comments, 29 👍. | ⚡ "Update action launches `powershell.exe` instead of `pwsh`" |
| **[#48774](https://github.com/openai/codex/issues/48774)** | Codex Remote pairing fails on Android | Mobile↔desktop pairing broken; QR auth succeeds but connection fails. 15 comments, 3 👍. | 📱 "Authorize → auth.openai.com → recognizes account → fails" |
| **[#42973](https://github.com/openai/codex/issues/42973)** | Regression: headless SSH tasks lose thread messaging & delegation tools after Desktop update | Remote/headless workflows broken post-update; affects HPC/Linux nodes. 11 comments, 6 👍. | 🔧 "Subagent delegation & thread messaging lost" |
| **[#32121](https://github.com/openai/codex/issues/32121)** | Windows `apply_patch` adds files but fails to update/delete (deny-read ACLs) | Sandbox file-mutation broken for edits/deletes on Windows. 6 comments, 2 👍. | 📝 "ACL issue prevents patch updates" |
| **[#49322](https://github.com/openai/codex/issues/49322)** | Codex Usage Reporting: double usage shown in old vs new view | Usage dashboard discrepancy — one view shows 2× the other. 5 comments, 2 👍. | 📈 "Makes it look like allowance dropped by half" |

---

## 4. Key PR Progress (Today's Merged/Closed Work)

All 20 PRs shown were authored by `copyberry[bot]` and closed today — indicating a batch merge of internal engineering work.

| PR | Area | Summary |
|----|------|---------|
| **[#49480](https://github.com/openai/codex/pull/49480)** | Protocol | Add experimental **thread prediction protocol types** (`thread/prediction/request`, `thread/prediction/updated`) with JSON/TS/Python schemas |
| **[#49478](https://github.com/openai/codex/pull/49478)** | MCP Auth | Discover & validate MCP authorization servers **before** ID-JAG exchange (`exchange_ema_auth_token`) |
| **[#49475](https://github.com/openai/codex/pull/49475)** | TUI Lifecycle | Complete **turn abort callbacks** before emitting terminal events — fixes race where `TurnAborted` fired mid-cleanup |
| **[#49473](https://github.com/openai/codex/pull/49473)** | Enterprise Auth | Migrate to **rmcp SDK** (pinned `3.3.0` + `auth-enterprise-managed`) for two-stage ID-JAG exchange & token validation |
| **[#49472](https://github.com/openai/codex/pull/49472)** | TUI Permissions | Use **server-authoritative permissions** — client defs can differ from app-server; changes survive task transitions |
| **[#49467](https://github.com/openai/codex/pull/49467)** | Executor | Restore executor tool `PATH` after login shell startup (prevents `rg`/bundled tools from disappearing) |
| **[#49444](https://github.com/openai/codex/pull/49444)** | Perf/Infra | Replace byte-by-byte reverse newline scan with **`memchr::memrchr`** in JSONL rollout reader |
| **[#49441](https://github.com/openai/codex/pull/49441)** | Resilience | Honor **server retry advice** across Responses retries & WebSocket→HTTP fallback (fixes premature termination on overload) |
| **[#49437](https://github.com/openai/codex/pull/49437)** | TUI Voice | Add **local audio device pickers** (input/output) to TUI voice settings — supports remote app-server scenarios |
| **[#49432](https://github.com/openai/codex/pull/49432)** | Auth/Bootstrap | Preserve **bootstrap discovery** across login/workspace changes; revoke prior account's content access |
| **[#49426](https://github.com/openai/codex/pull/49426)** | Analytics | Enable analytics by default for **daemon-launched app servers** (respects explicit opt-out) |
| **[#49425](https://github.com/openai/codex/pull/49425)** | Observability | **Periodic diagnostic log pruning** (age + DB size) — runs every 30 min, not just at startup |
| **[#49424](https://github.com/openai/codex/pull/49424)** | Windows Paths | Infer **Windows UNC paths** with forward/mixed slashes (`//server/share`) — previously treated as POSIX |
| **[#49416](https://github.com/openai/codex/pull/49416)** | Logging | Omit payloads from multiline ANSI warnings — log `input_bytes` + `line_count` instead of full contents |
| **[#49415](https://github.com/openai/codex/pull/49415)** | Debugging | Truncate `ContentItem::InputText` / `UserInput::Text` to **512-byte prefix** in protocol debug output |
| **[#49414](https://github.com/openai/codex/pull/49414)** | SQLite Logs | Filter `tokio_graceful` guard/trigger `TRACE` events from SQLite logs (retain `DEBUG+`) |
| **[#49411](https://github.com/openai/codex/pull/49411)** | App-Server | Bind time provider to local variable (micro-optimization) |
| **[#49408](https://github.com/openai/codex/pull/49408)** | Testing | Compare tool call metadata in recorder refresh test (focused assertion) |
| **[#49407](https://github.com/openai/codex/pull/49407)** | Exec-Server | Recover sessions after **environment info timeouts** — wrap RPC in 30s send+wait timeout |
| **[#49406](https://github.com/openai/codex/pull/49406)** | Cyber/Enterprise | Support explicit **cyber access programs** with OpenAI API keys (opt-in via `api_key_cyber_access_programs`) |

---

## 5. Feature Request Trends (Distilled from All Issues)

| Trend | Evidence | Developer Ask |
|-------|----------|---------------|
| **Quota transparency & fairness** | 12+ issues (#41220, #40067, #38157, #38728, #38335, #46901, #38367, #40895, #39818, #45840, #49363, #49322) | Real-time usage breakdown per model/chat; predictable accounting; "continuity mode" when quota exhausted ([#41224](https://github.com/openai/codex/issues/41224)) |
| **Windows-first parity** | #48074, #27117, #48324, #48333, #44736, #32121, #35446, #49055 | Native PowerShell 7 update path; no console flashing; Desktop app reliability; ACL-safe patching; UNC path support |
| **Remote/headless reliability** | #42973, #48774, #44736 | SSH task delegation persistence; Android pairing; prewarm lock fixes |
| **Model access visibility** | #49362, #49055 (`flex` tier) | Clear rollout status per surface (CLI/Desktop/Web); explicit tier/service-tier errors |
| **TUI/CLI power-user controls** | #49437 (audio devices), #49472 (server-authoritative perms), #48135 (`instant_interrupt`) | Device selection, permission sync, interruptible streaming |
| **Observability & debugging** | #49425 (log pruning), #49415/49416 (debug truncation), #49444 (perf) | Controllable log volume; readable protocol traces; faster JSONL scans |

---

## 6. Developer Pain Points (Recurring Frustrations)

1. **Quota accounting feels opaque & broken** — Multiple Pro/Plus users report **2–2.4× accelerated drain** mid-week with no plan change. Dashboard shows conflicting numbers (old vs new view). No per-request breakdown. Trust erosion is high.

2. **Windows Desktop app is unstable** — Startup spinner deadlocks (#48333), org-settings load failure (#48324), console flashing (#48074), PowerShell update inheritance (#27117), ACL patch failures (#32121). "Works on Web/CLI but not Desktop" is a frequent refrain.

3. **Remote/mobile workflows fracture after updates** — SSH delegation lost (#42973), Android pairing fails (#48774), prewarm locks break workarounds (#44736). Headless/enterprise users feel deprioritized.

4. **Model rollout inconsistency** — Sol 6.1 shipped in 0.159.1 but missing in Desktop 26.924.22138 (#49362). `flex` service tier rejected (#49055). No clear "what's available where" matrix.

5. **Sandbox/tooling friction on non-standard Linux** — Chromebook Crostini socket mount failure (#48523), Windows ACL semantics (#32121), Computer Use deadlock on Win10 (#35446). "It works on my Mac" but not on constrained/enterprise environments.

6. **No graceful degradation

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-09-30

---

## 1. Today's Highlights
Three releases shipped in the last 24 hours: **v0.62.0 (stable)**, **v0.63.0-preview.0**, and **v0.64.0-nightly**. The nightly enables autonomous plan execution in non-interactive mode and fixes output truncation logic. Meanwhile, the issue backlog shows persistent friction around subagent reliability (turn-limit reporting, hangs, config inheritance) and a growing push for AST-aware tooling to reduce token waste.

---

## 2. Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| [**v0.64.0-nightly.20260930.g38700b4b3**](https://github.com/google-gemini/gemini-cli/releases/tag/v0.64.0-nightly.20260930.g38700b4b3) | Nightly | • `fix(core)`: enable autonomous plan execution in non-interactive mode ([#29539](https://github.com/google-gemini/gemini-cli/pull/29539))<br>• `fix(core)`: disable truncation when `maxChars <= 0` in `formatTruncatedToolOutput` ([#29539](https://github.com/google-gemini/gemini-cli/pull/29539)) |
| [**v0.63.0-preview.0**](https://github.com/google-gemini/gemini-cli/releases/tag/v0.63.0-preview.0) | Preview | • `fix(cli)`: display retry progress indicator during connection recovery ([#29468](https://github.com/google-gemini/gemini-cli/pull/29468)) |
| [**v0.62.0**](https://github.com/google-gemini/gemini-cli/releases/tag/v0.62.0) | Stable | • `fix(a2a-server)`: early return on unsupported store in tasks metadata endpoint ([#29334](https://github.com/google-gemini/gemini-cli/pull/29334)) |

---

## 3. Hot Issues (Top 10 by Community Signal)

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) **Subagent recovery after MAX_TURNS reported as GOAL success** | Subagents silently mask turn-limit exhaustion as success, breaking automation trust. | 13 comments, 2 👍 — P1, needs retesting |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) **Generalist agent hangs indefinitely** | Core agent delegation path deadlocks on simple ops (e.g., folder creation); workaround is disabling subagents. | 8 comments, 8 👍 — P1, high user pain |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) **Leverage model's bash affinity via Zero-Dependency OS Sandboxing** | Strategic epic to align CLI with Gemini 3’s native bash-tool chaining, unlocking faster code exploration. | 9 comments, 1 👍 — P2, large effort |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) **Assess impact of AST-aware file reads, search, mapping** | Investigates whether AST tooling (tilth, glyph, ast-grep) can cut turns & tokens via precise method-bound reads. | 7 comments, 1 👍 — P2, epic tracking |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) **Gemini underuses skills & sub-agents autonomously** | Model ignores registered skills unless explicitly instructed, reducing “agentic” value. | 6 comments — P2, needs retesting |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) **Browser Agent ignores `settings.json` overrides (maxTurns)** | Config merging bug makes browser subagent uncontrollable via project/global settings. | 4 comments — P2 |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) **Browser Agent resilience: session takeover & lock recovery** | Persistent profile locking fails fast instead of recovering orphaned sessions. | 4 comments — P3, feature |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) **Browser subagent fails on Wayland** | Platform-specific breakage blocks Linux/Wayland users from web tasks. | 4 comments, 1 👍 — P1, agent/browser |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) **400 error with >128 tools** | Tool-count explosion triggers API rejection; needs smart scoping. | 3 comments — P2, needs info |
| [#23571](https://github.com/google-gemini/gemini-cli/issues/23571) **Model creates tmp scripts in random spots** | Restricting to shell tools scatters artifacts, polluting workspace for commits. | 3 comments — P2 |

---

## 4. Key PR Progress (Top 10 by Impact)

| PR | Status | Summary |
|----|--------|---------|
| [#29535](https://github.com/google-gemini/gemini-cli/pull/29535) | Open | `fix(auth)`: respect allowed onboarding tier — prevents valid free accounts from receiving “no valid license” error ([#29529](https://github.com/google-gemini/gemini-cli/issues/29529)). |
| [#29573](https://github.com/google-gemini/gemini-cli/pull/29573) | Open | `fix(cli)`: handle registry port in sandbox image name parsing — avoids mis-parsing `host:port` as tag. |
| [#29342](https://github.com/google-gemini/gemini-cli/pull/29342) | **Closed** | `fix(cli)`: avoid nested input history state updates — resolves StrictMode double-invocation bug ([#29313](https://github.com/google-gemini/gemini-cli/issues/29313)). |
| [#29445](https://github.com/google-gemini/gemini-cli/pull/29445) | Open | `fix(cli)`: distinguish unreadable MCP enablement config from missing — corrupt `mcp-server-enablement.json` no longer fails open. |
| [#29449](https://github.com/google-gemini/gemini-cli/pull/29449) | Open | `feat(skills)`: add **pkgdiet** dependency guardrail — intercepts `npm install` to check health/bundle-size/deprecation via MCP. |
| [#29444](https://github.com/google-gemini/gemini-cli/pull/29444) | Open | `fix(cli)`: `gemini mcp enable/disable` now matches servers correctly — previously always printed “not found”. |
| [#29447](https://github.com/google-gemini/gemini-cli/pull/29447) | Open | `fix(sdk)`: plumb `env`, `timeoutSeconds`, external `AbortSignal` into `SdkAgentShell.exec` — enables proper sandbox control. |
| [#29568](https://github.com/google-gemini/gemini-cli/pull/29568) | Open | `fix(core)`: **append-only delta patching & bounded history windowing** in `ChatRecordingService` — replaces full-history rewrites, caps memory. |
| [#29557](https://github.com/google-gemini/gemini-cli/pull/29557) | Open | `fix(cli)`: prevent CPU hang & quote swallowing on `@` in code (scoped packages) — fixes headless 100% CPU lockup ([#29434](https://github.com/google-gemini/gemini-cli/issues/29434)). |
| [#29528](https://github.com/google-gemini/gemini-cli/pull/29528) | **Closed** | `fix(cli)`: propagate resolved folder trust state in headless mode — resolves split-brain trust state ([#29031](https://github.com/google-gemini/gemini-cli/issues/29031)). |

---

## 5. Feature Request Trends
1. **AST-aware tooling** — Multiple epics (#22745, #22746, #22747, #19561) converge on integrating ast-grep/tilth/glyph for surgical reads, structured search, and codebase mapping to slash token usage.
2. **Persistent, file-backed task tracking** — #18836, #21000 push to replace in-context `WriteToDo` with CRUD on disk for cross-session continuity and lower context rot.
3. **Subagent first-class UX** — #22598 (share subagent trajectories), #20195 (local subagent sprint), #18287 (shared memory/parallelism), #18285 (settings.json discovery).
4. **Sandbox & OS integration** — #19873 (zero-dep sandboxing), #22232 (browser session recovery), #21983 (Wayland support) signal demand for native, resilient environment control.
5. **Security guardrails** — #29449 (pkgdiet skill), #22672 (discourage destructive ops) show appetite for pre-execution policy enforcement.

---

## 6. Developer Pain Points (Recurring Themes)
- **Subagent opacity & reliability**: Turn-limit masking (#22323), hangs (#21409), config ignores (#22267), missing bug-report context (#21763), no trajectory visibility (#22598).
- **Token/context bloat**: Large file reads firehose context (~36k baseline, +15k/turn) — driving AST and “tactful extraction” work (#19561, #22745).
- **Headless/non-interactive fragility**: CPU hangs on `@scope/pkg` (#29557), trust-state split-brain (#29528), folder-trust propagation.
- **MCP/config fragility**: Corrupt enablement fails open (#29445), enable/disable commands broken (#29444), >128 tools causes 400 (#24246).
- **Platform gaps**: Wayland browser failure (#21983), terminal resize flicker (#21924), symlink agent discovery (#20079).
- **Model behavior drift**: Underuse of skills (#21968), destructive git/db ops (#22672), scattered tmp scripts (#23571).

---

*Generated from `google-gemini/gemini-cli` GitHub data (releases, issues, PRs updated 2026-09-30).*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-09-30

## 1. Today's Highlights

The Copilot CLI team shipped four patch releases in rapid succession (v1.0.90-2 through v1.0.90-5), addressing MCP stability, authentication flow regressions, and model-provider UX. Meanwhile, the community continues to surface critical pain points around MCP server compatibility (Figma, Sentry), WSL2/ARM64 clipboard failures, and session-resume reliability—several of which have 10+ 👍 reactions and remain open.

---

## 2. Releases

| Version | Key Changes |
|---------|-------------|
| **v1.0.90-5** | • Fixed false "No supported model available" banner when a configured provider already supplies a model<br>• MCP tool calls now complete even if servers keep sending progress updates after responding |
| **v1.0.90-4** | • Eliminated "Failed to read model provider attribution" errors on fresh launch during sign-in |
| **v1.0.90-3** | • Added `--mcp-github-auth` flag to scope GitHub account auth to approved MCP server origins<br>• Added session-scoped read-only directory approvals to path-access prompts |
| **v1.0.90-2** | • General fixes and changes (see [release notes](https://github.com/github/copilot-cli/releases/tag/1.0.90-2)) |

> All four releases published within the last 24 hours. Upgrade recommended for MCP users and anyone seeing spurious model-availability warnings.

---

## 3. Hot Issues (Top 10 by Community Impact)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#1274](https://github.com/github/copilot-cli/issues/1274) | **CLI constantly getting 400 errors for invalid request body** | 95% failure rate on code-review prompts; blocks core workflow | 31 comments, 13 👍 — *highest engagement in dataset* |
| [#1285](https://github.com/github/copilot-cli/issues/1285) | **Organisation-level Agent not showing up** | Enterprise agent discovery broken; affects team adoption | 11 comments, 14 👍 |
| [#4870](https://github.com/github/copilot-cli/issues/4870) | **Figma MCP server fails (`-32601` on `server/discover` treated as fatal)** | Works in VS Code but not CLI; MCP interop gap | 8 comments, 12 👍 |
| [#3534](https://github.com/github/copilot-cli/issues/3534) | **WSL2 ARM64: `/copy` fails with `clip.exe` quoting bug** | Clipboard broken on fast-growing ARM64 dev segment | 7 comments, 5 👍 |
| [#3281](https://github.com/github/copilot-cli/issues/3281) | **CLI unusable after v1.0.46 upgrade — "Cannot find native binding"** | npm optional-dependency bug bricks installs | 7 comments |
| [#2861](https://github.com/github/copilot-cli/issues/2861) | **Compaction failed: empty response from model (Opus 4.6)** | `/compact` unreliable; session management risk | 7 comments, 5 👍 |
| [#3589](https://github.com/github/copilot-cli/issues/3589) | **Multiple `sessionStart` hooks: only last `additionalContext` injected** | Hook composability broken; affects automation | 4 comments, 2 👍 |
| [#4919](https://github.com/github/copilot-cli/issues/4919) | **`/ask` does not work with auto models** | Core tangent feature broken in default mode | 4 comments |
| [#2581](https://github.com/github/copilot-cli/issues/2581) | **MCP tools with dots in names cause 400 Bad Request** | Spec-compliant tool names rejected; MCP ecosystem friction | 3 comments, 3 👍 |
| [#4805](https://github.com/github/copilot-cli/issues/4805) | **Stale `inuse.<pid>.lock` blocks session resume** | Sessions become "unrevivable" after host crash | 2 comments |

---

## 4. Key PR Progress

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#5000](https://github.com/github/copilot-cli/pull/5000) | **Publish npm tarballs from published Copilot CLI releases** | Open | Automates npm publishing via GitHub Release → OIDC trusted publishing; removes manual token dependency. Improves release reliability and supply-chain security. |

> Only one PR updated in the last 24h. The release train appears to be driven by direct pushes to `main` with automated versioning.

---

## 5. Feature Request Trends (from all Issues)

| Theme | Representative Issues | Frequency |
|-------|----------------------|-----------|
| **MCP ergonomics & parity** | #2805 (toggle MCP like skills), #2581 (dot-in-name support), #4870 (Figma compat), #3393 (OAuth flow) | 8+ issues |
| **Session resilience** | #4805 (lock-file reclaim), #4894 (scroll position on resume), #3365 (auto-rename), #2497 (cloud→CLI resume) | 6+ issues |
| **BYOK / multi-provider support** | #4037 (ACP BYOK), #2651 (Anthropic lifecycle events), #4919 (auto-model `/ask`) | 4+ issues |
| **Input/clipboard reliability** | #3534 (WSL2 ARM64 clip), #3693 (Ctrl+Z quits), #3533 (macOS keyboard auth prompt) | 4+ issues |
| **Conversation UX** | #4995 (collapse/highlight turns), #2861 (compaction), #3589 (hook context) | 3+ issues |
| **Enterprise/Org agent discovery** | #1285 (org agents missing), #4457 (cross-family sub-agent tools) | 2+ issues |

---

## 6. Developer Pain Points (Recurring Frustrations)

1. **MCP ecosystem fragility** — Multiple servers (Figma, Sentry) work in VS Code but fail in CLI due to discovery/auth handling differences. Developers expect protocol parity.

2. **Upgrade anxiety** — v1.0.46+ introduced native-binding and npm optional-dependency issues that brick environments; users hesitate to upgrade.

3. **Session lifecycle unreliability** — Lock-file leaks, scroll corruption on resume, broken cloud→CLI handoff, and compaction failures erode trust in long-running sessions.

4. **Platform-specific input bugs** — WSL2 ARM64 clipboard, macOS background auth prompts, and Ctrl+Z accidentally quitting the CLI affect daily flow.

5. **Model-provider UX gaps** — Auto-model mode breaks `/ask`, BYOK Anthropic misses lifecycle events, and false "no model" warnings create noise.

6. **Enterprise adoption blockers** — Org-level agents invisible in CLI; cross-model-family sub-agents emit spurious tool warnings.

---

*Data sourced from `github/copilot-cli` releases, issues, and PRs updated 2026-09-29 → 2026-09-30. Digest compiled for AI developer-tooling teams.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-09-30

## 1. Today's Highlights
No new releases shipped today. The community is focused on critical stability issues: a **TUI memory leak consuming 24–28 GB in under a minute** (#51761), a **V1→V2 migration that silently dropped 91–99% of message history for 77 v1.0.x-era sessions** (#52226), and **Windows/WSL integration failures** including UNC path handling (#52205) and missing shell environment imports (#52197). Multiple provider-side fixes are landing for context-overflow classification and API routing.

---

## 2. Releases
*None in the last 24 hours.*

---

## 3. Hot Issues (10 Noteworthy)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#51761](https://github.com/anomalyco/opencode/issues/51761) | **TUI OOM: 24–28 GB linear leak, no GC sawtooth** | Process OOM-killed in <1 min; no reliable trigger found; blocks TUI usability on v2 | 👍 2 • 8 comments • active investigation |
| [#52226](https://github.com/anomalyco/opencode/issues/52226) | **V1→V2 migration silently drops v1.0.x assistant messages** | 5,547 rows lost across 77 sessions (91–99% content); only WARN logs; compliance tag | 👍 0 • 2 comments • `needs:compliance` |
| [#51764](https://github.com/anomalyco/opencode/issues/51764) | **Anthropic rejects recoverable tool history across system updates** | Breaks resume/retry flows; `normalizeToolHistory` repairs ignored; protocol-level | 👍 0 • 6 comments |
| [#51330](https://github.com/anomalyco/opencode/issues/51330) | **Desktop: custom OpenAI-compatible providers rejected on Windows** | Blocks all custom provider setup in Desktop v2.0.16; duplicate of #50650 | 👍 2 • 4 comments |
| [#50481](https://github.com/anomalyco/opencode/issues/50481) | **Web: SW intercepts OAuth callback; silent 1s retry loop on expiry** | Makes re-login impossible behind oauth2-proxy/Keycloak; SSE never surfaces expiry | 👍 1 • 3 comments |
| [#52215](https://github.com/anomalyco/opencode/issues/52215) | **Severe latency + aborted streams on opencode-go (Console Go)** | Requests hang minutes then fail with “other side closed”; Brazil/UTC-3 region | 👍 0 • 1 comment |
| [#52225](https://github.com/anomalyco/opencode/issues/52225) | **Bedrock: “Cache point cannot be inserted after reasoning block” 400** | Non-retryable validation error bricks session; distinct from #45620 | 👍 0 • 1 comment |
| [#52205](https://github.com/anomalyco/opencode/issues/52205) | **Windows Desktop passes WSL UNC paths to Linux server → HTTP 500** | `\\wsl.localhost\Ubuntu\...` paths break server startup; persistent crashes | 👍 0 • 1 comment |
| [#52213](https://github.com/anomalyco/opencode/issues/52213) | **Desktop 2.0.20 (macOS): file diff crashes on partial diffs** | Unconditional crash: `loadDiffFiles` never supplied by renderer; any truncated diff fails | 👍 0 • 1 comment • `needs:compliance` |
| [#52212](https://github.com/anomalyco/opencode/issues/52212) | **V2: preserve pending QuestionV2 replies across server restart** | Pending questions lost after graph rebuild; session survives but question unreplyable | 👍 0 • 1 comment |

---

## 4. Key PR Progress (10 Important)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#52208](https://github.com/anomalyco/opencode/pull/52208) | Fix | `grep` tool now reports missing search path instead of silent “No files found” |
| [#52224](https://github.com/anomalyco/opencode/pull/52224) | Fix | Resolve symlinks before `external_directory` boundary check (closes #40160) |
| [#52223](https://github.com/anomalyco/opencode/pull/52223) | Fix | Recover when sign-in proxy session expires (part of #50481) |
| [#51559](https://github.com/anomalyco/opencode/pull/51559) | Fix | Add prompt caching support for DigitalOcean inference (closes #51557) |
| [#52091](https://github.com/anomalyco/opencode/pull/52091) | Fix | Flatten namespaced choices for flat protocols (closes #52088) |
| [#52133](https://github.com/anomalyco/opencode/pull/52133) | Fix | Classify Together input-token rejections as context overflow |
| [#52132](https://github.com/anomalyco/opencode/pull/52132) | Fix | Classify DeepInfra input-length rejections as context overflow |
| [#52131](https://github.com/anomalyco/opencode/pull/52131) | Fix | Classify Amazon Nova input-token rejections as context overflow |
| [#52219](https://github.com/anomalyco/opencode/pull/52219) | Feature | Select OpenRouter APIs by model family (`openai/*`, `x-ai/*`, `meta/*` → Responses; others → Chat) |
| [#52214](https://github.com/anomalyco/opencode/pull/52214) | Fix | Settle tool registry when MCP server set changes (closes #51089) |

---

## 5. Feature Request Trends
- **Provider configurability**: Custom base URLs & Console API URLs (#52218), Go API key exposure in v2 Console (#52227), OpenRouter model-family routing (#52219).
- **Session resilience**: Persist pending questions across restarts (#52212), preserve migration history fidelity (#52226), explicit session lifecycle vs. implicit background service (#52206).
- **Windows/WSL first-class support**: Shell env import for WSL servers (#52197), UNC→POSIX path translation (#52205), CTRL_CLOSE_EVENT handling (#52203), Bash timeout kill path (#52202).
- **Worktree-aware UI**: Git Changes panel for nested worktrees (#52220), review panel diffs against correct worktree (#47911), cross-session file-change leak fix (#41399).
- **ACP/automation ergonomics**: `--auto` flag for ACP startup (#52216), user-authored widget panels with capability grants (#52209).

---

## 6. Developer Pain Points
1. **TUI memory instability** — Unbounded linear leak (500 MB–1 GB/s) with no clear trigger; forces kills and loses work.
2. **Migration data loss** — Silent, near-total history deletion for early v1 users; only WARN logs, no recovery path.
3. **Windows/WSL friction** — UNC paths passed to Linux server, missing shell env, orphaned processes on terminal close, Bash timeout kill failures.
4. **Auth/session fragility behind proxies** — Service worker swallows OAuth callbacks; SSE retries silently forever; no expiry UI.
5. **Provider error opacity** — Diverse 400/200-error shapes misclassified; retries on non-retryable failures; missing context-overflow detection for Together, DeepInfra, Nova, Workers AI, Novita, Z.ai.
6. **Implicit background service UX** — Orphaned runs, stranded permission prompts, no explicit session start/stop mental model.
7. **Diff/view breakage** — Partial diffs crash Desktop; worktree edits invisible in Git Changes; cross-session file-change leakage.

---

*Generated from GitHub data for anomalyco/opencode — 2026-09-30 00:00 UTC*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-09-30

---

## 1. Today's Highlights

Pi shipped **v0.99.1** with **GPT-6.1 Sol** as the new default OpenAI Codex model, following **v0.99.0**'s introduction of **Codemode and MCP** — enabling JavaScript-based parallel tool execution via MCP servers. The community is actively triaging a wave of post-release regressions (ChatGPT login missing from binary, codemode broken on Windows, TUI latency regressions) while advancing OAuth UX improvements for remote Anthropic/OpenAI workflows.

---

## 2. Releases

### v0.99.1 — *GPT-6.1 Sol Default*
- **GPT-6.1 Sol** (`gpt-6.1-sol`) now available on OpenAI, Azure OpenAI, and OpenAI Codex; set as default Codex model
- [Release notes](https://github.com/earendil-works/pi/releases/tag/v0.99.1) | [Model selection docs](https://github.com/earendil-works/pi/blob/v0.99.1/packages/coding-agent/docs/models.md#select-a-model)

### v0.99.0 — *Codemode & MCP*
- **Codemode**: Write JavaScript that calls tools in parallel via MCP servers
- **MCP Servers**: First-class support for connecting/managing MCP servers
- [Release notes](https://github.com/earendil-works/pi/releases/tag/v0.99.0) | [MCP docs](https://github.com/earendil-works/pi/blob/v0.99.0/packages/coding-agent/docs/mcp.md)

---

## 3. Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#7547](https://github.com/earendil-works/pi/issues/7547) | **Windows strategy** — "gazzilion developers on windows" but fragmented run modes (WSL, native, binary) | **69 comments, 2👍** — Longest-running discussion; core team seeking focus areas for Windows support |
| [#8643](https://github.com/earendil-works/pi/issues/8643) | **Bedrock: OpenAI models reject nested images in toolResult** | **9 comments, 3👍** — Fix + test ready on fork; blocks Bedrock multimodal workflows |
| [#9566](https://github.com/earendil-works/pi/issues/9566) | **Context size defaults to 128k despite real size available** | **6 comments, 4👍** — Incorrect `cost`, `input`, `maxTokens` when `models.json` entry matches provider model |
| [#10074](https://github.com/earendil-works/pi/issues/10074) | **Anthropic: corrupted non-ASCII edit args (Korean text)** | **5 comments** — Silent `\uXXXX` → control char corruption (`\b`/`\f`); costs retries, occasional file damage |
| [#10144](https://github.com/earendil-works/pi/issues/10144) | **Queued prompts sent one-by-one instead of batching** | **5 comments** — Regression: rapid follow-up prompts execute sequentially, not batched |
| [#10184](https://github.com/earendil-works/pi/issues/10184) | **Sign in with ChatGPT: `invalid_client` on OpenAI consent** | **3 comments, 6👍** — `/login openai` fails at `auth.openai.com/sign-in-with-chatgpt/consent` |
| [#10182](https://github.com/earendil-works/pi/issues/10182) | **0.99.0: ChatGPT login fails — `openai-chatgpt.js` missing from bundle** | **3 comments, 4👍** — Published npm tarball lacks module; binary install broken |
| [#10204](https://github.com/earendil-works/pi/issues/10204) | **codemode cannot run on Windows** | **1 comment** — `ENOENT` reading worker script; blocks flagship v0.99.0 feature on Windows |
| [#10198](https://github.com/earendil-works/pi/issues/10198) | **Prompt submit latency scales with session length (0.99.0 regression)** | **2 comments** — `getBranchSelection` re-merges model catalog per assistant message |
| [#10045](https://github.com/earendil-works/pi/issues/10045) | **Auto-compaction of Opus 5.5 on Bedrock blocked by Anthropic policy** | **4 comments** — Summarization flagged as "reverse engineering" at ~98% context |

---

## 4. Key PR Progress (Top 10 by Significance)

| # | PR | Summary | Status |
|---|----|---------|--------|
| [#10199](https://github.com/earendil-works/pi/pull/10199) | **docs: improve MCP server guide** — Quick setup, consolidated config/troubleshooting, migration tables | Closed |
| [#10194](https://github.com/earendil-works/pi/pull/10194) | **feat(ai): copy-code login for Anthropic OAuth** — Enables remote/headless auth via code exchange (no localhost) | Open |
| [#10190](https://github.com/earendil-works/pi/pull/10190) | **fix: mark native providers with stored creds as configured on registration** — Fixes startup "No models available" race | Closed |
| [#10176](https://github.com/earendil-works/pi/pull/10176) | **feat(ai,coding-agent): alternative sign-in for OpenAI provider** — Addresses ChatGPT login flow | Closed |
| [#10122](https://github.com/earendil-works/pi/pull/10122) | **feat: managed llama.cpp server mode** — `/login llama.cpp` auto-starts `llama-server` with supervisor, random port/key, socket-based lifecycle | Open |
| [#10159](https://github.com/earendil-works/pi/pull/10159) | **refactor: resolve built-in extensions as `builtin:<name>` paths** — `mcp`, `llama.cpp`, `codemode`, `tool-search` now disableable via `pi config` | Closed |
| [#10156](https://github.com/earendil-works/pi/pull/10156) | **feat: configurable mouse-wheel scrolling** — Presets in `/settings`, custom in `settings.json` | Closed |
| [#10165](https://github.com/earendil-works/pi/pull/10165) | **fix: track discarded user `!bash` output** — Preserves truncation notice when tail fits limits but head dropped | Open |
| [#10158](https://github.com/earendil-works/pi/pull/10158) | **fix(llama): preserve cached context window on reload** — Avoids overwriting `n_ctx` with autoload preset | Closed |
| [#8635](https://github.com/earendil-works/pi/pull/8635) | **fix(ai): preserve aborted stop reason during lazy setup** — Passes abort signal through stream wrappers | Open |

---

## 5. Feature Request Trends

| Trend | Evidence (Issues/PRs) |
|-------|----------------------|
| **Remote/headless authentication** | [#10194](https://github.com/earendil-works/pi/pull/10194) (Anthropic copy-code), [#10176](https://github.com/earendil-works/pi/pull/10176) (OpenAI alt sign-in), [#10186](https://github.com/earendil-works/pi/issues/10186) (OSC-8 clickable MCP auth links) |
| **MCP as first-class primitive** | v0.99.0 release, [#10199](https://github.com/earendil-works/pi/pull/10199) (guide overhaul), [#10159](https://github.com/earendil-works/pi/pull/10159) (builtin `mcp` extension), [#10188](https://github.com/earendil-works/pi/issues/10188) (Cloudflare Workers transport fix) |
| **Extension/builtin modularity** | [#10159](https://github.com/earendil-works/pi/pull/10159) (`builtin:<name>` resolution), [#10174](https://github.com/earendil-works/pi/pull/10174) (replaceable builtin warning), [#9432](https://github.com/earendil-works/pi/issues/9432) (session_start system prompt append) |
| **Local model orchestration** | [#10122](https://github.com/earendil-works/pi/pull/10122) (managed `llama.cpp`), [#10179](https://github.com/earendil-works/pi/pull/10179) (llama.app docs), [#9137](https://github.com/earendil-works/pi/pull/9137) (Nix flake WIP) |
| **TUI performance & UX polish** | [#10198](https://github.com/earendil-works/pi/issues/10198) (latency), [#10191](https://github.com/earendil-works/pi/issues/10191) (idle CPU), [#10156](https://github.com/earendil-works/pi/pull/10156) (scroll config), [#10143](https://github.com/earendil-works/pi/issues/10143) (multiline highlight) |

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Frequency | Representative Issues |
|------------|-----------|----------------------|
| **Post-release regressions in binary distribution** | High (3+ critical in 24h) | [#10182](https://github.com/earendil-works/pi/issues/10182) (missing chunk), [#10204](https://github.com/earendil-works/pi/issues/10204) (codemode Windows), [#10203](https://github.com/earendil-works/pi/issues/10203) (extension loader fails on compiled binary) |
| **Windows as second-class platform** | Persistent | [#7547](https://github.com/earendil-works/pi/issues/7547) (strategy), [#10204](https://github.com/earendil-works/pi/issues/10204) (codemode broken), [#10207](https://github.com/earendil-works/pi/issues/10207) (edit: tabs vs spaces) |
| **OAuth/remote auth UX gaps** | High | [#10184](https://github.com/earendil-works/pi/issues/10184) (ChatGPT invalid_client), [#10194](https://github.com/earendil-works/pi/pull/10194) (Anthropic copy-code), [#10186](https://github.com/earendil-works/pi/issues/10186) (MCP OSC-8 links) |
| **Context/cache management bugs** | Multiple | [#9566](https://github.com/earendil-works/pi/issues/9566) (wrong context size), [#10045](https://github.com/earendil-works/pi/issues/10045) (compaction blocked), [#10180](https://github.com/earendil-works/pi/issues/10180) (cache warming idle cap), [#6339](https://github.com/earendil-works/pi/issues/6339) (compaction threshold not evaluated mid-run) |
| **TUI latency scaling with session size** | New in 0.99.0 | [#10198](https://github.com/earendil-works/pi/issues/10198) (model catalog re-merge per message), [#10191](https://github.com/earendil-works/pi/issues/10191) (1.5 cores idle, 41% GC from loader repaint) |
| **Non-ASCII / internationalization fragility** | Recurring | [#10074](https://github.com/earendil-works/pi/issues/10074) (Korean `\uXXXX` corruption), [#10208](https://github.com/earendil-works/pi/issues/10208) (Z.AI CN endpoint error wording mismatch) |

---

*Generated from `github.com/badlogic/pi-mono` — 38 issues & 21 PRs updated in last 24h.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-09-30

## 1. Today's Highlights
The v0.24.7 stable release shipped across CLI, Desktop, and TypeScript SDK, focusing on managed-agent session stability, runtime-broker protocol alignment between TypeScript and Java, and a fix for the `/stats` overlay clipping on small terminals. CI health is under pressure: a Windows silent-exit bug (#13076) and a failing E2E session-ID test (#13075) are blocking main, while the daily CVE audit also failed (#13078). The managed-agent O2 remote result delivery work (#12894) continues through follow-up issues and PRs, signaling deeper investment in durable hosted execution.

## 2. Releases
| Version | Component | Key Changes |
|---------|-----------|-------------|
| **v0.24.7** | CLI (core) | • `feat(managed-agent)`: admit workspace-bound sessions without execution ([#12709](https://github.com/QwenLM/qwen-code/pull/12709))<br>• `fix(core)`: align Code Mode text with lazy tool discovery ([#12990](https://github.com/QwenLM/qwen-code/pull/12990))<br>• `fix(permissions)`: honor approved permissions |
| **v0.24.7-nightly.20260929** | CLI (nightly) | Same fixes as stable; built from `release/v0.24.7-nightly` branch |
| **v0.1.17** | SDK TypeScript | Bundles CLI v0.24.7; source-built from same ref |
| **v0.24.7** | Desktop | • `fix(serve)`: preserve session creation failure diagnostics ([#12331](https://github.com/QwenLM/qwen-code/pull/12331))<br>• `feat(sdk-java)`: add managed runtime operator |

> **Note**: No breaking changes reported in any release.

## 3. Hot Issues (10 Noteworthy)
| Issue | Priority | Why It Matters | Community Signal |
|-------|----------|----------------|------------------|
| [#13076](https://github.com/QwenLM/qwen-code/issues/13076) **Windows flash-exit with no output** | P2, bug | Launcher swallows `spawnSync` errors; users see zero output in PowerShell/cmd on v0.24.7. Blocking Windows adopters. | 1 comment, bot-reported; PR [#13077](https://github.com/QwenLM/qwen-code/pull/13077) opened same day |
| [#13075](https://github.com/QwenLM/qwen-code/issues/13075) **E2E failure: custom sessionId not maintained** | P2, CI | Main-branch E2E red; breaks SDK session continuity guarantee. Auto-filed by CI bot. | 2 comments; `autofix/skip` label suggests flaky or environment-specific |
| [#13074](https://github.com/QwenLM/qwen-code/issues/13074) **`/stats` overlay not scrollable, clips content** | P2, UI | Tokens/Models sections hidden on small terminals; regression in overlay rendering. | 3 comments; PR [#13080](https://github.com/QwenLM/qwen-code/pull/13080) fixes both Ink & OpenTUI |
| [#13073](https://github.com/QwenLM/qwen-code/issues/13073) **Retry counter keys on exact validation message text** | P2, core/tools | Follow-up to #12970; multi-call turns drop passing calls due to brittle retry-key matching. | 4 comments; maintainer ruled separable from #12982 |
| [#13059](https://github.com/QwenLM/qwen-code/issues/13059) **Provider client waits forever after worker refuses dispatch** | P2, runtime-broker | Since `9cb9dc8`, broker returns `200 prepared` for refused calls — client never gets terminal state. | 4 comments; **CLOSED** same day (fix likely in #12868 follow-up) |
| [#13060](https://github.com/QwenLM/qwen-code/issues/13060) **Provider inspection throws `runtime_admission_closed` after worker loss** | P2, runtime-broker | Same commit (`9cb9dc8`) changed unknown-outcome → exception on worker loss. | 3 comments; **CLOSED** same day |
| [#13041](https://github.com/QwenLM/qwen-code/issues/13041) **TS/Java validator `promptId` bounds mismatch** | P3, sdk | Cross-language protocol drift in managed-runtime-provider/1; breaks provider validation. | 4 comments; round-5 cross-lang review ongoing |
| [#12986](https://github.com/QwenLM/qwen-code/issues/12986) **Deferred O2 review suggestions from #12894** | P3, blocked | Tracks 8th-review-round items from managed-agent O2 PR (#12894) for separate verification. | 5 comments; `status/blocked` — correctness fixes remain in PR |
| [#13078](https://github.com/QwenLM/qwen-code/issues/13078) **Daily dependency CVE audit failed** | needs-triage, CI | Scheduled security scan failed; possible new high-severity vuln or npm audit endpoint issue. | 1 comment; bot-reported; run [#36661572770](https://github.com/QwenLM/qwen-code/actions/runs/36661572770) |
| [#11954](https://github.com/QwenLM/qwen-code/issues/11954) **Fleet Shepherd Dashboard** | — | Auto-maintained fleet health dashboard; last tick 2026-09-30T05:08:44Z, zero syncs/dispatches. | 0 comments; bot-owned, reflects fleet quiescence |

## 4. Key PR Progress (10 Important PRs)
| PR | Status | Summary | Impact |
|----|--------|---------|--------|
| [#13080](https://github.com/QwenLM/qwen-code/pull/13080) `fix(cli): make /stats scroll on short terminals` | OPEN | Adds scrolling (arrows, PgUp/Dn) to `/stats` in both Ink (clips to dialog height) and OpenTUI (wraps in `<scrollbox>`). Fixes #13074. | **Immediate UX fix** for small-terminal users |
| [#13077](https://github.com/QwenLM/qwen-code/pull/13077) `fix(cli): report spawn failure instead of exiting silently` | OPEN | Launcher now prints failed command + error code when child `spawnSync` fails (refs #13076). | **Unblocks Windows users**; surfaces root cause |
| [#13081](https://github.com/QwenLM/qwen-code/pull/13081) `feat(web-shell): add collapsible trajectory waterfall` | OPEN | Collapsible turns + main-request groups; waterfall timeline for panels ≥760px; preserves selection/inspector on fold. | **Major Web Shell observability upgrade** |
| [#12894](https://github.com/QwenLM/qwen-code/pull/12894) `feat(managed-agent): Add durable remote Shell result delivery` | OPEN | O2 remote result path: bounded stdout/stderr, immutable catalog, object storage, fixed-version reads, session receipt admission, broker/worker Tool v3 routing, hosted recovery. | **Core managed-agent milestone**; large, multi-review (8+ rounds) |
| [#13013](https://github.com/QwenLM/qwen-code/pull/13013) `test(integration): disable managed auto-memory by default in E2E harnesses` | OPEN | Both `TestRig` and `SDKTestHelper` now write `memory: { enableManagedAutoMemory: false, enableManagedAutoDream: false }` to per-test settings. | **Stabilizes flaky E2E**; reduces non-determinism |
| [#13067](https://github.com/QwenLM/qwen-code/pull/13067) `fix(cli): do not read Ctrl modifier on named key as Ctrl+letter` | OPEN | Ctrl+Arrow/Delete/Home/End/PgUp/PgDn no longer emit stray C0 bytes; single-letter Ctrl combos unchanged. | **Terminal input correctness**; fixes keymap pollution |
| [#13006](https://github.com/QwenLM/qwen-code/pull/13006) `fix(hooks): deliver pre-tool and ACP failure context to model` | OPEN | `additionalContext` from `PreToolUse` (core/ACP) and `PostToolUseFailure` (ACP) appended to tool result text in next model request. | **Richer model feedback** on tool failures/approvals |
| [#12992](https://github.com/QwenLM/qwen-code/pull/12992) `fix(web-shell): keep inline chip annotations on chip's real range` | OPEN | Fixes annotation misattachment when plain text matches later chip label (e.g., typing `@foo` then inserting `@foo` chip). | **Web Shell input fidelity**; prevents ghost annotations |
| [#13029](https://github.com/QwenLM/qwen-code/pull/13029) `fix(core): keep delivered notification turns out of ACP rewind ordinals` | OPEN | ACP rewind counts user prompts positionally; excludes daemon-delivered notification turns (system reminders) that never produced client turns. | **Corrects session rewind logic**; avoids off-by-N errors |
| [#12943](https://github.com/QwenLM/qwen-code/pull/12943) `feat(web-shell): add adaptive navigation rail and unified Live settings` | OPEN | Adaptive sidebar: Home-only hosts keep 300px column; multi-entry hosts get 56px rail + 300px secondary column; collapsible rail. | **Responsive Web Shell layout**; better for embedded hosts |

## 5. Feature Request Trends
From the open issues and PRs, three clear directions emerge:

1. **Managed/Durable Execution Infrastructure**  
   - O2 remote result delivery (#12894), workspace recovery (#12977), provider protocol alignment (#13041), broker resilience (#13059, #13060)  
   - *Signal*: Heavy investment in hosted agent durability, cross-language (TS/Java) protocol parity, and offline recovery workflows.

2. **Web Shell as First-Class Observatory**  
   - Collapsible waterfall trajectory (#13081), adaptive navigation rail (#12943), inline chip fidelity (#12992), rebuilt diff annotation (#12921)  
   - *Signal*: Web Shell evolving from UI → full execution observability platform (timeline, diff, navigation, settings unification).

3. **Session & Memory Determinism**  
   - Disable managed auto-memory in E2E (#13013), custom sessionId persistence (#13075), ACP rewind ordinal correctness (#13029), notification-turn exclusion  
   - *Signal*: Making session lifecycle, memory, and replay predictable — critical for SDK consumers and CI reliability.

## 6. Developer Pain Points (Recurring Frustrations)
| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Windows launcher swallows errors** | #13076 (flash-exit, no output), #13077 (fix PR same day) | High — multiple independent reports, blocks adoption |
| **E2E flakiness from managed features** | #13013 (disable auto-memory by default), #13075 (sessionId test failing), #12930 (SIGKILL race in test) | High — 3+ PRs in 24h targeting test stability |
| **Small-terminal UI clipping** | #13074 (`/stats` overlay), #13080 (fix PR), #9305 (VP bottom-align, stale since Aug) | Medium — recurring layout regressions on constrained viewports |
| **Cross-language protocol drift (TS/Java)** | #13041 (validator bounds), #13059/#13060 (broker state machine), #12977 (Java workspace recovery) | Medium — appears in every managed-agent sprint |
| **CI/CD reliability** | #13078 (CVE audit fail), #12650 (yamllint fallback), #13012 (workflow script rejection) | Medium — infra debt surfacing as release velocity increases |
| **Input/keymap edge cases** | #13067 (Ctrl+named keys), #12992 (chip annotation mismatch) | Low but sharp — terminal input fidelity matters for power users |

---

**TL;DR**: v0.24.7 is out with managed-agent and UI fixes, but Windows launch breakage and E2E flakes are hot. The managed-agent O2 work (#12894) is the largest in-flight feature; Web Shell is becoming a serious observability tool. If you’re on Windows or run CI, watch #13076/#13077 and #13013/#13075 closely.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (Codewhale) Community Digest — 2026-09-30

---

## 1. Today's Highlights

The project is in an intense **v0.10.1 stabilization sprint** with 13 active issues and 50+ PRs updated today. Critical regressions in v0.10.0 are being addressed: `/retry` and `/undo` only roll back UI state while leaving model context and persisted sessions polluted (#6788), Linux "Full Access" permission mode is broken (#6787), and CPU usage has regressed significantly across recent versions (#6728). A reusable GitHub Action for Codewhale PR review is nearing release (#6780, #6486).

---

## 2. Releases

**No new releases in the last 24 hours.**  
The v0.10.1 integration branch (`wave/0.10.1-next`) is active in PR #6782, consolidating permission fixes, scrolling performance, undo/retry persistence, and task-store polling fixes.

---

## 3. Hot Issues (Top 10 by Impact & Recency)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#6788](https://github.com/Hmbown/Codewhale/issues/6788) | **`/retry` & `/undo` only roll back UI — model context & persisted session retain undone messages** | **Critical data integrity bug**: every retry accumulates duplicate messages in model context ("user sent N repeated messages") and on disk. Breaks trust in session history. | Opened today by `w1w218`; 0 comments but high severity — blocks reliable conversation management. |
| [#6787](https://github.com/Hmbown/Codewhale/issues/6787) | **Linux: Full Access does not reach agents (guardian denies or agents stuck)** | **Permission system regression** in v0.10.0: max permission posture fails, sub-agents hit Auto-Review guardian deny (fail-closed ~90s) or hang. Users downgrading to 0.9.x. | Filed by maintainer `Hmbown` today; 0 comments — internal priority. |
| [#6728](https://github.com/Hmbown/Codewhale/issues/6728) | **CPU Usage Regression: v0.9.12 (idle) → v0.9.13 (moderate) → v0.10.0 (heavy)** | **Performance regression** across three versions on FreeBSD; binaries analyzed. Indicates systemic issue introduced post-v0.9.12. | Opened yesterday by `Gabriel-Degret`; 0 comments — needs profiling. |
| [#6652](https://github.com/Hmbown/Codewhale/issues/6652) | **TUI scrolling becomes laggy "like jelly" after long runs** | **UX degradation** over time; content partially scrolls, partially stuck. Reproducible in 3–4 hours. | Opened 4 days ago by `luestr`; updated today, 1 comment — likely related to transcript/render accumulation. |
| [#6721](https://github.com/Hmbown/Codewhale/issues/6721) | **Emergency compaction impacts `save session` task reliability** | **Session persistence risk**: agent cut off during save-session command; context transfer incomplete. | Opened yesterday by `ronohara`; 1 comment — architectural concern for long-running sessions. |
| [#6511](https://github.com/Hmbown/Codewhale/issues/6511) | **Single-turn-loop guard misses sub-agent & RLM loops; RLM loop unlogged, drops history, returns empty** | **Safety gap**: loop detection bypassed by naming variations; RLM (Recursive Loop Manager?) silently loses history. | Filed by `Hmbown` 6 days ago; updated today — found in legacy sweep, 0 comments. |
| [#6745](https://github.com/Hmbown/Codewhale/issues/6745) | **Windows: shell tool fails under machine ExecutionPolicy — proposal: process-scoped `-ExecutionPolicy Bypass`** | **Windows blocker**: Group Policy blocks temp `.ps1` execution. Needs sign-off for bypass approach. | Opened yesterday by `asto18089`; 0 comments — platform-specific blocker. |
| [#6746](https://github.com/Hmbown/Codewhale/issues/6746) | **Web search: configured API providers lose fallback when DuckDuckGo unreachable — add Bing tail** | **Resilience gap**: DuckDuckGo fallback only handles empty results/bot challenges, not connection failure (common in some networks). | Opened yesterday by `asto18089`; 0 comments — affects air-gapped/restricted envs. |
| [#6747](https://github.com/Hmbown/Codewhale/issues/6747) | **Model-facing text still names tools the current environment lacks (7 residual sites)** | **Hallucination risk**: model told about unavailable tools after most fixes landed. 7 sites remain. | Opened yesterday by `asto18089`; 0 comments — cleanup from fork sync. |
| [#5482](https://github.com/Hmbown/Codewhale/issues/5482) | **[CLOSED] EPIC: review, restructure, fully localize docs to Chinese** | **Localization milestone**: Chinese user base growth; machine translation errors; stale English-only docs. | Closed today by `SparkofSpike` after 43 days; 4 comments — major docs effort completed. |

---

## 4. Key PR Progress (Top 10 by Impact)

| # | PR | Type | Summary |
|---|-----|------|---------|
| [#6782](https://github.com/Hmbown/Codewhale/pull/6782) | **v0.10.1 Integration** | `wave/0.10.1-next` branch consolidating: permission-boundary repairs, idle task-store polling, responsive scrolling, compact transcript previews, **acknowledged/persisted undo/retry**, inherited nested-work deadlines, structured post-execution hook stdio. |
| [#6780](https://github.com/Hmbown/Codewhale/pull/6780) | **Reusable PR Review Action** | Replaces flaky review workflow with composite Action: installs exact checksummed CLI release, same-repo review only, explicit account relay/model, isolated settings. Reports incomplete execution honestly (no false green). |
| [#6777](https://github.com/Hmbown/Codewhale/pull/6777) | **TUI Pager & Composer Fixes** | Preserves indentation/repeated spaces in pagers; caches display rows at actual body width (incl. scroll rail); resize keeps source line & search match in view; iterative `/tree` render; macOS sleep inhibitor lifetime fix. |
| [#6776](https://github.com/Hmbown/Codewhale/pull/6776) | **Composer Input Correctness** | Multibyte click offsets, oversized submit retains draft, paste order fixes, mentions/history/attachments handling — verified bug-hunt findings. |
| [#6789](https://github.com/Hmbown/Codewhale/pull/6789) | **MCP Handshake Hygiene** | Sends empty client capabilities (strict servers rejected server-only caps); accepts 2025-11-25 revision; 30s cold connect; AWS login recovery (expired session mislabeled as OAuth). |
| [#6759](https://github.com/Hmbown/Codewhale/pull/6759) | **Shell Tool Retention & Output Deltas** | Long-running jobs remain available post-completion; output polling returns new bytes only; non-interactive commands get EOF; cancellation/timeout owns child cleanup. |
| [#6778](https://github.com/Hmbown/Codewhale/pull/6778) | **Task Panel: Answer Idle Listings from Memory** | Second slice for #6573: TUI task panel now reads from memory instead of shared store lock every 2.5s (workers fixed in #6677). Reduces contention. |
| [#6775](https://github.com/Hmbown/Codewhale/pull/6775) | **Extension Host Handshake Budget → 30s** | Fixes Windows CI flake: handshake timeout 5s → 30s for `execute_tools_gates_an_extension_tool_before_any_host_call` and related tests. |
| [#6772](https://github.com/Hmbown/Codewhale/pull/6772) | **App Server Daemon Restart Consistency** | Preserves client→runtime thread links across restarts; rejects unknown thread IDs; retains workspaces on resume/fork; persists config before success report. |
| [#6783](https://github.com/Hmbown/Codewhale/pull/6783) | **Drop Cleared To-do Items from Work Rail** | Closes #6546: clearing/replacing Plan/To-do now removes retired steps from footer work rail while retaining graph history. |

---

## 5. Feature Request Trends (Distilled from Issues)

1. **Session & Context Integrity** — Undo/retry must mutate model context *and* persisted sessions, not just UI (#6788). Emergency compaction should not corrupt save-session (#6721).
2. **Permission System Reliability** — "Full Access" must actually bypass guardians on Linux (#6787); Windows ExecutionPolicy needs supported bypass (#6745).
3. **Search Resilience** — Fallback chain must survive network-level failures, not just empty results (#6746).
4. **Model-Environment Alignment** — Eliminate all references to unavailable tools in system prompts (#6747).
5. **Localization & Docs** — Chinese localization completed (#5482 closed); ongoing need for sync'd, non-stale multilingual docs.
6. **Performance at Scale** — CPU regression (#6728) and scrolling degradation (#6652) indicate need for continuous profiling in CI.

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Undo/Retry is a lie** — UI rolls back but context/session stays polluted | #6788 (critical, today) | New in v0.10.0, blocks trust |
| **Permissions don't match reality** — "Full Access" denied by guardian | #6787 (Linux, today), #6745 (Windows) | Cross-platform, v0.10.0 regression |
| **Performance regressions silently shipped** — CPU ↑ 3 versions straight | #6728 (FreeBSD, measured) | No perf CI gate detected |
| **Long-run TUI degradation** — scrolling "jelly" after hours | #6652 (4 days, updated today) | Memory/render leak suspected |
| **Session save interrupted = data loss** | #6721 (yesterday) | No atomicity guarantee |
| **Windows shell tool blocked by policy** — no supported workaround | #6745 (yesterday) | Requires sign-off for bypass |
| **Model hallucinates missing tools** — 7 residual sites | #6747 (yesterday) | Incomplete cleanup from fork sync |
| **CI flakes on Windows** — handshake timeout | #6775 (today) | Intermittent, masks real failures |

---

*Digest generated from github.com/Hmbown/Codewhale data as of 2026-09-30. All links point to live issues/PRs.*

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*