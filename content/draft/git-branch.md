---
title: git-branch
date:
tags:
- git
draft: true
---

branch는 commit object에 대한 포인터일 뿐.
tracking branch


branch 생성,

```
git config --global init.defaultBranch <branch-name>
```

commit history를 유지하면서 branch 이름을 변경할 때:
```
git branch -m <old-branch-name> <new-branch-name>
```


`features/feature-A`, `bug/ticket-no-x` 같은 계층적hierarchical branch 이름을 사용할 수 있는데, 이 경우 `wildcard`를 사용할 수 있음. `bug/`로 시작하는 모든 branch를 확인하고 싶다면,
```sh
$ git show-branch 'bug/*'
```

계층적 branch 이름 체계scheme을 사용할 때 주의할 것들:
- branch 이름에 `/`를 사용할 수 있지만 `/`로 끝나는 이름을 사용하면 안됨.
- `/`를 사용할 경우 dot`.`으로 시작하는 이름은 허용되지 않음. 예를 들어, `feature/.new`은 허용되지 않음.
- minus sign`-`으로 시작할 수 없음.
- two consecutive dots`..`는 허용되지 않음.
- space나 whitespace 문자[^1]도 허용되지 않음.
- Git에서 특수한 의미를 갖는 문자도 사용할 수 없음. e.g. `~`, `^`, `:`, `?`, `*`, `[`

> [!quote]
> The branch name will always refer to the most recent commit on the branch, also called the tip or HEAD of the branch.

branch 이름은 해당 branch의 가장 최근 commit을 가리키는데, 이것을 그 branch의 `HEAD`라고도 부름.
- 다시 말해, Git은 이 branch의 어떤 commit으로부터 시작됐는지를 추적하고 있지 않음.
	- 현재 branch에서 이전 commit으로 돌아가고 싶다면 특정 commit ID를 지정하거나 `~5`와 같은 방식을 사용해야 함.
- 만약 어떤 특정 commit 위치를 기억해야만 한다면 [[git-tag|tag]]를 사용.


## Branches vs. Tags
> [!quote] 
> However, you should consider the key differentiating characteristic: is the reference static and immutable, or is it dynamic? If it’s the former, you should use a tag. If it’s the latter, you should use a branch.
- [[git-tag|tag]], 특히 lightweight tag는 임시 북마크bookmark로 annotated tag는 고정된 참조 지점으로 사용.
- branch는 개발 과정중에 commit에 따라 가리키는 위치가 계속 이동dynamic.
- 따라서, 참조reference가 static & immutable하다면 [[git-tag|tag]]를 dynamic 하다면 branch를 사용.


## Creating Branches
반드시 존재하는 commit으로 부터 새로운 branch 생성.
- 일반적으로 `HEAD` commit부터 시작.
- 특정 commit ID를 지정할 수도 있음.

```sh
$ git branch <branch-name> <start-point>
```
- 새로운 branch 생성.	
- `<start-point>`를 생략은 당연히 `HEAD`를 의미.
- branch가 이미 존재한다면 `-f`를 사용해 강제로 생성할 수 있음. 기존의 데이터는 물론 다 사라짐.

```sh
$ git branch bugs/fix-133 rel-2.3
```
- 특정 branch로 부터 branch 생성.
- `<start-point>`에는 branch 이름, commit SHA, 또는 [[git-tag|tag]] 이름을 넣을 수 있음.


```sh
git checkout -b <branch-name>
```
- branch를 생성한다고 해서 새로 생성된 branch로 자동 변경switch되지 않음. 
- branch를 새로 생성하고 해당 branch로 변경switch까지 하고 싶다면 `-b`.
- 만약 새로운 branch이름이 이미 존재한다면 에러가 발생하는데 이 경우 `-B` 옵션을 사용해 강제로 전환할 수 있음. `git branch -f`와 동일하게 기존의 데이터는 모두 사라짐.



## Listing Branch
```sh
$ git branch
bugs/pr-1311
development
* main
```
- active branch 이름 앞에는 `*` 표시.

아무 parameter 없이 사용하면 local repository의 branch만 표시되는데,
- remote의 branch를 보고 싶다면 `-r`을
- local과 remote 모두를 보고 싶다면 `-a`를 추가.

--- 이름 나중에 수정 [pro git] 참조


## Viewing Branches and Their Commits

> [!quote]
> It lists the commits that contribute to one or more branches in roughly reverse chronological order.

`git branch` 보다 더 구체적인 내용을 확인하고 싶다면, `git show-branch`를 이용:
- 시간의 역순으로 branch를 구성하는 commit 들을 표시.
- branch들이 공유하는 가장 최근의 공통 commit부터 각 branch가 어떻게 갈라져 나왔는지[^1]를 확인하는 용도.

[^1]: i.e. 공통 commit 이후로 각각의 branch에 어떤 commit 들이 이루어졌는지.

