---
title: javascript generators(자바스크립트 제너레이터)
date: '2020-03-17 23:10:54'
layout: post
draft: false
path: '/posts/javascript-generators-01'
category: 'javascript'
tags:
  - 'es6'
  - 'javascript'
  - '자바스크립트'
  - 'generators'
  - '자바스크립트 제너레이터'
  - 'Iterable protocol'

description: 'javascript generators(자바스크립트 제너레이터) 관련 글중 괜찮은게 있고 공부하고 기억에 남기위해 블로그에 글 쓴다. Generator는 이 제너레이터 함수의 반환으로 iterable 프로토콜과 iterator 프로토콜을 따르는 객체이다. 이 때, 제너레이터의 이터러블에서 반환하는 이터레이터는 자기 자신이다.'
---

## javascript generators 문법

function\*으로 문법으로 시작해서 최초 호출시에는 함수 내부에 코드를 실행하지 않고 제너레이터 객체만 생성을 하고 next가 호출되어야지만 실행 되면서 yeild를 만날때까지 동작한다.

## Generator(Iteration protocols)

generator object 는 iterator 이면서 iterable 입니다.

### iterable

객체 내부를 탐색 반복 순회할수 있는것.
자바스크립트에 대표적인 것들로는 array, set, mar, string이 있다.
Symbol.iterator 속성을 가지고 있으면 iterable한 객체이다.

```javascript
const arr = ['a', 'b', 'c']
console.dir(arr)
```

이렇게 하면 이속성이 있는걸 확인할수 있다.
![Symbol.iterator](./symbol.iterator.png)

### Iterable을 허용하는 내장 API들

```javascript
Map([iterable])
WeakMap([iterable])
Set([iterable]) and WeakSet([iterable])
Promise.all(iterable)
Promise.race(iterable)
Array.from()
```

이 있다.

### iterator

반복을 위해 특별한 인터페이스를 가진 객체.

- 객체 내부에는 next() 메소드 존재.
- 이 메소드는 value와 done 프로퍼티를 지닌 객체를 반환한다.
- done은 boolean값이다.

> 반복자(iterator)는 객체 지향적 프로그래밍에서 배열이나 그와 유사한 자료 구조의 내부의 요소를 순회(traversing)하는 객체이다. 위키문서 참고

나머지 예제는 다음시간에 정리를..

#### 참고

[인프런Javascript ES6+ 제대로 알아보기](https://www.inflearn.com/course/es6-2)
[MDN-Iteration_protocols](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Iteration_protocols)
