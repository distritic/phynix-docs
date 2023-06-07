"use strict";(self.webpackChunkphynix_docs=self.webpackChunkphynix_docs||[]).push([[6662],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(a),p=l,h=m["".concat(s,".").concat(p)]||m[p]||d[p]||i;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:l,r[1]=o;for(var u=2;u<i;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},9738:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=a(7462),l=(a(7294),a(3905));const i={},r="Library",o={unversionedId:"utils/library",id:"utils/library",title:"Library",description:"How to Import",source:"@site/docs/utils/library.md",sourceDirName:"utils",slug:"/utils/library",permalink:"/docs/utils/library",draft:!1,editUrl:"https://github.com/distritic/phynix-docs/tree/main/docs/utils/library.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Exports",permalink:"/docs/utils/exports"},next:{title:"Exports",permalink:"/docs/hud/exports"}},s={},u=[{value:"How to Import",id:"how-to-import",level:2},{value:"Client-side",id:"client-side",level:2},{value:"IsPedDead",id:"ispeddead",level:3},{value:"DrawText3D",id:"drawtext3d",level:3},{value:"DrawMissionText",id:"drawmissiontext",level:3},{value:"DrawTimer",id:"drawtimer",level:3},{value:"DrawCountdown",id:"drawcountdown",level:3},{value:"ShowHelp",id:"showhelp",level:3},{value:"CreateTimer",id:"createtimer",level:3},{value:"CreateBar",id:"createbar",level:3},{value:"CreateBar2",id:"createbar2",level:3},{value:"GetVehicleInFront",id:"getvehicleinfront",level:3},{value:"GetVehicleInDirection",id:"getvehicleindirection",level:3},{value:"KeyboardInput",id:"keyboardinput",level:3},{value:"KeyboardInputNative",id:"keyboardinputnative",level:3},{value:"LoadModel",id:"loadmodel",level:3},{value:"DoesResourceExist",id:"doesresourceexist",level:3},{value:"RequestEntityControl",id:"requestentitycontrol",level:3},{value:"LoadAnimDict",id:"loadanimdict",level:3},{value:"LoadPtfx",id:"loadptfx",level:3},{value:"LoadScaleform",id:"loadscaleform",level:3},{value:"CommaValue",id:"commavalue",level:3},{value:"RemoveWhitespace",id:"removewhitespace",level:3},{value:"WaitForNetId",id:"waitfornetid",level:3},{value:"CopyTable",id:"copytable",level:3},{value:"DictionaryLength",id:"dictionarylength",level:3},{value:"GetVehicleSeatPedIsIn",id:"getvehicleseatpedisin",level:3},{value:"Round",id:"round",level:3},{value:"LinearSearch",id:"linearsearch",level:3},{value:"EnumerateObjects",id:"enumerateobjects",level:3},{value:"EnumeratePeds",id:"enumeratepeds",level:3},{value:"EnumerateVehicles",id:"enumeratevehicles",level:3},{value:"EnumeratePickups",id:"enumeratepickups",level:3},{value:"Server-side",id:"server-side",level:2},{value:"CommaValue",id:"commavalue-1",level:3},{value:"RemoveWhitespace",id:"removewhitespace-1",level:3},{value:"CopyTable",id:"copytable-1",level:3},{value:"DictionaryLength",id:"dictionarylength-1",level:3},{value:"StartsWith",id:"startswith",level:3},{value:"Stringsplit",id:"stringsplit",level:3},{value:"GetVehiclePlate",id:"getvehicleplate",level:3},{value:"Round",id:"round-1",level:3},{value:"LinearSearch",id:"linearsearch-1",level:3},{value:"DoesResourceExist",id:"doesresourceexist-1",level:3}],c={toc:u},m="wrapper";function d(e){let{components:t,...a}=e;return(0,l.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"library"},"Library"),(0,l.kt)("h2",{id:"how-to-import"},"How to Import"),(0,l.kt)("p",null,"In order to use these utilities, you must import the ",(0,l.kt)("inlineCode",{parentName:"p"},"Utils")," object which stores all helper functions. The directory from which the file is imported is different for client and server."),(0,l.kt)("p",null,"To import the library server-side, you must include the following line in your resource ",(0,l.kt)("inlineCode",{parentName:"p"},"fxmanifest.lua")," file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="fxmanifest.lua"',title:'"fxmanifest.lua"'},'server_script "@px_utils/server/lib/common.lua"\n')),(0,l.kt)("p",null,"To import the library client-side, you must include the following line in your resource ",(0,l.kt)("inlineCode",{parentName:"p"},"fxmanifest.lua")," file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="fxmanifest.lua"',title:'"fxmanifest.lua"'},'client_script "@px_utils/client/lib/common.lua"\n')),(0,l.kt)("h2",{id:"client-side"},"Client-side"),(0,l.kt)("h3",{id:"ispeddead"},"IsPedDead"),(0,l.kt)("p",null,"This function will return whether the ped is dead. It should be used over the native ",(0,l.kt)("inlineCode",{parentName:"p"},"IsPedDeadOrDying")," function, as it checks for specific death state from ",(0,l.kt)("inlineCode",{parentName:"p"},"px_death"),". An example can be seen below."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},'local plyPed = PlayerPedId();\nif Utils:IsPedDead(plyPed) then\n  TriggerEvent("core:notify", "You are dead :(");\nend\n')),(0,l.kt)("h3",{id:"drawtext3d"},"DrawText3D"),(0,l.kt)("p",null,"Draw text in three-dimenstional space. This function must be called in a loop."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},"Utils:DrawText3D(x --[[int]], y --[[int]], z --[[int]], distance --[[int]], label --[[string]]);\n-- x: the x-coordinate to draw at\n-- y: the y-coordinate to draw at\n-- z: the z-coordinate to draw at\n-- distance: a distance check from your player ped to the coordinate\n-- label: the text to display\n")),(0,l.kt)("p",null,"Example usage:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},'Citizen.CreateThread(function()\n  local plyPed = PlayerPedId();\n  while true do\n    Citizen.Wait(0);\n\n    local plyPos = GetEntityCoords(plyPed);\n    Utils:DrawText3D(plyPos.x, plyPos.y, plyPos.z, 3.0, "Hello World!");\n  end\nend)\n')),(0,l.kt)("h3",{id:"drawmissiontext"},"DrawMissionText"),(0,l.kt)("p",null,"Draw native mission text."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},"Utils:DrawMissionText(label --[[string]], duration --[[int]]);\n-- label: the text to display\n-- duration: time in seconds to display\n")),(0,l.kt)("h3",{id:"drawtimer"},"DrawTimer"),(0,l.kt)("p",null,"Draw a native countdown, must be called in a loop."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},"Utils:DrawTimer(startTime --[[int]], duration --[[int]], x --[[int]], y --[[int]], label --[[string]]);\n-- startTime: game timer at start of draw\n-- duration: duration of draw in millisecond\n-- x: on-screen x-coordinate of timer\n-- y: on-screen y-coordinate of timer\n-- label: timer label\n")),(0,l.kt)("p",null,"Example usage:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},'Citizen.CreateThread(function()\n  local startTime = GetGameTimer();\n  local duration = 5000; -- milliseconds\n  while GetGameTimer() - startTime < duration do\n    Citizen.Wait(0);\n    Utils:DrawTimer(startTime, duration, 1.42, 1.475, "EXAMPLE");\n  end\nend);\n')),(0,l.kt)("h3",{id:"drawcountdown"},"DrawCountdown"),(0,l.kt)("p",null,"Draw a native timer, must be called in a loop."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},"Utils:DrawCountdown(startTime --[[int]], duration --[[int]], x --[[int]], y --[[int]]);\n-- startTime: game timer at start of draw\n-- duration: duration of draw in millisecond\n-- x: on-screen x-coordinate of timer\n-- y: on-screen y-coordinate of timer\n")),(0,l.kt)("p",null,"Example usage:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},"Citizen.CreateThread(function()\n  local startTime = GetGameTimer();\n  local duration = 5000; -- milliseconds\n  while GetGameTimer() - startTime < duration do\n    Citizen.Wait(0);\n    Utils:DrawCountdown(startTime, duration, 1.42, 1.475);\n  end\nend);\n")),(0,l.kt)("h3",{id:"showhelp"},"ShowHelp"),(0,l.kt)("p",null,"Show a native help notification."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},"Utils:ShowHelp(label --[[string]], sound --[[bool]]);\n-- label: label of help message\n-- sound?: whether a sound should be played\n")),(0,l.kt)("h3",{id:"createtimer"},"CreateTimer"),(0,l.kt)("p",null,"Create a native countdown timer (looped)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},"Utils:CreateTimer(duration --[[int]]);\n-- duration: time of countdown in milliseconds\n")),(0,l.kt)("h3",{id:"createbar"},"CreateBar"),(0,l.kt)("p",null,"Create a native timer bar (looped)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},"Utils:CreateBar(duration --[[int]], label --[[string]], fRun --[[function]]);\n-- duration: duration of timer bar in milliseconds\n-- label: timer bar label\n-- fRun?: a function which will be ran in-loop during draw\n")),(0,l.kt)("h3",{id:"createbar2"},"CreateBar2"),(0,l.kt)("p",null,"Create a native timer bar (looped). This timer will show slightly ",(0,l.kt)("em",{parentName:"p"},"above")," the previous one. Why is it a new function? I don't know."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},"Utils:CreateBar2(duration --[[int]], label --[[string]], fRun --[[function]]);\n-- duration: duration of timer bar in milliseconds\n-- label: timer bar label\n-- fRun?: a function which will be ran in-loop during draw\n")),(0,l.kt)("h3",{id:"getvehicleinfront"},"GetVehicleInFront"),(0,l.kt)("p",null,"Get the vehicle in front of the player ped."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},"local vehicle --[[int]] = Utils:GetVehicleInFront();\n")),(0,l.kt)("h3",{id:"getvehicleindirection"},"GetVehicleInDirection"),(0,l.kt)("p",null,"Get the vehicle in the specified direction by casting a ray."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},"local vehicle --[[int]] = Utils:GetVehicleInDirection(coordFrom --[[vector3]], coordTo --[[vector3]]);\n-- coordFrom: starting position\n-- coordTo: ending position\n")),(0,l.kt)("h3",{id:"keyboardinput"},"KeyboardInput"),(0,l.kt)("p",null,"Create a HUD-based input prompt."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},'local output --[[string]] = Utils:KeyboardInput(textEntry --[[string]], inputText --[[string]], maxLength --[[int]]);\n-- textEntry: heading title for input\n-- inputText: default input text, use "" for none\n-- maxLength: max length of input in character count\n')),(0,l.kt)("h3",{id:"keyboardinputnative"},"KeyboardInputNative"),(0,l.kt)("p",null,"Create a native input prompt."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},'local output --[[string]] = Utils:KeyboardInput(textEntry --[[string]], inputText --[[string]], maxLength --[[int]]);\n-- textEntry: heading title for input\n-- inputText: default input text, use "" for none\n-- maxLength: max length of input in character count\n')),(0,l.kt)("h3",{id:"loadmodel"},"LoadModel"),(0,l.kt)("p",null,"Load a model synchronously. This function will break if the model has not loaded after five seconds."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},"Utils:LoadModel(model --[[int]]);\n-- model: model hash key to load\n")),(0,l.kt)("h3",{id:"doesresourceexist"},"DoesResourceExist"),(0,l.kt)("p",null,"Returns true if a given resource exists, false otherwise."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},"local exists --[[bool]] = Utils:DoesResourceExist(resName --[[string]]);\n-- resName: resource name to check for\n-- exists: true if exists, false if not\n")),(0,l.kt)("h3",{id:"requestentitycontrol"},"RequestEntityControl"),(0,l.kt)("p",null,"Request entity control synchronously. This function will break if control is not gained after five seconds."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},"Utils:RequestEntityControl(entity --[[int]]);\n-- entity: entity to control\n")),(0,l.kt)("h3",{id:"loadanimdict"},"LoadAnimDict"),(0,l.kt)("p",null,"Load an animation dictionary synchronously. This function will break if the dictionary has not loaded after five seconds."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},"Utils:LoadAnimDict(animDict --[[string]]);\n-- animDict: animation dictionary name\n")),(0,l.kt)("h3",{id:"loadptfx"},"LoadPtfx"),(0,l.kt)("p",null,"Load a partice FX dictionary synchronously. This function will break if the dictionary has not loaded after five seconds."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},"Utils:LoadPtfx(ptfxDict --[[string]]);\n-- ptfxDict: particle FX dictionary name\n")),(0,l.kt)("h3",{id:"loadscaleform"},"LoadScaleform"),(0,l.kt)("p",null,"Load a scaleform movie synchronously. This function will break if the scaleform movie has not loaded after five seconds."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},"Utils:LoadScaleform(dict --[[stirng]]);\n-- dict: scaleform name\n")),(0,l.kt)("h3",{id:"commavalue"},"CommaValue"),(0,l.kt)("p",null,"Separate a number using commas."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},"local value --[[string]] = Utils:CommaValue(number --[[int]]);\n-- number: number to format\n")),(0,l.kt)("p",null,"For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},'local value = Utils:CommaValue(1384732);\n-- value = "1,384,732"\n')),(0,l.kt)("h3",{id:"removewhitespace"},"RemoveWhitespace"),(0,l.kt)("p",null,"Remove any whitespace from the front and end of a string."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},"local formatted --[[string]] = Utils:RemoveWhitespace(str --[[string]]);\n-- str: string to format\n")),(0,l.kt)("h3",{id:"waitfornetid"},"WaitForNetId"),(0,l.kt)("p",null,"Wait for a network ID to exist, has a default timeout of 1000 milliseconds."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},"Utils:WaitForNetId(netId --[[int]], timeout --[[int]]);\n-- netId: network Id to wait for\n-- timeout: timeout in milliseconds\n")),(0,l.kt)("h3",{id:"copytable"},"CopyTable"),(0,l.kt)("p",null,"Create a deep copy of a table."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},"local newTable --[[table]] = Utils:CopyTable(sourceTable --[[table]]);\n-- sourceTable: table to be copied\n")),(0,l.kt)("h3",{id:"dictionarylength"},"DictionaryLength"),(0,l.kt)("p",null,"Returns the length of a dictionary."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},"local length --[[int]] = Utils:DictionaryLength(dict --[[table]]);\n-- dict: dictionary to compare to\n-- length: length of the dictionary\n")),(0,l.kt)("h3",{id:"getvehicleseatpedisin"},"GetVehicleSeatPedIsIn"),(0,l.kt)("p",null,"Get the vehicle seat index that the ped is in."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},"local seatIndex --[[int]] = Utils:GetVehicleSeatPedIsIn(vehicle --[[int]], ped --[[int]]);\n-- vehicle: the target vehicle\n-- ped: the target ped\n")),(0,l.kt)("h3",{id:"round"},"Round"),(0,l.kt)("p",null,"Round a number to the specified amount of decimal places."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},"local rounded --[[float]] = Utils:Round(number --[[float]], numDecimalPlaces --[[int]]);\n-- number: the number to be rounded\n-- numDecimalPlaces: the number of decimal places to round to\n")),(0,l.kt)("h3",{id:"linearsearch"},"LinearSearch"),(0,l.kt)("p",null,"Perform a linear search for a given value, and return the index within the array if found."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},"local index --[[int]] = Utils:LinearSearch(value --[[any]], array --[[table]]);\n-- value: value to search for\n-- array: array to search in\n-- index: index found, false if not found\n")),(0,l.kt)("h3",{id:"enumerateobjects"},"EnumerateObjects"),(0,l.kt)("p",null,"Enumerate all existing objects."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},"for object in Utils:EnumerateObjects() do\n  ...\nend\n")),(0,l.kt)("h3",{id:"enumeratepeds"},"EnumeratePeds"),(0,l.kt)("p",null,"Enumerate all existing peds."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},"for ped in Utils:EnumeratePeds() do\n  ...\nend\n")),(0,l.kt)("h3",{id:"enumeratevehicles"},"EnumerateVehicles"),(0,l.kt)("p",null,"Enumerate all existing vehicles."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},"for vehicle in Utils:EnumerateVehicles() do\n  ...\nend\n")),(0,l.kt)("h3",{id:"enumeratepickups"},"EnumeratePickups"),(0,l.kt)("p",null,"Enumerate all existing pickups."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="client/main.lua"',title:'"client/main.lua"'},"for pickup in Utils:EnumeratePickups() do\n  ...\nend\n")),(0,l.kt)("h2",{id:"server-side"},"Server-side"),(0,l.kt)("h3",{id:"commavalue-1"},"CommaValue"),(0,l.kt)("p",null,"Separate a number using commas."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/main.lua"',title:'"server/main.lua"'},"local value --[[string]] = Utils:CommaValue(number --[[int]]);\n-- number: number to format\n")),(0,l.kt)("p",null,"For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/main.lua"',title:'"server/main.lua"'},'local value = Utils:CommaValue(1384732);\n-- value = "1,384,732"\n')),(0,l.kt)("h3",{id:"removewhitespace-1"},"RemoveWhitespace"),(0,l.kt)("p",null,"Remove any whitespace from the front and end of a string."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/main.lua"',title:'"server/main.lua"'},"local formatted --[[string]] = Utils:RemoveWhitespace(str --[[string]]);\n-- str: string to format\n")),(0,l.kt)("h3",{id:"copytable-1"},"CopyTable"),(0,l.kt)("p",null,"Create a deep copy of a table."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/main.lua"',title:'"server/main.lua"'},"local newTable --[[table]] = Utils:CopyTable(sourceTable --[[table]]);\n-- sourceTable: table to be copied\n")),(0,l.kt)("h3",{id:"dictionarylength-1"},"DictionaryLength"),(0,l.kt)("p",null,"Returns the length of a dictionary."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/main.lua"',title:'"server/main.lua"'},"local length --[[int]] = Utils:DictionaryLength(dict --[[table]]);\n-- dict: dictionary to compare to\n-- length: length of the dictionary\n")),(0,l.kt)("h3",{id:"startswith"},"StartsWith"),(0,l.kt)("p",null,"Returns true if a given string starts with the value."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/main.lua"',title:'"server/main.lua"'},"local startsWith --[[bool]] = Utils:StartsWith(str --[[string]], value --[[string]]);\n-- str: string to check\n-- value: value to check for\n-- startsWith: true if string starts with value\n")),(0,l.kt)("h3",{id:"stringsplit"},"Stringsplit"),(0,l.kt)("p",null,"Split a string based on a separator."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/main.lua"',title:'"server/main.lua"'},"local sepStr --[[table]] = Utils:Stringsplit(str --[[string]], sep --[[string]]);\n-- str: string to separate\n-- sep: string separator\n-- sepStr: table of separated values\n")),(0,l.kt)("h3",{id:"getvehicleplate"},"GetVehiclePlate"),(0,l.kt)("p",null,"Get the plate of a vehicle with all whitespace removed."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/main.lua"',title:'"server/main.lua"'},"local plate --[[string]] = Utils:GetVehiclePlate(entity --[[int]]);\n-- entity: vehicle to get the plate of\n-- plate: plate returned from vehicle\n")),(0,l.kt)("h3",{id:"round-1"},"Round"),(0,l.kt)("p",null,"Round a number to the specified amount of decimal places."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/main.lua"',title:'"server/main.lua"'},"local rounded --[[float]] = Utils:Round(number --[[float]], numDecimalPlaces --[[int]]);\n-- number: the number to be rounded\n-- numDecimalPlaces: the number of decimal places to round to\n")),(0,l.kt)("h3",{id:"linearsearch-1"},"LinearSearch"),(0,l.kt)("p",null,"Perform a linear search for a given value, and return the index within the array if found."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/main.lua"',title:'"server/main.lua"'},"local index --[[int]] = Utils:LinearSearch(value --[[any]], array --[[table]]);\n-- value: value to search for\n-- array: array to search in\n-- index: index found, false if not found\n")),(0,l.kt)("h3",{id:"doesresourceexist-1"},"DoesResourceExist"),(0,l.kt)("p",null,"Returns true if a given resource exists, false otherwise."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="server/main.lua"',title:'"server/main.lua"'},"local exists --[[bool]] = Utils:DoesResourceExist(resName --[[string]]);\n-- resName: resource name to check for\n-- exists: true if exists, false if not\n")))}d.isMDXComponent=!0}}]);