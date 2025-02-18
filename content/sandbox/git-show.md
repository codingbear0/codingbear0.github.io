---
title: git-show
date: 2025-02-04
tags:
- git
draft: true
---

특정 commit 하나의 정보를 상세하게 보고 싶다면,
```sh
$ git show <commit-ID>
```
- commit ID를 생략할 경우 `HEAD` commit의 정보 표시.
- commit ID는 ID 전체가 아닌 첫 7글자만 사용해도 무방[^1]:
	- 첫 7글자가 아니더라도 unique하게 식별할 수 있다면 첫 네 글자 정도만 사용해도 무방. 
	- 반대로 7글자로 unique하게 식별할 수 없다면 8, 9글자 등 식별 가능한 글자수까지 늘려 사용해야 함.
    - e.g. **c149e12**e89a9c035b9240e057b592ebfc9c88ea4 $\to$ c149e12


[^1]: 
