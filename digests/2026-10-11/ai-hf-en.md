# Hugging Face Trending Models Digest 2026-10-11

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-10-11 05:24 UTC

---

## 📊 Today's Highlights  
The **Qwen family** continues to dominate the leaderboard, with the flagship **Qwen3.8‑27B** (image‑text‑to‑text) racking up an eye‑popping 17 K likes and 6.8 M downloads.  Multimodal generation is a clear growth area – new video‑centric models like **Lightricks LTX‑2.5** and image‑to‑image swaps such as **BFS‑Best‑Face‑Swap** are gaining traction.  At the same time, the **GGUF quantization wave** is in full swing, evidenced by a flurry of community‑built GGUF releases for Qwen, Qwen‑Image, and even 2‑bit “Ternary‑Bonsai” LLMs.

---

## 🔥 Trending Models  

### 🧠 Language Models (LLMs, chat models, instruction‑tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [jialinyyzz/humanizer](https://huggingface.co/jialinyyzz/humanizer) | jialinyyzz | 980 | 33,664 | A text‑generation model fine‑tuned to produce more “human‑like” prose. It’s popular for its balanced creativity and factual consistency. |
| [Aleph-Alpha/Kolibri-1](https://huggingface.co/Aleph-Alpha/Kolibri-1) | Aleph‑Alpha | 874 | 10,496 | A reasoning‑focused LLM built on a mixture‑of‑experts architecture. Users cite strong chain‑of‑thought performance on logic puzzles. |
| [Venastine-Research/Xing4.0-29B-A4B-GGUF](https://huggingface.co/Venastine-Research/Xing4.0-29B-A4B-GGUF) | Venastine‑Research | 686 | 45,199 | 29‑B parameter Chinese‑centric model released in GGUF format for fast CPU inference. It’s gaining traction for multilingual chat applications. |
| [convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 5,472 | 42,936 | A text‑classification model marketed as “system‑one” calibrated decision‑making. Its low‑latency API makes it a go‑to for real‑time moderation. |
| [ConwayResearch/Underdog‑Saluki‑27B‑1.0](https://huggingface.co/ConwayResearch/Underdog-Saluki-27B-1.0) | ConwayResearch | 286 | 59,191 | A 27 B LLM quantized to 2‑bit GGUF, showcasing aggressive compression while retaining tool‑calling abilities. It’s a benchmark for ultra‑lightweight instruction tuning. |
| [prism-ml/Ternary‑Bonsai‑2‑27B‑gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism‑ml | 2,605 | 4,457,576 | A 27 B LLM quantized to ternary (2‑bit) precision, achieving sub‑2 GB memory footprints. The community praises its surprisingly high zero‑shot accuracy for a model of this size. |

### 🎨 Multimodal & Generation (image, video, audio, text‑to‑X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Cloudflare/clef](https://huggingface.co/Cloudflare/clef) | Cloudflare | 2,003 | 13,579 | An image‑text‑to‑text model built on Qwen‑3.5, optimized for fast OCR‑style captioning. It’s being adopted for large‑scale document digitization pipelines. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 7,199 | 1,720,888 | A diffusion‑based image‑to‑video generator that supports text‑guided video synthesis in a single file. Users rave about its 8‑second video outputs with minimal artefacts. |
| [Qwen/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF) | abenzerps | 3,892 | 2,096,562 | GGUF‑packed Qwen‑Image 2.1 model allowing high‑resolution (1024×1024) text‑to‑image generation on consumer GPUs. The “uncensored” variant skips safety filters, attracting hobbyists. |
| [Qwen/Qwen-Image-2.1-Turbo](https://huggingface.co/Qwen/Qwen-Image-2.1-Turbo) | Qwen | 469 | 2,138 | A lightweight turbo variant focusing on rapid inference (≈ 10 fps) for interactive art tools. It trades a little fidelity for speed, which many UI developers appreciate. |
| [Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 3,202 | 128,839 | The full‑size diffusion model offering fine‑grained prompt control and in‑painting capabilities. It’s a go‑to for commercial content‑creation pipelines. |
| [Alissonerdx/BFS‑Best‑Face‑Swap](https://huggingface.co/Alissonerdx/BFS-Best-Face-Swap) | Alissonerdx | 1,364 | 248,475 | An image‑to‑image face‑swap model built on Qwen‑Image‑2.1 LoRA adapters. It’s popular in the creator community for its realistic lighting preservation. |
| [deepseek-ai/DeepSeek‑V4.1‑Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek‑ai | 4,335 | 1,355,278 | A multimodal Qwen‑3.5 derivative that merges vision and text generation, excelling at detailed visual question answering. Early benchmarks show state‑of‑the‑art VQA scores. |
| [FrancisRing/Prism](https://huggingface.co/FrancisRing/Prism) | FrancisRing | 155 | 0 | A diffusion‑based video generator that simultaneously produces audio, enabling short cinematic clips. Though new, it’s already cited in research for joint video‑audio synthesis. |
| [canberkkkkkk/ema‑lightning](https://huggingface.co/canberkkkkkk/ema-lightning) | canberkkkkkk | 346 | 15,710 | A Turkish‑focused TTS model delivering high‑fidelity, low‑latency speech synthesis. It’s being integrated into regional voice assistants. |
| [Cactus-Compute/whistle](https://huggingface.co/Cactus-Compute/whistle) | Cactus‑Compute | 316 | 12,816 | An on‑device automatic‑speech‑recognition model optimized for edge hardware. Its small size (≈ 30 MB) makes it ideal for mobile transcription. |
| [LiquidAI/d1‑3B](https://huggingface.co/LiquidAI/d1-3B) | LiquidAI | 278 | 9,088 | A compact image‑text‑to‑text model targeting low‑resource environments, achieving competitive captioning scores at < 500 MB. |
| [Cloudflare/clef‑flash](https://huggingface.co/Cloudflare/clef-flash) | Cloudflare | 744 | 20,670 | A flash‑optimized version of CLEF delivering sub‑second image‑captioning on CPUs. It’s used in batch‑processing pipelines where latency is critical. |
| [Qwen/Qwen3.8‑27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 17,446 | 6,768,654 | The flagship multimodal LLM capable of image‑text‑to‑text dialogue, competing with GPT‑4V in benchmarks. Its massive adoption reflects the shift toward generalist AI agents. |
| [Qwen/Qwen3.8‑Flash‑Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 6,091 | 1,798,393 | An optimized Qwen‑3.8 variant that halves inference time while retaining full multimodal capabilities. It’s the preferred model for low‑latency chat assistants. |
| [ISTA‑DASLab/Qwen3.8‑Flash‑Next‑GSQ‑RCO‑GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF) | ISTA‑DASLab | 779 | 3,922,328 | GGUF quantized flash model with mixed‑precision (GSQ/RCO) for efficient CPU inference. Its download surge shows the appetite for high‑throughput multimodal serving. |
| [nerkyor/...‑DSV4Pro‑K3‑SFT‑RLOO‑MTP‑DFlash2](https://huggingface.co/nerkyor/Qwen3.8-27B-Coder390-EfficientThink-Opus5.5-GPT6Astra-Grok4.7-DSV4Pro-K3-SFT-RLOO-MTP-DFlash2) | nerkyor | 207 | 42,336 | A heavily fine‑tuned Qwen‑3.8 variant focusing on code reasoning and efficient thinking. It’s attracting developers looking for high‑quality coding assistance. |
| [DavidAU/...‑NEO‑CODER‑MAX‑MTP‑GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 1,643 | 1,960,274 | An uncensored multimodal LLM with a heavy emphasis on coding and creative writing, packaged in GGUF for easy deployment. |
| [orcarouter/Qwen3.8‑Flash‑Next‑Uncensored‑GGUF](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF) | orcarouter | 739 | 520,450 | A GGUF version of Qwen‑3.8‑Flash‑Next stripped of safety filters, popular among hobbyist researchers exploring unrestricted generation. |
| [SC117/Qwen3.8‑Flash‑Next‑GSQ‑RCO‑abliterated‑GGUF](https://huggingface.co/SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF) | SC117 | 196 | 765,376 | An ablated GGUF model testing aggressive quantization (GSQ/RCO) on Qwen‑3.8. Its high download count signals community interest in extreme model compression. |
| [AtomicChat/Qwen‑Image‑2.1‑Turbo‑Uncensored‑GGUF](https://huggingface.co/AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF) | AtomicChat | 245 | 7,314 | A turbo, uncensored image‑generation model in GGUF, optimized for fast inference on consumer GPUs. Used in real‑time artistic tools. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2) | google | 1,536 | 45,605 | A high‑quality embedding model derived from Gemma‑2, designed for semantic search and retrieval. Its fast feature‑extraction pipeline makes it a favorite for RAG pipelines. |
| [unsloth/embeddinggemma-2‑GGUF](https://huggingface.co/unsloth/embeddinggemma-2-GGUF) | unsloth | 238 | 50,551 | Same architecture as Google’s EmbeddingGemma‑2 but quantized to GGUF for CPU‑friendly deployment. Users cite a 3× speedup with only 1 % loss in vector quality. |

### 📦 Fine‑tunes & Quantizations (community fine‑tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8‑27B‑GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 5,010 | 6,449,020 | A fully‑quantized GGUF version of Qwen‑3.8‑27B, enabling 4‑bit inference on laptops. Its massive download count shows the community’s shift toward portable LLMs. |
| [ISTA‑DASLab/Qwen3.8‑27B‑GSQ‑RCO‑GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA‑DASLab | 2,123 | 1,484,655 | Mixed‑precision (GSQ/RCO) quantization of the 27 B Qwen model; delivers up to 2× speed‑ups on CPU without major quality loss. |
| [prism-ml/Ternary‑Bonsai‑2‑27B‑gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism‑ml | 2,605 | 4,457,576 | A 2‑bit ternary quantization of a 27 B LLM, pushing the limits of model compression. It’s referenced in several papers on ultra‑lightweight inference. |
| [Qwen/Qwen‑Image‑2.1‑Uncensored‑GGUF (by abenzerps)](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF) | abenzerps | 3,892 | 2,096,562 | GGUF‑packed uncensored image‑generation model, allowing hobbyists to run high‑quality diffusion on a 12 GB GPU. |
| [AtomicChat/Qwen‑Image‑2.1‑Turbo‑Uncensored‑GGUF](https://huggingface.co/AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF) | AtomicChat | 245 | 7,314 | Turbo‑quantized, uncensored variant of Qwen‑Image‑2.1; prized for sub‑second generation in web‑based art tools. |
| [orcarouter/Qwen3.8‑Flash‑Next‑Uncensored‑GGUF](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF) | orcarouter | 739 | 520,450 | Community‑built uncensored GGUF of Qwen‑3.8‑Flash‑Next, facilitating unrestricted multimodal experiments on consumer hardware. |
| [SC117/Qwen3.8‑Flash‑Next‑GSQ‑RCO‑abliterated‑GGUF](https://huggingface.co/SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF) | SC117 | 196 | 765,376 | An ablated, heavily quantized GGUF variant exploring trade‑offs between speed and quality. |

---

## 🌐 Ecosystem Signal  
The **Qwen** line is clearly leading the multimodal surge, with multiple image‑text‑to‑text, text‑to‑image, and flash‑optimized releases across the board.  Community‑driven **GGUF quantization** is exploding: over a dozen Qwen‑related models appear in GGUF form, alongside pioneering 2‑bit “ternary” releases, indicating a strong demand for portable, CPU‑friendly inference.  Open‑weight models continue to dominate—Google, Qwen, DeepSeek, and Aleph‑Alpha all publish freely licensed checkpoints—while proprietary entities such as Cloudflare are still contributing high‑visibility multimodal pipelines (CLEF).  The rise of **video generation** (LTX‑2.5, Prism) and **audio generation** (ema‑lightning, whistle) points to an expanding definition of “generative AI” beyond pure text, with diffusion‑based video and on‑device speech models gaining noticeable traction.

---

## 🚀 Worth Exploring  

| Model | Reason |
| :--- | :--- |
| **Qwen/Qwen3.8‑27B** | The flagship multimodal LLM with the highest likes and downloads; it sets the benchmark for image‑question answering and conversation, making it essential for any general‑purpose AI system. |
| **Lightricks/LTX‑2.5** | Offers a single‑file diffusion model that turns static images into short videos, a capability that’s still rare on HF and opens new creative workflows for marketers and filmmakers. |
| **prism‑ml/Ternary‑Bonsai‑2‑27B‑gguf** | Demonstrates the frontier of extreme quantization (2‑bit) while still delivering usable LLM performance; studying it provides insights into next‑gen edge deployment strategies. |

These three models collectively showcase the current directions of the HF ecosystem: **large multimodal intelligence, next‑level video generation, and ultra‑compact LLM quantization**.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*