---
title: ULID
date: 2024-07-16
tags:
- TODO
- Database
- Identifier
draft: false
---

- ULID, Universally Unique Lexicographically Sortable Identifier.
- 주요 특징:
    - 128-bit compatibility with [[/uuid|UUID]]
    - 1.21e+24 unique ULIDs per millisecond
    - Lexicographically sortable
    - Canonically encoded as a 26 character string, as opposed to the 36 character UUID
    - Uses [[/person-douglas-crockford|Crockford]]’s base32 for better efficiency and readability(5 bits per character)
    - Case insensitive
    - No special characters(URL safe)
    - Monotonic sort order(correctly detects and handles the same millisecond)

- Binary Layout:
    ```asciidoc
    0                   1                   2                   3
     0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
    +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
    |                      32_bit_uint_time_high                    |
    +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
    |     16_bit_uint_time_low      |       16_bit_uint_random      |
    +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
    |                       32_bit_uint_random                      |
    +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
    |                       32_bit_uint_random                      |
    +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
    ```


---
### Implementations in other languages
| | |
| --- | --- |
| [[/python|Python]] | [mdomke](https://github.com/mdomke/python-ulid) |
| [[/swift|Swift]] |  [simonwhitehouse](https://github.com/simonwhitehouse/ULIDSwift) |
| [[/golang|Go]] |  [oklog](https://github.com/oklog/ulid) |
| [[/javascript|JavaScript]] | [ulid](https://github.com/ulid/javascript) |
| [[/rust|Rust]] | |
| [[/Lua]] | [Tieske](https://github.com/Tieske/ulid.lua) |

 
### References
- https://github.com/ulid/spec