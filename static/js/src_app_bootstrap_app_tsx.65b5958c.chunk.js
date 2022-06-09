(globalThis.webpackChunksenhub=globalThis.webpackChunksenhub||[]).push([["src_app_bootstrap_app_tsx"],{79937:(e,t,s)=>{"use strict";Object.defineProperty(t,"X$",{value:!0}),Object.defineProperty(t,"jY",{enumerable:!0,get:function(){return i.default}}),t.h0=void 0,Object.defineProperty(t,"ng",{enumerable:!0,get:function(){return a.default}});var n=r(s(59062)),i=r(s(17100)),a=r(s(89374));function r(e){return e&&e.__esModule?e:{default:e}}const c=[n.default];t.h0=c},42762:(e,t,s)=>{"use strict";s.r(t),s.d(t,{Page:()=>T,__esModule:()=>C.X$,logo:()=>C.jY,panels:()=>C.h0,readme:()=>C.ng});var n=s(55754),i=s(97847),a=s(92950),r=s(32659),c=s(9476),o=s(19289);const l="main",u=(0,o.createAsyncThunk)("main/increaseCounter",(async(e,t)=>{let{getState:s}=t;const{main:{counter:n}}=s();return{counter:n+1}})),h=(0,o.createSlice)({name:l,initialState:{counter:0},reducers:{},extraReducers:e=>{e.addCase(u.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)}))}}).reducer;var d=s(63805);const p={appId:"senhub",url:"https://descartesnetwork.github.io/senhub/index.js"},f={devnet:{node:"https://api.devnet.solana.com",spltAddress:"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",splataAddress:"ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"},testnet:{node:"https://api.testnet.solana.com",spltAddress:"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",splataAddress:"ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"},mainnet:{node:"https://api.mainnet-beta.solana.com",spltAddress:"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",splataAddress:"ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"}},m={manifest:{development:{...p},staging:{...p},production:{...p}}[d.OB],sol:f[d.ef]};var g=s(3007),v=s(45263);const{manifest:{appId:b}}=m,w=()=>{const{wallet:{address:e}}=(0,i.useWallet)(),t=(0,n.useDispatch)(),{counter:s}=(0,n.useSelector)((e=>e.main)),o=(0,a.useMemo)((()=>(0,g.f)(e,b)),[e]),l=(0,a.useCallback)((()=>t(u())),[t]);return(0,a.useEffect)((()=>{o&&o.setItem("counter",s)}),[o,s]),(0,v.jsxs)(r.Row,{gutter:[24,24],align:"middle",children:[(0,v.jsx)(r.Col,{span:24,children:(0,v.jsxs)(r.Space,{align:"center",children:[(0,v.jsx)(c.Z,{name:"newspaper-outline"}),(0,v.jsx)(r.Typography.Title,{level:4,children:"App View"})]})}),(0,v.jsx)(r.Col,{span:24,children:(0,v.jsxs)(r.Typography.Text,{children:["Address: ",e]})}),(0,v.jsx)(r.Col,{children:(0,v.jsxs)(r.Typography.Text,{children:["Counter: ",s]})}),(0,v.jsx)(r.Col,{children:(0,v.jsx)(r.Button,{onClick:l,children:"Increase"})})]})};var y=s(71256),I=s(48744),j=s.n(I),k=s(97429).Buffer;BigInt.prototype.toJSON=function(){return this.toString()};const A={serializableCheck:{isSerializable:e=>"undefined"===typeof e||null===e||"string"===typeof e||"boolean"===typeof e||"number"===typeof e||Array.isArray(e)||(e=>{if(null===e)return!1;const t=Object.getPrototypeOf(e);return null!==t&&null===Object.getPrototypeOf(t)})(e)||"bigint"===typeof e||e instanceof y.PublicKey||e instanceof j()||k.isBuffer(e)}},x=(0,o.configureStore)({middleware:e=>e(A),devTools:!1,reducer:{main:h}});var C=s(79937);const{manifest:{appId:S}}=m,T=()=>(0,v.jsx)(i.UIProvider,{appId:S,antd:!0,children:(0,v.jsx)(i.WalletProvider,{children:(0,v.jsx)(n.Provider,{store:x,children:(0,v.jsx)(w,{})})})})},3007:(e,t,s)=>{"use strict";s.d(t,{Z:()=>o,f:()=>l});var n=s(15454),i=s.n(n),a=s(95418),r=s(83868);class c{constructor(e){if(this.dbName=void 0,this.driver=void 0,this.ipfs=void 0,this.createInstance=e=>i().createInstance({driver:this.driver,name:this.dbName,storeName:e}),this.dropInstance=async e=>{const t=this.createInstance(e);return await t.clear(),await i().dropInstance({name:this.dbName,storeName:e})},this.all=async()=>{let e={};const t=(await this.createInstance("sentre").getItem("appIds")||[]).flat().concat(["sentre"]);for(const s of t){e[s]={};const t=this.createInstance(s);await t.iterate(((t,n)=>{e[s][n]=t}))}return e},this.fetch=async e=>await this.ipfs.get(e),this.backup=async()=>{const e=await this.all();return await this.ipfs.set(e)},this.restore=async e=>{const t=await this.fetch(e);for(const s in t){const e=await this.createInstance(s);for(const n in t[s]){const i=t[s][n];await e.setItem(n,i)}}return t},!a.account.isAddress(e))throw new Error("Invalid address");this.dbName=e,this.driver=[i().WEBSQL,i().LOCALSTORAGE],this.ipfs=new r.Z}}const o=c,l=(e,t)=>a.account.isAddress(e)?new c(e).createInstance(t):void 0},83868:(e,t,s)=>{"use strict";s.d(t,{Z:()=>c});var n=s(96348),i=s(45268),a=s(97429).Buffer;class r{constructor(){this._ipfs=async()=>{try{return window.ipfs||(window.ipfs=await(0,n.Ue)()),window.ipfs}catch(e){return await(0,i.sA)(500),await this._ipfs()}},this.get=async e=>{if(!r.isCID(e))throw new Error("Invalid CID");const t=await this._ipfs(),s=await t.cat(e);let n="";for await(const i of s)n+=a.from(i).toString();return JSON.parse(n)},this.set=async e=>{if(!e)throw new Error("Empty data");const t=JSON.stringify(e),s=await this._ipfs(),{cid:n}=await s.add(t);return n.toString()}}}r.isCID=e=>{try{return!!e&&n.bf.multihash(e)}catch(t){return!1}};const c=r},63805:(e,t,s)=>{"use strict";s.d(t,{Bv:()=>r,OB:()=>i,ef:()=>a,f4:()=>c});var n=s(53933);const i="production",a=(()=>{switch(n.Z.get("network")){case"devnet":return"devnet";case"testnet":return"testnet";default:return"mainnet"}})(),r=(()=>{switch(a){case"devnet":return 103;case"testnet":return 102;default:return 101}})(),c={devnet:"https://api.devnet.solana.com",testnet:"https://api.testnet.solana.com",mainnet:"development"===i?"https://api.mainnet-beta.solana.com":"https://solitary-autumn-water.solana-mainnet.quiknode.pro/dcbac9d444818a20ac583541dec35b44c6840888/"}[a]},53933:(e,t,s)=>{"use strict";s.d(t,{Z:()=>c});const n="sentre",i=window.localStorage,a=e=>{try{return e?JSON.parse(e):null}catch(t){return null}},r={set:(e,t)=>{let s=a(i.getItem(n));s&&"object"===typeof s||(s={}),s[e]=t,i.setItem(n,JSON.stringify(s))},get:e=>{let t=a(i.getItem(n));return t&&"object"===typeof t?t[e]:null},clear:e=>{r.set(e,null)}},c=r},45268:(e,t,s)=>{"use strict";s.d(t,{sA:()=>l});s(95418),s(16200),s(63805);const n={ttl:3e4},i={limit:{calls:10,time:1e3},cache:n};class a{constructor(e){this.key="",this.resolveQueue=[],this.rejectQueue=[],this.key=e}add(e,t){this.resolveQueue.push(e),this.rejectQueue.push(t)}resolves(e){for(;this.resolveQueue.length>0;){this.resolveQueue.shift()(e)}}rejects(e){for(;this.rejectQueue.length>0;){this.rejectQueue.shift()(e)}}}class r{static set(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n;this.mapCache.set(e,t),setTimeout((()=>{this.mapCache.delete(e)}),s.ttl)}static get(e){return this.mapCache.get(e)}}r.mapCache=new Map;class c{static getSingleFlight(e){const t=JSON.stringify(e);if(this.mapInstance.has(t)){const e=this.mapInstance.get(t);if(e)return e}let s=new o(e);return this.mapInstance.set(t,s),s}static async load(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};"object"===typeof e&&(e=JSON.stringify(e));let n=c.getSingleFlight(s);c.mapInstance.set(e,n);const i=new a(e);return n.load(i,t)}}c.mapInstance=new Map;class o{constructor(e){this.config=void 0,this.intervalRequest=void 0,this.timeLogs=[],this.mapRequestCalling=new Map,this.requestQueue=[],this.config=Object.assign(i,e)}async load(e,t){const s=r.get(e.key);if(s)return Promise.resolve(s);let n=!1,i=this.mapRequestCalling.get(e.key);return i||(i=e,n=!0,this.mapRequestCalling.set(i.key,i)),new Promise(((e,s)=>{if(!i)return s("Not found request!");i.add(e,s),n&&this.fetch(i,t)}))}fetch(e,t){if(!this.validateLimit())return this.addRequestQueue(e,t);this.createTimeLogs(),t().then((t=>{r.set(e.key,t,this.config.cache),e.resolves(t)})).catch((t=>{e.rejects(t)})).finally((()=>{this.mapRequestCalling.delete(e.key),this.fetchRequestQueue(t)}))}fetchRequestQueue(e){if(!this.validateLimit())return;const t=this.requestQueue.shift();t&&this.load(t,e),0===this.requestQueue.length&&this.intervalRequest&&clearInterval(this.intervalRequest)}addRequestQueue(e,t){var s;this.requestQueue.push(e),this.intervalRequest=setInterval((()=>{this.fetchRequestQueue(t)}),null===(s=this.config.limit)||void 0===s?void 0:s.time)}validateLimit(){return!0}createTimeLogs(){var e;if(!this.config.limit)return;const t=(new Date).getTime();this.timeLogs.push(t),this.timeLogs.length>(null===(e=this.config.limit)||void 0===e?void 0:e.calls)&&this.timeLogs.shift()}}const l=e=>new Promise((t=>setTimeout(t,e)))},89374:(e,t,s)=>{"use strict";e.exports=s.p+"static/media/README.ff93448fef94ea73029b.md"},17100:(e,t,s)=>{"use strict";e.exports=s.p+"static/media/logo.da175f6d5d1564b6bc58.png"},59062:(e,t,s)=>{"use strict";e.exports=s.p+"static/media/panel.6ce7bc345912340df001.png"},43094:()=>{},69159:()=>{},35883:()=>{},46601:()=>{},89214:()=>{},5696:()=>{},85568:()=>{},64009:()=>{},42611:()=>{},88795:()=>{},89408:()=>{},47956:()=>{},21724:()=>{},62678:()=>{},25819:()=>{},52361:()=>{},94616:()=>{},55024:()=>{}}]);
//# sourceMappingURL=src_app_bootstrap_app_tsx.65b5958c.chunk.js.map