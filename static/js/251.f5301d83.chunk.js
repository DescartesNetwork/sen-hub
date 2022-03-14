"use strict";(globalThis.webpackChunksenhub=globalThis.webpackChunksenhub||[]).push([[251],{11495:(e,t,s)=>{s.d(t,{Z:()=>u});var a=s(15190);const n={spltAddress:"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",splataAddress:"ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"},r={devnet:{...n,node:"https://api.devnet.solana.com",chainId:103,sntrAddress:"5YwUkPdXLoujGkZuo9B4LsLKj3hdkDcfP4derpspifSJ",sntrPoolAddress:"3EUPL7YQLbU6DNU5LZeQeHPXTf1MigJ2yASXA9rH5Ku4",swapAddress:"4erFSLP7oBFSVC1t35jdxmbfxEhYCKfoM6XdG2BLR3UF",taxmanAddress:"8UaZw2jDhJzv5V53569JbCd3bD4BnyCfBH3sjwgajGS9"},testnet:{...n,node:"https://api.testnet.solana.com",chainId:102,sntrAddress:"",sntrPoolAddress:"",swapAddress:"",taxmanAddress:""},mainnet:{...n,node:"https://api.google.mainnet-beta.solana.com",chainId:101,sntrAddress:"SENBBKVCM7homnf5RX9zqpf1GFe935hnbU4uVzY1Y6M",sntrPoolAddress:"Aa3WZX7Xunfebp2MuAcz9CNw8TYTDL7mVrmb11rjyVm6",swapAddress:"SSW7ooZ1EbEognq5GosbygA3uWW1Hq1NsFq6TsftCFV",taxmanAddress:"9doo2HZQEmh2NgfT3Yx12M89aoBheycYqH1eaR5gKb3e"}};const d="senhub",i={[d]:{url:"https://descartesnetwork.github.io/senhub/index.js",appId:d,name:"SenHub",author:{name:"Sentre",email:"hi@sentre.io"},supportedViews:"page,widget".split(",").map((e=>e.trim())).filter((e=>["page","widget"].includes(e))),tags:"solana,dapps".split(",").map((e=>e.trim())),description:"A sample project for Sentre developers",verified:!1}},o={development:{defaultAppId:d,extra:i,senreg:"https://descartesnetwork.github.io/senreg/register.json"},staging:{defaultAppId:d,extra:i,senreg:"https://descartesnetwork.github.io/senreg/register.json"},production:{defaultAppId:d,extra:{},senreg:"https://descartesnetwork.github.io/senreg/register.json"}},l={development:{base:`${window.location.origin}/dashboard?referrer=`},staging:{base:"https://hub.sentre.io/dashboard?referrer="},production:{base:"https://hub.sentre.io/dashboard?referrer="}},c={devnet:{baseURL:"https://stat-dev.sentre.io"},testnet:{baseURL:"https://stat-dev.sentre.io"},mainnet:{baseURL:"https://stat.sentre.io"}},u={sol:r[a.ef],register:o[a.OB],referral:l[a.OB],stat:c[a.ef]}},64251:(e,t,s)=>{s.r(t),s.d(t,{AccountProvider:()=>k,MintProvider:()=>q,PoolProvider:()=>h,UIProvider:()=>o,WalletProvider:()=>m,useAccount:()=>j,useMint:()=>z,usePool:()=>g,useUI:()=>u,useWallet:()=>A,withAccount:()=>x,withMint:()=>N,withPool:()=>f,withUI:()=>c,withWallet:()=>I});var a=s(92950),n=s(99019),r=s(87358),d=s(45263);const i=(0,a.createContext)({}),o=e=>{let{children:t,appId:s,style:o={},antd:l=!1}=e;const{ui:c}=(0,r.Qy)((e=>e)),u=(0,a.useMemo)((()=>({ui:c})),[c]),p=l?{getPopupContainer:()=>document.getElementById(s),..."object"===typeof l?l:{}}:void 0;return(0,d.jsx)(i.Provider,{value:u,children:(0,d.jsx)("section",{id:s,style:{height:"100%",backgroundColor:"transparent",...o},children:p?(0,d.jsx)(n.ConfigProvider,{...p,children:t}):t})})},l=e=>{let{children:t}=e;return(0,d.jsx)(i.Consumer,{children:e=>a.Children.map(t,(t=>(0,a.cloneElement)(t,{...e})))})},c=e=>{class t extends a.Component{render(){const{forwardedRef:t,...s}=this.props;return(0,d.jsx)(l,{children:(0,d.jsx)(e,{ref:t,...s})})}}return(0,a.forwardRef)(((e,s)=>(0,d.jsx)(t,{...e,ref:s})))},u=()=>(0,a.useContext)(i),p=(0,a.createContext)({}),h=e=>{let{children:t}=e;const{pools:s}=(0,r.Qy)((e=>e)),n=(0,a.useMemo)((()=>({pools:s})),[s]);return(0,d.jsx)(p.Provider,{value:n,children:t})},w=e=>{let{children:t}=e;return(0,d.jsx)(p.Consumer,{children:e=>a.Children.map(t,(t=>(0,a.cloneElement)(t,{...e})))})},f=e=>{class t extends a.Component{render(){const{forwardedRef:t,...s}=this.props;return(0,d.jsx)(w,{children:(0,d.jsx)(e,{ref:t,...s})})}}return(0,a.forwardRef)(((e,s)=>(0,d.jsx)(t,{...e,ref:s})))},g=()=>(0,a.useContext)(p),y=(0,a.createContext)({}),m=e=>{let{children:t}=e;const{wallet:s}=(0,r.Qy)((e=>e)),n=(0,a.useMemo)((()=>({wallet:s})),[s]);return(0,d.jsx)(y.Provider,{value:n,children:t})},b=e=>{let{children:t}=e;return(0,d.jsx)(y.Consumer,{children:e=>a.Children.map(t,(t=>(0,a.cloneElement)(t,{...e})))})},I=e=>{class t extends a.Component{render(){const{forwardedRef:t,...s}=this.props;return(0,d.jsx)(b,{children:(0,d.jsx)(e,{ref:t,...s})})}}return(0,a.forwardRef)(((e,s)=>(0,d.jsx)(t,{...e,ref:s})))},A=()=>(0,a.useContext)(y),v=(0,a.createContext)({}),k=e=>{let{children:t}=e;const{accounts:s}=(0,r.Qy)((e=>e)),n=(0,a.useMemo)((()=>({accounts:s})),[s]);return(0,d.jsx)(v.Provider,{value:n,children:t})},C=e=>{let{children:t}=e;return(0,d.jsx)(v.Consumer,{children:e=>a.Children.map(t,(t=>(0,a.cloneElement)(t,{...e})))})},x=e=>{class t extends a.Component{render(){const{forwardedRef:t,...s}=this.props;return(0,d.jsx)(C,{children:(0,d.jsx)(e,{ref:t,...s})})}}return(0,a.forwardRef)(((e,s)=>(0,d.jsx)(t,{...e,ref:s})))},j=()=>(0,a.useContext)(v);var P=s(33015),S=s(11796),T=s(67845),E=s(15190),Z=s(11495),R=s(63845);const{sol:{chainId:M}}=Z.Z,W=/[\W_]+/g,O={tokenize:"full",context:!0,minlength:3},D={document:{id:"address",index:[{field:"symbol",...O},{field:"name",...O}]}};const L=class{constructor(){this.tokenMap=void 0,this.engine=void 0,this.chainId=void 0,this.cluster=void 0,this.loading=void 0,this.queue=void 0,this._init=async()=>this.tokenMap.size?[this.tokenMap,this.engine]:new Promise((async e=>{if(this.loading)return this.queue.push(e);this.loading=!0;let t=await(await(new T.DK).resolve()).filterByChainId(this.chainId).getList();for("devnet"===this.cluster&&(t=t.concat(R.ZP)),t="testnet"===this.cluster?t.concat([(0,R.Ki)(102),(0,R.Tz)(102)]):t.concat([(0,R.Tz)(101)]),t.forEach((e=>this.tokenMap.set(e.address,e))),this.engine=new S.Document(D),this.tokenMap.forEach((e=>{let{address:t,...s}=e;return this.engine.add(t,s)})),e([this.tokenMap,this.engine]);this.queue.length;)this.queue.shift()([this.tokenMap,this.engine]);this.loading=!1})),this.all=async()=>{const[e]=await this._init();return Array.from(e.values())},this.findByAddress=async e=>{const[t]=await this._init();return t.get(e)},this.find=async(e,t)=>{const[s,a]=await this._init();let n=[];return e.split(W).forEach((e=>a.search(e,t).forEach((e=>{let{result:t}=e;return t.forEach((e=>{if(n.findIndex((t=>{let{address:s}=t;return s===e}))<0){const t=s.get(e);t&&n.push(t)}}))})))),n},this.tokenMap=new Map,this.engine=void 0,this.chainId=M,this.cluster=E.ef,this.loading=!1,this.queue=[],this._init()}};var B=s(95418);const U=new L,V=(0,a.createContext)({}),q=e=>{let{children:t}=e;const s=(0,r.u5)(),{mints:n,pools:i}=(0,r.Qy)((e=>e)),o=(0,a.useCallback)((async function(){return await s((0,P.ih)(...arguments)).unwrap()}),[s]),l=(0,a.useCallback)((async e=>{var t;if(!B.account.isAddress(e))throw new Error("Invalid mint address");const s=await U.findByAddress(e);if(null!==s&&void 0!==s&&s.decimals)return s.decimals;if(Object.values(i).findIndex((t=>{let{mint_lpt:s}=t;return s===e}))>=0)return 9;const a=await o({address:e});if(null!==(t=a[e])&&void 0!==t&&t.decimals)return a[e].decimals;throw new Error("Cannot find mint decimals")}),[o,i]),c=(0,a.useMemo)((()=>({mints:n,getMint:o,getDecimals:l,tokenProvider:U})),[n,o,l]);return(0,d.jsx)(V.Provider,{value:c,children:t})},F=e=>{let{children:t}=e;return(0,d.jsx)(V.Consumer,{children:e=>a.Children.map(t,(t=>(0,a.cloneElement)(t,{...e})))})},N=e=>{class t extends a.Component{render(){const{forwardedRef:t,...s}=this.props;return(0,d.jsx)(F,{children:(0,d.jsx)(e,{ref:t,...s})})}}return(0,a.forwardRef)(((e,s)=>(0,d.jsx)(t,{...e,ref:s})))},z=()=>(0,a.useContext)(V)},63845:(e,t,s)=>{s.d(t,{Tz:()=>a,Ki:()=>n,ZP:()=>r});const a=e=>({symbol:"SOL",name:"Solana",address:"11111111111111111111111111111111",decimals:9,chainId:e,extensions:{coingeckoId:"solana"},logoURI:"https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png"}),n=e=>({symbol:"SNTR",name:"Sentre",address:"5YwUkPdXLoujGkZuo9B4LsLKj3hdkDcfP4derpspifSJ",decimals:9,chainId:e,extensions:{coingeckoId:"sentre"},logoURI:"https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/SENBBKVCM7homnf5RX9zqpf1GFe935hnbU4uVzY1Y6M/logo.png"}),r=[a(103),n(103),{symbol:"wBTC",name:"Wrapped Bitcoin",address:"8jk4eJymMfNZV9mkRNxJEt2VJ3pRvdJvD5FE94GXGBPM",decimals:9,chainId:103,extensions:{coingeckoId:"bitcoin"},logoURI:"https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/qfnqNqs3nCAHjnyCgLRDbBtq4p2MtHZxw8YjSyYhPoL/logo.png"},{symbol:"wETH",name:"Ethereum",address:"27hdcZv7RtuMp75vupThR3T4KLsL61t476eosMdoec4c",decimals:9,chainId:103,extensions:{coingeckoId:"ethereum"},logoURI:"https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FeGn77dhg1KXRRFeSwwMiykZnZPw5JXW6naf2aQgZDQf/logo.png"},{symbol:"UNI",name:"Uniswap",address:"FVZFSXu3yn17YdcxLD72TFDUqkdE5xZvcW18EUpRQEbe",decimals:9,chainId:103,extensions:{coingeckoId:"uniswap"},logoURI:"https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/3MVa4e32PaKmPxYUQ6n8vFkWtCma68Ld7e7fTktWDueQ/logo.png"},{symbol:"USDC",name:"USD Coin",address:"2z6Ci38Cx6PyL3tFrT95vbEeB3izqpoLdxxBkJk2euyj",decimals:9,chainId:103,extensions:{coingeckoId:"usd-coin"},logoURI:"https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png"}]},65090:(e,t,s)=>{s.d(t,{ZP:()=>c});var a=s(19289),n=s(95418);const r="accounts",d=(0,a.createAsyncThunk)(`${r}/getAccounts`,(async e=>{let{owner:t}=e;if(!n.account.isAddress(t))throw new Error("Invalid owner/wallet address");const{splt:s}=window.sentre,a=n.account.fromAddress(t),{value:r}=await s.connection.getTokenAccountsByOwner(a,{programId:s.spltProgramId});let d={};return r.forEach((e=>{let{pubkey:t,account:{data:a}}=e;const n=t.toBase58(),r=s.parseAccountData(a);return d[n]=r})),d})),i=(0,a.createAsyncThunk)(`${r}/getAccount`,(async(e,t)=>{let{address:s}=e,{getState:a}=t;if(!n.account.isAddress(s))throw new Error("Invalid account address");const{accounts:{[s]:r}}=a();if(r)return{[s]:r};const{splt:d}=window.sentre;return{[s]:await d.getAccountData(s)}})),o=(0,a.createAsyncThunk)(`${r}/upsetAccount`,(async e=>{let{address:t,data:s}=e;if(!n.account.isAddress(t))throw new Error("Invalid address");if(!s)throw new Error("Data is empty");return{[t]:s}})),l=(0,a.createAsyncThunk)(`${r}/deleteAccount`,(async e=>{let{address:t}=e;if(!n.account.isAddress(t))throw new Error("Invalid address");return{address:t}})),c=(0,a.createSlice)({name:r,initialState:{},reducers:{},extraReducers:e=>{e.addCase(d.fulfilled,((e,t)=>{let{payload:s}=t;return s})).addCase(i.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(o.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(l.fulfilled,((e,t)=>{let{payload:s}=t;delete e[s.address]}))}}).reducer},5105:(e,t,s)=>{s.d(t,{ZP:()=>u});var a=s(19289),n=s(95418),r=s(3007);const d="flags",i=(0,a.createAsyncThunk)("flags/loadVisited",(async(e,t)=>{let{getState:s}=t;const{wallet:{address:a}}=s();if(!n.account.isAddress(a))throw new Error("Wallet is not connected yet");const d=new r.Z(a).createInstance("sentre");return{visited:await d.getItem("visited")||!1}})),o=(0,a.createAsyncThunk)("flags/updateVisited",(async(e,t)=>{let{getState:s}=t;const{wallet:{address:a}}=s();if(!n.account.isAddress(a))throw new Error("Wallet is not connected yet");const d=new r.Z(a).createInstance("sentre");return await d.setItem("visited",e),{visited:e}})),l=(0,a.createAsyncThunk)("flags/loadReferred",(async(e,t)=>{let{getState:s}=t;const{wallet:{address:a}}=s();if(!n.account.isAddress(a))throw new Error("Wallet is not connected yet");const d=new r.Z(a).createInstance("sentre");return{referred:await d.getItem("referred")||!1}})),c=(0,a.createAsyncThunk)("flags/updateReferred",(async(e,t)=>{let{getState:s}=t;const{wallet:{address:a}}=s();if(!n.account.isAddress(a))throw new Error("Wallet is not connected yet");const d=new r.Z(a).createInstance("sentre");return await d.setItem("referred",e),{referred:e}})),u=(0,a.createSlice)({name:d,initialState:{visited:!0,referred:!1},reducers:{},extraReducers:e=>{e.addCase(i.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(o.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(l.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(c.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)}))}}).reducer},87358:(e,t,s)=>{s.d(t,{u5:()=>g,Qy:()=>y});var a=s(55754),n=s(19289),r=s(73938),d=s(85912),i=s(87482),o=s(5105),l=s(58851),c=s(21028),u=s(65090),p=s(33015),h=s(92871),w=s(33361),f=s(51865);(0,a.createStoreHook)(r.RootContext);const g=(0,a.createDispatchHook)(r.RootContext),y=(0,a.createSelectorHook)(r.RootContext);(0,n.configureStore)({middleware:e=>e(d.h),devTools:(0,d.$)("sentre"),reducer:{ui:i.ZP,flags:o.ZP,page:l.ZP,wallet:c.ZP,accounts:u.ZP,mints:p.ZP,pools:h.ZP,search:w.ZP,walkthrough:f.ZP}})},33015:(e,t,s)=>{s.d(t,{ih:()=>d,ZP:()=>l});var a=s(19289),n=s(95418);const r="mints",d=(0,a.createAsyncThunk)("mints/getMint",(async(e,t)=>{let{address:s,force:a=!1}=e,{getState:r}=t;if(!n.account.isAddress(s))throw new Error("Invalid mint address");if(!a){const{accounts:{[s]:e}}=r();if(e)return{[s]:e}}const{splt:d}=window.sentre;return{[s]:await d.getMintData(s)}})),i=(0,a.createAsyncThunk)("mints/upsetMint",(async e=>{let{address:t,data:s}=e;if(!n.account.isAddress(t))throw new Error("Invalid address");if(!s)throw new Error("Data is empty");return{[t]:s}})),o=(0,a.createAsyncThunk)("mints/deleteMint",(async e=>{let{address:t}=e;if(!n.account.isAddress(t))throw new Error("Invalid address");return{address:t}})),l=(0,a.createSlice)({name:r,initialState:{},reducers:{},extraReducers:e=>{e.addCase(d.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(i.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(o.fulfilled,((e,t)=>{let{payload:s}=t;delete e[s.address]}))}}).reducer},58851:(e,t,s)=>{s.d(t,{ZP:()=>A});var a=s(19289),n=s(95418),r=s(3007),d=s(11495);const{register:{senreg:i,extra:o}}=d.Z,l=(e,t)=>t&&Array.isArray(t)?t.filter((t=>e[t])):[],c="page",u={register:{},appIds:[],widgetIds:[]},p=(0,a.createAsyncThunk)("page/loadRegister",(async()=>({register:{...await(async()=>{try{const e=await fetch(i);return await e.json()}catch(e){return{}}})(),...o}}))),h=(0,a.createAsyncThunk)("page/installManifest",(async(e,t)=>{let{getState:s}=t;const{wallet:{address:a},page:{appIds:r,widgetIds:d,register:i}}=s();if(!n.account.isAddress(a))throw new Error("Wallet is not connected yet.");if(r.includes(e.appId))throw new Error("Cannot run sandbox for an installed application.");const o=[...r];o.push(e.appId);const l=[...d];e.supportedViews.includes("widget")&&l.push(e.appId);const c={...i};return c[e.appId]=e,{appIds:o,widgetIds:l,register:c}})),w=(0,a.createAsyncThunk)("page/loadPage",(async(e,t)=>{let{getState:s}=t;const{wallet:{address:a},page:{register:d}}=s();if(!n.account.isAddress(a))throw new Error("Wallet is not connected yet.");const i=new r.Z(a).createInstance("sentre");return{appIds:l(d,await i.getItem("appIds")||u.appIds),widgetIds:l(d,await i.getItem("widgetIds")||u.widgetIds)}})),f=(0,a.createAsyncThunk)("page/updatePage",(async(e,t)=>{let{getState:s}=t;const{wallet:{address:a},page:{register:d}}=s();if(!n.account.isAddress(a))throw new Error("Wallet is not connected yet.");e=l(d,e);const i=new r.Z(a).createInstance("sentre");return await i.setItem("appIds",e),{appIds:e}})),g=(0,a.createAsyncThunk)("page/installApp",(async(e,t)=>{var s,a;let{getState:d}=t;const{wallet:{address:i},page:{register:o,appIds:l,widgetIds:c}}=d();if(!n.account.isAddress(i))throw new Error("Wallet is not connected yet.");if(l.includes(e))return{};const u=[...l];u.push(e);const p=null!==(s=o[e])&&void 0!==s&&null!==(a=s.supportedViews)&&void 0!==a&&a.includes("widget")?[...c,e]:[...c],h=new r.Z(i).createInstance("sentre");return await h.setItem("appIds",u),await h.setItem("widgetIds",p),{appIds:u,widgetIds:p}})),y=(0,a.createAsyncThunk)("page/uninstallApp",(async(e,t)=>{let{getState:s}=t;const{wallet:{address:a},page:{appIds:d,widgetIds:i}}=s();if(!n.account.isAddress(a))throw new Error("Wallet is not connected yet.");if(!d.includes(e))return{};const o=d.filter((t=>t!==e)),l=i.filter((t=>t!==e)),c=new r.Z(a),u=c.createInstance("sentre");return await u.setItem("appIds",o),await u.setItem("widgetIds",l),await c.dropInstance(e),{appIds:o,widgetIds:l}})),m=(0,a.createAsyncThunk)("page/updateDashboard",(async(e,t)=>{let{getState:s}=t;const{wallet:{address:a}}=s();if(!n.account.isAddress(a))throw new Error("Wallet is not connected yet.");const d=new r.Z(a).createInstance("sentre");return await d.setItem("widgetIds",e),{widgetIds:e}})),b=(0,a.createAsyncThunk)("page/addWidgets",(async(e,t)=>{let{getState:s}=t;const{wallet:{address:a},page:{widgetIds:d}}=s();if(!n.account.isAddress(a))throw new Error("Wallet is not connected yet");const i=[...d,...e],o=new r.Z(a).createInstance("sentre");return await o.setItem("widgetIds",i),{widgetIds:i}})),I=(0,a.createAsyncThunk)("page/removeWidget",(async(e,t)=>{let{getState:s}=t;const{wallet:{address:a},page:{widgetIds:d}}=s();if(!n.account.isAddress(a))throw new Error("Wallet is not connected yet.");if(!d.includes(e))return{};const i=d.filter((t=>t!==e)),o=new r.Z(a).createInstance("sentre");return await o.setItem("widgetIds",i),{widgetIds:i}})),A=(0,a.createSlice)({name:c,initialState:u,reducers:{},extraReducers:e=>{e.addCase(p.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(h.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(w.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(f.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(g.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(y.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(m.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(b.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(I.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)}))}}).reducer},92871:(e,t,s)=>{s.d(t,{ZP:()=>u});var a=s(19289),n=s(95418),r=s(11495);const{sol:{taxmanAddress:d}}=r.Z,i="pools",o=(0,a.createAsyncThunk)("pools/getPools",(async()=>{const{swap:e}=window.sentre,t=await e.connection.getProgramAccounts(e.swapProgramId,{filters:[{dataSize:257},{memcmp:{bytes:d,offset:65}}]});let s={};return t.forEach((t=>{let{pubkey:a,account:{data:n}}=t;const r=a.toBase58(),d=e.parsePoolData(n);s[r]=d})),s})),l=(0,a.createAsyncThunk)("pools/getPool",(async(e,t)=>{let{address:s}=e,{getState:a}=t;if(!n.account.isAddress(s))throw new Error("Invalid pool address");const{pools:{[s]:r}}=a();if(r)return{[s]:r};const{swap:d}=window.sentre;return{[s]:await d.getPoolData(s)}})),c=(0,a.createAsyncThunk)("pools/upsetPool",(async e=>{let{address:t,data:s}=e;if(!n.account.isAddress(t))throw new Error("Invalid pool address");if(!s)throw new Error("Data is empty");return{[t]:s}})),u=(0,a.createSlice)({name:i,initialState:{},reducers:{},extraReducers:e=>{e.addCase(o.fulfilled,((e,t)=>{let{payload:s}=t;return s})).addCase(l.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(c.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)}))}}).reducer},33361:(e,t,s)=>{s.d(t,{ZP:()=>o});var a=s(19289);const n="search",r=(0,a.createAsyncThunk)("search/setValue",(async e=>({value:e}))),d=(0,a.createAsyncThunk)("search/setLoading",(async e=>({loading:e}))),i=(0,a.createAsyncThunk)("search/setDisabled",(async e=>({disabled:e}))),o=(0,a.createSlice)({name:n,initialState:{value:"",loading:!1,disabled:!1},reducers:{},extraReducers:e=>{e.addCase(r.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(d.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(i.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)}))}}).reducer},87482:(e,t,s)=>{s.d(t,{ZP:()=>u});var a=s(19289);const n=()=>{const e=window.innerWidth;return e<576?"xs":e<768?"sm":e<992?"md":e<1200?"lg":e<1400?"xl":"xxl"},r="ui",d={theme:window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark",width:window.innerWidth,infix:n(),touchable:"ontouchstart"in window||navigator.maxTouchPoints>0,visibleActionCenter:!1,visibleInstaller:!1},i=(0,a.createAsyncThunk)("ui/setTheme",(async e=>({theme:e}))),o=(0,a.createAsyncThunk)("ui/resize",(async()=>({width:window.innerWidth,infix:n()}))),l=(0,a.createAsyncThunk)("ui/setVisibleActionCenter",(async e=>({visibleActionCenter:e}))),c=(0,a.createAsyncThunk)("ui/setVisibleInstaller",(async e=>({visibleInstaller:e}))),u=(0,a.createSlice)({name:r,initialState:d,reducers:{},extraReducers:e=>{e.addCase(i.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(o.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(l.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(c.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)}))}}).reducer},51865:(e,t,s)=>{s.d(t,{ZP:()=>o});var a=s(19289);let n;!function(e){e[e.Default=0]="Default",e[e.NewComer=1]="NewComer",e[e.Referral=2]="Referral"}(n||(n={}));const r="walkthrough",d={type:n.Default,run:!1,step:0},i=(0,a.createAsyncThunk)(`${r}/setWalkthrough`,(async e=>({...e}))),o=(0,a.createSlice)({name:r,initialState:d,reducers:{},extraReducers:e=>{e.addCase(i.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)}))}}).reducer},21028:(e,t,s)=>{s.d(t,{ZP:()=>w});var a=s(19289),n=s(95418),r=s(11495);const d=async e=>{const{sol:{node:t,spltAddress:s,splataAddress:a,swapAddress:d}}=r.Z;window.sentre={wallet:e,lamports:new n.Lamports(t),splt:new n.SPLT(s,a,t),swap:new n.Swap(d,s,a,t)}},i="wallet",o={visible:!1,address:"",lamports:BigInt(0)},l=(0,a.createAsyncThunk)("wallet/openWallet",(async()=>({visible:!0}))),c=(0,a.createAsyncThunk)("wallet/closeWallet",(async()=>({visible:!1}))),u=(0,a.createAsyncThunk)("wallet/connectWallet",(async e=>{if(!e)throw new Error("Invalid wallet instance");await d(e);const t=await e.getAddress(),s=await window.sentre.lamports.getLamports(t);return{address:t,lamports:BigInt(s),visible:!1}})),p=(0,a.createAsyncThunk)("wallet/updateWallet",(async e=>{let{lamports:t}=e;return{lamports:t}})),h=(0,a.createAsyncThunk)("wallet/disconnectWallet",(async()=>{await(async()=>{var e;null!==(e=window.sentre)&&void 0!==e&&e.wallet&&window.sentre.wallet.disconnect(),await d(void 0)})(),window.location.reload()})),w=(0,a.createSlice)({name:i,initialState:o,reducers:{},extraReducers:e=>{e.addCase(l.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(c.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(u.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(p.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(h.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)}))}}).reducer}}]);
//# sourceMappingURL=251.f5301d83.chunk.js.map