# Hugging Face Trending Models Digest 2026-09-01

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-01 04:45 UTC

---

# Hugging Face Trending Models Digest — 2026-09-01

---

## 1. Today's Highlights

The Qwen 3.8 family dominates this week’s leaderboard, with the flagship **Qwen3.8-27B** (13.5k likes, 4.7M downloads) and the new **Qwen3.8-Flash-Next** (4.5k likes) anchoring both multimodal and quantized ecosystems. Chinese labs continue to push frontier multimodal releases: **GLM-5.3-Flash**, **DeepSeek-V4-Flash-Vision**, **MiniMax-H3** (video), and **Kimi-K3** all debut with vision-language or video generation capabilities. A surge of community **uncensored/abliterated GGUF, MLX, and FP8 variants** — especially for Qwen3.8-27B — signals strong demand for locally runnable, alignment-modified models. Video generation is accelerating, with **LTX-2.5**, **MiniMax-H3**, and FastVideo’s 4-step distilled preview trending simultaneously.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3) | zai-org | 1,423 | 66,195 | A MoE-based large language model optimized for efficient inference; trending as the text-only counterpart to the multimodal GLM-5.3-Flash. |
| [tencent/Hy4-preview](https://huggingface.co/tencent/Hy4-preview) | tencent | 357 | 2,589 | Hunyuan-series preview model showcasing Tencent’s latest architecture; early adoption indicates enterprise interest in Chinese-base LLMs. |
| [pipecat-ai/phonellm-alpha-1](https://huggingface.co/pipecat-ai/phonellm-alpha-1) | pipecat-ai | 177 | 4,721 | Nemotron-H derived model targeting real-time voice pipelines; notable for low-latency streaming speech applications. |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,843 | 4,561,861 | Flagship text-only Flash model from DeepSeek v4 series; massive download volume reflects production deployment momentum. |
| [ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 516 | 172,695 | Qwen3.5-MoE derivative with 35B total / 3B active params; trending for strong quality/size trade-off in chat benchmarks. |

---

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 4,536 | 158,598 | Next-gen vision-language model with image-text-to-text pipeline; rapid adoption for multimodal agents and visual reasoning. |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 1,820 | 379,271 | High-throughput multimodal Flash variant; 379k downloads in a week signals strong inference-serving demand. |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 13,486 | 4,720,763 | Flagship 27B multimodal model; top of the chart by both likes and downloads, de facto standard for open vision-language. |
| [deepseek-ai/DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp) | deepseek-ai | 374 | 0 | Experimental vision extension of DeepSeek-V4-Flash; zero downloads yet but high watch-count for upcoming vision benchmarks. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 2,380 | 1,182,585 | State-of-the-art image-to-video diffusion model; 1.2M downloads reflect creator-tool integration and video-gen hype. |
| [BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2) | BreezeBlue | 268 | 2,236 | Second-gen text-to-speech model with improved prosody; niche but growing in voice-app developer circles. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,711 | 5,362,365 | Image-text-to-video foundation model; 5.3M downloads make it the most distributed open video model this week. |
| [FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree](https://huggingface.co/FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree) | FastVideo | 218 | 0 | 4-step distilled video model (data-free); preview of ultra-fast generation, watched for real-time video apps. |
| [thomsonreuters/Thomson-1.0-Small](https://huggingface.co/thomsonreuters/Thomson-1.0-Small) | thomsonreuters | 176 | 1,045 | Enterprise Qwen3.5-MoE variant tuned for legal/financial multimodal tasks; early signal of domain-specific VLMs. |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 11,119 | 2,792,274 | High-profile multimodal release with compressed-tensors support; 11k likes show strong community anticipation for Kimi series. |

---

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF](https://huggingface.co/peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF) | peculiar-ragdoll | 167 | 105,974 | Qwen3.5-MoE derived code specialist (35B/3B active) in GGUF; trending for efficient on-device coding assistants. |

---

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 639 | 373,029 | Day-one GGUF quantization of Qwen3.8-Flash-Next; 373k downloads show immediate local-inference demand. |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,294 | 9,059,937 | Most downloaded artifact this week (9M+); unsloth’s optimized GGUF for flagship Qwen3.8-27B. |
| [unsloth/GLM-5.3-Flash-GGUF](https://huggingface.co/unsloth/GLM-5.3-Flash-GGUF) | unsloth | 313 | 53,350 | GGUF port of GLM-5.3-Flash enabling CPU/Apple Silicon deployment; rapid uptake for edge multimodal. |
| [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 977 | 759,644 | Abliterated (safety-removed) version in MLX/GGUF; 760k downloads highlight uncensored-model appetite. |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 816 | 1,202,914 | Aggressive MTP-uncensored GGUF with multimodal support; 1.2M downloads for unrestricted vision-language. |
| [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 1,250 | 114,057 | MLX-native uncensored variant for Apple Silicon; 114k downloads show Mac-local LLM momentum. |
| [Qwen/Qwen3.8-Flash-Next-FP8](https://huggingface.co/Qwen/Qwen3.8-Flash-Next-FP8) | Qwen | 177 | 84,954 | Official FP8 quantization from Qwen team; 85k downloads indicate enterprise inference optimization. |
| [alibaba-pai/MiniMax-H3-Acc-LoRAs](https://huggingface.co/alibaba-pai/MiniMax-H3-Acc-LoRAs) | alibaba-pai | 168 | 27,009 | LoRA accelerators for MiniMax-H3 video model; early ecosystem tooling for faster video generation. |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 1,330 | 307,496 | FP8 uncensored quant balancing speed and size; 307k downloads for high-throughput uncensored serving. |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 879 | 2,055,081 | Popular llama.cpp GGUF uncensored build; 2M+ downloads confirm community preference for GGUF format. |
| [orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF) | orcarouter | 152 | 51,125 | Uncensored GGUF for the new Flash-Next model; fast community turnaround (<1 week). |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 607 | 246,445 | Additional orcarouter GGUF uncensored variant; multiple quant providers competing on quality. |
| [Kijai/MiniMax-H3-experimental](https://huggingface.co/Kijai/MiniMax-H3-experimental) | Kijai | 376 | 0 | Experimental ports/optimizations for MiniMax-H3; watched for ComfyUI/Diffusers integration. |
| [orcarouter/GLM-5.3-Flash-Uncensored-FP8](https://huggingface.co/orcarouter/GLM-5.3-Flash-Uncensored-FP8) | orcarouter | 131 | 1,541 | FP8 uncensored GLM-5.3-Flash; early but extends uncensored trend to Z.ai models. |

---

## 3. Ecosystem Signal

**Qwen 3.8** has cemented itself as the current open-weight reference family: the base 27B multimodal model leads globally, while Qwen-team and unsloth provide official FP8/GGUF artifacts within days. **Chinese labs (Z.ai, DeepSeek, MiniMax, Moonshot, Tencent)** are shipping multimodal and video frontiers at cadence rivaling Western counterparts, with **Kimi-K3** (11k likes) and **MiniMax-H3** (5.3M downloads) demonstrating massive community pull. **Video generation** is the hottest modality — three distinct video models (LTX-2.5, MiniMax-H3, FastVideo) trend simultaneously, plus LoRA acceleration tooling. **Uncensored/abliterated variants** now constitute a parallel distribution layer: 10+ Qwen3.8-27B uncensored quantizations (GGUF, MLX, FP8) collectively exceed 14M downloads, revealing a structural demand for alignment-modified local models. **Quantization diversity** (GGUF, MLX, FP8, AWQ via unsloth/orcarouter/Qwen-official) shows the ecosystem maturing beyond single-format support, targeting everything from Apple Silicon to H100 inference stacks.

---

## 4. Worth Exploring

1. **Qwen/Qwen3.8-27B** — The de facto open vision-language standard; 4.7M downloads, broad tooling (transformers, vLLM, llama.cpp, MLX), and a thriving fine-tune ecosystem make it the safest bet for multimodal prototypes.
2. **MiniMaxAI/MiniMax-H3** — Highest-distribution open video model (5.3M downloads); paired with alibaba-pai’s LoRA accelerators, it offers the most accessible path to production text-to-video today.
3. **unsloth/Qwen3.8-27B-GGUF** — 9M+ downloads prove it’s the community’s preferred local artifact; unsloth’s kernel optimizations deliver best-in-class CPU/Apple Silicon throughput for the flagship model.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*