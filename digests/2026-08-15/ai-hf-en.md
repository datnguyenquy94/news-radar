# Hugging Face Trending Models Digest 2026-08-15

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-15 01:40 UTC

---

# Hugging Face Trending Models Digest — 2026-08-15

## Today's Highlights
The Qwen 3.8 family dominates the leaderboard with three variants in the top 15, led by the 27B multimodal model at 9K+ likes. Moonshot AI’s Kimi-K3 edges ahead with 10.7K likes, signaling strong community interest in Chinese-origin foundation models. MiniMax-H3 video generation models continue their download surge—Comfy-Org’s repack alone has 11.7M downloads—while DeepSeek-V4 Flash/Pro and NVIDIA Nemotron-3.5-Lightning show sustained enterprise adoption. A wave of GGUF quantizations (Unsloth, DavidAU, meta-models) and LoRA fine-tunes for MiniMax-H3 highlights the ecosystem’s shift toward local deployment and customization.

---

## Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 9,028 | 2 | Flagship 27B multimodal LLM with image-text-to-text capability; leading weekly likes despite minimal downloads, indicating high anticipation for local evaluation. |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,675 | 1,974,635 | Massive 2.4T-token trained multimodal model with compressed-tensors support; top likes and near-2M downloads show strong production adoption. |
| [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 918 | 3,832 | Mixture-of-Experts 95B model trained on 2.4T tokens; MoE architecture draws research interest for efficiency at scale. |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,385 | 1,606,491 | Speed-optimized V4 variant; 1.6M downloads reflect heavy usage in latency-sensitive chat applications. |
| [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 434 | 245 | Full-capability V4 Pro release; lower downloads suggest gated access or early evaluation phase. |
| [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,515 | 165,300 | 30B multimodal model with strong conversational benchmarks; 165K downloads indicate active community testing. |
| [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 302 | 0 | FP8-quantized 27B variant for inference acceleration; zero downloads but rising likes show quantization demand. |
| [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4) | nvidia | 257 | 119,572 | NVFP4-quantized Nemotron for H100/H200; 120K downloads signal enterprise GPU fleet adoption. |
| [inclusionAI/Ling-3.0-tiny](https://huggingface.co/inclusionAI/Ling-3.0-tiny) | inclusionAI | 235 | 2,283 | Tiny hybrid-architecture model with MIT license; niche interest for edge deployment research. |
| [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 615 | 124,172 | Liquid Foundation Model 2.5 with 2.6B parameters; 124K downloads show curiosity about non-transformer architectures. |
| [Qwen/Qwen3.8-2.4T-A95B-FP8](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B-FP8) | Qwen | 184 | 9,334 | FP8-quantized MoE variant; 9.3K downloads reflect early quantization experimentation. |
| [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16) | nvidia | 143 | 34,137 | BF16 precision Nemotron for training/fine-tuning; 34K downloads indicate fine-tuning pipeline usage. |
| [dots-studio/dots3-note-prev](https://huggingface.co/dots-studio/dots3-note-prev) | dots-studio | 142 | 11 | Experimental dots3-note architecture; minimal traction but novel design draws researcher attention. |

---

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 3,920 | 1,997,541 | Flagship image-text-to-video model; 2M downloads confirm dominance in open video generation. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 859 | 207,830 | Versatile diffusion model supporting image-to-video, text-to-video, and video-to-video; 208K downloads show broad creative adoption. |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 653 | 63 | Text-to-music generation model; low downloads but high likes suggest strong demo-driven interest. |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 493 | 149,865 | Community-optimized Turbo variant for faster inference; 150K downloads reflect demand for speed. |
| [larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 742 | 0 | LoRA fine-tune for Turbo variant; zero downloads but high likes indicate anticipation for quality boost. |
| [SexGod1979/PinkCherry_MiniMax-H3](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3) | SexGod1979 | 311 | 473 | Fine-tuned MiniMax-H3 for specific aesthetics; niche but active community engagement. |
| [fal/MiniMax-H3-Realism-People-LoRA](https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA) | fal | 177 | 9,060 | LoRA targeting realistic human generation; 9K downloads show practical deployment for avatar/video apps. |
| [Gazingstars123/Anima-2.9B](https://huggingface.co/Gazingstars123/Anima-2.9B) | Gazingstars123 | 162 | 10,106 | Text-to-image diffusion single file; 10K downloads indicate ComfyUI workflow integration. |
| [unsloth/MiniMax-H3-GGUF](https://huggingface.co/unsloth/MiniMax-H3-GGUF) | unsloth | 156 | 136,774 | GGUF-quantized MiniMax-H3 for CPU/GPU inference; 137K downloads highlight local video generation demand. |
| [drbaph/MiniMax-H3-Turbo-Lora-ComfyUI](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI) | drbaph | 318 | 112,975 | ComfyUI-ready LoRA for Turbo; 113K downloads confirm ComfyUI as primary deployment target. |

---

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 381 | 1,366 | 11B voice chat model with multi-arxiv citations; low downloads but high research relevance for real-time speech. |

---

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 816 | 0 | GGUF quantization of Qwen3.8-27B for llama.cpp; high likes show immediate demand for local 27B deployment. |
| [unsloth/Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 414 | 596,774 | GGUF Muse-Glimmer with 597K downloads; proves strong appetite for quantized multimodal LLMs. |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,318 | 11,768,622 | ComfyUI-native repack of MiniMax-H3; 11.7M downloads make it the most downloaded model this week. |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 2,017 | 2,891,524 | Heavily fine-tuned uncensored Qwen variant; 2.9M downloads reflect uncensored model demand. |
| [meta-models/Muse-Glimmer-30B-GGUF](https://huggingface.co/meta-models/Muse-Glimmer-30B-GGUF) | meta-models | 270 | 228,364 | Official GGUF release from authors; 228K downloads show trust in first-party quantization. |
| [Kijai/MiniMax-H3_comfy](https://huggingface.co/Kijai/MiniMax-H3_comfy) | Kijai | 340 | 0 | ComfyUI integration files for MiniMax-H3; zero downloads but essential for workflow builders. |
| [unsloth/MiniMax-H3-GGUF](https://huggingface.co/unsloth/MiniMax-H3-GGUF) | unsloth | 156 | 136,774 | Duplicate entry (same as above in Multimodal); GGUF quantization for local video generation. |

---

## Ecosystem Signal
The Qwen 3.8 family (27B, 95B MoE, FP8 variants) and Moonshot’s Kimi-K3 demonstrate that Chinese labs are setting the pace for open-weight multimodal LLMs, with MoE architectures gaining traction for training efficiency. DeepSeek-V4’s two-tier release (Flash/Pro) mirrors a growing pattern: open-speed variants drive mass adoption while full-capability versions remain gated or limited. Video generation is consolidating around MiniMax-H3 as the de facto open backbone—evidenced by 11.7M downloads for Comfy-Org’s repack and a thriving LoRA ecosystem (fal, larryvrh, drbaph). Quantization is now a first-class release channel: Unsloth’s GGUF drops appear within days of upstream releases, and first-party FP8/NVFP4 variants (Qwen, NVIDIA) signal vendor commitment to inference-ready artifacts. Fine-tuning culture has shifted from full-parameter to LoRA/adapter stacks, with ComfyUI emerging as the dominant deployment substrate for generative media.

---

## Worth Exploring
1. **moonshotai/Kimi-K3** — Highest likes (10.7K) and near-2M downloads; compressed-tensors format enables efficient inference on consumer GPUs. Ideal for studying large-scale multimodal alignment and deployment optimization.
2. **Comfy-Org/MiniMax-H3** — 11.7M downloads proves it’s the production standard for open video generation. The ComfyUI-native packaging makes it immediately usable in node-based workflows; great for learning video diffusion pipelines.
3. **DavidAU/Qwen3.6-27B-Fable-Fusion-...-GGUF** — 2.9M downloads for an uncensored, heavily fused fine-tune. Demonstrates how community merges (Fable, Heretic, etc.) can surpass base models in chat quality; valuable for researching model merging and alignment trade-offs.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*