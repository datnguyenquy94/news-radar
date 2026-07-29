# AI Open Source Trends 2026-07-29

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-07-29 03:37 UTC

---

# AI Open Source Trends Report — 2026-07-29

## 1. Today's Highlights

The GitHub trending list is dominated by **agent-centric tooling**: three of the top five AI repositories by today's stars (`affaan-m/ECC`, `bradautomates/claude-video`, `moeru-ai/airi`) extend coding agents (Claude Code, Codex, etc.) with memory, video understanding, and persistent personality. Hugging Face's `speech-to-speech` (+227★) signals growing momentum for **fully local voice agents**, while Microsoft's `agent-governance-toolkit` (+46★) reflects enterprise demand for **zero-trust agent governance** covering the OWASP Agentic Top 10. In the broader topic search, minimalist frameworks (`PocketFlow`, `atomic-agents`, `minimind`) and **vectorless RAG** (`LEANN`, `PageIndex`) are accumulating stars rapidly, indicating a shift toward lighter, more transparent stacks.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure
| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 177,148 | The de-facto standard for running LLMs locally; new model drops (Kimi-K2.6, GLM-5.2) keep it at the center of the open-weight ecosystem. |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 142,830 | Comprehensive agent engineering platform; recent LangGraph integration makes it the backbone for production multi-agent workflows. |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 163,081 | Foundational model-definition framework; supports every new architecture (text, vision, audio, multimodal) within days of release. |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 157,589 | Scalable web search/scrape API purpose-built for agent tool-use; handles JS rendering, anti-bot, and structured extraction out of the box. |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | 107,149 | Turns any website into an agent-accessible API; critical for browser-based automation tasks that pure API access cannot cover. |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 234,941 (+636) | Agent-harness optimizer adding skills, memory, and security to Claude Code, Codex, Cursor; today's top trending AI repo by velocity. |
| [microsoft/agent-governance-toolkit](https://github.com/microsoft/agent-governance-toolkit) | Python | — (+46) | Enterprise-grade governance: policy enforcement, sandboxing, zero-trust identity; maps 10/10 OWASP Agentic Top 10 risks. |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | Rust | 8,084 | Modular, type-safe LLM application framework in Rust; appeals to systems engineers wanting performance and compile-time guarantees. |

### 🤖 AI Agents / Workflows
| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 221,973 | Flagship self-evolving agent with long-term memory, tool planning, and multi-model routing; sets the bar for "agent that grows with you." |
| [langgenius/dify](https://github.com/langgenius/dify) | TypeScript | 150,606 | Visual builder for agentic workflows and RAG pipelines; collaborative workspace moves teams from prototype to production without stack rewrite. |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | TypeScript | 49,101 | All-in-one productivity studio: 300+ assistants, autonomous agents, unified frontier-model access; strong UX focus for non-technical users. |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | Python | 46,349 | Ultra-lightweight self-hosted agent framework with WebUI, MCP, multi-agent workflows, and chat apps in a single Python package. |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | TypeScript | 36,345 | Frontend stack for generative UI and agents (React, Angular, Slack); authors of the emerging AG-UI protocol for agent–UI handshake. |
| [bradautomates/claude-video](https://github.com/bradautomates/claude-video) | Python | — (+988) | Highest today-star velocity; gives any Claude Code session video understanding via frame extraction, transcription, and context injection. |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | Python | 61,885 | One CLI lets agents search/read Twitter, Reddit, YouTube, GitHub, Bilibili, Xiaohongshu — zero API keys, zero cost. |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | Python | 72,519 | Minimal "nano" Claude Code clone built from scratch in Bash; educational gold standard for understanding agent harness internals. |

### 📦 AI Applications
| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [moeru-ai/airi](https://github.com/moeru-ai/airi) | TypeScript | — (+797) | Self-hosted "waifu" companion with realtime voice, Minecraft/Factorio play, persistent memory; showcases consumer-grade multimodal agents. |
| [huggingface/speech-to-speech](https://github.com/huggingface/speech-to-speech) | Python | — (+227) | Turnkey local voice agents: ASR → LLM → TTS pipeline with open models; no cloud dependency, privacy-first by default. |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 99,862 | One-click HD short-video generation from a topic/keyword; automates script, voice, visuals, editing — viral content pipeline. |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 97,863 | Converts any codebase (code, docs, SQL, PDFs) into a queryable knowledge graph; deterministic AST parsing, no vector store needed. |
| [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill) | Python | — (+423) | Transforms technical PDFs into installable Claude Code skills; bridges static knowledge and live coding assistance. |
| [Event-AHU/Medical_Image_Analysis](https://github.com/Event-AHU/Medical_Image_Analysis) | Python | 237 | Foundation-model-based medical imaging pipeline; demonstrates vertical specialization of open-weight multimodal models. |

### 🧠 LLMs / Training
| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | 53,976 | Trains a 64 M-parameter LLM from scratch in 2 hours on consumer hardware; best entry point for understanding pre-training mechanics. |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 100,067 | Step-by-step PyTorch implementation of a ChatGPT-class LLM; the definitive educational resource for transformer internals. |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 4,421 | Systems-focused course: builds a tiny vLLM + Qwen on Apple Silicon; teaches inference serving, KV-cache, and Metal optimization. |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,242 | Unified evaluation platform for 100+ datasets and models (Llama3, Qwen, GPT-4, Claude, etc.); becoming the CI/CD standard for LLM releases. |
| [The-Pocket/PocketFlow](https://github.com/The-Pocket/PocketFlow) | Python | 11,057 | 100-line LLM framework where agents build agents; extreme minimalism forces clarity on core control-flow primitives. |

### 🔍 RAG / Knowledge
| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 86,286 | Production-grade RAG engine fusing cutting-edge retrieval with agentic reasoning; supports multi-modal docs, table parsing, and graph-enhanced QA. |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | Go | 45,404 | Cloud-native vector database for billion-scale ANN search; the backbone of many enterprise RAG deployments. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | TypeScript | 61,965 | Universal memory layer giving agents persistent long-term memory across sessions; pluggable storage backends. |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Python | 51,178 | Leading document-agent and OCR platform; excels at complex multi-document reasoning and structured data extraction. |
| [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | Python | 12,738 | **Vectorless RAG** with 97 % storage savings; runs fast, accurate, fully private RAG on personal devices — emerging paradigm shift. |
| [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) | Python | 34,875 | Document index for reasoning-based RAG without embeddings; challenges the vector-store orthodoxy. |
| [topoteretes/cognee](https://github.com/topoteretes/cognee) | Python | 29,523 | Knowledge-graph memory platform for agents; self-hosted, persistent, graph-native alternative to vector-only memory. |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | JavaScript | 88,888 | Compresses and injects cross-session context into any agent (Claude Code, Codex, Gemini, etc.); solves the "goldfish memory" problem. |

---

## 3. Trend Signal Analysis

**Agent tooling is the new "frontend framework" battleground.** The trending list's top velocity projects — `ECC` (+636★), `claude-video` (+988★), `airi` (+797★) — are all **extensions for coding agents** (Claude Code, Codex, Cursor). Developers are treating agent harnesses as platforms and building plug-in ecosystems around memory (`claude-mem`, `mem0`), skills (`book-to-skill`, `Agent-Reach`), and multimodal perception (`speech-to-speech`, `claude-video`). This mirrors the 2015–2017 explosion of Webpack/React plugins.

**Vectorless / graph-native RAG is gaining credible traction.** `LEANN` (97 % storage savings), `PageIndex` (reasoning-based, no embeddings), and `cognee` (knowledge-graph memory) collectively signal fatigue with pure embedding retrieval: developers want **explainable, low-resource, deterministic** context injection. Expect more "hybrid" engines (graph + vector) in Q3 2026.

**Local-first voice agents just crossed a usability threshold.** Hugging Face's `speech-to-speech` (+227★ today) packages ASR→LLM→TTS with open models (Whisper, SmolLM, Kokoro) into a single `gradio` launch. Combined with `ollama`'s new model drops (Kimi-K2.6, GLM-5.2), a fully offline, privacy-preserving voice assistant is now a 5-minute setup — removing the last moat of cloud providers.

**Governance tooling is moving from "nice-to-have" to "CI gate."** Microsoft's `agent-governance-toolkit` covering 10/10 OWASP Agentic Top 10, plus `ECC`'s built-in security instincts, show enterprises demanding **policy-as-code** for autonomous agents before production deployment. This will accelerate standardization of agent SBOMs and runtime attestation.

---

## 4. Community Hot Spots

- **`affaan-m/ECC`** — The fastest-growing agent harness optimizer; its skill/memory/security abstractions are becoming the de-facto plug-in API for Claude Code, Codex, and Cursor. Watch for ecosystem plugins.
- **`bradautomates/claude-video`** — Nearly 1 k stars in 24 h proves video understanding is a **killer feature** for coding agents; expect rapid forks adding YouTube, Loom, Zoom ingestion.
- **`StarTrail-org/LEANN` / `VectifyAI/PageIndex`** — Vectorless RAG projects with novel storage/accuracy trade-offs; if they hold up on benchmarks, they could dethrone pure vector search for on-device and edge deployments.
- **`huggingface/speech-to-speech`** — Reference implementation for local voice agents; its model-agnostic pipeline will become the default stack for privacy-first voice apps.
- **`microsoft/agent-governance-toolkit`** — First major-corp governance framework mapping OWASP Agentic Top 10; likely to be adopted as a compliance baseline in regulated industries (finance, healthcare).

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*