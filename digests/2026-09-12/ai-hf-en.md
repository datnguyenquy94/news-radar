# Hugging Face Trending Models Digest 2026-09-12

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-12 04:14 UTC

---

# Hugging Face Trending Models Digest — 2026-09-12

## Today's Highlights

The Qwen 3.8 family dominates this week’s leaderboard, with the base 27B multimodal model surpassing 7.5M downloads and spawning a cascade of quantized GGUF variants (Unsloth, ISTA-DASLab, HauhauCS, Jackrong) that collectively exceed 14M pulls. Video generation continues its rapid commoditization: Lightricks’ LTX-2.5 and MiniMax-H3 both cross 1.6M downloads, while Viggle enters character-driven animation. Meanwhile, specialized architectures gain traction—Google’s TimesFM-3.0 leads time-series forecasting, Microsoft’s VibeVoice targets streaming ASR, and Qwen-Drive pioneers end-to-end autonomous driving. A clear pattern emerges: flagship open-weight releases are immediately followed by aggressive community quantization and fine-tuning, compressing deployment latency from hours to minutes.

---

## Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B) | openbmb | 1,199 | 67,550 | A 2B-parameter Llama-architecture model optimized for efficient text generation; trending due to its strong benchmark scores at ultra-low parameter counts and rapid adoption in edge deployments. |
| [XHToken/Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B) | XHToken | 1,108 | 17,712 | A 4B Spark-series LLM focused on high-quality instruction following; notable for its competitive MMLU scores relative to larger models and growing community fine-tunes. |
| [IFM/K2-Horizon-MoVA-36B-A4B](https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B) | IFM | 283 | 5,192 | A 36B MoE model with 4B active parameters using MoVA routing; trending for its novel mixture-of-experts design that balances throughput and quality in text generation. |
| [openai-community/gpt2](https://huggingface.co/openai-community/gpt2) | openai-community | 3,943 | 15,074,191 | The classic 1.5B GPT-2 base model; sustained massive downloads reflect its role as a universal benchmark, teaching tool, and lightweight backbone for distillation experiments. |
| [Edge0/Edge0-35B-A3B-preview](https://huggingface.co/Edge0/Edge0-35B-A3B-preview) | Edge0 | 126 | 951 | A 35B MoE model with 3B active parameters targeting MLX/edge inference; early interest stems from its aggressive sparsity and Apple Silicon optimization. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 1,812 | 75,774 | A vision-language flash model from DeepSeek’s V4 series; trending for its speed/quality trade-off in image-text-to-text tasks and open-weight accessibility. |
| [nex-agi/Nex-N2.5-mini](https://huggingface.co/nex-agi/Nex-N2.5-mini) | nex-agi | 695 | 3,121 | A compact Qwen3.5-MoE-based multimodal model supporting image-text-to-text; notable for its 2.5B active parameters and early adoption in resource-constrained multimodal apps. |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 14,768 | 7,563,763 | The flagship 27B Qwen 3.8 multimodal model; massive download volume confirms its status as the default open-weight foundation for vision-language applications. |
| [nex-agi/Nex-N2.5-Pro](https://huggingface.co/nex-agi/Nex-N2.5-Pro) | nex-agi | 599 | 12,260 | The larger sibling of Nex-N2.5-mini with expanded MoE capacity; trending for strong multimodal reasoning benchmarks and Apache-2.0 licensing. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 3,507 | 1,669,564 | A diffusion-based image-to-video/video-to-video model; leading the open video generation space with 1.6M+ downloads and support for text-to-video, image-to-video, and video-to-video pipelines. |
| [WarmBloodAban/Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity) | WarmBloodAban | 301 | 103,178 | A community-distilled variant of MiniMax-H3 for image-to-video; notable for preserving cinematic quality at reduced VRAM requirements. |
| [m-a-p/YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B) | m-a-p | 232 | 971 | A 3B music generation model with symbolic planning and agentic editing; unique for combining audio synthesis with structured composition control. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 5,158 | 4,970,363 | MiniMax’s official image-text-to-video model; 5M+ downloads establish it as a primary open competitor to proprietary video generators. |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,109 | 586,040 | An experimental “Qwen4”-lineage flash multimodal model; trending for its architectural innovations and early preview of next-gen Qwen capabilities. |
| [deepseek-ai/DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp) | deepseek-ai | 864 | 443,954 | An experimental vision-enhanced flash model from DeepSeek V4; notable for its vision-language alignment at inference-optimized latency. |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,253 | 1,173,520 | Z.ai’s latest flash multimodal model in the GLM series; 1.1M+ downloads reflect strong adoption for Chinese/English bilingual vision-language tasks. |
| [Viggle/Viggle-Animate](https://huggingface.co/Viggle/Viggle-Animate) | Viggle | 181 | 0 | A character-replacement video-to-video model enabling consistent animation; early interest driven by creative workflows for character-driven content. |
| [Qwen/Qwen-Drive-1.0-4B](https://huggingface.co/Qwen/Qwen-Drive-1.0-4B) | Qwen | 169 | 3,271 | A 4B end-to-end autonomous driving model for motion planning; pioneering open-weight vision-language-action for robotics/ADAS research. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch) | google | 735 | 633,239 | Google’s third-gen foundation model for time-series forecasting; 633K downloads signal enterprise adoption for demand planning, finance, and IoT analytics. |
| [sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | sentence-transformers | 5,826 | 254,035,929 | The de facto standard 384-dim sentence embedding model; 254M+ downloads make it the most-used embedding backbone for retrieval, clustering, and semantic search. |
| [microsoft/VibeVoice-ASR-Streaming-7B](https://huggingface.co/microsoft/VibeVoice-ASR-Streaming-7B) | microsoft | 203 | 2,279 | A 7B streaming ASR model from the VibeVoice family; notable for low-latency transcription targeting real-time meeting and call-center workloads. |
| [facebook/mms-300m](https://huggingface.co/facebook/mms-300m) | facebook | 455 | 12,081 | Meta’s 300M Massively Multilingual Speech model (wav2vec2); supports 1,000+ languages for ASR/TTS and serves as a multilingual speech foundation. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 840 | 682,187 | A mixed-precision GSQ/RCO quantized GGUF of Qwen3.8-27B; 682K downloads show demand for quality-preserving compression on consumer GPUs. |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,902 | 11,339,637 | Unsloth’s optimized GGUF quantization of Qwen3.8-27B; 11.3M downloads make it the most popular quantized variant for local LLM inference. |
| [dealignai/GLM-5.3-CYBERSECURITY-FP8](https://huggingface.co/dealignai/GLM-5.3-CYBERSECURITY-FP8) | dealignai | 385 | 28,328 | A cybersecurity-specialized GLM-5.3 fine-tune with refusal removal (abliterated); trending for red-teaming and security research use cases. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 485 | 606,200 | A heavily merged, uncensored GGUF fine-tune combining multiple expert datasets; notable for its “kitchen-sink” approach to coding/chat fusion. |
| [nvidia/Qwen3.8-Flash-Next-NVFP4](https://huggingface.co/nvidia/Qwen3.8-Flash-Next-NVFP4) | nvidia | 203 | 78,737 | NVIDIA’s ModelOpt-quantized NVFP4 version of Qwen3.8-Flash-Next; showcases hardware-aware 4-bit FP quantization for Blackwell/Hopper GPUs. |
| [openbmb/MiniCPM5-2B-GGUF](https://huggingface.co/openbmb/MiniCPM5-2B-GGUF) | openbmb | 169 | 70,755 | Official GGUF release of MiniCPM5-2B; enables CPU/MPS inference for the 2B model with minimal quality loss. |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 1,103 | 1,999,181 | An aggressive uncensored GGUF fine-tune with MTP (multi-token prediction); 2M downloads reflect demand for unrestricted multimodal chat. |
| [Jackrong/Qwopus3.8-27B-Flash-GGUF](https://huggingface.co/Jackrong/Qwopus3.8-27B-Flash-GGUF) | Jackrong | 205 | 231,831 | A GGUF quantization of a Qwen3.8-Flash derivative optimized for llama.cpp; notable for vision-language support in pure CPU inference. |

---

## Ecosystem Signal

The Qwen 3.8/3.5 lineage has become the de facto open-weight hub: the base 27B multimodal model anchors a quantization ecosystem (Unsloth, ISTA-DASLab, HauhauCS, Jackrong, NVIDIA) that collectively serves >14M downloads, signaling that community compression now outpaces proprietary inference APIs for local deployment. DeepSeek’s V4 flash series and Z.ai’s GLM-5.3-Flash confirm a trend toward **sub-10B vision-language models** that retain strong reasoning—both families ship experimental “flash” variants explicitly optimized for latency. Video generation has bifurcated: **MiniMax-H3 and LTX-2.5** lead open diffusion models (5M+ and 1.6M downloads), while **Viggle** pioneers character-consistent animation—a new controllable layer. Specialized foundations are maturing: TimesFM-3.0 (633K) dominates forecasting, all-MiniLM-L6-v2 (254M) remains the embedding bedrock, and Qwen-Drive marks the first open end-to-end driving model. **Open-weight releases now routinely trigger immediate GGUF/AWQ/NVFP4 quantization campaigns**, collapsing the “release-to-edge” cycle from weeks to days. Proprietary moats are shifting from model weights to **tooling (Unsloth, ModelOpt), data curation (uncensored merges), and deployment stacks**—the model is becoming a commodity; the runtime is the product.

---

## Worth Exploring

1. **Qwen/Qwen3.8-27B** — The highest-downloaded multimodal foundation (7.5M+); study its architecture and tokenizer as the reference point for the entire

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*