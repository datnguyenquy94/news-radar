# Hugging Face Trending Models Digest 2026-10-23

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-10-23 04:24 UTC

---

**🤖 Hugging Face Trending Models Digest – 23 Oct 2026**

---

### 1. Today’s Highlights  
The multimodal **Qwen 3.8** family continues to dominate, with the 27 B “image‑text‑to‑text” model gathering 18 k likes and 7.7 M downloads. **DeepSeek V4.1‑Flash‑1017** shows the power of flash‑attention for vision‑language tasks, while **Lightricks LTX‑2.5** pushes diffusion‑based video generation to the mainstream, clocking 9 k likes and 2 M downloads. A surge of community‑driven quantizations (GGUF/FP8) and fine‑tuned diffusion checkpoints highlights a growing appetite for portable, high‑quality generative models.

---

### 2. Trending Models  

#### 🧠 Language Models (LLMs, chat, instruction‑tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [RecursiveSI/flint](https://huggingface.co/RecursiveSI/flint) | RecursiveSI | 562 | 420 | A 7 B transformer fine‑tuned for open‑ended dialogue. It’s trending because of its compact size and strong conversational benchmarks. |
| [jialinyyzz/humanizer](https://huggingface.co/jialinyyzz/humanizer) | jialinyyzz | 2,100 | 124,773 | A 7 B GGUF‑converted model that mimics human‑like response styles. Its ease of deployment on edge devices fuels its popularity. |
| [tencent/Hy-Memory-30B-A3B](https://huggingface.co/tencent/Hy-Memory-30B-A3B) | tencent | 290 | 2,966 | 30 B mixture‑of‑experts LLM optimized for long‑context memory. Community interest spikes after release of a 4‑bit AWQ version. |
| [XHToken/Spark-X2.6-4B](https://huggingface.co/XHToken/Spark-X2.6-4B) | XHToken | 267 | 482 | 4 B Chinese‑centric LLM with strong code‑generation abilities. Trending in the Mandarin‑language developer community. |
| [InternScience/Sage-A1.5](https://huggingface.co/InternScience/Sage-A1.5) | InternScience | 230 | 396 | A 1.5 B MoE model that excels at reasoning‑heavy prompts. Its low inference cost makes it a favorite for research notebooks. |
| [reflection/Beam-1.0-501B-A23B](https://huggingface.co/reflection/Beam-1.0-501B-A23B) | reflection | 231 | 3,984 | 501 B‑parameter MoE LLM released in a 4‑bit GGUF format. Notable for state‑of‑the‑art few‑shot reasoning despite its size. |
| [nvidia/NVIDIA-Nemotron-Labs-Dory1.0-4B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-Dory1.0-4B-BF16) | nvidia | 166 | 3,375 | 4 B BF16‑trained Nemotron model targeting scientific literature summarization. Gains traction after integration with NVIDIA NeMo. |
| [LiquidAI/LFM2.5-24B-A2B](https://huggingface.co/LiquidAI/LFM2.5-24B-A2B) | LiquidAI | 564 | 17,637 | 24 B MoE LLM focused on finance and legal text. Its domain‑specific tokenizer drives adoption in enterprise pipelines. |

#### 🎨 Multimodal & Generation (image, video, audio, text‑to‑X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) | deepseek-ai | 2,391 | 51,911 | Vision‑language model using flash‑attention to handle 32 k‑token contexts. Its “image‑to‑text” quality rivals larger competitors, sparking widespread testing. |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black-forest-labs | 1,315 | 512,524 | A ComfyUI‑ready diffusion checkpoint for high‑fidelity image‑to‑image edits. Users praise its speed and fine‑detail preservation. |
| [OpenMOSS-Team/MOSS-Image-SFT](https://huggingface.co/OpenMOSS-Team/MOSS-Image-SFT) | OpenMOSS-Team | 593 | 6,890 | Fine‑tuned stable‑diffusion model specialized for anime‑style generation. Its open licence encourages community remixing. |
| [OpenMOSS-Team/MOSS-Image-Base](https://huggingface.co/OpenMOSS-Team/MOSS-Image-Base) | OpenMOSS-Team | 495 | 5,013 | The base checkpoint behind the MOSS‑SFT line, offering a clean, license‑friendly diffusion backbone. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 8,919 | 2,054,990 | First‑generation diffusion model that directly converts images to 8‑frame videos. Its “text‑to‑video” samples have gone viral on social media. |
| [fishaudio/drama-3](https://huggingface.co/fishaudio/drama-3) | fishaudio | 922 | 16,305 | Multilingual, multi‑speaker TTS model delivering theatrical prosody. Trending thanks to its expressive “stage‑play” demo. |
| [Comfy-Org/MOSS-Image](https://huggingface.co/Comfy-Org/MOSS-Image) | Comfy-Org | 370 | 1,463,386 | A single‑file diffusion model pre‑packed for ComfyUI; used as the default backbone in many community pipelines. |
| [meta-models/Muse-Spark-Open-816B-A42B](https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B) | meta-models | 661 | 3,163 | 816 B vision‑language transformer supporting image‑captioning and VQA. Its open‑weight release is a rare “big‑model” contribution. |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 18,223 | 7,758,670 | 27 B multimodal LLM that processes images and text jointly. The sheer download count shows it’s becoming the de‑facto open‑source vision‑language model. |
| [black-forest-labs/flux-3-image-klein](https://huggingface.co/black-forest-labs/flux-3-image-klein) | black-forest-labs | 638 | 102,903 | Standard Flux‑3 checkpoint for image‑to‑image work. Its comparatively low VRAM footprint makes it popular on consumer GPUs. |
| [datalab-to/indra-ocr](https://huggingface.co/datalab-to/indra-ocr) | datalab-to | 372 | 3,823 | ONNX‑optimized OCR model that runs efficiently on CPUs. Community praise centers on its plug‑and‑play API for document pipelines. |
| [dealignai/DeepSeek-V4.1-Flash-1017-UNCENSORED-FP8](https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-1017-UNCENSORED-FP8) | dealignai | 268 | 3,808 | FP8‑quantized variant of DeepSeek‑V4.1, enabling sub‑2 GB GPU inference. The uncensored nature attracts researchers needing unrestricted data. |
| [nvidia/Qwen3.8-Flash-Next-FP4-Local](https://huggingface.co/nvidia/Qwen3.8-Flash-Next-FP4-Local) | nvidia | 317 | 10,519 | FP4‑quantized Qwen model tuned for local deployment; retains near‑full accuracy on image‑text tasks. Demonstrates NVIDIA’s push for on‑device multimodal AI. |
| [orcarouter/OrcaCyber-Nano-1.0](https://huggingface.co/orcarouter/OrcaCyber-Nano-1.0) | orcarouter | 193 | 21,727 | Tiny vision‑language model (≈300 M) focused on cybersecurity threat analysis from screenshots. Its niche use‑case fuels a growing cyber‑AI community. |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 6,416 | 2,706,809 | The “next‑gen” flash‑attention variant of Qwen 3.8, offering faster inference on long‑form multimodal prompts. Widely adopted in research notebooks. |
| [lodestones/Kromoss](https://huggingface.co/lodestones/Kromoss) | lodestones | 227 | 14,415 | Diffusion model fine‑tuned on manga‑style artwork. Its distinct aesthetic has made it a favorite for indie creators. |

#### 📦 Fine‑tunes & Quantizations (community checkpoints, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [abenzerps/Qwen-Image-2.1-Uncensored-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-Quantized) | abenzerps | 4,839 | 2,665,585 | GGUF‑quantized Qwen‑Image 2.1 (≈1.6 GB) for text‑to‑image generation. Its uncensored training data and low‑memory footprint drive massive community adoption. |
| [lodestones/MOSS-Image-SFT-8-steps-dmd](https://huggingface.co/lodestones/MOSS-Image-SFT-8-steps-dmd) | lodestones | 202 | 75,389 | A rapid 8‑step fine‑tune of MOSS‑Image for high‑speed anime generation. The lightweight checkpoint is popular for real‑time UI prototyping. |
| [unsloth/flint-GGUF](https://huggingface.co/unsloth/flint-GGUF) | unsloth | 156 | 7,401 | GGUF‑converted version of the Flint LLM, enabling 4‑bit inference on smartphones. Its ease of use in the Unsloth library spikes interest among hobbyists. |

#### 🔧 Specialized Models (embeddings, time‑series, segmentation, etc.)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2) | google | 2,848 | 185,259 | High‑throughput embedding model based on Gemma 2, optimized for massive retrieval pipelines. Its open licensing and speed made it a de‑facto baseline for vector search. |
| [mistralai/Timestral-209M](https://huggingface.co/mistralai/Timestral-209M) | mistralai | 291 | 6,194 | 209 M transformer specialized for time‑series forecasting, achieving SOTA on several open‑source datasets. Growing adoption in finance and IoT edge analytics. |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 4,934 | 1,864,206 | Video‑aware segmentation model extending the SAM family to 3‑D masks. Its robust performance on low‑resolution video streams fuels research in real‑time AR. |

---

### 3. Ecosystem Signal  

The **Qwen** family (3.8‑27B, Flash‑Next, and FP‑quantized variants) is clearly the current engine of growth: its open‑weight releases, flash‑attention optimizations, and aggressive quantization pipelines are attracting both enterprise and hobbyist users. **DeepSeek** follows a similar trajectory, especially with the flash‑attention V4.1 model that bridges high‑quality vision‑language interaction and a sub‑2 GB FP8 checkpoint.  

A notable shift is the **proliferation of community quantizations** (GGUF, FP4/FP8) that make 20‑30 B‑scale models runnable on consumer‑grade GPUs, a trend pioneered by the **Unsloth** and **Abenzerps** repos. Meanwhile, **diffusion fine‑tunes** for niche aesthetics (MOSS‑SFT, Kromoss) demonstrate a maturing ecosystem where base models are rapidly adapted to specific artistic domains.  

Open‑weight models dominate the top‑ranked list, indicating that the community still prefers transparent licensing for research and product integration. Proprietary players (NVIDIA, Meta, Facebook) are contributing optimized variants (FP4, video‑segmentation) but continue to release them under permissive licenses, blurring the line between “open” and “proprietary.” The overall picture is one of **massive multimodal expansion** coupled with **hardware‑friendly quantization**, setting the stage for increasingly portable AI applications.

---

### 4. Worth Exploring  

| Model | Reason to Try |
| :--- | :--- |
| **Qwen/Qwen3.8-27B** | Offers a full‑scale, open‑source vision‑language LLM with industry‑leading performance; ideal for research on multimodal reasoning and for building custom assistants that understand images. |
| **Lightricks/LTX-2.5** | First diffusion model that shines in high‑quality image‑to‑video generation; its public checkpoint allows experimentation with short video synthesis without needing massive compute. |
| **unsloth/flint‑GGUF** | Demonstrates how a 7 B conversational model can be compressed to 4‑bit GGUF and run on a laptop; perfect for developers wanting a fast, low‑resource chatbot for offline demos. |

These three models capture the most compelling directions of the current HF ecosystem: **large multimodal capability, generative video, and ultra‑compact LLM deployment**. Happy exploring!

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*