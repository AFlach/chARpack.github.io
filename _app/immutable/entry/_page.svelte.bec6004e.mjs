import{S as K,i as Q,s as Y,k as $,l as j,m as S,h as d,a1 as ee,n as c,b as C,W as E,G as q,a5 as te,M as le,H as je,q as D,r as R,u as Be,a6 as de,y as B,a as W,e as ge,z as N,c as L,A as P,g as v,v as G,d as k,f as X,B as M,a3 as Ne,a4 as De,T as Pe,Z as se,_ as ne,I as oe,N as fe,O as ue,P as ce,E as re,K as _e,Q as Me,C as pe,F as be,Y as Ve}from"../chunks/index.7e84a433.mjs";import{c as ve}from"../chunks/Indicator.svelte_svelte_type_style_lang.7adfd83d.mjs";import{A as x}from"../chunks/A.6525a407.mjs";import{H as ie}from"../chunks/Heading.39f8c782.mjs";import{P as ae}from"../chunks/P.2052fb12.mjs";function We(n){let e,t,s;return{c(){e=$("div"),t=$("img"),this.h()},l(l){e=j(l,"DIV",{class:!0});var a=S(e);t=j(a,"IMG",{src:!0,alt:!0,title:!0}),a.forEach(d),this.h()},h(){ee(t.src,s=n[0])||c(t,"src",s),c(t,"alt",n[1]),c(t,"title",n[2]),c(e,"class",n[3])},m(l,a){C(l,e,a),E(e,t)},p(l,[a]){a&1&&!ee(t.src,s=l[0])&&c(t,"src",s),a&2&&c(t,"alt",l[1]),a&4&&c(t,"title",l[2]),a&8&&c(e,"class",l[3])},i:q,o:q,d(l){l&&d(e)}}}function Le(n,e,t){let{image:s=""}=e,{altTag:l=""}=e,{attr:a=""}=e,{slideClass:i=""}=e;return n.$$set=o=>{"image"in o&&t(0,s=o.image),"altTag"in o&&t(1,l=o.altTag),"attr"in o&&t(2,a=o.attr),"slideClass"in o&&t(3,i=o.slideClass)},[s,l,a,i]}class qe extends K{constructor(e){super(),Q(this,e,Le,We,Y,{image:0,altTag:1,attr:2,slideClass:3})}}function He(n){let e,t,s,l,a,i,o;return{c(){e=$("img"),this.h()},l(r){e=j(r,"IMG",{class:!0,id:!0,src:!0,alt:!0,title:!0,width:!0}),this.h()},h(){c(e,"class","opacity-40 svelte-1o2b5yq"),c(e,"id",t=n[3].toString()),ee(e.src,s=n[0])||c(e,"src",s),c(e,"alt",n[1]),c(e,"title",l="Image from "+n[2]),c(e,"width",a=n[4]+"%"),te(e,"active",n[5])},m(r,u){C(r,e,u),i||(o=le(e,"click",n[6]),i=!0)},p(r,[u]){u&8&&t!==(t=r[3].toString())&&c(e,"id",t),u&1&&!ee(e.src,s=r[0])&&c(e,"src",s),u&2&&c(e,"alt",r[1]),u&4&&l!==(l="Image from "+r[2])&&c(e,"title",l),u&16&&a!==(a=r[4]+"%")&&c(e,"width",a),u&32&&te(e,"active",r[5])},i:q,o:q,d(r){r&&d(e),i=!1,o()}}}function ze(n,e,t){let{thumbImg:s=""}=e,{altTag:l=""}=e,{titleLink:a=""}=e,{id:i}=e,{thumbWidth:o}=e,{selected:r=!1}=e;function u(m){je.call(this,n,m)}return n.$$set=m=>{"thumbImg"in m&&t(0,s=m.thumbImg),"altTag"in m&&t(1,l=m.altTag),"titleLink"in m&&t(2,a=m.titleLink),"id"in m&&t(3,i=m.id),"thumbWidth"in m&&t(4,o=m.thumbWidth),"selected"in m&&t(5,r=m.selected)},[s,l,a,i,o,r,u]}class Oe extends K{constructor(e){super(),Q(this,e,ze,He,Y,{thumbImg:0,altTag:1,titleLink:2,id:3,thumbWidth:4,selected:5})}}function Ue(n){let e,t,s;return{c(){e=$("div"),t=$("p"),s=D(n[0]),this.h()},l(l){e=j(l,"DIV",{class:!0});var a=S(e);t=j(a,"P",{id:!0,class:!0});var i=S(t);s=R(i,n[0]),i.forEach(d),a.forEach(d),this.h()},h(){c(t,"id","caption"),c(t,"class","text-gray-900 dark:text-white"),c(e,"class",n[1])},m(l,a){C(l,e,a),E(e,t),E(t,s)},p(l,[a]){a&1&&Be(s,l[0]),a&2&&c(e,"class",l[1])},i:q,o:q,d(l){l&&d(e)}}}function Ge(n,e,t){let{caption:s=""}=e,{captionClass:l=""}=e;return n.$$set=a=>{"caption"in a&&t(0,s=a.caption),"captionClass"in a&&t(1,l=a.captionClass)},[s,l]}class Xe extends K{constructor(e){super(),Q(this,e,Ge,Ue,Y,{caption:0,captionClass:1})}}function Fe(n){let e,t,s,l;return{c(){e=$("button"),this.h()},l(a){e=j(a,"BUTTON",{type:!0,class:!0,"aria-label":!0}),S(e).forEach(d),this.h()},h(){c(e,"type","button"),c(e,"class",t=de(n[2])+" svelte-1o2b5yq"),c(e,"aria-label",n[0]),te(e,"active",n[1])},m(a,i){C(a,e,i),s||(l=le(e,"click",n[3]),s=!0)},p(a,[i]){i&4&&t!==(t=de(a[2])+" svelte-1o2b5yq")&&c(e,"class",t),i&1&&c(e,"aria-label",a[0]),i&6&&te(e,"active",a[1])},i:q,o:q,d(a){a&&d(e),s=!1,l()}}}function Ke(n,e,t){let{name:s=""}=e,{selected:l=!1}=e,{indicatorClass:a=""}=e;function i(o){je.call(this,n,o)}return n.$$set=o=>{"name"in o&&t(0,s=o.name),"selected"in o&&t(1,l=o.selected),"indicatorClass"in o&&t(2,a=o.indicatorClass)},[s,l,a,i]}class Qe extends K{constructor(e){super(),Q(this,e,Ke,Fe,Y,{name:0,selected:1,indicatorClass:2})}}function we(n,e,t){const s=n.slice();return s[23]=e[t].id,s[24]=e[t].imgurl,s[25]=e[t].name,s[26]=e[t].attribution,s}const Ye=n=>({}),ke=n=>({}),Ze=n=>({}),Ce=n=>({});function ye(n,e,t){const s=n.slice();return s[23]=e[t].id,s[24]=e[t].imgurl,s[25]=e[t].name,s[26]=e[t].attribution,s}function Te(n){let e,t,s=n[3],l=[];for(let i=0;i<s.length;i+=1)l[i]=Ie(ye(n,s,i));const a=i=>k(l[i],1,1,()=>{l[i]=null});return{c(){e=$("div");for(let i=0;i<l.length;i+=1)l[i].c();this.h()},l(i){e=j(i,"DIV",{class:!0});var o=S(e);for(let r=0;r<l.length;r+=1)l[r].l(o);o.forEach(d),this.h()},h(){c(e,"class",n[6])},m(i,o){C(i,e,o);for(let r=0;r<l.length;r+=1)l[r].m(e,null);t=!0},p(i,o){if(o&17672){s=i[3];let r;for(r=0;r<s.length;r+=1){const u=ye(i,s,r);l[r]?(l[r].p(u,o),v(l[r],1)):(l[r]=Ie(u),l[r].c(),v(l[r],1),l[r].m(e,null))}for(G(),r=s.length;r<l.length;r+=1)a(r);X()}(!t||o&64)&&c(e,"class",i[6])},i(i){if(!t){for(let o=0;o<s.length;o+=1)v(l[o]);t=!0}},o(i){l=l.filter(Boolean);for(let o=0;o<l.length;o+=1)k(l[o]);t=!1},d(i){i&&d(e),De(l,i)}}}function Ie(n){let e,t;function s(){return n[21](n[23])}return e=new Qe({props:{name:n[25],selected:n[10]===n[23],indicatorClass:n[8]}}),e.$on("click",s),{c(){B(e.$$.fragment)},l(l){N(e.$$.fragment,l)},m(l,a){P(e,l,a),t=!0},p(l,a){n=l;const i={};a&8&&(i.name=n[25]),a&1032&&(i.selected=n[10]===n[23]),a&256&&(i.indicatorClass=n[8]),e.$set(i)},i(l){t||(v(e.$$.fragment,l),t=!0)},o(l){k(e.$$.fragment,l),t=!1},d(l){M(e,l)}}}function Ae(n){let e,t,s,l,a,i,o,r,u,m,f,h,w,g,b,I,V,z;const _=[xe,Je],y=[];function O(T,p){return T[16].previous?0:1}s=O(n),l=y[s]=_[s](n);const A=[tt,et],H=[];function F(T,p){return T[16].next?0:1}return f=F(n),h=H[f]=A[f](n),{c(){e=$("button"),t=$("span"),l.c(),a=W(),i=$("span"),o=D("Previous"),r=W(),u=$("button"),m=$("span"),h.c(),w=W(),g=$("span"),b=D("Next"),this.h()},l(T){e=j(T,"BUTTON",{type:!0,class:!0,"data-carousel-prev":!0});var p=S(e);t=j(p,"SPAN",{class:!0});var U=S(t);l.l(U),a=L(U),i=j(U,"SPAN",{class:!0});var Z=S(i);o=R(Z,"Previous"),Z.forEach(d),U.forEach(d),p.forEach(d),r=L(T),u=j(T,"BUTTON",{type:!0,class:!0,"data-carousel-next":!0});var me=S(u);m=j(me,"SPAN",{class:!0});var J=S(m);h.l(J),w=L(J),g=j(J,"SPAN",{class:!0});var he=S(g);b=R(he,"Next"),he.forEach(d),J.forEach(d),me.forEach(d),this.h()},h(){c(i,"class","hidden"),c(t,"class","inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"),c(e,"type","button"),c(e,"class","flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"),c(e,"data-carousel-prev",""),c(g,"class","hidden"),c(m,"class","inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"),c(u,"type","button"),c(u,"class","flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"),c(u,"data-carousel-next","")},m(T,p){C(T,e,p),E(e,t),y[s].m(t,null),E(t,a),E(t,i),E(i,o),C(T,r,p),C(T,u,p),E(u,m),H[f].m(m,null),E(m,w),E(m,g),E(g,b),I=!0,V||(z=[le(e,"click",n[13]),le(u,"click",n[12])],V=!0)},p(T,p){let U=s;s=O(T),s===U?y[s].p(T,p):(G(),k(y[U],1,1,()=>{y[U]=null}),X(),l=y[s],l?l.p(T,p):(l=y[s]=_[s](T),l.c()),v(l,1),l.m(t,a));let Z=f;f=F(T),f===Z?H[f].p(T,p):(G(),k(H[Z],1,1,()=>{H[Z]=null}),X(),h=H[f],h?h.p(T,p):(h=H[f]=A[f](T),h.c()),v(h,1),h.m(m,w))},i(T){I||(v(l),v(h),I=!0)},o(T){k(l),k(h),I=!1},d(T){T&&d(e),y[s].d(),T&&d(r),T&&d(u),H[f].d(),V=!1,Pe(z)}}}function Je(n){let e,t;return{c(){e=se("svg"),t=se("path"),this.h()},l(s){e=ne(s,"svg",{"aria-hidden":!0,class:!0,fill:!0,stroke:!0,viewBox:!0,xmlns:!0});var l=S(e);t=ne(l,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),S(t).forEach(d),l.forEach(d),this.h()},h(){c(t,"stroke-linecap","round"),c(t,"stroke-linejoin","round"),c(t,"stroke-width","2"),c(t,"d","M15 19l-7-7 7-7"),c(e,"aria-hidden","true"),c(e,"class","w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-300"),c(e,"fill","none"),c(e,"stroke","currentColor"),c(e,"viewBox","0 0 24 24"),c(e,"xmlns","http://www.w3.org/2000/svg")},m(s,l){C(s,e,l),E(e,t)},p:q,i:q,o:q,d(s){s&&d(e)}}}function xe(n){let e;const t=n[20].previous,s=oe(t,n,n[19],Ce);return{c(){s&&s.c()},l(l){s&&s.l(l)},m(l,a){s&&s.m(l,a),e=!0},p(l,a){s&&s.p&&(!e||a&524288)&&fe(s,t,l,l[19],e?ce(t,l[19],a,Ze):ue(l[19]),Ce)},i(l){e||(v(s,l),e=!0)},o(l){k(s,l),e=!1},d(l){s&&s.d(l)}}}function et(n){let e,t;return{c(){e=se("svg"),t=se("path"),this.h()},l(s){e=ne(s,"svg",{"aria-hidden":!0,class:!0,fill:!0,stroke:!0,viewBox:!0,xmlns:!0});var l=S(e);t=ne(l,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),S(t).forEach(d),l.forEach(d),this.h()},h(){c(t,"stroke-linecap","round"),c(t,"stroke-linejoin","round"),c(t,"stroke-width","2"),c(t,"d","M9 5l7 7-7 7"),c(e,"aria-hidden","true"),c(e,"class","w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-300"),c(e,"fill","none"),c(e,"stroke","currentColor"),c(e,"viewBox","0 0 24 24"),c(e,"xmlns","http://www.w3.org/2000/svg")},m(s,l){C(s,e,l),E(e,t)},p:q,i:q,o:q,d(s){s&&d(e)}}}function tt(n){let e;const t=n[20].next,s=oe(t,n,n[19],ke);return{c(){s&&s.c()},l(l){s&&s.l(l)},m(l,a){s&&s.m(l,a),e=!0},p(l,a){s&&s.p&&(!e||a&524288)&&fe(s,t,l,l[19],e?ce(t,l[19],a,Ye):ue(l[19]),ke)},i(l){e||(v(s,l),e=!0)},o(l){k(s,l),e=!1},d(l){s&&s.d(l)}}}function Ee(n){let e,t;return e=new Xe({props:{caption:n[3][n[10]].name,captionClass:n[7]}}),{c(){B(e.$$.fragment)},l(s){N(e.$$.fragment,s)},m(s,l){P(e,s,l),t=!0},p(s,l){const a={};l&1032&&(a.caption=s[3][s[10]].name),l&128&&(a.captionClass=s[7]),e.$set(a)},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){k(e.$$.fragment,s),t=!1},d(s){M(e,s)}}}function Se(n){let e,t,s=n[3],l=[];for(let i=0;i<s.length;i+=1)l[i]=$e(we(n,s,i));const a=i=>k(l[i],1,1,()=>{l[i]=null});return{c(){e=$("div");for(let i=0;i<l.length;i+=1)l[i].c();this.h()},l(i){e=j(i,"DIV",{class:!0});var o=S(e);for(let r=0;r<l.length;r+=1)l[r].l(o);o.forEach(d),this.h()},h(){c(e,"class","flex flex-row justify-center bg-gray-100")},m(i,o){C(i,e,o);for(let r=0;r<l.length;r+=1)l[r].m(e,null);t=!0},p(i,o){if(o&50184){s=i[3];let r;for(r=0;r<s.length;r+=1){const u=we(i,s,r);l[r]?(l[r].p(u,o),v(l[r],1)):(l[r]=$e(u),l[r].c(),v(l[r],1),l[r].m(e,null))}for(G(),r=s.length;r<l.length;r+=1)a(r);X()}},i(i){if(!t){for(let o=0;o<s.length;o+=1)v(l[o]);t=!0}},o(i){l=l.filter(Boolean);for(let o=0;o<l.length;o+=1)k(l[o]);t=!1},d(i){i&&d(e),De(l,i)}}}function $e(n){let e,t;function s(){return n[22](n[23])}return e=new Oe({props:{thumbWidth:n[15],thumbImg:n[24],altTag:n[25],titleLink:n[26],id:n[23],selected:n[10]===n[23]}}),e.$on("click",s),{c(){B(e.$$.fragment)},l(l){N(e.$$.fragment,l)},m(l,a){P(e,l,a),t=!0},p(l,a){n=l;const i={};a&8&&(i.thumbImg=n[24]),a&8&&(i.altTag=n[25]),a&8&&(i.titleLink=n[26]),a&8&&(i.id=n[23]),a&1032&&(i.selected=n[10]===n[23]),e.$set(i)},i(l){t||(v(e.$$.fragment,l),t=!0)},o(l){k(e.$$.fragment,l),t=!1},d(l){M(e,l)}}}function lt(n){let e,t,s,l,a,i,o,r,u;s=new qe({props:{image:n[11].imgurl,altTag:n[11].name,attr:n[11].attribution,slideClass:n[9]}});let m=n[0]&&Te(n),f=n[4]&&Ae(n),h=n[1]&&Ee(n),w=n[2]&&Se(n);return{c(){e=$("div"),t=$("div"),B(s.$$.fragment),l=W(),m&&m.c(),a=W(),f&&f.c(),i=W(),h&&h.c(),o=W(),w&&w.c(),r=ge(),this.h()},l(g){e=j(g,"DIV",{id:!0,class:!0});var b=S(e);t=j(b,"DIV",{class:!0});var I=S(t);N(s.$$.fragment,I),I.forEach(d),l=L(b),m&&m.l(b),a=L(b),f&&f.l(b),b.forEach(d),i=L(g),h&&h.l(g),o=L(g),w&&w.l(g),r=ge(),this.h()},h(){c(t,"class",n[5]),c(e,"id","default-carousel"),c(e,"class","relative")},m(g,b){C(g,e,b),E(e,t),P(s,t,null),E(e,l),m&&m.m(e,null),E(e,a),f&&f.m(e,null),C(g,i,b),h&&h.m(g,b),C(g,o,b),w&&w.m(g,b),C(g,r,b),u=!0},p(g,[b]){const I={};b&2048&&(I.image=g[11].imgurl),b&2048&&(I.altTag=g[11].name),b&2048&&(I.attr=g[11].attribution),b&512&&(I.slideClass=g[9]),s.$set(I),(!u||b&32)&&c(t,"class",g[5]),g[0]?m?(m.p(g,b),b&1&&v(m,1)):(m=Te(g),m.c(),v(m,1),m.m(e,a)):m&&(G(),k(m,1,1,()=>{m=null}),X()),g[4]?f?(f.p(g,b),b&16&&v(f,1)):(f=Ae(g),f.c(),v(f,1),f.m(e,null)):f&&(G(),k(f,1,1,()=>{f=null}),X()),g[1]?h?(h.p(g,b),b&2&&v(h,1)):(h=Ee(g),h.c(),v(h,1),h.m(o.parentNode,o)):h&&(G(),k(h,1,1,()=>{h=null}),X()),g[2]?w?(w.p(g,b),b&4&&v(w,1)):(w=Se(g),w.c(),v(w,1),w.m(r.parentNode,r)):w&&(G(),k(w,1,1,()=>{w=null}),X())},i(g){u||(v(s.$$.fragment,g),v(m),v(f),v(h),v(w),u=!0)},o(g){k(s.$$.fragment,g),k(m),k(f),k(h),k(w),u=!1},d(g){g&&d(e),M(s),m&&m.d(),f&&f.d(),g&&d(i),h&&h.d(g),g&&d(o),w&&w.d(g),g&&d(r)}}}function st(n,e,t){let s,{$$slots:l={},$$scope:a}=e;const i=Ne(l);let{showIndicators:o=!0}=e,{showCaptions:r=!0}=e,{showThumbs:u=!0}=e,{images:m}=e,{slideControls:f=!0}=e,{loop:h=!1}=e,{duration:w=2e3}=e,{divClass:g="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96"}=e,{indicatorDivClass:b="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2"}=e,{captionClass:I="h-10 bg-gray-300 dark:bg-gray-700 dark:text-white p-2 my-2 text-center"}=e,{indicatorClass:V="w-3 h-3 rounded-full bg-gray-100 hover:bg-gray-300 opacity-60"}=e,{slideClass:z=""}=e,_=0;const y=()=>{_===m.length-1?t(10,_=0):t(10,_+=1)},O=()=>{_===0?t(10,_=m.length-1):t(10,_-=1)},A=p=>t(10,_=p);let H=100/m.length;h&&setInterval(()=>{y()},w);const F=p=>A(p),T=p=>A(p);return n.$$set=p=>{"showIndicators"in p&&t(0,o=p.showIndicators),"showCaptions"in p&&t(1,r=p.showCaptions),"showThumbs"in p&&t(2,u=p.showThumbs),"images"in p&&t(3,m=p.images),"slideControls"in p&&t(4,f=p.slideControls),"loop"in p&&t(17,h=p.loop),"duration"in p&&t(18,w=p.duration),"divClass"in p&&t(5,g=p.divClass),"indicatorDivClass"in p&&t(6,b=p.indicatorDivClass),"captionClass"in p&&t(7,I=p.captionClass),"indicatorClass"in p&&t(8,V=p.indicatorClass),"slideClass"in p&&t(9,z=p.slideClass),"$$scope"in p&&t(19,a=p.$$scope)},n.$$.update=()=>{n.$$.dirty&1032&&t(11,s=m[_])},[o,r,u,m,f,g,b,I,V,z,_,s,y,O,A,H,i,h,w,a,l,F,T]}class nt extends K{constructor(e){super(),Q(this,e,st,lt,Y,{showIndicators:0,showCaptions:1,showThumbs:2,images:3,slideControls:4,loop:17,duration:18,divClass:5,indicatorDivClass:6,captionClass:7,indicatorClass:8,slideClass:9})}}function it(n){let e,t,s;const l=n[5].default,a=oe(l,n,n[4],null);let i=[n[2],{class:t=ve(n[0],n[1],n[3].class)}],o={};for(let r=0;r<i.length;r+=1)o=re(o,i[r]);return{c(){e=$("small"),a&&a.c(),this.h()},l(r){e=j(r,"SMALL",{class:!0});var u=S(e);a&&a.l(u),u.forEach(d),this.h()},h(){_e(e,o)},m(r,u){C(r,e,u),a&&a.m(e,null),s=!0},p(r,[u]){a&&a.p&&(!s||u&16)&&fe(a,l,r,r[4],s?ce(l,r[4],u,null):ue(r[4]),null),_e(e,o=Me(i,[u&4&&r[2],(!s||u&11&&t!==(t=ve(r[0],r[1],r[3].class)))&&{class:t}]))},i(r){s||(v(a,r),s=!0)},o(r){k(a,r),s=!1},d(r){r&&d(e),a&&a.d(r)}}}function at(n,e,t){const s=["color","secondaryClass"];let l=pe(e,s),{$$slots:a={},$$scope:i}=e,{color:o="text-gray-500 dark:text-gray-400"}=e,{secondaryClass:r="font-semibold"}=e;return n.$$set=u=>{t(3,e=re(re({},e),be(u))),t(2,l=pe(e,s)),"color"in u&&t(0,o=u.color),"secondaryClass"in u&&t(1,r=u.secondaryClass),"$$scope"in u&&t(4,i=u.$$scope)},e=be(e),[o,r,l,e,i,a]}class Re extends K{constructor(e){super(),Q(this,e,at,it,Y,{color:0,secondaryClass:1})}}const rt=[{id:0,name:"Bond Manipulation",imgurl:"/images/pic0.png",attribution:""},{id:1,name:"Different View",imgurl:"/images/pic1.png",attribution:""}];function ot(n){let e;return{c(){e=D("Chemistry in Augmented Reality Package")},l(t){e=R(t,"Chemistry in Augmented Reality Package")},m(t,s){C(t,e,s)},d(t){t&&d(e)}}}function ft(n){let e,t,s;return t=new Re({props:{$$slots:{default:[ot]},$$scope:{ctx:n}}}),{c(){e=D("chARp "),B(t.$$.fragment)},l(l){e=R(l,"chARp "),N(t.$$.fragment,l)},m(l,a){C(l,e,a),P(t,l,a),s=!0},p(l,a){const i={};a&1&&(i.$$scope={dirty:a,ctx:l}),t.$set(i)},i(l){s||(v(t.$$.fragment,l),s=!0)},o(l){k(t.$$.fragment,l),s=!1},d(l){l&&d(e),M(t,l)}}}function ut(n){let e;return{c(){e=D("The basic purpose of the project is to provide an environment for exploring the prospects of augmented reality (AR) in chemistry and related molecular sciences. We believe that holographic projections are a future technology with tremendous impact in all scientific fields that extensively work with three-dimensional models. In chemistry, the idea of a molecular structure is a fundamental concept since the days of van't Hoff (organic stereochemistry) and Werner (complex chemistry) and the key to understaning reactivity and properties of chemical compounds. One big advantage of AR is the much better integration into conventional workflows of computational chemistry, as it provides immersive 3D models without the drawback of abandoning the real world like in fully virtual environments.")},l(t){e=R(t,"The basic purpose of the project is to provide an environment for exploring the prospects of augmented reality (AR) in chemistry and related molecular sciences. We believe that holographic projections are a future technology with tremendous impact in all scientific fields that extensively work with three-dimensional models. In chemistry, the idea of a molecular structure is a fundamental concept since the days of van't Hoff (organic stereochemistry) and Werner (complex chemistry) and the key to understaning reactivity and properties of chemical compounds. One big advantage of AR is the much better integration into conventional workflows of computational chemistry, as it provides immersive 3D models without the drawback of abandoning the real world like in fully virtual environments.")},m(t,s){C(t,e,s)},d(t){t&&d(e)}}}function ct(n){let e;return{c(){e=D("Molecular Builder")},l(t){e=R(t,"Molecular Builder")},m(t,s){C(t,e,s)},d(t){t&&d(e)}}}function mt(n){let e,t,s;return t=new Re({props:{$$slots:{default:[ct]},$$scope:{ctx:n}}}),{c(){e=D("chARp "),B(t.$$.fragment)},l(l){e=R(l,"chARp "),N(t.$$.fragment,l)},m(l,a){C(l,e,a),P(t,l,a),s=!0},p(l,a){const i={};a&1&&(i.$$scope={dirty:a,ctx:l}),t.$set(i)},i(l){s||(v(t.$$.fragment,l),s=!0)},o(l){k(t.$$.fragment,l),s=!1},d(l){l&&d(e),M(t,l)}}}function ht(n){let e;return{c(){e=D("The toolkit chARp Molecular Builder provides an AR environment for building and inspecting (dynamic) models of molecules. A simple force-field provides chemically meaningful structures, but the program also allows you to modify certain structure parameters (e.g. bond lengths or angles) at will. In particular, you can explore the molecule's conformational space. The program also allows for multiuser environments.")},l(t){e=R(t,"The toolkit chARp Molecular Builder provides an AR environment for building and inspecting (dynamic) models of molecules. A simple force-field provides chemically meaningful structures, but the program also allows you to modify certain structure parameters (e.g. bond lengths or angles) at will. In particular, you can explore the molecule's conformational space. The program also allows for multiuser environments.")},m(t,s){C(t,e,s)},d(t){t&&d(e)}}}function dt(n){let e;return{c(){e=D("About")},l(t){e=R(t,"About")},m(t,s){C(t,e,s)},d(t){t&&d(e)}}}function gt(n){let e;return{c(){e=D('Cluster of Excellence EXC 2075 "Data-Integrated Simulation Science (SimTech)"')},l(t){e=R(t,'Cluster of Excellence EXC 2075 "Data-Integrated Simulation Science (SimTech)"')},m(t,s){C(t,e,s)},d(t){t&&d(e)}}}function _t(n){let e;return{c(){e=D("University of Stuttgart")},l(t){e=R(t,"University of Stuttgart")},m(t,s){C(t,e,s)},d(t){t&&d(e)}}}function pt(n){let e;return{c(){e=D("Institute for Theoretical Chemistry")},l(t){e=R(t,"Institute for Theoretical Chemistry")},m(t,s){C(t,e,s)},d(t){t&&d(e)}}}function bt(n){let e;return{c(){e=D("Institute for Visualization and Interactive Systems")},l(t){e=R(t,"Institute for Visualization and Interactive Systems")},m(t,s){C(t,e,s)},d(t){t&&d(e)}}}function vt(n){let e,t,s,l,a,i,o,r,u,m;return t=new x({props:{href:"https://www.simtech.uni-stuttgart.de/exc/",$$slots:{default:[gt]},$$scope:{ctx:n}}}),l=new x({props:{href:"https://www.uni-stuttgart.de/",$$slots:{default:[_t]},$$scope:{ctx:n}}}),i=new x({props:{href:"https://www.itheoc.uni-stuttgart.de/",$$slots:{default:[pt]},$$scope:{ctx:n}}}),r=new x({props:{href:"https://www.visus.uni-stuttgart.de/",$$slots:{default:[bt]},$$scope:{ctx:n}}}),{c(){e=D("This project is part of the "),B(t.$$.fragment),s=D(" of the "),B(l.$$.fragment),a=D(`.
		The development of chARp is a joint effort of the `),B(i.$$.fragment),o=D(" and the "),B(r.$$.fragment),u=D(".")},l(f){e=R(f,"This project is part of the "),N(t.$$.fragment,f),s=R(f," of the "),N(l.$$.fragment,f),a=R(f,`.
		The development of chARp is a joint effort of the `),N(i.$$.fragment,f),o=R(f," and the "),N(r.$$.fragment,f),u=R(f,".")},m(f,h){C(f,e,h),P(t,f,h),C(f,s,h),P(l,f,h),C(f,a,h),P(i,f,h),C(f,o,h),P(r,f,h),C(f,u,h),m=!0},p(f,h){const w={};h&1&&(w.$$scope={dirty:h,ctx:f}),t.$set(w);const g={};h&1&&(g.$$scope={dirty:h,ctx:f}),l.$set(g);const b={};h&1&&(b.$$scope={dirty:h,ctx:f}),i.$set(b);const I={};h&1&&(I.$$scope={dirty:h,ctx:f}),r.$set(I)},i(f){m||(v(t.$$.fragment,f),v(l.$$.fragment,f),v(i.$$.fragment,f),v(r.$$.fragment,f),m=!0)},o(f){k(t.$$.fragment,f),k(l.$$.fragment,f),k(i.$$.fragment,f),k(r.$$.fragment,f),m=!1},d(f){f&&d(e),M(t,f),f&&d(s),M(l,f),f&&d(a),M(i,f),f&&d(o),M(r,f),f&&d(u)}}}function wt(n){let e,t,s,l,a,i,o,r,u,m,f,h,w,g,b,I,V,z;return l=new nt({props:{images:rt,loop:!0,showCaptions:Ct,showThumbs:kt,duration:"5000"}}),o=new ie({props:{tag:"h1",class:"mb-6",$$slots:{default:[ft]},$$scope:{ctx:n}}}),u=new ae({props:{$$slots:{default:[ut]},$$scope:{ctx:n}}}),f=new ie({props:{tag:"h1",class:"mb-6",$$slots:{default:[mt]},$$scope:{ctx:n}}}),w=new ae({props:{$$slots:{default:[ht]},$$scope:{ctx:n}}}),b=new ie({props:{tag:"h3",class:"mt-6 mb-2",$$slots:{default:[dt]},$$scope:{ctx:n}}}),V=new ae({props:{$$slots:{default:[vt]},$$scope:{ctx:n}}}),{c(){e=$("meta"),t=W(),s=$("div"),B(l.$$.fragment),a=W(),i=$("div"),B(o.$$.fragment),r=W(),B(u.$$.fragment),m=W(),B(f.$$.fragment),h=W(),B(w.$$.fragment),g=W(),B(b.$$.fragment),I=W(),B(V.$$.fragment),this.h()},l(_){const y=Ve("svelte-1q7capj",document.head);e=j(y,"META",{name:!0,content:!0}),y.forEach(d),t=L(_),s=j(_,"DIV",{class:!0});var O=S(s);N(l.$$.fragment,O),O.forEach(d),a=L(_),i=j(_,"DIV",{});var A=S(i);N(o.$$.fragment,A),r=L(A),N(u.$$.fragment,A),m=L(A),N(f.$$.fragment,A),h=L(A),N(w.$$.fragment,A),g=L(A),N(b.$$.fragment,A),I=L(A),N(V.$$.fragment,A),A.forEach(d),this.h()},h(){document.title="Home",c(e,"name","description"),c(e,"content","chARp Home"),c(s,"class","self-center mb-12 mt-4 lg:max-w-2xl md:max-w-lg")},m(_,y){E(document.head,e),C(_,t,y),C(_,s,y),P(l,s,null),C(_,a,y),C(_,i,y),P(o,i,null),E(i,r),P(u,i,null),E(i,m),P(f,i,null),E(i,h),P(w,i,null),E(i,g),P(b,i,null),E(i,I),P(V,i,null),z=!0},p(_,[y]){const O={};y&1&&(O.$$scope={dirty:y,ctx:_}),o.$set(O);const A={};y&1&&(A.$$scope={dirty:y,ctx:_}),u.$set(A);const H={};y&1&&(H.$$scope={dirty:y,ctx:_}),f.$set(H);const F={};y&1&&(F.$$scope={dirty:y,ctx:_}),w.$set(F);const T={};y&1&&(T.$$scope={dirty:y,ctx:_}),b.$set(T);const p={};y&1&&(p.$$scope={dirty:y,ctx:_}),V.$set(p)},i(_){z||(v(l.$$.fragment,_),v(o.$$.fragment,_),v(u.$$.fragment,_),v(f.$$.fragment,_),v(w.$$.fragment,_),v(b.$$.fragment,_),v(V.$$.fragment,_),z=!0)},o(_){k(l.$$.fragment,_),k(o.$$.fragment,_),k(u.$$.fragment,_),k(f.$$.fragment,_),k(w.$$.fragment,_),k(b.$$.fragment,_),k(V.$$.fragment,_),z=!1},d(_){d(e),_&&d(t),_&&d(s),M(l),_&&d(a),_&&d(i),M(o),M(u),M(f),M(w),M(b),M(V)}}}let kt=!1,Ct=!1;class St extends K{constructor(e){super(),Q(this,e,null,wt,Y,{})}}export{St as default};
