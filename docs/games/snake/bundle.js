(function(){'use strict';var u,ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},v="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function ca(){ca=function(){};v.Symbol||(v.Symbol=da)}var ea=0;function da(a){return"jscomp_symbol_"+(a||"")+ea++}
function w(){ca();var a=v.Symbol.iterator;a||(a=v.Symbol.iterator=v.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&ba(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(this)}});w=function(){}}function fa(a){var b=0;return ga(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}function ga(a){w();a={next:a};a[v.Symbol.iterator]=function(){return this};return a}function x(a){w();var b=a[Symbol.iterator];return b?b.call(a):fa(a)}
function ha(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]}function ia(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
function ja(a,b){w();a instanceof String&&(a+="");var c=0,d={next:function(){if(c<a.length){var e=c++;return{value:b(e,a[e]),done:!1}}d.next=function(){return{done:!0,value:void 0}};return d.next()}};d[Symbol.iterator]=function(){return d};return d}function z(a,b){if(b){var c=v;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
z("Array.prototype.keys",function(a){return a?a:function(){return ja(this,function(a){return a})}});
z("Promise",function(a){function b(a){this.T=0;this.ea=void 0;this.S=[];var b=this.$();try{a(b.resolve,b.reject)}catch(h){b.reject(h)}}function c(){this.C=null}if(a)return a;c.prototype.ia=function(a){null==this.C&&(this.C=[],this.wa());this.C.push(a)};c.prototype.wa=function(){var a=this;this.ja(function(){a.Aa()})};var d=v.setTimeout;c.prototype.ja=function(a){d(a,0)};c.prototype.Aa=function(){for(;this.C&&this.C.length;){var a=this.C;this.C=[];for(var b=0;b<a.length;++b){var c=a[b];delete a[b];
try{c()}catch(l){this.xa(l)}}}this.C=null};c.prototype.xa=function(a){this.ja(function(){throw a;})};b.prototype.$=function(){function a(a){return function(d){c||(c=!0,a.call(b,d))}}var b=this,c=!1;return{resolve:a(this.Fa),reject:a(this.da)}};b.prototype.Fa=function(a){if(a===this)this.da(new TypeError("A Promise cannot resolve to itself"));else if(a instanceof b)this.Ga(a);else{var c;a:switch(typeof a){case "object":c=null!=a;break a;case "function":c=!0;break a;default:c=!1}c?this.Ea(a):this.na(a)}};
b.prototype.Ea=function(a){var b=void 0;try{b=a.then}catch(h){this.da(h);return}"function"==typeof b?this.Ha(b,a):this.na(a)};b.prototype.da=function(a){this.pa(2,a)};b.prototype.na=function(a){this.pa(1,a)};b.prototype.pa=function(a,b){if(0!=this.T)throw Error("Cannot settle("+a+", "+b|"): Promise already settled in state"+this.T);this.T=a;this.ea=b;this.Ba()};b.prototype.Ba=function(){if(null!=this.S){for(var a=this.S,b=0;b<a.length;++b)a[b].call(),a[b]=null;this.S=null}};var e=new c;b.prototype.Ga=
function(a){var b=this.$();a.V(b.resolve,b.reject)};b.prototype.Ha=function(a,b){var c=this.$();try{a.call(b,c.resolve,c.reject)}catch(l){c.reject(l)}};b.prototype.then=function(a,c){function d(a,b){return"function"==typeof a?function(b){try{e(a(b))}catch(r){g(r)}}:b}var e,g,f=new b(function(a,b){e=a;g=b});this.V(d(a,e),d(c,g));return f};b.prototype.catch=function(a){return this.then(void 0,a)};b.prototype.V=function(a,b){function c(){switch(d.T){case 1:a(d.ea);break;case 2:b(d.ea);break;default:throw Error("Unexpected state: "+
d.T);}}var d=this;null==this.S?e.ia(c):this.S.push(function(){e.ia(c)})};b.resolve=function(a){return a instanceof b?a:new b(function(b){b(a)})};b.reject=function(a){return new b(function(b,c){c(a)})};b.race=function(a){return new b(function(c,d){for(var e=x(a),h=e.next();!h.done;h=e.next())b.resolve(h.value).V(c,d)})};b.all=function(a){var c=x(a),d=c.next();return d.done?b.resolve([]):new b(function(a,e){function h(b){return function(c){g[b]=c;f--;0==f&&a(g)}}var g=[],f=0;do g.push(void 0),f++,b.resolve(d.value).V(h(g.length-
1),e),d=c.next();while(!d.done)})};b.$jscomp$new$AsyncExecutor=function(){return new c};return b});function A(a,b){return Object.prototype.hasOwnProperty.call(a,b)}z("Object.assign",function(a){return a?a:function(a,c){for(var b=1;b<arguments.length;b++){var e=arguments[b];if(e)for(var f in e)A(e,f)&&(a[f]=e[f])}return a}});
z("Array.prototype.fill",function(a){return a?a:function(a,c,d){var b=this.length||0;0>c&&(c=Math.max(0,b+c));if(null==d||d>b)d=b;d=Number(d);0>d&&(d=Math.max(0,b+d));for(c=Number(c||0);c<d;c++)this[c]=a;return this}});
z("WeakMap",function(a){function b(a){this.R=(f+=Math.random()+1).toString();if(a){ca();w();a=x(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}}function c(a){A(a,e)||ba(a,e,{value:{}})}function d(a){var b=Object[a];b&&(Object[a]=function(a){c(a);return b(a)})}if(function(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),c=Object.seal({}),d=new a([[b,2],[c,3]]);if(2!=d.get(b)||3!=d.get(c))return!1;d.delete(b);d.set(c,4);return!d.has(b)&&4==d.get(c)}catch(n){return!1}}())return a;
var e="$jscomp_hidden_"+Math.random().toString().substring(2);d("freeze");d("preventExtensions");d("seal");var f=0;b.prototype.set=function(a,b){c(a);if(!A(a,e))throw Error("WeakMap key fail: "+a);a[e][this.R]=b;return this};b.prototype.get=function(a){return A(a,e)?a[e][this.R]:void 0};b.prototype.has=function(a){return A(a,e)&&A(a[e],this.R)};b.prototype.delete=function(a){return A(a,e)&&A(a[e],this.R)?delete a[e][this.R]:!1};return b});
z("Map",function(a){function b(){var a={};return a.v=a.next=a.head=a}function c(a,b){var c=a.u;return ga(function(){if(c){for(;c.head!=a.u;)c=c.v;for(;c.next!=c.head;)return c=c.next,{done:!1,value:b(c)};c=null}return{done:!0,value:void 0}})}function d(a,b){var c;c=b&&typeof b;"object"==c||"function"==c?f.has(b)?c=f.get(b):(c=""+ ++g,f.set(b,c)):c="p_"+b;var d=a.P[c];if(d&&A(a.P,c))for(a=0;a<d.length;a++){var e=d[a];if(b!==b&&e.key!==e.key||b===e.key)return{id:c,list:d,index:a,j:e}}return{id:c,list:d,
index:-1,j:void 0}}function e(a){this.P={};this.u=b();this.size=0;if(a){a=x(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}if(function(){if(!a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a(x([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var d=c.entries(),e=d.next();if(e.done||e.value[0]!=b||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||"t"!=e.value[1]||!d.next().done?
!1:!0}catch(k){return!1}}())return a;ca();w();var f=new WeakMap;e.prototype.set=function(a,b){var c=d(this,a);c.list||(c.list=this.P[c.id]=[]);c.j?c.j.value=b:(c.j={next:this.u,v:this.u.v,head:this.u,key:a,value:b},c.list.push(c.j),this.u.v.next=c.j,this.u.v=c.j,this.size++);return this};e.prototype.delete=function(a){a=d(this,a);return a.j&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.P[a.id],a.j.v.next=a.j.next,a.j.next.v=a.j.v,a.j.head=null,this.size--,!0):!1};e.prototype.clear=
function(){this.P={};this.u=this.u.v=b();this.size=0};e.prototype.has=function(a){return!!d(this,a).j};e.prototype.get=function(a){return(a=d(this,a).j)&&a.value};e.prototype.entries=function(){return c(this,function(a){return[a.key,a.value]})};e.prototype.keys=function(){return c(this,function(a){return a.key})};e.prototype.values=function(){return c(this,function(a){return a.value})};e.prototype.forEach=function(a,b){for(var c=this.entries(),d;!(d=c.next()).done;)d=d.value,a.call(b,d[1],d[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});z("String.prototype.repeat",function(a){return a?a:function(a){var b;if(null==this)throw new TypeError("The 'this' value for String.prototype.repeat must not be null or undefined");b=this+"";if(0>a||1342177279<a)throw new RangeError("Invalid count value");a|=0;for(var d="";a;)if(a&1&&(d+=b),a>>>=1)b+=b;return d}});var B=0;try{var ka=Object.defineProperty({},"passive",{get:function(){B|=1}});window.addEventListener("test",null,ka)}catch(a){}
"innerHTML"in SVGElement.prototype&&(B|=4);"key"in KeyboardEvent.prototype&&(B|=8);var la=navigator?navigator.userAgent:"",C=0;!/iPad|iPhone|iPod/.test(la)||"MSStream"in window||(C|="standalone"in navigator?3:1);-1<la.indexOf("Android")&&(C|=4);function ma(a){a=a.target||window;a.ya&&(a=a.ya);return 3===a.nodeType?a.parentNode:a}
var na={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",44:"PrintScreen",45:"Insert",46:"Delete",91:"Meta",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Win"};
function oa(a){var b=a.keyCode;a=a.charCode;0===a&&13===b&&(a=13);return 32<=a||13===a?a:0}function D(a,b,c){if(!c||B&4)a.innerHTML=b;else for(pa||(pa=document.createElement("div")),pa.innerHTML="<svg>"+b+"</svg>",b=pa.firstChild;b.firstChild;)a.appendChild(b.firstChild)}var pa;function qa(){}var ra=0,sa=!1,ta=[];window.addEventListener("message",ua);function ua(a){if(a.source===window&&"06526c5c-2dcc-4a4e-a86c-86f5dea6319d"===a.data){sa=!1;a=ta;ta=[];for(var b=0;b<a.length;b++)a[b]();ra++}}
function va(a){sa||(sa=!0,window.postMessage("06526c5c-2dcc-4a4e-a86c-86f5dea6319d","*"));ta.push(a)}var wa=!1,xa=[],ya,za=0;if(!(C&2)){var Da=new MutationObserver(Aa);ya=document.createTextNode("");Da.observe(ya,{characterData:!0})}function Ea(){Aa();va(qa)}function Aa(){for(;0<xa.length;){var a=xa;xa=[];for(var b=0;b<a.length;b++)a[b]();ra++}wa=!1}var Fa=!0,E,Ga=[];function Ha(){var a=!E();if(Fa!==a)for(var b=0;b<Ga.length;b++)Ga[b](a)}
"undefined"!==typeof document.hidden?(E=function(){return document.hidden},document.addEventListener("visibilitychange",Ha)):"undefined"!==typeof document.webkitHidden?(E=function(){return document.webkitHidden},document.addEventListener("webkitvisibilitychange",Ha)):E=function(){return!0};Fa=!E();function Ia(){this.a=0;this.ga=this.N=this.O=null}Ia.prototype.write=function(a){this.a|=2;null===this.O&&(this.O=[]);this.O.push(a)};Ia.prototype.read=function(a){this.a|=4;null===this.N&&(this.N=[]);this.N.push(a)};
function Ja(){this.A=[]}Ja.prototype.add=function(a){this.A.push(a)};function Ka(a){for(var b=0;b<a.A.length;b++)(0,a.A[b])()&&(b===a.A.length?a.A.pop():a.A[b--]=a.A.pop())}var La=new Ja;function F(a,b,c,d,e){this.a=a;this.m=b;this.l=0;this.f=c;this.I=d;this.o=this.G=null;this.b=e;this.h=null}u=F.prototype;u.key=function(a){this.a=null===a?this.a&-257:this.a|256;this.l=a;return this};u.className=function(a){this.I=a;return this};u.style=function(a){this.G=a;return this};
function Ma(a,b){a.o=b;return a}u.w=function(a){this.f=a;return this};
u.children=function(a){if("object"===typeof a){if(null!==a)if(a.constructor===Array){this.a|=64;a:for(var b=0;b<a.length;b++){var c=a[b];if("object"===typeof c){if(null===c||c.constructor===Array){a=Na(a,b);break a}c.constructor!==F&&(c=G(""),a[b]=c);c.a&256||(c.l=b)}else if("string"===typeof c||"number"===typeof c)c=G(c),c.l=b,a[b]=c;else{a=Na(a,b);break a}}}else a.constructor===F?(this.a|=32,a.a&256||(a.l=0)):(this.a|=16,a="")}else this.a|=16;this.b=a;return this};u.value=function(a){this.b=a;return this};
u.checked=function(a){this.b=a;return this};u.autofocus=function(a){a&&(this.a|=262144);return this};function G(a){return new F(1,null,null,null,a)}function Oa(a){return new F(2,"div",null,void 0===a?null:a,null)}function Na(a,b){for(var c=a.slice(0,b);b<a.length;b++){var d=a[b];if("object"===typeof d){if(null!==d)if(d.constructor===Array)for(var e=0;e<d.length;e++)c.push(d[e]);else d.constructor===F||(d=G("")),d.a&256||(d.l=b),c.push(d)}else d=G(d),d.l=b,c.push(d)}return c}
function H(a){return a.a&12?H(a.b):a.h}function Pa(a,b,c){c||(c="");b&4096?a.setAttribute("class",c):a.className=c}
function Qa(a,b,c){var d,e,f;if(null===b){if(null!==c)for(f=a.style,d=Object.keys(c),a=0;a<d.length;a++)e=d[a],f[e]=c[e]}else if(null===c)for(f=a.style,d=Object.keys(b),a=0;a<d.length;a++)f[d[a]]="";else{f=a.style;var g=0;d=Object.keys(b);for(a=0;a<d.length;a++){e=d[a];var h=c[e];void 0!==h?(b[e]!==h&&(f[e]=h),g++):f[e]=""}d=Object.keys(c);for(a=0;g<d.length&&a<d.length;)e=d[a++],b.hasOwnProperty(e)||(f[e]=c[e],g++)}}
function I(a,b,c,d){if(void 0===d){if(!(b&4096)&&6<c.length)switch(c){case "acceptCharset":c="accept-charset";break;case "htmlFor":c="for"}a.removeAttribute(c)}else if(b&4096){if(5<c.length&&120===c.charCodeAt(0)&&(58===c.charCodeAt(3)||58===c.charCodeAt(5))){if(109===c.charCodeAt(1)&&108===c.charCodeAt(2)){a.setAttributeNS("http://www.w3.org/XML/1998/namespace",c,d);return}if(108===c.charCodeAt(1)&&105===c.charCodeAt(2)&&110===c.charCodeAt(3)&&107===c.charCodeAt(4)){a.setAttributeNS("http://www.w3.org/1999/xlink",
c,d);return}}a.setAttribute(c,d)}else 5<c.length&&45===c.charCodeAt(4)?a.setAttribute(c,d):a[c]=d}
function Ra(a,b,c,d){var e,f,g;if(null===c){if(null!==d)for(f=Object.keys(d),e=0;e<f.length;e++)g=f[e],I(a,b,g,d[g])}else if(null===d)for(f=Object.keys(c),e=0;e<f.length;e++)I(a,b,f[e]);else{var h=0;f=Object.keys(c);for(e=0;e<f.length;e++){g=f[e];var l=d[g];void 0===l?I(a,b,g):(c[g]!==l&&I(a,b,g,l),h++)}f=Object.keys(d);for(e=0;h<f.length&&e<f.length;)g=f[e++],c.hasOwnProperty(g)||(I(a,b,g,d[g]),h++)}}var Sa=B&1?{capture:!0,passive:!0}:!0,Ta=B&1?{passive:!0}:!1;
function Ua(a){return a&2?a&1?Sa:Ta:a&1?!0:!1}function Va(a){if("function"===typeof a)J(a.i);else for(var b=0;b<a.length;b++){var c=a[b];c&&J(c.i)}}function Wa(a){if("function"===typeof a)K(a.i);else for(var b=0;b<a.length;b++){var c=a[b];c&&K(c.i)}}var Xa;function M(a){var b=a.a;if(b&2){if(b&96){var c=a.b;if(b&64)for(b=0;b<c.length;b++)M(c[b]);else M(c)}a.o&&Va(a.o)}else b&12&&(b&8&&(c=a.h,c.g|=1),M(a.b))}
function N(a,b){var c=a.a;if(c&2){if(c&96){var d=a.b;c&64?O(d,b):N(d,b)}a.o&&Wa(a.o)}else c&12&&(c&131072&&b&4&&a.m(a.b,a.f)?b&1&&N(a.b,b&-5):(N(a.b,b),c&8&&b&1&&(a=a.h,a.g&=-2)))}function O(a,b){for(var c=0;c<a.length;c++)N(a[c],b)}
function P(a,b,c,d){var e=b.a;if(e&96)if(a=b.h,b=b.b,e&64)for(e=0;e<b.length;e++)P(a,b[e],c,d);else P(a,b,c,d);else if(e&12)if(e&8){var e=b.h,f=b.b;e.g&6||d&16?(b=b.b=e.H(),Q(a,f,b,c,d),e.g&=-7):P(a,f,c,d)}else if(e&32768){var e=b.m,f=b.h,g=e.select(f,b.f,c),h=b.b;b.b=f===g?b.b:e.H();b.h=g;Q(a,h,b.b,c,d)}else e&65536&&(d&32&&(b.h=Object.assign({},c,b.f)),c=b.h),P(a,b.b,c,d)}function R(a,b,c){a.removeChild(H(b));N(b,c|4)}
function S(a,b,c){var d=b.a,e=null,f;if(d&3){if(d&1)a=document.createTextNode(b.b);else if(d&8192?a=b.m.createElement():d&512?d&1024?a=document.createElement("textarea"):(a=document.createElement("input"),a.type=b.m):a=d&4096?document.createElementNS("http://www.w3.org/2000/svg",b.m):document.createElement(b.m),d&262144&&(Xa=a),b.f&&Ra(a,d,null,b.f),null!==b.I&&Pa(a,d,b.I),null!==b.G&&Qa(a,null,b.G),b.o&&(a._ev=b.o),e=b.b,null!==e)if(d&80)if(d&16)a.textContent=e;else for(d=0;d<e.length;d++)f=e[d],
f=S(a,f,c),a.insertBefore(f,null);else d&32?(f=S(a,e,c),a.insertBefore(f,null)):d&512?(c=a,"string"===typeof e?c.value=e:c.checked=e):e&&D(a,e,!!(d&4096));e=a}else d&8?(d=e=new b.m(b.f),d=b.b=d.H(),a=S(a,d,c)):d&131072?(d=b.m,(d=d(null,b.f))?(Q(a,d,b.b,c,32),a=H(b.b)):a=S(a,b.b,c)):(d&98304?d&32768?(d=b.m,b.h=d.select(null,b.f,c),b.b=d.H()):c=e=Object.assign({},c,b.f):b.b=b.m(b.f),a=S(a,b.b,c));b.h=e;return a}function T(a,b,c,d,e){d=S(a,c,d);a.insertBefore(d,b);e&1&&M(c)}
function U(a,b){return a.l===b.l&&(a.a&256)===(b.a&256)}
function Q(a,b,c,d,e){if(b===c)P(a,c,d,e);else{var f,g=c.a;if((b.a&261903)===(c.a&261903)&&b.m===c.m&&b.l===c.l)if(f=c.h=b.h,g&3)if(g&1)b.b!==c.b&&(f.nodeValue=c.b);else{b.f!==c.f&&Ra(f,g,b.f,c.f);b.I!==c.I&&Pa(f,g,c.I);b.G!==c.G&&Qa(f,b.G,c.G);if(b.o!==c.o){if(e&1){a=b.o;var h=c.o,l,n,p;if(null===a)null!==h&&Va(h);else if(null===h)Wa(a);else if("function"===typeof a)Va(h),K(a.i);else if("function"===typeof h)for(J(h.i),l=0;l<a.length;l++)(n=a[l])&&K(n.i);else{for(l=0;l<a.length&&l<h.length;)n=a[l],
p=h[l++],n!==p&&(p&&J(p.i),n&&K(n.i));for(;l<h.length;)(n=h[l++])&&J(n.i);for(;l<a.length;)(n=a[l++])&&K(n.i)}}f._ev=c.o}if(b.b!==c.b){a=f;f=b.a;b=b.b;c=c.b;var k;if(null===b)if(g&80)if(g&16)a.textContent=c;else for(k=0;k<c.length;k++)T(a,null,c[k],d,e);else g&32?T(a,null,c,d,e):g&512?"string"===typeof c?a.value=c:a.checked=c:c&&D(a,c,!!(g&4096));else if(null===c)f&144?a.textContent="":f&64?(a.textContent="",O(b,e|4)):f&32&&R(a,b,e);else if(f&144)if(g&144)g&16||!c?(d=a.firstChild)?d.nodeValue=c:a.textContent=
c:D(a,c,!!(g&4096));else if(a.textContent="",g&64)for(k=0;k<c.length;k++)T(a,null,c[k],d,e);else T(a,null,c,d,e);else if(f&64)if(g&144)g&16||!c?a.textContent=c:D(a,c,!!(g&4096)),O(b,e|4);else if(g&64)if(0===b.length)for(k=0;k<c.length;k++)T(a,null,c[k],d,e);else if(0===c.length)a.textContent="",O(b,e|4);else if(1===b.length&&1===c.length)Q(a,b[0],c[0],d,e);else{g=l=0;n=b.length-1;p=c.length-1;h=b[l];f=c[g];var m=b[n],q=c[p],r,aa;a:for(;;){for(;U(h,f);){Q(a,h,f,d,e);l++;g++;if(l>n||g>p)break a;h=b[l];
f=c[g]}for(;U(m,q);){Q(a,m,q,d,e);n--;p--;if(l>n||g>p)break a;m=b[n];q=c[p]}if(U(m,f))Q(a,m,f,d,e),a.insertBefore(H(f),H(h)),n--,g++,m=b[n],f=c[g];else if(U(h,q))Q(a,h,q,d,e),h=p+1,h=h<c.length?H(c[h]):null,a.insertBefore(H(q),h),l++,p--,h=b[l],q=c[p];else break}if(l>n)for(h=p+1,h=h<c.length?H(c[h]):null;g<=p;)T(a,h,c[g++],d,e);else if(g>p)for(;l<=n;)R(a,b[l++],e);else{var Ba=n-l+1,h=p-g+1;f=Array(h).fill(-1);var Ca=!1,y=0,L=0;if(4>=h||16>=Ba*h)for(m=l;m<=n;m++){if(r=b[m],L<h)for(q=g;q<=p;q++)if(aa=
c[q],U(r,aa)){f[q-g]=m;y>q?Ca=!0:y=q;Q(a,r,aa,d,e);L++;b[m]=null;break}}else{for(var t,m=g;m<=p;m++)r=c[m],r.a&256?(void 0===k&&(k=new Map),k.set(r.l,m)):(void 0===t&&(t=[]),t[r.l-l]=m);for(m=l;m<=n;m++)r=b[m],L<h&&(q=r.a&256?k?k.get(r.l):void 0:t?t[r.l-l]:void 0,void 0!==q&&(aa=c[q],f[q-g]=m,y>q?Ca=!0:y=q,Q(a,r,aa,d,e),L++,b[m]=null))}if(Ba===b.length&&0===L)for(a.textContent="",O(b,e|4);g<h;)T(a,null,c[g++],d,e);else{for(m=Ba-L;0<m;)r=b[l++],null!==r&&(R(a,r,e),m--);if(Ca){t=f.slice(0);k=[];k.push(0);
b=0;for(l=f.length;b<l;b++)if(-1!==f[b])if(n=k[k.length-1],f[n]<f[b])t[b]=n,k.push(b);else{n=0;for(p=k.length-1;n<p;)m=(n+p)/2|0,f[k[m]]<f[b]?n=m+1:p=m;f[b]<f[k[n]]&&(0<n&&(t[b]=k[n-1]),k[n]=b)}n=k.length;for(p=k[n-1];0<n--;)k[n]=p,p=t[p];q=k.length-1;for(m=h-1;0<=m;m--)-1===f[m]?(y=m+g,r=c[y],h=y+1,h=h<c.length?H(c[h]):null,T(a,h,r,d,e)):0>q||m!==k[q]?(y=m+g,r=c[y],h=y+1,h=h<c.length?H(c[h]):null,a.insertBefore(H(r),h)):q--}else if(L!==h)for(m=h-1;0<=m;m--)-1===f[m]&&(y=m+g,r=c[y],h=y+1,h=h<c.length?
H(c[h]):null,T(a,h,r,d,e))}}}else if(0<b.length){for(k=0;k<b.length;)if(t=b[k++],U(t,c)){Q(a,t,c,d,e);break}else R(a,t,e);if(k<b.length)for(;k<b.length;)R(a,b[k++],e);else T(a,null,c,d,e)}else T(a,null,c,d,e);else if(f&32)if(g&144)g&16||!c?a.textContent=c:D(a,c,!!(g&4096)),N(b,e|4);else if(g&64)if(0<c.length){k=0;for(t=H(b);k<c.length;)if(g=c[k++],U(b,g)){Q(a,b,g,d,e);break}else T(a,t,c[k],d,e);if(k<c.length)for(;k<c.length;)T(a,null,c[k++],d,e);else R(a,b,e)}else R(a,b,e);else Q(a,b,c,d,e);else"string"===
typeof c?a.value!==c&&(a.value=c):a.checked=c}}else g&8?(k=f,g=c.f,t=!1,k.Z(b.f,g)&&(t=!0),k.w=g,g=b.b,t||k.g&6||e&16?(c=c.b=k.H(),Q(a,g,c,d,e),k.g&=-7):(c.b=b.b,P(a,g,d,e))):(k=c.m,g&229376?(g&32768?(k=c.m,t=b.h,g=k.select(t,c.f,d),c.b=t===g?b.b:k.H(),c.h=g):g&65536&&(e&32||b.f!==c.f?(e|=32,d=c.h=Object.assign({},d,c.f)):d=c.h=b.h),Q(a,b.b,c.b,d,e)):e&16||b!==c&&(!k.Z&&b.f!==c.f||k.Z&&k.Z(b.f,c.f))?(t=b.b,c=c.b=k(c.f),Q(a,t,c,d,e)):(c.b=b.b,P(a,c.b,d,e)));else f=S(a,c,d),a.replaceChild(f,H(b)),e&
1&&(N(b,e|4),M(c))}}var V=[],Ya={},Za=!1,$a=0;function ab(){if(Za){Za=!1;for(var a=0;a<V.length;a++){var b=V[a],c=b.ka,d=b.la,e=$a|b.fa|1;if(b.Y){var f=b.ca;f?(f.constructor!==F&&(f=G("")),d?Q(c,d,f,Ya,e):(T(c,null,f,Ya,1),C&1&&(c.onclick=qa)),b.la=f):d&&(c.removeChild(H(d)),N(d,5),c=V.pop(),c!==b&&V.length&&(V[V.indexOf(b)]=c));b.ca=null;b.Y=!1}else d&&P(c,d,Ya,e|8);b.fa=0}}}function bb(a){$a=void 0===a?0:a;Za||(Za=!0,cb(),db.write(ab))}var eb=!1,fb=new Ia,db=new Ia;
function gb(){eb&&requestAnimationFrame(hb)}function cb(){if(!eb){eb=!0;var a=gb;wa||(wa=!0,C&2?Promise.resolve().then(Ea):(za^=1,ya.nodeValue=za?"1":"0"));xa.push(a)}}
function hb(){var a,b;eb=!1;var c=db;db=fb;fb=c;Ka(La);do{for(;c.a&4;)for(c.a&=-5,a=c.N,c.N=null,b=0;b<a.length;b++)a[b]();for(;c.a&3;){if(c.a&2)for(c.a&=-3,a=c.O,c.O=null,b=0;b<a.length;b++)a[b]();c.a&1&&(c.a&=-2,bb(void 0),hb())}}while(c.a&7);for(Fa&&Ka(ib);0!==(c.a&8);)for(c.a&=-9,a=c.ga,c.ga=null,b=0;b<a.length;b++)a[b]();a=Xa;Xa=null;a&&a.focus();(0<jb||0<ib.A.length)&&cb();ra++}Ga.push(function(a){a&&(0<jb||0<ib.A.length)&&cb()});var ib=new Ja,jb=0;
function kb(a,b,c,d){this.B=this.M=null;this.i=a;this.g=b;this.Ca=c;this.filter=void 0===d?-1:d}kb.prototype.cancel=function(){this.g&1||(this.g|=1,this.g&2||lb(this))};function lb(a){a.M?a.M.B=a.B:a.i.F=a.B;a.B&&(a.B.M=a.M);0===--a.i.W&&a.i.X()}function W(){this.W=0;this.F=null}W.prototype.U=function(){};W.prototype.X=function(){};W.prototype.subscribe=function(a,b,c){a=new kb(this,void 0===c?0:c,a,b);this.F&&(this.F.M=a,a.B=this.F);this.F=a;0===this.W++&&this.U();return a};
function J(a){0===a.W++&&a.U()}function K(a){0===--a.W&&a.X()}function mb(a,b,c){b.currentTarget=a.target;for(var d=0;d<a.oa.length;d++){var e=a.oa[d];if(e.g&c&&(e(b),b.a&2))break}}function nb(a,b,c){W.call(this);this.g=a;this.name=b;this.ma=c;this.ha=this.za.bind(this);this.J=!1}ha(nb,W);
nb.prototype.za=function(a){var b;if(this.F)for(var c=b=new this.ma(this,0,a,ma(a),a.timeStamp,a.type),d=this.F;d;)if(d.g|=2,d.Ca(c,void 0),d.g&=-3,d.g&1){var e=d,d=d.B;lb(e)}else d=d.B;if(!(b&&b.a&3)){d=ma(a);for(c=[];d;){var e=void 0,f=d,g=f._ev;if(g){if("function"===typeof g)g.i===this&&(e=[g]);else for(var h=0;h<g.length;h++){var l=g[h];l&&l.i===this&&(e?e.push(l):e=[l])}e&&c.push({target:f,oa:e})}d=d.parentElement}if(0<c.length)a:{b||(b=new this.ma(this,0,a,ma(a),a.timeStamp,a.type)),d=b;e=!!(this.g&
4);for(f=c.length-1;0<=f;)if(g=c[f],g.target!==d.target){if(mb(c[f--],d,1),d.a&1)break a}else break;g=c[0];if(g.target===d.target){d.a|=64;mb(g,d,3);if(d.a&1)break a;d.a&=-65;f=1}else f=0;if(e)for(d.a|=128;f<c.length&&!(mb(c[f++],d,2),d.a&1););}b&&b.a&4&&a.preventDefault()}};nb.prototype.U=function(){this.J?this.J=!1:(W.prototype.U.call(this),document.addEventListener(this.name,this.ha,Ua(this.g)))};
nb.prototype.X=function(){var a=this;this.J||(this.J=!0,va(function(){a.J&&(document.removeEventListener(a.name,a.ha,Ua(a.g)),W.prototype.X.call(a),a.J=!1)}))};function X(a,b,c,d,e,f){this.i=a;this.a=b;this.c=c;this.currentTarget=this.target=d;this.timeStamp=e;this.type=f}X.prototype.stopPropagation=function(){this.a|=1};X.prototype.stopImmediatePropagation=function(){this.a|=3};X.prototype.preventDefault=function(){this.a|=4};
v.Object.defineProperties(X.prototype,{defaultPrevented:{configurable:!0,enumerable:!0,get:function(){return!!(this.a&4)}},bubbles:{configurable:!0,enumerable:!0,get:function(){return!!(this.a&8)}},cancelable:{configurable:!0,enumerable:!0,get:function(){return!!(this.a&16)}},isTrusted:{configurable:!0,enumerable:!0,get:function(){return!!(this.a&32)}},eventPhase:{configurable:!0,enumerable:!0,get:function(){return this.a&64?2:this.a&128?3:1}}});X.prototype.CAPTURING_PHASE=1;
X.prototype.AT_TARGET=2;X.prototype.BUBBLING_PHASE=3;function ob(a){X.apply(this,arguments)}ha(ob,X);v.Object.defineProperties(ob.prototype,{detail:{configurable:!0,enumerable:!0,get:function(){return this.c.detail}},view:{configurable:!0,enumerable:!0,get:function(){return this.c.view}}});function pb(a){ob.apply(this,arguments)}ha(pb,ob);pb.prototype.getModifierState=function(a){return this.c.getModifierState(a)};
v.Object.defineProperties(pb.prototype,{altKey:{configurable:!0,enumerable:!0,get:function(){return this.c.altKey}},char:{configurable:!0,enumerable:!0,get:function(){return this.c.char}},charCode:{configurable:!0,enumerable:!0,get:function(){return"keypress"===this.c.type?oa(this.c):0}},ctrlKey:{configurable:!0,enumerable:!0,get:function(){return this.c.ctrlKey}},key:{configurable:!0,enumerable:!0,get:function(){var a;a:if(a=this.c,"keypress"===a.type)a=oa(a),a=13===a?"Enter":String.fromCharCode(a);
else{if("keydown"===a.type||"keyup"===a.type)if(a=na[a.keyCode],void 0!==a)break a;a="Unidentified"}return a}},keyCode:{configurable:!0,enumerable:!0,get:function(){switch(this.c.type){case "keydown":case "keyup":return this.c.keyCode}return 0}},locale:{configurable:!0,enumerable:!0,get:function(){return this.c.locale}},location:{configurable:!0,enumerable:!0,get:function(){return this.c.location}},metaKey:{configurable:!0,enumerable:!0,get:function(){return this.c.metaKey}},repeat:{configurable:!0,
enumerable:!0,get:function(){return this.c.repeat}},shiftKey:{configurable:!0,enumerable:!0,get:function(){return this.c.shiftKey}},which:{configurable:!0,enumerable:!0,get:function(){switch(this.c.type){case "keypress":return oa(this.c);case "keydown":case "keyup":return this.c.keyCode}return 0}},code:{configurable:!0,enumerable:!0,get:function(){return this.c.code}},qa:{configurable:!0,enumerable:!0,get:function(){return this.c.qa}},ra:{configurable:!0,enumerable:!0,get:function(){return this.c.ra}},
sa:{configurable:!0,enumerable:!0,get:function(){return this.c.sa}},ta:{configurable:!0,enumerable:!0,get:function(){return this.c.ta}},ua:{configurable:!0,enumerable:!0,get:function(){return this.c.ua}},va:{configurable:!0,enumerable:!0,get:function(){return this.c.va}}});var qb=new nb(5,"keydown",pb);function rb(a){a.i=qb;a.g=2;return a}function sb(a){this.g=0;this.w=a}sb.prototype.Z=function(a,b){return a!==b};sb.prototype.Y=function(){};var tb={x:-1,y:0},ub={x:1,y:0},vb={x:0,y:-1},wb={x:0,y:1};
function xb(a){a=void 0===a?{x:0,y:0}:a;this.body=[];this.ba=4;this.body.push(a)}xb.prototype.move=function(a){this.body.push(a);if(this.ba)return this.ba--,null;a=this.body[0];this.body=this.body.splice(1);return a};v.Object.defineProperties(xb.prototype,{head:{configurable:!0,enumerable:!0,get:function(){return this.body[this.body.length-1]}}});function yb(a,b){a=void 0===a?20:a;b=void 0===b?20:b;this.rows=a;this.cols=b;this.cells=Array(a*b).fill(0)}function Y(a,b){return a.cols*b.y+b.x}
yb.prototype.mark=function(a,b){this.cells[Y(this,a)]|=b};function zb(a,b){var c=Z.s;c.cells[Y(c,a)]&=~b}function Ab(a){var b;do b=Math.random()*a.cells.length|0;while(0!==a.cells[b]);a.cells[b]|=4}function Bb(a,b){return{x:a.x+b.x,y:a.y+b.y}}
function Cb(){sb.apply(this,[].concat(arguments instanceof Array?arguments:ia(x(arguments))));var a=this;this.Da=rb(function(b){switch(b.keyCode){case 37:b.preventDefault();a.w.K.D=tb;break;case 38:b.preventDefault();a.w.K.D=vb;break;case 39:b.preventDefault();a.w.K.D=ub;break;case 40:b.preventDefault(),a.w.K.D=wb}})}ha(Cb,sb);
Cb.prototype.H=function(){var a=this.w.K.s;return Oa(this.w.K.aa?"SnakeGame gameOver":"SnakeGame").children(Ma(Oa("Grid").w({tabIndex:0}).style({width:30*a.cols+"px",height:30*a.rows+"px"}),this.Da).autofocus(!0).children(a.cells.map(function(a){return Oa(a&1?a&2?"Cell body head":"Cell body":a&4?"Cell food":"Cell")})))};
var Db=document.getElementById("app"),Z=new function(){var a=this;this.aa=!1;this.currentTime=this.startTime=0;this.direction={x:1,y:0};this.s=new yb;this.L=new xb;this.D=null;this.L.body.forEach(function(b){a.s.mark(b,1)});this.s.mark(this.L.head,2);Ab(this.s)};
function Eb(){if(!Z.aa){if(Z.D){var a=Bb(Z.direction,Z.D);if(0!==a.x||0!==a.y)Z.direction=Z.D;Z.D=null}var a=Bb(Z.L.head,Z.direction),b=Z.s.cols,c=Z.s.rows,a={x:(a.x%b+b)%b,y:(a.y%c+c)%c};zb(Z.L.head,2);(b=Z.L.move(a))&&zb(b,1);Z.s.mark(a,2);b=Z.s;b.cells[Y(b,a)]&1?Z.aa=!0:(b=Z.s,b.cells[Y(b,a)]&4&&(Z.L.ba=3,zb(a,4),Ab(Z.s)));Z.s.mark(a,1)}a=new F(Cb.prototype.H?8:4,Cb,{K:Z},null,null);b=0;b=void 0===b?0:b;a:{for(c=0;c<V.length;c++){var d=V[c];if(d.ka===Db){c=d;break a}}c=void 0}c?(c.ca=a,c.Y=!0,
c.fa=b):(c={ka:Db,la:null,ca:a,Y:!0,fa:b},V.push(c));bb();hb();setTimeout(Eb,100)}Eb();}).call(this);

//# sourceMappingURL=bundle.js.map
