---
title: Go
datet: 2023-02-02
tags:
- Programming Language
- Go
draft: true
---

> [!quote] Build simple, secure, scalable systems with Go.

- 2007년에 Google에서 개발한 프로그래밍 언어[^1]:
    - 꾸준히 점유율이 상승중이지만 Goolge 말고는 사용되는 곳이 별로 없는지, 절대적인 점유율은 그렇게 높지 않은 편. [[tiobe-index|TIOBE Index]] 순위[^2]는 1.93%로 7위.
    - [[docker|Docker]], [[kubernetes|Kubernetes]] 등의 개발에 사용.

- 여러 개발자가 함께 협업하는 최근의 환경에 대한 고려가 언어 설계에 많이 반영되어 있음:
    - 복잡한 코드 보다 읽기 쉽고 이해하기 쉽도록 코드를 작성해야 한다<sub>readability</sub>고 강조[^3].
    - linter, testing, race-condition detection 도구를 자체 내장.
    - [[go-goroutine|goroutine]]을 통해 concurrency를 쉽고 안정적으로 사용 가능.

> [!note] 최근에 만들어진만큼 최신 언어의 느낌이 나는데, 의외로 `class`를 지원하지 않는다던가  `generic`에 대한 지원이 초기 릴리즈에서 빠졌던 점[^4], 그러면서도 또 `pointer`를 제공하는 점은 좀 의아하기도 하고?

- 전체적으로 [[python|Python]]과 비슷한 [[programming-language-learning-curve|learning curve]]를 그리는 듯.

> [!note] 논리적으로 딱 집어 명확하게 설명할 순 없지만 ‘Google 냄새’가 많이 나는 느낌의 언어. 그렇게 생각해서 더 그런 걸지도 모르겠지만. 


[^1]: Go 1은 2012년 3월 릴리즈
[^2]: [[tiobe-index|TIOBE Index]] 2024년 6월 기준 점유율 1.93%로 7위. 1위는 [[python|Python]] 15.39%
[^3]: 특히 performance와 readability가 충돌할 때도 readability를 우선
[^4]: Go 1.18 부터 지원


---
### Books
- [[/book-learning-go|Learning Go]] 2/e, 2024
- [[/book-100-go-mistakes|100 Go Mistakes]], 2022


### Linters
- [[golangci-lint]]
- https://golang.org/cmd/vet/

### and Formatters
- https://golang.org/cmd/gofmt/
- https://godoc.org/golang.org/x/tools/cmd/goimports


### References
- https://go.dev

#TODO
- [Effective Go](https://go.dev/doc/effective_go)
- [The GitHub repo for Learning Go](https://github.com/learning-go-book)
- [The Go Playground](https://go.dev/play/)
- [Getting started with VS Code Go](https://www.youtube.com/watch?v=1MXIGYrMk80), 1/30/2021, youtube
- [golangci-lint](https://golangci-lint.run/)
- [Go Code Review Comments](https://github.com/golang/go/wiki/CodeReviewComments)
