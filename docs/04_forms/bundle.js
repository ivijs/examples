(function(){'use strict';var t;function u(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]}
var w="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};function ba(){ba=function(){};w.Symbol||(w.Symbol=ca)}var da=0;function ca(a){return"jscomp_symbol_"+(a||"")+da++}
function x(){ba();var a=w.Symbol.iterator;a||(a=w.Symbol.iterator=w.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&aa(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ga(this)}});x=function(){}}function ga(a){var b=0;return ha(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}function ha(a){x();a={next:a};a[w.Symbol.iterator]=function(){return this};return a}function ia(a){x();var b=a[Symbol.iterator];return b?b.call(a):ga(a)}
function ja(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}var y=0;try{var ka=Object.defineProperty({},"passive",{get:function(){y|=1}});window.addEventListener("test",null,ka)}catch(a){}var la=0;/iPad|iPhone|iPod/.test(navigator?navigator.userAgent:"")&&!window.ba&&(la|=1);function ma(){}function z(a,b,c,d,e){this.a=a;this.l=b;this.g=null;this.h=c;this.s=d;this.j=this.m=null;this.c=e;this.H=this.f=null}t=z.prototype;t.key=function(a){this.g=a;return this};
t.className=function(a){this.s=a;return this};t.style=function(a){this.m=a;return this};t.P=function(a){this.h=a;return this};t.children=function(a){if(Array.isArray(a)){this.a|=64;a:for(var b=0;b<a.length;b++){var c=a[b];if(null===c||Array.isArray(c)){c=a.slice(0,b);na(a,c,b);a=c;break a}"object"!==typeof c&&(a[b]=A(c))}}else this.a="object"===typeof a?this.a|32:this.a|16;this.c=a;return this};t.value=function(a){this.c=a;return this};t.checked=function(a){this.c=a;return this};
function A(a){return new z(1,null,null,null,a)}function B(a){return new z(2,a,null,null,null)}function oa(){var a=D;return new z(a.prototype.R?8:4,a,{O:pa},null,null)}function E(a){var b=a.a,c=a.c;if(null!==c&&b&64)for(var b=Array(c.length),d=0;0>d;d++)b[d]=E(c[d]);c=new z(a.a,a.l,a.h,a.s,a.a&12?null:a.c);c.g=a.g;c.j=a.j;c.m=a.m;return c}function na(a,b,c){for(;c<a.length;c++){var d=a[c];null!==d&&(Array.isArray(d)?na(d,b,0):b.push("object"===typeof d?d:A(d)))}}
function qa(a,b){this.data=a;this.from=b}qa.prototype.get=function(a){var b=this,c;if("string"!==typeof a){for(var d=Object.keys(a),e=d.length;0<e&&b;){if(b.data)for(var f=0;f<d.length;f++){var g=d[f];if(g&&(c=b.data[g],void 0!==c)){a[g]=b.data[g];d[f]=null;e--;break}}b=b.from}return a}for(;b;){if(b.data&&(c=b.data[a],void 0!==c))return c;b=b.from}};var ra=new qa(void 0);function sa(a,b,c){c||(c="");b&4096?a.setAttribute("class",c):a.className=c}
function ta(a,b,c){var d,e,f;if(null===b){if(null!==c)if(f=a.style,"string"===typeof c)f.cssText=c;else for(d=Object.keys(c),a=0;a<d.length;a++)e=d[a],f[e]=c[e]}else if(null===c)if(f=a.style,"string"===typeof b)f.cssText="";else for(d=Object.keys(b),a=0;a<d.length;a++)f[d[a]]=null;else if(f=a.style,"string"===typeof c)f.cssText=c;else if("string"===typeof b)for(f.cssText="",d=Object.keys(c),a=0;a<d.length;a++)e=d[a],f[e]=c[e];else{var g=0;d=Object.keys(b);for(a=0;a<d.length;a++){e=d[a];var h=c[e];
void 0!==h?(b[e]!==h&&(f[e]=h),g++):f[e]=null}d=Object.keys(c);for(a=0;g<d.length&&a<d.length;)e=d[a++],b.hasOwnProperty(e)||(f[e]=c[e],g++)}}
function F(a,b,c,d){if(b&2048&&"volume"===c)a.volume!==d&&(a.volume=void 0===d?null:d);else if(void 0===d)a.removeAttribute(c);else{if(5<c.length)if(120===c.charCodeAt(0)&&(58===c.charCodeAt(3)||58===c.charCodeAt(5))){if(109===c.charCodeAt(1)&&108===c.charCodeAt(2)){a.setAttributeNS("http://www.w3.org/XML/1998/namespace",c,d);return}if(108===c.charCodeAt(1)&&105===c.charCodeAt(2)&&110===c.charCodeAt(3)&&107===c.charCodeAt(4)){a.setAttributeNS("http://www.w3.org/1999/xlink",c,d);return}}else if(45===
c.charCodeAt(4)){a.setAttribute(c,d);return}a[c]=d}}function ua(a,b,c,d){var e,f,g;if(null===c){if(null!==d)for(f=Object.keys(d),e=0;e<f.length;e++)g=f[e],F(a,b,g,d[g])}else if(null===d)for(f=Object.keys(c),e=0;e<f.length;e++)F(a,b,f[e]);else{var h=0;f=Object.keys(c);for(e=0;e<f.length;e++){g=f[e];var n=d[g];void 0===n?F(a,b,g):(c[g]!==n&&F(a,b,g,n),h++)}f=Object.keys(d);for(e=0;h<f.length&&e<f.length;)g=f[e++],c.hasOwnProperty(g)||(F(a,b,g,d[g]),h++)}}
function va(a){a=a.target||window;a.Y&&(a=a.Y);return 3===a.nodeType?a.parentNode:a}var wa=y&1?{capture:!0,passive:!0}:!0,xa=y&1?{passive:!0}:!1;function ya(a){return a&2?a&1?wa:xa:a&1?!0:!1}
function G(a,b,c){var d,e,f;if(null===b){if(null!==c)for(e=Object.keys(c),d=0;d<e.length;d++)Aa(c[e[d]].o)}else if(null===c)for(e=Object.keys(b),d=0;d<e.length;d++)Ba(b[e[d]].o);else{var g=0;e=Object.keys(b);for(d=0;d<e.length;d++){f=e[d];var h=b[f];f=c[f];void 0!==f?(h!==f&&(Aa(f.o),Ba(h.o)),g++):Ba(h.o)}e=Object.keys(c);for(d=0;g<e.length&&d<e.length;)f=e[d++],b.hasOwnProperty(f)||(Aa(c[f].o),g++)}a._ev=null===c?void 0:c}
function H(a){var b=a.a;if(b&12)if(b&8){var c=a.c;c.b|=8;H(c.root)}else H(a.c);else if(!(b&2560)&&(c=a.c,null!==c&&b&96))if(b&64)for(var d=0;d<c.length;d++)H(c[d]);else H(c);a.H&&a.H(b&12?a.c:a.f)}function I(a){var b=a.a;if(b&12)if(b&8){var c=a.c;I(c.root);c.b&=-265}else I(a.c);else if(b&2){if(!(b&2560)&&(c=a.c,null!==c&&b&96))if(b&64)for(b=0;b<c.length;b++)I(c[b]);else I(c);a.j&&G(a.f,a.j,null)}a.H&&a.H(null)}function J(a){for(var b=0;b<a.length;b++)I(a[b])}
function K(a,b,c,d){var e=b.a;if(e&12)e&8?(a=b.c,a.C!==c&&(a.b|=4,a.C=c),L(a)):2>b.l.length?b.c&&K(a,b.c,c,d):Ca(a,b.c,b.c,c,d);else if(!(e&2560)&&(b=b.c,null!==b&&e&96))if(e&64)for(e=0;e<b.length;e++)K(a,b[e],c,d);else K(a,b,c,d)}function M(a,b){a.removeChild(b.f);I(b)}function Da(a){a.b&=-193;a.b|=(a.b&64)<<1;a.B=a.C}function Ea(a){a.b&=-49;var b=a.root=a.R()||A("");a.b|=(a.b&16)<<1;return b}
function L(a){var b=a.b,c=a.M;if(b&8&&b&7){var d=a.root;b&4&&Da(a);b&35?(b=a.L,c=Ea(a),c=a.M=O(b,d,c,a.B),a.b&=-1032):d&&K(a.L,d,a.B,a)}return c}function Ca(a,b,c,d,e){var f=c.l;b=b.c;f=c.c=f(c.h,d)||A("");a=O(a,b,f,d,e);return c.f=a}
function P(a,b,c,d){b.f&&(b=E(b));var e=b.a;if(e&3)if(e&1)a=document.createTextNode(b.c);else{e&512?e&1024?a=document.createElement("textarea"):(a=document.createElement("input"),a.type=b.l):a=e&4096?document.createElementNS("http://www.w3.org/2000/svg",b.l):document.createElement(b.l);b.h&&ua(a,e,null,b.h);null!==b.s&&sa(a,e,b.s);null!==b.m&&ta(a,null,b.m);b.j&&G(a,null,b.j);var f=b.c;if(null!==f)if(e&80)if(e&16)a.textContent=f;else for(e=0;e<f.length;e++)a.insertBefore(P(a,f[e],c,d),null);else e&
32?a.insertBefore(P(a,f,c,d),null):e&512?(c=a,"string"===typeof f?c.value=f:c.checked=f):a.innerHTML=f}else e&8?(c=b.c=new b.l(b.h,c,d),c.L=a,Da(c),d=Ea(c),a=c.M=P(a,d,c.B,c)):(f=b.c=(0,b.l)(b.h,c)||A(""),a=b.f=P(a,f,c,d));return b.f=a}function Q(a,b,c,d,e){a=a.insertBefore(P(a,c,d,e),b);H(c);return a}function Fa(a,b){return(a.a&7695)===(b.a&7695)&&a.l===b.l&&a.g===b.g}
function Ga(a,b,c,d,e){if(b===c)return c.f;c.f&&(c=E(c));var f=b.a;if(f&3)if(a=c.f=b.f,f&1)b.c!==c.c&&(a.nodeValue=c.c);else{if(b.h!==c.h&&ua(a,f,b.h,c.h),b.s!==c.s&&sa(a,f,c.s),b.m!==c.m&&ta(a,b.m,c.m),b.j!==c.j&&G(a,b.j,c.j),b.c!==c.c){var f=b.f,g=b.a,h=c.a;b=b.c;c=c.c;if(null===b)if(h&80)if(h&16)f.textContent=c;else for(g=0;g<c.length;g++)Q(f,null,c[g],d,e);else h&32?Q(f,null,c,d,e):h&512?"string"===typeof c?f.value=c:f.checked=c:f.innerHTML=c;else if(null===c)g&144?f.textContent="":g&64?(f.textContent=
"",J(b)):g&32?M(f,b):"string"===typeof b?f.value="":f.checked=!1;else if(g&144)if(h&144)h&16?(d=f.firstChild)?d.nodeValue=c:f.textContent=c:f.innerHTML=c;else if(f.textContent="",h&64)for(g=0;g<c.length;g++)Q(f,null,c[g],d,e);else Q(f,null,c,d,e);else if(g&64)if(h&144)h&16?f.textContent=c:f.innerHTML=c,J(b);else if(h&64)if(0===b.length)for(g=0;g<c.length;g++)Q(f,null,c[g],d,e);else if(0===c.length)f.textContent="",J(b);else if(1===b.length&&1===c.length)O(f,b[0],c[0],d,e);else if(g&h&256){var n=0,
g=0,m=b.length-1,p=c.length-1,l=b[n],h=c[g],k=b[m],q=c[p],r,N;a:for(;;){for(;l.g===h.g;){O(f,l,h,d,e);n++;g++;if(n>m||g>p)break a;l=b[n];h=c[g]}for(;k.g===q.g;){O(f,k,q,d,e);m--;p--;if(n>m||g>p)break a;k=b[m];q=c[p]}if(k.g===h.g){O(f,k,h,d,e);f.insertBefore(h.f,l.f);m--;g++;if(n>m||g>p)break;k=b[m];h=c[g]}else if(l.g===q.g){O(f,l,q,d,e);l=p+1;l=l<c.length?c[l].f:null;f.insertBefore(q.f,l);n++;p--;if(n>m||g>p)break;l=b[n];q=c[p]}else break}if(n>m)for(l=p+1,l=l<c.length?c[l].f:null;g<=p;)Q(f,l,c[g++],
d,e);else if(g>p)for(;n<=m;)M(f,b[n++]);else{var ea=m-n+1,l=p-g+1,h=Array(l).fill(-1),fa=!1,v=0,C=0;if(4>=l||16>=ea*l)for(k=n;k<=m;k++){if(r=b[k],C<l)for(q=g;q<=p;q++)if(N=c[q],r.g===N.g){h[q-g]=k;v>q?fa=!0:v=q;O(f,r,N,d,e);C++;b[k]=null;break}}else{for(var za=new Map,k=g;k<=p;k++)r=c[k],za.set(r.g,k);for(k=n;k<=m;k++)r=b[k],C<l&&(q=za.get(r.g),void 0!==q&&(N=c[q],h[q-g]=k,v>q?fa=!0:v=q,O(f,r,N,d,e),C++,b[k]=null))}if(ea===b.length&&0===C)for(f.textContent="",J(b);g<l;)Q(f,null,c[g++],d,e);else{for(k=
ea-C;0<k;)r=b[n++],null!==r&&(M(f,r),k--);if(fa){n=h.slice(0);b=[];b.push(0);m=0;for(p=h.length;m<p;m++)if(-1!==h[m])if(k=b[b.length-1],h[k]<h[m])n[m]=k,b.push(m);else{k=0;for(q=b.length-1;k<q;)r=(k+q)/2|0,h[b[r]]<h[m]?k=r+1:q=r;h[m]<h[b[k]]&&(0<k&&(n[m]=b[k-1]),b[k]=m)}k=b.length;for(q=b[k-1];0<k--;)b[k]=q,q=n[q];q=b.length-1;for(k=l-1;0<=k;k--)-1===h[k]?(v=k+g,r=c[v],l=v+1,l=l<c.length?c[l].f:null,Q(f,l,r,d,e)):0>q||k!==b[q]?(v=k+g,r=c[v],l=v+1,l=l<c.length?c[l].f:null,f.insertBefore(r.f,l)):q--}else if(C!==
l)for(k=l-1;0<=k;k--)-1===h[k]&&(v=k+g,r=c[v],l=v+1,l=l<c.length?c[l].f:null,Q(f,l,r,d,e))}}}else{g=l=0;n=b.length-1;for(h=c.length-1;l<=n&&g<=h;){m=b[l];p=c[g];if(!Fa(m,p))break;l++;g++;Ga(f,m,p,d,e)}for(;l<=n&&g<=h;){m=b[n];p=c[h];if(!Fa(m,p))break;n--;h--;Ga(f,m,p,d,e)}for(;l<=n&&g<=h;)m=b[l++],p=c[g++],O(f,m,p,d,e);if(l<=n){do M(f,b[l++]);while(l<=n)}else if(g<=h){b=h+1;b=b<c.length?c[b].f:null;do Q(f,b,c[g++],d,e);while(g<=h)}}else if(0<b.length)for(O(f,b[0],c,d,e),g=1;g<b.length;g++)M(f,b[g]);
else Q(f,null,c,d,e);else if(g&32)if(h&144)h&16?f.textContent=c:f.innerHTML=c,I(b);else if(h&64)if(0<c.length)for(O(f,b,c[0],d,e),g=1;g<c.length;g++)Q(f,null,c[g],d,e);else M(f,b);else O(f,b,c,d,e);else"string"===typeof c?f.value!==c&&(f.value=c):f.checked=c}}else f&8?(e=c.c=b.c,a=c.h,e.b|=1,e.h=a,e.b&128&&(e.b|=4),e.C!==d&&(e.b|=4,e.C=d),a=c.f=L(e)):a=c.f=Ca(a,b,c,d,e);return a}function O(a,b,c,d,e){if(Fa(b,c))return Ga(a,b,c,d,e);d=P(a,c,d,e);a.replaceChild(d,b.f);I(b);H(c);return d}
function R(){this.a=0;this.A=[];this.T=this.D=this.F=null}R.prototype.write=function(a){this.a|=2;null===this.F&&(this.F=[]);this.F.push(a)};R.prototype.read=function(a){this.a|=4;null===this.D&&(this.D=[]);this.D.push(a)};var S=0,Ha=0,Ia=[],Ja=[],Ka=new R,La=new R,T=[],Ma=document.createTextNode(""),Na="__ivi"+Math.random();(new MutationObserver(Oa)).observe(Ma,{characterData:!0});window.addEventListener("message",Pa);function Qa(){0===(S&4)&&(S|=4,requestAnimationFrame(Ra))}
function Pa(a){if(a.source===window&&a.data===Na){S&=-3;a=Ja;Ja=[];for(var b=0;b<a.length;b++)a[b]();Ha++}}
function Ra(){var a,b;S&=-5;S|=8;var c=La;La=Ka;Ka=c;for(b=0;b<T.length;b++)T[b].b|=2;do{for(;0!==(c.a&4);)for(c.a&=-5,a=c.D,c.D=null,b=0;b<a.length;b++)a[b]();for(;0!==(c.a&3);){if(0!==(c.a&1)){c.a&=-2;var d=c.A;for(b=0;b<d.length;b++){var e=d[b];if(null!==e)for(d[b]=null,a=0;a<e.length;a++)L(e[a])}}if(0!==(c.a&2))for(c.a&=-3,a=c.F,c.F=null,b=0;b<a.length;b++)a[b]()}b=0;for(a=T.length;b<a;)d=T[b++],0===(d.b&256)?(d.b&=-513,b===a?T.pop():T[--b]=T.pop()):L(d)}while(0!==(c.a&7));for(S&=-9;0!==(c.a&
8);)for(c.a&=-9,a=c.T,c.T=null,b=0;b<a.length;b++)a[b]();0<T.length&&Qa();Ha++}function Oa(){for(;0<Ia.length;){var a=Ia;Ia=[];for(var b=0;b<a.length;b++)a[b]();Ha++}S&=-2}function Sa(a){0===(S&2)&&(S|=2,window.postMessage(Na,"*"));Ja.push(a)}function U(){this.J=0;this.i=this.w=null}U.prototype.N=function(){};U.prototype.I=function(){if(this.w)for(var a=0;this.w.length;a++){var b=this.w[a];0===b.J++&&b.I();null===b.i&&(b.i=[]);b.i.push(this)}};
U.prototype.K=function(){if(this.w)for(var a=0;this.w.length;a++){var b=this.w[a];0===--b.J&&b.K();1<b.i.length?b.i[b.i.indexOf(this)]=b.i.pop():b.i=null}};function Aa(a){0===a.J++&&a.I()}function Ba(a){0===--a.J&&a.K()}function Ta(a,b,c){b.currentTarget=a.target;b.a=b.target===a.target?b.a|64:b.a&-65;for(var d=0;d<a.W.length;d++){var e=a.W[d],f=e.b&1;console.log("event",c,!!f);if(c&&f||!c&&!f)if(e.V(b),b.a&2)break}}
function V(a,b,c){U.call(this);this.b=a;this.name=b;this.$=c;this.U=this.N.bind(this);this.v=!1}u(V,U);
V.prototype.N=function(a){for(var b=this.i,c=va(a),d=[];c;){var e=c,f=e._ev;if(f){for(var g=void 0,h=Object.keys(f),n=0;n<h.length;n++){var m=f[h[n]];m.o===this&&(g?g.push(m):g=[m])}g&&d.push({target:e,W:g})}c=c.parentElement}var p;if(d||b)p=new this.$(0,a,va(a));if(0<d.length)a:for(a=p,b=!!(this.b&4),c=d.length-1;;){for(;0<=c;)if(console.log("Capture"),Ta(d[c--],a,!0),a.a&1)break a;if(b)for(console.log("Bubble"),a.a|=128,c=0;c<d.length;){if(Ta(d[c++],a,!1),console.log("flags",a.a),a.a&1){console.log("break");
break a}}else a.target===d[0].target&&Ta(d[0],a,!1);break}if(p&&(d=p)&&this.i)for(p=0;p<this.i.length;p++)this.i[p].N(d)};V.prototype.I=function(){this.v?this.v=!1:(U.prototype.I.call(this),document.addEventListener(this.name,this.U,ya(this.b)))};V.prototype.K=function(){var a=this;this.v||(this.v=!0,Sa(function(){a.v&&(document.removeEventListener(a.name,a.U,ya(a.b)),U.prototype.K.call(a),a.v=!1)}))};function W(a,b,c){this.a=a;this.u=b;this.currentTarget=this.target=c}
W.prototype.stopPropagation=function(){this.a|=1};W.prototype.stopImmediatePropagation=function(){this.a|=3};W.prototype.preventDefault=function(){this.a|=4};
w.Object.defineProperties(W.prototype,{defaultPrevented:{configurable:!0,enumerable:!0,get:function(){return!!(this.a&4)}},bubbles:{configurable:!0,enumerable:!0,get:function(){return!!(this.a&8)}},cancelable:{configurable:!0,enumerable:!0,get:function(){return!!(this.a&16)}},isTrusted:{configurable:!0,enumerable:!0,get:function(){return!!(this.a&32)}},eventPhase:{configurable:!0,enumerable:!0,get:function(){return this.a&64?2:this.a&128?3:1}}});function X(a){W.apply(this,arguments)}u(X,W);
X.prototype.preventDefault=function(){this.a|=4;this.u.preventDefault()};w.Object.defineProperties(X.prototype,{timeStamp:{configurable:!0,enumerable:!0,get:function(){return this.u.timeStamp}},type:{configurable:!0,enumerable:!0,get:function(){return this.u.type}},AT_TARGET:{configurable:!0,enumerable:!0,get:function(){return this.u.AT_TARGET}},BUBBLING_PHASE:{configurable:!0,enumerable:!0,get:function(){return this.u.BUBBLING_PHASE}},CAPTURING_PHASE:{configurable:!0,enumerable:!0,get:function(){return this.u.CAPTURING_PHASE}}});
var Ua=new V(5,"input",X),Va=new V(5,"submit",X);function Y(a,b,c){this.b=0;this.depth=c?c.depth+1:0;this.h=a;this.B=this.C=b;this.M=this.L=this.root=null}Y.prototype.R=function(){};w.Object.defineProperties(Y.prototype,{context:{configurable:!0,enumerable:!0,get:function(){this.b|=16;return this.B}},P:{configurable:!0,enumerable:!0,get:function(){this.b|=64;return this.h}}});var Z=[];
function Wa(a){var b,c=document.getElementById("app");b=void 0===b?ra:b;var d;a:{for(d=0;d<Z.length;d++){var e=Z[d];if(e.X===c){d=e;break a}}d=void 0}a?d?(b=O(c,d.S,a,b),d.S=a,d.Z=b):(b=Q(c,null,a,b),Z.push({X:c,S:a,Z:b}),la&1&&(c.onclick=ma)):d&&(M(c,d.S),a=Z.pop(),a!==d&&Z.length&&(Z[Z.indexOf(d)]=a))}
function D(){var a=this;Y.apply(this,[].concat(arguments instanceof Array?arguments:ja(ia(arguments))));this.G="";this.O={o:Va,b:0,V:function(b){if(a.G&&(a.P.O(a.G),a.G="",a.b&8&&(a.b|=2,!(a.b&1024)))){var c;S&8?c=Ka:(Qa(),c=La);if(0===(a.b&1024)){a.b|=1024;var d=a.depth;for(c.a|=1;d>=c.A.length;)c.A.push(null);var e=c.A[d];null===e?c.A[d]=[a]:e.push(a)}}b.preventDefault()}};this.aa={o:Ua,b:0,V:function(b){a.G=b.target.value}}}u(D,Y);
D.prototype.R=function(){var a=B("form");a.j={submit:this.O,input:this.aa};return a.children([(new z(514,"text",null,null,null)).P({placeholder:"Entry"}).value(this.G),B("button").value("Submit")])};var Xa=[];function Ya(){Wa(B("div").children([oa(),B("ul").children(Xa.map(function(a){return B("li").children(a)}))]))}function pa(a){Xa.push(a);Ya()}Ya();}).call(this);