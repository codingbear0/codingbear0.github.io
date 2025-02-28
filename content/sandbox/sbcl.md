---
title: SBCL
date: 2025-02-21
tags:
- lisp
draft: false
---

> [!quote]
> Steel Bank Common Lisp (SBCL) is a high performance Common Lisp compiler.

Steel Bank Common Lisp, SBCL:
- 대표적인 ANSI [[/sandbox/common-lisp|Common Lisp]] 구현체.
- 2025년 1월 현재 최신 버전은 2.5.1.

> [!question] 아직도 업데이트 되고 있었다고?

> [!quote]
> Radical changes have been made to some parts of the system (particularly bootstrapping) but many fundamentals (like the mapping of Lisp abstractions onto the underlying hardware, the basic architecture of the compiler, and much of the runtime support code) are only slightly changed. 
- 1999년 Carnegie Mellon University에서 만든 Common Lisp, [CMUCL](https://www.cons.org/cmucl/)으로 부터 fork.
	- 따라서 CMUCL와 공유하는 일부 코드는 [BSD license].
	- 나머지 대부분의 코드는 public domain, 즉, 라이센스가 없음[^1]. 
- Andrew Carnegie와 Andrew Mellon[^2]이 각각 철강과 금융에서 크게 성공한 것에 빗대 Steel Bank라고 지음. 


[^1]: 상업적 이용도 가능.
[^2]: Carnegie Mellon University가 이 둘의 이름에서 유래.


---
## Installation
간단하게는 [mise] 이용:
```sh
$ brew install ecl
$ miss use sbcl@2.5.1
```
- 먼저 [[/sandbox/homebrew|homebrew]]로 `ecl`을 설치해야 함.
- [asdf-vm](https://asdf-vm.com)의 [sbcl plugin](https://github.com/smashedtoatoms/asdf-sbcl)을 이용하는 듯.

> [!note] 설치 과정은 꽤 오래 걸리는 편. 5분? 6분?


혹은 [docker]:
```sh
$ docker -it --rm -v [/path/to/local/code]:/home/cl/common-lisp/source clfoundation/cl-devel:latest sbcl
```


## References
- http://sbcl.org

