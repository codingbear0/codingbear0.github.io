---
title: Pro Git
date: 2023-11-23
tags:
- Book
- Git
draft: true
---

- [[vcs-git|Git]]에 관한 모든 것:
    - 온라인에서 모든 내용을 무료로 다 볼 수 있고[^1], Apress에서 출판된 종이 책도 있음.
    - [[book-rating-criteria|점수]]는 4/5점.

[^1]: 영어 및 한글 번역본을 제공하며 PDF 다운로드도 가능.


### What is Git?
[[vcs-git|Git]]의 주요 특징, 다른 VCS와의 차이점:
- Snapshots, Not Differences
- Nearly Every Operation Is Local
- Git Has Integrity:
    - 모든 정보는 저장되기 전 checksum을 계산.
    - checksum은 [[sha-1|SHA-1]] hash를 사용하며, 16진수 문자[^2]로 구성된 40글자 길이.

[^2]: `0`-`9` 그리고 `a`-`f`

- Git Generally Only Adds Data
- [[vcs-git-three-states|The Three States]]


### References
- https://git-scm.com/book/en/v2


#TODO
### Configuration
- [[git-config|git config]]

### Core
- [[git-init|git init]]
- [[git-clone|git clone]]
- [[git-add|git add]]
- [[git-commit|git commit]]
- [[git-status|git status]]
- [[git-diff|git diff]]
- [[git-checkout|git checkout]]
- [[git-reset|git reset]]
- [[git-log|git log]]
- [[git-show|git show]]
- [[git-tag|git tag]]
- [[git-push|git push]]
- [[git-pull|git pull]]

### Branching:
- git branch
- git checkout -b
- git merge
- git rebase
- git branch --set-upstream-to
- git branch --unset-upstream
- git cherry-pick

### Merging:
- git merge
- git rebase

### Stashing:
- git stash
- git stash pop
- git stash list
- git stash apply
- git stash drop

### Remotes:
- git remote
- git remote add
- git remote remove
- git fetch
- git pull
- git push
- git clone --mirror

### Configuration:
- [git config][]
- git global config
- git reset config

### Plumbing:
- git cat-file
- git checkout-index
- git commit-tree
- git diff-tree
- git for-each-ref
- git hash-object
- git ls-files
- git ls-remote
- git merge-tree
- git read-tree
- git rev-parse
- git show-branch
- git show-ref
- git symbolic-ref
- git tag --list
- git update-ref

### Porcelain:
- git blame
- git bisect
- git checkout
- git commit
- git diff
- git fetch
- git grep
- git log
- git merge
- git push
- git rebase
- git reset
- git show
- git tag

### Alias:
- git config --global alias.<alias> <command>

### Hook:
- git config --local core.hooksPath <path>

### Experimental(may not be fully supported):
- git annex
- git am
- git cherry-pick --upstream
- git describe
- git format-patch
- git fsck
- git gc
- git help
- git merge-ours
- git merge-recursive
- git merge-subtree
- git mergetool
- git mktag
- [git mv][]
- git patch-id
- git p4
- git prune
- git pull --rebase
- git push --mirror
- git push --tags
- git reflog
- git replace
- git reset --hard
- git reset --mixed
- git revert
- [git rm][]
- git show-branch
- git show-ref
- git show-ref --heads
- git show-ref --tags
- git stash save
- git subtree
- git tag--delete
- git tag--force
- git tag--sign
- git tag-f
- git tag -l
- git tag--verify
- git unpack-file
- git update-index
- git verify-pack
- git worktree

### git config


### git global config
### git reset config




### git init & git clone
- 기존 디렉토리를 저장소<sub>repository</sub>로: 
	```sh
	$ git init
	```

- 기존 저장소를 클론<sub>clone</sub>:
	```sh
	$ git clone https://github.com/libgit2/libgit2 
	```
	
	또는
	```sh
	$ git clone https://github.com/libgit2/libgit2 mylibgit
	```
	$\to$ Git과 Subversion의 가장 큰 차이점은 서버에 있는 ==거의 모든 데이터==를 복사한다는 점[^원문: Git receives a full copy of nearly all data that the server has.].
	
	==`#`== 거의 모든 데이터? 왜 ‘거의’일까?
	

