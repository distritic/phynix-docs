"use strict";(self.webpackChunkphynix=self.webpackChunkphynix||[]).push([[166],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return y}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),y=i,m=d["".concat(c,".").concat(y)]||d[y]||p[y]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1457:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],s={sidebar_position:1},c="Introduction",l={unversionedId:"inventory/intro",id:"inventory/intro",isDocsHomePage:!1,title:"Introduction",description:"Inventories contain a dictionary of items and metadata, such as total weight or maximum capacity. These are an abstract data structure. Each inventory is uniquely identified by its name, which should be follow some conventions:",source:"@site/docs/inventory/intro.md",sourceDirName:"inventory",slug:"/inventory/intro",permalink:"/docs/inventory/intro",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/inventory/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Library",permalink:"/docs/utils/library"},next:{title:"Commands",permalink:"/docs/inventory/commands"}},u=[{value:"Data Structure",id:"data-structure",children:[],level:2},{value:"Creating an Inventory",id:"creating-an-inventory",children:[{value:"Temporary",id:"temporary",children:[],level:3},{value:"Persistent",id:"persistent",children:[],level:3}],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Inventories contain a dictionary of ",(0,o.kt)("a",{parentName:"p",href:"/docs/items/intro"},"items")," and metadata, such as total weight or maximum capacity. These are an abstract data structure. Each inventory is ",(0,o.kt)("strong",{parentName:"p"},"uniquely")," identified by its name, which should be follow some conventions:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The inventory name should be all-lowercase"),(0,o.kt)("li",{parentName:"ol"},"The inventory name should use dashes (",(0,o.kt)("inlineCode",{parentName:"li"},"-"),") to represent spaces")),(0,o.kt)("h2",{id:"data-structure"},"Data Structure"),(0,o.kt)("p",null,"All inventories loaded in the session are cached by the server. All movement logic happens server-side, meaning there is no reliance on the client to make changes to the inventory structure. A typical inventory object follows this structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  ["rows"] = 5,\n  ["max_weight"] = 100,\n  ["weight"] = 32,\n  ["name"] = "house-4893",\n  ["items"] = {\n    ["0"] = {\n      ["name"] = "pistol",\n      ["label"] = "Pistol",\n      ["itemid"] = 453432689,\n      ["weight"] = 12,\n      ["stackable"] = false,\n      ["quantity"] = 1,\n      ["created"] = 1636664281,\n      ["serial"] = "K1038384"\n    },\n    ["2"] = {\n      ["name"] = "pistolammo",\n      ["label"] = "Pistol Ammo",\n      ["itemid"] = 64,\n      ["weight"] = 5,\n      ["stackable"] = true,\n      ["quantity"] = 4,\n      ["created"] = 1636664362\n    }\n  }\n}\n')),(0,o.kt)("h2",{id:"creating-an-inventory"},"Creating an Inventory"),(0,o.kt)("p",null,"The inventory you might want to create depends on your use case. For instance, if the inventory is only needed for a current session, a temporary inventory should be created - that way unused inventories don't take up space in the database. Fortunately, the framework differentiates inventory types so this is quite simple to achieve."),(0,o.kt)("h3",{id:"temporary"},"Temporary"),(0,o.kt)("p",null,"A temporary inventory can be created using the ",(0,o.kt)("a",{parentName:"p",href:"events#inventorycreatesecondaryinventorytemp"},"inventory:createSecondaryInventoryTemp")," event. "),(0,o.kt)("h3",{id:"persistent"},"Persistent"),(0,o.kt)("p",null,"A persistent inventory can be created using the ",(0,o.kt)("a",{parentName:"p",href:"events#inventorycreateinventory"},"inventory:createInventory")," event."))}d.isMDXComponent=!0}}]);