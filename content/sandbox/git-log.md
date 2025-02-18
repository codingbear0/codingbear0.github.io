---
title: git-log
date: 2025-01-28
tags:
- git
draft: true
---

> [!quote]
> Show commit logs

commit 로그를 확인하는 명령.


## Usage
```sh
$ git log
```
- 가장 단순한 형태로 옵션 없이 사용할 일은 처음 [Git]을 접할 때 말고는 없을 듯. 
- `git log`만 사용하면 제일 뒤 `HEAD`가 생략된 것.

<BR />

```sh
$ git log -2
```
- 표시될 로그의 갯수를 제한하고 싶다면 `-n` 혹은 `-n <number>`

<BR />

```sh
$ git log main~9..main~7
```
- 로그 범위<sub>range</sub>는 `<start>..<end>` 형태로 지정. 
	- `start`는 제외, `end`는 포함.
	- e.g. `main~9..main~7`로 범위를 지정한 경우 `main~8`과`main~7`만 표시[^1].
- `X..Y`는 `^X Y`와 동일한 표현.
	- `X..Y`는 두개의 commit만 표현할 수 있지만 `^X Y`는 두 개 이상도 표현 가능.
	- e.g. `git log ^dev ^feature ^bugfix main`는 `main` branch의 모든 commit 중에서 `dev`, `feature`, `bugfix`에 속하지 않은 commit들만 표시하라는 의미.
- `start` 혹은 `end`를 생략하면 `HEAD`로 간주.
	- e.g. `..<end`>는 `HEAD..<end>`, `<start>..`는 `<start>..HEAD`와 각각 동일.

> [!note]
> `git log <commit>`의 형태, 예를 들어 `git log Y`는 commit `Y`에서 도달 가능한<sub>reachable</sub> 모든 commit들의 로그를 보여달라는 의미. 같은 맥락에서 `X..Y`[^2]는 `Y`에서 도달 가능한 모든 commit을 보여주되 `X`를 포함하여 `X`까지 이어지는 commit은 포함하지 말라는 뜻으로 해석 가능.

> [!todo]
> double-dot `..` 이외에도 triple-dot `...`이 있는데, 어떤 상황에서 쓰면 될지? 

[^1]: `main~9`는 `main` branch의 `HEAD`로 부터 9번째 전 commit을 의미.
[^2]:  혹은 `^X Y`.

<BR />

```sh
$ git log main
```
- `git log <commit>`의 형태는 특정 branch의 로그만 확인할 때 유용.
- 범위를 지정하는 double-dot `..`을 사용해 `main..feature`, `origin..HEAD` 같은 형태로도 사용 가능.

<BR />

```sh
$ git log --online
```
- 각 commit 마다 한 줄로 간략하게 표시.
- `--oneline`은 추가로 설명할 `--pretty=oneline` + `--abbrev-commit`.

> [!tip]
> `--online` 이외의 다른 옵션이 필요치 않다면 [[/sandbox/git-show-branch|show-branch]]로도 같은 비슷한 결과를 얻을 수 있음. 단, 현재 branch에 대한 정보만 표시. <BR />
> e.g. `git show-branch --more=10`

> [!bug]
> `git log <commit>` 이란 표현은 불명확한듯. 보충 필요.








<BR />

## Useful Options
자주 사용할 만한 옵션들.
```sh
$ git log -1 -p 4fe86488
```
- 출력할 log의 수를 제한할 때 `-n` 사용.
- 해당 commit에서의 patch나 변경사항을 함께 보고 싶다면 `-p`.

> [!tip]
> `git log -1 -p 4fe86488`은 [[/sandbox/git-show|git-show]]를 이용하면 훨씬 간편하게 사용 가능. <BR />
> e.g. `git show 4fe86888`, `git show HEAD~2`

<BR />

formatting과 관련된 옵션:
```
$ git log --pretty=short --abbrev-commit main~9..main~7
```
- `--pretty`에는 `oneline`, `short`, `medium`, `full` 그리고 custom string.
	- `--abbrev-commit`은 40자리 commit ID 대신 축약된 7자리만 표시.

commit graph[^2]를 표시하는 `--graph`는

[^2]: Git commit log는 [[directed-acyclic-graph|directed acyclic graph, DAG]] diagram을 사용.


## References
- https://git-scm.com/docs/git-log


<!--


## Commit Graph
`git log` 명령의 핵심 `--graph` 옵션.
- 개별 commit history를 순서대로 출력.
- 상세한 정보가 표시되지만 history가 많을 경우 내용 확인이 어려움.
    
특정 commit 하나의 정보를 상세하게 보고 싶다면,[[/sandbox/git-show|git-show]] 사용:
```sh
$ git show <commit-ID>
```
- `<commit ID>`를 생략할 경우 `HEAD` commit의 정보 표시.
- commit ID는 ID 전체[^2]가 아닌 첫 7글자만 사용해도 무방.
    - e.g. **c149e12**e89a9c035b9240e057b592ebfc9c88ea4 $\to$ c149e12

[^2]: 40글자.
-->