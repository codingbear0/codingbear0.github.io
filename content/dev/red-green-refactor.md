---
title: Red-Green-Refactor 
date: 2024-07-22
tags:
- TDD
draft: false
---

> [!quote]
> This has led to the "test-driven development mantra", which is "red/green/refactor", where red means fail and green means pass. Test-driven development constantly repeats the steps of adding test cases that fail, passing them, and refactoring.

Test-Driven Development, TDD를 이용한 개발을 3단계 과정으로 설명한 것이다.
- Kent Beck의 [[/dev/book-test-driven-development-by-example|Test-Driven Development By Example]]에서 TDD mantra란 이름으로 소개.
- red, green는 각각 테스트의 실패<sub>fail</sub>와 성공<sub>pass</sub>을 의미.


---
## from [[/dev/book-test-driven-development-by-example|Test-Driven Development By Example]]

> [!quote] 
> 1. Red: Write a little test that doesn’t work, and perhaps doesn’t even compile at first.
> 2. Green: Make the test work quickly, committing whatever sins necessary in the process.
> 3. Refactor: Eliminate all of the duplication created in merely getting the test to work.
> Red/green/refactor—the TDD mantra.

[[/dev/tdd|TDD]] 바이블 격인 Kent Beck의 책에서 ‘TDD mantra’로 소개된다.


## from [[/dev/book-learning-test-driven-development|Learning Test-Driven Development]]

Kent Beck의 책과 표현은 조금 다르지만 내용은 동일하게 Red-Green-Refactor를 소개하고 있다.
- 다만 TDD Mantra가 아니라 RGR[^1] Cycle이라 부름.

[^1]: RGR, Red-Green-Refactor