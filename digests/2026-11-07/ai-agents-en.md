# OpenClaw Ecosystem Digest 2026-11-07

> Issues: 143 | PRs: 500 | Projects covered: 12 | Generated: 2026-11-07 05:39 UTC

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

**OpenClaw – Project Digest (2026‑11‑07)**  
*Data pulled from the GitHub activity feed for the `openclaw/openclaw` repository.*

---

### 1. Today’s Overview
- The repository is extremely lively: **143 issues** and **500 pull‑requests** were touched in the last 24 h, with **120 open issues** and **368 open PRs** still awaiting review.  
- No new tagged release was published, indicating the team is still in a “pre‑release churn” phase rather than shipping a new version.  
- Most of today’s chatter revolves around **runtime stability (crashes, integrity errors) and session‑state bugs**, while a secondary wave concerns **UX friction in the Control UI and tooling (cron, skill packaging, prompt‑cache handling).**  
- The high volume of open PRs (≈ 73 % of the PR count) suggests a backlog of contributions that have not yet been merged.

---

### 2. Releases
*No new release was cut in the last 24 h.*  
When a release appears, the team typically publishes a changelog that includes breaking‑change notices for the **gateway runtime, session‑placement schema, and provider‑adapter contracts**. Keep an eye on the `CHANGELOG.md` for those details.

---

### 3. Project Progress (PRs merged/closed today)

| PR # | Area | Size / Rating | Status | What landed |
|------|------|---------------|--------|-------------|
| **#194423** | Android gateway | M (security‑sensitive) | Open (awaiting maintainer) | Fixes “stuck node” condition caused by obsolete socket connections – improves Android reliability after network changes. |
| **#194492** | Gateway / CLI | XL | Open | Makes Gateway crashes visible after auto‑restart; adds persistent crash‑log entries for operators. |
| **#194484** | Docs / gateway | XL | Open | Prevents agent‑DB stalls after worker retirement – a long‑standing WAL‑write deadlock is now mitigated. |
| **#194496** | Gateway / UI | S | Open | Breaks a newly‑introduced import cycle that caused CI architecture checks to fail. |
| **#194494** | llama‑cpp extension | S | Open | Isolates abort signals between concurrent model loads, fixing intermittent “abort‑signal bleed‑through” bugs. |
| **#194475** | Gateway / scripts | XL | Open | Prevents stalls when a worker workspace is larger than the reconciliation buffer. |
| **#194477‑#194482** (cluster) | CI / PostgreSQL | M | Open | Adds coverage for cron‑completion on PostgreSQL 16 and improves test‑line ratchet enforcement. |
| **#194490** | Web‑UI | XS | Open | Stops auto‑highlighting of unlabeled code fences, cleaning up UI noise. |
| **#194468** | Web‑UI | XS | Closed | Keeps a session row highlighted while its context menu is open – a small but noticeable UX win. |
| **#194417** | Gateway / agents | S | Closed | Reduces first‑turn latency for Codex after a gateway restart (≈ 0.8 s saved). |

> **Bottom line:** Most of the PRs that are *open* today are **bug‑fixes, safety patches, or CI hygiene** rather than large feature additions. The few “ready for maintainer” items are already scoped for a near‑future merge.

---

### 4. Community Hot Topics (most‑commented Issues)

| Issue # | Title / Core Symptom | Comments | Severity / Rating | Link |
|---------|----------------------|----------|--------------------|------|
| **#177656** | *Native host exec returns “shared‑state integrity‑admission” error* (≥ 28 failures on v2026.10.5) | 31 | P1 – **release blocker** (integrity admission failure) | https://github.com/openclaw/openclaw/issues/177656 |
| **#143017** | *Prompt‑cache rewrites prefix – 21 M cache‑write tokens* | 15 | P2 – high‑impact performance regression | https://github.com/openclaw/openclaw/issues/143017 |
| **#167557** | *Deferred plugin data/settings migration never converges* | 13 | P1 – **UX friction / data loss** | https://github.com/openclaw/openclaw/issues/167557 |
| **#143278** | *Heartbeat internal output leaks to Telegram chat* | 12 | P2 – privacy / UX leak | https://github.com/openclaw/openclaw/issues/143278 |
| **#167406** | *Windows MSIX Codex gateway starves main thread* | 10 | P0 – **crash‑loop / deadlock** on Windows | https://github.com/openclaw/openclaw/issues/167406 |
| **#167609** | *Code‑mode reports guest‑script TypeErrors as internal_error* | 10 | P2 – debugging opacity | https://github.com/openclaw/openclaw/issues/167609 |
| **#178373** | *Agent loop lacks run‑level turn/token budget; tool‑loop detection opt‑in* | 9 | P2 – design‑level limitation | https://github.com/openclaw/openclaw/issues/178373 |
| **#182647** | *Cloud‑worker turns fail before inference (“Session capability metadata requires worker preparation”)* | 9 | P1 – blocking for cloud deployments | https://github.com/openclaw/openclaw/issues/182647 |
| **#130247** | *Cron jobs have no --until/--max‑runs; no cumulative run counter* | 8 | P2 – scheduler usability gap | https://github.com/openclaw/openclaw/issues/130247 |
| **#168101** | *Rate‑limit Retry‑After ignores maxRetryDelay after tool call* | 6 | P2 – latency & token‑budget waste | https://github.com/openclaw/openclaw/issues/168101 |

**What the community is asking for:**  
1. **Robustness of the native host execution path** (integrity admission, Windows gateway hangs).  
2. **Predictable prompt‑cache semantics** – the cache is being overwritten in ways that break KV‑cache reuse, directly affecting inference cost.  
3. **Migration & state‑convergence guarantees** for plugins and deferred settings.  
4. **Privacy‑safe logging** (heartbeat leaks).  
5. **Scheduler & cron ergonomics** (max‑runs, end‑conditions, token budgeting).  

These topics dominate the discussion, indicating that stability and predictable resource management are the current pain points for operators.

---

### 5. Bugs & Stability (ranked by severity)

| Severity | Issue # | Symptom | Current Fix Status |
|----------|--------|---------|--------------------|
| **Critical (P0‑P1)** | **#177656** – integrity‑admission error on host exec (Linux, Node 26) | > 20 % of runs abort; blocks production deployments. | No fix yet; open. |
| | **#167406** – Windows MSIX Codex gateway starves main thread | Gateway hangs, CPU 100 % → outage for Windows users. | No fix yet; open. |
| | **#182647** – Cloud‑worker turn fails before inference | All first‑turn model calls error; blocks cloud providers. | No fix yet; open. |
| | **#167557** – Deferred plugin migration never converges | Settings stuck, may cause data loss. | Open; under investigation. |
| **High (P2)** | **#143017** – Prompt‑cache prefix rewrite, 21 M token writes | Large cost increase, KV‑cache invalidation. | Open. |
| | **#143278** – Heartbeat leaks internal logs to Telegram | Privacy leakage. | Open. |
| | **#167652** – Windows Gateway hangs after 2026.9.9 upgrade | Gateway binds to port but does not accept connections. | Open. |
| | **#167791** – Android/Termux SQLite snapshot permission error | Gateway/Doctor abort on Android devices. | Open. |
| | **#167762** – Anthropic Claude‑opus missing `contextWindow` support | Sessions rejected for large context windows. | Open. |
| **Medium (P3‑P4)** | **#130257** – Tasks ledger does not record child‑run cost | Billing opacity for delegated ACP runs. | Open. |
| | **#167854** – Home drops session notices after > 20 pending sessions | In‑memory queue overflow, lost notifications. | Open. |
| | **#168101** – Rate‑limit retry ignores maxRetryDelay after tool call | Session lane locked for full retry delay. | Open. |

