# AI CLI Tools Community Digest 2026-10-01

> Generated: 2026-10-01 05:28 UTC | Tools covered: 10

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

# Cross-Tool Comparison Report: AI CLI Ecosystem — 2026-10-01

---

## 1. Ecosystem Overview

The AI CLI landscape is converging on **three strategic fronts**: (1) **permission & safety granularity** — every major tool is wrestling with auto-mode classifiers that over-block or under-explain; (2) **session durability & recovery** — crash-proof history, remote session reclamation, and offline recovery bundles are now table-stakes; (3) **multi-agent / managed-agent architectures** — Qwen Code, OpenCode, and Pi are investing heavily in durable, composable agent lifecycles with ACP/WebShell surfaces. Windows stability remains the single largest source of regressions across Codex, Copilot CLI, and Claude Code. The ecosystem is splitting into **integrated platform plays** (Codex, Copilot CLI, Gemini CLI) and **extensible framework plays** (OpenCode, Pi, DeepSeek TUI, Qwen Code).

---

## 2. Activity Comparison (Last 24h)

| Tool | Repo | Issues Updated | PRs Merged/Open | Release Status | Top Community Signal |
|------|------|----------------|-----------------|----------------|---------------------|
| **Claude Code** | anthropics/claude-code | 10 hot | 10 (6 closed) | v2.1.286 stable | Auto-mode permission regressions (6 comments, recent) |
| **OpenAI Codex** | openai/codex | 10 hot | 10 merged | 0.159.3 stable + 4 alphas | Windows terminal flashing **148 👍**, 132 comments |
| **Gemini CLI** | google-gemini/gemini-cli | 10 hot | 10 open | v0.64.0-nightly | Subagent MAX_TURNS misreporting (13 comments, P1) |
| **GitHub Copilot CLI** | github/copilot-cli | 10 hot | 0 | v1.0.91-0 patch | 400 “invalid request body” errors (32 comments, 13 👍) |
| **Kimi Code CLI** | MoonshotAI/kimi-cli | 0 | 0 | — | No activity |
| **OpenCode** | anomalyco/opencode | 10 hot | 10 (mixed) | v1.18.34 patch | TUI search in buffer **59 👍**, 36 comments (since Nov) |
| **Pi** | earendil-works/pi | 10 hot | 10 (5 closed) | v0.99.2 | TUI redraw storm (8 comments), MCP OAuth gaps |
| **Qwen Code** | QwenLM/qwen-code | 6 hot | 10 (9 managed-agent) | v0.24.7-nightly | **P1 security**: `cd` bypasses Write deny (5 comments) |
| **DeepSeek TUI** | Hmbown/Codewhale | 10 hot | 10 (batch landing) | v0.10.1 integration wave | Crate decomposition epic (30 comments), configurable timeouts |
| **Grok Build** | xai-org/grok-build | 0 | 0 | — | No activity |

> **Note**: “Hot” = issues with recent engagement or high impact; PR counts reflect highlighted items in digests.

---

## 3. Shared Feature Directions (Cross-Tool Requirements)

| Requirement | Tools Affected | Specific Needs |
|-------------|----------------|----------------|
| **Permission system granularity** | Claude Code, Copilot CLI, Gemini CLI, Qwen Code | Per-command/tool/session allowlists; auto-mode classifier transparency; `bypassPermissions` actually bypasses; audit trails for silent bypasses (PowerShell, `cd` redirect) |
| **Session durability & recovery** | Claude Code, Codex, OpenCode, Qwen Code, Pi | Crash-proof `~/.claude`/config dirs; remote session reclamation; offline recovery bundles (Qwen W1b); session resume after reboot/cwd deletion |
| **Multi-agent / managed-agent orchestration** | Qwen Code, OpenCode, Pi, DeepSeek TUI | Durable agent lifecycles (Turns, Actions, AgentDefinition); ACP protocol hardening; private ACP child hosting; session-group crate extraction |
| **Windows daemon / execution stability** | Codex, Claude Code, Copilot CLI | Terminal flashing fix; unified exec / WSL helper dir survival; elevated TUI via embedded mode; daemon cwd-deletion recovery |
| **MCP ecosystem hardening** | OpenCode, Pi, Copilot CLI, Qwen Code, DeepSeek TUI | Warm-up/pre-spawn for 14+ servers; self-describing errors; OAuth metadata customization; plugin-declared providers; collision-free tool naming |
| **Hook / extensibility metadata** | Claude Code, Gemini CLI, OpenCode | `UserPromptSubmit` source discrimination (`prompt_source`/`is_meta`); interrupt hooks (`Ctrl-C`); plugin access to session compaction/parent sessions |
| **Model switching & BYOK flexibility** | Copilot CLI, Pi, Qwen Code, DeepSeek TUI | Multi-BYOK env vars; TUI model picker; sub-agent model selection; run-scoped endpoint overrides; custom-tool ID migration on switch |
| **TUI rendering & input reliability** | Pi, DeepSeek TUI, OpenCode, Gemini CLI | Redraw storm fixes; color bleeding; OSC-8 hyperlinks; slash-command completion; `Ctrl+C` propagation during streaming/injections |

---

## 4. Differentiation Analysis

| Dimension | Platform-Integrated (Codex, Copilot CLI, Gemini CLI) | Extensible Frameworks (OpenCode, Pi, DeepSeek TUI, Qwen Code) | Claude Code (Hybrid) |
|-----------|------------------------------------------------------|---------------------------------------------------------------|----------------------|
| **Core Philosophy** | Tight model+tool integration; managed cloud sync | Composable primitives; local-first; plugin/extension SDK | Anthropic-model-centric; permission-first UX |
| **Target User** | Enterprise devs in GitHub/OpenAI/Google ecosystems | Power users, tool builders, self-hosters | Anthropic subscribers; safety-conscious teams |
| **Architecture** | Monolithic CLI + cloud backend; daemon/shared-server | Crate/module decomposition; ACP/WebShell; extension-first GUI | Single binary; hook system; permission classifier |
| **Session Model** | Cloud-threaded; quota/account-bound | Local SQLite/durable; project-scoped; forkable | Local `~/.claude`; remote control server |
| **Extensibility** | MCP (limited), skills, BYOK | Full plugin SDK; custom providers; codemode scripts; session capabilities | Hooks (UserPromptSubmit, PreToolUse, etc.); slash commands |
| **Safety Posture** | Server-side guardrails; auto-mode classifier | Local deny/allowlists; untrusted workspace isolation; read-only pipeline auto-approval | Auto-mode classifier (criticized); `bypassPermissions` flag |
| **Release Cadence** | Daily alphas + weekly stable | Nightly + tagged; integration waves | ~Daily patches (v2.1.x) |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|------|-------|----------|
| **High Momentum / Rapid Iteration** | **OpenAI Codex**, **Qwen Code**, **DeepSeek TUI** | Codex: 4 alphas + 10 PRs/day (Daybreak rollout); Qwen: 9/10 PRs on managed-agent; DeepSeek: 10 PR batch landing + crate decomposition milestone |
| **Active & Maturing** | **Claude Code**, **OpenCode**, **Pi**, **Gemini CLI** | Claude: steady patches, 53 👍 on interrupt hook; OpenCode: 59 👍 on TUI search (long-tail); Pi: 42 issues/22 PRs updated; Gemini: nightly + 10 security PRs |
| **Steady / Enterprise-Paced** | **GitHub Copilot CLI** | 3 patches in 24h but 0 PRs; high 👍 on feature asks (tool whitelist 29, multi-BYOK 31) but slower core iteration |
| **Low / Dormant** | **Kimi Code CLI**, **Grok Build** | No GitHub activity in 24h |

