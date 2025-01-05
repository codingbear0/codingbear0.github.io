---
title: Language Server Protocol
date: 2024-06-22
tags:
- LSP
draft: true
---


- Microsoft에서 만든, IDE와 Language Server 사이에 데이터를 주고 받기 위해 사용되는 프로토콜.
    - 이 프로토콜을 이용해 IDE에서 auto complete, go to definition, find all references 같은 기능의 지원 가능.

- [[emacs|Emacs]]에서의 설정은 [[emacs-lsp|Emacs LSP]] 참조.


---
### Implementations
- 주요 언어 별 구현체 목록[^1]:

| | |
| --- |--- |
| [[cplusplus|C++]] | [clangd](https://github.com/llvm/llvm-project/tree/main/clang-tools-extra/clangd) |
| [[python|Pytnon]] | [Pyright](https://github.com/microsoft/pyright) |
| [[python|Python]] | [python-lsp-server](https://github.com/python-lsp/python-lsp-server) |
| [[swift|Swift]] | [SourceKit-LSP](https://github.com/apple/sourcekit-lsp ) |
| [[golang|Go]] | [gopls](https://github.com/golang/tools/tree/master/gopls) |
| [[rust|Rust]] | [Rust Analyzer](https://github.com/rust-lang/rust-analyzer) |
| [[racket|Racket]] | [racket-langserver](https://github.com/jeapostrophe/racket-langserver) |
| [[julia|Julia]] | [Julia Language Server](https://github.com/julia-vscode/LanguageServer.jl) |
| [[haskedll|Haskell]] | [Haskell Language Server ](https://github.com/haskell/haskell-language-server) |

[^1]: 전체 구현체 목록은 [Implementations](https://microsoft.github.io/language-server-protocol/implementors/servers/) 참조


### References
- https://microsoft.github.io/language-server-protocol/
