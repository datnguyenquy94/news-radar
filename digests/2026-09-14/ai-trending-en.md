# AI Open Source Trends 2026-09-14

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-09-14 04:33 UTC

---

# AI Open Source Trends Report — 2026-09-14

---

## 1. Today's Highlights

VoiceStudio surged **+9,106 stars since Sept 5** (and +2,632 today) as a fully-local ElevenLabs alternative covering 646 languages, signaling explosive demand for private voice AI. OpenMontage accumulated **+4,429 stars since Aug 30** as the first open-source agentic video production studio, carving a new category. A cluster of **agent skill registries** debuted or accelerated — `agent-skills` (🆕), `Claude-Red` (+576), `caveman` (+637), `ECC` (+654) — reflecting a shift from monolithic agents to composable, validated skill ecosystems. Alibaba's `open-code-review` entered at **23.7k stars** (🆕), bringing battle-tested hybrid deterministic+LLM code review to the community. Meanwhile, `colibri` (+2,656 since Sept 11) demonstrates running frontier MoE models on consumer hardware via a zero-dependency C engine.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [JustVugg/colibri](https://github.com/JustVugg/colibri) | C | 30,180 (+868) | 📈 +2,656 since 2026-09-11 | Pure C, zero-dependency inference engine that streams MoE experts from disk, enabling frontier models on consumer hardware. Momentum reflects intense interest in local, quantization-free MoE serving. |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | JavaScript | 66,189 (+706) | 📈 +675 since 2026-09-13 | Curated collection of extracted system prompts for Claude, GPT, Gemini, Grok, and more. Acts as a de-facto reference for prompt engineering and model behavior analysis across vendors. |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 165,617 (+152) | 📈 +694 since 2026-09-07 | Foundational model-definition framework for text, vision, audio, and multimodal models. Steady growth confirms its status as the default backbone for open-source LLM adoption. |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | C++ | 200,064 | 📈 +727 since 2026-09-08 | End-to-end ML platform spanning training, inference, and deployment. Consistent uptake shows continued enterprise reliance alongside newer frameworks. |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | Go | 105,410 | 📈 +637 since 2026-09-11 | Claude Code skill that cuts ~65% token usage by enforcing terse "caveman" communication. Novel approach to inference cost reduction; high stars indicate viral developer adoption. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [tech-leads-club/agent-skills](https://github.com/tech-leads-club/agent-skills) | TypeScript | 5,752 (+265) | 🆕 new | Secure, validated skill registry for professional AI coding agents (Antigravity, Claude Code, Cursor, Copilot). First-mover in standardizing agent extensibility with supply-chain security. |
| [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) | Python | 58,626 (+380) | 📈 +4,429 since 2026-08-30 | Agentic video production system with 12 pipelines, 100+ tools, and 700+ skill/knowledge files. Turns coding assistants into full video studios; unmatched scope in open-source media automation. |
| [vxcontrol/pentagi](https://github.com/vxcontrol/pentagi) | Go | 24,088 (+590) | 📈 +564 since 2026-09-13 | Fully autonomous AI agent system for complex penetration testing. Demonstrates high-stakes, multi-step agent autonomy in a security context; strong daily gains show practitioner trust. |
| [alphaXiv/OpenResearch](https://github.com/alphaXiv/OpenResearch) | Rust | 2,184 (+289) | 📈 +835 since 2026-09-12 | Parallel research agents that work with any model. Rust core suggests performance focus for large-scale literature synthesis and hypothesis generation. |
| [SnailSploit/Claude-Red](https://github.com/SnailSploit/Claude-Red) | Python | 4,247 (+506) | 📈 +576 since 2026-09-13 | Curated offensive-security skill library for Claude (SQLi, shellcode, EDR evasion, exploit dev). Shows demand for domain-specialized, structured agent skills in red-teaming. |
| [jihe520/MathModelAgent](https://github.com/jihe520/MathModelAgent) | Python | 5,424 (+246) | 📈 +527 since 2026-09-12 | Agent + skills purpose-built for mathematical modeling competitions; auto-generates submission-ready papers. Niche vertical with strong traction in Chinese academic community. |
| [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | Python | 137,996 | 📈 +735 since 2026-09-12 | Canonical curated list of 100+ AI agents, agent skills, and RAG apps. Sustained growth confirms its role as the primary discovery hub for practitioner-built agent tooling. |
| [langgenius/dify](https://github.com/langgenius/dify) | TypeScript | 155,638 | 📈 +532 since 2026-09-09 | Collaborative platform for agentic workflows and RAG pipelines with broad model/tool support. Enterprise-grade self-hosting option drives steady adoption in production teams. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | Python | 27,270 (+2,632) | 📈 +9,106 since 2026-09-05 | Fully-local ElevenLabs alternative: voice cloning, design, dubbing, dictation, transcription, audiobooks in 646 languages. Explosive growth marks it as the leading open voice-AI stack. |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | Go | 23,728 (+443) | 🆕 new | Hybrid deterministic+LLM code review with precise line-level comments, multi-language ruleset (NPE, thread-safety, XSS, SQLi), OpenAI/Anthropic compatible. Enterprise provenance at Alibaba scale. |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 123,317 | 📈 +759 since 2026-09-12 | One-click HD short video generation from topic/keyword using LLMs and automated workflows. Massive established base with steady growth; de-facto standard for AI video content pipelines. |
| [multimodal-art-projection/YuE](https://github.com/multimodal-art-projection/YuE) | Python | 7,861 (+487) | 📈 +503 since 2026-09-13 | YuE2: frontier music generation with symbolic planning, zero-shot covers, and agentic editing. Pushes music AI beyond generation into structured composition and iterative refinement. |
| [melgarafael/DeskcommCRM](https://github.com/melgarafael/DeskcommCRM) | TypeScript | 2,286 (+432) | 📈 +423 since 2026-09-13 | Self-hosted AI sales OS: CRM with native agents + WhatsApp (WAHA), MCP-ready, multi-tenant, LGPD compliant. Targets chat-centric SMBs as open alternative to Kommo/Intercom. |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | Python | 33,384 | 📈 +517 since 2026-09-07 | Personal trading agent framework. Combines LLM reasoning with market data for autonomous strategy execution; notable for bringing agent patterns to quant finance. |
| [asukaminato0721/telegram-summary-bot](https://github.com/asukaminato0721/telegram-summary-bot) | TypeScript | 197 | 🆕 new | Telegram group summarizer with LLM Q&A, image/link metadata, reply threading, auto-folding, Chinese retrieval. Lightweight, deploy-free utility showing LLM integration in messaging. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [RyanLiu112/Awesome-Process-Reward-Models](https://github.com/RyanLiu112/Awesome-Process-Reward-Models) |  | 180 | 🆕 new | Comprehensive collection of process reward models (PRMs) for step-wise LLM reasoning supervision. Emerging resource as PRMs gain traction for improving chain-of-thought reliability. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Python | 71,944 | 📈 +539 since 2026-09-11 | Compresses tool outputs, logs, files, and RAG chunks before LLM ingestion — 20% fewer tokens for coding agents, 60–95% for JSON. Library, proxy, and MCP server forms; direct ROI on inference cost. |

---

## 3. Trend Signal Analysis

**Explosive community attention** is concentrating in three zones: **local-first inference** (colibri, VoiceStudio), **agent skill ecosystems** (agent-skills, Claude-Red, ECC, caveman), and **agentic vertical applications** (OpenMontage, MoneyPrinterTurbo, Vibe-Trading). The skill registries signal a maturation from "build an agent" to "compose verified, secure capabilities" — mirroring the package-manager evolution in traditional software. **New tech stacks** are appearing: Rust for agent orchestration (OpenResearch), pure C for zero-dependency MoE serving (colibri), and Go for security-focused agents (pentagi, open-code-review). **Connection to recent LLM releases** is explicit: system_prompts_leaks tracks Claude Fable 5.1, Opus 5, GPT-6-Astra, Gemini 3.8; caveman and agent-skills target Claude Code/Cursor/Copilot integrations; YuE2 advances music generation post-Suno/Udio. **🆕 first appearances** (agent-skills, open-code-review, telegram-summary-bot, Awesome-Process-Reward-Models) reveal fresh entrant directions — skill marketplaces, enterprise code review, messaging bots, PRM curation — while **📈 re-appearances** (OpenMontage +4,429, VoiceStudio +9,106, colibri +2,656) compound on proven traction, indicating these are not hype cycles but sustained building momentum. Absence from the lists means unchanged, not decline.

---

## 4. Community Hot Spots

- **VoiceStudio** — Open voice AI with 646-language coverage and +9k stars in 9 days; the clear leader for local, private speech workflows.
- **OpenMontage** — Only open-source agentic video production studio; 700+ skills/pipelines create a defensible moat in AI media.
- **Agent skill ecosystem** (agent-skills, ECC, Claude-Red, caveman) — Converging on composable, validated capabilities for coding agents; the next abstraction layer after frameworks.
- **colibri** — Zero-dep C engine streaming MoE experts from disk; if it delivers, it rewrites local inference economics for frontier models.
- **alibaba/open-code-review** — Enterprise-grade hybrid code review at 23k stars day-one; brings production battle-testing to open-source AI dev tools.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*