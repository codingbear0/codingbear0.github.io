---
title: Vim
date: 2023-07-27
tags: 
- IDE
- Vim
draft: true
---


> [!quote] Vim is a highly configurable text editor built to make creating and changing any kind of text very efficient. It is included as "vi" with most UNIX systems and with Apple OS X.

- [[emacs|Emacs]]와 더불어 텍스트 에디터<sub>text editor</sub>의 양대 산맥인 그 에디터.
    - Vim과 관련된 밈<sub>meme</sub>으로 [[vim-how-do-i-exit-vim|How do I exit Vim?]]이 유명.

- [[safari|Safari]] extension으로 [[vim-vimari|Vimari]]를 설치하면 Safari에서도 Vim key-mapping 사용 가능.


### Troubleshooting
- When [[typeescript|TypeScript]] syntax highlighting is too slow:
    - [[typescript|TypeScript]] 파일만 열면 속도가 느려지는 현상(스크롤이 불가능할 정도로)이 발생하면 아래와 같이 설정 파일 수정:
        ```shell{2} title=".vimrc"
        syntax on
        set re=0
        ```
        
        - `set re=0`은 [[regular-expression|Regular Expression]] Engine을 자동으로 선택하라는 의미.
        - 두 가지 Regular Expression Engine 지원[^1]:
            - `0`: automatic selection
            - `1`: old engine
            - `2`: NFA engine

> [!question] 조금 이상한데? Manual을 확인해보면:
> - `default value`가 `0`이라는데 왜 `1`로 되어 있는지?
> - NFA engine이 문제가 생길 수 있고[^2], `re=0`로 설정해 해결하라 되어 있는데, 여기서는 old engine이 문제가 되서 `re=0`로 바꿔야 하는 상황? 

> [!success]
> - [[shell-homebrew|Homebrew]]로 설치한 VIM은 기본 값이 `0`, 정상적으로 설정되어 있음.
> - [[typescript|TypeScript]] 관련 문제도 발생하지 않음.

[^1]: Vim 버전 9.1 기준
[^2]: 원문:  “E.g., when the NFA engine uses too many states.  This should prevent Vim from hanging on a combination of a complex pattern with long text.”



----
#TODO: 아래는 정리 필요
### Insert mode edit mappings
- `C-h`: Delete previous character(same as backspace)
- `C-w`: Delete previous word
- `C-u`: Delete entire line(except any indent)
- `C-t`: Indent the current line
- `C-d`: Backdent the current line



### References
- https://www.vim.org
- https://vimtricks.com/