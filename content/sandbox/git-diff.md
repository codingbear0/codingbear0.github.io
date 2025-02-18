---
title: git-diff
date: 2025-01-28
tags:
- git
draft: true
---

> [!quote]
> git-diff - Show changes between commits, commit and working tree, etc

```sh
$ git diff c149e12e89a9c035b9240e057b592ebfc9c88ea4 \
           521edbe1dd2ec9c6f959c504d12615a751b5218f
```
- 두 개의 commit의 차이점을 확인.
- 당연히 앞 7글만 사용 가능. e.g. `git diff c149e12 521edbe`.


## References
- https://git-scm.com/docs/git-diff