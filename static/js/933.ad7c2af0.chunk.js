(globalThis.webpackChunksenhub=globalThis.webpackChunksenhub||[]).push([[933],{75540:(e,t,s)=>{"use strict";s.r(t),s.d(t,{Page:()=>k,Widget:()=>A,widgetConfig:()=>T});var i=s(55754),n=s(98846),r=s(92950),a=s(99019);const c={"logo-telegram":s.p+"static/media/icon-telegram.2450489f40d03000fe65fc1c6f238d85.svg"};var o=s(45263);const l=(0,r.forwardRef)(((e,t)=>{let{name:s,className:i,...n}=e;const r=i?"anticon "+i:"anticon";return(0,o.jsx)("span",{className:r,...n,children:c[s]?(0,o.jsx)("ion-icon",{ref:t,src:c[s]}):(0,o.jsx)("ion-icon",{ref:t,name:s})})}));var h=s(19289);const u="main",d=(0,h.createAsyncThunk)("main/increaseCounter",(async(e,t)=>{let{getState:s}=t;const{main:{counter:i}}=s();return{counter:i+1}})),p=(0,h.createSlice)({name:u,initialState:{counter:0},reducers:{},extraReducers:e=>{e.addCase(d.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)}))}}).reducer;var f=s(15190);const g={appId:"senhub",url:"https://descartesnetwork.github.io/senhub/index.js"},m={devnet:{node:"https://api.devnet.solana.com",spltAddress:"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",splataAddress:"ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"},testnet:{node:"https://api.testnet.solana.com",spltAddress:"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",splataAddress:"ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"},mainnet:{node:"https://api.mainnet-beta.solana.com",spltAddress:"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",splataAddress:"ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"}},v={manifest:{development:{...g},staging:{...g},production:{...g}}[f.OB],sol:m[f.ef]};var w=s(3007);const{manifest:{appId:y}}=v,b=()=>{const{wallet:{address:e}}=(0,n.useWallet)(),t=(0,i.useDispatch)(),{counter:s}=(0,i.useSelector)((e=>e.main)),c=(0,r.useMemo)((()=>(0,w.f)(e,y)),[e]),h=(0,r.useCallback)((()=>t(d())),[t]);return(0,r.useEffect)((()=>{c&&c.setItem("counter",s)}),[c,s]),(0,o.jsxs)(a.Row,{gutter:[24,24],align:"middle",children:[(0,o.jsx)(a.Col,{span:24,children:(0,o.jsxs)(a.Space,{align:"center",children:[(0,o.jsx)(l,{name:"newspaper-outline"}),(0,o.jsx)(a.Typography.Title,{level:4,children:"Page"})]})}),(0,o.jsx)(a.Col,{span:24,children:(0,o.jsxs)(a.Typography.Text,{children:["Address: ",e]})}),(0,o.jsx)(a.Col,{children:(0,o.jsxs)(a.Typography.Text,{children:["Counter: ",s]})}),(0,o.jsx)(a.Col,{children:(0,o.jsx)(a.Button,{onClick:h,children:"Increase"})})]})},j=()=>{const{ui:{width:e,infix:t}}=(0,n.useUI)(),s=(0,i.useDispatch)(),{counter:c}=(0,i.useSelector)((e=>e.main)),h=(0,r.useCallback)((()=>s(d())),[s]);return(0,o.jsxs)(a.Row,{gutter:[24,24],children:[(0,o.jsx)(a.Col,{span:24,children:(0,o.jsxs)(a.Space,{align:"center",children:[(0,o.jsx)(l,{name:"apps-outline"}),(0,o.jsx)(a.Typography.Title,{level:4,children:"Widget"})]})}),(0,o.jsx)(a.Col,{span:24,children:(0,o.jsxs)(a.Typography.Text,{children:["Env: ",f.OB," - ",e,"px - ",t]})}),(0,o.jsx)(a.Col,{children:(0,o.jsxs)(a.Typography.Text,{children:["Counter: ",c]})}),(0,o.jsx)(a.Col,{children:(0,o.jsx)(a.Button,{onClick:h,children:"Increase"})})]})};var x=s(85912);const I=(0,h.configureStore)({middleware:e=>e(x.h),devTools:(0,x.$)("senhub"),reducer:{main:p}}),{manifest:{appId:C}}=v,k=()=>(0,o.jsx)(n.UIProvider,{appId:C,antd:!0,children:(0,o.jsx)(n.WalletProvider,{children:(0,o.jsx)(i.Provider,{store:I,children:(0,o.jsx)(b,{})})})}),T={size:"small",type:"solid"},A=()=>(0,o.jsx)(n.UIProvider,{appId:C,antd:!0,children:(0,o.jsx)(i.Provider,{store:I,children:(0,o.jsx)(j,{})})})},85912:(e,t,s)=>{"use strict";s.d(t,{$:()=>i,h:()=>n});const i=e=>!1;BigInt.prototype.toJSON=function(){return this.toString()};const n={serializableCheck:{isSerializable:e=>"undefined"===typeof e||null===e||"string"===typeof e||"boolean"===typeof e||"number"===typeof e||Array.isArray(e)||(e=>{if(null===e)return!1;const t=Object.getPrototypeOf(e);return null!==t&&null===Object.getPrototypeOf(t)})(e)||"bigint"===typeof e}}},3007:(e,t,s)=>{"use strict";s.d(t,{Z:()=>o,f:()=>l});var i=s(15454),n=s.n(i),r=s(95418),a=s(83868);class c{constructor(e){if(this.dbName=void 0,this.driver=void 0,this.ipfs=void 0,this.createInstance=e=>n().createInstance({driver:this.driver,name:this.dbName,storeName:e}),this.dropInstance=async e=>{const t=this.createInstance(e);return await t.clear(),await n().dropInstance({name:this.dbName,storeName:e})},this.all=async()=>{let e={};const t=(await this.createInstance("sentre").getItem("appIds")||[]).flat().concat(["sentre"]);for(const s of t){e[s]={};const t=this.createInstance(s);await t.iterate(((t,i)=>{e[s][i]=t}))}return e},this.fetch=async e=>await this.ipfs.get(e),this.backup=async()=>{const e=await this.all();return await this.ipfs.set(e)},this.restore=async e=>{const t=await this.fetch(e);for(const s in t){const e=await this.createInstance(s);for(const i in t[s]){const n=t[s][i];await e.setItem(i,n)}}return t},!r.account.isAddress(e))throw new Error("Invalid address");this.dbName=e,this.driver=[n().WEBSQL,n().LOCALSTORAGE],this.ipfs=new a.Z}}const o=c,l=(e,t)=>r.account.isAddress(e)?new c(e).createInstance(t):void 0},83868:(e,t,s)=>{"use strict";s.d(t,{Z:()=>c});var i=s(32642),n=s(45268),r=s(97429).Buffer;class a{constructor(){this._ipfs=async()=>{try{return window.ipfs||(window.ipfs=await(0,i.Ue)()),window.ipfs}catch(e){return await(0,n.sA)(500),await this._ipfs()}},this.get=async e=>{if(!a.isCID(e))throw new Error("Invalid CID");const t=await this._ipfs(),s=await t.cat(e);let i="";for await(const n of s)i+=r.from(n).toString();return JSON.parse(i)},this.set=async e=>{if(!e)throw new Error("Empty data");const t=JSON.stringify(e),s=await this._ipfs(),{path:i}=await s.add(t);return i}}}a.isCID=e=>{try{return!!e&&i.bf.multihash(e)}catch(t){return!1}};const c=a},15190:(e,t,s)=>{"use strict";s.d(t,{OB:()=>o,ef:()=>l});const i="sentre",n=window.localStorage,r=e=>{try{return e?JSON.parse(e):null}catch(t){return null}},a={set:(e,t)=>{let s=r(n.getItem(i));s&&"object"===typeof s||(s={}),s[e]=t,n.setItem(i,JSON.stringify(s))},get:e=>{let t=r(n.getItem(i));return t&&"object"===typeof t?t[e]:null},clear:e=>{a.set(e,null)}},c=a,o="production",l=(()=>{switch(c.get("network")){case"devnet":return"devnet";case"testnet":return"testnet";default:return"mainnet"}})()},45268:(e,t,s)=>{"use strict";s.d(t,{sA:()=>l});s(95418),s(16200),s(15190);const i={ttl:3e4},n={limit:{calls:10,time:1e3},cache:i};class r{constructor(e){this.key="",this.resolveQueue=[],this.rejectQueue=[],this.key=e}add(e,t){this.resolveQueue.push(e),this.rejectQueue.push(t)}resolves(e){for(;this.resolveQueue.length>0;){this.resolveQueue.shift()(e)}}rejects(e){for(;this.rejectQueue.length>0;){this.rejectQueue.shift()(e)}}}class a{static set(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i;this.mapCache.set(e,t),setTimeout((()=>{this.mapCache.delete(e)}),s.ttl)}static get(e){return this.mapCache.get(e)}}a.mapCache=new Map;class c{static getSingleFlight(e){const t=JSON.stringify(e);if(this.mapInstance.has(t)){const e=this.mapInstance.get(t);if(e)return e}let s=new o(e);return this.mapInstance.set(t,s),s}static async load(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};"object"===typeof e&&(e=JSON.stringify(e));let i=c.getSingleFlight(s);c.mapInstance.set(e,i);const n=new r(e);return i.load(n,t)}}c.mapInstance=new Map;class o{constructor(e){this.config=void 0,this.intervalRequest=void 0,this.timeLogs=[],this.mapRequestCalling=new Map,this.requestQueue=[],this.config=Object.assign(n,e)}async load(e,t){const s=a.get(e.key);if(s)return Promise.resolve(s);let i=!1,n=this.mapRequestCalling.get(e.key);return n||(n=e,i=!0,this.mapRequestCalling.set(n.key,n)),new Promise(((e,s)=>{if(!n)return s("Not found request!");n.add(e,s),i&&this.fetch(n,t)}))}fetch(e,t){if(!this.validateLimit())return this.addRequestQueue(e,t);this.createTimeLogs(),t().then((t=>{a.set(e.key,t,this.config.cache),e.resolves(t)})).catch((t=>{e.rejects(t)})).finally((()=>{this.mapRequestCalling.delete(e.key),this.fetchRequestQueue(t)}))}fetchRequestQueue(e){if(!this.validateLimit())return;const t=this.requestQueue.shift();t&&this.load(t,e),0===this.requestQueue.length&&this.intervalRequest&&clearInterval(this.intervalRequest)}addRequestQueue(e,t){var s;this.requestQueue.push(e),this.intervalRequest=setInterval((()=>{this.fetchRequestQueue(t)}),null===(s=this.config.limit)||void 0===s?void 0:s.time)}validateLimit(){return!0}createTimeLogs(){var e;if(!this.config.limit)return;const t=(new Date).getTime();this.timeLogs.push(t),this.timeLogs.length>(null===(e=this.config.limit)||void 0===e?void 0:e.calls)&&this.timeLogs.shift()}}const l=e=>new Promise((t=>setTimeout(t,e)))},35883:()=>{},46601:()=>{},89214:()=>{},5696:()=>{},85568:()=>{},64009:()=>{},42611:()=>{},88795:()=>{},89408:()=>{},57600:()=>{},21724:()=>{},62678:()=>{},25819:()=>{},52361:()=>{},94616:()=>{},55024:()=>{}}]);
//# sourceMappingURL=933.ad7c2af0.chunk.js.map