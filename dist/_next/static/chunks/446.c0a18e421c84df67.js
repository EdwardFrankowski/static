(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[446],{446:function(e,t,r){"use strict";r.r(t),r.d(t,{BookBanner:function(){return m}});var n=r(57437);r(2265);var i=r(71197),s=r.n(i),o=r(16480),u=r.n(o),c=r(51189),l=r(14424);function a(e){let{className:t,title:r,tag:i,link:o,phone:a,text:d,as:f="section"}=e;return(0,n.jsxs)(c.W,{as:f,className:u()(s().root,t),children:[(0,n.jsxs)("div",{className:s().title_wrapper,children:[(0,n.jsx)("h2",{children:r}),(0,n.jsxs)(l.V,{className:s().cheaper,green:!0,small:!0,children:[o&&(0,n.jsx)("a",{href:`mailto: ${o}`,children:o}),i]}),(0,n.jsx)(l.V,{className:s().number,rotate:!0,dark:!0,small:!0,children:(0,n.jsx)("a",{href:`tel:${a}`,children:a})})]}),(0,n.jsx)("p",{children:d})]})}var d=r(68289),f=r(1049),h=r.n(f);let _=r(15361).DH,p=(0,n.jsxs)(n.Fragment,{children:["Здесь нет комиссий и наценок. Нашли дешевле на другой площадке? ",(0,n.jsx)("br",{}),"Звоните – мы сделаем такую же цену."]});function m(){let{ref:e,startAnimate:t}=(0,d._)();return(0,n.jsx)("section",{ref:e,className:u()(h().root,h().init,{[h().animate]:t}),children:(0,n.jsx)(a,{title:"Бронируйте через сайт",tag:"Нашли дешевле?",phone:_,text:p,as:"div"})})}},51189:function(e,t,r){"use strict";r.d(t,{W:function(){return c}});var n=r(57437);r(2265);var i=r(16480),s=r.n(i),o=r(89004),u=r.n(o);let c=e=>{let{as:t="div",className:r,children:i,...o}=e;return(0,n.jsx)(t,{className:s()(u().root,r),...o,children:i})}},68289:function(e,t,r){"use strict";r.d(t,{_:function(){return a}});var n=r(2265),i=Object.defineProperty,s=new Map,o=new WeakMap,u=0,c=void 0;n.Component;var l=r(64496);function a(){let{ref:e,inView:t}=function(){var e;let{threshold:t,delay:r,trackVisibility:i,rootMargin:l,root:a,triggerOnce:d,skip:f,initialInView:h,fallbackInView:_,onChange:p}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[m,v]=n.useState(null),g=n.useRef(),[y,x]=n.useState({inView:!!h,entry:void 0});g.current=p,n.useEffect(()=>{let e;if(!f&&m)return e=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:c;if(void 0===window.IntersectionObserver&&void 0!==n){let i=e.getBoundingClientRect();return t(n,{isIntersecting:n,target:e,intersectionRatio:"number"==typeof r.threshold?r.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}let{id:i,observer:l,elements:a}=function(e){let t=Object.keys(e).sort().filter(t=>void 0!==e[t]).map(t=>{var r;return`${t}_${"root"===t?(r=e.root)?(o.has(r)||(u+=1,o.set(r,u.toString())),o.get(r)):"0":e[t]}`}).toString(),r=s.get(t);if(!r){let n;let i=new Map,o=new IntersectionObserver(t=>{t.forEach(t=>{var r;let s=t.isIntersecting&&n.some(e=>t.intersectionRatio>=e);e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=s),null==(r=i.get(t.target))||r.forEach(e=>{e(s,t)})})},e);n=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:o,elements:i},s.set(t,r)}return r}(r),d=a.get(e)||[];return a.has(e)||a.set(e,d),d.push(t),l.observe(e),function(){d.splice(d.indexOf(t),1),0===d.length&&(a.delete(e),l.unobserve(e)),0===a.size&&(l.disconnect(),s.delete(i))}}(m,(t,r)=>{x({inView:t,entry:r}),g.current&&g.current(t,r),r.isIntersecting&&d&&e&&(e(),e=void 0)},{root:a,rootMargin:l,threshold:t,trackVisibility:i,delay:r},_),()=>{e&&e()}},[Array.isArray(t)?t.toString():t,m,a,l,d,f,i,_,r]);let b=null==(e=y.entry)?void 0:e.target,w=n.useRef();m||!b||d||f||w.current===b||(w.current=b,x({inView:!!h,entry:void 0}));let j=[v,y.inView,y.entry];return j.ref=j[0],j.inView=j[1],j.entry=j[2],j}({rootMargin:"-100px"});return{ref:e,startAnimate:(0,l.B)(t)}}},15361:function(e,t,r){"use strict";r.d(t,{DH:function(){return i},dc:function(){return u},u_:function(){return p},mz:function(){return v}});let n=(e,t)=>{if("undefined"==typeof document)return null;let r=document.cookie.split("; ").find(t=>t.startsWith(e))?.split("=")[1];return r?JSON.parse(decodeURIComponent(r))[t]:null},i="+7 (800) 505–49–90",s="+7 (800) 101-54-26",o="+ 7 (800) 201‒89‒70",u="+ 7 (800) 101-96-57",c="utm_source",l="maps",a="maps",d="yandex-somov",f="yandex_i",h="2gis",_=e=>{switch(e){case l:case a:return s;case h:return o;case d:return u;case f:return s;default:return i}},p=()=>{let e=n("utm",c);return e?_(e):i},m=e=>{switch(e){case l:case a:return"+7 (800) 101-54-26";case h:return o;case d:return u;case f:return s;default:return i}},v=()=>{let e=n("utm",c);return e?m(e):i}},1049:function(e){e.exports={root:"style_root__o3dNJ",init:"style_init__pl6Va",animate:"style_animate__H1nh4"}},71197:function(e){e.exports={root:"style_root__Z087L",title_wrapper:"style_title_wrapper__xpM8b",cheaper:"style_cheaper__m_YxM",number:"style_number__nvQiK"}},89004:function(e){e.exports={root:"style_root__FVTmd"}}}]);