---
title: Tokyo Night Theme
date: 2025-02-23
tags:
- theme
draft: false
---

2019년 [VS Code] 용으로 만들어진 테마.
- [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=enkia.tokyo-night)에 등록되어 있으며, 개발자는 enkia?
- [Dracula](https://draculatheme.com)처럼 한 곳에서 통합관리 되진 않는 듯?[^1]

[^1]: Dracula는 유료 테마니까, 한 곳에서 관리되어야 하겠지만.

- [Neoim] 관련 테마를 위한 [repository](https://github.com/folke/tokyonight.nvim)에서 [Neovim] 이외의 개별 앱을 위한 테마 파일을 찾을 수 있음[^2].

[^2]: [/extra](https://github.com/folke/tokyonight.nvim/tree/main/extras) 참조.


현재 여러 앱들의 기본 테마로 사용 중.

---
## [[/sandbox/fzf|fzf]]
```sh title=".config/fish/conf.d/fzf.fish
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

원본에서 다음의 사항 수정:
- `--info=inline-right` 삭제.
- `bg+`, `bg` 그리고 `gutter` 색상 코드는 `#24283b`.
- `border`, `scrollbar`, `separator` 삭제.

## References
- https://vitormv.github.io/fzf-themes/
- https://github.com/folke/tokyonight.nvim