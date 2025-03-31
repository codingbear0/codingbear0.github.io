---
title: Dired
date: 2025-03-26
created: 2025-03-26
updated:
tags:
- emacs
draft: false
---

[[/sandbox/emacs|Emacs]]에서 파일 관리를 위해 사용하는 기능으로 DIRectory EDitor를 줄인 단어로 정확치는 않지만 대충 /dai-red/ 혹은 /dee-red/ 정도로 발음 하는 듯. `(list-directory)`라는 것도 있는데, 얼핏 보면 Dired와 유사한 건가? 싶지만 파일명 변경, 삭제 등의 파일 관련 작업을 수행할 수 없는 그저 특정 디렉토리의 파일 목록만을 보여주는 기능이다.

editor에서 파일 관련 작업을 수행하는 기능을 어떻게 구현했을까? 이름에 힌트가 있다. 완전히 분리된 별도의 파일 매니저를 구현하기 보다 `ls`의 결과인 파일 리스트를 read-only buffer에 보여주고, 그 파일 리스트 목록에서 문서를 편집하듯 커서를 위, 아래로 옮겨가며 `RET`를 입력하면 파일의 내용을 보여주거나 하위 디렉토리로 이동하는 식으로 구현되어 있다. 

즉, 파일 목록을 편집<sub>edit</sub>하는 것처럼 동작하는데, 그래서 설정 항목에도 어떤 프로그램을 사용할지[^1] 그리고 그 프로그램에 어떤 옵션을 사용할지를 설정할 수 있도록 되어 있다:
```elisp title="$HOME/.emacs.d/"
(setq insert-directory-program (executable-find "gls"))
(setq dired-listing-switches "-agho --classify=always --group-directories-first --color=auto")

```

[^1]:  기본값<sub>default</sub>은 `gls`. `gls`는 [GNU core utilities](https://www.gnu.org/software/coreutils/)에 포함되어 있는 ls를 의미하며, `‌brew install coreutils`로 설치.

<br />

create, delete, rename, chmod, chgrp, symbolic link, hard link, touch, compress 등등 파일과 관련된 작업들이 간단하긴 하지만 그 수가 많고, 또 그 만큼 단축키도 많아 처음에 적응하기 까다로운 편. 거기에 [evil] 까지 사용한다면 단축키도 [Emacs Manual](https://www.gnu.org/software/emacs/manual/html_node/emacs/Dired.html)에 기술된 것과 조금 다르기도 하고.

Dired의 특이할 만한 기능으로는 `C-x C-j` `(dired-jump)`가 있다. 실행하면 어디서든 `default-directory`의 Dired buffer가 열리는데, `default-directory`는 보통 `$HOME/.emacd.d/`. 일단 Dired가 실행되면 그때부터 `C-x C-j` `(dired-jump)`는 상위 디렉토리로 이동하는 기능으로 동작하며, `C-x 4 C-j` `‌(dired-jump-other-window)`는 함수 이름처럼 새 window에 상위 디렉토리의 Dired buffer가 열린다.

> [!bug] 
> 몇 개 단축키만 손에 익은 것으로 바꿔주면 괜찮을 것 같은데, 천천히 써보면서 바꿔보기로.

마지막으로 종료는 동일하게 `q`.

## References
- https://www.gnu.org/software/emacs/manual/html_node/emacs/Dired.html
- https://www.gnu.org/software/emacs/manual/html_node/dired-x