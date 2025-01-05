---
title: Git Repository
date: 2024-07-15
tags:
- Git
draft: true
---

- [[/vcs-git|Git]]은 repository에 두 개의 data structure를 관리:
    - object store
    - index
- 이들 정보는 repository[^1]의 root에 위치한 `.git/`[^2]에 저장됨.

[^1]: 정확히는 working directory
[^2]: hidden directory


---
### from Version Control with Git
> [!quote] At the heart of Git’s repository implementation is the object store. It contains your original data files and all the log messages, author information, dates, and other information required to rebuild or restore any version or branch of the project to a specific state in time.
- object store에는 데이터 파일 원본과 로그 메시지 등 특정 시기의 프로젝트 상태를 복구할 수 있는 모든 정보 저장.
- 저장되는 object는 다음의 네 가지 타입<sub>type</sub>:
    | | |
    | --- | --- |
    | blob | 파일의 각 버전은 blob[^2]으로 표현. metadata 없이[^3] 순수하게 파일의 데이터만 저장. |
    | tree | 한 directory의 파일과 sub-directory의 목록, 이름과 OID[^4] 등 저장. |
    | commit | 각각의 변경 내역에 대한 metadata 정보. author, commit date, log message 등. |
    | tag | 특정 object, 보통은 commit에 사람이 읽을 수 있는<sub>human-readable</sub> 이름 할당.  |
- 저장 용량을 줄이기 위해 압축해 packfile에 저장.

[^2]: blob, binary large object
[^3]: 심지어 파일 이름도 포함되지 않음
[^4]: OID, Object IDentifier의 약자로 [[vcs-git|Git]]에서 object를 고유하게 식별하는 목적으로 사용

<BR />

> [!quote] The index stores binary data and $\cdots$ it provides a cached representation of all the blob objects that reflects the current state of the project you are working on.
- index는 지금 작업 중인 프로젝트의 현재 상태를 나타내는 blob object의 cached representation.
- working directory와 repository의 object store 사이에 잠시 저장되는 임시 정보[^5]:
    - staging directory라고도 부름.
    - merge에 주요 역할? #TODO

[^5]: 파일 상태로는 `modified`와 `committed` 사이의 `staged` 상태


### References
- [[/book-pro-git|Pro Git]]
- [[/book-version-control-with-git|Version Control with Git]]