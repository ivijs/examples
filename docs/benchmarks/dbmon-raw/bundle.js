!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([,function(t,e,n){"use strict";n.r(e);const o=Node.prototype,i=Element.prototype,r=(Object.prototype.hasOwnProperty,o.insertBefore,o.removeChild,o.replaceChild,o.cloneNode,i.setAttribute,i.setAttributeNS,void i.removeAttribute),a=(t,e)=>({flags:t,descriptor:e}),l=(a(16,null),a(128,null),a(32,null),a(520,null)),s=(t,e)=>({type:t,data:e}),c=(t,e)=>({k:t,v:e}),d=t=>s(l,t),u=requestAnimationFrame,f=t=>{Promise.resolve().then(t)};function p(t,e){const n=t.length-1,o=t.pop();e!==n&&(t[e]=o)}function h(t,e){const n=t.indexOf(e);p(t,n)}function m(t){for(let e=0;e<t.length;++e)!0===t[e]()&&p(t,e--)}const v=()=>{},g=[];function y(t){return function(){try{return t.apply(void 0,arguments)}catch(e){throw g.forEach(t=>{t(e)}),e}}}(()=>{let t=!1;try{const n=Object.defineProperty({},"passive",{get(){t=!0}});window.addEventListener("test",null,n)}catch(e){}})(),KeyboardEvent.prototype.hasOwnProperty("key"),MouseEvent.prototype.hasOwnProperty("buttons"),window,window,window;const x="GestureEvent"in window,b="http://www.w3.org/2000/svg",w=t=>({op:t,flags:0,children:null,state:null});function M(t){return 0===(3&t.flags)?M(t.children):t.state}let C,T,_,E,S,O,k={};function H(t){const e=k;return k=t,e}function A(t){k=t}function j(){return k}function N(){const t=_;return _=0,t}function F(t,e){const n=e|_;return _|=t,n}function P(t,e){const{flags:n,children:o}=e;let i;if(0!==(4&n)){const i=e.state,r=N();0!==(1024&n)||0!==(2048&n)&&!0===i.dirtyCheck(j())?e.children=Q(t,o,i.update(e.op.data)):P(t,o),e.flags=7167&e.flags|_,_|=r|(6144&e.flags)<<2}else{const r=N();if(0!==(3&n)){const r=e.state;if(!0===S&&(S=!1,t.insertBefore(r,C)),null!==o)if(0!==(512&n))for(i=0;i<o.length;i++){const t=o[i];null!==t&&P(r,t)}else O=!0,P(r,o),O=!1;C=r}else if(0!==(8&n))for(i=o.length;--i>=0;)P(t,o[i]);else if(0!==(144&n))P(t,e.children);else{!0===E&&(e.state=Object.assign({},j(),e.op.data.data));const n=H(e.state);P(t,e.children),A(n)}e.flags=F(r,e.flags)}}function q(t){const e=t.flags;let n;if(0!==(16384&e)){const o=t.children;if(null!==o)if(0!==(512&e))for(n=0;n<o.length;n++){const t=o[n];"object"===typeof t&&null!==t&&q(t)}else q(o)}if(0!==(4&e)){const e=t.state.unmount;if(null!==e)if("function"===typeof e)e();else for(n=0;n<e.length;n++)e[n](!0)}}function B(t,e){if(0!==(8&e.flags)){const n=e.children;for(let e=0;e<n.length;e++)t.removeChild(M(n[e]))}else t.removeChild(M(e));q(e)}function L(t,e,n){const o=document.createTextNode(n);t.insertBefore(o,C),C=o,e.state=o,e.flags=1}function R(t,e){const n=e.type,o=0!==(256&n.flags);void 0===t&&(t=o?document.createElementNS(b,n.descriptor):document.createElement(n.descriptor));const{className:i,attrs:r}=e.data;return i&&(o?t.setAttribute("class",i):t.className=i),void 0!==r&&W(t,void 0,r),t}function V(t,e,n){const o=n.type,i=n.data,r=o.flags;if(0!==(2&r)){let a;const l=o.descriptor;0!==(64&r)&&(null===l.node&&(l.node=R(void 0,l.proto)),a=l.node.cloneNode(!1)),a=R(a,n);let s=null,c=r;const d=i.children,u=C;if(C=null,null!==d){const t=N();d instanceof Array?(c|=512,G(a,d,s=[])):s=I(a,d),c=F(t,c)}t.insertBefore(a,u),e.flags=c,e.children=s,e.state=a,C=a}else if(0!==(4&r)){const o={update:null,dirtyCheck:null,unmount:null};e.state=o;const a=o.update=n.type.descriptor.c(e),l=N();e.children=I(t,a(i)),e.flags=7167&e.flags|r|_,_|=l|(6144&e.flags)<<2}else if(0!==(176&r)){const n=N();if(0!==(32&r)){const n=H(e.state=Object.assign({},j(),i.data));e.children=I(t,i.child),A(n)}else 0!==(128&r)&&(i.data.v=e),e.children=I(t,i.child);e.flags=F(n,r)}else{const n=i,o=new Array(n.length);let a=n.length;const l=N();for(;--a>=0;)o[a]=I(t,n[a].v);e.flags=F(l,r),e.children=o}}function G(t,e,n){let o=e.length;for(;--o>=0;){const i=e[o];i instanceof Array?G(t,i,n):n.push(I(t,i))}}function I(t,e){if(null!==e){const n=w(e);return"object"===typeof e?V(t,n,e):L(t,n,e),n}return null}function Q(t,e,n){if(null===n)return B(t,e),null;const o=e.op;if(o===n)return P(t,e),e;if(e.op=n,typeof o!==typeof n||"object"===typeof o&&o.type!==n.type)return B(t,e),I(t,n);const i=e.flags,r=e.children,a=e.state;let l;if(0!==(3&i)){if(!0===S&&(S=!1,t.insertBefore(a,C)),0!==(1&i))a.nodeValue=n;else{const t=o.data,s=n.data;let c=s.className;t.className!==c&&(void 0===c&&(c=""),0!==(256&i)?a.setAttribute("class",c):a.className=c),t.attrs!==s.attrs&&W(a,t.attrs,s.attrs);const d=s.children;l=N(),t.children!==d&&(C=null,0!==(512&i)?(T=0,z(a,r,d)):(O=!0,e.children=null===r?I(a,d):Q(a,r,d),O=!1)),e.flags=F(l,e.flags)}return C=a,e}if(0!==(4&i)){const o=n.data;return l=N(),e.children=Q(t,r,e.state.update(o)),e.flags=7167&e.flags|_,_|=l|(6144&e.flags)<<2,e}if(l=N(),0!==(8&i)){const i=n.data;if(0===i.length){if(!0===O){t.textContent="";for(let t=0;t<r.length;t++)q(r[t])}else for(let e=0;e<r.length;e++)B(t,r[e]);e.children=[]}else{if(0===r.length)return I(t,n);e.children=D(t,e.children,o.data,i)}}else if(0!==(144&i))e.children=Q(t,e.children,n.data.child);else{const i=E;o.data.data===n.data.data&&!0!==E||(e.state=Object.assign({},j(),n.data.data),E=!0);const r=H(e.state);Q(t,e.children,n.data.child),A(r),E=i}return e.flags=F(l,e.flags),e}function z(t,e,n){let o=n.length;for(;--o>=0;){let i=T;const r=n[o];if(r instanceof Array)z(t,e,r);else{const n=e[i];e[i]=null===n?I(t,r):Q(t,n,r),T=++i}}}function D(t,e,n,o){const i=new Array(o.length);let r,a,l,s=n[0],c=o[0],d=0,u=n.length-1,f=o.length-1,p=n[u],h=o[f];t:for(;;){for(;p.k===h.k;){if(i[f]=Q(t,e[u--],h.v),d>--f||d>u)break t;p=n[u],h=o[f]}for(;s.k===c.k;){if(++d>u||d>f)break t;s=n[d],c=o[d]}break}if(d>u)for(;f>=d;)i[f]=I(t,o[f--].v);else if(d>f){r=d;do{B(t,e[r++])}while(r<=u)}else{const s=u-d+1,c=f-d+1,p=e,h=new Array(c);for(r=0;r<c;++r)h[r]=-1;let m=0,v=0;const g=new Map;for(a=d;a<=f;++a)g.set(o[a].k,a);for(r=d;r<=u&&v<c;++r)void 0!==(a=g.get(n[r].k))&&(m=m>a?1e6:a,++v,h[a-d]=r,i[a]=e[r],p[r]=null);if(s===n.length&&0===v){if(!0===O)for(t.textContent="",r=d;r<=u;r++)q(e[r]);else for(r=d;r<=u;r++)B(t,e[r]);for(;f>=0;)i[f]=I(t,o[f--].v)}else{for(r=d;r<=u;r++)null!==(l=e[r])&&B(t,l);let n;if(1e6===m){const e=J(h);for(a=e.length-1,r=c;--r>=0;)n=o[m=d+r].v,-1===h[r]?i[m]=I(t,n):(l=i[m],a<0||r!==e[a]?S=!0:--a,i[m]=Q(t,l,n),S=!1)}else for(r=c;--r>=0;)n=o[m=d+r].v,i[m]=-1===h[r]?I(t,n):Q(t,i[m],n)}}for(;--d>=0;)i[d]=Q(t,e[d],o[d].v);return i}function J(t){const e=t.slice(),n=[];n[0]=0;let o,i,r,a=0;for(let l=0;l<t.length;++l){const s=t[l];if(-1!==s)if(t[r=n[a]]<s)e[l]=r,n[++a]=l;else{for(o=0,i=a;o<i;)t[n[r=(o+i)/2|0]]<s?o=r+1:i=r;s<t[n[o]]&&(o>0&&(e[l]=n[o-1]),n[o]=l)}}for(i=n[a];a>=0;)n[a--]=i,i=e[i];return n}function K(t,e,n){const o=t.style;let i,r;if(void 0===e)for(i in n)void 0!==(r=n[i])&&o.setProperty(i,r);else if(void 0!==n)for(i in n)r=n[i],e[i]!==r&&(void 0!==r?o.setProperty(i,r):o.removeProperty(i))}function U(t,e,n,o){n!==o&&("style"!==e?"object"===typeof o?o.u(t,e,void 0===n?void 0:n.v,o.v):("boolean"===typeof o&&(o=o?"":void 0),void 0===o?t.removeAttribute(e):t.setAttribute(e,o)):K(t,n,o))}function W(t,e,n){let o;if(void 0===e)for(o in n)U(t,o,void 0,n[o]);else if(void 0!==n)for(o in n)U(t,o,e[o],n[o])}const X=[],Y=t=>X.find(e=>e.container===t);function Z(){for(let t=0;t<X.length;++t){const e=X[t],{container:n,state:o,next:i}=e;e.next=void 0,C=null,T=0,_=0,E=!1,S=!1,O=!1,i?o?e.state=Q(n,o,i):(e.state=I(n,i),x&&(n.onclick=v)):o&&(null===i?(B(n,o),h(X,e),--t):P(n,o))}}function $(t){for(;t.v.length>0;){const e=t.v;let n=0;t.v=[];do{e[n++]()}while(n<e.length)}}let tt=0;const et={v:[]},nt={v:[]},ot={v:[]},it=[],rt=[];let at=0;const lt=t=>y(function(){tt|=1,t.apply(void 0,arguments),$(et),tt&=-4}),st=lt(v),ct=t=>lt(e=>{tt|=16,t(e),0!==(4&tt)&&(at=void 0===e?performance.now():e,m(it),0!==(32&tt)&&Z(),$(nt),m(rt),$(ot)),tt&=-61}),dt=ct(v);function ut(t){var e;void 0!==t&&0!==(1&t)&&0===(8&tt)?0===(16&(tt|=12))&&(e=dt,et.v.push(e),0===(3&tt)&&(tt|=2,f(st))):0===(4&tt)&&0===(16&(tt|=4))&&u(dt)}function ft(t){tt|=32,ut(t)}function pt(t,e,n){const o=Y(e);o?o.next=t:X.push({container:e,next:t,state:null}),ft(n)}function ht(t,e){const n=a(!0===e?258:2,t);return(t,e,o=null)=>s(n,{className:t,attrs:e,children:o})}const mt=t=>ht(t,!1);mt("a"),mt("abbr"),mt("address"),mt("article"),mt("aside"),mt("b"),mt("base"),mt("bdo"),mt("blockquote"),mt("body"),mt("br"),mt("button"),mt("canvas"),mt("caption"),mt("cite"),mt("code"),mt("col"),mt("colgroup"),mt("del"),mt("dfn");const vt=mt("div"),gt=(mt("dd"),mt("dl"),mt("dt"),mt("em"),mt("fieldset"),mt("figcaption"),mt("figure"),mt("footer"),mt("form"),mt("h1"),mt("h2"),mt("h3"),mt("h4"),mt("h5"),mt("h6"),mt("head"),mt("header"),mt("hgroup"),mt("hr"),mt("html"),mt("i"),mt("iframe"),mt("img"),mt("area"),mt("map"),mt("ins"),mt("kbd"),mt("label"),mt("legend"),mt("li"),mt("link"),mt("main"),mt("mark"),mt("menu"),mt("meta"),mt("meter"),mt("nav"),mt("noscript"),mt("ol"),mt("optgroup"),mt("option"),mt("p"),mt("picture"),mt("pre"),mt("progress"),mt("q"),mt("rt"),mt("ruby"),mt("s"),mt("samp"),mt("script"),mt("section"),mt("select"),mt("source"),mt("span")),yt=(mt("strong"),mt("style"),mt("sub"),mt("sup"),mt("table")),xt=mt("tbody"),bt=mt("td"),wt=(mt("template"),mt("tfoot"),mt("th"),mt("thead"),mt("time"),mt("title"),mt("tr"));mt("track"),mt("u"),mt("ul"),mt("wbr"),mt("textarea"),mt("input"),mt("audio"),mt("video");var Mt,Ct,Tt=100,_t=function(t,e,n,o){this.min=t,this.max=e,this.mean=n,this.last=o},Et=function(){function t(t){this.samples=[],this.maxSamples=t,this._i=-1}return t.prototype.addSample=function(t){this._i=(this._i+1)%this.maxSamples,this.samples[this._i]=t},t.prototype.each=function(t){for(var e=this.samples,n=0;n<e.length;n++)t(e[(this._i+1+n)%e.length],n)},t.prototype.calc=function(){var t=this.samples;if(0===t.length)return new _t(0,0,0,0);for(var e=t[(this._i+1)%t.length],n=e,o=0,i=0;i<t.length;i++){var r=t[(this._i+1+i)%t.length];r<e&&(e=r),r>n&&(n=r),o+=r}var a=t[this._i],l=o/t.length;return new _t(e,n,l,a)},t}(),St=[],Ot=-1,kt=(Mt=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}Mt(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),Ht=30,At=Tt,jt=function(){function t(t){var e=this;this._sync=function(){e.sync(),e._dirty=!1},this.name=t,this.element=document.createElement("div"),this.element.style.cssText="padding: 2px;background-color: #020;font-family: monospace;font-size: 12px;color: #0f0",this._dirty=!1,this.invalidate()}return t.prototype.invalidate=function(){var t;this._dirty||(this._dirty=!0,t=this._sync,St.push(t),-1===Ot&&requestAnimationFrame(function(t){Ot=-1;var e=St;St=[];for(var n=0;n<e.length;n++)e[n]()}))},t.prototype.sync=function(){throw new Error("sync method not implemented")},t}();!function(t){t[t.HideMin=1]="HideMin",t[t.HideMax=2]="HideMax",t[t.HideMean=4]="HideMean",t[t.HideLast=8]="HideLast",t[t.HideGraph=16]="HideGraph",t[t.RoundValues=32]="RoundValues"}(Ct||(Ct={}));var Nt=function(t){function e(e,n,o,i){var r=t.call(this,e)||this;r.flags=n,r.unitName=o,r.samples=i;var a=document.createElement("div");a.style.cssText="text-align: center",a.textContent=r.name;var l=document.createElement("div");return 0===(n&Ct.HideMin)?(r.minText=document.createElement("div"),l.appendChild(r.minText)):r.minText=null,0===(n&Ct.HideMax)?(r.maxText=document.createElement("div"),l.appendChild(r.maxText)):r.maxText=null,0===(n&Ct.HideMean)?(r.meanText=document.createElement("div"),l.appendChild(r.meanText)):r.meanText=null,0===(n&Ct.HideLast)?(r.lastText=document.createElement("div"),l.appendChild(r.lastText)):r.lastText=null,r.element.appendChild(a),r.element.appendChild(l),0===(n&Ct.HideGraph)?(r.canvas=document.createElement("canvas"),r.canvas.style.cssText="display: block; padding: 0; margin: 0",r.canvas.width=At,r.canvas.height=Ht,r.ctx=r.canvas.getContext("2d"),r.element.appendChild(r.canvas)):(r.canvas=null,r.ctx=null),r}return kt(e,t),e.prototype.sync=function(){var t,e,n,o,i=this,r=this.samples.calc(),a=Ht/(1.2*r.max);0===(this.flags&Ct.RoundValues)?(t=r.min.toFixed(2),e=r.max.toFixed(2),n=r.mean.toFixed(2),o=r.last.toFixed(2)):(t=Math.round(r.min).toString(),e=Math.round(r.max).toString(),n=Math.round(r.mean).toString(),o=Math.round(r.last).toString()),null!==this.minText&&(this.minText.textContent="min:  "+t+this.unitName),null!==this.maxText&&(this.maxText.textContent="max:  "+e+this.unitName),null!==this.meanText&&(this.meanText.textContent="mean: "+n+this.unitName),null!==this.lastText&&(this.lastText.textContent="last: "+o+this.unitName),null!==this.ctx&&(this.ctx.fillStyle="#010",this.ctx.fillRect(0,0,At,Ht),this.ctx.fillStyle="#0f0",this.samples.each(function(t,e){i.ctx.fillRect(e,Ht,1,-t*a)}))},e}(jt),Ft=(function(t){function e(e,n){var o=t.call(this,e)||this;return o.counter=n,o.text=document.createElement("div"),o.element.appendChild(o.text),o}kt(e,t),e.prototype.sync=function(){this.text.textContent=this.name+": "+this.counter.value}}(jt),null);function Pt(){Ft||((Ft=document.createElement("div")).style.cssText="position: fixed;opacity: 0.9;right: 0;bottom: 0",document.body.appendChild(Ft))}function qt(t){void 0===t&&(t=Ct.HideMin|Ct.HideMax|Ct.HideMean|Ct.RoundValues),Pt();var e=new Et(Tt),n=new Nt("FPS",t,"",e);Ft.appendChild(n.element);var o=0,i=60;requestAnimationFrame(function t(r){o>0&&(i+=2/121*(1e3/(r-o)-i)),o=r,e.addSample(i),n.invalidate(),requestAnimationFrame(t)})}function Bt(t){if(void 0===t&&(t=Ct.HideMin|Ct.HideMean),Pt(),void 0!==performance.memory){var e=new Et(Tt),n=new Nt("Memory",t,"MB",e);Ft.appendChild(n.element),function t(){e.addSample(Math.round(performance.memory.usedJSHeapSize/1048576)),n.invalidate(),setTimeout(t,30)}()}}var Lt=function(t,e,n){this.data=new Et(Tt),this.widget=new Nt(t,n,e,this.data),this.startTime=-1},Rt={};function Vt(t,e){void 0===e&&(e=0),Pt();var n=Rt[t];void 0===n&&(Rt[t]=n=new Lt(t,"ms",e),Ft.appendChild(n.widget.element))}function Gt(t){var e=performance.now(),n=Rt[t];void 0!==n&&-1!==n.startTime&&(n.data.addSample(e-n.startTime),n.widget.invalidate())}function It(t){return t>0?t>=10?"Query elapsed warn_long":t>=1?"Query elapsed warn":"Query elapsed short":""}function Qt(t){return t>=20?"label label-important":t>=10?"label label-warning":"label label-success"}let zt=.5,Dt=50;function Jt(t){if(0===t.length)return{};const e={};for(let n=0;n<t.length;++n){const o=t[n].split("=",2);1===o.length?e[o[0]]="":e[o[0]]=decodeURIComponent(o[1].replace(/\+/g," "))}return e}function Kt(){let t;return{elapsed:15*Math.random(),query:t=Math.random()<.1?"vacuum":Math.random()<.2?"<IDLE> in transaction":"SELECT blah FROM something"}}function Ut(){const t=[],e=Math.floor(10*Math.random()+1);for(let n=0;n<e;n++)t.push(Kt());return t}const Wt={elapsed:0,query:"***"};let Xt=0;function Yt(t,e){return void 0===e&&(e=Xt++),{id:e,name:t,queries:Ut()}}function Zt(t){const e=t.queries.slice(0,5);for(e.sort((t,e)=>t.elapsed-e.elapsed);e.length<5;)e.push(Wt);return e}function $t(t,e){for(let n=0;n<t.length;n++)if(Math.random()<e){const{id:e,name:o}=t[n];t[n]=Yt(o,e)}}function te(t){if(0===t)return"";if(t>60){const e=Math.floor(t/60),n=(t%60).toFixed(2).split(".");return e+":"+n[0]+"."+n[1]}return t.toFixed(2)}const ee=vt("arrow"),ne=t=>vt("popover left",r,[vt("popover-content",r,t),ee]),oe=({elapsed:t,query:e})=>bt(It(t),r,[te(t),ne(e)]);function ie(t){const e=Zt(t),n=t.queries.length;return wt(r,r,[bt("dbname",r,t.name),bt("query-count",r,gt(Qt(n),r,n)),oe(e[0]),oe(e[1]),oe(e[2]),oe(e[3]),oe(e[4])])}const re=t=>yt("table table-striped latest-data",r,xt(r,r,d(t.map(t=>c(t.id,ie(t))))));!function(){const t=Jt(window.location.search.substr(1).split("&"));void 0!==t.n&&(Dt=parseInt(t.n,10)),void 0!==t.m&&(zt=parseFloat(t.m)),document.addEventListener("DOMContentLoaded",()=>{qt(),Bt(),Vt("view update");const t=document.createElement("div");t.style.display="flex";const e=document.createElement("input");e.type="range",e.style.marginBottom="10px",e.style.marginTop="5px";const n=document.createElement("label");n.textContent="mutations : "+(100*zt).toFixed(0)+"%",e.addEventListener("change",t=>{zt=Number.parseFloat(t.target.value)/100,n.textContent="mutations : "+(100*zt).toFixed(0)+"%"}),t.appendChild(n),t.appendChild(e),document.body.insertBefore(t,document.body.firstChild)})}();const ae=function(t){const e=[];for(let n=0;n<t;n++)e.push(Yt("cluster"+(n+1))),e.push(Yt("cluster"+(n+1)+" slave"));return e}(Dt),le=document.getElementById("app");ct(()=>{pt(re(ae),le)})(),function t(){var e;$t(ae,zt),void 0!==(e=Rt["view update"])&&(e.startTime=performance.now()),ct(()=>{pt(re(ae),le)})(),Gt("view update"),requestAnimationFrame(t)}()}]);