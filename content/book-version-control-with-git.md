---
title: Version Control with Git
date: 2024-06-22
tags:
- book
- git
draft: false
---

| | |
| --- | --- |
| 원제 | Version Control with Git, 3/e |
| 지은이 | Prem Kumar Ponuthorai,  Jon Loeliger |
| 출판사 | O’Reilly, 2022 |

표지의 박쥐 그림이 인상적인 책.
- 부제는 “Powerful Tools and Techniques for Collaborative Software Development”.
- 총 18 챕터로 구성:
	- Git 기본 사용법만 익히려면 **Part III**[^1]까지만.
	- **Part IV**[^2] 부터는 필요할 때 찾아봐도 될 듯.

[^1]: Ch. 12 까지.
[^2]: Ch. 13 부터 Ch. 18 까지.


<!--
Git Command는 다음의 여섯 가지 카테고리로 구분 가능[^1]:
1. main porcelain commands
2. ancillary commands
3. low-level commands
4. external commands
5. commands that act as a bridge with a selected version control tool(interacting with other commands)
6. command aliases

> [!note] 주로는 main procelain. 가끔 ancillary와 low-level 정도만 사용하고 나머지(4번과 5번)는 거의 쓸 일이 없을 듯?

[^1]: `git help -a`

- [Lazygit]
- [[/gitu|Gitu]]

## Basic Usage


---

## Basic Commands
다 정리할 필요는 없어 보이고[^1], 명령 중 잘 까먹거나 유용한 옵션 위주로 정리.

- [git-config]
- [git-init]
- [git-add]
- [git-commit]
- [git-status]
- [git-log]

[^1]: [[book-pro-git|Pro Git]]처럼 무료로 공개된 책도 있고, 검색만으로도 많은 자료를 찾을 수 있으므로.


## SHA1
- SHA1, hash, object ID 등으로 불림.
- 160-bit, 40자리 16진수로 표현.
- 대부분 40자리 전체 ID 대신 앞의 7자리만 사용해도 무방.

SHA1 hash 값은 같은 파일[^1]에 대해 항상 동일한 값을 가짐.
- 같은 파일[^1]이라면 서로 다른 디렉터리에 있더라도, 심지어 서로 다른 머신이라도 항상 동일한 값.
- 그래서 global unique identifier로 사용 가능.


[^1] 정확히는 같은 파일 content.

파일의 내용이 변경되면 파일의 content로 부터 SHA1 hash 계산하고 동일한 SHA1 값을 가지는 파일이 저장되어 있지 않다면, 해당 파일을 Blob으로 저장.
- 만약 동일한 content라면 같은 SHA1 hash 값을 가짐 $\to$ 하나의 파일만 blob object로 저장.
- 파일 내용은 blob object로 파일 이름과 경로 등의 정보는 tree object로 저장

파일 이름name이나 변경 사항difference만 저장하는게 아니라 파일의 content를 통째로 저장하는 비효율을 어떻게 해결?
- 약간의 수정만 있어도 파일 전체를 새로 저장해야 하는데? 
- [zlib]를 써서 압축한다고.




--------------------------------------------------------------------
--------------------------------------------------------------------
--------------------------------------------------------------------
--------------------------------------------------------------------
--------------------------------------------------------------------
--------------------------------------------------------------------
--------------------------------------------------------------------
--------------------------------------------------------------------
# git-config
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

-------------------------------------------------------
-------------------------------------------------------

Blob, **b**inary **l**arge **ob**ject




--------------------------------------------------------------------------------------------------------------
### git-init

$ mkdir ~/my_website
$ cd ~/my_website
$ echo 'My awesome website!' > index.html

`my_website/`를 Git repository로 바꾸려면, `git init` 실행
```
$ git init -b main
```
- Git repository의 root에 숨겨진 `.git/` 생성.
	- 모든 revision 정보와 metadata 들이 저장되는 곳.
- `my_website/` 는 `working direcotry`라 부름.
	- 파일의 현재 버전이 저장되는 곳.
	- working directory에서 파일을 변경하거나 새로운 파일을 추가하면, 그 변경사항들은 `.git/`에 저장됨.


----------------------------------------------------------------------------------------------------------------------------------------
### git-add
working directory 안의 파일을 수정하거나 추가한 뒤에 해당 변경사항을 저장<sub>deposit</sub>하고 싶다면, 명시적으로 `git add <filename>`를 사용.
```
$ git add index.html
```
파일의 상태가 `staging` 상태로 변경됨.


----------------------------------------------------------------------------------------------------------------------------------------
### git-commit
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


--------------------------------------------------------------------
--------------------------------------------------------------------
### git-log
repo history[^1]를 확인할 수 있는 명령.
- 개별 commit log는 author, email 주소, commit 시간, log message 그리고 commit ID로 구성.
- 

가장 간단하게는 다음과 같이:
```
$ git log
```
- 개별 commit history를 순서대로 출력.
- 상세한 정보가 표시되지만 history가 많을 경우 내용 확인이 어려움.

```
git log --oneline
```
- 각 commit history마다 한 줄로 출력.
- 단순하게 commit ID와 log message만 표시.


현재 brach의 history만 `--oneline`처럼 간단하게 보고 싶다면,
```
git show-branch --more=10
```
- `show-brach`의 다른 활용 방법들은 [git-show-branch|git show-branch] 참조.

