# Hugging Face Trending Models Digest 2026-09-25

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-25 04:35 UTC

---

# Hugging Face Trending Models Digest — 2026-09-25

## Today's Highlights

The Qwen ecosystem dominates this week’s trends, with **Qwen3.8-27B** (16.2K likes) and **Qwen-Image-2.1** (2.2K likes) anchoring both multimodal and image-generation leaderboards. DeepSeek’s **DeepSeek-V4.1-Flash** (3.7K likes) signals accelerating competition in efficient multimodal models. Quantization and fine-tuning activity is exceptionally high: eight of the top-30 entries are GGUF/MLX quantizations or community fine-tunes of Qwen3.8-27B, including Unsloh’s base quantization (7M+ downloads) and DavidAU’s uncensored fusion variant. Video generation gains traction via Lightricks’ **LTX-2.5** (5K likes, 1.6M downloads), while structured-generation and on-device tool-calling models (Cactus-Compute’s **needle3**, harshatheg’s **RLCD**) highlight a shift toward reliable, deployment-ready capabilities.

---

## Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [XingChen-AGI/Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B) | XingChen-AGI | 1,647 | 41,923 | A 29B-parameter conversational LLM with strong instruction-following; trending for its balance of size and chat performance in the open-weight space. |
| [Altworld/Hemmingway-1](https://huggingface.co/Altworld/Hemmingway-1) | Altworld | 638 | 4,541 | A Qwen3.8-derived fine-tune focused on creative writing and narrative coherence; gaining attention for stylistic control in long-form generation. |
| [XiaomiMiMo/MiMo-V2.6-Pro-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL) | XiaomiMiMo | 482 | 9,841 | RL-tuned multimodal model emphasizing reasoning and tool use; notable for integrating reinforcement learning into a production-ready chat model. |
| [XiaomiMiMo/MiMo-V2.6-Flash-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL) | XiaomiMiMo | 447 | 18,821 | Distilled “Flash” variant of the MiMo RL series, optimized for latency while retaining reasoning gains; popular for real-time deployment scenarios. |
| [yandex/AliceAI-Foundation-80B-A3B-Base](https://huggingface.co/yandex/AliceAI-Foundation-80B-A3B-Base) | yandex | 321 | 2,678 | An 80B MoE base model (3B active) from Yandex; trending as a rare large-scale open-weight foundation for further fine-tuning. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 2,218 | 37,618 | State-of-the-art text-to-image and image-editing model; leads downloads among base image generators with strong prompt adherence and editing control. |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 3,725 | 606,028 | Efficient multimodal model (image-text-to-text) optimized for speed; surging due to DeepSeek’s reputation and flash-attention architecture. |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 16,229 | 6,765,008 | Flagship 27B multimodal LLM (image-text-to-text); highest-liked model this week, setting benchmarks for open-weight vision-language reasoning. |
| [TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B) | TaichuAI | 1,041 | 8,313 | 9B vision-language model with explicit spatial-reasoning capabilities; trending for niche multimodal tasks requiring geometric understanding. |
| [XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B) | XiaomiMiMo | 437 | 5,705 | Distilled 9B multimodal model from Qwen lineage; offers strong vision-language performance at a fraction of the parameter count. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 5,023 | 1,637,601 | Unified video generation model (text-to-video, image-to-video, video-to-video); leads video category with high-quality temporal consistency. |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,685 | 830,208 | Next-generation efficient multimodal model experimenting with Qwen4-era architecture; early adoption for low-latency vision-language apps. |
| [m-a-p/YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B) | m-a-p | 995 | 23,703 | Symbolic music-generation model with agentic editing; unique for combining symbolic planning with audio synthesis in a compact 3B package. |
| [inclusionAI/Ming-Image-0.1-Design](https://huggingface.co/inclusionAI/Ming-Image-0.1-Design) | inclusionAI | 231 | 0 | Design-focused text-to-image model; early traction for specialized graphic-design workflows and layout-aware generation. |

### 🔧 Specialized Models (code, math, medical, embeddings, ASR, etc.)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 3,444 | 0 | Calibrated text-classification system (“System One”) for high-stakes decision support; trending for its reliability-focused design. |
| [AlexWortega/openjev](https://huggingface.co/AlexWortega/openjev) | AlexWortega | 559 | 0 | Cross-encoder NLI model built on Qwen3.5; notable for zero-shot entailment and retrieval reranking without task-specific fine-tuning. |
| [Edge0/Audio8-ASR-Infinite](https://huggingface.co/Edge0/Audio8-ASR-Infinite) | Edge0 | 354 | 347 | Streaming ASR with infinite-context capability; gaining interest for real-time transcription of arbitrarily long audio streams. |
| [netease-youdao/Confucius4-R2T2](https://huggingface.co/netease-youdao/Confucius4-R2T2) | netease-youdao | 396 | 4,930 | Qwen3-based ASR model (Confucius4 series); trending for strong multilingual speech recognition in resource-constrained settings. |
| [nvidia/Nemotron-3-Diarization](https://huggingface.co/nvidia/Nemotron-3-Diarization) | nvidia | 284 | 4,282 | Voice-activity detection and speaker diarization model; NVIDIA’s entry into open audio-frame classification for meeting/telephony pipelines. |
| [harshatheg/Qwen-2.5-1B-RLCD](https://huggingface.co/harshatheg/Qwen-2.5-1B-RLCD) | harshatheg | 566 | 0 | 1B model with RL-constrained decoding for structured generation; targets on-device Apple Silicon with parallel decoding guarantees. |
| [convaiinnovations/laya-multilingual](https://huggingface.co/convaiinnovations/laya-multilingual) | convaiinnovations | 252 | 0 | Multilingual extension of Laya calibrated classifier; addresses cross-lingual decision support with MMBERT-style architecture. |
| [Cactus-Compute/needle3](https://huggingface.co/Cactus-Compute/needle3) | Cactus-Compute | 227 | 69,655 | On-device function-calling model optimized for tool use; trending for enabling reliable agentic workflows on edge hardware. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 2,043 | 2,991,233 | 2-bit ternary quantized Qwen3.5-27B in GGUF; leads quantization downloads, proving extreme compression viability for local LLMs. |
| [abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF) | abenzerps | 1,656 | 575,697 | Uncensored GGUF quantization of Qwen-Image-2.1 for ComfyUI; high demand for unrestricted creative workflows on consumer GPUs. |
| [Comfy-Org/Qwen-Image-2.1](https://huggingface.co/Comfy-Org/Qwen-Image-2.1) | Comfy-Org | 692 | 2,858,923 | ComfyUI-native single-file diffusion repack of Qwen-Image-2.1; massive downloads reflect ComfyUI ecosystem adoption. |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 1,660 | 1,465,429 | Mixed-precision GSQ+RCO quantization of Qwen3.8-27B; showcases advanced quantization research preserving multimodal quality. |
| [prism-ml/Ternary-Bonsai-2-27B-mlx-2bit](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-mlx-2bit) | prism-ml | 368 | 51,644 | MLX-format 2-bit ternary quantization for Apple Silicon; extends prism-ml’s compression lead to the Metal/MLX stack. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 1,160 | 1,502,387 | Heavily fused, uncensored fine-tune+quantization of Qwen3.8-27B; community favorite for “maximal” local chat+coding capability. |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 4,589 | 7,063,930 | Official Unsloh GGUF quantization of base Qwen3.8-27B; highest downloads this week, de facto standard for local multimodal deployment. |
| [pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF](https://huggingface.co/pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF) | pottokao | 244 | 103,226 | FP8-quantized text encoder for Qwen-Image-2.1 in GGUF; enables memory-efficient ComfyUI pipelines with minimal quality loss. |

---

## Ecosystem Signal

The Qwen model family has become the de facto open-weight backbone: **Qwen3.8-27B** and **Qwen-Image-2.1** spawn dozens of quantizations, fine-tunes, and format ports (GGUF, MLX, ComfyUI single-file) within days of release. This mirrors the Llama-2/3 trajectory but at accelerated speed—DeepSeek’s **V4.1-Flash** and Yandex’s **AliceAI-80B** are the only non-Qwen large models gaining comparable momentum. Open-weight multimodal models now dominate the top tier, with proprietary vendors (OpenAI, Anthropic, Google) absent from the trending list, confirming a structural shift toward locally deployable vision-language models. Quantization research has moved beyond simple 4-bit: **ternary 2-bit** (prism-ml), **mixed-precision GSQ/RCO** (ISTA-DASLab), and **FP8 text encoders** (pottokao) indicate the community is pushing the Pareto frontier of size vs. quality. Fine-tuning is increasingly specialized—RL for reasoning (MiMo), constrained decoding for structure (RLCD), uncensored fusion for creative freedom (DavidAU)—reflecting a maturing ecosystem where base models are commodities and differentiation happens at the post-training layer.

---

## Worth Exploring

1. **Qwen/Qwen3.8-27B** — The current open-weight multimodal benchmark. With 6.7M downloads and a thriving quantization ecosystem (Unsloth, ISTA-DASLab, DavidAU), it’s the best starting point for any vision-language application requiring local deployment.  
2. **Lightricks/LTX-2.5** — The most capable open video-generation model to date. Its unified architecture (text-to-video, image-to-video, video-to-video) and 1.6M downloads make it the practical choice for experimenting with generative video pipelines.  
3. **prism-ml/Ternary-Bonsai-2-27B-gguf** — Extreme compression (2-bit ternary) that retains surprising coherence. Essential for studying the limits of LLM quantization and for deploying 27B-class models on consumer hardware (8–12 GB VRAM).

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*