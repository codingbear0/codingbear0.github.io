---
title: git-init
date: 
tags:
- git
draft: true
---

$ mkdir ~/my_website
$ cd ~/my_website
$ echo 'My awesome website!' > index.html

`my_website/`를 Git repository로 바꾸려면, `git init` 실행
```
$ git init -b main
```
- Git repository의 root에 숨겨진 `.git/` 생성.
	- 모든 revision 정보와 metadata 들이 저장되는 곳.
- `my_website/` 는 `working direcotry`라 부름.
	- 파일의 현재 버전이 저장되는 곳.
	- working directory에서 파일을 변경하거나 새로운 파일을 추가하면, 그 변경사항들은 `.git/`에 저장됨.


```
git init --initial-branch=<branch-name>
```
또는 
```
git init -b <branch-name>
```

repository를 생성할 때 default branch 이름은 버전 2.37.1부터 `master`에서 `main`으로 변경됨.



## References