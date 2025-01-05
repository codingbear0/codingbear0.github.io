---
title: Emacs
date: 2023-07-27
tags: 
- Text Editor
- Emacs
- TODO
draft: true
---

> [!quote] An extensible, customizable, free/libre text editor — and more.

- 1976년에 발표된 [[vim|Vim]]과 더불어 가장 유명한 text editor:
    - GNU와 FSF<sub>Free Software Foundation</sub>를 설립한 Rechard Stallman이 만든 editor로 유명.
    - 하지만, 아래의 이유들 덕분에 사용자는 적은 편:
        - 복잡한 단축키 조합[^1].
        - major/minor mode, buffer 등의 생소한 용어.
        - [[emacs-lisp|Elisp]]에 대한 학습 필요[^2].
    - 최신 버전은 2024년 6월에 릴리즈된 버전 29.4.

[^1]: [[/vim-how-do-i-exit-vim|How do I exit Vim?]]의 [[vim|Vim]]처럼 [[emacs|Emacs도 처음엔 종료시키기 어려운데 종료키는 무려 `C-x C-c`
[^2]: [[lisp|Lisp]]의 방언<sub>Dialect</sub>

- 기괴한 단축키 조합:
    - 대부분 `C-f`, `C-b`[^3], `M-C-x`[^4]처럼 `Ctrl`과 `Alt` 조합이 기본.
    - [[hhkb|HHKB]] 같은 특수한 배열의 키보드를 사용하거나 key-mapping을 바꾸지 않으면[^5] 손가락이 꼬이는 경험을 할 수 있음.

> [!note] 내 인생을 망치러 온 나의 구원자 [[emacs-evil|Evil]] extension.

[^3]: 한 글자 앞, 뒤로 이동하는 단축키
[^4]: `M`키는 `Meta`키로 [[macos|macOS]]에서는 `⌥`키를 의미
[^5]: 보통 [[app-karabiner-elements|Karabiner-Elements]] 등을 이용해 `Capslock`을 `Ctrl`로 변경


---
### Help Command
| | |
| --- | --- |
| `C-h k` | for a keybinding |
| `C-h k` `C-x C-f`[^6] | for help on find-file |
| `C-h f` | for a function |
| `C-h v` | for a variable |
| `C-h a` | Apropos helps you find commands based on a keyaord |
| `C-h b` | for a list of keybindings in the current major mode |


[^6]: or  `C-h f` `find-file` 

### References
- https://www.gnu.org/software/emacs/


#TODO

---
- Indent or backdent the current line while in insert mode -- helps to make more repeatable edits.
- ctrl-t - Indent the current line
- ctrl-d - Backdent the current line