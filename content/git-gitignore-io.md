---
title: gitignore.io
date:
tags:
- Git
draft: true
---


- `.gitignore` 파일을 위한 Template 생성기:
    - `macos`, `vim`, `emacs` 등 필요한 키워드를 입력하면 자동 생성.
    
> [!note] gitignore.io를 이용해서 기본적인 [[git-gitignore|.gitignore]] 파일을 만들고, 추가로 [[git|Git]] Repository마다 제외 파일을 추가하면 편리.

<BR />
    
- CLI로도 사용 가능:
    - [[shell-fish|Fish]]에 설정파일 `$HOME/.config/fish/functions/gi.fish` 추가:
    ```shellscript
    printf "function gi\n\tcurl -sL https://www.toptal.com/developers/gitignore/api/\$argv\nend\n" > ~/.config/fish/functions/gi.fish
    ```
    
    - 사용은 다음과 같이:
    ```shellscript
    $ gi macos,emacs,vim > .gitignore
    ```
    
    
### References
- https://www.toptal.com/developers/gitignore
- https://github.com/toptal/gitignore.io

