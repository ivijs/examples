!function(n){var t={};function e(o){if(t[o])return t[o].exports;var l=t[o]={i:o,l:!1,exports:{}};return n[o].call(l.exports,l,l.exports,e),l.l=!0,l.exports}e.m=n,e.c=t,e.d=function(n,t,o){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:o})},e.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"===typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var l in n)e.d(o,l,function(t){return n[t]}.bind(null,l));return o},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=2)}({2:function(n,t,e){e.r(t);const o=(n,t)=>({f:n,d:t}),l=o(16,null),r=(o(32,null),o(8,null)),i=(n,t)=>({t:n,d:t}),c=(n,t)=>i(l,{v:n,c:t}),f=(n,t)=>({k:n,v:t}),u=n=>i(r,n);function s(n,t){const e=o(t,n);return(n,t,o=null)=>i(e,{n:n,a:t,c:o})}const a=n=>s(n,2);function d(n,t){const e=o(4,{c:n,su:t});return n=>i(e,n)}function v(n,t){const e=n.length-1,o=n.pop();t!==e&&(n[t]=o)}function p(n){requestAnimationFrame(n)}const g=n=>({v:n}),h=[];function y(n){return function(){try{return n.apply(void 0,arguments)}catch(t){throw h.forEach(n=>{n(t)}),t}}}const b=()=>{};function m(n){for(let t=0;t<n.length;++t)!0===n[t]()&&v(n,t--)}window,window;const w="GestureEvent"in window,j=(window,Node.prototype),k=Element.prototype,A=Object.prototype.hasOwnProperty,O=j.insertBefore,x=j.removeChild,P=(j.replaceChild,j.cloneNode),S=k.setAttribute,T=(k.setAttributeNS,k.removeAttribute),N="http://www.w3.org/2000/svg",E=n=>({o:n,f:0,c:null,s:null});let M,C,_,L={};function q(n){const t=L;return L=n,t}function B(n){L=n}function D(){return L}function R(){const n=C;return C=0,n}function F(n,t){const e=t|C;return C|=n,e}function G(n){const t=n.f;if(0===(3&t)){const e=n.c;if(0!==(136&t)){for(let n=0;n<e.length;n++){const t=e[n];if(null!==t)return G(t)}return null}return null===e?null:G(e)}return n.s}function J(n,t,e,o){const{f:l,c:r}=t;let i,c,f;if(0!==(4&l))i=t.s,c=R(),0!==(256&l)&&(0!==(1024&l)||null!==i.s&&!0===i.s())?t.c=Y(n,r,i.r(t.o.d),e,o):0!==(16384&l)?J(n,r,e,o):!0===e?V(n,t):M=G(t),t.f=15359&t.f|C,C|=c|(12288&t.f)<<2;else if(0!==(16384&l)){if(c=R(),0!==(3&l))i=t.s,!0===e&&O.call(n,i,M),null!==r&&J(i,r,!1,!0),M=i;else if(0!==(136&l))for(f=r.length;f>0;)null!==(i=r[--f])&&J(n,i,e,!1);else if(0!==(16&l))J(n,t.c,e,o);else{!0===_&&(t.s=Object.assign({},D(),t.o.d.v));const l=q(t.s);J(n,t.c,e,o),B(l)}t.f=F(c,t.f)}else!0===e?V(n,t):M=G(t)}function V(n,t){const e=t.f;if(0!==(3&e)){const e=t.s;O.call(n,e,M),M=e}else{const o=t.c;if(0!==(136&e)){let t=o.length;for(;t>0;){const e=o[--t];null!==e&&V(n,e)}}else null!==o&&V(n,o)}}function z(n){const t=n.f;let e,o;if(0!==(32768&t)){const l=n.c;if(null!==l)if(0!==(136&t))for(e=0;e<l.length;e++)null!==(o=l[e])&&z(o);else z(l)}if(0!==(8192&t)&&null!==(o=n.s.u))if("function"===typeof o)o();else for(e=0;e<o.length;e++)o[e](!0)}function H(n,t,e){const o=t.f;if(0!==(3&o))x.call(n,t.s);else{const l=t.c;if(0!==(136&o))if(!0===e)n.textContent="";else for(let t=0;t<l.length;++t){const e=l[t];null!==e&&H(n,e,!1)}else null!==l&&H(n,l,e)}}function I(n,t,e){H(n,t,e),z(t)}function K(n,t,e){const o=document.createTextNode(e);O.call(n,o,M),M=o,t.s=o,t.f=1}function Q(n,t){const e=t.t,{n:o,a:l}=t.d,r=0!==(512&e.f);if(void 0===n){const t=e.d;n=r?document.createElementNS(N,t):document.createElement(t)}return o&&nn(n,o,r),void 0!==l&&en(n,void 0,l),n}function U(n,t,e){const{t:o,d:l}=e,r=o.f;let i,c,f;if(0!==(4&r))i=R(),0!==(256&r)?(t.s=c={r:null,s:null,u:null},c.r=f=e.t.d.c(t)):f=e.t.d.c,t.c=X(n,f(l)),t.f=15359&t.f|r|C,C|=i|(12288&t.f)<<2;else{if(i=R(),0!==(2&r)){const i=o.d;let u;0!==(64&r)&&(null===(u=i.n)&&(i.n=u=Q(void 0,i.p)),u=P.call(u,!1)),t.s=u=Q(u,e),c=M,M=null,null!==(f=l.c)&&(t.c=X(u,f)),O.call(n,u,c),M=u}else if(0!==(48&r))0!==(32&r)?(c=q(t.s=Object.assign({},D(),l.v)),t.c=X(n,l.c),B(c)):t.c=X(n,l.c);else{let e=l.length;for(t.c=f=Array(e);e>0;)f[--e]=X(n,l[e].v)}t.f=F(i,r)}}function W(n,t,e){let o=e.length;const l=Array(o),r=R();for(;o>0;)l[--o]=X(n,e[o]);t.c=l,t.f=F(r,128)}function X(n,t){if(null!==t){const e=E(t);return"object"===typeof t?t instanceof Array?W(n,e,t):U(n,e,t):K(n,e,t),e}return null}function Y(n,t,e,o,l){if(null===e)return null!==t&&I(n,t,l),null;if(null===t)return X(n,e);const{o:r,s:i}=t;let c=t.f;if(0!==(1&c)){if("object"===typeof e)return x.call(n,i),X(n,e);t.o=e,r!==e&&(i.nodeValue=e),!0===o&&O.call(n,i,M),M=i}else{if(r===e)return J(n,t,o,l),t;if(!0===(f=r,"object"!==typeof(u=e)||(f instanceof Array?!(u instanceof Array):u instanceof Array||f.t!==u.t)))return I(n,t,l),X(n,e);t.o=e;const s=t.c;let a,d,v,p;if(0!==(4&c)){d=r.d,v=e.d;const i=e.t.d;0!==(1024&c)||d!==v&&(void 0===i.su||!0===i.su(d,v))?(a=R(),t.c=Y(n,s,0!==(256&c)?t.s.r(v):i.c(v),o,l),c=t.f,t.f=15359&c|C,C|=a|(12288&c)<<2):J(n,t,o,l)}else{if(a=R(),0!==(2&c))d=r.d,v=e.d,!0===o&&O.call(n,i,M),p=v.n,d.n!==p&&(void 0===p&&(p=""),nn(i,p,0!==(512&c))),p=v.a,d.a!==p&&en(i,d.a,p),p=v.c,d.c!==p&&(M=null,t.c=Y(i,s,p,!1,!0)),M=i;else if(0!==(136&c))if(0!==(128&c)){let r=e.length;if(s.length===r)for(;r>0;)s[--r]=Y(n,s[r],e[r],o,!1);else I(n,t,l),W(n,t,e)}else Z(n,t,r.d,e.d,o,l);else if(0!==(16&c))t.c=Y(n,s,e.d.c,o,l);else{const i=_;p=(v=e.d).v,r.d.v===p&&!0!==_||(t.s=Object.assign({},D(),p),_=!0),p=q(t.s),Y(n,s,v.c,o,l),B(p),_=i}t.f=F(a,t.f)}}var f,u;return t}function Z(n,t,e,o,l,r){let i=o.length,c=e.length;const f=Array(i);if(0===i)c>0&&I(n,t,r);else if(0===c)for(;i>0;)f[--i]=X(n,o[i].v);else{const u=t.c;let s=c-1,a=i-1,d=0,v=o[a];n:for(;;){for(;e[s].k===v.k;){if(f[a]=Y(n,u[s--],v.v,l,!1),d>--a||d>s)break n;v=o[a]}for(;e[d].k===o[d].k;)if(++d>s||d>a)break n;break}if(d>s)for(;a>=d;)f[a]=X(n,o[a--].v);else if(d>a){i=d;do{null!==(v=u[i++])&&I(n,v,!1)}while(i<=s)}else{let p=0,g=0;const h=s-d+1,y=a-d+1,b=Array(y),m=new Map;for(i=0;i<y;++i)c=i+d,b[i]=-1,m.set(o[c].k,c);for(i=d;i<=s&&g<y;++i)void 0!==(c=m.get(e[i].k))&&(p=c<p?c:-1,++g,b[c-d]=i,f[c]=u[i],u[i]=null);if(h===e.length&&0===g)for(I(n,t,r);a>=0;)f[a]=X(n,o[a--].v);else{for(i=d;i<=s;i++)null!==(v=u[i])&&I(n,v,!1);if(i=y,!0===l||-1!==p)for(;i>0;)v=o[p=--i+d].v,f[p]=-1===b[i]?X(n,v):Y(n,f[p],v,l,!1);else{const t=$(b);for(c=t.length-1;i>0;)v=o[p=--i+d].v,-1===b[i]?f[p]=X(n,v):(c<0||i!==t[c]?l=!0:--c,f[p]=Y(n,f[p],v,l,!1),l=!1)}}}for(;d>0;)f[--d]=Y(n,u[d],o[d].v,l,!1)}t.c=f}function $(n){const t=n.slice(),e=[];let o,l,r,i=0,c=0;for(e[0]=0;c<n.length;++c){const f=n[c];if(f>-1)if(n[r=e[i]]<f)t[c]=r,e[++i]=c;else{for(o=0,l=i;o<l;)n[e[r=o+l>>1]]<f?o=r+1:l=r;f<n[e[o]]&&(o>0&&(t[c]=e[o-1]),e[o]=c)}}for(l=e[i];i>=0;)e[i--]=l,l=t[l];return e}function nn(n,t,e){!0===e?S.call(n,"class",t):n.className=t}function tn(n,t,e){const o=n.style;let l,r;if(void 0===t)for(l in e)void 0!==(r=e[l])&&o.setProperty(l,r);else if(void 0===e)for(l in t)o.removeProperty(l);else{let n=0,i=0;for(l in t)t[l]!==(r=!0===A.call(e,l)?(n++,e[l]):void 0)&&(void 0!==r?o.setProperty(l,r):o.removeProperty(l));const c=Object.keys(e);for(;n<c.length&&i<c.length;++i)l=c[i],!1===A.call(t,l)&&(o.setProperty(l,e[l]),++n)}}function en(n,t,e){let o;if(void 0===t)for(o in e)on(n,o,void 0,e[o]);else if(void 0===e)for(o in t)on(n,o,t[o],void 0);else{let l=0,r=0;for(o in t)on(n,o,t[o],!0===A.call(e,o)?(l++,e[o]):void 0);const i=Object.keys(e);for(;l<i.length&&r<i.length;++r)o=i[r],!1===A.call(t,o)&&(on(n,o,void 0,e[o]),++l)}}function on(n,t,e,o){"style"!==t?"object"===typeof o?o.u(n,t,void 0===e?void 0:e.v,o.v):"object"===typeof e?e.u(n,t,e.v,void 0):e!==o&&("boolean"===typeof o&&(o=o?"":void 0),void 0===o?T.call(n,t):S.call(n,t,o)):e!==o&&tn(n,e,o)}const ln=[],rn=n=>ln.find(n);function cn(){for(let n=0;n<ln.length;++n){const t=ln[n],{container:e,state:o,next:l}=t;M=null,C=0,_=!1,void 0!==l?(t.next=void 0,t.state=Y(e,o,l,!1,!0)):null!==o&&J(e,o,!1,!0)}}function fn(n){for(;n.v.length>0;){const t=n.v;n.v=[];for(let n=0;n<t.length;++n)t[n]()}}let un=0;const sn=g([]),an=g([]),dn=g([]),vn=[],pn=[];let gn=0;const hn=n=>y(function(){un|=1,n.apply(void 0,arguments),fn(sn),un&=-4}),yn=hn(b),bn=n=>hn(t=>{un|=16,n(t),0!==(4&un)&&(gn=void 0===t?performance.now():t,m(vn),0!==(32&un)&&cn(),fn(an),m(pn),fn(dn)),un&=-61}),mn=bn(b);function wn(n){var t,e;void 0!==n&&0!==(1&n)&&0===(8&un)?0===(16&(un|=12))&&(t=mn,sn.v.push(t),0===(3&un)&&(un|=2,e=yn,Promise.resolve().then(e))):0===(4&un)&&0===(16&(un|=4))&&p(mn)}function jn(n){un|=32,wn(n)}function kn(n,t,e){const o=rn(n=>n.container===t);o?o.next=n:(ln.push({container:t,state:null,next:n}),w&&(t.onclick=b)),jn(e)}function An(n,t,e){const o=rn(n=>n.container.contains(t));if(o){const l=o.container;l!==t&&On(n,e,t,l,o.state)}}function On(n,t,e,o,l){const r=e.parentNode;return r===o||null!==(l=On(n,t,r,o,l))?xn(n,t,e,l):null}function xn(n,t,e,o){if(null!==o){const{f:l,c:r}=o;let i;if(0!==(2&l)){if(o.s===e)return o;if(null!==r)return xn(n,t,e,r)}else if(0!==(52&l)){if(null!==(i=xn(n,t,e,o.c)))return 0!==(16&l)&&Pn(n,o,o.o.d.v,t),i}else if(0!==(136&l))for(let o=0;o<r.length;o++)if(null!==(i=xn(n,t,e,r[o])))return i}return null}function Pn(n,t,e,o){if(null!==e)if(e instanceof Array)for(let l=0;l<e.length;++l)Pn(n,t,e[l],o);else!0===o(e)&&n.push({t:t,h:e})}function Sn(n,t,e,o){let l=n.length;for(;--l>=0;)if(Tn(n[l],t,1,o),2&t.flags)return;if(e)for(;++l<n.length;)if(Tn(n[l],t,2,o),2&t.flags)return}function Tn(n,t,e,o){const l=n.h;(l.d.flags&e)===e&&(t.node=n.t,t.flags|=Nn(l,o,t))}function Nn(n,t,e){const o=void 0===t?n.h(e):t(n,e);return void 0===o?0:o}function En(n,t,e,o){return{flags:n,timestamp:t,node:e,native:o}}function Mn(n,t,e=!0){const o={a:null,b:null},l=n=>n.d.src===o;return document.addEventListener(t,hn(t=>{const e=[];if(An(e,t.target,l),e.length||o.b||o.a){const l=En(0,t.timeStamp,null,t);Cn(o.b,l),e.length&&Sn(e,l,0!==(4&n)),Cn(o.a,l),1&l.flags&&t.preventDefault()}}),e),o}function Cn(n,t){if(null!==n){t.node=null;const e=n.slice();for(let n=0;n<e.length;n++)e[n](t)}}function _n(n){const t={src:n,flags:2},e={src:n,flags:1};return(n,o)=>({d:!0===o?e:t,h:n})}const Ln=_n(Mn(5,"click")),qn=void 0,Bn=a("div"),Dn=a("li"),Rn=s("pre",2050),Fn=a("table"),Gn=a("tbody"),Jn=a("td"),Vn=a("tr"),zn=a("ul"),Hn=d(n=>c(Ln(()=>{console.log("Click",n)}),Jn("TableCell",qn,n))),In=d(({id:n,active:t,props:e})=>Vn(t?"TableRow active":"TableRow",{"data-id":n},[Hn("#"+n),e.map(n=>Hn(n))])),Kn=d(n=>Fn("Table",qn,Gn(qn,qn,u(n.items.map(n=>f(n.id,In(n))))))),Qn=d(({id:n,time:t})=>Bn("AnimBox",{"data-id":n,style:{background:"rgba(0,0,0,"+(.5+t%10/10)+")","border-radius":t%10+"px"}})),Un=d(n=>Bn("Anim",qn,u(n.items.map(n=>f(n.id,Qn(n)))))),Wn=d(n=>Dn("TreeLeaf",qn,n.id)),Xn=d(n=>zn("TreeNode",qn,u(n.children.map(n=>f(n.id,n.container?Xn(n):Wn(n)))))),Yn=d(n=>Bn("Tree",qn,Xn(n.root)));function Zn(n){switch(n.location){case"table":return Kn(n.table);case"anim":return Un(n.anim);default:return Yn(n.tree)}}const $n=d(n=>Bn("Main",qn,n?Zn(n):null));uibench.init("ivi","0.22.0"),document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelector("#App");kn($n(),n),uibench.run(t=>bn(()=>{kn($n(t),n)})(),t=>{kn(Rn(qn,qn,JSON.stringify(t,void 0,2)),n)})})}});