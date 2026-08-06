# AI Open Source Trends 2026-08-03

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-08-03 03:39 UTC

---

# AI Open Source Trends Report — 2026-08-03

---

## 1. Today's Highlights

Today's trending list is dominated by **AI agent infrastructure and memory systems**, with four of the top ten AI-related repos addressing agent memory, skill routing, and cross-platform agent frameworks. Microsoft's educational repos (*AI-For-Beginners*, *generative-ai-for-beginners*) collectively pulled >3,200 stars, signaling sustained beginner onboarding demand. On the inference front, **lyogavin/airllm** (+819★) and **antirez/ds4** (+139★) showcase the community's push to run 70B-class models on consumer GPUs. The topic search reveals a maturing RAG stack: *infiniflow/ragflow* (86.7k★) and *thedotmack/claude-mem* (89.4k★) lead a wave of persistent-context and agentic-RAG tooling.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [lyogavin/airllm](https://github.com/lyogavin/airllm) | Jupyter Notebook | 0 (+819) | Runs 70B LLMs on a single 4 GB GPU via clever weight offloading; today's surge shows pent-up demand for ultra-low-VRAM inference. |
| [antirez/ds4](https://github.com/antirez/ds4) | C | 0 (+139) | DeepSeek 4 Flash/PRO local inference engine targeting Metal, CUDA, ROCm; antirez's authorship guarantees performance focus. |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | Go | 0 (+333) | Terminal-native coding agent built on DeepSeek with prefix-cache stability; leave-it-running design targets developer workflow integration. |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 177,629 | De facto standard for local model management; supports Kimi-K2.6, GLM-5.2, DeepSeek, Qwen, Gemma — one binary, zero config. |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | Python | 87,992 | High-throughput LLM serving engine with PagedAttention; production backbone for countless inference deployments. |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 163,269 | Universal model hub & framework; 1.6k+ model architectures, first-class training & inference APIs, industry standard. |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | Python | 102,144 | Foundational tensor compute & autograd engine; CUDA/ROCm/MPS support, torch.compile, export to ONNX/CoreML. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | Python | 0 (+659) | Gives agents "eyes" across Twitter, Reddit, YouTube, GitHub, Bilibili, XiaoHongShu — one CLI, zero API fees; today's spike highlights demand for free web access. |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | TypeScript | 0 (+602) | Team-level memory hub converting chats/docs/code into four reusable assets (Chat Memory, Skill, LLM-Wiki, Code-Graph) governed across agents/frameworks. |
| [different-ai/openwork](https://github.com/different-ai/openwork) | TypeScript | 0 (+280) | Open-source Claude Cowork alternative powered by opencode; focuses on multi-agent collaboration UX. |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 224,396 | "The agent that grows with you" — long-term memory, self-evolution, multi-model routing; highest-starred agent framework. |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 143,263 | Agent engineering platform; composable chains, tools, memory, RAG, multi-agent — production hardening & LangGraph for stateful workflows. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 62,345 | Universal memory layer for agents; pluggable stores, automatic extraction, cross-session recall — critical for persistent assistants. |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | TypeScript | 55,109 | Visual drag-and-drop builder for agentic flows & RAG pipelines; 100+ integrations, self-hostable, low-code entry point. |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | 107,629 | Makes websites accessible to agents via deterministic browser automation; enables web tasks without APIs. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [langgenius/dify](https://github.com/langgenius/dify) | TypeScript | 151,124 | Full-stack agentic workspace: visual workflow builder, RAG pipeline, model/tool marketplace, team collaboration — cloud/VPC/self-hosted parity. |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Python | 147,657 | Polished self-hosted ChatGPT-style UI; Ollama/OpenAI API support, RAG, tools, multi-user auth, PWA — community's favorite frontend. |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 159,608 | Scalable web scraping & search API for LLM consumption; handles JS rendering, anti-bot, structured extraction — data layer for agents. |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 101,233 | One-click HD short video generation from topic/keyword; automated script, voice, subtitles, editing — viral content pipeline. |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | TypeScript | 49,306 | Productivity studio with smart chat, 300+ prebuilt assistants, autonomous agents, unified frontier LLM access — desktop-first UX. |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 42,610 | Turns docs/topics into native .pptx with shapes, animations, data charts, speaker-note audio, custom templates — not just markdown slides. |
| [jeecgboot/JeecgBoot](https://github.com/jeecgboot/JeecgBoot) | Java | 47,254 | Enterprise AI low-code platform: one prompt → full CRUD, forms, reports, dashboards; built-in AI chat, knowledge base, MCP plugins. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [microsoft/AI-For-Beginners](https://github.com/microsoft/AI-For-Beginners) | Jupyter Notebook | 0 (+2,629) | 12-week, 24-lesson curriculum covering classic ML, NLP, CV, responsible AI — largest single-day star gain signals massive onboarding wave. |
| [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) | Jupyter Notebook | 0 (+588) | 21 hands-on lessons building with GenAI: prompt engineering, RAG, agents, eval, safety — practical on-ramp for newcomers. |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 100,406 | Step-by-step PyTorch implementation of a GPT-like LLM; 400+ pages, from tokenizer to RLHF — gold standard for learning internals. |
| [microsoft/ML-For-Beginners](https://github.com/microsoft/ML-For-Beginners) | Jupyter Notebook | 88,916 | 12-week classic ML course (regression, clustering, trees, NLP basics) with quizzes & labs — foundational precursor to GenAI track. |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,261 | Comprehensive LLM evaluation platform; 100+ datasets, support for Llama3, Mistral, InternLM2, GPT-4, Qwen, GLM, Claude — reproducible leaderboards. |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | Rust | 8,146 | Modular, type-safe LLM application framework in Rust; compiles to single binary, zero-cost abstractions, async-first — emerging systems choice. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 86,656 | Agentic RAG engine fusing deep document parsing (PDF, tables, formulas) with graph-enhanced retrieval; enterprise-grade, Kubernetes-ready. |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | JavaScript | 89,350 | Persistent cross-session memory for any agent: captures, compresses, injects relevant context; works with Claude Code, Codex, Gemini, OpenCode, more. |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Python | 51,324 | Leading document agent & OCR platform; 300+ data connectors, multi-modal parsing, agentic query planning, production hardening. |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 45,470 | Cloud-native vector DB for billion-scale ANN search; GPU indexing, hybrid filter, multi-tenancy, Milvus Lite for embedded use. |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | Rust | 33,733 | High-performance vector search engine with payload filtering, HNSW

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*