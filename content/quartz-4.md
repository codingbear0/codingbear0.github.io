---
title: Quartz 4
date: 2024-06-28
tags:
- Digital Garden
draft: false
---


> [!quote] Quartz is a set of tools that helps you publish your digital garden and notes as a website for free. Quartz v4 features a from-the-ground rewrite focusing on end-user extensibility and ease-of-use.

- [[/digital-garden|digital garden]]을 만들수 있는 도구:
    - 전체적으로 깔끔하고 사용하기 쉬움 + free.
    - 다만, 프로젝트가 진행된지 꽤 오래 된 것 같은데[^1] GitHub Issue가 100여개[^2]로 진행이 더딘 느낌?


[^1]: v4 릴리즈는 2023년 8월
[^2]: 그 중 기능 개선 `enhancement` 태그가 50여개


> [!failure] 사용하면서 느낀 불편한 점 몇 가지(생길 때마다 추가):
> - 인용 `>`에서 footnote 사용 불가.
> - inline footnote 미지원.
> - local에서 `draft: true` 문서를 포함해서 build할 수 없음.


---
### Basic Usage

```shell
$ npx quartz build --help
```

```shell
$ npx quartz build --serve
```

- `-v` or `--verbose`: print out extra logging information
- `--serve`: run a local hot-reloading server to preview your Quartz


### Toubleshooting
- [[/yaml|YAML]]로 작성하는 metadata의 value 값에 `:`가 포함될 경우 에러 발생:
    ```yaml
    ---
    title: Ruby: a great language for shell scripts
    ---
    ```
    
    ```shell
    Failed to process `content/ruby-for-shell-script.md`: bad indentation of a mapping entry (2:12)
    
     1 |
     2 | title: Ruby: a great language for shell scripts
    ----------------^
     3 | date: 2024-07-04
     4 | tags:
    
      1 |
      2 | title: Ruby: a great language for shell scripts
     ----------------^
      3 | date: 2024-07-04
      4 | tags:
         at Object.yaml [as parse] (../plugins/transformers/frontmatter.ts:55:35)
    ```
    
    - [[/yaml|YAML]] spec.에는 `‌:`, `‌-`가 포함되도 문제가 없다고 하나 YAML parser 구현에 따라 달라지는 듯[^4].
    - 다음의 다섯가지를 테스트 해 본 결과 네 번째 `url: >-`가 정상 동작:
    ```yaml
    - url: 'http://www.some-site.example/'
    - url: "http://www.some-site.example/"
    - url:
        http://www.some-site.example/
    - url: >-
        http://www.some-site.example/
    - url: |-
        http://www.some-site.example/
    ```
    
[^4]: [stackoverflow](https://stackoverflow.com/questions/11301650/how-to-escape-indicator-characters-colon-and-hyphen-in-yaml) 참조.


### References
- https://quartz.jzhao.xyz
- https://github.com/jackyzha0/quartz