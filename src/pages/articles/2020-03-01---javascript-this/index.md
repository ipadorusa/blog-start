---
title: javascript this
date: '2020-03-01 20:26:59'
layout: post
draft: false
path: '/posts/javascript-this'
category: 'javascript'
tags:
  - 'javascript'
  - 'this'
  - 'this호출'
  - '전역공간에서 this'
  - '함수호출시 this'
  - '메소드 호출시 this'
  - 'callback 호출시 this'
  - '생성자 함수 호출시 this'
  - 'Javascript 핵심 개념 알아보기 - JS Flow'

description: '자바스크립트 this 설명중 가장 이해하기 쉬운 this. 전역공간에서 this,함수호출시 this,메소드 호출시 this, callback 호출시 this, 생성자 함수 호출시 this'
---

## Javascript this

사람들이 자바스크립트를 공부하면서 제일 아~~ 그리고 헛갈려 하는 this. 항상 듣고 이해했다가도 헛갈리는 this.

인프런 강좌중 정재남님의 Javascript 핵심 개념 알아보기 - JS Flow에 추가로 업데이트 된 내용 시청중 정리해 본다.

- '전역공간에서 this' => window, global (브라우저 콘솔과 nodejs)
- '함수호출시 this' => window, global
- '메소드 호출시 this' => 메소드 호출 주체(메소드명앞)
- 'callback 호출시 this' => 기본적으로 함수내부와 동일, 제어권을 가진 함수가 callback의 this를 명시한 경우 그에 따른다., 개발자가 this를 바인딩한 채로 callback을 넘기면 그에 따른다.
- '생성자 함수 호출시 this' => 인스턴스

## 자바스크립트 call,apply, bind

```javascript
function a(x, y, z) {
  console.log(this, x, y, z)
}
var b = {
  c: 'eee',
}

a.call(b, 1, 2, 3)
a.apply(b, [1, 2, 3])

var c = a.bind(b)
c(1, 2, 3)

var d = a.bind(b, 1, 2)
d(3)
```

### javascript call

- 즉시호출
- 형태 : fun.call(thisArg[, arg1[, arg2[, ...]]])

### javascript apply

- 즉시호출
- 형태: fun.apply(thisArg, [argsArray])

### javascript bind

- 새로운 함수 생성
- 형태: func.bind(thisArg[, arg1[, arg2[, ...]]])

### callback 호출시 this 예제

```javascript
var callback = function() {
  console.log(this)
}

var obj = {
  a: 2,
  b: function(cb) {
    cb()
  },
}
obj.b(callback)

var callback = function() {
  console.log(this)
}

var obj = {
  a: 2,
  b: function(cb) {
    cb.call(this)
  },
}
obj.b(callback)

var callback = function() {
  console.log(this)
}
var obj = {
  a: 1,
}
setTimeout(callback, 100)

var callback = function() {
  console.log(this)
}
var obj = {
  a: 1,
}
setTimeout(callback.bind(obj), 100)
```

### 생성자 함수시 this 예제

```javascript
function Person(n, a) {
  this.name = n
  this.a = a
}
var gomugom = new Person('고무곰', 30)
console.log(gomugom)
```

#### 결론

어느정도 외우고 느껴라.
