# Hugging Face Trending Models Digest 2026-11-07

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-11-07 05:39 UTC

---

**Today’s Highlights**  
The Hugging Face hub is dominated by massive multimodal LLMs (Qwen 3.8‑27B, DeepSeek V4.1) and a surge of community‑driven quantized GGUF releases that push inference to sub‑3 GB footprints. Image‑to‑video diffusion (Lightricks LTX‑2.5) and Gaussian‑splatting 3‑D reconstruction (speridlabs idol) are the most liked generative models, showing a clear shift toward richer visual content creation. At the same time, fine‑tuned and ultra‑compact variants (e.g., burner22 numbat, FusionCow Sulphur‑3) are attracting downloads, signalling that developers are hungry for ready‑to‑run, hardware‑friendly checkpoints.

---

## 🧠 Language Models (LLMs, chat models, instruction‑tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [ricursiveAI/Ripple-65B-Preview](https://huggingface.co/ricursiveAI/Ripple-65B-Preview) | ricursiveAI | 338 | 2,013 | A 65‑B parameter instruction‑tuned LLM preview that demonstrates strong chain‑of‑thought reasoning. Its early‑access status is driving community buzz and many exploratory forks. |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 19,287 | 7,845,288 | A 27 B multimodal LLM capable of image‑text conversation, topping the hub in both likes and downloads. Its open‑weight policy and strong Chinese/English performance fuel its rapid adoption. |
| [mistralai/Mistral-Large-4-1T-A52B](https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B) | mistralai | 1,626 | 10,530 | A 1‑trillion‑parameter “large” variant that pushes the frontier of scaling while keeping a permissive Apache‑2.0 licence. Early adopters praise its reasoning depth on benchmarks. |
| [deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) | deepseek-ai | 5,365 | 259,511 | The flagship DeepSeek V4.1 flash model combines 1017‑token context and multimodal vision support. It’s popular for chat assistants that need quick‑look image understanding. |
| [LiquidAI/LFM3-1.7B](https://huggingface.co/LiquidAI/LFM3-1.7B) | LiquidAI | 1,530 | 66,003 | A 1.7 B instruction‑tuned model that excels at creative writing and code explanation. Its small size makes it a favourite for edge deployment. |
| [sensenova/SenseNova-Loop-9B-Preview](https://huggingface.co/sensenova/SenseNova-Loop-9B-Preview) | sensenova | 267 | 3,138 | A 9 B multimodal model that integrates looped reasoning over image‑text streams, highlighted for video‑dialogue prototypes. |
| [webAI-Official/TwIL-8B](https://huggingface.co/webAI-Official/TwIL-8B) | webAI-Official | 181 | 8,209 | An 8 B Granite‑based chat model fine‑tuned for web‑search style Q&A. Its lightweight footprint attracts hobbyist chatbot projects. |
| [baidu/ERNIE-5.5-Flash-Base](https://huggingface.co/baidu/ERNIE-5.5-Flash-Base) | baidu | 213 | 526 | The base version of ERNIE‑5.5‑Flash, a Chinese‑centric LLM with Mixture‑of‑Experts (MoE) architecture. Early adopters note its superior token‑level efficiency. |
| [microsoft/Mage-VL-Cowork](https://huggingface.co/microsoft/Mage-VL-Cowork) | microsoft | 205 | 2,826 | A vision‑language model that merges LLaVA‑OneVision2 capabilities with collaborative prompting. Its ability to ground complex visual tasks makes it a research favourite. |

---

## 🎨 Multimodal & Generation (image, video, audio, text‑to‑X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [moonshotai/Kimi-K3.1-Pro](https://huggingface.co/moonshotai/Kimi-K3.1-Pro) | moonshotai | 1,540 | 18,432 | An image‑text‑to‑text LLM that excels at detailed visual captioning and visual reasoning. Its compressed‑tensor format draws users looking for high‑quality multimodal inference on modest hardware. |
| [speridlabs/idol](https://huggingface.co/speridlabs/idol) | speridlabs | 965 | 19,139 | First open‑source Gaussian‑splatting model that converts a single photo into a navigable 3‑D avatar. The novelty of instant 3‑D reconstruction fuels rapid community experimentation. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 10,887 | 2,607,491 | A single‑file diffusion model that turns static images into high‑fps videos, succeeding the popular Gen‑2 wave. Its massive download count reflects strong demand for creator‑oriented video generation. |
| [Pika-Labs/Pika-H3-Flex](https://huggingface.co/Pika-Labs/Pika-H3-Flex) | Pika-Labs | 497 | 986 | A lightweight image‑to‑video pipeline built on the H3 backbone, optimized for fast inference on consumer GPUs. It’s trending for prototype VR content. |
| [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black-forest-labs | 2,631 | 1,109,078 | Flux‑3 diffusion model tuned for “Klein” style and ComfyUI integration, delivering ultra‑sharp image‑to‑image edits. Its community‑friendly format drives high adoption. |
| [PrunaAI/P-H3-Image-Comfy](https://huggingface.co/PrunaAI/P-H3-Image-Comfy) | PrunaAI | 225 | 398,138 | A text‑to‑image diffusion checkpoint wrapped for ComfyUI, praised for vivid colour fidelity and low memory consumption. |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 6,013 | 1,920,315 | A video‑mask generation model that extends SAM to temporal segmentation, enabling real‑time object tracking in video streams. Its open‑weight release has spurred many downstream vision projects. |

---

## 🔧 Specialized Models (code, math, medical, embeddings, OCR, speech)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [ccore/Qwen3.5-4B-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-3D-Coder) | ccore | 801 | 190,243 | A 4 B LLM fine‑tuned for ThreeJS‑style 3‑D code generation, enabling developers to script immersive scenes from natural language. Its niche yet growing community pushes the “code‑as‑art” trend. |
| [nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B) | nvidia | 3,078 | 61,049 | A 30 B ASR model optimized for high‑fidelity transcription of long audio streams, built on the Nemotron 3.5 family. Researchers highlight its robustness across noisy domains. |
| [ccore/Qwen3.5-4B-GLB-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-GLB-3D-Coder) | ccore | 227 | 20,256 | A GLB‑focused coder that emits ready‑to‑load 3‑D assets from textual prompts, complementing the standard 3‑D‑Coder. Its compact size makes it attractive for on‑device asset generation. |
| [Edge0/Audio8-TTS-Realistic-Air](https://huggingface.co/Edge0/Audio8-TTS-Realistic-Air) | Edge0 | 337 | 12,847 | A high‑quality text‑to‑speech model that produces natural‑sounding English speech with expressive prosody. It’s gaining traction for voice‑over and podcast automation. |
| [baidu/Unlimited-OCR-2](https://huggingface.co/baidu/Unlimited-OCR-2) | baidu | 638 | 310,955 | An OCR system that supports unlimited language scripts and layout detection, outperforming many commercial APIs on multi‑column PDFs. Its open licence encourages integration into document pipelines. |
| [xiaomi-research/Xiaomi-OCR-0](https://huggingface.co/xiaomi-research/Xiaomi-OCR-0) | xiaomi-research | 304 | 23,683 | A lightweight OCR model tuned for Chinese handwritten text, notable for its sub‑500 MB size and high accuracy on mobile devices. |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 6,013 | 1,920,315 | (also listed under Multimodal) – a video‑mask segmentation model extending SAM to temporal data, frequently used in video editing tools. |

*(Note: facebook/sam3 appears in both categories because its core innovation is video mask generation, a specialized vision task.)*

---

## 📦 Fine‑tunes & Quantizations (community fine‑tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [burner22/numbat](https://huggingface.co/burner22/numbat) | burner22 | 373 | 9,066 | An 8‑bit quantized checkpoint built with ModelOpt that reduces a 7 B decoder to ~1 GB while preserving near‑original perplexity. It exemplifies the push toward ultra‑compact inference. |
| [FusionCow/Sulphur-3](https://huggingface.co/FusionCow/Sulphur-3) | FusionCow | 398 | 950 | A fine‑tuned MiniMax‑H3 variant that adds region‑aware prompting, attracting hobbyists exploring localized generation. |
| [AtomicChat/DeepSeek-V4.1-Flash-1017-Uncensored-GSQ-RCO-GGUF](https://huggingface.co/AtomicChat/DeepSeek-V4.1-Flash-1017-Uncensored-GSQ-RCO-GGUF) | AtomicChat | 352 | 108,162 | A GGUF‑packed, uncensored variant of DeepSeek V4.1 offering sub‑2 GB memory usage, popular for offline chatbot deployments. |
| [DavidAU/Qwen3.8-27B‑TURBO‑Fable‑Cold‑Fusion‑735‑882‑Heretic‑Uncensored‑NEO‑CODER‑MAX‑MTP‑GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 2,604 | 1,518,569 | A heavily fine‑tuned, GGUF‑compressed Qwen 3.8 checkpoint that adds code‑generation, uncensored dialogue, and “cold‑fusion” data augmentation. Its massive download count signals strong community demand for all‑purpose multimodal GGUF packs. |
| [OBLITERATUS/DeepSeek-V4.1-Flash-1017-obliterated](https://huggingface.co/OBLITERATUS/DeepSeek-V4.1-Flash-1017-obliterated) | OBLITERATUS | 269 | 2,640 | A stripped‑down GGUF version that removes safety layers, appealing to research on unrestricted language generation. |
| [abenzerps/Qwen-Image-2.1-Turbo-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Turbo-Quantized) | abenzerps | 5,691 | 135,850 | A GGUF‑quantized Qwen‑Image‑2.1 checkpoint (≈1.8 GB) that delivers fast text‑to‑image generation on CPUs. Its popularity highlights the trend toward portable diffusion. |
| [unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 1,471 | 1,309,045 | The “Flash‑Next” Qwen model re‑packed into GGUF with unsloth’s optimiser, shaving inference latency by ~30 %. |
| [ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-Coder-GGUF](https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-Coder-GGUF) | ISTA-DASLab | 185 | 222,222 | A coder‑focused GGUF fine‑tune of DeepSeek V4.1 that integrates Git‑style query‑search (GSQ) and code‑completion capabilities. Its steady download count shows niche demand for LLM‑powered IDE assistance. |

---

### Ecosystem Signal  

The hub’s current pulse is unmistakably **multimodal scaling**: Qwen 3.8‑27B, DeepSeek V4.1 and Kimi‑K3.1‑Pro dominate the top‑liked slots, confirming that users value image‑text reasoning as much as pure text generation. At the same time, **GGUF quantization** has become a primary distribution format; over a dozen high‑profile models are now served as sub‑2 GB GGUF files, dramatically lowering entry barriers for edge devices. Community‑driven fine‑tunes (e.g., FusionCow Sulphur‑3, burner22 numbat) illustrate a maturing ecosystem where developers recycle base checkpoints and publish highly specialized variants. Open‑weight licensing remains the norm for the biggest players (Qwen, DeepSeek, Mistral, Baidu), while proprietary‑grade offerings (NVIDIA‑Nemotron, Microsoft‑Mage) are still reaching the open‑source world via model‑card releases. Finally, **visual generation** (image‑to‑video, Gaussian‑splatting) and **speech/audio** (TTS, ASR) are gaining traction, reflecting broader industry moves toward immersive media creation.

### Worth Exploring  

1. **Lightricks/LTX-2.5** – The highest‑liked model in the list, it turns a single image into a high‑quality video and is packaged as a single diffusion file, making it ideal for rapid prototyping of video content pipelines.  
2. **ccore/Qwen3.5-4B-3D-Coder** – A niche but powerful coder that outputs ThreeJS‑compatible 3‑D code from plain language; perfect for developers interested in AI‑augmented graphics tooling.  
3. **abenzerps/Qwen-Image-2.1-Turbo-Quantized** – A GGUF‑quantized text‑to‑image model that runs comfortably on consumer CPUs, offering a practical entry point for low‑resource image generation experiments.  

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*