---
title: Julia
date: 2024-06-22
tags:
- Programming Language
- Julia
draft: true
---

- 2012년 개발된, 주로 수치 분석과 컴퓨터 과학 분야에서 쓰이는 언어:
    - [[tiobe-index|TIOBE index]] 순위[^1]는 33위.

[^1]: 2024년 6월 기준.

- 다음은 Julia Document에서 주장하는 장점들:
    - Free and open source (MIT licensed)
    - User-defined types are as fast and compact as built-ins
    - No need to vectorize code for performance; devectorized code is fast
    - Designed for parallelism and distributed computation
    - Lightweight "green" threading (coroutines)
    - Unobtrusive yet powerful type system
    - Elegant and extensible conversions and promotions for numeric and other types
    - Efficient support for Unicode, including but not limited to UTF-8
    - Call C functions directly (no wrappers or special APIs needed)
    - Powerful shell-like capabilities for managing other processes
    - Lisp-like macros and other metaprogramming facilities

> [!note] 장점들은 많은 언어들이 주장하는 것들과 비슷해서 딱히 매력적이진 않은 느낌?

> [!question] [[python|Python]] 보다 성능은 확실히 우월해 보이는데, [[machine-learning|Machine Learning]]에서 주류 언어로 사용되지 않는 이유는 Python 보다 어렵기 때문일까?

> [!todo] 특수 분야?에서만 쓰이는 언어라 일반 개발 목적으로 사용할 일은 없어 보이지만, 언어 자체는 재미있어 보여서 살짝 맛만 보는 걸로. 언제가 될 진 모르겠지만.


---
### Installation
- [[shell-mise|mise]] 이용:
```shell
$ mise plugins add julia
$ mise install julia
```

- [[/app-homebrew|Homebrew]]를 이용한 직접 설치:
```shell
$ brew install julia
```


### IDE Support
- [[emacs|Emacs]]: [julia-mode](https://github.com/JuliaEditorSupport/julia-emacs)
- VS Code: [julia-vscode](https://www.julia-vscode.org)

> [!note] LSP Implementations는 [[lsp|Language Server Protocol]] 참조.


### References
- https://julialang.org
- https://github.com/JuliaLang/julia