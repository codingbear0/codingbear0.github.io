---
title: Vector
datetime: 2024-06-27
tags:
- Scheme
draft: true
---


- [[/scheme|Scheme]] vector는 문자열<sub>string</sub>과 유사한 sequence의 일종.
- 단, vector의 element는 문자<sub>character</sub>가 아닌 모든 것:
    - element는 vector 자체가 될 수도 있어 다차원<sub>multidimensional</sub> vector도 가능.
<BR />

```scheme
(vector 0 1 2 3 4)  => #(0 1 2 3 4)
```
- `make-vector`로 특정 길이의 vector 생성 가능.
- 문자열과 유사하게 개별 element에 대한 접근, 수정에 각각 `vector-ref`와 `vector-set!`을 사용.
- vector 인지 아닌지에 대한 확인은 `‌vector?`.

> [!question] element가 문자<sub>character</sub>면 문자열<sub>string</sub>?



### References
- [[/book-teach-yourself-scheme-in-fixnum-days|Teach Yourself Scheme in Fixnum Days]]