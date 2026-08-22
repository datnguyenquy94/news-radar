# Hugging Face Trending Models Digest 2026-08-22

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-22 01:39 UTC

---

# Hugging Face Trending Models Digest — 2026-08-22

## Today's Highlights

The Qwen3.8-27B family dominates this week's trending list, with the base model (Qwen/Qwen3.8-27B) leading at nearly 12K likes and a massive ecosystem of community fine-tunes, quantizations, and uncensored variants. Moonshot AI's Kimi-K3 emerges as a serious multimodal contender with 10.9K likes and 2.4M downloads, signaling strong adoption for Chinese-origin foundation models. MiniMax's video generation models (MiniMax-H3 and MiniMax-Music3) collectively surpass 7M downloads, highlighting surging demand for open video/audio generation. DeepSeek-V4-Flash leads download velocity among pure LLMs at 2.8M, while speculative decoding (DFlash2) and MOE architectures (Qwen3.8-2.4T-A95B, Ornith-1.5-35B-A3B) gain traction for efficiency.

---

## Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 11,969 | 1,726,651 | Flagship 27B multimodal LLM with image-text-to-text capabilities; leads weekly likes and anchors a massive quantization/fine-tune ecosystem. |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,913 | 2,448,810 | Multimodal 30B-class model with feature extraction and compressed-tensors support; second-highest likes and strong download momentum. |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,612 | 2,833,064 | High-throughput Flash variant of DeepSeek-V4; tops download count among pure LLMs, optimized for conversational inference. |
| [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 1,139 | 15,702 | Massive 2.4T-parameter MOE model with 95B active parameters; showcases scaling to trillion-parameter regime with sparse activation. |
| [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,738 | 505,113 | 30B conversational model with strong instruction-following; notable for meta-models organization entry into open-weight LLMs. |
| [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 709 | 49,601 | Pro-tier DeepSeek-V4 release; lower downloads than Flash variant suggests community preference for optimized inference versions. |
| [ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 290 | 9,165 | 35B MOE with 3B active parameters; demonstrates efficient sparse architecture from emerging research collective ornith-ai. |
| [superwhisper/s1-mini](https://huggingface.co/superwhisper/s1-mini) | superwhisper | 191 | 1,136 | Compact ASR-specialized model with text-generation pipeline; niche focus on automatic speech recognition integration. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,295 | 3,614,443 | Image-text-to-video foundation model; highest downloads in generation category, powering downstream fine-tunes like 10Eros-Max. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,493 | 654,175 | Versatile diffusion model supporting image-to-video, text-to-video, and video-to-video; single-file deployment simplifies adoption. |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,163 | 15,678 | Text-to-music generation with diffusers integration; early traction for open music synthesis alongside video models. |
| [TenStrip/10Eros-Max](https://huggingface.co/TenStrip/10Eros-Max) | TenStrip | 311 | 0 | Fine-tune of MiniMax-H3 for image-text-to-video; zero downloads suggests very recent release or access-gated distribution. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [z-lab/Qwen3.8-27B-DFlash2](https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2) | z-lab | 176 | 21,092 | Speculative decoding optimization on Qwen3.8-27B; targets inference acceleration with draft-model architecture. |
| [superwhisper/s1-mini](https://huggingface.co/superwhisper/s1-mini) | superwhisper | 191 | 1,136 | ASR-focused compact model; dual-listed for speech recognition specialization within text-generation pipeline. |
| [ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 290 | 9,165 | MOE architecture with 3B active params; specialized for efficient inference via sparse expert routing. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 2,511 | 5,804,917 | Official GGUF quantization by Unsloth; highest downloads overall (5.8M), enabling CPU/edge deployment of Qwen3.8-27B. |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 822 | 107,520 | FP8-quantized abliterated variant; combines quantization efficiency with safety-filter removal for unrestricted use. |
| [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 821 | 18,193 | MLX-format uncensored version for Apple Silicon; near-identical likes to FP8 variant shows cross-platform demand. |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 571 | 1,126,222 | Community GGUF uncensored release; 1.1M downloads indicate strong appetite for local unrestricted multimodal models. |
| [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 444 | 123,956 | Abliterated model across MLX, safetensors, and GGUF; multi-format release maximizes hardware compatibility. |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 424 | 357,225 | Aggressive MTP (Multi-Token Prediction) fine-tune with GGUF; multimodal vision support retained post-abliteration. |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,371 | 0 | Jinja chat-template fixes for Qwen/Qwen3.5; 1.3K likes with zero downloads indicates template-only utility resource. |
| [empero-ai/Qwen3.8-27B-Ridge-GGUF](https://huggingface.co/empero-ai/Qwen3.8-27B-Ridge-GGUF) | empero-ai | 238 | 74,038 | Ridge-quantized GGUF variant; llama.cpp compatible with focus on quantization quality preservation. |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 295 | 68,275 | Third orcarouter uncensored release (GGUF); completes FP8/MLX/GGUF trifecta for maximum deployment coverage. |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 232 | 338,221 | Abliterated GGUF with transformers compatibility; 338K downloads show strong community trust in huihui-ai variants. |
| [ornith-ai/Ornith-1.5-35B-A3B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF) | ornith-ai | 207 | 123,237 | GGUF quantization of Ornith MOE; MIT license and endpoints compatibility highlight production readiness. |
| [0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF](https://huggingface.co/0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF) | 0bserverx | 213 | 421,918 | "Heretic" branded abliterated GGUF; 422K downloads reflect demand for named, identity-driven uncensored releases. |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated) | huihui-ai | 229 | 17,521 | Full-precision abliterated safetensors release; lower downloads than GGUF counterpart confirms quantization preference. |
| [unsloth/Qwen3.8-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4) | unsloth | 328 | 1,013,917 | NVFP4 quantization for NVIDIA GPUs; 1M+ downloads demonstrate demand for hardware-specific low-bit formats. |
| [Blackfrost-AI/Qwen3.8-27B-ABLITERATED-GGUF](https://huggingface.co/Blackfrost-AI/Qwen3.8-27B-ABLITERATED-GGUF) | Blackfrost-AI | 201 | 197,667 | Dense 27B abliterated GGUF; explicit "dense" tag distinguishes from MOE variants in quantization landscape. |
| [DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 171 | 155,208 | Complex multi-technique fusion (COLD-FUSION, GAIN, MTP); showcases advanced community fine-tuning methodology. |

---

## Ecosystem Signal

The Qwen3.8-27B family has become the de facto community substrate: 16 of 30 trending models derive from it, spanning base, FP8, NVFP4, GGUF (Unsloth + 7 community), MLX, and 8 distinct abliterated/uncensored variants. This Cambrian explosion of derivatives—driven by demand for local, unrestricted multimodal inference—signals that open-weight models with strong vision-language capabilities are the primary target for community adaptation. Moonshot's Kimi-K3 and MiniMax's video/audio suite demonstrate Chinese labs leading multimodal open releases, while DeepSeek's Flash/Pro split reveals a maturing strategy: optimized inference variants (Flash) vastly outpull full-capability Pro versions in downloads (2.8M vs 50K). Quantization diversity is unprecedented—GGUF, FP8, MLX, NVFP4, and speculative decoding (DFlash2) coexist—reflecting hardware fragmentation across NVIDIA, Apple Silicon, and CPU-only deployments. MOE architectures (Qwen 2.4T-A95B, Ornith 35B-A3B) are gaining mindshare but remain download-light versus dense models, suggesting production adoption lags experimentation. The near-absence of Western corporate open releases (Meta, Google, Mistral) in the top 30 underscores a shifting center of gravity toward Asian labs and community collectives for frontier open weights.

---

## Worth Exploring

1. **Qwen/Qwen3.8-27B** — The central hub of the current ecosystem. Studying its architecture, chat template, and multimodal projection reveals why it anchors 50%+ of trending derivatives. Essential baseline for any fine-tuning or quantization work.

2. **unsloth/Qwen3.8-27B-GGUF** — With 5.8M downloads, this is the de facto deployment artifact for local inference. Reverse-engineering its quantization config (via Unsloth's tooling) provides a masterclass in production-grade GGUF authoring.

3. **MiniMaxAI/MiniMax-H3** — Highest-download video generation model (3.6M) with active fine-tune ecosystem (10Eros-Max). Its image-text-to-video pipeline and diffusers integration make it the most accessible open video foundation for experimentation and domain adaptation.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*