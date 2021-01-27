window.BENCHMARK_DATA = {
  "lastUpdate": 1611759711560,
  "repoUrl": "https://github.com/mariojonke/opentelemetry-python",
  "entries": {
    "OpenTelemetry Python Benchmarks - Python 3.7 - propagator": [
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ad894b19f531706645491869151f63a4138cf768",
          "message": "Update some docs (#1553)",
          "timestamp": "2021-01-26T15:55:29-08:00",
          "tree_id": "b709949515ffab36df095f7149f9310176d326d8",
          "url": "https://github.com/mariojonke/opentelemetry-python/commit/ad894b19f531706645491869151f63a4138cf768"
        },
        "date": 1611759704620,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 82348.8186639983,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010843003583381868",
            "extra": "mean: 12.143465033544985 usec\nrounds: 10696"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 177999.79670977368,
            "unit": "iter/sec",
            "range": "stddev: 3.6049299219744885e-7",
            "extra": "mean: 5.617983944276559 usec\nrounds: 59169"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.8 - propagator": [
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ad894b19f531706645491869151f63a4138cf768",
          "message": "Update some docs (#1553)",
          "timestamp": "2021-01-26T15:55:29-08:00",
          "tree_id": "b709949515ffab36df095f7149f9310176d326d8",
          "url": "https://github.com/mariojonke/opentelemetry-python/commit/ad894b19f531706645491869151f63a4138cf768"
        },
        "date": 1611759708831,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 83027.44690444182,
            "unit": "iter/sec",
            "range": "stddev: 0.00001072564018419213",
            "extra": "mean: 12.044209924350954 usec\nrounds: 11628"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 192652.54653498114,
            "unit": "iter/sec",
            "range": "stddev: 0.000010548222545649536",
            "extra": "mean: 5.190691833489072 usec\nrounds: 74622"
          }
        ]
      }
    ]
  }
}