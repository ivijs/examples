!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}({2:function(t,e,n){n.r(e);const o=(t,e)=>({f:t,d:e}),i=o(16,null),r=(o(32,null),o(8,null)),l=(t,e)=>({t:t,d:e}),s=(t,e)=>l(i,{v:t,c:e}),c=(t,e)=>({k:t,v:e}),f=t=>l(r,t);function u(t,e){const n=o(e,t);return(t,e,o=null)=>l(n,{n:t,a:e,c:o})}const a=t=>u(t,2);function d(t,e){const n=t.length-1,o=t.pop();e!==n&&(t[e]=o)}function h(t){requestAnimationFrame(t)}const v=[];function y(t){return function(){try{return t.apply(void 0,arguments)}catch(e){throw v.forEach(t=>{t(e)}),e}}}const g=()=>{};function p(t){for(let e=0;e<t.length;++e)!0===t[e]()&&d(t,e--)}(()=>{let t=!1;try{const n=Object.defineProperty({},"passive",{get(){t=!0}});window.addEventListener("test",null,n)}catch(e){}})(),KeyboardEvent.prototype.hasOwnProperty("key"),MouseEvent.prototype.hasOwnProperty("buttons"),window,window,window;const m="GestureEvent"in window,b=Node.prototype,w=Element.prototype,x=Object.prototype.hasOwnProperty,k=b.insertBefore,O=b.removeChild,j=(b.replaceChild,b.cloneNode),A=w.setAttribute,P=(w.setAttributeNS,w.removeAttribute),D="http://www.w3.org/2000/svg",N=t=>({o:t,f:0,c:null,s:null});let S,T,E,C={};function I(t){const e=C;return C=t,e}function M(t){C=t}function F(){return C}function _(){const t=T;return T=0,t}function B(t,e){const n=e|T;return T|=t,n}function G(t){const e=t.f;if(0===(3&e)){const n=t.c;if(0!==(136&e)){for(let t=0;t<n.length;t++){const e=n[t];if(null!==e)return G(e)}return null}return null===n?null:G(n)}return t.s}function R(t,e,n,o){const{f:i,c:r}=e;let l,s,c;if(0!==(4&i))l=e.s,s=_(),0!==(256&i)&&(0!==(1024&i)||null!==l.s&&!0===l.s())?e.c=U(t,r,l.r(e.o.d),n,o):0!==(16384&i)?R(t,r,n,o):!0===n?L(t,e):S=G(e),e.f=15359&e.f|T,T|=s|(12288&e.f)<<2;else if(0!==(16384&i)){if(s=_(),0!==(3&i))l=e.s,!0===n&&k.call(t,l,S),null!==r&&R(l,r,!1,!0),S=l;else if(0!==(136&i))for(c=r.length;--c>=0;)null!==(l=r[c])&&R(t,l,n,!1);else if(0!==(16&i))R(t,e.c,n,o);else{!0===E&&(e.s=Object.assign({},F(),e.o.d.v));const i=I(e.s);R(t,e.c,n,o),M(i)}e.f=B(s,e.f)}else!0===n?L(t,e):S=G(e)}function L(t,e){const n=e.f;if(0!==(3&n)){const n=e.s;k.call(t,n,S),S=n}else{const o=e.c;if(0!==(136&n)){let e=o.length;for(;--e>=0;){const n=o[e];null!==n&&L(t,n)}}else null!==o&&L(t,o)}}function $(t){const e=t.f;let n,o;if(0!==(32768&e)){const i=t.c;if(null!==i)if(0!==(136&e))for(n=0;n<i.length;n++)null!==(o=i[n])&&$(o);else $(i)}if(0!==(8192&e)&&null!==(o=t.s.u))if("function"===typeof o)o();else for(n=0;n<o.length;n++)o[n](!0)}function q(t,e,n){const o=e.f;if(0!==(3&o))O.call(t,e.s);else{const i=e.c;if(0!==(136&o))if(!0===n)t.textContent="";else for(let e=0;e<i.length;++e){const n=i[e];null!==n&&q(t,n,!1)}else null!==i&&q(t,i,n)}}function H(t,e,n){q(t,e,n),$(e)}function K(t,e,n){const o=document.createTextNode(n);k.call(t,o,S),S=o,e.s=o,e.f=1}function V(t,e){const n=e.t,{n:o,a:i}=e.d,r=0!==(512&n.f);if(void 0===t){const e=n.d;t=r?document.createElementNS(D,e):document.createElement(e)}return o&&Y(t,o,r),void 0!==i&&tt(t,void 0,i),t}function z(t,e,n){const{t:o,d:i}=n,r=o.f;let l,s,c;if(0!==(4&r))l=_(),0!==(256&r)?(e.s=s={r:null,s:null,u:null},s.r=c=n.t.d.c(e)):c=n.t.d.c,e.c=Q(t,c(i)),e.f=15359&e.f|r|T,T|=l|(12288&e.f)<<2;else{if(l=_(),0!==(2&r)){const l=o.d;let f;0!==(64&r)&&(null===(f=l.n)&&(l.n=f=V(void 0,l.p)),f=j.call(f,!1)),e.s=f=V(f,n),s=S,S=null,null!==(c=i.c)&&(e.c=Q(f,c)),k.call(t,f,s),S=f}else if(0!==(48&r))0!==(32&r)?(s=I(e.s=Object.assign({},F(),i.v)),e.c=Q(t,i.c),M(s)):e.c=Q(t,i.c);else{let n=i.length;for(e.c=c=Array(n);--n>=0;)c[n]=Q(t,i[n].v)}e.f=B(l,r)}}function J(t,e,n){let o=n.length;const i=Array(o),r=_();for(;--o>=0;)i[o]=Q(t,n[o]);e.c=i,e.f=B(r,128)}function Q(t,e){if(null!==e){const n=N(e);return"object"===typeof e?e instanceof Array?J(t,n,e):z(t,n,e):K(t,n,e),n}return null}function U(t,e,n,o,i){if(null===n)return null!==e&&H(t,e,i),null;if(null===e)return Q(t,n);const{o:r,s:l}=e;let s=e.f;if(0!==(1&s)){if("object"===typeof n)return O.call(t,l),Q(t,n);e.o=n,r!==n&&(l.nodeValue=n),!0===o&&k.call(t,l,S),S=l}else{if(r===n)return R(t,e,o,i),e;if(!0===(c=r,"object"!==typeof(f=n)||(c instanceof Array?!(f instanceof Array):f instanceof Array||c.t!==f.t)))return H(t,e,i),Q(t,n);e.o=n;const u=e.c;let a,d,h,v;if(0!==(4&s)){d=r.d,h=n.d;const l=n.t.d;0!==(1024&s)||d!==h&&(void 0===l.su||!0===l.su(d,h))?(a=_(),e.c=U(t,u,0!==(256&s)?e.s.r(h):l.c(h),o,i),s=e.f,e.f=15359&s|T,T|=a|(12288&s)<<2):R(t,e,o,i)}else{if(a=_(),0!==(2&s))d=r.d,h=n.d,!0===o&&k.call(t,l,S),v=h.n,d.n!==v&&(void 0===v&&(v=""),Y(l,v,0!==(512&s))),v=h.a,d.a!==v&&tt(l,d.a,v),v=h.c,d.c!==v&&(S=null,e.c=U(l,u,v,!1,!0)),S=l;else if(0!==(136&s))if(0!==(128&s)){let r=n.length;if(u.length===r)for(;--r>=0;)u[r]=U(t,u[r],n[r],o,!1);else H(t,e,i),J(t,e,n)}else W(t,e,r.d,n.d,o,i);else if(0!==(16&s))e.c=U(t,u,n.d.c,o,i);else{const l=E;v=(h=n.d).v,r.d.v===v&&!0!==E||(e.s=Object.assign({},F(),v),E=!0),v=I(e.s),U(t,u,h.c,o,i),M(v),E=l}e.f=B(a,e.f)}}var c,f;return e}function W(t,e,n,o,i,r){let l=o.length,s=n.length;const c=Array(l);if(0===l)s>0&&H(t,e,r);else if(0===s)for(;--l>=0;)c[l]=Q(t,o[l].v);else{const f=e.c;let u=s-1,a=l-1,d=0,h=o[a];t:for(;;){for(;n[u].k===h.k;){if(c[a]=U(t,f[u--],h.v,i,!1),d>--a||d>u)break t;h=o[a]}for(;n[d].k===o[d].k;)if(++d>u||d>a)break t;break}if(d>u)for(;a>=d;)c[a]=Q(t,o[a--].v);else if(d>a){l=d;do{null!==(h=f[l++])&&H(t,h,!1)}while(l<=u)}else{let v=0,y=0;const g=u-d+1,p=a-d+1,m=Array(p),b=new Map;for(l=0;l<p;++l)s=l+d,m[l]=-1,b.set(o[s].k,s);for(l=d;l<=u&&y<p;++l)void 0!==(s=b.get(n[l].k))&&(v=s<v?s:-1,++y,m[s-d]=l,c[s]=f[l],f[l]=null);if(g===n.length&&0===y)for(H(t,e,r);a>=0;)c[a]=Q(t,o[a--].v);else{for(l=d;l<=u;l++)null!==(h=f[l])&&H(t,h,!1);if(l=p,!0===i||-1!==v)for(;--l>=0;)h=o[v=d+l].v,c[v]=-1===m[l]?Q(t,h):U(t,c[v],h,i,!1);else{const e=X(m);for(s=e.length-1;--l>=0;)h=o[v=d+l].v,-1===m[l]?c[v]=Q(t,h):(s<0||l!==e[s]?i=!0:--s,c[v]=U(t,c[v],h,i,!1),i=!1)}}}for(;--d>=0;)c[d]=U(t,f[d],o[d].v,i,!1)}e.c=c}function X(t){const e=t.slice(),n=[];let o,i,r,l=0,s=0;for(n[0]=0;s<t.length;++s){const c=t[s];if(c>-1)if(t[r=n[l]]<c)e[s]=r,n[++l]=s;else{for(o=0,i=l;o<i;)t[n[r=o+i>>1]]<c?o=r+1:i=r;c<t[n[o]]&&(o>0&&(e[s]=n[o-1]),n[o]=s)}}for(i=n[l];l>=0;)n[l--]=i,i=e[i];return n}function Y(t,e,n){!0===n?A.call(t,"class",e):t.className=e}function Z(t,e,n){const o=t.style;let i,r;if(void 0===e)for(i in n)void 0!==(r=n[i])&&o.setProperty(i,r);else if(void 0===n)for(i in e)o.removeProperty(i);else{let t=0,l=0;for(i in e)e[i]!==(r=!0===x.call(n,i)?(t++,n[i]):void 0)&&(void 0!==r?o.setProperty(i,r):o.removeProperty(i));const s=Object.keys(n);for(;t<s.length&&l<s.length;++l)i=s[l],!1===x.call(e,i)&&(o.setProperty(i,n[i]),++t)}}function tt(t,e,n){let o;if(void 0===e)for(o in n)et(t,o,void 0,n[o]);else if(void 0===n)for(o in e)et(t,o,e[o],void 0);else{let i=0,r=0;for(o in e)et(t,o,e[o],!0===x.call(n,o)?(i++,n[o]):void 0);const l=Object.keys(n);for(;i<l.length&&r<l.length;++r)o=l[r],!1===x.call(e,o)&&(et(t,o,void 0,n[o]),++i)}}function et(t,e,n,o){"style"!==e?"object"===typeof o?o.u(t,e,void 0===n?void 0:n.v,o.v):n!==o&&("object"===typeof n?n.u(t,e,n.v,void 0):("boolean"===typeof o&&(o=o?"":void 0),void 0===o?P.call(t,e):A.call(t,e,o))):n!==o&&Z(t,n,o)}const nt=[],ot=t=>nt.find(t);function it(){for(let t=0;t<nt.length;++t){const e=nt[t],{container:n,state:o,next:i}=e;S=null,T=0,E=!1,void 0!==i?(e.next=void 0,e.state=U(n,o,i,!1,!0)):null!==o&&R(n,o,!1,!0)}}function rt(t){for(;t.v.length>0;){const e=t.v;let n=0;t.v=[];do{e[n++]()}while(n<e.length)}}let lt=0;const st={v:[]},ct={v:[]},ft={v:[]},ut=[],at=[];let dt=0;const ht=t=>y(function(){lt|=1,t.apply(void 0,arguments),rt(st),lt&=-4}),vt=ht(g),yt=(t=>ht(e=>{lt|=16,t(e),0!==(4&lt)&&(dt=void 0===e?performance.now():e,p(ut),0!==(32&lt)&&it(),rt(ct),p(at),rt(ft)),lt&=-61}))(g);function gt(t){var e,n;void 0!==t&&0!==(1&t)&&0===(8&lt)?0===(16&(lt|=12))&&(e=yt,st.v.push(e),0===(3&lt)&&(lt|=2,n=vt,Promise.resolve().then(n))):0===(4&lt)&&0===(16&(lt|=4))&&h(yt)}function pt(t){lt|=32,gt(t)}function mt(t,e,n){const o=ot(t=>t.container===e);o?o.next=t:(nt.push({container:e,state:null,next:t}),m&&(e.onclick=g)),pt(n)}function bt(t,e,n){const o=ot(t=>t.container.contains(e));if(o){const i=o.container;i!==e&&wt(t,n,e,i,o.state)}}function wt(t,e,n,o,i){const r=n.parentNode;return r===o||null!==(i=wt(t,e,r,o,i))?xt(t,e,n,i):null}function xt(t,e,n,o){if(null!==o){const{f:i,c:r}=o;let l;if(0!==(2&i)){if(o.s===n)return o;if(null!==r)return xt(t,e,n,r)}else if(0!==(52&i)){if(null!==(l=xt(t,e,n,o.c)))return 0!==(16&i)&&kt(t,o,o.o.d.v,e),l}else if(0!==(136&i))for(let o=0;o<r.length;o++)if(null!==(l=xt(t,e,n,r[o])))return l}return null}function kt(t,e,n,o){if(null!==n)if(n instanceof Array)for(let i=0;i<n.length;++i)kt(t,e,n[i],o);else!0===o(n)&&t.push({t:e,h:n})}function Ot(t,e,n,o){let i=t.length;for(;--i>=0;)if(jt(t[i],e,1,o),2&e.flags)return;if(n)for(;++i<t.length;)if(jt(t[i],e,2,o),2&e.flags)return}function jt(t,e,n,o){const i=t.h;(i.d.flags&n)===n&&(e.node=t.t,e.flags|=At(i,o,e))}function At(t,e,n){const o=void 0===e?t.h(n):e(t,n);return void 0===o?0:o}function Pt(t,e,n,o){return{flags:t,timestamp:e,node:n,native:o}}function Dt(t,e,n=!0){const o={a:null,b:null},i=t=>t.d.src===o;return document.addEventListener(e,ht(e=>{const n=[];if(bt(n,e.target,i),n.length||o.b||o.a){const i=Pt(0,e.timeStamp,null,e);Nt(o.b,i),n.length&&Ot(n,i,0!==(4&t)),Nt(o.a,i),1&i.flags&&e.preventDefault()}}),n),o}function Nt(t,e){if(null!==t){e.node=null;const n=t.slice();for(let t=0;t<n.length;t++)n[t](e)}}function St(t){const e={src:t,flags:2},n={src:t,flags:1};return(t,o)=>({d:!0===o?n:e,h:t})}const Tt=St(Dt(5,"keydown"));function Et(t,e,n,o){var i;void 0===n&&o&&(i=(()=>{t.focus()}),ft.v.push(i),gt(void 0))}const Ct={v:!1,u:Et},It={v:!0,u:Et},Mt=t=>t?It:Ct,Ft=t=>({v:t}),_t=a("div"),Bt={x:-1,y:0},Gt={x:1,y:0},Rt={x:0,y:-1},Lt={x:0,y:1};class $t{constructor(t={x:0,y:0}){this.body=[],this.grow=4,this.body.push(t)}get head(){return this.body[this.body.length-1]}move(t){if(this.body.push(t),this.grow)return this.grow--,null;{const t=this.body[0];return this.body=this.body.splice(1),t}}}class qt{constructor(t=20,e=20){this.rows=t,this.cols=e,this.cells=new Array(t*e).fill(0)}pointToIndex(t){return this.cols*t.y+t.x}mark(t,e){this.cells[this.pointToIndex(t)]|=e}unmark(t,e){this.cells[this.pointToIndex(t)]&=~e}createRandomFood(){let t=0;do{t=Math.random()*this.cells.length|0}while(0!==this.cells[t]);this.cells[t]|=4}isBodyAt(t){return!!(1&this.cells[this.pointToIndex(t)])}isHeadAt(t){return!!(2&this.cells[this.pointToIndex(t)])}isFoodAt(t){return!!(4&this.cells[this.pointToIndex(t)])}}function Ht(t,e){return{x:t.x+e.x,y:t.y+e.y}}function Kt(t,e){return(t%e+e)%e}function Vt(t){return 1&t?2&t?"Cell body head":"Cell body":4&t?"Cell food":"Cell"}const zt=function(t,e){const n=o(4356,{c:()=>{let t;const e=Tt(e=>{switch(e.native.keyCode){case 37:return t.setNewDirection(Bt),1;case 38:return t.setNewDirection(Rt),1;case 39:return t.setNewDirection(Gt),1;case 40:return t.setNewDirection(Lt),1}});return n=>(t=n.v,_t(t.gameOver?"SnakeGame gameOver":"SnakeGame",void 0,s(e,_t("Grid",{tabIndex:0,autofocus:Mt(!0),style:{width:`${30*t.grid.cols}px`,height:`${30*t.grid.rows}px`}},f(t.grid.cells.map((t,e)=>c(e,_t(Vt(t)))))))))},su:void 0});return t=>l(n,t)}(),Jt=document.getElementById("app"),Qt=new class{constructor(){this.gameOver=!1,this.startTime=0,this.currentTime=0,this.direction={x:1,y:0},this.grid=new qt,this.snake=new $t,this.newDirection=null,this.snake.body.forEach(t=>{this.grid.mark(t,1)}),this.grid.mark(this.snake.head,2),this.grid.createRandomFood()}setNewDirection(t){this.newDirection=t}updateState(){if(!this.gameOver){this.newDirection&&(e={x:0,y:0},((t=Ht(this.direction,this.newDirection)).x!==e.x||t.y!==e.y)&&(this.direction=this.newDirection),this.newDirection=null);let n=Ht(this.snake.head,this.direction);n={x:Kt(n.x,this.grid.cols),y:Kt(n.y,this.grid.rows)},this.grid.unmark(this.snake.head,2);const o=this.snake.move(n);o&&this.grid.unmark(o,1),this.grid.mark(n,2),this.grid.isBodyAt(n)?this.gameOver=!0:this.grid.isFoodAt(n)&&(this.snake.grow=3,this.grid.unmark(n,4),this.grid.createRandomFood()),this.grid.mark(n,1)}var t,e}};!function t(){Qt.updateState(),mt(zt(Ft(Qt)),Jt),setTimeout(t,100)}()}});