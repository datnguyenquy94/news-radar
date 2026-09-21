# Hugging Face Trending Models Digest 2026-09-21

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-21 04:34 UTC

---

# Hugging Face Trending Models Digest — 2026-09-21

---

## 📌 Today's Highlights

The Qwen ecosystem dominates this week’s trends with **Qwen3.8-27B** (15.9k likes) and its Flash-Next variant (5.5k likes) leading multimodal adoption, while community quantizations (GGUF, GSQ-RCO, MLX 2-bit) proliferate across multiple repositories. Video generation sees a surge with **MiniMax-H3** (5.5k likes, 4M downloads) and **LTX-2.5** (4.6k likes) establishing open-weight video as a major frontier. Ultra-low-bit quantization (2-bit ternary) from prism-ml and FP8 uncensored variants signal aggressive efficiency and alignment customization pushes. Llama-3.1-8B-Instruct remains a bedrock (7.8k likes, 5.9M downloads), but MoE architectures like **Edge0-35B-A3B** and **GLM-5.3-Flash** are gaining traction for edge and multimodal deployments.

---

## 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [XingChen-AGI/Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B) | XingChen-AGI | 925 | 12,617 | A 29B MoE model (4B active) optimized for conversational text generation. Trending for its strong chat performance at reduced inference cost via sparse activation. |
| [harshatheg/Qwen-2.5-1B-RLCD](https://huggingface.co/harshatheg/Qwen-2.5-1B-RLCD) | harshatheg | 482 | 0 | Tiny 1B Qwen variant fine-tuned with RLCD for structured/constrained decoding on Apple Silicon via MLX. Notable for enabling reliable JSON/function-calling on-device. |
| [openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B) | openbmb | 1,628 | 420,622 | Compact 2B model from the MiniCPM series achieving strong benchmarks for its size. Gaining traction as a go-to small open-weight LLM for edge and mobile deployment. |
| [TokenRhythm/NeoHorse-1-9B](https://huggingface.co/TokenRhythm/NeoHorse-1-9B) | TokenRhythm | 981 | 11,913 | 9B agentic-focused model built on Qwen3.5-text, optimized for tool use and multi-step reasoning. Trending for its "agentic" training blend and strong function-calling scores. |
| [internlm/Atria-Dawn-Preview](https://huggingface.co/internlm/Atria-Dawn-Preview) | internlm | 211 | 895 | Preview of InternLM’s GLM-MoE-DSA architecture (Mixture-of-Experts with Dynamic Sparse Attention). Early interest for its novel sparse attention scaling to long contexts. |
| [meta-llama/Llama-3.1-8B-Instruct](https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct) | meta-llama | 7,776 | 5,910,102 | The canonical open-weight 8B instruct model; remains the most downloaded and widely fine-tuned base. Continues to anchor the ecosystem for distillation and adaptation. |
| [Edge0/Edge0-35B-A3B-preview](https://huggingface.co/Edge0/Edge0-35B-A3B-preview) | Edge0 | 3,549 | 76,669 | 35B MoE (3B active) targeting edge inference with MLX support. Trending for its extreme parameter efficiency and Apple Silicon optimization via qwen3.5-moe backbone. |

---

## 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1) | Qwen | 899 | 183 | Latest Qwen text-to-image model with improved editing and instruction following. Early adoption signals strong community anticipation for Qwen’s visual generation stack. |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 3,447 | 496,684 | Multimodal Flash variant (image-text-to-text) optimized for speed and cost. Trending as a high-throughput open multimodal model with strong OCR and chart reasoning. |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 15,872 | 7,331,932 | Flagship 27B multimodal model (image-text-to-text) leading weekly likes. Dominates downloads (7.3M) as the primary open-weight choice for vision-language tasks. |
| [m-a-p/YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B) | m-a-p | 923 | 17,403 | 3B music generation model with symbolic planning and agentic editing. Stands out for structured composition control (chords, stems) beyond raw audio synthesis. |
| [ukisai/Swift-Qwen3.8-27b](https://huggingface.co/ukisai/Swift-Qwen3.8-27b) | ukisai | 512 | 10,962 | Optimized inference wrapper for Qwen3.8-27B with "efficient thinking" tokens. Trending for reducing latency on multimodal reasoning without quality loss. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 4,567 | 1,609,559 | Unified video model (text-to-video, image-to-video, video-to-video) in single diffusion file. Leading open video generation with 1.6M downloads and strong temporal consistency. |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,505 | 761,112 | Next-gen Flash multimodal model with experimental qwen4 architecture. Gaining momentum for its speed/quality trade-off and conversational multimodal capabilities. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 5,532 | 4,057,444 | State-of-the-art image-text-to-video model (H3 architecture). Highest-downloaded video model (4M+) with cinematic quality and strong prompt adherence. |
| [TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B) | TaichuAI | 214 | 3,750 | 9B vision-language model emphasizing spatial reasoning and multimodal grounding. Niche interest for robotic/embodied AI applications requiring 3D understanding. |
| [WarmBloodAban/Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity) | WarmBloodAban | 574 | 242,751 | Community fine-tune/packaging of MiniMax-H3 for singularity (enhanced) video generation. Trending as a drop-in upgrade with improved motion coherence. |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,501 | 3,109,084 | Z.ai’s latest multimodal Flash model (image-text-to-text) with 3.1M downloads. Strong Chinese/English bilingual performance and fast inference for production use. |

---

## 🔧 Specialized Models (code, math, medical, embeddings, classification, audio)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 1,207 | 0 | Text classifier for "System One" calibrated decisions (fast, intuitive judgments). Trending for safety/routing use-cases requiring low-latency confidence scores. |
| [AlexWortega/openjev](https://huggingface.co/AlexWortega/openjev) | AlexWortega | 326 | 0 | Cross-encoder NLI model on Qwen3.5 for entailment/contradiction detection. Valuable for RAG verification and hallucination detection pipelines. |
| [Mothersuperior/yue2-mothersuperior-realaudio-tokenizer-v4](https://huggingface.co/Mothersuperior/yue2-mothersuperior-realaudio-tokenizer-v4) | Mothersuperior | 159 | 0 | Audio tokenizer (LoRA) for YuE2 music model enabling real-audio fidelity. Critical component for high-quality music generation workflows. |

---

## 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ, MLX)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 1,537 | 1,908,396 | 2-bit ternary quantized Qwen3.5-27B (GGUF) using Hadamard transforms. Remarkable 1.9M downloads proving extreme compression viability for 27B models. |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 1,487 | 1,217,204 | Mixed-precision GSQ-RCO quantization (GGUF) preserving reasoning quality. 1.2M downloads show strong demand for calibrated low-bit multimodal models. |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 4,437 | 6,941,478 | Unsloth’s official GGUF quantization of Qwen3.8-27B. Highest-downloaded quant (6.9M) due to Unsloth’s optimized kernels and broad hardware support. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 1,011 | 1,301,417 | Heavily merged fine-tune (Fable, Cold Fusion, Heretic, Coder) + GGUF. 1.3M downloads reflect appetite for "kitchen-sink" uncensored coding/chat merges. |
| [Comfy-Org/Qwen-Image-2.1](https://huggingface.co/Comfy-Org/Qwen-Image-2.1) | Comfy-Org | 309 | 120 | ComfyUI-native single-file diffusion repackaging of Qwen-Image-2.1. Essential for node-based workflow adoption in the ComfyUI ecosystem. |
| [prism-ml/Ternary-Bonsai-2-27B-mlx-2bit](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-mlx-2bit) | prism-ml | 287 | 30,043 | MLX 2-bit ternary quantization for Apple Silicon. 30k downloads show growing Mac-first LLM deployment with Hadamard-optimized kernels. |
| [ukisai/Swift-Qwen3.8-27B-GGUF](https://huggingface.co/ukisai/Swift-Qwen3.8-27B-GGUF) | ukisai | 334 | 136,668 | GGUF quantization of the Swift-Qwen3.8-27b optimized variant. Targets efficient thinking token generation in quantized form. |
| [ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF) | ISTA-DASLab | 194 | 42,965 | GSQ-RCO quant of the Flash-Next model. Early adoption for ultra-efficient multimodal Flash deployment on consumer GPUs. |
| [dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8](https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8) | dealignai | 325 | 34,688 | FP8 quantized uncensored fine-tune of DeepSeek-V4.1-Flash. Combines alignment removal with 8-bit floating point for high-throughput unfiltered use. |

---

## 📈 Ecosystem Signal

**Qwen’s multimodal dynasty is cementing**: Qwen3.8-27B (15.9k likes, 7.3M downloads) and its Flash-Next successor (5.5k likes) form the backbone of open vision-language adoption, with twelve community quantizations/fine-tunes in this week’s top-30 alone. **Video generation has crossed the chasm**—MiniMax-H3 (4M downloads) and LTX-2.5 (1.6M) prove open-weight video is no longer experimental but production-targeted. **Quantization is fragmenting into specialized regimes**: ternary 2-bit (prism-ml), mixed-precision GSQ-RCO (ISTA-DASLab), FP8 (dealignai), and MLX-native (Edge0, prism-ml) each serve distinct hardware/quality niches. **MoE for edge is accelerating**—Edge0-35B-A3B (3.5k likes) and GLM-5.3-Flash (2.5k likes, 3.1M downloads) demonstrate sparse architectures winning on mobile/edge. **Open-weight dominates proprietary in mindshare**: every top model here is open-weight; proprietary APIs are absent from trending. **Fine-tune merges are industrializing**—DavidAU’s 12-component merge (1.3M downloads) shows community model surgery reaching "release engineering" maturity.

---

## 💎 Worth Exploring

1. **Qwen/Qwen3.8-27B** — The definitive open multimodal foundation: 7.3M downloads, massive community quantization support (GGUF, GSQ-RCO, MLX), and strong vision-language reasoning. Ideal base for any VLM application or distillation target.

2. **MiniMaxAI/MiniMax-H3** — Best-in-class open video generation (4M downloads). Try for text-to-video, image-to-video, or video-to-video tasks; the H3 architecture sets the current quality bar for open weights.

3. **prism-ml/Ternary-Bonsai-2-27B-gguf** — Extreme compression showcase: 27B model in 2-bit ternary (GGUF) with 1.9M downloads. Study its Hadamard-quantization technique if deploying large models on memory-constrained GPUs/CPUs.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*