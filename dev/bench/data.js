window.BENCHMARK_DATA = {
  "lastUpdate": 1770583818183,
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
      }
    ]
  }
}