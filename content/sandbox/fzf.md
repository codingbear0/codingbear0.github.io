---
title: fzf
data: 2025-02-21
tags:
- terminal
draft: false
---

> [!quote]
> fzf is a general-purpose command-line fuzzy finder.


## Installation
```sh
$ brew install fzf
```

## Configuration
```sh title="./config/fish/conf.d/fzf.fish"
set -gx FZF_CTRL_T_OPTS "
    --preview 'bat --color=always --style=numbers --line-range=:500 {}'
    --bind 'ctrl-/:change-preview-window(down|hidden|)'
    --select-1
    --exit-0
    "

set -gx FZF_CTRL_R_OPTS "
    --preview 'bat --color=always --style=numbers --line-range:500 {}'
    --preview-window up:3:hidden:wrap
    --bind 'ctrl-/:toggle-preview'
    --bind 'ctrl-y:execute-silent(echo -n {2..} | pbcopy)+abort'
    --color header:italic
    "

set -x FZF_ALT_C_OPTS "
    --preview 'tree -d -F -L 2 {}'
    "
 
fzf --fish | source
```
- preview에 [[/sandbox/bat|bat]] 이용.
- 테마 적용은 [[/sandbox/tokyo-night-theme|Tokyo Night Theme]] 참조.


> [!question]
> `**`을 이용한 fuzzy completion이 [fish]에선 동작하지 않는 듯? 어떻게 해결할 수 있을까?


## References
- https://github.com/junegunn/fzf




<!--
### Configuration
`~/.config/fish/conf.d/fzf.fish` 참조

### Key bindings for command-line
- `C-t`: Paste the selected files and directories onto the command-line $\to$ 현재 디렉토리의 파일과 디렉토리 리스트가 보여지고 이중 하나를 선택할 수 있음.
	- `FZF_CTRL_T_OPTS`에 미리보기 추가는 꼭 하자[^2][^3]. 생각보다 편함.
		```sh
		# Preview file content using bat (https://github.com/sharkdp/bat)
		set -x FZF_CTRL_T_OPTS "
	  --preview 'bat -n --color=always {}'
	  --bind 'ctrl-/:change-preview-window(down|hidden|)'"
	  ```
	==TBD== 어떤 의미인지?
	
- `C-r `:  Paste the selected command from history onto the command-line
	- `FZF_CTRL_R_OPS`를 이용해 미리보기와 복사(`copy to clipboard`) 기능 추가:
		```sh
		# C-/ to toggle small preview window to see the full command
		# C-y to copy the command into clipboard using pbcopy
		set -x FZF_CTRL_R_OPTS "
	  --preview 'echo {}' --preview-window up:3:hidden:wrap
	  --bind 'ctrl-/:toggle-preview'
	  --bind 'ctrl-y:execute-silent(echo -n {2..} | pbcopy)+abort'
	  --color header:italic
	  --header 'Press C-y to copy command into clipboard'"
		```
	==TBD== 어떤 의미인지?

- `Alt-c`: 선택한 디렉토리로의 이동(`cd`)
	- 기본 단축키가 `Alt-c`인데 [[macOS]]에서 동작안하는 듯? 어떻게 할 수 있을까? $\to$ [[iTerm2]]의 설정 문제. `Profiles > Default > Keys`의 `Left Option key`를 `Esc+`로 설정하면 해결됨[^https://github.com/junegunn/fzf/issues/1202].
	- `FZF_ALT_C_OPTS`는 아래와 같이[^[[tree]] 필요.]:
		```sh
		set -x FZF_ALT_C_OPTS "--preview 'tree -d {}'"
		```
	- [2023/11/23 수정]: 미리보기가 복잡해 하위 디렉토리가 2-Level까지만 보여지도록 제한. 
		```sh
		set -x FZF_ALT_C_OPTS "--preview 'tree -d -F -L 2 {}'"
		```

[^2]: [[fish]] 기준. [[bash]]에서는 `export` 사용할 것.
[^3]: [[bat]] 필요.
-->


