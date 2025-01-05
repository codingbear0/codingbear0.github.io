---
title: Plan 9
date: 2024-07-11
tags:
- Operating System
draft: true
---

- Bell Labs에서 1992년 개발한 분산<sub>distributed</sub> 운영체제:
    - 결국엔 UNIX를 대체하지 못하고 2002년 개발 종료.
    - 마지막 공식 릴리즈는 2015년.
    - 초기 개발은 Rob Pike와 [[/person-ken-thompson|Ken Thompson]] 등이 참여.

<BR /> 

- Plan 9 실행 화면:

    ![[/media/01J34V9127AD7FC67509XK4EDX.gif|512x384]]
    *from [Plan 9 from Bell Labs](https://plan9.io/plan9/)*

> [!note] 아기자기하네. 😆

<BR /> 

> [!quote] Plan 9 is a distributed operating system, designed to make a network of heterogeneous and geographically separated computers function as a single system. $\cdots$ The foundations of the system are built on two ideas: a per-process name space and a simple message-oriented file system protocol.
- 말이 복잡한데, 간단하게 정리하면:
    - Plan 9은 지리적으로 떨어져 있는 분산된 컴퓨터들을 하나의 단일 시스템으로 동작하게 하는 운영체제.
    - 이를 위해, 프로세스<sub>process</sub>들은 각각의 namespace를 가지고,
        - 서비스를 제공하는 프로세스는 그 서비스를 사용할 프로세스의 namespace에 가상의 파일<sub>virtual file</sub>을 제공[^1].
        - 서비스를 사용하는 행위는 가상 파일에 대한 I/O 연산이며, 이것은 곧 프로세스 간의 [[ipc|IPC]].
    - 분산된 프로세스들 간의 서비스를 제공 및 사용을 위해[^2] 정의한 것이 9P protocol[^3].

[^1]: service-as-files
[^2]: 다르게 표현하면, ‘가상의 파일을 제공하고 파일에 대한 I/O 즉, 프로세스 간 IPC를 위해’
[^3]: 후에 9P2000으로 이름 변경


> [!question] 이것보다 더 깊이 이해하기엔, 공부해야 할 것이 많아서 수박은 핥기는 이 정도로만.


### References
- https://plan9.io/plan9/
- https://en.wikipedia.org/wiki/Plan_9_from_Bell_Labs