---
title: Emacs Proced
date: 2025-03-25
created: 2025-03-25
updated: 2025-03-31
tags:
- emacs
draft: false
---

[[/sandbox/emacs|Emacs]]에서 실행되는 `top` 또는 `ps` 명령. 하지만 확인할 수 있는 정보가 어떤 process가 실행되고 있다 수준[^1]이라 실행된다는 것에 의미가 있을 뿐 실제 사용할 일은 거의 없어 보인다.

[^1]: 심지어 CPU 사용량순으로 정렬은 가능하지만 몇 % 사용하고 있는지도 확인할 수 없음.

실행은 `M-x (proced)`. 종료는 `q`. 설정은 간단하게 아래와 같이:
```elisp title="$HOME/.emacs.d/init.el
(use-package proced
  :straight (:type built-in)
  :hook (proced-mode . (lambda nil
                         (proced-toggle-auto-update 1)))
  :custom
  (proced-enable-color-flag t)
  (proced-auto-update-interval 5))
```

[evil] 때문인지 단축키가 살짝 변경되는데, sort와 filter 두 가지 기능과 format 변경을 위한 단축키만 알고 있으면 될 듯:
- `o` `(proced-sort-*)`
- `s` `(proced-filter-interactive)`
- `S` `(proced-format-interactive)`

정렬을 위해 `o`를 입력하면 나머지 키는 `which-key`를 통해 확인할 수 있기 때문에 정렬 column 지정을 위한 단축키까지, 예를 들면 CPU 사용량(%)순 정렬은 `o` 후에 `c`, 알고 있을 필요는 없어 보인다. 실행 후 보여지는 format의 기본<sub>default</sub>값은 `short`으로, 이를 `(proced-format-interactive)`를 통해 `long`으로 변경하면 그나마 나은 결과를 볼 수 있다.

쓸만한 기능을 굳이 찾자면 `x`, `(proced-send-signal)`로 process 종료[^2]시키는 기능 같은 것들인데, 활용도가 얼마나 될지는?

> [!bug]
> Emasc Plus 30[^1]에서 버그인지 자꾸 화면이 멈춘다. [[/sandbox/emacs|Emacs]]가 먹통이 된 것 같진 않고 화면만 멈춘 것 같은데, 이유는 알 수 없지만 고쳐질 때까지 일단 봉인.

[^1]: 정확한 버전명은 `GNU Emacs 30.1 (build 2, aarch64-apple-darwin24.2.0, NS appkit-2575.30 Version 15.2 (Build 24C101)) of 2025-03-14`
[^2]: 정확히는 해당 process에 TERM [signal]을 보내는 것.

## References
- https://www.masteringemacs.org/article/displaying-interacting-processes-proced