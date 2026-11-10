# DataNova 2026 – Global Data-thon Submission Guide (`FinPulse-ML`)

**Hackathon URL:** `https://datanova-2026-global-data-thon.devpost.com/`  
**Track:** Fintech Track (`$1,750` Cash Prize Pool)

---

## 1. Exact Copy-Paste Devpost Fields

- **Project Name:**  
  `FinPulse-ML: Multi-Rail Payment Fraud & Graph Velocity Intelligence`

- **Elevator Pitch (Max 200 characters):**  
  `Real-time multi-rail payment fraud & graph-velocity ensemble (GBDT + Isolation Forest + Platt Stacking) achieving 0.9898 ROC-AUC and cutting false positives by 92.5% across 5 settlement rails.`

- **Built With Tags:**  
  `python`, `machine-learning`, `data-science`, `fintech`, `fraud-detection`, `anomaly-detection`, `explainable-ai`, `javascript`, `svg`, `github-pages`

- **Try It Out / Live Demo Link:**  
  `https://jeffrey-graham.github.io/datanova-finpulse-ml/`

- **Source Code Repository Link:**  
  `https://github.com/jeffrey-graham/datanova-finpulse-ml`

---

## 2. Project Story (Markdown Copy-Paste for Devpost Description)

### Inspiration & Problem Statement
Instant payment rails (`FedNow_Instant`, `SEPA_Instant`, `USDC_Solana_CCTP`, `Visa_Direct_CrossBorder`, and `SWIFT_gpi`) settle funds irrevocably in seconds. Yet traditional static rule-based screening systems suffer from **12–18% False Positive Rates** on legitimate high-value B2B and cross-border settlements, while failing to catch coordinated **Threshold Smurfing** (`$2,800–$2,960` transfers structured just beneath `$3,000` Travel Rule limits), **Mule Network Fan-In PageRank Bursts**, and **Account-Takeover Velocity Spikes**.

### Data Science & Feature Engineering Methodology
We curated and benchmarked a **10,000-transaction multi-rail Fintech settlement dataset** (`$30.80M` volume across 5 rails and 8 global corridors) with **11 engineered domain features**:
1. **Rolling 1h & 24h Velocity Z-Scores (`velocity_1h_zscore`, `velocity_24h_zscore`)**: Normalized sender burst intensity.
2. **Counterparty PageRank / In-Degree Burst (`counterparty_pagerank_burst`)**: Graph topological fan-in anomaly score capturing mule aggregation accounts.
3. **Benford's Law First-Digit KL Divergence (`benford_divergence`)**: Measures leading-digit divergence from $P(d) = \log_{10}(1 + 1/d)$ to detect human-fabricated smurfing numbers.
4. **AML Threshold Structuring Proximity (`structuring_proximity`)**: Exponential closeness to `$3,000` and `$10,000` reporting thresholds.
5. **Merchant Category Code Shannon Entropy (`mcc_entropy`)**, **Cross-Border Corridor Risk (`corridor_risk_score`)**, **Device/ASN Geo-Mismatch (`device_ip_mismatch`)**, and **Cyclic UTC Time Encoding (`tod_sin`, `tod_cos`)**.

### Ensemble Modeling & Empirical Results
We implemented and benchmarked 4 models on a chronological 75%/25% train/test split (`7,500` train / `2,500` held-out test transactions):
- **Legacy Static Rule Engine (Baseline):** `ROC-AUC = 0.7805` | `PR-AUC = 0.2517` | `F1 = 0.3103` | `FPR = 15.73%` | `Brier = 0.1183`
- **Unsupervised Isolation Forest (65 Trees):** `ROC-AUC = 0.9455` | `PR-AUC = 0.6926` | `F1 = 0.6726` | `Brier = 0.0671`
- **Gradient Boosted Decision Stumps (Newton-Raphson Boosting):** `ROC-AUC = 0.9835` | `PR-AUC = 0.8292` | `F1 = 0.7623` | `FPR = 1.52%` | `Brier = 0.0232`
- **FinPulse-ML Calibrated Stacking Ensemble (Ours):** **`ROC-AUC = 0.9898`** | **`PR-AUC = 0.8860`** | **`F1 = 0.8226`** | **`FPR = 1.18%` (-92.5% vs Rules)** | **`Brier = 0.0146`**

### Interactive Decision Intelligence Web App
Our live zero-install web dashboard (`https://jeffrey-graham.github.io/datanova-finpulse-ml/`) includes:
- Interactive ROC & Precision-Recall curves and Multi-Rail Cohort telemetry tables.
- Global SHAP / permutation feature importance rankings.
- A **Real-Time Transaction Risk & Local SHAP Waterfall Simulator** with 5 one-click preset scenarios allowing judges to test smurfing bursts, mule fan-in rings, and `$18,400` corporate treasury wires side-by-side against legacy static rules.

---

## 3. Local File Paths for Upload

- **Pitch Deck PDF:** `/home/jeff/.gemini/antigravity/scratch/freelancework/datanova-2026-hackathon/deck/FinPulse_ML_Pitch_Deck.pdf`
- **Screenshot 1 (Executive Overview):** `/home/jeff/.gemini/antigravity/scratch/freelancework/datanova-2026-hackathon/screenshots/dashboard_overview.png`
- **Screenshot 2 (Model Benchmarks & SHAP):** `/home/jeff/.gemini/antigravity/scratch/freelancework/datanova-2026-hackathon/screenshots/model_benchmarks.png`
- **Screenshot 3 (Live Risk Simulator):** `/home/jeff/.gemini/antigravity/scratch/freelancework/datanova-2026-hackathon/screenshots/risk_simulator.png`
- **Dataset CSV:** `/home/jeff/.gemini/antigravity/scratch/freelancework/datanova-2026-hackathon/data/transactions_benchmark.csv`
- **Evaluation Metrics JSON:** `/home/jeff/.gemini/antigravity/scratch/freelancework/datanova-2026-hackathon/data/model_evaluation_results.json`
