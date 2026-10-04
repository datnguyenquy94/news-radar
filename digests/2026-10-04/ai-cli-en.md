# AI CLI Tools Community Digest 2026-10-04

> Generated: 2026-10-04 05:31 UTC | Tools covered: 10

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

---

# AI CLI Tools Ecosystem — Cross-Tool Comparison Report (2026-10-04)

---

## 1. Ecosystem Overview

The AI CLI landscape is bifurcating into **mature, enterprise-grade tooling** (Claude Code, Codex, Copilot CLI, Gemini CLI) and **rapidly iterating challengers** (OpenCode, Pi, Qwen Code, DeepSeek TUI). All active projects shipped fixes or features in the last 24 hours except Kimi and Grok. A clear pattern emerges: **stability and platform parity** (Windows, macOS, Linux) dominate immediate roadmaps, while **session persistence, context management, and MCP/ACP interoperability** represent the next competitive frontier. Release cadences range from daily alphas (Codex, Qwen) to weekly patches (Claude Code, Pi), with most teams prioritizing regression fixes over new capabilities.

---

## 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Updated (24h) | Release Status | Critical Regressions |
|------|---------------------|-------------------|----------------|---------------------|
| **Claude Code** | 10+ hot issues | 3 PRs | v2.1.289 (stable) | Linux input freeze (2.1.282+), idle compaction |
| **OpenAI Codex** | 10+ hot issues | 21 PRs merged | 2× alpha (0.162.0-alpha.10/11) | VS Code message loss, Windows DOT/Computer Use gaps |
| **Gemini CLI** | 10 hot issues | 10 notable PRs | None | Subagent MAX_TURNS misreport, generalist agent hang |
| **GitHub Copilot CLI** | 10 hot issues | 0 PRs | None | macOS `.mcp-writer.binding` stale file breaks all sessions |
| **Kimi Code CLI** | 0 | 0 | None | — |
| **OpenCode** | 9 active | 50 PRs | None | Log rotation broken, provider stream silent death |
| **Pi** | 10 hot issues | 10 key PRs | v1.0.1 + v1.0.2 (patch) | TUI full redraw storm, context accounting inflation |
| **Qwen Code** | 10 noteworthy | 10 important PRs | Nightly v0.24.7 | Managed-agent takeover idempotency, transcript corruption |
| **DeepSeek TUI** | 4 hot issues | 9 PRs | None | Windows `node.exe` kill orphan, session restore failure |
| **Grok Build** | 0 | 0 | None | — |

**Activity Leaders**: OpenCode (50 PRs), Codex (21 PRs merged), Pi (2 releases + 10 PRs), Qwen (10 PRs).  
**Stability Concerns**: Claude Code (Linux regression), Copilot CLI (macOS blocker), Gemini (subagent reliability), DeepSeek (Windows process hygiene).

---

## 3. Shared Feature Directions

