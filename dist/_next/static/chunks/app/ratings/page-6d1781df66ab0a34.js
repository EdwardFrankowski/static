(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8239],{73527:function(e,t,r){"use strict";var n,o,A=r(52846);function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}t.Z=e=>A.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 15 15"},e),n||(n=A.createElement("path",{fill:"#CDD2DE",d:"M7.5 0a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15"})),o||(o=A.createElement("path",{fill:"#fff",d:"M6.68 6h1.3v5h-1.3zm-.19-1.41a.65.65 0 0 1 .21-.49q.22-.21.6-.21t.61.21q.24.2.24.49t-.24.49q-.23.19-.61.19t-.6-.19a.65.65 0 0 1-.21-.49"})))},30528:function(e,t,r){Promise.resolve().then(r.t.bind(r,25250,23)),Promise.resolve().then(r.bind(r,19721)),Promise.resolve().then(r.bind(r,52446)),Promise.resolve().then(r.bind(r,71533)),Promise.resolve().then(r.bind(r,90444)),Promise.resolve().then(r.bind(r,45359)),Promise.resolve().then(r.bind(r,65066)),Promise.resolve().then(r.bind(r,32658)),Promise.resolve().then(r.t.bind(r,85252,23)),Promise.resolve().then(r.t.bind(r,98515,23)),Promise.resolve().then(r.bind(r,2765)),Promise.resolve().then(r.t.bind(r,36419,23)),Promise.resolve().then(r.t.bind(r,62623,23)),Promise.resolve().then(r.t.bind(r,39957,23)),Promise.resolve().then(r.t.bind(r,22674,23)),Promise.resolve().then(r.t.bind(r,46851,23)),Promise.resolve().then(r.t.bind(r,38347,23)),Promise.resolve().then(r.t.bind(r,58295,23)),Promise.resolve().then(r.t.bind(r,27168,23)),Promise.resolve().then(r.t.bind(r,85870,23)),Promise.resolve().then(r.t.bind(r,49076,23)),Promise.resolve().then(r.t.bind(r,25650,23)),Promise.resolve().then(r.t.bind(r,19857,23)),Promise.resolve().then(r.t.bind(r,97543,23)),Promise.resolve().then(r.bind(r,1664)),Promise.resolve().then(r.bind(r,24510)),Promise.resolve().then(r.bind(r,1714)),Promise.resolve().then(r.bind(r,21674)),Promise.resolve().then(r.t.bind(r,65296,23)),Promise.resolve().then(r.bind(r,40117)),Promise.resolve().then(r.t.bind(r,38295,23))},20703:function(e,t,r){"use strict";r.d(t,{default:function(){return o.a}});var n=r(67447),o=r.n(n)},67447:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getImageProps:function(){return a},default:function(){return s}});let n=r(86921),o=r(38630),A=r(81749),i=n._(r(10536)),a=e=>{let{props:t}=(0,o.getImgProps)(e,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},s=A.Image},19721:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return o}});let n=r(99775);function o(e){let{reason:t,children:r}=e;if("undefined"==typeof window)throw new n.BailoutToCSRError(t);return r}},72671:function(e,t){"use strict";/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=Symbol.for("react.element"),n=(Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.memo"),Symbol.for("react.lazy"),{isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}}),o=Object.assign,A={};function i(e,t,r){this.props=e,this.context=t,this.refs=A,this.updater=r||n}function a(){}function s(e,t,r){this.props=e,this.context=t,this.refs=A,this.updater=r||n}i.prototype.isReactComponent={},i.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},i.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},a.prototype=i.prototype;var l=s.prototype=new a;l.constructor=s,o(l,i.prototype),l.isPureReactComponent=!0;var u=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};t.createElement=function(e,t,n){var o,A={},i=null,a=null;if(null!=t)for(o in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(i=""+t.key),t)u.call(t,o)&&!c.hasOwnProperty(o)&&(A[o]=t[o]);var s=arguments.length-2;if(1===s)A.children=n;else if(1<s){for(var l=Array(s),_=0;_<s;_++)l[_]=arguments[_+2];A.children=l}if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===A[o]&&(A[o]=s[o]);return{$$typeof:r,type:e,key:i,ref:a,props:A,_owner:null}}},52846:function(e,t,r){"use strict";e.exports=r(72671)},24843:function(e,t,r){"use strict";t.GS=void 0;var n=r(43916);Object.defineProperty(t,"GS",{enumerable:!0,get:function(){return n.useMedia}})},43916:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useMediaLayout=t.useMedia=t.mockMediaQueryList=void 0;var n=r(2265),o=r(90330);t.mockMediaQueryList={media:"",matches:!1,onchange:o.noop,addListener:o.noop,removeListener:o.noop,addEventListener:o.noop,removeEventListener:o.noop,dispatchEvent:function(e){return!0}};var A=function(e){return function(r,A){void 0===A&&(A=!1);var i=n.useState(A),a=i[0],s=i[1],l=o.queryObjectToString(r);return e(function(){var e=!0,r="undefined"==typeof window?t.mockMediaQueryList:window.matchMedia(l),n=function(){e&&s(!!r.matches)};return r.addListener(n),s(r.matches),function(){e=!1,r.removeListener(n)}},[l]),a}};t.useMedia=A(n.useEffect),t.useMediaLayout=A(n.useLayoutEffect),t.default=t.useMedia},46046:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}).toLowerCase()}},90330:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.noop=t.queryObjectToString=t.camelToHyphen=void 0;var n=r(46046);Object.defineProperty(t,"camelToHyphen",{enumerable:!0,get:function(){return n.default}});var o=r(31559);Object.defineProperty(t,"queryObjectToString",{enumerable:!0,get:function(){return o.default}});var A=r(69411);Object.defineProperty(t,"noop",{enumerable:!0,get:function(){return A.default}})},69411:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){}},31559:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(46046);t.default=function(e){return"string"==typeof e?e:Object.entries(e).map(function(e){var t=e[0],r=e[1],o=n.default(t),A=r;return"boolean"==typeof A?A?o:"not "+o:("number"==typeof A&&/[height|width]$/.test(o)&&(A+="px"),"("+o+": "+A+")")}).join(" and ")}},65066:function(e,t,r){"use strict";r.r(t),r.d(t,{ImageBlock:function(){return _}});var n=r(57437),o=r(2265),A=r(60438),i=r.n(A),a=r(20703),s=r(16480),l=r.n(s),u=r(73527);let c=e=>{let t=/\*\*(.*?)\*\*/g,r=/\[(.*?)\]\('(.*?)'\)/g,o=/\n/g,A=e=>e.split(o).flatMap((e,o)=>{let A=e.split(r).flatMap((A,i)=>{if(i%3==0)return A.split(t).map((e,t)=>t%2==1?(0,n.jsx)("b",{children:e},`bold-${o}-${i}-${t}`):e);if(i%3==1){let t=e.split(r)[i+1];return t.includes("#")?[(0,n.jsx)("a",{href:t,children:A},`link-${o}-${i}`)]:[(0,n.jsx)("a",{href:t,target:"_blank",rel:"noreferrer nofollow",children:A},`link-${o}-${i}`)]}return[]});return o>0?[(0,n.jsx)("br",{},`br-${o}`),...A]:A});return e.split(/\/s(.*?)\/s/g).flatMap((e,t)=>t%2==1?[(0,n.jsx)("span",{children:e},`span-${t}`)]:A(e))};function _(e){let{image:t,description:r,isSmall:A}=e,[s,_]=o.useState(!1);return(0,n.jsxs)("div",{className:l()(i().root,{[i().small]:A}),children:[(0,n.jsx)(a.default,{src:t,alt:"img"}),(0,n.jsx)("div",{className:i().icon_container,children:r&&(0,n.jsxs)("div",{className:i().icon_wrapper,children:[(0,n.jsx)(u.Z,{className:i().icon,onMouseEnter:()=>_(!0),onMouseLeave:()=>_(!1),onClick:()=>_(e=>!e)}),(0,n.jsx)("span",{className:l()(i().overlay,{[i().active]:s}),children:c(r)})]})})]})}},32658:function(e,t,r){"use strict";r.r(t),r.d(t,{ImagesBlock:function(){return d}});var n=r(57437);r(2265);var o=r(21974),A=r.n(o),i=r(20703),a={src:"/_next/static/media/img.f984b6f7.png",height:472,width:866,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAATlBMVEWin6qYkI3BfTHxs2nu1LCqoaZyiq7XxLro39Hh0sFUPElueJhYQ1fU8e9uYnUA//9BUYiyoJx2bYHYlUuPjJeziV/z16ny6d/YupaTfWxUwMNeAAAAEXRSTlPZ/v393+D++/fMYef+uKsF/kqF3JoAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAsSURBVHicY+DnFefgYGfnZOBikGAWExRkYeARkBQWYRNgZeDjFmViFBBiAAAb/QGGTKeqOgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:4},s={src:"/_next/static/media/imgLaptop.501f05d7.png",height:517,width:835,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAYFBMVEVMaXHToX3Vs4uGbnXn0bvi4ufa2t+Vmq3DsbpYaZT///9kVWjJ6fjhup7np1+qrL9SPkL59vSPjrrlx7XbwLTY2N2uqrXCtMLs1ruSg35WVHnIfSbLo3X658hZXIV+gp0+4HKFAAAAGHRSTlMAzftqsn5j+wz7J8jJvvx5QV7Jyvw1t9I7db/IAAAACXBIWXMAAAsTAAALEwEAmpwYAAAANUlEQVR4nGNg4BDkYWVjE2UQ4GaXkBWRYGFgluLkY2KXZ2Hg4JeRluSUE2Ng4OJlFBYSZwUALo4CMABva5cAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5},l={src:"/_next/static/media/imgTablet.73670aa5.png",height:564,width:821,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAV1BMVEX77fTV09Ofi3zUkEX949zl1O7m4uLp2vKNj59MaXHVo3H13bqmoK2DgI9VaJa619NzcZTDjlr/+9j34fTm0bSomqhoVFloaoqReYEAAAD60Z3Bq6ZVTGp4Y8y5AAAAGnRSTlNQpP37OmKjEvwA+v7y/P2u/v5CYPs4WNk/AwQ1lmMAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA0SURBVHicBcELAkAgEAXAt+wvoVBI3f+cZtAqqVIy3MO/2AvjfabZ9+1EwHJ4XhnBIJfAfi3iAc4t/vMLAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:5},u={src:"/_next/static/media/imgMobile.168b9943.png",height:430,width:358,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAe1BMVEXk5P/oq2GblZ7/6f/13fLj6/vx2sL29vvr39HZ5vP////Y0eyfmKb////KweFRY5Bwco12aHq4s726qbqvmahoaYy9p5tuYHA1SXbTv6zIk1vp5ub22bXs1K3UvbZnfabgz77E6PdFVo9aSWCGgZVfQz/7yY28safn8eq0iAglAAAAInRSTlME/f46JmvLEv44T9S2G9HS98q8Vpr9x/v9yP2pvv78/J31BKAYtwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEJJREFUeJwFwQUCwCAMBLCDAW3n7sr0/y9cAjmsESFMH/PKO9yjFv3OcGrUmx/Q3l3fXCXq0+dpZFEVWRwGBqCEAPx+QgOZkuIlywAAAABJRU5ErkJggg==",blurWidth:7,blurHeight:8},c=r(24843),_=r(2769);function d(){let e=(0,c.GS)(_.PJ),t=(0,c.GS)(_.Mq),r=(0,c.GS)(_.ai);return(0,n.jsx)("div",{className:A().root,children:(0,n.jsx)(i.default,{src:(()=>{switch(!0){case r:return u;case t:return l;case e:return s;default:return a}})(),alt:"image",width:700,height:500,quality:100})})}},2765:function(e,t,r){"use strict";r.r(t),r.d(t,{ImagesBlock:function(){return _}});var n=r(57437);r(2265);var o=r(89736),A=r.n(o),i=r(20703),a={src:"/_next/static/media/bestSite.b135fc42.webp",height:622,width:540,blurDataURL:"data:image/webp;base64,UklGRsAAAABXRUJQVlA4WAoAAAAQAAAABgAABwAAQUxQSDkAAAAAAE5gYBAAAABpf38XAAAAaYzdwZwAAGmS///WAJvQo///5yguODX//90PAAAl///WAAAAG8DAoQAAVlA4IGAAAADQAQCdASoHAAgAAkA4JQBOgCPmlRMdMAD+W+knaa1Lfh1JMak3NJ2jnjq7IMJlnlv/1bWIj6hwaryXjrv+6UX6akiP2tA3MzEBk03EUS/fIHRgpxpZgMeHNCdR2/5AAAA=",blurWidth:7,blurHeight:8},s={src:"/_next/static/media/bestSiteTablet.933462ed.png",height:398,width:295,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAXVBMVEVMaXHV2dfo2szUxrM+VoaQpK6VrNCUlsHHwb/V2Nnk29Hh3NJpdZiIibd9hZTc3Nn9//2dpaWIkLvX19f9//lDRVVKT6LGyeFelb3r4tdroL/q5+zI3OZlea7d1uxSx4oGAAAAG3RSTlMAQ282GQyDXCKbw7dm/cVSgJI8W4p1Ov2R4Xnqjg3SAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAO0lEQVR4nBXFSRKAIAwAwUGRJO47KOj/n2nZl2YVaQAJ4W+al6P3bPv4DCfqLZeEVl0uN3V7vdEBzkw/O3cCSSPQ1v4AAAAASUVORK5CYII=",blurWidth:6,blurHeight:8},l={src:"/_next/static/media/bestSiteMob.ab2545f9.webp",height:337,width:323,blurDataURL:"data:image/webp;base64,UklGRrwAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSEAAAAABYFJr25P3X9RAUeCPgMLPGtDgV8waEAOHJMO0KPTeGSIioNu2RQBIVTVl4UOq4TiOXDOj8XGneXmMIGwfgNT/VlA4IFYAAADQAQCdASoIAAgAAkA4JYwCdAD0MayFAAD+Tm6fbT//i4GwxSt4j41bIXvrL+ej5iEhrM9cJfqQn/6uc6LASWZOeCVNO+KWkRhkPjsE+MhEiVvoQEF4AA==",blurWidth:8,blurHeight:8},u=r(24843),c=r(2769);function _(){let e=(0,u.GS)(c.Mq),t=(0,u.GS)(c.ai);return(0,n.jsx)("div",{className:A().root,children:(0,n.jsx)(i.default,{src:(()=>{switch(!0){case t:return l;case e:return s;default:return a}})(),alt:"image",quality:100})})}},40117:function(e,t,r){"use strict";r.r(t),r.d(t,{RatingGridBlock:function(){return p}});var n,o=r(57437),A=r(2265),i=r(16480),a=r.n(i),s=r(14399),l=r.n(s),u=r(20703),c=r(52846);function _(){return(_=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var d=e=>c.createElement("svg",_({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 21 21"},e),n||(n=c.createElement("path",{stroke:"#fff",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m10.52 19.767 9.358-9.023m0 0-9.022-9.36m9.022 9.36-18.381-.336"})));function f(){return A.useEffect(()=>{let e=document.createElement("script");return e.type="text/javascript",e.async=!0,e.src="https://101hotels.com/widget/generator/128/652515/t-1/without-hover",document.head.appendChild(e),()=>{document.head.removeChild(e)}},[]),(0,o.jsx)("a",{target:"_blank",rel:"noreferrer nofollow",id:"hotels101_partner_widget_128",href:"https://101hotels.com/main/cities/sankt-peterburg/apart-otel_port_comfort_on_ligovskiy.html",children:(0,o.jsx)(u.default,{src:"https://101hotels.com/images/banner/101hotels_recommend.png",alt:"101hotels.com ����������� Port Comfort on Ligovskiy",width:100,height:100})})}function p(e){let{icon:t,title:r,reviewsNumber:n,rating:A,mainPage:i=!1,start:s,is101Hotel:c}=e;return(0,o.jsxs)("div",{className:a()(l().root,{[l().main]:i}),children:[c&&(0,o.jsx)(f,{}),(0,o.jsxs)("div",{className:a()(l().content,{[l().main]:i},{[l().init]:i},{[l().animate]:s&&i}),children:[(0,o.jsx)(u.default,{src:t,className:a()(l().icon,{[l().main]:i}),alt:"icon"}),(0,o.jsx)("span",{className:l().header,children:r}),(0,o.jsxs)("span",{children:["На основании ",(0,o.jsx)("b",{children:n})," ",(0,o.jsx)("br",{})," отзывов реальных клиентов."]}),(0,o.jsx)("div",{className:a()(l().rating,{[l().main]:i}),children:(0,o.jsxs)("span",{children:[A,(0,o.jsxs)("b",{children:["/",A>5?10:5]})]})})]}),(0,o.jsx)("div",{className:a()(l().bg,{[l().main]:i}),children:i&&(0,o.jsx)("div",{className:a()(l().arr_wrapper),children:(0,o.jsx)("div",{className:l().circle,children:(0,o.jsx)(d,{className:l().arr})})})})]})}},2769:function(e,t,r){"use strict";r.d(t,{Mq:function(){return A},PJ:function(){return o},ai:function(){return i},gv:function(){return n}});let n="(min-width: 1600px)",o="(max-width: 1600px)",A="(max-width: 1124px)",i="(max-width: 680px)"},60438:function(e){e.exports={root:"style_root__3LA__",small:"style_small__b27Xw",icon_container:"style_icon_container__23Drb",icon_wrapper:"style_icon_wrapper__cfuMT",icon:"style_icon__hnzLS",overlay:"style_overlay__Dzrwb",active:"style_active__MECW4"}},97543:function(e){e.exports={root:"style_root__FFvgE",small:"style_small__t83Hk",images:"style_images__6n30w",image_wrapper:"style_image_wrapper__k1Pqu"}},19857:function(e){e.exports={root:"style_root__W_CcF"}},21974:function(e){e.exports={root:"style_root__GTCcN"}},58295:function(e){e.exports={root:"style_root__Z2vXS"}},98515:function(e){e.exports={root:"style_root__6Bj2D"}},85252:function(e){e.exports={root:"style_root__yW7Hm",wrapper:"style_wrapper__H5m7B"}},89736:function(e){e.exports={root:"style_root__w_dHI"}},25650:function(e){e.exports={root:"style_root__k_W0h",tag:"style_tag__5TVI_"}},49076:function(e){e.exports={root:"style_root__vKIO7",wrapper:"style_wrapper__SFRte"}},85870:function(e){e.exports={root:"style_root___IX7t",wrapper:"style_wrapper__6W1JK",title:"style_title__GMSV4"}},27168:function(e){e.exports={root:"style_root__It54L",green:"style_green__oxzVa"}},38347:function(e){e.exports={root:"style_root__1Je0j",string:"style_string__Fxpn7",blue:"style_blue__LH5Jy",right:"style_right__Wpt4_",angle:"style_angle__qnwj5",one:"style_one__kPmAe",two:"style_two__2sqx2"}},46851:function(e){e.exports={angle:"style_angle__llpPU",left_bottom:"style_left_bottom__oHwdE",from_right_bottom:"style_from_right_bottom___8doH",from_left_top:"style_from_left_top__GqZQ7",left_top:"style_left_top__2F4Ih",from_right_top:"style_from_right_top__moHFr",from_left_bottom:"style_from_left_bottom__K4_yO",right_bottom:"style_right_bottom__PVpjs",right_top:"style_right_top__4bpQM"}},22674:function(e){e.exports={root:"style_root__l2h_E",green:"style_green__4REJO",purple:"style_purple__6MK8S",blue:"style_blue__Mg1eK",gray:"style_gray__tVyyC"}},36419:function(e){e.exports={root:"style_root__zqpVc",text:"style_text__htyNb",blog:"style_blog__nTe9e"}},39957:function(e){e.exports={root:"style_root__OFCvZ",link:"style_link__43urp",title:"style_title__3P7aj"}},62623:function(e){e.exports={root:"style_root__Wo8ft",span:"style_span__ScWxA"}},14399:function(e){e.exports={root:"style_root__9VfqG",content:"style_content__A0S1b",init:"style_init__o1Ugd",animate:"style_animate__46K72",bg:"style_bg__qLOTU",main:"style_main__WwlfT",header:"style_header__l3Kf6",icon:"style_icon__G4Ev2",rating:"style_rating__AzizZ",arr_wrapper:"style_arr_wrapper__QpavN",circle:"style_circle__m8tLZ",arr:"style_arr__Hqrmm"}},65296:function(e){e.exports={root:"style_root__y_szm",main:"style_main__cxJvM"}},38295:function(e){e.exports={main:"style_main__BWw_t",ratings:"style_ratings__vwVWM",title:"style_title__bg7uM",init:"style_init___VSQB",animate:"style_animate__F42S4",text:"style_text__neWJJ"}},52446:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/award1.2768d3ff.webp",height:179,width:316,blurDataURL:"data:image/webp;base64,UklGRoYAAABXRUJQVlA4WAoAAAAQAAAABwAABAAAQUxQSCkAAAAAS0UmJiYmJgz05dzi4+Leoufj3OXl5uGu5OLh3+Ti4a+wsbCysLCvaQBWUDggNgAAALABAJ0BKggABQACQDgljAJ0AQ67BIAA/vPQ/v/1eR/mcsiXhfXiChBIBDKDpYKcs11lAJIAAA==",blurWidth:8,blurHeight:5}},71533:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/award2.feb8dd66.webp",height:169,width:169,blurDataURL:"data:image/webp;base64,UklGRqwAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDIAAAABYBRJkqKRsky+j/lcMf8XRUTEBACv9zVHIA5rrV3QYJPZl1r+1DqnSnNHOwMz/2/PAVZQOCBUAAAA8AEAnQEqCAAIAAJAOCWgAnQEwAGmCHHgAP7opsL6V1zhbKLj4jVx60+dme+VblCgrN2TQ50cDj5W94ZOMY5qFW4KKv2BLY66vN70DXjyOd6UogAA",blurWidth:8,blurHeight:8}},90444:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/award2024.2c853e58.webp",height:102,width:300,blurDataURL:"data:image/webp;base64,UklGRnoAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAWZeqhY6nQT9ci4NQnF9oA2ZtbnZxXG9IAFZQOCA6AAAA0AEAnQEqCAADAAJAOCWQAnQA9IMF6AAA/evL0ZZs427KZp3GzC6NpHpK+dog+hXdnxFVHWuVtndgAA==",blurWidth:8,blurHeight:3}},45359:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/award3.c9fb2cdf.webp",height:195,width:112,blurDataURL:"data:image/webp;base64,UklGRp4AAABXRUJQVlA4WAoAAAAQAAAABAAABwAAQUxQSCgAAAABN6CmbSQ2d+UJ/V73j4jI4p8CCtlIgvYzWIGTu/PHOISI/sdePh0DVlA4IFAAAAAwAgCdASoFAAgAAkA4JbACdGuAt/8D0AVxQAD++VuHZIB5Vzvlmc/geoBW6V7WnxhYFOzDzjnYg+0BbMSdY3/+64i956/ZA4Cep/bBKAAAAA==",blurWidth:5,blurHeight:8}},1664:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/icon1.41309933.webp",height:44,width:42,blurDataURL:"data:image/webp;base64,UklGRm4AAABXRUJQVlA4IGIAAABwAgCdASoIAAgAAkA4JagCdLoBLfwJ/zMMB30AAP4IIZrU2pSyZ8+P4xX97b+RAZLaQPQ6s8fFE42+0Kd/QtO7jjtG4k78EU5SRA+7C/Ygw18uDW0r5n/HAKmK/vNBXAAAAA==",blurWidth:8,blurHeight:8}},24510:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/icon2.593c0ada.webp",height:44,width:42,blurDataURL:"data:image/webp;base64,UklGRrwAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDIAAAABT6CokSQ1uQwW9rWi4C4iYrB/FioGFMW2QYUQwlYIZWy1EOB3E6sQ0f9M0IPibQhzF1ZQOCBkAAAAMAIAnQEqCAAIAAJAOCWwAnS6AfgAAo+2nPAA/uioxD+v9eAfZzkSJe3azVmwrgVCBENdEOZnc6/Z7Mtgo3/sbzf9r7/2o+qP3PoChvXlUbf/b//843nt3g5DXOwK6tF/159AAA==",blurWidth:8,blurHeight:8}},1714:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/icon3.2349794e.webp",height:44,width:42,blurDataURL:"data:image/webp;base64,UklGRrYAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDsAAAABX6CmkRQ4y1b8NRVCkEVEhFw/rDI4FEWSGhUO0IEAvPDHBRJ4xwAmcoy+eIjof+oKGbADxbehB0zTBQBWUDggVAAAADACAJ0BKggACAACQDglsAJ0ugADGhhiiKwAAP6yKy2H0MVwazBhoIQmXA7Z/bMIAuZRGD2Nfc81QADaXQSUr/90AD9I1/84nfIKG+wgi/nMtdGAAA==",blurWidth:8,blurHeight:8}},21674:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/icon4.3a2f9030.webp",height:46,width:46,blurDataURL:"data:image/webp;base64,UklGRm4AAABXRUJQVlA4IGIAAADwAQCdASoIAAgAAkA4JbACdAEO9EBc34AA/urz1DOmfElkFJh31hM+njH8oaYSd2LXA9W3tE9zNqP+/D1X8//d7zn9F23v+hUyvP9JUtqr/gv1/0utxReWGM2/o3+KD4AAAA==",blurWidth:8,blurHeight:8}},16480:function(e,t){var r;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=A(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return o.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)n.call(e,r)&&e[r]&&(t=A(t,r));return t}(r)))}return e}function A(e,t){return t?e?e+" "+t:e+t:e}e.exports?(o.default=o,e.exports=o):void 0!==(r=(function(){return o}).apply(t,[]))&&(e.exports=r)}()}},function(e){e.O(0,[5250,1749,2971,8069,1744],function(){return e(e.s=30528)}),_N_E=e.O()}]);