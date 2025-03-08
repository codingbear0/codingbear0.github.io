---
title: fish-set
date: 
tags:
- terminal
- shell
draft: true
---

set - display and change shell variables

Synopsis
```sh
set
set (-f | --function) (-l | local) (-g | --global) (-U | --universal)
set [-Uflg] NAME [VALUE ...]
set [-Uflg] NAME[[INDEX ...]] [VALUE ...]
set (-a | --append) [-flgU] NAME VALUE ...
set (-q | --query) (-e | --erase) [-flgU] [NAME][[INDEX]] ...]
set (-S | --show) [NAME ...]
```

주요 옵션은,
- `-U` or `--universal`
	Sets a universal variable. The variable will be immediately available to all the user’s fish instances on the machine, and will be persisted across restarts of the shell.

- `-l` or `--local`
	Sets a locally-scoped variable in this block. It is erased when the block ends. Outside of a block, this is the same as --function.

- `-g` or `--global`
	Sets a globally-scoped variable. Global variables are available to all functions running in the same shell. They can be modified or erased.

- `--export` or `-x`
	Causes the specified shell variable to be exported to child processes (making it an “environment variable”).

- `--unexport` or -u
	Causes the specified shell variable to NOT be exported to child processes
	
	
보통 [Bash] 같은 shell 에서의 환경변수 설정은,
```
export NAME=value
```

fish에서는 변수의 적용 범위에 따라 `universal`, `local`, `global`과 `-x`를 함께 사용:
```
$ set -Ux NAME value
$ set -lx NAME value
$ set -gx NAME value
```

설정된 모든 `global` 환경 변수는 NAME과 value 없이 다음과 같이:
```
$ set -gx
```

## References
- https://fishshell.com/docs/current/cmds/set.html