import{ac as B,ad as Y,ae as y,a8 as L,A as M,af as N,g as _,ag as U,ah as C,b as G,u as h,ai as $,S as j,aj as w,ab as z,ak as V,al as Z,m as F,am as H}from"./CaUj3mEh.js";let o=!1;function J(a){var r=o;try{return o=!1,[a(),o]}finally{o=r}}function D(a){var r;return((r=a.ctx)==null?void 0:r.d)??!1}function Q(a,r,f,v){var O;var I=(f&Z)!==0,d=!z||(f&V)!==0,c=(f&$)!==0,T=(f&H)!==0,A=!1,t;c?[t,A]=J(()=>a[r]):t=a[r];var q=j in a||w in a,l=c&&(((O=B(a,r))==null?void 0:O.set)??(q&&r in a&&(e=>a[r]=e)))||void 0,i=v,P=!0,S=!1,E=()=>(S=!0,P&&(P=!1,T?i=h(v):i=v),i);t===void 0&&v!==void 0&&(l&&d&&Y(),t=E(),l&&l(t));var u;if(d)u=()=>{var e=a[r];return e===void 0?E():(P=!0,S=!1,e)};else{var R=(I?L:M)(()=>a[r]);R.f|=y,u=()=>{var e=_(R);return e!==void 0&&(i=void 0),e===void 0?i:e}}if((f&N)===0)return u;if(l){var x=a.$$legacy;return function(e,s){return arguments.length>0?((!d||!s||x||A)&&l(s?u():e),e):u()}}var b=!1,g=F(t),n=L(()=>{var e=u(),s=_(g);return b?(b=!1,s):g.v=e});return c&&_(n),I||(n.equals=U),function(e,s){if(arguments.length>0){const m=s?_(n):d&&c?C(e):e;if(!n.equals(m)){if(b=!0,G(g,m),S&&i!==void 0&&(i=m),D(n))return e;h(()=>_(n))}return e}return D(n)?n.v:_(n)}}export{Q as p};
