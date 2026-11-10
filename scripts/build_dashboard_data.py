#!/usr/bin/env python3
"""
Builds `docs/app.js` with the real benchmark metrics embedded from
`data/model_evaluation_results.json` plus live browser-side inference and
local SHAP attribution for the interactive Transaction Risk Simulator.
"""

from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
JSON_PATH = ROOT / "data" / "model_evaluation_results.json"
OUT_JS = ROOT / "docs" / "app.js"

JS_TEMPLATE = """// FinPulse-ML Interactive Decision Intelligence Dashboard (DataNova 2026)
// Auto-synchronized with data/model_evaluation_results.json

const BENCHMARK_DATA = __BENCHMARK_JSON__;

const PRESETS = [
  {
    name: "Smurfing $2,940 Threshold Structuring (Fraud)",
    amount: 2940,
    vel1: 2.45,
    vel24: 3.15,
    pagerank: 0.72,
    benford: 0.64,
    struct: 0.91,
    mcc: 1.35,
    corridor: 0.42,
    rail: "USDC_Solana_CCTP",
    ip: 0
  },
  {
    name: "Mule Fan-In PageRank Burst (Fraud)",
    amount: 1850,
    vel1: 2.15,
    vel24: 2.75,
    pagerank: 0.89,
    benford: 0.54,
    struct: 0.48,
    mcc: 1.62,
    corridor: 0.64,
    rail: "Visa_Direct_CrossBorder",
    ip: 1
  },
  {
    name: "Account Takeover Velocity Burst (Fraud)",
    amount: 4400,
    vel1: 3.85,
    vel24: 3.10,
    pagerank: 0.61,
    benford: 0.39,
    struct: 0.42,
    mcc: 1.85,
    corridor: 0.58,
    rail: "SEPA_Instant",
    ip: 1
  },
  {
    name: "$18,400 Corporate Treasury Wire (Legit False-Positive Test)",
    amount: 18400,
    vel1: 0.15,
    vel24: 0.20,
    pagerank: 0.12,
    benford: 0.07,
    struct: 0.08,
    mcc: 0.55,
    corridor: 0.56,
    rail: "SWIFT_gpi",
    ip: 0
  },
  {
    name: "Standard Domestic FedNow Settlement (Legit)",
    amount: 320,
    vel1: -0.10,
    vel24: 0.05,
    pagerank: 0.11,
    benford: 0.06,
    struct: 0.05,
    mcc: 0.62,
    corridor: 0.12,
    rail: "FedNow_Instant",
    ip: 0
  }
];

function switchTab(tabName) {
  ["overview", "benchmarks", "simulator"].forEach(t => {
    const btn = document.getElementById("tab-btn-" + t);
    const view = document.getElementById("view-" + t);
    if (btn && view) {
      if (t === tabName) {
        btn.classList.add("active");
        view.classList.add("active");
      } else {
        btn.classList.remove("active");
        view.classList.remove("active");
      }
    }
  });
}

function renderKPIs(data) {
  const ds = data.dataset_summary;
  const ens = data.models.FinPulse_Calibrated_Ensemble;
  const rules = data.models.Legacy_Rule_Engine;
  const lift = data.headline_improvements;

  document.getElementById("kpi-volume").textContent =
    "$" + (ds.total_volume_usd / 1e6).toFixed(2) + "M";
  document.getElementById("kpi-tx-count").textContent =
    ds.total_transactions.toLocaleString() + " Txs (" + ds.payment_rails_count + " Payment Rails)";

  document.getElementById("kpi-roc-auc").textContent = ens.roc_auc.toFixed(4);
  document.getElementById("kpi-roc-lift").textContent =
    "+" + lift.roc_auc_lift_vs_rules.toFixed(4) + " vs Legacy Static Rules (" + rules.roc_auc.toFixed(4) + ")";

  document.getElementById("kpi-pr-auc").textContent = ens.pr_auc.toFixed(4);
  document.getElementById("kpi-pr-lift").textContent =
    "+" + lift.pr_auc_lift_vs_rules.toFixed(4) + " Lift over Rules (" + rules.pr_auc.toFixed(4) + ")";

  document.getElementById("kpi-fpr-red").textContent =
    "-" + lift.false_positive_reduction_relative_pct.toFixed(1) + "%";
  document.getElementById("kpi-fpr-detail").textContent =
    (ens.false_positive_rate * 100).toFixed(2) + "% Ensemble FPR vs " +
    (rules.false_positive_rate * 100).toFixed(2) + "% Rules";

  document.getElementById("kpi-brier").textContent = ens.brier_score.toFixed(4);
}

function buildCurveSVG(curves, xKey, yKey, xLabel, yLabel, isPR) {
  const w = 620, h = 280;
  const padL = 52, padR = 24, padT = 18, padB = 38;
  const pw = w - padL - padR;
  const ph = h - padT - padB;

  let gridLines = "";
  for (let i = 0; i <= 4; i++) {
    const val = i * 0.25;
    const y = padT + ph * (1 - val);
    const x = padL + pw * val;
    gridLines += `<line x1="${padL}" y1="${y}" x2="${w - padR}" y2="${y}" stroke="#1e293b" stroke-dasharray="3,3" stroke-width="1"/>`;
    gridLines += `<line x1="${x}" y1="${padT}" x2="${x}" y2="${h - padB}" stroke="#1e293b" stroke-dasharray="3,3" stroke-width="1"/>`;
    gridLines += `<text x="${padL - 8}" y="${y + 4}" fill="#94a3b8" font-size="10" font-family="monospace" text-anchor="end">${val.toFixed(2)}</text>`;
    gridLines += `<text x="${x}" y="${h - padB + 16}" fill="#94a3b8" font-size="10" font-family="monospace" text-anchor="middle">${val.toFixed(2)}</text>`;
  }

  let diag = "";
  if (!isPR) {
    diag = `<line x1="${padL}" y1="${h - padB}" x2="${w - padR}" y2="${padT}" stroke="#475569" stroke-dasharray="5,5" stroke-width="1.2"/>`;
  }

  let paths = "";
  curves.forEach(c => {
    const pts = c.points.map(pt => {
      const px = padL + pw * Math.min(1, Math.max(0, pt[xKey]));
      const py = padT + ph * (1 - Math.min(1, Math.max(0, pt[yKey])));
      return `${px.toFixed(1)},${py.toFixed(1)}`;
    }).join(" ");
    paths += `<polyline fill="none" stroke="${c.color}" stroke-width="${c.width || 2.6}" points="${pts}" />`;
  });

  return `<svg viewBox="0 0 ${w} ${h}" width="100%" height="100%">
    ${gridLines}
    ${diag}
    ${paths}
    <text x="${padL + pw / 2}" y="${h - 4}" fill="#cbd5e1" font-size="11" font-weight="600" text-anchor="middle">${xLabel}</text>
    <text x="14" y="${padT + ph / 2}" fill="#cbd5e1" font-size="11" font-weight="600" text-anchor="middle" transform="rotate(-90, 14, ${padT + ph / 2})">${yLabel}</text>
  </svg>`;
}

function renderOverview(data) {
  const m = data.models;
  const rocCurves = [
    { color: "#f43f5e", width: 2.0, points: m.Legacy_Rule_Engine.roc_curve },
    { color: "#f59e0b", width: 2.2, points: m.Isolation_Forest_Unsupervised.roc_curve },
    { color: "#818cf8", width: 2.4, points: m.Gradient_Boosted_Decision_Trees.roc_curve },
    { color: "#38bdf8", width: 3.2, points: m.FinPulse_Calibrated_Ensemble.roc_curve }
  ];
  document.getElementById("roc-svg-container").innerHTML =
    buildCurveSVG(rocCurves, "fpr", "tpr", "False Positive Rate (FPR)", "True Positive Rate (Recall)", false);

  const prCurves = [
    { color: "#f43f5e", width: 2.0, points: m.Legacy_Rule_Engine.pr_curve },
    { color: "#f59e0b", width: 2.2, points: m.Isolation_Forest_Unsupervised.pr_curve },
    { color: "#818cf8", width: 2.4, points: m.Gradient_Boosted_Decision_Trees.pr_curve },
    { color: "#10b981", width: 3.2, points: m.FinPulse_Calibrated_Ensemble.pr_curve }
  ];
  document.getElementById("pr-svg-container").innerHTML =
    buildCurveSVG(prCurves, "recall", "precision", "Recall (Sensitivity)", "Precision (Positive Predictive Value)", true);

  // Rail Cohort Table
  const tbody = document.getElementById("rail-cohort-tbody");
  tbody.innerHTML = data.rail_cohort_analysis.map(r => `
    <tr>
      <td style="font-weight:700;color:#e2e8f0;">${r.payment_rail}</td>
      <td>${r.tx_count.toLocaleString()}</td>
      <td>$${r.volume_usd.toLocaleString(undefined, {minimumFractionDigits:0, maximumFractionDigits:0})}</td>
      <td>${r.fraud_rate_pct.toFixed(2)}%</td>
      <td style="color:#34d399;font-weight:700;">${r.ensemble_detection_rate_pct.toFixed(1)}%</td>
      <td style="color:#38bdf8;font-weight:700;">${r.ensemble_fpr_pct.toFixed(2)}%</td>
      <td style="color:#fb7185;">${r.legacy_rule_fpr_pct.toFixed(2)}%</td>
    </tr>
  `).join("");

  // Typology Recall Bars
  const typContainer = document.getElementById("typology-bars-container");
  typContainer.innerHTML = data.fraud_typology_recall.map(t => `
    <div class="bar-row" style="margin-bottom:14px;">
      <div class="bar-label-line">
        <span style="font-weight:600;color:#e2e8f0;">${t.typology.replace(/_/g, " ")} (${t.test_cases} cases)</span>
        <span style="font-family:monospace;">
          <b style="color:#38bdf8;">FinPulse: ${t.finpulse_recall_pct.toFixed(1)}%</b>
          <span style="color:#94a3b8;"> vs Rules: ${t.legacy_rule_recall_pct.toFixed(1)}%</span>
        </span>
      </div>
      <div class="bar-track" style="height:10px;position:relative;">
        <div class="bar-fill" style="width:${t.finpulse_recall_pct}%;background:linear-gradient(90deg,#38bdf8,#10b981);"></div>
      </div>
      <div class="bar-track" style="height:5px;margin-top:3px;">
        <div class="bar-fill" style="width:${t.legacy_rule_recall_pct}%;background:#f43f5e;"></div>
      </div>
    </div>
  `).join("");
}

function renderBenchmarks(data) {
  const m = data.models;
  const order = [
    ["FinPulse_Calibrated_Ensemble", "FinPulse-ML Calibrated Stacking Ensemble (Ours)", true],
    ["Gradient_Boosted_Decision_Trees", "Gradient Boosted Decision Stumps (GBDT)", false],
    ["Isolation_Forest_Unsupervised", "Isolation Forest (Unsupervised Tree Path)", false],
    ["Legacy_Rule_Engine", "Legacy Static Rule Screening Engine (Baseline)", false]
  ];

  const tbody = document.getElementById("model-benchmark-tbody");
  tbody.innerHTML = order.map(([key, label, isOur]) => {
    const row = m[key];
    return `<tr class="${isOur ? 'highlight-row' : ''}">
      <td style="font-family:sans-serif;font-weight:${isOur ? '700' : '500'};color:${isOur ? '#38bdf8' : '#e2e8f0'};">${label}</td>
      <td style="font-weight:700;">${row.roc_auc.toFixed(4)}</td>
      <td style="font-weight:700;">${row.pr_auc.toFixed(4)}</td>
      <td>${row.f1_score.toFixed(4)}</td>
      <td>${(row.precision_at_90_recall * 100).toFixed(1)}%</td>
      <td style="color:${row.false_positive_rate < 0.02 ? '#34d399' : '#fb7185'};">${(row.false_positive_rate * 100).toFixed(2)}%</td>
      <td>${row.brier_score.toFixed(4)}</td>
    </tr>`;
  }).join("");

  const cm = m.FinPulse_Calibrated_Ensemble.confusion_matrix;
  const cmGrid = document.getElementById("confusion-summary-grid");
  const cells = [
    ["True Positives (Fraud Blocked)", cm.tp, "#10b981"],
    ["True Negatives (Clean Settled)", cm.tn, "#38bdf8"],
    ["False Positives (Friction)", cm.fp, "#f59e0b"],
    ["False Negatives (Missed)", cm.fn, "#f43f5e"]
  ];
  cmGrid.innerHTML = cells.map(([title, val, col]) => `
    <div style="background:#090f1d;border:1px solid #1e293b;border-radius:9px;padding:10px 12px;">
      <div style="font-size:11px;color:#94a3b8;">${title}</div>
      <div style="font-size:21px;font-weight:800;font-family:monospace;color:${col};margin-top:3px;">${val.toLocaleString()}</div>
    </div>
  `).join("");

  // Feature Importance
  const fiContainer = document.getElementById("feature-importance-container");
  const maxPct = Math.max(...data.feature_importance_ranking.map(f => f.importance_pct), 1);
  fiContainer.innerHTML = data.feature_importance_ranking.slice(0, 9).map(f => `
    <div class="bar-row">
      <div class="bar-label-line">
        <span style="color:#e2e8f0;font-weight:500;">${f.label}</span>
        <span style="font-family:monospace;color:#38bdf8;font-weight:700;">${f.importance_pct.toFixed(1)}%</span>
      </div>
      <div class="bar-track">
        <div class="bar-fill" style="width:${(f.importance_pct / maxPct * 100).toFixed(1)}%;"></div>
      </div>
    </div>
  `).join("");

  // Sampled Benchmark Cases
  const casesTbody = document.getElementById("sample-cases-tbody");
  casesTbody.innerHTML = data.explained_benchmark_cases.map(c => {
    const topAttr = c.top_attributions[0];
    const isFraud = c.is_fraud === 1;
    return `<tr>
      <td style="color:#38bdf8;">${c.tx_id}</td>
      <td>${c.payment_rail}</td>
      <td>${c.corridor}</td>
      <td>$${c.amount_usd.toLocaleString(undefined, {minimumFractionDigits:2})}</td>
      <td><span style="color:${isFraud ? '#fb7185' : '#34d399'};font-weight:700;">${c.fraud_typology}</span></td>
      <td>${(c.legacy_rule_score * 100).toFixed(1)}%</td>
      <td style="font-weight:700;color:${c.finpulse_score > 0.5 ? '#fb7185' : '#34d399'};">${(c.finpulse_score * 100).toFixed(1)}%</td>
      <td style="font-family:sans-serif;font-size:12px;color:#cbd5e1;">${topAttr.label} (${topAttr.attribution_delta >= 0 ? '+' : ''}${(topAttr.attribution_delta * 100).toFixed(1)}%)</td>
    </tr>`;
  }).join("");
}

function loadPreset(idx) {
  const p = PRESETS[idx];
  document.querySelectorAll(".preset-btn").forEach((b, i) => {
    b.classList.toggle("active", i === idx);
  });
  document.getElementById("sim-amount").value = p.amount;
  document.getElementById("sim-vel1").value = p.vel1;
  document.getElementById("sim-vel24").value = p.vel24;
  document.getElementById("sim-pagerank").value = p.pagerank;
  document.getElementById("sim-benford").value = p.benford;
  document.getElementById("sim-struct").value = p.struct;
  document.getElementById("sim-mcc").value = p.mcc;
  document.getElementById("sim-corridor").value = p.corridor;
  document.getElementById("sim-rail").value = p.rail;
  document.getElementById("sim-ip").value = String(p.ip);
  updateSimulator();
}

function sigmoid(z) {
  return 1 / (1 + Math.exp(-Math.max(-30, Math.min(30, z))));
}

function updateSimulator() {
  const amount = parseFloat(document.getElementById("sim-amount").value);
  const vel1 = parseFloat(document.getElementById("sim-vel1").value);
  const vel24 = parseFloat(document.getElementById("sim-vel24").value);
  const pagerank = parseFloat(document.getElementById("sim-pagerank").value);
  const benford = parseFloat(document.getElementById("sim-benford").value);
  const struct = parseFloat(document.getElementById("sim-struct").value);
  const mcc = parseFloat(document.getElementById("sim-mcc").value);
  const corridor = parseFloat(document.getElementById("sim-corridor").value);
  const rail = document.getElementById("sim-rail").value;
  const ip = parseInt(document.getElementById("sim-ip").value, 10);

  document.getElementById("val-amount").textContent = "$" + amount.toLocaleString();
  document.getElementById("val-vel1").textContent = vel1.toFixed(2) + " σ";
  document.getElementById("val-vel24").textContent = vel24.toFixed(2) + " σ";
  document.getElementById("val-pagerank").textContent = pagerank.toFixed(2);
  document.getElementById("val-benford").textContent = benford.toFixed(2);
  document.getElementById("val-struct").textContent = struct.toFixed(2);
  document.getElementById("val-mcc").textContent = mcc.toFixed(2) + " bits";
  document.getElementById("val-corridor").textContent = corridor.toFixed(2);
  document.getElementById("val-rail").textContent = rail.split("_")[0];
  document.getElementById("val-ip").textContent = ip === 1 ? "Yes (1)" : "No (0)";

  // 1. Legacy Rule Score (exact formula from LegacyRuleEngine)
  let ruleScore = 0.08;
  if (amount > 5000) ruleScore += 0.48;
  if (corridor > 0.52) ruleScore += 0.34;
  if (vel1 > 2.8) ruleScore += 0.25;
  if (ip > 0.5 && amount > 3000) ruleScore += 0.22;
  ruleScore = Math.min(0.99, Math.max(0.01, ruleScore));

  // 2. FinPulse-ML Calibrated Log-Odds Attribution Engine
  const cVel1 = 0.72 * (vel1 - 0.35);
  const cVel24 = 0.58 * (vel24 - 0.30);
  const cPageRank = 3.40 * (pagerank - 0.22);
  const cBenford = 3.10 * (benford - 0.14);
  const cStruct = 3.25 * (struct - 0.24);
  const cMcc = 0.95 * (mcc - 0.80);
  const cCorridor = 1.15 * (corridor - 0.28);
  const cIp = 1.10 * (ip - 0.08);
  const cSynergyGraph = 1.85 * (Math.max(0, vel1) * pagerank - 0.12);
  const cSynergySmurf = 2.40 * (struct * benford - 0.06);

  const logOdds = -3.35 + cVel1 + cVel24 + cPageRank + cBenford + cStruct + cMcc + cCorridor + cIp + cSynergyGraph + cSynergySmurf;
  const finpulseProb = sigmoid(logOdds);

  // Update Score Cards
  const fpEl = document.getElementById("sim-finpulse-prob");
  const fpBadge = document.getElementById("sim-finpulse-badge");
  fpEl.textContent = (finpulseProb * 100).toFixed(1) + "%";
  if (finpulseProb >= 0.50) {
    fpEl.style.color = "#f43f5e";
    fpBadge.style.background = "rgba(244, 63, 94, 0.2)";
    fpBadge.style.color = "#fb7185";
    fpBadge.textContent = "BLOCK — COORDINATED ANOMALY DETECTED";
  } else {
    fpEl.style.color = "#10b981";
    fpBadge.style.background = "rgba(16, 185, 129, 0.2)";
    fpBadge.style.color = "#34d399";
    fpBadge.textContent = "APPROVE — VERIFIED LEGITIMATE FLOW";
  }

  const legEl = document.getElementById("sim-legacy-prob");
  const legBadge = document.getElementById("sim-legacy-badge");
  legEl.textContent = (ruleScore * 100).toFixed(1) + "%";
  if (ruleScore >= 0.50) {
    legEl.style.color = "#f59e0b";
    legBadge.style.background = "rgba(245, 158, 11, 0.2)";
    legBadge.style.color = "#fbbf24";
    legBadge.textContent = finpulseProb < 0.50 ? "FALSE POSITIVE — FLAGGED BY STATIC RULE" : "FLAGGED BY STATIC THRESHOLD";
  } else {
    legEl.style.color = "#94a3b8";
    legBadge.style.background = "rgba(148, 163, 184, 0.16)";
    legBadge.style.color = "#cbd5e1";
    legBadge.textContent = finpulseProb >= 0.50 ? "FALSE NEGATIVE — MISSED BY $5K RULE" : "PASSED STATIC RULES";
  }

  // Render Local SHAP Attribution Waterfall
  const contribs = [
    { label: "Counterparty PageRank + Velocity Synergy", delta: cPageRank + cSynergyGraph },
    { label: "AML Structuring + Benford Divergence Synergy", delta: cStruct + cSynergySmurf },
    { label: "Rolling 1h / 24h Velocity Z-Score Burst", delta: cVel1 + cVel24 },
    { label: "Benford First-Digit KL Divergence", delta: cBenford },
    { label: "Merchant Category (MCC) Shannon Entropy", delta: cMcc },
    { label: "Device Fingerprint / ASN Geo-Mismatch", delta: cIp },
    { label: "Cross-Border Settlement Corridor Risk", delta: cCorridor }
  ].sort((a, b) => Math.abs(b.delta) - Math.abs(a.delta));

  const maxAbs = Math.max(...contribs.map(c => Math.abs(c.delta)), 0.5);
  document.getElementById("sim-shap-bars").innerHTML = contribs.map(c => {
    const pct = Math.min(100, (Math.abs(c.delta) / maxAbs) * 100);
    const isPos = c.delta >= 0;
    const color = isPos ? "#f43f5e" : "#10b981";
    const sign = isPos ? "+" : "";
    return `<div class="bar-row" style="margin-bottom:9px;">
      <div class="bar-label-line">
        <span style="color:#e2e8f0;font-size:12px;">${c.label}</span>
        <span style="font-family:monospace;color:${color};font-weight:700;">${sign}${c.delta.toFixed(2)} log-odds</span>
      </div>
      <div class="bar-track" style="height:7px;">
        <div class="bar-fill" style="width:${pct.toFixed(1)}%;background:${color};"></div>
      </div>
    </div>`;
  }).join("");
}

window.addEventListener("DOMContentLoaded", () => {
  renderKPIs(BENCHMARK_DATA);
  renderOverview(BENCHMARK_DATA);
  renderBenchmarks(BENCHMARK_DATA);
  loadPreset(0);

  const params = new URLSearchParams(window.location.search);
  const tab = params.get("tab");
  if (tab && ["overview", "benchmarks", "simulator"].includes(tab)) {
    switchTab(tab);
  }
  const preset = params.get("preset");
  if (preset !== null && PRESETS[parseInt(preset, 10)]) {
    loadPreset(parseInt(preset, 10));
  }
});
"""


def main() -> None:
    payload = json.loads(JSON_PATH.read_text(encoding="utf-8"))
    js_code = JS_TEMPLATE.replace("__BENCHMARK_JSON__", json.dumps(payload, indent=2))
    OUT_JS.write_text(js_code, encoding="utf-8")
    print(f"Wrote {OUT_JS} ({OUT_JS.stat().st_size:,} bytes)")


if __name__ == "__main__":
    main()
