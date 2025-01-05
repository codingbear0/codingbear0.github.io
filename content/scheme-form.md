---
title: Form
date: 2024-06-27
tags:
- Scheme
- Form
draft: true
---


- [[/scheme|Scheme]]에서는 “Programs are data.”:
    - 따라서 character data인 `#\c`는 program.
    - program 보다 더 일반적인<sub>general</sub> 용어인 form이라고도 부름.

<BR />

> [!quote] Not all s-expressions are self-evaluating. For instance the symbol s-expression xyz evaluates to the value held by the variable xyz. The list s-expression (string‑>number "16"") evaluates to the number 16.
- 모든 [[/scheme-s-expressions|S-expression]]이 self-evaluating되는 것은 아님.
- 예를 들어:
    - symbol `xyz`는 변수 `xyz`에 저장되어 있는 값으로 평가되고
    - 리스트<sub>list</sub> `‌(string->number "16"")`은 숫자 `16`으로 평가됨.

<BR />

> [!quote] Not all s-expressions are valid programs. If you typed the dotted-pair s-expression (1 . 2) at the Scheme listener, you will get an error.
- 또한 모든 S-expression이 유효한 program은 아님.
- e.g. [[/scheme|Scheme]] listener[^1]에게 `‌(1. 2)`를 입력하면 에러.

[^1]: [[repl|REPL]]

> [!question] form? S-expression?

- [[/scheme|Scheme]]은 list-form을 평가할 때 리스트<sub>list</sub>의 head를 먼저 검사하는데, 만약 head가:
    - procedure면 form의 나머지 form이 argument로 평가되어, procedure가 그 argument에 적용<sub>applied</sub>됨.
    - `begin`, `define`, `set!`과 같은 special-form이면 고유한<sub>idiosyncratic</sub> 방식으로 평가.
        - e.g. `begin`은 sub-form들이 순서대로 평가되고, 제일 마지막 sub-form이 전체 form의 결과값이 됨.

> [!note] “`begin`은 sub-form들이 순서대로 평가되고, 제일 마지막 sub-form이 전체 form의 결과값이 됨” 이라는 문장은 그냥 일반적인 함수의 동작을 설명한 것과 동일하네.

---
### Procedure
```scheme
(lambda (x) (+ x 2))

((lambda (x) (+ x 2)) 5)
=> 7
```
- special-form `lambda`를 이용해 procedure 정의:
    - 첫 번째 sub-form인 `‌(x)`는 parameter list.
    - 나머지 sub-form, 여기서는 `‌(+ x 2)`는 procedure body.

<BR />

```scheme
(define add2
  (lambda (x) (+ x 2)))
  
(add2 4)  => 6
(add2 9)  => 11
```
- procedure를 반복해 사용한다면 `define`을 이용해 procedure 값을 저장할 변수<sub>variable</sub> 선언할 수 있음.

<BR />

```scheme
(define area
    (lambda (length breadth)
        (* length breadth)))
```
- 2개 이상의 argument가 필요한 경우 `‌(length breadth)`와 같이.
- 만약 `area`라는 procedure가 argument를 곱하는 기능만 수행한다면 다음과 같이 단순하게 선언 가능. `‌(define area *)`


### Apply
```scheme
(define x '(1 2 3))

(apply + x)
=> 6

(apply + 1 2 3 x)
=> 12
```
- `apply`는 argument 리스트에 procedure를 호출

> [!note] 말이 좀 어려운데, `+`라는 primitive procedure를 argument 리스트인 `x`에 적용<sub>apply</sub>한다는 의미.


### Sequencing
```scheme
(define display3
  (lambda (arg1 arg2 arg3)
    (begin
      (display arg1)
      (display " "")
      (display arg2)
      (display " "")
      (display arg3)
      (newline))))
```
- special-form `begin`을 이용하면 순서대로 평가<sub>evaluate될 sub-form 그룹을 함께 을 수 있음.

> [!note] 함수 선언하는 방법.

<BR />

```scheme
(define display3
  (lambda (arg1 arg2 arg3)
    (display arg1)
    (display " "")
    (display arg2)
    (display " "")
    (display arg3)
    (newline)))
```
- `begin`은 생략 가능[^2].

[^2]: 원문은 "Many Scheme forms have implicit begins.”



### References
- [[/book-teach-yourself-scheme-in-fixnum-days|Teach Yourself Scheme in Fixnum Days]]