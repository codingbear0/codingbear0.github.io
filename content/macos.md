---
title: macOS
date: 2023-07-28
tags: 
- macOS
draft: true
---


---
### Essential Apps
- [[/app-raycast|Raycast]]
- [[/app-homebrew|Homebrew]]
- [[/app-iterm2|Iterm2]]
- [[/app-things3|Things3]]
- [[/app-flow-app|Flow.app]]
- [Itsycal](https://www.mowglii.com/itsycal/)
- [iStat Menus](https://bjango.com/mac/istatmenus/)
- ~~[[/app-karabiner-elements|Karabiner-Elements]]~~
- ~~[[/app-espanso|Espanso]]~~



### References




#TODO
---
title: Create a Bootable Installer for macOS
date: 2024-07-07
tags:
- macOS
draft: false
---

https://support.apple.com/en-us/101578 








### Re-installation
1. [[macOS-create-a-bootable-installer|Create a bootable installer for macOS]]

- https://support.apple.com/en-us/101578 


2. mscOS 재설치:
	- 리커버리 모드 진입[^2]
	- macOS Install
3. 한영변환키 변경:
	![[/media/Screenshot 2023-09-27 at 15.32.26.png]]

	`~/Library/Preferences/com.apple.symbolichotkeys.plist`
	- `61`/ `value`/ `parameters/ `Item 2`/ 의 값을 ==131072==로 수정
	- Reboot
3. [[/macOS-system-settings|System Settings]]
4. Run `bootstrap.sh`

[^1]: [[/macOS-sonoma|macOS Sonama]]  14.0 기준
[^2]: Apple Silicon 기준, booting 할 때 전원 버튼을 누르고 떼지 않은 채 기다리면 됨


### Tips
- Clamshell mode:
    ```asciidoc
    / System Settings > Battery > Options
    ```
    - `Prevent automatic sleeping on power adapter when display is off` 끄기.

- Print test page:
    ```asciidoc
    / System Settings` > Printers & Scanners > Printers
    ``` 
    1. 설치된 프린터 선택.
    2. 팝업 창에서 `Printer Queue...`.
        ![[/media//Screenshot 2023-12-15 at 11.08.53.png]]
    3. menubar에서 `Printer` > `Print Test Page`[^1].

[^1]: `S-⌘ p`.
