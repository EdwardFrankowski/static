(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[696],{56429:function(t,e,r){Promise.resolve().then(r.t.bind(r,25250,23)),Promise.resolve().then(r.bind(r,19721)),Promise.resolve().then(r.bind(r,26741)),Promise.resolve().then(r.t.bind(r,14317,23)),Promise.resolve().then(r.bind(r,43294)),Promise.resolve().then(r.bind(r,87967)),Promise.resolve().then(r.t.bind(r,36419,23)),Promise.resolve().then(r.t.bind(r,39957,23)),Promise.resolve().then(r.t.bind(r,62623,23)),Promise.resolve().then(r.t.bind(r,22674,23))},20703:function(t,e,r){"use strict";r.d(e,{default:function(){return o.a}});var n=r(67447),o=r.n(n)},8792:function(t,e,r){"use strict";r.d(e,{default:function(){return o.a}});var n=r(25250),o=r.n(n)},67447:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t,e){for(var r in e)Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}(e,{getImageProps:function(){return a},default:function(){return l}});let n=r(86921),o=r(38630),i=r(81749),s=n._(r(10536)),a=t=>{let{props:e}=(0,o.getImgProps)(t,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[t,r]of Object.entries(e))void 0===r&&delete e[t];return{props:e}},l=i.Image},19721:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"BailoutToCSR",{enumerable:!0,get:function(){return o}});let n=r(99775);function o(t){let{reason:e,children:r}=t;if("undefined"==typeof window)throw new n.BailoutToCSRError(e);return r}},72671:function(t,e){"use strict";/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=Symbol.for("react.element"),n=(Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.memo"),Symbol.for("react.lazy"),{isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}}),o=Object.assign,i={};function s(t,e,r){this.props=t,this.context=e,this.refs=i,this.updater=r||n}function a(){}function l(t,e,r){this.props=t,this.context=e,this.refs=i,this.updater=r||n}s.prototype.isReactComponent={},s.prototype.setState=function(t,e){if("object"!=typeof t&&"function"!=typeof t&&null!=t)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")},s.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")},a.prototype=s.prototype;var c=l.prototype=new a;c.constructor=l,o(c,s.prototype),c.isPureReactComponent=!0;var u=Object.prototype.hasOwnProperty,A={key:!0,ref:!0,__self:!0,__source:!0};e.createElement=function(t,e,n){var o,i={},s=null,a=null;if(null!=e)for(o in void 0!==e.ref&&(a=e.ref),void 0!==e.key&&(s=""+e.key),e)u.call(e,o)&&!A.hasOwnProperty(o)&&(i[o]=e[o]);var l=arguments.length-2;if(1===l)i.children=n;else if(1<l){for(var c=Array(l),_=0;_<l;_++)c[_]=arguments[_+2];i.children=c}if(t&&t.defaultProps)for(o in l=t.defaultProps)void 0===i[o]&&(i[o]=l[o]);return{$$typeof:r,type:t,key:s,ref:a,props:i,_owner:null}}},52846:function(t,e,r){"use strict";t.exports=r(72671)},24843:function(t,e,r){"use strict";e.GS=void 0;var n=r(43916);Object.defineProperty(e,"GS",{enumerable:!0,get:function(){return n.useMedia}})},43916:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.useMediaLayout=e.useMedia=e.mockMediaQueryList=void 0;var n=r(2265),o=r(90330);e.mockMediaQueryList={media:"",matches:!1,onchange:o.noop,addListener:o.noop,removeListener:o.noop,addEventListener:o.noop,removeEventListener:o.noop,dispatchEvent:function(t){return!0}};var i=function(t){return function(r,i){void 0===i&&(i=!1);var s=n.useState(i),a=s[0],l=s[1],c=o.queryObjectToString(r);return t(function(){var t=!0,r="undefined"==typeof window?e.mockMediaQueryList:window.matchMedia(c),n=function(){t&&l(!!r.matches)};return r.addListener(n),l(r.matches),function(){t=!1,r.removeListener(n)}},[c]),a}};e.useMedia=i(n.useEffect),e.useMediaLayout=i(n.useLayoutEffect),e.default=e.useMedia},46046:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return t.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()}).toLowerCase()}},90330:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.noop=e.queryObjectToString=e.camelToHyphen=void 0;var n=r(46046);Object.defineProperty(e,"camelToHyphen",{enumerable:!0,get:function(){return n.default}});var o=r(31559);Object.defineProperty(e,"queryObjectToString",{enumerable:!0,get:function(){return o.default}});var i=r(69411);Object.defineProperty(e,"noop",{enumerable:!0,get:function(){return i.default}})},69411:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){}},31559:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(46046);e.default=function(t){return"string"==typeof t?t:Object.entries(t).map(function(t){var e=t[0],r=t[1],o=n.default(e),i=r;return"boolean"==typeof i?i?o:"not "+o:("number"==typeof i&&/[height|width]$/.test(o)&&(i+="px"),"("+o+": "+i+")")}).join(" and ")}},87967:function(t,e,r){"use strict";r.r(e),r.d(e,{JoinClub:function(){return tp}});var n,o,i,s,a,l,c,u,A,_,f=r(57437);r(2265);var p=r(16693),m=r.n(p),d=r(51189),g=r(69016),h=r.n(g),x=r(71202),y=r.n(x);function b(t){let{text:e}=t;return(0,f.jsx)("span",{className:y().root,children:e})}var v=r(56847),j=r(95686),w=r(69054),E=r.n(w),O=r(60144),N=r(46834),S=r.n(N),B=r(16480),M=r.n(B);function R(t){let{text:e,className:r,...n}=t;return(0,f.jsx)("span",{className:M()(S().root,r),children:e})}function P(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(O.W,{className:E().blur,children:"15%"}),(0,f.jsx)(R,{text:"Скидки",className:E().text})]})}var k=r(32794),U=r.n(k),C=r(36417),V=r.n(C);function F(t){let{text:e,className:r}=t;return(0,f.jsx)("span",{className:M()(V().root,r),children:e})}function L(){return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(F,{text:"Подарки",className:U().tag})})}var T=r(73320),H=r.n(T),z=r(20703);function J(t){let{img:e}=t;return(0,f.jsxs)(f.Fragment,{children:[e&&(0,f.jsx)(z.default,{className:H().image,src:e,alt:"img",sizes:"100vh"}),(0,f.jsx)("span",{className:H().text,children:"повышение категории номера"})]})}var G=r(76201),W=r.n(G),I=r(335);function Z(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(R,{text:"Расширенное",className:W().text}),(0,f.jsxs)("span",{className:W().wrapper,children:[(0,f.jsxs)("span",{className:W().string_1,children:["Время",(0,f.jsx)(I.R,{rightBottom:!0,fromLeftBottom:!0,className:W().angle_1})]}),(0,f.jsx)("br",{}),(0,f.jsxs)("span",{className:W().string_2,children:[(0,f.jsx)(I.R,{leftTop:!0,fromRightTop:!0,className:W().angle_2}),"заезда/выезда"]})]})]})}function q(t){let{blocks:e}=t;return(0,f.jsx)("div",{className:h().root,children:e.map((t,e)=>(0,f.jsxs)("div",{className:h().block,children:[(0,f.jsxs)("div",{className:h().img_wrapper,children:[0===e&&(0,f.jsx)(P,{}),1===e&&(0,f.jsx)(L,{}),2===e&&(0,f.jsx)(J,{img:t.img}),3===e&&(0,f.jsx)(Z,{}),(0,f.jsx)(v.R,{image:t.bg}),(0,f.jsx)(j.T,{svg:t.icon,className:h().icon})]}),(0,f.jsx)(b,{text:t.text})]},e))})}var K=r(75597),Q=r.n(K),Y=r(24843),X=r(2769);function D(t){let{bg:e,img:r,text:n,icon:o}=t,i=(0,Y.GS)(X.Mq);return(0,f.jsxs)("div",{className:Q().root,children:[(0,f.jsxs)("div",{className:Q().image_wrapper,children:[(0,f.jsx)(z.default,{className:Q().background,src:e,alt:"bg",sizes:"100vw"}),r&&(0,f.jsx)(z.default,{className:Q().image,src:r,alt:"img"}),(0,f.jsx)(F,{text:"Бесплатно",className:Q().big_tag}),(0,f.jsx)(R,{text:"Тапочки",className:Q().tag_1}),(0,f.jsx)(R,{text:"Халаты",className:Q().tag_2}),(0,f.jsx)(R,{text:"Место для ребенка",className:Q().tag_3}),(0,f.jsx)(j.T,{svg:o,className:Q().icon})]}),!i&&(0,f.jsx)(b,{text:n})]})}var $=r(89778),tt=r.n($),te=r(2813);let tr=(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("b",{children:"Присоединяйтесь"})," к клубу Port Friends, чтобы получить:"]});function tn(){return(0,f.jsxs)("div",{className:tt().root,children:[(0,f.jsx)("span",{className:tt().title,children:tr}),(0,f.jsx)(te.l,{text:"Бонусы действуют во всех отелях сети",className:tt().text})]})}var to=r(94563),ti=r(52846);function ts(){return(ts=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function ta(){return(ta=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function tl(){return(tl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function tc(){return(tc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function tu(){return(tu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}var tA=r(64546);let t_=[{bg:{src:"/_next/static/media/img3.501af504.png",height:247,width:224,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAASFBMVEUyTZpEWJw4RIxiTplnNoluNYhYNIRgOX48P4grQo5raK4pQpBnNo40QY5cOYhEPYxyM5JUOI1NO4VBTppKVJ5PRpZaSpdeX6iB3Nj1AAAAC3RSTlP+xO7m6bnjzP3M55CdcAMAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA2SURBVHicY+Dk5RAS4mNn4Obm5Rfi4wHTgjCaR4CBgVdYFEwLi0D4IuJifDwCDIxMXMxsLKwAXGQCwRoYT1wAAAAASUVORK5CYII=",blurWidth:7,blurHeight:8},text:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("b",{children:"Скидки до 15%"})," на бронирование номеров"]}),icon:t=>ti.createElement("svg",tl({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 41 41"},t),a||(a=ti.createElement("circle",{cx:20.224,cy:20.791,r:20.06,fill:"#fff"})),l||(l=ti.createElement("path",{fill:"#878E9F",d:"M13.122 18.16q0-.9.26-1.54t.72-1.06a2.7 2.7 0 0 1 1.1-.6q.66-.2 1.42-.2t1.4.18 1.1.58q.48.4.74 1.06.26.64.28 1.58-.02.94-.28 1.6-.26.64-.74 1.04a2.8 2.8 0 0 1-1.1.58q-.64.18-1.4.18t-1.42-.18a2.8 2.8 0 0 1-1.1-.58 2.7 2.7 0 0 1-.72-1.04q-.26-.66-.26-1.6m2.32 0q0 1.72 1.18 1.72.62 0 .88-.36.279-.38.3-1.36-.021-.96-.3-1.34-.26-.38-.88-.38-.621 0-.9.38-.28.38-.28 1.34m5.8 7.42q0-.9.26-1.54t.72-1.06a2.7 2.7 0 0 1 1.1-.6q.66-.2 1.42-.2t1.4.18 1.1.58q.48.4.74 1.06.26.64.28 1.58-.02.94-.28 1.6-.26.64-.74 1.04a2.8 2.8 0 0 1-1.1.58q-.64.18-1.4.18t-1.42-.18a2.8 2.8 0 0 1-1.1-.58 2.7 2.7 0 0 1-.72-1.04q-.26-.66-.26-1.6m2.32 0q0 1.72 1.18 1.72.62 0 .88-.36.279-.38.3-1.36-.021-.96-.3-1.34-.26-.38-.88-.38-.621 0-.9.38-.28.38-.28 1.34m2.08-10.86 1.46 1.32-11.52 13.24-1.46-1.38z"})))},{bg:{src:"/_next/static/media/img4.dc1f5991.png",height:247,width:224,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAXVBMVEV2T4kWNn6Ui7LMorBzc6Q9Q1+SPYlTUntsX5dMTZJIW5E3TpBHTYkuRo09TYVSZJg3RGxKV5EkQoxfSHyaRYgrQHRrf6yIi7dZXHpVXH6jS5FRSow/VJZlcKGkdp2v3EdTAAAAE3RSTlP+v/7x/MzM/v7yvfj5///////+aO5LiQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEBJREFUeJwVxUkSQDAUBcCHIKH+SBLz/Y+p0pvGtGObjxFX+1TE25hVQU4slkH0UCkZbn0VYXj8Qn0FXRhSWpcfacwDPOu3pKIAAAAASUVORK5CYII=",blurWidth:7,blurHeight:8},text:(0,f.jsxs)(f.Fragment,{children:["Подарки ",(0,f.jsx)("b",{children:"ко дню рождения."})," Например, бутылка вина и т.п"]}),icon:t=>ti.createElement("svg",tc({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 41 41"},t),c||(c=ti.createElement("circle",{cx:20.224,cy:20.791,r:20.06,fill:"#fff"})),u||(u=ti.createElement("path",{stroke:"#878E9F",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 27v-9h16v9a1 1 0 0 1-1 1H13a1 1 0 0 1-1-1m3-5h10m-15-5v-3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1"})))},{bg:{src:"/_next/static/media/img1.16e68269.png",height:247,width:224,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAP1BMVEUgRZkgTp0caKUbVJxDVbYpSJ8gXqQfRJgdSpkzS6dBTLFJW7w3ZbUhcK0pV6YwcrdQTLolfbUgea8eQpcaT5jG1TpGAAAAFXRSTlPj0bHHyd697NjX1L2ypcuepGyXpY7BF7SxAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAOklEQVR4nB3JSQ4AIQgAwRZBxHW2/791Em+VFJf2PvZNa6pjPkTEKjIxs7SKANSUBdypueB+wHvi+wE5CwGG9fpsogAAAABJRU5ErkJggg==",blurWidth:7,blurHeight:8},text:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("b",{children:"Бесплатное повышение категории"})," номера при наличии свободных юнитов"]}),icon:t=>ti.createElement("svg",ts({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 41 41"},t),n||(n=ti.createElement("circle",{cx:20.224,cy:20.791,r:20.06,fill:"#fff"})),o||(o=ti.createElement("path",{stroke:"#878E9F",strokeLinejoin:"round",strokeWidth:2,d:"M13 29V19a1 1 0 0 1 1-1h3v12h-3a1 1 0 0 1-1-1Zm17.484-9.462-3.356 8.818a1 1 0 0 1-.935.644H17V18.182l4.64-5.806a1 1 0 0 1 .782-.376h1.337a1 1 0 0 1 .928 1.371l-1.922 4.81h6.784a1 1 0 0 1 .935 1.357Z"}))),img:{src:"/_next/static/media/img5.0924384c.png",height:126,width:194,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAV1BMVEWuoqLT3tOQx7rS0cKYkIbNxr2RgoLTzcZvloOqo5lruq6L19iAYWdbiXxbfHJnKim9taexp6ecurLr7uNcl4ZwZ17f3dfO3Map0smgysKv3+qidHmUtaxlcXZFAAAAEHRSTlMHXf29v/sx/v61/v25u/v+2a9/7wAAAAlwSFlzAAALEwAACxMBAJqcGAAAADVJREFUeJxj4JUREhJjF+BkEJGUEBFmFxBg4BMV5RBmFWRh4JcW5BBnZmNg4JHi5mJiZGAAADiOAiUIEUrsAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:5}},{bg:{src:"/_next/static/media/img2.03141dde.png",height:247,width:224,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAb1BMVEUW1eazqucV1ua8vORNzuVftOyblO4gvd4a1uV1vN6ctd9Vvd4w0uVizOKpm+04s92Fou6LmuUbzOhYiNEa2OyrteQ+ptkq0OhRptmIrt1Ew+pkqugpwuNXldy9uuyZpOIotN1EkM9dmtI80Ohszun4KunUAAAADnRSTlP6/b7M+P3M/u/+/f7su3JPH7gAAAAJcEhZcwAACxMAAAsTAQCanBgAAABDSURBVHicBcEFAoAgEATAVVHBuCOkTIz/v9EZdERUnQ20NubyHu12OJcHrBzS/WTEvXBICrB94VFhsTa+4kMNKScx/389A9UmwyZ2AAAAAElFTkSuQmCC",blurWidth:7,blurHeight:8},text:(0,f.jsxs)(f.Fragment,{children:["Расширенное ",(0,f.jsx)("b",{children:"время заезда и выезда"})," при наличии возможности"]}),icon:t=>ti.createElement("svg",ta({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 41 41"},t),i||(i=ti.createElement("circle",{cx:20.224,cy:20.791,r:20.06,fill:"#fff"})),s||(s=ti.createElement("path",{fill:"#8E99AF",d:"M25.599 29.618a1 1 0 1 0 1.618-1.175L25.6 29.618ZM13.812 28.41a1 1 0 1 0 1.567 1.244zm2.752-1.858.547-.838zm9.36-15.442a1 1 0 1 0-1 1.732zm1.732 4.191a1 1 0 0 0 1.618-1.176zM16.08 12.84a1 1 0 1 0-1-1.731zm-4.35 1.284a1 1 0 1 0 1.618 1.176zm9.772 3.094a1 1 0 1 0-2 0zm-1 4.594h-1a1 1 0 0 0 1 1zm2.625 1a1 1 0 1 0 0-2zm-8.844-2.313a6.22 6.22 0 0 1 6.219-6.218v-2a8.22 8.22 0 0 0-8.219 8.219h2Zm6.219-6.218A6.22 6.22 0 0 1 26.72 20.5h2a8.22 8.22 0 0 0-8.22-8.22v2ZM26.72 20.5c0 2.14-1.08 4.028-2.73 5.148l1.124 1.654A8.21 8.21 0 0 0 28.72 20.5zm-2.73 5.148a6.2 6.2 0 0 1-3.49 1.07v2a8.2 8.2 0 0 0 4.614-1.416zm3.226 2.795-1.855-2.555-1.618 1.175 1.855 2.555zm-6.715-1.725a6.2 6.2 0 0 1-3.391-1.005l-1.093 1.675a8.2 8.2 0 0 0 4.484 1.33zm-3.391-1.005a6.21 6.21 0 0 1-2.828-5.213h-2a8.21 8.21 0 0 0 3.735 6.889zm-1.732 3.94 1.969-2.48-1.567-1.244-1.969 2.48zm9.545-16.812a8.8 8.8 0 0 1 2.732 2.46l1.618-1.177a10.8 10.8 0 0 0-3.35-3.015zm-9.844-1.732a10.8 10.8 0 0 0-3.35 3.015l1.618 1.176a8.8 8.8 0 0 1 2.732-2.46zm4.422 6.11v4.593h2v-4.594h-2Zm1 5.593h2.625v-2h-2.625z"})))}],tf={img:{src:"/_next/static/media/imgBigBlock.5914f8ae.png",height:262,width:280,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAaVBMVEWZmWa3rpPi3tem0MKJy7iKvqtlrpaO0b1zu6PPxrLQ2MjX0MCRzrtqtZyKybR2vqji3dF5oonOyr22r5KZk3a8tZdkdlrBvajHwajD08KS1L9ku6LOzLxOfmN+xqt9y7ORhGGhlHJ+g2Qku+yqAAAAGHRSTlMB+5bJuPv8/Jn+Ie7Wgaj6/vs67Nz8/pGaXDizAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQElEQVR4nAXBBwKAIAwEsEOBtu5tWa7/P9IENna2rgAQEYW2AYY4OjELwLcPk64nODnJWXdwmp/XiKK/fCnHt/1TPgNS0hCvlQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:7},bg:{src:"/_next/static/media/imgBigBlockBg.fd62c4b3.png",height:247,width:531,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAOVBMVEUuTYMhcJxcO6EMo7t7MLS1GdpaO54gXIY+RI5ZO50UlLOtHdWNJ8GVJcZrN6iELblBUJoZfqITf5zP09xNAAAAE3RSTlOTj2rFm1mFlpygo3qAlKJgfKqqptTENwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAClJREFUeJxj4GIUYGLiZ2VlYBZkZ2Bj4+FmYBZiZ+DgZOFl4GIEMfhYABCNAOowdBJeAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4},text:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("b",{children:"Бесплатное"})," место ",(0,f.jsx)("br",{}),"для ребенка, халаты и тапочки."]}),icon:t=>ti.createElement("svg",tu({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 41 41"},t),A||(A=ti.createElement("circle",{cx:20.06,cy:20.06,r:20.06,fill:"#fff"})),_||(_=ti.createElement("path",{stroke:"#00A3AD",strokeLinejoin:"round",strokeWidth:2,d:"M20 27.333c-.583 0-7-4.083-7-9.041a3.792 3.792 0 0 1 7-2.022 3.792 3.792 0 0 1 7 2.022c0 4.958-6.417 9.041-7 9.041Z"})))};function tp(){return(0,f.jsx)(d.W,{as:"section",className:m().root,children:(0,f.jsx)(tA.v,{className:m().content,green:!0,children:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(tn,{}),(0,f.jsx)(q,{blocks:t_}),(0,f.jsx)(D,{img:tf.img,bg:tf.bg,text:tf.text,icon:tf.icon}),(0,f.jsx)(to.e,{})]})})})}},26741:function(t,e,r){"use strict";r.r(e),r.d(e,{ImageBlock:function(){return _}});var n=r(57437);r(2265);var o=r(33589),i=r.n(o),s=r(20703),a={src:"/_next/static/media/img.2d5ed532.png",height:403,width:688,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAS1BMVEV/f3+Eh4uiiHPOx7+gnpuYmKeIiIzHyuFWWmBvd3/X2tzS0ty2sbGGfHFuf5WJiYhSS0Gwq7C+wchsYF3GnHmxhW5ra2vIn4FpgIlZ+tNyAAAAGXRSTlMBw9HBpDPVGWzNk7PBed65SplPmccXWKmfjUO/DQAAAAlwSFlzAAALEwAACxMBAJqcGAAAADFJREFUeJwFwYkBwBAQAMH1HoLEn/4rNQOI2/0N/MMon2xAa6PyI3Cmj7E6WNJs+eACHyUBYTwCgi8AAAAASUVORK5CYII=",blurWidth:8,blurHeight:5},l=r(2813),c=r(24843),u=r(2769),A=r(94563);function _(){let t=(0,c.GS)(u.ai);return(0,n.jsxs)("div",{className:i().root,children:[(0,n.jsxs)("div",{className:i().image_wrapper,children:[(0,n.jsx)(s.default,{className:i().image,src:a,alt:"img",sizes:"100vw"}),(0,n.jsx)(l.l,{className:i().text,text:"не действует при бронировании через сторонние компании"})]}),t&&(0,n.jsx)(A.e,{className:i().button})]})}},43294:function(t,e,r){"use strict";r.r(e),r.d(e,{TextBlock:function(){return u}});var n=r(57437);r(2265);var o=r(7030),i=r.n(o),s=r(94563),a=r(24843),l=r(2769);let c=["на сайте port-comfort.pro","по телефону на сайте port-comfort.pro +7 (800) 505–49–90","или в отеле у стойки администратора"];function u(){let t=(0,a.GS)(l.ai);return(0,n.jsxs)("div",{className:i().root,children:[(0,n.jsx)("h2",{className:i().title,children:"Условия программы лояльности"}),(0,n.jsxs)("span",{className:i().text,children:[(0,n.jsx)("b",{children:"Бонусы и скидки по программе лояльности Port Friends"})," ",(0,n.jsx)("br",{}),"действуют только при прямом бронировании:"]}),(0,n.jsx)("ul",{className:i().list,children:c.map((t,e)=>(0,n.jsx)("li",{className:i().list_item,children:t},e))}),!t&&(0,n.jsx)(s.e,{className:i().button})]})}},43277:function(t,e,r){"use strict";r.d(e,{R:function(){return l}});var n=r(57437),o=r(46851),i=r.n(o),s=r(16480),a=r.n(s);function l(t){let{className:e,size:r=40,color:o="white",leftTop:s,leftBottom:l,rightTop:c,rightBottom:u,fromLeftTop:A,fromLeftBottom:_,fromRightBottom:f,fromRightTop:p}=t;return(0,n.jsx)("svg",{className:a()(i().angle,{[i().left_top]:s},{[i().left_bottom]:l},{[i().right_top]:c},{[i().right_bottom]:u},{[i().from_left_top]:A},{[i().from_left_bottom]:_},{[i().from_right_top]:p},{[i().from_right_bottom]:f},e),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",width:r,height:r,children:(0,n.jsx)("path",{fill:o,d:"M51.9 0v1.9c-27.6 0-50 22.4-50 50H0V0h51.9z"})})}},335:function(t,e,r){"use strict";r.d(e,{R:function(){return n.R}});var n=r(43277)},74898:function(t,e,r){"use strict";r.d(e,{z:function(){return l}});var n=r(57437);r(2265);var o=r(16480),i=r.n(o),s=r(55805),a=r.n(s);let l=t=>{let{className:e,xl:r=!1,l:o=!1,green:s=!1,purple:l=!1,purpleGradient:c=!1,onClick:u,type:A="button",..._}=t;return(0,n.jsx)("button",{..._,className:i()(a().root,{[a().green]:s,[a().purple]:l,[a().purpleGradient]:c,[a().xl]:r,[a().l]:o},e),onClick:u,type:A})}},51189:function(t,e,r){"use strict";r.d(e,{W:function(){return l}});var n=r(57437);r(2265);var o=r(16480),i=r.n(o),s=r(89004),a=r.n(s);let l=t=>{let{as:e="div",className:r,children:o,...s}=t;return(0,n.jsx)(e,{className:i()(a().root,r),...s,children:o})}},64546:function(t,e,r){"use strict";r.d(e,{v:function(){return l}});var n=r(57437);r(2265);var o=r(22674),i=r.n(o),s=r(16480),a=r.n(s);function l(t){let{className:e,green:r,purple:o,children:s,blue:l,gray:c}=t;return(0,n.jsx)("div",{className:a()(i().root,e,{[i().green]:r},{[i().purple]:o},{[i().blue]:l},{[i().gray]:c}),children:s})}},56847:function(t,e,r){"use strict";r.d(e,{R:function(){return c}});var n=r(57437);r(2265);var o=r(97892),i=r.n(o),s=r(16480),a=r.n(s),l=r(20703);function c(t){let{image:e,className:r,...o}=t;return(0,n.jsx)(l.default,{src:e,className:a()(i().root,r),alt:"img",sizes:"100vw",...o})}},60144:function(t,e,r){"use strict";r.d(e,{W:function(){return l}});var n=r(57437);r(2265);var o=r(83160),i=r.n(o),s=r(16480),a=r.n(s);function l(t){let{className:e,children:r}=t;return(0,n.jsx)("div",{className:a()(i().root,e),children:(0,n.jsx)("span",{children:r})})}},95686:function(t,e,r){"use strict";r.d(e,{T:function(){return l}});var n=r(57437);r(2265);var o=r(2643),i=r.n(o),s=r(16480),a=r.n(s);function l(t){let{svg:e,className:r,...o}=t;return(0,n.jsx)(e,{className:a()(i().root,r),...o})}},94563:function(t,e,r){"use strict";r.d(e,{e:function(){return u}});var n=r(57437);r(2265);var o=r(47986),i=r.n(o),s=r(16480),a=r.n(s),l=r(74898),c=r(8792);function u(t){let{className:e}=t;return(0,n.jsx)("div",{className:a()(i().root,e),children:(0,n.jsx)(c.default,{href:"/account",children:(0,n.jsx)(l.z,{xl:!0,green:!0,className:i().button,children:"Стать участником"})})})}},2813:function(t,e,r){"use strict";r.d(e,{l:function(){return l}});var n=r(57437);r(2265);var o=r(76243),i=r.n(o),s=r(16480),a=r.n(s);function l(t){let{text:e,className:r}=t;return(0,n.jsx)("span",{className:a()(i().root,r),children:e})}},2769:function(t,e,r){"use strict";r.d(e,{Mq:function(){return i},PJ:function(){return o},ai:function(){return s},gv:function(){return n}});let n="(min-width: 1600px)",o="(max-width: 1600px)",i="(max-width: 1124px)",s="(max-width: 680px)"},69054:function(t){t.exports={blur:"style_blur__LbboH",text:"style_text__xB5nL"}},32794:function(t){t.exports={tag:"style_tag__7Gawo"}},71202:function(t){t.exports={root:"style_root__BU1fa"}},76201:function(t){t.exports={text:"style_text__RPwE3",wrapper:"style_wrapper__zvQOK",string_1:"style_string_1__4_jSM",string_2:"style_string_2__B94pW",angle_1:"style_angle_1__kWLbp",angle_2:"style_angle_2__EP6YT"}},73320:function(t){t.exports={image:"style_image__PrnTF",text:"style_text__6nrvh"}},75597:function(t){t.exports={root:"style_root__1LbKV",image_wrapper:"style_image_wrapper__bMG5Z",background:"style_background___wHhH",image:"style_image__mXs1A",icon:"style_icon__CYLo9",tag_1:"style_tag_1___Cgku",tag_2:"style_tag_2__1kg7L",tag_3:"style_tag_3__8PuC1",big_tag:"style_big_tag__zRO_b"}},69016:function(t){t.exports={root:"style_root__dfWsr",block:"style_block__Beu_w",img_wrapper:"style_img_wrapper__QXORq",icon:"style_icon__ixak0"}},89778:function(t){t.exports={root:"style_root__AfsVu",title:"style_title__w6RdU",text:"style_text__w47LR"}},16693:function(t){t.exports={root:"style_root___c0_2",content:"style_content__KlDMR"}},33589:function(t){t.exports={root:"style_root__ahjm9",image_wrapper:"style_image_wrapper__52J4k",image:"style_image__8ftaP",text:"style_text__hxope",button:"style_button__GJg_s"}},7030:function(t){t.exports={root:"style_root__K_JxE",title:"style_title__mpXrC",text:"style_text__kCnpI",list:"style_list__TH7YM",list_item:"style_list_item__OkpEV",button:"style_button__N2Acu"}},14317:function(t){t.exports={root:"style_root__BdY8p",content:"style_content__PHPro"}},46851:function(t){t.exports={angle:"style_angle__llpPU",left_bottom:"style_left_bottom__oHwdE",from_right_bottom:"style_from_right_bottom___8doH",from_left_top:"style_from_left_top__GqZQ7",left_top:"style_left_top__2F4Ih",from_right_top:"style_from_right_top__moHFr",from_left_bottom:"style_from_left_bottom__K4_yO",right_bottom:"style_right_bottom__PVpjs",right_top:"style_right_top__4bpQM"}},55805:function(t){t.exports={root:"style_root___A1MS",xl:"style_xl__yli9H",l:"style_l__hjHzz",green:"style_green__WFoQ_",purple:"style_purple__4AXxg",purpleGradient:"style_purpleGradient__b0xM_"}},89004:function(t){t.exports={root:"style_root__FVTmd"}},22674:function(t){t.exports={root:"style_root__l2h_E",green:"style_green__4REJO",purple:"style_purple__6MK8S",blue:"style_blue__Mg1eK",gray:"style_gray__tVyyC"}},97892:function(t){t.exports={root:"style_root__PgOrE"}},83160:function(t){t.exports={root:"style_root__H1FZW"}},2643:function(t){t.exports={root:"style_root__kQIlO"}},36417:function(t){t.exports={root:"style_root__DzsHc"}},46834:function(t){t.exports={root:"style_root__8QwWS"}},36419:function(t){t.exports={root:"style_root__zqpVc",text:"style_text__htyNb"}},39957:function(t){t.exports={root:"style_root__OFCvZ",link:"style_link__43urp",title:"style_title__3P7aj"}},62623:function(t){t.exports={root:"style_root__Wo8ft",span:"style_span__ScWxA"}},47986:function(t){t.exports={root:"style_root__YVmz0"}},76243:function(t){t.exports={root:"style_root__Wj3hG"}},16480:function(t,e){var r;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t="",e=0;e<arguments.length;e++){var r=arguments[e];r&&(t=i(t,function(t){if("string"==typeof t||"number"==typeof t)return t;if("object"!=typeof t)return"";if(Array.isArray(t))return o.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var e="";for(var r in t)n.call(t,r)&&t[r]&&(e=i(e,r));return e}(r)))}return t}function i(t,e){return e?t?t+" "+e:t+e:t}t.exports?(o.default=o,t.exports=o):void 0!==(r=(function(){return o}).apply(e,[]))&&(t.exports=r)}()}},function(t){t.O(0,[250,749,971,69,744],function(){return t(t.s=56429)}),_N_E=t.O()}]);