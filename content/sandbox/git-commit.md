---
title: git-commit
date: 2025-01-28
tags:
- git
draft: true
---

> [!quote]
> Record changes to the repository

모든 commit은 명시적으로 사용자에 의해 만들어지지만, 예외적으로 git 자체에 의해 만들어지는 경우도.
- 예를 들면, merge

commit을 참조하는 법은 크게 두 가지, absolute commit name과 relative commit name.
- absolute commit name:
	- explicit. 
	- `34043c95636aee319d606a7a380697cae4f1bfcc`와 같은 unique한 40자리 16진수 SHA1 commit ID를 직접 이용.
- relative commit name:
	- implicit.
	- `HEAD`, `HEAD^2` 처럼 상대 경로를 이용.
	- relative commit name 지정을 위해 많이 사용하는 두 개의 특수문자는 caret `^`과 tilde `~`.


implicit한 방법으로 ref, symref 두 가지 참조 방식이 더 있는데,
- ref:
	- `.git/ref`의 디렉터리 tree 구조를 사용하는 방식.
		- `refs/heads/ref`: for local branch
		- `refs/remotes/ref`: for remote tracking branch
		- `refs/tags/ref`: for tag
- symref[^1]:
	- 마치 symbolic link처럼 ref를 가리키는 방식의 참조. 
	- 대표적으로 `HEAD`는 `refs/heads/main` ref를 의미.
	- `HEAD` 이외에 `ORIG_HEAD`, `FETCH_HEAD`, `MERGE_HEAD`, `CHERRY_PICK_HEAD` 등.



[^1]: symbolic ref






> [!quote]
> A commit is a snapshot capturing the current state of a repository at a moment in time.

git-add로 staging된 파일들을 repository commit history로 저장.
```
git commit -m "Initial contents of my_website"
```
- commit log message, author 등의 metadata도 함께 기록.
- `-m` 없이 `git commit`만 실행할 경우 외부 에디터를 통해[^1] log message 추가 가능.
	- 사용될 외부 에디터는 [[environment-variable|환경 변수]] `$GIT_EDITOR`를 통해 설정 가능.
	- shell 환경 변수 `$VISUAL`과 `$EDITOR`가 설정된 경우 `$GIT_EDITOR`에 우선함.
	- 아무 것도 설정되어 있지 않은 경우[^2] [vi] 사용.

> [!todo]
> shell 환경 변수 `$VISUAL`과 `$EDITOR`가 설정된 경우 우선 순위는 확인 필요.

[^1]: 이 경우 interactive editor session을 통해 log message를 추가한다고 표현.
[^2]: `$GIT_EDITOR`, `$VISUAL`, `$EDITOR` 모두 설정되지 않은 경우



```sh
$ git commit -m "Fix a typo."
$ git commit --message="Fix a typo."
```

```sh
$ git commit -m "summary" -m "message"
```

`git add`를 건너 뛰고 바로 commit 가능:
```sh
$ git commit <filename> -m "message"
```
- 정확히는 건너 뛰거나 생략하는 것이 아니고 `git commit` 하나로 `git add`와 `git commit`을 함께 실행하는 것.


> [!question] 
> author와 committer가 다른 경우는 어떨 때지?

## References
- https://git-scm.com/docs/git-commit