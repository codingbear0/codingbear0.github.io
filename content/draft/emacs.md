---
title: Emacs
date:
tags:
- Emacs
draft: true
---


`C-x =` `(what-cursor-position)`

[s-expression]

### \*Message\*
`*Message*` 버퍼에 저장될 메시지의 최대 라인 수 제한. 기본값은 1,000.
```elisp
(setq message-log-max 1000)
```

### \*scratch\*

`C-x C-e` `(eval-last-sexp)` 커서 앞 [s-expression]을 평가.
결과는 [echo area](https://www.gnu.org/software/emacs/manual/html_node/emacs/Echo-Area.html)에 표시되는데, 결과가 너무 길어 불편하다면 [Eldoc] 관련 설정을 수정해 echo area에 짧게 표시되도록 하거나 `C-j` `(eval-print-last-sexp)`를 이용해 현재 [s-expression] 바로 아래줄에 표시되도록 할 수 있다.

> [!note] 실행할 때 주의점은 실행할 [s-expression]의 닫히는 괄호<sub>parenthesis</sub> `)` 뒤에서 해야한다는 점.

`(eval-last-sexp)` 등으로 실행했을 때 에러가 발생하면 Emacs debugger가 실행되는데 그 결과는 \*Backtrace\*에 표시된다. 


### \*Backtrace\*

Emacs debugger의 결과가 표시되는 buffer. 종료는 `q`.


---
title: recentf-mode
date:
tags:
- Emacs
draft: false
---

최근에 열었던 파일들을 관리하고 싶다면 recentf-mode를 활성화해야 한다. 이런 것 까지 수동으로 활성화 해야 한다는 점은 좀 의아하지만.

recentf-mode의 활성화는 `M-x recentf-mode`. 
최근 열었던 파일 목록의 확인은 `M-x recentf-open`. 이 목록의 저장과 수정은 각각 `M-x recentf-save-list`와 `M-x recentf-edit-list`.

역시 이런 것들까지 수동으로 해줘야 하는 게 의아하지만, 주기적으로 목록을 저장하고 싶다면 `init.el`에 아래 내용 추가:
```elisp
(run-at-time nil (* 5 60) 'recent-save-list) ; every 5 mins
```

파일은 `user-emacs-directory`에 `recentf-save.el`


## Tips
### [consult.el](https://github.com/minad/consult)
날 것으로 그냥 쓰기에는 아무래도 많이 불편하니까 보통 3rd. 패키지의 도움을 받는데, 대표적인 것이 consult. `M-x consult-recent-file`을 쓰면 한 결 편안한 UI로 사용할 수 있다.

### [no-literring](https://github.com/emacscollective/no-littering)
파일은 기본적으로 `user-emacs-directroy`에 `recentf-save.el` 파일로 저장되는데, `no-literring` 패키지를 이용하면 내가 원하는 경로에 저장되도록 할 수 있다. 

## References
- https://www.emacswiki.org/emacs/RecentFiles

파일 경로 요약
~/.cache/emacs/ => /var/emacs
├── auto-save/       # 자동 저장 파일
├── backup/          # 백업 파일
├── recentf          # 최근 파일 목록
├── tramp/           # TRAMP 원격 캐시
├── projectile/      # Projectile 캐시
├── eln-cache/       # 네이티브 컴파일된 .eln 파일 (Emacs 29+)
└── eshell/history   # Eshell 명령어 히스토리

~/.local/share/emacs/ -> /etc/emacs
├── themes/          # 사용자 테마
├── dictionary/      # 맞춤법 검사 데이터
├── abbrev_defs      # abbrev-mode 단축어 정의
├── schemas/         # XML, JSON 스키마 정보
└── custom-settings/ # 사용자가 저장한 설정
└──straight/

# Bookmark


# no-littering

`user-emacs-directory` 즉, `$HOME/.emacd.d/`에는 예상외로 여러 용도를 알수 없는 많은 파일이 저장되는데, 이 파일들을 내가 원하는 위치로 적절히 옮길 수 있도록 해주는 패키지. 나처럼 강박?이 있는 사람은 거의 필수라고 볼 수 있는데, 기본 설정은 아래와 같이:
```elisp
(setq no-littering-etc-directory ...))
(setq no-littering-var-directory ...))

(use-package no-littering
  :after recentf
  :config
  (add-to-list 'recentf-exclude (recentf-expand-file-name no-littering-var-directory))
  (add-to-list 'recentf-exclude (recentf-expand-file-name no-littering-etc-directory))

  (setq custom-file (no-littering-expand-etc-file-name "custom.el"))
  (when (file-exists-p custom-file)
    (load custom-file t)))
```

설정에 특별한 점은 없고 `...` 부분에는 원하는 경로를 string 값으로 추가하면 끝. 단, 주의해야할 점이 하나 있는데 `no-littering-etc-directory`와 `no-littering-var-directory` 두 개 변수를 정의하는 구문을 `use-package` 안으로 넣으면 안된다는 것.

> [!bug] 이런 점은 오픈 소스의 단점으로 볼 수 있는데, 패키지들 간에 어떤 일관성이 없다. 저런 customizing은 `use-package`의 `:init` 또는 `:custom`에 넣을 수 있어야 하는 것 아닌가?

이런 간단한 설정으로 대부분의 이상한 파일?들을 적당히 분산 저장할 수 있는데, 그럼에도 불구하고 좀비처럼 살아나는 몇 개 파일이 있다. 다만, 이건 macOS의 문제인지 emacs-plus의 문제인지 아니면 단순 버그인지 불명확.
- `var/recentf-save.el`
- `var/savehist.el`
- `eln-cache/`
- `elpa/`

`recnetf-save.el`은 이름에서 유추할 수 있듯 최근 열었던 파일 목록을 저장하기 위해 `recentf-mode`에서 생성하는 파일이다. 이상한 점은 주로? `no-littering-var-directroy`에 저장되는데 간헐적으로 `user-emacs-directory`에 파일이 생성된다는 점. 원인은 알 수 없어 일단 강제로 저장할 파일을 지정:
```elisp
(setq recentf-save-file (recentf-expand-file-name "recentf-save.el" ...))
```

`savehist.el`은 `desktop-save-mode`에 의해 minibuffer의 히스토리가 저장되는 파일인데, 역시 알수없는 이유로 `user-emacs-directory`에 파일이 생성되어 저장할 파일을 강제 지정:
```elisp
(setq savehist-file (expand-file-name "savehist" ...))
```

`eln-cache/`는 [Emacs]의 native compilation 기능을 위한 디렉토리인데, `*.el` [Elisp]을 컴파일 해 생성되는 `*.elc`이 저장되는 곳. native compilation은 Emacs 29 부터 공식적으로 지원되는 기능으로 사용안 할 이유가 없으니까 `eln-cache/` 디렉토리가 생겨나는 건 피할 수 없는데, 기본으로 `user-emacs-directory`에 생성되는 이 디렉토리를 다른 곳으로, 예를 들어  [macOS] 기준  `$HOME/.cache/emacs/eln-cache/`으로 옮기려면:
```elisp title="early-init.el"
(when (native-comp-available-p)
  (let ((dir (expand-file-name "~/.cache/emacs/eln-cache/")))
    ;; This also destructively modifies 'native-comp-eln-load-path'.
    (startup-redirect-eln-cache (convert-standard-filename dir))))
```

이렇게 쉽게 해결되어 모두가 행복해지면 좋겠지만, `eln-cache/`를 원하는 경로로 옮긴 후에도 `user-emacs-directroy`에는 `eln-cache/` 디렉토리가 계속 생성된다. [Emacs Lisp Reference Manual]()의 Ch 18. 을 보면 이 현상에 대한 힌트를 얻을 수 있는데:

> [!quote]
> A trampoline is a small piece of native code required to allow calling Lisp primitives, which were advised or redefined, from Lisp code that was natively-compiled with native-comp-speed set to 2 or greater.

`user-emacs-directory`에 생성되는 `eln-cache/`를 보면 `subr--trampoline-`으로 시작하는 `.eln` 파일이 존재하는데, 이 파일들은 native compile 된 Lisp 코드에서 advice 되거나 재정의 된<sub>redefined</sub> Lisp primitive를 호출하는데 필요한 파일들[^1].

`‌native-comp-enable-subr-trampolines` 변수를 `nil`로 설정하면 생성되지 않도록 막을 수 있지만, Lisp 코드에 대한 advice나 재정의가 불가능해지므로 권장하는 방법은 아니라고 한다. 일단 피할 수 없으니 견디는 수 밖에.

[^1]: 무슨 역할을 하는지는 나중에 더 알아보기로 하고 일단 여기서는 꼭 필요한 파일이라는 정도로만 알아두자.



=======
---
title: s-expression
date:
tags:
- Lisp
- Elisp
draft: false
---

“symbolic expression”으로 보통 “s-expression” 또는 “sexp” 정도로 줄여 부른다.


========

---
title: Emacs Lisp
date:
tags:
- Emacs
- Lisp
draft: false
---

> [!quote] 
> To the untutored eye, Lisp is a strange programming language. In Lisp code there
are parentheses everywhere. Some people even claim that the name stands for
“Lots of Isolated Silly Parentheses” .[^1]

[^1]: [An Introduction to Programming in Emacs Lisp]에서 인용.

1950년 후반 조상 격이라 볼 수 있는 Lisp이 MIT에서 John McCarthy에 의해 개발된 후 많은 Lisp 구현체<sub>implementation</sub> 들이 만들어 졌고, 그 중에 하나가 1960년대 같은 MIT에서 개발된 Maclisp이다. 이 Maclisp이 이어져 1980년대 ANSI 표준으로 제정[^2]된 [Common Lisp]이 되고, 다른 한편으로 1970년대 Richard Stallman이 개발한 Emacs Lisp이 된다. 

Emacs Lisp은 보통 Elisp으로 줄여 부르고, Common Lisp과 유사하지만 조금 더 간략화 된 형태[^3]로 볼 수 있다[^4]. 주된 사용처는 Emacs 설정이나 추가 기능을 위한 패키지 개발 정도로 그 활용처가 많지는 않다. 다만 이 점은 [Common Lisp]도 거의 사용되지 않는 현실을 감안하면 오히려 사용처가 많다고 해야하나?

[^2]: 정확히는 1980년대 표준화를 시작해 1994년 제정.
[^3]: 원문은 “Emacs Lisp is much simpler than Common Lisp”.
[^4]: 주로 Maclisp에서 영향 받고 [Common Lisp]에서는 약간의 영향을 받은 듯.


Lisp이란 말이 LISt Processing을 의미하는 것처럼 모든 것이 list로 이루어져 있는데, 이 list는 single-quote `'`와 괄호<sub>parentheses</sub>로 표현된다:
```elisp
'(rose viloet daisy buttercup)
'(this list has (a list inside of it))
```

single quote `'`가 없는 list는 함수로 기능하는데:
```
(+ 2 2)
```
제일 앞 `+`는 어떤 동작을 해야하는지를 나타내는 instruction으로, `+`를 제외한 list의 나머지는 argument로 인식된다.


`else`가 필요한 경우 `if`, `if`만 필요한 경우는 `when`



```elisp
(concat “abc” “def”)
```

```
(substring "The quick brown fox jumped." 16 19)
```
두 번째와 세 번째 argument는 각각 start, end index. start는 포함<sub>inclusive</sub>, end는 미포함<sub>exclusive</sub>. index는 0부터 시작. 따라서 위의 구문은 `(substring ... 16 19)`는 index 16, 17, 18 문자인 `fox`가 결과값이 된다.

`number-or-marker-p` 는 주어진 argument가 number 혹은 [marker]라면 `t` 아니면 `nil`을 반환하는 함수. marker는 [Emacs Lisp]에서 범위를 지정하는 할 때 사용되는 특수한 기능.

함수 이름 제일 뒤 `p`는 predicate를 의미하며, 이는 이 함수가 argument 대해 어떤 것이 맞는지 틀리는지를 검사 해 true 혹은 false를 반환한다는 의미이다. `number-or-markder-p` 처럼 이름 뒤에 `-p` 형태로 추가될 수도 있지만 `listp` 또는 `zerop` 처럼 그냥 `p`가 추가될 수도 있다.

변수에 값을 지정<sub>binding</sub>, 정확히는 symbol에 값을 지정하기 위해서는 `setq`를 이용:
```elisp
(setq flowers '(rose violet daisy buttercup))
```

여기서 변수에 single-quote가 사용되면 동작이 달리지는데, 먼저 `flowers`를 평가<sub>evaluate</sub> 하면 결과값은 list 즉, `‌(rose violet daisy buttercup)`이 되지만 `'flowers`를 평가하면 결과값은 symbol 그 자체인 `flowers`가 된다. !!



## References
- https://en.wikipedia.org/wiki/Emacs_Lisp







========

---
title: An Introduction to Programming in Emacs Lisp
date:
tags:
- Emacs
- ELisp
- 

---
title: Eldoc
date:
tags:
- Emacs
draft: false
---

> [!quote]
> ElDoc is a buffer-local minor mode that helps with looking up documentation of symbols (functions, methods, classes, variables, etc.) in your program. When this mode is enabled, the echo area displays useful information whenever there is a documented symbol at point. For example, in buffers under the Emacs Lisp mode, it shows the argument list of a function at point, and for a Lisp variable it shows the first line of the variable’s documentation string.

현재 커서 위치에 있는 함수, 변수 등에 대한 symbol 정보를 [echo area]에 표시하는 기능. 표시되는 정보가 길어 echo area의 높이를 제한하고 싶다면 아래 두 변수를 설정. 

1. `eldoc-echo-area-use-multiline-p`
	- 변수명에서 알 수 있듯, 여러줄로 표시할지 아닐지를 결정.
	- 총 네 가지 값으로 설정 가능한 묘한 변수. 기본값은 `trancate-sym-name-if-fit` :

	| | | |
	| --- | --- | --- |
	|  양수<sub>positive number</sub> | 표시 가능한 최대 라인 수 ||
	| 부동소수점<sub>floating-point</sub> | frame 높이와의 상대적인 비율[^1] ||
	| `nil` | 한 줄로만 표시. 그 이상이면 무조건 생략<sub>truncate</sub> ||
	| `trancate-sym-name-if-fit` |  symbol 이름을 생략해서 적절히 한 줄로 ||
	
2. `eldoc-echo-area-display-truncation-message`
	- `nil`로 설정하면 잘라내고<sub>truncate</sub> `...`으로 표시.

> [!question] 
> 원문은 “If non-nil (the default), and documentation shown in the echo area is truncated because it’s too long”. 너무 길다는 건 어떤 의미일까? `max-mini-window-height` 값의 영향을 받을 같지만 `max-mini-window-height`가 기본값인 경우 세 줄 이상이면 `...`으로 표시되는 듯.


[^1]: 이 경우 최대 높이는 `max-mini-window-height`라는 또 다른 변수 값으로 제한됨.


> [!note]
> `eldoc-echo-area-use-multiline-p`는 기본값. `eldoc-echo-area-display-truncation-message`만 `nil`로 설정해도 무난하게 괜찮은 것 같다.





> [!quote]
> This user option controls whether and how to truncate documentation text if it is longer than the echo-area can display as a single screen line. If the value is a positive number, it specifies the number of screen lines that ElDoc is allowed to display in the echo area without truncating the documentation. A positive integer specifies the absolute maximum number of screen lines to use; a floating-point number specifies the number of screen lines as a fraction of the frame’s height. The value of t means never truncate the documentation (the echo-area will be resized up to the height allowed by max-mini-window-height, see Editing in the Minibuffer), whereas the value of nil means truncate if the documentation is longer than a single screen line. Finally, the special value truncate-sym-name-if-fit (the default) means to truncate the part of the documentation that represents a symbol’s name if doing that will allow the documentation to fit on a single screen line.

> [!quote]
> If non-nil (the default), and documentation shown in the echo area is truncated because it’s too long, follow the documentation by instructions about how to view the complete documentation text. If nil, just indicate with ‘…’ that the documentation was truncated.


그 밖에 설정할 만한 변수들은,
- `eldoc-print-after-edit `
> [!quote]
> If this user option is non-nil, ElDoc will show documentation only after some editing command, like inserting or deleting some text. This comes in handy if you want Emacs to display documentation only about symbols that you type, but not about symbols that are already in the buffer (so just reading the source code will not show documentation). The default value is nil. If you change the value, you need to toggle eldoc-mode off and on again.

> [!quote] 
> The variable max-mini-window-height controls the maximum height for resizing the minibuffer window. A floating-point number specifies a fraction of the frame’s height; an integer specifies the maximum number of lines; nil means do not resize the minibuffer window automatically. The default value is 0.25.

> [!quote] 
> The default value is grow-only, which means the behavior we have just described. If the value is t, the minibuffer window will also shrink automatically if you remove some lines of text from the minibuffer, down to a minimum of one screen line. If the value is nil, the minibuffer window never changes size automatically, but you can use the usual window-resizing commands on it (see Multiple Windows).


[^1]: 우선순위는 1이 제일 높고 4가 가장 낮음.


> [!note] 
> 이걸 이렇게 까지 정리해야 하나 싶은 마음이 들지만, 뭐 40년 된 사골이 다 그러려니...


eldoc-echo-area-use-multiline-p = t: 여러 줄로 출력이 가능.
max-mini-window-height = 2: 미니버퍼의 최대 2줄까지만 출력 가능.
resize-mini-windows = grow-only: 미니버퍼는 필요할 때만 커짐, 하지만 max-mini-window-height보다 커지지는 않음.
eldoc-echo-area-display-truncation-message = t: 문서가 너무 길면 **생략 표시(...)**로 잘림.



[^1]: echo area에 표시되는 메시지는 `*Messages*` 버퍼에도 함께 표시/저장됨.

1. echo area에 여러줄이 표시되지 못하도록 제한:
	```elisp
	(setq eldoc-echo-area-use-multiline-p nil)
	```
2. 메시지가 너무 길 경우 생략하고 `...`으로 표시:
	```elisp
	(setq eldoc-echo-area-display-truncation-message 'trancate-sym-name-if-fit)
	```
	이 변수는 조금 오묘한데, 
3. echo area의 높이 제한:
	```elisp
	(setq max-mini-window-height 0.25)
	```

특히, `‌eldoc-echo-area-display-truncation-message` 변수는 오묘해서, 양수<sub>positive number</sub> 부터 `truncate-sym-name-if-fit`이라는 특별한 값까지 총 네 가지 서로 다른 타입의 값을 가질 수 있는데,
- 양수<sub>positive number</sub>  값인 경우 최대 몇 줄로.
- 부동소수점<sub>floating-point</sub> 값인 경우 frame 높이와의 상대적인 비율로[^1]
- `nil`이면 한 줄 이상이면 생략<sub>truncate</sub>
- `trancate-sym-name-if-fit`이라는 값으로 설정되면 symbol 이름을 생략해서 적절히 한 줄로


> [!quote]
> If the value is a positive number, it specifies the number of screen lines that ElDoc is allowed to display in the echo area without truncating the documentation. A positive integer specifies the absolute maximum number of screen lines to use; a floating-point number specifies the number of screen lines as a fraction of the frame’s height. The value of t means never truncate the documentation (the echo-area will be resized up to the height allowed by max-mini-window-height, see Editing in the Minibuffer), whereas the value of nil means truncate if the documentation is longer than a single screen line. Finally, the special value truncate-sym-name-if-fit (the default) means to truncate the part of the documentation that represents a symbol’s name if doing that will allow the documentation to fit on a single screen line. 



References
- https://www.masteringemacs.org/article/seamlessly-merge-multiple-documentation-sources-eldoc