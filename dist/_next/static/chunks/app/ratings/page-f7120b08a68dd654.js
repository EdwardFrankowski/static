(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8239],{34456:function(e,t,r){Promise.resolve().then(r.t.bind(r,25250,23)),Promise.resolve().then(r.bind(r,19721)),Promise.resolve().then(r.bind(r,32658)),Promise.resolve().then(r.t.bind(r,36419,23)),Promise.resolve().then(r.t.bind(r,62623,23)),Promise.resolve().then(r.t.bind(r,39957,23)),Promise.resolve().then(r.t.bind(r,85870,23)),Promise.resolve().then(r.t.bind(r,22674,23)),Promise.resolve().then(r.t.bind(r,85252,23)),Promise.resolve().then(r.t.bind(r,98515,23)),Promise.resolve().then(r.t.bind(r,46851,23)),Promise.resolve().then(r.t.bind(r,38200,23)),Promise.resolve().then(r.t.bind(r,58295,23)),Promise.resolve().then(r.t.bind(r,97325,23)),Promise.resolve().then(r.bind(r,1664)),Promise.resolve().then(r.bind(r,24510)),Promise.resolve().then(r.bind(r,1714)),Promise.resolve().then(r.bind(r,21674)),Promise.resolve().then(r.t.bind(r,65296,23)),Promise.resolve().then(r.bind(r,40117)),Promise.resolve().then(r.t.bind(r,38295,23))},20703:function(e,t,r){"use strict";r.d(t,{default:function(){return n.a}});var o=r(67447),n=r.n(o)},67447:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getImageProps:function(){return a},default:function(){return A}});let o=r(86921),n=r(38630),i=r(81749),s=o._(r(10536)),a=e=>{let{props:t}=(0,n.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},A=i.Image},19721:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return n}});let o=r(99775);function n(e){let{reason:t,children:r}=e;if("undefined"==typeof window)throw new o.BailoutToCSRError(t);return r}},72671:function(e,t){"use strict";/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=Symbol.for("react.element"),o=(Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.memo"),Symbol.for("react.lazy"),{isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}}),n=Object.assign,i={};function s(e,t,r){this.props=e,this.context=t,this.refs=i,this.updater=r||o}function a(){}function A(e,t,r){this.props=e,this.context=t,this.refs=i,this.updater=r||o}s.prototype.isReactComponent={},s.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},s.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},a.prototype=s.prototype;var l=A.prototype=new a;l.constructor=A,n(l,s.prototype),l.isPureReactComponent=!0;var u=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};t.createElement=function(e,t,o){var n,i={},s=null,a=null;if(null!=t)for(n in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(s=""+t.key),t)u.call(t,n)&&!c.hasOwnProperty(n)&&(i[n]=t[n]);var A=arguments.length-2;if(1===A)i.children=o;else if(1<A){for(var l=Array(A),f=0;f<A;f++)l[f]=arguments[f+2];i.children=l}if(e&&e.defaultProps)for(n in A=e.defaultProps)void 0===i[n]&&(i[n]=A[n]);return{$$typeof:r,type:e,key:s,ref:a,props:i,_owner:null}}},52846:function(e,t,r){"use strict";e.exports=r(72671)},24843:function(e,t,r){"use strict";t.GS=void 0;var o=r(43916);Object.defineProperty(t,"GS",{enumerable:!0,get:function(){return o.useMedia}})},43916:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useMediaLayout=t.useMedia=t.mockMediaQueryList=void 0;var o=r(2265),n=r(90330);t.mockMediaQueryList={media:"",matches:!1,onchange:n.noop,addListener:n.noop,removeListener:n.noop,addEventListener:n.noop,removeEventListener:n.noop,dispatchEvent:function(e){return!0}};var i=function(e){return function(r,i){void 0===i&&(i=!1);var s=o.useState(i),a=s[0],A=s[1],l=n.queryObjectToString(r);return e(function(){var e=!0,r="undefined"==typeof window?t.mockMediaQueryList:window.matchMedia(l),o=function(){e&&A(!!r.matches)};return r.addListener(o),A(r.matches),function(){e=!1,r.removeListener(o)}},[l]),a}};t.useMedia=i(o.useEffect),t.useMediaLayout=i(o.useLayoutEffect),t.default=t.useMedia},46046:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}).toLowerCase()}},90330:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.noop=t.queryObjectToString=t.camelToHyphen=void 0;var o=r(46046);Object.defineProperty(t,"camelToHyphen",{enumerable:!0,get:function(){return o.default}});var n=r(31559);Object.defineProperty(t,"queryObjectToString",{enumerable:!0,get:function(){return n.default}});var i=r(69411);Object.defineProperty(t,"noop",{enumerable:!0,get:function(){return i.default}})},69411:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){}},31559:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(46046);t.default=function(e){return"string"==typeof e?e:Object.entries(e).map(function(e){var t=e[0],r=e[1],n=o.default(t),i=r;return"boolean"==typeof i?i?n:"not "+n:("number"==typeof i&&/[height|width]$/.test(n)&&(i+="px"),"("+n+": "+i+")")}).join(" and ")}},32658:function(e,t,r){"use strict";r.r(t),r.d(t,{ImagesBlock:function(){return _}});var o=r(57437);r(2265);var n=r(21974),i=r.n(n),s=r(20703),a={src:"/_next/static/media/img.f984b6f7.png",height:472,width:866,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAATlBMVEWin6qYkI3BfTHxs2nu1LCqoaZyiq7XxLro39Hh0sFUPElueJhYQ1fU8e9uYnUA//9BUYiyoJx2bYHYlUuPjJeziV/z16ny6d/YupaTfWxUwMNeAAAAEXRSTlPZ/v393+D++/fMYef+uKsF/kqF3JoAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAsSURBVHicY+DnFefgYGfnZOBikGAWExRkYeARkBQWYRNgZeDjFmViFBBiAAAb/QGGTKeqOgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:4},A={src:"/_next/static/media/imgLaptop.501f05d7.png",height:517,width:835,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAYFBMVEVMaXHToX3Vs4uGbnXn0bvi4ufa2t+Vmq3DsbpYaZT///9kVWjJ6fjhup7np1+qrL9SPkL59vSPjrrlx7XbwLTY2N2uqrXCtMLs1ruSg35WVHnIfSbLo3X658hZXIV+gp0+4HKFAAAAGHRSTlMAzftqsn5j+wz7J8jJvvx5QV7Jyvw1t9I7db/IAAAACXBIWXMAAAsTAAALEwEAmpwYAAAANUlEQVR4nGNg4BDkYWVjE2UQ4GaXkBWRYGFgluLkY2KXZ2Hg4JeRluSUE2Ng4OJlFBYSZwUALo4CMABva5cAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5},l={src:"/_next/static/media/imgTablet.73670aa5.png",height:564,width:821,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAV1BMVEX77fTV09Ofi3zUkEX949zl1O7m4uLp2vKNj59MaXHVo3H13bqmoK2DgI9VaJa619NzcZTDjlr/+9j34fTm0bSomqhoVFloaoqReYEAAAD60Z3Bq6ZVTGp4Y8y5AAAAGnRSTlNQpP37OmKjEvwA+v7y/P2u/v5CYPs4WNk/AwQ1lmMAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA0SURBVHicBcELAkAgEAXAt+wvoVBI3f+cZtAqqVIy3MO/2AvjfabZ9+1EwHJ4XhnBIJfAfi3iAc4t/vMLAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:5},u={src:"/_next/static/media/imgMobile.168b9943.png",height:430,width:358,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAe1BMVEXk5P/oq2GblZ7/6f/13fLj6/vx2sL29vvr39HZ5vP////Y0eyfmKb////KweFRY5Bwco12aHq4s726qbqvmahoaYy9p5tuYHA1SXbTv6zIk1vp5ub22bXs1K3UvbZnfabgz77E6PdFVo9aSWCGgZVfQz/7yY28safn8eq0iAglAAAAInRSTlME/f46JmvLEv44T9S2G9HS98q8Vpr9x/v9yP2pvv78/J31BKAYtwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEJJREFUeJwFwQUCwCAMBLCDAW3n7sr0/y9cAjmsESFMH/PKO9yjFv3OcGrUmx/Q3l3fXCXq0+dpZFEVWRwGBqCEAPx+QgOZkuIlywAAAABJRU5ErkJggg==",blurWidth:7,blurHeight:8},c=r(24843),f=r(2769);function _(){let e=(0,c.GS)(f.PJ),t=(0,c.GS)(f.Mq),r=(0,c.GS)(f.ai);return(0,o.jsx)("div",{className:i().root,children:(0,o.jsx)(s.default,{src:(()=>{switch(!0){case r:return u;case t:return l;case e:return A;default:return a}})(),alt:"image",quality:100})})}},40117:function(e,t,r){"use strict";r.r(t),r.d(t,{RatingGridBlock:function(){return p}});var o,n=r(57437),i=r(2265),s=r(16480),a=r.n(s),A=r(14399),l=r.n(A),u=r(20703),c=r(52846);function f(){return(f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}var _=e=>c.createElement("svg",f({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 21 21"},e),o||(o=c.createElement("path",{stroke:"#fff",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m10.52 19.767 9.358-9.023m0 0-9.022-9.36m9.022 9.36-18.381-.336"})));function d(){return i.useEffect(()=>{let e=document.createElement("script");return e.type="text/javascript",e.async=!0,e.src="https://101hotels.com/widget/generator/128/652515/t-1/without-hover",document.head.appendChild(e),()=>{document.head.removeChild(e)}},[]),(0,n.jsx)("a",{target:"_blank",rel:"noreferrer nofollow",id:"hotels101_partner_widget_128",href:"https://101hotels.com/main/cities/sankt-peterburg/apart-otel_port_comfort_on_ligovskiy.html",children:(0,n.jsx)(u.default,{src:"https://101hotels.com/images/banner/101hotels_recommend.png",alt:"101hotels.com ����������� Port Comfort on Ligovskiy",width:100,height:100})})}function p(e){let{icon:t,title:r,reviewsNumber:o,rating:i,mainPage:s=!1,start:A,is101Hotel:c}=e;return(0,n.jsxs)("div",{className:a()(l().root,{[l().main]:s}),children:[c&&(0,n.jsx)(d,{}),(0,n.jsxs)("div",{className:a()(l().content,{[l().main]:s},{[l().init]:s},{[l().animate]:A&&s}),children:[(0,n.jsx)(u.default,{src:t,className:a()(l().icon,{[l().main]:s}),alt:"icon"}),(0,n.jsx)("h3",{children:r}),(0,n.jsxs)("span",{children:["На основании ",(0,n.jsx)("b",{children:o})," ",(0,n.jsx)("br",{})," отзывов реальных клиентов."]}),(0,n.jsx)("div",{className:a()(l().rating,{[l().main]:s}),children:(0,n.jsxs)("span",{children:[i,(0,n.jsxs)("b",{children:["/",i>5?10:5]})]})})]}),(0,n.jsx)("div",{className:a()(l().bg,{[l().main]:s}),children:s&&(0,n.jsx)("div",{className:a()(l().arr_wrapper),children:(0,n.jsx)("div",{className:l().circle,children:(0,n.jsx)(_,{className:l().arr})})})})]})}},2769:function(e,t,r){"use strict";r.d(t,{Mq:function(){return i},PJ:function(){return n},ai:function(){return s},gv:function(){return o}});let o="(min-width: 1600px)",n="(max-width: 1600px)",i="(max-width: 1124px)",s="(max-width: 680px)"},21974:function(e){e.exports={root:"style_root__GTCcN"}},97325:function(e){e.exports={root:"style_root__VYu9y"}},58295:function(e){e.exports={root:"style_root__Z2vXS"}},98515:function(e){e.exports={root:"style_root__6Bj2D"}},38200:function(e){e.exports={root:"style_root__38C9L",string:"style_string__98Ssm",blue:"style_blue__XCKCO",angle:"style_angle__jW2q0"}},85252:function(e){e.exports={root:"style_root__yW7Hm",wrapper:"style_wrapper__H5m7B"}},85870:function(e){e.exports={root:"style_root___IX7t",wrapper:"style_wrapper__6W1JK",title:"style_title__GMSV4"}},46851:function(e){e.exports={angle:"style_angle__llpPU",left_bottom:"style_left_bottom__oHwdE",from_right_bottom:"style_from_right_bottom___8doH",from_left_top:"style_from_left_top__GqZQ7",left_top:"style_left_top__2F4Ih",from_right_top:"style_from_right_top__moHFr",from_left_bottom:"style_from_left_bottom__K4_yO",right_bottom:"style_right_bottom__PVpjs",right_top:"style_right_top__4bpQM"}},22674:function(e){e.exports={root:"style_root__l2h_E",green:"style_green__4REJO",purple:"style_purple__6MK8S",blue:"style_blue__Mg1eK",gray:"style_gray__tVyyC"}},36419:function(e){e.exports={root:"style_root__zqpVc",text:"style_text__htyNb"}},39957:function(e){e.exports={root:"style_root__OFCvZ",link:"style_link__43urp",title:"style_title__3P7aj"}},62623:function(e){e.exports={root:"style_root__Wo8ft",span:"style_span__ScWxA"}},14399:function(e){e.exports={root:"style_root__9VfqG",content:"style_content__A0S1b",init:"style_init__o1Ugd",animate:"style_animate__46K72",bg:"style_bg__qLOTU",main:"style_main__WwlfT",icon:"style_icon__G4Ev2",rating:"style_rating__AzizZ",arr_wrapper:"style_arr_wrapper__QpavN",circle:"style_circle__m8tLZ",arr:"style_arr__Hqrmm"}},65296:function(e){e.exports={root:"style_root__y_szm",main:"style_main__cxJvM"}},38295:function(e){e.exports={main:"style_main__BWw_t",ratings:"style_ratings__vwVWM",title:"style_title__bg7uM",init:"style_init___VSQB",animate:"style_animate__F42S4",text:"style_text__neWJJ"}},1664:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/icon1.41309933.webp",height:44,width:42,blurDataURL:"data:image/webp;base64,UklGRm4AAABXRUJQVlA4IGIAAABwAgCdASoIAAgAAkA4JagCdLoBLfwJ/zMMB30AAP4IIZrU2pSyZ8+P4xX97b+RAZLaQPQ6s8fFE42+0Kd/QtO7jjtG4k78EU5SRA+7C/Ygw18uDW0r5n/HAKmK/vNBXAAAAA==",blurWidth:8,blurHeight:8}},24510:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/icon2.593c0ada.webp",height:44,width:42,blurDataURL:"data:image/webp;base64,UklGRrwAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDIAAAABT6CokSQ1uQwW9rWi4C4iYrB/FioGFMW2QYUQwlYIZWy1EOB3E6sQ0f9M0IPibQhzF1ZQOCBkAAAAMAIAnQEqCAAIAAJAOCWwAnS6AfgAAo+2nPAA/uioxD+v9eAfZzkSJe3azVmwrgVCBENdEOZnc6/Z7Mtgo3/sbzf9r7/2o+qP3PoChvXlUbf/b//843nt3g5DXOwK6tF/159AAA==",blurWidth:8,blurHeight:8}},1714:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/icon3.2349794e.webp",height:44,width:42,blurDataURL:"data:image/webp;base64,UklGRrYAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDsAAAABX6CmkRQ4y1b8NRVCkEVEhFw/rDI4FEWSGhUO0IEAvPDHBRJ4xwAmcoy+eIjof+oKGbADxbehB0zTBQBWUDggVAAAADACAJ0BKggACAACQDglsAJ0ugADGhhiiKwAAP6yKy2H0MVwazBhoIQmXA7Z/bMIAuZRGD2Nfc81QADaXQSUr/90AD9I1/84nfIKG+wgi/nMtdGAAA==",blurWidth:8,blurHeight:8}},21674:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/icon4.3a2f9030.webp",height:46,width:46,blurDataURL:"data:image/webp;base64,UklGRm4AAABXRUJQVlA4IGIAAADwAQCdASoIAAgAAkA4JbACdAEO9EBc34AA/urz1DOmfElkFJh31hM+njH8oaYSd2LXA9W3tE9zNqP+/D1X8//d7zn9F23v+hUyvP9JUtqr/gv1/0utxReWGM2/o3+KD4AAAA==",blurWidth:8,blurHeight:8}},16480:function(e,t){var r;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var o={}.hasOwnProperty;function n(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=i(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return n.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)o.call(e,r)&&e[r]&&(t=i(t,r));return t}(r)))}return e}function i(e,t){return t?e?e+" "+t:e+t:e}e.exports?(n.default=n,e.exports=n):void 0!==(r=(function(){return n}).apply(t,[]))&&(e.exports=r)}()}},function(e){e.O(0,[5250,1749,2971,8069,1744],function(){return e(e.s=34456)}),_N_E=e.O()}]);