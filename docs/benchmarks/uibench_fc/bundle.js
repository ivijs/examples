!function(n){var e={};function t(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return n[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:r})},t.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){"use strict";t.r(e);var r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t])};function i(n,e){function t(){this.constructor=n}r(n,e),n.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}Object.assign;var o=function(){function n(n,e,t,r,i){this._f=n,this._l=this,this._r=null,this._c=i,this._t=e,this._k=0,this._p=t,this._i=null,this._cs=r,this._s=null,this._e=null}return n.prototype.k=function(n){return this._f|=128,this._k=n,this},n.prototype.s=function(n){return this._s=n,this},n.prototype.e=function(n){return this._f|=512,this._e=n,this},n.prototype.a=function(n){return this._p=n,this},n.prototype.c=function(){for(var e=arguments,t=null,r=null,i=0,o=0;i<e.length;++i,++o){var l=e[i];if(null!==l){"object"!=typeof l&&(l=new n(1,null,null,void 0,l));var u=l._l,a=l._f;if(u===l)0==(128&a)&&(l._k=o);else if(0==(256&a)){var f=l;do{0==(128&f._f)&&(f._k=o),++o,f=f._r}while(null!==f);--o}null!==r?(l._l=r,r._r=l):t=l,r=u}}return null!==t&&(t._l=r,this._f|=32,this._c=t),this},n.prototype.unsafeHTML=function(n){return this._f|=64,this._c=n,this},n.prototype.value=function(n){return this._c=n,this},n}();function l(n){return 0!=(49176&n._f)?l(n._c):n._i}function u(n){var e={render:n,shouldUpdate:null};return function(n){return new o(8,e,n,void 0,null)}}function a(n,e){var t=n.length-1,r=n.pop();e!==t&&(n[e]=r)}var f=[];function c(n){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];try{return n.apply(void 0,e)}catch(n){for(var r=0,i=f;r<i.length;r++)(0,i[r])(n);throw n}}}var s=navigator.userAgent,d=/iPad|iPhone|iPod/.test(s)&&!("MSStream"in window);function _(){}function v(n){for(var e=0;e<n.length;++e)!0===n[e]()&&a(n,e--)}function p(n){var e=n.a;n.a=[];for(var t=0,r=e;t<r.length;t++)(0,r[t])()}var h,g=0,w={a:[]},y={a:[]},m=[],b=[],k=[],O=_,A={f:0,w:{a:[]},r:{a:[]},a:{a:[]}},P={f:0,w:{a:[]},r:{a:[]},a:{a:[]}},N=null,x=c(function(){for(;w.a.length>0;)p(w);g^=4});(new MessageChannel).port1.onmessage=c(function(n){g^=8,p(y)});var E=c(function(){var n=h();if(0!=(1&g)!==n){g^=3,!n&&b.length>0&&C();for(var e=m,t=0;t<e.length;++t)e[t](n);g^=2}});function M(n){n instanceof Element&&(N=n)}function j(){16&g&&requestAnimationFrame(L)}function C(){var n;16&g||(n=j,4&(g|=16)||(g|=4,Promise.resolve().then(x)),w.a.push(n))}void 0!==document.hidden?(h=function(){return document.hidden},document.addEventListener("visibilitychange",E)):void 0!==document.webkitHidden?(h=function(){return document.webkitHidden},document.addEventListener("webkitvisibilitychange",E)):h=function(){return!1},h()&&(g|=1);var L=c(function(n){g^=48;var e=P;P=A,A=e,v(k);do{for(;4&e.f;)e.f^=4,p(e.r);for(;3&e.f;)2&e.f&&(e.f^=2,p(e.w)),1&e.f&&(e.f^=1,O())}while(7&e.f);for(1&(g^=32)||v(b);8&e.f;)e.f^=8,p(e.a);null!==N&&(N.focus(),N=null),b.length&&C()});function T(n){n.f|=1}function V(n,e){n.f|=2,n.w.a.push(e)}function S(){16&g&&L(performance.now())}var H=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t])};function U(n,e){function t(){this.constructor=n}H(n,e),n.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}var R=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var i in e=arguments[t])Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n},q=Node.prototype,B=Element.prototype,D=(Object.prototype.hasOwnProperty,q.insertBefore),W=q.removeChild,F=q.replaceChild,J=q.cloneNode,K=B.setAttribute,X=B.setAttributeNS,z=B.removeAttribute,G="http://www.w3.org/2000/svg",I="http://www.w3.org/1999/xlink",Q="http://www.w3.org/XML/1998/namespace";function Y(n,e){var t,r,i;if(null===n)Z(e);else if(null===e)$(n);else if(n instanceof Array)if(e instanceof Array){for(t=0;t<n.length&&t<e.length;)(r=n[t])!==(i=e[t++])&&(null!==i&&nn(i),null!==r&&en(r));for(;t<e.length;)null!==(r=e[t++])&&nn(r);for(;t<n.length;)null!==(r=n[t++])&&en(r)}else for(nn(e),t=0;t<n.length;++t)null!==(r=n[t])&&en(r);else Z(e),en(n)}function Z(n){if(n instanceof Array)for(var e=0;e<n.length;++e){var t=n[e];null!==t&&nn(t)}else nn(n)}function $(n){if(n instanceof Array)for(var e=0;e<n.length;++e){var t=n[e];null!==t&&en(t)}else en(n)}function nn(n){n.src.add(n)}function en(n){n.src.remove(n)}function tn(n,e,t){var r,i,o=n.style;if(null===e)for(r in t)void 0!==(i=t[r])&&o.setProperty(r,i);else if(null!==t)for(r in t)i=t[r],e[r]!==i&&(void 0!==i?o.setProperty(r,i):o.removeProperty(r))}function rn(n,e,t,r){if("boolean"==typeof r){if(!r)return;r=""}if(!0===e&&t.length>5&&120===t.charCodeAt(0)&&(58===t.charCodeAt(3)||58===t.charCodeAt(5))){if(t.startsWith("xml:"))return void X.call(n,Q,t,r);if(t.startsWith("xlink:"))return void X.call(n,I,t,r)}K.call(n,t,r)}function on(n,e,t,r){var i,o;if(null===t)for(i in r)void 0!==(o=r[i])&&rn(n,e,i,o);else if(null!==r)for(i in r)o=r[i],t[i]!==o&&(void 0!==o?rn(n,e,i,o):z.call(n,i))}function ln(n,e){W.call(n,l(e)),an(e)}function un(n){var e=n._f;if(0!=(32&e)){var t=n._c;do{un(t),t=t._r}while(null!==t)}else 0!=(49176&e)&&(0!=(16&e)&&n._i.attached(),un(n._c));0!=(512&e)&&null!==n._e&&Z(n._e)}function an(n){var e=n._f;if(0!=(32&e)){var t=n._c;do{an(t),t=t._r}while(null!==t)}else if(0!=(49176&e)&&(an(n._c),0!=(16&e))){var r=n._i;r.flags|=1,r.detached()}0!=(512&e)&&null!==n._e&&$(n._e)}function fn(n,e,t,r){var i,o,l=e._f,u=0;if((-2147434440&l)>0)if(i=e._c,0!=(32&l)){o=e._i;do{u|=fn(o,i,t,r),i=i._r}while(null!==i)}else if(0!=(16&l))0!=(6&(o=e._i).flags)?(vn(n,i,e._c=o.render(),t,r),o.flags&=-7,o.updated(!0),u=1):0!==(u=fn(n,i,t,r))&&o.updated(!1);else if(0!=(16384&l)){var a=e._t;o=e._i;var f=a.select(o,e._p,t);o===f?u=fn(n,i,t,r):(u=1,e._i=f,vn(n,i,e._c=a.render(f),t,r))}else 0!=(32768&l)&&(!0===r&&(e._i=R({},t,e._p)),t=e._i),u=fn(n,i,t,r);return u}function cn(n,e){n.textContent="";var t=e;do{an(t),t=t._r}while(null!==t)}function sn(n,e){"string"==typeof e?n.value=e:n.checked=e}function dn(n,e,t){var r,i=e._f,o=null;if(0!=(1&i))o=r=document.createTextNode(e._c);else{var l=e._t;if(0!=(18&i))if(0!=(2&i)){var u=0!=(8192&i);0==(4&i)?r=u?document.createElementNS(G,l):document.createElement(l):(null===l._i&&dn(n,l,t),r=J.call(l._i,!1)),void 0!==e._cs&&(!0===u?K.call(r,"class",e._cs):r.className=e._cs),null!==e._p&&on(r,u,null,e._p),null!==e._s&&tn(r,null,e._s);var a=e._c;if(null!==a)if(0!=(32&i)){a=a;do{D.call(r,dn(r,a,t),null),a=a._r}while(null!==a)}else 0!=(3072&i)?sn(r,a):r.innerHTML=a;o=r}else{var f=o=new l(e._p);r=dn(n,e._c=f.render(),t)}else{if(0!=(49152&i))if(0!=(16384&i)){var c=l,s=o=c.select(null,e._p,t);e._c=c.render(s)}else t=o=R({},t,e._p);else e._c=l.render(e._p);r=dn(n,e._c,t)}0!=(131072&i)&&M(r)}return e._i=o,r}function _n(n,e,t,r){var i=dn(n,t,r);return D.call(n,i,e),un(t),i}function vn(n,e,t,r,i){if(e!==t){var o,u=e._f,a=t._f;if(0!=(134020319&(u^a))||0!=(16412&u)&&e._t!==t._t||e._k!==t._k)o=dn(n,t,r),F.call(n,o,l(e)),an(e),un(t);else{t._i=o=e._i;var f=e._c,c=t._c;if(0!=(1&a))f!==c&&(o.data=c);else if(e._e!==t._e&&Y(e._e,t._e),0!=(18&a))if(0!=(2&a)){var s=0!=(8192&a);if(e._cs!==t._cs){var d=void 0===t._cs?"":t._cs;!0===s?K.call(o,"class",d):o.className=d}if(e._p!==t._p&&on(o,s,e._p,t._p),e._s!==t._s&&tn(o,e._s,t._s),f!==c)if(null===f)if(0!=(32&a)){c=c;do{_n(o,null,c,r),c=c._r}while(null!==c)}else 0!=(3072&a)?sn(o,c):o.innerHTML=c;else null===c?0!=(32&u)?cn(o,f):0!=(64&u)&&(o.textContent=""):0!=(32&u)?pn(o,f,c,r,i):0!=(64&u)?o.innerHTML=c:"string"==typeof c?o.value!==c&&(o.value=c):o.checked=c}else{var _=e._p,v=t._p;_!==v&&o.newPropsReceived(_,v),o.props=v,0!=(6&o.flags)||!0===o.shouldUpdate(_,v)?(vn(n,f,t._c=o.render(),r,i),o.flags&=-7,o.updated(!0)):0!==fn(n,t._c=f,r,i)&&o.updated(!1)}else if(0!=(49152&a))if(0!=(16384&a)){var p=t._t,h=o,g=t._i=p.select(h,t._p,r);h===g?fn(n,t._c=f,r,i):vn(n,f,t._c=p.render(g),r,i)}else e._p!==t._p&&(i=!0),t._i=r=!0===i?R({},r,t._p):o,vn(n,f,c,r,i);else{var w=t._t;e._p===t._p||0!=(65536&a)&&!0!==w.shouldUpdate(e._p,t._p)?fn(n,t._c=f,r,i):vn(n,f,t._c=w.render(t._p),r,i)}}}else fn(n,t,r,i)}function pn(n,e,t,r,i){var o=e._l,u=t._l,a=0,f=0;n:for(;;){for(;e._k===t._k&&0==(128&(e._f^t._f));)if(vn(n,e,t,r,i),f++,e===o?a=1:e=e._r,t===u?a|=2:t=t._r,a)break n;for(;o._k===u._k&&0==(128&(o._f^u._f));)if(vn(n,o,u,r,i),f++,e===o?a=1:o=o._l,t===u?a|=2:u=u._l,a)break n;break}if(a){if(a<3)if(a<2)for(var c=hn(u);_n(n,c,t,r),t!==u;)t=t._r;else for(;ln(n,e),e!==o;)e=e._r}else{for(var s=0,d=0,_=0,v=[],p=void 0,h=void 0,g=void 0,w=t;g=w._k,128&w._f?(void 0===p&&(p=new Map),p.set(g,d)):(void 0===h&&(h=new Map),h.set(g,d)),v[d++]=w,w!==u;)w=w._r;var y=new Array(d).fill(-1),m=0;for(w=e;g=w._k,void 0===(a=128&w._f?p?p.get(g):void 0:h?h.get(g):void 0)?w._k=null:(_=_>a?1e9:a,y[a]=s,vn(n,w,v[a],r,i),m++),s++,w!==o;)w=w._r;if(f||m){for(a=s-m;a>0;)null===e._k&&(ln(n,e),a--),e=e._r;if(1e9===_){var b=gn(y);for(a=b.length-1;d>0;)y[--d]<0?_n(n,hn(u),u,r):a<0||d!==b[a]?D.call(n,l(u),hn(u)):a--,u=u._l}else if(m!==d)for(;d>0;)y[--d]<0&&_n(n,hn(u),u,r),u=u._l}else{cn(n,e);do{_n(n,null,t,r),t=t._r}while(null!==t)}}}function hn(n){var e=n._r;return null===e?null:l(e)}function gn(n){var e,t,r,i=n.slice(),o=[];o.push(0);for(var l=0;l<n.length;++l){var u=n[l];if(-1!==u)if(n[r=o[o.length-1]]<u)i[l]=r,o.push(l);else{for(e=0,t=o.length-1;e<t;)n[o[r=(e+t)/2|0]]<u?e=r+1:t=r;u<n[o[e]]&&(e>0&&(i[l]=o[e-1]),o[e]=l)}}for(t=o[(e=o.length)-1];e-- >0;)o[e]=t,t=i[t];return o}var wn=[],yn={},mn=0;function bn(n){for(var e=0,t=wn;e<t.length;e++){var r=t[e];if(r.container===n)return r}}function kn(){if(mn){mn=0,O=Pn;for(var n=0;n<wn.length;++n){var e=wn[n],t=e.container,r=e.currentVNode;if(e.invalidated){var i=e.newVNode;i?(r?vn(t,r,i,yn,!1):(_n(t,null,i,yn),d&&(t.onclick=_)),e.currentVNode=i):r&&(ln(t,r),a(wn,wn.indexOf(e)),--n),e.newVNode=null,e.invalidated=!1}else r&&fn(t,r,yn,!1)}}}function On(n,e){An(n,e),S()}function An(n,e){var t=bn(e);t?(t.newVNode=n,t.invalidated=!0):wn.push({container:e,currentVNode:null,newVNode:n,invalidated:!0}),Nn()}function Pn(){Nn(),S()}function Nn(){var n;mn||(mn=1,n=kn,C(),V(P,n))}function xn(n,e,t){for(var r=0,i=wn;r<i.length;r++){var o=i[r],l=o.container;if(l.contains(e)){for(var u=[];e!==l;)u.push(e),e=e.parentNode;En(n,t,o.currentVNode,u,u.length-1);break}}}function En(n,e,t,r,i){var o=t._f;if(6&o){if(t._i===r[i]){if(0===i)return Mn(n,t,e),1;--i;for(var l=t._c;null!==l;){if(En(n,e,l,r,i))return Mn(n,t,e),1;l=l._r}}}else if(49176&o&&En(n,e,t._c,r,i))return Mn(n,t,e),1;return 0}function Mn(n,e,t){var r=e._e;if(r){var i=void 0;if(Array.isArray(r))for(var o=0,l=0,u=r;l<u.length;l++){var a=u[l];null!==a&&!0===t(a)&&(0===o?i=a:1===o?i=[i,a]:i.push(a),++o)}else!0===t(r)&&(i=r);void 0!==i&&n.push({target:e,handlers:i})}}function jn(n,e,t,r){for(var i=n.length-1;i>=0;)if(Cn(n[i--],e,1,r),2&e.flags)return;if(t)for(e.flags|=32,i=0;i<n.length;++i)if(Cn(n[i],e,2,r),2&e.flags)return}function Cn(n,e,t,r){var i=n.handlers,o=0;if(Array.isArray(i))for(var l=0,u=i;l<u.length;l++){var a=u[l];a.flags&t&&(o|=Ln(a,r,e))}else i.flags&t&&(o=Ln(i,r,e));e.flags|=o}function Ln(n,e,t){var r=void 0===e?n.handler(t):e(n,t);return void 0===r?0:r}var Tn=function(){var n=!1;try{var e=Object.defineProperty({},"passive",{get:function(){n=!0}});window.addEventListener("test",null,e)}catch(n){}return n}();function Vn(n){var e=n.target||window;return void 0!==e.correspondingUseElement&&(e=e.correspondingUseElement),e}KeyboardEvent.prototype.hasOwnProperty("key"),MouseEvent.prototype.hasOwnProperty("buttons"),window,window,window;var Sn=!Tn||{capture:!0,passive:!0},Hn=!Tn||{capture:!0,passive:!1},Un=!!Tn&&{passive:!0},Rn=!!Tn&&{passive:!1};function qn(n){return 2&n?1&n?Sn:Un:1&n?Hn:Rn}var Bn=function(n){function e(e,t,r,i){var o=n.call(this,e,r)||this;return o.target=t,o.native=i,o}return U(e,n),e}(function(n,e){this.flags=n,this.timestamp=e});function Dn(n){0==n.deps++&&document.addEventListener(n.name,n.dispatch,qn(n.flags))}function Wn(n){0==--n.deps&&document.removeEventListener(n.name,n.dispatch,qn(n.flags))}function Fn(n,e){if(null!==n)for(var t=0,r=n.slice();t<r.length;t++)(0,r[t])(e)}var Jn=function(n,e){var t={src:{add:function(){++t.listeners,Dn(t)},remove:function(){--t.listeners,Wn(t)}},deps:0,listeners:0,flags:5,name:"click",before:null,after:null,dispatch:null},r=function(n){return n.src===t.src};return t.dispatch=c(function(n){var e=Vn(n),i=[];if(t.listeners>0&&xn(i,e,r),i.length||null!==t.before||null!==t.after){var o=new Bn(0,e,n.timeStamp,n);Fn(t.before,o),i.length&&jn(i,o,0!=(4&t.flags)),Fn(t.after,o),0!=(1&o.flags)&&n.preventDefault()}}),t}();function Kn(n,e,t){return{src:n,flags:!0===t?1:2,handler:e,listeners:0,props:null,state:null}}var Xn=function(){function n(n){this.flags=0,this.props=n}return n.prototype.newPropsReceived=function(n,e){},n.prototype.attached=function(){},n.prototype.detached=function(){},n.prototype.shouldUpdate=function(n,e){return n!==e},n.prototype.updated=function(n){},n.prototype.invalidated=function(){},n.prototype.invalidate=function(){this.flags|=2,this.invalidated(),0==(1&this.flags)&&(32&g?T(A):(C(),T(P)))},n}();function zn(n,e){for(var t=null,r=null,i=0;i<n.length;++i){var o=e(n[i],i);null!==o&&(null!==r?(o._l=r,r._r=o):t=o,r=o)}return null!==t?(t._l=r,t._f|=256,t):null}function Gn(n){return new o(15728642,"div",null,n,null)}function In(n){return new o(53477378,"tbody",null,n,null)}var Qn,Yn=(Qn=function(n){function e(){var e,t,r=null!==n&&n.apply(this,arguments)||this;return r.onClick=(e=function(n){console.log("Click",r.props)},void 0===t&&(t=!1),Kn(Jn.src,e,t)),r}return i(e,n),e.prototype.render=function(){return new o(54001666,"td",null,"TableCell",null).e(this.onClick).c(this.props)},e}(Xn),function(n){return new o(16,Qn,n,void 0,null)}),Zn=u(function(n){var e,t=n.id,r=0;return(e=n.active?"TableRow active":"TableRow",new o(58195970,"tr",null,e,null)).a({"data-id":t}).c(Yn("#"+t),zn(n.props,function(n){return Yn(n).k(r++)}))}),$n=u(function(n){return new o(52953090,"table",null,"Table",null).c(In().c(zn(n.items,function(n){return Zn(n).k(n.id)})))}),ne=u(function(n){var e=n.time;return Gn("AnimBox").a({"data-id":n.id}).s({background:"rgba(0,0,0,"+(.5+e%10/10)+")","border-radius":e%10+"px"})}),ee=u(function(n){return Gn("Anim").c(zn(n.items,function(n){return ne(n).k(n.id)}))}),te=u(function(n){return new o(32505858,"li",null,"TreeLeaf",null).c(n.id)}),re=u(function(n){return new o(60293122,"ul",null,"TreeNode",null).c(zn(n.children,function(n){return(n.container?re(n):te(n)).k(n.id)}))}),ie=u(function(n){return Gn("Tree").c(re(n.root))});function oe(n){switch(n.location){case"table":return $n(n.table);case"anim":return ee(n.anim)}return ie(n.tree)}var le=u(function(n){return Gn("Main").c(n?oe(n):null)});uibench.init("ivi [fc]","0.13.0"),document.addEventListener("DOMContentLoaded",function(n){var e=document.querySelector("#App");On(le(),e),uibench.run(function(n){return On(le(n),e)},function(n){return On(new o(43515906,"pre",null,void 0,null).c(JSON.stringify(n,void 0,2)),e)})})}]);