# Hugging Face Trending Models Digest 2026-08-28

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-28 11:03 UTC

---

# Hugging Face Trending Models Digest — 2026-08-28

## Today's Highlights
The Qwen 3.8 family dominates this week’s leaderboard, with the 27B base model, its Flash-Next variant, and a flood of community GGUF/abliterated quantizations accounting for over half the trending slots. Chinese labs are shipping frontier open-weight models at pace: ZAI’s GLM-5.3-Flash, DeepSeek-V4-Flash, Moonshot’s Kimi-K3, and Tencent’s Hy4-preview all debut in the top 30. Video generation is the hottest multimodal category, led by MiniMax-H3 and Lightricks LTX-2.5, while uncensored/abliterated fine-tunes continue to proliferate for local deployment. Quantization (GGUF, FP8, MLX) and chat-template fixes remain the primary community contribution vectors.

---

## Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 13,078 | 3,457,687 | Flagship 27B open-weight LLM with image-text-to-text capability; massive download count confirms it as the current community standard for local and cloud deployment. |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 1,408 | 34 | ZAI’s latest flash-efficiency model; low downloads suggest early release but high likes signal strong anticipation for GLM-5 architecture improvements. |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,778 | 3,959,575 | High-throughput Flash variant of DeepSeek-V4; near-4M downloads in weeks shows extreme demand for efficient, conversational-grade open models. |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 11,047 | 2,675,145 | Moonshot’s K3 series entry with compressed-tensors optimization; 11K likes reflect excitement over Kimi’s long-context and multimodal reputation. |
| [tencent/Hy4-preview](https://huggingface.co/tencent/Hy4-preview) | tencent | 170 | 0 | Tencent’s Hunyuan v4 preview; zero downloads indicate gated/early access, but presence marks big-tech open-weight participation. |
| [sensenova/SenseNova-U1.5-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1.5-8B-MoT) | sensenova | 185 | 4,232 | Mixture-of-Transformers 8B model with any-to-any modality support; niche but notable for native multimodal architecture. |
| [ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 470 | 88,102 | Qwen3.5-based MoE (35B total, 3B active); strong downloads for a community MoE, showing appetite for sparse expert models. |
| [thomsonreuters/Thomson-1.0-Small](https://huggingface.co/thomsonreuters/Thomson-1.0-Small) | thomsonreuters | 136 | 349 | Enterprise legal/finance domain model on Qwen3.5-MoE base; rare public release from a proprietary data holder. |
| [orcarouter/Qwen3.8-27B-Uncensored](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored) | orcarouter | 199 | 18,598 | Uncensored/abliterated version of Qwen3.8-27B; steady downloads confirm persistent demand for alignment-removed variants. |

---

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,550 | 4,848,404 | Unified image-text-to-video model; nearly 5M downloads make it the most adopted open video generation model this cycle. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,954 | 912,729 | Diffusion-based image-to-video with video-to-video support; high downloads show creator adoption for content pipelines. |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 4,045 | 4,810 | Next-gen flash multimodal model (qwen4_exp); high likes but low downloads suggest preview/benchmarking phase. |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,278 | 19,726 | Text-to-music generation with diffusers backend; growing niche for AI audio with solid early traction. |
| [alibaba-pai/MiniMax-H3-Fun-Controlnet-Union](https://huggingface.co/alibaba-pai/MiniMax-H3-Fun-Controlnet-Union) | alibaba-pai | 149 | 3,344 | ControlNet union for MiniMax-H3 enabling structured video control; ecosystem extension for the leading video model. |
| [alibaba-pai/MiniMax-H3-Acc-LoRAs](https://huggingface.co/alibaba-pai/MiniMax-H3-Acc-LoRAs) | alibaba-pai | 124 | 609 | LoRA adapters for MiniMax-H3 acceleration; cites arXiv:2607.26004, showing research-to-production pipeline. |
| [BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2) | BreezeBlue | 138 | 240 | Text-to-speech model with transformers backend; modest but growing interest in open TTS alternatives. |
| [Qwen/Qwen3.8-Flash-Next-FP8](https://huggingface.co/Qwen/Qwen3.8-Flash-Next-FP8) | Qwen | 137 | 2,219 | Official FP8-quantized Flash-Next release; validates FP8 as a first-class deployment format for new architectures. |

---

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,098 | 7,758,790 | Unsloth’s GGUF quantization of Qwen3.8-27B; 7.7M downloads makes it the single most downloaded artifact this week. |
| [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 867 | 509,270 | Abliterated (uncensored) Qwen3.8-27B in MLX/safetensors/GGUF; half a million downloads shows massive uncensored demand. |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 1,216 | 273,577 | FP8-quantized uncensored variant; demonstrates FP8 adoption for alignment-removed models. |
| [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 1,175 | 83,352 | MLX-format uncensored release targeting Apple Silicon; strong likes/downloads ratio reflects Mac developer enthusiasm. |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 702 | 938,219 | Aggressive MTP (multi-token prediction) GGUF uncensored tune; nearly 1M downloads for a specialized community variant. |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 789 | 1,666,948 | llama.cpp-compatible GGUF uncensored; 1.6M downloads confirms GGUF as default local format. |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 505 | 188,460 | OrcaRouter’s GGUF uncensored entry; diversifies quantization providers for the same base. |
| [unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 480 | 4,354 | Day-one GGUF for Flash-Next; rapid quantization turnaround by Unsloth. |
| [unsloth/GLM-5.3-Flash-GGUF](https://huggingface.co/unsloth/GLM-5.3-Flash-GGUF) | unsloth | 228 | 0 | GGUF quant of GLM-5.3-Flash; zero downloads but likes show readiness for when base model opens. |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 409 | 1,355,482 | Huihui’s abliterated GGUF; 1.3M downloads highlights prolific community fine-tuner brand. |
| [ornith-ai/Ornith-1.5-35B-A3B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF) | ornith-ai | 328 | 1,469,059 | Official GGUF of community MoE; 1.4M downloads proves MoE models quantize well for local use. |
| [DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 265 | 238,691 | Merged/fused model with GAIN training and MTP; complex recipe name reflects advanced community merging culture. |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,506 | 0 | Jinja chat-template fixes for Qwen/Qwen3.5; 1.5K likes with zero downloads indicates utility-as-library usage. |

---

## Ecosystem Signal
The Qwen 3.8/3.5 lineage has become the de facto open-weight backbone: the base 27B model, its Flash-Next successor, and dozens of community quantizations (GGUF, FP8, MLX) and abliterations occupy 14 of the top 30 slots. Chinese labs (ZAI, DeepSeek, Moonshot, Tencent, SenseNova) are releasing frontier models at a cadence that now rivals Western labs, with all four new entrants (GLM-5.3, DeepSeek-V4-Flash, Kimi-K3, Hy4) adopting flash/efficient architectures and open weights. Video generation has crossed the adoption threshold—MiniMax-H3’s 4.8M downloads and LTX-2.5’s 912K signal that open text-to-video is no longer experimental but production-ready for creators. The quantization layer is maturing: Unsloth provides day-one GGUFs, FP8 appears as an official release format (Qwen Flash-Next-FP8), and MLX targets Apple Silicon natively. Meanwhile, “uncensored/abliterated” remains the single largest fine-tuning category, with 7+ distinct Qwen3.8-27B variants, revealing that alignment removal is still the primary customization goal for local deployers. Propri

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*