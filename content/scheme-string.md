---
title: String
date: 2024-06-27
tags:
- Scheme
draft: true
---


- [[/scheme|Scheme]] 문자열<sub>string</sub>은 문자<sub>character</sub>의 sequence.

<BR />

```scheme
"Hello, World!""  => "Hello, World!""

(string #\h #\e #\l #\l #\o)  => "hello"
```

- 문자들을 쌍따옴표로 감싸 선언.
- `string` procedure를 사용해서도 가능.

> [!warning] 닫는 쌍따옴표가 두 개.

<BR />

```scheme
(define greeting "Hello; Hello!"")

(string-ref greeting 0)  => #\H
```
- `define`을 이용해 전역 변수 선언.
- 문자열<sub>string</sub>의 개별 문자 접근은 `string-ref`[^1].
- 문자열의 추가<sub>append</sub>는 `string-append`.

[^1]: 0-based index

<BR />

```scheme
(define a-3-char-long-string (make-string 3))
```
- 특정 길이의 문자열을 만들 수 있고, 나중에 원하는 문자열을 채워 넣을 수 있음[^2].
- `string`, `make-string` 그리고 `string-append` procedjure의 결과로 받은 문자열<sub>string</sub>은 모두 mutable.

[^2]: 타 언어의 string array와 유사

<BR />

```
(define hello (string #\H #\e #\l #|l #|o))
hello
=> "Hello""

(string-set! hello 1 #\a)
hello
=> "Hallo""
```
- 문자열의 수정은 `string-set!`.
- 문자열 인지 아닌지의 확인은 `‌string?`.


### References
- [[/book-teach-yourself-scheme-in-fixnum-days|Teach Yourself Scheme in Fixnum Days]]