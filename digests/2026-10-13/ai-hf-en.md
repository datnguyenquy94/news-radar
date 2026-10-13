# Hugging Face Trending Models Digest 2026-10-13

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-10-13 06:32 UTC

---

**Hugging Face Trending Models Digest – 2026‑10‑13**

---

### 📌 Today’s Highlights
The Qwen family is dominating the charts, with **Qwen3.8‑27B** (17 590 likes) and a wave of GGUF‑quantised variants surging past the 4 000‑like mark.  Lightricks’ **LTX‑2.5** (7 509 likes) demonstrates the rapid rise of high‑quality image‑to‑video diffusion, while community‑driven quantised releases such as **abenzerps/Qwen‑Image‑2.1‑Uncensored‑Quantized** and **prism‑ml/Ternary‑Bonsai‑2‑27B‑gguf** illustrate growing appetite for low‑bit, on‑device inference.  Embedding models (e.g., **google/embeddinggemma‑2**) and multimodal OCR (e.g., **baidu/Unlimited‑OCR**) also see strong engagement, highlighting broader interest in fast retrieval and vision‑language pipelines.

---

## 🧠 Language Models  

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [jialinyyzz/humanizer](https://huggingface.co/jialinyyzz/humanizer) | jialinyyzz | 1,354 | 46,070 | A 4‑bit Gemma‑4‑unified LLM tuned for more natural, “human‑like” output. Its compact size and strong instruction following have made it a favourite for local chatbots. |
| [ConwayResearch/Underdog‑Saluki‑27B‑1.0](https://huggingface.co/ConwayResearch/Underdog-Saluki-27B-1.0) | ConwayResearch | 381 | 242,329 | 27 B Llama‑style model quantised to 2‑bit with tool‑calling support. The extreme compression draws interest for edge‑AI assistants. |
| [convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 5,539 | 45,062 | A calibrated text‑classification model that excels at decision‑support tasks. Its “system‑one” architecture is praised for low latency in production pipelines. |
| [Aleph‑Alpha/Kolibri‑1](https://huggingface.co/Aleph-Alpha/Kolibri-1) | Aleph‑Alpha | 917 | 14,018 | A mixture‑of‑experts LLM that balances reasoning depth with fast inference. The community highlights its strong performance on logical benchmarks. |
| [autotrust/JEV‑35B](https://huggingface.co/autotrust/JEV-35B) | autotrust | 252 | 6,262 | 35 B MoE model fine‑tuned for robust text‑classification across domains. Its open‑weight release encourages adaptation in niche enterprise settings. |

---

## 🎨 Multimodal & Generation  

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen‑Image‑2.1‑Turbo](https://huggingface.co/Qwen/Qwen-Image-2.1-Turbo) | Qwen | 657 | 6,787 | Fast diffusion model for text‑to‑image generation, offering near‑real‑time rendering. Users praise its quality‑speed trade‑off for prototyping. |
| [abenzerps/Qwen‑Image‑2.1‑Uncensored‑Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-Quantized) | abenzerps | 4,124 | 2,188,658 | GGUF‑quantised version of Qwen‑Image‑2.1 with uncensored safety filters removed, enabling unrestricted creative output. Its massive download count signals strong demand for open‑ended generation. |
| [Cloudflare/clef](https://huggingface.co/Cloudflare/clef) | Cloudflare | 2,104 | 15,064 | An image‑text‑to‑text model that extracts structured information from pictures, used for visual QA. Its integration with Cloudflare’s edge services drives adoption. |
| [Lightricks/LTX‑2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 7,509 | 1,719,766 | Single‑file diffusion model that converts a single image into high‑fps video, pioneering affordable video generation. It’s gaining traction in content‑creation studios. |
| [Qwen3.8‑27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 17,590 | 6,895,303 | A 27 B multimodal LLM for image‑text understanding and conversational tasks. Its “conversational” tag and massive popularity reflect the shift toward unified vision‑language agents. |
| [LiquidAI/d1‑3B](https://huggingface.co/LiquidAI/d1-3B) | LiquidAI | 356 | 11,866 | Small (3 B) image‑text model designed for low‑resource devices, offering decent zero‑shot captioning. Its lightweight nature is attracting mobile developers. |
| [AtomicChat/Qwen‑Image‑2.1‑Turbo‑Uncensored‑GGUF](https://huggingface.co/AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF) | AtomicChat | 378 | 161,715 | GGUF quantisation of the Turbo model, removing content filters for unrestricted generation. Users note the ease of deployment on consumer GPUs. |
| [canberkkkkkk/ema‑lightning](https://huggingface.co/canberkkkkkk/ema-lightning) | canberkkkkkk | 395 | 20,310 | Turkish text‑to‑speech model delivering natural prosody with low latency. It’s filling a niche for high‑quality regional TTS on‑device. |
| [Cloudflare/clef‑flash](https://huggingface.co/Cloudflare/clef-flash) | Cloudflare | 791 | 23,285 | A faster “flash” variant of CLEF, optimized for sub‑second visual QA on edge nodes. Its performance uplift is highlighted in recent benchmarks. |
| [baidu/Unlimited‑OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 4,538 | 1,205,646 | Open‑weight OCR model that supports unlimited languages and scripts. Its high download volume stems from broad applicability in document digitisation. |
| [openbmb/MiniCPM‑V‑4.7‑35B‑A3B](https://huggingface.co/openbmb/MiniCPM-V-4.7-35B-A3B) | openbmb | 200 | 166 | 35 B vision‑language model focused on high‑resolution image understanding. Early adopters tout its precision on visual reasoning benchmarks. |
| [Qwen‑Image‑2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 3,268 | 142,375 | Baseline diffusion model for image generation and editing, widely used as a research baseline. Its “safeten” filters are configurable, making it flexible for varied use‑cases. |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 4,177 | 2,054,071 | Mask‑generation model that extends the Segment‑Anything framework to video, enabling real‑time object tracking. It’s praised for its speed and accuracy on consumer hardware. |
| [deepseek‑ai/DeepSeek‑V4.1‑Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek‑ai | 4,419 | 1,294,550 | A vision‑language model that excels at both generation and understanding, with “Flash” optimisations for low‑memory inference. Its balanced performance is driving cross‑modal research. |
| [Qwen/Qwen3.8‑Flash‑Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 6,153 | 1,934,542 | Next‑generation multimodal LLM with mixed‑precision flash attention, delivering faster response on large inputs. Its conversational tag shows strong usage in chat‑based assistants. |
| [nerkyor/...‑Coder390‑EfficientThink‑…](https://huggingface.co/nerkyor/Qwen3.8-27B-Coder390-EfficientThink-Opus5.5-GPT6Astra-Grok4.7-DSV4Pro-K3-SFT-RLOO-MTP-DFlash2) | nerkyor | 288 | 75,302 | Highly‑engineered fine‑tune of Qwen‑3.8‑27B targeting code generation and chain‑of‑thought reasoning. Its “efficient‑thinking” tricks are highlighted in community blogs. |

---

## 🔧 Specialized Models  

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [google/embeddinggemma‑2](https://huggingface.co/google/embeddinggemma-2) | google | 1,976 | 115,763 | Embedding‑centric Gemma‑2 model for dense vector extraction across text and multimodal inputs. Its open‑weight release is being integrated into large‑scale retrieval systems. |
| [unsloth/embeddinggemma‑2‑GGUF](https://huggingface.co/unsloth/embeddinggemma-2-GGUF) | unsloth | 285 | 71,914 | GGUF‑quantised version of the same embedding model, enabling fast on‑device similarity search. The community values the drastic reduction in memory footprint. |
| [Cactus‑Compute/whistle](https://huggingface.co/Cactus-Compute/whistle) | Cactus‑Compute | 368 | 18,643 | On‑device automatic speech recognition model optimized for low‑power microcontrollers. It’s attracting IoT developers needing offline transcription. |

---

## 📦 Fine‑tunes & Quantizations  

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Venastine-Research/Xing4.0‑29B‑A4B‑GGUF](https://huggingface.co/Venastine-Research/Xing4.0-29B-A4B-GGUF) | Venastine-Research | 706 | 52,788 | 29 B LLM quantised to 4‑bit GGUF, positioned as a “cost‑effective” alternative to proprietary APIs. Early benchmarks claim near‑full‑precision perplexity. |
| [ISTA‑DASLab/Qwen3.8‑Flash‑Next‑GSQ‑RCO‑GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF) | ISTA‑DASLab | 836 | 4,413,142 | GGUF variant of Qwen‑3.8‑Flash‑Next with GSQ (global static quant) and RCO (runtime‑controlled optimisation). Its download surge shows demand for high‑throughput multimodal inference. |
| [DavidAU/...‑NEO‑CODER‑MAX‑MTP‑GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 1,700 | 2,025,498 | A heavily fine‑tuned, uncensored GGUF of Qwen‑3.8‑27B focused on code‑generation and creative writing. Its “heretic” moniker reflects a community‑driven push for fewer content restrictions. |
| [orcarouter/Qwen3.8‑Flash‑Next‑Uncensored‑GGUF](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF) | orcarouter | 822 | 629,886 | Uncensored GGUF build of Qwen‑3.8‑Flash‑Next, targeting developers who need unrestricted multimodal chat. The model’s popularity highlights the growing “open‑filter” niche. |
| [prism‑ml/Ternary‑Bonsai‑2‑27B‑gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism‑ml | 2,664 | 4,615,462 | 27 B LLM quantised to 2‑bit ternary, achieving dramatic size reduction while keeping strong generation quality. It’s a flagship example of extreme quantisation attracting research interest. |

---

### 🌐 Ecosystem Signal
The **Qwen family** is the clear engine of growth, with multiple variants (standard, flash, uncensored, GGUF) spanning pure LLM, vision‑language, and text‑to‑image tasks.  Community‑driven quantisation—particularly **GGUF** and **ternary** formats—is accelerating, evidenced by several sub‑4‑bit releases that collectively exceed 10 million downloads.  Open‑weight models continue to dominate, but we see a parallel rise in **restricted‑filter / uncensored** forks, indicating a demand for unrestricted generative capabilities.  Meanwhile, **multimodal generation** (image‑to‑video, OCR, audio synthesis) is expanding beyond research labs into production‑ready pipelines, with edge‑focused models (e.g., EMA‑lightning, whistle) showcasing the push toward on‑device AI.  The trend points to a **convergence**: large multimodal backbones are being sliced into lightweight, specialized formats for diverse hardware, while community fine‑tunes add niche capabilities such as tool‑calling or code synthesis.

### 🚀 Worth Exploring
1. **abenzerps/Qwen‑Image‑2.1‑Uncensored‑Quantized** – Its GGUF quantisation and uncensored pipeline make high‑quality image generation accessible on consumer GPUs without safety‑filter latency.  
2. **prism‑ml/Ternary‑Bonsai‑2‑27B‑gguf** – The 2‑bit ternary representation pushes the limits of model compression while retaining strong text‑generation performance, ideal for research on extreme quantisation.  
3. **Lightricks/LTX‑2.5** – The single‑file image‑to‑video diffusion model sets a new baseline for affordable video creation, opening up creative workflows that previously required multi‑stage pipelines.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*