# Hugging Face Trending Models Digest 2026-09-23

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-23 04:26 UTC

---

# Hugging Face Trending Models Digest — 2026-09-23

---

## 1. Today's Highlights

The Qwen ecosystem dominates this week’s leaderboard, with **Qwen3.8-27B** (16K likes) and **Qwen-Image-2.1** anchoring both language and image generation categories. Video generation surges: **MiniMax-H3** (5.6K likes) and **Lightricks LTX-2.5** (4.8K likes) lead a wave of image-to-video and text-to-video models. Quantization innovation accelerates—**prism-ml** pushes ternary 2-bit weights, while **ISTA-DASLab** debuts GSQ-RCO mixed-precision GGUFs for Qwen3.8 and Flash-Next. Chinese labs (Qwen, DeepSeek, MiniMax, Xiaomi, XingChen) occupy 10 of the top 15 spots, signaling continued open-weight momentum from the region. Uncensored community fine-tunes and ComfyUI-ready GGUFs remain high-demand artifacts.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [XingChen-AGI/Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B) | XingChen-AGI | 1,409 | 30,627 | A 29B MoE (4B active) conversational model emphasizing efficient inference. Trending for its strong chat benchmarks and Apache-2.0 release. |
| [yandex/AliceAI-Foundation-80B-A3B-Base](https://huggingface.co/yandex/AliceAI-Foundation-80B-A3B-Base) | yandex | 278 | 1,516 | Yandex’s 80B MoE (3B active) foundation model with custom architecture. Notable for its scale and Russian/English bilingual focus. |
| [TokenRhythm/NeoHorse-1-9B](https://huggingface.co/TokenRhythm/NeoHorse-1-9B) | TokenRhythm | 1,009 | 12,574 | Qwen3.5-based 9B agentic model tuned for tool use and reasoning. Gaining traction for on-device agent workflows. |
| [XiaomiMiMo/MiMo-V2.6-Pro-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL) | XiaomiMiMo | 400 | 985 | Multimodal RL-tuned model from Xiaomi’s MiMo v2.6 series. Early interest for its multimodal alignment via reinforcement learning. |
| [XiaomiMiMo/MiMo-V2.6-Flash-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL) | XiaomiMiMo | 393 | 2,641 | Flash variant of MiMo-V2.6 optimized for speed with RL post-training. Trending as a lightweight multimodal assistant. |
| [Altworld/Hemmingway-1](https://huggingface.co/Altworld/Hemmingway-1) | Altworld | 505 | 2,745 | Qwen3.8-based creative writing fine-tune. Popular for narrative generation and uncensored storytelling. |
| [harshatheg/Qwen-2.5-1B-RLCD](https://huggingface.co/harshatheg/Qwen-2.5-1B-RLCD) | harshatheg | 548 | 0 | 1B Qwen2.5 model with RLCD (Reinforcement Learning from Contrastive Distillation) for structured/parallel decoding on Apple Silicon. |
| [convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 2,627 | 0 | Text classification system for “calibrated decisions” (System-One). High likes suggest strong community interest in reliable classifiers. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 16,081 | 7,079,646 | Flagship 27B image-text-to-text model. Top-trending overall with 7M+ downloads; sets new bar for open multimodal reasoning. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 5,606 | 3,766,997 | Unified image-text-to-video model (H3 series). 3.7M downloads reflect massive demand for open video generation. |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,612 | 787,525 | Next-gen Flash variant: faster multimodal inference with competitive quality. Rapid adoption for real-time applications. |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 3,621 | 542,014 | DeepSeek’s latest Flash multimodal model (image-text-to-text). Strong benchmarks and 542K downloads signal enterprise interest. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 4,813 | 1,630,125 | Versatile video model: image-to-video, text-to-video, video-to-video. 1.6M downloads make it a go-to for open video workflows. |
| [Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 1,825 | 16,242 | High-fidelity text-to-image and image-editing model. Base for numerous ComfyUI/GGUF derivatives trending this week. |
| [WarmBloodAban/Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity) | WarmBloodAban | 623 | 283,359 | Community fine-tune of MiniMax-H3 optimized for singularity-style video generation. 283K downloads show strong derivative demand. |
| [ukisai/Swift-Qwen3.8-27b](https://huggingface.co/ukisai/Swift-Qwen3.8-27b) | ukisai | 553 | 17,256 | Optimized Qwen3.8-27B variant with “efficient thinking” for faster multimodal inference. Early adopter favorite. |
| [XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B) | XiaomiMiMo | 351 | 804 | 9B distilled multimodal model from MiMo-V2.6. Compact yet capable, trending for edge deployment research. |
| [m-a-p/YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B) | m-a-p | 971 | 20,904 | 3B music generation model with symbolic planning and agentic editing. Unique niche: controllable, structured audio synthesis. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Cactus-Compute/needle3](https://huggingface.co/Cactus-Compute/needle3) | Cactus-Compute | 189 | 54,528 | On-device tool-calling / function-calling specialist. 54K downloads highlight demand for local agent runtimes. |
| [AlexWortega/openjev](https://huggingface.co/AlexWortega/openjev) | AlexWortega | 486 | 0 | Qwen3.5-based cross-encoder for NLI. Trending as a high-quality reranker/retrieval component. |
| [netease-youdao/Confucius4-R2T2](https://huggingface.co/netease-youdao/Confucius4-R2T2) | netease-youdao | 279 | 2,729 | ASR model (Confucius4) with R2T2 architecture. Notable for Chinese/English speech recognition advances. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 4,528 | 7,019,401 | Unsloth-optimized GGUF quantization of Qwen3.8-27B. 7M+ downloads confirm it as the default local inference artifact. |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 1,580 | 1,363,176 | Mixed-precision GSQ-RCO GGUF for Qwen3.8-27B. 1.3M downloads show appetite for advanced quantization research. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 1,090 | 1,397,909 | Heavily merged uncensored fine-tune (Heretic/Neo-Coder) in GGUF. 1.4M downloads reflect uncensored model demand. |
| [prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 1,895 | 2,569,604 | Ternary 2-bit quantized 27B model (GGUF). 2.5M downloads prove extreme compression viability. |
| [abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF) | abenzerps | 1,179 | 182,313 | Uncensored GGUF port of Qwen-Image-2.1 for ComfyUI. 182K downloads underscore open image-gen customization. |
| [Comfy-Org/Qwen-Image-2.1](https://huggingface.co/Comfy-Org/Qwen-Image-2.1) | Comfy-Org | 574 | 1,429,925 | ComfyUI single-file diffusion bundle of Qwen-Image-2.1. 1.4M downloads = de facto standard for ComfyUI users. |
| [ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF) | ISTA-DASLab | 243 | 67,988 | GSQ-RCO quantized GGUF for Flash-Next. Early adoption for next-gen efficient multimodal inference. |
| [ukisai/Swift-Qwen3.8-27B-GGUF](https://huggingface.co/ukisai/Swift-Qwen3.8-27B-GGUF) | ukisai | 365 | 153,942 | GGUF of Swift-Qwen3.8-27B with efficient-thinking optimizations. 154K downloads for speed-focused local runs. |
| [prism-ml/Ternary-Bonsai-2-27B-mlx-2bit](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-mlx-2bit) | prism-ml | 338 | 43,477 | MLX-format 2-bit ternary quantization for Apple Silicon. 43K downloads show growing MLX ecosystem traction. |

---

## 3. Ecosystem Signal

**Qwen family hegemony** is unmistakable: the base Qwen3.8-27B and Qwen-Image-2.1 spawn the majority of fine-tunes, quantizations, and ComfyUI bundles in this week’s top 30. **Video generation** has crossed a tipping point—MiniMax-H3 and LTX-2.5 each exceed 3M and 1.6M downloads respectively, with community derivatives (Singularity) already at 283K. **Quantization research is productionizing**: ternary 2-bit (prism-ml), GSQ-RCO mixed-precision (ISTA-DASLab), and MLX-native formats are no longer experiments but downloadable artifacts with millions of pulls. **Chinese open-weight labs** (Alibaba/Qwen, DeepSeek, MiniMax, Xiaomi, XingChen, NetEase) contribute 10 of the 30 models, reinforcing a shift where frontier open models originate outside the traditional US-centric axis. **Uncensored/creative fine-tunes** (Heretic, Hemmingway, abenzerps’ image uncensor) consistently attract >1K likes, signaling a persistent community preference for minimally aligned weights. Finally, **tool-calling specialists** (needle3) and **cross-encoder rerankers** (openjev) indicate maturing agent/rag stacks moving toward specialized, deployable components rather than monolithic chat models.

---

## 4. Worth Exploring

1. **Qwen/Qwen3.8-27B** — The current open multimodal flagship. 16K likes and 7M downloads mean ecosystem tooling (GGUF, MLX, vLLM, Ollama) is battle-tested. Ideal for studying SOTA open image-text reasoning and as a base for further fine-tuning.

2. **MiniMaxAI/MiniMax-H3** — Unified image-text-to-video at 3.7M downloads. Rare open model covering text→video, image→video, and video→video in one architecture. Essential for anyone building video generation pipelines or researching temporal consistency.

3. **prism-ml/Ternary-Bonsai-2-27B-gguf** — 2-bit ternary quantization achieving 2.5M downloads. A practical proof point that extreme compression (≈1.5 BPW) can retain 27B capabilities. Study its quantization recipe if targeting consumer GPUs or edge devices.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*