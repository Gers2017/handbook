"use strict";(self.webpackChunkp2panda_website=self.webpackChunkp2panda_website||[]).push([[5782],{3905:function(n,e,t){t.d(e,{Zo:function(){return u},kt:function(){return h}});var r=t(7294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var s=r.createContext({}),c=function(n){var e=r.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},u=function(n){var e=c(n.components);return r.createElement(s.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,o=n.originalType,s=n.parentName,u=l(n,["components","mdxType","originalType","parentName"]),p=c(t),h=a,y=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return t?r.createElement(y,i(i({ref:e},u),{},{components:t})):r.createElement(y,i({ref:e},u))}));function h(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var o=t.length,i=new Array(o);i[0]=p;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=n,l.mdxType="string"==typeof n?n:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2586:function(n,e,t){t.r(e),t.d(e,{assets:function(){return s},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c}});var r=t(3117),a=(t(7294),t(3905));const o={id:"replication"},i="Replication",l={unversionedId:"networking/replication",id:"networking/replication",title:"Replication",description:"- replication is the process by which nodes exchange entries and operations to eventually converge all to the same state",source:"@site/docs/03-networking/replication.md",sourceDirName:"03-networking",slug:"/networking/replication",permalink:"/handbook/docs/networking/replication",draft:!1,editUrl:"https://github.com/p2panda/handbook/edit/main/website/docs/03-networking/replication.md",tags:[],version:"current",frontMatter:{id:"replication"},sidebar:"docs",previous:{title:"Discovery",permalink:"/handbook/docs/networking/discovery"},next:{title:"Collaboration",permalink:"/handbook/docs/category/collaboration"}},s={},c=[{value:"Node API",id:"node-api",level:2}],u={toc:c};function d(n){let{components:e,...t}=n;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"replication"},"Replication"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"replication is the process by which nodes exchange entries and operations to eventually converge all to the same state",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"nodes autonomously share data with each other without central coordination"),(0,a.kt)("li",{parentName:"ul"},"this makes p2panda an ",(0,a.kt)("em",{parentName:"li"},"eventually consistent")," database"))),(0,a.kt)("li",{parentName:"ul"},"nodes may not be interested in all available data and can choose to receive only some data, for example by only requesting documents following a certain schema"),(0,a.kt)("li",{parentName:"ul"},"nodes need to implement the API specifications to make sure they are compatible with all other node and client implementations. The Node API is specified here, the Client API is further specified under ",(0,a.kt)("a",{parentName:"li",href:"/docs/organising-data/queries"},"queries"),", both APIs reside inside nodes")),(0,a.kt)("h2",{id:"node-api"},"Node API"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"GraphQL queries allowing other nodes ask about the bamboo logs, entries and payloads they know about. these methods are enough to build a replication protocol on top.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},'"""\nget an entry by its hash\n"""\nentryByHash(hash: EntryHash!): SingleEntryAndPayload\n\n"""\nget any entries that are newer than the provided sequence_number for a given\nauthor and log_id\n"""\ngetEntriesNewerThanSeq(\n  """\n  id of the log\n  """\n  logId: LogId!\n\n  """\n  author of the log\n  """\n  author: Author!\n\n  """\n  latest known sequence number. we want the entries which are newer than this.\n  """\n  seqNum: SeqNum!\n\n  """\n  max number of items to be returned per page\n  """\n  first: Int\n\n  """\n  cursor identifier for pagination\n  """\n  after: String\n): EntryAndPayloadConnection!\n\n"""\nget a single entry by its log_id, sequence_number and author\n"""\nentryByLogIdAndSequence(\n  """\n  id of the log\n  """\n  logId: LogId!\n\n  """\n  author of the log\n  """\n  author: Author!\n\n  """\n  sequence number of the entry in the log\n  """\n  seqNum: SeqNum!\n): SingleEntryAndPayload\n\n"""\nget aliases of the provided `public_keys` that you can use in future requests\nto save bandwidth\n"""\nauthorAliases(publicKeys: [PublicKey!]!): [AliasedAuthor!]!\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},'"""\nAliasedAuthor is one of either the public_key or an alias\n\nthe intention of this is to reduce bandwidth when making requests by using a\nshort "alias" rather than the full author public_key\n\nto get an alias of an author, use the `author_aliases` method which will return\nthis type.\n\nwhen using as an input to a query, exactly one of public_key or alias must be\nset otherwise it is an error.\n"""\ntype AliasedAuthor {\n  """\n  the author\'s public key\n  """\n  publicKey: PublicKey!\n\n  """\n  the author alias\n  """\n  alias: ID!\n}\n\n"""\nEither the `public_key` or the `alias` of that author.\n"""\ninput Author {\n  """\n  the author\'s public key\n  """\n  publicKey: PublicKey\n\n  """\n  the author alias\n  """\n  alias: ID\n}\n\n"""\nAn entry with an optional operation payload\n"""\ntype EntryAndOperation {\n  """\n  get the entry\n  """\n  entry: EncodedEntry!\n\n  """\n  get the operation (entry payload)\n  """\n  operation: EncodedOperation\n}\n\ntype EntryAndPayloadConnection {\n  """\n  information to aid in pagination\n  """\n  pageInfo: PageInfo!\n\n  """\n  a list of edges.\n  """\n  edges: [EntryAndPayloadEdge]\n}\n\n"""\nAn edge in a connection\n"""\ntype EntryAndPayloadEdge {\n  """\n  the item at the end of the edge\n  """\n  node: EntryAndOperation!\n\n  """\n  a cursor for use in pagination\n  """\n  cursor: String!\n}\n\n"""\ninformation about pagination in a connection\n"""\ntype PageInfo {\n  """\n  when paginating backwards, are there more items?\n  """\n  hasPreviousPage: Boolean!\n\n  """\n  when paginating forwards, are there more items?\n  """\n  hasNextPage: Boolean!\n\n  """\n  when paginating backwards, the cursor to continue\n  """\n  startCursor: String\n\n  """\n  when paginating forwards, the cursor to continue\n  """\n  endCursor: String\n}\n\ntype SingleEntryAndPayload {\n  """\n  entry bytes encoded as hexadecimal string\n  """\n  entry: EncodedEntry!\n\n  """\n  operation (payload of the entry) bytes encoded as hexadecimal string\n  """\n  operation: EncodedOperation\n\n  """\n  get the certificate pool for this entry that can be used to verify the entry\n  is valid.\n  """\n  certificatePool: [EncodedEntry!]!\n}\n')))}d.isMDXComponent=!0}}]);