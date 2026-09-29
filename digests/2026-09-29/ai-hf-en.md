# Hugging Face Trending Models Digest 2026-09-29

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-29 05:25 UTC

---

# Hugging Face Trending Models Digest — 2026-09-29

## Today's Highlights

The Qwen ecosystem dominates this week's leaderboard: **Qwen/Qwen3.8-27B** leads with 16.5k likes as a flagship vision-language model, while **Qwen/Qwen-Image-2.1** and its ecosystem variants (GGUF quantizations, ComfyUI ports, LoRA fine-tunes) occupy six slots. **Lightricks/LTX-2.5** signals maturing open video generation with 5.4k likes and 1.6M downloads. Quantization innovation is intense — **prism-ml/Ternary-Bonsai-2-27B-gguf** pushes 2-bit ternary quantization to 3.4M downloads, and **ISTA-DASLab** introduces mixed-precision GSQ/RCO GGUF. Chinese labs (Qwen, DeepSeek, Xiaomi, XingChen, Taichu) contribute 11 of the top 30 models, emphasizing multimodal and efficient deployment.

---

## Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [XingChen-AGI/Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B) | XingChen-AGI | 1,802 | 45,834 | A 29B MoE model (4B active) optimized for conversational text generation; notable for strong instruction-following at reduced compute. |
| [XiaomiMiMo/MiMo-V2.6-Pro-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL) | XiaomiMiMo | 587 | 76,518 | RL-tuned multimodal LLM from Xiaomi's MiMo series; balances reasoning and conversational ability with 9B-class efficiency. |
| [Altworld/Hemmingway-1](https://huggingface.co/Altworld/Hemmingway-1) | Altworld | 765 | 7,478 | Qwen3.8-based text-generation model fine-tuned for creative writing; highlights community specialization on literary tasks. |
| [XiaomiMiMo/MiMo-V2.6-Flash-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL) | XiaomiMiMo | 513 | 28,842 | Speed-optimized RL variant of MiMo-V2.6; targets low-latency deployment while retaining multimodal awareness. |
| [orcarouter/OrcaSAQ-2-27B](https://huggingface.co/orcarouter/OrcaSAQ-2-27B) | orcarouter | 196 | 1,663 | Qwen3.5-derived 27B model optimized for vLLM serving; focuses on structured output and agentic workflows. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 16,508 | 6,844,348 | Flagship vision-language model with 27B parameters; leads weekly likes and downloads, setting new open multimodal benchmark. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 5,449 | 1,595,377 | Unified diffusion model for image→video, text→video, and video→video; single-file deployment enables broad creative adoption. |
| [Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 2,603 | 58,693 | Base text-to-image and image-editing model; anchors a large quantization/fine-tune ecosystem (6+ variants trending this week). |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 3,872 | 668,537 | Multimodal Flash variant from DeepSeek; combines fast inference with strong vision-language reasoning across diverse tasks. |
| [XingChen-AGI/TeleOCR](https://huggingface.co/XingChen-AGI/TeleOCR) | XingChen-AGI | 818 | 27,904 | Qwen2.5-VL-based OCR specialist; excels at document and scene text extraction with vision-language understanding. |
| [TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B) | TaichuAI | 1,722 | 11,738 | 9B vision-language model emphasizing spatial reasoning; targets robotic and embodied AI applications. |
| [XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B) | XiaomiMiMo | 554 | 9,994 | Distilled 9B multimodal model from Qwen3.5 teacher; delivers strong vision-language performance at edge-friendly size. |
| [apple/LensVLM-9B](https://huggingface.co/apple/LensVLM-9B) | apple | 262 | 1,840 | Apple's 9B vision-language model on Qwen3.5 backbone; focuses on efficient on-device multimodal understanding. |
| [Edge0/Audio8-ASR-Infinite](https://huggingface.co/Edge0/Audio8-ASR-Infinite) | Edge0 | 1,434 | 19,963 | Streaming ASR model with infinite-context capability; enables real-time long-form transcription without chunking. |
| [nvidia/Nemotron-3-Diarization](https://huggingface.co/nvidia/Nemotron-3-Diarization) | nvidia | 469 | 26,428 | Speaker diarization and voice-activity detection model; optimized for NVIDIA NeMo pipelines with GGUF support. |
| [netease-youdao/Confucius4-R2T2](https://huggingface.co/netease-youdao/Confucius4-R2T2) | netease-youdao | 448 | 9,336 | Qwen3-based ASR model (Confucius4 series); targets high-accuracy Chinese/English speech recognition. |
| [inclusionAI/Ming-Image-0.1-Design](https://huggingface.co/inclusionAI/Ming-Image-0.1-Design) | inclusionAI | 330 | 0 | Design-focused text-to-image model; specialized for graphic design and layout generation workflows. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 4,348 | 0 | Calibrated decision-making classifier ("System One" architecture); targets reliable binary classification with confidence estimates. |
| [Contrastive-LM/CLM-v0.1-8B](https://huggingface.co/Contrastive-LM/CLM-v0.1-8B) | Contrastive-LM | 491 | 1,271 | Contrastive-learning verifier/reranker; improves retrieval and ranking pipelines with 8B parameter efficiency. |
| [akhilaaa3/Jev-Omni](https://huggingface.co/akhilaaa3/Jev-Omni) | akhilaaa3 | 299 | 577 | Gemma4-based multimodal text classifier; unifies image-text understanding with classification heads. |
| [fastino/GLiNER2.5-Decide](https://huggingface.co/fastino/GLiNER2.5-Decide) | fastino | 233 | 24,250 | GLiNER2.5 variant for token classification and intent detection; zero-shot entity extraction with decision heads. |
| [SupersonicLabs/Julia-1](https://huggingface.co/SupersonicLabs/Julia-1) | SupersonicLabs | 268 | 1,006 | Multilingual decision-model for text classification; emphasizes cross-lingual transfer and low-resource deployment. |
| [AlexWortega/openjev](https://huggingface.co/AlexWortega/openjev) | AlexWortega | 621 | 0 | Qwen3.5-based cross-encoder for NLI and classification; open reproduction of JEV-style entailment modeling. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 2,238 | 3,457,124 | Extreme 2-bit ternary quantization of 27B LLM via llama.cpp; 3.4M downloads prove demand for ultra-compressed models. |
| [abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF) | abenzerps | 2,296 | 1,062,921 | Uncensored GGUF quantization of Qwen-Image-2.1; enables local image generation with ComfyUI integration. |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 1,814 | 1,655,818 | Mixed-precision GSQ/RCO quantization of Qwen3.8-27B; balances quality and size for consumer GPU deployment. |
| [Viggle/Qwen-Image-2.1-viggle-turbo](https://huggingface.co/Viggle/Qwen-Image-2.1-viggle-turbo) | Viggle | 391 | 175,907 | LoRA fine-tune for accelerated Qwen-Image-2.1 inference; targets turbo-speed generation with quality retention. |
| [Comfy-Org/Qwen-Image-2.1](https://huggingface.co/Comfy-Org/Qwen-Image-2.1) | Comfy-Org | 830 | 4,351,753 | ComfyUI-native single-file distribution of Qwen-Image-2.1; 4.3M downloads reflect ComfyUI ecosystem dominance. |
| [pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF](https://huggingface.co/pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF) | pottokao | 316 | 158,806 | FP8-quantized GGUF text encoder for Qwen-Image-2.1; reduces VRAM for text-conditioned generation pipelines. |
| [unsloth/Qwen-Image-2.1-GGUF](https://huggingface.co/unsloth/Qwen-Image-2.1-GGUF) | unsloth | 289 | 220,231 | Unsloth-optimized GGUF quantization; focuses on fast loading and broad hardware compatibility for image generation. |

---

## Ecosystem Signal

The Qwen model family has become the de facto open multimodal backbone: Qwen3.8-27B (16.5k likes) and Qwen-Image-2.1 (with six ecosystem variants) demonstrate how a single architecture spans VL, image gen, and quantization targets. Chinese labs now lead open-weight multimodal releases — DeepSeek-V4.1-Flash, Xiaomi MiMo series, XingChen TeleOCR/Xing4.0, and Taichu ZDTaichu5.0 collectively cover vision-language, OCR, speech, and spatial reasoning. Quantization has moved beyond standard 4-bit GGUF: ternary 2-bit (prism-ml), mixed-precision GSQ/RCO (ISTA-DASLab), and FP8 text-encoder quant (pottokao) show the community optimizing for every hardware tier. Video generation is the next frontier — Lightricks LTX-2.5's 5.4k likes and unified image/video pipeline indicate maturing open video models. Proprietary labs (Apple, NVIDIA) contribute specialized models (LensVLM, Nemotron-3-Diarization) rather than general LLMs, signaling a shift toward open-weight dominance in foundation models with proprietary differentiation at the

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*