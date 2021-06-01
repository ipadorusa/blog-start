---
title: 리액트(REACT)_공부하기_1일차
date: '2021-06-01 22:15:07'
layout: post
draft: false
path: '/posts/리액트(REACT)_공부하기_1일차'
category: '자바스크립트'
tags:
  - '리액트 공부하기'
  - 'React 공부하기'
  - 'React Hook'
  - 'Virtual DOM'
  - 'React.StricMode'
  - 'Reconciliation'

description: '리액트 공부하면서 기록하고 싶은거 아니면 궁금해서 더 찾아본 자료에 대해 정리하기 위해 시작'
---

## 리액트(REACT) 공부,정리하기 1일차

인프런 강의나 패스트 캠퍼스 강의를 듣다가 어느정도 이해했다고 생각 했었는데 막상 몬가 만들어 볼려고 하면 개념이 부족한거 같고
공부 하다가 보면 자꾸 다른 지식의 가지로 빠지는거 같아 REACT는 VUE와 다르게 좀 천천히 하더라도 가볼려고 한다.

### Virtual DOM 으로 시작하여 공부한 내용

추가적으로 좀 더 자세히 공부한 부분 또는 알게 된점에 대해 링크 모음

Reconciliation: The diffing algorithm

React는 렌더링에서 Reconciliation 작업을 선행(어떤 변경에 대한 전/후 엘리먼트 트리를 비교(Diff)) 하여 플랫폼 UI에 대한 제어를 최소화 시킨다.

정리하면 비교 알고리즘 (Diffing Algorithm) 다음처럼 작동한다.

1. 엘리먼트의 타입이 다른 경우

   1. 기존 트리를 제거 후 새로운 트리 만든다.
   2. 기존 트리 제거시 트리 내부의 엘리먼트/컴포넌트들은 모두 제거한다.
   3. 새로운 트리를 만들 때 내부 엘리먼트/컴포넌트들도 모두 새로 만든다.

2. DOM 엘리먼트의 타입이 같은 경우

   1. 엘리먼트의 attributes를 비교한다.
   2. 변경된 attributes만 업데이트한다.
   3. 자식 엘리먼트들에 diff 알고리즘을 재귀적으로 적용한다.

3. 같은 타입의 컴포넌트 엘리먼트

   1. 컴포넌트가 갱신되면 인스턴스는 동일하게 유지되어 렌더링 간 state가 유지됩니다. React는 새로운 엘리먼트의 내용을 반영하기 위해 현재 컴포넌트 인스턴스의 props를 갱신합니다.
   2. 다음으로 render() 메서드가 호출되고 비교 알고리즘이 이전 결과와 새로운 결과를 재귀적으로 처리합니다.

4. 자식에 대한 재귀적 처리
   1. DOM 노드의 자식들을 재귀적으로 처리할 때, React는 기본적으로 동시에 두 리스트를 순회하고 차이점이 있으면 변경을 생성합니다.
   2. 키값이 없으면 DOM 추가시 비효율적으로 Compares --> Update dom --> Insert dom 이렇게 발생되는데 키값이 있으면 Compares --> Update X, Reorder dom --> Insert dom 이 된다.

```html
<ul>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>

<ul>
  <li key="2014">Connecticut</li>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>
```

- [React 공식문서 재조정 (Reconciliation)] : https://ko.reactjs.org/docs/reconciliation.html
- [React 렌더링과 성능 알아보기] : https://meetup.toast.com/posts/110
- [ReactJS의 Virtual DOM과 Repaint, Reflow]: http://blog.drakejin.me/React-VirtualDOM-And-Repaint-Reflow/

### React.StricMode ?

여러 강의를 보다가 몬가 안되면 StrictMode 지우길래 자바스크립트의 엄격 모드 Strict 같은거네 생각하고 있다가 책을 보니 설명이 되어 있었다.

리액트의 레거시 기능들을 사용하지 못하게 하는 기능. 이를 사용 하면 문자열 ref, componentWillMount등 옛날 기능 사용할때 경고를 출력합니다.

```react
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

```

### JSX는 언제 괄호로 감싸나요 ?

prettier를 사용하다 보니 언제는 있다가 언제는 없다가 하길래 음 잘 작동하네 하다가 주로 JSX 괄호를 감싸는건 여러 줄로 작성할 때 하고 한줄일때는 안한다고 한다. 필수는 아니라고 하니.. 편한대로 하던가 prettier에 옵션이 있다면 못찾겠네.
arrow Function Parentheses 이것만 나오네
