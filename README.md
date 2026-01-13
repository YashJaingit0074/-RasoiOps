
# RasoiOps: AI-Driven Inventory & Sustainability Engine

**RasoiOps** is an end-to-end sustainability platform designed for smart households and small-scale restaurants. It leverages Computer Vision and Retrieval-Augmented Generation (RAG) to digitize food inventory and minimize wastage.

---

## 🛠️ Technical Stack
- **Frontend:** React 18, TypeScript, Tailwind CSS
- **AI Engine:** Gemini 3-Flash (Vision & LLM Inference)
- **Data Visualization:** Recharts

## 📐 Architectural Note: Free Tier vs. Production
As this is a professional prototype using the **Gemini Free Tier**, specific architectural patterns were implemented to ensure stability:
1. **Exponential Backoff:** The `AIService` includes a custom retry mechanism to handle `429 Too Many Requests` errors inherent in free tier rate limits.
2. **Context Compression:** RAG prompts are optimized to minimize token usage (TPM), staying within free-tier quotas while maintaining accuracy.
3. **Data Privacy Disclaimer:** For production deployment, a **Paid Enterprise Tier** is required to ensure input data is not used for model training and to comply with enterprise data sovereignty standards.

---

## 🚀 Key Modules
### 1. Vision-to-Inventory
Automates inventory logging using multi-modal LLMs. Processes images of groceries or receipts to extract structured data.

### 2. RAG-Based Recipe Planner
Suggests meal plans strictly based on available on-hand inventory. Uses current inventory as the "Knowledge Base" for retrieval.

### 3. Sustainability Dashboard
Visualizes CO2 offset, financial savings, and waste reduction trends using Recharts.
