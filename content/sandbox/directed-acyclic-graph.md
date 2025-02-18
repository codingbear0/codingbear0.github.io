---
title: Directed Acyclic Graph
date: 2025-02-04
tags:
- algorithms
- graph
draft: true
---

이름에서 알 수 있듯, directed 방향성이 있고 acyclic 순환 사이클이 없는 graph[^1]. 
- 우리말로는 ‘유향 비순환 그래프’.
- [tree]가 DAG의 특수한 형태.

[^1]: 어느 한 node에서 출발하면 다시 그 node로 돌아올 수 없음.

> [!question]
> 검색해 보면 blockchain 관련 글이 많이 보이는데 왜지?

## from [[/sandbox/book-version-control-with-git|Version Control with Git]]
> [!quote] 
> Git implements the history of commits within a repository as a DAG.
- Git 내부적으로 commit history 저장을 위해 DAG를 활용한다고 기술.
- DAG의 주요 속성에 대해 간략하게 언급.


## References
- https://en.wikipedia.org/wiki/Directed_acyclic_graph
- https://www.youtube.com/watch?v=eL-KzMXSXXI
