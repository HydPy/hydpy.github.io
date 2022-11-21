/*! For license information please see component---src-pages-schedule-js-526e871d657d9af5c6f5.js.LICENSE.txt */
(self.webpackChunkpyconf_hyderabad_2022=self.webpackChunkpyconf_hyderabad_2022||[]).push([[336],{8093:function(e,t,r){var n;n=function(e){return function(){var t={"./node_modules/css-mediaquery/index.js":function(e,t){"use strict";t.match=function(e,t){return s(e).some((function(e){var r=e.inverse,n="all"===e.type||t.type===e.type;if(n&&r||!n&&!r)return!1;var o=e.expressions.every((function(e){var r=e.feature,n=e.modifier,o=e.value,i=t[r];if(!i)return!1;switch(r){case"orientation":case"scan":return i.toLowerCase()===o.toLowerCase();case"width":case"height":case"device-width":case"device-height":o=l(o),i=l(i);break;case"resolution":o=c(o),i=c(i);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":o=u(o),i=u(i);break;case"grid":case"color":case"color-index":case"monochrome":o=parseInt(o,10)||1,i=parseInt(i,10)||0}switch(n){case"min":return i>=o;case"max":return i<=o;default:return i===o}}));return o&&!r||!o&&r}))},t.parse=s;var r=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,n=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,o=/^(?:(min|max)-)?(.+)/,i=/(em|rem|px|cm|mm|in|pt|pc)?$/,a=/(dpi|dpcm|dppx)?$/;function s(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(r),i=t[1],a=t[2],s=t[3]||"",u={};return u.inverse=!!i&&"not"===i.toLowerCase(),u.type=a?a.toLowerCase():"all",s=s.match(/\([^\)]+\)/g)||[],u.expressions=s.map((function(e){var t=e.match(n),r=t[1].toLowerCase().match(o);return{modifier:r[1],feature:r[2],value:t[2]}})),u}))}function u(e){var t,r=Number(e);return r||(r=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),r}function c(e){var t=parseFloat(e);switch(String(e).match(a)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function l(e){var t=parseFloat(e);switch(String(e).match(i)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},"./node_modules/hyphenate-style-name/index.js":function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}});var n=/[A-Z]/g,o=/^ms-/,i={};function a(e){return"-"+e.toLowerCase()}var s=function(e){if(i.hasOwnProperty(e))return i[e];var t=e.replace(n,a);return i[e]=o.test(t)?"-"+t:t}},"./node_modules/matchmediaquery/index.js":function(e,t,r){"use strict";var n=r("./node_modules/css-mediaquery/index.js").match,o="undefined"!=typeof window?window.matchMedia:null;function i(e,t,r){var i=this;if(o&&!r){var a=o.call(window,e);this.matches=a.matches,this.media=a.media,a.addListener(s)}else this.matches=n(e,t),this.media=e;function s(e){i.matches=e.matches,i.media=e.media}this.addListener=function(e){a&&a.addListener(e)},this.removeListener=function(e){a&&a.removeListener(e)},this.dispose=function(){a&&a.removeListener(s)}}e.exports=function(e,t,r){return new i(e,t,r)}},"./node_modules/object-assign/index.js":function(e){"use strict";var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,i){for(var a,s,u=o(e),c=1;c<arguments.length;c++){for(var l in a=Object(arguments[c]))r.call(a,l)&&(u[l]=a[l]);if(t){s=t(a);for(var f=0;f<s.length;f++)n.call(a,s[f])&&(u[s[f]]=a[s[f]])}}return u}},"./node_modules/prop-types/checkPropTypes.js":function(e,t,r){"use strict";var n=function(){},o=r("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),i={},a=r("./node_modules/prop-types/lib/has.js");function s(e,t,r,s,u){for(var c in e)if(a(e,c)){var l;try{if("function"!=typeof e[c]){var f=Error((s||"React class")+": "+r+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw f.name="Invariant Violation",f}l=e[c](t,c,s,r,null,o)}catch(p){l=p}if(!l||l instanceof Error||n((s||"React class")+": type specification of "+r+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof l+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),l instanceof Error&&!(l.message in i)){i[l.message]=!0;var d=u?u():"";n("Failed "+r+" type: "+l.message+(null!=d?d:""))}}}n=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(r){}},s.resetWarningCache=function(){i={}},e.exports=s},"./node_modules/prop-types/factoryWithTypeCheckers.js":function(e,t,r){"use strict";var n=r("./node_modules/react-is/index.js"),o=r("./node_modules/object-assign/index.js"),i=r("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),a=r("./node_modules/prop-types/lib/has.js"),s=r("./node_modules/prop-types/checkPropTypes.js"),u=function(){};function c(){return null}u=function(e){var t="Warning: "+e;"undefined"!=typeof console&&console.error(t);try{throw new Error(t)}catch(r){}},e.exports=function(e,t){var r="function"==typeof Symbol&&Symbol.iterator,l="<<anonymous>>",f={array:y("array"),bigint:y("bigint"),bool:y("boolean"),func:y("function"),number:y("number"),object:y("object"),string:y("string"),symbol:y("symbol"),any:m(c),arrayOf:function(e){return m((function(t,r,n,o,a){if("function"!=typeof e)return new p("Property `"+a+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var s=t[r];if(!Array.isArray(s))return new p("Invalid "+o+" `"+a+"` of type `"+v(s)+"` supplied to `"+n+"`, expected an array.");for(var u=0;u<s.length;u++){var c=e(s,u,n,o,a+"["+u+"]",i);if(c instanceof Error)return c}return null}))},element:m((function(t,r,n,o,i){var a=t[r];return e(a)?null:new p("Invalid "+o+" `"+i+"` of type `"+v(a)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:m((function(e,t,r,o,i){var a=e[t];return n.isValidElementType(a)?null:new p("Invalid "+o+" `"+i+"` of type `"+v(a)+"` supplied to `"+r+"`, expected a single ReactElement type.")})),instanceOf:function(e){return m((function(t,r,n,o,i){if(!(t[r]instanceof e)){var a=e.name||l;return new p("Invalid "+o+" `"+i+"` of type `"+((s=t[r]).constructor&&s.constructor.name?s.constructor.name:l)+"` supplied to `"+n+"`, expected instance of `"+a+"`.")}var s;return null}))},node:m((function(e,t,r,n,o){return b(e[t])?null:new p("Invalid "+n+" `"+o+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return m((function(t,r,n,o,s){if("function"!=typeof e)return new p("Property `"+s+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var u=t[r],c=v(u);if("object"!==c)return new p("Invalid "+o+" `"+s+"` of type `"+c+"` supplied to `"+n+"`, expected an object.");for(var l in u)if(a(u,l)){var f=e(u,l,n,o,s+"."+l,i);if(f instanceof Error)return f}return null}))},oneOf:function(e){if(!Array.isArray(e))return u(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),c;function t(t,r,n,o,i){for(var a=t[r],s=0;s<e.length;s++)if(d(a,e[s]))return null;var u=JSON.stringify(e,(function(e,t){return"symbol"===g(t)?String(t):t}));return new p("Invalid "+o+" `"+i+"` of value `"+String(a)+"` supplied to `"+n+"`, expected one of "+u+".")}return m(t)},oneOfType:function(e){if(!Array.isArray(e))return u("Invalid argument supplied to oneOfType, expected an instance of array."),c;for(var t=0;t<e.length;t++){var r=e[t];if("function"!=typeof r)return u("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+w(r)+" at index "+t+"."),c}return m((function(t,r,n,o,s){for(var u=[],c=0;c<e.length;c++){var l=(0,e[c])(t,r,n,o,s,i);if(null==l)return null;l.data&&a(l.data,"expectedType")&&u.push(l.data.expectedType)}return new p("Invalid "+o+" `"+s+"` supplied to `"+n+"`"+(u.length>0?", expected one of type ["+u.join(", ")+"]":"")+".")}))},shape:function(e){return m((function(t,r,n,o,a){var s=t[r],u=v(s);if("object"!==u)return new p("Invalid "+o+" `"+a+"` of type `"+u+"` supplied to `"+n+"`, expected `object`.");for(var c in e){var l=e[c];if("function"!=typeof l)return h(n,o,a,c,g(l));var f=l(s,c,n,o,a+"."+c,i);if(f)return f}return null}))},exact:function(e){return m((function(t,r,n,s,u){var c=t[r],l=v(c);if("object"!==l)return new p("Invalid "+s+" `"+u+"` of type `"+l+"` supplied to `"+n+"`, expected `object`.");var f=o({},t[r],e);for(var d in f){var m=e[d];if(a(e,d)&&"function"!=typeof m)return h(n,s,u,d,g(m));if(!m)return new p("Invalid "+s+" `"+u+"` key `"+d+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(t[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var y=m(c,d,n,s,u+"."+d,i);if(y)return y}return null}))}};function d(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function p(e,t){this.message=e,this.data=t&&"object"==typeof t?t:{},this.stack=""}function m(e){var r={},n=0;function o(o,a,s,c,f,d,m){if(c=c||l,d=d||s,m!==i){if(t){var y=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw y.name="Invariant Violation",y}if("undefined"!=typeof console){var h=c+":"+s;!r[h]&&n<3&&(u("You are manually calling a React.PropTypes validation function for the `"+d+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[h]=!0,n++)}}return null==a[s]?o?null===a[s]?new p("The "+f+" `"+d+"` is marked as required in `"+c+"`, but its value is `null`."):new p("The "+f+" `"+d+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(a,s,c,f,d)}var a=o.bind(null,!1);return a.isRequired=o.bind(null,!0),a}function y(e){return m((function(t,r,n,o,i,a){var s=t[r];return v(s)!==e?new p("Invalid "+o+" `"+i+"` of type `"+g(s)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function h(e,t,r,n,o){return new p((e||"React class")+": "+t+" type `"+r+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function b(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(b);if(null===t||e(t))return!0;var n=function(e){var t=e&&(r&&e[r]||e["@@iterator"]);if("function"==typeof t)return t}(t);if(!n)return!1;var o,i=n.call(t);if(n!==t.entries){for(;!(o=i.next()).done;)if(!b(o.value))return!1}else for(;!(o=i.next()).done;){var a=o.value;if(a&&!b(a[1]))return!1}return!0;default:return!1}}function v(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function g(e){if(null==e)return""+e;var t=v(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function w(e){var t=g(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return p.prototype=Error.prototype,f.checkPropTypes=s,f.resetWarningCache=s.resetWarningCache,f.PropTypes=f,f}},"./node_modules/prop-types/index.js":function(e,t,r){var n=r("./node_modules/react-is/index.js");e.exports=r("./node_modules/prop-types/factoryWithTypeCheckers.js")(n.isElement,!0)},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"./node_modules/prop-types/lib/has.js":function(e){e.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":function(e,t){"use strict";!function(){var e="function"==typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,a=e?Symbol.for("react.profiler"):60114,s=e?Symbol.for("react.provider"):60109,u=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,l=e?Symbol.for("react.concurrent_mode"):60111,f=e?Symbol.for("react.forward_ref"):60112,d=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,m=e?Symbol.for("react.memo"):60115,y=e?Symbol.for("react.lazy"):60116,h=e?Symbol.for("react.block"):60121,b=e?Symbol.for("react.fundamental"):60117,v=e?Symbol.for("react.responder"):60118,g=e?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:var p=e.type;switch(p){case c:case l:case o:case a:case i:case d:return p;default:var h=p&&p.$$typeof;switch(h){case u:case f:case y:case m:case s:return h;default:return t}}case n:return t}}}var k=c,x=l,P=u,M=s,j=r,S=f,O=o,C=y,_=m,T=n,A=a,L=i,E=d,I=!1;function R(e){return w(e)===l}t.AsyncMode=k,t.ConcurrentMode=x,t.ContextConsumer=P,t.ContextProvider=M,t.Element=j,t.ForwardRef=S,t.Fragment=O,t.Lazy=C,t.Memo=_,t.Portal=T,t.Profiler=A,t.StrictMode=L,t.Suspense=E,t.isAsyncMode=function(e){return I||(I=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),R(e)||w(e)===c},t.isConcurrentMode=R,t.isContextConsumer=function(e){return w(e)===u},t.isContextProvider=function(e){return w(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return w(e)===f},t.isFragment=function(e){return w(e)===o},t.isLazy=function(e){return w(e)===y},t.isMemo=function(e){return w(e)===m},t.isPortal=function(e){return w(e)===n},t.isProfiler=function(e){return w(e)===a},t.isStrictMode=function(e){return w(e)===i},t.isSuspense=function(e){return w(e)===d},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===l||e===a||e===i||e===d||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===m||e.$$typeof===s||e.$$typeof===u||e.$$typeof===f||e.$$typeof===b||e.$$typeof===v||e.$$typeof===g||e.$$typeof===h)},t.typeOf=w}()},"./node_modules/react-is/index.js":function(e,t,r){"use strict";e.exports=r("./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":function(e,t,r){"use strict";function n(e,t){if(e===t)return!0;if(!e||!t)return!1;var r=Object.keys(e),n=Object.keys(t),o=r.length;if(n.length!==o)return!1;for(var i=0;i<o;i++){var a=r[i];if(e[a]!==t[a]||!Object.prototype.hasOwnProperty.call(t,a))return!1}return!0}function o(e,t){if(e===t)return!0;if(!e||!t)return!1;var r=e.length;if(t.length!==r)return!1;for(var n=0;n<r;n++)if(e[n]!==t[n])return!1;return!0}r.r(t),r.d(t,{shallowEqualArrays:function(){return o},shallowEqualObjects:function(){return n}})},"./src/Component.ts":function(e,t,r){"use strict";var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=o(r("./src/useMediaQuery.ts"));t.default=function(e){var t=e.children,r=e.device,o=e.onChange,a=n(e,["children","device","onChange"]),s=(0,i.default)(a,r,o);return"function"==typeof t?t(s):s?t:null}},"./src/Context.ts":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=(0,r("react").createContext)(void 0);t.default=n},"./src/index.ts":function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Context=t.toQuery=t.useMediaQuery=t.default=void 0;var o=n(r("./src/useMediaQuery.ts"));t.useMediaQuery=o.default;var i=n(r("./src/Component.ts"));t.default=i.default;var a=n(r("./src/toQuery.ts"));t.toQuery=a.default;var s=n(r("./src/Context.ts"));t.Context=s.default},"./src/mediaQuery.ts":function(e,t,r){"use strict";var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)},o=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=i(r("./node_modules/prop-types/index.js")),s=a.default.oneOfType([a.default.string,a.default.number]),u={all:a.default.bool,grid:a.default.bool,aural:a.default.bool,braille:a.default.bool,handheld:a.default.bool,print:a.default.bool,projection:a.default.bool,screen:a.default.bool,tty:a.default.bool,tv:a.default.bool,embossed:a.default.bool},c={orientation:a.default.oneOf(["portrait","landscape"]),scan:a.default.oneOf(["progressive","interlace"]),aspectRatio:a.default.string,deviceAspectRatio:a.default.string,height:s,deviceHeight:s,width:s,deviceWidth:s,color:a.default.bool,colorIndex:a.default.bool,monochrome:a.default.bool,resolution:s,type:Object.keys(u)},l=o(c,["type"]),f=n({minAspectRatio:a.default.string,maxAspectRatio:a.default.string,minDeviceAspectRatio:a.default.string,maxDeviceAspectRatio:a.default.string,minHeight:s,maxHeight:s,minDeviceHeight:s,maxDeviceHeight:s,minWidth:s,maxWidth:s,minDeviceWidth:s,maxDeviceWidth:s,minColor:a.default.number,maxColor:a.default.number,minColorIndex:a.default.number,maxColorIndex:a.default.number,minMonochrome:a.default.number,maxMonochrome:a.default.number,minResolution:s,maxResolution:s},l),d=n(n({},u),f);t.default={all:d,types:u,matchers:c,features:f}},"./src/toQuery.ts":function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r("./node_modules/hyphenate-style-name/index.js")),i=n(r("./src/mediaQuery.ts"));t.default=function(e){var t=[];return Object.keys(i.default.all).forEach((function(r){var n=e[r];null!=n&&t.push(function(e,t){var r=(0,o.default)(e);return"number"==typeof t&&(t="".concat(t,"px")),!0===t?r:!1===t?"not ".concat(r):"(".concat(r,": ").concat(t,")")}(r,n))})),t.join(" and ")}},"./src/useMediaQuery.ts":function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r("react"),i=n(r("./node_modules/matchmediaquery/index.js")),a=n(r("./node_modules/hyphenate-style-name/index.js")),s=r("./node_modules/shallow-equal/dist/index.esm.js"),u=n(r("./src/toQuery.ts")),c=n(r("./src/Context.ts")),l=function(e){if(e)return Object.keys(e).reduce((function(t,r){return t[(0,a.default)(r)]=e[r],t}),{})},f=function(){var e=(0,o.useRef)(!1);return(0,o.useEffect)((function(){e.current=!0}),[]),e.current},d=function(e){var t=function(){return function(e){return e.query||(0,u.default)(e)}(e)},r=(0,o.useState)(t),n=r[0],i=r[1];return(0,o.useEffect)((function(){var e=t();n!==e&&i(e)}),[e]),n};t.default=function(e,t,r){var n=function(e){var t=(0,o.useContext)(c.default),r=function(){return l(e)||l(t)},n=(0,o.useState)(r),i=n[0],a=n[1];return(0,o.useEffect)((function(){var e=r();(0,s.shallowEqualObjects)(i,e)||a(e)}),[e,t]),i}(t),a=d(e);if(!a)throw new Error("Invalid or missing MediaQuery!");var u=function(e,t){var r=function(){return(0,i.default)(e,t||{},!!t)},n=(0,o.useState)(r),a=n[0],s=n[1],u=f();return(0,o.useEffect)((function(){if(u){var e=r();return s(e),function(){e&&e.dispose()}}}),[e,t]),a}(a,n),p=function(e){var t=(0,o.useState)(e.matches),r=t[0],n=t[1];return(0,o.useEffect)((function(){var t=function(e){n(e.matches)};return e.addListener(t),n(e.matches),function(){e.removeListener(t)}}),[e]),r}(u),m=f();return(0,o.useEffect)((function(){m&&r&&r(p)}),[p]),(0,o.useEffect)((function(){return function(){u&&u.dispose()}}),[]),p}},react:function(t){"use strict";t.exports=e}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return t[e].call(i.exports,i,i.exports,n),i.exports}return n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/index.ts")}()},e.exports=n(r(7294))},1552:function(e,t,r){"use strict";var n=r(977);t.Z=function(e){return(0,n.tZ)("ul",Object.assign({},e,{sx:{listStyle:"none",p:0}}))}},8262:function(e,t,r){"use strict";r.r(t),r.d(t,{buttonsx:function(){return m},default:function(){return y}});var n=r(977),o=r(9935),i=r(1552),a=r(7306),s=r(9919),u=r(2639),c=r(7416),l=r(7294),f=r(8093),d=function(e){var t=e.time,r=e.workList;return(0,n.tZ)(o.kC,{sx:{m:2,p:2,backgroundColor:"#2f2762",flexWrap:["wrap","nowrap"],alignItems:"center",justifyContent:"center",color:"white",borderStyle:"solid",borderWidth:"light",borderRadius:10}},(0,n.tZ)("div",{sx:{flex:"none",fontSize:2,fontWeight:"bold",p:2,m:2}},t),(0,n.tZ)(o.kC,{sx:{p:2,m:2,flexWrap:"wrap",flexGrow:3,justifyContent:"center",borderColor:"while",borderStyle:"solid",borderWidth:"light"}},r.map((function(e){return(0,n.tZ)("div",{sx:{p:2,m:2,textAlign:"center",borderColor:"#FFD580",borderStyle:"solid",borderWidth:"light",fontSize:2}},(0,n.tZ)(o.xu,{sx:{fontWeight:"bold"}},e.title),(0,n.tZ)(o.xu,null,e.speaker),(0,n.tZ)(o.xu,null,e.room))}))))},p=function(e){var t=e.time,r=e.workList;(0,f.useMediaQuery)({query:"(min-width: 1224px)"});return(0,n.tZ)(d,{time:t,workList:r})},m=function(e){return e?{display:"inline-block",outline:"none",cursor:"pointer",fontSize:"16px",lineHeight:"20px",fontWeight:"400",borderRadius:"8px",padding:"14px 24px",border:"none",transition:"box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s",background:"#ec5d25",color:"#fff"}:{display:"inline-block",outline:"none",cursor:"pointer",fontSize:"16px",lineHeight:"20px",fontWeight:"300",borderRadius:"8px",padding:"13px 23px",border:"1px solid #222222",transition:"box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s",background:"#fff",color:"#222222","&:hover":{borderColor:"#000000",background:"#f7f7f7"}}},y=function(e){e.data;var t=s,r=u,f=(0,l.useState)(!0),d=f[0],y=f[1];return(0,n.tZ)("div",{className:"body-wrap"},(0,n.tZ)(a.h,{bg:"#2f2762",classHeader:"absolute"}),(0,n.tZ)("div",{sx:{maxWidth:"900px",margin:"auto"}},(0,n.tZ)(o.W2,null,(0,n.tZ)("div",{sx:{display:"flex",justifyContent:"center"}},(0,n.tZ)(c.Z,{mt:100},"Schedule")),(0,n.tZ)("div",{sx:{m:3,display:"flex",flexWrap:"wrap",justifyContent:"space-evenly",alignItems:"center"}},(0,n.tZ)("button",{sx:m(d),onClick:function(){return y(!0)}},"Conference"),(0,n.tZ)("button",{sx:m(!d),onClick:function(){return y(!1)}},"Workshop")),d&&(0,n.tZ)("div",null,(0,n.tZ)(i.Z,null,t.map((function(e){return(0,n.tZ)("li",{key:e.time},(0,n.tZ)(p,e))})))),!d&&(0,n.tZ)("div",null,(0,n.tZ)(i.Z,null,r.map((function(e){return(0,n.tZ)("li",{key:e.time},(0,n.tZ)(p,e))})))))))}},9919:function(e){"use strict";e.exports=JSON.parse('[{"time":"09:30AM","workList":[{"title":"Keynote [Opening]","time":"9:30AM - 10:30AM","speaker":"Sebastian Ramirez","track":"Conference Hall","discription":null}]},{"time":"10:30AM","workList":[{"title":"Talk - 1 [Monorepos with Python]","time":"10:30AM - 11:00AM","speaker":"AbdealiJK","track":"Conference Hall","discription":"Working with python is fun. Managing python packaging, linters, tests, CI, etc. is not as fun. Every maintainer needs to worry about consistent styling, quality, speed of tests, etc as the project grows. Monorepos have been successful in other communities - how does it work in Python ?"}]},{"time":"11:00AM","workList":[{"title":"Talk - 2 [Coconut- Pythonic Functional Programming]","time":"11:00AM - 11:30AM","speaker":"Kesia Mary Joies","track":"Conference Hall","discription":"Isnt it interesting to learn a programming language that is a superset of Python and is capable of adding on some cool functional programming features? If you want to write all your code purely functionally, Coconut is here for a smooth experience- simple, cleaner, readable code."}]},{"time":"11:30AM","workList":[{"title":"Tea / Coffee Break","time":"11:30AM - 11:45AM","speaker":"Food Partner","track":"Cafetria","description":"Enjoy the tea and network."}]},{"time":"11:45AM","workList":[{"title":"Talk-3 [Building a Multi-tenant Software-as-a-Service solution with Django and Django-Tenants]","time":"11:45AM - 12:15PM","speaker":"Jatin Goel","track":"Conference Hall","discription":"Modern solutions require to be scalable and cater to the needs of different customers by keeping their data segregated. Come explore how we can build scalable solutions with Django and truly make a Multi-Tenant solution, different ways possible to achieve this and how we’ve cracked that tough nut."}]},{"time":"12:15PM","workList":[{"title":"Talk-4 [Sponsored Talk from EPAM followed by Innominds (Platinum Sponsors)]","time":"12:15PM - 12:45PM","speaker":"TBA","track":"Conference Hall","discription":"Sponsored Talks."}]},{"time":"12:45PM","workList":[{"title":"Lunch","time":"12:45PM - 1:45PM","speaker":"Food Partner","track":"Cafetria","discription":"Enjoy the lunch and network."}]},{"time":"1:45PM","workList":[{"title":"Talk-5 [Let us PyScript!]","time":"1:45PM - 2:15PM","speaker":"AbdulMajedRaja RS","track":"Conference Hall","discription":"PyScript lets you write Python Code inside HTML to create Client-Side Web apps (Remember PHP?). Still early days but I believe it’s going to be huge in the future, so why not teach everyone about this? Let us PyScript to build Python based Web apps that are just HTML files."}]},{"time":"2:15PM","workList":[{"title":"Talk-6 [Sniffing your way through the network]","time":"2:15PM - 2:45PM","speaker":"Saurabh Nandedkar","track":"Conference Hall","discription":"Have you ever wondered what are all the different things that you can do with Python? It’s obviously not just writing web applications or processing CSV, right? You are absolutely correct there’s so much more that we can do we it and in this talk, I will demonstrate working with raw network traffic."}]},{"time":"2:45PM","workList":[{"title":"Drinks Break","time":"2:45PM - 3:00PM","speaker":"participants","track":"Cafetria","discription":"Tea Break + Networking."}]},{"time":"3:00PM","workList":[{"title":"Talk-7 [Panel Discussion]","time":"3:00PM - 3:30PM","speaker":"TBA","track":"Conference Hall","discription":"Panel Discussion, Topic - TBA."}]},{"time":"3:30PM","workList":[{"title":"Talk-8 [Role of Digital Twin towards Sustainability]","time":"3:30PM - 4:00PM","speaker":"Sharmistha Chatterjee","track":"Conference Hall","discription":"The aim of this talk is to enable sustainable development with a digital twin model, which can help data scientists, environmentalists, and climate experts to anticipate environmental/network changes (be it climate, or operator network) and mitigate their impacts by design, modeling and simulations."}]},{"time":"4:00PM","workList":[{"title":"Lightining Talks (6)","time":"4:00PM - 4:30PM","speaker":"Ashok Tankala, Hemangi Karchalkar , Kaushal","track":"Conference Hall","discription":null}]},{"time":"4:30PM","workList":[{"title":"Talk-9 [Exploring Abstract Syntax Trees by writing a linter with Python\'s ast module]","time":"4:30PM - 5:00PM","speaker":"Yashvardhan Kukreja","track":"Conference Hall","discription":"Aliquip ea sunt eiusmod velit."}]},{"time":"5:00PM","workList":[{"title":"Keynote [Closing]","time":"5:00PM - 6:00PM","speaker":"Usha Rengaraju","track":"Conference Hall","discription":null}]}]')},2639:function(e){"use strict";e.exports=JSON.parse('[{"time":"09:00AM","workList":[{"title":"Workshop Registration","discription":"Registration.","track":"11th Floor Security","speaker":"Session Chair","time":"9:00AM - 9:30AM"},{"title":"Tea/Coffee","discription":"Tea/Coffee & Network.","track":"Cafetria","speaker":"Food Partner","time":"9:30AM - 10:00AM"}]},{"time":"10:00AM","workList":[{"title":"Decorators and Generators - Control your code with ease","speaker":"Satyam Soni","discription":"Decorators and Generators are very powerful and super handy constructs in Python when it comes to write re-usable code and controlled flow. Most of the Python developers know or would have heard of these constructs but only a few know how they are used.","track":"Track-101","time":"10:00AM - 01:00PM"},{"title":"Scaling the PyData Ecosystem with Dask","speaker":"Pavithra Eswaramoorthy","discription":"Dask is a library for parallel computing in Python. You will learn to - Scale PyData tools (Numpy, pandas, etc.) to larger-than-memory and distributed environments, - Use interactive diagnostic tools to understand performance, - Customize workflows with low-level APIs, and deploy Dask clusters.","track":"Track-102","time":"10:00AM - 1:00PM"},{"title":"Deploying Diffusion Models at Scale","speaker":"Aniket Maurya","discription":"Learn to deploy a text-to-image machine learning model (Stable Diffusion) supporting 500+ concurrent users. Deploying large AI models is not trivial; we will explore overcoming infrastructure challenges, building autoscaling and dynamic batching, maximizing your GPU, and serving ML models at scale.","track":"Track-103","time":"10:00AM - 1:00PM"},{"title":"Young Learners Workshop","speaker":"Bhanu K & his team","discription":"Python Workshop for kids using Microbits.","track":"Track-104","time":"10:00AM - 1:00PM"}]},{"time":"1:00PM","workList":[{"title":"Networking","speaker":"participants","discription":"Network with fellow Attendees & meet Sponsors.","track":"Sponsor hall way","time":"1:00PM - 1:15PM"},{"title":"Lunch Break","speaker":"Food Partner","discription":"Cafeteria/Hall way.","track":"Cafetria","time":"1:15PM - 2:00PM"}]},{"time":"2:00PM","workList":[{"title":"Python for Data Analysis","speaker":"Sasidhar Donaparthi","discription":"This workshop will cover how Python can be used for Data Analysis using packages like numpy and pandas. At the end of the session, attendees will be able to apply/perform techniques like data transformations, understanding the data, dealing with data exceptions like missing values, outliers, etc..","track":"Track-101","time":"02:00PM - 5:00PM"},{"title":"TBA","speaker":"TBA","discription":"TBA","track":"Track-102","time":"02:00PM - 5:00PM"},{"title":"TBA","speaker":"TBA","discription":"TBA","track":"Track-103","time":"02:00PM - 5:00PM"}]}]')}}]);
//# sourceMappingURL=component---src-pages-schedule-js-526e871d657d9af5c6f5.js.map