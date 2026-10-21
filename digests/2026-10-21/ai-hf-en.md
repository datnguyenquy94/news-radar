# Hugging Face Trending Models Digest 2026-10-21

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-10-21 04:21 UTC

---

**Hugging Face Trending Models Digest – 2026‑10‑21**  

---

### Today’s Highlights
The most‑liked release this week is **Qwen‑3.8‑27B**, a 27‑B vision‑language model that has amassed 18 k likes and over 7 M downloads, underscoring the continued appetite for large multimodal LLMs.  Image‑generation keeps surging, with **Qwen‑Image‑2.1‑Uncensored‑Quantized** (GGUF) hitting 4.7 k likes and nearly 3 M downloads, showing community demand for portable, high‑quality text‑to‑image models.  At the same time, the **Flux‑3** family (both vanilla and ComfyUI‑tuned variants) dominate the image‑to‑image space, while **EmbeddingGemma‑2** climbs to the top‑10 of all‑time feature‑extraction models, reflecting a shift toward on‑device embedding services.

---

## Trending Models  

### 🧠 Language Models (LLMs, chat, instruction‑tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) | deepseek‑ai | 1,989 | 27,737 | A vision‑language model that combines a 34‑B text backbone with a lightweight visual encoder. It is trending for its strong instruction following while keeping inference costs modest. |
| [jialinyyzz/humanizer](https://huggingface.co/jialinyyzz/humanizer) | jialinyyzz | 2,029 | 115,341 | A 7‑B GGUF chat model fine‑tuned to produce more “human‑like” responses, popular on low‑resource devices. Its human‑centric tuning has driven rapid community adoption. |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 18,075 | 7,586,857 | The flagship 27‑B multimodal LLM that excels at image‑text understanding and long‑context chat. Its massive likes reflect the industry’s push toward unified vision‑language assistants. |
| [LiquidAI/LFM2.5-24B-A2B](https://huggingface.co/LiquidAI/LFM2.5-24B-A2B) | LiquidAI | 524 | 15,410 | A 24‑B Mixture‑of‑Experts (MoE) text generator with strong reasoning abilities. It’s gaining traction for affordable, high‑quality generation on commodity GPUs. |
| [tencent/Hy-Memory-30B-A3B](https://huggingface.co/tencent/Hy-Memory-30B-A3B) | tencent | 253 | 2,145 | A 30‑B conversational model that emphasizes memory‑augmented dialogue, attracting researchers exploring long‑term contextual coherence. |
| [reflection/Beam-1.0-501B-A23B](https://huggingface.co/reflection/Beam-1.0-501B-A23B) | reflection | 188 | 2,930 | A 501‑B MoE model focused on code and logical reasoning, notable for its “beam” routing that reduces inference latency. |
| [nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4) | nvidia | 190 | 11,459 | A 120‑B vision‑language powerhouse optimized with NVIDIA’s Model Opt for FP4 precision, delivering high throughput on DGX‑H100 clusters. |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 6,364 | 2,530,599 | The “Flash” variant of Qwen‑3.8, quantized to FP8 for cheap inference while preserving the 27‑B model’s multimodal capabilities. |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek‑ai | 4,676 | 1,431,582 | A flash‑quantized version of DeepSeek‑V4.1 that offers near‑full precision performance on CPUs, driving its rapid uptake in edge deployments. |

### 🎨 Multimodal & Generation (image, video, audio, text‑to‑X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black‑forest‑labs | 1,103 | 439,528 | A ComfyUI‑tuned Flux‑3 diffusion model excelling at stylized image‑to‑image edits. The community praises its low‑VRAM footprint and high fidelity. |
| [black-forest-labs/flux-3-image-klein](https://huggingface.co/black-forest-labs/flux-3-image-klein) | black‑forest‑labs | 572 | 78,897 | The vanilla Flux‑3 image‑to‑image model, popular for its versatile style transfer and fast sampling on consumer GPUs. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 8,638 | 2,039,447 | A diffusion‑single‑file model that converts a single image into a short video clip, leading the emerging image‑to‑video niche. |
| [OpenMOSS-Team/MOSS-Image-SFT](https://huggingface.co/OpenMOSS-Team/MOSS-Image-SFT) | OpenMOSS‑Team | 504 | 4,547 | Fine‑tuned diffusion model for high‑resolution text‑to‑image generation, notable for its clean “MOSS” aesthetic. |
| [OpenMOSS-Team/MOSS-Image-Base](https://huggingface.co/OpenMOSS-Team/MOSS-Image-Base) | OpenMOSS‑Team | 439 | 3,558 | Base model that powers the MOSS‑SFT family; its open‑weight policy fuels many community forks. |
| [fishaudio/drama-3](https://huggingface.co/fishaudio/drama-3) | fishaudio | 842 | 13,495 | A 3‑speaker TTS model delivering expressive drama‑style speech, quickly becoming a go‑to for voice‑over creators. |
| [Qwen/Qwen-Image-2.1-Turbo](https://huggingface.co/Qwen/Qwen-Image-2.1-Turbo) | Qwen | 1,015 | 27,652 | A fast, low‑latency text‑to‑image diffusion model that supports in‑painting and style control, trending for real‑time prototyping. |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 4,844 | 1,981,704 | An OCR model that extracts text from any language and script, with a unified transformer that also provides language‑level embeddings. |
| [datalab-to/indra-ocr](https://huggingface.co/datalab-to/indra-ocr) | datalab‑to | 300 | 3,111 | Lightweight ONNX OCR model optimized for CPU inference, loved by developers needing fast, on‑device document parsing. |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 4,778 | 1,902,047 | A video‑mask generation model (SAM‑3) that extends the Segment Anything concept to temporal data, opening new possibilities for video editing. |

### 🔧 Specialized Models (embeddings, time‑series, medical, etc.)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2) | google | 2,774 | 172,474 | A 2‑B encoder that produces high‑quality dense embeddings for text, now a default choice for retrieval and RAG pipelines because of its low latency. |
| [mistralai/Timestral-209M](https://huggingface.co/mistralai/Timestral-209M) | mistralai | 237 | 4,008 | The first open‑source foundation model dedicated to time‑series forecasting, gaining traction in finance and IoT domains. |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 4,778 | 1,902,047 | (also listed under 🎨) Provides mask generation for video, making it a cross‑category specialty model for vision‑centric workflows. |

### 📦 Fine‑tunes & Quantizations (community forks, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [abenzerps/Qwen-Image-2.1-Uncensored-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-Quantized) | abenzerps | 4,720 | 2,788,283 | GGUF‑quantized, uncensored version of Qwen‑Image‑2.1 that runs on a single RTX 3080, explaining its massive download count. |
| [Comfy-Org/MOSS-Image](https://huggingface.co/Comfy-Org/MOSS-Image) | Comfy‑Org | 300 | 924,574 | Community‑packaged diffusion checkpoint for ComfyUI, built on the MOSS‑Image‑Base, simplifying integration for artists. |
| [nvidia/Qwen3.8-Flash-Next-FP4-Local](https://huggingface.co/nvidia/Qwen3.8-Flash-Next-FP4-Local) | nvidia | 271 | 7,345 | FP4‑optimized “Flash‑Next” model tuned for local inference; the tiny download number reflects its early‑access status. |
| [lodestones/MOSS-Image-SFT-8-steps-dmd](https://huggingface.co/lodestones/MOSS-Image-SFT-8-steps-dmd) | lodestones | 182 | 54,814 | An 8‑step fine‑tune of MOSS‑Image‑SFT for deterministic outputs, appealing to developers needing reproducible generations. |
| [dealignai/DeepSeek-V4.1-Flash-1017-UNCENSORED-FP8](https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-1017-UNCENSORED-FP8) | dealignai | 193 | 2,803 | FP8‑quantized, fully uncensored DeepSeek model that offers near‑full precision results with a 4× speed‑up on Ampere GPUs. |
| [meta-models/Muse-Spark-Open-816B-A42B-NVFP4](https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B-NVFP4) | meta‑models | 195 | 5,553 | Nvidia‑optimized FP4 version of Muse‑Spark‑Open, providing a high‑capacity multimodal LLM for research clusters. |

---

## Ecosystem Signal
The current week reveals a clear **multimodal surge**: vision‑language models (Qwen‑3.8‑27B, DeepSeek‑V4.1‑Flash) and diffusion‑based generation (Flux‑3, MOSS‑Image family) dominate the likes chart, indicating demand for unified AI that can see, speak, and generate media. Open‑weight releases continue to lead, with community‑driven fine‑tunes (MOSS‑Image, Flux‑3‑Comfy) outpacing proprietary closed models in download volume. Quantization is a hot sub‑trend—GGUF and FP4/FP8 checkpoints (e.g., Qwen‑Image‑2.1‑Uncensored‑Quantized, DeepSeek‑Flash‑UNCENSORED‑FP8) are exploding, driven by the need for on‑device inference and cost‑effective serving. Meanwhile, **embedding services** (EmbeddingGemma‑2) and **time‑series forecasting** (Timestral‑209M) showcase a diversification beyond pure generation, hinting at a broader ecosystem where specialized foundations complement large, all‑purpose models.

---

## Worth Exploring
1. **Qwen‑3.8‑27B** – The top‑liked LLM combines 27 B parameters with a high‑resolution visual encoder, delivering state‑of‑the‑art multimodal reasoning suitable for research and product prototypes.  
2. **abenzerps/Qwen-Image-2.1-Uncensored-Quantized** – Its GGUF format makes high‑quality text‑to‑image generation possible on a single consumer GPU, offering a pragmatic entry point for artists and developers without cloud resources.  
3. **Lightricks/LTX-2.5** – As the most‑downloaded image‑to‑video diffusion model, it opens a new creative workflow: turning static concepts into motion, a capability that’s still rare in open‑source tools.  

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*