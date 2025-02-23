---
title: REPL
date: 2025-02-21
tags:
draft: false
---

> [!quote]
> A read–eval–print loop (REPL) is a simple interactive computer programming environment that takes single user inputs, executes them, and returns the result to the user.

REPL은 ‘Read–Eval–Print Loop’의 줄임말:
- 사용자의 입력을 읽고 `read`, 입력을 평가한 후 `eval`, 그 결과를 출력 `print`하는 과정의 반복 `loop`을  의미.
- 더 정확하게는 사용자의 입력을 분석<sub>parsing</sub>해 내부 데이터 구조<sub>internal data structure</sub>로 변환하는 것 까지가 `read`, 이 데이터 구조를 이용해 함수를 실행하고 결과를 얻어내는 것이 `eval`.

<BR />

1964년 PDP-1에서 [Lisp] 구현에 ‘READ-EVAL-PRINT cycle’라는 용어로 처음 사용.
- REPL은 이 기능의 구현을 위한 [Lisp]의 primitive function의 이름에서 유래한 것.



## References
- https://en.wikipedia.org/wiki/Read–eval–print_loop