특정한 하나의 commit history를 상세하게 보고 싶다면,
```
$ git show <commit ID>
```
- `<commit ID>`를 생략할 경우 `HEAD` commit의 정보 표시.
- commit ID는 ID 전체[^2]가 아닌 첫 7글자만 사용해도 무방.

[^1]: repository commit history.
[^2]: 40글자.


----------------------------------------------------------------------------------------------------------------------------------------
### git-diff
두 개의 commit의 차이점을 확인하고 싶다면,
```
$ git diff c149e12e89a9c035b9240e057b592ebfc9c88ea4 \
           521edbe1dd2ec9c6f959c504d12615a751b5218f
```


### git-rm
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

--------------------------------------------------------------------
--------------------------------------------------------------------
## git-tag
tag는 lightweight tag와 annotated tag 두 가지.


### Lightweight Tag
object store에 저장되지 않음.
- 보통 임시로 commit object에 라벨label을 붙일 때 사용.


### Annotated Tag
RFC 4880을 따라 서명sign되어 object store에 영구적으로 저장.
- 일반적으로 특정 릴리즈release 버전을 만들 때 사용.

```sh
$ git tag -a v1.0 3ede462
```
----------------------------------------------------------------------------------------------------------------------------------------
## git-clone
## git-status
```sh
$ git --help subcommand
$ git subcommand --help
$ man git-subcommand
```
-->

<!--
- 도움말은 다음과 같이 다양한 조합 가능:
    ```shellsession
    $ git help {subcommand}
    $ git --help {subcommand}
    $ git {subcommand} --help
    $ main git-{subcommand}
    ```

> [!quote] Finally, you can separate options from a list of arguments via the bare double dash convention. For instance, use the double dash to contrast the control portion of the command line from a list of operands, such as filenames:
- bare double dash `--`를 argument 사이에 넣어, argument와 option을 분리할 수 있음.
- 다음의 두 명령은 다른 것,
    - checkout the tag named “main.c”:
    ```sh
    $ git checkout main.c
    ```
    - checkout the file named “main.c”:
    ```sh
    $ git checkout -- main.c
    ```

- working directory:
    - `git init`으로 초기화한 `.git` directory가 있는 directory.
    - working directory에서 파일을 추가﹒수정 등의 변경 내역은 [[.git/Git]]에 의해 `.git` directory 저장.

### References
-->




<!--
--------------------------------------------------------------------
--------------------------------------------------------------------
---
title: Environment Variable
date: 2025-01-28
tags:
- terminal
- shell
draft: false
---

> [!quote]
> An environment variable is a user-definable value that can affect the way running processes will behave on a computer. Environment variables are part of the environment in which a process runs.

environment variable, 환경 변수라 부르며 process의 실행에 영향을 미칠 수 있는 사용자 정의 값.

> [!quote] In all Unix and Unix-like systems, as well as on Windows, each process has its own separate set of environment variables. By default, when a process is created, it inherits a duplicate run-time environment of its parent process, except for explicit changes made by the parent when it creates the child.
- 대표적인 환경 변수로는 `$PATH`, `$HOME` 등이 있음.
- process 마다 독립적으로 할당된 메모리 공간에 환경 변수 값을 저장하며, child process가 생성될 때 이 값을 상속[^1].
	- 따라서 child process에서 변수 값을 변경하더라도 parent process의 값은 변하지 않음.

> [!todo]
> 보통 shell의 configuration file, 예를 들면 .bashrc 같은 설정 파일에 환경 변수를 정의하는데, 그럼 shell에서 이 설정파일을 읽어 OS에 환경 변수를 전달하고 OS는 process가 새로 fork될 때마다 전달된 환경 변수를 process의 메모리 공간에 설정하는 듯? 이건 OS 쪽에서 추가 확인 필요.

[^1]: child process로 값이 상속되지 않도록 설정하는 것도 가능.


설정된 값은 보통 shell에서 `echo` 명령을 통해 확인 가능:
```
$ echo $HOME
```

환경 변수를 설정하는 방법은 기본적으로 key-value 쌍<sub>pair</sub>을 이용하는데, shell 마다 구체적 방법이 조금씩 상이:
- [bash]
	```
	$ export NAME=value
	```
- [[/fish|fish]]
	```
	$ set -gx NAME value
	```
	
## References
- https://en.wikipedia.org/wiki/Environment_variable	


--------------------------------------------------------------------
--------------------------------------------------------------------
---
title: fish
date:
tags:
- terminal
- shell
draft: false
---

> [!quote]
> fish, the **f**riendly **i**nteractive **sh**ell

2005년 공개된 shell. 
- 엄밀하게 말하면 fish shell 이 아니라 그냥 fish 라고 불어야 할 듯?[^1]
- 최근의 유행에 맞춰 C++에서 Rust로 전환.
	- Rust로의 전환은 2023년 1월에 공지. 약 2년의 기간 소요.
	- 2024년 12월 4.0b1 버전을 Rust로 릴리즈 발표[^2].

[^1]: fish 의 ’sh’가 이미 ‘shell’을 의미하고 있으므로, fish shell’은 역전 앞’의 느낌.
[^2]: [fish-shell 4.0b1, now in Rust](https://fishshell.com/blog/fish-4b/)


- [fish-set|set]


## References
- [Fish 4.0: The Fish of Theseus](https://fishshell.com/blog/rustport/)


--------------------------------------------------------------------
--------------------------------------------------------------------
---
title: fish-set
date: 2025-01-28
tags:
- terminal
- shell
draft: false
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
-->