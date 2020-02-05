---
title: IE9 D3 Chart 안나옴 // IE9 개발자 도구 연 상태에서 새로 고침하면 나옴
date: '2020-01-21 22:22:03'
layout: post
draft: false
path: '/posts/IE9_D3_notworking'
category: 'D3'
tags:
  - 'D3.js'
  - 'IE9'
  - 'modules'
  - 'bug'

description: 'IE9 D3 차트 안나오는 현상 개발자 도구 연 상태에서 새로 고침하면 나옴. module,webpack 번들러의 문제'
---

## IE9 D3 차트 안나오는 현상 개발자 도구 연 상태에서 새로 고침하면 나옴

IE9 에서 그래프가 안나오는 현상 => 익스 개발자 도구 연 상태에서 새로고침하면 화면에 표현, 그 뒤 새로고침하면 나옴 에러 메시지 없음..;;

몰까; 익스에서만 개발자도구 열었을때 작동하는거면 console 문제로 생각되서 console 이 들어간 부분을 찾았으나 만든 그래프 만든 소스상에서는 콘솔이 들어간 부분이 없어서 다른쪽 문제라고 판단 하였다.

5 시간동안. 이것저것 다해봄, 차트나 그외 같이 묶은거 하나하나 열어서..
콘솔이 이유인거 알겠으나 왜 차트에서만 문제가 생긴지는 모르겠었음. 혹시나 하는 마음에. 바벨을 확인

## 원인을 찾다.

내 소스에도 없으면 웹팩에서 바벨 설정이나 말리면서 생기는 소스라고 판단. 일단 바벨부터 의심. 말린 dist 파일을 보니 콘솔이 있긴 있는데; 이걸 어떻게 지워야하나..
고민중 google 에 검색을 하니 babel-plugin-transform-remove-console 모듈이 있었다.

### 해결 방법

[babel-plugin-transform-remove-console](https://www.npmjs.com/package/babel-plugin-transform-remove-console) 모듈 설치후
웹팩 설정에
plugins: ['@babel/plugin-syntax-dynamic-import', 'transform-remove-console']
transform-remove-console 넣어 해결