### git status
- 파일 상태 확인:
	```sh
	$ git status
	On branch master
	Your branch is up-to-date with 'origin/master'.
	Changes to be committed:
		(use "git reset HEAD <file>..." to unstage)
		
		new file:   README
	
	Changes not staged for commit:
		(use "git add <file>..." to update what will be committed)
		(use "git checkout -- <file>..." to discard changes in working
	directory)
	
		modified:   CONTRIBUTING.md
	```
	- `Changes to be committed`: *tracked* + *staged* 상태의 파일들.
	- `Changes not staged for commit`: *tracked* + *unstaged*(=modified) 상태의 파일들.
- 간략하게:
	```sh
	$ git status -s
	```
	또는 
	```sh
	git status --short
	```


### git add
```sh
$ git add README
```
- 다음의 두 용도로 사용:
	- 파일을 새로 *tracked* 상태로[^*untracked* 상태에서 *tracked* + *staged*인 상태로.] [^`git status`로 해당 파일(들)이 `Untracked files` 항목에서 `Changeds to be committed` 항목으로 이동되는 것을 확인 가능.].
	- 이미 *tracked* 상태지만 파일이 변경되어 *unstaged* 상태일 때 *staged* 상태로[^*tracked* + *unstaged* 상태에서 *tracked* + *staged* 상태로.] [^`git status`로 해당 파일(들)이 `Changeds not staged for commit` 항목에서 `Changeds to be committed` 항목으로 이동되는 것을 확인 가능.].


### git diff
- 수정했지만 아직 *staged* 상태가 아닌 파일과 비교[^*working directory*에 있는 파일과 *staging area*에 있는 파일의 비교.]:
```sh
$ git diff
```

- *staging area*에 넣은 파일과 비교[^*commit* 된 파일과 *staging area*에 있는 파일의 비교.]:
```sh
$ git diff --staged
```
또는
```sh
$ git diff --cached
```

- `git diff`는 *commit* 한 이후의 수정 내역을 전부 보여주지 않음에 주의. *unstaged* 상태인 것들만 보여주므로 파일을 모두 *staging area*에 넣었다면 아무것도 출력되지 않음.


### git commit
- *staging area*의 파일을 *commit*:
```sh
$ git commit
```
 또는 
```sh
$ git commit -m "Story 182: Fix benchmarks for speed"
```

- `git commit`을 실행하면  기본 *editor* 실행[^ *Shell* 의 `$EDITOR` 환경 변수 수정 또는 `git config --global core.editor` 명령을 통해 변경 가능.]:
	- 기본 *commit message* 는 `git status`의 결과로 채워지는데, `git commit -v`를 사용하면 `git diff`의 결과도 함께 추가됨.
	- *editor*에 자동으로 채워지는 내용[^ `git status`와 `git diff`의 결과.]은 주석을 삭제하지 않는 한 실제 *commit message* 에 추가되지 않음, 그냥 *commit* 전 내용 확인 용도.

- `git add`를 생략하고 *tracked* + *unstaged* 파일을 *staging area*에 추가하고 바로 *commit*:
	```sh
	$ git commit -a -m 'added new benchmarks'
	```


### git rm
- *tracked* 상태의 파일 삭제:
	```
	$ git rm PROJECTS.md
	```
	- 정확히는 *staging area*에서 삭제, 다시 말해 *untracked* 상태 + 삭제.
	- *working directory*의 파일도 삭제하기 때문에 실제 파일이 삭제되므로 주의할 것.

- 파일을 수정했거나 *staging area* 에 추가했다면 `-f` 사용:
	```sh
	$ git rm -f PROJECTS.md
	```

- *staging area*에서 제거하지만 파일은 삭제하지 않고 남겨두려면 `--cached`:
	```sh
	$ git rm --cached README
	```
	- `git rm`과 비교하면 `git rm`은 *untracked* 상태로의 변경 후 파일 삭제까지 수행하지만, `git rm --cached`는 *untracked*으로 상태 변경만 한다고 볼 수 있음.
