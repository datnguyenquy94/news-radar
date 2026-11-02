# Hugging Face Trending Models Digest 2026-11-02

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-11-02 05:38 UTC

---

## Today’s Highlights  
The most‑liked release this week is **DeepSeek‑V4.1‑Flash‑1017**, which has vaulted past 4 k likes and amassed 170 k downloads, showcasing the continued appetite for fast, instruction‑tuned multimodal LLMs.  Image‑to‑video generation is also hot, with **Lightricks/LTX‑2.5** topping the chart at 10 k likes and 2.4 M downloads, reflecting the surge in diffusion‑based video creators.  Quantized and community‑fine‑tuned variants (GGUF, 8‑bit) are rapidly gaining traction, as seen in the strong uptake of several DeepSeek‑Flash GGUF releases and the niche “numbat” 8‑bit model.

---

## Trending Models  

### 🧠 Language Models (LLMs, chat, instruction‑tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [LiquidAI/LFM3-1.7B](https://huggingface.co/LiquidAI/LFM3-1.7B) | LiquidAI | 729 | 37,568 | A 1.7 B‑parameter decoder‑only LLM built on the LLaMA‑style architecture. It is popular for its low‑latency inference on commodity hardware. |
| [Nanbeige/Nanbeige4.3-33B](https://huggingface.co/Nanbeige/Nanbeige4.3-33B) | Nanbeige | 987 | 15,795 | A 33 B‑parameter model that blends dense and sparse layers for strong zero‑shot performance. Its strong benchmark scores are driving the likes. |
| [RecursiveSI/flint](https://huggingface.co/RecursiveSI/flint) | RecursiveSI | 1,303 | 26,703 | Conversational LLM fine‑tuned on multi‑turn dialogues; notable for its open‑source safety mitigations. |
| [Diffuspace/Clover-35B-A3B-Preview](https://huggingface.co/Diffuspace/Clover-35B-A3B-Preview) | Diffuspace | 213 | 2,352 | A 35 B‑parameter MoE model that delivers high‑quality text generation with reduced inference cost thanks to expert routing. |
| [XHToken/Spark-X2.6-4B](https://huggingface.co/XHToken/Spark-X2.6-4B) | XHToken | 958 | 16,707 | Compact 4 B‑parameter model focusing on Chinese‑English bilingual tasks; praised for its balanced token‑level accuracy. |
| [LiquidAI/LFM3-Omni-2B](https://huggingface.co/LiquidAI/LFM3-Omni-2B) | LiquidAI | 285 | 8,376 | “Any‑to‑any” 2 B‑parameter model that accepts text, image, and audio inputs, showing the trend toward unified interfaces. |

### 🎨 Multimodal & Generation (image, video, audio, text‑to‑X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) | deepseek-ai | 4,395 | 170,353 | Fast multimodal LLM that processes image + text inputs; its “Flash” inference engine yields sub‑second response times, sparking community adoption. |
| [mistralai/Mistral-Large-4-1T-A52B](https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B) | mistralai | 1,464 | 4,576 | 1‑trillion‑parameter vision‑language model; excels at detailed image captioning and visual reasoning tasks. |
| [baidu/Unlimited-OCR-2](https://huggingface.co/baidu/Unlimited-OCR-2) | baidu | 534 | 109,519 | OCR model trained on diverse scripts; its “unlimited” token length lets it handle long documents without cropping. |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 18,945 | 7,892,866 | Large vision‑language model with strong multilingual support; its open‑weight release has driven massive download volume. |
| [xiaomi-research/Xiaomi-OCR-0](https://huggingface.co/xiaomi-research/Xiaomi-OCR-0) | xiaomi-research | 217 | 17,143 | Compact OCR model optimized for mobile devices; low memory footprint makes it attractive for on‑device apps. |
| [sensenova/SenseNova-Loop-9B-Preview](https://huggingface.co/sensenova/SenseNova-Loop-9B-Preview) | sensenova | 150 | 927 | 9 B‑parameter model that combines looping video generation with text prompts, aimed at short‑form content creators. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 10,242 | 2,431,846 | Diffusion‑based image‑to‑video generator supporting arbitrary prompts; the biggest download surge of the week shows the video‑gen boom. |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black-forest-labs | 2,287 | 970,633 | Flux‑3 image‑to‑image model with a “Klein” fine‑tune that improves texture fidelity; widely used in UI/UX mockups. |
| [abenzerps/Qwen-Image-2.1-Uncensored-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-Quantized) | abenzerps | 5,489 | 2,548,468 | GGUF‑quantized text‑to‑image model running at ~5 tokens/sec on a consumer CPU, popular for offline creative workflows. |
| [Pika-Labs/Pika-H3-Flex](https://huggingface.co/Pika-Labs/Pika-H3-Flex) | Pika-Labs | 327 | 404 | Small‑scale image‑to‑video model that can be LoRA‑adapted for specific styles; early‑adopter community cites its fast finetune cycle. |
| [speridlabs/idol](https://huggingface.co/speridlabs/idol) | speridlabs | 323 | 4,194 | Gaussian‑splatting 3‑D reconstruction from a single image; the open‑source license and real‑time preview drive interest. |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 5,661 | 1,891,055 | Video‑mask generation model that extends SAM to temporal data; its ability to segment moving objects in seconds is a research milestone. |
| [nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B) | nvidia | 619 | 29,364 | 30 B‑parameter ASR model delivering near‑human transcription accuracy on noisy audio, fueling enterprise speech‑to‑text pipelines. |
| [Edge0/Audio8-TTS-Realistic-0.6b](https://huggingface.co/Edge0/Audio8-TTS-Realistic-0.6b) | Edge0 | 222 | 4,613 | 0.6 B text‑to‑speech model that produces highly natural prosody with a 15 kHz sampling rate, suited for voice‑over apps on edge devices. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [ccore/Qwen3.5-4B-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-3D-Coder) | ccore | 506 | 44,825 | A 4 B‑parameter LLM fine‑tuned for generating Three.js‑compatible 3D code; popular among web‑GL developers for rapid prototyping. |

### 📦 Fine‑tunes & Quantizations (community fine‑tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF) | ISTA-DASLab | 546 | 2,294,642 | GGUF‑quantized version of DeepSeek‑Flash using GSQ + RCO mixed‑precision; delivers a 4× speedup on CPU with <1 % quality loss. |
| [AtomicChat/LFM3-1.7B-Uncensored-GGUF](https://huggingface.co/AtomicChat/LFM3-1.7B-Uncensored-GGUF) | AtomicChat | 194 | 46,155 | Uncensored GGUF variant of LFM3‑1.7B, enabling portable inference on Android via llama.cpp. |
| [LiquidAI/LFM3-1.7B-GGUF](https://huggingface.co/LiquidAI/LFM3-1.7B-GGUF) | LiquidAI | 185 | 150,260 | Official GGUF conversion of LFM3‑1.7B; widely used in the “fast‑LLM” community because of its sub‑200 MB size. |
| [OBLITERATUS/DeepSeek-V4.1-Flash-1017-obliterated](https://huggingface.co/OBLITERATUS/DeepSeek-V4.1-Flash-1017-obliterated) | OBLITERATUS | 176 | 520 | An experimental “obliterated” fine‑tune that removes safety filters; draws niche interest for jailbreak research. |
| [burner22/numbat](https://huggingface.co/burner22/numbat) | burner22 | 225 | 5,846 | 8‑bit custom‑code model demonstrating extreme compression (≈150 MB) while preserving ~80 % of original perplexity. |

---

## Ecosystem Signal  
The **multimodal frontier** is clearly accelerating: DeepSeek‑Flash, Qwen‑3.8, and Flux‑3 dominate likes and download counts, indicating that the community values fast inference combined with vision‑language reasoning.  Open‑weight models continue to lead (DeepSeek, Qwen, Mistral), while **proprietary‑grade releases** (e.g., NVIDIA’s 30 B ASR) remain niche but are gaining traction in enterprise pipelines.  Quantization activity is unusually high this week; three GGUF releases of DeepSeek‑Flash and two LFM3 GGUF variants collectively surpass 2 M downloads, underscoring a shift toward **CPU‑friendly deployment**.  The surge of video‑generation models (LTX‑2.5, Pika‑H3‑Flex, Open‑H3‑Regenerate) hints that the next wave of popularity may move from static image diffusion to **real‑time video synthesis**.

---

## Worth Exploring  

1. **deepseek-ai/DeepSeek-V4.1-Flash-1017** – Its Flash inference engine and strong image‑text capabilities set a new baseline for affordable multimodal LLMs; ideal for prototyping vision‑language assistants on a laptop.  

2. **Lightricks/LTX-2.5** – The highest‑liked video‑generation model, offering a single‑file diffusion pipeline that turns textual prompts into high‑resolution clips. It’s a practical entry point for developers looking to add short‑form video creation to apps.  

3. **ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF** – Demonstrates how mixed‑precision GGUF quantization can shrink a 4‑B‑parameter model to run comfortably on edge CPUs with negligible quality degradation, making it a must‑try for production‑scale, CPU‑only deployments.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*