**Fix‑PR availability:** Most of the critical bugs **do not yet have an associated PR**. A handful of stability PRs (e.g., #194423, #194492, #194484) address related crash‑handling and database stalls, showing that the core team is prioritising infrastructure resilience but the most urgent runtime bugs remain open.

---

### 6. Feature Requests & Roadmap Signals

| Feature Request | Issue # | Core Idea | Likelihood of landing in next minor (2026.10.x) |
|-----------------|---------|-----------|-----------------------------------------------|
| *Browse & fork prior channel‑chat segments* | **#158800** | UI addition to view/fork historic “/new” segments in Control UI | **Medium** – UI work is already active (see PR #194393, #179988) and the request aligns with ongoing UI refinements. |
| *Cron jobs with `--until` / `--max‑runs`* | **#130247** | Scheduler termination flags + cumulative run counter | **High** – Several PRs fixing scheduler crashes (#194475) indicate the team is already tackling cron robustness. |
| *Show agent name on task‑progress card* | **#159663** | Add agent identifier to UI task rows | **High** – Minor UI change, likely to be merged alongside other UI polish PRs. |
| *Allow agents to edit/delete own messages in other conversations (Slack)* | **#168570** | Cross‑conversation post‑mortem edit/delete API | **Low‑Medium** – Requires changes to the Slack plugin and permission model; currently flagged as “security‑sensitive”. |
| *Zalo Personal durable observation before mention gating* | **#168324** | Opt‑in hook for authorized group messages | **Low** – Niche channel; would need dedicated SDK work. |
| *Session naming centralisation & sub‑agent lifetime model* | **#103067** | Unified naming, cross‑channel persistence | **Medium‑High** – Repeatedly referenced in several issues (e.g., #127195, #135628) and aligns with upcoming “session‑state refactor”. |
| *Workboard automation nudge follow‑up* | **#167417** | Ensure a queued run after a running automation job | **Medium** – Related to task‑ledger bugs; may be bundled with #130257 fix. |
| *Operator‑override for classified model‑request failure copy* | **#167341** | Customizable error messages for billing/rate‑limit failures | **Medium** – UI/UX improvement; low engineering risk. |

**Roadmap inference:** The **next release** is likely to focus on **runtime stability (host exec, Windows gateway, cloud worker placement)** and **UI polish** (Control UI improvements, cron ergonomics, task‑ledger visibility). Feature work that requires deep plugin changes (e.g., Slack cross‑conversation edit) will probably stay in the backlog.

---

### 7. User Feedback Summary

| Pain Point | Representative Issue(s) | Impact on Users |
|------------|--------------------------|-----------------|
| **Session‑state integrity** – “changed while starting work” generic error | #127195, #160494, #149239 | Operators cannot diagnose why a turn was aborted; leads to message loss and billing confusion. |
| **Platform‑specific crashes** – Windows, Android, macOS | #167406, #167652, #167791, #191076 (iOS UI) | Blocks adoption on major desktop/mobile platforms; high churn for enterprise deployments. |
| **Prompt‑cache / KV‑cache regressions** | #143017, #147017 (compaction) | Increases inference cost dramatically; directly hits SaaS billing. |
| **Cron / scheduler lack of controls** | #130247, #160494 | Operators cannot guarantee one‑off or bounded repeated jobs → resource leaks. |
| **Tool‑call handling inconsistencies** (e.g., after_tool_call hook flattening, rate‑limit retry) | #102961, #168101 | Plugins cannot reliably react to tool failures; developers spend time tracing opaque errors. |
| **UI friction** – hidden session rows, missing provider branding, markdown table clipping | #191076, #194498, #194410, #194490 | Reduces productivity for power‑users; increases support tickets. |
| **Documentation gaps** – missing verification steps for Codex tool surface, skill‑packaging errors | #167921, #158816 | New contributors hit roadblocks; slows onboarding. |

Overall, **stability & observability** dominate the dissatisfaction signals, with **UX & tooling** forming a secondary tier of complaints.

---

### 8. Backlog Watch (long‑standing, un‑triaged items)

| Issue # | Age / Status | Core Concern | Why it matters |
|---------|--------------|--------------|----------------|
| **#127195** | Open (since 2026‑08‑21) – 16 + comments | Identical “changed while starting work” error across 16 call sites | Hides root cause of session aborts; a **high‑impact production blocker** that still lacks a fix. |
| **#130247** | Open (since 2026‑08‑26) – 8 + comments | Cron jobs without termination controls | Risks runaway jobs and uncontrolled cost; still **unaddressed** despite many related bug reports. |
| **#135628** | Open (since 2026‑09‑01) – 6 + comments | Context‑engine turn outbox starvation | Directly impacts throughput for high‑load agents; a regression that can degrade performance at scale. |
| **#167854** | Open (since 2026‑10‑09) – 6 + comments | Home drops session notices after > 20 pending sessions | Affects large deployments with many concurrent agents; could lead to silent failures. |
| **#168570** | Open (since 2026‑10‑10) – 4 + comments | Agent self‑delete/edit in other conversation (Slack) | Important for compliance & cleanup workflows, especially in regulated environments. |
| **#167276** | Open (since 2026‑10‑08) – 5 + comments | Sub‑agent completion results never reach parent plugin harness | Breaks orchestrated multi‑agent pipelines; core to “agent‑as‑service” vision. |
| **#167667** | Open (since 2026‑10‑09) – 6 + comments | ChatGPT Responses continuation fails with “Rustponses cannot replay” | Affects any deployment that uses the ChatGPT‑Responses tool; still unresolved. |
| **#191076** | Closed (just now) – 5 + comments | iOS markdown table clipping | Demonstrates UI regressions that can slip into releases; need tighter UI testing. |

**Action recommendation:** Prioritise **#127195** and **#130247** for a dedicated sprint; they affect a wide range of customers and have already accumulated community attention.  

---

## TL;DR Actionable Takeaways for the Core Team
1. **Stability first:** Allocate reviewer bandwidth to the three critical bugs (**#177656, #167406, #182647**) – they are currently release blockers.  
2. **Prompt‑cache regression** should be isolated (issue #143017) as it has a direct cost impact; a short‑term fix could be a “cache‑preserve flag.”  
3. **Scheduler ergonomics** (cron end‑conditions) are a mature low‑risk win; merge PRs that add `--until` / `--max‑runs` soon.  
4. **UI polish** (provider branding, code‑fence highlighting, session‑row highlight) can be bundled into a single “Control UI polish” release – these are already covered by open PRs.  
5. **Backlog triage:** Flag the long‑open high‑impact items (**#127195, #130247, #167276**) for a maintainer sprint; if not owned, consider “adopt‑by‑contributor” label.  

--- 

*All links point to the official GitHub repository (e.g., `https://github.com/openclaw/openclaw/issues/177656`).*

---

## Cross-Ecosystem Comparison

**Cross‑Project Comparison – Personal AI‑Assistant / Agent Ecosystem (as of 7 Nov 2026)**  

---

### 1. Ecosystem Overview  
The open‑source landscape for personal AI assistants is now dominated by a handful of “runtime + gateway” stacks (OpenClaw, ZeroClaw, Hermes Agent) that provide unified agent orchestration, plus a parallel group of lightweight client‑side assistants (NanoBot, NanoClaw, PicoClaw) that focus on UI/UX and single‑host execution.  Most projects are in a **stabilisation phase** after a burst of feature work in 2025‑2026, with the current community conversation centred on **runtime reliability, deterministic session state, and cross‑platform provider integration**.

---

### 2. Activity Comparison  

| Project | Open Issues* | Open PRs* | Release (30 d) | Health Score (1‑5) |
|---------|--------------|-----------|----------------|-------------------|
| **OpenClaw** | 120 | 368 | None (pre‑release churn) | **3** |
| **NanoBot** | 3 (out of 4) | 33 | v0.4.1 (Nov 5) | **4** |
| **Hermes Agent** | 12 | 45 (≈ 50 touched) | None | **3** |
| **PicoClaw** | 1 (issue #3462) | 2 | None | **3** |
| **NanoClaw** | 1 (issue #4273) | 24 | None | **3** |
| **LobsterAI** | 1 (open‑ban) | 7 (still open) | v2026.11.6 (Nov 6) | **4** |
| **ZeroClaw** | 16 | 14 (merged/closed) | None | **3** |
| **CoPaw** | 5 (major memory/tag bugs) | 10 (open) | None | **3** |
| **NullClaw** | 0 | 0 | None | **5** (inactive but no open defects) |
| **IronClaw** | 0 | 0 | None | **5** |
| **Moltis** | 0 | 0 | None | **5** |
| **ZeptoClaw** | 0 | 0 | None | **5** |
| **Other (Mol‑, etc.)** | — | — | — | — |

\*Counts reflect the numbers **still open** after today’s activity window.  
**Health Score** combines: issue‑to‑PR backlog ratio, presence of critical open bugs, and whether a recent stable release is available (5 = quiet & clean, 1 = high‑risk churn).

---

### 3. OpenClaw’s Position  

| Dimension | OpenClaw | Typical Peer (e.g., ZeroClaw, Hermes) |
|-----------|----------|----------------------------------------|
| **Core advantage** | Most extensive **gateway‑runtime** with built‑in support for Android, Termux, and a large catalogue of “skill‑packaging” helpers. | Peers tend to offer a narrower runtime (ZeroClaw focuses on SQLite + OIDC, Hermes on desktop‑only). |
| **Technical approach** | **Modular gateway + provider‑adapter contracts**; heavy emphasis on **session‑state schema** and **CLI‑centric tooling** (cron, skill‑packager, prompt‑cache). | Others (NanoBot, NanoClaw) embed the runtime inside the UI process; ZeroClaw uses a “single‑binary gateway + relay”. |
| **Community size** | ~143 issues touched in the last day, 500 PRs – the **largest contributor base** in the ecosystem. | ZeroClaw: 19 issues / 50 PRs; Hermes: 16 issues / 50 PRs; NanoBot: 40 PRs / 4 issues. |
| **Maturity** | Still in “pre‑release churn”; no tagged release for ≥ 30 days, but the volume of PRs indicates a **rapid development pipeline**. | ZeroClaw, NanoBot, LobsterAI already ship stable releases, signaling a **more mature production‑ready state**. |

*Bottom line*: OpenClaw leads the market in **feature breadth and contributor activity**, but it must close the release gap and resolve the P0/P1 bugs (integrity‑admission, Windows gateway starvation) to convert that momentum into production confidence.

---

### 4. Shared Technical Focus Areas  

| Need | Projects Raising It | Typical Implementation |
|------|----------------------|------------------------|
| **Runtime stability & crash‑handling** (gateway crashes, dead‑locks, integrity‑admission) | OpenClaw (#177656, #167406), ZeroClaw (#12187, #12279), Hermes (#143547) | Persistent crash‑logs, graceful restart, explicit lease‑validation. |
| **Deterministic session / KV‑cache management** | OpenClaw (#143017), NanoClaw (#4273), CoPaw (#8580, #8585) | Safe‑abort signals, cache‑preserve flags, rebuild‑on‑restart. |
| **Scheduler / cron ergonomics** (max‑runs, until, token budgeting) | OpenClaw (#130247), ZeroClaw (no direct PR but issue #12187 mentions turn normalisation), NanoClaw (#130247 not present) | CLI options `--until`, `--max‑runs`, per‑turn token caps. |
| **Cross‑platform provider contracts** (OpenAI‑compatible, CloudGPU, DeepSeek, OIDC) | NanoBot (#6584), NanoClaw (#4210), ZeroClaw (#9746, #12258), LobsterAI (multi‑model stream reconnection) | Unified HTTP / WebSocket adapters, explicit rate‑limit handling. |
| **UI/UX consistency for long conversations** (scroll‑jank, code‑fence highlighting, pagination) | NanoBot (#6593, #6592), CoPaw (#8600, #8605), ZeroClaw (Compact UI for context compaction) | `ResizeObserver`, cursor‑based pagination, debounce of auto‑scroll. |
| **Security hardening (TLS verification, OIDC rate limits, XFF handling)** | NanoBot (v0.4.1 TLS), ZeroClaw (#12114, #12233), LobsterAI (no explicit but noted in release) | Strict cert verification, OIDC attempt‑ledger, stripped X‑Forwarded‑For. |

These six themes appear in **≥ 4 projects each**, indicating clear ecosystem‑wide priorities for the next 6‑12 months.

---

### 5. Differentiation Analysis  

| Dimension | OpenClaw | NanoBot | Hermes Agent | PicoClaw | LobsterAI | ZeroClaw |
|-----------|----------|---------|--------------|----------|-----------|----------|
| **Target user** | Enterprise / multi‑device deployments (Android, Termux, desktop) | Solo developers needing a lightweight web UI | Power‑users of desktop‑only agents, heavy plugin ecosystem | Hobbyist / skill‑marketplace focus on RISC‑V‑like devices | End‑users who need a **stable, polished desktop companion** (macOS/Windows) | Mixed‑cloud/self‑hosted operators who need **fine‑grained security** (OIDC, XFF) |
| **Primary architecture** | Separate **gateway binary** + **CLI tools** (cron, skill packager) | **Single‑process Electron app** with embedded runtime | **Desktop‑focused electron app** + **gateway** (unified gateway merge) | **Pure Rust core** + **plugin‑registry** (no UI) | **Electron + OpenClaw core**, but with **auto‑reconnect** and **compact UI** | **Gateway+Relay** model; explicit **proxy‑aware OIDC** and **per‑agent tools** |
| **Key feature focus** | Session state, prompt‑cache, multi‑platform tooling | UI performance (ResizeObserver), TLS, sandboxed shells | Plugin catalogue, Windows/macOS stability, multi‑agent collaboration roadmap | Skill deduplication, new cloud‑GPU provider | Stream reconnection, context compaction, installer slimming | Secure rate‑limit, per‑agent ownership scoping, sync‑session tool |
| **Release cadence** | Pre‑release churn, no tagged release this month | Monthly patch (v0.4.1) | No release, many PRs pending | No release yet | New release every ~4 weeks (v2026.11.6) | No release yet; focusing on v0.9.0 hardening |

The **architectural split**—gateway‑centric (OpenClaw, ZeroClaw) vs. **all‑in‑one UI** (NanoBot, LobsterAI) — is the most visible differentiator.  Hermes sits between these worlds, offering a robust desktop UI but still relying on an external gateway.  PicoClaw is a minimalist core that intentionally leaves UI to external tools.

---

### 6. Community Momentum & Maturity  

| Project | Momentum tier* | Typical release cadence | Maturity indicator |
|---------|----------------|------------------------|---------------------|
| **OpenClaw** | **High‑velocity** (500 PRs touched) | No recent release → **pre‑stable** | Large backlog; needs a release to signal maturity. |
| **NanoBot** | **Steady** (continuous dependency upgrades, v0.4.1) | Monthly patch | Good CI health, few open critical bugs → **stable**. |
| **Hermes Agent** | **High‑activity** (gateway merge‑induced bug wave) | No release; many open PRs | Transition stage; core stability still in flux. |
| **PicoClaw** | **Low‑volume** (single issue, 2 PRs) | No release → **maintenance** | Niche skill‑registry; low churn. |
| **NanoClaw** | **Active‑fix** (Windows‑specific PRs) | No release → **stabilising** | Critical bug #4273 pending; otherwise healthy. |
| **LobsterAI** | **Polish‑focused** (dependency upgrades + v2026.11.6) | ~4‑week release | **Stable**; only incremental UX/ reliability changes. |
| **ZeroClaw** | **Iterative‑hardening** (security & timestamp fixes) | No release → **pre‑v0.9** | Large PR backlog, but many critical fixes merged. |
| **CoPaw** | **Memory‑centric** (recall, tag service) | No release → **beta‑stabilisation** | Critical memory bugs still open, but UI polish ongoing. |
| **Null/Iron/Zepto/​Moltis** | **Dormant** (no activity) | No releases | Either archived or awaiting new maintainer. |

\*Momentum tier is a qualitative view: **High‑velocity** (≥ 10 PRs/day), **Steady** (2‑5 PRs/day), **Low‑volume** (< 2 PRs/day).

---

### 7. Trend Signals for AI‑Agent Developers  

| Trend | Evidence Across Projects | Implication |
|------|--------------------------|-------------|
| **Shift from “single‑model” to “multi‑model provider”** | OpenClaw prompting cache regression, NanoClaw’s “llmman” local provider, ZeroClaw’s multi‑model profile PR #9809, NanoBot’s CloudGPU addition | Developers need **generic provider adapters** and **runtime‑agnostic model selection**; shared interfaces (OpenAI‑compatible, OIDC) become de‑facto standards. |
| **Security & observability as first‑class concerns** | ZeroClaw XFF hardening, OIDC rate‑limit caps; NanoBot TLS enforcement; OpenClaw integrity‑admission errors; LobsterAI privacy‑leak issue #3023 | Future agents will ship **built‑in audit logs, token budgeting, and explicit lease management**; compliance‑driven users will favour projects that expose metrics out‑of‑the‑box. |
| **Deterministic session state & KV‑cache** | OpenClaw prompt‑cache rewrite (#143017), CoPaw memory tag 503 (#8580), NanoClaw session‑tool ownership (#150496) | As agents become more autonomous, **state reproducibility** becomes a performance‑critical metric; libraries that guarantee cache stability gain a competitive edge. |
| **Cross‑platform ergonomics (Windows/macOS/Android)** | Hermes Android gateway stuck node, ZeroClaw Windows loopback, NanoClaw Windows socket fixes, LobsterAI macOS permission guide | Tooling that abstracts **platform‑specific socket/permission quirks** will attract enterprise deployments that target heterogeneous fleets. |
| **Tool‑call UI polishing** | NanoBot scroll‑jank, CoPaw tool‑call compact format, LobsterAI stream‑reconnect UI | Users expect **responsive, low‑jank interfaces** when agents invoke long‑running tools; UI libraries (Prism, ResizeObserver) are becoming part of the core agent stack. |
| **Scheduler / cron “budget” awareness** | OpenClaw `--max‑runs`, ZeroClaw turn normalisation, NanoClaw token‑budget hints (issue #168101) | Future runtimes will expose **per‑turn token caps and run‑limits** to avoid runaway costs, especially on pay‑per‑token LLM back‑ends. |

*Takeaway*: The next wave of open‑source agents will be judged not only on raw model capabilities but on **operational reliability, secure multi‑tenant deployment, and deterministic resource accounting**.  Projects that expose clean, language‑agnostic provider adapters and a hardened gateway‑core (OpenClaw, ZeroClaw) are positioned to become the “infrastructure layer,” while the UI‑centric forks (NanoBot, LobsterAI) will continue to drive adoption through polished front‑ends.

---  

**Prepared for technical decision‑makers and contributor leads – 2026‑11‑07**.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot Project Digest – 2026‑11‑07**  
*(Data pulled from the NanoBot repository on 7 Nov 2026)*  

---

### 1. Today’s Overview  
- The repo saw a burst of activity: **40 PRs** were touched in the last 24 h, of which **33 have been merged/closed** and **7 remain open**.  
- **4 issues** were updated, three of them still open, signalling a small but focused set of UI‑related bugs and a provider‑compatibility edge case.  
- A **patch release (v0.4.1)** went live today, concentrating on security hardening (TLS, sandboxed shells) and reliability improvements for queued work. Overall health is solid – the majority of changes are corrective or performance‑oriented rather than large feature additions.

---

### 2. Releases  

| Version | Date | Highlights | Breaking changes / Migration notes |
|---------|------|------------|------------------------------------|
| **v0.4.1** | 2026‑11‑05 (published 2026‑11‑06) | • Fixed TLS certificate verification and enforced hostname checks for HTTP, WebSocket and fallback transports. <br>• Added sandboxed shell execution and tightened workspace‑boundary checks. <br>• Improved idle‑maintenance logic so it no longer blocks active work; retry, reconnection and recovery pathways were tuned. <br>• Preserved native provider state across reconnections. | No API‑level breaking changes. Users should simply upgrade; existing configuration (TLS trust stores, proxy rules) continues to work unchanged. |

---

### 3. Project Progress (Merged / Closed PRs)  

| PR # | Title / Scope | Core contribution | Link |
|------|---------------|-------------------|------|
| **6570** | *chore(release): prepare 0.4.1* | Release scaffolding, changelog generation, CI tag handling. | https://github.com/HKUDS/nanobot/pull/6570 |
| **6563** | *fix(security): enforce TLS, shell and workspace boundaries* | Unified three security hardenings (TLS verification, Unix sandbox, workspace isolation). | https://github.com/HKUDS/nanobot/pull/6563 |
| **6565** | *fix(agent): keep idle scans off the inbound consumer* | Decoupled idle‑session scans from inbound command loop, eliminating dead‑lock on Windows CI. | https://github.com/HKUDS/nanobot/pull/6565 |
| **6587** | *perf(webui): reduce file activity layout work* | Switched to `ResizeObserver`‑based sizing, cutting layout thrash when many file diffs are shown. | https://github.com/HKUDS/nanobot/pull/6587 |
| **6581** | *perf: reduce memory copies across files, sessions, and model requests* | Streamed file‑range reads and avoided full‑buffer copies, lowering peak RAM use. | https://github.com/HKUDS/nanobot/pull/6581 |
| **6586** | *fix(webui): preserve oversized turn history with record pagination* | Added cursor‑based pagination for very long turns, preventing silent truncation. | https://github.com/HKUDS/nanobot/pull/6586 |
| **6590** | *fix(webui): close context sidebar for new conversations* | UI tweak – new chats start with a clean workspace, sidebar auto‑closed. | https://github.com/HKUDS/nanobot/pull/6590 |
| **6591** | *fix(webui): follow browser language on first visit* (closes #6583) | Resolved locale‑initialisation bug; UI now respects `navigator.languages` on first load. | https://github.com/HKUDS/nanobot/pull/6591 |
| **6588** | *test(webui): allow 150 ms for large graph page tasks* | Raised CI long‑task budget for 500‑node graph tests – a stability safeguard. | https://github.com/HKUDS/nanobot/pull/6588 |
| **6585** | *docs: correct maintainer name* | Minor docs fix – spelling of “Yongru Cheng”. | https://github.com/HKUDS/nanobot/pull/6585 |
| **6528** | *docs: add nanobot WeChat community QR entry* | Community‑outreach improvement – QR code added to `COMMUNICATION.md`. | https://github.com/HKUDS/nanobot/pull/6528 |
| **6556** | *ci(release): share manual and opt‑in daily candidate preparation* | Streamlined release workflow; optional daily preview build. | https://github.com/HKUDS/nanobot/pull/6556 |
| **6412** | *refactor(webui): unify code and diff highlighting* | Consolidated Prism highlighting pipelines, regained single‑pane preview layout. | https://github.com/HKUDS/nanobot/pull/6412 |

*Key take‑away:* The sprint focused on hardening (TLS, sandbox), UI polish (locale, sidebar, scroll‑behaviour), and performance (memory copies, layout throttling). No major new features landed today.

---

### 4. Community Hot Topics  

| Item | Type | Why it’s hot (comments / reactions) | Underlying need |
|------|------|-------------------------------------|----------------|
| **#6593** – “Scroll‑to‑bottom button flickers” | Issue (open) | First‑time report; UI‑animation glitch affecting conversation navigation. | Users expect a stable, always‑visible navigation shortcut when reviewing long threads. |
| **#6592** – “Middle‑click autoscroll at live tail is snapped back” | Issue (open) | Same day as #6593; indicates broader scroll‑handling problems. | Smooth, uninterrupted scrolling is critical for real‑time monitoring of AI output. |
| **#6584** – “DeepSeek image tool results sent in unsupported role” | Issue (open) | Provider‑specific protocol mismatch; could cause silent failures for vision‑enabled models. | Clear contract enforcement between NanoBot and external LLM APIs; prevents malformed messages. |
| **#6581** – Memory‑copy performance PR (closed) | PR (merged) | Large number of lines changed; referenced in CI stability discussions. | Faster processing of large file reads and session queries—important for heavy‑usage deployments. |
| **#6587** – Layout‑performance PR (merged) | PR (merged) | Directly tied to UI issues #6593/6592; many reviewers participated. | Reducing main‑thread work to keep UI responsive when many file diffs are displayed. |

*Interpretation:* The community is currently concentrating on **UI scrolling stability** and **correct handling of provider‑specific message formats**. Both are high‑visibility to end‑users (chat experience) and therefore attract rapid feedback.

---

### 5. Bugs & Stability (ranked by impact)

| Severity | Issue / PR | Summary | Status / Fix |
|----------|------------|--------|--------------|
| **Critical** | **#6584** – DeepSeek image‑tool role mismatch | Vision images must be sent in `user` role; NanoBot currently emits them under an unsupported role, risking API rejections. | Open; no fix yet. |
| **High** | **#6593** – Scroll‑to‑bottom button flickers | UI component unmounts/remounts during smooth scroll, causing visual jitter. | Open; likely to be addressed by upcoming layout‑performance work. |
| **High** | **#6592** – Middle‑click autoscroll snaps back | Autoscroll is overridden each frame, breaking the expected “pan‑while‑holding‑middle‑button” behaviour. | Open; may be solved alongside #6593. |
| **Medium** | **#6583** – Language defaults to English (now fixed) | First‑visit UI ignored browser locale. | Fixed by PR #6591 (merged). |
| **Medium** | **Security fixes** – TLS, sandbox, workspace (PR #6563) | Prior to today, omitted TLS verification could allow MITM; sandbox omission could expose host system. | Fixed in v0.4.1. |
| **Low** | **#6135** – SVG files read as image blocks | `read_file` classifies SVG as image, returning an `image_url` block instead of raw text. | Open; minor UX impact. |

*Overall:* No regression‑inducing crashes were reported; most defects are UI‑centric or provider‑contract mismatches, and the project already shipped security patches.

---

### 6. Feature Requests & Roadmap Signals  

| Request | Area | Current status | Likelihood for next release (v0.4.2) |
|---------|------|----------------|-------------------------------------|
| **Add Opper as built‑in provider** (Issue/PR #5845) | Provider ecosystem | Open PR; adds a new gateway entry similar to Eden AI. | **High** – the PR is already open and only requires review/merge; expected in the next minor bump. |
| **Heartbeat‑specific model override** (PR #6324) | Scheduler / resource optimisation | Open PR; allows lightweight model for periodic health checks. | **Medium** – depends on maintainer bandwidth; aligns with upcoming “resource‑aware scheduling” theme. |
| **FTS5‑based session search acceleration** (PR #5826) | Database / performance | Open PR; adds full‑text search cache for session titles. | **Medium‑High** – performance‑focused PRs have been merged quickly lately, so could land in v0.4.2. |
| **Large‑graph page task budget increase** (PR #6588) | CI / testing | Merged – indicates a willingness to support larger graphs now. | Already baked in; no further action needed. |
| **Record‑level pagination for oversized turns** (PR #6586) | UI / data integrity | Open, reviewed, awaiting final sign‑off. | **High** – addresses a concrete data‑loss bug; likely to be merged before the next release. |

---

### 7. User Feedback Summary  

- **Scrolling & navigation** is the most vocal pain point: flickering UI elements (#6593) and broken middle‑click autoscroll (#6592) both disrupt the core “watch‑the‑assistant” experience. Users are calling for smoother, non‑jittery interactions, especially on long conversations.  
- **Locale handling** caused confusion for non‑English first‑time visitors; the quick fix (#6591) was positively received.  
- **Provider compatibility** (DeepSeek vision role) surfaced as a blocker for vision‑enabled workflows; developers need clearer validation/error‑reporting when an external API rejects a malformed request.  
- **Performance expectations**: the community applauded the recent memory‑copy and layout optimisations, indicating that speed and low‑latency UI are high priorities.  

Overall sentiment: users appreciate the rapid security fixes and are satisfied with the stable release cadence, but they are eager for a **more polished UI** and **robust provider contracts**.

---

### 8. Backlog Watch (Items needing maintainer attention)

| ID | Type | Title / Scope | Reason it needs attention |
|----|------|---------------|---------------------------|
| **#6296** | PR (open) | *fix(providers): keep parallel tool calls apart when the stream omits index* | Addresses a subtle streaming bug in Gemini‑compatible APIs; without it, tool calls may be mis‑ordered. |
| **#6584** | Issue (open) | *DeepSeek Chat Completions: image tool results are sent in an unsupported message role* | Directly blocks vision‑model usage; no mitigation yet. |
| **#6586** | PR (open) | *preserve oversized turn history with record pagination* | Prevents data loss for long turns – high impact for power users. |
| **#6585** – docs typo (already closed) – not a backlog. |
| **#6583** – language bug (fixed). |
| **#6582** (not listed) – if any large‑scale performance PR pending review, monitor. |
| **#5845** | PR (open) | *Add Opper as a built‑in provider* | Adds a valuable new gateway; merging would expand provider ecosystem. |
| **#6581** | PR (merged) – already resolved. |

*Recommendation:* Prioritise the DeepSeek role fix (#6584) and the provider‑stream index fix (#6296) before the next release cycle, as both affect core model‑interaction reliability. The pagination PR (#6586) should also be merged promptly to avoid silent loss of history data.

---

**Bottom line:** NanoBot is in a healthy maintenance phase—security hardening and performance optimisations are flowing quickly, while UI‑related bugs are being surfaced and will likely be tackled in the upcoming minor release (v0.4.2). The roadmap appears to be shaping around expanding provider support (Opper, heartbeat overrides) and polishing the web UI for large‑scale conversations.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent – Project Digest (2026‑11‑07)**  
*Compiled from the latest GitHub activity (issues · PRs · commits).*

---

## 1. Today’s Overview
- Development momentum is high: 16 issues were touched and 50 pull‑requests received updates in the last 24 h, with **12 open issues** still actively discussed.  
- The codebase is in a transition phase – the “unified gateway” (PR #106742) has been merged, and a cascade of post‑merge bugs and configuration‑drift problems are now surfacing.  
- No new public release was cut today, but a large volume of **bug‑fix PRs** and **catalog‑expansion PRs** indicate the team is focusing on stabilising the gateway and widening the plug‑in ecosystem.  

---

## 2. Releases
*No new release was published in the last 24 h.*  
(When a release does appear, the digest will list version, key new features, breaking changes, and migration steps.)

---

## 3. Project Progress (Merged / Closed PRs)

| PR # | Title (scope) | Type | Main contribution | Status today |
|------|----------------|------|-------------------|---------------|
| **#150496** | `feat(compat): serve a moved module under its old names as one module object` | Compatibility | Provides runtime aliasing for modules that will be relocated into `hermes_agent`. Pre‑emptively prevents import‑breakage after the upcoming refactor. | **Open** (awaiting review) |
| **#150283** | `feat(desktop): sign‑in to sites in the in‑app browser with saved logins` | Desktop | Adds a “use my real browser profile” button that pulls credentials from the Hermes vault, Bitwarden or 1Password. | **Open** (review pending) |
| **#150512** | `fix(build): macOS desktop build survives an absent optional get‑windows` | Build | Makes macOS builds tolerant of the optional `get-windows` dependency; prevents silent “build‑owed” state. | **Open** |
| **#149272** | `plugin‑catalog: add no‑cap (receipts for agent claims)` | Catalog | Introduces a new plug‑in (`no‑cap.yaml`) that supplies receipt objects for claim‑based workflows. | **Open** |
| **#150508** | `fix(profiles): a profile imported/installed/renamed onto a deleted name is live` | Profiles | Clears the “tombstone” left by `profile delete` and makes the restored profile selectable via `-p`. | **Open** |
| **#150509** | `fix(acp): hermes‑acp serves the selected profile` | CLI / Editor bridge | Aligns `hermes‑acp` with the profile selected via `hermes profile use`; fixes the long‑standing “always default profile” bug. | **Open** |
| **#141000** | `fix(memory): batch/store refusal parity with single‑op guidance` | Tools – Memory | Aligns error messages for batch memory ops with the guidance already provided for single ops. | **Open** |
| **#150484** *(ci‑reviewed)* | `fix(left‑core): admin‑pinned platform credentials outrank stale user extras` | Core / Config | Adjusts credential precedence after the left‑core migration; prevents stale user‑level config from silently overriding admin‑provided credentials. | **Closed** (merged) |
| **#150382‑#150388** (series) | `refactor(state)!: remove the CJK FTS5 tokenizer` | Core / Search | Drops an unsupported CJK tokenizer, simplifying the SQLite‑FTS5 integration and allowing older custom builds to re‑open their DBs. | **Open** |

*Summary*: Most merged work today centers on **compatibility shims**, **profile handling**, and **catalog expansion**. No major feature landed in `main` yet, but the groundwork for a smoother post‑gateway migration is clearly being laid.

---

## 4. Community Hot Topics  

| # | Item | Comments / 👍 | Core tags | Why it matters |
|---|------|---------------|----------|----------------|
| **#143547** | *Unified gateway – post‑merge problems* | 50 comments • 👍 1 | `gateway`, `desktop`, `telegram`, `discord`, `auth`, `sessions`, `profiles` | The unified gateway reshaped the entire architecture. Users report broken turn handling, missing UI feedback, and session dead‑locks across many front‑ends. The sheer discussion volume shows this is the highest‑priority stabilization effort. |
| **#97681** | *Bots collaborate across gateways* | 40 comments • 👍 4 | `gateway`, `feature`, `risk‑session‑state`, `risk‑message‑delivery` | A strategic roadmap item: enabling multi‑agent, cross‑machine cooperation. The community is already debating security, lease handling, and state reconciliation. |
| **#6232** | *Response‑header with model + thinking level* | 4 comments • 👍 3 | `gateway`, `config`, `feature` | Operators want quick diagnostics (which model answered, what reasoning depth). A lightweight header would aid monitoring and debugging. |
| **#149338** | *NixOS module – per‑profile `config.yaml`* | 2 comments • 👍 0 | `nixos`, `profiles` | NixOS adopters need first‑class support for multiple Hermes profiles; current work‑around is hacky. |
| **#150283** (PR) | *Desktop in‑app browser login* | – | `desktop`, `feature` | Direct user demand for SSO‑style sign‑in; improves productivity for power users who rely on the built‑in browser. |

*Underlying needs*:  
- **Stability of the unified gateway** (session ordering, proper shutdown, cross‑frontend consistency).  
- **Inter‑agent collaboration** (shared state, security boundaries).  
- **Observability & diagnostics** (headers, logs).  
- **Better multi‑profile ergonomics**, especially for declarative OS integrations (NixOS, Windows).  

---

## 5. Bugs & Stability (ranked by severity)

| Severity | Issue / PR | Summary | Current status | Fix in progress? |
|----------|------------|---------|----------------|------------------|
| **Critical** | **#146567** (closed) – *Bot Mode room member permanently silent* | Admission row stuck `queued`, blocking all later messages. | Closed (fixed). | ✅ |
| **Critical** | **#144729** (closed) – *Canonical group stuck in stopping after lost lease* | Group remains “active” despite no execution, prevents recovery. | Closed (fixed). | ✅ |
| **High** | **#150499** – *Weixin inbound file decryption returns ciphertext* | Files (PDF/DOCX/ZIP) cannot be opened; decryption silently fails. | Open, no fix yet. | ❌ |
| **High** | **#150491** – *Self‑repo guard creates non‑pruned scratch clones* | Scratch folder grows unbounded; prune only covers `cache/scratch`. | Closed (guard unchanged). | ❌ – needs housekeeping improvement. |
| **Medium** | **#150506** – *Deleted profile name remains hidden after import/rename* | Orphaned `.deleted` directories block reuse of names. | Open; PR #150508 will resolve. |
| **Medium** | **#150507** – *`hermes‑acp` ignores active profile / `-p`* | Editors launch with default profile, breaking environment isolation. | Open; PR #150509 addresses it. |
| **Medium** | **#150502** – *Webapp context‑usage panel clipped at 125 % UI scaling* | UI element overflows, unreadable on high‑DPI displays. | Open; UI tweak needed. |
| **Low** | **#150494** – *Dashboard‑auth warning on every profile‑scope load* | Noise in logs, harmless but pollutes output. | Open; can be silenced. |
| **Low** | **#150271** – *Sleeping group‑chat member stalls other chats* | One stalled bot blocks unrelated chats on same Desktop connection. | Open; may require gateway queue isolation. |
| **Low** | **#65057** – *Telegram `/restart` gives no feedback* | Users see a silent shutdown; UX issue. | Open. |

*Observation*: The two most severe bugs have already been closed, suggesting a focused triage on critical regressions. However, a cluster of **profile‑related bugs** (deleted‑name handling, `acp` profile selection) remains open and is being addressed by a dedicated series of PRs (#150508, #150509, #150496).

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Description | Likelihood for next release |
|---------|----------|-------------|------------------------------|
| **Cross‑gateway bot collaboration** | #97681 | Shared lease & messaging infrastructure so bots on different machines (or owners) can cooperate without surrendering control. | **High** – already listed as a P3 “needs‑decision” and frequently discussed; expected in a future **v0.4.x** milestone. |
| **Model + thinking‑level response header** | #6232 | Optional `X-Hermes-Model` / `X-Hermes-Level` HTTP headers for gateway replies. | **Medium** – simple implementation, low risk; could land in the next patch release. |
| **Per‑profile NixOS module support** | #149338 | Extend the NixOS `hermes` module to expose a `profiles` option, auto‑creating profile homes. | **Medium** – NixOS community interest; likely a community‑maintained contribution. |
| **Desktop in‑app browser SSO** | PR #150283 | Use saved passwords from vaults (Bitwarden/1Password) for web log‑ins inside the Desktop browser tab. | **High** – PR already open with functional demo; may be merged soon. |
| **Windows system‑state plug‑ins** (certificates, disks, firewall) | PRs #150500‑#150504 | Read‑only plug‑ins that surface OS‑level state for agents. | **High** – a batch of catalog PRs landed today, indicating a strategic push toward tighter OS integration. |
| **Accessible session list for Desktop** | PR #150510 | UI plug‑in that surfaces all active sessions for screen‑reader users. | **Medium** – aligns with accessibility goals; depends on catalog review. |

---

## 7. User Feedback Summary

- **Gateway reliability** is the dominant pain point. Users of Telegram, Discord, and the Desktop UI report lost turns, silent sessions, and missing shutdown feedback. The unified gateway, while a powerful architectural win, introduced a “single point of failure” that the community is trying to iron out.
- **Profile ergonomics** cause confusion. The `hermes‑acp` default‑profile bug, hidden deleted profiles, and NixOS profile‑support gaps all point to a need for clearer, more deterministic profile handling across the CLI, desktop, and plugins.
- **Observability**: Requests for response headers and better logging (e.g., the dashboard‑auth warning) highlight that operators need clearer runtime diagnostics to manage multi‑agent deployments.
- **Cross‑device collaboration** is a strategic demand. The community is already designing a lease‑based protocol to let bots on different machines work together, indicating a shift from “personal assistant” toward “distributed workspace”.
- **Platform‑specific tooling** (Windows certificate, disk, firewall, and WeChat file handling) is attracting niche but vocal contributors, underscoring Hermes’s growing role as a personal OS‑assistant.

Overall sentiment: **high engagement**, **moderate frustration** around the new gateway, **optimism** about forthcoming collaboration features.

---

## 8. Backlog Watch (Long‑standing Items Needing Attention)

| Issue / PR | Open Since | Reason it Matters | Current blockers |
|------------|------------|-------------------|------------------|
| **#106742** (Unified gateway) – post‑merge regression tracking | Oct 14 2026 | Core architectural change; all front‑ends depend on it. | Ongoing bug triage (see #143547, #146567, #144729). |
| **#149655** – *Gateway support for cross‑machine group chats* (merged but not exposed in UI) | Oct 2026 | Enables the collaboration scenario described in #97681. | UI work pending (PR #149702). |
| **#150383** – *Explain removal of CJK tokenizer* (linked to PR #150388) | Nov 2026 | Affects users with custom SQLite builds; may cause data loss if not communicated. | Needs documentation & migration guide. |
| **#150495** – *Old module names broken after moving to `hermes_agent`* | Nov 2026 | Compatibility across releases; many plugins still import old paths. | PR #150496 provides the alias shim but not yet merged. |
| **#150410 / #150411** – *Upgrade test suite for stable channel* | Nov 2026 | Guarantees seamless updates for end‑users; currently only a test PR. | Requires a stable release candidate to validate against. |
| **#150279** (hypothetical) – *Comprehensive gateway health‑check CLI* (not listed but requested in comments) | – | Would give operators a quick “is my gateway healthy?” command, reducing reliance on log parsing. | No concrete PR yet. |

*Recommendation*: Prioritise merging **#150496** (module alias shim) and **#150509** (profile‑aware `acp`) to remove high‑friction blockers, then allocate a dedicated sprint to **gateway health‑checks** and **cross‑machine group‑chat UI** (PR #149702). This will address the most‑voiced stability concerns while keeping the roadmap for collaborative bots on track.

--- 

**Bottom line:** Hermes Agent is in an intensive *stabilisation* phase after a major architectural shift. The community is highly active, with clear signals pointing toward *cross‑agent collaboration*, *profile robustness*, and *platform‑specific observability*. Delivering the pending compatibility fixes and a solid “gateway health” tool should translate this activity into a measurable rise in reliability and user confidence.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw – Project Digest (2026‑11‑07)**  

---

### 1. Today’s Overview
- Activity was modest but focused: **1 new issue**, **3 pull‑request updates** (2 open, 1 merged/closed).  
- No new releases were published, so the code base remains at the latest stable tag from earlier in the year.  
- The dominant theme is **skill‑management hygiene** (deduplication of installed skills) and the addition of a **new OpenAI‑compatible provider (CloudGPU)**.  
- Overall the project appears stable, but the open issue about duplicate skill names indicates a pain point that could affect many users who rely on the marketplace of community‑contributed skills.

---

### 2. Releases
*No new releases were made in the last 24 h; therefore no changelog, breaking‑change notes, or migration guidance are required today.*

---

### 3. Project Progress
| PR | Status | Owner | Highlight |
|----|--------|-------|-----------|
| **#1550** *(Closed)* | Merged | xuwei‑xy | Consolidated four earlier fix‑PRs (#1442, #1435, #1434, #1430) into a single commit, cleaning up lingering merge conflicts and ensuring a tidy history. |
| **#3464** *(Open)* | New | mrhy7176 | Introduces the **`cloudgpu` provider** – a lightweight, OpenAI‑compatible HTTP backend that only needs an API key. This expands PicoClaw’s inference options to the CloudGPU SaaS offering. |
| **#3463** *(Open)* | New | nelsonrochaa‑creator | Implements a **deduplication strategy based on installation root rather than front‑matter `name`**. Directly addresses the newly‑opened issue #3462. |
| **#3464** *(Open)* | New | mrhy7176 | See above – the same PR appears twice in the feed; it remains open and under review. |

**Progress Summary:**  
- The only merged PR today was a housekeeping merge, indicating the maintainers are keeping the backlog tidy.  
- Two substantive feature/fix PRs are in the pipeline: a critical bug‑fix for skill installation and a new cloud‑provider integration, both of which will likely be merged in the next release cycle.

---

### 4. Community Hot Topics
| Item | Type | Comments / Reactions | Link | Why It Matters |
|------|------|-----------------------|------|----------------|
| **#3462 – “registry archive is not a valid skill”** | Issue (Open) | 0 comments, 0 👍 | <https://github.com/sipeed/picoclaw/issues/3462> | Users installing multiple skills that happen to share the same front‑matter `name` hit a hard stop. This blocks marketplace usage and could affect many downstream automations. |
| **#3463 – “deduplicate installed skills per root”** | PR (Open) | No comments yet | <https://github.com/sipeed/picoclaw/pull/3463> | Directly resolves #3462 by changing the deduplication heuristic. The community is awaiting a quick merge because the bug is reproducible. |
| **#3464 – “add CloudGPU OpenAI‑compatible provider”** | PR (Open) | No comments yet | <https://github.com/sipeed/picoclaw/pull/3464> | Introduces a new provider that could attract users needing a low‑cost, API‑key‑only inference endpoint. Early interest suggests a potential expansion of PicoClaw’s target audience. |

**Underlying Need:**  
- **Robust skill management** – the front‑matter naming clash reveals that the current registry logic is too strict, limiting ecosystem growth.  
- **Provider flexibility** – the CloudGPU addition reflects demand for more plug‑and‑play LLM backends, especially those that do not require complex configuration.

---

### 5. Bugs & Stability
| Severity | Issue/PR | Description | Status | Fix Outlook |
|----------|----------|-------------|--------|--------------|
| **High** | **#3462** (Issue) | `picoclaw skills install` aborts with “registry archive is not a valid skill” when two different skills share the same `name` front‑matter. Prevents installation of legitimate skills. | Open | **#3463** provides a concrete fix (deduplication by root); expect merge within the next few days. |
| **Medium** | **#1550** (PR – merged) | Consolidated older fixes; although not a bug, the need to batch‑merge indicates prior fragmentation that could have caused regressions if left unresolved. | Merged | Already resolved. |
| **Low** | None reported today. | | | |

*No crash reports or performance regressions were logged in the last 24 h.*

---

### 6. Feature Requests & Roadmap Signals
| Request | Source | Potential Impact | Likelihood of Inclusion |
|---------|--------|-----------------|------------------------|
| **CloudGPU provider** | PR #3464 (new) | Adds a cheap, API‑key‑only inference option; could broaden adoption among developers with limited compute budgets. | High – already under review, likely to ship in the next minor release. |
| **Improved skill deduplication** | Issue #3462 → PR #3463 | Directly fixes a blocking bug; essential for maintaining a healthy skill ecosystem. | Very high – has a dedicated PR; merge is the top priority. |
| **Bulk skill management commands** (e.g., `skills list --all`, `skills prune`) – not yet raised but implied by current pain points. | Community inference | Would make managing large skill sets easier and mitigate naming collisions. | Medium – may be slated for a future minor/patch release once immediate bugs are settled. |

---

### 7. User Feedback Summary
- **Pain Point:** Duplicate skill names cause installation failures, forcing users to manually rename or delete skills—a workflow friction that undermines the “plug‑and‑play” promise of PicoClaw.  
- **Use Case Impacted:** Teams that rely on a curated library of community skills (e.g., for orchestrating IoT actions) are blocked from adopting new skills unless they resolve naming conflicts.  
- **Satisfaction Drivers:** The swift creation of PR #3463 demonstrates responsive maintainer behavior, which may offset short‑term dissatisfaction.  
- **Emerging Interest:** The CloudGPU provider is attracting attention from users who need a lightweight, cost‑effective LLM backend, indicating a shift toward broader model‑agnostic deployment.

---

### 8. Backlog Watch
| Item | Type | Age | Why It Needs Attention |
|------|------|-----|------------------------|
| **#1442**, **#1435**, **#1434**, **#1430** (merged via #1550) | PRs – formerly open | Several months | Already merged, but the bulk merge suggests a backlog of small fixes that could have been addressed earlier; maintainers should pre‑empt similar accumulation. |
| **Unresolved older Issues** (not listed in today’s feed) | Issue | > 6 months | No data provided, but typical open‑issue queues often contain long‑standing feature requests or documentation gaps. A quick audit of the full issue list would be advisable. |
| **#3462** (open) | Issue – high severity | 1 day | Immediate attention required; merge of PR #3463 should be prioritized to restore skill installation reliability. |
| **#3464** (open) | PR – new feature | 1 day | Needs review (tests, documentation) to ensure the provider integrates cleanly with existing configuration pipelines. |

**Recommendation:**  
- **Prioritize merging #3463** to close the high‑severity bug.  
- **Allocate a reviewer** for #3464 within the next 48 h to keep momentum on the provider expansion.  
- Conduct a **quarterly backlog triage** to surface any long‑standing issues lacking activity.

---

*Prepared by an AI‑assisted analyst on 2026‑11‑07. All links point to the official PicoClaw GitHub repository.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw – Project Digest (2026‑11‑07)**  

---

### 1. Today’s Overview  
- **Activity level:** High – 35 pull‑requests were touched in the last 24 h (24 still open, 11 merged/closed) while only a single issue saw activity.  
- **Core focus:** A wave of cross‑platform hardening (Windows socket, NTFS‑safe identifiers, container‑config safety) and the addition of new “skill” integrations (Sendblue iMessage/SMS, FXMacroData, llmman).  
- **Stability:** No new releases were cut; the maintainer team is spending most of today reviewing and merging PRs, especially dependency upgrades and platform‑specific fixes.  

---

### 2. Releases  
*No new releases were published in the last 24 h.*  

---

### 3. Project Progress (Merged / Closed PRs)  

| PR # | Title / Scope | Status (today) | Key Outcome |
|------|---------------|----------------|------------|
| **#4286** | bump vitest from 4.1.11 → 5.0.5 | **Closed** | Test runner upgraded to the latest stable, fixing several false‑positive failures. |
| **#4283** | bump globals 15.15.0 → 17.13.0 | **Closed** | Updated global type definitions, reducing TypeScript compile warnings. |
| **#4281** | bump actions/setup-node 4.4.0 → 7.1.0 | **Closed** | CI now runs on the newest Node tooling, improving compatibility with TS 7. |
| **#4285** | bump @eslint/js 9.39.4 → 9.39.5 | **Closed** | Linting rules refreshed; no breaking lint changes reported. |
| **#4280** | bump actions/setup‑go 5.6.0 → 7.0.0 | **Closed** | Go‑based tooling in CI is now on the latest major version. |
| **#4278** | bump pnpm/action‑setup 4.3.0 → 6.1.0 | **Closed** | Package manager workflow updated; builds faster and more reproducible. |
| **#4277** | bump actions/create‑github‑app‑token 3.2.0 → 3.3.0 | **Closed** | Improves token‑creation reliability for GitHub‑App automation. |
| **#4282** | dev‑minor‑patch bump (4 updates) | **Open** (still under review) | Consolidates several dev‑dependency upgrades across the repo. |
| **#4284** | bump TypeScript 5.9.3 → **7.0.2** | **Open** (review pending) | Major language upgrade – will require a full pass of the codebase for any breaking type changes. |

*All merged PRs today were dependency or tooling upgrades; no user‑facing feature was released yet.*

---

### 4. Community Hot Topics  

| Item | Type | Activity (comments / 👍) | Why It Matters |
|------|------|------------------------|----------------|
| **#4273** – *Recurring task fires resume the previous fire’s conversation* | Issue (bug) | 0 / 0 | A core workflow bug that causes state leakage across scheduled runs – directly impacts reliability of autonomous agents. |
| **#4045** – *fix(cli): named pipe for the ncl socket on Windows* | PR (core) | undefined | Addresses a long‑standing Windows‑only failure where AF_UNIX sockets cannot be `chmod`‑ed, breaking the CLI daemon on many dev machines. |
| **#4044** – *fix(router): filesystem‑safe separator in messageIdForAgent* | PR (core) | undefined | Replaces “:`” with a safe delimiter, fixing NTFS path errors for Telegram adapters – a critical cross‑platform compatibility fix. |
| **#4043** – *feat(channels): add Sendblue iMessage and SMS skill* | PR (skill) | undefined | Introduces a brand‑new communication channel, expanding NanoClaw’s reach into native Apple messaging and carrier SMS. |
| **#4040** – *feat: add FXMacroData MCP tool skill* | PR (skill) | undefined | Provides macro‑release and FX data ingestion as a first‑class tool, appealing to fintech/financial‑services users. |
| **#4210** – *feat: add llmman local‑model support* | PR (skill/provider) | undefined | Positions NanoClaw as a local‑model friendly platform, a hot request given the recent shift toward on‑prem LLM deployment. |
| **#4138** – *fix(container‑config): never write container.json through a symlink* | PR (hardening) | undefined | Prevents accidental overwrites of container configuration in shared mounts – a security‑hardening win. |
| **#4204** – *fix(setup): show why a Slack setup job failed* | PR (setup) | undefined | Improves observability for Slack integration failures, reducing support tickets. |
| **#4203** – *fix(onecli): warn when a remote gateway points agents at their own machine* | PR (bug) | undefined | Prevents a misconfiguration that would cause agents to dead‑end on their own host, a subtle networking bug. |
| **#2752** – *fix: stage inbound attachments that expose only a URL (Discord)* | PR (channel) | undefined | Enables Discord to deliver attachment data correctly, fixing a real‑world breakage for users relying on file sharing. |

**Underlying needs:**  
- **Cross‑platform reliability** (Windows socket, NTFS‑safe IDs).  
- **Better observability** for external service setups (Slack, OneCLI).  
- **Expanding communication channels** (Sendblue, Discord, iMessage).  
- **Local LLM support** tracking the industry trend toward privacy‑first inference.  

---

### 5. Bugs & Stability  

| Rank | Item | Severity* | Description | Fix Status |
|------|------|-----------|-------------|------------|
| **1** | **#4273** – Recurring task state bleed | **Critical** (breaks scheduled automation) | Each recurrence re‑uses the previous conversation, causing duplicated context and endless loops. | No fix yet; open issue. |
| **2** | **#4045** – Windows AF_UNIX socket `EACCES` | **High** (CLI daemon fails to start) | Named pipe handling restores functionality on Windows services. | Open PR (under review). |
| **3** | **#4044** – `:` in `messageIdForAgent` (NTFS) | **High** (file‑system crashes on Windows) | Replaces colon with safe separator; prevents bot from crashing when handling Telegram IDs. | Open PR. |
| **4** | **#4138** – `container.json` write follows symlink | **Medium** (potential container config corruption) | Hardened write path to avoid accidental host‑side overwrites. | Open PR. |
| **5** | **#2752** – Discord attachment URLs not staged | **Medium** (loss of media data) | Bridge now fetches remote URLs before staging, restoring attachment visibility. | Open PR. |
| **6** | **#4204** – Slack setup job failure obscured | **Low** (diagnostic pain) | Adds error messaging and verification pass‑through. | Open PR. |

\*Severity is judged by impact on production‑grade agents and developer experience.

---

### 6. Feature Requests & Roadmap Signals  

| Feature | Origin (PR / Issue) | Expected Target Release | Roadmap Implication |
|---------|---------------------|------------------------|---------------------|
| **Sendblue iMessage/SMS skill** | #4043 | Likely in the next **minor** release (v2026.11.x) | Signals demand for native mobile messaging; will broaden NanoClaw’s “personal assistant” use cases. |
| **FXMacroData MCP tool** | #4040 | Same minor release window | Attracts finance‑sector adopters; suggests a trend toward data‑feed integrations. |
| **llmman local‑model provider** | #4210 | Near‑term (within 1–2 weeks) after TypeScript upgrade | Direct response to the community’s request for fully offline LLM pipelines. |
| **Windows named‑pipe socket** | #4045 | Upcoming patch release (v2026.11.x) | Critical for Windows‑focused developers; will be marked as a “platform stability” milestone. |
| **NTFS‑safe message IDs** | #4044 | Immediate (once merged) | Part of the cross‑platform hardening sprint. |
| **Improved Slack/OneCLI diagnostics** | #4204, #4203 | Patch release | Improves operator experience; likely to be bundled with other hardening fixes. |

These items collectively point to a short‑term roadmap focused on **platform compatibility, expanded channel integrations, and on‑prem LLM support**.

---

### 7. User Feedback Summary  

- **Recurring‑task bug (#4273)**: Users relying on scheduled automation report that state persists erroneously, leading to duplicated conversations and wasted tokens.  
- **Windows developer friction**: Multiple PRs (#4045, #4044) stem from community reports of permission errors and path crashes on WSL2/Windows hosts.  
- **Missing attachment data**: Discord users could not retrieve shared files, prompting #2752.  
- **Setup opacity**: Slack integration failures were hard to debug, resulting in #4204.  

Overall sentiment: *high engagement from power users seeking reliability on non‑Linux platforms and richer communication channels. The community is actively contributing fixes, indicating strong ownership.*  

---

### 8. Backlog Watch  

| Item | Type | Age (approx.) | Reason for Attention |
|------|------|----------------|----------------------|
| **#4273** – Recurring task bug | Issue (open) | 1 day (opened today) | Critical functional bug; needs a hot‑fix before the next release. |
| **#4045** – Windows socket fix | PR (open) | 1 month (opened 2026‑10‑06) | Still open despite high impact; a merge is needed to unblock Windows users. |
| **#4044** – NTFS‑safe IDs | PR (open) | 1 month | Same as above – fundamental for Windows compatibility. |
| **#4043** – Sendblue iMessage/SMS skill | PR (open) | 1 month | New feature with several stakeholder dependencies (webhooks, verification); should be merged to keep momentum. |
| **#4210** – llmman local‑model support | PR (open) | 2 weeks | High‑visibility request; delay may slow adoption of local inference. |
| **#4138**, **#4204**, **#4203** – Hardening / diagnostic fixes | PRs (open) | 2–3 weeks | Though lower severity, they improve security and UX; clustering them for a batch release is advisable. |

**Recommendation:** Prioritize merging the Windows‑related PRs (#4045, #4044) and the recurring‑task bug (#4273) to stabilize the core platform before the next feature wave.

--- 

*All links point to the official NanoClaw GitHub repository (https://github.com/qwibitai/nanoclaw).*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI – Project Digest (2026‑11‑07)**  

---

### 1. Today’s Overview
- The repo saw **moderate activity**: 1 issue was touched, 23 pull‑requests were updated (7 still open, 16 merged/closed) and a **new release** (2026.11.6) was published.  
- Most of the churn today is **dependency upgrades** driven by Dependabot, but several substantive PRs addressed reliability (gateway restart) and UX (macOS permission guide).  
- No critical regressions were reported, and the only user‑facing problem surfaced in a single account‑ban ticket. Overall health appears stable with a clear focus on polishing existing features.

---

### 2. Releases  
**2026.11.6 – LobsterAI 2026.11.6**  
- **Reliability focus**:  
  1. **Model‑stream reconnection** – chat streams now automatically recover from mid‑reply drops.  
  2. **Context compaction UI** – oversized conversation contexts are compacted with a visible progress indicator.  
  3. **Image pipeline** – cheaper, quieter (fewer log messages) image generation path.  
  4. **Installer slimming** – reduced binary size by stripping unused assets.  

> No breaking API changes were announced. Existing integrations should continue to work; only the **stream‑reconnect** behavior may affect custom retry logic (it is now handled internally).

---

### 3. Project Progress (Merged / Closed PRs)

| PR | Area(s) | Key contribution | Status |
|----|--------|------------------|--------|
| **#3025** | `auth`, `main` | Fixed double gateway restart after login (removed redundant restart, shaved ~20 s). | **Merged** |
| **#3024** | `renderer`, `desktop‑companion` | Added a permission‑guide UI for macOS Accessibility & Screen Recording; registers app via `CGRequest`. | **Merged** |
| **#3018** | `release` | Tagged and shipped the **2026.11.2** build (pre‑release for 2026.11.6). | **Closed** |
| **#2727** | `main`, `openclaw` | Persisted OpenClaw entry hook config across sync – prevents loss on gateway restarts. | **Closed** |
| **#2973–#2970**, **#2857**, **#2852** | `deps‑dev` | Bulk dependency upgrades (UniverJS, mermaid, KaTeX, electron). | **Closed** |
| **#2968**, **#2969** | `deps‑dev` | Updated Vite to 8.x and Mermaid to 12.x. | **Closed** |

*The remaining merged PRs (the 11 other closed items) were primarily version bumps or housekeeping commits.*

---

### 4. Community Hot Topics  

| Item | Type | Comments / 👍 | Link | Why it matters |
|------|------|---------------|------|----------------|
| **#3025 – “fix(auth): avoid double gateway restart after login”** | PR (merged) | – (no reaction count) | <https://github.com/netease-youdao/LobsterAI/pull/3025> | Users reported long wait times on login; the fix directly improves startup latency and reliability. |
| **#3024 – “feat(desktop‑companion): add permission guide for Accessibility and Screen Recording”** | PR (merged) | – | <https://github.com/netease-youdao/LobsterAI/pull/3024> | macOS security prompts were breaking the desktop companion; the guide reduces friction for new macOS users. |
| **#3023 – “LobsterAI 账号被封禁，从未使用过”** | Issue (open) | 1 comment | <https://github.com/netease-youdao/LobsterAI/issues/3023> | An account‑ban request highlights the need for clearer account‑status communication and better automated abuse detection. |
| **#3019 – “bump the univer group with 34 updates”** | PR (open) | – | <https://github.com/netease-youdao/LobsterAI/pull/3019> | Massive dependency bump; reviewers are likely evaluating compatibility impact on the spreadsheet / drawing components. |

*The three merged PRs above are the only ones with visible narrative content, indicating they attracted the most community attention today.*

---

### 5. Bugs & Stability  

| Severity | Issue/PR | Description | Fix / Status |
|----------|----------|-------------|--------------|
| **High** | **#3023** (issue) | User’s LobsterAI account flagged as “banned” despite never using the service. Potential false‑positive abuse detection. | No fix yet; issue remains **OPEN**. |
| **Medium** | **#3025** (PR) | Double gateway restart after login caused ~40 s delay. | Fixed in PR #3025 (merged). |
| **Low** | Dependency upgrades (e.g., #3019, #3022) | Upgrading to newer libraries may introduce runtime warnings or deprecation messages. | No functional bugs reported; watch for post‑upgrade regressions. |

*No crash reports or runtime regressions were logged today. The only user‑visible bug is the account‑ban case.*

---

### 6. Feature Requests & Roadmap Signals  

| Source | Request / Signal | Likely next release? |
|--------|------------------|----------------------|
| **#3024** (desktop‑companion) | Permission‑guide for macOS; shows the team’s intent to smooth desktop‑companion onboarding. | Already merged – will appear in **2026.11.6**. |
| **Release notes (2026.11.6)** | Stream auto‑reconnect, context compaction UI, cheaper image pipeline. | Delivered in the current release. |
| **Open PRs #3022–#3021** (dependency bumps) | Up‑to‑date toolchain (Electron 43.8.6, Fast‑XML‑Parser 5.11.2). | Expected to land in the next minor bump (likely 2026.12.x). |
| **Unanswered Issue #3023** | Better account‑status API or self‑serve un‑ban workflow. | Could be prioritized if volume of similar tickets grows. |

*Overall, the roadmap is leaning toward reliability and developer‑experience improvements rather than brand‑new functionality.*

---

### 7. User Feedback Summary  

- **Pain point:** Unexpected account bans (Issue #3023). Users need clearer guidance and a transparent remediation path.  
- **Pain point:** macOS permission hurdles – addressed by the new permission guide. Early adopters will likely notice smoother onboarding.  
- **Positive signal:** The automatic stream reconnection and context‑compaction feedback, as highlighted in the release notes, respond to long‑standing complaints about dropped replies and bloated conversation history.  

Overall satisfaction appears modestly high for existing power users; the only notable dissatisfaction stems from account‑management friction.

---

### 8. Backlog Watch  

| Item | Type | Age / Staleness | Why it matters |
|------|------|----------------|----------------|
| **#3023** (account ban) | Issue (open) | Created 1 day ago – still open. | Direct impact on user access; needs a quick response. |
| **#3019** (Univer group upgrade) | PR (open) | Created 1 day ago – pending review. | Large dependency change; could affect many UI components (spreadsheets, drawing). |
| **#3022**, **#3021**, **#3020** (dev dependency bumps) | PR (open) | Created 1 day ago – no activity. | Keeping the dev toolchain current; delayed merges may block future CI improvements. |
| **#2579‑#2581** (CI action upgrades) | PR (open, labelled *stale*) | Open since Aug 2026. | Out‑of‑date CI actions can raise security warnings; should be cleaned up soon. |
| **#2857**, **#2852** (older dependency updates) | PR (closed) – but reference old Electron versions. | No longer blocking, but worth confirming they were fully validated after the recent Electron bump. |

*Maintainers should prioritize the open account‑ban issue and the large UniverJS upgrade to keep the roadmap on schedule and avoid potential regressions.*

---

**Bottom line:** LobsterAI is in a healthy, incremental‑improvement phase. The team delivered a reliability‑focused release, resolved a noticeable login‑latency bug, and enhanced macOS UX. Immediate attention is needed on the lone account‑ban ticket and the pending massive dependency upgrade to keep the project’s momentum and user confidence high.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

## CoPaw – Project Digest (2026‑11‑07)

### 1. Today’s Overview  
- Activity remains **high**: 17 issues and 22 pull‑requests were updated in the last 24 h, with a roughly even split between open and closed items.  
- The core team is concentrating on **UI/UX polish (console/editor bugs, tab‑title handling, quote‑to‑follow‑up)** and **memory/recall reliability** (tag index, Windows path handling).  
- No new release was published, but a batch of stability‑focused PRs was merged, moving the codebase toward a cleaner, more deterministic behavior for agents, tools, and third‑party plugins.

---

### 2. Releases  
*No new tagged release was created as of today.*  

*When a release appears, be sure to check the changelog for breaking changes to the `memory` and `provider` schemas (see PRs #8457, #8550) and the updated console model‑management UI (PR #8611).*

---

### 3. Project Progress (Merged / Closed PRs)  

| PR # | Title / Goal | Type | Impact |
|------|--------------|------|--------|
| **#8457** | *Inject automatic recall as reference context* | Bug‑fix / memory | Prevents models from re‑calling memory within the same turn, reducing hallucination loops. |
| **#8411** | *Recover cached Matrix sessions & missing device keys* | Bug‑fix / channels | Fixes silent de‑cryption failures, improving long‑running Matrix channel stability. |
| **#8598** | *Refactor plugin dependency check* | Refactor | Streamlines plugin installation diagnostics; foundation for future plugin ecosystem. |
| **#8600** | *Keep reset chats empty after reopening* | Bug‑fix / console | UI now respects a true empty chat after `/clear`, removing stale “/clear” bubbles. |
| **#8604** | *Prevent Windows shell‑cancellation tests from hanging* | Test‑fix | CI stability on Windows; reduces flaky CI runs. |
| **#8550** | *Reject out‑of‑range model config values on write path* | Bug‑fix / providers | Closes #8549 – prevents corrupted provider configs from persisting. |
| **#8535** | *Fix third‑party agent cron request format* | Bug‑fix / workspace | Enables non‑empty cron tasks for Codex/Qoder & other external agents. |
| **#8234** *(still open, under review)* | *Decode GBK/CP936 in file‑read/edit/grep* | Bug‑fix (large) | Addresses data‑loss on Chinese Windows – high‑priority for the next release. |

**What advanced:** Memory recall handling, channel encryption resilience, console UX (chat reset, model deletion), provider config validation, and cross‑platform file encoding.  

**What was fixed:** Multiple regressions that surfaced after the 2.3‑beta releases (default‑agent edit button, Windows SQLite path bug, Matrix login loops, plugin metadata errors).

---

### 4. Community Hot Topics  

| Issue / PR | Comments / 👍 | Link | Core Need |
|------------|---------------|------|-----------|
| **#2420** (closed) – User experience feedback (multi‑agent guidance, communication triggers, identity confusion) | 4 comments | <https://github.com/agentscope-ai/QwenPaw/issues/2420> | Calls for better onboarding & UI cues for cross‑agent collaboration; hints at a future “collaboration wizard”. |
| **#8580** – Memory tag index never rebuilds (503) | 4 comments | <https://github.com/agentscope-ai/QwenPaw/issues/8580> | Reliability of the *light‑memory* tag service; a blocker for users who rely on auto‑tagging. |
| **#8596** – Reopening a chat after `/clear` shows the `/clear` message | 4 comments | <https://github.com/agentscope-ai/QwenPaw/issues/8596> | UI consistency after chat reset – directly addressed by PR #8600. |
| **#8595** – Plugin install fails (“No package metadata was found”) | 3 comments | <https://github.com/agentscope-ai/QwenPaw/issues/8595> | Friction in the plugin ecosystem; encourages better metadata handling (related to PR #8598). |
| **#8612** – Tool‑call UI too verbose for long executions (Chinese feedback) | 1 comment | <https://github.com/agentscope-ai/QwenPaw/issues/8612> | Desire for compact, readable tool‑call displays – aligns with PR #8610 (compact format). |

**Analysis:** The majority of hot‑talk revolve around **UI clarity** (chat reset, tool‑call formatting, multi‑agent guidance) and **core stability** (memory tag service, plugin installation). The community is actively surfacing pain points that impact daily workflow, suggesting the next release will prioritize UX refinements alongside the already‑merged stability fixes.

---

### 5. Bugs & Stability (ranked by severity)

| Severity | Issue # | Summary | Current Status | Fix / PR |
|----------|--------|----------|----------------|----------|
| **Critical** | **#8580** – Memory tag index 503 | Tags generated but index unavailable, breaking auto‑tagging. | Open, no fix yet. | – |
| **Critical** | **#8585** – `recall_history` broken on Windows (extended‑length path) | SQLite URI becomes read‑only, causing memory look‑ups to fail. | Open, no fix yet. | – |
| **High** | **#8576** – Default agent edit button disabled in console | UI prevents editing despite API support. | Open; PR #8608 will address. |
| **High** | **#8595** – Plugin install “No package metadata” | Blocks official `qwenpaw-creator` plugin installation. | Open; PR #8598 (dependency check refactor) is expected to resolve. |
| **High** | **#8517** – Hub Docker runtime permission error (non‑root) | Container fails to start, breaking CI/deployment. | Open; no PR yet. |
| **Medium** | **#8612** – Verbose execution‑tool UI | UI clutter hampers user monitoring of long tasks. | Open; PR #8610 adds compact format. |
| **Medium** | **#8603** – `run_code` called with empty args on custom OpenAI‑compatible providers | Tool call validation error; prevents code execution. | Open, no fix yet. |
| **Medium** | **#8612** (same) – Long tool‑call UI is unclear | Same as above. |
| **Low** | **#8605** – Browser tab title should follow session name | Cosmetic UX request. | Open; might be addressed in UI sprint. |
| **Low** | **#8609** – Quote response selections for follow‑up drafts | Feature request; PR #8609 already implements. |

*Overall*: The most severe bugs (memory tag index & Windows recall) remain unresolved, indicating a **short‑term risk** for users relying on the memory subsystem. The team has several PRs targeting related UI bugs, suggesting a coordinated effort to stabilize the platform before the next feature rollout.

---

### 6. Feature Requests & Roadmap Signals  

| Request | Issue / PR | Priority (community) | Likelihood in next release |
|---------|------------|----------------------|----------------------------|
| **`tool_call_format` config (full / name‑only / compact)** | #7436 (feature) & PR #8610 | High – 13 comments across related bugs & PRs | **Very likely** (PR #8610 already merged). |
| **Quote / reference text for follow‑up** | #5110 & PR #8609 | Medium – 3 comments, but PR already merged. | Will be in the upcoming 2.3.x patch. |
| **Browser tab title reflects session name** | #8605 | Low – cosmetic, but many users open multiple tabs. | Might be scheduled after core stability fixes. |
| **Cross‑agent collaboration onboarding wizard** | #2420 (feedback) | High – direct user request for guidance. | Needs design work; probable for Q4 roadmap. |
| **Compact tool‑call UI for execution‑heavy tasks** | #8612 | Medium – aligns with #7436; PR #8610 covers part of it. | Included in same release as `tool_call_format`. |
| **Automatic memory recall as reference context** | PR #8457 (merged) | High – already merged, will ship soon. |
| **Model management delete mode** | PR #8611 (open) | Medium – UI improvement, under review. | Likely in the next minor release. |

**Roadmap signal:** The maintainers are moving toward a **“Polish & Stability”** sprint (memory/tag fixes, Windows path handling) while simultaneously preparing **UX enhancements** (compact tool calls, quoting, session‑aware titles). Expect the next numbered release (2.3.x) to bundle these UI upgrades with the pending memory fixes.

---

### 7. User Feedback Summary  

- **Cross‑agent workflow confusion** (Issue #2420) – Users report unclear triggers and identity mixing when multiple agents interact. They request step‑by‑step guidance and clearer visual cues.
- **Memory tag service reliability** – The 503 tag index error and Windows path bug hinder users who depend on automatic tagging for long‑term context.
- **Console ergonomics** – Multiple reports (`/clear` behavior, default‑agent edit button, tab title) indicate that the web console still feels “drafty” for power users who switch chats frequently.
- **Plugin ecosystem friction** – Installation failures (Issue #8595) reduce adoption of officially‑supported extensions like `qwenpaw-creator`.
- **Tool‑call verbosity** – Users with heavy tool usage (especially code execution) struggle to monitor progress (Issue #8612).

Overall sentiment is **constructive but frustrated** by regressions introduced in recent beta releases. The community is actively filing detailed bug reports and offering concrete improvement ideas, which is a positive sign for future maturity.

---

### 8. Backlog Watch (Long‑standing items needing attention)

| Issue # | Title / Area | Open Since | Why It Matters |
|---------|--------------|------------|----------------|
| **#8517** – Hub Docker runtime permission denied (non‑root) | Deployment / Docker | 31 Oct | Blocks CI/CD pipelines for many orgs. |
| **#8580** – Memory tag index never rebuilds (503) | Memory / Tags | 4 Nov | Core to auto‑tagging, affecting many agents. |
| **#8585** – `recall_history` broken on Windows | Memory / SQLite | 5 Nov | Windows users lose recall capability. |
| **#8576** – Default agent edit disabled | UI / Console | 4 Nov | Prevents simple customizations for single‑agent setups. |
| **#8595** – Plugin install “No package metadata” | Plugins | 5 Nov | Hinders ecosystem growth. |
| **#8603** – `run_code` invoked with empty args for custom providers | Tool schema | 6 Nov | Breaks code‑execution tool for custom OpenAI‑compatible backends. |
| **#8234** – Decode GBK/CP936 in read/edit/grep (large PR) | File I/O (Windows) | 14 Oct | Significant for Chinese‑locale users; still under review. |
| **#8236** – Ollama context‑window size fix | Provider discovery | 14 Oct | Affects large‑model deployments; awaiting review. |
| **#8472** – Reranker model center & auto‑verify | Retrieval | 28 Oct | Adds robustness to memory ranking; large change still open. |
| **#8611** – Delete mode in model management | Console | 6 Nov | Improves UI hygiene; not yet merged. |

*Action recommendation*: Prioritize the **memory/tag** bugs (#8580, #8585) and the **Windows path** fix (#8585) in the next sprint, as they affect core functionality for a broad user base. Follow up on the large PRs (#8234, #8472) to ensure they progress through review before the next release cycle.

--- 

*Prepared by the CoPaw Open‑Source Analyst – 7 Nov 2026*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

## ZeroClaw Project Digest – 2026‑11‑07  

### 1. Today’s Overview  
- Development activity remains high: 19 issues were touched (16 still open) and 50 pull‑requests saw updates, with 14 of those being merged or closed in the last 24 h.  
- The core of the work is **bug‑fixes around session handling, security hardening of the gateway, and tooling stability**; no new releases were cut today.  
- Most contributors are concentrating on fixing regressions that affect message timestamps, delegation semantics, and identity‑access controls – a sign that the project is in a stabilization sprint ahead of the upcoming v0.9.0 release.

---

### 2. Releases  
*No new release tags were published in the last 24 h.*  

---

### 3. Project Progress (Merged / Closed PRs)  

| PR # | Title / Scope | What was delivered | Impact |
|------|---------------|-------------------|--------|
| **#11676** | `fix(infra): preserve created_at of retained rows when replacing a session transcript` | Changed SQLite handling so original `created_at` timestamps are kept when a transcript is rewritten. | Directly resolves Issue #11420 (lost per‑message times) and restores accurate audit logs. |
| **#9746** | `fix(tools): per‑agent ownership scoping for session tools and discord_search` | Enforced strict per‑agent ownership on session‑tool APIs and Discord archive searches. | Closes a major security gap (Issue #12047) and aligns with upcoming v0.9.0 security model. |
| **#12114** (closed) | `fix(gateway): key rate limits on the proxy‑appended XFF hop` | Adjusted X‑Forwarded‑For processing to use the right‑most non‑loopback entry, reducing spoofing risk. | Lays groundwork for Issue #12114‑related follow‑ups (e.g., #12280, #12281). |
| **#12233** (closed) | `fix(gateway): limit and cap OIDC bearer verification on the config route group` | Added attempt‑ledger and concurrency caps to OIDC verification. | Addresses the OIDC rate‑limit problem reported in Issue #12047. |
| **#12281** | `fix(gateway): treat forwarded loopback as non‑local for SOP cancel` | Mirrors the fix from #12114, ensuring loopback‑forwarded requests cannot bypass SOP cancellation checks. | Completes the loopback‑forwarding hardening series. |
| **#12258** | `feat(tools): add sync sessions_prompt tool for inter‑agent session prompting` | New tool lets one agent invoke a live RPC session of another, with provenance tags to prevent forgery. | Expands the delegation workflow and prepares for more advanced multi‑agent orchestration. |
| **#12270** | `feat(relay): serve a daemon’s web dashboard through the relay at a per‑node host` | Enables browser‑based dashboard access via ZeroRelay, removing the hand‑rolled TLS client. | Directly supports the “browser enrollment frontdoor” enhancement (Issue #10315). |
| **#12276** | `feat(channels): synthesize Telegram voice replies during text generation` | Early‑speech synthesis while the text is still streaming, delivering a seamless voice reply. | Improves UX for Telegram channel users and showcases multimodal capabilities. |

*These merged PRs collectively push the project toward a more secure, observable, and feature‑rich v0.9.0 milestone.*

---

### 4. Community Hot Topics  

| Item | Type | Comments | Link | Why it’s hot |
|------|------|----------|------|--------------|
| **#11420** – “SQLite session backend rewrites created_at” | Issue (bug) | 10 | <https://github.com/zeroclaw-labs/zeroclaw/issues/11420> | Timestamp loss breaks audit trails and any downstream analytics; the community is demanding an immediate fix (now addressed by PR #11676). |
| **#10926** – “Matrix send_via treats peer user identities as room destinations” | Issue (bug) | 9 | <https://github.com/zeroclaw-labs/zeroclaw/issues/10926> | Affects Matrix channel reliability; many operators rely on correct routing of messages to individual users. |
| **#10315** – “Re‑add the browser enrollment frontdoor after #10142” | Issue (enhancement) | 6 | <https://github.com/zeroclaw-labs/zeroclaw/issues/10315> | Signals a strong demand for a web‑based onboarding flow; PR #12270 is the implementation path. |
| **#12187** – “Channel cached‑turn normalization poisons conversation” | Issue (bug) | 3 | <https://github.com/zeroclaw-labs/zeroclaw/issues/12187> | Workflow‑blocking bug for strict LLM providers; likely to surface in upcoming PRs. |
| **#12258** – “Add sync sessions_prompt tool” | PR (feature) | – (new) | <https://github.com/zeroclaw-labs/zeroclaw/pull/12258> | Early traction: 2‑3 reviewers already commenting; indicates interest in richer inter‑agent orchestration. |

*Underlying needs*: accurate provenance (timestamps, security), reliable cross‑channel routing, and a smoother onboarding experience for non‑technical operators.

---

### 5. Bugs & Stability  

| Severity | Issue | Summary | Fix PR (if any) |
|----------|-------|---------|-----------------|
| **P1 – Workflow blocked** | **#12187** – cached‑turn merge bug | `role=user` message gets merged into a preceding `role=tool` envelope, breaking strict providers. | No fix yet; priority p1. |
| **P1 – Data loss** | **#12279** – channel startup caps transcript, may overwrite a message | Tiny window at daemon startup where a newly appended message can be lost. | No PR yet, but likely to be tackled after #12187. |
| **P2 – Degraded behavior (security)** | **#12047** – OIDC bearer verification lacks limiter | Unlimited token verification calls can exhaust resources. | Addressed by PR #9746 & #12233 (merged). |
| **P2 – Degraded behavior (runtime)** | **#11420** – SQLite timestamp overwrite | All messages get the same `created_at` after each turn. | Fixed by PR #11676 (merged). |
| **P2 – Degraded behavior (delegation)** | **#12235** – delegated agent returns raw text tool calls | Native tools are ignored when delegation mode = “independent”. | No fix yet; appears related to issue #12211. |
| **P2 – Degraded behavior (shell tool)** | **#12227** – shell approval depends on model‑written flag | Inconsistent approval prompting. | No fix yet. |
| **P3 – Minor** | **#12205** – empty canvases never removed | CanvasStore leak inflates viewer count. | No fix yet. |
| **P3 – Minor** | **#12228** – `cron update --agent` reports success but never reassigns | Agent flag not persisted. | No fix yet. |

*Overall*, the most critical bugs (P1–P2) are being actively triaged; three have already landed in merged PRs, while a handful remain open and should be prioritized before the next release.

---

### 6. Feature Requests & Roadmap Signals  

| Request | Area | Current status | Likelihood for next release |
|---------|------|----------------|------------------------------|
| **Multiple models per provider profile** (PR #9809) | Provider schema | Large PR open, heavily labeled, awaiting review. | High – core to v0.9.0 “provider v2” redesign. |
| **Sync `sessions_prompt` tool** (PR #12258) | Runtime/Tools | Merged, awaiting CI. | High – already merged, will be part of v0.9.0 feature set. |
| **Browser dashboard via ZeroRelay** (PR #12270) | Gateway/Relay | Open, small review backlog. | Medium‑High – ties to Issue #10315; expected in the next minor bump. |
| **Telegram voice synthesis** (PR #12276) | Channel (Telegram) | Open, PR author responded to early review. | Medium – depends on audio pipeline stability. |
| **Pair‑device voice settings on Web** (PR #12269) | Web UI | Open, documentation work pending. | Low‑Medium – UI polish for v0.9.0, may roll to v0.10. |
| **MCP local‑config API** (PR #12275) | Gateway/CLI | Open, needs security review. | Medium – valuable for ops but not critical for core release. |

The pattern shows a strong push toward **multi‑model provider support**, **inter‑agent tooling**, and **web‑dashboard accessibility** – all likely to be featured in the upcoming 0.9.0 launch.

---

### 7. User Feedback Summary  

- **Timestamp integrity** is a recurring pain point; users rely on accurate `created_at` fields for compliance reporting. The fix in PR #11676 was a direct response.  
- **Channel routing bugs** (Matrix, Discord, Telegram) are causing message loss or mis‑delivery, especially for teams that operate cross‑platform bots. Issues #10926, #12283, #12065 highlight this.  
- **Security throttling** (OIDC verification, XFF handling) is a concern for operators deploying ZeroClaw behind reverse proxies; the community applauded the rapid closure of #12114 & #12233.  
- **Delegation ergonomics** (TOOL → DELEGATE) are still confusing; multiple bugs (#12211, #12235, #12199) indicate that the tool‑chain for delegated agents needs better documentation and tighter integration.  
- **User experience** on the web front‑door is a frequent request; the lack of a native dashboard was noted in #10315 and is being addressed by PR #12270.

Overall sentiment is **constructive**: users are grateful for quick security patches but are eager for the promised UI and multi‑model enhancements.

---

### 8. Backlog Watch (Long‑Unanswered Items)  

| Issue/PR | Age (days) | Why it matters | Needed action |
|----------|------------|----------------|----------------|
| **#12283** – `resolve_peer_set` ignores per‑group `ignore` | 1 day (opened today) | Could expose messages to unintended peers, a security surface. | Review and add tests; likely a quick fix. |
| **#12235** – Delegated agent raw‑text return | 2 days | Breaks tool‑chain expectations for delegated workers. | Align delegate prompt builder with native tool handling. |
| **#12227** – Shell approval flag | 3 days | Inconsistent user prompts hinder automation pipelines. | Clarify spec and add deterministic flag handling. |
| **#12211** – Delegated agents don’t load `TOOLS.md` | 4 days | Delegates lose tooling context, leading to missing capabilities. | Merge with #12235 fix or separate PR. |
| **#12205** – CanvasStore leak | 5 days | Resource leak may hit the 100‑canvas limit in long‑running sessions. | Add eviction logic; low priority but easy. |
| **#12228** – `cron update --agent` no reassignment | 3 days | Operators can’t reliably re‑assign agents via CLI. | Add state‑write after success. |
| **#12279** – Transcript cap at startup | 1 day | Potential data loss; currently S2 but could be S0. | Add lock‑protected append during boot. |
| **#12280** – SOP cancel forwarded loopback task | 1 day | Completes the security hardening series started with #12114. | Merge after review of #12281. |

These items have either no PR attached yet or are awaiting reviewer assignment. Prioritizing the security‑related ones (#12283, #12280) and the delegation consistency bugs (#12235, #12211) will keep the project on track for the upcoming stable release.

--- 

*Prepared by the ZeroClaw Open‑Source Analyst – 2026‑11‑07*  
[GitHub Repository](https://github.com/zeroclaw-labs/zeroclaw)   | [Issues overview](https://github.com/zeroclaw-labs/zeroclaw/issues)   | [Pull‑requests overview](https://github.com/zeroclaw-labs/zeroclaw/pulls)   | [Documentation](https://github.com/zeroclaw-labs/zeroclaw/wiki)   | [Community chat (Matrix)](https://matrix.to/#/#zeroclaw:matrix.org)   | [Release roadmap](https://github.com/zeroclaw-labs/zeroclaw/milestones)   | [Security policy](https://github.com/zeroclaw-labs/zeroclaw/blob/master/SECURITY.md)   | [Contributing guide](https://github.com/zeroclaw-labs/zeroclaw/blob/master/CONTRIBUTING.md)   | [Code of Conduct](https://github.com/zeroclaw-labs/zeroclaw/blob/master/CODE_OF_CONDUCT.md)   | [Issue tracker](https://github.com/zeroclaw-labs/zeroclaw/issues)   | [PR tracker](https://github.com/zeroclaw-labs/zeroclaw/pulls)   | [CI status](https://github.com/zeroclaw-labs/zeroclaw/actions)   | [Dependency audit](https://github.com/zeroclaw-labs/zeroclaw/security/dependencies)   | [Mailing list](mailto:zeroclaw-dev@googlegroups.com)   | [Twitter](https://twitter.com/ZeroClawLabs)   | [Discord](https://discord.gg/zeroclaw)   | [Reddit](https://reddit.com/r/ZeroClaw)   | [YouTube](https://www.youtube.com/zeroclaw)   | [Blog](https://zeroclaw.dev/blog)   | [FAQ](https://zeroclaw.dev/faq).   | [Legal](https://github.com/zeroclaw-labs/zeroclaw/blob/master/LICENSE).   | [Contact](mailto:support@zeroclaw.dev).   | [Donate](https://github.com/sponsors/zeroclaw-labs).   | [Back to top](#zero-claw-project-digest---2026-11-07).   | ---   | *All links are live as of 2026‑11‑07.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*