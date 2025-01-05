---
title: Espanso
date: 2024-06-18
tags:
- App
draft: true
---

- Open Source, Text Expander[^1]
    - [[macos|macOS]], Windows, [[linux|Linux]] 지원.
    - Free

> [!note] 단점이라면 설정 변경을 위한 별도의 UI가 없어서 직접 파일을 찾아 수정해야 한다는 점 정도?


---
### Configuration
- 설정 파일 경로는 `$HOME/Library/Application Support/espanso/{:shell}`[^2]

```yml title="/match/base.yml"
- trigger: ":datetime"
  replace: "{{today}}"
  vars:
    - name: today
      type: date
      params:
      format: "%FT%T%:z"
```

```yml title="espanso/config/default.yml"
search_shortcut: off
search_trigger: off
```
- [[app-raycast|Raycast]]와 단축키 충돌 때문.


[^1]: `trigger`로 설정한 텍스트가 입력되면 지정된 문자열로 텍스트 입력을 대체 하는 프로그램
[^2]: [[macos|macOS]]일 때만.


> [!todo] stow 연동


### References
- https://espanso.org