---
title: Gitu
date: 2025-01-18
tags:
- terminal
- git
draft: false
---

> [!quote]
> A terminal user interface for Git. Inspired by Magit.

[Emacs]의 유명 [Git] interface인 [Magit](https://magit.vc)을 [Emacs] 밖에서도 사용할 수 있도록 [TUI]로 재구현한 것.
- Magit의 UI를 그대로 옮겨와서 적응하기는 쉬운 편.
- [Rust]로 구현.

<BR />

> [!warning]
> 잠깐 사용해 봤는데 아직 갈 길이 먼 듯.

---
## Keybinds
| | | |
| --- | --- | --- |
| `h` | Help ||
| `g` | Refresh ||
| `k` | Up ||
| `j`  | Down ||
| `ctrl+k` | Up line ||
| `ctrl+j` | Down line ||
| `alt+k` | Prev section ||
| `alt+j` | Parent section ||
| `b` | Branch ||
| `c` | Commit ||
| `f` | Fetch ||
| `l` | Log ||
| `F` | Pull ||
| `P` | Push ||
| `r` | Rebase |
| `X` | Reset ||
| `V` | Revert ||
| `z` | Stash ||

> [!bug]
> pull과 push가 모두 `P`이기 때문에 어쩔수 없이 pull을 `F`로 한 것 같은데, 글쎄...




## References
https://github.com/altsem/gitu