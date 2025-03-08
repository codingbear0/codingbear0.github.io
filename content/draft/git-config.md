---
title: git-config
date:
tags:
- git
draft: true
---

> [!quote] Get and set repository or global options


1. 미리 `git config`로 자신의 identity 정보를 설정해 놓거나,
```sh
$ git config user.name "guest"
$ git config user.email "guest@example.com"
```

2. `$GIT_AUTHOR_NAME`, `$GIT_AUTHOR_EMAIL` [[environment-variable|환경 변수]]<sub>environment variable</sub>로 설정하거나,

3. 아니면, 매 `commit` 마다 `--author`를 추가하거나.
	```
	$ git commit -m "log message" --author="guest <guest@example.com>"
	```

[^1]: `git commit --author`는 다른 모든 설정 값보다 우선함. 다시말해, 다른 설정 값들을 override.


## Essential Settings
현재 사용 중인 주요 설정 값들만 정리.


## Alias

> [!warning] 
> To avoid confusion and troubles with script usage, aliases that hide existing Git commands are ignored.
`git log`를 동일한 이름으로 `log` 라는 alias를 만들면 무시한다고.


## Hierarchy of configurations
세 층위의 설정 파일이 존재하는데,

| | | |
| --- | --- | --- |
| 1 | `$GIT_DIR/config`[^1] | repository specific |
| 2 | `$HOME/.gitconfig` | user-specific |
| 3 | `/etc/gitconfig` | system-wide specific |

- 적용 범위<sub>scope</sub>가 넓을 수록 우선 순위가 낮아짐.
- 우선 순위는 3 < 2 < 1 순서:
	- 즉, `/etc/gitconfig`와 `.git/config`에 같은 값이 설정되어 있는 경우 repository specific인 `.git/config`의  설정이 우선함[^1].
- 적용 범위는 반대로 1 < 2 < 3의 순서.

[^1]: 일반적으로 repository의 `.git/`.
[^1]: user와 system specific 설정 값을 override.

## Set
설정의 적용 범위에 따라 `--system`, `--global` 또는 `--local` 옵션 추가.
```sh
# /etc/gitconfig
$ git config --system user.name "<username>"

# $HOME/.gitconfig
$ git config --global user.name "<username>"

# $GIT_DIR/config
$ git config --local user.name "<username>"
```
- scope 옵션을 생략하면 `--local`.

> [!note]
> 이 밖에도 `extensions.worktreeConfig`가 설정되어 있을 때만 사용되는 `--worktree`나 특정 설정 파일을 지정해 사용하는 `--file`도 있지만, 쓸 일이 있을지?


## Get
```sh
$ git config -l
```
- `--list` 도 가능.

적용 범위나 어떤 설정 파일에 저장되어 있는지 확인하려면, `--show-scope`와 `--show-origin` 사용.
```sh
$ git config -l --show-scope --show-origin
```
- `--show-scope`, `--show-origin`은 함께 사용하거나 개별 사용도 가능.

> [!note]
> `--show-scope`만 사용하면 될 듯. `--show-origin`은 설정파일의 경로가 표시되어 더 복잡한 느낌.


## Unset
쓸 일이 있을까 싶지만,
```sh
$ git config --unset --global user.email
```

> [!warning] 
> 사용할 때 scope 옵션을 잊지 말자.

## References
- https://git-scm.com/docs/git-config