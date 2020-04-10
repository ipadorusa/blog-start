---
title: inline-block div 간격 0으로 만들기
date: '2020-01-30 17:00:00'
layout: post
draft: false
path: '/posts/inline-block간격 없애기'
category: 'CSS'
tags:
  - 'HTML'
  - 'CSS'
  - 'inline-block간격 없애기'

description: 'inline-block요소가 두개가 있으면 간격이 생긴다. 간격이 생기면 0으로 만들어주고 디자인 시안을 보고 여백을 줘야하는데'
---

## inline-block div 간격 없애기

inline-block 연속으로 있으면 이렇게 약간의 4px정도가 생긴다. 이걸 해결하는 방법은 몇가지 방법이 있다.

## 현상

![현상](./inline-block-gap.gif)

## 방법

1. 마크업으로 처리

```html
<div>abcdabcdef</div>
<!--
-->
<div>abcdabcdef</div>
<!--
-->
<div>abcdabcdef</div>
<!--
-->
<div>abcdabcdef</div>
<!--
-->
<div>abcdabcdef</div>
<!--
-->
<div>abcdabcdef</div>
```

2. 마크업으로 처리

```html
<div>abcdabcdef</div>
<div>abcdabcdef</div>
<div>abcdabcdef</div>
<div>abcdabcdef</div>
<div>abcdabcdef</div>
```

3. 마크업으로 처리

```html
<div>abcdabcdef</div>
<div>abcdabcdef</div>
<div>abcdabcdef</div>
<div>abcdabcdef</div>
<div>abcdabcdef</div>
```

4. 마크업으로 처리

```html
<div>abcdabcdef</div>
<div>abcdabcdef</div>
<div>abcdabcdef</div>
<div>abcdabcdef</div>
<div>abcdabcdef</div>
```

5. CSS로 처리

```css
#parent {
  font-size: 0;
}
#child {
  font-size: 16px;
}
```

6. CSS로 처리

```css
#parent {
  display: flex;
}
#child {
  display: inline-block;
}
```
