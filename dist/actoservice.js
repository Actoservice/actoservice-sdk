!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],e):e(t["actoservice-sdk"]={},t.React)}(this,function(t,r){"use strict";var c="default"in r?r.default:r,g=Array.isArray,e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(t,e){return t(e={exports:{}},e.exports),e.exports}var a="object"==typeof e&&e&&e.Object===Object&&e,o="object"==typeof self&&self&&self.Object===Object&&self,u=a||o||Function("return this")(),i=u.Symbol,s=Object.prototype,l=s.hasOwnProperty,f=s.toString,p=i?i.toStringTag:void 0;var v=function(t){var e=l.call(t,p),n=t[p];try{t[p]=void 0}catch(t){}var r=f.call(t);return e?t[p]=n:delete t[p],r},h=Object.prototype.toString;var d=function(t){return h.call(t)},y=i?i.toStringTag:void 0;var b=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":y&&y in Object(t)?v(t):d(t)};var _=function(t){return null!=t&&"object"==typeof t};var j=function(t){return"symbol"==typeof t||_(t)&&"[object Symbol]"==b(t)},m=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,w=/^\w*$/;var O=function(t,e){if(g(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!j(t))||w.test(t)||!m.test(t)||null!=e&&t in Object(e)};var C=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)};var A,E=function(t){if(!C(t))return!1;var e=b(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},x=u["__core-js_shared__"],S=(A=/[^.]+$/.exec(x&&x.keys&&x.keys.IE_PROTO||""))?"Symbol(src)_1."+A:"";var k=function(t){return!!S&&S in t},P=Function.prototype.toString;var T=function(t){if(null!=t){try{return P.call(t)}catch(t){}try{return t+""}catch(t){}}return""},M=/^\[object .+?Constructor\]$/,z=Function.prototype,R=Object.prototype,q=z.toString,F=R.hasOwnProperty,I=RegExp("^"+q.call(F).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var $=function(t){return!(!C(t)||k(t))&&(E(t)?I:M).test(T(t))};var B=function(t,e){return null==t?void 0:t[e]};var D=function(t,e){var n=B(t,e);return $(n)?n:void 0},U=D(Object,"create");var V=function(){this.__data__=U?U(null):{},this.size=0};var N=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},L=Object.prototype.hasOwnProperty;var W=function(t){var e=this.__data__;if(U){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return L.call(e,t)?e[t]:void 0},H=Object.prototype.hasOwnProperty;var G=function(t){var e=this.__data__;return U?void 0!==e[t]:H.call(e,t)};var J=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=U&&void 0===e?"__lodash_hash_undefined__":e,this};function K(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}K.prototype.clear=V,K.prototype.delete=N,K.prototype.get=W,K.prototype.has=G,K.prototype.set=J;var Q=K;var X=function(){this.__data__=[],this.size=0};var Y=function(t,e){return t===e||t!=t&&e!=e};var Z=function(t,e){for(var n=t.length;n--;)if(Y(t[n][0],e))return n;return-1},tt=Array.prototype.splice;var et=function(t){var e=this.__data__,n=Z(e,t);return!(n<0||(n==e.length-1?e.pop():tt.call(e,n,1),--this.size,0))};var nt=function(t){var e=this.__data__,n=Z(e,t);return n<0?void 0:e[n][1]};var rt=function(t){return-1<Z(this.__data__,t)};var ot=function(t,e){var n=this.__data__,r=Z(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function it(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}it.prototype.clear=X,it.prototype.delete=et,it.prototype.get=nt,it.prototype.has=rt,it.prototype.set=ot;var at=it,ut=D(u,"Map");var ct=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var st=function(t,e){var n=t.__data__;return ct(e)?n["string"==typeof e?"string":"hash"]:n.map};var lt=function(t){var e=st(this,t).delete(t);return this.size-=e?1:0,e};var ft=function(t){return st(this,t).get(t)};var pt=function(t){return st(this,t).has(t)};var vt=function(t,e){var n=st(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function ht(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}ht.prototype.clear=function(){this.size=0,this.__data__={hash:new Q,map:new(ut||at),string:new Q}},ht.prototype.delete=lt,ht.prototype.get=ft,ht.prototype.has=pt,ht.prototype.set=vt;var dt=ht,yt="Expected a function";function gt(o,i){if("function"!=typeof o||null!=i&&"function"!=typeof i)throw new TypeError(yt);var a=function(){var t=arguments,e=i?i.apply(this,t):t[0],n=a.cache;if(n.has(e))return n.get(e);var r=o.apply(this,t);return a.cache=n.set(e,r)||n,r};return a.cache=new(gt.Cache||dt),a}gt.Cache=dt;var bt=gt;var _t=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,jt=/\\(\\)?/g,mt=function(t){var e=bt(t,function(t){return 500===n.size&&n.clear(),t}),n=e.cache;return e}(function(t){var o=[];return 46===t.charCodeAt(0)&&o.push(""),t.replace(_t,function(t,e,n,r){o.push(n?r.replace(jt,"$1"):e||t)}),o});var wt=function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o},Ot=1/0,Ct=i?i.prototype:void 0,At=Ct?Ct.toString:void 0;var Et=function t(e){if("string"==typeof e)return e;if(g(e))return wt(e,t)+"";if(j(e))return At?At.call(e):"";var n=e+"";return"0"==n&&1/e==-Ot?"-0":n};var xt=function(t){return null==t?"":Et(t)};var St=function(t,e){return g(t)?t:O(t,e)?[t]:mt(xt(t))};var kt=function(t){if("string"==typeof t||j(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e};var Pt=function(t,e){for(var n=0,r=(e=St(e,t)).length;null!=t&&n<r;)t=t[kt(e[n++])];return n&&n==r?t:void 0};var Tt=function(t,e,n){var r=null==t?void 0:Pt(t,e);return void 0===r?n:r};var Mt=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n};var zt=function(t){return this.__data__.get(t)};var Rt=function(t){return this.__data__.has(t)};var qt=function(t,e){var n=this.__data__;if(n instanceof at){var r=n.__data__;if(!ut||r.length<199)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new dt(r)}return n.set(t,e),this.size=n.size,this};function Ft(t){var e=this.__data__=new at(t);this.size=e.size}Ft.prototype.clear=function(){this.__data__=new at,this.size=0},Ft.prototype.delete=Mt,Ft.prototype.get=zt,Ft.prototype.has=Rt,Ft.prototype.set=qt;var It=Ft;var $t=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r&&!1!==e(t[n],n,t););return t},Bt=function(){try{var t=D(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();var Dt=function(t,e,n){"__proto__"==e&&Bt?Bt(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n},Ut=Object.prototype.hasOwnProperty;var Vt=function(t,e,n){var r=t[e];Ut.call(t,e)&&Y(r,n)&&(void 0!==n||e in t)||Dt(t,e,n)};var Nt=function(t,e,n,r){var o=!n;n||(n={});for(var i=-1,a=e.length;++i<a;){var u=e[i],c=r?r(n[u],t[u],u,n,t):void 0;void 0===c&&(c=t[u]),o?Dt(n,u,c):Vt(n,u,c)}return n};var Lt=function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r};var Wt=function(t){return _(t)&&"[object Arguments]"==b(t)},Ht=Object.prototype,Gt=Ht.hasOwnProperty,Jt=Ht.propertyIsEnumerable,Kt=Wt(function(){return arguments}())?Wt:function(t){return _(t)&&Gt.call(t,"callee")&&!Jt.call(t,"callee")};var Qt=function(){return!1},Xt=n(function(t,e){var n=e&&!e.nodeType&&e,r=n&&t&&!t.nodeType&&t,o=r&&r.exports===n?u.Buffer:void 0,i=(o?o.isBuffer:void 0)||Qt;t.exports=i}),Yt=/^(?:0|[1-9]\d*)$/;var Zt=function(t,e){var n=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==n||"symbol"!=n&&Yt.test(t))&&-1<t&&t%1==0&&t<e};var te=function(t){return"number"==typeof t&&-1<t&&t%1==0&&t<=9007199254740991},ee={};ee["[object Float32Array]"]=ee["[object Float64Array]"]=ee["[object Int8Array]"]=ee["[object Int16Array]"]=ee["[object Int32Array]"]=ee["[object Uint8Array]"]=ee["[object Uint8ClampedArray]"]=ee["[object Uint16Array]"]=ee["[object Uint32Array]"]=!0,ee["[object Arguments]"]=ee["[object Array]"]=ee["[object ArrayBuffer]"]=ee["[object Boolean]"]=ee["[object DataView]"]=ee["[object Date]"]=ee["[object Error]"]=ee["[object Function]"]=ee["[object Map]"]=ee["[object Number]"]=ee["[object Object]"]=ee["[object RegExp]"]=ee["[object Set]"]=ee["[object String]"]=ee["[object WeakMap]"]=!1;var ne=function(t){return _(t)&&te(t.length)&&!!ee[b(t)]};var re=function(e){return function(t){return e(t)}},oe=n(function(t,e){var n=e&&!e.nodeType&&e,r=n&&t&&!t.nodeType&&t,o=r&&r.exports===n&&a.process,i=function(){try{var t=r&&r.require&&r.require("util").types;return t||o&&o.binding&&o.binding("util")}catch(t){}}();t.exports=i}),ie=oe&&oe.isTypedArray,ae=ie?re(ie):ne,ue=Object.prototype.hasOwnProperty;var ce=function(t,e){var n=g(t),r=!n&&Kt(t),o=!n&&!r&&Xt(t),i=!n&&!r&&!o&&ae(t),a=n||r||o||i,u=a?Lt(t.length,String):[],c=u.length;for(var s in t)!e&&!ue.call(t,s)||a&&("length"==s||o&&("offset"==s||"parent"==s)||i&&("buffer"==s||"byteLength"==s||"byteOffset"==s)||Zt(s,c))||u.push(s);return u},se=Object.prototype;var le=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||se)};var fe=function(e,n){return function(t){return e(n(t))}},pe=fe(Object.keys,Object),ve=Object.prototype.hasOwnProperty;var he=function(t){if(!le(t))return pe(t);var e=[];for(var n in Object(t))ve.call(t,n)&&"constructor"!=n&&e.push(n);return e};var de=function(t){return null!=t&&te(t.length)&&!E(t)};var ye=function(t){return de(t)?ce(t):he(t)};var ge=function(t,e){return t&&Nt(e,ye(e),t)};var be=function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e},_e=Object.prototype.hasOwnProperty;var je=function(t){if(!C(t))return be(t);var e=le(t),n=[];for(var r in t)("constructor"!=r||!e&&_e.call(t,r))&&n.push(r);return n};var me=function(t){return de(t)?ce(t,!0):je(t)};var we=function(t,e){return t&&Nt(e,me(e),t)},Oe=n(function(t,e){var n=e&&!e.nodeType&&e,r=n&&t&&!t.nodeType&&t,o=r&&r.exports===n?u.Buffer:void 0,i=o?o.allocUnsafe:void 0;t.exports=function(t,e){if(e)return t.slice();var n=t.length,r=i?i(n):new t.constructor(n);return t.copy(r),r}});var Ce=function(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e};var Ae=function(t,e){for(var n=-1,r=null==t?0:t.length,o=0,i=[];++n<r;){var a=t[n];e(a,n,t)&&(i[o++]=a)}return i};var Ee=function(){return[]},xe=Object.prototype.propertyIsEnumerable,Se=Object.getOwnPropertySymbols,ke=Se?function(e){return null==e?[]:(e=Object(e),Ae(Se(e),function(t){return xe.call(e,t)}))}:Ee;var Pe=function(t,e){return Nt(t,ke(t),e)};var Te=function(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t},Me=fe(Object.getPrototypeOf,Object),ze=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)Te(e,ke(t)),t=Me(t);return e}:Ee;var Re=function(t,e){return Nt(t,ze(t),e)};var qe=function(t,e,n){var r=e(t);return g(t)?r:Te(r,n(t))};var Fe=function(t){return qe(t,ye,ke)};var Ie=function(t){return qe(t,me,ze)},$e=D(u,"DataView"),Be=D(u,"Promise"),De=D(u,"Set"),Ue=D(u,"WeakMap"),Ve="[object Map]",Ne="[object Promise]",Le="[object Set]",We="[object WeakMap]",He="[object DataView]",Ge=T($e),Je=T(ut),Ke=T(Be),Qe=T(De),Xe=T(Ue),Ye=b;($e&&Ye(new $e(new ArrayBuffer(1)))!=He||ut&&Ye(new ut)!=Ve||Be&&Ye(Be.resolve())!=Ne||De&&Ye(new De)!=Le||Ue&&Ye(new Ue)!=We)&&(Ye=function(t){var e=b(t),n="[object Object]"==e?t.constructor:void 0,r=n?T(n):"";if(r)switch(r){case Ge:return He;case Je:return Ve;case Ke:return Ne;case Qe:return Le;case Xe:return We}return e});var Ze=Ye,tn=Object.prototype.hasOwnProperty;var en=function(t){var e=t.length,n=new t.constructor(e);return e&&"string"==typeof t[0]&&tn.call(t,"index")&&(n.index=t.index,n.input=t.input),n},nn=u.Uint8Array;var rn=function(t){var e=new t.constructor(t.byteLength);return new nn(e).set(new nn(t)),e};var on=i?i.prototype:void 0;on&&on.valueOf;var an=function(t,e){var n=e?rn(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)};var un=Object.create,cn=function(){function n(){}return function(t){if(!C(t))return{};if(un)return un(t);n.prototype=t;var e=new n;return n.prototype=void 0,e}}();var sn=function(t){return"function"!=typeof t.constructor||le(t)?{}:cn(Me(t))};var ln=function(t){return _(t)&&"[object Map]"==Ze(t)},fn=oe&&oe.isMap,pn=fn?re(fn):ln;var vn=function(t){return _(t)&&"[object Set]"==Ze(t)},hn=oe&&oe.isSet,dn=hn?re(hn):vn,yn=1,gn=2,bn=4,_n="[object Arguments]",jn="[object Function]",mn="[object GeneratorFunction]",wn="[object Object]";var On=function n(r,o,i,t,e,a){var u,c=o&yn,s=o&gn,l=o&bn;if(i&&(u=e?i(r,t,e,a):i(r)),void 0!==u)return u;if(!C(r))return r;var f=g(r);if(f){if(u=en(r),!c)return Ce(r,u)}else{var p=Ze(r),v=p==jn||p==mn;if(Xt(r))return Oe(r,c);if(p!=wn&&p!=_n&&(!v||e))return e?r:{};if(u=s||v?{}:sn(r),!c)return s?Re(r,we(u,r)):Pe(r,ge(u,r))}a||(a=new It);var h=a.get(r);if(h)return h;if(a.set(r,u),dn(r))return r.forEach(function(t){u.add(n(t,o,i,t,r,a))}),u;if(pn(r))return r.forEach(function(t,e){u.set(e,n(t,o,i,e,r,a))}),u;var d=l?s?Ie:Fe:s?keysIn:ye,y=f?void 0:d(r);return $t(y||r,function(t,e){y&&(t=r[e=t]),Vt(u,e,n(t,o,i,e,r,a))}),u};var Cn=function(t){var e=null==t?0:t.length;return e?t[e-1]:void 0};var An=function(t,e,n){var r=-1,o=t.length;e<0&&(e=o<-e?0:o+e),(n=o<n?o:n)<0&&(n+=o),o=n<e?0:n-e>>>0,e>>>=0;for(var i=Array(o);++r<o;)i[r]=t[r+e];return i};var En=function(t,e){return e.length<2?t:Pt(t,An(e,0,-1))};var xn=function(t,e){return e=St(e,t),null==(t=En(t,e))||delete t[kt(Cn(e))]},Sn=Function.prototype,kn=Object.prototype,Pn=Sn.toString,Tn=kn.hasOwnProperty,Mn=Pn.call(Object);var zn=function(t){if(!_(t)||"[object Object]"!=b(t))return!1;var e=Me(t);if(null===e)return!0;var n=Tn.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&Pn.call(n)==Mn};var Rn=function(t){return zn(t)?void 0:t},qn=i?i.isConcatSpreadable:void 0;var Fn=function(t){return g(t)||Kt(t)||!!(qn&&t&&t[qn])};var In=function t(e,n,r,o,i){var a=-1,u=e.length;for(r||(r=Fn),i||(i=[]);++a<u;){var c=e[a];0<n&&r(c)?1<n?t(c,n-1,r,o,i):Te(i,c):o||(i[i.length]=c)}return i};var $n=function(t){return null!=t&&t.length?In(t,1):[]};var Bn=function(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)},Dn=Math.max;var Un=function(i,a,u){return a=Dn(void 0===a?i.length-1:a,0),function(){for(var t=arguments,e=-1,n=Dn(t.length-a,0),r=Array(n);++e<n;)r[e]=t[a+e];e=-1;for(var o=Array(a+1);++e<a;)o[e]=t[e];return o[a]=u(r),Bn(i,this,o)}};var Vn=function(t){return function(){return t}};var Nn=function(t){return t},Ln=Bt?function(t,e){return Bt(t,"toString",{configurable:!0,enumerable:!1,value:Vn(e),writable:!0})}:Nn,Wn=Date.now;var Hn=function(n){var r=0,o=0;return function(){var t=Wn(),e=16-(t-o);if(o=t,0<e){if(800<=++r)return arguments[0]}else r=0;return n.apply(void 0,arguments)}}(Ln);Gn=function(e,t){var n={};if(null==e)return n;var r=!1;t=wt(t,function(t){return t=St(t,e),r||(r=1<t.length),t}),Nt(e,Ie(e),n),r&&(n=On(n,7,Rn));for(var o=t.length;o--;)xn(n,t[o]);return n},Hn(Un(Gn,void 0,$n),Gn+"");var Gn;var Jn=function(t,e,n){(void 0===n||Y(t[e],n))&&(void 0!==n||e in t)||Dt(t,e,n)};var Kn=function(c){return function(t,e,n){for(var r=-1,o=Object(t),i=n(t),a=i.length;a--;){var u=i[c?a:++r];if(!1===e(o[u],u,o))break}return t}}();var Qn=function(t){return _(t)&&de(t)};var Xn=function(t,e){return"__proto__"==e?void 0:t[e]};var Yn=function(t){return Nt(t,me(t))};var Zn=function(t,e,n,r,o,i,a){var u=Xn(t,n),c=Xn(e,n),s=a.get(c);if(s)Jn(t,n,s);else{var l=i?i(u,c,n+"",t,e,a):void 0,f=void 0===l;if(f){var p=g(c),v=!p&&Xt(c),h=!p&&!v&&ae(c);l=c,p||v||h?l=g(u)?u:Qn(u)?Ce(u):v?Oe(c,!(f=!1)):h?an(c,!(f=!1)):[]:zn(c)||Kt(c)?Kt(l=u)?l=Yn(u):(!C(u)||r&&E(u))&&(l=sn(c)):f=!1}f&&(a.set(c,l),o(l,c,r,i,a),a.delete(c)),Jn(t,n,l)}};var tr=function r(o,i,a,u,c){o!==i&&Kn(i,function(t,e){if(C(t))c||(c=new It),Zn(o,i,e,a,r,u,c);else{var n=u?u(Xn(o,e),t,e+"",o,i,c):void 0;void 0===n&&(n=t),Jn(o,e,n)}},me)};var er=function(t,e){return Hn(Un(t,e,Nn),t+"")};var nr=function(t,e,n){if(!C(n))return!1;var r=typeof e;return!!("number"==r?de(n)&&Zt(e,n.length):"string"==r&&e in n)&&Y(n[e],t)};var rr=function(u){return er(function(t,e){var n=-1,r=e.length,o=1<r?e[r-1]:void 0,i=2<r?e[2]:void 0;for(o=3<u.length&&"function"==typeof o?(r--,o):void 0,i&&nr(e[0],e[1],i)&&(o=r<3?void 0:o,r=1),t=Object(t);++n<r;){var a=e[n];a&&u(t,a,n,o)}return t})},or=rr(function(t,e,n){tr(t,e,n)}),ir=Object.prototype.hasOwnProperty,ar=(rr(function(t,e){if(le(e)||de(e))Nt(e,ye(e),t);else for(var n in e)ir.call(e,n)&&Vt(t,n,e[n])}),"__title__"),ur="defaultValue";console.log(ur,"value",ar,"title","type");var cr=function(n){return function(t){var e=t.configMap;return Tt(Tt(e,n),"value",Tt(e,n+"."+ur))}},sr=function(){return window.self!==window.top},lr=c.createContext(),fr=lr.Provider,pr=lr.Consumer,vr="__ACTOSERVICE__ACTION__",hr="AS:sdk:change_edit",dr="AS:sdk:update_config",yr=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},gr=function(){function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}}(),br=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},_r=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},jr=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},mr=require("prop-types"),wr=function(t){function n(t){yr(this,n);var e=jr(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));return e.state={configMap:window.__ACTOSERVICE__SCHEME__,isEditing:t.editing||sr()},window.__ACTOSERVICE__SCHEME__=null,e.updateConfig=e.updateConfig.bind(e),e}return _r(n,t),gr(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.scheme;this.injectCSS(),sr()&&this._registerListener(),this.props.scheme||this.state.configMap?this.state.configMap||(C(t)&&this.setState({configMap:t}),"string"==typeof t&&fetch(t).then(function(t){return t.json()}).then(function(t){return e.setState({configMap:t})}).catch(function(t){return console.error("Cant find configMap")})):console.error("Scheme is not specified")}},{key:"injectCSS",value:function(){var t=document.createElement("style");t.innerHTML="\n  @-webkit-keyframes pulse {\n    0% {\n      -webkit-box-shadow: 0 0 0 0 rgba(204,169,44, 0.4);\n    }\n    70% {\n        -webkit-box-shadow: 0 0 0 10px rgba(204,169,44, 0);\n    }\n    100% {\n        -webkit-box-shadow: 0 0 0 0 rgba(204,169,44, 0);\n    }\n  }\n  @keyframes pulse {\n    0% {\n      -moz-box-shadow: 0 0 0 0 #0a6c8f;\n      box-shadow: 0 0 0 0 #0a6c8f;\n    }\n    70% {\n        -moz-box-shadow: 0 0 0 10px rgba(204,169,44, 0);\n        box-shadow: 0 0 0 10px rgba(204,169,44, 0);\n    }\n    100% {\n        -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0);\n        box-shadow: 0 0 0 0 rgba(204,169,44, 0);\n    }\n  }\n  .body {\n    padding: 0;\n    margin: 0;\n  }\n  .as-action-hint {\n    animation: pulse 2s infinite;\n  }\n  .Popover {\n    z-index: 22;\n  }\n  .Popover-body {\n    display: inline-flex;\n    flex-direction: column;\n    padding: 2rem 4rem;\n    background: hsl(0, 0%, 27%);\n    color: white;\n    border-radius: 0.3rem;\n  }\n  \n  .Popover-tipShape {\n    fill: hsl(0, 0%, 27%);\n  }\n  .Target {\n    -webkit-user-select: none;\n    position: relative;\n    display: inline-block;\n    color: hsla(0, 0%, 0%, 0.45);\n    color: white;\n    white-space: pre-wrap;\n    text-align: center;\n    text-transform: uppercase;\n    border-radius: 0.2rem;\n    overflow: hidden;\n  }\n  \n  .Target-Move {\n    padding: 1rem;\n    cursor: move;\n    border-bottom: 1px solid white;\n    background: hsl(173, 69%, 48%);\n  }\n  \n  .Target-Toggle {\n    display: block;\n    padding: 1rem;\n    cursor: pointer;\n    background: hsl(346, 62%, 55%);\n  }\n  .Target.is-open .Target-Toggle {\n    background: hsl(346, 80%, 50%);\n  }\n",document.head.appendChild(t)}},{key:"_isASAction",value:function(t){var e=Tt(t,vr);return!!e&&[hr,dr].includes(e)}},{key:"_registerListener",value:function(){var r=this;window.onmessage=function(t){var e=t.origin,n=t.data;if(console.log("message received",e,n),r._isASAction(n))switch(Tt(n,vr)){case hr:r.setState({editing:Tt(n,"payload")});break;case dr:r.updateConfig(Tt(n,"payload"));break;default:console.warn("Wrong action received",n)}}}},{key:"updateConfig",value:function(e){var n=this,t=or(this.state.configMap,e);this.setState({configMap:t},function(){var t;"parent"in window&&parent.postMessage((br(t={},vr,"AS:sdk:notify_updates"),br(t,"payload",{updates:e,result:n.state.configMap}),t),"*")})}},{key:"render",value:function(){var t=this.state,e=t.configMap,n=t.isEditing,r=this.props.children;return c.createElement(fr,{value:{configMap:e,isEditing:n,updateConfig:this.updateConfig}},c.Children.only(r))}}]),n}(c.Component);wr.propTypes={editing:mr.bool,scheme:mr.oneOfType([mr.string,mr.object]).isRequired};var Or=function(t,e,n,r){if(!C(t))return t;for(var o=-1,i=(e=St(e,t)).length,a=i-1,u=t;null!=u&&++o<i;){var c=kt(e[o]),s=n;if(o!=a){var l=u[c];void 0===(s=r?r(l,c,u):void 0)&&(s=C(l)?l:Zt(e[o+1])?[]:{})}Vt(u,c,s),u=u[c]}return t};var Cr=function(t,e,n){return null==t?t:Or(t,e,n)},Ar=require("prop-types");function Er(t){var e=t.title,n=t.value,r=t.onChange;return c.createElement("div",null,c.createElement("span",null,e),c.createElement("input",{value:n,onChange:r}))}Er.propTypes={title:Ar.string,value:Ar.string,onChange:Ar.func.isRequired};var xr=require("prop-types"),Sr=function(t){function n(t){yr(this,n);var e=jr(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));return e.onChange=e.onChange.bind(e),e}return _r(n,t),gr(n,[{key:"onChange",value:function(t){var e=this,n=new FileReader;n.onload=function(t){return e.props.onChange({target:{value:n.result}})},n.readAsDataURL(t.target.files[0])}},{key:"render",value:function(){var t=this.props,e=t.title;t.value;return c.createElement("div",null,c.createElement("span",null,e),c.createElement("input",{type:"file",name:"",onChange:this.onChange}))}}]),n}(c.Component);Sr.propTypes={title:xr.string,value:xr.string,onChange:xr.func.isRequired};var kr=require("prop-types");function Pr(t){var e=t.title,n=t.value,r=t.onChange;return c.createElement("div",null,c.createElement("span",null,e),c.createElement("input",{type:"color",value:n,onChange:r}))}Pr.propTypes={title:kr.string,value:kr.string,onChange:kr.func.isRequired};var Tr,Mr="AS:string",zr="AS:color",Rr="AS:image",qr=[Mr,"AS:number",zr,"AS:phone",Rr],Fr=require("prop-types"),Ir=(br(Tr={},zr,Pr),br(Tr,Mr,Er),br(Tr,Rr,Sr),Tr),$r=function(t){function n(t){yr(this,n);var e=jr(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));return e.onChange=e.onChange.bind(e),e}return _r(n,t),gr(n,[{key:"onChange",value:function(t){this.props.onChange(this.props.path,t.target.value)}},{key:"render",value:function(){var t=this.props.type,e={title:this.props.title,value:this.props.value,onChange:this.onChange},n=Ir[t];if(!n)throw new Error("Wrong action type: "+t);return c.createElement(n,e)}}]),n}(c.PureComponent);$r.propTypes={path:Fr.string.isRequired,type:Fr.oneOf(qr),value:Fr.any,title:Fr.string,onChange:Fr.func.isRequired};var Br=require("prop-types"),Dr=require("react-popover"),Ur=function(t){function n(t){yr(this,n);var e=jr(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));return e.state={openAction:!1},e.openAction=e.openAction.bind(e),e.closeActions=e.closeActions.bind(e),e.generateComponentAction=e.generateComponentAction.bind(e),e.handleChange=e.handleChange.bind(e),e}return _r(n,t),gr(n,[{key:"openAction",value:function(t){t.preventDefault(),this.setState({openAction:!0})}},{key:"closeActions",value:function(){this.setState({openAction:!1})}},{key:"handleChange",value:function(t,e){var n={};Cr(n,t+".value",e),console.log(n),this.props.actoservice.updateConfig(n)}},{key:"generateComponentAction",value:function(){var e=this,t=this.props.actoservice,n=t.paths,r=t.scheme;return n.map(function(t){return c.createElement($r,{key:t,path:t,title:Tt(r,t+".title"),onChange:e.handleChange,type:Tt(r,t+".type"),value:Tt(r,t+".value")})})}},{key:"render",value:function(){var t=this.props.classes,e=this.props.actoservice,n=r.cloneElement(this.props.children,{actoservice:{scheme:e.scheme}});return e.isEditing?c.createElement("div",{className:"as-action-cntr "+Tt(t,"container",""),onMouseOver:this.openAction,style:{display:"inline-block",position:"relative",transition:"200ms box-shadow",boxShadow:this.state.openAction?"2px 2px 36px -1px rgba(0,0,0,0.75)":"none"}},c.createElement("div",{className:"as-action-hint "+Tt(t,"hint",""),style:{position:"absolute",top:-10,right:-10,width:20,height:20,borderRadius:10,backgroundColor:"#0a6c8f",opacity:this.state.openAction?0:1,transition:"200ms opacity",boxShadow:"2px 2px 36px -1px rgba(0,0,0,0.75)"}}),c.createElement(Dr,{preferPlace:"below",isOpen:this.state.openAction,body:this.generateComponentAction(),onOuterAction:this.closeActions},n)):n}}]),n}(c.PureComponent);Ur.propTypes={classes:{container:Br.string,hint:Br.string},actoservice:Br.shape({paths:Br.arrayOf(Br.string).isRequired,schemes:Br.object,updateConfig:Br.func.isRequired,isEditing:Br.bool.isRequired}).isRequired},t.default=wr,t.withBind=function(u){return function(a){var t=function(t){function e(){return yr(this,e),jr(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return _r(e,t),gr(e,[{key:"render",value:function(){var i=this;return c.createElement(pr,null,function(t){var r=t.configMap,e=t.isEditing,n=t.updateConfig,o={};return u.forEach(function(t){var e,n;Cr(o,t+".value",cr(t)({configMap:r})),Cr(o,t+".title",Tt(Tt(e=r,n=t),"title",Tt(e,n+"."+ar))),Cr(o,t+".type",Tt(r,t+".type"))}),c.createElement(Ur,{classes:i.props.classes,actoservice:{paths:u,scheme:o,updateConfig:n,isEditing:e}},c.createElement(a,i.props))})}}]),e}(c.Component);return t.displayName="withBind ["+(a.displayName||a.name)+"]",t}},t.bindValue=function(t){return c.createElement(pr,null,cr(t))},t.Types=qr,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=actoservice.js.map
