# Hugging Face Trending Models Digest 2026-10-09

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-10-09 05:46 UTC

---

## Today’s Highlights  
The **Qwen** family continues to dominate the leaderboard, with the flagship **Qwen‑3.8‑27B** (17 k likes) and its Flash‑Next variant both breaking 1 M downloads in just weeks.  Multimodal vision‑language models are the hottest segment, while a wave of community‑generated **GGUF** quantizations—especially uncensored and ternary variants—are gaining rapid traction.  Embedding models (e.g., Google’s *embeddinggemma‑2*) and audio‑centric pipelines also see steady growth, reflecting broader demand for efficient retrieval and on‑device speech capabilities.

---

## Trending Models  

### 🧠 Language Models  

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [autotrust/GEV-26B-Decide](https://huggingface.co/autotrust/GEV-26B-Decide) | autotrust | 1,924 | 903,866 | A 26‑B parameter Gemma‑4‑based classifier tuned for “decide‑type” tasks. It’s popular for its strong zero‑shot decision‑making on structured prompts. |
| [convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 5,399 | 36,328 | A calibrated decision‑making LLM that excels in risk‑aware classification. Its high like‑count reflects adoption in fintech and safety‑critical pipelines. |
| [Aleph-Alpha/Kolibri-1](https://huggingface.co/Aleph-Alpha/Kolibri-1) | Aleph-Alpha | 817 | 6,777 | A MoE‑enabled 1‑B parameter text generator optimized for reasoning tasks. It’s praised for sharp chain‑of‑thought performance despite its modest size. |
| [autotrust/GEV-26B-Decide-NVFP4](https://huggingface.co/autotrust/GEV-26B-Decide-NVFP4) | autotrust | 166 | 19,655 | A FP4‑quantized variant of the GEV‑Decide model aimed at low‑memory edge devices. Users like its 4‑bit footprint while retaining most classification accuracy. |

### 🎨 Multimodal & Generation  

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [autotrust/JEV-27B-VL](https://huggingface.co/autotrust/JEV-27B-VL) | autotrust | 3,070 | 1,533,034 | A 27‑B vision‑language model (Qwen‑3.5 backbone) that can generate detailed captions and answer visual queries. Its release sparked a surge in open‑weight VL research. |
| [Cloudflare/clef](https://huggingface.co/Cloudflare/clef) | Cloudflare | 1,899 | 10,874 | An image‑to‑text model fine‑tuned on web‑scale graphics, notable for its low latency inference on Cloudflare’s edge network. |
| [Cloudflare/clef-flash](https://huggingface.co/Cloudflare/clef-flash) | Cloudflare | 698 | 17,587 | A Flash‑optimized version of CLEF delivering up to 2× faster image captioning with comparable quality. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 6,965 | 1,688,807 | A single‑file diffusion model that turns a single image into a short video clip, quickly becoming a go‑to for mobile video creation. |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 17,297 | 6,841,660 | The flagship 27‑B multimodal model supporting image‑text‑to‑text and conversational tasks, praised for its balanced performance and open licensing. |
| [canberkkkkkk/ema-lightning](https://huggingface.co/canberkkkkkk/ema-lightning) | canberkkkkkk | 305 | 9,467 | A Turkish‑language TTS model that delivers natural prosody on limited hardware, attracting regional developers. |
| [Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 3,129 | 116,957 | A text‑to‑image diffusion model that supports in‑painting and style transfer, often compared with Stable Diffusion for speed. |
| [LiquidAI/d1-3B](https://huggingface.co/LiquidAI/d1-3B) | LiquidAI | 202 | 5,370 | A compact 3‑B vision‑language model targeting on‑device applications; its small size and decent accuracy make it popular for mobile prototypes. |
| [Alissonerdx/BFS-Best-Face-Swap](https://huggingface.co/Alissonerdx/BFS-Best-Face-Swap) | Alissonerdx | 1,324 | 243,910 | A diffusion‑based face‑swap model with LoRA finetunes that delivers high‑fidelity swaps while preserving identity. |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 6,048 | 1,640,938 | A Flash‑optimized vision‑language model that reduces memory usage by ~30 % without sacrificing response quality. |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 4,268 | 1,282,524 | A 4‑B vision‑language model that blends DeepSeek’s text prowess with efficient image reasoning, gaining quick adoption in research demos. |
| [autotrust/GLM5.3-Flash‑E224‑DGX‑Spark](https://huggingface.co/autotrust/GLM5.3-Flash-E224-DGX-Spark) | autotrust | 481 | 5,422 | A MoE‑based multimodal model built on GLM‑5.3, notable for its “Spark” training recipe that speeds up large‑batch vision‑language pretraining. |

### 🔧 Specialized Models  

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2) | google | 1,223 | 21,148 | An open‑weight embedding model derived from Gemma‑2, optimized for dense vector retrieval across multilingual corpora. |
| [Cactus-Compute/whistle](https://huggingface.co/Cactus-Compute/whistle) | Cactus-Compute | 200 | 2,594 | An on‑device automatic‑speech‑recognition model that runs efficiently on ARM CPUs, targeting low‑resource voice assistants. |

### 📦 Fine‑tunes & Quantizations  

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF) | abenzerps | 3,693 | 1,933,066 | A GGUF‑converted, uncensored Qwen‑Image‑2.1 checkpoint that runs on consumer CPUs with 4‑bit quantization, enabling high‑quality image generation offline. |
| [Venastine-Research/Xing4.0-29B-A4B-GGUF](https://huggingface.co/Venastine-Research/Xing4.0-29B-A4B-GGUF) | Venastine-Research | 669 | 36,481 | A 29‑B text generator quantized to 4‑bit (A4B) GGUF, delivering near‑full‑precision perplexity while fitting in 12 GB VRAM. |
| [jialinyyzz/humanizer](https://huggingface.co/jialinyyzz/humanizer) | jialinyyzz | 652 | 23,439 | A Gemma‑4‑based GGUF model finetuned to produce more “human‑like” dialogue, frequently used in chat‑bot prototyping. |
| [ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF) | ISTA-DASLab | 726 | 3,405,442 | Mixed‑precision (GSQ + RCO) GGUF of Qwen‑3.8‑Flash‑Next, offering 2× speed‑up on CPUs with minimal loss in multimodal accuracy. |
| [Infatoshi/GLM-5.3-UNCENSORED-EXL3-3.0bpw](https://huggingface.co/Infatoshi/GLM-5.3-UNCENSORED-EXL3-3.0bpw) | Infatoshi | 303 | 2,091 | An EXL3 3‑bit weight‑per‑word quantized GLM‑5.3 model, uncensored for research, that fits into 8 GB VRAM. |
| [unsloth/embeddinggemma-2-GGUF](https://huggingface.co/unsloth/embeddinggemma-2-GGUF) | unsloth | 205 | 29,692 | The same embedding Gemma‑2 model packaged as a GGUF file for ultra‑fast inference on consumer hardware. |
| [orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF) | orcarouter | 474 | 20,613 | A 27‑B uncensored LLM exported to GGUF; the “Cyber” finetune improves code‑completion benchmarks. |
| [prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 2,551 | 4,345,410 | A 2‑bit ternary quantized 27‑B model that sets a new efficiency record—running on a laptop GPU with <5 GB VRAM. |
| [DavidAU/Qwen3.8-27B‑TURBO‑Fable‑Cold‑Fusion‑…‑GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 1,576 | 2,037,446 | A heavily finetuned, uncensored Qwen‑3.8 GGUF model targeting creative writing and code generation, popular for its “Turbo” response speed. |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 2,071 | 1,517,150 | GGUF of the 27‑B Qwen‑3.8 with GSQ + RCO quantization, offering a sweet spot between size (8 GB) and multimodal performance. |
| [orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF) | orcarouter | 681 | 492,022 | Uncensored GGUF of Qwen‑Flash‑Next, widely used for hobbyist image‑captioning where content filters are undesired. |
| [SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF](https://huggingface.co/SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF) | SC117 | 159 | 612,411 | An “abliterated” (pruned + quantized) GGUF that squeezes Qwen‑Flash‑Next into 4 GB RAM, useful for edge deployments. |

---

## Ecosystem Signal  

The **Qwen** suite (both base and Flash‑Next variants) is clearly the engine driving the multimodal surge, with several community‑crafted GGUF ports that make large vision‑language models accessible on consumer hardware.  **GGUF** quantization has become the de‑facto standard for 4‑bit/2‑bit deployments, as evidenced by the 10+ high‑download models across text, image, and multimodal domains.  Open‑weight models continue to outpace proprietary offerings; even major labs (Google, DeepSeek) release openly licensed checkpoints that garner thousands of likes.  Meanwhile, specialized pipelines—embeddings (Gemma‑2), speech (EMA‑Lightning, Whistle), and low‑latency edge inference—are expanding, indicating a diversification beyond pure LLM dominance toward **retrieval‑augmented** and **audio‑centric** applications.  The community’s appetite for **uncensored** and **abliterated** versions suggests a growing demand for flexible, policy‑light models that can be run locally.

---

## Worth Exploring  

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** – The flagship multimodal model offers top‑tier image‑captioning and conversational abilities while remaining fully open‑weight, making it a benchmark for research and product prototyping.  

2. **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** – Its 2‑bit ternary quantization pushes the limits of efficiency; it runs on modest GPUs with <5 GB VRAM yet retains strong language generation performance—ideal for exploring extreme compression.  

3. **[google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2)** – A high‑quality, open‑source embedding model that delivers multilingual dense vectors out‑of‑the‑box, perfect for building retrieval‑augmented systems or semantic search pipelines.  

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*