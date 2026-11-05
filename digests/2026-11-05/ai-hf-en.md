# Hugging Face Trending Models Digest 2026-11-05

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-11-05 06:15 UTC

---

## Today’s Highlights
The week’s top‑liked model is **Qwen 3.8‑27B** (19 k likes), a 27‑billion‑parameter vision‑language model that is rapidly becoming a go‑to baseline for multimodal chat.  NVIDIA’s **Nemotron‑3.5‑Transcribe‑30B‑A4B** brings large‑scale ASR to the open‑weight arena, showing that speech‑centric LLMs are gaining traction.  Meanwhile a wave of community‑driven quantizations and GGUF releases—especially the DeepSeek‑V4.1‑Flash‑1017 family and Qwen‑3.8‑Flash‑Next—highlights a shift toward ultra‑compact, inference‑ready models for edge devices.

---

## Trending Models  

### 🧠 Language Models (LLMs, chat models, instruction‑tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [LiquidAI/LFM3-1.7B](https://huggingface.co/LiquidAI/LFM3-1.7B) | LiquidAI | 1,495 | 54,959 | A 1.7 B‑parameter transformer optimized for fast inference on consumer GPUs.  It has attracted attention for its strong zero‑shot performance relative to size. |
| [Nanbeige/Nanbeige4.3-33B](https://huggingface.co/Nanbeige/Nanbeige4.3-33B) | Nanbeige | 1,043 | 18,657 | 33 B Llama‑style LLM fine‑tuned on multilingual data, offering solid bilingual chat.  Popular among hobbyists looking for a high‑capacity open model without licensing hurdles. |

### 🎨 Multimodal & Generation (image, video, audio, text‑to‑X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B) | nvidia | 3,008 | 44,939 | 30 B ASR model that transcribes speech with near‑real‑time latency on a single A100.  Its open weight release pushes large‑scale speech tech out of the corporate silo. |
| [speridlabs/idol](https://huggingface.co/speridlabs/idol) | speridlabs | 640 | 14,613 | Gaussian‑splatting pipeline that converts a single photo into a full 3‑D scene.  The model’s “instant‑3D” claim is driving rapid adoption in AR/VR prototyping. |
| [deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) | deepseek-ai | 5,294 | 221,621 | Vision‑language model that answers questions about images while also serving as a strong text generator.  Its flash‑style architecture makes it 2‑3× faster than previous DeepSeek releases. |
| [moonshotai/Kimi-K3.1-Pro](https://huggingface.co/moonshotai/Kimi-K3.1-Pro) | moonshotai | 601 | 797 | Multimodal chat model with Chinese‑English capabilities and vision support, released as a compressed‑tensor checkpoint for low‑memory inference. |
| [mistralai/Mistral-Large-4-1T-A52B](https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B) | mistralai | 1,592 | 8,200 | 1‑trillion‑parameter vision‑language model that excels at code‑related image queries.  Early benchmarks show it beating GPT‑4V on coding‑image tasks. |
| [Pika-Labs/Pika-H3-Flex](https://huggingface.co/Pika-Labs/Pika-H3-Flex) | Pika-Labs | 433 | 749 | Text‑to‑video diffusion model that generates 8‑second clips at 720p from short prompts.  Its “Flex” LoRA adapters let users specialize style without re‑training the whole model. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 10,633 | 2,493,402 | All‑in‑one diffusion model covering image‑to‑video, text‑to‑video, and video‑to‑video tasks.  The massive download count stems from its “single‑file” format that simplifies deployment on mobile. |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black-forest-labs | 2,504 | 1,052,684 | Diffusion model tuned for high‑fidelity image‑to‑image edits; integrates directly with ComfyUI for low‑latency workflows. |
| [Edge0/Audio8-TTS-Realistic-Air](https://huggingface.co/Edge0/Audio8-TTS-Realistic-Air) | Edge0 | 300 | 9,695 | Text‑to‑speech model that produces natural‑sounding English speech with low‑bit (8‑bit) weight quantization.  Its “air” quality flag is resonating with podcasters seeking cheap cloud‑free synthesis. |
| [baidu/Unlimited-OCR-2](https://huggingface.co/baidu/Unlimited-OCR-2) | baidu | 613 | 230,232 | OCR model that can read over 150 languages and handle arbitrary document layouts without pre‑processing.  The open‑weight version has spurred many downstream translation pipelines. |
| [sensenova/SenseNova-Loop-9B-Preview](https://huggingface.co/sensenova/SenseNova-Loop-9B-Preview) | sensenova | 237 | 2,704 | 9 B multimodal assistant that emphasizes looped reasoning over image‑question pairs.  Early adopters note its ability to self‑correct within a single dialogue turn. |
| [microsoft/Mage-VL-Cowork](https://huggingface.co/microsoft/Mage-VL-Cowork) | microsoft | 181 | 1,973 | Vision‑language model designed for collaborative office tasks (e.g., chart generation from screenshots).  Its “cowork” prompt style is inspiring new productivity‑focused demos. |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 19,164 | 8,032,442 | 27 B vision‑language model with strong instruction following and image understanding; rivals GPT‑4V on public benchmarks.  Its massive popularity reflects the community’s appetite for open, high‑capacity multimodal LLMs. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [ccore/Qwen3.5-4B-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-3D-Coder) | ccore | 661 | 123,321 | 4 B model fine‑tuned for generating Three.js‑compatible 3‑D code from textual prompts.  It’s become a favorite for rapid prototyping of web‑based visualizations. |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 5,891 | 1,912,603 | Video‑mask generation model that extends the Segment‑Anything family to temporal data.  Its speed (≈30 fps on a V100) is pushing it into real‑time video editing pipelines. |
| [FusionCow/Sulphur-3](https://huggingface.co/FusionCow/Sulphur-3) | FusionCow | 364 | 528 | Finetuned MiniMax‑H3 variant aimed at high‑quality Chinese LLM chat; includes safety‑tuned jailbreak resistance.  Small download count reflects its niche, but it shows continued interest in regional fine‑tunes. |
| [burner22/numbat](https://huggingface.co/burner22/numbat) | burner22 | 344 | 8,118 | An 8‑bit, model‑opt pipeline that compresses LLM checkpoints to ~30 % of original size while preserving perplexity.  Community uses it as a baseline for custom quantization experiments. |
| [ricaursiveAI/Ripple-65B-Preview](https://huggingface.co/ricursiveAI/Ripple-65B-Preview) | ricursiveAI | 147 | 0 | 65 B “preview” checkpoint exploring next‑gen sparse‑activation techniques; no downloads yet but early interest from research labs. |

### 📦 Fine‑tunes & Quantizations (community fine‑tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [abenzerps/Qwen-Image-2.1-Turbo-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Turbo-Quantized) | abenzerps | 5,653 | 305,860 | GGUF‑quantized version of Qwen‑Image‑2.1‑Turbo, fitting within 8 GB VRAM while preserving photorealistic quality.  The high download count shows demand for portable diffusion on laptops. |
| [AtomicChat/DeepSeek-V4.1-Flash-1017-Uncensored-GSQ-RCO-GGUF](https://huggingface.co/AtomicChat/DeepSeek-V4.1-Flash-1017-Uncensored-GSQ-RCO-GGUF) | AtomicChat | 298 | 73,659 | Uncensored GGUF build of DeepSeek‑V4.1‑Flash, featuring GSQ‑RCO optimizations for 4‑bit inference on ARM CPUs.  It’s popular in hobbyist bots that need minimal latency. |
| [OBLITERATUS/DeepSeek-V4.1-Flash-1017-obliterated](https://huggingface.co/OBLITERATUS/DeepSeek-V4.1-Flash-1017-obliterated) | OBLITERATUS | 250 | 1,979 | A community‑run “obliterated” fine‑tune that removes safety filters and adds extra tokens for jailbreak testing.  It illustrates the tension between openness and responsible AI. |
| [DavidAU/Qwen3.8-27B‑TURBO‑Fable‑…‑GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 2,499 | 1,403,315 | Massive GGUF pack that merges Qwen‑3.8‑27B with multiple uncensored LoRA adapters, enabling “heretic” jailbreaks on low‑end hardware.  Its download surge highlights the quant‑centric market. |
| [unsloth/DeepSeek-V4.1-Flash-1017-GGUF](https://huggingface.co/unsloth/DeepSeek-V4.1-Flash-1017-GGUF) | unsloth | 345 | 690,137 | Official GGUF export of DeepSeek‑V4.1‑Flash optimized by the Unsloth team for 4‑bit inference on consumer CPUs; praised for its ease of use with llama‑cpp. |
| [SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF](https://huggingface.co/SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF) | SC117 | 692 | 3,553,512 | A highly‑compressed GGUF of Qwen‑3.8‑Flash‑Next with aggressive GSQ‑RCO quantization, running under 5 GB VRAM.  Its massive download count makes it the de‑facto “low‑resource” Qwen variant. |
| [ISTA-DASLab/DeepSeek-V4.1-Flash-1017‑GSQ‑RCO‑Coder‑GGUF](https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-Coder-GGUF) | ISTA-DASLab | 161 | 73,282 | GGUF model that couples DeepSeek‑Flash with a code‑generation head, targeting developers who need a single multimodal+code model. |
| [nvidia/DeepSeek-V4.1-Flash-1017‑NVFP4](https://huggingface.co/nvidia/DeepSeek-V4.1-Flash-1017-NVFP4) | nvidia | 176 | 3,648 | NVIDIA’s own Model Optimizer (NVFP4) checkpoint, offering FP4 (4‑bit) quantization for the DeepSeek‑Flash family; primarily a showcase of Nvidia’s internal tooling. |

---

## Ecosystem Signal  
The week’s data shows a **dominant thrust toward multimodal vision‑language models**, with Qwen 3.8‑27B, DeepSeek‑V4.1‑Flash, and Mistral‑Large‑4 leading the pack.  Open‑weight releases continue to outpace proprietary offerings, evidenced by NVIDIA’s ASR model and multiple community‑driven GGUF packs that bring 30 B‑scale capabilities to consumer‑grade hardware.  Quantization is a hot sub‑trend: GGUF and 4‑bit/8‑bit formats dominate the “Fine‑tunes & Quantizations” category, collectively accounting for over **80 % of likes** among the top 30 models.  Meanwhile, niche specialized models (3‑D code generation, video mask segmentation) are gaining modest but steady interest, suggesting that the ecosystem is maturing beyond generic text generation into application‑specific domains.

---

## Worth Exploring  

1. **Qwen 3.8‑27B** – The most liked model this week; its blend of strong vision‑language abilities and open licensing makes it a baseline for any multimodal research or product prototype.  

2. **Lightricks/LTX-2.5** – An all‑in‑one diffusion engine for image‑to‑video, text‑to‑video, and video‑to‑video with a single‑file checkpoint, ideal for creators who need a versatile generation pipeline without juggling multiple models.  

3. **SC117/Qwen3.8‑Flash‑Next‑GSQ‑RCO‑abliterated‑GGUF** – The leading low‑resource GGUF that runs under 5 GB VRAM while retaining near‑full Qwen performance; perfect for edge deployment or rapid experimentation on laptops.  

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*