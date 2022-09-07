"use strict";(self.webpackChunkhandbook=self.webpackChunkhandbook||[]).push([[70],{4137:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(f,o(o({ref:t},l),{},{components:a})):n.createElement(f,o({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5354:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(7462),r=(a(7294),a(4137));const i={title:"Glossary"},o=void 0,s={unversionedId:"specification/glossary",id:"specification/glossary",title:"Glossary",description:"Private Key*: The private key in a key pair, used for signing data.",source:"@site/docs/specification/glossary.md",sourceDirName:"specification",slug:"/specification/glossary",permalink:"/handbook/specification/glossary",draft:!1,tags:[],version:"current",frontMatter:{title:"Glossary"},sidebar:"specification",previous:{title:"Canonic Encoding",permalink:"/handbook/specification/encoding-data"}},p={},c=[],l={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Private Key"),": The private key in a key pair, used for signing data."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Public Key"),": The public key in a key pair, used to identify an author and verify signed data."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"/specification/data-types/bamboo#author"},"Author (in Bamboo)")),": The public key included in a Bamboo entry."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"/specification/data-types/bamboo"},"Bamboo")),": An append-only log data type that ensures security and authenticity of arbitrary data in order to share it in a decentralised and trustless setting."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"/specification/encoding-data#cbor"},"CBOR")),": Concise Binary Object Representation data format used for encoding ",(0,r.kt)("a",{parentName:"li",href:"/specification/data-types/operations"},"operations"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"/specification/data-types/documents"},"Document")),": Conflict free multi-writer data type which represents most application and system data in p2panda."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"/specification/data-types/bamboo"},"Entry")),": An entry in an append only log."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"/specification/data-types/bamboo#hashing"},"Hash")),": The result of applying a hashing function to some data, this hash is used to uniquely identify and verify the hashed data."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"/specification/data-types/bamboo#hashing"},"Hashing")),": A cryptography method that converts any form of data to a unique text string."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"/specification/data-types/bamboo#encoding"},"Hexadecimal Encoding")),": Human-friendly representation of binary-coded values using the hexadecimal numeral system. The p2panda GraphQL ",(0,r.kt)("a",{parentName:"li",href:"/specification/APIs/overview"},"APIs")," require values to be hex-encoded."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"/specification/data-types/key-pairs"},"Key Pair")),": A string of data that is used to lock or unlock cryptographic functions, including authentication, authorization and encryption."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"/specification/data-types/operations"},"Operation")),": p2panda data type which describes data mutations. Collections of linked operations form causal mutation graphs which are the foundation for p2panda ",(0,r.kt)("a",{parentName:"li",href:"/specification/data-types/documents"},"Documents"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/bamboo-rs/yasmf-hash"},"Yasmf")),": A multiformat hash used in p2panda.")))}u.isMDXComponent=!0}}]);