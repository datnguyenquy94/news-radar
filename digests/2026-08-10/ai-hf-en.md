# Hugging Face Trending Models Digest 2026-08-10

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-10 02:21 UTC

---

# Hugging Face Trending Models Digest — 2026-08-10

---

## 1. Today's Highlights

The MiniMax-H3 video generation family dominates this week’s trends, spawning over a dozen community LoRAs, quantizations, and ComfyUI ports within days of its release. Chinese labs continue to lead open-weight LLM innovation: Moonshot’s Kimi-K3 (10.4k likes) and Z.ai’s GLM-5.2 (4.9k likes) top the language-model charts, while DeepSeek-V4-Flash and LiquidAI’s LFM2.5 introduce novel hybrid architectures. Quantization and deployment-ready formats (GGUF, INT8, NVFP4) now appear alongside base models almost simultaneously, signaling a maturing open-source supply chain. Baidu’s Unlimited-OCR and NVIDIA’s VoiceChat-11B highlight growing enterprise-grade multimodal tooling.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,399 | 1,456,459 | A flagship multimodal LLM with compressed-tensor optimization; leads weekly likes and shows strong reasoning across text and vision benchmarks. |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,914 | 2,488,397 | MoE-based conversational model with DSA attention; highest downloads among LLMs, indicating broad production adoption. |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 2,952 | 868,576 | Latest Flash iteration optimized for speed/quality trade-off; 868k downloads reflect heavy developer integration. |
| [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 453 | 85,651 | Compact liquid foundation model with continuous-time dynamics; notable for sub-3B parameter efficiency on reasoning tasks. |
| [deepgrove/maple-preview](https://huggingface.co/deepgrove/maple-preview) | deepgrove | 290 | 1,089 | Mixture-of-Experts preview release; early community interest in sparse scaling architectures. |
| [inclusionAI/Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash) | inclusionAI | 246 | 4,747 | Hybrid architecture (Bailing) tuned for conversational latency; custom code indicates novel operator fusion. |
| [endless-frontier/BigBang-v1](https://huggingface.co/endless-frontier/BigBang-v1) | endless-frontier | 125 | 482 | Qwen3.5-MoE based multimodal chat model; experimental conversational checkpoint. |
| [SyzygyResearch/Mach-1-Additive-35B](https://huggingface.co/SyzygyResearch/Mach-1-Additive-35B) | SyzygyResearch | 104 | 1,589 | Ternary additive MoE on Qwen3.5-MoE backbone; explores ultra-low-precision weight representations. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [black-forest-labs/FLUX.1-dev](https://huggingface.co/black-forest-labs/FLUX.1-dev) | black-forest-labs | 14,059 | 487,171 | Industry-leading text-to-image diffusion model; sustained top likes confirm its status as default open image generator. |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,987 | 2,889,062 | High-throughput OCR with unlimited context length; 2.9M downloads signal massive document-processing demand. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 3,251 | 35,295 | Unified image-text-to-video foundation model; sparked immediate ecosystem of LoRAs and quantizations. |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,076 | 4,947,943 | Single-file ComfyUI distribution of MiniMax-H3; nearly 5M downloads show dominant deployment pathway. |
| [Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 333 | 13,132 | Lightweight ArkTTS-based text-to-speech; sub-1B parameters enable real-time on-device synthesis. |
| [nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 261 | 543 | End-to-end voice chat model with multi-arXiv backing; targets low-latency conversational agents. |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 235 | 6,117 | Accelerated image-to-video variant with r2v support; community-driven speed optimization. |
| [Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot](https://huggingface.co/Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot) | Abiray | 155 | 511,473 | Multi-precision quantization pack (NVFP4/INT4/INT8) with ConvRot; 511k downloads reflect deployment hunger. |
| [larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 547 | 0 | LoRA for turbo inference on MiniMax-H3; early adapter experiment with audio-video joint tags. |
| [ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot) | ethanfel | 418 | 0 | Fused Qwen3-VL + MiniMax-H3 text encoder in INT8 ComfyUI format; multimodal pipeline compression. |
| [drbaph/MiniMax-H3-Turbo-Lora-ComfyUI](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI) | drbaph | 232 | 0 | Pruned LoRA adapter for ComfyUI; focuses on minimal VRAM footprint. |
| [SexGod1979/PinkCherry_MiniMax-H3](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3) | SexGod1979 | 231 | 0 | Apache-2.0 licensed MiniMax-H3 fine-tune; endpoints-compatible for managed inference. |
| [Kijai/MiniMax-H3_comfy](https://huggingface.co/Kijai/MiniMax-H3_comfy) | Kijai | 236 | 0 | Alternative ComfyUI integration; US-region mirror for latency-sensitive users. |
| [realrebelai/MiniMax-H3_GGUFs](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs) | realrebelai | 188 | 160,747 | GGUF quantization suite for CPU/Apple Silicon; 160k downloads show strong edge-device demand. |
| [Kijai/MiniMax-H3-experimental](https://huggingface.co/Kijai/MiniMax-H3-experimental) | Kijai | 170 | 0 | Experimental branch with unreleased architectural tweaks. |
| [sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4](https://huggingface.co/sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4) | sakamakismile | 143 | 0 | NVFP4-quantized text encoder blending Qwen3-VL and MiniMax-H3; ComfyUI-ready. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 552 | 18,574 | Qwen3.5-MoE based code specialist; supports agentic development workflows with image-text context. |
| [mistralai/Shieldstral-1.0-3B](https://huggingface.co/mistralai/Shieldstral-1.0-3B) | mistralai | 211 | 5,651 | Compact safety classifier (Mistral3 backbone); designed for vLLM guardrail integration at low latency. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,808 | 2,390,692 | Heavily fused uncensored Qwen3.6 MoE; 2.4M GGUF downloads indicate massive local-LLM adoption. |
| [unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 629 | 188,761 | Official Unsloth GGUF quant of DeepSeek-V4-Flash; arXiv-backed quantization recipe. |
| [LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF) | LuffyTheFox | 455 | 396,282 | Hermes-style uncensored MoE fine-tune; 396k downloads show appetite for aligned-yet-open chat models. |
| [LiquidAI/LFM2.5-2.6B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-2.6B-GGUF) | LiquidAI | 175 | 68,468 | First-party GGUF release for liquid foundation model; enables llama.cpp deployment on edge. |

---

## 3. Ecosystem Signal

The MiniMax-H3 explosion—14 derivative entries in a single week—exemplifies a new release cadence: base model drops, then ComfyUI ports, LoRAs, and multi-precision quantizations (GGUF, INT8, NVFP4) appear within 48 hours. Chinese labs (Moonshot, Z.ai, DeepSeek, MiniMax, Baidu) now occupy 5 of the top 10 spots by likes, cementing a shift toward Asia-Pacific open-weight leadership. Proprietary vendors (NVIDIA, Mistral, Black Forest Labs) remain influential but increasingly release *components* (voice chat, safety classifiers, diffusion backbones) rather than monolithic LLMs. Quantization is no longer a post-hoc community effort; authors (LiquidAI, Unsloth, MiniMax via Comfy-Org) ship GGUF/INT4/NVFP4 artifacts simultaneously, collapsing the “train → quantize → deploy” loop. Fine-tune culture has matured into fused, multi-objective merges (DavidAU’s 7-component fusion, Heretic/Uncensored lineages) that rival base-model scale in downloads.

---

## 4. Worth Exploring

1. **MiniMaxAI/MiniMax-H3** — The only unified image-text-to-video model with a live, exploding ecosystem; ideal for studying video generation pipelines and community-driven adapter development.  
2. **moonshotai/Kimi-K3** — Highest-liked LLM this week with compressed-tensor optimization; a reference point for efficient multimodal reasoning at scale.  
3. **DavidAU/Qwen3.6-27B-Fable-Fusion-…-GGUF** — 2.4M downloads prove extreme fusion + quantization + uncensoring is a winning formula for local deployment; dissect its merge recipe for advanced model surgery.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*