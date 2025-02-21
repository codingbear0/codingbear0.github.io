---
title: Is TDD Dead?
date: 2025-01-24
tags:
- tdd
draft: false
---

[[/sandbox/tdd|TDD]]에 대한 논의를 위해 Kent Beck, David Heinemeier Hansson, Martin Fowler가 진행한 일련의 대화.
- 2014년 David Heinemeier Hansson가 자신의 블로그에 [TDD is dead. Long live testing.](https://dhh.dk/2014/tdd-is-dead-long-live-testing.html)란 글을 게시하면서 시작.


---
## [[/sandbox/learning-test-driven-development|Learning Test-Driven Development]]
> [!quote]
> Therefore, the practice of keeping the unit tests around, executing them regularly via
the CI/CD server, and refining them as the production code evolves, is indispensible. In a sense, software is a building that’s always undergoing renovation even as its inhabitants actively use it; therefore, the scaffolding has to be maintained along with the habitable construction.

- TDD의 무용론에 대한 이야기를 쉽게 찾을 수 있지만, 여전히 unit test 코드는 필수 불가결한 것이라 주장[^1].

[^2]: TDD를 다룬 책이니까 필요 없는 것이라고 할 수는 없었겠지만.

> [!quote]
> I get paid for code that works, not for tests, so my philosophy is to test as little as possible to reach a given level of confidence (I suspect this level of confidence is high compared to industry standards, but that could just be hubris). If I don’t typically make a kind of mistake (like setting the wrong variables in a constructor), I don’t test for it. I do tend to make sense of test errors, so I’m extra careful when I have logic with complicated conditionals. When coding on a team, I modify my strategy to carefully test code that we, collectively, tend to get wrong. <BR />
> Different people will have different testing strategies based on this philosophy, but that seems reasonable to me given the immature state of understanding of how tests can best fit into the inner loop of coding. Ten or twenty years from now we’ll likely have a more universal theory of which tests to write, which tests not to write, and how to tell the difference. In the meantime, experimentation seems in order.

- 2008년 [How deep are your unit tests?](https://stackoverflow.com/questions/153234/how-deep-are-your-unit-tests/153565#153565)란 질문에 Kent Beck이 답변한 전체 내용을 인용.


## References
- https://martinfowler.com/articles/is-tdd-dead/