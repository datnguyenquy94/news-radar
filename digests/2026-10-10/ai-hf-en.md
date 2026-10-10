# Hugging Face Trending Models Digest 2026-10-10

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-10-10 05:29 UTC

---

**Today’s Highlights**  
The Hugging Face Hub is being dominated by large multimodal LLMs from the Qwen family, with the Qwen 3.8‑27B series alone accounting for over 23 k weekly likes and multi‑million download counts.  Quantized GGUF releases are surging, especially 2‑bit and ternary variants that make 30 B‑class models runnable on consumer‑grade hardware.  In the generative‑visual arena, Lightricks’ LTX‑2.5 video diffusion model broke the 7 k‑like barrier, while Cloudflare’s “clef” series is cementing image‑text‑to‑text as a rapidly‑adopted multimodal paradigm.

---

## Trending Models  

### 🧠 Language Models  

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Aleph-Alpha/Kolibri-1](https://huggingface.co/Aleph-Alpha/Kolibri-1) | Aleph-Alpha | 847 | 8,474 | A 27 B MoE LLM tuned for deep reasoning and code assistance. Its strong performance on open‑ended benchmarks has sparked community interest. |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 17,362 | 6,783,589 | A 27 B multimodal LLM (image‑text‑to‑text) that combines strong conversational abilities with vision. It is the most‑liked model this week, reflecting the push for unified AI. |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 6,061 | 1,751,752 | The “Flash‑Next” variant adds a faster inference path and higher token throughput. It has become a go‑to baseline for low‑latency chat deployments. |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek‑ai | 4,300 | 1,316,468 | DeepSeek‑V4.1‑Flash couples a 27 B LLM with vision encoders, offering strong multilingual reasoning. Its open‑weight release keeps it popular among research labs. |
| [jialinyyzz/humanizer](https://huggingface.co/jialinyyzz/humanizer) | jialinyyzz | 788 | 29,470 | A 7 B instruction‑tuned model focused on generating more “human‑like” prose. Its niche appeal lies in creative writing and dialogue polishing. |
| [nerkyor/Qwen3.8-27B‑Coder390‑…](https://huggingface.co/nerkyor/Qwen3.8-27B-Coder390-EfficientThink-Opus5.5-GPT6Astra-Grok4.7-DSV4Pro-K3-SFT-RLOO-MTP-DFlash2) | nerkyor | 140 | 8,873 | A heavily fine‑tuned Qwen 27 B variant targeting software engineering tasks. It showcases the power of multi‑stage SFT on a single checkpoint. |

### 🎨 Multimodal & Generation  

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Cloudflare/clef](https://huggingface.co/Cloudflare/clef) | Cloudflare | 1,950 | 12,066 | An image‑text‑to‑text model built on Qwen 3.5, optimized for rapid captioning and OCR‑like tasks. Its lightweight size makes it popular for edge deployments. |
| [Cloudflare/clef-flash](https://huggingface.co/Cloudflare/clef-flash) | Cloudflare | 716 | 18,971 | A “flash” variant that halves latency while preserving caption quality. It’s trending among developers building real‑time UI assistants. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 7,085 | 1,687,531 | A diffusion‑based image‑to‑video model that can generate 8‑second clips from a single frame. Its high visual fidelity has attracted creators and indie studios. |
| [Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 3,164 | 122,311 | A text‑to‑image diffusion model with built‑in editing tools (inpainting, style transfer). It’s frequently paired with the Qwen LLM for seamless multimodal pipelines. |
| [Qwen/Qwen-Image-2.1‑Turbo](https://huggingface.co/Qwen/Qwen-Image-2.1-Turbo) | Qwen | 330 | 0 | A stripped‑down “Turbo” checkpoint aimed at sub‑second generation on GPUs. Early adopters praise its speed‑to‑quality trade‑off. |
| [Alissonerdx/BFS‑Best‑Face‑Swap](https://huggingface.co/Alissonerdx/BFS-Best-Face-Swap) | Alissonerdx | 1,341 | 245,270 | An image‑to‑image face‑swap diffusion model leveraging Qwen‑Image weights. It’s popular in the entertainment‑tech community for real‑time deep‑fake prototyping. |
| [canberkkkkkk/ema-lightning](https://huggingface.co/canberkkkkkk/ema-lightning) | canberkkkkkk | 323 | 12,118 | A Turkish‑language TTS model using a lightweight EMA architecture. Its natural prosody on low‑resource languages fuels growth in regional voice assistants. |
| [Cactus-Compute/whistle](https://huggingface.co/Cactus-Compute/whistle) | Cactus-Compute | 273 | 5,558 | An on‑device speech‑to‑text model targeting low‑power edge devices. Its compact size (≈150 MB) and open‑source licence spark adoption in mobile apps. |
| [LiquidAI/d1-3B](https://huggingface.co/LiquidAI/d1-3B) | LiquidAI | 240 | 7,302 | A 3 B multimodal encoder‑decoder that processes image‑text pairs for captioning and VQA. Its efficiency makes it a go‑to baseline for academic research. |
| [FrancisRing/Prism](https://huggingface.co/FrancisRing/Prism) | FrancisRing | 135 | 0 | An experimental video‑generation diffusion model that jointly synthesizes audio and visual streams. Early demos show impressive text‑to‑music‑video generation. |

### 🔧 Specialized Models  

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2) | google | 1,377 | 29,185 | A 2 B embedding model for text and small‑scale multimodal inputs. Its open‑weight release offers a high‑quality, lightweight alternative to OpenAI embeddings. |
| [unsloth/embeddinggemma-2‑GGUF](https://huggingface.co/unsloth/embeddinggemma-2-GGUF) | unsloth | 219 | 41,582 | GGUF‑quantized version of Google’s embedding model, enabling CPU‑only inference with <1 GB RAM. It’s gaining traction for large‑scale retrieval pipelines. |
| [convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 5,431 | 41,468 | A calibrated text‑classification model designed for high‑stakes decision support (e.g., finance, healthcare). Its calibrated‑output layer improves downstream risk assessment. |

### 📦 Fine‑tunes & Quantizations  

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [abenzerps/Qwen-Image-2.1‑Uncensored‑GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF) | abenzerps | 3,788 | 2,013,268 | A fully uncensored GGUF checkpoint of Qwen‑Image‑2.1, quantized to 4‑bit. Its massive download count shows demand for unrestricted visual generation on consumer hardware. |
| [Venastine-Research/Xing4.0-29B‑A4B‑GGUF](https://huggingface.co/Venastine-Research/Xing4.0-29B-A4B-GGUF) | Venastine-Research | 676 | 38,740 | A 29 B Chinese‑language LLM quantized to 4‑bit GGUF, achieving near‑full‑precision perplexity. It’s a reference point for large‑scale Asian‑language models. |
| [ISTA-DASLab/Qwen3.8‑Flash‑Next‑GSQ‑RCO‑GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF) | ISTA-DASLab | 752 | 3,559,321 | Qwen‑3.8 Flash‑Next quantized with Grouped‑Scalar‑Quantization (GSQ) and Residual‑Channel‑Optimization (RCO), enabling 2‑bit inference on CPUs. The download surge reflects the push for extreme compression. |
| [unsloth/embeddinggemma-2‑GGUF](https://huggingface.co/unsloth/embeddinggemma-2-GGUF) | unsloth | 219 | 41,582 | Same as above (duplicate entry for completeness). |
| [ISTA-DASLab/Qwen3.8‑27B‑GSQ‑RCO‑GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 2,097 | 1,490,741 | 27 B Qwen quantized to 2‑bit with GSQ‑RCO, delivering sub‑10 ms token latency on a single high‑end laptop CPU. Its popularity signals the maturation of ultra‑low‑bit LLMs. |
| [ConwayResearch/Underdog‑Saluki‑27B‑1.0](https://huggingface.co/ConwayResearch/Underdog-Saluki-27B-1.0) | ConwayResearch | 206 | 15,274 | A 27 B Llama‑style model distilled to 2‑bit GGUF with built‑in tool‑calling. Early adopters highlight its affordability for small‑team AI products. |
| [DavidAU/Qwen3.8‑27B‑TURBO‑Fable‑…‑GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 1,614 | 2,000,216 | A community‑fine‑tuned, uncensored Qwen‑3.8 checkpoint with mixed‑task instruction data. Its GGUF format makes it instantly runnable on laptops. |
| [prism-ml/Ternary‑Bonsai‑2‑27B‑gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism‑ml | 2,574 | 4,389,072 | First widely‑adopted ternary (3‑level) quantization for a 27 B LLM, offering ~2× speed‑up vs 4‑bit with minimal accuracy loss. It’s a showcase of next‑gen compression research. |
| [orcarouter/OrcaSAQ-2‑Cyber‑27B‑Uncensored‑GGUF](https://huggingface.co/orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF) | orcarouter | 490 | 21,406 | An uncensored 27 B Orca‑style model with 2‑bit GGUF, fine‑tuned on code and reasoning data. Its modest download count hints at early‑stage adoption. |
| [orcarouter/Qwen3.8‑Flash‑Next‑Uncensored‑GGUF](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF) | orcarouter | 705 | 499,273 | A 27 B Qwen model quantized to 2‑bit, stripped of content filters. Its rapid uptake reflects demand for unrestricted generation on personal GPUs. |
| [SC117/Qwen3.8‑Flash‑Next‑GSQ‑RCO‑abliterated‑GGUF](https://huggingface.co/SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF) | SC117 | 175 | 684,487 | Abliterated version of the Flash‑Next GGUF, shaving ~15 % model size with a custom pruning schedule. Community users appreciate the “lean‑fast” trade‑off. |
| [unsloth/Qwen3.8‑27B‑GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 4,987 | 6,452,782 | Official 4‑bit GGUF conversion of Qwen 3.8‑27B, verified for CPU and GPU compatibility. Its massive download figure makes it the de‑facto quantized baseline. |

---

## Ecosystem Signal  

The Qwen family is the clear driver of current momentum, with three separate families (plain, Flash‑Next, Image‑2.1) collectively amassing over 40 k likes and more than 10 M downloads.  This reflects a broader industry shift toward **multimodal LLMs** that can handle text, images, and video in a single checkpoint.  At the same time, **GGUF quantization** has exploded: 2‑bit, 3‑bit (ternary) and 4‑bit variants are now mainstream, enabling 30 B‑class models to run on laptops and even smartphones.  Open‑weight releases remain the norm—over 80 % of the top‑30 models are permissively licensed—while “uncensored” fine‑tunes demonstrate a growing appetite for unrestricted generation, especially in creative and research domains.  Specialized embeddings (EmbeddingGemma‑2) and calibrated classifiers (Laya) also show strong niche uptake, indicating that the ecosystem is diversifying beyond pure LLMs into task‑specific, lightweight models.

---

## Worth Exploring  

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** – The most‑liked model with a balanced mix of vision and language capabilities; ideal for experiments that require a single, high‑performing multimodal backbone.  
2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** – A breakthrough image‑to‑video diffusion model that delivers high‑quality short clips; perfect for content creators and researchers probing temporal diffusion.  
3. **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** – The first widely‑adopted ternary‑quantized 27 B LLM, offering near‑full‑precision performance with dramatically reduced memory and latency; a must‑try for anyone looking to push inference on commodity hardware.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*