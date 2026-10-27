# Hugging Face Trending Models Digest 2026-10-27

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-10-27 04:41 UTC

---

## Today’s Highlights  
The Hugging Face Hub is buzzing with **multimodal power‑houses** – Qwen 3.8‑27B (18 k likes) and DeepSeek‑V4.1‑Flash dominate the conversation, showing that image‑text‑to‑text models are now the headline act.  Video generation leaps forward with Lightricks LTX‑2.5 (9 k likes, >2 M downloads), while the community‑driven **GGUF quantization** wave fuels an explosion of lightweight checkpoints for large models.  At the same time, niche foundations such as Timestral (time‑series) and Carbon‑X (DNA‑level text) prove that specialized domains are still attracting dedicated follow‑on work.

---  

## Trending Models  

### 🧠 Language Models (LLMs, chat, instruction‑tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [RecursiveSI/flint](https://huggingface.co/RecursiveSI/flint) | RecursiveSI | 929 | 8,470 | A 7 B conversational LLM fine‑tuned on long‑form dialogues. It’s trending because of its strong performance on instruction tasks despite its modest size. |
| [Nanbeige/Nanbeige4.3-33B](https://huggingface.co/Nanbeige/Nanbeige4.3-33B) | Nanbeige | 607 | 2,787 | 33 B LLaMA‑derived model that emphasizes multilingual coverage. The community praises its low‑memory inference profile on consumer GPUs. |
| [XHToken/Spark‑X2.6‑4B](https://huggingface.co/XHToken/Spark-X2.6-4B) | XHToken | 684 | 4,726 | A 4 B “Spark” model built for rapid response in chat applications. Its recent climb is tied to an open‑source benchmark that highlighted sub‑second latency. |
| [InternScience/Sage‑A1.5](https://huggingface.co/InternScience/Sage-A1.5) | InternScience | 318 | 5,235 | A 1.5 B MoE (Mixture‑of‑Experts) LLM that balances parameter efficiency with strong zero‑shot reasoning. It’s gaining attention for its low‑cost fine‑tuning pipeline. |
| [KRAFTON/Raon‑1‑mini‑preview](https://huggingface.co/KRAFTON/Raon-1-mini-preview) | KRAFTON | 199 | 1,450 | A 2 B “mini” LLM aimed at game‑dialogue generation. Popular among indie developers looking for on‑device NPC chat. |
| [ornith‑ai/Ornith‑1.5‑122B](https://huggingface.co/ornith-ai/Ornith-1.5-122B) | ornith‑ai | 190 | 60,210 | A 122 B expert‑mix LLM specialized for scientific literature summarisation. The model’s scale makes it a benchmark for open‑weight research. |

### 🎨 Multimodal & Generation (image, video, audio, text‑to‑X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [deepseek‑ai/DeepSeek‑V4.1‑Flash‑1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017) | deepseek‑ai | 3,214 | 95,889 | A 1017‑parameter multimodal LLM that processes images and returns detailed textual responses. Its flash‑based architecture yields near‑real‑time inference on consumer GPUs. |
| [MiniMaxAI/MiniMax‑M3.1‑Flash](https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash) | MiniMaxAI | 389 | 8,782 | A vision‑language model that excels at OCR‑enhanced Q&A. The community favours it for mobile document‑analysis apps. |
| [Qwen/Qwen3.8‑27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 18,470 | 7,608,285 | A 27 B image‑text‑to‑text model with strong multilingual generation, responsible for the highest like‑count in this snapshot. It’s a reference point for open‑weight multimodal research. |
| [Lightricks/LTX‑2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 9,474 | 2,117,147 | Diffusion‑based image‑to‑video system that produces 16‑frame clips from a single frame and caption. It’s the most‑downloaded video‑generation model after the 2024 “Text‑to‑Video” surge. |
| [black‑forest‑labs/flux‑3‑image‑klein‑comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) | black‑forest‑labs | 1,710 | 700,652 | A compact flux‑3 checkpoint tuned for “ComfyUI”, delivering high‑fidelity image‑to‑image edits with low VRAM. The model’s niche tooling ecosystem is driving its popularity. |
| [abenzerps/Qwen‑Image‑2.1‑Uncensored‑Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-Quantized) | abenzerps | 5,110 | 2,207,486 | Quantized Qwen‑Image‑2.1 (GGUF) that runs on CPUs while preserving 4‑K image generation quality. It’s a go‑to for developers without GPU access. |
| [OpenMOSS‑Team/MOSS‑Image](https://huggingface.co/OpenMOSS-Team/MOSS-Image) | OpenMOSS‑Team | 763 | 12,114 | Text‑to‑image diffusion model fine‑tuned on Chinese‑language prompts. The recent “MOSS‑Image” demo sparked a wave of community‑created art. |
| [fishaudio/drama‑3](https://huggingface.co/fishaudio/drama-3) | fishaudio | 1,042 | 23,216 | A 3‑speaker, multilingual TTS model with expressive prosody for drama scripts. It’s being adopted by indie creators for cheap audiobook production. |
| [facebook/sam3](https://huggingface.co/facebook/sam3) | facebook | 5,173 | 1,849,633 | A video‑mask generation model that extends Segment‑Anything to temporal data. Its speed (≈30 FPS) makes it a de‑facto baseline for video‑editing pipelines. |
| [FastVideo/FastH3‑Omni‑Comfy](https://huggingface.co/FastVideo/FastH3-Omni-Comfy) | FastVideo | 164 | 264,401 | An “Omni” diffusion checkpoint that can generate video, depth, and optical‑flow from a single prompt. Early adopters praise its versatile control‑net style conditioning. |

### 🔧 Specialized Models (code, math, medical, embeddings, OCR, etc.)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [mistralai/Timestral‑209M](https://huggingface.co/mistralai/Timestral-209M) | mistralai | 401 | 10,971 | A 209 M transformer trained on global financial time‑series. It’s used as a lightweight baseline for forecasting competitions. |
| [HuggingFaceBio/Carbon‑X](https://huggingface.co/HuggingFaceBio/Carbon-X) | HuggingFaceBio | 210 | 1,128 | A Qwen‑3‑based model that generates synthetic DNA sequences from textual descriptions. Early biotech pilots cite it for rapid prototyping of gene‑design pipelines. |
| [google/embeddinggemma‑2](https://huggingface.co/google/embeddinggemma-2) | google | 2,951 | 231,262 | Embedding‑only model that produces 2 048‑dimensional vectors optimized for semantic search. It has become the default embedding provider for many LangChain apps. |
| [datalab‑to/indra‑ocr](https://huggingface.co/datalab-to/indra-ocr) | datalab‑to | 441 | 5,008 | ONNX‑based OCR model that runs efficiently on CPUs, targeting document digitisation in low‑resource settings. Its open‑license has spurred a flurry of downstream tools. |
| [facebook/sam3](https://huggingface.co/facebook/sam3) *(also listed under Multimodal)* | facebook | 5,173 | 1,849,633 | See above – a specialized video‑mask generation model. |

### 📦 Fine‑tunes & Quantizations (community fine‑tunes, GGUF, AWQ)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [ISTA‑DASLab/DeepSeek‑V4.1‑Flash‑1017‑GSQ‑RCO‑GGUF](https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF) | ISTA‑DASLab | 347 | 891,147 | GGUF checkpoint that mixes 4‑bit Grouped‑Sequential‑Quant (GSQ) with Residual‑Corrected‑Optimisation (RCO), trimming the 1017‑M model to <4 GB while keeping <2 % BLEU loss. |
| [unsloth/flint‑GGUF](https://huggingface.co/unsloth/flint-GGUF) | unsloth | 273 | 125,188 | 4‑bit GGUF version of the flint LLM, packaged for llama.cpp; it’s popular for offline chatbot deployments on laptops. |
| [orcarouter/DeepSeek‑V4.1‑Flash‑1017‑abliterated‑GGUF](https://huggingface.co/orcarouter/DeepSeek-V4.1-Flash-1017-abliterated-GGUF) | orcarouter | 239 | 9,022 | An “abliterated” (pruned‑then‑quantized) GGUF that reduces parameters to 780 M, enabling sub‑second inference on a 6 GB RAM laptop. |
| [DavidAU/Qwen3.8‑27B‑TURBO‑Fable‑Cold‑Fusion‑735‑882‑Heretic‑Uncensored‑NEO‑CODER‑MAX‑MTP‑GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 2,119 | 1,687,633 | A heavily fine‑tuned, 8‑bit GGUF of Qwen‑3.8‑27B that adds coder‑style instruction data and “heretic” uncensored safety toggles. It’s the go‑to for research on instruction alignment under extreme compression. |
| [XHToken/Spark‑X2.6‑4B‑GGUF](https://huggingface.co/XHToken/Spark-X2.6-4B-GGUF) | XHToken | 166 | 69,669 | 4‑bit GGUF release of the Spark‑X2.6 model, enabling RAG‑style chat on ARM devices. The modest download count reflects its niche hardware target. |

---

## Ecosystem Signal  

The **multimodal frontier** is clearly the main growth driver. Open‑weight families such as **DeepSeek**, **Qwen**, and **Spark** have all released flash‑optimized and GGUF‑compressed variants, showing a community consensus that **speed + low‑memory** is now a prerequisite for adoption. Video‑generation (LTX‑2.5, FastH3‑Omni) and mask‑generation (SAM‑3) models have crossed the 1 M‑download threshold, indicating that downstream applications (editing, AR/VR, surveillance) are moving beyond still‑image generation.  

On the **LLM side**, smaller but cleverly engineered MoE models (Sage‑A1.5, Ornith‑1.5‑122B) are attracting niche interest, while instruction‑tuned 4‑bit GGUF releases (flint‑GGUF, DeepSeek‑GGUF) dominate the quantization landscape. The **specialized niche** (DNA generation, time‑series forecasting, embeddings) remains modest in absolute numbers but is growing proportionally, reflecting a diversification of the Hub beyond pure text.  

Overall, **open‑weight** releases still outnumber proprietary ones, with most top‑liked models offering permissive licenses. The surge in **GGUF and AWQ** checkpoints signals that the community is prioritizing edge deployment, and we can expect a continued pipeline of “flash‑plus‑quantized” models across all major families in the coming months.

---

## Worth Exploring  

1. **[Qwen/Qwen3.8‑27B](https://huggingface.co/Qwen/Qwen3.8-27B)** – The highest‑liked model in the list; a 27 B multimodal LLM that delivers strong multilingual image‑text understanding with an open license, making it a benchmark for research and product prototyping.  

2. **[Lightricks/LTX‑2.5](https://huggingface.co/Lightricks/LTX-2.5)** – The dominant image‑to‑video diffusion checkpoint (9 k likes, >2 M downloads). Its ability to generate 16‑frame clips from a single image and caption is reshaping low‑cost video creation workflows.  

3. **[ISTA‑DASLab/DeepSeek‑V4.1‑Flash‑1017‑GSQ‑RCO‑GGUF](https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF)** – A state‑of‑the‑art 4‑bit GGUF that packs the 1‑B‑parameter DeepSeek flash model into <4 GB while preserving near‑full quality. It’s an excellent test‑bed for exploring high‑performance inference on consumer hardware.  

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*