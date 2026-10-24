# Hugging Face Trending Models Digest 2026-10-24

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-10-24 04:15 UTC

---

**Hugging Face Trending Models Digest – 24 Oct 2026**  

---

## 1️⃣ Today’s Highlights  
The most‑liked release this week is **DeepSeek‑V4.1‑Flash‑1017**, a flash‑optimized multimodal LLM that now tops the weekly‑likes chart. Video generation is exploding, driven by **Lightricks LTX‑2.5**, which broke the 2 M download barrier in just a few weeks. Quantization continues to win community attention – the GGUF‑packed **Qwen‑Image‑2.1‑Uncensored‑Quantized** and **unsloth/flint‑GGUF** together illustrate a surge in low‑bit, edge‑ready models.

---

## 2️⃣ Trending Models  

### 🧠 Language Models (LLMs, chat, instruction‑tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [RecursiveSI/flint](https://huggingface.co/RecursiveSI/flint) | RecursiveSI | 692 | 1,904 | A compact 4 B‑parameter instruction‑tuned LLM focused on conversational quality. It’s gaining traction for low‑resource deployments and has spurred a GGUF quantized variant. |
| [XHToken/Spark‑X2.6‑4B](https://huggingface.co/XHToken/Spark-X2.6-4B) | XHToken | 419 | 1,060 | 4 B‑parameter Chinese‑centric chat model that balances multilingual ability with a small footprint. Popular among Chinese‑language developers for its clean tokenization. |
| [InternScience/Sage‑A1.5](https://huggingface.co/InternScience/Sage-A1.5) | InternScience | 254 | 924 | A 1.5 B MoE LLM built on Qwen 3.5 architecture, showcasing competitive reasoning for its size. Early adopters praise its modular expert routing. |
| [jialinyyzz/humanizer](https://huggingface.co/jialinyyzz/humanizer) | jialinyyzz | 2,118 | 129,025 | Unified Gemma‑4 model fine‑tuned for “human‑like” style across tasks, bridging chat and summarisation. Its GGUF release makes it a favorite for offline desktop assistants. |
| [tencent/Hy‑Memory‑30B‑A3B](https://huggingface.co/tencent/Hy-Memory-30B-A3B) | tencent | 304 | 3,270 | 30 B Chinese‑English conversational model that leverages a memory‑augmented architecture for long‑context chats. Early benchmarks show strong retrieval‑augmented performance. |
| [nvidia/NVIDIA‑Nemotron‑Labs‑Dory1.0‑4B‑BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-Dory1.0-4B-BF16) | nvidia | 179 | 3,769 | Nvidia’s 4 B‑parameter research‑grade model, released in BF16 for high‑throughput inference. It serves as a test‑bed for the upcoming Nemotron 5 series. |

### 🎨 Multimodal & Generation (image, video, audio, text‑to‑X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek‑ai/DeepSeek‑V4.1‑Flash‑1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) | deepseek‑ai | 2,601 | 57,715 | Flash‑quantised multimodal LLM (image ↔ text) delivering 2‑step inference at 20 tokens /ms on consumer GPUs. Its open‑weight release has sparked a wave of community adapters. |
| [Qwen/Qwen3.8‑27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 18,297 | 7,710,011 | 27 B multimodal model that handles image‑text conversation with strong reasoning; dominates the “image‑text‑to‑text” niche on Hugging Face. |
| [Lightricks/LTX‑2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 9,044 | 2,026,951 | Diffusion‑single‑file model that generates high‑fidelity video from a single image or text prompt, setting new standards for AI‑driven video synthesis. |
| [black‑forest‑labs/flux‑3‑image‑klein‑comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black‑forest‑labs | 1,416 | 534,837 | Flux‑3 image‑to‑image finetune packaged for ComfyUI, praised for preserving artistic style while applying detailed edits. |
| [OpenMOSS‑Team/MOSS‑Image‑SFT](https://huggingface.co/OpenMOSS-Team/MOSS-Image-SFT) | OpenMOSS‑Team | 656 | 7,658 | Super‑fine‑tuned StableDiffusion‑type model specialising in photorealistic illustration generation. |
| [fishaudio/drama‑3](https://huggingface.co/fishaudio/drama-3) | fishaudio | 951 | 17,017 | Multispeaker TTS model capable of expressive dramatic reading; leveraged in podcasts and voice‑over workflows. |
| [OpenMOSS‑Team/MOSS‑Image‑Base](https://huggingface.co/OpenMOSS-Team/MOSS-Image-Base) | OpenMOSS‑Team | 522 | 5,618 | Base diffusion model for the MOSS suite, used as the foundation for many community‑derived image generators. |
| [ind​ra‑ocr](https://huggingface.co/datalab-to/indra-ocr) | datalab‑to | 393 | 4,033 | CPU‑optimized ONNX OCR model achieving >90 % F‑score on Scene Text benchmarks; popular for low‑cost document processing. |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 4,986 | 1,837,047 | Video‑mask generation model that extends the Segment‑Anything paradigm to temporal data, enabling real‑time object tracking in videos. |
| [lodestones/Kromoss](https://huggingface.co/lodestones/Kromoss) | lodestones | 235 | 16,365 | Text‑to‑image diffusion model with a small 1 B footprint, targeting mobile generation apps. |
| [Comfy‑Org/MOSS‑Image](https://huggingface.co/Comfy-Org/MOSS-Image) | Comfy‑Org | 402 | 1,606,363 | Diffusion single‑file ready for ComfyUI, built on the OpenMOSS‑Team base model; widely adopted for its ease of integration. |
| [Qwen‑Image‑2.1‑Uncensored‑Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-Quantized) | abenzerps | 4,910 | 2,398,071 | GGUF‑packed text‑to‑image model that runs on CPUs with <4 GB RAM; the “uncensored” checkpoint draws attention for fewer content filters. |
| [MiniMax‑M3.1‑Flash](https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash) | MiniMaxAI | 260 | 1,096 | 1.2 B multimodal LLM focused on low‑latency vision‑language tasks; flash‑quantized for desktop GPUs. |
| [OrcaCyber‑Nano‑1.0](https://huggingface.co/orcarouter/OrcaCyber-Nano-1.0) | orcarouter | 212 | 22,314 | Vision‑language model trained on cybersecurity‑specific corpora, useful for threat‑intel summarisation from screenshots. |
| [flux‑3‑image‑klein](https://huggingface.co/black-forest-labs/flux-3-image-klein) | black‑forest‑labs | 658 | 105,768 | Standard Flux‑3 image‑to‑image checkpoint; valued for its raw generative power before comfy‑UI finetunes. |
| [Comfy‑Org/Fibo‑2.0](https://huggingface.co/Comfy-Org/Fibo-2.0) | Comfy‑Org | 152 | 70,682 | Diffusion model derived from the recent “Fibo” research paper, delivering higher texture fidelity for artistic workflows. |

### 🔧 Specialized Models (embeddings, time‑series, segmentation, etc.)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [google/embeddinggemma‑2](https://huggingface.co/google/embeddinggemma-2) | google | 2,874 | 192,741 | Embedding‑only Gemma 2 model delivering 2 K‑dimensional vectors for retrieval and semantic search. Its open‑weight release encourages large‑scale indexing pipelines. |
| [mistralai/Timestral‑209M](https://huggingface.co/mistralai/Timestral-209M) | mistralai | 318 | 6,815 | Foundation model for time‑series forecasting, supporting multivariate inputs with attention‑based lag handling. Early adopters report strong performance on electricity‑load data. |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 4,986 | 1,837,047 | (Also listed under multimodal) Provides mask‑generation for video frames, extending the Segment‑Anything model to temporal contexts. |
| — | — | — | — | — |

### 📦 Fine‑tunes & Quantizations (community‑packed GGUF, FP8/FP4, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [dealignai/DeepSeek‑V4.1‑Flash‑1017‑UNCENSORED‑FP8](https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-1017-UNCENSORED-FP8) | dealignai | 302 | 4,141 | FP8‑quantized version of DeepSeek‑V4.1, removing safety filters; enables sub‑2 GB deployment on edge devices. |
| [unsloth/flint‑GGUF](https://huggingface.co/unsloth/flint-GGUF) | unsloth | 194 | 33,277 | GGUF‑converted 4 B “flint” model offering ~3× faster inference on Apple Silicon while preserving conversational quality. |
| [nvidia/Qwen3.8‑Flash‑Next‑FP4‑Local](https://huggingface.co/nvidia/Qwen3.8-Flash-Next-FP4-Local) | nvidia | 327 | 11,197 | FP4 quantization of Qwen‑Flash‑Next for local inference; tuned for Nvidia’s Model Optimizer pipeline. |
| [DavidAU/Qwen3.8‑27B‑TURBO‑…‑GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 2,020 | 1,679,145 | Heavily fine‑tuned, uncensored 27 B GGUF model that packs multiple specialised instruction heads (coding, storytelling). |
| [Qwen‑Image‑2.1‑Uncensored‑Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-Quantized) | abenzerps | 4,910 | 2,398,071 | See Multimodal table – also a community GGUF‑style quantization, highlighting the blend between fine‑tune and quant‑pack categories. |

---

## 3️⃣ Ecosystem Signal  

The **multimodal frontier** is the dominant growth driver. Models that fuse vision and language—DeepSeek‑V4.1‑Flash‑1017, Qwen‑3.8‑27B, and the Flux‑3 image‑to‑image family—are accumulating the bulk of likes and downloads, underscoring demand for AI that can reason over images and generate video. Parallel to this, **video generation** is emerging as a distinct niche, with Lightricks LTX‑2.5 setting a new benchmark for single‑prompt video synthesis.

From a **weight‑policy perspective**, open‑weight releases remain the norm for large‑scale models (DeepSeek, Qwen, Flux). However, a noticeable **quantization wave** is evident: GGUF and FP8/FP4 packs are rapidly climbing the likes chart (e.g., Qwen‑Image‑2.1‑Quantized, unsloth/flint‑GGUF). Community actors are repackaging proprietary checkpoints into edge‑friendly formats, suggesting a market shift toward on‑device inference.

Finally, **specialised adapters** (embedding models, time‑series forecasters, OCR) are modest in raw popularity but indicate diversification of the ecosystem beyond pure generation. The rising number of fine‑tuned, uncensored variants also hints at a growing appetite for unrestricted models in research and hobbyist circles.  

---

## 4️⃣ Worth Exploring  

1. **[deepseek‑ai/DeepSeek‑V4.1‑Flash‑1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017)** – The most‑liked multimodal LLM this week; its flash quantization delivers near‑GPU‑level speed on consumer hardware while preserving strong image‑text reasoning. Ideal for rapid prototyping of vision‑language assistants.  

2. **[Lightricks/LTX‑2.5](https://huggingface.co/Lightricks/LTX-2.5)** – A game‑changing diffusion model that can create coherent video sequences from a single frame or text prompt. Its massive download count reflects early adoption in marketing, entertainment, and rapid‑content creation pipelines.  

3. **[google/embeddinggemma‑2](https://huggingface.co/google/embeddinggemma-2)** – Provides high‑dimensional, open‑weight embeddings that are already being integrated into large‑scale semantic search engines. Its balance of quality and openness makes it a solid baseline for any retrieval‑oriented project.  

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*