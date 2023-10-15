"use strict";(self.webpackChunkkx_ow_o_manual_website=self.webpackChunkkx_ow_o_manual_website||[]).push([[35],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>m});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),c=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=c(e.components);return r.createElement(s.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},h=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),h=n,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return t?r.createElement(m,o(o({ref:a},p),{},{components:t})):r.createElement(m,o({ref:a},p))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=h;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},5106:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(7462),n=(t(7294),t(3905));const i={sidebar_position:1},o="Texture Layer : Albedo Layer / Main Layer",l={unversionedId:"Fragment-Shader/ForwardBase/Texture-Main",id:"Fragment-Shader/ForwardBase/Texture-Main",title:"Texture Layer : Albedo Layer / Main Layer",description:"The basic texture or albedo of the shader",source:"@site/docs/02_Fragment-Shader/01_ForwardBase/01_Texture-Main.md",sourceDirName:"02_Fragment-Shader/01_ForwardBase",slug:"/Fragment-Shader/ForwardBase/Texture-Main",permalink:"/KwazyXhaderOwO-Manual/docs/Fragment-Shader/ForwardBase/Texture-Main",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/02_Fragment-Shader/01_ForwardBase/01_Texture-Main.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"FowardBase Pass",permalink:"/KwazyXhaderOwO-Manual/docs/category/fowardbase-pass"},next:{title:"Texture Layer : Distort Layer",permalink:"/KwazyXhaderOwO-Manual/docs/Fragment-Shader/ForwardBase/Texture-Distort"}},s={},c=[{value:"Alpha Check",id:"alpha-check",level:2},{value:"Distance Fade",id:"distance-fade",level:2},{value:"Fresnel Influence",id:"fresnel-influence",level:2},{value:"Vector Color Influence",id:"vector-color-influence",level:2},{value:"Force Afwa / Force Alphas",id:"force-afwa--force-alphas",level:2}],p={toc:c},d="wrapper";function u(e){let{components:a,...i}=e;return(0,n.kt)(d,(0,r.Z)({},p,i,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"texture-layer--albedo-layer--main-layer"},"Texture Layer : Albedo Layer / Main Layer"),(0,n.kt)("p",null,"The basic texture or albedo of the shader"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img",src:t(8237).Z,width:"601",height:"724"})),(0,n.kt)("h2",{id:"alpha-check"},"Alpha Check"),(0,n.kt)("p",null,"this is mainly used to make sure if a pixel has an alpha of 0, then the color for that pixel should be black."),(0,n.kt)("admonition",{title:"I.E.",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"if ",(0,n.kt)("inlineCode",{parentName:"p"},"pixel.a <= 0")," then ",(0,n.kt)("inlineCode",{parentName:"p"},"pixel.rgba = float4(0,0,0,0)"))),(0,n.kt)("admonition",{title:"JUST IN CASE",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"from normal stand point, when a pixel has an alpha of 0, we generally don't care, but in shader, they do matter as their color can be any color despite of their alpha channel being zero"),(0,n.kt)("p",{parentName:"admonition"},"example: say a pixel has the rgba color : (255,200,0,0)")),(0,n.kt)("h2",{id:"distance-fade"},"Distance Fade"),(0,n.kt)("p",null,"Based on the camera position and distance, the alpha channel of the pixel will be calculated based on the User input :"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"NearValue   ")," : When the camera is near, what should be the alpha value ?"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"NearDistance")," : How near is near ?"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"FarDistance ")," : How far is far ?"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"FarValue    ")," : When the camera is far, what should be the alpha value ?")),(0,n.kt)("admonition",{title:"Example  ",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"We can use this to make fading walls, some familiar examples are : "),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Dimension Structure - R08 - Konnekt (blocking wall on the bridge for locked Bedrooms)  "),(0,n.kt)("li",{parentName:"ul"},"Chinese Bar 6.0 (the invisible wall at the outside environment)",(0,n.kt)("br",{parentName:"li"}),(0,n.kt)("img",{alt:"image",src:t(6910).Z,width:"400",height:"400"}),(0,n.kt)("img",{alt:"image",src:t(7085).Z,width:"400",height:"400"})))),(0,n.kt)("p",null,"\u200b"),(0,n.kt)("h2",{id:"fresnel-influence"},"Fresnel Influence"),(0,n.kt)("p",null,"In this section we can decide How much is this Texture layer will be influenced by the Fresnel Layer."),(0,n.kt)("h2",{id:"vector-color-influence"},"Vector Color Influence"),(0,n.kt)("p",null,"Similiar to the ",(0,n.kt)("inlineCode",{parentName:"p"},"Fresnel Influence")," Sliders"),(0,n.kt)("h2",{id:"force-afwa--force-alphas"},"Force Afwa / Force Alphas"),(0,n.kt)("p",null,"for both the ",(0,n.kt)("inlineCode",{parentName:"p"},"Fresnel")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"Color Vector")," Layers, they might produce a transparent color result (i.e. alpha = 0 or alpha < 1), if we want the mesh to be not transparent, we can crank up the slider to make sure it is opaque. "),(0,n.kt)("p",null,"If you still don't quite get it, it is okay, we can leave this thing here for a while, just keep in mind that this parameter exist.\nBecause this will be covered in other parts of this manual."))}u.isMDXComponent=!0},8237:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/Interface_Albedo-b5d21723b6a4a852a9c961026b4dfb0c.png"},6910:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/VRC_distanceFade_01-93518b9f67f8c80566f413903c2f8eb0.png"},7085:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/VRC_distanceFade_03-ec9e904f61d7114aaa45615965d107d5.png"}}]);