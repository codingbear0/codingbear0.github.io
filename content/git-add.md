---
title: git-add
date: 2024-07-14
tags: 
- Git
draft: true
---


> [!quote]

- `working directory`의 수정 내역을 `staging area`에 추가.
    - 파일의 상태는 `modified`에서 `staged`로.


- 파일의 수정이 끝나면 Git repository에 저장:
    ```shellsession
    $ git add {file-name}
    ```

    - 현재 directory와 하위 directory의 모든 내용을 저장<sub>stage</sub>하려면:
        ```shellsession
        $ git add .
        ```

- 파일 삭제는 `git rm`:
    ```shellsession
    $ git rm foo.html
    ```
    - 실제 파일이 삭제되지는 않음.
    - 파일의 상태는 tracked 에서 untracked

- `git rm` + `git add`:
    ```shellsession    
    $ git mv foo.html bar.html
    ```


### References
- [[/book-pro-git|Pro Git]]
- [[/book-version-control-with-git|Version Control with Git]]