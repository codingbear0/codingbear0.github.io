---
title: Amethyst
date: 2023-11-27
tags:
- App
draft: false
---


> [!quote] Tiling window manager for macOS along the lines of xmonad.

- window management app
- `⌥-S-k`, `⌥-S-j` 같은 [[vim|Vim]]-like한 단축키로 창 전환﹒이동 등을 할 수 있게 해줌.


---
### Shortcuts
| | |
| --- | --- |
| `⌥-S-SPC` 	| cycle layout forward |
| `⌥-S-h` | shrink the main pane |
| `⌥-S-l` | expand the main pane |
| `⌥-S-,` | increate main pane count |
| `⌥-S-.` | decrease main pane count |
| `⌥-S-j` | move focus counter clockwise |
| `⌥-S-k` | move focus clockwise |
| `⌥-S-p` | move focus to counter clockwise screen |
| `⌥-S-n` | move focus to clockwise screen |
| `C-⌥-S-h`	| swap focused window to counter clockwise screen |
| `C-⌥-S-l`	| swap focused window to clockwise screen |
| `C-⌥-S-j`	| swap focused window counter clockwise |
| `C-⌥-S-k`	| swap focused window clockwise |
| `⌥-S-Enter` | swap focused window with main window |
| `⌥-S-i` | Display current layout |

- `S`와 `C`는 각각 `shift`와 `ctrl`을 의미.
- 모든 키 조합이 `⌥-S`[^1], `C-⌥-S`[^2] 두 키 조합을 베이스로 [[vim|Vim]] 단축키인 `h, l, j, k,` 그리고 `p, n` 키를 함께 사용하는 방식.

[^1]: `mod1`
[^2]: `mod2`

> [!note] 원리만 알면 쉽게(?) 익숙해질 수 있음.


### Custom Layout
- [[javascript|JavaScript]]를 이용해 custom layout 추가 가능[^3].

- 추가한 custom layout 파일은 다음의 경로에 위치:
	```shellscript
	~/Library/Application Support/Amethyst/Layouts/
	```

- debugging을 위해 다음과 같은 명령을 통해 직접 실행:
	```shellscript
	$ ‌/Applications/Amethyst.app/Contents/MacOS/Amethyst test --log
	```

[^3]: https://github.com/ianyh/Amethyst/blob/development/docs/custom-layouts.md


### References
- https://ianyh.com/amethyst/
- https://github.com/ianyh/Amethyst
