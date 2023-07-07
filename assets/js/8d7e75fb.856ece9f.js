"use strict";(self.webpackChunkapi_docs=self.webpackChunkapi_docs||[]).push([[1839],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(r),h=o,f=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3507:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],c={},l="Introduction",s={unversionedId:"overview/introduction",id:"overview/introduction",title:"Introduction",description:"The official viagogo API connects your website or application with the",source:"@site/docs/overview/introduction.md",sourceDirName:"overview",slug:"/overview/introduction",permalink:"/docs/overview/introduction",editUrl:"https://github.com/viagogo/viagogo-api-docs/tree/main/docs/overview/introduction.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",next:{title:"Libraries",permalink:"/docs/overview/libraries"}},u=[{value:"How to use these docs",id:"how-to-use-these-docs",children:[{value:"1. Choose a Client Library",id:"1-choose-a-client-library",children:[],level:3},{value:"2. Authenticate your Application to Access the API",id:"2-authenticate-your-application-to-access-the-api",children:[],level:3},{value:"3. Follow the Guides",id:"3-follow-the-guides",children:[],level:3},{value:"4. Use the API Reference for more details",id:"4-use-the-api-reference-for-more-details",children:[],level:3}],level:2}],p={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"The official viagogo API connects your website or application with the\nworld\u2019s largest ticket marketplace. Your application can use the API to search\nfor and view events, purchase tickets for an event or list tickets on the\nviagogo platform."),(0,i.kt)("p",null,"All API access is over HTTPS, and accessed from the ",(0,i.kt)("inlineCode",{parentName:"p"},"api.viagogo.net")," domain.\nRequest and response payloads are formatted as ",(0,i.kt)("inlineCode",{parentName:"p"},"application/hal+json"),", which is\nbasically just plain old JSON with hyperlinks (see ",(0,i.kt)("a",{parentName:"p",href:"/docs/overview/media-type"},"Media Type"),").\nWe support ",(0,i.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Cross-origin_resource_sharing"},"cross-origin resource sharing")," to allow you to interact\nsecurely with our API from a client-side web application. ",(0,i.kt)("a",{parentName:"p",href:"http://oauth.net/2/"},"OAuth2"),"\nis used for all authentication. All API requests must be authenticated or you\nwill receive a ",(0,i.kt)("inlineCode",{parentName:"p"},"401 Unauthorized")," error response (see\n",(0,i.kt)("a",{parentName:"p",href:"/docs/authentication/"},"Authentication"),")."),(0,i.kt)("h2",{id:"how-to-use-these-docs"},"How to use these docs"),(0,i.kt)("h3",{id:"1-choose-a-client-library"},"1. Choose a Client Library"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/overview/libraries"},"Client libraries")," are available in several languages. Choose the library in your\nprogramming language of choice."),(0,i.kt)("h3",{id:"2-authenticate-your-application-to-access-the-api"},"2. Authenticate your Application to Access the API"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/authentication/"},"Authentication")," to get an access token to access the viagogo API.\nAll API requests must be authenticated or you will receive a ",(0,i.kt)("inlineCode",{parentName:"p"},"401 Unauthorized")," error response."),(0,i.kt)("h3",{id:"3-follow-the-guides"},"3. Follow the Guides"),(0,i.kt)("p",null,"Follow our end-to-end ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/"},"Guides")," on integrating with the viagogo API for common\nuse cases."),(0,i.kt)("h3",{id:"4-use-the-api-reference-for-more-details"},"4. Use the API Reference for more details"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/api-reference/inventory"},"API Reference")," gives a complete reference to our HTTP APIs that you\ncan use to interact with the viagogo platform."))}d.isMDXComponent=!0}}]);