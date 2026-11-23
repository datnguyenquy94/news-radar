# Hugging Face Trending Models Digest 2026-11-23

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-11-23 07:09 UTC

---

# Hugging Face Trending Models Digest — 2026-11-23

## Today's Highlights

The trending leaderboard is currently dominated by Qwen3.8-27B variants, with the base model and multiple GGUF quantizations occupying the top spots. Simultaneously, the Inkling-2 family from thinkingmachines and unsloth continues to gain traction as a competitive open-source multimodal option. Notably, Lightricks' LTX-2.5 remains a powerhouse in the video generation space, reflecting sustained demand for efficient text-to-video models. The emergence of specialized variants—such as uncensored, abliterated, and turbo-tuned versions—highlights a vibrant community-driven fine-tuning ecosystem.

## Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 20,952 | 6,297,396 | The flagship Qwen3.8-27B leads the leaderboard with over 20k weekly likes and 6.3M downloads, serving as the base model for numerous fine-tuned variants. |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 6,368 | 7,683,660 | A highly optimized GGUF quantization of Qwen3.8-27B that bridges the gap between performance and edge deployability, accruing significant download volume. |
| [harness-hub/Qwen3.8-27B-pi-adapted](https://huggingface.co/harness-hub/Qwen3.8-27B-pi-adapted) | harness-hub | 998 | 2,831 | An instruction-tuned adapter leveraging RLHF and async-GRPO, showcasing the latest alignment techniques for the Qwen3.8 architecture. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 3,580 | 1,827,784 | A heavily named, community-driven uncensored GGUF fusion model that combines multiple tuning motifs (Turbo, Fable, Heretic) for specialized use cases. |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 2,524 | 4,534,445 | An abliterated GGUF variant of Qwen3.8-27B that removes safety guardrails, attracting attention for its raw capabilities and high download count. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 13,095 | 2,993,088 | The current leader in image and text-to-video generation, capable of image-to-video, text-to-video, and video-to-video with high fidelity and efficiency. |
| [thinkingmachines/Inkling-2-Mini](https://huggingface.co/thinkingmachines/Inkling-2-Mini) | thinkingmachines | 5,129 | 23,543 | A compact multimodal model combining image and text inputs for text generation, representing the latest iteration of the Inkling series. |
| [unsloth/Inkling-2-Mini-GGUF](https://huggingface.co/unsloth/Inkling-2-Mini-GGUF) | unsloth | 939 | 805,993 | A GGUF-quantized version of Inkling-2-Mini that enables low-vision deployments while preserving the model's multimodal conversational abilities. |
| [inworld/voice-isolator](https://huggingface.co/inworld/voice-isolator) | inworld | 656 | 0 | A specialized audio-to-audio pipeline for voice isolation and speech enhancement, trending within the AI audio research community. |
| [higurashi-ai/Haru-4B](https://huggingface.co/higurashi-ai/Haru-4B) | higurashi-ai | 906 | 8,608 | A full-duplex speech-to-speech model that supports real-time, bidirectional conversation, gaining traction for its low-latency capabilities. |

### 🔧 Specialized Models (code, math, medical, embeddings)

*No models in the top 30 fit the specialized code, math, medical, or embeddings criteria based on their tags.*

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Inkling-2-Mini-GGUF](https://huggingface.co/unsloth/Inkling-2-Mini-GGUF) | unsloth | 939 | 805,993 | Featured here for its quantization work; enables the Inkling-2-Mini to run on consumer hardware via the GGUF format. |
| [AtomicChat/Inkling-2-Mini-Uncensored-GGUF](https://huggingface.co/AtomicChat/Inkling-2-Mini-Uncensored-GGUF) | AtomicChat | 531 | 129,693 | An uncensored GGUF fine-tune of Inkling-2-Mini, part of a broader trend of community-modified model variants. |
| [maxwell-model/Maxwell-V1-Flash](https://huggingface.co/maxwell-model/Maxwell-V1-Flash) | maxwell-model | 365 | 3,317 | A MoE (Mixture of Experts) text-generation model that offers a lightweight alternative to dense architectures. |
| [SulphurAI/Sulphur-3](https://huggingface.co/SulphurAI/Sulphur-3) | SulphurAI | 810 | 78,931 | A base model fine-tune based on MiniMax-H3, noted for its region-specific adaptations and high download volume. |
| [briaai/RMBG-3.0](https://huggingface.co/briaai/RMBG-3.0) | briaai | 340 | 225 | A specialized image-segmentation model for background removal, trending within diffusion and editing workflows. |

## Ecosystem Signal

The November 23, 2026, trend data reveals a pronounced consolidation around the Qwen3.8-27B family, which occupies the top three positions by weekly likes. This momentum is driven not only by the base model but also by a surge in community-driven GGUF quantizations (e.g., unsloth and DavidAU variants), which have collectively amassed millions of downloads, indicating a strong shift toward local, low-resource inference. Conversely, the multimodal sector is seeing diversified growth; Lightricks' LTX-2.5 maintains a dominant position in video generation, while the Inkling-2 family carves out a niche in efficient image-text-to-text applications. A notable trend is the proliferation of "suffix-laden" fine-tunes—models tagged with descriptors like "uncensored," "abliterated," and "turbo"—which reflect the community's experimentation with alignment removal and performance optimization. Open-weight models continue to dominate the leaderboard, with proprietary or restricted models largely absent from the top 30, underscoring Hugging Face's role as the primary distribution hub for accessible AI.

## Worth Exploring

1.  **Qwen3.8-27B (Base Model)**: It is the definitive starting point for anyone exploring the current state-of-the-art in open-language modeling. With nearly 21k weekly likes and 6.3M downloads, its architecture and tokenizer improvements over previous generations make it a benchmark for performance and versatility.
2.  **Lightricks/LTX-2.5**: For practitioners in video generation, this model is essential. It distinguishes itself by supporting a full suite of video tasks (text-to-video, image-to-video, video-to-video) within a single, efficient pipeline, outperforming many specialized alternatives in recent evaluations.
3.  **unsloth/Qwen3.8-27B-GGUF**: This quantization is worth studying for its technical achievement in compressing a 27-billion parameter model into a format that maintains robust functionality on consumer-grade hardware, exemplifying the current frontier of efficient AI deployment.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*