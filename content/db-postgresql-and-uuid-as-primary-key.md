---
title: PostgreSQL and UUID as Primary Key
date: 2024-07-11
tags:
- Database
- PostgreSQL
draft: false
---

- [[/db-postgresql|PostgreSQL]]에서 [[uuid|UUID]]를 primary key로 사용하는 건 어떨까? 어떻게 해야 더 효율적으로 사용할 수 있을까:
    - `text` 데이터 타입은 사용하지 말고, 전용 데이터 타입인 `uuid` 사용.
    - UUIDv4 보다 UUIDv7 사용.
- 그러나, UUID의 길이 때문에 primary key에 어울리지 않음 $\to$ [[/tsid|TSID]]를 고려해 볼 것.

> [!todo] TSID?

<BR />

- 대안으로,
> [!quote] The best advice I can give you is to use bigserial for B-tree friendly primary keys and consider a string-encoded UUID as one of your external record locator options. Consider other simple options like PNR-style (airline booking) locators first, especially if nontechnical users will quote them. 
- [[/algorithm-b-tree|B-tree]] 친화적인 primary key로 `bigserial`을 사용하고, UUID를 보조 수단[^1]으로.
- 또는, [[/ulid|ULID]]가 [[/uuid|UUID]]보다 우수하다는 의견도.


---
### Postgres Data Types for UUID
- [[/uuid|UUID]]는 문자열<sub>string</sub>로 보이기 때문에 Postgres의 `text` 타입으로 저장:
    - `uuid`라는 128-bit 길이의 전용 데이터 타입 존재.
    - $\to$ 16-bytes, `text`로 저장할 경우 1 or 4-bytes의 overhead 추가됨.

- `text`와 `uuid` 타입의 ‌`id`를 primary key로 가지는 두 개의 테이블 생성하고[^2], 10,000,000개의 데이터를 insert할 경우:
    ```
    +------------------+-----------------------+----------+----------+
    |table             |index                  |table size|index size|
    +------------------+-----------------------+----------+----------+
    |bank_transfer_uuid|bank_transfer_uuid_pkey|422 MB    |394 MB    |
    |bank_transfer     |bank_transfer_pkey     |651 MB    |730 MB    |
    +------------------+-----------------------+----------+----------+
    ```
    - `text` 타입은 54%, index는 85% 더 큰 사이즈.

[^2]: 기본값인 [[/algorithm-b-tree|B-tree]] index 사용.


### UUID and B-Tree Index
- B-tree Index는 순서가 있는 값<sub>ordered value</sub>에 대해 잘 동작하므로,
    - UUIDv4 보다 UUIDv7에 더 최적화된 성능을 보일 수 있음.

- 1000개<sub>row</sub>씩 10번 반복 insert한 시간을 비교하면:
    ```
    +-------+-------+---------+
    | text  | uuid  | uuid v7 |
    +-------+-------+---------+
    | 7428  | 8584  | 3398    |
    | 5611  | 4966  | 3654    |
    | 13849 | 10398 | 3771    |
    | 6585  | 7624  | 3679    |
    | 6131  | 5142  | 3861    |
    | 6199  | 10336 | 3722    |
    | 6764  | 6039  | 3644    |
    | 9053  | 5515  | 3621    |
    | 6134  | 5367  | 3706    |
    | 11058 | 5551  | 3850    |
    +-------+-------+---------+
    ```

    - `text`와 `uuid`[^1]의 차이는 `uuid`가 빠르긴 하지만 차이가 크게 나기도 하고, 작게 나기도 하고.
    - `text`와 `uuiv v7`를 비교하면 두 배 이상의 성능 차이를 볼 수 있음.


### References
- https://maciejwalkowiak.com/blog/postgres-uuid-primary-key/
- https://news.ycombinator.com/item?id=40884878&p=2
- https://brandur.org/nanoglyphs/026-ids