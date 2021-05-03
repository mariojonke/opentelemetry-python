window.BENCHMARK_DATA = {
  "lastUpdate": 1620018537896,
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
      },
      {
        "commit": {
          "author": {
            "email": "christian.neumueller@dynatrace.com",
            "name": "Christian Neumüller",
            "username": "Oberon00"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6f8c077fa5349d445358b879fc83c139a0c22cff",
          "message": "Fix eachdist.py not printing invoked commands. (#1758)\n\nI observed the following pattern:\r\n```\r\n<output of cmd 1>\r\n<output of cmd 2>\r\n>>> cmd1\r\n>>> cmd2\r\n```\r\n\r\nThe `>>> cmd` header should come immediately before the command output to facilitate debugging & progress reporting.",
          "timestamp": "2021-04-09T11:23:24-07:00",
          "tree_id": "47c994ef4364361ef05e198b2fa6822b4c8f6f37",
          "url": "https://github.com/mariojonke/opentelemetry-python/commit/6f8c077fa5349d445358b879fc83c139a0c22cff"
        },
        "date": 1618306447579,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 69528.08009443054,
            "unit": "iter/sec",
            "range": "stddev: 0.000012391887065388545",
            "extra": "mean: 14.382678173219164 usec\nrounds: 11211"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 129278.72209482464,
            "unit": "iter/sec",
            "range": "stddev: 0.000011895733590602468",
            "extra": "mean: 7.735224975897503 usec\nrounds: 49752"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "way@whoop.com",
            "name": "Marcus Way",
            "username": "marcusway"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "300ce1bc601440e5560523296b426592f54bf7c5",
          "message": "Update example collector-config.yaml (#1805)\n\nIt seems that there have been some changes to the open-telemetry collector image that cause issues in running this example. I updated the config file to avoid these, but an alternative would be to pin the image to a specific version rather than using the `latest` tag.\r\n\r\nAnyway, the issues I ran into running the image with the given yaml file were:\r\n\r\n1.  Empty configuration for the OLTP receiver\r\n```Error: cannot load configuration: error reading receivers configuration for otlp: empty config for OTLP receiver```, which is fixed by adding the \r\n```protocols:\r\n    grpc:\r\n    http:\r\n```\r\nbit.\r\n\r\n2.  `unknown processors type \"queued_retry\" for queued_retry`. It looks like this processor was [removed](https://github.com/open-telemetry/opentelemetry-operator/issues/18) from the collector, so I just dropped the references to it.",
          "timestamp": "2021-05-02T15:28:39-07:00",
          "tree_id": "6a947f2bae4d0864fbafa8aeb36a84e73a67fd80",
          "url": "https://github.com/mariojonke/opentelemetry-python/commit/300ce1bc601440e5560523296b426592f54bf7c5"
        },
        "date": 1620018478144,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 70215.8855237966,
            "unit": "iter/sec",
            "range": "stddev: 0.000006548506458957399",
            "extra": "mean: 14.241791476959923 usec\nrounds: 9644"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 126539.7853496862,
            "unit": "iter/sec",
            "range": "stddev: 0.000014987190699743781",
            "extra": "mean: 7.902652886888905 usec\nrounds: 52081"
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
      },
      {
        "commit": {
          "author": {
            "email": "christian.neumueller@dynatrace.com",
            "name": "Christian Neumüller",
            "username": "Oberon00"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6f8c077fa5349d445358b879fc83c139a0c22cff",
          "message": "Fix eachdist.py not printing invoked commands. (#1758)\n\nI observed the following pattern:\r\n```\r\n<output of cmd 1>\r\n<output of cmd 2>\r\n>>> cmd1\r\n>>> cmd2\r\n```\r\n\r\nThe `>>> cmd` header should come immediately before the command output to facilitate debugging & progress reporting.",
          "timestamp": "2021-04-09T11:23:24-07:00",
          "tree_id": "47c994ef4364361ef05e198b2fa6822b4c8f6f37",
          "url": "https://github.com/mariojonke/opentelemetry-python/commit/6f8c077fa5349d445358b879fc83c139a0c22cff"
        },
        "date": 1618306440452,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 90179.38222983104,
            "unit": "iter/sec",
            "range": "stddev: 5.659351756210119e-7",
            "extra": "mean: 11.08900920890544 usec\nrounds: 11402"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 171991.92940611055,
            "unit": "iter/sec",
            "range": "stddev: 5.025511720848861e-7",
            "extra": "mean: 5.814226303833021 usec\nrounds: 57140"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "way@whoop.com",
            "name": "Marcus Way",
            "username": "marcusway"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "300ce1bc601440e5560523296b426592f54bf7c5",
          "message": "Update example collector-config.yaml (#1805)\n\nIt seems that there have been some changes to the open-telemetry collector image that cause issues in running this example. I updated the config file to avoid these, but an alternative would be to pin the image to a specific version rather than using the `latest` tag.\r\n\r\nAnyway, the issues I ran into running the image with the given yaml file were:\r\n\r\n1.  Empty configuration for the OLTP receiver\r\n```Error: cannot load configuration: error reading receivers configuration for otlp: empty config for OTLP receiver```, which is fixed by adding the \r\n```protocols:\r\n    grpc:\r\n    http:\r\n```\r\nbit.\r\n\r\n2.  `unknown processors type \"queued_retry\" for queued_retry`. It looks like this processor was [removed](https://github.com/open-telemetry/opentelemetry-operator/issues/18) from the collector, so I just dropped the references to it.",
          "timestamp": "2021-05-02T15:28:39-07:00",
          "tree_id": "6a947f2bae4d0864fbafa8aeb36a84e73a67fd80",
          "url": "https://github.com/mariojonke/opentelemetry-python/commit/300ce1bc601440e5560523296b426592f54bf7c5"
        },
        "date": 1620018462494,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 92069.79632119984,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011459471178874326",
            "extra": "mean: 10.86132521148786 usec\nrounds: 11574"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 173370.6421150128,
            "unit": "iter/sec",
            "range": "stddev: 9.680907540554294e-7",
            "extra": "mean: 5.767989250086571 usec\nrounds: 58140"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.5 - propagator": [
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
        "date": 1611759714827,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 45177.69100660892,
            "unit": "iter/sec",
            "range": "stddev: 0.000018861414395780556",
            "extra": "mean: 22.134818706288307 usec\nrounds: 8842"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 117164.72607925626,
            "unit": "iter/sec",
            "range": "stddev: 0.000014891670844668268",
            "extra": "mean: 8.534992001974626 usec\nrounds: 50762"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.6 - propagator": [
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
        "date": 1611759718782,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 44858.30408552353,
            "unit": "iter/sec",
            "range": "stddev: 0.00002162776413092124",
            "extra": "mean: 22.29241654105946 usec\nrounds: 7956"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 106330.71586169323,
            "unit": "iter/sec",
            "range": "stddev: 0.00002732962175780246",
            "extra": "mean: 9.404620216238577 usec\nrounds: 49752"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "christian.neumueller@dynatrace.com",
            "name": "Christian Neumüller",
            "username": "Oberon00"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6f8c077fa5349d445358b879fc83c139a0c22cff",
          "message": "Fix eachdist.py not printing invoked commands. (#1758)\n\nI observed the following pattern:\r\n```\r\n<output of cmd 1>\r\n<output of cmd 2>\r\n>>> cmd1\r\n>>> cmd2\r\n```\r\n\r\nThe `>>> cmd` header should come immediately before the command output to facilitate debugging & progress reporting.",
          "timestamp": "2021-04-09T11:23:24-07:00",
          "tree_id": "47c994ef4364361ef05e198b2fa6822b4c8f6f37",
          "url": "https://github.com/mariojonke/opentelemetry-python/commit/6f8c077fa5349d445358b879fc83c139a0c22cff"
        },
        "date": 1618306440989,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 59336.24686513228,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019920278126556965",
            "extra": "mean: 16.853105021504646 usec\nrounds: 9141"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 114342.75315837566,
            "unit": "iter/sec",
            "range": "stddev: 0.000001065109839738007",
            "extra": "mean: 8.745635139770549 usec\nrounds: 46944"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "way@whoop.com",
            "name": "Marcus Way",
            "username": "marcusway"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "300ce1bc601440e5560523296b426592f54bf7c5",
          "message": "Update example collector-config.yaml (#1805)\n\nIt seems that there have been some changes to the open-telemetry collector image that cause issues in running this example. I updated the config file to avoid these, but an alternative would be to pin the image to a specific version rather than using the `latest` tag.\r\n\r\nAnyway, the issues I ran into running the image with the given yaml file were:\r\n\r\n1.  Empty configuration for the OLTP receiver\r\n```Error: cannot load configuration: error reading receivers configuration for otlp: empty config for OTLP receiver```, which is fixed by adding the \r\n```protocols:\r\n    grpc:\r\n    http:\r\n```\r\nbit.\r\n\r\n2.  `unknown processors type \"queued_retry\" for queued_retry`. It looks like this processor was [removed](https://github.com/open-telemetry/opentelemetry-operator/issues/18) from the collector, so I just dropped the references to it.",
          "timestamp": "2021-05-02T15:28:39-07:00",
          "tree_id": "6a947f2bae4d0864fbafa8aeb36a84e73a67fd80",
          "url": "https://github.com/mariojonke/opentelemetry-python/commit/300ce1bc601440e5560523296b426592f54bf7c5"
        },
        "date": 1620018477087,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 46211.32191290774,
            "unit": "iter/sec",
            "range": "stddev: 0.000020762728907841666",
            "extra": "mean: 21.6397185495938 usec\nrounds: 8577"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 96076.53113679006,
            "unit": "iter/sec",
            "range": "stddev: 0.000012607680843636196",
            "extra": "mean: 10.408369121656138 usec\nrounds: 39063"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.9 - propagator": [
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
        "date": 1611759767330,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 76862.88902432237,
            "unit": "iter/sec",
            "range": "stddev: 0.0000068457056497228994",
            "extra": "mean: 13.010179719936906 usec\nrounds: 11351"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 158412.63620704334,
            "unit": "iter/sec",
            "range": "stddev: 0.000037383577850844564",
            "extra": "mean: 6.312627729349902 usec\nrounds: 59172"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "christian.neumueller@dynatrace.com",
            "name": "Christian Neumüller",
            "username": "Oberon00"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6f8c077fa5349d445358b879fc83c139a0c22cff",
          "message": "Fix eachdist.py not printing invoked commands. (#1758)\n\nI observed the following pattern:\r\n```\r\n<output of cmd 1>\r\n<output of cmd 2>\r\n>>> cmd1\r\n>>> cmd2\r\n```\r\n\r\nThe `>>> cmd` header should come immediately before the command output to facilitate debugging & progress reporting.",
          "timestamp": "2021-04-09T11:23:24-07:00",
          "tree_id": "47c994ef4364361ef05e198b2fa6822b4c8f6f37",
          "url": "https://github.com/mariojonke/opentelemetry-python/commit/6f8c077fa5349d445358b879fc83c139a0c22cff"
        },
        "date": 1618306469459,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 92353.74381212168,
            "unit": "iter/sec",
            "range": "stddev: 0.000007407714722544352",
            "extra": "mean: 10.827931372596366 usec\nrounds: 12240"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 161781.36884512493,
            "unit": "iter/sec",
            "range": "stddev: 0.000010569162956736412",
            "extra": "mean: 6.181181474347092 usec\nrounds: 50503"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "way@whoop.com",
            "name": "Marcus Way",
            "username": "marcusway"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "300ce1bc601440e5560523296b426592f54bf7c5",
          "message": "Update example collector-config.yaml (#1805)\n\nIt seems that there have been some changes to the open-telemetry collector image that cause issues in running this example. I updated the config file to avoid these, but an alternative would be to pin the image to a specific version rather than using the `latest` tag.\r\n\r\nAnyway, the issues I ran into running the image with the given yaml file were:\r\n\r\n1.  Empty configuration for the OLTP receiver\r\n```Error: cannot load configuration: error reading receivers configuration for otlp: empty config for OTLP receiver```, which is fixed by adding the \r\n```protocols:\r\n    grpc:\r\n    http:\r\n```\r\nbit.\r\n\r\n2.  `unknown processors type \"queued_retry\" for queued_retry`. It looks like this processor was [removed](https://github.com/open-telemetry/opentelemetry-operator/issues/18) from the collector, so I just dropped the references to it.",
          "timestamp": "2021-05-02T15:28:39-07:00",
          "tree_id": "6a947f2bae4d0864fbafa8aeb36a84e73a67fd80",
          "url": "https://github.com/mariojonke/opentelemetry-python/commit/300ce1bc601440e5560523296b426592f54bf7c5"
        },
        "date": 1620018487104,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 108247.59509630503,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016711964262097812",
            "extra": "mean: 9.238080523731972 usec\nrounds: 12754"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 185950.28987899548,
            "unit": "iter/sec",
            "range": "stddev: 0.000001243944734389804",
            "extra": "mean: 5.377781344953728 usec\nrounds: 64508"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.7 - exporter": [
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
        "date": 1611759772886,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2367.7321721020007,
            "unit": "iter/sec",
            "range": "stddev: 0.00006599633482916957",
            "extra": "mean: 422.34506579020314 usec\nrounds: 228"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3351.2107414750767,
            "unit": "iter/sec",
            "range": "stddev: 0.0008887110225264615",
            "extra": "mean: 298.39961648005396 usec\nrounds: 4915"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "christian.neumueller@dynatrace.com",
            "name": "Christian Neumüller",
            "username": "Oberon00"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6f8c077fa5349d445358b879fc83c139a0c22cff",
          "message": "Fix eachdist.py not printing invoked commands. (#1758)\n\nI observed the following pattern:\r\n```\r\n<output of cmd 1>\r\n<output of cmd 2>\r\n>>> cmd1\r\n>>> cmd2\r\n```\r\n\r\nThe `>>> cmd` header should come immediately before the command output to facilitate debugging & progress reporting.",
          "timestamp": "2021-04-09T11:23:24-07:00",
          "tree_id": "47c994ef4364361ef05e198b2fa6822b4c8f6f37",
          "url": "https://github.com/mariojonke/opentelemetry-python/commit/6f8c077fa5349d445358b879fc83c139a0c22cff"
        },
        "date": 1618306507677,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 3252.318553266153,
            "unit": "iter/sec",
            "range": "stddev: 0.00003570997876638489",
            "extra": "mean: 307.47295617637036 usec\nrounds: 251"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 4558.826787286968,
            "unit": "iter/sec",
            "range": "stddev: 0.0007257319928349877",
            "extra": "mean: 219.35468195208975 usec\nrounds: 4427"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.8 - exporter": [
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
        "date": 1611759782093,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2158.3841368868766,
            "unit": "iter/sec",
            "range": "stddev: 0.00011991338423991761",
            "extra": "mean: 463.30955778906895 usec\nrounds: 199"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3540.778849872008,
            "unit": "iter/sec",
            "range": "stddev: 0.0009017100685717426",
            "extra": "mean: 282.4237385049191 usec\nrounds: 5698"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "christian.neumueller@dynatrace.com",
            "name": "Christian Neumüller",
            "username": "Oberon00"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6f8c077fa5349d445358b879fc83c139a0c22cff",
          "message": "Fix eachdist.py not printing invoked commands. (#1758)\n\nI observed the following pattern:\r\n```\r\n<output of cmd 1>\r\n<output of cmd 2>\r\n>>> cmd1\r\n>>> cmd2\r\n```\r\n\r\nThe `>>> cmd` header should come immediately before the command output to facilitate debugging & progress reporting.",
          "timestamp": "2021-04-09T11:23:24-07:00",
          "tree_id": "47c994ef4364361ef05e198b2fa6822b4c8f6f37",
          "url": "https://github.com/mariojonke/opentelemetry-python/commit/6f8c077fa5349d445358b879fc83c139a0c22cff"
        },
        "date": 1618306527972,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2484.00687696839,
            "unit": "iter/sec",
            "range": "stddev: 0.0000477891795423573",
            "extra": "mean: 402.5753750007535 usec\nrounds: 232"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3794.0936358699373,
            "unit": "iter/sec",
            "range": "stddev: 0.0008564405328307023",
            "extra": "mean: 263.56755946818186 usec\nrounds: 6390"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.6 - exporter": [
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
        "date": 1611759781713,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2433.938893867816,
            "unit": "iter/sec",
            "range": "stddev: 0.00003472190883581628",
            "extra": "mean: 410.85665811884127 usec\nrounds: 117"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3321.876010868983,
            "unit": "iter/sec",
            "range": "stddev: 0.0009055843782836108",
            "extra": "mean: 301.03471554268094 usec\nrounds: 4774"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "christian.neumueller@dynatrace.com",
            "name": "Christian Neumüller",
            "username": "Oberon00"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6f8c077fa5349d445358b879fc83c139a0c22cff",
          "message": "Fix eachdist.py not printing invoked commands. (#1758)\n\nI observed the following pattern:\r\n```\r\n<output of cmd 1>\r\n<output of cmd 2>\r\n>>> cmd1\r\n>>> cmd2\r\n```\r\n\r\nThe `>>> cmd` header should come immediately before the command output to facilitate debugging & progress reporting.",
          "timestamp": "2021-04-09T11:23:24-07:00",
          "tree_id": "47c994ef4364361ef05e198b2fa6822b4c8f6f37",
          "url": "https://github.com/mariojonke/opentelemetry-python/commit/6f8c077fa5349d445358b879fc83c139a0c22cff"
        },
        "date": 1618306554769,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2074.8903325429906,
            "unit": "iter/sec",
            "range": "stddev: 0.00013894355127655003",
            "extra": "mean: 481.95318293010575 usec\nrounds: 82"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 2897.7084934640056,
            "unit": "iter/sec",
            "range": "stddev: 0.0009559558261456644",
            "extra": "mean: 345.100275702533 usec\nrounds: 4124"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.9 - core": [
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
        "date": 1611759796225,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 35211.5559748603,
            "unit": "iter/sec",
            "range": "stddev: 0.000002014281735918651",
            "extra": "mean: 28.39976741482148 usec\nrounds: 5168"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 25206.544511804837,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013396080206928259",
            "extra": "mean: 39.672236689629386 usec\nrounds: 7588"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "christian.neumueller@dynatrace.com",
            "name": "Christian Neumüller",
            "username": "Oberon00"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6f8c077fa5349d445358b879fc83c139a0c22cff",
          "message": "Fix eachdist.py not printing invoked commands. (#1758)\n\nI observed the following pattern:\r\n```\r\n<output of cmd 1>\r\n<output of cmd 2>\r\n>>> cmd1\r\n>>> cmd2\r\n```\r\n\r\nThe `>>> cmd` header should come immediately before the command output to facilitate debugging & progress reporting.",
          "timestamp": "2021-04-09T11:23:24-07:00",
          "tree_id": "47c994ef4364361ef05e198b2fa6822b4c8f6f37",
          "url": "https://github.com/mariojonke/opentelemetry-python/commit/6f8c077fa5349d445358b879fc83c139a0c22cff"
        },
        "date": 1618306515126,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 27855.081702294705,
            "unit": "iter/sec",
            "range": "stddev: 0.000002374266989407444",
            "extra": "mean: 35.90009215150211 usec\nrounds: 5046"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 19885.587255806306,
            "unit": "iter/sec",
            "range": "stddev: 0.000003003827447725605",
            "extra": "mean: 50.28767755943513 usec\nrounds: 7375"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "way@whoop.com",
            "name": "Marcus Way",
            "username": "marcusway"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "300ce1bc601440e5560523296b426592f54bf7c5",
          "message": "Update example collector-config.yaml (#1805)\n\nIt seems that there have been some changes to the open-telemetry collector image that cause issues in running this example. I updated the config file to avoid these, but an alternative would be to pin the image to a specific version rather than using the `latest` tag.\r\n\r\nAnyway, the issues I ran into running the image with the given yaml file were:\r\n\r\n1.  Empty configuration for the OLTP receiver\r\n```Error: cannot load configuration: error reading receivers configuration for otlp: empty config for OTLP receiver```, which is fixed by adding the \r\n```protocols:\r\n    grpc:\r\n    http:\r\n```\r\nbit.\r\n\r\n2.  `unknown processors type \"queued_retry\" for queued_retry`. It looks like this processor was [removed](https://github.com/open-telemetry/opentelemetry-operator/issues/18) from the collector, so I just dropped the references to it.",
          "timestamp": "2021-05-02T15:28:39-07:00",
          "tree_id": "6a947f2bae4d0864fbafa8aeb36a84e73a67fd80",
          "url": "https://github.com/mariojonke/opentelemetry-python/commit/300ce1bc601440e5560523296b426592f54bf7c5"
        },
        "date": 1620018535545,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 19834.54000314104,
            "unit": "iter/sec",
            "range": "stddev: 0.000017599496415317898",
            "extra": "mean: 50.417100665890814 usec\nrounds: 4808"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 13588.819873852222,
            "unit": "iter/sec",
            "range": "stddev: 0.000018059593287254795",
            "extra": "mean: 73.58990768022561 usec\nrounds: 7474"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.9 - exporter": [
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
        "date": 1611759813853,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 725.9060968601767,
            "unit": "iter/sec",
            "range": "stddev: 0.00041683250670067687",
            "extra": "mean: 1.3775886499994765 msec\nrounds: 120"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3149.618161559979,
            "unit": "iter/sec",
            "range": "stddev: 0.0013059540589866413",
            "extra": "mean: 317.4988042057481 usec\nrounds: 4898"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "christian.neumueller@dynatrace.com",
            "name": "Christian Neumüller",
            "username": "Oberon00"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6f8c077fa5349d445358b879fc83c139a0c22cff",
          "message": "Fix eachdist.py not printing invoked commands. (#1758)\n\nI observed the following pattern:\r\n```\r\n<output of cmd 1>\r\n<output of cmd 2>\r\n>>> cmd1\r\n>>> cmd2\r\n```\r\n\r\nThe `>>> cmd` header should come immediately before the command output to facilitate debugging & progress reporting.",
          "timestamp": "2021-04-09T11:23:24-07:00",
          "tree_id": "47c994ef4364361ef05e198b2fa6822b4c8f6f37",
          "url": "https://github.com/mariojonke/opentelemetry-python/commit/6f8c077fa5349d445358b879fc83c139a0c22cff"
        },
        "date": 1618306535796,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 2759.385059919386,
            "unit": "iter/sec",
            "range": "stddev: 0.00001838602211997651",
            "extra": "mean: 362.39958479343744 usec\nrounds: 171"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp-proto-grpc/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 3838.836942073854,
            "unit": "iter/sec",
            "range": "stddev: 0.000934309423571809",
            "extra": "mean: 260.4955654771234 usec\nrounds: 5353"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.7 - core": [
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
        "date": 1611759828223,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 20922.921183615214,
            "unit": "iter/sec",
            "range": "stddev: 0.000026444752062774767",
            "extra": "mean: 47.794473401883394 usec\nrounds: 4850"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 14377.132318001712,
            "unit": "iter/sec",
            "range": "stddev: 0.000039202333687680537",
            "extra": "mean: 69.55489995371975 usec\nrounds: 8666"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python pypy3 - propagator": [
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
        "date": 1611759831581,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 394731.75758892135,
            "unit": "iter/sec",
            "range": "stddev: 2.771197409798309e-7",
            "extra": "mean: 2.533365965049647 usec\nrounds: 49505"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 674166.598660828,
            "unit": "iter/sec",
            "range": "stddev: 3.1461818885336863e-7",
            "extra": "mean: 1.4833128813951744 usec\nrounds: 74627"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "christian.neumueller@dynatrace.com",
            "name": "Christian Neumüller",
            "username": "Oberon00"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6f8c077fa5349d445358b879fc83c139a0c22cff",
          "message": "Fix eachdist.py not printing invoked commands. (#1758)\n\nI observed the following pattern:\r\n```\r\n<output of cmd 1>\r\n<output of cmd 2>\r\n>>> cmd1\r\n>>> cmd2\r\n```\r\n\r\nThe `>>> cmd` header should come immediately before the command output to facilitate debugging & progress reporting.",
          "timestamp": "2021-04-09T11:23:24-07:00",
          "tree_id": "47c994ef4364361ef05e198b2fa6822b4c8f6f37",
          "url": "https://github.com/mariojonke/opentelemetry-python/commit/6f8c077fa5349d445358b879fc83c139a0c22cff"
        },
        "date": 1618306526109,
        "tool": "pytest",
        "benches": [
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_extract_single_header",
            "value": 590705.537205685,
            "unit": "iter/sec",
            "range": "stddev: 1.6681883883219134e-7",
            "extra": "mean: 1.692890851727057 usec\nrounds: 63695"
          },
          {
            "name": "propagator/opentelemetry-propagator-b3/tests/performance/benchmarks/trace/propagation/test_benchmark_b3_format.py::test_inject_empty_context",
            "value": 977932.4231072557,
            "unit": "iter/sec",
            "range": "stddev: 2.4345539595398283e-7",
            "extra": "mean: 1.0225655437649914 usec\nrounds: 105264"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.8 - core": [
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
        "date": 1611759834845,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 22269.00101056845,
            "unit": "iter/sec",
            "range": "stddev: 0.000026417306818545764",
            "extra": "mean: 44.90547193946503 usec\nrounds: 4223"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 16156.979981700188,
            "unit": "iter/sec",
            "range": "stddev: 0.000015445692360634142",
            "extra": "mean: 61.89275478044943 usec\nrounds: 6223"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "christian.neumueller@dynatrace.com",
            "name": "Christian Neumüller",
            "username": "Oberon00"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6f8c077fa5349d445358b879fc83c139a0c22cff",
          "message": "Fix eachdist.py not printing invoked commands. (#1758)\n\nI observed the following pattern:\r\n```\r\n<output of cmd 1>\r\n<output of cmd 2>\r\n>>> cmd1\r\n>>> cmd2\r\n```\r\n\r\nThe `>>> cmd` header should come immediately before the command output to facilitate debugging & progress reporting.",
          "timestamp": "2021-04-09T11:23:24-07:00",
          "tree_id": "47c994ef4364361ef05e198b2fa6822b4c8f6f37",
          "url": "https://github.com/mariojonke/opentelemetry-python/commit/6f8c077fa5349d445358b879fc83c139a0c22cff"
        },
        "date": 1618306488182,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 30291.365589165536,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010560198249543315",
            "extra": "mean: 33.01270776506936 usec\nrounds: 5061"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 21853.90218636163,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011119753569939128",
            "extra": "mean: 45.758418403834085 usec\nrounds: 7531"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "way@whoop.com",
            "name": "Marcus Way",
            "username": "marcusway"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "300ce1bc601440e5560523296b426592f54bf7c5",
          "message": "Update example collector-config.yaml (#1805)\n\nIt seems that there have been some changes to the open-telemetry collector image that cause issues in running this example. I updated the config file to avoid these, but an alternative would be to pin the image to a specific version rather than using the `latest` tag.\r\n\r\nAnyway, the issues I ran into running the image with the given yaml file were:\r\n\r\n1.  Empty configuration for the OLTP receiver\r\n```Error: cannot load configuration: error reading receivers configuration for otlp: empty config for OTLP receiver```, which is fixed by adding the \r\n```protocols:\r\n    grpc:\r\n    http:\r\n```\r\nbit.\r\n\r\n2.  `unknown processors type \"queued_retry\" for queued_retry`. It looks like this processor was [removed](https://github.com/open-telemetry/opentelemetry-operator/issues/18) from the collector, so I just dropped the references to it.",
          "timestamp": "2021-05-02T15:28:39-07:00",
          "tree_id": "6a947f2bae4d0864fbafa8aeb36a84e73a67fd80",
          "url": "https://github.com/mariojonke/opentelemetry-python/commit/300ce1bc601440e5560523296b426592f54bf7c5"
        },
        "date": 1620018523736,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 23607.49390460866,
            "unit": "iter/sec",
            "range": "stddev: 0.0000167031612068681",
            "extra": "mean: 42.359430613038505 usec\nrounds: 4619"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 15017.458866917115,
            "unit": "iter/sec",
            "range": "stddev: 0.00019657477213905257",
            "extra": "mean: 66.5891619122701 usec\nrounds: 10061"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.6 - core": [
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
        "date": 1611759844569,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 19686.215023778925,
            "unit": "iter/sec",
            "range": "stddev: 0.000013004896075136378",
            "extra": "mean: 50.7969662422209 usec\nrounds: 1807"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 12614.28813561256,
            "unit": "iter/sec",
            "range": "stddev: 0.00001854935499749932",
            "extra": "mean: 79.2751829710317 usec\nrounds: 7728"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "christian.neumueller@dynatrace.com",
            "name": "Christian Neumüller",
            "username": "Oberon00"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6f8c077fa5349d445358b879fc83c139a0c22cff",
          "message": "Fix eachdist.py not printing invoked commands. (#1758)\n\nI observed the following pattern:\r\n```\r\n<output of cmd 1>\r\n<output of cmd 2>\r\n>>> cmd1\r\n>>> cmd2\r\n```\r\n\r\nThe `>>> cmd` header should come immediately before the command output to facilitate debugging & progress reporting.",
          "timestamp": "2021-04-09T11:23:24-07:00",
          "tree_id": "47c994ef4364361ef05e198b2fa6822b4c8f6f37",
          "url": "https://github.com/mariojonke/opentelemetry-python/commit/6f8c077fa5349d445358b879fc83c139a0c22cff"
        },
        "date": 1618306504371,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 14855.265004894067,
            "unit": "iter/sec",
            "range": "stddev: 0.000059698425274601515",
            "extra": "mean: 67.31620066491914 usec\nrounds: 603"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 10587.620926584925,
            "unit": "iter/sec",
            "range": "stddev: 0.000033862044625900145",
            "extra": "mean: 94.4499247691288 usec\nrounds: 3682"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "way@whoop.com",
            "name": "Marcus Way",
            "username": "marcusway"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "300ce1bc601440e5560523296b426592f54bf7c5",
          "message": "Update example collector-config.yaml (#1805)\n\nIt seems that there have been some changes to the open-telemetry collector image that cause issues in running this example. I updated the config file to avoid these, but an alternative would be to pin the image to a specific version rather than using the `latest` tag.\r\n\r\nAnyway, the issues I ran into running the image with the given yaml file were:\r\n\r\n1.  Empty configuration for the OLTP receiver\r\n```Error: cannot load configuration: error reading receivers configuration for otlp: empty config for OTLP receiver```, which is fixed by adding the \r\n```protocols:\r\n    grpc:\r\n    http:\r\n```\r\nbit.\r\n\r\n2.  `unknown processors type \"queued_retry\" for queued_retry`. It looks like this processor was [removed](https://github.com/open-telemetry/opentelemetry-operator/issues/18) from the collector, so I just dropped the references to it.",
          "timestamp": "2021-05-02T15:28:39-07:00",
          "tree_id": "6a947f2bae4d0864fbafa8aeb36a84e73a67fd80",
          "url": "https://github.com/mariojonke/opentelemetry-python/commit/300ce1bc601440e5560523296b426592f54bf7c5"
        },
        "date": 1620018531674,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 16315.270949830145,
            "unit": "iter/sec",
            "range": "stddev: 0.000015099184119778555",
            "extra": "mean: 61.29227047929663 usec\nrounds: 1294"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 10760.097102187296,
            "unit": "iter/sec",
            "range": "stddev: 0.000028780216852871982",
            "extra": "mean: 92.93596428574251 usec\nrounds: 6888"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.5 - core": [
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
        "date": 1611759842509,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 20476.068749651717,
            "unit": "iter/sec",
            "range": "stddev: 0.000004393641738207176",
            "extra": "mean: 48.837499630734015 usec\nrounds: 1355"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 13443.217972661456,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036982455754355205",
            "extra": "mean: 74.3869512518231 usec\nrounds: 5272"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.5 - exporter": [
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
        "date": 1611759859774,
        "tool": "pytest",
        "benches": [
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_simple_span_processor",
            "value": 1999.306457969684,
            "unit": "iter/sec",
            "range": "stddev: 0.00008314492410341044",
            "extra": "mean: 500.17344565350436 usec\nrounds: 92"
          },
          {
            "name": "exporter/opentelemetry-exporter-otlp/tests/performance/benchmarks/test_benchmark_trace_exporter.py::test_batch_span_processor",
            "value": 2983.699066726943,
            "unit": "iter/sec",
            "range": "stddev: 0.0009143027976707429",
            "extra": "mean: 335.1544434060435 usec\nrounds: 4064"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python pypy3 - core": [
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
        "date": 1611759870106,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 232755.63190284517,
            "unit": "iter/sec",
            "range": "stddev: 0.00005257348006716094",
            "extra": "mean: 4.296351464515416 usec\nrounds: 151516"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 159824.19924938394,
            "unit": "iter/sec",
            "range": "stddev: 0.00000710014921755051",
            "extra": "mean: 6.256874770507286 usec\nrounds: 111112"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "christian.neumueller@dynatrace.com",
            "name": "Christian Neumüller",
            "username": "Oberon00"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6f8c077fa5349d445358b879fc83c139a0c22cff",
          "message": "Fix eachdist.py not printing invoked commands. (#1758)\n\nI observed the following pattern:\r\n```\r\n<output of cmd 1>\r\n<output of cmd 2>\r\n>>> cmd1\r\n>>> cmd2\r\n```\r\n\r\nThe `>>> cmd` header should come immediately before the command output to facilitate debugging & progress reporting.",
          "timestamp": "2021-04-09T11:23:24-07:00",
          "tree_id": "47c994ef4364361ef05e198b2fa6822b4c8f6f37",
          "url": "https://github.com/mariojonke/opentelemetry-python/commit/6f8c077fa5349d445358b879fc83c139a0c22cff"
        },
        "date": 1618306698749,
        "tool": "pytest",
        "benches": [
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_span",
            "value": 178806.83253963286,
            "unit": "iter/sec",
            "range": "stddev: 0.000018015528772875267",
            "extra": "mean: 5.592627450510585 usec\nrounds: 149254"
          },
          {
            "name": "opentelemetry-sdk/tests/performance/benchmarks/trace/test_benchmark_trace.py::test_simple_start_as_current_span",
            "value": 85827.46498170654,
            "unit": "iter/sec",
            "range": "stddev: 0.00003866400130058474",
            "extra": "mean: 11.651282025085353 usec\nrounds: 169492"
          }
        ]
      }
    ]
  }
}