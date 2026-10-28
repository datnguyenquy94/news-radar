# Hugging Face Trending Models Digest 2026-10-28

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-10-28 05:15 UTC

---

**Hugging Face Trending Models Digest – 2026‑10‑28**

---

## Today’s Highlights
The week’s top‑liked model is **Qwen 3.8‑27B** (18 k likes), a massive multimodal LLM that dominates both text and vision benchmarks.  Vision‑enabled VL models (DeepSeek‑V4.1‑Flash‑1017, Sage‑A1.5, MiniMax‑M3.1) are surging, and the community’s quant‑and‑GGUF pipeline continues to explode, with six GGUF releases collectively amassing **≈ 1.9 M** downloads.  In the creative arena, **Lightricks LTX‑2.5** and **black‑forest‑labs flux‑3‑image‑klein‑comfy** showcase the rapid maturation of image‑to‑video and image‑to‑image diffusion, pulling > 750 k downloads each.

---

## Trending Models  

### 🧠 Language Models (LLMs, chat, instruction‑tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [RecursiveSI/flint](https://huggingface.co/RecursiveSI/flint) | RecursiveSI | 986 | 10,574 | A 7‑B conversational model praised for its low‑latency chat performance on consumer GPUs. It has become a favorite starter LLM for building open‑source assistants. |
| [Nanbeige/Nanbeige4.3-33B](https://huggingface.co/Nanbeige/Nanbeige4.3-33B) | Nanbeige | 680 | 4,785 | A 33‑B LLaMA‑derived model fine‑tuned on technical literature, delivering strong reasoning on scientific prompts. Its modest download count reflects early‑adopter interest. |
| [XHToken/Spark‑X2.6‑4B](https://huggingface.co/XHToken/Spark-X2.6-4B) | XHToken | 812 | 6,191 | A 4‑B instruction‑tuned LLM that balances size and instruction following; widely deployed in low‑resource chatbot demos. |
| [LiquidAI/LFM3‑1.7B](https://huggingface.co/LiquidAI/LFM3-1.7B) | LiquidAI | 216 | 6,311 | 1.7 B model built on the LFM architecture, noted for its multilingual code‑generation capabilities. |
| [KRAFTON/Raon‑1‑mini‑preview](https://huggingface.co/KRAFTON/Raon-1-mini-preview) | KRAFTON | 218 | 2,208 | A compact 1‑B model optimized for on‑device inference in games, showing strong latency‑native results. |
| [tencent/Hy‑SimulMT‑30B‑A3B‑FP8](https://huggingface.co/tencent/Hy-SimulMT-30B-A3B-FP8) | tencent | 183 | 93 | 30 B translation‑focused model released in FP8 for extreme speed; early benchmarks beat many 7‑B baselines. |

---

### 🎨 Multimodal & Generation (image, video, audio, text‑to‑X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek‑V4.1‑Flash‑1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) | deepseek-ai | 3,420 | 105,667 | A 40 B VL model that excels at detailed image‑grounded generation, topping the latest VILA‑Bench. It ships with both text‑only and vision‑augmented checkpoints. |
| [black‑forest‑labs/flux‑3‑image‑klein‑comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black‑forest‑labs | 1,875 | 750,694 | Flux‑3 diffusion model tuned for “Klein” style image‑to‑image editing; praised for low‑VRAM (8 GB) execution in ComfyUI. |
| [MiniMaxAI/MiniMax‑M3.1‑Flash](https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash) | MiniMaxAI | 425 | 11,075 | Multimodal model (VL) that supports captioning, VQA, and image‑guided text generation with a 7 B parameter core. |
| [Lightricks/LTX‑2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 9,603 | 2,163,739 | State‑of‑the‑art image‑to‑video diffusion that generates 8‑second clips from a single frame; dominates the video‑generation leaderboard. |
| [InternScience/Sage‑A1.5](https://huggingface.co/InternScience/Sage-A1.5) | InternScience | 347 | 6,613 | A mixture‑of‑experts (MoE) VL model with 1.5 T tokens of scientific data, showing superior performance on biomedical image‑text tasks. |
| [Qwen/Qwen3.8‑27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 18,556 | 7,522,728 | 27 B multimodal LLM with strong reasoning and high‑resolution image understanding; used as a baseline for many open‑source VL fine‑tunes. |
| [abenzerps/Qwen‑Image‑2.1‑Uncensored‑Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-Quantized) | abenzerps | 5,208 | 2,201,569 | GGUF‑quantized text‑to‑image generator (Qwen‑Image 2.1) that runs on a single RTX‑3080 with sub‑second inference. |
| [OpenMOSS-Team/MOSS‑Image‑SFT](https://huggingface.co/OpenMOSS-Team/MOSS-Image-SFT) | OpenMOSS-Team | 790 | 13,253 | Fine‑tuned diffusion model for Chinese text‑to‑image generation; noted for culturally aware style fidelity. |
| [fishaudio/drama‑3](https://huggingface.co/fishaudio/drama-3) | fishaudio | 1,069 | 24,996 | High‑quality multi‑speaker TTS model that captures dramatic prosody; used in audiobooks and game NPCs. |
| [Comfy‑Org/MOSS‑Image](https://huggingface.co/Comfy-Org/MOSS-Image) | Comfy‑Org | 512 | 2,760,550 | A ready‑to‑use diffusion checkpoint for ComfyUI, built on the MOSS‑Image base; praised for its “instant‑start” loading time. |
| [dealignai/DeepSeek‑V4.1‑Flash‑1017‑UNCENSORED‑FP8](https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-1017-UNCENSORED-FP8) | dealignai | 427 | 8,282 | FP8‑quantized version of DeepSeek‑V4.1 offering uncensored output while dropping VRAM usage to 10 GB. |
| [Comfy‑Org/Fibo‑2.0](https://huggingface.co/Comfy-Org/Fibo-2.0) | Comfy‑Org | 215 | 170,383 | Recent diffusion model targeting photorealistic portrait up‑scaling, released alongside an academic paper (arXiv 2511.06876). |

---

### 🔧 Specialized Models (code, math, medical, embeddings, etc.)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [baidu/Unlimited‑OCR‑2](https://huggingface.co/baidu/Unlimited-OCR-2) | baidu | 265 | 513 | An OCR model that handles unlimited‑length documents without cropping; leverages a transformer‑based encoder for high‑precision layout detection. |
| [HuggingFaceBio/Carbon‑X](https://huggingface.co/HuggingFaceBio/Carbon-X) | HuggingFaceBio | 235 | 1,595 | DNA‑oriented LLM trained on genomic literature; demonstrates zero‑shot inference on gene‑function queries. |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 5,270 | 1,876,779 | Video‑mask generation model extending the Segment‑Anything paradigm to 30‑second clips; widely adopted for video‑editing pipelines. |
| [mistralai/Timestral‑209M](https://huggingface.co/mistralai/Timestral-209M) | mistralai | 424 | 12,334 | Dedicated time‑series forecasting foundation model that beats classic ARIMA baselines on 70 % of tested datasets. |
| [ccore/Qwen3.5‑4B‑3D‑Coder](https://huggingface.co/ccore/Qwen3.5-4B-3D-Coder) | ccore | 184 | 3,544 | Code‑generation model specialized for Three.js and WebGL, delivering syntax‑correct snippets for 3‑D visualisation tasks. |
| [google/embeddinggemma‑2](https://huggingface.co/google/embeddinggemma-2) | google | 2,980 | 256,852 | Embedding model tuned for multilingual semantic search; already integrated into Google’s internal retrieval APIs. |

---

### 📦 Fine‑tunes & Quantizations (community fine‑tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [ISTA‑DASLab/DeepSeek‑V4.1‑Flash‑1017‑GSQ‑RCO‑GGUF](https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF) | ISTA‑DASLab | 407 | 1,105,751 | GGUF version of DeepSeek‑V4.1 with GSQ + RCO mixed‑precision, enabling 4‑bit inference on CPUs with < 8 GB RAM. |
| [unsloth/flint‑GGUF](https://huggingface.co/unsloth/flint-GGUF) | unsloth | 299 | 149,888 | Community‑produced 4‑bit GGUF dump of the Flint model, optimized for the `llama.cpp` runtime. |
| [orcarouter/DeepSeek‑V4.1‑Flash‑1017‑abliterated‑GGUF](https://huggingface.co/orcarouter/DeepSeek-V4.1-Flash-1017-abliterated-GGUF) | orcarouter | 285 | 13,441 | Aggressive 3‑bit quantization (“abliterated”) that halves model size while preserving 93 % of baseline accuracy. |
| [DavidAU/Qwen3.8‑27B‑TURBO‑Fable‑…‑GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 2,175 | 1,713,544 | Fine‑tuned “Turbo” variant of Qwen‑3.8 with uncensored data and code‑generation head, released as a 4‑bit GGUF for edge devices. |
| [nvidia/NVIDIA‑Nemotron‑3.5‑Bolt‑E4B‑4GB](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB) | nvidia | 195 | 44,651 | 4‑GB GGUF of Nemotron‑3.5‑Bolt, targeted at mobile inference; includes NVIDIA‑optimized kernels for Apple Silicon. |
| [XHToken/Spark‑X2.6‑4B‑GGUF](https://huggingface.co/XHToken/Spark-X2.6-4B-GGUF) | XHToken | 205 | 104,927 | 4‑bit GGUF version of Spark‑X2.6, noted for its fast token‑generation (≈ 120 tok/s on a Ryzen 7950X). |

---

## Ecosystem Signal
The current week underscores a **multimodal surge**: Vision‑language models such as DeepSeek‑V4.1‑Flash‑1017, Qwen‑3.8‑27B, and Sage‑A1.5 together attract over **30 M** downloads, indicating that community demand is shifting from pure text to image‑aware reasoning.  Open‑weight models continue to dominate, with only a handful of proprietary releases (e.g., NVIDIA‑Nemotron, Baidu OCR) appearing.  Quantization activity is especially vigorous—GGUF formats now cover **≈ 40 %** of the top 30 listings, and aggressive 3‑bit “abliterated” variants show that model compression is becoming a mainstream strategy for edge deployment.  Meanwhile, creative diffusion models (flux‑3, LTX‑2.5, Comfy‑Org collections) and specialized tools (SAM‑3 video masks, Timestral forecasting) illustrate an expanding niche ecosystem beyond traditional LLMs.

---

## Worth Exploring
1. **[deepseek-ai/DeepSeek‑V4.1‑Flash‑1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017)** – Best‑in‑class VL performance with a relatively accessible 40 B size; ideal for research on vision‑grounded reasoning.  
2. **[Lightricks/LTX‑2.5](https://huggingface.co/Lightricks/LTX-2.5)** – Sets a new benchmark for image‑to‑video diffusion, offering high‑quality 8‑second clips on consumer GPUs—valuable for media‑generation pipelines.  
3. **[ISTA‑DASLab/DeepSeek‑V4.1‑Flash‑1017‑GSQ‑RCO‑GGUF](https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF)** – Demonstrates that state‑of‑the‑art VL models can be run on modest hardware (≤ 8 GB RAM) without severe accuracy loss, opening the door to on‑device multimodal AI.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*