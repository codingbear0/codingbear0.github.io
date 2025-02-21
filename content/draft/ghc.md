---
title: The Glasgow Haskell Compiler
date: 2025-01-31
tags:
- haskell
draft: true
---

> [!quote]
> GHC is a state-of-the-art, open source compiler and interactive environment for the functional language [Haskell].

The Glasgow Haskell Compiler, 보통 GHC라고 줄여 부르는 가장 많이 쓰이는 [Haskell] compiler.


## Installation
[mise]를 사용한다면 간단하게,
```
$ mise use haskell@9.12-latest
```
- 설치는 간단한데 시간은 오래 걸림.


## Interactive Mode
‘GHCi’라고 부르는 interactive mode는 일반적으로 알고 있는 [REPL]로 `ghci` 명령을 통해 사용 가능:
```
$ ghci
```




## References
- https://www.haskell.org/ghc/
- https://downloads.haskell.org/ghc/latest/docs/users_guide/