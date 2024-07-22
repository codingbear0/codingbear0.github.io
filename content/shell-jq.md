---
title: jq
date: 2024-07-08
tags:
- Shell
- JSON
draft: false
---


> [!quote] jq is a lightweight and flexible command-line JSON processor.

- [[c|C]]로 개발된 CLI [[/json|JSON]] parser.
- console 에서 pipe와 조합해 사용:
    ```shellscript
    $ curl 'https://api.github.com/repos/jqlang/jq/commits?per_page=5' | jq '.[0]
    ```

<BR />

- 대체품으로 [jaq](https://github.com/01mf02/jaq)도 있는데,
    - [[rust|Rust]]로 개발 된 `jq`의 개선 버전인 듯.
    - 아직 개발 초기라 `date/time filter` 같은 기능을 지원하지 않고 [[linux|Linux]]에서도 사용 불가능.

> [!question] 성능은 jq vs. jaq 어떤게 더 나을까?


---
### Install
```shellscript
$ brew install jq
```

### Manual
#TODO



### References
- https://jqlang.github.io/jq/
- https://github.com/jqlang/jq
- https://github.com/01mf02/jaq