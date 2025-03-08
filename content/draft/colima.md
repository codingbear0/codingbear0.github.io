---
title: Colima
date:
tags:
- docker
draft: true
---

> [!quote]
> Colima - container runtimes on macOS (and Linux) with minimal setup.

[LLM] 관련 유명 툴인 [Ollama]와 이름이 유사한, 그리고 로고도 똑같이 라마[^1]인 [[/sandbox/docker|docker]] client.

[^1]: 물론 [Ollama]가 더 귀엽지만.

[macOS]에서 가볍게 쓰기엔 UI가 깔끔한 [OrbStack](https://orbstack.dev)이 괜찮아 보이는데, 구독 요금제로 바뀐 뒤로 뭔가 애매해져서[^2] 찾은 대체제.

[^2]: 물론 무료 요금제로 써도 충분?하지만.


## Installation
설치는 역시 [[/sandbox/homebrew]] 이용:
```sh
$ brew install colima
```

설치가 끝나면 다음과 같은 메시지가 표시되는데:
```
fish completions have been installed to:
  /opt/homebrew/share/fish/vendor_completions.d
To start colima now and restart at login:
  brew services start colima
Or, if you don't want/need a background service you can just run:
  /opt/homebrew/opt/colima/bin/colima start -f
```
- `vendor_completions.d`는 `config.fish`에 의해 자동으로 로딩되고,
- `brew services start colima`를 해줘야 사용 가능.