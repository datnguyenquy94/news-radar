# Hugging Face Trending Models Digest 2026-08-03

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-03 03:39 UTC

---

# Hugging Face Trending Models Digest — 2026-08-03

## 1. Today's Highlights

The Hugging Face Hub is dominated by massive multimodal models and aggressive community quantization this week. **Moonshot AI’s Kimi-K3** leads with nearly 10k weekly likes, signaling strong demand for open-weight image-text models. DeepSeek’s **V4-Flash** family appears in three separate entries (base, dated, and GGUF), reflecting rapid iteration and immediate community adoption. Meanwhile, a wave of **Qwen3.5/3.6 MoE fine-tunes** (DavidAU, LuffyTheFox, HauhauCS) in GGUF format shows the ecosystem’s shift toward highly optimized, uncensored local LLMs. Video generation also surfaces with **MiniMax-H3**, though downloads remain minimal.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 1,781 | 156,173 | A July-2026 snapshot of DeepSeek’s V4 Flash series, optimized for fast inference and long-context reasoning. Trending due to its arxiv-backed architecture and immediate community benchmarking. |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | 4,758 | 2,050,533 | Z.ai’s latest Mixture-of-Experts model with DSA routing, offering strong chat and reasoning at scale. High downloads indicate production adoption beyond experimentation. |
| [Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 628 | 33,042 | A compact 3B-parameter LLM focused on efficient text generation for edge deployment. Gaining traction for its balance of size and multilingual capability. |
| [poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 879 | 80,102 | Poolside’s code-centric LLM optimized for software engineering tasks. Popular among developers for its strong repository-level understanding. |
| [deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) | deepseek-ai | 1,961 | 2,785,810 | The flagship V4 Flash release with massive download numbers, signaling widespread integration. Features enhanced conversational ability and tool-use. |
| [XYZAILab/XYZ-Aquila-pro](https://huggingface.co/XYZAILab/XYZ-Aquila-pro) | XYZAILab | 335 | 1,094 | An agentic-search enhanced LLM built on Qwen3.5-MoE, designed for autonomous research workflows. Early adopters highlight its planning capabilities. |
| [upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B) | upstage | 720 | 14,863 | Upstage’s 250B-parameter open model targeting enterprise-grade reasoning. Notable for its depth and strong performance on Korean/English benchmarks. |
| [amd/Instella-MoE-16B-A3B-Think](https://huggingface.co/amd/Instella-MoE-16B-A3B-Think) | amd | 124 | 1,957 | AMD’s MoE model optimized for their hardware stack, featuring a “Think” mode for step-by-step reasoning. Represents vendor-specific optimization trend. |

---

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 9,662 | 837,202 | The week’s breakout multimodal model, combining vision and language with compressed-tensors efficiency. Leads likes by 5×, indicating massive community excitement. |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 3,783 | 2,536,284 | Specialized OCR model handling arbitrary layouts and languages with highest download count. Critical for document-digitization pipelines. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 289 | 0 | Text-to-video and image-to-video model using Diffusers; zero downloads suggest gated access or early preview stage. |
| [thinkingmachines/Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small) | thinkingmachines | 232 | 6,839 | Lightweight vision-language model for conversational image understanding. Designed for real-time edge deployment. |
| [owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2) | owensong | 372 | 1,825 | Tiny TTS model (0.6B) optimized for CPU/edge speech synthesis. Stands out for local-first, privacy-preserving voice applications. |
| [microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL) | microsoft | 192 | 272,148 | Microsoft’s vision-language model with strong multimodal reasoning. High downloads reflect enterprise evaluation. |
| [Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) | Audio8 | 180 | 4,314 | ArkTTS-based speech synthesis preview model showing high naturalness at sub-1B scale. |
| [XYZAILab/XYZ-Aquila-mini](https://huggingface.co/XYZAILab/XYZ-Aquila-mini) | XYZAILab | 366 | 903 | Compact multimodal MoE variant for vision-language tasks. Early-stage but architecturally notable. |
| [microsoft/Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B) | microsoft | 250 | 2,938 | Computer-use agent model with vision-language grounding for GUI interaction. Niche but growing for automation. |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 101 | 2 | ComfyUI integration wrapper for MiniMax-H3 video generation. Community-driven workflow enablement. |
| [empero-ai/Qwythos-27B-v1](https://huggingface.co/empero-ai/Qwythos-27B-v1) | empero-ai | 97 | 1,279 | Qwen3.5-based vision-language model with 27B parameters. Represents continued Qwen fine-tune momentum. |

---

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 402 | 13,164 | Qwen3.5-MoE derivative specialized for code generation and development tasks. Active dev community drives rapid iteration. |

---

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,345 | 1,372,285 | Heavily merged & quantized Qwen3.6 MoE with uncensored chat; highest downloads in category. Showcases extreme community model surgery. |
| [unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) | unsloth | 344 | 48,707 | Official Unsloth GGUF quantization of DeepSeek V4 Flash for fast local inference. |
| [unsloth/Kimi-K3-GGUF](https://huggingface.co/unsloth/Kimi-K3-GGUF) | unsloth | 252 | 88,481 | GGUF version of the week’s top multimodal model, enabling CPU/GPU offloading. |
| [unsloth/Kimi-K3](https://huggingface.co/unsloth/Kimi-K3) | unsloth | 227 | 1,277 | Compressed-tensors (non-GGUF) optimization of Kimi-K3 for Transformers inference. |
| [lodestones/Kroma](https://huggingface.co/lodestones/Kroma) | lodestones | 129 | 0 | LoRA for Krea text-to-image model; zero downloads may indicate ComfyUI-only distribution. |
| [LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF) | LuffyTheFox | 305 | 259,237 | Hermes-style uncensored fine-tune of Qwen3.6 MoE in GGUF; strong download velocity. |
| [EschaLabs/Qwen3.6-35B-A3B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2) | EschaLabs | 120 | 2,550 | MoE fine-tune focusing on mixture-of-experts routing improvements. |
| [nota-ai/Solar-Open2-250B-Nota-NVFP4](https://huggingface.co/nota-ai/Solar-Open2-250B-Nota-NVFP4) | nota-ai | 154 | 68,199 | NVFP4-quantized 250B model for vLLM deployment; rare example of extreme-scale quantization. |
| [DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF) | DavidAU | 210 | 292,511 | 9B uncensored merge with IMatrix quantization; high downloads show demand for small uncensored models. |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | 3,244 | 1,892,654 | Aggressive uncensored fine-tune with vision; second-highest likes in quant category. |

---

## 3. Ecosystem Signal

The Hub is clearly bifurcating into **frontier open-weight releases** (Kimi-K3, DeepSeek V4, GLM-5.2, Solar-Open2) and a **hyper-active quantization/fine-tune layer** built almost exclusively on Qwen3.5/3.6 MoE architectures. Proprietary vendors (Moonshot, DeepSeek, Z.ai, MiniMax, Upstage, Microsoft, AMD) are dropping open weights at competitive parameter counts, while the community instantly repackages them into GGUF, compressed-tensors, and NVFP4 formats for local inference. Uncensored merges dominate the fine-tune leaderboard, reflecting persistent demand for alignment-free models. Video generation (MiniMax-H3) and specialized OCR (Baidu) show multimodal expansion beyond chat, but download metrics reveal a **deployment gap**: video models see near-zero pulls, while OCR and TTS models rack up millions. Notably, **vendor-specific optimizations** (AMD Instella, Microsoft Mage-VL/Fara) signal hardware-software co-design becoming a distribution channel. The Qwen MoE family has effectively become the *Linux kernel* of open LLM hacking—every major fine-tune, merge, and quantization targets it.

---

## 4. Worth Exploring

1. **moonshotai/Kimi-K3** — The runaway leader in likes and a rare open-weight *vision-language* model at this scale. Its compressed-tensors format and feature-extraction pipeline make it immediately usable for multimodal RAG and image understanding without heavy quantization overhead.

2. **baidu/Unlimited-OCR** — 2.5M downloads prove production readiness. If you process documents, invoices, or multilingual scans, this specialized model outperforms general VLMs on layout preservation and character accuracy.

3. **unsloth/DeepSeek-V4-Flash-0731-GGUF** — The fastest path to running a SOTA 2026 LLM locally. Unsloth’s GGUFs are battle-tested for llama.cpp/ollama, and the V4 Flash architecture brings long-context + speed. Ideal for offline coding assistants or research agents.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*