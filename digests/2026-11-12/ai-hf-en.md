# Hugging Face Trending Models Digest 2026-11-12

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-11-12 06:53 UTC

---

Here is the structured Hugging Face Trending Models Digest.

### Today's Highlights

The current top model on Hugging Face is **Qwen/Qwen3.8-27B**, which continues to dominate with nearly 20,000 likes and 7.2M downloads. Significant momentum is building in the quantization and fine-tuning space, driven by the **unsloth/Qwen3.8-Flash-Next-GGUF** model and its variants, which leverage the unsloth library for ultra-fast inference. In the generative space, **Lightricks/LTX-2.5** leads image-to-video models with over 11k likes, while **MiniMaxAI/MiniMax-H3** remains a powerhouse in text-to-video, underscoring a trend toward large-scale diffusion models. Notably, the "heretic" and "uncensored" tag has become a recurring theme in top-performing Qwen and Gemma variants, reflecting community interest in open-weight customization.

### Trending Models

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 19,662 | 7,232,703 | The flagship Qwen3.8 release, leading the leaderboard with massive download volume and serving as the base model for numerous fine-tuned variants. |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 5,760 | 5,924,720 | A highly optimized GGUF quantization of Qwen3.8-27B, praised for drastically reduced VRAM usage while maintaining strong performance. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-...](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 2,927 | 1,532,273 | A heavily customized "heretic" and uncensored GGUF version of Qwen3.8-27B, featuring aggressive MTP (Multi-Token Prediction) and Turbo tuning for enhanced coding and reasoning. |
| [moonshotai/Kimi-K3.1-Pro](https://huggingface.co/moonshotai/Kimi-K3.1-Pro) | moonshotai | 1,948 | 33,617 | A top-tier multimodal model excelling in image-text tasks, noted for its compressed tensor architecture and strong performance in complex reasoning benchmarks. |
| [NousResearch/Arete-27B](https://huggingface.co/NousResearch/Arete-27B) | NousResearch | 443 | 4,023 | A niche but high-quality instruction-tuned model built on Qwen3.5, representing the NousResearch fine-tuning pipeline for specialized chat applications. |

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | --- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 11,543 | 2,848,771 | A state-of-the-art diffusion model for video generation, supporting image-to-video, text-to-video, and video-to-video tasks with high fidelity. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 6,822 | 6,502,936 | A massive text-to-video and image-to-video model leading the "Minimax-H3" family, known for long-form video generation capabilities. |
| [MiniMaxAI/MiniMax-H3-Image](https://huggingface.co/MiniMaxAI/MiniMax-H3-Image) | MiniMaxAI | 770 | 142,989 | The specialized image generation counterpart to the H3 model, leveraging the same efficient architecture for high-quality text-to-image outputs. |
| [speridlabs/idol](https://huggingface.co/speridlabs/idol) | speridlabs | 2,166 | 28,250 | A leading image-to-3D model utilizing Gaussian Splatting, allowing users to convert single images into detailed 3D scenes. |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black-forest-labs | 2,966 | 1,271,036 | A ComfyUI-tuned Flux model focused on image generation and editing, representing the latest iteration of the Flux pipeline. |

#### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | --- | ---: | ---: | :--- |
| [ccore/Qwen3.5-4B-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-3D-Coder) | ccore | 1,021 | 344,727 | A Qwen3.5 based code model outputting Three.js Three-dimensional visualizations, bridging the gap between code generation and 3D rendering. |
| [ccore/Qwen3.5-4B-GLB-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-GLB-3D-Coder) | ccore | 333 | 46,272 | A variant of the 3D coder using GLB (binary glTF) format for more efficient 3D model exports compared to the Three.js focus of the other model. |
| [ConwayResearch/Underdog-Woof](https://huggingface.co/ConwayResearch/Underdog-Woof) | ConwayResearch | 192 | 10 | A lightweight, on-device text-to-speech model designed for low-resource CPU environments, notable for its tiny footprint. |
| [Zyphra/ZONOS3-Mini](https://huggingface.co/Zyphra/ZONOS3-Mini) | Zyphra | 190 | 4,170 | A compact text-to-speech model using the Zonos3 architecture, optimized for high-quality audio generation in minimal size. |
| [webAI-Official/TwIL-8B](https://huggingface.co/webAI-Official/TwIL-8B) | webAI-Official | 316 | 47,087 | An 8B parameter Granite-based instruction-tuned model, serving as a compact alternative for text generation tasks. |

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | --- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 1,612 | 1,968,774 | A Flash-optimized GGUF release, part of the unsloth suite designed for next-token prediction speed and efficiency. |
| [mradermacher/gemma-4-31B-it-ARA-heretic-GGUF](https://huggingface.co/mradermacher/gemma-4-31B-it-ARA-heretic-GGUF) | mradermacher | 226 | 78,183 | A "heretic" decensored and ARA-tuned GGUF version of Gemma 4, focusing on uncensored generation capabilities. |
| [mradermacher/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic-i1-GGUF](https://huggingface.co/mradermacher/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic-i1-GGUF) | mradermacher | 291 | 290,001 | A GGUF quantized, uncensored fine-tune of DeepSeek-V4-Pro, leveraging the Qwen3.5 architecture for customized outputs. |
| [SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF](https://huggingface.co/SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF) | SC117 | 911 | 4,214,007 | An aggressive "abliterated" and RCO-quantized GGUF version of Qwen3.8-Flash-Next, pushing the boundaries of quantization efficiency. |
| [ricursiveAI/Ripple-65B-Preview](https://huggingface.co/ricursiveAI/Ripple-65B-Preview) | ricursiveAI | 519 | 7,112 | A large-scale 65B parameter model preview, noted for its custom code integration and Apache 2.0 licensing. |

### Ecosystem Signal

The Hugging Face ecosystem in late 2026 is characterized by a fierce competition between raw model scale and operational efficiency. The **Qwen3.8 family** absolutely dominates the leaderboard, serving as the de facto base for both proprietary-like performance and extensive community fine-tuning. A particularly notable trend is the proliferation of the "heretic" and "uncensored" tags, with authors like DavidAU and mradermacher releasing GGUF variants that prioritize customization and boundary-pushing behavior over safety filters, reflecting a segment of the community focused on open-weight flexibility.

Quantization is no longer a niche activity; models like **unsloth/Qwen3.8-27B-GGUF** and **SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF** demonstrate that the community has mastered the art of compressing 27B+ parameter models into consumer-friendly GGUF formats without severe performance drops. Furthermore, the **MiniMax-H3** family illustrates a shift toward vertical integration, where a single architecture (MiniMax-H3) powers both text and video generation, signaling a move toward unified multimodal foundations. Finally, the emergence of specialized 3D and code models, such as **ccore/Qwen3.5-4B-3D-Coder**, indicates that the next frontier for open-source AI is not just text or images, but the generation of interactive 3D assets and executable code.

### Worth Exploring

1.  **Lightricks/LTX-2.5**: This is the most capable all-rounder for video generation currently available on the hub. With support for image-to-video, text-to-video, and video-to-video, and nearly 12,000 likes, it represents the current state-of-the-art for developers looking to integrate high-quality video generation without relying on closed APIs.
2.  **unsloth/Qwen3.8-27B-GGUF**: For anyone wanting to run a top-tier LLM locally on consumer hardware, this is the essential starting point. It provides the power of Qwen3.8-27B in a GGUF format that is remarkably lightweight, making it the best example of the "quantization democratization" trend.
3.  **speridlabs/idol**: This model is worth studying for its unique approach to 3D reconstruction. By using Gaussian Splatting to convert a single image into a 3D scene, it offers a compelling glimpse into the future of content creation, where 2D captures can be instantly transformed into immersive 3D environments.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*