# Hugging Face Trending Models Digest 2026-10-17

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-10-17 04:01 UTC

---

## 📊 Today’s Highlights
The Hugging Face Hub is dominated by **multimodal giants** – Qwen‑3.8 series, DeepSeek‑V4.1, and Flux‑3 – all pulling tens of thousands of likes and millions of downloads.  Community‑driven **GGUF‑quantized** variants (e.g., the uncensored Qwen‑Image‑2.1 models) are exploding, giving edge‑device users high‑quality generation with sub‑2 GB footprints.  Meanwhile, **video‑generation**, driven by Lightricks/LTX‑2.5 and the MiniMax‑H3 LoRA, is the most rapidly rising sub‑category, signaling a shift from static image to dynamic media on the Hub.

---

## 🎯 Trending Models  

### 🧠 Language Models (LLMs, chat, instruction‑tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 17,860 | 7,516,626 | A 27 B multimodal LLM that handles text + visual prompts with strong conversational abilities. Its open‑weight release fuels a wave of downstream fine‑tunes and tool‑calling experiments. |
| [LiquidAI/LFM2.5-24B-A2B](https://huggingface.co/LiquidAI/LFM2.5-24B-A2B) | LiquidAI | 436 | 9,356 | A 24 B MoE language model optimized for dense generation and instruction following. It’s gaining traction for its balance of scale and inference cost. |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 6,290 | 2,379,596 | Flash‑optimized 27 B LLM that delivers lower latency on GPUs while retaining full vision‑language capabilities. Frequently cited in benchmark posts for “real‑time” multimodal chat. |
| [convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 5,662 | 49,816 | A calibrated text‑classification model built on a distilled LLM, praised for its calibrated confidence scores on high‑risk decision tasks. |
| [dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8](https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8) | dealignai | 681 | 57,191 | FP8‑quantized variant of DeepSeek‑V4.1 that runs comfortably on consumer GPUs while keeping uncensored generation. It’s a showcase of mixed‑precision inference on the Hub. |
| [LiquidAI/d1-3B](https://huggingface.co/LiquidAI/d1-3B) | LiquidAI | 440 | 17,820 | A compact 3 B vision‑language model that excels at zero‑shot captioning and retrieval, often used as a lightweight baseline for multimodal research. |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek‑ai | 4,569 | 1,276,459 | The flagship DeepSeek‑V4.1 model, flash‑optimized for high throughput and multimodal reasoning, regularly appears in top‑ranked papers on VLM benchmarking. |

### 🎨 Multimodal & Generation (image, video, audio, text‑to‑X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [openbmb/MiniCPM-V-4.7-35B-A3B](https://huggingface.co/openbmb/MiniCPM-V-4.7-35B-A3B) | openbmb | 852 | 17,553 | A 35 B vision‑language model that produces high‑fidelity image‑to‑text captions and visual Q&A. Its size makes it a go‑to baseline for research on large‑scale VLMs. |
| [fishaudio/drama-3](https://huggingface.co/fishaudio/drama-3) | fishaudio | 561 | 6,158 | A 3‑speaker TTS model trained on dramatic scripts, notable for expressive prosody and low latency on CPU. Used by indie game developers for in‑game dialogue. |
| [Qwen/Qwen-Image-2.1-Turbo](https://huggingface.co/Qwen/Qwen-Image-2.1-Turbo) | Qwen | 947 | 17,421 | Turbo‑inferred text‑to‑image model delivering photorealistic results in under a second on a RTX 3080. Frequently paired with LLMs for visual storytelling. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 8,100 | 1,920,611 | A diffusion‑based image‑to‑video generator capable of 2‑second clips from a single frame. The most downloaded video‑gen model on the Hub, driving the “text‑to‑video” hype. |
| [meta-models/Muse-Spark-Open-816B-A42B](https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B) | meta‑models | 452 | 815 | An 816 B multimodal transformer that fuses image and text at scale, showing emergent “creativity” in art‑generation benchmarks. |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black‑forest‑labs | 464 | 73,767 | Flux‑3 diffusion checkpoint packaged for ComfyUI, delivering crisp image‑to‑image edits with a compact 2 GB file. |
| [black-forest-labs/flux-3-image-klein](https://huggingface.co/black-forest-labs/flux-3-image-klein) | black‑forest‑labs | 405 | 22,790 | The raw diffusion checkpoint (safetensors) of Flux‑3, widely used in custom pipelines for high‑resolution style transfer. |
| [openbmb/MiniCPM-V-4.7-1B](https://huggingface.co/openbmb/MiniCPM-V-4.7-1B) | openbmb | 369 | 8,822 | A lightweight 1 B VLM that runs on a laptop GPU, popular for prototyping multimodal chatbots. |
| [speridlabs/iris-3b](https://huggingface.co/speridlabs/iris-3b) | speridlabs | 300 | 1,320 | A 3 B text‑to‑image diffusion model that emphasizes pixel‑level fidelity, often benchmarked against StableDiffusion‑XL. |

### 🔧 Specialized Models (embeddings, OCR, segmentation, classification)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2) | google | 2,517 | 151,258 | Embedding model built on Gemma‑2 that delivers dense vector representations for retrieval and similarity search. Adopted by many RAG pipelines for its high‑dimensional efficiency. |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 4,752 | 1,262,307 | An OCR system that can read text in over 150 languages with a single model, prized for its “unlimited” script coverage and fast inference. |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 4,515 | 2,033,919 | Third‑generation Segment‑Anything model supporting video‑level mask generation; its large‑scale pretraining yields state‑of‑the‑art segmentation on novel objects. |
| [vllm-sr/d3](https://huggingface.co/vllm-sr/d3) | vllm‑sr | 220 | 3,565 | Zero‑shot classification model built on a distilled Qwen backbone, notable for its tiny size (≈300 M) and high throughput. |
| [Cloudflare/clef](https://huggingface.co/Cloudflare/clef) | Cloudflare | 2,192 | 20,160 | A vision‑language model tuned for security‑related image‑text tasks (phishing detection, captcha solving). Frequently referenced in security‑AI demos. |

### 📦 Fine‑tunes & Quantizations (community GGUF, LoRA, FP8/FP4)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [jialinyyzz/humanizer](https://huggingface.co/jialinyyzz/humanizer) | jialinyyzz | 1,835 | 85,612 | GGUF‑quantized (4‑bit) text‑generation model that adds “human‑like” style embellishments to prompts. Its small footprint makes it a favorite for mobile chat assistants. |
| [abenzerps/Qwen-Image-2.1-Uncensored-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-Quantized) | abenzerps | 4,447 | 2,477,554 | A GGUF 2‑bit version of Qwen‑Image‑2.1‑Turbo, uncensored and trimmed to 1.7 GB, enabling local high‑quality image generation without a GPU. |
| [AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF](https://huggingface.co/AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF) | AtomicChat | 519 | 327,786 | Community‑built GGUF fork of Qwen‑Image‑2.1, optimized for CPU‑only inference while retaining uncensored output. |
| [ConwayResearch/Underdog-Saluki-27B-1.0](https://huggingface.co/ConwayResearch/Underdog-Saluki-27B-1.0) | ConwayResearch | 514 | 370,955 | 2‑bit quantized Llama‑style LLM with built‑in tool‑calling; showcases how extreme quantization can keep tool‑use capabilities intact. |
| [nerkyor/Qwen3.8-27B-Coder390…](https://huggingface.co/nerkyor/Qwen3.8-27B-Coder390-EfficientThink-Opus5.5-GPT6Astra-Grok4.7-DSV4Pro-K3-SFT-RLOO-MTP-DFlash2) | nerkyor | 393 | 182,130 | A heavily fine‑tuned Qwen‑3.8 model targeting coding, reasoning, and multilingual tasks; distributed as both safetensors and GGUF for flexibility. |
| [LiquidAI/LFM2.5-24B-A2B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-24B-A2B-GGUF) | LiquidAI | 185 | 60,927 | GGUF‑converted 24 B MoE LLM that drops inference memory to ~6 GB on a RTX 3060, popular among hobbyist developers. |
| [pablodawson/MiniMax-H3-360-Orbit-LoRA](https://huggingface.co/pablodawson/MiniMax-H3-360-Orbit-LoRA) | pablodawson | 482 | 19,494 | LoRA adapter that turns MiniMax‑H3 into a 360‑degree video‑to‑video generator; the only open‑source LoRA for full‑frame rotation. |
| [DavidAU/Qwen3.8-27B‑TURBO‑Fable…](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 1,831 | 1,833,225 | A custom‑tuned uncensored GGUF of Qwen‑3.8‑27B with added code‑generation heads; the most downloaded uncensored GGUF on the Hub. |
| [nvidia/Qwen3.8-Flash-Next-FP4-Local](https://huggingface.co/nvidia/Qwen3.8-Flash-Next-FP4-Local) | nvidia | 152 | 771 | Nvidia’s FP4‑quantized flash‑optimized Qwen‑3.8, distributed via Model Optimizer for ultra‑low‑memory inference on Jetson devices. |

---

## 🌐 Ecosystem Signal (100‑200 words)

The **Qwen family** (3.8, Image‑2.1, Flash‑Next) is the clear driver of growth, with multiple variants spanning full‑precision, FP8/FP4, and GGUF quantizations, illustrating a shift toward *hardware‑agnostic* deployment. Similarly, **DeepSeek‑V4.1** and **Flux‑3** are seeing parallel flash‑optimised releases, underscoring a broader industry push for *speed‑first* inference without sacrificing quality.  Community‑generated **GGUF** and LoRA packs now dominate the “Fine‑tunes & Quantizations” tier, reflecting a maturing ecosystem where developers repurpose large open‑weight bases for edge‑device or niche‑task use‑cases.  Meanwhile, **video generation** (LTX‑2.5, MiniMax‑H3 LoRA) is moving from experimental to mainstream, as evidenced by a 2‑digit jump in weekly likes.  Open‑weight models still out‑download closed‑source equivalents, but proprietary “uncensored” forks (e.g., Qwen‑Image‑2.1‑Uncensored) indicate a demand for fewer content filters in certain user communities, fueling a parallel market of community‑maintained safe‑harbor releases.

---

## 🚀 Worth Exploring

1. **Lightricks/LTX‑2.5** – the most downloaded video‑generation model; its single‑file diffusion checkpoint makes it the simplest way to prototype text‑to‑video pipelines.  
2. **Qwen/Qwen3.8-27B** – a versatile, open‑weight multimodal LLM that serves as a solid baseline for both chat and vision‑language research; its size strikes a sweet spot between capability and accessibility.  
3. **abenzerps/Qwen-Image-2.1-Uncensored-Quantized** – a 2‑bit GGUF model delivering near‑state‑of‑the‑art image generation on a CPU‑only laptop, ideal for developers testing uncensored visual generation without a GPU.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*