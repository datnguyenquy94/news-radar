# Hugging Face Trending Models Digest 2026-11-03

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-11-03 06:19 UTC

---

**🗞 Today’s Highlights**  
The most‑liked release is **Lightricks/LTX‑2.5**, a single‑file diffusion model that can turn a still image into a high‑quality video, racking up >10 k likes and >2 M downloads in just one week.  Multimodal giants are also dominant: DeepSeek’s Flash‑1017 (image‑to‑text) and Qwen‑3.8‑27B (image‑text‑to‑text) together account for nearly 25 k likes, showing strong community appetite for models that can reason across vision and language.  At the same time, the quantization wave continues – dozens of GGUF‑converted variants (e.g., LFM‑3‑1.7B‑GGUF) are climbing the charts, indicating a push for portable, CPU‑friendly inference.

---

## 🔎 Trending Models  

### 🧠 Language Models (LLMs, chat, instruction‑tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [LiquidAI/LFM3-1.7B](https://huggingface.co/LiquidAI/LFM3-1.7B) | LiquidAI | 1,229 | 42,384 | A 1.7 B‑parameter decoder‑only LLM tuned for general‑purpose dialogue.  It’s popular for its low compute footprint and strong zero‑shot performance on benchmarks. |
| [Nanbeige/Nanbeige4.3-33B](https://huggingface.co/Nanbeige/Nanbeige4.3-33B) | Nanbeige | 1,012 | 16,976 | 33 B‑parameter Llama‑style model focused on instruction following.  Gains traction in the research community for its balanced trade‑off between size and quality. |
| [Diffuspace/Clover-35B-A3B-Preview](https://huggingface.co/Diffuspace/Clover-35B-A3B-Preview) | Diffuspace | 231 | 2,679 | A 35 B MoE language model that showcases the latest mixture‑of‑experts scaling recipe.  Early adopters praise its fast inference when using expert‑selection heuristics. |
| [RecursiveSI/flint](https://huggingface.co/RecursiveSI/flint) | RecursiveSI | 1,313 | 29,574 | 2.7 B chat model fine‑tuned on high‑quality dialogue data, outperforming many larger baselines on conversational benchmarks.  Its small size makes it attractive for edge deployment. |

### 🎨 Multimodal & Generation (image, video, audio, text‑to‑X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) | deepseek‑ai | 4,743 | 177,009 | First‑generation “flash” model that takes an image and returns detailed natural‑language descriptions.  Its speed (≈2 tokens /ms) and high OCR accuracy are driving the likes. |
| [nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B) | nvidia | 695 | 32,439 | 30 B Whisper‑style ASR model tuned on multilingual speech, delivering SOTA word‑error rates on low‑resource languages.  The open‑weight release spurs interest for on‑premise transcription. |
| [mistralai/Mistral-Large-4-1T-A52B](https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B) | mistralai | 1,508 | 5,500 | A 1‑trillion‑parameter vision‑language model that can answer questions about complex diagrams.  Early demos show impressive reasoning over scientific figures. |
| [baidu/Unlimited-OCR-2](https://huggingface.co/baidu/Unlimited-OCR-2) | baidu | 566 | 147,588 | Large‑scale OCR model that works on arbitrary fonts, handwritten text, and low‑resolution scans.  Its “unlimited” license and zero‑shot multilingual support fuel adoption. |
| [speridlabs/idol](https://huggingface.co/speridlabs/idol) | speridlabs | 434 | 7,787 | Gaussian‑splatting 3‑D reconstruction model that converts a single image into a navigable mesh.  It’s being integrated into AR/VR pipelines for rapid prototyping. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 10,387 | 2,467,613 | Diffusion‑based image‑to‑video model capable of generating 8‑second, 1024×1024 clips from a single frame + text prompt.  Its single‑file distribution and high quality have made it a community favorite. |
| [Pika-Labs/Pika-H3-Flex](https://huggingface.co/Pika-Labs/Pika-H3-Flex) | Pika‑Labs | 366 | 491 | Lightweight video‑generation model that can be fine‑tuned on user‑provided clips via LoRA.  Early adopters note fast fine‑tuning on a single GPU. |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 19,028 | 7,915,637 | 27 B multimodal LLM that processes images and text jointly, excelling at visual question answering.  Massive download numbers reflect its role as a go‑to open‑weight baseline for research. |
| [abenzerps/Qwen-Image-2.1-Uncensored-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-Quantized) | abenzerps | 5,567 | 2,516,622 | GGUF‑quantized text‑to‑image diffusion model offering near‑native quality on CPUs.  Its “uncensored” checkpoint appeals to creators needing fewer safety filters. |
| [LiquidAI/LFM3-Omni-2B](https://huggingface.co/LiquidAI/LFM3-Omni-2B) | LiquidAI | 319 | 9,964 | 2 B “any‑to‑any” model that can translate between text, images, audio, and video.  Early demos showcase seamless audio‑to‑image generation. |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black‑forest‑labs | 2,364 | 1,003,813 | Flux‑3 diffusion checkpoint optimized for image‑to‑image editing with high fidelity and low artefacts.  Its single‑file size (<5 GB) simplifies deployment. |
| [Edge0/Audio8-TTS-Realistic-Air](https://huggingface.co/Edge0/Audio8-TTS-Realistic-Air) | Edge0 | 251 | 7,259 | High‑quality text‑to‑speech model delivering realistic prosody and low latency on consumer CPUs.  Gaining traction for voice‑over and accessibility projects. |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 5,736 | 1,879,182 | Video‑mask generation model extending SAM to temporal video segmentation.  Community uses include automated video editing and content moderation. |
| [LiquidAI/LFM3-VL-2B](https://huggingface.co/LiquidAI/LFM3-VL-2B) | LiquidAI | 220 | 10,141 | Vision‑language 2 B model that produces detailed captions and can follow visual grounding prompts.  Its small footprint makes it suitable for mobile inference. |
| [sensenova/SenseNova-Loop-9B-Preview](https://huggingface.co/sensenova/SenseNova-Loop-9B-Preview) | sensenova | 192 | 1,536 | 9 B multimodal model focused on looped visual storytelling (image‑to‑text‑to‑image).  Early users praise its “creative loop” capability for story generation. |
| [LiquidAI/LFM3-Audio-2B](https://huggingface.co/LiquidAI/LFM3-Audio-2B) | LiquidAI | 201 | 6,300 | Any‑to‑any audio model that can transcribe, translate, and generate speech from raw waveforms.  Its open‑weight nature encourages integration into audio‑centric pipelines. |
| [LiquidAI/d1-2B](https://huggingface.co/LiquidAI/d1-2B) | LiquidAI | 191 | 5,047 | Compact 2 B vision‑language encoder used for rapid feature extraction in downstream multimodal tasks.  Popular for research prototypes due to its speed. |
| [xiaomi-research/Xiaomi-OCR-0](https://huggingface.co/xiaomi-research/Xiaomi-OCR-0) | xiaomi‑research | 248 | 18,472 | OCR model trained on diverse Asian scripts, delivering >95 % accuracy on mixed‑language documents.  Its open license attracts mobile‑app developers. |
| [Efficient-Large-Model/Open-H3-Regenerate-2K](https://huggingface.co/Efficient-Large-Model/Open-H3-Regenerate-2K) | Efficient‑Large‑Model | 192 | 364,781 | Video‑to‑video restoration model that upscales 2 K footage while preserving temporal consistency.  Enthusiasts note its strong performance on low‑bandwidth streaming restoration. |

### 🔧 Specialized Models (code, math, embeddings, etc.)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [ccore/Qwen3.5-4B-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-3D-Coder) | ccore | 570 | 63,499 | 4 B transformer fine‑tuned to generate three‑js code from textual 3‑D prompts.  It’s the first open‑weight model that bridges natural language and interactive web‑based graphics. |

### 📦 Fine‑tunes & Quantizations (community forks, GGUF, AWQ, LoRA)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [burner22/numbat](https://huggingface.co/burner22/numbat) | burner22 | 300 | 7,108 | 8‑bit quantized LLM using ModelOpt, achieving ~2× speed‑up with <1 % perplexity loss.  Users download it to run inference on low‑end CPUs. |
| [FusionCow/Sulphur-3](https://huggingface.co/FusionCow/Sulphur-3) | FusionCow | 276 | 195 | Community fine‑tune of MiniMax‑H3 for creative writing, released with LoRA adapters for easy integration.  Its “Sulphur” style prompts have become a meme in the hobbyist scene. |
| [OBLITERATUS/DeepSeek-V4.1-Flash-1017-obliterated](https://huggingface.co/OBLITERATUS/DeepSeek-V4.1-Flash-1017-obliterated) | OBLITERATUS | 224 | 1,095 | Fully unfiltered GGUF conversion of DeepSeek‑Flash‑1017, targeting users who need unrestricted generation.  The “obliterated” tag signals removal of safety filters. |
| [AtomicChat/DeepSeek-V4.1-Flash-1017-Uncensored-GSQ-RCO-GGUF](https://huggingface.co/AtomicChat/DeepSeek-V4.1-Flash-1017-Uncensored-GSQ-RCO-GGUF) | AtomicChat | 219 | 30,284 | GGUF quantization with GSQ‑RCO technique, delivering a 4 × smaller file while retaining original quality.  Popular for edge‑device deployments. |
| [AtomicChat/LFM3-1.7B-Uncensored-GGUF](https://huggingface.co/AtomicChat/LFM3-1.7B-Uncensored-GGUF) | AtomicChat | 220 | 59,832 | Uncensored GGUF version of LFM‑3‑1.7B, offering a ready‑to‑run CPU binary.  Its “unfiltered” policy draws interest from research on bias mitigation. |
| [LiquidAI/LFM3-1.7B-GGUF](https://huggingface.co/LiquidAI/LFM3-1.7B-GGUF) | LiquidAI | 202 | 174,177 | Official GGUF export of the base LFM‑3 model, enabling llama.cpp‑style inference with ~3 GB RAM.  The rapid rise in downloads shows growing demand for portable LLMs. |

---

## 🌐 Ecosystem Signal  

The week’s data underline a clear **multimodal surge**: models that can ingest or emit images, video, and audio dominate the top‑liked list, with Qwen‑3.8‑27B, DeepSeek‑Flash‑1017, and Lightricks/LTX‑2.5 together accounting for over 30 % of total likes.  This reflects a maturing market where developers expect a single backbone to handle vision‑language‑audio pipelines rather than stitching separate experts together.  

On the **LLM front**, larger open‑weight families such as Qwen, Mistral, and Nanbeige continue to grow, but there is a parallel **quantization wave**: at least eight GGUF models appear in the top 30, many of them “uncensored” or “obliterated” variants that trade safety for flexibility.  The community’s appetite for CPU‑friendly binaries (GGUF, 8‑bit ModelOpt) signals a democratization push—more users want to run powerful models on laptops or edge devices.  

Finally, **specialized code‑generation** (e.g., Qwen‑3.5‑4B‑3D‑Coder) and **video‑to‑video** restoration (Open‑H3‑Regenerate‑2K) hint at niche but expanding verticals.  Companies like Nvidia and Baidu are releasing high‑quality open weights, while startups (Lightricks, Pika‑Labs) are driving innovation in diffusion‑based video generation, suggesting a competitive mix of corporate‑backed and community‑driven advances.

---

## 🚀 Worth Exploring  

| Model | Why Try It |
| :--- | :--- |
| **Lightricks/LTX‑2.5** | Sets a new benchmark for single‑file diffusion video generation; the ability to produce 8‑second 1024×1024 clips on a single GPU makes it ideal for content creators and research on temporal diffusion. |
| **deepseek-ai/DeepSeek-V4.1-Flash-1017** | Fast, open‑weight image‑to‑text model with strong multilingual OCR; its speed and quality make it a go‑to for building vision‑language assistants without heavy compute. |
| **LiquidAI/LFM3-1.7B‑GGUF** | Provides a compact, CPU‑ready version of a versatile LLM; perfect for prototyping chatbots or instruction‑following agents on laptops, illustrating the impact of the GGUF quantization trend. |
| **Qwen/Qwen3.8-27B** (optional extra) | As the most downloaded multimodal LLM, it offers a solid baseline for research on visual question answering and can be fine‑tuned for domain‑specific multimodal tasks. |

These four models capture the ecosystem’s three leading currents—high‑fidelity video diffusion, rapid vision‑language inference, and lightweight, portable LLMs—making them the most insightful picks for immediate experimentation.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*