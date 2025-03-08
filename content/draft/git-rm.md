---
title: git-rm
date:
tags:
- git
draft: true
---

```
$ git rm <filename>
```
- `git add`와 동일하게 `git rm` 후에 `git commit` 필요.

파일 이름을 변경하는 방법 두 가지:
```
$ mv foo bar
$ git rm foo
$ git add bar
```
- `git rm`을 먼저 할 경우 foo 파일이 삭제되어 `mv` 명령으로 이름을 변경할 대상 파일이 사라지므로 주의.

또는 
```
$ git mv foo bar
```

git rm + git add 혹은 git mv 뒤에도 역시 git commit 필요.

> [!todo]
> 변경사항이 staging되는 것을 정리해야 할 것 같은데,


## References