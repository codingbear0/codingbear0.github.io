---
title: Better Git Commits
date: 2024-06-11
tags:
- VCS
draft: true
---


- 유명해서 많이 쓰이는 규칙은 아닌 것 같지만, 규칙을 잘 정리해 놓은 느낌?
- 총 10개의 규칙을 언급하고 있는데, 그 중 눈에 띄는 것은 아래 세 가지 정도:
    1. Conceptual Prefixe 메시지 앞에 `[PREFIX]`의 형태로 다음과 같은 접두사<sub>prefix</sub> 추가:
        ```shell
        [BUGFIX]
        [TEST]
        [FEATURE]
        [REFACTOR]
        [UPDATE]
        [BASE]
        [DOCS]
        ```
    
    2. Referral Prefixes:
        - `[#NUMBER]`의 형태로 연관된 이슈, 태스크<sub>task</sub> 번호 등을 함께 기입.
        - Conceptual Prefix와 조합하여 다음과 같이 기술:
        ```shell
        [#217][REFACTOR] Use Array’s methods like ‘forEach’ and ‘map’ instead of simple ‘for’ and ‘while’ loops in the code base
        ```
    
    3. Emoji? Please No!:
        - 또 다른 `commit` 규칙인 [gitmoji](https://github.com/carloscuesta/gitmoji)와 상충되는 내용.
        - 메시지가 불분명하다는 점과 Emoji가 특정 환경는 제대로 보이지 않을 수 있다는 점을 이유로 사용을 반대[^1].
 
 [^1]: 이점은 [gitmoji](https://github.com/carloscuesta/gitmoji)에서도 특정 환경에서는 Emoji가 표시되지 않을 수 있음을 단점으로 언급
 
 
### References
- https://github.com/jafari-dev/better-git-commit
 