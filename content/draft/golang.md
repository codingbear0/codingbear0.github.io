---
title: Go
date: 2025-01-24
tags:
- programming language
- go
draft: true
---

## Tests
- Randomizing the run order of tests:
	```sh
	$ go test -v shuffle on ./...
	```
	- Go 1.17 부터 지원.

[[go-table-driven-test|TableDrivenTests]]
https://go.dev/wiki/TableDrivenTests