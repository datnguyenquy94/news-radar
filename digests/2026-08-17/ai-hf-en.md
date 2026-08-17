# Hugging Face Trending Models Digest 2026-08-17

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-17 01:45 UTC

---

# Hugging Face Trending Models Digest — 2026-08-17

## Today's Highlights

The Qwen 3.5/3.8 family dominates this week's leaderboard, with the 27B flagship (10.3k likes) and its MoE sibling Qwen3.8-2.4T-A95B anchoring a surge of official FP8/NVFP4 quantizations and community GGUF/uncensored variants. Video generation is the breakout modality: MiniMax-H3 (4k likes, 2.3M downloads) and its Turbo/LoRA/ComfyUI ecosystem claim four of the top-30 slots, while Lightricks' LTX-2.5 adds a diffusion-based image-to-video contender. Moonshot's Kimi-K3 (10.8k likes) signals rising momentum for Chinese-origin multimodal LLMs, and Unslooth's quantization pipeline continues to be the primary distribution vector for high-download GGUF/NF4 artifacts across both language and video models.

---

## 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 10,300 | 267,725 | Qwen's latest 27B flagship with native image-text-to-text capability, leading the weekly likes chart and serving as the base for a dozen downstream quantizations and fine-tunes. |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,768 | 2,136,775 | A 2.6B compressed-tensor multimodal LLM that punches far above its weight, amassing the highest download count and near-top likes for a non-Qwen model. |
| [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 1,012 | 7,932 | Massive 2.4T-token MoE (95B active) for text generation; the FP8 variant (210 likes) extends reach to 8-bit inference pipelines. |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,463 | 1,872,232 | Speed-optimized V4 variant with 1.87M downloads, indicating strong production adoption for low-latency chat and reasoning workloads. |
| [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 536 | 21,873 | Full-capability V4 Pro release; lower downloads suggest it targets quality-critical rather than throughput-critical deployments. |
| [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4) | nvidia | 291 | 196,326 | Nemotron-H 30B with 3B active MoE in NVFP4 format, purpose-built for Blackwell-era inference efficiency. |
| [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16) | nvidia | 160 | 66,253 | BF16 reference variant of the same MoE architecture, useful for quantization calibration and accuracy baselines. |
| [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 647 | 141,009 | Liquid Foundation Model 2.5 at 2.6B — non-Transformer architecture (linear attention) gaining traction for long-context efficiency. |
| [inclusionAI/Ling-3.0-tiny](https://huggingface.co/inclusionAI/Ling-3.0-tiny) | inclusionAI | 285 | 5,727 | Tiny Bailing-hybrid model under MIT license; early-stage but notable for US-region compliance tagging. |
| [dots-studio/dots3-note-prev](https://huggingface.co/dots-studio/dots3-note-prev) | dots-studio | 186 | 393 | Experimental dots3-note variant; low download count suggests pre-release or research-only distribution. |

---

## 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,031 | 2,307,541 | Flagship image-text-to-video model; 2.3M downloads make it the most downloaded video generator this week. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,030 | 424,099 | Diffusion-based image-to-video with single-file deployment; 424k downloads signal strong creator adoption. |
| [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,633 | 292,973 | 30B multimodal LLM (image-text-to-text) with arXiv-backed architecture; 293k downloads reflect research interest. |
| [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 844 | 8,639 | Text-to-music diffusion model; niche but growing (8.6k downloads) for audio generation workflows. |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 560 | 239,206 | Community Turbo distillation of MiniMax-H3 for faster image-to-video; 239k downloads show demand for speed. |
| [fal/MiniMax-H3-Realism-People-LoRA](https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA) | fal | 229 | 16,103 | LoRA specializing MiniMax-H3 on realistic human video; 16k downloads indicate targeted professional use. |
| [Gazingstars123/Anima-2.9B](https://huggingface.co/Gazingstars123/Anima-2.9B) | Gazingstars123 | 223 | 20,860 | Text-to-image diffusion single file for ComfyUI; 20k downloads highlight the ComfyUI ecosystem pull. |
| [larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 776 | 0 | LoRA for MiniMax-H3-Turbo with text-to-video/audio-video tags; zero downloads suggests brand-new upload. |
| [unsloth/MiniMax-H3-GGUF](https://huggingface.co/unsloth/MiniMax-H3-GGUF) | unsloth | 175 | 204,344 | GGUF quantization of MiniMax-H3 for CPU/edge video inference; 204k downloads show strong local-gen demand. |

---

## 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 1,463 | 1,945,635 | Unslooth's GGUF quantization of Qwen3.8-27B; nearly 2M downloads make it the week's most downloaded artifact. |
| [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 2,096 | 3,020,070 | Heavily merged/uncensored Qwen 3.6 27B GGUF; 3M downloads lead the entire list, reflecting uncensored demand. |
| [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 486 | 352,971 | Official FP8 quantization from Qwen; 353k downloads show enterprise preference for vendor-signed 8-bit weights. |
| [unsloth/Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 458 | 718,178 | GGUF of Meta's Muse-Glimmer-30B; 718k downloads extend the multimodal LLM to llama.cpp ecosystems. |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 347 | 4,285 | Abliterated FP8 variant; low downloads but notable for safety-research tracking. |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,389 | 13,406,892 | ComfyUI-native repack of MiniMax-H3; staggering 13.4M downloads reveal ComfyUI as primary video-gen interface. |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 215 | 183,988 | Uncensored GGUF with MTP (multi-token prediction); 184k downloads confirm persistent uncensored demand. |
| [Qwen/Qwen3.8-2.4T-A95B-FP8](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B-FP8) | Qwen | 210 | 11,311 | Official FP8 for the 95B-active MoE; early adoption for hyperscale inference. |
| [unsloth/Qwen3.8-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4) | unsloth | 202 | 276,269 | NVFP4 (4-bit) quantization targeting Blackwell; 276k downloads signal rapid next-gen hardware alignment. |
| [meta-models/Muse-Glimmer-30B-GGUF](https://huggingface.co/meta-models/Muse-Glimmer-30B-GGUF) | meta-models | 298 | 357,877 | First-party GGUF from Meta-Models; 358k downloads show upstream embrace of llama.cpp distribution. |
| [Comfy-Org/MiniMax-Music-3](https://huggingface.co/Comfy-Org/MiniMax-Music-3) | Comfy-Org | 153 | 0 | ComfyUI wrap of MiniMax-Music3; zero downloads but Apache-2.0 license enables commercial ComfyUI nodes. |
| [unsloth/MiniMax-H3-GGUF](https://huggingface.co/unsloth/MiniMax-H3-GGUF) | unsloth | 175 | 204,344 | Duplicate entry (same as row 9 above) — appears twice in source list; GGUF for video model. |

---

## Ecosystem Signal

**Qwen 3.5/3.8 is the new gravitational center.** The 27B dense and 2.4T MoE anchors spawn a full quantization stack (FP8, NVFP4, GGUF) from both the vendor (Qwen) and the community (Unslooth, OrcaRouter, DavidAU, JonathanColetti). Download asymmetry is striking: community GGUF/uncensored variants (3M, 2M, 184k) dwarf official FP8 releases (353k, 11k), confirming that local-first, uncensored, llama.cpp-compatible artifacts drive real-world usage more than vendor-sanctioned 8-bit weights. **Video generation has crossed the adoption chasm.** MiniMax-H3’s 2.3M direct downloads plus 13.4M via Comfy-Org repack (and 204k GGUF) reveal a modality where workflow integration (ComfyUI) matters more than model-card metrics. Lightricks’ LTX-2.5 (424k) and the Turbo/LoRA sub-ecosystem show a healthy multi-vendor race. **Chinese-origin multimodal LLMs are normalizing at global scale:** Kimi-K3 (10.8k likes, 2.1M downloads) and Muse-Glimmer-30B (1.6k likes, 293k + 718k GGUF) sit comfortably beside DeepSeek-V4 and Qwen. **Quantization is no longer post-hoc:** NVFP4 (Unslooth, NVIDIA) and FP8 (Qwen, DeepSeek) appear within days of FP16 releases, and first-party GGUF (Meta-Models) signals upstream acceptance of llama.cpp as a primary distribution target. **Open-weight dominance is near-total** — every model in the top-30 carries an open license or community quantization; no proprietary API-only model appears.

---

## Worth Exploring

1. **Qwen/Qwen3.8-27B-FP8** — Official 8-bit quantization from the model authors; 353k downloads prove production readiness. Ideal for teams needing vendor-supported, license-clean weights on H100/H200 with minimal accuracy loss versus FP16.
2. **Comfy-Org/MiniMax-H3** — The 13.4M-download ComfyUI repack is the de-facto interface for MiniMax-H3. Studying its `diffusion-single-file` structure and node integration reveals how video-gen models are actually consumed in creator workflows.
3. **LiquidAI/LFM2.5-2.6B** — Only non-Transformer (linear attention) model in the top-30. At 2.6B with 141k downloads, it’s the most accessible entry point to evaluate whether SSM/linear-attention architectures can match Transformer quality at inference-friendly compute.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*