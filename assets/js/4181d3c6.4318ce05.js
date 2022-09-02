"use strict";(self.webpackChunkhandbook=self.webpackChunkhandbook||[]).push([[695],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),f=o,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2823:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(7462),o=(n(7294),n(4137));const i={id:"discovery",title:"Discovery"},a=void 0,c={unversionedId:"specification/networking/discovery",id:"specification/networking/discovery",title:"Discovery",description:"Discovery is in specification phase and has not been implemented yet. We're aiming at different, configurable discovery methods: Manual, mDNS and via signalling servers.",source:"@site/docs/specification/networking/discovery.md",sourceDirName:"specification/networking",slug:"/specification/networking/discovery",permalink:"/handbook/specification/networking/discovery",draft:!1,tags:[],version:"current",frontMatter:{id:"discovery",title:"Discovery"},sidebar:"specification",previous:{title:"Clients and nodes",permalink:"/handbook/specification/networking/clients-nodes"},next:{title:"Replication Protocol",permalink:"/handbook/specification/networking/replication-protocol"}},s={},l=[{value:"Use Cases",id:"use-cases",level:2}],p={toc:l};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Not implemented",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Discovery is in specification phase and has not been implemented yet. We're aiming at different, configurable discovery methods: Manual, mDNS and via signalling servers.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Discovery is the process by which ",(0,o.kt)("a",{parentName:"li",href:"/specification/networking/clients-nodes"},"nodes")," find other nodes and connect to them"),(0,o.kt)("li",{parentName:"ul"},"There is no global list of all existing nodes",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Nodes MUST NOT be required to register or sign up anywhere in order to start connecting to other nodes")))),(0,o.kt)("h2",{id:"use-cases"},"Use Cases"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Users who run and configure a node are ",(0,o.kt)("em",{parentName:"li"},"node operators")),(0,o.kt)("li",{parentName:"ul"},"Node operators can manually specify IP addresses of other nodes to connect to"),(0,o.kt)("li",{parentName:"ul"},"Node operators can choose to have their node broadcast connection parameters that allow other nodes to connect to it"),(0,o.kt)("li",{parentName:"ul"},"Nodes can be configured to broadcast connection parameters via DHT"),(0,o.kt)("li",{parentName:"ul"},"Nodes can be configured to broadcast connection parameters via mDNS")))}d.isMDXComponent=!0}}]);