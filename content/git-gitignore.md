---
title: .gitignore
date: 2024-06-23
tags:
- Git
draft: false
---


- `.gitignore` 파일에 무시할 파일 패턴 추가.
    - 하나 이상의 `.gitignore` 파일을 두는 것도 가능.
    - `.gitignore` 정책은 현재 `.gitignore` 파일이 위치한 디렉토리와 그 하위 디렉토리에 적용

> [!note] [[gitignore-io|gitignore.io]]를 이용해 큰 틀을 잡고, 예외적인 파일들의 패턴만 추가하는 방식이 편리한 듯. 만들어진 내용은 조금 과한 느낌이 들기도 하지만.

- `.gitignore` 규칙:
	- 아무것도 없는 라인이나, `#`으로 시작하는 라인은 무시.
	- [[glob-pattern|Glob Pattern]]을 사용하고 이는 전체 `working tree`에 반복<sub>recursively</sub> 적용.
	- `/`로 시작하면 하위 디렉토리에 반복 적용되지 않음.
	- `/`로 끝나면 디렉토리를 의미.
	- `!`로 시작하는 패턴의 파일은 무시하지 않음.

### Examples
- ignore all `.a` files:
    ```shellscript
    *.a
    ```

- but do track `lib.a`, even though you're ignoring `.a` files above:
    ```shellscript
    !lib.a
    ```
	
- only ignore the `TODO` file in the current directory, not subdir `/TODO`:
    ```shellscript
    /TODO
    ```
	
- ignore all files in any directory named build:
    ```shellscript
    build/
    ```
	
- ignore doc/notes.txt, but not `doc/server/arch.txt`:
    ```shellscript
    doc/*.txt
    ```

- ignore all `.pdf` files in the `doc/` directory and any of its subdirectories:
    ```shellscript
    doc/**/*.pdf
    ```


### References
- [[/book-pro-git|Pro Git]]