(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9404],{74635:function(e,t,r){Promise.resolve().then(r.t.bind(r,25250,23)),Promise.resolve().then(r.bind(r,19721)),Promise.resolve().then(r.bind(r,26877)),Promise.resolve().then(r.t.bind(r,36419,23)),Promise.resolve().then(r.t.bind(r,39957,23)),Promise.resolve().then(r.t.bind(r,62623,23))},20703:function(e,t,r){"use strict";r.d(t,{default:function(){return s.a}});var n=r(67447),s=r.n(n)},8792:function(e,t,r){"use strict";r.d(t,{default:function(){return s.a}});var n=r(25250),s=r.n(n)},47907:function(e,t,r){"use strict";var n=r(15313);r.o(n,"usePathname")&&r.d(t,{usePathname:function(){return n.usePathname}}),r.o(n,"useRouter")&&r.d(t,{useRouter:function(){return n.useRouter}})},67447:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getImageProps:function(){return o},default:function(){return a}});let n=r(86921),s=r(38630),l=r(81749),i=n._(r(10536)),o=e=>{let{props:t}=(0,s.getImgProps)(e,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},a=l.Image},19721:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return s}});let n=r(99775);function s(e){let{reason:t,children:r}=e;if("undefined"==typeof window)throw new n.BailoutToCSRError(t);return r}},26877:function(e,t,r){"use strict";r.r(t),r.d(t,{Main:function(){return O}});var n,s,l,i=r(57437),o=r(2265);(n=s||(s={})).all="Все статьи",n.places="Достопримечательности",n.gastronomicGuide="Гастрономический гид",n.advices="Полезные советы",(l||(l={})).all="Все услуги";let a={spb:s,msk:l};var c=r(51189),u=r(78248),_=r.n(u),d=r(19357),f=r(68036),p=r(68100),h=r(1349),x=r.n(h),m=r(15776),b=r.n(m),y=r(20703),v=r(20884),g=r.n(v);function j(e){let{header:t,subheader:r,date:n}=e,s=Number(n.slice(0,2)),l=n.slice(2);return(0,i.jsxs)("div",{className:g().root,children:[(0,i.jsxs)("div",{className:g().date,children:[(0,i.jsx)("span",{children:s})," ",(0,i.jsx)("span",{children:l})]}),(0,i.jsx)("h2",{children:t}),r&&(0,i.jsx)("h3",{children:r})]})}var k=r(74898),N=r(8792);function S(e){let{item:t,link:r}=e;return(0,i.jsx)("div",{className:b().root,children:(0,i.jsxs)(N.default,{href:r,className:b().link,children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:b().image_wrapper,children:(0,i.jsx)(y.default,{src:t.image[1],alt:"main",className:b().image,width:600,height:600})}),(0,i.jsx)(j,{header:t.title,subheader:t.subtitle,date:t.date})]}),(0,i.jsx)("div",{className:b().button_wrapper,children:(0,i.jsx)(k.z,{green:!0,sm:!0,children:"Читать"})})]})})}let w=(e,t)=>{if(t.length<1)return!1;for(let r of t)if(e.includes(r))return!1;return!0};function P(e){let{selectedAttributes:t,cards:r}=e;return(0,i.jsx)("div",{className:x().root,children:Object.values(r).reverse().map((e,n)=>w(e.attributes,t)?null:(0,i.jsx)(S,{item:e,link:`/blog/${Object.keys(r).reverse()[n]}/`},n))})}function O(e){let{data:t}=e,[r,n]=o.useState(f.t.spb),[s,l]=o.useState([]);return(0,i.jsxs)(c.W,{as:"section",className:_().root,children:[(0,i.jsx)(d.a,{className:_().filter_city,selectedCity:r,setSelectedCity:n,setSelectedAttributes:l}),(0,i.jsx)(p.S,{className:_().filter_attributes,setSelectedAttributes:l,selectedAttributes:s,filters:Object.values(r===f.t.spb?a.spb:a.msk)}),(0,i.jsx)(P,{selectedAttributes:s,cards:t})]})}},58165:function(e,t,r){"use strict";r.d(t,{v:function(){return a}});var n=r(57437);r(2265);var s=r(25622),l=r.n(s),i=r(16480),o=r.n(i);function a(e){let{name:t,isChecked:r,handleClickFilter:s,isDisabled:i}=e;return(0,n.jsx)("div",{role:"checkbox","aria-checked":r,className:o()(l().root,{[l().active]:r},{[l().disabled]:i}),onClick:s(r,t),children:(0,n.jsx)("span",{children:t})})}},74898:function(e,t,r){"use strict";r.d(t,{z:function(){return a}});var n=r(57437);r(2265);var s=r(16480),l=r.n(s),i=r(55805),o=r.n(i);let a=e=>{let{className:t,xl:r=!1,l:s=!1,sm:i=!1,green:a=!1,purple:c=!1,purpleGradient:u=!1,onClick:_,type:d="button",...f}=e;return(0,n.jsx)("button",{...f,className:l()(o().root,{[o().green]:a,[o().purple]:c,[o().purpleGradient]:u,[o().xl]:r,[o().l]:s,[o().sm]:i},t),onClick:_,type:d})}},51189:function(e,t,r){"use strict";r.d(t,{W:function(){return a}});var n=r(57437);r(2265);var s=r(16480),l=r.n(s),i=r(89004),o=r.n(i);let a=e=>{let{as:t="div",className:r,children:s,...i}=e;return(0,n.jsx)(t,{className:l()(o().root,r),...i,children:s})}},68100:function(e,t,r){"use strict";r.d(t,{S:function(){return u}});var n=r(57437),s=r(2265),l=r(23147),i=r.n(l),o=r(16480),a=r.n(o),c=r(47907);function u(e){let{setSelectedAttributes:t,selectedAttributes:r,filters:l,className:o}=e,u=(0,c.useRouter)(),_=l[0],d=s.useCallback((e,r)=>()=>{if(e===_){if(r)return;return t([])}t(t=>r?t.filter(t=>t!==e):[...t,e])},[_,t]);return s.useEffect(()=>{let e=new URLSearchParams(window.location.search).get("filters");if(e){let r=[];e.split(",").forEach(e=>{l.forEach(t=>{let n=t.split(","),s=n.length>1&&n[0].length<6?n[0].length:6;t.slice(0,s)===e.slice(0,s)&&r.push(t)})}),t(r)}},[t]),s.useEffect(()=>{let e=new URLSearchParams;if(r.length>0){let t=[];r.forEach(e=>{t.push(e.replaceAll(",",""))}),console.log(),e.set("filters",t.join(","))}else e.delete("filters");u.replace(`?${e.toString()}`)},[r,u]),(0,n.jsx)("div",{className:a()(i().root,o),children:l.map((e,t)=>{let s=r.includes(e)||e===_&&r.length<1;return(0,n.jsxs)("div",{className:i().wrapper,onClick:d(e,s),onKeyPress:t=>{("Enter"===t.key||" "===t.key)&&(d(e,s)(),t.preventDefault())},tabIndex:0,role:"checkbox","aria-checked":s,children:[(0,n.jsx)("div",{className:a()(i().checkbox,{[i().selected]:s})}),(0,n.jsx)("span",{className:a()(i().text,{[i().selected]:s}),children:e})]},t)})})}},19357:function(e,t,r){"use strict";r.d(t,{a:function(){return _}});var n=r(57437),s=r(2265),l=r(38636),i=r.n(l),o=r(58165),a=r(68036),c=r(16480),u=r.n(c);function _(e){let{selectedCity:t,setSelectedCity:r,setSelectedAttributes:l,className:c}=e,_=s.useCallback((e,t)=>()=>{r(t),l([])},[r,l]);return(0,n.jsx)("div",{className:u()(i().root,c),children:Object.values(a.t).map((e,r)=>(0,n.jsx)(o.v,{name:e,isChecked:t===e,handleClickFilter:_,isDisabled:1===r},r))})}},68036:function(e,t,r){"use strict";var n,s;r.d(t,{t:function(){return n}}),(s=n||(n={})).spb="Санкт-Петербург",s.msk="Москва"},15776:function(e){e.exports={root:"style_root__QF6_e",link:"style_link__bxzoV",image_wrapper:"style_image_wrapper__q6TlO",image:"style_image__KlrgO",button_wrapper:"style_button_wrapper___KlOU"}},1349:function(e){e.exports={root:"style_root__ep_ad"}},20884:function(e){e.exports={root:"style_root__ZHQ6V",date:"style_date__sOIGp"}},25622:function(e){e.exports={root:"style_root__JDIIU",disabled:"style_disabled__oqTqu",active:"style_active__rqdkR"}},55805:function(e){e.exports={root:"style_root___A1MS",xl:"style_xl__yli9H",l:"style_l__hjHzz",sm:"style_sm__ASxbt",green:"style_green__WFoQ_",purple:"style_purple__4AXxg",purpleGradient:"style_purpleGradient__b0xM_"}},89004:function(e){e.exports={root:"style_root__FVTmd"}},36419:function(e){e.exports={root:"style_root__zqpVc",text:"style_text__htyNb",blog:"style_blog__nTe9e"}},39957:function(e){e.exports={root:"style_root__OFCvZ",link:"style_link__43urp",title:"style_title__3P7aj"}},62623:function(e){e.exports={root:"style_root__Wo8ft",span:"style_span__ScWxA"}},78248:function(e){e.exports={filter_city:"style_filter_city__xG99Z",filter_attributes:"style_filter_attributes__J8es0"}},23147:function(e){e.exports={root:"style_root___x2qJ",text:"style_text__2Ibqm",selected:"style_selected__mKLKX",wrapper:"style_wrapper__1Fdv4",checkbox:"style_checkbox__uxJER"}},38636:function(e){e.exports={root:"style_root__soNaN"}},16480:function(e,t){var r;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function s(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=l(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return s.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)n.call(e,r)&&e[r]&&(t=l(t,r));return t}(r)))}return e}function l(e,t){return t?e?e+" "+t:e+t:e}e.exports?(s.default=s,e.exports=s):void 0!==(r=(function(){return s}).apply(t,[]))&&(e.exports=r)}()}},function(e){e.O(0,[5250,1749,2971,8069,1744],function(){return e(e.s=74635)}),_N_E=e.O()}]);