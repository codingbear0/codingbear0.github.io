---
title: Version Control with Git
date: 2024-06-22
tags:
- book
- git
draft: false
---

| | |
| --- | --- |
| 원제 | Version Control with Git, 3/e |
| 지은이 | Prem Kumar Ponuthorai,  Jon Loeliger |
| 출판사 | O’Reilly, 2022 |

표지의 박쥐 그림이 인상적인 책.
- 부제는 “Powerful Tools and Techniques for Collaborative Software Development”.
- 총 18 챕터로 구성:
	- Git 기본 사용법만 익히려면 **Part III**[^1]까지만.
	- **Part IV**[^2] 부터는 필요할 때 찾아봐도 될 듯.

[^1]: Ch. 12 까지.
[^2]: Ch. 13 부터 Ch. 18 까지.

<BR />

그런데,
- 내용은 군더더기 없고 괜찮은 듯하나 따라할 수 있는 예제가 전무해 입문서로는 적절치 않음. 오히려 어느정도 Git에 익숙한 상태에서 내부 구조를 더 알고 싶은 사람에게 어울리는 책.
- 예제 없이 설명만 계속 나열하고 있는데, 분량도 만만찮아[^3] 자칫 굉장히 지루하게 느껴질 수도.
- 입문서로는 같은 출판사의 [[book-learning-git|Learning Git]]이 더 나은 선택일 듯.

> [!note]
> [Git]을 사용하는덴 이런 책 한 권을 다 읽을 필요는 없지만, 내부 구조가 궁금하다면 한 번쯤은?

[^3]: 546페이지.

<BR />

[[book-rating|점수]]는 -/5점.
- 표지의 박쥐는 인상적이나 내용은 인상적이지 않은 책.
- 다만, Git에 익숙해진 후에 다시 읽어 보면 평가가 달라질 수도?

## References

<!--
Git Command는 다음의 여섯 가지 카테고리로 구분 가능[^1]:
1. main porcelain commands
2. ancillary commands
3. low-level commands
4. external commands
5. commands that act as a bridge with a selected version control tool(interacting with other commands)
6. command aliases

> [!note] 주로는 main procelain. 가끔 ancillary와 low-level 정도만 사용하고 나머지(4번과 5번)는 거의 쓸 일이 없을 듯?

[^1]: `git help -a`

- [Lazygit]
- [[/sandbox/gitu|Gitu]]

## Basic Commands
다 정리할 필요는 없어 보이고[^1], 명령 중 잘 까먹거나 유용한 옵션 위주로 정리.

- [[git-config]]
- [[git-init]]
- [[git-add]]
- [[git-commit]]
- [[git-status]]
- [[git-log]]
- [[git-rm]]
- [[git-diff]]

[^1]: [[book-pro-git|Pro Git]]처럼 무료로 공개된 책도 있고, 검색만으로도 많은 자료를 찾을 수 있으므로.

## Terminology
- working directory:
    - [git-init|`git init`]으로 초기화한, `.git/`가 있는 디렉터리directory.
    - working directory 내에서 이루어진 파일 추가, 수정 등의 변경 내역은 [Git]에 의해 `.git/`에 저장.
 
- Blob, **b**inary **l**arge **ob**ject
- staging
- object store
- SHA1

## SHA1
- SHA1, hash, object ID 등으로 불림.
- 160-bit, 40자리 16진수로 표현.
- 대부분 40자리 전체 ID 대신 앞의 7자리만 사용해도 무방.

SHA1 hash 값은 같은 파일[^1]에 대해 항상 동일한 값을 가짐.
- 같은 파일[^1]이라면 서로 다른 디렉터리에 있더라도, 심지어 서로 다른 머신이라도 항상 동일한 값.
- 그래서 global unique identifier로 사용 가능.


[^1] 정확히는 같은 파일 content.

파일의 내용이 변경되면 파일의 content로 부터 SHA1 hash 계산하고 동일한 SHA1 값을 가지는 파일이 저장되어 있지 않다면, 해당 파일을 Blob으로 저장.
- 만약 동일한 content라면 같은 SHA1 hash 값을 가짐 $\to$ 하나의 파일만 blob object로 저장.
- 파일 내용은 blob object로 파일 이름과 경로 등의 정보는 tree object로 저장

파일 이름name이나 변경 사항difference만 저장하는게 아니라 파일의 content를 통째로 저장하는 비효율을 어떻게 해결?
- 약간의 수정만 있어도 파일 전체를 새로 저장해야 하는데? 
- [zlib]를 써서 압축한다고.

> [!quote] Finally, you can separate options from a list of arguments via the bare double dash convention. For instance, use the double dash to contrast the control portion of the command line from a list of operands, such as filenames:
- bare double dash `--`를 argument 사이에 넣어, argument와 option을 분리할 수 있음.
- 다음의 두 명령은 다른 것,
    - checkout the tag named “main.c”:
    ```sh
    $ git checkout main.c
    ```
    - checkout the file named “main.c”:
    ```sh
    $ git checkout -- main.c
    ```
-->

