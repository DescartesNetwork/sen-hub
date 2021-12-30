var senhub;(()=>{"use strict";var e={28688:(e,r,t)=>{var n={"./bootstrap":()=>Promise.all([t.e(757),t.e(657),t.e(308),t.e(99),t.e(950),t.e(416),t.e(562)]).then((()=>()=>t(55284))),"./static":()=>t.e(423).then((()=>()=>t(48423))),"./providers":()=>Promise.all([t.e(757),t.e(657),t.e(99),t.e(796),t.e(845),t.e(950),t.e(416),t.e(449)]).then((()=>()=>t(99800)))},a=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),o=(e,r)=>{if(t.S){var n=t.S.default,a="default";if(n&&n!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[a]=e,t.I(a,r)}};t.d(r,{get:()=>a,init:()=>o})},47459:(e,r,t)=>{var n=new Error;e.exports=new Promise(((e,r)=>{if("undefined"!==typeof senhub)return e();t.l("https://descartesnetwork.github.io/senhub/index.js",(t=>{if("undefined"!==typeof senhub)return e();var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+a+": "+o+")",n.name="ScriptExternalLoadError",n.type=a,n.request=o,r(n)}),"senhub")})).then((()=>senhub))}},r={};function t(n){var a=r[n];if(void 0!==a)return a.exports;var o=r[n]={id:n,loaded:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}t.m=e,t.c=r,t.amdO={},t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((r,n)=>(t.f[n](e,r),r)),[])),t.u=e=>"static/js/"+e+"."+{99:"752f5f6c",108:"798cf560",181:"039c8a8f",276:"a9a4a323",308:"17620997",361:"35d96851",416:"e2e7009e",423:"904c6c32",449:"6852a6b3",488:"724c3f6c",521:"a01b9aa5",562:"f7e40bbe",657:"ccf83e56",757:"f02e48db",771:"5a88b217",796:"41049886",808:"47c3e8dd",845:"05ec1d93",878:"356724c2",950:"16f228a4"}[e]+".chunk.js",t.miniCssF=e=>{},t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={},r="senhub:";t.l=(n,a,o,i)=>{if(e[n])e[n].push(a);else{var s,u;if(void 0!==o)for(var l=document.getElementsByTagName("script"),f=0;f<l.length;f++){var d=l[f];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==r+o){s=d;break}}s||(u=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,t.nc&&s.setAttribute("nonce",t.nc),s.setAttribute("data-webpack",r+o),s.src=n),e[n]=[a];var h=(r,t)=>{s.onerror=s.onload=null,clearTimeout(c);var a=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((e=>e(t))),r)return r(t)},c=setTimeout(h.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=h.bind(null,s.onerror),s.onload=h.bind(null,s.onload),u&&document.head.appendChild(s)}}})(),t.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var r={562:[49142]},n={49142:["default","./providers",47459]};t.f.remotes=(a,o)=>{t.o(r,a)&&r[a].forEach((r=>{var a=t.R;a||(a=[]);var i=n[r];if(!(a.indexOf(i)>=0)){if(a.push(i),i.p)return o.push(i.p);var s=t=>{t||(t=new Error("Container missing")),"string"===typeof t.message&&(t.message+='\nwhile loading "'+i[1]+'" from '+i[2]),e[r]=()=>{throw t},i.p=0},u=(e,r,t,n,a,u)=>{try{var l=e(r,t);if(!l||!l.then)return a(l,n,u);var f=l.then((e=>a(e,n)),s);if(!u)return f;o.push(i.p=f)}catch(d){s(d)}},l=(e,r,t)=>u(r.get,i[1],a,0,f,t),f=t=>{i.p=1,e[r]=e=>{e.exports=t()}};u(t,i[2],0,0,((e,r,n)=>e?u(t.I,i[0],0,e,l,n):s()),1)}}))}})(),(()=>{t.S={};var e={},r={};t.I=(n,a)=>{a||(a=[]);var o=r[n];if(o||(o=r[n]={}),!(a.indexOf(o)>=0)){if(a.push(o),e[n])return e[n];t.o(t.S,n)||(t.S[n]={});var i=t.S[n],s="senhub",u=(e,r,t,n)=>{var a=i[e]=i[e]||{},o=a[r];(!o||!o.loaded&&(!n!=!o.eager?n:s>o.from))&&(a[r]={get:t,from:s,eager:!!n})},l=[];if("default"===n)u("@reduxjs/toolkit","1.6.2",(()=>t.e(361).then((()=>()=>t(21361))))),u("antd","4.17.0-alpha.7",(()=>Promise.all([t.e(757),t.e(488),t.e(808),t.e(950),t.e(181)]).then((()=>()=>t(95808))))),u("react-dom","17.0.2",(()=>Promise.all([t.e(108),t.e(950)]).then((()=>()=>t(81108))))),u("react-redux","7.2.5",(()=>Promise.all([t.e(771),t.e(950),t.e(181)]).then((()=>()=>t(59771))))),u("react-router-dom","5.3.0",(()=>Promise.all([t.e(521),t.e(950),t.e(878)]).then((()=>()=>t(9402))))),u("react","17.0.2",(()=>t.e(276).then((()=>()=>t(7276))))),(e=>{var r=e=>{return r="Initialization of sharing external failed: "+e,"undefined"!==typeof console&&console.warn&&console.warn(r);var r};try{var o=t(e);if(!o)return;var i=e=>e&&e.init&&e.init(t.S[n],a);if(o.then)return l.push(o.then(i,r));var s=i(o);if(s&&s.then)l.push(s.catch(r))}catch(u){r(u)}})(47459);return l.length?e[n]=Promise.all(l).then((()=>e[n]=1)):e[n]=1}}})(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var r=t.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var n=r.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{var e=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},r=(r,t)=>{r=e(r),t=e(t);for(var n=0;;){if(n>=r.length)return n<t.length&&"u"!=(typeof t[n])[0];var a=r[n],o=(typeof a)[0];if(n>=t.length)return"u"==o;var i=t[n],s=(typeof i)[0];if(o!=s)return"o"==o&&"n"==s||"s"==s||"u"==o;if("o"!=o&&"u"!=o&&a!=i)return a<i;n++}},n=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var a=1,o=1;o<e.length;o++)a--,t+="u"==(typeof(s=e[o]))[0]?"-":(a>0?".":"")+(a=2,s);return t}var i=[];for(o=1;o<e.length;o++){var s=e[o];i.push(0===s?"not("+u()+")":1===s?"("+u()+" || "+u()+")":2===s?i.pop()+" "+i.pop():n(s))}return u();function u(){return i.pop().replace(/^\((.+)\)$/,"$1")}},a=(r,t)=>{if(0 in r){t=e(t);var n=r[0],o=n<0;o&&(n=-n-1);for(var i=0,s=1,u=!0;;s++,i++){var l,f,d=s<r.length?(typeof r[s])[0]:"";if(i>=t.length||"o"==(f=(typeof(l=t[i]))[0]))return!u||("u"==d?s>n&&!o:""==d!=o);if("u"==f){if(!u||"u"!=d)return!1}else if(u)if(d==f)if(s<=n){if(l!=r[s])return!1}else{if(o?l>r[s]:l<r[s])return!1;l!=r[s]&&(u=!1)}else if("s"!=d&&"n"!=d){if(o||s<=n)return!1;u=!1,s--}else{if(s<=n||f<d!=o)return!1;u=!1}else"s"!=d&&"n"!=d&&(u=!1,s--)}}var h=[],c=h.pop.bind(h);for(i=1;i<r.length;i++){var p=r[i];h.push(1==p?c()|c():2==p?c()&c():p?a(p,t):!c())}return!!c()},o=(e,t)=>{var n=e[t];return Object.keys(n).reduce(((e,t)=>!e||!n[e].loaded&&r(e,t)?t:e),0)},i=(e,r,t)=>"Unsatisfied version "+r+" of shared singleton module "+e+" (required "+n(t)+")",s=(e,r,t,n)=>{var s=o(e,t);return a(n,s)||"undefined"!==typeof console&&console.warn&&console.warn(i(t,s,n)),u(e[t][s])},u=e=>(e.loaded=1,e.get()),l=e=>function(r,n,a,o){var i=t.I(r);return i&&i.then?i.then(e.bind(e,r,t.S[r],n,a,o)):e(r,t.S[r],n,a,o)},f=l(((e,r,n,a,o)=>r&&t.o(r,n)?s(r,0,n,a):o())),d={},h={92950:()=>f("default","react",[1,17,0,2],(()=>t.e(276).then((()=>()=>t(7276))))),12181:()=>f("default","react-dom",[1,17,0,2],(()=>t.e(108).then((()=>()=>t(81108))))),19289:()=>f("default","@reduxjs/toolkit",[1,1,6,2],(()=>t.e(361).then((()=>()=>t(21361))))),78589:()=>f("default","antd",[1,4,17,0,,"alpha",7],(()=>Promise.all([t.e(488),t.e(808),t.e(181)]).then((()=>()=>t(95808))))),55754:()=>f("default","react-redux",[1,7,2,5],(()=>Promise.all([t.e(771),t.e(181)]).then((()=>()=>t(59771)))))},c={181:[12181],416:[19289,78589,55754],950:[92950]};t.f.consumes=(e,r)=>{t.o(c,e)&&c[e].forEach((e=>{if(t.o(d,e))return r.push(d[e]);var n=r=>{d[e]=0,t.m[e]=n=>{delete t.c[e],n.exports=r()}},a=r=>{delete d[e],t.m[e]=n=>{throw delete t.c[e],r}};try{var o=h[e]();o.then?r.push(d[e]=o.then(n).catch(a)):n(o)}catch(i){a(i)}}))}})(),(()=>{var e={807:0};t.f.j=(r,n)=>{var a=t.o(e,r)?e[r]:void 0;if(0!==a)if(a)n.push(a[2]);else if(/^(181|416|950)$/.test(r))e[r]=0;else{var o=new Promise(((t,n)=>a=e[r]=[t,n]));n.push(a[2]=o);var i=t.p+t.u(r),s=new Error;t.l(i,(n=>{if(t.o(e,r)&&(0!==(a=e[r])&&(e[r]=void 0),a)){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;s.message="Loading chunk "+r+" failed.\n("+o+": "+i+")",s.name="ChunkLoadError",s.type=o,s.request=i,a[1](s)}}),"chunk-"+r,r)}};var r=(r,n)=>{var a,o,[i,s,u]=n,l=0;if(i.some((r=>0!==e[r]))){for(a in s)t.o(s,a)&&(t.m[a]=s[a]);if(u)u(t)}for(r&&r(n);l<i.length;l++)o=i[l],t.o(e,o)&&e[o]&&e[o][0](),e[i[l]]=0},n=globalThis.webpackChunksenhub=globalThis.webpackChunksenhub||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))})();var n=t(28688);senhub=n})();
//# sourceMappingURL=index.js.map