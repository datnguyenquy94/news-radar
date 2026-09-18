# Hugging Face Trending Models Digest 2026-09-18

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-18 04:20 UTC

---

# Hugging Face Trending Models Digest — 2026-09-18

## Today's Highlights

The Hugging Face Hub is dominated by the **Qwen 3.8/3.5 family**, which appears in 8 of the top 30 models across base, quantized, and fine-tuned variants—signaling its position as the current open-weight standard. **Video generation** emerges as a major trend with three distinct models (LTX-2.5, MiniMax-H3, Minimax-h3_Singularity) collectively surpassing 6M downloads. **Quantization innovation** accelerates: ISTA-DASLab's GSQ-RCO mixed-precision method and prism-ml's ternary 2-bit quantization push compression frontiers. Meanwhile, **MoE architectures** gain traction with Edge0-35B-A3B and Nex-N2.5-mini showcasing sparse scaling. DeepSeek-V4.1-Flash and its uncensored FP8 variant highlight continued demand for flexible, high-performance multimodal models.

---

## Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Edge0/Edge0-35B-A3B-preview](https://huggingface.co/Edge0/Edge0-35B-A3B-preview) | Edge0 | 3,317 | 37,131 | A 35B MoE model with 3B active parameters optimized for edge inference via MLX; trending for its exceptional parameter efficiency and Apple Silicon support. |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 3,026 | 390,657 | Multimodal flagship from DeepSeek with image-text-to-text capabilities; 390K weekly downloads reflect strong adoption for vision-language tasks. |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 15,553 | 7,456,257 | The dominant open multimodal LLM this week—7.4M downloads and 15.5K likes confirm its status as the go-to 27B foundation model. |
| [TokenRhythm/NeoHorse-1-4B](https://huggingface.co/TokenRhythm/NeoHorse-1-4B) | TokenRhythm | 2,344 | 19,789 | Agentic-focused 4B model built on Qwen3.5-text; trending for its compact size and tool-use optimization. |
| [TokenRhythm/NeoHorse-1-9B](https://huggingface.co/TokenRhythm/NeoHorse-1-9B) | TokenRhythm | 879 | 9,856 | 9B counterpart to NeoHorse-1-4B, balancing agentic capabilities with stronger reasoning; same Qwen3.5-text lineage. |
| [openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B) | openbmb | 1,541 | 329,713 | Ultra-compact 2B model with Llama architecture; 329K downloads show strong edge/device deployment interest. |
| [XingChen-AGI/Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B) | XingChen-AGI | 244 | 61 | 29B MoE with 4B active params; early-stage but notable for sparse architecture exploration. |
| [XHToken/Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B) | XHToken | 1,265 | 28,347 | 4B model gaining traction for its strong text-generation benchmarks relative to parameter count. |
| [meta-llama/Llama-3.1-8B-Instruct](https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct) | meta-llama | 7,698 | 5,887,953 | Enduring workhorse—5.8M weekly downloads prove Llama 3.1 8B remains a production staple. |
| [openai-community/gpt2](https://huggingface.co/openai-community/gpt2) | openai-community | 4,138 | 15,558,794 | The perennial baseline—15.5M downloads reflect its irreplaceable role in research, education, and prototyping. |
| [nex-agi/Nex-N2.5-mini](https://huggingface.co/nex-agi/Nex-N2.5-mini) | nex-agi | 832 | 7,347 | MoE model with Qwen3.5-MoE roots; multimodal text-generation focus in a compact package. |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,428 | 2,446,115 | Z.ai's multimodal conversational model; 2.4M downloads indicate strong Chinese/English bilingual adoption. |
| [Agnes-AI/Agnes-3.0-Flash](https://huggingface.co/Agnes-AI/Agnes-3.0-Flash) | Agnes-AI | 215 | 1,223 | Lightweight multimodal flash model; early traction for speed-oriented use cases. |
| [TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B) | TaichuAI | 173 | 476 | 9B vision-language model emphasizing spatial reasoning; niche but technically distinctive. |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,368 | 706,052 | Experimental "Qwen4" preview with flash attention; 5.3K likes show intense community anticipation. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 4,247 | 1,602,865 | Unified video diffusion model supporting image-to-video, text-to-video, and video-to-video; 1.6M downloads lead the video generation wave. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 5,423 | 4,576,471 | Text-to-video and image-to-video model from MiniMax; 4.5M downloads and top likes make it the most popular video generator this week. |
| [WarmBloodAban/Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity) | WarmBloodAban | 481 | 181,811 | Community fine-tune/optimization of MiniMax-H3; 181K downloads show strong derivative interest. |
| [m-a-p/YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B) | m-a-p | 734 | 11,626 | 3B music generation model with symbolic planning and agentic editing; unique audio-agent hybrid approach. |
| [tencent/AuK](https://huggingface.co/tencent/AuK) | tencent | 290 | 3,024 | Zero-shot TTS with voice cloning from Tencent; enterprise-grade speech synthesis gaining early adoption. |
| [Comfy-Org/YuE2](https://huggingface.co/Comfy-Org/YuE2) | Comfy-Org | 169 | 79,302 | ComfyUI-native music generation diffusion model; 79K downloads reflect strong workflow integration. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | sentence-transformers | 6,049 | 255,618,777 | The definitive sentence embedding model—255M downloads (highest on the list) cement its status as RAG/retrieval infrastructure. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 1,267 | 1,027,602 | Mixed-precision GSQ-RCO quantization of Qwen3.8-27B; 1M+ downloads validate advanced compression research. |
| [ukisai/Swift-Qwen3.8-27b](https://huggingface.co/ukisai/Swift-Qwen3.8-27b) | ukisai | 399 | 3,221 | Optimized "Swift" fine-tune of Qwen3.8-27B for efficient thinking; early but technically notable. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 854 | 1,116,038 | Heavily merged/fine-tuned uncensored variant with GGUF quantization; 1.1M downloads show demand for customized, deployment-ready models. |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 4,273 | 8,205,000 | Official Unsloth GGUF quantization—8.2M downloads make it the most downloaded quantized model this week. |
| [prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 292 | 0 | Pioneering ternary (2-bit) quantization of a 27B model; extreme compression research frontier. |
| [ukisai/Swift-Qwen3.8-27B-GGUF](https://huggingface.co/ukisai/Swift-Qwen3.8-27B-GGUF) | ukisai | 240 | 72,862 | GGUF quantization of the Swift fine-tune; efficient-thinking optimization for local inference. |
| [dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8](https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8) | dealignai | 268 | 32,011 | Uncensored FP8-quantized variant of DeepSeek-V4.1-Flash; 32K downloads reflect demand for unrestricted multimodal models. |
| [harshatheg/Qwen-2.5-1B-RLCD](https://huggingface.co/harshatheg/Qwen-2.5-1B-RLCD) | harshatheg | 298 | 0 | RLCD (Reinforcement Learning from Contrastive Distillation) fine-tune with structured/constrained decoding for Apple Silicon. |

---

## Ecosystem Signal

**Qwen dominance is structural, not incidental.** Eight of thirty trending models derive from Qwen 3.5/3.8—base, flash, quantized (Unsloth, ISTA-DASLab, ukisai), fine-tuned (DavidAU, TokenRhythm, Swift), and MoE variants. This ecosystem depth (first-party releases + quantization labs + community merges) creates a self-reinforcing flywheel: better tooling → more derivatives → more adoption → better tooling. **Video generation has crossed the adoption threshold**—three models (MiniMax-H3, LTX-2.5, Minimax-h3_Singularity) exceed 6M combined downloads, moving video from "demo" to "deployed." **Quantization is diversifying beyond GGUF**: ISTA-DASLab's GSQ-RCO (mixed-precision) and prism-ml's ternary 2-bit represent research-grade compression entering distribution channels. **Open-weight multimodal models now lead proprietary in accessibility**—DeepSeek-V4.1-Flash, Qwen3.8, GLM-5.3-Flash, and MiniMax-H3 all offer image-text/video capabilities without API gating. **MoE at the edge** (Edge0-35B-A3B, Nex-N2.5-mini) signals the next scaling paradigm: sparse activation for consumer hardware. The uncensored/fine-tune layer (DavidAU, dealignai) remains robust, confirming that alignment preferences drive significant derivative volume.

---

## Worth Exploring

1. **ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF** — The GSQ-RCO mixed-precision quantization is a research milestone: it achieves near-lossless quality at aggressive compression by applying layer-wise sensitivity analysis. Study the method if you work on model compression; use the GGUF if you need 27B capability on 24GB VRAM.

2. **Lightricks/LTX-2.5** — The most versatile video diffusion model currently open: single model handles text-to-video, image-to-video, and video-to-video with strong temporal coherence. 1.6M downloads and ComfyUI/Diffusers support make it production-ready for creative pipelines.

3. **Edge0/Edge0-35B-A3B-preview** — A 35B MoE with only 3B active parameters, MLX-optimized for Apple Silicon. If you deploy on Mac/edge, this is the strongest "large model on laptop" candidate—test its agentic reasoning vs. dense 7-8B baselines.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*