| Requirement | Tools Affected | Specific Community Needs |
|-------------|----------------|--------------------------|
| **Session persistence & portability** | Claude Code (#31992), Copilot CLI (#5041), OpenCode (#6152), Qwen (#13301), DeepSeek (#6418) | Cross-device resume, session fork/compact reliability, context viewer (138 👍 on OpenCode) |
| **MCP/ACP interoperability & hardening** | Codex (#39783, #50781), Copilot CLI (#5044, #5047, #5049), OpenCode (#52237), Pi (#10247), DeepSeek (#6805) | Tool catalog stability, retry logic, OAuth/Entra ID, plugin-declared providers, case-insensitive server names |
| **Windows parity** | Codex (6+ Windows issues), Copilot CLI (#5027, #5049), Pi (#9262, #29510), DeepSeek (#6827), Claude Code (#94478) | DOT/Computer Use, sandbox DNS, process hygiene, glob separators, kernel leak |
| **Context/token management** | Gemini (4 perf PRs: O(n²)→O(n)), Pi (#9807, #10287), Qwen (#13319), OpenCode (#52702), Codex (#50540) | Incremental rendering, accurate context accounting, lazy tool discovery, compaction reliability |
| **Model behavior transparency** | Claude Code (#98679), Codex (#47041), Copilot CLI (#5042), Pi (#10445), Qwen (#13033) | Regression detection, routing visibility, cache-control enforcement, lazy discovery defaults |
| **Terminal/TUI correctness** | Pi (#9255, #9807), DeepSeek (#6829, #6830), Codex (#45163), Gemini (#29517), OpenCode (#21063) | Grapheme-cluster wrapping, incremental diffing, theme-aware palette, keyboard nav parity |

---

## 4. Differentiation Analysis

| Dimension | Enterprise/Platform Tools | Challenger/Community Tools |
|-----------|---------------------------|----------------------------|
| **Primary Focus** | Reliability, permissions, enterprise manageability, IDE integration | Algorithmic performance, architectural experimentation, extensibility |
| **Target Users** | Professional developers, teams, managed fleets | Power users, early adopters, plugin authors, self-hosters |
| **Technical Approach** | Monolithic binaries, proprietary backends, controlled releases | Modular crates, open model routing, nightly/alpha channels, Nix flakes |
| **Permission Model** | Fine-grained, plugin-tightenable (Claude #99137), assisted approval (Copilot #5047) | Simpler allow/deny, per-call policy enforcement (DeepSeek #6820) |
| **Session Architecture** | Cloud-threaded, server-mediated (Codex, Copilot, Qwen managed) | Local-first, file-based, user-controlled (OpenCode, Pi, Gemini) |
| **Extension Ecosystem** | Official marketplaces, OAuth providers (Codex #6805), managed extensions (Qwen #12183) | Community hooks, codemodes, project-scoped extensions (Pi v1.0.1), plugin Shapes (DeepSeek #6832) |

**Key Differentiators**:
- **Claude Code**: Permission granularity + enterprise manageability
- **Codex**: Windows daemon hardening + VS Code extension depth
- **Gemini CLI**: Algorithmic perf sprint (4 O(n) PRs in one day)
- **Copilot CLI**: ACP mode as integration layer for external clients
- **OpenCode**: Highest community engagement (138 👍 on context viewer), 50 PRs/day velocity
- **Pi**: Per-thinking-level sampling, Nix reproducibility, XDG compliance demand
- **Qwen Code**: Managed-agent runtime with broker auth, H3 background runtime
- **DeepSeek TUI**: Engine convergence (single Rust engine), command portability via Shapes

---

## 5. Community Momentum & Maturity

| Tier | Tools | Signals |
|------|-------|---------|
| **High Momentum / Maturing** | **Claude Code**, **OpenAI Codex**, **GitHub Copilot CLI** | Daily/weekly stable releases, 100+ 👍 issues, enterprise adoption blockers tracked, dedicated security PRs |
| **High Velocity / Iterating** | **OpenCode**, **Pi**, **Qwen Code**, **Gemini CLI** | 10–50 PRs/day, architectural refactors (Gemini perf, Pi TUI, Qwen managed runtime), nightly/alpha cadence |
| **Early / Niche** | **DeepSeek TUI**, **Kimi Code**, **Grok Build** | DeepSeek: active engine convergence; Kimi/Grok: no 24h activity |

**Community Health Indicators**:
- **OpenCode** leads in raw contributor activity (50 PRs) and top-voted feature (138 👍).
- **Codex** shows strongest team velocity (21 PRs merged in 24h, 2 alphas).
- **Claude Code** has deepest enterprise friction (permissions, Windows leak, macOS TCC).
- **Pi** uniquely ships **two patch releases in 24h** with substantive features (Nix, sampling params).
- **Gemini CLI** demonstrates focused algorithmic improvement sprint (4 linearization PRs).

---

## 6. Trend Signals for Technical Decision-Makers

| Trend | Evidence | Strategic Implication |
|-------|----------|----------------------|
| **Local-first session ownership gaining ground** | OpenCode context viewer (138 👍), Pi XDG demand (62 👍), Copilot macOS binding bug, Qwen workspace persistence | Teams wary of cloud-thread lock-in; invest in portable session formats |
| **MCP → ACP evolution** | Copilot CLI 4 new ACP issues, Codex notification bleed fix, DeepSeek plugin OAuth providers, OpenCode MCP retry gap | ACP becoming the integration standard; MCP servers need hardening for production |
| **Windows is the parity battleground** | 6+ Codex issues, Copilot sandbox DNS, DeepSeek process hygiene, Pi glob separators, Claude kernel leak | Windows support quality now a key differentiator for enterprise adoption |
| **Context window honesty** | Gemini 36k baseline tokens, Pi context inflation post-retry, Codex summary thread leaks, OpenCode image-count classification | Token accounting accuracy becoming a trust requirement; expect standardized APIs |
| **Model routing transparency** | Copilot HydraFusion mid-session swap, Claude Opus 5.5 regression, Codex GPT-5.6 false positives, Pi OpenRouter cache miss | Silent model switches erode trust; teams need routing observability and pinning |
| **Performance at scale = incremental algorithms** | Gemini 4× O(n) PRs, Pi full redraw storm, DeepSeek grapheme wrapping, OpenCode ripgrep semaphore | O(n²) context handling is a scaling ceiling; incremental rendering/diffing is table stakes |

---

**Bottom Line**: The ecosystem is consolidating around **three pillars** — **session durability**, **cross-platform reliability**, and **interoperable agent protocols (ACP/MCP)**. Tools solving these at the architectural level (OpenCode's local-first, Pi's modular crate design, Qwen's managed runtime, DeepSeek's engine convergence) are building sustainable differentiation. Enterprise buyers should weight **Windows maturity** and **permission model granularity** heavily; power users should watch **context management UX** and **extension ergonomics**.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-10-04 | Source: anthropics/skills**

---

## 1. Top Skills Ranking (Most-Discussed PRs)

Based on recent activity velocity, issue linkage, and community engagement signals:

| Rank | Skill | Functionality | Discussion Highlights | Status |
|------|-------|---------------|----------------------|--------|
| 1 | **[skill-creator](https://github.com/anthropics/skills/pull/1298)** | Meta-skill for creating, testing, and packaging new Skills; includes trigger evaluation, benchmarking, and packaging tooling | **Most active maintenance target**: 3 concurrent PRs (#1298, #1681, #1383) fixing Windows trigger eval failures, benchmark layout mismatches, silent failures, and XSS in eval-viewer. Core infrastructure for the entire ecosystem. | 🟢 Open (active) |
| 2 | **[claude-api](https://github.com/anthropics/skills/pull/1607)** | Official skill for interacting with Anthropic API; manages model IDs, tool use concepts, and academy guides | **High-impact fixes**: Retired model IDs cleanup (#1607), dead URL replacement (#1730), and **critical 156k token context explosion** (Issue #1487) blocking adoption. | 🟢 Open (active) |
| 3 | **[mcp-builder](https://github.com/anthropics/skills/pull/1742)** | Generates Model Context Protocol servers from specifications; handles connections, transport, and evaluation | **Protocol compatibility crisis**: MCP 2.0 breaking changes (streamable_http_client rename, custom headers) + evaluation harness scoring 0/N against real servers (Issue #1390). | 🟢 Open (active) |
| 4 | **[docx](https://github.com/anthropics/skills/pull/1792)** | LibreOffice-based DOCX manipulation: accept changes, convert, template fill, comment detection | **Reliability hardening**: Timeout error handling fixes, output verification (PR #1792), orphaned comment detection (PR #1734). Production hardening phase. | 🟢 Open (active) |
| 5 | **[web-artifacts-builder](https://github.com/anthropics/skills/issues/1362)** | Bundles self-contained HTML/JS/CSS artifacts with inlined fonts, stripped favicons, pnpm 10+ compatibility | **Toolchain breakage**: pnpm ≥10.1 `ERR_PNPM_IGNORED_BUILDS` hard blocker, stale favicon stripping, fonts not inlined. Blocks artifact distribution. | 🟡 Open (blocked) |
| 6 | **[proofcore-contract-auditor](https://github.com/anthropics/skills/pull/1771)** | Web3 smart contract auditor: static analysis (Solidity/Rust) + cryptographic audit proofs anchored on TON blockchain via ProofCore | **New domain entry**: First Web3/security-focused skill in collection. Zero-storage Merkle protocol integration. Novel trust-minimized audit trail. | 🟢 Open (new) |
| 7 | **[md2video-audio](https://github.com/anthropics/skills/pull/1703)** | Zero-cost Markdown → MP4 video with human-like voiceovers via Marp + TTS; presentation automation | **Content creation workflow**: Direct Markdown-to-video pipeline. Targets documentation-to-training conversion use case. | 🟢 Open (new) |
| 8 | **[blast-radius](https://github.com/anthropics/skills/pull/1776)** | Pre-execution safety checklist for bulk/destructive operations: classify impact, require confirmation, archive before delete | **Operational safety pattern**: Addresses "query right about rows, wrong about world" gap. Checklist-driven confirmation for irreversible actions. | 🟢 Open (new) |

---

## 2. Community Demand Trends (From Issues)

| Trend | Evidence (Issues) | Demand Signal |
|-------|-------------------|---------------|
| **Security & Trust Boundaries** | [#492](https://github.com/anthropics/skills/issues/492) (43 comments, 👍2): Community skills impersonating `anthropic/` namespace; [#1394](https://github.com/anthropics/skills/issues/1394) (4 comments, 👍2): XSS in skill-creator eval-viewer | **Highest engagement** — Users demand namespace isolation, supply-chain verification, and sandboxed execution |
| **Organizational Skill Sharing** | [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 👍8): Org-wide skill library vs. manual .skill file sharing via Slack | **Strong enterprise pull** — Teams need managed distribution, versioning, and access control |
| **Evaluation & Trigger Reliability** | [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 👍7): `run_eval.py` 0% trigger rate; [#1383](https://github.com/anthropics/skills/issues/1383) (4 comments): Silent benchmark failures, Windows trigger eval broken | **Developer productivity blocker** — Cannot trust skill activation or regression testing |
| **Context Window Management** | [#1487](https://github.com/anthropics/skills/issues/1487) (4 comments): claude-api injects 156k tokens in single call, exhausting context | **Architectural constraint** — Skills must be token-efficient; lazy loading / modular injection needed |
| **Document Processing & Fidelity** | [#1792](https://github.com/anthropics/skills/pull/1792), [#1734](https://github.com/anthropics/skills/pull/1734), [#486](https://github.com/anthropics/skills/pull/486): DOCX/ODT/PDF round-trip fidelity, comment preservation, timeout handling | **Enterprise document workflows** — High-fidelity Office format manipulation is a recurring theme |
| **Testing & Quality Gates** | [#822](https://github.com/anthropics/skills/pull/822): AWT (AI-powered E2E testing); [#723](https://github.com/anthropics/skills/pull/723): testing-patterns skill; [#1385](https://github.com/anthropics/skills/issues/1385): 3-gate reasoning quality pipeline | **Shift toward AI-verified quality** — Skills that test/validate other AI outputs gaining traction |

---

## 3. High-Potential Pending Skills (Active PRs Likely to Land)

| Skill | PR | Why It'll Land | Blockers |
|-------|-----|----------------|----------|
| **mcp-builder MCP 2.0 compat** | [#1742](https://github.com/anthropics/skills/pull/1742) | Fixes breaking upstream change; referenced by Issue #1668; minimal diff | None — straightforward migration |
| **docx timeout/verification fix** | [#1792](https://github.com/anthropics/skills/pull/1792) | Production hardening; clear error semantics; verifies output integrity | None — low-risk reliability fix |
| **claude-api retired models cleanup** | [#1607](https://github.com/anthropics/skills/pull/1607) | Fixes #1603; simple data correction; prevents user confusion | None — metadata update only |
| **skill-creator Windows trigger eval fix** | [#1298](https://github.com/anthropics/skills/pull/1298) | Addresses cross-platform CI failure; isolates worker probes; critical for contributors | Complex — requires Windows test infrastructure |
| **proofcore-contract-auditor** | [#1771](https://github.com/anthropics/skills/pull/1771) | Novel Web3 entry; external protocol integration (TON); strong use case | New domain — may need security review |
| **md2video-audio** | [#1703](https://github.com/anthropics/skills/pull/1703) | Complete pipeline; zero external cost (local TTS); high demo value | Dependency chain (Marp, ffmpeg) — CI validation needed |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for *trustworthy, production-hardened skill infrastructure* — specifically: secure namespace isolation, reliable trigger evaluation, token-efficient context management, and organizational distribution — rather than new domain-specific skills.**  

The top 3 issues by engagement (#492 security, #228 org sharing, #556 eval reliability) all target the **platform layer**, while new skill proposals (Web3, video, safety checklists) remain niche. Contributors are fixing the foundation before building upstairs.

---

## Quick Reference Links

- **Repository**: https://github.com/anthropics/skills
- **All PRs**: https://github.com/anthropics/skills/pulls
- **All Issues**: https://github.com/anthropics/skills/issues
- **Skill Creator (meta-skill)**: `skills/skill-creator/`
- **Bundled Skills Location**: `%LOCALAPPDATA%\Temp\claude\bundled-skills\<version>\`

---

# Claude Code Community Digest — 2026-10-04

---

## 1. Today's Highlights

- **v2.1.289 released** with fixes for nested shell command approval persistence, terminal freezing on malformed code blocks, and `Read` tool issues.
- **Critical regression in 2.1.282+**: Input box stops accepting keystrokes 0–90 seconds into sessions on Linux (#96931, 13 comments), blocking interactive work.
- **Idle compaction controversy**: Since 2.1.286, sessions are silently compacted before prompt cache expiry with no opt-out (#98747, 10 comments, 6 👍), discarding long-running context.

---

## 2. Releases

### v2.1.289
| Change | Impact |
|--------|--------|
| Fixed deny/ask rule on nested compound shell commands not holding over user-installed mod approvals on managed machines | Security/permissions fix for enterprise/managed environments |
| Fixed terminal freezing on short code blocks with many unclosed `<script>` tags or deeply nested `${` substitutions | Stability fix for edge-case rendering |
| Fixed `Read` den... | (truncated in source) |

---

## 3. Hot Issues (Top 10 by Noteworthiness)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#37951](https://github.com/anthropics/claude-code/issues/37951) | **Option to hide inline diffs for Edit/Write output** | High-demand UX control; diffs clutter conversation stream | 101 👍, 30 comments — top-voted open issue |
| [#96931](https://github.com/anthropics/claude-code/issues/96931) | **Input box stops accepting keystrokes in 2.1.282 after 0–90s (Linux)** | **Regression blocking all interactive use** on Linux since 2.1.282 | 13 comments, has repro, 2.1.281 works |
| [#31992](https://github.com/anthropics/claude-code/issues/31992) | **Cross-machine session resume (CLI→CLI handoff)** | Enables workflow continuity across devices; foundational for remote dev | 20 👍, 12 comments |
| [#98747](https://github.com/anthropics/claude-code/issues/98747) | **Idle compaction silently discards context; no opt-out, logged as "manual"** | Breaks long-running sessions; trust/transparency issue | 6 👍, 10 comments |
| [#94478](https://github.com/anthropics/claude-code/issues/94478) | **Desktop app spawns ~17 git processes/sec on Windows → ~6 GB/day kernel leak** | Severe resource leak; makes Windows desktop app unusable long-term | 9 comments, has repro |
| [#87424](https://github.com/anthropics/claude-code/issues/87424) | **Intermittent ECONNRESET on desktop CLI (macOS), no VPN/proxy** | Network reliability issue affecting both desktop and standalone CLI | 8 👍, 8 comments |
| [#72957](https://github.com/anthropics/claude-code/issues/72957) | **Write/Edit silently decode `\uXXXX` in file content, corrupting escape sequences (Linux)** | Data corruption bug; impossible to write literal Unicode escapes | 7 comments, has repro, reproduced label |
| [#83841](https://github.com/anthropics/claude-code/issues/83841) | **macOS 26: "claude.app would like to access data from other apps" re-prompts every session** | Persistent TCC prompt breaks flow on latest macOS | 6 👍, 7 comments |
| [#98679](https://github.com/anthropics/claude-code/issues/98679) | **Claude Opus 5.5 behavior shift 2026-10-01: 2× thinking, 1.6× output, worse judgment** | Model behavior regression observed across platforms, not just Code | 2 👍, 6 comments |
| [#99332](https://github.com/anthropics/claude-code/issues/99332) | **A11y: Virtualized transcript unmounts screen-reader content (root cause + workaround found)** | Accessibility blocker; virtualization breaks AT cursor tracking | 1 comment, root cause identified |

---

## 4. Key PR Progress

| # | PR | Summary | Status |
|---|----|---------|--------|
| [#99137](https://github.com/anthropics/claude-code/pull/99137) | **sec-default: plugins may tighten, never loosen, what holds over them** | Security hardening: user plugins can only restrict (deny/ask/pin), never relax permissions. No engine changes needed. | Open |
| [#99206](https://github.com/anthropics/claude-code/pull/99206) | **diff: docked pane starts at its header under engine's own head row** | UI fix: removes extra blank row in docked `/diff` view; aligns with engine row handling. | Open |
| [#81672](https://github.com/anthropics/claude-code/pull/81672) | **fix(hookify): make package import independent of install directory name** | Fixes marketplace installs where plugin dir ≠ `hookify`; resolves #69665, #81448. | Open |

> Only 3 PRs updated in last 24h — light contribution day.

---

## 5. Feature Request Trends

From the issue landscape, the strongest community pulls are:

| Theme | Representative Issues | Signal |
|-------|----------------------|--------|
| **Session persistence & portability** | Cross-machine resume (#31992), Projects: local sessions as threads (#99156) | 20+ 👍, multi-device workflow demand |
| **Permission/approval UX control** | Hide inline diffs (#37951), Default permission mode "skip all" (#98159), Plugin security defaults (#99137) | 100+ 👍 on diffs alone; enterprise/adoption blocker |
| **Model behavior transparency** | Opus 5.5 regression (#98679), modelPicker missing `opusplan` (#89690) | Growing concern over silent model changes |
| **Accessibility & terminal integration** | Virtualized transcript breaks screen readers (#99332), Ghostty duplicate Dock icons (#99140) | A11y + terminal emulator compatibility |
| **Remote/SSH workflow polish** | Attach terminal to remote session (#87190), SSH + local folder name collision (#99172) | Distributed dev ergonomics |

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Silent context loss** | Idle compaction (#98747), skill re-attachment failure after `/compact` (#94564) | High — trust erosion |
| **Input/terminal regressions** | Keystroke freeze 2.1.282+ (#96931), Ghostty Dock duplicates (#99140), TCC re-prompt (#83841) | High — blocks daily use |
| **Resource leaks on Windows** | 17 git processes/sec → 6 GB/day kernel pool leak (#94478) | Critical for Windows adopters |
| **Data corruption in tools** | `\uXXXX` silently decoded in Write/Edit (#72957) | Medium — subtle but destructive |
| **Network instability** | ECONNRESET on macOS desktop/CLI (#87424), MCP OAuth discovery fails (#96792) | Medium — intermittent but widespread |
| **Permission model opacity** | Script edited post-approval runs under same approval (#98591), no default "skip all" (#98159) | Medium — security workflow friction |

---

*Generated from GitHub data (anthropics/claude-code) as of 2026-10-04. Links point to live issues/PRs.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-10-04

---

## 1. Today's Highlights

The Codex team shipped two alpha releases (`0.162.0-alpha.10` and `0.162.0-alpha.11`) while closing **21 pull requests** in a single day—mostly TUI/CLI polish, Windows daemon hardening, and MCP/Code Mode stability fixes. Community attention is concentrated on **Windows-specific regressions**: the VS Code extension message-loss bug (#49988, 47 👍), DOT/Computer Use tool gaps (#49458, 20 👍), and a remote pairing loop between Windows and Android (#49618, 12 👍).

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| `rust-v0.162.0-alpha.11` | Alpha | Incremental alpha; follows alpha.10 by hours. No changelog published yet. |
| `rust-v0.162.0-alpha.10` | Alpha | Baseline for today’s alpha series. |

> **Note**: Both are pre-release builds. Stable channel remains unchanged.

---

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#49988](https://github.com/openai/codex/issues/49988) | **VS Code extension drops submitted messages after update** | Messages vanish on Enter; composer clears but nothing sends. Blocks core workflow. | **47 👍, 41 comments** — *Closed* (fix likely in today’s PRs) |
| [#49458](https://github.com/openai/codex/issues/49458) | **Windows: DOT-started local tasks lack Computer Use tools** | DOT tasks can’t access computer-use tooling that normal sessions have. | **20 👍, 46 comments** — Active investigation |
| [#49618](https://github.com/openai/codex/issues/49618) | **Windows↔Android remote pairing loop (“Approve this phone” repeats)** | Cross-device remote execution broken for mobile+desktop users. | **12 👍, 21 comments** |
| [#50225](https://github.com/openai/codex/issues/50225) | **VS Code: messages intermittently disappear/lost; issue reporting unavailable** | Separate but related message-loss report; extension telemetry also broken. | **5 👍, 5 comments** |
| [#50428](https://github.com/openai/codex/issues/50428) | **Windows desktop: durable chat turn/thread fork fail (AbsolutePathBuf deserialization)** | Cloud-thread forks and plain-text submissions crash on path resolution. | **1 👍, 11 comments** |
| [#47041](https://github.com/openai/codex/issues/47041) | **GPT-5.6 Sol / GPT-6 Astra reject harmless prompts with `invalid_prompt`** | Model-side false positives on Windows desktop. | **3 👍, 11 comments** |
| [#45163](https://github.com/openai/codex/issues/45163) | **TUI palette cache breaks readability after system light/dark toggle** | Startup-only cache doesn’t react to theme changes; input becomes unreadable. | **7 👍, 7 comments** |
| [#39783](https://github.com/openai/codex/issues/39783) | **Ephemeral thread summaries leak full MCP stacks via thread/unsubscribe** | Summarization spawns hidden threads that load entire MCP config, leaking resources. | **3 👍, 7 comments** |
| [#50653](https://github.com/openai/codex/issues/50653) | **VS Code extension: prompts get stuck, disappear, or stay pending** | Another message-reliability report on Windows (v26.930.31730). | **4 👍, 4 comments** |
| [#50055](https://github.com/openai/codex/issues/50055) | **macOS Code Review stuck loading (“Reopen Code Review to try again”)** | Code Review plugin fails before PR search even starts. | **6 👍, 3 comments** |

---

## 4. Key PR Progress (10 Most Impactful Merged PRs)

| # | PR | Category | Summary |
|---|----|----------|---------|
| [#50782](https://github.com/openai/codex/pull/50782) | **Windows daemon release retry** | Windows/Reliability | Retries publication on transient file locks (scanner interference). |
| [#50781](https://github.com/openai/codex/pull/50781) | **Restrict TUI MCP startup notifications to owned threads** | MCP/Security | Prevents unrelated subagent approvals from leaking into current session. |
| [#50741](https://github.com/openai/codex/pull/50741) | **Keep environment-backed tools exposed across readiness changes** | Tooling/Stability | Stops tool catalog churn when environment readiness flips. |
| [#50720](https://github.com/openai/codex/pull/50720) | **Decode Windows Terminal Shift+Enter (`ESC[13;2u`)** | Windows/TUI | Fixes newline insertion in composer under Windows Terminal. |
| [#50700](https://github.com/openai/codex/pull/50700) | **Transport creates Windows remote-control socket directory** | Windows/Remote | Uses protected DACL instead of inheriting temp-dir ACL. |
| [#50695](https://github.com/openai/codex/pull/50695) | **Preserve local Markdown link labels in TUI** | TUI/UX | Shows `label (target)` instead of collapsing to destination only. |
| [#50564](https://github.com/openai/codex/pull/50564) | **Allow transcript selection/copy while bottom modals open** | TUI/UX | Plan confirmation no longer blocks copy from visible transcript. |
| [#50558](https://github.com/openai/codex/pull/50558) | **Avoid reading CWD when resolving absolute paths** | Core/FS | Fixes `AbsolutePathBuf` failure when CWD is deleted. |
| [#50555](https://github.com/openai/codex/pull/50555) | **Skip daemon auto-start for Windows-mounted WSL homes** | WSL/Windows | Avoids permission failures on DrvFS/9p mounts. |
| [#50540](https://github.com/openai/codex/pull/50540) | **Send incremental tool catalog updates in Responses Lite** | API/Performance | Sends full catalog once, then only deltas—reduces payload. |

---

## 5. Feature Request Trends (Distilled from Issues)

1. **Windows parity** — DOT/Computer Use, remote pairing, sandbox locking, path handling, and notification sounds all lag behind macOS/Linux.
2. **Message reliability in VS Code extension** — Multiple independent reports of lost/dropped messages; users want acknowledgment + retry UX.
3. **MCP resource hygiene** — Leaky ephemeral threads (#39783), unstable tool catalogs (#50536, #50540), and cross-thread notification bleed (#50781).
4. **Code Review plugin stability** — Stuck loading states (#50055), phantom auto-reviews (#49747).
5. **TUI theme-awareness** — Palette cache must react to system theme changes (#45163).
6. **Persistent user preferences** — Command Center grouping (#50786), slash-command discoverability (#50756).

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence |
|------------|----------|
| **“My message just vanished”** | #49988 (47 👍), #50225, #50653 — three separate issues in 72h on VS Code extension message loss. |
| **“Windows is a second-class platform”** | DOT tool gaps (#49458), pairing loop (#49618), sandbox lock failures (#49433, #50520), path deserialization (#50428), notification sounds (#48579), scrollbar occlusion (#50793). |
| **“MCP leaks into places it shouldn’t”** | Summary threads loading full MCP stack (#39783), approval bleed across threads (#50781), catalog churn in Code Mode (#50536, #50540, #50687). |
| **“Daemon/WSL friction”** | Auto-start fails on mounted WSL homes (#50555), file-lock races on Windows (#50782), missing win32 optional dep (#19243). |
| **“UI regressions on basic interactions”** | Shift+Enter broken in Windows Terminal (#50720), composer eating trailing spaces on macOS (#50108), Markdown label collapse (#50695), palette cache (#45163). |

---

*Generated from `openai/codex` GitHub data (releases, issues, PRs updated 2026-10-03 → 2026-10-04).*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-10-04

## 1. Today's Highlights
No new releases shipped in the last 24 hours. The issue tracker shows intense focus on **subagent reliability** (MAX_TURNS misreporting, generalist agent hangs, settings propagation) and **performance optimization** (history truncation, snapshot lookups, chat compression). Multiple PRs targeting O(n²) → O(n) algorithmic improvements in core context management are under review, signaling a sprint on latency reduction for long-running sessions.

## 2. Releases
*No releases published in the last 24 hours.*

## 3. Hot Issues (Top 10 by Impact & Discussion)

| Issue | Priority | Why It Matters | Community Signal |
|-------|----------|----------------|------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) Subagent recovery after MAX_TURNS reported as GOAL success | P1 🐛 | Subagents silently report success despite hitting turn limits, masking failures in multi-step investigations. | 13 comments, 2 👍 — `status/need-retesting` |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) Generalist agent hangs indefinitely | P1 🐛 | Core agent deadlock on simple ops (folder creation); workaround is disabling subagents. | 8 comments, 8 👍 — `status/need-retesting` |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) Assess AST-aware file reads, search, mapping | P2 📦 Epic | Evaluates whether AST tooling (tilth, glyph) reduces token noise & turn count for code navigation. | 7 comments, 1 👍 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) Gemini under-uses custom skills & sub-agents | P2 🐛 | Model rarely invokes registered skills (gradle, git) without explicit instruction, limiting automation. | 7 comments |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) Browser Agent ignores `settings.json` (maxTurns, etc.) | P2 🐛 | Configuration overrides not respected; undermines policy-driven safety. | 4 comments |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) Browser subagent fails on Wayland | P1 🐛 | Platform blocker for Linux/Wayland users; termination reason shows `GOAL` but fails. | 4 comments, 1 👍 — `agent/browser` |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) Browser agent: session takeover & lock recovery | P3 ✨ | Persistent profile locking causes fail-fast; needs graceful recovery for long-lived sessions. | 4 comments |
| [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) Symlinked agent files not recognized | P2 🐛 | Breaks dotfile management workflows; symlinks in `~/.gemini/agents/` ignored. | 4 comments |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) 400 error with >128 tools available | P2 🐛 | Tool explosion (400+) triggers API error; needs smarter tool scoping. | 3 comments |
| [#22186](https://github.com/google-gemini/gemini-cli/issues/22186) `get-shit-done` output hook crashes near completion | P1 🐛 | Crash during final summary print; affects popular community hook. | 3 comments — `effort/medium` |

## 4. Key PR Progress (10 Notable Changes)

| PR | Status | Area | Summary |
|----|--------|------|---------|
| [#29517](https://github.com/google-gemini/gemini-cli/pull/29517) | Open | Core Perf | **Linearize array reconstruction in `truncateHistoryToBudget`** — replaces `unshift()` with `push`+`reverse`; 10k messages: 18.97 ms → 5.01 ms. |
| [#29515](https://github.com/google-gemini/gemini-cli/pull/29515) | Open | Agent Perf | **Linearize state snapshot ID lookups** — `Set` replaces `indexOf`; 10k targets: 291.95 ms → 10.26 ms. |
| [#29516](https://github.com/google-gemini/gemini-cli/pull/29516) | Open | Agent Perf | **Cache transcript turn indexes** — `Map` replaces repeated `indexOf`; 10k nodes: 414.20 ms → 17.91 ms. |
| [#29512](https://github.com/google-gemini/gemini-cli/pull/29512) | Open | Core Perf | **Linearize chat compression history reconstruction** — same `unshift`→`push+reverse` pattern; 10k msgs: 18.97 ms → 5.01 ms. |
| [#29411](https://github.com/google-gemini/gemini-cli/pull/29411) | **Closed** | Core | **Fix `--resume` to pick most recently active session** (not newest start time). Fixes #29410. |
| [#29407](https://github.com/google-gemini/gemini-cli/pull/29407) | **Closed** | Core | **Preserve shared refs in JSON serialization** — fixes `[Circular]` loss in OpenTelemetry exports via ancestor-path tracking. |
| [#29404](https://github.com/google-gemini/gemini-cli/pull/29404) | **Closed** | CLI | **Add `gemini models list --output json`** — enables programmatic model discovery for integrations. |
| [#29510](https://github.com/google-gemini/gemini-cli/pull/29510) | Open | Windows/Security | **Harden Windows subprocess quoting** — prevents command injection in `editor.ts` diff spawns (`shell: true`). |
| [#29621](https://github.com/google-gemini/gemini-cli/pull/29621) | Open | Agent | **Preserve subagent multimodal tool response parts** — fixes image data loss when subagent returns screenshots. |
| [#29622](https://github.com/google-gemini/gemini-cli/pull/29622) | Open | Core | **Bound `tildeifyPath` to path segments** — prevents incorrect `~` expansion for sibling dirs sharing home prefix. |

## 5. Feature Request Trends
1. **Subagent/skill autonomy** — Multiple issues (#21968, #18287, #22598) request *proactive* skill invocation, parallel subagent collaboration, and trajectory visibility (`/chat share`).
2. **AST-aware code navigation** — Epic #22745 + #22746 + #22747 + #19561 converge on surgical, token-efficient code reads via AST grep/structure mapping.
3. **Persistent, file-based task tracking** — #18836, #21000 push to replace in-context `WriteToDo` with CRUD task files surviving context rotations.
4. **Browser agent hardening** — Wayland support (#21983), config respect (#22267), session recovery (#22232) form a hardening cluster.
5. **Model self-awareness** — #21432 asks the CLI to accurately document its own flags, hotkeys, and invocation patterns.

## 6. Developer Pain Points
- **Silent subagent failures** — MAX_TURNS misreported as success (#22323), hangs (#21409), missing bug-report context (#21763) erode trust in delegation.
- **Configuration leakage** — Browser agent ignoring `settings.json` (#22267) and symlink agents unrecognized (#20079) break declarative setup.
- **Context/token bloat** — 36k+ baseline tokens/turn (#19561); large file reads firehose context; compression perf now a focus (4 PRs).
- **Platform gaps** — Wayland browser failure (#21983), Windows injection risk (#29510), tilde-path bugs (#29622).
- **Tool explosion** — >128 tools triggers 400 errors (#24246); model creates scattered tmp scripts (#23571) complicating cleanup.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-10-04

## Today's Highlights
No new releases shipped in the last 24 hours. The issue tracker shows **active triage around MCP stability, ACP mode gaps, and macOS persistence bugs** — notably a regression where macOS updates leave a stale `.mcp-writer.binding` file that breaks all CLI sessions until manually cleared. Several new ACP-mode feature requests (model listing, assisted approval, Computer Use plugin) signal growing external-client adoption.

## Releases
*No releases in the last 24 hours.*

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#4998](https://github.com/github/copilot-cli/issues/4998) | **macOS update/reboot breaks CLI: stale `.mcp-writer.binding` holds old filesystem device ID** | Critical regression — all sessions (new & resumed) fail to process prompts after a macOS security update + reboot. Blocks daily workflow until user manually deletes the binding file. | 7 👍, 7 comments; users confirm workaround (delete `~/.config/github-copilot-cli/.mcp-writer.binding`) but want automatic recovery. |
| [#2795](https://github.com/github/copilot-cli/issues/2795) | **`--agent` + `--plugin-dir` + `-p` fails to find agent in custom plugin dir** | Long-standing non-interactive workflow blocker: agents in `--plugin-dir` are ignored when a prompt (`-p`) is supplied. Forces users into TUI for custom agents. | 17 👍, 6 comments; closed but high interest suggests root cause may persist in related paths. |
| [#4946](https://github.com/github/copilot-cli/issues/4946) | **HTTP 400 `content[].thinking` after background shell completion notification** | Background command completion injects a `system.notification` at the start of the *next* turn, triggering a malformed `thinking` block that the model rejects. Breaks long-running command workflows. | 1 👍, 5 comments; updated today — active investigation. |
| [#5042](https://github.com/github/copilot-cli/issues/5042) | **HydraFusion re-routes session to small-context model after 400; tool set changes mid-session** | After a routed model (`gpt-5.6-sol`) returns 400, the router switches the *same session* to `mai-code-1.1-flash` which cannot hold the static prompt + tool set. Context loss + tool mismatch = session corruption. | 0 👍, 1 comment; updated today — high severity for long-running sessions. |
| [#5050](https://github.com/github/copilot-cli/issues/5050) | **`/mcp <server-name>` fails with case-sensitive match** | UX papercut: `/mcp myserver` ≠ `/mcp MyServer`. Error message doesn’t hint at case sensitivity. | 0 👍, 0 comments; newly filed, easy fix with high visibility. |
| [#5049](https://github.com/github/copilot-cli/issues/5049) | **Computer Use plugin unavailable in ACP mode (Windows, 1.0.91)** | ACP server advertises `/computer` command but plugin + MCP server are absent in-session. Blocks headless/IDE clients from using Computer Use. | 0 👍, 0 comments; new, Windows-specific ACP gap. |
| [#5047](https://github.com/github/copilot-cli/issues/5047) | **Expose assisted approval safety judge in ACP mode** | ACP clients (e.g., T3 Code) can’t leverage Copilot’s built-in “auto-approve safe actions” logic — forces all approvals to human. | 0 👍, 0 comments; new, strategic for ACP adoption. |
| [#5045](https://github.com/github/copilot-cli/issues/5045) | **`/compact` repeatedly fails with empty response on `gpt-6.1-sol`** | Compaction is essential for long sessions; empty model response makes it unusable on this model. | 0 👍, 0 comments; regression on a flagship model. |
| [#5044](https://github.com/github/copilot-cli/issues/5044) | **MCP tool call fails with “catalog changed” when unrelated tool’s `_meta` differs between `tools/list` responses** | Race condition: tools offered before server fully connects; if `_meta` drifts between `tools/list` calls, valid calls fail. Affects any MCP server with dynamic metadata. | 0 👍, 0 comments; new, subtle but broad impact. |
| [#5027](https://github.com/github/copilot-cli/issues/5027) | **DNS broken in Linux Sandbox with `systemd-resolved` stub (`127.0.0.53` unreachable)** | Sandbox inherits host’s `/etc/resolv.conf` pointing to loopback stub resolver, which isn’t routable inside the sandbox. Breaks all network calls in sandboxed tools. | 0 👍, 0 comments; Linux-specific but blocks sandbox adoption. |

## Key PR Progress
*No pull requests updated in the last 24 hours.*

## Feature Request Trends
1. **ACP Mode Parity** — 4 new issues (#4880, #5047, #5049, #5050) request: model listing/config, assisted approval, Computer Use plugin, case-insensitive MCP commands. External clients need full CLI feature parity.
2. **MCP Hardening** — OAuth/Entra ID fixes (#5040, #5014), tool catalog stability (#5044), case-insensitive server naming (#5050), configurable slow-connection threshold (#2907).
3. **Session & Context Control** — “Accept plan with fresh context” (#5041), reliable `/compact` (#5045), background notification handling (#4946), HydraFusion routing transparency (#5042).
4. **Terminal/Keyboard Accessibility** — Vim/less-style pager (#5015), CJK copy-paste fix (#3369), Ctrl+Shift+C conflict with `ask_user` (#5043).
5. **Configuration Ergonomics** — Disable taskbar icon (#4839), BYOK reasoning-effort support (#4012), plugin-dir agent discovery (#2795).

## Developer Pain Points
| Pain Point | Frequency | Representative Issues |
|------------|-----------|----------------------|
| **macOS update breaks CLI via stale binding file** | High (blocks all sessions) | #4998 |
| **MCP OAuth/Entra ID authentication failures** | High (multiple servers affected) | #5040, #5014 |
| **Plugin/agent discovery broken with `--plugin-dir` + `-p`** | High (17 👍) | #2795 |
| **Background shell completion corrupts next turn** | Medium (active investigation) | #4946 |
| **Model routing/context window mismatch mid-session** | Medium (session corruption) | #5042 |
| **Linux sandbox DNS resolution broken** | Medium (blocks sandbox use) | #5027 |
| **Terminal keyboard shortcuts conflict with CLI bindings** | Medium (CJK, pager, copy) | #3369, #5015, #5043 |
| **Taskbar icon clutter with many sessions** | Low-Medium (4 👍) | #4839 |
| **`/compact` unreliable on newer models** | Low (regression) | #5045 |
| **ACP mode missing core CLI features** | Emerging (4 new issues) | #4880, #5047, #5049, #5050 |

---

*Digest generated from github.com/github/copilot-cli issue activity (2026-10-03 → 2026-10-04). Links point to live GitHub items.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-10-04

## Today's Highlights
No new releases shipped today. The project saw **9 active issues** and **50 PRs updated**, with a strong focus on **stability fixes** (log rotation, MCP reconnection, provider stream resilience) and **GUI polish** (browser address bar, extension state management). The long-standing session context viewer request (#6152, 138 👍) remains the top community priority.

---

## Releases
*No releases in the last 24 hours.*

---

## Hot Issues
| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#6152](https://github.com/anomalyco/opencode/issues/6152) | **Session context usage viewer** (Claude-style `/context`) | Highest-voted open feature (138 👍); enables token budget awareness for long sessions | 23 comments, active since Dec 2025 |
| [#47646](https://github.com/anomalyco/opencode/issues/47646) | **ChatGPT OAuth reports 400k context** for 1M+ token models | Breaks context planning for long-context OpenAI models; affects TUI accuracy | 8 comments, 2.0 milestone |
| [#50206](https://github.com/anomalyco/opencode/issues/50206) | **Malformed XML/DSML tool-call output** from Go models | Causes tool execution failures; impacts reliability of hosted models | 7 comments, 1 👍 |
| [#52237](https://github.com/anomalyco/opencode/issues/52237) | **Remote MCP servers never retry** after failure until service restart | Breaks durability for HTTP MCP connections (e.g., post-sleep/wake) | 5 comments |
| [#53089](https://github.com/anomalyco/opencode/issues/53089) | **Log rotation by rename fails** — processes keep writing to renamed file | Blocks standard logrotate workflows; requires `copytruncate` workaround | New today, 1 comment |
| [#53083](https://github.com/anomalyco/opencode/issues/53083) | **Provider stream dies silently** mid-run (GLM-5.3 via NVIDIA) | Session hangs forever with no error; critical reliability gap | New today, 1 comment |
| [#53086](https://github.com/anomalyco/opencode/issues/53086) | **API connection closed** — "Cannot connect to API: other side closed" | Potential regression or infra issue; affects multiple systems/VPNs | New today, needs compliance |
| [#21063](https://github.com/anomalyco/opencode/issues/21063) | **Arrow-key scrolling in desktop app** | Basic UX gap for laptop users; closed but indicates desktop polish needs | Closed, 2 comments |
| [#41547](https://github.com/anomalyco/opencode/issues/41547) | **Contributing & config docs out of sync** with codebase | TUI path moved to `packages/tui`; misleads new contributors | 1 comment, since Aug 2026 |
| [#52237](https://github.com/anomalyco/opencode/issues/52237) | **MCP server retry logic missing** | Duplicate entry — see above |

---

## Key PR Progress
| # | PR | Type | Summary |
|---|----|------|---------|
| [#53090](https://github.com/anomalyco/opencode/pull/53090) | **Bug fix** | Reopens log file after external rotation (fixes #53089); enables standard logrotate |
| [#53088](https://github.com/anomalyco/opencode/pull/53088) | **Feature** | Streams `fs.read` with HTTP Range support; enables video seeking/streaming in native clients |
| [#52671](https://github.com/anomalyco/opencode/pull/52671) | **Bug fix** | Bounds concurrent `ripgrep` subprocesses (max 4) via semaphore; prevents unbounded fan-out |
| [#52674](https://github.com/anomalyco/opencode/pull/52674) | **Bug fix** | Per-project credential activation; pins auth credential by ID/label in project config |
| [#52712](https://github.com/anomalyco/opencode/pull/52712) | **Bug fix** | Fails unsettled tool calls when stream finishes early (max tokens/mid-flight); prevents silent corruption |
| [#52721](https://github.com/anomalyco/opencode/pull/52721) | **Bug fix** | Strips empty error assistant messages from history; prevents provider request poisoning |
| [#52708](https://github.com/anomalyco/opencode/pull/52708) | **Bug fix** | Classifies gateway upstream 403 as retryable; handles invalid JSON upstream responses |
| [#52702](https://github.com/anomalyco/opencode/pull/52702) | **Bug fix** | Treats image-count limit errors as context overflow; proper error classification for 400s |
| [#53075](https://github.com/anomalyco/opencode/pull/53075) | **Bug fix** | Fixes 6 GUI extension bugs: stale details, browser cleanup, update checks, panel state |
| [#53077](https://github.com/anomalyco/opencode/pull/53077) | **Bug fix** | Eliminates startup RPC round-trip for extensions; preserves renamed enable state |
| [#53087](https://github.com/anomalyco/opencode/pull/53087) | **Bug fix** | Fixes browser address bar: bold selection + cursor placement on click |
| [#53085](https://github.com/anomalyco/opencode/pull/53085) | **Feature** | Adds tokens/sec to app assistant footer (port from TUI); closed, needs compliance |
| [#53084](https://github.com/anomalyco/opencode/pull/53084) | **Feature** | Adds "Full session" fork option to app (matches TUI); closed, needs compliance |
| [#52670](https://github.com/anomalyco/opencode/pull/52670) | **Bug fix** | Attaches resumed compaction summary to correct marker (fixes #52126) |
| [#52673](https://github.com/anomalyco/opencode/pull/52673) | **Bug fix** | Fixes auth provider metadata URL handling; prevents bare IDs as well-known URLs |

---

## Feature Request Trends
1. **Session observability** — Context window breakdown (#6152), tokens/sec in footer (#53085), fork full session (#53084)
2. **Provider accuracy** — Correct context limits for OAuth models (#47646), image-count as context overflow (#52702)
3. **Desktop parity with TUI** — Arrow-key scrolling (#21063), fork options (#53084), tokens/sec (#53085)
4. **Extension reliability** — Startup race conditions (#53077), stale state (#53075), MCP reconnection (#52237)
5. **Log/ops hygiene** — Log rotation support (#53089), structured error reporting (#53083)

---

## Developer Pain Points
| Area | Recurring Theme | Evidence |
|------|-----------------|----------|
| **Provider reliability** | Silent stream failures, misclassified errors, context limit mismatches | #53083, #52711, #52708, #52702, #47646 |
| **MCP/extension durability** | No auto-retry, stale state on reconnect, startup races | #52237, #53075, #53077 |
| **Tool execution** | Malformed DSML output, unbounded ripgrep, unsettled calls on truncation | #50206, #52671, #52712 |
| **Operations** | Log rotation broken, config/docs drift, auth credential management | #53089, #41547, #52674 |
| **Desktop UX gaps** | Missing keyboard nav, fork parity, metric parity with TUI | #21063, #53084, #53085 |

---

*Generated from github.com/anomalyco/opencode activity on 2026-10-04. All links point to live issues/PRs.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-10-04

## 1. Today's Highlights

Pi shipped two patch releases in 24 hours: **v1.0.1** adds a Nix flake for reproducible installs and improves project-scoped extensions, while **v1.0.2** introduces per-thinking-level sampling parameters (`samplingParamsByThinkingLevel` in `models.json`) for OpenAI-compatible APIs. The community is actively triaging TUI performance regressions on long sessions (full redraw storms, scroll lag) and a cluster of durability/streaming correctness bugs around tool-call deduplication, context accounting, and terminal lifecycle handling.

## 2. Releases

| Version | Key Changes |
|---------|-------------|
| **[v1.0.2](https://github.com/earendil-works/pi/releases/tag/v1.0.2)** | **Sampling by thinking level** — `samplingParamsByThinkingLevel` in `models.json` lets you set `temperature`, `top_p`, etc. per thinking level on OpenAI-compatible APIs. [Docs](https://github.com/earendil-works/pi/blob/v1.0.2/packages/coding-agent/docs/quickstart.md#1-install-pi) |
| **[v1.0.1](https://github.com/earendil-works/pi/releases/tag/v1.0.1)** | **Nix flake** — `nix run github:earendil-works/pi/stable` runs latest; `nix profile add github:earendil-works/pi/stable` installs. Project-scoped extensions improvements. [Install guide](https://github.com/earendil-works/pi/blob/v1.0.1/packages/coding-agent/docs/quickstart.md#1-install-pi) |

## 3. Hot Issues (Top 10 by Impact & Discussion)

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| **[#2870](https://github.com/earendil-works/pi/issues/2870)** Follow XDG Base Directory | Config clutters `$HOME` on Linux; violates Freedesktop standard. **Closed** but 62 👍, 24 comments shows strong demand. | High — long-standing Linux UX papercut |
| **[#7730](https://github.com/earendil-works/pi/issues/7730)** High CPU on macOS with long sessions | 100%+ CPU, 600–800 MB RAM; suspected context-length correlation. Blocks macOS power users. | 17 comments, 10 👍 — active investigation |
| **[#9255](https://github.com/earendil-works/pi/issues/9255)** TUI full-screen redraw storm on long transcripts | `TuiMainScreen.doRender()` triggers full re-render every frame when streaming thinking tail > viewport. Causes violent jumping/doubled text. | 9 comments — core TUI perf regression |
| **[#10314](https://github.com/earendil-works/pi/issues/10314)** Reconsider Home/End defaults in fullscreen | Home/End now scroll to top/bottom instead of line start/end. Breaks muscle memory; 5 👍, 7 comments debating UX. | UX polarity — needs decision |
| **[#9807](https://github.com/earendil-works/pi/issues/9807)** Perf: full re-render causes lag at 800+ messages | Unlike OpenCode’s incremental diffing, Pi re-renders entire scrollback. 1.7 MB JSONL session = noticeable typing/scroll lag. | 4 comments — architectural TUI debt |
| **[#10287](https://github.com/earendil-works/pi/issues/10287)** `getContextUsage()` overestimates after retryable error | Tokens jump 42k → 330k after WebSocket/fetch failure. Breaks cost tracking & context budgets. | 4 comments — silent data corruption risk |
| **[#10267](https://github.com/earendil-works/pi/issues/10267)** `before_agent_start` prompt dropped on non-user-prompt runs | Extension-contributed system prompts lost on background tasks, retries, resumes — re-bills full prompt. | 5 comments — extension API reliability |
| **[#9262](https://github.com/earendil-works/pi/issues/9262)** `find` tool: Windows-separator globs silently return nothing | `src\**\*.ts` yields zero results, no error. Cross-platform footgun for agents/users on Windows. | 5 comments — follow-up to #6817 |
| **[#10445](https://github.com/earendil-works/pi/issues/10445)** OpenRouter `~anthropic/*` alias misses cache control → 10× input cost | Auto-detect only matches `anthropic/` prefix; `~anthropic/claude-...` bypasses `cache_control`. Silent cost explosion. | New, critical for OpenRouter users |
| **[#10439](https://github.com/earendil-works/pi/issues/10439)** Codemode breaks after `pnpm` global update | `getQuickJSWasmPath()` re-resolves per-call; pnpm’s per-install hash dirs get GC’d on update. **PR [#10440](https://github.com/earendil-works/pi/pull/10440)** fixes. | 2 comments — breaks codemode workflows |

## 4. Key PR Progress (Top 10 by Impact)

| PR | Status | Summary |
|----|--------|---------|
| **[#9776](https://github.com/earendil-works/pi/pull/9776)** Per thinking sampling parameters | **Closed → v1.0.2** | Implements `samplingParamsByThinkingLevel`; cherry-picks thinking-effort fixes. Ships in v1.0.2. |
| **[#10440](https://github.com/earendil-works/pi/pull/10440)** Resolve QuickJS WASM path once/process | **Open** | Fixes #10439: caches `quickjs.wasm` path at startup, survives pnpm global updates. |
| **[#10443](https://github.com/earendil-works/pi/pull/10443)** Route stdin dead-terminal errors to emergency exit | **Closed** | Adds `error` listener on `process.stdin`; prevents `uncaughtException` on SSH/tmux drop, sleep/wake. |
| **[#10402](https://github.com/earendil-works/pi/pull/10402)** Bind Ctrl+H → delete backward on macOS | **Closed** | First-time contributor; fixes macOS muscle-memory gap (Ctrl+H = backspace everywhere else). |
| **[#10397](https://github.com/earendil-works/pi/pull/10397)** Dedupe tool call IDs on server reuse | **Closed** | Some providers re-issue same `(call_id, id)` with modified args; `createSlot` now deduplicates. |
| **[#10437](https://github.com/earendil-works/pi/pull/10437)** Report settings save failures in interactive mode | **Open** | Fixes #10168: `SettingsManager.enqueueWrite` failures now surfaced at runtime, not just startup. |
| **[#10383](https://github.com/earendil-works/pi/pull/10383)** Perf: diff raw lines for pointer equality | **Closed** | Author notes “resolved using fullscreen mod”; incremental line diffing to avoid full re-render. |
| **[#10433](https://github.com/earendil-works/pi/pull/10433)** Let apps name themselves in OpenAI logins | **Open** | Allows custom agent name in “Sign in with ChatGPT” flow (avoids “Pi” branding in Codex UX). |
| **[#10429](https://github.com/earendil-works/pi/pull/10429)** Let caller headers override Codex originator/UA | **Open** | Companion to #10433; lets downstream agents control `User-Agent` and `Codex-Originator` headers. |
| **[#10410](https://github.com/earendil-works/pi/pull/10410)** Expose durable thinking, WS, session options | **Open** | Adds `thinkingBudgets`, `websocketConnectTimeoutMs`, `sessionId` to `ConversationStreamOptions`. |

## 5. Feature Request Trends

1. **TUI Performance & Correctness** — Incremental rendering (#9807, #9255), scroll/keybinding UX (#10314), hyperlink clickability (#7930), ANSI/SGR handling (#10417).
2. **Provider/Model Config Granularity** — Per-thinking-level sampling (shipped v1.0.2), OpenRouter cache-control aliases (#10445), top-level `instructions` for Responses API (#8734), virtual model footer accuracy (#10436).
3. **Durable/Streaming Reliability** — Tool-call ID deduplication (#10397), context accounting after retries (#10287), wait-cycle deadlock detection (#10411), per-conversation `sessionId` (#10424).
4. **Extension & Codemode Ergonomics** — Nix flake (shipped v1.0.1), Unix socket MCP (#10247), codemode WASM path stability (#10439/#10440), image handling in codemode-only (#10251).
5. **Cross-Platform Filesystem/Path Handling** — XDG dirs (#2870), Windows glob separators (#9262, #10418), SMB/NAS lookup avoidance (#10419).

## 6. Developer Pain Points (Recurring Frustrations)

- **TUI at scale is slow** — Full re-render on every frame makes 800+ message sessions laggy; no incremental diffing yet.
- **Silent failures** — `find` tool returns empty on Windows paths (#9262), OpenRouter cache-control misses (#10445), context usage spikes post-retry (#10287) — all without errors.
- **Terminal lifecycle brittleness** — SSH/tmux disconnect, sleep/wake, or raw-mode stdin errors crash the process (#10443).
- **Extension API leaks** — `before_agent_start` prompts dropped on non-user turns (#10267); settings write failures hidden until restart (#10168/#10437).
- **Install/Update hygiene** — Managed installs accumulate 160 MB/release with no pruning (#10392); `PI_OFFLINE=1` blocks explicit `pi update` (#6566).
- **Cross-platform path assumptions** — Windows separators, XDG non-compliance, SMB canonicalization on builtin IDs (#10419).

---

*Data sourced from `github.com/badlogic/pi-mono` (mirror of `earendil-works/pi`) — releases, issues, and PRs updated in the last 24 hours.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-10-04

## 1. Today's Highlights
The managed-agent runtime received critical stability fixes addressing session takeover idempotency, turn deadline classification, and transcript integrity during model retries. A new nightly release (v0.24.7-nightly.20261003) aligns Code Mode text with lazy tool discovery. Meanwhile, the hosted workspace context PR (#13168) has accumulated 11 deferred review suggestions, signaling a substantial feature nearing completion.

## 2. Releases
**v0.24.7-nightly.20261003.2c591ecc08**  
- `fix(core)`: Align Code Mode text with lazy tool discovery ([#12990](https://github.com/QwenLM/qwen-code/pull/12990))  
- `fix(permissions)`: Honor approved permissions  

*Nightly builds are published daily; this iteration focuses on tool-discovery consistency and permission handling.*

## 3. Hot Issues (10 Noteworthy)

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| [#13078](https://github.com/QwenLM/qwen-code/issues/13078) Daily dependency CVE audit failed | Scheduled security scan failing; may indicate new high-severity vuln or npm audit endpoint issues | 8 comments, bot-authored, needs triage |
| [#13356](https://github.com/QwenLM/qwen-code/issues/13356) HookRunner process reap assertion races kill propagation under load | Flaky test in `hook-runner.process.test.ts` causing CI failures; blocks reliable process-tree cancellation | 4 comments, `status/ready-for-agent`, `priority/P3` |
| [#13317](https://github.com/QwenLM/qwen-code/issues/13317) Add `/目标` as Chinese alias for `/goal` | I18n improvement for Chinese users; uses existing slash-command alias mechanism | 4 comments, `need-discussion`, `priority/P3` |
| [#13364](https://github.com/QwenLM/qwen-code/issues/13364) Hosted Workspace context: PR #13168 round-5 follow-ups (11 standing suggestions) | Large PR (+3250/-186 across 39 files) deferred review items; indicates major feature nearing merge | 3 comments, `priority/P2`, `need-discussion`, multiple scopes |
| [#13318](https://github.com/QwenLM/qwen-code/issues/13318) Takeover load must be idempotent — lost reply causes 409 loop | **Closed** — Critical managed-agent bug where lost load reply wedges Turn in `hosted_session_already_attached` loop | 3 comments, fixed via [#13350](https://github.com/QwenLM/qwen-code/pull/13350) |
| [#13322](https://github.com/QwenLM/qwen-code/issues/13322) Turn behind indefinitely-held model stream never settles | **Closed** — Missing deadline classification for stalled model streams | 3 comments, fixed via [#13359](https://github.com/QwenLM/qwen-code/pull/13359) |
| [#13319](https://github.com/QwenLM/qwen-code/issues/13319) Model retry after first chunk glues orphaned prefix into transcript | **Closed** — Transcript corruption during mid-stream model retries | 3 comments |
| [#13320](https://github.com/QwenLM/qwen-code/issues/13320) Mixed-version takeover refusal surfaces as opaque 503 | **Closed** — Version-compatibility errors misreported as generic 503 | 3 comments |
| [#13269](https://github.com/QwenLM/qwen-code/issues/13269) #13163 follow-ups: cold-cache cancel and deferred review suggestions | Follow-up to bound Turn cancellation under refused authorization; inherited ordering/recovery gaps remain | 3 comments, `priority/P2`, `status/ready-for-human` |
| [#13367](https://github.com/QwenLM/qwen-code/issues/13367) Markdown table body rows resembling delimiters disappear | Rendering bug: hyphen-only table rows vanish in terminal Markdown mode, breaking alignment | 1 comment, new issue |

## 4. Key PR Progress (10 Important PRs)

| PR | Type | Description |
|----|------|-------------|
| [#13350](https://github.com/QwenLM/qwen-code/pull/13350) | **Fix** | Makes Hosted Harness takeover load idempotent after lost reply (closes #13318) |
| [#13359](https://github.com/QwenLM/qwen-code/pull/13359) | **Fix** | Wires Turn-level deadline through managed-agent stack; settles deadline-exceeded Turns as classified failures (closes #13322) |
| [#13368](https://github.com/QwenLM/qwen-code/pull/13368) | **Fix** | Preserves Markdown table body rows that resemble delimiter lines (closes #13367) |
| [#13365](https://github.com/QwenLM/qwen-code/pull/13365) | **Fix** | Stops gap-locked replay probes from deadlocking same-tenant admission bursts in InnoDB |
| [#13366](https://github.com/QwenLM/qwen-code/pull/13366) | **Fix** | Queues Workspace-bound hosted turn on definite busy refusal instead of surfacing as terminal error |
| [#13210](https://github.com/QwenLM/qwen-code/pull/13210) | **Feature** | Adds broker authentication & broker-provisioned writer credentials for Managed Agent Runtime (bilingual design doc) |
| [#13265](https://github.com/QwenLM/qwen-code/pull/13265) | **Feature** | Implements H3 background Shell and Monitor runtime for managed-agent path |
| [#13301](https://github.com/QwenLM/qwen-code/pull/13301) | **Feature** | Persists Workspace session tool profiles (`hosted-workspace-files/1`) on creation/load/recovery |
| [#13033](https://github.com/QwenLM/qwen-code/pull/13033) | **Feature** | Defers agent and goal declarations by default (lazy tool discovery for `agent`, `list_agents`, `get_goal`, etc.) |
| [#12183](https://github.com/QwenLM/qwen-code/pull/12183) | **Feature** | Loads deployment-managed extensions from directory via `--managed-extensions <root>` |

## 5. Feature Request Trends
- **Managed Agent Runtime maturation**: Authentication (#13210), background Shell/Monitor (#13265), workspace session persistence (#13301), and takeover reliability (#13318, #13320, #13322) dominate recent work
- **Internationalization**: Chinese command aliases requested (#13317)
- **Lazy tool discovery**: Default deferral of agent/goal tools (#13033) extends the on-demand discovery pattern
- **Deployment-managed extensions**: Directory-based extension loading for enterprise deployments (#12183)
- **Workspace context hosting**: Large PR #13168 (+3250 lines) with 11 deferred suggestions indicates major hosted workspace feature approaching completion

## 6. Developer Pain Points
- **Session/Turn reliability in managed mode**: Multiple issues (#13318, #13319, #13320, #13322) reveal race conditions around takeover, transcript integrity, deadline handling, and version compatibility — all reproduced via new e2e test modes (`--takeover-load-loss`, `--turn-deadline`, `--midstream-retry`, `--mixed-version-journal`)
- **Database contention under load**: InnoDB gap-lock deadlocks during same-tenant admission bursts (#13365) and cross-process release races (#13214)
- **Flaky test infrastructure**: HookRunner process reap assertion races (#13356) and dependency CVE audit failures (#13078) disrupt CI
- **Markdown rendering fidelity**: Table delimiter confusion (#13367) affects terminal output quality
- **Review bottleneck on large PRs**: #13168 exceeded 1500-addition closeout fuse with 11 standing suggestions, forcing follow-up issue #13364

---

*Digest generated from GitHub data as of 2026-10-04. All links point to QwenLM/qwen-code repository.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-10-04

## 1. Today's Highlights
The Codewhale TUI project continues its architectural convergence with PR #6815 integrating the 0.10.1 engine, unifying Rust execution, provider identity, permissions, and session management across ACP, child agents, and recursive RLM. A significant Windows stability issue (#6827) was identified where killing `node.exe` during `npm install` terminates the entire Codewhale session without cleanup. Meanwhile, FEAT-027 advances command portability through shared Shapes for `/permissions` and `/status` (#6832).

## 2. Releases
No new releases published in the last 24 hours.

## 3. Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| **#5316** [EPIC-005: CodeWhale TUI Crate Decomposition](https://github.com/Hmbown/Codewhale/issues/5316) | Umbrella epic for modularizing the TUI crate; FEAT-027 draft PR #6832 now submitted, adopting shared command Shapes for `/permissions` and `/status`. | 31 comments, active discussion; core architectural work. |
| **#6418** [Unable to restore session](https://github.com/Hmbown/Codewhale/issues/6418) | Session restoration fails with "saved Runtime store belongs to a different runtime" — blocks developer workflow continuity. | 2 comments; high impact for daily users. |
| **#6827** [Windows: killing node.exe terminates Codewhale with no cleanup](https://github.com/Hmbown/Codewhale/issues/6827) | On Windows npm install, `codewhale` runs as `node.exe → codewhale.exe`; killing the parent `node.exe` orphan-kills the child with no graceful shutdown. | 1 comment; critical Windows reliability gap. |
| **#6328** [Schedule list UI for watches and heartbeat](https://github.com/Hmbown/Codewhale/issues/6328) | UI for named watches, intervals, heartbeat entries, pause/resume; blocked on Core cron routes. | 0 comments; foundational for agent scheduling features. |

## 4. Key PR Progress

| PR | Type | Summary |
|----|------|---------|
| **#6815** [OPEN] | Integration | **0.10.1 engine convergence**: single Rust Engine for execution, provider identity, permissions, events, sessions, storage, accounting; reviewed TS mods reuse authority, cancellation, checkpoints, parent delivery, usage settlement. |
| **#6805** [OPEN] | Feature | **Plugin OAuth AI providers**: reviewed plugin bundles declare named OpenAI-compatible providers and public OAuth clients via `extensions.net.codewhale.providers`; consumed by provider route, model catalog, Chat Completions client, streaming — no companion proxy needed. |
| **#6832** [OPEN] | Refactor | **FEAT-027**: `/permissions` (aliases, `/config` permission-rule routes) and `/status` made independently portable via shared command Shapes; preserves public behavior. |
| **#6820** [CLOSED] | Fix | **Per-call execution policy for Python/JS tools**: `code_execution` and `js_execution` now route interpreter processes through permission-aware launcher (previously launched locally without policy enforcement). |
| **#6830** [CLOSED] | Feature | **Pinned prompt header follows viewport & jumps on click**: header tracks turn viewport starts on (not just newest message); click returns viewport to named message. |
| **#6829** [CLOSED] | Fix | **Diff/tool output wraps at grapheme boundaries**: fixes two remaining `char`-based wrap paths (`diff_render` hard break, tool output) after #4479 moved markdown/UI to grapheme clusters. |
| **#6831** [CLOSED] | Fix | **Context inspector translation**: 12 of 14 packs (excl. zh-Hans/zh-Hant) now show compaction/anchors rows in English — previously untranslated. |
| **#6819** [CLOSED] | Fix | **Config doctor HTTP(S) case-insensitivity**: `to_ascii_lowercase()` before protocol prefix check; accepts `HTTPS://`, `Http://`, etc. |
| **#6806** [CLOSED] | Chore | **Dependabot**: bump `axios` 1.18.1 → 1.20.0 in `/integrations/feishu-bridge` and `/integrations/wecom-bridge`. |

## 5. Feature Request Trends
1. **Command portability & shared Shapes** — FEAT-027 (#6832) continues the pattern from #6793: making CLI commands independently portable via shared Shapes while preserving public APIs.
2. **Plugin extensibility for AI providers** — #6805 enables reviewed plugins to declare OAuth/OpenAI-compatible providers without proxy processes, pointing toward a richer plugin ecosystem.
3. **Agent scheduling & observability** — #6328 (schedule list UI) and heartbeat/watch management indicate demand for production-grade agent orchestration.
4. **Cross-platform process lifecycle** — #6827 highlights Windows-specific gaps in process tree management and graceful shutdown.
5. **Internationalization completeness** — #6831 shows ongoing effort to close translation gaps in UI components (context inspector).

## 6. Developer Pain Points
- **Session persistence reliability** (#6418): Runtime store mismatch prevents session restore — a core workflow blocker.
- **Windows process hygiene** (#6827): npm launcher → `node.exe` → `codewhale.exe` chain lacks signal propagation/cleanup; any `node.exe` kill terminates the session ungracefully.
- **Permission enforcement gaps** (fixed in #6820): Python/JS tool execution previously bypassed per-call policy, launching interpreters directly.
- **Text rendering edge cases** (#6829): Grapheme-cluster alignment still incomplete in diff/tool output paths, causing misaligned keycaps/ZWJ emoji.
- **Config validation fragility** (#6819): Case-sensitive protocol checks reject valid `HTTPS://` URLs — a small but frequent friction point.

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*