- 다수의 파일 및 디렉터리 삭제는 [[/A Brain/dev/glob-pattern|file-glob 패턴]] 이용:
	```sh
	$ git rm log/\*.log
	```


### git mv

[[git-mv| git mv]]
- 파일 이름 변경:
	```sh
	$ git mv README.md README
	```

- 사실은, `mv`, `git rm` 그리고 `git add`의 조합일 뿐:
	```sh
	$ mv README.md README
	$ git rm README.md
	$ git add README
	```
  
    
### git log
[[git-log|git log]]
- 히스토리 조회:
	```sh
	$ git log
	commit ca82a6dff817ec66f44342007202690a93763949
	Author: Scott Chacon <schacon@gee-mail.com>
	Date:   Mon Mar 17 21:52:11 2008 -0700

		  changed the version number
     Rakefile | 2 +-
     1 file changed, 1 insertion(+), 1 deletion(-)

	commit 085bb3bcb608e1e8451d4b2432f8ecbe6306e7e7
	...
	```

- `-p` or `--patch`: 각 *commit*의 *diff* 결과를 함께 출력.
- `--stat`: 통계 정보
- `--shortstat`: `--stat` 결과 중 수정된 파일 수와 추가﹒삭제된 라인에 대한 통계만.
	```
	$ git log --stat
	commit ca82a6dff817ec66f44342007202690a93763949
	...
		README           |  6 ++++++
		Rakefile         | 23 +++++++++++++++++++++++
		lib/simplegit.rb | 25 +++++++++++++++++++++++++
		3 files changed, 54 insertions(+)
	```
- `--pretty=oneline,short,full,fuller,format`
- `--oneline`: `--pretty=oneline`과 `--abbrev-commit`의 조합.
- `--graph`: *branch*와 *merge* 히스토리 그래프 출력
- Limiting log output:
|:--- 					|:--- |-|
| `-<n>` 					| 최근 *n*개의 *commit* 만 조회 ||
| `--since`, `--after`	| 날짜 이후만 조회, \~부터 [^e.g. `--since=2.weeks`, `--since=“2008-01-15”`, `--since="2 years 1 day 3 minutes ago"`] ||
| `--until`, `--before` 	| 날짜 이전만 조회, \~까지 ||
| `--author` 				| ||
| `--committer` 			| ||
| `--grep` 				| *commit message* 검색 ||
| `-S` 					| *commit* 에 추가되거나 삭제된 코드 검색 ||

[[git-commit|git commit]]
### git commit --amend

```
$ git commit --amend

$ git commit -m 'initial commit'
$ git add forgotten_file
$ git commit --amend
```



```
$ git add *
$ git status
On branch master
Changes to be committed:
(use "git reset HEAD <file>..." to unstage)
  renamed:    README.md -> README
  modified:   CONTRIBUTING.md
```

```
$ git reset HEAD CONTRIBUTING.md
Unstaged changes after reset:
M   CONTRIBUTING.md
$ git status
On branch master
Changes to be committed:
(use "git reset HEAD <file>..." to unstage)
renamed:    README.md -> README
Changes not staged for commit:
(use "git add <file>..." to update what will be committed)
(use "git checkout -- <file>..." to discard changes in working
directory)
modified:   CONTRIBUTING.md
```
      
      
  
```
Changes not staged for commit:
(use "git add <file>..." to update what will be committed)
(use "git checkout -- <file>..." to discard changes in working
directory)
modified:   CONTRIBUTING.md
```



```
$ git checkout -- CONTRIBUTING.md
$ git status
On branch master
Changes to be committed:
(use "git reset HEAD <file>..." to unstage)
  renamed:    README.md -> README
```



```
$ git clone https://github.com/schacon/ticgit
Cloning into 'ticgit'...
remote: Reusing existing pack: 1857, done.
remote: Total 1857 (delta 0), reused 0 (delta 0)
Receiving objects: 100% (1857/1857), 374.35 KiB | 268.00 KiB/s, done.
Resolving deltas: 100% (772/772), done.
Checking connectivity... done.
$ cd ticgit
$ git remote
origin
```



