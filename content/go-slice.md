---
title: Slice
date: 2024-06-17
tags:
- Go
- Slice
draft: false
---

- [[golang|Go]] 언어의 `slice`는 일반적인 프로그랭 언어의 배열<sub>array</sub>에 해당하는 자료형[^1]


[^1]: 정확히는 [[golang|Go]]에도 배열이 존재하지만 배열을 직접 이용하기 보다는 `slice` 사용을 권장

- [[go-comparable|comparable]] 하지 않음




---
#TODO: 정리 필요


### Slice
`Slice`는 내부적으로 `Struct`로 구현되어 있고, 3개 필드를 가진다. 각각은 `int` 타입인 `length`와 `capacity`, 그리고 `pointer` 타입[^pointer는 `Slice`의 데이터를 저장하기 위한 메모리 블록<sub>pointer to a block of memory</sub>의 주소 저장].

따라서, Slice를 함수의 파라미터로 전달하면 Call by Value에 의해 3개 필드의 값이 복사<sub>copy</sub>되며, 이것은 포인터 필드는 공유되어 수정할 수 있지만 length와 capacity 필드는 값이 복사되어 공유되지 않는 것을 의미하고, 이 말은 Slice의 값<sub>element</sub>는 수정할 수 있어도 Slice에 값을 추가<sub>append</sub>할 수는 없음을 의미한다[^값을 추가할 경우 length가(혹은 capacity도) 변경될 수 있지만, 값이 공유되지는 않으므로]

이 점을 감안해서 Go에서는 코딩 스타일을 조금 바꿔야 하는데, 보통 타 언어에서 아래와 같이 파일과 같은 리소스<sub>resource</sub>를 읽어 처리하는 경우 `next_chunk()` 함수에서 새로운 버퍼를 생성하고 값을 채워 반환한 뒤 이 버퍼를 처리<sub>process</sub>하는 스타일로 작성된 함수는,
```
r = open_resource()
while r.has_data() {
    data_chunk = r.next_chunk()
    process(data_chunk)
}
```

Go에서는 넉넉한 사이즈의 Slice 버퍼를 만들어 전달하고, 값을 채운 뒤 반환 값으로 얼마나 많은 데이터를 채웠는지에 대한 count와 에러 여부를 판단할 err 값을 comma ok idiom으로 반환 받아 처리하는 스타일로 작성해야만 한다. 

물론 다른 언어도 위의 코드와 다르게 버퍼를 전달하고 count 값을 반환 받아 처리할 수도 있지만 유연하게 다양한 스타일로 코드를 작성할 수 있는 반면, Go는 특정 스타일이 강제되는 느낌?

\\\EOF