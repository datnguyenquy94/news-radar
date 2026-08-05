# Hugging Face Trending Models Digest 2026-08-05

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-05 03:18 UTC

---

# Hugging Face Trending Models Digest — 2026-08-05

---

## 1. Today's Highlights

The Hugging Face Hub is dominated by next-generation mixture-of-experts (MoE) architectures, with **DeepSeek-V4-Flash**, **Kimi-K3**, and **GLM-5.2** leading the charge in both raw performance and community adoption. Video generation takes a major leap forward as **MiniMax-H3** emerges as the first widely distributed image-text-to-video model with native ComfyUI integration. Chinese labs (DeepSeek, Moonshot, Z.ai, Baidu) occupy four of the top five spots by likes, signaling a continued shift in open-weight leadership toward Asia. Quantization and fine-tune ecosystems—especially GGUF variants from **unsloth** and community creators like **DavidAU** and **HauhauCS**—are accelerating deployment on consumer hardware. Multimodal convergence is accelerating: OCR, TTS, and vision-language models are all trending simultaneously.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 2,322 | 433,284 | Updated Flash variant of DeepSeek's flagship MoE model, delivering top-tier reasoning with reduced latency. Trending due to its 0731 refresh and massive 433K weekly downloads. |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,017 | 1,125,935 | Moonshot's latest multimodal MoE model with compressed-tensors optimization. Leads the chart with 10K likes and 1.1M downloads, signaling strong community trust. |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,821 | 2,234,662 | Z.ai's 5.2 release uses a novel MoE-DSA architecture for efficient scaling. Highest downloads (2.2M) among pure LLMs this week, reflecting production adoption. |
| [deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 2,011 | 2,737,621 | Base Flash model preceding the 0731 update; still pulls 2.7M downloads weekly, showing sustained demand for the V4 series. |
| [poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 920 | 82,912 | Code-specialized model from Poolside with strong agentic capabilities. Gaining traction for software engineering workflows. |
| [EschaLabs/Qwen3.6-35B-A3B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2) | EschaLabs | 195 | 2,987 | Community MoE fine-tune of Qwen3.6 with 35B total / 3B active params. Early adopter interest for efficient local inference. |
| [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 164 | 47,393 | Liquid Foundation Model 2.5 using novel non-transformer architecture. Notable for sub-3B parameter efficiency. |
| [XYZAILab/XYZ-Aquila-mini](https://huggingface.co/XYZAILab/XYZ-Aquila-mini) | XYZAILab | 404 | 1,317 | Compact Qwen3.5-MoE variant optimized for edge deployment. Early stage but growing niche interest. |
| [XYZAILab/XYZ-Aquila-pro](https://huggingface.co/XYZAILab/XYZ-Aquila-pro) | XYZAILab | 358 | 1,388 | Pro version with agentic-search capabilities built on Qwen3.5-MoE. Targets autonomous agent workflows. |
| [inclusionAI/Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash) | inclusionAI | 98 | 25 | Bailong hybrid architecture model from Ant Group's inclusionAI. Very early release with custom inference code. |
| [LGAI-EXAONE/K-EXAONE-2.0-750B-A37B](https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B) | LGAI-EXAONE | 117 | 325 | Massive 750B MoE (37B active) from LG AI Research. Limited downloads reflect extreme hardware requirements. |
| [Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 665 | 37,256 | Efficient 3B dense model from Nanbeige series. Strong like-to-download ratio indicates high evaluation interest. |

---

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 2,052 | 0 | Breakthrough image-text-to-video model with native ComfyUI support. Zero downloads listed but 2K+ likes signal massive anticipation. |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,882 | 2,703,366 | Baidu's universal OCR model handling arbitrary languages/layouts. 2.7M downloads confirm production deployment at scale. |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 619 | 2 | ComfyUI-optimized repack of MiniMax-H3 with finetune support. Critical for video generation workflow adoption. |
| [microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL) | microsoft | 257 | 435,784 | Microsoft's vision-language model with strong multimodal reasoning. 435K downloads show enterprise evaluation momentum. |
| [thinkingmachines/Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small) | thinkingmachines | 286 | 15,500 | Compact vision-language model optimized for conversational use. Early community traction for edge VLM deployment. |
| [Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 249 | 11,276 | Efficient 0.6B parameter TTS model (ArkTTS architecture). Notable for CPU-friendly real-time speech synthesis. |
| [owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2) | owensong | 410 | 2,072 | Ultra-lightweight TTS targeting edge/CPU inference. 410 likes reflect strong interest in local voice AI. |
| [lodestones/Kroma](https://huggingface.co/lodestones/Kroma) | lodestones | 176 | 0 | LoRA for Krea2 text-to-image model with ComfyUI integration. Community-driven stylistic fine-tune. |
| [realrebelai/MiniMax-H3_GGUFs](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs) | realrebelai | 105 | 40,010 | GGUF quantization of MiniMax-H3 for ComfyUI. 40K downloads prove immediate demand for quantized video gen. |
| [ethanfel/Qwen3-VL-32B-Ultra-Heretic-MiniMax-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-MiniMax-H3-ComfyUI-INT8-ConvRot) | ethanfel | 190 | 0 | Complex multi-model fusion (Qwen3-VL + MiniMax-H3) quantized to INT8 for ComfyUI. Experimental but innovative. |

---

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 475 | 15,381 | Code-specialized Qwen3.5-MoE variant with agentic capabilities. 475 likes show strong developer community interest. |

---

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,516 | 1,633,405 | Heavily merged/uncensored Qwen3.6 27B GGUF with MTP. 1.6M downloads lead all fine-tunes this week. |
| [unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 474 | 111,678 | Official unsloth GGUF quantization of DeepSeek-V4-Flash-0731. Rapid adoption for local inference. |
| [unsloth/Kimi-K3-GGUF](https://huggingface.co/unsloth/Kimi-K3-GGUF) | unsloth | 304 | 170,055 | GGUF quant of Kimi-K3 enabling consumer GPU deployment. 170K downloads in early release phase. |
| [LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF) | LuffyTheFox | 364 | 308,857 | Uncensored MoE fine-tune (35B/3B) with Hermes-style alignment. 308K downloads show MoE quant demand. |
| [DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF) | DavidAU | 266 | 323,116 | 9B dense uncensored fine-tune with IMATRIX quantization. 323K downloads for efficient local chat. |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,296 | 1,930,898 | Aggressive uncensored MoE fine-tune with vision. Highest likes (3.3K) and 1.9M downloads among fine-tunes. |
| [empero-ai/Qwythos-27B-v1](https://huggingface.co/empero-ai/Qwythos-27B-v1) | empero-ai | 134 | 2,243 | Qwen3.5-based 27B vision-language fine-tune. Early stage but notable for multimodal specialization. |

---

## 3. Ecosystem Signal

The MoE architecture has decisively won the scaling race: **DeepSeek-V4**, **Kimi-K3**, **GLM-5.2**, and multiple Qwen3.5/3.6-MoE variants dominate both official releases and community fine-tunes. Chinese labs now lead open-weight innovation—DeepSeek, Moonshot, Z.ai, and Baidu collectively outpace Western labs in likes and downloads. Proprietary models (OpenAI, Anthropic, Google) are absent from the trending list, confirming the community's pivot to locally deployable weights. Quantization is no longer an afterthought: **unsloth**'s same-day GGUF releases for flagship models and community creators pushing IMATRIX/INT8/ConvRot techniques show a mature toolchain. Fine-tune culture has evolved from LoRA-only to complex model merges (Fable, Heretic, Genesis, Hermes) with multi-objective optimization (uncensored + MTP + vision). Video generation has crossed the usability threshold with MiniMax-H3's ComfyUI-native distribution, while OCR (Baidu) and TTS (Audio8, Inflect) prove multimodal specialization is production-ready. The 750B EXAONE model remains a curiosity—extreme scale without deployment path—whereas 3B–35B active-param MoEs hit the sweet spot.

---

## 4. Worth Exploring

1. **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — The highest-liked model (10K+) with 1.1M downloads; its compressed-tensors MoE architecture delivers flagship performance at manageable VRAM. Essential benchmark for multimodal MoE capabilities.

2. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — First open-weight image-text-to-video model with native ComfyUI support. Represents the new frontier for local video generation; pair with **realrebelai/MiniMax-H3_GGUFs** for quantized deployment.

3. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — 2.7M weekly downloads prove production readiness. Universal language/layout coverage makes it a drop-in replacement for cloud OCR APIs—critical for document AI pipelines.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*