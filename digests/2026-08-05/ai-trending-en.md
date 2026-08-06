# AI Open Source Trends 2026-08-05

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-08-05 03:18 UTC

---

# AI Open Source Trends Report — 2026-08-05

---

## 1. Today's Highlights

Today's trending list is dominated by **agent infrastructure and memory tooling**, with three projects gaining >1,000 stars in 24 hours: `firecrawl/pdf-inspector` (+2,540), a Rust library that classifies PDFs for smart LLM routing; `zhaoxuya520/reverse-skill` (+2,297), an AI-powered security skill router for reverse engineering; and `lyogavin/airllm` (+1,711), enabling 70B-parameter inference on a single 4 GB GPU. Tencent's `TencentDB-Agent-Memory` (+1,111) frames agent memory as governed, shareable assets (Chat Memory, Skill, LLM-Wiki, Code-Graph), signaling enterprise readiness. Meanwhile, `esengine/DeepSeek-Reasonix` (+922) and `livekit/agents` (+432) show momentum around DeepSeek-native coding agents and realtime voice agents respectively — both reflecting the shift from chat to **persistent, tool-using, multi-modal agents**.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 177,802 | The de-facto local LLM runtime; one-command model pulls (Kimi-K2.6, GLM-5.2, DeepSeek, Qwen, Gemma) and cross-platform GPU acceleration make it the default inference backend for desktop agents. |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | Python | 88,204 | High-throughput, memory-efficient LLM serving engine with PagedAttention; production standard for cloud inference, now supporting speculative decoding and multi-LoRA. |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 161,126 | "Context API for the web" — scalable search, scrape, and extract endpoints purpose-built for RAG and agent tooling; managed cloud + self-hosted parity. |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 143,438 | The agent engineering platform: composable chains, tools, memory, and the LangGraph runtime for stateful, multi-agent workflows; broadest ecosystem integrations. |
| [langgenius/dify](https://github.com/langgenius/dify) | TypeScript | 151,358 | Visual, collaborative workspace for agentic workflows and RAG pipelines; supports 100+ models, plugin marketplace, and one-click deployment (cloud/VPC/self-hosted). |
| [livekit/agents](https://github.com/livekit/agents) | Python | — (+432) | Realtime voice AI agent framework with WebRTC transport, turn detection, and pluggable LLM/TTS/STT; powers production voice assistants at scale. |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | Go | 30,891 (+922) | DeepSeek-native terminal coding agent engineered around prefix-cache stability; designed for long-running, autonomous development sessions. |
| [firecrawl/pdf-inspector](https://github.com/firecrawl/pdf-inspector) | Rust | — (+2,540) | Lightning-fast PDF classification (scanned vs. text-based) and extraction; enables smart routing decisions in RAG pipelines before expensive LLM calls. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | Python | 185,817 | The original autonomous agent vision; now a modular platform with benchmarking, marketplace, and cloud runtime for continuous task execution. |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | 107,890 | Makes any website accessible to agents via deterministic DOM interaction; the standard "hands" for web-based automation and research agents. |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 225,575 | "The agent that grows with you" — persistent memory, skill acquisition, and self-improvement loops; emphasizes long-term personalization. |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Python | 51,381 | Leading document agent and OCR platform; unifies ingestion, indexing, retrieval, and tool-use for knowledge-intensive agents. |
| [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) | TypeScript | — (+1,111) | Enterprise-grade memory hub: governs Chat Memory, Skills, LLM-Wiki, and Code-Graph as versioned, shareable assets across agents and frameworks. |
| [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) | Go | 30,891 (+922) | DeepSeek-optimized coding agent with prefix-cache stability; runs continuously in-terminal, autonomously editing, testing, and committing. |
| [livekit/agents](https://github.com/livekit/agents) | Python | — (+432) | Voice-first agent framework: WebRTC, VAD, turn-taking, and multi-modal tool use; bridges telephony, web, and SIP for realtime conversational AI. |
| [browser-use/video-use](https://github.com/browser-use/video-use) | Python | — (+320) | Extends browser-use to video editing — agents can cut, caption, composite, and render programmatically via code generation. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Python | 147,869 | Feature-rich, self-hosted AI chat interface supporting Ollama, OpenAI API, RAG, tools, and multi-user workspaces; the "Linux desktop" of local LLMs. |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | TypeScript | 49,416 | Unified productivity studio: smart chat, 300+ pre-built assistants, autonomous agents, and model-agnostic frontend for frontier LLMs. |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 101,629 | One-click HD short video generation from topic/keyword; automated script → TTS → visuals → rendering pipeline for content creators. |
| [siyuan-note/siyuan](https://github.com/siyuan-note/siyuan) | TypeScript | 45,627 | Privacy-first, self-hosted PKM with block-based editing, bidirectional links, and native AI plugins (RAG, writing, analysis). |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 43,045 | Generates native .pptx decks (shapes, animations, charts, speaker-note audio) from documents or prompts; template-aware and brand-compliant. |
| [lyogavin/airllm](https://github.com/lyogavin/airllm) | Jupyter Notebook | — (+1,711) | Runs 70B models on a single 4 GB GPU via layer-wise offloading and quantization; democratizes frontier-model inference on consumer hardware. |
| [browser-use/video-use](https://github.com/browser-use/video-use) | Python | — (+320) | Coding agents edit video: timeline manipulation, effects, captions, and rendering via generated Python/FFmpeg — "Premiere Pro via CLI." |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | C++ | 196,804 | Google's production-grade ML framework; TF 2.x with Keras core, XLA compilation, and massive ecosystem (TF Lite, TF.js, TFX). |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 163,340 | The model-definition hub: 1,000+ architectures, unified API for text/vision/audio/multimodal, trainers, PEFT/LoRA, and Optimum for export. |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | Python | 102,186 | Dynamic neural networks with strong GPU acceleration; foundation for research and production (TorchScript, TorchInductor, FSDP). |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 177,802 | Local LLM runtime bundling model weights, quantization, and inference server; zero-config GPU acceleration across macOS/Linux/Windows. |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | Python | 88,204 | PagedAttention-based serving engine; 2–4× throughput vs. HF TGI, supports continuous batching, prefix caching, and multi-LoRA. |
| [lyogavin/airllm](https://github.com/lyogavin/airllm) | Jupyter Notebook | — (+1,711) | 70B inference on 4 GB VRAM via sequential layer loading and 4-bit quantization; proof that memory-bound inference is solvable on edge devices. |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | Python | 60,210 | YOLO26/11/v8 family — unified API for detection, segmentation, pose, tracking, classification; export to ONNX, TensorRT, CoreML, TFLite. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 86,840 | Enterprise RAG engine fusing deep document understanding (layout, tables, formulas) with agentic reasoning; supports complex unstructured data. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 62,540 | Universal

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*