# Hugging Face Trending Models Digest 2026-08-12

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-12 02:30 UTC

---

# Hugging Face Trending Models Digest — 2026-08-12

## Today's Highlights

The MiniMax-H3 video generation ecosystem dominates this week’s trends, spawning over a dozen derivatives including Turbo LoRAs, ComfyUI ports, GGUF quantizations, and specialized realism adapters — collectively amassing over 8,000 likes. MoonshotAI’s **Kimi-K3** emerges as the breakout multimodal LLM with 10.5k likes, signaling strong demand for open-weight vision-language models at scale. Baidu’s **Unlimited-OCR** (4k likes, 2.9M downloads) highlights surging interest in document understanding, while DeepSeek-V4-Flash and LiquidAI’s LFM2.5 series show continued momentum for efficient text-generation architectures. NVIDIA contributes two notable releases: a voice-chat model and an NVFP4-quantized Nemotron variant, underscoring industry investment in on-device and low-precision deployment.

---

## Trending Models

### 🧠 Language Models

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,159 | 1,048,685 | A high-throughput Flash variant of DeepSeek-V4 optimized for low-latency text generation; leads weekly downloads among LLMs, reflecting production adoption. |
| [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 555 | 93,668 | A 2.6B-parameter Liquid Foundation Model using linear attention for efficient long-context inference; notable for strong performance at small scale. |
| [deepgrove/maple-preview](https://huggingface.co/deepgrove/maple-preview) | deepgrove | 336 | 2,049 | A mixture-of-experts language model preview showcasing sparse activation for compute-efficient scaling; early community interest in MoE architectures. |
| [inclusionAI/Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash) | inclusionAI | 307 | 6,148 | A Flash-optimized bilingual LLM with custom Bailin hybrid architecture targeting fast inference; gaining traction for Chinese/English workloads. |
| [inclusionAI/Ling-3.0-tiny](https://huggingface.co/inclusionAI/Ling-3.0-tiny) | inclusionAI | 159 | 0 | An ultra-compact variant of the Ling 3.0 series designed for edge deployment; MIT-licensed and generating buzz for on-device applications. |
| [mistralai/Shieldstral-1.0-3B](https://huggingface.co/mistralai/Shieldstral-1.0-3B) | mistralai | 232 | 6,769 | A 3B-parameter safety classifier for content moderation; official Mistral release integrated with mistral-common tooling for guardrail pipelines. |

### 🎨 Multimodal & Generation

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 3,586 | 59,368 | Flagship image-text-to-video diffusion model supporting I2V, T2V, and image-text-to-video; the centerpiece of this week’s largest derivative ecosystem. |
| [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,108 | 0 | A 30B multimodal LLM for image-text-to-text reasoning; early interest despite zero downloads suggests anticipation for open weights. |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,532 | 1,565,484 | Moonshot’s latest multimodal LLM with compressed-tensor optimization; highest-liked model this week, signaling massive demand for open VLMs. |
| [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 348 | 20,376 | Turbo-distilled variant of MiniMax-H3 accelerating image-to-video generation; 20k+ downloads reflect creator adoption for faster inference. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 247 | 39 | Unified video model supporting I2V, T2V, V2V, and image-text-to-video in a single diffusion checkpoint; versatile but early adoption. |
| [nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 331 | 653 | An 11B voice chat model from NVIDIA’s Nemotron Labs; targets real-time spoken dialogue with multi-arxiv backing for research credibility. |
| [endless-frontier/BigBang-v1](https://huggingface.co/endless-frontier/BigBang-v1) | endless-frontier | 171 | 708 | A Qwen3.5-MoE based multimodal conversational model; community MoE experiment attracting niche research interest. |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 4,022 | 2,892,191 | High-performance OCR model for unlimited-length document understanding; 2.9M downloads make it the most deployed specialized multimodal model. |
| [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,216 | 6,798,796 | Official ComfyUI single-file repackaging of MiniMax-H3; 6.8M downloads confirm ComfyUI as primary deployment target for video diffusion. |
| [Kijai/MiniMax-H3_comfy](https://huggingface.co/Kijai/MiniMax-H3_comfy) | Kijai | 280 | 0 | Community ComfyUI integration for MiniMax-H3 with US-region hosting; part of the broader ComfyUI ecosystem expansion. |
| [Kijai/MiniMax-H3-experimental](https://huggingface.co/Kijai/MiniMax-H3-experimental) | K

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*