# OpenClaw Ecosystem Digest 2026-08-14

> Issues: 130 | PRs: 500 | Projects covered: 12 | Generated: 2026-08-14 02:29 UTC

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

# OpenClaw Project Digest — 2026-08-14

## 1. Today's Overview
OpenClaw shows **very high development velocity** with 500 PRs and 130 issues updated in the last 24 hours. The project is in active maintenance mode with 125 PRs merged/closed today, indicating strong maintainer throughput. However, the issue backlog reveals **systemic stability concerns** — multiple P1/P2 bugs around session state corruption, message loss, memory management chaos, and subagent delivery failures. No new releases were published today, suggesting the team is focused on stabilizing the current beta/stable branches before cutting a release.

## 2. Releases
**No new releases today.** The latest stable appears to be `2026.7.1-2` with beta `2026.7.2-beta.4` in testing. Several PRs target the `sjf_openclaw_2026-07-31` branch for backports.

## 3. Project Progress (Merged/Closed PRs Today)
| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#123151](https://github.com/openclaw/openclaw/pull/123151) | fix(ai): provider terminal errors show as generic unknown error and trigger pointless failover | AI providers | Improves error visibility, prevents unnecessary failover |
| [#122344](https://github.com/openclaw/openclaw/pull/122344) | fix(models): make picker discovery profile-aware | Model picker, OpenAI | Fixes auth-profile association for discovered models |
| [#123421](https://github.com/openclaw/openclaw/pull/123421) | fix(sessions): hide unowned host catalogs on multi-user gateways | Gateway, sessions | Security fix: prevents non-admin users from listing host session catalogs |
| [#123312](https://github.com/openclaw/openclaw/pull/123312) | Scheduled rebuilds for published Docker images (CVE freshness) | Docker, security | Addresses stale base images between releases |

**Key advancement**: Authentication/profile handling fixes, multi-user gateway security, and Docker image hygiene.

## 4. Community Hot Topics (Most Active Issues/PRs)

### Top Issues by Comment Count
| Issue | Comments | Reactions | Core Problem |
|-------|----------|-----------|--------------|
| [#43747](https://github.com/openclaw/openclaw/issues/43747) Memory management chaos | 11 | 0 | **Platinum Hermit** — Inconsistent memory storage across users (SQLite vs. other), chunking/embedding behavior differs |
| [#67777](https://github.com/openclaw/openclaw/issues/67777) Subagent completion delivery lost | 10 | 0 | **Silver Shellfish** — Direct-announce timeout/drain/orphan prune loses subagent completions |
| [#47975](https://github.com/openclaw/openclaw/issues/47975) Subagent sessions persist, main unresponsive | 10 | 1 | **Silver Shellfish** — Subagent cleanup failure blocks main session |
| [#91363](https://github.com/openclaw/openclaw/issues/91363) Isolated cron fails "LLM request failed" | 10 | 6 | **Silver Shellfish** — Cron jobs never reach provider (usage.input=0) |
| [#97983](https://github.com/openclaw/openclaw/issues/97983) iOS/WebChat messages don't trigger replies | 9 | 2 | **Diamond Lobster** — Messages append to transcript but no assistant response |

**Underlying needs**: Users are hitting **core reliability gaps** in session lifecycle, message delivery, and memory subsystem. The "Platinum Hermit" and "Diamond Lobster" ratings indicate these are high-impact, hard-to-reproduce issues affecting production workloads.

### Top PRs by Activity
| PR | Status | Area |
|----|--------|------|
| [#123402](https://github.com/openclaw/openclaw/pull/123402) feat(anthropic): opt-in server-side compaction | Open | Anthropic provider, compaction |
| [#121945](https://github.com/openclaw/openclaw/pull/121945) fix(memory): complete Phase 1C read isolation | Open | Memory, security, multiplayer |
| [#123216](https://github.com/openclaw/openclaw/pull/123216) feat(secrets): authenticated egress substitution proxy | Open | Secrets, agent tooling |
| [#116562](https://github.com/openclaw/openclaw/pull/116562) fix(memory-core): recover primary embedding provider | Open | Memory, embeddings |

## 5. Bugs & Stability (Ranked by Severity)

### ��� Critical (P1, Platinum/Diamond rating, message/session loss)
| Issue | Summary | Fix PR? |
|-------|---------|---------|
| [#43747](https://github.com/openclaw/openclaw/issues/43747) | Memory management chaos — inconsistent storage, embedding behavior across users | No |
| [#67777](https://github.com/openclaw/openclaw/issues/67777) | Subagent completion delivery lost on timeout/drain/orphan | No |
| [#47975](https://github.com/openclaw/openclaw/issues/47975) | Subagent sessions persist, main session unresponsive | No |
| [#91363](https://github.com/openclaw/openclaw/issues/91363) | Isolated cron fails — requests never reach provider | No |
| [#97983](https://github.com/openclaw/openclaw/issues/97983) | iOS/WebChat messages don't trigger replies | No |
| [#111498](https://github.com/openclaw/openclaw/issues/111498) | Main agent blocked by workspace-state migration after Anthropic auth recovery | No |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | Unreaped hook/tool child processes → zombie accumulation | No |
| [#111944](https://github.com/openclaw/openclaw/issues/111944) | Codex commentary not delivered to Telegram | No |
| [#122618](https://github.com/openclaw/openclaw/issues/122618) | Compaction-safeguard discards structured summary body | No |
| [#114020](https://github.com/openclaw/openclaw/issues/114020) | Feishu/Telegram dispatch fails: missing runDispatchLifecycle | No |
| [#123242](https://github.com/openclaw/openclaw/issues/123242) | Android 2026.7.4 chat queued on stable Gateway 2026.7.1-2 | [#123242 linked PR](https://github.com/openclaw/openclaw/pull/123242) |
| [#120563](https://github.com/openclaw/openclaw/issues/120563) | Conversation history not sent to Ollama/custom provider | No |
| [#115436](https://github.com/openclaw/openclaw/issues/115436) | WhatsApp Web login fails (baileys 7.0.0-rc13) | No |
| [#119085](https://github.com/openclaw/openclaw/issues/119085) | `sessions cleanup --fix-missing` deletes transcripts without archive | [#119085 linked PR](https://github.com/openclaw/openclaw/pull/119085) |

### ��� High (P2, session-state/message-loss)
| Issue | Summary | Fix PR? |
|-------|---------|---------|
| [#123265](https://github.com/openclaw/openclaw/issues/123265) | `role:"custom"` serialized as trailing `role:"user"` on every request | No |
| [#42106](https://github.com/openclaw/openclaw/issues/42106) | Block streaming drops paragraph separators | [#42106 linked PR](https://github.com/openclaw/openclaw/pull/42106) |
| [#111799](https://github.com/openclaw/openclaw/issues/111799) | active-memory: ~45% timeout rate during agent turns | No |
| [#120006](https://github.com/openclaw/openclaw/issues/120006) | CLI session reset drops tool history, concurrent session key conflict | No |
| [#114084](https://github.com/openclaw/openclaw/issues/114084) | "no such table: session_entries" after migration | No |
| [#113169](https://github.com/openclaw/openclaw/issues/113169) | Silent OAuth refresh miss misreported as "No API key" | No |
| [#56078](https://github.com/openclaw/openclaw/issues/56078) | Cron job output not saved (no delivery channel detected) | No |
| [#59528](https://github.com/openclaw/openclaw/issues/59528) | Bundled openshell plugin broken since 2026.03.13 | No |

### ��� Medium (P3, UX friction)
| Issue | Summary |
|-------|---------|
| [#45758](https://github.com/openclaw/openclaw/issues/45758) | YAML config support |
| [#45508](https://github.com/openclaw/openclaw/issues/45508) | Self-hosted STT/TTS in webchat |
| [#45771](https://github.com/openclaw/openclaw/issues/45771) | Built-in pace-aware rate limiting |
| [#46058](https://github.com/openclaw/openclaw/issues/46058) | Chat-first Android surface discussion |
| [#46844](https://github.com/openclaw/openclaw/issues/46844) | Talk Mode idle timeout |

## 6. Feature Requests & Roadmap Signals

| Feature | Issue | Priority | Likelihood for Next Version |
|---------|-------|----------|----------------------------|
| **Anthropic server-side compaction** | [#10213](https://github.com/openclaw/openclaw/issues/10213) | P2 | **High** — PR [#123402](https://github.com/openclaw/openclaw/pull/123402) open and ready |
| **YAML config format** | [#45758](https://github.com/openclaw/openclaw/issues/45758) | P3 | Medium — active discussion, no PR |
| **Session TTL / max lifetime** | [#45390](https://github.com/openclaw/openclaw/issues/45390) | P2 | Medium — addresses context overflow pain |
| **Delivery queue TTL** | [#16555](https://github.com/openclaw/openclaw/issues/16555) | P1 | Medium — prevents stale message floods |
| **OpenRouter cost exposure** | [#9016](https://github.com/openclaw/openclaw/issues/9016) | P2 | Low — niche provider |
| **Self-hosted STT/TTS in webchat** | [#45508](https://github.com/openclaw/openclaw/issues/45508) | P2 | Low — requires frontend + gateway changes |
| **Pace-aware rate limiting** | [#45771](https://github.com/openclaw/openclaw/issues/45771) | P3 | Low — complex autonomous-agent feature |
| **LTS version** | [#87295](https://github.com/openclaw/openclaw/issues/87295) | P3 | **High demand** — 4����, enterprise need |
| **Claude CLI fast mode support** | [#115437](https://github.com/openclaw/openclaw/issues/115437) | P2 | Medium — PR linked, Anthropic Opus 5 support |
| **xAI cache routing header** | [#123246](https://github.com/openclaw/openclaw/issues/123246) | P3 | Low — new provider feature |

**Strongest signals**: Server-side compaction (PR ready), LTS demand (enterprise), session TTL (operational pain), delivery queue TTL (stability).

## 7. User Feedback Summary

### Pain Points (from issue descriptions)
1. **Memory subsystem unreliability** — "I never see any of our memory managed in same way" ([#43747](https://github.com/openclaw/openclaw/issues/43747))
2. **Subagent workflow broken** — Completions lost, sessions leak, main agent blocks ([#67777](https://github.com/openclaw/openclaw/issues/67777), [#47975](https://github.com/openclaw/openclaw/issues/47975))
3. **Mobile/webchat delivery failures** — Messages received but no reply triggered ([#97983](https://github.com/openclaw/openclaw/issues/97983))
4. **Cron/automation silent failures** — "LLM request failed" with zero provider usage ([#91363](https://github.com/openclaw/openclaw/issues/91363))
5. **Auth recovery leaves system stuck** — Workspace-state migration blocks main agent ([#111498](https://github.com/openclaw/openclaw/issues/111498))
6. **Zombie process accumulation** — Runtime degradation over time ([#97616](https://github.com/openclaw/openclaw/issues/97616))
7. **Compaction destroys summaries** — Structured summary body discarded ([#122618](https://github.com/openclaw/openclaw/issues/122618))

### Positive Signals
- Active PR engagement on memory authorization ([#121421](https://github.com/openclaw/openclaw/pull/121421), [#121422](https://github.com/openclaw/openclaw/pull/121422), [#121945](https://github.com/openclaw/openclaw/pull/121945))
- Server-side compaction implementation underway ([#123402](https://github.com/openclaw/openclaw/pull/123402))
- Multi-user gateway security fixes landing ([#123421](https://github.com/openclaw/openclaw/pull/123421))
- Docker CVE freshness automation proposed ([#123312](https://github.com/openclaw/openclaw/pull/123312))

### Use Cases Emerging
- Multiplayer/multi-agent deployments (memory isolation, session migration)
- Enterprise self-hosted voice (STT/TTS)
- Mobile-first interfaces (Android/iOS)
- Cost-aware autonomous agents (OpenRouter, rate limiting)
- Cron/automation reliability for scheduled tasks

## 8. Backlog Watch (Long-Unanswered Important Items)

| Item | Age | Priority | Why It Matters |
|------|-----|----------|----------------|
| [#43747](https://github.com/openclaw/openclaw/issues/43747) Memory chaos | 5 months | P2, Platinum Hermit | **Core subsystem**, affects all users, no fix PR |
| [#67777](https://github.com/openclaw/openclaw/issues/67777) Subagent delivery loss | 4 months | P1, Silver Shellfish | **Blocks autonomous workflows**, no fix PR |
| [#47975](https://github.com/openclaw/openclaw/issues/47975) Subagent persistence | 5 months | P1, Silver Shellfish | **Session corruption**, 1����, no fix PR |
| [#91363](https://github.com/openclaw/openclaw/issues/91363) Cron failures | 2 months | P1, Silver Shellfish | **Automation broken**, 6����, no fix PR |
| [#97983](https

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: AI Agent & Personal Assistant Open-Source Ecosystem (2026-08-14)

---

## 1. Ecosystem Overview

The personal AI agent ecosystem is **highly fragmented but intensely active**, with 10 of 12 tracked projects showing significant development velocity in the past 24 hours. A clear bifurcation exists: **core platforms** (OpenClaw, IronClaw, Hermes, NanoClaw, CoPaw) are investing in architectural overhauls—pluggable harnesses, kernel/harness separation, template/plugin systems—while **specialized forks** (NanoBot, PicoClaw, LobsterAI, Moltis, ZeroClaw) focus on UX polish, connector durability, and enterprise hardening. Security incidents (CoPaw's unauthenticated plugin API RCE) and systemic stability gaps (OpenClaw's memory/subagent chaos) reveal that **production-grade reliability remains the universal frontier**. No project has achieved "boring stability"; all are iterating rapidly on session lifecycle, message delivery, and multi-user isolation.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Today | Health Score* |
|---------|-------------|-----------|---------------|---------------|
| **OpenClaw** | 130 | 500 | No | ��� High velocity, systemic P1 bugs |
| **NanoBot** | 11 | 32 | No | ��� High velocity, critical fixes merging |
| **Hermes Agent** | 9 | 50 | **Yes (v0.20.1)** | ��� Stabilization phase, patch release cut |
| **PicoClaw** | 2 | 9 | No | ��� Maintenance mode, UX regression stale |
| **NanoClaw** | 2 | 13 | **Yes (v2.2.0)** | ��� Platform stabilization, supply-chain focus |
| **NullClaw** | 0 | 0 | No | ��� Inactive |
| **IronClaw** | 30 | 50 | **Yes (v1.2.0)** | ��� Architectural pivot ratified, high velocity |
| **LobsterAI** | 2 | 10 | No | ��� UI unification, enterprise prep, test debt paydown |
| **Moltis** | 1 | 4 | No | ��� Maintenance + connector extension |
| **CoPaw/QwenPaw** | 21 | 50 | **Yes (v2.1.0 + beta.5)** | ��� Critical security incident, high feature velocity |
| **ZeptoClaw** | 0 | 0 | No | ��� Inactive |
| **ZeroClaw** | 3 | 50 | No | ��� Infrastructure/security hardening sprint |

*Health Score: ��� Healthy iteration • ��� Active but concerns • ��� Critical issues or inactive

---

## 3. OpenClaw's Position

**Advantages vs Peers:**
- **Largest contributor throughput** (500 PRs/24h, 125 merged)—dwarfs all others; indicates deep maintainer bench
- **Reference implementation status**—multiple projects (PicoClaw, LobsterAI, Moltis) track or fork OpenClaw core
- **Broadest protocol surface**: gateway, multi-user sessions, mobile/web clients, subagent orchestration, memory subsystem

**Technical Approach Differences:**
- **Monolithic core with plugin extension** vs. IronClaw/Hermes/NanoClaw's **kernel + pluggable harness** decomposition
- **Session-centric architecture** (session as unit of isolation) vs. IronClaw's **thread/harness model** and NanoClaw's **agent-group/template model**
- **Provider-agnostic routing with failover** built into core vs. ZeroClaw's documented routing lifecycle or Hermes' per-profile gateway

**Community Size Comparison:**
- **Issues/PRs volume** suggests largest active contributor base; however, **P1 bug backlog** (13 critical issues, 0 fix PRs for top 5) indicates community friction exceeds resolution capacity
- **Enterprise demand signals** (LTS request 4����, multi-user gateway security) stronger than peers but unmet

---

## 4. Shared Technical Focus Areas

| Requirement | Projects Affected | Specific Needs |
|-------------|-------------------|----------------|
| **Session lifecycle reliability** | OpenClaw, NanoBot, Hermes, CoPaw, NanoClaw | Subagent completion delivery, session migration, concurrent session isolation, `/new` reset behavior |
| **Message delivery guarantees** | OpenClaw, NanoBot, Hermes, CoPaw, IronClaw | Cron/automation delivery, mobile/webchat reply triggers, WebSocket/Telegram/Matrix dispatch, approval card idempotency |
| **Memory subsystem coherence** | OpenClaw, NanoBot, LobsterAI, ZeroClaw, CoPaw | Cross-user storage consistency, embedding provider recovery, compaction safeguards, long-term memory (Hindsight/ViBo) |
| **Supply-chain security** | NanoClaw, IronClaw, ZeroClaw, Hermes | Sigstore keyless signing, publisher identity pinning, SBOM/attestation, dependency hygiene (Dependabot storms) |
| **Pluggable execution / harness model** | IronClaw, NanoClaw, Hermes, CoPaw | Harness driver contracts, capability sockets, agent image pinning, template/plugin versioning |
| **Multi-user / enterprise isolation** | OpenClaw, NanoClaw, LobsterAI, IronClaw | Gateway session catalogs, project-scoped sessions, sender-type-aware approval, audit bridges |
| **Voice/STT/TTS integration** | OpenClaw, Hermes, PicoClaw, CoPaw | Self-hosted STT/TTS, streaming TTS (MiniMax), Whisper alternatives, audio transcription model flexibility |
| **Cost/token observability** | NanoBot, ZeroClaw, Hermes, CoPaw | MCP schema byte budgets, token accounting on trim, provider cost exposure, pace-aware rate limiting |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | IronClaw | Hermes | NanoClaw | CoPaw | NanoBot | LobsterAI | ZeroClaw |
|-----------|----------|----------|--------|----------|-------|---------|-----------|----------|
| **Architecture** | Monolithic core + plugins | Kernel + pluggable harnesses | Desktop-first gateway + CLI | Agent groups + template plugins | OS Shell (windowed apps) | Consolidation + cron + WebUI | UI-unified skills/MCP/kits | Rust workspace + gateway |
| **Target User** | Self-hosters, multi-user teams | Platform builders, harness authors | Desktop power users, gateway ops | Template-driven agent fleets | End-users (OS-like UX) | Personal automation + WebUI | Enterprise/internal teams | Infrastructure/security-focused |
| **Session Model** | Session-centric, subagents | Thread + harness loop | Session + project + lineage | Agent group + template stamp | Chat tabs + windowed apps | Session + consolidation | Cowork + scheduled tasks | Queue + idle eviction |
| **Extension Point** | Providers, tools, memory | Harnesses, capability socket | Skills, providers, desktop apps | Agent Plugins 1.0.0 | Plugins, apps, channels | Skills, MCP, Dream | Kits, MCP, Skills | SOPs, providers, tools |
| **Release Cadence** | Beta/stable branches, no LTS | RC → stable (v1.2.0) | Patch rollups (v0.20.1) | Template-driven (v2.2.0) | Beta + stable same day | Unversioned, continuous | Enterprise prep (v4 Pro) | Continuous, undated |
| **Differentiator** | Breadth of protocols | Harness conformance suite | Desktop UX + zero-downtime upgrade | In-place template updates | Windowed OS Shell + app catalog | Dream consolidation + budget MCP | Unified connector UI + evergreen | SSRF gates + provider routing docs |

---

## 6. Community Momentum & Maturity

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Rapid Architectural Iteration** | IronClaw, NanoClaw, Hermes, CoPaw | Major refactors landing (Reborn, Agent Plugins, Unbound-turns, OS Shell); high PR velocity; release cutting |
| **Stabilization & Polish** | NanoBot, LobsterAI, ZeroClaw | Critical bug fixes merging; UX unification; test coverage expansion; security hardening sprints |
| **Reference Maintenance** | OpenClaw | Highest raw throughput but systemic P1 backlog; community demand exceeds fix velocity |
| **Maintenance Mode** | PicoClaw, Moltis | Dependency upkeep + targeted fixes; low contributor count; stale high-impact issues |
| **Inactive** | NullClaw, ZeptoClaw | No 24h activity |

**Key Insight**: The ecosystem is **not converging**—each project pursues distinct architectural bets (harnesses vs. templates vs. OS Shell vs. kernel). Cross-pollination occurs via shared pain points (session reliability, supply-chain security) rather than shared code.

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **Harness/Plugin standardization** | IronClaw HarnessDriver v1, NanoClaw Agent Plugins 1.0.0, Hermes skills, CoPaw plugins | **Build to contracts, not monoliths**—expect conformance suites and capability sockets to become integration baseline |
| **Session → Thread/Harness shift** | IronClaw unbound-turns, OpenClaw subagent chaos, Hermes lineage search, NanoBot consolidation | **Session is the wrong abstraction** for multi-agent; thread/harness with checkpointing is emerging primitive |
| **Supply-chain as product feature** | NanoClaw Sigstore keyless + auto-approve, IronClaw iron-proxy audit bridge, ZeroClaw SSRF gates, Hermes KittenTTS pin | **Verifiable agent images & egress audit** are becoming table stakes for enterprise adoption |
| **Memory as separable service** | OpenClaw memory chaos, NanoBot Dream consolidation, ZeroClaw ViBo Cloud, NanoClaw Hindsight MCP, CoPaw ViBo proposal | **Externalizable, versioned memory layers** (MCP-wrapped) will replace embedded stores |
| **Multi-protocol gateway maturity** | OpenClaw multi-user gateway, NanoClaw template stamping, Hermes per-profile WS, CoPaw Matrix/Telegram/Feishu | **Gateway = identity + routing + policy**; projects investing here capture fleet deployments |
| **Desktop/OS Shell as differentiator** | Hermes native client demand, CoPaw OS Shell, LobsterAI UI unification, PicoClaw WebChat lag | **Local-first UX (windowed, daemon, tray) beats CLI-only** for retention; expect Electron/Tauri investment |
| **Cost-aware autonomy** | NanoBot MCP byte budget, ZeroClaw token accounting, OpenClaw OpenRouter cost, Hermes cache tokens | **Token budgets, provider routing by cost, pace limiting** are moving from ops concern to core feature |

---

**Bottom Line for Decision-Makers**: The ecosystem is **pre-consolidation**. No single project covers the full production stack reliably. Teams should: (1) **pick an architectural bet** (harness vs. template vs. OS Shell) aligned to their deployment model; (2) **contribute to shared pain points** (session reliability, supply-chain, memory protocols) where cross-project leverage exists; (3) **treat "stable" labels skeptically**—all active projects ship P1 fixes post-release.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-14

## 1. Today's Overview
NanoBot shows **high development velocity** with 43 total items updated in the last 24 hours (11 issues, 32 PRs). The project is actively addressing critical stability bugs in the cron scheduler, session persistence, and consolidation logic — multiple PRs target the same root causes, indicating rapid response. WebUI enhancements (drag-and-drop, collaboration, folder picker) and Telegram/Matrix protocol improvements are progressing in parallel. No new release was cut today, but the volume of merged/closed PRs (9) suggests a release candidate may be forming.

## 2. Releases
**No new releases today.** The latest version remains whatever was published prior to 2026-08-14.

## 3. Project Progress — Merged/Closed PRs Today (9 items)

| PR | Type | Summary | Link |
|----|------|---------|------|
| #5381 | �� Feature | Native workspace folder picker for WebUI (macOS/Windows/Linux) | [#5381](https://github.com/HKUDS/nanobot/pull/5381) |
| #5384 | �� Fix | Restore transcript-only session history in WebUI sidebar | [#5384](https://github.com/HKUDS/nanobot/pull/5384) |
| #5374 | �� Fix | Keep cron scheduler alive on job-store persistence failure | [#5374](https://github.com/HKUDS/nanobot/pull/5374) |
| #5375 | �� Fix | Duplicate fix for cron scheduler persistence failure (with tests) | [#5375](https://github.com/HKUDS/nanobot/pull/5375) |
| #4556 | �� Feature | Wire up `model_override` for Dream consolidation | [#4556](https://github.com/HKUDS/nanobot/pull/4556) |

**Key advances:**  
- **Cron scheduler resilience** fixed in three PRs (#5374, #5375, #5376) — a single persistence error no longer kills the scheduler permanently.  
- **WebUI UX** gains native folder picker and transcript-only history recovery.  
- **Dream consolidation** now respects per-run model override (long-standing #4029).

## 4. Community Hot Topics — Most Active Issues/PRs

| Item | Type | Comments | Summary | Underlying Need |
|------|------|----------|---------|-----------------|
| [#5373](https://github.com/HKUDS/nanobot/issues/5373) | Issue | 1 | Cron scheduler dies permanently after job-store persistence failure | **Reliability** — operators need background jobs to survive transient disk/permission issues |
| [#5298](https://github.com/HKUDS/nanobot/issues/5298) | Issue | 1 | Budget model-visible MCP schemas for large tool sets | **Token/cost control** — prevent context explosion when hundreds of MCP tools are registered |
| [#5289](https://github.com/HKUDS/nanobot/issues/5289) | Issue | 1 | Telegram: stickers & agent-initiated reactions | **Platform parity** — Telegram users expect rich media & reaction UX |
| [#5251](https://github.com/HKUDS/nanobot/issues/5251) | Issue | 1 | WebUI: MCP Apps host support | **Extensibility** — render interactive MCP App UIs instead of plain text results |
| [#4841](https://github.com/HKUDS/nanobot/issues/4841) | Issue | 1 | Matrix bot shows as "untrusted" in Element (no cross-signing/SAS) | **Security UX** — eliminate scary warnings for E2EE Matrix users |

**Pattern:** Users are pushing for **production-grade reliability** (cron, session persistence), **cost-aware model usage** (MCP schema budgeting), and **rich platform features** (Telegram stickers, Matrix verification, MCP Apps UI).

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Description | Fix PR(s) |
|----------|-------|-------------|-----------|
| ��� **Critical** | [#5373](https://github.com/HKUDS/nanobot/issues/5373) | Cron scheduler dies permanently on any persistence error (disk full, locked file, permission change) | [#5376](https://github.com/HKUDS/nanobot/pull/5376), [#5374](https://github.com/HKUDS/nanobot/pull/5374), [#5375](https://github.com/HKUDS/nanobot/pull/5375) |
| ��� **Critical** | [#5306](https://github.com/HKUDS/nanobot/issues/5306) | `exec.allowPatterns` shell-chain bypass → unintended command execution | *(Closed, fix likely in related PRs)* |
| ��� **High** | [#5378](https://github.com/HKUDS/nanobot/issues/5378) | File-cap archive failure mutates session before persistence → data loss on retry | [#5380](https://github.com/HKUDS/nanobot/pull/5380) |
| ��� **High** | [#5377](https://github.com/HKUDS/nanobot/issues/5377) | Consolidation truncates archive input but advances cursor past full batch → messages skipped | [#5379](https://github.com/HKUDS/nanobot/pull/5379) |
| ��� **Medium** | [#5368](https://github.com/HKUDS/nanobot/issues/5368) | WebUI: copy/fork actions appear while agent turn still running → conflicting completion signals | *(Open, no fix PR yet)* |
| ��� **Medium** | [#5366](https://github.com/HKUDS/nanobot/issues/5366) | WebUI: Agent activity text not localized (English only) | *(Open, no fix PR yet)* |
| ��� **Medium** | [#5382](https://github.com/HKUDS/nanobot/pull/5382) | Windows `os.replace()` transient `Access denied` crashes gateway during heartbeat cron | [#5382](https://github.com/HKUDS/nanobot/pull/5382) (open) |

**Note:** Three independent PRs (#5374, #5375, #5376) fix the same cron bug — suggests urgency and possible merge conflict resolution in progress.

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood for Next Version | Rationale |
|---------|--------|-----------------------------|-----------|
| **MCP schema byte budget** | [#5298](https://github.com/HKUDS/nanobot/issues/5298), [#5388](https://github.com/HKUDS/nanobot/pull/5388) | ��� High | PR #5388 already implements opt-in budget; addresses real cost pain point |
| **Telegram stickers & reactions** | [#5289](https://github.com/HKUDS/nanobot/issues/5289), [#5387](https://github.com/HKUDS/nanobot/pull/5387) | ��� High | PR #5387 implements reusable sticker replies + inbound sticker metadata |
| **MCP Apps host in WebUI** | [#5251](https://github.com/HKUDS/nanobot/issues/5251), [#5386](https://github.com/HKUDS/nanobot/pull/5386) | ��� High | PR #5386 preserves MCP Apps result metadata; UI work likely next |
| **Matrix cross-signing / SAS verification** | [#4841](https://github.com/HKUDS/nanobot/issues/4841), [#5385](https://github.com/HKUDS/nanobot/pull/5385) | ��� High | PR #5385 completes Element SAS request flow |
| **WebUI drag-and-drop session organization** | [#5389](https://github.com/HKUDS/nanobot/pull/5389) | ��� Medium | New PR today, no linked issue — UX polish |
| **Session collaboration via mentions** | [#5358](https://github.com/HKUDS/nanobot/pull/5358) | ��� Medium | Complex multi-session feature, marked `conflict` |
| **Heartbeat model_override & isolated_session** | [#4549](https://github.com/HKUDS/nanobot/pull/4549), [#4551](https://github.com/HKUDS/nanobot/pull/4551) | ��� Medium | Open since June, still active — niche but requested |

## 7. User Feedback Summary

| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Cron jobs silently stop** | #5373: "scheduler dies permanently after a single job-store persistence failure" | Background automation (heartbeats, cleanups) becomes unreliable |
| **Session data loss on archive failure** | #5378: "mutates the session before persistence… later successful save cannot recover" | Users lose message history during disk/permission hiccups |
| **Consolidation skips messages** | #5377: "advances past the full message batch" after truncation | Memory gaps in long conversations |
| **Matrix bot untrusted warning** | #4841: "no clean way to clear this warning" | E2EE users see alarming UI in Element; blocks adoption |
| **WebUI shows English activity text** | #5366: "Agent activity still contains English-only text" | Non-English users get fragmented localized experience |
| **Conflicting copy/fork during generation** | #5368: "creates conflicting completion signals" | UX confusion during streaming responses |
| **Windows transient permission errors crash gateway** | #5382: "crashed the whole gateway" during heartbeat cron | Windows operators experience hard crashes |

**Positive signals:** Rapid PR response to critical bugs (cron, session, consolidation) shows maintainers prioritize data integrity. WebUI and protocol features (Telegram, Matrix, MCP Apps) receive steady investment.

## 8. Backlog Watch — Long-Unanswered / Stalled Items

| Item | Age | Status | Why It Needs Attention |
|------|-----|--------|------------------------|
| [#4549](https://github.com/HKUDS/nanobot/pull/4549) | ~50 days | Open | Heartbeat `model_override` — reduces cost for periodic tasks; ready but unmerged |
| [#4551](https://github.com/HKUDS/nanobot/pull/4551) | ~50 days | Open | Heartbeat `isolated_session` — enables shared context for notifications; companion to #4549 |
| [#4841](https://github.com/HKUDS/nanobot/issues/4841) | ~38 days | Open | Matrix cross-signing — security UX blocker; PR #5385 exists but issue still open |
| [#5251](https://github.com/HKUDS/nanobot/issues/5251) | ~9 days | Open | MCP Apps host in WebUI — high-value extensibility; PR #5386 preserves metadata but UI missing |
| [#5358](https://github.com/HKUDS/nanobot/pull/5358) | ~2 days | Open (conflict) | Session collaboration via mentions — complex, needs design review |
| [#5389](https://github.com/HKUDS/nanobot/pull/5389) | Today | Open | Drag-and-drop session org — new, no issue tracking; may need UX validation |

---

**Overall Health:** ��� **Healthy but busy** — Critical bugs are being fixed rapidly, feature velocity is high, and protocol/platform gaps are closing. The main risk is **merge conflicts/duplicate PRs** (e.g., three cron fixes) and **long-running heartbeat PRs** that could simplify operations. A patch release consolidating the cron/session/consolidation fixes would stabilize production deployments.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-14

## 1. Today's Overview
Hermes Agent shipped a **patch release v0.20.1** (v2026.8.13) rolling up ~656 PRs since v0.20.0, signaling a stabilization push after a heavy development cycle. The repo shows **high velocity**: 50 PRs and 9 issues touched in the last 24h, with 8 PRs merged/closed today alone. Activity spans desktop UX, gateway/agent core, provider integrations, voice/STT/TTS, session management, and security hardening. The volume of P1–P2 bugs filed today (5) suggests the recent merge window surfaced regressions that are now being triaged rapidly.

## 2. Releases
### v2026.8.13 — Hermes Agent v0.20.1 (2026-08-13)
- **Type**: Patch/stable rollup tag for downstream consumers (Docker, hosted deployments, `latest` tag installs).
- **Scope**: ~656 PRs merged since v0.20.0.
- **Breaking changes / migration**: None documented in the release note; this is a stabilization tag.
- **Artifacts**: Docker images, hosted deployments, and `latest` installer now point to this build.
- **Link**: [Release v2026.8.13](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.8.13)

## 3. Project Progress (Merged/Closed PRs Today)
| PR | Area | Summary |
|----|------|---------|
| [#84155](https://github.com/NousResearch/hermes-agent/pull/84155) | Desktop (macOS) | Persist dropped screenshot bytes before attach — fixes Finder drag-drop where preview worked but submit failed with “image not found”. |
| [#67257](https://github.com/NousResearch/hermes-agent/pull/67257) | Desktop, CLI, Skills | Fix desktop launch crash (RangeError) from infinite recursion rendering reasoning content; Python 3.9 compat + profile pin. |
| [#67251](https://github.com/NousResearch/hermes-agent/pull/67251) | Desktop, Agent, CLI, Skills, Gemini | Duplicate of #67257 (same crash, markdown lexer recursion). |
| *5 others merged/closed* | — | Not detailed in feed; likely small fixes/docs. |

**Net advance**: Critical desktop crash on reasoning rendering is resolved; macOS screenshot attachment hardened; Python 3.9 support restored.

## 4. Community Hot Topics (Most Active Issues/PRs)
| Item | Type | Comments | ��� | Core Need |
|------|------|----------|----|-----------|
| [#35966](https://github.com/NousResearch/hermes-agent/issues/35966) | Feature | 5 | 4 | **Native desktop/mobile client** — users want a first-party app talking directly to the local Gateway/API, bypassing Telegram/Discord/CLI intermediaries. |
| [#75539](https://github.com/NousResearch/hermes-agent/issues/75539) | Feature | 4 | 0 | **Move session to project** in Desktop — sessions auto-assigned to wrong project; no UI to reassign. |
| [#71023](https://github.com/NousResearch/hermes-agent/issues/71023) | Feature | 4 | 1 | **Live/zero-downtime upgrade** — `hermes update` kills all subagents; users need in-place rolling updates. |
| [#85756](https://github.com/NousResearch/hermes-agent/issues/85756) | Bug (P1) | 0 | 0 | **session_search blind to current lineage** — `/new` reset sessions excluded from recall, breaking gateway memory. |
| [#85753](https://github.com/NousResearch/hermes-agent/issues/85753) | Bug (P2) | 0 | 0 | **`hermes update` stalls at autostash prompt on macOS** — gateway restart skipped, stale code served. |

**Signal**: Desktop UX polish (session mgmt, native client) and **operational reliability** (zero-downtime updates, update stalls) are top community asks.

## 5. Bugs & Stability (Reported Today, Ranked by Severity)
| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **P1** | [#85756](https://github.com/NousResearch/hermes-agent/issues/85756) | `session_search` excludes all hits from current session’s `/new`-reset lineage → gateway recall blind for child sessions. | [#85764](https://github.com/NousResearch/hermes-agent/pull/85764) (open) |
| **P2** | [#85758](https://github.com/NousResearch/hermes-agent/issues/85758) | `PermissionError` in `_find_git_root()` crashes system prompt building for gateway-mode agents (config `terminal.cwd` → `TERMINAL_CWD`). | — |
| **P2** | [#85753](https://github.com/NousResearch/hermes-agent/issues/85753) | `hermes update` stalls at autostash restore prompt on macOS; post-update gateway restart never runs → stale gateway. | — |
| **P2** | [#85104](https://github.com/NousResearch/hermes-agent/issues/85104) | Desktop: same assistant message rendered twice in chat (single DB row) — frontend rendering bug. | — |
| **P2** | [#85769](https://github.com/NousResearch/hermes-agent/pull/85769) | Usage normalization: cache/usage/reasoning tokens silently zeroed for many provider wire shapes. | PR open (5-PR consolidation) |
| **P3** | [#85741](https://github.com/NousResearch/hermes-agent/issues/85741) | `hermes config set agent.reasoning_effort` emits false “unrecognized key” warning (value saves OK). | — |

**Stability note**: Two P1/P2 bugs have open fix PRs (#85764, #85769); the update stall (#85753) and git-root crash (#85758) are unpatched as of this digest.

## 6. Feature Requests & Roadmap Signals
| Request | Issue | Likelihood (Next Version) | Rationale |
|---------|-------|---------------------------|-----------|
| Native desktop/mobile client | [#35966](https://github.com/NousResearch/hermes-agent/issues/35966) | Medium | High community interest (4����, 5 comments), but “needs-decision” on architecture; likely a multi-cycle effort. |
| Move session to project (Desktop) | [#75539](https://github.com/NousResearch/hermes-agent/issues/75539) | High | Clear UX gap, low complexity, “needs-decision” only on UI placement. |
| Live/zero-downtime upgrade | [#71023](https://github.com/NousResearch/hermes-agent/issues/71023) | Medium | Architectural (subagent reparenting); marked “needs-decision” + “area/install-update”. |
| Box productivity skill (bundled) | [#85767](https://github.com/NousResearch/hermes-agent/pull/85767) | High | PR open, salvages prior work (#52107), self-contained skill addition. |
| Inworld provider | [#85774](https://github.com/NousResearch/hermes-agent/pull/85774) | High | OpenAI-compatible endpoint; straightforward provider plugin. |
| MCP launch targets on consent card | [#85775](https://github.com/NousResearch/hermes-agent/pull/85775) | High | Port from kimi-code#2843; desktop UX hardening. |
| Configurable beam_size + prewarm for local Whisper | [#85773](https://github.com/NousResearch/hermes-agent/pull/85773) | High | Perf-only, no behavior change. |
| MiniMax chunked-PCM TTS streaming | [#85771](https://github.com/NousResearch/hermes-agent/pull/85771) | High | Unblocks remote-gateway TTS payload bloat. |

**Prediction**: Next patch (v0.20.2) will likely include the Box skill, Inworld provider, MCP consent card, Whisper/STT perf flags, MiniMax TTS streaming, and the P1 session-search fix. Zero-downtime upgrade and native client are larger investments.

## 7. User Feedback Summary (Pain Points & Use Cases)
- **Desktop stability**: Recurring crashes on reasoning rendering (now fixed), duplicate message render, session list bounce at date dividers ([#85766](https://github.com/NousResearch/hermes-agent/pull/85766)).
- **Gateway/remote workflow**: Users run `hermes gateway run -p <profile>` and hit config propagation bugs (`TERMINAL_CWD` → git root crash, per-profile remote WS routing broken [#85750](https://github.com/NousResearch/hermes-agent/pull/85750)).
- **Update anxiety**: `hermes update` stalls on macOS autostash prompt, leaving gateway on stale code ([#85753](https://github.com/NousResearch/hermes-agent/issues/85753)); subagent kill on update forces workflow interruption ([#71023](https://github.com/NousResearch/hermes-agent/issues/71023)).
- **Session hygiene**: No “move to project” action; `/new` reset sessions invisible to search ([#85756](https://github.com/NousResearch/hermes-agent/issues/85756)).
- **Provider transparency**: Plugins can’t show live provider ($currentProvider not bridged) ([#85776](https://github.com/NousResearch/hermes-agent/issues/85776)).
- **Voice/STT/TTS latency**: Hardcoded silence duration (1250ms) ignored on desktop ([#85772](https://github.com/NousResearch/hermes-agent/pull/85772)); Whisper beam_size pinned at 5 ([#85773](https://github.com/NousResearch/hermes-agent/pull/85773)); MiniMax TTS lacked streaming ([#85771](https://github.com/NousResearch/hermes-agent/pull/85771)).

**Sentiment**: Users are invested in the desktop/gateway combo but frustrated by rough edges in update flow, session mgmt, and remote-config propagation. Fix velocity is high, which maintains confidence.

## 8. Backlog Watch (Stale/High-Impact Items Needing Maintainer Attention)
| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#35966](https://github.com/NousResearch/hermes-agent/issues/35966) Native client | 76 days | Strategic: first-party client removes platform lock-in; 4����, 5 comments. | Open, needs architectural decision. |
| [#71023](https://github.com/NousResearch/hermes-agent/issues/71023) Live upgrade | 21 days | Operational: zero-downtime updates critical for long-running agent fleets. | Open, needs-decision, area/install-update. |
| [#67934](https://github.com/NousResearch/hermes-agent/pull/67934) Ollama native tags | 25 days | Compatibility: fixes model discovery for local Ollama without breaking generic OpenAI-compat. | Open, duplicate label, needs review. |
| [#82891](https://github.com/NousResearch/hermes-agent/pull/82891) KittenTTS wheel pin | 4 days | Security: supply-chain hardening for third-party TTS wheel. | Open, security label. |
| [#77773](https://github.com/NousResearch/hermes-agent/pull/77773) Playwright install stuck | 11 days | CI/UX: blocks browser tool installs; upstream Playwright issue. | Open, references external fix. |

---

**Overall Health**: ��� **Healthy, high-velocity stabilization phase**. Release v0.20.1 caps a massive merge window; today’s PRs show focused bug-crushing (8 merged, 10+ bug-fix PRs open). Critical P1 session-search fix is in review. Community asks align with near-term roadmap (Desktop UX, provider expansion, update reliability). Watch the macOS update stall (#85753) and git-root crash (#85758) for next hotfix.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-14

## 1. Today's Overview
PicoClaw shows **moderate maintenance activity** with 9 PR updates (mostly automated dependency bumps) and 2 issue updates in the last 24 hours. No new release was cut. The project is in a steady dependency-upkeep phase: Dependabot opened 6 fresh Go/JS dependency PRs while 3 older stale PRs were closed. Community engagement remains low — only one user-reported bug (#3281) has traction (5 comments, 1 ���), and a new feature request (#3331) awaits triage. Overall health: **stable but quiet**; the backlog contains a high-impact UX regression (chat input lag) that has been open for ~3 weeks without a fix PR.

## 2. Releases
**No new releases** published today. Current latest version remains **0.3.1** (per issue #3281).

## 3. Project Progress (Merged/Closed PRs Today)
| PR | Type | Outcome | Notes |
|----|------|---------|-------|
| [#3305](https://github.com/sipeed/picoclaw/pull/3305) | Dependabot: `aws-sdk-go-v2/service/bedrockruntime` 1.53.3 → 1.56.2 | **Closed (stale)** | Superseded by newer PR #3336 (→ 1.57.1). |
| [#3306](https://github.com/sipeed/picoclaw/pull/3306) | Dependabot: `aws-sdk-go-v2/config` 1.32.25 → 1.32.33 | **Closed (stale)** | Superseded by #3335 (→ 1.32.35). |
| [#3304](https://github.com/sipeed/picoclaw/pull/3304) | Dependabot: `anthropic-sdk-go` 1.55.1 → 1.61.0 | **Closed (stale)** | Superseded by #3334 (→ 1.62.0). |

**Net effect:** Three stale dependabot PRs cleaned up; six newer dependency PRs remain open awaiting review/merge.

## 4. Community Hot Topics
| Item | Activity | Core Need |
|------|----------|-----------|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) **Web UI chat input lag with long history** | 5 comments, 1 ���, updated 2026-08-13 | **Critical UX regression**: Input becomes unusably slow as session history grows. Users expect virtualized rendering or memoized input handling. No fix PR yet. |
| [#3331](https://github.com/sipeed/picoclaw/issues/3331) **Support non-Whisper models for `/audio/transcriptions`** | 0 comments, created 2026-08-13 | **Extensibility request**: Allow any model exposing the OpenAI-compatible transcription endpoint, not just `*-whisper-*`. Suggests config flag `whisper-transcription: true`. Awaiting maintainer feedback. |
| [#3318](https://github.com/sipeed/picoclaw/pull/3318) **Fix broken `pnpm-lock.yaml` (duplicate `semver` key)** | Stale since 2026-08-05, 0 comments | **Build blocker**: Lockfile is unparseable by pnpm, preventing frontend CI/install. Needs maintainer merge or rebase. |

**Underlying theme:** Frontend tech debt (lockfile, rendering performance) and ASR provider flexibility are the top community pain points.

## 5. Bugs & Stability
| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **High** | [#3281](https://github.com/sipeed/picoclaw/issues/3281) Chat input lag with long history | Open, 3 weeks old | ��� None |
| **Medium** | [#3318](https://github.com/sipeed/picoclaw/pull/3318) Broken `pnpm-lock.yaml` blocks frontend installs | Open, stale 9 days | �� PR exists (awaits review) |

No crashes or regressions reported today beyond the above.

## 6. Feature Requests & Roadmap Signals
| Request | Likelihood for Next Version | Rationale |
|---------|----------------------------|-----------|
| [#3331](https://github.com/sipeed/picoclaw/issues/3331) Generic `/audio/transcriptions` model support | **Medium** | Low-effort config flag; aligns with multi-provider trend. No opposition yet. |
| Virtualized chat history / input memoization (implied by #3281) | **High** | Directly blocks core UX; likely to be prioritized once triaged. |
| Dependency modernization (AWS SDK, Anthropic SDK, Mautrix) | **High** | 6 open dependabot PRs; routine maintenance will land soon. |

## 7. User Feedback Summary
- **Pain point:** "Web UI becomes unusable after a few dozen messages — typing lags seconds behind." (Issue #3281)
- **Workaround:** Users likely start new sessions frequently, losing context.
- **Desire:** Pluggable ASR backends beyond Whisper (Issue #3331) — indicates production use of voice features.
- **Sentiment:** Mixed; core functionality works, but frontend polish and extensibility gaps frustrate power users.

## 8. Backlog Watch — Needs Maintainer Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) Chat input lag | 24 days | High-impact UX bug; no assignee, no fix PR. |
| [#3318](https://github.com/sipeed/picoclaw/pull/3318) Broken `pnpm-lock.yaml` | 9 days | Blocks frontend dependency installs/CI; simple merge. |
| [#3331](https://github.com/sipeed/picoclaw/issues/3331) Generic ASR model support | 1 day | New feature request; early triage can set direction. |
| Dependabot PRs [#3332](https://github.com/sipeed/picoclaw/pull/3332), [#3333](https://github.com/sipeed/picoclaw/pull/3333), [#3334](https://github.com/sipeed/picoclaw/pull/3334), [#3335](https://github.com/sipeed/picoclaw/pull/3335), [#3336](https://github.com/sipeed/picoclaw/pull/3336) | 0 days | Routine but numerous; batch review/merge recommended. |

---

**Bottom line:** PicoClaw is treading water on dependencies while two user-facing issues — a severe chat-input regression and a blocked frontend build — sit unattended. A focused sprint on frontend performance (#3281) and lockfile repair (#3318) would disproportionately improve perceived project health.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-14

## 1. Today's Overview

NanoClaw shipped **v2.2.0** today, headlined by in-place template-stamped plugin updates via `ncl groups create --template <ref>` — a workflow that now upgrades existing agent groups instead of duplicating them. The release landed alongside a flurry of CI/CD hardening: 13 PRs merged/closed in 24h, most tightening the `verify-agent-image` gate (Sigstore keyless signing, publisher identity pinning, per-arch attestation checks, and signature-as-approving-review automation). One regression was caught and closed (#3234: template groups receiving bare UUIDs lacking the `ag-` prefix, breaking OneCLI `ensureAgent`). A new issue (#3235) flags unbounded approval cards for webhook/bot senders under `unknown_sender_policy = 'request_approval'`. Overall velocity is high, with core-team PRs dominating — the project is in a platform-stabilization phase, iterating on supply-chain security and agent-template ergonomics.

---

## 2. Releases

### v2.2.0 — 2026-08-13
**PR:** [#3237](https://github.com/nanocoai/nanoclaw/pull/3237) (merged)

**Key Changes**
- **In-place template plugin updates**: `ncl groups create --template <ref>` now detects when a group already carries the template's plugin and performs an in-place update instead of minting a duplicate agent. A dry-run prints a plan of every plugin-owned surface (plugin files, skills, MCP servers, secrets, caps).
- **Template → Agent Plugins 1.0.0 migration** (landed via [#3220](https://github.com/nanocoai/nanoclaw/pull/3220)): templates are now versioned Agent Plugin directories with stamp-time symlink/caps/secret hardening.
- **Setup wizard template flow** ([#2909](https://github.com/nanocoai/nanoclaw/pull/2909)): first-agent stamping integrated into the setup wizard.

**Breaking Changes / Migration Notes**
- Template format changed: existing custom templates must be migrated to Agent Plugins 1.0.0 directory structure (see [#3220](https://github.com/nanocoai/nanoclaw/pull/3220) for migration guide).
- Agent group IDs from `--template` now follow `ag-<uuid>` convention (fixed in [#3234](https://github.com/nanocoai/nanoclaw/issues/3234) post-release; ensure you're on latest patch if using templates).

---

## 3. Project Progress — Merged/Closed PRs Today (13)

| PR | Type | Summary |
|----|------|---------|
| [#3241](https://github.com/nanocoai/nanoclaw/pull/3241) | CI/CD | **Signature-as-approving-review**: publisher Sigstore keyless signature becomes the approving review on pin bumps. Off by default (`AGENT_IMAGE_AUTO_APPROVE=true` to enable). |
| [#3240](https://github.com/nanocoai/nanoclaw/pull/3240) | CI/CD | **Agent-image bump PR via `repository_dispatch`**: AWS worker promotes verified image → `nanoclaw/agent` → fires dispatch to open `versions.json` PR. Splits credentials (AWS can push/promote; CI only opens PRs). |
| [#3238](https://github.com/nanocoai/nanoclaw/pull/3238) | CI/CD | **`verify-agent-image` runs on every PR** (removed path filter) so it can serve as a required status check. |
| [#3236](https://github.com/nanocoai/nanoclaw/pull/3236) | Release | **Repin agent image to `hardened-2026-08-13`** (sha256:ccde3d9c…). First bump carrying NanoClaw's own content, not just base refresh. |
| [#3231](https://github.com/nanocoai/nanoclaw/pull/3231) | Feature | **Plugin MCP `cwd` honored in Codex & OpenCode config writers** (registry payload half of [#3220](https://github.com/nanocoai/nanoclaw/pull/3220)). |
| [#3229](https://github.com/nanocoai/nanoclaw/pull/3229) | Security | **Telegram pairing codes: CSPRNG (`crypto.randomInt`) + widened space (4→6 digits)**. Replaces `Math.random()`. |
| [#3220](https://github.com/nanocoai/nanoclaw/pull/3220) | Feature/Refactor | **Agent Templates → Agent Plugins 1.0.0**: engine change + format migration with stamp-time symlink/caps/secret hardening. |
| [#2909](https://github.com/nanocoai/nanoclaw/pull/2909) | Feature | **Setup wizard template flow + first-agent stamping** (stacked on #3220). |
| [#3158](https://github.com/nanocoai/nanoclaw/pull/3158) | CI/CD | **Pin publisher identity + per-arch attestation checks** for `verify-agent-image` (fixes missing `AGENT_IMAGE_SIGNER_IDENTITY`/`_ISSUER` vars). |
| [#3145](https://github.com/nanocoai/nanoclaw/pull/3145) | Fix | **DB migration 021**: backfill channel destinations for existing messaging-group wirings. |
| [#2624](https://github.com/nanocoai/nanoclaw/pull/2624) | Refactor | **Per-server `disabledTools` in `McpServerConfig`**. |
| [#3239](https://github.com/nanocoai/nanoclaw/pull/3239) | Test | **Smoke test for `verify-agent-image` gate** (draft, closed unmerged). |
| [#3242](https://github.com/nanocoai/nanoclaw/pull/3242) | Test | **Live-fire test of signature approver** (draft, closed unmerged). |

**Theme**: Supply-chain security (Sigstore, keyless signing, signature-gated promotion), Agent Plugins 1.0.0 rollout, and CI/CD pipeline maturation.

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|------|----------|----------|
| [#3234](https://github.com/nanocoai/nanoclaw/issues/3234) **CLOSED** — Template groups get bare UUID, missing `ag-` prefix | 1 comment, 0 ��� | **Regression in v2.2.0 template flow**. `--template` assigned bare `randomUUID()` while `--folder` used `ag-<uuid>`. Bare UUIDs starting with digits fail OneCLI `ensureAgent` validation. Fixed same-day — shows tight feedback loop but also that template ID generation lacked a shared code path. |
| [#3235](https://github.com/nanocoai/nanoclaw/issues/3235) **OPEN** — Unknown-sender approval: webhook/bot senders generate unbounded approval cards | 0 comments, 0 ��� | **New UX/ops pain point**. `unknown_sender_policy = 'request_approval'` treats automated senders (webhooks, other bots) like humans → unbounded approval cards for recurring webhooks. Denials don't persist. Needs sender-type awareness (human vs. bot/webhook) + idempotent denial. No PR yet. |
| [#3243](https://github.com/nanocoai/nanoclaw/pull/3243) **OPEN** — `verify-agent-image`: arming auto-merge is not a verdict | 0 comments | **CI reliability**. `Enable auto-merge` step fails on draft PRs, `allow_auto_merge=off`, transient API errors — none reflect image validity. Proposes `continue-on-error` so job conclusion reflects verification, not GitHub API quirks. |

**Underlying needs**: (1) Template/agent identity consistency across code paths; (2) Sender-type-aware approval policies for messaging integrations; (3) CI gates that distinguish verification failures from infrastructure noise.

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | [#3234](https://github.com/nanocoai/nanoclaw/issues/3234): Template-stamped agent groups get bare UUID → OneCLI `ensureAgent` rejects | **Closed** (fixed same-day) | Implicit in v2.2.0 follow-up; ID gen unified to `ag-<uuid>` |
| **Medium** | [#3229](https://github.com/nanocoai/nanoclaw/pull/3229): Telegram pairing codes used `Math.random()` (CSPRNG needed) | **Fixed & Merged** | [#3229](https://github.com/nanocoai/nanoclaw/pull/3229) |
| **Medium** | [#3158](https://github.com/nanocoai/nanoclaw/pull/3158): `verify-agent-image` skipped on every run (missing signer identity vars) | **Fixed & Merged** | [#3158](https://github.com/nanocoai/nanoclaw/pull/3158) |
| **Low** | [#3235](https://github.com/nanocoai/nanoclaw/issues/3235): Unbounded approval cards for webhook/bot senders | **Open** — no fix PR yet | — |
| **Low** | [#2346](https://github.com/nanocoai/nanoclaw/pull/2346): Unknown slash commands categorized as `passthrough` → SDK drops response | **Open** (since May) | [#2346](https://github.com/nanocoai/nanoclaw/pull/2346) (stale) |

**Stability signal**: Critical regressions caught and fixed within hours. Older bugs (#2346, #2420) linger — suggest triage backlog.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **Sender-type-aware approval policies** (human vs. bot/webhook, idempotent denial) | [#3235](https://github.com/nanocoai/nanoclaw/issues/3235) | High — clear ops pain, no architectural blocker |
| **Agent Plugins 1.0.0 ecosystem** (template marketplace, plugin versioning, caps/secrets) | [#3220](https://github.com/nanocoai/nanoclaw/pull/3220), [#2909](https://github.com/nanocoai/nanoclaw/pull/2909) | **In progress** — core landed, wizard flow merged, next: plugin registry/discovery |
| **Hindsight long-term memory MCP wrapper** (bundled `/add-hindsight` skill) | [#2420](https://github.com/nanocoai/nanoclaw/pull/2420) (open since May) | Medium — PR open 3+ months, MCP wrapper bundled, needs review bandwidth |
| **Bounded JSON stdin for `ncl` CLI** (structured args without frame changes) | [#3218](https://github.com/nanocoai/nanoclaw/pull/3218) | Medium — generic DX improvement, low risk |
| **Per-server `disabledTools` in MCP config** | [#2624](https://github.com/nanocoai/nanoclaw/pull/2624) | Medium — merged today, part of MCP hardening |
| **Auto-merge gated on verified signature (not human click)** | [#3241](https://github.com/nanocoai/nanoclaw/pull/3241) | **Landed** — off by default, opt-in via `AGENT_IMAGE_AUTO_APPROVE` |

**Prediction**: v2.3.0 will likely include #3235 fix, #2420 Hindsight skill, and further Agent Plugins polish (registry, version resolution). Signature-gated promotion is now infrastructure-complete.

---

## 7. User Feedback Summary

| Pain Point / Use Case | Evidence | Sentiment |
|------------------------|----------|-----------|
| **Template workflow breaks OneCLI integration** | [#3234](https://github.com/nanocoai/nanoclaw/issues/3234): "bare UUID beginning with a digit appears to hit exactly the fail..." | ��� Frustration — core workflow broken on release day |
| **Webhook approval spam unmanageable** | [#3235](https://github.com/nanocoai/nanoclaw/issues/3235): "unbounded approval cards… denials don't persist" | ��� Operational burden — recurring webhooks = noise |
| **Telegram pairing codes insufficiently random** | [#3229](https://github.com/nanocoai/nanoclaw/pull/3229): security fix, user-reported or audit-found | ������ Proactive security hardening appreciated |
| **CI false negatives on image verification** | [#3158](https://github.com/nanocoai/nanoclaw/pull/3158): verification skipped silently for months | ��� Trust erosion — "skipped on every run" |
| **Desire for long-term agent memory (Hindsight)** | [#2420](https://github.com/nanocoai/nanoclaw/pull/2420): bundled MCP wrapper, opt-in skill | ��� Excitement — "operators don't need to run anything extra" |

**Overall**: Users are pushing template/plugin workflows hard in production; edge cases (ID formats, webhook policies) surface fast. Security posture improving visibly. Backlog of community PRs (#2420, #2346) suggests review capacity is the bottleneck.

---

## 8. Backlog Watch — Stale Items Needing Maintainer Attention

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#2420](https://github.com/nanocoai/nanoclaw/pull/2420) **feat(skills): `/add-hindsight` — bundled MCP wrapper for Hindsight memory** | **96 days** (opened 2026-05-11) | Complete implementation with bundled MCP wrapper. High-value feature (long-term memory), no external deps. Blocked only on review. |
| [#2346](https://github.com/nanocoai/nanoclaw/pull/2346) **fix(formatter): treat unknown slash commands as normal chat** | **98 days** (opened 2026-05-08) | Fixes silent message drop for unrecognized commands. Small, low-risk, improves UX. |
| [#3218](https://github.com/nanocoai/nanoclaw/pull/3218) **feat(cli): accept bounded JSON from stdin** | **5 days** (opened 2026-08-09) | Generic DX improvement for automation. Well-scoped, needs review. |
| [#3235](https://github.com/nanocoai/nanoclaw/issues/3235) **Unknown-sender approval: webhook/bot senders generate unbounded approval cards** | **1 day** (opened 2026-08-13) | Fresh but high-impact ops issue. No PR yet — needs design decision (sender classification, idempotent denial). |

**Recommendation**: Prioritize #2420 and #2346 for merge (both are complete, tested, low-risk). Assign #3235 to a core-team member for quick triage — it will affect any team using webhooks with approval gates.

---

*Digest generated from GitHub data as of 2026-08-14. All links point to nanocoai/nanoclaw repository.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-14

## 1. Today's Overview

IronClaw shipped **v1.2.0 stable** yesterday (promoted from `1.2.0-rc.3`), capping a release cycle that validated container healthchecks (`curl` now baked into the runtime image) and the full RC1 feature set. The past 24 hours show **exceptionally high velocity**: 50 PRs and 30 issues updated, with 24 PRs merged/closed and 16 issues closed. The dominant theme is the **"Reborn" architectural overhaul** (epic #7482), which decomposes IronClaw into a kernel + pluggable harnesses, and a parallel **performance offensive** targeting Postgres write amplification (#7591). Community-reported bugs are low-severity (MCP auth flows, GitHub extension UX), while core contributors push large-scale refactors (unbound-turns model, telemetry coalescing, dependency bumps).

---

## 2. Releases

### `ironclaw-v1.2.0` — 2026-08-13
**Promotion of `1.2.0-rc.3` to stable.**  
**Key fixes in RC cycle:**
- Runtime container image now installs `curl` → enables in-container HTTP healthchecks for orchestrators.
- All RC1 features validated; RC2/RC3 fixes folded in.

**Breaking changes / migration:** None noted — this is a patch-level stabilization of the 1.2 line.  
**Links:** [Release PR #7625](https://github.com/nearai/ironclaw/pull/7625) · [Release Notes](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v1.2.0)

---

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Scope | Outcome |
|----|-------|---------|
| [#7625](https://github.com/nearai/ironclaw/pull/7625) | Release | Promoted 1.2.0-rc.3 → 1.2.0 stable |
| [#7590](https://github.com/nearai/ironclaw/pull/7590) | Live canary | Fixed bundled-skill marker owner mismatch caught by new canary narration |
| [#7163](https://github.com/nearai/ironclaw/pull/7163) | Documents | Structural edit/render for docx/xlsx/pptx + PDF-from-HTML; fixed #7109 text-log regression |
| [#7376](https://github.com/nearai/ironclaw/pull/7376) | CI/Docs | Extended `check-guidance.py` reference gate to all `docs/` surfaces (Mintlify, zh locale, contracts) |
| [#7506](https://github.com/nearai/ironclaw/pull/7506) | Deps | 17 `everything-else` dependency bumps (async-trait, thiserror, base64, etc.) |
| [#7620](https://github.com/nearai/ironclaw/issues/7620) | Reborn (WS6) | Closed — profile routing & shadow-run ladder design ratified |
| [#7619](https://github.com/nearai/ironclaw/issues/7619) | Reborn (WS6) | Closed — pluggable-loop conformance suite spec locked |
| [#7615](https://github.com/nearai/ironclaw/issues/7615) | Reborn (WS4) | Closed — `ic` CLI + aggregate MCP projection over capability socket |
| [#7614](https://github.com/nearai/ironclaw/issues/7614) | Reborn (WS4) | Closed — authenticated capability socket for sandbox ingress |
| [#7618](https://github.com/nearai/ironclaw/issues/7618) | Reborn (WS5) | Closed — per-thread workspace mounts + GC for disposable sandboxes |
| [#7616](https://github.com/nearai/ironclaw/issues/7616) | Reborn (WS5) | Closed — pinned agent images + build pipeline for phase-0 harnesses |
| [#7613](https://github.com/nearai/ironclaw/issues/7613) | Reborn (WS3) | Closed — phase-0 harness adapters (claude-code, pi, codex) |
| [#7612](https://github.com/nearai/ironclaw/issues/7612) | Reborn (WS3) | Closed — `HarnessLoopExecutor` second `TurnRunExecutor` impl |
| [#7611](https://github.com/nearai/ironclaw/issues/7611) | Reborn (WS3) | Closed — `HarnessDriver v1` contract (checkpoint blob, exit taxonomy, events) |
| [#7617](https://github.com/nearai/ironclaw/issues/7617) | Reborn (WS5) | Closed — integration policy records (declarative vendor/domain/injection) |
| [#7610](https://github.com/nearai/ironclaw/issues/7610) | Reborn (ex-WS2) | Closed — model-provider passthrough via egress proxy (replaces inference gateway) |
| [#7609](https://github.com/nearai/ironclaw/issues/7609) | Reborn (WS1) | Closed — egress audit bridge: proxy → `DurableEventLog` + leak detection |
| [#7608](https://github.com/nearai/ironclaw/issues/7608) | Reborn (WS1) | Closed — proxy config renderer: per-run grants → `iron-proxy` YAML |
| [#7607](https://github.com/nearai/ironclaw/issues/7607) | Reborn (WS1) | Closed — sandbox egress wiring: per-sandbox `iron-proxy`, default-deny, CA dist |
| [#7606](https://github.com/nearai/ironclaw/issues/7606) | Reborn (M0) | Closed — spike: `iron-proxy` placeholder-swap E2E in Docker sandbox lane |

**Net:** The entire **Reborn WS1–WS6 work-breakdown** was ratified and closed today — 14 issues representing the complete implementation plan for pluggable agent loops, egress proxy, harness execution, capability socket, workspace mounts, agent images, policy records, and audit bridge. Only **v0 spike (#7624)** and the three consolidated tracking issues (#7621, #7622, #7623) remain open.

---

## 4. Community Hot Topics

| Item | Type | Comments | Signal |
|------|------|----------|--------|
| [#7482](https://github.com/nearai/ironclaw/issues/7482) | Epic (open) | 6 | **Core architectural pivot**: IronClaw becomes kernel; agent loops & tool code become pluggable harnesses. 14 sub-issues spawned today. |
| [#7562](https://github.com/nearai/ironclaw/pull/7562) | Design doc (open) | — | **Unbound-turns model**: threads as unit of work, single `submit_turn`, kernel drops reply routing. Stacked by #7633/#7634. |
| [#7634](https://github.com/nearai/ironclaw/pull/7634) | Feat (open) | — | Completes unbound-turns switchover: seeded history, OpenAI-compat door, forced `tool_choice`, run limits. |
| [#7633](https://github.com/nearai/ironclaw/pull/7633) | Feat (closed) | — | Prepared-context accept door, unbound run lane, kernel binding-ref deletion — design doc delta-annotated. |
| [#7378](https://github.com/nearai/ironclaw/pull/7378) | Test/Docs (open) | — | **Doc-fact contract tests** for CLI, manifest, Responses claims — deterministic, no LLM judging. Part of #7317. |
| [#7184](https://github.com/nearai/ironclaw/pull/7184) | Feat (open) | — | Nostr host functions for WASM tools (`nostr-sign-event`, `nostr-publish-event`, `nostr-subscribe`). |

**Underlying needs:**  
- **Decoupling** — Team is systematically extracting the agent loop from the kernel to allow third-party harnesses (Claude Code, Codex, etc.) without forking IronClaw.  
- **Observability & correctness** — Doc-fact tests + canary narration + stress measurement PRs (#7630) show a push to make behavior auditable and regressions visible.  
- **Performance at scale** — Tier 2/3 write-amplification fixes (#7600–#7605) target the hottest Postgres paths (conversation-state blob, journal observers, checkpoint batching).

---

## 5. Bugs & Stability

| Issue | Severity | Status | Fix PR? |
|-------|----------|--------|---------|
| [#7626](https://github.com/nearai/ironclaw/issues/7626) Custom MCP requiring browser/email auth gets stuck | Medium (user-blocking) | Open | No |
| [#7627](https://github.com/nearai/ironclaw/issues/7627) GitHub extension shows connected after invalid credentials | Low (UX confusion) | Open | No |
| [#7589](https://github.com/nearai/ironclaw/issues/7589) NEAR AI Cloud Sonnet-5 returns 500 errors | Medium (upstream) | Closed | No (tracked in nearai/cloud-api#920) |

**Assessment:** No crashes or regressions in core runtime. Both open bugs are **integration-surface issues** (MCP auth flows, extension credential validation) — likely to be addressed in the Reborn capability-socket / policy-record work (#7614, #7617). The Sonnet-5 500 is upstream.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Pluggable harness v0: Claude Code ACP executor (dev-only)** | [#7624](https://github.com/nearai/ironclaw/issues/7624) | **High** — explicitly "only pluggable-loops work item to build right now" |
| **Egress edge: `iron-proxy` adoption, config renderer, audit bridge, model passthrough** | [#7621](https://github.com/nearai/ironclaw/issues/7621) | **High** — WS1 spike closed, consolidated impl issue open |
| **Foreign-harness execution: `HarnessDriver`, executor, phase-0 adapters, agent images, workspace mounts** | [#7622](https://github.com/nearai/ironclaw/issues/7622) | **High** — WS3/WS5 designs ratified, impl ladder deferred until v0 validates |
| **Capability socket, `ic` CLI, conformance suite, profile routing + shadow** | [#7623](https://github.com/nearai/ironclaw/issues/7623) | **Medium-High** — WS4/WS6 designs closed, rollout ladder gated on v0 |
| **Unbound-turns switchover completion** | [#7634](https://github.com/nearai/ironclaw/pull/7634) | **High** — PR open, CI being driven green |
| **Nostr host functions for WASM tools** | [#7184](https://github.com/nearai/ironclaw/pull/7184) | **Medium** — PR open, adds 3 host functions to `near:agent@0.4.0` |
| **Structured execution contracts for automations** | [#7548](https://github.com/nearai/ironclaw/pull/7548) | **Medium** — PR open, versioned contract (goal, success criteria, allowed capabilities) |

**Prediction:** Next release (1.3 or 1.2.1) will ship **unbound-turns runtime** + **Reborn v0 harness spike (Claude Code via ACP)** + **`iron-proxy` egress wiring**. Full harness conformance suite and shadow routing will follow.

---

## 7. User Feedback Summary

| Feedback | Source | Pain Point / Use Case |
|----------|--------|----------------------|
| "How do I view the IronClaw Reborn version from the web UI?" | [#7580](https://github.com/nearai/ironclaw/issues/7580) | Version visibility missing in WebUI — discoverability gap |
| Custom MCP (MKT1) requiring email + browser auth gets stuck | [#7626](https://github.com/nearai/ironclaw/issues/7626) | Auth flows needing interactive browser/email not supported in sandboxed MCP harness |
| GitHub extension shows "connected" after bogus credentials ("1") | [#7627](https://github.com/nearai/ironclaw/issues/7627) | Credential validation UX misleading; extension state �� actual auth status |
| Sonnet-5 on NEAR AI Cloud 500ing for 3 days | [#7589](https://github.com/nearai/ironclaw/issues/7589) | Upstream model provider instability surfacing as IronClaw reliability concern |

**Themes:**  
- **Observability** — Users can't see what version they're running.  
- **Auth UX** — Interactive/browser-based OAuth flows break in sandboxed tool harnesses.  
- **Extension trust** — False-positive "connected" states erode confidence.

---

## 8. Backlog Watch (Stale / Needs Maintainer Attention)

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#7464](https://github.com/nearai/ironclaw/pull/7464) Telegram: pair linked devices with bot channel | 4 days open, XL | Large feature PR, updated today but no review movement — enables seamless Telegram UX |
| [#7378](https://github.com/nearai/ironclaw/pull/7378) Doc-fact contract tests (3/5) | 7 days open | Critical for doc/truth integrity; part of #7317 gate — needs review to unblock CI enforcement |
| [#7184](https://github.com/nearai/ironclaw/pull/7184) Nostr host functions for WASM | 10 days open | New WASM capability surface; expands agent tooling to decentralized social — needs security review |
| [#7548](https://github.com/nearai/ironclaw/pull/7548) Automations: structured execution contracts | 2 days open, XL | Defines runtime contract for scheduled automations — foundational for productized agent workflows |
| [#7513](https://github.com/nearai/ironclaw/pull/7513) CLI: ACP serve command (streaming + cancel) | 3 days open, L | Enables external tools (Copilot CLI, VS Code) to connect to IronClaw agent — key for ecosystem integration |
| [#7600–#7605](https://github.com/nearai/ironclaw/issues/7600) Tier 2/3 write-amplification fixes | All created today | Performance debt on hottest paths; no PRs yet — need champions to avoid perpetual backlog |

**Recommendation:** Prioritize review of **#7464, #7378, #7184** (feature-complete, awaiting merge) and assign owners for **#7600–#7605** before they become technical debt anchors.

---

*Digest generated from GitHub API data (issues, PRs, releases) for nearai/ironclaw covering 2026-08-13 → 2026-08-14. All links point to live GitHub items.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-14

## 1. Today's Overview
LobsterAI shows **high development velocity** with 10 PRs updated in the last 24 hours (6 merged/closed, 4 open), indicating active feature delivery and refactoring. The merged PRs focus on **UI unification** (skills/MCP/kits views), **evergreen daily check-in activity**, and **enterprise edition groundwork**. Two stale issues/PRs from March received updates, suggesting maintainers are clearing backlog. No new releases were cut today. Overall project health appears strong with consistent merging and test coverage expansion.

---

## 2. Releases
**No new releases** published today. The latest merged PRs (#2484–#2488) likely target an upcoming release branch.

---

## 3. Project Progress — Merged/Closed PRs Today

| PR | Area | Summary | Impact |
|----|------|---------|--------|
| [#2488](https://github.com/netease-youdao/LobsterAI/pull/2488) | renderer, cowork | **Refactor cowork UI & management** — consolidates UI between collaborative and management views. | Improves maintainability; unified UX. |
| [#2487](https://github.com/netease-youdao/LobsterAI/pull/2487) | renderer | **Merge Skills & MCP into unified "Skills & Connectors" view** — reduces fragmentation. | Better discoverability; consistent card/detail patterns. |
| [#2486](https://github.com/netease-youdao/LobsterAI/pull/2486) | renderer | **Unify MCP card/detail UI with Kits/Skills styling** — shared `CardOverflowMenu`, `managementTypography`, new `McpCard`/`McpDetailModal`. | Visual consistency; reusable components. |
| [#2485](https://github.com/netease-youdao/LobsterAI/pull/2485) | renderer | **Evergreen daily check-in activity** — persistent entry, auto-refresh, web points redirect, aligned package/menu UX. | Retention feature; reuse of existing backend/admin. |
| [#2484](https://github.com/netease-youdao/LobsterAI/pull/2484) | renderer, docs, main, openclaw | **Enterprise Edition groundwork** — multi-area changes (details sparse in summary). | Strategic; enables paid/enterprise tier. |
| [#1232](https://github.com/netease-youdao/LobsterAI/pull/1232) | scheduledTask | **Fix: first scheduled-task run not pushed to UI** — corrected `pollOnce()` condition (`previousRunAtMs > 0` gate removed). | Critical UX fix; users now see initial run results immediately. |

**Key theme:** UI/UX unification across Skills, MCP, Kits, and Cowork + a user-facing retention feature (evergreen check-in) + enterprise prep.

---

## 4. Community Hot Topics

| Item | Activity | Analysis |
|------|----------|----------|
| [Issue #2489](https://github.com/netease-youdao/LobsterAI/issues/2489) — "快更新v4pro！" | Created & updated today, 1 comment | **User demand for v4 Pro release**. Signals anticipation for major version; maintainers should communicate roadmap/timeline. |
| [PR #1165](https://github.com/netease-youdao/LobsterAI/pull/1165) / [Issue #1162](https://github.com/netease-youdao/LobsterAI/issues/1162) — Vitest coverage for `openclawMemoryFile` & `openclawLocalTimeContextPrompt` | Stale since Mar, updated yesterday, 75 new tests | **Testing debt paydown**. Core memory/time modules now have 75 tests (57+18). High value — memory corruption bugs are costly. |
| [PR #1156](https://github.com/netease-youdao/LobsterAI/pull/1156) — Tests for `commandSafety` & `coworkMemoryJudge` | Stale since Mar, updated yesterday | **Security/quality gate coverage**. `commandSafety` prevents destructive commands; `coworkMemoryJudge` filters memory writes. Both were zero-covered. |
| [PR #1163](https://github.com/netease-youdao/LobsterAI/pull/1163) — Scheduled task "Run Now" feedback + optimistic updates | Stale since Mar, updated yesterday | **UX polish for async actions**. Adds loading, toast, optimistic UI, gateway sync, right-click menu polish. Addresses user confusion on manual triggers. |

**Underlying needs:** Users want **v4 Pro**; maintainers are investing in **test infrastructure** and **async UX reliability** — signs of maturing codebase.

---

## 5. Bugs & Stability

| Severity | Issue/PR | Status | Notes |
|----------|----------|--------|-------|
| **High** | [#1232](https://github.com/netease-youdao/LobsterAI/pull/1232) — First scheduled-task run not pushed to UI | **Fixed & merged** | Root cause: `previousRunAtMs > 0` check blocked initial run notification. |
| **Medium** | [#1163](https://github.com/netease-youdao/LobsterAI/pull/1163) — "Run Now" no feedback, 15s poll delay | **Open (stale, updated)** | Fix includes optimistic updates + gateway sync; needs review/merge. |
| **Low** | [#1166](https://github.com/netease-youdao/LobsterAI/pull/1166) — Duplicate custom agent names allowed | **Open (stale, updated)** | Frontend validation missing; UX annoyance, not data loss. |

**No new crashes/regressions reported today.** The merged fix (#1232) resolves a silent data-visibility bug.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **v4 Pro release** | Issue #2489 (user demand) | High — enterprise PR (#2484) suggests version bump prep. |
| **Evergreen daily check-in** | PR #2485 (merged) | **Already merged** — will ship in next release. |
| **Unified Skills/MCP/Kits UI** | PRs #2487, #2486 (merged) | **Already merged** — major UX improvement landing soon. |
| **Enterprise Edition** | PR #2484 (merged) | High — multi-area changes indicate near-term release. |
| **Scheduled task UX polish** | PR #1163 (open) | Medium — stale but updated; maintainers may batch with v4. |
| **Agent name dedup** | PR #1166 (open) | Low-Medium — minor UX fix, easy to include. |

**Prediction:** Next release will be **v4 Pro / Enterprise** with unified connector UI, evergreen check-in, and scheduled-task UX fixes.

---

## 7. User Feedback Summary

| Feedback Type | Example | Sentiment |
|---------------|---------|-----------|
| **Release urgency** | "快更新v4pro！" (#2489) | ��� Impatient / high expectation |
| **Silent failures** | Scheduled task first run invisible (#1232) | ��� Frustrating — fixed now |
| **Async action anxiety** | "Run Now" no feedback, 15s wait (#1163) | ��� Anxious — fix in progress |
| **UI inconsistency** | MCP/Skills/Kits look different (#2486, #2487) | ��� Noted — being unified |
| **Agent management** | Duplicate names allowed (#1166) | ��� Minor annoyance |

**Overall:** Users are **eager for v4 Pro** and notice **UX rough edges** (async feedback, duplicate names). The team is addressing these systematically.

---

## 8. Backlog Watch — Stale Items Needing Attention

| Item | Age | Why It Matters | Suggested Action |
|------|-----|----------------|------------------|
| [PR #1163](https://github.com/netease-youdao/LobsterAI/pull/1163) — Scheduled task "Run Now" UX fix | ~4.5 months | High user-impact UX bug; comprehensive fix ready (optimistic UI, gateway sync, menu polish). | **Prioritize review/merge** — blocks good UX for automation feature. |
| [PR #1156](https://github.com/netease-youdao/LobsterAI/pull/1156) — `commandSafety` / `coworkMemoryJudge` tests | ~4.5 months | Security & data-quality gates with **zero prior coverage**. False negatives = destructive commands / memory pollution. | **Review & merge** — critical safety net. |
| [PR #1165](https://github.com/netease-youdao/LobsterAI/pull/1165) — Memory/Time context tests (75 tests) | ~4.5 months | Core memory module now tested; prevents regression in `MEMORY.md` handling. | **Merge** — high-value test suite. |
| [PR #1166](https://github.com/netease-youdao/LobsterAI/pull/1166) — Duplicate agent name prevention | ~4.5 months | Simple frontend validation; improves agent management clarity. | **Quick win** — merge if tests pass. |
| [Issue #1162](https://github.com/netease-youdao/LobsterAI/issues/1162) — Same as PR #1165 | ~4.5 months | Tracking issue for the test coverage. | Close when PR #1165 merges. |

**Maintainer attention needed:** The four stale PRs (#1156, #1163, #1165, #1166) represent **completed work** (tests, UX fixes) awaiting review. Merging them would significantly improve stability and UX before v4 Pro.

---

## Summary Metrics
| Metric | Value |
|--------|-------|
| PRs merged today | 6 |
| PRs open/active | 4 |
| Issues updated | 2 |
| Critical bugs fixed | 1 (#1232) |
| Test coverage added (pending) | 75+ tests across 3 PRs |
| Stale high-value PRs awaiting review | 4 |

**Project health: ��� Good** — Active merging, test investment, UX polish, enterprise prep. Main bottleneck: **stale PR review backlog**.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest – 2026-08-14

## 1. Today's Overview
Moltis saw moderate activity in the last 24 hours with **1 new issue** and **4 open pull requests** (no merges or releases). The issue highlights a flaky integration test that only fails under full-suite load, while the PRs address three build/script regressions (macOS Bash 3.2 compatibility, outdated Go module paths for `wacrawl` and `gogcli`) and one substantial feature PR adding durable CalDAV and channel-history connectors. Overall, the project is in a maintenance-and-extension phase with a focus on CI reliability and connector persistence.

## 2. Releases
No new releases published today.

## 3. Project Progress
**Merged/Closed PRs:** None today.  
**Active Work:**
- **#1190** – *Add durable CalDAV and channel history connectors* (opened 2026-08-11, updated today). This large PR introduces provider-neutral connector persistence, atomic snapshots, scheduling, projections, and bounded local full-text search, plus read-only datasets for CalDAV, Slack, Discord, Matrix, and Microsoft Teams. It signals a major step toward durable, queryable data ingestion.
- **#1194** – *fix(scripts): guard empty bash array expansions for macOS bash 3.2* – resolves a `just local-validate-full` failure on macOS.
- **#1192** – *fix(skills): point wacrawl install metadata at the openclaw org* – updates the Go module path after the project’s rename.
- **#1191** – *fix(sandbox): point gogcli module path at the openclaw org* – fixes `moltis sandbox build` failures due to the same rename.

## 4. Community Hot Topics
No issues or PRs have attracted comments or reactions in the last 24 hours. The most notable item is the **flaky test report (#1193)**, which may gain traction once developers encounter it in CI. The feature PR **#1190** is the largest open change and likely to draw review attention soon.

## 5. Bugs & Stability
| Rank | Item | Severity | Fix PR? |
|------|------|----------|---------|
| 1 | **#1193** – Flaky test `push::tests::fanout_is_bounded_and_times_out_a_hung_endpoint` fails 2/3 runs under full-suite load on macOS (10-core). | Medium (test reliability, blocks CI confidence) | No |
| 2 | **#1194** – `just local-validate-full` crashes on macOS due to unbound array expansion in Bash 3.2. | High (breaks local validation on macOS) | **#1194** (open) |
| 3 | **#1191** – `moltis sandbox build` fails because `gogcli` moved to `openclaw` org. | High (blocks sandbox image builds) | **#1191** (open) |
| 4 | **#1192** – `wacrawl` skill install fails for same reason (module rename). | High (breaks skill installation) | **#1192** (open) |

## 6. Feature Requests & Roadmap Signals
- **Durable connectors & history datasets (#1190)** – The only feature PR today. It adds persistence, snapshots, scheduling, projections, and full-text search for CalDAV and major chat platforms. This aligns with a roadmap emphasizing **long-term data retention, cross-platform history querying, and prompt-ready datasets**. Given its scope, it is a strong candidate for the next minor/major release.

## 7. User Feedback Summary
No direct end-user feedback (issues/PR comments) recorded today. The flaky test (#1193) affects developers running the full test suite; the three fix PRs address pain points for macOS users and anyone building sandbox images or installing skills. Satisfaction signals are neutral—no complaints or praise visible.

## 8. Backlog Watch
- **#1190** (open since 2026-08-11) – Large feature PR awaiting review; merges connector persistence, scheduling, and multi-platform history. Maintainer attention needed to avoid staleness.
- **#1193** (new) – Flaky test that only appears under full-suite load; may require test isolation or timeout tuning. Should be triaged before it masks real regressions.
- **#1194, #1191, #1192** – Straightforward fixes for broken builds; low risk, but should be merged promptly to unblock contributors on macOS and sandbox workflows.

---
*Data sourced from GitHub API for moltis-org/moltis. Links: [Issue #1193](https://github.com/moltis-org/moltis/issues/1193) | [PR #1194](https://github.com/moltis-org/moltis/pull/1194) | [PR #1190](https://github.com/moltis-org/moltis/pull/1190) | [PR #1192](https://github.com/moltis-org/moltis/pull/1192) | [PR #1191](https://github.com/moltis-org/moltis/pull/1191)*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-08-14

## 1. Today's Overview

CoPaw (QwenPaw) shows **high velocity** with 71 total updates (21 issues, 50 PRs) in the last 24 hours. The project just shipped **v2.1.0 stable** alongside **v2.1.0-beta.5**, introducing a major "QwenPaw OS Shell" with windowed apps, launcher, taskbar, and unified app catalog. However, the release coincides with a **critical security incident** (CVE-level: unauthenticated plugin API on 0.0.0.0:8088 enabling RCE, SSH backdoors, and C2 persistence) and multiple regressions in session management, Windows TUI, and memory handling. The community is actively reporting bugs, proposing architectural improvements, and contributing fixes — 19 PRs merged/closed today indicates strong maintainer throughput.

---

## 2. Releases

### v2.1.0 (Stable) — [Release Page](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.1.0)
**Major Feature: QwenPaw OS Shell**
- Movable, resizable windows with launcher, taskbar, notifications, saved layouts ([#6645](https://github.com/agentscope-ai/QwenPaw/pull/6645))
- Unified app catalog across App Center and marketplace

### v2.1.0-beta.5 — [Release Page](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.1.0-beta.5)
**Fixes:**
- `fix(chats)`: handle dict-like model responses ([#6816](https://github.com/agentscope-ai/QwenPaw/pull/6816))
- `fix(memory)`: simplify long-term memory guidance ([#6942](https://github.com/agentscope-ai/QwenPaw/pull/6942))
- `docs(website)`: Files workspace improvements

**������ Breaking Changes / Migration Notes:**
- Session ID handling changed — `/new` command no longer rotates session ID on Telegram ([#6966](https://github.com/agentscope-ai/QwenPaw/issues/6966))
- Windows Desktop TUI broken: packaged `qwenpaw.exe` rejects `-m qwenpaw acp` ([#7007](https://github.com/agentscope-ai/QwenPaw/issues/7007))
- Agent state saved to wrong session file under concurrent sessions (regression from 2.0.1) ([#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011))

---

## 3. Project Progress — Merged/Closed PRs Today (19 total)

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#6652](https://github.com/agentscope-ai/QwenPaw/pull/6652) | **Security Fix** | Enforce `max_iterations` server-side in MissionGate — prevents runaway sub-agent dispatch (54+ vs configured 20) | **Critical** — stops unbounded LLM spend |
| [#6636](https://github.com/agentscope-ai/QwenPaw/pull/6636) | **Performance** | Add pagination + GZip to chat history endpoint — fixes 30s timeouts on 1MB+ chats | **High** — UX for long conversations |
| [#6884](https://github.com/agentscope-ai/QwenPaw/pull/6884) | **Resilience** | Auto-Dream tolerant of malformed LLM structured output — partial success preserved | **Medium** — improves reliability |
| [#6387](https://github.com/agentscope-ai/QwenPaw/pull/6387) | **Architecture** | Optional channel dependencies installed on-demand — reduces base install size | **Medium** — modularity |
| [#6989](https://github.com/agentscope-ai/QwenPaw/pull/6989) / [#6994](https://github.com/agentscope-ai/QwenPaw/pull/6994) | **Release** | Update release notes for v2.1.0 | **Process** |
| [#6991](https://github.com/agentscope-ai/QwenPaw/pull/6991) / [#7000](https://github.com/agentscope-ai/QwenPaw/pull/7000) | **CI** | Release duty verification for beta.5 and stable | **Process** |

**Other merged fixes:** plugin reload safety ([#6996](https://github.com/agentscope-ai/QwenPaw/pull/6996)), context-usage ring reset after compact ([#6975](https://github.com/agentscope-ai/QwenPaw/pull/6975)), semaphore leak prevention in streaming ([#6998](https://github.com/agentscope-ai/QwenPaw/pull/6998)), file cache for skills/system prompts ([#6990](https://github.com/agentscope-ai/QwenPaw/pull/6990)).

---

## 4. Community Hot Topics

| Issue/PR | Comments | Reactions | Core Need |
|----------|----------|-----------|-----------|
| [#6992](https://github.com/agentscope-ai/QwenPaw/issues/6992) / [#6993](https://github.com/agentscope-ai/QwenPaw/issues/6993) | 3 | 0 | **Critical Security**: Unauthenticated plugin API on 0.0.0.0:8088 → RCE, SSH backdoors, C2. Duplicate filed. |
| [#6916](https://github.com/agentscope-ai/QwenPaw/issues/6916) | 2 | 0 | **Security**: Plugins silently create cron jobs & inject messages without approval — permission model gap. |
| [#7010](https://github.com/agentscope-ai/QwenPaw/issues/7010) | 3 | 0 | **Daemon Mode**: `qwenpaw app` blocks foreground — breaks SSH/scripted launches. |
| [#7013](https://github.com/agentscope-ai/QwenPaw/issues/7013) | 1 | 0 | **DevEx**: Unified tool panel — file preview, diff, web preview, interactive terminal in Chat. |
| [#7012](https://github.com/agentscope-ai/QwenPaw/issues/7012) | 1 | 0 | **Session-scoped model selector** — global model switch affects all sessions; need per-tab model. |
| [#7003](https://github.com/agentscope-ai/QwenPaw/issues/7003) | 2 | 0 | **Memory Efficiency**: Proposal for ViBo — 97.5% fewer tokens via encrypted, scoped agent memory. |
| [#7004](https://github.com/agentscope-ai/QwenPaw/pull/7004) | — | 0 | **First-time contributor**: Persist spawn parent-child linkage in chat meta (session hierarchy). |
| [#7001](https://github.com/agentscope-ai/QwenPaw/pull/7001) | — | 0 | **First-time contributor**: Matrix group rooms — isolate session/memory per sender (currently all share one). |

**Analysis:** Security dominates (3 distinct reports in 24h). Developer experience gaps: daemon mode, per-session model, unified tool panel. Architectural debt: Matrix channel session isolation, spawn hierarchy tracking.

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **Critical** | [#6992](https://github.com/agentscope-ai/QwenPaw/issues/6992) / [#6993](https://github.com/agentscope-ai/QwenPaw/issues/6993): Unauthenticated plugin API on 0.0.0.0:8088 → full RCE, persistence, credential theft | **Open** (duplicate) | No |
| **Critical** | [#6916](https://github.com/agentscope-ai/QwenPaw/issues/6916): Plugins create cron jobs & inject messages without approval | **Closed** (but root cause?) | No |
| **High** | [#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011): Agent state saved to wrong session file under concurrent sessions (2.1.0 regression) | **Open** | No |
| **High** | [#7007](https://github.com/agentscope-ai/QwenPaw/issues/7007): Windows Desktop TUI fails — `transport: Connection closed`, exe rejects `-m qwenpaw acp` | **Open** | No |
| **High** | [#5856](https://github.com/agentscope-ai/QwenPaw/issues/5856): Tool_call structure lost during context compaction → 400 errors | **Open** (since 07-08) | No |
| **Medium** | [#7005](https://github.com/agentscope-ai/QwenPaw/issues/7005): Shabox breaks UV cache writes (`~/.cache/uv`) | **Open** | No |
| **Medium** | [#7008](https://github.com/agentscope-ai/QwenPaw/issues/7008): Anthropic "input sensitive image" false positive on long history + local images | **Open** | No |
| **Medium** | [#6966](https://github.com/agentscope-ai/QwenPaw/issues/6966): Telegram `/new` doesn't rotate session ID — context window fills indefinitely | **Open** | No |
| **Low** | [#7006](https://github.com/agentscope-ai/QwenPaw/issues/7006): Language dropdown inconsistent (top-right vs bottom-left) | **Open** | No |

**Note:** Critical security issues have **no fix PRs visible** in today's data — urgent maintainer attention needed.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood for Next Version |
|---------|-------|----------------------------|
| **Daemon/background mode** for `qwenpaw app` (SSH/script support) | [#7010](https://github.com/agentscope-ai/QwenPaw/issues/7010) | High — blocks server deployments |
| **Session-scoped model selector** (per-tab, not global) | [#7012](https://github.com/agentscope-ai/QwenPaw/issues/7012) | High — UX pain point for multi-tasking |
| **Unified tool panel**: file preview, diff, web preview, interactive terminal | [#7013](https://github.com/agentscope-ai/QwenPaw/issues/7013) | Medium — aligns with "OS Shell" vision |
| **ViBo memory integration** — 97.5% token reduction, encrypted, scoped | [#7003](https://github.com/agentscope-ai/QwenPaw/issues/7003) | Low — external proposal, needs evaluation |
| **Server-deployed agent + lightweight client** (remote control local browser/desktop) | [#7002](https://github.com/agentscope-ai/QwenPaw/issues/7002) | Medium — architectural shift, solves sync/slowness |
| **`QWENPAW_CHANNEL` env var** injected into shell subprocesses | [#6995](https://github.com/agentscope-ai/QwenPaw/issues/6995) | High — small, enables context-aware scripts |
| **Session-scoped multi-project directories** (ordered list, primary + extras) | [#6976](https://github.com/agentscope-ai/QwenPaw/pull/6976) | **Already in PR** — likely v2.1.1 |
| **Import flow from Codex/Qoder** (instructions, skills, plugins, projects) | [#6960](https://github.com/agentscope-ai/QwenPaw/pull/6960) | **Already in PR** — onboarding win |
| **Matrix per-sender session/memory isolation** | [#7001](https://github.com/agentscope-ai/QwenPaw/pull/7001) | **Already in PR** — fixes group chat bug |

---

## 7. User Feedback Summary

**Pain Points:**
- **Security fear**: "Major architectural vulnerability" report with PDF evidence — users expect immediate patch, not just closure.
- **Windows TUI broken**: 2.1.0 blocks desktop users on Windows — "reverted to 2.0.1 as workaround" ([#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011)).
- **Session corruption**: Concurrent sessions (Feishu, Telegram) write state to wrong files; `/new` doesn't reset context.
- **No daemon mode**: Cannot run via SSH, systemd, or CI — "command hangs forever" ([#7010](https://github.com/agentscope-ai/QwenPaw/issues/7010)).
- **Model selector UX**: Global switch forces `/model` per session — "tedious and easy to forget" ([#7012](https://github.com/agentscope-ai/QwenPaw/issues/7012)).
- **Shabox + UV conflict**: Sandbox breaks package manager cache — manual policy.yaml edits required ([#7005](https://github.com/agentscope-ai/QwenPaw/issues/7005)).
- **False positive termination**: Cloudflare Tunnel + monitor plugin flagged as "mining/reverse proxy" ([#7009](https://github.com/agentscope-ai/QwenPaw/issues/7009)).

**Positive Signals:**
- First-time contributors landing meaningful PRs ([#7004](https://github.com/agentscope-ai/QwenPaw/pull/7004), [#7001](https://github.com/agentscope-ai/QwenPaw/pull/7001), [#6960](https://github.com/agentscope-ai/QwenPaw/pull/6960), [#6823](https://github.com/agentscope-ai/QwenPaw/pull/6823)).
- OS Shell vision resonates — "movable windows, launcher, taskbar" is a differentiator.
- Memory/dashboard improvements ([#6984](https://github.com/agentscope-ai/QwenPaw/pull/6984), [#6997](https://github.com/agentscope-ai/QwenPaw/pull/6997)) show investment in observability.

---

## 8. Backlog Watch — Stale / Unanswered Critical Items

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#5856](https://github.com/agentscope-ai/QwenPaw/issues/5856) Tool_call structure lost in context compaction | **38 days** (since 07-08) | Causes 400 errors, message count mismatch — blocks long-running agents. No fix PR. |
| [#6992](https://github.com/agentscope-ai/QwenPaw/issues/6992) / [#6993](https://github.com/agentscope-ai/QwenPaw/issues/6993) Unauthenticated plugin API RCE | **1 day** (filed 08-13) | **Active exploit vector** — PDF evidence of SSH backdoors, C2, credential theft. Closed as duplicate but **no fix visible**. |
| [#6916](https://github.com/agentscope-ai/QwenPaw/issues/6916) Plugins silently create cron jobs / inject messages | **3 days** | Permission model gap — "medium-high severity". Closed but root cause (plugin sandbox) unaddressed. |
| [#6047](https://github.com/agentscope-ai/QwenPaw/issues/6047) New chat reopens old session after upgrade (stale chats.json) | **32 days** | Session index sync broken on upgrade — data integrity risk. Closed but regression reappeared in [#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011). |
| [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) Unify provider discovery, model metadata, routing | **24 days** | Large architectural PR — "under review" since 07-21. Blocks model routing improvements. |
| [#6715](https://github.com/agentscope-ai/QwenPaw/pull/6715) OneBot media localization | **9 days** | Inbound media handling — "under review" since 08-05.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-14

## 1. Today's Overview
ZeroClaw shows **high development velocity** with 50 PRs updated in the last 24 hours (10 merged/closed, 40 open), though issue activity remains light (3 updated, 2 open). The project is in a heavy infrastructure and security hardening phase: multiple PRs target CI toolchain upgrades, SSRF mitigations, provider credential handling, and configuration migration. No new releases were cut today. The merged PRs indicate a focus on **stability fixes** (session queue serialization, filesystem containment, config hyphen handling) and **CI hygiene** (CodeQL false-positive suppression, Blacksmith runner validation).

## 2. Releases
**No new releases today.** The project continues on the `master` branch with continuous integration; the next release will likely bundle the accumulated provider routing documentation (#9639), SSRF hardening (#8713, #9969), and configuration refactors (#9013, #9707).

## 3. Project Progress — Merged/Closed PRs Today
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#9966](https://github.com/zeroclaw-labs/zeroclaw/pull/9966) | **Bug/CI** | Fixed Dockerfile glob to match nested crate manifests (`crates/**/Cargo.toml`) | Unblocks container builds for nested workspace members |
| [#9709](https://github.com/zeroclaw-labs/zeroclaw/pull/9709) | **Bug** | Clean up Edge TTS temp files on *all* error paths | Prevents orphaned `zeroclaw_tts_<uuid>.mp3` artifacts |
| [#9705](https://github.com/zeroclaw-labs/zeroclaw/pull/9705) | **Bug/Config** | Allow `config set` on hyphenated cron aliases (e.g., `morning-brief`) | Fixes regression introduced by alias parsing |
| [#9674](https://github.com/zeroclaw-labs/zeroclaw/pull/9674) | **Bug/Infra** | Preserve session queue serialization during idle eviction | Eliminates race where a selected slot could be evicted before pending count visible |
| [#9969](https://github.com/zeroclaw-labs/zeroclaw/pull/9969) | **Security/Gateway** | Canonicalize & contain filesystem dashboard asset paths; reject symlink escapes | Hardens dashboard asset serving against path traversal |
| [#9639](https://github.com/zeroclaw-labs/zeroclaw/pull/9639) | **Docs** | Document provider routing lifecycle (profile construction, hint routing, fallback, cooldowns, streaming recovery) | Improves operator visibility into routing decisions |
| [#9932](https://github.com/zeroclaw-labs/zeroclaw/pull/9932) | **CI** | Drop CodeQL `rust/hard-coded-cryptographic-value` query (27 false positives in `cfg(test)`) | Reduces noise in security scans |
| [#9984](https://github.com/zeroclaw-labs/zeroclaw/pull/9984) | **CI** | Validation-only PR for Blacksmith rust-cache path | Confirms Blacksmith runner caching works before merging #9962 |
| [#9978](https://github.com/zeroclaw-labs/zeroclaw/issues/9978) | **Issue (Closed)** | Design ideas from DeepSeek Harness for permission/sandbox roadmap | Captured for post-#7155 roadmap planning |

## 4. Community Hot Topics
| Item | Activity | Core Need |
|------|----------|-----------|
| [#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) — **Native Hailo-Ollama support** (XL, open since 07-17) | Long-running, high-risk provider integration | First-class support for Hailo hardware via Ollama-compatible API; signals demand for edge/accelerator providers |
| [#9203](https://github.com/zeroclaw-labs/zeroclaw/pull/9203) — **Authenticated HTTP fan-in for SOP** (XL, open since 07-20) | Gateway/runtime security work | Enables webhook-triggered SOP execution with auth; needed for enterprise automation workflows |
| [#9420](https://github.com/zeroclaw-labs/zeroclaw/pull/9420) — **Stored Anthropic OAuth profiles** (XL, open since 07-26) | Provider auth modernization | Moves off static API keys to stored OAuth profiles; aligns with Anthropic’s recommended auth flow |
| [#8713](https://github.com/zeroclaw-labs/zeroclaw/pull/8713) — **SSRF gate for `file_download`** (XL, open since 07-04) | Security hardening | Opt-in `allowed_private_hosts` to prevent accidental localhost/metadata endpoint access; high-risk, needs review |
| [#9982](https://github.com/zeroclaw-labs/zeroclaw/issues/9982) — **Hosted memory (ViBo Cloud API)** | External proposal | Vendor pitch for managed memory layer; indicates community interest in offloading persistence |

## 5. Bugs & Stability — Today’s Reports
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **S3 (Minor)** | [#9983](https://github.com/zeroclaw-labs/zeroclaw/issues/9983): Fallback model without vision incorrectly reports error cause | **Open** | None yet |
| — | [#9968](https://github.com/zeroclaw-labs/zeroclaw/pull/9968): Provider integrity — fail closed on invalid Zhipu JWT | **Open (P1, High risk)** | PR #9968 (open) |
| — | [#9707](https://github.com/zeroclaw-labs/zeroclaw/pull/9707): Bare `vision_model_provider` cannot select migrated V3 dotted alias | **Open (Medium, needs author action)** | PR #9707 (open) |
| — | [#9942](https://github.com/zeroclaw-labs/zeroclaw/pull/9942): `vi_verify` tool withheld notice not surfaced when log persistence disabled | **Open (Medium, needs author action)** | PR #9942 (open) |

**Note:** Several older high-risk bug PRs remain open (#8713, #9109, #9203, #9420, #9713) — these are architectural and require maintainer bandwidth.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Release |
|--------|--------|----------------------------|
| **Agent export bundles** (`zeroclaw agents export`) | [#9986](https://github.com/zeroclaw-labs/zeroclaw/pull/9986) (open, 1 day old) | **High** — small, self-contained CLI addition |
| **TodoWrite display config → ZeroCode** | [#9013](https://github.com/zeroclaw-labs/zeroclaw/pull/9013) (open since 07-12) | **Medium** — breaking config migration, needs author action |
| **Token accounting on history-trim events** | [#9713](https://github.com/zeroclaw-labs/zeroclaw/pull/9713) (open since 08-03) | **Medium** — observability improvement, XL scope |
| **Hailo-Ollama native provider** | [#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) | **Low-Medium** — hardware-specific, XL risk |
| **Permission/sandbox roadmap informed by DeepSeek Harness** | [#9978](https://github.com/zeroclaw-labs/zeroclaw/issues/9978) (closed, captured) | **Strategic** — post-#7155, not imminent |

## 7. User Feedback Summary
- **Pain point:** Fallback provider error messaging is misleading when vision capability mismatches (#9983) — users see generic failures instead of “vision not supported by fallback.”
- **Pain point:** Config CLI rejects valid hyphenated aliases (#9705, fixed) — friction for cron-like job names.
- **Pain point:** Security capability (`vi_verify`) silently withheld when logging off (#9942) — operators unaware of active protections.
- **Use case:** Demand for **portable agent bundles** (#9986) to move agents across installs/environments.
- **Use case:** Interest in **managed memory infrastructure** (#9982) — users want to offload persistence.
- **Satisfaction:** Provider routing documentation (#9639) well-received; clarifies previously opaque fallback/cooldown behavior.

## 8. Backlog Watch — Stale High-Value Items Needing Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#8713](https://github.com/zeroclaw-labs/zeroclaw/pull/8713) — SSRF gate for `file_download` | **41 days** | Critical security hardening; high-risk, needs security review & merge |
| [#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) — Hailo-Ollama provider | **28 days** | Hardware enablement; blocked on maintainer review capacity |
| [#9203](https://github.com/zeroclaw-labs/zeroclaw/pull/9203) — Authenticated SOP fan-in | **25 days** | Gateway feature for enterprise automation; XL scope |
| [#9420](https://github.com/zeroclaw-labs/zeroclaw/pull/9420) — Anthropic OAuth profiles | **19 days** | Auth modernization; aligns with upstream provider changes |
| [#9013](https://github.com/zeroclaw-labs/zeroclaw/pull/9013) — TodoWrite config → ZeroCode | **33 days** | Architectural cleanup; breaking change, needs design sign-off |
| [#9713](https://github.com/zeroclaw-labs/zeroclaw/pull/9713) — Token accounting on trim | **11 days** | Observability gap; users can’t debug token budget surprises |
| [#9707](https://github.com/zeroclaw-labs/zeroclaw/pull/9707) — Vision provider alias migration | **11 days** | Config migration for V3 provider aliases; blocks clean upgrades |

---

**Health Indicators:** ��� **Active development** (50 PRs/24h), ��� **Security backlog** (multiple high-risk open PRs >2 weeks), ��� **CI hygiene improving** (toolchain bump, CodeQL tuning, Blacksmith validation), ��� **Documentation investment** (provider routing lifecycle).  
**Recommendation:** Prioritize merging #8713 (SSRF), #9968 (provider integrity), and #9969 (fs containment) to reduce security surface; allocate review bandwidth to XL provider/gateway PRs (#9109, #9203, #9420) before they stale further.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*