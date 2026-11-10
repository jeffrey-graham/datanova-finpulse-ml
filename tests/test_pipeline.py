#!/usr/bin/env python3
"""
Unit & Integration Test Suite for FinPulse-ML (`src/pipeline.py`).
Run with: python3 -m unittest discover -s tests -v
"""

from __future__ import annotations

import json
import unittest
from pathlib import Path

from src.pipeline import (
    FEATURE_NAMES,
    FinPulseEnsemble,
    GBDTClassifier,
    IsolationForestDetector,
    LegacyRuleEngine,
    compute_binary_metrics,
    extract_feature_Vector,
    generate_benchmark_dataset,
    train_and_evaluate_pipeline,
)


class TestFinPulsePipeline(unittest.TestCase):
    @classmethod
    def setUpClass(cls) -> None:
        cls.records = generate_benchmark_dataset(n_samples=600, seed=12345, output_csv=None)
        cls.X = [extract_feature_Vector(r) for r in cls.records]
        cls.y = [int(r["is_fraud"]) for r in cls.records]

    def test_dataset_schema_and_engineered_features(self) -> None:
        self.assertEqual(len(self.records), 600)
        sample = self.records[0]
        for feat in FEATURE_NAMES:
            self.assertIn(feat, sample)
        self.assertIn("payment_rail", sample)
        self.assertIn("corridor", sample)
        self.assertIn("fraud_typology", sample)
        # Cyclic encoding bounds check
        for r in self.records[:50]:
            self.assertGreaterEqual(r["tod_sin"], -1.0001)
            self.assertLessEqual(r["tod_sin"], 1.0001)
            self.assertGreaterEqual(r["tod_cos"], -1.0001)
            self.assertLessEqual(r["tod_cos"], 1.0001)
            self.assertGreater(r["amount_usd"], 0.0)

    def test_isolation_forest_anomaly_scores(self) -> None:
        iso = IsolationForestDetector(n_trees=25, sample_size=128, seed=42)
        iso.fit(self.X[:400])
        scores = iso.predict_proba(self.X[400:])
        self.assertEqual(len(scores), 200)
        for s in scores:
            self.assertGreaterEqual(s, 0.0)
            self.assertLessEqual(s, 1.0)

    def test_gbdt_and_calibrated_ensemble_outperform_legacy_rules(self) -> None:
        X_train, y_train = self.X[:420], self.y[:420]
        X_test, y_test = self.X[420:], self.y[420:]

        rules = LegacyRuleEngine()
        rule_metrics = compute_binary_metrics(y_test, rules.predict_proba(X_test))

        gbdt = GBDTClassifier(n_estimators=25, learning_rate=0.15, seed=42)
        gbdt.fit(X_train, y_train)
        gbdt_metrics = compute_binary_metrics(y_test, gbdt.predict_proba(X_test))

        ens = FinPulseEnsemble(seed=42)
        ens.fit(X_train, y_train)
        ens_metrics = compute_binary_metrics(y_test, ens.predict_proba(X_test))

        self.assertGreater(gbdt_metrics["roc_auc"], 0.88)
        self.assertGreater(ens_metrics["roc_auc"], rule_metrics["roc_auc"])
        self.assertGreater(ens_metrics["pr_auc"], rule_metrics["pr_auc"])
        self.assertLess(ens_metrics["brier_score"], rule_metrics["brier_score"])

    def test_local_shap_style_explanation(self) -> None:
        ens = FinPulseEnsemble(seed=42)
        ens.fit(self.X[:400], self.y[:400])
        explanation = ens.explain_transaction(self.X[0])
        self.assertIn("baseline_probability", explanation)
        self.assertIn("predicted_probability", explanation)
        self.assertEqual(len(explanation["top_attributions"]), len(FEATURE_NAMES))

    def test_saved_benchmark_artifacts_exist(self) -> None:
        root = Path(__file__).resolve().parents[1]
        csv_file = root / "data" / "transactions_benchmark.csv"
        json_file = root / "data" / "model_evaluation_results.json"
        if not json_file.exists():
            train_and_evaluate_pipeline(n_samples=1000, seed=2026, save_artifacts=True)
        self.assertTrue(csv_file.exists())
        self.assertTrue(json_file.exists())
        payload = json.loads(json_file.read_text(encoding="utf-8"))
        self.assertIn("FinPulse_Calibrated_Ensemble", payload["models"])
        self.assertGreater(
            payload["models"]["FinPulse_Calibrated_Ensemble"]["roc_auc"],
            payload["models"]["Legacy_Rule_Engine"]["roc_auc"],
        )


if __name__ == "__main__":
    unittest.main()
