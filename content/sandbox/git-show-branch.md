---
title: git-show-branch
date: 2025-02-04
tags:
- git
draft: true
---

> [!quote]
> Show branches and their commits

```sh
$ git show-branch --more=25
[main]
...
[main~3]
[main~3^2]
...
[main~3^2~2^]
[main~4]
[main~5]
[main~5^2]
[main~6]
```
- `git log --online`과 유사한 결과를 얻기 위해 `show-branch`를 사용할 수 있음.
- 이 경우 `main~3^2~2^`와 같은 relative commit name[^1]이 어떤 commit ID[^2]를 의미하는지 직관적으로 알 수 없음.

[^1]: [[/sandbox/git-commit|git-commit]] 참조.
[^2]: absolute commit name

```sh
$ git rev-parse main~3^2~2^
8278f870221711c2116d3da2a0165ab00368f756
```
- `git rev-parse`를 사용하면 relative commit name을 absolute commit name으로 변환할 수 있음.


## References
- https://git-scm.com/docs/git-show-branch