---
title: Storybook Vue 설치 (1)
date: '2020-01-23 23:38:30'
layout: post
draft: false
path: '/posts/Storybook-vue-step02'
category: 'Storybook'
tags:
  - 'Storybook'
  - 'Vue.js'
  - '스토리북'
  - 'Storybook for Vue'

description: 'Storybook Vue 설치 해보자. 윈도우 버전에서는 Automactic setup 시키는대로 하면 작동이 안됐는데. 일단 맥에서 해보자'
---

## Storybook Vue 버전으로 설치 해보자

Storybook vue 버전으로 설치 설명글은 [https://storybook.js.org/docs/guides/guide-vue/](https://storybook.js.org/docs/guides/guide-vue/)에 나와있다.

두가지 방법이 있다.
참고로 윈도우에서는 Automactic setup 으로 하면 모듈이 부족했는데... Mac 에서는 어떤가 모 같겠지만... 기억으로 dependencies 부족으로...

1. Automactic setup [공식문서 link](https://storybook.js.org/docs/guides/guide-vue/#automatic-setup)
2. Manual setup [공식문서 link](https://storybook.js.org/docs/guides/guide-vue/#manual-setup)

## Automactic setup 으로 설치

```bash
 npx -p @storybook/cli sb init --type vue
```

짜짠...설치후 yarn storybook...

```bash
ERR! Error: Cannot find module 'vue-loader/lib/plugin'
```

vue-loader 를 찾을수 없다며....
vue-loader 를 npm 으로 설치하면 될듯하나.. 몬가 첫 시작부터 찜찜하니.. package.json 을 까봤다.

```json
"dependencies": {},
"devDependencies": {
  "@babel/core": "^7.8.3",
  "@storybook/addon-actions": "^5.3.8",
  "@storybook/addon-links": "^5.3.8",
  "@storybook/addons": "^5.3.8",
  "@storybook/vue": "^5.3.8",
  "babel-loader": "^8.0.6",
  "babel-preset-vue": "^2.0.2"
}
```

많이 부족하다. vue 도 dependencies 에도 설치가 안되어 있고. 기분이 찜찜하다.
3 년전에도 Storybook 은 vue 를 편하게 지원하지 않았다.
vue-loader 만 설치한다고 해결 되지가 않을꺼 같아 Manual setup(수동 설치)는 어떻게 하나 살펴 봤다.

## Manual setup

```bash
npm install @storybook/vue --save-dev
```

추가적으로 vue, vue-loader, vue-template-compiler, @babel/core, babel-loader and babel-preset-vue 를 설치하라고 나왔있다.
그래서 Automactic setup 이 설치한 폴더에서 아래처럼 추가 설치를 하였다.

```bash
npm install vue --save
npm install vue-loader vue-template-compiler @babel/core babel-loader babel-preset-vue --save-dev
```

### 실행

```bash
npm run storybook
```

#### package.json 내용

```json
"dependencies": {
    "vue": "^2.6.11"
  },
"devDependencies": {
  "@babel/core": "^7.8.3",
  "@storybook/addon-actions": "^5.3.8",
  "@storybook/addon-links": "^5.3.8",
  "@storybook/addons": "^5.3.8",
  "@storybook/vue": "^5.3.9",
  "babel-loader": "^8.0.6",
  "babel-preset-vue": "^2.0.2",
  "vue-loader": "^15.8.3",
  "vue-template-compiler": "^2.6.11"
}
```

짜짠 설치 완료.
왜 그럴까;;; 내가 무엇을 놓친걸까...
이렇게 하는게 맞는걸까?
