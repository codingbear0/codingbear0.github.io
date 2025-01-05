---
title: less
date: 2023-12-20
tags:
- Shell
draft: true
---


> [!quote] Less is a pager. A pager is a program that displays text files. Other pagers commonly in use are more and  pg. 
- `less` is a pager.
    - 대표적인 Pager로는 more가 있고, less는 더 다양한 기능 제공.

> [!todo] 소스 코드를 분석해 보는 것도 재미있겠다.


### Basic Usage
```shell
$ less -NI --use-color
```
| | |
| --- | --- |
| `-N` | line number 출력 |||
| `-I` | 검색 시 대소문자 구별하지 않음<sub>ignore-case</sub> |
| `-M` | 현재 페이지가 전체 페이지 중 몇 퍼센트 인지 표시 |
| `-J` | 화면 왼쪽에 `status column` 표시[^1] |

- `-i` vs. `-I`:
    - 정확히는 `-i`가 대소문자를 구별하지 않는 옵션
    - 하지만 `-i`는 검색 패턴<sub>search pattern</sub>에 대문자가 포함되어 있을 경우 대소문자를 구별하고, `-I`는 패턴에 대문자가 포함되어 있어도 이를 무시.

[^1]: `status column`은 현재 검색 패턴과 일치하는 라인에는 `*`가  marker(단축키 `m`)가 설정된 라인에는 `m`이 표기됨

> [!quote] 
> - -i or --ignore-case: Causes searches to ignore case; that is, uppercase and lowercase are considered identical.  This option is ignored if any uppercase letters appear in the search pattern; in other words, if a pattern contains uppercase letters, then that search does not ignore case.
> - -I or --IGNORE-CASE: Like -i, but searches ignore case even if the pattern contains uppercase letters.         


### Shortcuts
| | |
| --- | ---|
| `h` or `H` | help |
| `j`  | Forward one line |
| `k`  | Backward one line |
| `f` or `SPC` | Forward one window |
| `b` | Backward one window |
| `d` | Forward one half-window |
| `u` | Backward one half-window |
| `/pattern` | Search forward |
| `?pattern` | Search backward |
| `n` | Repeat previous search |
| `N` | Repeat previous search, in reverse direction |
| `g` | Go to first line |
| `G` | Go to last line |
| `<N>p` or `<N>%` | Go to N percent into file |

- `J`, `K`: 각각 `j`와 `k`와 동일하게 한 줄 위 또는 아래로 스크롤 되지만 파일 끝과 시작을 지나 계속 스크롤 가능.
- [[vim|Vim]]과 동일한 Key-Binding.

### Tricks
- `150` 라인 부터 시작:
	```shell
	$ less +150 <filename>
	```
- 첫 번째 일치하는 `pattern`에서 시작:
	```shell
	$ less +/<pattern> <filename>
	```
- 파일 끝에서 시작:
	```shell
	$ less +G <filename>
	```
- Watch a growing file:
	```shell
	$ less +F <filename>
	```

- 즐겨 사용하는 옵션이 있다면 [[shell|Shell]]의 `LESS` 환경 변수<sub>environment variable</sub>에 설정 가능:

> [!note]: 현재 사용 중인 설정은 [[/shell-fish|Fish]] 참조.


### References
- https://www.greenwoodsoftware.com/less/
- https://github.com/gwsw/less