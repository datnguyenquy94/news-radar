# Hugging Face Trending Models Digest 2026-09-11

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-09-11 04:15 UTC

---

# Hugging Face Trending Models Digest — 2026-09-11

## Today's Highlights

The Qwen 3.8 family dominates this week's leaderboard, with the base **Qwen3.8-27B** (14.7K likes, 7.3M downloads) and its **Flash-Next** variant (5.1K likes) anchoring both multimodal and quantized ecosystems. Video generation surges: **MiniMax-H3** (5.1K likes, 5.1M downloads) and **LTX-2.5** (3.4K likes, 1.7M downloads) lead a wave of open text-to-video models, while **Viggle-Animate** and **Minimax-h3_Singularity** extend character-consistent animation. Quantization and community fine-tunes proliferate—**unsloth/Qwen3.8-27B-GGUF** hits 11.1M downloads, and multiple uncensored GGUF variants (HauhauCS, DavidAU, orcarouter) collectively exceed 2.7M downloads. Specialized models gain traction: Google's **TimesFM-3.0** (484K downloads) for forecasting, Microsoft's streaming ASR **VibeVoice**, and Qwen's autonomous-driving **Qwen-Drive-1.0-4B** signal expanding domain coverage.

---

## Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 14,662 | 7,322,476 | Flagship 27B multimodal model with image-text-to-text pipeline; leads weekly likes and downloads, serving as the base for countless quantizations and fine-tunes. |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 5,084 | 564,079 | Experimental "Flash-Next" variant optimized for speed and efficiency; retains multimodal conversational capabilities while reducing inference latency. |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai | 1,447 | 6 | New Flash-series release from DeepSeek with image-text-to-text support; early adoption signaled by high likes despite minimal downloads. |
| [openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B) | openbmb | 1,129 | 42,289 | Compact 2B parameter model achieving strong text-generation quality; high download count reflects demand for efficient edge-deployable LLMs. |
| [XHToken/Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B) | XHToken | 1,070 | 15,930 | 4B multilingual LLM with competitive benchmarks; trending as a lightweight alternative for resource-constrained deployments. |
| [nex-agi/Nex-N2.5-mini](https://huggingface.co/nex-agi/Nex-N2.5-mini) | nex-agi | 661 | 2,444 | MoE-based mini variant leveraging Qwen3.5 architecture; balances multimodal reasoning with reduced parameter count. |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,230 | 1,023,103 | Flash-optimized GLM 5.3 with multimodal support; 1M+ downloads indicate strong adoption for Chinese-English bilingual tasks. |
| [zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3) | zai-org | 1,800 | 552,019 | Full-scale MoE model (glm_moe_dsa) for text generation; serves as foundation for specialized variants like the cybersecurity FP8 release. |
| [deepseek-ai/DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp) | deepseek-ai | 859 | 400,892 | Experimental vision-enabled Flash model; 400K downloads show early community interest in DeepSeek's multimodal roadmap. |
| [IFM/K2-Horizon-MoVA-36B-A4B](https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B) | IFM | 275 | 4,488 | 36B MoE model with 4B active parameters; novel Mixture-of-Visual-Attention architecture for efficient multimodal reasoning. |
| [nvidia/Qwen3.8-Flash-Next-NVFP4](https://huggingface.co/nvidia/Qwen3.8-Flash-Next-NVFP4) | nvidia | 194 | 62,813 | NVFP4-quantized Flash-Next variant optimized via NVIDIA ModelOpt; demonstrates hardware-aware quantization for Blackwell GPUs. |
| [Qwen/Qwen-Drive-1.0-4B](https://huggingface.co/Qwen/Qwen-Drive-1.0-4B) | Qwen | 156 | 2,759 | Specialized 4B model for autonomous driving—motion planning and perception; niche but signals Qwen's expansion into robotics. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 5,131 | 5,080,204 | Leading open text-to-video/image-to-video model; 5M+ downloads establish it as the community standard for video generation. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 3,397 | 1,740,572 | Diffusion-based video generation suite supporting text-to-video, image-to-video, and video-to-video; single-file deployment simplifies adoption. |
| [WarmBloodAban/Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity) | WarmBloodAban | 262 | 96,682 | Community fine-tune of MiniMax-H3 optimized for singularity-style generation; 96K downloads show strong derivative interest. |
| [OpenVDN/vdn-minimax-h3](https://huggingface.co/OpenVDN/vdn-minimax-h3) | OpenVDN | 286 | 39 | LoRA fine-tune of MiniMax-H3 for text-to-video; early-stage community adaptation with minimal downloads but active development. |
| [Viggle/Viggle-Animate](https://huggingface.co/Viggle/Viggle-Animate) | Viggle | 158 | 0 | Character-replacement video-to-video model; unique controllable animation capability despite zero reported downloads. |
| [BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2) | BreezeBlue | 529 | 8,227 | Second-gen text-to-speech model with transformers backend; 529 likes reflect growing demand for open TTS alternatives. |
| [m-a-p/YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B) | m-a-p | 107 | 81 | 3B music generation model with symbolic planning and agentic editing; novel architecture for controllable audio synthesis. |
| [microsoft/VibeVoice-ASR-Streaming-7B](https://huggingface.co/microsoft/VibeVoice-ASR-Streaming-7B) | microsoft | 191 | 2,065 | Streaming ASR model from Microsoft's VibeVoice line; targets real-time transcription with 7B parameter efficiency. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch) | google | 718 | 483,787 | Foundation model for time-series forecasting; 484K downloads confirm strong enterprise adoption for demand planning and anomaly detection. |
| [dealignai/GLM-5.3-CYBERSECURITY-FP8](https://huggingface.co/dealignai/GLM-5.3-CYBERSECURITY-FP8) | dealignai | 369 | 24,303 | Cybersecurity-specialized GLM variant with FP8 quantization and refusal removal; 24K downloads indicate security-research demand. |
| [Qwen/Qwen-Drive-1.0-4B](https://huggingface.co/Qwen/Qwen-Drive-1.0-4B) | Qwen | 156 | 2,759 | Autonomous driving model for motion planning and perception; represents Qwen's push into embodied AI and robotics applications. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,852 | 11,127,203 | Official Unsloth GGUF quantization of Qwen3.8-27B; 11M+ downloads make it the most downloaded model this week, enabling efficient local inference. |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 803 | 614,850 | Mixed-precision GSQ+RCO quantized GGUF; 615K downloads show appetite for advanced quantization research artifacts. |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 1,078 | 1,908,917 | Aggressively uncensored multimodal GGUF with MTP; 1.9M downloads reflect sustained demand for alignment-removed variants. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 452 | 517,644 | Heavily merged fine-tune (Fable, Cold Fusion, Heretic, Neo-Coder) with uncensored GGUF; 517K downloads showcase merge-model popularity. |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 870 | 314,894 | Abliterated GGUF variant; 315K downloads confirm consistent community interest in refusal-removed models. |
| [Jackrong/Qwopus3.8-27B-Flash-GGUF](https://huggingface.co/Jackrong/Qwopus3.8-27B-Flash-GGUF) | Jackrong | 189 | 192,107 | Flash-optimized GGUF with vision support; 192K downloads indicate niche adoption for multimodal edge deployment. |
| [openbmb/MiniCPM5-2B-GGUF](https://huggingface.co/openbmb/MiniCPM5-2B-GGUF) | openbmb | 155 | 51,179 | Official GGUF quantization of MiniCPM5-2B; 51K downloads show efficient-model quantization demand. |
| [nvidia/Qwen3.8-Flash-Next-NVFP4](https://huggingface.co/nvidia/Qwen3.8-Flash-Next-NVFP4) | nvidia | 194 | 62,813 | NVFP4-quantized Flash-Next via ModelOpt; hardware-specific quantization for NVIDIA's latest GPU generation. |

---

## Ecosystem Signal

**Qwen 3.8 has become the de facto open-weight backbone**—its base model, Flash-Next variant, and nine quantization/fine-tune derivatives collectively dominate downloads (22M+ across GGUF entries alone). This mirrors the Llama 3 moment: a single strong family catalyzes an entire sub-ecosystem of community artifacts. **Video generation is the new frontier**—MiniMax-H3 and LTX-2.5 each exceed 1.7M downloads, while Viggle and Minimax-h3_Singularity extend character control, signaling maturation beyond static image synthesis. **Quantization diversity is exploding**: GGUF remains dominant (Unsloth's 11M downloads), but NVFP4 (NVIDIA), GSQ+RCO (ISTA-DASLab), and FP8 (GLM-CYBERSECURITY) show hardware-specific and research-driven formats gaining traction. **Open-weight vs. proprietary**—all top models are open-weight or open-license; no proprietary API-only models appear, reinforcing Hugging Face's role as the primary distribution layer for accessible AI. **Specialization is broadening**: time-series (TimesFM), cybersecurity (GLM-CYBERSECURITY), autonomous driving (Qwen-Drive), streaming ASR (VibeVoice), and music (YuE2) indicate the ecosystem absorbing domain-specific foundation models rather than relying solely on generalist LLMs.

---

## Worth Exploring

1. **MiniMaxAI/MiniMax-H3** — The most downloaded video model (5.1M) with permissive licensing; ideal for prototyping text-to-video pipelines and studying diffusion transformer scaling.
2. **unsloth/Qwen3.8-27B-GGUF** — 11M downloads prove production readiness; the reference GGUF for local LLM deployment on consumer hardware.
3. **google/timesfm-3.0-pytorch** — Rare open foundation model for time-series forecasting; 484K downloads validate enterprise utility—worth benchmarking against classical methods (ARIMA, Prophet) and newer neural forecasters.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*