# Hugging Face Trending Models Digest 2026-08-09

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-09 02:14 UTC

---

# Hugging Face Trending Models Digest — 2026-08-09

---

## 1. Today's Highlights

The MiniMax-H3 video generation family dominates this week's trends, spawning over a dozen community ports, LoRAs, and quantizations across ComfyUI and GGUF ecosystems. DeepSeek-V4-Flash and Kimi-K3 lead the LLM space with massive download counts, signaling strong adoption of MoE and hybrid architectures. Meanwhile, Baidu's Unlimited-OCR and FLUX.1-dev maintain persistent popularity in multimodal tasks, and a wave of uncensored Qwen/Gemma fine-tunes in GGUF format reflects continued demand for locally runnable, alignment-modified models.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 2,854 | 785,771 | A high-throughput MoE language model optimized for flash inference; leads weekly downloads among LLMs, indicating heavy production adoption. |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,343 | 1,388,105 | Hybrid architecture multimodal LLM with compressed-tensor support; highest likes this week, reflecting strong community interest in efficient long-context models. |
| [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 418 | 81,522 | Compact liquid foundation model using continuous-time dynamics; notable for sub-3B parameter efficiency in text generation benchmarks. |
| [deepgrove/maple-preview](https://huggingface.co/deepgrove/maple-preview) | deepgrove | 255 | 896 | Mixture-of-experts causal LM preview release; early traction suggests interest in sparse scaling approaches for open-weight LLMs. |
| [inclusionAI/Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash) | inclusionAI | 222 | 4,189 | Bailin-hybrid architecture flash model tuned for conversational speed; custom code integration highlights deployment-focused design. |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,902 | 2,480,368 | MoE-DSA architecture LLM with massive download volume; sustained popularity confirms GLM series as a flagship open-weight Chinese/English model family. |
| [thinkingmachines/Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small) | thinkingmachines | 346 | 28,178 | Small multimodal conversational model with inkling_mm_model architecture; trending for edge-device research and low-resource deployment. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 3,111 | 26,693 | Flagship image-text-to-video diffusion model; anchors a massive derivative ecosystem of LoRAs, quantizations, and ComfyUI ports this week. |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,970 | 2,857,997 | Unlimited-length OCR model with feature-extraction pipeline; highest downloads in multimodal category, signaling enterprise document-processing demand. |
| [nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 246 | 458 | 11B-parameter voice chat model with multi-arxiv citations; early traction for real-time speech interaction research. |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 199 | 0 | Turbo-distilled MiniMax-H3 variant for accelerated image-to-video; zero downloads but high likes indicate pre-release community anticipation. |
| [Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot](https://huggingface.co/Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot) | Abiray | 143 | 471,519 | Multi-precision quantized MiniMax-H3 (NFP4/INT4/INT8) with ConvRot; 471K downloads show strong demand for quantized video diffusion on consumer GPUs. |
| [Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 324 | 12,837 | Compact 0.6B ArkTTS text-to-speech model; trending for ultra-lightweight on-device speech synthesis. |
| [microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL) | microsoft | 314 | 457,581 | Microsoft's image-text-to-text vision-language model; near-half-million downloads reflect enterprise multimodal R&D adoption. |
| [black-forest-labs/FLUX.1-dev](https://huggingface.co/black-forest-labs/FLUX.1-dev) | black-forest-labs | 14,038 | 502,330 | Flagship text-to-image diffusion model; all-time highest likes in dataset, maintaining dominance in open-weight image generation. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [mistralai/Shieldstral-1.0-3B](https://huggingface.co/mistralai/Shieldstral-1.0-3B) | mistralai | 201 | 4,950 | 3B-parameter safety guardrail model for content moderation; Mistral's entry into open-weight alignment tooling. |
| [Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 545 | 17,885 | Qwen3.5-MoE based code generation model; rising likes indicate growing traction for specialized coding assistants. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,007 | 3,943,176 | Official ComfyUI single-file port of MiniMax-H3; 3.9M downloads make it the most-downloaded model this week. |
| [larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 490 | 0 | LoRA adapter for MiniMax-H3 turbo distillation; zero downloads but high likes signal pre-release community vetting. |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,761 | 2,345,190 | Heavily merged uncensored Qwen 27B GGUF with MTP; 2.3M downloads show massive appetite for alignment-removed local LLMs. |
| [ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot) | ethanfel | 403 | 0 | INT8-quantized Qwen3-VL 32B with Heretic merge for ComfyUI; zero downloads but niche interest in multimodal quantization stacks. |
| [unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 608 | 175,093 | Unsloth-optimized GGUF quantization of DeepSeek-V4-Flash; 175K downloads confirm demand for quantized MoE on consumer hardware. |
| [drbaph/MiniMax-H3-Turbo-Lora-ComfyUI](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI) | drbaph | 207 | 0 | Pruned LoRA adapter for MiniMax-H3 Turbo in ComfyUI format; part of the rapid ComfyUI video ecosystem expansion. |
| [Kijai/MiniMax-H3_comfy](https://huggingface.co/Kijai/MiniMax-H3_comfy) | Kijai | 184 | 0 | Kijai's ComfyUI port of MiniMax-H3; trusted community porter accelerating diffusion model adoption in node-based workflows. |
| [SexGod1979/PinkCherry_MiniMax-H3](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3) | SexGod1979 | 176 | 0 | Apache-2.0 licensed MiniMax-H3 fine-tune; endpoints-compatible release highlights commercial deployment readiness. |
| [realrebelai/MiniMax-H3_GGUFs](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs) | realrebelai | 176 | 128,265 | GGUF quantization suite for MiniMax-H3 via Comfy-Org base; 128K downloads show video diffusion quantization maturity. |
| [LiquidAI/LFM2.5-2.6B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-2.6B-GGUF) | LiquidAI | 157 | 49,562 | Official GGUF release of Liquid 2.6B model; 49K downloads in first week indicate strong liquid architecture adoption. |
| [Kijai/MiniMax-H3-experimental](https://huggingface.co/Kijai/MiniMax-H3-experimental) | Kijai | 141 | 0 | Experimental MiniMax-H3 variant from Kijai; early access for ComfyUI power users testing bleeding-edge features. |
| [sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4](https://huggingface.co/sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4) | sakamakismile | 133 | 0 | NVFP4-quantized Qwen3-VL 32B with Heretic merge and MiniMax-H3 text encoder; showcases cross-model quantization fusion. |
| [LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF) | LuffyTheFox | 438 | 373,651 | 35B MoE uncensored merge (Genesis/Hermes V7) in GGUF; 373K downloads reflect sustained demand for large MoE local models. |

---

## 3. Ecosystem Signal

The MiniMax-H3 video generation family has catalyzed an unprecedented derivative explosion: 11 distinct community entries this week alone spanning LoRAs, multi-precision quantizations (NFP4/INT4/INT8), ComfyUI ports, and GGUF conversions. This mirrors the FLUX.1-dev pattern but at accelerated speed, suggesting video diffusion is reaching the same community maturity as image generation did 12 months ago. On the LLM front, MoE and hybrid architectures (DeepSeek-V4, Kimi-K3, GLM-5.2, Maple) dominate downloads, while dense models like Liquid's LFM explore alternative inductive biases. The quantization landscape has bifurcated: official GGUF releases from model authors (LiquidAI, Unsloth, DeepSeek) coexist with aggressive community merges (Heretic, Fable-Fusion, Genesis-Hermes) that strip alignment for uncensored local use — the latter pulling multi-million download counts. Proprietary labs (MiniMax, Moonshot, Z.ai, Baidu) continue releasing open-weight flagships, but the ecosystem's center of gravity has shifted to community adaptation layers: ComfyUI for diffusion, GGUF/llama.cpp for LLMs, and merge-based fine-tunes for alignment modification.

---

## 4. Worth Exploring

1. **MiniMaxAI/MiniMax-H3** — The anchor model for this week's most active ecosystem. Studying its architecture and the surrounding ComfyUI/GGUF/LoRA tooling offers a masterclass in how video diffusion models are productionized and adapted by the community.

2. **zai-org/GLM-5.2** — With 2.48M downloads and MoE-DSA architecture, it represents the state of the art in open-weight bilingual (Chinese/English) LLMs. Its sustained dominance makes it a critical benchmark for any MoE or long-context research.

3. **Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot** — A rare multi-precision quantization showcase (NFP4/INT4/INT8 + ConvRot) for video diffusion with 471K downloads. Ideal for researching quantization-aware deployment of large generative video models on consumer GPUs.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*