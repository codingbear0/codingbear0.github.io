---
title: Swift
date: 2023-07-27
tags: 
- Programming Language
- Swift
draft: false
---

> [!quote] Swift is a general-purpose programming language built using a modern approach to safety, performance, and software design patterns.

- Apple 에서 개발한 programming language:
    - [[llvm|LLVM]]을 만든 [Chris Lattner](https://nondot.org/sabre/)가 설계.
    - 2014년 출시, [[xcode|Xcode]] 버전 6부터 함께 포함.
    - 2015년 말 [[/license-apache|Apache]] license로 코드 공개[^1]
- 2024년 [[wwdc|WWDC]]에서 Swift 6 발표.

[^1]: https://github.com/apple/swift

> [!note] 추가, 변경 사항은 [[swift-6|Swift 6]] 참조.

> [!bug] 검색할 때 자꾸 Taylor Swift이 나온다는 점은 단점이라고 볼 수 있지 않을까? 🙄


#TODO
---
### Books


---
### IDE Suport
- [[emacs|Emacs]]: 
- VS Code:

> [!note] LSP Implementations은 [[lsp|Language Server Protocol]] 참조.


### References
- https://www.swift.org
- [[a-swift-tour|A Swift Tour]]
- [The Swift Programming Language (6.0 beta)](https://docs.swift.org/swift-book/documentation/the-swift-programming-language)




----
## Installation

[[mise]]를 통해 설치하면[^2023/11/23 기준 버전 5.7.1이 latest, Swift.org에서는 버전 5.9가 latest로 차이가 있음.] 어떤 버전을 설치해도 5.9 버전으로 설치되는데, Swift.org의 다운로드 페이지가 막혀 다운로드가 불가능한 것 같다. [Swift GitHub Repository](https://github.com/apple/swift)에서 수동으로 이전 버전을 다운로드 받을 수는 있겠지만, 굳이?

💬 매번 최신 버전만 다운로드 받을 수 있다면 [[mise]]를 쓸 이유가 있을까?


## Using the Package Manager
### Creating a Package
순서대로 Swift Package를 만들고[^`Package.swift 파일과 `Sources`, 'Tests' 디렉토리 등이 자동 생성됨], Package를 빌드하고 테스트를 실행하는 명령어:
```swift
$ swift package init
$ swift build
$ swift test
```

### Building an Executable
순서대로 실행 파일<sub>binary executable</sub>을 만들고 실행하는 명령어:
```swift
$ swift package init --type executable
$ swift run Hello
```

* 하나의 실행 파일만 존재한다면 `Hello`를 생략하고 `swift run`만으로 빌드 + 실행이 가능하다.
* `swift build` 명령으로 실행을 제외한 빌드(컴파일?)만 할 수 있고, 생성된 실행 파일은 `./.build/x86_64-apple-macos10.10/debug`와 같은 디렉토리에 위치하므로 직접 실행이 가능하다.```

⚠️ 디렉토리 이름이 "Swift" 인 경우, 다음과 같은 에러 메시지와 함께 빌드되지 않는다.
```swift
error: cannot load module 'main as 'Swift'
```
- 단순하게 `Package.swift` 파일의 `name` 필드 값이[^2개의 `name` 필드 값이 존재. 하나는 Package, 다른 하나는 `executableTarget`] "Swift" 인 것이 문제가 아니라, 패키지 디렉토리의 이름이 "Swift"가 되어서는 안되는 것 같다. 디렉토리 이름을 변경하고 `.build` 디렉토리를 삭제한 후[^따로 `clean` 명령이 존재하지 않는 듯?] 다시 빌드하면 정상 동작한다.


### Using the LLDB Debugger

- [100 Days of Swift](https://www.hackingwithswift.com/100)
- [Swift Knowledge Base](https://www.hackingwithswift.com/example-code)

