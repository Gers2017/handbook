"use strict";(self.webpackChunkp2panda_website=self.webpackChunkp2panda_website||[]).push([[9514,4972],{7994:function(e,t,a){a.r(t),a.d(t,{default:function(){return Ce}});var n=a(7294),l=a(6010),r=a(2802),o=a(3320),c=a(1944),i=a(5281),s=a(4477),d=a(1116),m=a(5257),u=a(5999),b=a(2466),p=a(5936);var h="backToTopButton_sjWU",E="backToTopButtonShow_xfvO";function v(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[a,l]=(0,n.useState)(!1),r=(0,n.useRef)(!1),{startScroll:o,cancelScroll:c}=(0,b.Ct)();return(0,b.RF)(((e,a)=>{let{scrollY:n}=e;const o=null==a?void 0:a.scrollY;o&&(r.current?r.current=!1:n>=o?(c(),l(!1)):n<t?l(!1):n+window.innerHeight<document.documentElement.scrollHeight&&l(!0))})),(0,p.S)((e=>{e.location.hash&&(r.current=!0,l(!1))})),{shown:a,scrollToTop:()=>o(0)}}({threshold:300});return n.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,l.Z)("clean-btn",i.k.common.backToTopButton,h,e&&E),type:"button",onClick:t})}var f=a(6775),g=a(7524),_=a(6668),k=a(1327),C=a(3117);function I(e){return n.createElement("svg",(0,C.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}var N="collapseSidebarButton_PEFL",S="collapseSidebarButtonIcon_kv0_";function Z(e){let{onClick:t}=e;return n.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,l.Z)("button button--secondary button--outline",N),onClick:t},n.createElement(I,{className:S}))}var y=a(9689),T=a(902);const x=Symbol("EmptyContext"),L=n.createContext(x);function w(e){let{children:t}=e;const[a,l]=(0,n.useState)(null),r=(0,n.useMemo)((()=>({expandedItem:a,setExpandedItem:l})),[a]);return n.createElement(L.Provider,{value:r},t)}var M=a(8596),F=a(6043),A=a(9960),B=a(2389);function H(e){let{categoryLabel:t,onClick:a}=e;return n.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:a})}function P(e){let{item:t,onItemClick:a,activePath:o,level:c,index:s,...d}=e;const{items:m,label:u,collapsible:b,className:p,href:h}=t,{docs:{sidebar:{autoCollapseCategories:E}}}=(0,_.L)(),v=function(e){const t=(0,B.Z)();return(0,n.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,r.Wl)(e):void 0),[e,t])}(t),f=(0,r._F)(t,o),g=(0,M.Mg)(h,o),{collapsed:k,setCollapsed:I}=(0,F.u)({initialState:()=>!!b&&(!f&&t.collapsed)}),{expandedItem:N,setExpandedItem:S}=function(){const e=(0,n.useContext)(L);if(e===x)throw new T.i6("DocSidebarItemsExpandedStateProvider");return e}(),Z=function(e){void 0===e&&(e=!k),S(e?null:s),I(e)};return function(e){let{isActive:t,collapsed:a,updateCollapsed:l}=e;const r=(0,T.D9)(t);(0,n.useEffect)((()=>{t&&!r&&a&&l(!1)}),[t,r,a,l])}({isActive:f,collapsed:k,updateCollapsed:Z}),(0,n.useEffect)((()=>{b&&N&&N!==s&&E&&I(!0)}),[b,N,s,I,E]),n.createElement("li",{className:(0,l.Z)(i.k.docs.docSidebarItemCategory,i.k.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":k},p)},n.createElement("div",{className:(0,l.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":g})},n.createElement(A.Z,(0,C.Z)({className:(0,l.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!h&&b,"menu__link--active":f}),onClick:b?e=>{null==a||a(t),h?Z(!1):(e.preventDefault(),Z())}:()=>{null==a||a(t)},"aria-current":g?"page":void 0,"aria-expanded":b?!k:void 0,href:b?null!=v?v:"#":v},d),u),h&&b&&n.createElement(H,{categoryLabel:u,onClick:e=>{e.preventDefault(),Z()}})),n.createElement(F.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:k},n.createElement(G,{items:m,tabIndex:k?-1:0,onItemClick:a,activePath:o,level:c+1})))}var W=a(3919),D=a(8483),R="menuExternalLink_NmtK";function z(e){let{item:t,onItemClick:a,activePath:o,level:c,index:s,...d}=e;const{href:m,label:u,className:b}=t,p=(0,r._F)(t,o),h=(0,W.Z)(m);return n.createElement("li",{className:(0,l.Z)(i.k.docs.docSidebarItemLink,i.k.docs.docSidebarItemLinkLevel(c),"menu__list-item",b),key:u},n.createElement(A.Z,(0,C.Z)({className:(0,l.Z)("menu__link",!h&&R,{"menu__link--active":p}),"aria-current":p?"page":void 0,to:m},h&&{onClick:a?()=>a(t):void 0},d),u,!h&&n.createElement(D.Z,null)))}var K="menuHtmlItem_M9Kj";function U(e){let{item:t,level:a,index:r}=e;const{value:o,defaultStyle:c,className:s}=t;return n.createElement("li",{className:(0,l.Z)(i.k.docs.docSidebarItemLink,i.k.docs.docSidebarItemLinkLevel(a),c&&[K,"menu__list-item"],s),key:r,dangerouslySetInnerHTML:{__html:o}})}function V(e){let{item:t,...a}=e;switch(t.type){case"category":return n.createElement(P,(0,C.Z)({item:t},a));case"html":return n.createElement(U,(0,C.Z)({item:t},a));default:return n.createElement(z,(0,C.Z)({item:t},a))}}function j(e){let{items:t,...a}=e;return n.createElement(w,null,t.map(((e,t)=>n.createElement(V,(0,C.Z)({key:t,item:e,index:t},a)))))}var G=(0,n.memo)(j),Y="menu_SIkG",q="menuWithAnnouncementBar_GW3s";function O(e){let{path:t,sidebar:a,className:r}=e;const o=function(){const{isActive:e}=(0,y.nT)(),[t,a]=(0,n.useState)(e);return(0,b.RF)((t=>{let{scrollY:n}=t;e&&a(0===n)}),[e]),e&&t}();return n.createElement("nav",{className:(0,l.Z)("menu thin-scrollbar",Y,o&&q,r)},n.createElement("ul",{className:(0,l.Z)(i.k.docs.docSidebarMenu,"menu__list")},n.createElement(G,{items:a,activePath:t,level:1})))}var X="sidebar_njMd",J="sidebarWithHideableNavbar_wUlq",Q="sidebarHidden_VK0M",$="sidebarLogo_isFc";function ee(e){let{path:t,sidebar:a,onCollapse:r,isHidden:o}=e;const{navbar:{hideOnScroll:c},docs:{sidebar:{hideable:i}}}=(0,_.L)();return n.createElement("div",{className:(0,l.Z)(X,c&&J,o&&Q)},c&&n.createElement(k.Z,{tabIndex:-1,className:$}),n.createElement(O,{path:t,sidebar:a}),i&&n.createElement(Z,{onClick:r}))}var te=n.memo(ee),ae=a(2961),ne=a(3102);const le=e=>{let{sidebar:t,path:a}=e;const r=(0,ae.e)();return n.createElement("ul",{className:(0,l.Z)(i.k.docs.docSidebarMenu,"menu__list")},n.createElement(G,{items:t,activePath:a,onItemClick:e=>{"category"===e.type&&e.href&&r.toggle(),"link"===e.type&&r.toggle()},level:1}))};function re(e){return n.createElement(ne.Zo,{component:le,props:e})}var oe=n.memo(re);function ce(e){const t=(0,g.i)(),a="desktop"===t||"ssr"===t,l="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(te,e),l&&n.createElement(oe,e))}var ie="expandButton_m80_",se="expandButtonIcon_BlDH";function de(e){let{toggleSidebar:t}=e;return n.createElement("div",{className:ie,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},n.createElement(I,{className:se}))}var me="docSidebarContainer_b6E3",ue="docSidebarContainerHidden_b3ry";function be(e){var t;let{children:a}=e;const l=(0,d.V)();return n.createElement(n.Fragment,{key:null!=(t=null==l?void 0:l.name)?t:"noSidebar"},a)}function pe(e){let{sidebar:t,hiddenSidebarContainer:a,setHiddenSidebarContainer:r}=e;const{pathname:o}=(0,f.TH)(),[c,s]=(0,n.useState)(!1),d=(0,n.useCallback)((()=>{c&&s(!1),r((e=>!e))}),[r,c]);return n.createElement("aside",{className:(0,l.Z)(i.k.docs.docSidebarContainer,me,a&&ue),onTransitionEnd:e=>{e.currentTarget.classList.contains(me)&&a&&s(!0)}},n.createElement(be,null,n.createElement(ce,{sidebar:t,path:o,onCollapse:d,isHidden:c})),c&&n.createElement(de,{toggleSidebar:d}))}var he={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function Ee(e){let{hiddenSidebarContainer:t,children:a}=e;const r=(0,d.V)();return n.createElement("main",{className:(0,l.Z)(he.docMainContainer,(t||!r)&&he.docMainContainerEnhanced)},n.createElement("div",{className:(0,l.Z)("container padding-top--md padding-bottom--lg",he.docItemWrapper,t&&he.docItemWrapperEnhanced)},a))}var ve="docPage__5DB",fe="docsWrapper_BCFX";function ge(e){let{children:t}=e;const a=(0,d.V)(),[l,r]=(0,n.useState)(!1);return n.createElement(m.Z,{wrapperClassName:fe},n.createElement(v,null),n.createElement("div",{className:ve},a&&n.createElement(pe,{sidebar:a.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:r}),n.createElement(Ee,{hiddenSidebarContainer:l},t)))}var _e=a(4972),ke=a(197);function Ce(e){const{versionMetadata:t}=e,a=(0,r.hI)(e);if(!a)return n.createElement(_e.default,null);const{docElement:m,sidebarName:u,sidebarItems:b}=a;return n.createElement(n.Fragment,null,n.createElement(ke.Z,{version:t.version,tag:(0,o.os)(t.pluginId,t.version)}),n.createElement(c.FG,{className:(0,l.Z)(i.k.wrapper.docsPages,i.k.page.docsDocPage,e.versionMetadata.className)},n.createElement(s.q,{version:t},n.createElement(d.b,{name:u,items:b},n.createElement(ge,null,m)))))}},4972:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var n=a(7294),l=a(5999),r=a(1944),o=a(5257);function c(){return n.createElement(n.Fragment,null,n.createElement(r.d,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),n.createElement(o.Z,null,n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}}}]);