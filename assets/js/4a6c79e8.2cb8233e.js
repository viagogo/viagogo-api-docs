"use strict";(self.webpackChunkapi_docs=self.webpackChunkapi_docs||[]).push([[4223],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5514:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={},s="Sorting",p={unversionedId:"overview/sorting",id:"overview/sorting",title:"Sorting",description:"Paginated results can be sorted according to one of more criteria using the",source:"@site/docs/overview/sorting.md",sourceDirName:"overview",slug:"/overview/sorting",permalink:"/docs/overview/sorting",editUrl:"https://github.com/viagogo/viagogo-api-docs/tree/main/docs/overview/sorting.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Pagination",permalink:"/docs/overview/pagination"},next:{title:"Localization",permalink:"/docs/overview/localization"}},l=[],u={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sorting"},"Sorting"),(0,i.kt)("p",null,"Paginated results can be sorted according to one of more criteria using the\n",(0,i.kt)("inlineCode",{parentName:"p"},"sort")," param. Clients can specify sort criteria as a comma-separated list of the\nnames of fields that should be used to sort. The default sort order is ascending\nbut a ",(0,i.kt)("em",{parentName:"p"},"-")," prefix on any sort field specifies a descending sort order."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GET https://api.viagogo.net/inventory/sellerlistings?sort=event_date,-price")),(0,i.kt)("p",null,"The example request above sorts results by ",(0,i.kt)("inlineCode",{parentName:"p"},"event_date")," ascending and then by\n",(0,i.kt)("inlineCode",{parentName:"p"},"price")," descending."))}d.isMDXComponent=!0}}]);