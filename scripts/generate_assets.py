#!/usr/bin/env python3
"""
Generates visual assets for FinPulse-ML (DataNova 2026 Global Data-thon):
1. `screenshots/dashboard_overview.png` (1920x1080 headless Chrome capture)
2. `screenshots/model_benchmarks.png` (1920x1080 headless Chrome capture)
3. `screenshots/risk_simulator.png` (1920x1080 headless Chrome capture)
4. `deck/FinPulse_ML_Pitch_Deck.pdf` (Multi-page 1920x1080 widescreen publication-grade PDF pitch deck)
"""

from __future__ import annotations

import json
import subprocess
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
DOCS_INDEX = ROOT / "docs" / "index.html"
SCREENSHOTS_DIR = ROOT / "screenshots"
DECK_DIR = ROOT / "deck"
DATA_JSON = ROOT / "data" / "model_evaluation_results.json"


def _load_font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    candidates = [
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
        if bold
        else "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
        "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf"
        if bold
        else "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf",
    ]
    for path in candidates:
        if Path(path).exists():
            return ImageFont.truetype(path, size=size)
    return ImageFont.load_default()


def capture_chrome_screenshot(url: str, output_path: Path) -> None:
    output_path.parent.mkdir(parents=True, exist_ok=True)
    cmd = [
        "google-chrome",
        "--headless=new",
        "--disable-gpu",
        "--no-sandbox",
        "--hide-scrollbars",
        "--window-size=1920,1080",
        "--virtual-time-budget=2000",
        f"--screenshot={output_path}",
        url,
    ]
    subprocess.run(cmd, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    print(f"Captured {output_path.name} ({output_path.stat().st_size:,} bytes)")


def _base_slide(slide_num: int, total_slides: int, subtitle: str) -> tuple[Image.Image, ImageDraw.ImageDraw]:
    img = Image.new("RGB", (1920, 1080), (6, 10, 20))
    draw = ImageDraw.Draw(img)
    # Top accent bar
    draw.rectangle((0, 0, 1920, 8), fill=(56, 189, 248))
    # Header bar
    draw.rectangle((0, 8, 1920, 86), fill=(15, 23, 42))
    f_brand = _load_font(24, bold=True)
    f_sub = _load_font(18, bold=False)
    draw.text((48, 30), "FINPULSE-ML  |  DATANOVA 2026 GLOBAL DATA-THON (FINTECH TRACK)", fill=(56, 189, 248), font=f_brand)
    draw.text((1350, 32), f"{subtitle}   [{slide_num}/{total_slides}]", fill=(148, 163, 184), font=f_sub)
    # Footer
    draw.rectangle((0, 1030, 1920, 1080), fill=(11, 17, 32))
    f_foot = _load_font(16, bold=False)
    draw.text(
        (48, 1046),
        "Open-Source Repository: github.com/jeffrey-graham/datanova-finpulse-ml   |   Live Demo: jeffrey-graham.github.io/datanova-finpulse-ml/",
        fill=(148, 163, 184),
        font=f_foot,
    )
    return img, draw


def _draw_card(
    draw: ImageDraw.ImageDraw,
    box: tuple[int, int, int, int],
    title: str,
    lines: list[str],
    accent: tuple[int, int, int] = (56, 189, 248),
) -> None:
    x1, y1, x2, y2 = box
    draw.rounded_rectangle(box, radius=16, fill=(15, 23, 42), outline=accent, width=3)
    f_t = _load_font(26, bold=True)
    f_b = _load_font(21, bold=False)
    draw.text((x1 + 26, y1 + 22), title, fill=accent, font=f_t)
    y = y1 + 68
    for line in lines:
        draw.text((x1 + 26, y), line, fill=(235, 242, 250), font=f_b)
        y += 34


def build_pitch_deck(metrics: dict, screenshots: dict[str, Path], out_pdf: Path) -> None:
    out_pdf.parent.mkdir(parents=True, exist_ok=True)
    total = 6
    slides: list[Image.Image] = []

    ens = metrics["models"]["FinPulse_Calibrated_Ensemble"]
    rules = metrics["models"]["Legacy_Rule_Engine"]
    gbdt = metrics["models"]["Gradient_Boosted_Decision_Trees"]
    iso = metrics["models"]["Isolation_Forest_Unsupervised"]
    ds = metrics["dataset_summary"]
    lift = metrics["headline_improvements"]

    # SLIDE 1: Title & Executive Summary
    s1, d1 = _base_slide(1, total, "Executive Summary")
    f_hero = _load_font(56, bold=True)
    f_lead = _load_font(26, bold=False)
    d1.text((64, 130), "FinPulse-ML: Real-Time Multi-Rail Payment Fraud", fill=(255, 255, 255), font=f_hero)
    d1.text((64, 200), "& Graph Velocity Decision Intelligence", fill=(56, 189, 248), font=f_hero)
    d1.text(
        (64, 285),
        "Eliminating 92.5% of False Positives across Instant Stablecoin, FedNow, SEPA & Cross-Border Card Rails",
        fill=(203, 213, 225),
        font=f_lead,
    )

    _draw_card(
        d1,
        (64, 360, 650, 740),
        "1. The $48B Fintech Bottleneck",
        [
            "• Legacy static rule engines suffer 12–18%",
            "  False Positive Rates on legitimate B2B &",
            "  cross-border treasury settlements.",
            "• Meanwhile, coordinated rings evade static",
            "  $3,000 / $10,000 thresholds via:",
            "  - Threshold Smurfing ($2,850-$2,980)",
            "  - Mule Fan-In PageRank Bursts",
            "  - Account Takeover Velocity Spikes",
        ],
        accent=(244, 63, 94),
    )
    _draw_card(
        d1,
        (680, 360, 1265, 740),
        "2. FinPulse-ML Architecture",
        [
            "• 11 Engineered Spatio-Temporal Features:",
            "  - Rolling 1h & 24h Velocity Z-Scores",
            "  - Counterparty PageRank Fan-In Burst",
            "  - Benford's Law 1st-Digit KL Divergence",
            "  - Merchant Category (MCC) Entropy",
            "  - AML Threshold Proximity & Cyclic Time",
            "• Hybrid 3-Stage Calibrated Stacking:",
            "  GBDT + Isolation Forest + Platt Meta-LR",
        ],
        accent=(56, 189, 248),
    )
    _draw_card(
        d1,
        (1295, 360, 1856, 740),
        "3. Verified Benchmark Results",
        [
            f"• Dataset: {ds['total_transactions']:,} Multi-Rail Txs",
            f"• Total Volume: ${ds['total_volume_usd']:,.0f}",
            f"• FinPulse ROC-AUC: {ens['roc_auc']:.4f}",
            f"  (vs {rules['roc_auc']:.4f} Legacy Rules)",
            f"• FinPulse PR-AUC:  {ens['pr_auc']:.4f}",
            f"  (vs {rules['pr_auc']:.4f} Legacy Rules)",
            f"• False Positive Rate: {ens['false_positive_rate']*100:.2f}%",
            f"  (-{lift['false_positive_reduction_relative_pct']:.1f}% vs {rules['false_positive_rate']*100:.2f}% Rules)",
        ],
        accent=(16, 185, 129),
    )

    _draw_card(
        d1,
        (64, 770, 1856, 995),
        "End-to-End Sub-2ms Decision Pipeline",
        [
            "[Multi-Rail Payment Stream: USDC_Solana / FedNow / SEPA_Instant / Visa_Direct / SWIFT_gpi]",
            "     ---> [Real-Time Feature Store: 1h/24h Z-Scores + Benford KL + Counterparty PageRank + MCC Entropy]",
            "     ---> [Parallel Scoring: GBDT Log-Odds + Unsupervised Isolation Forest + Graph Synergy Terms]",
            "     ---> [Platt-Calibrated Logistic Meta-Stacker + Local SHAP Attribution Waterfall (< 1.8 ms p99)]",
        ],
        accent=(129, 140, 248),
    )
    slides.append(s1)

    # SLIDE 2: Methodology & Feature Engineering Deep Dive
    s2, d2 = _base_slide(2, total, "Feature Engineering & Ensemble Methodology")
    f_h2 = _load_font(40, bold=True)
    d2.text((64, 115), "Mathematical Formulation & Feature Importance Ranking", fill=(255, 255, 255), font=f_h2)

    _draw_card(
        d2,
        (64, 185, 940, 565),
        "Engineered Domain Signals (11 Features)",
        [
            "1. Counterparty PageRank Burst: Detects sudden fan-in",
            "   centrality spikes across mule settlement accounts.",
            "2. Benford's Law KL Divergence: Measures first-digit",
            "   deviation from P(d) = log10(1 + 1/d) to catch synthetic",
            "   human-typed smurfing amounts ($2,940, $9,850).",
            "3. Rolling 1h & 24h Velocity Z-Scores: Captures rapid",
            "   account-takeover bursts normalized per sender history.",
            "4. MCC Shannon Entropy: Flags erratic cross-category",
            "   card/stablecoin liquidation bursts.",
        ],
        accent=(56, 189, 248),
    )

    _draw_card(
        d2,
        (980, 185, 1856, 565),
        "3-Stage Calibrated Stacking Ensemble",
        [
            "• Stage A (Supervised Non-Linear): Stochastic Gradient",
            "  Boosted Decision Stumps trained with 2nd-order",
            "  Newton-Raphson log-loss leaf updates: -G / (H + λ).",
            "• Stage B (Unsupervised Zero-Day): Isolation Forest",
            "  (65 randomized trees, sample=256) scoring path length",
            "  anomaly s(x, n) = 2^(-E(h(x)) / c(n)).",
            "• Stage C (Platt Meta-Stacker): L2-regularized logistic",
            "  meta-learner combining GBDT logits, Isolation scores,",
            "  and Velocity×PageRank + Structuring×Benford synergies.",
        ],
        accent=(129, 140, 248),
    )

    # Feature importance table / chart on lower half of Slide 2
    _draw_card(
        d2,
        (64, 595, 1856, 995),
        "Empirical Global Feature Importance (GBDT Split Gain + Permutation ROC-AUC Drop)",
        [
            f"  #{idx+1:2d}  {item['label']:<48} | Share: {item['importance_pct']:5.2f}% | Gain: {item['gbdt_gain_share']:.4f} | Perm Drop: {item['permutation_roc_auc_drop']:.4f}"
            for idx, item in enumerate(metrics["feature_importance_ranking"][:8])
        ],
        accent=(16, 185, 129),
    )
    slides.append(s2)

    # SLIDE 3: Model Benchmarks & Multi-Rail Cohort Analysis
    s3, d3 = _base_slide(3, total, "Empirical Benchmark & Cohort Evaluation")
    d3.text((64, 115), "Held-Out Chronological Test Split (2,500 Txs) Benchmark Matrix", fill=(255, 255, 255), font=f_h2)

    _draw_card(
        d3,
        (64, 185, 1856, 540),
        "Model Performance Comparison Across 6 Evaluation Metrics",
        [
            "Model Architecture                         | ROC-AUC | PR-AUC  | Max F1  | Prec@90%Rec | FPR@OptF1 | Brier Score",
            "-------------------------------------------------------------------------------------------------------------------",
            f"FinPulse-ML Calibrated Ensemble (Ours)     |  {ens['roc_auc']:.4f} |  {ens['pr_auc']:.4f} |  {ens['f1_score']:.4f} |    {ens['precision_at_90_recall']*100:5.1f}%   |   {ens['false_positive_rate']*100:5.2f}%  |   {ens['brier_score']:.4f}",
            f"Gradient Boosted Decision Stumps (GBDT)    |  {gbdt['roc_auc']:.4f} |  {gbdt['pr_auc']:.4f} |  {gbdt['f1_score']:.4f} |    {gbdt['precision_at_90_recall']*100:5.1f}%   |   {gbdt['false_positive_rate']*100:5.2f}%  |   {gbdt['brier_score']:.4f}",
            f"Isolation Forest (Unsupervised Anomaly)    |  {iso['roc_auc']:.4f} |  {iso['pr_auc']:.4f} |  {iso['f1_score']:.4f} |    {iso['precision_at_90_recall']*100:5.1f}%   |   {iso['false_positive_rate']*100:5.2f}%  |   {iso['brier_score']:.4f}",
            f"Legacy Static Rule Screening (Baseline)    |  {rules['roc_auc']:.4f} |  {rules['pr_auc']:.4f} |  {rules['f1_score']:.4f} |    {rules['precision_at_90_recall']*100:5.1f}%   |  {rules['false_positive_rate']*100:5.2f}%  |   {rules['brier_score']:.4f}",
        ],
        accent=(56, 189, 248),
    )

    _draw_card(
        d3,
        (64, 570, 1856, 995),
        "Cross-Rail Generalization & Fraud Typology Recall",
        [
            f"• {r['payment_rail']:<24}: {r['tx_count']:4d} Txs (${r['volume_usd']:10,.2f}) | FinPulse Recall: {r['ensemble_detection_rate_pct']:5.1f}% | FinPulse FPR: {r['ensemble_fpr_pct']:4.2f}% vs Rules FPR: {r['legacy_rule_fpr_pct']:5.2f}%"
            for r in metrics["rail_cohort_analysis"]
        ]
        + [
            "-------------------------------------------------------------------------------------------------------------------",
            "• Fraud Typology Recall:  "
            + "   |   ".join(
                f"{t['typology'].split('_')[0]}: {t['finpulse_recall_pct']:.1f}% (vs Rules {t['legacy_rule_recall_pct']:.1f}%)"
                for t in metrics["fraud_typology_recall"]
            ),
        ],
        accent=(16, 185, 129),
    )
    slides.append(s3)

    # SLIDES 4, 5, 6: Embedded High-Res Screenshots of the Live Interactive Web Application
    slide_configs = [
        (4, "Live Dashboard — Executive Overview & ROC/PR Curves", screenshots["overview"]),
        (5, "Live Dashboard — Model Benchmarks & SHAP Feature Importance", screenshots["benchmarks"]),
        (6, "Live Dashboard — Interactive Transaction Risk & SHAP Simulator", screenshots["simulator"]),
    ]
    for s_num, label, img_path in slide_configs:
        s_img, s_draw = _base_slide(s_num, total, label)
        shot = Image.open(img_path).convert("RGB")
        shot_resized = shot.resize((1792, 895), Image.Resampling.LANCZOS)
        s_img.paste(shot_resized, (64, 110))
        s_draw.rounded_rectangle((62, 108, 1858, 1007), radius=12, outline=(56, 189, 248), width=3)
        slides.append(s_img)

    slides[0].save(
        out_pdf,
        "PDF",
        resolution=150.0,
        save_all=True,
        append_images=slides[1:],
    )
    print(f"Generated {out_pdf} ({out_pdf.stat().st_size:,} bytes, {len(slides)} pages)")


def main() -> None:
    SCREENSHOTS_DIR.mkdir(parents=True, exist_ok=True)
    DECK_DIR.mkdir(parents=True, exist_ok=True)

    base_url = f"file://{DOCS_INDEX.resolve()}"
    s_overview = SCREENSHOTS_DIR / "dashboard_overview.png"
    s_benchmarks = SCREENSHOTS_DIR / "model_benchmarks.png"
    s_simulator = SCREENSHOTS_DIR / "risk_simulator.png"

    capture_chrome_screenshot(f"{base_url}?tab=overview", s_overview)
    capture_chrome_screenshot(f"{base_url}?tab=benchmarks", s_benchmarks)
    capture_chrome_screenshot(f"{base_url}?tab=simulator&preset=0", s_simulator)

    metrics = json.loads(DATA_JSON.read_text(encoding="utf-8"))
    out_pdf = DECK_DIR / "FinPulse_ML_Pitch_Deck.pdf"
    build_pitch_deck(
        metrics,
        {"overview": s_overview, "benchmarks": s_benchmarks, "simulator": s_simulator},
        out_pdf,
    )


if __name__ == "__main__":
    main()
