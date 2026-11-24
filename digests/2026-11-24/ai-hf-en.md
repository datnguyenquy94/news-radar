# Hugging Face Trending Models Digest 2026-11-24

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-11-24 09:33 UTC

---

### Today's Highlights

The trending list for November 24, 2026, reveals a vibrant ecosystem dominated by rapid iteration in open-weight LLMs and specialized multimodal models. The "Inkling-2" family from `thinkingmachines` continues to dominate the conversational space, with the Mini and Small variants attracting significant community attention. A notable surge in quantization activity is evident, with multiple GGUF adaptations of Qwen3.8-27B and Qwen-Image models ranking highly, underscoring a strong demand for locally runnable, efficient inference. Furthermore, major tech players like Apple and NVIDIA are pushing forward with specialized foundations models—Apple's `DepthPro2` for monocular depth and NVIDIA's `Nemotron-3.5-Bolt` for text generation—indicating a shift towards domain-specific optimizations alongside general-purpose giants.

---

### Trending Models

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 21,693 | 6,185,088 | The flagship Qwen3.8-27B model leads the pack with massive download volume, establishing itself as a benchmark for conversational AI and multimodal tasks. |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 7,060 | 7,848,375 | A highly popular GGUF quantization of the Qwen3.8-27B, making this powerful model accessible for local inference and driving the current quantization trend. |
| [thinkingmachines/Inkling-2-Mini](https://huggingface.co/thinkingmachines/Inkling-2-Mini) | thinkingmachines | 5,592 | 41,888 | A capable image-text-to-text model that has quickly gained traction for its conversational abilities and efficient architecture. |
| [thinkingmachines/Inkling-2-Small](https://huggingface.co/thinkingmachines/Inkling-2-Small) | thinkingmachines | 1,454 | 55,885 | A smaller variant of the Inkling-2 series, balancing performance with accessibility, noted for its strong community engagement. |
| [harness-hub/Qwen3.8-27B-pi-adapted](https://huggingface.co/harness-hub/Qwen3.8-27B-pi-adapted) | harness-hub | 1,049 | 3,132 | An instruction-tuned and adapted version of Qwen3.8, focusing on alignment and GRPO-based fine-tuning techniques. |

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 13,232 | 3,002,698 | A state-of-the-art diffusion model for image-to-video and text-to-video generation, leading the video generation space with high fidelity. |
| [apple/FastFrames-L](https://huggingface.co/apple/FastFrames-L) | apple | 575 | 0 | Apple's finetuned Wan2.1 model for text-to-video, representing a significant push into generative video from a major hardware vendor. |
| [apple/DepthPro2](https://huggingface.co/apple/DepthPro2) | apple | 1,152 | 0 | A cutting-edge monocular depth estimation model that predicts metric depth, pushing the boundaries of single-image depth perception. |
| [tencent/Hy4-flash](https://huggingface.co/tencent/Hy4-flash) | tencent | 663 | 7,696 | A text-generation model from Tencent's Hunyuan lineup, noted for its speed and efficiency in text generation tasks. |
| [SulphurAI/Sulphur-3](https://huggingface.co/SulphurAI/Sulphur-3) | SulphurAI | 865 | 133,732 | A base model from MiniMaxAI, serving as a foundational LLM for various multimodal and text applications. |

#### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 8,054 | 1,779,562 | The latest iteration of the Segment Anything Model, optimized for video and 3D feature extraction, widely used in computer vision. |
| [facebook/sam-3d-body-dinov3](https://huggingface.co/facebook/sam-3d-body-dinov3) | facebook | 1,858 | 20,355 | A specialized model for 3D human mesh recovery and pose estimation, leveraging DINOv3 backbone. |
| [nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB) | nvidia | 1,491 | 206,652 | A compact, efficient MoE (Mixture of Experts) model from NVIDIA designed for text generation with reduced footprint. |
| [inworld/voice-isolator](https://huggingface.co/inworld/voice-isolator) | inworld | 759 | 0 | A specialized audio processing model for voice isolation and speech enhancement, crucial for real-time communication. |
| [higurashi-ai/Haru-4B](https://huggingface.co/higurashi-ai/Haru-4B) | higurashi-ai | 945 | 9,087 | A speech-to-speech model enabling full-duplex conversational AI with natural audio flow. |

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 7,060 | 7,848,375 | (Appears here due to cross-category relevance) The definitive GGUF port of Qwen3.8-27B, enabling ultra-low-bit inference. |
| [AtomicChat/Inkling-2-Mini-Uncensored-GGUF](https://huggingface.co/AtomicChat/Inkling-2-Mini-Uncensored-GGUF) | AtomicChat | 691 | 329,497 | A GGUF-unlocked, uncensored version of Inkling-2-Mini, reflecting the community's demand for open, unrestricted models. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-...-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 4,291 | 1,833,410 | A heavily optimized and named GGUF variant of Qwen3.8-27B, showcasing the creativity and fine-tuning activity in the unsloth ecosystem. |
| [MiniMaxAI/MiniMax-H3-Image](https://huggingface.co/MiniMaxAI/MiniMax-H3-Image) | MiniMaxAI | 2,498 | 972,272 | A text-to-image diffusion model based on the H3 architecture, gaining popularity for image generation tasks. |
| [Sentinel7/h3](https://huggingface.co/Sentinel7/h3) | Sentinel7 | 1,667 | 0 | A model associated with the H3 architecture, noted for its specific regional and audience constraints. |

---

### Ecosystem Signal

The current Hugging Face landscape is characterized by a dichotomy between massive, general-purpose models and highly specialized, efficient adaptations. The Qwen3.8 family dominates the leaderboard, not only in its base form but also through an explosion of GGUF quantizations (`unsloth/Qwen3.8-27B-GGUF`, `DavidAU/...`), which together amass tens of millions of downloads. This quant activity is the primary driver of accessibility, allowing users with consumer hardware to run models that would otherwise require datacenter GPUs. Simultaneously, the "Inkling-2" series exemplifies the success of niche, multimodal LLMs that bridge the gap between vision and language. There is also a clear trend of major tech vendors (Apple, NVIDIA, Tencent) publishing their internal research and model weights, legitimizing the open-weight movement and providing curated, optimized pipelines for specific tasks like depth estimation and video generation. Finally, the presence of "Uncensored" and "Heretic" variants highlights a persistent, community-driven demand for model freedom and flexibility, often pushing the boundaries of standard safety alignments.

---

### Worth Exploring

1.  **`unsloth/Qwen3.8-27B-GGUF`**: This model is the top priority for anyone looking to run a state-of-the-art LLM locally. With over 7.8 million downloads, it represents the gold standard for GGUF optimization of a large instruction-following model, offering a rare balance of capability and offline accessibility.
2.  **`Lightricks/LTX-2.5`**: For developers and creatives interested in generative video, this is the current benchmark. Its high like count (13k) and massive download volume (3M+) indicate it is the most accessible high-quality text-to-video and image-to-video model currently available on the hub.
3.  **`facebook/sam3`**: If computer vision or image segmentation is the goal, SAM3 is the essential tool. As the latest iteration of the Segment Anything Model, it represents the cutting edge of promptable segmentation and is widely adopted in both research and industry pipelines for its versatility with video and 3D data.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*