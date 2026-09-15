# AI Open Source Trends 2026-09-15

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-09-15 04:34 UTC

---

# AI Open Source Trends Report — 2026-09-15

## 1. Today's Highlights

The AI open-source ecosystem is surging around **agent frameworks** and **local-first applications**, with eight agent-related projects appearing across both trending and search lists — including heavyweights like `affaan-m/ECC` (258k ⭐) and `NousResearch/hermes-agent` (245k ⭐). A striking wave of **first-time appearances** (🆕) dominates AI Applications: `666ghj/MiroFish` debuts at 73k stars with a swarm-intelligence prediction engine, `OpenBMB/VoxCPM` enters at 37k with tokenizer-free multilingual TTS, and `Crosstalk-Solutions/project-nomad` launches an offline knowledge server with optional local AI. Voice tooling is having a moment: `debpalash/VoiceStudio` (+2,776 ⭐ today) and `VoxCPM` both target fully-local ElevenLabs alternatives. Meanwhile, inference infrastructure continues to push hardware efficiency — `JustVugg/colibri` streams MoE experts from disk in pure C with zero dependencies, gaining 2,187 stars since yesterday.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [JustVugg/colibri](https://github.com/JustVugg/colibri) | C | 32,367 (+2,173) | 📈 +2,187 since 2026-09-14 | Pure-C, zero-dependency inference engine that streams MoE experts from disk, enabling frontier models on consumer hardware. Momentum is exceptional: +2,187 stars in one day signals intense demand for local, RAM-efficient LLM serving. |
| [asgeirtj/system_prompts_leaks](https://github.com/asgeirtj/system_prompts_leaks) | JavaScript | 66,913 (+764) | 📈 +724 since 2026-09-14 | Curated collection of extracted system prompts from Claude, GPT-6, Gemini, Grok, and more — updated regularly. Serves as a de facto reference for prompt engineering and model behavior analysis across major providers. |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 180,499 | 📈 +872 since 2026-09-13 | Scalable web scraping and search API built for LLM context retrieval; handles crawling, extraction, and interaction at scale. Steady growth (+872 in two days) reflects its role as critical plumbing for agent web access. |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 180,985 | 📈 +558 since 2026-09-08 | Local model runner supporting Kimi, GLM, DeepSeek, Qwen, Gemma, gpt-oss and more via simple CLI. Sustained momentum confirms its position as the default on-ramp for developers running open-weight models locally. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | Python | 81,508 (+651) | 📈 +3,449 since 2026-09-05 | CLI tool giving agents read/search access to Twitter, Reddit, YouTube, GitHub, Bilibili, XiaoHongShu — zero API fees. The +3.4k stars in 10 days shows explosive appetite for unrestricted web-connected agents. |
| [rlaope/oh-my-hermes](https://github.com/rlaope/oh-my-hermes) | Python | 2,162 (+77) | 🆕 new | All-in-one plugin suite for Hermes Agent: long-term memory, coding intelligence, and optimized model workflows. First appearance with 2.1k stars indicates immediate community adoption around the Hermes ecosystem. |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | Python | 106,281 (+745) | 📈 +2,182 since 2026-09-10 | Multi-agent LLM framework for financial trading with specialized roles (analyst, trader, risk manager). Consistent +2k/week growth marks it as the leading open-source agentic finance project. |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | JavaScript | 138,611 | 📈 +1,880 since 2026-09-13 | Agent framework emphasizing "lazy senior dev" philosophy — minimizing code via smart defaults and instincts. Near-140k stars and strong recent growth show resonance with developers seeking higher-level agent abstractions. |
| [zi-yue-1129/DATAGEN](https://github.com/zi-yue-1129/DATAGEN) | Python | 1,799 | 🆕 new | Multi-agent research assistant automating hypothesis generation, data analysis, and report writing. New entrant targeting the AI-for-science workflow; early stars suggest niche but focused interest. |
| [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) | Python | 47,182 | 📈 +742 since 2026-09-14 | Open-source book "Deep Understanding of AI Agents" with full text, PDF, and per-chapter code. Rapid +742 stars in one day reflects hunger for structured agent engineering knowledge. |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 258,485 | 📈 +640 since 2026-09-14 | Agent harness optimizing skills, memory, security, and research-first dev for Claude Code, Codex, Cursor, Opencode. Massive 258k stars make it the most-starred agent infrastructure project in this report. |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 245,566 | 📈 +633 since 2026-09-13 | Flagship agent from Nous Research — "the agent that grows with you" via continuous learning and personalization. 245k stars and steady growth cement its status as a community flagship for adaptive agents. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | Go | 26,197 (+1,571) | 📈 +2,469 since 2026-09-14 | Hybrid code review: deterministic pipelines + LLM agent with line-level comments, multi-language rules (NPE, XSS, SQLi), OpenAI/Anthropic compatible. Battle-tested at Alibaba scale; +2.4k stars in a day signals enterprise adoption pull. |
| [multimodal-art-projection/YuE](https://github.com/multimodal-art-projection/YuE) | Python | 8,527 (+559) | 📈 +666 since 2026-09-14 | YuE2: frontier music generation with symbolic planning, zero-shot covers, and agentic music editing. Advances controllable audio generation beyond simple prompting into structured composition. |
| [debpalash/VoiceStudio](https://github.com/debpalash/VoiceStudio) | Python | 29,576 (+2,776) | 📈 +2,306 since 2026-09-14 | Fully-local ElevenLabs alternative: voice cloning, design, video dubbing, dictation, transcription, audiobooks in 646 languages. Top daily gainer (+2,776) proves massive demand for privacy-preserving voice AI. |
| [666ghj/MiroFish](https://github.com/666ghj/MiroFish) | Python | 73,338 (+560) | 🆕 new | "Simple and Universal Swarm Intelligence Engine, Predicting Anything" — novel swarm-based prediction framework. Stunning debut at 73k stars suggests viral interest in collective-intelligence approaches to forecasting. |
| [OpenBMB/VoxCPM](https://github.com/OpenBMB/VoxCPM) | Python | 37,447 (+216) | 🆕 new | VoxCPM2: tokenizer-free TTS for multilingual speech, creative voice design, and true-to-life cloning. First appearance at 37k stars marks a major new contender in open voice synthesis. |
| [Crosstalk-Solutions/project-nomad](https://github.com/Crosstalk-Solutions/project-nomad) | TypeScript | 36,986 (+40) | 🆕 new | Offline-first knowledge/education server: Wikipedia, books, courses, maps, optional local AI — all on owned hardware, no internet. 37k stars at launch highlights the offline/local-AI movement. |
| [SnailSploit/Claude-Red](https://github.com/SnailSploit/Claude-Red) | Python | 4,864 (+579) | 📈 +617 since 2026-09-14 | Curated offensive security skills for Claude: structured SKILL.md files covering SQLi, shellcode, EDR evasion, exploit dev. Niche but fast-growing (+617 in a day), showing agent-as-red-teamer adoption. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | 61,109 | 📈 +526 since 2026-09-11 | Trains a 64M-parameter LLM from scratch in ~2 hours — minimal code, educational focus. Sustained growth confirms its role as the go-to reference for understanding LLM training fundamentals hands-on. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Python | 152,075 | 📈 +584 since 2026-09-10 | User-friendly AI interface with built-in RAG, supporting Ollama, OpenAI API, and more. 152k stars and steady growth make it the default self-hosted chat UI for RAG-enabled local AI workflows. |

---

## 3. Trend Signal Analysis

**Agent frameworks are the unequivocal center of gravity.** Eight distinct agent projects appear today — spanning infrastructure (`ECC`, `hermes-agent`, `ponytail`), vertical applications (`TradingAgents`, `Agent-Reach`, `DATAGEN`), and ecosystem tooling (`oh-my-hermes`, `ai-agent-book`). The two largest by stars (`ECC` 258k, `hermes-agent` 245k) are both agent harnesses, and both grew ~630+ stars in 1–2 days. This is not early exploration; it is compounding adoption at scale.

**First appearances (🆕) reveal new vectors that re-appearances (📈) do not.** The 🆕 cohort — `MiroFish` (swarm prediction), `VoxCPM` (tokenizer-free TTS), `project-nomad` (offline knowledge + local AI), `oh-my-hermes` (Hermes plugin ecosystem), `DATAGEN` (agentic research) — clusters around three themes: **collective intelligence architectures**, **voice as a first-class modality**, and **air-gapped/offline AI**. These are not incremental improvements; they are new product categories. By contrast, the 📈 re-appearances (`TradingAgents`, `Agent-Reach`, `VoiceStudio`, `colibri`) show existing categories deepening their moats.

**Local-first and hardware-efficient inference is mainstreaming.** `colibri` (pure C, disk-streamed MoE), `ollama`, `open-webui`, `project-nomad`, and `VoiceStudio` all enable serious AI workloads without cloud APIs or GPUs with massive VRAM. The +2,187/day velocity on `colibri` and +2,776 on `VoiceStudio` indicate developers are actively choosing local stacks over managed services for privacy, cost, and latency.

**Voice/TTS has reached a quality inflection.** Two major local voice platforms (`VoiceStudio`, `VoxCPM`) launched or surged simultaneously, both emphasizing multilingual support, cloning fidelity, and zero tokenizer constraints. This mirrors the image generation trajectory of 2022–2023: once quality crosses a threshold, application-layer explosion follows.

**Security agents are emerging as a distinct vertical.** `Claude-Red` structures offensive security as composable skills for an LLM agent — a pattern likely to generalize to pentesting, code audit, and compliance automation. The +617 stars in one day on a niche repo signals latent demand for agentic security tooling.

---

## 4. Community Hot Spots

- **`affaan-m/ECC` & `NousResearch/hermes-agent`** — The two largest agent harnesses (258k/245k ⭐) still growing ~630⭐/day. They define the current "operating system" layer for agent development; contributing or building plugins here reaches the widest audience.
- **`JustVugg/colibri`** — +2,187⭐ in 24h on a pure-C inference engine is a rare hardware-efficiency breakthrough. Develop

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*