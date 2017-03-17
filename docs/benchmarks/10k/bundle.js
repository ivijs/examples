(function(){'use strict';var u,aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},v="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function ba(){ba=function(){};v.Symbol||(v.Symbol=ca)}var da=0;function ca(a){return"jscomp_symbol_"+(a||"")+da++}
function w(){ba();var a=v.Symbol.iterator;a||(a=v.Symbol.iterator=v.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&aa(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(this)}});w=function(){}}function ea(a){var b=0;return fa(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}function fa(a){w();a={next:a};a[v.Symbol.iterator]=function(){return this};return a}function x(a){w();var b=a[Symbol.iterator];return b?b.call(a):ea(a)}
function ga(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]}function ha(a,b){w();a instanceof String&&(a+="");var c=0,d={next:function(){if(c<a.length){var e=c++;return{value:b(e,a[e]),done:!1}}d.next=function(){return{done:!0,value:void 0}};return d.next()}};d[Symbol.iterator]=function(){return d};return d}
function z(a,b){if(b){var c=v;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&aa(c,a,{configurable:!0,writable:!0,value:b})}}z("Array.prototype.keys",function(a){return a?a:function(){return ha(this,function(a){return a})}});
z("Promise",function(a){function b(a){this.K=0;this.Z=void 0;this.J=[];var b=this.T();try{a(b.resolve,b.reject)}catch(h){b.reject(h)}}function c(){this.u=null}if(a)return a;c.prototype.da=function(a){null==this.u&&(this.u=[],this.qa());this.u.push(a)};c.prototype.qa=function(){var a=this;this.ea(function(){a.ua()})};var d=v.setTimeout;c.prototype.ea=function(a){d(a,0)};c.prototype.ua=function(){for(;this.u&&this.u.length;){var a=this.u;this.u=[];for(var b=0;b<a.length;++b){var c=a[b];delete a[b];
try{c()}catch(m){this.ra(m)}}}this.u=null};c.prototype.ra=function(a){this.ea(function(){throw a;})};b.prototype.T=function(){function a(a){return function(d){c||(c=!0,a.call(b,d))}}var b=this,c=!1;return{resolve:a(this.Aa),reject:a(this.Y)}};b.prototype.Aa=function(a){if(a===this)this.Y(new TypeError("A Promise cannot resolve to itself"));else if(a instanceof b)this.Ba(a);else{var c;a:switch(typeof a){case "object":c=null!=a;break a;case "function":c=!0;break a;default:c=!1}c?this.za(a):this.ha(a)}};
b.prototype.za=function(a){var b=void 0;try{b=a.then}catch(h){this.Y(h);return}"function"==typeof b?this.Ca(b,a):this.ha(a)};b.prototype.Y=function(a){this.ka(2,a)};b.prototype.ha=function(a){this.ka(1,a)};b.prototype.ka=function(a,b){if(0!=this.K)throw Error("Cannot settle("+a+", "+b|"): Promise already settled in state"+this.K);this.K=a;this.Z=b;this.va()};b.prototype.va=function(){if(null!=this.J){for(var a=this.J,b=0;b<a.length;++b)a[b].call(),a[b]=null;this.J=null}};var e=new c;b.prototype.Ba=
function(a){var b=this.T();a.L(b.resolve,b.reject)};b.prototype.Ca=function(a,b){var c=this.T();try{a.call(b,c.resolve,c.reject)}catch(m){c.reject(m)}};b.prototype.then=function(a,c){function d(a,b){return"function"==typeof a?function(b){try{e(a(b))}catch(r){g(r)}}:b}var e,g,f=new b(function(a,b){e=a;g=b});this.L(d(a,e),d(c,g));return f};b.prototype.catch=function(a){return this.then(void 0,a)};b.prototype.L=function(a,b){function c(){switch(d.K){case 1:a(d.Z);break;case 2:b(d.Z);break;default:throw Error("Unexpected state: "+
d.K);}}var d=this;null==this.J?e.da(c):this.J.push(function(){e.da(c)})};b.resolve=function(a){return a instanceof b?a:new b(function(b){b(a)})};b.reject=function(a){return new b(function(b,c){c(a)})};b.race=function(a){return new b(function(c,d){for(var e=x(a),h=e.next();!h.done;h=e.next())b.resolve(h.value).L(c,d)})};b.all=function(a){var c=x(a),d=c.next();return d.done?b.resolve([]):new b(function(a,e){function h(b){return function(c){g[b]=c;f--;0==f&&a(g)}}var g=[],f=0;do g.push(void 0),f++,b.resolve(d.value).L(h(g.length-
1),e),d=c.next();while(!d.done)})};b.$jscomp$new$AsyncExecutor=function(){return new c};return b});function A(a,b){return Object.prototype.hasOwnProperty.call(a,b)}z("Object.assign",function(a){return a?a:function(a,c){for(var b=1;b<arguments.length;b++){var e=arguments[b];if(e)for(var f in e)A(e,f)&&(a[f]=e[f])}return a}});
z("Array.prototype.fill",function(a){return a?a:function(a,c,d){var b=this.length||0;0>c&&(c=Math.max(0,b+c));if(null==d||d>b)d=b;d=Number(d);0>d&&(d=Math.max(0,b+d));for(c=Number(c||0);c<d;c++)this[c]=a;return this}});
z("WeakMap",function(a){function b(a){this.I=(f+=Math.random()+1).toString();if(a){ba();w();a=x(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}}function c(a){A(a,e)||aa(a,e,{value:{}})}function d(a){var b=Object[a];b&&(Object[a]=function(a){c(a);return b(a)})}if(function(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),c=Object.seal({}),d=new a([[b,2],[c,3]]);if(2!=d.get(b)||3!=d.get(c))return!1;d.delete(b);d.set(c,4);return!d.has(b)&&4==d.get(c)}catch(n){return!1}}())return a;
var e="$jscomp_hidden_"+Math.random().toString().substring(2);d("freeze");d("preventExtensions");d("seal");var f=0;b.prototype.set=function(a,b){c(a);if(!A(a,e))throw Error("WeakMap key fail: "+a);a[e][this.I]=b;return this};b.prototype.get=function(a){return A(a,e)?a[e][this.I]:void 0};b.prototype.has=function(a){return A(a,e)&&A(a[e],this.I)};b.prototype.delete=function(a){return A(a,e)&&A(a[e],this.I)?delete a[e][this.I]:!1};return b});
z("Map",function(a){function b(){var a={};return a.o=a.next=a.head=a}function c(a,b){var c=a.m;return fa(function(){if(c){for(;c.head!=a.m;)c=c.o;for(;c.next!=c.head;)return c=c.next,{done:!1,value:b(c)};c=null}return{done:!0,value:void 0}})}function d(a,b){var c;c=b&&typeof b;"object"==c||"function"==c?f.has(b)?c=f.get(b):(c=""+ ++g,f.set(b,c)):c="p_"+b;var d=a.H[c];if(d&&A(a.H,c))for(a=0;a<d.length;a++){var e=d[a];if(b!==b&&e.key!==e.key||b===e.key)return{id:c,list:d,index:a,g:e}}return{id:c,list:d,
index:-1,g:void 0}}function e(a){this.H={};this.m=b();this.size=0;if(a){a=x(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}if(function(){if(!a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a(x([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var d=c.entries(),e=d.next();if(e.done||e.value[0]!=b||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||"t"!=e.value[1]||!d.next().done?
!1:!0}catch(k){return!1}}())return a;ba();w();var f=new WeakMap;e.prototype.set=function(a,b){var c=d(this,a);c.list||(c.list=this.H[c.id]=[]);c.g?c.g.value=b:(c.g={next:this.m,o:this.m.o,head:this.m,key:a,value:b},c.list.push(c.g),this.m.o.next=c.g,this.m.o=c.g,this.size++);return this};e.prototype.delete=function(a){a=d(this,a);return a.g&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.H[a.id],a.g.o.next=a.g.next,a.g.next.o=a.g.o,a.g.head=null,this.size--,!0):!1};e.prototype.clear=
function(){this.H={};this.m=this.m.o=b();this.size=0};e.prototype.has=function(a){return!!d(this,a).g};e.prototype.get=function(a){return(a=d(this,a).g)&&a.value};e.prototype.entries=function(){return c(this,function(a){return[a.key,a.value]})};e.prototype.keys=function(){return c(this,function(a){return a.key})};e.prototype.values=function(){return c(this,function(a){return a.value})};e.prototype.forEach=function(a,b){for(var c=this.entries(),d;!(d=c.next()).done;)d=d.value,a.call(b,d[1],d[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});var ia=0;try{var ja=Object.defineProperty({},"passive",{get:function(){ia|=1}});window.addEventListener("test",null,ja)}catch(a){}"innerHTML"in SVGElement.prototype&&(ia|=4);"key"in KeyboardEvent.prototype&&(ia|=8);var ka=navigator?navigator.userAgent:"",B=0;!/iPad|iPhone|iPod/.test(ka)||"MSStream"in window||(B|="standalone"in navigator?3:1);-1<ka.indexOf("Android")&&(B|=4);
function C(a,b,c){if(!c||ia&4)a.innerHTML=b;else for(la||(la=document.createElement("div")),la.innerHTML="<svg>"+b+"</svg>",b=la.firstChild;b.firstChild;)a.appendChild(b.firstChild)}var la;function ma(){}var na=0,oa=!1,pa=[];window.addEventListener("message",qa);function qa(a){if(a.source===window&&"06526c5c-2dcc-4a4e-a86c-86f5dea6319d"===a.data){oa=!1;a=pa;pa=[];for(var b=0;b<a.length;b++)a[b]();na++}}var ra=!1,sa=[],ta,ua=0;
if(!(B&2)){var ya=new MutationObserver(va);ta=document.createTextNode("");ya.observe(ta,{characterData:!0})}function za(){va();oa||(oa=!0,window.postMessage("06526c5c-2dcc-4a4e-a86c-86f5dea6319d","*"));pa.push(ma)}function va(){for(;0<sa.length;){var a=sa;sa=[];for(var b=0;b<a.length;b++)a[b]();na++}ra=!1}var Aa=!0,D,Ba=[];function Ca(){var a=!D();if(Aa!==a)for(var b=0;b<Ba.length;b++)Ba[b](a)}
"undefined"!==typeof document.hidden?(D=function(){return document.hidden},document.addEventListener("visibilitychange",Ca)):"undefined"!==typeof document.webkitHidden?(D=function(){return document.webkitHidden},document.addEventListener("webkitvisibilitychange",Ca)):D=function(){return!0};Aa=!D();function Da(){this.a=0;this.ca=this.F=this.G=null}Da.prototype.write=function(a){this.a|=2;null===this.G&&(this.G=[]);this.G.push(a)};Da.prototype.read=function(a){this.a|=4;null===this.F&&(this.F=[]);this.F.push(a)};
function Ea(){this.s=[]}Ea.prototype.add=function(a){this.s.push(a)};function Fa(a){for(var b=0;b<a.s.length;b++)(0,a.s[b])()&&(b===a.s.length?a.s.pop():a.s[b--]=a.s.pop())}var Ga=new Ea;function E(a,b,c,d,e){this.a=a;this.i=b;this.h=0;this.c=c;this.B=d;this.j=this.A=null;this.b=e;this.f=null}u=E.prototype;u.key=function(a){this.a=null===a?this.a&-257:this.a|256;this.h=a;return this};u.className=function(a){this.B=a;return this};u.style=function(a){this.A=a;return this};
u.ya=function(a){this.c=a;return this};u.children=function(a){if("object"===typeof a){if(null!==a)if(a.constructor===Array){this.a|=64;a:for(var b=0;b<a.length;b++){var c=a[b];if("object"===typeof c){if(null===c||c.constructor===Array){a=Ha(a,b);break a}c.constructor!==E&&(c=F(""),a[b]=c);c.a&256||(c.h=b)}else if("string"===typeof c||"number"===typeof c)c=F(c),c.h=b,a[b]=c;else{a=Ha(a,b);break a}}}else a.constructor===E?(this.a|=32,a.a&256||(a.h=0)):(this.a|=16,a="")}else this.a|=16;this.b=a;return this};
u.value=function(a){this.b=a;return this};u.checked=function(a){this.b=a;return this};u.autofocus=function(a){a&&(this.a|=262144);return this};function F(a){return new E(1,null,null,null,a)}function Ia(a,b){return new E(2,a,null,void 0===b?null:b,null)}function Ja(a,b){return new E(a.prototype.v?8:4,a,b,null,null)}
function Ha(a,b){for(var c=a.slice(0,b);b<a.length;b++){var d=a[b];if("object"===typeof d){if(null!==d)if(d.constructor===Array)for(var e=0;e<d.length;e++)c.push(d[e]);else d.constructor===E||(d=F("")),d.a&256||(d.h=b),c.push(d)}else d=F(d),d.h=b,c.push(d)}return c}function G(a){return a.a&12?G(a.b):a.f}function Ka(a,b,c){c||(c="");b&4096?a.setAttribute("class",c):a.className=c}
function La(a,b,c){var d,e,f;if(null===b){if(null!==c)for(f=a.style,d=Object.keys(c),a=0;a<d.length;a++)e=d[a],f[e]=c[e]}else if(null===c)for(f=a.style,d=Object.keys(b),a=0;a<d.length;a++)f[d[a]]="";else{f=a.style;var g=0;d=Object.keys(b);for(a=0;a<d.length;a++){e=d[a];var h=c[e];void 0!==h?(b[e]!==h&&(f[e]=h),g++):f[e]=""}d=Object.keys(c);for(a=0;g<d.length&&a<d.length;)e=d[a++],b.hasOwnProperty(e)||(f[e]=c[e],g++)}}
function H(a,b,c,d){if(void 0===d){if(!(b&4096)&&6<c.length)switch(c){case "acceptCharset":c="accept-charset";break;case "htmlFor":c="for"}a.removeAttribute(c)}else if(b&4096){if(5<c.length&&120===c.charCodeAt(0)&&(58===c.charCodeAt(3)||58===c.charCodeAt(5))){if(109===c.charCodeAt(1)&&108===c.charCodeAt(2)){a.setAttributeNS("http://www.w3.org/XML/1998/namespace",c,d);return}if(108===c.charCodeAt(1)&&105===c.charCodeAt(2)&&110===c.charCodeAt(3)&&107===c.charCodeAt(4)){a.setAttributeNS("http://www.w3.org/1999/xlink",
c,d);return}}a.setAttribute(c,d)}else 5<c.length&&45===c.charCodeAt(4)?a.setAttribute(c,d):a[c]=d}
function Ma(a,b,c,d){var e,f,g;if(null===c){if(null!==d)for(f=Object.keys(d),e=0;e<f.length;e++)g=f[e],H(a,b,g,d[g])}else if(null===d)for(f=Object.keys(c),e=0;e<f.length;e++)H(a,b,f[e]);else{var h=0;f=Object.keys(c);for(e=0;e<f.length;e++){g=f[e];var m=d[g];void 0===m?H(a,b,g):(c[g]!==m&&H(a,b,g,m),h++)}f=Object.keys(d);for(e=0;h<f.length&&e<f.length;)g=f[e++],c.hasOwnProperty(g)||(H(a,b,g,d[g]),h++)}}function I(a){a.ta.Ja(a)}function J(a){a.ta.Ka(a)}
function Na(a){if("function"===typeof a)I(a);else for(var b=0;b<a.length;b++){var c=a[b];c&&I(c)}}function Oa(a){if("function"===typeof a)J(a);else for(var b=0;b<a.length;b++){var c=a[b];c&&J(c)}}var Pa;function L(a){var b=a.a;if(b&2){if(b&96){var c=a.b;if(b&64)for(b=0;b<c.length;b++)L(c[b]);else L(c)}a.j&&Na(a.j)}else b&12&&(b&8&&(c=a.f,c.l|=1,c.Ga()),L(a.b))}
function M(a,b){var c=a.a;if(c&2){if(c&96){var d=a.b;c&64?N(d,b):M(d,b)}a.j&&Oa(a.j)}else c&12&&(c&131072&&b&4&&a.i(a.b,a.c)?b&1&&M(a.b,b&-5):(M(a.b,b),c&8&&b&1&&(a=a.f,a.l&=-2,a.Ha())))}function N(a,b){for(var c=0;c<a.length;c++)M(a[c],b)}
function O(a,b,c,d){var e=b.a;if(e&96)if(a=b.f,b=b.b,e&64)for(e=0;e<b.length;e++)O(a,b[e],c,d);else O(a,b,c,d);else if(e&12)if(e&8){var e=b.f,f=b.b;e.l&6||d&16?(e.sa(),b=b.b=e.v(),P(a,f,b,c,d),e.l&=-7,e.Da()):O(a,f,c,d)}else if(e&32768){var e=b.i,f=b.f,g=e.select(f,b.c,c),h=b.b;b.b=f===g?b.b:e.v(g.X);b.f=g;P(a,h,b.b,c,d)}else e&65536&&(d&32&&(b.f=Object.assign({},c,b.c)),c=b.f),O(a,b.b,c,d)}function Q(a,b,c){a.removeChild(G(b));M(b,c|4)}
function R(a,b,c){var d=b.a,e=null,f;if(d&3){if(d&1)a=document.createTextNode(b.b);else if(d&8192?a=b.i.createElement():d&512?d&1024?a=document.createElement("textarea"):(a=document.createElement("input"),a.type=b.i):a=d&4096?document.createElementNS("http://www.w3.org/2000/svg",b.i):document.createElement(b.i),d&262144&&(Pa=a),b.c&&Ma(a,d,null,b.c),null!==b.B&&Ka(a,d,b.B),null!==b.A&&La(a,null,b.A),b.j&&(a._ev=b.j),e=b.b,null!==e)if(d&80)if(d&16)a.textContent=e;else for(d=0;d<e.length;d++)f=e[d],
f=R(a,f,c),a.insertBefore(f,null);else d&32?(f=R(a,e,c),a.insertBefore(f,null)):d&512?(c=a,"string"===typeof e?c.value=e:c.checked=e):e&&C(a,e,!!(d&4096));e=a}else d&8?(d=e=new b.i(b.c),d=b.b=d.v(),a=R(a,d,c)):d&131072?(d=b.i,(d=d(null,b.c))?(P(a,d,b.b,c,32),a=G(b.b)):a=R(a,b.b,c)):(d&98304?d&32768?(d=b.i,f=b.f=d.select(null,b.c,c),b.b=d.v(f.X)):c=e=Object.assign({},c,b.c):b.b=b.i(b.c),a=R(a,b.b,c));b.f=e;return a}function S(a,b,c,d,e){d=R(a,c,d);a.insertBefore(d,b);e&1&&L(c)}
function T(a,b){return a.h===b.h&&(a.a&256)===(b.a&256)}
function P(a,b,c,d,e){if(b===c)O(a,c,d,e);else{var f,g=c.a;if((b.a&261903)===(c.a&261903)&&b.i===c.i&&b.h===c.h)if(f=c.f=b.f,g&3)if(g&1)b.b!==c.b&&(f.nodeValue=c.b);else{b.c!==c.c&&Ma(f,g,b.c,c.c);b.B!==c.B&&Ka(f,g,c.B);b.A!==c.A&&La(f,b.A,c.A);if(b.j!==c.j){if(e&1){a=b.j;var h=c.j,m,n,p;if(null===a)null!==h&&Na(h);else if(null===h)Oa(a);else if("function"===typeof a)Na(h),J(a);else if("function"===typeof h)for(I(h),m=0;m<a.length;m++)(n=a[m])&&J(n);else{for(m=0;m<a.length&&m<h.length;)n=a[m],p=h[m++],
n!==p&&(p&&I(p),n&&J(n));for(;m<h.length;)(n=h[m++])&&I(n);for(;m<a.length;)(n=a[m++])&&J(n)}}f._ev=c.j}if(b.b!==c.b){a=f;f=b.a;b=b.b;c=c.b;var k;if(null===b)if(g&80)if(g&16)a.textContent=c;else for(k=0;k<c.length;k++)S(a,null,c[k],d,e);else g&32?S(a,null,c,d,e):g&512?"string"===typeof c?a.value=c:a.checked=c:c&&C(a,c,!!(g&4096));else if(null===c)f&144?a.textContent="":f&64?(a.textContent="",N(b,e|4)):f&32&&Q(a,b,e);else if(f&144)if(g&144)g&16||!c?(d=a.firstChild)?d.nodeValue=c:a.textContent=c:C(a,
c,!!(g&4096));else if(a.textContent="",g&64)for(k=0;k<c.length;k++)S(a,null,c[k],d,e);else S(a,null,c,d,e);else if(f&64)if(g&144)g&16||!c?a.textContent=c:C(a,c,!!(g&4096)),N(b,e|4);else if(g&64)if(0===b.length)for(k=0;k<c.length;k++)S(a,null,c[k],d,e);else if(0===c.length)a.textContent="",N(b,e|4);else if(1===b.length&&1===c.length)P(a,b[0],c[0],d,e);else{g=m=0;n=b.length-1;p=c.length-1;h=b[m];f=c[g];var l=b[n],q=c[p],r,Y;a:for(;;){for(;T(h,f);){P(a,h,f,d,e);m++;g++;if(m>n||g>p)break a;h=b[m];f=c[g]}for(;T(l,
q);){P(a,l,q,d,e);n--;p--;if(m>n||g>p)break a;l=b[n];q=c[p]}if(T(l,f))P(a,l,f,d,e),a.insertBefore(G(f),G(h)),n--,g++,l=b[n],f=c[g];else if(T(h,q))P(a,h,q,d,e),h=p+1,h=h<c.length?G(c[h]):null,a.insertBefore(G(q),h),m++,p--,h=b[m],q=c[p];else break}if(m>n)for(h=p+1,h=h<c.length?G(c[h]):null;g<=p;)S(a,h,c[g++],d,e);else if(g>p)for(;m<=n;)Q(a,b[m++],e);else{var wa=n-m+1,h=p-g+1;f=Array(h).fill(-1);var xa=!1,y=0,K=0;if(4>=h||16>=wa*h)for(l=m;l<=n;l++){if(r=b[l],K<h)for(q=g;q<=p;q++)if(Y=c[q],T(r,Y)){f[q-
g]=l;y>q?xa=!0:y=q;P(a,r,Y,d,e);K++;b[l]=null;break}}else{for(var t,l=g;l<=p;l++)r=c[l],r.a&256?(void 0===k&&(k=new Map),k.set(r.h,l)):(void 0===t&&(t=[]),t[r.h-m]=l);for(l=m;l<=n;l++)r=b[l],K<h&&(q=r.a&256?k?k.get(r.h):void 0:t?t[r.h-m]:void 0,void 0!==q&&(Y=c[q],f[q-g]=l,y>q?xa=!0:y=q,P(a,r,Y,d,e),K++,b[l]=null))}if(wa===b.length&&0===K)for(a.textContent="",N(b,e|4);g<h;)S(a,null,c[g++],d,e);else{for(l=wa-K;0<l;)r=b[m++],null!==r&&(Q(a,r,e),l--);if(xa){t=f.slice(0);k=[];k.push(0);b=0;for(m=f.length;b<
m;b++)if(-1!==f[b])if(n=k[k.length-1],f[n]<f[b])t[b]=n,k.push(b);else{n=0;for(p=k.length-1;n<p;)l=(n+p)/2|0,f[k[l]]<f[b]?n=l+1:p=l;f[b]<f[k[n]]&&(0<n&&(t[b]=k[n-1]),k[n]=b)}n=k.length;for(p=k[n-1];0<n--;)k[n]=p,p=t[p];q=k.length-1;for(l=h-1;0<=l;l--)-1===f[l]?(y=l+g,r=c[y],h=y+1,h=h<c.length?G(c[h]):null,S(a,h,r,d,e)):0>q||l!==k[q]?(y=l+g,r=c[y],h=y+1,h=h<c.length?G(c[h]):null,a.insertBefore(G(r),h)):q--}else if(K!==h)for(l=h-1;0<=l;l--)-1===f[l]&&(y=l+g,r=c[y],h=y+1,h=h<c.length?G(c[h]):null,S(a,
h,r,d,e))}}}else if(0<b.length){for(k=0;k<b.length;)if(t=b[k++],T(t,c)){P(a,t,c,d,e);break}else Q(a,t,e);if(k<b.length)for(;k<b.length;)Q(a,b[k++],e);else S(a,null,c,d,e)}else S(a,null,c,d,e);else if(f&32)if(g&144)g&16||!c?a.textContent=c:C(a,c,!!(g&4096)),M(b,e|4);else if(g&64)if(0<c.length){k=0;for(t=G(b);k<c.length;)if(g=c[k++],T(b,g)){P(a,b,g,d,e);break}else S(a,t,c[k],d,e);if(k<c.length)for(;k<c.length;)S(a,null,c[k++],d,e);else Q(a,b,e)}else Q(a,b,e);else P(a,b,c,d,e);else"string"===typeof c?
a.value!==c&&(a.value=c):a.checked=c}}else g&8?(k=f,g=b.c,f=c.c,t=!1,k.V(g,f)&&(t=!0,k.Ia(g,f)),k.ya=f,g=b.b,t||k.l&6||e&16?(k.sa(),c=c.b=k.v(),P(a,g,c,d,e),k.l&=-7,k.Da()):(c.b=b.b,O(a,g,d,e))):(k=c.i,g&229376?(g&32768?(k=c.i,t=b.f,g=k.select(t,c.c,d),c.b=t===g?b.b:k.v(g.X),c.f=g):g&65536&&(e&32||b.c!==c.c?(e|=32,d=c.f=Object.assign({},d,c.c)):d=c.f=b.f),P(a,b.b,c.b,d,e)):e&16||b!==c&&(!k.V&&b.c!==c.c||k.V&&k.V(b.c,c.c))?(t=b.b,c=c.b=k(c.c),P(a,t,c,d,e)):(c.b=b.b,O(a,c.b,d,e)));else f=R(a,c,d),a.replaceChild(f,
G(b)),e&1&&(M(b,e|4),L(c))}}var U=[],Qa={},Ra=!1,Sa=0;function Ta(){if(Ra){Ra=!1;for(var a=0;a<U.length;a++){var b=U[a],c=b.fa,d=b.ga,e=Sa|b.$|1;if(b.U){var f=b.W;f?(f.constructor!==E&&(f=F("")),d?P(c,d,f,Qa,e):(S(c,null,f,Qa,1),B&1&&(c.onclick=ma)),b.ga=f):d&&(c.removeChild(G(d)),M(d,5),c=U.pop(),c!==b&&U.length&&(U[U.indexOf(b)]=c));b.W=null;b.U=!1}else d&&O(c,d,Qa,e|8);b.$=0}}}
function Ua(a,b){var c=0,c=void 0===c?0:c,d;a:{for(d=0;d<U.length;d++){var e=U[d];if(e.fa===b){d=e;break a}}d=void 0}d?(d.W=a,d.U=!0,d.$=c):(d={fa:b,ga:null,W:a,U:!0,$:c},U.push(d));Va();Wa()}function Va(a){Sa=void 0===a?0:a;Ra||(Ra=!0,Xa(),Ya.write(Ta))}var Za=!1,$a=new Da,Ya=new Da;function ab(){Za&&requestAnimationFrame(Wa)}function Xa(){if(!Za){Za=!0;var a=ab;ra||(ra=!0,B&2?Promise.resolve().then(za):(ua^=1,ta.nodeValue=ua?"1":"0"));sa.push(a)}}
function Wa(){var a,b;Za=!1;var c=Ya;Ya=$a;$a=c;Fa(Ga);do{for(;c.a&4;)for(c.a&=-5,a=c.F,c.F=null,b=0;b<a.length;b++)a[b]();for(;c.a&3;){if(c.a&2)for(c.a&=-3,a=c.G,c.G=null,b=0;b<a.length;b++)a[b]();c.a&1&&(c.a&=-2,Va(void 0),Wa())}}while(c.a&7);for(Aa&&Fa(bb);0!==(c.a&8);)for(c.a&=-9,a=c.ca,c.ca=null,b=0;b<a.length;b++)a[b]();a=Pa;Pa=null;a&&a.focus();(0<cb||0<bb.s.length)&&Xa();na++}Ba.push(function(a){a&&(0<cb||0<bb.s.length)&&Xa()});var bb=new Ea,cb=0;
function db(a,b,c,d){this.min=a;this.max=b;this.ja=c;this.ia=d}function eb(){this.D=[];this.xa=100;this.w=-1}function fb(a,b){a.w=(a.w+1)%a.xa;a.D[a.w]=b}function gb(a,b){for(var c=a.D,d=0;d<c.length;d++)b(c[(a.w+1+d)%c.length],d)}function hb(a){var b=a.D;if(0===b.length)return new db(0,0,0,0);for(var c=b[(a.w+1)%b.length],d=c,e=0,f=0;f<b.length;f++){var g=b[(a.w+1+f)%b.length];g<c&&(c=g);g>d&&(d=g);e+=g}return new db(c,d,e/b.length,b[a.w])}var ib=[],jb=-1;
function kb(a){ib.push(a);-1===jb&&requestAnimationFrame(function(){jb=-1;var a=ib;ib=[];for(var c=0;c<a.length;c++)a[c]()})}function lb(a){var b=this;this.pa=function(){b.la();b.S=!1};this.name=a;this.element=document.createElement("div");this.element.style.cssText="padding: 2px;background-color: #020;font-family: monospace;font-size: 12px;color: #0f0";this.S=!1;mb(this)}function mb(a){a.S||(a.S=!0,kb(a.pa))}lb.prototype.la=function(){throw Error("sync method not implemented");};var V,W=V||(V={});
W[W.HideMin=1]="HideMin";W[W.HideMax=2]="HideMax";W[W.HideMean=4]="HideMean";W[W.HideLast=8]="HideLast";W[W.HideGraph=16]="HideGraph";W[W.RoundValues=32]="RoundValues";
function X(a,b,c,d){lb.call(this,a);this.l=b;this.R=c;this.D=d;a=document.createElement("div");a.style.cssText="text-align: center";a.textContent=this.name;c=document.createElement("div");0===(b&V.ba)?(this.P=document.createElement("div"),c.appendChild(this.P)):this.P=null;0===(b&V.na)?(this.N=document.createElement("div"),c.appendChild(this.N)):this.N=null;0===(b&V.aa)?(this.O=document.createElement("div"),c.appendChild(this.O)):this.O=null;0===(b&V.Fa)?(this.M=document.createElement("div"),c.appendChild(this.M)):
this.M=null;this.element.appendChild(a);this.element.appendChild(c);0===(b&V.Ea)?(this.canvas=document.createElement("canvas"),this.canvas.style.cssText="display: block; padding: 0; margin: 0",this.canvas.width=100,this.canvas.height=30,this.C=this.canvas.getContext("2d"),this.element.appendChild(this.canvas)):this.C=this.canvas=null}ga(X,lb);
X.prototype.la=function(){var a=this,b=hb(this.D),c=30/(1.2*b.max),d,e,f;0===(this.l&V.oa)?(d=b.min.toFixed(2),e=b.max.toFixed(2),f=b.ja.toFixed(2),b=b.ia.toFixed(2)):(d=Math.round(b.min).toString(),e=Math.round(b.max).toString(),f=Math.round(b.ja).toString(),b=Math.round(b.ia).toString());null!==this.P&&(this.P.textContent="min: \u00a0"+d+this.R);null!==this.N&&(this.N.textContent="max: \u00a0"+e+this.R);null!==this.O&&(this.O.textContent="mean: "+f+this.R);null!==this.M&&(this.M.textContent="last: "+
b+this.R);null!==this.C&&(this.C.fillStyle="#010",this.C.fillRect(0,0,100,30),this.C.fillStyle="#0f0",gb(this.D,function(b,d){a.C.fillRect(d,30,1,-(b*c))}))};var Z=null;function nb(){Z||(Z=document.createElement("div"),Z.style.cssText="position: fixed;opacity: 0.9;right: 0;bottom: 0",document.body.appendChild(Z))}
function ob(){var a;function b(a){0<f&&(g+=e*(1E3/(a-f)-g));f=a;fb(c,g);mb(d);requestAnimationFrame(b)}a=void 0===a?V.ba|V.na|V.aa|V.oa:a;nb();var c=new eb,d=new X("FPS",a,"",c);Z.appendChild(d.element);var e=2/121,f=0,g=60;requestAnimationFrame(b)}function pb(){var a;function b(){fb(c,Math.round(performance.memory.usedJSHeapSize/1048576));mb(d);setTimeout(b,30)}a=void 0===a?V.ba|V.aa:a;nb();if(void 0!==performance.memory){var c=new eb,d=new X("Memory",a,"MB",c);Z.appendChild(d.element);b()}}
function qb(a,b){this.data=new eb;this.ma=new X(a,b,"ms",this.data);this.startTime=-1}var rb={};function sb(a){var b;b=void 0===b?0:b;nb();var c=rb[a];void 0===c&&(rb[a]=c=new qb(a,b),Z.appendChild(c.ma.element))}function tb(a){a=rb[a];void 0!==a&&(a.startTime=performance.now())}function ub(a){var b=performance.now();a=rb[a];void 0!==a&&-1!==a.startTime&&(fb(a.data,b-a.startTime),mb(a.ma))}function vb(){return"#"+Math.floor(16777215*Math.random()).toString(16)}
function wb(){for(var a=Array(1E4),b=0;1E4>b;b++)a[b]=vb();return a}var xb=function(a,b){var c;c={select:a,v:b.prototype.v?function(a){return Ja(b,a)}:b};return function(a){return new E(32772,c,a,null,null)}}(function(a,b,c){b=c.data[b];return a&&a.wa===b?a:{wa:b,X:b}},function(a){return Ia("span","pixel").style({background:a})});
function Image(){for(var a=Array(100),b=0;100>b;b++){for(var c=100*b,d=Array(100),e=0;100>e;e++)d[e]=xb(c+e);a[b]=Ia("div","row").children(d)}return Ia("div","image").children(a)}
document.addEventListener("DOMContentLoaded",function(){function a(){tb("data update");var c=b;if(0<c)if(1===c)for(c=0;1E4>c;c++)e[c]=vb();else for(var d=0;1E4>d;d++)Math.random()<c&&(e[d]=vb());ub("data update");tb("view update");Ua(new E(65540,null,f,null,Ja(Image,e)),g);ub("view update");requestAnimationFrame(a)}ob();pb();sb("data update");sb("view update");var b=.5,c=document.createElement("div");c.style.margin="0 auto";c.style.width="80%";var d=document.createElement("input");d.type="range";
d.style.width="100%";d.addEventListener("change",function(a){b=Number.parseFloat(a.target.value)/100});c.appendChild(d);document.body.insertBefore(c,document.body.firstChild);var e=wb(),f={data:e},g=document.getElementById("app");Ua(new E(65540,null,f,null,Ja(Image,e)),g);requestAnimationFrame(a)});}).call(this);

//# sourceMappingURL=bundle.js.map
