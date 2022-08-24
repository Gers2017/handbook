"use strict";(self.webpackChunkhandbook=self.webpackChunkhandbook||[]).push([[891],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=m(a),d=i,f=p["".concat(s,".").concat(d)]||p[d]||u[d]||r;return a?n.createElement(f,o(o({ref:t},c),{},{components:a})):n.createElement(f,o({ref:t},c))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var m=2;m<r;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5183:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var n=a(7462),i=(a(7294),a(3905));const r={id:"documents",title:"Documents and document views"},o=void 0,l={unversionedId:"specification/data-types/documents",id:"specification/data-types/documents",title:"Documents and document views",description:"- documents identify mutable pieces of data",source:"@site/docs/specification/data-types/documents.md",sourceDirName:"specification/data-types",slug:"/specification/data-types/documents",permalink:"/handbook/specification/data-types/documents",draft:!1,tags:[],version:"current",frontMatter:{id:"documents",title:"Documents and document views"},sidebar:"specification",previous:{title:"Schemas",permalink:"/handbook/specification/data-types/schemas"},next:{title:"Materialization",permalink:"/handbook/specification/data-types/materialization"}},s={},m=[{value:"Documents",id:"documents",level:2},{value:"Document Views",id:"document-views",level:2},{value:"The Latest Document View",id:"the-latest-document-view",level:3}],c={toc:m};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"documents")," identify mutable pieces of data",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"some things that may be a document in p2panda: a blog post, a wiki page, a chat message, a user account, a configuration setting"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"document views")," represent the state of a document at a particular point in its history of edits",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"every change of a document results in a new document view")))),(0,i.kt)("h2",{id:"documents"},"Documents"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a document is the graph of ",(0,i.kt)("a",{parentName:"li",href:"/specification/data-types/operations"},"operations")," that is constructed by starting with a ",(0,i.kt)("em",{parentName:"li"},"create operation")," as its root and exhaustively connecting all known ",(0,i.kt)("em",{parentName:"li"},"update")," and ",(0,i.kt)("em",{parentName:"li"},"delete operations")," that point at leafs of this graph"),(0,i.kt)("li",{parentName:"ul"},"a document is identified by the operation id of its create operation",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"this is also called the ",(0,i.kt)("em",{parentName:"li"},"document id")))),(0,i.kt)("li",{parentName:"ul"},"a document assumes the schema of its ",(0,i.kt)("em",{parentName:"li"},"create operation"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"this is the ",(0,i.kt)("em",{parentName:"li"},"document schema")))),(0,i.kt)("li",{parentName:"ul"},"all operations in the document MUST match the ",(0,i.kt)("em",{parentName:"li"},"document schema")),(0,i.kt)("li",{parentName:"ul"},"operations in the document can have any ",(0,i.kt)("em",{parentName:"li"},"operation version"))),(0,i.kt)("h2",{id:"document-views"},"Document Views"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a ",(0,i.kt)("em",{parentName:"li"},"document view")," is the result of applying a series of operations from a ",(0,i.kt)("em",{parentName:"li"},"document"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"the series of operations must start with the document's ",(0,i.kt)("em",{parentName:"li"},"create operation")),(0,i.kt)("li",{parentName:"ul"},"see ",(0,i.kt)("a",{parentName:"li",href:"/specification/data-types/materialization#reduction"},"reduction")," and ",(0,i.kt)("a",{parentName:"li",href:"/specification/data-types/materialization#reconciliation"},"reconciliation")," for further details"))),(0,i.kt)("li",{parentName:"ul"},"a document view is identified by its set of graph tips: the ",(0,i.kt)("em",{parentName:"li"},"document view id"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"each graph tip is represented as an ",(0,i.kt)("em",{parentName:"li"},"operation id")),(0,i.kt)("li",{parentName:"ul"},"it's possible to replicate the exact state of a document from the document view id"),(0,i.kt)("li",{parentName:"ul"},"the document view id grows unbounded with the number of unmerged graph tips"),(0,i.kt)("li",{parentName:"ul"},"if a limited size identifier is required, the document view's ",(0,i.kt)("em",{parentName:"li"},"hash id")," can be used",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"to construct the hash id sort the graph tips of a document view id, concatenate their byte values and hash the result using YASMF."))))),(0,i.kt)("li",{parentName:"ul"},"a document view has a value for all fields that are defined by its document's schema unless the document has been deleted"),(0,i.kt)("li",{parentName:"ul"},"a document view is ",(0,i.kt)("em",{parentName:"li"},"deleted")," if its document contains a ",(0,i.kt)("em",{parentName:"li"},"delete operation"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"a deleted document's view has no values for its fields"))),(0,i.kt)("li",{parentName:"ul"},"a document view is ",(0,i.kt)("em",{parentName:"li"},"edited")," if it's document contained one or more ",(0,i.kt)("em",{parentName:"li"},"update operations"))),(0,i.kt)("h3",{id:"the-latest-document-view"},"The Latest Document View"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"it is defined as that document view which incorporates all valid operations that are known to the node and part of the document"),(0,i.kt)("li",{parentName:"ul"},"as two nodes in the p2panda network may not share knowledge of the same operations, the latest document view may differ from node to node")))}u.isMDXComponent=!0}}]);