---
title: homebrew
date: 2025-02-21
tags:
- terminal
draft: false
---

> [!quote] 
> The Missing Package Manager for macOS (or Linux)


background service를 관리할 수 있는 명령으로 `brew services`가 있는데,
```sh
$ brew services list
$ brew services start [service-name]
$ brew services stop [service-name]
$ brew services restart [service-name]
```
- 제공하는 명령은 `list`, `start`, `stop`, `restart` 정도. 예상 가능한 수준으로 간단.
- 추가로 상세 내용을 보고 싶다면 `--verbose` 추가.
- 더 이상 사용하지 않는 service를 제거하려면 `cleanup`.

> [!question]
> homebrew로 설치한 패키지에 대해서만[^1] 가능하겠지? 당연히?

> [!question]
> `cleanup`은 조금 애매한데, homebrew로 설치한 패키지를 삭제해도 service 관련 정보는 남아서 수동으로 삭제해줘야 한단 의미일까?

[^1]: 그리고 그 package가 background service를 지원할 때만.

## References
- https://brew.sh
