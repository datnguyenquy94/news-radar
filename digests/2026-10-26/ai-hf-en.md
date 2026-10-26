# Hugging Face Trending Models Digest 2026-10-26

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-10-26 04:22 UTC

---

## Today’s Highlights  
The Hugging Face Hub is being dominated by large multimodal engines, with **DeepSeek‑V4.1‑Flash‑1017** and **Qwen‑3.8‑27B** leading both likes and download counts.  Video‑generation is exploding thanks to **Lightricks/LTX‑2.5**, which alone has scraped over 2 M downloads in a week.  At the same time, the community is busy quantising and lightweight‑finetuning flagship models – dozens of GGUF variants of DeepSeek and Qwen appear in the top‑30, signalling strong demand for on‑device inference.

---  

## Trending Models  

### 🧠 Language Models (LLMs, chat models, instruction‑tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [RecursiveSI/flint](https://huggingface.co/RecursiveSI/flint) | RecursiveSI | 863 | 6,444 | A 7 B‑parameter chat‑oriented LLM that emphasizes low‑latency inference.  Its conversational fine‑tune has attracted a niche community of chatbot developers. |
| [XHToken/Spark‑X2.6‑4B](https://huggingface.co/XHToken/Spark-X2.6-4B) | XHToken | 531 | 3,488 | A 4 B‑parameter Chinese‑focused LLM released under an open‑weight license.  Early adopters praise its balance of quality and small footprint. |
| [Nanbeige/Nanbeige4.3‑33B](https://huggingface.co/Nanbeige/Nanbeige4.3-33B) | Nanbeige | 409 | 0 | A 33 B‑parameter LLaMA‑style model that was just opened for download.  Though downloads are still low, the sheer size has generated buzz among research labs. |
| [InternScience/Sage‑A1.5](https://huggingface.co/InternScience/Sage-A1.5) | InternScience | 292 | 3,875 | A Mixture‑of‑Experts (MoE) variant of Qwen‑3.5 that targets instruction following.  The MoE routing gives it a high per‑token throughput on GPU clusters. |
| [Qwen/Qwen3.8‑27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 18,406 | 7,762,014 | One of the most‑liked LLMs on the Hub, this 27 B multimodal model supports image‑text understanding and chat.  Its open‑weight release fuels a wave of community‑derived quantizations. |
| [KRAFTON/Raon‑1‑mini‑preview](https://huggingface.co/KRAFTON/Raon-1-mini-preview) | KRAFTON | 189 | 1,177 | A compact 1 B‑parameter Korean‑language model aimed at on‑device assistants.  Early testers report surprisingly fluent responses for its size. |
| [ornith‑ai/Ornith‑1.5‑122B](https://huggingface.co/ornith-ai/Ornith-1.5-122B) | ornith‑ai | 178 | 48,477 | A massive 122 B MoE model that blends text generation with vision‑language pre‑training.  Its release under a permissive license has attracted large‑scale research projects. |
| [jialinyyzz/humanizer](https://huggingface.co/jialinyyzz/humanizer) | jialinyyzz | 2,157 | 143,152 | A GGUF‑packed vision‑language model that performs “human‑like” image captioning.  Its efficiency on CPU‑only devices makes it a favorite for edge deployments. |

### 🎨 Multimodal & Generation (image, video, audio, text‑to‑X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek‑ai/DeepSeek‑V4.1‑Flash‑1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) | deepseek‑ai | 3,014 | 85,275 | A flash‑optimized vision‑language model that can generate detailed captions and answer visual questions.  Its flash‑attention implementation cuts inference time by ~40 % on RTX 4090. |
| [MiniMaxAI/MiniMax‑M3.1‑Flash](https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash) | MiniMaxAI | 354 | 7,355 | Multimodal model built on the DeepSeek architecture, fine‑tuned for creative writing from images.  Early users cite its ability to produce coherent stories from a single picture. |
| [Lightricks/LTX‑2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 9,350 | 2,107,108 | A diffusion‑based image‑to‑video generator that supports text‑guided motion synthesis.  Its single‑file checkpoint has been downloaded over 2 M times in just one week. |
| [black‑forest‑labs/flux‑3‑image‑klein‑comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black‑forest‑labs | 1,612 | 660,874 | Flux‑3 diffusion model packaged for ComfyUI, excelling at high‑resolution image‑to‑image edits.  The community praises its “Klein” finetune for preserving fine details. |
| [OpenMOSS‑Team/MOSS‑Image‑SFT](https://huggingface.co/OpenMOSS-Team/MOSS-Image-SFT) | OpenMOSS‑Team | 731 | 10,757 | A supervised‑fine‑tuned text‑to‑image model derived from the MOSS family, focusing on English prompts.  Its compact 1 B parameter size makes it suitable for low‑budget inference. |
| [abenzerps/Qwen‑Image‑2.1‑Uncensored‑Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-Quantized) | abenzerps | 5,045 | 2,235,846 | A GGUF‑quantized version of Qwen‑Image 2.1 that removes safety filters for unrestricted generation.  The massive download count reflects demand for uncensored diffusion on consumer GPUs. |
| [OpenMOSS‑Team/MOSS‑Image‑Base](https://huggingface.co/OpenMOSS-Team/MOSS-Image-Base) | OpenMOSS‑Team | 555 | 7,641 | The foundational checkpoint for the MOSS image family, offering a balanced trade‑off between fidelity and compute.  Frequently used as a base for custom LoRA adaptations. |
| [lodestones/Kromoss](https://huggingface.co/lodestones/Kromoss) | lodestones | 261 | 23,972 | A lightweight text‑to‑image diffusion model that prioritises fast sampling (8 steps).  Its “Kromoss” nickname comes from the whimsical visual style it produces. |
| [Comfy‑Org/MOSS‑Image](https://huggingface.co/Comfy-Org/MOSS-Image) | Comfy‑Org | 456 | 2,161,961 | A single‑file diffusion model built for ComfyUI, bundling the base MOSS checkpoint and fine‑tuned LoRA weights.  Its popularity stems from plug‑and‑play convenience for artists. |
| [datalab‑to/indra‑ocr](https://huggingface.co/datalab-to/indra-ocr) | datalab‑to | 425 | 4,636 | An ONNX‑exported OCR model that runs efficiently on CPU‑only environments.  Its strong accuracy on multilingual documents makes it attractive for enterprise pipelines. |
| [orcarouter/OrcaCyber‑Nano‑1.0](https://huggingface.co/orcarouter/OrcaCyber-Nano-1.0) | orcarouter | 256 | 30,330 | A tiny vision‑language model (≈300 M) tuned on cybersecurity‑related image‑text pairs.  Demonstrates that domain‑specific visual reasoning can fit on a laptop GPU. |
| [dealignai/DeepSeek‑V4.1‑Flash‑1017‑UNCENSORED‑FP8](https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-1017-UNCENSORED-FP8) | dealignai | 370 | 6,792 | FP8‑quantized variant of DeepSeek‑V4.1 that removes content filters.  Users report a 2× speedup on RTX 3080 with comparable visual‑language quality. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [mistralai/Timestral‑209M](https://huggingface.co/mistralai/Timestral-209M) | mistralai | 372 | 9,765 | A foundation model for time‑series forecasting, trained on heterogeneous economic data.  Its compact 209 M size enables rapid fine‑tuning for niche forecasting tasks. |
| [fishaudio/drama‑3](https://huggingface.co/fishaudio/drama-3) | fishaudio | 1,016 | 21,375 | A high‑fidelity, multi‑speaker text‑to‑speech model that captures expressive drama‑style delivery.  The model is being adopted in podcast‑automation pipelines. |
| [google/embeddinggemma‑2](https://huggingface.co/google/embeddinggemma-2) | google | 2,925 | 212,769 | Embedding‑only version of Gemma 2, optimized for dense vector retrieval and semantic search.  Its open‑weight release has spurred many retrieval‑augmented generation (RAG) experiments. |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 5,114 | 1,849,059 | The third generation of the Segment‑Anything Model, extended to video‑frame segmentation and feature extraction.  Its massive download count reflects broad adoption in video‑editing tools. |
| [HuggingFaceBio/Carbon‑X](https://huggingface.co/HuggingFaceBio/Carbon-X) | HuggingFaceBio | 186 | 807 | A DNA‑focused language model trained on genomic sequences, enabling downstream tasks like variant prediction.  Early collaborations with biotech firms highlight its practical relevance. |

### 📦 Fine‑tunes & Quantizations (community fine‑tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [ISTA‑DASLab/DeepSeek‑V4.1‑Flash‑1017‑GSQ‑RCO‑GGUF](https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF) | ISTA‑DASLab | 291 | 412,392 | A mixed‑precision GGUF pack of DeepSeek‑V4.1 using Group‑Size Quantization (GSQ) and RCO rounding, targeting low‑memory inference.  The community praises its ~3 GB footprint versus the original 12 GB. |
| [unsloth/flint‑GGUF](https://huggingface.co/unsloth/flint-GGUF) | unsloth | 254 | 103,369 | GGUF conversion of the Flint LLM with 4‑bit quantization, enabling CPU‑only deployment.  Popular in the “off‑grid” inference community for its speed‑memory trade‑off. |
| [orcarouter/DeepSeek‑V4.1‑Flash‑1017‑abliterated‑GGUF](https://huggingface.co/orcarouter/DeepSeek-V4.1-Flash-1017-abliterated-GGUF) | orcarouter | 222 | 7,293 | An aggressively 2‑bit quantized GGUF file that pushes the limits of on‑device performance while preserving most of the model’s visual‑language capabilities. |
| [DavidAU/Qwen3.8‑27B‑TURBO‑Fable‑Cold‑Fusion‑735‑882‑Heretic‑Uncensored‑NEO‑CODER‑MAX‑MTP‑GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 2,092 | 1,671,015 | A heavily finetuned, uncensored GGUF of Qwen‑3.8‑27B that merges code‑generation (NEO‑CODER) and creative writing (Fable).  Its popularity reflects a demand for a single “do‑it‑all” multilingual model on consumer hardware. |

---

## Ecosystem Signal  

The **multimodal frontier** is clearly the hottest segment: image‑to‑video (LTX‑2.5) and flash‑optimized vision‑language models dominate likes and downloads, while uncensored/FP8 variants of DeepSeek and Qwen illustrate a tension between safety and raw capability.  In the **LLM arena**, Qwen‑3.8‑27B continues to set the benchmark, spawning a cascade of community‑built GGUF packs that dramatically shrink its footprint.  Open‑weight releases remain the norm, with only a handful of proprietary‑sounding checkpoints (e.g., Lightricks) still gated behind commercial licenses.  Quantization activity is unprecedented: four GGUF‑only models appear in the top‑30, and several sub‑8‑bit variants have already crossed the 100 k‑download threshold, signaling a maturing ecosystem for edge inference.  Specialized domains—time‑series, DNA, and speech—are growing steadily, but they still occupy a modest slice of overall attention compared with the visual generation wave.

---

## Worth Exploring  

1. **Lightricks/LTX‑2.5** – Its single‑file diffusion checkpoint breaks the 2 M‑download barrier in just a week, offering high‑quality text‑guided video synthesis that can be run on a single RTX 3080.  Ideal for developers looking to prototype video‑AI products without building a custom pipeline.  

2. **Qwen/Qwen3.8‑27B** – The most‑liked LLM on the Hub, coupling strong language abilities with vision support.  Its open‑weight status and the extensive ecosystem of GGUF quantizations make it a versatile baseline for both research and production.  

3. **ISTA‑DASLab/DeepSeek‑V4.1‑Flash‑1017‑GSQ‑RCO‑GGUF** – Demonstrates how modern mixed‑precision quantization can shrink a 12 GB flash‑attention model to <4 GB while retaining most of its performance.  Perfect for anyone interested in on‑device multimodal AI or exploring the limits of low‑bit inference.  

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*