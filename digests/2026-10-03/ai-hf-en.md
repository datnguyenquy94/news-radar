# Hugging Face Trending Models Digest 2026-10-03

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-10-03 04:58 UTC

---

# Hugging Face Trending Models Digest — 2026-10-03

## Today's Highlights

The Hugging Face Hub is dominated by the **Qwen 3.8 / Qwen-Image 2.1 ecosystem**, with the official Qwen3.8-27B multimodal LLM leading at 16.8K likes and nearly 7M downloads. Video generation surges with Lightricks' LTX-2.5 (6K likes, 1.58M downloads) enabling unified image-to-video, text-to-video, and video-to-video workflows. Quantization innovation accelerates: ISTA-DASLab and Prism-ML push 2-bit ternary and GSQ/RCO mixed-precision GGUFs for 27B models, while community fine-tunes like DavidAU's "Heretic" uncensored variant hit 2M+ downloads. Audio sees streaming ASR advances (Edge0 Audio8-ASR-Infinite, 2.4K likes) and NVIDIA's diarization model. Specialized decision/ranking models (Laya, CLM, GLiNER2.5-Decide) signal growing demand for calibrated, verifiable outputs.

---

## Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 16,813 | 6,934,867 | Flagship 27B multimodal LLM with image-text-to-text conversation; leads weekly likes by 3× margin, signaling strong enterprise and community adoption. |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 4,017 | 767,871 | High-efficiency multimodal Flash variant; 767K downloads in a week reflect demand for fast, capable open-weight alternatives to proprietary APIs. |
| [TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B) | TaichuAI | 2,661 | 12,395 | 9B multimodal model emphasizing spatial reasoning; early download traction suggests niche interest in embodied AI and robotics applications. |
| [XingChen-AGI/Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B) | XingChen-AGI | 1,829 | 49,408 | 29B MoE conversational LLM; steady downloads indicate sustained community evaluation for long-context chat and coding tasks. |
| [Cloudflare/clef](https://huggingface.co/Cloudflare/clef) | Cloudflare | 813 | 824 | Lightweight multimodal model from Cloudflare; modest downloads but notable as edge-optimized release from infrastructure provider. |
| [Cloudflare/clef-flash](https://huggingface.co/Cloudflare/clef-flash) | Cloudflare | 277 | 1,303 | Distilled Flash variant of Clef; higher downloads than base model suggest developers prefer the speed/size trade-off for deployment. |
| [NaiveAI/Naive-N0.5-Flash](https://huggingface.co/NaiveAI/Naive-N0.5-Flash) | NaiveAI | 134 | 1,365 | Small MoE model targeting code and long-context; early-stage research release with potential for efficient agent workflows. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 6,006 | 1,584,129 | Unified diffusion model for image-to-video, text-to-video, and video-to-video; 1.58M downloads confirm it as the leading open video generation backbone. |
| [Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 2,848 | 81,738 | Official text-to-image and image-editing base model; 81K downloads show strong adoption as foundation for community LoRAs and fine-tunes. |
| [Comfy-Org/Qwen-Image-2.1](https://huggingface.co/Comfy-Org/Qwen-Image-2.1) | Comfy-Org | 915 | 5,674,460 | ComfyUI-native single-file distribution of Qwen-Image-2.1; 5.67M downloads reveal ComfyUI as the dominant deployment interface for diffusion models. |
| [Edge0/Audio8-ASR-Infinite](https://huggingface.co/Edge0/Audio8-ASR-Infinite) | Edge0 | 2,387 | 36,832 | Streaming ASR with infinite context; 2.4K likes highlight demand for real-time, long-form speech recognition without chunking artifacts. |
| [nvidia/Nemotron-3-Diarization](https://huggingface.co/nvidia/Nemotron-3-Diarization) | nvidia | 625 | 44,350 | Voice activity detection and diarization from NVIDIA NeMo; 44K downloads reflect enterprise adoption for meeting analytics and call center pipelines. |
| [FermionResearch/Phonon-2](https://huggingface.co/FermionResearch/Phonon-2) | FermionResearch | 154 | 2,126 | MLX-optimized ASR for Apple Silicon; niche but notable for on-device speech-to-text on Mac/iOS without cloud dependency. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 5,009 | 0 | Text classifier for "calibrated decisions" (System-One reasoning); 5K likes with zero downloads suggests viral interest in verifiable, confidence-aware classification. |
| [Contrastive-LM/CLM-v0.1-8B](https://huggingface.co/Contrastive-LM/CLM-v0.1-8B) | Contrastive-LM | 673 | 2,951 | Contrastive verifier/reranker for LLM outputs; 2.9K downloads indicate growing RAG and agent pipelines adopting learned verification over heuristic filtering. |
| [PSRben/VisionHOPE](https://huggingface.co/PSRben/VisionHOPE) | PSRben | 376 | 1,279 | Image classification model with ArXiv-backed architecture (2609.33325); academic provenance drives interest in reproducible vision benchmarks. |
| [SupersonicLabs/Julia-1](https://huggingface.co/SupersonicLabs/Julia-1) | SupersonicLabs | 372 | 2,909 | Multilingual text-classification decision model; steady downloads show utility in content moderation and intent routing across languages. |
| [fastino/GLiNER2.5-Decide](https://huggingface.co/fastino/GLiNER2.5-Decide) | fastino | 328 | 43,826 | Token classifier for extraction and intent classification; 43K downloads confirm GLiNER family as go-to for lightweight, few-shot NER in production. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF) | abenzerps | 2,853 | 1,376,248 | GGUF quantization of Qwen-Image-2.1 with safety filters removed; 1.37M downloads reveal massive demand for uncensored local image generation. |
| [prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 2,359 | 3,869,715 | 2-bit ternary quantized 27B model; 3.87M downloads prove extreme quantization viability for consumer GPU deployment. |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 1,908 | 1,678,428 | GSQ/RCO mixed-precision quantized Qwen3.8-27B; 1.68M downloads show community trust in ISTA-DASLab's compression recipes. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 1,364 | 2,035,504 | Heavily fine-tuned uncensored Qwen3.8-27B

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*