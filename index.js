var senhub;(()=>{"use strict";var e={99543:(e,_,r)=>{var s={"./bootstrap":()=>Promise.all([r.e("vendors-node_modules_senswap_sen-js_dist_index_js-node_modules_solana_buffer-layout_lib_Layou-7f9f12"),r.e("vendors-node_modules_sentre_antd-ionicon_dist_index_js"),r.e("vendors-node_modules_solana_web3_js_lib_index_browser_esm_js-node_modules_prop-types_index_js-c14936"),r.e("webpack_sharing_consume_default_react_react"),r.e("webpack_sharing_consume_default_reduxjs_toolkit_reduxjs_toolkit-webpack_sharing_consume_defau-0c3314"),r.e("src_app_bootstrap_app_tsx")]).then((()=>()=>r(42762))),"./static":()=>r.e("src_app_static_app_tsx-src_app_static_docs_README_md-src_app_static_images_logo_png-src_app_s-86207d").then((()=>()=>r(69112)))},t=(e,_)=>(r.R=_,_=r.o(s,e)?s[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),r.R=void 0,_),o=(e,_)=>{if(r.S){var s="default",t=r.S[s];if(t&&t!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return r.S[s]=e,r.I(s,_)}};r.d(_,{get:()=>t,init:()=>o})}},_={};function r(s){var t=_[s];if(void 0!==t)return t.exports;var o=_[s]={id:s,loaded:!1,exports:{}};return e[s].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}r.m=e,r.c=_,r.amdO={},r.n=e=>{var _=e&&e.__esModule?()=>e.default:()=>e;return r.d(_,{a:_}),_},(()=>{var e,_=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;r.t=function(s,t){if(1&t&&(s=this(s)),8&t)return s;if("object"===typeof s&&s){if(4&t&&s.__esModule)return s;if(16&t&&"function"===typeof s.then)return s}var o=Object.create(null);r.r(o);var n={};e=e||[null,_({}),_([]),_(_)];for(var a=2&t&&s;"object"==typeof a&&!~e.indexOf(a);a=_(a))Object.getOwnPropertyNames(a).forEach((e=>n[e]=()=>s[e]));return n.default=()=>s,r.d(o,n),o}})(),r.d=(e,_)=>{for(var s in _)r.o(_,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:_[s]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((_,s)=>(r.f[s](e,_),_)),[])),r.u=e=>"static/js/"+e+"."+{"vendors-node_modules_reduxjs_toolkit_dist_redux-toolkit_esm_js":"80733981",webpack_sharing_consume_default_react_react:"6db20098","src_os_store_context_ts-_3b660":"41e0ae0f","vendors-node_modules_senswap_sen-js_dist_index_js-node_modules_solana_buffer-layout_lib_Layou-7f9f12":"75e87243","vendors-node_modules_project-serum_sol-wallet-adapter_dist_esm_index_js-node_modules_lunr_lunr_js":"cac2e40b","vendors-node_modules_solana_spl-token-registry_dist_module_index_js":"cc878d67","vendors-node_modules_solana_web3_js_lib_index_browser_esm_js-node_modules_react_jsx-runtime_js":"eeca9e7e","src_os_store_devTools_ts-src_os_store_mints_reducer_ts-src_os_view_wallet_lib_cloverWallet_ts-e7cc55":"f1418c1d","webpack_sharing_consume_default_reduxjs_toolkit_reduxjs_toolkit-webpack_sharing_consume_defau-0c3314":"62803cbf","src_os_store_index_ts-src_shared_pdb_ipfs_ts":"2229498d","src_os_providers_index_tsx-src_shared_pdb_index_ts":"0aeeeab7","vendors-node_modules_antd_es_index_js":"dc160bd5","webpack_sharing_consume_default_react-dom_react-dom":"fe417696",node_modules_babel_runtime_regenerator_index_js:"aafa2f49","vendors-node_modules_react-dom_index_js":"7eb683cd","vendors-node_modules_react-redux_es_index_js":"eb2fbad0","vendors-node_modules_react-router_esm_react-router_js":"6b81f667","node_modules_react-router-dom_esm_react-router-dom_js-_d6f01":"f96a3b17",node_modules_react_index_js:"fa366fb9","vendors-node_modules_sentre_antd-ionicon_dist_index_js":"104f7216","vendors-node_modules_solana_web3_js_lib_index_browser_esm_js-node_modules_prop-types_index_js-c14936":"19a0cb65",src_app_bootstrap_app_tsx:"be808fd9","src_app_static_app_tsx-src_app_static_docs_README_md-src_app_static_images_logo_png-src_app_s-86207d":"08f59e63","src_os_store_context_ts-_3b661":"aac85046",src_os_providers_index_tsx:"4e490259"}[e]+".chunk.js",r.miniCssF=e=>{},r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),r.o=(e,_)=>Object.prototype.hasOwnProperty.call(e,_),(()=>{var e={},_="senhub:";r.l=(s,t,o,n)=>{if(e[s])e[s].push(t);else{var a,d;if(void 0!==o)for(var i=document.getElementsByTagName("script"),l=0;l<i.length;l++){var u=i[l];if(u.getAttribute("src")==s||u.getAttribute("data-webpack")==_+o){a=u;break}}a||(d=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",_+o),a.src=s),e[s]=[t];var c=(_,r)=>{a.onerror=a.onload=null,clearTimeout(m);var t=e[s];if(delete e[s],a.parentNode&&a.parentNode.removeChild(a),t&&t.forEach((e=>e(r))),_)return _(r)},m=setTimeout(c.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=c.bind(null,a.onerror),a.onload=c.bind(null,a.onload),d&&document.head.appendChild(a)}}})(),r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),r.j="senhub",(()=>{r.S={};var e={},_={};r.I=(s,t)=>{t||(t=[]);var o=_[s];if(o||(o=_[s]={}),!(t.indexOf(o)>=0)){if(t.push(o),e[s])return e[s];r.o(r.S,s)||(r.S[s]={});var n=r.S[s],a="senhub",d=(e,_,r,s)=>{var t=n[e]=n[e]||{},o=t[_];(!o||!o.loaded&&(!s!=!o.eager?s:a>o.from))&&(t[_]={get:r,from:a,eager:!!s})},i=[];if("default"===s)d("@reduxjs/toolkit","1.8.2",(()=>r.e("vendors-node_modules_reduxjs_toolkit_dist_redux-toolkit_esm_js").then((()=>()=>r(57853))))),d("@senhub/context","2.1.0",(()=>Promise.all([r.e("webpack_sharing_consume_default_react_react"),r.e("src_os_store_context_ts-_3b660")]).then((()=>()=>r(23320))))),d("@senhub/providers","2.1.0",(()=>Promise.all([r.e("vendors-node_modules_senswap_sen-js_dist_index_js-node_modules_solana_buffer-layout_lib_Layou-7f9f12"),r.e("vendors-node_modules_project-serum_sol-wallet-adapter_dist_esm_index_js-node_modules_lunr_lunr_js"),r.e("vendors-node_modules_solana_spl-token-registry_dist_module_index_js"),r.e("vendors-node_modules_solana_web3_js_lib_index_browser_esm_js-node_modules_react_jsx-runtime_js"),r.e("webpack_sharing_consume_default_react_react"),r.e("src_os_store_devTools_ts-src_os_store_mints_reducer_ts-src_os_view_wallet_lib_cloverWallet_ts-e7cc55"),r.e("webpack_sharing_consume_default_reduxjs_toolkit_reduxjs_toolkit-webpack_sharing_consume_defau-0c3314"),r.e("src_os_store_index_ts-src_shared_pdb_ipfs_ts"),r.e("src_os_providers_index_tsx-src_shared_pdb_index_ts")]).then((()=>()=>r(80039))))),d("antd","4.21.0",(()=>Promise.all([r.e("vendors-node_modules_antd_es_index_js"),r.e("webpack_sharing_consume_default_react_react"),r.e("webpack_sharing_consume_default_react-dom_react-dom"),r.e("node_modules_babel_runtime_regenerator_index_js")]).then((()=>()=>r(77145))))),d("react-dom","17.0.2",(()=>Promise.all([r.e("vendors-node_modules_react-dom_index_js"),r.e("webpack_sharing_consume_default_react_react")]).then((()=>()=>r(81108))))),d("react-redux","7.2.8",(()=>Promise.all([r.e("vendors-node_modules_react-redux_es_index_js"),r.e("webpack_sharing_consume_default_react_react"),r.e("webpack_sharing_consume_default_react-dom_react-dom")]).then((()=>()=>r(59771))))),d("react-router-dom","5.3.3",(()=>Promise.all([r.e("vendors-node_modules_react-router_esm_react-router_js"),r.e("webpack_sharing_consume_default_react_react"),r.e("node_modules_react-router-dom_esm_react-router-dom_js-_d6f01")]).then((()=>()=>r(9402))))),d("react","17.0.2",(()=>r.e("node_modules_react_index_js").then((()=>()=>r(7276)))));return i.length?e[s]=Promise.all(i).then((()=>e[s]=1)):e[s]=1}}})(),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var _=r.g.document;if(!e&&_&&(_.currentScript&&(e=_.currentScript.src),!e)){var s=_.getElementsByTagName("script");s.length&&(e=s[s.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{var e=e=>{var _=e=>e.split(".").map((e=>+e==e?+e:e)),r=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),s=r[1]?_(r[1]):[];return r[2]&&(s.length++,s.push.apply(s,_(r[2]))),r[3]&&(s.push([]),s.push.apply(s,_(r[3]))),s},_=(_,r)=>{_=e(_),r=e(r);for(var s=0;;){if(s>=_.length)return s<r.length&&"u"!=(typeof r[s])[0];var t=_[s],o=(typeof t)[0];if(s>=r.length)return"u"==o;var n=r[s],a=(typeof n)[0];if(o!=a)return"o"==o&&"n"==a||"s"==a||"u"==o;if("o"!=o&&"u"!=o&&t!=n)return t<n;s++}},s=e=>{var _=e[0],r="";if(1===e.length)return"*";if(_+.5){r+=0==_?">=":-1==_?"<":1==_?"^":2==_?"~":_>0?"=":"!=";for(var t=1,o=1;o<e.length;o++)t--,r+="u"==(typeof(a=e[o]))[0]?"-":(t>0?".":"")+(t=2,a);return r}var n=[];for(o=1;o<e.length;o++){var a=e[o];n.push(0===a?"not("+d()+")":1===a?"("+d()+" || "+d()+")":2===a?n.pop()+" "+n.pop():s(a))}return d();function d(){return n.pop().replace(/^\((.+)\)$/,"$1")}},t=(_,r)=>{if(0 in _){r=e(r);var s=_[0],o=s<0;o&&(s=-s-1);for(var n=0,a=1,d=!0;;a++,n++){var i,l,u=a<_.length?(typeof _[a])[0]:"";if(n>=r.length||"o"==(l=(typeof(i=r[n]))[0]))return!d||("u"==u?a>s&&!o:""==u!=o);if("u"==l){if(!d||"u"!=u)return!1}else if(d)if(u==l)if(a<=s){if(i!=_[a])return!1}else{if(o?i>_[a]:i<_[a])return!1;i!=_[a]&&(d=!1)}else if("s"!=u&&"n"!=u){if(o||a<=s)return!1;d=!1,a--}else{if(a<=s||l<u!=o)return!1;d=!1}else"s"!=u&&"n"!=u&&(d=!1,a--)}}var c=[],m=c.pop.bind(c);for(n=1;n<_.length;n++){var p=_[n];c.push(1==p?m()|m():2==p?m()&m():p?t(p,r):!m())}return!!m()},o=(e,r)=>{var s=e[r];return Object.keys(s).reduce(((e,r)=>!e||!s[e].loaded&&_(e,r)?r:e),0)},n=(e,_,r,t)=>"Unsatisfied version "+r+" from "+(r&&e[_][r].from)+" of shared singleton module "+_+" (required "+s(t)+")",a=(e,_,r,s)=>{var a=o(e,r);return t(s,a)||"undefined"!==typeof console&&console.warn&&console.warn(n(e,r,a,s)),d(e[r][a])},d=e=>(e.loaded=1,e.get()),i=e=>function(_,s,t,o){var n=r.I(_);return n&&n.then?n.then(e.bind(e,_,r.S[_],s,t,o)):e(_,r.S[_],s,t,o)},l=i(((e,_,s,t,o)=>_&&r.o(_,s)?a(_,0,s,t):o())),u={},c={92950:()=>l("default","react",[1,17,0,2],(()=>r.e("node_modules_react_index_js").then((()=>()=>r(7276))))),70103:()=>l("default","@senhub/context",[4,2,1,0],(()=>r.e("src_os_store_context_ts-_3b661").then((()=>()=>r(23320))))),19289:()=>l("default","@reduxjs/toolkit",[1,1,6,2],(()=>r.e("vendors-node_modules_reduxjs_toolkit_dist_redux-toolkit_esm_js").then((()=>()=>r(57853))))),32659:()=>l("default","antd",[1,4,20,2],(()=>Promise.all([r.e("vendors-node_modules_antd_es_index_js"),r.e("webpack_sharing_consume_default_react-dom_react-dom")]).then((()=>()=>r(77145))))),55754:()=>l("default","react-redux",[1,7,2,5],(()=>Promise.all([r.e("vendors-node_modules_react-redux_es_index_js"),r.e("webpack_sharing_consume_default_react-dom_react-dom")]).then((()=>()=>r(59771))))),12181:()=>l("default","react-dom",[1,17,0,2],(()=>r.e("vendors-node_modules_react-dom_index_js").then((()=>()=>r(81108))))),15780:()=>l("default","@senhub/providers",[4,2,1,0],(()=>Promise.all([r.e("vendors-node_modules_project-serum_sol-wallet-adapter_dist_esm_index_js-node_modules_lunr_lunr_js"),r.e("vendors-node_modules_solana_spl-token-registry_dist_module_index_js"),r.e("src_os_store_devTools_ts-src_os_store_mints_reducer_ts-src_os_view_wallet_lib_cloverWallet_ts-e7cc55"),r.e("src_os_providers_index_tsx")]).then((()=>()=>r(80039)))))},m={webpack_sharing_consume_default_react_react:[92950],"src_os_store_devTools_ts-src_os_store_mints_reducer_ts-src_os_view_wallet_lib_cloverWallet_ts-e7cc55":[70103],"webpack_sharing_consume_default_reduxjs_toolkit_reduxjs_toolkit-webpack_sharing_consume_defau-0c3314":[19289,32659,55754],"webpack_sharing_consume_default_react-dom_react-dom":[12181],src_app_bootstrap_app_tsx:[15780]};r.f.consumes=(e,_)=>{r.o(m,e)&&m[e].forEach((e=>{if(r.o(u,e))return _.push(u[e]);var s=_=>{u[e]=0,r.m[e]=s=>{delete r.c[e],s.exports=_()}},t=_=>{delete u[e],r.m[e]=s=>{throw delete r.c[e],_}};try{var o=c[e]();o.then?_.push(u[e]=o.then(s).catch(t)):s(o)}catch(n){t(n)}}))}})(),(()=>{var e={senhub:0};r.f.j=(_,s)=>{var t=r.o(e,_)?e[_]:void 0;if(0!==t)if(t)s.push(t[2]);else if(/^webpack_sharing_consume_default_re(act(\-dom_react\-dom|_react)|duxjs_toolkit_reduxjs_toolkit\-webpack_sharing_consume_defau\-0c3314)$/.test(_))e[_]=0;else{var o=new Promise(((r,s)=>t=e[_]=[r,s]));s.push(t[2]=o);var n=r.p+r.u(_),a=new Error;r.l(n,(s=>{if(r.o(e,_)&&(0!==(t=e[_])&&(e[_]=void 0),t)){var o=s&&("load"===s.type?"missing":s.type),n=s&&s.target&&s.target.src;a.message="Loading chunk "+_+" failed.\n("+o+": "+n+")",a.name="ChunkLoadError",a.type=o,a.request=n,t[1](a)}}),"chunk-"+_,_)}};var _=(_,s)=>{var t,o,[n,a,d]=s,i=0;if(n.some((_=>0!==e[_]))){for(t in a)r.o(a,t)&&(r.m[t]=a[t]);if(d)d(r)}for(_&&_(s);i<n.length;i++)o=n[i],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0},s=globalThis.webpackChunksenhub=globalThis.webpackChunksenhub||[];s.forEach(_.bind(null,0)),s.push=_.bind(null,s.push.bind(s))})();var s=r(99543);senhub=s})();
//# sourceMappingURL=index.js.map