(function(){'use strict';var r;function u(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]}
var v="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};function ba(){ba=function(){};v.Symbol||(v.Symbol=ca)}var da=0;function ca(a){return"jscomp_symbol_"+(a||"")+da++}
function x(){ba();var a=v.Symbol.iterator;a||(a=v.Symbol.iterator=v.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&aa(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(this)}});x=function(){}}function ea(a){var b=0;return fa(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}function fa(a){x();a={next:a};a[v.Symbol.iterator]=function(){return this};return a}function ia(a){x();var b=a[Symbol.iterator];return b?b.call(a):ea(a)}
function ja(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}var y=0;try{var ka=Object.defineProperty({},"passive",{get:function(){y|=1}});window.addEventListener("test",null,ka)}catch(a){}var la=0;/iPad|iPhone|iPod/.test(navigator?navigator.userAgent:"")&&!window.ga&&(la|=1);function ma(){}function z(a,b,c,d,e){this.a=a;this.o=b;this.h=null;this.i=c;this.w=d;this.m=this.s=null;this.c=e;this.H=this.g=null}r=z.prototype;r.key=function(a){this.h=a;return this};
r.className=function(a){this.w=a;return this};r.style=function(a){this.s=a;return this};function na(a,b){a.m=b;return a}r.v=function(a){this.i=a;return this};r.children=function(a){if(Array.isArray(a)){this.a|=64;a:for(var b=0;b<a.length;b++){var c=a[b];if(null===c||Array.isArray(c)){c=a.slice(0,b);oa(a,c,b);a=c;break a}"object"!==typeof c&&(a[b]=A(c))}}else this.a="object"===typeof a?this.a|32:this.a|16;this.c=a;return this};r.value=function(a){this.c=a;return this};
r.checked=function(a){this.c=a;return this};function pa(a,b){a.H=b;return a}function A(a){return new z(1,null,null,null,a)}function C(a){return new z(2,"div",null,void 0===a?null:a,null)}function qa(a){var b=a.a,c=a.c;if(null!==c&&b&64)for(var b=Array(c.length),d=0;0>d;d++)b[d]=qa(c[d]);c=new z(a.a,a.o,a.i,a.w,a.a&12?null:a.c);c.h=a.h;c.m=a.m;c.s=a.s;return c}function oa(a,b,c){for(;c<a.length;c++){var d=a[c];null!==d&&(Array.isArray(d)?oa(d,b,0):b.push("object"===typeof d?d:A(d)))}}
function ra(a,b){this.data=a;this.from=b}ra.prototype.get=function(a){var b=this,c;if("string"!==typeof a){for(var d=Object.keys(a),e=d.length;0<e&&b;){if(b.data)for(var f=0;f<d.length;f++){var g=d[f];if(g&&(c=b.data[g],void 0!==c)){a[g]=b.data[g];d[f]=null;e--;break}}b=b.from}return a}for(;b;){if(b.data&&(c=b.data[a],void 0!==c))return c;b=b.from}};var sa=new ra(void 0);function ta(a,b,c){c||(c="");b&4096?a.setAttribute("class",c):a.className=c}
function ua(a,b,c){var d,e,f;if(null===b){if(null!==c)if(f=a.style,"string"===typeof c)f.cssText=c;else for(d=Object.keys(c),a=0;a<d.length;a++)e=d[a],f[e]=c[e]}else if(null===c)if(f=a.style,"string"===typeof b)f.cssText="";else for(d=Object.keys(b),a=0;a<d.length;a++)f[d[a]]=null;else if(f=a.style,"string"===typeof c)f.cssText=c;else if("string"===typeof b)for(f.cssText="",d=Object.keys(c),a=0;a<d.length;a++)e=d[a],f[e]=c[e];else{var g=0;d=Object.keys(b);for(a=0;a<d.length;a++){e=d[a];var h=c[e];
void 0!==h?(b[e]!==h&&(f[e]=h),g++):f[e]=null}d=Object.keys(c);for(a=0;g<d.length&&a<d.length;)e=d[a++],b.hasOwnProperty(e)||(f[e]=c[e],g++)}}
function D(a,b,c,d){if(b&2048&&"volume"===c)a.volume!==d&&(a.volume=void 0===d?null:d);else if(void 0===d)a.removeAttribute(c);else{if(5<c.length)if(120===c.charCodeAt(0)&&(58===c.charCodeAt(3)||58===c.charCodeAt(5))){if(109===c.charCodeAt(1)&&108===c.charCodeAt(2)){a.setAttributeNS("http://www.w3.org/XML/1998/namespace",c,d);return}if(108===c.charCodeAt(1)&&105===c.charCodeAt(2)&&110===c.charCodeAt(3)&&107===c.charCodeAt(4)){a.setAttributeNS("http://www.w3.org/1999/xlink",c,d);return}}else if(45===
c.charCodeAt(4)){a.setAttribute(c,d);return}a[c]=d}}function va(a,b,c,d){var e,f,g;if(null===c){if(null!==d)for(f=Object.keys(d),e=0;e<f.length;e++)g=f[e],D(a,b,g,d[g])}else if(null===d)for(f=Object.keys(c),e=0;e<f.length;e++)D(a,b,f[e]);else{var h=0;f=Object.keys(c);for(e=0;e<f.length;e++){g=f[e];var n=d[g];void 0===n?D(a,b,g):(c[g]!==n&&D(a,b,g,n),h++)}f=Object.keys(d);for(e=0;h<f.length&&e<f.length;)g=f[e++],c.hasOwnProperty(g)||(D(a,b,g,d[g]),h++)}}
function wa(a){a=a.target||window;a.ba&&(a=a.ba);return 3===a.nodeType?a.parentNode:a}var xa=y&1?{capture:!0,passive:!0}:!0,ya=y&1?{passive:!0}:!1;function za(a){return a&2?a&1?xa:ya:a&1?!0:!1}
function Aa(a,b,c){var d,e,f;if(null===b){if(null!==c)for(e=Object.keys(c),d=0;d<e.length;d++)Ca(c[e[d]].A)}else if(null===c)for(e=Object.keys(b),d=0;d<e.length;d++)Da(b[e[d]].A);else{var g=0;e=Object.keys(b);for(d=0;d<e.length;d++){f=e[d];var h=b[f];f=c[f];void 0!==f?(h!==f&&(Ca(f.A),Da(h.A)),g++):Da(h.A)}e=Object.keys(c);for(d=0;g<e.length&&d<e.length;)f=e[d++],b.hasOwnProperty(f)||(Ca(c[f].A),g++)}a._ev=null===c?void 0:c}
function E(a){var b=a.a;if(b&12)if(b&8){var c=a.c;c.b|=8;E(c.root)}else E(a.c);else if(!(b&2560)&&(c=a.c,null!==c&&b&96))if(b&64)for(var d=0;d<c.length;d++)E(c[d]);else E(c);a.H&&a.H(b&12?a.c:a.g)}function F(a){var b=a.a;if(b&12)if(b&8){var c=a.c;F(c.root);c.b&=-265}else F(a.c);else if(b&2){if(!(b&2560)&&(c=a.c,null!==c&&b&96))if(b&64)for(b=0;b<c.length;b++)F(c[b]);else F(c);a.m&&Aa(a.g,a.m,null)}a.H&&a.H(null)}function G(a){for(var b=0;b<a.length;b++)F(a[b])}
function H(a,b,c,d){var e=b.a;if(e&12)e&8?(a=b.c,a.G!==c&&(a.b|=4,a.G=c),Ea(a)):2>b.o.length?b.c&&H(a,b.c,c,d):Fa(a,b.c,b.c,c,d);else if(!(e&2560)&&(b=b.c,null!==b&&e&96))if(e&64)for(e=0;e<b.length;e++)H(a,b[e],c,d);else H(a,b,c,d)}function I(a,b){a.removeChild(b.g);F(b)}function Ga(a){a.b&=-193;a.b|=(a.b&64)<<1;a.F=a.G}function Ha(a){a.b&=-49;var b=a.root=a.R()||A("");a.b|=(a.b&16)<<1;return b}
function Ea(a){var b=a.b,c=a.M;if(b&8&&b&7){var d=a.root;b&4&&Ga(a);b&35?(b=a.L,c=Ha(a),c=a.M=J(b,d,c,a.F),a.b&=-1032):d&&H(a.L,d,a.F,a)}return c}function Fa(a,b,c,d,e){var f=c.o;b=b.c;f=c.c=f(c.i,d)||A("");a=J(a,b,f,d,e);return c.g=a}
function K(a,b,c,d){b.g&&(b=qa(b));var e=b.a;if(e&3)if(e&1)a=document.createTextNode(b.c);else{e&512?e&1024?a=document.createElement("textarea"):(a=document.createElement("input"),a.type=b.o):a=e&4096?document.createElementNS("http://www.w3.org/2000/svg",b.o):document.createElement(b.o);b.i&&va(a,e,null,b.i);null!==b.w&&ta(a,e,b.w);null!==b.s&&ua(a,null,b.s);b.m&&Aa(a,null,b.m);var f=b.c;if(null!==f)if(e&80)if(e&16)a.textContent=f;else for(e=0;e<f.length;e++)a.insertBefore(K(a,f[e],c,d),null);else e&
32?a.insertBefore(K(a,f,c,d),null):e&512?(c=a,"string"===typeof f?c.value=f:c.checked=f):a.innerHTML=f}else e&8?(c=b.c=new b.o(b.i,c,d),c.L=a,Ga(c),d=Ha(c),a=c.M=K(a,d,c.F,c)):(f=b.c=(0,b.o)(b.i,c)||A(""),a=b.g=K(a,f,c,d));return b.g=a}function L(a,b,c,d,e){a=a.insertBefore(K(a,c,d,e),b);E(c);return a}function Ia(a,b){return(a.a&7695)===(b.a&7695)&&a.o===b.o&&a.h===b.h}
function Ja(a,b,c,d,e){if(b===c)return c.g;c.g&&(c=qa(c));var f=b.a;if(f&3)if(a=c.g=b.g,f&1)b.c!==c.c&&(a.nodeValue=c.c);else{if(b.i!==c.i&&va(a,f,b.i,c.i),b.w!==c.w&&ta(a,f,c.w),b.s!==c.s&&ua(a,b.s,c.s),b.m!==c.m&&Aa(a,b.m,c.m),b.c!==c.c){var f=b.g,g=b.a,h=c.a;b=b.c;c=c.c;if(null===b)if(h&80)if(h&16)f.textContent=c;else for(g=0;g<c.length;g++)L(f,null,c[g],d,e);else h&32?L(f,null,c,d,e):h&512?"string"===typeof c?f.value=c:f.checked=c:f.innerHTML=c;else if(null===c)g&144?f.textContent="":g&64?(f.textContent=
"",G(b)):g&32?I(f,b):"string"===typeof b?f.value="":f.checked=!1;else if(g&144)if(h&144)h&16?(d=f.firstChild)?d.nodeValue=c:f.textContent=c:f.innerHTML=c;else if(f.textContent="",h&64)for(g=0;g<c.length;g++)L(f,null,c[g],d,e);else L(f,null,c,d,e);else if(g&64)if(h&144)h&16?f.textContent=c:f.innerHTML=c,G(b);else if(h&64)if(0===b.length)for(g=0;g<c.length;g++)L(f,null,c[g],d,e);else if(0===c.length)f.textContent="",G(b);else if(1===b.length&&1===c.length)J(f,b[0],c[0],d,e);else if(g&h&256){var n=0,
g=0,m=b.length-1,p=c.length-1,l=b[n],h=c[g],k=b[m],q=c[p],t,N;a:for(;;){for(;l.h===h.h;){J(f,l,h,d,e);n++;g++;if(n>m||g>p)break a;l=b[n];h=c[g]}for(;k.h===q.h;){J(f,k,q,d,e);m--;p--;if(n>m||g>p)break a;k=b[m];q=c[p]}if(k.h===h.h){J(f,k,h,d,e);f.insertBefore(h.g,l.g);m--;g++;if(n>m||g>p)break;k=b[m];h=c[g]}else if(l.h===q.h){J(f,l,q,d,e);l=p+1;l=l<c.length?c[l].g:null;f.insertBefore(q.g,l);n++;p--;if(n>m||g>p)break;l=b[n];q=c[p]}else break}if(n>m)for(l=p+1,l=l<c.length?c[l].g:null;g<=p;)L(f,l,c[g++],
d,e);else if(g>p)for(;n<=m;)I(f,b[n++]);else{var ga=m-n+1,l=p-g+1,h=Array(l).fill(-1),ha=!1,w=0,B=0;if(4>=l||16>=ga*l)for(k=n;k<=m;k++){if(t=b[k],B<l)for(q=g;q<=p;q++)if(N=c[q],t.h===N.h){h[q-g]=k;w>q?ha=!0:w=q;J(f,t,N,d,e);B++;b[k]=null;break}}else{for(var Ba=new Map,k=g;k<=p;k++)t=c[k],Ba.set(t.h,k);for(k=n;k<=m;k++)t=b[k],B<l&&(q=Ba.get(t.h),void 0!==q&&(N=c[q],h[q-g]=k,w>q?ha=!0:w=q,J(f,t,N,d,e),B++,b[k]=null))}if(ga===b.length&&0===B)for(f.textContent="",G(b);g<l;)L(f,null,c[g++],d,e);else{for(k=
ga-B;0<k;)t=b[n++],null!==t&&(I(f,t),k--);if(ha){n=h.slice(0);b=[];b.push(0);m=0;for(p=h.length;m<p;m++)if(-1!==h[m])if(k=b[b.length-1],h[k]<h[m])n[m]=k,b.push(m);else{k=0;for(q=b.length-1;k<q;)t=(k+q)/2|0,h[b[t]]<h[m]?k=t+1:q=t;h[m]<h[b[k]]&&(0<k&&(n[m]=b[k-1]),b[k]=m)}k=b.length;for(q=b[k-1];0<k--;)b[k]=q,q=n[q];q=b.length-1;for(k=l-1;0<=k;k--)-1===h[k]?(w=k+g,t=c[w],l=w+1,l=l<c.length?c[l].g:null,L(f,l,t,d,e)):0>q||k!==b[q]?(w=k+g,t=c[w],l=w+1,l=l<c.length?c[l].g:null,f.insertBefore(t.g,l)):q--}else if(B!==
l)for(k=l-1;0<=k;k--)-1===h[k]&&(w=k+g,t=c[w],l=w+1,l=l<c.length?c[l].g:null,L(f,l,t,d,e))}}}else{g=l=0;n=b.length-1;for(h=c.length-1;l<=n&&g<=h;){m=b[l];p=c[g];if(!Ia(m,p))break;l++;g++;Ja(f,m,p,d,e)}for(;l<=n&&g<=h;){m=b[n];p=c[h];if(!Ia(m,p))break;n--;h--;Ja(f,m,p,d,e)}for(;l<=n&&g<=h;)m=b[l++],p=c[g++],J(f,m,p,d,e);if(l<=n){do I(f,b[l++]);while(l<=n)}else if(g<=h){b=h+1;b=b<c.length?c[b].g:null;do L(f,b,c[g++],d,e);while(g<=h)}}else if(0<b.length)for(J(f,b[0],c,d,e),g=1;g<b.length;g++)I(f,b[g]);
else L(f,null,c,d,e);else if(g&32)if(h&144)h&16?f.textContent=c:f.innerHTML=c,F(b);else if(h&64)if(0<c.length)for(J(f,b,c[0],d,e),g=1;g<c.length;g++)L(f,null,c[g],d,e);else I(f,b);else J(f,b,c,d,e);else"string"===typeof c?f.value!==c&&(f.value=c):f.checked=c}}else f&8?(e=c.c=b.c,a=c.i,e.b|=1,e.i=a,e.b&128&&(e.b|=4),e.G!==d&&(e.b|=4,e.G=d),a=c.g=Ea(e)):a=c.g=Fa(a,b,c,d,e);return a}function J(a,b,c,d,e){if(Ia(b,c))return Ja(a,b,c,d,e);d=K(a,c,d,e);a.replaceChild(d,b.g);F(b);E(c);return d}
var M=0,Ka=0,La=[],Ma=[],Na=document.createTextNode(""),Oa="__ivi"+Math.random();(new MutationObserver(Pa)).observe(Na,{characterData:!0});window.addEventListener("message",Qa);function Qa(a){if(a.source===window&&a.data===Oa){M&=-3;a=Ma;Ma=[];for(var b=0;b<a.length;b++)a[b]();Ka++}}function Pa(){for(;0<La.length;){var a=La;La=[];for(var b=0;b<a.length;b++)a[b]();Ka++}M&=-2}function Ra(a){0===(M&2)&&(M|=2,window.postMessage(Oa,"*"));Ma.push(a)}function O(){this.J=0;this.j=this.C=null}
O.prototype.N=function(){};O.prototype.I=function(){if(this.C)for(var a=0;this.C.length;a++){var b=this.C[a];0===b.J++&&b.I();null===b.j&&(b.j=[]);b.j.push(this)}};O.prototype.K=function(){if(this.C)for(var a=0;this.C.length;a++){var b=this.C[a];0===--b.J&&b.K();1<b.j.length?b.j[b.j.indexOf(this)]=b.j.pop():b.j=null}};function Ca(a){0===a.J++&&a.I()}function Da(a){0===--a.J&&a.K()}
function Sa(a,b,c){b.currentTarget=a.target;b.a=b.target===a.target?b.a|64:b.a&-65;for(var d=0;d<a.U.length;d++){var e=a.U[d],f=e.b&1;console.log("event",c,!!f);if(c&&f||!c&&!f)if(e.ea(b),b.a&2)break}}function P(a,b,c){O.call(this);this.b=a;this.name=b;this.da=c;this.T=this.N.bind(this);this.B=!1}u(P,O);
P.prototype.N=function(a){for(var b=this.j,c=wa(a),d=[];c;){var e=c,f=e._ev;if(f){for(var g=void 0,h=Object.keys(f),n=0;n<h.length;n++){var m=f[h[n]];m.A===this&&(g?g.push(m):g=[m])}g&&d.push({target:e,U:g})}c=c.parentElement}var p;if(d||b)p=new this.da(0,a,wa(a));if(0<d.length)a:for(a=p,b=!!(this.b&4),c=d.length-1;;){for(;0<=c;)if(console.log("Capture"),Sa(d[c--],a,!0),a.a&1)break a;if(b)for(console.log("Bubble"),a.a|=128,c=0;c<d.length;){if(Sa(d[c++],a,!1),console.log("flags",a.a),a.a&1){console.log("break");
break a}}else a.target===d[0].target&&Sa(d[0],a,!1);break}if(p&&(d=p)&&this.j)for(p=0;p<this.j.length;p++)this.j[p].N(d)};P.prototype.I=function(){this.B?this.B=!1:(O.prototype.I.call(this),document.addEventListener(this.name,this.T,za(this.b)))};P.prototype.K=function(){var a=this;this.B||(this.B=!0,Ra(function(){a.B&&(document.removeEventListener(a.name,a.T,za(a.b)),O.prototype.K.call(a),a.B=!1)}))};function Q(a,b,c){this.a=a;this.f=b;this.currentTarget=this.target=c}
Q.prototype.stopPropagation=function(){this.a|=1};Q.prototype.stopImmediatePropagation=function(){this.a|=3};Q.prototype.preventDefault=function(){this.a|=4};
v.Object.defineProperties(Q.prototype,{defaultPrevented:{configurable:!0,enumerable:!0,get:function(){return!!(this.a&4)}},bubbles:{configurable:!0,enumerable:!0,get:function(){return!!(this.a&8)}},cancelable:{configurable:!0,enumerable:!0,get:function(){return!!(this.a&16)}},isTrusted:{configurable:!0,enumerable:!0,get:function(){return!!(this.a&32)}},eventPhase:{configurable:!0,enumerable:!0,get:function(){return this.a&64?2:this.a&128?3:1}}});function R(a){Q.apply(this,arguments)}u(R,Q);
R.prototype.preventDefault=function(){this.a|=4;this.f.preventDefault()};v.Object.defineProperties(R.prototype,{timeStamp:{configurable:!0,enumerable:!0,get:function(){return this.f.timeStamp}},type:{configurable:!0,enumerable:!0,get:function(){return this.f.type}},AT_TARGET:{configurable:!0,enumerable:!0,get:function(){return this.f.AT_TARGET}},BUBBLING_PHASE:{configurable:!0,enumerable:!0,get:function(){return this.f.BUBBLING_PHASE}},CAPTURING_PHASE:{configurable:!0,enumerable:!0,get:function(){return this.f.CAPTURING_PHASE}}});
function S(a){R.apply(this,arguments)}u(S,R);v.Object.defineProperties(S.prototype,{detail:{configurable:!0,enumerable:!0,get:function(){return this.f.detail}},view:{configurable:!0,enumerable:!0,get:function(){return this.f.view}}});function T(a){S.apply(this,arguments)}u(T,S);T.prototype.getModifierState=function(a){return this.f.getModifierState(a)};
v.Object.defineProperties(T.prototype,{altKey:{configurable:!0,enumerable:!0,get:function(){return this.f.altKey}},char:{configurable:!0,enumerable:!0,get:function(){return this.f.char}},charCode:{configurable:!0,enumerable:!0,get:function(){return this.f.charCode}},ctrlKey:{configurable:!0,enumerable:!0,get:function(){return this.f.ctrlKey}},key:{configurable:!0,enumerable:!0,get:function(){return this.f.key}},keyCode:{configurable:!0,enumerable:!0,get:function(){return this.f.keyCode}},locale:{configurable:!0,
enumerable:!0,get:function(){return this.f.locale}},location:{configurable:!0,enumerable:!0,get:function(){return this.f.location}},metaKey:{configurable:!0,enumerable:!0,get:function(){return this.f.metaKey}},repeat:{configurable:!0,enumerable:!0,get:function(){return this.f.repeat}},shiftKey:{configurable:!0,enumerable:!0,get:function(){return this.f.shiftKey}},which:{configurable:!0,enumerable:!0,get:function(){return this.f.which}},code:{configurable:!0,enumerable:!0,get:function(){return this.f.code}},
V:{configurable:!0,enumerable:!0,get:function(){return this.f.V}},W:{configurable:!0,enumerable:!0,get:function(){return this.f.W}},X:{configurable:!0,enumerable:!0,get:function(){return this.f.X}},Y:{configurable:!0,enumerable:!0,get:function(){return this.f.Y}},Z:{configurable:!0,enumerable:!0,get:function(){return this.f.Z}},$:{configurable:!0,enumerable:!0,get:function(){return this.f.$}}});var Ta=new P(5,"keydown",T);
function U(a,b,c){this.b=0;this.depth=c?c.depth+1:0;this.i=a;this.F=this.G=b;this.M=this.L=this.root=null}U.prototype.R=function(){};v.Object.defineProperties(U.prototype,{context:{configurable:!0,enumerable:!0,get:function(){this.b|=16;return this.F}},v:{configurable:!0,enumerable:!0,get:function(){this.b|=64;return this.i}}});var V=[],Ua={x:-1,y:0},Va={x:1,y:0},Wa={x:0,y:-1},Xa={x:0,y:1};function Ya(a){a=void 0===a?{x:0,y:0}:a;this.body=[];this.P=4;this.body.push(a)}
Ya.prototype.move=function(a){this.body.push(a);if(this.P)return this.P--,null;a=this.body[0];this.body=this.body.splice(1);return a};v.Object.defineProperties(Ya.prototype,{head:{configurable:!0,enumerable:!0,get:function(){return this.body[this.body.length-1]}}});function Za(a,b){a=void 0===a?20:a;b=void 0===b?20:b;this.rows=a;this.cols=b;this.cells=Array(a*b).fill(0)}function W(a,b){return a.cols*b.y+b.x}Za.prototype.mark=function(a,b){this.cells[W(this,a)]|=b};
function $a(a,b){var c=X.l;c.cells[W(c,a)]&=~b}function ab(a){var b;do b=Math.random()*a.cells.length|0;while(0!==a.cells[b]);a.cells[b]|=4}function bb(a,b){return{x:a.x+b.x,y:a.y+b.y}}
function Y(){var a=this;U.apply(this,[].concat(arguments instanceof Array?arguments:ja(ia(arguments))));this.fa={A:Ta,b:0,ea:function(b){switch(b.keyCode){case 37:b.preventDefault();a.v.u=Ua;break;case 38:b.preventDefault();a.v.u=Wa;break;case 39:b.preventDefault();a.v.u=Va;break;case 40:b.preventDefault(),a.v.u=Xa}}}}u(Y,U);
Y.prototype.R=function(){var a=this.v.l;return C(this.v.O?"SnakeGame gameOver":"SnakeGame").children(pa(na(C("Grid").v({tabIndex:0}).style({width:30*a.cols+"px",height:30*a.rows+"px"}),{keys:this.fa}),function(a){a&&a.focus()}).children(a.cells.map(function(a){return C(a&1?a&2?"Cell body head":"Cell body":a&4?"Cell food":"Cell")})))};
var Z=document.getElementById("app"),X=new function(){var a=this;this.O=!1;this.currentTime=this.startTime=0;this.direction={x:1,y:0};this.l=new Za;this.D=new Ya;this.u=null;this.D.body.forEach(function(b){a.l.mark(b,1)});this.l.mark(this.D.head,2);ab(this.l)};
function cb(){if(!X.O){if(X.u){var a=bb(X.direction,X.u);if(0!==a.x||0!==a.y)X.direction=X.u;X.u=null}var a=bb(X.D.head,X.direction),b=X.l.cols,c=X.l.rows,a={x:(a.x%b+b)%b,y:(a.y%c+c)%c};$a(X.D.head,2);(b=X.D.move(a))&&$a(b,1);X.l.mark(a,2);b=X.l;b.cells[W(b,a)]&1?X.O=!0:(b=X.l,b.cells[W(b,a)]&4&&(X.D.P=3,$a(a,4),ab(X.l)));X.l.mark(a,1)}var d,a=new z(Y.prototype.R?8:4,Y,X,null,null);d=void 0===d?sa:d;a:{for(b=0;b<V.length;b++)if(c=V[b],c.aa===Z){b=c;break a}b=void 0}a?b?(d=J(Z,b.S,a,d),b.S=a,b.ca=
d):(d=L(Z,null,a,d),V.push({aa:Z,S:a,ca:d}),la&1&&(Z.onclick=ma)):b&&(I(Z,b.S),d=V.pop(),d!==b&&V.length&&(V[V.indexOf(b)]=d));setTimeout(cb,100)}cb();}).call(this);
