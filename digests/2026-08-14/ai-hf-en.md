# Hugging Face Trending Models Digest 2026-08-14

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-14 02:29 UTC

---

# Hugging Face Trending Models Digest — 2026-08-14

## Today's Highlights

The MiniMax-H3 family dominates this week's trends with 8 variants spanning base models, LoRAs, ComfyUI ports, and GGUF quantizations, signaling massive community adoption of the image-to-video paradigm. Multimodal models continue to surge: Meta's Muse-Glimmer-30B and Moonshot's Kimi-K3 lead image-text-to-text, while Lightricks' LTX-2.5 and MiniMax-Music3 push video and audio generation frontiers. DeepSeek-V4 and Qwen3.8 MoE releases highlight the ongoing race for efficient trillion-token-scale language models. Quantization and fine-tuning activity is exceptionally high, with over 40% of trending entries being community-optimized derivatives.

---

## Trending Models

### ��� Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 795 | 1,012 | A massive 95B-active-parameter MoE model trained on 2.4T tokens, representing Qwen's latest flagship for high-quality text generation. Trending due to its unprecedented training scale and MoE efficiency for deployment. |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,324 | 1,431,587 | DeepSeek's speed-optimized V4 variant delivering strong reasoning at lower latency, with 1.4M downloads proving production readiness. Notable for balancing Flash-style speed with Pro-level capabilities. |
| [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 308 | 0 | The full-capability V4 Pro release (August 13) targeting maximum reasoning performance; zero downloads suggest it just dropped or is gated. Marks DeepSeek's continued rapid iteration cycle. |
| [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 603 | 116,640 | A 2.6B liquid foundation model using continuous-time dynamics for efficient long-context handling. Gaining traction for its novel architecture that breaks the transformer quadratic bottleneck. |
| [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4) | nvidia | 230 | 44,859 | NVIDIA's 30B MoE model quantized to NVFP4 for extreme inference throughput on Hopper GPUs. Showcases hardware-aware quantization co-design for enterprise deployment. |
| [inclusionAI/Ling-3.0-tiny](https://huggingface.co/inclusionAI/Ling-3.0-tiny) | inclusionAI | 216 | 1,292 | A tiny hybrid (bailing_hybrid) model with custom code, MIT licensed, targeting edge deployment. Trending for its compact size and permissive license enabling commercial use. |
| [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16) | nvidia | 131 | 22,279 | BF16 variant of the same Nemotron 3.5 Lightning MoE, offering higher precision for quality-sensitive workloads. Complements the NVFP4 version for flexible accuracy/performance trade-offs. |
| [deepgrove/maple-preview](https://huggingface.co/deepgrove/maple-preview) | deepgrove | 354 | 3,868 | A mixture-of-experts preview model exploring novel routing mechanisms for efficient scaling. Early community interest centers on its architectural innovations for sparse training. |

### ��� Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,427 | 121,042 | Meta's 30B image-text-to-text model enabling rich visual dialogue and multimodal reasoning. High likes reflect excitement around Meta's open multimodal strategy. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 3,831 | 1,605,940 | The flagship image-text-to-video model driving the current video generation wave; 1.6M downloads confirm it as the de facto standard for open video synthesis. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 729 | 57,287 | A versatile diffusion model supporting image-to-video, text-to-video, and video-to-video in a single file. Trending for its all-in-one flexibility and single-file deployment ease. |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 462 | 91,455 | Community-optimized Turbo variant of MiniMax-H3 accelerating inference for real-time video generation. 91K downloads show strong demand for faster video models. |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 354 | 25 | MiniMax's third-gen music generation model using sglang-omni for high-fidelity audio. Low downloads but high likes indicate early anticipation for open music AI. |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,624 | 1,871,575 | Moonshot's 3rd-gen multimodal model with compressed-tensors optimization, leading all trending models in likes (10.6K) and downloads (1.87M). |
| [endless-frontier/BigBang-v1](https://huggingface.co/endless-frontier/BigBang-v1) | endless-frontier | 188 | 3,184 | A Qwen3.5-MoE-based image-text-to-text model exploring large-scale multimodal fusion. Represents community efforts to replicate proprietary multimodal capabilities. |
| [nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 373 | 1,164 | An 11B voice chat model with multiple arXiv references, targeting real-time spoken dialogue. NVIDIA's push into open voice assistants beyond text-only LLMs. |
| [Gazingstars123/Anima-2.9B](https://huggingface.co/Gazingstars123/Anima-2.9B) | Gazingstars123 | 133 | 0 | A 2.9B text-to-image diffusion model (single file, ComfyUI-ready) with arXiv:2401.02415 backing. Compact size makes it attractive for edge image generation. |

### ��� Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 726 | 0 | LoRA adapter for MiniMax-H3 Turbo enabling text-to-video with audio-video synchronization. Zero downloads but high likes show strong community interest in lightweight video adaptation. |
| [unsloth/Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 389 | 352,023 | GGUF quantization of Meta's Muse-Glimmer-30B for CPU/edge inference; 352K downloads prove massive demand for local multimodal LLMs. |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,292 | 10,365,210 | Official ComfyUI port of MiniMax-H3 with 10.3M downloads — the single most downloaded model this week — cementing ComfyUI as the primary video generation interface. |
| [Kijai/MiniMax-H3_comfy](https://huggingface.co/Kijai/MiniMax-H3_comfy) | Kijai | 308 | 0 | Alternative ComfyUI integration for MiniMax-H3, highlighting ecosystem fragmentation and multiple community efforts around the same base model. |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 1,989 | 2,793,115 | Heavily fine-tuned and GGUF-quantized 27B Qwen variant (uncensored, heretic merge) with 2.8M downloads, showcasing the uncensored/merged model subculture. |
| [meta-models/Muse-Glimmer-30B-GGUF](https://huggingface.co/meta-models/Muse-Glimmer-30B-GGUF) | meta-models | 257 | 136,783 | Meta's own GGUF release of Muse-Glimmer-30B with arXiv references, providing first-party quantizations for broader hardware support. |
| [SexGod1979/PinkCherry_MiniMax-H3](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3) | SexGod1979 | 298 | 324 | Fine-tune of MiniMax-H3 for stylized video generation (Apache-2.0), demonstrating niche artistic adaptations of the base video model. |
| [drbaph/MiniMax-H3-Turbo-Lora-ComfyUI](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI) | drbaph | 314 | 0 | LoRA + ComfyUI package for MiniMax-H3 Turbo, exemplifying the compound optimization trend (quantization + adapter + UI integration). |
| [fal/MiniMax-H3-Realism-People-LoRA](https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA) | fal | 159 | 4,692 | fal.ai's LoRA specializing MiniMax-H3 for photorealistic human video, showing commercial entities contributing open adapters for vertical use-cases. |
| [unsloth/MiniMax-H3-GGUF](https://huggingface.co/unsloth/MiniMax-H3-GGUF) | unsloth | 149 | 111,222 | GGUF quantization of MiniMax-H3 enabling video generation on consumer GPUs/CPUs; 111K downloads reflect intense demand for local video AI. |
| [lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA](https://huggingface.co/lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA) | lightx2v | 149 | 652 | A prompt-rewriting LoRA that optimizes user inputs for MiniMax-H3, representing the emerging meta-layer of models that improve other models' usability. |
| [ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot) | ethanfel | 483 | 0 | Highly optimized Qwen3-VL 32B with INT8 quantization, ConvRot, and ComfyUI integration — a kitchen-sink community build pushing edge deployment limits. |
| [Qwen/Qwen3.8-2.4T-A95B-FP8](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B-FP8) | Qwen | 162 | 4,000 | First-party FP8 quantization of the massive Qwen3.8 MoE, signaling vendor commitment to native low-precision deployment for trillion-scale models. |

---

## Ecosystem Signal

The MiniMax-H3 ecosystem has exploded into a full-stack phenomenon: base model (1.6M downloads), ComfyUI port (10.3M downloads), Turbo variants, LoRAs for realism/prompt-rewriting, and GGUF quantizations collectively dominate the leaderboard. This mirrors the Stable Diffusion trajectory where a single strong base model spawns an entire tooling economy. Moonshot's Kimi-K3 (10.6K likes) and DeepSeek-V4-Flash (3.3K likes) confirm that Chinese labs are setting the pace for open-weight LLM quality, while Meta's Muse-Glimmer and NVIDIA's Nemotron families show Western labs doubling down on multimodal and hardware-co-designed models. Quantization is no longer an afterthought — first-party FP8 (Qwen), NVFP4 (NVIDIA), and GGUF (Meta, unsloth) releases appear simultaneously with FP16/BF16 bases. The uncensored/merged model scene (DavidAU's 2.8M-download GGUF) remains a massive parallel distribution channel outside official releases. ComfyUI has become the de facto runtime for video generation, with 10M+ downloads for a single model port indicating it's the primary interface for creators.

---

## Worth Exploring

1. **MiniMaxAI/MiniMax-H3** — The undisputed center of gravity for open video generation. With 1.6M downloads and a thriving derivative ecosystem (LoRAs, Turbo, GGUF, ComfyUI), it's the best entry point to study state-of-the-art video synthesis and its deployment stack.

2. **moonshotai/Kimi-K3** — Highest likes (10.6K) and 1.87M downloads for a multimodal model. Its compressed-tensors optimization and feature-extraction pipeline make it a reference for efficient large-scale vision-language deployment.

3. **unsloth/Muse-Glimmer-30B-GGUF** — 352K downloads for a quantized 30B multimodal model proves strong demand for local image-text-to-text. Ideal for researching CPU/edge inference of large VLMs without quality collapse.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*