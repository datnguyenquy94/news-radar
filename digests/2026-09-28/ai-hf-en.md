# Hugging Face Trending Models Digest 2026-09-28

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-28 05:00 UTC

---

# Hugging Face Trending Models Digest — 2026-09-28

## Today's Highlights

The Qwen ecosystem dominates this week's trending list, with **Qwen3.8-27B** (16.4K likes) and multiple Qwen-Image-2.1 variants leading both language and vision categories. Quantized GGUF releases continue to drive massive download volumes—**Comfy-Org/Qwen-Image-2.1** alone nears 4M downloads—signaling strong edge-deployment demand. Notably, **Lightricks/LTX-2.5** (5.3K likes) emerges as a leading open video generation model, while specialized models like **Edge0/Audio8-ASR-Infinite** and **nvidia/Nemotron-3-Diarization** highlight growing momentum in streaming audio AI.

---

## Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 16,435 | 6,727,629 | Flagship 27B multimodal LLM with image-text-to-text capabilities; leads weekly likes by a wide margin and shows massive adoption for conversational and reasoning tasks. |
| [XingChen-AGI/Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B) | XingChen-AGI | 1,786 | 45,028 | 29B MoE model (4B active) optimized for text generation and chat; notable for efficient architecture and strong conversational performance. |
| [yandex/AliceAI-Foundation-80B-A3B-Base](https://huggingface.co/yandex/AliceAI-Foundation-80B-A3B-Base) | yandex | 349 | 3,456 | 80B MoE base model (3B active) with custom code; represents Yandex's large-scale open-weight foundation model entry. |
| [XiaomiMiMo/MiMo-V2.6-Pro-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL) | XiaomiMiMo | 561 | 75,079 | RL-tuned multimodal model for text generation; part of Xiaomi's MiMo v2.6 series with strong instruction-following. |
| [XiaomiMiMo/MiMo-V2.6-Flash-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL) | XiaomiMiMo | 493 | 25,661 | Lightweight RL-tuned variant optimized for speed; maintains multimodal capabilities with reduced latency. |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 3,822 | 651,078 | Flash-optimized multimodal model for text and image-text tasks; high download count reflects strong community interest in efficient DeepSeek variants. |
| [Altworld/Hemmingway-1](https://huggingface.co/Altworld/Hemmingway-1) | Altworld | 743 | 5,904 | Qwen3.8-based text generation model fine-tuned for creative writing; niche but active community adoption. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 5,347 | 1,601,089 | State-of-the-art open video generation model supporting image-to-video, text-to-video, and video-to-video; leading open video model by engagement. |
| [Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 2,509 | 52,804 | Official Qwen image generation and editing model; base for numerous community quantizations and fine-tunes. |
| [abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF) | abenzerps | 2,111 | 964,220 | Uncensored GGUF quantization of Qwen-Image-2.1 for ComfyUI; near 1M downloads shows massive demand for unrestricted local image generation. |
| [Viggle/Qwen-Image-2.1-viggle-turbo](https://huggingface.co/Viggle/Qwen-Image-2.1-viggle-turbo) | Viggle | 347 | 133,151 | Turbo LoRA fine-tune for accelerated Qwen-Image-2.1 inference; popular for real-time image-to-image workflows. |
| [inclusionAI/Ming-Image-0.1-Design](https://huggingface.co/inclusionAI/Ming-Image-0.1-Design) | inclusionAI | 305 | 0 | Design-focused text-to-image model with custom architecture; early release targeting professional design workflows. |
| [TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B) | TaichuAI | 1,697 | 11,612 | 9B vision-language model emphasizing spatial reasoning; notable for multimodal understanding benchmarks. |
| [XingChen-AGI/TeleOCR](https://huggingface.co/XingChen-AGI/TeleOCR) | XingChen-AGI | 617 | 27,837 | Qwen2.5-VL based OCR model for image-text extraction; strong downloads indicate production deployment for document AI. |
| [XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B) | XiaomiMiMo | 525 | 8,839 | 9B distilled multimodal model from MiMo v2.6 series; balances efficiency and vision-language capability. |
| [apple/LensVLM-9B](https://huggingface.co/apple/LensVLM-9B) | apple | 246 | 1,740 | Apple's 9B vision-language model built on Qwen3.5; represents major tech entry into open VLM space. |

### 🔧 Specialized Models (code, math, medical, embeddings, ASR, classification)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Edge0/Audio8-ASR-Infinite](https://huggingface.co/Edge0/Audio8-ASR-Infinite) | Edge0 | 1,168 | 19,434 | Streaming ASR model with infinite context support; unique architecture for long-form audio transcription. |
| [nvidia/Nemotron-3-Diarization](https://huggingface.co/nvidia/Nemotron-3-Diarization) | nvidia | 412 | 22,514 | Voice activity detection and speaker diarization model; NVIDIA's audio-frame classification for meeting/transcription pipelines. |
| [netease-youdao/Confucius4-R2T2](https://huggingface.co/netease-youdao/Confucius4-R2T2) | netease-youdao | 438 | 8,243 | Qwen3-based ASR model (Confucius4 series) with R2T2 architecture; targets Chinese/English speech recognition. |
| [Contrastive-LM/CLM-v0.1-8B](https://huggingface.co/Contrastive-LM/CLM-v0.1-8B) | Contrastive-LM | 415 | 766 | Contrastive learning-based verifier/reranker for text ranking; novel approach to retrieval augmentation. |
| [convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 4,129 | 0 | Calibrated decision-making text classifier (System One); high likes suggest strong research interest in reliable classification. |
| [convaiinnovations/laya-multilingual](https://huggingface.co/convaiinnovations/laya-multilingual) | convaiinnovations | 306 | 0 | Multilingual extension of Laya using mMBERT; expands calibrated classification to multiple languages. |
| [AlexWortega/openjev](https://huggingface.co/AlexWortega/openjev) | AlexWortega | 614 | 0 | NLI cross-encoder based on Qwen3.5 for textual entailment; zero-shot classification applications. |
| [akhilaaa3/Jev-Omni](https://huggingface.co/akhilaaa3/Jev-Omni) | akhilaaa3 | 274 | 248 | Gemma4-based unified model for image-text-to-text and classification; early multimodal classifier. |
| [fastino/GLiNER2.5-Decide](https://huggingface.co/fastino/GLiNER2.5-Decide) | fastino | 209 | 19,757 | GLiNER-based extractor for intent and text classification; practical deployment for structured extraction. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Comfy-Org/Qwen-Image-2.1](https://huggingface.co/Comfy-Org/Qwen-Image-2.1) | Comfy-Org | 811 | 3,987,373 | Official ComfyUI single-file diffusion distribution of Qwen-Image-2.1; nearly 4M downloads makes it the most downloaded model this week. |
| [prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 2,200 | 3,343,748 | 2-bit ternary quantized 27B GGUF for llama.cpp; extreme compression with 3.3M downloads proves demand for ultra-efficient local LLMs. |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 1,781 | 1,608,439 | Mixed-precision GSQ+RCO quantized GGUF of Qwen3.8-27B; advanced quantization research with strong adoption. |
| [unsloth/Qwen-Image-2.1-GGUF](https://huggingface.co/unsloth/Qwen-Image-2.1-GGUF) | unsloth | 271 | 194,341 | Unsloth-optimized GGUF quantization for Qwen-Image-2.1; focuses on fast inference with memory efficiency. |
| [pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF](https://huggingface.co/pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF) | pottokao | 302 | 145,246 | FP8 quantized text encoder for Qwen-Image-2.1; component-level optimization for ComfyUI pipelines. |

---

## Ecosystem Signal

The Qwen model family has cemented its position as the central open-weight ecosystem: **Qwen3.8-27B** leads all models by likes (16.4K), while **Qwen-Image-2.1** spawns a thriving quantization sub-ecosystem (5+ GGUF variants, 6M+ combined downloads). This mirrors the earlier LLaMA effect—base model quality plus permissive licensing enables community-driven specialization. Proprietary labs (Apple, NVIDIA, Yandex, DeepSeek, Xiaomi) are increasingly releasing open weights, often built on or compatible with Qwen architectures, blurring the line between open and closed ecosystems. Quantization research has moved beyond simple 4-bit: **ternary (2-bit)**, **GSQ+RCO mixed-precision**, and **component-level FP8** encoders indicate a maturing toolchain optimizing for specific hardware (Apple Silicon, NVIDIA, edge CPUs). Video generation (**LTX-2.5**) and streaming ASR (**Audio8-ASR-Infinite**) represent the next frontier where open models are reaching production parity. Notably, several high-like models (laya, openjev, Ming-Image) show zero downloads—suggesting strong research curiosity but limited deployment packaging.

---

## Worth Exploring

1. **Lightricks/LTX-2.5** — The most capable open video generation model to date (5.3K likes, 1.6M downloads). Supports text-to-video, image-to-video, and video-to-video in a single diffusion framework. Ideal for studying video diffusion architectures and building creative tools.

2. **prism-ml/Ternary-Bonsai-2-27B-gguf** — Extreme 2-bit ternary quantization of a 27B model with 3.3M downloads. Demonstrates that aggressive quantization can retain usability; essential reference for edge LLM deployment research.

3. **Edge0/Audio8-ASR-Infinite** — Unique streaming ASR with infinite context handling. Fills a critical gap for long-form transcription (podcasts, meetings) where chunked models fail. Strong candidate for production speech pipelines.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*