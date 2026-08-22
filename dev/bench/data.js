window.BENCHMARK_DATA = {
  "lastUpdate": 1787404656919,
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
          "id": "d56f2afaa2af6e3e2f2d4048a077bb48f30d00ac",
          "message": "Refactor release workflow and Docker bake configuration to use centralized builder target and runtime inheritance",
          "timestamp": "2026-03-01T00:36:28+01:00",
          "tree_id": "5ade5a7a380167f6cd353f52ed31199b884a789d",
          "url": "https://github.com/icegatetech/icegate/commit/d56f2afaa2af6e3e2f2d4048a077bb48f30d00ac"
        },
        "date": 1772324432718,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 10147431,
            "range": "± 190359",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 9565604,
            "range": "± 154010",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 10363991,
            "range": "± 113822",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 10306079,
            "range": "± 113235",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 10622481,
            "range": "± 196711",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 14801970,
            "range": "± 145197",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 15306047,
            "range": "± 172279",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 16121078,
            "range": "± 144249",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 37259983,
            "range": "± 549901",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 39214340,
            "range": "± 558029",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 47259088,
            "range": "± 682810",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 15435469,
            "range": "± 119820",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 20060853,
            "range": "± 117686",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 20341542,
            "range": "± 138636",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 22303215,
            "range": "± 125534",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2213223200,
            "range": "± 13203382",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 579245716,
            "range": "± 21483287",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 3002334317,
            "range": "± 37591801",
            "unit": "ns/iter"
          },
          {
            "name": "write_grouping/with_grouping",
            "value": 2229063331,
            "range": "± 27009011",
            "unit": "ns/iter"
          },
          {
            "name": "write_grouping/without_grouping",
            "value": 2216411928,
            "range": "± 26346184",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 1088891,
            "range": "± 13317",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 2998072,
            "range": "± 12577",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 1094344,
            "range": "± 4144",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1628877448,
            "range": "± 515655583",
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
          "id": "694d2cec44859eac204ff2df4fad601b62f0db41",
          "message": "Update file paths in release workflow to use `cwd://` prefix for metadata bake files",
          "timestamp": "2026-03-01T00:45:30+01:00",
          "tree_id": "bf057089bab3edc96d04b92f9c8d7677a427b7d0",
          "url": "https://github.com/icegatetech/icegate/commit/694d2cec44859eac204ff2df4fad601b62f0db41"
        },
        "date": 1772324986571,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 10189566,
            "range": "± 299502",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 9646123,
            "range": "± 131797",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 10317617,
            "range": "± 166229",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 10304170,
            "range": "± 164648",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 10648925,
            "range": "± 415221",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 15082033,
            "range": "± 240275",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 15752126,
            "range": "± 159339",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 16598853,
            "range": "± 247242",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 37476321,
            "range": "± 583723",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 40285398,
            "range": "± 809170",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 48475445,
            "range": "± 559477",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 15782965,
            "range": "± 57318",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 20479236,
            "range": "± 147666",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 20760104,
            "range": "± 265847",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 22758778,
            "range": "± 86797",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2323824328,
            "range": "± 59659063",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 561734713,
            "range": "± 13184778",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 2985237372,
            "range": "± 57768473",
            "unit": "ns/iter"
          },
          {
            "name": "write_grouping/with_grouping",
            "value": 2253923610,
            "range": "± 21898927",
            "unit": "ns/iter"
          },
          {
            "name": "write_grouping/without_grouping",
            "value": 2291586319,
            "range": "± 26486614",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 1065233,
            "range": "± 25957",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 2907825,
            "range": "± 18844",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 1063600,
            "range": "± 4510",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1656509482,
            "range": "± 498895668",
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
          "id": "092caff9dac361afebcbf5153c261c4b3ca1b99d",
          "message": "Refactor release workflow to replace `ci-gate` references with `meta-query` outputs and simplify version handling",
          "timestamp": "2026-03-01T01:06:22+01:00",
          "tree_id": "6335bcdcb1760742ba94d14d5b94c0294489e9d8",
          "url": "https://github.com/icegatetech/icegate/commit/092caff9dac361afebcbf5153c261c4b3ca1b99d"
        },
        "date": 1772326240538,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 10427578,
            "range": "± 270254",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 9880615,
            "range": "± 210150",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 10179879,
            "range": "± 182106",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 10031511,
            "range": "± 148482",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 10271944,
            "range": "± 305527",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 14800254,
            "range": "± 187306",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 15242164,
            "range": "± 268947",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 15538345,
            "range": "± 176240",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 37780834,
            "range": "± 600854",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 40365727,
            "range": "± 698104",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 47973092,
            "range": "± 749606",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 15543764,
            "range": "± 213474",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 20418301,
            "range": "± 546368",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 20736821,
            "range": "± 307811",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 22806298,
            "range": "± 273366",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2254117100,
            "range": "± 20437384",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 595928227,
            "range": "± 22417115",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 2988996280,
            "range": "± 52297664",
            "unit": "ns/iter"
          },
          {
            "name": "write_grouping/with_grouping",
            "value": 2216078389,
            "range": "± 28929562",
            "unit": "ns/iter"
          },
          {
            "name": "write_grouping/without_grouping",
            "value": 2228526109,
            "range": "± 23594959",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 1095472,
            "range": "± 22199",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 3037220,
            "range": "± 15727",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 1105731,
            "range": "± 5604",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1647925776,
            "range": "± 519433731",
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
          "id": "31987c5c597fc5c0f90079ed6151220d1c20aa02",
          "message": "GH-76: Docker image and Helm chart release pipeline  (#80)\n\n<!-- This is an auto-generated comment: release notes by coderabbit.ai\n-->\n## Summary by CodeRabbit\n\n* **New Features**\n* Three Docker image targets (query, ingest, maintain) with bake-based\nbuild/publish and SemVer tag validation.\n* Kustomize overlays plus Kubernetes namespaces, secrets, and Helm\nvalues for full-stack deployment.\n\n* **Improvements**\n* Streamlined release workflow deriving version from tags; unified\nDocker/Helm steps and cross-architecture container builds.\n* Helm enhancements: namespace helper, optional namespace creation,\nserviceaccount hooks, and migrate wait-for-dependencies.\n\n* **Dependencies**\n  * Updated Iceberg-related dependencies to newer revisions.\n<!-- end of auto-generated comment: release notes by coderabbit.ai -->",
          "timestamp": "2026-03-06T17:12:09+04:00",
          "tree_id": "a9751d16ef332ded378c19a379850bd222b0e356",
          "url": "https://github.com/icegatetech/icegate/commit/31987c5c597fc5c0f90079ed6151220d1c20aa02"
        },
        "date": 1772806219093,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 10355138,
            "range": "± 254674",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 9468728,
            "range": "± 124168",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 10192702,
            "range": "± 129129",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 10136119,
            "range": "± 187144",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 10245722,
            "range": "± 71863",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 14364855,
            "range": "± 52946",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 14896014,
            "range": "± 241233",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 15221087,
            "range": "± 69776",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 36501824,
            "range": "± 626694",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 38899523,
            "range": "± 563053",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 46573674,
            "range": "± 433191",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 14539095,
            "range": "± 351005",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 19163702,
            "range": "± 76614",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 19269945,
            "range": "± 177004",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 21270145,
            "range": "± 107580",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2377714031,
            "range": "± 61664085",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 565188615,
            "range": "± 7083818",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 3006658138,
            "range": "± 46995819",
            "unit": "ns/iter"
          },
          {
            "name": "write_grouping/with_grouping",
            "value": 2403772933,
            "range": "± 37676538",
            "unit": "ns/iter"
          },
          {
            "name": "write_grouping/without_grouping",
            "value": 2427975573,
            "range": "± 43288738",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 1053282,
            "range": "± 22902",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 2898203,
            "range": "± 8543",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 1057453,
            "range": "± 3331",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1701358409,
            "range": "± 500294567",
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
          "id": "3dbcad5b06ea583cfbbd21a6dbaf9921921682cc",
          "message": "GH-59: Shifter runtime (#82)\n\n<!-- This is an auto-generated comment: release notes by coderabbit.ai\n-->\n## Summary by CodeRabbit\n\n* **New Features**\n* Runtime thread planning and dedicated shift runtime for improved\nstartup reporting and allocation.\n\n* **Bug Fixes**\n  * Better startup failure and panic propagation for ingest runtime.\n* Improved retry behavior for writes with smarter backoff and conflict\nhandling.\n* More contextual error messages for missing resources and concurrent\nmodifications.\n\n* **Performance**\n  * Increased default batch record limit from 128 to 1,024.\n\n* **Improvements**\n  * Expanded metrics, tracing spans, and logging for observability.\n<!-- end of auto-generated comment: release notes by coderabbit.ai -->",
          "timestamp": "2026-03-07T01:45:58+04:00",
          "tree_id": "69ec1233cf3b765382b2a6e48da01221c4935490",
          "url": "https://github.com/icegatetech/icegate/commit/3dbcad5b06ea583cfbbd21a6dbaf9921921682cc"
        },
        "date": 1772836257429,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 11832731,
            "range": "± 572860",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 10390163,
            "range": "± 585036",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 11402543,
            "range": "± 497577",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 11766332,
            "range": "± 176052",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 11858077,
            "range": "± 186805",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 17151202,
            "range": "± 147765",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 16940438,
            "range": "± 497686",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 17650193,
            "range": "± 316996",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 40423288,
            "range": "± 881296",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 42916417,
            "range": "± 903318",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 49857614,
            "range": "± 871086",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 16099279,
            "range": "± 264628",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 21936305,
            "range": "± 505070",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 21476858,
            "range": "± 424895",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 23643200,
            "range": "± 443625",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2318499292,
            "range": "± 19020532",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 605818304,
            "range": "± 23671113",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 3033119893,
            "range": "± 50126546",
            "unit": "ns/iter"
          },
          {
            "name": "write_grouping/with_grouping",
            "value": 2341590802,
            "range": "± 42503113",
            "unit": "ns/iter"
          },
          {
            "name": "write_grouping/without_grouping",
            "value": 2378933756,
            "range": "± 44097108",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 1146544,
            "range": "± 19018",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 3216373,
            "range": "± 41636",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 1154507,
            "range": "± 5071",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1676883003,
            "range": "± 524244878",
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
          "id": "565ad0edf4fae252d420ace68948aa20419c77f8",
          "message": "GH-8: Refactor ``*_over_time` aggregation planing. (#81)\n\n<!-- This is an auto-generated comment: release notes by coderabbit.ai\n-->\n## Summary by CodeRabbit\n\n* **Bug Fixes**\n* Simplified cache configuration by removing the per-object size limit\nto reduce config surface.\n\n* **New Features**\n  * Added a GridAgg UDAF for grid-based bucketed range aggregations.\n  * Exposed new grid utilities for computing and matching grid points.\n\n* **Improvements**\n* Planner switched to GridAgg-based range aggregation with improved\ngrouping and attribute handling.\n* QueryContext gains a configurable max-grid-points limit (default\nadded).\n\n* **Tests**\n* Expanded tests to validate GridAgg, date-grid utilities, and planner\nbehavior.\n<!-- end of auto-generated comment: release notes by coderabbit.ai -->",
          "timestamp": "2026-03-07T03:43:07+04:00",
          "tree_id": "aa8b593c4b3884f1598f83ab861fe73bcb314c94",
          "url": "https://github.com/icegatetech/icegate/commit/565ad0edf4fae252d420ace68948aa20419c77f8"
        },
        "date": 1772843217101,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 10494865,
            "range": "± 262023",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 9703031,
            "range": "± 93085",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 10172601,
            "range": "± 346463",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 10105601,
            "range": "± 94805",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 10427463,
            "range": "± 84375",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 12412454,
            "range": "± 199440",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 12323203,
            "range": "± 209911",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 13265363,
            "range": "± 215219",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 27629914,
            "range": "± 184041",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 28089624,
            "range": "± 409594",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 27832626,
            "range": "± 164905",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 12026073,
            "range": "± 268929",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 12788957,
            "range": "± 83207",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 14088456,
            "range": "± 48489",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 18086182,
            "range": "± 138432",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2289305372,
            "range": "± 10825685",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 563027165,
            "range": "± 20021741",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 2970559245,
            "range": "± 56021293",
            "unit": "ns/iter"
          },
          {
            "name": "write_grouping/with_grouping",
            "value": 2254169660,
            "range": "± 31218985",
            "unit": "ns/iter"
          },
          {
            "name": "write_grouping/without_grouping",
            "value": 2254068344,
            "range": "± 21170265",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 1061707,
            "range": "± 27715",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 2932797,
            "range": "± 16476",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 1058163,
            "range": "± 5312",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1629807205,
            "range": "± 507519234",
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
          "id": "8bd0dc743b7e7ee18d3e196e8dbb7398f4177045",
          "message": "Fix jobmanager: etag normalization & job status sync after conflict (#83)\n\n<!-- This is an auto-generated comment: release notes by coderabbit.ai\n-->\n\n## Summary by CodeRabbit\n\n## Release Notes\n\n* **Bug Fixes**\n* Enhanced conflict resolution when multiple workers update job state\nconcurrently.\n  * Improved validation of job state transitions.\n\n* **Tests**\n* Extensive new test coverage for concurrent task scenarios, job state\ntransitions, and storage operations.\n\n<!-- end of auto-generated comment: release notes by coderabbit.ai -->",
          "timestamp": "2026-03-09T18:56:28+04:00",
          "tree_id": "f502127900322d9de5b800417d0853c4115e1cb1",
          "url": "https://github.com/icegatetech/icegate/commit/8bd0dc743b7e7ee18d3e196e8dbb7398f4177045"
        },
        "date": 1773070888658,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 9913712,
            "range": "± 220887",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 9097247,
            "range": "± 154536",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 9852874,
            "range": "± 197651",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 10042595,
            "range": "± 154564",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 10445293,
            "range": "± 294882",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 12057699,
            "range": "± 241700",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 12513840,
            "range": "± 372049",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 13976680,
            "range": "± 309521",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 28922066,
            "range": "± 281897",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 29315508,
            "range": "± 255212",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 29641293,
            "range": "± 317670",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 13675974,
            "range": "± 319693",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 14053805,
            "range": "± 310385",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 15499535,
            "range": "± 351531",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 20279770,
            "range": "± 434244",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2368591425,
            "range": "± 23428317",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 603586504,
            "range": "± 22992431",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 3036669601,
            "range": "± 61940127",
            "unit": "ns/iter"
          },
          {
            "name": "write_grouping/with_grouping",
            "value": 2366437499,
            "range": "± 28998636",
            "unit": "ns/iter"
          },
          {
            "name": "write_grouping/without_grouping",
            "value": 2379040136,
            "range": "± 35746103",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 1122311,
            "range": "± 15937",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 3087199,
            "range": "± 14657",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 1124498,
            "range": "± 6593",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1679990238,
            "range": "± 524861464",
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
          "id": "e72cf8726d90ec0d1c55ed98a767ba1e3890c03e",
          "message": "GH-85: parallel segment reading in Shifter (#86)\n\n<!-- This is an auto-generated comment: release notes by coderabbit.ai\n-->\n## Summary by CodeRabbit\n\n* **New Features**\n* Configurable parallelism for segment and plan reads to improve\ningestion throughput.\n\n* **Configuration**\n* Two new settings for plan and shift segment read parallelism\n(defaults: 8).\n  * Validation now rejects zero values.\n\n* **Bug Fixes**\n  * Fixed path-parameter syntax for several HTTP routes.\n\n* **Tests**\n* Extensive integration tests for parallel vs. sequential reads,\nconcurrency, and failure modes.\n\n* **Chores**\n  * Dependency updates and audit configuration adjustments.\n<!-- end of auto-generated comment: release notes by coderabbit.ai -->",
          "timestamp": "2026-03-12T00:59:12+04:00",
          "tree_id": "6bec495cf75469f2843e20b9e7f4eecbbd7aaa0e",
          "url": "https://github.com/icegatetech/icegate/commit/e72cf8726d90ec0d1c55ed98a767ba1e3890c03e"
        },
        "date": 1773266385919,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 10134571,
            "range": "± 103006",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 9920332,
            "range": "± 223513",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 10407875,
            "range": "± 228894",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 10145744,
            "range": "± 119420",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 10544601,
            "range": "± 151978",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 12186797,
            "range": "± 131706",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 12460835,
            "range": "± 133695",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 13584182,
            "range": "± 174533",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 28135895,
            "range": "± 306326",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 28529758,
            "range": "± 353548",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 28032190,
            "range": "± 432240",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 12895233,
            "range": "± 324870",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 13124839,
            "range": "± 96564",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 14642742,
            "range": "± 292848",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 18558471,
            "range": "± 160712",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2253812580,
            "range": "± 32080439",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 578459956,
            "range": "± 22821668",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 3015077239,
            "range": "± 53491080",
            "unit": "ns/iter"
          },
          {
            "name": "write_grouping/with_grouping",
            "value": 2303859761,
            "range": "± 32131352",
            "unit": "ns/iter"
          },
          {
            "name": "write_grouping/without_grouping",
            "value": 2278773527,
            "range": "± 29898604",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 1095882,
            "range": "± 23814",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 3044982,
            "range": "± 7954",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 1106943,
            "range": "± 8085",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1703123127,
            "range": "± 502695933",
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
          "id": "9eb3008bdb2860ed03cba41171ac7b1b21cb1609",
          "message": "GH-87: Refactor WAL handling (#88)\n\n<!-- This is an auto-generated comment: release notes by coderabbit.ai\n-->\n## Summary by CodeRabbit\n\n* **New Features**\n* Dependency wait/init support via a reusable Helm helper for\ndeployments, jobs and pods.\n* Centralized queue-based WAL handling for query/ingest with shared\nqueue configuration.\n* New Skaffold configs, Kustomize overlays, Helm values and sample\nsecrets for multiple deployment targets.\n\n* **Configuration**\n  * Docker build emits additional bake-file annotations.\n* Added Parquet metadata prefetch and waitForDependencies knobs\n(configurable).\n\n* **Documentation**\n  * Added Kustomize deployment guide; fixed Quick Start typo.\n\n* **Chores**\n* Grafana dashboard sync script and assorted kustomize/helm manifest\nupdates.\n<!-- end of auto-generated comment: release notes by coderabbit.ai -->",
          "timestamp": "2026-03-16T16:03:51+04:00",
          "tree_id": "cafd8eefa8496ad4c0956d8c313546dd1f8d5780",
          "url": "https://github.com/icegatetech/icegate/commit/9eb3008bdb2860ed03cba41171ac7b1b21cb1609"
        },
        "date": 1773665302879,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 10339521,
            "range": "± 203715",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 10173735,
            "range": "± 105349",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 10966549,
            "range": "± 127031",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 10789008,
            "range": "± 597854",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 10652543,
            "range": "± 193183",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 12612533,
            "range": "± 183255",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 12751421,
            "range": "± 51908",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 13854443,
            "range": "± 230760",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 28680552,
            "range": "± 264903",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 28884854,
            "range": "± 186292",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 29243448,
            "range": "± 348892",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 12726302,
            "range": "± 257117",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 13796642,
            "range": "± 213104",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 14594721,
            "range": "± 374989",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 19327674,
            "range": "± 281527",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2292217848,
            "range": "± 35784927",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 600504221,
            "range": "± 22779589",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 3007838930,
            "range": "± 68734991",
            "unit": "ns/iter"
          },
          {
            "name": "write_grouping/with_grouping",
            "value": 2304526456,
            "range": "± 67578070",
            "unit": "ns/iter"
          },
          {
            "name": "write_grouping/without_grouping",
            "value": 2279064387,
            "range": "± 25689431",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 1108082,
            "range": "± 19460",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 3031896,
            "range": "± 16377",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 1110936,
            "range": "± 3509",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1668401707,
            "range": "± 527196091",
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
          "id": "7e550d0f030c71e78064070913dafde615ee90c9",
          "message": "Gh 90/ingest s3 metrics (#93)\n\n<!-- This is an auto-generated comment: release notes by coderabbit.ai\n-->\n## Summary by CodeRabbit\n\n* **New Features**\n* Detailed object-store S3 metrics for ingestion, new public metrics\ntypes, and improved runtime metrics.\n* Expanded Grafana dashboard with additional latency, throughput, queue,\nWAL and task panels.\n* Improved server/task orchestration for safer shutdown and failure\nhandling.\n\n* **Chores**\n* Docker build optimized for cache-friendly, per-service binary builds.\n* Workspace dependency version normalized; ingestion dependencies and\nfeatures updated.\n\n* **Style/Docs**\n  * Small docs and clarity tweaks; added TODOs.\n<!-- end of auto-generated comment: release notes by coderabbit.ai -->",
          "timestamp": "2026-03-18T18:17:19+04:00",
          "tree_id": "0c9b1eb1787035421d930e8a4f6206b68f4c46ac",
          "url": "https://github.com/icegatetech/icegate/commit/7e550d0f030c71e78064070913dafde615ee90c9"
        },
        "date": 1773847072045,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 10146874,
            "range": "± 167742",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 9878373,
            "range": "± 70848",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 10549935,
            "range": "± 185827",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 10440814,
            "range": "± 421719",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 10619439,
            "range": "± 139464",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 11868392,
            "range": "± 99730",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 12057283,
            "range": "± 94149",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 13220958,
            "range": "± 77734",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 27246125,
            "range": "± 105768",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 27713461,
            "range": "± 296615",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 27736934,
            "range": "± 250473",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 12554025,
            "range": "± 59790",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 12831680,
            "range": "± 37583",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 13963284,
            "range": "± 105667",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 18400571,
            "range": "± 143260",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2418756054,
            "range": "± 18108970",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 566791005,
            "range": "± 20274676",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 3020207639,
            "range": "± 41191377",
            "unit": "ns/iter"
          },
          {
            "name": "write_grouping/with_grouping",
            "value": 2440511139,
            "range": "± 34842727",
            "unit": "ns/iter"
          },
          {
            "name": "write_grouping/without_grouping",
            "value": 2453028625,
            "range": "± 16751578",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 1073708,
            "range": "± 25109",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 2965740,
            "range": "± 9813",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 1076255,
            "range": "± 4368",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1698159803,
            "range": "± 507380052",
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
          "id": "00444dc0c2f38903a5ca3db73e42b1bdfcc50afa",
          "message": "GH-91: Refactor IO cache to support prefetch (#92)\n\n<!-- This is an auto-generated comment: release notes by coderabbit.ai\n-->\n## Summary by CodeRabbit\n\n* **New Features**\n* Configurable IO cache controls (stat TTL, max write-cache size),\nParquet metadata prefetching, unified S3/s3a storage backend and\nreusable storage factory.\n* Query engine background catalog refresh with configurable\nrefresh/max-age.\n\n* **Improvements**\n  * Exposed cache/prefetch metrics and earlier metrics initialization.\n* Write buffering limits, faster queue writer conflict probing, and\nremoval of write-grouping.\n* Helm/Kustomize/Grafana/Prometheus value updates and increased resource\nrequests; optional ingest/query cache enablement.\n<!-- end of auto-generated comment: release notes by coderabbit.ai -->",
          "timestamp": "2026-03-25T03:54:39+04:00",
          "tree_id": "073626e4a6c6a7c5138526ee5d69f7a452665e29",
          "url": "https://github.com/icegatetech/icegate/commit/00444dc0c2f38903a5ca3db73e42b1bdfcc50afa"
        },
        "date": 1774400122123,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 1846952,
            "range": "± 53488",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 3165582,
            "range": "± 689968",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 3208599,
            "range": "± 40080",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 3370627,
            "range": "± 56500",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 3589962,
            "range": "± 108465",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 5431454,
            "range": "± 733152",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 7239286,
            "range": "± 44278",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 7754677,
            "range": "± 113909",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 7233779,
            "range": "± 7188187",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 24087718,
            "range": "± 223241",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 24396219,
            "range": "± 45759",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 5644355,
            "range": "± 924999",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 10743987,
            "range": "± 141130",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 11913626,
            "range": "± 163826",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 13607812,
            "range": "± 208503",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2375556592,
            "range": "± 11264950",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 556140534,
            "range": "± 2344792",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 2945998737,
            "range": "± 37690840",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 892038,
            "range": "± 9456",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 2684563,
            "range": "± 16594",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 899975,
            "range": "± 8717",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1656432740,
            "range": "± 457977366",
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
          "id": "5c7a0015f7224eecfb6c09c5c8799cde107427a7",
          "message": "GH-46: Add AWS S3Tables overlay for IceGate deployment (#98)\n\n<!-- This is an auto-generated comment: release notes by coderabbit.ai\n-->\n## Summary by CodeRabbit\n\n* **New Features**\n  * Added AWS S3Tables support for Iceberg catalog storage.\n* Introduced IceGate deployment with Query and Ingest components\nenabled.\n* Enabled observability: Prometheus, Loki, and distributed tracing\nintegration.\n  * Configured Tailscale exposure for relevant services.\n* Added credentials secret and deployment values to support AWS S3\nusage.\n<!-- end of auto-generated comment: release notes by coderabbit.ai -->",
          "timestamp": "2026-04-05T14:09:30+04:00",
          "tree_id": "8bc8f6b268dc879a5525d8bd9761151d628f0498",
          "url": "https://github.com/icegatetech/icegate/commit/5c7a0015f7224eecfb6c09c5c8799cde107427a7"
        },
        "date": 1775387344304,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 1747341,
            "range": "± 19558",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 3038557,
            "range": "± 524637",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 3086501,
            "range": "± 54694",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 3153576,
            "range": "± 165571",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 3439723,
            "range": "± 9606",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 5124715,
            "range": "± 601347",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 6692500,
            "range": "± 31715",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 7042331,
            "range": "± 36581",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 6900675,
            "range": "± 6334417",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 22123921,
            "range": "± 247755",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 22098682,
            "range": "± 90183",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 5231484,
            "range": "± 812725",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 9859588,
            "range": "± 118206",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 11186255,
            "range": "± 110550",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 12958109,
            "range": "± 112186",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2376329637,
            "range": "± 74019067",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 558096569,
            "range": "± 2208756",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 2976547931,
            "range": "± 50522347",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 1045790,
            "range": "± 16597",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 2962122,
            "range": "± 30190",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 1050315,
            "range": "± 8165",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1663884969,
            "range": "± 514338769",
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
          "id": "e36602b322676ceff2811776eb9fcd412497e592",
          "message": "GH-95: Ingest optimisation (#102)\n\n<!-- This is an auto-generated comment: release notes by coderabbit.ai\n-->\n## Summary by CodeRabbit\n\n* **Performance Improvements**\n* Linux builds now use a faster allocator; Docker build is simplified;\ningest memory defaults reduced.\n\n* **Reliability Enhancements**\n* Retry and backoff added for S3 bucket creation; improved WAL write/ack\nhandling and retry semantics.\n* Log ingestion now uses a pre-sort + WAL pipeline with better error\nmapping and metrics.\n\n* **Configuration Updates**\n  * Increased default WAL row-group size for queues.\n\n* **Documentation**\n  * Clarified struct/impl grouping guidance in Rust docs.\n<!-- end of auto-generated comment: release notes by coderabbit.ai -->\n\n---------\n\nCo-authored-by: Evgenii Mineev <e.v.mineev@gmail.com>",
          "timestamp": "2026-04-08T00:14:06+04:00",
          "tree_id": "83ee1cafdac819ba540f2c48be5f73e73e2ec747",
          "url": "https://github.com/icegatetech/icegate/commit/e36602b322676ceff2811776eb9fcd412497e592"
        },
        "date": 1775596392439,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 1731910,
            "range": "± 44929",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 3018750,
            "range": "± 528589",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 3036897,
            "range": "± 19539",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 3105610,
            "range": "± 12778",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 3398149,
            "range": "± 16363",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 5056774,
            "range": "± 614169",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 6714938,
            "range": "± 47554",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 7026611,
            "range": "± 26830",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 6921358,
            "range": "± 6775243",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 23076086,
            "range": "± 426144",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 23315781,
            "range": "± 212500",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 5258119,
            "range": "± 740566",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 9794309,
            "range": "± 44677",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 11093110,
            "range": "± 88356",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 12816829,
            "range": "± 31270",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2271496891,
            "range": "± 29107531",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 506188958,
            "range": "± 4823632",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 2950152828,
            "range": "± 40678694",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 1012705,
            "range": "± 11953",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 2829310,
            "range": "± 7495",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 1016560,
            "range": "± 3712",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1662711787,
            "range": "± 491305607",
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
          "id": "578a6b2b187c049004f50ff32be15a5d4b210695",
          "message": "GH-94: Remove example configurations and refactor metadata caching logic in query engine and WAL reader (#96)\n\n<!-- This is an auto-generated comment: release notes by coderabbit.ai\n-->\n## Summary by CodeRabbit\n\n* **New Features**\n  * Optional inclusion of WAL (hot) segments in query results\n  * New CPU throttling & scheduling panels in monitoring dashboard\n  * Fast metadata-only label discovery for Loki endpoints\n\n* **Performance Improvements**\n  * Parquet metadata caching to reduce object-store round-trips\n\n* **Configuration**\n  * New engine options to enable WAL queries and set metadata-size hints\n* Configurable metadata cache capacity and prefetch default toggled off\n<!-- end of auto-generated comment: release notes by coderabbit.ai -->",
          "timestamp": "2026-04-11T00:45:32+04:00",
          "tree_id": "0b2874b1ad912b95090b9bf288a17befa0d3ed79",
          "url": "https://github.com/icegatetech/icegate/commit/578a6b2b187c049004f50ff32be15a5d4b210695"
        },
        "date": 1775857533589,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 1948834,
            "range": "± 62887",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 3143056,
            "range": "± 540307",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 3135433,
            "range": "± 31527",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 3188377,
            "range": "± 60264",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 3466063,
            "range": "± 20872",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 4959629,
            "range": "± 716264",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 7160407,
            "range": "± 344575",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 7122023,
            "range": "± 199107",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 6865646,
            "range": "± 6693382",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 22690926,
            "range": "± 146393",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 23021071,
            "range": "± 604533",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 5116493,
            "range": "± 826258",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 9885724,
            "range": "± 89680",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 11820153,
            "range": "± 193969",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 13876519,
            "range": "± 197914",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2427848488,
            "range": "± 28934758",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 505336200,
            "range": "± 1219422",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 2957929338,
            "range": "± 18960910",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 1022788,
            "range": "± 16544",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 2856736,
            "range": "± 15580",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 1023230,
            "range": "± 6030",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1696473683,
            "range": "± 493267031",
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
          "id": "586a8950d055248ba01a4908ee0061bd19a93b5f",
          "message": "GH-46: Refactor IceGate configurations (#104)\n\n- use placeholders for sensitive S3 details\n- update endpoints to internal DNS\n- standardize resource settings\n- bump chart version to future `0.1.0`.\n\n<!-- This is an auto-generated comment: release notes by coderabbit.ai\n-->\n\n## Summary by CodeRabbit\n\n* **New Features**\n* Added query caching (memory and disk) with configurable TTL and sizing\nfor improved performance\n  * Enabled WAL-backed querying support\n\n* **Chores**\n* Upgraded icegate Helm chart to 0.1.0 release version across multiple\ndeployment overlays\n* Updated service endpoints to use Kubernetes cluster-local DNS naming\nconventions\n* Parameterized hardcoded configuration values for improved deployment\nportability\n  * Updated MinIO image and metrics monitoring configuration\n  * Adjusted resource allocations for query and ingest services\n\n<!-- end of auto-generated comment: release notes by coderabbit.ai -->",
          "timestamp": "2026-04-11T19:15:50+04:00",
          "tree_id": "5cf01ad0f89a0d17726b8c74f7b09f98d7f66c78",
          "url": "https://github.com/icegatetech/icegate/commit/586a8950d055248ba01a4908ee0061bd19a93b5f"
        },
        "date": 1775922950661,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 1855538,
            "range": "± 63201",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 3097041,
            "range": "± 24262",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 3152932,
            "range": "± 49424",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 3197570,
            "range": "± 6354",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 3474346,
            "range": "± 8584",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 5168317,
            "range": "± 586726",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 6688041,
            "range": "± 27418",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 7021682,
            "range": "± 50165",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 7002108,
            "range": "± 6257060",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 21770134,
            "range": "± 321842",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 22579750,
            "range": "± 371073",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 5166888,
            "range": "± 810122",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 9977975,
            "range": "± 102158",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 11315846,
            "range": "± 308879",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 13545800,
            "range": "± 81224",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2320956863,
            "range": "± 32125312",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 504292257,
            "range": "± 475692",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 2909236280,
            "range": "± 42669438",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 1033084,
            "range": "± 14238",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 2970613,
            "range": "± 12035",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 1035756,
            "range": "± 8838",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1663578393,
            "range": "± 505152487",
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
          "id": "6f855ea5977679aafc166d998119435146484c70",
          "message": "Add issue templates for bug reports and feature requests, and configure GitHub Discussions link (#105)\n\n<!-- This is an auto-generated comment: release notes by coderabbit.ai\n-->\n## Summary by CodeRabbit\n\n* **Chores**\n* Added structured bug report and feature request issue templates with\nrequired fields and component selection; added contact link for\ncommunity discussions.\n* **CI / Workflows**\n* Scoped CI trigger paths to reduce runs; removed some CI jobs and\nintroduced separate Helm linting and security-audit workflows.\n<!-- end of auto-generated comment: release notes by coderabbit.ai -->",
          "timestamp": "2026-04-13T15:23:05+04:00",
          "tree_id": "01dc537464e02f13bbcd9b2a438287995da05867",
          "url": "https://github.com/icegatetech/icegate/commit/6f855ea5977679aafc166d998119435146484c70"
        },
        "date": 1776081900495,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 1750901,
            "range": "± 70000",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 3124281,
            "range": "± 61847",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 3117343,
            "range": "± 24725",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 3158179,
            "range": "± 19472",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 3455721,
            "range": "± 27776",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 5063220,
            "range": "± 746104",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 6808738,
            "range": "± 109590",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 7106418,
            "range": "± 55753",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 6894675,
            "range": "± 6409040",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 21824945,
            "range": "± 100061",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 22083359,
            "range": "± 129913",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 5329596,
            "range": "± 921088",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 9990330,
            "range": "± 161962",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 11563744,
            "range": "± 187860",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 13271361,
            "range": "± 147174",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2306837513,
            "range": "± 20426619",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 503746446,
            "range": "± 961311",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 2926181931,
            "range": "± 43766738",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 1001035,
            "range": "± 10772",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 2832922,
            "range": "± 12611",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 1011340,
            "range": "± 4014",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1624737775,
            "range": "± 495911476",
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
          "id": "e7ea7980c43e868b81d294d939ccaa6b7af5a311",
          "message": "GH-108: Add demo logging to all services (#112)\n\n- introduce OTEL collector for log processing\n- and configure JSON-based structured logging across the stack\n\n<!-- This is an auto-generated comment: release notes by coderabbit.ai\n-->\n## Summary by CodeRabbit\n\n* **New Features**\n* Added an OpenTelemetry Collector for centralized log collection\n(node-level collector + service)\n  * Configured all demo services to forward logs to the collector\n* Integrated a Loki (demo) datasource in Grafana and made it the default\nfor logs\n* Enabled JSON-formatted structured logging across components for\nricher, machine-readable logs\n<!-- end of auto-generated comment: release notes by coderabbit.ai -->",
          "timestamp": "2026-04-16T02:23:39+04:00",
          "tree_id": "5d83b79c1c7c159be9acb017285b49d54d7eba58",
          "url": "https://github.com/icegatetech/icegate/commit/e7ea7980c43e868b81d294d939ccaa6b7af5a311"
        },
        "date": 1776295425384,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 1745479,
            "range": "± 19518",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 3035756,
            "range": "± 601792",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 3082049,
            "range": "± 48576",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 3184674,
            "range": "± 27823",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 3418397,
            "range": "± 35604",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 5108788,
            "range": "± 665930",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 6727770,
            "range": "± 62959",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 7050770,
            "range": "± 117538",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 6915387,
            "range": "± 6429419",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 21585119,
            "range": "± 211605",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 22118940,
            "range": "± 340682",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 5234050,
            "range": "± 835899",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 10014337,
            "range": "± 226598",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 11395525,
            "range": "± 422421",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 12934265,
            "range": "± 116195",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2366475333,
            "range": "± 30188082",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 504086111,
            "range": "± 567846",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 2922147125,
            "range": "± 48977676",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 1002014,
            "range": "± 17357",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 2864014,
            "range": "± 20781",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 1008515,
            "range": "± 11223",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1666035889,
            "range": "± 481826849",
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
          "id": "1f0597f52b49b819a2be4dafafb5aa98f735fe0a",
          "message": "GH-110: Add transparent request body decompression to OTLP HTTP routes and tests (#115)\n\n<!-- This is an auto-generated comment: release notes by coderabbit.ai\n-->\n\n## Summary by CodeRabbit\n\n* **New Features**\n* Added support for automatic decompression of gzip and zstd-compressed\nHTTP requests, improving compatibility with clients that use request\ncompression.\n\n<!-- end of auto-generated comment: release notes by coderabbit.ai -->",
          "timestamp": "2026-04-16T16:05:40+04:00",
          "tree_id": "5d4d85574bc00ccea59aae1ae06309311f0c8592",
          "url": "https://github.com/icegatetech/icegate/commit/1f0597f52b49b819a2be4dafafb5aa98f735fe0a"
        },
        "date": 1776344202074,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 1945609,
            "range": "± 63718",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 3293755,
            "range": "± 36291",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 3302218,
            "range": "± 36353",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 3235263,
            "range": "± 40640",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 3601858,
            "range": "± 39976",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 5429140,
            "range": "± 613459",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 6937571,
            "range": "± 61409",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 7201017,
            "range": "± 57301",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 7054280,
            "range": "± 6763482",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 23148171,
            "range": "± 227722",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 23287035,
            "range": "± 131786",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 5515208,
            "range": "± 751663",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 10518706,
            "range": "± 170614",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 12089445,
            "range": "± 267673",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 14268883,
            "range": "± 202230",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2225011516,
            "range": "± 17500900",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 511269651,
            "range": "± 3845571",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 2949209339,
            "range": "± 44510135",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 1053548,
            "range": "± 11159",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 3032238,
            "range": "± 39512",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 1060389,
            "range": "± 13856",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1691177665,
            "range": "± 526632505",
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
          "id": "f159c52d02866f43ceeefc4de9dad2dbfcf71d51",
          "message": "GH-113: Consolidate benchmarks and reduce setup overhead (#114)\n\nAll 22 benchmarks pass. ~8 minutes total, down from ~1 hour.\n- loki_queries.rs - shared single TestServer across 4 groups\n- queue_s3_bench.rs - reduced measurement_time, shared single MinIO\ncontainer\n\n\n<!-- This is an auto-generated comment: release notes by coderabbit.ai\n-->\n\n## Summary by CodeRabbit\n\n* **Tests**\n* Consolidated benchmark suite organization for query and queue\ncomponents to improve test infrastructure efficiency.\n\n* **Chores**\n* Refactored benchmark test configurations to use shared server and\nresource setup across multiple benchmark groups.\n\n<!-- end of auto-generated comment: release notes by coderabbit.ai -->",
          "timestamp": "2026-04-16T18:14:28+04:00",
          "tree_id": "51d6c8d84d310f3cf2ac3d978426bdf9be1775a7",
          "url": "https://github.com/icegatetech/icegate/commit/f159c52d02866f43ceeefc4de9dad2dbfcf71d51"
        },
        "date": 1776350717105,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 2502579,
            "range": "± 115418",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 2643542,
            "range": "± 121451",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 2559614,
            "range": "± 77978",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 2701156,
            "range": "± 57281",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 2907652,
            "range": "± 129604",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 6279171,
            "range": "± 149033",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 6593770,
            "range": "± 556685",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 7052283,
            "range": "± 243368",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 8373441,
            "range": "± 87591",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 8224499,
            "range": "± 158988",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 8286213,
            "range": "± 177357",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 6340936,
            "range": "± 181239",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 8808276,
            "range": "± 80084",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 8678607,
            "range": "± 148150",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 11652135,
            "range": "± 107431",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2292142345,
            "range": "± 48620981",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 501136442,
            "range": "± 174471",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 2880275320,
            "range": "± 40351434",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 1164743,
            "range": "± 22664",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 3313750,
            "range": "± 99395",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 1136566,
            "range": "± 25272",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1315404057,
            "range": "± 46740408",
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
          "id": "456a98a3e1c109e68df7ee73c82c7ebccdddf272",
          "message": "(style) Fix extraneous comma in error message format string in `icegate_storage`",
          "timestamp": "2026-04-16T23:18:29+02:00",
          "tree_id": "3744151c6aba109817b1095b94d110faf852e80d",
          "url": "https://github.com/icegatetech/icegate/commit/456a98a3e1c109e68df7ee73c82c7ebccdddf272"
        },
        "date": 1776376160410,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 1985141,
            "range": "± 10572",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 2062557,
            "range": "± 81952",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 2026669,
            "range": "± 29965",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 2107284,
            "range": "± 7676",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 2169438,
            "range": "± 4576",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 5201255,
            "range": "± 16840",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 5326640,
            "range": "± 5030",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 5591492,
            "range": "± 9669",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 6958786,
            "range": "± 7611",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 6951450,
            "range": "± 13111",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 6944456,
            "range": "± 8773",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 5261819,
            "range": "± 8716",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 7524607,
            "range": "± 27588",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 7544186,
            "range": "± 12236",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 10226538,
            "range": "± 21914",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2254129398,
            "range": "± 25727839",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 501316691,
            "range": "± 113022",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 2828426999,
            "range": "± 32092175",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 986540,
            "range": "± 5934",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 2769914,
            "range": "± 35592",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 982006,
            "range": "± 7520",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1268731670,
            "range": "± 48045948",
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
          "id": "1d422093e71c76aa84ccd453bda159385eeea7c3",
          "message": "(style) Refactor `parse_time` to simplify error handling logic with RFC3339 parsing",
          "timestamp": "2026-04-16T23:53:59+02:00",
          "tree_id": "369c7c8e14bba9217524dee696cd9418e1666fa2",
          "url": "https://github.com/icegatetech/icegate/commit/1d422093e71c76aa84ccd453bda159385eeea7c3"
        },
        "date": 1776378326781,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 2144748,
            "range": "± 52197",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 2077785,
            "range": "± 24206",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 2057017,
            "range": "± 24501",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 2169059,
            "range": "± 17119",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 2189251,
            "range": "± 10193",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 5246548,
            "range": "± 22377",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 5386377,
            "range": "± 15689",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 5669276,
            "range": "± 35140",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 7058124,
            "range": "± 50597",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 7074262,
            "range": "± 62727",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 7190295,
            "range": "± 98011",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 5509047,
            "range": "± 81219",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 7983725,
            "range": "± 42172",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 7913337,
            "range": "± 73220",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 10756133,
            "range": "± 49926",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2279137249,
            "range": "± 102821237",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 501559080,
            "range": "± 241216",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 2879589725,
            "range": "± 38780215",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 1039761,
            "range": "± 10938",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 3048865,
            "range": "± 67536",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 1042850,
            "range": "± 18508",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1312082123,
            "range": "± 37915795",
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
          "id": "39af7b4cfc2fddcde9dc780480114b85b11864fb",
          "message": "Add metrics for shift row groups merger (#117)\n\n<!-- This is an auto-generated comment: release notes by coderabbit.ai\n-->\n## Summary by CodeRabbit\n\n* **New Features**\n* Added multiple Grafana panels for OTLP transform/decode latency, WAL\nrecords/segments, WAL flush counts, queue reader/writer request metrics,\nand task/shift success/error rates.\n* Added observability for row-groups merger (open counts, open bytes,\nlifetime quantiles) and wired observer metrics into shift processing.\n\n* **Chores**\n* Refreshed dashboard queries, panel layouts, units, and tooltip/sort\nsettings; updated Jobmanager S3 error-rate calculation.\n<!-- end of auto-generated comment: release notes by coderabbit.ai -->",
          "timestamp": "2026-04-18T15:17:32+04:00",
          "tree_id": "09806b183c9e9f04e49c4ab807064b89a016662d",
          "url": "https://github.com/icegatetech/icegate/commit/39af7b4cfc2fddcde9dc780480114b85b11864fb"
        },
        "date": 1776512901397,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 2058675,
            "range": "± 63421",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 2031456,
            "range": "± 6205",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 2007244,
            "range": "± 21409",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 2108003,
            "range": "± 8138",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 2157841,
            "range": "± 11404",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 5168078,
            "range": "± 12384",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 5310815,
            "range": "± 10724",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 5565347,
            "range": "± 8443",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 6935701,
            "range": "± 18178",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 6926589,
            "range": "± 10592",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 6937052,
            "range": "± 15289",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 5262403,
            "range": "± 5723",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 7575877,
            "range": "± 49157",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 7556807,
            "range": "± 15530",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 10236213,
            "range": "± 30567",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2341927659,
            "range": "± 37412501",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 501344119,
            "range": "± 199888",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 2866311834,
            "range": "± 46107374",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 989821,
            "range": "± 6499",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 2780526,
            "range": "± 15729",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 985727,
            "range": "± 4900",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1319255157,
            "range": "± 33110249",
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
          "id": "b63b81864adf333b9bc8c598597f4cb862bded33",
          "message": "GH-116: Add tracing support to ingest (#118)\n\n<!-- This is an auto-generated comment: release notes by coderabbit.ai\n-->\n## Summary by CodeRabbit\n\n* **New Features**\n* OTLP traces ingestion enabled over gRPC and HTTP with partial-success\nreporting for rejected spans; traces and logs now use a unified\nrow-based submission path.\n* Trino coordinator added to the development overlay with Iceberg\ncatalog and in-cluster S3 access.\n\n* **Infrastructure Updates**\n* otel-collector service and ports added; overlays and component\nendpoints updated to target the new collector.\n* Sorting, WAL, and schema support extended to handle spans alongside\nlogs.\n<!-- end of auto-generated comment: release notes by coderabbit.ai -->",
          "timestamp": "2026-04-20T00:25:24+04:00",
          "tree_id": "6043836d71c5ad8fd545631ec4c7fa45234f0d48",
          "url": "https://github.com/icegatetech/icegate/commit/b63b81864adf333b9bc8c598597f4cb862bded33"
        },
        "date": 1776632142074,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 1856980,
            "range": "± 21888",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 1944810,
            "range": "± 5333",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 1914936,
            "range": "± 17304",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 2010236,
            "range": "± 11422",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 2053240,
            "range": "± 7697",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 5053001,
            "range": "± 8477",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 5168892,
            "range": "± 4723",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 5444529,
            "range": "± 4462",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 6752697,
            "range": "± 13685",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 6746085,
            "range": "± 8617",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 6752451,
            "range": "± 8661",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 5159398,
            "range": "± 16377",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 7460314,
            "range": "± 11612",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 7438406,
            "range": "± 7413",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 10062490,
            "range": "± 20455",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2354191000,
            "range": "± 39438786",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 501451359,
            "range": "± 215563",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 2854137528,
            "range": "± 43266527",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 833747,
            "range": "± 4236",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 2518955,
            "range": "± 15776",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 835131,
            "range": "± 7667",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1301559425,
            "range": "± 40503673",
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
          "id": "42ddca9c042d1425a0876318310fce1b9032311f",
          "message": "GH-111: Add S3 Iceberg Catalog base implementation (#122)\n\n<!-- This is an auto-generated comment: release notes by coderabbit.ai\n-->\n## Summary by CodeRabbit\n\n* **New Features**\n* Added S3-backed Iceberg catalog support with atomic commits via\nobject-store versioning; configurable bucket/region/endpoint/credentials\nand codec option.\n\n* **Documentation**\n* Added component docs detailing S3 catalog architecture, storage\nlayout, usage notes, and development status.\n\n* **Tests**\n* Large integration and unit test suites added to validate transactions,\nconcurrency, storage semantics, and config validation.\n\n* **Chores**\n* Added new workspace crate for the S3 catalog and updated security\naudit and testing guidelines.\n<!-- end of auto-generated comment: release notes by coderabbit.ai -->",
          "timestamp": "2026-05-02T15:26:34+04:00",
          "tree_id": "1234f8ab98a29a1b304a97bc573261d077c626e9",
          "url": "https://github.com/icegatetech/icegate/commit/42ddca9c042d1425a0876318310fce1b9032311f"
        },
        "date": 1777722996819,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 2079131,
            "range": "± 51988",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 2027816,
            "range": "± 5410",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 2006211,
            "range": "± 10063",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 2100061,
            "range": "± 7474",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 2154213,
            "range": "± 7050",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 5223234,
            "range": "± 6721",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 5357200,
            "range": "± 8347",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 5616729,
            "range": "± 6110",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 7000813,
            "range": "± 13834",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 7001724,
            "range": "± 7513",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 6999286,
            "range": "± 8647",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 5307834,
            "range": "± 5640",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 7672851,
            "range": "± 5112",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 7676180,
            "range": "± 5152",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 10383772,
            "range": "± 9437",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2253768272,
            "range": "± 36904338",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 501233386,
            "range": "± 208063",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 2828630415,
            "range": "± 45757681",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 980821,
            "range": "± 7467",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 2788260,
            "range": "± 11912",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 983246,
            "range": "± 4921",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1277021155,
            "range": "± 41081972",
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
          "id": "b671fdd08e5bab03711b9f96f4ada597d5e40422",
          "message": "GH-119: Tempo endpoint with TraceQL query (#123)\n\n<!-- This is an auto-generated comment: release notes by coderabbit.ai\n-->\n## Summary by CodeRabbit\n\n* **New Features**\n* Full Tempo API: trace lookup, search, tag discovery/tag-values (v1 &\nv2) with JSON/proto responses and validation.\n* TraceQL: new query language for trace search and metrics (parser,\nplanner, execution).\n* Grafana: demo Loki/Tempo datasources with trace↔log cross-links and\n“View trace” links.\n\n* **Storage & Query Improvements**\n* Split span attributes into resource vs span maps; improved tag\ndiscovery via Parquet metadata.\n  * Parquet bloom-filter support for faster lookups.\n\n* **Chores**\n* OTLP HTTP: configurable max body size enforced (over-limit requests\nreturn 413).\n<!-- end of auto-generated comment: release notes by coderabbit.ai -->",
          "timestamp": "2026-05-02T17:27:17+04:00",
          "tree_id": "75af27cdb518478d6c6a585508277fa94ebbc9e2",
          "url": "https://github.com/icegatetech/icegate/commit/b671fdd08e5bab03711b9f96f4ada597d5e40422"
        },
        "date": 1777729951347,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 2045286,
            "range": "± 29635",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 2127730,
            "range": "± 10628",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 2102010,
            "range": "± 32116",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 2184702,
            "range": "± 24712",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 2271247,
            "range": "± 15510",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 5488989,
            "range": "± 91705",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 5610549,
            "range": "± 103991",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 5907065,
            "range": "± 134124",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 7347443,
            "range": "± 126620",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 7551268,
            "range": "± 92143",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 7528237,
            "range": "± 87212",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 5868172,
            "range": "± 76918",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 8716997,
            "range": "± 62696",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 8485599,
            "range": "± 105691",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 10980585,
            "range": "± 193782",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2229611355,
            "range": "± 36168023",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 501501456,
            "range": "± 180039",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 2854435312,
            "range": "± 45522652",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 1045353,
            "range": "± 8210",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 2997594,
            "range": "± 28160",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 1037956,
            "range": "± 6369",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1262411456,
            "range": "± 50976777",
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
          "id": "19724216d4f2697569e10cbddf7bcf0a01c5ebb6",
          "message": "GH-120: optimise created parquet files (#138)\n\n<!-- This is an auto-generated comment: release notes by coderabbit.ai\n-->\n## Summary by CodeRabbit\n\n* **New Features**\n* New sort-aware shift planner with clustering, bin-packing and\npartition-aware task scheduling.\n* Field-extraction API and a WAL row-group metadata key for flexible\nper-row-group metadata.\n  * Planner partition specs enabling per-job partitioning control.\n\n* **Improvements**\n* Grafana dashboard upgraded to v17 with refined ingest and WAL panels.\n  * New metric for oversized planner clusters.\n\n* **Configuration Changes**\n* Read config: replaced single max-input-bytes with lower/upper bounds;\nremoved max file size.\n\n* **Documentation**\n  * Agent guidance updated with two important instructions.\n<!-- end of auto-generated comment: release notes by coderabbit.ai -->",
          "timestamp": "2026-05-06T17:04:16+04:00",
          "tree_id": "90f623c5875846515f86f25d6e9d22d5880c8ada",
          "url": "https://github.com/icegatetech/icegate/commit/19724216d4f2697569e10cbddf7bcf0a01c5ebb6"
        },
        "date": 1778074524704,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 2018840,
            "range": "± 18268",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 2098555,
            "range": "± 59654",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 2084218,
            "range": "± 25138",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 2163664,
            "range": "± 22835",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 2205116,
            "range": "± 4663",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 5312101,
            "range": "± 24513",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 5451399,
            "range": "± 22199",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 5729425,
            "range": "± 47770",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 7161206,
            "range": "± 46295",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 7245713,
            "range": "± 44149",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 7190083,
            "range": "± 36594",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 5453245,
            "range": "± 40894",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 7947567,
            "range": "± 76729",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 7998576,
            "range": "± 44558",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 10784274,
            "range": "± 54073",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2292096618,
            "range": "± 41041870",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 501499979,
            "range": "± 211080",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 2854630655,
            "range": "± 36786748",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 1046133,
            "range": "± 14620",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 3002377,
            "range": "± 74133",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 1047933,
            "range": "± 9533",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1254332380,
            "range": "± 41888662",
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
          "id": "98e67a3affad8408ff646c5ec726c31bcd3bc3a4",
          "message": "GH-135: Store `trace_id`, `span_id`, and `parent_span_id` as `FixedSizeBinary` (#136)\n\n<!-- This is an auto-generated comment: release notes by coderabbit.ai\n-->\n## Summary by CodeRabbit\n\n* **New Features**\n  * Added cAdvisor DaemonSet for container metrics collection\n\n* **Configuration**\n  * Increased default row-group size to 20,000\n  * Added configurable Parquet data page size limit for writes\n  * Per-column Parquet encoding overrides and writer tuning enabled\n\n* **Schema Changes**\n* Trace/span IDs switched to fixed-length binary storage (fixed-size\nbytes)\n* Query/formatters/export paths updated to handle and hex-encode\nfixed-size IDs where needed\n<!-- end of auto-generated comment: release notes by coderabbit.ai -->",
          "timestamp": "2026-05-07T05:45:02+04:00",
          "tree_id": "5340422ef4ce244982fa097dcb6d488410d0e0eb",
          "url": "https://github.com/icegatetech/icegate/commit/98e67a3affad8408ff646c5ec726c31bcd3bc3a4"
        },
        "date": 1778119091324,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 2007619,
            "range": "± 20311",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 2092987,
            "range": "± 14543",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 2059111,
            "range": "± 21377",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 2143301,
            "range": "± 8516",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 2201528,
            "range": "± 4828",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 5509781,
            "range": "± 98813",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 5557645,
            "range": "± 55255",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 5908800,
            "range": "± 50193",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 7566746,
            "range": "± 137187",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 7446812,
            "range": "± 87505",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 7140572,
            "range": "± 140948",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 5445122,
            "range": "± 39270",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 7746861,
            "range": "± 44902",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 7788522,
            "range": "± 52687",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 10614600,
            "range": "± 47494",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2204932745,
            "range": "± 84974441",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 501368938,
            "range": "± 276237",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 2879207831,
            "range": "± 31456491",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 1038501,
            "range": "± 5883",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 2940894,
            "range": "± 14464",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 1034530,
            "range": "± 15392",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1278839040,
            "range": "± 68501772",
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
          "id": "474ca52a7c09ef3a9950a9b2fd8809e099afdc43",
          "message": "GH-140: Remove cloud account id (#141)\n\n<!-- This is an auto-generated comment: release notes by coderabbit.ai\n-->\n## Summary by CodeRabbit\n\n* **New Features**\n  * Added a Tempo datasource to Grafana for tracing queries.\n\n* **Refactor**\n* Simplified multi-tenancy to use tenant_id only; removed\ncloud_account_id as a dedicated top-level column across tables.\n* Updated sorting/partitioning and query label handling to match the new\nschema.\n\n* **Documentation**\n* Revised schema docs and guidance to reflect v1.3 changes and new\nsort/key recommendations.\n\n<!-- review_stack_entry_start -->\n\n[![Review Change\nStack](https://storage.googleapis.com/coderabbit_public_assets/review-stack-in-coderabbit-ui.svg)](https://app.coderabbit.ai/change-stack/icegatetech/icegate/pull/141?utm_source=github_walkthrough&utm_medium=github&utm_campaign=change_stack)\n\n<!-- review_stack_entry_end -->\n<!-- end of auto-generated comment: release notes by coderabbit.ai -->",
          "timestamp": "2026-05-18T03:09:34+04:00",
          "tree_id": "0ce79d20865d1e463946e98de085f05f9ef62644",
          "url": "https://github.com/icegatetech/icegate/commit/474ca52a7c09ef3a9950a9b2fd8809e099afdc43"
        },
        "date": 1779061220007,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 1999939,
            "range": "± 5932",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 2129257,
            "range": "± 81015",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 2043810,
            "range": "± 6075",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 2133805,
            "range": "± 63890",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 2189782,
            "range": "± 19105",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 5143017,
            "range": "± 25460",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 5285623,
            "range": "± 7793",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 5520968,
            "range": "± 8986",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 6859439,
            "range": "± 37296",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 6850949,
            "range": "± 16905",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 6851477,
            "range": "± 11516",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 5327277,
            "range": "± 21096",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 7834263,
            "range": "± 16073",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 7802175,
            "range": "± 15903",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 10173029,
            "range": "± 63766",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2316867693,
            "range": "± 55236271",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 501353232,
            "range": "± 252716",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 2879385357,
            "range": "± 28531249",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 1035733,
            "range": "± 7697",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 2925487,
            "range": "± 23268",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 1031355,
            "range": "± 10995",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1353474349,
            "range": "± 45873549",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mineev@triplecloud.team",
            "name": "Evgeniy Mineev",
            "username": "frisbeeman"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d332345ce99f25a1509aec99d380652006ea10bd",
          "message": "feat: Add Flight SQL integration with read-only server (#143)\n\n<!-- This is an auto-generated comment: release notes by coderabbit.ai\n-->\n## Summary by CodeRabbit\n\n* **New Features**\n* Added Apache Arrow Flight SQL gRPC query endpoint (configurable,\ndefault port 8815; disabled by default). Read-only queries with\nper-request tenant isolation via the x-scope-orgid header.\n\n* **Documentation**\n* Added user-facing Flight SQL docs, examples, client guidance, and\ncaveats in README and crate docs.\n\n* **Tests**\n* Added integration, smoke, metadata, read-only, and tenant-isolation\ntests and a Flight SQL test harness.\n\n* **Chores**\n* Installed Protobuf tooling in CI and Docker; added\nchart/values/templates, configs, and manifest/dependency updates to\nenable Flight SQL.\n<!-- end of auto-generated comment: release notes by coderabbit.ai -->",
          "timestamp": "2026-06-04T03:28:36+04:00",
          "tree_id": "2b1635a5363d8520e0727361c51434483064a4cc",
          "url": "https://github.com/icegatetech/icegate/commit/d332345ce99f25a1509aec99d380652006ea10bd"
        },
        "date": 1780531226980,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 1979388,
            "range": "± 34905",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 2067601,
            "range": "± 3260",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 2036919,
            "range": "± 22832",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 2122316,
            "range": "± 4264",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 2171697,
            "range": "± 3192",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 4965537,
            "range": "± 22360",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 5074971,
            "range": "± 5008",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 5343104,
            "range": "± 16227",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 6613636,
            "range": "± 10545",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 6620286,
            "range": "± 41535",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 6617577,
            "range": "± 59813",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 5113497,
            "range": "± 15404",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 7387527,
            "range": "± 39424",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 7398480,
            "range": "± 9019",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 9758579,
            "range": "± 48762",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2454401957,
            "range": "± 18298481",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 501512261,
            "range": "± 221331",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 2804146825,
            "range": "± 45165575",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 1007557,
            "range": "± 6459",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 2800739,
            "range": "± 16591",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 1004362,
            "range": "± 4962",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1369844578,
            "range": "± 38857110",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mineev@triplecloud.team",
            "name": "Evgeniy Mineev",
            "username": "frisbeeman"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a8933dd7692a4593267f4956b998dc63dda526f8",
          "message": "(feat) Add metrics ingest and shift (#144)\n\n<!-- This is an auto-generated comment: release notes by coderabbit.ai\n-->\n## Summary by CodeRabbit\n\n* **New Features**\n* Full metrics ingestion support via HTTP and gRPC; metrics now flow\nthrough the ingest pipeline.\n* Metrics table gains a metadata MAP column to store extra metric\nmetadata.\n\n* **Bug Fixes**\n* service_name is now nullable in the metrics schema for more flexible\ningests.\n* Metrics ingestion returns detailed partial-success info when some data\npoints are dropped.\n\n* **Documentation**\n* Updated metrics table docs to describe OTLP handling and\npartial-success behavior.\n<!-- end of auto-generated comment: release notes by coderabbit.ai -->",
          "timestamp": "2026-06-07T01:34:23+04:00",
          "tree_id": "0a6eba72550bf98ac3f1d395330a3eed272c01ef",
          "url": "https://github.com/icegatetech/icegate/commit/a8933dd7692a4593267f4956b998dc63dda526f8"
        },
        "date": 1780782479339,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 2116352,
            "range": "± 37181",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 2076473,
            "range": "± 2069",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 2059548,
            "range": "± 11694",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 2145137,
            "range": "± 15830",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 2222387,
            "range": "± 16436",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 5219025,
            "range": "± 71750",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 5354394,
            "range": "± 69798",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 5618073,
            "range": "± 56262",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 6850046,
            "range": "± 49588",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 6736922,
            "range": "± 101033",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 6704583,
            "range": "± 54267",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 5220163,
            "range": "± 52582",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 7476252,
            "range": "± 39176",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 7503988,
            "range": "± 48614",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 9925281,
            "range": "± 121862",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2441663901,
            "range": "± 31459670",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 501359342,
            "range": "± 115760",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 2866831559,
            "range": "± 35754088",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 1022429,
            "range": "± 6487",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 2827221,
            "range": "± 15382",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 1016194,
            "range": "± 9217",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1361715808,
            "range": "± 47765374",
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
          "id": "dabaed836d0f1f0286232ece487b2de3119e6813",
          "message": "(release) Bump project version to 0.2.0 in Cargo.toml, Helm chart, and related dependencies",
          "timestamp": "2026-06-22T12:50:08+02:00",
          "tree_id": "b0eb1a4580ee516e12c2cd154d760e32536501a7",
          "url": "https://github.com/icegatetech/icegate/commit/dabaed836d0f1f0286232ece487b2de3119e6813"
        },
        "date": 1782127348134,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 1978439,
            "range": "± 60721",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 2064529,
            "range": "± 5072",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 2034239,
            "range": "± 20344",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 2117885,
            "range": "± 20464",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 2174990,
            "range": "± 2353",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 4979857,
            "range": "± 9285",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 5090631,
            "range": "± 10163",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 5367038,
            "range": "± 19647",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 6646265,
            "range": "± 27720",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 6644424,
            "range": "± 15089",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 6647395,
            "range": "± 81656",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 5139863,
            "range": "± 68644",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 7451787,
            "range": "± 143051",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 7477273,
            "range": "± 94000",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 9900633,
            "range": "± 529235",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2429178298,
            "range": "± 21757025",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 501318083,
            "range": "± 106875",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 2879246653,
            "range": "± 43375437",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 1278374,
            "range": "± 96621",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 3358527,
            "range": "± 96810",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 1058552,
            "range": "± 34305",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1361991096,
            "range": "± 40342090",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mineev@triplecloud.team",
            "name": "Evgeniy Mineev",
            "username": "frisbeeman"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "284b561d199c4ace047df5625950848a9745d678",
          "message": "(fix) Preserve caller-provided field IDs in S3 catalog and add validation test (#146)\n\n<!-- This is an auto-generated comment: release notes by coderabbit.ai\n-->\n\n## Summary by CodeRabbit\n\n* **Bug Fixes**\n* Fixed schema field identifier preservation in table metadata creation\nto maintain schema structure integrity.\n\n* **Chores**\n  * Updated security advisory configuration.\n\n<!-- end of auto-generated comment: release notes by coderabbit.ai -->",
          "timestamp": "2026-06-24T19:14:02+04:00",
          "tree_id": "099b4300ea80a3ccc5399e417b73b33c45dbffb7",
          "url": "https://github.com/icegatetech/icegate/commit/284b561d199c4ace047df5625950848a9745d678"
        },
        "date": 1782314883190,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 2134850,
            "range": "± 69625",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 2109536,
            "range": "± 14020",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 2105082,
            "range": "± 28888",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 2208005,
            "range": "± 39991",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 2253066,
            "range": "± 15147",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 5291348,
            "range": "± 110251",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 5412971,
            "range": "± 120731",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 5628260,
            "range": "± 125020",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 7442193,
            "range": "± 141462",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 7014969,
            "range": "± 176059",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 6905981,
            "range": "± 105194",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 5304899,
            "range": "± 73096",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 7802359,
            "range": "± 230786",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 7672225,
            "range": "± 130503",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 10196809,
            "range": "± 170237",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2229736097,
            "range": "± 54591526",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 501376820,
            "range": "± 239274",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 2867645969,
            "range": "± 46356828",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 1028528,
            "range": "± 5132",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 2854349,
            "range": "± 17547",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 1020777,
            "range": "± 10182",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1319895061,
            "range": "± 34287073",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mineev@triplecloud.team",
            "name": "Evgeniy Mineev",
            "username": "frisbeeman"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "57b9bb9b5125e3d22c28fc846d5c7ab13ccba841",
          "message": "(feat) Add compaction support (#145)\n\nFix #97 \n\n<!-- This is an auto-generated comment: release notes by coderabbit.ai\n-->\n## Summary by CodeRabbit\n\n* **New Features**\n* Added a long-running Parquet compaction service deployable via\nHelm/Kubernetes and Docker Compose, powered by a new `maintain run`\ncommand.\n* Added an “Icegate-Compaction” Grafana dashboard with Prometheus\nscraping for compaction telemetry.\n* **Enhancements**\n* Extended Helm chart values/templates to configure compaction\nscheduling, metrics, tracing, and MinIO/S3-backed job-state storage.\n* Updated Iceberg `spans` sorting to use `trace_id` then `timestamp\nDESC`.\n* **Bug Fixes**\n* Improved WAL offset resolution to recover the last committed offset\nfrom snapshot history more reliably.\n* **Documentation**\n* Added comprehensive documentation for the compaction subsystem and\ntuning/operational behavior.\n<!-- end of auto-generated comment: release notes by coderabbit.ai -->",
          "timestamp": "2026-06-27T03:39:38+04:00",
          "tree_id": "08461ab4409e3271a4d1fc9e898982f166e1bf5b",
          "url": "https://github.com/icegatetech/icegate/commit/57b9bb9b5125e3d22c28fc846d5c7ab13ccba841"
        },
        "date": 1782519128417,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 1983697,
            "range": "± 38143",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 2038311,
            "range": "± 10170",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 2009583,
            "range": "± 12382",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 2105504,
            "range": "± 6863",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 2156086,
            "range": "± 6442",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 5028603,
            "range": "± 7852",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 5180781,
            "range": "± 13142",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 5438756,
            "range": "± 19030",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 6726218,
            "range": "± 11078",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 6729816,
            "range": "± 11044",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 6736151,
            "range": "± 20672",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 5215726,
            "range": "± 9164",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 7598180,
            "range": "± 35413",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 7608729,
            "range": "± 26002",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 10036819,
            "range": "± 24861",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2404294604,
            "range": "± 57671912",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 501350454,
            "range": "± 133183",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 2879326539,
            "range": "± 41375796",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 1027926,
            "range": "± 6601",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 2912821,
            "range": "± 10994",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 1024530,
            "range": "± 6269",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1336809035,
            "range": "± 45043029",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mineev@triplecloud.team",
            "name": "Evgeniy Mineev",
            "username": "frisbeeman"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4f69aec5664c37e1c2f0ba271e2185ce26d2fc2a",
          "message": "feat: Add operations table (#148)\n\n<!-- This is an auto-generated comment: release notes by coderabbit.ai\n-->\n## Summary by CodeRabbit\n\n* **New Features**\n* Added a new `operations` Iceberg table for GenAI/LLM-derived\nprojections from trace data, including dedicated partitioning/sorting\nand Parquet optimizations (bloom filtering and pinned column encodings).\n* Extended ingestion, migrations, compaction, and query routing to\nsupport writing and compacting `operations` alongside existing trace\ndata.\n* Added an `operations` enablement flag to control whether derived\n`operations` are ingested (OTLP HTTP/gRPC).\n\n* **Bug Fixes**\n* Tightened typed attribute validation and ensured `operations` failures\nare best-effort and don’t impact successful trace export.\n\n* **Documentation**\n* Published updated schema documentation (including the new `operations`\ntable) and performance guidance.\n<!-- end of auto-generated comment: release notes by coderabbit.ai -->",
          "timestamp": "2026-06-28T21:10:14+04:00",
          "tree_id": "7186b1075932c9671726254fcaea66ed73bb55d7",
          "url": "https://github.com/icegatetech/icegate/commit/4f69aec5664c37e1c2f0ba271e2185ce26d2fc2a"
        },
        "date": 1782668566884,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 1987635,
            "range": "± 48631",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 2086391,
            "range": "± 7537",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 2069958,
            "range": "± 21191",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 2121384,
            "range": "± 4101",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 2177112,
            "range": "± 7070",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 4978086,
            "range": "± 26951",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 5097128,
            "range": "± 25954",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 5387076,
            "range": "± 46055",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 6676545,
            "range": "± 22158",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 6667799,
            "range": "± 28826",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 6640143,
            "range": "± 25130",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 5144242,
            "range": "± 14100",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 7439891,
            "range": "± 32571",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 7474647,
            "range": "± 27327",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 9959640,
            "range": "± 46163",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2403966156,
            "range": "± 49812830",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 501282379,
            "range": "± 129121",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 2878942379,
            "range": "± 38871588",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 1008281,
            "range": "± 5944",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 2823001,
            "range": "± 11561",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 1006958,
            "range": "± 4732",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1353076620,
            "range": "± 54911943",
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
          "id": "a384fae2b273afe9e27fde6701305b32db1d45be",
          "message": "GH-142: add cache and retries to Catalog (#149)\n\n* **New Features**\n* Added cooperative cancellation for catalog construction and catalog\noperations to abort retry/CAS work during shutdown.\n* Enhanced S3-backed catalog commits with CAS-based multi-table\norchestration and improved root/metadata caching.\n* **Bug Fixes**\n* Improved conflict/transient classification with clearer retry\nexhaustion and cancellation error reporting.\n* Replaced an internal “unreachable” path with a proper error when a\ncommit response is missing.\n* **Documentation**\n* Updated documentation guidance (non-duplication rules, Rust\nnaming/commenting conventions) and expanded S3 catalog architecture\nnotes.\n* **Chores**\n* Updated catalog/CLI/tests/bench/examples to pass the\nshutdown/cancellation token; added retry/caching support dependencies.",
          "timestamp": "2026-06-28T21:24:16+04:00",
          "tree_id": "0ba334485c47717d60924cea781350e7366595b1",
          "url": "https://github.com/icegatetech/icegate/commit/a384fae2b273afe9e27fde6701305b32db1d45be"
        },
        "date": 1782669462560,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 2043113,
            "range": "± 26483",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 2292920,
            "range": "± 90818",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 2118593,
            "range": "± 25396",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 2225980,
            "range": "± 24333",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 2247462,
            "range": "± 38428",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 5503904,
            "range": "± 117801",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 5476823,
            "range": "± 156356",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 5887635,
            "range": "± 147160",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 7027096,
            "range": "± 132329",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 7125450,
            "range": "± 126203",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 7172888,
            "range": "± 172824",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 5669778,
            "range": "± 92583",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 8153704,
            "range": "± 142702",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 8064898,
            "range": "± 145857",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 10487116,
            "range": "± 172275",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2242181043,
            "range": "± 40498714",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 501432003,
            "range": "± 239801",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 2867287469,
            "range": "± 54991322",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 1078398,
            "range": "± 9736",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 3034334,
            "range": "± 22476",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 1074792,
            "range": "± 7747",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1281290412,
            "range": "± 71469366",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mineev@triplecloud.team",
            "name": "Evgeniy Mineev",
            "username": "frisbeeman"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cb65b375051e317dab6c5d0e2cf8f08632bf9f2d",
          "message": "(fix) Improve `trace_id` validation and decoding (#152)",
          "timestamp": "2026-06-29T19:18:24+02:00",
          "tree_id": "4489e9cc92c3aebae741ebe935531d1fcacffaca",
          "url": "https://github.com/icegatetech/icegate/commit/cb65b375051e317dab6c5d0e2cf8f08632bf9f2d"
        },
        "date": 1782755488459,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 2011426,
            "range": "± 9460",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 2128007,
            "range": "± 83882",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 2073180,
            "range": "± 36536",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 2152754,
            "range": "± 20055",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 2200334,
            "range": "± 4658",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 5140338,
            "range": "± 13618",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 5279429,
            "range": "± 20447",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 5544857,
            "range": "± 18052",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 6922366,
            "range": "± 25413",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 6889181,
            "range": "± 19834",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 6894592,
            "range": "± 25139",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 5327714,
            "range": "± 11406",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 7846777,
            "range": "± 44010",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 7895563,
            "range": "± 61248",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 10320981,
            "range": "± 82459",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2416816419,
            "range": "± 41429364",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 501410027,
            "range": "± 287592",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 2878952971,
            "range": "± 31257151",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 1047943,
            "range": "± 8370",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 2960116,
            "range": "± 13575",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 1033769,
            "range": "± 7072",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1353283016,
            "range": "± 47167278",
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
          "id": "18a8b0dc287cf755fb95c1c241ca49b571010ebf",
          "message": "add ready_to_next_iteration tests to job manager (#153)\n\n<!-- This is an auto-generated comment: release notes by coderabbit.ai\n-->\n\n## Summary by CodeRabbit\n\n* **Minor**\n* Improved job scheduling after restore so jobs now respect their saved\nstart time and iteration interval more consistently.\n* Fixed cases where a job could be treated as finished too early or\ndelayed incorrectly after being loaded from storage.\n* Added clearer internal logging around when a job is ready to run or\nmust wait for the next iteration.\n\n<!-- end of auto-generated comment: release notes by coderabbit.ai -->",
          "timestamp": "2026-06-29T22:10:28+04:00",
          "tree_id": "f1a547eb157a07a0c1f47ec78e12f3cd3dcc349c",
          "url": "https://github.com/icegatetech/icegate/commit/18a8b0dc287cf755fb95c1c241ca49b571010ebf"
        },
        "date": 1782757434426,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 2106107,
            "range": "± 92479",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 2135690,
            "range": "± 9392",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 2112447,
            "range": "± 30006",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 2269637,
            "range": "± 47912",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 2286619,
            "range": "± 18558",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 5405593,
            "range": "± 105458",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 5662515,
            "range": "± 77653",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 5906480,
            "range": "± 72606",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 7403629,
            "range": "± 146995",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 7448203,
            "range": "± 138926",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 7591655,
            "range": "± 111138",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 5755125,
            "range": "± 106072",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 7846071,
            "range": "± 110635",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 7789197,
            "range": "± 51324",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 10352220,
            "range": "± 95357",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2229808452,
            "range": "± 63463440",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 501407041,
            "range": "± 227876",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 2917059098,
            "range": "± 35687866",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 1049645,
            "range": "± 4874",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 2972330,
            "range": "± 24333",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 1042491,
            "range": "± 6355",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1262549405,
            "range": "± 46517135",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mineev@triplecloud.team",
            "name": "Evgeniy Mineev",
            "username": "frisbeeman"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4826f5141a4eb8fe63db4083b91ebef76fcef489",
          "message": "(feat) GC of data and its metadata (#151)\n\n<!-- This is an auto-generated comment: release notes by coderabbit.ai\n-->\n## Summary by CodeRabbit\n\n* **New Features**\n* Renamed the long-running maintenance component to **Maintain**,\ncovering Parquet compaction plus optional orphan-file cleanup.\n* Added configurable orphan-file garbage collection (enable toggle,\ndry-run, grace/min-age, concurrency/timeouts, optional metadata\ndeletion) with dedicated sweep metrics and OpenTelemetry\ninstrumentation.\n* Updated Helm/Docker/Prometheus wiring to expose the new **Maintain**\nservice and its metrics.\n\n* **Bug Fixes**\n* Fixed Helm rendering, config selection, and log/monitoring\ninstructions to consistently reference **Maintain** (replacing the\nprevious compaction/compact naming).\n<!-- end of auto-generated comment: release notes by coderabbit.ai -->",
          "timestamp": "2026-06-30T03:01:47+04:00",
          "tree_id": "9d1cbb97d75df3a525a7dfc19567636681895ade",
          "url": "https://github.com/icegatetech/icegate/commit/4826f5141a4eb8fe63db4083b91ebef76fcef489"
        },
        "date": 1782775779699,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 1562902,
            "range": "± 40646",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 1635292,
            "range": "± 28404",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 1638284,
            "range": "± 37217",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 1718347,
            "range": "± 14588",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 1799120,
            "range": "± 23542",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 4386513,
            "range": "± 171444",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 4111161,
            "range": "± 84864",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 4305128,
            "range": "± 54891",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 5380600,
            "range": "± 164465",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 5670188,
            "range": "± 175776",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 5285096,
            "range": "± 45624",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 4171104,
            "range": "± 138149",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 5820001,
            "range": "± 46901",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 5857795,
            "range": "± 50473",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 7829870,
            "range": "± 116584",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2373651157,
            "range": "± 42341999",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 501187799,
            "range": "± 111802",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 2904182279,
            "range": "± 61393104",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 806525,
            "range": "± 6546",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 2236916,
            "range": "± 20749",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 792266,
            "range": "± 6541",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1286843765,
            "range": "± 48006309",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mineev@triplecloud.team",
            "name": "Evgeniy Mineev",
            "username": "frisbeeman"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ba3cb990be2323db6e2edb07c870dd3c7f829644",
          "message": "(feat) LLM pricing reference (#154)\n\n<!-- This is an auto-generated comment: release notes by coderabbit.ai\n-->\n## Summary by CodeRabbit\n\n* **New Features**\n* Added a shared, global reference dataset containing LLM pricing data\nto the query engine.\n  * Pricing is now queryable via `reference.llm.pricing`.\n* Enabled cross-catalog querying, including joining tenant-scoped data\nwith the shared pricing dataset.\n* **Tests**\n* Added Flight SQL integration tests to verify pricing table visibility\nand correct results.\n* Added coverage for join behavior between tenant-scoped tables and the\nglobal pricing dataset, including non-empty query plan output.\n<!-- end of auto-generated comment: release notes by coderabbit.ai -->",
          "timestamp": "2026-07-04T22:49:20+04:00",
          "tree_id": "a642d1ea1bde122ed5f4cdca5318e49a56471f2d",
          "url": "https://github.com/icegatetech/icegate/commit/ba3cb990be2323db6e2edb07c870dd3c7f829644"
        },
        "date": 1783192925896,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 2146697,
            "range": "± 75596",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 2114465,
            "range": "± 5991",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 2077081,
            "range": "± 7924",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 2161050,
            "range": "± 19048",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 2227954,
            "range": "± 10708",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 5157533,
            "range": "± 18861",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 5294831,
            "range": "± 20230",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 5505595,
            "range": "± 14166",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 6836201,
            "range": "± 98610",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 6822807,
            "range": "± 12065",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 6833004,
            "range": "± 21806",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 5324017,
            "range": "± 14153",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 7737104,
            "range": "± 24250",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 7705771,
            "range": "± 37109",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 10047218,
            "range": "± 28900",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2354099913,
            "range": "± 56846938",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 501352779,
            "range": "± 158090",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 2866654107,
            "range": "± 21397683",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 1040683,
            "range": "± 6251",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 2954562,
            "range": "± 19477",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 1032710,
            "range": "± 11145",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1270128354,
            "range": "± 33448592",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mineev@triplecloud.team",
            "name": "Evgeniy Mineev",
            "username": "frisbeeman"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fc899111bab1d6d6692ae10c895e330b9cd36d43",
          "message": "(feat) Replace MinIO with RustFS as the default object store everywhere (#157)\n\n<!-- This is an auto-generated comment: release notes by coderabbit.ai\n-->\n## Summary by CodeRabbit\n\n* **New Features**\n* Added memory-pressure based request shedding for ingest and query\nservices, with health/readiness endpoints kept available.\n* Improved OTLP/HTTP handling for large requests (graceful 413 behavior,\ndecode offloading) plus clearer retry/load-shedding responses.\n* **Bug Fixes**\n* Standardized local/test S3-compatible object storage on RustFS and\nupdated connectivity, bucket bootstrapping, and credentials across\nexamples and configs.\n* **Documentation**\n* Updated infrastructure and development environment docs to replace\nMinIO details with RustFS, including updated endpoints and access\ncredentials.\n<!-- end of auto-generated comment: release notes by coderabbit.ai -->",
          "timestamp": "2026-07-09T20:38:21+04:00",
          "tree_id": "d83b1518a9f93c15ea0e31a24ea54529089edb58",
          "url": "https://github.com/icegatetech/icegate/commit/fc899111bab1d6d6692ae10c895e330b9cd36d43"
        },
        "date": 1783617096896,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 2048376,
            "range": "± 22451",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 2279698,
            "range": "± 87453",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 2130588,
            "range": "± 47860",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 2168762,
            "range": "± 20411",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 2250818,
            "range": "± 14829",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 5411089,
            "range": "± 115109",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 5333656,
            "range": "± 162670",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 5950779,
            "range": "± 45277",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 7532929,
            "range": "± 137775",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 7751525,
            "range": "± 75223",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 7737020,
            "range": "± 196372",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 5803554,
            "range": "± 164438",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 7829399,
            "range": "± 112346",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 7957194,
            "range": "± 386017",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 10419181,
            "range": "± 227652",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2403922722,
            "range": "± 91477788",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 551376661,
            "range": "± 355877",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 3029141405,
            "range": "± 82813561",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 3988873,
            "range": "± 72572",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 3147216,
            "range": "± 26208",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 4023939,
            "range": "± 53077",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1610315883,
            "range": "± 63965093",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mineev@triplecloud.team",
            "name": "Evgeniy Mineev",
            "username": "frisbeeman"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "643e6ce385f939cd5f7fc3ad58bafcc5e8effb13",
          "message": "(feat) Add claude_code operation convention (#162)\n\n<!-- This is an auto-generated comment: release notes by coderabbit.ai\n-->\n\n## Summary by CodeRabbit\n\n* **New Features**\n  * Added support for recognizing and projecting Claude Code operations.\n* Added JSON serialization for span attributes, tool data, and chat\nmessages.\n* Added support for content sourced from span events, including tool\nresults.\n* Added span-name-based operation recognition and improved field\nmapping.\n\n* **Bug Fixes**\n* Improved time-to-first-chunk conversion across seconds- and\nmilliseconds-based values.\n* Added validation to reject invalid negative or out-of-range\nmeasurements.\n\n<!-- end of auto-generated comment: release notes by coderabbit.ai -->",
          "timestamp": "2026-07-23T02:49:49+04:00",
          "tree_id": "49428fae9f79387f2b22f6b92823fb26c18eb371",
          "url": "https://github.com/icegatetech/icegate/commit/643e6ce385f939cd5f7fc3ad58bafcc5e8effb13"
        },
        "date": 1784762394226,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 1826544,
            "range": "± 44416",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 1882754,
            "range": "± 8257",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 1855096,
            "range": "± 5290",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 1934860,
            "range": "± 4059",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 1991821,
            "range": "± 32814",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 4504858,
            "range": "± 44348",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 4574325,
            "range": "± 27665",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 4790136,
            "range": "± 9592",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 5869008,
            "range": "± 20282",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 5886004,
            "range": "± 32595",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 5940088,
            "range": "± 25096",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 4640863,
            "range": "± 54865",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 6529806,
            "range": "± 34629",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 6566919,
            "range": "± 11224",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 8636748,
            "range": "± 18011",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2416493210,
            "range": "± 54044419",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 551380860,
            "range": "± 190169",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 3016029712,
            "range": "± 72640403",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 3630836,
            "range": "± 22395",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 2777673,
            "range": "± 41908",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 3672651,
            "range": "± 22481",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1570889204,
            "range": "± 34389455",
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
          "id": "6f43679c8b0e92c210c66534a93a46f5d9556a82",
          "message": "GH-159: manifest compaction (#164)\n\n<!-- This is an auto-generated comment: release notes by coderabbit.ai\n-->\n## Summary by CodeRabbit\n\n* **New Features**\n* Added manifest compaction to reduce snapshot manifest counts while\nleaving table data files untouched.\n* **Monitoring**\n* Expanded the Compaction Grafana dashboard with panels for manifest\ncompaction rate, skipped runs, input/output volumes, and reduction\nfactor.\n* **Configuration**\n* Reorganized compaction settings into separate **data** and\n**manifest** sections, including new manifest rewrite tuning.\n* **Bug Fixes**\n* Improved job task retry/attempt budgeting behavior and clearer\nhandling of waiting vs exhausted work, with more reliable\nfailed-iteration recording.\n* **Build & Docs**\n* Pinned compaction dependencies for more reproducible builds; refreshed\ncompaction documentation.\n<!-- end of auto-generated comment: release notes by coderabbit.ai -->",
          "timestamp": "2026-07-24T22:17:51+04:00",
          "tree_id": "ef7ff0304c2d9c2d156c9ee4621ff114f46c1a85",
          "url": "https://github.com/icegatetech/icegate/commit/6f43679c8b0e92c210c66534a93a46f5d9556a82"
        },
        "date": 1784919067396,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 2206475,
            "range": "± 48214",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 2099365,
            "range": "± 33630",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 2128624,
            "range": "± 32400",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 2163323,
            "range": "± 13249",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 2209073,
            "range": "± 7316",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 5188170,
            "range": "± 125936",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 5335640,
            "range": "± 107209",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 5648700,
            "range": "± 55556",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 6983545,
            "range": "± 62509",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 7086926,
            "range": "± 114809",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 7146049,
            "range": "± 71519",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 5374270,
            "range": "± 43595",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 7864355,
            "range": "± 180272",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 7793852,
            "range": "± 61681",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 10242539,
            "range": "± 239278",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2303871285,
            "range": "± 30121487",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 551519307,
            "range": "± 400988",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 3041279741,
            "range": "± 73710699",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 4093465,
            "range": "± 22916",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 3061630,
            "range": "± 25259",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 4249546,
            "range": "± 93693",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1598437238,
            "range": "± 38154576",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "prosvirnin.s@gmail.com",
            "name": "Sergei Prosvirnin",
            "username": "s-prosvirnin"
          },
          "committer": {
            "email": "prosvirnin.s@gmail.com",
            "name": "Sergei Prosvirnin",
            "username": "s-prosvirnin"
          },
          "distinct": true,
          "id": "445e04e4a38638bec172ee22607f8eb4e34bbf40",
          "message": "update compaction doc",
          "timestamp": "2026-07-25T20:00:12+02:00",
          "tree_id": "e2a25447ed86b7ab4783f01f721efddcf4c99d0c",
          "url": "https://github.com/icegatetech/icegate/commit/445e04e4a38638bec172ee22607f8eb4e34bbf40"
        },
        "date": 1785004407221,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 2150635,
            "range": "± 20684",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 2060079,
            "range": "± 9443",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 2037666,
            "range": "± 12281",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 2130200,
            "range": "± 30556",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 2179377,
            "range": "± 23462",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 5101973,
            "range": "± 22083",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 5257880,
            "range": "± 23996",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 5510085,
            "range": "± 73840",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 6865901,
            "range": "± 11953",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 6883780,
            "range": "± 20888",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 6877031,
            "range": "± 34065",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 5313295,
            "range": "± 114146",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 7794049,
            "range": "± 103807",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 7880415,
            "range": "± 50017",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 10245857,
            "range": "± 136301",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2404204968,
            "range": "± 41361249",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 551404461,
            "range": "± 288523",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 3129702289,
            "range": "± 80269474",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 3952021,
            "range": "± 48663",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 2996443,
            "range": "± 10504",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 3880792,
            "range": "± 35642",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1580295913,
            "range": "± 51976238",
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
          "id": "b7e4fe19cbc12d72bb5228fb0d5ceea7bac277b1",
          "message": "GH-161 (#166)\n\n<!-- This is an auto-generated comment: release notes by coderabbit.ai\n-->\n## Summary by CodeRabbit\n\n- **New Features**\n- Added a read-only Iceberg REST Catalog server with namespace/table\ndiscovery, pagination, snapshot selection, ETag support, and\nIceberg-standard error responses.\n- Added `catalog serve` and `catalog version` commands with YAML/TOML\nconfiguration.\n- Added a dedicated catalog container image plus Helm deployment,\nService, and values support.\n- Added configurable S3 path-style access behavior (including\nautomatic/override handling).\n- **Documentation**\n- Expanded catalog usage, configuration, contribution, and testing\nguidance.\n- **Bug Fixes**\n- Improved S3 warehouse URI handling and validation for catalog\nconfiguration and Helm rendering.\n<!-- end of auto-generated comment: release notes by coderabbit.ai -->",
          "timestamp": "2026-07-26T23:33:37+04:00",
          "tree_id": "4c80ae9bd1d1e63ba694a83dec81704521932175",
          "url": "https://github.com/icegatetech/icegate/commit/b7e4fe19cbc12d72bb5228fb0d5ceea7bac277b1"
        },
        "date": 1785096419740,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 2198589,
            "range": "± 69067",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 2022038,
            "range": "± 21071",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 2026475,
            "range": "± 25755",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 2089839,
            "range": "± 28830",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 2130273,
            "range": "± 26626",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 5110210,
            "range": "± 83170",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 5302168,
            "range": "± 92527",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 5575914,
            "range": "± 67955",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 6985420,
            "range": "± 117804",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 6813790,
            "range": "± 88282",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 6946945,
            "range": "± 179130",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 5403604,
            "range": "± 49136",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 8052376,
            "range": "± 107282",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 7944643,
            "range": "± 63492",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 10354742,
            "range": "± 91320",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2366836988,
            "range": "± 44329200",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 551376316,
            "range": "± 332540",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 3066734351,
            "range": "± 63507971",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 3839445,
            "range": "± 71455",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 2732227,
            "range": "± 37857",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 3752203,
            "range": "± 77943",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1564245830,
            "range": "± 53775421",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mineev@triplecloud.team",
            "name": "Evgeniy Mineev",
            "username": "frisbeeman"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "96047dceb4a9f891545e1cf3de62caad5b61fad5",
          "message": "(feat) Add global LLM pricing table and crawler (#163)\n\n<!-- This is an auto-generated comment: release notes by coderabbit.ai\n-->\n## Summary by CodeRabbit\n\n* **New Features**\n* Added a background LLM pricing crawler with multiple upstream sources,\nnormalization/canonical IDs, rate quantization, and change-only append\nto the global `prices` table.\n* Introduced the `prices_effective` view providing `valid_to` windows\nfor price history.\n* Exposed these global pricing objects through the tenant SQL endpoint\nwithout tenant isolation wrapping.\n* **Bug Fixes**\n* Improved Parquet writing for unpartitioned tables and ensured no new\nsnapshots are created when there are no effective updates.\n* **Configuration**\n* Added `maintain.pricing` settings to Helm/Kustomize (enablement, crawl\ncadence/timeouts, guards, sources, billing regions).\n* **Migration**\n* Updated table creation/upgrade paths to include the new global\n`prices` table.\n<!-- end of auto-generated comment: release notes by coderabbit.ai -->",
          "timestamp": "2026-07-27T00:43:19+04:00",
          "tree_id": "57b86c7821181fbfe858ea7e60bff50d320bd390",
          "url": "https://github.com/icegatetech/icegate/commit/96047dceb4a9f891545e1cf3de62caad5b61fad5"
        },
        "date": 1785099421797,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 2090589,
            "range": "± 69474",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 2070156,
            "range": "± 10872",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 2045489,
            "range": "± 24256",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 2136621,
            "range": "± 5021",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 2183038,
            "range": "± 4131",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 5130899,
            "range": "± 14429",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 5261729,
            "range": "± 24513",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 5497515,
            "range": "± 4041",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 6859473,
            "range": "± 35005",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 6817922,
            "range": "± 9912",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 6828554,
            "range": "± 10863",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 5285643,
            "range": "± 19134",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 7712048,
            "range": "± 32328",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 7666613,
            "range": "± 10423",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 10023924,
            "range": "± 8913",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2379024356,
            "range": "± 20648630",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 551622854,
            "range": "± 308472",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 3041355780,
            "range": "± 60420730",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 4157962,
            "range": "± 19981",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 3081636,
            "range": "± 5227",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 4077528,
            "range": "± 9535",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1621709284,
            "range": "± 37677060",
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
          "id": "ac8cf9d3b87fc02adbf8691666f5e7ff0c2853c7",
          "message": "separate job manager to its own repo (#167)\n\n<!-- This is an auto-generated comment: release notes by coderabbit.ai\n-->\n\n## Summary by CodeRabbit\n\n* **Refactor**\n* Migrated job-management functionality to the externally maintained Job\nManager package.\n* Updated ingest and maintenance workflows to use the shared\njob-management integration.\n* Removed the previous in-repository job-management implementation and\nexamples.\n\n* **Documentation**\n* Added guidance for configuring and locally developing with the\nexternal Job Manager package.\n\n* **Chores**\n* Updated logging configuration to use the new Job Manager logging\nidentifier.\n  * Added local Cargo configuration to ignore patterns.\n\n<!-- end of auto-generated comment: release notes by coderabbit.ai -->",
          "timestamp": "2026-07-27T12:38:42+04:00",
          "tree_id": "c1b11fc642c4c4d19be883e36bfc2d93c5e41399",
          "url": "https://github.com/icegatetech/icegate/commit/ac8cf9d3b87fc02adbf8691666f5e7ff0c2853c7"
        },
        "date": 1785143509084,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 2200161,
            "range": "± 15524",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 2093430,
            "range": "± 8995",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 2079825,
            "range": "± 26625",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 2165388,
            "range": "± 5994",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 2207203,
            "range": "± 19108",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 5213992,
            "range": "± 33020",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 5355123,
            "range": "± 17697",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 5617734,
            "range": "± 33790",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 7014279,
            "range": "± 28891",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 6964859,
            "range": "± 31584",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 6932972,
            "range": "± 18682",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 5354759,
            "range": "± 8640",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 7806257,
            "range": "± 33403",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 7819025,
            "range": "± 26914",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 10228852,
            "range": "± 20623",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2428955857,
            "range": "± 33414212",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 551323931,
            "range": "± 241386",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 3054117705,
            "range": "± 52861898",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 4188976,
            "range": "± 35868",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 3192724,
            "range": "± 15551",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 4067265,
            "range": "± 18780",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1622918060,
            "range": "± 40569649",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mineev@triplecloud.team",
            "name": "Evgeniy Mineev",
            "username": "frisbeeman"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aef3966ac261d38f38b4aa8794696cc2bdad2f2a",
          "message": "fix: Lone name projection on spans (#169)",
          "timestamp": "2026-07-30T16:59:56+04:00",
          "tree_id": "c8b06fec786d55a2e36bf2b165378f7825656eb2",
          "url": "https://github.com/icegatetech/icegate/commit/aef3966ac261d38f38b4aa8794696cc2bdad2f2a"
        },
        "date": 1785417204430,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 2150620,
            "range": "± 47829",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 2091948,
            "range": "± 12255",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 2074336,
            "range": "± 29186",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 2179445,
            "range": "± 18642",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 2196006,
            "range": "± 17538",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 5063327,
            "range": "± 22000",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 5163587,
            "range": "± 107225",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 5422896,
            "range": "± 55116",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 6694967,
            "range": "± 17713",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 6763749,
            "range": "± 81639",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 6781300,
            "range": "± 58888",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 5195975,
            "range": "± 30759",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 7421094,
            "range": "± 80843",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 7438603,
            "range": "± 28129",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 9757729,
            "range": "± 20859",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2429174280,
            "range": "± 49526677",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 551256204,
            "range": "± 188107",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 3053893113,
            "range": "± 47518461",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 3639092,
            "range": "± 17392",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 2865917,
            "range": "± 14548",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 3612511,
            "range": "± 36502",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1497014394,
            "range": "± 61940020",
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
          "id": "1fba426787de1f9a8cbb8d05422c4578ad075a29",
          "message": "Add tracing to maintain (#172)\n\nBrings the maintain service up to the tracing setup ingest already has.\n\n- MaintainConfig gains a `tracing` block, so the OTLP endpoint, sample\nratio and the on/off switch come from the config file instead of relying\non the OTEL_EXPORTER_OTLP_ENDPOINT env var alone. `run` initialises the\nsubscriber once its config is loaded (as ingest and query do) while\n`migrate` keeps the plain JSON logger. The block is validated in `run`,\nnot in MaintainConfig::validate, so migrate configs that omit it still\nload.\n\n- Compaction PLAN fans REWRITE/MANIFEST tasks out to workers that pick\nthem up with no ambient context and therefore open their own traces.\nTask payloads now carry the PLAN span's W3C traceparent and each task\nadds it as a span link, so the whole fan-out reads as one connected\ntrace. The field is serde-optional: payloads queued before the upgrade\nstill parse.\n\n- Spans added for the steps that dominate wall clock: table load,\ndata-file and manifest enumeration, merge+write, GC reference-set build,\nobject listing and orphan deletion, pricing live-rate read, per-source\nfetch and append.\n\n- Deployment configs updated on both sides (Docker Compose and Helm).\nThe maintain OTLP endpoint moves from a pod env var into the ConfigMap,\nand the `required` guard now fires only when tracing is enabled.\n\n<!-- This is an auto-generated comment: release notes by coderabbit.ai\n-->\n\n## Summary by CodeRabbit\n\n* **New Features**\n* Added configurable OpenTelemetry tracing for the long-running\nmaintenance service.\n  * Enabled Jaeger OTLP export with full sampling by default.\n* Added trace propagation across compaction planning, rewriting,\nmanifest processing, garbage collection, and pricing workflows.\n  * Added validation requiring an OTLP endpoint when tracing is enabled.\n* **Documentation**\n* Documented compaction trace relationships and tracing configuration\nrequirements.\n* **Bug Fixes**\n* Preserved compatibility with legacy task payloads and safely handled\ninvalid or missing trace contexts.\n\n<!-- end of auto-generated comment: release notes by coderabbit.ai -->",
          "timestamp": "2026-08-03T04:05:47+04:00",
          "tree_id": "b2ceaad08da1ec47af6752ac2c62ea23c3835315",
          "url": "https://github.com/icegatetech/icegate/commit/1fba426787de1f9a8cbb8d05422c4578ad075a29"
        },
        "date": 1785716360017,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 2126421,
            "range": "± 15386",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 2070250,
            "range": "± 9970",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 2042109,
            "range": "± 4438",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 2121575,
            "range": "± 14363",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 2171952,
            "range": "± 4147",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 4968183,
            "range": "± 14629",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 5110379,
            "range": "± 25871",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 5341844,
            "range": "± 7309",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 6636320,
            "range": "± 10396",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 6628322,
            "range": "± 12880",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 6631958,
            "range": "± 7242",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 5110138,
            "range": "± 5530",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 7389030,
            "range": "± 5151",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 7422887,
            "range": "± 20309",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 9736160,
            "range": "± 5459",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2453829277,
            "range": "± 45742778",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 551201486,
            "range": "± 214243",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 3066514490,
            "range": "± 44215788",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 3489277,
            "range": "± 18093",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 2785121,
            "range": "± 10996",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 3427122,
            "range": "± 11065",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1562989452,
            "range": "± 52365532",
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
          "id": "7036621cd1310aae812efd6b0a21e4b15fc7a65c",
          "message": "fix memory leak in opendal operator (#174)\n\n<!-- This is an auto-generated comment: release notes by coderabbit.ai\n-->\n\n## Summary by CodeRabbit\n\n* **New Features**\n* Added shared storage configuration and operator reuse across catalog,\nquery, ingestion, and maintenance workflows.\n* Added support for centralized object-store resolution, including\nlocal, memory, and S3 storage.\n* Added structured S3 bucket path validation and improved credential\nhandling.\n\n* **Bug Fixes**\n* Improved storage isolation and prevented invalid configurations from\nbeing reused.\n\n* **Tests**\n* Added coverage for operator reuse, concurrent access, path handling,\ncredential changes, and storage-layer behavior.\n\n<!-- end of auto-generated comment: release notes by coderabbit.ai -->",
          "timestamp": "2026-08-05T17:37:36+04:00",
          "tree_id": "f7ae9300260ec30f7b96f2d090f0a9c81579e4ed",
          "url": "https://github.com/icegatetech/icegate/commit/7036621cd1310aae812efd6b0a21e4b15fc7a65c"
        },
        "date": 1785939070943,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 2191354,
            "range": "± 26602",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 2092669,
            "range": "± 12815",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 2079591,
            "range": "± 9137",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 2163086,
            "range": "± 14011",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 2223475,
            "range": "± 9601",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 5191984,
            "range": "± 53065",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 5295809,
            "range": "± 77469",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 5645920,
            "range": "± 40505",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 7109433,
            "range": "± 71846",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 6977617,
            "range": "± 100271",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 6965636,
            "range": "± 65574",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 5156768,
            "range": "± 46647",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 7431434,
            "range": "± 17445",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 7461447,
            "range": "± 22971",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 9856567,
            "range": "± 17411",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2379311714,
            "range": "± 55552820",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 551318880,
            "range": "± 299947",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 3066396466,
            "range": "± 53888336",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 3585929,
            "range": "± 15682",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 2764830,
            "range": "± 20639",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 3569721,
            "range": "± 29630",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1604450216,
            "range": "± 49130515",
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
          "id": "88645eaae1e0c83295422f6e3af76daf7c183dd3",
          "message": "Update jobmanager: add job iteration cleaner (#176)\n\n<!-- This is an auto-generated comment: release notes by coderabbit.ai\n-->\n\n## Summary by CodeRabbit\n\n- **Configuration**\n- Simplified job-manager storage settings by removing the obsolete SSL\ntoggle.\n- TLS is now determined automatically from the storage endpoint URL:\nHTTPS enables TLS, while HTTP does not.\n- Updated deployment configurations across supported environments to use\nthe streamlined settings.\n\n- **Reliability**\n- Added default cleanup behavior for ingest, compaction, garbage\ncollection, and pricing job managers.\n\n- **Compatibility**\n- Updated integration configurations and storage handling to align with\nthe new endpoint-based TLS behavior.\n\n<!-- end of auto-generated comment: release notes by coderabbit.ai -->",
          "timestamp": "2026-08-05T19:15:52+04:00",
          "tree_id": "506989a22b36cf47c8ac46d22198cd0366652fc6",
          "url": "https://github.com/icegatetech/icegate/commit/88645eaae1e0c83295422f6e3af76daf7c183dd3"
        },
        "date": 1785943748541,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 1965899,
            "range": "± 9794",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 2101205,
            "range": "± 90415",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 2011243,
            "range": "± 22188",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 2100192,
            "range": "± 19086",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 2151389,
            "range": "± 13460",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 5150741,
            "range": "± 112974",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 5316833,
            "range": "± 23486",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 5521096,
            "range": "± 48700",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 6823537,
            "range": "± 15075",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 6873142,
            "range": "± 91100",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 6859188,
            "range": "± 23741",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 5290364,
            "range": "± 42118",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 7748941,
            "range": "± 37382",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 7755545,
            "range": "± 21971",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 10134246,
            "range": "± 27570",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2453703583,
            "range": "± 38640942",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 551383534,
            "range": "± 198429",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 3103722258,
            "range": "± 75444161",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 3929469,
            "range": "± 28478",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 2978451,
            "range": "± 11784",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 3814911,
            "range": "± 29930",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1596473797,
            "range": "± 51030753",
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
          "id": "9016f25e80e3b9b1bfe9c626845d0c99160b7b81",
          "message": "GH-165: add iceberg snapshots expiration support (#181)\n\nWithout bounded history a table keeps every snapshot it ever had, so GC\ncan reclaim nothing: manifests and data files stay referenced from\nmetadata.json forever. This adds the retention policy that lets them go.\n\nExpiration is not a maintenance job. The policy lives in the table's own\nproperties (`history.expire.*`), and every writer — ingest shift,\ncompaction rewrite, pricing append — resolves it on commit and carries a\n`RemoveSnapshots` update along with whatever it was already writing\n(support comes from the iceberg-rust bump to 0c07964). Keeping the\nvalues in table properties makes them auditable in metadata.json instead\nof an implicit default hidden in code.\n\nWhat is in the change:\n\n- `migrate/config.rs`: new `SnapshotExpirationConfig` — enabled,\nmin_snapshots_to_keep, max_snapshot_age_ms,\nmetadata_previous_versions_max — with validation and defaults (100\nsnapshots / 30 min / 200 metadata versions).\n- `migrate/operations.rs`: `migrate create` stamps the policy onto every\ntable it creates. Tables written by the Shifter declare their WAL-offset\nsummary key as a carrier expiration must keep reachable; `prices` does\nnot, since the pricing crawler writes no offset. Existing tables are\nleft untouched.\n- `MaintainConfig::validate` rejects an orphan sweep running with a zero\ngrace period, and the Helm chart gains\n`icegate.validateRetentionWindow`, which fails the render unless\n`query.engine.maxAgeSecs < migrate.snapshotExpiration.maxSnapshotAgeMs`\nand `query.engine.maxAgeSecs < maintain.gc.orphans.minAgeSecs`. A cached\nquery provider must not outlive the files it plans against.\n- Deployment configs on both sides: chart values plus configmaps, and\n`config/docker/maintain.yaml`.\n- Docs: `migrate/README.md` (retention contract), `maintain/README.md`,\nand a TODO in `query/engine/core.rs` — the ordering is enforced by\nconfiguration only; the read path should retry a missing file on a fresh\nprovider.\n- Tests: `snapshot_expiration_it.rs` integration suite, plus a `logs`\nwriter and raw object-store listing helpers shared through\n`tests/common`.\n\n<!-- This is an auto-generated comment: release notes by coderabbit.ai\n-->\n## Summary by CodeRabbit\n\n- **New Features**\n- Added configurable snapshot expiration for newly created tables,\nincluding minimum snapshots, maximum age, and metadata retention.\n- Added retention settings to Helm deployments and maintenance\nconfiguration.\n- Preserved WAL-related metadata where applicable during table creation.\n\n- **Bug Fixes**\n- Added validation for retention windows, cache age, refresh intervals,\nand orphan cleanup grace periods.\n  - Disabled snapshot expiration now explicitly preserves snapshots.\n\n- **Documentation**\n- Expanded configuration, migration, maintenance, and public\ndocumentation guidance.\n<!-- end of auto-generated comment: release notes by coderabbit.ai -->",
          "timestamp": "2026-08-08T16:38:46+04:00",
          "tree_id": "480f34eb681a3486b9d870952409823815d064f3",
          "url": "https://github.com/icegatetech/icegate/commit/9016f25e80e3b9b1bfe9c626845d0c99160b7b81"
        },
        "date": 1786194716606,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 2130684,
            "range": "± 65723",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 2054444,
            "range": "± 6299",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 2029588,
            "range": "± 38445",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 2110403,
            "range": "± 3931",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 2162472,
            "range": "± 5457",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 5111387,
            "range": "± 9599",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 5334100,
            "range": "± 54848",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 5524315,
            "range": "± 40872",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 7123629,
            "range": "± 67895",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 7201685,
            "range": "± 121059",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 7221333,
            "range": "± 122918",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 5543032,
            "range": "± 103974",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 8256776,
            "range": "± 172613",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 8168661,
            "range": "± 93231",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 10799901,
            "range": "± 193073",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2379351587,
            "range": "± 66651585",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 551494230,
            "range": "± 174832",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 3016925989,
            "range": "± 92142157",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 4291548,
            "range": "± 74147",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 3141932,
            "range": "± 28831",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 4133929,
            "range": "± 66242",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1597468471,
            "range": "± 51256765",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mineev@triplecloud.team",
            "name": "Evgeniy Mineev",
            "username": "frisbeeman"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "066fa48a23c83a79337ed30b1aac7a32fe5af3f3",
          "message": "(feat) Add sanitizer support for memory safety checks on Linux (#179)\n\n<!-- This is an auto-generated comment: release notes by coderabbit.ai\n-->\n\n## Summary by CodeRabbit\n\n* **New Features**\n* Added AddressSanitizer, LeakSanitizer, and MemorySanitizer test\ntargets.\n* Added Docker support for running sanitizer checks on non-Linux\nsystems.\n  * Added scheduled and on-demand sanitizer checks in CI.\n\n* **Documentation**\n* Documented sanitizer commands, limitations, configuration, and\nmaintenance guidance.\n\n* **Bug Fixes**\n* Updated sanitizer builds to use compatible memory allocation behavior.\n  * Added documented leak suppressions for known reports.\n\n<!-- end of auto-generated comment: release notes by coderabbit.ai -->\n\n---------\n\nCo-authored-by: Sergei Prosvirnin <prosvirnin.s@gmail.com>",
          "timestamp": "2026-08-08T20:09:26+04:00",
          "tree_id": "0452146d829230dde242848498e04aaf209ec4d3",
          "url": "https://github.com/icegatetech/icegate/commit/066fa48a23c83a79337ed30b1aac7a32fe5af3f3"
        },
        "date": 1786206159711,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 1982168,
            "range": "± 22442",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 2192913,
            "range": "± 94788",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 2043740,
            "range": "± 29019",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 2114330,
            "range": "± 10807",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 2164970,
            "range": "± 26024",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 5097112,
            "range": "± 5706",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 5236069,
            "range": "± 15059",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 5470172,
            "range": "± 22011",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 6721513,
            "range": "± 7223",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 6721281,
            "range": "± 27562",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 6725232,
            "range": "± 10702",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 5214977,
            "range": "± 22066",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 7603233,
            "range": "± 5273",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 7609435,
            "range": "± 14666",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 9977530,
            "range": "± 51430",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2278946750,
            "range": "± 31203976",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 551349309,
            "range": "± 3964422",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 3078757673,
            "range": "± 65573737",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 4078982,
            "range": "± 16110",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 3040023,
            "range": "± 10862",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 4026767,
            "range": "± 11919",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1596764947,
            "range": "± 50216384",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mineev@triplecloud.team",
            "name": "Evgeniy Mineev",
            "username": "frisbeeman"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2070acd04f3a2c0464750d82cb0730e36e870d23",
          "message": "(chore) Bump iceberg-rust (#183)\n\n<!-- This is an auto-generated comment: release notes by coderabbit.ai\n-->\n## Summary by CodeRabbit\n\n* **New Features**\n* Added table purge support, removing catalog entries and associated\ndata.\n  * Added Parquet field mapping for variant-typed data.\n  * Added more efficient batched and recursive storage deletion.\n* **Improvements**\n* Improved compatibility across query, storage, telemetry, and\nobject-storage integrations.\n  * Improved tracing context handling and storage cache behavior.\n* Updated manifest scanning and metadata handling for more reliable\ntable operations.\n* **Bug Fixes**\n  * Corrected S3 path handling and anonymous-access configuration.\n* Preserved row-group limits across updated storage and ingestion\nworkflows.\n<!-- end of auto-generated comment: release notes by coderabbit.ai -->",
          "timestamp": "2026-08-09T23:49:05+04:00",
          "tree_id": "65a83d8bd352c8c93425b32b99973c54d8e01bc1",
          "url": "https://github.com/icegatetech/icegate/commit/2070acd04f3a2c0464750d82cb0730e36e870d23"
        },
        "date": 1786307175520,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 3083367,
            "range": "± 70650",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 2974631,
            "range": "± 39008",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 2950939,
            "range": "± 15749",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 3006106,
            "range": "± 6998",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 2995740,
            "range": "± 7477",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 5590818,
            "range": "± 4960",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 5711911,
            "range": "± 10197",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 6113118,
            "range": "± 32337",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 7323358,
            "range": "± 26335",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 7408365,
            "range": "± 130285",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 7351668,
            "range": "± 76987",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 5935707,
            "range": "± 26981",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 7875123,
            "range": "± 13662",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 7927245,
            "range": "± 28790",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 9755566,
            "range": "± 183856",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2279133939,
            "range": "± 57965188",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 551439565,
            "range": "± 319738",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 3041548690,
            "range": "± 64659899",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 3936098,
            "range": "± 25193",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 3028040,
            "range": "± 16912",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 3991433,
            "range": "± 43202",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1571079904,
            "range": "± 77677674",
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
          "id": "660d6503b90ad5bfc4ec40f8e50f3f46d3155691",
          "message": "implement jobmanager api improvement (#186)\n\n<!-- This is an auto-generated comment: release notes by coderabbit.ai\n-->\n\n## Summary by CodeRabbit\n\n* **Monitoring**\n* Updated dashboards to display renamed Jobmanager metrics, including\njob success, duration, failures, storage latency, cache performance, and\nretry indicators.\n  * Added OpenTelemetry metrics support for Jobmanager operations.\n\n* **Reliability**\n* Improved task cancellation handling so cancelled work stops without\nbeing incorrectly marked complete.\n  * Strengthened timeout validation and overflow handling.\n\n* **Documentation**\n* Updated compaction documentation to reflect current task outcomes and\ndependency references.\n\n<!-- end of auto-generated comment: release notes by coderabbit.ai -->",
          "timestamp": "2026-08-11T20:03:24+04:00",
          "tree_id": "0b690cbe8cd1a82db91151c3ce9aea529de8d6dc",
          "url": "https://github.com/icegatetech/icegate/commit/660d6503b90ad5bfc4ec40f8e50f3f46d3155691"
        },
        "date": 1786466446507,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 2970400,
            "range": "± 58285",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 2895043,
            "range": "± 11832",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 2923212,
            "range": "± 38111",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 3001240,
            "range": "± 31912",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 2965485,
            "range": "± 12316",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 5602438,
            "range": "± 15314",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 5710923,
            "range": "± 8687",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 6118136,
            "range": "± 27372",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 7356393,
            "range": "± 44806",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 7356532,
            "range": "± 17830",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 7358281,
            "range": "± 27506",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 5919151,
            "range": "± 23786",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 7934879,
            "range": "± 63320",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 7995276,
            "range": "± 35384",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 9891037,
            "range": "± 66094",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2441874621,
            "range": "± 45918617",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 551229606,
            "range": "± 317474",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 2966438360,
            "range": "± 56705788",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 3693194,
            "range": "± 18729",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 2949428,
            "range": "± 15372",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 3711403,
            "range": "± 22327",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1571643660,
            "range": "± 48768656",
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
          "id": "68ae12301d1383c001f2fbf9443a4bf27f899392",
          "message": "(fix) Tempo v2 trace-by-ID returns the TraceByIDResponse envelope (#189)\n\n/api/v2/traces/{id} aliased the v1 handler and returned bare OTLP, so a\nclient decoding the v2 contract got a body it could not parse.\nSplit off get_trace_v2 with the envelope encoder; v1 keeps the bare\npayload.\n\n<!-- This is an auto-generated comment: release notes by coderabbit.ai\n-->\n\n## Summary by CodeRabbit\n\n* **New Features**\n* Added a v2 trace lookup endpoint returning Tempo’s `TraceByIDResponse`\nenvelope.\n* Added JSON and protobuf response formats, including complete and\npartial result statuses.\n  * Added truncation details when trace results are incomplete.\n* Preserved v1 trace lookups with bare OTLP JSON or protobuf responses.\n\n* **Bug Fixes**\n* Improved handling of unknown traces with appropriate not-found\nresponses.\n  * Added tenant-isolated trace lookup behavior.\n\n<!-- end of auto-generated comment: release notes by coderabbit.ai -->",
          "timestamp": "2026-08-15T13:58:35+04:00",
          "tree_id": "d894d3ad3f95125cfc377c06fdee4a19ebafd4e1",
          "url": "https://github.com/icegatetech/icegate/commit/68ae12301d1383c001f2fbf9443a4bf27f899392"
        },
        "date": 1786790200961,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 3184269,
            "range": "± 157911",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 3136029,
            "range": "± 17376",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 3170132,
            "range": "± 17911",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 3251164,
            "range": "± 18863",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 3228277,
            "range": "± 12249",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 6175545,
            "range": "± 45962",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 6289510,
            "range": "± 59529",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 6765958,
            "range": "± 48914",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 8101619,
            "range": "± 39337",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 8129084,
            "range": "± 141950",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 8162033,
            "range": "± 57176",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 6642738,
            "range": "± 58364",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 8741880,
            "range": "± 81838",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 8759703,
            "range": "± 57188",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 10823680,
            "range": "± 232338",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2429167423,
            "range": "± 52535800",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 551276017,
            "range": "± 389774",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 3004094574,
            "range": "± 36738492",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 3802613,
            "range": "± 25282",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 2998167,
            "range": "± 25788",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 3829566,
            "range": "± 35430",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1455638010,
            "range": "± 63346943",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mineev@triplecloud.team",
            "name": "Evgeniy Mineev",
            "username": "frisbeeman"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d910c19e3f8d6b771487da98e6d3c39c2d85bd99",
          "message": "(refactor) Replace `Box::leak` with RAII for temporary directories intests and async harnesses. (#188)\n\n- Ensure proper cleanup with `TempDir::drop`, avoiding disk and memory\nleaks.\n- Update `build_state` to return guards for temporary directories.\n- Improve `shutdown` methods for async tasks with timeout handling and\npanic propagation.\n- Simplify LSan suppressions post-harness fixes.\n\n<!-- This is an auto-generated comment: release notes by coderabbit.ai\n-->\n## Summary by CodeRabbit\n\n- **Bug Fixes**\n- Improved leak-sanitizer accuracy with more reliable stack unwinding\nand updated suppression rules.\n  - Preserved expected retry behavior for simulated storage failures.\n\n- **Testing & Reliability**\n  - Test servers now clean up temporary data automatically.\n  - Improved startup and shutdown error handling.\n- Enabled reliable testing with dynamically assigned ports and startup\nport reporting.\n\n- **Documentation**\n- Clarified sanitizer suppression policies and retirement requirements.\n  - Updated the minimum supported Rust version to 1.95.0.\n<!-- end of auto-generated comment: release notes by coderabbit.ai -->",
          "timestamp": "2026-08-16T18:03:20+04:00",
          "tree_id": "c9100db96cd57c6c83ad95a9c2f90335ef713afd",
          "url": "https://github.com/icegatetech/icegate/commit/d910c19e3f8d6b771487da98e6d3c39c2d85bd99"
        },
        "date": 1786891222723,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 3118688,
            "range": "± 58530",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 2950439,
            "range": "± 145312",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 2956893,
            "range": "± 9147",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 3083186,
            "range": "± 38802",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 2998722,
            "range": "± 8257",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 6704227,
            "range": "± 405255",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 6234328,
            "range": "± 166241",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 7168531,
            "range": "± 188490",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 8390195,
            "range": "± 104211",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 8142819,
            "range": "± 341711",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 7548516,
            "range": "± 72931",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 5988871,
            "range": "± 20494",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 8059466,
            "range": "± 150736",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 8948932,
            "range": "± 398336",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 10020284,
            "range": "± 100064",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2403964230,
            "range": "± 29864073",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 551239652,
            "range": "± 278624",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 3079424620,
            "range": "± 65114688",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 3437731,
            "range": "± 13096",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 2787836,
            "range": "± 19000",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 3440726,
            "range": "± 12399",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1562557226,
            "range": "± 49479196",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mineev@triplecloud.team",
            "name": "Evgeniy Mineev",
            "username": "frisbeeman"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7c5d13b72517ed178a9111c576ca1de964b3d80a",
          "message": "feat: Unify attribute lookups across span and scope traits (#187)\n\n<!-- This is an auto-generated comment: release notes by coderabbit.ai\n-->\n## Summary by CodeRabbit\n\n- **New Features**\n- OTLP resource, scope, span, log, and data-point attributes are now\nhandled separately for more accurate querying and display.\n- Loki label discovery and values support dotted attribute names with\nnormalized wire-format output.\n- Tempo and TraceQL now support instrumentation-scope attributes through\nspan queries, including precedence when names overlap.\n- LogQL supports `ip` as a label name and no longer accepts legacy\ncolon-prefixed labels.\n\n- **Bug Fixes**\n- Improved attribute filtering, grouping, aggregation, and null handling\nacross queries.\n- Updated schema documentation and migration guidance for the new\nattribute columns.\n<!-- end of auto-generated comment: release notes by coderabbit.ai -->",
          "timestamp": "2026-08-18T00:06:54+04:00",
          "tree_id": "a0c5ea30d732c2eaebe847190342ec417fc40903",
          "url": "https://github.com/icegatetech/icegate/commit/7c5d13b72517ed178a9111c576ca1de964b3d80a"
        },
        "date": 1786998055335,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 2597737,
            "range": "± 86554",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 2492441,
            "range": "± 25013",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 2800208,
            "range": "± 16734",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 2511917,
            "range": "± 23293",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 2515222,
            "range": "± 9799",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 4879314,
            "range": "± 22556",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 4936355,
            "range": "± 15772",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 5731470,
            "range": "± 16116",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 6718554,
            "range": "± 21286",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 6731877,
            "range": "± 25800",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 6746080,
            "range": "± 55109",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 5191710,
            "range": "± 35190",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 7416915,
            "range": "± 43364",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 7402399,
            "range": "± 36757",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 8898539,
            "range": "± 59638",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2303661213,
            "range": "± 77064787",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 551413709,
            "range": "± 110553",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 3078141240,
            "range": "± 69155113",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 3697633,
            "range": "± 14111",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 2980988,
            "range": "± 22156",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 3696305,
            "range": "± 13366",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 1530568393,
            "range": "± 73532890",
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
          "id": "962fefb7efdd41152fd92a529c941bccf1f52b01",
          "message": "feat: reclaim WAL segments already shifted into Iceberg (#191)\n\nWAL segments were never deleted, so the queue grew without bound.\nMaintain now runs a per-topic cleanup loop on its own worker pool,\ndeleting up to `committed - keep_segments_count`, where the committed\noffset is read from the Iceberg snapshot chain. It fails closed — an\noffset it cannot resolve deletes nothing — and ships disabled, so an\nupgrade never begins deleting on its own.\n\nDeleting a prefix of the queue changes what its readers may assume. A\nlisting is now either empty or an unbroken run from the requested\noffset; a floor above it or a hole inside it is reported\n(`SegmentsGone`, `SegmentMissing`) rather than answered with a shorter\nlist, and the query engine turns both into an execution error naming\n`keep_segments_count`. Writer recovery drops the point probe: it finds\nthe maximum across holes and resumes above a committed offset even when\nno segment survives, seeded by offsets ingest reads from Iceberg at\nstartup without blocking on the catalog.\n\nQueries now carry a ceiling (`max_query_duration_secs`, 30s by default)\non every transport, Flight SQL streams included: it bounds how stale a\nplanned query's WAL boundary can be, which is the window\n`keep_segments_count` must cover. Object-store faults are classified\nthrough opendal too, so throttling and 5xx retry.\n\n<!-- This is an auto-generated comment: release notes by coderabbit.ai\n-->\n## Summary by CodeRabbit\n\n* **New Features**\n* Added configurable WAL segment cleanup with retention, dry-run mode,\ndeletion limits, scheduling, metrics, and dedicated job storage.\n* Added startup recovery for queue writers using committed WAL offsets.\n* Added configurable query time limits across Flight SQL, Loki,\nPrometheus, and Tempo.\n  * Added detection and reporting for missing or expired WAL segments.\n\n* **Bug Fixes**\n* Improved handling of storage retries, retention gaps, stalled queries,\nand cleanup failures.\n  * Prevented stale queries from silently returning incomplete results.\n\n* **Documentation**\n* Expanded maintenance, queue retention, WAL cleanup, and Rust guidance\ndocumentation.\n<!-- end of auto-generated comment: release notes by coderabbit.ai -->",
          "timestamp": "2026-08-18T16:11:46+04:00",
          "tree_id": "f5cf1b4ec83e53891567a56fb8bfb2f40f2dad69",
          "url": "https://github.com/icegatetech/icegate/commit/962fefb7efdd41152fd92a529c941bccf1f52b01"
        },
        "date": 1787057292661,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 2599233,
            "range": "± 24345",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 2481813,
            "range": "± 2574",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 3358040,
            "range": "± 332478",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 3265220,
            "range": "± 177586",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 3361180,
            "range": "± 111435",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 6237843,
            "range": "± 620536",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 5072149,
            "range": "± 75933",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 5956957,
            "range": "± 86987",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 6960683,
            "range": "± 195093",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 6960545,
            "range": "± 34205",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 7000058,
            "range": "± 615876",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 5261603,
            "range": "± 97729",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 7670776,
            "range": "± 16994",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 7800037,
            "range": "± 195698",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 10853698,
            "range": "± 126121",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2677337068,
            "range": "± 197353441",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 1170995722,
            "range": "± 61233034",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 3722396851,
            "range": "± 196085700",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 3514190,
            "range": "± 119246",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 3437303,
            "range": "± 302511",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 4323761,
            "range": "± 80031",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 2911473593,
            "range": "± 99664496",
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
          "id": "f5f185f53bf5b8d61f4188a384d744f7bc2865f0",
          "message": "update jobmanager version (#193)\n\n<!-- This is an auto-generated comment: release notes by coderabbit.ai\n-->\n## Summary by CodeRabbit\n\n* **Bug Fixes**\n* Improved error handling for failed or cancelled data ingestion writes,\npreserving more specific failure details.\n* **Reliability**\n* Standardized builds, tests, benchmarks, and security checks on a\npinned Rust toolchain for consistent results.\n* **Chores**\n  * Updated the internal job management component to a newer revision.\n  * Continued support for OpenTelemetry metrics.\n* Simplified S3 catalog initialization and related maintenance\nworkflows.\n<!-- end of auto-generated comment: release notes by coderabbit.ai -->",
          "timestamp": "2026-08-22T00:55:17+04:00",
          "tree_id": "e866635f8aa01b4bac4328c97caf6ee74742b106",
          "url": "https://github.com/icegatetech/icegate/commit/f5f185f53bf5b8d61f4188a384d744f7bc2865f0"
        },
        "date": 1787347964031,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 2546389,
            "range": "± 100140",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 2500616,
            "range": "± 6224",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 2853853,
            "range": "± 7653",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 2558256,
            "range": "± 25534",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 2563813,
            "range": "± 6325",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 4961088,
            "range": "± 6982",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 5034121,
            "range": "± 12707",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 5984976,
            "range": "± 39807",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 6936318,
            "range": "± 32973",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 6923101,
            "range": "± 24364",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 6931100,
            "range": "± 19199",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 5246016,
            "range": "± 20042",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 7722526,
            "range": "± 12572",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 7770740,
            "range": "± 14614",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 9272431,
            "range": "± 29313",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2698161486,
            "range": "± 157993735",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 1189742355,
            "range": "± 1341569",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 3949535991,
            "range": "± 241497836",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 4033160,
            "range": "± 17964",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 3116287,
            "range": "± 19177",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 4034371,
            "range": "± 55920",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 2885318194,
            "range": "± 74631791",
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
          "id": "faf082d385345f60585747445435897d150e2cd4",
          "message": "(parser) Update LogQLLexer token definitions to include `PREFIX`, adjust token ordering",
          "timestamp": "2026-08-22T17:03:03+04:00",
          "tree_id": "a5614831aa6bc01dab3a497dba7c39bf265e23bc",
          "url": "https://github.com/icegatetech/icegate/commit/faf082d385345f60585747445435897d150e2cd4"
        },
        "date": 1787404656529,
        "tool": "cargo",
        "benches": [
          {
            "name": "log_stream_queries/simple_selector",
            "value": 2376624,
            "range": "± 7911",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/multiple_matchers",
            "value": 2705372,
            "range": "± 131750",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/attribute_access",
            "value": 2834059,
            "range": "± 54332",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_contains",
            "value": 2522966,
            "range": "± 19870",
            "unit": "ns/iter"
          },
          {
            "name": "log_stream_queries/line_filter_regex",
            "value": 2546679,
            "range": "± 16601",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/count_over_time",
            "value": 5011103,
            "range": "± 43078",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/rate",
            "value": 5046135,
            "range": "± 26316",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations/bytes_over_time",
            "value": 6062893,
            "range": "± 90225",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/sum_over_time_unwrap",
            "value": 7163570,
            "range": "± 66861",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/avg_over_time_unwrap",
            "value": 7142230,
            "range": "± 60930",
            "unit": "ns/iter"
          },
          {
            "name": "range_aggregations_unwrap/quantile_over_time",
            "value": 7144998,
            "range": "± 412245",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_no_grouping",
            "value": 5280817,
            "range": "± 126290",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_by_single_label",
            "value": 7958468,
            "range": "± 67566",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/avg_by_multiple_labels",
            "value": 7943522,
            "range": "± 31263",
            "unit": "ns/iter"
          },
          {
            "name": "vector_aggregations/sum_without",
            "value": 9782855,
            "range": "± 128852",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/small_batches",
            "value": 2679681323,
            "range": "± 145262311",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/large_batches",
            "value": 1081152119,
            "range": "± 5808934",
            "unit": "ns/iter"
          },
          {
            "name": "write_performance/concurrent_topics",
            "value": 3564759780,
            "range": "± 203642103",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments",
            "value": 3524362,
            "range": "± 29958",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/read_single_segment",
            "value": 2794825,
            "range": "± 14058",
            "unit": "ns/iter"
          },
          {
            "name": "read_performance/list_segments_count",
            "value": 3541564,
            "range": "± 75876",
            "unit": "ns/iter"
          },
          {
            "name": "end_to_end/write_then_read",
            "value": 2685101018,
            "range": "± 62607373",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}