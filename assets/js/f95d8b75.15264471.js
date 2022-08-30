"use strict";(self.webpackChunkhandbook=self.webpackChunkhandbook||[]).push([[840],{4137:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=p(n),u=i,f=h["".concat(c,".").concat(u)]||h[u]||d[u]||o;return n?a.createElement(f,r(r({ref:t},l),{},{components:n})):a.createElement(f,r({ref:t},l))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4455:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),i=(n(7294),n(4137));const o={id:"key-concepts",title:"Key Concepts"},r=void 0,s={unversionedId:"specification/key-concepts",id:"specification/key-concepts",title:"Key Concepts",description:"This is a short introduction into some of the higher level concepts which build on top of the core p2panda data types. You can dive deeper into any of these topics by visiting the relevent specification pages. Hopefully this gives you an introductory overview which will help contextualise the details later.",source:"@site/docs/specification/key-concepts.md",sourceDirName:"specification",slug:"/specification/key-concepts",permalink:"/handbook/specification/key-concepts",draft:!1,tags:[],version:"current",frontMatter:{id:"key-concepts",title:"Key Concepts"},sidebar:"specification",previous:{title:"Introduction",permalink:"/handbook/specification/introduction"},next:{title:"Encoding",permalink:"/handbook/specification/encoding-data"}},c={},p=[{value:"Authors",id:"authors",level:2},{value:"Documents",id:"documents",level:2},{value:"Schema",id:"schema",level:2}],l={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This is a short introduction into some of the higher level concepts which build on top of the core ",(0,i.kt)("inlineCode",{parentName:"p"},"p2panda")," data types. You can dive deeper into any of these topics by visiting the relevent specification pages. Hopefully this gives you an introductory overview which will help contextualise the details later."),(0,i.kt)("h2",{id:"authors"},"Authors"),(0,i.kt)("p",null,"Authors are humans, shared identities or bots that publish and modify documents on a p2panda network. In their simplest form they would be made up of a single ",(0,i.kt)("a",{parentName:"p",href:"/specification/data-types/key-pairs"},"key pair")," on a single device, however the term also refers to groups of ",(0,i.kt)("a",{parentName:"p",href:"/specification/data-types/key-pairs"},"key pairs")," which want to share a single identity (read about ",(0,i.kt)("inlineCode",{parentName:"p"},"key groups")," in the ",(0,i.kt)("a",{parentName:"p",href:"/specification/authorisation"},"authorisation")," section to find out how this happens). This means that an author could be: someone who writes blog posts, someone who edits a wiki, a co-operative publishing a website, a band releasing an album."),(0,i.kt)("h2",{id:"documents"},"Documents"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/specification/data-types/documents"},"Documents")," are mutable data items which live on a p2panda network. Authors can create, update and delete documents. A document might be a blog post, a wiki page, a chat message, a user account, a configuration setting, a game board. They are multi-writer capable and have in-built properties which deterministically reslove confilicting writes."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/specification/networking/clients-nodes"},"Nodes")," are responsible for persisting documents and offering them on a public API so they can be queried by clients. They also offer the public API for all write actions relating to documents."),(0,i.kt)("p",null,"Documents can be assigned to an identity, giving them a concept of ",(0,i.kt)("a",{parentName:"p",href:"/specification/authorisation"},"permissions"),", with the ability to add and remove other identities over the life of a document. ",(0,i.kt)("a",{parentName:"p",href:"/specification/encryption"},"Encryption")," is available via the use of ",(0,i.kt)("inlineCode",{parentName:"p"},"MLS")," encryption."),(0,i.kt)("h2",{id:"schema"},"Schema"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/specification/data-types/schemas"},"Schema")," specify the fields and values a document contains. When a document is published or updated, the request must be checked (by a node) against the claimed schema. If it doesn't pass validation then the request should be rejected. This ensures all data on a p2panda network strictly follows a known schema. An application developer would publish their own schema based on the data required for their needs, or they could re-use schema already existing on their network."),(0,i.kt)("p",null,"Some schema are specified as part of the p2panda protocol, these are called ",(0,i.kt)("a",{parentName:"p",href:"/specification/data-types/schemas#system-schemas"},"system schema"),", others are dynamically published by application developers and distributed across the network, these are called ",(0,i.kt)("a",{parentName:"p",href:"/specification/data-types/schemas#system-and-application-schemas"},"application schema")))}d.isMDXComponent=!0}}]);