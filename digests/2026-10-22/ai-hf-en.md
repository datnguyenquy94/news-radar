# Hugging Face Trending Models Digest 2026-10-22

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-10-22 04:20 UTC

---

**Today's Highlights**  
The Hugging Face Hub is buzzing with high‑impact multimodal releases. DeepSeek’s Flash‑1017 and Qwen 3.8‑27B dominate the LLM space, both offering powerful image‑text reasoning and racking up tens of thousands of likes.  Diffusion‑based creators keep the momentum alive – Black‑Forest Labs’ Flux‑3 variants and Lightricks’ LTX‑2.5 (image‑to‑video) together account for more than 10 k weekly likes.  Quantized community fine‑tunes (e.g., Qwen‑Image‑2.1‑Uncensored‑FP8) are exploding, delivering near‑state‑of‑the‑art generation on consumer‑grade hardware.

---

## Trending Models  

### 🧠 Language Models (LLMs, chat models, instruction‑tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 18,151 | 7,729,432 | A 27‑B multimodal LLM that handles image‑text tasks and conversation. Its open‑weight release has sparked massive adoption for research and prototyping. |
| [jialinyyzz/humanizer](https://huggingface.co/jialinyyzz/humanizer) | jialinyyzz | 2,070 | 120,930 | A 4‑B instruction‑tuned LLM that emphasizes human‑like response style. It quickly climbed the charts thanks to its low‑resource deployment and open‑source licensing. |
| [LiquidAI/LFM2.5-24B-A2B](https://huggingface.co/LiquidAI/LFM2.5-24B-A2B) | LiquidAI | 551 | 16,939 | 24‑B mixture‑of‑experts model tuned for code and reasoning tasks. Its strong benchmark scores and efficient routing make it a favorite for developers. |
| [RecursiveSI/flint](https://huggingface.co/RecursiveSI/flint) | RecursiveSI | 287 | 0 | A 500‑M conversational model with a focus on low‑latency chat. It’s trending among hobbyists exploring edge‑deployment. |
| [tencent/Hy-Memory-30B-A3B](https://huggingface.co/tencent/Hy-Memory-30B-A3B) | tencent | 275 | 2,682 | A 30‑B LLM emphasizing long‑context memory and retrieval‑augmented generation. Early adopters praise its “memory‑aware” completions. |
| [reflection/Beam-1.0-501B-A23B](https://huggingface.co/reflection/Beam-1.0-501B-A23B) | reflection | 210 | 3,555 | 501‑B Mixture‑of‑Experts model targeting complex reasoning and code synthesis. It’s gaining attention for its scalable architecture. |
| [nvidia/NVIDIA-Nemotron-3.5‑Super‑VL‑120B‑A12B‑NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4) | nvidia | 202 | 12,910 | 120‑B multimodal VL model optimized with NVIDIA’s Model Optimizer (FP4). Its high‑capacity vision‑language abilities are drawing research interest. |
| [XHToken/Spark-X2.6-4B](https://huggingface.co/XHToken/Spark-X2.6-4B) | XHToken | 190 | 85 | A compact 4‑B model fine‑tuned for multilingual chat. Its efficiency and small footprint have made it popular for mobile experiments. |
| [InternScience/Sage-A1.5](https://huggingface.co/InternScience/Sage-A1.5) | InternScience | 167 | 58 | 1.5‑B instruction model focused on scientific Q&A. Early citations show strong performance on domain‑specific benchmarks. |

### 🎨 Multimodal & Generation (image, video, audio, text‑to‑X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 8,774 | 2,057,942 | Single‑file diffusion model that turns images into high‑fidelity video. Its “one‑click” workflow has made it a top pick for creators. |
| [deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) | deepseek-ai | 2,198 | 42,122 | Vision‑language LLM delivering fast image‑question answering at 1017 token context. The open‑weight release fuels rapid experimentation. |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black-forest-labs | 1,203 | 490,447 | Flux‑3 diffusion model wrapped for ComfyUI, enabling high‑quality image‑to‑image editing. Its ease of integration drives community adoption. |
| [black-forest-labs/flux-3-image-klein](https://huggingface.co/black-forest-labs/flux-3-image-klein) | black-forest-labs | 605 | 92,604 | Base Flux‑3 model for image‑to‑image and inpainting. Users favour it for its balance of speed and detail. |
| [fishaudio/drama-3](https://huggingface.co/fishaudio/drama-3) | fishaudio | 893 | 15,274 | Multispeaker TTS model that produces expressive dramatic narration. Its rich prosody makes it popular for audiobooks. |
| [OpenMOSS-Team/MOSS-Image-SFT](https://huggingface.co/OpenMOSS-Team/MOSS-Image-SFT) | OpenMOSS-Team | 539 | 5,840 | Instruction‑tuned text‑to‑image diffusion based on MOSS. Community praise centers on its consistent style control. |
| [OpenMOSS-Team/MOSS-Image-Base](https://huggingface.co/OpenMOSS-Team/MOSS-Image-Base) | OpenMOSS-Team | 470 | 4,344 | The base version of the MOSS image model, widely used as a starting point for custom fine‑tunes. |
| [meta-models/Muse-Spark-Open-816B-A42B](https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B) | meta-models | 640 | 2,891 | 816‑B multimodal model that excels at image‑grounded generation and captioning. Its open‑weight release has ignited research on large vision‑language systems. |
| [lodestones/Kromoss](https://huggingface.co/lodestones/Kromoss) | lodestones | 206 | 11,608 | Compact text‑to‑image diffusion fine‑tuned for artistic style transfer. Its small size and fast inference attract mobile developers. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2) | google | 2,813 | 179,734 | Dense embedding model optimized for semantic search and retrieval. Its open‑source license and high throughput make it a go‑to for indexing pipelines. |
| [datalab-to/indra-ocr](https://huggingface.co/datalab-to/indra-ocr) | datalab-to | 343 | 3,588 | ONNX‑based OCR model that runs efficiently on CPU. It’s trending for low‑resource document processing. |
| [mistralai/Timestral-209M](https://huggingface.co/mistralai/Timestral-209M) | mistralai | 265 | 5,488 | Time‑series forecasting transformer that delivers accurate long‑horizon predictions with modest compute. Early adopters use it for energy‑grid forecasting. |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 4,850 | 1,906,176 | Vision‑segmentation model that generates masks for video frames. Its high‑resolution mask quality drives adoption in video editing tools. |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 4,859 | 2,127,860 | Large‑scale transformer OCR that extracts text from any language and layout. Its “unlimited” claim and massive downloads reflect enterprise interest. |
| [orcarouter/OrcaCyber-Nano-1.0](https://huggingface.co/orcarouter/OrcaCyber-Nano-1.0) | orcarouter | 173 | 19,697 | Small vision‑language model fine‑tuned on cybersecurity reports and reverse‑engineering data. Researchers are testing it for automated threat‑intel extraction. |

### 📦 Fine‑tunes & Quantizations (community fine‑tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Comfy-Org/MOSS-Image](https://huggingface.co/Comfy-Org/MOSS-Image) | Comfy-Org | 341 | 1,290,080 | Community‑packaged diffusion checkpoint for ComfyUI, built on the MOSS‑Image base. Its huge download count signals a thriving UI‑driven diffusion ecosystem. |
| [abenzerps/Qwen-Image-2.1-Uncensored-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-Quantized) | abenzerps | 4,778 | 2,738,344 | GGUF‑quantized Qwen‑Image‑2.1 (FP8) delivering near‑full quality image generation on CPU/GPU laptops. The drastic size reduction fuels the “run‑anywhere” trend. |
| [nvidia/Qwen3.8-Flash-Next-FP4-Local](https://huggingface.co/nvidia/Qwen3.8-Flash-Next-FP4-Local) | nvidia | 294 | 9,340 | FP4‑quantized version of Qwen‑3.8 optimized for local inference with NVIDIA’s Model Optimizer. Early benchmarks show 2‑3× speed‑up with <1 % quality loss. |
| [lodestones/MOSS-Image-SFT-8-steps-dmd](https://huggingface.co/lodestones/MOSS-Image-SFT-8-steps-dmd) | lodestones | 194 | 68,289 | A lightweight 8‑step fine‑tune of MOSS‑Image aimed at fast, low‑runtime generation. Users favor it for rapid prototyping in web‑apps. |
| [dealignai/DeepSeek-V4.1-Flash-1017-UNCENSORED-FP8](https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-1017-UNCENSORED-FP8) | dealignai | 212 | 3,458 | FP8‑quantized DeepSeek‑Flash‑1017 exposing uncensored content for research. Its compact size (≈1 GB) enables edge‑device experimentation. |
| [meta-models/Muse-Spark-Open-816B-A42B-NVFP4](https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B-NVFP4) | meta-models | 204 | 6,507 | NVIDIA‑FP4 quantization of the 816‑B Muse‑Spark model, delivering multimodal inference on a single RTX 4090. The release has sparked talks on large‑scale vision‑language deployment. |

---

## Ecosystem Signal  

The hub’s current pulse is unmistakable: **large‑scale multimodal foundations** (Qwen 3.8, DeepSeek‑Flash, Muse‑Spark) continue to dominate likes, confirming a community shift toward vision‑language and video‑centric AI.  Diffusion‑based image/video creators—Flux‑3 and LTX‑2.5—are the second‑most popular class, reflecting demand for high‑quality generative media.  Open‑weight models remain the main driver of traffic, yet **quantization** is exploding; GGUF/FP4/FP8 variants of flagship models now occupy a sizable share of downloads, indicating that developers prioritize runtime efficiency as much as raw capability.  Community fine‑tunes (MOSS‑Image, Comfy‑UI packs) and domain‑specific adaptations (OCR, cybersecurity) illustrate a maturing ecosystem where baseline vision‑language backbones are rapidly repurposed for niche applications.

---

## Worth Exploring  

1. **Lightricks/LTX-2.5** – Its single‑file diffusion pipeline turns static images into smooth video clips with minimal setup, making it the most accessible entry point for video generation research.  
2. **Qwen/Qwen3.8-27B** – The flagship 27 B multimodal LLM offers state‑of‑the‑art image‑text reasoning while staying fully open‑weight, ideal for probing large‑scale vision‑language capabilities.  
3. **abenzerps/Qwen-Image-2.1-Uncensored-Quantized** – This GGUF‑quantized image generator delivers near‑full model quality on consumer hardware, perfect for developers who need high‑fidelity image synthesis without a GPU cluster.  

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*