(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9404],{74635:function(e,t,r){Promise.resolve().then(r.t.bind(r,25250,23)),Promise.resolve().then(r.bind(r,19721)),Promise.resolve().then(r.bind(r,26877)),Promise.resolve().then(r.t.bind(r,36419,23)),Promise.resolve().then(r.t.bind(r,39957,23)),Promise.resolve().then(r.t.bind(r,62623,23))},20703:function(e,t,r){"use strict";r.d(t,{default:function(){return s.a}});var n=r(67447),s=r.n(n)},8792:function(e,t,r){"use strict";r.d(t,{default:function(){return s.a}});var n=r(25250),s=r.n(n)},67447:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getImageProps:function(){return l},default:function(){return c}});let n=r(86921),s=r(38630),i=r(81749),o=n._(r(10536)),l=e=>{let{props:t}=(0,s.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},c=i.Image},19721:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return s}});let n=r(99775);function s(e){let{reason:t,children:r}=e;if("undefined"==typeof window)throw new n.BailoutToCSRError(t);return r}},26877:function(e,t,r){"use strict";r.r(t),r.d(t,{Main:function(){return C}});var n,s,i,o=r(57437),l=r(2265);(n=s||(s={})).all="Все статьи",n.places="Достопримечательности",(i||(i={})).all="Все услуги";let c={spb:s,msk:i};var a=r(51189),u=r(78248),_=r.n(u),d=r(19357),f=r(68036),p=r(68100),x=r(1349),b=r.n(x),m=r(15776),v=r.n(m),y=r(20703),h=r(20884),j=r.n(h);function g(e){let{header:t,subheader:r,date:n}=e,s=n.slice(0,2),i=n.slice(2);return(0,o.jsxs)("div",{className:j().root,children:[(0,o.jsxs)("div",{className:j().date,children:[(0,o.jsx)("span",{children:s})," ",(0,o.jsx)("span",{children:i})]}),(0,o.jsx)("h2",{children:t}),r&&(0,o.jsx)("h3",{children:r})]})}var k=r(74898),N=r(8792);function S(e){let{item:t,link:r}=e;return(0,o.jsx)("div",{className:v().root,children:(0,o.jsxs)(N.default,{href:r,children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:v().image_wrapper,children:(0,o.jsx)(y.default,{src:t.image[1],alt:"img",className:v().image,width:600,height:600})}),(0,o.jsx)(g,{header:t.title,subheader:t.subtitle,date:t.date})]}),(0,o.jsx)("div",{className:v().button_wrapper,children:(0,o.jsx)(k.z,{green:!0,sm:!0,children:"Читать"})})]})})}let w=(e,t)=>{if(t.length<1)return!1;for(let r of t)if(e.includes(r))return!1;return!0};function O(e){let{selectedAttributes:t,cards:r}=e;return(0,o.jsx)("div",{className:b().root,children:Object.values(r).map((e,n)=>w(e.attributes,t)?null:(0,o.jsx)(S,{item:e,link:`/blog/${Object.keys(r)[n]}/`},n))})}function C(e){let{data:t}=e,[r,n]=l.useState(f.t.spb),[s,i]=l.useState([]);return(0,o.jsxs)(a.W,{as:"section",className:_().root,children:[(0,o.jsx)(d.a,{className:_().filter_city,selectedCity:r,setSelectedCity:n,setSelectedAttributes:i}),(0,o.jsx)(p.S,{className:_().filter_attributes,setSelectedAttributes:i,selectedAttributes:s,filters:Object.values(r===f.t.spb?c.spb:c.msk)}),(0,o.jsx)(O,{selectedAttributes:s,cards:t})]})}},58165:function(e,t,r){"use strict";r.d(t,{v:function(){return c}});var n=r(57437);r(2265);var s=r(25622),i=r.n(s),o=r(16480),l=r.n(o);function c(e){let{name:t,isChecked:r,handleClickFilter:s,isDisabled:o}=e;return(0,n.jsx)("div",{role:"checkbox","aria-checked":r,className:l()(i().root,{[i().active]:r},{[i().disabled]:o}),onClick:s(r,t),children:(0,n.jsx)("span",{children:t})})}},74898:function(e,t,r){"use strict";r.d(t,{z:function(){return c}});var n=r(57437);r(2265);var s=r(16480),i=r.n(s),o=r(55805),l=r.n(o);let c=e=>{let{className:t,xl:r=!1,l:s=!1,sm:o=!1,green:c=!1,purple:a=!1,purpleGradient:u=!1,onClick:_,type:d="button",...f}=e;return(0,n.jsx)("button",{...f,className:i()(l().root,{[l().green]:c,[l().purple]:a,[l().purpleGradient]:u,[l().xl]:r,[l().l]:s,[l().sm]:o},t),onClick:_,type:d})}},51189:function(e,t,r){"use strict";r.d(t,{W:function(){return c}});var n=r(57437);r(2265);var s=r(16480),i=r.n(s),o=r(89004),l=r.n(o);let c=e=>{let{as:t="div",className:r,children:s,...o}=e;return(0,n.jsx)(t,{className:i()(l().root,r),...o,children:s})}},68100:function(e,t,r){"use strict";r.d(t,{S:function(){return a}});var n=r(57437),s=r(2265),i=r(23147),o=r.n(i),l=r(16480),c=r.n(l);function a(e){let{setSelectedAttributes:t,selectedAttributes:r,filters:i,className:l}=e,a=i[0],u=s.useCallback((e,r)=>()=>{if(e===a){if(r)return;if(!r)return t([])}return r?r?t(t=>t.filter(t=>t!==e)):void 0:t(t=>[...t,e])},[a,t]);return(0,n.jsx)("div",{className:c()(o().root,l),children:i.map((e,t)=>{let s=r.includes(e)||e===a&&r.length<1;return(0,n.jsxs)("div",{className:o().wrapper,onClick:u(e,s),children:[(0,n.jsx)("div",{className:c()(o().checkbox,{[o().selected]:s}),role:"checkbox","aria-checked":s}),(0,n.jsx)("span",{className:c()(o().text,{[o().selected]:s}),children:e})]},t)})})}},19357:function(e,t,r){"use strict";r.d(t,{a:function(){return _}});var n=r(57437),s=r(2265),i=r(38636),o=r.n(i),l=r(58165),c=r(68036),a=r(16480),u=r.n(a);function _(e){let{selectedCity:t,setSelectedCity:r,setSelectedAttributes:i,className:a}=e,_=s.useCallback((e,t)=>()=>{r(t),i([])},[r,i]);return(0,n.jsx)("div",{className:u()(o().root,a),children:Object.values(c.t).map((e,r)=>(0,n.jsx)(l.v,{name:e,isChecked:t===e,handleClickFilter:_,isDisabled:1===r},r))})}},68036:function(e,t,r){"use strict";var n,s;r.d(t,{t:function(){return n}}),(s=n||(n={})).spb="Санкт-Петербург",s.msk="Москва"},15776:function(e){e.exports={root:"style_root__QF6_e",image_wrapper:"style_image_wrapper__q6TlO",image:"style_image__KlrgO",button_wrapper:"style_button_wrapper___KlOU"}},1349:function(e){e.exports={root:"style_root__ep_ad"}},20884:function(e){e.exports={root:"style_root__ZHQ6V",date:"style_date__sOIGp"}},25622:function(e){e.exports={root:"style_root__JDIIU",disabled:"style_disabled__oqTqu",active:"style_active__rqdkR"}},55805:function(e){e.exports={root:"style_root___A1MS",xl:"style_xl__yli9H",l:"style_l__hjHzz",sm:"style_sm__ASxbt",green:"style_green__WFoQ_",purple:"style_purple__4AXxg",purpleGradient:"style_purpleGradient__b0xM_"}},89004:function(e){e.exports={root:"style_root__FVTmd"}},36419:function(e){e.exports={root:"style_root__zqpVc",text:"style_text__htyNb"}},39957:function(e){e.exports={root:"style_root__OFCvZ",link:"style_link__43urp",title:"style_title__3P7aj"}},62623:function(e){e.exports={root:"style_root__Wo8ft",span:"style_span__ScWxA"}},78248:function(e){e.exports={filter_city:"style_filter_city__xG99Z",filter_attributes:"style_filter_attributes__J8es0"}},23147:function(e){e.exports={root:"style_root___x2qJ",text:"style_text__2Ibqm",selected:"style_selected__mKLKX",wrapper:"style_wrapper__1Fdv4",checkbox:"style_checkbox__uxJER"}},38636:function(e){e.exports={root:"style_root__soNaN"}},16480:function(e,t){var r;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function s(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=i(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return s.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)n.call(e,r)&&e[r]&&(t=i(t,r));return t}(r)))}return e}function i(e,t){return t?e?e+" "+t:e+t:e}e.exports?(s.default=s,e.exports=s):void 0!==(r=(function(){return s}).apply(t,[]))&&(e.exports=r)}()}},function(e){e.O(0,[5250,1749,2971,8069,1744],function(){return e(e.s=74635)}),_N_E=e.O()}]);