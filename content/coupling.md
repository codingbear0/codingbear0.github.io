---
title: Coupling
date: 2025-01-24
tags:
draft: false
---


두 가지 coupling 존재:
- Afferent coupling: This is the number of other components that depend on a given component.
- Efferent coupling: This is the number of other components that a given component depends on.


---
## from [[/book-learning-test-driven-development|Learning Test-Driven Development]]

> [!quote] 
> That is, the instability of a component is a fraction between 0 and 1. Zero indicates a completely stable component that does not depend on anything else. This is virtually impossible for any component written in a general-purpose language, since any such component would, at minimum, depend on components provided by the language. A value of 1 indicates maximum instability: such a component depends on other components and nothing depends on it.

- instability는 다음의 공식으로 정의:
	
	<BR />
	
	$instability = efferent \div (efferent + afferent)$


## References