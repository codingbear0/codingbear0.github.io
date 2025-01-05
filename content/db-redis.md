---
title: Redis
date: 2024-07-19
tags:
- Database
draft: true
---

- Redis, Remote Dictionary Server:
    - 주로 분산<sub>distributed</sub> 환경에서 in-memory key-value database, cache, message broker에 사용.

#TODO
- 2024년 3월, v7.4 부터 RSAL<sub>Redis Source Available License</sub>과 SSPL<sub>Server-Side Public License</sub>[^1]라는 dual license 정책 발표:
    - 기존 [[/license-bsd|BSD license]]를 포기.
    - SSPL에 따르면 AWS 같은 cloud service 업체는 Redis와 연동되는 모든 코드를 공개해야 한다고.
    $\to$ fork된 신규 프로젝트 [[/db-valkey]]가 대세인 듯?
    
> [!todo] 이 내용은 따로 더 정리해보자

[^1]: MongoDB에서 처음 도입


### References
- https://redis.io
- https://redis.io/blog/redis-adopts-dual-source-available-licensing/