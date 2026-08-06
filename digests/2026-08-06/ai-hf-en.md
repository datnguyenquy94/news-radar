# Hugging Face Trending Models Digest 2026-08-06

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-06 03:20 UTC

---

# Hugging Face Trending Models Digest — 2026-08-06

---

## 📌 Today's Highlights

The MiniMax-H3 video generation model dominates attention with 2,522 likes and rapid community adoption across ComfyUI and GGUF ports. DeepSeek-V4-Flash family continues its momentum with both base and GGUF variants accumulating nearly 3.3M combined downloads. Chinese labs (Moonshot, Z.ai, Baidu, DeepSeek) occupy four of the top six spots by likes, signaling sustained open-weight leadership from the region. Multimodal convergence accelerates — Kimi-K3, Mage-VL, and Qwen3-VL variants blur the line between language and vision models. Community fine-tunes of Qwen3.6 MoE architectures (35B-A3B) proliferate in GGUF format, reflecting strong demand for locally runnable, uncensored multimodal models.

---

## 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 2,032 | 2,737,621 | Flagship open-weight LLM from DeepSeek with 2.7M downloads; excels at conversational and general text-generation tasks. |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 2,510 | 433,284 | July 2026 refresh of DeepSeek-V4-Flash; rapid adoption (433K downloads in weeks) indicates strong community trust. |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,851 | 2,234,662 | Z.ai's MoE-based GLM series reaches 5.2 with 4.8K likes; strong conversational and reasoning capabilities. |
| [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 288 | 47,393 | Compact 2.6B Liquid Foundation Model; targets efficient text-generation with novel architecture. |
| [deepgrove/maple-preview](https://huggingface.co/deepgrove/maple-preview) | deepgrove | 163 | 0 | Mixture-of-Experts causal LM preview; early-stage release exploring MoE scaling. |
| [inclusionAI/Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash) | inclusionAI | 158 | 25 | Hybrid architecture (Bailing) flash model; focuses on fast conversational inference. |
| [EschaLabs/Qwen3.6-35B-A3B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2) | EschaLabs | 210 | 2,987 | Fine-tuned Qwen3.6 MoE (35B total, 3B active); community-driven instruction tuning. |
| [LGAI-EXAONE/K-EXAONE-2.0-750B-A37B](https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B) | LGAI-EXAONE | 130 | 325 | Massive 750B MoE (37B active) from LG AI; Korean-centric open-weight frontier model. |

---

## 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 2,522 | 10,841 | Leading image-text-to-video diffusion model; 2.5K likes reflect hot demand for open video generation. |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,131 | 1,125,935 | Top-trending multimodal LLM (10K likes, 1.1M downloads); unified image-text understanding and generation. |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,909 | 2,703,366 | Specialized OCR multimodal model; 2.7M downloads show massive real-world document processing adoption. |
| [microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL) | microsoft | 276 | 435,784 | Microsoft's vision-language model; 435K downloads indicate strong enterprise/research uptake. |
| [thinkingmachines/Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small) | thinkingmachines | 309 | 15,500 | Compact multimodal conversational model; targets edge-friendly image-text-to-text tasks. |
| [Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 275 | 11,276 | Lightweight 0.6B TTS model (ArkTTS); enables local speech synthesis on consumer hardware. |
| [lodestones/Kroma](https://huggingface.co/lodestones/Kroma) | lodestones | 192 | 0 | LoRA for KREA text-to-image; ComfyUI-native, focuses on aesthetic style transfer. |
| [ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot) | ethanfel | 291 | 0 | Quantized Qwen3-VL 32B with INT8 + ConvRot optimization; ComfyUI-ready multimodal. |
| [nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 126 | 80 | End-to-end voice chat model (11B); builds on Nemotron research for real-time spoken dialogue. |
| [owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2) | owensong | 417 | 2,072 | Tiny TTS for CPU/edge deployment; emphasizes local-first speech synthesis. |

---

## 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 497 | 15,381 | Qwen3.5-MoE based coding specialist; targets agentic development workflows. |
| [mistralai/Shieldstral-1.0-3B](https://huggingface.co/mistralai/Shieldstral-1.0-3B) | mistralai | 132 | 166 | Compact safety classifier (3B) from Mistral; designed for content moderation pipelines. |
| [XYZAILab/XYZ-Aquila-mini](https://huggingface.co/XYZAILab/XYZ-Aquila-mini) | XYZAILab | 417 | 1,317 | Qwen3.5-MoE variant with agentic search capabilities; mini footprint for tool use. |
| [XYZAILab/XYZ-Aquila-pro](https://huggingface.co/XYZAILab/XYZ-Aquila-pro) | XYZAILab | 366 | 1,388 | Pro version of Aquila with enhanced agentic search; same MoE backbone. |

---

## 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,594 | 1,633,405 | Heavily fused uncensored Qwen3.6 27B GGUF; 1.6M downloads show massive local-LLM demand. |
| [unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 502 | 111,678 | Official Unsloth GGUF quantization of DeepSeek-V4-Flash-0731; optimized for llama.cpp. |
| [LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF) | LuffyTheFox | 390 | 308,857 | Uncensored Hermes-style fine-tune of Qwen3.6 MoE (35B/3B active) in GGUF. |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,319 | 1,930,898 | Aggressive uncensored fine-tune of Qwen3.6 MoE; 3.3K likes, 1.9M downloads — community favorite. |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 762 | 2 | ComfyUI-native single-file diffusion port of MiniMax-H3; enables node-based video workflows. |
| [realrebelai/MiniMax-H3_GGUFs](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs) | realrebelai | 140 | 40,010 | GGUF quantizations of MiniMax-H3 for ComfyUI; 40K downloads show video model quantization demand. |
| [unsloth/Kimi-K3-GGUF](https://huggingface.co/unsloth/Kimi-K3-GGUF) | unsloth | 316 | 170,055 | Unsloth GGUF of Kimi-K3 multimodal model; 170K downloads reflect local multimodal adoption. |
| [DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF) | DavidAU | 283 | 323,116 | IMATRIX-quantized 9B uncensored fine-tune; 323K downloads highlight sub-10B local model appetite. |

---

## 📊 Ecosystem Signal

The August 2026 landscape reveals three converging forces. **Chinese open-weight dominance** is unmistakable: DeepSeek, Moonshot, Z.ai, and Baidu collectively command the highest engagement metrics, with Kimi-K3 (10K likes) and GLM-5.2 (4.8K likes) setting new community benchmarks. **Multimodal unification** has moved from research to default — nearly every major release now ships with vision capabilities (Kimi-K3, Mage-VL, Qwen3-VL variants), and video generation (MiniMax-H3) is the new frontier. **Local-first quantization ecosystems** are maturing rapidly: Unsloth, DavidAU, LuffyTheFox, and HauhauCS form a de facto GGUF supply chain for Qwen3.6 MoE and DeepSeek models, with aggressive uncensored fine-tunes pulling millions of downloads. Proprietary models (OpenAI, Anthropic, Google) are absent from this trending list, suggesting the open ecosystem has achieved self-sustaining momentum for both frontier and compressed models. The proliferation of ComfyUI ports (MiniMax-H3, Kroma, Qwen3-VL) signals that **diffusion and LLM toolchains are merging** into unified multimodal workflows.

---

## 💎 Worth Exploring

1. **moonshotai/Kimi-K3** — The most-liked model (10.1K) with 1.1M downloads; a unified multimodal foundation that handles image-text-to-text natively. Its compressed-tensors format and feature-extraction pipeline make it uniquely deployable for both chat and vision tasks. Study its architecture for the next generation of efficient VLMs.

2. **MiniMaxAI/MiniMax-H3** — The clear leader in open video generation (2.5K likes). With active ComfyUI and GGUF ports already circulating, it represents the state of the art for community-driven image-text-to-video. Essential for anyone building video pipelines or studying diffusion-transformer hybrids.

3. **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive** — The highest-liked fine-tune (3.3K) with 1.9M downloads. It demonstrates how community RLHF/DPO on Qwen3.6 MoE can produce a highly capable, uncensored, locally runnable multimodal model. Ideal for researching alignment techniques and MoE fine-tuning dynamics.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*