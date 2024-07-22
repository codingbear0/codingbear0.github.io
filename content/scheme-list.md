---
title: Lists
date: 2024-06-26T17:13:19+09:00
tags:
- Lisp
- Scheme
draft: false
---


- dotted pair는 임의의<sub>arbitrary</sub> 두 값을 ordered couple로 결합한 것:
    - `(cons)` precedure를 이용해 생성.
    - `(car)`‌과 `(cdr)`로 pair의 첫번째 그리고 두번째 element에 접근 가능.
- 리스트<sub>list</sub>는 중첩된<sub>nested</sub> dotted pair의 특수한 형태:
    - 리스트의 마지막 `cdr`이 empty list인 것.
    - 즉, 마지막이 empty list로 끝나지 않는 `(a b c . d)`,  `(a . (b . (c . d)))`와 같은 형태[^1]는 리스트라 부르지 않음.

[^1]: 둘은 동일하게 `(a b c d)`를 의미.

> [!warning] 제일 마지막이 empty list로 끝나지 않는 dotted pair는 improper list 또는 dotted list라고 부른다고.

> [!note] `car`과 `cdr`은 [[lisp-car-and-cdr|CAR and CDR]] 참조.


### Dotted Pairs
```scheme
(cons 1 #t)  => (1 . #t)

'(1 . #t) => (1 . #t)
(1 . #t)  --> ERROR!!!
```

```scheme
(define x (cons 1 #t)
(car x)  => 1
(cdr x)  => #t

(set-car! x 2)
(set-cdr! x #f)

x  
=> (2 . #f)
```
- 값의 변경은 각각 `set-car!`과 `‌set-cdr!`.

<BR />

```scheme
(define y (cons (cons 1 2) 3))

y
=> ((1 . 2) . 3)

(car (car y))  => 1
(cdr (car y))  => 2
```
- 중첩된 형태의 dotted pair 선언이 가능하고, 따라서 “car의 car”[^2]이나 “car의 cdr”[^3]도 가능:
    - “car의 car”은 줄여서 `caar`로, “car의 cdr”은 `cda)`로 축약<sub> abbreviation</sub> 가능.
    - 응용하면 `cadr`, `cdadr`, `cdaddr` 등도 가능.

[^2]: “car of the car”
[^3]: “cdr of the car”

> [!warning] 영어 문장 “cdr of the car”을 줄여쓰면 `(cdar)`로 뜻이 명확한데, 우리나라 말은 반대의 느낌이라 조금 헤깔리는 듯.

> [!tip] 제일 뒤부터 하나씩 거꾸로 리스트에 적용하면 쉽다.
> e.g. `(list (1 2) (3 4))`에 대해 `(cdar)`은 뒤에서부터 읽으면 `car` 후 `cdr` 이므로
> ```scheme
> (car ((1 2) (3 4))) => (1 2)
> (cdr (1 2))         => (2)
> ```

<BR />

```scheme
(cons 1 (cons 2 (cons 3 (cons 4 5))))
=> (1 2 3 4 . 5)

(1 . (2 . (3 . (4 . 5))))
=> (1 2 3 4 . 5)
```


### Lists
```scheme
(cons 1 (cons 2 (cons 3 (cons 4 ‘()))))
=> (1 2 3 4)

‌(1 . (2 . (3 . (4 . ()))))
=> (1 2 3 4)

‌(list 1 2 3 4)
=> (1 2 3 4)
```
- 모두 동일한 리스트<sub>list</sub> `(1 2 3 4)`의 선언문.
- 리스트의 제일 마지막 `cdr`에 empty list `‌()` 사용:
    - e.g. `'(1 . (2 . (3 . (4 . ()))))`은 `'(1 2 3 4)`을 의미

<BR />

```scheme
(list 1 2 3 4)
=> (1 2 3 4)

'(1 2 3 4)
=> (1 2 3 4)
```
- 리스트<sub>list</sub> 사용의 편이를 위해 `(list)` procedure 제공.
- 또는 `‌(quote)` 를 이용해 선언 가능.

<BR />

```scheme
(define y (list 1 2 3 4))

(list-ref y 0) => 1
(list-ref y 3) => 4

(list-tail y 1) => (2 3 4)
(list-tail y 3) => (4)
```
- 리스트<sub>list</sub>의 개별 element 접근은 `(list-ref)`.
- `‌(pair?)`, `‌(list?)`, `(null?)` 등의 predicate procedure 제공.



### References
- [[/book-teach-yourself-scheme-in-fixnum-days|Teach Yourself Scheme in Fixnum Days]]