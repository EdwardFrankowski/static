(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2747],{92522:function(e,t,o){"use strict";o.d(t,{D5:function(){return P},Ly:function(){return $},Yy:function(){return h},ah:function(){return B}});var s=o(2265);function n(){return(n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s])}return e}).apply(this,arguments)}let a=(e,t)=>{let o={};for(let s in e)-1===t.indexOf(s)&&(o[s]=e[s]);return o},r=s.createContext(null),l=s.createContext(null),i=e=>t=>s.createElement(l.Consumer,null,o=>s.createElement(e,n({parent:o},t))),c=(e=[])=>{let[t,o]=(0,s.useState)(!1),n=(0,s.useRef)(e),a=(()=>{let e=(0,s.useContext)(r);if(null===e)throw Error("Couldn't find Yandex.Maps API in the context. Make sure that hook useYMaps is inside <YMaps /> provider");return e})(),l=a.getApi();return(0,s.useEffect)(()=>{a.load().then(()=>Promise.all(n.current.map(a.loadModule))).then(()=>o(!0))},[]),t&&l?l:null},u=()=>{},p=["onLoad","onError","modules","apiLoader"];function d(e,t=!1,o=[]){return r=>{let{width:l,height:i,modules:d=[],onLoad:m=u}=r,b=c(o.concat(d)),h=!t||!!b,f=a(r,p);return(0,s.useEffect)(()=>b?m(b):void 0,[b]),h?s.createElement(e,n({ymaps:b},f)):s.createElement("div",{style:{width:l,height:i}})}}let m="undefined"!=typeof window,b={lang:"ru_RU",load:"",ns:"",mode:"release"},h=e=>{let{version:t="2.1",enterprise:o=!1,query:n={lang:"ru_RU",load:"",ns:""},preload:a=!1,children:l}=e,i=(0,s.useRef)((e=>{let t;let{query:o=b}=e,s=Date.now().toString(32),n=o.ns||"",a="__yandex-maps-api-onload__$$"+s,r="__yandex-maps-api-onerror__$$"+s,l=m?window:{},i={},c=()=>n?l[n]:t,u=()=>{delete l[a],delete l[r]};return{load:()=>{if(c())return Promise.resolve(t);if(i[n])return i[n];let s={onload:a,onerror:r,...b,...o},p=Object.keys(s).map(e=>`${e}=${s[e]}`).join("&"),d=[`https://${e.enterprise?"enterprise.":""}api-maps.yandex.ru`,e.version,"?"+p].join("/");return i[n]=new Promise((e,o)=>{l[a]=o=>{u(),o.ready(()=>{t=o,e(o)})},l[r]=e=>{u(),o(e)},new Promise((e,t)=>{let o=document.createElement("script");o.type="text/javascript",o.onload=e,o.onerror=t,o.src=d,o.async=!0,document.head.appendChild(o)}).catch(l[r])}),i[n]},getApi:c,loadModule:e=>new Promise((o,s)=>{t.modules.require(e).done(s=>{s.forEach(o=>{((e,t,o,s=!1)=>{let n="string"==typeof t?t.split("."):t.slice(),a,r=e;for(;n.length>1;)r[a=n.shift()]||(r[a]={}),r=r[a];let l=n[0];r[l]=!0===s&&r[l]||o})(t,e,o,!0)}),o(t)},s)})}})({version:t,enterprise:o,query:n,preload:a}));return(0,s.useEffect)(()=>{a&&i.current.load()},[i.current]),s.createElement(r.Provider,{value:i.current},l)},f=/^on(?=[A-Z])/;function _(e){return Object.keys(e).reduce((t,o)=>{if(f.test(o)){let s=o.replace(f,"").toLowerCase();t._events[s]=e[o]}else t[o]=e[o];return t},{_events:{}})}function y(e,t,o){"function"==typeof o&&e.events.add(t,o)}function g(e,t,o){"function"==typeof o&&e.events.remove(t,o)}function v(e,t,o){Object.keys(Object.assign({},t,o)).forEach(s=>{t[s]!==o[s]&&(g(e,s,t[s]),y(e,s,o[s]))})}let j=e=>"default"+e.charAt(0).toUpperCase()+e.slice(1);function x(e,t){return void 0!==e[t]||void 0===e[j(t)]}function k(e,t,o){return(x(e,t)?e[t]:e[j(t)])||o}function O(e,t,o=null){e!==t&&(e&&("current"in e?e.current=null:"function"==typeof e&&e(null)),t&&("current"in t?t.current=o:"function"==typeof t&&t(o)))}function E(e){let{width:t,height:o,style:s,className:n}=e;return void 0!==s||void 0!==n?Object.assign({},s&&{style:s},n&&{className:n}):{style:{width:t,height:o}}}class C extends s.Component{constructor(e){super(e),this.state={error:null,errorInfo:null}}componentDidCatch(e,t){let{onError:o=()=>{}}=this.props;o(e),this.setState({error:e,errorInfo:t})}render(){return this.state.error?null:this.props.children}}let w=e=>({onError:t,...o})=>s.createElement(C,{onError:t},s.createElement(e,o));class R extends s.Component{constructor(){super(),this.instance=null,this.state={instance:null},this._parentElement=null,this._getRef=e=>{this._parentElement=e}}componentDidMount(){this.instance=R.mountObject(this._parentElement,this.props.ymaps.Map,this.props),this.setState({instance:this.instance})}componentDidUpdate(e){null!==this.instance&&R.updateObject(this.instance,e,this.props)}componentWillUnmount(){R.unmountObject(this.instance,this.props)}render(){let e=E(this.props),t=a(_(this.props),["_events","state","defaultState","options","defaultOptions","instanceRef","ymaps","children","width","height","style","className"]);return s.createElement(l.Provider,{value:this.state.instance},s.createElement("div",n({ref:this._getRef},e,t),this.props.children))}static mountObject(e,t,o){let{instanceRef:s,_events:n}=_(o),a=new t(e,k(o,"state"),k(o,"options"));return Object.keys(n).forEach(e=>y(a,e,n[e])),O(null,s,a),a}static updateObject(e,t,o){let{_events:s,instanceRef:n}=_(o),{_events:a,instanceRef:r}=_(t);if(x(o,"state")){let s=k(t,"state",{}),n=k(o,"state",{});s.type!==n.type&&e.setType(n.type),s.behaviors!==n.behaviors&&(s.behaviors&&e.behaviors.disable(s.behaviors),n.behaviors&&e.behaviors.enable(n.behaviors)),n.zoom&&s.zoom!==n.zoom&&e.setZoom(n.zoom),n.center&&s.center!==n.center&&e.setCenter(n.center),n.bounds&&s.bounds!==n.bounds&&e.setBounds(n.bounds)}if(x(o,"options")){let s=k(t,"options"),n=k(o,"options",{});s!==n&&e.options.set(n)}k(t,"width")===k(o,"width")&&k(t,"height")===k(o,"height")||e.container.fitToViewport(),v(e,a,s),O(r,n,e)}static unmountObject(e,t){let{instanceRef:o,_events:s}=_(t);null!==e&&(Object.keys(s).forEach(t=>g(e,t,s[t])),e.destroy(),O(o))}}let P=w(d(R,!0,["Map"]));P.defaultProps={width:320,height:240};class M extends s.Component{constructor(){super(),this.state={instance:null},this._parentElement=null,this._getRef=e=>{this._parentElement=e}}componentDidMount(){this._mounted=!0,this.props.ymaps.panorama.isSupported()&&M.mountObject(this._parentElement,this.props.ymaps.panorama,this.props).then(e=>this._mounted&&this.setState({instance:e}))}componentDidUpdate(e){null!==this.state.instance&&M.updateObject(this.state.instance,e,this.props)}componentWillUnmount(){this._mounted=!1,M.unmountObject(this.state.instance,this.props)}render(){let e=E(this.props);return s.createElement("div",n({ref:this._getRef},e))}static mountObject(e,t,o){let{instanceRef:s,_events:n}=_(o),a=k(o,"point"),r=k(o,"locateOptions"),l=k(o,"options");return new Promise((o,i)=>{t.locate(a,r).done(a=>{if(a.length>0){let r=new t.Player(e,a[0],l);O(null,s,r),Object.keys(n).forEach(e=>y(r,e,n[e])),o(r)}},i)})}static updateObject(e,t,o){let{_events:s,instanceRef:n}=_(o),{_events:a,instanceRef:r}=_(t);if(x(o,"options")){let s=k(t,"options"),n=k(o,"options");s!==n&&e.options.set(n)}if(x(o,"point")){let s=k(o,"point"),n=k(t,"point"),a=k(o,"locateOptions");s!==n&&e.moveTo(s,a)}v(e,a,s),O(r,n,e)}static unmountObject(e,t){let{instanceRef:o,_events:s}=_(t);null!==e&&(Object.keys(s).forEach(t=>g(e,t,s[t])),O(o))}}w(d(M,!0,["panorama.isSupported","panorama.locate","panorama.createPlayer","panorama.Player"])).defaultProps={width:320,height:240};class S extends s.Component{constructor(){super(),this.state={instance:null},this.instance=null}componentDidMount(){let e=S.mountControl(this.props.ymaps.control[this.props.name],this.props);this.instance=e,this.setState({instance:e})}componentDidUpdate(e){null!==this.instance&&S.updateControl(this.instance,e,this.props)}componentWillUnmount(){S.unmountControl(this.instance,this.props)}render(){return s.createElement(l.Provider,{value:this.state.instance},this.props.children)}static mountControl(e,t){let{instanceRef:o,parent:s,lazy:n,_events:a}=_(t),r=new e({data:k(t,"data"),options:k(t,"options"),state:k(t,"state"),mapTypes:k(t,"mapTypes"),lazy:n});if(Object.keys(a).forEach(e=>y(r,e,a[e])),s&&s.controls&&"function"==typeof s.controls.add)s.controls.add(r);else{if(!s||!s.add||"function"!=typeof s.add)throw Error(`No parent found to mount ${t.name}`);s.add(r)}return O(null,o,r),r}static updateControl(e,t,o){let{_events:s,instanceRef:n}=_(o),{_events:a,instanceRef:r}=_(t);if(x(o,"options")){let s=k(t,"options"),n=k(o,"options");s!==n&&e.options.set(n)}if(x(o,"data")){let s=k(t,"data"),n=k(o,"data");s!==n&&e.data.set(n)}if(x(o,"state")){let s=k(t,"state"),n=k(o,"state");s!==n&&e.state.set(n)}if(x(o,"mapTypes")){let s=k(t,"mapTypes"),n=k(o,"mapTypes");s!==n&&(e.removeAllMapTypes(),n.forEach(t=>e.addMapType(t)))}v(e,a,s),O(r,n,e)}static unmountControl(e,t){let{instanceRef:o,parent:s,_events:n}=_(t);null!==e&&(Object.keys(n).forEach(t=>g(e,t,n[t])),s.controls&&"function"==typeof s.controls.remove?s.controls.remove(e):s.remove&&"function"==typeof s.remove&&s.remove(e),O(o))}}w(i(d(e=>s.createElement(S,n({},e,{name:"Button"})),!0,["control.Button"]))),w(i(d(e=>s.createElement(S,n({},e,{name:"FullscreenControl"})),!0,["control.FullscreenControl"]))),w(i(d(e=>s.createElement(S,n({},e,{name:"GeolocationControl"})),!0,["control.GeolocationControl"]))),w(i(d(e=>s.createElement(S,n({},e,{name:"ListBox"})),!0,["control.ListBox"]))),w(i(d(e=>s.createElement(S,n({},e,{name:"ListBoxItem"})),!0,["control.ListBoxItem"]))),w(i(d(e=>s.createElement(S,n({},e,{name:"RouteButton"})),!0,["control.RouteButton"]))),w(i(d(e=>s.createElement(S,n({},e,{name:"RouteEditor"})),!0,["control.RouteEditor"]))),w(i(d(e=>s.createElement(S,n({},e,{name:"RoutePanel"})),!0,["control.RoutePanel"]))),w(i(d(e=>s.createElement(S,n({},e,{name:"RulerControl"})),!0,["control.RulerControl"]))),w(i(d(e=>s.createElement(S,n({},e,{name:"SearchControl"})),!0,["control.SearchControl"]))),w(i(d(e=>s.createElement(S,n({},e,{name:"TrafficControl"})),!0,["control.TrafficControl"]))),w(i(d(e=>s.createElement(S,n({},e,{name:"TypeSelector"})),!0,["control.TypeSelector"])));var $=w(i(d(e=>s.createElement(S,n({},e,{name:"ZoomControl"})),!0,["control.ZoomControl"])));class D extends s.Component{constructor(){super(),this.state={instance:null},this.instance=null}componentDidMount(){let e=D.mountObject(this.props.ymaps.Clusterer,this.props);this.instance=e,this.setState({instance:e})}componentDidUpdate(e){null!==this.state.instance&&D.updateObject(this.instance,e,this.props)}componentWillUnmount(){D.unmountObject(this.instance,this.props)}render(){return s.createElement(l.Provider,{value:this.state.instance},this.props.children)}static mountObject(e,t){let{instanceRef:o,parent:s,_events:n}=_(t),a=new e(k(t,"options"));if(Object.keys(n).forEach(e=>y(a,e,n[e])),s.geoObjects&&"function"==typeof s.geoObjects.add)s.geoObjects.add(a);else{if(!s.add||"function"!=typeof s.add)throw Error("No parent found to mount Clusterer");s.add(a)}return O(null,o,a),a}static updateObject(e,t,o){let{_events:s,instanceRef:n}=_(o),{_events:a,instanceRef:r}=_(t);if(x(o,"options")){let s=k(t,"options"),n=k(o,"options");s!==n&&e.options.set(n)}v(e,a,s),O(r,n,e)}static unmountObject(e,t){let{instanceRef:o,parent:s,_events:n}=_(t);null!==e&&(Object.keys(n).forEach(t=>g(e,t,n[t])),s.geoObjects&&"function"==typeof s.geoObjects.remove?s.geoObjects.remove(e):s.remove&&"function"==typeof s.remove&&s.remove(e),O(o))}}w(i(d(D,!0,["Clusterer"])));class N extends s.Component{constructor(){super(),this.state={instance:null}}componentDidMount(){let e=N.mountObject(this.props.ymaps.ObjectManager,this.props);this.instance=e,this.setState({instance:e})}componentDidUpdate(e){null!==this.instance&&N.updateObject(this.instance,e,this.props)}componentWillUnmount(){N.unmountObject(this.instance,this.props)}render(){return null}static mountObject(e,t){let{instanceRef:o,parent:s,_events:n}=_(t),a=k(t,"options",{}),r=k(t,"features",{}),l=k(t,"filter",null),i=k(t,"objects",{}),c=k(t,"clusters",{}),u=new e(a);if(u.add(r||[]),u.setFilter(l),u.objects.options.set(i),u.clusters.options.set(c),Object.keys(n).forEach(e=>y(u,e,n[e])),s.geoObjects&&"function"==typeof s.geoObjects.add)s.geoObjects.add(u);else{if(!s.add||"function"!=typeof s.add)throw Error("No parent found to mount ObjectManager");s.add(u)}return O(null,o,u),u}static updateObject(e,t,o){let{_events:s,instanceRef:n}=_(o),{_events:a,instanceRef:r}=_(t);if(x(o,"options")){let s=k(t,"options"),n=k(o,"options");s!==n&&e.options.set(n)}if(x(o,"objects")){let s=k(t,"objects"),n=k(o,"objects");s!==n&&e.objects.options.set(n)}if(x(o,"clusters")){let s=k(t,"clusters"),n=k(o,"clusters");s!==n&&e.clusters.options.set(n)}if(x(o,"filter")){let s=k(t,"filter"),n=k(o,"filter");s!==n&&e.setFilter(n)}if(x(o,"features")){let s=k(t,"features"),n=k(o,"features");s!==n&&(e.remove(s),e.add(n))}v(e,a,s),O(r,n,e)}static unmountObject(e,t){let{instanceRef:o,parent:s,_events:n}=_(t);null!==e&&(Object.keys(n).forEach(t=>g(e,t,n[t])),s.geoObjects&&"function"==typeof s.geoObjects.remove?s.geoObjects.remove(e):s.remove&&"function"==typeof s.remove&&s.remove(e),O(o))}}w(i(d(N,!0,["ObjectManager"])));class L extends s.Component{constructor(){super(),this.state={instance:null},this.instance=null}componentDidMount(){let{name:e,ymaps:t,dangerZone:o}=this.props,s=L.mountObject(o&&"function"==typeof o.modifyConstructor?o.modifyConstructor(t[e]):t[e],this.props);this.instance=s,this.setState({instance:s})}componentDidUpdate(e){null!==this.instance&&L.updateObject(this.instance,e,this.props)}componentWillUnmount(){L.unmountObject(this.instance,this.props)}render(){return null}static mountObject(e,t){let{instanceRef:o,parent:s,_events:n}=_(t),a=new e(k(t,"geometry"),k(t,"properties"),k(t,"options"));if(Object.keys(n).forEach(e=>y(a,e,n[e])),s&&s.geoObjects&&"function"==typeof s.geoObjects.add)s.geoObjects.add(a);else{if(!s||!s.add||"function"!=typeof s.add)throw Error(`No parent found to mount ${t.name}`);s.add(a)}return O(null,o,a),a}static updateObject(e,t,o){let{_events:s,instanceRef:n}=_(o),{_events:a,instanceRef:r}=_(t);if(x(o,"geometry")){let s=k(t,"geometry",{}),n=k(o,"geometry",{});Array.isArray(n)&&n!==s?Array.isArray(n[0])&&"number"==typeof n[1]?(e.geometry.setCoordinates(n[0]),e.geometry.setRadius(n[1])):e.geometry.setCoordinates(n):"object"==typeof n&&(n.coordinates!==s.coordinates&&e.geometry.setCoordinates(n.coordinates),n.radius!==s.radius&&e.geometry.setRadius(n.radius))}if(x(o,"properties")){let s=k(t,"properties"),n=k(o,"properties");s!==n&&e.properties.set(n)}if(x(o,"options")){let s=k(t,"options"),n=k(o,"options");s!==n&&e.options.set(n)}v(e,a,s),O(r,n,e)}static unmountObject(e,t){let{instanceRef:o,parent:s,_events:n}=_(t);null!==e&&(Object.keys(n).forEach(t=>g(e,t,n[t])),s.geoObjects&&"function"==typeof s.geoObjects.remove?s.geoObjects.remove(e):s.remove&&"function"==typeof s.remove&&s.remove(e),O(o))}}let T={modifyConstructor(e){function t(t,o,s){e.call(this,{geometry:t,properties:o},s)}return t.prototype=e.prototype,t}};w(i(d(e=>s.createElement(L,n({},e,{name:"GeoObject",dangerZone:T})),!0,["GeoObject"]))),w(i(d(e=>s.createElement(L,n({},e,{name:"Circle"})),!0,["Circle"])));var B=w(i(d(e=>s.createElement(L,n({},e,{name:"Placemark"})),!0,["Placemark"])));w(i(d(e=>s.createElement(L,n({},e,{name:"Polygon"})),!0,["Polygon"]))),w(i(d(e=>s.createElement(L,n({},e,{name:"Polyline"})),!0,["Polyline"]))),w(i(d(e=>s.createElement(L,n({},e,{name:"Rectangle"})),!0,["Rectangle"])))},12747:function(e,t,o){"use strict";o.r(t),o.d(t,{Map:function(){return X}});var s,n=o(57437),a=o(2265),r=o(85939),l=o.n(r),i=o(51189),c=o(92522),u=o(29311),p=o.n(u),d=o(92728);o(78681);var m=o(24843),b=o(2769),h=o(90683),f=o(84402),_=o(96345);let{all:y,kids:g,pets:v,breakfast:j,buffet:x,star3:k,star4:O}=d.attributes,{spb:E,msk:C}=d.cities,w=[{id:"20176",header:"Port Comfort by the Gostiniy Dvor 3*",address:"Санкт-Петербург, Садовая, 28-30",metro:[{station:"Невский пр.",class:"balloon_metro_blue",class2:""},{station:"Гостиный Двор",class:"balloon_metro_green",class2:""},{station:"",class:"balloon_metro_none",class2:"balloon_metro_none"}],img:"/images/map/balloon/gost.jpg",body:"<b>5 минут</b> до  <span class='balloon_blue_text'>Невского проспекта</span> и <span class='balloon_blue_text'>Казанского собора</span> , <br> <b>10 минут</b> до  <span class='balloon_blue_text'>Русского музея</span> и <span class='balloon_blue_text'>Спаса на Крови<span/>",href:`/hotels/spb/${h.D[f.h.gostiniyDvor]}`,coords:[59.930755,30.327932],city:{spb:E},beds:4,attributes:[j,k,v,g]},{id:"27469",header:"Port Comfort by Moyka 3*",address:"Санкт-Петербург, Гривцова, 4к2",metro:[{station:"Адмиралтейская ",class:"balloon_metro_purple",class2:""},{station:"Сенная площадь",class:"balloon_metro_blue",class2:""},{station:"Садовая",class:"balloon_metro_purple",class2:""}],img:"/images/map/balloon/moyka.jpg",body:"<b>12 минут</b> до  <span class='balloon_blue_text'>Дворцовой площади</span> и  <span class='balloon_blue_text'>Эрмитажа</span> </br> <b>5 минут</b> до  <span class='balloon_blue_text'>Исаакиевского собора</span>",href:`/hotels/spb/${h.D[f.h.moyka]}`,coords:[59.931062,30.314269],city:{spb:E},beds:4,attributes:[x,j,k,v,g]},{id:"10970",header:"Port Comfort on Ligovskiy 4*",address:"Санкт-Петербург, Лиговский, 29",metro:[{station:"Площадь Восстания",class:"balloon_metro_red",class2:""},{station:"Маяковcкая",class:"balloon_metro_green",class2:""},{station:"",class:"balloon_metro_none",class2:"balloon_metro_none"}],img:"/images/map/balloon/liga.jpg",body:"<b>5 минут</b> до <span class='balloon_blue_text'>Невского проспекта</span> и <span class='balloon_blue_text'>Московского вокзала</span> (Сапсан) </br> <b>15 минут</b> до  <span class='balloon_blue_text'>Летнего сада</span>",href:`/hotels/spb/${h.D[f.h.ligovskiy]}`,coords:[59.933591,30.362068],city:{spb:E},beds:4,attributes:[x,j,O,v,g]},{id:"27859",header:"Port Comfort by Smolnyy 3*",address:"Санкт-Петербург, Суворовский, 65Б",metro:[{station:"Чернышевская",class:"balloon_metro_red",class2:""},{station:"Пл. Восстания",class:"balloon_metro_red",class2:""},{station:"",class:"balloon_metro_none",class2:"balloon_metro_none"}],img:"/images/map/balloon/smol.jpg",body:"<b>5 минут</b> до  <span class='balloon_blue_text'>Смольного Собора</span>, <br> <b>7 минут</b> до  <span class='balloon_blue_text'>Таврического сада</span>",href:`/hotels/spb/${h.D[f.h.smolnyy]}`,coords:[59.944954,30.388138],city:{spb:E},beds:2,attributes:[j,k,v,g]},{id:"33783",header:"Port Comfort by Sennaya Square 4*",address:"Санкт-Петербург, Садовая, 53",metro:[{station:"Сенная",class:"balloon_metro_blue",class2:""},{station:"Спасская",class:"balloon_metro_orange",class2:""},{station:"Садовая",class:"balloon_metro_purple",class2:""}],img:"/images/map/balloon/sen.jpg",body:"<b>8 минут</b> до <span class='balloon_blue_text'>Мариинского театра</span>, <br> <b>15 минут</b> до <span class='balloon_blue_text'>Новой Голландии</span>, <span class='balloon_blue_text'>Исаакиевского собора </span>",href:`/hotels/spb/${h.D[f.h.sennaya]}`,coords:[59.923626,30.309804],city:{spb:E},beds:4,attributes:[x,j,O,v,g]},{id:"21668",header:"Port Comfort by Old Nevskiy 3*",address:"Санкт-Петербург, ул. Ал. Невского, 9В",metro:[{station:"Пл. Ал. Невского",class:"balloon_metro_green",class2:""},{station:"Пл. Ал. Невского",class:"balloon_metro_orange",class2:""},{station:"",class:"balloon_metro_none",class2:"balloon_metro_none"}],img:"/images/map/balloon/an.jpg",body:"<b>Одна станция метро</b> до <span class='balloon_blue_text'>Невского проспекта</span> и <span class='balloon_blue_text'>Московского Вокзала</span> (Сапсан) </br> <b>5 минут</b> до <span class='balloon_blue_text'>Александро-Невской лавры</span>",href:`/hotels/spb/${h.D[f.h.nevskiy]}`,coords:[59.925764,30.385065],city:{spb:E},beds:2,attributes:[k,v,g]},{id:"20776",header:" Port Comfort by the Griboedov 3*",address:"Санкт-Петербург, Бол. Подьяческая, 19",metro:[{station:"Сенная",class:"balloon_metro_blue",class2:""},{station:"Спасская ",class:"balloon_metro_orange",class2:""},{station:"Садовая",class:"balloon_metro_purple",class2:""}],img:"/images/map/balloon/griboedov.jpg",body:"<b>5 минут</b> до <span class='balloon_blue_text'>Мариинского театра</span>, <br> <b>12 минут</b> до <span class='balloon_blue_text'>Новой Голландии</span> и <span class='balloon_blue_text'>Исаакиевского собора</span>",href:`/hotels/spb/${h.D[f.h.griboedov]}`,coords:[59.924041,30.305205],city:{spb:E},beds:4,attributes:[j,k,v,g]},{id:"32789",header:"Port Comfort on Pokrovka 3*",address:"Москва, Покровка, 29",metro:[{station:"Чистые пруды",class:"balloon_metro_msk_red",class2:""},{station:"Курская",class:"balloon_metro_msk_blue",class2:""},{station:"Китай-город",class:"balloon_metro_msk_orange",class2:""}],img:"/images/map/balloon/pokrovka.jpg",body:"<b>2 минуты</b> до <span class='balloon_blue_text'>Чистых прудов</span> </br> <b>2 км</b> до <span class='balloon_blue_text'>Красной площади</span> и <span class='balloon_blue_text'>Кремля</span>",href:`/hotels/msk/${h.D[f.h.pokrovka]}`,coords:[55.760711,37.64792],city:{msk:C},beds:2,attributes:[k,v,g]}];function R(e){let{checked:t}=e,o=(0,m.GS)(b.Mq),s=(0,m.GS)(b.ai),[r,l]=a.useState([0,0]),[i,u]=a.useState(10),[d,h]=a.useState(!0),[g,v]=a.useState(!o),{city:j,beds:x,attributes:R}=t,P=a.useCallback(e=>{for(let t of R)if(!e.attributes.includes(t))return!0},[R]),M=a.useCallback(e=>{switch(!0){case s&&e===E:return 12;case s&&e===C:return 14;default:if(e===E||e===C)return 14}return 10},[s]),S=a.useCallback(e=>{switch(!0){case s&&e===E:return[59.946644,30.349868];case s&&e===C:return[55.762816,37.639824];case o&&e===E:return[59.941644,30.349868];case o&&e===C:return[55.762816,37.639824];default:if(e===E)return[59.937644,30.347868];if(e===C)return[55.762816,37.639824]}return[0,0]},[s,o]),$=a.useCallback(e=>{switch(!0){case e.attributes.includes(k):return"/images/map/placemarkI3.png";case e.attributes.includes(O):return"/images/map/placemarkI4.png";default:return""}},[]),D=a.useCallback(()=>{switch(!0){case s:return[46,46];case o:return[54,54];default:return[92,92]}},[o,s]),N=a.useCallback(e=>2===e.touches.length?v(!0):v(!1),[]),L=e=>t=>{"10970"===e.id&&d&&(t&&t.balloon.open(),h(!1))};a.useEffect(()=>{l(S(j)),u(M(j))},[j,o,s,S,M]);let T=e=>{let t=()=>{e===f.h.ligovskiy&&(0,_.ZP)("reachGoal","click-main-map-Ligovskiy"),e===f.h.griboedov?(0,_.ZP)("reachGoal","click-main-map-Griboedov"):(0,_.ZP)("reachGoal","click-main-map-most-hotels")},o=setInterval(()=>{let s=document.querySelector(`#link-${e}`);if(s)return s.addEventListener("click",t),clearInterval(o),()=>s.removeEventListener("click",t)},500);return()=>clearInterval(o)};return a.useEffect(()=>{T(f.h.ligovskiy),T(f.h.griboedov)},[]),(0,n.jsx)("div",{className:p().root,children:(0,n.jsx)(c.Yy,{query:{apikey:"497feeb6-dc95-47ca-b1c3-75a4c310c9b7"},children:(0,n.jsx)("div",{style:{width:"100%",height:"100%"},onTouchStart:e=>N(e),children:(0,n.jsxs)(c.D5,{width:"100%",height:"100%",defaultState:{center:r,zoom:i},instanceRef:e=>{e&&(e.behaviors.disable("scrollZoom"),e.setCenter(r,i).then(),o&&(g?e.behaviors.enable("drag"):e.behaviors.disable("drag")))},options:{yandexMapDisablePoiInteractivity:!0,suppressMapOpenBlock:!0,copyrightLogoVisible:!1,copyrightProvidersVisible:!1,copyrightUaVisible:!1},children:[(0,n.jsx)(c.Ly,{options:{position:{right:10,top:300},size:"small"}}),w.map(e=>{if(!(!R.includes(y)&&R.length>0&&P(e))&&(!x||!(x>e.beds)))return(0,n.jsx)(c.ah,{geometry:e.coords,properties:{balloonContent:`
                                <div class="description">
                                    <div class="description-container">
                                        <h2 class="title_balloon">${e.header}</h2>
                                        <div class="address"><img class="balloon_icon" src="/images/map/balloon/geo_icon.png" alt="address">${e.address}</div>
                                        <div class="metro"><img class="balloon_icon" src="/images/map/balloon/metro.png" alt="metro">рядом 
                                          <span class=${e.metro[0].class}>${e.metro[0].station}</span> 
                                          <span class=${e.metro[1].class2}>/</span>
                                          <span class=${e.metro[1].class}>${e.metro[1].station}</span> 
                                          <span class=${e.metro[2].class2}>/</span>
                                          <span class=${e.metro[2].class}>${e.metro[2].station}</span> 
                                        </div>
                                        <div class="extra-info">${e.body}</div>
                                        <a href="${e.href}" id="link-${e.id}">
                                            <button class="button_balloon" ><img src="/images/map/balloon/button.png" alt="button"></button>
                                        </a>
                                    </div>
                                    ${e.img?`<img class="balloon-hotel-image" src="${e.img}" alt="hotel image">`:""}
                                </div>
                            `},options:{balloonMaxWidth:650,balloonMaxHeight:280,balloonPanelMaxMapArea:s?1/0:0,balloonAutoPan:!s,iconLayout:"default#image",iconImageHref:$(e),iconImageSize:D(),zIndex:e.attributes.includes(O)?2:1},modules:["geoObject.addon.balloon","geoObject.addon.hint"],instanceRef:L(e)},e.id)})]})})})})}var P=o(63901),M=o.n(P),S=o(335),$=o(99837),D=o.n($),N=o(73417),L=o.n(N),T=o(16480),B=o.n(T);function G(e){let{options:t,placeholder:o,value:s,setValue:r}=e,[l,i]=a.useState(!1),c=a.useRef(null);return a.useEffect(()=>{if(document&&l){let e=e=>{e.target!==c.current&&i(!1)};return document.addEventListener("click",t=>e(t)),()=>document.removeEventListener("click",t=>e(t))}},[l]),(0,n.jsxs)("div",{className:L().root,role:"select",onClick:()=>(0,_.ZP)("reachGoal","click-main-map-city"),children:[(0,n.jsx)("span",{className:B()(L().selected,{[L().active]:l}),ref:c,onClick:()=>i(e=>!e),children:s||o}),(0,n.jsx)("ul",{className:B()(L().dropdown,{[L().active]:l}),children:t.map((e,t)=>(0,n.jsx)("li",{className:B()({[L().active]:s===e}),role:"option","aria-selected":s===e,"aria-disabled":s===e,"data-value":e,onClick:s!==e?r(e):null,children:e},t))})]})}let I=["Санкт-Петербург","Москва"],U=[1,2,3,4],A=[1,2];function z(e){let{checked:t,setCity:o,setBeds:s}=e;return(0,n.jsxs)("div",{className:D().root,children:[(0,n.jsx)(G,{options:I,placeholder:"Выбор города",value:t.city,setValue:o}),(0,n.jsx)(G,{options:t.city===d.cities.msk?A:U,placeholder:"Количество мест в номере",value:t.beds,setValue:s})]})}var V=o(25185),Z=o.n(V),q=o(3260),W=o.n(q),F=o(52846);function H(){return(H=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s])}return e}).apply(this,arguments)}var Y=e=>F.createElement("svg",H({xmlns:"http://www.w3.org/2000/svg",width:11,height:10,fill:"none"},e),s||(s=F.createElement("path",{fill:"#fff",d:"M10.767 4.5 8.702 6.424l.488 2.719a.71.71 0 0 1-.334.729.84.84 0 0 1-.824.04L5.5 8.64 2.968 9.91a.84.84 0 0 1-.823-.04.71.71 0 0 1-.334-.728l.487-2.72L.232 4.502a.695.695 0 0 1-.188-.762.78.78 0 0 1 .632-.488l2.838-.394L4.786.416A.79.79 0 0 1 5.5 0c.308 0 .581.16.714.417l1.272 2.44 2.838.394a.78.78 0 0 1 .632.488c.1.269.027.56-.188.762z"})));function K(e){let{text:t,isChecked:o,setValue:s,icon:a}=e;return(0,n.jsxs)("div",{role:"checkbox","aria-checked":o,className:B()(W().root,{[W().active]:o}),onClick:s(t,o),children:[(0,n.jsx)("span",{children:t}),a&&(0,n.jsx)(Y,{className:W().icon})]})}function Q(e){let{checked:t,setAttributes:o}=e,s=e=>e===d.attributes.all&&t.attributes.length<1&&!t.beds;return(0,n.jsxs)("div",{className:Z().root,children:[(0,n.jsx)(S.R,{rightTop:!0,fromLeftTop:!0,className:Z().angle}),Object.values(d.attributes).map((e,a,r)=>(0,n.jsx)(K,{text:e,icon:a===r.length-1||a===r.length-2,isChecked:t.attributes?.includes(e)||s(e),setValue:o},a))]})}function J(e){let{checked:t,setCity:o,setBeds:s,setAttributes:a}=e;return(0,n.jsxs)("div",{className:M().root,children:[(0,n.jsx)(S.R,{rightTop:!0,fromLeftTop:!0,className:M().angle1}),(0,n.jsx)(S.R,{leftBottom:!0,fromLeftTop:!0,className:M().angle2}),(0,n.jsx)(S.R,{rightBottom:!0,fromRightTop:!0,className:M().angle3}),(0,n.jsx)(z,{checked:t,setCity:o,setBeds:s}),(0,n.jsx)(Q,{checked:t,setAttributes:a})]})}function X(){let[e,t]=a.useState({city:d.cities.spb,beds:null,attributes:[]}),o=e=>e.attributes.filter(e=>e!==d.attributes.all),s=a.useCallback((e,t)=>{let s=o(t);return e===d.attributes.star3?s.filter(e=>e!==d.attributes.star4):e===d.attributes.star4?s.filter(e=>e!==d.attributes.star3):s},[]),r=a.useCallback(e=>()=>t(t=>({...t,beds:null,city:e})),[t]),c=a.useCallback(e=>()=>t(t=>({...t,beds:e,attributes:[...o(t)]})),[t]),u=a.useCallback((e,o)=>()=>{if(e===d.attributes.all){o?t(e=>({...e,attributes:[]})):t(t=>({city:t.city,beds:null,attributes:[e]}));return}o||t(t=>t.attributes?.length>0?{...t,attributes:[...s(e,t),e]}:{...t,attributes:[e]}),o&&t(t=>({...t,attributes:[...t.attributes.filter(t=>t!==e)]}))},[t,s]);return(0,n.jsx)("section",{className:l().root,children:(0,n.jsxs)(i.W,{className:l().container,children:[(0,n.jsx)("h2",{children:"Отели на карте"}),(0,n.jsxs)("div",{className:l().map_container,children:[(0,n.jsx)(J,{checked:e,setCity:r,setBeds:c,setAttributes:u}),(0,n.jsx)(R,{checked:e})]})]})})}},92728:function(e,t,o){"use strict";var s,n,a,r;o.d(t,{attributes:function(){return s},cities:function(){return n}}),(a=s||(s={})).all="Все объекты",a.kids="Можно с детьми",a.pets="Можно с питомцами",a.breakfast="С завтраком",a.buffet="\xabШведский стол\xbb",a.star3="Отели 3",a.star4="Отели 4",(r=n||(n={})).spb="Санкт-Петербург",r.msk="Москва"},43277:function(e,t,o){"use strict";o.d(t,{R:function(){return i}});var s=o(57437),n=o(46851),a=o.n(n),r=o(16480),l=o.n(r);function i(e){let{className:t,size:o=40,color:n="white",leftTop:r,leftBottom:i,rightTop:c,rightBottom:u,fromLeftTop:p,fromLeftBottom:d,fromRightBottom:m,fromRightTop:b}=e;return(0,s.jsx)("svg",{className:l()(a().angle,{[a().left_top]:r},{[a().left_bottom]:i},{[a().right_top]:c},{[a().right_bottom]:u},{[a().from_left_top]:p},{[a().from_left_bottom]:d},{[a().from_right_top]:b},{[a().from_right_bottom]:m},t),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",width:o,height:o,children:(0,s.jsx)("path",{fill:n,d:"M51.9 0v1.9c-27.6 0-50 22.4-50 50H0V0h51.9z"})})}},335:function(e,t,o){"use strict";o.d(t,{R:function(){return s.R}});var s=o(43277)},51189:function(e,t,o){"use strict";o.d(t,{W:function(){return i}});var s=o(57437);o(2265);var n=o(16480),a=o.n(n),r=o(89004),l=o.n(r);let i=e=>{let{as:t="div",className:o,children:n,...r}=e;return(0,s.jsx)(t,{className:a()(l().root,o),...r,children:n})}},84402:function(e,t,o){"use strict";var s,n;o.d(t,{h:function(){return s}}),(n=s||(s={})).ligovskiy="10970",n.griboedov="20776",n.gostiniyDvor="20176",n.nevskiy="21668",n.angliyskiy="42043",n.moyka="27469",n.sennaya="33783",n.smolnyy="27859",n.pokrovka="32789"},90683:function(e,t,o){"use strict";o.d(t,{D:function(){return s}});let s={10970:"ligovskiy",20776:"griboedov",20176:"gostiniy-dvor",21668:"old-nevskiy",42043:"angliyskiy",27469:"moyka",33783:"sennaya-square",27859:"smolnyy",32789:"pokrovka"}},78681:function(){},63901:function(e){e.exports={root:"style_root__LmP_S",angle1:"style_angle1__jydVz",angle3:"style_angle3__03MOV"}},73417:function(e){e.exports={root:"style_root__DLHe3",selected:"style_selected__Gb80R",active:"style_active__xIGLo",dropdown:"style_dropdown__j0NID"}},99837:function(e){e.exports={root:"style_root__6gevu"}},3260:function(e){e.exports={root:"style_root__32m1J",active:"style_active__gt2at",icon:"style_icon__9VxYX"}},25185:function(e){e.exports={root:"style_root__gGwao",angle:"style_angle__f_rDO"}},29311:function(e){e.exports={root:"style_root__pCBcO"}},85939:function(e){e.exports={container:"style_container__c937h",map_container:"style_map_container__porev",filters:"style_filters__2_tz8",selects:"style_selects__Sf9_b",checkboxes:"style_checkboxes__4FMBK"}},46851:function(e){e.exports={angle:"style_angle__llpPU",left_bottom:"style_left_bottom__oHwdE",from_right_bottom:"style_from_right_bottom___8doH",from_left_top:"style_from_left_top__GqZQ7",left_top:"style_left_top__2F4Ih",from_right_top:"style_from_right_top__moHFr",from_left_bottom:"style_from_left_bottom__K4_yO",right_bottom:"style_right_bottom__PVpjs",right_top:"style_right_top__4bpQM"}},89004:function(e){e.exports={root:"style_root__FVTmd"}}}]);