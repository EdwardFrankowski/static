(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6345],{18314:function(t,e,n){"use strict";var r=n(41811);function o(){}function i(){}i.resetWarningCache=o,t.exports=function(){function t(t,e,n,o,i,a){if(a!==r){var c=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function e(){return t}t.isRequired=t;var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},74404:function(t,e,n){t.exports=n(18314)()},41811:function(t){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},61556:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.YMInitializer=void 0;var r=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==s(t)&&"function"!=typeof t)return{default:t};var e=u();if(e&&e.has(t))return e.get(t);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var i=r?Object.getOwnPropertyDescriptor(t,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=t[o]}return n.default=t,e&&e.set(t,n),n}(n(2265)),o=c(n(74404)),i=c(n(82441)),a=n(71607);function c(t){return t&&t.__esModule?t:{default:t}}function u(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return u=function(){return t},t}function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var y=function(t){var e,n;function o(){var t;return!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,o),t=p(o).apply(this,arguments),t&&("object"===s(t)||"function"==typeof t)?t:function(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(this)}return!function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(o,t),e=[{key:"componentDidMount",value:function(){(0,i.default)(this.props.accounts,this.props.options,this.props.version);var t=document.createElement("script"),e=this.props.attrs;t.type="text/javascript",t.async=!0,t.src=(0,a.scriptPath)(this.props.version),Object.keys(e).map(function(n){t.__proto__.hasOwnProperty(n)&&t.setAttribute(n,e[n])}),this.insertPoint.insertBefore(t,null)}},{key:"render",value:function(){var t=this;return r.default.createElement(this.props.containerElement,{ref:function(e){t.insertPoint=e}},this.props.children)}}],f(o.prototype,e),n&&f(o,n),o}(r.Component);e.YMInitializer=y,y.displayName="YMInitializer",y.propTypes={accounts:o.default.arrayOf(o.default.number).isRequired,containerElement:o.default.string,options:o.default.object,attrs:o.default.object,version:o.default.oneOf(["1","2"])},y.defaultProps={containerElement:"div",options:{},attrs:{},version:"1"}},71607:function(t,e){"use strict";function n(){throw Error("invalid Ya.Metrika version")}Object.defineProperty(e,"__esModule",{value:!0}),e.callbackQueueName=function(t){return"1"===t?"yandex_metrika_callbacks":"2"===t?"yandex_metrika_callbacks2":void n()},e.scriptPath=function(t){return"1"===t?"https://mc.yandex.ru/metrika/watch.js":"2"===t?"https://mc.yandex.ru/metrika/tag.js":void n()},e.trackerConstructorName=function(t){return"1"===t?"Metrika":"2"===t?"Metrika2":void n()},e.trackerInstanceName=function(t){return"yaCounter".concat(t)},e.trackerVersionName=function(t){return"yaCounterVersion".concat(t)},e.accountListName=void 0,e.accountListName="yandex_metrika_accounts"},96345:function(t,e,n){"use strict";Object.defineProperty(e,"OR",{enumerable:!0,get:function(){return o.YMInitializer}}),e.ZP=void 0;var r=n(71607),o=n(61556);function i(t,e){try{for(var n,o=arguments.length,i=Array(o>2?o-2:0),a=2;a<o;a++)i[a-2]=arguments[a];(n=window[(0,r.trackerInstanceName)(t)])[e].apply(n,i)}catch(t){console.warn(t)}}e.ZP=function(){var t;return(t="undefined"!=typeof window?window[r.accountListName]:[],function(){for(var e=arguments.length,n=Array(e),o=0;o<e;o++)n[o]=arguments[o];t.forEach(function(t){var e=window[(0,r.trackerVersionName)(t)],o=window[(0,r.callbackQueueName)(e)];o?o.push(function(){return i.apply(void 0,[t].concat(n))}):i.apply(void 0,[t].concat(n))})}).apply(void 0,arguments)}},82441:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"1",o=(0,r.callbackQueueName)(n);window[r.accountListName]=window[r.accountListName]||[],window[r.accountListName]=window[r.accountListName].concat(t),window[o]=window[o]||[],window[o].push(function(){t.forEach(function(t){try{window[(0,r.trackerInstanceName)(t)]=new Ya[(0,r.trackerConstructorName)(n)](Object.assign({id:t},e))}catch(t){console.warn(t)}})}),t.forEach(function(t){window[(0,r.trackerVersionName)(t)]=n})};var r=n(71607)}}]);