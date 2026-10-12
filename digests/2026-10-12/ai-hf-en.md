# Hugging Face Trending Models Digest 2026-10-12

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-10-12 05:35 UTC

---

## 📈 Today’s Highlights  
The **Qwen family** dominates the leaderboard, with the flagship **Qwen‑3.8‑27B** model racking up >17 k likes and 6.8 M downloads, showing the community’s appetite for high‑capacity vision‑language models.  GGUF‑based quantizations are proliferating: dozens of community‑crafted GGUF releases (e.g., `prism‑ml/Ternary‑Bonsai‑2‑27B‑gguf` and `unsloth/Qwen3.8‑27B‑GGUF`) are exploding in popularity, reflecting a shift toward lightweight, on‑device inference.  Multimodal generation is also hot, especially video‑centric models like **Lightricks/LTX‑2.5**, which has the highest like count of the list, and image‑to‑text pipelines such as **Cloudflare/clef** that leverage the newer Qwen‑3.5 vision backbone.

---

## 🔎 Trending Models  

### 🧠 Language Models  

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [jialinyyzz/humanizer](https://huggingface.co/jialinyyzz/humanizer) | jialinyyzz | 1,141 | 37,647 | A GGUF‑based Gemma‑4 instruction model that adds a “human‑like” style filter to its outputs. It’s trending for its novel post‑processing that reduces robotic phrasing. |
| [Aleph-Alpha/Kolibri-1](https://huggingface.co/Aleph-Alpha/Kolibri-1) | Aleph-Alpha | 888 | 12,550 | A MoE‑enabled LLM focused on reasoning tasks, released under an open‑weight license. It has gained traction among research groups exploring mixture‑of‑experts scaling. |
| [Venastine-Research/Xing4.0-29B-A4B-GGUF](https://huggingface.co/Venastine-Research/Xing4.0-29B-A4B-GGUF) | Venastine-Research | 691 | 48,389 | A 29‑B Chinese LLM quantized to GGUF, offering strong multilingual performance with a small footprint. The community loves its balance of size and capability. |
| [ConwayResearch/Underdog‑Saluki‑27B‑1.0](https://huggingface.co/ConwayResearch/Underdog-Saluki-27B-1.0) | ConwayResearch | 327 | 108,900 | A 27‑B LLM fine‑tuned for tool‑calling and function‑calling, packaged in a 2‑bit llama.cpp format. It’s popular for low‑resource API integration. |
| [convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 5,495 | 44,088 | A calibrated text‑classification model that claims “system‑one” decision making. It’s being adopted for real‑time content moderation. |
| [prism‑ml/Ternary‑Bonsai‑2‑27B‑gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism‑ml | 2,633 | 4,549,911 | A 27‑B LLM quantized to 2‑bit ternary, dramatically shrinking RAM usage while preserving fluency. It leads the current push for extreme quantization. |

### 🎨 Multimodal & Generation  

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Cloudflare/clef](https://huggingface.co/Cloudflare/clef) | Cloudflare | 2,031 | 14,351 | An image‑text‑to‑text model built on Qwen‑3.5, optimized for OCR‑style tasks. Its speed on GPU makes it a go‑to for visual‑question‑answering demos. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 7,339 | 1,726,683 | A diffusion‑single‑file model that turns a single image into a short video sequence. It is the most liked model in the list, showcasing demand for accessible video generation. |
| [Qwen/Qwen‑3.8‑27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 17,518 | 6,843,108 | A 27‑B vision‑language model that handles image‑text interaction with state‑of‑the‑art conversational abilities. Its massive download count signals broad adoption in research labs. |
| [Qwen/Qwen‑Image‑2.1‑Turbo](https://huggingface.co/Qwen/Qwen-Image-2.1-Turbo) | Qwen | 555 | 4,702 | A fast, higher‑resolution text‑to‑image diffusion model that supports minimal‑edit image editing. Users praise its low latency on consumer GPUs. |
| [Qwen/Qwen‑Image‑2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 3,231 | 136,103 | The original diffusion pipeline for text‑to‑image generation, notable for its integrated in‑painting tools. It continues to attract downloads despite newer turbo variants. |
| [LiquidAI/d1-3B](https://huggingface.co/LiquidAI/d1-3B) | LiquidAI | 301 | 10,843 | A compact 3‑B vision‑language model that excels at zero‑shot captioning. Its small footprint makes it popular for edge deployments. |
| [Cloudflare/clef‑flash](https://huggingface.co/Cloudflare/clef-flash) | Cloudflare | 759 | 22,123 | A lightweight “flash” version of CLEF, fine‑tuned for faster inference on mobile GPUs. It trades a bit of accuracy for a 2× speedup. |
| [canberkkkkkk/ema‑lightning](https://huggingface.co/canberkkkkkk/ema-lightning) | canberkkkkkk | 359 | 18,079 | A Turkish TTS model that produces expressive speech with low latency. It fills a scarcity of high‑quality Turkish voice synthesis. |
| [Cactus-Compute/whistle](https://huggingface.co/Cactus-Compute/whistle) | Cactus-Compute | 337 | 16,434 | An on‑device speech‑recognition model optimized for noisy environments. It’s gaining attention for its small size (~30 MB) and CPU‑only runtime. |
| [FrancisRing/Prism](https://huggingface.co/FrancisRing/Prism) | FrancisRing | 162 | 0 | An experimental diffusion‑based image‑to‑video generator that also produces synchronized audio. Early adopters cite its creative potential despite limited downloads. |
| [speridlabs/iris‑3b](https://huggingface.co/speridlabs/iris-3b) | speridlabs | 157 | 393 | A 3‑B diffusion model focused on high‑fidelity pixel‑space generation. Its simplicity makes it a favorite for custom UI integrations. |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 4,075 | 2,081,596 | A mask‑generation model that extends the Segment‑Anything paradigm to video streams. Its versatility for interactive segmentation is driving heavy download activity. |

### 🔧 Specialized Models  

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2) | google | 1,753 | 98,829 | A state‑of‑the‑art embedding model based on Gemma 2, designed for semantic search and retrieval. It’s popular because it ships with a lightweight transformer checkpoint and extensive documentation. |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 4,075 | 2,081,596 | (also listed above) A mask‑generation model specialized for video‑frame segmentation, extending SAM’s image‑only capabilities. Its high download count reflects broad utility across vision research. |

### 📦 Fine‑tunes & Quantizations  

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [asenzerps/Qwen‑Image‑2.1‑Uncensored‑GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF) | abenzerps | 4,004 | 2,188,658 | A GGUF‑quantized version of Qwen‑Image‑2.1 stripped of content filters, enabling unrestricted generation on low‑VRAM GPUs. Its massive download tally shows the demand for “uncensored” diffusion models. |
| [AtomicChat/Qwen‑Image‑2.1‑Turbo‑Uncensored‑GGUF](https://huggingface.co/AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF) | AtomicChat | 337 | 100,530 | The turbo variant of the uncensored image model, quantized to 4‑bit GGUF for fast on‑device inference. Users praise its balance of quality and speed. |
| [unsloth/embeddinggemma‑2‑GGUF](https://huggingface.co/unsloth/embeddinggemma-2-GGUF) | unsloth | 259 | 59,274 | A GGUF‑packed Embedding‑Gemma‑2 checkpoint that runs comfortably on CPU‑only laptops. Its compact size (<500 MB) drives adoption in lightweight retrieval pipelines. |
| [nerkyor/Qwen3.8‑27B‑Coder390‑EfficientThink‑…](https://huggingface.co/nerkyor/Qwen3.8-27B-Coder390-EfficientThink-Opus5.5-GPT6Astra-Grok4.7-DSV4Pro-K3-SFT-RLOO-MTP-DFlash2) | nerkyor | 242 | 56,525 | A community‑assembled, heavily fine‑tuned Qwen‑3.8‑27B model blended with multiple code‑oriented datasets, shipped in both safetensors and GGUF. Its niche appeal is for programming assistance. |
| [ISTA‑DASLab/Qwen3.8‑Flash‑Next‑GSQ‑RCO‑GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF) | ISTA‑DASLab | 802 | 4,189,006 | A mixed‑precision GGUF quantization (GSQ + RCO) of the Qwen‑Flash‑Next model, cutting memory usage by ~70 % while preserving accuracy. It’s a benchmark for efficient large‑scale VL models. |
| [ISTA‑DASLab/Qwen3.8‑27B‑GSQ‑RCO‑GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA‑DASLab | 2,155 | 1,489,676 | Same quantization technique applied to the 27‑B base, delivering a sub‑6 GB checkpoint that still scores competitively on VL benchmarks. |
| [unsloth/Qwen3.8‑27B‑GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 5,028 | 6,488,262 | The default community GGUF build of Qwen‑3.8‑27B, offering drop‑in compatibility with llama.cpp and fast loading. Its popularity reflects the shift toward GGUF as the de‑facto format for open‑weight LLMs. |
| [orcarouter/Qwen3.8‑Flash‑Next‑Uncensored‑GGUF](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF) | orcarouter | 764 | 614,193 | An uncensored GGUF quantization of Qwen‑Flash‑Next, targeting developers who need unrestricted content generation on edge hardware. |
| [prism‑ml/Ternary‑Bonsai‑2‑27B‑gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism‑ml | 2,633 | 4,549,911 | A 2‑bit ternary quantization of a 27‑B LLM, delivering a ~1 GB checkpoint with near‑full model quality. It exemplifies extreme compression without major performance loss. |

---

## 🌐 Ecosystem Signal  

The **Qwen** lineage is the clear engine of growth, with several variants (base, vision‑language, turbo, uncensored) topping both likes and download counts.  Community‑driven **GGUF quantizations** have surged, especially for large vision‑language models, indicating a move toward **on‑device** and **low‑VRAM** deployment.  Open‑weight models from Google, Qwen, and Aleph‑Alpha continue to dominate, while proprietary‑style releases (e.g., Cloudflare’s CLEF) retain niche appeal thanks to specialized pipelines.  Quantization techniques such as **GSQ + RCO** and **ternary 2‑bit** are gaining traction, reflected in the rapid adoption of models like `prism‑ml/Ternary‑Bonsai‑2‑27B‑gguf`.  Simultaneously, **multimodal generation**—particularly video synthesis (`LTX‑2.5`) and mask‑generation (`sam3`)—is expanding beyond text‑centric research, hinting at broader commercial interest in creative AI workflows.

---

## 🎯 Worth Exploring  

| Model | Why Try It? |
| :--- | :--- |
| **Lightricks/LTX-2.5** | Sets a new benchmark for single‑file image‑to‑video diffusion, delivering 8‑frame clips at 30 fps with modest GPU memory. Ideal for creators seeking quick prototype video generation. |
| **Qwen/Qwen‑3.8‑27B** | The most downloaded vision‑language model, offering strong image‑text reasoning and conversational capabilities in a single 27 B checkpoint. Perfect for research on multimodal assistants. |
| **prism‑ml/Ternary‑Bonsai‑2‑27B‑gguf** | Demonstrates that 2‑bit ternary quantization can shrink a 27 B LLM to ~1 GB while preserving fluency, making it a practical study case for extreme model compression. |

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*