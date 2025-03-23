---
title: Tokyo Night Theme
date: 2025-02-23
created: 2025-02-23
updated: 2025-03-23
tags:
- theme
draft: false
---

2019년 [VS Code] 용으로 만들어진 테마.

당연히 [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=enkia.tokyo-night)에 등록되어 있고, [VS Code]만을 위해 만들어진 테마이므로 [Dracula](https://draculatheme.com) 테마처럼 다양한 editor, terminal 등을 지원하지는 않는데[^1], 다행히 [Neovim] 관련 테마 repository인 [folke/tokyonight.nvim](https://github.com/folke/tokyonight.nvim)에서[^2] 여러 테마 파일들을 찾을 수 있다. 

[^1]: 정확히 말하면, 지원하지만 유료 테마인 [Dracula](https://draculatheme.com)처럼 한 곳에서 관리되지는 않는?
[^2]: [extra/](https://github.com/folke/tokyonight.nvim/tree/main/extras) 참조.

그렇다고 내가 원하는 테마 파일이 꼭 있다는 보장은 없어서, 예를 들어 [tmux] 같은 경우는 [folke/tokyonight.nvim](https://github.com/folke/tokyonight.nvim)에서 찾을 수 있지만, [Ghostty]나 [iterm2] 같은 termianl app의 경우 [Ghostty]는 `tokyonight_night` 혹은 `tokyonight-moon` 등[^3]의 이름으로 자체 내장하고 있고, [iterm2]는 [iterm2-color-schemes](https://iterm2colorschemes.com)라는 별도의 사이트에서 다운로드 받을 수 있다.

[^3]: 왜 `tokyonight_night`, `tokyonight_moon` 이나 `tokyonight-night`, `tokyongith-storm` 처럼 dash `-` 혹은 underscore `_`로 통일하지 않았을까?

현재[^4] 여러 앱들의 기본 테마로 사용 중이다. 언제 또 마음이 바뀔지는 모르겠지만.

[^4]: 2025년 3월 현재.


---
## [[/sandbox/fzf|fzf]]

```sh title="$HOME/.config/fish/conf.d/fzf.fish"
set -gx FZF_DEFAULT_OPTS "$FZF_DEFAULT_OPTS
  --highlight-line
  --ansi
  --layout=reverse
  --border=none
  --color=bg+:#24283b
  --color=bg:#24283b
  --color=fg:#c0caf5
  --color=gutter:#24283b
  --color=header:#ff9e64
  --color=hl+:#2ac3de
  --color=hl:#2ac3de
  --color=info:#545c7e
  --color=marker:#ff007c
  --color=pointer:#ff007c
  --color=prompt:#2ac3de
  --color=query:#c0caf5:regular
  --color=spinner:#ff007c
	"
```

원본에서 수정한 것들:
- `--info=inline-right` 삭제.
- `bg+`, `bg` 그리고 `gutter` 색상 코드는 `#24283b`로 수정.
- `border`, `scrollbar`, `separator` 삭제.

## Ghostty
```sh title="$HOME/Library/Application Support/com.mitchellh.ghostty/config"
theme = tokyonight_night
```


## References
- https://vitormv.github.io/fzf-themes/
- https://github.com/folke/tokyonight.nvim