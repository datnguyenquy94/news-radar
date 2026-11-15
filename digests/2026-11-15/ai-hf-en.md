# Hugging Face Trending Models Digest 2026-11-15

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-11-15 05:59 UTC

---

### Today's Highlights

The Hugging Face leaderboard today reflects a vibrant ecosystem balancing raw power with extreme efficiency. Qwen models continue their dominance, particularly the Qwen3.8-27B family, which occupies multiple top spots and showcases a strong trend toward "Flash" and "Turbo" optimized variants. Concurrently, the MiniMax-H3 family is making significant waves in both text-to-image and video generation, signaling a shift toward highly capable multimodal models. Finally, there is a noticeable surge in community-driven fine-tunes and quantized variants (GGUF/Heretic), driven by the unsloth ecosystem, which prioritizes accessibility and local deployment over raw parameter count.

### Trending Models

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 20,029 | 6,757,964 | A flagship 27B parameter model leading the leaderboard, trending due to its strong performance in conversational tasks and its role as the base model for numerous optimized quantizations. |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 5,957 | 6,422,783 | The most downloaded model in this list, trending as the definitive entry point for local AI enthusiasts thanks to its GGUF quantization, which enables runnable models on consumer hardware. |
| [xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic](https://huggingface.co/xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic) | xtools-at | 7,391 | 24,470 | An uncensored, heretic-tuned variant of the Qwen3.5 architecture, trending for its unrestricted output capabilities and significant weekly like growth. |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 7,131 | 3,031,222 | A high-speed variant of the Qwen3.8 family, trending for its balance of performance and efficiency, labeled as "Flash" to denote next-generation inference optimization. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 3,131 | 1,657,783 | A heavily modified "Turbo" variant trending for its extreme optimization and combination of heretic/uncensored tags with MTP (Multi-Token Prediction) capabilities. |

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [MiniMaxAI/MiniMax-H3-Image](https://huggingface.co/MiniMaxAI/MiniMax-H3-Image) | MiniMaxAI | 1,128 | 517,948 | The standout text-to-image model of the day, trending due to massive download volume (over half a million) and the backing of the ComfyUI ecosystem, representing a strong challenger in the generative image space. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 11,949 | 2,777,667 | A top-tier image-to-video model trending for its high-fidelity motion generation and versatility, supporting text-to-video, image-to-video, and video-to-video pipelines. |
| [Viggle/Viggle-Remake](https://huggingface.co/Viggle/Viggle-Remake) | Viggle | 403 | 196,821 | A video-to-video model trending for its character replacement and editing capabilities, notably leveraging the MiniMax-H3 architecture for consistent character animation. |
| [speridlabs/idol](https://huggingface.co/speridlabs/idol) | speridlabs | 2,343 | 32,619 | An image-to-3D model trending for its use of Gaussian splatting, offering a unique approach to converting single images into 3D representations. |
| [Cactus-Compute/mirage](https://huggingface.co/Cactus-Compute/mirage) | Cactus-Compute | 304 | 24,452 | An image-to-text and zero-shot object detection model trending for its multimodal versatility, bridging the gap between vision and language grounding. |

#### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | --- | ---: | ---: | :--- |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 6,607 | 2,065,427 | The leading computer vision model today, trending for its advanced segmentation capabilities and integration into feature extraction pipelines for research and application. |
| [moonshotai/Kimi-K3.1-Pro](https://huggingface.co/moonshotai/Kimi-K3.1-Pro) | moonshotai | 2,081 | 43,687 | A specialized instruction-tuned model trending for its compressed tensor architecture, offering a balance of capability and resource efficiency. |
| [Zyphra/ZONOS3-Mini](https://huggingface.co/Zyphra/ZONOS3-Mini) | Zyphra | 352 | 19,743 | A text-to-speech model trending for its high-quality audio output and use of GGUF formatting, catering to the on-device TTS market. |
| [thinkingmachines/Inkling-2-Small](https://huggingface.co/thinkingmachines/Inkling-2-Small) | thinkingmachines | 321 | 3,647 | A conversational image-text model trending for its small footprint and efficiency in multimodal dialogue tasks. |
| [ConceptCountry/qwen-concept-27b](https://huggingface.co/ConceptCountry/qwen-concept-27b) | ConceptCountry | 261 | 63,439 | A concept-based reasoning model trending for its focus on weight-editing and structured knowledge editing within the Qwen framework. |

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | --- | ---: | ---: | :--- |
| [DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF) | DavidAU | 1,773 | 2,139,868 | A quintessential "heretic" quantization trending for its NEO Imatrix fine-tuning and MTP GGUF configuration, representing the cutting edge of community-driven model customization. |
| [mradermacher/gemma-4-31B-it-ARA-heretic-GGUF](https://huggingface.co/mradermacher/gemma-4-31B-it-ARA-heretic-GGUF) | mradermacher | 289 | 116,423 | A quantized fine-tune of Gemini architecture trending for its heretic/uncensored stance and compatibility with GGUF formats for local inference. |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 2,145 | 4,094,475 | A heavily ablated/uncensored quantized model trending for massive download numbers, reflecting high community demand for open, customized LLM experiences. |
| [Edge0/Edge0-145B-NVFP4](https://huggingface.co/Edge0/Edge0-145B-NVFP4) | Edge0 | 266 | 33,819 | A massive MoE (Mixture of Experts) model trending for its NVFP4 precision, pushing the boundaries of what is possible with extremely large, sparse models. |
| [adventists-ai/Sophon-Realtime-v1](https://huggingface.co/adventists-ai/Sophon-Realtime-v1) | adventists-ai | 263 | 0 | A unique any-to-any model trending for its real-time full-duplex speech capabilities, though currently showing zero downloads, signaling a niche but innovative pipeline. |

### Ecosystem Signal

The current Hugging Face landscape is characterized by a dichotomy between **scale and accessibility**. On one side, we see the continued ascendancy of the Qwen family (notably Qwen3.8), which serves as the de facto base model for the majority of high-performing quantized and fine-tuned variants. The "Flash" and "Turbo" naming conventions observed across multiple entries indicate a maturing ecosystem focused on inference optimization, moving beyond mere parameter count to efficiency. On the other side, there is a explosive growth in "Heretic," "Uncensored," and "Abliterated" GGUF models. These community-driven quantization packs prioritize local deployment on consumer GPUs and CPUs, stripping away restrictions and optimizing for specific hardware metrics. Furthermore, the MiniMax-H3 family's presence in both image and video generation suggests a consolidation of a single, powerful multimodal backbone capable of handling diverse generative tasks, challenging the dominance of diffusion-based models like Stable Diffusion in certain niches.

### Worth Exploring

1.  **`unsloth/Qwen3.8-27B-GGUF`**: This model is the most critical entry point for anyone looking to run a state-of-the-art LLM locally. With nearly 6.5 million downloads, it represents the practical victory of quantization technology, allowing the 27B parameter Qwen3.8 to run on a single consumer GPU with acceptable performance.
2.  **`MiniMaxAI/MiniMax-H3-Image`**: For generative AI artists and developers, this model is worth studying due to its unprecedented download volume (over 500k) within the text-to-image category. Its integration with ComfyUI and the broader MiniMax ecosystem makes it a powerful, modern alternative to traditional diffusion pipelines.
3.  **`facebook/sam3`**: Despite being a research-focused segmentation model, its high like count and download numbers make it essential for anyone working in computer vision. It sets the standard for "next-generation" foundation models in visual understanding, outperforming many older detection and segmentation architectures.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*