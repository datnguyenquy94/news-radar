# Hugging Face Trending Models Digest 2026-08-11

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-11 02:11 UTC

---

# Hugging Face Trending Models Digest — 2026-08-11

## 1. Today's Highlights

The MiniMax-H3 ecosystem dominates this week's trends, with the base video generation model (MiniMaxAI/MiniMax-H3) and a constellation of community LoRAs, GGUF quantizations, and ComfyUI ports occupying 9 of the top 30 slots. Moonshot AI's Kimi-K3 leads overall engagement (10.4k likes), signaling strong demand for open-weight multimodal models that blend vision and language. DeepSeek-V4-Flash-0731 continues its download supremacy (954k+), while Baidu's Unlimited-OCR and Black Forest Labs' FLUX.1-dev remain evergreen in specialized OCR and text-to-image generation respectively. The surge of GGUF/INT8/NVFP4 quantizations across multiple model families highlights the community's focus on local deployment efficiency.

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,063 | 954,441 | A high-throughput flash variant of DeepSeek-V4 optimized for fast inference; leads weekly downloads by a wide margin, indicating heavy production adoption. |
| [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 490 | 89,680 | A compact 2.6B Liquid Foundation Model offering strong reasoning per parameter; notable for its non-transformer architecture and efficiency on edge devices. |
| [deepgrove/maple-preview](https://huggingface.co/deepgrove/maple-preview) | deepgrove | 312 | 1,344 | A mixture-of-experts (MoE) language model preview showcasing sparse activation for cost-effective scaling; early community interest in MoE alternatives. |
| [inclusionAI/Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash) | inclusionAI | 288 | 5,261 | A flash-optimized bilingual (Chinese/English) model using Bailing hybrid architecture; targets low-latency chat and agentic workflows. |
| [SyzygyResearch/Mach-1-Additive-35B](https://huggingface.co/SyzygyResearch/Mach-1-Additive-35B) | SyzygyResearch | 116 | 2,129 | An experimental 35B additive/ternary model exploring extreme quantization-aware training; pushes the frontier of low-bit weight representations. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 3,439 | 47,468 | Flagship image-text-to-video model driving a massive derivative ecosystem (LoRAs, GGUFs, ComfyUI ports); sets a new bar for open video generation quality. |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,472 | 1,510,032 | The week's most-liked model: a 30B-class vision-language model with compressed-tensor optimization; excels at OCR, chart reasoning, and long-context multimodal chat. |
| [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 757 | 0 | A 30B multimodal model from Meta's research line; early release with strong image-text-to-text capabilities but zero downloads suggests gated or preview access. |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 261 | 15,087 | A turbo-distilled variant of MiniMax-H3 for faster image-to-video inference; demonstrates community-driven distillation of proprietary video models. |
| [endless-frontier/BigBang-v1](https://huggingface.co/endless-frontier/BigBang-v1) | endless-frontier | 153 | 617 | A Qwen3.5-MoE based multimodal model; explores sparse expert routing for vision-language tasks with conversational capabilities. |
| [black-forest-labs/FLUX.1-dev](https://huggingface.co/black-forest-labs/FLUX.1-dev) | black-forest-labs | 14,077 | 480,762 | The enduring open-weight text-to-image standard; 14k+ likes reflect sustained community reliance for high-fidelity image generation and ControlNet pipelines. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 4,003 | 2,921,751 | A high-accuracy OCR model supporting arbitrary layouts and languages; 2.9M downloads confirm its status as a go-to document understanding backbone. |
| [nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 299 | 597 | An 11B end-to-end voice chat model with published arXiv references (2410.17196, 2503.04721, 2604.04847); targets low-latency spoken dialogue systems. |
| [mistralai/Shieldstral-1.0-3B](https://huggingface.co/mistralai/Shieldstral-1.0-3B) | mistralai | 222 | 6,343 | A compact 3B safety/guardrail model for content moderation; integrates with Mistral's tooling (vLLM, mistral-common) for production safety pipelines. |
| [Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 338 | 13,432 | A 0.6B text-to-speech model (ArkTTS architecture) offering fast, lightweight synthesis; notable for its small footprint and feature-extraction capabilities. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,150 | 6,009,639 | The primary ComfyUI-ready single-file diffusion variant of MiniMax-H3; 6M+ downloads show it is the de facto deployment format for the model. |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,862 | 2,439,083 | A heavily merged, uncensored 27B GGUF combining multiple fine-tunes (Fable, Heretic, etc.); 2.4M downloads reflect demand for unrestricted local LLMs. |
| [unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 638 | 199,167 | Official Unsloth GGUF quantization of DeepSeek-V4-Flash; enables CPU/GPU offloading with minimal quality loss for the popular flash model. |
| [larryvrh/MiniMax-H3-Turbo-Lora](https://hug

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*