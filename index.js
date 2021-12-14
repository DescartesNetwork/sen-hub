var senhub;!function(){"use strict";var n={28688:function(n,e,t){var r={"./bootstrap":function(){return Promise.all([t.e(936),t.e(657),t.e(308),t.e(99),t.e(950),t.e(416),t.e(849)]).then((function(){return function(){return t(85755)}}))},"./static":function(){return t.e(423).then((function(){return function(){return t(48423)}}))},"./providers":function(){return Promise.all([t.e(936),t.e(657),t.e(128),t.e(99),t.e(950),t.e(416),t.e(449)]).then((function(){return function(){return t(99800)}}))}},u=function(n,e){return t.R=e,e=t.o(r,n)?r[n]():Promise.resolve().then((function(){throw new Error('Module "'+n+'" does not exist in container.')})),t.R=void 0,e},o=function(n,e){if(t.S){var r=t.S.default,u="default";if(r&&r!==n)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[u]=n,t.I(u,e)}};t.d(e,{get:function(){return u},init:function(){return o}})},47459:function(n,e,t){var r=new Error;n.exports=new Promise((function(n,e){if("undefined"!==typeof senhub)return n();t.l("https://descartesnetwork.github.io/senhub/index.js",(function(t){if("undefined"!==typeof senhub)return n();var u=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;r.message="Loading script failed.\n("+u+": "+o+")",r.name="ScriptExternalLoadError",r.type=u,r.request=o,e(r)}),"senhub")})).then((function(){return senhub}))}},e={};function t(r){var u=e[r];if(void 0!==u)return u.exports;var o=e[r]={id:r,loaded:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}t.m=n,t.c=e,t.amdO={},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,{a:e}),e},t.d=function(n,e){for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.f={},t.e=function(n){return Promise.all(Object.keys(t.f).reduce((function(e,r){return t.f[r](n,e),e}),[]))},t.u=function(n){return"static/js/"+n+"."+{99:"facd55b0",108:"59677b3d",128:"b942d4de",181:"3f56b2ee",276:"7b4f6610",308:"97bcf6db",361:"5a89afd8",366:"93a48de3",413:"80a1a369",416:"ddfae0c4",423:"98f698b6",449:"003d0e6b",478:"a6b2c37f",521:"a3aca325",657:"d173b7e3",771:"12d37394",849:"bf4792eb",878:"04d592ec",883:"8d377d91",936:"454bb172",950:"0aab46ab"}[n]+".chunk.js"},t.miniCssF=function(n){},t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}(),t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},function(){var n={},e="senhub:";t.l=function(r,u,o,i){if(n[r])n[r].push(u);else{var f,c;if(void 0!==o)for(var a=document.getElementsByTagName("script"),s=0;s<a.length;s++){var l=a[s];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==e+o){f=l;break}}f||(c=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,t.nc&&f.setAttribute("nonce",t.nc),f.setAttribute("data-webpack",e+o),f.src=r),n[r]=[u];var d=function(e,t){f.onerror=f.onload=null,clearTimeout(h);var u=n[r];if(delete n[r],f.parentNode&&f.parentNode.removeChild(f),u&&u.forEach((function(n){return n(t)})),e)return e(t)},h=setTimeout(d.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=d.bind(null,f.onerror),f.onload=d.bind(null,f.onload),c&&document.head.appendChild(f)}}}(),t.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.nmd=function(n){return n.paths=[],n.children||(n.children=[]),n},function(){var e={849:[49142]},r={49142:["default","./providers",47459]};t.f.remotes=function(u,o){t.o(e,u)&&e[u].forEach((function(e){var u=t.R;u||(u=[]);var i=r[e];if(!(u.indexOf(i)>=0)){if(u.push(i),i.p)return o.push(i.p);var f=function(t){t||(t=new Error("Container missing")),"string"===typeof t.message&&(t.message+='\nwhile loading "'+i[1]+'" from '+i[2]),n[e]=function(){throw t},i.p=0},c=function(n,e,t,r,u,c){try{var a=n(e,t);if(!a||!a.then)return u(a,r,c);var s=a.then((function(n){return u(n,r)}),f);if(!c)return s;o.push(i.p=s)}catch(l){f(l)}},a=function(n,e,t){return c(e.get,i[1],u,0,s,t)},s=function(t){i.p=1,n[e]=function(n){n.exports=t()}};c(t,i[2],0,0,(function(n,e,r){return n?c(t.I,i[0],0,n,a,r):f()}),1)}}))}}(),function(){t.S={};var n={},e={};t.I=function(r,u){u||(u=[]);var o=e[r];if(o||(o=e[r]={}),!(u.indexOf(o)>=0)){if(u.push(o),n[r])return n[r];t.o(t.S,r)||(t.S[r]={});var i=t.S[r],f="senhub",c=function(n,e,t,r){var u=i[n]=i[n]||{},o=u[e];(!o||!o.loaded&&(!r!=!o.eager?r:f>o.from))&&(u[e]={get:t,from:f,eager:!!r})},a=[];if("default"===r)c("@reduxjs/toolkit","1.6.2",(function(){return Promise.all([t.e(361),t.e(413)]).then((function(){return function(){return t(21361)}}))})),c("antd","4.17.0-alpha.7",(function(){return Promise.all([t.e(936),t.e(883),t.e(478),t.e(950),t.e(181)]).then((function(){return function(){return t(81478)}}))})),c("react-dom","17.0.2",(function(){return Promise.all([t.e(108),t.e(950)]).then((function(){return function(){return t(81108)}}))})),c("react-redux","7.2.5",(function(){return Promise.all([t.e(771),t.e(950),t.e(181),t.e(366)]).then((function(){return function(){return t(59771)}}))})),c("react-router-dom","5.3.0",(function(){return Promise.all([t.e(521),t.e(950),t.e(878)]).then((function(){return function(){return t(9402)}}))})),c("react","17.0.2",(function(){return t.e(276).then((function(){return function(){return t(7276)}}))})),function(n){var e=function(n){var e;e="Initialization of sharing external failed: "+n,"undefined"!==typeof console&&console.warn&&console.warn(e)};try{var o=t(n);if(!o)return;var i=function(n){return n&&n.init&&n.init(t.S[r],u)};if(o.then)return a.push(o.then(i,e));var f=i(o);if(f&&f.then)a.push(f.catch(e))}catch(c){e(c)}}(47459);return a.length?n[r]=Promise.all(a).then((function(){return n[r]=1})):n[r]=1}}}(),function(){var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n}(),function(){var n=function(n){var e=function(n){return n.split(".").map((function(n){return+n==n?+n:n}))},t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(n),r=t[1]?e(t[1]):[];return t[2]&&(r.length++,r.push.apply(r,e(t[2]))),t[3]&&(r.push([]),r.push.apply(r,e(t[3]))),r},e=function(e,t){e=n(e),t=n(t);for(var r=0;;){if(r>=e.length)return r<t.length&&"u"!=(typeof t[r])[0];var u=e[r],o=(typeof u)[0];if(r>=t.length)return"u"==o;var i=t[r],f=(typeof i)[0];if(o!=f)return"o"==o&&"n"==f||"s"==f||"u"==o;if("o"!=o&&"u"!=o&&u!=i)return u<i;r++}},r=function(n){var e=n[0],t="";if(1===n.length)return"*";if(e+.5){t+=0==e?">=":-1==e?"<":1==e?"^":2==e?"~":e>0?"=":"!=";for(var u=1,o=1;o<n.length;o++)u--,t+="u"==(typeof(f=n[o]))[0]?"-":(u>0?".":"")+(u=2,f);return t}var i=[];for(o=1;o<n.length;o++){var f=n[o];i.push(0===f?"not("+c()+")":1===f?"("+c()+" || "+c()+")":2===f?i.pop()+" "+i.pop():r(f))}return c();function c(){return i.pop().replace(/^\((.+)\)$/,"$1")}},u=function(e,t){if(0 in e){t=n(t);var r=e[0],o=r<0;o&&(r=-r-1);for(var i=0,f=1,c=!0;;f++,i++){var a,s,l=f<e.length?(typeof e[f])[0]:"";if(i>=t.length||"o"==(s=(typeof(a=t[i]))[0]))return!c||("u"==l?f>r&&!o:""==l!=o);if("u"==s){if(!c||"u"!=l)return!1}else if(c)if(l==s)if(f<=r){if(a!=e[f])return!1}else{if(o?a>e[f]:a<e[f])return!1;a!=e[f]&&(c=!1)}else if("s"!=l&&"n"!=l){if(o||f<=r)return!1;c=!1,f--}else{if(f<=r||s<l!=o)return!1;c=!1}else"s"!=l&&"n"!=l&&(c=!1,f--)}}var d=[],h=d.pop.bind(d);for(i=1;i<e.length;i++){var p=e[i];d.push(1==p?h()|h():2==p?h()&h():p?u(p,t):!h())}return!!h()},o=function(n,t){var r=n[t];return Object.keys(r).reduce((function(n,t){return!n||!r[n].loaded&&e(n,t)?t:n}),0)},i=function(n,e,t){return"Unsatisfied version "+e+" of shared singleton module "+n+" (required "+r(t)+")"},f=function(n,e,t,r){var f=o(n,t);return u(r,f)||"undefined"!==typeof console&&console.warn&&console.warn(i(t,f,r)),c(n[t][f])},c=function(n){return n.loaded=1,n.get()},a=function(n){return function(e,r,u,o){var i=t.I(e);return i&&i.then?i.then(n.bind(n,e,t.S[e],r,u,o)):n(e,t.S[e],r,u,o)}},s=a((function(n,e,r,u,o){return e&&t.o(e,r)?f(e,0,r,u):o()})),l={},d={92950:function(){return s("default","react",[1,17,0,2],(function(){return t.e(276).then((function(){return function(){return t(7276)}}))}))},12181:function(){return s("default","react-dom",[1,17,0,2],(function(){return t.e(108).then((function(){return function(){return t(81108)}}))}))},19289:function(){return s("default","@reduxjs/toolkit",[1,1,6,2],(function(){return t.e(361).then((function(){return function(){return t(21361)}}))}))},78589:function(){return s("default","antd",[1,4,17,0,,"alpha",7],(function(){return Promise.all([t.e(883),t.e(478),t.e(181)]).then((function(){return function(){return t(81478)}}))}))},55754:function(){return s("default","react-redux",[1,7,2,5],(function(){return Promise.all([t.e(771),t.e(181)]).then((function(){return function(){return t(59771)}}))}))}},h={181:[12181],416:[19289,78589,55754],950:[92950]};t.f.consumes=function(n,e){t.o(h,n)&&h[n].forEach((function(n){if(t.o(l,n))return e.push(l[n]);var r=function(e){l[n]=0,t.m[n]=function(r){delete t.c[n],r.exports=e()}},u=function(e){delete l[n],t.m[n]=function(r){throw delete t.c[n],e}};try{var o=d[n]();o.then?e.push(l[n]=o.then(r).catch(u)):r(o)}catch(i){u(i)}}))}}(),function(){var n={807:0};t.f.j=function(e,r){var u=t.o(n,e)?n[e]:void 0;if(0!==u)if(u)r.push(u[2]);else if(/^(181|416|950)$/.test(e))n[e]=0;else{var o=new Promise((function(t,r){u=n[e]=[t,r]}));r.push(u[2]=o);var i=t.p+t.u(e),f=new Error;t.l(i,(function(r){if(t.o(n,e)&&(0!==(u=n[e])&&(n[e]=void 0),u)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;f.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",f.name="ChunkLoadError",f.type=o,f.request=i,u[1](f)}}),"chunk-"+e,e)}};var e=function(e,r){var u,o,i=r[0],f=r[1],c=r[2],a=0;if(i.some((function(e){return 0!==n[e]}))){for(u in f)t.o(f,u)&&(t.m[u]=f[u]);if(c)c(t)}for(e&&e(r);a<i.length;a++)o=i[a],t.o(n,o)&&n[o]&&n[o][0](),n[i[a]]=0},r=self.webpackChunksenhub=self.webpackChunksenhub||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=t(28688);senhub=r}();
//# sourceMappingURL=index.js.map