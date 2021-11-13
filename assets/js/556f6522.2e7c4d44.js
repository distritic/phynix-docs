"use strict";(self.webpackChunkphynix=self.webpackChunkphynix||[]).push([[657],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=c(n),d=i,v=p["".concat(l,".").concat(d)]||p[d]||u[d]||a;return n?r.createElement(v,s(s({ref:t},m),{},{components:n})):r.createElement(v,s({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9314:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return m},default:function(){return p}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),s=["components"],o={},l="Events",c={unversionedId:"items/events",id:"items/events",isDocsHomePage:!1,title:"Events",description:"Client-side",source:"@site/docs/items/events.md",sourceDirName:"items",slug:"/items/events",permalink:"/docs/items/events",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/items/events.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Commands",permalink:"/docs/items/commands"},next:{title:"Exports",permalink:"/docs/items/exports"}},m=[{value:"Client-side",id:"client-side",children:[{value:"items:getItems",id:"itemsgetitems",children:[],level:3},{value:"items:sendItems",id:"itemssenditems",children:[],level:3}],level:2}],u={toc:m};function p(e){var t=e.components,n=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"events"},"Events"),(0,a.kt)("h2",{id:"client-side"},"Client-side"),(0,a.kt)("h3",{id:"itemsgetitems"},"items:getItems"),(0,a.kt)("p",null,"This event will return a list of available items, and their respective attributes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},'TriggerEvent("items:getItems", function(items)\n  for item, data in pairs(item) do\n    print("Item name: "..item);\n    print("Item label: "..data.label);\n  end\nend);\n')),(0,a.kt)("h3",{id:"itemssenditems"},"items:sendItems"),(0,a.kt)("p",null,"This is a low-level event used to set the current list of available items."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},'TriggerEvent("items:sendItems", items --[[table]]);\n')),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This event should not be used, the server is best left to handle item state."))))}p.isMDXComponent=!0}}]);