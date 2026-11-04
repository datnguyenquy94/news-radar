# AI Open Source Trends 2026-11-04

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-11-04 05:53 UTC

---

**AI Open‑Source Trends Report – 2026‑11‑04**  

---

## 1. Today’s Highlights  

- **Multi‑agent tooling is exploding:** *vercel‑labs/agent‑desktop* (Rust) gained +2,602 ⭐ since yesterday, while a wave of agent‑centric repos (Claude‑Code‑Game‑Studios, ponytail, ECC, hermes‑agent) each saw > +800 ⭐ increments.  
- **Rust‑based infra is on fire:** three Rust projects—*agent‑desktop*, *hex* (voice dictation) and the new *colibri* inference engine—rank in the top‑10 for today’s star surge, underscoring a community shift toward performance‑first stacks.  
- **RAG & knowledge‑graph tooling consolidates:** *claude‑mem* and *graphify* continue strong growth (+1,122 ⭐ and +606 ⭐) as developers look for deterministic, non‑vector‑store approaches to augment large‑model agents.  

---

## 2. Top Projects by Category  

### 🔧 AI Infrastructure  

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [JustVugg/colibri](https://github.com/JustVugg/colibri) | C | 47,375 (+802) | +630 since 2026‑11‑03 | A hierarchical inference engine that hot‑loads MoE experts on‑GPU, warm ones in RAM, and streams cold experts from NVMe. Built for “bring‑your‑own‑hardware” deployments and already drawing > 800 ⭐ in a single day. |
| [vercel‑labs/agent‑desktop](https://github.com/vercel-labs/agent-desktop) | Rust | 13,296 (+3,791) | +2,602 since 2026‑11‑03 | CLI that lets AI agents control a computer, run shells, and orchestrate tools. Its rapid star climb signals strong demand for low‑overhead, Rust‑native agent runtimes. |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 185,844 (—) | +562 since 2026‑10‑30 | The go‑based server that ships dozens of open‑source LLMs (Gemma, Qwen, etc.) locally. Continues to be the go‑to runtime for on‑prem inference, reflected by steady weekly growth. |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 198,389 (—) | +655 since 2026‑11‑02 | Library that scrapes the web and feeds structured data to agents, positioning itself as the “web‑to‑LLM” bridge for next‑gen assistants. |
| [anomalyco/hex](https://github.com/anomalyco/hex) | Rust | 4,727 (+410) | +1,210 since 2026‑11‑02 | Cross‑platform voice‑dictation engine that runs locally, showcasing Rust’s reach beyond pure inference into front‑end interaction layers. |

### 🤖 AI Agents / Workflows  

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [vercel‑labs/agent‑desktop](https://github.com/vercel-labs/agent-desktop) | Rust | 13,296 (+3,791) | +2,602 since 2026‑11‑03 | (see above – primary as an agent execution environment). |
| [mattpocock/skills](https://github.com/mattpocock/skills) | Shell | 311,723 (+1,164) | +1,231 since 2026‑11‑03 | A curated “.agents” skill set that lets real engineers equip LLM agents with domain‑specific commands. The huge star base and daily surge highlight appetite for plug‑and‑play agent capabilities. |
| [Donchitos/Claude‑Code‑Game‑Studios](https://github.com/Donchitos/Claude-Code-Game-Studios) | Shell | 34,854 (+1,182) | +994 since 2026‑11‑03 | A full‑stack game‑dev studio powered by 49 Claude agents, 72 workflow skills, and hierarchical coordination that mimics a real studio pipeline. |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | JavaScript | 183,911 (—) | +839 since 2026‑11‑03 | Agent “lazy‑dev” layer that makes LLMs adopt the shortcuts of a senior engineer, dramatically reducing prompt length while preserving quality. |
| [affaan‑m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 296,680 (—) | +830 since 2026‑11‑03 | Performance‑optimisation system that adds memory, security, and research‑first modules to Claude, Codex, and other code‑centric agents. |
| [NousResearch/hermes‑agent](https://github.com/NousResearch/hermes-agent) | Python | 260,305 (—) | +727 since 2026‑11‑02 | Self‑growing autonomous agent that persistently improves its toolset and prompts based on user feedback. |

### 📦 AI Applications  

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [spotify/portal‑ai‑plugins](https://github.com/spotify/portal-ai-plugins) | TypeScript | 3,090 (+91) | 🆕 new | A collection of AI‑powered plugins for the Spotify portal, enabling automated playlist curation, recommendation tuning, and voice‑controlled browsing. |
| [Usagi‑org/ai‑goofish‑monitor](https://github.com/Usagi-org/ai-goofish-monitor) | Python | 16,721 (+228) | 🆕 new | Playwright‑based scraper + AI analyzer that monitors Xianyu (Chinese resale market) in real‑time, surfacing high‑value items automatically. |
| [anomalyco/hex](https://github.com/anomalyco/hex) | Rust | 4,727 (+410) | +1,210 since 2026‑11‑02 | (also infra) Local voice dictation for desktop platforms, turning spoken input into text without cloud services. |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 138,404 (—) | +1,177 since 2026‑11‑02 | End‑to‑end pipeline that generates HD short videos from a keyword using LLM‑driven script writing, image synthesis, and post‑production. |
| [rohitg00/ai‑engineering‑from‑scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | Python | 76,729 (—) | +604 since 2026‑11‑01 | Hands‑on curriculum plus full‑stack code to build, train, and ship AI products; growing as a community‑driven learning hub. |

### 🧠 LLMs / Training  

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [p‑e‑w/heretic](https://github.com/p-e-w/heretic) | Python | 38,957 (+701) | +702 since 2026‑11‑03 | “Training‑free” model surgery toolkit that can strip censorship, reduce sycophancy, or re‑bias a frozen LLM in seconds. |
| [shiyu‑coder/Kronos](https://github.com/shiyu-coder/Kronos) | Python | 46,606 (+503) | +503 since 2026‑11‑03 | A domain‑specific foundation model targeting financial‑market language, released under a permissive license for research. |

### 🔍 RAG / Knowledge  

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [thedotmack/claude‑mem](https://github.com/thedotmack/claude-mem) | TypeScript | 112,148 (+1,139) | +1,122 since 2026‑11‑03 | Persistent‑context engine that records an agent’s session, compresses it with an LLM, and injects the summary into future runs. |
| [Graphify‑Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 141,965 (—) | +606 since 2026‑11‑03 | Converts any codebase (code, docs, schemas, PDFs) into a deterministic knowledge graph, enabling vector‑free code‑aware queries for agents. |

---

## 3. Trend Signal Analysis  

The dominant momentum today is **multi‑agent orchestration and low‑level infrastructure**.  Six of the top‑10 star jumps belong to agent‑centric repos, with *agent‑desktop* alone capturing over 3 k new stars.  This reflects the community’s shift from “single‑LLM chat” toward **composable AI pipelines** that can drive real‑world tools (e.g., IDEs, browsers, game engines).  

A notable stack‑trend is the **rise of Rust** in both agent runtimes (*agent‑desktop*, *hex*) and high‑performance inference (*colibri*).  Rust’s safety guarantees and native speed appear to be winning the confidence of developers building production‑grade agents and voice interfaces.  

The **first‑appearance projects** (*portal‑ai‑plugins*, *ai‑goofish‑monitor*) illustrate expanding verticalization: platforms (Spotify) and region‑specific market monitoring are now being tackled with turnkey AI plugins.  In contrast, the **re‑appearances with strong 📈 deltas** (e.g., *ponytail*, *ECC*, *hermes‑agent*) signal a **maturation of the agent‑tooling ecosystem**, where incremental feature releases and community‑driven extensions keep fueling star growth.  

These trends dovetail with recent industry moves—OpenAI’s “Claude‑Code” upgrade, Meta’s MoE research, and the broader push for **on‑device LLM serving** (e.g., *ollama*).  The convergence of fast‑Rust back‑ends, modular agent skills, and deterministic RAG pipelines suggests developers are ready to move beyond research prototypes toward **scalable, locally‑run AI assistants**.

---

## 4. Community Hot Spots  

- **Rust‑first agent runtimes** – *vercel‑labs/agent‑desktop* and *JustVugg/colibri* showcase a performant, secure foundation for next‑gen assistants.  
- **Deterministic RAG** – *thedotmack/claude‑mem* and *Graphify‑Labs/graphify* provide vector‑free knowledge‑graph & context mechanisms that are gaining traction.  
- **Open‑source LLM serving** – *ollama/ollama* remains the default self‑hosted runtime, a crucial dependency for many of the agents above.  
- **Agent skill ecosystems** – *mattpocock/skills* and *affaan‑m/ECC* illustrate the growing market for plug‑and‑play agent capabilities.  
- **Domain‑specific generation** – *harry0703/MoneyPrinterTurbo* demonstrates the appetite for specialized content creation pipelines (AI‑generated video).  

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*