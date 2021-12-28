(globalThis.webpackChunksenhub=globalThis.webpackChunksenhub||[]).push([[562],{55284:(e,t,s)=>{"use strict";s.r(t),s.d(t,{Page:()=>B,Widget:()=>D,widgetConfig:()=>G});var i=s(55754),n=s(49142),r=s(92950),a=s(15454),c=s.n(a),o=s(95418),l=s(32642),h=(s(16200),s(63805));const u={ttl:3e4},d={limit:{calls:10,time:1e3},cache:u};class p{constructor(e){this.key="",this.resolveQueue=[],this.rejectQueue=[],this.key=e}add(e,t){this.resolveQueue.push(e),this.rejectQueue.push(t)}resolves(e){for(;this.resolveQueue.length>0;){this.resolveQueue.shift()(e)}}rejects(e){for(;this.rejectQueue.length>0;){this.rejectQueue.shift()(e)}}}class f{static set(e,t,s=u){this.mapCache.set(e,t),setTimeout((()=>{this.mapCache.delete(e)}),s.ttl)}static get(e){return this.mapCache.get(e)}}f.mapCache=new Map;class g{static getSingleFlight(e){const t=JSON.stringify(e);if(this.mapInstance.has(t)){const e=this.mapInstance.get(t);if(e)return e}let s=new m(e);return this.mapInstance.set(t,s),s}static async load(e,t,s={}){"object"===typeof e&&(e=JSON.stringify(e));let i=g.getSingleFlight(s);g.mapInstance.set(e,i);const n=new p(e);return i.load(n,t)}}g.mapInstance=new Map;class m{constructor(e){this.config=void 0,this.intervalRequest=void 0,this.timeLogs=[],this.mapRequestCalling=new Map,this.requestQueue=[],this.config=Object.assign(d,e)}async load(e,t){const s=f.get(e.key);if(s)return Promise.resolve(s);let i=!1,n=this.mapRequestCalling.get(e.key);return n||(n=e,i=!0,this.mapRequestCalling.set(n.key,n)),new Promise(((e,s)=>{if(!n)return s("Not found request!");n.add(e,s),i&&this.fetch(n,t)}))}fetch(e,t){if(!this.validateLimit())return this.addRequestQueue(e,t);this.createTimeLogs(),t().then((t=>{f.set(e.key,t,this.config.cache),e.resolves(t)})).catch((t=>{e.rejects(t)})).finally((()=>{this.mapRequestCalling.delete(e.key),this.fetchRequestQueue(t)}))}fetchRequestQueue(e){if(!this.validateLimit())return;const t=this.requestQueue.shift();t&&this.load(t,e),0===this.requestQueue.length&&this.intervalRequest&&clearInterval(this.intervalRequest)}addRequestQueue(e,t){var s;this.requestQueue.push(e),this.intervalRequest=setInterval((()=>{this.fetchRequestQueue(t)}),null===(s=this.config.limit)||void 0===s?void 0:s.time)}validateLimit(){return!0}createTimeLogs(){var e;if(!this.config.limit)return;const t=(new Date).getTime();this.timeLogs.push(t),this.timeLogs.length>(null===(e=this.config.limit)||void 0===e?void 0:e.calls)&&this.timeLogs.shift()}}var v=s(97429).Buffer;class w{constructor(){this._ipfs=async()=>{try{return window.ipfs||(window.ipfs=await(0,l.Ue)()),window.ipfs}catch(t){return await(e=500,new Promise((t=>setTimeout(t,e)))),await this._ipfs()}var e},this.get=async e=>{if(!w.isCID(e))throw new Error("Invalid CID");const t=await this._ipfs(),s=await t.cat(e);let i="";for await(const n of s)i+=v.from(n).toString();return JSON.parse(i)},this.set=async e=>{if(!e)throw new Error("Empty data");const t=JSON.stringify(e),s=await this._ipfs(),{path:i}=await s.add(t);return i}}}w.isCID=e=>{try{return!!e&&l.bf.multihash(e)}catch(t){return!1}};const y=w;class b{constructor(e){if(this.dbName=void 0,this.driver=void 0,this.ipfs=void 0,this.createInstance=e=>c().createInstance({driver:this.driver,name:this.dbName,storeName:e}),this.dropInstance=async e=>{const t=this.createInstance(e);return await t.clear(),await c().dropInstance({name:this.dbName,storeName:e})},this.all=async()=>{let e={};const t=(await this.createInstance("sentre").getItem("appIds")||[]).flat().concat(["sentre"]);for(const s of t){e[s]={};const t=this.createInstance(s);await t.iterate(((t,i)=>{e[s][i]=t}))}return e},this.fetch=async e=>await this.ipfs.get(e),this.backup=async()=>{const e=await this.all();return await this.ipfs.set(e)},this.restore=async e=>{const t=await this.fetch(e);for(const s in t){const e=await this.createInstance(s);for(const i in t[s]){const n=t[s][i];await e.setItem(i,n)}}return t},!o.account.isAddress(e))throw new Error("Invalid address");this.dbName=e,this.driver=[c().WEBSQL,c().LOCALSTORAGE],this.ipfs=new y}}var j=s(78589);const x={"logo-telegram":s.p+"static/media/icon-telegram.2450489f40d03000fe65fc1c6f238d85.svg"};var I=s(45263);const C=(0,r.forwardRef)((({name:e,className:t,...s},i)=>{const n=t?"anticon "+t:"anticon";return(0,I.jsx)("span",{className:n,...s,children:x[e]?(0,I.jsx)("ion-icon",{ref:i,src:x[e]}):(0,I.jsx)("ion-icon",{ref:i,name:e})})}));var k=s(19289);const T="main",A=(0,k.createAsyncThunk)("main/increaseCounter",(async(e,{getState:t})=>{const{main:{counter:s}}=t();return{counter:s+1}})),S=(0,k.createSlice)({name:T,initialState:{counter:0},reducers:{},extraReducers:e=>{e.addCase(A.fulfilled,((e,{payload:t})=>{Object.assign(e,t)}))}}).reducer;const N={appId:"senhub",url:"https://descartesnetwork.github.io/senhub/index.js",senhub:"senhub@https://descartesnetwork.github.io/senhub/index.js"},Q={devnet:{node:"https://api.devnet.solana.com",spltAddress:"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",splataAddress:"ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"},testnet:{node:"https://api.testnet.solana.com",spltAddress:"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",splataAddress:"ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"},mainnet:{node:"https://api.mainnet-beta.solana.com",spltAddress:"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",splataAddress:"ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"}},q={manifest:{development:{...N},staging:{...N},production:{...N}}[h.OB],sol:Q[h.ef]},{manifest:{appId:L}}=q,O=()=>{const{wallet:{address:e}}=(0,n.useWallet)(),t=(0,i.useDispatch)(),{counter:s}=(0,i.useSelector)((e=>e.main)),a=(0,r.useMemo)((()=>((e,t)=>o.account.isAddress(e)?new b(e).createInstance(t):void 0)(e,L)),[e]),c=(0,r.useCallback)((()=>t(A())),[t]);return(0,r.useEffect)((()=>{a&&a.setItem("counter",s)}),[a,s]),(0,I.jsxs)(j.Row,{gutter:[24,24],align:"middle",children:[(0,I.jsx)(j.Col,{span:24,children:(0,I.jsxs)(j.Space,{align:"center",children:[(0,I.jsx)(C,{name:"newspaper-outline"}),(0,I.jsx)(j.Typography.Title,{level:4,children:"Page"})]})}),(0,I.jsx)(j.Col,{span:24,children:(0,I.jsxs)(j.Typography.Text,{children:["Address: ",e]})}),(0,I.jsx)(j.Col,{children:(0,I.jsxs)(j.Typography.Text,{children:["Counter: ",s]})}),(0,I.jsx)(j.Col,{children:(0,I.jsx)(j.Button,{onClick:c,children:"Increase"})})]})},P=()=>{const{ui:{width:e,infix:t}}=(0,n.useUI)(),s=(0,i.useDispatch)(),{counter:a}=(0,i.useSelector)((e=>e.main)),c=(0,r.useCallback)((()=>s(A())),[s]);return(0,I.jsxs)(j.Row,{gutter:[24,24],children:[(0,I.jsx)(j.Col,{span:24,children:(0,I.jsxs)(j.Space,{align:"center",children:[(0,I.jsx)(C,{name:"apps-outline"}),(0,I.jsx)(j.Typography.Title,{level:4,children:"Widget"})]})}),(0,I.jsx)(j.Col,{span:24,children:(0,I.jsxs)(j.Typography.Text,{children:["Env: ",h.OB," - ",e,"px - ",t]})}),(0,I.jsx)(j.Col,{children:(0,I.jsxs)(j.Typography.Text,{children:["Counter: ",a]})}),(0,I.jsx)(j.Col,{children:(0,I.jsx)(j.Button,{onClick:c,children:"Increase"})})]})};BigInt.prototype.toJSON=function(){return this.toString()};const R={serializableCheck:{isSerializable:e=>"undefined"===typeof e||null===e||"string"===typeof e||"boolean"===typeof e||"number"===typeof e||Array.isArray(e)||(e=>{if(null===e)return!1;const t=Object.getPrototypeOf(e);return null!==t&&null===Object.getPrototypeOf(t)})(e)||"bigint"===typeof e}},W=(0,k.configureStore)({middleware:e=>e(R),devTools:!1,reducer:{main:S}}),{manifest:{appId:J}}=q,B=()=>(0,I.jsx)(n.UIProvider,{appId:J,antd:!0,children:(0,I.jsx)(n.WalletProvider,{children:(0,I.jsx)(i.Provider,{store:W,children:(0,I.jsx)(O,{})})})}),G={size:"small",type:"solid"},D=()=>(0,I.jsx)(n.UIProvider,{appId:J,antd:!0,children:(0,I.jsx)(i.Provider,{store:W,children:(0,I.jsx)(P,{})})})},63805:(e,t,s)=>{"use strict";s.d(t,{OB:()=>n,ef:()=>r});var i=s(53933);const n="production",r=(()=>{switch(i.Z.get("network")){case"devnet":return"devnet";case"testnet":return"testnet";default:return"mainnet"}})()},53933:(e,t,s)=>{"use strict";s.d(t,{Z:()=>c});const i="sentre",n=window.localStorage,r=e=>{if(!e)return null;try{return JSON.parse(e)}catch(t){return null}},a={set:(e,t)=>{let s=r(n.getItem(i));s&&"object"===typeof s||(s={}),s[e]=t,n.setItem(i,JSON.stringify(s))},get:e=>{let t=r(n.getItem(i));return t&&"object"===typeof t?t[e]:null},clear:e=>{a.set(e,null)}},c=a},35883:()=>{},46601:()=>{},89214:()=>{},5696:()=>{},85568:()=>{},64009:()=>{},42611:()=>{},88795:()=>{},89408:()=>{},57600:()=>{},21724:()=>{},62678:()=>{},25819:()=>{},52361:()=>{},94616:()=>{},55024:()=>{}}]);
//# sourceMappingURL=562.f7e40bbe.chunk.js.map