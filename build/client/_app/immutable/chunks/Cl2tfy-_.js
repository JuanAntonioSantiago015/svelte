var Qt=t=>{throw TypeError(t)};var je=(t,e,n)=>e.has(t)||Qt("Cannot "+n);var k=(t,e,n)=>(je(t,e,"read from private field"),n?n.call(t):e.get(t)),P=(t,e,n)=>e.has(t)?Qt("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n);import{an as pt,u as $e,aG as De,aD as C,g as O,b as N,aE as Fe}from"./CaUj3mEh.js";import{o as te}from"./C_d15Yp-.js";function Ve(t,e,n){if(t==null)return e(void 0),pt;const r=$e(()=>t.subscribe(e,n));return r.unsubscribe?()=>r.unsubscribe():r}const q=[];function jt(t,e=pt){let n=null;const r=new Set;function a(o){if(De(t,o)&&(t=o,n)){const c=!q.length;for(const l of r)l[1](),q.push(l,t);if(c){for(let l=0;l<q.length;l+=2)q[l][0](q[l+1]);q.length=0}}}function s(o){a(o(t))}function i(o,c=pt){const l=[o,c];return r.add(l),r.size===1&&(n=e(a,s)||pt),o(t),()=>{r.delete(l),r.size===0&&n&&(n(),n=null)}}return{set:a,update:s,subscribe:i}}function Mn(t){let e;return Ve(t,n=>e=n)(),e}new URL("sveltekit-internal://");function Be(t,e){return t==="/"||e==="ignore"?t:e==="never"?t.endsWith("/")?t.slice(0,-1):t:e==="always"&&!t.endsWith("/")?t+"/":t}function qe(t){return t.split("%25").map(decodeURI).join("%25")}function Ge(t){for(const e in t)t[e]=decodeURIComponent(t[e]);return t}function Lt({href:t}){return t.split("#")[0]}function Me(t,e,n,r=!1){const a=new URL(t);Object.defineProperty(a,"searchParams",{value:new Proxy(a.searchParams,{get(i,o){if(o==="get"||o==="getAll"||o==="has")return l=>(n(l),i[o](l));e();const c=Reflect.get(i,o);return typeof c=="function"?c.bind(i):c}}),enumerable:!0,configurable:!0});const s=["href","pathname","search","toString","toJSON"];r&&s.push("hash");for(const i of s)Object.defineProperty(a,i,{get(){return e(),t[i]},enumerable:!0,configurable:!0});return a}function He(...t){let e=5381;for(const n of t)if(typeof n=="string"){let r=n.length;for(;r;)e=e*33^n.charCodeAt(--r)}else if(ArrayBuffer.isView(n)){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let a=r.length;for(;a;)e=e*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}function Ke(t){const e=atob(t),n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n.buffer}const We=window.fetch;window.fetch=(t,e)=>((t instanceof Request?t.method:(e==null?void 0:e.method)||"GET")!=="GET"&&Y.delete($t(t)),We(t,e));const Y=new Map;function Ye(t,e){const n=$t(t,e),r=document.querySelector(n);if(r!=null&&r.textContent){let{body:a,...s}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&Y.set(n,{body:a,init:s,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=Ke(a)),Promise.resolve(new Response(a,s))}return window.fetch(t,e)}function ze(t,e,n){if(Y.size>0){const r=$t(t,n),a=Y.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(a.body,a.init);Y.delete(r)}}return window.fetch(e,n)}function $t(t,e){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(e!=null&&e.headers||e!=null&&e.body){const a=[];e.headers&&a.push([...new Headers(e.headers)].join(",")),e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&a.push(e.body),r+=`[data-hash="${He(...a)}"]`}return r}const Je=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Xe(t){const e=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${Qe(t).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return e.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const s=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(s)return e.push({name:s[1],matcher:s[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return Tt(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return Tt(String.fromCharCode(...c.slice(2).split("-").map(p=>parseInt(p,16))));const d=Je.exec(c),[,u,w,f,m]=d;return e.push({name:f,matcher:m,optional:!!u,rest:!!w,chained:w?l===1&&i[0]==="":!1}),w?"(.*?)":u?"([^/]*)?":"([^/]+?)"}return Tt(c)}).join("")}).join("")}/?$`),params:e}}function Ze(t){return!/^\([^)]+\)$/.test(t)}function Qe(t){return t.slice(1).split("/").filter(Ze)}function tn(t,e,n){const r={},a=t.slice(1),s=a.filter(o=>o!==void 0);let i=0;for(let o=0;o<e.length;o+=1){const c=e[o];let l=a[o-i];if(c.chained&&c.rest&&i&&(l=a.slice(o-i,o+1).filter(d=>d).join("/"),i=0),l===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||n[c.matcher](l)){r[c.name]=l;const d=e[o+1],u=a[o+1];d&&!d.rest&&d.optional&&u&&c.chained&&(i=0),!d&&!u&&Object.keys(r).length===s.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function Tt(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function en({nodes:t,server_loads:e,dictionary:n,matchers:r}){const a=new Set(e);return Object.entries(n).map(([o,[c,l,d]])=>{const{pattern:u,params:w}=Xe(o),f={id:o,exec:m=>{const p=u.exec(m);if(p)return tn(p,w,r)},errors:[1,...d||[]].map(m=>t[m]),layouts:[0,...l||[]].map(i),leaf:s(c)};return f.errors.length=f.layouts.length=Math.max(f.errors.length,f.layouts.length),f});function s(o){const c=o<0;return c&&(o=~o),[c,t[o]]}function i(o){return o===void 0?o:[a.has(o),t[o]]}}function ge(t,e=JSON.parse){try{return e(sessionStorage[t])}catch{}}function ee(t,e,n=JSON.stringify){const r=n(e);try{sessionStorage[t]=r}catch{}}var fe;const x=((fe=globalThis.__sveltekit_19l29c)==null?void 0:fe.base)??"";var ue;const nn=((ue=globalThis.__sveltekit_19l29c)==null?void 0:ue.assets)??x,rn="1744045187268",me="sveltekit:snapshot",we="sveltekit:scroll",_e="sveltekit:states",an="sveltekit:pageurl",M="sveltekit:history",Z="sveltekit:navigation",F={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},ht=location.origin;function Dt(t){if(t instanceof URL)return t;let e=document.baseURI;if(!e){const n=document.getElementsByTagName("base");e=n.length?n[0].href:document.URL}return new URL(t,e)}function Ft(){return{x:pageXOffset,y:pageYOffset}}function G(t,e){return t.getAttribute(`data-sveltekit-${e}`)}const ne={...F,"":F.hover};function ye(t){let e=t.assignedSlot??t.parentNode;return(e==null?void 0:e.nodeType)===11&&(e=e.host),e}function ve(t,e){for(;t&&t!==e;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=ye(t)}}function Ct(t,e,n){let r;try{if(r=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI),n&&r.hash.match(/^#[^/]/)){const o=location.hash.split("#")[1]||"/";r.hash=`#${o}${r.hash}`}}catch{}const a=t instanceof SVGAElement?t.target.baseVal:t.target,s=!r||!!a||At(r,e,n)||(t.getAttribute("rel")||"").split(/\s+/).includes("external"),i=(r==null?void 0:r.origin)===ht&&t.hasAttribute("download");return{url:r,external:s,target:a,download:i}}function gt(t){let e=null,n=null,r=null,a=null,s=null,i=null,o=t;for(;o&&o!==document.documentElement;)r===null&&(r=G(o,"preload-code")),a===null&&(a=G(o,"preload-data")),e===null&&(e=G(o,"keepfocus")),n===null&&(n=G(o,"noscroll")),s===null&&(s=G(o,"reload")),i===null&&(i=G(o,"replacestate")),o=ye(o);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:ne[r??"off"],preload_data:ne[a??"off"],keepfocus:c(e),noscroll:c(n),reload:c(s),replace_state:c(i)}}function re(t){const e=jt(t);let n=!0;function r(){n=!0,e.update(i=>i)}function a(i){n=!1,e.set(i)}function s(i){let o;return e.subscribe(c=>{(o===void 0||n&&c!==o)&&i(o=c)})}return{notify:r,set:a,subscribe:s}}const be={v:()=>{}};function on(){const{set:t,subscribe:e}=jt(!1);let n;async function r(){clearTimeout(n);try{const a=await fetch(`${nn}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==rn;return i&&(t(!0),be.v(),clearTimeout(n)),i}catch{return!1}}return{subscribe:e,check:r}}function At(t,e,n){return t.origin!==ht||!t.pathname.startsWith(e)?!0:n?!(t.pathname===e+"/"||t.pathname===e+"/index.html"||t.protocol==="file:"&&t.pathname.replace(/\/[^/]+\.html?$/,"")===e):!1}function Hn(t){}function ae(t){const e=cn(t),n=new ArrayBuffer(e.length),r=new DataView(n);for(let a=0;a<n.byteLength;a++)r.setUint8(a,e.charCodeAt(a));return n}const sn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function cn(t){t.length%4===0&&(t=t.replace(/==?$/,""));let e="",n=0,r=0;for(let a=0;a<t.length;a++)n<<=6,n|=sn.indexOf(t[a]),r+=6,r===24&&(e+=String.fromCharCode((n&16711680)>>16),e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,e+=String.fromCharCode(n)):r===18&&(n>>=2,e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255)),e}const ln=-1,fn=-2,un=-3,hn=-4,dn=-5,pn=-6;function gn(t,e){if(typeof t=="number")return a(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);function a(s,i=!1){if(s===ln)return;if(s===un)return NaN;if(s===hn)return 1/0;if(s===dn)return-1/0;if(s===pn)return-0;if(i)throw new Error("Invalid input");if(s in r)return r[s];const o=n[s];if(!o||typeof o!="object")r[s]=o;else if(Array.isArray(o))if(typeof o[0]=="string"){const c=o[0],l=e==null?void 0:e[c];if(l)return r[s]=l(a(o[1]));switch(c){case"Date":r[s]=new Date(o[1]);break;case"Set":const d=new Set;r[s]=d;for(let f=1;f<o.length;f+=1)d.add(a(o[f]));break;case"Map":const u=new Map;r[s]=u;for(let f=1;f<o.length;f+=2)u.set(a(o[f]),a(o[f+1]));break;case"RegExp":r[s]=new RegExp(o[1],o[2]);break;case"Object":r[s]=Object(o[1]);break;case"BigInt":r[s]=BigInt(o[1]);break;case"null":const w=Object.create(null);r[s]=w;for(let f=1;f<o.length;f+=2)w[o[f]]=a(o[f+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const f=globalThis[c],m=o[1],p=ae(m),h=new f(p);r[s]=h;break}case"ArrayBuffer":{const f=o[1],m=ae(f);r[s]=m;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(o.length);r[s]=c;for(let l=0;l<o.length;l+=1){const d=o[l];d!==fn&&(c[l]=a(d))}}else{const c={};r[s]=c;for(const l in o){const d=o[l];c[l]=a(d)}}return r[s]}return a(0)}const ke=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...ke];const mn=new Set([...ke]);[...mn];function wn(t){return t.filter(e=>e!=null)}class Et{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Vt{constructor(e,n){this.status=e,this.location=n}}class Bt extends Error{constructor(e,n,r){super(r),this.status=e,this.text=n}}const _n="x-sveltekit-invalidated",yn="x-sveltekit-trailing-slash";function mt(t){return t instanceof Et||t instanceof Bt?t.status:500}function vn(t){return t instanceof Bt?t.text:"Internal Error"}let U,Q,xt;const bn=te.toString().includes("$$")||/function \w+\(\) \{\}/.test(te.toString());var nt,rt,at,ot,st,it,ct,lt,he,ft,de,ut,pe;bn?(U={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},Q={current:null},xt={current:!1}):(U=new(he=class{constructor(){P(this,nt,C({}));P(this,rt,C(null));P(this,at,C(null));P(this,ot,C({}));P(this,st,C({id:null}));P(this,it,C({}));P(this,ct,C(-1));P(this,lt,C(new URL("https://example.com")))}get data(){return O(k(this,nt))}set data(e){N(k(this,nt),e)}get form(){return O(k(this,rt))}set form(e){N(k(this,rt),e)}get error(){return O(k(this,at))}set error(e){N(k(this,at),e)}get params(){return O(k(this,ot))}set params(e){N(k(this,ot),e)}get route(){return O(k(this,st))}set route(e){N(k(this,st),e)}get state(){return O(k(this,it))}set state(e){N(k(this,it),e)}get status(){return O(k(this,ct))}set status(e){N(k(this,ct),e)}get url(){return O(k(this,lt))}set url(e){N(k(this,lt),e)}},nt=new WeakMap,rt=new WeakMap,at=new WeakMap,ot=new WeakMap,st=new WeakMap,it=new WeakMap,ct=new WeakMap,lt=new WeakMap,he),Q=new(de=class{constructor(){P(this,ft,C(null))}get current(){return O(k(this,ft))}set current(e){N(k(this,ft),e)}},ft=new WeakMap,de),xt=new(pe=class{constructor(){P(this,ut,C(!1))}get current(){return O(k(this,ut))}set current(e){N(k(this,ut),e)}},ut=new WeakMap,pe),be.v=()=>xt.current=!0);function kn(t){Object.assign(U,t)}const An="/__data.json",En=".html__data.json";function Sn(t){return t.endsWith(".html")?t.replace(/\.html$/,En):t.replace(/\/$/,"")+An}const Rn=new Set(["icon","shortcut icon","apple-touch-icon"]),B=ge(we)??{},tt=ge(me)??{},$={url:re({}),page:re({}),navigating:jt(null),updated:on()};function qt(t){B[t]=Ft()}function In(t,e){let n=t+1;for(;B[n];)delete B[n],n+=1;for(n=e+1;tt[n];)delete tt[n],n+=1}function K(t){return location.href=t.href,new Promise(()=>{})}async function Ae(){if("serviceWorker"in navigator){const t=await navigator.serviceWorker.getRegistration(x||"/");t&&await t.update()}}function oe(){}let Gt,Ot,wt,j,Nt,A;const _t=[],yt=[];let L=null;const dt=new Map,Ee=new Set,Un=new Set,z=new Set;let v={branch:[],error:null,url:null},Mt=!1,vt=!1,se=!0,et=!1,W=!1,Se=!1,Ht=!1,Re,S,T,V;const J=new Set;async function zn(t,e,n){var a,s,i,o;document.URL!==location.href&&(location.href=location.href),A=t,await((s=(a=t.hooks).init)==null?void 0:s.call(a)),Gt=en(t),j=document.documentElement,Nt=e,Ot=t.nodes[0],wt=t.nodes[1],Ot(),wt(),S=(i=history.state)==null?void 0:i[M],T=(o=history.state)==null?void 0:o[Z],S||(S=T=Date.now(),history.replaceState({...history.state,[M]:S,[Z]:T},""));const r=B[S];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),n?await Dn(Nt,n):await X({type:"enter",url:Dt(A.hash?Vn(new URL(location.href)):location.href),replace_state:!0}),$n()}function Ln(){_t.length=0,Ht=!1}function Ie(t){yt.some(e=>e==null?void 0:e.snapshot)&&(tt[t]=yt.map(e=>{var n;return(n=e==null?void 0:e.snapshot)==null?void 0:n.capture()}))}function Ue(t){var e;(e=tt[t])==null||e.forEach((n,r)=>{var a,s;(s=(a=yt[r])==null?void 0:a.snapshot)==null||s.restore(n)})}function ie(){qt(S),ee(we,B),Ie(T),ee(me,tt)}async function Kt(t,e,n,r){return X({type:"goto",url:Dt(t),keepfocus:e.keepFocus,noscroll:e.noScroll,replace_state:e.replaceState,state:e.state,redirect_count:n,nav_token:r,accept:()=>{e.invalidateAll&&(Ht=!0),e.invalidate&&e.invalidate.forEach(jn)}})}async function Tn(t){if(t.id!==(L==null?void 0:L.id)){const e={};J.add(e),L={id:t.id,token:e,promise:xe({...t,preload:e}).then(n=>(J.delete(e),n.type==="loaded"&&n.state.error&&(L=null),n))}}return L.promise}async function Pt(t){var n;const e=(n=await Rt(t,!1))==null?void 0:n.route;e&&await Promise.all([...e.layouts,e.leaf].map(r=>r==null?void 0:r[1]()))}function Le(t,e,n){var a;v=t.state;const r=document.querySelector("style[data-sveltekit]");if(r&&r.remove(),Object.assign(U,t.props.page),Re=new A.root({target:e,props:{...t.props,stores:$,components:yt},hydrate:n,sync:!1}),Ue(T),n){const s={from:null,to:{params:v.params,route:{id:((a=v.route)==null?void 0:a.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};z.forEach(i=>i(s))}vt=!0}function bt({url:t,params:e,branch:n,status:r,error:a,route:s,form:i}){let o="never";if(x&&(t.pathname===x||t.pathname===x+"/"))o="always";else for(const f of n)(f==null?void 0:f.slash)!==void 0&&(o=f.slash);t.pathname=Be(t.pathname,o),t.search=t.search;const c={type:"loaded",state:{url:t,params:e,branch:n,error:a,route:s},props:{constructors:wn(n).map(f=>f.node.component),page:Jt(U)}};i!==void 0&&(c.props.form=i);let l={},d=!U,u=0;for(let f=0;f<Math.max(n.length,v.branch.length);f+=1){const m=n[f],p=v.branch[f];(m==null?void 0:m.data)!==(p==null?void 0:p.data)&&(d=!0),m&&(l={...l,...m.data},d&&(c.props[`data_${u}`]=l),u+=1)}return(!v.url||t.href!==v.url.href||v.error!==a||i!==void 0&&i!==U.form||d)&&(c.props.page={error:a,params:e,route:{id:(s==null?void 0:s.id)??null},state:{},status:r,url:new URL(t),form:i??null,data:d?l:U.data}),c}async function Wt({loader:t,parent:e,url:n,params:r,route:a,server_data_node:s}){var d,u,w;let i=null,o=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await t();if((d=l.universal)!=null&&d.load){let f=function(...p){for(const h of p){const{href:y}=new URL(h,n);c.dependencies.add(y)}};const m={route:new Proxy(a,{get:(p,h)=>(o&&(c.route=!0),p[h])}),params:new Proxy(r,{get:(p,h)=>(o&&c.params.add(h),p[h])}),data:(s==null?void 0:s.data)??null,url:Me(n,()=>{o&&(c.url=!0)},p=>{o&&c.search_params.add(p)},A.hash),async fetch(p,h){p instanceof Request&&(h={body:p.method==="GET"||p.method==="HEAD"?void 0:await p.blob(),cache:p.cache,credentials:p.credentials,headers:[...p.headers].length?p.headers:void 0,integrity:p.integrity,keepalive:p.keepalive,method:p.method,mode:p.mode,redirect:p.redirect,referrer:p.referrer,referrerPolicy:p.referrerPolicy,signal:p.signal,...h});const{resolved:y,promise:R}=Te(p,h,n);return o&&f(y.href),R},setHeaders:()=>{},depends:f,parent(){return o&&(c.parent=!0),e()},untrack(p){o=!1;try{return p()}finally{o=!0}}};i=await l.universal.load.call(null,m)??null}return{node:l,loader:t,server:s,universal:(u=l.universal)!=null&&u.load?{type:"data",data:i,uses:c}:null,data:i??(s==null?void 0:s.data)??null,slash:((w=l.universal)==null?void 0:w.trailingSlash)??(s==null?void 0:s.slash)}}function Te(t,e,n){let r=t instanceof Request?t.url:t;const a=new URL(r,n);a.origin===n.origin&&(r=a.href.slice(n.origin.length));const s=vt?ze(r,a.href,e):Ye(r,e);return{resolved:a,promise:s}}function ce(t,e,n,r,a,s){if(Ht)return!0;if(!a)return!1;if(a.parent&&t||a.route&&e||a.url&&n)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(s[i]!==v.params[i])return!0;for(const i of a.dependencies)if(_t.some(o=>o(new URL(i))))return!0;return!1}function Yt(t,e){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?e??null:null}function xn(t,e){if(!t)return new Set(e.searchParams.keys());const n=new Set([...t.searchParams.keys(),...e.searchParams.keys()]);for(const r of n){const a=t.searchParams.getAll(r),s=e.searchParams.getAll(r);a.every(i=>s.includes(i))&&s.every(i=>a.includes(i))&&n.delete(r)}return n}function le({error:t,url:e,route:n,params:r}){return{type:"loaded",state:{error:t,url:e,route:n,params:r,branch:[]},props:{page:Jt(U),constructors:[]}}}async function xe({id:t,invalidating:e,url:n,params:r,route:a,preload:s}){if((L==null?void 0:L.id)===t)return J.delete(L.token),L.promise;const{errors:i,layouts:o,leaf:c}=a,l=[...o,c];i.forEach(g=>g==null?void 0:g().catch(()=>{})),l.forEach(g=>g==null?void 0:g[1]().catch(()=>{}));let d=null;const u=v.url?t!==kt(v.url):!1,w=v.route?a.id!==v.route.id:!1,f=xn(v.url,n);let m=!1;const p=l.map((g,_)=>{var D;const b=v.branch[_],E=!!(g!=null&&g[0])&&((b==null?void 0:b.loader)!==g[1]||ce(m,w,u,f,(D=b.server)==null?void 0:D.uses,r));return E&&(m=!0),E});if(p.some(Boolean)){try{d=await Oe(n,p)}catch(g){const _=await H(g,{url:n,params:r,route:{id:t}});return J.has(s)?le({error:_,url:n,params:r,route:a}):St({status:mt(g),error:_,url:n,route:a})}if(d.type==="redirect")return d}const h=d==null?void 0:d.nodes;let y=!1;const R=l.map(async(g,_)=>{var It;if(!g)return;const b=v.branch[_],E=h==null?void 0:h[_];if((!E||E.type==="skip")&&g[1]===(b==null?void 0:b.loader)&&!ce(y,w,u,f,(It=b.universal)==null?void 0:It.uses,r))return b;if(y=!0,(E==null?void 0:E.type)==="error")throw E;return Wt({loader:g[1],url:n,params:r,route:a,parent:async()=>{var Zt;const Xt={};for(let Ut=0;Ut<_;Ut+=1)Object.assign(Xt,(Zt=await R[Ut])==null?void 0:Zt.data);return Xt},server_data_node:Yt(E===void 0&&g[0]?{type:"skip"}:E??null,g[0]?b==null?void 0:b.server:void 0)})});for(const g of R)g.catch(()=>{});const I=[];for(let g=0;g<l.length;g+=1)if(l[g])try{I.push(await R[g])}catch(_){if(_ instanceof Vt)return{type:"redirect",location:_.location};if(J.has(s))return le({error:await H(_,{params:r,url:n,route:{id:a.id}}),url:n,params:r,route:a});let b=mt(_),E;if(h!=null&&h.includes(_))b=_.status??b,E=_.error;else if(_ instanceof Et)E=_.body;else{if(await $.updated.check())return await Ae(),await K(n);E=await H(_,{params:r,url:n,route:{id:a.id}})}const D=await Pn(g,I,i);return D?bt({url:n,params:r,branch:I.slice(0,D.idx).concat(D.node),status:b,error:E,route:a}):await Ce(n,{id:a.id},E,b)}else I.push(void 0);return bt({url:n,params:r,branch:I,status:200,error:null,route:a,form:e?void 0:null})}async function Pn(t,e,n){for(;t--;)if(n[t]){let r=t;for(;!e[r];)r-=1;try{return{idx:r+1,node:{node:await n[t](),loader:n[t],data:{},server:null,universal:null}}}catch{continue}}}async function St({status:t,error:e,url:n,route:r}){const a={};let s=null;if(A.server_loads[0]===0)try{const o=await Oe(n,[!0]);if(o.type!=="data"||o.nodes[0]&&o.nodes[0].type!=="data")throw 0;s=o.nodes[0]??null}catch{(n.origin!==ht||n.pathname!==location.pathname||Mt)&&await K(n)}try{const o=await Wt({loader:Ot,url:n,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:Yt(s)}),c={node:await wt(),loader:wt,universal:null,server:null,data:null};return bt({url:n,params:a,branch:[o,c],status:t,error:e,route:null})}catch(o){if(o instanceof Vt)return Kt(new URL(o.location,location.href),{},0);throw o}}async function Cn(t){const e=t.href;if(dt.has(e))return dt.get(e);let n;try{const r=(async()=>{let a=await A.hooks.reroute({url:new URL(t),fetch:async(s,i)=>Te(s,i,t).promise})??t;if(typeof a=="string"){const s=new URL(t);A.hash?s.hash=a:s.pathname=a,a=s}return a})();dt.set(e,r),n=await r}catch{dt.delete(e);return}return n}async function Rt(t,e){if(t&&!At(t,x,A.hash)){const n=await Cn(t);if(!n)return;const r=On(n);for(const a of Gt){const s=a.exec(r);if(s)return{id:kt(t),invalidating:e,route:a,params:Ge(s),url:t}}}}function On(t){return qe(A.hash?t.hash.replace(/^#/,"").replace(/[?#].+/,""):t.pathname.slice(x.length))||"/"}function kt(t){return(A.hash?t.hash.replace(/^#/,""):t.pathname)+t.search}function Pe({url:t,type:e,intent:n,delta:r}){let a=!1;const s=zt(v,n,t,e);r!==void 0&&(s.navigation.delta=r);const i={...s.navigation,cancel:()=>{a=!0,s.reject(new Error("navigation cancelled"))}};return et||Ee.forEach(o=>o(i)),a?null:s}async function X({type:t,url:e,popped:n,keepfocus:r,noscroll:a,replace_state:s,state:i={},redirect_count:o=0,nav_token:c={},accept:l=oe,block:d=oe}){const u=V;V=c;const w=await Rt(e,!1),f=t==="enter"?zt(v,w,e,t):Pe({url:e,type:t,delta:n==null?void 0:n.delta,intent:w});if(!f){d(),V===c&&(V=u);return}const m=S,p=T;l(),et=!0,vt&&f.navigation.type!=="enter"&&$.navigating.set(Q.current=f.navigation);let h=w&&await xe(w);if(!h){if(At(e,x,A.hash))return await K(e);h=await Ce(e,{id:null},await H(new Bt(404,"Not Found",`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)}if(e=(w==null?void 0:w.url)||e,V!==c)return f.reject(new Error("navigation aborted")),!1;if(h.type==="redirect")if(o>=20)h=await St({status:500,error:await H(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return await Kt(new URL(h.location,e).href,{},o+1,c),!1;else h.props.page.status>=400&&await $.updated.check()&&(await Ae(),await K(e));if(Ln(),qt(m),Ie(p),h.props.page.url.pathname!==e.pathname&&(e.pathname=h.props.page.url.pathname),i=n?n.state:i,!n){const g=s?0:1,_={[M]:S+=g,[Z]:T+=g,[_e]:i};(s?history.replaceState:history.pushState).call(history,_,"",e),s||In(S,T)}if(L=null,h.props.page.state=i,vt){v=h.state,h.props.page&&(h.props.page.url=e);const g=(await Promise.all(Array.from(Un,_=>_(f.navigation)))).filter(_=>typeof _=="function");if(g.length>0){let _=function(){g.forEach(b=>{z.delete(b)})};g.push(_),g.forEach(b=>{z.add(b)})}Re.$set(h.props),kn(h.props.page),Se=!0}else Le(h,Nt,!1);const{activeElement:y}=document;await Fe();const R=n?n.scroll:a?Ft():null;if(se){const g=e.hash&&document.getElementById(decodeURIComponent(A.hash?e.hash.split("#")[2]??"":e.hash.slice(1)));R?scrollTo(R.x,R.y):g?g.scrollIntoView():scrollTo(0,0)}const I=document.activeElement!==y&&document.activeElement!==document.body;!r&&!I&&Fn(),se=!0,h.props.page&&Object.assign(U,h.props.page),et=!1,t==="popstate"&&Ue(T),f.fulfil(void 0),z.forEach(g=>g(f.navigation)),$.navigating.set(Q.current=null)}async function Ce(t,e,n,r){return t.origin===ht&&t.pathname===location.pathname&&!Mt?await St({status:r,error:n,url:t,route:e}):await K(t)}function Nn(){let t,e,n;j.addEventListener("mousemove",o=>{const c=o.target;clearTimeout(t),t=setTimeout(()=>{s(c,F.hover)},20)});function r(o){o.defaultPrevented||s(o.composedPath()[0],F.tap)}j.addEventListener("mousedown",r),j.addEventListener("touchstart",r,{passive:!0});const a=new IntersectionObserver(o=>{for(const c of o)c.isIntersecting&&(Pt(new URL(c.target.href)),a.unobserve(c.target))},{threshold:0});async function s(o,c){const l=ve(o,j),d=l===e&&c>=n;if(!l||d)return;const{url:u,external:w,download:f}=Ct(l,x,A.hash);if(w||f)return;const m=gt(l),p=u&&kt(v.url)===kt(u);if(!(m.reload||p))if(c<=m.preload_data){e=l,n=F.tap;const h=await Rt(u,!1);if(!h)return;Tn(h)}else c<=m.preload_code&&(e=l,n=c,Pt(u))}function i(){a.disconnect();for(const o of j.querySelectorAll("a")){const{url:c,external:l,download:d}=Ct(o,x,A.hash);if(l||d)continue;const u=gt(o);u.reload||(u.preload_code===F.viewport&&a.observe(o),u.preload_code===F.eager&&Pt(c))}}z.add(i),i()}function H(t,e){if(t instanceof Et)return t.body;const n=mt(t),r=vn(t);return A.hooks.handleError({error:t,event:e,status:n,message:r})??{message:r}}function Jn(t,e={}){return t=new URL(Dt(t)),t.origin!==ht?Promise.reject(new Error("goto: invalid URL")):Kt(t,e,0)}function jn(t){if(typeof t=="function")_t.push(t);else{const{href:e}=new URL(t,location.href);_t.push(n=>n.href===e)}}function $n(){var e;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{let r=!1;if(ie(),!et){const a=zt(v,void 0,null,"leave"),s={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};Ee.forEach(i=>i(s))}r?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&ie()}),(e=navigator.connection)!=null&&e.saveData||Nn(),j.addEventListener("click",async n=>{if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const r=ve(n.composedPath()[0],j);if(!r)return;const{url:a,external:s,target:i,download:o}=Ct(r,x,A.hash);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=gt(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||o)return;const[d,u]=(A.hash?a.hash.replace(/^#/,""):a.href).split("#"),w=d===Lt(location);if(s||c.reload&&(!w||!u)){Pe({url:a,type:"link"})?et=!0:n.preventDefault();return}if(u!==void 0&&w){const[,f]=v.url.href.split("#");if(f===u){if(n.preventDefault(),u===""||u==="top"&&r.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const m=r.ownerDocument.getElementById(decodeURIComponent(u));m&&(m.scrollIntoView(),m.focus())}return}if(W=!0,qt(S),t(a),!c.replace_state)return;W=!1}n.preventDefault(),await new Promise(f=>{requestAnimationFrame(()=>{setTimeout(f,0)}),setTimeout(f,100)}),await X({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),j.addEventListener("submit",n=>{if(n.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(n.target),a=n.submitter;if(((a==null?void 0:a.formTarget)||r.target)==="_blank"||((a==null?void 0:a.formMethod)||r.method)!=="get")return;const o=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(At(o,x,!1))return;const c=n.target,l=gt(c);if(l.reload)return;n.preventDefault(),n.stopPropagation();const d=new FormData(c),u=a==null?void 0:a.getAttribute("name");u&&d.append(u,(a==null?void 0:a.getAttribute("value"))??""),o.search=new URLSearchParams(d).toString(),X({type:"form",url:o,keepfocus:l.keepfocus,noscroll:l.noscroll,replace_state:l.replace_state??o.href===location.href})}),addEventListener("popstate",async n=>{var r;if((r=n.state)!=null&&r[M]){const a=n.state[M];if(V={},a===S)return;const s=B[a],i=n.state[_e]??{},o=new URL(n.state[an]??location.href),c=n.state[Z],l=v.url?Lt(location)===Lt(v.url):!1;if(c===T&&(Se||l)){i!==U.state&&(U.state=i),t(o),B[S]=Ft(),s&&scrollTo(s.x,s.y),S=a;return}const u=a-S;await X({type:"popstate",url:o,popped:{state:i,scroll:s,delta:u},accept:()=>{S=a,T=c},block:()=>{history.go(-u)},nav_token:V})}else if(!W){const a=new URL(location.href);t(a),A.hash&&location.reload()}}),addEventListener("hashchange",()=>{W&&(W=!1,history.replaceState({...history.state,[M]:++S,[Z]:T},"",location.href))});for(const n of document.querySelectorAll("link"))Rn.has(n.rel)&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&$.navigating.set(Q.current=null)});function t(n){v.url=U.url=n,$.page.set(Jt(U)),$.page.notify()}}async function Dn(t,{status:e=200,error:n,node_ids:r,params:a,route:s,server_route:i,data:o,form:c}){Mt=!0;const l=new URL(location.href);let d;({params:a={},route:s={id:null}}=await Rt(l,!1)||{}),d=Gt.find(({id:f})=>f===s.id);let u,w=!0;try{const f=r.map(async(p,h)=>{const y=o[h];return y!=null&&y.uses&&(y.uses=Ne(y.uses)),Wt({loader:A.nodes[p],url:l,params:a,route:s,parent:async()=>{const R={};for(let I=0;I<h;I+=1)Object.assign(R,(await f[I]).data);return R},server_data_node:Yt(y)})}),m=await Promise.all(f);if(d){const p=d.layouts;for(let h=0;h<p.length;h++)p[h]||m.splice(h,0,void 0)}u=bt({url:l,params:a,branch:m,status:e,error:n,form:c,route:d??null})}catch(f){if(f instanceof Vt){await K(new URL(f.location,location.href));return}u=await St({status:mt(f),error:await H(f,{url:l,params:a,route:s}),url:l,route:s}),t.textContent="",w=!1}u.props.page&&(u.props.page.state={}),Le(u,t,w)}async function Oe(t,e){var s;const n=new URL(t);n.pathname=Sn(t.pathname),t.pathname.endsWith("/")&&n.searchParams.append(yn,"1"),n.searchParams.append(_n,e.map(i=>i?"1":"0").join(""));const r=window.fetch,a=await r(n.href,{});if(!a.ok){let i;throw(s=a.headers.get("content-type"))!=null&&s.includes("application/json")?i=await a.json():a.status===404?i="Not Found":a.status===500&&(i="Internal Error"),new Et(a.status,i)}return new Promise(async i=>{var w;const o=new Map,c=a.body.getReader(),l=new TextDecoder;function d(f){return gn(f,{...A.decoders,Promise:m=>new Promise((p,h)=>{o.set(m,{fulfil:p,reject:h})})})}let u="";for(;;){const{done:f,value:m}=await c.read();if(f&&!u)break;for(u+=!m&&u?`
`:l.decode(m,{stream:!0});;){const p=u.indexOf(`
`);if(p===-1)break;const h=JSON.parse(u.slice(0,p));if(u=u.slice(p+1),h.type==="redirect")return i(h);if(h.type==="data")(w=h.nodes)==null||w.forEach(y=>{(y==null?void 0:y.type)==="data"&&(y.uses=Ne(y.uses),y.data=d(y.data))}),i(h);else if(h.type==="chunk"){const{id:y,data:R,error:I}=h,g=o.get(y);o.delete(y),I?g.reject(d(I)):g.fulfil(d(R))}}}})}function Ne(t){return{dependencies:new Set((t==null?void 0:t.dependencies)??[]),params:new Set((t==null?void 0:t.params)??[]),parent:!!(t!=null&&t.parent),route:!!(t!=null&&t.route),url:!!(t!=null&&t.url),search_params:new Set((t==null?void 0:t.search_params)??[])}}function Fn(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0,focusVisible:!1}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let s=0;s<r.rangeCount;s+=1)a.push(r.getRangeAt(s));setTimeout(()=>{if(r.rangeCount===a.length){for(let s=0;s<r.rangeCount;s+=1){const i=a[s],o=r.getRangeAt(s);if(i.commonAncestorContainer!==o.commonAncestorContainer||i.startContainer!==o.startContainer||i.endContainer!==o.endContainer||i.startOffset!==o.startOffset||i.endOffset!==o.endOffset)return}r.removeAllRanges()}})}}}function zt(t,e,n,r){var c,l;let a,s;const i=new Promise((d,u)=>{a=d,s=u});return i.catch(()=>{}),{navigation:{from:{params:t.params,route:{id:((c=t.route)==null?void 0:c.id)??null},url:t.url},to:n&&{params:(e==null?void 0:e.params)??null,route:{id:((l=e==null?void 0:e.route)==null?void 0:l.id)??null},url:n},willUnload:!e,type:r,complete:i},fulfil:a,reject:s}}function Jt(t){return{data:t.data,error:t.error,form:t.form,params:t.params,route:t.route,state:t.state,status:t.status,url:t.url}}function Vn(t){const e=new URL(t);return e.hash=decodeURIComponent(t.hash),e}export{Jn as a,zn as b,Mn as g,Hn as l,U as p,$ as s};
