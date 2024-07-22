---
title: Data Types
date: 2024-06-27
tags:
- Scheme
draft: false
---


### Boolean 
```scheme
(boolean? #t)               => #t
(boolean? "Hello, World!"") => #f

(not #f)                    => #t
(not #t)                    => #f
(not "Hello, World!"")      => #f
```
- `#t`는 true, `#f`는 false.
- `boolean?`[^1][^2]은 argument</sub>가 `boolean`인지 체크, `not`은 argument 반전<sub>negate</sub>.

[^1]: `boolean?`과 처럼 argument를 검사해 true 또는 false를 반환하는 함수<sub>procedure</sub>를 Predicate Procedure라 부름
[^2]: `?`는 [[/scheme|Scheme]]에서 Predicate Procedure를 나타내는 표기법

### Number
```scheme
(number? 42)       => #t
(number? #t)       => #f
(complex? 2+3i)    => #t
(real? 2+3i)       => #f
(real? 3.1416)     => #t
(real? 22/7)       => #t
(real? 42)         => #t
(rational? 2+3i)   => #f
(rational? 3.1416) => #t
(rational? 22/7)   => #t
(integer? 22/7)    => #f
(integer? 42)      => #t
```
- 숫자는 정수<sub>integer</sub>, 유리수<sub>rational</sub>, 실수<sub>real</sub>, 또는 복소수<sub>complex</sub>.
- 10진수가 기본[^3]. 접두사<sub>prefix</sub> `#b`는 2진수, `#o`‌와 `#x`는 각각 8진수와 16진수.
    - e.g. `#b1100`

[^3]: `#d`는 10진수를 의미. 일반적으로 생략.

<BR />

```scheme
(eqv? 42 42)       => #t
(eqv? 42 #f)       => #f
(eqv? 42 42.0)     => #f

(= 42 42)          => #t
(= 42 #f)          -->ERROR!!!
(= 42 42.0)        => #t

(< 3 2)            => #f
(>= 4.5 3)         => #t
```
- 비교는 `eqv?`, 숫자만 비교라는 경우라면 `=` 사용 가능.

<BR />

```scheme
(+ 1 2 3)    => 6
(- 5.3 2)    => 3.3
(- 5 2 1)    => 2
(* 1 2 3)    => 6
(/ 6 3)      => 2
(/ 22 7)     => 22/7
(expt 2 3)   => 8
(expt 4 1/2) => 2.0

(- 4) => -4
(/ 4) => 1/4

(max 1 3 4 2 3) => 4
(min 1 3 4 2 3) => 1

(abs  3) => 3
(abs -4) => 4

(round 2.718)   => 3
(ceiling 2.718) => 3
(floor 2.718)   => 2
```
- 숫자와 관련된 연산은 직관적.
- 이 밖에도 다양한 연산자<sub>operator</sub> 제공. [R5RS](https://conservatory.scheme.org/schemers/Documents/Standards/R5RS/HTML/)의 [6.2 Numbers](https://conservatory.scheme.org/schemers/Documents/Standards/R5RS/HTML/) 항목  참조.

### Character
```Scheme
(char? #\c)         => #t
(char? 1)           => #f
(char? #\;)         => #t

(char=? #\a #\a)    => #t
(char<? #\a #\b)    => #t
(char>=? #\a #\b)   => #f

(char-ci=? #\a #\A) => #t
(char-ci<? #\a #\B) => #t

(char-downcase #\A) => #\a
(char-upcase #\a)   => #\A
```
- 문자<sub>character</sub>를 표현할 때는 접두사<sub>prefix</sub> `#\` 사용.
    - 특수문자로 `#\newline`, `#\tab`, `#\space`[^4]등이 있음.
- 비교를 위한 predicate procedure로는 `char=?`, `char<?`, `char>=?`가 있고, 대소문자 구분없는<sub>case-insensitive</sub> 비교는 `char-ci=?` 처럼 `-ci`를 붙인 predicate procedure 사용.

[^4]: `#\space` 대신 `#\ `도 가능

### Symbol
```scheme
(quote xyz)    => xyz
```
- 숫자<sub>number</sub>나 문자<sub>character</sub>는 simple data type으로 self-evaluating. 즉, 숫자나 문자 객체<sub>object</sub>를 listener에 입력하면 listener는 입력 값과 동일한 평가<sub>evaluate</sub> 결과를 반환.
    - e.g. `#t => #t{:scheme}`
- 심볼<sub>symbol</sub>은 [[/scheme|Scheme]]에서 변수<sub>variable</sub>의 식별자<sub>identifier</sub>로 사용되기 때문에 해당 변수가 가지고 있는 값으로 평가<sub>evaluate</sub>됨[^5].
- [[/scheme|Scheme]]이 심볼을 변수로 생각하지 않게 하려면 `quote` 사용.
    - 줄여서 보통 `'E`라고 사용.

[^5]: 그럼에도 불구하고, 심볼<sub>symbol</sub>도 simple data type

<BR />

```scheme
(symbol? 'xyz)      => #t
(symbol? 42)        => #f

(eqv? 'Calorie 'calorie) => #t
```
- 심볼<sub>symbol</sub>은 대소문자 구분 없음:
    - e.g. 따라서 `'Calorie`와 `'calorie`는 동일

<BR />

```scheme
(define xyz 9)

(set! xyz #\c)
```
- 전역 변수<sub>global variable</sub> 선언은 `define` 이용
- 변수 `xyz`의 값은 `set!`으로 변경 가능.


### References
- [[/book-teach-yourself-scheme-in-fixnum-days|Teach Yourself Scheme in Fixnum Days]]
































