(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3802],{91797:function(e,t,r){Promise.resolve().then(r.t.bind(r,25250,23)),Promise.resolve().then(r.bind(r,19721)),Promise.resolve().then(r.t.bind(r,61622,23)),Promise.resolve().then(r.t.bind(r,55805,23)),Promise.resolve().then(r.bind(r,40701)),Promise.resolve().then(r.t.bind(r,36419,23)),Promise.resolve().then(r.t.bind(r,62623,23)),Promise.resolve().then(r.t.bind(r,39957,23))},47907:function(e,t,r){"use strict";var s=r(15313);r.o(s,"usePathname")&&r.d(t,{usePathname:function(){return s.usePathname}}),r.o(s,"useRouter")&&r.d(t,{useRouter:function(){return s.useRouter}})},19721:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return n}});let s=r(99775);function n(e){let{reason:t,children:r}=e;if("undefined"==typeof window)throw new s.BailoutToCSRError(t);return r}},58165:function(e,t,r){"use strict";r.d(t,{v:function(){return a}});var s=r(57437);r(2265);var n=r(25622),i=r.n(n),o=r(16480),l=r.n(o);function a(e){let{name:t,isChecked:r,handleClickFilter:n,isDisabled:o}=e;return(0,s.jsx)("div",{role:"checkbox","aria-checked":r,className:l()(i().root,{[i().active]:r},{[i().disabled]:o}),onClick:n(r,t),children:(0,s.jsx)("span",{children:t})})}},74898:function(e,t,r){"use strict";r.d(t,{z:function(){return a}});var s=r(57437);r(2265);var n=r(16480),i=r.n(n),o=r(55805),l=r.n(o);let a=e=>{let{className:t,xl:r=!1,l:n=!1,sm:o=!1,green:a=!1,purple:c=!1,blue:u=!1,white:A=!1,purpleGradient:d=!1,onClick:_,type:h="button",...p}=e;return(0,s.jsx)("button",{...p,className:i()(l().root,{[l().green]:a,[l().purple]:c,[l().white]:A,[l().blue]:u,[l().purpleGradient]:d,[l().xl]:r,[l().l]:n,[l().sm]:o},t),onClick:_,type:h})}},51189:function(e,t,r){"use strict";r.d(t,{W:function(){return a}});var s=r(57437);r(2265);var n=r(16480),i=r.n(n),o=r(89004),l=r.n(o);let a=e=>{let{as:t="div",className:r,children:n,...o}=e;return(0,s.jsx)(t,{className:i()(l().root,r),...o,children:n})}},75631:function(e,t,r){"use strict";var s,n,i,o;r.d(t,{attributes:function(){return s},cities:function(){return n}}),(i=s||(s={})).all="Все объекты",i.kids="Можно с детьми",i.pets="Можно с питомцами",i.breakfast="С завтраком",i.buffet="\xabШведский стол\xbb",i.star3="Отели 3",i.star4="Отели 4",(o=n||(n={})).spb="Санкт-Петербург",o.msk="Москва"},31552:function(e,t,r){"use strict";r.d(t,{u:function(){return m}});var s,n=r(57437),i=r(2265),o=r(54887),l=r(16480),a=r.n(l),c=r(70530),u=r.n(c),A=r(20703),d={src:"/_next/static/media/bg.02ec252e.webp",height:1064,width:1920,blurDataURL:"data:image/webp;base64,UklGRnAAAABXRUJQVlA4WAoAAAAQAAAABwAAAwAAQUxQSAoAAAABB9DtiAhERP8DVlA4IEAAAADwAQCdASoIAAQAAkA4JbACdAEWTzLprAAA/u9UcXhUSw9ePiC/+cS//W3/gL4H/gQRjNUEwp9LhiyPU+FHGgAA",blurWidth:8,blurHeight:4},_=r(24843),h=r(52846);function p(){return(p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e}).apply(this,arguments)}var f=e=>h.createElement("svg",p({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20"},e),s||(s=h.createElement("path",{stroke:"#fff",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m1 1 18 18m0-18L1 19"})));let m=e=>{let{isOpen:t,close:r,className:s,classNameWrapper:l,classNameOverlay:c,classNameContent:h,children:p,mobileCloseIcon:m=!0,opacityBG:x=1,notDelayed:g=!1}=e,[v,y]=i.useState(!1),[b,w]=i.useState(t),[j,k]=i.useState(!1),E=(0,_.GS)({maxWidth:"680px"}),S=i.useCallback(e=>{"Escape"===e.key&&r()},[r]);return(i.useEffect(()=>(document.addEventListener("keydown",S),()=>{document.removeEventListener("keydown",S)}),[S]),i.useEffect(()=>{let e=document.querySelector("body");if(e){if(b)e.style.overflowY="hidden";else{let t=setTimeout(()=>e.style.overflowY="auto",150);return()=>clearTimeout(t)}}},[b]),i.useEffect(()=>{if(b)k(!0);else{let e=setTimeout(()=>{k(!1)},600);return()=>clearTimeout(e)}},[b]),i.useEffect(()=>{let e,r;return t?(y(t),e=setTimeout(()=>w(t),10)):(e=setTimeout(()=>w(t),10),r=setTimeout(()=>y(t),300)),()=>{clearTimeout(e),r&&clearTimeout(r)}},[t]),v)?o.createPortal((0,n.jsx)("div",{className:a()(u().root,s,{[u().active]:b}),children:(0,n.jsxs)("div",{className:a()(u().wrapper,l),children:[(0,n.jsxs)("div",{className:a()(u().overlay,c),onClick:r,children:[E&&m&&(0,n.jsx)(f,{className:u().close_icon}),(0,n.jsx)(A.default,{src:d,alt:"bg",sizes:"100vw",style:{opacity:x},className:u().bg})]}),(0,n.jsx)("div",{className:a()(u().content,{[u().active]:b},{[u().not_delayed]:g},h),children:j&&p})]})}),document.body):(0,n.jsx)(n.Fragment,{})}},40701:function(e,t,r){"use strict";r.r(t),r.d(t,{Entertainment:function(){return ew}});var s,n,i,o,l=r(57437),a=r(2265),c=r(78248),u=r.n(c),A=r(51189),d=r(27601),_=r.n(d),h=r(52846);function p(){return(p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e}).apply(this,arguments)}var f=e=>h.createElement("svg",p({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20"},e),s||(s=h.createElement("path",{stroke:"#fff",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"m1 1 18 18m0-18L1 19"}))),m=r(20703),x=r(74898);let g=[{title:"Port Comfort on Ligovskiy",location:"Санкт-Петербург, Лиговский пр., 29",href:"https://shop.hotbot.ai/portcomfortligovskiy",image:{src:"/_next/static/media/img1.db9ee20b.png",height:165,width:165,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAY1BMVEVOSUNvdHpRT02Gi5BsV0MuND5ES1SgdEsDCRa33v92aWBnXlknMTtHRERMTlSTl5mjr7hXW2B9cWdmZmiUjIVfVU9qeYo3QUu/w8qtopyDenVtYVhhTTl3WD3DtqSNs9Y6OT2Aiz0GAAAACnRSTlPC/////s3//sX92Bsn6wAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEVJREFUeJwFwQUCgDAMBLBrCx1MmOL6/1eSoH9HYWbgi6kyCaN7JFOKAaZR3TdR3JNmWkhh2uF0nRRXOYu1LmDw3js74wdnLAML/wtxXQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},{title:"Port Comfort by the Griboedov",location:"Санкт-Петербург, ул. Бол. Подьяческая, 19",href:"https://shop.hotbot.ai/portcomfortgriboedov",image:{src:"/_next/static/media/img2.c29d5f53.png",height:165,width:165,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAYFBMVEV+cW55eIKTlKCOiI1uaGwcP0uGhpCHh5BsanFiVFKoq7xlVU6amqaboK2ho7IQR2B+f4m4uMWTjZSEjpshYoa+wdCrqbB1hJSMm6+nqLhgTUWJfX1DaYA1RE0UO0w+SU6gBt3SAAAACnRSTlP+/////b7/xs3FWJErUgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEdJREFUeJwVxkkSgCAMBMAh0agJCALu2/9/admnRs+chKSDy0EceYdppCDj/Mf7pKpYdl1L2ApAp121Rpgddj8xYgBnbt72A2GzAxqe+Fj3AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},{title:"Port Comfort by the Gostiniy Dvor",location:"Санкт-Петербург, ул. Садовая, 28-30, к1",href:"https://shop.hotbot.ai/portcomfortgostiniy",image:{src:"/_next/static/media/img3.ce36c6f7.png",height:165,width:165,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAdVBMVEWkqKl3foZkbne2sKqAlZBoZ3M3NTFci5+5sKmJkZVYe4K6uLlehZGJlp6hsbvGuaiwrrB6goKYrLNUZ2wsXmzs3tq7wNjHxMbJvrutsLCwtrfZz84bS1Boe4Px8PlqkploY2lDVVx0dX0HISaIpbofO0KvvNVrfZzjAAAAEXRSTlP+vv3//cX+/s3G/////////vrVJBIAAAAJcEhZcwAACxMAAAsTAQCanBgAAABGSURBVHicBcEFAkBAFAXAx8ey3brj/kc0g5YghB06GLI9xlnCkJuk3hiInN914hBqUdwnjmqNXD6ZIRxn0PmLqK/mfktV/IOjBA+pXhXzAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},{title:"Port Comfort by Moyka",location:"Санкт-Петербург, пер. Гривцова, 4к2, лит А",href:"https://shop.hotbot.ai/portcomfortmoyka/",image:{src:"/_next/static/media/img4.3b5f34fc.png",height:165,width:165,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAaVBMVEWmpqxqa2xHOitVRztjV01uTjF9dW2KgHmad0y0sq88MyycfFxmYWCbmqGDgoSfoKlyc3VVVVWUkIyknJemkHQqPVZUQzFLS00cGhljVUiSlpqcd0uLlaFYTUZwXkuTcksoLTQ0JxmGbVES63wSAAAACnRSTlP+/////cX/yr7+apDA+QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEdJREFUeJwVxkcSgCAQBMABdFGSkjGH/z/Ssk8NaTFZRImwwgZHBuPuzKI8Q1RFCM5mUFPC/+nKeWROBH29NeuU0D/trnobPnAXA4tKNnBjAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},{title:"Port Comfort by Sennaya Square",location:"Санкт-Петербург, ул. Садовая, 53",href:"https://shop.hotbot.ai/portcomfortsennaya",image:{src:"/_next/static/media/img5.8c63ed25.png",height:165,width:165,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAYFBMVEWGhoKEgXiTj4OQk5VxY0iXmp2cnpyOko6Wj3+nsbmloZdeUUKMioOOhXqqrK1xdG/U2dOqs71lW0iEd2FcYV5zbGOfloWho6HDwraKgHB3gYMvOzyZqLpKPC+QhGhKWFTqt30MAAAAEnRSTlP+////xf//xr7N//////7///60Ld7xAAAACXBIWXMAAAsTAAALEwEAmpwYAAAARUlEQVR4nAXBBwKAIAwEsIPaquyp4vz/L02w5sDMMuMkll3IoV1FHcZotM/qZNQAYpcUVES+qZMwUOxjvdMe01vr0NvyA2lNAxZ/+lS9AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},{title:"Port Comfort by Smolnyy",location:"Санкт-Петербург, Суворовский пр., 65, лит Б",href:"https://shop.hotbot.ai/portcomfortsmolnyy",image:{src:"/_next/static/media/img6.fb62c786.png",height:165,width:165,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAZlBMVEW+v8DJy8zZ1MrHxsVXW2M1Jhi4ubmQh3/P1Np+XkTX3uKzsbGCd3CckYqbhW6JdmiNgHfP09Kfmpi0raZpYmGZi3zi4dq+ubOtpp2mj3d8foXJt6OGdVxfTjcfEwi/ppHCvq+Tel8a6RxQAAAAE3RSTlP9////vsX/xs39//////////7+ckUkbAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEZJREFUeJwVxkcSgDAMBLC1AwHSO739/5MMOgmjUpEgBihaZpIyoLGzQmoD5jXRn8Yui6wN4vNW623Ccdbbh7Khv/zuptJ9ZtoDblIOn2sAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},{title:"Port Comfort on Pokrovka",location:"Москва, ул. Покровка, 29",href:"https://shop.hotbot.ai/portcomfortpokrovka",image:{src:"/_next/static/media/img7.e55e20e7.png",height:165,width:165,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAgVBMVEVKQSpwjYWlXEPT1dJaSj4gMikdHQaSd2+QOh4xIBDW2t2sq6drlol0MBo1JRZ5aFonHw0gST5FUkqUpJ5KfHCbt7VxoJWQNBm8trV9OBx5ko7Hrqe1saS2qJ6EdW9/dGeVSDGlmpEyWUxAMxvCtq9kXlCBVE57npKwwcBeiHhId2eoDaPmAAAACnRSTlP+xv///f3Fzf6+ZS9F4gAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEhJREFUeJwFwQUCgCAABLATTBoR7G7//0A3ZA1jjD4RJOGcO/EhJ8N4Bl+hJpTO4n7RLkevp6sEpF6d72IYbEFUpUK6G2sTVfyetgSDeagLaQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}}];function v(e){let{close:t}=e;return(0,l.jsxs)("div",{className:_().root,children:[(0,l.jsx)(f,{className:_().close,onClick:t}),(0,l.jsx)("div",{className:_().wrapper,children:(0,l.jsx)("div",{className:_().content,children:g.map((e,t)=>(0,l.jsxs)("div",{className:_().item,children:[(0,l.jsx)(m.default,{src:e.image,alt:"image"}),(0,l.jsxs)("div",{className:_().text,children:[(0,l.jsx)("h2",{children:e.title}),(0,l.jsx)("span",{children:e.location}),(0,l.jsx)("a",{href:e.href,target:"_blank",rel:"noreferrer nofollow",children:(0,l.jsx)(x.z,{l:!0,green:!0,children:"Перейти в румсервис"})})]})]},t))})})]})}var y=r(53014),b=r.n(y);function w(e){let{openModal:t}=e;return(0,l.jsxs)("div",{className:b().root,onClick:t,children:[(0,l.jsx)("h2",{children:"Если вы уже остановились в одном из наших отелей"}),(0,l.jsx)("span",{children:"Для заказа услуги воспользуйтесь нашим рум-сервисом. У каждого отеля свой набор услуг. Нажмите кнопку \xabВыбрать отель\xbb и укажите тот, в котором проживаете."}),(0,l.jsx)(x.z,{className:b().button,green:!0,children:"Выбрать отель"})]})}var j=r(31552),k=r(96345);function E(e){let{isServices:t,isPlaces:r}=e,[s,n]=a.useState(!1),i=a.useCallback(()=>{n(!1)},[]),o=a.useCallback(()=>{n(!0),t&&(0,k.ZP)("reachGoal","click-on-room-service-menu"),r&&(0,k.ZP)("reachGoal","click-on-room-service-menu-places-to-go")},[t,r]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(w,{openModal:o}),(0,l.jsx)(j.u,{isOpen:s,close:i,mobileCloseIcon:!1,children:(0,l.jsx)(v,{close:i})})]})}var S=r(58552),C=r.n(S),N=r(94212),R=r.n(N),B=r(16480),U=r.n(B),M=r(22466),T=r.n(M);function V(){return(V=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e}).apply(this,arguments)}var O=e=>h.createElement("svg",V({xmlns:"http://www.w3.org/2000/svg",width:20,height:20,fill:"none"},e),n||(n=h.createElement("path",{stroke:"#fff",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M10.191 1.414 1.706 9.9m0 0 8.485 8.486M1.706 9.899h16.97"}))),L=r(48344),P=r(45543);r(86978),r(87644),r(70501),r(97948);let F="Summer",W="Winter";var G=r(24843),J=r(2769);function q(e){let{images:t,isActive:r,className:s}=e,n=a.useRef(null),i=(0,G.GS)(J.ai),o=Array.isArray(t[0]),c=function(){switch(function(e){let t=e.getMonth(),r=e.getDate();return 3===t&&r>=1||t>3&&t<9||9===t&&r<=31?F:W}(new Date)){case F:return 0;case W:return 1;default:return 0}}(),u=o?t[c]:t;return a.useEffect(()=>{if(n.current&&!i){if(r){n.current?.autoplay.start();return}if(!r){n.current?.autoplay.stop();return}}},[r,i]),(0,l.jsxs)("div",{className:U()(T().root,s),children:[(0,l.jsx)(O,{className:U()(T().arrow,T().prev,{[T().active]:r&&t.length>1}),onClick:()=>n.current?.slidePrev()}),(0,l.jsx)(O,{className:U()(T().arrow,T().next,{[T().active]:r&&t.length>1}),onClick:()=>n.current?.slideNext()}),(0,l.jsx)(L.tq,{className:U()(T().slider,"pagination-service-card"),modules:[P.W_,P.tl,P.pt],pagination:!0,spaceBetween:0,slidesPerView:1,loop:!0,autoplay:{delay:4e3,disableOnInteraction:!0},onSwiper:e=>n.current=e,children:u.map((e,t)=>(0,l.jsx)(L.o5,{className:T().slide,children:(0,l.jsx)(m.default,{className:U()(T().image,{[T().active]:r}),src:e,alt:"img",width:1200,height:800})},t))})]})}var D=r(38778),z=r.n(D);function H(){return(H=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e}).apply(this,arguments)}var I=e=>h.createElement("svg",H({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 18 18"},e),i||(i=h.createElement("path",{fill:"#EB09FE",fillRule:"evenodd",d:"M0 8.526h1.426a.474.474 0 1 1 0 .948H0A9.013 9.013 0 0 0 8.526 18v-1.411a.474.474 0 1 1 .948 0V18A9.013 9.013 0 0 0 18 9.474h-1.396a.474.474 0 1 1 0-.948H18A9.013 9.013 0 0 0 9.474 0v1.41a.474.474 0 0 1-.948 0V0A9.013 9.013 0 0 0 0 8.526m8.758 1.13 3.72-4.741a.437.437 0 0 1 .668-.055c.192.218.192.58.014.815l-3.705 4.759v.072c0 .489-.326.868-.712.868-.37 0-.667-.361-.696-.796L4.934 7.72c-.208-.18-.252-.542-.09-.796a.415.415 0 0 1 .653-.108L8.61 9.674c.044-.019.089-.019.133-.019z",clipRule:"evenodd"})));function K(e){let{title:t,description:r,isShowMore:s,time:n}=e,i=(0,G.GS)(J.ai),[o,c]=a.useState(!1),[u,A]=a.useState(0),d=a.useRef(null),_=a.useRef(null),h=a.useRef(null);return a.useEffect(()=>{h.current&&r?.hiddenText?.length&&(h.current.childNodes.length>0||r.hiddenText.forEach(e=>{h.current&&h.current.insertAdjacentHTML("beforeend",e)}))},[r]),a.useEffect(()=>{if(!window||!_.current||i)return;let e=()=>{let e=setTimeout(()=>{_.current&&A(_.current.getBoundingClientRect().height)},300);return()=>clearTimeout(e)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[h,i]),a.useEffect(()=>{if(!d.current||u<1)return;let e=setTimeout(()=>{d.current&&(d.current.style.transition="300ms")},0);return()=>clearTimeout(e)},[u,d]),a.useEffect(()=>{window&&h.current&&_.current&&_.current&&h.current&&(s&&A(h.current.clientHeight+_.current.getBoundingClientRect().height+16),s||A(_.current.getBoundingClientRect().height))},[s]),(0,l.jsxs)("div",{className:U()(z().root),children:[(0,l.jsxs)("div",{className:z().title_wrapper,children:[(0,l.jsx)("h2",{className:z().title,children:t}),n&&(0,l.jsxs)("div",{className:z().icon_wrapper,children:[(0,l.jsx)(I,{className:z().watch_icon,onMouseEnter:()=>!i&&c(!0),onMouseLeave:()=>!i&&c(!1),onClick:()=>i&&c(e=>!e)}),(0,l.jsx)("span",{className:U()(z().watch_overlay,{[z().active]:o}),children:n})]})]}),(0,l.jsxs)("div",{className:U()(z().description,{[z().show_more]:s}),style:{height:`${u}px`},ref:d,children:[(0,l.jsx)("span",{ref:_,children:r.visibleText}),(0,l.jsx)("div",{ref:h,className:U()(z().hidden_text,{[z().show_more]:s})})]})]})}var X=r(16811),Q=r.n(X);function Y(e){let{hiddenText:t,isShowMore:r,setIsShowMore:s}=e;return(0,l.jsx)(l.Fragment,{children:t?.length&&(0,l.jsx)("div",{className:U()(Q().root,{[Q().active]:r}),children:(0,l.jsx)("span",{className:U()(Q().text,{[Q().active]:r}),onClick:()=>s(e=>!e),children:r?"Скрыть":"Показать еще"})})})}function Z(e){let{title:t,description:r,images:s,isActive:n,isShowMore:i,setIsShowMore:o,time:a}=e;return(0,l.jsxs)("div",{children:[(0,l.jsx)(q,{images:s,isActive:n}),(0,l.jsx)(K,{title:t,time:a,description:r,isShowMore:i}),(0,l.jsx)(Y,{hiddenText:r.hiddenText,isShowMore:i,setIsShowMore:o})]})}var $=r(64727),ee=r.n($);function et(){return(et=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e}).apply(this,arguments)}var er=e=>h.createElement("svg",et({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 15 21"},e),o||(o=h.createElement("path",{fill:"#00A3AD",fillRule:"evenodd",d:"M7.318 21c2.44 0 7.318-9.716 7.318-13.73S11.36 0 7.318 0 0 3.255 0 7.27 4.879 21 7.318 21m0-10.818a2.864 2.864 0 1 0 0-5.727 2.864 2.864 0 0 0 0 5.727",clipRule:"evenodd"})));function es(e){let{location:t}=e;return(0,l.jsxs)("div",{className:ee().root,children:[(0,l.jsx)(er,{className:ee().icon}),(0,l.jsx)("span",{children:t})]})}var en=r(2858),ei=r.n(en),eo=r(8792),el=r(15361);let ea="Заказать",ec=e=>{let t=/\*\*(.*?)\*\*/g,r=e.split(/(\+7\s*\(\d{3}\)\s*\d{3}–\d{2}–\d{2})/g),s=(e,r)=>e.split("	").flatMap((e,s)=>{let n=e.split(t).map((e,t)=>t%2==1?(0,l.jsx)("b",{children:e},t):e);return s>0?[(0,l.jsx)("br",{className:ei().desktop_br},`br-tab-${r}-${s}`),...n]:n}),n=e=>e.split("\n").flatMap((e,t)=>{let r=s(e,t);return t>0?[(0,l.jsx)("br",{},`br-line-${t}`),...r]:r});return r.map((e,t)=>t%2==1?[(0,l.jsx)("a",{href:`tel:+${(0,el.mz)()}`,children:(0,el.u_)()},`phone-${t}`)]:n(e)).flat()};function eu(e){let{booking:t}=e,{description:r,sum:s,unit:n,discount:i,button:o}=t;return(0,l.jsxs)("div",{className:ei().root,children:[s&&(0,l.jsxs)("div",{className:ei().wrapper,children:[(0,l.jsx)("span",{className:U()(ei().price,{[ei().crossed]:i},{[ei().order]:s===ea}),children:s===ea?(0,l.jsx)(eo.default,{href:"/transfer",children:s}):s}),i&&(0,l.jsx)("span",{className:ei().price,children:i}),(0,l.jsx)("span",{className:ei().unit,children:n})]}),o&&(0,l.jsx)("a",{href:o.href,target:"_blank",rel:"noreferrer nofollow",children:(0,l.jsx)(x.z,{green:!0,l:!0,className:ei().button,children:o.text})}),(0,l.jsx)("span",{className:U()(ei().description,{[ei().service]:s}),children:ec(r)})]})}var eA=r(47244),ed=r.n(eA);function e_(e){let{tags:t}=e;return(0,l.jsx)("div",{className:ed().root,children:t.map((e,t)=>(0,l.jsx)("span",{className:ed().tag,children:e},t))})}function eh(e){let{location:t,tags:r,booking:s}=e;return(0,l.jsxs)("div",{children:[t&&(0,l.jsx)(es,{location:t}),(0,l.jsx)(eu,{booking:s}),(0,l.jsx)(e_,{tags:r})]})}var ep=r(94384),ef=r.n(ep);function em(e){let{discount:t}=e;return(0,l.jsx)("div",{className:ef().root,children:t})}function ex(e){let{item:t}=e,[r,s]=a.useState(!1),[n,i]=a.useState(!1),o=(0,G.GS)(J.ai),c=a.useRef(null),[u,A]=a.useState(0);return a.useEffect(()=>{if(c.current&&!o){if(r)c.current.style.position="absolute";else{let e=setTimeout(()=>{c.current&&(c.current.style.position="relative")},300);return()=>clearTimeout(e)}}},[r,o]),a.useEffect(()=>{if(!u)return;let e=()=>{o||A(0)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[o,u,t.id]),a.useEffect(()=>{if(u)return;let e=setTimeout(()=>{if(!c.current)return()=>clearTimeout(e);A(c.current.getBoundingClientRect().height)},600);return()=>clearTimeout(e)},[c,u]),(0,l.jsx)("div",{className:R().root,onMouseEnter:()=>!o&&s(!0),onMouseLeave:()=>{o||s(!1),o||i(!1)},style:{minHeight:u||"100%"},children:(0,l.jsxs)("div",{className:U()(R().wrapper,{[R().active]:r},{[R().show_more]:n}),ref:c,style:{minHeight:u||"100%"},children:[t.booking.discount&&(0,l.jsx)(em,{discount:"10%"}),(0,l.jsx)(Z,{title:t.title,description:t.description,time:t.time,images:t.images,isActive:r,isShowMore:n,setIsShowMore:i}),(0,l.jsx)(eh,{booking:t.booking,tags:t.tags,location:t.location})]})})}let eg=(e,t)=>{if(t.length<1)return!1;for(let r of t)if(e.includes(r))return!1;return!0};function ev(e){let{selectedAttributes:t,cards:r}=e,[s,n]=a.useState(!1);return a.useEffect(()=>{s||n(!0)},[s]),a.useEffect(()=>{s&&n(!1)},[t]),(0,l.jsx)("div",{className:C().root,children:r.map((e,r)=>eg(e.attributes,t)||!s?null:(0,l.jsx)(ex,{item:e},r))})}var ey=r(68036),eb=r(2093);function ew(e){let{data:t,filters:r,isServices:s,isPlaces:n}=e,[i,o]=a.useState(ey.t.spb),[c,d]=a.useState([]);return(0,l.jsxs)(A.W,{as:"section",className:u().root,children:[(0,l.jsx)(E,{isServices:s,isPlaces:n}),(0,l.jsx)(eb.k,{isCityFilter:!s,selectedCity:i,setSelectedCity:o,setSelectedAttributes:d,selectedAttributes:c,filters:Object.values(i===ey.t.spb?r.spb:r.msk),isDisabledMskTag:Object.values(r.msk).length<=1}),(0,l.jsx)(ev,{selectedAttributes:c,cards:i===ey.t.spb?t.spb:t.msk})]})}},2093:function(e,t,r){"use strict";r.d(t,{k:function(){return g}});var s=r(57437),n=r(2265),i=r(18500),o=r.n(i),l=r(38636),a=r.n(l),c=r(58165),u=r(68036),A=r(16480),d=r.n(A);function _(e){let{selectedCity:t,setSelectedCity:r,setSelectedAttributes:i,className:o,isDisabledMSK:l}=e,A=n.useCallback((e,t)=>()=>{r(t),i([])},[r,i]);return(0,s.jsx)("div",{className:d()(a().root,o),children:Object.values(u.t).map((e,r)=>(0,s.jsx)(c.v,{name:e,isChecked:t===e,handleClickFilter:A,isDisabled:l&&1===r},r))})}var h=r(23147),p=r.n(h);function f(e){let{setSelectedAttributes:t,selectedAttributes:r,filters:i,className:o}=e,l=i[0],a=n.useCallback((e,r)=>()=>{if(e===l){if(r)return;return t([])}t(t=>r?t.filter(t=>t!==e):[...t,e])},[l,t]);return(0,s.jsx)("div",{className:d()(p().root,o),children:i.map((e,t)=>{let n=r.includes(e)||e===l&&r.length<1;return(0,s.jsxs)("div",{className:p().wrapper,onClick:a(e,n),onKeyPress:t=>{("Enter"===t.key||" "===t.key)&&(a(e,n)(),t.preventDefault())},tabIndex:0,role:"checkbox","aria-checked":n,children:[(0,s.jsx)("div",{className:d()(p().checkbox,{[p().selected]:n})}),(0,s.jsx)("span",{className:d()(p().text,{[p().selected]:n}),children:e})]},t)})})}var m=r(47907),x=r(75631);function g(e){let{isCityFilter:t=!0,selectedCity:r,setSelectedCity:i,setSelectedAttributes:l,selectedAttributes:a,filters:c,marginUnset:u=!1,isDisabledMskTag:A}=e,h=n.useRef(!0),p=(0,m.useRouter)();return n.useEffect(()=>{let e=new URLSearchParams(window.location.search),t=e.get("filters");if(t){let e=[];t.split(",").forEach(t=>{c.forEach(r=>{let s=r.split(","),n=s.length>1&&s[0].length<6?s[0].length:6;r.slice(0,n)===t.slice(0,n)&&e.push(r)})}),l(e)}let r=e.get("city");r&&("М"===r[0]||"м"===r[0])&&i(x.cities.msk)},[l,i]),n.useEffect(()=>{if(h.current){h.current=!1;return}let e=new URLSearchParams(window.location.search);if(a.length>0){let t=a.map(e=>e.replaceAll(",",""));e.set("filters",t.join(","))}else e.delete("filters");r===x.cities.msk?e.set("city",r):e.delete("city"),p.replace(`?${e.toString()}`)},[a,r,p]),(0,s.jsxs)(s.Fragment,{children:[t&&(0,s.jsx)(_,{className:d()({[o().filter_city]:u}),selectedCity:r,setSelectedCity:i,setSelectedAttributes:l,isDisabledMSK:A}),(0,s.jsx)(f,{className:d()({[o().filter_attributes]:u}),setSelectedAttributes:l,selectedAttributes:a,filters:c})]})}},15361:function(e,t,r){"use strict";r.d(t,{DH:function(){return n},dc:function(){return l},u_:function(){return p},mz:function(){return m}});let s=(e,t)=>{if("undefined"==typeof document)return null;let r=document.cookie.split("; ").find(t=>t.startsWith(e))?.split("=")[1];return r?JSON.parse(decodeURIComponent(r))[t]:null},n="+7 (800) 505–49–90",i="+7 (800) 101-54-26",o="+ 7 (800) 201‒89‒70",l="+ 7 (800) 101-96-57",a="utm_source",c="maps",u="maps",A="yandex-somov",d="yandex_i",_="2gis",h=e=>{switch(e){case c:case u:return i;case _:return o;case A:return l;case d:return i;default:return n}},p=()=>{let e=s("utm",a);return e?h(e):n},f=e=>{switch(e){case c:case u:return"+7 (800) 101-54-26";case _:return o;case A:return l;case d:return i;default:return n}},m=()=>{let e=s("utm",a);return e?f(e):n}},68036:function(e,t,r){"use strict";var s,n;r.d(t,{t:function(){return s}}),(n=s||(s={})).spb="Санкт-Петербург",n.msk="Москва"},2769:function(e,t,r){"use strict";r.d(t,{Mq:function(){return i},PJ:function(){return n},ai:function(){return o},gv:function(){return s}});let s="(min-width: 1600px)",n="(max-width: 1600px)",i="(max-width: 1124px)",o="(max-width: 680px)"},87644:function(){},70501:function(){},97948:function(){},25622:function(e){e.exports={root:"style_root__JDIIU",disabled:"style_disabled__oqTqu",active:"style_active__rqdkR"}},61622:function(e){e.exports={root:"style_root__Us3vo",green:"style_green__BkSGR",wrapper:"style_wrapper__QBN8R",button:"style_button__GlwMO"}},55805:function(e){e.exports={root:"style_root___A1MS",xl:"style_xl__yli9H",l:"style_l__hjHzz",sm:"style_sm__ASxbt",green:"style_green__WFoQ_",purple:"style_purple__4AXxg",purpleGradient:"style_purpleGradient__b0xM_",blue:"style_blue__WkQ0f",white:"style_white__w9eTR"}},89004:function(e){e.exports={root:"style_root__FVTmd"}},27601:function(e){e.exports={root:"style_root__rTRJq",wrapper:"style_wrapper__5ASlM",content:"style_content__eC_r8",close:"style_close__f8h5p",item:"style_item__2NRZc",text:"style_text__MLX6p"}},70530:function(e){e.exports={root:"style_root__VXda2",active:"style_active__H49PY",wrapper:"style_wrapper__uBDsx",overlay:"style_overlay__XEwPI",close_icon:"style_close_icon__IWVtR",content:"style_content__VJNqR",not_delayed:"style_not_delayed__fmCAC",bg:"style_bg__qBIF2"}},36419:function(e){e.exports={root:"style_root__zqpVc",text:"style_text__htyNb",blog:"style_blog__nTe9e"}},39957:function(e){e.exports={root:"style_root__OFCvZ",link:"style_link__43urp",title:"style_title__3P7aj"}},62623:function(e){e.exports={root:"style_root__Wo8ft",span:"style_span__ScWxA"}},53014:function(e){e.exports={root:"style_root__GWpy0",button:"style_button__PWHXf"}},2858:function(e){e.exports={root:"style_root__NY_X3",wrapper:"style_wrapper__ylOii",price:"style_price__C8kC1",crossed:"style_crossed__CfptA",order:"style_order__2_53s",unit:"style_unit__1zuTP",description:"style_description__A_JQc",service:"style_service__Gsx3W",button:"style_button__DaGdz",desktop_br:"style_desktop_br__0whE7"}},38778:function(e){e.exports={root:"style_root__Y2KG_",title_wrapper:"style_title_wrapper__WkyOr",title:"style_title__XUR4x",icon_wrapper:"style_icon_wrapper__dao2I",watch_icon:"style_watch_icon__EiL18",watch_overlay:"style_watch_overlay__3zfYQ",active:"style_active__ySd9x",description:"style_description__7vtP1",hidden_text:"style_hidden_text__AN26_",show_more:"style_show_more__fAYot"}},22466:function(e){e.exports={root:"style_root__Fo1Nj",slider:"style_slider__YQ4WH",slide:"style_slide__EqRnF",image:"style_image__zfM7j",arrow:"style_arrow__Q29z6",active:"style_active__EEpdx",prev:"style_prev__rFj49",next:"style_next__lzJDy"}},64727:function(e){e.exports={root:"style_root__WpLDV",icon:"style_icon__58JgS"}},16811:function(e){e.exports={root:"style_root__42QlA",active:"style_active__x7yws",text:"style_text__aTy2q"}},47244:function(e){e.exports={root:"style_root__ZX3tU",tag:"style_tag__w7Ns_"}},94212:function(e){e.exports={root:"style_root__kF9zV",events:"style_events__zh_qB",wrapper:"style_wrapper__5868J",active:"style_active__GY5np"}},58552:function(e){e.exports={root:"style_root__RFt9f"}},94384:function(e){e.exports={root:"style_root__zgUX4"}},78248:function(e){e.exports={filter_city:"style_filter_city__xG99Z",filter_attributes:"style_filter_attributes__J8es0"}},23147:function(e){e.exports={root:"style_root___x2qJ",text:"style_text__2Ibqm",selected:"style_selected__mKLKX",wrapper:"style_wrapper__1Fdv4",checkbox:"style_checkbox__uxJER"}},38636:function(e){e.exports={root:"style_root__soNaN"}},18500:function(e){e.exports={filter_city:"style_filter_city__mdBPX",filter_attributes:"style_filter_attributes__dsI8f"}}}]);