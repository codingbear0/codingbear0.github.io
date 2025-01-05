---
title: Shell
date: 2023-12-19
tags:
- Shell
draft: true
---


---
- [[shell-eza|eza]]

---
title: eza
date: 2024-06-28
tags:
- Shell
draft: false
---

<BR />



```
# find empty folders
find -type d-empty
# delete them
find -type d-empty-delete 
```

```
# github.com/sharkdp/fd
brew install fd
# find empty folders ignoring gitignore
fd -ta -te
# interactively delete them
fd -td-te-Xrm -rfi
```


## Tips?
- `whatis`: 명령어에 대한 간단한 설명
```sh
$ whatis [command-name]
```

- `HISTTIMEFORMAT`: 히스토리를 표시할 때 날짜와 시간 포맷 설정[^[[Fish]]에서 사용 불가, [[Bash]]에서만. 어쩌면 [[Zsh]]도?]
```sh
export HISTTIMEFORMAT = "%d/%m/%y %T"
```

- 랜덤 넘버 생성:
```
$ echo $RANDOM
```
