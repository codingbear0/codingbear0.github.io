---
title: zoxide
date: 2025-02-28
tags:
- terminal
- draft: false
---

> [!quote]
> zoxide is a smarter cd command, inspired by z and autojump.

`cd` 명령을 더 편리하게 사용할 수 있는 유틸로 특별한 설명이 필요없을 정도로 사용법이 단순해서 그냥 `cd` 대신 `z`를 사용하면 된다.

```sh
z foo              # cd into highest ranked directory matching foo
z foo bar          # cd into highest ranked directory matching foo and bar
z foo /            # cd into a subdirectory starting with foo

z ~/foo            # z also works like a regular cd command
z foo/             # cd into relative path
z ..               # cd one level up
z -                # cd into previous directory
```

조금 특별한 기능으로 `zi`가 있는데, 특별히 사용할 일은 거의 없을 듯. 
```sh
zi foo             # cd with interactive selection (using fzf)
```

> [!question] 
> [[/sandbox/fzf|fzf]]가 설치되어 있지 않으면 동작하지 않겠지?


---
## Installation
```sh
$ brew install zoxide
```

## Configuration
[fish] shell인 경우 config 파일에 아래 내용 추가:
```sh title="~/.config/fish/config.fish"
set -gx _ZO_DATA_DIR ~/.cache/zoxide
set -gx _ZO_ECHO 1
set -gx _ZO_RESOLVE_SYMLINKS 1
zoxide init fish | source
```

- `zoxide init`에 `--cmd cd`를 추가할 경우 `cd` 명령을 [[/sandbox/zoxide|zoxide]]로 대체.
- 내부적으로 path 정보에 대한 database를 만드는 듯?해서 일관성을 위해 `~/.cache/zoxide`로 설정.

> [!bug]
> 단축키 `z`가 의외로 손이 잘 안가네.


## References
- https://github.com/ajeetdsouza/zoxide