---
title: git-log
date: 2024-07-14
tags:
- Git
draft: false
---


> [!quote]

- repository의 개별 commit 이력<sub>history</sub>를 순차적으로 표시:

```shellsession
$ git log
```

- 간략하게 보고 싶다면,
    ```shellsession
    $ git log --oneline
    ```
    - 또는, `--onlie` 이외의 다른 option이 필요치 않다면 아래의 명령도 가능:
    ```shellsession
    $ git show-branch --more=10
    ```

- 특정 commit 하나만 상세히 보고 싶다면,
```shellsession
$ git show {commit-ID}
```

- commit ID는 앞자리 7개만 사용해도 무방. 
    - e.g. **c149e12**e89a9c035b9240e057b592ebfc9c88ea4 $\to$ c149e12


### References
- [[/book-pro-git|Pro Git]]
- [[/book-version-control-with-git|Version Control with Git]]
