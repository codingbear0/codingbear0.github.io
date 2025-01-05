---
title: SLOC
date: 2024-07-15
tags:
- Terms
draft: true
---

- SLOC, Source Lines of Code:
    - 또는 LOC, Lines of Code라고도 부름.

<BR />

- SW metric으로 사용되는데, 크게 physical SLOC[^1]와 logical SLOC[^2]로 구분:
    - 다음과 같은 [[c|C]] 언어로 작성된 예제의 경우,
        ```c
        for (i = 0; i < 100; i++) printf("hello"); /* How many lines of code is this? */
        ```
        - 1 physical SLOC.
        - 2 logical SLOC[^3].
        - 1 comment line.

    - 또는,
        ```c
        /* Now how many lines of code is this? */
        for (i = 0; i < 100; i++)
        {
            printf("hello");
        }
        ```
        - 4 physical SLOC.
        - 2 logical SLOC[^4].
        - 1 comment line.

[^1]: LOC
[^2]: LLOC, 실제 statement만 count
[^3]: `for`와 `printf` statement, 두 개
[^4]: 역시 statement는 `for`와 `printf` 두 개뿐


### References
- https://en.wikipedia.org/wiki/Source_lines_of_code