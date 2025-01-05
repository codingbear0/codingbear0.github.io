---
title: Garbage Collection
date: 2024-06-17
tags:
- Go
- GC
draft: true
---

> [!quote] It’s essential to keep this rule in mind when working with slices: if the element is a pointer or a struct with pointer fields, the elements won’t be reclaimed by the GC.

- [[golang|Go]]‌ [[go-slice|slice`]]의 element가 포인터<sub>pointer</sub>이거나 포인터 필드를 가진 구조체<sub>struct</sub>인 경우, 그 element는 GC에 의해 회수되지 않음.




### References
- [[/book-100-go-mistakes|100 Go Mistakes]]