import{y as _,ap as v,v as u,aq as h,ar as E,M as d,h as f,D as o,z as T,x as y}from"./CaUj3mEh.js";function g(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function i(e,t){var r=d;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function x(e,t){var r=(t&h)!==0,c=(t&E)!==0,a,s=!e.startsWith("<!>");return()=>{if(f)return i(o,null),o;a===void 0&&(a=g(s?e:"<!>"+e),r||(a=_(a)));var n=c||v?document.importNode(a,!0):a.cloneNode(!0);if(r){var m=_(n),p=n.lastChild;i(m,p)}else i(n,n);return n}}function N(e,t){var r=x(e,t);return()=>C(r())}function C(e){if(f)return e;const t=e.nodeType===11,r=e.tagName==="SCRIPT"?[e]:e.querySelectorAll("script"),c=d;for(const s of r){const n=document.createElement("script");for(var a of s.attributes)n.setAttribute(a.name,a.value);n.textContent=s.textContent,(t?e.firstChild===s:e===s)&&(c.nodes_start=n),(t?e.lastChild===s:e===s)&&(c.nodes_end=n),s.replaceWith(n)}return e}function A(e=""){if(!f){var t=u(e+"");return i(t,t),t}var r=o;return r.nodeType!==3&&(r.before(r=u()),y(r)),i(r,r),r}function P(){if(f)return i(o,null),o;var e=document.createDocumentFragment(),t=document.createComment(""),r=u();return e.append(t,r),i(t,r),e}function S(e,t){if(f){d.nodes_end=o,T();return}e!==null&&e.before(t)}const w="5";var l;typeof window<"u"&&((l=window.__svelte??(window.__svelte={})).v??(l.v=new Set)).add(w);export{S as a,N as b,P as c,i as d,A as e,x as t};
