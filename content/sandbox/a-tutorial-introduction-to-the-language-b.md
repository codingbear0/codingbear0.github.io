---
title: A Tutorial Introduction to the Language B
date: 2025-02-28
tags:
draft: false
---

[Brian Kernighan]이 작성한 “hello, world”가 처음 사용됐다고 알려진 문서. 이 문서는 사실 B language를 소개하는 문서로 B language가 C language로 가는 베타버전?처럼 사용된 후, 현재는 사용되지 않기 때문에 “hello, world”가 처음 사용됐다는 점 이외에 큰 의미는 없는 듯. 

“hello, world”가 다른 언어들에서도 보편적으로 사용되는 기본 예제 프로그램의 테스트 메시지가 된 것은 역시 Brian Kernighan이 쓴 [The C Programming Language], TCPL 부터라고.

이 문서에서 “hello, world”가 처음으로 사용된 부분은 「 7. External Variables 」:
![[/sandbox/media/01JN5NPZH2NW5Q9MSMRS5XZWYG.png|800]]
- `putchar()` 함수를 이용하여 “hello, world”를 출력.
- [B language]의 `*n`은 [C language]에서의 `\n`처럼 newline을 의미.

<BR />

「 7. External Variables 」 이외에도 “hello, world”는 「 8. Functions 」와 「 23. Strings 」 등 총 세 부분에서 사용.


## References
- http://cm.bell-labs.co/who/dmr/btut.pdf