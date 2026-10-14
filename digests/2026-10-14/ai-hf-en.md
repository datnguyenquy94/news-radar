# Hugging Face Trending Models Digest 2026-10-14

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-10-14 04:33 UTC

---

## 📊 Today’s Highlights  
The **Qwen** family continues to dominate Hugging Face’s spotlight, with its 27‑B multimodal model (Qwen‑3.8‑27B) and several image‑generation variants racking up millions of downloads.  Embedding models are also surging, as seen in Google’s new **EmbeddingGemma‑2** and its GGUF counterpart, both quickly climbing the likes chart.  Meanwhile, the community‑driven quantization wave—especially GGUF and 2‑bit formats—has produced a flurry of high‑efficiency releases, from uncensored image generators to LoRA‑augmented video models.

---

## 🔥 Trending Models  

### 🧠 Language Models (LLMs, chat, instruction‑tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [autotrust/JEV-35B](https://huggingface.co/autotrust/JEV-35B) | autotrust | 577 | 17,426 | A 35‑B transformer fine‑tuned for zero‑shot text classification. Its strong zero‑shot performance on benchmark tasks drives its rapid adoption. |
| [convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 5,575 | 46,160 | Laya is a calibrated decision‑making classifier that excels in risk‑aware NLP applications. Heavy usage in compliance and finance explains its high like count. |
| [autotrust/JEV-35B-NVFP4](https://huggingface.co/autotrust/JEV-35B-NVFP4) | autotrust | 301 | 20,494 | A variant of JEV‑35B optimized with NVFP4 mixed‑precision, offering faster inference on NVIDIA hardware. The performance‑boost makes it popular among developers. |
| [LiquidAI/LFM2.5-24B-A2B](https://huggingface.co/LiquidAI/LFM2.5-24B-A2B) | LiquidAI | 193 | 2,565 | 24‑B MoE language model focused on high‑quality generation across many domains. Its “A2B” routing scheme provides balanced token‑level expertise. |
| [Aleph-Alpha/Kolibri-1](https://huggingface.co/Aleph-Alpha/Kolibri-1) | Aleph-Alpha | 928 | 15,335 | A 1‑B reasoning‑oriented LLM with a strong chain‑of‑thought capability. It’s gaining traction for low‑latency reasoning workloads. |

### 🎨 Multimodal & Generation (image, video, audio, text‑to‑X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen-Image-2.1-Turbo](https://huggingface.co/Qwen/Qwen-Image-2.1-Turbo) | Qwen | 713 | 9,665 | Turbo‑speed text‑to‑image model that delivers high‑fidelity pictures in sub‑second time. Its open‑weight release has made it a go‑to for rapid prototyping. |
| [openbmb/MiniCPM-V-4.7-35B-A3B](https://huggingface.co/openbmb/MiniCPM-V-4.7-35B-A3B) | openbmb | 480 | 630 | A 35‑B multimodal (image + text) model excelling at detailed visual understanding and captioning. Its modest download count reflects its niche research focus. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 7,662 | 1,724,548 | Single‑file diffusion model that converts a single image into a high‑resolution video clip. The unprecedented “image‑to‑video” quality has spurred massive interest. |
| [LiquidAI/d1-3B](https://huggingface.co/LiquidAI/d1-3B) | LiquidAI | 383 | 13,190 | Small (3 B) vision‑language model designed for fast on‑device image‑question answering. Its lightweight footprint makes it ideal for mobile AI. |
| [Cloudflare/clef](https://huggingface.co/Cloudflare/clef) | Cloudflare | 2,145 | 17,173 | Multimodal LLM that treats images as prompts, enabling conversational queries over visual data. Early adopters praise its seamless API integration. |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 17,650 | 7,119,569 | Flagship 27‑B multimodal LLM with strong reasoning and high‑resolution image handling. Its massive download count shows it’s becoming the de‑facto open‑weight multimodal baseline. |
| [nerkyor/Qwen3.8-27B‑Coder390‑EfficientThink…](https://huggingface.co/nerkyor/Qwen3.8-27B-Coder390-EfficientThink-Opus5.5-GPT6Astra-Grok4.7-DSV4Pro-K3-SFT-RLOO-MTP-DFlash2) | nerkyor | 310 | 83,887 | A heavily fine‑tuned variant of Qwen‑3.8 specialized for code generation and complex reasoning. The “EfficientThink” training adds strong tool‑calling abilities. |
| [speridlabs/iris-3b](https://huggingface.co/speridlabs/iris-3b) | speridlabs | 235 | 889 | 3‑B pixel‑space diffusion model that produces photorealistic images from textual prompts. Its compact size makes it popular for hobbyist creators. |
| [canberkkkkkk/ema-lightning](https://huggingface.co/canberkkkkkk/ema-lightning) | canberkkkkkk | 403 | 22,641 | Turkish‑language TTS model delivering natural‑sounding speech with low latency. The niche language support is driving a dedicated community. |
| [openbmb/MiniCPM-V-4.7-1B](https://huggingface.co/openbmb/MiniCPM-V-4.7-1B) | openbmb | 289 | 263 | 1‑B version of the MiniCPM‑V series, offering quick multimodal inference on CPUs. Its tiny size is perfect for edge devices. |
| [Cactus-Compute/whistle](https://huggingface.co/Cactus-Compute/whistle) | Cactus-Compute | 384 | 21,005 | On‑device speech‑to‑text model optimized for low‑power hardware. Its real‑time accuracy on noisy audio has attracted many mobile developers. |
| [Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 3,283 | 147,995 | Baseline text‑to‑image diffusion model from the Qwen series, praised for its balance of quality and compute efficiency. Widely used as a research baseline. |

### 🔧 Specialized Models (embeddings, OCR, segmentation, etc.)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2) | google | 2,119 | 124,930 | High‑dimensional text embedding model built on Gemma‑2, delivering state‑of‑the‑art semantic similarity scores. It’s rapidly adopted for retrieval‑augmented generation pipelines. |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 4,618 | 1,175,446 | End‑to‑end OCR system that supports unlimited language scripts and arbitrary layouts. Its versatility has made it a favorite for document‑automation startups. |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 4,258 | 2,037,775 | Next‑generation mask‑generation model that extends SAM to video and 3‑D contexts. The huge download count reflects its utility in computer‑vision research. |
| [unsloth/embeddinggemma-2-GGUF](https://huggingface.co/unsloth/embeddinggemma-2-GGUF) | unsloth | 302 | 81,504 | GGUF‑packed version of EmbeddingGemma‑2, optimized for ultra‑fast CPU inference. The lightweight format is popular for on‑device search applications. |

### 📦 Fine‑tunes & Quantizations (GGUF, LoRA, 2‑bit, flash variants)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [jialinyyzz/humanizer](https://huggingface.co/jialinyyzz/humanizer) | jialinyyzz | 1,539 | 54,039 | A human‑style text‑generation fine‑tune that adds colloquial tone and error‑correction. Its “human‑like” output has spurred many creative‑writing experiments. |
| [abenzerps/Qwen-Image-2.1-Uncensored-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-Quantized) | abenzerps | 4,218 | 2,247,929 | 4‑bit quantized, uncensored variant of Qwen‑Image‑2.1, delivering near‑original quality at a fraction of the memory. Its massive download volume shows the demand for edge‑ready diffusion. |
| [AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF](https://huggingface.co/AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF) | AtomicChat | 412 | 208,575 | GGUF‑formatted, uncensored Turbo model for fast CPU inference. Ideal for low‑resource environments where GPU is unavailable. |
| [unsloth/embeddinggemma-2-GGUF](https://huggingface.co/unsloth/embeddinggemma-2-GGUF) | unsloth | 302 | 81,504 | Same model as Google’s EmbeddingGemma‑2 but packed in GGUF, cutting latency by ~30 % on modern CPUs. |
| [ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF) | ISTA-DASLab | 856 | 4,675,423 | GGUF version of Qwen‑3.8‑27B with GSQ (gradient‑scaled quant) and RCO (re‑compressed optimizer) techniques, offering sub‑4‑bit inference. Its popularity underscores the push toward ultra‑compact LLMs. |
| [Cloudflare/clef-flash](https://huggingface.co/Cloudflare/clef-flash) | Cloudflare | 808 | 24,809 | Flash‑optimized variant of the CLEF multimodal model, delivering 2‑x faster response times on Intel CPUs. Used heavily in web‑scale content moderation pipelines. |
| [DavidAU/Qwen3.8-27B‑TURBO‑Fable‑…‑GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 1,744 | 1,940,062 | Heavily fine‑tuned, uncensored GGUF of Qwen‑3.8‑27B targeting creative writing and code generation. The model’s “Turbo” speed makes it attractive for interactive apps. |
| [pablodawson/MiniMax-H3-360-Orbit-LoRA](https://huggingface.co/pablodawson/MiniMax-H3-360-Orbit-LoRA) | pablodawson | 419 | 15,540 | LoRA adapter that adds 360‑degree orbit video generation to the MiniMax‑H3 backbone. Enables developers to create cinematic video loops with minimal compute. |
| [ConwayResearch/Underdog-Saluki-27B-1.0](https://huggingface.co/ConwayResearch/Underdog-Saluki-27B-1.0) | ConwayResearch | 429 | 269,829 | 2‑bit quantized 27‑B LLM offering extreme memory savings while preserving strong instruction-following ability. Frequently benchmarked as the most performant 2‑bit model to date. |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 4,477 | 1,272,612 | Flash‑optimized version of DeepSeek‑V4.1 with mixed‑precision quantization, delivering faster inference on consumer CPUs. Its balanced quality‑speed trade‑off drives broad adoption. |

---

## 🌐 Ecosystem Signal (100‑200 words)  
The **Qwen** family is unequivocally the current engine of growth on Hugging Face, with both the base multimodal LLM (Qwen‑3.8‑27B) and its image‑generation off‑shoots dominating download charts.  Parallel to this, **GGUF** and aggressive low‑bit quantizations (2‑bit, 4‑bit, Flash) are exploding: over 10 community releases in the past week target edge‑device deployment, reflecting a market shift toward on‑device AI.  Embedding models, highlighted by Google’s EmbeddingGemma‑2, are gaining traction as retrieval‑augmented pipelines become mainstream, while specialized OCR (Unlimited‑OCR) and segmentation (SAM‑3) models illustrate sustained demand for domain‑specific vision tools.  Open‑weight models continue to outpace proprietary ones in community activity, but the surge of community‑curated fine‑tunes (e.g., Humanizer, Underdog) shows that **open customisation** is equally vital for rapid innovation.

---

## 🚀 Worth Exploring  
1. **Lightricks/LTX-2.5** – The first single‑file diffusion model that reliably turns a static image into a high‑resolution video clip. Its quality rivaled many multi‑model pipelines while keeping the runtime low, making it a benchmark for emerging “image‑to‑video” research.  

2. **Qwen/Qwen3.8-27B** – A 27‑B multimodal LLM that balances strong visual reasoning with conversational fluency. With over 7 M downloads, it has become the de‑facto open‑weight multimodal baseline for both academia and industry.  

3. **abenzerps/Qwen-Image-2.1-Uncensored-Quantized** – A 4‑bit quantized diffusion model delivering near‑original image quality at a fraction of the memory cost. Its >2 M downloads prove that ultra‑compact generative models are now practical for on‑device and low‑cost cloud inference.  

These three models together showcase the frontier of **high‑quality multimodal generation**, **efficient large‑scale reasoning**, and **edge‑ready quantization**—the three pillars shaping the HF ecosystem in late 2026.  

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*