# Hugging Face Trending Models Digest 2026-09-20

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-20 04:36 UTC

---

# Hugging Face Trending Models Digest — 2026-09-20

## Today's Highlights
Qwen 3.8 dominates the leaderboard with its 27B multimodal flagship and Flash-Next variant occupying two top spots, while a wave of ultra-low-bit quantizations (2-bit ternary, GSQ/RCO mixed-precision) pushes 27B models into consumer hardware reach. Video generation surges with Lightricks LTX-2.5 and MiniMax-H3 both cracking 1M+ downloads, signaling production readiness for text-to-video workflows. DeepSeek-V4.1-Flash and GLM-5.3-Flash extend the "Flash" efficiency paradigm to multimodal reasoning, and the embedding workhorse `all-MiniLM-L6-v2` quietly crosses 254M downloads—confirming retrieval as the invisible backbone of every RAG stack.

---

## Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 15,783 | 7,365,368 | Flagship 27B multimodal model excelling at vision-language reasoning and long-context conversation; 7.3M downloads confirm it as the current open-weight standard for agentic workflows. |
| [meta-llama/Llama-3.1-8B-Instruct](https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct) | meta-llama | 7,753 | 5,919,746 | Battle-tested 8B instruct model with broad ecosystem support; remains the default baseline for fine-tuning and edge deployment despite newer entrants. |
| [Edge0/Edge0-35B-A3B-preview](https://huggingface.co/Edge0/Edge0-35B-A3B-preview) | Edge0 | 3,501 | 68,403 | MoE architecture with 35B total / 3B active parameters targeting efficient edge inference; early traction suggests strong interest in sparse expert routing for on-device LLMs. |
| [openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B) | openbmb | 1,600 | 389,555 | Compact 2B model punching above its weight in reasoning and tool use; 389K downloads reflect demand for capable sub-3B models on mobile and embedded. |
| [XingChen-AGI/Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B) | XingChen-AGI | 684 | 7,278 | 29B MoE (4B active) with conversational focus; modest downloads but notable for exploring wider expert topologies in open weights. |
| [TokenRhythm/NeoHorse-1-9B](https://huggingface.co/TokenRhythm/NeoHorse-1-9B) | TokenRhythm | 969 | 11,692 | 9B agentic-tuned model optimized for tool calling and multi-step reasoning; niche but growing as a lightweight agent backbone. |
| [internlm/Atria-Dawn-Preview](https://huggingface.co/internlm/Atria-Dawn-Preview) | internlm | 199 | 806 | MoE preview (GLM-MoE-DSA) with bilingual EN/ZH strength; early research release signaling InternLM’s next-gen sparse architecture direction. |
| [harshatheg/Qwen-2.5-1B-RLCD](https://huggingface.co/harshatheg/Qwen-2.5-1B-RLCD) | harshatheg | 444 | 0 | 1B model with RLCD (Reinforcement Learning from Contrastive Distillation) enabling structured/parallel/constrained decoding on Apple Silicon via MLX. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 5,497 | 4,299,737 | State-of-the-art text-to-video and image-to-video model; 4.3M downloads establish it as the leading open video generation backbone for creators and developers. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 4,458 | 1,607,815 | Unified video generation (text-to-video, image-to-video, video-to-video) in a single diffusion file; 1.6M downloads show rapid adoption for flexible video workflows. |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,460 | 742,586 | Next-gen "Flash" variant optimizing multimodal speed/quality trade-off; 742K downloads indicate strong pull for efficient vision-language inference. |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 3,329 | 482,270 | DeepSeek’s efficient multimodal Flash model; 482K downloads reflect trust in DeepSeek’s reasoning-optimized architecture for vision-language tasks. |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,481 | 2,905,932 | Z.ai’s Flash-series multimodal model with 2.9M downloads; strong bilingual (EN/ZH) conversational and reasoning capabilities at high throughput. |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 15,783 | 7,365,368 | Flagship 27B multimodal model excelling at vision-language reasoning and long-context conversation; 7.3M downloads confirm it as the current open-weight standard for agentic workflows. |
| [ukisai/Swift-Qwen3.8-27b](https://huggingface.co/ukisai/Swift-Qwen3.8-27b) | ukisai | 493 | 8,761 | Optimized Qwen3.8-27B variant for efficient thinking/inference; early adoption for latency-sensitive multimodal deployments. |
| [TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B) | TaichuAI | 205 | 2,926 | 9B vision-language model emphasizing spatial reasoning; research-oriented release targeting embodied AI and robotic perception. |
| [WarmBloodAban/Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity) | WarmBloodAban | 541 | 231,197 | Community fine-tune of MiniMax-H3 for enhanced video quality and prompt adherence; 231K downloads show strong derivative interest. |
| [m-a-p/YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B) | m-a-p | 885 | 15,446 | 3B music generation model with symbolic planning and agentic editing; unique in combining composition structure with audio synthesis. |
| [tencent/AuK](https://huggingface.co/tencent/AuK) | tencent | 333 | 3,355 | Zero-shot TTS and voice cloning model; Tencent’s entry into open audio foundation models with strong multilingual potential. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | sentence-transformers | 6,088 | 254,149,235 | Ubiquitous 384-dim sentence embedding model; 254M downloads make it the de facto standard for retrieval, clustering, and semantic search. |
| [convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 616 | 0 | Calibrated decision-making classifier (System-1 style) for reliable confidence estimates; targets high-stakes classification where probability calibration matters. |
| [AlexWortega/openjev](https://huggingface.co/AlexWortega/openjev) | AlexWortega | 228 | 0 | Cross-encoder NLI model built on Qwen3.5; specialized for natural language inference and entailment tasks in RAG verification pipelines. |
| [Mothersuperior/yue2-mothersuperior-realaudio-tokenizer-v4](https://huggingface.co/Mothersuperior/yue2-mothersuperior-realaudio-tokenizer-v4) | Mothersuperior | 156 | 0 | Audio tokenizer for YuE2 music generation; enables high-fidelity music tokenization as a reusable component for audio LM research. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 4,388 | 7,118,363 | Official Unsloth GGUF quantizations of Qwen3.8-27B; 7.1M downloads make it the go-to quantized bundle for local LLM inference via llama.cpp. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 974 | 1,256,962 | Heavily merged/uncensored fine-tune with MTP (multi-token prediction) quantized to GGUF; 1.2M downloads show appetite for opinionated, coding-optimized blends. |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 1,438 | 1,154,265 | GSQ (Group-wise Scalar Quantization) + RCO (Rotation-Consistent Optimization) mixed-precision GGUF; 1.15M downloads validate advanced quantization research impact. |
| [prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 1,266 | 1,516,960 | 2-bit ternary quantization of Bonsai-2-27B via Hadamard transform; 1.5M downloads prove extreme compression (≈1.5 GB) retains usable quality for CPU inference. |
| [ukisai/Swift-Qwen3.8-27B-GGUF](https://huggingface.co/ukisai/Swift-Qwen3.8-27B-GGUF) | ukisai | 320 | 120,740 | GGUF quant of the Swift-Qwen3.8-27B efficient-thinking variant; targets users wanting both speed optimizations and quantization in one package. |
| [dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8](https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8) | dealignai | 312 | 34,230 | Uncensored fine-tune of DeepSeek-V4.1-Flash in FP8; 34K downloads reflect demand for alignment-removed multimodal models with efficient inference. |
| [prism-ml/Ternary-Bonsai-2-27B-mlx-2bit](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-mlx-2bit) | prism-ml | 258 | 23,111 | MLX-format 2-bit ternary quant for Apple Silicon; 23K downloads highlight growing MLX ecosystem for on-device LLM deployment. |
| [ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF) | ISTA-DASLab | 175 | 31,099 | GSQ/RCO quantization applied to Qwen3.8-Flash-Next; extends mixed-precision research to the newer Flash architecture. |

---

## Ecosystem Signal
The Qwen 3.8 family (base, Flash-Next, and dozens of community quantizations/merges) has become the de facto open-weight hub—mirroring Llama-3.1’s position six months ago—while DeepSeek and Z.ai’s "Flash" lines cement a new efficiency tier for multimodal models. Open weights still dominate downloads, but the action is increasingly in *derivatives*: 8 of the top 30 are community GGUF/MLX quantizations or merges, and ISTA-DASLab’s GSQ/RCO mixed-precision work shows quantization research moving from "post-training compression" to "architecture-aware co-design." Video generation has crossed the adoption chasm (MiniMax-H3 4.3M, LTX-2.5 1.6M downloads), and the 254M downloads of `all-MiniLM-L6-v2` remind us that embedding models remain the highest-volume, lowest-visibility layer of the stack. MoE architectures (Edge0, InternLM, XingChen) are proliferating in open weights, but active-param counts stay modest (3–4B), suggesting the community is still optimizing for single-GPU/CPU inference rather than scaling out.

---

## Worth Exploring
1. **ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF** — Best-in-class mixed-precision quantization (GSQ+RCO) on the current flagship multimodal model; 1.15M downloads and academic backing make it the reference for "how low can we go without quality collapse."  
2. **Lightricks/LTX-2.5** — Single-file diffusion model covering text-to-video, image-to-video, and video-to-video; 1.6M downloads and permissive license make it the practical starting point for any video generation product.  
3. **Edge0/Edge0-35B-A3B-preview** — Rare open MoE with 3B active params targeting edge inference; studying its expert routing and MLX integration offers a window into the next wave of sparse, on-device LLMs.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*