---
title: Nushell
date: 2025-03-25
created: 2025-03-25
updated:
tags:
- shell
draft: false
---

> [!quote]
> A new type of shell

소개글에 “A new type of shell”이라니 궁금하지 않을 수 없어 냄새만 살짝 맡아보기로 했다. 아직 [fish]도 잘 모르는데.

설치는 늘 그렇듯 [homebrew]로:
```sh
$ brew install nushell
```

그리고 login shell로 설정하려 했으나 노란색으로 보이는 경고 문구:
> [!quote]
> Nu is not intended to be POSIX compliant. Be aware that some programs on your system (or their documentation) might assume that your login shell is POSIX compatible. Breaking that assumption can lead to unexpected issues. See Configuration - Login Shell for more details.

POSIX 호환이 아니라니, 살짝 무서워서 login shell로 설정하지 않고 사용법을 공부할 때만 nushell로 바꿔보기로 했다. 실행은 `nushell`이 아니라 `nu`.



## References
- https://www.nushell.sh