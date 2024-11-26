---
title: 100 Go Mistakes
created_at: 2024-06-12
tags:
- Book
- Go
draft: false
---


| | |
| --- | --- |
| 원제 | 100 Go Mistakes: and How to Avoid Them |
| 지은이 | Teiva Harsanyi |
| 출판사 | Manning, 2022 |

- 저자는 [[docker|Docker]]에서 근무하는 개발자로 2019년 부터 [[golang|Go]] 사용
- 자신의 경험을 토대로 개인 블로그에 *”The Top 10 Most Common Mistakes I’ve Seen in Go Projects.”* 작성:
    - 이 글이 많은 관심을 받게 되면서 책까지 쓰게 됐다고
    - 2019년 7월 18일 작성된 글로 아직까지도 [Medium](https://itnext.io/the-top-10-most-common-mistakes-ive-seen-in-go-projects-4b79d4f6cd65)에서 찾아볼 수 있음
- 평가:
    - [[golang|Go]] 뿐만 아니라 다른 언어에도 적용할 수 있는 것들이 많아, 한 번쯤 읽어볼 만한 책. 
    - [[/book-rating-criteria|점수]]는 3.5


### References
- https://github.com/teivah/100-go-mistakes







#TODO
---
### Index
- #05: [[100-go-mistakes-05|Interface pollution]]
- #06: [[100-go-mistakes-06|Interface on the producer side]]
- #09: [[100-go-mistakes-09|Being confused about when to  use generics]]
- #10: [[100-go-mistakes-10|Not being aware of the possible problems with type embedding]]
- #11: [[100-go-mistakes-11|Not using the functional options pattern]]


---
- #44: Unintended side effects with named
result parameters
- #45: Returning a nil receiver
- #46: Using a filename as a function input
- #47: Ignoring how defer arguments and
receivers are evaluated
- #48: Panicking
- #49: Ignoring when to wrap an error
- #50: Checking an error type inaccurately
- #51: Checking an error value inaccurately





\\\EOF

---
- #52: Handling an error twice
- #53 : Not handling an error
- #54 : Not handling defer errors
- #55 : Mixing up concurrency and parallelism
- #56 : Thinking concurrency is always faster
- #57 : Being puzzled about when to use channels or mutexes
- #58 : Not understanding race problems
- #59 : Not understanding the concurrency impacts of a workload type
- #60: Misunderstanding Go contexts
- #61: Propagating an inappropriate context
- #62 : Starting a goroutine without knowing
when to stop it
- #63 : Not being careful with goroutines
and loop variables
- #64 : Expecting deterministic behavior using select
and channels
- #65 : Not using notification channels
- #66 : Not using nil channels
- #67 : Being puzzled about channel size
- #68
- #69
- #70
- #71
- #72
- #73
- #74
- #75: Providing a wrong time duration
- #76: time.After and memory leaks
- #77
- #78
- #79
- #80
- #81
- #82
- #83
- #84
- #85
- #86
- #87
- #88
- #89
- #90
- #91
- #92
- #93
- #94
- #95
- #96
- #97
- #98
- #99
- [x] #100