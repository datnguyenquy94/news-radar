# Hugging Face Trending Models Digest 2026-09-26

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-26 04:38 UTC

---

# Hugging Face Trending Models Digest — 2026-09-26

## Today's Highlights

The Qwen ecosystem dominates this week's trends with multiple high-profile releases spanning image generation (Qwen-Image-2.1), multimodal LLMs (Qwen3.8-27B, Qwen3.8-Flash-Next), and a flourishing quantization/fine-tune community. Video generation takes a leap forward with Lightricks' LTX-2.5, while Xiaomi's MiMo family pushes multimodal capabilities across model sizes. Quantization remains a massive driver of adoption—GGUF variants from Unsloth, ISTA-DASLab, and community tuners collectively garner millions of downloads. Notably, specialized audio models (ASR, diarization) and OCR tools are gaining traction alongside general-purpose multimodal systems.

---

## Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [XingChen-AGI/Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B) | XingChen-AGI | 1,687 | 42,950 | A 29B parameter text-generation model with conversational capabilities, trending for its strong instruction-following and open-weight accessibility. |
| [Altworld/Hemmingway-1](https://huggingface.co/Altworld/Hemmingway-1) | Altworld | 678 | 4,978 | Built on Qwen3.5-text architecture, this model focuses on high-quality text generation and chat, gaining attention for its creative writing prowess. |
| [yandex/AliceAI-Foundation-80B-A3B-Base](https://huggingface.co/yandex/AliceAI-Foundation-80B-A3B-Base) | yandex | 333 | 2,911 | An 80B-parameter base model with custom code, representing Yandex's large-scale open-weight foundation for further fine-tuning and research. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 2,331 | 42,469 | State-of-the-art text-to-image and image-editing model with diffusers support, leading the open-weight image generation space. |
| [XiaomiMiMo/MiMo-V2.6-Pro-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL) | XiaomiMiMo | 505 | 42,062 | Multimodal text-generation model with RL fine-tuning, notable for integrating vision-language capabilities in a pro-tier release. |
| [TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B) | TaichuAI | 1,071 | 9,498 | Vision-language model emphasizing spatial reasoning, trending for its 9B parameter efficiency in image-text-to-text tasks. |
| [XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B) | XiaomiMiMo | 480 | 6,652 | Distilled 9B multimodal model from Qwen3.5, offering strong image-text-to-text performance in a compact footprint. |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 16,294 | 6,579,319 | Flagship 27B multimodal model for image-text-to-text and conversation, the most-liked and downloaded model this week. |
| [XiaomiMiMo/MiMo-V2.6-Flash-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL) | XiaomiMiMo | 466 | 20,473 | Lightweight multimodal model with RL optimization, designed for fast text-generation and multimodal inference. |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 3,754 | 621,396 | High-performance image-text-to-text model from DeepSeek, trending for its flash attention architecture and strong multimodal benchmarks. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 5,124 | 1,598,133 | Advanced video generation suite supporting image-to-video, text-to-video, and video-to-video, leading open video synthesis. |
| [netease-youdao/Confucius4-R2T2](https://huggingface.co/netease-youdao/Confucius4-R2T2) | netease-youdao | 414 | 5,827 | ASR model built on Qwen3 architecture, optimized for streaming speech recognition with R2T2 framework. |
| [inclusionAI/Ming-Image-0.1-Design](https://huggingface.co/inclusionAI/Ming-Image-0.1-Design) | inclusionAI | 242 | 0 | Specialized text-to-image model for design tasks, using custom diffusers pipeline for creative image generation. |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,704 | 846,820 | Next-generation experimental multimodal model (Qwen4-exp) with flash attention, pushing conversational image-text capabilities. |
| [akhilaaa3/Jev-Omni](https://huggingface.co/akhilaaa3/Jev-Omni) | akhilaaa3 | 238 | 0 | Unified multimodal model based on Gemma4, combining image-text-to-text with text classification for versatile applications. |
| [Edge0/Audio8-ASR-Infinite](https://huggingface.co/Edge0/Audio8-ASR-Infinite) | Edge0 | 641 | 2,853 | Streaming ASR model with infinite context support, notable for real-time automatic speech recognition capabilities. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 3,711 | 0 | Calibrated decision-making text classifier (System-One), trending for its novel approach to reliable classification. |
| [AlexWortega/openjev](https://huggingface.co/AlexWortega/openjev) | AlexWortega | 580 | 0 | Cross-encoder NLI model on Qwen3.5, specialized for natural language inference and text classification tasks. |
| [nvidia/Nemotron-3-Diarization](https://huggingface.co/nvidia/Nemotron-3-Diarization) | nvidia | 349 | 11,459 | Voice activity detection and diarization model with GGUF support, enabling efficient speaker segmentation. |
| [convaiinnovations/laya-multilingual](https://huggingface.co/convaiinnovations/laya-multilingual) | convaiinnovations | 279 | 0 | Multilingual extension of Laya classifier using mMBERT, bringing calibrated decisions to multiple languages. |
| [StarDoc-AI/TeleOCR](https://huggingface.co/StarDoc-AI/TeleOCR) | StarDoc-AI | 316 | 32,056 | OCR-focused vision-language model on Qwen2.5-VL, optimized for document text extraction and image-text-to-text. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF) | abenzerps | 1,815 | 715,906 | Uncensored GGUF quantization of Qwen-Image-2.1 for ComfyUI, enabling local unrestricted image generation. |
| [prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 2,099 | 3,109,078 | 2-bit ternary quantized 27B LLM via llama.cpp, pioneering extreme compression for local deployment. |
| [Comfy-Org/Qwen-Image-2.1](https://huggingface.co/Comfy-Org/Qwen-Image-2.1) | Comfy-Org | 739 | 3,266,380 | ComfyUI-optimized single-file diffusion model repackaging Qwen-Image-2.1 for streamlined workflow integration. |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 1,708 | 1,510,016 | Mixed-precision GSQ+RCO quantized GGUF of Qwen3.8-27B, balancing quality and size for multimodal inference. |
| [pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF](https://huggingface.co/pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF) | pottokao | 265 | 126,393 | FP8 quantized text encoder GGUF for Qwen-Image-2.1, reducing VRAM usage in ComfyUI pipelines. |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 4,627 | 6,938,321 | Highly optimized GGUF quantization of Qwen3.8-27B via Unsloth, the most-downloaded model this week. |
| [Viggle/Qwen-Image-2.1-viggle-turbo](https://huggingface.co/Viggle/Qwen-Image-2.1-viggle-turbo) | Viggle | 241 | 47,873 | LoRA fine-tune of Qwen-Image-2.1 for turbo text-to-image and image-to-image generation speedups. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 1,183 | 1,546,398 | Heavily fine-tuned and quantized uncensored variant of Qwen3.8-27B, merging multiple techniques for coding and chat. |
| [unsloth/Qwen-Image-2.1-GGUF](https://huggingface.co/unsloth/Qwen-Image-2.1-GGUF) | unsloth | 229 | 130,465 | Unsloth-optimized GGUF quantization of Qwen-Image-2.1 for efficient local text-to-image generation. |

---

## Ecosystem Signal

The Qwen model family has become the de facto backbone of open multimodal development, spawning official releases (Qwen-Image-2.1, Qwen3.8-27B, Qwen3.8-Flash-Next), first-party quantizations (Unsloth), and a massive community fine-tune/quantization ecosystem (GGUF, LoRA, ternary quantization). Open-weight models continue to dominate downloads and likes, with proprietary models absent from the top-30. Quantization is no longer a niche—GGUF variants from Unsloth, ISTA-DASLab, and independent tuners account for tens of millions of downloads, signaling that local deployment on consumer hardware is a primary use case. Specialized audio (ASR, diarization) and vision (OCR, spatial reasoning) models are maturing rapidly, often built atop Qwen architectures, indicating a trend toward modular, task-specific distillation rather than monolithic generalists. Xiaomi's MiMo family and DeepSeek's Flash series show Chinese labs pushing multimodal SOTA at multiple scales, while Lightricks' LTX-2.5 demonstrates open video generation reaching production readiness.

---

## Worth Exploring

1. **Qwen/Qwen3.8-27B** — The flagship open multimodal LLM with 16k+ likes and 6.5M downloads; essential for anyone building vision-language applications or studying SOTA open models.
2. **Lightricks/LTX-2.5** — The most capable open video generation suite (image→video, text→video, video→video) with 5k+ likes and 1.6M downloads; a must-try for video synthesis research and creative workflows.
3. **prism-ml/Ternary-Bonsai-2-27B-gguf** — Pioneering 2-bit ternary quantization of a 27B LLM with 3.1M downloads; ideal for exploring extreme model compression and on-device deployment limits.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*