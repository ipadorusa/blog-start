---
title: 자바스크립트 코딩의 기술
date: '2020-03-31 21:44:30'
layout: post
draft: false
path: '/posts/자바스크립트-코딩의-기술'
category: 'books'
tags:
  - '자바스크립트 코딩의 기술'
  - '자바스크립트 기술'
  - 'javascript'
  - '똑똑하게 코딩하는 법'

description: '자바스크립트 코딩의 기술(똑똑하게 코딩하는 법) 읽으면서 정리 합니다. 생각보다 좋은 책인거 같아 구매후 정리중'
---

## 자바스크립트 코딩의 기술 책 소개

[자바스크립트 코딩의 기술(똑똑하게 코딩하는 법)](http://www.kyobobook.co.kr/product/detailViewKor.laf?ejkGb=KOR&mallGb=KOR&barcode=9791165210205&orderClick=LEa&Kc=)은 책은

> 조 모건 지음 | 곽현철 옮김 | 길벗 | 2019년 12월 27일 출간한 책이다.

관련 소스는 [http://github.com/gilbutITbook/007030](http://github.com/gilbutITbook/007030)

## 자바스크립트 코딩의 기술 책의 목차

- 1장 변수 할당으로 의도를 표현하라

  - TIP 1 const로 변하지 않는 값을 표현하라
  - TIP 2 let과 const로 유효 범위 충돌을 줄여라
  - TIP 3 블록 유효 범위 변수로 정보를 격리하라
  - TIP 4 템플릿 리터럴로 변수를 읽을 수 있는 문자열로 변환하라

- 2장 배열로 데이터 컬렉션을 관리하라

  - TIP 5 배열로 유연한 컬렉션을 생성하라
  - TIP 6 Includes( )로 존재 여부를 확인하라
  - TIP 7 펼침 연산자로 배열을 본떠라
  - TIP 8 push( ) 메서드 대신 펼침 연산자로 원본 변경을 피하라
  - TIP 9 펼침 연산자로 정렬에 의한 혼란을 피하라

- 3장 특수한 컬렉션을 이용해 코드 명료성을 극대화하라

  - TIP 10 객체를 이용해 정적인 키-값을 탐색하라
  - TIP 11 Object.assign( )으로 조작 없이 객체를 생성하라
  - TIP 12 객체 펼침 연산자로 정보를 갱신하라
  - TIP 13 맵으로 명확하게 키-값 데이터를 갱신하라
  - TIP 14 맵과 펼침 연산자로 키-값 데이터를 순회하라
  - TIP 15 맵 생성 시 부수 효과를 피하라
  - TIP 16 세트를 이용해 고윳값을 관리하라

- 4장 조건문을 깔끔하게 작성하라

  - TIP 17 거짓 값이 있는 조건문을 축약하라
  - TIP 18 삼항 연산자로 빠르게 데이터를 확인하라
  - TIP 19 단락 평가를 이용해 효율성을 극대화하라

- 5장 반복문을 단순하게 만들어라

  - TIP 20 화살표 함수로 반복문을 단순하게 만들어라
  - TIP 21 배열 메서드로 반복문을 짧게 작성하라
  - TIP 22 map( ) 메서드로 비슷한 길이의 배열을 생성하라
  - TIP 23 filter( )와 find( )로 데이터의 부분집합을 생성하라
  - TIP 24 forEach( )로 동일한 동작을 적용하라
  - TIP 25 체이닝으로 메서드를 연결하라
  - TIP 26 reduce( )로 배열 데이터를 변환하라
  - TIP 27 for...in 문과 for...of 문으로 반복문을 정리하라

- 6장 매개변수와 return 문을 정리하라

  - TIP 28 매개변수 기본값을 생성하라
  - TIP 29 해체 할당으로 객체 속성에 접근하라
  - TIP 30 키-값 할당을 단순화하라
  - TIP 31 나머지 매개변수로 여러 개의 인수를 변수로 전달하라

- 7장 유연한 함수를 만들어라

  - TIP 32 테스트하기 쉬운 함수를 작성하라
  - TIP 33 화살표 함수로 복잡도를 낮춰라
  - TIP 34 부분 적용 함수로 단일 책임 매개변수를 관리하라
  - TIP 35 커링과 배열 메서드를 조합한 부분 적용 함수를 사용하라
  - TIP 36 화살표 함수로 문맥 혼동을 피하라

- 8장 클래스로 인터페이스를 간결하게 유지하라

  - TIP 37 읽기 쉬운 클래스를 만들어라
  - TIP 38 상속으로 메서드를 공유하라
  - TIP 39 클래스로 기존의 프로토타입을 확장하라
  - TIP 40 get과 set으로 인터페이스를 단순하게 만들어라
  - TIP 41 제너레이터로 이터러블 속성을 생성하라
  - TIP 42 bind( )로 문맥 문제를 해결하라

- 9장 외부 데이터에 접근하라

  - TIP 43 프라미스를 이용해 비동기적으로 데이터를 가져오라
  - TIP 44 async/await로 함수를 명료하게 생성하라
  - TIP 45 fetch로 간단한 AJAX 호출을 처리하라
  - TIP 46 localStorage로 상태를 장기간 유지하라

- 10장 컴포넌트 아키텍처를 이용해 관련 파일을 모아라
  - TIP 47 가져오기와 내보내기로 기능을 분리하라
  - TIP 48 npm으로 커뮤니티 코드를 끌어와라
  - TIP 49 컴포넌트 아키텍처를 이용해 애플리케이션을 만들어라
  - TIP 50 빌드 도구를 이용해 컴포넌트를 결합하라
  - TIP 51 CSS 애니메이션을 활용하라

## 자바스크립트 코딩의 기술 책 요약 중 메모

- 범위:1장~2장

위 항목으로 읽다가 메모가 필요한건 머리속에 다시 기억하기 위해 기록.

- TIP 1 const로 변하지 않는 값을 표현하라

  - 될수 있으면 조작(mutation)을 피하는 것이 최선이다.

```javascript
const discountable = []
// 코드를 몇 행 건너뛰었습니다.
for (let i = 0; i < cart.length; i++) {
  if (cart[i].discountAvailable) {
    discountable.push(cart[i])
  }
}
// better
const discountable = cart.filter(item => item.discountAvailable)
```

위 예시 코드 [TIP 1 const로 변하지 않는 값을 표현하라](https://github.com/gilbutITbook/007030/blob/master/variables/const/const.js)

- TIP 7 펼침 연산자로 배열을 본떠라

```javascript
function removeItem(items, removable) {
  const updated = []
  for (let i = 0; i < items.length; i++) {
    if (items[i] !== removable) {
      updated.push(items[i])
    }
  }
  return updated
}
```

위 예시 코드 [TIP 7 펼침 연산자로 배열을 본떠라](https://github.com/gilbutITbook/007030/blob/master/arrays/spread/problem.js)

```javascript
function removeItem(items, removable) {
  if (items.includes(removable)) {
    const index = items.indexOf(removable)
    items.splice(index, 1)
  }
  return items
}
```

위 예시 코드 [TIP 7 펼침 연산자로 배열을 본떠라](https://github.com/gilbutITbook/007030/blob/master/arrays/spread/splice.js)

오 처음 예시보다 두번째 예시는 좀 더 단순해 졌음. 하지만.. 원본 배열을... 건드리네요..

```javascript
function removeItem(items, removable) {
  if (items.includes(removable)) {
    const index = items.indexOf(removable)
    return items.slice(0, index).concat(items.slice(index + 1))
  }
  return items
}
```

위 예시 코드 [TIP 7 펼침 연산자로 배열을 본떠라](https://github.com/gilbutITbook/007030/blob/master/arrays/spread/slice.js)

훌륭한 코드라 하지만 책에서도 눈으로만 봐서는 정확히 어떤 작업을 하는지 알기 힘들다는 지적이 있음. 개 공감..

```javascript
function removeItem(items, removable) {
  if (items.includes(removable)) {
    const index = items.indexOf(removable)
    return [...items.slice(0, index), ...items.slice(index + 1)]
  }
  return items
}

const book = ['Reasons and Persons', 'Derek Parfit', 19.99]

function formatBook(title, author, price) {
  return `${title} by ${author} $${price}`
}

formatBook(book[0], book[1], book[2])

formatBook(...book)
```

훨씬 눈에 익숙하게 좋아지긴 했는데. formatBook의 예시가 더 좋아 보인다.

```javascript
const staff = [
  {
    name: 'Joe',
    years: 10,
  },
  {
    name: 'Theo',
    years: 5,
  },
  {
    name: 'Dyan',
    years: 10,
  },
]
function sortByYears(a, b) {
  if (a.years === b.years) {
    return 0
  }
  return a.years - b.years
}

const sortByName = (a, b) => {
  if (a.name === b.name) {
    return 0
  }
  return a.name > b.name ? 1 : -1
}

staff.sort(sortByYears)

[...staff].sort(sortByYears);
```

spread 로 작성하면 변화없이 정렬을 할수 있다.

### 자바스크립트 코딩의 기술 1장~2장 결론

소소하지만 괜찮은 팁과 적절한 예제로 설명 해줘 좋은 책이다.

급 마무리....

피곤해서 마무리한다..

다음에는 3장~4장중에 기억하고 괜찮은 걸 기억하기 위해 글을 작성 하겠다.
