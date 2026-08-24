# AI Open Source Trends 2026-08-23

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-08-23 01:49 UTC

---

# AI Open Source Trends Report — 2026-08-23

---

## 1. Today's Highlights

Today's GitHub trending list is dominated by **agent-centric tooling**: `mattpocock/skills` surged **+2,683 stars** in 24 hours, signaling explosive interest in reusable "skill" primitives for coding agents. OpenAI's own `codex` terminal agent added **+1,544 stars**, while Anthropic's `claude-code` and the Karpathy-inspired `andrej-karpathy-skills` (+315) confirm a convergent trend — developers are standardizing on **skill/memory frameworks** that make LLM agents reliable, composable, and portable across Cursor, Codex, OpenCode, and Claude Code. Simultaneously, infrastructure plays like `modular/modular` (Mojo/MAX) and `cursor/plugins` show the toolchain hardening around **local-first, multi-provider agent runtimes**.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [openai/codex](https://github.com/openai/codex) | Rust | 0 (+1,544) | OpenAI's lightweight coding agent that runs in the terminal; today's star surge reflects strong developer pull for a first-party, terminal-native agent that understands codebases and executes tasks via natural language. |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 242,182 (+411) | Agent harness optimization system providing skills, memory, security, and research-first tooling for Claude Code, Codex, OpenCode, and Cursor; massive total stars indicate it has become a de-facto standard layer for agent reliability. |
| [anthropics/claude-code](https://github.com/anthropics/claude-code) | Python | 0 (+127) | Anthropic's official terminal agent that reads codebases, executes routine tasks, explains code, and manages git workflows — first-party integration drives trust and adoption in professional settings. |
| [modular/modular](https://github.com/modular/modular) | Mojo | 0 (+395) | The Modular Platform (MAX & Mojo) — a next-gen AI compiler/runtime stack promising portable, high-performance model deployment; today's momentum hints at growing traction for Mojo as a CUDA-alternative language. |
| [cursor/plugins](https://github.com/cursor/plugins) | TypeScript | 0 (+286) | Official plugin specification and plugins for Cursor; rising stars show the editor's ecosystem maturing into a programmable agent platform rather than just an AI autocomplete. |
| [PostHog/posthog](https://github.com/PostHog/posthog) | Python | 0 (+286) | Self-driving product platform with AI observability, session replay, and MCP support; the "capture all context agents need" positioning makes it critical infrastructure for debugging agent behavior in production. |
| [Tencent/AI-Infra-Guard](https://github.com/Tencent/AI-Infra-Guard) | Python | 0 (+150) | Full-stack AI Red Teaming platform covering agent scanning, skills scanning, MCP scanning, infra scanning, and jailbreak evaluation — enterprise-grade security tooling for agent deployments. |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 179,209 | Local-first runner for Kimi-K2.6, GLM-5.2, DeepSeek, Qwen, Gemma, and others; remains the default on-ramp for developers running open-weight models without cloud dependencies. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [mattpocock/skills](https://github.com/mattpocock/skills) | Shell | 0 (+2,683) | Curated skill library extracted from a working `.agents` directory; today's record-breaking surge shows developers hunger for battle-tested, copy-pasteable agent primitives that work across CLI tools. |
| [obra/superpowers](https://github.com/obra/superpowers) | Shell | 0 (+592) | Agentic skills framework and software development methodology; emphasizes deterministic, repeatable agent workflows — a signal the community wants engineering rigor, not just prompt hacks. |
| [n8n-io/n8n](https://github.com/n8n-io/n8n) | TypeScript | 0 (+149) | Fair-code workflow automation with native AI capabilities, 400+ integrations, and self-host option; bridges classic automation with LLM reasoning for production-grade agent pipelines. |
| [multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills) | — | 0 (+315) | Single `CLAUDE.md` distilling Karpathy's observations on LLM coding pitfalls; rapid adoption proves developers treat expert prompt-engineering patterns as shareable, version-controlled assets. |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 234,409 | "The agent that grows with you" — long-term memory and self-improvement loops; high stars reflect sustained interest in persistent, evolving agents beyond single-session tasks. |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | Python | 186,778 | Pioneering autonomous agent framework; still a reference point for multi-step planning and tool use despite newer entrants. |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | 110,150 | Makes websites accessible to AI agents via structured DOM interaction; essential for web-acting agents and RPA-style automation. |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | TypeScript | 50,926 | AI productivity studio with smart chat, autonomous agents, and 300+ assistants; unified access to frontier LLMs in a single desktop app. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Python | 149,600 | User-friendly AI interface supporting Ollama, OpenAI API, and more; the de-facto local ChatGPT replacement for self-hosters. |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 114,667 | One-click HD short video generation from topic/keyword using LLMs + automated workflows; viral content pipeline in a repo. |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | JavaScript | 65,075 | Local-first "own your intelligence" platform with agents, RAG, and multi-model support; strong privacy positioning resonates with enterprise. |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 63,638 | LLM-powered multi-market stock analysis with real-time news, decision dashboards, and zero-cost scheduled runs; vertical agent for finance. |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 48,634 | AI turns documents/topics into native PowerPoint decks with shapes, charts, animations, and speaker-note narration; vertical agent for knowledge workers. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | C++ | 197,329 | Foundational ML framework; still the production backbone for large-scale training and serving despite PyTorch's research dominance. |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | Python | 102,547 | Default research framework with dynamic graphs and strong GPU acceleration; ecosystem gravity keeps it central to model development. |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | 54,927 | Trains a 64M-parameter LLM from scratch in ~2 hours; exceptional educational value and proof that small-model experimentation is accessible. |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | Python | 60,867 | YOLO26/11/v8 — state-of-the-art object detection, segmentation, pose, tracking; the go-to for real-time computer vision in production. |
| [keras-team/keras](https://github.com/keras-team/keras) | Python | 64,248 | High-level deep learning API running on TensorFlow/JAX/PyTorch; lowers barrier for model building and experimentation. |
| [modular/modular](https://github.com/modular/modular) | Mojo | 0 (+395) | MAX & Mojo platform — a unified AI compiler/runtime aiming to replace fragmented CUDA/PyTorch/TensorRT stacks with portable performance. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [langgenius/dify](https://github.com/langgenius/dify) | TypeScript | 153,224 | Collaborative workspace for agentic workflows and RAG pipelines with rich model/tool support; cloud/VPC/self-host flexibility drives enterprise adoption. |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Python | 149,600 | Local AI interface with built-in RAG, model management, and multi-provider support; the hub for personal knowledge-augmented chat. |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 144,791 | Agent engineering platform — the composable standard for chaining LLMs, tools, and retrieval; ecosystem depth keeps it central. |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 109,578 | Turns codebases/docs/SQL/PDFs into queryable knowledge graphs via deterministic AST parsing — no vector store, every edge explained; novel approach to code-aware RAG. |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | JavaScript | 91,534 | Persistent cross-session context for any agent: captures, compresses, and reinjects relevant history; solves the "goldfish memory" problem for CLI agents. |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 89,046 | RAG engine fusing cutting-edge retrieval with agent capabilities for a superior context layer; Go performance + agent loops = production readiness. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 63,837 | Universal memory layer for AI agents — pluggable, model-agnostic long-term memory; becoming the standard "memory protocol" for agent frameworks. |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | Python | 51,802 | Leading document agent and OCR platform; excels at structured data extraction and multi-modal RAG for complex enterprise documents. |

---

## 3. Trend Signal Analysis (≈250 words)

**Agent tooling has entered its "standard library" phase.** The single strongest signal today is the +2,683-star explosion of `mattpocock/skills` — a curated collection of `.md` skill files drawn from a working `.agents` directory. This isn't a framework; it's a **pattern library** that developers can drop into Claude Code, Codex, Cursor, or OpenCode. Combined with `obra/superpowers` (+592), `andrej-karpathy-skills` (+315), and `affaan-m/ECC` (+411 on 242k total), a clear consensus emerges: **reliable agents are built from versioned, composable skills with explicit memory, tool contracts, and security boundaries** — not from monolithic prompts.

**Multi-provider, local-first runtimes are winning.** `Wei-Shaw/sub2api` (+278) unifies Claude, OpenAI, Gemini, and Grok subscriptions behind one API; `ollama` (179k) and `open-webui` (149k) make local models frictionless; `cursor/plugins` (+286) and `anthropics/claude-code` (+127) show first-party CLI agents becoming extensible platforms. Developers want **provider-agnostic toolchains** they can self-host, audit, and extend.

**Infrastructure hardening: observability, security, compilation.** `PostHog` (+286) positions AI observability as "capture all context agents need." `Tencent/AI-Infra-Guard` (+150) introduces red-teaming for agent ecosystems (skills, MCP, infra, jailbreaks). `modular/modular` (+395) pushes Mojo/MAX as a unified compile-target — a direct challenge to the CUDA/PyTorch/TensorRT fragmentation. The stack is maturing from "make it work" to "make it safe, fast, and portable."

**Vertical agents are shipping.** `MoneyPrinterTurbo` (114k), `daily_stock_analysis` (63k), `ppt-master` (48k) prove that domain-specific agents with automated workflows (video, finance, slides) are high-value, high-adoption products — not demos.

---

## 4. Community Hot Spots

- **`mattpocock/skills`** — The fastest-growing AI repo today (+2.7k/24h). Treat this as the **emerging standard library for agent skills**; contribute or fork to define your team's agent primitives.
- **`affaan-m/ECC`** — 242k stars and still growing. The **de-facto harness** for making Claude Code, Codex, and Cursor agents production-grade (memory, security, research loops). Essential infrastructure.
- **`Graphify-Labs/graphify`** — 109k stars for a **codebase-to-knowledge-graph** approach that avoids vector stores entirely. If you build dev-tools or code-aware agents, study its deterministic AST-parsing architecture.
- **`modular/modular` (Mojo/MAX)`** — +395 stars today on a compiler/runtime play. **Watch Mojo adoption** — if it delivers portable GPU performance without CUDA lock-in, it reshapes the inference stack.
- **`thedotmack/claude-mem`** — 91k stars for **cross-session persistent memory** that works across *any* agent (Claude Code, Codex, OpenCode, Gemini, Copilot…). The memory layer is becoming a shared protocol; this is the leading implementation.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*