!function(e){var n={};function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);var i=function(){function e(e,n,t,i,r){this.flags=e,this.prev=this,this.next=null,this.children=r,this.tag=n,this.key=0,this.props=t,this.instance=null,this.className=i,this.style=null,this.events=null}return e.prototype.k=function(e){return this.flags|=128,this.key=e,this},e.prototype.s=function(e){return this.style=e,this},e.prototype.e=function(e){return this.flags|=512,this.events=e,this},e.prototype.a=function(e){return this.props=e,this},e.prototype.c=function(){for(var n=arguments,t=null,i=null,r=0,l=0;r<n.length;++r,++l){var a=n[r];if(null!==a){"object"!=typeof a&&(a=new e(1,null,null,void 0,a));var o=a.prev,s=a.flags;if(o===a)0==(128&s)&&(a.key=l);else if(0==(256&s)){var u=a;do{0==(128&u.flags)&&(u.key=l),++l,u=u.next}while(null!==u);--l}null!==i?(a.prev=i,i.next=a):t=a,i=o}}return null!==t&&(t.prev=i,this.flags|=32,this.children=t),this},e.prototype.unsafeHTML=function(e){return this.flags|=64,this.children=e,this},e.prototype.value=function(e){return this.children=e,this},e}();function r(e){return 0!=(49176&e.flags)?r(e.children):e.instance}function l(e,n){if(e.length){for(var t=null,i=null,r=0;r<e.length;++r){var l=n(e[r],r);null!==l&&(null!==i?(l.prev=i,i.next=l):t=l,i=l)}if(null!==t)return t.prev=i,t.flags|=256,t}return null}var a=navigator.userAgent,o=0;function s(){}function u(e,n){var t=e.length-1,i=e.pop();n!==t&&(e[n]=i)}!/iPad|iPhone|iPod/.test(a)||"MSStream"in window||(o|="standalone"in navigator?3:1),a.indexOf("Android")>-1&&(o|=4);var c=[];function d(e){return function(){try{return e.apply(null,arguments)}catch(e){for(var n=0;n<c.length;++n)c[n](e);throw e}}}function f(e){for(var n=0;n<e.length;++n)!0===e[n]()&&u(e,n--)}function h(e){var n=e.tasks;e.tasks=[];for(var t=0;t<n.length;++t)n[t]()}var p,v=0,m={tasks:[]},g={tasks:[]},x=[],y=[],w=[],b=s,k={flags:0,write:{tasks:[]},read:{tasks:[]},after:{tasks:[]}},M={flags:0,write:{tasks:[]},read:{tasks:[]},after:{tasks:[]}},T=null,C=d(function(){for(;m.tasks.length>0;)h(m);v^=4});(new MessageChannel).port1.onmessage=d(function(e){v^=8,h(g)});var _=d(function(){var e=p();if(0!=(1&v)!==e){v^=3,!1===e&&y.length>0&&H();for(var n=x,t=0;t<n.length;++t)n[t](e);v^=2}});function E(e){void 0===e&&performance.now()}function N(){16&v&&requestAnimationFrame(A)}function H(){var e;16&v||(e=N,4&(v|=16)||(v|=4,Promise.resolve().then(C)),m.tasks.push(e))}void 0!==document.hidden?(p=function(){return document.hidden},document.addEventListener("visibilitychange",_)):void 0!==document.webkitHidden?(p=function(){return document.webkitHidden},document.addEventListener("webkitvisibilitychange",_)):p=function(){return!0},!0===p()&&(v|=1),E();var A=d(function(e){v^=48,E(e);var n=M;M=k,k=n,f(w);do{for(;4&n.flags;)n.flags^=4,h(n.read);for(;3&n.flags;)2&n.flags&&(n.flags^=2,h(n.write)),1&n.flags&&(n.flags^=1,b())}while(7&n.flags);for(1&(v^=32)||f(y);8&n.flags;)n.flags^=8,h(n.after);null!==T&&(T.focus(),T=null),y.length&&H()});function S(){16&v&&A()}Object.setPrototypeOf||Array;var O=Object.assign||function(e){for(var n,t=1,i=arguments.length;t<i;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},F=Node.prototype,L=Element.prototype,P=(Object.prototype.hasOwnProperty,F.insertBefore),V=F.removeChild,q=F.replaceChild,j=F.cloneNode,R=L.setAttribute,I=L.setAttributeNS,U=L.removeAttribute,B="http://www.w3.org/2000/svg",Q="http://www.w3.org/1999/xlink",G="http://www.w3.org/XML/1998/namespace";function z(e){e.source.addListener(e)}function D(e){e.source.removeListener(e)}function W(e){if(e instanceof Array)for(var n=0;n<e.length;++n){var t=e[n];null!==t&&z(t)}else z(e)}function J(e){if(e instanceof Array)for(var n=0;n<e.length;++n){var t=e[n];null!==t&&D(t)}else D(e)}function K(e,n){e._ev=n}function X(e,n,t){var i,r,l=e.style;if(null===n)for(i in t)void 0!==(r=t[i])&&l.setProperty(i,r);else if(null!==t)for(i in t)r=t[i],n[i]!==r&&(void 0!==r?l.setProperty(i,r):l.removeProperty(i))}function Y(e,n,t,i){if("boolean"==typeof i){if(!i)return;i=""}if(!0===n&&t.length>5&&120===t.charCodeAt(0)&&(58===t.charCodeAt(3)||58===t.charCodeAt(5))){if(t.startsWith("xml:"))return void I.call(e,G,t,i);if(t.startsWith("xlink:"))return void I.call(e,Q,t,i)}R.call(e,t,i)}function Z(e,n,t,i){var r,l;if(null===t)for(r in i)void 0!==(l=i[r])&&Y(e,n,r,l);else if(null!==i)for(r in i)l=i[r],t[r]!==l&&(void 0!==l?Y(e,n,r,l):U.call(e,r))}function $(e,n){V.call(e,r(n)),ne(n)}function ee(e){var n=e.flags;if(0!=(544&n)){if(0!=(32&n)){var t=e.children;do{ee(t),t=t.next}while(null!==t)}0!=(512&n)&&null!==e.events&&W(e.events)}else 0!=(49176&n)&&(0!=(16&n)&&e.instance.attached(),ee(e.children))}function ne(e){var n=e.flags;if(0!=(544&n)){if(0!=(32&n)){var t=e.children;do{ne(t),t=t.next}while(null!==t)}0!=(512&n)&&null!==e.events&&J(e.events)}else if(0!=(49176&n)&&(ne(e.children),0!=(16&n))){var i=e.instance;i.flags|=1,i.detached()}}function te(e,n,t,i){var r,l,a=n.flags,o=0;if((-2147434440&a)>0)if(r=n.children,0!=(32&a)){l=n.instance;do{o|=te(l,r,t,i),r=r.next}while(null!==r)}else if(0!=(16&a))0!=(6&(l=n.instance).flags)?(se(e,r,n.children=l.render(),t,i),l.flags&=-7,l.updated(!0),o=1):0!==(o=te(e,r,t,i))&&l.updated(!1);else if(0!=(16384&a)){var s=n.tag;l=n.instance;var u=s.select(l,n.props,t);l===u?o=te(e,r,t,i):(o=1,n.instance=u,se(e,r,n.children=s.render(u),t,i))}else 0!=(32768&a)&&(!0===i&&(n.instance=O({},t,n.props)),t=n.instance),o=te(e,r,t,i);return o}function ie(e,n){e.textContent="";var t=n;do{ne(t),t=t.next}while(null!==t)}function re(e,n){"string"==typeof n?e.value=n:e.checked=n}function le(e,n,t){var i,r=n.flags,l=null;if(0!=(1&r))l=i=document.createTextNode(n.children);else{if(0!=(18&r))if(0!=(2&r)){var a=0!=(8192&r);if(0==(4&r)){var o=n.tag;i=a?document.createElementNS(B,o):document.createElement(o)}else{var s=n.tag;null===s.instance&&le(e,s,t),i=j.call(s.instance,!1)}void 0!==n.className&&(!0===a?R.call(i,"class",n.className):i.className=n.className),null!==n.props&&Z(i,a,null,n.props),null!==n.style&&X(i,null,n.style),null!==n.events&&K(i,n.events);var u=n.children;if(null!==u)if(0!=(32&r)){u=u;do{P.call(i,le(i,u,t),null),u=u.next}while(null!==u)}else 0!=(3072&r)?re(i,u):i.innerHTML=u;l=i}else{var c=l=new n.tag(n.props);i=le(e,n.children=c.render(),t)}else{if(0!=(49152&r))if(0!=(16384&r)){var d=n.tag,f=l=d.select(null,n.props,t);n.children=d.render(f)}else t=l=O({},t,n.props);else n.children=n.tag.render(n.props);i=le(e,n.children,t)}0!=(131072&r)&&function(e){e instanceof Element&&(T=e)}(i)}return n.instance=l,i}function ae(e,n,t,i){var r=le(e,t,i);return P.call(e,r,n),ee(t),r}function oe(e,n){return e.key===n.key&&0==(128&(e.flags^n.flags))}function se(e,n,t,i,l){if(n!==t){var a,o=t.flags;if(0!=(134020319&(n.flags^t.flags))||0!=(16412&n.flags)&&n.tag!==t.tag||n.key!==t.key)a=le(e,t,i),q.call(e,a,r(n)),ne(n),ee(t);else if(t.instance=a=n.instance,0!=(3&o))if(0!=(1&o))n.children!==t.children&&(a.nodeValue=t.children);else{var s=0!=(8192&o);if(n.className!==t.className){var u=void 0===t.className?"":t.className;!0===s?R.call(a,"class",u):a.className=u}n.props!==t.props&&Z(a,s,n.props,t.props),n.style!==t.style&&X(a,n.style,t.style),n.events!==t.events&&(function(e,n){var t,i,r;if(null===e)W(n);else if(null===n)J(e);else if(e instanceof Array)if(n instanceof Array){for(t=0;t<e.length&&t<n.length;)(i=e[t])!==(r=n[t++])&&(null!==r&&z(r),null!==i&&D(i));for(;t<n.length;)null!==(i=n[t++])&&z(i);for(;t<e.length;)null!==(i=e[t++])&&D(i)}else for(z(n),t=0;t<e.length;++t)null!==(i=e[t])&&D(i);else W(n),D(e)}(n.events,t.events),K(a,t.events));var c=n.children,d=t.children;if(c!==d){var f=n.flags;if(null===c)if(0!=(32&o)){d=d;do{ae(a,null,d,i),d=d.next}while(null!==d)}else 0!=(3072&o)?re(a,d):a.innerHTML=d;else null===d?0!=(32&f)?ie(a,c):0!=(64&f)&&(a.textContent=""):0!=(32&f)?function(e,n,t,i,l){var a,o,s,u,c,d=n,f=t,h=n.prev,p=t.prev,v=0,m=0;e:for(;;){for(;!0===oe(d,f);)if(se(e,d,f,i,l),v++,d===h?m|=1:d=d.next,f===p?m|=2:f=f.next,m)break e;for(;!0===oe(h,p);)if(se(e,h,p,i,l),v++,d===h?m|=1:h=h.prev,f===p?m|=2:p=p.prev,m)break e;break}if(m){if(3!==m)if(1===m){c=null===p.next?null:r(p.next);do{ae(e,c,f,i),f=f.next}while(f!==p.next)}else do{$(e,d),d=d.next}while(d!==h.next)}else{var g=0,x=0,y=!1,w=void 0,b=void 0;o=f;do{128&o.flags?(void 0===w&&(w=new Map),w.set(o.key,x)):(void 0===b&&(b=new Map),b.set(o.key,x)),x++,o=o.next}while(o!==p.next);var k=new Array(x),M=new Array(x).fill(-1);for(o=f,s=0;s<x;s++)k[s]=o,o=o.next;var T=0;s=0,a=d;do{void 0===(u=128&a.flags?w?w.get(a.key):void 0:b?b.get(a.key):void 0)?a.key=null:(M[u]=g,s>u?y=!0:s=u,se(e,a,o=k[u],i,l),T++),g++,a=a.next}while(a!==h.next);if(v||T){for(s=g-T;s>0;)null===d.key&&($(e,d),s--),d=d.next;if(y){var C=function(e){var n,t,i=e.slice(),r=[];r.push(0);for(var l=0,a=e.length;l<a;++l)if(-1!==e[l]){var o=r[r.length-1];if(e[o]<e[l])i[l]=o,r.push(l);else{for(n=0,t=r.length-1;n<t;){var s=(n+t)/2|0;e[r[s]]<e[l]?n=s+1:t=s}e[l]<e[r[n]]&&(n>0&&(i[l]=r[n-1]),r[n]=l)}}for(t=r[(n=r.length)-1];n-- >0;)r[n]=t,t=i[t];return r}(M);for(u=C.length-1,o=p,s=x-1;s>=0;s--)-1===M[s]?ae(e,c=null===o.next?null:r(o.next),o,i):u<0||s!==C[u]?(c=null===o.next?null:r(o.next),P.call(e,r(o),c)):u--,o=o.prev}else if(T!==x)for(o=p,s=x-1;s>=0;s--)-1===M[s]&&ae(e,c=null===o.next?null:r(o.next),o,i),o=o.prev}else for(ie(e,n);f!==p.next;)ae(e,null,f,i),f=f.next}}(a,c,d,i,l):0!=(64&f)?a.innerHTML=d:"string"==typeof d?a.value!==d&&(a.value=d):a.checked=d}}else if(0!=(16&o)){var h=a,p=n.props,v=t.props;p!==v&&h.newPropsReceived(p,v),h.props=v,0!=(6&h.flags)||!0===h.shouldUpdate(p,v)?(se(e,n.children,t.children=h.render(),i,l),h.flags&=-7,h.updated(!0)):0!==te(e,t.children=n.children,i,l)&&h.updated(!1)}else{var m=t.tag;if(0!=(49152&o))if(0!=(16384&o)){var g=t.tag,x=a,y=g.select(x,t.props,i);t.instance=y,x===y?(t.children=n.children,te(e,t.children,i,l)):se(e,n.children,t.children=g.render(y),i,l)}else n.props!==t.props&&(l=!0),t.instance=i=!0===l?O({},i,t.props):a,se(e,n.children,t.children,i,l);else n.props===t.props||0!=(65536&o)&&!0!==m.shouldUpdate(n.props,t.props)?(t.children=n.children,te(e,t.children,i,l)):se(e,n.children,t.children=m.render(t.props),i,l)}}else te(e,t,i,l)}KeyboardEvent.prototype,MouseEvent.prototype,window,window,UIEvent.prototype;var ue=[],ce={},de=!1;function fe(){if(de){de=!1,b=he;for(var e=0;e<ue.length;++e){var n=ue[e],t=n.container,i=n.currentVNode;if(n.invalidated){var r=n.newVNode;r?(i?se(t,i,r,ce,!1):(ae(t,null,r,ce),1&o&&(t.onclick=s)),n.currentVNode=r):i&&($(t,i),u(ue,ue.indexOf(n)),--e),n.newVNode=null,n.invalidated=!1}else i&&te(t,i,ce,!1)}}}function he(){pe(),S()}function pe(){var e;de||(de=!0,e=fe,H(),function(e,n){e.flags|=2,e.write.tasks.push(n)}(M,e))}function ve(e){var n={render:e,shouldUpdate:null};return function(e){return new i(8,n,e,void 0,null)}}function me(e){return new i(15728642,"div",null,e,null)}function ge(e){return new i(54001666,"td",null,e,null)}var xe,ye=function(){function e(e,n){this.elapsed=e,this.query=n}return e.rand=function(){return new e(15*Math.random(),Math.random()<.1?"vacuum":Math.random()<.2?"<IDLE> in transaction":"SELECT blah FROM something")},e}(),we=new ye(0,"***"),be=function(){function e(n){this.id=e._nextId++,this.name=n,this.queries=null,this.update()}return e.prototype.update=function(){for(var e=[],n=Math.floor(10*Math.random()+1),t=0;t<n;t++)e.push(ye.rand());this.queries=e},e.prototype.getTopFiveQueries=function(){var e=this.queries.slice(0,5);for(e.sort(function(e,n){return e.elapsed-n.elapsed});e.length<5;)e.push(we);return e},e._nextId=0,e}(),ke=function(){function e(e){this.dbs=[];for(var n=0;n<e;n++)this.dbs.push(new be("cluster"+(n+1))),this.dbs.push(new be("cluster"+(n+1)+" slave"))}return e.prototype.update=function(){for(var e=this.dbs,n=0;n<e.length;n++)e[n]=new be(e[n].name)},e.prototype.randomUpdate=function(e){for(var n=this.dbs,t=0;t<n.length;t++)Math.random()<e&&(n[t]=new be(n[t].name))},e}(),Me=function(e,n,t,i){this.min=e,this.max=n,this.mean=t,this.last=i},Te=function(){function e(e){this.samples=[],this.maxSamples=e,this._i=-1}return e.prototype.addSample=function(e){this._i=(this._i+1)%this.maxSamples,this.samples[this._i]=e},e.prototype.each=function(e){for(var n=this.samples,t=0;t<n.length;t++)e(n[(this._i+1+t)%n.length],t)},e.prototype.calc=function(){var e=this.samples;if(0===e.length)return new Me(0,0,0,0);for(var n=e[(this._i+1)%e.length],t=n,i=0,r=0;r<e.length;r++){var l=e[(this._i+1+r)%e.length];l<n&&(n=l),l>t&&(t=l),i+=l}var a=e[this._i],o=i/e.length;return new Me(n,t,o,a)},e}(),Ce=[],_e=-1,Ee=function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])};return function(n,t){function i(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}}(),Ne=30,He=100,Ae=function(){function e(e){var n=this;this._sync=function(){n.sync(),n._dirty=!1},this.name=e,this.element=document.createElement("div"),this.element.style.cssText="padding: 2px;background-color: #020;font-family: monospace;font-size: 12px;color: #0f0",this._dirty=!1,this.invalidate()}return e.prototype.invalidate=function(){var e;this._dirty||(this._dirty=!0,e=this._sync,Ce.push(e),-1===_e&&requestAnimationFrame(function(e){_e=-1;var n=Ce;Ce=[];for(var t=0;t<n.length;t++)n[t]()}))},e.prototype.sync=function(){throw new Error("sync method not implemented")},e}();!function(e){e[e.HideMin=1]="HideMin",e[e.HideMax=2]="HideMax",e[e.HideMean=4]="HideMean",e[e.HideLast=8]="HideLast",e[e.HideGraph=16]="HideGraph",e[e.RoundValues=32]="RoundValues"}(xe||(xe={}));var Se=function(e){function n(n,t,i,r){var l=e.call(this,n)||this;l.flags=t,l.unitName=i,l.samples=r;var a=document.createElement("div");a.style.cssText="text-align: center",a.textContent=l.name;var o=document.createElement("div");return 0==(t&xe.HideMin)?(l.minText=document.createElement("div"),o.appendChild(l.minText)):l.minText=null,0==(t&xe.HideMax)?(l.maxText=document.createElement("div"),o.appendChild(l.maxText)):l.maxText=null,0==(t&xe.HideMean)?(l.meanText=document.createElement("div"),o.appendChild(l.meanText)):l.meanText=null,0==(t&xe.HideLast)?(l.lastText=document.createElement("div"),o.appendChild(l.lastText)):l.lastText=null,l.element.appendChild(a),l.element.appendChild(o),0==(t&xe.HideGraph)?(l.canvas=document.createElement("canvas"),l.canvas.style.cssText="display: block; padding: 0; margin: 0",l.canvas.width=He,l.canvas.height=Ne,l.ctx=l.canvas.getContext("2d"),l.element.appendChild(l.canvas)):(l.canvas=null,l.ctx=null),l}return Ee(n,e),n.prototype.sync=function(){var e,n,t,i,r=this,l=this.samples.calc(),a=Ne/(1.2*l.max);0==(this.flags&xe.RoundValues)?(e=l.min.toFixed(2),n=l.max.toFixed(2),t=l.mean.toFixed(2),i=l.last.toFixed(2)):(e=Math.round(l.min).toString(),n=Math.round(l.max).toString(),t=Math.round(l.mean).toString(),i=Math.round(l.last).toString()),null!==this.minText&&(this.minText.textContent="min:  "+e+this.unitName),null!==this.maxText&&(this.maxText.textContent="max:  "+n+this.unitName),null!==this.meanText&&(this.meanText.textContent="mean: "+t+this.unitName),null!==this.lastText&&(this.lastText.textContent="last: "+i+this.unitName),null!==this.ctx&&(this.ctx.fillStyle="#010",this.ctx.fillRect(0,0,He,Ne),this.ctx.fillStyle="#0f0",this.samples.each(function(e,n){r.ctx.fillRect(n,Ne,1,-e*a)}))},n}(Ae),Oe=(function(e){function n(n,t){var i=e.call(this,n)||this;return i.counter=t,i.text=document.createElement("div"),i.element.appendChild(i.text),i}Ee(n,e),n.prototype.sync=function(){this.text.textContent=this.name+": "+this.counter.value}}(Ae),null);function Fe(){Oe||((Oe=document.createElement("div")).style.cssText="position: fixed;opacity: 0.9;right: 0;bottom: 0",document.body.appendChild(Oe))}var Le={},Pe=.5,Ve=50,qe=function(e){if(0===e.length)return{};for(var n={},t=0;t<e.length;++t){var i=e[t].split("=",2);1===i.length?n[i[0]]="":n[i[0]]=decodeURIComponent(i[1].replace(/\+/g," "))}return n}(window.location.search.substr(1).split("&"));void 0!==qe.n&&(Ve=parseInt(qe.n,10)),void 0!==qe.m&&(Pe=parseFloat(qe.m));var je,Re=new ke(Ve),Ie=ve(function(e){return me("popover left").c(me("popover-content").c(e),me("arrow"))}),Ue=(je={select:function(e,n){var t=Re.dbs[n];return e&&e.db===t?e:{db:t}},render:function(e){var n=e.db,t=n.getTopFiveQueries(),r=n.queries.length;return new i(58195970,"tr",null,void 0,null).c(ge("dbname").c(n.name),ge("query-count").c(function(e){return new i(49807362,"span",null,e,null)}(function(e){return e>=20?"label label-important":e>=10?"label label-warning":"label label-success"}(r)).c(r)),l(t,function(e,n){return ge((t=e.elapsed,t>0?t>=10?"Query elapsed warn_long":t>=1?"Query elapsed warn":"Query elapsed short":"")).k(n).c(function(e){if(0===e)return"";if(e>60){var n=Math.floor(e/60),t=(e%60).toFixed(2).split(".");return n+":"+t[0]+"."+t[1]}return e.toFixed(2)}(e.elapsed),Ie(e.query));var t}))}},function(e){return new i(16384,je,e,void 0,null)}),Be=ve(function(e){return(n="table table-striped latest-data",new i(52953090,"table",null,n,null)).c(new i(53477378,"tbody",null,void 0,null).c(l(e.dbs,function(e,n){return Ue(n).k(e.id)})));var n});document.addEventListener("DOMContentLoaded",function(){!function(e){void 0===e&&(e=xe.HideMin|xe.HideMax|xe.HideMean|xe.RoundValues),Fe();var n=new Te(100),t=new Se("FPS",e,"",n);Oe.appendChild(t.element);var i=0,r=60;requestAnimationFrame(function e(l){i>0&&(r+=2/121*(1e3/(l-i)-r)),i=l,n.addSample(r),t.invalidate(),requestAnimationFrame(e)})}(),function(e){if(void 0===e&&(e=xe.HideMin|xe.HideMean),Fe(),void 0!==performance.memory){var n=new Te(100),t=new Se("Memory",e,"MB",n);Oe.appendChild(t.element),function e(){n.addSample(Math.round(performance.memory.usedJSHeapSize/1048576)),t.invalidate(),setTimeout(e,30)}()}}(),function(e,n){void 0===n&&(n=0),Fe();var t=Le[e];void 0===t&&(Le[e]=t=new function(e,n,t){this.data=new Te(100),this.widget=new Se(e,t,n,this.data),this.startTime=-1}(e,"ms",n),Oe.appendChild(t.widget.element))}("view update");var e=document.createElement("div");e.style.display="flex";var n=document.createElement("input");n.type="range",n.style.marginBottom="10px",n.style.marginTop="5px";var t=document.createElement("label");t.textContent="mutations : "+(100*Pe).toFixed(0)+"%",n.addEventListener("change",function(e){Pe=Number.parseFloat(e.target.value)/100,t.textContent="mutations : "+(100*Pe).toFixed(0)+"%"}),e.appendChild(t),e.appendChild(n),document.body.insertBefore(e,document.body.firstChild);var i=document.getElementById("app");(function(e,n){!function(e,n){var t=function(e){for(var n=0;n<ue.length;++n){var t=ue[n];if(t.container===e)return t}}(n);t?(t.newVNode=e,t.invalidated=!0):ue.push({container:n,currentVNode:null,newVNode:e,invalidated:!0}),pe()}(e,n),S()})(Be(Re),i),setTimeout(function e(){var n;Re.randomUpdate(Pe),void 0!==(n=Le["view update"])&&(n.startTime=performance.now()),he(),function(e){var n=performance.now(),t=Le["view update"];void 0!==t&&-1!==t.startTime&&(t.data.addSample(n-t.startTime),t.widget.invalidate())}(),setTimeout(e,0)},0)})}]);