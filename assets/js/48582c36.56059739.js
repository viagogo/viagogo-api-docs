"use strict";(self.webpackChunkapi_docs=self.webpackChunkapi_docs||[]).push([[1072],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return v}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=o.createContext({}),p=function(e){var n=o.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=p(e.components);return o.createElement(u.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(t),v=r,m=d["".concat(u,".").concat(v)]||d[v]||l[v]||i;return t?o.createElement(m,a(a({ref:n},s),{},{components:t})):o.createElement(m,a({ref:n},s))}));function v(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=t[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6883:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var o=t(7462),r=t(3366),i=(t(7294),t(3905)),a=["components"],c={},u="Sandbox Environment",p={unversionedId:"overview/sandbox-environment",id:"overview/sandbox-environment",title:"Sandbox Environment",description:"viagogo API is supported in two environments. You can use our sandbox",source:"@site/docs/overview/sandbox-environment.md",sourceDirName:"overview",slug:"/overview/sandbox-environment",permalink:"/viagogo-api-docs/docs/overview/sandbox-environment",editUrl:"https://github.com/viagogo/viagogo-api-docs/tree/main/docs/overview/sandbox-environment.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Media Type",permalink:"/viagogo-api-docs/docs/overview/media-type"},next:{title:"Basic Types",permalink:"/viagogo-api-docs/docs/overview/basic-types"}},s=[],l={toc:s};function d(e){var n=e.components,t=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sandbox-environment"},"Sandbox Environment"),(0,i.kt)("p",null,"viagogo API is supported in two environments. You can use our ",(0,i.kt)("em",{parentName:"p"},"sandbox"),"\nenvironment for testing purposes, before moving to the ",(0,i.kt)("em",{parentName:"p"},"production"),". Use your\nsandbox credentials to make calls to the sandbox environment. When you're set\nto go live, use your production credentials to make calls to the production\nenvironment."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Sandbox API root endpoint: ",(0,i.kt)("inlineCode",{parentName:"li"},"https://sandbox.api.viagogo.net/")),(0,i.kt)("li",{parentName:"ul"},"Sandbox OAuth2 token endpoint: ",(0,i.kt)("inlineCode",{parentName:"li"},"https://sandbox.account.viagogo.com/oauth2/token"))))}d.isMDXComponent=!0}}]);