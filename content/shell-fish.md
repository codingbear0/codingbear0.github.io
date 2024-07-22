---
title: Fish
date: 2023-07-28
tags:
- Shell
draft: false
---


> [!quote] fish is a smart and user-friendly command line shell for Linux, macOS, and the rest of the family.
- [[macos|macOS]]에 기본으로 설정되는 zsh 대신 사용 중인 shell:
    - 일상적으로 사용하는덴 딱히 더 좋거나 나쁜 점을 느끼긴 어려운 듯.

> [!note] [[/cplusplus|C++]] 코드를 [[rust|Rust]]로 다시 재구현<sub>rewrite</sub>한다는 얘기가 있었는데, [GitHub](https://github.com/fish-shell/fish-shell)을 확인해 보니 Rust 70.9%로 완료된 듯?


---
### Configuration
- [[shell-less|less]]:
    - `less -NMIR{:shell}`
#TODO

### Troubleshooting
- SSH keygen:
    - GitHub manual에 있는 아래의 명령은 동작하지 않음:
        ```shellscript
        $ eval "($ssh-agent -s)"
        ```
    - 대신 이렇게,
        ```shellscript
        $ eval (ssh-agent -c)
        ```


### References
- https://fishshell.com
- https://github.com/fish-shell/fish-shell