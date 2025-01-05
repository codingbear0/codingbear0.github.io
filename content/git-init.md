---
title: git-init
date: 2024-07-14
tags:
- Git
draft: true
---

> [!quote]  Create an empty Git repository or reinitialize an existing one

- 새로운 local repository를 생성하거나 기존의 directory를 repository로 초기화[^1].
    - 대상 directory에 `.git/`이라는 이름의 hidden directory가 생성됨.
    - `.git/` 에는 [[/git|Git]]에서 사용하는 각종 정보가 저장.
    
[^1]: init 또는 convert

- 현재 directory를 Git repository로 바꾸려면<sub>convert</sub>:
    ```shellsession
    $ git init
    ```

- `main` branch를 함께 생성하려면
    ```shellsession
    $ git init -b main
    ```


### References
- [[/book-pro-git|Pro Git]]
- [[/book-version-control-with-git|Version Control with Git]]