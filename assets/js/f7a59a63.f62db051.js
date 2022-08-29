"use strict";(self.webpackChunkhandbook=self.webpackChunkhandbook||[]).push([[630],{4137:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(a),m=r,y=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(y,o(o({ref:t},c),{},{components:a})):n.createElement(y,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2142:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=a(7462),r=(a(7294),a(4137));const i={id:"key-pairs",title:"Key Pairs"},o=void 0,s={unversionedId:"specification/data-types/key-pairs",id:"specification/data-types/key-pairs",title:"Key Pairs",description:"Clients MUST use Ed25519 as the Digital Signature Algorithm for Bamboo.",source:"@site/docs/specification/data-types/key-pairs.md",sourceDirName:"specification/data-types",slug:"/specification/data-types/key-pairs",permalink:"/handbook/specification/data-types/key-pairs",draft:!1,tags:[],version:"current",frontMatter:{id:"key-pairs",title:"Key Pairs"},sidebar:"specification",previous:{title:"Bamboo",permalink:"/handbook/specification/data-types/bamboo"},next:{title:"Operations",permalink:"/handbook/specification/data-types/operations"}},p={},l=[{value:"Usage",id:"usage",level:2},{value:"Key Management",id:"key-management",level:2}],c={toc:l};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Requirement KY1",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Clients MUST use Ed25519 as the Digital Signature Algorithm for Bamboo.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A key pair is used to sign Bamboo entries and their payloads."),(0,r.kt)("li",{parentName:"ul"},"The public key of a key pair is embedded in Bamboo entries and therefore always available when verifying an entry and its payload.")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"p2panda clients create key pairs for their users."),(0,r.kt)("li",{parentName:"ul"},"Data recipients can identify the author of data from the public key and the signature on a ",(0,r.kt)("a",{parentName:"li",href:"/specification/data-types/bamboo#entries"},"bamboo entry"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The public key and signature are distributed alongside the data."))),(0,r.kt)("li",{parentName:"ul"},"Data recipients can verify the integrity of data using the signature on bamboo entries.")),(0,r.kt)("h2",{id:"key-management"},"Key Management"),(0,r.kt)("admonition",{title:"Requirement KY2",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"p2panda clients SHOULD generate a new key pair for every new usage context. The boundaries of a usage context are defined by 1) device storage, 2) software distribution and 3) trust.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This lowers the chance of producing a fork in a Bamboo log.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A Bamboo log has a fork when two entries with the same sequence number exist in it.")))),(0,r.kt)("admonition",{title:"Requirement KY3",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"p2panda clients SHOULD ensure that private keys cannot be read by adversaries.")),(0,r.kt)("admonition",{title:"Requirement KY4",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"p2panda clients SHOULD NOT require the transmission of a private key outside a usage context.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Transmitting a private key outside of its usage context might be attractive e.g. to migrate a software installation but it is considered a security risk, can lead to forks and hard to get right in terms of user experience."),(0,r.kt)("li",{parentName:"ul"},"To migrate data clients should rather make use of p2panda ",(0,r.kt)("a",{parentName:"li",href:"/specification/core-concepts/permissions"},"Key Groups"),", by transferring the permissions to a new key pair instead of migrating the old key pair itself")))}u.isMDXComponent=!0}}]);