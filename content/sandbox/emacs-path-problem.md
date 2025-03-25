---
title: Emacs PATH Problem
date: 2025-03-25
created: 2025-03-25
updated:
tags:
- emacs
- shell
draft: false
---

> [!quote] 
> This happens a lot on OS X, where an Emacs instance launched as a GUI app inherits a default minimal set of environment variables that are probably not the ones you see in a terminal window. Similarly, if you start Emacs as a daemon from systemd or launchd, it will run with a default set of environment variables.

macOS에서 [[/sandbox/emacs|Emacs]]를 실행한다면 보통 macOS의 spotlight 혹은 [raycast](https://www.raycast.com)를 통해 실행하는 것이 일반적일 텐데, 이렇게 하면 [shell]의 환경 변수<sub>environment variable</sub> `$PATH` 값이 [Emacs]로 전달되지 않는 문제가 있다. 
전달된 PATH 값의 확인은 `M-:` `‌(eval-expression)` 후 echo area에 아래의 함수를 입력하고 실행:
```elisp
Eval: (getenv "PATH")
```

<br />

이 문제는 [Linux]에선 발생하지 않는 것 같지만, 글의 시작에서 인용한 `exec-path-from-shell`의 소개 문구를 보면 daemon 형태로 실행할 때도 동일하게 발생하는 듯?

<br />

여튼 `$PATH`가 전달되지 않는 건 보통 큰 문제가 되지 않아서 처음 사용할 땐, 어쩌면 오래 사용해도 문제로 인식하지도 못 할 가능성이 높다. 보통 ‘뭔가 이상한데?’라고 느끼는 시점은 Emacs를 IDE로 사용하기 위해 [LSP] 등을 사용하기 시작할 때가 아닐까? 이 경우 정상적으로 설치된 language server를 찾지 못하는 문제와 맞닥뜨리게 된다.

<br />

PATH 문제를 해결 방법은 두 가지 정도. 간단하지만 둘 다 마음에 쏙- 드는 방법은 아닌데, 일단 첫 번째 방법은 [emacs-plus](https://github.com/d12frosted/homebrew-emacs-plus)를 사용하는 경우, spotlight가 아니라 terminal에서 실행하면[^2] PATH 문제가 발생하지 않는다. 다만 귀찮을 뿐:
```sh
$ open -n -a /opt/homebrew/bin/emacs
```

> [!bug]
> 테스트 해 보니 다른 [[/sandbox/comparison-of-emacs-distributions|Emacs 배포판]]인 [Emacs for Max OS X](https://emacsformacosx.com/about)에서는 정상적으로 PATH 정보가 전달되는 것 같다. 왜지?

[^2]: [macOS open Command].

<br />

두 번째 방법은, 정직한 이름을 가진 `exec-path-from-shell` 패키지를 사용하는 것으로 일반적으로 많이 추천되는 방법. 설정은 간단하게 다음과 같이: 
```elisp title="$HOME/.emacs.d/init.el"
(use-package exec-path-from-shell
 :when (eq system-type 'darwin)
 :custom
 (exec-path-from-shell-shell-name "fish")
 :config
 (exec-path-from-shell-initialize))
```

이 방법의 문제점은 [[/sandbox/emacs|Emacs]] 시작 시간이 0.77\~0.8초에서 1.3초 정도로 무려 0.5초나 증가한다는 점. 재시작이 그렇게 잦은 일은 아니니까 무난한 두 번째 방법을 이용하고 패키지 다이어트를 하는 게 나을까?


## References:
- https://github.com/purcell/exec-path-from-shell