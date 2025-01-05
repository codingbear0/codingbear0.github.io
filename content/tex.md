---
title: TeX
date: 2024-07-05
tags:
- Markup Language
draft: true
---


- [[/person-donald-e-knuth|Knuth]] 교수가 만든 조판 프로그램<sub>typesetting program</sub>:
    - 1978년, 자신의 책[^1]을 쓰기 위해 만듦.
    - 일반적으로는 쓸 일이 없고, 복잡한 수식을 다루는 수학, 물리, 공학 등의 분야에서는 사실상의 표준<sub>de facto standard</sub>.
    - 요즘은 기능이 더 추가된 [[latex|LaTeX]]이 더 보편화 된 듯.

[^1]: [[/book-the-art-of-computer-programming|The Art of Computer Programming]]

<BR />

- 특이하게 문서를 컴파일<sub>compile</sub>하는 구조:
    - `.tex` 파일을 컴파일 하여 `.dvi`[^1]을 만들고, 다시 이 `.dvi` 파일을 통해 PDF 등의 문서 파일생성.
- [[/markdown|markdown]]에서도 수식은 TeX 문법 사용.
    - 예: `e^{\pi i} + 1 = 0` $\to$ $e^{\pi i} + 1 = 0$

[^2]: dvi는 Device Independent Format을 의미


### References
- https://en.wikipedia.org/wiki/TeX
- http://tug.or