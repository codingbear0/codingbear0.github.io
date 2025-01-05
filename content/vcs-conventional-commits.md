---
title: Conventional Commits
date: 2024-06-11
tags:
- VCS
draft: true
---


> [!quote] The Conventional Commits specification is a lightweight convention on top of commit messages. It provides an easy set of rules for creating an explicit commit history; which makes it easier to write automated tools on top of.

- [[git|Git]] `commit` 메시지를 위한 가벼운<sub>lightweight</sub> 규칙:
    - `BREAKING CHANGE`를 제외하면 한 줄 `description`을 모두 소문자로 기술하게 되어 있고 규칙도 단순하고 직관적이어서 쉽게 적용할 수 있어 보임.
    - `commit`과 관련된 이슈 번호를 `footer`에 추가하도록 한 점은 단점일지도?

> [!question] 얼마나 대중적으로 많이 쓰이는 규칙일까?


### References
- https://www.conventionalcommits.org
- https://github.com/conventional-changelog/commitlint

#TODO

---
### Specification
메시지는 다음과 같은 구조를 따라야 한다:
```shell
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

- 대표적 `type`에는 `fix:`와 `feat:`
    - 전자는 [[semver|Semantic Versioning]]의 PATCH와 후자는 MINOR와 각각 관련<sub>correlate</sub>.
    - 이외에도  `build:`, `chore:`, `ci:`, `docs:`, `style:`, `refactor:`, `pref:`, `test:` 등이 존재
- `BREAKING CHANGE:`라는 `footer`를 가지거나 `type` 또는 `scope` 뒤에 `!`를 붙인 `commit`은 [[semver|Semantic Versioning]]의 MAJOR와 관련.

> [!question]: `fix:`, `feat:`를 제외한 다른 type은 사전에 미리 정해둬야 할 듯?

> [!question]: 그럼 최초의 `commit`은 `type`을 무엇으로 해야할까? $\to$ `chore: initial commit`

### Examples
- `BREAKING CHANGE` `footer`를 가지는 경우:
```shell
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

- `BREAKING CHANGE` 대신 `!`를 사용하는 경우:
```shell
feat!: send an email to the customer when a product is shipped
```

- `!`를 사용하고 `scope`를 기술하는 경우:
```shell
feat(api)!: send an email to the customer when a product is shipped
```

- `body`가 없는 경우:
```shell
docs: correct spelling of CHANGELOG
```

- `scope`를 기술한 경우
```shell
feat(lang): add polish language
```

- 여러 단락의 `body`와  여러개의 `footer`를 가지는 경우:
```sh
fix: prevent racing of requests

Introduce a request id and a reference to latest request. Dismiss
incoming responses other than from latest request.

Remove timeouts which were used to mitigate the racing issue but are
obsolete now.

Reviewed-by: Z
Refs: #123
```
