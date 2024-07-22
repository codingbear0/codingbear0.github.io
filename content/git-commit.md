---
title: git-commit
date: 2024-07-14
tags:
- Git
draft: false
---


> [!quote]

- `staging area`에 모여 있는 commit 정보를 .git directory에 저장.
    - 파일의 상태는 `staged`에서 `committed`로.

- summary와 상세 메시지 동시 작성:
    ```shellsession
    $ git commit -m "Summary" -m "Detail of Summary"
    ```

- `git add` + `git commit`:
    ```shellsession
    $ git commit {file-name} -m 'message'
    ```

 
---
### from [[/book-version-control-with-git|Version Control with Git]]
> [!quote] We recommend that you strive to group logical change batches before making a commit. This is called an atomic commit and will help you in situations $\cdots$
- commit 전에 논리적으로 연관된 변경사항들<sub> change batches</sub>끼리 하나로 묶는 것이 좋음:
    - $\to$ atomic commit


### References
- [[/book-pro-git|Pro Git]]
- [[/book-version-control-with-git|Version Control with Git]]