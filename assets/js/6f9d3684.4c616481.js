"use strict";(self.webpackChunkp2panda_website=self.webpackChunkp2panda_website||[]).push([[2087],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9084:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:2},u="Key Pairs",s={unversionedId:"writing-data/key-pairs",id:"writing-data/key-pairs",isDocsHomePage:!1,title:"Key Pairs",description:"- p2panda uses Ed25519 key pairs",source:"@site/docs/01-writing-data/key-pairs.md",sourceDirName:"01-writing-data",slug:"/writing-data/key-pairs",permalink:"/handbook/docs/writing-data/key-pairs",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/01-writing-data/key-pairs.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Encoding",permalink:"/handbook/docs/writing-data/encoding"},next:{title:"Schemas",permalink:"/handbook/docs/writing-data/schemas"}},p=[{value:"Usage",id:"usage",children:[],level:2},{value:"Key Management",id:"key-management",children:[],level:2}],c={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"key-pairs"},"Key Pairs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"p2panda uses Ed25519 key pairs"),(0,i.kt)("li",{parentName:"ul"},"clients sign all published data with a user's key pair"),(0,i.kt)("li",{parentName:"ul"},"refer to ",(0,i.kt)("a",{parentName:"li",href:"/docs/collaboration/overview"},"collaboration")," for further topics")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"p2panda clients create key pairs for their users",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"p2panda")," includes functionality to create key pairs"))),(0,i.kt)("li",{parentName:"ul"},"data recipients can identify the author of data from the public key and the signature on a ",(0,i.kt)("a",{parentName:"li",href:"/docs/writing-data/encoding#bamboo-"},"bamboo entry"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"the public key and signature are distributed alongside the data"))),(0,i.kt)("li",{parentName:"ul"},"data recipients can verify the integrity of data using the signature on bamboo entries")),(0,i.kt)("h2",{id:"key-management"},"Key Management"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"p2panda clients SHOULD generate a new key pair for every new usage context",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"the boundaries of a usage context are defined by",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"device storage"),(0,i.kt)("li",{parentName:"ul"},"software distribution"),(0,i.kt)("li",{parentName:"ul"},"trust"))))),(0,i.kt)("li",{parentName:"ul"},"p2panda clients SHOULD ensure that private keys cannot be read by adversaries"),(0,i.kt)("li",{parentName:"ul"},"p2panda clients SHOULD NOT require the transmission of a private key outside a usage context (e.g. to migrate a software installation)")))}d.isMDXComponent=!0}}]);