# Hugging Face Trending Models Digest 2026-09-27

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-27 04:58 UTC

---

# Hugging Face Trending Models Digest — 2026-09-27

## Today's Highlights

The Qwen ecosystem dominates this week's trends with **Qwen3.8-27B** (16.4k likes) and **Qwen-Image-2.1** spawning a cascade of community quantizations, fine-tunes, and ComfyUI integrations. Multimodal models are surging: Xiaomi's MiMo-V2.6 family (Pro, Flash, Distill), Apple's LensVLM-9B, and Taichu's ZDTaichu5.0-9B all target vision-language reasoning. Aggressive quantization is mainstream — 2-bit ternary (Ternary-Bonsai-2-27B), GSQ/RCO mixed-precision (Qwen3.8-27B-GSQ-RCO), and FP8 text-encoder GGUFs are racking up millions of downloads. Meanwhile, niche specialists like Audio8-ASR-Infinite (streaming ASR), Nemotron-3-Diarization, and TeleOCR show production-grade audio/vision tooling gaining traction.

---

## Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [XingChen-AGI/Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B) | XingChen-AGI | 1,729 | 43,947 | A 29B MoE (A4B active) model optimized for conversational text generation. Trending for its strong instruction-following and efficient sparse architecture. |
| [prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 2,146 | 3,247,527 | 2-bit ternary quantized 27B model in GGUF format. Exceptional download volume shows extreme quantization is production-ready for local LLM deployment. |
| [Altworld/Hemmingway-1](https://huggingface.co/Altworld/Hemmingway-1) | Altworld | 713 | 5,590 | Qwen3.5-based text generation model fine-tuned for creative writing. Gaining attention for literary-style output quality. |
| [XiaomiMiMo/MiMo-V2.6-Pro-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL) | XiaomiMiMo | 530 | 74,497 | RL-enhanced multimodal LLM with strong reasoning. Part of Xiaomi's rapidly expanding MiMo family targeting agentic workflows. |
| [XiaomiMiMo/MiMo-V2.6-Flash-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL) | XiaomiMiMo | 480 | 23,000 | Lightweight RL-tuned variant of MiMo-V2.6 optimized for speed. Demonstrates the trend toward tiered model families (Pro/Flash/Distill). |
| [yandex/AliceAI-Foundation-80B-A3B-Base](https://huggingface.co/yandex/AliceAI-Foundation-80B-A3B-Base) | yandex | 339 | 3,336 | 80B MoE (A3B active) foundation model from Yandex with custom architecture. Notable for its scale and Russian-language ecosystem focus. |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 16,361 | 6,652,309 | Flagship 27B vision-language model with conversational capabilities. Massive adoption confirms Qwen as the leading open-weight multimodal family. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 2,408 | 48,361 | State-of-the-art text-to-image and image-editing model. Serves as the base for dozens of community quantizations and LoRA fine-tunes this week. |
| [abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF) | abenzerps | 1,955 | 876,673 | Uncensored GGUF quantization for ComfyUI. Nearly 900k downloads reveal huge demand for local, unrestricted image generation. |
| [Comfy-Org/Qwen-Image-2.1](https://huggingface.co/Comfy-Org/Qwen-Image-2.1) | Comfy-Org | 782 | 3,641,785 | Official ComfyUI single-file diffusion format. 3.6M downloads confirm ComfyUI as the dominant local inference backend. |
| [XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B) | XiaomiMiMo | 501 | 7,905 | 9B distilled vision-language model from Qwen3.5 teacher. Compact multimodal reasoning for edge deployment. |
| [TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B) | TaichuAI | 1,606 | 11,063 | Spatial-reasoning vision-language model targeting 3D understanding. Niche but high-signal for embodied AI research. |
| [StarDoc-AI/TeleOCR](https://huggingface.co/StarDoc-AI/TeleOCR) | StarDoc-AI | 433 | 26,152 | Qwen2.5-VL based OCR model for document understanding. Production-ready text extraction with strong multilingual support. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 5,240 | 1,604,804 | Unified image-to-video, text-to-video, and video-to-video model. 5.2k likes signal growing creator demand for open video generation. |
| [Viggle/Qwen-Image-2.1-viggle-turbo](https://huggingface.co/Viggle/Qwen-Image-2.1-viggle-turbo) | Viggle | 297 | 101,512 | LoRA-accelerated Qwen-Image-2.1 variant for real-time generation. Turbo LoRAs are becoming standard for interactive workflows. |
| [inclusionAI/Ming-Image-0.1-Design](https://huggingface.co/inclusionAI/Ming-Image-0.1-Design) | inclusionAI | 260 | 0 | Design-focused text-to-image model from Ant Group. Early-stage but backed by major fintech infrastructure. |
| [apple/LensVLM-9B](https://huggingface.co/apple/LensVLM-9B) | apple | 229 | 1,432 | Apple's 9B vision-language model on Qwen3.5 backbone. Signals Apple's open-weight strategy targeting on-device multimodal AI. |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 3,777 | 640,577 | Multimodal Flash variant from DeepSeek. High likes/downloads ratio shows strong community trust in DeepSeek's efficient architectures. |

### 🔧 Specialized Models (code, math, medical, embeddings, speech, etc.)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 3,920 | 0 | Calibrated decision-making text classifier (System-1 reasoning). High likes with zero downloads suggests API-only or private deployment usage. |
| [Edge0/Audio8-ASR-Infinite](https://huggingface.co/Edge0/Audio8-ASR-Infinite) | Edge0 | 843 | 7,859 | Streaming ASR with infinite context capability. Addresses the long-form transcription gap in open-source speech recognition. |
| [nvidia/Nemotron-3-Diarization](https://huggingface.co/nvidia/Nemotron-3-Diarization) | nvidia | 374 | 19,620 | Speaker diarization and voice activity detection from NVIDIA. Production-grade audio framing for meeting/telephony pipelines. |
| [AlexWortega/openjev](https://huggingface.co/AlexWortega/openjev) | AlexWortega | 598 | 0 | NLI cross-encoder on Qwen3.5 for textual entailment. Zero downloads but high likes indicate research interest in verifier models. |
| [netease-youdao/Confucius4-R2T2](https://huggingface.co/netease-youdao/Confucius4-R2T2) | netease-youdao | 427 | 7,155 | Qwen3-based ASR with R2T2 architecture. Chinese ASR specialist from NetEase Youdao's education ecosystem. |
| [Contrastive-LM/CLM-v0.1-8B](https://huggingface.co/Contrastive-LM/CLM-v0.1-8B) | Contrastive-LM | 299 | 434 | Contrastive learning verifier/reranker for RAG pipelines. Low downloads but high technical relevance for retrieval quality. |
| [convaiinnovations/laya-multilingual](https://huggingface.co/convaiinnovations/laya-multilingual) | convaiinnovations | 296 | 0 | Multilingual calibrated classifier using mMBERT. Companion to Laya for global deployment. |
| [akhilaaa3/Jev-Omni](https://huggingface.co/akhilaaa3/Jev-Omni) | akhilaaa3 | 257 | 128 | Gemma4-based unified multimodal classifier. Early experimental model blending vision-language with classification. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 1,735 | 1,560,929 | Mixed-precision GSQ+RCO quantization of Qwen3.8-27B. 1.5M downloads prove advanced quantization retains quality at scale. |
| [pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF](https://huggingface.co/pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF) | pottokao | 282 | 137,283 | FP8 quantized text encoder for Qwen-Image-2.1 in GGUF. Component-level quantization enables memory-efficient ComfyUI pipelines. |
| [unsloth/Qwen-Image-2.1-GGUF](https://huggingface.co/unsloth/Qwen-Image-2.1-GGUF) | unsloth | 251 | 170,469 | Unsloth-optimized GGUF quantization for fast local image generation. Unsloth brand carries strong performance-tuning credibility. |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 4,657 | 6,832,629 | Flagship GGUF quantization of Qwen3.8-27B. 6.8M downloads make it the most downloaded model this week — local LLM standard. |

---

## Ecosystem Signal

The Qwen model family has cemented its position as the **central gravity well** of the open-weight ecosystem: Qwen3.8-27B (16.4k likes, 6.7M downloads) and Qwen-Image-2.1 have spawned a quantization cottage industry — Unsloth, ISTA-DASLab, abenzerps, and pottokao collectively account for **>9M downloads** of GGUF variants alone. This signals a maturation where **base model releases are immediately followed by community-driven compression, format conversion (ComfyUI, llama.cpp), and specialization (uncensored, turbo LoRAs)**.

Xiaomi's MiMo family (Pro/Flash/Distill) and Apple's LensVLM-9B reveal a **tiered multimodal strategy** emerging among tech giants: flagship VLMs, distilled edge variants, and on-device targets. Meanwhile, **2-bit ternary (Ternary-Bonsai)** and **mixed-precision GSQ/RCO** quantizations crossing 1M+ downloads each confirm that **aggressive compression is no longer experimental — it's the default deployment path**.

Specialized audio/vision tooling (Audio8-ASR-Infinite, Nemotron-3-Diarization, TeleOCR) is gaining production traction, suggesting the **ecosystem is broadening beyond chat into vertical pipelines**. Proprietary models (GPT-5, Claude 4) remain absent from HF Hub, but the open-weight stack is achieving feature parity for RAG, coding, and media generation — with **quantization quality now the primary differentiator**.

---

## Worth Exploring

1. **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** — The de facto standard for local 27B VLMs. 6.8M downloads, Unsloth's kernel optimizations, and full Qwen3.8 capability (vision + reasoning) make it the single best model to benchmark for on-prem multimodal workloads.

2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — Rare unified video model handling text-to-video, image-to-video, and video-to-video in one 5.2k-like package. Essential for studying temporal consistency in open video generation.

3. **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** — Cutting-edge mixed-precision quantization (GSQ + RCO) with 1.56M downloads. Best reference for **how far 27B models can be compressed before quality breaks** — critical for edge deployment research.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*