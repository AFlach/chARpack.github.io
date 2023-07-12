import{S as P,i as U,s as W,y as h,a as B,k as q,z as d,c as E,l as A,m as C,h as $,A as b,b as p,g as _,f as j,d as g,B as v,a3 as D,a2 as F,q as k,r as w,G as H,v as J,n as K,W as N}from"../chunks/index.e314a591.js";import"../chunks/Indicator.svelte_svelte_type_style_lang.3aba909d.js";import{B as O,a as M}from"../chunks/BreadcrumbItem.3ac9772d.js";import{H as z}from"../chunks/Heading.365b0f50.js";import{p as Q}from"../chunks/stores.6bb37ce4.js";function R(o,e,r){const t=o.slice();return t[2]=e[r],t}function T(o){let e;return{c(){e=k("Manual")},l(r){e=w(r,"Manual")},m(r,t){p(r,e,t)},d(r){r&&$(e)}}}function V(o){let e=o[0].title+"",r;return{c(){r=k(e)},l(t){r=w(t,e)},m(t,n){p(t,r,n)},p:H,d(t){t&&$(r)}}}function X(o){let e,r,t,n;return e=new M({props:{href:"/manual",home:!0,$$slots:{default:[T]},$$scope:{ctx:o}}}),t=new M({props:{href:o[0].absRoute,$$slots:{default:[V]},$$scope:{ctx:o}}}),{c(){h(e.$$.fragment),r=B(),h(t.$$.fragment)},l(a){d(e.$$.fragment,a),r=E(a),d(t.$$.fragment,a)},m(a,u){b(e,a,u),p(a,r,u),b(t,a,u),n=!0},p(a,u){const i={};u&32&&(i.$$scope={dirty:u,ctx:a}),e.$set(i);const l={};u&32&&(l.$$scope={dirty:u,ctx:a}),t.$set(l)},i(a){n||(_(e.$$.fragment,a),_(t.$$.fragment,a),n=!0)},o(a){g(e.$$.fragment,a),g(t.$$.fragment,a),n=!1},d(a){v(e,a),a&&$(r),v(t,a)}}}function Y(o){let e=o[0].title+"",r;return{c(){r=k(e)},l(t){r=w(t,e)},m(t,n){p(t,r,n)},p:H,d(t){t&&$(r)}}}function Z(o){let e,r=o[2].metadata.title+"",t;return{c(){e=q("a"),t=k(r),this.h()},l(n){e=A(n,"A",{href:!0});var a=C(e);t=w(a,r),a.forEach($),this.h()},h(){K(e,"href",o[2].pageRoute)},m(n,a){p(n,e,a),N(e,t)},p:H,d(n){n&&$(e)}}}function S(o){let e,r,t;return r=new z({props:{tag:"h3",class:"ml-6",$$slots:{default:[Z]},$$scope:{ctx:o}}}),{c(){e=q("li"),h(r.$$.fragment)},l(n){e=A(n,"LI",{});var a=C(e);d(r.$$.fragment,a),a.forEach($)},m(n,a){p(n,e,a),b(r,e,null),t=!0},p(n,a){const u={};a&32&&(u.$$scope={dirty:a,ctx:n}),r.$set(u)},i(n){t||(_(r.$$.fragment,n),t=!0)},o(n){g(r.$$.fragment,n),t=!1},d(n){n&&$(e),v(r)}}}function x(o){let e,r,t,n,a,u;e=new O({props:{"aria-label":"manual breadcrumb",solid:!0,class:"mb-3",solidClass:"bg-gray-50 dark:bg-gray-800 rounded",$$slots:{default:[X]},$$scope:{ctx:o}}}),t=new z({props:{tag:"h2",class:"mb-4",$$slots:{default:[Y]},$$scope:{ctx:o}}});let i=o[0].pages,l=[];for(let s=0;s<i.length;s+=1)l[s]=S(R(o,i,s));const G=s=>g(l[s],1,1,()=>{l[s]=null});return{c(){h(e.$$.fragment),r=B(),h(t.$$.fragment),n=B(),a=q("ul");for(let s=0;s<l.length;s+=1)l[s].c()},l(s){d(e.$$.fragment,s),r=E(s),d(t.$$.fragment,s),n=E(s),a=A(s,"UL",{});var f=C(a);for(let m=0;m<l.length;m+=1)l[m].l(f);f.forEach($)},m(s,f){b(e,s,f),p(s,r,f),b(t,s,f),p(s,n,f),p(s,a,f);for(let m=0;m<l.length;m+=1)l[m]&&l[m].m(a,null);u=!0},p(s,[f]){const m={};f&32&&(m.$$scope={dirty:f,ctx:s}),e.$set(m);const I={};if(f&32&&(I.$$scope={dirty:f,ctx:s}),t.$set(I),f&1){i=s[0].pages;let c;for(c=0;c<i.length;c+=1){const L=R(s,i,c);l[c]?(l[c].p(L,f),_(l[c],1)):(l[c]=S(L),l[c].c(),_(l[c],1),l[c].m(a,null))}for(J(),c=i.length;c<l.length;c+=1)G(c);j()}},i(s){if(!u){_(e.$$.fragment,s),_(t.$$.fragment,s);for(let f=0;f<i.length;f+=1)_(l[f]);u=!0}},o(s){g(e.$$.fragment,s),g(t.$$.fragment,s),l=l.filter(Boolean);for(let f=0;f<l.length;f+=1)g(l[f]);u=!1},d(s){v(e,s),s&&$(r),v(t,s),s&&$(n),s&&$(a),D(l,s)}}}function y(o,e,r){let t;return F(o,Q,a=>r(1,t=a)),[t.data.sections.filter(a=>a.name===t.params.section)[0]]}class ne extends P{constructor(e){super(),U(this,e,y,x,W,{})}}export{ne as component};