```
$ git remote -v
origin  https://github.com/schacon/ticgit (fetch)
origin  https://github.com/schacon/ticgit (push)
```


```
$ cd grit
$ git remote -v
bakkdoor  https://github.com/bakkdoor/grit (fetch)
bakkdoor  https://github.com/bakkdoor/grit (push)
cho45
cho45
defunkt
defunkt
koke
koke
origin
origin
https://github.com/cho45/grit (fetch)
https://github.com/cho45/grit (push)
https://github.com/defunkt/grit (fetch)
https://github.com/defunkt/grit (push)
git://github.com/koke/grit.git (fetch)
git://github.com/koke/grit.git (push)
git@github.com:mojombo/grit.git (fetch)
git@github.com:mojombo/grit.git (push)
```




```
  $ git remote
  origin
  $ git remote add pb https://github.com/paulboone/ticgit
  $ git remote -v
  origin  https://github.com/schacon/ticgit (fetch)
  origin  https://github.com/schacon/ticgit (push)
  pb  https://github.com/paulboone/ticgit (fetch)
  pb  https://github.com/paulboone/ticgit (push)
```



```
  $ git fetch pb
  remote: Counting objects: 43, done.
  remote: Compressing objects: 100% (36/36), done.
  remote: Total 43 (delta 10), reused 31 (delta 5)
  Unpacking objects: 100% (43/43), done.
  From https://github.com/paulboone/ticgit
   * [new branch]      master     -> pb/master
   * [new branch]      ticgit     -> pb/ticgit
```


```
  $ git fetch <remote>
```


```
$ git push origin master
```


```

  $ git remote show origin
  * remote origin
    Fetch URL: https://github.com/schacon/ticgit
    Push  URL: https://github.com/schacon/ticgit
    HEAD branch: master
    Remote branches:
      master                               tracked
      dev-branch                           tracked
    Local branch configured for 'git pull':
      master merges with remote master
    Local ref configured for 'git push':
      master pushes to master (up to date)

```


```
$ git remote show origin
* remote origin
  URL: https://github.com/my-org/complex-project
  Fetch URL: https://github.com/my-org/complex-project
  Push  URL: https://github.com/my-org/complex-project
  HEAD branch: master
  Remote branches:
    master
    dev-branch
    markdown-strip
    issue-43
remotes/origin)
    issue-45
remotes/origin)
    refs/remotes/origin/issue-11
tracked
tracked
tracked
new (next fetch will store in
new (next fetch will store in
stale (use 'git remote prune' to
remove)
  Local branches configured for 'git pull':
    dev-branch merges with remote dev-branch
    master     merges with remote master
  Local refs configured for 'git push':
    dev-branch
(up to date)
    markdown-strip
(up to date)
    master
(up to date)
```




```

  $ git remote rename pb paul
  $ git remote
  origin
  paul

```

```
  $ git remote remove paul
  $ git remote
  origin
```


```

  $ git tag
  v0.1
  v1.3
```



```
 $ git tag -l "v1.8.5*"
  v1.8.5
  v1.8.5-rc0
  v1.8.5-rc1
  v1.8.5-rc2
  v1.8.5-rc3
  v1.8.5.1
  v1.8.5.2
  v1.8.5.3
  v1.8.5.4
  v1.8.5.5
```




```
  $ git tag -a v1.4 -m "my version 1.4"
  $ git tag
  v0.1
  v1.3
v1.4

```


```
  $ git show v1.4
  tag v1.4
  Tagger: Ben Straub <ben@straub.cc>
  Date:   Sat May 3 20:19:12 2014 -0700
  my version 1.4
  commit ca82a6dff817ec66f44342007202690a93763949
  Author: Scott Chacon <schacon@gee-mail.com>
  Date:   Mon Mar 17 21:52:11 2008 -0700
      changed the version number
```

```

  $ git tag v1.4-lw
  $ git tag
  v0.1
  v1.3
  v1.4
  v1.4-lw
  v1.5

```

