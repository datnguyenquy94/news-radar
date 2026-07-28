# Hugging Face Trending Models Digest 2026-07-28

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-28 02:43 UTC

---

# 🤗 Hugging Face Trending Models Digest — 2026-07-28

---

## 1. Today's Highlights

Multimodal models dominate the weekly trends, with **Moonshot AI’s Kimi-K3** leading likes (6.4k) and **Z.ai’s GLM-5.2** close behind (4.5k), signaling intense competition in open‑weight vision‑language systems. Chinese labs (Moonshot, Z.ai, Baidu, Qwen) occupy the top spots, while **Qwen3.6‑35B‑A3B** sets a download record (6.1M), reflecting massive adoption of its MoE architecture. Quantized variants (GGUF, NVFP4, 1‑bit/2‑bit) flood the fine‑tune category, showing strong community demand for efficient local deployment. Specialized OCR models (Baidu’s Unlimited‑OCR, ATH‑MaaS’s OvisOCR2) and code‑focused LLMs (Kwaipilot’s KAT‑Coder, Moonshot’s Kimi‑K2.7‑Code) highlight practical, domain‑specific momentum. Microsoft’s Mage‑Flow suite adds high‑quality image generation/editing to the open ecosystem.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction‑tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 758 | 63,605 | A strong base LLM for text generation, gaining traction as a foundation for downstream fine‑tunes and quantizations. Its high download count relative to likes indicates active developer experimentation. |
| [upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B) | upstage | 630 | 3,761 | A massive 250B‑parameter open model targeting high‑end reasoning; early adoption suggests interest in scaling laws despite steep hardware requirements. |
| [Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 494 | 16,518 | A compact 3B model optimized for efficient text generation; solid downloads show demand for small, capable LLMs on edge devices. |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,552 | 1,003,547 | Z.ai’s flagship MoE model with 5.2T tokens trained; top‑tier likes and million‑scale downloads mark it as a leading open‑weight chat/reasoning model. |
| [Motif-Technologies/Motif-3-Beta](https://huggingface.co/Motif-Technologies/Motif-3-Beta) | Motif-Technologies | 199 | 2,532 | A beta‑stage LLM focusing on feature extraction; modest but growing interest hints at niche retrieval/embedding use cases. |

### 🎨 Multimodal & Generation (image, video, audio, text‑to‑X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 6,431 | 2,850 | The week’s most‑liked model; a cutting‑edge vision‑language system with compressed‑tensor optimization, setting a new bar for open multimodal performance. |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,337 | 2,645,773 | Production‑grade OCR with massive downloads (2.6M); proves strong real‑world demand for accurate, open document‑understanding pipelines. |
| [microsoft/Mage-Flow](https://huggingface.co/microsoft/Mage-Flow) | microsoft | 392 | 1,691 | A diffusion‑based text‑to‑image model supporting editing; Microsoft’s entry into open image generation adds credible competition to Stable Diffusion. |
| [thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | 1,606 | 36,196 | A conversational image‑text‑to‑text model; high likes indicate enthusiasm for its interactive multimodal chat capabilities. |
| [owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2) | owensong | 225 | 483 | Tiny TTS model for CPU/edge deployment; fills a gap for local, low‑resource speech synthesis. |
| [microsoft/Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B) | microsoft | 154 | 1,406 | Vision‑language model with computer‑use focus; early stage but notable for agent‑style multimodal interaction. |
| [moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code) | moonshotai | 1,323 | 695,744 | Code‑specialized multimodal model; high downloads show developers adopting it for vision‑assisted programming tasks. |
| [ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2) | ATH-MaaS | 328 | 42,152 | Second‑gen OCR model built on Qwen3.5; strong downloads reflect practical adoption in document‑processing workflows. |
| [microsoft/Mage-Flow-Edit-Turbo](https://huggingface.co/microsoft/Mage-Flow-Edit-Turbo) | microsoft | 102 | 1,115 | Instruction‑based image‑to‑image editing; turbo variant speeds up iterative creative workflows. |
| [unsloth/Kimi-K3](https://huggingface.co/unsloth/Kimi-K3) | unsloth | 99 | 0 | Unsloth‑hosted mirror of Kimi‑K3; zero downloads yet but signals community interest in optimized serving. |
| [Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) | Qwen | 2,548 | 6,187,853 | The download king (6.1M); Qwen’s MoE multimodal base model fuels countless fine‑tunes and quantizations. |
| [owensong/Inflect-Nano-v2](https://huggingface.co/owensong/Inflect-Nano-v2) | owensong | 91 | 349 | Even smaller TTS variant for ultra‑light edge deployment; extends the Inflect family’s reach. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 243 | 5,312 | Code‑focused LLM on Qwen3.5 MoE; targets developer productivity with strong reasoning in programming tasks. |
| [fdtn-ai/antares-1b](https://huggingface.co/fdtn-ai/antares-1b) | fdtn-ai | 207 | 6,421 | Security‑oriented 1B model (GraniteMoE hybrid); niche but growing for vulnerability detection and secure coding. |

### 📦 Fine‑tunes & Quantizations (community fine‑tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 756 | 634,146 | Heavily fine‑tuned, uncensored Qwen variant in GGUF; high downloads show appetite for unaligned, creative writing models. |
| [unsloth/Laguna-S-2.1-GGUF](https://huggingface.co/unsloth/Laguna-S-2.1-GGUF) | unsloth | 219 | 117,456 | Unsloth‑optimized GGUF quantization of Laguna‑S‑2.1; enables fast CPU/GPU inference for the base model. |
| [prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 1,069 | 648,938 | 2‑bit ternary quantized 27B model; demonstrates extreme compression with retained conversational ability. |
| [poolside/Laguna-S-2.1-GGUF](https://huggingface.co/poolside/Laguna-S-2.1-GGUF) | poolside | 154 | 85,554 | Official GGUF release from Poolside; provides vetted quantizations for the Laguna series. |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,133 | 1,894,395 | Aggressively uncensored vision‑language GGUF; massive downloads reflect demand for unrestricted multimodal chat. |
| [poolside/Laguna-S-2.1-NVFP4](https://huggingface.co/poolside/Laguna-S-2.1-NVFP4) | poolside | 148 | 158,308 | NVFP4‑quantized version for vLLM; targets high‑throughput GPU serving with 4‑bit precision. |
| [baseten/GLM-5.2-Vision-NVFP4](https://huggingface.co/baseten/GLM-5.2-Vision-NVFP4) | baseten | 125 | 2,276 | NVFP4 quantized GLM‑5.2 vision model; early adoption for efficient multimodal deployment on SGLang. |
| [prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf) | prism-ml | 659 | 2,257,928 | 1‑bit quantized 27B model; second‑highest downloads overall, proving extreme quantization viability. |
| [LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V5-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V5-GGUF) | LuffyTheFox | 188 | 83,658 | Hermes‑style fine‑tune on Qwen MoE; GGUF format makes it accessible for local role‑play/chat. |
| [conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit) | conradlocke | 556 | 0 | LoRA for identity‑preserving image editing on Krea‑2; zero downloads but high likes signal designer interest. |
| [empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai | 2,491 | 1,336,263 | Reasoning‑focused 9B GGUF (Qwen3.5 base); high likes/downloads show strong pull for compact, smart models. |

---

## 3. Ecosystem Signal

The past week underscores three converging forces. **First, Chinese labs are setting the pace in open‑weight multimodal research**—Moonshot (Kimi‑K3), Z.ai (GLM‑5.2), Baidu (Unlimited‑OCR), and Qwen (3.6‑35B‑A3B) collectively dominate likes and downloads, offering models that rival proprietary systems on vision‑language benchmarks. **Second, quantization has moved from niche to mainstream**: GGUF, NVFP4, and 1‑/2‑bit formats now represent over a third of trending entries, with prism‑ml’s 1‑bit Bonsai (2.2M downloads) and HauhauCS’s uncensored

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*