(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7341],{77341:function(t,e,r){"use strict";r.r(e),r.d(e,{InNumbers:function(){return x}});var n=r(57437);r(2265);var i=r(33284),s=r.n(i),a=r(51189),o=r(16480),l=r.n(o),c=r(65296),A=r.n(c),d=r(1664),u=r(24510),h=r(1714),m=r(21674),_=r(40117);let g=[{title:"Островок",icon:d.default,reviewsNumber:"600+",rating:8.2},{title:"Я.Путешествия",icon:u.default,reviewsNumber:"2 300+",rating:4.6},{title:"101 Отель",icon:h.default,reviewsNumber:"500+",rating:9.4},{title:"2ГИС",icon:m.default,reviewsNumber:"450+",rating:4.1}],f=t=>{let{className:e,mainPage:r=!1,start:i}=t;return(0,n.jsx)("div",{className:l()(A().root,{[A().main]:r},e),children:g.map((t,e)=>{let{icon:s,title:a,reviewsNumber:o,rating:l}=t;return(0,n.jsx)(_.RatingGridBlock,{icon:s,title:a,reviewsNumber:o,rating:l,mainPage:r,start:i,is101Hotel:2===e},e)})})};var b=r(38295),w=r.n(b);function v(t){let{ratingsPage:e,mainPage:r,start:i}=t;return(0,n.jsxs)("div",{className:l()(w().root,{[w().ratings]:e},{[w().main]:r}),children:[(0,n.jsx)("h2",{className:l()(w().title,{[w().init]:r},{[w().animate]:r&&i}),children:"Port Comfort в цифрах"}),(0,n.jsxs)("p",{className:l()(w().text,{[w().init]:r},{[w().animate]:r&&i}),children:[(0,n.jsx)("b",{children:"9 апарт-отелей"})," 3 и 4 звезды в лучших локациях Петербурга и Москвы. ",(0,n.jsx)("br",{}),(0,n.jsx)("b",{children:"64 240 туристов посетило наши отели в 2023 году"})]})]})}var p=r(68289);function x(){let{ref:t,startAnimate:e}=(0,p._)();return(0,n.jsx)("section",{className:s().root,ref:t,children:(0,n.jsxs)(a.W,{className:s().container,children:[(0,n.jsx)(v,{mainPage:!0,start:e}),(0,n.jsx)(f,{mainPage:!0,start:e})]})})}},40117:function(t,e,r){"use strict";r.r(e),r.d(e,{RatingGridBlock:function(){return _}});var n,i=r(57437),s=r(2265),a=r(16480),o=r.n(a),l=r(14399),c=r.n(l),A=r(20703),d=r(52846);function u(){return(u=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}var h=t=>d.createElement("svg",u({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 21 21"},t),n||(n=d.createElement("path",{stroke:"#fff",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m10.52 19.767 9.358-9.023m0 0-9.022-9.36m9.022 9.36-18.381-.336"})));function m(){return s.useEffect(()=>{let t=document.createElement("script");return t.type="text/javascript",t.async=!0,t.src="https://101hotels.com/widget/generator/128/652515/t-1/without-hover",document.head.appendChild(t),()=>{document.head.removeChild(t)}},[]),(0,i.jsx)("a",{target:"_blank",rel:"noreferrer nofollow",id:"hotels101_partner_widget_128",href:"https://101hotels.com/main/cities/sankt-peterburg/apart-otel_port_comfort_on_ligovskiy.html",children:(0,i.jsx)(A.default,{src:"https://101hotels.com/images/banner/101hotels_recommend.png",alt:"101hotels.com ����������� Port Comfort on Ligovskiy",width:100,height:100})})}function _(t){let{icon:e,title:r,reviewsNumber:n,rating:s,mainPage:a=!1,start:l,is101Hotel:d}=t;return(0,i.jsxs)("div",{className:o()(c().root,{[c().main]:a}),children:[d&&(0,i.jsx)(m,{}),(0,i.jsxs)("div",{className:o()(c().content,{[c().main]:a},{[c().init]:a},{[c().animate]:l&&a}),children:[(0,i.jsx)(A.default,{src:e,className:o()(c().icon,{[c().main]:a}),alt:"icon"}),(0,i.jsx)("span",{className:c().header,children:r}),(0,i.jsxs)("span",{children:["На основании ",(0,i.jsx)("b",{children:n})," ",(0,i.jsx)("br",{})," отзывов реальных клиентов."]}),(0,i.jsx)("div",{className:o()(c().rating,{[c().main]:a}),children:(0,i.jsxs)("span",{children:[s,(0,i.jsxs)("b",{children:["/",s>5?10:5]})]})})]}),(0,i.jsx)("div",{className:o()(c().bg,{[c().main]:a}),children:a&&(0,i.jsx)("div",{className:o()(c().arr_wrapper),children:(0,i.jsx)("div",{className:c().circle,children:(0,i.jsx)(h,{className:c().arr})})})})]})}},68289:function(t,e,r){"use strict";r.d(e,{_:function(){return A}});var n=r(2265),i=Object.defineProperty,s=new Map,a=new WeakMap,o=0,l=void 0;n.Component;var c=r(64496);function A(){let{ref:t,inView:e}=function(){var t;let{threshold:e,delay:r,trackVisibility:i,rootMargin:c,root:A,triggerOnce:d,skip:u,initialInView:h,fallbackInView:m,onChange:_}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[g,f]=n.useState(null),b=n.useRef(),[w,v]=n.useState({inView:!!h,entry:void 0});b.current=_,n.useEffect(()=>{let t;if(!u&&g)return t=function(t,e){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:l;if(void 0===window.IntersectionObserver&&void 0!==n){let i=t.getBoundingClientRect();return e(n,{isIntersecting:n,target:t,intersectionRatio:"number"==typeof r.threshold?r.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}let{id:i,observer:c,elements:A}=function(t){let e=Object.keys(t).sort().filter(e=>void 0!==t[e]).map(e=>{var r;return`${e}_${"root"===e?(r=t.root)?(a.has(r)||(o+=1,a.set(r,o.toString())),a.get(r)):"0":t[e]}`}).toString(),r=s.get(e);if(!r){let n;let i=new Map,a=new IntersectionObserver(e=>{e.forEach(e=>{var r;let s=e.isIntersecting&&n.some(t=>e.intersectionRatio>=t);t.trackVisibility&&void 0===e.isVisible&&(e.isVisible=s),null==(r=i.get(e.target))||r.forEach(t=>{t(s,e)})})},t);n=a.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),r={id:e,observer:a,elements:i},s.set(e,r)}return r}(r),d=A.get(t)||[];return A.has(t)||A.set(t,d),d.push(e),c.observe(t),function(){d.splice(d.indexOf(e),1),0===d.length&&(A.delete(t),c.unobserve(t)),0===A.size&&(c.disconnect(),s.delete(i))}}(g,(e,r)=>{v({inView:e,entry:r}),b.current&&b.current(e,r),r.isIntersecting&&d&&t&&(t(),t=void 0)},{root:A,rootMargin:c,threshold:e,trackVisibility:i,delay:r},m),()=>{t&&t()}},[Array.isArray(e)?e.toString():e,g,A,c,d,u,i,m,r]);let p=null==(t=w.entry)?void 0:t.target,x=n.useRef();g||!p||d||u||x.current===p||(x.current=p,v({inView:!!h,entry:void 0}));let y=[f,w.inView,w.entry];return y.ref=y[0],y.inView=y[1],y.entry=y[2],y}({rootMargin:"-100px"});return{ref:t,startAnimate:(0,c.B)(e)}}},33284:function(t){t.exports={root:"style_root__vpcZs",container:"style_container__fM1ri"}},14399:function(t){t.exports={root:"style_root__9VfqG",content:"style_content__A0S1b",init:"style_init__o1Ugd",animate:"style_animate__46K72",bg:"style_bg__qLOTU",main:"style_main__WwlfT",header:"style_header__l3Kf6",icon:"style_icon__G4Ev2",rating:"style_rating__AzizZ",arr_wrapper:"style_arr_wrapper__QpavN",circle:"style_circle__m8tLZ",arr:"style_arr__Hqrmm"}},65296:function(t){t.exports={root:"style_root__y_szm",main:"style_main__cxJvM"}},38295:function(t){t.exports={main:"style_main__BWw_t",ratings:"style_ratings__vwVWM",title:"style_title__bg7uM",init:"style_init___VSQB",animate:"style_animate__F42S4",text:"style_text__neWJJ"}},1664:function(t,e,r){"use strict";r.r(e),e.default={src:"/_next/static/media/icon1.41309933.webp",height:44,width:42,blurDataURL:"data:image/webp;base64,UklGRm4AAABXRUJQVlA4IGIAAABwAgCdASoIAAgAAkA4JagCdLoBLfwJ/zMMB30AAP4IIZrU2pSyZ8+P4xX97b+RAZLaQPQ6s8fFE42+0Kd/QtO7jjtG4k78EU5SRA+7C/Ygw18uDW0r5n/HAKmK/vNBXAAAAA==",blurWidth:8,blurHeight:8}},24510:function(t,e,r){"use strict";r.r(e),e.default={src:"/_next/static/media/icon2.593c0ada.webp",height:44,width:42,blurDataURL:"data:image/webp;base64,UklGRrwAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDIAAAABT6CokSQ1uQwW9rWi4C4iYrB/FioGFMW2QYUQwlYIZWy1EOB3E6sQ0f9M0IPibQhzF1ZQOCBkAAAAMAIAnQEqCAAIAAJAOCWwAnS6AfgAAo+2nPAA/uioxD+v9eAfZzkSJe3azVmwrgVCBENdEOZnc6/Z7Mtgo3/sbzf9r7/2o+qP3PoChvXlUbf/b//843nt3g5DXOwK6tF/159AAA==",blurWidth:8,blurHeight:8}},1714:function(t,e,r){"use strict";r.r(e),e.default={src:"/_next/static/media/icon3.2349794e.webp",height:44,width:42,blurDataURL:"data:image/webp;base64,UklGRrYAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDsAAAABX6CmkRQ4y1b8NRVCkEVEhFw/rDI4FEWSGhUO0IEAvPDHBRJ4xwAmcoy+eIjof+oKGbADxbehB0zTBQBWUDggVAAAADACAJ0BKggACAACQDglsAJ0ugADGhhiiKwAAP6yKy2H0MVwazBhoIQmXA7Z/bMIAuZRGD2Nfc81QADaXQSUr/90AD9I1/84nfIKG+wgi/nMtdGAAA==",blurWidth:8,blurHeight:8}},21674:function(t,e,r){"use strict";r.r(e),e.default={src:"/_next/static/media/icon4.3a2f9030.webp",height:46,width:46,blurDataURL:"data:image/webp;base64,UklGRm4AAABXRUJQVlA4IGIAAADwAQCdASoIAAgAAkA4JbACdAEO9EBc34AA/urz1DOmfElkFJh31hM+njH8oaYSd2LXA9W3tE9zNqP+/D1X8//d7zn9F23v+hUyvP9JUtqr/gv1/0utxReWGM2/o3+KD4AAAA==",blurWidth:8,blurHeight:8}}}]);