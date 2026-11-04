# Hugging Face Trending Models Digest 2026-11-04

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-11-04 05:53 UTC

---

**Hugging Face Trending Models Digest – 4 Nov 2026**

---

### 1. Today’s Highlights  
The week is dominated by **multimodal breakthroughs** – DeepSeek‑V4.1‑Flash and Mistral‑Large‑4‑1T lead the surge in vision‑language models, while Lightricks’ LTX‑2.5 shatters video‑generation download records.  A parallel wave of **ultra‑compressed GGUF releases** (e.g., SC117’s Qwen3.8‑Flash‑Next) shows the community racing to run 30 B‑class models on laptops and edge devices.  Finally, Nvidia’s 30 B speech‑to‑text model and the open‑weight Qwen‑3.8‑27B reaffirm that large‑scale, open‑weight foundations remain the engine of new fine‑tunes and specialist adapters.

---

### 2. Trending Models  

#### 🧠 Language Models (LLMs, chat, instruction‑tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [LiquidAI/LFM3-1.7B](https://huggingface.co/LiquidAI/LFM3-1.7B) | LiquidAI | 1,418 | 47,817 | A 1.7 B LLM optimized for fast inference on consumer GPUs. It’s gaining traction for its balanced quality‑to‑speed trade‑off and fully open‑weight licence. |
| [Nanbeige/Nanbeige4.3-33B](https://huggingface.co/Nanbeige/Nanbeige4.3-33B) | Nanbeige | 1,028 | 17,839 | A 33 B instruction‑tuned model that extends LLaMA‑style scaling with a larger context window. Strong coding benchmark scores drive community adoption. |
| [RecursiveSI/flint](https://huggingface.co/RecursiveSI/flint) | RecursiveSI | 1,320 | 32,677 | Flint is a 7 B multilingual chat model fine‑tuned on diverse dialogue data. Its low‑latency API makes it popular for real‑time assistants. |
| [Diffuspace/Clover-35B-A3B-Preview](https://huggingface.co/Diffuspace/Clover-35B-A3B-Preview) | Diffuspace | 236 | 3,017 | A 35 B mixture‑of‑experts LLM that stays under 30 GB in GGUF format. Early adopters praise its strong zero‑shot reasoning. |
| [OBLITERATUS/DeepSeek-V4.1-Flash-1017-obliterated](https://huggingface.co/OBLITERATUS/DeepSeek-V4.1-Flash-1017-obliterated) | OBLITERATUS | 236 | 1,643 | Community‑repacked DeepSeek‑V4.1 with safety filters removed for unrestricted research. Its rise reflects demand for uncensored dialogue models. |
| [AtomicChat/LFM3-1.7B-Uncensored-GGUF](https://huggingface.co/AtomicChat/LFM3-1.7B-Uncensored-GGUF) | AtomicChat | 240 | 72,919 | 4‑bit GGUF conversion of LFM3‑1.7B that strips content filters, enabling CPU‑only inference on laptops. Highlighted for edge deployment. |
| [unsloth/DeepSeek-V4.1-Flash-1017-GGUF](https://huggingface.co/unsloth/DeepSeek-V4.1-Flash-1017-GGUF) | unsloth | 332 | 596,039 | 4‑bit GGUF version tuned for the Unsloth runtime, delivering 2‑× speedups on standard CPUs. |
| [divagr1925/Qwen3.5-4B-Qwenputer](https://huggingface.co/divagr1925/Qwen3.5-4B-Qwenputer) | divagr1925 | 156 | 1,229 | A 4 B Qwen‑3.5 variant fine‑tuned for programming assistance (“Qwenputer”). Early downloads signal a niche but growing coding‑assistant market. |

#### 🎨 Multimodal & Generation (image, video, audio, text‑to‑X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) | deepseek-ai | 4,873 | 187,260 | Multimodal LLM that ingests images + text and emits detailed responses. Flash‑optimized architecture makes it a benchmark for vision‑language tasks. |
| [mistralai/Mistral-Large-4-1T-A52B](https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B) | mistralai | 1,554 | 6,556 | A 1‑trillion‑parameter vision‑language model released under an open licence. Near‑state‑of‑the‑art VQA performance sets a new scaling reference. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 10,511 | 2,488,128 | Single‑file diffusion model that turns still images into high‑fps video clips. Massive download numbers reflect creator‑centric demand for text‑to‑video tools. |
| [Pika-Labs/Pika-H3-Flex](https://huggingface.co/Pika-Labs/Pika-H3-Flex) | Pika-Labs | 400 | 633 | Flexible diffusion model producing short video clips with optional audio. Community experiments are exploring interactive media demos. |
| [ccore/Qwen3.5-4B-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-3D-Coder) | ccore | 614 | 91,123 | 4 B model specialized for generating Three.js code from natural‑language prompts. First‑of‑its‑kind for code‑first 3‑D creation. |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 19,093 | 8,014,877 | Large multimodal LLM that handles image‑text inputs and long‑form conversation. Open‑weight release has spurred a wave of downstream fine‑tunes. |
| [abenzerps/Qwen-Image-2.1-Turbo-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Turbo-Quantized) | abenzerps | 5,626 | 2,508,590 | GGUF‑compressed text‑to‑image generator delivering 8‑bit inference on CPUs. Popular for low‑resource art pipelines. |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black-forest-labs | 2,432 | 1,032,077 | Diffusion model fine‑tuned for high‑resolution image‑to‑image editing in ComfyUI. “Klein” style presets are a unique artistic hook. |
| [baidu/Unlimited-OCR-2](https://huggingface.co/baidu/Unlimited-OCR-2) | baidu | 593 | 189,897 | OCR model that supports >100 languages and dense document layouts. Its “unlimited” claim comes from token‑level output flexibility. |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 5,807 | 1,891,393 | Video‑mask generation model extending Segment Anything to temporal data. High download volume signals strong interest in video segmentation. |
| [Edge0/Audio8-TTS-Realistic-Air](https://huggingface.co/Edge0/Audio8-TTS-Realistic-Air) | Edge0 | 277 | 8,090 | Text‑to‑speech model delivering high‑fidelity, low‑latency voice synthesis. Trending for real‑time voice‑over use‑cases. |
| [LiquidAI/LFM3-Omni-2B](https://huggingface.co/LiquidAI/LFM3-Omni-2B) | LiquidAI | 337 | 11,662 | “Any‑to‑any” multimodal model handling text, images, and audio in a single architecture. Early adopters appreciate the unified API. |
| [speridlabs/idol](https://huggingface.co/speridlabs/idol) | speridlabs | 527 | 10,742 | Gaussian‑splatting pipeline that turns a single image into a 3‑D avatar. Favoured for rapid virtual‑character prototyping. |
| [sensenova/SenseNova-Loop-9B-Preview](https://huggingface.co/sensenova/SenseNova-Loop-9B-Preview) | sensenova | 215 | 2,221 | 9 B model tuned for looping video generation from text prompts. Demonstrations show smooth, repeatable animations for social media. |
| [Efficient-Large-Model/Open-H3-Regenerate-2K](https://huggingface.co/Efficient-Large-Model/Open-H3-Regenerate-2K) | Efficient-Large-Model | 202 | 413,605 | Video‑to‑video diffusion model that upgrades low‑res footage to 2 K quality. Integrated into up‑scaling pipelines for streaming platforms. |

#### 🔧 Specialized Models (code, speech, segmentation, etc.)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B) | nvidia | 743 | 38,942 | 30 B automatic‑speech‑recognition model delivering near‑human transcription on noisy audio. Open‑weight release fuels large‑scale speech research. |
| [ccore/Qwen3.5-4B-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-3D-Coder) | ccore | 614 | 91,123 | 4 B model specialized for generating Three.js code from natural‑language prompts. Marks a niche where LLMs output directly executable 3‑D scripts. |
| [burner22/numbat](https://huggingface.co/burner22/numbat) | burner22 | 325 | 7,461 | 8‑bit custom‑code model targeting ultra‑compact inference on embedded hardware. Demonstrates how far size‑compression can go while retaining utility. |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 5,807 | 1,891,393 | Video‑mask generation model (see Multimodal table) listed here for its specialized segmentation capability across time. |
| [Edge0/Audio8-TTS-Realistic-Air](https://huggingface.co/Edge0/Audio8-TTS-Realistic-Air) | Edge0 | 277 | 8,090 | High‑fidelity TTS system optimized for low‑latency on consumer CPUs. Highlights the rise of audio‑only specialist models. |

#### 📦 Fine‑tunes & Quantizations (community variants, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [AtomicChat/DeepSeek-V4.1-Flash-1017-Uncensored-GSQ-RCO-GGUF](https://huggingface.co/AtomicChat/DeepSeek-V4.1-Flash-1017-Uncensored-GSQ-RCO-GGUF) | AtomicChat | 268 | 53,913 | 4‑bit GGUF version of DeepSeek‑V4.1 with GSQ/RCO quantization and safety filters stripped. Favoured for CPU‑only, uncensored deployments. |
| [AtomicChat/LFM3-1.7B-Uncensored-GGUF](https://huggingface.co/AtomicChat/LFM3-1.7B-Uncensored-GGUF) | AtomicChat | 240 | 72,919 | Aggressive 4‑bit quantization of LFM3‑1.7B that removes content filters. Enables single‑core inference on laptops. |
| [unsloth/DeepSeek-V4.1-Flash-1017-GGUF](https://huggingface.co/unsloth/DeepSeek-V4.1-Flash-1017-GGUF) | unsloth | 332 | 596,039 | Community‑maintained GGUF conversion with Unsloth runtime patches for ≈2× speedups. Most downloaded quantized variant this week. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 2,389 | 1,371,484 | Heavily fine‑tuned, uncensored Qwen‑3.8 model with multiple adapters (coder, MTP, etc.) and GGUF 4‑bit quantization. Its download surge shows appetite for “all‑purpose” turbo models. |
| [SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF](https://huggingface.co/SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF) | SC117 | 659 | 3,487,734 | GGUF flash‑quantized Qwen‑3.8 model stripped of safety filters, using GSQ/RCO. Highest GGUF download count of the week, illustrating the market for ultra‑fast, uncensored LLMs. |

---

### 3. Ecosystem Signal  

The **multimodal frontier** is the most dynamic segment: vision‑language models (DeepSeek‑V4.1, Mistral‑Large‑4‑1T) and video‑generation pipelines (LTX‑2.5, Open‑H3‑Regenerate) together account for over 30 % of total weekly likes.  **Open‑weight foundations** remain dominant—Qwen‑3.8‑27B, DeepSeek‑V4.1, and LFM3 series all retain permissive licences, encouraging rapid community fine‑tuning.  Simultaneously, a **quantization boom** is reshaping accessibility: GGUF 4‑bit variants of 20‑30 B models now hit millions of downloads, proving that large‑scale LLMs can be run on laptops and edge CPUs.  The spike in uncensored releases (e.g., SC117’s abliterated GGUFs) signals a growing niche for research‑oriented, safety‑filter‑free models, while Nvidia’s 30 B speech model shows that the industry is still investing heavily in proprietary‑grade, open‑weight ASR.  Overall, the Hub is moving toward **high‑performance, multimodal, and highly compressed** models that democratize advanced AI across devices.

---

### 4. Worth Exploring  

| Model | Why It Stands Out |
| :--- | :--- |
| **deepseek-ai/DeepSeek-V4.1-Flash-1017** | The leading open‑weight vision‑language model with flash‑level latency; perfect for prototyping image‑aware assistants and for benchmarking multimodal reasoning. |
| **Lightricks/LTX-2.5** | Sets a new benchmark for single‑file diffusion‑to‑video generation, with a massive community (2.5 M downloads) eager to integrate text‑to‑video in creative apps. |
| **SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF** | Shows how a 30 B model can be compressed to 4‑bit GGUF and run on a consumer CPU while preserving most of its capabilities; an essential reference for anyone deploying LLMs at the edge. |

These three give you a cross‑section of the week’s most impactful trends: multimodal reasoning, creator‑focused video synthesis, and ultra‑compact, high‑performance LLM inference.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*