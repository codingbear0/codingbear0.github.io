---
title: git config
date: 2024-06-28
tags:
- Git
draft: true
---


> [!quote] Get and set repository or global options

- [[git|Git]]의 설정 변경:
    ```shellsession
    $ git config <file-option> <name> <value>
    ```
    - <file-option>은 --local, --global, --system 중 하나
    - <name>은 user.name, user.email과 같은 설정 값의 이름.

- 설정 값의 확인:
    ```shellsession
    $ git config --list
    ```
    - `--list` 또는 `-l`
- 특정 항목의 설정 값만 확인하고 싶다면,
    ```shellsession
    $ git config user.name
    ```

- 설정 값 제거는 `--unset` 이용:
    ```
    $ git config --unset --global user.email
    ```


---
### Hierarchy of Configuration Files
- 사용되는 설정은 다음의 세 가지[^1]:
    1. `/etc/gitconfig`: 
        - 시스템의 모든 사용자와 모든 repository에 적용되는 설정.
        ```shellsession
        $ git config --system     
        ```

    2. `~/.gitconfig`,  `~/.config/git/config`:
        - 특정 사용자(i.e. 현재 사용자)의 모든 저장소에 적용되는 설정.
        ```shellsession
        $ git config --global
        ```

    3. `.git/config`:
        - 특정 저장소(또는 현재 작업 중인 프로젝트)에만 적용
        ```shellsession
        $ git config --local
        ```

> [!question] global configuration을 `~/.config/git/config`에만 저장하고 싶은데 방법이 있을까?

[^1]: 우선순위는 역순

- `user.name`과 `user.email`의 설정의 경우:
    - 매 commit 마다 수동으로 지정하거나[^2],
    ```shellsession
    $ git commit -m "log message" --author="Jon Loeliger <jdl@example.com>"
    ```

    - 환경 변수<sub>environment variable</sub> `GIT_AUTHOR_NAME`, `GIT_AUTHOR_EMAIL`을 이용해 지정할 수 있음.
    - 우선 순위는 수동 지정이 가장 높으며, `git config --local{:shellsession}` 보다도 우선 함.

[^2]: 이걸 원하는 사람은 없겠지만


### Alias

```shellseccion
$ git config --global alias.show-graph \
        'log --graph --abbrev-commit --pretty=oneline'
```


### Tip
- 설정 값이  여러 곳, 예를 들어 local과 global 두 곳, 에 존재하는 경우 어떤 값이 사용되고 있는지 확인하려면 `--show-origin`, `--show-scope` 활용:
    ```shellsession
    $ git config --show-origin rerere.autoUpdate
    ```
    
    ```shellsession
    $ git config --list --show-scope
    ```

- 설정 파일은 일반 text 파일로 내용을 쉽게 확인할 수 있음:
    ```shellsession
    $ cat .git/config
    ```

- editor  변경:
	```
	$ git config --global core.editor vim
	```


### References
- [[/book-pro-git|Pro Git]]
- [[/book-version-control-with-git|Version Control with Git]]


