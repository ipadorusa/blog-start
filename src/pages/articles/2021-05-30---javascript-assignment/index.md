---
title: 자바스크립트 할당 연산자
date: '2021-05-30 22:40:52'
layout: post
draft: false
path: '/posts/자바스크립트_할당_연산자'
category: '자바스크립트'
tags:
  - '자바스크립트할당연산자'
  - 'Javascript assignment'
  - '자바스크립트할당연산자종류'
  - 'Logical nullish assignment (??=)'

description: 'The logical AND assignment (x &&= y) operator only assigns if x is truthy. Logical nullish assignment (??=)'
---

## Logical AND assignment (&&=)

> The logical AND assignment (x &&= y) operator only assigns if x is truthy.
>
> 논리 AND할당 연산자는 X가 truthy([링트]: https://developer.mozilla.org/ko/docs/Glossary/Truthy)일 경우 할당할수 있습니다.

```javascript
let a = 1
let b = 0

a &&= 2
console.log(a)
// expected output: 2 a값이 truthy값이 여서 2가 대입

b &&= 2
console.log(b)
// expected output: 0  b값이 falsy값이 여서 b값 출력
```

```javascript
x && (x = y) // 좌측에서 우측으로 평가하며 대입
```

```javascript
x = x && y // bad case 할당되지 않는다.
```

```javascript
let x = 0
let y = 1

x &&= 0 // 0
x &&= 1 // 0
y &&= 1 // 1
y &&= 0 // 0
```

대응 불가 브라우저

- Internet Explorer, Opera, Opera Android, Samsung Internet

## Logical nullish assignment (??=)

> The logical nullish assignment (`x ??= y`) operator only assigns if `x` is [nullish](https://developer.mozilla.org/en-US/docs/Glossary/Nullish) (`null` or `undefined`).
>
> 논리적 null 할당연산자는 x가 null값(null or undefined) 일 y 값을 할당 합니다. x가 nullish값이면 y값이 대입되고 x가 nullish값이 아니면 x값이 대입됩니다.

```javascript
const a = { duration: 50 }

a.duration ??= 10
console.log(a.duration)
// expected output: 50  a.duration값이 있는 값이여서 x인 a.duration값이 할당

a.speed ??= 25
console.log(a.speed)
// expected output: 25 a.speed값이 nullish값이므로 25가 할당
```

활용예시

```javascript
function config(options) {
  options.duration ??= 100
  options.speed ??= 25
  return options
}

config({ duration: 125 }) // { duration: 125, speed: 25 }
config({}) // { duration: 100, speed: 25 }
```

대응 불가 브라우저

- Internet Explorer, Opera, Opera Android, Samsung Internet
