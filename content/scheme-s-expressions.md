---
title: S-expressions
date: 2024-06-27
tags:
- Scheme
draft: true
---


> [!quote] All the data types discussed here can be lumped together into a single all-encompassing data type called the s-expression (s for symbolic). Thus `42`, `#\c`, `(1 . 2)`, `#(a b c)`, `”Hello""`, `(quote xyz)`, `(string‑>number "16"")`, and `(begin (display "Hello, World!"")` `(newline))` are all s-expressions.

- S-expression:
    - 모든 data type[^1][^2]을 아울러서 하나의 포괄적인 data type으로 묶는 개념.
    - `S`는 symbolic을 의미.

[^1]: simple data type인 boolean, number, character, symbol과 compound data type인 vector, string, list 등을 모든 data type.
[^2]: other data type으로 분류되는 procedure와 port 등도 모두 포함.

> [!question] 구체적인 개별 data type을 정의해 놓고 왜 [[scheme-s-expression|S-expression]]이라는 포괄적 개념을 또 만든거지? 뭐에 쓰려고?


### References
- [[/book-teach-yourself-scheme-in-fixnum-days|Teach Yourself Scheme in Fixnum Days]]