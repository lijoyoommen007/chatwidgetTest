!function(){"use strict";try{if("undefined"!=typeof document){var e=document.createElement("style");e.appendChild(document.createTextNode(":root{font-family:Inter,system-ui,Avenir,Helvetica,Arial,sans-serif;line-height:1.5;font-weight:400;color-scheme:light dark;color:#ffffffde;background-color:#fff;font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}#root{max-width:1280px;margin:0 auto;padding:2rem;text-align:center}.logo{height:6em;padding:1.5em;will-change:filter;transition:filter .3s}.logo:hover{filter:drop-shadow(0 0 2em #646cffaa)}.logo.solid:hover{filter:drop-shadow(0 0 2em #61dafbaa)}.card{padding:2em}.read-the-docs{color:#888}.chat-bot-container{position:absolute;bottom:20px;right:20px;z-index:1000}.chat-icon{background-color:#000;color:#fff;width:70px;height:70px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 4px 10px #0000001a;transition:transform .3s ease,background-color .3s ease}.chat-icon-svg{width:30px;height:30px;color:#fff;transform-origin:center;transition:transform .3s ease}.chat-icon-svg.popup-animation{animation:svgPopup .3s ease-out}@keyframes svgPopup{0%{transform:scale(0)}to{transform:scale(1)}}.chat-icon:hover{transform:scale(1.2);background-color:#333}.chat-icon:hover .chat-icon-svg{animation:wobble .8s ease-in-out infinite}@keyframes wobble{0%,to{transform:rotate(0)}25%{transform:rotate(5deg)}50%{transform:rotate(-5deg)}75%{transform:rotate(3deg)}}.chat-bot-card{display:flex;align-items:center;position:absolute;bottom:80px;right:0;width:350px;background-color:#282121;border-radius:25px;box-shadow:0 8px 20px #0003;padding:0;animation:slideIn .5s ease forwards}@keyframes slideIn{0%{transform:translateY(100%);opacity:0}to{transform:translateY(0);opacity:1}}.chat-representative{display:flex;justify-content:center}.representative-image{width:50px;height:50px;border-radius:50%;animation:fadeIn .5s ease-in-out forwards}.chat-messages{padding-right:10px;font-size:14px;color:#fff;margin-left:20px;animation:fadeIn .5s ease-in-out forwards}.message{margin:0;opacity:0;animation:fadeInMessage .7s ease forwards}@keyframes fadeInMessage{0%{opacity:0;transform:translate(-20px)}to{opacity:1;transform:translate(0)}}.close-button{position:absolute;top:0;right:15px;font-size:14px;display:flex;align-items:center;width:15px;height:15px;justify-content:center;cursor:pointer;color:#fff}.close-button:hover{transform:scale(1.2)}#chat-container{width:350px;height:500px;background-color:#2b2b2b;border-radius:10px;box-shadow:0 4px 10px #00000080;display:flex;flex-direction:column;position:fixed;bottom:20px;right:20px;transition:all .5s ease;opacity:0;transform:translateY(100%);animation:slideIn .5s ease forwards}.bot-avatar{width:40px;height:40px;border-radius:50%;margin-right:10px}.chat-bot-main-section.close-animation{opacity:0;transform:translateY(100%)}.chat-header{background-color:#1e1e1e;color:#fff;padding:15px;border-radius:10px 10px 0 0;display:flex;align-items:center;justify-content:space-between}.first-container{display:flex;align-items:center}.chat-header-text{margin-left:10px}.chat-header h4{margin:0;font-size:18px;color:#e0e0e0}.user-name{margin-top:5px;font-size:14px;color:#b0b0b0}.close-btn{background:none;border:none;color:#fff;font-size:2.5rem;cursor:pointer;padding:0;margin-left:auto;transition:transform .3s ease}.close-btn:hover{transform:scale(1.2)}.chat-body{flex:1;padding:10px;overflow-y:auto;display:flex;flex-direction:column;gap:10px;background-color:#2b2b2b;color:#e0e0e0}.chat-message{max-width:75%;padding:10px;border-radius:5px;font-size:14px;line-height:1.4;display:inline-block;color:#fff}.user-message{background-color:#4a4a4a;align-self:flex-end;border-radius:12px 12px 0;animation:slideIn .3s ease forwards}.bot-message{background-color:#3a3a3a;align-self:flex-start;border-radius:12px 12px 12px 0;animation:slideIn .3s ease forwards}.chat-input-section{display:flex;align-items:center;padding:10px;border-top:1px solid #444;background-color:#1e1e1e}.chat-input{flex:1;padding:10px;border-radius:20px;border:1px solid #555;background-color:#2b2b2b;color:#e0e0e0;font-size:14px;outline:none}.chat-input::placeholder{color:#888}.send-btn{background-color:#fff;color:#000;padding:10px;margin-left:10px;border:none;border-radius:50%;cursor:pointer;transition:background-color .3s ease;display:flex}.send-btn:hover{background-color:#000;color:#fff}.chat-body::-webkit-scrollbar{width:10px}.chat-body::-webkit-scrollbar-track{background:#1e1e1e}.chat-body::-webkit-scrollbar-thumb{background-color:#444;border-radius:10px}")),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}}();
!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";const e=Symbol("solid-track"),t={equals:(e,t)=>e===t};let n=$;const s=1,r=2,o={owned:null,cleanups:null,context:null,owner:null};var l=null;let i=null,c=null,u=null,a=null,f=0;function d(e,t){const n=c,s=l,r=0===e.length,i=void 0===t?s:t,u=r?o:{owned:null,cleanups:null,context:i?i.context:null,owner:i},a=r?e:()=>e((()=>b((()=>L(u)))));l=u,c=null;try{return k(a,!0)}finally{c=n,l=s}}function h(e,n){const s={value:e,observers:null,observerSlots:null,comparator:(n=n?Object.assign({},t,n):t).equals||void 0};return[w.bind(s),e=>("function"==typeof e&&(e=e(s.value)),x(s,e))]}function p(e,t,n){A(S(e,t,!1,s))}function g(e,t,r){n=T;const o=S(e,t,!1,s);o.user=!0,a?a.push(o):A(o)}function v(e,n,s){s=s?Object.assign({},t,s):t;const r=S(e,n,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=s.equals||void 0,A(r),w.bind(r)}function b(e){if(null===c)return e();const t=c;c=null;try{return e()}finally{c=t}}function m(e){g((()=>b(e)))}function y(e){return null===l||(null===l.cleanups?l.cleanups=[e]:l.cleanups.push(e)),e}function w(){if(this.sources&&this.state)if(this.state===s)A(this);else{const e=u;u=null,k((()=>E(this)),!1),u=e}if(c){const e=this.observers?this.observers.length:0;c.sources?(c.sources.push(this),c.sourceSlots.push(e)):(c.sources=[this],c.sourceSlots=[e]),this.observers?(this.observers.push(c),this.observerSlots.push(c.sources.length-1)):(this.observers=[c],this.observerSlots=[c.sources.length-1])}return this.value}function x(e,t,n){let r=e.value;return e.comparator&&e.comparator(r,t)||(e.value=t,e.observers&&e.observers.length&&k((()=>{for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t],r=i&&i.running;r&&i.disposed.has(n),(r?n.tState:n.state)||(n.pure?u.push(n):a.push(n),n.observers&&B(n)),r||(n.state=s)}if(u.length>1e6)throw u=[],new Error}),!1)),t}function A(e){if(!e.fn)return;L(e);const t=f;!function(e,t,n){let r;const o=l,i=c;c=l=e;try{r=e.fn(t)}catch(u){return e.pure&&(e.state=s,e.owned&&e.owned.forEach(L),e.owned=null),e.updatedAt=n+1,N(u)}finally{c=i,l=o}(!e.updatedAt||e.updatedAt<=n)&&(null!=e.updatedAt&&"observers"in e?x(e,r):e.value=r,e.updatedAt=n)}(e,e.value,t)}function S(e,t,n,r=s,i){const c={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:l,context:l?l.context:null,pure:n};return null===l||l!==o&&(l.owned?l.owned.push(c):l.owned=[c]),c}function C(e){if(0===e.state)return;if(e.state===r)return E(e);if(e.suspense&&b(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<f);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if((e=t[n]).state===s)A(e);else if(e.state===r){const n=u;u=null,k((()=>E(e,t[0])),!1),u=n}}function k(e,t){if(u)return e();let s=!1;t||(u=[]),a?s=!0:a=[],f++;try{const t=e();return function(e){u&&($(u),u=null);if(e)return;const t=a;a=null,t.length&&k((()=>n(t)),!1)}(s),t}catch(r){s||(a=null),u=null,N(r)}}function $(e){for(let t=0;t<e.length;t++)C(e[t])}function T(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:C(s)}for(t=0;t<n;t++)C(e[t])}function E(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const o=e.sources[n];if(o.sources){const e=o.state;e===s?o!==t&&(!o.updatedAt||o.updatedAt<f)&&C(o):e===r&&E(o,t)}}}function B(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=r,n.pure?u.push(n):a.push(n),n.observers&&B(n))}}function L(e){let t;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),n=e.sourceSlots.pop(),s=t.observers;if(s&&s.length){const e=s.pop(),r=t.observerSlots.pop();n<s.length&&(e.sourceSlots[r]=n,s[n]=e,t.observerSlots[n]=r)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)L(e.tOwned[t]);delete e.tOwned}if(e.owned){for(t=e.owned.length-1;t>=0;t--)L(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function N(e,t=l){const n=function(e){return e instanceof Error?e:new Error("string"==typeof e?e:"Unknown error",{cause:e})}(e);throw n}const O=Symbol("fallback");function j(e){for(let t=0;t<e.length;t++)e[t]()}function _(e,t){return b((()=>e(t||{})))}function M(t){const n="fallback"in t&&{fallback:()=>t.fallback};return v(function(t,n,s={}){let r=[],o=[],l=[],i=0,c=n.length>1?[]:null;return y((()=>j(l))),()=>{let u,a,f=t()||[],p=f.length;return f[e],b((()=>{let e,t,n,h,v,b,m,y,w;if(0===p)0!==i&&(j(l),l=[],r=[],o=[],i=0,c&&(c=[])),s.fallback&&(r=[O],o[0]=d((e=>(l[0]=e,s.fallback()))),i=1);else if(0===i){for(o=new Array(p),a=0;a<p;a++)r[a]=f[a],o[a]=d(g);i=p}else{for(n=new Array(p),h=new Array(p),c&&(v=new Array(p)),b=0,m=Math.min(i,p);b<m&&r[b]===f[b];b++);for(m=i-1,y=p-1;m>=b&&y>=b&&r[m]===f[y];m--,y--)n[y]=o[m],h[y]=l[m],c&&(v[y]=c[m]);for(e=new Map,t=new Array(y+1),a=y;a>=b;a--)w=f[a],u=e.get(w),t[a]=void 0===u?-1:u,e.set(w,a);for(u=b;u<=m;u++)w=r[u],a=e.get(w),void 0!==a&&-1!==a?(n[a]=o[u],h[a]=l[u],c&&(v[a]=c[u]),a=t[a],e.set(w,a)):l[u]();for(a=b;a<p;a++)a in n?(o[a]=n[a],l[a]=h[a],c&&(c[a]=v[a],c[a](a))):o[a]=d(g);o=o.slice(0,i=p),r=f.slice(0)}return o}));function g(e){if(l[a]=e,c){const[e,t]=h(a);return c[a]=t,n(f[a],e)}return n(f[a])}}}((()=>t.each),t.children,n||void 0))}const q="_$DX_DELEGATE";function P(e,t,n,s={}){let r;return d((s=>{r=s,t===document?e():F(t,e(),t.firstChild?null:void 0,n)}),s.owner),()=>{r(),t.textContent=""}}function D(e,t,n){let s;const r=()=>{const t=document.createElement("template");return t.innerHTML=e,n?t.content.firstChild.firstChild:t.content.firstChild},o=t?()=>b((()=>document.importNode(s||(s=r()),!0))):()=>(s||(s=r())).cloneNode(!0);return o.cloneNode=o,o}function I(e,t=window.document){const n=t[q]||(t[q]=new Set);for(let s=0,r=e.length;s<r;s++){const r=e[s];n.has(r)||(n.add(r),t.addEventListener(r,H))}}function z(e,t){null==t?e.removeAttribute("class"):e.className=t}function F(e,t,n,s){if(void 0===n||s||(s=[]),"function"!=typeof t)return R(e,t,s,n);p((s=>R(e,t(),s,n)),s)}function H(e){let t=e.target;const n=`$$${e.type}`,s=e.target,r=e.currentTarget,o=t=>Object.defineProperty(e,"target",{configurable:!0,value:t}),l=()=>{const s=t[n];if(s&&!t.disabled){const r=t[`${n}Data`];if(void 0!==r?s.call(t,r,e):s.call(t,e),e.cancelBubble)return}return t.host&&"string"!=typeof t.host&&!t.host._$host&&t.contains(e.target)&&o(t.host),!0},i=()=>{for(;l()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get:()=>t||document}),e.composedPath){const n=e.composedPath();o(n[0]);for(let e=0;e<n.length-2&&(t=n[e],l());e++){if(t._$host){t=t._$host,i();break}if(t.parentNode===r)break}}else i();o(s)}function R(e,t,n,s,r){for(;"function"==typeof n;)n=n();if(t===n)return n;const o=typeof t,l=void 0!==s;if(e=l&&n[0]&&n[0].parentNode||e,"string"===o||"number"===o){if("number"===o&&(t=t.toString())===n)return n;if(l){let r=n[0];r&&3===r.nodeType?r.data!==t&&(r.data=t):r=document.createTextNode(t),n=U(e,n,s,r)}else n=""!==n&&"string"==typeof n?e.firstChild.data=t:e.textContent=t}else if(null==t||"boolean"===o)n=U(e,n,s);else{if("function"===o)return p((()=>{let r=t();for(;"function"==typeof r;)r=r();n=R(e,r,n,s)})),()=>n;if(Array.isArray(t)){const o=[],i=n&&Array.isArray(n);if(V(o,t,n,r))return p((()=>n=R(e,o,n,s,!0))),()=>n;if(0===o.length){if(n=U(e,n,s),l)return n}else i?0===n.length?G(e,o,s):function(e,t,n){let s=n.length,r=t.length,o=s,l=0,i=0,c=t[r-1].nextSibling,u=null;for(;l<r||i<o;)if(t[l]!==n[i]){for(;t[r-1]===n[o-1];)r--,o--;if(r===l){const t=o<s?i?n[i-1].nextSibling:n[o-i]:c;for(;i<o;)e.insertBefore(n[i++],t)}else if(o===i)for(;l<r;)u&&u.has(t[l])||t[l].remove(),l++;else if(t[l]===n[o-1]&&n[i]===t[r-1]){const s=t[--r].nextSibling;e.insertBefore(n[i++],t[l++].nextSibling),e.insertBefore(n[--o],s),t[r]=n[o]}else{if(!u){u=new Map;let e=i;for(;e<o;)u.set(n[e],e++)}const s=u.get(t[l]);if(null!=s)if(i<s&&s<o){let c,a=l,f=1;for(;++a<r&&a<o&&null!=(c=u.get(t[a]))&&c===s+f;)f++;if(f>s-i){const r=t[l];for(;i<s;)e.insertBefore(n[i++],r)}else e.replaceChild(n[i++],t[l++])}else l++;else t[l++].remove()}}else l++,i++}(e,n,o):(n&&U(e),G(e,o));n=o}else if(t.nodeType){if(Array.isArray(n)){if(l)return n=U(e,n,s,t);U(e,n,null,t)}else null!=n&&""!==n&&e.firstChild?e.replaceChild(t,e.firstChild):e.appendChild(t);n=t}}return n}function V(e,t,n,s){let r=!1;for(let o=0,l=t.length;o<l;o++){let l,i=t[o],c=n&&n[e.length];if(null==i||!0===i||!1===i);else if("object"==(l=typeof i)&&i.nodeType)e.push(i);else if(Array.isArray(i))r=V(e,i,c)||r;else if("function"===l)if(s){for(;"function"==typeof i;)i=i();r=V(e,Array.isArray(i)?i:[i],Array.isArray(c)?c:[c])||r}else e.push(i),r=!0;else{const t=String(i);c&&3===c.nodeType&&c.data===t?e.push(c):e.push(document.createTextNode(t))}}return r}function G(e,t,n=null){for(let s=0,r=t.length;s<r;s++)e.insertBefore(t[s],n)}function U(e,t,n,s){if(void 0===n)return e.textContent="";const r=s||document.createTextNode("");if(t.length){let s=!1;for(let o=t.length-1;o>=0;o--){const l=t[o];if(r!==l){const t=l.parentNode===e;s||o?t&&l.remove():t?e.replaceChild(r,l):e.insertBefore(r,n)}else s=!0}}else e.insertBefore(r,n);return[r]}var W=D("<div class=chat-bot-card><div class=chat-representative><img src=https://s11.gifyu.com/images/SAygk.jpg alt=Representative class=representative-image></div><div class=chat-messages></div><div class=close-button>&times; "),X=D("<p class=message>Hi there, how can I help you?"),Y=D("<p class=message>Want to know more? Feel free to ask!");const J=e=>{const[t,n]=h(0);return m((()=>{let e;0===t()?e=setTimeout((()=>{n(1)}),500):1===t()&&(e=setTimeout((()=>{n(2)}),2e3)),y((()=>clearTimeout(e)))})),c=W(),u=c.firstChild.nextSibling,a=u.nextSibling,F(u,(s=v((()=>1===t())),()=>s()&&X()),null),F(u,(r=v((()=>2===t())),()=>r()&&Y()),null),o=a,l="click",i=e.closeChat,Array.isArray(i)?(o[`$$${l}`]=i[0],o[`$$${l}Data`]=i[1]):o[`$$${l}`]=i,c;var s,r,o,l,i,c,u,a};I(["click"]);var K=D('<div id=chat-container><div class=chat-header><div class=first-container><img src=https://s11.gifyu.com/images/SAygk.jpg alt=Bot class=bot-avatar loading=lazy><div class=chat-header-text><h4>LIVE PRO ACESOFT</h4><span class=user-name>Lijoy Oommen</span></div></div><button class=close-btn>-</button></div><div class=chat-body></div><div class=chat-input-section><input type=text class=chat-input placeholder="Type a message..."><button class=send-btn><svg xmlns=http://www.w3.org/2000/svg viewBox="0 0 24 24"fill=currentColor width=20px height=20px><path d=M2.01,21L23,12L2.01,3v7l15,2l-15,2V21z></path></svg></button> ',!0,!1),Q=D("<div><div class=message-text>");const Z=e=>{const[t,n]=h([]),[s,r]=h(""),[o,l]=h(!1);let i;g((()=>{const e=document.getElementById("chat-container");e.style.transform="translateY(0)",e.style.opacity=1})),g((()=>{i&&(i.scrollTop=i.scrollHeight)}),[t()]);const c=()=>{l(!0),setTimeout((()=>{e.closeChat()}),500)},u=()=>{s().trim()&&(n((e=>[...e,{text:s(),sender:"user"}])),r(""),setTimeout((()=>{n((e=>[...e,{text:"This is a dummy bot response.",sender:"bot"}]))}),1e3))};return v=K(),m=v.firstChild,y=m.firstChild.nextSibling,w=m.nextSibling,x=w.nextSibling.firstChild,A=x.nextSibling,y.$$click=c,a=e=>i=e,f=w,b((()=>a(f,d))),F(w,_(M,{get each(){return t()},children:(e,t)=>{return F((n=Q()).firstChild,(()=>e.text)),p((s=>{var r,o,l,i=t(),c="chat-message "+("user"===e.sender?"user-message":"bot-message");return i!==s.e&&(r=n,o="key",null==(l=s.e=i)?r.removeAttribute(o):r.setAttribute(o,l)),c!==s.t&&z(n,s.t=c),s}),{e:void 0,t:void 0}),n;var n}})),x.addEventListener("keypress",(e=>"Enter"===e.key&&u())),x.$$input=e=>r(e.target.value),A.$$click=u,p((()=>z(v,"chat-bot-main-section "+(o()?"close-animation":"")))),p((()=>x.value=s())),v;var a,f,d,v,m,y,w,x,A};I(["click","input"]);var ee=D('<div class=chat-bot-container><div class=chat-icon><svg fill=#fff class=chat-icon-svg version=1.1 id=Capa_1 xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink viewBox="0 0 60 60"xml:space=preserve><path d="M30,1.5c-16.542,0-30,12.112-30,27c0,5.205,1.647,10.246,4.768,14.604c-0.591,6.537-2.175,11.39-4.475,13.689\r\n            c-0.304,0.304-0.38,0.769-0.188,1.153C0.276,58.289,0.625,58.5,1,58.5c0.046,0,0.093-0.003,0.14-0.01\r\n            c0.405-0.057,9.813-1.412,16.617-5.338C21.622,54.711,25.738,55.5,30,55.5c16.542,0,30-12.112,30-27S46.542,1.5,30,1.5z">');const te=()=>{const[e,t]=h(!1),[n,s]=h(!1);m((()=>{const e=setTimeout((()=>t(!0)),1e3),n=document.querySelector(".chat-icon-svg");n.classList.add("popup-animation");const s=setTimeout((()=>{n.classList.remove("popup-animation")}),300);y((()=>{clearTimeout(e),clearTimeout(s)}))}));const r=()=>{s(!n())};return(i=ee()).firstChild.$$click=r,F(i,(o=v((()=>!(!e()||n()))),()=>o()&&_(J,{closeChat:()=>t(!1)})),null),F(i,(l=v((()=>!!n())),()=>l()&&_(Z,{closeChat:()=>s(!1)})),null),i;var o,l,i};if(!document.querySelector(".chat-bot-container")){const e=document.createElement("div");e.classList.add("chat-bot-container"),document.body.appendChild(e),P((()=>_(te,{})),e)}function ne(){return[]}I(["click"]);P((()=>_(ne,{})),document.getElementById("root"))}));
