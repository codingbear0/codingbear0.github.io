---
title: The Three States of Git
date: 2024-06-28
tags:
- Git
draft: true
---

- [[/vcs-git|Git]]은 파일들을 `modified`, `staged`, `committed`[^1] 세 가지 상태로 관리[^2]:

    ![[/media/01J34VFQ4EADHRKMD5SV6XEXMZ.png|582x260]]

[^1]: 또는 `unmodified` 상태
[^2]: 정확하게 말하면 [[/vcs-git|Git]]에 의해 관리되지 않는 상태 `untracked`와 관리되는 상태 `modified`, `staged`, `comitted`[ 총 네 가지 상태


---
### from [[/book-pro-git|Pro Git]]
> [!quote] Git has three main states that your files can reside in: modified, staged, and committed:
> - Modified means that you have changed the file but have not committed it to your database yet.
> - Staged means that you have marked a modified file in its current version to go into your next commit snapshot.
> - Committed means that the data is safely stored in your local database.
- 정리하면,
    | | |
    | --- | --- |
    | `modified` | 파일을 수정했지만 아직 commit 하지 않은 상태 |
    | `staged` | 수정한 파일을 다음 commit의 snapshot으로 표시한 상태 |
    | `committed` | 수정 내역이 안전하게 local database에 저장된 상태 |
  

<BR />

- 이 세가지 상태는 다시 세가지 섹션<sub>section</sub>과 연계되어 있는데,
    | | |
    | --- | --- |
    | `working directory` |프로젝트의 어떤 한 버전을 checkout 한  곳 |
    | `staging area` | Git directory 안에 다음 commit될 파일들의 정보가 저장되는 곳 |
    | `.git` directory | metadata, object database 등이 저장되는 곳, Git directory |

<BR />

> [!quote] The basic Git workflow goes something like this: 
> 1. You modify files in your working tree.
> 2. You selectively stage just those changes you want to be part of your next commit, which adds only those changes to the staging area.
> 3. You do a commit, which takes the files as they are in the staging area and stores that snapshot permanently to your Git directory.

- 세 가지 상태와 섹션<sub>section</sub>을 조합하면, Git의 workflow는:
    1. `working tree`의 파일들을 수정:
        - 파일의 상태는 `unmodified`에서 `modified`로.
    2. 다음에 commit할 수정 내용을 선택적으로<sub>selectively</sub> `stage area`에 저장<sub>stage</sub>:
        - 이때 파일의 상태는 `modified`에서 `staged` 상태로.
    3. commit을 통해, `staging area`에 저장되어 있던 파일들[^3]을 `.git` directory에 영구적으로 저장:
        - 파일의 상태는 다시 `committed`로.

[^3]: 정확히는 snapshot 


### References
- [[/book-pro-git|Pro Git]]