---
title: Red-Green-Refactor 
date: 2024-07-22
tags:
- Term
- TDD
draft: false
---

- [[/person-kent-beck|Kent Beck]]의 [[/book-test-driven-development-by-example|Test Driven Development]]에서 언급된 세 단계로 구성된 TDD 개발 과정:
    - 책에서는 Red/Green/Refactor를 TDD Mantra라고 부름.

> [!quote] red/green/refactor - TDD mantra.
> 1. *Red* - Write a little test that doesn’t work, and perhaps doesn’t even compile at first.
> 2. *Green* - Make the test work quickly, committing whatever sins necessary in the process.
> 3. *Refactor* - Eliminate all of the duplication created in merely getting the test to work.
- 실패하는 테스크 코드를 작성(*red*)한 뒤[^1], 테스트 코드가 동작하도록 만들고(*green*), 중복을 제거하는(*refactor*) 세 단계로 구성:
    - *green* 과정에서 “whatever sins necessary”가 중요한데, 
    - 일단 어떻게든 동작하게만 만들고 구조 개선이나 중복 코드 제거 등의 작업은 *refactor* 에서 하는 것.


---
### from [[/book-learning-test-driven-development|Learning Test-Driven Development]]
- [[/book-learning-test-driven-development|Learning Test-Driven Development]]에서도 Red-Green-Refactor를 언급.

> [!quote]
> 1. *Red*. We write a failing test (including possible compilation failures). We run the test suite to verify the failing tests.
> 2. *Green*. We write just enough production code to make the test green. We run the test suite to verify this.
> 3. *Refactor*. We remove any code smells. These may be due to duplication, hardcoded values, or improper use of language idioms (e.g., using a verbose loop instead of a built-in iterator). If we break any tests during refactoring, we prioritize get‐ ting them back to green before exiting this phase.
- 표현은 다르지만 [[/person-kent-beck|Kent Beck]]의 책과 동일한 설명.
- 다만, TDD Mantra라는 표현 대신 RGR cycle이라 부름.
