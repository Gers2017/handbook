"use strict";(self.webpackChunkhandbook=self.webpackChunkhandbook||[]).push([[725],{4137:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>d});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},l=Object.keys(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=i.createContext({}),p=function(e){var t=i.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},o=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},k=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),k=p(a),d=n,u=k["".concat(c,".").concat(d)]||k[d]||m[d]||l;return a?i.createElement(u,r(r({ref:t},o),{},{components:a})):i.createElement(u,r({ref:t},o))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,r=new Array(l);r[0]=k;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var p=2;p<l;p++)r[p]=a[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}k.displayName="MDXCreateElement"},2568:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var i=a(7462),n=(a(7294),a(4137));const l={title:"Roadmap"},r=void 0,s={unversionedId:"about/roadmap",id:"about/roadmap",title:"Roadmap",description:"Previous",source:"@site/docs/about/roadmap.md",sourceDirName:"about",slug:"/about/roadmap",permalink:"/handbook/about/roadmap",draft:!1,tags:[],version:"current",frontMatter:{title:"Roadmap"},sidebar:"about",previous:{title:"Specification",permalink:"/handbook/about/specification"},next:{title:"How to contribute",permalink:"/handbook/about/contribute"}},c={},p=[{value:"Previous",id:"previous",level:2},{value:"Now",id:"now",level:2},{value:"Future",id:"future",level:2}],o={toc:p};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"previous"},"Previous"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Ed25519 key pair generation and handling"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Bamboo ",(0,n.kt)("inlineCode",{parentName:"li"},"Entry")," creation"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,n.kt)("inlineCode",{parentName:"li"},"Entry")," signing and validation"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","SQLite / PostgreSQL support for data storage"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","WebAssembly support in the browser"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,n.kt)("inlineCode",{parentName:"li"},"aquadoggo")," HTTP and WebSocket API"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Publish first v0.1.0 ",(0,n.kt)("inlineCode",{parentName:"li"},"p2panda-rs")," crate and ",(0,n.kt)("inlineCode",{parentName:"li"},"p2panda-js")," npm package"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Operation specification, creation and validation"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","CBOR encoding and basic CDDL validation of messages"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Experimental chat demo application"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Embed ",(0,n.kt)("inlineCode",{parentName:"li"},"aquadoggo")," library in Tauri container"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Stabilize ",(0,n.kt)("inlineCode",{parentName:"li"},"p2panda-js")," API, release 0.2.0"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Publish ",(0,n.kt)("inlineCode",{parentName:"li"},"aquadoggo")," crate 0.1.0"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,n.kt)("inlineCode",{parentName:"li"},"bamboo-rs-ed25519-yasmf")," crate published"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Use YASMF hashes in ",(0,n.kt)("inlineCode",{parentName:"li"},"p2panda-rs")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"p2panda-js")),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Materialisation of data from operations"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Schemas describing the format of operations "),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","OpenMLS group encryption capabilities in ",(0,n.kt)("inlineCode",{parentName:"li"},"p2panda-rs")),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Schema migrations"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Multi-writer materialisation in ",(0,n.kt)("inlineCode",{parentName:"li"},"aquadoggo")),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Implement System Schemas in ",(0,n.kt)("inlineCode",{parentName:"li"},"aquadoggo")),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Implement Application Schemas in ",(0,n.kt)("inlineCode",{parentName:"li"},"aquadoggo")),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Basic replication protocol"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Manually follow other nodes"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","p2panda first draft specification"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Dynamic GraphQL API to query data"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Schemas- and data validation")),(0,n.kt)("h2",{id:"now"},"Now"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","p2panda specification 1.0 release \ud83d\udc3c")),(0,n.kt)("h2",{id:"future"},"Future"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Shared identities with ",(0,n.kt)("inlineCode",{parentName:"li"},"KeyGroup")," in ",(0,n.kt)("inlineCode",{parentName:"li"},"p2panda-rs")),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Multi-writer permissions in ",(0,n.kt)("inlineCode",{parentName:"li"},"aquadoggo")),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Transport encryption between nodes via TLS 1.3"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Automatic local discovery via mDNS"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Schema backwards compatibility via lenses"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Automatic internet discovery via signalling servers"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Efficient replication protocol"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",'Automatic deletion of unused data ("Garbage Collection")'),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Automatic detection of forked logs")))}m.isMDXComponent=!0}}]);