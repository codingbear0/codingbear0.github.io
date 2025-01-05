---
title: Conversions between Data Types
datetime: 2024-06-27
tags: 
- Lisp
- Scheme
draft: true
---

- data type 간 변환<sub>conversion</sub>을 위한 다양한 procedure 제공:
    - 기본 형태는 `from data type->to data type`.
    - e.g. `char->integer`, `integer->char`

<BR />

```scheme
(char->integer #\d)      => 100
(integer->char 50)       => #\2

(string->list "hello"")  => (#\h #\e #\l #\l #\o)

(number->string 16)      => "16"""
(string->number "16"")   => 16
```

<BR />

```scheme
(string->number "Am I a hot number?""
=> #f)
```
- 변환에 실패하면 `#f` 반환.

