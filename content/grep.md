---
title: grep
date: 2025-01-20
tags:
- terminal
- shell
draft: false
---

> [!quote]
> Given one or more patterns, `grep` searches input files for matches to the patterns. When it finds a match in a line, it copies the line to standard output (by default), or produces whatever other sort of output you have requested with options.

주어진 파일들에서 패턴들을 찾아 일치하는 행을 출력[^1].


[^1]: 정확히는 패턴과 일치하는 행을 standard output으로 copy.


## Synopsis
```sh
grep [option...] [patterns] [file...]
```

<BR />
자주 쓰는 옵션만 정리하면,

- `--color=[when]` <BR />
		Mark up the matching text with the expression stored in the GREP_COLOR environment variable. The possible values of when are `never`, `always` and `auto`.

- `-E`, `--extended-regexp` <BR />
		Interpret pattern as an extended regular expression[^2].

[^2]: `egrep`을 사용하는 것과 동일.

- `-e <pattern>`, `--regexp=<pattern>` <BR />
		Specify a pattern used during the search of the input: an input line is selected if it matches any of the specified patterns.  This option is most useful when multiple `-e` options are used to specify multiple patterns, or when a pattern begins with a dash (`‌-`).
	
> [!question]
> extended regular expression은 regexp와는 다른 건가?

- `-H ` <BR />
		Always print filename headers with output lines.

- `-I` <BR /> 
		Ignore binary files.
    
- `-i`, `--ignore-case` <BR />
	Perform case insensitive matching.  By default, grep is case sensitive[^2].

[^2]: 기본값이 case sensitive.

- `-n`, `--line-number` <BR />
     Each output line is preceded by its relative line number in the file, starting at line 1.  The line number counter is reset for each file processed.  
             
- `-R`, `-r`, `--recursive` <BR />
		Recursively search subdirectories listed.


## References
- https://www.gnu.org/software/grep/manual/grep.html