---
title: Storybook(Vue)이란?
date: '2020-01-17 13:23:12'
layout: post
draft: false
path: '/posts/Storybook-vue-step01'
category: 'Storybook'
tags:
  - 'Storybook'
  - 'Vue.js'
  - 'storybook + vue.js 설치'

description: 'Storybook 을 도입해보자 - Vue.js, storybook에 대한 전반적인 기능 파악'
---

## Storybook 을 도입해보자 - Vue.js

3 년전쯤 회사에 도입할려고 생각하고 준비 했었으나 많은 일(?)과 다른 사정으로 인해 준비를 못했었다.

## Storybook 이란?

Storybook 은 UI 컴포넌트를 직접 보면서 개발을 할 수 있는 환경을 제공하는 툴이다. 실제 프로젝트 내에서 실행 되는 것이 아니라 독립된 환경으로 실행한다.

순수 UI 개발에 집중할 수 있게 해준다. Storybook 을 잘 활용하면 UI 개발 포함 (기획,디자인,개발)과의 협업 구조에서 원활하게 커뮤케이션과 빠른 이터레이션(iteration)을 통해 개발 생산성 효과 누릴수 있다.

UI 개발을 하다 보면 빈번하게 일어나는 디자인 스펙 오류, 기획 프로세스 오류 등을 빠르게 확인 하여 수정 할 수 있으며, 개발자는 컴포넌트를 더욱 유연하고, 재사용 가능한 컴포넌트 개발을 할 수 있도록 도와준다.

Storybook 의 경우 현재 많은 회사에서 사용 하고 있는데, Airbnb, Slack, Coursera 등과 많은 리액트 오픈소스 프로젝트에서 사용 되고 있다.

[Storybook 예시 사이트](https://storybook.js.org/docs/examples/)

### Storybook Addon 기능

[Storybook Addons](https://storybook.js.org/addons/)

Official addons 기능으로는 [Knobs](https://github.com/storybookjs/storybook/tree/master/addons/knobs), [Actions](https://github.com/storybookjs/storybook/blob/master/addons/actions/README.md), [Source](https://github.com/storybookjs/storybook/tree/master/addons/storysource), [Docs](https://github.com/storybookjs/storybook/tree/master/addons/docs), [Viewport](https://github.com/storybookjs/storybook/tree/master/addons/viewport), [Storyshots](https://github.com/storybookjs/storybook/tree/master/addons/storyshots), [Backgrounds](Backgrounds), [Accesibility](https://github.com/storybookjs/storybook/tree/master/addons/a11y), [Console](https://github.com/storybookjs/storybook-addon-console), [Links](https://github.com/storybookjs/storybook/tree/master/addons/links). 있다.
그외 기능들은 [Addon / Framework Support Table](https://github.com/storybookjs/storybook/blob/next/ADDONS_SUPPORT.md) 을 보면 되겠다.

- Knobs : 동적으로 Props 를 통해 변화를 줄수 있는 기능
  ![Knobs](https://raw.githubusercontent.com/storybookjs/storybook/master/addons/knobs/docs/storybook-knobs-example.png)

- Actions : 이벤트 핸드러를 통해 수신한 내용을 화면에 표시하는 기능
  ![Actions](https://raw.githubusercontent.com/storybookjs/storybook/HEAD/addons/actions/docs/screenshot.png)

- Source : 소스 코드를 보고 작동방법을 확인거나 긁을수 있게 해주는 기능
  ![Source](https://raw.githubusercontent.com/storybookjs/storybook/master/addons/storysource/docs/demo.gif)

- Docs : 기능 문서를 편하게 만들수 있게 하는 기능 [참고링크](https://github.com/storybookjs/storybook/blob/master/addons/docs/docs/docspage.md)
  ![Docs](https://raw.githubusercontent.com/storybookjs/storybook/master/addons/docs/docs/media/docs-tab.png)

- Viewport : 뷰포트 크기와 방향을 조정하여 반응형 구성 요소를 체크 기능
  ![Viewport](https://raw.githubusercontent.com/storybookjs/storybook/master/addons/viewport/docs/viewport.png)

- Storyshots : Jest, Puppeteer 를 이용하여 테스트(기능,디바이스별) 해볼수 있음.
  ![Storyshots-Jest](https://raw.githubusercontent.com/storybookjs/storybook/HEAD/addons/storyshots/storyshots-core/docs/storyshots-fail.png)

- Backgrounds : 미리보기 패널에 배경색을 변경할수 있음.
  ![Backgrounds](https://raw.githubusercontent.com/storybookjs/storybook/master/docs/static/img/addon-backgrounds.gif)

- Accesibility : UI 의 구성요소의 접근성 테스트 기능.
  ![Backgrounds](https://raw.githubusercontent.com/storybookjs/storybook/HEAD/addons/a11y/docs/screenshot.png)

- Console : 콘솔창 기능.
  ![Console](https://raw.githubusercontent.com/storybooks/storybook-addon-console/master/docs/storybook-addon-console.png)

- Links : 스토리북간의 링크(router 네비게이트 같은기능)
