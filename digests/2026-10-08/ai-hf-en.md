# Hugging Face Trending Models Digest 2026-10-08

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-10-08 06:15 UTC

---

**Hugging Face Trending Models Digest – 2026‑10‑08**

---

## 1. Today’s Highlights  
The **Qwen family** continues to dominate the hub, with the base 27‑B “Qwen‑3.8‑27B” (17 k likes) and its Flash‑Next variants topping the multimodal leaderboard.  Quantized GGUF releases are exploding – more than a third of the top‑30 list are community‑built GGUF packs, many built on Qwen‑3.8 and the newer Qwen‑Image‑2.1.  Image‑to‑video (Lightricks LTX‑2.5) and high‑resolution text‑to‑image (abenzerps Qwen‑Image‑2.1‑Uncensored‑GGUF) show a shift toward richer generative media, while embedding models (Google EmbeddingGemma‑2) and a compact Turkish TTS engine (canberkkkkkk ema‑lightning) illustrate the persistent demand for lightweight, task‑specific tools.

---

## 2. Trending Models  

### 🧠 Language Models (LLMs, chat, instruction‑tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [autotrust/GEV-26B-Decide](https://huggingface.co/autotrust/GEV-26B-Decide) | autotrust | 1,454 | 895,867 | A 26 B Gemma‑4‑based classifier that excels at “decide‑type” prompts. Its safety‑tuned token set has attracted many decision‑making pipelines. |
| [Aleph-Alpha/Kolibri-1](https://huggingface.co/Aleph-Alpha/Kolibri-1) | Aleph‑Alpha | 790 | 5,775 | A MoE‑enabled 1‑trillion‑parameter text generator praised for strong chain‑of‑thought reasoning. Early adopters report notable speed‑up on GPU‑offloaded inference. |
| [jialinyyzz/humanizer](https://huggingface.co/jialinyyzz/humanizer) | jialinyyzz | 513 | 19,483 | Small (1 B) Gemma‑4‑unified model tuned to produce more “human‑like” dialogue. It’s popular for low‑resource chatbot demos. |
| [convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 5,355 | 28,497 | A calibrated decision‑making classifier built on System‑One, widely used for risk‑aware AI services. Its high like‑to‑download ratio signals strong community trust. |
| [Infatoshi/GLM-5.3-UNCENSORED-EXL3-3.0bpw](https://huggingface.co/Infatoshi/GLM-5.3-UNCENSORED-EXL3-3.0bpw) | Infatoshi | 292 | 1,903 | An uncensored GLM‑5.3 variant optimized with EXL3 3‑bit weights, showing competitive perplexity for its size. |
| [autotrust/GEV-26B-Decide-NVFP4](https://huggingface.co/autotrust/GEV-26B-Decide-NVFP4) | autotrust | 162 | 14,957 | Same architecture as GEV‑26B‑Decide but shipped in NVFP4 precision for faster CPU inference. It’s gaining traction in edge‑deployment scenarios. |

### 🎨 Multimodal & Generation (image, video, audio, text‑to‑X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [autotrust/JEV-27B-VL](https://huggingface.co/autotrust/JEV-27B-VL) | autotrust | 2,229 | 1,529,210 | A 27 B vision‑language model (Qwen‑3.5‑based) that handles complex image‑question tasks. Its strong zero‑shot performance is driving adoption in research demo stacks. |
| [Cloudflare/clef](https://huggingface.co/Cloudflare/clef) | Cloudflare | 1,841 | 9,513 | Image‑to‑text model fine‑tuned on web‑scale alt‑text data; praised for low latency on Cloudflare’s edge nodes. |
| [Cloudflare/clef-flash](https://huggingface.co/Cloudflare/clef-flash) | Cloudflare | 665 | 15,722 | A distilled “flash” version of CLEF that runs comfortably on consumer GPUs, sparking interest in on‑device vision‑language apps. |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 17,225 | 6,758,993 | The flagship 27 B multimodal chat model (image‑text‑to‑text) that set the current benchmark for open‑weight conversational AI. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 6,832 | 1,674,291 | Single‑file diffusion model that turns a single image into a short video clip; widely used in social‑media content pipelines. |
| [canberkkkkkk/ema-lightning](https://huggingface.co/canberkkkkkk/ema-lightning) | canberkkkkkk | 275 | 2,724 | Turkish‑language TTS model built on EMA‑Lightning, notable for high naturalness at sub‑50 MB size. |
| [Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 3,105 | 109,298 | Diffusion‑based text‑to‑image generator with built‑in in‑painting tools; frequently benchmarked against StableDiffusion‑XL. |
| [TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B) | TaichuAI | 2,913 | 12,970 | 9 B multimodal model that blends spatial reasoning with language, showing strong performance on visual‑spatial QA. |
| [Alissonerdx/BFS-Best-Face-Swap](https://huggingface.co/Alissonerdx/BFS-Best-Face-Swap) | Alissonerdx | 1,305 | 238,952 | Diffusion‑based face‑swap model (LoRA‑enhanced) that preserves identity better than earlier Dreambooth swaps. |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 6,025 | 1,609,433 | Flash‑optimized version of Qwen‑3.8 with mixed‑precision kernels, delivering ~2× throughput for image‑text tasks. |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek‑ai | 4,239 | 1,255,513 | Multimodal model that couples a V4.1 language core with a lightweight vision encoder; popular in open‑source RAG pipelines. |
| [Qwen/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF (GGUF)](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF) | ISTA‑DASLab | 345 | 553,685 | GGUF‑packed “Coder” variant targeting code‑generation inside multimodal prompts; its 4‑bit mixed‑precision makes it runnable on a laptop GPU. |

### 🔧 Specialized Models (embeddings, speech, medical, etc.)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2) | google | 1,027 | 7,562 | A 2‑B Gemma‑based embedding model released under a permissive licence; quickly adopted for semantic search and RAG indexing. |
| [unsloth/embeddinggemma-2-GGUF](https://huggingface.co/unsloth/embeddinggemma-2-GGUF) | unsloth | 179 | 11,470 | The same model quantized to GGUF (4‑bit) for ultra‑fast CPU inference; popular in low‑resource deployment. |
| [Cactus-Compute/whistle](https://huggingface.co/Cactus-Compute/whistle) | Cactus‑Compute | 148 | 2,249 | On‑device speech‑to‑text engine focused on low‑power microcontrollers; notable for <50 ms latency on ARM Cortex‑M. |

### 📦 Fine‑tunes & Quantizations (GGUF, AWQ, community‑packed)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF) | abenzerps | 3,600 | 1,820,627 | 4‑bit GGUF pack of Qwen‑Image‑2.1 that removes safety filters; it’s the most downloaded uncensored image model this week. |
| [Venastine-Research/Xing4.0-29B-A4B-GGUF](https://huggingface.co/Venastine-Research/Xing4.0-29B-A4B-GGUF) | Venastine‑Research | 636 | 33,633 | 29 B Xing‑4.0 model quantized to 4‑bit “A4B” GGUF, delivering near‑full‑precision quality on consumer GPUs. |
| [ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF) | ISTA‑DASLab | 701 | 3,080,123 | GGUF version of Flash‑Next using Group‑Scalar‑Quant (GSQ) and Run‑Time‑Coded‑Optimisation; provides excellent memory‑efficiency for multimodal inference. |
| [orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF) | orcarouter | 464 | 19,030 | 27 B “Cyber” variant of Orca‑SAQ‑2 packed in GGUF, popular among jailbreak‑oriented communities. |
| [prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism‑ml | 2,534 | 4,271,466 | A 2‑bit ternary quantized LLM that dramatically cuts VRAM while retaining strong benchmark scores; leading the ultra‑low‑precision movement. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable‑…‑GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 1,556 | 2,088,541 | Community‑fine‑tuned, uncensored GGUF of Qwen‑3.8‑27B with additional coding and “heretic” data; showcases the power of custom instruction‑tuning. |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA‑DASLab | 2,044 | 1,546,030 | 27 B Qwen model quantized with GSQ‑RCO, providing a sweet spot between speed and accuracy for on‑premise deployments. |
| [Viggle/Qwen-Image-2.1-viggle-turbo](https://huggingface.co/Viggle/Qwen-Image-2.1-viggle-turbo) | Viggle | 666 | 326,801 | A LoRA‑enhanced, turbo‑quantized GGUF of Qwen‑Image‑2.1 that reduces generation time by ~30 % on RTX‑3080. |
| [orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF) | orcarouter | 651 | 431,147 | Uncensored GGUF of Flash‑Next, favored for research that needs unrestricted visual‑language content. |
| [ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF) | ISTA‑DASLab | 345 | 553,685 | Same as the “Coder” variant above but listed separately for its dedicated code‑generation token set. |

---

## 3. Ecosystem Signal  

The hub’s upper echelon is **Qwen‑3.8**, whose base, Flash‑Next, and multiple community‑packed GGUF variants together account for over a third of total likes.  This reflects a strong momentum toward **open‑weight, high‑parameter multimodal models** that can be fine‑tuned or quantized by the community.  Parallelly, **GGUF** (the “ggml‑unstable‑format”) has become the de‑facto container for 4‑bit, 2‑bit, and ternary quantizations, enabling laptop‑scale inference of 20‑30 B models.  The surge of **ternary Bonsai** and **GSQ‑RCO** packs indicates an ecosystem focus on *memory‑efficient inference* without sacrificing benchmark performance.  While large proprietary families (e.g., DeepSeek, Google) still appear, the **open‑weight** wave—especially from Qwen, Aleph‑Alpha, and community‑driven fine‑tunes—dominates both likes and download velocity.  Embedding models (Google EmbeddingGemma‑2) and niche audio tools (ema‑lightning) remain niche but show steady growth, suggesting that specialized verticals are beginning to benefit from the broader multimodal innovation.

---

## 4. Worth Exploring  

| Model | Reason |
| :--- | :--- |
| **Qwen/Qwen3.8-27B** – the flagship multimodal chat model. Its blend of strong vision‑language reasoning and open licensing makes it the go‑to baseline for research and product prototyping. |
| **prism-ml/Ternary-Bonsai-2-27B-gguf** – the first 2‑bit LLM on the hub with competitive benchmark scores. Ideal for anyone needing to run a 27 B model on a single GPU with <8 GB VRAM. |
| **Lightricks/LTX-2.5** – a single‑file diffusion model that creates short videos from a single image. It bridges the gap between image generation and emerging video‑creation workflows, and its ease of use has driven rapid adoption. |

These three give you a glimpse of the most influential trends: **large open‑weight multimodal LLMs**, **ultra‑low‑precision quantization breakthroughs**, and **new generative media formats**. Happy exploring!

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*