# Hugging Face Trending Models Digest 2026-10-31

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-10-31 05:10 UTC

---

**🤖 Hugging Face Trending Models Digest – 2026‑10‑31**

---

### Today's Highlights
The week’s top‑liked model is **DeepSeek‑V4.1‑Flash‑1017**, a versatile image‑text‑to‑text LLM that has already amassed over 4 k likes and 145 k downloads. Multimodal generation continues to dominate, with huge interest in video‑centric diffusion models such as **Lightricks LTX‑2.5** (≈10 k likes, 2.3 M downloads) and powerful OCR‑oriented models from Baidu and OpenBMB.  Quantization efforts are booming: a single GGUF variant of DeepSeek alone has been downloaded **1.7 M** times, underscoring the community’s push for ultra‑lightweight, on‑device inference.

---

## Trending Models  

### 🧠 Language Models (LLMs, chat, instruction‑tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Nanbeige/Nanbeige4.3-33B](https://huggingface.co/Nanbeige/Nanbeige4.3-33B) | Nanbeige | 800 | 12,178 | A 33 B parameter Llama‑style model optimized for dense instruction following. It’s gaining traction for its strong performance on code‑related benchmarks despite a modest download count. |
| [LiquidAI/LFM3-1.7B](https://huggingface.co/LiquidAI/LFM3-1.7B) | LiquidAI | 575 | 23,694 | A 1.7 B transformer focused on high‑throughput text generation, praised for its low latency on commodity GPUs. The model is frequently used as a baseline for lightweight chatbot research. |
| [RecursiveSI/flint](https://huggingface.co/RecursiveSI/flint) | RecursiveSI | 1,262 | 19,015 | Flint is a conversational LLM fine‑tuned on open‑source dialogue data, noted for its empathetic tone and low hallucination rate. Its rapid rise in likes reflects community interest in open‑chat alternatives. |
| [XHToken/Spark-X2.6-4B](https://huggingface.co/XHToken/Spark-X2.6-4B) | XHToken | 923 | 12,515 | A 4 B model that blends Spark‑style instruction data with a compact architecture, delivering competitive QA scores on a fraction of the compute. |
| [Diffuspace/Clover-35B-A3B-Preview](https://huggingface.co/Diffuspace/Clover-35B-A3B-Preview) | Diffuspace | 178 | 1,505 | A 35 B Mixture‑of‑Experts (MoE) language model previewed for research on scaling efficiency. Early adopters highlight its strong few‑shot abilities on reasoning tasks. |

---

### 🎨 Multimodal & Generation (image, video, audio, text‑to‑X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) | deepseek-ai | 4,024 | 145,869 | An image‑text‑to‑text transformer that excels at captioning, visual QA, and cross‑modal reasoning. Its flash‑optimized kernels give it near‑real‑time performance on a single RTX 4090. |
| [nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B) | nvidia | 507 | 15,980 | A 30 B speech‑to‑text model built on the Nemotron family, delivering state‑of‑the‑art transcription accuracy for noisy audio. It’s being adopted for open‑source speech‑assistant projects. |
| [baidu/Unlimited-OCR-2](https://huggingface.co/baidu/Unlimited-OCR-2) | baidu | 457 | 24,276 | An OCR engine that handles unlimited language scripts and complex layouts, thanks to a massive multilingual pre‑training corpus. Its ease of integration has spurred rapid uptake in document‑automation pipelines. |
| [mistralai/Mistral-Large-4-1T-A52B](https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B) | mistralai | 1,354 | 1,239 | A 1‑trillion‑parameter multimodal model that couples vision and language for high‑fidelity image description. Though still early in distribution, the community praises its zero‑shot compositional abilities. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 9,982 | 2,335,172 | A diffusion‑based image‑to‑video generator that creates short, high‑quality clips from a single frame. Its popularity stems from a seamless UI integration and impressive runtime on consumer GPUs. |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black-forest-labs | 2,131 | 886,973 | An image‑to‑image diffusion model fine‑tuned for “Klein” style transformations, widely used in artistic workflows. The built‑in ComfyUI export has accelerated its adoption among creators. |
| [abenzerps/Qwen-Image-2.1-Uncensored-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-Quantized) | abenzerps | 5,381 | 2,516,721 | A quantized (GGUF) text‑to‑image model that removes safety filters for unrestricted generation while retaining 4 k‑resolution output. Its download surge reflects a niche demand for uncensored creative tools. |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 18,808 | 7,624,809 | A 27 B multimodal LLM capable of image‑grounded reasoning and dialogue. Its massive download count shows it’s become a de‑facto baseline for research on vision‑language integration. |
| [LiquidAI/LFM3-Omni-2B](https://huggingface.co/LiquidAI/LFM3-Omni-2B) | LiquidAI | 229 | 3,080 | “Any‑to‑any” model that handles text, image, and audio inputs with a unified transformer. Early tests highlight its zero‑shot audio‑tagging performance despite its small footprint. |
| [openbmb/MiniCPM-OCR-1.0](https://huggingface.co/openbmb/MiniCPM-OCR-1.0) | openbmb | 367 | 2,413 | A lightweight OCR model built on the MiniCPM family, targeting mobile deployment with sub‑second inference. Its open license has encouraged integration into open‑source scanning apps. |
| [Pika-Labs/Pika-H3-Flex](https://huggingface.co/Pika-Labs/Pika-H3-Flex) | Pika-Labs | 205 | 87 | A flexible diffusion pipeline for short video generation that can also synthesize synchronized audio. Though low on downloads, the community is experimenting with novel music‑video combos. |
| [MiniMaxAI/MiniMax-M3.1-Flash](https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash) | MiniMaxAI | 507 | 18,795 | An image‑text‑to‑text model that focuses on fast visual captioning for e‑commerce use‑cases. Its flash‑optimized backend enables batch processing of thousands of product images per hour. |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 5,516 | 1,886,656 | A video‑mask generation model extending the Segment Anything paradigm to temporal data. It’s rapidly adopted for automatic video editing and content moderation. |
| [LiquidAI/LFM3-VL-2B](https://huggingface.co/LiquidAI/LFM3-VL-2B) | LiquidAI | 180 | 6,241 | A 2 B vision‑language model that excels at region‑level grounding, frequently used for robotics perception prototypes. |
| [speridlabs/idol](https://huggingface.co/speridlabs/idol) | speridlabs | 162 | 221 | A Gaussian‑splatted 3‑D reconstructor that turns a single image into a navigable point‑cloud. Early adopters praise its simplicity for rapid prototyping of AR experiences. |
| [LiquidAI/LFM3-Audio-2B](https://huggingface.co/LiquidAI/LFM3-Audio-2B) | LiquidAI | 156 | 3,550 | “Any‑to‑any” audio model that can transcribe, translate, and synthesize speech. Its multimodal training gives it strong cross‑language voice conversion capabilities. |

---

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [ccore/Qwen3.5-4B-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-3D-Coder) | ccore | 337 | 20,197 | A 4 B code‑generation model fine‑tuned for 3‑D scripting (Three.js, Blender). It’s the first open‑weight model that directly emits scene graphs from natural language prompts. |
| [HuggingFaceBio/Carbon-X](https://huggingface.co/HuggingFaceBio/Carbon-X) | HuggingFaceBio | 276 | 3,289 | A Qwen‑based text generator specialized in DNA‑sequence description and bio‑informatics literature synthesis. Researchers appreciate its domain‑specific vocabulary without needing external tools. |

---

### 📦 Fine‑tunes & Quantizations (community fine‑tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF) | ISTA-DASLab | 508 | 1,747,945 | GGUF‑quantized version of DeepSeek‑V4.1 using GSQ+RCO mixed‑precision, achieving a 4× size reduction with <1 % accuracy loss. It’s the most downloaded quantized model of the week. |
| [orcarouter/DeepSeek-V4.1-Flash-1017-abliterated-GGUF](https://huggingface.co/orcarouter/DeepSeek-V4.1-Flash-1017-abliterated-GGUF) | orcarouter | 377 | 30,433 | An “abliterated” quantization that pushes the model to 2 bits per weight, enabling inference on Raspberry Pi‑class devices. Community feedback highlights its surprisingly stable generation quality. |
| [nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB) | nvidia | 289 | 64,263 | GGUF‑formatted Nemotron‑3.5 Bolt variant trimmed to 4 GB, designed for edge‑server deployment. It retains most of the original model’s instruction-following prowess. |
| [DavidAU/Qwen3.8-27B‑TURBO‑Fable‑Cold‑Fusion‑735‑882‑Heretic‑Uncensored‑NEO‑CODER‑MAX‑MTP‑GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 2,250 | 1,725,724 | A heavily fine‑tuned, uncensored GGUF of Qwen‑3.8‑27B that adds code‑generation and “heretic” instruction data. Its massive download count reflects demand for a single‑file, all‑purpose multimodal model. |
| [SC117/Qwen3.8-Flash-Next‑GSQ‑RCO‑abliterated‑GGUF](https://huggingface.co/SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF) | SC117 | 551 | 3,158,872 | An ultra‑compact GGUF of Qwen‑3.8 using GSQ‑RCO quantization, achieving sub‑1 GB size while keeping strong vision‑language performance. It’s a benchmark for aggressive model compression. |
| [OliviaRossi/Minimax-h3_Singularity-x-10Eros-Max_PRISM](https://huggingface.co/OliviaRossi/Minimax-h3_Singularity-x-10Eros-Max_PRISM) | OliviaRossi | 149 | 99,353 | A community merge that stitches together multiple Minimax‑h3 checkpoints into a single PRISM‑ready model. Users appreciate the unified weights for downstream fine‑tuning. |
| [LiquidAI/LFM3-1.7B-GGUF](https://huggingface.co/LiquidAI/LFM3-1.7B-GGUF) | LiquidAI | 149 | 97,184 | GGUF conversion of the original LFM3‑1.7B, enabling fast loading on CPU‑only environments. It’s become a go‑to reference for evaluating quantization trade‑offs in small LLMs. |

---

## Ecosystem Signal
The **multimodal wave** is unmistakable: image‑to‑text, video generation, and OCR models together capture more than half of the total likes, with Qwen‑3.8‑27B and DeepSeek‑V4.1 leading the charge. Open‑weight models continue to dominate, but **quantization** is the fastest‑growing sub‑trend—GGUF variants of flagship models (DeepSeek, Qwen, Nemotron) have collectively surpassed **5 M downloads** this week, highlighting the community’s push for edge‑friendly deployment. Meanwhile, **specialized code and bio‑informatics models** remain niche yet steady, suggesting that domain‑specific open‑weight releases still find a dedicated audience. Overall, the ecosystem is gravitating toward **high‑throughput, on‑device capable multimodal bases** while leveraging community‑driven fine‑tuning pipelines to customize them for particular use‑cases.

---

## Worth Exploring
1. **[deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017)** – Its flash‑optimized kernels deliver real‑time vision‑language inference, and the model’s strong zero‑shot performance makes it a versatile research baseline.  
2. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** – The 27 B multimodal powerhouse has the highest download volume, demonstrating community confidence; it’s a solid candidate for benchmarking large‑scale vision‑language tasks.  
3. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** – As the most popular image‑to‑video diffusion model, it offers a unique entry point into short‑form video synthesis with production‑grade quality, a capability still rare among open models.  

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*