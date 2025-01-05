---
title: 6502 Assembly Language
date: 2024-07-11
tags:
- Programming Language
- Assembly
draft: true
---


- MOS 6502에서 동작하는 assembly language:
    - MOS 6502는 1975년 출시된 MOS Technology의 8-bit MPU[^1].
    - Motorola 6809계열 CPU로 분류.
        ![[/media/01J34TXRAX7MCQBTEEYSVPHHT4.jpg|450x163]]
        *from [Wikipedia](https://en.wikipedia.org/wiki/MOS_Technology_6502)*
        
           
[^1]: MPU, MicroProcessor Unit의 약자. CPU와 거의? 동일한 용어?


> [!quote] Home video game consoles and home computers of the 1970s through the early 1990s, such as the Atari 2600, Atari 8-bit computers, Apple II, Nintendo Entertainment System, Commodore 64, Atari Lynx, BBC Micro and others, use the 6502 or variations of the basic design.

- 6502 제품군은 1970년대부터 1990년대 초반까지, Atari 2600, [[/apple-ii|Apple II]], NES 등 가정용 컴퓨터와 비디오 게임기에 많이 사용된 MPU.
- 당시에는 assembly language를 이용해 개발:
    - HW 리소스가 제한적이기도 했고,
    - 시기적으로도 [[c|C]] 언어가 많이 알려지기 전[^2].

- [[/game-prince-of-persia|Prince of Persia]]가 6502 assembly를 이용해 개발.

[^2]: [[c|C]]언어는 70년대 후반이 되어서야 많이 사용되기 시작.

> [!note] 요즘에도 관련 정보는 많아서 배우는데 어려움은 없어보이지만, 쓸 곳이 없을 것 같은데? 🙄


<BR />

### References
- [6502.org](http://www.6502.org)
- [Easy 6502](http://skilldrick.github.io/easy6502/)
- https://en.wikipedia.org/wiki/MOS_Technology_6502