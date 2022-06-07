"use strict";(globalThis.webpackChunksenhub=globalThis.webpackChunksenhub||[]).push([["src_os_store_devTools_ts-src_os_store_mints_reducer_ts-src_os_view_wallet_lib_cloverWallet_ts-e7cc55"],{55852:(e,t,s)=>{s.d(t,{Z:()=>d});var r=s(63805);const n={spltAddress:"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",splataAddress:"ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"},a={devnet:{...n,node:r.f4,swapAddress:"4erFSLP7oBFSVC1t35jdxmbfxEhYCKfoM6XdG2BLR3UF",taxmanAddress:"8UaZw2jDhJzv5V53569JbCd3bD4BnyCfBH3sjwgajGS9"},testnet:{...n,node:r.f4,swapAddress:"4erFSLP7oBFSVC1t35jdxmbfxEhYCKfoM6XdG2BLR3UF",taxmanAddress:"8UaZw2jDhJzv5V53569JbCd3bD4BnyCfBH3sjwgajGS9"},mainnet:{...n,node:r.f4,swapAddress:"SSW7ooZ1EbEognq5GosbygA3uWW1Hq1NsFq6TsftCFV",taxmanAddress:"9doo2HZQEmh2NgfT3Yx12M89aoBheycYqH1eaR5gKb3e"}};const i="senhub",o={[i]:{url:"https://descartesnetwork.github.io/senhub/index.js",appId:i,name:"SenHub",author:{name:"Sentre",email:"hi@sentre.io"},tags:"solana,dapps".split(",").map((e=>e.trim())),description:"A sample project for Sentre developers",verified:!1}},c={development:{devAppId:i,extra:o,senreg:"https://descartesnetwork.github.io/senreg/register.json"},staging:{devAppId:i,extra:o,senreg:"https://descartesnetwork.github.io/senreg/register.json"},production:{devAppId:i,extra:{},senreg:"https://descartesnetwork.github.io/senreg/register.json"}},d={sol:a[r.ef],register:c[r.OB]}},22027:(e,t,s)=>{s.d(t,{$:()=>o,h:()=>c});var r=s(71256),n=s(48744),a=s.n(n),i=s(97429).Buffer;const o=e=>!1;BigInt.prototype.toJSON=function(){return this.toString()};const c={serializableCheck:{isSerializable:e=>"undefined"===typeof e||null===e||"string"===typeof e||"boolean"===typeof e||"number"===typeof e||Array.isArray(e)||(e=>{if(null===e)return!1;const t=Object.getPrototypeOf(e);return null!==t&&null===Object.getPrototypeOf(t)})(e)||"bigint"===typeof e||e instanceof r.PublicKey||e instanceof a()||e instanceof i}}},33015:(e,t,s)=>{s.d(t,{ZP:()=>d,ih:()=>i});var r=s(19289),n=s(95418);const a="mints",i=(0,r.createAsyncThunk)("mints/getMint",(async(e,t)=>{let{address:s,force:r=!1}=e,{getState:a}=t;if(!n.account.isAddress(s))throw new Error("Invalid mint address");if(!r){const{accounts:{[s]:e}}=a();if(e)return{[s]:e}}const{splt:i}=window.sentre;return{[s]:await i.getMintData(s)}})),o=(0,r.createAsyncThunk)("mints/upsetMint",(async e=>{let{address:t,data:s}=e;if(!n.account.isAddress(t))throw new Error("Invalid address");if(!s)throw new Error("Data is empty");return{[t]:s}})),c=(0,r.createAsyncThunk)("mints/deleteMint",(async e=>{let{address:t}=e;if(!n.account.isAddress(t))throw new Error("Invalid address");return{address:t}})),d=(0,r.createSlice)({name:a,initialState:{},reducers:{},extraReducers:e=>{e.addCase(i.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(o.fulfilled,((e,t)=>{let{payload:s}=t;Object.assign(e,s)})).addCase(c.fulfilled,((e,t)=>{let{payload:s}=t;delete e[s.address]}))}}).reducer},55721:(e,t,s)=>{s.d(t,{Z:()=>n});var r=s(53933);const n=class{constructor(e){this.walletType=void 0,this.getProvider=async()=>{throw new Error("Wallet is not connected")},this.getAddress=async()=>{throw new Error("Wallet is not connected")},this.signTransaction=async e=>{throw new Error("Wallet is not connected")},this.signAllTransactions=async e=>{throw new Error("Wallet is not connected")},this.signMessage=async e=>{throw new Error("Wallet is not connected")},this.verifySignature=async(e,t,s)=>{throw new Error("Wallet is not connected")},this.disconnect=async()=>{r.Z.clear("WalletType");(await this.getProvider()).disconnect()},this.walletType=e,r.Z.set("WalletType",this.walletType)}}},80781:(e,t,s)=>{s.d(t,{Z:()=>c});var r=s(44967),n=s(95418),a=s(55721),i=s(97429).Buffer;class o extends a.Z{constructor(){super("Clover"),this.getProvider=async()=>{const{clover_solana:e}=window;if(null===e||void 0===e||!e.isCloverWallet)throw new Error("Wallet is not connected");return e},this.getAddress=async()=>{const e=await this.getProvider(),t=await e.getAccount();if(!n.account.isAddress(t))throw new Error("There is no Solana account");return t},this.signTransaction=async e=>{const t=await this.getProvider(),s=await this.getAddress(),r=n.account.fromAddress(s);return e.feePayer||(e.feePayer=r),await t.signTransaction(e)},this.signAllTransactions=async e=>{const t=await this.getProvider(),s=await this.getAddress(),r=n.account.fromAddress(s);return e.forEach((e=>{e.feePayer||(e.feePayer=r)})),await t.signAllTransactions(e)},this.signMessage=async e=>{if(!e)throw new Error("Message must be a non-empty string");const t=await this.getProvider(),s=await this.getAddress(),r=(new TextEncoder).encode(e),{signature:n}=await t.signMessage(r,"utf8");return{address:s,signature:i.from(n).toString("hex"),message:e}},this.verifySignature=async(e,t,s)=>{s=s||await this.getAddress();const a=n.account.fromAddress(s),o=i.from(e,"hex"),c=(new TextEncoder).encode(t);return r.sign.detached.verify(c,o,a.toBuffer())}}}const c=o},6051:(e,t,s)=>{s.d(t,{Z:()=>o});var r=s(95418),n=s(68532),a=s(55721);class i extends a.Z{constructor(){super("Coin98"),this.getProvider=async()=>{var e;const{sol:t}=(null===(e=window)||void 0===e?void 0:e.coin98)||{};if(!t)throw new Error("Wallet is not connected");return t},this.getAddress=async()=>{const e=await this.getProvider(),[t]=await e.request({method:"sol_accounts"})||[];if(!r.account.isAddress(t))throw new Error("There is no Solana account");return t},this.signTransaction=async e=>{const t=await this.getProvider(),s=await this.getAddress(),a=r.account.fromAddress(s);e.feePayer||(e.feePayer=a);const{signature:i}=await t.request({method:"sol_sign",params:[e]}),o=(0,n.decode)(i);return e.addSignature(a,o),e},this.signAllTransactions=async e=>{const t=await this.getProvider(),s=await this.getAddress(),a=r.account.fromAddress(s);e.forEach((e=>{e.feePayer||(e.feePayer=a)}));const{signatures:i}=await t.request({method:"sol_signAllTransactions",params:[e]});return i.forEach(((t,s)=>{const r=(0,n.decode)(t);e[s].addSignature(a,r)})),e},this.signMessage=async e=>{if(!e)throw new Error("Message must be a non-empty string");const t=await this.getProvider();return await t.request({method:"sol_sign",params:[e]})},this.verifySignature=async(e,t,s)=>{s=s||await this.getAddress();return await r.account.verifySignature(s,e,t)}}}const o=i},58181:(e,t,s)=>{s.d(t,{Z:()=>a});var r=s(55721);class n extends r.Z{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:()=>{};super("Guest"),this._callback=()=>{},this._error=()=>{throw new Error("You are in the Guest Mode. Please connect your personal wallet to proceed the action.")},this.getProvider=async()=>({address:"GuestAccount11111111111111111111111111111111",disconnect:()=>{}}),this.getAddress=async()=>{const{address:e}=await this.getProvider();return e},this.signTransaction=async e=>(await this._callback(),this._error()),this.signAllTransaction=async e=>(await this._callback(),this._error()),this.signMessage=async e=>(await this._callback(),this._error()),this.verifySignature=async(e,t,s)=>(await this._callback(),this._error()),this._callback=e}}const a=n},37344:(e,t,s)=>{s.d(t,{Z:()=>c});var r=s(44967),n=s(95418),a=s(55721),i=s(97429).Buffer;class o extends a.Z{constructor(){super("Phantom"),this.getProvider=async()=>{const{solana:e}=window;if(null===e||void 0===e||!e.isPhantom)throw new Error("Wallet is not connected");return e.isConnected?e:await new Promise((t=>(e.on("connect",(()=>t(e))),e.connect())))},this.getAddress=async()=>{const e=(await this.getProvider()).publicKey.toString();if(!n.account.isAddress(e))throw new Error("There is no Solana account");return e},this.signTransaction=async e=>{const t=await this.getProvider(),s=await this.getAddress(),r=n.account.fromAddress(s);return e.feePayer||(e.feePayer=r),await t.signTransaction(e)},this.signAllTransactions=async e=>{const t=await this.getProvider(),s=await this.getAddress(),r=n.account.fromAddress(s);return e.forEach((e=>{e.feePayer||(e.feePayer=r)})),await t.signAllTransactions(e)},this.signMessage=async e=>{if(!e)throw new Error("Message must be a non-empty string");const t=await this.getProvider(),s=await this.getAddress(),r=(new TextEncoder).encode(e),{signature:n}=await t.signMessage(r,"utf8");return{address:s,signature:i.from(n).toString("hex"),message:e}},this.verifySignature=async(e,t,s)=>{s=s||await this.getAddress();const a=n.account.fromAddress(s),o=i.from(e,"hex"),c=(new TextEncoder).encode(t);return r.sign.detached.verify(c,o,a.toBuffer())}}}const c=o},99715:(e,t,s)=>{s.d(t,{Z:()=>w});var r=s(44967),n=s(95418),a=s(55721);const i="sentre",o=window.sessionStorage,c=e=>{try{return e?JSON.parse(e):null}catch(t){return!1}},d={set:(e,t)=>{let s=c(o.getItem(i));s&&"object"===typeof s||(s={}),s[e]=t,o.setItem(i,JSON.stringify(s))},get:e=>{let t=c(o.getItem(i));return t&&"object"===typeof t?t[e]:null},clear:e=>{d.set(e,null)}},h=d;var g=s(53933),l=s(97429).Buffer;class u extends a.Z{constructor(e,t){super("SecretKey"),this.getProvider=async()=>{const e=u.getSecretKey(),t=n.account.fromSecretKey(e);if(!t)throw new Error("Cannot get the keystore-based provider");return{keypair:t,disconnect:()=>h.clear("SecretKey")}},this.getAddress=async()=>{const{keypair:e}=await this.getProvider();return e.publicKey.toBase58()},this.signTransaction=async e=>{if(!window.confirm("Please confirm to sign the transaction!"))throw new Error("User rejects to sign the transaction");const{keypair:t}=await this.getProvider(),s=e.serializeMessage(),n=t.publicKey;e.feePayer||(e.feePayer=n);const a=r.sign.detached(s,t.secretKey);return e.addSignature(n,l.from(a)),e},this.signAllTransactions=async e=>{if(!window.confirm("Please confirm to sign the transactions!"))throw new Error("User rejects to sign the transactions");const{keypair:t}=await this.getProvider(),s=[];for(const n of e){const e=n.serializeMessage(),a=t.publicKey;n.feePayer||(n.feePayer=a);const i=r.sign.detached(e,t.secretKey);n.addSignature(a,l.from(i)),s.push(n)}return s},this.signMessage=async e=>{if(!e)throw new Error("Message must be a non-empty string");if(!window.confirm(`Please confirm to sign the message! Message: ${e}`))throw new Error("User rejects to sign the message");const{keypair:t}=await this.getProvider(),s=l.from(t.secretKey).toString("hex");return{...n.account.signMessage(e,s)}},this.verifySignature=async(e,t,s)=>{s=s||await this.getAddress();return n.account.verifySignature(s,e,t)},u.setSecretKey(e,t)}}u.xor=(e,t)=>{if(e.length!==t.length)throw new Error("Cannot XOR two different-length buffers");const s=l.alloc(e.length);for(let r=0;r<s.length;r++)s[r]=e[r]^t[r];return s},u.getPassword=()=>{let e=h.get("Password");if(e||(e=window.prompt("Input the password:")),!e)throw new Error("User rejects to sign the transaction");return h.set("Password",e),e},u.setSecretKey=(e,t)=>{const{secretKey:s}=n.account.fromSecretKey(e)||{};if(!s)throw new Error("Invalid secret key");t=t||u.getPassword();const a=(0,r.hash)(l.from(t)),i=u.xor(a,s);g.Z.set("SecretKey",i.toString("hex"))},u.getSecretKey=e=>{e=e||u.getPassword();const t=(0,r.hash)(l.from(e)),s=g.Z.get("SecretKey");if(!s)throw new Error("Invalid secret key");return u.xor(t,l.from(s,"hex")).toString("hex")};const w=u},13974:(e,t,s)=>{s.d(t,{Z:()=>d});var r=s(44967),n=s(95418),a=s(68532),i=s(55721),o=s(97429).Buffer;class c extends i.Z{constructor(){super("Slope"),this.provider=void 0,this.getProvider=async()=>{const{Slope:e}=window||{};if(!e)throw new Error("Cannot connect to Slope");return this.provider||(this.provider=new e,await this.provider.connect()),this.provider},this.getAddress=async()=>{const e=await this.getProvider(),{data:t}=await e.connect();if(!t.publicKey)throw new Error("Wallet is not connected");return t.publicKey},this.signTransaction=async e=>{const t=await this.getProvider(),s=await this.getAddress(),r=n.account.fromAddress(s);e.feePayer||(e.feePayer=r);const i=(0,a.encode)(e.serializeMessage()),{msg:o,data:c}=await t.signTransaction(i);if(!c.publicKey||!c.signature)throw new Error(o);const d=(0,a.decode)(c.signature);return e.addSignature(r,d),e},this.signAllTransactions=async e=>{var t;const s=await this.getProvider(),r=await this.getAddress(),i=n.account.fromAddress(r);e.forEach((e=>{e.feePayer||(e.feePayer=i)}));const o=e.map((e=>(0,a.encode)(e.serializeMessage()))),{msg:c,data:d}=await s.signAllTransactions(o);if(!d.publicKey||(null===(t=d.signatures)||void 0===t?void 0:t.length)!==e.length)throw new Error(c);return d.signatures.forEach(((t,s)=>{const r=(0,a.decode)(t);e[s].addSignature(i,r)})),e},this.verifySignature=async(e,t,s)=>{const a=s||await this.getAddress(),i=n.account.fromAddress(a),c=o.from(e,"hex"),d=(new TextEncoder).encode(t);return r.sign.detached.verify(d,c,i.toBuffer())},this.provider=null}}const d=c},60766:(e,t,s)=>{s.d(t,{Z:()=>c});var r=s(44967),n=s(95418),a=s(55721),i=s(97429).Buffer;class o extends a.Z{constructor(){super("SolflareExtension"),this.getProvider=async()=>{const{solflare:e}=window;if(!e.isSolflare)throw new Error("Wallet is not connected");return e.isConnected?e:await new Promise((t=>(e.on("connect",(()=>t(e))),e.connect())))},this.getAddress=async()=>{const e=(await this.getProvider()).publicKey.toString();if(!n.account.isAddress(e))throw new Error("There is no Solana account");return e},this.signTransaction=async e=>{const t=await this.getProvider(),s=await this.getAddress(),r=n.account.fromAddress(s);return e.feePayer||(e.feePayer=r),await t.signTransaction(e)},this.signAllTransactions=async e=>{const t=await this.getProvider(),s=await this.getAddress(),r=n.account.fromAddress(s);return e.forEach((e=>{e.feePayer||(e.feePayer=r)})),await t.signAllTransactions(e)},this.signMessage=async e=>{if(!e)throw new Error("Message must be a non-empty string");const t=await this.getProvider(),s=await this.getAddress(),r=(new TextEncoder).encode(e),{signature:n}=await t.signMessage(r,"utf8");return{address:s,signature:i.from(n).toString("hex"),message:e}},this.verifySignature=async(e,t,s)=>{s=s||await this.getAddress();const a=n.account.fromAddress(s),o=i.from(e,"hex"),c=(new TextEncoder).encode(t);return r.sign.detached.verify(c,o,a.toBuffer())}}}const c=o},31669:(e,t,s)=>{s.d(t,{Z:()=>h});var r=s(44967),n=s(95418),a=s(12053),i=s(55721),o=s(55852),c=s(97429).Buffer;class d extends i.Z{constructor(){super("SolflareWeb"),this.provider=void 0,this.getProvider=async()=>(this.provider.connected||await this.provider.connect(),this.provider),this.getAddress=async()=>{const e=await this.getProvider();if(!e.publicKey)throw new Error("Cannot connect to Solflare");return e.publicKey.toBase58()},this.signTransaction=async e=>{const t=await this.getProvider(),s=await this.getAddress(),r=n.account.fromAddress(s);return e.feePayer||(e.feePayer=r),await t.signTransaction(e)},this.signAllTransactions=async e=>{const t=await this.getProvider(),s=await this.getAddress(),r=n.account.fromAddress(s);return e.forEach((e=>{e.feePayer||(e.feePayer=r)})),await t.signAllTransactions(e)},this.signMessage=async e=>{if(!e)throw new Error("Message must be a non-empty string");const t=await this.getProvider(),s=await this.getAddress(),r=(new TextEncoder).encode(e),{signature:n}=await t.sign(r,"utf8");return{address:s,signature:c.from(n).toString("hex"),message:e}},this.verifySignature=async(e,t,s)=>{s=s||await this.getAddress();const a=n.account.fromAddress(s),i=c.from(e,"hex"),o=(new TextEncoder).encode(t);return r.sign.detached.verify(o,i,a.toBuffer())};const{sol:{node:e}}=o.Z;this.provider=new a.Z("https://solflare.com/provider",e)}}const h=d},2491:(e,t,s)=>{s.d(t,{Z:()=>h});var r=s(44967),n=s(95418),a=s(12053),i=s(55721),o=s(55852),c=s(97429).Buffer;class d extends i.Z{constructor(){super("SolletWeb"),this.provider=void 0,this.getProvider=async()=>(this.provider.connected||await this.provider.connect(),this.provider),this.getAddress=async()=>{const e=await this.getProvider();if(!e.publicKey)throw new Error("Cannot connect to Sollet Web");return e.publicKey.toBase58()},this.signTransaction=async e=>{const t=await this.getProvider(),s=await this.getAddress(),r=n.account.fromAddress(s);return e.feePayer||(e.feePayer=r),await t.signTransaction(e)},this.signAllTransactions=async e=>{const t=await this.getProvider(),s=await this.getAddress(),r=n.account.fromAddress(s);return e.forEach((e=>{e.feePayer||(e.feePayer=r)})),await t.signAllTransactions(e)},this.signMessage=async e=>{if(!e)throw new Error("Message must be a non-empty string");const t=await this.getProvider(),s=await this.getAddress(),r=(new TextEncoder).encode(e),{signature:n}=await t.sign(r,"utf8");return{address:s,signature:c.from(n).toString("hex"),message:e}},this.verifySignature=async(e,t,s)=>{s=s||await this.getAddress();const a=n.account.fromAddress(s),i=c.from(e,"hex"),o=(new TextEncoder).encode(t);return r.sign.detached.verify(o,i,a.toBuffer())};const{sol:{node:e}}=o.Z;this.provider=new a.Z("https://www.sollet.io",e)}}const h=d}}]);
//# sourceMappingURL=src_os_store_devTools_ts-src_os_store_mints_reducer_ts-src_os_view_wallet_lib_cloverWallet_ts-e7cc55.f1418c1d.chunk.js.map