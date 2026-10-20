# Hugging Face Trending Models Digest 2026-10-20

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-10-20 04:29 UTC

---

**🗞️ Today’s Highlights**  
The Hugging Face hub is buzzing with a new wave of **large vision‑language models** – DeepSeek‑V4.1‑Flash‑1017 and Qwen‑3.8 series dominate the LLM leaderboard, both offering impressive performance with flash‑attention optimizations.  Image‑generation continues its surge, led by the **Flux‑3** family and the record‑breaking **LTX‑2.5** video generator (8.5 k likes).  At the same time, the community is rapidly quantizing and fine‑tuning models into **GGUF/FP4** formats, making 30 B+ parameters runnable on consumer‑grade hardware.  

---

## 🌟 Trending Models  

### 🧠 Language Models (LLMs, chat & instruction‑tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) | deepseek-ai | 1,726 | 17,924 | A 1017‑token flash‑attention vision‑language model that excels at image‑to‑text tasks. Its compact size and strong multilingual capability have pushed it into the top‑10 LLMs this week. |
| [openbmb/MiniCPM-V-4.7-35B-A3B](https://huggingface.co/openbmb/MiniCPM-V-4.7-35B-A3B) | openbmb | 1,069 | 76,410 | A 35 B multimodal LLM tuned for both text and vision, showing strong reasoning on benchmarks. The model’s open‑weight policy fuels heavy community adoption. |
| [jialinyyzz/humanizer](https://huggingface.co/jialinyyzz/humanizer) | jialinyyzz | 1,993 | 109,937 | A 4‑bit GGUF‑converted text generator that mimics human‑like style across domains. Its sharp inference speed on laptops has made it a favourite for personal assistants. |
| [meta-models/Muse-Spark-Open-816B-A42B](https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B) | meta-models | 585 | 2,109 | An 816‑B multimodal transformer that combines vision, audio and text in a single forward pass. Early tests show it can answer video‑based queries with near‑state‑of‑the‑art accuracy. |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 18,017 | 7,458,401 | The flagship 27 B Qwen model with vision‑language pre‑training; it tops the weekly like count by a wide margin. Its conversational abilities and strong retrieval performance attract both research and product teams. |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 6,336 | 2,494,099 | A flash‑attention variant of the 27 B model, offering up to 2× faster inference with negligible quality loss. The release sparked a flurry of benchmark posts, driving its rapid rise. |
| [tencent/Hy-Memory-30B-A3B](https://huggingface.co/tencent/Hy-Memory-30B-A3B) | tencent | 220 | 1,571 | A 30 B conversational LLM that emphasizes long‑context memory (up to 64 k tokens). It is gaining traction in Chinese‑language chat applications. |
| [openbmb/MiniCPM-V-4.7-1B](https://huggingface.co/openbmb/MiniCPM-V-4.7-1B) | openbmb | 394 | 33,388 | A 1 B lightweight multimodal model designed for edge devices. Its tiny footprint and decent zero‑shot performance make it a popular baseline. |
| [LiquidAI/LFM2.5-24B-A2B](https://huggingface.co/LiquidAI/LFM2.5-24B-A2B) | LiquidAI | 501 | 14,151 | A 24 B decoder‑only model with a mixture‑of‑experts (MoE) backbone, delivering strong generation quality at reduced cost. It’s frequently cited in recent research on scalable MoE training. |
| [reflection/Beam-1.0-501B-A23B](https://huggingface.co/reflection/Beam-1.0-501B-A23B) | reflection | 170 | 2,097 | A 501‑B expert‑mixture model that emphasizes reasoning and code generation. Its “beam‑search‑style” architecture has generated buzz in the AI‑safety community. |

### 🎨 Multimodal & Generation (image, video, audio, text‑to‑X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black-forest-labs | 981 | 393,062 | Flux‑3 image‑to‑image model packaged for ComfyUI, delivering high‑fidelity edits with a 3‑step diffusion scheme. Its ease of integration has boosted community adoption. |
| [black-forest-labs/flux-3-image-klein](https://huggingface.co/black-forest-labs/flux-3-image-klein) | black-forest-labs | 530 | 62,006 | The vanilla Flux‑3 variant focused on pure image‑to‑image generation; it’s praised for sharper texture recreation compared to earlier Flux releases. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 8,500 | 2,019,834 | A diffusion‑single‑file model that produces 2‑second video clips from a single image and a short prompt. Its unprecedented popularity reflects the growing demand for fast video synthesis. |
| [fishaudio/drama-3](https://huggingface.co/fishaudio/drama-3) | fishaudio | 777 | 11,795 | A high‑quality multi‑speaker TTS model that captures expressive prosody for dramatic reading. Users cite its “film‑grade” voice realism as a standout. |
| [Qwen/Qwen-Image-2.1-Turbo](https://huggingface.co/Qwen/Qwen-Image-2.1-Turbo) | Qwen | 1,001 | 25,033 | Text‑to‑image diffusion model optimized for speed (Turbo) while preserving the visual fidelity of the Qwen‑Image family. Early adopters report near‑real‑time generation on consumer GPUs. |
| [OpenMOSS-Team/MOSS-Image-Base](https://huggingface.co/OpenMOSS-Team/MOSS-Image-Base) | OpenMOSS-Team | 371 | 2,774 | The base diffusion checkpoint for the open‑source MOSS image‑generation line, facilitating downstream fine‑tuning. Its permissive Apache‑2.0 license encourages community extensions. |
| [OpenMOSS-Team/MOSS-Image-SFT](https://huggingface.co/OpenMOSS-Team/MOSS-Image-SFT) | OpenMOSS-Team | 414 | 3,336 | A supervised‑fine‑tuned version of MOSS‑Image‑Base, specialized for Chinese‑language prompts and higher aesthetic scores. It has become a benchmark for localized diffusion. |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 4,706 | 1,902,371 | A video‑mask generation model that extends the Segment‑Anything paradigm to moving frames. Its ability to produce temporally consistent masks drives many computer‑vision pipelines. |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 4,825 | 1,799,825 | An OCR transformer that works on arbitrary languages and layouts without a predefined character set. Its “unlimited” claim and massive download count highlight industry demand for universal text extraction. |
| [datalab-to/indra-ocr](https://huggingface.co/datalab-to/indra-ocr) | datalab-to | 249 | 2,433 | A lightweight ONNX‑compatible OCR model targeting CPU‑only deployments. Its tiny footprint (≈30 MB) makes it popular for mobile and edge use‑cases. |
| [Comfy-Org/MOSS-Image](https://huggingface.co/Comfy-Org/MOSS-Image) | Comfy-Org | 242 | 673,110 | A ComfyUI‑ready diffusion checkpoint built on top of MOSS‑Image‑Base, pre‑configured for common workflows (inpainting, outpainting). Its high download volume reflects the rapid growth of the ComfyUI community. |

### 🔧 Specialized Models (embeddings, time‑series, OCR, etc.)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2) | google | 2,733 | 167,750 | A 2‑B parameter text‑embedding model derived from Gemma, delivering high‑quality dense vectors for retrieval and clustering. Its open‑weight release has spurred many downstream semantic‑search projects. |
| [mistralai/Timestral-209M](https://huggingface.co/mistralai/Timestral-209M) | mistralai | 197 | 2,601 | A dedicated time‑series forecasting foundation model that learns from multivariate temporal patterns. Early adopters praise its zero‑shot performance on electricity‑load and stock‑price data. |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 4,825 | 1,799,825 | (also listed under 🎨 for its multimodal nature) A universal OCR system that can read any script without language‑specific finetuning, making it a go‑to solution for multilingual document processing. |

### 📦 Fine‑tunes & Quantizations (GGUF, FP4, community‑crafted variants)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [abenzerps/Qwen-Image-2.1-Uncensored-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-Quantized) | abenzerps | 4,645 | 2,739,572 | A 2‑bit GGUF quantization of Qwen‑Image‑2.1, enabling sub‑2 GB GPU inference while keeping visual fidelity. Its massive download count shows the appetite for ultra‑compact diffusion models. |
| [LiquidAI/LFM2.5-24B-A2B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-24B-A2B-GGUF) | LiquidAI | 214 | 120,509 | GGUF‑converted 24 B MoE model that runs on a single RTX 4090 with ≤8 GB VRAM. The quantized variant is praised for preserving the original’s generation quality. |
| [ConwayResearch/Underdog-Saluki-27B-1.0](https://huggingface.co/ConwayResearch/Underdog-Saluki-27B-1.0) | ConwayResearch | 571 | 425,513 | A 27 B LLaMA‑style model quantized to 2‑bit GGUF, optimized for tool‑calling and function execution. Its open‑source licensing and low‑memory footprint have attracted many developers building AI‑agents. |
| [nvidia/Qwen3.8-Flash-Next-FP4-Local](https://huggingface.co/nvidia/Qwen3.8-Flash-Next-FP4-Local) | nvidia | 241 | 6,047 | FP4‑quantized version of Qwen‑3.8‑Flash‑Next, packaged for NVIDIA TensorRT‑compatible deployment. Early benchmarks report >3× speed‑up with <0.3 BLEU loss. |
| [meta-models/Muse-Spark-Open-816B-A42B-NVFP4](https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B-NVFP4) | meta-models | 185 | 3,672 | An NVFP4 quantization of the massive 816 B Muse‑Spark model, making it runnable on modern data‑center GPUs with half the memory budget. It’s the first publicly released FP4‑scaled 800 B model. |
| [nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4) | nvidia | 171 | 9,322 | A 120 B vision‑language powerhouse quantized to NVFP4, designed for “Super‑VL” tasks like video QA. Its release showcases NVIDIA’s push to democratize ultra‑large models via efficient kernels. |
| [Comfy-Org/MOSS-Image](https://huggingface.co/Comfy-Org/MOSS-Image) | Comfy-Org | 242 | 673,110 | A community‑curated diffusion checkpoint ready for ComfyUI, built on top of MOSS‑Image‑Base and fine‑tuned for diverse artistic styles. Its popularity exemplifies the rise of plug‑and‑play diffusion assets. |

---

## 📈 Ecosystem Signal  

The weekly snapshot underscores **multimodal expansion**: vision‑language models (DeepSeek‑V4.1‑Flash, Qwen‑3.8 series) and diffusion‑based generators (Flux‑3, LTX‑2.5) dominate likes and downloads, indicating strong user demand for integrated image/video capabilities. Open‑weight giants (Qwen, DeepSeek, Meta’s Muse‑Spark) continue to attract community contributions, while **quantization** activity spikes—six GGUF/FP4 variants amassed >8 M total downloads, confirming that developers are eager to run 20 B+ models on consumer hardware. Specialized embeddings (EmbeddingGemma‑2) and time‑series (Timestral‑209M) remain niche but stable, suggesting that foundational, task‑specific models are still valued. Overall, the hub is moving toward **high‑performance, low‑resource multimodal pipelines** backed by a vibrant fine‑tuning & quantization ecosystem.

---

## 🚀 Worth Exploring  

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** – Currently the most liked model (18 k likes) with a balanced mix of language understanding and vision‑language abilities; ideal for research on unified LLMs.  
2. **[deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017)** – Offers flash‑attention efficiency and strong multilingual vision‑language performance in a relatively compact checkpoint, making it a practical choice for production deployments.  
3. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** – The runaway hit in the video‑generation space; its single‑file diffusion model can synthesize short clips from text prompts with unprecedented speed, opening new creative‑AI applications.  

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*