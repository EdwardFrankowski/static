(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9160],{17246:function(e,t,r){Promise.resolve().then(r.bind(r,17150))},8792:function(e,t,r){"use strict";r.d(t,{default:function(){return s.a}});var n=r(25250),s=r.n(n)},72671:function(e,t){"use strict";/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=Symbol.for("react.element"),n=(Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.memo"),Symbol.for("react.lazy"),{isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}}),s=Object.assign,l={};function o(e,t,r){this.props=e,this.context=t,this.refs=l,this.updater=r||n}function a(){}function i(e,t,r){this.props=e,this.context=t,this.refs=l,this.updater=r||n}o.prototype.isReactComponent={},o.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},o.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},a.prototype=o.prototype;var c=i.prototype=new a;c.constructor=i,s(c,o.prototype),c.isPureReactComponent=!0;var u=Object.prototype.hasOwnProperty,f={key:!0,ref:!0,__self:!0,__source:!0};t.createElement=function(e,t,n){var s,l={},o=null,a=null;if(null!=t)for(s in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(o=""+t.key),t)u.call(t,s)&&!f.hasOwnProperty(s)&&(l[s]=t[s]);var i=arguments.length-2;if(1===i)l.children=n;else if(1<i){for(var c=Array(i),p=0;p<i;p++)c[p]=arguments[p+2];l.children=c}if(e&&e.defaultProps)for(s in i=e.defaultProps)void 0===l[s]&&(l[s]=i[s]);return{$$typeof:r,type:e,key:o,ref:a,props:l,_owner:null}}},52846:function(e,t,r){"use strict";e.exports=r(72671)},17150:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return b},metadata:function(){return v}});var n,s,l,o=r(57437);r(2265);var a=r(96369),i=r.n(a),c=r(51189),u=r(52846);function f(){return(f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var p=e=>u.createElement("svg",f({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 781 451"},e),n||(n=u.createElement("path",{fill:"#2C5BAF",d:"M780.6 318.4h-47.2v86h-31.2v-86H579v-13.2L711.8 120h21.6v170.4h47.2zm-78.4-115.2 4-32.8H705l-14 27.2-56.4 76.4-19.2 19.6 28-3.2h58.8zM201.6 319.4h-47.2v86h-31.2v-86H0v-13.2L132.8 121h21.6v170.4h47.2zm-78.4-115.2 4-32.8H126l-14 27.2L55.6 275l-19.2 19.6 28-3.2h58.8z"})),s||(s=u.createElement("g",{clipPath:"url(#404_svg__a)"},u.createElement("path",{fill:"url(#404_svg__b)",d:"M449.3 399H308l-8-367h149.3z"}),u.createElement("path",{fill:"url(#404_svg__c)",d:"m500.6 21 54.7 7-31.7 371H494z"}),u.createElement("path",{fill:"#00D8E6",d:"M458 4H274l6.9 395h28.2L300 35.7h158V405h26V4z"}),u.createElement("path",{fill:"#A1CAE1",d:"M451.3 4H269l11.9 395H300l-6-373h157.3v373h25V4z"}),u.createElement("path",{fill:"#86F2F9",d:"m447.898 26 47.4-26-13.8 435.5-41.6-36.5z"}),u.createElement("path",{stroke:"#00A3AD",strokeMiterlimit:10,d:"m456.498 32 27.7-18-2.7 211.2-32.1-9.7zM449.399 222l32.1 12-6.2 182.3-29.6-21.3z"}),u.createElement("path",{fill:"url(#404_svg__d)",d:"M494.202 430h55.7L523.5 399h-30.898z"}),u.createElement("path",{fill:"#00A3AD",d:"M494 436.3h-12.5L495.3 0h11.3z"}))),l||(l=u.createElement("defs",null,u.createElement("linearGradient",{id:"404_svg__b",x1:223.251,x2:535.249,y1:346.062,y2:57.938,gradientUnits:"userSpaceOnUse"},u.createElement("stop",{stopColor:"#162A6A"}),u.createElement("stop",{offset:1,stopColor:"#2C5BAF"})),u.createElement("linearGradient",{id:"404_svg__c",x1:540,x2:480,y1:210,y2:210,gradientUnits:"userSpaceOnUse"},u.createElement("stop",{stopColor:"#2A3C8D",stopOpacity:0}),u.createElement("stop",{offset:1,stopColor:"#0C1127"})),u.createElement("linearGradient",{id:"404_svg__d",x1:541,x2:497,y1:425.5,y2:400.5,gradientUnits:"userSpaceOnUse"},u.createElement("stop",{stopColor:"#999FB7",stopOpacity:0}),u.createElement("stop",{offset:1,stopColor:"#5D647F"})),u.createElement("clipPath",{id:"404_svg__a"},u.createElement("path",{fill:"#fff",d:"M269 0h286.3v436.3H269z"}))))),_=r(74898),d=r(14424),h=r(15361),m=r(8792);function y(){let e=(0,h.u_)(),t=(0,h.mz)();return(0,o.jsxs)(c.W,{as:"section",className:i().root,children:[(0,o.jsx)(p,{className:i().icon}),(0,o.jsxs)("div",{className:i().header,children:[(0,o.jsx)("h2",{children:"Жизнь – вечный поиск "}),(0,o.jsx)("span",{className:i().span,children:"Хорошая новость: апарт-отель вы уже нашли. Здесь вы можете:"})]}),(0,o.jsxs)("div",{className:i().buttons,children:[(0,o.jsx)(m.default,{href:"/hotels/spb",children:(0,o.jsx)(_.z,{green:!0,l:!0,children:"выбрать номер"})}),(0,o.jsx)(m.default,{href:"/places-to-go",children:(0,o.jsxs)(_.z,{green:!0,l:!0,children:[(0,o.jsx)("span",{className:i().long,children:"определиться с программой развлечений"}),(0,o.jsx)("span",{className:i().short,children:"заказать услуги"})]})}),(0,o.jsx)(m.default,{href:"/additional-services",children:(0,o.jsxs)(_.z,{green:!0,l:!0,children:[(0,o.jsx)("span",{className:i().long,children:"заказать дополнительные услуги"}),(0,o.jsx)("span",{className:i().short,children:"найти развлечения"})]})})]}),(0,o.jsxs)("div",{className:i().phone,children:[(0,o.jsx)("span",{children:"Остальное вам помогут найти по телефону"}),(0,o.jsx)(d.V,{className:i().number,rotate:!0,dark:!0,small:!0,children:(0,o.jsx)("a",{href:`tel:${t}`,children:e})})]}),(0,o.jsx)("div",{className:i().blog,children:(0,o.jsxs)("span",{children:["Если вы искали что-то другое, возможно, оно найдёт вас, пока вы читаете наш ",(0,o.jsx)(m.default,{href:"/blog/",children:"блог"}),"."]})})]})}var x=r(80187);let v={title:"Not Found",description:"Страница не найдена. Пока ищите желаемое,передохните в апарт-отелях 3 и 4 звезды в историческом центре Москвы и Санкт-Петербурга."};function b(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(x.y,{title:"",navTitle:"404"}),(0,o.jsx)(y,{})]})}},74898:function(e,t,r){"use strict";r.d(t,{z:function(){return i}});var n=r(57437);r(2265);var s=r(16480),l=r.n(s),o=r(55805),a=r.n(o);let i=e=>{let{className:t,xl:r=!1,l:s=!1,sm:o=!1,green:i=!1,purple:c=!1,blue:u=!1,white:f=!1,purpleGradient:p=!1,onClick:_,type:d="button",...h}=e;return(0,n.jsx)("button",{...h,className:l()(a().root,{[a().green]:i,[a().purple]:c,[a().white]:f,[a().blue]:u,[a().purpleGradient]:p,[a().xl]:r,[a().l]:s,[a().sm]:o},t),onClick:_,type:d})}},51189:function(e,t,r){"use strict";r.d(t,{W:function(){return i}});var n=r(57437);r(2265);var s=r(16480),l=r.n(s),o=r(89004),a=r.n(o);let i=e=>{let{as:t="div",className:r,children:s,...o}=e;return(0,n.jsx)(t,{className:l()(a().root,r),...o,children:s})}},80187:function(e,t,r){"use strict";r.d(t,{y:function(){return m}});var n=r(57437);r(2265);var s=r(16480),l=r.n(s),o=r(36419),a=r.n(o),i=r(51189),c=r(39957),u=r.n(c),f=r(8792);let p=e=>{let{className:t,currentTitle:r,links:s}=e;return(0,n.jsxs)("nav",{className:l()(u().root,t),children:[s.map((e,t)=>(0,n.jsx)(f.default,{href:e.href,className:u().link,children:t<1?e.text:(0,n.jsx)("span",{className:u().title,children:"Блог"})},t)),(0,n.jsx)("span",{className:u().title,children:r})]})};var _=r(62623),d=r.n(_);let h=e=>{let{className:t,title:r,as:s="h1"}=e;return(0,n.jsx)(s,{className:l()(d().root,t,{[d().span]:"span"===s}),children:r})},m=e=>{let{className:t,classNameNav:r,classNameTitle:s,navTitle:o,title:c,text:u,isBlog:f,links:_=[{href:"/",text:"Главная"}]}=e;return(0,n.jsxs)(i.W,{as:"section",className:l()(a().root,{[a().blog]:f},t),children:[(0,n.jsx)(p,{currentTitle:o||c,className:r,links:_}),c&&(0,n.jsx)(h,{title:c,className:s}),u&&(0,n.jsx)("p",{className:a().text,children:u})]})}},63894:function(e,t,r){"use strict";r.r(t),r.d(t,{Tag:function(){return c}});var n=r(57437);r(2265);var s=r(16480),l=r.n(s),o=r(97855),a=r.n(o),i=r(8792);function c(e){let{className:t,green:r,dark:s,rotate:o,blue:c,small:u,children:f,link:p,href:_,onClick:d}=e;return p&&_?(0,n.jsx)(i.default,{href:_,className:l()(a().root,{[a().green]:r,[a().dark]:s,[a().rotate]:o,[a().blue]:c,[a().small]:u},t),onClick:d,children:f}):(0,n.jsx)("span",{className:l()(a().root,{[a().green]:r,[a().dark]:s,[a().rotate]:o,[a().blue]:c,[a().small]:u},t),children:f})}},14424:function(e,t,r){"use strict";r.d(t,{V:function(){return n.Tag}});var n=r(63894)},15361:function(e,t,r){"use strict";r.d(t,{DH:function(){return s},dc:function(){return a},u_:function(){return h},mz:function(){return y}});let n=(e,t)=>{if("undefined"==typeof document)return null;let r=document.cookie.split("; ").find(t=>t.startsWith(e))?.split("=")[1];return r?JSON.parse(decodeURIComponent(r))[t]:null},s="+7 (800) 505–49–90",l="+7 (800) 101-54-26",o="+ 7 (800) 201‒89‒70",a="+ 7 (800) 101-96-57",i="utm_source",c="maps",u="maps",f="yandex-somov",p="yandex_i",_="2gis",d=e=>{switch(e){case c:case u:return l;case _:return o;case f:return a;case p:return l;default:return s}},h=()=>{let e=n("utm",i);return e?d(e):s},m=e=>{switch(e){case c:case u:return"+7 (800) 101-54-26";case _:return o;case f:return a;case p:return l;default:return s}},y=()=>{let e=n("utm",i);return e?m(e):s}},96369:function(e){e.exports={root:"style_root__IYGae",icon:"style_icon__hOumb",header:"style_header__iTk1U",buttons:"style_buttons__FSD_P",long:"style_long__mSztF",short:"style_short__VUSzn",phone:"style_phone__OHPoz",number:"style_number__sK_85",blog:"style_blog__gh1Mz"}},55805:function(e){e.exports={root:"style_root___A1MS",xl:"style_xl__yli9H",l:"style_l__hjHzz",sm:"style_sm__ASxbt",green:"style_green__WFoQ_",purple:"style_purple__4AXxg",purpleGradient:"style_purpleGradient__b0xM_",blue:"style_blue__WkQ0f",white:"style_white__w9eTR"}},89004:function(e){e.exports={root:"style_root__FVTmd"}},36419:function(e){e.exports={root:"style_root__zqpVc",text:"style_text__htyNb",blog:"style_blog__nTe9e"}},39957:function(e){e.exports={root:"style_root__OFCvZ",link:"style_link__43urp",title:"style_title__3P7aj"}},62623:function(e){e.exports={root:"style_root__Wo8ft",span:"style_span__ScWxA"}},97855:function(e){e.exports={root:"style_root__2nOAm",rotate:"style_rotate__JXSw2",blue:"style_blue__0hXb8",dark:"style_dark__TrNxw",small:"style_small__P7ckb",green:"style_green__A5zkC"}},16480:function(e,t){var r;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function s(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=l(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return s.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)n.call(e,r)&&e[r]&&(t=l(t,r));return t}(r)))}return e}function l(e,t){return t?e?e+" "+t:e+t:e}e.exports?(s.default=s,e.exports=s):void 0!==(r=(function(){return s}).apply(t,[]))&&(e.exports=r)}()}},function(e){e.O(0,[5250,2971,8069,1744],function(){return e(e.s=17246)}),_N_E=e.O()}]);