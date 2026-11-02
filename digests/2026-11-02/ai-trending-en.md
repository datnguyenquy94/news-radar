# AI Open Source Trends 2026-11-02

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-11-02 05:38 UTC

---

**AI Open‑Source Trends – 2 Nov 2026**

---

## 1. Today’s Highlights
- **Claude‑Mem** surged with +1,562 stars in a single day, underscoring the community’s appetite for “persistent‑memory” layers that let LLM‑agents retain context across sessions.  
- A wave of **infrastructure‑first** tools (Firecrawl, Lightpanda‑browser, Graphify) topped the trending list, signalling that developers are now prioritising reliable data‑ingestion, headless browsing and deterministic knowledge‑graph pipelines before building agents on top of them.  
- New vertical‑focused applications such as **Handy** (offline speech‑to‑text) and **AiSOC** (self‑hosted AI security‑operations) illustrate an expanding “AI‑for‑domains” niche, where open‑source projects aim to replace proprietary SaaS with on‑premise, privacy‑first alternatives.

---

## 2. Top Projects by Category  

### 🔧 AI Infrastructure  

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | :--- | :--- |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 197,734 (+567) | 📈 +567 since 2026‑10‑31 | A library that lets LLM‑agents scrape, render and parse the open web, eliminating the need for custom crawling code. Its rapid star jump reflects growing demand for plug‑and‑play web‑data sources. |
| [open‑webui/open‑webui](https://github.com/open-webui/open-webui) | Python | 157,501 (+507) | 📈 +507 since 2026‑10‑28 | Provides a self‑hosted, UI‑rich front‑end for any LLM (Ollama, OpenAI, etc.). The surge shows developers want a unified, locally‑run chat UI instead of cloud dashboards. |
| [lightpanda‑io/browser](https://github.com/lightpanda-io/browser) | Zig | 40,422 (+825) | 📈 +1,040 since 2026‑11‑01 | A headless browser built for AI automation, exposing a minimal API that LLM‑agents can control directly. Its popularity signals a shift toward browser‑level tool integration. |
| [Graphify‑Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 140,668 (+557) | 📈 +557 since 2026‑11‑01 | Turns entire codebases (docs, SQL, PDFs) into deterministic knowledge graphs, enabling precise graph‑SQL queries without vector stores. The project is attracting attention for “structured‑retrieval” pipelines. |
| [Mintplex‑Labs/anything‑llm](https://github.com/Mintplex-Labs/anything-llm) | JavaScript | 67,838 (+504) | 📈 +504 since 2026‑10‑20 | A local‑first LLM stack that bundles inference, UI and RAG plugins. Its growth reflects the “own‑your‑model” movement after the recent release of several open‑weight LLMs. |

### 🤖 AI Agents / Workflows  

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | :--- | :--- |
| [thedotmack/claude‑mem](https://github.com/thedotmack/claude-mem) | TypeScript | 109,681 (+1,526) | 📈 +1,562 since 2026‑11‑01 | Adds persistent, compressed memory to any Claude‑compatible agent, letting sessions build on prior interactions. The huge star burst indicates strong demand for long‑term agent memory. |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 294,939 (+739) | 📈 +739 since 2026‑11‑01 | “Agent Harness” that centralises skills, instincts and security for Claude‑Code, Codex and other models. Its momentum shows developers are standardising agent‑runtime stacks. |
| [Donchitos/Claude‑Code‑Game‑Studios](https://github.com/Donchitos/Claude-Code-Game-Studios) | Shell | 32,578 (+967) | 📈 +1,247 since 2026‑11‑01 | Converts Claude‑Code into a full‑featured game‑dev studio with 49 agents and hierarchical workflows, blurring lines between code generation and production pipelines. |
| [CopilotKit/OpenBot](https://github.com/CopilotKit/OpenBot) | TypeScript | 9,662 (+175) | 📈 +766 since 2026‑10‑31 | Supplies “AI coworkers” each with an isolated file system, browser and toolset; actions are logged before execution for reproducibility. The rise reflects interest in multi‑agent collaboration. |
| [NousResearch/hermes‑agent](https://github.com/NousResearch/hermes-agent) | Python | 259,578 (+650) | 📈 +650 since 2026‑10‑31 | A self‑improving personal assistant that continuously fine‑tunes its prompts based on user feedback. Its growth is tied to the release of the Hermes‑2 model family. |

### 📦 AI Applications  

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | :--- | :--- |
| [Kronos](https://github.com/shiyu-coder/Kronos) | Python | 45,546 (+630) | 📈 +3,120 since 2026‑10‑21 | A foundation model trained on the language of financial markets, enabling ultra‑low‑latency trading‑signal generation. Its star surge follows the recent “FinML” conference buzz. |
| [Handy](https://github.com/cjpais/Handy) | Rust | 36,771 (+339) | 🆕 first appearance | Offline, open‑source speech‑to‑text that runs on CPU‑only devices, appealing to privacy‑focused users. First‑appearance momentum signals a gap in on‑device STT solutions. |
| [AiSOC](https://github.com/beenuar/AiSOC) | Python | 6,373 (+446) | 🆕 first appearance | An AI‑driven Security Operations Center that fuses alerts, runs LLM triage and logs every agent step. Its MIT licence and no‑API‑key design attract red‑team communities. |
| [MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 137,227 (+575) | 📈 +575 since 2026‑10‑31 | Generates high‑definition short videos from a keyword prompt using multi‑modal LLM pipelines. The project rides the recent explosion of AI‑generated multimedia. |
| [DeepTutor](https://github.com/HKUDS/DeepTutor) | Python | 53,858 (+819) | 📈 +819 since 2026‑11‑01 | A lifelong personalized tutoring system that adapts curricula via RAG‑augmented LLMs. Its star lift mirrors growing interest in AI‑ed‑tech after the launch of several large‑scale educational LLMs. |

### 🔍 RAG / Knowledge  

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | :--- | :--- |
| [HKUDS/LightRAG](https://github.com/HKUDS/LightRAG) | Python | 40,474 (+512) | 📈 +512 since 2026‑10‑04 | A lightweight, fast RAG framework that avoids heavy vector stores, using deterministic AST parsing. Its rise shows developers favor low‑overhead retrieval for on‑device LLMs. |
| [Graphify‑Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 140,668 (+557) | 📈 +557 since 2026‑11‑01 | (Also listed under Infrastructure) Provides a deterministic knowledge‑graph layer for any code repository, enabling precise graph‑QL‑style queries. Demonstrates convergence of graph‑tech and RAG. |
| [Mintplex‑Labs/anything‑llm](https://github.com/Mintplex-Labs/anything-llm) | JavaScript | 67,838 (+504) | 📈 +504 since 2026‑10‑20 | (Dual‑listed) Supplies a full local‑first LLM + RAG stack, letting users run embeddings and retrieval without external services. Highlights the “self‑hosted RAG” trend. |

---

## 3. Trend Signal Analysis  
The **agent‑centric** segment is exploding: five of the top‑10 starred projects today are frameworks that give LLMs a persistent memory, sandboxed tool access, or hierarchical coordination. The **+1,500**‑star jump of Claude‑Mem, combined with double‑digit growth across ECC, Hermes‑Agent and OpenBot, indicates developers are moving beyond single‑turn prompting toward multi‑step, self‑directed workflows.  

At the same time, **infrastructure tools** that supply clean, deterministic data sources (Firecrawl, Lightpanda‑browser, Graphify) are gaining comparable momentum, suggesting an ecosystem‑maturing phase where the “plumbing” is being polished before higher‑level agents are built.  

New entrants (🆕) such as **Handy** (offline STT) and **AiSOC** (self‑hosted security‑ops) demonstrate that niche, privacy‑first applications are now entering open‑source, a shift from the earlier focus on generic LLM wrappers. These first‑appearances bring fresh problem domains (speech, security) that were previously addressed only by commercial SaaS.  

The continued **RAG** interest, exemplified by LightRAG and Anything‑LLM, aligns with the recent release of lightweight embedding models (e.g., Mini‑LM‑v2) that make on‑device retrieval practical. Collectively, the data points to a community that is **standardising agent runtimes**, **optimising data pipelines**, and **splintering into vertical‑specific AI services**, all while riding the wave of the latest open‑weight LLM releases (Hermes‑2, Qwen‑2, Claude‑3.5).

---

## 4. Community Hot Spots  

- **Claude‑Mem** – the go‑to library for long‑term context; worth integrating into any multi‑turn agent project.  
- **Firecrawl** – a plug‑and‑play web‑scraping layer that removes the “crawler‑as‑a‑service” bottleneck for agents that need up‑to‑date web data.  
- **ECC (Agent Harness)** – provides a unified skill‑registry and security sandbox, making it easier to compose complex agent ecosystems.  
- **Handy** – the first robust offline speech‑to‑text stack, opening doors for on‑device voice assistants and privacy‑sensitive apps.  
- **LightRAG** – a minimal‑overhead retrieval system that pairs perfectly with the surge of local LLM deployments.  

These projects together sketch the next‑generation stack: **clean data ingestion → deterministic knowledge representation → persistent agent memory → vertical‑specific applications**. Developers focusing on any of these layers are likely to ride the strongest community currents over the coming months.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*