window.BENCHMARK_DATA = {
  "lastUpdate": 1772322375009,
  "repoUrl": "https://github.com/icegatetech/icegate",
  "entries": {
    "IceGate Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "e.v.mineev@gmail.com",
            "name": "Evgenii Mineev",
            "username": "frisbeeman"
          },
          "committer": {
            "email": "e.v.mineev@gmail.com",
            "name": "Evgenii Mineev",
            "username": "frisbeeman"
          },
          "distinct": true,
          "id": "8c56ea2c71f9f5d71fdb3b9f815d238b8ef18213",
          "message": "Fix repository URL in CI benchmarking workflow",
          "timestamp": "2026-02-08T20:52:51+01:00",
          "tree_id": "18a41f1c3e1cf5d5bdacf4f7df2092a4c26f88b0",
          "url": "https://github.com/icegatetech/icegate/commit/8c56ea2c71f9f5d71fdb3b9f815d238b8ef18213"
        },
        "date": 1770583818042,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 7336010,
            "range": "± 172492",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 6939769,
            "range": "± 24728",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 7177846,
            "range": "± 33157",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 7132862,
            "range": "± 104386",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 7594588,
            "range": "± 33529",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 12016150,
            "range": "± 61830",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 12548114,
            "range": "± 67190",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 12722197,
            "range": "± 40694",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 32986590,
            "range": "± 682356",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 35267954,
            "range": "± 726096",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 43494946,
            "range": "± 650566",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 12038432,
            "range": "± 35825",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 16356425,
            "range": "± 48167",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 16489737,
            "range": "± 100412",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 18426569,
            "range": "± 82074",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 1453620253,
            "range": "± 67692189",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 1004905256,
            "range": "± 293786",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 3303346994,
            "range": "± 654339",
            "unit": "ns/iter"
          },
          {
            "name": "write_grouping/with_grouping",
            "value": 1453189079,
            "range": "± 132166302",
            "unit": "ns/iter"
          },
          {
            "name": "write_grouping/without_grouping",
            "value": 1502836680,
            "range": "± 57879279",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 1032296,
            "range": "± 30254",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 2906390,
            "range": "± 11897",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 1032312,
            "range": "± 11038",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1075432316,
            "range": "± 262864238",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "e.v.mineev@gmail.com",
            "name": "Evgenii Mineev",
            "username": "frisbeeman"
          },
          "committer": {
            "email": "e.v.mineev@gmail.com",
            "name": "Evgenii Mineev",
            "username": "frisbeeman"
          },
          "distinct": true,
          "id": "9f26a7681c4e6b8425b52a840b484b34cd2f27b8",
          "message": "Refactor `TopicAccumulator` to separate response handling from pending batches, increase benchmark durations",
          "timestamp": "2026-02-08T21:54:41+01:00",
          "tree_id": "38471c3e0910da2cedc6ed4cb5ca9393baddb086",
          "url": "https://github.com/icegatetech/icegate/commit/9f26a7681c4e6b8425b52a840b484b34cd2f27b8"
        },
        "date": 1770585065159,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 7100764,
            "range": "± 228564",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 7036445,
            "range": "± 177191",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 7443894,
            "range": "± 133551",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 7335847,
            "range": "± 75472",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 8268524,
            "range": "± 172802",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 13607417,
            "range": "± 176901",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 13981499,
            "range": "± 287287",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 14402542,
            "range": "± 298162",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 35496143,
            "range": "± 846764",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 38444296,
            "range": "± 750487",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 45185824,
            "range": "± 530233",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 13496213,
            "range": "± 191819",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 17639766,
            "range": "± 224994",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 17562413,
            "range": "± 556678",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 19725820,
            "range": "± 207086",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 1703902932,
            "range": "± 90584007",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 1005982704,
            "range": "± 1524652",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 3303973686,
            "range": "± 981257",
            "unit": "ns/iter"
          },
          {
            "name": "write_grouping/with_grouping",
            "value": 1778957153,
            "range": "± 116061670",
            "unit": "ns/iter"
          },
          {
            "name": "write_grouping/without_grouping",
            "value": 1778985379,
            "range": "± 111126268",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 1027870,
            "range": "± 29911",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 2877604,
            "range": "± 15414",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 1025782,
            "range": "± 12567",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1246143285,
            "range": "± 241856983",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "e.v.mineev@gmail.com",
            "name": "Evgenii Mineev",
            "username": "frisbeeman"
          },
          "committer": {
            "email": "e.v.mineev@gmail.com",
            "name": "Evgenii Mineev",
            "username": "frisbeeman"
          },
          "distinct": true,
          "id": "8bc9c30f01338c901d9858625b28ccd0799d29f2",
          "message": "Upload Criterion benchmark reports as artifacts in CI workflow",
          "timestamp": "2026-02-08T22:12:21+01:00",
          "tree_id": "6fc5a29ed139b9601364db93286836468caa8b5d",
          "url": "https://github.com/icegatetech/icegate/commit/8bc9c30f01338c901d9858625b28ccd0799d29f2"
        },
        "date": 1770586138529,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 6992431,
            "range": "± 119989",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 7208636,
            "range": "± 217811",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 7543803,
            "range": "± 83737",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 7156413,
            "range": "± 56971",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 7395769,
            "range": "± 68746",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 12399738,
            "range": "± 241468",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 12910253,
            "range": "± 203076",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 13787240,
            "range": "± 450484",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 33893950,
            "range": "± 813583",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 36102536,
            "range": "± 644840",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 45058116,
            "range": "± 882588",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 12495729,
            "range": "± 420354",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 16940636,
            "range": "± 269202",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 16704382,
            "range": "± 362380",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 18677709,
            "range": "± 147213",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 1820835355,
            "range": "± 85235374",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 1005578018,
            "range": "± 165741",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 3303777591,
            "range": "± 428305",
            "unit": "ns/iter"
          },
          {
            "name": "write_grouping/with_grouping",
            "value": 1853646670,
            "range": "± 87452942",
            "unit": "ns/iter"
          },
          {
            "name": "write_grouping/without_grouping",
            "value": 1853760195,
            "range": "± 97216683",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 1022785,
            "range": "± 30716",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 2946827,
            "range": "± 49386",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 1066204,
            "range": "± 14059",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1202726921,
            "range": "± 264587738",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "e.v.mineev@gmail.com",
            "name": "Evgenii Mineev",
            "username": "frisbeeman"
          },
          "committer": {
            "email": "e.v.mineev@gmail.com",
            "name": "Evgenii Mineev",
            "username": "frisbeeman"
          },
          "distinct": true,
          "id": "0334f5b2aa2e134cd113cc635dc0f5b792655009",
          "message": "Increase Criterion benchmark measurement durations to 60 seconds",
          "timestamp": "2026-02-08T23:02:57+01:00",
          "tree_id": "5e7b058b6fad3f99d2b6ad52e6f243d543cc3114",
          "url": "https://github.com/icegatetech/icegate/commit/0334f5b2aa2e134cd113cc635dc0f5b792655009"
        },
        "date": 1770589405794,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 6790206,
            "range": "± 52277",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 6789671,
            "range": "± 27301",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 7083662,
            "range": "± 50236",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 6982685,
            "range": "± 32391",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 7238522,
            "range": "± 31899",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 12026652,
            "range": "± 195041",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 12456588,
            "range": "± 165027",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 13048808,
            "range": "± 96409",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 33049312,
            "range": "± 494793",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 35404545,
            "range": "± 500065",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 42710795,
            "range": "± 441922",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 12141332,
            "range": "± 60661",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 16523108,
            "range": "± 155564",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 16577510,
            "range": "± 152885",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 18541409,
            "range": "± 201885",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 1804556500,
            "range": "± 69332066",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 1005465289,
            "range": "± 226954",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 3303836158,
            "range": "± 479948",
            "unit": "ns/iter"
          },
          {
            "name": "write_grouping/with_grouping",
            "value": 1804008340,
            "range": "± 84278428",
            "unit": "ns/iter"
          },
          {
            "name": "write_grouping/without_grouping",
            "value": 1778949910,
            "range": "± 106636548",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 980619,
            "range": "± 20288",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 2764103,
            "range": "± 12612",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 990471,
            "range": "± 3654",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1481657728,
            "range": "± 479930955",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "e.v.mineev@gmail.com",
            "name": "Evgenii Mineev",
            "username": "frisbeeman"
          },
          "committer": {
            "email": "e.v.mineev@gmail.com",
            "name": "Evgenii Mineev",
            "username": "frisbeeman"
          },
          "distinct": true,
          "id": "718a37a19aa2dce263c71b2e1d922c0ab5913968",
          "message": "Increase Criterion benchmark measurement durations to improve accuracy",
          "timestamp": "2026-02-09T01:42:11+01:00",
          "tree_id": "7e1bbab5cdf038062255b6d6f3c7dacbfdacf932",
          "url": "https://github.com/icegatetech/icegate/commit/718a37a19aa2dce263c71b2e1d922c0ab5913968"
        },
        "date": 1770599788599,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 7243284,
            "range": "± 191075",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 6889911,
            "range": "± 70065",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 7160239,
            "range": "± 48346",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 7269814,
            "range": "± 208852",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 7490444,
            "range": "± 172780",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 12461283,
            "range": "± 159885",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 12873912,
            "range": "± 90459",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 13064640,
            "range": "± 190025",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 33849790,
            "range": "± 532725",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 36349587,
            "range": "± 622470",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 43430636,
            "range": "± 512594",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 12219480,
            "range": "± 115874",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 16540118,
            "range": "± 163757",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 16642841,
            "range": "± 177579",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 18689426,
            "range": "± 131452",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 1907279976,
            "range": "± 39616560",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 1005630077,
            "range": "± 45619412",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 3403952920,
            "range": "± 142342013",
            "unit": "ns/iter"
          },
          {
            "name": "write_grouping/with_grouping",
            "value": 1878909399,
            "range": "± 64277002",
            "unit": "ns/iter"
          },
          {
            "name": "write_grouping/without_grouping",
            "value": 1854014799,
            "range": "± 52569386",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 1001135,
            "range": "± 18382",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 2808980,
            "range": "± 17152",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 1009535,
            "range": "± 1911",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1488367190,
            "range": "± 489137862",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "e.v.mineev@gmail.com",
            "name": "Evgenii Mineev",
            "username": "frisbeeman"
          },
          "committer": {
            "email": "e.v.mineev@gmail.com",
            "name": "Evgenii Mineev",
            "username": "frisbeeman"
          },
          "distinct": true,
          "id": "6fdeef7ff3a4f5df16068ef87916bbd7ee8d2fa6",
          "message": "Add benchmark charts badge with link to benchmarks in README",
          "timestamp": "2026-02-09T13:27:16+01:00",
          "tree_id": "d5d35bf2a65fec93972fed1a22dea30bdbac8d1b",
          "url": "https://github.com/icegatetech/icegate/commit/6fdeef7ff3a4f5df16068ef87916bbd7ee8d2fa6"
        },
        "date": 1770642006050,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 6802902,
            "range": "± 82937",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 6768824,
            "range": "± 43553",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 7003105,
            "range": "± 63493",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 7034956,
            "range": "± 54269",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 7263946,
            "range": "± 297702",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 12048943,
            "range": "± 57427",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 12612289,
            "range": "± 27497",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 12732337,
            "range": "± 58144",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 32811985,
            "range": "± 509141",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 35063079,
            "range": "± 459840",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 42165655,
            "range": "± 483702",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 11853495,
            "range": "± 53841",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 16126128,
            "range": "± 66764",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 16245197,
            "range": "± 147308",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 18200837,
            "range": "± 41689",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 1498346565,
            "range": "± 32687468",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 1005285342,
            "range": "± 45523477",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 3403533140,
            "range": "± 139693124",
            "unit": "ns/iter"
          },
          {
            "name": "write_grouping/with_grouping",
            "value": 1453291248,
            "range": "± 68572738",
            "unit": "ns/iter"
          },
          {
            "name": "write_grouping/without_grouping",
            "value": 1478461078,
            "range": "± 85354391",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 982205,
            "range": "± 15451",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 2775570,
            "range": "± 8937",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 987681,
            "range": "± 1631",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1304446886,
            "range": "± 478403153",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "s.prosvirnin@triplecloud.team",
            "name": "Sergey Prosvirnin",
            "username": "s-prosvirnin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "09131958ab37587b5ca79f1c6b17dd8a365e1a66",
          "message": "GH-59 - shifter optimisation (#60)\n\n<!-- This is an auto-generated comment: release notes by coderabbit.ai\n-->\n## Summary by CodeRabbit\n\n* **Configuration Updates**\n* Reorganized queue/shift settings into nested sections (queue.common,\nqueue.write, shift.read, shift.jobsmanager) and added tuning:\nmax_input_bytes_per_task, max_row_group_size,\nrecords_per_flush_multiplier, worker_count.\n\n* **Behavior / Performance**\n* Reader/planning now respects configurable record-batch sizing and\nper-task input limits, affecting read batching and planning granularity.\n\n* **Monitoring**\n* Grafana dashboard redesigned around WAL/segment metrics; new per-task\ninput-size metric surfaced.\n\n* **Documentation**\n  * Developer guidance updated on error handling and testing practices.\n<!-- end of auto-generated comment: release notes by coderabbit.ai -->",
          "timestamp": "2026-02-10T01:03:35+04:00",
          "tree_id": "ef835b5f0b56139b26c2e24c25bcff2a8d976a5b",
          "url": "https://github.com/icegatetech/icegate/commit/09131958ab37587b5ca79f1c6b17dd8a365e1a66"
        },
        "date": 1770673854896,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 6982802,
            "range": "± 169076",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 7157363,
            "range": "± 168703",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 7250910,
            "range": "± 53385",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 7351049,
            "range": "± 35958",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 7639143,
            "range": "± 104739",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 12235535,
            "range": "± 127774",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 12863730,
            "range": "± 172840",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 13090599,
            "range": "± 196893",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 33127522,
            "range": "± 669365",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 36162773,
            "range": "± 622756",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 42688644,
            "range": "± 388785",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 12033159,
            "range": "± 77794",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 16342278,
            "range": "± 49847",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 16490064,
            "range": "± 177544",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 18433444,
            "range": "± 89650",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 3518928202,
            "range": "± 129892452",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 2005891941,
            "range": "± 176068",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 6603578557,
            "range": "± 306996",
            "unit": "ns/iter"
          },
          {
            "name": "write_grouping/with_grouping",
            "value": 3603724677,
            "range": "± 198952116",
            "unit": "ns/iter"
          },
          {
            "name": "write_grouping/without_grouping",
            "value": 3403797623,
            "range": "± 231124732",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 996859,
            "range": "± 16756",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 2817216,
            "range": "± 9751",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 1006090,
            "range": "± 4579",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 2179223923,
            "range": "± 254191618",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "e.v.mineev@gmail.com",
            "name": "Evgeniy Mineev",
            "username": "frisbeeman"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aa5439b673e57349f053e30ccefd3c3022691f01",
          "message": "GH-25: Update dependency versions in Cargo.toml and Cargo.lock; bump Iceberg to latest commit (#61)",
          "timestamp": "2026-02-10T02:40:09+04:00",
          "tree_id": "91e7eebd7e2c692925267a0a8ea4b5e938938a4f",
          "url": "https://github.com/icegatetech/icegate/commit/aa5439b673e57349f053e30ccefd3c3022691f01"
        },
        "date": 1770678888248,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 6922349,
            "range": "± 208428",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 6722609,
            "range": "± 94928",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 7081754,
            "range": "± 123438",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 7094205,
            "range": "± 34277",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 7380044,
            "range": "± 56366",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 11946009,
            "range": "± 214735",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 12295370,
            "range": "± 50892",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 12431855,
            "range": "± 137096",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 32534557,
            "range": "± 567281",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 34807208,
            "range": "± 530447",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 42074288,
            "range": "± 461333",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 11688694,
            "range": "± 45139",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 16105461,
            "range": "± 120323",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 16310118,
            "range": "± 286377",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 18064774,
            "range": "± 81759",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 3627300914,
            "range": "± 40216792",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 2005458591,
            "range": "± 224791",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 6603501160,
            "range": "± 10539877",
            "unit": "ns/iter"
          },
          {
            "name": "write_grouping/with_grouping",
            "value": 3604157146,
            "range": "± 214978648",
            "unit": "ns/iter"
          },
          {
            "name": "write_grouping/without_grouping",
            "value": 3603587134,
            "range": "± 211120023",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 991414,
            "range": "± 15624",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 2767772,
            "range": "± 7939",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 997044,
            "range": "± 4017",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 2104249608,
            "range": "± 221763759",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "e.v.mineev@gmail.com",
            "name": "Evgeniy Mineev",
            "username": "frisbeeman"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2f9d18833b758fe44538ce82d03c8735b00b6dab",
          "message": "GH-62: Refactor object store interactions in `QueueWriter`, optimize recovery with binary search (#63)\n\n<!-- This is an auto-generated comment: release notes by coderabbit.ai\n-->\n\n## Summary by CodeRabbit\n\n* **Improvements**\n* Enhanced queue recovery mechanisms with improved segment discovery and\noffset tracking for better reliability after service restarts\n* Added detailed diagnostic logging for operational visibility and\ndebugging\n\n* **Tests**\n* Extended benchmark measurement durations for more accurate performance\nbaselines\n\n* **Chores**\n  * Updated deployment infrastructure tooling\n\n<!-- end of auto-generated comment: release notes by coderabbit.ai -->",
          "timestamp": "2026-02-11T03:08:44+04:00",
          "tree_id": "339dacc04ad9f5813ae3d87efa4f3a347467a29e",
          "url": "https://github.com/icegatetech/icegate/commit/2f9d18833b758fe44538ce82d03c8735b00b6dab"
        },
        "date": 1770767922165,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 7325443,
            "range": "± 211234",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 6955518,
            "range": "± 72479",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 7234751,
            "range": "± 36632",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 7225509,
            "range": "± 91486",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 7480016,
            "range": "± 40112",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 11898222,
            "range": "± 186233",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 12756939,
            "range": "± 192419",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 13521044,
            "range": "± 144267",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 33933220,
            "range": "± 224442",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 36190738,
            "range": "± 726660",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 43145832,
            "range": "± 532803",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 12138360,
            "range": "± 116721",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 16695938,
            "range": "± 291711",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 16677445,
            "range": "± 194434",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 19502695,
            "range": "± 375318",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 3403921097,
            "range": "± 112714121",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 2005872319,
            "range": "± 195665",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 6603782697,
            "range": "± 279804",
            "unit": "ns/iter"
          },
          {
            "name": "write_grouping/with_grouping",
            "value": 3404439130,
            "range": "± 157613395",
            "unit": "ns/iter"
          },
          {
            "name": "write_grouping/without_grouping",
            "value": 3553871023,
            "range": "± 113603070",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 1038402,
            "range": "± 14814",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 2905351,
            "range": "± 12706",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 1042083,
            "range": "± 4838",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 2272436595,
            "range": "± 519443296",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "e.v.mineev@gmail.com",
            "name": "Evgenii Mineev",
            "username": "frisbeeman"
          },
          "committer": {
            "email": "e.v.mineev@gmail.com",
            "name": "Evgenii Mineev",
            "username": "frisbeeman"
          },
          "distinct": true,
          "id": "451039c4449ba6e3647eea2739fcf1890594a831",
          "message": "GH-64: Add `tokio` tracing support, integrate `log` crate, and enhance flush diagnostics in `QueueWriter`",
          "timestamp": "2026-02-11T12:24:14+01:00",
          "tree_id": "3721c7ce6622ad5b91d9186837f0664fe8d0d2c4",
          "url": "https://github.com/icegatetech/icegate/commit/451039c4449ba6e3647eea2739fcf1890594a831"
        },
        "date": 1770812353293,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 7628328,
            "range": "± 248984",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 7279434,
            "range": "± 160381",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 7897502,
            "range": "± 91413",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 7259961,
            "range": "± 95314",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 7527788,
            "range": "± 98786",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 12264494,
            "range": "± 357289",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 12904746,
            "range": "± 137380",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 12890326,
            "range": "± 144229",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 34967893,
            "range": "± 634740",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 37357909,
            "range": "± 548795",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 45354385,
            "range": "± 444869",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 12576531,
            "range": "± 292413",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 16952663,
            "range": "± 228950",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 16905130,
            "range": "± 283550",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 19363207,
            "range": "± 141394",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2231635836,
            "range": "± 23105300",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 505560640,
            "range": "± 134090",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 2887080101,
            "range": "± 26543805",
            "unit": "ns/iter"
          },
          {
            "name": "write_grouping/with_grouping",
            "value": 2241095386,
            "range": "± 37590361",
            "unit": "ns/iter"
          },
          {
            "name": "write_grouping/without_grouping",
            "value": 2254084088,
            "range": "± 31184020",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 1048861,
            "range": "± 19075",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 2964292,
            "range": "± 11721",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 1040400,
            "range": "± 4767",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1671885799,
            "range": "± 522658829",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "e.v.mineev@gmail.com",
            "name": "Evgeniy Mineev",
            "username": "frisbeeman"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "51036d808ddcfb71c4abd4a80a38882a04ef1a0e",
          "message": "GH-65: Refactor tenant ID extraction for gRPC and HTTP handlers (#66)\n\n<!-- This is an auto-generated comment: release notes by coderabbit.ai\n-->\n## Summary by CodeRabbit\n\n* **New Features**\n* Added tenant ID extraction and validation from incoming requests for\ngRPC and HTTP ingestion, enabling per-tenant handling.\n\n* **Tests**\n* Added test coverage for tenant ID extraction and validation scenarios.\n\n* **Chores**\n  * Standardized the tenant ID header constant across the codebase.\n  * Expanded the benchmark suite to include additional query benchmarks.\n<!-- end of auto-generated comment: release notes by coderabbit.ai -->",
          "timestamp": "2026-02-12T04:37:15+04:00",
          "tree_id": "3992b046d92f7d8a5b809788e1d30bc7cacfca19",
          "url": "https://github.com/icegatetech/icegate/commit/51036d808ddcfb71c4abd4a80a38882a04ef1a0e"
        },
        "date": 1770859208665,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 7625642,
            "range": "± 194050",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 7196410,
            "range": "± 106995",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 7278181,
            "range": "± 272439",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 7530376,
            "range": "± 218750",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 8439226,
            "range": "± 1300898",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 13321984,
            "range": "± 354503",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 13361787,
            "range": "± 247619",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 13780451,
            "range": "± 707014",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 33896995,
            "range": "± 715039",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 36838009,
            "range": "± 657512",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 43906906,
            "range": "± 348618",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 12291699,
            "range": "± 342703",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 16710698,
            "range": "± 182268",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 17053867,
            "range": "± 313530",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 19402706,
            "range": "± 244567",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2273546441,
            "range": "± 26650565",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 505501650,
            "range": "± 146815",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 2893323684,
            "range": "± 15259823",
            "unit": "ns/iter"
          },
          {
            "name": "write_grouping/with_grouping",
            "value": 2378507218,
            "range": "± 29211394",
            "unit": "ns/iter"
          },
          {
            "name": "write_grouping/without_grouping",
            "value": 2340911570,
            "range": "± 84983390",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 1045057,
            "range": "± 14287",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 2953586,
            "range": "± 35081",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 1044507,
            "range": "± 4947",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1645846201,
            "range": "± 508629970",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "s.prosvirnin@triplecloud.team",
            "name": "Sergey Prosvirnin",
            "username": "s-prosvirnin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "334c8114bf7f7245a16707987fec7b8484cbab27",
          "message": "GH-59: Add settable job interval (#67)\n\n<!-- This is an auto-generated comment: release notes by coderabbit.ai\n-->\n## Summary by CodeRabbit\n\n* **New Features**\n* Add explicit setter for scheduled job start times and manager API to\nset them.\n* Introduce staggered worker startup to reduce concurrent resource\ncontention.\n\n* **Improvements**\n* Prioritize scheduled start times for job iterations with\ninterval-based fallback.\n* Ensure job state merges preserve scheduled start times from processed\nresults.\n\n* **Tests**\n* Add tests covering scheduled start behavior, iteration timing, and\nstate synchronization.\n<!-- end of auto-generated comment: release notes by coderabbit.ai -->",
          "timestamp": "2026-02-12T23:44:14+04:00",
          "tree_id": "ab8b5bc318abdf4517ad840d2ceaa16ed33e23ff",
          "url": "https://github.com/icegatetech/icegate/commit/334c8114bf7f7245a16707987fec7b8484cbab27"
        },
        "date": 1770928036511,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 9706247,
            "range": "± 338309",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 8992601,
            "range": "± 195429",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 9548385,
            "range": "± 222566",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 9422231,
            "range": "± 123820",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 9759948,
            "range": "± 266498",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 13937630,
            "range": "± 120545",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 14361331,
            "range": "± 127101",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 14708572,
            "range": "± 86500",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 35151999,
            "range": "± 620925",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 37171209,
            "range": "± 458296",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 44593168,
            "range": "± 506563",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 13898372,
            "range": "± 188096",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 18595633,
            "range": "± 133371",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 18519463,
            "range": "± 155157",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 20546472,
            "range": "± 132219",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2321372563,
            "range": "± 34285955",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 505725891,
            "range": "± 194486",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 2896358494,
            "range": "± 29354940",
            "unit": "ns/iter"
          },
          {
            "name": "write_grouping/with_grouping",
            "value": 2279053371,
            "range": "± 16895051",
            "unit": "ns/iter"
          },
          {
            "name": "write_grouping/without_grouping",
            "value": 2254115792,
            "range": "± 35671028",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 1037532,
            "range": "± 23724",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 2876513,
            "range": "± 15446",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 1058842,
            "range": "± 4828",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1651966046,
            "range": "± 484524311",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "e.v.mineev@gmail.com",
            "name": "Evgeniy Mineev",
            "username": "frisbeeman"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ffe086fb3b7d964c2fdde6ecf211a1fb59386017",
          "message": "GH-68: Introduce `find_first_segment_offset` to handle TTL-cleared segments (#69)",
          "timestamp": "2026-02-12T23:54:57+04:00",
          "tree_id": "09f9f762451df54f2791bc1aba2755feb0b21586",
          "url": "https://github.com/icegatetech/icegate/commit/ffe086fb3b7d964c2fdde6ecf211a1fb59386017"
        },
        "date": 1770928705438,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 10154767,
            "range": "± 269169",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 9368148,
            "range": "± 77738",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 10094929,
            "range": "± 224152",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 9819627,
            "range": "± 413309",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 10103270,
            "range": "± 153325",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 13987677,
            "range": "± 91216",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 14487631,
            "range": "± 100099",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 14830677,
            "range": "± 101573",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 36211213,
            "range": "± 599099",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 38220495,
            "range": "± 733017",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 46292085,
            "range": "± 559830",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 13997376,
            "range": "± 128677",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 18461937,
            "range": "± 119161",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 18634326,
            "range": "± 190804",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 20432926,
            "range": "± 86484",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2244093360,
            "range": "± 19521249",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 586391652,
            "range": "± 21453358",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 2993382704,
            "range": "± 56034808",
            "unit": "ns/iter"
          },
          {
            "name": "write_grouping/with_grouping",
            "value": 2241532561,
            "range": "± 29339515",
            "unit": "ns/iter"
          },
          {
            "name": "write_grouping/without_grouping",
            "value": 2229358633,
            "range": "± 19798639",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 1094432,
            "range": "± 20516",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 3011335,
            "range": "± 10464",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 1101449,
            "range": "± 4511",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1641357922,
            "range": "± 517145064",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "e.v.mineev@gmail.com",
            "name": "Evgeniy Mineev",
            "username": "frisbeeman"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dfe090146f3575886d54259fdd012b281d64eaf2",
          "message": "GH-52: Add tracing and metrics to query service. (#70)",
          "timestamp": "2026-02-16T04:06:40+04:00",
          "tree_id": "e027b07b4a6bf17defacec4ee0ccf8c8c0b8c99c",
          "url": "https://github.com/icegatetech/icegate/commit/dfe090146f3575886d54259fdd012b281d64eaf2"
        },
        "date": 1771203872764,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 10188334,
            "range": "± 359130",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 10294495,
            "range": "± 170783",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 10519680,
            "range": "± 297746",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 9768689,
            "range": "± 44230",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 9971687,
            "range": "± 62420",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 14188981,
            "range": "± 269858",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 14457415,
            "range": "± 36506",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 15129778,
            "range": "± 246049",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 36487427,
            "range": "± 607807",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 38478723,
            "range": "± 505318",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 45853204,
            "range": "± 784168",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 14203320,
            "range": "± 91791",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 18516135,
            "range": "± 65439",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 18623054,
            "range": "± 129309",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 20810986,
            "range": "± 519869",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2304291974,
            "range": "± 50122163",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 561189137,
            "range": "± 11446344",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 3005634175,
            "range": "± 45075944",
            "unit": "ns/iter"
          },
          {
            "name": "write_grouping/with_grouping",
            "value": 2228403166,
            "range": "± 29892162",
            "unit": "ns/iter"
          },
          {
            "name": "write_grouping/without_grouping",
            "value": 2228824015,
            "range": "± 26114528",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 1044017,
            "range": "± 20510",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 2860883,
            "range": "± 19758",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 1065799,
            "range": "± 4833",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1663029558,
            "range": "± 496967636",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "e.v.mineev@gmail.com",
            "name": "Evgeniy Mineev",
            "username": "frisbeeman"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a5a1d9ba6b4345d44bdb4d377f117fe53afbac62",
          "message": "GH-71: Integrate WAL support into QueryEngine (#72)\n\n<!-- This is an auto-generated comment: release notes by coderabbit.ai\n-->\n## Summary by CodeRabbit\n\n* **New Features**\n* Near‑real‑time WAL integration merging hot (WAL) and cold (Iceberg)\ndata for queries.\n* Per‑source query metrics and breakdowns (Iceberg vs WAL) surfaced and\nreported.\n* Optional IO read cache with lifecycle controls, sizing options, and\nexample configs.\n  * Configuration now requires a WAL base path.\n\n* **Bug Fixes**\n* Adjusted ingest/query service resource limits and improved\nlogging/OTel environment settings.\n\n* **Chores**\n  * Dependency updates and enhanced OpenTelemetry resource detection.\n<!-- end of auto-generated comment: release notes by coderabbit.ai -->",
          "timestamp": "2026-02-25T19:22:57+04:00",
          "tree_id": "c23c167e1a61948f898dc0e9bba96cabe53be39e",
          "url": "https://github.com/icegatetech/icegate/commit/a5a1d9ba6b4345d44bdb4d377f117fe53afbac62"
        },
        "date": 1772036475647,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 7403941,
            "range": "± 55091",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 7376611,
            "range": "± 48080",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 7617349,
            "range": "± 85923",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 7659102,
            "range": "± 111981",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 7867833,
            "range": "± 184567",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 12810540,
            "range": "± 101918",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 13288886,
            "range": "± 86153",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 13518267,
            "range": "± 261705",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 34976467,
            "range": "± 708366",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 37263381,
            "range": "± 558210",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 44992155,
            "range": "± 511158",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 12948987,
            "range": "± 139491",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 17174957,
            "range": "± 199513",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 17492658,
            "range": "± 143423",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 19695967,
            "range": "± 145041",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2411343030,
            "range": "± 23713649",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 556714583,
            "range": "± 2279071",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 3011854446,
            "range": "± 39257709",
            "unit": "ns/iter"
          },
          {
            "name": "write_grouping/with_grouping",
            "value": 2391088474,
            "range": "± 30639481",
            "unit": "ns/iter"
          },
          {
            "name": "write_grouping/without_grouping",
            "value": 2415715010,
            "range": "± 22926082",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 986596,
            "range": "± 26282",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 2776425,
            "range": "± 7214",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 993256,
            "range": "± 2285",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1691687661,
            "range": "± 477224794",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "e.v.mineev@gmail.com",
            "name": "Evgeniy Mineev",
            "username": "frisbeeman"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0a5bf1977ef2befa5b7819d1fa4e9c9ee892d18e",
          "message": "GH-76: Add release workflow, Docker multi-arch build pipelines (#77)\n\n<!-- This is an auto-generated comment: release notes by coderabbit.ai\n-->\n## Summary by CodeRabbit\n\n* **New Features**\n* Added an automated release workflow that validates version tags, runs\nCI checks, builds and publishes multi-arch container images, and creates\nGitHub releases with release notes.\n\n* **Chores**\n* Introduced a dedicated release container build producing per-binary\nruntime images with embedded metadata.\n* Expanded ignore patterns to exclude VCS, editor, tooling, system\nfiles, and other build artifacts.\n<!-- end of auto-generated comment: release notes by coderabbit.ai -->",
          "timestamp": "2026-02-27T17:03:01+04:00",
          "tree_id": "9fff481303ff4d49c4fd3a893864f1e709045471",
          "url": "https://github.com/icegatetech/icegate/commit/0a5bf1977ef2befa5b7819d1fa4e9c9ee892d18e"
        },
        "date": 1772200054989,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 10333297,
            "range": "± 446703",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 9764433,
            "range": "± 241687",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 10689949,
            "range": "± 125657",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 10614774,
            "range": "± 114810",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 11086674,
            "range": "± 289725",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 15939165,
            "range": "± 232062",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 16273712,
            "range": "± 93617",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 16976398,
            "range": "± 257708",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 38206476,
            "range": "± 944216",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 40747682,
            "range": "± 673122",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 48975896,
            "range": "± 335072",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 16188201,
            "range": "± 67394",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 20514229,
            "range": "± 123552",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 21132397,
            "range": "± 161783",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 22920148,
            "range": "± 301916",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2343582384,
            "range": "± 24260820",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 559135906,
            "range": "± 14241890",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 3014244242,
            "range": "± 52341144",
            "unit": "ns/iter"
          },
          {
            "name": "write_grouping/with_grouping",
            "value": 2353774223,
            "range": "± 24711796",
            "unit": "ns/iter"
          },
          {
            "name": "write_grouping/without_grouping",
            "value": 2290592330,
            "range": "± 61344424",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 1040145,
            "range": "± 13490",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 2862190,
            "range": "± 25547",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 1064514,
            "range": "± 4802",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1693797977,
            "range": "± 492118329",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "e.v.mineev@gmail.com",
            "name": "Evgeniy Mineev",
            "username": "frisbeeman"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "edd22f5cb5b5b6eee005b45c3e738434ffbfabd4",
          "message": "GH-5: Add AWS Glue and S3 Tables catalog backends (#78)",
          "timestamp": "2026-02-28T17:55:08+04:00",
          "tree_id": "e6f4ac053d61d3f05c908c47ca912e100c0a5dc7",
          "url": "https://github.com/icegatetech/icegate/commit/edd22f5cb5b5b6eee005b45c3e738434ffbfabd4"
        },
        "date": 1772289652688,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 10495890,
            "range": "± 218988",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 10551456,
            "range": "± 146984",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 10943820,
            "range": "± 193806",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 10796998,
            "range": "± 121510",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 11135251,
            "range": "± 110204",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 14941633,
            "range": "± 122081",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 15507353,
            "range": "± 119531",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 15953333,
            "range": "± 178918",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 37279855,
            "range": "± 500032",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 39523830,
            "range": "± 548914",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 47436770,
            "range": "± 533819",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 15575484,
            "range": "± 121180",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 20264328,
            "range": "± 122287",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 20535087,
            "range": "± 166968",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 22511172,
            "range": "± 85012",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2211879473,
            "range": "± 7379269",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 560123275,
            "range": "± 14064410",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 2970345782,
            "range": "± 42849992",
            "unit": "ns/iter"
          },
          {
            "name": "write_grouping/with_grouping",
            "value": 2203328823,
            "range": "± 45275708",
            "unit": "ns/iter"
          },
          {
            "name": "write_grouping/without_grouping",
            "value": 2203710905,
            "range": "± 39319564",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 1055132,
            "range": "± 29253",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 2906573,
            "range": "± 8360",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 1062861,
            "range": "± 4481",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1605121851,
            "range": "± 501536120",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "e.v.mineev@gmail.com",
            "name": "Evgeniy Mineev",
            "username": "frisbeeman"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "61b99bd8148005d5a5cffee5ad32e364319598cf",
          "message": "GH-76: Add Helm chart for IceGate (#79)\n\n<!-- This is an auto-generated comment: release notes by coderabbit.ai\n-->\n## Summary by CodeRabbit\n\n* **New Features**\n* Added Helm chart to simplify IceGate deployment on Kubernetes, with\nconfigurable Query, Ingest, and Migrate components and sane defaults.\n* Chart includes helpful post-install notes showing port-forward\ncommands and install guidance.\n\n* **Chores**\n  * CI now validates Helm charts (lint + template) as part of checks.\n* Release pipeline publishes the Helm chart to the container registry\nand includes chart info in release notes.\n<!-- end of auto-generated comment: release notes by coderabbit.ai -->",
          "timestamp": "2026-03-01T02:09:42+04:00",
          "tree_id": "a373db396d040de2d0716c01b0e1a01f77ad9c69",
          "url": "https://github.com/icegatetech/icegate/commit/61b99bd8148005d5a5cffee5ad32e364319598cf"
        },
        "date": 1772319230473,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 10599172,
            "range": "± 223615",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 9889053,
            "range": "± 118170",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 10570642,
            "range": "± 449021",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 10358687,
            "range": "± 70512",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 10584681,
            "range": "± 86187",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 14632854,
            "range": "± 139704",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 15125056,
            "range": "± 59879",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 15683051,
            "range": "± 70649",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 37006573,
            "range": "± 718752",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 39730034,
            "range": "± 878059",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 47567721,
            "range": "± 555415",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 15197056,
            "range": "± 135723",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 19717895,
            "range": "± 191373",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 19883151,
            "range": "± 175278",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 21715902,
            "range": "± 115864",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2257867591,
            "range": "± 33810385",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 586832470,
            "range": "± 21631530",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 3020859783,
            "range": "± 34319572",
            "unit": "ns/iter"
          },
          {
            "name": "write_grouping/with_grouping",
            "value": 2266247075,
            "range": "± 39102497",
            "unit": "ns/iter"
          },
          {
            "name": "write_grouping/without_grouping",
            "value": 2253369124,
            "range": "± 43743221",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 1088204,
            "range": "± 23495",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 2988256,
            "range": "± 6862",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 1092830,
            "range": "± 4683",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1666575222,
            "range": "± 509157297",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "e.v.mineev@gmail.com",
            "name": "Evgenii Mineev",
            "username": "frisbeeman"
          },
          "committer": {
            "email": "e.v.mineev@gmail.com",
            "name": "Evgenii Mineev",
            "username": "frisbeeman"
          },
          "distinct": true,
          "id": "104d1fcaf2d74ecfdd0f6473854cab76cf234954",
          "message": "Refactor Docker workflow to use `buildx bake` for multi-arch builds and split metadata actions by binary",
          "timestamp": "2026-02-28T23:45:58+01:00",
          "tree_id": "2cd06234fc46a25ac83ff70a9d0b3b7b2abed164",
          "url": "https://github.com/icegatetech/icegate/commit/104d1fcaf2d74ecfdd0f6473854cab76cf234954"
        },
        "date": 1772321437496,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 10895407,
            "range": "± 228662",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 10035634,
            "range": "± 164877",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 10468222,
            "range": "± 298171",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 10894985,
            "range": "± 194412",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 10819053,
            "range": "± 174843",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 15090784,
            "range": "± 295087",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 15707508,
            "range": "± 216683",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 16252526,
            "range": "± 172424",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 37370069,
            "range": "± 709012",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 39768607,
            "range": "± 565092",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 47179394,
            "range": "± 652090",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 15119317,
            "range": "± 234118",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 19889535,
            "range": "± 293362",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 20469823,
            "range": "± 249983",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 22057605,
            "range": "± 248340",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2323642125,
            "range": "± 43574356",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 562447088,
            "range": "± 15474615",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 3005425643,
            "range": "± 45912949",
            "unit": "ns/iter"
          },
          {
            "name": "write_grouping/with_grouping",
            "value": 2291358059,
            "range": "± 35254838",
            "unit": "ns/iter"
          },
          {
            "name": "write_grouping/without_grouping",
            "value": 2304158507,
            "range": "± 32252063",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 1057287,
            "range": "± 16056",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 2880668,
            "range": "± 10605",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 1061565,
            "range": "± 5723",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1643236492,
            "range": "± 511302558",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "e.v.mineev@gmail.com",
            "name": "Evgenii Mineev",
            "username": "frisbeeman"
          },
          "committer": {
            "email": "e.v.mineev@gmail.com",
            "name": "Evgenii Mineev",
            "username": "frisbeeman"
          },
          "distinct": true,
          "id": "a2908eb51855a0f3e84ea15d97adfb80188a4ce5",
          "message": "Remove CI gate job from release workflow\n\nThere are commit checks",
          "timestamp": "2026-03-01T00:01:29+01:00",
          "tree_id": "63615e39c1f13f2e06616ba12e707e303461b683",
          "url": "https://github.com/icegatetech/icegate/commit/a2908eb51855a0f3e84ea15d97adfb80188a4ce5"
        },
        "date": 1772322374509,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 9958998,
            "range": "± 363126",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 9536458,
            "range": "± 249955",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 10274134,
            "range": "± 180421",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 10183426,
            "range": "± 187810",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 10720522,
            "range": "± 231755",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 15204046,
            "range": "± 204728",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 16014468,
            "range": "± 373303",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 15887945,
            "range": "± 348998",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 37639458,
            "range": "± 1214423",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 40670698,
            "range": "± 551274",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 47098638,
            "range": "± 526239",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 14858103,
            "range": "± 574658",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 21510915,
            "range": "± 897392",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 21714676,
            "range": "± 538737",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 22633089,
            "range": "± 576564",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2322388068,
            "range": "± 27877464",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 582346946,
            "range": "± 22214883",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 3022604136,
            "range": "± 47559903",
            "unit": "ns/iter"
          },
          {
            "name": "write_grouping/with_grouping",
            "value": 2353496903,
            "range": "± 44362995",
            "unit": "ns/iter"
          },
          {
            "name": "write_grouping/without_grouping",
            "value": 2316257670,
            "range": "± 56154139",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 1091248,
            "range": "± 19086",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 3021584,
            "range": "± 41707",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 1102593,
            "range": "± 11753",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1682843699,
            "range": "± 511538611",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}