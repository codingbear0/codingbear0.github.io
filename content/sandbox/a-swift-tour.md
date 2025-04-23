---
title: A Swift Tour
date: 2025-04-23
tags:
- swift
draft: false 
---

[swift.org](https://www.swift.org)에서 가장 먼저 접할 수 있는 문서로 제목이 [A Swift Tour](https://docs.swift.org/swift-book/documentation/the-swift-programming-language/guidedtour)인 만큼 중요한 concurrency나 protocol, extension, generic 같은 부분은 거의 이런게 있어 수준으로만 넘어가기 때문에 개별 주제는 따로 더 찾아 공부해야 한다.

당연히 다 정리하는 건 의미 없으니까  눈에 띄는 부분만 간단하게 정리.


## Optional
값이 존재하지 않을 수 있는 변수를 optional이라는 특별한 방법으로 처리한다. 타입에 `?`를 붙여 표현하고 만약 값이 존재하지 않는다면 해당 expression의 결과는 `nil`로 평가<sub>evaluate</sub>되는데, 이걸 `if`나 심지어 상수를 선언<sub>declare</sub>할 때 사용하는 `let`과도 조합해 사용할 수 있다:
```swift
var optionalName: String? = "John Appleseed"
var greeting = "Hello!"
if let name = optionalName {
	greeting = "Hello, \(name)
}
```

optional value가 `nil`경우 즉, 값이 없을 경우 대신 사용할 default value를 `??`를 이용해 지정할 수 있고:
```swift
let nickname: String? = nil
let fullName: String = "John Appleseed"
let informalGreeting = "Hi \(nickname ?? FullName)"
```

또, 아래와 같이 optional value인 `optionalName`을 `if` 안에서 상수<sub>constant</sub>인 `nickname`에 저장해 사용할 수 있는데, 이때 optional value인 변수와 `if`의 상수의 이름을 동일하게 사용한다면 축약도 가능하다:
```swift
let optionalName: String? = nil
if let nickname = optionalName {
	print("Hey, \(nickname)")
}
```
```swift
if let nickanme {
	print("Hey, \nickname)")
}
```

이렇게 optional value가 `nil`인지 아닌지를 확인해서 안전하게 상수에 옮겨 저장해 사용될 때 optional value가 unwrapped 되었다고 표현하는 듯. 그리고 대부분 축약된 형태로 사용하지 않을까?

> [!note] 
> [Quicksort]를 개발한 [Tony Hoare](https://en.wikipedia.org/wiki/Tony_Hoare)가 `null`의 개념을 처음 만들어 낸 이후로 많은 언어들에서 `null`의 안전한 처리를 고민해 왔는데, Swift에서는 optional value라는 개념을 도입한 것처럼 보인다.

이 optional은 class의 instance에도 사용될 수 있다:
```swift
let optionalSquare: Square? = Square(sideLength: 2.5, name: "optional square")
let sideLength = optionalSquare?.sideLength
```


## Closure
Swift에서 일반적인 closure의 정이는 아래와 같이:
```swift
numbers.map({ (number: Int) -> Int in
    let result = 3 * number
    return result
})
```

> [!quote]
> A closure passed as the last argument to a function can appear immediately after the parentheses.

이때 어떤 함수에 closure를 마지막 argument로 전달하는 경우 괄호 뒤에 바로 쓸수 있는데, 괄호 뒤에? 잘 이해가 안되서 찾아보니 예를 들어 함수 `doSomething()` 함수의 마지막 argument인 `completion`으로 closure를 전달하는 경우 아래와 같이 쓸 수 있다는 의미:
```swift
doSomething(number: 5, complection: {
	print("Done!")
})
```
아래와 같이 쓸 수 있다는 의미:
```swift
doSomething(number: 5) {
	print("Done!")
}
```
그리고 이걸 trailing closure라고 부른다고 함.

> [!quote] 
> When a closure is the only argument to a function, you can omit the parentheses entirely.

심지어 어떤 함수가 closure만 argument로 받는 경우 아래와 같이 괄호까지 다 생략할 수 있음:
```swift
doSomething { 
	print("Done!") 
}
```

간단한 closure라면 아래처럼 한 줄로 기술해도 될 것 같은데, coding style을 찾아봐야겠다:
```swift
doSomething { print("Done!") }
```

더 간단하게는 숫자로 closure의 argument를 접근할 수 도 있어서 굉장히 짧게 구현할 수 있는데, 이건 익숙해지기 전까진 알아보기 힘들어서 정말 짧은 closure에만 써야할 것 같다:
```swift
var numbers = [20, 19, 7, 12]
let sortedNumbers numbers.sorted { $0 > $1 }
```

## Function
함수의 parameter 이름 대신 사용할 수 있는 label을 별도로 지정할 수도 있다는 점은 독특하다. 함수 호출 형태가 Objective-C와 유사하다는 점은 의도한 설계 같고:
```swift
func greet(_ person: String, on day: String) -> String {
    return "Hello \(person), today is \(day)."
}
greet("John", on: "Wednesday")
```

## Class
특별할 건 없고 constructor는 `init()`, deconstructor는 `deinit()`. 그리고 superclass의 method을 override 할 때는 method 정의 앞에 `override`라는 키워드를 명시적으로 기술해야 한다. 그렇지 않으면 compile error.
```swift
class Square: NamedShape {
    var sideLength: Double

    init(sideLength: Double, name: String) {
        self.sideLength = sideLength
        super.init(name: name)
				...
    }

    func area() -> Double {
			...
    }

    override func simpleDescription() -> String {
			...
    }
}
```

class에는 특별히 stored property라고 구분해서 부르는 일반적인 property가 있고, computed property가 있다. computed property는 값을 저장하지 않고 계산해서 반환하거나 다른 stored property의 값을 읽거나 저장하는 property. 아래의 예제에서 `sideLength`는 stored property이고 `perimeter`는 computed property:
```swift
class EquilateralTriangle: NamedShape {
    var sideLength: Double = 0.0

    var perimeter: Double {
        get {
             return 3.0 * sideLength
        }
        set {
            sideLength = newValue / 3.0
        }
    } 
```

computed property에 getter만 정의하면 당연히 read-only property를 구현할 수 도 있다.

> [!quote]
> “One of the most important differences between structures and classes is that structures are always copied when they’re passed around in your code, but classes are passed by reference.”

structure는 class와 동일한데, 다만 structure는 복사<sub>copy</sub>되어 전달<sub>pass</sub> class는 reference로 전달된다는 점이 다르다. “when they’re passed around in your code”라고 하는 걸 보면 꼭 함수 호출 때 argument로 전달되는 상황만 이야기하는 것은 아닌 듯.

> [!todo]
> 복사되어 전달된다는 사실 때문에 모든 것을 다 class로 선언할 필요는 없겠고,기준을 세워야 할 듯. method가 있는 건 class로 하고 없는 건 structure 한다 던가 하는.


### Enumerations
[[Go]]처럼 `enum`이라는 keyword가 아예 없는 언어도 있고, 되도록 사용하지 말라는 언어도 있지만, Swift에서는 꽤 다양한 기능을 제공하는 것 같다. 거의 가벼운 structure의 느낌으로 사용할 수 있을 듯. 

> [!note] 
> 아무래도 언어가 주로 사용되는 대상인 iOS App의 특성 상 `enum`을 많이 사용하기 때문에 다양한 기능을 추가한 것이 아닐까?

### Concurrency
다른 언어들에서와 유사하게 `async`와 `await`를 지원하고, 특이한 점이라면 concurrent code들을 묶을 수<sub>group</sub> 있는 `withTaskGroup()` 과 같은 `actor` instance 간의 동시성을 지원하는 `actor` 정도인 듯.

### Extension
> [!quote]
> “Use extension to add functionality to an existing type, such as new methods and computed properties. You can use an extension to add protocol conformance to a type that’s declared elsewhere, or even to a type that you imported from a library or framework.”

독특한 기능인데, 외부 library나 framework의 type에 새로운 method나 computed property를 추가할 수 있다고 한다. 

> [!todo] 많이 쓰면 오히려 더 헤깔리지 않을까 싶은데, 이건 범위를 한정에서 사용하는게 좋은지 아니면 원하는 만큼 많이 써도 괜찮은 건지 찾아봐야겠다.

## References
https://docs.swift.org/swift-book/documentation/the-swift-programming-language/guidedtour