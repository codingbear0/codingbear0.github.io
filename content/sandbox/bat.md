---
title: bat
date: 2025-02-28
tags:
- terminal
draft: false
---

> [!quote]
> A cat(1) clone with syntax highlighting and Git integration.

[Rust]로 만들어진 `cat`. `cat` 보다 나은 점은 syntax highlighting과 git integration[^1] 정도.

[^1]: git integration은 gutter에 `‌+`‌, `-`로 수정사항을 표시해주는 기능.

<BR />

사용법은 단순해서 그냥 `cat` 대신 `bat`을 사용해도 무방한데, 단순하게는 `alias`로 설정하거나:
```sh
$ alias bat 'cat'
```

또는 [fish] shell 이라면 `abbr`로 설정:
```sh
$ abbr -a cat bat
```

---
## Installation
```sh
$ brew install bat
```

## Tips
`tail -f`를 이용할 때 유용:
```sh
$ tail -f [log-file] | bat --paging=naver -l log
```
- `-l`은 syntax highlighting을 위한 언어 지정.

<BR />

특정 영역만 출력하고 싶다면:
```sh
# print lines 30 to 40
$ bat --list-range 30:40
# or
$ bat --list-range 30:+10

# print lines 1 to 40
$ bat --list-range :40
```

## References
- https://github.com/sharkdp/bat
