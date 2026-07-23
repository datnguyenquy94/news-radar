# OpenClaw Ecosystem Digest 2026-07-23

> Issues: 178 | PRs: 500 | Projects covered: 12 | Generated: 2026-07-23 04:18 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-07-23

## 1. Today's Overview

OpenClaw shows **very high velocity** with 678 total items updated in the last 24 hours (178 issues, 500 PRs). The project is in active maintenance mode with 193 PRs merged/closed and 16 issues closed today, indicating strong throughput. No new release was cut, but the volume of "ready for maintainer look" PRs (several XL-sized) suggests a release candidate may be forming. The issue backlog carries significant technical debt: multiple P1/P0 bugs around session stability, authentication, and cross-platform gaps (Linux/Windows native apps still missing per #75, 80 👍).

## 2. Releases

**No new releases published today.** The latest stable appears to be 2026.7.1-2 (referenced in issues #112696, #112790). Note: Docker `:latest` tag regressed to 2026.6.33 per #112391, blocking upgrades — a release infra issue to watch.

## 3. Project Progress (Merged/Closed Today)

| PR / Issue | Type | Summary |
|------------|------|---------|
| [#112874](https://github.com/openclaw/openclaw/pull/112874) | **Fix (release)** | Fixed frozen Telegram CLI invocation in release validation (EACCES on read-only SUT archive) |
| [#112719](https://github.com/openclaw/openclaw/issues/112719) | **Bug (maintainer)** | Setup-required plugins fail install/uninstall validation — closed |
| [#112718](https://github.com/openclaw/openclaw/issues/112718) | **Bug (maintainer)** | Plugin lifecycle commands race across processes — closed |
| [#112688](https://github.com/openclaw/openclaw/issues/112688) | **Bug (iOS)** | Markdown list items truncate with ellipses when text wraps — closed |
| [#111858](https://github.com/openclaw/openclaw/issues/111858) | **Bug (Discord)** | Raw bot mentions dropped when REST hydration fails — closed |
| [#109567](https://github.com/openclaw/openclaw/issues/109567) | **Fix (OpenAI)** | Bound realtime-voice WebSocket with handshakeTimeout — closed |
| [#112002](https://github.com/openclaw/openclaw/issues/112002) | **Enhancement** | Add OpenClaw Settings chat on iOS/Android — closed (likely deferred/duplicated) |
| [#102360](https://github.com/openclaw/openclaw/issues/102360) | **Bug (crestodian)** | approval-intent classifier uses flagship model instead of utilityModel — closed |

**Theme:** Platform stability fixes (iOS, Discord, Telegram, release tooling) and plugin lifecycle hardening. Several maintainer-filed issues closed rapidly, suggesting internal dogfooding pressure.

## 4. Community Hot Topics (Most Comments/Reactions)

| Item | Comments | 👍 | Core Need |
|------|----------|-----|-----------|
| [#75](https://github.com/openclaw/openclaw/issues/75) **Linux/Windows Clawdbot Apps** | 115 | 80 | **Native desktop apps for Linux/Windows** — longest-standing gap (open since Jan 2026), macOS/iOS/Android exist. Users want feature parity. |
| [#92043](https://github.com/openclaw/openclaw/issues/92043) **180s compaction timeout kills long summarizations** | 12 | 3 | Compaction timeout too aggressive for slow/local models; no partial-progress reuse → death loop on reboot (#95750 related). |
| [#65538](https://github.com/openclaw/openclaw/issues/65538) **Screen readers announce every streaming token** | 7 | 1 | Accessibility regression: `aria-live="polite"` on streaming output fragments speech for NVDA/JAWS users. |
| [#12219](https://github.com/openclaw/openclaw/issues/12219) **Skill Permission Manifest Standard (skill.yaml)** | 6 | 0 | Security: skills run with full trust; no permission declaration or user consent flow. Recent credential-stealer incidents cited. |
| [#99054](https://github.com/openclaw/openclaw/issues/99054) **Teams app re-add retains prior DM history** | 6 | 1 | Session state leak: removing/re-adding Teams bot resumes old server-side session, exposing pre-removal history. |

**Underlying signals:**  
- **Cross-platform parity** is the #1 community ask (#75, #112876 for Android/Termux).  
- **Session durability & recovery** is fragile: compaction timeouts (#92043), reboot death-loops (#95750), pointer retention (#107750).  
- **Security hardening** needed: skill permissions (#12219), TLS pinning with Cloudflare (#107575), silent paid-model substitution (#103520).  
- **Accessibility** regressed in streaming UI (#65538).

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **P0 / Crash-loop** | [#107575](https://github.com/openclaw/openclaw/issues/107575) TLS cert pin mismatch loop with Cloudflare Tunnel (anycast edge certs) | Open | No |
| **P1 / Crash-loop** | [#112867](https://github.com/openclaw/openclaw/issues/112867) Voice Wake migration conflict → permanent Gateway startup refusal | Open | **Yes: [#112871](https://github.com/openclaw/openclaw/pull/112871)** |
| **P1 / Crash-loop** | [#111879](https://github.com/openclaw/openclaw/issues/111879) Parallel Codex hook relays exhaust gateway resources (172 tasks, 1.4/1.5 GiB) | Open | No |
| **P1 / Session-state** | [#92043](https://github.com/openclaw/openclaw/issues/92043) 180s compaction timeout fails long summarizations identically every turn | Open | Linked PR open |
| **P1 / Session-state** | [#95750](https://github.com/openclaw/openclaw/issues/95750) Main-session restart-recovery has no cross-boot retry budget → death-loop across reboots | Open | No |
| **P1 / Message-loss** | [#109471](https://github.com/openclaw/openclaw/issues/109471) Mattermost tool-error warning deletes finalized streaming reply | Open | No |
| **P1 / Auth** | [#109704](https://github.com/openclaw/openclaw/issues/109704) Bundled Codex CLI invalidates ChatGPT OAuth via ambient `CODEX_HOME` | Open | No |
| **P1 / Regression** | [#106080](https://github.com/openclaw/openclaw/issues/106080) Model cost reports $0 since 2026.6.10 — `model_capability_cache` never populates | Open | No |
| **P1 / Availability** | [#77249](https://github.com/openclaw/openclaw/issues/77249) Reconnect supervisor hangs on zombie WSS — no event/log, requires manual restart | Open | No |
| **P2 / UX** | [#112696](https://github.com/openclaw/openclaw/issues/112696) Control UI 2026.7.1-2: agent avatar + session list regressions in multi-agent setup | Open | No |
| **P2 / Regression** | [#112391](https://github.com/openclaw/openclaw/issues/112391) Docker `:latest` tag regressed to 2026.6.33, triggering downgrade guard | Open | No |

**Critical cluster:** Session/compaction stability (#92043, #95750, #107750) + Gateway resource leaks (#107641, #111879) + Auth/Cloudflare issues (#107575, #109704) form a high-risk surface for production operators.

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood for Next Version |
|---------|-------|----------------------------|
| **Linux/Windows native apps** | [#75](https://github.com/openclaw/openclaw/issues/75) (80 👍) | Medium — long-standing, needs dedicated effort; no PR visible |
| **Skill permission manifest (skill.yaml)** | [#12219](https://github.com/openclaw/openclaw/issues/12219) | High — security-driven, RFC-level, maintainer-tagged |
| **Config pre-apply validation hook** | [#9993](https://github.com/openclaw/openclaw/issues/9993) | High — prevents agent-caused gateway crashes; real incident cited |
| **Mid-stream message injection (soft steer)** | [#10960](https://github.com/openclaw/openclaw/issues/10960) | Medium — UX differentiator; linked PR open |
| **Agents.list[].subagents.allowedModels** | [#90763](https://github.com/openclaw/openclaw/issues/90763) | Medium — config-level model restriction for subagents |
| **Context window % in system prompt runtime** | [#38568](https://github.com/openclaw/openclaw/issues/38568) | Low — P3, stale, but low-effort visibility win |
| **Agentic Search / code retrieval** | [#112843](https://github.com/openclaw/openclaw/issues/112843) | Low — new, exploratory; references external blog |
| **Android via Termux+proot docs/support** | [#112876](https://github.com/openclaw/openclaw/issues/112876) | Medium — growing niche, sdcardfs hazards documented |

**Strongest signals:** Security hardening (skill perms, config validation), platform parity (Linux/Windows/Android), and operator guardrails (pre-apply hooks, model restrictions).

## 7. User Feedback Summary

**Pain points (from issue descriptions):**
- **"Windows Hub node mode gets stuck in approval/repair loop and falls back to invalid bootstrap token"** (#112711) — onboarding friction on Windows.
- **"Anthropic (claude-cli OAuth) intermittently disappears from model selector"** (#112848) — OAuth snapshot staleness breaks model picker.
- **"Native iOS app does not render assistant media attachments; same file works via WhatsApp"** (#112790) — iOS app rendering gap.
- **"Telegram queued follow-ups lose typing and tool-progress drafts"** (#112814) — UX regression in queued messaging.
- **"DuckDuckGo (requiresCredential=false) never auto-selected as web_search provider"** (#97880) — tool registration without provider assignment.
- **"openclaw models list crashes with TypeError when Anthropic Sonnet 5 ref not resolvable"** (#112680) — CLI hard crash on bad model ref.

**Positive signals:**  
- Active dogfooding: maintainers filing and closing bugs rapidly (#112718, #112719, #112867→#112871).  
- Community contributing fixes: #112871 (Voice Wake), #111836 (exa UTF-8), #112855 (doctor lock detection).  
- RFC-driven features progressing: Standard hosting profiles (#107765), Ordered config layers (#107026), Command catalog (#100960, #104158-60).

## 8. Backlog Watch (Long-Unanswered / Needs Maintainer)

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#75](https://github.com/openclaw/openclaw/issues/75) **Linux/Windows Clawdbot Apps** | 204 days | Highest community demand (80 👍), blocks platform parity; tagged `needs-maintainer-review`, `needs-product-decision`, `needs-security-review` |
| [#12219](https://github.com/openclaw/openclaw/issues/12219) **Skill Permission Manifest** | 165 days | Security foundation; recent incidents; needs design decision |
| [#9993](https://github.com/openclaw/openclaw/issues/9993) **Config pre-apply hook** | 168 days | Prevents agent-caused gateway crashes; real incident 2026-02-05 |
| [#92043](https://github.com/openclaw/openclaw/issues/92043) **Compaction timeout death-loop** | 43 days | P1, causes unrecoverable failure on slow models; linked PR open but stalled |
| [#95750](https://github.com/openclaw/openclaw/issues/95750) **No cross-boot retry budget** | 31 days | Sessions death-loop gateway across reboots; critical for reliability |
| [#107575](https://github.com/openclaw/openclaw/issues/107575) **TLS pin mismatch with Cloudflare** | 9 days | P0, blocks Cloudflare Tunnel users; anycast edge certs break pinning |
| [#107641](https://github.com/openclaw/openclaw/issues/107641) **Hook child processes accumulate → event-loop starvation** | 9 days | Resource leak under load; affects self-hosted on small VPS |
| [#77249](https://github.com/openclaw/openclaw/issues/77249) **Reconnect supervisor hangs on zombie WSS** | 80 days | Slack socket-mode reliability; no events emitted, manual restart required |
| [#89039](https://github.com/openclaw/openclaw/pull/89039) **Prevent silent message loss from EmbeddedAttemptSessionTakeoverError** | 52 days | XL PR, waiting on author; message loss on SDK retry |
| [#97175](https://github.com/openclaw/openclaw/pull/97175) **Bound deferred turn maintenance with per-task timeout** | 26 days | XL PR, waiting on author; prevents maintenance lane wedge |

**Recommendation:** Prioritize #92043, #95750, #107575, #107641 for stability; #75, #12219, #9993 for roadmap clarity. Several XL PRs (#107765, #107026, #100960, #104158-60) are "ready for maintainer look" — clearing these would unblock hosting profiles, config layers, and command catalog features.

---

**Project Health Indicator:** 🟡 **Active but strained** — High throughput, but critical P0/P1 bugs accumulating in session durability, auth, and resource management. Platform parity gaps persist. Maintainer bandwidth appears split between infra refactors (test consolidation, command catalog) and fire-fighting. Next release should target stability cluster (#92043, #95750, #107575, #107641) + Docker tag fix (#112391).

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Open-Source AI Agent/Assistant Ecosystem (2026-07-23)

---

## 1. Ecosystem Overview

The personal AI agent ecosystem shows **bimodal maturity**: a cluster of high-velocity, pre-1.0 projects (OpenClaw, IronClaw, ZeroClaw, CoPaw, NanoBot, Hermes) iterating rapidly toward launch-grade stability, and a set of specialized or maintenance-mode projects (PicoClaw, NanoClaw, LobsterAI, Moltis, NullClaw) addressing niche protocols or polishing desktop UX. **No project has shipped a major release in the last 24 hours**, but several (CoPaw, IronClaw, OpenClaw) are in visible release-candidate stabilization. Cross-cutting pressures include **session durability**, **multi-provider auth**, **security hardening** (skill permissions, config validation), and **cross-platform parity** (Linux/Windows native apps). The ecosystem is coalescing around **agent-as-a-platform** architectures with plugin/skill systems, gateway services, and multi-channel delivery (Slack, Telegram, Discord, WebUI).

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged PRs | Release Status | Health Score |
|---------|--------------|-----------|------------|----------------|--------------|
| **OpenClaw** | 178 | 500 | 193 | No release; Docker `:latest` regressed | 🟡 Active but strained |
| **NanoBot** | 5 | 61 | 38 | No release; RC likely imminent | 🟢 Healthy |
| **Hermes Agent** | 6 | 50 | 14 | No release; patch expected in 1–2 wks | 🟢 Healthy |
| **IronClaw** | 20 | 50 | 25 | v1.0.0-rc.1 stabilization branches active | 🟡 Pre-launch intensity |
| **ZeroClaw** | 6 | 50 | 0 | No release; 50 open PRs, zero merges | 🟡 High velocity, integration bottleneck |
| **CoPaw** | 19 | 50 | 13 | **v2.0.0.post4 released** (reasoning loop fix) | 🟡 Post-v2.0 stabilization |
| **NanoBot** | 5 | 61 | 38 | No release; RC likely imminent | 🟢 Healthy |
| **LobsterAI** | 1 | 6 | 5 | No release; stabilization/polish phase | 🟢 Stable |
| **PicoClaw** | 3 | 5 | 2 | No release; v0.3.1 current | 🟡 Moderate maintenance |
| **NanoClaw** | 1 | 3 | 0 | No release; incremental improvements | 🟡 Steady |
| **Moltis** | 0 | 1 | 0 | No release; quiet maintenance | 🟢 Quiet |
| **NullClaw** | 1 | 1 | 1 | No release; critical bug fixed | 🟢 Healthy |
| **ZeptoClaw** | 0 | 0 | 0 | No activity | ⚪ Dormant |

*Health Score: 🟢 Healthy = high throughput + stability focus; 🟡 Active but strained = high throughput + accumulating P0/P1 bugs; 🟡 Pre-launch/Stabilization = intense activity targeting release blockers.*

---

## 3. OpenClaw's Position

**Advantages vs Peers:**
- **Largest community signal**: #75 (Linux/Windows apps) has 80 👍 and 115 comments — highest engagement across all projects.
- **Broadest channel coverage**: Native iOS/Android/macOS + Slack/Discord/Telegram/Mattermost/Teams + CLI/TUI/WebUI.
- **Deep operator tooling**: Release validation, config pre-apply hooks (#9993), command catalog, standard hosting profiles.
- **Dogfooding culture**: Maintainers file/close bugs rapidly (e.g., #112718, #112719, #112867→#112871).

**Technical Approach Differences:**
- **Gateway-centric architecture**: Centralized session/compaction/routing layer (source of P0/P1 bugs: #92043, #95750, #107750).
- **Plugin/skill model**: Currently trust-based; skill.yaml permission manifest (#12219) is the key differentiator vs NanoBot's MCP tools, IronClaw's manifest-driven extensions, CoPaw's ToolGuard.
- **Multi-agent via subagents**: Not yet persistent/collaborative (cf. NanoBot #5000 strategic pivot).

**Community Size**: Highest visible demand (80 👍 on #75) and issue volume (178/24h), but maintainer bandwidth split between infra refactors and fire-fighting.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|-------------|----------|----------------|
| **Session durability & recovery** | OpenClaw (#92043, #95750, #107750), Hermes (#61932, #58512), ZeroClaw (#7673 RFC), CoPaw (#6372) | Compaction timeout tuning, cross-boot retry budgets, protected-tail handling, idle cleanup safety |
| **Multi-provider OAuth & auth isolation** | NanoBot (#5035 xAI, #4689 status), OpenClaw (#109704 Codex, #107575 Cloudflare), ZeroClaw (#9273–#9276 Ollama/Z.AI/Kimi/MiniMax), NanoClaw (#3118 doc gap), IronClaw (#6534 Google OAuth) | PKCE flows, token refresh, per-group isolation, expiry visibility, Cloudflare TLS pinning |
| **Security hardening: skill/extension permissions** | OpenClaw (#12219 skill.yaml), IronClaw (#6527 admin-managed users, #6531 runtime OAuth), Hermes (#66570 MCP subagent_only), CoPaw (#6369 governance audit, #6379 UI for policy) | Declaration manifests, user consent, runtime enforcement, admin-managed identities |
| **Config validation & pre-apply hooks** | OpenClaw (#9993), IronClaw (ProductSurface routing), ZeroClaw (#9278 context_compression default ignored) | Prevent agent-caused gateway crashes, schema validation, runtime config consumption |
| **Cross-platform native apps** | OpenClaw (#75 Linux/Windows, #112876 Android/Termux), PicoClaw (gateway mode), LobsterAI (Windows installer #2377), CoPaw (#6239 Windows PATH, #5187 UIA/Tauri) | Feature parity, workspace jail fixes, HDD-friendly updates, desktop automation |
| **Evaluation & regression frameworks** | ZeroClaw (10-PR eval stack #9212–#9248), IronClaw (#4775 automated QA, #6524 hermetic platform), CoPaw (#6302 model discovery) | Live execution, LLM-judge grading, baseline gating, JUnit, pass@k, capability tracking |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | NanoBot | Hermes | IronClaw | ZeroClaw | CoPaw | PicoClaw | LobsterAI |
|-----------|----------|---------|--------|----------|----------|-------|----------|-----------|
| **Core Architecture** | Gateway + subagents | Single-agent + MCP tools | Gateway + desktop + Slack | ProductSurface + Reborn runtime | Daemon + WASM skills + eval framework | Multi-agent + ToolGuard + AG-UI | Lightweight gateway + protocol adapters | Desktop Electron + OpenClaw backend |
| **Target User** | Self-hosted operators, power users | Developers, multi-channel bot operators | Slack-first teams, desktop users | NEAR ecosystem, hosted/self-hosted | Autonomous agent builders, eval-driven | Chinese dev ecosystem, multi-modal | Embedded/IoT, protocol integrators | Desktop agent UX, personalization |
| **Agent Model** | Subagents (fire-and-forget) | Evolving to persistent multi-agent (#5000) | Subagents + MCP delegation | Capabilities + journeys + extensions | Deterministic WASM skills + local-small | Multi-agent with safety gates | Single-agent per session | Single-agent + cowork UI |
| **Extension System** | Plugins (trust-based) → skill.yaml (RFC) | MCP tools + skills | MCP subagent_only scope | Manifest-driven extensions (generic) | WASM-compiled skills (deterministic) | ToolGuard + PawApp + AG-UI | Protocol adapters (DingTalk, DeltaChat) | Skills (stale PR), AI skins |
| **Delivery Channels** | Slack, Discord, Telegram, Teams, Mattermost, CLI, WebUI, iOS, Android, macOS | Telegram, Slack, Feishu, WebUI, CLI | Slack, Desktop, CLI | Telegram, Slack, Google Suite, OpenAI compat | Telegram, Discord, custom channels | Telegram, WebUI, Console, AG-UI endpoint | IRC, DingTalk, DeltaChat, Gateway | Desktop (Win/macOS/Linux), WebUI |
| **Differentiator** | Operator tooling breadth, community scale | Strategic pivot to agent societies | Slack gateway reliability, desktop parity | ProductSurface unification, NEAR integration | WASM skills + live eval framework | Governance/ToolGuard, AG-UI, Creator app | Protocol breadth, low resource | AI skin theming, Windows installer hardening |

---

## 6. Community Momentum & Maturity

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Rapid Iteration (Pre-1.0 Launch)** | IronClaw, ZeroClaw, OpenClaw, CoPaw, NanoBot | 50+ PRs/24h, launch-blocker issues, release-candidate branches, architectural migrations in flight |
| **Stabilizing / Polishing** | Hermes, LobsterAI, NullClaw | High PR throughput but focused on bugs/UX, patch releases imminent, lower architectural risk |
| **Steady Maintenance / Niche** | PicoClaw, NanoClaw, Moltis | <10 PRs/24h, protocol-specific features, low community churn, maintainer-bandwidth constrained |
| **Dormant** | ZeptoClaw | No activity |

**Key Signals:**
- **IronClaw** and **ZeroClaw** show the most coordinated engineering investment (ProductSurface unification, 10-PR eval stack).
- **CoPaw** shipped the only patch release (v2.0.0.post4) but faces severe v2.0 regression backlash (#6307 2s overhead, #6376 crashes).
- **OpenClaw** has highest community demand but accumulating critical-path bugs (session, auth, resource leaks).
- **NanoBot** and **Hermes** demonstrate healthy "merge-and-stabilize" cadences with clear next-release scope.

---

## 7. Trend Signals for AI Agent Developers

1. **Agent Societies > Single Agents**: NanoBot #5000 (multi-agent collaboration), OpenClaw subagent model restrictions (#90763), IronClaw capabilities/journeys, ZeroClaw WASM skills — all point to **persistent, state-sharing, intercommunicating agent teams** as the next abstraction layer.

2. **Security Boundaries Are Hardening**: Skill/extension permission manifests (OpenClaw #12219, IronClaw #6527, Hermes #66570, CoPaw ToolGuard) and config pre-apply validation (OpenClaw #9993) are becoming **table stakes for production deployments**.

3. **Evaluation as CI Gate**: ZeroClaw's 10-PR eval framework (live runs, LLM-judge, baseline regression) and IronClaw's hermetic testing platform (#6524) signal **automated, statistically rigorous agent evaluation** moving into CI pipelines.

4. **Local-First & Cost Optimization**: ZeroClaw `local_small` profile (#5287), NanoBot idle compaction config (#5036), OpenClaw utilityModel for classifiers (#102360), LobsterAI OOM guards — **small-model routing, prompt budgets, and resource-aware scheduling** are cross-cutting concerns.

5. **Multi-Channel Is Standard, Multi-Tenant Is Emerging**: Every active project supports 3+ channels; NanoBot Telegram multi-bot (#5033), IronClaw admin-managed users (#6527), OpenClaw session isolation (#99054 Teams leak) show **tenant isolation and per-channel config** as the next maturity step.

6. **Desktop Parity Is a Competitive Axis**: LobsterAI Windows installer hardening, CoPaw UIA/Tauri automation, PicoClaw gateway mode, OpenClaw #75 (80 👍) — **native desktop experience (not just WebUI) drives adoption** for personal assistants.

7. **Provider Abstraction Leaks Are Top Pain Points**: OpenClaw Codex/Anthropic OAuth, NanoBot xAI/MiniMax, ZeroClaw Kimi/Ollama/Z.AI, CoPaw GLM/DeepSeek tool-call parsing — **vendor-specific streaming, reasoning, and auth quirks** consume disproportionate engineering effort.

---

**Bottom Line for Decision-Makers**: The ecosystem is converging on **gateway + plugin/skill + multi-channel + eval** as the reference architecture. Projects that solve **session durability**, **permission manifests**, and **local-first cost control** while delivering **native desktop parity** will capture the next wave of self-hosted and enterprise adoption. OpenClaw leads on community breadth but must resolve its stability cluster; IronClaw and ZeroClaw show the most rigorous engineering discipline for 1.0-grade releases.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-23

## 1. Today's Overview
NanoBot shows **high development velocity** with 61 PRs updated and 5 issues touched in the last 24 hours. The project is in active feature expansion mode—major work includes multi-provider OAuth (xAI Grok), Telegram multi-bot support, WebUI performance overhauls (SQLite-indexed history), and a strategic proposal to evolve subagents into true multi-agent collaboration. Stability work is also prominent: 15+ bug-fix PRs target cron/store null-safety, channel markdown rendering, and pairing config crashes. No new release was cut today, but the merged/closed PR count (38) suggests a release candidate may be imminent.

## 2. Releases
**No new releases today.** The last published version remains whatever was current before 2026-07-23. Given the volume of merged PRs (38), maintainers are likely accumulating changes for a near-term minor or patch release.

## 3. Project Progress — Merged / Closed PRs Today (38)
| PR | Area | Summary |
|----|------|---------|
| [#5035](https://github.com/HKUDS/nanobot/pull/5035) | **Provider / Auth / WebUI** | **Merged.** Native xAI Grok OAuth 2.0 + PKCE with isolated token storage, proactive refresh, and capability-gated X Search for `grok-4.5`. |
| [#5048](https://github.com/HKUDS/nanobot/pull/5048) | **Documentation** | **Merged.** Explains slow optional-dependency installs at gateway startup and documents `PIP_INDEX_URL` for air-gapped / systemd deployments. |
| [#4988](https://github.com/HKUDS/nanobot/pull/4988) | **Agent / Bug** | **Merged.** Background (cron/local-trigger) turns no longer emit the `EMPTY_FINAL_RESPONSE_MESSAGE` placeholder when the model returns empty text—silences noisy cron output. |
| [#5044](https://github.com/HKUDS/nanobot/pull/5044) | **Security / Pairing** | **Merged.** Null `approved` channel lists in `pairing.json` now treated as empty allow-lists instead of crashing `is_approved`. |
| [#5043](https://github.com/HKUDS/nanobot/pull/5043) | **Cron / Stability** | **Merged.** Null `runHistory` elements skipped on `jobs.json` load (mirrors `LocalTrigger.from_dict` behavior). |
| [#5042](https://github.com/HKUDS/nanobot/pull/5042) | **Cron / Stability** | **Merged.** Null `schedule` on a job defaults to `kind=every` instead of quarantining the entire cron store. |
| [#5046](https://github.com/HKUDS/nanobot/pull/5046) | **Channel / Feishu** | **Merged.** Fenced markdown tables no longer become Feishu card `table` elements (stash/restore before table scan). |
| [#5045](https://github.com/HKUDS/nanobot/pull/5045) | **Channel / Slack** | **Merged.** Same fence protection for Slack `_to_mrkdwn` table rewrite. |
| [#5047](https://github.com/HKUDS/nanobot/pull/5047) | **WebUI / MCP** | **Merged.** Parallel Search MCP preset added (free, keyless `web_search` + `web_fetch`). |
| [#5036](https://github.com/HKUDS/nanobot/pull/5036) | **Agent / Performance** | **Merged.** Idle compaction scan interval now configurable (addresses 30–40 % CPU on Raspberry Pi). |

*Other merged PRs include assorted test hardening, dependency bumps, and doc tweaks.*

## 4. Community Hot Topics (Most Active / Strategic)
| Item | Type | Signals |
|------|------|---------|
| [#5000](https://github.com/HKUDS/nanobot/issues/5000) | **Issue (4 comments)** | **Strategic pivot request:** Evolve subagents from fire-and-forget tasks → persistent, state-sharing, multi-agent collaboration. Author argues current model lacks identities, shared state, and inter-agent comms. |
| [#5033](https://github.com/HKUDS/nanobot/pull/5033) | **PR (open, p1)** | **Telegram multi-bot:** Backward-compatible multi-instance config with per-bot tokens, proxies, sessions, and enable flags. High operational demand. |
| [#5017](https://github.com/HKUDS/nanobot/pull/5017) | **PR (open, p1, conflict)** | **WebUI fallback visibility:** Real-time badge showing actual model after fallback, with provider identity and reduced-motion support. UX pain point for multi-provider setups. |
| [#5003](https://github.com/HKUDS/nanobot/pull/5003) | **PR (open, p1, conflict)** | **WebUI history indexing:** SQLite WAL replaces JSONL reads; batched writes, paged by turn ordinals. Targets large-history lag. |
| [#4689](https://github.com/HKUDS/nanobot/pull/4689) | **PR (open, p1, conflict)** | **OAuth status UX:** Cross-surface (CLI/WebUI/runtime) token expiry warnings and provider status helpers. Addresses silent auth failures. |

**Underlying needs:** Operators want **production-grade multi-tenancy** (Telegram multi-bot, Feishu listen-mode [#5009]), **observability** (fallback visibility, OAuth warnings), and **architectural leap** toward agent societies (#5000).

## 5. Bugs & Stability — Reported Today (Ranked by Severity)
| Severity | Issue | Fix PR? | Notes |
|----------|-------|---------|-------|
| **High** | [#5041](https://github.com/HKUDS/nanobot/issues/5041) Dream cursor stall — completed no-op batches don’t advance `.dream_cursor`, starving later history indefinitely. | No | Distinct from #4055; blocks durable-memory rotation. |
| **High** | [#5040](https://github.com/HKUDS/nanobot/issues/5040) MCP tool schema with non-`#/$defs/` `$ref` forwarded verbatim; breaks strict providers (Kimi/Moonshot). | No | Schema validation failure disables entire model. |
| **Medium** | [#5028](https://github.com/HKUDS/nanobot/issues/5028) Media path vs. workspace restriction conflict — Feishu uploads land in sibling `media/` dir, become unreadable under workspace jail. | No | Affects Feishu integration usability. |
| **Medium** | [#4948](https://github.com/HKUDS/nanobot/issues/4948) WebUI visibility lost when late subagent completion starts system turn without WebUI delivery lifecycle. | **Closed** (no PR linked) | Likely fixed in recent WebUI refactor; verify. |
| **Low** | [#5044/5043/5042](https://github.com/HKUDS/nanobot/pull/5044) Null-safety in pairing/cron stores (crash on load). | **Yes (merged)** | All three merged today. |

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Multi-agent collaboration framework** | [#5000](https://github.com/HKUDS/nanobot/issues/5000) | Medium — architectural, may start as experimental flag. |
| **Telegram multi-bot support** | [#5033](https://github.com/HKUDS/nanobot/pull/5033) | **High** — p1, backward-compatible, near merge. |
| **WebUI fallback model badge** | [#5017](https://github.com/HKUDS/nanobot/pull/5017) | **High** — p1, UX-critical for multi-provider users. |
| **SQLite-indexed WebUI history** | [#5003](https://github.com/HKUDS/nanobot/pull/5003) | **High** — p1, performance blocker for power users. |
| **Feishu `groupPolicy: listen`** | [#5009](https://github.com/HKUDS/nanobot/pull/5009) | Medium — p1 but conflicted; needs rebase. |
| **Parallel Search MCP preset** | [#5047](https://github.com/HKUDS/nanobot/pull/5047) | **High** — merged today, zero-config value add. |
| **Idle compaction interval config** | [#5036](https://github.com/HKUDS/nanobot/pull/5036) | **High** — merged, Raspberry Pi friendly. |
| **OAuth status/expiry warnings** | [#4689](https://github.com/HKUDS/nanobot/pull/4689) | Medium — p1 but conflicted; strong user demand. |
| **Xiaozhi voice gateway (ESP32)** | [#2584](https://github.com/HKUDS/nanobot/pull/2584) | Low — long-open, conflicted, niche hardware. |

## 7. User Feedback Summary
- **Pain points:**  
  - WebUI history lag on long conversations (#5003).  
  - Silent fallback model switches confuse users (#5017).  
  - Cron/store crashes on malformed JSON (nulls) — now fixed.  
  - Feishu file uploads break under workspace jail (#5028).  
  - Dream memory rotation stalls silently (#5041).  
  - MCP schema `$ref` incompatibility with strict CN providers (#5040).  
- **Delighters:**  
  - xAI Grok OAuth + X Search shipped (#5035).  
  - Parallel Search MCP preset “just works” (#5047).  
  - Idle CPU drop on Pi via configurable compaction (#5036).  
  - Telegram multi-bot config in progress (#5033).  
- **Strategic ask:** Treat subagents as first-class persistent agents (#5000) — signals maturing user base building agent teams, not just chatbots.

## 8. Backlog Watch — Stale / High-Impact Items Needing Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#2584](https://github.com/HKUDS/nanobot/pull/2584) Xiaozhi voice gateway | 4 months | Hardware/voice niche; conflicts block merge. Needs maintainer triage: accept, split, or close. |
| [#4439](https://github.com/HKUDS/nanobot/pull/4439) `search_history` read-only tool | 1 month | Memory recall primitive; blocked by conflicts. Unlocks agent self-reflection. |
| [#4446](https://github.com/HKUDS/nanobot/pull/4446) DingTalk private-chat gate & mention | 1 month | Enterprise channel polish; low review bandwidth. |
| [#4494](https://github.com/HKUDS/nanobot/pull/4494) WebUI PWA + swipe sidebar | 1 month | Mobile UX; re-opened after branch delete. |
| [#4689](https://github.com/HKUDS/nanobot/pull/4689) OAuth status/expiry warnings | 3 weeks | Cross-surface auth observability; conflicted but high user value. |
| [#5000](https://github.com/HKUDS/nanobot/issues/5000) Multi-agent collaboration proposal | 3 days | Strategic direction; needs maintainer RFC/design review before PRs land. |

---

**Health Indicators**  
- ⚡ **Velocity:** Very high (61 PR touches / day).  
- 🛡 **Stability focus:** 15+ bug-fix PRs merged today; null-safety hardening.  
- 🎯 **Strategic clarity:** Mixed — strong incremental features, but #5000 shows architectural debate not yet resolved.  
- 📦 **Release risk:** Low — no breaking changes in merged set; config-additive features dominate.  

**Next watch:** Merge of #5033, #5017, #5003 will likely trigger a vX.Y.Z release. Resolution of #5000 will define H2 2026 roadmap.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-07-23

## 1. Today's Overview
Hermes Agent shows **high development velocity** with 50 PRs updated in 24 hours (14 merged/closed), indicating an active sprint focused on stabilization across Slack gateway, desktop app, MCP tooling, session compression, and credential management. No new releases were cut today, suggesting the team is accumulating fixes for a near-term patch or minor release. The issue-to-PR ratio (6 issues vs. 50 PRs) reflects a mature project where many improvements are internally driven (refactors, test coverage, linting) alongside user-reported bugs.

## 2. Releases
**No new releases published today.** The latest release data is empty, implying the current main branch is in a pre-release accumulation phase. Users should watch for a v0.x or v1.x patch containing the merged fixes below.

## 3. Project Progress — Merged / Closed PRs (14)
| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#69797](https://github.com/NousResearch/hermes-agent/pull/69797) | fix(desktop): split steer and queue keyboard shortcuts | Desktop / UX | Restores Enter = steer, Ctrl/Cmd+Enter = queue; tooltips updated. |
| [#69823](https://github.com/NousResearch/hermes-agent/pull/69823) | fmt(js): `npm run fix` auto-fix | Code quality | Automated lint/formatting sync; auto-merges on CI pass. |
| [#43747](https://github.com/NousResearch/hermes-agent/issues/43747) | [Bug] openai-codex credential pool marks healthy account as usage_limit_reached | Auth / Providers | **Closed** — credential pool logic fixed; `hermes auth reset` workaround no longer needed. |
| [#19688](https://github.com/NousResearch/hermes-agent/issues/19688) | Slack slash-command replies silently truncated/dropped | Gateway / Slack | **Closed** — response_url delivery hardening. |
| [#51019](https://github.com/NousResearch/hermes-agent/issues/51019) | Slack gateway evicts arbitrary thread timestamps | Gateway / Slack | **Closed** — replaced set-pop eviction with ordered LRU. |
| [#59097](https://github.com/NousResearch/hermes-agent/issues/59097) | Slack async/cron deliveries routed to stale thread | Gateway / Slack | **Closed** — home-channel routing restored for `/sethome`. |

*Other merged PRs (not individually listed) include routine dependency bumps, test additions, and CI hardening.*

## 4. Community Hot Topics (Most Discussed / High-Signal)
| Item | Type | Comments/Reactions | Core Need |
|------|------|-------------------|-----------|
| [#69483](https://github.com/NousResearch/hermes-agent/pull/69483) | PR | High discussion | **Multi-agent Slack reply storms** — peer-bot gating, edited-mention dedup, per-channel overrides. Critical for shared Slack workspaces. |
| [#66570](https://github.com/NousResearch/hermes-agent/pull/66570) | PR | High discussion | **MCP subagent-only tool scope** — opt-in visibility for delegated agents only; security/compatibility implications debated. |
| [#69825](https://github.com/NousResearch/hermes-agent/issues/69825) | Issue | 1 comment | **Shell hooks never fire in `serve`/`dashboard`** — root cause identified; fix PR [#69832](https://github.com/NousResearch/hermes-agent/pull/69832) open. |
| [#69820](https://github.com/NousResearch/hermes-agent/issues/69820) | Issue | 0 comments | **Session ID leakage in `execute_code`** — concurrency bug where child processes inherit wrong `HERMES_SESSION_ID`. |

**Underlying theme:** Multi-tenancy safety (Slack, MCP delegation) and desktop/serve parity are top concerns.

## 5. Bugs & Stability — Today’s Reports (Ranked by Severity)
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | [#69825](https://github.com/NousResearch/hermes-agent/issues/69825) `serve`/`dashboard` never register shell hooks | Open | [#69832](https://github.com/NousResearch/hermes-agent/pull/69832) (open) |
| **High** | [#69820](https://github.com/NousResearch/hermes-agent/issues/69820) `execute_code` inherits another request’s session ID | Open | — |
| **Medium** | [#69808](https://github.com/NousResearch/hermes-agent/issues/69808) Desktop credit notices never shown | Open | [#69828](https://github.com/NousResearch/hermes-agent/pull/69828) (open) |
| **Medium** | [#61932](https://github.com/NousResearch/hermes-agent/issues/61932) Compression dead-end on oversized protected tail | Open | [#69830](https://github.com/NousResearch/hermes-agent/pull/69830) (open) |
| **Low** | [#69823](https://github.com/NousResearch/hermes-agent/pull/69823) JS lint drift | Merged (auto) | — |

*Previously reported Slack gateway bugs (#19688, #51019, #59097) are now closed with fixes merged.*

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Release |
|--------|--------|-----------------------------|
| **MCP `subagent_only` tool scope** | [#66570](https://github.com/NousResearch/hermes-agent/pull/66570) | High — PR open, active debate, security-labeled |
| **Unified timeout config across CLI/TUI/Gateway** | [#69774](https://github.com/NousResearch/hermes-agent/pull/69774) | High — supersedes 3 prior PRs, P2 |
| **Cron ticker deference to live gateway** | [#67418](https://github.com/NousResearch/hermes-agent/pull/67418) | Medium — P2, desktop/dashboard coexistence |
| **MiniMax M3 adaptive thinking preservation** | [#66694](https://github.com/NousResearch/hermes-agent/pull/66694) | Medium — provider-specific, low blast radius |
| **Portal MCP server management guide** | [#69829](https://github.com/NousResearch/hermes-agent/pull/69829) | Low — docs-only, merges independently |

## 7. User Feedback Summary
- **Pain points:** Slack reliability (truncated replies, thread eviction, wrong-channel delivery) historically eroded trust; today’s fixes address the cluster.
- **Desktop parity:** Users expect `serve`/`dashboard` to behave like CLI (hooks, shortcuts, credit toasts) — gaps actively being closed.
- **Credential opacity:** openai-codex pool misreporting (#43747) caused silent failures; users want healthier pool observability.
- **Concurrency safety:** Session ID leakage (#69820) and MCP tool scope (#66570) reveal growing demand for isolation in multi-agent workflows.

## 8. Backlog Watch — Stale / High-Impact Items Needing Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#66570](https://github.com/NousResearch/hermes-agent/pull/66570) MCP `subagent_only` scope | 6 days | Security boundary feature; labeled `needs-decision`, `sweeper:risk-security-boundary` — requires maintainer ruling on API shape. |
| [#67418](https://github.com/NousResearch/hermes-agent/pull/67418) Cron ticker gateway deference | 4 days | Affects all desktop+gateway co-located deployments; P2, `needs-decision`. |
| [#58495](https://github.com/NousResearch/hermes-agent/pull/58495) Compression skip on plugin no-op | 19 days | Session stability; low blast but recurring. |
| [#58512](https://github.com/NousResearch/hermes-agent/pull/58512) Rebind context engine before compaction | 19 days | Same area as above; pair should be reviewed together. |
| [#61499](https://github.com/NousResearch/hermes-agent/pull/61499) Delegation Nous auth resolution | 14 days | Auth boundary; `sweeper:risk-security-boundary`. |

---

**Health Score:** 🟢 **Healthy** — High PR throughput, critical bugs fixed, clear roadmap signals.  
**Risk Areas:** MCP delegation security boundary, desktop/serve hook parity, Slack multi-bot coexistence.  
**Next Expected Release:** Patch within 1–2 weeks (accumulated fixes + keyboard shortcut UX).

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-23

## 1. Today's Overview
PicoClaw shows moderate maintenance activity with **5 PR updates** and **3 issue updates** in the last 24 hours. Two dependency/documentation PRs were merged (#3286, #3285), while three feature/refactor PRs remain open. No new releases were published. The project is in a steady maintenance phase with active community contributions across protocol integrations (DingTalk, DeltaChat, Bedrock) and core hook/IRC improvements. Two issues carry the `[stale]` label, indicating they may need triage attention.

## 2. Releases
**No new releases** published today. The latest version remains `picoclaw 0.3.1` (git: 2cf030d2).

## 3. Project Progress — Merged/Closed PRs Today
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#3286](https://github.com/sipeed/picoclaw/pull/3286) | 🐞 Bug fix / Security | Updated Go toolchain and `x/text` dependency to resolve `govulncheck` findings. | Improves supply-chain security; no user-facing changes. |
| [#3285](https://github.com/sipeed/picoclaw/pull/3285) | 📖 Documentation | Removed `picopaw` references (reverts #3096). | Cleans up obsolete docs; no functional impact. |

## 4. Community Hot Topics
| Item | Type | Activity | Core Need |
|------|------|----------|-----------|
| [#3258](https://github.com/sipeed/picoclaw/issues/3258) | 🐛 Bug | 1 comment, stale | **Hook system reliability**: `before_tool` hook's `decision` field is discarded and `args` misparsed due to deserialization defect. Blocks custom tool-interception logic. |
| [#3257](https://github.com/sipeed/picoclaw/issues/3257) | ✨ Feature | 1 comment, stale | **Stateless gateway sessions**: User needs ephemeral, history-free conversations in `picoclaw gateway` mode (currently session key is derived from channel/chat ID). |
| [#3283](https://github.com/sipeed/picoclaw/pull/3283) | 🐛 Bug fix | New PR, 0 comments | **DingTalk image inbound support**: Adds media download, token caching, and graceful degradation for picture messages. High demand for rich-media support in enterprise channels. |

**Analysis**: The hook bug (#3258) and stateless gateway request (#3257) both target advanced automation workflows — users are pushing PicoClaw beyond simple chat into orchestrated agent pipelines. The DingTalk PR (#3283) signals growing enterprise-channel adoption.

## 5. Bugs & Stability
| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **High** | [#3258](https://github.com/sipeed/picoclaw/issues/3258) – Hook `decision` field dropped, `args` misparsed | Open, stale | No |
| **Medium** | [#3287](https://github.com/sipeed/picoclaw/issues/3287) – IRC long-message splitting breaks cohesion | Open, new | No |
| **Low** | [#3283](https://github.com/sipeed/picoclaw/pull/3283) – DingTalk image inbound not supported | PR open | **Yes** (#3283) |

**Note**: The hook deserialization bug (#3258) is a regression risk for any workflow using `before_tool` hooks. No fix PR yet — maintainers should prioritize triage.

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| Stateless/no-history gateway mode | [#3257](https://github.com/sipeed/picoclaw/issues/3257) | **High** — aligns with gateway-use trend; low implementation complexity. |
| IRCv3 long-message reassembly | [#3287](https://github.com/sipeed/picoclaw/issues/3287) | **Medium** — niche but standards-compliant; may wait for IRC maintainer bandwidth. |
| Bedrock Converse prompt caching | [#3163](https://github.com/sipeed/picoclaw/pull/3163) | **High** — cost-optimization feature; PR open since June, needs review. |
| DeltaChat cleanup & modernisation | [#3222](https://github.com/sipeed/picoclaw/pull/3222) | **Medium** — tech-debt reduction; 200 LOC removal, but touches auth flows. |

**Prediction**: Stateless gateway mode and Bedrock caching are the strongest candidates for the next minor release.

## 7. User Feedback Summary
- **Pain points**: Hook system broken for tool interception (#3258); gateway sessions not truly isolated (#3257); IRC message fragmentation (#3287).
- **Use cases**: Enterprise DingTalk bot with image handling (#3283); AWS Bedrock cost optimization via prompt caching (#3163); DeltaChat as a lightweight relay (#3222).
- **Sentiment**: Mixed — contributors actively submit PRs for protocol gaps, but core bugs (hooks) linger with `[stale]` label, suggesting maintainer bandwidth constraints.

## 8. Backlog Watch — Needs Maintainer Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#3258](https://github.com/sipeed/picoclaw/issues/3258) | 8 days | Core hook mechanism broken; blocks custom agent logic. |
| [#3257](https://github.com/sipeed/picoclaw/issues/3257) | 8 days | Gateway usability gap; clear user need, simple spec. |
| [#3163](https://github.com/sipeed/picoclaw/pull/3163) | 30 days | Bedrock prompt caching = real cost savings; PR ready but stale. |
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | 20 days | DeltaChat tech debt; security improvement (drops password config). |

**Recommendation**: Triage #3258 and #3163 this week — one is a regression, the other a high-value merged-ready PR.

---
*Generated from GitHub data as of 2026-07-23. Links point to live issues/PRs on sipeed/picoclaw.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-23

---

## 1. Today's Overview

NanoClaw shows moderate maintenance activity with **1 security documentation issue** and **3 open pull requests** updated in the last 24 hours. No new releases were published. The project is actively addressing a credential isolation documentation discrepancy for self-hosted OneCLI deployments, while three feature/fix PRs — covering WhatsApp identity normalization, a Waybar status indicator utility skill, and Telegram Bot API 10.1 rich message rendering — remain in review. Overall velocity appears steady but focused on incremental improvements rather than major feature drops.

---

## 2. Releases

**No new releases** in the last 24 hours.

---

## 3. Project Progress

No PRs were merged or closed today. All three active PRs remain open:

| PR | Type | Status | Summary |
|----|------|--------|---------|
| [#3070](https://github.com/nanocoai/nanoclaw/pull/3070) | Bug fix | Open | Fixes WhatsApp sender identity divergence between Baileys (native) and Cloud API paths — critical for consistent user ID mapping |
| [#3117](https://github.com/nanocoai/nanoclaw/pull/3117) | Utility skill | Open | Adds `add-omarchy-statusbar` — a Waybar status indicator skill for NanoClaw (no core source changes) |
| [#2877](https://github.com/nanocoai/nanoclaw/pull/2877) | Feature | Open | Implements native rich rendering via Telegram Bot API 10.1 `sendRichMessage` (open since 2026-06-28) |

---

## 4. Community Hot Topics

### 🔐 **Security Documentation Accuracy** — [Issue #3118](https://github.com/nanocoai/nanoclaw/issues/3118)
- **Author:** bradfeld | **Created/Updated:** 2026-07-22 | **Comments:** 0 | **👍:** 0
- **Core issue:** `docs/SECURITY.md` claims per-group OAuth credential isolation for self-hosted OneCLI, but OAuth connections are actually **account-level**, not group-level.
- **Underlying need:** Accurate threat modeling for multi-tenant deployments. Users relying on documented isolation may have false confidence in credential boundaries. This is a **documentation-security gap** requiring either code change (true isolation) or doc correction.

### 📱 **WhatsApp Identity Consistency** — [PR #3070](https://github.com/nanocoai/nanoclaw/pull/3070)
- **Author:** QuantumBreakz | **Updated:** 2026-07-22 | **Resolves:** #3069
- **Pain point:** Same phone number maps to two different user IDs across Baileys vs Cloud paths, breaking conversation continuity and user profiling.
- **Signal:** High practical impact for multi-channel WhatsApp deployments; fix is targeted and well-scoped.

---

## 5. Bugs & Stability

| Severity | Item | Description | Fix PR |
|----------|------|-------------|--------|
| **High** | [Issue #3118](https://github.com/nanocoai/nanoclaw/issues/3118) | Security docs overclaim OAuth credential isolation — potential misconfiguration risk in self-hosted multi-group setups | None yet (doc or code fix needed) |
| **Medium** | [PR #3070](https://github.com/nanocoai/nanoclaw/pull/3070) | WhatsApp sender ID divergence breaks user identity consistency across channel paths | **PR #3070** (open, ready for review) |

No crashes or regressions reported today.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood for Next Release | Rationale |
|---------|--------|-----------------------------|-----------|
| **Telegram Bot API 10.1 rich rendering** | [PR #2877](https://github.com/nanocoai/nanoclaw/pull/2877) | **High** | Open since 2026-06-28; aligns with upstream API update; follows contribution guidelines |
| **Waybar status indicator (utility skill)** | [PR #3117](https://github.com/nanocoai/nanoclaw/pull/3117) | **Medium** | Standalone skill, no core changes; easy merge if guidelines met |
| **True per-group OAuth isolation** | [Issue #3118](https://github.com/nanocoai/nanoclaw/issues/3118) | **Low (short-term)** | Requires OneCLI gateway architecture changes; more likely doc fix first |

---

## 7. User Feedback Summary

- **Security-conscious deployers** are scrutinizing documentation claims — Issue #3118 reflects demand for **accurate isolation guarantees** in self-hosted scenarios.
- **WhatsApp integrators** face **identity fragmentation** across channel paths — a tangible UX/analytics breakage (PR #3070).
- **Linux desktop users** (Omarchy/Waybar) seek **native status visibility** — PR #3117 shows community extending NanoClaw into local dev environments.
- **Telegram power users** want **modern rich messaging** — PR #2877 tracks upstream Bot API evolution.

Overall sentiment: **constructive, technical, integration-focused** — users are pushing boundaries of multi-channel, self-hosted, and desktop-embedded use cases.

---

## 8. Backlog Watch

| Item | Age | Risk | Why It Needs Attention |
|------|-----|------|------------------------|
| [PR #2877](https://github.com/nanocoai/nanoclaw/pull/2877) | **25 days** | Medium | Feature-complete per guidelines; Telegram 10.1 support is time-relevant; stalled review |
| [Issue #3118](https://github.com/nanocoai/nanoclaw/issues/3118) | **1 day** | **High** | Security documentation inaccuracy — could mislead compliance-sensitive deployments; needs triage decision (doc vs code fix) |
| [PR #3070](https://github.com/nanoclaw/pull/3070) | **7 days** | Medium | Fixes concrete identity bug; has linked issue (#3069); ready for merge |

---

*Digest generated from GitHub data as of 2026-07-23. Links point to live items on `github.com/nanocoai/nanoclaw`.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-07-23

## 1. Today's Overview
NullClaw saw focused maintenance activity in the last 24 hours with one critical bug fix merged and its corresponding issue closed. The project resolved a **Discord gateway deafness bug** (Issue #977) caused by a stack overflow in the typing-indicator thread, and the fix (PR #978) has been merged. No new releases were published. Activity remains low-volume but high-impact, targeting core stability in the Discord integration layer.

## 2. Releases
*No new releases published in the last 24 hours.*

## 3. Project Progress
| PR / Issue | Title | Status | Impact |
|------------|-------|--------|--------|
| [#978](https://github.com/nullclaw/nullclaw/pull/978) | **discord: run typing thread on the heavy runtime stack** | Merged/Closed | **Critical fix** — Moves the Discord typing-indicator background thread from a 512 KB auxiliary stack to the heavy runtime stack, preventing `tls.Client.init` inline memcpy overflows that crashed the process on first typing event. |
| [#977](https://github.com/nullclaw/nullclaw/issues/977) | **Discord gateway goes permanently deaf after exactly one MESSAGE_CREATE** | Closed | **Root cause identified & fixed** — The crash in the typing thread (see #978) silently terminated event dispatch after the first message, leaving heartbeats intact but the bot deaf. Fix validated and issue closed. |

**Net effect:** The Discord gateway is now stable across sustained message traffic; no more silent event-dispatch termination after the first `MESSAGE_CREATE`.

## 4. Community Hot Topics
| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [#977](https://github.com/nullclaw/nullclaw/issues/977) (1 comment, 0 👍) | High urgency — 100% reproducible gateway deafness blocking production bots | Reliable, long-lived Discord gateway connections without silent failure modes |
| [#978](https://github.com/nullclaw/nullclaw/pull/978) (comments undisclosed, 0 👍) | Immediate fix for the above; merged same day | Correct stack sizing for TLS-heavy background tasks in async runtimes |

*Only two items updated in the window; both directly linked. No broader community discussion threads active.*

## 5. Bugs & Stability
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical (process abort → silent gateway deafness)** | [#977](https://github.com/nullclaw/nullclaw/issues/977) — Stack overflow in typing thread kills event loop after 1 message | **Fixed & Closed** | [#978](https://github.com/nullclaw/nullclaw/pull/978) (merged) |

*No other bugs, crashes, or regressions reported in the last 24 h.*

## 6. Feature Requests & Roadmap Signals
*No new feature requests or roadmap discussions in the last 24 h.*  
The current signal is **stability hardening** for the Discord adapter rather than feature expansion. Expect near-term patches to focus on:
- Stress-testing the gateway under sustained load
- Auditing other background threads for similar stack-size mismatches

## 7. User Feedback Summary
- **Pain point:** Bots become permanently deaf after handling a single message — a silent, non-obvious failure (heartbeats continue, no errors logged).
- **Use case:** Production Discord bots requiring 24/7 uptime.
- **Satisfaction:** Positive resolution velocity — root cause found, fix merged, issue closed within hours. No dissatisfaction signals in comments.

## 8. Backlog Watch
*No long-unanswered high-priority issues or PRs surfaced in this 24 h window.*  
Maintainers should consider:
- Adding a CI check that validates stack-size annotations for all spawned threads performing TLS/HTTP work.
- Documenting the "heavy runtime stack" requirement for any future background tasks doing crypto I/O.

---

**Project Health Indicator:** 🟢 **Healthy** — Critical bug resolved quickly, no open regressions, release cadence unchanged.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-23

## 1. Today's Overview
IronClaw showed **intense pre-launch activity** with 70 total updates (20 issues, 50 PRs) in the last 24 hours. The project is in a **v1 launch hardening phase** — 12 issues were closed as "completed foundation" retrospective records, while 8 new launch-blocker issues were opened. PR velocity is high with 25 merges, dominated by **ProductSurface architecture unification**, **Reborn runtime composition collapse**, and **extension/channel runtime hardening**. No releases were cut today, but multiple `release-fix-*` branches are active, indicating a release candidate stabilization cycle.

---

## 2. Releases
**No new releases published today.**  
The most recent release activity is in PR #5598 (opened 2026-07-03, still open) which prepares breaking changes for `ironclaw_common` 0.5.0 and `ironclaw_skills` 0.4.0. Active `release-fix-1.0.0-rc.1` branches (e.g., PR #6533, #6537) suggest a v1.0.0 release candidate is under stabilization.

---

## 3. Project Progress — Merged/Closed PRs Today (25 merged)
| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#6480](https://github.com/nearai/ironclaw/pull/6480) | Continue ProductSurface conversion for operator, project, admin, automation, and view APIs | Architecture | **Major**: Completes ProductSurface migration for core APIs; retains WebUI settings writes on ProductSurface path |
| [#6538](https://github.com/nearai/ironclaw/pull/6538) | Route OpenAI compat through ProductSurface | Architecture | **Major**: Moves OpenAI-compatible Chat/Responses to ProductSurface; preserves 10MiB inline image limit |
| [#6529](https://github.com/nearai/ironclaw/pull/6529) | Move outbound preferences facade out of composition | Architecture | **Major**: Extracts neutral outbound delivery catalog to `ironclaw_outbound` crate |
| [#6441](https://github.com/nearai/ironclaw/pull/6441) | refactor(reborn): name ProductSurface boundary | Architecture | **Major**: Introduces `ProductSurface` trait over frozen `RebornServicesApi`; moves WebUI/composition to depend on it |
| [#6535](https://github.com/nearai/ironclaw/pull/6535) | test(reborn): add Slice 0 reference model oracles | Testing | **Medium**: Adds pure turn/run lifecycle reference model with generated stateful operation coverage |
| [#6540](https://github.com/nearai/ironclaw/pull/6540) | Mask ambient NEARAI env in tests | Testing/CI | **Medium**: Adds runtime env mask for `NEARAI_API_KEY`, `NEARAI_SESSION_TOKEN`, etc. |
| [#6537](https://github.com/nearai/ironclaw/pull/6537) | ci: run full Reborn test/E2E gates on release-fix-* PR branches | CI | **Medium**: Fixes missing heavy gates (Tests Reborn, Reborn E2E) on release-fix branches |
| [#6444](https://github.com/nearai/ironclaw/pull/6444) | docs: refresh Reborn ProductSurface routing design | Docs | **Low**: Updates architecture notes with Urbit/terminal takeaways, tightens product/channel vocabulary |
| [#6521](https://github.com/nearai/ironclaw/issues/6521) | ironclaw CLI not available on agent staging | Ops/Infra | **Fixed**: CLI availability on staging (issue closed) |
| [#6519, #6515, #6514, #6513, #6510, #6505, #6499, #6498, #6495, #6494, #6493](https://github.com/nearai/ironclaw/issues/6519) | Completed foundation retrospective records (11 issues) | Project Mgmt | **Tracking**: Documents merged PRs for testing playbook, operator config write plane, generic extension runtime, Telegram, Slack, manifest registry |

**Key advancement**: The **ProductSurface unification** is now feature-complete for core APIs (operator, project, admin, automation, view, OpenAI compat). The **Reborn runtime composition** has collapsed local/production paths onto a single production-shaped path (PR #6442 still open). **Extension runtime** is now generic and manifest-driven (Slack, Telegram, Google Suite).

---

## 4. Community Hot Topics — Most Active Items
| Item | Type | Comments | Signals |
|------|------|----------|---------|
| [#6284](https://github.com/nearai/ironclaw/issues/6284) | Issue (Epic) | 4 | **Error recoverability endgame** — Goal: model recovers from 100% of errors it sees. Defines 4-part recoverability contract (survive, observe, cause+fix, act). Long-running epic (created 07-19, updated 07-22). |
| [#6523](https://github.com/nearai/ironclaw/issues/6523) | Issue (v1-launch) | 1 | **Agent creation fails with "test build" flag** — Blocking onboarding on hosted staging. Screenshot shows deployment error. |
| [#6534](https://github.com/nearai/ironclaw/issues/6534) | Issue (v1-launch) | 1 | **Google OAuth config not applicable in hosted deployments** — Operator can save config but it doesn't take effect. Partial fix in PR #6533. |
| [#6522](https://github.com/nearai/ironclaw/issues/6522) | Issue (v1-launch) | 1 | **Telegram setup instructions missing** — IronClaw doesn't guide users on local/hosted Telegram setup. References Google as example. |
| [#6533](https://github.com/nearai/ironclaw/pull/6533) | PR (XL) | — | **Container-supervised mode for hosted deployments** — Addresses #6534 partially (restart/apply path, error UX). Targets `release-fix-1.0.0-rc.1`. |
| [#6536](https://github.com/nearai/ironclaw/pull/6536) | PR (XL) | — | **Route channel ingress through ProductSurface** — Builds on merged #6480; uses `channel.admit_inbound` host-only operation. |
| [#6527](https://github.com/nearai/ironclaw/pull/6527) | PR (XL) | — | **Admin-managed user security foundation** — Adds `Private`/`TenantAdminManaged` access policies; splits private-user vs managed-agent creation. |
| [#6531](https://github.com/nearai/ironclaw/pull/6531) | PR (XL) | — | **Apply admin OAuth config at runtime** — Resolves Manifest V3 OAuth credentials from tenant-scoped WebUI admin config on every auth op. |

**Underlying needs**:  
- **Launch readiness**: 4 v1-launch-checklist issues opened in 24h (onboarding, OAuth, Telegram, CLI)  
- **Architectural completion**: ProductSurface migration finishing touches (channel ingress, OpenAI compat)  
- **Multi-tenancy security**: Admin-managed identities, runtime OAuth config resolution  
- **Error resilience**: Systematic error recoverability contract (epic #6284)

---

## 5. Bugs & Stability — Reported Today
| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| **High** | [#6523](https://github.com/nearai/ironclaw/issues/6523) | Agent creation fails during onboarding when "test build" flag selected — blocks deployment on staging | **Open** — No fix PR yet |
| **High** | [#6534](https://github.com/nearai/ironclaw/issues/6534) | Google OAuth config saved in WebUI but not consumed in hosted deployments — extensions non-functional | **Partial fix** — PR #6533 addresses container restart/apply path & error UX; WebUI config path & config consumption still open |
| **Medium** | [#6522](https://github.com/nearai/ironclaw/issues/6522) | No user-facing instructions for Telegram setup (local or hosted) — unlike Google Suite which has guidance | **Open** — Documentation/UX gap |
| **Low** | [#6521](https://github.com/nearai/ironclaw/issues/6521) | `ironclaw` CLI not found on agent-stg.near.ai via SSH | **Closed** — Fixed (no details on fix) |

**Stability note**: The `release-fix-1.0.0-rc.1` branch (PR #6533) initially missed critical Reborn test/E2E gates — fixed by PR #6537. This suggests **CI gate coverage gaps on release branches** that could allow regressions.

---

## 6. Feature Requests & Roadmap Signals
| Feature | Source | Likelihood for Next Version |
|---------|--------|----------------------------|
| **Error recoverability contract** (survive, observe, cause+fix, act) | Epic [#6284](https://github.com/nearai/ironclaw/issues/6284) | **High** — Active epic, 4 comments, updated today; core to "model recovers from 100% of errors" |
| **Attested signing + Ledger hardware wallet clear signing** | Issue [#6532](https://github.com/nearai/ironclaw/issues/6532) | **Medium** — Design + Phase A plan created today; enables blockchain transactions without unilateral asset movement |
| **Secret-lease + egress-proxy daemon** (sandbox) | Issue [#6472](https://github.com/nearai/ironclaw/issues/6472) | **Medium** — Part of #6468; covers container core integration; in-app daemon for egress allowlist & secret lease renewal |
| **Hermetic capability/journey testing platform** | Epic [#6524](https://github.com/nearai/ironclaw/issues/6524) | **High** — Addresses "does every capability have deterministic coverage?"; builds on existing fixture/Emulate work |
| **Automated QA for Reborn binary** (8 manual journeys) | Epic [#4775](https://github.com/nearai/ironclaw/issues/4775) | **High** — Long-running (since 06-11); aims to automate Reborn manual QA across hermetic/fixture/e2e/live layers |
| **Benchmarking mode for unattended eval** | PR [#6539](https://github.com/nearai/ironclaw/pull/6539) | **Medium** — Opt-in system prompt addendum; overrides "ask user" guidance for eval runs |
| **Auto-activate web-access & Brave web_search** | PR [#6232](https://github.com/nearai/ironclaw/pull/6232) | **Medium** — Makes web search discoverable by default; currently open since 07-18 |

**Roadmap prediction**: v1.0.0 will likely include **ProductSurface completion**, **generic extension runtime**, **Telegram/Slack/Google channels**, **operator config write plane**, and **launch-blocker fixes** (OAuth, onboarding, Telegram docs). Post-v1: **error recoverability**, **attested signing**, **sandbox daemon**, and **hermetic testing platform**.

---

## 7. User Feedback Summary
| Pain Point | Evidence | Context |
|------------|----------|---------|
| **Onboarding broken for test builds** | [#6523](https://github.com/nearai/ironclaw/issues/6523) screenshot shows deployment error | Hosted staging (`agents-stg.near.ai`); blocks QA/validation of test builds |
| **Google OAuth config appears saved but doesn't work** | [#6534](https://github.com/nearai/ironclaw/issues/6534) — "operator can save... but it doesn't take effect" | Hosted staging; extensions (Gmail/Google Suite) non-functional despite config UI success |
| **No Telegram setup guidance** | [#6522](https://github.com/nearai/ironclaw/issues/6522) — "needs to provide user with instructions... even if it requires CLI" | User expects parity with Google Suite setup flow; screenshots show empty/missing guidance |
| **CLI missing on staging agents** | [#6521](https://github.com/nearai/ironclaw/issues/6521) — `ironclaw: command not found` on SSH | Fixed, but indicates staging environment drift |
| **Error messages opaque** | [#6533](https://github.com/nearai/ironclaw/pull/6533) fixes "raw `os error 2` instead of clear message" | UX improvement for container-supervised mode; suggests broader error messaging gaps |

**Satisfaction signal**: Users (internal QA/operators) are actively testing hosted staging and filing specific, actionable blockers — indicates **real dogfooding** but also **pre-launch friction** in hosted deployment paths.

---

## 8. Backlog Watch — Items Needing Maintainer Attention
| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#6284](https://github.com/nearai/ironclaw/issues/6284) **Error recoverability endgame** | 4 days (updated today) | **Core reliability epic** — defines contract for 100% model error recovery; no linked PRs yet | Open, 4 comments |
| [#4775](https://github.com/nearai/ironclaw/issues/4775) **Automated QA for Reborn** | 42 days (updated today) | **Release quality gate** — 8 manual journeys need automation; blocks sustainable release process | Open, 0 comments (stale discussion) |
| [#6524](https://github.com/nearai/ironclaw/issues/6524) **Hermetic testing platform** | 1 day | **Coverage completeness** — "cannot answer mechanically if every capability has deterministic coverage" | Open, 0 comments |
| [#6232](https://github.com/nearai/ironclaw/pull/6232) **Auto-activate web search** | 5 days | **Agent capability discovery** — makes web search default-visible; stuck in review | Open, XL size |
| [#6442](https://github.com/nearai/ironclaw/pull/6442) **Unify Reborn runtime composition** | 2 days | **Architectural cleanup** — collapses local/prod paths; large XL PR, depends on #6480 (merged) | Open |
| [#6520](https://github.com/nearai/ironclaw/pull/6520) **Generic extension readiness & channel delivery** | 1 day | **Extension runtime completion** — collapses lifecycle to manifest-driven states; XL, medium risk | Open |
| [#6532](https://github.com/nearai/ironclaw/issues/6532) **Attested signing + Ledger** | 1 day | **Security/crypto roadmap** — design phase; enables safe blockchain transactions | Open, 0 comments |
| [#6472](https://github.com/nearai/ironclaw/issues/6472) **Secret-lease + egress-proxy daemon** | 1 day | **Sandbox security** — container core dependency; no PR yet | Open |

**Critical path**: #6284 (error recoverability), #4775/#6524 (testing platform), and #6442/#6520 (runtime composition) are **architectural prerequisites** for post-v1 stability. The v1-launch-checklist issues (#6523, #6534, #6522) are **immediate release blockers** needing fixes today/tomorrow.

---

## Project Health Assessment
| Dimension |

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-07-23

## 1. Today's Overview
LobsterAI shows **moderate maintenance activity** with 6 PRs updated in the last 24 hours (1 new open, 5 closed/merged) and 1 stale issue closed. No new releases were published. The merged PRs span UI polish (AI skin theming), Windows installer hardening, cowork export modal fix, OpenClaw OOM crash guard, and two long-stale feature PRs (skills management, scheduled-task Cron enhancements) finally closed. The single new open PR (#2378) continues UI/UX refinement for AI skin appearance. Overall, the project is in a **stabilization and polish phase**, clearing backlog while incrementally improving the desktop agent experience.

## 2. Releases
**No new releases** in the last 24 hours.

## 3. Project Progress — Merged/Closed PRs Today

| PR | Type | Area | Summary |
|----|------|------|---------|
| [#2377](https://github.com/netease-youdao/LobsterAI/pull/2377) | feat | renderer, main, windows | **Windows update installer hardening** — improves reliability/security of the auto-update flow on Windows. |
| [#2376](https://github.com/netease-youdao/LobsterAI/pull/2376) | fix | renderer, cowork | **Export modal z-index fix** — mounts the cowork export options modal via a body portal to avoid stacking-context conflicts with the sidebar. |
| [#2375](https://github.com/netease-youdao/LobsterAI/pull/2375) | fix | renderer, docs, main, openclaw | **OOM crash guard for oversized transcripts** — blocks loading turns that would exceed JS heap, classifies heap-OOM gateway crashes, and ignores stale client generations after restart to prevent zombie reconnects. |
| [#1347](https://github.com/netease-youdao/LobsterAI/pull/1347) | feat (stale) | scheduledTask | **Cron custom scheduling + Agent/Model selector + UX unification** — adds “Custom (Cron)” schedule type with visual builder & raw expression modes, 4 presets, Agent/Model binding, and form UX alignment. Closed as stale after 3+ months. |
| [#1346](https://github.com/netease-youdao/LobsterAI/pull/1346) | feat (stale) | skills | **Skills management overhaul** — per official review feedback on #846. Closed as stale. |

**Net effect**: Three production-hardening fixes (Windows installer, modal stacking, OOM guard) landed today; two large feature branches from April were archived as stale, suggesting scope creep or shifting priorities.

## 4. Community Hot Topics

| Item | Activity | Signal |
|------|----------|--------|
| [Issue #1348](https://github.com/netease-youdao/LobsterAI/issues/1348) | 2 comments, closed as stale | **Duplicate scheduled-task name validation missing** — users can create tasks with identical names, causing ambiguity. Closed without fix; may resurface. |
| [PR #2378](https://github.com/netease-youdao/LobsterAI/pull/2378) | 0 comments, opened today | **AI skin theming polish** — aligns artifact/task-search surfaces with skin presentation, enforces mutual exclusion between standard themes and AI skins, orders library newest-first. Active UI investment. |

**Underlying needs**:  
- **Reliability** (installer, OOM, modal stacking) — desktop-app quality bar.  
- **Personalization** (AI skins) — differentiating the agent’s visual identity.  
- **Scheduled-task robustness** — duplicate-name guard still absent.

## 5. Bugs & Stability — Today’s Reports & Fixes

| Severity | Issue / PR | Status | Fix PR |
|----------|------------|--------|--------|
| **High** | OpenClaw gateway OOM on oversized transcript | Fixed | [#2375](https://github.com/netease-youdao/LobsterAI/pull/2375) (merged) |
| **Medium** | Cowork export modal renders behind sidebar | Fixed | [#2376](https://github.com/netease-youdao/LobsterAI/pull/2376) (merged) |
| **Medium** | Windows auto-update installer hardening needed | Fixed | [#2377](https://github.com/netease-youdao/LobsterAI/pull/2377) (merged) |
| **Low** | Scheduled-task duplicate name allowed | Open (stale closed) | None — [#1348](https://github.com/netease-youdao/LobsterAI/issues/1348) closed without fix |

**Takeaway**: All critical/high-severity crashes reported recently have fixes merged today. The remaining low-severity validation gap (#1348) was archived but may need revisiting.

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **AI skin theming system** (mutual exclusion with standard themes, newest-first library, artifact/task-search alignment) | [PR #2378](https://github.com/netease-youdao/LobsterAI/pull/2378) (open, active) | **High** — work in progress, UI-focused. |
| **Cron-based scheduled tasks with visual builder & Agent/Model binding** | [PR #1347](https://github.com/netease-youdao/LobsterAI/pull/1347) (closed stale) | **Low–Medium** — feature complete but archived; may be revived in a focused PR. |
| **Skills management overhaul** | [PR #1346](https://github.com/netease-youdao/LobsterAI/pull/1346) (closed stale) | **Low** — archived after review feedback. |
| **Duplicate scheduled-task name validation** | [Issue #1348](https://github.com/netease-youdao/LobsterAI/issues/1348) | **Medium** — user-facing bug, but closed stale; could reopen. |

**Prediction**: Next patch will likely ship the AI skin polish (#2378) plus the three stability fixes already merged. Cron scheduling may return in a smaller, reviewed PR.

## 7. User Feedback Summary

| Pain Point / Use Case | Evidence | Sentiment |
|------------------------|----------|-----------|
| **App crashes on long conversations** (OOM) | Fixed by #2375 | ✅ Resolved |
| **Export modal hidden behind sidebar** | Fixed by #2376 | ✅ Resolved |
| **Windows updates fail/unreliable** | Addressed by #2377 | ✅ Resolved |
| **Cannot distinguish scheduled tasks with same name** | Issue #1348 (closed stale) | ⚠️ Unresolved |
| **Desire for richer agent personalization (skins)** | PR #2378 active | 🚧 In progress |

Overall satisfaction trending positive for stability; personalization features are the visible forward investment.

## 8. Backlog Watch — Stale / Unanswered Items Needing Attention

| Item | Age | Why It Matters |
|------|-----|----------------|
| [Issue #1348](https://github.com/netease-youdao/LobsterAI/issues/1348) — Duplicate scheduled-task name validation | Opened 2026-04-02, closed stale 2026-07-22 | Data-integrity bug; users can create ambiguous tasks. Should be reopened or fixed in a follow-up. |
| [PR #1347](https://github.com/netease-youdao/LobsterAI/pull/1347) — Cron scheduling + Agent selector | Opened 2026-04-02, closed stale 2026-07-22 | Large, feature-complete PR archived. If scheduling is on roadmap, extract & re-PR in smaller chunks. |
| [PR #1346](https://github.com/netease-youdao/LobsterAI/pull/1346) — Skills management | Opened 2026-04-02, closed stale 2026-07-22 | Official review feedback incorporated but then stalled. Clarify if skills revamp is deferred or cancelled. |

**Maintainer action suggested**: Decide whether scheduled-task validation (#1348) and Cron scheduling (#1347) are in scope for Q3; if yes, reopen or split into reviewable PRs. Otherwise, document as “wontfix” to avoid repeated stale churn.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-07-23

## 1. Today's Overview
Moltis showed minimal public activity in the last 24 hours: zero issue updates, one open pull request, and no new releases. The sole PR (#1162) targets a UI refinement in the web client — improving how session dates are displayed across different time buckets (today, yesterday, recent weekdays, and older dates with year). With no merged PRs, closed issues, or releases, the project appears in a quiet maintenance or pre-release phase. Community engagement (comments, reactions) remains absent on the open PR.

## 2. Releases
**No new releases** published in the last 24 hours.

## 3. Project Progress
**No PRs merged or closed today.**  
The only movement is **PR #1162** (open), authored by **shixi-li**, which enhances the web session list date formatting:
- Retains localized `HH:MM` for sessions updated today
- Adds localized “yesterday” and weekday labels for recent prior days
- Falls back to full calendar date (including year when needed) for older sessions
- Includes browser test coverage for all four date buckets

This is a **polish/usability fix** rather than a functional change. No feature work or bug fixes were completed today.

## 4. Community Hot Topics
**Only one active item:**  
🔗 **PR #1162** — *fix(web): show dates for older sessions*  
- **Author:** shixi-li  
- **Created/Updated:** 2026-07-22  
- **Comments:** 0 | **Reactions:** 0  

*Analysis:* The PR addresses a clear UX gap — session lists likely showed only times, making older sessions hard to contextualize. The four-bucket approach (today / yesterday / weekday / full date) mirrors patterns in tools like Slack, Notion, and GitHub. Zero discussion suggests either low contributor count or the change is considered uncontroversial. No other issues/PRs garnered attention.

## 5. Bugs & Stability
**No bugs, crashes, or regressions reported today.**  
No issue activity at all in the last 24h. PR #1162 is a UI improvement, not a bug fix.

## 6. Feature Requests & Roadmap Signals
**No new feature requests or issues opened today.**  
The only signal comes from PR #1162’s scope: the team is investing in **web UI polish for session history navigation**. This suggests:
- Session management is a core user workflow
- Historical session access matters (not just real-time)
- Internationalization (localized labels) is a requirement

If this pattern holds, expect further **history/search/filter enhancements** in the web client next.

## 7. User Feedback Summary
**No direct user feedback (issues, comments, reactions) captured in the last 24h.**  
The absence of community interaction limits insight into pain points. The PR’s focus on date clarity implies users *do* navigate older sessions — a signal that **session history is actively used**, not just live monitoring.

## 8. Backlog Watch
**No long-unanswered issues or PRs surfaced in today’s data.**  
With only one open PR (created yesterday) and zero stale items reported, the backlog appears current. However, the **complete lack of issue activity** over 24h may indicate:
- Low external contribution / user reporting
- Issues tracked elsewhere (Discord, internal)
- Project in a quiet period between milestones

**Maintainer attention:** PR #1162 awaits review. Given its scope (UI + i18n + test coverage), a timely review would sustain contributor momentum.

---

**Links**  
- PR #1162: https://github.com/moltis-org/moltis/pull/1162  
- Moltis repo: https://github.com/moltis-org/moltis

*Digest generated from GitHub API data for 2026-07-23. Activity window: 2026-07-22 00:00 – 2026-07-23 00:00 UTC.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-07-23

---

## 1. Today's Overview

CoPaw shows **high velocity with stability friction**: 50 PRs and 19 issues updated in 24 hours, plus a patch release (v2.0.0.post4). The release targets a core v2.0 regression — redundant reasoning loops — while the open issue backlog surfaces **performance regressions (~2 s fixed overhead per reply), Windows PATH breakage, governance policy bugs, and HDD-unfriendly update times**. Merged PRs focus on hardening governance, console test stability, token-usage persistence, and downloader fallback logic. The project is clearly in a **post-v2.0 stabilization sprint**, with maintainers and contributors rapidly addressing regressions across backend, console, and provider layers.

---

## 2. Releases

### v2.0.0.post4 — 2026-07-23
> **Changelog**: [compare v2.0.0.post3…v2.0.0.post4](https://github.com/agentscope-ai/QwenPaw/compare/v2.0.0.post3...v2.0.0.post4)

**Changes**
- Optimized agent reasoning to mitigate redundant thinking loops and duplicate tool invocations.

**Assessment**  
A targeted fix for the most visible v2.0 regression (see #6307). No breaking changes or migration steps documented; users on v2.0.0.post3 should upgrade immediately.

---

## 3. Project Progress — Merged / Closed PRs Today

| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#6369](https://github.com/agentscope-ai/QwenPaw/pull/6369) | `fix(governance): honor disabled audit logging` | Governance / Audit | Stops SQLite inserts when `audit_level: none`; closes #6368 |
| [#6367](https://github.com/agentscope-ai/QwenPaw/pull/6367) | `test(console): stabilize Gate coverage test` | Console / CI | Increases Gate-selection timeout 15 s → 30 s under V8 coverage |
| [#6375](https://github.com/agentscope-ai/QwenPaw/pull/6375) | `fix(token-usage): retry token usage persistence` | Observability | Adds retry + dirty-flag guard for transient write failures; closes #6374 |
| [#6371](https://github.com/agentscope-ai/QwenPaw/pull/6371) | `fix(file-handling): continue fallback after downloader timeout` | Utils / Network | Treats `TimeoutExpired` like other downloader failures; closes #6370 |
| [#6357](https://github.com/agentscope-ai/QwenPaw/pull/6357) | `fix(console): prioritize one-time approval` | Console / UX | Reorders approval buttons (“Just Once” primary) per #6354 |
| [#6368](https://github.com/agentscope-ai/QwenPaw/issues/6368) | Issue closed (governance audit_level=none) | Governance | Fixed by #6369 |
| [#6366](https://github.com/agentscope-ai/QwenPaw/issues/6366) | Issue closed (console coverage timeout) | Console / CI | Fixed by #6367 |
| [#6374](https://github.com/agentscope-ai/QwenPaw/issues/6374) | Issue closed (token usage persistence) | Observability | Fixed by #6375 |
| [#6370](https://github.com/agentscope-ai/QwenPaw/issues/6370) | Issue closed (downloader timeout fallback) | Utils / Network | Fixed by #6371 |
| [#6354](https://github.com/agentscope-ai/QwenPaw/issues/6354) | Issue closed (approval dialog UX) | Console / UX | Fixed by #6357 |
| [#5135](https://github.com/agentscope-ai/QwenPaw/issues/5135) | Issue closed (MiniMax-M3 vision) | Providers | Duplicate of #6362; long-standing |

**Net**: 13 PRs merged/closed, 4 issues resolved — all regression fixes or test stabilizations. No new features shipped today.

---

## 4. Community Hot Topics (Most Active Issues/PRs)

| Item | Comments | 👍 | Core Need |
|------|----------|----|-----------|
| [#6307](https://github.com/agentscope-ai/QwenPaw/issues/6307) *v2.0 ~2 s fixed overhead per reply* | 6 | 0 | **Performance parity with v1.x**; architectural overhead in request pipeline |
| [#6316](https://github.com/agentscope-ai/QwenPaw/issues/6316) *Cron jobs: per-job model override* | 3 | 0 | **Operational flexibility** — pin models for scheduled agents without changing global config |
| [#6239](https://github.com/agentscope-ai/QwenPaw/issues/6239) *Windows PATH `;` separator dropped* | 2 | 0 | **Windows developer experience** — npm globals broken in child processes |
| [#6362](https://github.com/agentscope-ai/QwenPaw/issues/6362) *MiniMax-M3 vision broken (Anthropic compat)* | 2 | 0 | **Provider reliability** — images not recognized, hallucinated responses |
| [#6376](https://github.com/agentscope-ai/QwenPaw/issues/6376) *v2.0 loop crashes main process* | 2 | 0 | **Stability** — new “loop” feature causes frequent crashes; demand for pre-release stress testing |
| [#6380](https://github.com/agentscope-ai/QwenPaw/issues/6380) *HDD updates take 1.5 h* | 1 | 0 | **Update UX** — incremental builds, better caching, optional compilation |
| [#6379](https://github.com/agentscope-ai/QwenPaw/issues/6379) *Official plugin blocked by governance* | 1 | 0 | **Policy usability** — no UI to manage governance rules; built-in tools denied silently |

**Pattern**: Users are hitting **v2.0 regressions in performance, stability, and cross-platform basics**, plus **governance/policy opacity**. The cron-model PR (#6353) and downloader-fallback PR (#6371) show contributors responding fast.

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | [#6376](https://github.com/agentscope-ai/QwenPaw/issues/6376) Main process crashes from new loop feature | Open | — |
| **Critical** | [#6307](https://github.com/agentscope-ai/QwenPaw/issues/6307) 2 s fixed overhead per simple reply | Open | — |
| **High** | [#6362](https://github.com/agentscope-ai/QwenPaw/issues/6362) MiniMax-M3 vision completely broken | Open | — |
| **High** | [#6363](https://github.com/agentscope-ai/QwenPaw/issues/6363) Tool calls fail on markdown-fenced / XML-wrapped JSON (GLM, DeepSeek) | Open | [#6364](https://github.com/agentscope-ai/QwenPaw/pull/6364) |
| **High** | [#6358](https://github.com/agentscope-ai/QwenPaw/issues/6358) `role=system` injection in message middle → ValueError on GLM/OpenAI | Open | — |
| **Medium** | [#6239](https://github.com/agentscope-ai/QwenPaw/issues/6239) Windows PATH concatenation drops `;` → npm globals lost | Open | [#5861](https://github.com/agentscope-ai/QwenPaw/pull/5861) (macOS login-shell PATH, related) |
| **Medium** | [#6372](https://github.com/agentscope-ai/QwenPaw/issues/6372) Idle cleanup removes recreated queue state | Open | [#6373](https://github.com/agentscope-ai/QwenPaw/pull/6373) |
| **Medium** | [#6379](https://github.com/agentscope-ai/QwenPaw/issues/6379) Built-in plugin blocked by governance, no UI to fix | Open | — |
| **Low** | [#6380](https://github.com/agentscope-ai/QwenPaw/issues/6380) HDD update ~1.5 h | Open | — |
| **Low** | [#6361](https://github.com/agentscope-ai/QwenPaw/issues/6361) Console test scripts fail on Windows (POSIX env syntax) | Open | — |
| **Low** | [#6355](https://github.com/agentscope-ai/QwenPaw/issues/6355) Mission parser splits quoted `--verify` commands | Open | — |

**Note**: 4 bugs closed today via merged PRs (governance audit, console timeout, token-usage retry, downloader timeout).

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood for Next Version |
|---------|----------|-----------------------------|
| **Per-cron-job model override** | [#6316](https://github.com/agentscope-ai/QwenPaw/issues/6316) / [#6353](https://github.com/agentscope-ai/QwenPaw/pull/6353) | **High** — PR open, reuses existing `model_slot_override` |
| **Safe model discovery infrastructure** | [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) | **High** — foundational, first provider integrations included |
| **AG-UI protocol exposure (`/protocol/agui/chat`)** | [#6337](https://github.com/agentscope-ai/QwenPaw/pull/6337) | **Medium** — under review, isolates from existing services |
| **QwenPaw Creator app (script→video workflow)** | [#6284](https://github.com/agentscope-ai/QwenPaw/pull/6284) | **Medium** — new `app`-type plugin, follows PawApp pattern |
| **Windows desktop GUI automation (UIA + Tauri)** | [#5187](https://github.com/agentscope-ai/QwenPaw/pull/5187) | **Low–Medium** — large, long-open (since Jun 14), computer-use feature |
| **Async I/O utilities to unblock event loop** | [#6378](https://github.com/agentscope-ai/QwenPaw/pull/6378) | **High** — centralizes `io_utils`, touches chat/cron/inbox/trace |
| **Driver capability caching (stale TTL background refresh)** | [#6381](https://github.com/agentscope-ai/QwenPaw/pull/6381) | **High** — perf fix for shared `AgentBuilder` path |
| **Skill slash-inject re-apply (regression from v2.0)** | [#6345](https://github.com/agentscope-ai/QwenPaw/pull/6345) | **High** — under review, security-neutral |

**Prediction**: Next patch (post5) will likely include cron-model override, model discovery, async I/O, driver caching, and skill slash-inject. AG-UI and Creator app may target minor version.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Sentiment |
|------------|----------|-----------|
| **v2.0 slower than v1.x** | #6307: “~2 s fixed overhead per simple reply” | 😡 Frustrated — core regression |
| **Unstable / crashes** | #6376: “main process crashes frequently due to new loop feature; why no stress testing before release?” | 😡 Angry — trust erosion |
| **Windows basics broken** | #6239: PATH separator lost; #6361: test scripts don’t run | 😞 Disappointed — second-class platform |
| **Governance opaque & over-blocking** | #6379: official plugin denied, no UI to manage policy | 😕 Confused — safety vs usability |
| **HDD update nightmare** | #6380: 1.5 h vs 5–10 min on SSD | 😞 Neglected — infrastructure assumption mismatch |
| **Provider regressions** | #6362 (MiniMax vision), #6363 (GLM/DeepSeek tool calls) | 😕 Concerned — ecosystem reliability |
| **Positive** | Quick merges on governance, console, token-usage, downloader fixes | 👍 Responsive maintainers |

**Overall**: **High engagement, low satisfaction on v2.0 quality**. Users expect faster hotfix cadence and pre-release stress testing.

---

## 8. Backlog Watch — Stale / High-Value Items Needing Attention

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#5187](https://github.com/agentscope-ai/QwenPaw/pull/5187) Windows desktop GUI automation (UIA + Tauri) | 39 days | Unique differentiator (computer-use); large, needs review bandwidth |
| [#5861](https://github.com/agentscope-ai/QwenPaw/pull/5861) macOS login-shell PATH for packaged backend | 15 days | Unblocks Homebrew/nvm/mise/pyenv on macOS GUI launches |
| [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) Safe model discovery infrastructure | 2 days | Foundation for all provider UX; first integrations ready |
| [#6311](https://github.com/agentscope-ai/QwenPaw/pull/6311) Share ToolGuard safety_checks & unregister plugin tools | 2 days | Completes security refactor from #5796; reduces duplicate logic |
| [#6317](https://github.com/agentscope-ai/QwenPaw/pull/6317) Harden OMP workspace/fork/deny-all gates | 2 days | Post-merge regression fixes for subagent spawning |
| [#6284](https://github.com/agentscope-ai/QwenPaw/pull/6284) QwenPaw Creator app | 3 days | New app-type plugin; expands product surface |
| [#6337](https://github.com/agentscope-ai/QwenPaw/pull/6337) AG-UI protocol endpoint | 1 day | Interop standard; isolates from existing services |
| [#6307](https://github.com/agentscope-ai/QwenPaw/issues/6307) v2.0 2 s overhead | 2 days | **Top user pain**; needs profiling & architectural fix |
| [#6376](https://github.com/agentscope-ai/QwenPaw/issues/6376) Loop crashes main process | 1 day | **Stability blocker**; requires root-cause + stress test |

**Recommendation**: Prioritize #6307, #6376, #6362 (critical bugs), then #6302, #6311, #6317 (architectural hardening). Schedule #5187 and #6284 for dedicated review slots.

---

*Digest generated from GitHub data as of 2026-07-23. All links point to agentscope-ai/QwenPaw (CoPaw).*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-23

---

## 1. Today's Overview

ZeroClaw shows **intense development velocity** with 50 open PRs updated in the last 24 hours — all from active feature work, none yet merged. The evaluation framework (`zeroclaw-eval`) is receiving a massive multi-PR push (10+ stacked PRs from IftekharUddin) adding live execution, LLM-judge grading, baseline regression gating, JUnit reporting, and run-history receipts. Simultaneously, **six new issues were filed today** — five around provider authentication (Ollama Cloud, Z.AI, Kimi Code, MiniMax) and one configuration bug where `context_compression.enabled` defaults to `true` but is ignored at runtime. No releases were cut. The project is in a heavy pre-release feature-integration phase with elevated risk of merge conflicts and CI pressure.

---

## 2. Releases

**No new releases today.** The last release data is not provided in this snapshot.

---

## 3. Project Progress — Merged/Closed Today

**No PRs were merged or closed in the last 24 hours.** All 50 PRs remain open.  
**5 Issues were closed** (but not necessarily resolved via merged PRs):

| Issue | Title | Labels | Updated |
|-------|-------|--------|---------|
| [#5674](https://github.com/zeroclaw-labs/zeroclaw/issues/5674) | Make `classify_channel_reply_intent` configurable | enhancement, channel, runtime, p2 | 2026-07-23 |
| [#5628](https://github.com/zeroclaw-labs/zeroclaw/issues/5628) | Daemon service auto-starts on boot, causes port conflict | bug, config, runtime, service, p2 | 2026-07-23 |
| [#5127](https://github.com/zeroclaw-labs/zeroclaw/issues/5127) | bubblewrap sandbox: configurable writable paths and network access | enhancement, config, runtime, security, p2 | 2026-07-23 |
| [#5145](https://github.com/zeroclaw-labs/zeroclaw/issues/5145) | Add `send_channel_message` tool for direct per-user channel delivery | enhancement, channel, security, tool, p2 | 2026-07-23 |
| [#7673](https://github.com/zeroclaw-labs/zeroclaw/issues/7673) | RFC: Native context compression as a provider pipeline decorator | enhancement, config, memory, provider, runtime, p2, rfc, blocked | 2026-07-23 |

> **Note**: Closure without merged PRs suggests these may have been resolved via direct commits, superseded, or marked wontfix/duplicate. Check individual issues for resolution details.

---

## 4. Community Hot Topics — Most Active Issues & PRs

### Top Issues by Comment Count (last 24h)

| Issue | Comments | 👍 | Summary | Underlying Need |
|-------|----------|-----|---------|-----------------|
| [#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) | 12 | 1 | **S1 Bug**: Kimi Code `reasoning_content` lost across streamed tool-call history → 400 Bad Request | **Provider reliability** — streaming reasoning fields must survive multi-turn tool loops; blocks Kimi users |
| [#5146](https://github.com/zeroclaw-labs/zeroclaw/issues/5146) | 10 | 1 | Compile deterministic skill steps into capability-scoped WASM | **Performance & cost** — avoid sending 400+ line skill prompts to cloud LLMs for every trivial tool call |
| [#5601](https://github.com/zeroclaw-labs/zeroclaw/issues/5601) | 8 | 1 | Tracker: subscription-native auth for Ollama Cloud, Z.AI, Kimi Code, MiniMax | **Auth UX** — users want OAuth/login flows, not manual API key management |
| [#5674](https://github.com/zeroclaw-labs/zeroclaw/issues/5674) | 7 | 3 | Make `classify_channel_reply_intent` configurable (CLOSED) | **1:1 chat UX** — assistant incorrectly stays silent in DMs due to group-chat logic |
| [#5316](https://github.com/zeroclaw-labs/zeroclaw/issues/5316) | 6 | 0 | Complete SearXNG config + web-search failure recovery (CAPTCHA detection) | **Autonomous agent reliability** — web search fails silently on DDG CAPTCHAs; need privacy fallback |

### Top PRs by Activity (all from evaluation framework push)

| PR | Author | Scope | Risk/Size |
|----|--------|-------|-----------|
| [#9248](https://github.com/zeroclaw-labs/zeroclaw/pull/9248) | IftekharUddin | Append-only run-history receipts for eval trend analysis | Medium / XL |
| [#9245](https://github.com/zeroclaw-labs/zeroclaw/pull/9245) | IftekharUddin | Judge calibration tooling (dump, label, finalize, gate validation) | Medium / XL |
| [#9244](https://github.com/zeroclaw-labs/zeroclaw/pull/9244) | IftekharUddin | Seed & grade isolated case memory with exact expectations | High / XL |
| [#9224](https://github.com/zeroclaw-labs/zeroclaw/pull/9224) | IftekharUddin | Repeated live runs with pass@k, pass^k, error bars | High / XL |
| [#9221](https://github.com/zeroclaw-labs/zeroclaw/pull/9221) | IftekharUddin | Baseline files with paired regression gating & capability tracking | High / XL |

> **Pattern**: A single contributor (IftekharUddin) is driving a **coordinated 10+ PR stack** to mature the evaluation framework from replay-only to live, statistically rigorous, CI-gated regression testing. This is the project's largest current engineering investment.

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Component | Status | Fix PR? |
|----------|-------|-----------|--------|---------|
| **S1 – Workflow Blocked** | [#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) Kimi `reasoning_content` lost in streamed tool-call history → 400 error | provider (Kimi) | Open, accepted, no-stale | ❌ No PR linked |
| **S2 – Degraded Behavior** | [#9278](https://github.com/zeroclaw-labs/zeroclaw/issues/9278) `context_compression.enabled` defaults `true` but runtime ignores it | config/onboarding | Open (created today) | ❌ No PR linked |
| **S2 – Degraded Behavior** | [#8810](https://github.com/zeroclaw-labs/zeroclaw/issues/8810) Telegram documentation example is wrong | channel (Telegram) | In-progress, accepted | ✅ [#9234](https://github.com/zeroclaw-labs/zeroclaw/pull/9234) fixes rendering of reasoning-only turns |
| **S3 – Minor** | [#5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514) Telegram media groups split into multiple turns → duplicate agent replies | runtime/daemon (Telegram) | In-progress, accepted | ❌ No PR linked |

> **Critical gap**: The S1 Kimi bug (#5600) has been open since **April 10** (104 days) with no fix PR. Provider streaming reliability for reasoning models is a known weak point.

---

## 6. Feature Requests & Roadmap Signals

### High-Signal Requests (p2, accepted, recent activity)

| Issue | Area | Signal |
|-------|------|--------|
| [#5146](https://github.com/zeroclaw-labs/zeroclaw/issues/5146) | WASM-compiled skills | **Architecture shift** — move skill logic from prompt-bloat to deterministic sandboxed WASM; reduces latency, cost, prompt injection surface |
| [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) | `local_small` runtime profile + prompt-budget contract | **Local-first UX** — compact mode for small models; prevents instruction leakage, disables permissive parsing |
| [#5607](https://github.com/zeroclaw-labs/zeroclaw/issues/5607) | Deterministic precondition gates for cron jobs | **Operational safety** — cheap pre-checks before agent execution; skip cleanly on exit 10 |
| [#9273–#9276](https://github.com/zeroclaw-labs/zeroclaw/issues/9273) (4 issues today) | Subscription-native auth for Ollama Cloud, Z.AI, Kimi Code, MiniMax | **Auth consolidation** — follows #5601 tracker; all filed today by same author (Audacity88) — likely coordinated sprint |
| [#7673](https://github.com/zeroclaw-labs/zeroclaw/issues/7673) | RFC: Context compression as provider pipeline decorator | **Token economics** — wrap providers with compression; blocked, needs author action |

### Prediction: Next Version Likely Includes
1. **Evaluation framework graduation** — the 10-PR stack (#9212–#9248) is the clearest "ship candidate" — CI-gated regression suite, live mode, JUnit, baselines.
2. **Subscription auth for 4 providers** — #9273–#9276 are fresh, p2, accepted, follow-up; author is active maintainer (Audacity88).
3. **Telegram media-group batching** — #5514 in-progress, S3 but UX-visible.
4. **Web search hardening** — #5316 (SearXNG + CAPTCHA recovery) has help-wanted, p2, accepted.

---

## 7. User Feedback Summary — Pain Points & Use Cases

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Kimi Code broken for tool-use streams** | #5600: "thinking enabled but reasoning_content missing in assistant tool calls" — S1, 104 days open | Blocks users on Moonshot/Kimi provider; high-priority provider gap |
| **Daemon port conflict on manual run** | #5628: systemd auto-starts on boot, binds 42617; `zeroclaw daemon` fails | Dev/ops friction; closed but unclear if fixed |
| **Assistant ignores user in 1:1 Telegram** | #5674: `classify_channel_reply_intent` gate triggers incorrectly in DMs | Core chat UX failure; closed (fixed?) |
| **Web search silently fails on CAPTCHA** | #5316: DuckDuckGo CAPTCHAs kill autonomous agents; no recovery | Agents stall without visibility; needs SearXNG fallback |
| **Nix install path undocumented** | #5269: `cargo binstall zeroclaw` path not documented; UX/DX issue | Onboarding friction for Nix users |
| **ZeroCode text input lacks word-wise navigation** | #7467, #9277: no `Option+Left/Right` (macOS) / `Ctrl+Left/Right` | Editor ergonomics; two issues, same root cause |

> **Positive signal**: #5145 (`send_channel_message` tool) closed as completed — users wanted direct outbound messaging from agents without scheduled-job workarounds.

---

## 8. Backlog Watch — Stale High-Value Items Needing Attention

| Item | Age | Labels | Why It Matters |
|------|-----|--------|----------------|
| [#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) Kimi `reasoning_content` bug | **104 days** | bug, p1, provider:kimi, risk:high, status:accepted, status:no-stale | **S1 severity, oldest open bug** — blocks a major provider; no fix PR |
| [#5146](https://github.com/zeroclaw-labs/zeroclaw/issues/5146) WASM-compiled skills | **116 days** | enhancement, p2, runtime:wasm, domain:architecture, risk:high | Architectural lever for cost/latency/security; high complexity, no PR |
| [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) `local_small` runtime profile | **111 days** | enhancement, p2, security, tool, risk:high | Local-first compact mode; reduces prompt bloat & leakage; no PR |
| [#5316](https://github.com/zeroclaw-labs/zeroclaw/issues/5316) SearXNG + CAPTCHA recovery | **109 days** | enhancement, help wanted, tool:web, risk:high | Autonomous agent reliability; has help-wanted label — good contributor entry point |
| [#7673](https://github.com/zeroclaw-labs/zeroclaw/issues/7673) RFC: Context compression decorator | **38 days** | enhancement, rfc, blocked, needs-author-action, risk:high | Token-cost reduction at provider layer; blocked on design consensus |
| [#5269](https://github.com/zeroclaw-labs/zeroclaw/issues/5269) Nix install documentation | **111 days** | bug, help wanted, docs, risk:medium | Easy win for onboarding; has help-wanted, no PR |

---

## Summary Health Indicators

| Metric | Status |
|--------|--------|
| **Merge throughput** | ⚠️ **Zero merges in 24h** despite 50 active PRs — integration bottleneck likely |
| **Critical bug age** | 🔴 **S1 bug open 104 days** (#5600) — provider reliability gap |
| **Feature velocity** | 🟢 **Very high** — coordinated eval framework push + auth sprint |
| **Community engagement** | 🟡 **Moderate** — few 👍 on issues; most discussion in PR review |
| **Documentation debt** | 🟡 **Visible** — wrong Telegram docs, missing Nix install path, ZeroCode nav gaps |
| **Architectural bets** | 🟢 **Clear** — WASM skills, local-small profile, context compression, eval maturity |

---

*Digest generated from GitHub API data for zeroclaw-labs/zeroclaw on 2026-07-23. All links point to live GitHub items.*

</details>