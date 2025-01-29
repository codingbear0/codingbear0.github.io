---
title: eza
date: 2025-01-29
tags:
- terminal
draft: false
---

> [!quote]
> A modern replacement for ls.

[Rust]로 작성된 `ls` 대체제.

알록달록 화려한? 색상으로 파일 목록을 표시해 주기 때문에 시인성이 확실히 좋고, `--git` 같은 옵션으로 [`git status`]의 결과도 함께 확인할 수 있다는 점은 장점.

다만, [la vs eza | which is more efficient and performant?](https://abanoubhanna.com/posts/ls-vs-eza/)의 성능 비교를 보면, 전통적인 `ls` 보다 속도가 느리다는 점은 받아들이는 사람에 따라 다양한 기능 추가에 따른 당연한 페널티라고 생각될 수도, 단지 파일 목록을 표시하는데 2배에서 최대 3배까지 느려지는 성능은 큰 단점이라고 생각될 수도[^1].
- macOS, [fish] 환경에서, `ls`는 6.25ms, `eza`는 15.19ms로 약 2배 차이.
- Ubuntu, [fish] 환경에서 long output은 최대 3배까지 느려짐.

[^1]: ms 단위의 성능을 비교하는게 의미가 있는지는 논외로 하고.

개인적으로는, 시인성이 높아지는 장점 때문에 `ls`로 돌아가지는 않을 듯. 애초에 성능 측정이 ms 단위라 큰 의미가 없다고 생각되기도 하고.

> [!note] 
> 요즘은 eza와 동일하게 [Rust]로 구현된 [LSD]도 많이 언급되는 듯[^2].
[^2]: 2025년 1월 말 기준 GitHub Star 수는 LSD 13.9k, eza 13.8k로 비슷. 

---
## How to set up Aliases
`ls` 대체를 위해 `alias`는 아래와 같이[^3]:
```sh
$ alias
alias ls 'eza --group-directories-first --git --classify'
alias tree 'ls -T'
```

[^3]: [fish] shell 기준.
	
	
## Options
가끔 쓰면 유용한 옵션들:
- `-T`, `--tree`: recurse into directories as a tree
- `-L`, `--level=(depth)`: limit the depth of recursion
	- `--tree` 옵션과 함께 사용.
- `-s`, `--sort=(field)`: which field to sort by
	- 정렬 필드field는 다양한 값이 올 수 있는데, 보통 `size`, `created`, `modified`[^4] 정도?
	- 역순 정렬은 `-r`, `--reverse`.

[^4]: `modified`는 [mtime]을 의미. 다른 필드field 값으로 `changed`도 사용할 수 있는데, 이는 [ctime]을 의미.

- `--total-size`: show recursive directory size

- `-o`, `--octal-permissions`: list each file's permission in octal format
- `--time-style`: how to format timestamps. valid timestamp styles are ‘default’, ‘iso’, ‘long-iso’, ‘full-iso’, ‘relative’, or a custom style
	- 보통은 `--time-style 'long-iso’`.

> [!warning]
> `--total-size` 옵션은 속도가 조금? 느림. 디렉터리 depth와 파일 수에 따라 다르겠지만.


## References
- https://eza.rocks
- https://github.com/eza-community/eza