!function(n){var t={};function e(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return n[o].call(l.exports,l,l.exports,e),l.l=!0,l.exports}e.m=n,e.c=t,e.d=function(n,t,o){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:o})},e.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"===typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var l in n)e.d(o,l,function(t){return n[t]}.bind(null,l));return o},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=2)}({2:function(n,t,e){e.r(t);const o=(n,t)=>({f:n,d:t}),l=o(16,null),r=(o(32,null),o(8,null)),i=(n,t)=>({t:n,d:t}),c=(n,t)=>i(l,{v:n,c:t}),f=(n,t)=>({k:n,v:t}),s=n=>i(r,n);function u(n,t){const e=o(t,n);return(n,t,o=null)=>i(e,{n:n,a:t,c:o})}const a=n=>u(n,2);function d(n,t){const e=o(4,{c:n,su:t});return n=>i(e,n)}function v(n,t){const e=n.length-1,o=n.pop();t!==e&&(n[t]=o)}function p(n){requestAnimationFrame(n)}const g=[];function h(n){return function(){try{return n.apply(void 0,arguments)}catch(t){throw g.forEach(n=>{n(t)}),t}}}const y=()=>{};function b(n){for(let t=0;t<n.length;++t)!0===n[t]()&&v(n,t--)}(()=>{let n=!1;try{const e=Object.defineProperty({},"passive",{get(){n=!0}});window.addEventListener("test",null,e)}catch(t){}})(),KeyboardEvent.prototype.hasOwnProperty("key"),MouseEvent.prototype.hasOwnProperty("buttons"),window,window,window;const m="GestureEvent"in window,w=Node.prototype,j=Element.prototype,O=Object.prototype.hasOwnProperty,k=w.insertBefore,A=w.removeChild,P=(w.replaceChild,w.cloneNode),x=j.setAttribute,E=(j.setAttributeNS,j.removeAttribute),S="http://www.w3.org/2000/svg",T=n=>({o:n,f:0,c:null,s:null});let N,M,C,_={};function L(n){const t=_;return _=n,t}function q(n){_=n}function B(){return _}function D(){const n=M;return M=0,n}function R(n,t){const e=t|M;return M|=n,e}function F(n){const t=n.f;if(0===(3&t)){const e=n.c;if(0!==(136&t)){for(let n=0;n<e.length;n++){const t=e[n];if(null!==t)return F(t)}return null}return null===e?null:F(e)}return n.s}function G(n,t,e,o){const{f:l,c:r}=t;let i,c,f;if(0!==(4&l))i=t.s,c=D(),0!==(256&l)&&(0!==(1024&l)||null!==i.s&&!0===i.s())?t.c=X(n,r,i.r(t.o.d),e,o):0!==(16384&l)?G(n,r,e,o):!0===e?J(n,t):N=F(t),t.f=15359&t.f|M,M|=c|(12288&t.f)<<2;else if(0!==(16384&l)){if(c=D(),0!==(3&l))i=t.s,!0===e&&k.call(n,i,N),null!==r&&G(i,r,!1,!0),N=i;else if(0!==(136&l))for(f=r.length;--f>=0;)null!==(i=r[f])&&G(n,i,e,!1);else if(0!==(16&l))G(n,t.c,e,o);else{!0===C&&(t.s=Object.assign({},B(),t.o.d.v));const l=L(t.s);G(n,t.c,e,o),q(l)}t.f=R(c,t.f)}else!0===e?J(n,t):N=F(t)}function J(n,t){const e=t.f;if(0!==(3&e)){const e=t.s;k.call(n,e,N),N=e}else{const o=t.c;if(0!==(136&e)){let t=o.length;for(;--t>=0;){const e=o[t];null!==e&&J(n,e)}}else null!==o&&J(n,o)}}function K(n){const t=n.f;let e,o;if(0!==(32768&t)){const l=n.c;if(null!==l)if(0!==(136&t))for(e=0;e<l.length;e++)null!==(o=l[e])&&K(o);else K(l)}if(0!==(8192&t)&&null!==(o=n.s.u))if("function"===typeof o)o();else for(e=0;e<o.length;e++)o[e](!0)}function V(n,t,e){const o=t.f;if(0!==(3&o))A.call(n,t.s);else{const l=t.c;if(0!==(136&o))if(!0===e)n.textContent="";else for(let t=0;t<l.length;++t){const e=l[t];null!==e&&V(n,e,!1)}else null!==l&&V(n,l,e)}}function z(n,t,e){V(n,t,e),K(t)}function H(n,t,e){const o=document.createTextNode(e);k.call(n,o,N),N=o,t.s=o,t.f=1}function I(n,t){const e=t.t,{n:o,a:l}=t.d,r=0!==(512&e.f);if(void 0===n){const t=e.d;n=r?document.createElementNS(S,t):document.createElement(t)}return o&&$(n,o,r),void 0!==l&&tn(n,void 0,l),n}function Q(n,t,e){const{t:o,d:l}=e,r=o.f;let i,c,f;if(0!==(4&r))i=D(),0!==(256&r)?(t.s=c={r:null,s:null,u:null},c.r=f=e.t.d.c(t)):f=e.t.d.c,t.c=W(n,f(l)),t.f=15359&t.f|r|M,M|=i|(12288&t.f)<<2;else{if(i=D(),0!==(2&r)){const i=o.d;let s;0!==(64&r)&&(null===(s=i.n)&&(i.n=s=I(void 0,i.p)),s=P.call(s,!1)),t.s=s=I(s,e),c=N,N=null,null!==(f=l.c)&&(t.c=W(s,f)),k.call(n,s,c),N=s}else if(0!==(48&r))0!==(32&r)?(c=L(t.s=Object.assign({},B(),l.v)),t.c=W(n,l.c),q(c)):t.c=W(n,l.c);else{let e=l.length;for(t.c=f=Array(e);--e>=0;)f[e]=W(n,l[e].v)}t.f=R(i,r)}}function U(n,t,e){let o=e.length;const l=Array(o),r=D();for(;--o>=0;)l[o]=W(n,e[o]);t.c=l,t.f=R(r,128)}function W(n,t){if(null!==t){const e=T(t);return"object"===typeof t?t instanceof Array?U(n,e,t):Q(n,e,t):H(n,e,t),e}return null}function X(n,t,e,o,l){if(null===e)return null!==t&&z(n,t,l),null;if(null===t)return W(n,e);const{o:r,s:i}=t;let c=t.f;if(0!==(1&c)){if("object"===typeof e)return A.call(n,i),W(n,e);t.o=e,r!==e&&(i.nodeValue=e),!0===o&&k.call(n,i,N),N=i}else{if(r===e)return G(n,t,o,l),t;if(!0===(f=r,"object"!==typeof(s=e)||(f instanceof Array?!(s instanceof Array):s instanceof Array||f.t!==s.t)))return z(n,t,l),W(n,e);t.o=e;const u=t.c;let a,d,v,p;if(0!==(4&c)){d=r.d,v=e.d;const i=e.t.d;0!==(1024&c)||d!==v&&(void 0===i.su||!0===i.su(d,v))?(a=D(),t.c=X(n,u,0!==(256&c)?t.s.r(v):i.c(v),o,l),c=t.f,t.f=15359&c|M,M|=a|(12288&c)<<2):G(n,t,o,l)}else{if(a=D(),0!==(2&c))d=r.d,v=e.d,!0===o&&k.call(n,i,N),p=v.n,d.n!==p&&(void 0===p&&(p=""),$(i,p,0!==(512&c))),p=v.a,d.a!==p&&tn(i,d.a,p),p=v.c,d.c!==p&&(N=null,t.c=X(i,u,p,!1,!0)),N=i;else if(0!==(136&c))if(0!==(128&c)){let r=e.length;if(u.length===r)for(;--r>=0;)u[r]=X(n,u[r],e[r],o,!1);else z(n,t,l),U(n,t,e)}else Y(n,t,r.d,e.d,o,l);else if(0!==(16&c))t.c=X(n,u,e.d.c,o,l);else{const i=C;p=(v=e.d).v,r.d.v===p&&!0!==C||(t.s=Object.assign({},B(),p),C=!0),p=L(t.s),X(n,u,v.c,o,l),q(p),C=i}t.f=R(a,t.f)}}var f,s;return t}function Y(n,t,e,o,l,r){let i=o.length,c=e.length;const f=Array(i);if(0===i)c>0&&z(n,t,r);else if(0===c)for(;--i>=0;)f[i]=W(n,o[i].v);else{const s=t.c;let u=c-1,a=i-1,d=0,v=o[a];n:for(;;){for(;e[u].k===v.k;){if(f[a]=X(n,s[u--],v.v,l,!1),d>--a||d>u)break n;v=o[a]}for(;e[d].k===o[d].k;)if(++d>u||d>a)break n;break}if(d>u)for(;a>=d;)f[a]=W(n,o[a--].v);else if(d>a){i=d;do{null!==(v=s[i++])&&z(n,v,!1)}while(i<=u)}else{let p=0,g=0;const h=u-d+1,y=a-d+1,b=Array(y),m=new Map;for(i=0;i<y;++i)c=i+d,b[i]=-1,m.set(o[c].k,c);for(i=d;i<=u&&g<y;++i)void 0!==(c=m.get(e[i].k))&&(p=c<p?c:-1,++g,b[c-d]=i,f[c]=s[i],s[i]=null);if(h===e.length&&0===g)for(z(n,t,r);a>=0;)f[a]=W(n,o[a--].v);else{for(i=d;i<=u;i++)null!==(v=s[i])&&z(n,v,!1);if(i=y,!0===l||-1!==p)for(;--i>=0;)v=o[p=d+i].v,f[p]=-1===b[i]?W(n,v):X(n,f[p],v,l,!1);else{const t=Z(b);for(c=t.length-1;--i>=0;)v=o[p=d+i].v,-1===b[i]?f[p]=W(n,v):(c<0||i!==t[c]?l=!0:--c,f[p]=X(n,f[p],v,l,!1),l=!1)}}}for(;--d>=0;)f[d]=X(n,s[d],o[d].v,l,!1)}t.c=f}function Z(n){const t=n.slice(),e=[];let o,l,r,i=0,c=0;for(e[0]=0;c<n.length;++c){const f=n[c];if(f>-1)if(n[r=e[i]]<f)t[c]=r,e[++i]=c;else{for(o=0,l=i;o<l;)n[e[r=o+l>>1]]<f?o=r+1:l=r;f<n[e[o]]&&(o>0&&(t[c]=e[o-1]),e[o]=c)}}for(l=e[i];i>=0;)e[i--]=l,l=t[l];return e}function $(n,t,e){!0===e?x.call(n,"class",t):n.className=t}function nn(n,t,e){const o=n.style;let l,r;if(void 0===t)for(l in e)void 0!==(r=e[l])&&o.setProperty(l,r);else if(void 0===e)for(l in t)o.removeProperty(l);else{let n=0,i=0;for(l in t)t[l]!==(r=!0===O.call(e,l)?(n++,e[l]):void 0)&&(void 0!==r?o.setProperty(l,r):o.removeProperty(l));const c=Object.keys(e);for(;n<c.length&&i<c.length;++i)l=c[i],!1===O.call(t,l)&&(o.setProperty(l,e[l]),++n)}}function tn(n,t,e){let o;if(void 0===t)for(o in e)en(n,o,void 0,e[o]);else if(void 0===e)for(o in t)en(n,o,t[o],void 0);else{let l=0,r=0;for(o in t)en(n,o,t[o],!0===O.call(e,o)?(l++,e[o]):void 0);const i=Object.keys(e);for(;l<i.length&&r<i.length;++r)o=i[r],!1===O.call(t,o)&&(en(n,o,void 0,e[o]),++l)}}function en(n,t,e,o){"style"!==t?"object"===typeof o?o.u(n,t,void 0===e?void 0:e.v,o.v):e!==o&&("object"===typeof e?e.u(n,t,e.v,void 0):("boolean"===typeof o&&(o=o?"":void 0),void 0===o?E.call(n,t):x.call(n,t,o))):e!==o&&nn(n,e,o)}const on=[],ln=n=>on.find(n);function rn(){for(let n=0;n<on.length;++n){const t=on[n],{container:e,state:o,next:l}=t;N=null,M=0,C=!1,void 0!==l?(t.next=void 0,t.state=X(e,o,l,!1,!0)):null!==o&&G(e,o,!1,!0)}}function cn(n){for(;n.v.length>0;){const t=n.v;let e=0;n.v=[];do{t[e++]()}while(e<t.length)}}let fn=0;const sn={v:[]},un={v:[]},an={v:[]},dn=[],vn=[];let pn=0;const gn=n=>h(function(){fn|=1,n.apply(void 0,arguments),cn(sn),fn&=-4}),hn=gn(y),yn=n=>gn(t=>{fn|=16,n(t),0!==(4&fn)&&(pn=void 0===t?performance.now():t,b(dn),0!==(32&fn)&&rn(),cn(un),b(vn),cn(an)),fn&=-61}),bn=yn(y);function mn(n){var t,e;void 0!==n&&0!==(1&n)&&0===(8&fn)?0===(16&(fn|=12))&&(t=bn,sn.v.push(t),0===(3&fn)&&(fn|=2,e=hn,Promise.resolve().then(e))):0===(4&fn)&&0===(16&(fn|=4))&&p(bn)}function wn(n){fn|=32,mn(n)}function jn(n,t,e){const o=ln(n=>n.container===t);o?o.next=n:(on.push({container:t,state:null,next:n}),m&&(t.onclick=y)),wn(e)}function On(n,t,e){const o=ln(n=>n.container.contains(t));if(o){const l=o.container;l!==t&&kn(n,e,t,l,o.state)}}function kn(n,t,e,o,l){const r=e.parentNode;return r===o||null!==(l=kn(n,t,r,o,l))?An(n,t,e,l):null}function An(n,t,e,o){if(null!==o){const{f:l,c:r}=o;let i;if(0!==(2&l)){if(o.s===e)return o;if(null!==r)return An(n,t,e,r)}else if(0!==(52&l)){if(null!==(i=An(n,t,e,o.c)))return 0!==(16&l)&&Pn(n,o,o.o.d.v,t),i}else if(0!==(136&l))for(let o=0;o<r.length;o++)if(null!==(i=An(n,t,e,r[o])))return i}return null}function Pn(n,t,e,o){if(null!==e)if(e instanceof Array)for(let l=0;l<e.length;++l)Pn(n,t,e[l],o);else!0===o(e)&&n.push({t:t,h:e})}function xn(n,t,e,o){let l=n.length;for(;--l>=0;)if(En(n[l],t,1,o),2&t.flags)return;if(e)for(;++l<n.length;)if(En(n[l],t,2,o),2&t.flags)return}function En(n,t,e,o){const l=n.h;(l.d.flags&e)===e&&(t.node=n.t,t.flags|=Sn(l,o,t))}function Sn(n,t,e){const o=void 0===t?n.h(e):t(n,e);return void 0===o?0:o}function Tn(n,t,e,o){return{flags:n,timestamp:t,node:e,native:o}}function Nn(n,t,e=!0){const o={a:null,b:null},l=n=>n.d.src===o;return document.addEventListener(t,gn(t=>{const e=[];if(On(e,t.target,l),e.length||o.b||o.a){const l=Tn(0,t.timeStamp,null,t);Mn(o.b,l),e.length&&xn(e,l,0!==(4&n)),Mn(o.a,l),1&l.flags&&t.preventDefault()}}),e),o}function Mn(n,t){if(null!==n){t.node=null;const e=n.slice();for(let n=0;n<e.length;n++)e[n](t)}}function Cn(n){const t={src:n,flags:2},e={src:n,flags:1};return(n,o)=>({d:!0===o?e:t,h:n})}const _n=Cn(Nn(5,"click")),Ln=void 0,qn=a("div"),Bn=a("li"),Dn=u("pre",2050),Rn=a("table"),Fn=a("tbody"),Gn=a("td"),Jn=a("tr"),Kn=a("ul"),Vn=d(n=>c(_n(()=>{console.log("Click",n)}),Gn("TableCell",Ln,n))),zn=d(({id:n,active:t,props:e})=>Jn(t?"TableRow active":"TableRow",{"data-id":n},[Vn("#"+n),e.map(n=>Vn(n))])),Hn=d(n=>Rn("Table",Ln,Fn(Ln,Ln,s(n.items.map(n=>f(n.id,zn(n))))))),In=d(({id:n,time:t})=>qn("AnimBox",{"data-id":n,style:{background:"rgba(0,0,0,"+(.5+t%10/10)+")","border-radius":t%10+"px"}})),Qn=d(n=>qn("Anim",Ln,s(n.items.map(n=>f(n.id,In(n)))))),Un=d(n=>Bn("TreeLeaf",Ln,n.id)),Wn=d(n=>Kn("TreeNode",Ln,s(n.children.map(n=>f(n.id,n.container?Wn(n):Un(n)))))),Xn=d(n=>qn("Tree",Ln,Wn(n.root)));function Yn(n){switch(n.location){case"table":return Hn(n.table);case"anim":return Qn(n.anim);default:return Xn(n.tree)}}const Zn=d(n=>qn("Main",Ln,n?Yn(n):null));uibench.init("ivi","0.21.0"),document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelector("#App");jn(Zn(),n),uibench.run(t=>yn(()=>{jn(Zn(t),n)})(),t=>{jn(Dn(Ln,Ln,JSON.stringify(t,void 0,2)),n)})})}});