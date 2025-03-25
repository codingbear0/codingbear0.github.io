---
title: Emacs Bookmarks
date:
created: 2025-03-23
updated:
tags:
- emacs
draft: true
---

문자 그대로 북마크 기능. 기능이 단순한 만큼 명령도 5개뿐:
- `C-x r m` `M-x bookmark-set`: 현재 파일의 커서 위치에 북마크 설정
- `C-x r M`: 북마크 설정과 동일하지만 overwrite 방지.
- `C-x r b` `M-x bookmark-jump`:  저장된 북마크 위치로 이동
- `C-x r l` `M-x list-bookmarks`: 북마크 리스트 확인
- `M-x bookmark-delete`
- `M-x bookmark-save`

`M-x bookmark-save`는 기본<sub>default</sub>으로 `user-emacs-directory` 즉, `$HOME/.emacs.d/`에 `bookmarks`라는 파일로 저장되는데, Emacs가 실행되면 이 기본 파일은 자동으로 불려지는 듯. 매번 일일히 저장할 필요없이 `bookmark-save-flag` 변수를 `1`로 설정하면 된다[^1]. 

[^1]: `nil`로 설정하면 수동으로 저장해야 함.

몇 가지 간단한 설정은 아래와 같이:
```elisp title="init.el"
(use-pacage bookmark
	:straight (:type built-in)
	:custom
	(bookmark-save-flag 1)
	(bookmark-default-file ...)
	

```

그냥 쓰기보다 [consult](https://github.com/minad/consult)에서 지원하는 `M-x consult-bookmark`를 사용하는게 더 편리하다.


## References:
- https://www.gnu.org/software/emacs/manual/html_node/emacs/Bookmarks.html