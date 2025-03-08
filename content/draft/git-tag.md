---
title: git-tag
date: 
tags:
- git
draft: true
---

Git에서 tag는 lightweight tag와 annotated tag 두 가지.


- Lightweight Tag
	- object store에 저장되지 않음.
	- 보통 임시로 commit object에 라벨label을 붙일 때 사용.
- Annotated Tag
	- RFC 4880을 따라 서명sign되어 object store에 영구적으로 저장.
	- 일반적으로 특정 릴리즈release 버전을 만들 때 사용.

```sh
$ git tag -a v1.0 3ede462
```

## References