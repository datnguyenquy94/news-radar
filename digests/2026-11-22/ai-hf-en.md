# Hugging Face Trending Models Digest 2026-11-22

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-11-22 06:18 UTC

---

# Hugging Face Trending Models Digest (2026-11-22)

## Today's Highlights

The trending leaderboard is currently dominated by Qwen3.8-27B variants, with both the official Qwen/Qwen3.8-27B and community-optimized GGUF quantizations from unsloth achieving massive download counts exceeding 6 million. A particularly interesting development is the surge in "uncensored" and specialized fine-tunes of Qwen3 models, reflecting ongoing community experimentation with model behavior and alignment. Beyond language models, Lightricks/LTX-2.5 continues to lead in multimedia generation with over 3 million downloads, while Facebook's SAM3 maintains strong momentum in computer vision with 1.85 million downloads. The thinkingmachines Inkling-2 series also shows sustained interest, with both Mini and Small variants cracking the top 30.

## Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 20,824 | 6,298,190 | The flagship Qwen3.8-27B leads all models with 20k+ likes and 6.3M downloads, establishing itself as the premier open-weight LLM of the week with top-tier conversational capabilities. |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 6,271 | 7,532,043 | The most-downloaded GGUF quantization of Qwen3.8-27B, leveraging unsloth's optimization to achieve quantized inference efficiency while preserving the base model's strong performance. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 3,474 | 1,787,788 | A heavily community fine-tuned and quantized variant featuring the "TURBO" and "Heretic" tags, demonstrating the extent of Qwen3.8-27B customization in the GGUF ecosystem. |
| [harness-hub/Qwen3.8-27B-pi-adapted](https://huggingface.co/harness-hub/Qwen3.8-27B-pi-adapted) | harness-hub | 942 | 2,383 | A PEFT and GRPO-adapted Qwen3.8-27B variant focused on async-grpo training efficiency, representing the latest in parameter-efficient fine-tuning research. |
| [n4ze3m/tiny-voca](https://huggingface.co/n4ze3m/tiny-voca) | n4ze3m | 377 | 9,323 | A compact text-to-speech model with a tiny vocabulary, optimized with ONNX and GGUF for lightweight deployment and fast inference. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 12,961 | 3,000,544 | The leading multimodal model for image and text-to-video generation, capable of text-to-video, image-to-video, and video-to-video transformation with high fidelity. |
| [tencent/Hy4-flash](https://huggingface.co/tencent/Hy4-flash) | tencent | 555 | 5,588 | A fast transformer-based model for image-to-text tasks, part of the Hunyuan family emphasizing speed and efficiency in multimodal processing. |
| [apple/FastFrames-L](https://huggingface.co/apple/FastFrames-L) | apple | 498 | 0 | An Apple research release for text-to-video generation, built on the Wan2.1-T2V-14B base model and distributed as a finetuned variant. |
| [meituan-longcat/LongCat-Video-Avatar-1.6](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.6) | meituan-longcat | 393 | 3,031 | A specialized video avatar model supporting audio-text-to-video generation, notable for its ONNX optimization and long-form video capabilities. |
| [inworld/voice-isolator](https://huggingface.co/inworld/voice-isolator) | inworld | 533 | 0 | An audio-to-audio model specialized for voice isolation and speech enhancement, demonstrating real-time audio processing capabilities. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | --- | ---: | ---: | :--- |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 7,148 | 1,850,744 | The third iteration of SAM (Segment Anything Model), establishing new standards in image segmentation and feature extraction with video capabilities. |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black-forest-labs | 3,635 | 964,439 | A ComfyUI-optimized Flux model for image generation and editing, representing the latest diffusion pipeline from Black Forest Labs. |
| [RadixArk/DaisyRose-27B](https://huggingface.co/RadixArk/DaisyRose-27B) | RadixArk | 278 | 1,375 | A Qwen3.5-based 27B parameter model fine-tuned for specific capabilities, representing specialized multimodal fine-tuning approaches. |
| [Zyphra/ZONOS3-Mini](https://huggingface.co/Zyphra/ZONOS3-Mini) | Zyphra | 573 | 154,251 | A compact text-to-speech model using Zyphra's ZONOS architecture, optimized for efficient TTS synthesis with high audio quality. |
| [SulphurAI/Sulphur-3](https://huggingface.co/SulphurAI/Sulphur-3) | SulphurAI | 706 | 1,186 | A MiniMax-H3 based model representing cross-family knowledge transfer and specialized region-specific deployment. |

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | --- | ---: | ---: | :--- |
| [unsloth/Inkling-2-Mini-GGUF](https://huggingface.co/unsloth/Inkling-2-Mini-GGUF) | unsloth | 685 | 238,152 | A GGUF quantization of the Inkling-2-Mini model, leveraging unsloth's optimization framework for efficient MoE inference. |
| [AtomicChat/Inkling-2-Mini-Uncensored-GGUF](https://huggingface.co/AtomicChat/Inkling-2-Mini-Uncensored-GGUF) | AtomicChat | 288 | 9,540 | An uncensored GGUF port of Inkling-2-Mini, reflecting community demand for unfiltered model variants. |
| [thinkingmachines/Inkling-2-Mini](https://huggingface.co/thinkingmachines/Inkling-2-Mini) | thinkingmachines | 3,279 | 7,944 | The base Inkling-2-Mini model with image-text-to-text capabilities, representing the thinkingmachines lineup of specialized LLMs. |
| [thinkingmachines/Inkling-2-Small](https://huggingface.co/thinkingmachines/Inkling-2-Small) | thinkingmachines | 638 | 45,356 | A smaller variant of the Inkling-2 series with conversational capabilities, showing good adoption relative to its size. |
| [Qwen/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF) | DavidAU | 2,029 | 2,242,769 | A complex-named but popular Qwen3.5-9B quantized variant featuring "Defiant Fable" and "NEO Imatrix" fine-tuning, illustrating the trend of descriptive GGUF model naming. |

## Ecosystem Signal

The Hugging Face trending data from late November 2026 reveals a clear bifurcation in model popularity: massive, general-purpose models versus specialized, quantized variants. The Qwen3.8 family absolutely dominates the leaderboard, with the base 27B model and its GGUF quantizations from unsloth collectively amassing over 14 million downloads. This highlights two concurrent trends: the continued supremacy of Qwen as the open-weight LLM of choice, and the explosive growth of the GGUF quantization ecosystem making large models accessible on consumer hardware. Quantization is no longer a niche activity—unsloth's Qwen3.8-27B-GGUF alone pushes 7.5M downloads, while the "uncensored" and "Heretic" fine-tunes of Qwen3 models represent a significant community-driven subgenre experimenting with model alignment and behavior. Outside of language, Lightricks/LTX-2.5's 3M+ downloads confirm the sustained appetite for accessible video generation, though the multimodal space remains more fragmented than the LLM sector. Notably, the SAM3 release from Facebook maintains strong engagement at 1.85M downloads, suggesting that foundational computer vision models continue to attract substantial developer interest despite the LLM hype cycle. The data also reveals a naming convention trend where community fine-tunes employ elaborate, descriptive titles (e.g., "TURBO-Fable-Cold-Fusion-Heretic") that serve as both metadata and community signaling mechanisms.

## Worth Exploring

1. **unsloth/Qwen3.8-27B-GGUF** — This model is essential for anyone wanting to run a cutting-edge 27B parameter LLM locally. The unsloth quantization achieves a remarkable balance between size reduction and performance retention, making Qwen3.8's capabilities accessible without requiring multi-GPU setups. With 7.5 million downloads, it's clearly become the de facto standard for Qwen3.8 local inference.

2. **Lightricks/LTX-2.5** — For developers interested in multimodal generation beyond text, LTX-2.5 represents the most downloaded and well-established option currently available. Its support for text-to-video, image-to-video, and video-to-video in a single file format simplifies workflow integration, and the 3+ million downloads indicate mature, stable performance for creative applications.

3. **thinkingmachines/Inkling-2-Mini** — This model warrants attention for its unique position in the specialized LLM space. With image-text-to-text capabilities and a MoE architecture, it offers different capabilities compared to standard decoder-only models. The fact that both the base model and its GGUF quantization appear in the trending top 30 suggests a dedicated user community finding value in its particular approach to multimodal conversational AI.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*