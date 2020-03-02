---
title: javascript hoisting
date: '2020-03-02 23:04:23'
layout: post
draft: false
path: '/posts/javascript-hoisting'
category: 'javascript'
tags:
  - 'javascript'
  - 'hoisting'
  - 'lexicalEnvironment'
  - 'variableEnvironment'
  - '자바스크립트 호이스팅'
  - 'Javascript 핵심 개념 알아보기 - JS Flow'

description: '자바스크립트 hoisting에 대해서 다시 공부하기 lexicalEnvironment와 variableEnvironment'
---

## 자바스크립트 hoisting

매개변수와 변수에 대한 호이스팅 예제

```javascript
function a(x) {
  console.log(x)
  var x
  console.log(x)
  var x = 2
  console.log(x)
}
a(1)

///실행순서
function a(x) {
  var x = 1 // 매개변수 선언
  console.log(x)
  var x
  console.log(x)
  var x = 2
  console.log(x)
  // 다시 variableEnvironment
  var x
  var x
  var x
  x = 1
  console.log(x)
  console.log(x)
  x = 2
  console.log(x)
}
a(1)
```

이런식으로 생각하면 된다.

### 함수 선언 호이스팅

```javascript
function a() {
  console.log(b)
  var b = 'bbb'
  console.log(b)
  function b() {
    console.log(b)
  }
}
a()
/// 실행
var b;
var b = function () {}
console.log(b)
b = 'bbb'
console.log(b)
console.log(b)
///결과
function b()
bbb
undefined

```

#### 함수선언문 vs 함수표현식

```javascript
function a() {} // 함수선언문
var b = function() {} // 익명함수표현식
var b = function b() {} // 기명 함수 표현식
```

기명 함수 표현식은 주의할 점이 있습니다. 바로 외부에서는 함수명으로 함수를 호출할 수 없다는 점입니다. 함수명은 오직 함수 내부에서만 접근할 수 있습니다.

```javascript
console.log(sum(1,2));
console.log(sum2(2,2));
function sum(a,b) (
  return a + b
)
var sum2 = function(a,b) { return a + b};

//호이스팅
var sum = function sum (a,b) {return a + b};
var sum2;
console.log(sum(1,2));
console.log(sum2(2,2));
sum2 = function(a, b) {return a + b}
//결과
3
undefined
```

#### 정리

Javascript 핵심 개념 알아보기 - JS Flow를 다시 들으면서 정리하니 예전에 헛갈렸던게 다시 보임.
계속 계속 공부하자
