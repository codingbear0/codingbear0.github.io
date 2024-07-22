---
title: CRDT
date: 2024-07-19
tags:
- Terms
draft: false
---

- CRDT, Conflict-free Replicated Data Types:
    - [[/local-first|Local-First]] 구현을 위해 분산<sub>distributed</sub> 환경에서 복제된<sub>replicated</sub> 다수의 데이터 간 동기화를 위한 data structure.
    - 2011년 Marc Shapiro, Nuno Preguiça, Carlos Baquero and Marek Zawirski에 의해 만들어짐.

<BR />

- 주요 기능:
    1. The application can update any replica independently, concurrently and without coordinating with other replicas.
    2. An algorithm(itself part of the data type) automatically resolves any inconsistencies that might occur.
    3. Although replicas may have different state at any particular point in time, they are guaranteed to eventually converge.

> [!question] 말은 쉬운데 이게 간단하게 되는건가?


---
### from [[redis|Redis]]
- [Diving into Conflict-free Replicated Data Types](https://redis.io/blog/diving-into-crdts/) 라는 글에서, CRDT 언급:

#TODO


### References
- https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type
- [Conflict-free Replicated Data Types](https://pages.lip6.fr/Marc.Shapiro/papers/RR-7687.pdf)



