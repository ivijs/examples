(function(){'use strict';function t(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]}
var u="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};function ba(){ba=function(){};u.Symbol||(u.Symbol=ca)}var da=0;function ca(a){return"jscomp_symbol_"+(a||"")+da++}
function ea(){ba();var a=u.Symbol.iterator;a||(a=u.Symbol.iterator=u.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&aa(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(this)}});ea=function(){}}function fa(a){var b=0;return ga(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}function ga(a){ea();a={next:a};a[u.Symbol.iterator]=function(){return this};return a}function ha(a){ea();var b=a[Symbol.iterator];return b?b.call(a):fa(a)}
function ia(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}var la=0;try{var ma=Object.defineProperty({},"passive",{get:function(){la|=1}});window.addEventListener("test",null,ma)}catch(a){}var na=0;/iPad|iPhone|iPod/.test(navigator?navigator.userAgent:"")&&!window.aa&&(na|=1);function oa(){}function w(a,b,c,d,e){this.a=a;this.m=b;this.h=null;this.i=c;this.s=d;this.l=this.o=null;this.c=e;this.H=this.g=null}w.prototype.key=function(a){this.h=a;return this};
w.prototype.className=function(a){this.s=a;return this};w.prototype.style=function(a){this.o=a;return this};w.prototype.children=function(a){if(Array.isArray(a)){this.a|=64;a:for(var b=0;b<a.length;b++){var c=a[b];if(null===c||Array.isArray(c)){c=a.slice(0,b);pa(a,c,b);a=c;break a}"object"!==typeof c&&(a[b]=x(c))}}else this.a="object"===typeof a?this.a|32:this.a|16;this.c=a;return this};w.prototype.value=function(a){this.c=a;return this};w.prototype.checked=function(a){this.c=a;return this};
function x(a){return new w(1,null,null,null,a)}function qa(a){var b=a.a,c=a.c;if(null!==c&&b&64)for(var b=Array(c.length),d=0;0>d;d++)b[d]=qa(c[d]);c=new w(a.a,a.m,a.i,a.s,a.a&12?null:a.c);c.h=a.h;c.l=a.l;c.o=a.o;return c}function pa(a,b,c){for(;c<a.length;c++){var d=a[c];null!==d&&(Array.isArray(d)?pa(d,b,0):b.push("object"===typeof d?d:x(d)))}}function ra(a,b){this.data=a;this.from=b}
ra.prototype.get=function(a){var b=this,c;if("string"!==typeof a){for(var d=Object.keys(a),e=d.length;0<e&&b;){if(b.data)for(var f=0;f<d.length;f++){var g=d[f];if(g&&(c=b.data[g],void 0!==c)){a[g]=b.data[g];d[f]=null;e--;break}}b=b.from}return a}for(;b;){if(b.data&&(c=b.data[a],void 0!==c))return c;b=b.from}};var sa=new ra(void 0);function ta(a,b,c){c||(c="");b&4096?a.setAttribute("class",c):a.className=c}
function ua(a,b,c){var d,e,f;if(null===b){if(null!==c)if(f=a.style,"string"===typeof c)f.cssText=c;else for(d=Object.keys(c),a=0;a<d.length;a++)e=d[a],f[e]=c[e]}else if(null===c)if(f=a.style,"string"===typeof b)f.cssText="";else for(d=Object.keys(b),a=0;a<d.length;a++)f[d[a]]=null;else if(f=a.style,"string"===typeof c)f.cssText=c;else if("string"===typeof b)for(f.cssText="",d=Object.keys(c),a=0;a<d.length;a++)e=d[a],f[e]=c[e];else{var g=0;d=Object.keys(b);for(a=0;a<d.length;a++){e=d[a];var h=c[e];
void 0!==h?(b[e]!==h&&(f[e]=h),g++):f[e]=null}d=Object.keys(c);for(a=0;g<d.length&&a<d.length;)e=d[a++],b.hasOwnProperty(e)||(f[e]=c[e],g++)}}
function y(a,b,c,d){if(b&2048&&"volume"===c)a.volume!==d&&(a.volume=void 0===d?null:d);else if(void 0===d)a.removeAttribute(c);else{if(5<c.length)if(120===c.charCodeAt(0)&&(58===c.charCodeAt(3)||58===c.charCodeAt(5))){if(109===c.charCodeAt(1)&&108===c.charCodeAt(2)){a.setAttributeNS("http://www.w3.org/XML/1998/namespace",c,d);return}if(108===c.charCodeAt(1)&&105===c.charCodeAt(2)&&110===c.charCodeAt(3)&&107===c.charCodeAt(4)){a.setAttributeNS("http://www.w3.org/1999/xlink",c,d);return}}else if(45===
c.charCodeAt(4)){a.setAttribute(c,d);return}a[c]=d}}function va(a,b,c,d){var e,f,g;if(null===c){if(null!==d)for(f=Object.keys(d),e=0;e<f.length;e++)g=f[e],y(a,b,g,d[g])}else if(null===d)for(f=Object.keys(c),e=0;e<f.length;e++)y(a,b,f[e]);else{var h=0;f=Object.keys(c);for(e=0;e<f.length;e++){g=f[e];var n=d[g];void 0===n?y(a,b,g):(c[g]!==n&&y(a,b,g,n),h++)}f=Object.keys(d);for(e=0;h<f.length&&e<f.length;)g=f[e++],c.hasOwnProperty(g)||(y(a,b,g,d[g]),h++)}}
function wa(a){a=a.target||window;a.V&&(a=a.V);return 3===a.nodeType?a.parentNode:a}var xa=la&1?{capture:!0,passive:!0}:!0,ya=la&1?{passive:!0}:!1;function za(a){return a&2?a&1?xa:ya:a&1?!0:!1}
function Aa(a,b,c){var d,e,f;if(null===b){if(null!==c)for(e=Object.keys(c),d=0;d<e.length;d++)Ba(c[e[d]].v)}else if(null===c)for(e=Object.keys(b),d=0;d<e.length;d++)Ca(b[e[d]].v);else{var g=0;e=Object.keys(b);for(d=0;d<e.length;d++){f=e[d];var h=b[f];f=c[f];void 0!==f?(h!==f&&(Ba(f.v),Ca(h.v)),g++):Ca(h.v)}e=Object.keys(c);for(d=0;g<e.length&&d<e.length;)f=e[d++],b.hasOwnProperty(f)||(Ba(c[f].v),g++)}a._ev=null===c?void 0:c}
function z(a){var b=a.a;if(b&12)if(b&8){var c=a.c;c.b|=8;z(c.root)}else z(a.c);else if(!(b&2560)&&(c=a.c,null!==c&&b&96))if(b&64)for(var d=0;d<c.length;d++)z(c[d]);else z(c);a.H&&a.H(b&12?a.c:a.g)}function A(a){var b=a.a;if(b&12)if(b&8){var c=a.c;A(c.root);c.b&=-265}else A(a.c);else if(b&2){if(!(b&2560)&&(c=a.c,null!==c&&b&96))if(b&64)for(b=0;b<c.length;b++)A(c[b]);else A(c);a.l&&Aa(a.g,a.l,null)}a.H&&a.H(null)}function B(a){for(var b=0;b<a.length;b++)A(a[b])}
function C(a,b,c,d){var e=b.a;if(e&12)e&8?(a=b.c,a.D!==c&&(a.b|=4,a.D=c),E(a)):2>b.m.length?b.c&&C(a,b.c,c,d):Da(a,b.c,b.c,c,d);else if(!(e&2560)&&(b=b.c,null!==b&&e&96))if(e&64)for(e=0;e<b.length;e++)C(a,b[e],c,d);else C(a,b,c,d)}function F(a,b){a.removeChild(b.g);A(b)}function Ea(a){a.b&=-193;a.b|=(a.b&64)<<1;a.C=a.D}function Fa(a){a.b&=-49;var b=a.root=a.N()||x("");a.b|=(a.b&16)<<1;return b}
function E(a){var b=a.b,c=a.L;if(b&8&&b&7){var d=a.root;b&4&&Ea(a);b&35?(b=a.K,c=Fa(a),c=a.L=G(b,d,c,a.C),a.b&=-1032):d&&C(a.K,d,a.C,a)}return c}function Da(a,b,c,d,e){var f=c.m;b=b.c;f=c.c=f(c.i,d)||x("");a=G(a,b,f,d,e);return c.g=a}
function H(a,b,c,d){b.g&&(b=qa(b));var e=b.a;if(e&3)if(e&1)a=document.createTextNode(b.c);else{e&512?e&1024?a=document.createElement("textarea"):(a=document.createElement("input"),a.type=b.m):a=e&4096?document.createElementNS("http://www.w3.org/2000/svg",b.m):document.createElement(b.m);b.i&&va(a,e,null,b.i);null!==b.s&&ta(a,e,b.s);null!==b.o&&ua(a,null,b.o);b.l&&Aa(a,null,b.l);var f=b.c;if(null!==f)if(e&80)if(e&16)a.textContent=f;else for(e=0;e<f.length;e++)a.insertBefore(H(a,f[e],c,d),null);else e&
32?a.insertBefore(H(a,f,c,d),null):e&512?(c=a,"string"===typeof f?c.value=f:c.checked=f):a.innerHTML=f}else e&8?(c=b.c=new b.m(b.i,c,d),c.K=a,Ea(c),d=Fa(c),a=c.L=H(a,d,c.C,c)):(f=b.c=(0,b.m)(b.i,c)||x(""),a=b.g=H(a,f,c,d));return b.g=a}function I(a,b,c,d,e){a=a.insertBefore(H(a,c,d,e),b);z(c);return a}function Ha(a,b){return(a.a&7695)===(b.a&7695)&&a.m===b.m&&a.h===b.h}
function Ia(a,b,c,d,e){if(b===c)return c.g;c.g&&(c=qa(c));var f=b.a;if(f&3)if(a=c.g=b.g,f&1)b.c!==c.c&&(a.nodeValue=c.c);else{if(b.i!==c.i&&va(a,f,b.i,c.i),b.s!==c.s&&ta(a,f,c.s),b.o!==c.o&&ua(a,b.o,c.o),b.l!==c.l&&Aa(a,b.l,c.l),b.c!==c.c){var f=b.g,g=b.a,h=c.a;b=b.c;c=c.c;if(null===b)if(h&80)if(h&16)f.textContent=c;else for(g=0;g<c.length;g++)I(f,null,c[g],d,e);else h&32?I(f,null,c,d,e):h&512?"string"===typeof c?f.value=c:f.checked=c:f.innerHTML=c;else if(null===c)g&144?f.textContent="":g&64?(f.textContent=
"",B(b)):g&32?F(f,b):"string"===typeof b?f.value="":f.checked=!1;else if(g&144)if(h&144)h&16?(d=f.firstChild)?d.nodeValue=c:f.textContent=c:f.innerHTML=c;else if(f.textContent="",h&64)for(g=0;g<c.length;g++)I(f,null,c[g],d,e);else I(f,null,c,d,e);else if(g&64)if(h&144)h&16?f.textContent=c:f.innerHTML=c,B(b);else if(h&64)if(0===b.length)for(g=0;g<c.length;g++)I(f,null,c[g],d,e);else if(0===c.length)f.textContent="",B(b);else if(1===b.length&&1===c.length)G(f,b[0],c[0],d,e);else if(g&h&256){var n=0,
g=0,m=b.length-1,p=c.length-1,l=b[n],h=c[g],k=b[m],q=c[p],r,N;a:for(;;){for(;l.h===h.h;){G(f,l,h,d,e);n++;g++;if(n>m||g>p)break a;l=b[n];h=c[g]}for(;k.h===q.h;){G(f,k,q,d,e);m--;p--;if(n>m||g>p)break a;k=b[m];q=c[p]}if(k.h===h.h){G(f,k,h,d,e);f.insertBefore(h.g,l.g);m--;g++;if(n>m||g>p)break;k=b[m];h=c[g]}else if(l.h===q.h){G(f,l,q,d,e);l=p+1;l=l<c.length?c[l].g:null;f.insertBefore(q.g,l);n++;p--;if(n>m||g>p)break;l=b[n];q=c[p]}else break}if(n>m)for(l=p+1,l=l<c.length?c[l].g:null;g<=p;)I(f,l,c[g++],
d,e);else if(g>p)for(;n<=m;)F(f,b[n++]);else{var ja=m-n+1,l=p-g+1,h=Array(l).fill(-1),ka=!1,v=0,D=0;if(4>=l||16>=ja*l)for(k=n;k<=m;k++){if(r=b[k],D<l)for(q=g;q<=p;q++)if(N=c[q],r.h===N.h){h[q-g]=k;v>q?ka=!0:v=q;G(f,r,N,d,e);D++;b[k]=null;break}}else{for(var Ga=new Map,k=g;k<=p;k++)r=c[k],Ga.set(r.h,k);for(k=n;k<=m;k++)r=b[k],D<l&&(q=Ga.get(r.h),void 0!==q&&(N=c[q],h[q-g]=k,v>q?ka=!0:v=q,G(f,r,N,d,e),D++,b[k]=null))}if(ja===b.length&&0===D)for(f.textContent="",B(b);g<l;)I(f,null,c[g++],d,e);else{for(k=
ja-D;0<k;)r=b[n++],null!==r&&(F(f,r),k--);if(ka){n=h.slice(0);b=[];b.push(0);m=0;for(p=h.length;m<p;m++)if(-1!==h[m])if(k=b[b.length-1],h[k]<h[m])n[m]=k,b.push(m);else{k=0;for(q=b.length-1;k<q;)r=(k+q)/2|0,h[b[r]]<h[m]?k=r+1:q=r;h[m]<h[b[k]]&&(0<k&&(n[m]=b[k-1]),b[k]=m)}k=b.length;for(q=b[k-1];0<k--;)b[k]=q,q=n[q];q=b.length-1;for(k=l-1;0<=k;k--)-1===h[k]?(v=k+g,r=c[v],l=v+1,l=l<c.length?c[l].g:null,I(f,l,r,d,e)):0>q||k!==b[q]?(v=k+g,r=c[v],l=v+1,l=l<c.length?c[l].g:null,f.insertBefore(r.g,l)):q--}else if(D!==
l)for(k=l-1;0<=k;k--)-1===h[k]&&(v=k+g,r=c[v],l=v+1,l=l<c.length?c[l].g:null,I(f,l,r,d,e))}}}else{g=l=0;n=b.length-1;for(h=c.length-1;l<=n&&g<=h;){m=b[l];p=c[g];if(!Ha(m,p))break;l++;g++;Ia(f,m,p,d,e)}for(;l<=n&&g<=h;){m=b[n];p=c[h];if(!Ha(m,p))break;n--;h--;Ia(f,m,p,d,e)}for(;l<=n&&g<=h;)m=b[l++],p=c[g++],G(f,m,p,d,e);if(l<=n){do F(f,b[l++]);while(l<=n)}else if(g<=h){b=h+1;b=b<c.length?c[b].g:null;do I(f,b,c[g++],d,e);while(g<=h)}}else if(0<b.length)for(G(f,b[0],c,d,e),g=1;g<b.length;g++)F(f,b[g]);
else I(f,null,c,d,e);else if(g&32)if(h&144)h&16?f.textContent=c:f.innerHTML=c,A(b);else if(h&64)if(0<c.length)for(G(f,b,c[0],d,e),g=1;g<c.length;g++)I(f,null,c[g],d,e);else F(f,b);else G(f,b,c,d,e);else"string"===typeof c?f.value!==c&&(f.value=c):f.checked=c}}else f&8?(e=c.c=b.c,a=c.i,e.b|=1,e.i=a,e.b&128&&(e.b|=4),e.D!==d&&(e.b|=4,e.D=d),a=c.g=E(e)):a=c.g=Da(a,b,c,d,e);return a}function G(a,b,c,d,e){if(Ha(b,c))return Ia(a,b,c,d,e);d=H(a,c,d,e);a.replaceChild(d,b.g);A(b);z(c);return d}
function J(){this.a=0;this.B=[];this.P=this.F=this.G=null}J.prototype.write=function(a){this.a|=2;null===this.G&&(this.G=[]);this.G.push(a)};J.prototype.read=function(a){this.a|=4;null===this.F&&(this.F=[]);this.F.push(a)};var K=0,Ja=0,Ka=[],La=[],Ma=new J,Na=new J,L=[],Oa=document.createTextNode(""),Pa="__ivi"+Math.random();(new MutationObserver(Qa)).observe(Oa,{characterData:!0});window.addEventListener("message",Ra);function Sa(){0===(K&4)&&(K|=4,requestAnimationFrame(Ta))}
function Ra(a){if(a.source===window&&a.data===Pa){K&=-3;a=La;La=[];for(var b=0;b<a.length;b++)a[b]();Ja++}}
function Ta(){var a,b;K&=-5;K|=8;var c=Na;Na=Ma;Ma=c;for(b=0;b<L.length;b++)L[b].b|=2;do{for(;0!==(c.a&4);)for(c.a&=-5,a=c.F,c.F=null,b=0;b<a.length;b++)a[b]();for(;0!==(c.a&3);){if(0!==(c.a&1)){c.a&=-2;var d=c.B;for(b=0;b<d.length;b++){var e=d[b];if(null!==e)for(d[b]=null,a=0;a<e.length;a++)E(e[a])}}if(0!==(c.a&2))for(c.a&=-3,a=c.G,c.G=null,b=0;b<a.length;b++)a[b]()}b=0;for(a=L.length;b<a;)d=L[b++],0===(d.b&256)?(d.b&=-513,b===a?L.pop():L[--b]=L.pop()):E(d)}while(0!==(c.a&7));for(K&=-9;0!==(c.a&
8);)for(c.a&=-9,a=c.P,c.P=null,b=0;b<a.length;b++)a[b]();0<L.length&&Sa();Ja++}function Qa(){for(;0<Ka.length;){var a=Ka;Ka=[];for(var b=0;b<a.length;b++)a[b]();Ja++}K&=-2}function Ua(a){0===(K&2)&&(K|=2,window.postMessage(Pa,"*"));La.push(a)}function M(){this.u=0;this.j=this.A=null}M.prototype.M=function(){};M.prototype.I=function(){if(this.A)for(var a=0;this.A.length;a++){var b=this.A[a];0===b.u++&&b.I();null===b.j&&(b.j=[]);b.j.push(this)}};
M.prototype.J=function(){if(this.A)for(var a=0;this.A.length;a++){var b=this.A[a];0===--b.u&&b.J();1<b.j.length?b.j[b.j.indexOf(this)]=b.j.pop():b.j=null}};function Ba(a){0===a.u++&&a.I()}function Ca(a){0===--a.u&&a.J()}function Va(a,b,c){b.currentTarget=a.target;b.a=b.target===a.target?b.a|64:b.a&-65;for(var d=0;d<a.T.length;d++){var e=a.T[d],f=e.b&1;console.log("event",c,!!f);if(c&&f||!c&&!f)if(e.X(b),b.a&2)break}}
function O(a,b,c){M.call(this);this.b=a;this.name=b;this.W=c;this.R=this.M.bind(this);this.w=!1}t(O,M);
O.prototype.M=function(a){for(var b=this.j,c=wa(a),d=[];c;){var e=c,f=e._ev;if(f){for(var g=void 0,h=Object.keys(f),n=0;n<h.length;n++){var m=f[h[n]];m.v===this&&(g?g.push(m):g=[m])}g&&d.push({target:e,T:g})}c=c.parentElement}var p;if(d||b)p=new this.W(0,a,wa(a));if(0<d.length)a:for(a=p,b=!!(this.b&4),c=d.length-1;;){for(;0<=c;)if(console.log("Capture"),Va(d[c--],a,!0),a.a&1)break a;if(b)for(console.log("Bubble"),a.a|=128,c=0;c<d.length;){if(Va(d[c++],a,!1),console.log("flags",a.a),a.a&1){console.log("break");
break a}}else a.target===d[0].target&&Va(d[0],a,!1);break}if(p&&(d=p)&&this.j)for(p=0;p<this.j.length;p++)this.j[p].M(d)};O.prototype.I=function(){this.w?this.w=!1:(M.prototype.I.call(this),document.addEventListener(this.name,this.R,za(this.b)))};O.prototype.J=function(){var a=this;this.w||(this.w=!0,Ua(function(){a.w&&(document.removeEventListener(a.name,a.R,za(a.b)),M.prototype.J.call(a),a.w=!1)}))};function P(a,b,c){this.a=a;this.f=b;this.currentTarget=this.target=c}
P.prototype.stopPropagation=function(){this.a|=1};P.prototype.stopImmediatePropagation=function(){this.a|=3};P.prototype.preventDefault=function(){this.a|=4};
u.Object.defineProperties(P.prototype,{defaultPrevented:{configurable:!0,enumerable:!0,get:function(){return!!(this.a&4)}},bubbles:{configurable:!0,enumerable:!0,get:function(){return!!(this.a&8)}},cancelable:{configurable:!0,enumerable:!0,get:function(){return!!(this.a&16)}},isTrusted:{configurable:!0,enumerable:!0,get:function(){return!!(this.a&32)}},eventPhase:{configurable:!0,enumerable:!0,get:function(){return this.a&64?2:this.a&128?3:1}}});function Q(a){P.apply(this,arguments)}t(Q,P);
Q.prototype.preventDefault=function(){this.a|=4;this.f.preventDefault()};u.Object.defineProperties(Q.prototype,{timeStamp:{configurable:!0,enumerable:!0,get:function(){return this.f.timeStamp}},type:{configurable:!0,enumerable:!0,get:function(){return this.f.type}},AT_TARGET:{configurable:!0,enumerable:!0,get:function(){return this.f.AT_TARGET}},BUBBLING_PHASE:{configurable:!0,enumerable:!0,get:function(){return this.f.BUBBLING_PHASE}},CAPTURING_PHASE:{configurable:!0,enumerable:!0,get:function(){return this.f.CAPTURING_PHASE}}});
function R(a){Q.apply(this,arguments)}t(R,Q);u.Object.defineProperties(R.prototype,{detail:{configurable:!0,enumerable:!0,get:function(){return this.f.detail}},view:{configurable:!0,enumerable:!0,get:function(){return this.f.view}}});function S(a){R.apply(this,arguments)}t(S,R);S.prototype.getModifierState=function(a){return this.f.getModifierState(a)};
u.Object.defineProperties(S.prototype,{altKey:{configurable:!0,enumerable:!0,get:function(){return this.f.altKey}},button:{configurable:!0,enumerable:!0,get:function(){return this.f.button}},buttons:{configurable:!0,enumerable:!0,get:function(){return this.f.buttons}},clientX:{configurable:!0,enumerable:!0,get:function(){return this.f.clientX}},clientY:{configurable:!0,enumerable:!0,get:function(){return this.f.clientY}},ctrlKey:{configurable:!0,enumerable:!0,get:function(){return this.f.ctrlKey}},
fromElement:{configurable:!0,enumerable:!0,get:function(){return this.f.fromElement}},layerX:{configurable:!0,enumerable:!0,get:function(){return this.f.layerX}},layerY:{configurable:!0,enumerable:!0,get:function(){return this.f.layerY}},metaKey:{configurable:!0,enumerable:!0,get:function(){return this.f.metaKey}},Y:{configurable:!0,enumerable:!0,get:function(){return this.f.Y}},Z:{configurable:!0,enumerable:!0,get:function(){return this.f.Z}},offsetX:{configurable:!0,enumerable:!0,get:function(){return this.f.offsetX}},
offsetY:{configurable:!0,enumerable:!0,get:function(){return this.f.offsetY}},pageX:{configurable:!0,enumerable:!0,get:function(){return this.f.pageX}},pageY:{configurable:!0,enumerable:!0,get:function(){return this.f.pageY}},relatedTarget:{configurable:!0,enumerable:!0,get:function(){return this.f.relatedTarget}},screenX:{configurable:!0,enumerable:!0,get:function(){return this.f.screenX}},screenY:{configurable:!0,enumerable:!0,get:function(){return this.f.screenY}},shiftKey:{configurable:!0,enumerable:!0,
get:function(){return this.f.shiftKey}},toElement:{configurable:!0,enumerable:!0,get:function(){return this.f.toElement}},which:{configurable:!0,enumerable:!0,get:function(){return this.f.which}},x:{configurable:!0,enumerable:!0,get:function(){return this.f.x}},y:{configurable:!0,enumerable:!0,get:function(){return this.f.y}}});var Wa=new O(5,"click",S);function T(a,b,c){this.b=0;this.depth=c?c.depth+1:0;this.i=a;this.C=this.D=b;this.L=this.K=this.root=null}T.prototype.N=function(){};
u.Object.defineProperties(T.prototype,{context:{configurable:!0,enumerable:!0,get:function(){this.b|=16;return this.C}}});var U=[];function Xa(){var a=this;T.apply(this,[].concat(arguments instanceof Array?arguments:ia(ha(arguments))));this.u=0;this.$={v:Wa,b:0,X:function(){a.u++;if(a.b&8&&(a.b|=2,!(a.b&1024))){var b;K&8?b=Ma:(Sa(),b=Na);if(0===(a.b&1024)){a.b|=1024;var c=a.depth;for(b.a|=1;c>=b.B.length;)b.B.push(null);var d=b.B[c];null===d?b.B[c]=[a]:d.push(a)}}}}}t(Xa,T);
Xa.prototype.N=function(){var a=new w(2,"div",null,null,null);a.l={click:this.$};return a.children("Clicks: "+this.u)};var V=new w(Xa.prototype.N?8:4,Xa,void 0,null,null),W=document.getElementById("app"),X=void 0,X=void 0===X?sa:X,Y,Ya;a:{for(var Za=0;Za<U.length;Za++){var $a=U[Za];if($a.U===W){Ya=$a;break a}}Ya=void 0}var Z=Ya;
if(V)Z?(Y=G(W,Z.O,V,X),Z.O=V,Z.S=Y):(Y=I(W,null,V,X),U.push({U:W,O:V,S:Y}),na&1&&(W.onclick=oa));else if(Z){F(W,Z.O);var ab=U.pop();ab!==Z&&U.length&&(U[U.indexOf(Z)]=ab);Y=Z.S};}).call(this);