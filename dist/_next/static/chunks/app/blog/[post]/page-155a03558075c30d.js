(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1731],{81081:function(e,t,r){Promise.resolve().then(r.t.bind(r,25250,23)),Promise.resolve().then(r.bind(r,19721)),Promise.resolve().then(r.t.bind(r,72454,23)),Promise.resolve().then(r.bind(r,32887)),Promise.resolve().then(r.t.bind(r,81897,23)),Promise.resolve().then(r.t.bind(r,93734,23)),Promise.resolve().then(r.bind(r,55769)),Promise.resolve().then(r.bind(r,10285)),Promise.resolve().then(r.t.bind(r,36419,23)),Promise.resolve().then(r.t.bind(r,39957,23)),Promise.resolve().then(r.t.bind(r,62623,23)),Promise.resolve().then(r.t.bind(r,33461,23))},20703:function(e,t,r){"use strict";r.d(t,{default:function(){return o.a}});var n=r(67447),o=r.n(n)},47907:function(e,t,r){"use strict";var n=r(15313);r.o(n,"usePathname")&&r.d(t,{usePathname:function(){return n.usePathname}})},67447:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getImageProps:function(){return a},default:function(){return l}});let n=r(86921),o=r(38630),i=r(81749),s=n._(r(10536)),a=e=>{let{props:t}=(0,o.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},l=i.Image},19721:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return o}});let n=r(99775);function o(e){let{reason:t,children:r}=e;if("undefined"==typeof window)throw new n.BailoutToCSRError(t);return r}},72671:function(e,t){"use strict";/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=Symbol.for("react.element"),n=(Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.memo"),Symbol.for("react.lazy"),{isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}}),o=Object.assign,i={};function s(e,t,r){this.props=e,this.context=t,this.refs=i,this.updater=r||n}function a(){}function l(e,t,r){this.props=e,this.context=t,this.refs=i,this.updater=r||n}s.prototype.isReactComponent={},s.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},s.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},a.prototype=s.prototype;var c=l.prototype=new a;c.constructor=l,o(c,s.prototype),c.isPureReactComponent=!0;var u=Object.prototype.hasOwnProperty,f={key:!0,ref:!0,__self:!0,__source:!0};t.createElement=function(e,t,n){var o,i={},s=null,a=null;if(null!=t)for(o in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(s=""+t.key),t)u.call(t,o)&&!f.hasOwnProperty(o)&&(i[o]=t[o]);var l=arguments.length-2;if(1===l)i.children=n;else if(1<l){for(var c=Array(l),p=0;p<l;p++)c[p]=arguments[p+2];i.children=c}if(e&&e.defaultProps)for(o in l=e.defaultProps)void 0===i[o]&&(i[o]=l[o]);return{$$typeof:r,type:e,key:s,ref:a,props:i,_owner:null}}},52846:function(e,t,r){"use strict";e.exports=r(72671)},24843:function(e,t,r){"use strict";t.GS=void 0;var n=r(43916);Object.defineProperty(t,"GS",{enumerable:!0,get:function(){return n.useMedia}})},43916:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useMediaLayout=t.useMedia=t.mockMediaQueryList=void 0;var n=r(2265),o=r(90330);t.mockMediaQueryList={media:"",matches:!1,onchange:o.noop,addListener:o.noop,removeListener:o.noop,addEventListener:o.noop,removeEventListener:o.noop,dispatchEvent:function(e){return!0}};var i=function(e){return function(r,i){void 0===i&&(i=!1);var s=n.useState(i),a=s[0],l=s[1],c=o.queryObjectToString(r);return e(function(){var e=!0,r="undefined"==typeof window?t.mockMediaQueryList:window.matchMedia(c),n=function(){e&&l(!!r.matches)};return r.addListener(n),l(r.matches),function(){e=!1,r.removeListener(n)}},[c]),a}};t.useMedia=i(n.useEffect),t.useMediaLayout=i(n.useLayoutEffect),t.default=t.useMedia},46046:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}).toLowerCase()}},90330:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.noop=t.queryObjectToString=t.camelToHyphen=void 0;var n=r(46046);Object.defineProperty(t,"camelToHyphen",{enumerable:!0,get:function(){return n.default}});var o=r(31559);Object.defineProperty(t,"queryObjectToString",{enumerable:!0,get:function(){return o.default}});var i=r(69411);Object.defineProperty(t,"noop",{enumerable:!0,get:function(){return i.default}})},69411:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){}},31559:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(46046);t.default=function(e){return"string"==typeof e?e:Object.entries(e).map(function(e){var t=e[0],r=e[1],o=n.default(t),i=r;return"boolean"==typeof i?i?o:"not "+o:("number"==typeof i&&/[height|width]$/.test(o)&&(i+="px"),"("+o+": "+i+")")}).join(" and ")}},32887:function(e,t,r){"use strict";r.r(t),r.d(t,{ImagePost:function(){return d}});var n,o=r(57437);r(2265);var i=r(81322),s=r.n(i),a=r(20703),l=r(52846);function c(){return(c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var u=e=>l.createElement("svg",c({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 45 41"},e),n||(n=l.createElement("path",{stroke:"#00A3AD",strokeLinejoin:"round",strokeWidth:2,d:"M22.5 40C20.708 40 1 27.59 1 12.523 1 6.159 6.214 1 12.646 1c4.149 0 7.791 2.147 9.854 5.379A11.67 11.67 0 0 1 32.354 1C38.786 1 44 6.159 44 12.523 44 27.59 24.292 40 22.5 40Z"}))),f=r(335),p=r(24843),_=r(2769);function d(e){let{img:t,description:r}=e,n=(0,p.GS)(_.ai),i=String(t[0].split("/").at(-1)?.split(".")[0]);return(0,o.jsxs)("div",{className:s().root,children:[(0,o.jsxs)("div",{className:s().image_wrapper,children:[(0,o.jsxs)("div",{className:s().icon_wrapper,children:[(0,o.jsx)(f.R,{fromRightTop:!0,leftTop:!0}),(0,o.jsx)(f.R,{fromRightTop:!0,rightBottom:!0}),(0,o.jsx)(u,{className:s().icon})]}),(0,o.jsx)(a.default,{src:n?t[2]:t[1],alt:i,width:1e3,height:600})]}),r&&(0,o.jsx)("span",{className:s().description,children:r})]})}},55769:function(e,t,r){"use strict";r.r(t),r.d(t,{ShareButton:function(){return g}});var n,o,i=r(57437),s=r(2265),a=r(47943),l=r.n(a),c=r(74898),u=r(52846);function f(){return(f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var p=e=>u.createElement("svg",f({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 23 23"},e),n||(n=u.createElement("path",{fill:"#01B6C1",d:"M0 18.308q0 1.702 1.196 2.898t2.898 1.196H17.71q1.68 0 2.875-1.196t1.196-2.898V12.42l-2.714 2.277v3.611q0 .574-.391.966-.39.39-.966.414H4.094q-.575 0-.966-.414a1.36 1.36 0 0 1-.391-.966V4.692q0-.552.391-.966.39-.414.966-.39h6.808V.62H4.094q-1.702 0-2.898 1.196T0 4.692zm4.094-4.07q0 1.977.782 3.794a9.2 9.2 0 0 1 1.61-3.84 9.7 9.7 0 0 1 3.082-2.784q1.84-1.058 4.048-1.196v4.025l8.165-6.808L13.616.621v4.071a9.3 9.3 0 0 0-3.703.76q-1.77.758-3.036 2.046a10.3 10.3 0 0 0-2.047 3.036 8.5 8.5 0 0 0-.736 3.703"}))),_=r(20703),d=r(16480),m=r.n(d),h=r(47907);function y(){return(y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var v=e=>u.createElement("svg",y({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},e),o||(o=u.createElement("path",{fill:"#000",fillRule:"evenodd",d:"M10.975 14.51a1.05 1.05 0 0 0 0-1.485 2.95 2.95 0 0 1 0-4.172l3.536-3.535a2.95 2.95 0 1 1 4.172 4.172l-1.093 1.092a1.05 1.05 0 0 0 1.485 1.485l1.093-1.092a5.05 5.05 0 0 0-7.142-7.142L9.49 7.368a5.05 5.05 0 0 0 0 7.142c.41.41 1.075.41 1.485 0m2.05-5.02a1.05 1.05 0 0 0 0 1.485 2.95 2.95 0 0 1 0 4.172l-3.5 3.5a2.95 2.95 0 1 1-4.171-4.172l1.025-1.025a1.05 1.05 0 0 0-1.485-1.485L3.87 12.99a5.05 5.05 0 0 0 7.142 7.142l3.5-3.5a5.05 5.05 0 0 0 0-7.142 1.05 1.05 0 0 0-1.485 0z",clipRule:"evenodd"})));let b=[{name:"wa",href:"https://wa.me/?text=https://port-comfort.pro/",icon:"/images/sn/wa.webp"},{name:"vk",href:"https://vk.com/share.php?url=https://port-comfort.pro/",icon:"/images/sn/vk.webp"},{name:"tg",href:"https://t.me/share/url?url=https://port-comfort.pro/",icon:"/images/sn/tg.webp"}];function g(){let[e,t]=s.useState(!1),r=s.useRef(null),n=(0,h.usePathname)();return s.useEffect(()=>{let e=e=>{r.current&&!r.current.contains(e.target)&&t(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[r]),(0,i.jsxs)("div",{className:l().root,ref:r,children:[(0,i.jsxs)("div",{className:m()(l().sn_share_links,{[l().active]:e}),children:[(0,i.jsx)("div",{className:l().copy_link_wrapper,onClick:()=>{let e=`${window.location.origin}${n}`,r=document.createElement("input");r.value=e,document.body.appendChild(r),r.select(),document.execCommand("copy"),document.body.removeChild(r),t(!1)},children:(0,i.jsx)(v,{className:l().copy_link})}),b.map((e,t)=>(0,i.jsx)("a",{href:`${e.href}${n}`,rel:"noreferrer",target:"_blank",children:(0,i.jsx)(_.default,{src:e.icon,alt:e.name,width:24,height:24})},t))]}),(0,i.jsxs)(c.z,{green:!0,sm:!0,onClick:()=>t(e=>!e),children:[(0,i.jsx)("span",{children:"Поделиться"}),(0,i.jsx)(p,{className:l().share_icon})]})]})}},10285:function(e,t,r){"use strict";r.r(t),r.d(t,{Views:function(){return p}});var n,o=r(57437),i=r(2265),s=r(13416),a=r.n(s),l=r(52846);function c(){return(c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var u=e=>l.createElement("svg",c({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 30 30"},e),n||(n=l.createElement("path",{fill:"#8B8B8B",d:"M29.456 14.569A15.35 15.35 0 0 0 15 4.706C8.55 4.575 2.738 8.531.525 14.587a1.54 1.54 0 0 0 0 .825A15.145 15.145 0 0 0 15 25.295c6.413.056 12.169-3.881 14.475-9.863a1.5 1.5 0 0 0-.019-.862M15 22.519C9.938 22.706 5.288 19.688 3.375 15 5.269 10.294 9.919 7.294 15 7.481A12.29 12.29 0 0 1 26.606 15 12.31 12.31 0 0 1 15 22.519m0-12.488c-.338 0-.675.038-.994.113.488.656.75 1.444.75 2.268a4.22 4.22 0 0 1-4.406 4.05h-.206a4.985 4.985 0 0 0 6.206 3.357 4.985 4.985 0 0 0 3.356-6.206A4.95 4.95 0 0 0 15 10.03"})));let f=async e=>{let t=await fetch("/getPostViews",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({goalNumber:e})});if(t.ok)return(await t.json()).views;console.error("Ошибка при получении данных:",t.statusText)};function p(e){let{goalNumber:t}=e,[r,n]=i.useState("");return i.useEffect(()=>{f(t).then(e=>n(e))},[t]),(0,o.jsxs)("div",{className:a().root,children:[(0,o.jsx)(u,{className:a().eye_icon}),(0,o.jsx)("span",{children:r})]})}},43277:function(e,t,r){"use strict";r.d(t,{R:function(){return l}});var n=r(57437),o=r(46851),i=r.n(o),s=r(16480),a=r.n(s);function l(e){let{className:t,size:r=40,color:o="white",leftTop:s,leftBottom:l,rightTop:c,rightBottom:u,fromLeftTop:f,fromLeftBottom:p,fromRightBottom:_,fromRightTop:d}=e;return(0,n.jsx)("svg",{className:a()(i().angle,{[i().left_top]:s},{[i().left_bottom]:l},{[i().right_top]:c},{[i().right_bottom]:u},{[i().from_left_top]:f},{[i().from_left_bottom]:p},{[i().from_right_top]:d},{[i().from_right_bottom]:_},t),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",width:r,height:r,children:(0,n.jsx)("path",{fill:o,d:"M51.9 0v1.9c-27.6 0-50 22.4-50 50H0V0h51.9z"})})}},335:function(e,t,r){"use strict";r.d(t,{R:function(){return n.R}});var n=r(43277)},74898:function(e,t,r){"use strict";r.d(t,{z:function(){return l}});var n=r(57437);r(2265);var o=r(16480),i=r.n(o),s=r(55805),a=r.n(s);let l=e=>{let{className:t,xl:r=!1,l:o=!1,sm:s=!1,green:l=!1,purple:c=!1,purpleGradient:u=!1,onClick:f,type:p="button",..._}=e;return(0,n.jsx)("button",{..._,className:i()(a().root,{[a().green]:l,[a().purple]:c,[a().purpleGradient]:u,[a().xl]:r,[a().l]:o,[a().sm]:s},t),onClick:f,type:p})}},2769:function(e,t,r){"use strict";r.d(t,{Mq:function(){return i},PJ:function(){return o},ai:function(){return s},gv:function(){return n}});let n="(min-width: 1600px)",o="(max-width: 1600px)",i="(max-width: 1124px)",s="(max-width: 680px)"},72454:function(e){e.exports={root:"style_root__JLh2H",nav:"style_nav__vbzNE",list_item:"style_list_item__BccTk"}},93734:function(e){e.exports={header:"style_header___yrae",date:"style_date__VBch8",text:"style_text__aUIEv"}},81322:function(e){e.exports={root:"style_root__48BjI",image_wrapper:"style_image_wrapper__z1n_P",description:"style_description__ydpDH",icon_wrapper:"style_icon_wrapper__N2cbk",icon:"style_icon__m6gDf"}},81897:function(e){e.exports={root:"style_root__vednq"}},47943:function(e){e.exports={root:"style_root__Vg5dk",share_icon:"style_share_icon__CxOnJ",sn_share_links:"style_sn_share_links__5qeAl",active:"style_active__HzdiV",copy_link_wrapper:"style_copy_link_wrapper__p0g2A",copy_link:"style_copy_link__Kdbu_"}},33461:function(e){e.exports={root:"style_root__FqMzV"}},13416:function(e){e.exports={root:"style_root__f50co",eye_icon:"style_eye_icon__dbCsX"}},46851:function(e){e.exports={angle:"style_angle__llpPU",left_bottom:"style_left_bottom__oHwdE",from_right_bottom:"style_from_right_bottom___8doH",from_left_top:"style_from_left_top__GqZQ7",left_top:"style_left_top__2F4Ih",from_right_top:"style_from_right_top__moHFr",from_left_bottom:"style_from_left_bottom__K4_yO",right_bottom:"style_right_bottom__PVpjs",right_top:"style_right_top__4bpQM"}},55805:function(e){e.exports={root:"style_root___A1MS",xl:"style_xl__yli9H",l:"style_l__hjHzz",sm:"style_sm__ASxbt",green:"style_green__WFoQ_",purple:"style_purple__4AXxg",purpleGradient:"style_purpleGradient__b0xM_"}},36419:function(e){e.exports={root:"style_root__zqpVc",text:"style_text__htyNb"}},39957:function(e){e.exports={root:"style_root__OFCvZ",link:"style_link__43urp",title:"style_title__3P7aj"}},62623:function(e){e.exports={root:"style_root__Wo8ft",span:"style_span__ScWxA"}},16480:function(e,t){var r;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=i(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return o.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)n.call(e,r)&&e[r]&&(t=i(t,r));return t}(r)))}return e}function i(e,t){return t?e?e+" "+t:e+t:e}e.exports?(o.default=o,e.exports=o):void 0!==(r=(function(){return o}).apply(t,[]))&&(e.exports=r)}()}},function(e){e.O(0,[5250,1749,2971,8069,1744],function(){return e(e.s=81081)}),_N_E=e.O()}]);