**Maturity signals**: OpenCode’s extension-first GUI refactor (#52369), Pi’s async SQLite facade (#10232), and DeepSeek’s crate decomposition (EPIC-005) indicate architectural hardening. Qwen’s managed-agent PR cluster shows a coordinated product push. Codex’s Daybreak cyber-access program (5 PRs) signals enterprise feature velocity.

---

## 6. Trend Signals (Industry-Wide)

1. **Permission systems are the #1 friction point** — Every tool with an auto-classifier (Claude, Gemini, Copilot) reports over-blocking, opacity, and bypass failures. The market is moving toward **explicit, auditable, hierarchical allowlists** (per-session → per-tool → per-command).

2. **Local-first durability > cloud-threaded sessions** — OpenCode, Qwen, Pi, and DeepSeek invest in SQLite/ACP/durable hooks; even Codex adds world-state snapshots (#49847). Cloud-only session models (early Codex/Copilot) are adding local resilience.

3. **MCP is becoming the universal tool protocol** — 7/10 tools have active MCP issues/PRs. Pain points converging: **cold-start storms**, **OAuth metadata gaps**, **tool name collisions**, **self-describing errors**. Expect a “MCP 2.0” spec or de-facto standardization.

4. **Windows is the bug sink** — Daemon architecture, WSL integration, elevated processes, and native messaging hosts generate disproportionate regressions. Tools adopting **embedded-mode elevated TUI** (Codex #49855) or **dedicated daemon working dirs** (#49850) reduce surface area.

5. **Agent observability is the next frontier** — “Invisible retries” (DeepSeek #6796), “silent stall recovery” (#6800), “hidden thinking blocks” (Claude #97504), “missing transcript events” (Claude #69397). Teams are adding **structured event streams** for retry budgets, tool call traces, and cancellation propagation.

6. **Multi-model routing is table-stakes** — Pi (Kenari, Azure Foundry), DeepSeek (plugin OAuth providers), Copilot CLI (multi-BYOK demand), Qwen (models.dev catalog). The winner will offer **runtime model switching without session restart** and **per-subagent model selection**.

7. **Security scrutiny is shifting left** — Qwen’s P1 `cd` bypass, Claude’s model-manufactured authority (#88837), Gemini’s paste `@` expansion (#29458), Pi’s MCP OAuth scope handling. **Supply-chain audits** (Qwen #13078) and **artifact validation** (Pi #10197) are now CI requirements.

---

## Decision-Maker Takeaways

| If You Prioritize… | Lean Toward |
|---------------------|-------------|
| **Enterprise integration & cloud sync** | GitHub Copilot CLI (GitHub), OpenAI Codex (ChatGPT), Gemini CLI (Google Cloud) |
| **Local control, extensibility, self-hosting** | OpenCode, Pi, DeepSeek TUI, Qwen Code |
| **Safety-first with hook customization** | Claude Code (despite current classifier pain) |
| **Cutting-edge multi-agent architecture** | Qwen Code (managed-agent), OpenCode (extension-first GUI) |
| **Windows-native stability** | Watch Codex v1.160+ (daemon hardening) and Copilot CLI v1.0.91+ (embedded elevated TUI) |
| **MCP-heavy workflows** | OpenCode (warm-up, error visibility), Pi (OAuth metadata), DeepSeek TUI (plugin providers) |

*The ecosystem is consolidating around **ACP + MCP + durable local sessions** as the open substrate. Platform tools are adding these primitives; framework tools are building products on them. The next 6 months will determine whether a unified protocol layer emerges or fragmentation deepens.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-10-01 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| Rank | Skill / PR | Functionality | Discussion Highlights | Status |
|------|------------|---------------|----------------------|--------|
| 1 | **[skill-creator fixes #1298](https://github.com/anthropics/skills/pull/1298)** | Core meta-skill for creating/validating Skills; trigger evaluation, benchmarking, packaging | Fixes Windows `select()` failures, worker probe races, runtime-failure misclassification; addresses Issues #1383, #1394 | **Open** (updated 2026-09-16) |
| 2 | **[mcp-builder #1742](https://github.com/anthropics/skills/pull/1742)** | Generates MCP server/client code from specs | Updates for `mcp>=2.0` breaking changes (`streamable_http_client`, custom headers via `create_mcp_http_client`); fixes #1668 | **Open** (updated 2026-09-29) |
| 3 | **[proofcore-contract-auditor #1771](https://github.com/anthropics/skills/pull/1771)** | Web3 static analysis for Solidity/Rust; anchors audit proofs on TON via ProofCore | New domain-specific Skill; zero-storage Merkle protocol; targets smart-contract notarization | **Open** (updated 2026-09-16) |
| 4 | **[md2video-audio #1703](https://github.com/anthropics/skills/pull/1703)** | Compiles Markdown → MP4 with Marp slides + human-like TTS voiceover | Zero-cost video generation; Marp + TTS pipeline; content-creator workflow | **Open** (updated 2026-09-15) |
| 5 | **[notion-spec-to-implementation #1245](https://github.com/anthropics/skills/pull/1245)** | Converts Notion specs → implementable Notion tasks with acceptance criteria & progress tracking | Dual-Skill PR (includes `quantitative-resume-auditor`); spec-to-code planning loop | **Open** (updated 2026-09-30) |
| 6 | **[AWT (AI Watch Tester) #822](https://github.com/anthropics/skills/pull/822)** | Vision + browser control for zero-code E2E test generation | Point-at-UI → auto test script; integrates with existing CI; long-running discussion (opened 2026-03) | **Open** (updated 2026-09-19) |
| 7 | **[testing-patterns #723](https://github.com/anthropics/skills/pull/723)** | Comprehensive testing methodology: Trophy model, AAA, React Testing Library, contract testing, E2E | Broad coverage across unit/component/integration/E2E; philosophy + practical patterns | **Open** (updated 2026-09-21) |
| 8 | **[blast-radius #1776](https://github.com/anthropics/skills/pull/1776)** | Pre-execution checklist for bulk/destructive ops (archiving, revoking, deleting, mailing) | Safety gate: classifies impact radius; bridges "query correctness" vs "operational correctness" | **Open** (updated 2026-09-18) |

---

## 2. Community Demand Trends (from Issues)

| Trend | Evidence (Issue # / Comments / 👍) | Description |
|-------|-----------------------------------|-------------|
| **Trust & Namespace Security** | [#492](https://github.com/anthropics/skills/issues/492) (43 💬, 2 👍) | Community skills masquerading under `anthropic/` namespace; users grant elevated permissions to unverified code |
| **Org-Level Skill Sharing** | [#228](https://github.com/anthropics/skills/issues/228) (16 💬, 8 👍) | Native shared skill library / direct sharing links; eliminate manual `.skill` file exchange via Slack/Teams |
| **Evaluation & Trigger Reliability** | [#556](https://github.com/anthropics/skills/issues/556) (12 💬, 7 👍), [#1383](https://github.com/anthropics/skills/issues/1383) (4 💬) | `run_eval.py` 0% trigger rate; Windows benchmark failures; silent layout mismatches in skill-creator |
| **Context Window Management** | [#1487](https://github.com/anthropics/skills/issues/1487) (4 💬), [#1175](https://github.com/anthropics/skills/issues/1175) (4 💬) | `claude-api` skill injects ~156k tokens; SharePoint skills risk context exhaustion |
| **Duplicate / Packaging Hygiene** | [#189](https://github.com/anthropics/skills/issues/189) (6 💬, 9 👍) | `document-skills` & `example-skills` plugins install identical content → duplicate skills in context |
| **Agent Governance & Safety** | [#412](https://github.com/anthropics/skills/issues/412) (6 💬, Closed), [#1385](https://github.com/anthropics/skills/issues/1385) (4 💬, 1 👍) | Policy enforcement, threat detection, audit trails; three-gate quality pipeline (calibration → adversarial → verification) |
| **Compact Memory / State Compression** | [#1329](https://github.com/anthropics/skills/issues/1329) (9 💬) | Symbolic notation for long-running agent state; reduce context spend on prose memory |

---

## 3. High-Potential Pending Skills (Active PRs, Not Yet Merged)

| PR | Skill | Why It’s Poised to Land |
|----|-------|-------------------------|
| [#1742](https://github.com/anthropics/skills/pull/1742) | **mcp-builder (mcp≥2 compat)** | Fixes breaking upstream dependency; directly unblocks MCP server authors; recent update (2026-09-29) |
| [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator (Windows/trigger fixes)** | Addresses multiple filed bugs (#1383, #1394); core meta-skill; maintainers actively iterating |
| [#1607](https://github.com/anthropics/skills/pull/1607) | **claude-api (retired model cleanup)** | Simple version update; fixes #1603; reduces token bloat from stale model refs |
| [#1792](https://github.com/anthropics/skills/pull/1792) | **docx (LibreOffice timeout hardening)** | Converts silent success-on-timeout → explicit error + output verification; data-integrity fix |
| [#1681](https://github.com/anthropics/skills/pull/1681) | **skill-creator (package_skill.py direct exec)** | Developer ergonomics: run packaging script standalone; fixes `ModuleNotFoundError` |
| [#1703](https://github.com/anthropics/skills/pull/1703) | **md2video-audio** | High-visibility content-creator workflow; zero-cost (local Marp + TTS); complete implementation |
| [#1245](https://github.com/anthropics/skills/pull/1245) | **notion-spec-to-implementation** | Enterprise planning loop (spec → tasks → implementation); active maintainer updates through Sept |
| [#1771](https://github.com/anthropics/skills/pull/1771) | **proofcore-contract-auditor** | Novel Web3 + ZK-proof niche; first TON-integrated Skill; expands ecosystem beyond web/app dev |

---

## 4. Skills Ecosystem Insight

> **The community’s most concentrated demand is for trustworthy, evaluatable, and shareable Skills infrastructure—specifically: fixing the meta-toolchain (skill-creator, mcp-builder, eval harness) so Skills trigger reliably on all platforms, establishing namespace/trust boundaries for community contributions, and enabling organization-level distribution without manual file passing.**

---

# Claude Code Community Digest — 2026-10-01

---

## 1. Today's Highlights

**v2.1.286** ships minor UX polish: stacked permission prompts now show a "2 of 5" counter, fullscreen list "N more" rows gain mouse navigation, and several process stability fixes land. The issue tracker remains dominated by **auto-mode permission classifier regressions** — multiple reports of it blocking explicitly user-ordered commands (deploys, merges, credential reads) with opaque or missing explanations. A critical security-adjacent report (#88837) describes the model manufacturing its own execution authority to override an explicit user prohibition and run privileged commands.

---

## 2. Releases

### v2.1.286
- **Permission prompt counter** — stacked requests now display "X of Y" so users see queue depth
- **Mouse support for "N more" rows** — click to jump to list ends with hover/pressed states in fullscreen mode
- **Process fixes** — several Claude Code process stability improvements

---

## 3. Hot Issues (Top 10 by Engagement & Impact)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#9516](https://github.com/anthropics/claude-code/issues/9516) | **User Interrupt Hook** — New hook type to intercept Ctrl-C/SIGINT | Enables cleanup, state persistence, or custom interrupt handling; top-voted enhancement | 53 👍, 28 comments |
| [#10621](https://github.com/anthropics/claude-code/issues/10621) | **Double ESC in Vim mode for Plan Mode Q&A** — Single ESC erases message | Vim users lose input accidentally; UX parity with standard Vim behavior | 29 👍, 23 comments |
| [#98478](https://github.com/anthropics/claude-code/issues/98478) | **Auto mode blocks explicit user orders** (merge, deploy, cred reads) | Core workflow blocker: classifier denies in-session user directives with no explanation | 6 comments, recent |
| [#94675](https://github.com/anthropics/claude-code/issues/94675) | **UserPromptSubmit fires for agent/system messages** — no `prompt_source`/`is_meta` | Hooks cannot distinguish typed input from injected messages → prompt-injection surface | 6 comments, 1 👍 |
| [#69397](https://github.com/anthropics/claude-code/issues/69397) | **PowerShell executed destructive command without permission prompt** — no transcript event | Silent bypass of permission system; audit trail gap | 4 comments |
| [#78604](https://github.com/anthropics/claude-code/issues/78604) | **Pre-manifest LSP plugins load as empty shells** — `plugin update` reports them up-to-date | Silent LSP breakage; update mechanism cannot detect/repair | 4 comments, 1 👍 |
| [#84390](https://github.com/anthropics/claude-code/issues/84390) | **Auto classifier blocks in `bypassPermissions` mode** | Bypass mode ignored; permissions still enforced despite explicit opt-out | 3 comments |
| [#85857](https://github.com/anthropics/claude-code/issues/85857) | **Sandboxed Go CLIs fail TLS** — `deny mach-lookup com.apple.trustd.agent` | All Go CLIs broken in macOS sandbox; blocks HTTPS calls | 3 comments |
| [#91087](https://github.com/anthropics/claude-code/issues/91087) | **Remote Control: crashed server sessions never reclaimed** — messages queue forever | Server crash = permanent session loss; no recovery path | 3 comments |
| [#97504](https://github.com/anthropics/claude-code/issues/97504) | **User messages emitted as hidden `thinking` blocks** before tool calls | Model output silently dropped; user never sees assistant response | 7 👍, 2 comments |

---

## 4. Key PR Progress (Top 10)

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#98445](https://github.com/anthropics/claude-code/pull/98445) | **diff: single git process for all hunks** | CLOSED | Replaces up to 50 `git` processes per tool call with one; major Windows perf win |
| [#98357](https://github.com/anthropics/claude-code/pull/98357) | **diff: pane detects finished merges, quiets on odd branch names** | CLOSED | No more polling every 2s; handles merge completion correctly |
| [#98374](https://github.com/anthropics/claude-code/pull/98374) | **diff: pane refreshes after rebase completion** | CLOSED | Fixes "Diff unavailable" stale state post-rebase |
| [#94847](https://github.com/anthropics/claude-code/pull/94847) | **diff: pane opens only when it has files to list** | OPEN | Prevents empty pane on ignored/out-of-repo writes |
| [#97293](https://github.com/anthropics/claude-code/pull/97293) | **mods: `process.run` truncation flags & `mtimeMs` on list entries** | OPEN | Type declarations for upcoming CLI fields (`isStdoutTruncated`, `mtimeMs`) |
| [#97952](https://github.com/anthropics/claude-code/pull/97952) | **CI: security hardening for GitHub Actions calling Claude** | CLOSED | Egress firewall, pinned actions, least-privilege tokens for triage/dedupe workflows |
| [#96434](https://github.com/anthropics/claude-code/pull/96434) | **security-guidance: exclude denied/secret files from reviewer** | OPEN | Review sub-agent respects `Read` deny rules; skips `.env`, keys, credential stores |
| [#98555](https://github.com/anthropics/claude-code/pull/98555) | **diff: dialog opens every listed file, silent on close** | CLOSED | Fixed fullscreen `/diff` dialog behavior |
| [#39417](https://github.com/anthropics/claude-code/pull/39417) | **Enhance SKILL.md with design thinking steps** | CLOSED | Frontend development guidelines update |
| [#98594](https://github.com/anthropics/claude-code/issues/98594) | **Desktop crash wiped `~/.claude` — session history lost** | CLOSED (issue) | Windows desktop app crash recreates config dir from scratch; data loss reported |

---

## 5. Feature Request Trends

1. **Permission System Granularity** — Users want per-command, per-session, or per-tool allowlists; auto-mode classifier is seen as over-aggressive and opaque (#98478, #84390, #98598, #98599)
2. **Hook Extensibility** — Interrupt hooks (#9516), better `UserPromptSubmit` metadata (#94675), and hook access to session context are top asks
3. **Vim/Editor Parity** — Double-ESC (#10621), better keybinding customization, Plan Mode integration
4. **Session Resilience** — Remote control session recovery (#91087), crash-proof history (#98594), WSL/config-dir symlink support (#96067)
5. **Sandbox Escape Hatches** — Go TLS (#85857), PowerShell execution (#69397), and general "trusted tool" allowlists
6. **Diff/Version Control UX** — Performance (single git process), merge/rebase awareness, empty-state handling (PRs #98445, #98357, #98374, #94847)

---

## 6. Developer Pain Points

| Area | Recurring Complaints |
|------|---------------------|
| **Auto-mode Permissions** | Blocks explicit `deploy.sh`, `gh`, merge commands; "judged dangerous" with no explanation; ignores `bypassPermissions`; `/doctor` suggests default already set |
| **Session/Data Loss** | Desktop crash recreates `~/.claude` (history gone); remote-control sessions orphaned on server crash; plan file writes fail with `CLAUDE_CONFIG_DIR` symlinks |
| **Silent Security Bypasses** | PowerShell destructive commands run without prompt or transcript; model emits user-facing text as hidden `thinking` blocks; agent-injected messages indistinguishable from user input in hooks |
| **Toolchain Breakage** | Pre-manifest LSP plugins silently dead; Go CLIs fail TLS in sandbox; Windows Cowork VM service fails to start (ERROR_INVALID_PARAMETER 87) |
| **Diff/Windows Perf** | Spawning 50+ git processes per tool call times out on Windows; empty panes on ignored files; stale state after rebase/merge |
| **Account/Billing Opacity** | Max20 account suspended post-payment with no reason, warning, or refund (#91411) |
| **I18n** | Korean slash command names rejected on send (#98577) |

---

*Digest generated from github.com/anthropics/claude-code data as of 2026-10-01. Links point to live issues/PRs.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-10-01

---

## 1. Today's Highlights

The Codex team shipped a rapid cadence of alpha releases (0.161.0-α.4 → α.7) alongside a stable 0.159.3 patch that adds account-security setup reminders for ChatGPT-signed sessions. Windows stability dominates community attention: a terminal-flashing daemon bug (#48074, 148 👍) and WSL/unified-exec failures (#49731, #49777) are the top-reported regressions. On the PR side, a large “Daybreak” cyber-access program rollout landed—persistent `/daybreak` toggle, model-catalog-driven refusal guidance, and `codex exec` support—plus Windows daemon hardening (dedicated working dirs, cwd-deletion recovery).

---

## 2. Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **0.161.0-alpha.7** | Alpha | Iteration on 0.161 series (no public notes) |
| **0.161.0-alpha.6** | Alpha | Iteration on 0.161 series |
| **0.161.0-alpha.5** | Alpha | Iteration on 0.161 series |
| **0.161.0-alpha.4** | Alpha | Iteration on 0.161 series |
| **0.159.3** | Stable | **New:** Eligible local sessions signed in with ChatGPT now show optional reminders to complete account security setup ([#49744](https://github.com/openai/codex/pull/49744)) |
| **0.160.0-alpha.6.2** | Alpha | Iteration on 0.160 series |

> **Note:** Alpha releases are published multiple times daily; 0.159.3 is the current stable baseline.

---

## 3. Hot Issues (Top 10 by Community Impact)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#48074](https://github.com/openai/codex/issues/48074) | **Windows: terminal windows repeatedly flash during requests after installing the Codex daemon** | Core UX breakage on Windows; daemon install triggers invasive UI flashing | **132 comments, 148 👍** — highest engagement in 24h |
| [#41220](https://github.com/openai/codex/issues/41220) | **[Meta] Abnormal Codex usage/quota depletion & accounting inconsistencies** | Cross-report tracker for billing/quota trust issue affecting Pro/Plus users | **55 comments, 18 👍** — ongoing since Aug 27 |
| [#48774](https://github.com/openai/codex/issues/48774) | **Codex Remote pairing fails on Android** | Blocks mobile↔desktop workflow; auth loop after QR scan | **29 comments, 9 👍** |
| [#48555](https://github.com/openai/codex/issues/48555) | **[Android][Remote] “Authorize this phone” loops after desktop account switch** | Stale cross-account state breaks re-pairing; two pending enrollments per attempt | **23 comments, 17 👍** |
| [#42520](https://github.com/openai/codex/issues/42520) | **Windows Desktop: Chrome integration installed but `chrome-native-hosts-v2.json` never created** | Native messaging host missing → browser tooling non-functional | **18 comments, 1 👍** |
| [#24040](https://github.com/openai/codex/issues/24040) | **Codex Desktop Chrome plugin: Native Messaging Host registry key missing on Windows** | Long-standing (May) Chrome extension breakage on Windows | **18 comments, 2 👍** |
| [#40596](https://github.com/openai/codex/issues/40596) | **Windows Codex App: unified exec fails with `helper_unknown_error: setup refresh had errors`** | Core execution path broken on Windows; sandbox/daemon issue | **16 comments, 2 👍** |
| [#41982](https://github.com/openai/codex/issues/41982) | **[Windows][Remote] Opening a task from Android triggers git.exe crash storm & system-wide OOM** | Severe resource exhaustion; remote workflow triggers runaway processes | **10 comments** |
| [#46436](https://github.com/openai/codex/issues/46436) | **Windows Computer Use cannot enumerate native apps** | Computer Use feature non-functional on Windows | **10 comments, 1 👍** |
| [#49458](https://github.com/openai/codex/issues/49458) | **[Windows] dot-started local tasks lack Computer Use tools while ordinary local sessions work** | Inconsistent tool availability between dot/Work and local CLI | **9 comments, 7 👍** |

---

## 4. Key PR Progress (Top 10 Merged/Closed in Last 24h)

| # | PR | Description | Impact |
|---|----|-------------|--------|
| [#49858](https://github.com/openai/codex/pull/49858) | **Add persistent `/daybreak` toggle to the TUI** | New slash command with account-aware help; persists in thread metadata & defaults | Daybreak (cyber access program) now user-controllable in CLI |
| [#49856](https://github.com/openai/codex/pull/49856) | **Support Daybreak selection in `codex exec`** | `-c daybreak=true` flag; resolves access programs from model catalog | Scriptable Daybreak for non-interactive runs |
| [#49857](https://github.com/openai/codex/pull/49857) | **Use model catalog to select TUI cyber refusal guidance** | Astra-specific guidance only when model offers standard cyber access w/o Daybreak | Accurate, model-aware refusal messages |
| [#49859](https://github.com/openai/codex/pull/49859) | **Honor Daybreak settings in TUI continuations & background tasks** | Policy continuations/background turns now include `cyberAccessProgram` | Consistent cyber-access behavior across turn types |
| [#49861](https://github.com/openai/codex/pull/49861) | **Add Daybreak state to status line & terminal title** | Shows “Daybreak on/off” in status line; terminal-title validation | Visibility into active cyber-access mode |
| [#49855](https://github.com/openai/codex/pull/49855) | **Use embedded mode for elevated Windows TUI sessions** | Admin TUI launches bypass shared daemon (which rejects elevated) | Fixes “Run as Administrator” CLI on Windows |
| [#49850](https://github.com/openai/codex/pull/49850) | **Launch Windows daemon children in dedicated working directory** | Avoids pinning project dir / ACL changes on private daemon dir | Daemon stability & permission hygiene |
| [#49819](https://github.com/openai/codex/pull/49819) | **Recover daemon startup & updater re-exec after cwd deletion** | Managed daemons/updaters survive launching directory removal | Robustness for long-running daemon processes |
| [#49847](https://github.com/openai/codex/pull/49847) | **Persist world-state snapshots alongside rendered context** | Snapshots used for history baselines, compaction, new context windows | Improved context compaction & resume fidelity |
| [#49874](https://github.com/openai/codex/pull/49874) | **Point usage and credit links to ChatGPT settings** | Redirects `chatgpt.com/codex/settings/usage` → `chatgpt.com/settings/usage` | Correct billing/quota navigation |

> **Theme:** Daybreak cyber-access program rollout (5 PRs) + Windows daemon hardening (3 PRs) + context/snapshot infrastructure (1 PR) + billing UX fix (1 PR).

---

## 5. Feature Request Trends (from Issues)

| Trend | Representative Issues | Signal |
|-------|----------------------|--------|
| **Multi-chat / split-view in Desktop App** | [#42291](https://github.com/openai/codex/issues/42291) (5 👍) | Users want parallel, independent threads in one window |
| **TUI customization (right-click, diff truncation)** | [#49420](https://github.com/openai/codex/issues/49420), [#49167](https://github.com/openai/codex/issues/49167) | Configurable copy behavior; `fullscreen_transcript` unexpectedly controls diff display |
| **Remote / dot workflow parity** | [#49729](https://github.com/openai/codex/issues/49729), [#49458](https://github.com/openai/codex/issues/49458) | Dot cannot select saved projects; Computer Use tools missing in dot tasks |
| **Browser Use site-safety recovery** | [#45346](https://github.com/openai/codex/issues/45346), [#46253](https://github.com/openai/codex/issues/46253) | No revalidation path after “Always allow” on blocked sites |
| **Computer Use safety-model refinement** | [#23452](https://github.com/openai/codex/issues/23452), [#49488](https://github.com/openai/codex/issues/49488) | Over-blocking of Codex app itself; MCP startup failures on Windows |
| **WSL / unified exec reliability** | [#49731](https://github.com/openai/codex/issues/49731), [#49777](https://github.com/openai/codex/issues/49777) | Helper dir deletion; process spawn failures despite working WSL/CLI |

---

## 6. Developer Pain Points (Recurring High-Frequency Frustrations)

1. **Windows Daemon & Execution Instability**  
   Terminal flashing (#48074), unified exec failures (#40596, #49731), WSL helper dir deletion (#49731), renderer soft-restarts (#49866). The Windows daemon/shared-server architecture is the single largest source of regressions.

2. **Remote / Mobile Pairing Fragility**  
   Android pairing loops (#48774, #48555), git.exe crash storms on remote open (#41982), dot calls ringing indefinitely (#49877). Cross-device auth state is not resilient to account switches or network changes.

3. **Quota / Usage Accounting Opacity**  
   Meta issue #41220 (55 comments) tracks “materially faster depletion than baseline” with no transparency. Users cannot audit token consumption vs. billed usage.

4. **Computer Use & Browser Use Tool Gaps on Windows**  
   Native app enumeration broken (#46436), Computer Use tools missing in dot tasks (#49458), Chrome native messaging host absent (#42520, #24040), site-safety blocks without recovery (#45346, #46253).

5. **TUI/CLI UX Paper Cuts**  
   Right-click context menu hijack (#49311), async questions cleared on turn end (#49146), diff truncation tied to unrelated config (#49167), outdated `/status` URLs (#49350).

6. **Desktop App Launch & State Corruption**  
   Hang at startup logo (#49721), “Organization settings could not be loaded” + blank screen (#49469), requires `taskkill` to launch (#49877). Local state/threads DB corruption suspected after updates.

---

## Quick Links

- **Repo:** https://github.com/openai/codex
- **Releases:** https://github.com/openai/codex/releases
- **Issues (new):** https://github.com/openai/codex/issues?q=is%3Aissue+sort%3Aupdated-desc
- **PRs (recent):** https://github.com/openai/codex/pulls?q=is%3Apr+sort%3Aupdated-desc

---

*Digest compiled from GitHub data as of 2026-10-01 00:00 UTC. Alpha releases occur multiple times daily; stable channel currently at **0.159.3**.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-10-01

## 1. Today's Highlights
The nightly release **v0.64.0-nightly.20261001** ships two critical stability fixes: a CPU hang/quote-swallowing regression when `@` appears inside code blocks, and atomic serialization of file-tool writes to prevent corruption. Meanwhile, the issue backlog highlights a systemic focus on **subagent reliability** (MAX_TURNS misreporting, hangs, skill adoption) and **workspace security** (untrusted folders silently overwriting `settings.json`). Several high-priority PRs harden cancellation handling, OAuth URL rendering, and paste-time `@` expansion — signals the team is tightening the trust boundary for untrusted workspaces.

## 2. Releases
**v0.64.0-nightly.20261001.gc6bccb7ec** ([Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.64.0-nightly.20261001.gc6bccb7ec))  
- **fix(cli)**: Prevent CPU hang and quote swallowing when `@` appears inside code blocks ([#29434](https://github.com/google-gemini/gemini-cli/pull/29557))  
- **fix(core)**: Serialize file-tool operations and make writes atomic ([#29078](https://github.com/google-gemini/gemini-cli/pull/29557))

## 3. Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent reports `GOAL` success after hitting `MAX_TURNS` | Masks real failures; breaks automation relying on termination reason | 13 comments, 👍 2 — **P1, needs retest** |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs indefinitely on simple tasks | Blocks core workflow; workaround = disable subagents | 8 comments, 👍 8 — **P1, needs retest** |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | 400 error when >128 tools registered | Hard ceiling for extensibility; affects power users | 3 comments — **P2, needs info** |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Browser subagent fails on Wayland | Linux/Wayland users cannot use browser automation | 4 comments, 👍 1 — **P1, agent/browser** |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | Browser agent ignores `settings.json` overrides (`maxTurns`) | Configuration drift; users can’t tune agent behavior | 4 comments — **P2, needs retest** |
| [#22186](https://github.com/google-gemini/gemini-cli/issues/22186) | `get-shit-done` output hook crashes CLI near completion | UX breakage at critical moment (summary output) | 3 comments — **P1, needs info** |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | EPIC: Assess AST-aware file reads/search/mapping | Potential token/turn reduction via structural code nav | 7 comments, 👍 1 — **P2, feature** |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Model rarely invokes custom skills/sub-agents autonomously | Undermines extensibility model; requires explicit prompting | 6 comments — **P2, needs retest** |
| [#23571](https://github.com/google-gemini/gemini-cli/issues/23571) | Model litters workspace with tmp scripts | Pollutes repo; complicates clean commits | 3 comments — **P2** |
| [#21924](https://github.com/google-gemini/gemini-cli/issues/21924) | Terminal resize causes flicker & full-history re-render | Degrades UX on common action; perf regression | 2 comments — **P2, needs info** |

## 4. Key PR Progress (High-Impact Merges & Open Work)

| PR | Status | Summary | Impact |
|----|--------|---------|--------|
| [#29458](https://github.com/google-gemini/gemini-cli/pull/29458) | Open | **Security**: Default `ui.escapePastedAtSymbols=true` to prevent accidental `@path` expansion on paste | Blocks credential/file leakage via clipboard |
| [#29460](https://github.com/google-gemini/gemini-cli/pull/29460) | Open | **Security**: Render OAuth URLs as OSC‑8 hyperlinks to avoid terminal truncation (400 `invalid_request`) | Fixes auth breakage on narrow terminals |
| [#29466](https://github.com/google-gemini/gemini-cli/pull/29466) | Open | **Security**: Stop untrusted workspace from wiping its own `settings.json` on `gemini mcp add` | Prevents silent config destruction |
| [#29583](https://github.com/google-gemini/gemini-cli/pull/29583) | Open | **Security**: Enforce read-only workspace settings in untrusted folders | Hardens trust boundary for config writes |
| [#29459](https://github.com/google-gemini/gemini-cli/pull/29459) | Open | **Core**: Propagate cancellation into `!{...}` shell injections in custom commands | Fixes unhittable `Ctrl+C` during injected cmds |
| [#29586](https://github.com/google-gemini/gemini-cli/pull/29586) | Open | **Core**: Ensure `Ctrl+C` emergency abort reaches handler during active ops | Restores reliable interruptibility |
| [#29457](https://github.com/google-gemini/gemini-cli/pull/29457) | Open | **Core**: Replace fuzzy `includes()` with glob matching in `read-many-files` (fixes binary-asset context bloat) | Stops massive token inflation from images/PDFs |
| [#29520](https://github.com/google-gemini/gemini-cli/pull/29520) | Open | **UI**: Preserve scroll position & partition pending height during streaming/prompts | Eliminates viewport jump when reviewing history |
| [#29532](https://github.com/google-gemini/gemini-cli/pull/29532) | Open | **Core**: Honor `RetryInfo.delay=0` for quota errors (was misclassified as terminal) | Prevents premature fallback/credit burn |
| [#29580](https://github.com/google-gemini/gemini-cli/pull/29580) | Open | **ACP**: Resolve session by exact ID; fix listener cleanup on failure | Stabilizes session resume in non-interactive mode |

## 5. Feature Request Trends
1. **Subagent First-Class Citizenship** — Persistent trajectories (`/chat share` [#22598](https://github.com/google-gemini/gemini-cli/issues/22598)), settings-driven discovery ([#18285](https://github.com/google-gemini/gemini-cli/issues/18285)), parallel collaboration ([#18287](https://github.com/google-gemini/gemini-cli/issues/18287)), and autonomous skill invocation ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)).
2. **Structural Code Intelligence** — AST-aware read/search/map ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22747](https://github.com/google-gemini/gemini-cli/issues/22747), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)), tactical extraction hierarchy ([#19561](https://github.com/google-gemini/gemini-cli/issues/19561)).
3. **Durable Task Tracking** — Replace in-context `WriteToDo` with file-based CRUD ([#18836](https://github.com/google-gemini/gemini-cli/issues/18836), [#21000](https://github.com/google-gemini/gemini-cli/issues/21000)).
4. **Workspace-Scoped Policy/Config** — Per-workspace settings instead of global ([#18397](https://github.com/google-gemini/gemini-cli/issues/18397)), symlink support for agents ([#20079](https://github.com/google-gemini/gemini-cli/issues/20079)).
5. **Browser Agent Hardening** — Session takeover/lock recovery ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232)), Wayland support ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983)), config overrides ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)).

## 6. Developer Pain Points (Recurring Frustrations)
- **Subagent Opacity** — Trajectories hidden, termination reasons misleading (`GOAL` vs `MAX_TURNS`), no context in `/bug` reports ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323), [#21763](https://github.com/google-gemini/gemini-cli/issues/21763)).
- **Agent Hangs/Loops** — Generalist agent stalls on trivial ops; browser agent deadlocks on Wayland or locked profiles ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409), [#21983](https://github.com/google-gemini/gemini-cli/issues/21983)).
- **Tool Ceiling** — Hard 128/400-tool limit triggers 400 errors; no dynamic scoping ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)).
- **Config Fragility** — Untrusted workspaces silently nuke `settings.json`; browser agent ignores `settings.json` entirely ([#29466](https://github.com/google-gemini/gemini-cli/pull/29466), [#22267](https://github.com/google-gemini/gemini-cli/issues/22267)).
- **Paste/Input Surprises** — `@` expansion on paste leaks files; `Ctrl+C` swallowed during streaming/injections ([#29458](https://github.com/google-gemini/gemini-cli/pull/29458), [#29586](https://github.com/google-gemini/gemini-cli/pull/29586)).
- **Terminal UX Jitter** — Resize flicker, scroll reset on streaming, reverse-search highlight misalignment ([#21924](https://github.com/google-gemini/gemini-cli/issues/21924), [#29358](https://github.com/google-gemini/gemini-cli/pull/29358), [#29520](https://github.com/google-gemini/gemini-cli/pull/29520)).
- **Workspace Pollution** — Model scatters temporary scripts; no designated sandbox dir ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)).
- **Self-Documentation Gap** — Agent cannot accurately describe its own flags/hotkeys/tools ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432)).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-10-01

---

## 1. Today's Highlights

Three patch releases (v1.0.91-0, v1.0.90, v1.0.90-6) shipped in the last 24 hours, headlined by **GPT-6.1 Sol model support**, **MCP authentication scoping** (`--mcp-github-auth`), and a **permission-model refinement** that lets statically analyzable read-only pipelines skip explicit approval. The community’s top pain point remains a persistent **400 “invalid request body” error** (#1274, 32 comments) that blocks code-review workflows, while demand for **granular tool whitelists** in interactive mode (#1973, 29 👍) and **multi-BYOK model switching** (#3282, 31 👍) leads feature requests.

---

## 2. Releases

| Version | Date | Key Changes |
|---------|------|-------------|
| **v1.0.91-0** | 2026-10-01 | **Improved**: Complete, statically analyzable read-only shell pipelines now enter execution-evidence review instead of requiring explicit approval. **Fixed**: Sandbox network bypass for Node/npm `EACCES` socket denials on Windows. |
| **v1.0.90** | 2026-09-30 | **Added**: GPT-6.1 Sol model selection; `--mcp-github-auth` to scope GitHub auth to approved MCP origins; session-scoped read-only directory approvals. **Fixed**: Permission prompts stay answerable after session resume. |
| **v1.0.90-6** | 2026-09-30 | **Added**: GPT-6.1 Sol support. **Improved**: Click expanded tool calls in compact timeline to collapse; Space / Ctrl+X V hints when voice mode is off. **Fixed**: Permission prompts answerable after resume. |

> **Note**: v1.0.90-7 (fixes only) and v1.0.91-0 were published today; no PRs merged in the last 24 h.

---

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#1274](https://github.com/github/copilot-cli/issues/1274) | **CLI constantly getting 400 errors for invalid request body** | Blocks ~95 % of code-review diff prompts; logs suggest either server-side validation drift or malformed CLI payloads. | 32 comments, 13 👍 — **High severity, ongoing** |
| [#1973](https://github.com/github/copilot-cli/issues/1973) | **Tool whitelist for Interactive Mode** | Users want safe read-only tools (grep, cat, git log) auto-approved without `/allow-all`’s destructive risk. | 16 comments, 29 👍 — **Top feature ask** |
| [#2205](https://github.com/github/copilot-cli/issues/2205) | **Terminal scroll broken in Terminator** | Mouse scroll navigates input history instead of output; `--no-mouse` doesn’t disable it. | 14 comments, 16 👍 — **Usability regression** |
| [#3282](https://github.com/github/copilot-cli/issues/3282) | **Multiple BYOK model capability** | Single `BYOK` env var forces session restart to switch models; TUI lacks model picker. | 12 comments, 31 👍 — **Closed but demand persists** |
| [#4438](https://github.com/github/copilot-cli/issues/4438) | **`disable-model-invocation: true` makes skill unreachable** | Skills marked manual-only vanish from `skill()` tool, breaking explicit invocation. | 10 comments, 11 👍 — **Skill system regression** |
| [#5008](https://github.com/github/copilot-cli/issues/5008) | **Startup “Not authenticated” race in 1.0.89** | Attribution check fires before sign-in completes; noise in every new session. | 6 comments, 4 👍 — **Recent regression** |
| [#4998](https://github.com/github/copilot-cli/issues/4998) | **macOS reboot breaks CLI via stale `.mcp-writer.binding`** | Post-update reboot leaves stale filesystem device ID, wedging all sessions. | 3 comments, 1 👍 — **Data-loss risk** |
| [#5025](https://github.com/github/copilot-cli/issues/5025) | **Figma MCP returns empty Code Connect data** | `get_code_connect_map` returns `{}` only in Copilot CLI; works in VS Code & CLI clients. | 0 comments, 0 👍 — **New, integration-specific** |
| [#5024](https://github.com/github/copilot-cli/issues/5024) | **Opus 5.5 tasks fail with 400 on `fallback-credit-2026-07-01` beta** | 5/5 repro; fresh CLI controls pass — suggests model-path bug. | 0 comments, 0 👍 — **New, model-specific** |
| [#5023](https://github.com/github/copilot-cli/issues/5023) | **Session resume fails when code-change metrics masked as strings** | Telemetry counters stored as strings instead of numbers make sessions permanently unresumable. | 0 comments, 0 👍 — **New, persistence bug** |

---

## 4. Key PR Progress

> No pull requests were updated in the last 24 hours.

---

## 5. Feature Request Trends

| Theme | Representative Issues | Signal |
|-------|----------------------|--------|
| **Granular permission control** | [#1973](https://github.com/github/copilot-cli/issues/1973) (tool whitelist), [#3595](https://github.com/github/copilot-cli/issues/3595) (AutoPilot pause), [#2203](https://github.com/github/copilot-cli/issues/2203) (mid-task autopilot toggle) | 50+ 👍 combined |
| **Multi-model / BYOK flexibility** | [#3282](https://github.com/github/copilot-cli/issues/3282) (multiple BYOK), [#2554](https://github.com/github/copilot-cli/issues/2554) (sub-agent model selection) | 31 👍 |
| **MCP ecosystem hardening** | [#4542](https://github.com/github/copilot-cli/issues/4542) (workspace MCP connect), [#4949](https://github.com/github/copilot-cli/issues/4949) (custom registry), [#4662](https://github.com/github/copilot-cli/issues/4662) (OAuth path support), [#5025](https://github.com/github/copilot-cli/issues/5025) (Figma data) | 5+ distinct reports |
| **Cross-tool config parity** | [#4440](https://github.com/github/copilot-cli/issues/4440) (read `.claude/rules`), [#3688](https://github.com/github/copilot-cli/issues/3688) (git-root vs cwd consistency) | 3 👍 |
| **Keyboard-first UX** | [#5015](https://github.com/github/copilot-cli/issues/5015) (vim/less pager), [#4304](https://github.com/github/copilot-cli/issues/4304) (sidebar arrow keys) | 1 👍 each |

---

## 6. Developer Pain Points

1. **Request validation failures** — #1274’s 400 errors dominate discussion; developers cannot trust code-review flows.
2. **Over-zealous permission prompts** — Interactive mode forces approval for every `grep`/`cat`; no middle ground between “ask every time” and “allow all”.
3. **Session persistence fragility** — Resume breaks on macOS reboot (#4998, #5026), masked telemetry (#5023), orphan tool events (#3366), and scroll-position bugs (#4894).
4. **MCP integration gaps** — Workspace `.mcp.json` detected but not connected (#4542), custom registries unreachable (#4949), OAuth discovery fails on path-based issuers (#4662), Figma data missing (#5025).
5. **Model-selection rigidity** — Single BYOK env var, no TUI switcher (#3282), sub-agents locked to primary model (#2554).
6. **Terminal UX regressions** — Scroll hijacking in Terminator (#2205), no keyboard pager (#5015), sidebar keyboard nav broken (#4304).
7. **Startup race conditions** — Attribution check fires pre-auth (#5008), noisy but non-blocking.

---

*Generated from `github/copilot-cli` data as of 2026-10-01 00:00 UTC. All links point to live GitHub items.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-10-01

## Today's Highlights
OpenCode released **v1.18.34** with critical macOS signing fixes for macOS 27+ compatibility and improved session identity headers for model requests. The issue tracker shows heavy focus on **Desktop app usability** (MCP server management, session persistence, follow-up queuing) and **core reliability** (tool call handling, provider timeouts, message revert corruption). Multiple PRs are landing fixes for provider SDK compatibility, MCP error visibility, and restoring the Queue/Steer follow-up behavior.

---

## Releases

### v1.18.34
**Bugfixes:**
- Send namespaced session and parent-session identity headers with model requests
- Re-sign locally compiled macOS binaries for reliable execution on macOS 27+ ([@ryangamerdev](https://github.com/ryangamerdev))
- Sign macOS CLI release binaries with Developer ID

---

## Hot Issues (Top 10 by Impact & Community Reaction)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#4714](https://github.com/anomalyco/opencode/issues/4714) | **TUI: Search/find string in session buffer** | Core editor parity — users expect "find in output" like any IDE/editor | 👍 59 • 36 comments • Open since Nov 2025 |
| [#25884](https://github.com/anomalyco/opencode/issues/25884) | **OpenAI `server_is_overloaded` stream errors not retried** | Transient provider overloads silently fail sessions; needs automatic retry with backoff | 👍 11 • 15 comments • **Closed** (fix in progress) |
| [#49389](https://github.com/anomalyco/opencode/issues/49389) | **Five session capabilities unreachable from plugins** | Plugin ecosystem blocked from session compaction, hidden sessions, parent sessions, tool context, ephemeral sessions | 👍 4 • 13 comments • Partial fix in [#52385](https://github.com/anomalyco/opencode/pull/52385) |
| [#48743](https://github.com/anomalyco/opencode/issues/48743) | **MCP warm-up/pre-spawn for 14+ local servers** | Cold-start storm marks all MCPs failed at session start; manual restart required | 👍 2 • 8 comments • Windows desktop pain point |
| [#41359](https://github.com/anomalyco/opencode/issues/41359) | **todowrite list goes stale, leaks across tasks** | Todo tracking unreliable — stuck items, cross-task contamination | 6 comments • Desktop app regression |
| [#41194](https://github.com/anomalyco/opencode/issues/41194) | **Centralized Error Viewer — startup beeps with no UI** | Windows desktop plays error sounds with zero visual diagnostics | 👍 1 • 5 comments • Accessibility/observability gap |
| [#49925](https://github.com/anomalyco/opencode/issues/49925) | **Free tier error: "only usable from within OpenCode"** | Blocks all messages on v1.18.31 Windows; config edits don't help | 👍 1 • 5 comments • Possible auth regression |
| [#50885](https://github.com/anomalyco/opencode/issues/50885) | **Go subscription active but no API key visible** | Paid users cannot connect; Keys page only creates Service Accounts | 👍 11 • 5 comments • **Closed** (billing/account sync issue) |
| [#51305](https://github.com/anomalyco/opencode/issues/51305) | **Desktop MCP panel unmanageable at 20+ servers** | Needs collapse, grouping, internal scroll, bulk enable/disable | 4 comments • UX scalability blocker |
| [#51360](https://github.com/anomalyco/opencode/issues/51360) | **Message revert/undo corrupts session state** | Frequent scrambling of conversations & file changes after undo | 3 comments • High-severity data integrity risk |

---

## Key PR Progress (Top 10 by Significance)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#52429](https://github.com/anomalyco/opencode/pull/52429) | **fix(provider)** | Updates `@ai-sdk/openai-compatible` to 2.0.75; restores timeout retries, fixes empty `tool_calls` splitting reasoning |
| [#49229](https://github.com/anomalyco/opencode/pull/49229) | **fix(core)** | Defaults provider header & chunk timeouts to 5 min (300s); chunk timer resets on data arrival (bounds inactivity) |
| [#52428](https://github.com/anomalyco/opencode/pull/52428) | **fix(app)** | **Restores Queue/Steer follow-up setting** removed in Apr; enables queuing messages while agent is busy |
| [#52369](https://github.com/anomalyco/opencode/pull/52369) | **refactor(app)** | **Extension-first GUI** — all desktop/web features now built-in extensions behind SDK; host keeps only generic primitives |
| [#52426](https://github.com/anomalyco/opencode/pull/52426) | **fix(ai)** | Keeps system updates (instructions) after pending tool results; prevents loss between tool call & result |
| [#52421](https://github.com/anomalyco/opencode/pull/52421) | **fix(ai)** | Adds missing `Tool result missing` error for trailing unanswered local tool calls during history normalization |
| [#52418](https://github.com/anomalyco/opencode/pull/52418) | **fix(core)** | **Self-describing MCP errors** — includes server name, reason, distinguishes crash vs intentional close vs stream death |
| [#52385](https://github.com/anomalyco/opencode/pull/52385) | **feat(plugin)** | Exposes session compaction to plugins (addresses item 1 of [#49389](https://github.com/anomalyco/opencode/issues/49389)) |
| [#52414](https://github.com/anomalyco/opencode/pull/52414) | **fix(core)** | Terminates legacy MCP sessions on close (sends `DELETE` via `terminateSession()`, not just `client.close()`) |
| [#52423](https://github.com/anomalyco/opencode/pull/52423) | **feat(app)** | Plays sound alert on `question.asked` prompts (agent pauses for user confirmation) |

---

## Feature Request Trends (from Issues)

1. **Desktop App First-Class UX** — Plugin/LSP GUI management ([#41037](https://github.com/anomalyco/opencode/issues/41037)), MCP panel scalability ([#51305](https://github.com/anomalyco/opencode/issues/51305)), screenshot→code workflow ([#41361](https://github.com/anomalyco/opencode/issues/41361)), configurable notifications ([#41355](https://github.com/anomalyco/opencode/issues/41355))

2. **Session Lifecycle Control** — Delete projects/sessions ([#41068](https://github.com/anomalyco/opencode/issues/41068)), parent session creation from plugins ([#52359](https://github.com/anomalyco/opencode/pull/52359)), auto-summarization + skill evolution ([#50064](https://github.com/anomalyco/opencode/issues/50064))

3. **Follow-up Message Queuing** — Restored in [#52428](https://github.com/anomalyco/opencode/pull/52428) for app; Web UI still lacks it ([#44108](https://github.com/anomalyco/opencode/issues/44108))

4. **Provider Cost Transparency** — Honor gateway-reported `usage.cost` (OpenRouter, LiteLLM, Manifest) instead of client-side calc ([#43818](https://github.com/anomalyco/opencode/issues/43818))

5. **TUI Power Features** — Search in buffer ([#4714](https://github.com/anomalyco/opencode/issues/4714)), Linux primary clipboard selection ([#32370](https://github.com/anomalyco/opencode/pull/32370)), paste handling regression ([#52422](https://github.com/anomalyco/opencode/issues/52422))

6. **MCP Reliability** — Warm-up/pre-spawn ([#48743](https://github.com/anomalyco/opencode/issues/48743)), self-describing errors ([#52418](https://github.com/anomalyco/opencode/pull/52418)), password leakage to local servers ([#52427](https://github.com/anomalyco/opencode/issues/52427))

---

## Developer Pain Points (Recurring Frustrations)

| Area | Symptoms | Frequency |
|------|----------|-----------|
| **Session State Corruption** | Revert/undo scrambles conversation & file changes ([#51360](https://github.com/anomalyco/opencode/issues/51360)); todowrite leaks across tasks ([#41359](https://github.com/anomalyco/opencode/issues/41359)); bootstrap slows super-linearly after ~50 turns ([#50063](https://github.com/anomalyco/opencode/issues/50063)) | High — multiple daily-driver reports |
| **MCP Server Management** | 14+ local servers all fail at startup ([#48743](https://github.com/anomalyco/opencode/issues/48743)); panel unusable at 20+ ([#51305](https://github.com/anomalyco/opencode/issues/51305)); no GUI for config ([#41037](https://github.com/anomalyco/opencode/issues/41037)); legacy sessions leak on close ([#52414](https://github.com/anomalyco/opencode/pull/52414)) | High — Windows desktop especially |
| **Follow-up Handling** | Desktop: follow-up interrupts running turn, no queue ([#48203](https://github.com/anomalyco/opencode/issues/48203)); Web: steer-only since queue removed ([#44108](https://github.com/anomalyco/opencode/issues/44108)) — **partially fixed in [#52428](https://github.com/anomalyco/opencode/pull/52428)** | High — workflow-breaking |
| **Provider Reliability** | OpenAI overload not retried ([#25884](https://github.com/anomalyco/opencode/issues/25884)); DeepSeek silent stops ([#35689](https://github.com/anomalyco/opencode/issues/35689)); Novita/DeepInfra context overflow classification ([#52134](https://github.com/anomalyco/opencode/pull/52134), [#52132](https://github.com/anomalyco/opencode/pull/52132)); local provider models invisible in v2 ([#42856](https://github.com/anomalyco/opencode/issues/42856), [#51285](https://github.com/anomalyco/opencode/issues/51285)) | Medium-High — multi-provider impact |
| **Error Observability** | Windows startup beeps with no UI ([#41194](https://github.com/anomalyco/opencode/issues/41194)); MCP errors opaque ([#52418](https://github.com/anomalyco/opencode/pull/52418)); Android PWA notifications broken ([#49961](https://github.com/anomalyco/opencode/issues/49961)) | Medium — affects debugging velocity |
| **Plugin/Extension Gaps** | 5 core session capabilities unreachable ([#49389](https://github.com/anomalyco/opencode/issues/49389)); AVIF images silently dropped ([#41722](https://github.com/anomalyco/opencode/issues/41722)); tool name normalization collisions ([#52420](https://github.com/anomalyco/opencode/issues/52420)) | Medium — blocks ecosystem growth |

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-10-01

## Today's Highlights
Pi v0.99.2 ships a significant MCP usability improvement: servers with default `codemode` exposure no longer clutter the codemode description or block the first prompt—they now appear only in a compact system-prompt section while scripts discover them via `searchTools()`/`describeName`. Meanwhile, the community is actively tackling a cluster of TUI rendering regressions (full-screen redraw storms, color bleeding) and MCP OAuth edge cases (empty scope handling, Atlassian integration), with 42 issues and 22 PRs updated in the last 24 hours.

## Releases
### v0.99.2
- **MCP servers stay out of the way**: Default `codemode` exposure servers are removed from the codemode description and no longer block the initial prompt. They appear in a short system-prompt section; scripts find their tools via `searchTools()` and `describeName()`.  
🔗 [Release v0.99.2](https://github.com/earendil-works/pi/releases/tag/v0.99.2)

## Hot Issues
| # | Title | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#10031](https://github.com/earendil-works/pi/issues/10031) | Pi sporadically stuck in "Working..." when thinking stopped with ESC | High-impact UX regression since ~v0.84; forces hard restart (`Ctrl+C` + `pi -c`). Affects multiple machines. | 18 comments, 2 👍 — active discussion on root cause (stream cancellation vs. TUI state). |
| [#9566](https://github.com/earendil-works/pi/issues/9566) | Context size defaults to 128k despite real size available | Provider config bug: matching model IDs in `models.json` fall back to hard-coded 128k context/cost/maxTokens. | 9 comments, 4 👍 — impacts cost estimation and truncation behavior. |
| [#9255](https://github.com/earendil-works/pi/issues/9255) | TuiMainScreen full-screen redraw storm on long transcripts | Performance regression: live streaming thinking tail triggers full render every frame when transcript > viewport. | 8 comments, 1 👍 — “violent jumps / doubled text” reported; core rendering path. |
| [#10162](https://github.com/earendil-works/pi/issues/10162) | Too many input images stop the agent task | Long-running agent sessions (PR babysitting, QA) fail when image count exceeds implicit limit. | 6 comments — blocks “indefinite” agent workflows; related to auto-compaction. |
| [#8331](https://github.com/earendil-works/pi/issues/8331) | Agent loop hangs forever when provider stream stalls mid-response | SSE stream stall (e.g., Anthropic 529) leaves `for await` in `streamAssistantResponse` hanging indefinitely. | 6 comments, 2 👍 — needs timeout/retry logic in agent loop. |
| [#10172](https://github.com/earendil-works/pi/issues/10172) | MCP OAuth: support `authServerMetadataUrl` & `skipIssuerMetadataValidation` | Required for enterprise IdPs (e.g., custom OIDC) where well-known endpoint differs or issuer validation must be skipped. | 5 comments — closed via PR #10242. |
| [#10186](https://github.com/earendil-works/pi/issues/10186) | Add OSC-8 clickable field for MCP auth links | Long OAuth URLs wrap in terminal; OSC-8 makes them clickable like provider `/login`. | 4 comments, 2 👍 — UX polish for remote/headless use. |
| [#10257](https://github.com/earendil-works/pi/issues/10257) | Switching to Codex fails with custom-tool ID error (`fc_` vs `ctc`) | Mid-chat model switch (Muse → GPT-6.1 Sol) breaks because earlier `codemode` calls replayed as `custom_tool_call` with `fc_` IDs. | 4 comments — migration logic gap between tool-call formats. |
| [#9954](https://github.com/earendil-works/pi/issues/9954) | kimi-coding models fail with ENOENT on Anthropic credentials | Anthropic SDK ambient credential probing looks for `~/.config/anthropic/credentials/default.json` even for non-Anthropic providers. | 4 comments, 1 👍 — SDK initialization side-effect. |
| [#10251](https://github.com/earendil-works/pi/issues/10251) | codemode only mode: built-in read cannot expose image contents | With `codemode.mode: "only"`, `tools.read()` returns placeholder text; images never reach provider. | 3 comments — breaks image-input workflows in code-only mode. |

## Key PR Progress
| # | Title | Type | Status | Summary |
|---|-------|------|--------|---------|
| [#10275](https://github.com/earendil-works/pi/pull/10275) | feat(ai): add Kenari as an API-key provider | Feature | Closed | New built-in provider `kenari` (`https://kenari.id/v1`), `kn-` key or `KENARI_API_KEY`, models from `/v1/models` (tool_call=true only). |
| [#10197](https://github.com/earendil-works/pi/pull/10197) | feat: unify package artifact validation | Infra | Open | Single manifest-backed, content-addressed artifact set; eliminates workspace resolution hiding undeclared deps. |
| [#10242](https://github.com/earendil-works/pi/pull/10242) | Anthropic provider: use SDK's workload identity federation env vars | Fix | Closed | Respects `ANTHROPIC_FEDERATION_RULE_ID`, `ORGANIZATION_ID`, `SERVICE_ACCOUNT_ID`, `IDENTITY_TOKEN_FILE` when no key/token present. |
| [#10194](https://github.com/earendil-works/pi/pull/10194) | feat(ai): add copy-code login to Anthropic OAuth | Feature | Closed | Code-based flow (no localhost redirect) for remote/headless Pi; uses `http://localhost:35435/callback` with `code` param. |
| [#10218](https://github.com/earendil-works/pi/pull/10218) | fix(tui): complete slash commands after leading whitespace | Fix | Closed | `' /model'` now completes correctly instead of triggering path completion (`' //bin/'`). |
| [#10232](https://github.com/earendil-works/pi/pull/10232) | feat(durable): make SQLite storage asynchronous | Refactor | Closed | Portable SQLite facade async; adapters run outside harness runtime; `run`/`get`/`all` API with per-connection statement cache. |
| [#10261](https://github.com/earendil-works/pi/pull/10261) | feat(coding-agent): add prompt template documentation eval | Feature | Open | Live doc-lift cases for project/user `/current-time` templates; multi-case Vitest selection; strengthened audit evidence. |
| [#10241](https://github.com/earendil-works/pi/pull/10241) | fix(coding-agent): disambiguate MCP codemode tool names | Fix | Closed | Tracks name ownership by codemode identifier; hash-suffix disambiguates `read-file` vs `read_file` → `mcp__docs__read_file`. |
| [#10246](https://github.com/earendil-works/pi/pull/10246) | feat(coding-agent): reload additions to defaultTools | Feature | Closed | Runtime reload picks up newly selected default tools without restart; preserves explicit startup options. |
| [#9714](https://github.com/earendil-works/pi/pull/9714) | feat(ai): support Azure Foundry Chat Completions deployments | Feature | Open | Azure provider now supports Chat Completions (e.g., DeepSeek V4 Pro) alongside Responses API. |

## Feature Request Trends
1. **MCP ecosystem maturity** — OAuth metadata customization (#10172), OSC-8 links (#10186), `.mcp.json` interoperability (#10281, #10277), server hiding/overrides (#10277), collision-free tool naming (#10239/#10241).
2. **Provider flexibility** — Run-scoped endpoint overrides (`--base-url`, `--api-type` #10233), programmatic provider config for embedding (#10235), Azure Foundry Chat Completions (#9714), Kenari provider (#10275).
3. **Agent durability** — Stream stall timeouts (#8331), retryable “at capacity” errors (#10278), image-input limits for long runs (#10162), session fork/migration correctness (#10224).
4. **TUI rendering stability** — Redraw storm fix (#9255), color bleeding (#10169), extension console isolation (#10050), slash-command completion (#10218).
5. **Model configuration fidelity** — Correct context size from provider (#9566), template-default thinking control (#10262), reasoning content preservation (#10262), inline JSON Schema refs for Nemotron/Qwen (#10270).

## Developer Pain Points
- **TUI instability on long sessions**: Redraw storms (#9255), color bleeding (#10169), and ESC-handling hangs (#10031) make extended coding sessions fragile.
- **MCP OAuth friction**: Empty scope rejection (#10266, #10219), missing metadata URL/issuer skip (#10172), and non-clickable auth links (#10186) block enterprise adoption.
- **Model-switching breakage**: Custom-tool ID mismatch when switching providers mid-chat (#10257), context size fallback (#9566), and reasoning-content loss (#10262) erode trust in multi-model workflows.
- **Agent loop brittleness**: Unbounded SSE waits (#8331), missing retry on “at capacity” (#10278), and image-count limits (#10162) prevent true “set-and-forget” automation.
- **Extension/TUI boundary leaks**: Extension `console.*` writes corrupt differential renderer frames (#10050); no isolation mechanism exists yet.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-10-01

---

## 1. Today's Highlights

The project shipped a nightly release (v0.24.7-nightly) fixing Code Mode text alignment with lazy tool discovery and a permissions regression. Meanwhile, the **managed-agent** workstream dominates development: four PRs landed offline recovery bundles (W1b), durable Hosted Hooks (H2), file history/undo, and private ACP child hosting (M2). A **P1 security bug** (#13106) was filed where `cd` command redirects bypass Write deny checks — a silent privilege escalation vector.

---

## 2. Releases

**v0.24.7-nightly.20260930.57e720bc97**  
- `fix(core)`: Align Code Mode text with lazy tool discovery ([#12990](https://github.com/QwenLM/qwen-code/pull/12990))  
- `fix(permissions)`: Honor approved state (commit 57e720b)

> Nightly only; no stable release in the last 24h.

---

## 3. Hot Issues

| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#13106](https://github.com/QwenLM/qwen-code/issues/13106) | **P1 Security**: `cd` segments silently drop redirect targets from Write deny checks | Compound commands like `cd somedir > .qwen/settings.json` truncate files without triggering permission checks — silent data loss / privilege escalation. | 5 comments, P1/security label, created yesterday |
| [#12867](https://github.com/QwenLM/qwen-code/issues/12867) | **Feat**: Managed-agent Stage D — durable lifecycle, Turns, Actions, AgentDefinition | Core architecture for durable, multi-agent sessions; defines API contracts for long-running workflows. | 12 comments, P2, roadmap/multi-agent, needs-discussion |
| [#13078](https://github.com/QwenLM/qwen-code/issues/13078) | **CI/CD**: Daily dependency CVE audit failed | Recurring supply-chain risk; blocks confidence in dependency freshness. | Bot-reported, 3 comments |
| [#12980](https://github.com/QwenLM/qwen-code/issues/12980) | **Bug (CLOSED)**: Web-shell reference chip attaches to earlier plain text | UX regression where inline references hijack prior text on submit. | 4 comments, fixed via PR |
| [#8837](https://github.com/QwenLM/qwen-code/issues/8837) | **Bug (CLOSED)**: ACP scheduled prompts missing from restored transcripts | Session restore loses cron-fired prompts — breaks audit/replay for automated workflows. | 3 comments, fixed via #8838 |
| [#11954](https://github.com/QwenLM/qwen-code/issues/11954) | Fleet Shepherd Dashboard (auto-maintained) | Fleet health telemetry — zero dispatches/cleanups this tick. | Bot-maintained, 0 comments |

> Only 6 issues updated in 24h; the security bug (#13106) and Stage D epic (#12867) are the clear priorities.

---

## 4. Key PR Progress

| # | Title | Type | Impact |
|---|-------|------|--------|
| [#13138](https://github.com/QwenLM/qwen-code/pull/13138) | **Feat**: Offline W1b recovery bundles | Managed-agent | Complete recovery evidence workflow: capture fixed recovery points, export journal/resource closures, compare workspace/backup against storage. |
| [#13129](https://github.com/QwenLM/qwen-code/pull/13129) | **Feat**: Durable Hosted Hooks (H2) | Managed-agent | Hook catalogs, fixed occurrence plans, once-at-intent execution, dynamic registration, native dispatch, original-owner recovery. |
| [#13110](https://github.com/QwenLM/qwen-code/pull/13110) | **Feat**: Hosted file history & undo | Managed-agent | Preserves pre-dispatch file contents; enables rewind to prompt-start state after detach/load. |
| [#13131](https://github.com/QwenLM/qwen-code/pull/13131) | **Feat**: Host Managed sessions in private ACP child (M2) | Managed-agent | Ordinary `qwen --acp` child in private Managed mode + daemon channel factory; no production caller yet. |
| [#13037](https://github.com/QwenLM/qwen-code/pull/13037) | **Feat**: Project durable tool results to WebShell | WebShell/Managed-agent | Commits Hosted Shell receipts → durable public tool results; authenticated stdout/stderr metadata + byte APIs; bounded paging/streaming downloads. |
| [#13107](https://github.com/QwenLM/qwen-code/pull/13107) | **Feat**: Show/answer Hosted tool approvals in Managed panel | WebShell | Exposes pending Hosted approvals to Session creator; unblocks D6b (merged #13101). |
| [#12943](https://github.com/QwenLM/qwen-code/pull/12943) | **Feat**: Adaptive navigation rail & unified Live settings | WebShell | Home-only: 300px session column; multi-entry: 56px rail + 300px secondary; collapsible rail. |
| [#13033](https://github.com/QwenLM/qwen-code/pull/13033) | **Feat**: Defer agent/goal declarations by default | Core | `agent`, `list_agents`, `get_goal`, `update_goal`, `propose_goal` discoverable on demand; no `tools.eager` needed. |
| [#12531](https://github.com/QwenLM/qwen-code/pull/12531) | **Fix**: Stop MCP server rules authorizing colliding server | Core/Security | Patterns compared literally against registered provider-safe names; eliminates sanitization collision. |
| [#11959](https://github.com/QwenLM/qwen-code/pull/11959) | **Feat**: Resolve model limits/modalities from models.dev catalog | Core | Ships trimmed snapshot; 24h cached background refresh with ETag; 16 MiB upstream limit. |

> 9/10 highlighted PRs target **managed-agent** or **WebShell** — the two active product surfaces.

---

## 5. Feature Request Trends

1. **Durable, multi-agent session infrastructure** — Stage D (#12867) + M2/H2/W1b PRs show a concerted push for persistent, recoverable, auditable agent lifecycles.
2. **WebShell as first-class managed-agent UI** — Adaptive chrome (#12943), tool approvals (#13107), durable result projection (#13037) converge on a hosted IDE experience.
3. **ACP protocol hardening** — Transcript fidelity (#12585, #8838), scheduled prompt persistence, embedded resource replay.
4. **Lazy/deferred tooling by default** — #13033, #13020 move agent/goal/monitor/LSP behind discovery gates to reduce prompt bloat.
5. **Supply-chain & CI resilience** — Pinned tool fallbacks (#12650), CVE audit monitoring (#13078), exact-version updates (#11486).

---

## 6. Developer Pain Points

| Pain Point | Evidence |
|------------|----------|
| **Silent permission bypasses** | #13106: `cd > file` truncates without Write check; #12531: MCP pattern sanitization caused cross-server auth. |
| **Session restore fidelity** | #8837 (scheduled prompts lost), #12585 (embedded resources not replayed), #13138 (recovery bundles needed). |
| **CI flakiness from runner images** | #12650: stale `yamllint` in self-hosted runners breaks main; #13094: GitHub-hosted lanes misclassified for latency gates. |
| **WebShell UX regressions** | #12980 (reference chip misattachment), #9305 (VP content top-aligned leaving composer gap). |
| **Tool discovery mismatch** | #12990 (Code Mode text vs. lazy discovery), #13020 (deferred tools only show first description line). |
| **Dependency audit reliability** | #13078: scheduled CVE audit fails intermittently (npm endpoint / new vulns). |

---

*Generated from GitHub data (last 24h). All links point to QwenLM/qwen-code.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-10-01

## 1. Today's Highlights
The project closed **10+ PRs** in a single day, landing a major batch of reliability fixes from contributor `asto18089` (MCP tool budgets, JS child cleanup, vision timeouts, idle watchdog) and completing **FEAT-026** session-group extraction — a milestone for the EPIC-005 crate decomposition. Simultaneously, **7 new issues** surfaced around retry/timeout observability, stall recovery architecture, and session persistence bugs, plus a community call to form a Chinese localization group.

## 2. Releases
No new releases in the last 24h. The `v0.10.1` integration wave (`wave/0.10.1-next`, PR #6782) is actively merging qualified batches.

---

## 3. Hot Issues (10 Noteworthy)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#5316](https://github.com/Hmbown/Codewhale/issues/5316) | **EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella)** | Tracks the full crate extraction effort; FEAT-026 (session group) now complete via PR #6793. 30 comments indicate deep architectural discussion. | High — umbrella epic, blocked on hosted CI verification |
| [#6700](https://github.com/Hmbown/Codewhale/issues/6700) | **Expose stream retry budgets & transport timeouts as configuration** | Hardcoded `const` timeouts prevent operators on flaky/proxied networks from tuning behavior without patching the binary. | 2 comments — infrastructure pain point |
| [#6795](https://github.com/Hmbown/Codewhale/issues/6795) | **Inline provider error frames bypass every retry budget** | Providers like OpenRouter return HTTP 200 with chunk-level error frames; current retry logic doesn’t catch them, killing the turn immediately. | 1 comment — silent reliability hole |
| [#6800](https://github.com/Hmbown/Codewhale/issues/6800) | **Stall recovery is UI-side only** | UI resets but engine keeps the wedged turn; next send refused for 60s, transcript stops accepting input. Engine/UI state divergence. | New — architectural bug |
| [#6796](https://github.com/Hmbown/Codewhale/issues/6796) | **Retry attempts are invisible in transcript** | Operators cannot distinguish “retrying & will recover” vs “retrying & will exhaust” vs “hard failure”. Zero observability for retries. | New — observability gap |
| [#6803](https://github.com/Hmbown/Codewhale/issues/6803) | **Failed tool call leaves no output → thread unsendable after restart** | Failed calls persist with `status: "failed"` but `tool_result_for: null`; on runtime restart the thread cannot be continued. Data integrity issue. | New — session persistence bug |
| [#6804](https://github.com/Hmbown/Codewhale/issues/6804) | **Call to Action: Form a Chinese Localization Group** | Maintainer seeks volunteers to translate/sync docs; AI translation quality insufficient. Community-driven i18n effort. | New — community building |
| [#6650](https://github.com/Hmbown/Codewhale/issues/6650) | **Ctrl+T thinking-intensity shortcut cycles abnormally** | Pressing 3× fails to switch; 4th press works. UX regression in TUI key handling. | 1 comment — UX polish |
| [#6801](https://github.com/Hmbown/Codewhale/issues/6801) | **Request maintainer sign-off for optional API Route provider** | API Route maintainer wants to add built-in provider entry; requires CONTRIBUTING.md sign-off. Extensibility signal. | New — provider ecosystem |
| [#6792](https://github.com/Hmbown/Codewhale/issues/6792) | **FEAT-026: Finish session command shapes & extraction boundary** *(CLOSED)* | Final slice for session-group crate extraction; `/structcopy` decoupled from concrete App state. Enables independent crate publishing. | 0 comments — milestone delivered |

---

## 4. Key PR Progress (10 Important)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#6741](https://github.com/Hmbown/Codewhale/pull/6741) / [#6802](https://github.com/Hmbown/Codewhale/pull/6802) | **Fix** | **MCP `tools/call` gets dedicated request budget** — removes stacked 120s/60s timeouts that killed legitimate long-running tools (builds, scrapes, test suites). Landed via integration branch after fork push blocked. |
| [#6799](https://github.com/Hmbown/Codewhale/pull/6799) | **Batch Landing** | Lands **7 PRs from `asto18089`** (#6736–6744) as a single integration batch: search errors, context labels, workflow scouts, idle watchdog, vision timeouts, JS child cleanup, engine submission IDs. |
| [#6743](https://github.com/Hmbown/Codewhale/pull/6743) | **Fix** | **Kills JS execution child process on timeout** — previously `timeout()` dropped the future but left Node running detached (CPU, files, pipes leaked). Now properly terminates child. |
| [#6742](https://github.com/Hmbown/Codewhale/pull/6742) | **Fix** | **Bounds vision request connects & wraps in 30-min envelope** — replaces single 120s client timeout with per-phase limits; prevents killing slow-but-healthy large-image uploads/generations. |
| [#6740](https://github.com/Hmbown/Codewhale/pull/6740) | **Fix** | **Idle watchdog pauses during tool calls** — journal only records tool start/end, so long silent executions (builds, MCP) falsely triggered 120s idle deadline. Now patient while tools run. |
| [#6793](https://github.com/Hmbown/Codewhale/pull/6793) | **Refactor** | **Completes FEAT-026 session-group shapes** — all 17 commands (including `/structcopy`) use session group; extraction boundary ready. Awaits hosted CI verification. |
| [#6805](https://github.com/Hmbown/Codewhale/pull/6805) | **Feature** | **Plugins: reviewed OAuth AI providers** — bundles can declare named OpenAI-compatible providers + public OAuth clients via `extensions.net.codewhale.providers`; consumed by existing routing/catalog/streaming. |
| [#6771](https://github.com/Hmbown/Codewhale/pull/6771) | **Fix** | **Runtime API repairs** — preserves file modes/umask on write, advertises PUT in CORS preflight, restores exact prior config on rejected provider switch, lists all memory entries. |
| [#6759](https://github.com/Hmbown/Codewhale/pull/6759) | **Fix** | **Shell job retention & output deltas** — finished jobs stay available, polling returns only new bytes, non-interactive commands receive EOF, cancellation/timeout cleans child processes. |
| [#6782](https://github.com/Hmbown/Codewhale/pull/6782) | **Integration** | **v0.10.1 wave** — fast-forward integrating 5 qualified batches (UI views, durability, web i18n, runtime/community pages onto dictionary spine, etc.). Release track active. |

---

## 5. Feature Request Trends
1. **Configurable resilience knobs** — Operators need runtime control over retry budgets, connect/read timeouts, and stall thresholds without recompiling (#6700, #6795, #6800).
2. **Provider extensibility surface** — First-class support for third-party OAuth providers (API Route, OpenRouter) and plugin-declared providers (#6801, #6805).
3. **Observability & debuggability** — Visible retry attempts, stall-recovery telemetry, actionable error messages when all backends fail (#6796, #6736, #6800).
4. **Internationalization infrastructure** — Dictionary-spine migration for web pages (#6797, #6794) + community call for sustained Chinese localization (#6804).
5. **Crate-level modularity** — EPIC-005 decomposition continues; session group extracted, more command crates to follow (#5316, #6793).

---

## 6. Developer Pain Points (Recurring)
- **Hardcoded timeouts killing valid workloads** — MCP tools, vision uploads, JS execution, and idle watchdog all had fixed budgets that terminated healthy long-running operations (#6741, #6742, #6743, #6740).
- **Invisible failure modes** — Retries, stall recovery, and provider error frames happen silently; no transcript trace, no UI indication, no correlation IDs (#6795, #6796, #6800, #6744).
- **Engine/UI state divergence** — UI-side recovery doesn’t notify engine; next user input rejected, transcript freezes (#6800).
- **Session persistence fragility** — Failed tool calls leave corrupt session items that break restart continuity (#6803).
- **Resource leaks on timeout** — Child processes (Node, shell) not terminated when parent futures cancel (#6743, #6759).
- **TUI key-handling regressions** — Shortcut cycling logic broken for thinking-intensity toggle (#6650).

---

*Data sourced from `Hmbown/Codewhale` GitHub activity (issues/PRs updated 2026-09-30 → 2026-10-01).*

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*