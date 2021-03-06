---
title: HackerRank문제풀기 - 1
date: '2021-06-13 00:43:26'
layout: post
draft: false
path: '/posts/hackerrank-challenges'
category: 'algorithm'
tags:
  - 'HackerRank'
  - 'HackerRank Algorithms'
  - '알고리즘문제'
  - 'Algorithm'
  - 'HackerRank plus-minus'
  - 'HackerRank mini-max-sum'
  - 'HackerRank birthday-cake-candles'
  - 'HackerRank time-conversion'

description: 'HackerRank plus-minus in javascript, HackerRank time-conversion in javascript'
---

## 알고리즘 문제 풀기 하루에 하나씩 풀자

국내 사이트중에 알고리즘 문제 풀기위해 프로그래머스를 이용하다가 1단계 풀고 2단계 문제를 풀려고 하면 테스트 케이스를 공유가 안되어 문제가 안 풀리는 경우가 많아 다른 사이트는 찾던중에
HackerRank라는 사이트를 알게 되어 하루에 한문제 또는 두문제는 풀어 보기로 하였습니다. [HackerRank 사이트]: https://www.hackerrank.com

### HackerRank Algorithms 문제 풀어보자

1. plus-minus
2. mini-max-sum
3. birthday-cake-candles
4. time-conversion

### HackerRank plus-minus in javascript 문제 풀이

```javascript
function plusMinus(arr) {
  let plus = 0;
  let minus = 0;
  let zero = 0;

  for (let x of arr) {
    if (x >= 1) plus++;
    else if (x < 0) minus++;
    else if (x === 0) zero++;
  }
  let len = arr.length;
  console.log((plus / len).toFixed(6));
  console.log((minus / len).toFixed(6));
  console.log((zero / len).toFixed(6));
}

let arr = [-4, 3, -9, 0, 4, 1];
function plusMinus(arr);

/**
 * https://www.hackerrank.com/challenges/plus-minus/problem
 */
```

### HackerRank mini-max-sum in javascript 문제 풀이

```javascript
function miniMaxSum(arr) {
  let answer = []
  let min = Math.min(...arr)
  let max = Math.max(...arr)
  let sum = arr.reduce((acc, cur) => (acc += cur), 0)

  console.log(sum - max, sum - min)
}
let arr = [1, 3, 5, 7, 9]
miniMaxSum(arr)

/**
 *
 * https://www.hackerrank.com/challenges/mini-max-sum/problem
 */
```

### HackerRank birthday-cake-candles in javascript 문제 풀이

```javascript
function birthdayCakeCandles(candles) {
  // Write your code here
  let max = Math.max(...candles)
  let count = 0
  for (let x of candles) {
    if (x === max) count++
  }
  return count
}
let arr = [1, 3, 4, 4]
birthdayCakeCandles(arr)

/**
 * https://www.hackerrank.com/challenges/birthday-cake-candles/problem
 */
```

### HackerRank time-conversion in javascript 문제 풀이

```javascript
function timeConversion(s) {
  // Write your code here
  let timeArr = s.slice(0, 8).split(':')
  if (s.includes('PM')) {
    timeArr[0] = timeArr[0] === '12' ? '12' : Number(timeArr[0]) + 12
  } else {
    timeArr[0] = timeArr[0] === '12' ? '00' : timeArr[0]
  }
  return timeArr.join(':')
}

/**
 * https://www.hackerrank.com/challenges/time-conversion/problem
 */
```

#### HackerRank time-conversion in javascript 문제 풀이(정규식으로 풀기)

```javascript
function timeConversion(s) {
  // Write your code here
  let time = s
  const timePatterns = /^(?<first>[1-9]|[01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])(?<noon>[PM|AM]\w)/g
  let timeArr = timePatterns.exec(s)
  let first = timeArr?.groups?.first
  let noon = timeArr?.groups?.noon

  if (noon === 'PM') {
    first = first === '12' ? '12' : Number(first) + 12
  } else {
    first = first === '12' ? '00' : first
  }
  return time
    .replace(timeArr?.groups?.first, first)
    .replace(timeArr?.groups?.noon, '')
}
let time = '07:05:45PM'
timeConversion(time)

/**
 * https://www.hackerrank.com/challenges/time-conversion/problem
 *
 * 이렇게 푸는건 오바인가;; 그래도 이렇게 푸니 ?. operator 할수 있네....
 */
```
