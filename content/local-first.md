---
title: Local First
date: 2024-07-04
tags:
- Terms
- Local First
draft: true
---

> [!quote] Local-first ideals include the ability to work offline and collaborate across multiple devices, while also improving the security, privacy, long-term preservation, and user control of data.
- Local-first? offline에서 작업할 수도 있고, 여러 장치<sub>device</sub>를 오가며 협업<sub>collaboration</sub>할 수도 있는 기능을 가짐.
- old-fashioned app[^1]과 cloud app의 중간즈음 어딘가?
    - old-fashioned app에서는 사용자의 데이터가 local에만 저장되므로, 데이터에 대한 완전한 ownership을 가짐
    - cloud app은 원활한? 협업<sub>collaboration</sub>기능 제공.

[^1]: i.e. local app

> [!quote] When data is stored on “someone else’s computer[^2], $\cdots Cloud apps are provided as a service; if the service is unavailable, you cannot use the software, and you can no longer access your data created with that software. If the service shuts down, even though you might be able to export your data, without the servers there is normally no way for you to continue running your own copy of that software.
- 중요한 건 사용자가 데이터에 대한 ownership을 갖는 것.

[^2]: “There is no cloud, it’s just someone else’s computer.”

<BR />

- 단순하게 내 데이터를 local 저장해서 ownership을 되찾는다의 의미를 넘어,
    - 중앙 집중적인 서버 없이 사용자간 협업[^3]이 가능하게 하는 것.
    - 이를 가능하게 하는 구조<sub>architecture</sub>, 동기화 알고리즘<sub>synchronization algorithm</sub>[^4] 등에 대한 포괄적인 개념.

[^3]: peer-to-peer로 구현하는 듯?
[^4]: [[crdt|CRDT]]

> [!note] 당연하게도 real-time collaboration을 어떻게 구현하느냐가 가장 어려운 부분.


---
### Comparison with [Offline-First](https://offlinefirst.org)
- 비슷한 용어로 offline-first가 있는데, 
    - offline-first는 서버와의 데이터 동기화가 기본, network이 불안정할 때 원활한 사용을 위해 local에 임시 저장.
    - $\to$ 따라서, network이 다시 연결되거나 안정되면 데이터 동기화가 우선적으로 실행됨.
- local-first는 기본적으로 모든 데이터를 local에 저장하고, 필요할 때만 network을 통한 동기화.

> [!note] local-first는 데이터의 ownership과 privacy가, offline-first는 availability가 주목적.

> [!note] 검색을 해보면 Android의 [Build an offline-first app](https://developer.android.com/topic/architecture/data-layer/offline-first)이 많이 보이는데, 역시 network 접속이 불안한 상황에서 앱의 사용성을 높이기 위해 local에’도’ 저장하는 data layer에 대한 이야기.


### References
- https://localfirstweb.dev
- [Local-first software - Peter Van Hardenberg](https://www.youtube.com/watch?v=KrPsyr8Ig6M)