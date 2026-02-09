window.BENCHMARK_DATA = {
  "lastUpdate": 1770642006315,
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
      }
    ]
  }
}