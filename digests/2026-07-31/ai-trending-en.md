# AI Open Source Trends 2026-07-31

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-07-31 03:37 UTC

---

# AI Open Source Trends Report — 2026-07-31

## 1. Today's Highlights

The GitHub trending list is dominated by **agent harnesses and local-first AI tooling**. `different-ai/openwork` (+915★) and `affaan-m/ECC` (+804★) lead today's surge, signaling strong developer appetite for open, extensible alternatives to proprietary coding agents. Hugging Face's `speech-to-speech` (+628★) reflects accelerating interest in **local voice agents** that run fully offline. Meanwhile, the topic search reveals a maturing **RAG/vector database ecosystem** — Milvus, Qdrant, Weaviate, and newer entrants like LEANN (97% storage savings) and PageIndex (vectorless RAG) are pushing retrieval beyond naive similarity search. Education remains a quiet force: Microsoft's `AI-For-Beginners` and `ML-For-Beginners` together pull >300★ today, confirming sustained onboarding demand.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure
| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 177,359 | The de-facto standard for local LLM inference; adds new models (Kimi-K2.6, GLM-5.2, gpt-oss) within days of release. |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 163,187 | Universal model-definition framework covering text, vision, audio, and multimodal — the backbone of open-source ML. |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | C++ | 196,617 | Google's production-grade ML framework; still the reference for large-scale training and serving pipelines. |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | Python | 102,080 | Research-first dynamic-graph framework; dominant in academia and increasingly in production via TorchServe/TorchCompile. |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 143,052 | Agent engineering platform with first-class tool-calling, memory, and multi-agent orchestration primitives. |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 158,407 | Scalable web scraping/search API purpose-built for LLM consumption; handles JS rendering, anti-bot, and structured extraction. |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | TypeScript | 36,378 | Frontend stack for embedding agents in React/Angular/Slack; introduces the AG-UI protocol for standardized agent–UI communication. |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Python | 63,444 | Token compression library/proxy/MCP server cutting 20–95% tokens for coding agents with near-lossless answer quality. |

### 🤖 AI Agents / Workflows
| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 222,956 | Flagship open agent that "grows with you" — persistent memory, self-improvement loops, and multi-tool reasoning. |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 236,291 (+804) | Agent harness optimizer adding skills, instincts, memory, and security layers for Claude Code, Codex, Cursor, Opencode. |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | Python | 185,753 | The original autonomous agent vision; now a modular platform for building, sharing, and running agent workflows. |
| [langgenius/dify](https://github.com/langgenius/dify) | TypeScript | 150,851 | Visual canvas for agentic workflows + RAG pipelines; one-click deploy to cloud/VPC/self-hosted — bridging prototype to production. |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | 107,352 | Makes any website programmatically accessible to agents; handles auth, pagination, and dynamic content reliably. |
| [different-ai/openwork](https://github.com/different-ai/openwork) | TypeScript | 0 (+915) | Fully open-source "Claude Cowork" alternative powered by opencode; emphasizes hackable, local-first agent collaboration. |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | TypeScript | 55,052 | Drag-and-drop agent builder with 100+ integrations; lowers the barrier for non-coders to compose LLM workflows. |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | Python | 0 (+378) | Research agent skill that synthesizes grounded summaries from Reddit, X, YouTube, HN, Polymarket, and the open web. |

### 📦 AI Applications
| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [huggingface/speech-to-speech](https://github.com/huggingface/speech-to-speech) | Python | 0 (+628) | Local voice agent stack (ASR → LLM → TTS) with sub-second latency; runs entirely on-device, no API keys required. |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Python | 147,399 | Polished, self-hosted ChatGPT-style UI supporting Ollama, OpenAI-compatible APIs, RAG, and multi-user workspaces. |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | TypeScript | 49,175 | All-in-one productivity studio: 300+ prebuilt assistants, autonomous agents, and unified access to frontier models. |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 100,683 | One-click HD short video generation from a topic/keyword — script, voiceover, subtitles, B-roll, and rendering automated. |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | JavaScript | 64,143 | Local-first "private ChatGPT" with agents, RAG, and multi-model support; desktop + Docker deployment in minutes. |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | Python | 60,062 | YOLO26/11/v8 family — state-of-the-art object detection, segmentation, pose, tracking, and classification in a single pip install. |
| [siyuan-note/siyuan](https://github.com/siyuan-note/siyuan) | TypeScript | 45,513 | Privacy-first, self-hosted knowledge base with block-level editing, bidirectional links, and built-in AI copilot. |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 42,060 | Turns any document or topic into a native .pptx with charts, animations, speaker-note audio, and custom templates. |

### 🧠 LLMs / Training
| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*