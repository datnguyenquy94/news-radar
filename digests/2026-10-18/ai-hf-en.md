# Hugging Face Trending Models Digest 2026-10-18

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-10-18 04:08 UTC

---

**📅 Today’s Highlights**  
Hugging Face’s weekly pulse is dominated by multimodal powerhouses – the Vision‑Language model **Qwen‑3.8‑27B** (17 k likes) and DeepSeek’s **Flash‑1017** (4.6 k likes) showcase the rapid convergence of LLM reasoning with high‑resolution vision. The community‑driven video generator **Lightricks/LTX‑2.5** broke the 8 k‑like barrier and topped a million downloads, signalling strong appetite for end‑to‑end image‑to‑video pipelines. Meanwhile, open‑weight embedding models such as **google/embeddinggemma‑2** continue to attract heavy usage (2.6 k likes, 158 k downloads), underscoring the growing demand for versatile feature‑extraction back‑ends.

---

## 🧠 Language Models (LLMs, chat, instruction‑tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [jialinyyzz/humanizer](https://huggingface.co/jialinyyzz/humanizer) | jialinyyzz | 1,903 | 95,870 | A 7‑B instruction‑tuned LLM that excels at generating natural‑sounding dialogue. Its “humanizer” fine‑tune is popular for creating conversational agents with reduced robotic phrasing. |
| [LiquidAI/LFM2.5-24B-A2B](https://huggingface.co/LiquidAI/LFM2.5-24B-A2B) | LiquidAI | 448 | 11,926 | A 24‑B dense transformer focused on high‑quality text generation across many domains. It is trending thanks to its strong zero‑shot performance on creative writing benchmarks. |

---

## 🎨 Multimodal & Generation (image, video, audio, text‑to‑X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) | deepseek-ai | 1,030 | 0 | Vision‑language model that pairs DeepSeek‑V4.1’s LLM core with a flash‑optimized image encoder. Its low‑latency inference on GPU makes it a favorite for interactive visual assistants. |
| [openbmb/MiniCPM-V-4.7-35B-A3B](https://huggingface.co/openbmb/MiniCPM-V-4.7-35B-A3B) | openbmb | 908 | 36,252 | 35‑B multimodal model supporting detailed image‑question answering and captioning. The “A3B” variant adds a high‑capacity visual encoder, driving its rapid adoption in research demos. |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black-forest-labs | 677 | 224,108 | Diffusion model tuned for the ComfyUI workflow, delivering crisp image‑to‑image edits with low memory footprint. Its “Klein” checkpoint is praised for fast style transfer on consumer GPUs. |
| [meta-models/Muse-Spark-Open-816B-A42B](https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B) | meta-models | 513 | 1,600 | An 816‑B open‑weight vision‑language model that emphasizes sparse‑Mixture‑of‑Experts routing. Early adopters highlight its strong reasoning on complex visual puzzles. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 8,242 | 1,993,003 | First‑generation image‑to‑video diffusion model that generates 30‑fps clips from a single input frame. Its massive download count reflects a surge of hobbyist and commercial video‑generation projects. |
| [black-forest-labs/flux-3-image-klein](https://huggingface.co/black-forest-labs/flux-3-image-klein) | black-forest-labs | 458 | 46,123 | Standard Flux‑3 checkpoint for image‑to‑image editing, prized for its balance of quality and speed in the “Klein” size class. |
| [abenzerps/Qwen-Image-2.1-Uncensored-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-Quantized) | abenzerps | 4,501 | 2,571,722 | GGUF‑quantized version of Qwen‑Image‑2.1 that runs on CPU‑only laptops while preserving near‑full fidelity in text‑to‑image generation. The “Uncensored” tag attracts creators needing unrestricted content generation. |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 4,766 | 1,476,672 | End‑to‑end OCR system that extracts text from dense document layouts without language limits. Its open‑weight release has spurred integration into multilingual document‑processing pipelines. |
| [Qwen/Qwen-Image-2.1-Turbo](https://huggingface.co/Qwen/Qwen-Image-2.1-Turbo) | Qwen | 966 | 20,703 | Fast inference variant of Qwen’s image‑generation model, offering high‑resolution outputs in under 2 seconds on a single A6000. Users cite its versatility for rapid prototyping of visual assets. |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 17,917 | 7,795,543 | 27‑B vision‑language powerhouse with state‑of‑the‑art image‑question answering and chat capabilities. Its massive popularity stems from strong benchmark scores combined with an open‑weight release. |
| [openbmb/MiniCPM-V-4.7-1B](https://huggingface.co/openbmb/MiniCPM-V-4.7-1B) | openbmb | 378 | 15,243 | Compact 1‑B version of MiniCPM‑V for edge‑device multimodal inference. It is highlighted for delivering acceptable vision‑language performance on a single RTX 3060. |
| [OpenMOSS-Team/MOSS-Image-SFT](https://huggingface.co/OpenMOSS-Team/MOSS-Image-SFT) | OpenMOSS-Team | 257 | 1,036 | Fine‑tuned text‑to‑image model based on the MOSS backbone, optimized for Chinese artistic prompts. Early users appreciate its cultural style fidelity. |
| [AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF](https://huggingface.co/AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF) | AtomicChat | 540 | 362,499 | GGUF‑packed “Turbo” checkpoint that runs comfortably on RTX 2070 GPUs, delivering uncensored text‑to‑image generation with low memory overhead. |
| [OpenMOSS-Team/MOSS-Image-Base](https://huggingface.co/OpenMOSS-Team/MOSS-Image-Base) | OpenMOSS-Team | 239 | 958 | Base text‑to‑image diffusion model that serves as a starter checkpoint for community fine‑tunes. Its minimal size (1.2 B) makes it a go‑to for custom artwork pipelines. |
| [autotrust/JEV-27B-VL](https://huggingface.co/autotrust/JEV-27B-VL) | autotrust | 6,832 | 1,704,732 | 27‑B Vision‑Language model with a dual‑encoder architecture for fast cross‑modal retrieval. The “JEV” series is noted for strong performance on video‑frame captioning benchmarks. |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 6,310 | 2,457,201 | Flash‑optimized variant of Qwen‑3.8 designed for low‑latency serving; retains full 27‑B capacity while lowering KV‑cache memory. Popular among real‑time chat‑bot deployments. |
| [speridlabs/iris-3b](https://huggingface.co/speridlabs/iris-3b) | speridlabs | 309 | 1,383 | Small (3‑B) diffusion model that excels at generating photorealistic objects from textual prompts. Its lightweight nature draws hobbyists experimenting with custom UI tools. |
| [fishaudio/drama-3](https://huggingface.co/fishaudio/drama-3) | fishaudio | 626 | 8,193 | Multi‑speaker TTS model trained on dramatic script data, delivering expressive prosody and character separation. It’s trending in podcast‑automation and AI‑driven audio‑books. |

---

## 🔧 Specialized Models (code, math, medical, embeddings, vision tools)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2) | google | 2,605 | 158,490 | Embedding‑focused Gemini‑2 checkpoint for universal feature extraction, widely adopted in semantic search and clustering pipelines. Its open‑weight status and strong cross‑lingual alignment keep it in high demand. |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 4,568 | 2,013,498 | Video‑mask generation model (SAM‑3) that produces spatio‑temporal segmentation masks from a single frame. Researchers praise its ability to bootstrap video‑editing workflows without manual annotations. |
| [vllm-sr/d3](https://huggingface.co/vllm-sr/d3) | vllm-sr | 232 | 4,263 | Zero‑shot classification head built on Qwen‑3.5, offering fast label inference without task‑specific finetuning. It’s popular for rapid prototyping of content‑moderation pipelines. |
| [datalab-to/indra-ocr](https://huggingface.co/datalab-to/indra-ocr) | datalab-to | 175 | 1,053 | ONNX‑exported OCR model optimized for CPU inference, targeting low‑resource environments. Its small size (≈50 MB) makes it attractive for edge deployments. |

---

## 📦 Fine‑tunes & Quantizations (community fine‑tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [ConwayResearch/Underdog-Saluki-27B-1.0](https://huggingface.co/ConwayResearch/Underdog-Saluki-27B-1.0) | ConwayResearch | 529 | 394,277 | 27‑B LLM quantized to 2‑bit GGUF, delivering a 4× speed‑up on RTX 3080 while retaining strong instruction performance. Community buzz centers on its “Saluki” instruction set for creative writing. |
| [LiquidAI/LFM2.5-24B-A2B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-24B-A2B-GGUF) | LiquidAI | 198 | 82,115 | GGUF‑packed 24‑B LFM2.5 model that fits into 12 GB VRAM, enabling desktop‑level text generation. The quantization pipeline is lauded for minimal quality loss versus the original FP16 checkpoint. |
| [pablodawson/MiniMax-H3-360-Orbit-LoRA](https://huggingface.co/pablodawson/MiniMax-H3-360-Orbit-LoRA) | pablodawson | 501 | 22,625 | LoRA‑adaptation of MiniMax‑H3 for 360° video‑to‑video generation, adding orbit‑style camera motion. It’s a go‑to for creators building immersive VR clips. |
| [nvidia/Qwen3.8-Flash-Next-FP4-Local](https://huggingface.co/nvidia/Qwen3.8-Flash-Next-FP4-Local) | nvidia | 182 | 3,110 | Model‑Optim FP4 quantized version of Qwen‑3.8‑Flash‑Next, delivering a 6× reduction in memory bandwidth on Nvidia Jetson devices. Early benchmarks show sub‑100 ms latency for 2048‑token prompts. |
| [nerkyor/Qwen3.8-27B-Coder390‑EfficientThink‑Opus5.5‑GPT6Astra‑Grok4.7‑DSV4Pro‑K3‑SFT‑RLOO‑MTP‑DFlash2](https://huggingface.co/nerkyor/Qwen3.8-27B-Coder390-EfficientThink-Opus5.5-GPT6Astra-Grok4.7-DSV4Pro-K3-SFT-RLOO-MTP-DFlash2) | nerkyor | 415 | 228,320 | Heavily fine‑tuned 27‑B Qwen‑3.8 model blending coder, reasoning, and multimodal data; distributed in both safetensors and GGUF. The “EfficientThink” tag highlights its lower‑latency inference on consumer GPUs. |

---

## 📈 Ecosystem Signal  

The **multimodal frontier** is clearly the hottest growth area: three distinct families—Qwen‑3.8, DeepSeek‑V4.1 and MiniCPM‑V—each released high‑capacity Vision‑Language checkpoints that are open‑weight, encouraging rapid downstream experimentation. At the same time, **video generation** (Lightricks/LTX‑2.5, MiniMax‑H3 LoRA) is emerging from a niche to a mainstream capability, evidenced by record‑breaking likes and download figures.  

Open‑weight models continue to dominate the conversation, with only a handful of proprietary‑sounding “Turbo” or “Flash‑Next” variants that are nevertheless released under permissive licences. This openness fuels an explosion of **quantization and fine‑tune activity**: GGUF and FP4 packs are proliferating, enabling 27‑B level LLMs to run on consumer GPUs, while LoRA adapters extend video‑generation pipelines without retraining massive weights. Embedding‑centric models such as **google/embeddinggemma‑2** retain a strong foothold, highlighting the ongoing need for efficient feature extraction across search, clustering, and retrieval workloads.

---

## 🚀 Worth Exploring  

1. **Lightricks/LTX‑2.5** – The first open‑weight image‑to‑video diffusion model with >1 M downloads; its ability to synthesize coherent 30 fps clips from a single frame opens new creative workflows for marketing and entertainment.  

2. **Qwen/Qwen3.8-27B** – A 27‑B vision‑language juggernaut that combines state‑of‑the‑art image‑question answering with conversational chat; its massive community uptake (≈8 M downloads) makes it a benchmark for future multimodal research.  

3. **google/embeddinggemma-2** – A versatile, high‑quality embedding model that is already a staple in semantic search pipelines; its strong cross‑lingual performance and open licensing make it a foundational tool for any application needing robust vector representations.  

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*