---
title: Comparison of Emacs distributions
date: 2025-03-25
created: 2025-03-25
updated:
tags:
- emacs
draft: false
---

비교라고 하기는 너무 거창하고 간단한 소개 정도?로 정리.

macOS에서 [[/sandbox/emacs|Emacs]]를 사용한다고 할 때 찾을 수 있는 배포판<sub>distribution</sub>?은 아래와 같이 세 가지 정도[^1]. 물론 [Doom Emacs](https://github.com/doomemacs/doomemacs) 같은 유명한 배포판도 있지만, 그런 것들은 밑바닥부터 하나하나 쌓아올리는 재미가 없으니까 논외로 하고:
1. [Emacs for Mac OS X](https://emacsformacosx.com)
2. [Emacs Plus](https://github.com/d12frosted/homebrew-emacs-plus)
3. [Emacs Builds](https://github.com/jimeh/emacs-builds)

[^1]:순서는 많이 쓰이거나 유명한 것과 관계없음.

> [!bug] 
> 그 밖에 GNU에서 official하게 배포하는 [GccEmacs](https://akrl.sdf.org/gccemacs.html)를 직접 빌드하는 방법도 있지만, 이게 또 그럴 일은 아니니까.

1번과 3번, 즉 Emacs for Mac OS X와 Emacs Builds는 이미 만들어진 binary를 다운로드 받아 바로 사용하는 방식인데 반해 2번 Emacs Plus는 [homebrew]로 설치하는 방식. Emacs 30 버전에서는 세 배포판 모두 native compliation을 지원해 속도 면에서는 큰 차이를 느끼기 어려운데, 그래도 1번 Emacs for Mac OS X 배포판은 그래도 vanilla Emacs에 가깝다고 하고 2번과 3번 배포판은 macOS에 나름의 최적화를 거쳤다고 한다.

> [!bug]
> 실제로 써봐도 큰 차이점은 느끼기 어려워서, 눈에 띄는 건 `M-x emacs-version`을 통해 확인할 수 있는 버전 정보 정도?

<br />

지금 쓰고 있는 배포판은 Emacs Plus로 설치 옵션은 아래와 같이 사용[^2]:
```sh
$ brew tap d12frosted/emacs-plus
$ brew install emacs-plus@30 --with-savchenkovaleriy-big-sur-icon
```

[^2]: Emacs 29까지는 몇 개의 옵션을 더 사용했는데, 지금은 아이콘 변경 정도의 옵션만 사용.


## Referencs
- https://github.com/d12frosted/homebrew-emacs-plus
- https://www.reddit.com/r/emacs/comments/1ivf4d8/macos_emacsmac_vs_emacsplus_vs_emacsformacosxcom/