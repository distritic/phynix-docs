"use strict";(self.webpackChunkphynix_docs=self.webpackChunkphynix_docs||[]).push([[6575],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,h=p["".concat(o,".").concat(d)]||p[d]||m[d]||l;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4558:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:2},i="Methods",s={unversionedId:"business/object/methods",id:"business/object/methods",title:"Methods",description:"get",source:"@site/docs/business/object/methods.md",sourceDirName:"business/object",slug:"/business/object/methods",permalink:"/docs/business/object/methods",draft:!1,editUrl:"https://github.com/distritic/phynix-docs/tree/main/docs/business/object/methods.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Accessing the Object",permalink:"/docs/business/object/get-object"},next:{title:"Attributes",permalink:"/docs/business/object/attributes"}},o={},c=[{value:"get",id:"get",level:2},{value:"set",id:"set",level:2},{value:"hasPerm",id:"hasperm",level:2},{value:"setPaycheck",id:"setpaycheck",level:2},{value:"setPermission",id:"setpermission",level:2},{value:"addEmployee",id:"addemployee",level:2},{value:"promoteEmployee",id:"promoteemployee",level:2},{value:"demoteEmployee",id:"demoteemployee",level:2},{value:"fireEmployee",id:"fireemployee",level:2},{value:"setEmployee",id:"setemployee",level:2},{value:"getPaycheckForEmployee",id:"getpaycheckforemployee",level:2},{value:"getBankList",id:"getbanklist",level:2},{value:"getBankPerms",id:"getbankperms",level:2},{value:"setBankAccount",id:"setbankaccount",level:2},{value:"getBankAccount",id:"getbankaccount",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"methods"},"Methods"),(0,r.kt)("h2",{id:"get"},"get"),(0,r.kt)("p",null,"This function is used to return a field from the business object. The collection of fields which exist for a business are delared in the ",(0,r.kt)("a",{parentName:"p",href:"attributes"},"Attributes")," guide."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/main.lua"',title:'"server/main.lua"'},"local value --[[any]] = business.get(key --[[string]]);\n-- key: the field to return\n")),(0,r.kt)("h2",{id:"set"},"set"),(0,r.kt)("p",null,"This function is used to set a field in the business object. The collection of fields which exist for a business are delared in the ",(0,r.kt)("a",{parentName:"p",href:"attributes"},"Attributes")," guide."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/main.lua"',title:'"server/main.lua"'},"business.set(key --[[string]], value --[[any]]);\n-- key: the field to be updated\n-- value: the new value assigned to the field\n")),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"We do not recommend using this method to update dynamic table fields such as ",(0,r.kt)("inlineCode",{parentName:"p"},"employees"),", as in doing so you could corrupt or invalidate data.")),(0,r.kt)("h2",{id:"hasperm"},"hasPerm"),(0,r.kt)("p",null,"This function will return whether a character has the specified permission."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/main.lua"',title:'"server/main.lua"'},"local hasPerm --[[bool]] = business.hasPerm(char --[[table]], perm --[[string]]);\n")),(0,r.kt)("h2",{id:"setpaycheck"},"setPaycheck"),(0,r.kt)("p",null,"This function will set the specified paycheck amount for a given permission level."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/main.lua"',title:'"server/main.lua"'},"business.setPaycheck(src --[[int]], permLevel --[[int]], amount --[[int]]);\n-- src: player calling function\n")),(0,r.kt)("h2",{id:"setpermission"},"setPermission"),(0,r.kt)("p",null,"This function will set the specified permission level requirement for a given permission type."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/main.lua"',title:'"server/main.lua"'},"business.setPermission(src --[[int]], permLevel --[[int]], newValue --[[int]]);\n-- src: player calling function\n")),(0,r.kt)("h2",{id:"addemployee"},"addEmployee"),(0,r.kt)("p",null,"This function will add a new employee to the business by server ID."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/main.lua"',title:'"server/main.lua"'},"business.addEmployee(src --[[int]], target --[[int]]);\n-- src: player calling function\n")),(0,r.kt)("h2",{id:"promoteemployee"},"promoteEmployee"),(0,r.kt)("p",null,"This function will promote a given employee by character ID."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/main.lua"',title:'"server/main.lua"'},"business.promoteEmployee(src --[[int]], charId --[[int]]);\n-- src: player calling function\n")),(0,r.kt)("h2",{id:"demoteemployee"},"demoteEmployee"),(0,r.kt)("p",null,"This function will demote a given employee by character ID."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/main.lua"',title:'"server/main.lua"'},"business.demoteEmployee(src --[[int]], charId --[[int]]);\n-- src: player calling function\n")),(0,r.kt)("h2",{id:"fireemployee"},"fireEmployee"),(0,r.kt)("p",null,"This function will fire a given employee by character ID."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/main.lua"',title:'"server/main.lua"'},"business.fireEmployee(src --[[int]], charId --[[int]]);\n-- src: player calling function\n")),(0,r.kt)("h2",{id:"setemployee"},"setEmployee"),(0,r.kt)("p",null,"This function will set a given employee permission level by character ID."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/main.lua"',title:'"server/main.lua"'},"business.setEmployee(src --[[int]], charId --[[int]], permLevel --[[int]]);\n-- src: player calling function\n")),(0,r.kt)("h2",{id:"getpaycheckforemployee"},"getPaycheckForEmployee"),(0,r.kt)("p",null,"This function will return whether a character has the specified permission."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/main.lua"',title:'"server/main.lua"'},"local paycheck --[[int]] = business.getPaycheckForEmployee(src --[[int]]);\n-- src: player calling function\n")),(0,r.kt)("h2",{id:"getbanklist"},"getBankList"),(0,r.kt)("p",null,"This function will return an array of ",(0,r.kt)("a",{parentName:"p",href:"/docs/banking/account/attributes/#characters-table"},"characters")," by ID which have access to the business bank account."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/main.lua"',title:'"server/main.lua"'},"local characters --[[table]] = business.getBankList();\n")),(0,r.kt)("h2",{id:"getbankperms"},"getBankPerms"),(0,r.kt)("p",null,"This function will return a dictionary of ",(0,r.kt)("a",{parentName:"p",href:"/docs/banking/account/attributes#characterdata-table"},"characterData")," for the business bank account."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/main.lua"',title:'"server/main.lua"'},"local characterData --[[table]] = business.getBankPerms();\n")),(0,r.kt)("h2",{id:"setbankaccount"},"setBankAccount"),(0,r.kt)("p",null,"This function will store the current business bank account within the object."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/main.lua"',title:'"server/main.lua"'},"business.setBankAccount(account --[[table]]);\n")),(0,r.kt)("h2",{id:"getbankaccount"},"getBankAccount"),(0,r.kt)("p",null,"This function will return the current business bank account."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/main.lua"',title:'"server/main.lua"'},"local account --[[table]] = business.getBankAccount();\n")))}m.isMDXComponent=!0}}]);