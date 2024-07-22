---
title: tailspin
date: 2024-06-23
tags:
- Shell
draft: false
---

> [!quote] A log file highlighter
- pipe를 통해 terminal에 출력되는 로그에도 활용 가능.


---
### Usage
- Read from file and view in [[shell-less|less]]:
    ```shellscript
    $ tspin application.log
    ```

- Read from file and print to stdout:
    ```shellscript
    $ tspin application.log --print
    ```

- Read from stdin and print to stdout:
    ```shellscript
    $ echo "2021-01-01 12:00:00 [INFO] This is a log message" | tspin 
    ```

- Read from another command and print to stdout:
    ```shellscript
    $ kubectl logs [pod name] --follow | tspin
    ```



### References
- https://github.com/bensadeh/tailspin