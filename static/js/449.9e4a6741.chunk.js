(self.webpackChunksenhub=self.webpackChunksenhub||[]).push([[449],{99800:function(n,e,t){"use strict";t.r(e),t.d(e,{AccountProvider:function(){return U},MintProvider:function(){return hn},PoolProvider:function(){return b},UIProvider:function(){return v},WalletProvider:function(){return S},useAccount:function(){return D},useMint:function(){return xn},usePool:function(){return C},useUI:function(){return g},useWallet:function(){return P},withAccount:function(){return L},withMint:function(){return mn},withPool:function(){return y},withUI:function(){return x},withWallet:function(){return M}});var r=t(45987),s=t(15671),o=t(43144),i=t(60136),u=t(27277),a=t(1413),c=t(92950),d=t(55754),f=t(78589),l=t(45263),p=["forwardedRef"],h=(0,c.createContext)({}),v=function(n){var e=n.children,t=n.appId,r=n.style,s=void 0===r?{}:r,o=n.antd,i=void 0!==o&&o,u=(0,d.useSelector)((function(n){return n.ui})),p=(0,c.useMemo)((function(){return{ui:u}}),[u]),v=i?(0,a.Z)({getPopupContainer:function(){return document.getElementById(t)}},"function"===typeof i?i(t):{}):void 0;return(0,l.jsx)(h.Provider,{value:p,children:(0,l.jsx)("section",{id:t,style:(0,a.Z)({height:"100%",backgroundColor:"transparent"},s),children:v?(0,l.jsx)(f.ConfigProvider,(0,a.Z)((0,a.Z)({},v),{},{children:e})):e})})},m=function(n){var e=n.children;return(0,l.jsx)(h.Consumer,{children:function(n){return c.Children.map(e,(function(e){return(0,c.cloneElement)(e,(0,a.Z)({},n))}))}})},x=function(n){var e=function(e){(0,i.Z)(c,e);var t=(0,u.Z)(c);function c(){return(0,s.Z)(this,c),t.apply(this,arguments)}return(0,o.Z)(c,[{key:"render",value:function(){var e=this.props,t=e.forwardedRef,s=(0,r.Z)(e,p);return(0,l.jsx)(m,{children:(0,l.jsx)(n,(0,a.Z)({ref:t},s))})}}]),c}(c.Component);return(0,c.forwardRef)((function(n,t){return(0,l.jsx)(e,(0,a.Z)((0,a.Z)({},n),{},{ref:t}))}))},g=function(){return(0,c.useContext)(h)},w=["forwardedRef"],Z=(0,c.createContext)({}),b=function(n){var e=n.children,t=(0,d.useSelector)((function(n){return n.pools})),r=(0,c.useMemo)((function(){return{pools:t}}),[t]);return(0,l.jsx)(Z.Provider,{value:r,children:e})},k=function(n){var e=n.children;return(0,l.jsx)(Z.Consumer,{children:function(n){return c.Children.map(e,(function(e){return(0,c.cloneElement)(e,(0,a.Z)({},n))}))}})},y=function(n){var e=function(e){(0,i.Z)(c,e);var t=(0,u.Z)(c);function c(){return(0,s.Z)(this,c),t.apply(this,arguments)}return(0,o.Z)(c,[{key:"render",value:function(){var e=this.props,t=e.forwardedRef,s=(0,r.Z)(e,w);return(0,l.jsx)(k,{children:(0,l.jsx)(n,(0,a.Z)({ref:t},s))})}}]),c}(c.Component);return(0,c.forwardRef)((function(n,t){return(0,l.jsx)(e,(0,a.Z)((0,a.Z)({},n),{},{ref:t}))}))},C=function(){return(0,c.useContext)(Z)},j=["forwardedRef"],I=(0,c.createContext)({}),S=function(n){var e=n.children,t=(0,d.useSelector)((function(n){return n.wallet})),r=(0,c.useMemo)((function(){return{wallet:t}}),[t]);return(0,l.jsx)(I.Provider,{value:r,children:e})},A=function(n){var e=n.children;return(0,l.jsx)(I.Consumer,{children:function(n){return c.Children.map(e,(function(e){return(0,c.cloneElement)(e,(0,a.Z)({},n))}))}})},M=function(n){var e=function(e){(0,i.Z)(c,e);var t=(0,u.Z)(c);function c(){return(0,s.Z)(this,c),t.apply(this,arguments)}return(0,o.Z)(c,[{key:"render",value:function(){var e=this.props,t=e.forwardedRef,s=(0,r.Z)(e,j);return(0,l.jsx)(A,{children:(0,l.jsx)(n,(0,a.Z)({ref:t},s))})}}]),c}(c.Component);return(0,c.forwardRef)((function(n,t){return(0,l.jsx)(e,(0,a.Z)((0,a.Z)({},n),{},{ref:t}))}))},P=function(){return(0,c.useContext)(I)},R=["forwardedRef"],E=(0,c.createContext)({}),U=function(n){var e=n.children,t=(0,d.useSelector)((function(n){return n.accounts})),r=(0,c.useMemo)((function(){return{accounts:t}}),[t]);return(0,l.jsx)(E.Provider,{value:r,children:e})},B=function(n){var e=n.children;return(0,l.jsx)(E.Consumer,{children:function(n){return c.Children.map(e,(function(e){return(0,c.cloneElement)(e,(0,a.Z)({},n))}))}})},L=function(n){var e=function(e){(0,i.Z)(c,e);var t=(0,u.Z)(c);function c(){return(0,s.Z)(this,c),t.apply(this,arguments)}return(0,o.Z)(c,[{key:"render",value:function(){var e=this.props,t=e.forwardedRef,s=(0,r.Z)(e,R);return(0,l.jsx)(B,{children:(0,l.jsx)(n,(0,a.Z)({ref:t},s))})}}]),c}(c.Component);return(0,c.forwardRef)((function(n,t){return(0,l.jsx)(e,(0,a.Z)((0,a.Z)({},n),{},{ref:t}))}))},D=function(){return(0,c.useContext)(E)},F=t(15861),T=t(87757),q=t.n(T),G=t(4942),N=t(19289),W=t(95418),J="mints",V=(0,N.createAsyncThunk)("".concat(J,"/getMint"),function(){var n=(0,F.Z)(q().mark((function n(e,t){var r,s,o,i,u,a,c,d;return q().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=e.address,s=e.force,o=void 0!==s&&s,i=t.getState,W.account.isAddress(r)){n.next=4;break}throw new Error("Invalid mint address");case 4:if(o){n.next=8;break}if(u=i(),!(a=u.accounts[r])){n.next=8;break}return n.abrupt("return",(0,G.Z)({},r,a));case 8:return c=window.sentre.splt,n.next=11,c.getMintData(r);case 11:return d=n.sent,n.abrupt("return",(0,G.Z)({},r,d));case 13:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()),Y=(0,N.createAsyncThunk)("".concat(J,"/upsetMint"),function(){var n=(0,F.Z)(q().mark((function n(e){var t,r;return q().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=e.address,r=e.data,W.account.isAddress(t)){n.next=3;break}throw new Error("Invalid address");case 3:if(r){n.next=5;break}throw new Error("Data is empty");case 5:return n.abrupt("return",(0,G.Z)({},t,r));case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()),K=(0,N.createAsyncThunk)("".concat(J,"/deleteMint"),function(){var n=(0,F.Z)(q().mark((function n(e){var t;return q().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=e.address,W.account.isAddress(t)){n.next=3;break}throw new Error("Invalid address");case 3:return n.abrupt("return",{address:t});case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()),X=((0,N.createSlice)({name:J,initialState:{},reducers:{},extraReducers:function(n){n.addCase(V.fulfilled,(function(n,e){var t=e.payload;Object.assign(n,t)})).addCase(Y.fulfilled,(function(n,e){var t=e.payload;Object.assign(n,t)})).addCase(K.fulfilled,(function(n,e){delete n[e.payload.address]}))}}).reducer,t(11796)),H=t(67845),z=t(63805),Q={spltAddress:"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",splataAddress:"ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"},_={devnet:(0,a.Z)((0,a.Z)({},Q),{},{node:"https://api.devnet.solana.com",chainId:103,senAddress:"5YwUkPdXLoujGkZuo9B4LsLKj3hdkDcfP4derpspifSJ",senPoolAddress:"3EUPL7YQLbU6DNU5LZeQeHPXTf1MigJ2yASXA9rH5Ku4",swapAddress:"4erFSLP7oBFSVC1t35jdxmbfxEhYCKfoM6XdG2BLR3UF",taxmanAddress:"8UaZw2jDhJzv5V53569JbCd3bD4BnyCfBH3sjwgajGS9"}),testnet:(0,a.Z)((0,a.Z)({},Q),{},{node:"https://api.testnet.solana.com",chainId:102,senAddress:"",senPoolAddress:"",swapAddress:"",taxmanAddress:""}),mainnet:(0,a.Z)((0,a.Z)({},Q),{},{node:"https://api.mainnet-beta.solana.com",chainId:101,senAddress:"SENBBKVCM7homnf5RX9zqpf1GFe935hnbU4uVzY1Y6M",senPoolAddress:"",swapAddress:"SSW7ooZ1EbEognq5GosbygA3uWW1Hq1NsFq6TsftCFV",taxmanAddress:"9doo2HZQEmh2NgfT3Yx12M89aoBheycYqH1eaR5gKb3e"})};var O=(0,G.Z)({},"senhub",{url:"https://descartesnetwork.github.io/senhub/index.js",appId:"senhub",name:"SenHub",author:{name:"Sentre",email:"hi@sentre.io"},supportedViews:"page,widget".split(",").map((function(n){return n.trim()})).filter((function(n){return["page","widget"].includes(n)})),tags:"solana,dapps".split(",").map((function(n){return n.trim()})),description:"A sample project for Sentre developers",verified:!1}),$={development:{extra:O,senreg:"https://descartesnetwork.github.io/senreg/register.json"},staging:{extra:O,senreg:"https://descartesnetwork.github.io/senreg/register.json"},production:{extra:{},senreg:"https://descartesnetwork.github.io/senreg/register.json"}},nn={sol:_[z.ef],register:$[z.OB]},en=function(n){return{symbol:"SOL",name:"Solana",address:"11111111111111111111111111111111",decimals:9,chainId:n,extensions:{coingeckoId:"solana"},logoURI:"https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png"}},tn=function(n){return{symbol:"SEN",name:"Sen",address:"5YwUkPdXLoujGkZuo9B4LsLKj3hdkDcfP4derpspifSJ",decimals:9,chainId:n,extensions:{coingeckoId:"sen"},logoURI:"https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/SENBBKVCM7homnf5RX9zqpf1GFe935hnbU4uVzY1Y6M/logo.png"}},rn=[en(103),tn(103),{symbol:"wBTC",name:"Wrapped Bitcoin",address:"8jk4eJymMfNZV9mkRNxJEt2VJ3pRvdJvD5FE94GXGBPM",decimals:9,chainId:103,extensions:{coingeckoId:"bitcoin"},logoURI:"https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/qfnqNqs3nCAHjnyCgLRDbBtq4p2MtHZxw8YjSyYhPoL/logo.png"},{symbol:"wETH",name:"Ethereum",address:"27hdcZv7RtuMp75vupThR3T4KLsL61t476eosMdoec4c",decimals:9,chainId:103,extensions:{coingeckoId:"ethereum"},logoURI:"https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FeGn77dhg1KXRRFeSwwMiykZnZPw5JXW6naf2aQgZDQf/logo.png"},{symbol:"UNI",name:"Uniswap",address:"FVZFSXu3yn17YdcxLD72TFDUqkdE5xZvcW18EUpRQEbe",decimals:9,chainId:103,extensions:{coingeckoId:"uniswap"},logoURI:"https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/3MVa4e32PaKmPxYUQ6n8vFkWtCma68Ld7e7fTktWDueQ/logo.png"},{symbol:"USDC",name:"USD Coin",address:"2z6Ci38Cx6PyL3tFrT95vbEeB3izqpoLdxxBkJk2euyj",decimals:9,chainId:103,extensions:{coingeckoId:"usd-coin"},logoURI:"https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png"}],sn=["address"],on=nn.sol.chainId,un=/[\W_]+/g,an={tokenize:"full",context:!0,minlength:3},cn={document:{id:"address",index:[(0,a.Z)({field:"symbol"},an),(0,a.Z)({field:"name"},an)]}},dn=function n(){var e=this;(0,s.Z)(this,n),this.tokenMap=void 0,this.engine=void 0,this.chainId=void 0,this.cluster=void 0,this._init=(0,F.Z)(q().mark((function n(){var t;return q().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.tokenMap.size){n.next=2;break}return n.abrupt("return",e.tokenMap);case 2:return n.next=4,(new H.DK).resolve();case 4:return n.next=6,n.sent.filterByChainId(e.chainId).getList();case 6:return t=n.sent,"devnet"===e.cluster&&(t=t.concat(rn)),(t="testnet"===e.cluster?t.concat([tn(102),en(102)]):t.concat([en(101)])).forEach((function(n){return e.tokenMap.set(n.address,n)})),n.abrupt("return",e.tokenMap);case 11:case"end":return n.stop()}}),n)}))),this._engine=(0,F.Z)(q().mark((function n(){var t;return q().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.engine){n.next=2;break}return n.abrupt("return",e.engine);case 2:return n.next=4,e._init();case 4:return t=n.sent,e.engine=new X.Document(cn),t.forEach((function(n){var t=n.address,s=(0,r.Z)(n,sn);return e.engine.add(t,s)})),n.abrupt("return",e.engine);case 8:case"end":return n.stop()}}),n)}))),this.all=(0,F.Z)(q().mark((function n(){var t;return q().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e._init();case 2:return t=n.sent,n.abrupt("return",Array.from(t.values()));case 4:case"end":return n.stop()}}),n)}))),this.findByAddress=function(){var n=(0,F.Z)(q().mark((function n(t){var r;return q().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e._init();case 2:return r=n.sent,n.abrupt("return",r.get(t));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),this.find=function(){var n=(0,F.Z)(q().mark((function n(t,r){var s,o,i;return q().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e._init();case 2:return s=n.sent,n.next=5,e._engine();case 5:return o=n.sent,i=[],t.split(un).forEach((function(n){return o.search(n,r).forEach((function(n){return n.result.forEach((function(n){if(i.findIndex((function(e){return e.address===n}))<0){var e=s.get(n);e&&i.push(e)}}))}))})),n.abrupt("return",i);case 9:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),this.tokenMap=new Map,this.engine=void 0,this.chainId=on,this.cluster=z.ef,this._init()},fn=["forwardedRef"],ln=new dn,pn=(0,c.createContext)({}),hn=function(n){var e=n.children,t=(0,d.useDispatch)(),r=(0,d.useSelector)((function(n){return n.mints})),s=(0,c.useCallback)((0,F.Z)(q().mark((function n(){var e=arguments;return q().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t(V.apply(void 0,e)).unwrap();case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)}))),[t]),o=(0,c.useMemo)((function(){return{mints:r,getMint:s,tokenProvider:ln}}),[r,s]);return(0,l.jsx)(pn.Provider,{value:o,children:e})},vn=function(n){var e=n.children;return(0,l.jsx)(pn.Consumer,{children:function(n){return c.Children.map(e,(function(e){return(0,c.cloneElement)(e,(0,a.Z)({},n))}))}})},mn=function(n){var e=function(e){(0,i.Z)(c,e);var t=(0,u.Z)(c);function c(){return(0,s.Z)(this,c),t.apply(this,arguments)}return(0,o.Z)(c,[{key:"render",value:function(){var e=this.props,t=e.forwardedRef,s=(0,r.Z)(e,fn);return(0,l.jsx)(vn,{children:(0,l.jsx)(n,(0,a.Z)({ref:t},s))})}}]),c}(c.Component);return(0,c.forwardRef)((function(n,t){return(0,l.jsx)(e,(0,a.Z)((0,a.Z)({},n),{},{ref:t}))}))},xn=function(){return(0,c.useContext)(pn)}},63805:function(n,e,t){"use strict";t.d(e,{OB:function(){return s},ef:function(){return o}});var r=t(53933),s="production",o=function(){switch(r.Z.get("network")){case"devnet":return"devnet";case"testnet":return"testnet";default:return"mainnet"}}()},53933:function(n,e){"use strict";var t="sentre",r=window.localStorage,s=function(n){if(!n)return null;try{return JSON.parse(n)}catch(e){return null}},o={set:function(n,e){var o=s(r.getItem(t));o&&"object"===typeof o||(o={}),o[n]=e,r.setItem(t,JSON.stringify(o))},get:function(n){var e=s(r.getItem(t));return e&&"object"===typeof e?e[n]:null},clear:function(n){o.set(n,null)}};e.Z=o},46601:function(){},89214:function(){},85568:function(){},52361:function(){},94616:function(){},55024:function(){}}]);
//# sourceMappingURL=449.9e4a6741.chunk.js.map