/*! For license information please see 419.ae8e0871.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunksenhub=self.webpackChunksenhub||[]).push([[419,366,299],{5419:function(e,n,t){t.r(n);var r=t(2181),o=t(5055),i=t(5754),c=t(6478),u=t(2950);var s=t.p+"static/media/sen.f2d012c907167ba613b035621b6423cb.svg",a=t(184),l=function(){var e=(0,o.useHistory)();return(0,a.jsx)(c.Affix,{offsetTop:12,children:(0,a.jsx)(c.Row,{gutter:[24,24],children:(0,a.jsx)(c.Col,{span:24,children:(0,a.jsx)(c.Card,{bodyStyle:{padding:16},hoverable:!0,children:(0,a.jsxs)(c.Row,{gutter:[24,24],wrap:!1,children:[(0,a.jsx)(c.Col,{flex:"auto",children:(0,a.jsxs)(c.Space,{align:"center",children:[(0,a.jsx)(c.Avatar,{src:s,alt:"logo"}),(0,a.jsx)(c.Typography.Text,{children:"2MF"})]})}),(0,a.jsx)(c.Col,{children:(0,a.jsx)(c.Button,{onClick:function(){return e.push("/welcome")},children:"Home"})}),(0,a.jsx)(c.Col,{children:(0,a.jsx)(c.Button,{type:"primary",onClick:function(){return e.goBack()},children:"Back"})})]})})})})})},f=function(e){var n=e.appId,t=(0,o.useHistory)(),r=(0,u.useCallback)((function(){return t.push("/dashboard/".concat(n))}),[t,n]);return(0,a.jsx)(c.Card,{onClick:r,hoverable:!0,children:(0,a.jsx)(c.Row,{gutter:[24,24],children:(0,a.jsx)(c.Col,{children:(0,a.jsx)(c.Typography.Title,{level:5,children:n})})})})},d="production",p=t(1413);var h={appId:"senhub",url:"https://hub.sentre.io"},y={development:(0,p.Z)({},h),staging:(0,p.Z)({},h),production:(0,p.Z)({},h)},j={spltAddress:"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",splataAddress:"ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"},b={development:(0,p.Z)((0,p.Z)({node:"https://api.devnet.solana.com",chainId:103,cluster:"devnet",senAddress:"5YwUkPdXLoujGkZuo9B4LsLKj3hdkDcfP4derpspifSJ"},j),{},{swapAddress:"4erFSLP7oBFSVC1t35jdxmbfxEhYCKfoM6XdG2BLR3UF",taxmanAddress:"8UaZw2jDhJzv5V53569JbCd3bD4BnyCfBH3sjwgajGS9"}),staging:(0,p.Z)((0,p.Z)({node:"https://api.devnet.solana.com",cluster:"devnet",chainId:103,senAddress:"5YwUkPdXLoujGkZuo9B4LsLKj3hdkDcfP4derpspifSJ"},j),{},{swapAddress:"4erFSLP7oBFSVC1t35jdxmbfxEhYCKfoM6XdG2BLR3UF",taxmanAddress:"8UaZw2jDhJzv5V53569JbCd3bD4BnyCfBH3sjwgajGS9"}),production:(0,p.Z)((0,p.Z)({node:"https://api.mainnet-beta.solana.com",cluster:"mainnet",chainId:101,senAddress:"SENBBKVCM7homnf5RX9zqpf1GFe935hnbU4uVzY1Y6M"},j),{},{swapAddress:"SSW7ooZ1EbEognq5GosbygA3uWW1Hq1NsFq6TsftCFV",taxmanAddress:"9doo2HZQEmh2NgfT3Yx12M89aoBheycYqH1eaR5gKb3e"})},m={env:d,basics:y.production,sol:b.production}.basics,w=m.url,v=m.appId,x={senhub:{manifest:{url:"".concat(w,"/index.js"),scope:v,module:"./"}}},g=function(){return(0,a.jsxs)(c.Row,{gutter:[24,24],justify:"center",children:[(0,a.jsx)(c.Col,{children:(0,a.jsxs)(c.Space,{direction:"vertical",align:"center",children:[(0,a.jsx)(c.Avatar,{size:128,src:s,alt:"logo"}),(0,a.jsxs)(c.Typography.Text,{children:[(0,a.jsx)("strong",{children:"2mf"})," is an example and an experiement for Micro Frontend and Module Federation."]})]})}),(0,a.jsx)(c.Col,{span:24,children:(0,a.jsx)(c.Row,{gutter:[24,24],children:Object.keys(x).map((function(e){return(0,a.jsx)(c.Col,{children:(0,a.jsx)(f,{appId:e})},e)}))})})]})},O=t(5987),C=t(5671),Z=t(3144),k=t(136),P=t(7277),S=function(e){(0,k.Z)(t,e);var n=(0,P.Z)(t);function t(e){var r;return(0,C.Z)(this,t),(r=n.call(this,e)).support=function(){var e=r.props.remoteUrl;return window.open("mailto:hi@sentre.io?subject=".concat(e," has failed"),"_blank")},r.state={failed:!1},r}return(0,Z.Z)(t,[{key:"componentDidCatch",value:function(e){return this.setState({failed:Boolean(e)})}},{key:"render",value:function(){var e=this.state.failed,n=this.props,t=n.remoteUrl,r=n.children;return e||!r?(0,a.jsxs)(c.Row,{gutter:[8,8],style:{height:"100%"},align:"middle",justify:"center",children:[(0,a.jsx)(c.Col,{span:24,children:(0,a.jsx)(c.Typography.Title,{level:4,style:{textAlign:"center"},children:t})}),(0,a.jsx)(c.Col,{span:24,children:(0,a.jsx)("p",{style:{textAlign:"center"},children:"Oops! The application can't load properly"})}),(0,a.jsx)(c.Col,{span:24,children:(0,a.jsx)(c.Button,{type:"primary",onClick:this.support,block:!0,children:"Support"})})]}):r}}]),t}(u.Component),R=t(5861),B=t(7757),E=t.n(B),D=function(e){var n=e.url,t=e.module;return[n,e.scope,t].join()},_=function(e){var n=D(e),t=document.getElementById(n);if(t)return window[e.scope]?Promise.resolve(!0):new Promise((function(e){t.onload=function(n){e(!0)}}));var r=document.createElement("script");r.src=e.url,r.type="text/javascript",r.async=!0,r.id=n;var o=new Promise((function(e,n){r.onload=function(){return e(r)},r.onerror=function(e){n(e)}}));return document.head.appendChild(r),o},T=function(e,n,r){return(0,R.Z)(E().mark((function o(){var i,c,u,s;return E().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,t.I("default");case 3:if((i=window[n]).isInitialized){o.next=8;break}return i.isInitialized=!0,o.next=8,i.init(t.S.default);case 8:return o.next=10,window[n].get(r);case 10:return c=o.sent,u=c(),o.abrupt("return",u);case 15:throw o.prev=15,o.t0=o.catch(0),(s=new Error("There was a problem loading the remote module. Please check the parameters (url: ".concat(e," scope: ").concat(n," module: ").concat(r,")"))).name="RemoteModuleLoadingError",s;case 20:case"end":return o.stop()}}),o,null,[[0,15]])})))},A=function(e){window.remoteObjectDictionary=window.remoteObjectDictionary||{};var n=D(e),t=window.remoteObjectDictionary[n];if(t)return t();var r=function(e){var n,t="pending",r=e.then((function(e){t="success",n=e}),(function(e){t="error",n=e}));return function(){switch(t){case"pending":throw r;case"error":throw n;default:return n}}}(function(e){window.remoteModuleDictionary=window.remoteModuleDictionary||{};var n=D(e);return window.remoteModuleDictionary[n]||(window.remoteModuleDictionary[n]=new Promise(function(){var n=(0,R.Z)(E().mark((function n(t,r){var o;return E().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,_(e);case 3:return n.next=5,T(e.url,e.scope,e.module)();case 5:o=n.sent,t(o),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),r(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e,t){return n.apply(this,arguments)}}()),window.remoteModuleDictionary[n])}(e));return window.remoteObjectDictionary[n]=r,r()},F=["type","manifest"],I=["type","manifest"],L=function(){return(0,a.jsx)(c.Skeleton,{active:!0})},M=(0,u.forwardRef)((function(e,n){var t=e.type,r=e.manifest,o=(0,O.Z)(e,F),i=A(r)[t];return(0,a.jsx)(i,(0,p.Z)((0,p.Z)({},o),{},{ref:n}))})),U=(0,u.forwardRef)((function(e,n){var t=e.type,r=e.manifest,o=(0,O.Z)(e,I);return(0,a.jsx)(S,{remoteUrl:(null===r||void 0===r?void 0:r.url)||"Unknown",children:(0,a.jsx)(u.Suspense,{fallback:(0,a.jsx)(L,{}),children:(0,a.jsx)(M,(0,p.Z)((0,p.Z)({type:t,manifest:r},o),{},{ref:n}))})})})),G=U,N=function(){var e=(0,o.useParams)().appId;return(0,a.jsxs)(c.Row,{gutter:[24,24],children:[(0,a.jsx)(c.Col,{span:24,children:(0,a.jsx)(G,(0,p.Z)({type:"Page"},x[e]))}),(0,a.jsx)(c.Col,{span:24,children:(0,a.jsx)(G,(0,p.Z)((0,p.Z)({type:"Widget"},x[e]),{},{backgroundColor:"cyan"}))})]})},H=function(){return(0,a.jsx)(c.Layout,{style:{padding:12,minHeight:"100vh"},children:(0,a.jsxs)(c.Row,{gutter:[24,24],children:[(0,a.jsx)(c.Col,{span:24,children:(0,a.jsx)(l,{})}),(0,a.jsx)(c.Col,{span:24,children:(0,a.jsxs)(o.Switch,{children:[(0,a.jsx)(o.Route,{exact:!0,path:"/welcome",component:g}),(0,a.jsx)(o.Route,{exact:!0,path:"/dashboard/:appId",component:N}),(0,a.jsx)(o.Redirect,{from:"*",to:"/welcome"})]})})]})})},V=t(866),Y=t.n(V),q=function(e){e&&e instanceof Function&&t.e(787).then(t.bind(t,787)).then((function(n){var t=n.getCLS,r=n.getFID,o=n.getFCP,i=n.getLCP,c=n.getTTFB;t(e),r(e),o(e),i(e),c(e)}))};c.ConfigProvider.config({theme:{primaryColor:"#F9575E",infoColor:"#37CDFA",successColor:"#3DBA4E",warningColor:"#FCB017",errorColor:"#F2323F"}}),(0,r.render)((0,a.jsx)(i.Provider,{store:Y(),children:(0,a.jsx)(o.BrowserRouter,{children:(0,a.jsx)(H,{})})}),document.getElementById("root")),q()},1725:function(e){var n=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,i){for(var c,u,s=o(e),a=1;a<arguments.length;a++){for(var l in c=Object(arguments[a]))t.call(c,l)&&(s[l]=c[l]);if(n){u=n(c);for(var f=0;f<u.length;f++)r.call(c,u[f])&&(s[u[f]]=c[u[f]])}}return s}},6374:function(e,n,t){t(1725);var r=t(2950),o=60103;if(60107,"function"===typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),i("react.fragment")}var c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,t){var r,i={},a=null,l=null;for(r in void 0!==t&&(a=""+t),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(l=n.ref),n)u.call(n,r)&&!s.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:o,type:e,key:a,ref:l,props:i,_owner:c.current}}n.jsx=a,n.jsxs=a},184:function(e,n,t){e.exports=t(6374)},7326:function(e,n,t){function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}t.d(n,{Z:function(){return r}})},5671:function(e,n,t){function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}t.d(n,{Z:function(){return r}})},3144:function(e,n,t){function r(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,n,t){return n&&r(e.prototype,n),t&&r(e,t),e}t.d(n,{Z:function(){return o}})},7277:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(1120),o=t(8814),i=t(1002),c=t(7326);function u(e,n){if(n&&("object"===(0,i.Z)(n)||"function"===typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return(0,c.Z)(e)}function s(e){var n=(0,o.Z)();return function(){var t,o=(0,r.Z)(e);if(n){var i=(0,r.Z)(this).constructor;t=Reflect.construct(o,arguments,i)}else t=o.apply(this,arguments);return u(this,t)}}},4942:function(e,n,t){function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.d(n,{Z:function(){return r}})},1120:function(e,n,t){function r(e){return r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(e)}t.d(n,{Z:function(){return r}})},136:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(9611);function o(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&(0,r.Z)(e,n)}},8814:function(e,n,t){function r(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}t.d(n,{Z:function(){return r}})},1413:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(4942);function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}},5987:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(3366);function o(e,n){if(null==e)return{};var t,o,i=(0,r.Z)(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}},3366:function(e,n,t){function r(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}t.d(n,{Z:function(){return r}})},9611:function(e,n,t){function r(e,n){return r=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e},r(e,n)}t.d(n,{Z:function(){return r}})},1002:function(e,n,t){function r(e){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}t.d(n,{Z:function(){return r}})}}]);
//# sourceMappingURL=419.ae8e0871.chunk.js.map