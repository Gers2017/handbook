"use strict";(self.webpackChunkhandbook=self.webpackChunkhandbook||[]).push([[146],{3905:(e,t,i)=>{i.d(t,{Zo:()=>s,kt:()=>d});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(i),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||r;return i?n.createElement(f,o(o({ref:t},s),{},{components:i})):n.createElement(f,o({ref:t},s))}));function d(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=i[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},7973:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=i(7462),a=(i(7294),i(3905));const r={id:"materialization",title:"Materialization"},o=void 0,l={unversionedId:"specification/data-types/materialization",id:"specification/data-types/materialization",title:"Materialization",description:"Reduction",source:"@site/docs/specification/data-types/materialization.md",sourceDirName:"specification/data-types",slug:"/specification/data-types/materialization",permalink:"/handbook/specification/data-types/materialization",draft:!1,tags:[],version:"current",frontMatter:{id:"materialization",title:"Materialization"},sidebar:"specification",previous:{title:"Documents and document views",permalink:"/handbook/specification/data-types/documents"},next:{title:"Clients and nodes",permalink:"/handbook/specification/networking/clients-nodes"}},p={},c=[{value:"Reduction",id:"reduction",level:2},{value:"Algorithm",id:"algorithm",level:2},{value:"1. Sort operation graph",id:"1-sort-operation-graph",level:3},{value:"2. Reduction",id:"2-reduction",level:3},{value:"Reconciliation",id:"reconciliation",level:2}],s={toc:c};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"reduction"},"Reduction"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"reduction is the process of creating an ",(0,a.kt)("em",{parentName:"li"},"document view")," from a ",(0,a.kt)("em",{parentName:"li"},"document")," (c.f. ",(0,a.kt)("a",{parentName:"li",href:"/specification/data-types/documents"},"documents and views"),")"),(0,a.kt)("li",{parentName:"ul"},"it is a CRDT (conflict resistant data type)")),(0,a.kt)("h2",{id:"algorithm"},"Algorithm"),(0,a.kt)("h3",{id:"1-sort-operation-graph"},"1. Sort operation graph"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"preprocess the document graph by applying topological sorting (depth first) to linearise the operation graph",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"sorting the graph needs to be deterministic, with the path chosen to walk first being decided by a ",(0,a.kt)("inlineCode",{parentName:"li"},">"),' comparison between the operation ids of each node ("larger" hash wins)')))),(0,a.kt)("h3",{id:"2-reduction"},"2. Reduction"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"iterate over sorted list by applying the following rules:"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Deserialise all fields of the document's ",(0,a.kt)("em",{parentName:"li"},"create operation")," to produce an ",(0,a.kt)("em",{parentName:"li"},"document view")),(0,a.kt)("li",{parentName:"ol"},"If the next operation in the document is an ",(0,a.kt)("em",{parentName:"li"},"update operation"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"for every field in the operation",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"overwrite this field's contents on the view with the contents from the operation"))))),(0,a.kt)("li",{parentName:"ol"},"If the next operation in the document is a ",(0,a.kt)("em",{parentName:"li"},"delete operation"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"remove the content on all fields of the view"),(0,a.kt)("li",{parentName:"ul"},"mark the view deleted"))),(0,a.kt)("li",{parentName:"ol"},"Stop reduction if there is no next known operation in the document"),(0,a.kt)("li",{parentName:"ol"},"Continue with step 2. otherwise")))),(0,a.kt)("h2",{id:"reconciliation"},"Reconciliation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Reconciliation is the process of resolving sequences of changes made by multiple key pairs to the same document into a final datum"),(0,a.kt)("li",{parentName:"ul"},"p2panda is recording ",(0,a.kt)("em",{parentName:"li"},"causal information")," as part of operations in order to make reconciliation effective",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"practically, ",(0,a.kt)("a",{parentName:"li",href:"/specification/data-types/operations"},"operations")," specify the document view that was available to their author at the time of creating the operation"),(0,a.kt)("li",{parentName:"ul"},"p2panda doesn't have access to reliable information on the point in time that edits were made in, which would usually be used to reconcile sequences of edits"))),(0,a.kt)("li",{parentName:"ul"},"See the ",(0,a.kt)("a",{parentName:"li",href:"https://laub.liebechaos.org/wYzMa0w8S12iYvQommrdrA"},"draft document spec")," for implementation details")))}u.isMDXComponent=!0}}]);