```

  $ git show v1.4-lw
  commit ca82a6dff817ec66f44342007202690a93763949
  Author: Scott Chacon <schacon@gee-mail.com>
  Date:   Mon Mar 17 21:52:11 2008 -0700
      changed the version number
```




```
  $ git log --pretty=oneline
  15027957951b64cf874c3557a0f3547bd83b3ff6 Merge branch 'experiment'
  a6b4c97498bd301d84096da251c98a07c7723e65 beginning write support
  0d52aaab4479697da7686c15f77a3d64d9165190 one more thing
  6d52a271eda8725415634dd79daabbc4d9b6008e Merge branch 'experiment'
  0b7434d86859cc7b8c3d5e1dddfed66ff742fcbc added a commit function
  4682c3261057305bdd616e23b64b0857d832627b added a todo file
  166ae0c4d3f420721acbb115cc33848dfcc2121a started write support
  9fceb02d0ae598e95dc970b74767f19372d61af8 updated rakefile
  964f16d36dfccde844893cac5b347e7b3d44abbc commit the todo
  8a5cbc430f1a9c3d00faaeffd07798508422908a updated readme
```


```
  $ git tag -a v1.2 9fceb02
```

```

  $ git tag
  v0.1
  v1.2
  v1.3
  v1.4
  v1.4-lw
  v1.5
  $ git show v1.2
  tag v1.2
  Tagger: Scott Chacon <schacon@gee-mail.com>
  Date:   Mon Feb 9 15:32:16 2009 -0800
  version 1.2
  commit 9fceb02d0ae598e95dc970b74767f19372d61af8
  Author: Magnus Chacon <mchacon@gee-mail.com>
  Date:   Sun Apr 27 20:43:35 2008 -0700
      updated rakefile
```


```
 $ git push origin v1.5
  Counting objects: 14, done.
  Delta compression using up to 8 threads.
  Compressing objects: 100% (12/12), done.
  Writing objects: 100% (14/14), 2.05 KiB | 0 bytes/s, done.
  Total 14 (delta 3), reused 0 (delta 0)
  To git@github.com:schacon/simplegit.git
   * [new tag]         v1.5 -> v1.5
```

```

  $ git push origin --tags
  Counting objects: 1, done.
  Writing objects: 100% (1/1), 160 bytes | 0 bytes/s, done.
  Total 1 (delta 0), reused 0 (delta 0)
  To git@github.com:schacon/simplegit.git
   * [new tag]         v1.4 -> v1.4
   * [new tag]         v1.4-lw -> v1.4-lw
```


```
$ git checkout 2.0.0
  Note: checking out '2.0.0'.
  You are in 'detached HEAD' state. You can look around, make experimental
  changes and commit them, and you can discard any commits you make in this
  state without impacting any branches by performing another checkout.
  If you want to create a new branch to retain commits you create, you may
  do so (now or later) by using -b with the checkout command again. Example:
    git checkout -b <new-branch>
  HEAD is now at 99ada87... Merge pull request #89 from schacon/appendix-
  final
  $ git checkout 2.0-beta-0.1
  Previous HEAD position was 99ada87... Merge pull request #89 from
  schacon/appendix-final
  HEAD is now at df3f601... add atlas.json and cover image

```


```
 $ git checkout -b version2 v2.0.0
  Switched to a new branch 'version2'
```

```
  $ git config --global alias.co checkout
  $ git config --global alias.br branch
  $ git config --global alias.ci commit
  $ git config --global alias.st status
```


```
  $ git config --global alias.unstage 'reset HEAD --'
```

```
$ git unstage fileA
  $ git reset HEAD -- fileA
  
```

```
$ git config --global alias.last 'log -1 HEAD'
```



```
 $ git last
  commit 66938dae3329c7aebe598c2246a8e6af90d04646
  Author: Josh Goebel <dreamer3@example.com>
  Date:   Tue Aug 26 19:48:51 2008 +0800
      test for current head
      Signed-off-by: Scott Chacon <schacon@example.com>
```


```
  $ git config --global alias.visual '!gitk'
```

