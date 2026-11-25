# Hugging Face Trending Models Digest 2026-11-25

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-11-25 08:03 UTC

---

Here is the structured Hugging Face Trending Models Digest for 2026-11-25.

### Today's Highlights

The trending landscape is currently dominated by **Qwen3.8** variants, which occupy the top two spots by a wide margin, signaling sustained momentum for the Qwen family. Concurrently, the **Inkling-2** series from thinkingmachines continues to generate significant buzz, particularly in quantized and uncensored variants, reflecting a strong community interest in open-weight alternatives. Finally, a notable surge in multimodal activity is evident, with Lightricks' LTX-2.5 leading image-to-video generation and Apple's DepthPro2 making waves in depth estimation, highlighting a diverse set of breakthroughs beyond pure text models.

### Trending Models

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 21,742 | 6,122,057 | The flagship Qwen3.5 model leading the leaderboard, renowned for its advanced conversational abilities and massive adoption, serving as the backbone for numerous fine-tuned variants. |
| [thinkingmachines/Inkling-2-Mini](https://huggingface.co/thinkingmachines/Inkling-2-Mini) | thinkingmachines | 5,849 | 69,042 | A high-performing open-weight model balancing size and capability, trending strongly due to its versatile image-text-to-text pipeline and robust conversational design. |
| [harness-hub/Qwen3.8-27B-pi-adapted](https://huggingface.co/harness-hub/Qwen3.8-27B-pi-adapted) | harness-hub | 1,080 | 3,529 | A specialized PEFT and GRPO adaptation of Qwen3.8, trending for its focus on asynchronous GRPO training and efficient parameter-efficient fine-tuning. |
| [RadixArk/DaisyRose-27B](https://huggingface.co/RadixArk/DaisyRose-27B) | RadixArk | 360 | 2,475 | A Qwen3.5-based instruction-tuned model gaining traction for its strong performance in reasoning tasks and distinctive "daisyrose" branding within the community. |
| [SulphurAI/Sulphur-3](https://huggingface.co/SulphurAI/Sulphur-3) | SulphurAI | 959 | 160,965 | A MiniMax H3 base model fine-tune trending for its unique architecture and region-specific (US) deployment focus, attracting attention for its base model origins. |

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 13,344 | 3,024,745 | The undeniable leader in video generation, trending due to its high download count and support for image-to-video, text-to-video, and video-to-video pipelines. |
| [apple/DepthPro2](https://huggingface.co/apple/DepthPro2) | apple | 1,206 | 0 | A breakthrough in monocular depth estimation, trending for its "metric-depth" capabilities and association with cutting-edge AR/Vision research. |
| [facebook/sam-3d-body-dinov3](https://huggingface.co/facebook/sam-3d-body-dinov3) | facebook | 1,941 | 20,355 | A 3D human mesh recovery model based on SAM and DINOv3, trending for its ability to recover dense 3D body poses from single images. |
| [inworld/voice-isolator](https://huggingface.co/inworld/voice-isolator) | inworld | 836 | 12,733 | A specialized audio-to-audio model for voice isolation and speech enhancement, trending for its application in clean speech extraction and denoising. |
| [higurashi-ai/Haru-4B](https://huggingface.co/higurashi-ai/Haru-4B) | higurashi-ai | 981 | 9,575 | A full-duplex audio-to-audio model trending for its real-time speech-to-speech capabilities and focus on natural conversational flow. |

#### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | --- | ---: | ---: | :--- |
| [prism-ml/Ternary-Bonsai-2.5-27B-GGUF](https://huggingface.co/prism-ml/Ternary-Bonsai-2.5-27B-GGUF) | prism-ml | 171 | 0 | A pioneering 2-bit ternary quantized model trending for its extreme compression and novelty in the low-bit LLM space. |
| [nari-labs/Qwen3.8-27B-NariQ-GGUF](https://huggingface.co/nari-labs/Qwen3.8-27B-NariQ-GGUF) | nari-labs | 126 | 8,795 | A quantized Qwen3.8 variant trending for its focus on coding-agent capabilities and integration within the Nari Labs ecosystem. |
| [Aleph-Alpha/Kolibri-1.1](https://huggingface.co/Aleph-Alpha/Kolibri-1.1) | Aleph-Alpha | 117 | 272 | A MoE-focused model trending for its reasoning capabilities and vllm optimization, representing continued interest in sparse expert architectures. |
| [inclusionAI/Ling-3.2-air](https://huggingface.co/inclusionAI/Ling-3.2-air) | inclusionAI | 189 | 733 | A MoE-based model trending for its custom code integration and "bailing_moe_v3_vl" architecture, appealing to researchers in efficient routing. |
| [MemTensor/MemT-1.0-Pro](https://huggingface.co/MemTensor/MemT-1.0-Pro) | MemTensor | 99 | 397 | A custom code model trending for its Nemotron-inspired architecture and focus on specific text-generation benchmarks. |

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | --- | ---: | ---: | :--- |
| [unsloth/Inkling-2-Mini-GGUF](https://huggingface.co/unsloth/Inkling-2-Mini-GGUF) | unsloth | 1,286 | 1,913,407 | The most downloaded GGUF model this week, trending for bringing the Inkling-2-Mini architecture to local, quantized inference via the Unsloth ecosystem. |
| [AtomicChat/Inkling-2-Mini-Uncensored-GGUF](https://huggingface.co/AtomicChat/Inkling-2-Mini-Uncensored-GGUF) | AtomicChat | 768 | 573,775 | A highly popular uncensored GGUF variant of Inkling-2, trending for its removal of restrictions and strong community adoption for local use. |
| [orcarouter/Inkling-2-Mini-abliterated-GGUF](https://huggingface.co/orcarouter/Inkling-2-Mini-abliterated-GGUF) | orcarouter | 162 | 5,446 | An "abliterated" GGUF fine-tune of Inkling-2-Mini trending for its extreme uncensoring and local inference focus. |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-...-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 4,329 | 1,851,836 | A heavily named, quantized Qwen3.8 adaptation trending for its massive download count and association with unsloth and heretic fine-tuning techniques. |
| [tencent/Hy4-flash](https://huggingface.co/tencent/Hy4-flash) | tencent | 684 | 9,167 | A Hunyuan-based text-generation model trending for its "flash" optimization, indicating enterprise interest in high-throughput inference. |

### Ecosystem Signal

The current Hugging Face ecosystem reveals a **bimodal distribution of momentum**: on one side, the Qwen3.8 family continues its dominance, driven by both base model releases and a prolific wave of community fine-tunes and quantizations (notably by Unsloth and DavidAU), which are pushing the model into the 1.8M+ download tier. On the other side, the **Inkling-2** series has emerged as the primary beneficiary of the "open-weight local" trend, with its GGUF variants collectively amassing millions of downloads, signaling a shift towards smaller, quantizable architectures that balance performance with consumer-grade hardware accessibility. Furthermore, the surge in multimodal models like LTX-2.5 and DepthPro2 indicates that the platform is expanding beyond pure language, with significant investment in vision and audio processing capabilities. Finally, the proliferation of niche, quantized, and "uncensored" fine-tunes suggests a maturing market where users are increasingly prioritizing specific capabilities, privacy, and hardware compatibility over raw model scale.

### Worth Exploring

1.  **Lightricks/LTX-2.5**: This model is essential for anyone interested in the current state of AI video generation. With over 3 million downloads, it represents the most accessible high-quality text-to-video and image-to-video pipeline available on Hugging Face today. Its "single-file" diffusion architecture makes it particularly efficient to run locally, making it a benchmark for the democratization of video content creation.
2.  **unsloth/Inkling-2-Mini-GGUF**: For practitioners looking to run powerful LLMs on consumer hardware, this is the definitive choice. It bridges the gap between the high-capability Inkling-2-Mini and the practical constraints of GGUF quantization, offering the best trade-off between size (likely 2.7B or 3B parameters) and intelligence trending in the open-source space.
3.  **Qwen/Qwen3.8-27B**: Despite being the "established" leader, this model is worth studying for its architecture and the sheer velocity of its ecosystem. It serves as the foundational parent for the numerous fine-tunes (like the NariQ and Turbo variants) dominating the lower ranks of the trending list, making it the critical node to understand for anyone tracking the direction of LLM development in 2026.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*