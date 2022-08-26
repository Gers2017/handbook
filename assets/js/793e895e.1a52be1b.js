"use strict";(self.webpackChunkhandbook=self.webpackChunkhandbook||[]).push([[178],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(f,o(o({ref:t},s),{},{components:n})):a.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5087:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={id:"encoding-data",title:"Encoding"},o=void 0,c={unversionedId:"specification/encoding-data",id:"specification/encoding-data",title:"Encoding",description:"- p2panda requires a canonical encoding format to guarantee that hashing a value produces the same result across all implementations.",source:"@site/docs/specification/encoding.md",sourceDirName:"specification",slug:"/specification/encoding-data",permalink:"/handbook/specification/encoding-data",draft:!1,tags:[],version:"current",frontMatter:{id:"encoding-data",title:"Encoding"},sidebar:"specification",previous:{title:"Overview",permalink:"/handbook/specification/"},next:{title:"Bamboo",permalink:"/handbook/specification/data-types/bamboo"}},l={},p=[{value:"CBOR",id:"cbor",level:2},{value:"Operations",id:"operations",level:2}],s={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"p2panda requires a canonical encoding format to guarantee that hashing a value produces the same result across all implementations.")),(0,r.kt)("h2",{id:"cbor"},"CBOR"),(0,r.kt)("admonition",{title:"Requirement EN1",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},'All CBOR values need to be encoded in canonical format and "strict mode" as per ',(0,r.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc7049#section-3.9"},"CBOR specification"),".")),(0,r.kt)("h2",{id:"operations"},"Operations"),(0,r.kt)("admonition",{title:"Requirement EN2",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"All array values and map keys whose order is not semantic MUST be encoded in lexicographically sorted order and can not contain any duplicates."),(0,r.kt)("p",{parentName:"admonition"},"Arrays without semantic meaning are:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"any ",(0,r.kt)("em",{parentName:"li"},"document view id"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"including those in a ",(0,r.kt)("em",{parentName:"li"},"schema id")," or ",(0,r.kt)("em",{parentName:"li"},"pinned_relation")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"previous")," array in an operation"))))}d.isMDXComponent=!0}}]);