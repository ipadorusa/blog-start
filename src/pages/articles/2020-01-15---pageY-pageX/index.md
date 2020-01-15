---
title: window.scrollY vs window.pageYOffset
date: '2020-01-15 22:04:12'
layout: post
draft: false
path: '/posts/scrollY, pageYOffset'
category: 'Javascript'
tags:
  - 'window.scrollY'
  - 'window.scrollX'
  - 'window.pageXOffset'
  - 'window.pageYOffset'

description: '어떤게 표준일까? window.scrollX, window.scrollY, pageXOffset,pageYOffset'
---

# window.scrollY, window.scrollX vs window.pageXOffset,window.pageYOffset ?

어떤걸 써야할까? 나는 항상 헛 갈렸다. D3 차트를 만들때 툴팁의 위치를 정할때나, 스크롤 이벤트로 인한 어떤 값이 필요로 할때 기존 소스를 활용하거나 검색하여 찾아서 넣었었다.

보통 이렇게 사용했었다. ie8 부터 맞췄기에 지금 회사에서는 ie9 로 올리기는 했지만..

`window.scrollY || document.documentElement.scrollTop`

하지만 항상 기존 소스에서 가져 왔었고 잘 됐었기에

찾아보자. MDN 에서 찾아보자 [MDN scrollY](https://developer.mozilla.org/ko/docs/Web/API/Window/scrollY)

> 브라우저간 호환성을 위해서는 `window.scrollY` 대신 `window.pageYOffset`을 사용하세요. 이에 더해, Internet Explorer 9 미만의 구형 환경에서는 두 속성 모두 지원하지 않으므로 또 다른 비표준 속성을 사용해야 합니다. 다음은 완벽히 호환되는 코드의 예시입니다.

앞으로는

`window.pageYOffset || document.documentElement.scrollTop`

이렇게 사용하는걸 권장해야겠다.
