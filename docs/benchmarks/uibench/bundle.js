(function(){'use strict';var t,u="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function v(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]}
var aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};function w(){w=function(){};u.Symbol||(u.Symbol=ba)}var ca=0;function ba(a){return"jscomp_symbol_"+(a||"")+ca++}
function y(){w();var a=u.Symbol.iterator;a||(a=u.Symbol.iterator=u.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&aa(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return da(this)}});y=function(){}}function da(a){var b=0;return ea(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}function ea(a){y();a={next:a};a[u.Symbol.iterator]=function(){return this};return a}function z(a){y();var b=a[Symbol.iterator];return b?b.call(a):da(a)}
function fa(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}function A(a,b){if(b){var c=u;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&aa(c,a,{configurable:!0,writable:!0,value:b})}}A("Array.prototype.fill",function(a){return a?a:function(a,c,d){var b=this.length||0;0>c&&(c=Math.max(0,b+c));if(null==d||d>b)d=b;d=Number(d);0>d&&(d=Math.max(0,b+d));for(c=Number(c||0);c<d;c++)this[c]=a;return this}});
function B(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
A("WeakMap",function(a){function b(a){this.J=(f+=Math.random()+1).toString();if(a){w();y();a=z(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}}function c(a){B(a,e)||aa(a,e,{value:{}})}function d(a){var b=Object[a];b&&(Object[a]=function(a){c(a);return b(a)})}if(function(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),c=Object.seal({}),d=new a([[b,2],[c,3]]);if(2!=d.get(b)||3!=d.get(c))return!1;d.delete(b);d.set(c,4);return!d.has(b)&&4==d.get(c)}catch(m){return!1}}())return a;
var e="$jscomp_hidden_"+Math.random().toString().substring(2);d("freeze");d("preventExtensions");d("seal");var f=0;b.prototype.set=function(a,b){c(a);if(!B(a,e))throw Error("WeakMap key fail: "+a);a[e][this.J]=b;return this};b.prototype.get=function(a){return B(a,e)?a[e][this.J]:void 0};b.prototype.has=function(a){return B(a,e)&&B(a[e],this.J)};b.prototype.delete=function(a){return B(a,e)&&B(a[e],this.J)?delete a[e][this.J]:!1};return b});
A("Map",function(a){function b(){var a={};return a.v=a.next=a.head=a}function c(a,b){var c=a.u;return ea(function(){if(c){for(;c.head!=a.u;)c=c.v;for(;c.next!=c.head;)return c=c.next,{done:!1,value:b(c)};c=null}return{done:!0,value:void 0}})}function d(a,b){var c;c=b&&typeof b;"object"==c||"function"==c?f.has(b)?c=f.get(b):(c=""+ ++g,f.set(b,c)):c="p_"+b;var d=a.I[c];if(d&&B(a.I,c))for(a=0;a<d.length;a++){var e=d[a];if(b!==b&&e.key!==e.key||b===e.key)return{id:c,list:d,index:a,l:e}}return{id:c,list:d,
index:-1,l:void 0}}function e(a){this.I={};this.u=b();this.size=0;if(a){a=z(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}if(function(){if(!a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a(z([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var d=c.entries(),e=d.next();if(e.done||e.value[0]!=b||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||"t"!=e.value[1]||!d.next().done?
!1:!0}catch(k){return!1}}())return a;w();y();var f=new WeakMap;e.prototype.set=function(a,b){var c=d(this,a);c.list||(c.list=this.I[c.id]=[]);c.l?c.l.value=b:(c.l={next:this.u,v:this.u.v,head:this.u,key:a,value:b},c.list.push(c.l),this.u.v.next=c.l,this.u.v=c.l,this.size++);return this};e.prototype.delete=function(a){a=d(this,a);return a.l&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.I[a.id],a.l.v.next=a.l.next,a.l.next.v=a.l.v,a.l.head=null,this.size--,!0):!1};e.prototype.clear=function(){this.I=
{};this.u=this.u.v=b();this.size=0};e.prototype.has=function(a){return!!d(this,a).l};e.prototype.get=function(a){return(a=d(this,a).l)&&a.value};e.prototype.entries=function(){return c(this,function(a){return[a.key,a.value]})};e.prototype.keys=function(){return c(this,function(a){return a.key})};e.prototype.values=function(){return c(this,function(a){return a.value})};e.prototype.forEach=function(a,b){for(var c=this.entries(),d;!(d=c.next()).done;)d=d.value,a.call(b,d[1],d[0],this)};e.prototype[Symbol.iterator]=
e.prototype.entries;var g=0;return e});A("String.prototype.repeat",function(a){return a?a:function(a){var c;if(null==this)throw new TypeError("The 'this' value for String.prototype.repeat must not be null or undefined");c=this+"";if(0>a||1342177279<a)throw new RangeError("Invalid count value");a|=0;for(var b="";a;)if(a&1&&(b+=c),a>>>=1)c+=c;return b}});var ga=0;try{var ha=Object.defineProperty({},"passive",{get:function(){ga|=1}});window.addEventListener("test",null,ha)}catch(a){}
var ia=navigator?navigator.userAgent:"",ja=0;/iPad|iPhone|iPod/.test(ia)&&!window.ja&&(ja|=1);/Android/.test(ia)&&(ja|=2);function ka(){}function la(a,b){return a!==b}function oa(a){a=a.target||window;a.$&&(a=a.$);return 3===a.nodeType?a.parentNode:a}var pa=ga&1?{capture:!0,passive:!0}:!0,qa=ga&1?{passive:!0}:!1;function ra(a){return a&2?a&1?pa:qa:a&1?!0:!1}function C(a){return a.a&12?a.a&8?C(a.j.root):C(a.c):a.j}
function D(a,b,c,d,e){this.a=a;this.o=b;this.h=null;this.g=c;this.w=d;this.m=this.s=null;this.c=e;this.L=this.j=null}t=D.prototype;t.key=function(a){this.h=a;return this};t.className=function(a){this.w=a;return this};t.style=function(a){this.s=a;return this};t.props=function(a){this.g=a;return this};t.children=function(a){Array.isArray(a)?(this.a|=64,this.c=sa(a)):(this.a="object"===typeof a?this.a|32:this.a|16,this.c=a);return this};function ta(a,b){a.a|=320;b&&(a.c=sa(b));return a}
t.value=function(a){this.c=a;return this};t.checked=function(a){this.c=a;return this};function F(a){return new D(1,null,null,null,a)}function G(a,b){return new D(2,a,null,void 0===b?null:b,null)}function H(a,b){return new D(a.prototype.R?8:4,a,b,null,null)}function I(a){var b=a.a,c=a.c;if(null!==c&&b&96)if(b&64){for(var b=Array(c.length),d=0;0>d;d++)b[d]=I(c[d]);c=b}else c=I(c);c=new D(a.a,a.o,a.g,a.w,a.a&12?null:c);c.h=a.h;c.m=a.m;c.s=a.s;return c}
function ua(a,b,c){for(;c<a.length;c++){var d=a[c];null!==d&&(Array.isArray(d)?ua(d,b,0):b.push("object"===typeof d?d:F(d)))}}function sa(a){for(var b=0;b<a.length;b++){var c=a[b];if(null===c||Array.isArray(c))return c=a.slice(0,b),ua(a,c,b),c;"object"!==typeof c&&(a[b]=F(c))}return a}function J(a,b,c){this.b=0;this.depth=c?c.depth+1:0;this.g=a;this.F=this.G=b;this.S=this.root=null}J.prototype.K=function(){return!0};J.prototype.R=function(){};
u.Object.defineProperties(J.prototype,{context:{configurable:!0,enumerable:!0,get:function(){this.b|=16;return this.F}},props:{configurable:!0,enumerable:!0,get:function(){this.b|=64;return this.g}}});function K(a){a.prototype.R?a.prototype.K=la:a.K=la;return a}function va(a,b){this.data=a;this.from=b}
va.prototype.get=function(a){var b=this,c;if("string"!==typeof a){for(var d=Object.keys(a),e=d.length;0<e&&b;){if(b.data)for(var f=0;f<d.length;f++){var g=d[f];if(g&&(c=b.data[g],void 0!==c)){a[g]=b.data[g];d[f]=null;e--;break}}b=b.from}return a}for(;b;){if(b.data&&(c=b.data[a],void 0!==c))return c;b=b.from}};var wa=new va(void 0);function xa(a,b,c){c||(c="");b&4096?a.setAttribute("class",c):a.className=c}
function ya(a,b,c){var d,e,f;if(null===b){if(null!==c)for(f=a.style,d=Object.keys(c),a=0;a<d.length;a++)e=d[a],f[e]=c[e]}else if(null===c)for(f=a.style,d=Object.keys(b),a=0;a<d.length;a++)f[d[a]]=null;else{f=a.style;var g=0;d=Object.keys(b);for(a=0;a<d.length;a++){e=d[a];var h=c[e];void 0!==h?(b[e]!==h&&(f[e]=h),g++):f[e]=null}d=Object.keys(c);for(a=0;g<d.length&&a<d.length;)e=d[a++],b.hasOwnProperty(e)||(f[e]=c[e],g++)}}
function L(a,b,c,d){if(b&2048&&"volume"===c)a.volume!==d&&(a.volume=void 0===d?null:d);else if(void 0===d)a.removeAttribute(c);else{if(5<c.length)if(120===c.charCodeAt(0)&&(58===c.charCodeAt(3)||58===c.charCodeAt(5))){if(109===c.charCodeAt(1)&&108===c.charCodeAt(2)){a.setAttributeNS("http://www.w3.org/XML/1998/namespace",c,d);return}if(108===c.charCodeAt(1)&&105===c.charCodeAt(2)&&110===c.charCodeAt(3)&&107===c.charCodeAt(4)){a.setAttributeNS("http://www.w3.org/1999/xlink",c,d);return}}else if(45===
c.charCodeAt(4)){a.setAttribute(c,d);return}a[c]=d}}function za(a,b,c,d){var e,f,g;if(null===c){if(null!==d)for(f=Object.keys(d),e=0;e<f.length;e++)g=f[e],L(a,b,g,d[g])}else if(null===d)for(f=Object.keys(c),e=0;e<f.length;e++)L(a,b,f[e]);else{var h=0;f=Object.keys(c);for(e=0;e<f.length;e++){g=f[e];var n=d[g];void 0===n?L(a,b,g):(c[g]!==n&&L(a,b,g,n),h++)}f=Object.keys(d);for(e=0;h<f.length&&e<f.length;)g=f[e++],c.hasOwnProperty(g)||(L(a,b,g,d[g]),h++)}}
function Aa(a,b,c){var d,e,f;if(null===b){if(null!==c)for(e=Object.keys(c),d=0;d<e.length;d++)Ba(c[e[d]].i)}else if(null===c)for(e=Object.keys(b),d=0;d<e.length;d++)M(b[e[d]].i);else{var g=0;e=Object.keys(b);for(d=0;d<e.length;d++){f=e[d];var h=b[f];f=c[f];void 0!==f?(h!==f&&(Ba(f.i),M(h.i)),g++):M(h.i)}e=Object.keys(c);for(d=0;g<e.length&&d<e.length;)f=e[d++],b.hasOwnProperty(f)||(Ba(c[f].i),g++)}a._ev=null===c?void 0:c}
function Ca(a){var b=a.b;if(b&8&&b&7){var c=a.root;b&4&&Da(a);if(b&35){var b=a.S,d=Ea(a);N(b,c,d,a.F);a.b&=-1032}else c&&O(a.S,c,a.F,a)}}function Fa(a,b,c,d,e){var f=c.o;b===c||!f.K||f.K(b.g,c.g)?(b=b.c,f=c.c=f(c.g,d)||F(""),a=N(a,b,f,d,e)):(c.c=b.c,a=b.j);return c.j=a}function P(a){var b=a.a;if(b&12)b&8?(b=a.j,b.b|=8,P(b.root)):P(a.c);else if(!(b&2560)&&(a=a.c,null!==a&&b&96))if(b&64)for(b=0;b<a.length;b++)P(a[b]);else P(a)}
function R(a){var b=a.a;if(b&12)if(b&8){var c=a.j;R(c.root);c.b&=-265}else R(a.c);else if(b&2){if(!(b&2560)&&(c=a.c,null!==c&&b&96))if(b&64)for(b=0;b<c.length;b++)R(c[b]);else R(c);if(a.m)for(var c=a.m,b=Object.keys(c),d=0;d<b.length;d++)M(c[b[d]].i)}a.L&&a.L(null)}function S(a){for(var b=0;b<a.length;b++)R(a[b])}
function O(a,b,c,d){var e=b.a;if(e&12)e&8?(a=b.j,a.G!==c&&(a.b|=4,a.G=c),Ca(a)):2>b.o.length?b.c&&O(a,b.c,c,d):Fa(a,b.c,b.c,c,d);else if(!(e&2560)&&(b=b.c,null!==b&&e&96))if(e&64)for(e=0;e<b.length;e++)O(a,b[e],c,d);else O(a,b,c,d)}function T(a,b){a.removeChild(C(b));R(b)}function Da(a){a.b&=-193;a.b|=(a.b&64)<<1;a.F=a.G}function Ea(a){a.b&=-49;var b=a.root=a.R()||F("");a.b|=(a.b&16)<<1;return b}
function U(a,b,c,d){b.j&&(b=I(b));var e=b.a,f,g,h;if(e&3)if(e&1)f=document.createTextNode(b.c);else{if(e&8192?f=b.o.createElement():e&512?e&1024?f=document.createElement("textarea"):(f=document.createElement("input"),f.type=b.o):f=e&4096?document.createElementNS("http://www.w3.org/2000/svg",b.o):document.createElement(b.o),b.g&&za(f,e,null,b.g),null!==b.w&&xa(f,e,b.w),null!==b.s&&ya(f,null,b.s),b.m&&Aa(f,null,b.m),a=b.c,null!==a)if(e&80)if(e&16)f.textContent=a;else for(g=0;g<a.length;g++)h=a[g],e=
U(f,h,c,d),f.insertBefore(h.a&8?C(e.root):e,null);else e&32?(h=a,e=U(f,h,c,d),f.insertBefore(h.a&8?C(e.root):e,null)):e&512?(c=f,"string"===typeof a?c.value=a:c.checked=a):f.innerHTML=a}else e&8?(c=f=new b.o(b.g,c,d),c.S=a,Da(c),d=Ea(c),U(a,d,c.F,c)):(f=b.c=(0,b.o)(b.g,c)||F(""),f=U(a,f,c,d));b.j=f;b.L&&b.L(f);return f}function V(a,b,c,d,e){d=U(a,c,d,e);a.insertBefore(C(c),b);P(c);return d}function Ga(a,b){return(a.a&15887)===(b.a&15887)&&a.o===b.o&&a.h===b.h}
function Ha(a,b,c,d,e){if(b===c)return c.j;c.j&&(c=I(c));var f=b.a;if(f&3)if(a=c.j=b.j,f&1)b.c!==c.c&&(a.nodeValue=c.c);else{if(b.g!==c.g&&za(a,f,b.g,c.g),b.w!==c.w&&xa(a,f,c.w),b.s!==c.s&&ya(a,b.s,c.s),b.m!==c.m&&Aa(a,b.m,c.m),b.c!==c.c){var f=a,g=b.a,h=c.a;b=b.c;c=c.c;if(null===b)if(h&80)if(h&16)f.textContent=c;else for(g=0;g<c.length;g++)V(f,null,c[g],d,e);else h&32?V(f,null,c,d,e):h&512?"string"===typeof c?f.value=c:f.checked=c:f.innerHTML=c;else if(null===c)g&144?f.textContent="":g&64?(f.textContent=
"",S(b)):g&32?T(f,b):"string"===typeof b?f.value="":f.checked=!1;else if(g&144)if(h&144)h&16?(d=f.firstChild)?d.nodeValue=c:f.textContent=c:f.innerHTML=c;else if(f.textContent="",h&64)for(g=0;g<c.length;g++)V(f,null,c[g],d,e);else V(f,null,c,d,e);else if(g&64)if(h&144)h&16?f.textContent=c:f.innerHTML=c,S(b);else if(h&64)if(0===b.length)for(g=0;g<c.length;g++)V(f,null,c[g],d,e);else if(0===c.length)f.textContent="",S(b);else if(1===b.length&&1===c.length)N(f,b[0],c[0],d,e);else if(g&h&256){var n=0,
g=0,m=b.length-1,q=c.length-1,k=b[n],h=c[g],l=b[m],p=c[q],r,Q;a:for(;;){for(;k.h===h.h;){N(f,k,h,d,e);n++;g++;if(n>m||g>q)break a;k=b[n];h=c[g]}for(;l.h===p.h;){N(f,l,p,d,e);m--;q--;if(n>m||g>q)break a;l=b[m];p=c[q]}if(l.h===h.h)N(f,l,h,d,e),f.insertBefore(C(h),C(k)),m--,g++,l=b[m],h=c[g];else if(k.h===p.h)N(f,k,p,d,e),k=q+1,k=k<c.length?C(c[k]):null,f.insertBefore(C(p),k),n++,q--,k=b[n],p=c[q];else break}if(n>m)for(k=q+1,k=k<c.length?C(c[k]):null;g<=q;)V(f,k,c[g++],d,e);else if(g>q)for(;n<=m;)T(f,
b[n++]);else{var ma=m-n+1,k=q-g+1,h=Array(k).fill(-1),na=!1,x=0,E=0;if(4>=k||16>=ma*k)for(l=n;l<=m;l++){if(r=b[l],E<k)for(p=g;p<=q;p++)if(Q=c[p],r.h===Q.h){h[p-g]=l;x>p?na=!0:x=p;N(f,r,Q,d,e);E++;b[l]=null;break}}else{for(var La=new Map,l=g;l<=q;l++)r=c[l],La.set(r.h,l);for(l=n;l<=m;l++)r=b[l],E<k&&(p=La.get(r.h),void 0!==p&&(Q=c[p],h[p-g]=l,x>p?na=!0:x=p,N(f,r,Q,d,e),E++,b[l]=null))}if(ma===b.length&&0===E)for(f.textContent="",S(b);g<k;)V(f,null,c[g++],d,e);else{for(l=ma-E;0<l;)r=b[n++],null!==r&&
(T(f,r),l--);if(na){n=h.slice(0);b=[];b.push(0);m=0;for(q=h.length;m<q;m++)if(-1!==h[m])if(l=b[b.length-1],h[l]<h[m])n[m]=l,b.push(m);else{l=0;for(p=b.length-1;l<p;)r=(l+p)/2|0,h[b[r]]<h[m]?l=r+1:p=r;h[m]<h[b[l]]&&(0<l&&(n[m]=b[l-1]),b[l]=m)}l=b.length;for(p=b[l-1];0<l--;)b[l]=p,p=n[p];p=b.length-1;for(l=k-1;0<=l;l--)-1===h[l]?(x=l+g,r=c[x],k=x+1,k=k<c.length?C(c[k]):null,V(f,k,r,d,e)):0>p||l!==b[p]?(x=l+g,r=c[x],k=x+1,k=k<c.length?C(c[k]):null,f.insertBefore(C(r),k)):p--}else if(E!==k)for(l=k-1;0<=
l;l--)-1===h[l]&&(x=l+g,r=c[x],k=x+1,k=k<c.length?C(c[k]):null,V(f,k,r,d,e))}}}else{g=k=0;n=b.length-1;for(h=c.length-1;k<=n&&g<=h;){m=b[k];q=c[g];if(!Ga(m,q))break;k++;g++;Ha(f,m,q,d,e)}for(;k<=n&&g<=h;){m=b[n];q=c[h];if(!Ga(m,q))break;n--;h--;Ha(f,m,q,d,e)}for(;k<=n&&g<=h;)m=b[k++],q=c[g++],N(f,m,q,d,e);if(k<=n){do T(f,b[k++]);while(k<=n)}else if(g<=h){b=h+1;b=b<c.length?C(c[b]):null;do V(f,b,c[g++],d,e);while(g<=h)}}else if(0<b.length)for(N(f,b[0],c,d,e),g=1;g<b.length;g++)T(f,b[g]);else V(f,null,
c,d,e);else if(g&32)if(h&144)h&16?f.textContent=c:f.innerHTML=c,R(b);else if(h&64)if(0<c.length)for(N(f,b,c[0],d,e),g=1;g<c.length;g++)V(f,null,c[g],d,e);else T(f,b);else N(f,b,c,d,e);else"string"===typeof c?f.value!==c&&(f.value=c):f.checked=c}}else f&8?(e=a=c.j=b.j,f=c.g,e.K(e.g,f)?(e.b|=1,e.g=f,e.b&128&&(e.b|=4)):e.g=f,e.G!==d&&(e.b|=4,e.G=d),Ca(e)):a=c.j=Fa(a,b,c,d,e);return a}
function N(a,b,c,d,e){if(Ga(b,c))return Ha(a,b,c,d,e);d=U(a,c,d,e);a.replaceChild(c.a&8?C(d.root):d,C(b));R(b);P(c);return d}var Ia=0,Ja=0,Ka=[],Ma=[],Na=document.createTextNode(""),Oa="__ivi"+Math.random();(new MutationObserver(Pa)).observe(Na,{characterData:!0});window.addEventListener("message",Qa);function Qa(a){if(a.source===window&&a.data===Oa){Ia&=-3;a=Ma;Ma=[];for(var b=0;b<a.length;b++)a[b]();Ja++}}
function Pa(){for(;0<Ka.length;){var a=Ka;Ka=[];for(var b=0;b<a.length;b++)a[b]();Ja++}Ia&=-2}function Ra(a){0===(Ia&2)&&(Ia|=2,window.postMessage(Oa,"*"));Ma.push(a)}function Sa(a,b,c,d){this.B=this.H=null;this.i=a;this.b=b;this.ea=c;this.filter=d}Sa.prototype.cancel=function(){this.b&1||(!this.i.T||this.b&2?(this.H?this.H.B=this.B:this.i.C=this.B,this.B&&(this.B.H=this.H),this.b|=1,0===--this.i.N&&this.i.O()):(this.b|=2,this.i.A||(this.i.A=[]),this.i.A.push(this)))};
function W(){this.N=0;this.T=!1;this.A=this.C=null}W.prototype.M=function(){};W.prototype.O=function(){};W.prototype.subscribe=function(a,b,c){a=new Sa(this,void 0===c?0:c,a,b);this.C&&(this.C.H=a,a.B=this.C);this.C=a;0===this.N++&&this.M();return a};function Ba(a){0===a.N++&&a.M()}function M(a){0===--a.N&&a.O()}function Ta(a,b,c){b.currentTarget=a.target;for(var d=0;d<a.Y.length;d++){var e=a.Y[d];if(e.b&c&&(e.da(b),b.a&2))break}}
function X(a,b,c){W.call(this);this.b=a;this.name=b;this.X=c;this.V=this.ba.bind(this);this.D=!1}v(X,W);
X.prototype.ba=function(a){var b;if(this.C){var c=b=new this.X(this,0,a,oa(a),a.timeStamp,a.type);this.T=!0;for(var d=this.C;d;)d.b&3||d.ea(c,void 0),d=d.B;this.T=!1;if(this.A){for(c=0;c<this.A.length;c++)this.A[c].cancel();this.A=null}}if(!(b&&b.a&3)){d=oa(a);for(c=[];d;){var e=d,f=e._ev;if(f){for(var g=void 0,h=Object.keys(f),n=0;n<h.length;n++){var m=f[h[n]];m.i===this&&(g?g.push(m):g=[m])}g&&c.push({target:e,Y:g})}d=d.parentElement}if(0<c.length)a:{b||(b=new this.X(this,0,a,oa(a),a.timeStamp,
a.type)),d=b;e=!!(this.b&4);for(f=c.length-1;0<=f;)if(g=c[f],g.target!==d.target){if(Ta(c[f--],d,1),d.a&1)break a}else break;g=c[0];if(g.target===d.target){d.a|=64;Ta(g,d,3);if(d.a&1)break a;d.a&=-65;f=1}else f=0;if(e)for(d.a|=128;f<c.length&&!(Ta(c[f++],d,2),d.a&1););}b&&b.a&4&&a.preventDefault()}};X.prototype.M=function(){this.D?this.D=!1:(W.prototype.M.call(this),document.addEventListener(this.name,this.V,ra(this.b)))};
X.prototype.O=function(){var a=this;this.D||(this.D=!0,Ra(function(){a.D&&(document.removeEventListener(a.name,a.V,ra(a.b)),W.prototype.O.call(a),a.D=!1)}))};function Y(a,b,c,d,e,f){this.i=a;this.a=b;this.f=c;this.currentTarget=this.target=d;this.timeStamp=e;this.type=f}Y.prototype.stopPropagation=function(){this.a|=1};Y.prototype.stopImmediatePropagation=function(){this.a|=3};Y.prototype.preventDefault=function(){this.a|=4};
u.Object.defineProperties(Y.prototype,{defaultPrevented:{configurable:!0,enumerable:!0,get:function(){return!!(this.a&4)}},bubbles:{configurable:!0,enumerable:!0,get:function(){return!!(this.a&8)}},cancelable:{configurable:!0,enumerable:!0,get:function(){return!!(this.a&16)}},isTrusted:{configurable:!0,enumerable:!0,get:function(){return!!(this.a&32)}},eventPhase:{configurable:!0,enumerable:!0,get:function(){return this.a&64?2:this.a&128?3:1}},CAPTURING_PHASE:{configurable:!0,enumerable:!0,get:function(){return 1}},
AT_TARGET:{configurable:!0,enumerable:!0,get:function(){return 2}},BUBBLING_PHASE:{configurable:!0,enumerable:!0,get:function(){return 3}}});function Ua(a){Y.apply(this,arguments)}v(Ua,Y);u.Object.defineProperties(Ua.prototype,{detail:{configurable:!0,enumerable:!0,get:function(){return this.f.detail}},view:{configurable:!0,enumerable:!0,get:function(){return this.f.view}}});function Va(a){Ua.apply(this,arguments)}v(Va,Ua);Va.prototype.getModifierState=function(a){return this.f.getModifierState(a)};
u.Object.defineProperties(Va.prototype,{altKey:{configurable:!0,enumerable:!0,get:function(){return this.f.altKey}},button:{configurable:!0,enumerable:!0,get:function(){return this.f.button}},buttons:{configurable:!0,enumerable:!0,get:function(){return this.f.buttons}},clientX:{configurable:!0,enumerable:!0,get:function(){return this.f.clientX}},clientY:{configurable:!0,enumerable:!0,get:function(){return this.f.clientY}},ctrlKey:{configurable:!0,enumerable:!0,get:function(){return this.f.ctrlKey}},
fromElement:{configurable:!0,enumerable:!0,get:function(){return this.f.fromElement}},layerX:{configurable:!0,enumerable:!0,get:function(){return this.f.layerX}},layerY:{configurable:!0,enumerable:!0,get:function(){return this.f.layerY}},metaKey:{configurable:!0,enumerable:!0,get:function(){return this.f.metaKey}},ga:{configurable:!0,enumerable:!0,get:function(){return this.f.ga}},ha:{configurable:!0,enumerable:!0,get:function(){return this.f.ha}},offsetX:{configurable:!0,enumerable:!0,get:function(){return this.f.offsetX}},
offsetY:{configurable:!0,enumerable:!0,get:function(){return this.f.offsetY}},pageX:{configurable:!0,enumerable:!0,get:function(){return this.f.pageX}},pageY:{configurable:!0,enumerable:!0,get:function(){return this.f.pageY}},relatedTarget:{configurable:!0,enumerable:!0,get:function(){return this.f.relatedTarget}},screenX:{configurable:!0,enumerable:!0,get:function(){return this.f.screenX}},screenY:{configurable:!0,enumerable:!0,get:function(){return this.f.screenY}},shiftKey:{configurable:!0,enumerable:!0,
get:function(){return this.f.shiftKey}},toElement:{configurable:!0,enumerable:!0,get:function(){return this.f.toElement}},which:{configurable:!0,enumerable:!0,get:function(){return this.f.which}},x:{configurable:!0,enumerable:!0,get:function(){return this.f.x}},y:{configurable:!0,enumerable:!0,get:function(){return this.f.y}}});var Wa=new X(5,"click",Va),Z=[];
function Xa(a,b){var c;c=void 0===c?wa:c;var d;a:{for(d=0;d<Z.length;d++){var e=Z[d];if(e.container===b){d=e;break a}}d=void 0}d?(d.U=a,d.P=c):(d={container:b,W:null,U:a,P:c,ca:null,fa:!1},Z.push(d));a=d;c=a.W;(b=a.U)?(c?c=N(a.container,c,b,a.P,void 0):(c=V(a.container,null,b,a.P,void 0),ja&1&&(a.container.onclick=ka)),a.W=b,a.ca=b.a&8?C(c.root):c):c&&(a.container.removeChild(C(c)),R(c),b=Z.pop(),b!==a&&Z.length&&(Z[Z.indexOf(a)]=b));a.U=null;a.P=null;a.fa=!1}
function Ya(){var a=this;J.apply(this,[].concat(arguments instanceof Array?arguments:fa(z(arguments))));this.ia={i:Wa,b:2,da:function(){console.log("Click",a.props)}};this.Z={click:this.ia}}v(Ya,J);Ya.prototype.R=function(){var a=G("td","TableCell");a.m=this.Z;return a.children(this.props)};
var Za=Ya,Za=function(a,b,c,d){var e=arguments.length,f=3>e?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d,g;if("object"===typeof Reflect&&"function"===typeof Reflect.aa)f=Reflect.aa(a,b,c,d);else for(var h=a.length-1;0<=h;h--)if(g=a[h])f=(3>e?g(f):3<e?g(b,c,f):g(b,c))||f;return 3<e&&f&&Object.defineProperty(b,c,f),f}([K],Za);K($a);
function $a(a){var b=a.props,c=a.id;a=a.active;var d=Array(b.length+1);d[0]=H(Za,"#"+c);for(var e=0;e<b.length;e++)d[e+1]=H(Za,b[e]);return G("tr",a?"TableRow active":"TableRow").props({"data-id":c}).children(d)}K(ab);function ab(a){a=a.items;for(var b=Array(a.length),c=0;c<a.length;c++){var d=a[c];b[c]=H($a,d).key(d.id)}return G("table","Table").children(ta(G("tbody"),b))}K(bb);
function bb(a){var b=a.time;return G("div","AnimBox").props({"data-id":a.id}).style({background:"rgba(0,0,0,"+(.5+b%10/10)+")",borderRadius:b%10+"px"})}K(cb);function cb(a){a=a.items;for(var b=Array(a.length),c=0;c<a.length;c++){var d=a[c];b[c]=H(bb,d).key(d.id)}return ta(G("div","Anim"),b)}K(db);function db(a){return G("li","TreeLeaf").children(a.id)}K(eb);
function eb(a){for(var b=Array(a.children.length),c=0;c<a.children.length;c++){var d=a.children[c];b[c]=(d.container?H(eb,d):H(db,d)).key(d.id)}return ta(G("ul","TreeNode"),b)}K(fb);function fb(a){return G("div","Tree").children(H(eb,a.root))}K(gb);function gb(a){if(!a)return G("div","Main");switch(a.location){case "table":return G("div","Main").children(H(ab,a.table));case "anim":return G("div","Main").children(H(cb,a.anim));default:return G("div","Main").children(H(fb,a.tree))}}
uibench.init("ivi","0.2.0");document.addEventListener("DOMContentLoaded",function(){var a=document.querySelector("#App");Xa(H(gb,void 0),a);uibench.run(function(b){Xa(H(gb,b),a)},function(b){Xa(G("pre").children(JSON.stringify(b,void 0,2)),a)})});}).call(this);

//# sourceMappingURL=bundle.js.map
