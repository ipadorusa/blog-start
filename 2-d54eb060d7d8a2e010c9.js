(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{156:function(e,t,a){"use strict";var n=a(6),r=a.n(n),i=a(0),l=a.n(i),s=a(155),c=a.n(s),o=(a(165),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return l.a.createElement("div",{className:"layout"},l.a.createElement(c.a,{defaultTitle:"Blog by John Doe"}),e)},t}(l.a.Component));t.a=o},157:function(e,t,a){"use strict";a(182);var n=a(6),r=a.n(n),i=a(0),l=a.n(i),s=a(199),c=a.n(s),o=a(38),m=(a(53),a(240),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=l.a.createElement("ul",{className:"menu__list"},e.map(function(e){return l.a.createElement("li",{className:"menu__list-item",key:e.path},l.a.createElement(o.Link,{to:e.path,className:"menu__list-item-link",activeClassName:"menu__list-item-link menu__list-item-link--active"},e.label))}));return l.a.createElement("nav",{className:"menu"},t)},t}(l.a.Component)),u=(a(241),a(242),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=(e.twitter,e.github),a=e.email;return l.a.createElement("div",{className:"links"},l.a.createElement("ul",{className:"links__list"},l.a.createElement("li",{className:"links__list-item"},l.a.createElement("a",{href:"https://www.github.com/"+t,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"icon-github"}))),l.a.createElement("li",{className:"links__list-item"},l.a.createElement("a",{href:"mailto:"+a},l.a.createElement("i",{className:"icon-mail"})))))},t}(l.a.Component)),E=a(243),A=a.n(E),p=(a(244),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.location,t=this.props.data.site.siteMetadata,a=t.author,n=t.subtitle,r=t.copyright,i=t.menu,s="/"===c()(e,"pathname","/"),E=l.a.createElement("div",null,l.a.createElement(o.Link,{to:"/"},l.a.createElement("img",{src:A.a,className:"sidebar__author-photo",width:"75",height:"75",alt:a.name})),s?l.a.createElement("h1",{className:"sidebar__author-title"},l.a.createElement(o.Link,{className:"sidebar__author-title-link",to:"/"},a.name)):l.a.createElement("h2",{className:"sidebar__author-title"},l.a.createElement(o.Link,{className:"sidebar__author-title-link",to:"/"},a.name)),l.a.createElement("p",{className:"sidebar__author-subtitle"},n));return l.a.createElement("div",{className:"sidebar"},l.a.createElement("div",{className:"sidebar__inner"},l.a.createElement("div",{className:"sidebar__author"},E),l.a.createElement("div",null,l.a.createElement(m,{data:i}),l.a.createElement(u,{data:a}),l.a.createElement("p",{className:"sidebar__copyright"},r))))},t}(l.a.Component));t.a=p},165:function(e,t,a){},240:function(e,t,a){},241:function(e,t,a){},242:function(e,t,a){},243:function(e,t){e.exports="data:image/jpeg;base64,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"},244:function(e,t,a){}}]);
//# sourceMappingURL=2-d54eb060d7d8a2e010c9.js.map