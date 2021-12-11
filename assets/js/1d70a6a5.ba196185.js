"use strict";(self.webpackChunkp2panda_website=self.webpackChunkp2panda_website||[]).push([[948],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(o,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3546:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),s=["components"],l={sidebar_position:4},o="Queries",u={unversionedId:"organising-data/queries",id:"organising-data/queries",isDocsHomePage:!1,title:"Queries",description:"- clients send queries to nodes in order to publish new entries and query materialised instances",source:"@site/docs/02-organising-data/queries.md",sourceDirName:"02-organising-data",slug:"/organising-data/queries",permalink:"/handbook/docs/organising-data/queries",editUrl:"https://github.com/p2panda/handbook/edit/main/website/docs/02-organising-data/queries.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Data Persistence",permalink:"/handbook/docs/organising-data/persistence"},next:{title:"Discovery",permalink:"/handbook/docs/networking/discovery"}},p=[{value:"Use Cases",id:"use-cases",children:[],level:2},{value:"Publishing Entries",id:"publishing-entries",children:[{value:"<code>panda_getEntryArguments</code>",id:"panda_getentryarguments",children:[],level:3},{value:"<code>panda_publishEntry</code>",id:"panda_publishentry",children:[],level:3}],level:2},{value:"Accessing Instances",id:"accessing-instances",children:[{value:"<code>panda_queryEntries</code>",id:"panda_queryentries",children:[],level:3}],level:2},{value:"Privacy",id:"privacy",children:[],level:2}],c={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"queries"},"Queries"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"clients send ",(0,i.kt)("em",{parentName:"li"},"queries")," to nodes in order to publish new entries and query materialised instances"),(0,i.kt)("li",{parentName:"ul"},"queries are sent as ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/JSON-RPC"},"JSON RPC 2.0")," requests"),(0,i.kt)("li",{parentName:"ul"},"requests described on this page are implemented as part of ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/p2panda/aquadoggo"},"Aquadoggo")),(0,i.kt)("li",{parentName:"ul"},"refer to the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/p2panda/p2panda/blob/main/p2panda-js/openrpc.json"},"p2panda RPC interface")," for a full specification of requests and responses")),(0,i.kt)("h2",{id:"use-cases"},"Use Cases"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"clients can publish entries",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"before that, clients can retrieve parameters required for encoding entries"))),(0,i.kt)("li",{parentName:"ul"},"clients can retrieve materialised instances of a given schema",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"instances can be filtered by individual fields")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"linked documents can be retrieved")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"instances can be sorted by arbitrary fields")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"instances can be sorted by self-referential orderings"))))),(0,i.kt)("h2",{id:"publishing-entries"},"Publishing Entries"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"clients use two RPC endpoints for publishing entries:",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"panda_getEntryArguments")," to retrieve parameters required for encoding an entry"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"panda_publishEntry")," to publish a signed and encoded entry")))),(0,i.kt)("h3",{id:"panda_getentryarguments"},(0,i.kt)("inlineCode",{parentName:"h3"},"panda_getEntryArguments")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns parameters required for encoding new entries",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"no side effects"))),(0,i.kt)("li",{parentName:"ul"},"clients can't encode new entries without information from this endpoint because every entry needs to place itself in the first unused sequence number of a specific ",(0,i.kt)("a",{parentName:"li",href:"/docs/writing-data/encoding"},(0,i.kt)("em",{parentName:"a"},"bamboo log"))," and also it needs to include the hashes of specific previous entries in its encoding",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"this information is held by the node"))),(0,i.kt)("li",{parentName:"ul"},"clients may cache the arguments required for the next entry (they are also returned by ",(0,i.kt)("inlineCode",{parentName:"li"},"panda_publishEntry"),")")),(0,i.kt)("h3",{id:"panda_publishentry"},(0,i.kt)("inlineCode",{parentName:"h3"},"panda_publishEntry")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"publishes the entry supplied with the request"),(0,i.kt)("li",{parentName:"ul"},"returns entry arguments required for publishing the next entry for the same document")),(0,i.kt)("h2",{id:"accessing-instances"},"Accessing Instances"),(0,i.kt)("h3",{id:"panda_queryentries"},(0,i.kt)("inlineCode",{parentName:"h3"},"panda_queryEntries")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns entries of a given schema",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"no side effects")))),(0,i.kt)("h2",{id:"privacy"},"Privacy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"the node MAY log rpc endpoints requested as well as the parameters for all requests that don't have side effects")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"a node MUST NOT log the ip address requests were received from"))))}d.isMDXComponent=!0}}]);