---
title: 자바스크립트의 truthy와 falsy
date: '2020-04-22 09:00:00'
layout: post
draft: false
path: '/posts/자바스크립트truthy,falsy'
category: 'javascript'
tags:
  - '자바스크립트'
  - '자바스크립트truthy'
  - '자바스크립트falsy'

description: '자바스크립트를 사용하다가 보면 truthy와 falsy한 값에 대한 비교를 하게 되는 경우가 많다.'
---

## 자바스크립트의 truthy와 falsy 값 알기

항상 falsy 한 값

- false
- 0
- '', ""
- null
- undefined
- NaN

```javascript

const value = null;

if(value) {
  console.log('truth')
}
// 실행 안됨 value 에 위에 값 넣어도 콘솔은 찍히지 않는다.
console.log(!false); //true
console.log(!0); //true
console.log(!''); //true
console.log(!""); //true
console.log(!null); //true
console.log(!undefined); //true
console.log(!NaN); //true

```
그 외의 값은 truthy한 값이다.

### 실무에서 사용되는 코드 truthy, falsy 체크하기

어떤 돔에 높이값을 구하기 위해 함수를 만들었을때.

```javascript
function getHeight(elm) {
	console.log(elm.offsetHeight);
}

const elm = document.querySelector('.square');

getHeight(elm);
// 만약에 square라는 돔 엘리먼트가 없다면 null || undefined 경우로 에러 메시지가 나온다.
// 그럼 에러가 안나게 하기 위해서는 아래처럼 해줘야 한다

function getHeight(elm) {
  if(elm === undefined || elm === null) return;
	console.log(elm.offsetHeight);
}
// 편한 방법
function getHeight(elm) {
  if(!elm) return;
	console.log(elm.offsetHeight);
}

```

### truthy, falsy 한 값 찾기

```javascript
// 이렇게 해서 삼항 연산자로 찾을수도 있지만.
const val = '';

const truthy = val ? true : false;

console.log(truthy)

// 더 편한 방법 이런식으로 하면 편하다

const val = '';

const truthy = !!val;

console.log(truthy)
// 설명 '' 는 falsy 한 값이니 !val 때는 true 값으로 !가 남았으니 다시 false로 변한다.

```

#### 결론

항상 falsy 한 값을 외우고 나머지는 truthy 한 값이니 잘 활용하면 된다.

- false
- 0
- '', ""
- null
- undefined
- NaN