(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8239],{4210:function(e,t,r){Promise.resolve().then(r.t.bind(r,25250,23)),Promise.resolve().then(r.bind(r,19721)),Promise.resolve().then(r.bind(r,32658)),Promise.resolve().then(r.t.bind(r,36419,23)),Promise.resolve().then(r.t.bind(r,39957,23)),Promise.resolve().then(r.t.bind(r,62623,23)),Promise.resolve().then(r.t.bind(r,85252,23)),Promise.resolve().then(r.t.bind(r,22674,23)),Promise.resolve().then(r.t.bind(r,98515,23)),Promise.resolve().then(r.t.bind(r,46851,23)),Promise.resolve().then(r.t.bind(r,38200,23)),Promise.resolve().then(r.t.bind(r,58295,23)),Promise.resolve().then(r.t.bind(r,97325,23)),Promise.resolve().then(r.t.bind(r,85870,23)),Promise.resolve().then(r.bind(r,2576)),Promise.resolve().then(r.bind(r,78900)),Promise.resolve().then(r.bind(r,71563)),Promise.resolve().then(r.bind(r,38616)),Promise.resolve().then(r.t.bind(r,65296,23)),Promise.resolve().then(r.bind(r,1706)),Promise.resolve().then(r.t.bind(r,38295,23))},20703:function(e,t,r){"use strict";r.d(t,{default:function(){return o.a}});var n=r(67447),o=r.n(n)},67447:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getImageProps:function(){return s},default:function(){return a}});let n=r(86921),o=r(38630),i=r(81749),A=n._(r(10536)),s=e=>{let{props:t}=(0,o.getImgProps)(e,{defaultLoader:A.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},a=i.Image},19721:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return o}});let n=r(99775);function o(e){let{reason:t,children:r}=e;if("undefined"==typeof window)throw new n.BailoutToCSRError(t);return r}},72671:function(e,t){"use strict";/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=Symbol.for("react.element"),n=(Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.memo"),Symbol.for("react.lazy"),{isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}}),o=Object.assign,i={};function A(e,t,r){this.props=e,this.context=t,this.refs=i,this.updater=r||n}function s(){}function a(e,t,r){this.props=e,this.context=t,this.refs=i,this.updater=r||n}A.prototype.isReactComponent={},A.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},A.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},s.prototype=A.prototype;var l=a.prototype=new s;l.constructor=a,o(l,A.prototype),l.isPureReactComponent=!0;var u=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};t.createElement=function(e,t,n){var o,i={},A=null,s=null;if(null!=t)for(o in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(A=""+t.key),t)u.call(t,o)&&!c.hasOwnProperty(o)&&(i[o]=t[o]);var a=arguments.length-2;if(1===a)i.children=n;else if(1<a){for(var l=Array(a),f=0;f<a;f++)l[f]=arguments[f+2];i.children=l}if(e&&e.defaultProps)for(o in a=e.defaultProps)void 0===i[o]&&(i[o]=a[o]);return{$$typeof:r,type:e,key:A,ref:s,props:i,_owner:null}}},52846:function(e,t,r){"use strict";e.exports=r(72671)},24843:function(e,t,r){"use strict";t.GS=void 0;var n=r(43916);Object.defineProperty(t,"GS",{enumerable:!0,get:function(){return n.useMedia}})},43916:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useMediaLayout=t.useMedia=t.mockMediaQueryList=void 0;var n=r(2265),o=r(90330);t.mockMediaQueryList={media:"",matches:!1,onchange:o.noop,addListener:o.noop,removeListener:o.noop,addEventListener:o.noop,removeEventListener:o.noop,dispatchEvent:function(e){return!0}};var i=function(e){return function(r,i){void 0===i&&(i=!1);var A=n.useState(i),s=A[0],a=A[1],l=o.queryObjectToString(r);return e(function(){var e=!0,r="undefined"==typeof window?t.mockMediaQueryList:window.matchMedia(l),n=function(){e&&a(!!r.matches)};return r.addListener(n),a(r.matches),function(){e=!1,r.removeListener(n)}},[l]),s}};t.useMedia=i(n.useEffect),t.useMediaLayout=i(n.useLayoutEffect),t.default=t.useMedia},46046:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}).toLowerCase()}},90330:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.noop=t.queryObjectToString=t.camelToHyphen=void 0;var n=r(46046);Object.defineProperty(t,"camelToHyphen",{enumerable:!0,get:function(){return n.default}});var o=r(31559);Object.defineProperty(t,"queryObjectToString",{enumerable:!0,get:function(){return o.default}});var i=r(69411);Object.defineProperty(t,"noop",{enumerable:!0,get:function(){return i.default}})},69411:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){}},31559:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(46046);t.default=function(e){return"string"==typeof e?e:Object.entries(e).map(function(e){var t=e[0],r=e[1],o=n.default(t),i=r;return"boolean"==typeof i?i?o:"not "+o:("number"==typeof i&&/[height|width]$/.test(o)&&(i+="px"),"("+o+": "+i+")")}).join(" and ")}},32658:function(e,t,r){"use strict";r.r(t),r.d(t,{ImagesBlock:function(){return d}});var n=r(57437);r(2265);var o=r(21974),i=r.n(o),A=r(20703),s={src:"/_next/static/media/img.f984b6f7.png",height:472,width:866,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAATlBMVEWin6qYkI3BfTHxs2nu1LCqoaZyiq7XxLro39Hh0sFUPElueJhYQ1fU8e9uYnUA//9BUYiyoJx2bYHYlUuPjJeziV/z16ny6d/YupaTfWxUwMNeAAAAEXRSTlPZ/v393+D++/fMYef+uKsF/kqF3JoAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAsSURBVHicY+DnFefgYGfnZOBikGAWExRkYeARkBQWYRNgZeDjFmViFBBiAAAb/QGGTKeqOgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:4},a={src:"/_next/static/media/imgLaptop.501f05d7.png",height:517,width:835,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAYFBMVEVMaXHToX3Vs4uGbnXn0bvi4ufa2t+Vmq3DsbpYaZT///9kVWjJ6fjhup7np1+qrL9SPkL59vSPjrrlx7XbwLTY2N2uqrXCtMLs1ruSg35WVHnIfSbLo3X658hZXIV+gp0+4HKFAAAAGHRSTlMAzftqsn5j+wz7J8jJvvx5QV7Jyvw1t9I7db/IAAAACXBIWXMAAAsTAAALEwEAmpwYAAAANUlEQVR4nGNg4BDkYWVjE2UQ4GaXkBWRYGFgluLkY2KXZ2Hg4JeRluSUE2Ng4OJlFBYSZwUALo4CMABva5cAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5},l={src:"/_next/static/media/imgTablet.73670aa5.png",height:564,width:821,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAV1BMVEX77fTV09Ofi3zUkEX949zl1O7m4uLp2vKNj59MaXHVo3H13bqmoK2DgI9VaJa619NzcZTDjlr/+9j34fTm0bSomqhoVFloaoqReYEAAAD60Z3Bq6ZVTGp4Y8y5AAAAGnRSTlNQpP37OmKjEvwA+v7y/P2u/v5CYPs4WNk/AwQ1lmMAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA0SURBVHicBcELAkAgEAXAt+wvoVBI3f+cZtAqqVIy3MO/2AvjfabZ9+1EwHJ4XhnBIJfAfi3iAc4t/vMLAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:5},u={src:"/_next/static/media/imgMobile.168b9943.png",height:430,width:358,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAe1BMVEXk5P/oq2GblZ7/6f/13fLj6/vx2sL29vvr39HZ5vP////Y0eyfmKb////KweFRY5Bwco12aHq4s726qbqvmahoaYy9p5tuYHA1SXbTv6zIk1vp5ub22bXs1K3UvbZnfabgz77E6PdFVo9aSWCGgZVfQz/7yY28safn8eq0iAglAAAAInRSTlME/f46JmvLEv44T9S2G9HS98q8Vpr9x/v9yP2pvv78/J31BKAYtwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEJJREFUeJwFwQUCwCAMBLCDAW3n7sr0/y9cAjmsESFMH/PKO9yjFv3OcGrUmx/Q3l3fXCXq0+dpZFEVWRwGBqCEAPx+QgOZkuIlywAAAABJRU5ErkJggg==",blurWidth:7,blurHeight:8},c=r(24843),f=r(2769);function d(){let e=(0,c.GS)(f.PJ),t=(0,c.GS)(f.Mq),r=(0,c.GS)(f.ai);return(0,n.jsx)("div",{className:i().root,children:(0,n.jsx)(A.default,{src:(()=>{switch(!0){case r:return u;case t:return l;case e:return a;default:return s}})(),alt:"image",quality:100})})}},1706:function(e,t,r){"use strict";r.r(t),r.d(t,{RatingGridBlock:function(){return d}});var n,o=r(57437);r(2265);var i=r(16480),A=r.n(i),s=r(14399),a=r.n(s),l=r(20703),u=r(52846);function c(){return(c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var f=e=>u.createElement("svg",c({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 21 21"},e),n||(n=u.createElement("path",{stroke:"#fff",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m10.52 19.767 9.358-9.023m0 0-9.022-9.36m9.022 9.36-18.381-.336"})));function d(e){let{icon:t,title:r,reviewsNumber:n,rating:i,mainPage:s=!1}=e;return(0,o.jsxs)("div",{className:A()(a().root,{[a().main]:s}),children:[(0,o.jsxs)("div",{className:A()(a().content,{[a().main]:s}),children:[(0,o.jsx)(l.default,{src:t,className:A()(a().icon,{[a().main]:s}),alt:"icon"}),(0,o.jsx)("h3",{children:r}),(0,o.jsxs)("span",{children:["На основании ",(0,o.jsx)("b",{children:n})," ",(0,o.jsx)("br",{})," отзывов реальных клиентов."]}),(0,o.jsx)("div",{className:A()(a().rating,{[a().main]:s}),children:(0,o.jsxs)("span",{children:[i,(0,o.jsxs)("b",{children:["/",i>5?10:5]})]})})]}),(0,o.jsx)("div",{className:A()(a().bg,{[a().main]:s}),children:s&&(0,o.jsx)("div",{className:A()(a().arr_wrapper),children:(0,o.jsx)("div",{className:a().circle,children:(0,o.jsx)(f,{className:a().arr})})})})]})}},2769:function(e,t,r){"use strict";r.d(t,{Mq:function(){return i},PJ:function(){return o},ai:function(){return A},gv:function(){return n}});let n="(min-width: 1600px)",o="(max-width: 1600px)",i="(max-width: 1124px)",A="(max-width: 680px)"},21974:function(e){e.exports={root:"style_root__GTCcN"}},97325:function(e){e.exports={root:"style_root__VYu9y"}},58295:function(e){e.exports={root:"style_root__Z2vXS"}},98515:function(e){e.exports={root:"style_root__6Bj2D"}},38200:function(e){e.exports={root:"style_root__38C9L",string:"style_string__98Ssm",blue:"style_blue__XCKCO",angle:"style_angle__jW2q0"}},85252:function(e){e.exports={root:"style_root__yW7Hm",wrapper:"style_wrapper__H5m7B"}},85870:function(e){e.exports={root:"style_root___IX7t",wrapper:"style_wrapper__6W1JK",title:"style_title__GMSV4"}},46851:function(e){e.exports={angle:"style_angle__llpPU",left_bottom:"style_left_bottom__oHwdE",from_right_bottom:"style_from_right_bottom___8doH",from_left_top:"style_from_left_top__GqZQ7",left_top:"style_left_top__2F4Ih",from_right_top:"style_from_right_top__moHFr",from_left_bottom:"style_from_left_bottom__K4_yO",right_bottom:"style_right_bottom__PVpjs",right_top:"style_right_top__4bpQM"}},22674:function(e){e.exports={root:"style_root__l2h_E",green:"style_green__4REJO",purple:"style_purple__6MK8S",blue:"style_blue__Mg1eK",gray:"style_gray__tVyyC"}},36419:function(e){e.exports={root:"style_root__zqpVc",text:"style_text__htyNb"}},39957:function(e){e.exports={root:"style_root__OFCvZ",link:"style_link__43urp",title:"style_title__3P7aj"}},62623:function(e){e.exports={root:"style_root__Wo8ft",span:"style_span__ScWxA"}},14399:function(e){e.exports={root:"style_root__9VfqG",bg:"style_bg__qLOTU",main:"style_main__WwlfT",content:"style_content__A0S1b",icon:"style_icon__G4Ev2",rating:"style_rating__AzizZ",arr_wrapper:"style_arr_wrapper__QpavN",circle:"style_circle__m8tLZ",arr:"style_arr__Hqrmm"}},65296:function(e){e.exports={root:"style_root__y_szm",main:"style_main__cxJvM"}},38295:function(e){e.exports={main:"style_main__BWw_t",ratings:"style_ratings__vwVWM"}},2576:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/icon1.7f412179.png",height:44,width:42,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAUVBMVEWRs9n6+/wTWqeqxeEFTp42e8cdZbQPX7aevd55n8jm7fUcYa3Q3u44c7VAgsorc8JkmdJZj8ltmMXI2euIrNMAP6LZ5fJFfLa70ekGU6nx9fpusCbWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQUlEQVR4nAXBBwLAIAgEsBNRwL26/v/RJtAWQmgjocso2kURp9P7FUCwr5kikCtO8h+Qabkd6aAyP8TsUcyWmbofW5ICcP8WOAYAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},78900:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/icon2.dd10bcc7.png",height:44,width:42,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAS1BMVEX/0gDaCB//zQHCTBv60AHNrQr9zQb/2AD90wH+zQSRbRb/zADlKCPgGSDpVA7lOUD7vQH0kRDROAfflwuzdhTtQCvGiRD0lAzRdwseQKpLAAAAC3RSTlP+/ur++v52/emW/jf0hPEAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA/SURBVHicBcEHAoAgDACxA8EWW6bz/y81oZilnK0Adl4PCaNV7xMY7t6nIG91vwdICzVsGPKttg5J7KqqMe4/WMYCa/q5OncAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},71563:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/icon3.2ebe2557.png",height:44,width:42,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAATlBMVEXsYFr0gHrwnZnvlpLtT0jxf3nvb2nuiobvRj9MaXHvi4fsWVLsWlP1xsTsaGLsZV74m5bzv7zzsLDzr630vrz1UUnwa2X1XVf7amPxmJSXEE7mAAAAE3RSTlP84P7+/v7eW/4A/f7pW/vb41xbI7ymoQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAERJREFUeJwdykkSgCAMBMBhCSEsogaC/v+jVtnnhvAA0i3gtXLMzwVH8CjbgaaqTqqIXudbgiEZQj3sBO8/dwin1lyXD2BhAscGcCQLAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},38616:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/icon4.60e6a9d3.png",height:46,width:46,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAdVBMVEU7xA276IRu1EJSyyxfzzAwwgDj8tWg3kr+12BHxxuU3DeS2mxw01QHqP1z0eP22XWv42am3Zaj3n+Ky6eT3k1tvfFzynVTzixqs9z/7ssclvd0v7qy1lJIwPPN3qcomv/A4I15yMv38dhaze3+0Uf/xyL8z0N4X8yeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAR0lEQVR4nB3GRRLAIBAEwEEXCRB3t/8/MVXpU2MwtzGvOeHn9YrpSUC3hBBph5XNuB0qgwXvJ/lHVS2EhxS8KGvHoFlO5Eh/mjcDjsaSq4oAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},16480:function(e,t){var r;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=i(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return o.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)n.call(e,r)&&e[r]&&(t=i(t,r));return t}(r)))}return e}function i(e,t){return t?e?e+" "+t:e+t:e}e.exports?(o.default=o,e.exports=o):void 0!==(r=(function(){return o}).apply(t,[]))&&(e.exports=r)}()}},function(e){e.O(0,[5250,1749,2971,8069,1744],function(){return e(e.s=4210)}),_N_E=e.O()}]);