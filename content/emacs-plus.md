---
title: Emacs Plus
date:
tags:
- 
draft: false
---


- [[/macos|macOS]]를 위한 [[emacs|Emacs]] build.


> [!question] [[/macos|macOS]]에서는 [GNU Emacs](https://www.gnu.org/savannah-checkouts/gnu/emacs/) 보다 더 낫다고 해서 쓰기 시작했는데, 뭐가 다른지는?


----
### Installation
- [[homebrew|Homebrew]]를 이용하여 설치:
    ```shell
    $ brew install brew emacs-plus@29 \
        --with-imagemagick \
        --with-native-comp \
        --with-no-frame-refocus \
        --with-savchenkovaleriy-big-sur-icon
    ```
    - `--with-imagemagick`
    - `--with-native-comp`: 핵심 옵션, gccemacs로 빌드.
    - `--with-no-frame-refocus`
    - `--with-savchenkovaleriy-big-sur-icon`: 아이콘 변경


> [!bug] 현재 설치 버그가 있어 `‌/opt/homebrew/opt/coreutils/bin/gcp`을 잠 다른 이름으로 변경 후 설치해야 함:
> ```shell
> $ mv /opt/homebrew/opt/coreutils/bin/gcp /opt/homebrew/opt/coreutils/bin/_gcp
> $ brew install emacs-plus@29 ...
> $ mv /opt/homebrew/opt/coreutils/bin/_gcp /opt/homebrew/opt/coreutils/bin/gcp
> ```


### References
- https://github.com/d12frosted/homebrew-emacs-plus