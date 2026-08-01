# Hugging Face Trending Models Digest 2026-08-01

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-01 03:36 UTC

---

# Hugging Face Trending Models Digest — 2026-08-01

## Today's Highlights

Moonshot AI's **Kimi-K3** dominates the leaderboard with 9,294 weekly likes, signaling strong community interest in next-generation multimodal models from Chinese labs. DeepSeek's V4 Flash series appears in multiple forms (base, GGUF, 0731 variant), reflecting rapid iteration and broad adoption of their efficient MoE architecture. A notable trend is the explosion of **Qwen3.6 35B-A3B MoE community fine-tunes and GGUF quantizations**—seven distinct entries from creators like DavidAU, LuffyTheFox, HauhauCS, and EschaLabs—showcasing vibrant open-weight ecosystem activity. Microsoft shipped three diverse models this week (Fara1.5-27B, Mage-VL, VibeVoice-ASR-BitNet), spanning computer-use agents, multimodal VL, and bitnet ASR. Specialized tooling models—Baidu's Unlimited-OCR (2.5M downloads) and Owensong's edge-optimized Inflect TTS—demonstrate growing demand for production-ready niche capabilities.

---

## Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 1,927 | 2,923,499 | Flagship MoE model with 2.9M downloads; excels at coding, reasoning, and long-context tasks with efficient inference via MLA and DeepSeekMoE architecture. |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,712 | 1,651,533 | Z.ai's latest MoE model using DSA (Dynamic Sparse Attention); strong bilingual (EN/ZH) conversational and reasoning performance with 4.7K likes. |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 1,064 | 0 | July 31st refresh of V4 Flash; arxiv:2606.19348 documents improved training stability and benchmark gains over prior checkpoint. |
| [upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B) | upstage | 714 | 12,911 | Massive 250B parameter open-weight model; depth-upscaled from Llama architecture for superior instruction following and knowledge retention. |
| [poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 864 | 76,212 | Code-specialized LLM optimized for software engineering workflows; strong repository-level understanding and test-generation capabilities. |
| [Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 596 | 26,928 | Compact 3B model punching above weight class; optimized for Chinese/English bilingual tasks with efficient deployment footprint. |
| [XYZAILab/XYZ-Aquila-pro](https://huggingface.co/XYZAILab/XYZ-Aquila-pro) | XYZAILab | 327 | 869 | Pro-tier MoE model with agentic search capabilities; integrates tool-use and retrieval for complex multi-step reasoning. |
| [XYZAILab/XYZ-Aquila-mini](https://huggingface.co/XYZAILab/XYZ-Aquila-mini) | XYZAILab | 353 | 579 | Lightweight MoE variant sharing Aquila-pro architecture; suitable for edge deployment with retained reasoning quality. |
| [EschaLabs/Qwen3.6-35B-A3B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2) | EschaLabs | 108 | 599 | Community fine-tune of Qwen3.6 MoE focusing on instruction adherence and reduced refusal rates; mixture-of-experts efficiency. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 9,294 | 493,481 | Week's breakout multimodal model; unified image-text understanding and generation with compressed-tensors optimization for deployment. |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,664 | 2,513,603 | Production-grade OCR model handling arbitrary layouts, languages, and resolutions; 2.5M downloads reflect enterprise adoption. |
| [thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | 1,664 | 57,259 | Versatile vision-language model with strong document understanding and visual reasoning; 1.6K likes indicate community enthusiasm. |
| [microsoft/Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B) | microsoft | 235 | 2,726 | Computer-use agent model combining vision, planning, and tool execution; designed for GUI automation and desktop interaction. |
| [microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL) | microsoft | 152 | 5,650 | Multimodal foundation model with unified image-text encoding; targets retrieval, captioning, and VQA with efficient architecture. |
| [thinkingmachines/Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small) | thinkingmachines | 198 | 2,971 | Distilled variant of Inkling retaining core multimodal capabilities at reduced compute; suitable for latency-sensitive applications. |
| [unsloth/Kimi-K3](https://huggingface.co/unsloth/Kimi-K3) | unsloth | 216 | 1,044 | Unsloth-optimized Kimi-K3 build with accelerated training/inference kernels; drop-in compatible with original weights. |
| [Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 152 | 2,481 | Compact 0.6B TTS model (ArkTTS architecture) for real-time speech synthesis; early preview with promising naturalness. |
| [owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2) | owensong | 348 | 1,449 | Edge-optimized TTS for CPU deployment; micro footprint with controllable prosody and multilingual support. |
| [owensong/Inflect-Nano-v2](https://huggingface.co/owensong/Inflect-Nano-v2) | owensong | 121 | 802 | Ultra-lightweight TTS variant (Nano) targeting microcontroller-class devices; 802 downloads show early embedded adoption. |
| [Comfy-Org/Mage-Flow](https://huggingface.co/Comfy-Org/Mage-Flow) | Comfy-Org | 107 | 60,162 | Diffusion model integrated with ComfyUI workflow ecosystem; MIT-licensed base for image generation pipelines. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 371 | 10,241 | Code-specialized MoE (Qwen3.5-MoE base) with image-text-to-text capability; targets full-stack development with visual context. |
| [microsoft/VibeVoice-ASR-BitNet](https://huggingface.co/microsoft/VibeVoice-ASR-BitNet) | microsoft | 135 | 5,464 | BitNet-quantized ASR model from VibeVoice series; 1-bit weights enable ultra-efficient speech recognition on edge hardware. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,207 | 1,835,931 | Aggressively uncensored Qwen3.6 MoE GGUF; 1.8M downloads show massive demand for unrestricted vision-language models. |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,153 | 1,119,057 | Feature-packed GGUF with MTP, NEO imatrix quantization, and Heretic merge; 1.1M downloads for creative writing and roleplay. |
| [prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 1,125 | 712,835 | Pioneering 2-bit ternary quantization (GGUF/llama.cpp); 712K downloads prove viability of extreme compression for 27B models. |
| [LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF) | LuffyTheFox | 273 | 212,426 | Genesis-Hermes V6 merge on Qwen3.6 MoE; GGUF format with uncensored alignment for open-ended generation. |
| [nota-ai/Solar-Open2-250B-Nota-NVFP4](https://huggingface.co/nota-ai/Solar-Open2-250B-Nota-NVFP4) | nota-ai | 151 | 18,531 | NVFP4 quantization of 250B Solar-Open2 for vLLM deployment; enables massive model inference on 4-8 GPU nodes. |
| [unsloth/Kimi-K3-GGUF](https://huggingface.co/unsloth/Kimi-K3-GGUF) | unsloth | 229 | 36,180 | Unsloth's GGUF conversion of Kimi-K3; optimized quantization preserving multimodal capabilities for local inference. |
| [DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF) | DavidAU | 175 | 261,856 | 9B compact variant with NEO imatrix, MTP, and Heretic merge; 261K downloads for resource-constrained uncensored use. |
| [unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 195 | 0 | Day-zero GGUF quantization of DeepSeek V4 Flash 0731; enables immediate local deployment of latest checkpoint. |

---

## Ecosystem Signal

The August 1st snapshot reveals **three dominant model families** capturing ecosystem mindshare: **Qwen3.6 MoE** (7 community variants in top 30), **DeepSeek V4** (4 entries across base/quantized/timed releases), and **Kimi-K3** (3 entries including Unsloth optimizations). Chinese labs—Moonshot, DeepSeek, Z.ai, Baidu, Kwaipilot, Nanbeige, Upstage, XYZ AI—now occupy **~60% of trending slots**, signaling a sustained open-weight leadership shift. Quantization innovation is accelerating: **ternary/2-bit (prism-ml), NVFP4 (nota-ai), NEO imatrix (DavidAU), and BitNet (Microsoft)** all appear concurrently, pushing compression frontiers for 27B–250B models. Community fine-tuning has matured into a **distribution channel**—HauhauCS and DavidAU each exceed 1M downloads on uncensored Qwen3.6 GGUFs, rivaling official

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*