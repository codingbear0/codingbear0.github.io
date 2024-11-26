---
title: Version Control with Git
date: 2024-06-22
tags:
- Book
- Git
draft: false
---

| | |
| --- | --- |
| 원제 | Version Control with Git, 3/e |
| 지은이 | Prem Kumar Ponuthorai,  Jon Loeliger |
| 출판사 | O’Reilly, 2022 |

- 표지의 박쥐 그림이 인상적인 책:
    - 부제는 조금 긴 “Powerful Tools and Techniques for Collaborative Software Development”.


#TODO
---

- [[/git-config|git-config]]
- [[/git-init|git-init]]
- [[/git-clone|git-clone]]
- [[/git-add|git-add]]
- [[/git-status|git-status]]
- [[/git-commit|git-commit]]
- [[/git-log|git-log]]
- [[/git-diff|git-diff]]

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
    ```shellscript
    $ git checkout main.c
    ```
    - checkout the file named “main.c”:
    ```
    $ git checkout -- main.c
    ```


- working directory:
    - `git init`으로 초기화한 `.git` directory가 있는 directory.
    - working directory에서 파일을 추가﹒수정 등의 변경 내역은 [[.git/Git]]에 의해 `.git` directory 저장.

### References

