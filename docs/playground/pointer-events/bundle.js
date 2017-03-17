(function(){'use strict';var u,aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},v="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function ba(){ba=function(){};v.Symbol||(v.Symbol=ca)}var da=0;function ca(a){return"jscomp_symbol_"+(a||"")+da++}
function w(){ba();var a=v.Symbol.iterator;a||(a=v.Symbol.iterator=v.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&aa(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(this)}});w=function(){}}function ea(a){var b=0;return fa(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}function fa(a){w();a={next:a};a[v.Symbol.iterator]=function(){return this};return a}function x(a){w();var b=a[Symbol.iterator];return b?b.call(a):ea(a)}
function z(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]}function ga(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
function ha(a,b){w();a instanceof String&&(a+="");var c=0,d={next:function(){if(c<a.length){var e=c++;return{value:b(e,a[e]),done:!1}}d.next=function(){return{done:!0,value:void 0}};return d.next()}};d[Symbol.iterator]=function(){return d};return d}function A(a,b){if(b){var c=v;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&aa(c,a,{configurable:!0,writable:!0,value:b})}}
A("Array.prototype.keys",function(a){return a?a:function(){return ha(this,function(a){return a})}});
A("Promise",function(a){function b(a){this.Y=0;this.ia=void 0;this.X=[];var b=this.da();try{a(b.resolve,b.reject)}catch(h){b.reject(h)}}function c(){this.C=null}if(a)return a;c.prototype.ma=function(a){null==this.C&&(this.C=[],this.wa());this.C.push(a)};c.prototype.wa=function(){var a=this;this.na(function(){a.Aa()})};var d=v.setTimeout;c.prototype.na=function(a){d(a,0)};c.prototype.Aa=function(){for(;this.C&&this.C.length;){var a=this.C;this.C=[];for(var b=0;b<a.length;++b){var c=a[b];delete a[b];
try{c()}catch(l){this.xa(l)}}}this.C=null};c.prototype.xa=function(a){this.na(function(){throw a;})};b.prototype.da=function(){function a(a){return function(d){c||(c=!0,a.call(b,d))}}var b=this,c=!1;return{resolve:a(this.Ga),reject:a(this.ha)}};b.prototype.Ga=function(a){if(a===this)this.ha(new TypeError("A Promise cannot resolve to itself"));else if(a instanceof b)this.Ha(a);else{var c;a:switch(typeof a){case "object":c=null!=a;break a;case "function":c=!0;break a;default:c=!1}c?this.Fa(a):this.sa(a)}};
b.prototype.Fa=function(a){var b=void 0;try{b=a.then}catch(h){this.ha(h);return}"function"==typeof b?this.Ia(b,a):this.sa(a)};b.prototype.ha=function(a){this.va(2,a)};b.prototype.sa=function(a){this.va(1,a)};b.prototype.va=function(a,b){if(0!=this.Y)throw Error("Cannot settle("+a+", "+b|"): Promise already settled in state"+this.Y);this.Y=a;this.ia=b;this.Ba()};b.prototype.Ba=function(){if(null!=this.X){for(var a=this.X,b=0;b<a.length;++b)a[b].call(),a[b]=null;this.X=null}};var e=new c;b.prototype.Ha=
function(a){var b=this.da();a.$(b.resolve,b.reject)};b.prototype.Ia=function(a,b){var c=this.da();try{a.call(b,c.resolve,c.reject)}catch(l){c.reject(l)}};b.prototype.then=function(a,c){function d(a,b){return"function"==typeof a?function(b){try{e(a(b))}catch(r){g(r)}}:b}var e,g,f=new b(function(a,b){e=a;g=b});this.$(d(a,e),d(c,g));return f};b.prototype.catch=function(a){return this.then(void 0,a)};b.prototype.$=function(a,b){function c(){switch(d.Y){case 1:a(d.ia);break;case 2:b(d.ia);break;default:throw Error("Unexpected state: "+
d.Y);}}var d=this;null==this.X?e.ma(c):this.X.push(function(){e.ma(c)})};b.resolve=function(a){return a instanceof b?a:new b(function(b){b(a)})};b.reject=function(a){return new b(function(b,c){c(a)})};b.race=function(a){return new b(function(c,d){for(var e=x(a),h=e.next();!h.done;h=e.next())b.resolve(h.value).$(c,d)})};b.all=function(a){var c=x(a),d=c.next();return d.done?b.resolve([]):new b(function(a,e){function h(b){return function(c){g[b]=c;f--;0==f&&a(g)}}var g=[],f=0;do g.push(void 0),f++,b.resolve(d.value).$(h(g.length-
1),e),d=c.next();while(!d.done)})};b.$jscomp$new$AsyncExecutor=function(){return new c};return b});function B(a,b){return Object.prototype.hasOwnProperty.call(a,b)}A("Object.assign",function(a){return a?a:function(a,c){for(var b=1;b<arguments.length;b++){var e=arguments[b];if(e)for(var f in e)B(e,f)&&(a[f]=e[f])}return a}});
A("Array.prototype.fill",function(a){return a?a:function(a,c,d){var b=this.length||0;0>c&&(c=Math.max(0,b+c));if(null==d||d>b)d=b;d=Number(d);0>d&&(d=Math.max(0,b+d));for(c=Number(c||0);c<d;c++)this[c]=a;return this}});
A("WeakMap",function(a){function b(a){this.S=(f+=Math.random()+1).toString();if(a){ba();w();a=x(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}}function c(a){B(a,e)||aa(a,e,{value:{}})}function d(a){var b=Object[a];b&&(Object[a]=function(a){c(a);return b(a)})}if(function(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),c=Object.seal({}),d=new a([[b,2],[c,3]]);if(2!=d.get(b)||3!=d.get(c))return!1;d.delete(b);d.set(c,4);return!d.has(b)&&4==d.get(c)}catch(n){return!1}}())return a;
var e="$jscomp_hidden_"+Math.random().toString().substring(2);d("freeze");d("preventExtensions");d("seal");var f=0;b.prototype.set=function(a,b){c(a);if(!B(a,e))throw Error("WeakMap key fail: "+a);a[e][this.S]=b;return this};b.prototype.get=function(a){return B(a,e)?a[e][this.S]:void 0};b.prototype.has=function(a){return B(a,e)&&B(a[e],this.S)};b.prototype.delete=function(a){return B(a,e)&&B(a[e],this.S)?delete a[e][this.S]:!1};return b});
A("Map",function(a){function b(){var a={};return a.w=a.next=a.head=a}function c(a,b){var c=a.v;return fa(function(){if(c){for(;c.head!=a.v;)c=c.w;for(;c.next!=c.head;)return c=c.next,{done:!1,value:b(c)};c=null}return{done:!0,value:void 0}})}function d(a,b){var c;c=b&&typeof b;"object"==c||"function"==c?f.has(b)?c=f.get(b):(c=""+ ++g,f.set(b,c)):c="p_"+b;var d=a.R[c];if(d&&B(a.R,c))for(a=0;a<d.length;a++){var e=d[a];if(b!==b&&e.key!==e.key||b===e.key)return{id:c,list:d,index:a,l:e}}return{id:c,list:d,
index:-1,l:void 0}}function e(a){this.R={};this.v=b();this.size=0;if(a){a=x(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}if(function(){if(!a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a(x([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var d=c.entries(),e=d.next();if(e.done||e.value[0]!=b||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||"t"!=e.value[1]||!d.next().done?
!1:!0}catch(k){return!1}}())return a;ba();w();var f=new WeakMap;e.prototype.set=function(a,b){var c=d(this,a);c.list||(c.list=this.R[c.id]=[]);c.l?c.l.value=b:(c.l={next:this.v,w:this.v.w,head:this.v,key:a,value:b},c.list.push(c.l),this.v.w.next=c.l,this.v.w=c.l,this.size++);return this};e.prototype.delete=function(a){a=d(this,a);return a.l&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.R[a.id],a.l.w.next=a.l.next,a.l.next.w=a.l.w,a.l.head=null,this.size--,!0):!1};e.prototype.clear=
function(){this.R={};this.v=this.v.w=b();this.size=0};e.prototype.has=function(a){return!!d(this,a).l};e.prototype.get=function(a){return(a=d(this,a).l)&&a.value};e.prototype.entries=function(){return c(this,function(a){return[a.key,a.value]})};e.prototype.keys=function(){return c(this,function(a){return a.key})};e.prototype.values=function(){return c(this,function(a){return a.value})};e.prototype.forEach=function(a,b){for(var c=this.entries(),d;!(d=c.next()).done;)d=d.value,a.call(b,d[1],d[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});A("String.prototype.repeat",function(a){return a?a:function(a){var b;if(null==this)throw new TypeError("The 'this' value for String.prototype.repeat must not be null or undefined");b=this+"";if(0>a||1342177279<a)throw new RangeError("Invalid count value");a|=0;for(var d="";a;)if(a&1&&(d+=b),a>>>=1)b+=b;return d}});var C=0;try{var ia=Object.defineProperty({},"passive",{get:function(){C|=1}});window.addEventListener("test",null,ia)}catch(a){}
"innerHTML"in SVGElement.prototype&&(C|=4);"key"in KeyboardEvent.prototype&&(C|=8);var ka=navigator?navigator.userAgent:"",la=0;!/iPad|iPhone|iPod/.test(ka)||"MSStream"in window||(la|="standalone"in navigator?3:1);-1<ka.indexOf("Android")&&(la|=4);function ma(a){a=a.target||window;a.ya&&(a=a.ya);return 3===a.nodeType?a.parentNode:a}
function na(a,b,c){if(!c||C&4)a.innerHTML=b;else for(oa||(oa=document.createElement("div")),oa.innerHTML="<svg>"+b+"</svg>",b=oa.firstChild;b.firstChild;)a.appendChild(b.firstChild)}var oa;function pa(){}var qa=0,ra=!1,sa=[];window.addEventListener("message",ta);function ta(a){if(a.source===window&&"06526c5c-2dcc-4a4e-a86c-86f5dea6319d"===a.data){ra=!1;a=sa;sa=[];for(var b=0;b<a.length;b++)a[b]();qa++}}
function ua(a){ra||(ra=!0,window.postMessage("06526c5c-2dcc-4a4e-a86c-86f5dea6319d","*"));sa.push(a)}var va=!1,wa=[],xa,ya=0;if(!(la&2)){var Aa=new MutationObserver(za);xa=document.createTextNode("");Aa.observe(xa,{characterData:!0})}function Ba(){za();ua(pa)}function za(){for(;0<wa.length;){var a=wa;wa=[];for(var b=0;b<a.length;b++)a[b]();qa++}va=!1}var Ca=!0,Da,Ea=[];function Ha(){var a=!Da();if(Ca!==a)for(var b=0;b<Ea.length;b++)Ea[b](a)}
"undefined"!==typeof document.hidden?(Da=function(){return document.hidden},document.addEventListener("visibilitychange",Ha)):"undefined"!==typeof document.webkitHidden?(Da=function(){return document.webkitHidden},document.addEventListener("webkitvisibilitychange",Ha)):Da=function(){return!0};Ca=!Da();function Ia(){this.a=0;this.ka=this.N=this.O=null}Ia.prototype.write=function(a){this.a|=2;null===this.O&&(this.O=[]);this.O.push(a)};
Ia.prototype.read=function(a){this.a|=4;null===this.N&&(this.N=[]);this.N.push(a)};function Ja(){this.A=[]}Ja.prototype.add=function(a){this.A.push(a)};function Ka(a){for(var b=0;b<a.A.length;b++)(0,a.A[b])()&&(b===a.A.length?a.A.pop():a.A[b--]=a.A.pop())}var La=new Ja;function D(a,b,c,d,e){this.a=a;this.s=b;this.o=0;this.h=c;this.J=d;this.u=this.G=null;this.b=e;this.i=null}u=D.prototype;u.key=function(a){this.a=null===a?this.a&-257:this.a|256;this.o=a;return this};
u.className=function(a){this.J=a;return this};u.style=function(a){this.G=a;return this};u.L=function(a){this.u=a;return this};u.g=function(a){this.h=a;return this};
u.children=function(a){if("object"===typeof a){if(null!==a)if(a.constructor===Array){this.a|=64;a:for(var b=0;b<a.length;b++){var c=a[b];if("object"===typeof c){if(null===c||c.constructor===Array){a=Ma(a,b);break a}c.constructor!==D&&(c=Na(""),a[b]=c);c.a&256||(c.o=b)}else if("string"===typeof c||"number"===typeof c)c=Na(c),c.o=b,a[b]=c;else{a=Ma(a,b);break a}}}else a.constructor===D?(this.a|=32,a.a&256||(a.o=0)):(this.a|=16,a="")}else this.a|=16;this.b=a;return this};
u.value=function(a){this.b=a;return this};u.checked=function(a){this.b=a;return this};u.autofocus=function(a){a&&(this.a|=262144);return this};function Na(a){return new D(1,null,null,null,a)}function E(a,b){return new D(2,a,null,void 0===b?null:b,null)}function F(a,b){return new D(a.prototype.D?8:4,a,b,null,null)}
function Ma(a,b){for(var c=a.slice(0,b);b<a.length;b++){var d=a[b];if("object"===typeof d){if(null!==d)if(d.constructor===Array)for(var e=0;e<d.length;e++)c.push(d[e]);else d.constructor===D||(d=Na("")),d.a&256||(d.o=b),c.push(d)}else d=Na(d),d.o=b,c.push(d)}return c}function G(a){return a.a&12?G(a.b):a.i}function Oa(a,b,c){c||(c="");b&4096?a.setAttribute("class",c):a.className=c}
function Pa(a,b,c){var d,e,f;if(null===b){if(null!==c)for(f=a.style,d=Object.keys(c),a=0;a<d.length;a++)e=d[a],f[e]=c[e]}else if(null===c)for(f=a.style,d=Object.keys(b),a=0;a<d.length;a++)f[d[a]]="";else{f=a.style;var g=0;d=Object.keys(b);for(a=0;a<d.length;a++){e=d[a];var h=c[e];void 0!==h?(b[e]!==h&&(f[e]=h),g++):f[e]=""}d=Object.keys(c);for(a=0;g<d.length&&a<d.length;)e=d[a++],b.hasOwnProperty(e)||(f[e]=c[e],g++)}}
function Qa(a,b,c,d){if(void 0===d){if(!(b&4096)&&6<c.length)switch(c){case "acceptCharset":c="accept-charset";break;case "htmlFor":c="for"}a.removeAttribute(c)}else if(b&4096){if(5<c.length&&120===c.charCodeAt(0)&&(58===c.charCodeAt(3)||58===c.charCodeAt(5))){if(109===c.charCodeAt(1)&&108===c.charCodeAt(2)){a.setAttributeNS("http://www.w3.org/XML/1998/namespace",c,d);return}if(108===c.charCodeAt(1)&&105===c.charCodeAt(2)&&110===c.charCodeAt(3)&&107===c.charCodeAt(4)){a.setAttributeNS("http://www.w3.org/1999/xlink",
c,d);return}}a.setAttribute(c,d)}else 5<c.length&&45===c.charCodeAt(4)?a.setAttribute(c,d):a[c]=d}
function Ra(a,b,c,d){var e,f,g;if(null===c){if(null!==d)for(f=Object.keys(d),e=0;e<f.length;e++)g=f[e],Qa(a,b,g,d[g])}else if(null===d)for(f=Object.keys(c),e=0;e<f.length;e++)Qa(a,b,f[e]);else{var h=0;f=Object.keys(c);for(e=0;e<f.length;e++){g=f[e];var l=d[g];void 0===l?Qa(a,b,g):(c[g]!==l&&Qa(a,b,g,l),h++)}f=Object.keys(d);for(e=0;h<f.length&&e<f.length;)g=f[e++],c.hasOwnProperty(g)||(Qa(a,b,g,d[g]),h++)}}var Sa=C&1?{capture:!0,passive:!0}:!0,Ta=C&1?{passive:!0}:!1;
function Ua(a){return a&2?a&1?Sa:Ta:a&1?!0:!1}function Va(a){if("function"===typeof a)Wa(a.j);else for(var b=0;b<a.length;b++){var c=a[b];c&&Wa(c.j)}}function Xa(a){if("function"===typeof a)H(a.j);else for(var b=0;b<a.length;b++){var c=a[b];c&&H(c.j)}}var Ya;function Za(a){var b=a.a;if(b&2){if(b&96){var c=a.b;if(b&64)for(b=0;b<c.length;b++)Za(c[b]);else Za(c)}a.u&&Va(a.u)}else b&12&&(b&8&&(c=a.i,c.f|=1,c.oa()),Za(a.b))}
function I(a,b){var c=a.a;if(c&2){if(c&96){var d=a.b;c&64?$a(d,b):I(d,b)}a.u&&Xa(a.u)}else c&12&&(c&131072&&b&4&&a.s(a.b,a.h)?b&1&&I(a.b,b&-5):(I(a.b,b),c&8&&b&1&&(a=a.i,a.f&=-2)))}function $a(a,b){for(var c=0;c<a.length;c++)I(a[c],b)}
function J(a,b,c,d){var e=b.a;if(e&96)if(a=b.i,b=b.b,e&64)for(e=0;e<b.length;e++)J(a,b[e],c,d);else J(a,b,c,d);else if(e&12)if(e&8){var e=b.i,f=b.b;e.f&6||d&16?(b=b.b=e.D(),K(a,f,b,c,d),e.f&=-7):J(a,f,c,d)}else if(e&32768){var e=b.s,f=b.i,g=e.select(f,b.h,c),h=b.b;b.b=f===g?b.b:e.D(g.ua);b.i=g;K(a,h,b.b,c,d)}else e&65536&&(d&32&&(b.i=Object.assign({},c,b.h)),c=b.i),J(a,b.b,c,d)}function L(a,b,c){a.removeChild(G(b));I(b,c|4)}
function M(a,b,c){var d=b.a,e=null,f;if(d&3){if(d&1)a=document.createTextNode(b.b);else if(d&8192?a=b.s.createElement():d&512?d&1024?a=document.createElement("textarea"):(a=document.createElement("input"),a.type=b.s):a=d&4096?document.createElementNS("http://www.w3.org/2000/svg",b.s):document.createElement(b.s),d&262144&&(Ya=a),b.h&&Ra(a,d,null,b.h),null!==b.J&&Oa(a,d,b.J),null!==b.G&&Pa(a,null,b.G),b.u&&(a._ev=b.u),e=b.b,null!==e)if(d&80)if(d&16)a.textContent=e;else for(d=0;d<e.length;d++)f=e[d],
f=M(a,f,c),a.insertBefore(f,null);else d&32?(f=M(a,e,c),a.insertBefore(f,null)):d&512?(c=a,"string"===typeof e?c.value=e:c.checked=e):e&&na(a,e,!!(d&4096));e=a}else d&8?(d=e=new b.s(b.h),d=b.b=d.D(),a=M(a,d,c)):d&131072?(d=b.s,(d=d(null,b.h))?(K(a,d,b.b,c,32),a=G(b.b)):a=M(a,b.b,c)):(d&98304?d&32768?(d=b.s,f=b.i=d.select(null,b.h,c),b.b=d.D(f.ua)):c=e=Object.assign({},c,b.h):b.b=b.s(b.h),a=M(a,b.b,c));b.i=e;return a}function N(a,b,c,d,e){d=M(a,c,d);a.insertBefore(d,b);e&1&&Za(c)}
function O(a,b){return a.o===b.o&&(a.a&256)===(b.a&256)}
function K(a,b,c,d,e){if(b===c)J(a,c,d,e);else{var f,g=c.a;if((b.a&261903)===(c.a&261903)&&b.s===c.s&&b.o===c.o)if(f=c.i=b.i,g&3)if(g&1)b.b!==c.b&&(f.nodeValue=c.b);else{b.h!==c.h&&Ra(f,g,b.h,c.h);b.J!==c.J&&Oa(f,g,c.J);b.G!==c.G&&Pa(f,b.G,c.G);if(b.u!==c.u){if(e&1){a=b.u;var h=c.u,l,n,p;if(null===a)null!==h&&Va(h);else if(null===h)Xa(a);else if("function"===typeof a)Va(h),H(a.j);else if("function"===typeof h)for(Wa(h.j),l=0;l<a.length;l++)(n=a[l])&&H(n.j);else{for(l=0;l<a.length&&l<h.length;)n=a[l],
p=h[l++],n!==p&&(p&&Wa(p.j),n&&H(n.j));for(;l<h.length;)(n=h[l++])&&Wa(n.j);for(;l<a.length;)(n=a[l++])&&H(n.j)}}f._ev=c.u}if(b.b!==c.b){a=f;f=b.a;b=b.b;c=c.b;var k;if(null===b)if(g&80)if(g&16)a.textContent=c;else for(k=0;k<c.length;k++)N(a,null,c[k],d,e);else g&32?N(a,null,c,d,e):g&512?"string"===typeof c?a.value=c:a.checked=c:c&&na(a,c,!!(g&4096));else if(null===c)f&144?a.textContent="":f&64?(a.textContent="",$a(b,e|4)):f&32&&L(a,b,e);else if(f&144)if(g&144)g&16||!c?(d=a.firstChild)?d.nodeValue=
c:a.textContent=c:na(a,c,!!(g&4096));else if(a.textContent="",g&64)for(k=0;k<c.length;k++)N(a,null,c[k],d,e);else N(a,null,c,d,e);else if(f&64)if(g&144)g&16||!c?a.textContent=c:na(a,c,!!(g&4096)),$a(b,e|4);else if(g&64)if(0===b.length)for(k=0;k<c.length;k++)N(a,null,c[k],d,e);else if(0===c.length)a.textContent="",$a(b,e|4);else if(1===b.length&&1===c.length)K(a,b[0],c[0],d,e);else{g=l=0;n=b.length-1;p=c.length-1;h=b[l];f=c[g];var m=b[n],q=c[p],r,ja;a:for(;;){for(;O(h,f);){K(a,h,f,d,e);l++;g++;if(l>
n||g>p)break a;h=b[l];f=c[g]}for(;O(m,q);){K(a,m,q,d,e);n--;p--;if(l>n||g>p)break a;m=b[n];q=c[p]}if(O(m,f))K(a,m,f,d,e),a.insertBefore(G(f),G(h)),n--,g++,m=b[n],f=c[g];else if(O(h,q))K(a,h,q,d,e),h=p+1,h=h<c.length?G(c[h]):null,a.insertBefore(G(q),h),l++,p--,h=b[l],q=c[p];else break}if(l>n)for(h=p+1,h=h<c.length?G(c[h]):null;g<=p;)N(a,h,c[g++],d,e);else if(g>p)for(;l<=n;)L(a,b[l++],e);else{var Fa=n-l+1,h=p-g+1;f=Array(h).fill(-1);var Ga=!1,y=0,S=0;if(4>=h||16>=Fa*h)for(m=l;m<=n;m++){if(r=b[m],S<
h)for(q=g;q<=p;q++)if(ja=c[q],O(r,ja)){f[q-g]=m;y>q?Ga=!0:y=q;K(a,r,ja,d,e);S++;b[m]=null;break}}else{for(var t,m=g;m<=p;m++)r=c[m],r.a&256?(void 0===k&&(k=new Map),k.set(r.o,m)):(void 0===t&&(t=[]),t[r.o-l]=m);for(m=l;m<=n;m++)r=b[m],S<h&&(q=r.a&256?k?k.get(r.o):void 0:t?t[r.o-l]:void 0,void 0!==q&&(ja=c[q],f[q-g]=m,y>q?Ga=!0:y=q,K(a,r,ja,d,e),S++,b[m]=null))}if(Fa===b.length&&0===S)for(a.textContent="",$a(b,e|4);g<h;)N(a,null,c[g++],d,e);else{for(m=Fa-S;0<m;)r=b[l++],null!==r&&(L(a,r,e),m--);if(Ga){t=
f.slice(0);k=[];k.push(0);b=0;for(l=f.length;b<l;b++)if(-1!==f[b])if(n=k[k.length-1],f[n]<f[b])t[b]=n,k.push(b);else{n=0;for(p=k.length-1;n<p;)m=(n+p)/2|0,f[k[m]]<f[b]?n=m+1:p=m;f[b]<f[k[n]]&&(0<n&&(t[b]=k[n-1]),k[n]=b)}n=k.length;for(p=k[n-1];0<n--;)k[n]=p,p=t[p];q=k.length-1;for(m=h-1;0<=m;m--)-1===f[m]?(y=m+g,r=c[y],h=y+1,h=h<c.length?G(c[h]):null,N(a,h,r,d,e)):0>q||m!==k[q]?(y=m+g,r=c[y],h=y+1,h=h<c.length?G(c[h]):null,a.insertBefore(G(r),h)):q--}else if(S!==h)for(m=h-1;0<=m;m--)-1===f[m]&&(y=
m+g,r=c[y],h=y+1,h=h<c.length?G(c[h]):null,N(a,h,r,d,e))}}}else if(0<b.length){for(k=0;k<b.length;)if(t=b[k++],O(t,c)){K(a,t,c,d,e);break}else L(a,t,e);if(k<b.length)for(;k<b.length;)L(a,b[k++],e);else N(a,null,c,d,e)}else N(a,null,c,d,e);else if(f&32)if(g&144)g&16||!c?a.textContent=c:na(a,c,!!(g&4096)),I(b,e|4);else if(g&64)if(0<c.length){k=0;for(t=G(b);k<c.length;)if(g=c[k++],O(b,g)){K(a,b,g,d,e);break}else N(a,t,c[k],d,e);if(k<c.length)for(;k<c.length;)N(a,null,c[k++],d,e);else L(a,b,e)}else L(a,
b,e);else K(a,b,c,d,e);else"string"===typeof c?a.value!==c&&(a.value=c):a.checked=c}}else g&8?(k=f,g=c.h,t=!1,k.ca(b.h,g)&&(t=!0),k.g=g,g=b.b,t||k.f&6||e&16?(c=c.b=k.D(),K(a,g,c,d,e),k.f&=-7):(c.b=b.b,J(a,g,d,e))):(k=c.s,g&229376?(g&32768?(k=c.s,t=b.i,g=k.select(t,c.h,d),c.b=t===g?b.b:k.D(g.ua),c.i=g):g&65536&&(e&32||b.h!==c.h?(e|=32,d=c.i=Object.assign({},d,c.h)):d=c.i=b.i),K(a,b.b,c.b,d,e)):e&16||b!==c&&(!k.ca&&b.h!==c.h||k.ca&&k.ca(b.h,c.h))?(t=b.b,c=c.b=k(c.h),K(a,t,c,d,e)):(c.b=b.b,J(a,c.b,d,
e)));else f=M(a,c,d),a.replaceChild(f,G(b)),e&1&&(I(b,e|4),Za(c))}}var P=[],ab={},bb=!1,cb=0;function db(){if(bb){bb=!1;for(var a=0;a<P.length;a++){var b=P[a],c=b.pa,d=b.qa,e=cb|b.ja|1;if(b.T){var f=b.ea;f?(f.constructor!==D&&(f=Na("")),d?K(c,d,f,ab,e):(N(c,null,f,ab,1),la&1&&(c.onclick=pa)),b.qa=f):d&&(c.removeChild(G(d)),I(d,5),c=P.pop(),c!==b&&P.length&&(P[P.indexOf(b)]=c));b.ea=null;b.T=!1}else d&&J(c,d,ab,e|8);b.ja=0}}}function eb(a){cb=void 0===a?0:a;bb||(bb=!0,fb().write(db))}
var gb=!1,hb=!1,ib=new Ia,jb=new Ia;function kb(){gb&&requestAnimationFrame(lb)}function mb(){if(!gb){gb=!0;var a=kb;va||(va=!0,la&2?Promise.resolve().then(Ba):(ya^=1,xa.nodeValue=ya?"1":"0"));wa.push(a)}}
function lb(){var a,b;gb=!1;hb=!0;var c=jb;jb=ib;ib=c;Ka(La);do{for(;c.a&4;)for(c.a&=-5,a=c.N,c.N=null,b=0;b<a.length;b++)a[b]();for(;c.a&3;){if(c.a&2)for(c.a&=-3,a=c.O,c.O=null,b=0;b<a.length;b++)a[b]();c.a&1&&(c.a&=-2,eb(void 0),lb())}}while(c.a&7);hb=!1;for(Ca&&Ka(nb);0!==(c.a&8);)for(c.a&=-9,a=c.ka,c.ka=null,b=0;b<a.length;b++)a[b]();a=Ya;Ya=null;a&&a.focus();(0<ob||0<nb.A.length)&&mb();qa++}function fb(){mb();return jb}Ea.push(function(a){a&&(0<ob||0<nb.A.length)&&mb()});var nb=new Ja,ob=0;
function pb(a,b,c,d){this.B=this.M=null;this.j=a;this.f=b;this.Ca=c;this.filter=void 0===d?-1:d}pb.prototype.cancel=function(){this.f&1||(this.f|=1,this.f&2||qb(this))};function qb(a){a.M?a.M.B=a.B:a.j.F=a.B;a.B&&(a.B.M=a.M);0===--a.j.aa&&a.j.ba()}function Q(){this.aa=0;this.F=null}Q.prototype.Z=function(){};Q.prototype.ba=function(){};Q.prototype.subscribe=function(a,b,c){a=new pb(this,void 0===c?0:c,a,b);this.F&&(this.F.M=a,a.B=this.F);this.F=a;0===this.aa++&&this.Z();return a};
function Wa(a){0===a.aa++&&a.Z()}function H(a){0===--a.aa&&a.ba()}function rb(a,b,c){b.currentTarget=a.target;for(var d=0;d<a.ta.length;d++){var e=a.ta[d];if(e.f&c&&(e(b),b.a&2))break}}function R(a,b,c){Q.call(this);this.f=a;this.name=b;this.ra=c;this.la=this.za.bind(this);this.K=!1}z(R,Q);
R.prototype.za=function(a){var b;if(this.F)for(var c=b=new this.ra(this,0,a,ma(a),a.timeStamp,a.type),d=this.F;d;)if(d.f|=2,d.Ca(c,void 0),d.f&=-3,d.f&1){var e=d,d=d.B;qb(e)}else d=d.B;if(!(b&&b.a&3)){d=ma(a);for(c=[];d;){var e=void 0,f=d,g=f._ev;if(g){if("function"===typeof g)g.j===this&&(e=[g]);else for(var h=0;h<g.length;h++){var l=g[h];l&&l.j===this&&(e?e.push(l):e=[l])}e&&c.push({target:f,ta:e})}d=d.parentElement}if(0<c.length)a:{b||(b=new this.ra(this,0,a,ma(a),a.timeStamp,a.type)),d=b;e=!!(this.f&
4);for(f=c.length-1;0<=f;)if(g=c[f],g.target!==d.target){if(rb(c[f--],d,1),d.a&1)break a}else break;g=c[0];if(g.target===d.target){d.a|=64;rb(g,d,3);if(d.a&1)break a;d.a&=-65;f=1}else f=0;if(e)for(d.a|=128;f<c.length&&!(rb(c[f++],d,2),d.a&1););}b&&b.a&4&&a.preventDefault()}};R.prototype.Z=function(){this.K?this.K=!1:(Q.prototype.Z.call(this),document.addEventListener(this.name,this.la,Ua(this.f)))};
R.prototype.ba=function(){var a=this;this.K||(this.K=!0,ua(function(){a.K&&(document.removeEventListener(a.name,a.la,Ua(a.f)),Q.prototype.ba.call(a),a.K=!1)}))};function T(a,b,c,d,e,f){this.j=a;this.a=b;this.c=c;this.currentTarget=this.target=d;this.timeStamp=e;this.type=f}T.prototype.stopPropagation=function(){this.a|=1};T.prototype.stopImmediatePropagation=function(){this.a|=3};T.prototype.preventDefault=function(){this.a|=4};
v.Object.defineProperties(T.prototype,{defaultPrevented:{configurable:!0,enumerable:!0,get:function(){return!!(this.a&4)}},bubbles:{configurable:!0,enumerable:!0,get:function(){return!!(this.a&8)}},cancelable:{configurable:!0,enumerable:!0,get:function(){return!!(this.a&16)}},isTrusted:{configurable:!0,enumerable:!0,get:function(){return!!(this.a&32)}},eventPhase:{configurable:!0,enumerable:!0,get:function(){return this.a&64?2:this.a&128?3:1}}});T.prototype.CAPTURING_PHASE=1;
T.prototype.AT_TARGET=2;T.prototype.BUBBLING_PHASE=3;function U(a){T.apply(this,arguments)}z(U,T);v.Object.defineProperties(U.prototype,{detail:{configurable:!0,enumerable:!0,get:function(){return this.c.detail}},view:{configurable:!0,enumerable:!0,get:function(){return this.c.view}}});function sb(a){U.apply(this,arguments)}z(sb,U);sb.prototype.getModifierState=function(a){return this.c.getModifierState(a)};
v.Object.defineProperties(sb.prototype,{altKey:{configurable:!0,enumerable:!0,get:function(){return this.c.altKey}},button:{configurable:!0,enumerable:!0,get:function(){return this.c.button}},buttons:{configurable:!0,enumerable:!0,get:function(){return this.c.buttons}},clientX:{configurable:!0,enumerable:!0,get:function(){return this.c.clientX}},clientY:{configurable:!0,enumerable:!0,get:function(){return this.c.clientY}},ctrlKey:{configurable:!0,enumerable:!0,get:function(){return this.c.ctrlKey}},
fromElement:{configurable:!0,enumerable:!0,get:function(){return this.c.fromElement}},layerX:{configurable:!0,enumerable:!0,get:function(){return this.c.layerX}},layerY:{configurable:!0,enumerable:!0,get:function(){return this.c.layerY}},metaKey:{configurable:!0,enumerable:!0,get:function(){return this.c.metaKey}},Da:{configurable:!0,enumerable:!0,get:function(){return this.c.Da}},Ea:{configurable:!0,enumerable:!0,get:function(){return this.c.Ea}},offsetX:{configurable:!0,enumerable:!0,get:function(){return this.c.offsetX}},
offsetY:{configurable:!0,enumerable:!0,get:function(){return this.c.offsetY}},pageX:{configurable:!0,enumerable:!0,get:function(){return this.c.pageX}},pageY:{configurable:!0,enumerable:!0,get:function(){return this.c.pageY}},relatedTarget:{configurable:!0,enumerable:!0,get:function(){return this.c.relatedTarget}},screenX:{configurable:!0,enumerable:!0,get:function(){return this.c.screenX}},screenY:{configurable:!0,enumerable:!0,get:function(){return this.c.screenY}},shiftKey:{configurable:!0,enumerable:!0,
get:function(){return this.c.shiftKey}},toElement:{configurable:!0,enumerable:!0,get:function(){return this.c.toElement}},which:{configurable:!0,enumerable:!0,get:function(){return this.c.which}},x:{configurable:!0,enumerable:!0,get:function(){return this.c.x}},y:{configurable:!0,enumerable:!0,get:function(){return this.c.y}}});function tb(a){U.apply(this,arguments)}z(tb,U);
v.Object.defineProperties(tb.prototype,{altKey:{configurable:!0,enumerable:!0,get:function(){return this.c.altKey}},charCode:{configurable:!0,enumerable:!0,get:function(){return this.c.charCode}},changedTouches:{configurable:!0,enumerable:!0,get:function(){return this.c.changedTouches}},ctrlKey:{configurable:!0,enumerable:!0,get:function(){return this.c.ctrlKey}},keyCode:{configurable:!0,enumerable:!0,get:function(){return this.c.keyCode}},metaKey:{configurable:!0,enumerable:!0,get:function(){return this.c.metaKey}},
shiftKey:{configurable:!0,enumerable:!0,get:function(){return this.c.shiftKey}},targetTouches:{configurable:!0,enumerable:!0,get:function(){return this.c.targetTouches}},touches:{configurable:!0,enumerable:!0,get:function(){return this.c.touches}},which:{configurable:!0,enumerable:!0,get:function(){return this.c.which}}});function ub(a,b,c){b.j=a;b.f=c?1:2;return b}
var vb=new R(5,"click",sb),wb=new R(1,"mouseenter",sb),xb=new R(1,"mouseleave",sb),yb=new R(7,"touchend",tb),zb=new R(7,"touchstart",tb);function Ab(a,b){return ub(vb,a,void 0===b?!1:b)}function Bb(a,b){return ub(wb,a,void 0===b?!1:b)}function Cb(a,b){return ub(xb,a,void 0===b?!1:b)}function Db(a,b){return ub(yb,a,void 0===b?!1:b)}function Eb(a,b){return ub(zb,a,void 0===b?!1:b)}function V(a){this.f=0;this.g=a}V.prototype.ca=function(a,b){return a!==b};V.prototype.oa=function(){};V.prototype.T=function(){};
function W(a){a.f|=2;a.T();a.f&1&&(a=hb?ib:fb(),a.a|=1)}
function X(){V.apply(this,[].concat(arguments instanceof Array?arguments:ga(x(arguments))));var a=this;this.P=0;this.I=this.H=!1;this.root=null;this.U=function(b){a.P++;W(a);a.g.stopPropagation&&b.stopPropagation()};this.V=function(b){a.H=!0;W(a);a.g.stopPropagation&&b.stopPropagation()};this.W=function(b){a.H=!1;W(a);a.g.stopPropagation&&b.stopPropagation()};this.ga=function(b){a.I=!0;W(a);a.g.stopPropagation&&b.stopPropagation()};this.fa=function(b){a.I=!1;W(a);a.g.stopPropagation&&b.stopPropagation()};
this.L=this.g.m?{click:this.U,mouseenter:this.V,mouseleave:this.W,touchstart:this.ga,touchend:this.fa}:{click:this.U,mouseenter:this.V,mouseleave:this.W}}z(X,V);X.prototype.D=function(){var a=this.g.depth;return this.root=E("div","Box"+(this.H?" entered":"")+(this.I?" touched":"")).children([E("div","ClickCounter").children("Clicks: "+this.P),0<a?F(X,{depth:a-1,m:this.g.m,stopPropagation:this.g.stopPropagation,capture:this.g.capture}):null])};
X.prototype.oa=function(){for(var a=G(this.root),b=Object.keys(this.L),c=0;c<b.length;c++){var d=b[c];a.addEventListener(d,this.L[d],this.g.capture)}};
function Y(){V.apply(this,[].concat(arguments instanceof Array?arguments:ga(x(arguments))));var a=this;this.P=0;this.I=this.H=!1;this.U=Ab(function(b){a.P++;W(a);a.g.stopPropagation&&b.stopPropagation()},this.g.capture);this.V=Bb(function(b){a.H=!0;W(a);a.g.stopPropagation&&b.stopPropagation()},this.g.capture);this.W=Cb(function(b){a.H=!1;W(a);a.g.stopPropagation&&b.stopPropagation()},this.g.capture);this.ga=Eb(function(b){a.I=!0;W(a);a.g.stopPropagation&&b.stopPropagation()},this.g.capture);this.fa=
Db(function(b){a.I=!1;W(a);a.g.stopPropagation&&b.stopPropagation()},this.g.capture);this.L=this.g.m?[this.U,this.V,this.W,this.ga,this.fa]:[this.U,this.V,this.W]}z(Y,V);Y.prototype.D=function(){var a=this.g.depth;return E("div","Box"+(this.H?" entered":"")+(this.I?" touched":"")).L(this.L).children([E("div","ClickCounter").children("Clicks: "+this.P),0<a?F(Y,{depth:a-1,m:this.g.m,stopPropagation:this.g.stopPropagation,capture:this.g.capture}):null])};
var Fb=E("div").children([E("h1").children("Native Events:"),E("h2").children("Touch disabled:"),F(X,{depth:3,m:!1,stopPropagation:!1,capture:!1}),E("h2").children("Touch enabled:"),F(X,{depth:3,m:!0,stopPropagation:!1,capture:!1}),E("h2").children("Touch enabled / Capture:"),F(X,{depth:3,m:!0,stopPropagation:!1,capture:!0}),E("h2").children("Touch enabled / Stop propagation:"),F(X,{depth:3,m:!0,stopPropagation:!0,capture:!1}),E("h2").children("Touch enabled / Stop propagation / Capture:"),F(X,{depth:3,
m:!0,stopPropagation:!0,capture:!0}),E("h1").children("Synthetic Events:"),E("h2").children("Touch disabled:"),F(Y,{depth:3,m:!1,stopPropagation:!1,capture:!1}),E("h2").children("Touch enabled:"),F(Y,{depth:3,m:!0,stopPropagation:!1,capture:!1}),E("h2").children("Touch enabled / Capture:"),F(Y,{depth:3,m:!0,stopPropagation:!1,capture:!0}),E("h2").children("Touch enabled / Stop propagation:"),F(Y,{depth:3,m:!0,stopPropagation:!0,capture:!1}),E("h2").children("Touch enabled / Stop propagation / Capture:"),
F(Y,{depth:3,m:!0,stopPropagation:!0,capture:!0})]),Gb=document.getElementById("app"),Hb=0,Hb=void 0===Hb?0:Hb,Z;a:{for(var Ib=0;Ib<P.length;Ib++){var Jb=P[Ib];if(Jb.pa===Gb){Z=Jb;break a}}Z=void 0}Z?(Z.ea=Fb,Z.T=!0,Z.ja=Hb):(Z={pa:Gb,qa:null,ea:Fb,T:!0,ja:Hb},P.push(Z));eb();lb();}).call(this);

//# sourceMappingURL=bundle.js.map
