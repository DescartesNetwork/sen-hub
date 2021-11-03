/*! For license information please see 844.65014ca9.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunksenhub=self.webpackChunksenhub||[]).push([[844],{15659:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(19289);BigInt.prototype.toJSON=function(){return this.toString()};var o={serializableCheck:{isSerializable:function(e){return"undefined"===typeof e||null===e||"string"===typeof e||"boolean"===typeof e||"number"===typeof e||Array.isArray(e)||function(e){if(null===e)return!1;var n=Object.getPrototypeOf(e);return null!==n&&null===Object.getPrototypeOf(n)}(e)||"bigint"===typeof e}}},s=t(84863),a=(0,r.configureStore)({middleware:function(e){return e(o)},devTools:!1,reducer:{main:s.Z}})},84863:function(e,n,t){t.d(n,{r:function(){return u}});var r=t(15861),o=t(87757),s=t.n(o),a=t(19289),i="main",u=(0,a.createAsyncThunk)("".concat(i,"/increaseCounter"),function(){var e=(0,r.Z)(s().mark((function e(n,t){var r,o,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.getState,o=r(),a=o.main.counter,e.abrupt("return",{counter:a+1});case 3:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()),c=(0,a.createSlice)({name:i,initialState:{counter:0},reducers:{},extraReducers:function(e){e.addCase(u.fulfilled,(function(e,n){var t=n.payload;Object.assign(e,t)}))}});n.Z=c.reducer},69844:function(e,n,t){t.r(n),t.d(n,{default:function(){return y}});var r=t(55754),o=t(49142),s=t(92950),a=t(78589),i=t(54738),u=t(84863),c=t(45263),l=function(){var e=(0,o.useWallet)().wallet.address,n=(0,o.usePDB)(),t=(0,r.useDispatch)(),l=(0,r.useSelector)((function(e){return e.main})).counter,f=(0,s.useCallback)((function(){return t((0,u.r)())}),[t]);return(0,s.useEffect)((function(){n.isInitialized&&n.setItem("counter",l)}),[n,l]),(0,c.jsxs)(a.Row,{gutter:[24,24],align:"middle",children:[(0,c.jsx)(a.Col,{span:24,children:(0,c.jsxs)(a.Space,{align:"center",children:[(0,c.jsx)(i.Z,{name:"newspaper-outline"}),(0,c.jsx)(a.Typography.Title,{level:4,children:"Page"})]})}),(0,c.jsx)(a.Col,{span:24,children:(0,c.jsxs)(a.Typography.Text,{children:["Address: ",e]})}),(0,c.jsx)(a.Col,{children:(0,c.jsxs)(a.Typography.Text,{children:["Counter: ",l]})}),(0,c.jsx)(a.Col,{children:(0,c.jsx)(a.Button,{onClick:f,children:"Increase"})})]})},f=t(15659),d=t(63805),p=t(1413);var b={appId:"senhub",url:"https://descartesnetwork.github.io/senhub",senhub:"senhub@https://descartesnetwork.github.io/senhub/index.js"},h={devnet:{node:"https://api.devnet.solana.com",spltAddress:"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",splataAddress:"ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"},testnet:{node:"https://api.testnet.solana.com",spltAddress:"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",splataAddress:"ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"},mainnet:{node:"https://api.mainnet-beta.solana.com",spltAddress:"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",splataAddress:"ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"}},v={manifest:{development:(0,p.Z)({},b),staging:(0,p.Z)({},b),production:(0,p.Z)({},b)}[d.OB],sol:h[d.ef]}.manifest.appId,y=function(){return(0,c.jsx)(o.PDBProvider,{appId:v,children:(0,c.jsx)(o.WalletProvider,{children:(0,c.jsx)(r.Provider,{store:f.Z,children:(0,c.jsx)(l,{})})})})}},54738:function(e,n,t){var r=t(1413),o=t(45987),s=t(92950),a=t(45263),i=["name","className"],u=(0,s.forwardRef)((function(e,n){var t=e.name,s=e.className,u=(0,o.Z)(e,i),c=s?"anticon "+s:"anticon";return(0,a.jsx)("span",(0,r.Z)((0,r.Z)({className:c},u),{},{children:(0,a.jsx)("ion-icon",{ref:n,name:t})}))}));n.Z=u},63805:function(e,n,t){t.d(n,{OB:function(){return o},ef:function(){return s}});var r=t(53933),o="production",s=function(){switch(r.Z.get("network")){case"devnet":return"devnet";case"testnet":return"testnet";default:return"mainnet"}}()},53933:function(e,n){var t="sentre",r=window.localStorage,o=function(e){if(!e)return null;try{return JSON.parse(e)}catch(n){return null}},s={set:function(e,n){var s=o(r.getItem(t));s&&"object"===typeof s||(s={}),s[e]=n,r.setItem(t,JSON.stringify(s))},get:function(e){var n=o(r.getItem(t));return n&&"object"===typeof n?n[e]:null},clear:function(e){s.set(e,null)}};n.Z=s},25882:function(e){var n=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,s){for(var a,i,u=o(e),c=1;c<arguments.length;c++){for(var l in a=Object(arguments[c]))t.call(a,l)&&(u[l]=a[l]);if(n){i=n(a);for(var f=0;f<i.length;f++)r.call(a,i[f])&&(u[i[f]]=a[i[f]])}}return u}},62175:function(e,n,t){t(25882);var r=t(92950),o=60103;if(60107,"function"===typeof Symbol&&Symbol.for){var s=Symbol.for;o=s("react.element"),s("react.fragment")}var a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,u={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,s={},c=null,l=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(l=n.ref),n)i.call(n,r)&&!u.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:o,type:e,key:c,ref:l,props:s,_owner:a.current}}n.jsx=c,n.jsxs=c},45263:function(e,n,t){e.exports=t(62175)}}]);
//# sourceMappingURL=844.65014ca9.chunk.js.map