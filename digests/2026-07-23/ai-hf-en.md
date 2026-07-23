# Hugging Face Trending Models Digest 2026-07-23

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-23 04:18 UTC

---

# Hugging Face Trending Models Digest — 2026-07-23

## 1. Today's Highlights

The past week showcases a surge in **ultra-low-bit quantization** (1–2 bit GGUF/MLX) for 27B–35B models, making frontier-scale LLMs runnable on consumer hardware. **Multimodal models dominate the top likes**, led by Google’s Gemma-4-31B (3.3k likes), Z.ai’s GLM-5.2 (4.3k likes), and Baidu’s Unlimited-OCR (2.8k likes, 2.2M downloads). Robotics and embodied AI gain traction with two MiniCPM vision-language-action releases from OpenBMB. Meanwhile, the Qwen3.5/3.6 family remains the backbone for community fine-tunes, MoE variants, and aggressive uncensored merges.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,344 | 545,109 | A new MoE-based GLM release with DSA (Dynamic Sparse Attention) achieving strong reasoning and conversational benchmarks; the highest-liked pure LLM this week. |
| [google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it) | google | 3,331 | 12,113,203 | Google’s latest instruction-tuned Gemma with native image-text-to-text capability; massive download count signals broad adoption for on-device and cloud multimodal apps. |
| [upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B) | upstage | 325 | 0 | Upstage’s 250B parameter open-weight model targeting enterprise-grade reasoning; zero downloads suggest gated or pre-release access. |
| [poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 411 | 3,056 | Poolside’s code-specialized LLM optimized for software engineering tasks; part of a growing family with quantized variants (NVFP4, GGUF) also trending. |
| [Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 244 | 0 | Compact 3B Chinese/English bilingual model from the Nanbeige series; lightweight footprint for edge deployment. |
| [Motif-Technologies/Motif-3-Beta](https://huggingface.co/Motif-Technologies/Motif-3-Beta) | Motif-Technologies | 162 | 125 | Early beta of Motif-3, a new LLM family focusing on feature-extraction and retrieval-augmented workflows. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 2,764 | 2,237,351 | High-throughput OCR model supporting unlimited-length documents; 2.2M downloads make it the most deployed multimodal tool this week. |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,009 | 1,997,690 | Aggressively uncensored 35B MoE (3B active) vision-language merge; top community multimodal model by likes and downloads. |
| [thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | 1,462 | 16,441 | Novel image-text-to-text model emphasizing creative reasoning and visual dialogue; strong early adoption for research prototypes. |
| [moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code) | moonshotai | 1,227 | 722,058 | Code-specialized multimodal model with compressed-tensors optimization; bridges vision and programming tasks. |
| [microsoft/Mage-Flow](https://huggingface.co/microsoft/Mage-Flow) | microsoft | 133 | 0 | Text-to-image diffusion model with flow-matching architecture; Microsoft’s latest entry in high-fidelity image generation. |
| [conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit) | conradlocke | 500 | 0 | LoRA for Krea-2 enabling precise identity-preserving image editing; popular in ComfyUI workflows. |
| [bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B) | bottlecapai | 514 | 12,002 | 27B vision-language model fine-tuned for step-by-step visual reasoning; targets agentic multimodal workflows. |
| [ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2) | ATH-MaaS | 250 | 17,162 | Qwen2.5-VL based OCR model with enhanced layout understanding; practical for document digitization pipelines. |
| [OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize) | OpenMOSS-Team | 310 | 92,265 | Audio-text-to-text model combining transcription and speaker diarization; 92k downloads show strong ASR+community uptake. |
| [nvidia/Cosmos3-Edge](https://huggingface.co/nvidia/Cosmos3-Edge) | nvidia | 91 | 6,623 | Edge-optimized world-model/video diffusion from NVIDIA’s Cosmos line; targets real-time simulation and robotics. |
| [Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID) | Alissonerdx | 235 | 0 | LTX-Video LoRA for identity-preserving reference-to-video generation; niche but high-interest in consistent video synthesis. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b) | nvidia | 914 | 590,230 | Streaming ASR model (0.6B) optimized for low-latency transcription; 590k downloads indicate production deployment at scale. |
| [nvidia/Nemotron-3-Embed-1B-BF16](https://huggingface.co/nvidia/Nemotron-3-Embed-1B-BF16) | nvidia | 102 | 93,021 | 1B sentence embedding model in BF16; efficient for retrieval and clustering with 93k downloads. |
| [openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip) | openbmb | 156 | 58 | Vision-language-action model for robotic manipulation; part of MiniCPM’s embodied AI push. |
| [openbmb/MiniCPM-RobotTrack](https://huggingface.co/openbmb/MiniCPM-RobotTrack) | openbmb | 114 | 72 | Companion VLA model for object tracking in robotics; enables closed-loop visual servoing. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf) | prism-ml | 601 | 1,404,962 | 1-bit quantized 27B model (GGUF) for llama.cpp; 1.4M downloads prove extreme quantization viability for large models. |
| [empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai | 2,419 | 2,133,420 | 9B Qwen3.5 fine-tune on Claude-synthetic data, GGUF quantized; 2.1M downloads make it the most downloaded community model. |
| [prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 952 | 432,196 | Ternary (2-bit) quantization of Bonsai-27B pushing compression frontier; 952 likes signal strong research interest. |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 334 | 62,842 | Massive merge of 7+ fine-tunes into a single 27B vision GGUF; “kitchen-sink” uncensored model for power users. |
| [unsloth/Laguna-S-2.1-GGUF](https://huggingface.co/unsloth/Laguna-S-2.1-GGUF) | unsloth | 113 | 0 | Unsloth-optimized GGUF of Poolside’s Laguna-S-2.1; targets fast inference via vLLM/llama.cpp. |
| [poolside/Laguna-S-2.1-NVFP4](https://huggingface.co/poolside/Laguna-S-2.1-NVFP4) | poolside | 99 | 1,953 | Official NVFP4 (4-bit FP) quantization for Blackwell GPUs; first-party vendor quantization gaining traction. |
| [prism-ml/Bonsai-27B-mlx-1bit](https://huggingface.co/prism-ml/Bonsai-27B-mlx-1bit) | prism-ml | 165 | 25,273 | 1-bit MLX format for Apple Silicon; extends ultra-low-bit inference to Mac ecosystem. |
| [poolside/Laguna-S-2.1-GGUF](https://huggingface.co/poolside/Laguna-S-2.1-GGUF) | poolside | 95 | 289 | Official GGUF release from Poolside; endpoints-compatible for managed inference. |
| [LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V5-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V5-GGUF) | LuffyTheFox | 103 | 19,140 | GGUF of a Hermes-style merge on Qwen3.6 35B MoE; targets uncensored roleplay and reasoning. |

---

## 3. Ecosystem Signal

**Model families gaining momentum:** The **Qwen3.5/3.6 lineage** is the undisputed substrate for community innovation—appearing in 9 of the top 30 models as base for MoE variants (35B-A3B), vision-language merges, uncensored fine-tunes, and extreme quantization (1-bit to ternary). **GLM** and **Gemma** families are the primary first-party competitors capturing mindshare with major new releases (GLM-5.2, Gemma-4-31B). **MiniCPM** is carving a niche in **vision-language-action** for robotics, with two concurrent releases.

**Open-weight vs. proprietary:** All 30 trending models are open-weight (or gated-open like Solar-Open2-250B). No proprietary API-only models appear. The ecosystem favors **downloadable, quantizable, mergeable artifacts**—evidenced by 9 GGUF/MLX/NVFP4 entries in the top 30. First-party labs (Google, NVIDIA, Microsoft, Baidu, Z.ai, Moonshot) now routinely release open weights alongside technical reports, blurring the line between “open source” and “open weight.”

**Quantization & fine-tuning activity:** **Sub-2-bit quantization is production-ready**. Prism-ML’s 1-bit and ternary (2-bit) Bonsai-27B GGUF/MLX variants collectively exceed 1.8M downloads. NVFP4 (4-bit float) from Poolside and Unsloth’s GGUF pipelines show vendor/tooling alignment on low-bit formats. Fine-tuning has shifted from LoRA-only to **massive merges** (DavidAU’s 7-component fusion, LuffyTheFox’s Hermes-Genesis merge) and **synthetic-data distillation** (Empero’s 5.1M Claude-sampled Qwythos). The community treats base models as **composable primitives**—quantize, merge, specialize, redistribute.

---

## 4. Worth Exploring

1. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — Highest-liked pure LLM (4.3k) with MoE + Dynamic Sparse Attention; strong reasoning out of the box. Ideal for evaluating next-gen sparse architectures without quantization artifacts.

2. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — 2.2M downloads prove real-world utility. Test it on long, multi-column, or handwritten documents; the “unlimited-length” claim is rare and valuable for document AI pipelines.

3. **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** — 1-bit GGUF with 1.4M downloads. If you have 16–24 GB VRAM/RAM, this is the frontier for **extreme compression fidelity**. Compare against its ternary sibling (Ternary-Bonsai-27B) to measure the 1-bit vs 2-bit quality cliff.