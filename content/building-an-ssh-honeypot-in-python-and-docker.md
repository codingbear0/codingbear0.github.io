---
title: Building an SSH Honeypot in Python and Docker
date: 2024-06-20
tags:
- SSH
- Honeypot
draft: true
---


- `iptables`를 이용해 honeypot을 경유하도록 port forwarding 설정:
    ```sh
    $ iptables -A PREROUTING -t nat -p tcp --dport 22 -j REDIRECT --to-port 2222
    ```
    
    
### References
- How to build an  SSH honeypot in Python and Docker: [Part 1](https://securehoney.net/blog/how-to-build-an-ssh-honeypot-in-python-and-docker-part-1.html), [Part 2](https://securehoney.net/blog/how-to-build-an-ssh-honeypot-in-python-and-docker-part-2.html)