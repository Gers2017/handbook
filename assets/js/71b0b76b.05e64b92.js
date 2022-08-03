"use strict";(self.webpackChunkhandbook=self.webpackChunkhandbook||[]).push([[606],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(a),d=o,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9899:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(7462),o=(a(7294),a(3905));const r={id:"bamboo",title:"Bamboo"},i=void 0,l={unversionedId:"specification/data-types/bamboo",id:"specification/data-types/bamboo",title:"Bamboo",description:"- in order to write data in p2panda it needs to be encoded",source:"@site/docs/specification/data-types/bamboo.md",sourceDirName:"specification/data-types",slug:"/specification/data-types/bamboo",permalink:"/handbook/specification/data-types/bamboo",draft:!1,tags:[],version:"current",frontMatter:{id:"bamboo",title:"Bamboo"},sidebar:"specification",previous:{title:"Specification",permalink:"/handbook/specification/"},next:{title:"Key Pairs",permalink:"/handbook/specification/data-types/key-pairs"}},s={},p=[{value:"Authors",id:"authors",level:3},{value:"Logs",id:"logs",level:3},{value:"Entries",id:"entries",level:3}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"in order to write data in p2panda it needs to be encoded"),(0,o.kt)("li",{parentName:"ul"},"p2panda uses ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/bamboo-rs/bamboo-ed25519-yasmf"},"bamboo")," to encode data",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"this handbook doesn't repeat everything that's in the bamboo spec, so it might be helpful to have a look at that (it's not too long)"))),(0,o.kt)("li",{parentName:"ul"},"bamboo is an append-only data structure that allows encoding arbitrary data in order to share it among peers without trust in the data transmission",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"bamboo organises data by ",(0,o.kt)("em",{parentName:"li"},"author")),(0,o.kt)("li",{parentName:"ul"},"every author has many ",(0,o.kt)("a",{parentName:"li",href:"#logs"},(0,o.kt)("em",{parentName:"a"},"logs")),", each of which contains many ",(0,o.kt)("em",{parentName:"li"},"entries")),(0,o.kt)("li",{parentName:"ul"},"entries are the container for individual pieces of data that we want to publish"),(0,o.kt)("li",{parentName:"ul"},"the following sections explain how these concepts from bamboo are used in p2panda"))),(0,o.kt)("li",{parentName:"ul"},"p2panda uses bamboo with ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/bamboo-rs/yasmf-hash"},(0,o.kt)("em",{parentName:"a"},"yasmf")," hashes"))),(0,o.kt)("h3",{id:"authors"},"Authors"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"data published using bamboo always belongs to the public key that signed it, this key is called ",(0,o.kt)("em",{parentName:"li"},"author")," in bamboo"),(0,o.kt)("li",{parentName:"ul"},"people who use p2panda can have access to more than one key pair, which is why we don't call public keys ",(0,o.kt)("em",{parentName:"li"},"author"),", as bamboo does, we call them ",(0,o.kt)("em",{parentName:"li"},"public key"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"p2panda users may have more than one key because every device uses an additional key"))),(0,o.kt)("li",{parentName:"ul"},"have a look at the ",(0,o.kt)("a",{parentName:"li",href:"/specification/data-types/key-pairs"},"key pairs")," section of this handbook for more detailed information on this topic")),(0,o.kt)("h3",{id:"logs"},"Logs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"when a ",(0,o.kt)("em",{parentName:"li"},"bamboo author")," publishes data they assign it to a log, which is identified by an integer number",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"every author has 2^64 logs available to them"))),(0,o.kt)("li",{parentName:"ul"},"in p2panda every log is used to collect a key pair's contributions to one ",(0,o.kt)("a",{parentName:"li",href:"/specification/data-types/documents"},"document")),(0,o.kt)("li",{parentName:"ul"},"every log contains up to 2^64 - 1 entries")),(0,o.kt)("h3",{id:"entries"},"Entries"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"p2panda uses Bamboo entries to record changes of data while giving us cool features like partial replication, cryptographic integrity and authenticity",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"every individual change is recorded inside an entry"),(0,o.kt)("li",{parentName:"ul"},"we call these changes ",(0,o.kt)("em",{parentName:"li"},"operations")))),(0,o.kt)("li",{parentName:"ul"},"have a look at the ",(0,o.kt)("a",{parentName:"li",href:"/specification/data-types/operations"},"operations")," section of this handbook for more detailled information on this topic")))}u.isMDXComponent=!0}}]);