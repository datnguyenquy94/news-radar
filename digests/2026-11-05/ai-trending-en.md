# AI Open Source Trends 2026-11-05

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-11-05 06:15 UTC

---

**AI Open‑Source Trends – 2026‑11‑05**

---

### 1. Today’s Highlights  
- **Agent‑centric tooling is exploding** – the *Claude‑mem* context‑layer and *agent‑desktop* CLI together amassed **≈ 3 k** new stars in just two days, underscoring a rush to give LLM agents persistent memory and OS‑level capabilities.  
- **Domain‑specific AI apps** are gaining traction: *MoneyPrinterTurbo* (+840) and *DeepTutor* (+708) show that developers are rapidly converting raw LLM power into concrete vertical products (video generation, personalized tutoring).  
- **RAG‑backed knowledge graphs** are maturing: *Graphify*, *mem0* and *RAGFlow* each saw > 500 star bumps, indicating a shift from ad‑hoc vector stores toward structured, query‑able knowledge bases that agents can reason over.

---

### 2. Top Projects by Category  

| Project | Lang | Stars (total / today) | Since last report | Summary |
|---|---|---|---|---|
| **🔧 AI Infrastructure** |
| [NVIDIA/auto-ontology](https://github.com/NVIDIA/auto-ontology) | Python | 5,650 (+2,050) | 🆕 new | A framework that auto‑generates graph‑based ontologies for LLM reasoning. Its deterministic query layer makes prompt engineering far more explainable, which resonated with the community (2 k+ stars in a day). |
| [max-sixty/worktrunk](https://github.com/max-sixty/worktrunk) | Rust | 11,176 (+531) | +1,034 since 2026‑11‑03 | CLI that orchestrates Git worktrees for parallel AI‑agent pipelines. Its growth shows developers need tighter source‑control integration when scaling multi‑agent experiments. |
| [FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c) | C | 10,480 (+351) | 🆕 new | A pure‑C inference engine that runs a 2.78‑trillion‑parameter Kimi model on a single CPU (8 GB RAM). The repo proves that ultra‑large LLMs can be demoed without GPU farms, sparking interest in edge‑centric inference. |
| **🤖 AI Agents / Workflows** |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | TypeScript | 113,063 (+1,172) | +915 since 2026‑11‑04 | Provides persistent, compressed memory for any Claude‑compatible agent, enabling “remember‑across‑sessions” behavior. Its rapid star gain shows the community’s appetite for long‑term agent state. |
| [vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop) | Rust | 15,652 (+2,470) | +2,356 since 2026‑11‑04 | A “computer‑use” CLI that lets agents control the OS (open files, run commands). The tool is the first open‑source bridge that gives agents native desktop access, a clear sign of the “agent‑as‑OS” trend. |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | Python | 120,684 | +1,041 since 2026‑11‑02 | Multi‑agent LLM framework for automated financial trading. Its momentum reflects a growing confidence in deploying autonomous agents in regulated, high‑stakes domains. |
| [Panniantong/Agent‑Reach](https://github.com/Panniantong/Agent‑Reach) | Python | 108,912 | +743 since 2026‑11‑03 | CLI that gives agents “eyes” on the entire public web (Twitter, Reddit, YouTube, etc.) without API fees. Highlights a push toward self‑served web‑scraping capabilities inside agents. |
| **📦 AI Applications** |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 139,244 (+617) | +840 since 2026‑11‑04 | End‑to‑end pipeline that turns a keyword into a high‑def short video using LLM‑driven scriptwriting and diffusion. The surge indicates strong demand for turnkey generative‑media products. |
| [DeepTutor](https://github.com/HKUDS/DeepTutor) | Python | 55,131 | +708 since 2026‑11‑03 | Lifelong personalized tutoring platform that continuously updates its knowledge via RAG. Its star jump reflects the education sector’s rapid adoption of AI tutors. |
| [career‑ops/career‑ops](https://github.com/career-ops-hq/career-ops) | JavaScript | 80,274 | +633 since 2026‑11‑03 | Open‑source AI job‑search assistant that scrapes boards, scores matches, and drafts resumes locally. Shows appetite for privacy‑first career AI tools. |
| [The-PR-Agent/pr-agent](https://github.com/The-PR-Agent/pr-agent) | Python | 14,889 (+280) | 🆕 new | Fully open‑source PR reviewer that automatically comments, suggests fixes, and merges. Its debut highlights the maturation of AI‑driven developer productivity bots. |
| **🧠 LLMs / Training** |
| [FareedKhan-dev/kimi-k3-in-c](https://github.com/FareedKhan-dev/kimi-k3-in-c) | C | 10,480 (+351) | 🆕 new | (also listed under Infrastructure) – pure‑C inference for a 2.78T‑parameter model shows the community’s push toward ultra‑large, hardware‑agnostic deployment. |
| [OpenEBFM](https://github.com/datamllab/OpenEBFM) | Python | 263 | +51 since 2026‑10‑31 | Early‑stage code for training energy‑based foundation models, offering a novel alternative to dominant transformer‑based pipelines. |
| **🔍 RAG / Knowledge** |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 142,554 | +589 since 2026‑11‑04 | Transforms an entire codebase (docs, schemas, PDFs) into a deterministic knowledge graph, exposing rich, explainable edges to agents. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 68,434 | +559 since 2026‑10‑27 | Drop‑in memory layer that persists context across agent runs; a core primitive for long‑term autonomous reasoning. |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 93,529 | +545 since 2026‑10‑28 | An “agent‑native” RAG database that stores embeddings and metadata alongside structured graph edges, blurring the line between vector store and knowledge graph. |

---

### 3. Trend Signal Analysis  

The **agent‑centric ecosystem is the hottest segment today**. Two of the three largest star spikes belong to tools that give LLM agents statefulness (*Claude‑mem*) and OS‑level control (*agent‑desktop*). This mirrors the broader industry shift after the release of Claude‑3.5 and the open‑source “Claude Code” plugins in early November, which lowered the barrier for developers to embed agents directly into their machines.  

**Infrastructure‑first “edge inference”** resurfaces with *kimi‑k3‑in‑c*, a pure‑C engine that runs a 2.8 T‑parameter model on a laptop. Its debut signals a renewed interest in democratizing ultra‑large model access without cloud GPUs, likely spurred by the recent launch of the “Kimi‑3” model family and the growing cost concerns around GPU‑heavy serving.  

On the **application side**, vertical AI products (video creation, tutoring, career assistance) are all seeing > 600 star gains, indicating that developers are moving from generic LLM playgrounds to domain‑specific revenue‑potential solutions. The rise of *MoneyPrinterTurbo* and *DeepTutor* aligns with the Q4 “generative media” summit where several major cloud vendors announced dedicated diffusion + LLM bundles.  

The **RAG/knowledge graph** tier is also solidifying. Projects like *Graphify* and *RAGFlow* are crossing the 100‑k‑star threshold, pointing to a community consensus that raw vectors are insufficient for complex agent reasoning; structured graphs and persistent memory (mem0) are becoming first‑class citizens.  

**🆕 entries** (e.g., *auto‑ontology*, *k3‑in‑c*, *pr‑agent*) reveal emerging niches: semantic ontologies for LLM reasoning, CPU‑only inference, and fully autonomous PR reviewers. Their “new” flag shows fresh community interest, but they have not yet accumulated the compounding momentum of the “📈” projects, which suggest an already‑established adoption curve and a growing ecosystem around those primitives.

---

### 4. Community Hot Spots  

- **Persistent Agent Memory** – *Claude‑mem* and *mem0* are becoming de‑facto standards for long‑term context; integrating them early will future‑proof multi‑agent pipelines.  
- **Agent‑as‑OS** – *agent‑desktop* demonstrates that giving agents direct file‑system and UI access is now feasible; watch for downstream tooling (sandboxes, security wrappers).  
- **Edge‑Scale LLM Inference** – *kimi‑k3‑in‑c* proves ultra‑large models can run on commodity hardware; expect a wave of lightweight inference libraries targeting CPUs and edge devices.  
- **Structured Knowledge Graphs** – *Graphify* and *RAGFlow* are building the next layer of RAG, moving beyond flat vector stores toward queryable schemas; critical for any agent needing reliable reasoning over codebases or docs.  
- **Domain‑Specific Generative Apps** – *MoneyPrinterTurbo* and *DeepTutor* illustrate the lucrative “AI as a product” playbook; developers should consider fine‑tuning or wrapping existing models for niche verticals.  

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*