---
title: UUID
date: 2024-07-07
tags:
- Database
- Identifier
draft: false
---

- UUID, Universally Unique Identifier:
    - 128-bit 길이.
    - UUIDv1부터 UUIDv8까지 다양한 버전<sub>version</sub> 존재.

- 8-4-4-4-12 format으로 `xxxxxxxx-xxxx-Mxxx-Nxxx-xxxxxxxxxxxx`의 형태:
    - `x`는 4-bit, 16진수.
    - `M`은 UUID version. 
    - e.g. `8D8AC610-566D-4EF0-9C22-186B2A5ED793`은 `4EF0`이므로 `UUIDV4`.

<BR /> 

> [!quote] While the probability that a UUID will be duplicated is not zero, it is generally considered close enough to zero to be negligible.
- 확률적으로<sub>probability</sub> 중복될 가능성이 있지만(`0`이 아니지만), 일반적으로 무시할 수 있을 만큼 `0`에 가까움.

> [!question] 중복이 발생할 가능성이 `0`이 아니란 소린데, DB primary key로 사용할 수 있을까?

> [! question] [[/db-postgresql-and-uuid-as-primary-key|PostgreSQL and UUID as Primary Key]]에서도 중복 문제는 따로 언급하지 않음. [[/db-postgresql|PostgreSQL]]에는 `uuid` 데이터 타입이 별도로 제공되니까 이런 문제는 생각할 필요가 없는 걸까?


---
### UUIDv7

> [!quote] Implementations SHOULD utilize UUIDv7 instead of UUIDv1 and UUIDv6 if possible.

- high-load 데이터베이스<sub>database</sub> 또는 분산<sub>distributed</sub> 시스템을 위한 것.

    ```asciidoc
     0                   1                   2                   3
     0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
    +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
    |                           unix_ts_ms                          |
    +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
    |          unix_ts_ms           |  ver  |       rand_a          |
    +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
    |var|                        rand_b                             |
    +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
    |                            rand_b                             |
    +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
    ```
    - 48 bit big-endian [[unix-epoch|Unix Epoch]] timestamp
    - version[^2]
    - variant bit: 값은 `0b10`
    - 74-bit[^3]는 random 값

[^2]: 여기서는 `UUIDv7` 이므로 `7`,`0b0111`
[^3]: 12-bit `rand_a`, 64-bit `rand_b`


> [!question] `rand_a`와 `rand_b`의 차이는 길이 밖에 없는 건가? 둘다 uniqueness와 [[/monotonicity]]를 보장하기 위한 pseudorandom data라고 되어 있는데.


### References
- [RFC 9562](https://datatracker.ietf.org/doc/html/rfc9562)
- https://en.wikipedia.org/wiki/Universally_unique_identifier
- https://uuid7.com



