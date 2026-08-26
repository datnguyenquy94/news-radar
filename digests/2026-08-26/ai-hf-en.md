# Hugging Face Trending Models Digest 2026-08-26

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-26 01:46 UTC

---

# Hugging Face Trending Models Digest — 2026-08-26

## Today's Highlights

The Qwen 3.8‑27B family dominates this week’s leaderboard, with the base model topping likes (12.7 K) and a massive ecosystem of community fine‑tunes (uncensored, abliterated) and quantizations (GGUF, FP8, MLX, 2‑bit) flooding the top‑30. Multimodal generation is surging: MiniMax‑H3 (4.5 K likes) and LTX‑2.5 (1.8 K likes) lead video synthesis, while MiniMax‑Music3 and Audio8‑TTS push audio frontiers. DeepSeek‑V4 Flash/Pro and Moonshot’s Kimi‑K3 signal continued momentum for Chinese‑origin LLMs, and MoE architectures (Ornith‑35B‑A3B, DeepSeek) are gaining traction. Quantization and “uncensored” fine‑tuning remain the most visible community activities, with over a dozen Qwen‑derived GGUF/FP8 variants appearing in a single week.

---

## Trending Models

### 🧠 Language Models (LLMs, chat models, instruction‑tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 12,717 | 2,945,415 | Flagship 27B‑parameter multimodal LLM supporting image‑text‑to‑text; leads the week in both likes and downloads, indicating broad adoption as a base for downstream fine‑tunes. |
| [ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 419 | 70,158 | 35B‑parameter MoE model (A3B routing) with strong text‑generation and image‑text capabilities; notable for its sparse‑expert architecture and MIT license. |
| [superwhisper/s1-mini](https://huggingface.co/superwhisper/s1-mini) | superwhisper | 238 | 3,474 | Compact Qwen‑derived model optimized for ASR and text‑generation; tiny footprint (mini) makes it attractive for on‑device speech applications. |
| [ornith-ai/Ornith-1.5-9B](https://huggingface.co/ornith-ai/Ornith-1.5-9B) | ornith-ai | 217 | 98,323 | 9B‑parameter dense sibling of the Ornith MoE series; offers solid chat and multimodal performance with a permissive MIT license. |
| [z-lab/Qwen3.8-27B-DFlash2](https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2) | z-lab | 227 | 64,984 | Qwen‑27B enhanced with DFlash2 speculative decoding for faster inference; targets latency‑sensitive deployments. |
| [incoai/Qwen3.8-27B-DFlash2](https://huggingface.co/incoai/Qwen3.8-27B-DFlash2) | incoai | 179 | 105,786 | Independent DFlash2‑accelerated variant of Qwen‑27B; higher downloads suggest community interest in speculative‑decoding speedups. |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,716 | 3,528,373 | High‑throughput Flash variant of DeepSeek‑V4; massive download count reflects production‑ready inference optimization. |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,996 | 2,865,293 | Moonshot’s latest multimodal LLM (Kimi‑K3) with compressed‑tensor support; second‑highest likes, signaling strong mindshare for Chinese‑language models. |
| [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 758 | 74,707 | Pro‑tier DeepSeek‑V4 with enhanced reasoning; lower downloads than Flash but steady interest for quality‑critical tasks. |

### 🎨 Multimodal & Generation (image, video, audio, text‑to‑X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,800 | 833,845 | Unified video generation model (image‑to‑video, text‑to‑video, video‑to‑video); high downloads indicate active experimentation in synthetic video pipelines. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,457 | 4,639,786 | State‑of‑the‑art image‑text‑to‑video model; leads multimodal category in both likes and downloads, underscoring demand for controllable video synthesis. |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,246 | 18,705 | Text‑to‑music diffusion model; niche but growing interest in AI‑generated audio with 1.2K likes despite modest downloads. |
| [Audio8/Audio8-TTS-Preview-0.1b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.1b) | Audio8 | 156 | 3,640 | Early‑preview ArkTTS‑based text‑to‑speech system; low downloads reflect preview status but tags suggest feature‑extraction capabilities. |
| [sensenova/SenseNova-U1.5-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1.5-8B-MoT) | sensenova | 154 | 2,682 | Native any‑to‑any multimodal model (Mixture‑of‑Transformers); early stage with minimal downloads but unique architecture for unified modalities. |

### 🔧 Specialized Models (code, math, medical, embeddings)

*No models in this week’s top‑30 fall clearly into code, math, medical, or embedding specializations.*

### 📦 Fine‑tunes & Quantizations (community fine‑tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 2,918 | 7,334,695 | Official Unsloth GGUF quantization of Qwen‑27B; highest downloads of any derivative, showing massive demand for CPU/edge‑friendly formats. |
| [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 751 | 389,747 | Abliterated (safety‑removed) version with MLX, GGUF, and safetensors; popular for unrestricted research use. |
| [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 1,097 | 68,855 | MLX‑optimized uncensored fine‑tune for Apple Silicon; targets local inference on Mac with full modality support. |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 1,148 | 249,744 | FP8‑quantized uncensored variant; balances model size and quality for GPU inference with reduced precision. |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 623 | 832,185 | Aggressive MTP (multi‑token prediction) fine‑tune + GGUF; high downloads indicate appetite for throughput‑optimized uncensored models. |
| [ornith-ai/Ornith-1.5-35B-A3B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF) | ornith-ai | 297 | 1,156,903 | GGUF quantization of the 35B MoE model; surprisingly high downloads for a MoE, showing community push to run large sparse models locally. |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 722 | 1,525,645 | Uncensored GGUF with llama.cpp compatibility; strong download numbers reflect broad llama.cpp ecosystem adoption. |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 452 | 154,225 | Another orcarouter GGUF uncensored release; smaller footprint than JonathanColetti’s but still actively pulled. |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,468 | 0 | Curated Jinja chat templates for Qwen models; high likes despite zero downloads (template‑only artifact) highlight developer pain‑point around chat formatting. |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 357 | 1,230,831 | Abliterated GGUF with huihui branding; over 1.2M downloads shows sustained demand for “uncensored” Qwen variants. |
| [ornith-ai/Ornith-1.5-9B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-9B-GGUF) | ornith-ai | 201 | 1,144,037 | GGUF of the 9B Ornith model; downloads rival the 35B MoE GGUF, suggesting 9B is a sweet spot for local deployment. |
| [peculiar-ragdoll/Qwen-Sharp-Chat-Templates](https://huggingface.co/peculiar-ragdoll/Qwen-Sharp-Chat-Templates) | peculiar-ragdoll | 245 | 0 | Alternative chat‑template fix for Qwen; again high likes, zero downloads, confirming templates are reference artifacts not model weights. |
| [DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 240 | 221,918 | Exotic GAIN/Cold‑Fusion trained GGUF with MTP; niche but downloaded 220K+ times, indicating experimentation with advanced fine‑tune recipes. |
| [orcarouter/Qwen3.8-27B-Uncensored](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored) | orcarouter | 183 | 15,341 | Full‑precision uncensored safetensors release; lower downloads than quantized siblings, as expected for 27B fp16/bf16 weights. |
| [EschaLabs/Qwen3.8-27B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.8-27B-Escha-W2) | EschaLabs | 127 | 2,319 | 2‑bit quantized Qwen‑27B; extreme compression research artifact with minimal adoption so far. |
| [0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF](https://huggingface.co/0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF) | 0bserverx | 277 | 735,183 | Heretic‑branded abliterated GGUF; 735K downloads show the “Heretic” line has a following for uncensored local LLMs. |

---

## Ecosystem Signal

The Qwen 3.8‑27B release has become a gravitational center for open‑weight innovation: at least 14 distinct community derivatives (uncensored, abliterated, GGUF, FP8, MLX, 2‑bit, MTP‑enhanced) appear in this week’s top‑30, collectively amassing tens of millions of downloads. This reflects a maturing pattern where a strong base model spawns a quantization/fine‑tune cambrian explosion, with GGUF remaining the dominant distribution format for local inference. Multimodal generation is diversifying rapidly—MiniMax’s H3 and Music3, Lightricks’ LTX‑2.5, and Audio8’s TTS preview demonstrate that video and audio synthesis are no longer niche; they are attracting mainstream open‑source attention. Chinese labs (Qwen, DeepSeek, Moonshot, MiniMax, SenseNova) continue to lead both base‑model releases and downstream tooling, while Western entities (Lightricks, unsloth, community fine‑tuners) focus on optimization and deployment. Notably, MoE architectures (Ornith‑35B‑A3B, DeepSeek‑V4) are gaining download traction, hinting that sparse models are becoming practical for consumer hardware via aggressive quantization. The near‑absence of code/math/medical specialists in the trending list suggests general‑purpose LLMs and generative media currently dominate mindshare over vertical specialization.

---

## Worth Exploring

1. **MiniMaxAI/MiniMax-H3** — The most liked/downloaded video generation model this week; its image‑text‑to‑video pipeline is production‑grade and open for experimentation, making it a prime candidate for anyone building video‑centric applications.
2. **unsloth/Qwen3.8-27B-GGUF** — The de‑facto standard for running a 27B LLM on consumer hardware; 7.3M downloads signal unmatched community validation, and Unsloth’s optimization toolchain ensures best‑in‑class inference speed.
3. **ornith-ai/Ornith-1.5-35B-A3B-GGUF** — A rare example of a large MoE model successfully quantized to GGUF with >1M downloads; studying its routing and quantization strategy offers insights into deploying sparse architectures locally.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*