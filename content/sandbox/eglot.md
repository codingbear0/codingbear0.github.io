---
title: Eglot
date:
created: 2025-03-25
updated:
tags:
- emacs
- eglot
draft: true
---

> [!quote] 
> Eglot is the Emacs client for the Language Server Protocol (LSP).

Emacs에서 LSP를 지원하기 위해 그동안 써왔던 [LSP Mode](https://emacs-lsp.github.io/lsp-mode/) 보다 가벼운, 그리고 built-in인 LSP 지원 기능. Emacs 29부터 공식 지원하기 시작했고, LSP Mode는 기능이 많지만 그만큼 무겁고 Eglot은 상대적으로 가볍지만 또 가벼운 만큼 기능이 조금 떨어지는 듯. 역시 세상에 공짜는 없다.

다른 한 편으로 기능이 많다는 것은 설정해야 하는 것들이 많다는 것을 의미하기도 해서 일단 가벼운 Eglot을 먼저 써보고 기능이 부족하다고 생각되면 그때 LSP Mode로 넘어가도 괜찮지 않을까.

> [!bug]
> 사실 LSP Mode를 처음 접해보면 Emacs 특유의 불친절함 + 설정값들이 많고 상세해서 뭘 어떻게 건드려야 할지 모를 정도로 당황스러운데, 이 점을 생각하면 Eglot부터 시작하는 게 자연스러울지도.


먼저 설정은 간단하게:
```elisp title="$HOME/.emacs.d/init.el"


```

## References
- https://joaotavora.github.io/eglot