그 밖에,
- 최대 29개 branch 까지만 표시.
- `git branch` 처럼 `-r`, `-a` 사용 가능.
- 가장 최근의 공통 commit 이후의 내용을 더 보고 싶다면 `--more=<num>` 사용.


특정 branch만 지정해 확인하고 싶다면,
```sh
$ git show-branch <branch-name1> <branch-name2>
```
- 당연히 `bub/*`와 같이 wildcard 문자도 사용 가능.


## Switching Branches
```sh
$ git checkout branch
```

```
$ git checkout dev~4 index.js
```
- 특정 파일만 이전 상태로 복구.
- `index.js` 파일의 상태를 `HEAD`로부터 4개 commit 전으로  복구restore.

```
$ rm -rf server.js
$ git checkout server.js
```
- 혹시 파일을 실수로 삭제하더라도 복구 가능.

> [!tip] 
> 파일 이름과 branch 이름이 동일한 경우 `git checkout -- file-with-same-branch-name.js`처럼 `--` 사용. 이런 경우는 거의 없겠지만.

> [!tip]
> Git 2.23.0 부터,
> - `git switch <branch-name>`을 통해 branch 변경 가능
> - `git restore <filename>` 처럼 더 직관적인 명령으로 파일을 복구할 수 있음.


## Merging Branches
```
$ git checkout -m <new-branch-name>
```
- 현재 수정된 내용을 먼저 새로 변경할 branch에 merge하고, 새로운 branch로 전환switch.
- 

## Detached HEAD
다음의 네 가지 경우에 detached HEAD 상태가 됨:
1. tag나 어떤 직접적인 참조를 이용해 branch의 끝tip이 아닌 위치로 checkout한 경우,
2. tracking branch를 checkout한 경우
	- `git checkout origin/main`처럼 remote branch를 checkout한 경우 해당 branch를 tracking branch라고 부름.
	- local branch와 다르게 detached HEAD 상태가 되어 commit history를 앞뒤로 오가며 탐색explore할 수 있게 된다고.
	- read-only라는 이야기가 있는데 이건 확인 필요.
3. [[git-bisect|`git bisect`]]
4. [[git-submodule|`git submodule update`]]

> [!warning]
> detached HEAD 상태에서의 commit은 `HEAD` 이외에 참조 수단이 없으므로 다른 branch로 이동할 경우 commit  history가 유실될 수 있음. 항상 [[git-tag|tag]] 등의 방법으로 참조할 수 있는 방법을 만들어 놓을 것.


## Deleting Branches
```
$ git branch -d <branch-name>
```
- remote branch를 삭제하려면 `-r` 옵션option 사용.
- 당연히 현재 활성화된 branch는 삭제할 수 없음.
- 또한, 현재 branch에 없는 commit을 가진[^1] branch도 삭제할 수 없음.
	- 이 경우 “The branch ‘branch-name’ not fully merged.” 라는 에러 메시지 출력.
	- `-D` 옵션으로 무시하고 삭제도 가능.

[^1]: merge 되지 않은 commit을 가진.


> [!quote] 
> Again, this is merely a friendly reminder. Git is not mandating that all branches be merged into the main branch before they can be deleted.

무슨 의미일까? branch 삭제 전 merge를 강제하진 않는다? branch는 commit object에 대한 포인터pointer일 뿐이니까 branch, 즉 포인터를 삭제해도 commit object 자체는 삭제되지 않는다는 의미일까? 그렇다면 강제로 branch를 삭제하더라도 commit object ID만 알고 있다면 나중에라도 commit을 하나씩 찾아 merge할 수 있을까?

> [!quote]
> Git will eventually prune away commits that are no longer referenced and reachable from some named reference, such as a branch name or tag name. If you want to keep those commits, you must either merge them into a different branch, make a branch for them, or point a tag reference to them. Otherwise, without a reference to them, commits and blobs are unreachable and will eventually be collected as garbage by the git gc tool.

이어지는 내용을 읽어보면 불행히도 ‘그런 식으로 복구할 수는 없다’인 듯. branch를 삭제하기 전에 꼭 merge를 해야 하는 것은 아니지만, branch 삭제에 의해 접근 불가능해진 commit들은 결국엔 사라지는데, 정확히는 `git gc`에 의해 gabate collection 되는 것. 

반대로 말하면, commit history를 잃고 싶지 않다면 반드시 참조할 수 있도록 bracnh나 tag를 만들어 두어야 한다는 의미. 혹시 실수로 삭제했다면 [[git-reflog|`git reflog`]]로 복구도 가능하다고.
 
 
[^2]:  not reachable.
[^3]: `git gc`

> [!todo] 
> garage collection 주기? 시점? 은 어떻게 되는걸까? 이건 설정값 `gc.reflogExpire`와 `gc.pruneExpire`가 관계있는 것 같은데.


## References
































