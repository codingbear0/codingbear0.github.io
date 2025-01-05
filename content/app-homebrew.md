---
title: Homebrew
date: 2024-06-20
tags:
- Shell
draft: true
---


> [!quote] The Missing Package Manager for [[macos|macOS]] (or [[linux|Linux]])

- [[/macos|macOS]]를 위한 package manager:
    - 다양한 프로그램을 CLI 명령으로 설치 가능.


> [!todo] `--cask`?


---
### Usage
- [[shell-fish|Fish]]를 위한 `completions` 파일은 아래 경로에서 확인:
    ```shellscript
    /opt/homebrew/share/fish/vendor_completions.d/
    ```

- `Brewfile` 생성:
    ```shellscript
    $ brew bundle dump
    ```
    
    또는,
    ```shellscript
    $ brew bundle dump --file=./Brewfile
    ```
    
    또는,
    ```shellscript
    brew bundle dump --force
    ```
    

### References
- https://brew.sh