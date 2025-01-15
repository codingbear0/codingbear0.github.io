---
title: TDD
date: 2025-01-09
tags:
- TDD
draft: false
---

> [!quote]
> Test-driven development (TDD) is a way of writing code that involves writing an automated unit-level test case that fails, then writing just enough code to make the test pass, then refactoring both the test code and the production code, then repeating with another new test case.

Test-Driven Development의 약자이다. 우리말로는 테스트 주도 개발.
- 개발하고자 하는 기능의 test code를 먼저 작성하고 이 테스트가 성공<sub>pass</sub>하도록 production code를 작성하는 개발 방법[^1].
- Kent Beck에 의해 처음 소개.
- 장점에 비해 단점도 많이 지적되는 편:
	- 많은 테스트로 인한 production code의 신뢰성 향상이 주요한 장점이라면
	- 반대로 테스트에 시간이 많이 소요되거나, code volume이 너무 커질 수 있다거나 혹은 test code 자체의 유지보수가 힘들다는 등의 단점들도 이 많은 테스트로 인한 것.

> [!note]
> 2003년 Kent Beck의 언급을 보면 TDD framework인 xUnit[^2]을 만들면서 시작된 것으로 보임.

[^1]: [[/dev/red-green-refactor|Red-Green-Refactor]]라고 부름.
[^2]: Smalltalk을 위한 TDD framework.

<BR />

---
## from [[/dev/book-test-driven-development-by-example|Test-Driven Development by Example]]
> [!quote]
> But how do we get to clean code that works? Many forces drive us away
from clean code, and even from code that works. Without taking too much
counsel of our fears, here’s what we do: we drive development with automated
tests, a style of development called Test-Driven Development (TDD)

서문에 TDD의 목표는 “Clean code that works.”이며, 이를 위해 TDD라 부르는 자동화된 테스트를 통한 개발 방법을 소개한다.


## from [[/dev/book-learning-test-driven-development|Learning Test-Driven Development]] 

> [!quote]
> Test-driven development is a technique for designing and structuring code that encourages simplicity and increases one’s confidence in code, even as its size increases.


## References
- https://en.wikipedia.org/wiki/Test-driven_development