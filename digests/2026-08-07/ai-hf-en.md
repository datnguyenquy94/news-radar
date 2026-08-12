# Hugging Face Trending Models Digest 2026-08-07

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-07 03:09 UTC

---

# Hugging Face Trending Models Digest — 2026-08-07

---

## 1. Today's Highlights

The Hugging Face Hub is dominated by **next-generation video generation** and **high-efficiency language models** this week. MiniMax-H3 leads with 2,766 likes for its image-text-to-video pipeline, spawning a vibrant ecosystem of LoRAs, GGUF quantizations, and ComfyUI integrations. DeepSeek-V4-Flash variants collectively exceed 3.2M downloads, cementing DeepSeek's open-weight momentum. Moonshot's Kimi-K3 surges to 10K+ likes as a flagship multimodal LLM, while LiquidAI's LFM2.5 and Z.ai's GLM-5.2 push MoE architectures into the 2–3B and 5B+ parameter regimes. Community fine-tunes—especially Qwen3.6-based "Heretic" merges and MiniMax-H3 accelerators—show accelerating quantization and tooling maturity.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,205 | 1,258,043 | Flagship multimodal LLM with compressed-tensors optimization; leads weekly likes by a wide margin, signaling strong adoption for vision-language tasks. |
| [deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 2,045 | 2,639,756 | High-throughput open-weight chat model; 2.6M+ downloads reflect production-grade demand for DeepSeek's V4 architecture. |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 2,655 | 617,900 | July 31 refresh of V4 Flash with improved conversational alignment; rapidly adopted alongside the base release. |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,875 | 2,391,730 | MoE-based GLM scaling to 5B+ active params; 2.4M downloads show strong Chinese-language ecosystem traction. |
| [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 336 | 73,573 | Novel liquid foundation model architecture at 2.6B; competitive benchmarks for its size with unique continuous-depth design. |
| [microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL) | microsoft | 290 | 440,176 | Microsoft's vision-language model optimized for document understanding and OCR-adjacent tasks; 440K downloads indicate enterprise interest. |
| [thinkingmachines/Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small) | thinkingmachines | 326 | 22,223 | Compact multimodal model (Inkling-MM) targeting on-device vision-language inference with conversational tuning. |
| [inclusionAI/Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash) | inclusionAI | 190 | 1,196 | Hybrid Bailing architecture flash variant; early-stage release with custom code for efficient inference. |
| [deepgrove/maple-preview](https://huggingface.co/deepgrove/maple-preview) | deepgrove | 211 | 419 | Mixture-of-experts preview model exploring sparse activation for training efficiency; minimal downloads reflect early research stage. |
| [XYZAILab/XYZ-Aquila-mini](https://huggingface.co/XYZAILab/XYZ-Aquila-mini) | XYZAILab | 427 | 1,570 | Qwen3.5-MoE based mini model with image-text capabilities; 427 likes suggest community curiosity around small MoE multimodal. |

---

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 2,766 | 12,102 | SOTA image-text-to-video diffusion model; 2.7K likes and a thriving derivative ecosystem (LoRAs, GGUF, ComfyUI) mark it as the week's generative video anchor. |
| [black-forest-labs/FLUX.1-dev](https://huggingface.co/black-forest-labs/FLUX.1-dev) | black-forest-labs | 14,014 | 523,234 | Established text-to-image leader; 14K all-time likes and 500K+ downloads confirm sustained dominance in open image generation. |
| [nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 185 | 206 | End-to-end voice chat model (11B) with speech understanding and generation; low downloads but high strategic significance for audio LLM research. |
| [Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 297 | 12,211 | Compact 0.6B ArkTTS model for text-to-speech; 12K downloads show strong interest in lightweight, high-quality TTS. |
| [lodestones/Kroma](https://huggingface.co/lodestones/Kroma) | lodestones | 209 | 0 | Krea2-based LoRA for text-to-image in ComfyUI; zero downloads but 209 likes indicate community anticipation for stylized generation. |

---

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,935 | 2,791,862 | General-purpose OCR model with 2.8M downloads; leading specialized model by usage, reflecting massive document-processing demand. |
| [Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 522 | 16,961 | Qwen3.5-MoE based code generation model; 522 likes and 17K downloads show growing adoption for agentic coding workflows. |
| [mistralai/Shieldstral-1.0-3B](https://huggingface.co/mistralai/Shieldstral-1.0-3B) | mistralai | 165 | 1,511 | Dedicated safety/guardrail model (Mistral 3B base); 1.5K downloads signal early integration into content-moderation pipelines. |

---

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,654 | 2,087,189 | Heavily merged "Heretic" Qwen3.6 27B GGUF; 2M+ downloads make it the most downloaded fine-tune, reflecting appetite for uncensored, high-capability local LLMs. |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 855 | 2,295,377 | ComfyUI-native repackaging of MiniMax-H3; 2.3M downloads confirm ComfyUI as the primary deployment target for video diffusion. |
| [LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF) | LuffyTheFox | 411 | 309,149 | MoE Qwen3.6 35B (A3B) Hermes merge in GGUF; 300K+ downloads show strong demand for quantized MoE models. |
| [unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 555 | 145,105 | Unsloth-optimized GGUF quantization of DeepSeek V4 Flash; 145K downloads highlight Unsloth's role in local LLM distribution. |
| [realrebelai/MiniMax-H3_GGUFs](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs) | realrebelai | 157 | 65,679 | Multi-precision GGUF collection for MiniMax-H3; 65K downloads indicate active experimentation with video model quantization. |
| [Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot](https://huggingface.co/Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot) | Abiray | 112 | 272,963 | Aggressive nvfp4/INT4/INT8 quantization of MiniMax-H3 with ConvRot; 273K downloads reveal hunger for ultra-compressed video generation. |
| [ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot) | ethanfel | 341 | 0 | Qwen3-VL 32B merged with MiniMax-H3 text encoder, INT8 quantized for ComfyUI; 341 likes despite zero downloads show pre-release buzz. |
| [larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 316 | 0 | Turbo LoRA accelerating MiniMax-H3 inference; 316 likes signal strong community interest in video generation speedups. |
| [LiquidAI/LFM2.5-2.6B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-2.6B-GGUF) | LiquidAI | 128 | 12,790 | Official GGUF release from LiquidAI; 12.8K downloads reflect early adopter interest in liquid architecture quantization. |
| [drbaph/MiniMax-H3-Turbo-Lora-ComfyUI](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI) | drbaph | 131 | 0 | Pruned ComfyUI adapter for MiniMax-H3 Turbo LoRA; complementary to larryvrh's release. |
| [sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4](https://huggingface.co/sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4) | sakamakismile | 111 | 0 | NVFP4-quantized multimodal merge combining Qwen3-VL and MiniMax-H3 text encoder; experimental ComfyUI integration. |
| [EschaLabs/Qwen3.6-35B-A3B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2) | EschaLabs | 226 | 3,394 | Safetensors MoE fine-tune (non-quantized); 226 likes indicate interest in full-precision MoE merges. |

---

## 3. Ecosystem Signal

**Model families gaining momentum:** Three families dominate—**MiniMax-H3** (video diffusion), **DeepSeek-V4** (efficient LLMs), and **Qwen3.6 MoE** (merge-friendly backbones). MiniMax-H3 has catalyzed a full tooling stack: ComfyUI repackaging, Turbo LoRAs, nvfp4/INT4 quantization, and multimodal merges with Qwen3-VL. DeepSeek-V4-Flash's 3.2M+ combined downloads across base and GGUF variants confirm open-weight LLMs are reaching production scale. Qwen3.6 MoE (27B/35B) has become the premier substrate for community merges—Heretic, Hermes, Genesis, Escha—showing that sparse architectures are now the preferred canvas for capability blending.

**Open-weight vs proprietary:** The top-30 is overwhelmingly open-weight (weights on Hub). Proprietary players (MiniMax, Moonshot, Z.ai, LiquidAI) are releasing *open weights* but often with custom licenses (e.g., MiniMax-H3's "other" license, Kimi-K3's compressed-tensors gate). True proprietary APIs (GPT, Claude) are absent; the trend is **open weights with usage restrictions**, not closed APIs.

**Quantization & fine-tuning activity:** GGUF remains the universal local-inference format (11 GGUF entries). The frontier has moved to **nvfp4/INT4/ConvRot** for diffusion/video models (Abiray, ethanfel, sakamakismile) and **MoE-aware quantization** for 35B+ models (LuffyTheFox, EschaLabs). ComfyUI is the de facto deployment target for video/audio models (5 explicit ComfyUI entries). Merge culture is mature: "Heretic" appears in 4 model names, indicating a recognized recipe for uncensored, high-reasoning blends.

---

## 4. Worth Exploring

1. **MiniMaxAI/MiniMax-H3** + **Comfy-Org/MiniMax-H3** + **larryvrh/MiniMax-H3-Turbo-Lora** — The complete video generation stack: base model, ComfyUI integration, and speed LoRA. Best entry point for SOTA open video generation with 2.7K community validation.

2. **DavidAU/Qwen3.6-27B-Fable-Fusion-...-GGUF** — The most downloaded fine-tune (2M+). A proven, uncensored, high-reasoning 27B GGUF that runs on consumer GPUs (24GB VRAM). Ideal for studying merge recipes and local LLM deployment.

3. **LiquidAI/LFM2.5-2.6B** / **LiquidAI/LFM2.5-2.6B-GGUF** — Novel non-transformer architecture at 2.6B. Rare opportunity to benchmark liquid foundation models against transformer baselines; small enough for rapid experimentation.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*