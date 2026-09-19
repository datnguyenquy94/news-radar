# Hugging Face Trending Models Digest 2026-09-19

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-19 04:17 UTC

---

# Hugging Face Trending Models Digest — 2026-09-19

---

## 📰 Today's Highlights

The Qwen 3.8 family dominates this week’s leaderboard, with the base 27B model, its Flash-Next variant, and a proliferation of community GGUF quantizations and fine-tunes collectively capturing the highest engagement. Video generation is surging: MiniMax-H3 and Lightricks LTX-2.5 lead a wave of open text-to-video models, while MiniMax-H3_Singularity demonstrates rapid community iteration. Quantization innovation is accelerating beyond standard 4-bit, with ternary (2-bit) and mixed-precision GSQ-RCO methods pushing efficiency frontiers. New model families from Chinese labs—DeepSeek-V4.1-Flash, GLM-5.3-Flash, Xing4.0, Spark-X2.5, and ZDTaichu5.0—signal continued diversification of open-weight foundation models. Meanwhile, the perennial sentence-transformers/all-MiniLM-L6-v2 maintains staggering download volume, underscoring embeddings as critical infrastructure.

---

## 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 3,196 | 429,865 | DeepSeek’s latest Flash-series multimodal LLM optimized for speed and efficiency; trending for its strong image-text reasoning and 429K weekly downloads. |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 15,663 | 7,358,662 | Flagship 27B multimodal model from Alibaba’s Qwen team; leads the board with 7.3M downloads and 15.6K likes, setting a new bar for open-weight image-text-to-text. |
| [XingChen-AGI/Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B) | XingChen-AGI | 478 | 3,073 | New 29B MoE (active 4B) model from XingChen-AGI; early interest for its sparse architecture and conversational capabilities. |
| [openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B) | openbmb | 1,561 | 357,166 | Latest 2B MiniCPM release from OpenBMB; punches above its weight class with 357K downloads, popular for edge deployment. |
| [meta-llama/Llama-3.1-8B-Instruct](https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct) | meta-llama | 7,719 | 5,934,139 | Meta’s workhorse 8B instruct model; remains a baseline with 5.9M downloads and steady community adoption. |
| [Edge0/Edge0-35B-A3B-preview](https://huggingface.co/Edge0/Edge0-35B-A3B-preview) | Edge0 | 3,410 | 52,519 | 35B MoE (active 3B) optimized for MLX and edge inference; notable for Apple Silicon focus and 3.4K likes. |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,407 | 724,142 | Experimental Flash-Next variant of Qwen 3.8; gains 5.4K likes for next-gen efficiency and conversational quality. |
| [Agnes-AI/Agnes-3.0-Flash](https://huggingface.co/Agnes-AI/Agnes-3.0-Flash) | Agnes-AI | 226 | 1,357 | New Agnes 3.0 Flash release; early traction for fast multimodal chat with 226 likes. |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,450 | 2,669,173 | Z.ai’s latest Flash model; 2.6M downloads reflect strong adoption of GLM’s bilingual (zh/en) conversational strengths. |
| [XHToken/Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B) | XHToken | 1,275 | 29,684 | Spark 2.5 4B model; 1.2K likes indicate growing interest in this emerging Chinese LLM family. |
| [TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B) | TaichuAI | 182 | 1,802 | 9B multimodal model with spatial reasoning focus; niche but notable for vision-language research. |
| [internlm/Atria-Dawn-Preview](https://huggingface.co/internlm/Atria-Dawn-Preview) | internlm | 168 | 711 | InternLM preview with GLM-MoE-DSA architecture; early research release cited from arXiv:2609.15818. |

---

## 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 4,343 | 1,590,087 | State-of-the-art open video generation (image-to-video, text-to-video, video-to-video); 4.3K likes and 1.5M downloads show creator demand. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 5,461 | 4,449,605 | MiniMax’s flagship text-to-video/image-to-video model; tops video category with 4.4M downloads and 5.4K likes. |
| [WarmBloodAban/Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity) | WarmBloodAban | 498 | 217,900 | Community fine-tune of MiniMax-H3 for enhanced video generation; 217K downloads prove rapid ecosystem iteration. |
| [m-a-p/YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B) | m-a-p | 817 | 13,668 | 3B music generation model with symbolic planning and agentic editing; unique audio modality with 817 likes. |
| [tencent/AuK](https://huggingface.co/tencent/AuK) | tencent | 307 | 3,184 | Zero-shot TTS and voice cloning from Tencent; 307 likes for multilingual speech synthesis. |
| [Comfy-Org/YuE2](https://huggingface.co/Comfy-Org/YuE2) | Comfy-Org | 188 | 102,247 | ComfyUI-native diffusion model (SheetSage2 fine-tune); 102K downloads highlight ComfyUI ecosystem integration. |

---

## 🔧 Specialized Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | sentence-transformers | 6,061 | 255,050,544 | Ubiquitous sentence embedding model; 255M downloads make it the de facto standard for semantic search and RAG. |
| [convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations | 156 | 0 | RL agent (System One) for autonomous decision-making; research-focused with 156 likes. |
| [harshatheg/Qwen-2.5-1B-RLCD](https://huggingface.co/harshatheg/Qwen-2.5-1B-RLCD) | harshatheg | 387 | 0 | 1B model fine-tuned with RLCD for structured/constrained decoding; targets Apple Silicon via MLX with parallel decoding. |

---

## 📦 Fine-tunes & Quantizations

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml | 967 | 405,609 | Pioneering 2-bit ternary quantization of 27B model for llama.cpp; 967 likes for extreme compression research. |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 1,347 | 1,078,301 | Mixed-precision GSQ-RCO quantization of Qwen3.8-27B; 1M+ downloads validate advanced quantization demand. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 907 | 1,197,378 | Heavily merged/fine-tuned “kitchen sink” Qwen variant (uncensored, coding-focused); 1.1M downloads show merger culture strength. |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 4,324 | 7,628,907 | Official Unsloth GGUF quantization of Qwen3.8-27B; 7.6M downloads make it the most downloaded quantization this week. |
| [ukisai/Swift-Qwen3.8-27B-GGUF](https://huggingface.co/ukisai/Swift-Qwen3.8-27B-GGUF) | ukisai | 283 | 100,177 | GG

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*