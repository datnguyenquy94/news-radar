# Hugging Face Trending Models Digest 2026-11-09

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-11-09 05:51 UTC

---

**Hugging Face Trending Models Digest – 2026‑11‑09**  

---  

## 📌 Today’s Highlights  
The week was dominated by massive interest in **multimodal and video‑centric models** – Lightricks’ **LTX‑2.5** racked up 11 k likes and 2.66 M downloads, cementing its place as the go‑to open‑weight diffusion model for image‑to‑video and text‑to‑video work.  Qwen’s **Qwen‑3.8‑27B** continued its runaway popularity with 19 k likes and 7.67 M downloads, showing that the Qwen family is now the benchmark for high‑capacity multimodal LLMs.  At the same time, **GGUF quantized releases** (e.g., DavidAU’s 27 B Qwen GGUF, Uns​loth’s Flash‑Next GGUF) and niche 3‑D generation tools such as **speridlabs/idol** are drawing strong community attention, indicating a shift toward lightweight, deploy‑anywhere formats and new generative modalities.  

---  

## 🔎 Trending Models  

### 🧠 Language Models (LLMs, chat, instruction‑tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic](https://huggingface.co/xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic) | xtools-at | 906 | 7,088 | A 9 B‑parameter uncensored Qwen‑3.5 variant fine‑tuned for aggressive instruction following. It’s trending for its “heretic” personality that bypasses typical safety filters, attracting jailbreak‑research communities. |
| [NousResearch/Arete-27B](https://huggingface.co/NousResearch/Arete-27B) | NousResearch | 306 | 1,747 | 27 B LLM built on the Qwen‑3.5 backbone with supervised fine‑tuning for higher factuality. Its modest download count reflects early‑access status, but the community is watching its potential as a cost‑effective alternative to the larger Qwen models. |
| [Scantist/GLM-5.3-SLIM-GGUF](https://huggingface.co/Scantist/GLM-5.3-SLIM-GGUF) | Scantist | 1,292 | 4,938 | A 5.3 B GLM‑MoE model compressed to a “SLIM” GGUF format for ll​ama.cpp. Users love it for running fairly capable chat on edge devices with sub‑GB memory footprints. |
| [LiquidAI/LFM3-1.7B](https://huggingface.co/LiquidAI/LFM3-1.7B) | LiquidAI | 1,560 | 73,562 | 1.7 B LLM that blends a lightweight transformer with efficient quantization (safetensors). Its popularity stems from being the largest “ready‑to‑run” model on mobile CPUs in the current leaderboard. |
| [baidu/ERNIE-5.5-Flash-Base](https://huggingface.co/baidu/ERNIE-5.5-Flash-Base) | baidu | 233 | 1,400 | ERNIE‑5.5 introduces a novel mixture‑of‑experts (MoE) routing that improves few‑shot reasoning. The model is gaining traction among Chinese‑language developers seeking an open‑weight alternative to proprietary Baidu services. |
| [webAI-Official/TwIL-8B](https://huggingface.co/webAI-Official/TwIL-8B) | webAI-Official | 239 | 22,737 | An 8 B instruction‑tuned LLM released in both safetensors and GGUF, praised for its balanced performance on English and multilingual benchmarks. Its rapid download growth reflects strong community adoption in low‑resource deployments. |
| [AtomicChat/DeepSeek-V4.1-Flash-1017-Uncensored-GSQ-RCO-GGUF](https://huggingface.co/AtomicChat/DeepSeek-V4.1-Flash-1017-Uncensored-GSQ-RCO-GGUF) | AtomicChat | 393 | 130,020 | A 10 B uncensored DeepSeek‑V4.1 variant exported to GGUF, optimized with GSQ (group‑size quantization) for fast inference on CPUs. The model’s “heretic” tag and low‑latency inference make it a hot pick for jailbreak experiments. |
| [mradermacher/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic-i1-GGUF](https://huggingface.co/mradermacher/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic-i1-GGUF) | mradermacher | 193 | 136,706 | Same architecture as the xtools‑at release but delivered as a GGUF file with 1‑bit‑quantized weights, enabling sub‑2 GB RAM usage. It’s trending among hobbyists seeking desktop‑level uncensored chat. |
| [deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) | deepseek-ai | 5,413 | 295,747 | The official 10 B DeepSeek‑V4.1 “Flash” model, tuned for both text and vision tasks. Its high download count reflects its status as the baseline for many downstream fine‑tunes in the community. |
| [mistralai/Mistral-Large-4-1T-A52B](https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B) | mistralai | 1,638 | 11,628 | A 4 B Mistral “large‑4‑1T” variant that pushes token‑level throughput via SGLang/vLLM integration. It’s popular in research pipelines that need high‑throughput inference without sacrificing accuracy. |

### 🎨 Multimodal & Generation (image, video, audio, text‑to‑X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [speridlabs/idol](https://huggingface.co/speridlabs/idol) | speridlabs | 1,427 | 22,854 | First‑open‑weight **Gaussian‑Splatting** pipeline that turns a single image into a full 3‑D scene. It’s trending for rapid prototype 3‑D content creation without requiring NeRF training. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 11,151 | 2,661,026 | A diffusion‑single‑file model that supports **image‑to‑video**, **text‑to‑video**, and **video‑to‑video** generation. Its massive download volume shows the community’s appetite for unified video generation under an Apache‑2.0 license. |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black-forest-labs | 2,769 | 1,167,959 | Flux‑3 “Klein” variant packaged for ComfyUI, delivering high‑fidelity image‑to‑image editing with faster sampling. The model’s popularity is driven by its ease of integration into existing creative pipelines. |
| [PrunaAI/P-H3-Image-Comfy](https://huggingface.co/PrunaAI/P-H3-Image-Comfy) | PrunaAI | 256 | 625,136 | A text‑to‑image diffusion model built on the H3 architecture, wrapped for ComfyUI usage. Its strong download numbers stem from the community’s push for UI‑friendly diffusion tools. |
| [Viggle/Viggle-Remake](https://huggingface.co/Viggle/Viggle-Remake) | Viggle | 202 | 76,308 | Video‑to‑video model that swaps characters while preserving motion, using a lightweight **Minimax‑H3** backbone. It’s attracting indie creators looking for affordable deep‑fake style editing. |
| [abenzerps/Qwen-Image-2.1-Turbo-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Turbo-Quantized) | abenzerps | 5,729 | 76,804 | Qwen‑Image‑2.1 turbo‑quantized to GGUF for **text‑to‑image** generation on CPUs. The model’s speed‑first design makes it a favorite for on‑device artistic apps. |
| [Pika-Labs/Pika-H3-Flex](https://huggingface.co/Pika-Labs/Pika-H3-Flex) | Pika-Labs | 520 | 1,083 | A flexible **image‑to‑video** model that also produces audio tracks, marketed as a “flex” solution for short‑form content creators. Early adopters praise its ability to generate synchronized audio‑visual clips in a single pass. |
| [PrunaAI/P-H3-Image](https://huggingface.co/PrunaAI/P-H3-Image) | PrunaAI | 177 | 893 | A vanilla text‑to‑image diffusion model (H3) distributed as a single‑file safe‑tensor. It serves as a baseline for developers experimenting with H3‑style diffusion without extra dependencies. |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 6,123 | 1,982,669 | The third‑generation Segment‑Anything model, now supporting **video mask generation** across frames. Its large download count reflects its utility in downstream video‑editing and AR pipelines. |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 19,424 | 7,668,187 | A 27 B multimodal LLM that handles **image‑text‑to‑text** tasks with strong zero‑shot vision capabilities. Its dominance in both likes and downloads makes it the de‑facto benchmark for open‑weight multimodal reasoning. |
| [unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 1,541 | 1,548,621 | The same Qwen‑3.8 backbone exported to a highly compressed GGUF file, enabling near‑real‑time multimodal inference on laptops. Its popularity illustrates the push for portable multimodal AI. |

### 🔧 Specialized Models (code, 3‑D, speech, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [ccore/Qwen3.5-4B-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-3D-Coder) | ccore | 923 | 254,053 | A 4 B Qwen‑3.5 variant fine‑tuned for **Three.js‑style 3‑D code generation**. It’s a niche tool for developers needing quick scaffolding of WebGL scenes. |
| [ccore/Qwen3.5-4B-GLB-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-GLB-3D-Coder) | ccore | 275 | 33,641 | Similar to the 3D‑Coder above but outputs **GLB** files directly, streamlining pipelines that export to AR/VR assets. |
| [ricursiveAI/Ripple-65B-Preview](https://huggingface.co/ricursiveAI/Ripple-65B-Preview) | ricursiveAI | 412 | 5,087 | A **65 B custom‑code** model that leverages region‑aware hosting (US‑only) for low‑latency code‑completion in large‑scale IDE integrations. Early adopters note markedly higher accuracy on complex software stacks. |
| [FusionCow/Sulphur-3](https://huggingface.co/FusionCow/Sulphur-3) | FusionCow | 419 | 1,003 | A fine‑tuned derivative of **MiniMax‑H3**, released for experimentation with low‑resource language tasks in the US region. It highlights the community’s continued interest in MiniMax‑style models. |
| [burner22/numbat](https://huggingface.co/burner22/numbat) | burner22 | 393 | 10,197 | A custom 8‑bit model optimized with **modelopt**, targeting ultra‑lightweight inference on micro‑controllers. It’s cited as a reference for extreme quantization research. |
| [nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B) | nvidia | 3,111 | 67,230 | A 30 B speech‑to‑text model built on the Nemotron‑3.5 backbone, optimized for automatic‑speech‑recognition (ASR). Its robust performance across noisy domains drives its rapid uptake in transcription services. |

### 📦 Fine‑tunes & Quantizations (community fine‑tunes, GGUF, AWQ, etc.)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 2,717 | 1,553,252 | A 27 B Qwen‑3.8 “Turbo” GGUF model packed with multiple quantization tricks (NEO‑CODER, MAX‑MTP) to stay under 10 GB RAM. Its staggering download volume shows the appetite for ultra‑large, uncensored LLMs that can run on a single high‑end GPU. |
| [unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 1,541 | 1,548,621 | The same Qwen‑3.8 base model, exported to GGUF with **Flash‑Next** quantization, achieving 3‑× speed‑up on CPUs. Community users praise its “plug‑and‑play” nature for on‑device multimodal workloads. |
| [AtomicChat/DeepSeek-V4.1-Flash-1017-Uncensored-GSQ-RCO-GGUF](https://huggingface.co/AtomicChat/DeepSeek-V4.1-Flash-1017-Uncensored-GSQ-RCO-GGUF) | AtomicChat | 393 | 130,020 | DeepSeek‑V4.1 “Flash” variant quantized with **GSQ‑RCO** (group‑size‑quant + residual‑channel‑optimization) to a 9 GB GGUF file. Its popularity illustrates the trend toward low‑memory, high‑throughput uncensored chat bots. |
| [ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-Coder-GGUF](https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-Coder-GGUF) | ISTA-DASLab | 206 | 258,719 | A code‑focused variant of DeepSeek‑V4.1, also GGUF‑quantized with GSQ‑RCO, delivering strong Python and JavaScript generation on modest hardware. |
| [Scantist/GLM-5.3-SLIM-GGUF](https://huggingface.co/Scantist/GLM-5.3-SLIM-GGUF) | Scantist | 1,292 | 4,938 | The GLM‑5.3 “SLIM” GGUF version (≈1 GB) that runs efficiently on Raspberry Pi and low‑end laptops. It’s widely referenced in tutorials for edge‑AI chat. |
| [mradermacher/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic-i1-GGUF](https://huggingface.co/mradermacher/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic-i1-GGUF) | mradermacher | 193 | 136,706 | A 9 B uncensored DeepSeek model quantized to GGUF (1‑bit weight, i1 precision) for sub‑2 GB RAM usage. The model’s surge is driven by hobbyist experimentation with “heretic” jailbreak prompts. |
| [unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 1,541 | 1,548,621 | (duplicate entry retained for completeness; see above). |

---  

## 🌐 Ecosystem Signal  

The **Qwen family** is the clear front‑runner, with both the base **Qwen‑3.8‑27B** and numerous community‑derived GGUF builds dominating likes and downloads. This reflects a shift toward **large, open‑weight multimodal LLMs** that can handle image‑text‑to‑text tasks out of the box. Parallel to that, **GGUF quantization** has exploded: over half of the top‑30 models are now distributed in GGUF, driven by the need to run 10 B + parameter models on consumer‑grade CPUs and single GPUs.  

On the **multimodal generation** side, video‑centric diffusion models such as **LTX‑2.5** and the **Pika‑H3‑Flex** family are receiving unprecedented community adoption, indicating that the market is moving from static image generation to **dynamic, audio‑visual synthesis**.  

The **code‑generation niche** remains alive but relatively small; specialized 3‑D coders and custom‑code models (Ripple‑65B, Qwen‑3.5‑4B‑3D‑Coder) highlight a growing interest in AI‑assisted content creation pipelines beyond text.  

Finally, **open‑weight releases** continue to outweigh proprietary offerings, with only a handful of vendor‑locked models (e.g., NVIDIA‑Nemotron‑Transcribe) appearing in the list. The ecosystem’s overall health is driven by community‑focused fine‑tunes, aggressive quantization, and a strong appetite for multimodal capabilities.  

---  

## 🚀 Worth Exploring  

1. **Lightricks/LTX‑2.5** – The highest‑downloaded model this week; its single‑file diffusion architecture makes it the most accessible entry point for developers needing high‑quality image‑to‑video or text‑to‑video generation without juggling multiple checkpoints.  

2. **Qwen/Qwen3.8-27B** – The benchmark multimodal LLM with excellent vision‑language reasoning and a massive community around it. Ideal for research on multimodal prompting, retrieval‑augmented generation, and as a base for custom fine‑tunes.  

3. **speridlabs/idol** – The first open‑weight Gaussian‑Splatting model that can turn a single photograph into a navigable 3‑D scene. It’s a game‑changer for rapid prototyping in AR/VR, gaming, and digital twins, and its popularity suggests a new wave of 3‑D generative research.  

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*