(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9404],{74635:function(e,t,r){Promise.resolve().then(r.t.bind(r,25250,23)),Promise.resolve().then(r.bind(r,19721)),Promise.resolve().then(r.bind(r,47643)),Promise.resolve().then(r.t.bind(r,36419,23)),Promise.resolve().then(r.t.bind(r,39957,23)),Promise.resolve().then(r.t.bind(r,62623,23))},20703:function(e,t,r){"use strict";r.d(t,{default:function(){return n.a}});var s=r(67447),n=r.n(s)},8792:function(e,t,r){"use strict";r.d(t,{default:function(){return n.a}});var s=r(25250),n=r.n(s)},47907:function(e,t,r){"use strict";var s=r(15313);r.o(s,"usePathname")&&r.d(t,{usePathname:function(){return s.usePathname}}),r.o(s,"useRouter")&&r.d(t,{useRouter:function(){return s.useRouter}})},67447:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getImageProps:function(){return o},default:function(){return a}});let s=r(86921),n=r(38630),i=r(81749),l=s._(r(10536)),o=e=>{let{props:t}=(0,n.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},a=i.Image},19721:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return n}});let s=r(99775);function n(e){let{reason:t,children:r}=e;if("undefined"==typeof window)throw new s.BailoutToCSRError(t);return r}},47643:function(e,t,r){"use strict";r.r(t),r.d(t,{Main:function(){return C}});var s,n,i,l,o=r(57437),a=r(2265);(s=i||(i={})).all="Все статьи",s.places="Достопримечательности",s.gastronomicGuide="Гастрономический гид",s.advices="Полезные советы",s.parks="Сады и парки",s.promotions="Акции",s.guide="Гид",(n=l||(l={})).all="Все статьи",n.places="Достопримечательности",n.advices="Полезные советы",n.guide="Гид";let c={spb:i,msk:l};var u=r(51189),_=r(78248),d=r.n(_),f=r(68036),p=r(1349),b=r.n(p),y=r(15776),h=r.n(y),m=r(20703),x=r(20884),v=r.n(x);function g(e){let{header:t,subheader:r,date:s}=e,n=Number(s.slice(0,2)),i=s.slice(2);return(0,o.jsxs)("div",{className:v().root,children:[(0,o.jsxs)("div",{className:v().date,children:[(0,o.jsx)("span",{children:n})," ",(0,o.jsx)("span",{children:i})]}),(0,o.jsx)("h2",{children:t}),r&&(0,o.jsx)("h3",{children:r})]})}var j=r(74898),k=r(8792);function w(e){let{item:t,link:r}=e;return(0,o.jsx)("div",{className:h().root,children:(0,o.jsxs)(k.default,{href:r,className:h().link,children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:h().image_wrapper,children:(0,o.jsx)(m.default,{src:t.image[1],alt:"main",className:h().image,width:600,height:600})}),(0,o.jsx)(g,{header:t.title,subheader:t.subtitle,date:t.date})]}),(0,o.jsx)("div",{className:h().button_wrapper,children:(0,o.jsx)(j.z,{green:!0,sm:!0,children:"Читать"})})]})})}let N=(e,t)=>{if(t.length<1)return!1;for(let r of t)if(e.includes(r))return!1;return!0};function S(e){let{selectedAttributes:t,selectedCity:r,cards:s}=e;return(0,o.jsx)("div",{className:b().root,children:Object.values(s).reverse().map((e,n)=>e.city&&e.city!==r||N(e.attributes,t)?null:(0,o.jsx)(w,{item:e,link:`/blog/${Object.keys(s).reverse()[n]}/`},n))})}var P=r(2093);function C(e){let{data:t}=e,[r,s]=a.useState(f.t.spb),[n,i]=a.useState([]);return(0,o.jsxs)(u.W,{as:"section",className:d().root,children:[(0,o.jsx)(P.k,{selectedCity:r,setSelectedCity:s,setSelectedAttributes:i,selectedAttributes:n,filters:Object.values(r===f.t.spb?c.spb:c.msk),marginUnset:!0}),(0,o.jsx)(S,{selectedAttributes:n,cards:t,selectedCity:r})]})}},58165:function(e,t,r){"use strict";r.d(t,{v:function(){return a}});var s=r(57437);r(2265);var n=r(25622),i=r.n(n),l=r(16480),o=r.n(l);function a(e){let{name:t,isChecked:r,handleClickFilter:n,isDisabled:l}=e;return(0,s.jsx)("div",{role:"checkbox","aria-checked":r,className:o()(i().root,{[i().active]:r},{[i().disabled]:l}),onClick:n(r,t),children:(0,s.jsx)("span",{children:t})})}},74898:function(e,t,r){"use strict";r.d(t,{z:function(){return a}});var s=r(57437);r(2265);var n=r(16480),i=r.n(n),l=r(55805),o=r.n(l);let a=e=>{let{className:t,xl:r=!1,l:n=!1,sm:l=!1,green:a=!1,purple:c=!1,blue:u=!1,white:_=!1,purpleGradient:d=!1,onClick:f,type:p="button",isDisabled:b=!1,...y}=e;return(0,s.jsx)("button",{...y,className:i()(o().root,{[o().green]:a,[o().purple]:c,[o().white]:_,[o().blue]:u,[o().purpleGradient]:d,[o().xl]:r,[o().l]:n,[o().sm]:l,[o().disabled]:b},t),onClick:f,type:p,disabled:b})}},51189:function(e,t,r){"use strict";r.d(t,{W:function(){return a}});var s=r(57437);r(2265);var n=r(16480),i=r.n(n),l=r(89004),o=r.n(l);let a=e=>{let{as:t="div",className:r,children:n,...l}=e;return(0,s.jsx)(t,{className:i()(o().root,r),...l,children:n})}},75631:function(e,t,r){"use strict";var s,n,i,l;r.d(t,{attributes:function(){return s},cities:function(){return n}}),(i=s||(s={})).all="Все объекты",i.kids="Можно с детьми",i.pets="Можно с питомцами",i.breakfast="С завтраком",i.buffet="\xabШведский стол\xbb",i.star3="Отели 3",i.star4="Отели 4",(l=n||(n={})).spb="Санкт-Петербург",l.msk="Москва"},2093:function(e,t,r){"use strict";r.d(t,{k:function(){return x}});var s=r(57437),n=r(2265),i=r(18500),l=r.n(i),o=r(38636),a=r.n(o),c=r(58165),u=r(68036),_=r(16480),d=r.n(_);function f(e){let{selectedCity:t,setSelectedCity:r,setSelectedAttributes:i,className:l,isDisabledMSK:o}=e,_=n.useCallback((e,t)=>()=>{r(t),i([])},[r,i]);return(0,s.jsx)("div",{className:d()(a().root,l),children:Object.values(u.t).map((e,r)=>(0,s.jsx)(c.v,{name:e,isChecked:t===e,handleClickFilter:_,isDisabled:o&&1===r},r))})}var p=r(23147),b=r.n(p);function y(e){let{setSelectedAttributes:t,selectedAttributes:r,filters:i,className:l}=e,o=i[0],a=n.useCallback((e,r)=>()=>{if(e===o){if(r)return;return t([])}t(t=>r?t.filter(t=>t!==e):[...t,e])},[o,t]);return(0,s.jsx)("div",{className:d()(b().root,l),children:i.map((e,t)=>{let n=r.includes(e)||e===o&&r.length<1;return(0,s.jsxs)("div",{className:b().wrapper,onClick:a(e,n),onKeyPress:t=>{("Enter"===t.key||" "===t.key)&&(a(e,n)(),t.preventDefault())},tabIndex:0,role:"checkbox","aria-checked":n,children:[(0,s.jsx)("div",{className:d()(b().checkbox,{[b().selected]:n})}),(0,s.jsx)("span",{className:d()(b().text,{[b().selected]:n}),children:e})]},t)})})}var h=r(47907),m=r(75631);function x(e){let{isCityFilter:t=!0,selectedCity:r,setSelectedCity:i,setSelectedAttributes:o,selectedAttributes:a,filters:c,marginUnset:u=!1,isDisabledMskTag:_}=e,p=n.useRef(!0),b=(0,h.useRouter)();return n.useEffect(()=>{let e=new URLSearchParams(window.location.search),t=e.get("filters");if(t){let e=[];t.split(",").forEach(t=>{c.forEach(r=>{let s=r.split(","),n=s.length>1&&s[0].length<6?s[0].length:6;r.slice(0,n)===t.slice(0,n)&&e.push(r)})}),o(e)}let r=e.get("city");r&&("М"===r[0]||"м"===r[0])&&i(m.cities.msk)},[o,i]),n.useEffect(()=>{if(p.current){p.current=!1;return}let e=new URLSearchParams(window.location.search);if(a.length>0){let t=a.map(e=>e.replaceAll(",",""));e.set("filters",t.join(","))}else e.delete("filters");r===m.cities.msk?e.set("city",r):e.delete("city"),b.replace(`?${e.toString()}`)},[a,r,b]),(0,s.jsxs)(s.Fragment,{children:[t&&(0,s.jsx)(f,{className:d()({[l().filter_city]:u}),selectedCity:r,setSelectedCity:i,setSelectedAttributes:o,isDisabledMSK:_}),(0,s.jsx)(y,{className:d()({[l().filter_attributes]:u}),setSelectedAttributes:o,selectedAttributes:a,filters:c})]})}},68036:function(e,t,r){"use strict";var s,n;r.d(t,{t:function(){return s}}),(n=s||(s={})).spb="Санкт-Петербург",n.msk="Москва"},15776:function(e){e.exports={root:"style_root__QF6_e",link:"style_link__bxzoV",image_wrapper:"style_image_wrapper__q6TlO",image:"style_image__KlrgO",button_wrapper:"style_button_wrapper___KlOU"}},1349:function(e){e.exports={root:"style_root__ep_ad"}},20884:function(e){e.exports={root:"style_root__ZHQ6V",date:"style_date__sOIGp"}},25622:function(e){e.exports={root:"style_root__JDIIU",disabled:"style_disabled__oqTqu",active:"style_active__rqdkR"}},55805:function(e){e.exports={root:"style_root___A1MS",xl:"style_xl__yli9H",l:"style_l__hjHzz",sm:"style_sm__ASxbt",green:"style_green__WFoQ_",purple:"style_purple__4AXxg",purpleGradient:"style_purpleGradient__b0xM_",blue:"style_blue__WkQ0f",white:"style_white__w9eTR",disabled:"style_disabled__urijk"}},89004:function(e){e.exports={root:"style_root__FVTmd"}},36419:function(e){e.exports={root:"style_root__zqpVc",text:"style_text__htyNb",blog:"style_blog__nTe9e"}},39957:function(e){e.exports={root:"style_root__OFCvZ",link:"style_link__43urp",title:"style_title__3P7aj"}},62623:function(e){e.exports={root:"style_root__Wo8ft",span:"style_span__ScWxA"}},78248:function(e){e.exports={filter_city:"style_filter_city__xG99Z",filter_attributes:"style_filter_attributes__J8es0"}},23147:function(e){e.exports={root:"style_root___x2qJ",text:"style_text__2Ibqm",selected:"style_selected__mKLKX",wrapper:"style_wrapper__1Fdv4",checkbox:"style_checkbox__uxJER"}},38636:function(e){e.exports={root:"style_root__soNaN"}},18500:function(e){e.exports={filter_city:"style_filter_city__mdBPX",filter_attributes:"style_filter_attributes__dsI8f"}},16480:function(e,t){var r;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var s={}.hasOwnProperty;function n(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=i(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return n.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)s.call(e,r)&&e[r]&&(t=i(t,r));return t}(r)))}return e}function i(e,t){return t?e?e+" "+t:e+t:e}e.exports?(n.default=n,e.exports=n):void 0!==(r=(function(){return n}).apply(t,[]))&&(e.exports=r)}()}},function(e){e.O(0,[5250,1749,2971,8069,1744],function(){return e(e.s=74635)}),_N_E=e.O()}]);