# Hugging Face Trending Models Digest 2026-08-30

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-30 05:01 UTC

---

# Hugging Face Trending Models Digest — 2026-08-30

## Today's Highlights
The Qwen 3.8 family dominates this week’s trends, spanning a flagship 27B multimodal model, a new “Flash-Next” experimental variant, and a sprawling ecosystem of community quantizations (GGUF, FP8, MLX) and uncensored/abliterated fine-tunes. Video generation is accelerating rapidly: MiniMax-H3 leads with 5M+ downloads and a growing stack of ControlNets, LoRAs, and distillation models (FastVideo’s 4-step preview), while Lightricks’ LTX-2.5 crosses 1M downloads as a versatile open video diffusion backbone. Z.ai’s GLM-5.3 series (dense and Flash) and Moonshot’s Kimi-K3 demonstrate strong momentum for efficient MoE and compressed-tensor architectures. Meanwhile, the proliferation of uncensored Qwen3.8-27B variants across every major inference format signals sustained community demand for unrestricted open weights.

---

## Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3) | zai-org | 1,281 | 8,804 | Z.ai’s flagship dense model with MoE-DSA architecture, offering strong reasoning and conversational capabilities. Trending due to its open-weight release and competitive benchmark performance. |
| [tencent/Hy4-preview](https://huggingface.co/tencent/Hy4-preview) | tencent | 286 | 1,394 | Tencent’s Hunyuan v4 preview model showcasing advanced Chinese language understanding and generation. Early adoption signals interest in Tencent’s latest LLM architecture. |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,811 | 4,330,482 | DeepSeek’s efficient V4 Flash model optimized for fast inference and conversational use. Its massive download count reflects strong community adoption for production deployments. |
| [pipecat-ai/phonellm-alpha-1](https://huggingface.co/pipecat-ai/phonellm-alpha-1) | pipecat-ai | 137 | 2,668 | A Nemotron-H based phoneme LLM designed for text-to-speech pipelines, enabling streaming voice applications. Niche but trending for real-time voice AI developers. |

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 4,300 | 52,341 | Qwen’s latest flash multimodal model with experimental qwen4 architecture, supporting image-text-to-text. Rapidly gaining likes for its speed and vision-language capabilities. |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 1,631 | 189,793 | Z.ai’s flash variant of GLM-5.3 balancing speed and multimodal reasoning. Popular for efficient vision-language tasks with nearly 190k downloads. |
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 13,269 | 4,028,839 | Qwen’s 27B parameter multimodal flagship setting a high bar for open vision-language models. Dominates downloads due to strong performance and community trust. |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 2,145 | 1,044,661 | Lightricks’ video generation model supporting image-to-video, text-to-video, and video-to-video. Leading open video diffusion model with versatile conditioning. |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,624 | 5,018,833 | MiniMax’s H3 model for image-text-to-video, one of the most downloaded video models. High adoption for text-to-video and image-to-video generation. |
| [ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 498 | 106,562 | A 35B MoE model (3B active) based on Qwen3.5-MoE, supporting image-text-to-text. Trending for its efficient MoE architecture and multimodal capabilities. |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 11,083 | 2,701,014 | Moonshot’s K3 model featuring compressed-tensors for efficient deployment. Strong momentum for its feature extraction and multimodal prowess. |
| [thomsonreuters/Thomson-1.0-Small](https://huggingface.co/thomsonreuters/Thomson-1.0-Small) | thomsonreuters | 152 | 831 | Thomson Reuters’ small multimodal model based on Qwen3.5-MoE, tailored for professional use. Early traction in enterprise/document understanding niches. |
| [BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2) | BreezeBlue | 193 | 1,017 | Breeze TTS v2 for text-to-speech with transformer architecture. Niche but growing for open voice synthesis. |
| [alibaba-pai/MiniMax-H3-Fun-Controlnet-Union](https://huggingface.co/alibaba-pai/MiniMax-H3-Fun-Controlnet-Union) | alibaba-pai | 162 | 4,250 | ControlNet union for MiniMax-H3 enabling controlled video generation. Extends H3 with spatial/temporal control for creators. |
| [FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree](https://huggingface.co/FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree) | FastVideo | 156 | 0 | FastVideo’s 4-step distilled H3 variant for ultra-fast text-to-video via data-free distillation. Preview release showcasing efficiency gains in video diffusion. |
| [alibaba-pai/MiniMax-H3-Acc-LoRAs](https://huggingface.co/alibaba-pai/MiniMax-H3-Acc-LoRAs) | alibaba-pai | 143 | 13,767 | LoRA adapters for MiniMax-H3 acceleration based on arXiv:2607.26004. Enables faster inference on the popular H3 video model. |

### 🔧 Specialized Models (code, math, medical, embeddings)

| Model | Author | Likes | Downloads | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF](https://huggingface.co/peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF) | peculiar-ragdoll | 126 | 47,817 | A 35

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*