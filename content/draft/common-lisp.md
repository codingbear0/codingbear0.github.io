---
title: Common Lisp
date: 
tags:
- programming language
- lisp
draft: true
---

다양한 [[/lisp|Lisp]] 방언<sub>dialect</sub> 통합을 위해 만들어진 언어:
- ANSI 표준[^1]으로 채택되기 전까지 사실상의<sub>de facto</sub> 표준 Lisp.

> [!note]
> 요즘은 [[/scheme|Scheme]]이나 [[/clojure|Clojure]]가 더 유명한듯?


여러 구현체[^2] 중 보통 [[/sandbox/sbcl|Steel Bank Common Lisp]]을 사용.

[^1]: ANSI X3.226-1994
[^2]: Lisp 의 상세 spec.이 ANSI 표준으로 만들어져 있기 때문에, 다양한 구현체<sub>implementation</sub>가 존재.

## [[/sandbox/repl|REPL]]
[REPL]은 간단하게,
```sh
$ sbcl
```
- 종료는 당황하지 말고 `‌(quit)`.

또는 [docker]를 이용:
```sh
$ docker -it --rm -v [/path/to/local/code]:/home/cl/common-lisp/source clfoundation/cl-devel:latest sbcl
```
- `/path/to/local/code`는 적당히 수정.
- docker image는 5.7GB로 생각보다 큰 편.



> [!bug]
> 이 이미지는 macOS에서 동작하지 않고, 대신 [docker hub](https://hub.docker.com)에서 찾은 [fukamachi/sbcl](https://hub.docker.com/r/fukamachi/sbcl)를 사용하면 될 듯. 이미지도 
https://github.com/fukamachi/dockerfiles






## References
- https://lispcookbook.github.io/cl-cookbook/


### References
- [The Common Lisp Cookbook](https://lispcookbook.github.io/cl-cookbook/)
- https://en.wikipedia.org/wiki/Lisp_(programming_language)
