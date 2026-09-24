# Hugging Face Trending Models Digest 2026-09-24

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-24 04:23 UTC

---

# Hugging Face Trending Models Digest — 2026-09-24

---

## 1. Today's Highlights

The Qwen model family dominates this week's trending list, with **Qwen3.8-27B** (16K+ likes) and **Qwen3.8-Flash-Next** (5.6K likes) leading multimodal language models, while **Qwen-Image-2.1** anchors the image generation space with multiple community quantizations and ComfyUI integrations. Video generation surges with **MiniMax-H3** (5.6K likes, 3.6M downloads) and **Lightricks LTX-2.5** (4.9K likes) offering text-to-video and image-to-video pipelines. Quantization innovation is a major theme: **prism-ml's Ternary-Bonsai-2-27B** pushes 2-bit ternary quantization across GGUF and MLX formats, and **ISTA-DASLab's GSQ-RCO** mixed-precision GGUF for Qwen3.8-27B shows strong adoption. Specialized models like **convaiinnovations/laya** (3.1K likes) for calibrated decision-making and **netease-youdao/Confucius4-R2T2** for ASR highlight niche capability expansion.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 16,151 | 6,912,469 | Flagship multimodal LLM with image-text-to-text capability; massive adoption (6.9M downloads) signals strong community trust in Qwen3.5 architecture for conversational and vision-language tasks. |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,644 | 807,550 | Experimental "Qwen4" preview model optimized for speed and efficiency; early adopters are benchmarking its conversational and image-text-to-text performance against the 27B flagship. |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 3,672 | 570,909 | Latest Flash variant from DeepSeek with image-text-to-text pipeline; 570K downloads indicate rapid uptake for cost-effective multimodal inference. |
| [XingChen-AGI/Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B) | XingChen-AGI | 1,627 | 39,009 | 29B parameter model with A4B architecture targeting text-generation and conversational use; notable for emerging Chinese AGI lab pushing open-weight scaling. |
| [ukisai/Swift-Qwen3.8-27b](https://huggingface.co/ukisai/Swift-Qwen3.8-27b) | ukisai | 563 | 17,837 | Optimized Qwen3.8-27B variant with "efficient-thinking" focus; community fine-tune exploring reasoning efficiency on the base Qwen3.5 architecture. |
| [ukisai/Swift-Qwen3.8-27B-GGUF](https://huggingface.co/ukisai/Swift-Qwen3.8-27B-GGUF) | ukisai | 386 | 168,762 | GGUF quantization of the Swift variant for llama.cpp deployment; 168K downloads show strong demand for quantized efficient-thinking models on consumer hardware. |
| [Altworld/Hemmingway-1](https://huggingface.co/Altworld/Hemmingway-1) | Altworld | 586 | 3,787 | Qwen3.8-based text-generation model with creative writing focus; niche adoption but notable for literary-style fine-tuning experimentation. |
| [yandex/AliceAI-Foundation-80B-A3B-Base](https://huggingface.co/yandex/AliceAI-Foundation-80B-A3B-Base) | yandex | 298 | 2,254 | 80B parameter MoE (A3B active) from Yandex with custom code; represents major Russian tech open-weight release targeting text-generation sovereignty. |
| [XiaomiMiMo/MiMo-V2.6-Pro-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL) | XiaomiMiMo | 452 | 4,070 | RL-tuned multimodal model from Xiaomi's MiMo family; explores reward-model alignment for text-generation with multimodal capabilities. |
| [XiaomiMiMo/MiMo-V2.6-Flash-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL) | XiaomiMiMo | 429 | 13,243 | Flash-optimized RL variant with 13K downloads; demonstrates Xiaomi's push for efficient aligned models in production settings. |
| [harshatheg/Qwen-2.5-1B-RLCD](https://huggingface.co/harshatheg/Qwen-2.5-1B-RLCD) | harshatheg | 559 | 0 | Tiny 1B model with RLCD (Reinforcement Learning from Contrastive Distillation) and MLX/parallel decoding for Apple Silicon; showcases on-device constrained generation. |
| [Cactus-Compute/needle3](https://huggingface.co/Cactus-Compute/needle3) | Cactus-Compute | 213 | 62,025 | Specialized tool-calling/function-calling model for on-device deployment; 62K downloads reflect strong demand for agentic capabilities in small footprints. |

---

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 5,631 | 3,664,216 | State-of-the-art text-to-video and image-to-video model; 3.6M downloads make it the most downloaded video generation model this week, signaling production readiness. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 4,916 | 1,638,605 | Versatile video generation suite (text-to-video, image-to-video, video-to-video, image-text-to-video); 1.6M downloads show strong creator/community adoption. |
| [Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 2,063 | 28,407 | Flagship text-to-image and image-editing model from Qwen; base for numerous community quantizations and ComfyUI integrations below. |
| [abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF) | abenzerps | 1,466 | 350,678 | Uncensored GGUF quantization for ComfyUI; 350K downloads reveal high demand for unrestricted image generation on consumer GPUs via llama.cpp. |
| [Comfy-Org/Qwen-Image-2.1](https://huggingface.co/Comfy-Org/Qwen-Image-2.1) | Comfy-Org | 636 | 2,220,609 | Official ComfyUI single-file diffusion distribution; 2.2M downloads confirm ComfyUI as primary deployment target for Qwen-Image ecosystem. |
| [XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B) | XiaomiMiMo | 412 | 3,253 | 9B distilled multimodal model from Qwen3.5 teacher; explores knowledge distillation for efficient image-text-to-text deployment. |
| [TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B) | TaichuAI | 761 | 6,934 | Vision-language model with spatial reasoning focus; emerging Chinese multimodal lab targeting embodied AI and 3D understanding. |
| [m-a-p/YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B) | m-a-p | 986 | 22,415 | Music generation model with symbolic planning and agentic editing; 3B parameters enable creative audio workflows with structured control. |

---

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 3,150 | 0 | Text-classification model for "calibrated decisions" (System One); 3.1K likes with zero downloads suggests pre-release buzz for reliable classification/routing. |
| [AlexWortega/openjev](https://huggingface.co/AlexWortega/openjev) | AlexWortega | 529 | 0 | Cross-encoder NLI model on Qwen3.5 base for natural language inference; zero downloads but strong like count indicates research interest in entailment tasks. |
| [convaiinnovations/laya-multilingual](https://huggingface.co/convaiinnovations/laya-multilingual) | convaiinnovations | 224 | 0 | Multilingual variant of laya using MM-BERT; extends calibrated decision-making to cross-lingual scenarios. |
| [netease-youdao/Confucius4-R2T2](https://huggingface.co/netease-youdao/Confucius4-R2T2) | netease-youdao | 362 | 3,708 | ASR model built on Qwen3-ASR architecture (R2T2 = Recognition-to-Text-to-Text); NetEase Youdao's push for open Chinese speech recognition. |

---

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 4,564 | 7,134,167 | Official Unsloth GGUF quantization of Qwen3.8-27B; 7.1M downloads make it the most downloaded model this week, confirming Unsloth as default quantization provider. |
| [prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 1,960 | 2,815,979 | 2-bit ternary quantization (GGUF) pushing extreme compression; 2.8M downloads show appetite for sub-4-bit models on consumer hardware via llama.cpp. |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 1,622 | 1,414,991 | Mixed-precision GSQ (Group-wise Sparsity Quantization) + RCO quantization; 1.4M downloads signal academic quantization research reaching production. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 1,131 | 1,452,915 | Heavily merged/fine-tuned "kitchen sink" GGUF (Unsloth) with uncensored coding focus; 1.45M downloads reflect community appetite for merged specialist models. |
| [prism-ml/Ternary-Bonsai-2-27B-mlx-2bit](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-mlx-2bit) | prism-ml | 359 | 48,214 | Same ternary 2-bit model adapted for Apple MLX; 48K downloads show growing Apple Silicon optimization ecosystem. |
| [pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF](https://huggingface.co/pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF) | pottokao | 210 | 74,291 | FP8-quantized text encoder for Qwen-Image-2.1 in GGUF/ComfyUI; niche but critical for memory-constrained image generation pipelines. |

---

## 3. Ecosystem Signal

The Qwen ecosystem has achieved **platform-level dominance**: the base Qwen3.8-27B (16K likes, 6.9M downloads) and Qwen-Image-2.1 anchor three of the top four model families, with Unsloh, ISTA-DASLab, prism-ml, and DavidAU all building quantization/fine-tune layers on top. **Open-weight multimodal video** is the fastest-moving frontier—MiniMax-H3 (3.6M downloads) and LTX-2.5 (1.6M) prove production-grade text-to-video is now open and accessible. **Quantization has matured into a competitive sub-ecosystem**: ternary 2-bit (prism-ml), mixed-precision GSQ-RCO (ISTA-DASLab), and Unsloth's optimized GGUFs collectively account for >11M downloads, showing that compression research directly translates to user adoption. **Chinese labs (Qwen, MiniMax, XingChen, Taichu, Xiaomi, NetEase, Yandex-adjacent)** now contribute ~40% of trending models, narrowing the gap with Western labs. **Specialized small models** (needle3 for tool-calling, laya for calibrated classification, YuE2 for music) demonstrate that "agentic" and "reliable" capabilities are being distilled into deployable 1–3B parameter packages. The near-zero downloads on high-like classification models (laya, openjev) suggest a **pre-release evaluation phase** where communities validate benchmarks before deployment.

---

## 4. Worth Exploring

1. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — Highest-download video generation model (3.6M) with both text-to-video and image-to-video; ideal for prototyping video applications or studying SOTA open video diffusion architecture.  
2. **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — 2-bit ternary quantization at 27B parameters with 2.8M downloads; best-in-class for testing extreme compression limits on consumer GPUs via llama.cpp.  
3. **[Cactus-Compute/needle3](https://huggingface.co/Cactus-Compute/needle3)** — Purpose-built 62K-download tool-calling model for on-device function calling; essential for building local agentic workflows without API dependencies.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*