(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1989:function(a,b,c){var d=c(1789),e=c(401),f=c(7667),g=c(1327),h=c(1866);function i(a){var b=-1,c=null==a?0:a.length;for(this.clear();++b<c;){var d=a[b];this.set(d[0],d[1])}}i.prototype.clear=d,i.prototype.delete=e,i.prototype.get=f,i.prototype.has=g,i.prototype.set=h,a.exports=i},8407:function(a,b,c){var d=c(7040),e=c(4125),f=c(2117),g=c(7518),h=c(4705);function i(a){var b=-1,c=null==a?0:a.length;for(this.clear();++b<c;){var d=a[b];this.set(d[0],d[1])}}i.prototype.clear=d,i.prototype.delete=e,i.prototype.get=f,i.prototype.has=g,i.prototype.set=h,a.exports=i},7071:function(a,b,c){var d=c(852),e=c(5639),f=d(e,"Map");a.exports=f},3369:function(a,b,c){var d=c(4785),e=c(1285),f=c(6000),g=c(9916),h=c(5265);function i(a){var b=-1,c=null==a?0:a.length;for(this.clear();++b<c;){var d=a[b];this.set(d[0],d[1])}}i.prototype.clear=d,i.prototype.delete=e,i.prototype.get=f,i.prototype.has=g,i.prototype.set=h,a.exports=i},2705:function(a,b,c){var d=c(5639).Symbol;a.exports=d},9932:function(a){a.exports=function(a,b){for(var c=-1,d=null==a?0:a.length,e=Array(d);++c<d;)e[c]=b(a[c],c,a);return e}},8470:function(a,b,c){var d=c(355);a.exports=function(a,b){for(var c=a.length;c--;)if(d(a[c][0],b))return c;return -1}},4239:function(a,b,c){var d=c(2705),e=c(9607),f=c(2333),g=d?d.toStringTag:void 0;a.exports=function(a){return null==a?void 0===a?"[object Undefined]":"[object Null]":g&&g in Object(a)?e(a):f(a)}},8565:function(a){var b=Object.prototype.hasOwnProperty;a.exports=function(a,c){return null!=a&&b.call(a,c)}},9454:function(a,b,c){var d=c(4239),e=c(7005);a.exports=function(a){return e(a)&&"[object Arguments]"==d(a)}},8458:function(a,b,c){var d=c(3560),e=c(5346),f=c(3218),g=c(346),h=/^\[object .+?Constructor\]$/,i=Function.prototype,j=Object.prototype,k=i.toString,l=j.hasOwnProperty,m=RegExp("^"+k.call(l).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");a.exports=function(a){return!(!f(a)||e(a))&&(d(a)?m:h).test(g(a))}},531:function(a,b,c){var d=c(2705),e=c(9932),f=c(1469),g=c(3448),h=1/0,i=d?d.prototype:void 0,j=i?i.toString:void 0;function k(a){if("string"==typeof a)return a;if(f(a))return e(a,k)+"";if(g(a))return j?j.call(a):"";var b=a+"";return"0"==b&&1/a== -h?"-0":b}a.exports=k},1811:function(a,b,c){var d=c(1469),e=c(5403),f=c(5514),g=c(9833);a.exports=function(a,b){return d(a)?a:e(a,b)?[a]:f(g(a))}},4429:function(a,b,c){var d=c(5639)["__core-js_shared__"];a.exports=d},1957:function(a,b,c){var d="object"==typeof c.g&&c.g&&c.g.Object===Object&&c.g;a.exports=d},5050:function(a,b,c){var d=c(7019);a.exports=function(a,b){var c=a.__data__;return d(b)?c["string"==typeof b?"string":"hash"]:c.map}},852:function(a,b,c){var d=c(8458),e=c(7801);a.exports=function(a,b){var c=e(a,b);return d(c)?c:void 0}},9607:function(a,b,c){var d=c(2705),e=Object.prototype,f=e.hasOwnProperty,g=e.toString,h=d?d.toStringTag:void 0;a.exports=function(a){var b=f.call(a,h),c=a[h];try{a[h]=void 0;var d=!0}catch(e){}var i=g.call(a);return d&&(b?a[h]=c:delete a[h]),i}},7801:function(a){a.exports=function(a,b){return null==a?void 0:a[b]}},222:function(a,b,c){var d=c(1811),e=c(5694),f=c(1469),g=c(5776),h=c(8329),i=c(327);a.exports=function(a,b,c){b=d(b,a);for(var j=-1,k=b.length,l=!1;++j<k;){var m=i(b[j]);if(!(l=null!=a&&c(a,m)))break;a=a[m]}return l|| ++j!=k?l:!!(k=null==a?0:a.length)&&h(k)&&g(m,k)&&(f(a)||e(a))}},1789:function(a,b,c){var d=c(4536);a.exports=function(){this.__data__=d?d(null):{},this.size=0}},401:function(a){a.exports=function(a){var b=this.has(a)&&delete this.__data__[a];return this.size-=b?1:0,b}},7667:function(a,b,c){var d=c(4536),e=Object.prototype.hasOwnProperty;a.exports=function(a){var b=this.__data__;if(d){var c=b[a];return"__lodash_hash_undefined__"===c?void 0:c}return e.call(b,a)?b[a]:void 0}},1327:function(a,b,c){var d=c(4536),e=Object.prototype.hasOwnProperty;a.exports=function(a){var b=this.__data__;return d?void 0!==b[a]:e.call(b,a)}},1866:function(a,b,c){var d=c(4536);a.exports=function(a,b){var c=this.__data__;return this.size+=this.has(a)?0:1,c[a]=d&& void 0===b?"__lodash_hash_undefined__":b,this}},5776:function(a){var b=/^(?:0|[1-9]\d*)$/;a.exports=function(a,c){var d=typeof a;return!!(c=null==c?9007199254740991:c)&&("number"==d||"symbol"!=d&&b.test(a))&&a> -1&&a%1==0&&a<c}},5403:function(a,b,c){var d=c(1469),e=c(3448),f=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,g=/^\w*$/;a.exports=function(a,b){if(d(a))return!1;var c=typeof a;return!!("number"==c||"symbol"==c||"boolean"==c||null==a||e(a))||g.test(a)||!f.test(a)||null!=b&&a in Object(b)}},7019:function(a){a.exports=function(a){var b=typeof a;return"string"==b||"number"==b||"symbol"==b||"boolean"==b?"__proto__"!==a:null===a}},5346:function(a,b,c){var d,e=c(4429),f=(d=/[^.]+$/.exec(e&&e.keys&&e.keys.IE_PROTO||""))?"Symbol(src)_1."+d:"";a.exports=function(a){return!!f&&f in a}},7040:function(a){a.exports=function(){this.__data__=[],this.size=0}},4125:function(a,b,c){var d=c(8470),e=Array.prototype.splice;a.exports=function(a){var b=this.__data__,c=d(b,a);return!(c<0)&&(c==b.length-1?b.pop():e.call(b,c,1),--this.size,!0)}},2117:function(a,b,c){var d=c(8470);a.exports=function(a){var b=this.__data__,c=d(b,a);return c<0?void 0:b[c][1]}},7518:function(a,b,c){var d=c(8470);a.exports=function(a){return d(this.__data__,a)> -1}},4705:function(a,b,c){var d=c(8470);a.exports=function(a,b){var c=this.__data__,e=d(c,a);return e<0?(++this.size,c.push([a,b])):c[e][1]=b,this}},4785:function(a,b,c){var d=c(1989),e=c(8407),f=c(7071);a.exports=function(){this.size=0,this.__data__={hash:new d,map:new(f||e),string:new d}}},1285:function(a,b,c){var d=c(5050);a.exports=function(a){var b=d(this,a).delete(a);return this.size-=b?1:0,b}},6000:function(a,b,c){var d=c(5050);a.exports=function(a){return d(this,a).get(a)}},9916:function(a,b,c){var d=c(5050);a.exports=function(a){return d(this,a).has(a)}},5265:function(a,b,c){var d=c(5050);a.exports=function(a,b){var c=d(this,a),e=c.size;return c.set(a,b),this.size+=c.size==e?0:1,this}},4523:function(a,b,c){var d=c(8306);a.exports=function(a){var b=d(a,function(a){return 500===c.size&&c.clear(),a}),c=b.cache;return b}},4536:function(a,b,c){var d=c(852)(Object,"create");a.exports=d},2333:function(a){var b=Object.prototype.toString;a.exports=function(a){return b.call(a)}},5639:function(a,b,c){var d=c(1957),e="object"==typeof self&&self&&self.Object===Object&&self,f=d||e||Function("return this")();a.exports=f},5514:function(a,b,c){var d=c(4523),e=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,f=/\\(\\)?/g,g=d(function(a){var b=[];return 46===a.charCodeAt(0)&&b.push(""),a.replace(e,function(a,c,d,e){b.push(d?e.replace(f,"$1"):c||a)}),b});a.exports=g},327:function(a,b,c){var d=c(3448),e=1/0;a.exports=function(a){if("string"==typeof a||d(a))return a;var b=a+"";return"0"==b&&1/a== -e?"-0":b}},346:function(a){var b=Function.prototype.toString;a.exports=function(a){if(null!=a){try{return b.call(a)}catch(c){}try{return a+""}catch(d){}}return""}},355:function(a){a.exports=function(a,b){return a===b||a!=a&&b!=b}},8721:function(a,b,c){var d=c(8565),e=c(222);a.exports=function(a,b){return null!=a&&e(a,b,d)}},5694:function(a,b,c){var d=c(9454),e=c(7005),f=Object.prototype,g=f.hasOwnProperty,h=f.propertyIsEnumerable,i=d(function(){return arguments}())?d:function(a){return e(a)&&g.call(a,"callee")&&!h.call(a,"callee")};a.exports=i},1469:function(a){var b=Array.isArray;a.exports=b},3560:function(a,b,c){var d=c(4239),e=c(3218);a.exports=function(a){if(!e(a))return!1;var b=d(a);return"[object Function]"==b||"[object GeneratorFunction]"==b||"[object AsyncFunction]"==b||"[object Proxy]"==b}},8329:function(a){a.exports=function(a){return"number"==typeof a&&a> -1&&a%1==0&&a<=9007199254740991}},3218:function(a){a.exports=function(a){var b=typeof a;return null!=a&&("object"==b||"function"==b)}},7005:function(a){a.exports=function(a){return null!=a&&"object"==typeof a}},3448:function(a,b,c){var d=c(4239),e=c(7005);a.exports=function(a){return"symbol"==typeof a||e(a)&&"[object Symbol]"==d(a)}},8306:function(a,b,c){var d=c(3369);function e(a,b){if("function"!=typeof a||null!=b&&"function"!=typeof b)throw new TypeError("Expected a function");var c=function(){var d=arguments,e=b?b.apply(this,d):d[0],f=c.cache;if(f.has(e))return f.get(e);var g=a.apply(this,d);return c.cache=f.set(e,g)||f,g};return c.cache=new(e.Cache||d),c}e.Cache=d,a.exports=e},9833:function(a,b,c){var d=c(531);a.exports=function(a){return null==a?"":d(a)}},8581:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c(8151)}])},8151:function(a,b,c){"use strict";c.r(b),c.d(b,{"default":function(){return s}});var d=c(5893),e=c(7294),f="undefined"!=typeof browser,g="undefined"!=typeof chrome,h=c(8721),i=c.n(h),j=(0,e.createContext)({}),k=function(a){var b=a.children,c=a.data,h=(0,e.useState)(void 0===c?{}:c),k=h[0],l=h[1];return(0,e.useEffect)(function(){(f?browser.storage.local.get("data").then(function(a){return a}):g?new Promise(function(a,b){chrome.storage.local.get("data",function(c){chrome.runtime.lastError?b(chrome.runtime.lastError):a(c)})}):Promise.resolve({})).then(function(a){i()(a,"data")&&l(a.data)})},[]),(0,e.useEffect)(function(){var a;a=k,f?browser.storage.local.set({data:a}):g?new Promise(function(b,c){chrome.storage.local.set({data:a},function(){chrome.runtime.lastError?c(chrome.runtime.lastError):b()})}):Promise.resolve({})},[k]),(0,d.jsx)(j.Provider,{value:{data:k,setData:l},children:b})};function l(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}j.Consumer;var m=function(a){a.children;var b=a.className,c=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["children","className"]);return(0,d.jsx)("h1",function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){l(a,b,c[b])})}return a}({className:void 0===b?"text-xl font-semibold border-b-2 border-yellow-500 mb-3":b},c,{children:"Magnet Links"}))},n=c(5988);function o(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var p=function(a){var b=a.children,c=a.className,e=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["children","className"]);return(0,d.jsxs)("main",function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){o(a,b,c[b])})}return a}({},e,{className:"jsx-ea026d644cd8caf2 "+(e&&null!=e.className&&e.className||(void 0===c?"font-sans mx-auto my-3 max-w-screen-sm px-4 py-3 text-lg":c)||""),children:[(0,d.jsx)(n.default,{id:"ea026d644cd8caf2",children:"body {min-width:320px}\n@media (prefers-color-scheme:dark) {body {color:#fff;\nbackground:#000}\ninput {color:#000;\nbackground:#fff}}"}),b]}))};function q(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var r=function(a){var b=a.children,c=a.className,e=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["children","className"]);return(0,d.jsx)("p",function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){q(a,b,c[b])})}return a}({className:void 0===c?"mb-4":c},e,{children:b}))},s=function(){return(0,d.jsx)(k,{children:(0,d.jsx)(function(){return(0,e.useContext)(j).isEditing,(0,d.jsxs)(p,{children:[(0,d.jsx)(m,{}),(0,d.jsx)(r,{children:"Replace words and links"})]})},{})})}},7884:function(a,b,c){"use strict";b.default=i;var d,e=(d=c(7294))&&d.__esModule?d:{"default":d},f=c(8122),g=c(9035),h=e.default.useInsertionEffect||e.default.useLayoutEffect;function i(a){var b=(0,f.useStyleRegistry)();return b?"undefined"==typeof window?(b.add(a),null):(h(function(){return b.add(a),function(){b.remove(a)}},[a.id,String(a.dynamic)]),null):null}i.dynamic=function(a){return a.map(function(a){var b=a[0],c=a[1];return(0,g.computeId)(b,c)}).join(" ")}},5988:function(a,b,c){a.exports=c(7884)}},function(a){a.O(0,[774,888,179],function(){return a(a.s=8581)}),_N_E=a.O()}])