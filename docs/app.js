// FinPulse-ML Interactive Decision Intelligence Dashboard (DataNova 2026)
// Auto-synchronized with data/model_evaluation_results.json

const BENCHMARK_DATA = {
  "project": "FinPulse-ML: Real-Time Multi-Rail Payment Fraud & Graph Velocity Intelligence",
  "hackathon": "DataNova 2026 \u2013 Global Data-thon (Fintech Track)",
  "generated_at_utc": "2026-11-10T03:13:21Z",
  "runtime_seconds": 8.32,
  "dataset_summary": {
    "total_transactions": 10000,
    "train_transactions": 7500,
    "test_transactions": 2500,
    "total_volume_usd": 30803174.4,
    "overall_fraud_rate_pct": 5.49,
    "engineered_feature_count": 11,
    "payment_rails_count": 5,
    "corridors_count": 8
  },
  "models": {
    "Legacy_Rule_Engine": {
      "roc_auc": 0.7805,
      "pr_auc": 0.2517,
      "f1_score": 0.3103,
      "optimal_threshold": 0.56,
      "precision": 0.1523,
      "recall": 0.5234,
      "false_positive_rate": 0.1573,
      "precision_at_90_recall": 0.0644,
      "fpr_at_90_recall": 0.7099,
      "brier_score": 0.1183,
      "confusion_matrix": {
        "tp": 67,
        "fp": 373,
        "tn": 1999,
        "fn": 61
      },
      "roc_curve": [
        {
          "fpr": 0.0,
          "tpr": 0.0,
          "threshold": 1.0
        },
        {
          "fpr": 0.0,
          "tpr": 0.0078,
          "threshold": 0.99
        },
        {
          "fpr": 0.0148,
          "tpr": 0.1641,
          "threshold": 0.9
        },
        {
          "fpr": 0.0371,
          "tpr": 0.1797,
          "threshold": 0.9
        },
        {
          "fpr": 0.0586,
          "tpr": 0.2109,
          "threshold": 0.9
        },
        {
          "fpr": 0.0704,
          "tpr": 0.4219,
          "threshold": 0.56
        },
        {
          "fpr": 0.0919,
          "tpr": 0.4531,
          "threshold": 0.56
        },
        {
          "fpr": 0.1142,
          "tpr": 0.4688,
          "threshold": 0.56
        },
        {
          "fpr": 0.1362,
          "tpr": 0.4922,
          "threshold": 0.56
        },
        {
          "fpr": 0.1573,
          "tpr": 0.5312,
          "threshold": 0.55
        },
        {
          "fpr": 0.1788,
          "tpr": 0.5625,
          "threshold": 0.42
        },
        {
          "fpr": 0.1986,
          "tpr": 0.625,
          "threshold": 0.42
        },
        {
          "fpr": 0.2201,
          "tpr": 0.6562,
          "threshold": 0.42
        },
        {
          "fpr": 0.2424,
          "tpr": 0.6719,
          "threshold": 0.42
        },
        {
          "fpr": 0.2643,
          "tpr": 0.6953,
          "threshold": 0.42
        },
        {
          "fpr": 0.2812,
          "tpr": 0.8125,
          "threshold": 0.08
        },
        {
          "fpr": 0.3044,
          "tpr": 0.8125,
          "threshold": 0.08
        },
        {
          "fpr": 0.3267,
          "tpr": 0.8281,
          "threshold": 0.08
        },
        {
          "fpr": 0.3491,
          "tpr": 0.8438,
          "threshold": 0.08
        },
        {
          "fpr": 0.3723,
          "tpr": 0.8438,
          "threshold": 0.08
        },
        {
          "fpr": 0.3954,
          "tpr": 0.8438,
          "threshold": 0.08
        },
        {
          "fpr": 0.4182,
          "tpr": 0.8516,
          "threshold": 0.08
        },
        {
          "fpr": 0.4414,
          "tpr": 0.8516,
          "threshold": 0.08
        },
        {
          "fpr": 0.4633,
          "tpr": 0.875,
          "threshold": 0.08
        },
        {
          "fpr": 0.4865,
          "tpr": 0.875,
          "threshold": 0.08
        },
        {
          "fpr": 0.5097,
          "tpr": 0.875,
          "threshold": 0.08
        },
        {
          "fpr": 0.5325,
          "tpr": 0.8828,
          "threshold": 0.08
        },
        {
          "fpr": 0.5556,
          "tpr": 0.8828,
          "threshold": 0.08
        },
        {
          "fpr": 0.5784,
          "tpr": 0.8906,
          "threshold": 0.08
        },
        {
          "fpr": 0.6016,
          "tpr": 0.8906,
          "threshold": 0.08
        },
        {
          "fpr": 0.6248,
          "tpr": 0.8906,
          "threshold": 0.08
        },
        {
          "fpr": 0.648,
          "tpr": 0.8906,
          "threshold": 0.08
        },
        {
          "fpr": 0.6712,
          "tpr": 0.8906,
          "threshold": 0.08
        },
        {
          "fpr": 0.6944,
          "tpr": 0.8906,
          "threshold": 0.08
        },
        {
          "fpr": 0.7167,
          "tpr": 0.9062,
          "threshold": 0.08
        },
        {
          "fpr": 0.739,
          "tpr": 0.9219,
          "threshold": 0.08
        },
        {
          "fpr": 0.7622,
          "tpr": 0.9219,
          "threshold": 0.08
        },
        {
          "fpr": 0.7854,
          "tpr": 0.9219,
          "threshold": 0.08
        },
        {
          "fpr": 0.8086,
          "tpr": 0.9219,
          "threshold": 0.08
        },
        {
          "fpr": 0.8309,
          "tpr": 0.9375,
          "threshold": 0.08
        },
        {
          "fpr": 0.8537,
          "tpr": 0.9453,
          "threshold": 0.08
        },
        {
          "fpr": 0.8769,
          "tpr": 0.9453,
          "threshold": 0.08
        },
        {
          "fpr": 0.8997,
          "tpr": 0.9531,
          "threshold": 0.08
        },
        {
          "fpr": 0.922,
          "tpr": 0.9688,
          "threshold": 0.08
        },
        {
          "fpr": 0.9444,
          "tpr": 0.9844,
          "threshold": 0.08
        },
        {
          "fpr": 0.9671,
          "tpr": 0.9922,
          "threshold": 0.08
        },
        {
          "fpr": 0.9899,
          "tpr": 1.0,
          "threshold": 0.08
        },
        {
          "fpr": 1.0,
          "tpr": 1.0,
          "threshold": 0.08
        }
      ],
      "pr_curve": [
        {
          "recall": 0.0,
          "precision": 1.0,
          "threshold": 1.0
        },
        {
          "recall": 0.0078,
          "precision": 1.0,
          "threshold": 0.99
        },
        {
          "recall": 0.1641,
          "precision": 0.375,
          "threshold": 0.9
        },
        {
          "recall": 0.1797,
          "precision": 0.2072,
          "threshold": 0.9
        },
        {
          "recall": 0.2109,
          "precision": 0.1627,
          "threshold": 0.9
        },
        {
          "recall": 0.4219,
          "precision": 0.2443,
          "threshold": 0.56
        },
        {
          "recall": 0.4531,
          "precision": 0.2101,
          "threshold": 0.56
        },
        {
          "recall": 0.4688,
          "precision": 0.1813,
          "threshold": 0.56
        },
        {
          "recall": 0.4922,
          "precision": 0.1632,
          "threshold": 0.56
        },
        {
          "recall": 0.5312,
          "precision": 0.1542,
          "threshold": 0.55
        },
        {
          "recall": 0.5625,
          "precision": 0.1452,
          "threshold": 0.42
        },
        {
          "recall": 0.625,
          "precision": 0.1452,
          "threshold": 0.42
        },
        {
          "recall": 0.6562,
          "precision": 0.1386,
          "threshold": 0.42
        },
        {
          "recall": 0.6719,
          "precision": 0.1301,
          "threshold": 0.42
        },
        {
          "recall": 0.6953,
          "precision": 0.1243,
          "threshold": 0.42
        },
        {
          "recall": 0.8125,
          "precision": 0.1349,
          "threshold": 0.08
        },
        {
          "recall": 0.8125,
          "precision": 0.1259,
          "threshold": 0.08
        },
        {
          "recall": 0.8281,
          "precision": 0.1203,
          "threshold": 0.08
        },
        {
          "recall": 0.8438,
          "precision": 0.1154,
          "threshold": 0.08
        },
        {
          "recall": 0.8438,
          "precision": 0.109,
          "threshold": 0.08
        },
        {
          "recall": 0.8438,
          "precision": 0.1033,
          "threshold": 0.08
        },
        {
          "recall": 0.8516,
          "precision": 0.099,
          "threshold": 0.08
        },
        {
          "recall": 0.8516,
          "precision": 0.0943,
          "threshold": 0.08
        },
        {
          "recall": 0.875,
          "precision": 0.0925,
          "threshold": 0.08
        },
        {
          "recall": 0.875,
          "precision": 0.0885,
          "threshold": 0.08
        },
        {
          "recall": 0.875,
          "precision": 0.0848,
          "threshold": 0.08
        },
        {
          "recall": 0.8828,
          "precision": 0.0821,
          "threshold": 0.08
        },
        {
          "recall": 0.8828,
          "precision": 0.079,
          "threshold": 0.08
        },
        {
          "recall": 0.8906,
          "precision": 0.0767,
          "threshold": 0.08
        },
        {
          "recall": 0.8906,
          "precision": 0.074,
          "threshold": 0.08
        },
        {
          "recall": 0.8906,
          "precision": 0.0714,
          "threshold": 0.08
        },
        {
          "recall": 0.8906,
          "precision": 0.069,
          "threshold": 0.08
        },
        {
          "recall": 0.8906,
          "precision": 0.0668,
          "threshold": 0.08
        },
        {
          "recall": 0.8906,
          "precision": 0.0647,
          "threshold": 0.08
        },
        {
          "recall": 0.9062,
          "precision": 0.0639,
          "threshold": 0.08
        },
        {
          "recall": 0.9219,
          "precision": 0.0631,
          "threshold": 0.08
        },
        {
          "recall": 0.9219,
          "precision": 0.0613,
          "threshold": 0.08
        },
        {
          "recall": 0.9219,
          "precision": 0.0596,
          "threshold": 0.08
        },
        {
          "recall": 0.9219,
          "precision": 0.058,
          "threshold": 0.08
        },
        {
          "recall": 0.9375,
          "precision": 0.0574,
          "threshold": 0.08
        },
        {
          "recall": 0.9453,
          "precision": 0.0564,
          "threshold": 0.08
        },
        {
          "recall": 0.9453,
          "precision": 0.055,
          "threshold": 0.08
        },
        {
          "recall": 0.9531,
          "precision": 0.0541,
          "threshold": 0.08
        },
        {
          "recall": 0.9688,
          "precision": 0.0537,
          "threshold": 0.08
        },
        {
          "recall": 0.9844,
          "precision": 0.0533,
          "threshold": 0.08
        },
        {
          "recall": 0.9922,
          "precision": 0.0525,
          "threshold": 0.08
        },
        {
          "recall": 1.0,
          "precision": 0.0517,
          "threshold": 0.08
        },
        {
          "recall": 1.0,
          "precision": 0.0512,
          "threshold": 0.08
        }
      ]
    },
    "Isolation_Forest_Unsupervised": {
      "roc_auc": 0.9455,
      "pr_auc": 0.6926,
      "f1_score": 0.6726,
      "optimal_threshold": 0.6331,
      "precision": 0.7755,
      "recall": 0.5938,
      "false_positive_rate": 0.0093,
      "precision_at_90_recall": 0.2601,
      "fpr_at_90_recall": 0.1391,
      "brier_score": 0.0671,
      "confusion_matrix": {
        "tp": 76,
        "fp": 22,
        "tn": 2350,
        "fn": 52
      },
      "roc_curve": [
        {
          "fpr": 0.0,
          "tpr": 0.0,
          "threshold": 1.0
        },
        {
          "fpr": 0.0,
          "tpr": 0.0078,
          "threshold": 0.999
        },
        {
          "fpr": 0.0034,
          "tpr": 0.375,
          "threshold": 0.7224
        },
        {
          "fpr": 0.0139,
          "tpr": 0.6094,
          "threshold": 0.604
        },
        {
          "fpr": 0.0329,
          "tpr": 0.6875,
          "threshold": 0.5423
        },
        {
          "fpr": 0.0519,
          "tpr": 0.7656,
          "threshold": 0.4974
        },
        {
          "fpr": 0.0712,
          "tpr": 0.8359,
          "threshold": 0.4463
        },
        {
          "fpr": 0.0932,
          "tpr": 0.8594,
          "threshold": 0.4015
        },
        {
          "fpr": 0.1147,
          "tpr": 0.8906,
          "threshold": 0.3735
        },
        {
          "fpr": 0.1374,
          "tpr": 0.8984,
          "threshold": 0.3421
        },
        {
          "fpr": 0.1602,
          "tpr": 0.9062,
          "threshold": 0.3212
        },
        {
          "fpr": 0.183,
          "tpr": 0.9141,
          "threshold": 0.3021
        },
        {
          "fpr": 0.2062,
          "tpr": 0.9141,
          "threshold": 0.2861
        },
        {
          "fpr": 0.2289,
          "tpr": 0.9219,
          "threshold": 0.2713
        },
        {
          "fpr": 0.2517,
          "tpr": 0.9297,
          "threshold": 0.2597
        },
        {
          "fpr": 0.2745,
          "tpr": 0.9375,
          "threshold": 0.2502
        },
        {
          "fpr": 0.2976,
          "tpr": 0.9375,
          "threshold": 0.2389
        },
        {
          "fpr": 0.3208,
          "tpr": 0.9375,
          "threshold": 0.2301
        },
        {
          "fpr": 0.344,
          "tpr": 0.9375,
          "threshold": 0.2223
        },
        {
          "fpr": 0.3664,
          "tpr": 0.9531,
          "threshold": 0.2152
        },
        {
          "fpr": 0.3895,
          "tpr": 0.9531,
          "threshold": 0.2095
        },
        {
          "fpr": 0.4127,
          "tpr": 0.9531,
          "threshold": 0.2015
        },
        {
          "fpr": 0.4355,
          "tpr": 0.9609,
          "threshold": 0.1961
        },
        {
          "fpr": 0.4587,
          "tpr": 0.9609,
          "threshold": 0.1898
        },
        {
          "fpr": 0.481,
          "tpr": 0.9766,
          "threshold": 0.1843
        },
        {
          "fpr": 0.5042,
          "tpr": 0.9766,
          "threshold": 0.1779
        },
        {
          "fpr": 0.527,
          "tpr": 0.9844,
          "threshold": 0.1727
        },
        {
          "fpr": 0.5502,
          "tpr": 0.9844,
          "threshold": 0.1677
        },
        {
          "fpr": 0.5734,
          "tpr": 0.9844,
          "threshold": 0.163
        },
        {
          "fpr": 0.5965,
          "tpr": 0.9844,
          "threshold": 0.1578
        },
        {
          "fpr": 0.6189,
          "tpr": 1.0,
          "threshold": 0.1534
        },
        {
          "fpr": 0.6421,
          "tpr": 1.0,
          "threshold": 0.1477
        },
        {
          "fpr": 0.6653,
          "tpr": 1.0,
          "threshold": 0.1423
        },
        {
          "fpr": 0.6884,
          "tpr": 1.0,
          "threshold": 0.1369
        },
        {
          "fpr": 0.7116,
          "tpr": 1.0,
          "threshold": 0.1308
        },
        {
          "fpr": 0.7348,
          "tpr": 1.0,
          "threshold": 0.1258
        },
        {
          "fpr": 0.758,
          "tpr": 1.0,
          "threshold": 0.1183
        },
        {
          "fpr": 0.7812,
          "tpr": 1.0,
          "threshold": 0.1118
        },
        {
          "fpr": 0.8044,
          "tpr": 1.0,
          "threshold": 0.1061
        },
        {
          "fpr": 0.8276,
          "tpr": 1.0,
          "threshold": 0.0994
        },
        {
          "fpr": 0.8508,
          "tpr": 1.0,
          "threshold": 0.0925
        },
        {
          "fpr": 0.8739,
          "tpr": 1.0,
          "threshold": 0.085
        },
        {
          "fpr": 0.8971,
          "tpr": 1.0,
          "threshold": 0.0782
        },
        {
          "fpr": 0.9203,
          "tpr": 1.0,
          "threshold": 0.0688
        },
        {
          "fpr": 0.9435,
          "tpr": 1.0,
          "threshold": 0.0587
        },
        {
          "fpr": 0.9667,
          "tpr": 1.0,
          "threshold": 0.0456
        },
        {
          "fpr": 0.9899,
          "tpr": 1.0,
          "threshold": 0.0274
        },
        {
          "fpr": 1.0,
          "tpr": 1.0,
          "threshold": 0.001
        }
      ],
      "pr_curve": [
        {
          "recall": 0.0,
          "precision": 1.0,
          "threshold": 1.0
        },
        {
          "recall": 0.0078,
          "precision": 1.0,
          "threshold": 0.999
        },
        {
          "recall": 0.375,
          "precision": 0.8571,
          "threshold": 0.7224
        },
        {
          "recall": 0.6094,
          "precision": 0.7027,
          "threshold": 0.604
        },
        {
          "recall": 0.6875,
          "precision": 0.5301,
          "threshold": 0.5423
        },
        {
          "recall": 0.7656,
          "precision": 0.4434,
          "threshold": 0.4974
        },
        {
          "recall": 0.8359,
          "precision": 0.3877,
          "threshold": 0.4463
        },
        {
          "recall": 0.8594,
          "precision": 0.3323,
          "threshold": 0.4015
        },
        {
          "recall": 0.8906,
          "precision": 0.2953,
          "threshold": 0.3735
        },
        {
          "recall": 0.8984,
          "precision": 0.2608,
          "threshold": 0.3421
        },
        {
          "recall": 0.9062,
          "precision": 0.2339,
          "threshold": 0.3212
        },
        {
          "recall": 0.9141,
          "precision": 0.2123,
          "threshold": 0.3021
        },
        {
          "recall": 0.9141,
          "precision": 0.1931,
          "threshold": 0.2861
        },
        {
          "recall": 0.9219,
          "precision": 0.1785,
          "threshold": 0.2713
        },
        {
          "recall": 0.9297,
          "precision": 0.1662,
          "threshold": 0.2597
        },
        {
          "recall": 0.9375,
          "precision": 0.1556,
          "threshold": 0.2502
        },
        {
          "recall": 0.9375,
          "precision": 0.1453,
          "threshold": 0.2389
        },
        {
          "recall": 0.9375,
          "precision": 0.1362,
          "threshold": 0.2301
        },
        {
          "recall": 0.9375,
          "precision": 0.1282,
          "threshold": 0.2223
        },
        {
          "recall": 0.9531,
          "precision": 0.1231,
          "threshold": 0.2152
        },
        {
          "recall": 0.9531,
          "precision": 0.1166,
          "threshold": 0.2095
        },
        {
          "recall": 0.9531,
          "precision": 0.1108,
          "threshold": 0.2015
        },
        {
          "recall": 0.9609,
          "precision": 0.1064,
          "threshold": 0.1961
        },
        {
          "recall": 0.9609,
          "precision": 0.1016,
          "threshold": 0.1898
        },
        {
          "recall": 0.9766,
          "precision": 0.0987,
          "threshold": 0.1843
        },
        {
          "recall": 0.9766,
          "precision": 0.0946,
          "threshold": 0.1779
        },
        {
          "recall": 0.9844,
          "precision": 0.0916,
          "threshold": 0.1727
        },
        {
          "recall": 0.9844,
          "precision": 0.0881,
          "threshold": 0.1677
        },
        {
          "recall": 0.9844,
          "precision": 0.0848,
          "threshold": 0.163
        },
        {
          "recall": 0.9844,
          "precision": 0.0818,
          "threshold": 0.1578
        },
        {
          "recall": 1.0,
          "precision": 0.0802,
          "threshold": 0.1534
        },
        {
          "recall": 1.0,
          "precision": 0.0775,
          "threshold": 0.1477
        },
        {
          "recall": 1.0,
          "precision": 0.075,
          "threshold": 0.1423
        },
        {
          "recall": 1.0,
          "precision": 0.0727,
          "threshold": 0.1369
        },
        {
          "recall": 1.0,
          "precision": 0.0705,
          "threshold": 0.1308
        },
        {
          "recall": 1.0,
          "precision": 0.0684,
          "threshold": 0.1258
        },
        {
          "recall": 1.0,
          "precision": 0.0665,
          "threshold": 0.1183
        },
        {
          "recall": 1.0,
          "precision": 0.0646,
          "threshold": 0.1118
        },
        {
          "recall": 1.0,
          "precision": 0.0629,
          "threshold": 0.1061
        },
        {
          "recall": 1.0,
          "precision": 0.0612,
          "threshold": 0.0994
        },
        {
          "recall": 1.0,
          "precision": 0.0596,
          "threshold": 0.0925
        },
        {
          "recall": 1.0,
          "precision": 0.0582,
          "threshold": 0.085
        },
        {
          "recall": 1.0,
          "precision": 0.0567,
          "threshold": 0.0782
        },
        {
          "recall": 1.0,
          "precision": 0.0554,
          "threshold": 0.0688
        },
        {
          "recall": 1.0,
          "precision": 0.0541,
          "threshold": 0.0587
        },
        {
          "recall": 1.0,
          "precision": 0.0529,
          "threshold": 0.0456
        },
        {
          "recall": 1.0,
          "precision": 0.0517,
          "threshold": 0.0274
        },
        {
          "recall": 1.0,
          "precision": 0.0512,
          "threshold": 0.001
        }
      ]
    },
    "Gradient_Boosted_Decision_Trees": {
      "roc_auc": 0.9835,
      "pr_auc": 0.8292,
      "f1_score": 0.7623,
      "optimal_threshold": 0.2143,
      "precision": 0.7372,
      "recall": 0.7891,
      "false_positive_rate": 0.0152,
      "precision_at_90_recall": 0.5498,
      "fpr_at_90_recall": 0.0401,
      "brier_score": 0.0232,
      "confusion_matrix": {
        "tp": 101,
        "fp": 36,
        "tn": 2336,
        "fn": 27
      },
      "roc_curve": [
        {
          "fpr": 0.0,
          "tpr": 0.0,
          "threshold": 1.0
        },
        {
          "fpr": 0.0,
          "tpr": 0.0078,
          "threshold": 0.8266
        },
        {
          "fpr": 0.0013,
          "tpr": 0.4141,
          "threshold": 0.4825
        },
        {
          "fpr": 0.0101,
          "tpr": 0.6797,
          "threshold": 0.2679
        },
        {
          "fpr": 0.0245,
          "tpr": 0.8438,
          "threshold": 0.1491
        },
        {
          "fpr": 0.0438,
          "tpr": 0.9141,
          "threshold": 0.0835
        },
        {
          "fpr": 0.0658,
          "tpr": 0.9375,
          "threshold": 0.0701
        },
        {
          "fpr": 0.089,
          "tpr": 0.9375,
          "threshold": 0.0557
        },
        {
          "fpr": 0.1109,
          "tpr": 0.9609,
          "threshold": 0.0487
        },
        {
          "fpr": 0.1332,
          "tpr": 0.9766,
          "threshold": 0.0456
        },
        {
          "fpr": 0.156,
          "tpr": 0.9844,
          "threshold": 0.0392
        },
        {
          "fpr": 0.1792,
          "tpr": 0.9844,
          "threshold": 0.0359
        },
        {
          "fpr": 0.2019,
          "tpr": 0.9922,
          "threshold": 0.0346
        },
        {
          "fpr": 0.2251,
          "tpr": 0.9922,
          "threshold": 0.0335
        },
        {
          "fpr": 0.2483,
          "tpr": 0.9922,
          "threshold": 0.0317
        },
        {
          "fpr": 0.2715,
          "tpr": 0.9922,
          "threshold": 0.0297
        },
        {
          "fpr": 0.2947,
          "tpr": 0.9922,
          "threshold": 0.0286
        },
        {
          "fpr": 0.3175,
          "tpr": 1.0,
          "threshold": 0.0279
        },
        {
          "fpr": 0.3406,
          "tpr": 1.0,
          "threshold": 0.0261
        },
        {
          "fpr": 0.3638,
          "tpr": 1.0,
          "threshold": 0.024
        },
        {
          "fpr": 0.387,
          "tpr": 1.0,
          "threshold": 0.0239
        },
        {
          "fpr": 0.4102,
          "tpr": 1.0,
          "threshold": 0.0239
        },
        {
          "fpr": 0.4334,
          "tpr": 1.0,
          "threshold": 0.0237
        },
        {
          "fpr": 0.4566,
          "tpr": 1.0,
          "threshold": 0.0225
        },
        {
          "fpr": 0.4798,
          "tpr": 1.0,
          "threshold": 0.0218
        },
        {
          "fpr": 0.503,
          "tpr": 1.0,
          "threshold": 0.0204
        },
        {
          "fpr": 0.5261,
          "tpr": 1.0,
          "threshold": 0.0203
        },
        {
          "fpr": 0.5493,
          "tpr": 1.0,
          "threshold": 0.0203
        },
        {
          "fpr": 0.5725,
          "tpr": 1.0,
          "threshold": 0.0195
        },
        {
          "fpr": 0.5957,
          "tpr": 1.0,
          "threshold": 0.0192
        },
        {
          "fpr": 0.6189,
          "tpr": 1.0,
          "threshold": 0.0174
        },
        {
          "fpr": 0.6421,
          "tpr": 1.0,
          "threshold": 0.0174
        },
        {
          "fpr": 0.6653,
          "tpr": 1.0,
          "threshold": 0.016
        },
        {
          "fpr": 0.6884,
          "tpr": 1.0,
          "threshold": 0.016
        },
        {
          "fpr": 0.7116,
          "tpr": 1.0,
          "threshold": 0.0159
        },
        {
          "fpr": 0.7348,
          "tpr": 1.0,
          "threshold": 0.0136
        },
        {
          "fpr": 0.758,
          "tpr": 1.0,
          "threshold": 0.0136
        },
        {
          "fpr": 0.7812,
          "tpr": 1.0,
          "threshold": 0.0136
        },
        {
          "fpr": 0.8044,
          "tpr": 1.0,
          "threshold": 0.0136
        },
        {
          "fpr": 0.8276,
          "tpr": 1.0,
          "threshold": 0.0136
        },
        {
          "fpr": 0.8508,
          "tpr": 1.0,
          "threshold": 0.0136
        },
        {
          "fpr": 0.8739,
          "tpr": 1.0,
          "threshold": 0.0136
        },
        {
          "fpr": 0.8971,
          "tpr": 1.0,
          "threshold": 0.0136
        },
        {
          "fpr": 0.9203,
          "tpr": 1.0,
          "threshold": 0.0136
        },
        {
          "fpr": 0.9435,
          "tpr": 1.0,
          "threshold": 0.0136
        },
        {
          "fpr": 0.9667,
          "tpr": 1.0,
          "threshold": 0.0136
        },
        {
          "fpr": 0.9899,
          "tpr": 1.0,
          "threshold": 0.0136
        },
        {
          "fpr": 1.0,
          "tpr": 1.0,
          "threshold": 0.0136
        }
      ],
      "pr_curve": [
        {
          "recall": 0.0,
          "precision": 1.0,
          "threshold": 1.0
        },
        {
          "recall": 0.0078,
          "precision": 1.0,
          "threshold": 0.8266
        },
        {
          "recall": 0.4141,
          "precision": 0.9464,
          "threshold": 0.4825
        },
        {
          "recall": 0.6797,
          "precision": 0.7838,
          "threshold": 0.2679
        },
        {
          "recall": 0.8438,
          "precision": 0.6506,
          "threshold": 0.1491
        },
        {
          "recall": 0.9141,
          "precision": 0.5294,
          "threshold": 0.0835
        },
        {
          "recall": 0.9375,
          "precision": 0.4348,
          "threshold": 0.0701
        },
        {
          "recall": 0.9375,
          "precision": 0.3625,
          "threshold": 0.0557
        },
        {
          "recall": 0.9609,
          "precision": 0.3187,
          "threshold": 0.0487
        },
        {
          "recall": 0.9766,
          "precision": 0.2834,
          "threshold": 0.0456
        },
        {
          "recall": 0.9844,
          "precision": 0.254,
          "threshold": 0.0392
        },
        {
          "recall": 0.9844,
          "precision": 0.2287,
          "threshold": 0.0359
        },
        {
          "recall": 0.9922,
          "precision": 0.2096,
          "threshold": 0.0346
        },
        {
          "recall": 0.9922,
          "precision": 0.1921,
          "threshold": 0.0335
        },
        {
          "recall": 0.9922,
          "precision": 0.1774,
          "threshold": 0.0317
        },
        {
          "recall": 0.9922,
          "precision": 0.1647,
          "threshold": 0.0297
        },
        {
          "recall": 0.9922,
          "precision": 0.1538,
          "threshold": 0.0286
        },
        {
          "recall": 1.0,
          "precision": 0.1453,
          "threshold": 0.0279
        },
        {
          "recall": 1.0,
          "precision": 0.1368,
          "threshold": 0.0261
        },
        {
          "recall": 1.0,
          "precision": 0.1292,
          "threshold": 0.024
        },
        {
          "recall": 1.0,
          "precision": 0.1224,
          "threshold": 0.0239
        },
        {
          "recall": 1.0,
          "precision": 0.1163,
          "threshold": 0.0239
        },
        {
          "recall": 1.0,
          "precision": 0.1107,
          "threshold": 0.0237
        },
        {
          "recall": 1.0,
          "precision": 0.1057,
          "threshold": 0.0225
        },
        {
          "recall": 1.0,
          "precision": 0.1011,
          "threshold": 0.0218
        },
        {
          "recall": 1.0,
          "precision": 0.0969,
          "threshold": 0.0204
        },
        {
          "recall": 1.0,
          "precision": 0.093,
          "threshold": 0.0203
        },
        {
          "recall": 1.0,
          "precision": 0.0894,
          "threshold": 0.0203
        },
        {
          "recall": 1.0,
          "precision": 0.0861,
          "threshold": 0.0195
        },
        {
          "recall": 1.0,
          "precision": 0.0831,
          "threshold": 0.0192
        },
        {
          "recall": 1.0,
          "precision": 0.0802,
          "threshold": 0.0174
        },
        {
          "recall": 1.0,
          "precision": 0.0775,
          "threshold": 0.0174
        },
        {
          "recall": 1.0,
          "precision": 0.075,
          "threshold": 0.016
        },
        {
          "recall": 1.0,
          "precision": 0.0727,
          "threshold": 0.016
        },
        {
          "recall": 1.0,
          "precision": 0.0705,
          "threshold": 0.0159
        },
        {
          "recall": 1.0,
          "precision": 0.0684,
          "threshold": 0.0136
        },
        {
          "recall": 1.0,
          "precision": 0.0665,
          "threshold": 0.0136
        },
        {
          "recall": 1.0,
          "precision": 0.0646,
          "threshold": 0.0136
        },
        {
          "recall": 1.0,
          "precision": 0.0629,
          "threshold": 0.0136
        },
        {
          "recall": 1.0,
          "precision": 0.0612,
          "threshold": 0.0136
        },
        {
          "recall": 1.0,
          "precision": 0.0596,
          "threshold": 0.0136
        },
        {
          "recall": 1.0,
          "precision": 0.0582,
          "threshold": 0.0136
        },
        {
          "recall": 1.0,
          "precision": 0.0567,
          "threshold": 0.0136
        },
        {
          "recall": 1.0,
          "precision": 0.0554,
          "threshold": 0.0136
        },
        {
          "recall": 1.0,
          "precision": 0.0541,
          "threshold": 0.0136
        },
        {
          "recall": 1.0,
          "precision": 0.0529,
          "threshold": 0.0136
        },
        {
          "recall": 1.0,
          "precision": 0.0517,
          "threshold": 0.0136
        },
        {
          "recall": 1.0,
          "precision": 0.0512,
          "threshold": 0.0136
        }
      ]
    },
    "FinPulse_Calibrated_Ensemble": {
      "roc_auc": 0.9898,
      "pr_auc": 0.886,
      "f1_score": 0.8226,
      "optimal_threshold": 0.3642,
      "precision": 0.7956,
      "recall": 0.8516,
      "false_positive_rate": 0.0118,
      "precision_at_90_recall": 0.6864,
      "fpr_at_90_recall": 0.0223,
      "brier_score": 0.0146,
      "confusion_matrix": {
        "tp": 109,
        "fp": 28,
        "tn": 2344,
        "fn": 19
      },
      "roc_curve": [
        {
          "fpr": 0.0,
          "tpr": 0.0,
          "threshold": 1.0
        },
        {
          "fpr": 0.0,
          "tpr": 0.0078,
          "threshold": 0.9987
        },
        {
          "fpr": 0.0004,
          "tpr": 0.4297,
          "threshold": 0.9303
        },
        {
          "fpr": 0.0072,
          "tpr": 0.7344,
          "threshold": 0.5652
        },
        {
          "fpr": 0.0215,
          "tpr": 0.8984,
          "threshold": 0.1698
        },
        {
          "fpr": 0.0434,
          "tpr": 0.9219,
          "threshold": 0.0809
        },
        {
          "fpr": 0.0645,
          "tpr": 0.9609,
          "threshold": 0.0491
        },
        {
          "fpr": 0.0868,
          "tpr": 0.9766,
          "threshold": 0.0341
        },
        {
          "fpr": 0.1096,
          "tpr": 0.9844,
          "threshold": 0.0258
        },
        {
          "fpr": 0.1328,
          "tpr": 0.9844,
          "threshold": 0.02
        },
        {
          "fpr": 0.1556,
          "tpr": 0.9922,
          "threshold": 0.0166
        },
        {
          "fpr": 0.1788,
          "tpr": 0.9922,
          "threshold": 0.0138
        },
        {
          "fpr": 0.2015,
          "tpr": 1.0,
          "threshold": 0.0109
        },
        {
          "fpr": 0.2247,
          "tpr": 1.0,
          "threshold": 0.0094
        },
        {
          "fpr": 0.2479,
          "tpr": 1.0,
          "threshold": 0.0082
        },
        {
          "fpr": 0.2711,
          "tpr": 1.0,
          "threshold": 0.0074
        },
        {
          "fpr": 0.2943,
          "tpr": 1.0,
          "threshold": 0.0068
        },
        {
          "fpr": 0.3175,
          "tpr": 1.0,
          "threshold": 0.006
        },
        {
          "fpr": 0.3406,
          "tpr": 1.0,
          "threshold": 0.0056
        },
        {
          "fpr": 0.3638,
          "tpr": 1.0,
          "threshold": 0.005
        },
        {
          "fpr": 0.387,
          "tpr": 1.0,
          "threshold": 0.0044
        },
        {
          "fpr": 0.4102,
          "tpr": 1.0,
          "threshold": 0.004
        },
        {
          "fpr": 0.4334,
          "tpr": 1.0,
          "threshold": 0.0036
        },
        {
          "fpr": 0.4566,
          "tpr": 1.0,
          "threshold": 0.0033
        },
        {
          "fpr": 0.4798,
          "tpr": 1.0,
          "threshold": 0.003
        },
        {
          "fpr": 0.503,
          "tpr": 1.0,
          "threshold": 0.0027
        },
        {
          "fpr": 0.5261,
          "tpr": 1.0,
          "threshold": 0.0024
        },
        {
          "fpr": 0.5493,
          "tpr": 1.0,
          "threshold": 0.0021
        },
        {
          "fpr": 0.5725,
          "tpr": 1.0,
          "threshold": 0.0019
        },
        {
          "fpr": 0.5957,
          "tpr": 1.0,
          "threshold": 0.0017
        },
        {
          "fpr": 0.6189,
          "tpr": 1.0,
          "threshold": 0.0016
        },
        {
          "fpr": 0.6421,
          "tpr": 1.0,
          "threshold": 0.0014
        },
        {
          "fpr": 0.6653,
          "tpr": 1.0,
          "threshold": 0.0013
        },
        {
          "fpr": 0.6884,
          "tpr": 1.0,
          "threshold": 0.0012
        },
        {
          "fpr": 0.7116,
          "tpr": 1.0,
          "threshold": 0.0011
        },
        {
          "fpr": 0.7348,
          "tpr": 1.0,
          "threshold": 0.0011
        },
        {
          "fpr": 0.758,
          "tpr": 1.0,
          "threshold": 0.001
        },
        {
          "fpr": 0.7812,
          "tpr": 1.0,
          "threshold": 0.0009
        },
        {
          "fpr": 0.8044,
          "tpr": 1.0,
          "threshold": 0.0009
        },
        {
          "fpr": 0.8276,
          "tpr": 1.0,
          "threshold": 0.0008
        },
        {
          "fpr": 0.8508,
          "tpr": 1.0,
          "threshold": 0.0008
        },
        {
          "fpr": 0.8739,
          "tpr": 1.0,
          "threshold": 0.0007
        },
        {
          "fpr": 0.8971,
          "tpr": 1.0,
          "threshold": 0.0006
        },
        {
          "fpr": 0.9203,
          "tpr": 1.0,
          "threshold": 0.0006
        },
        {
          "fpr": 0.9435,
          "tpr": 1.0,
          "threshold": 0.0005
        },
        {
          "fpr": 0.9667,
          "tpr": 1.0,
          "threshold": 0.0005
        },
        {
          "fpr": 0.9899,
          "tpr": 1.0,
          "threshold": 0.0004
        },
        {
          "fpr": 1.0,
          "tpr": 1.0,
          "threshold": 0.0004
        }
      ],
      "pr_curve": [
        {
          "recall": 0.0,
          "precision": 1.0,
          "threshold": 1.0
        },
        {
          "recall": 0.0078,
          "precision": 1.0,
          "threshold": 0.9987
        },
        {
          "recall": 0.4297,
          "precision": 0.9821,
          "threshold": 0.9303
        },
        {
          "recall": 0.7344,
          "precision": 0.8468,
          "threshold": 0.5652
        },
        {
          "recall": 0.8984,
          "precision": 0.6928,
          "threshold": 0.1698
        },
        {
          "recall": 0.9219,
          "precision": 0.5339,
          "threshold": 0.0809
        },
        {
          "recall": 0.9609,
          "precision": 0.4457,
          "threshold": 0.0491
        },
        {
          "recall": 0.9766,
          "precision": 0.3776,
          "threshold": 0.0341
        },
        {
          "recall": 0.9844,
          "precision": 0.3264,
          "threshold": 0.0258
        },
        {
          "recall": 0.9844,
          "precision": 0.2857,
          "threshold": 0.02
        },
        {
          "recall": 0.9922,
          "precision": 0.256,
          "threshold": 0.0166
        },
        {
          "recall": 0.9922,
          "precision": 0.2305,
          "threshold": 0.0138
        },
        {
          "recall": 1.0,
          "precision": 0.2112,
          "threshold": 0.0109
        },
        {
          "recall": 1.0,
          "precision": 0.1936,
          "threshold": 0.0094
        },
        {
          "recall": 1.0,
          "precision": 0.1788,
          "threshold": 0.0082
        },
        {
          "recall": 1.0,
          "precision": 0.166,
          "threshold": 0.0074
        },
        {
          "recall": 1.0,
          "precision": 0.155,
          "threshold": 0.0068
        },
        {
          "recall": 1.0,
          "precision": 0.1453,
          "threshold": 0.006
        },
        {
          "recall": 1.0,
          "precision": 0.1368,
          "threshold": 0.0056
        },
        {
          "recall": 1.0,
          "precision": 0.1292,
          "threshold": 0.005
        },
        {
          "recall": 1.0,
          "precision": 0.1224,
          "threshold": 0.0044
        },
        {
          "recall": 1.0,
          "precision": 0.1163,
          "threshold": 0.004
        },
        {
          "recall": 1.0,
          "precision": 0.1107,
          "threshold": 0.0036
        },
        {
          "recall": 1.0,
          "precision": 0.1057,
          "threshold": 0.0033
        },
        {
          "recall": 1.0,
          "precision": 0.1011,
          "threshold": 0.003
        },
        {
          "recall": 1.0,
          "precision": 0.0969,
          "threshold": 0.0027
        },
        {
          "recall": 1.0,
          "precision": 0.093,
          "threshold": 0.0024
        },
        {
          "recall": 1.0,
          "precision": 0.0894,
          "threshold": 0.0021
        },
        {
          "recall": 1.0,
          "precision": 0.0861,
          "threshold": 0.0019
        },
        {
          "recall": 1.0,
          "precision": 0.0831,
          "threshold": 0.0017
        },
        {
          "recall": 1.0,
          "precision": 0.0802,
          "threshold": 0.0016
        },
        {
          "recall": 1.0,
          "precision": 0.0775,
          "threshold": 0.0014
        },
        {
          "recall": 1.0,
          "precision": 0.075,
          "threshold": 0.0013
        },
        {
          "recall": 1.0,
          "precision": 0.0727,
          "threshold": 0.0012
        },
        {
          "recall": 1.0,
          "precision": 0.0705,
          "threshold": 0.0011
        },
        {
          "recall": 1.0,
          "precision": 0.0684,
          "threshold": 0.0011
        },
        {
          "recall": 1.0,
          "precision": 0.0665,
          "threshold": 0.001
        },
        {
          "recall": 1.0,
          "precision": 0.0646,
          "threshold": 0.0009
        },
        {
          "recall": 1.0,
          "precision": 0.0629,
          "threshold": 0.0009
        },
        {
          "recall": 1.0,
          "precision": 0.0612,
          "threshold": 0.0008
        },
        {
          "recall": 1.0,
          "precision": 0.0596,
          "threshold": 0.0008
        },
        {
          "recall": 1.0,
          "precision": 0.0582,
          "threshold": 0.0007
        },
        {
          "recall": 1.0,
          "precision": 0.0567,
          "threshold": 0.0006
        },
        {
          "recall": 1.0,
          "precision": 0.0554,
          "threshold": 0.0006
        },
        {
          "recall": 1.0,
          "precision": 0.0541,
          "threshold": 0.0005
        },
        {
          "recall": 1.0,
          "precision": 0.0529,
          "threshold": 0.0005
        },
        {
          "recall": 1.0,
          "precision": 0.0517,
          "threshold": 0.0004
        },
        {
          "recall": 1.0,
          "precision": 0.0512,
          "threshold": 0.0004
        }
      ]
    }
  },
  "headline_improvements": {
    "roc_auc_lift_vs_rules": 0.2093,
    "pr_auc_lift_vs_rules": 0.6343,
    "false_positive_reduction_relative_pct": 92.5
  },
  "feature_importance_ranking": [
    {
      "feature": "amount_log10",
      "label": "Log10 Transaction Amount (USD)",
      "gbdt_gain_share": 0.1706,
      "permutation_roc_auc_drop": 0.0247,
      "importance_score": 0.1865,
      "importance_pct": 25.66
    },
    {
      "feature": "counterparty_pagerank_burst",
      "label": "Counterparty PageRank / Fan-In Burst",
      "gbdt_gain_share": 0.2374,
      "permutation_roc_auc_drop": 0.0043,
      "importance_score": 0.1467,
      "importance_pct": 20.18
    },
    {
      "feature": "benford_divergence",
      "label": "Benford's Law First-Digit KL Divergence",
      "gbdt_gain_share": 0.1605,
      "permutation_roc_auc_drop": 0.0031,
      "importance_score": 0.0999,
      "importance_pct": 13.74
    },
    {
      "feature": "structuring_proximity",
      "label": "AML Threshold Structuring Proximity ($3k/$10k)",
      "gbdt_gain_share": 0.1268,
      "permutation_roc_auc_drop": 0.0029,
      "importance_score": 0.0806,
      "importance_pct": 11.09
    },
    {
      "feature": "mcc_entropy",
      "label": "Merchant Category Code (MCC) Shannon Entropy",
      "gbdt_gain_share": 0.084,
      "permutation_roc_auc_drop": 0.0014,
      "importance_score": 0.0514,
      "importance_pct": 7.07
    },
    {
      "feature": "velocity_1h_zscore",
      "label": "Rolling 1h Velocity Z-Score",
      "gbdt_gain_share": 0.0606,
      "permutation_roc_auc_drop": 0.0039,
      "importance_score": 0.048,
      "importance_pct": 6.6
    },
    {
      "feature": "device_ip_mismatch",
      "label": "Device Fingerprint / ASN Geo-Mismatch",
      "gbdt_gain_share": 0.0694,
      "permutation_roc_auc_drop": 0.0026,
      "importance_score": 0.0479,
      "importance_pct": 6.59
    },
    {
      "feature": "velocity_24h_zscore",
      "label": "Rolling 24h Velocity Z-Score",
      "gbdt_gain_share": 0.0757,
      "permutation_roc_auc_drop": 0.001,
      "importance_score": 0.0454,
      "importance_pct": 6.25
    },
    {
      "feature": "corridor_risk_score",
      "label": "Cross-Border Settlement Corridor Risk",
      "gbdt_gain_share": 0.015,
      "permutation_roc_auc_drop": 0.0013,
      "importance_score": 0.0131,
      "importance_pct": 1.8
    },
    {
      "feature": "tod_sin",
      "label": "Time-of-Day Cyclic Sine Encoding",
      "gbdt_gain_share": 0.0,
      "permutation_roc_auc_drop": 0.001,
      "importance_score": 0.0037,
      "importance_pct": 0.51
    },
    {
      "feature": "tod_cos",
      "label": "Time-of-Day Cyclic Cosine Encoding",
      "gbdt_gain_share": 0.0,
      "permutation_roc_auc_drop": 0.001,
      "importance_score": 0.0037,
      "importance_pct": 0.51
    }
  ],
  "rail_cohort_analysis": [
    {
      "payment_rail": "USDC_Solana_CCTP",
      "tx_count": 618,
      "volume_usd": 1865934.51,
      "fraud_cases": 38,
      "fraud_rate_pct": 6.15,
      "ensemble_detection_rate_pct": 81.58,
      "ensemble_fpr_pct": 1.55,
      "legacy_rule_fpr_pct": 14.83
    },
    {
      "payment_rail": "FedNow_Instant",
      "tx_count": 601,
      "volume_usd": 1808983.77,
      "fraud_cases": 21,
      "fraud_rate_pct": 3.49,
      "ensemble_detection_rate_pct": 90.48,
      "ensemble_fpr_pct": 1.03,
      "legacy_rule_fpr_pct": 16.38
    },
    {
      "payment_rail": "SEPA_Instant",
      "tx_count": 538,
      "volume_usd": 1742880.43,
      "fraud_cases": 29,
      "fraud_rate_pct": 5.39,
      "ensemble_detection_rate_pct": 89.66,
      "ensemble_fpr_pct": 1.18,
      "legacy_rule_fpr_pct": 16.11
    },
    {
      "payment_rail": "Visa_Direct_CrossBorder",
      "tx_count": 488,
      "volume_usd": 1424538.52,
      "fraud_cases": 26,
      "fraud_rate_pct": 5.33,
      "ensemble_detection_rate_pct": 84.62,
      "ensemble_fpr_pct": 0.87,
      "legacy_rule_fpr_pct": 14.29
    },
    {
      "payment_rail": "SWIFT_gpi",
      "tx_count": 255,
      "volume_usd": 839023.25,
      "fraud_cases": 14,
      "fraud_rate_pct": 5.49,
      "ensemble_detection_rate_pct": 71.43,
      "ensemble_fpr_pct": 1.24,
      "legacy_rule_fpr_pct": 18.26
    }
  ],
  "fraud_typology_recall": [
    {
      "typology": "Account_Takeover_Velocity_Burst",
      "test_cases": 37,
      "finpulse_recall_pct": 81.08,
      "legacy_rule_recall_pct": 67.57
    },
    {
      "typology": "Smurfing_Threshold_Structuring",
      "test_cases": 26,
      "finpulse_recall_pct": 84.62,
      "legacy_rule_recall_pct": 34.62
    },
    {
      "typology": "Mule_Network_PageRank_FanIn",
      "test_cases": 21,
      "finpulse_recall_pct": 95.24,
      "legacy_rule_recall_pct": 19.05
    },
    {
      "typology": "Synthetic_Identity_CrossBorder",
      "test_cases": 44,
      "finpulse_recall_pct": 81.82,
      "legacy_rule_recall_pct": 70.45
    }
  ],
  "explained_benchmark_cases": [
    {
      "tx_id": "TX-2026-007524",
      "payment_rail": "SEPA_Instant",
      "corridor": "UK->NG",
      "amount_usd": 4135.82,
      "fraud_typology": "Mule_Network_PageRank_FanIn",
      "is_fraud": 1,
      "legacy_rule_score": 0.42,
      "finpulse_score": 0.3118,
      "top_attributions": [
        {
          "feature": "device_ip_mismatch",
          "label": "Device Fingerprint / ASN Geo-Mismatch",
          "value": 0.0,
          "attribution_delta": -0.3366
        },
        {
          "feature": "amount_log10",
          "label": "Log10 Transaction Amount (USD)",
          "value": 3.6166,
          "attribution_delta": 0.2495
        },
        {
          "feature": "counterparty_pagerank_burst",
          "label": "Counterparty PageRank / Fan-In Burst",
          "value": 0.7489,
          "attribution_delta": 0.2304
        },
        {
          "feature": "benford_divergence",
          "label": "Benford's Law First-Digit KL Divergence",
          "value": 0.2977,
          "attribution_delta": 0.2254
        },
        {
          "feature": "velocity_24h_zscore",
          "label": "Rolling 24h Velocity Z-Score",
          "value": 2.2669,
          "attribution_delta": 0.1599
        }
      ]
    },
    {
      "tx_id": "TX-2026-007531",
      "payment_rail": "SEPA_Instant",
      "corridor": "US->SG",
      "amount_usd": 8503.97,
      "fraud_typology": "Synthetic_Identity_CrossBorder",
      "is_fraud": 1,
      "legacy_rule_score": 0.56,
      "finpulse_score": 0.2126,
      "top_attributions": [
        {
          "feature": "device_ip_mismatch",
          "label": "Device Fingerprint / ASN Geo-Mismatch",
          "value": 0.0,
          "attribution_delta": -0.2996
        },
        {
          "feature": "amount_log10",
          "label": "Log10 Transaction Amount (USD)",
          "value": 3.9296,
          "attribution_delta": 0.1745
        },
        {
          "feature": "counterparty_pagerank_burst",
          "label": "Counterparty PageRank / Fan-In Burst",
          "value": 0.5574,
          "attribution_delta": 0.1691
        },
        {
          "feature": "velocity_1h_zscore",
          "label": "Rolling 1h Velocity Z-Score",
          "value": 1.1801,
          "attribution_delta": 0.1281
        },
        {
          "feature": "mcc_entropy",
          "label": "Merchant Category Code (MCC) Shannon Entropy",
          "value": 1.1618,
          "attribution_delta": 0.1056
        }
      ]
    },
    {
      "tx_id": "TX-2026-007566",
      "payment_rail": "FedNow_Instant",
      "corridor": "US->US",
      "amount_usd": 6873.33,
      "fraud_typology": "Account_Takeover_Velocity_Burst",
      "is_fraud": 1,
      "legacy_rule_score": 0.78,
      "finpulse_score": 0.9088,
      "top_attributions": [
        {
          "feature": "amount_log10",
          "label": "Log10 Transaction Amount (USD)",
          "value": 3.8372,
          "attribution_delta": 0.3154
        },
        {
          "feature": "structuring_proximity",
          "label": "AML Threshold Structuring Proximity ($3k/$10k)",
          "value": 0.7389,
          "attribution_delta": 0.3118
        },
        {
          "feature": "counterparty_pagerank_burst",
          "label": "Counterparty PageRank / Fan-In Burst",
          "value": 0.6506,
          "attribution_delta": 0.2841
        },
        {
          "feature": "velocity_24h_zscore",
          "label": "Rolling 24h Velocity Z-Score",
          "value": 2.6738,
          "attribution_delta": 0.1338
        },
        {
          "feature": "mcc_entropy",
          "label": "Merchant Category Code (MCC) Shannon Entropy",
          "value": 1.8604,
          "attribution_delta": 0.1308
        }
      ]
    },
    {
      "tx_id": "TX-2026-007589",
      "payment_rail": "Visa_Direct_CrossBorder",
      "corridor": "US->US",
      "amount_usd": 7145.39,
      "fraud_typology": "Account_Takeover_Velocity_Burst",
      "is_fraud": 1,
      "legacy_rule_score": 0.78,
      "finpulse_score": 0.3691,
      "top_attributions": [
        {
          "feature": "amount_log10",
          "label": "Log10 Transaction Amount (USD)",
          "value": 3.854,
          "attribution_delta": 0.2901
        },
        {
          "feature": "benford_divergence",
          "label": "Benford's Law First-Digit KL Divergence",
          "value": 0.327,
          "attribution_delta": 0.2612
        },
        {
          "feature": "velocity_1h_zscore",
          "label": "Rolling 1h Velocity Z-Score",
          "value": 1.9161,
          "attribution_delta": 0.2196
        },
        {
          "feature": "counterparty_pagerank_burst",
          "label": "Counterparty PageRank / Fan-In Burst",
          "value": 0.4096,
          "attribution_delta": 0.1253
        },
        {
          "feature": "corridor_risk_score",
          "label": "Cross-Border Settlement Corridor Risk",
          "value": 0.2288,
          "attribution_delta": -0.0666
        }
      ]
    },
    {
      "tx_id": "TX-2026-007598",
      "payment_rail": "SWIFT_gpi",
      "corridor": "EU->EU",
      "amount_usd": 6080.72,
      "fraud_typology": "Legitimate_Settlement",
      "is_fraud": 0,
      "legacy_rule_score": 0.56,
      "finpulse_score": 0.0041,
      "top_attributions": [
        {
          "feature": "device_ip_mismatch",
          "label": "Device Fingerprint / ASN Geo-Mismatch",
          "value": 0.0,
          "attribution_delta": -0.0114
        },
        {
          "feature": "amount_log10",
          "label": "Log10 Transaction Amount (USD)",
          "value": 3.784,
          "attribution_delta": 0.0035
        },
        {
          "feature": "corridor_risk_score",
          "label": "Cross-Border Settlement Corridor Risk",
          "value": 0.2798,
          "attribution_delta": -0.0012
        },
        {
          "feature": "velocity_1h_zscore",
          "label": "Rolling 1h Velocity Z-Score",
          "value": -1.3526,
          "attribution_delta": -0.0006
        },
        {
          "feature": "counterparty_pagerank_burst",
          "label": "Counterparty PageRank / Fan-In Burst",
          "value": 0.1126,
          "attribution_delta": -0.0006
        }
      ]
    },
    {
      "tx_id": "TX-2026-007601",
      "payment_rail": "SWIFT_gpi",
      "corridor": "US->US",
      "amount_usd": 9299.53,
      "fraud_typology": "Legitimate_Settlement",
      "is_fraud": 0,
      "legacy_rule_score": 0.56,
      "finpulse_score": 0.0159,
      "top_attributions": [
        {
          "feature": "device_ip_mismatch",
          "label": "Device Fingerprint / ASN Geo-Mismatch",
          "value": 0.0,
          "attribution_delta": -0.0434
        },
        {
          "feature": "amount_log10",
          "label": "Log10 Transaction Amount (USD)",
          "value": 3.9685,
          "attribution_delta": 0.0135
        },
        {
          "feature": "structuring_proximity",
          "label": "AML Threshold Structuring Proximity ($3k/$10k)",
          "value": 0.4815,
          "attribution_delta": 0.0099
        },
        {
          "feature": "counterparty_pagerank_burst",
          "label": "Counterparty PageRank / Fan-In Burst",
          "value": 0.01,
          "attribution_delta": -0.0061
        },
        {
          "feature": "velocity_24h_zscore",
          "label": "Rolling 24h Velocity Z-Score",
          "value": 0.9873,
          "attribution_delta": 0.0017
        }
      ]
    }
  ]
};

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
