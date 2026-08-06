# Hugging Face Trending Models Digest 2026-07-30

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-30 02:54 UTC

---

# Hugging Face Trending Models Digest — 2026-07-30

## Today's Highlights

Moonshot AI's **Kimi-K3** dominates the weekly leaderboard with 8,687 likes, establishing a new frontier for compressed multimodal models. The Qwen 3.6 family drives massive community engagement, spawning dozens of fine-tunes and quantizations (GGUF, NVFP4, ternary) that collectively account for over 15M downloads this week. Microsoft appears with three distinct releases — Fara1.5, Mage-VL, and VibeVoice-ASR-BitNet — signaling broad multimodal investment. Meanwhile, ultra-efficient models like Inflect-Nano/Micro and ternary/1-bit Bonsai variants highlight the accelerating push toward edge deployment.

---

## Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 827 | 67,286 | A 2.1 version of the Laguna code-focused LLM optimized for software engineering tasks; trending for its strong performance on repository-level coding benchmarks. |
| [upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B) | upstage | 699 | 4,804 | Upstage's 250B-parameter open-weight model using depth-up scaling; notable for achieving frontier performance with fewer active parameters than dense equivalents. |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,644 | 1,267,198 | Z.ai's latest MoE model with DSA (Dynamic Sparse Attention) achieving top-tier reasoning scores; the 1.27M downloads reflect massive enterprise and research adoption. |
| [Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 556 | 18,933 | A 3B Chinese-English bilingual model optimized for efficient deployment; trending for its strong benchmark scores relative to parameter count. |
| [fdtn-ai/antares-1b](https://huggingface.co/fdtn-ai/antares-1b) | fdtn-ai | 233 | 7,666 | A 1B Granite-MoE hybrid model focused on security applications; gaining attention for its specialized safety alignment and tiny footprint. |

---

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 8,687 | 99,214 | Moonshot's flagship compressed multimodal model leading the week; 8.7K likes signal breakthrough interest in efficient vision-language understanding. |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,517 | 2,694,935 | Baidu's OCR-specialized multimodal model with 2.7M downloads; dominates document understanding workflows with unlimited-length processing. |
| [microsoft/Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B) | microsoft | 203 | 1,543 | Microsoft's 27B computer-use agent model combining vision, reasoning, and tool use; early traction for GUI automation research. |
| [thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | 1,642 | 39,052 | A conversational multimodal model with strong image-text reasoning; 1.6K likes reflect community enthusiasm for open chat-vision hybrids. |
| [baseten/GLM-5.2-Vision-NVFP4](https://huggingface.co/baseten/GLM-5.2-Vision-NVFP4) | baseten | 137 | 2,756 | NVFP4-quantized vision variant of GLM-5.2 optimized for SGLang serving; showcases production-ready multimodal quantization. |
| [microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL) | microsoft | 101 | 702 | Microsoft's new vision-language model targeting multimodal understanding; early release with research-focused adoption. |
| [ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2) | ATH-MaaS | 346 | 47,129 | OCR-focused Qwen3.5-based model optimized for document parsing; 47K downloads indicate strong enterprise document AI demand. |
| [Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) | Qwen | 2,587 | 6,158,876 | Qwen's 35B MoE (3B active) multimodal flagship; 6.1M downloads make it the most downloaded model this week by a wide margin. |
| [moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code) | moonshotai | 1,336 | 681,111 | Code-specialized Kimi variant with multimodal capabilities; 681K downloads highlight demand for vision-enabled coding assistants. |
| [conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit) | conradlocke | 577 | 0 | LoRA for Krea-2 enabling identity-preserving image editing; popular in ComfyUI workflows for consistent character generation. |
| [owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2) | owensong | 290 | 645 | Ultra-compact TTS model for CPU/edge deployment; gaining traction for local voice synthesis with minimal resources. |
| [owensong/Inflect-Nano-v2](https://huggingface.co/owensong/Inflect-Nano-v2) | owensong | 112 | 434 | Even smaller TTS variant pushing edge AI boundaries; 434 downloads show niche adoption for ultra-low-power devices. |
| [microsoft/VibeVoice-ASR-BitNet](https://huggingface.co/microsoft/VibeVoice-ASR-BitNet) | microsoft | 106 | 1,754 | BitNet-quantized ASR model from the VibeVoice family; demonstrates 1.58-bit quantization viability for speech recognition. |

---

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 319 | 6,275 | Qwen3.5-MoE based coding specialist with image-text-to-text capability; trending for its agentic development workflow support. |

---

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 949 | 736,692 | Heavily merged uncensored Qwen3.6 fine-tune with MTP (Multi-Token Prediction); 736K downloads show massive demand for unrestricted local LLMs. |
| [unsloth/Kimi-K3](https://huggingface.co/unsloth/Kimi-K3) | unsloth | 169 | 410 | Unsloth-optimized Kimi-K3 with compressed-tensors support; enables faster fine-tuning and inference on consumer hardware. |
| [unsloth/Kimi-K3-GGUF](https://huggingface.co/unsloth/Kimi-K3-GGUF) | unsloth | 163 | 0 | GGUF quantization of Kimi-K3 for llama.cpp/llama-cpp inference; zero downloads suggest very recent upload. |
| [unsloth/Laguna-S-2.1-GGUF](https://huggingface.co/unsloth/Laguna-S-2.1-GGUF) | unsloth | 247 | 129,601 | GGUF version of Laguna-S-2.1 optimized for vLLM and local serving; 129K downloads reflect strong local deployment interest. |
| [prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 1,098 | 665,427 | Ternary (2-bit) quantized 27B model pushing extreme compression; 665K downloads signal appetite for sub-4-bit local models. |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,171 | 1,855,505 | Aggressively uncensored Qwen3.6 MoE fine-tune with vision; 1.85M downloads make it the most popular community fine-tune this week. |
| [nota-ai/Solar-Open2-250B-Nota-NVFP4](https://huggingface.co/nota-ai/Solar-Open2-250B-Nota-NVFP4) | nota-ai | 140 | 6,189 | NVFP4 quantization of Solar-Open2-250B for vLLM deployment; enables 250B model serving on fewer GPUs. |
| [LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF) | LuffyTheFox | 217 | 99,660 | Hermes-style uncensored GGUF fine-tune of Qwen3.6 MoE; 99K downloads for roleplay and creative writing use cases. |
| [DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF) | DavidAU | 134 | 112,086 | 9B IMATRIX-quantized uncensored fine-tune with MTP; 112K downloads show demand for small uncensored models. |
| [empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai | 2,516 | 1,262,662 | Claude-distilled 9B reasoning model in GGUF; 1.26M downloads highlight demand for distilled reasoning in local formats. |
| [prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf) | prism-ml | 690 | 2,339,098 | 1-bit quantized 27B model for llama.cpp; 2.34M downloads make it the most downloaded quantization this week. |

---

## Ecosystem Signal

The Qwen 3.6 family has become the undisputed center of gravity for open-weight multimodal development. Its MoE architecture (35B total, 3B active) enables an explosion of community derivatives — uncensored fine-tunes, vision-enabled merges, and aggressive quantizations down to 1-bit/ternary — that collectively dominate download charts. Moonshot AI's Kimi series is the only serious challenger, with Kimi-K3's compressed-tensors approach attracting both official (unsloth) and community optimization efforts. Microsoft's simultaneous release of three distinct multimodal models (Fara, Mage-VL, VibeVoice-ASR) signals a portfolio strategy spanning computer-use agents, vision-language understanding, and quantized speech. The quantization frontier has moved decisively below 4-bit: ternary (2-bit), 1.58-bit (BitNet), and 1-bit models now command millions of downloads, proving production viability for extreme compression. Notably, proprietary-origin models (Qwen, GLM, Kimi, Solar) are released as open weights first, while community fine-tunes focus on uncensoring, reasoning distillation, and deployment formats (GGUF, NVFP4) — a clear division of labor between foundation labs and the open ecosystem.

---

## Worth Exploring

1. **Qwen/Qwen3.6-35B-A3B** — The highest-downloaded model (6.1M) this week; its 3B active MoE design offers the best capability/efficiency trade-off for multimodal applications. Study its architecture for efficient vision-language deployment.

2. **prism-ml/Bonsai-27B-gguf** (1-bit) and **prism-ml/Ternary-Bonsai-27B-gguf** (2-bit) — With 2.3M and 665K downloads respectively, these define the current Pareto frontier for ultra-compressed local LLMs. Essential for edge AI research.

3. **zai-org/

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*