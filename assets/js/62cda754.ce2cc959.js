"use strict";(self.webpackChunkkx_ow_o_manual_website=self.webpackChunkkx_ow_o_manual_website||[]).push([[97],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>N});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),m=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=m(t.components);return n.createElement(p.Provider,{value:e},t.children)},u="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),u=m(a),s=r,N=u["".concat(p,".").concat(s)]||u[s]||k[s]||l;return a?n.createElement(N,i(i({ref:e},d),{},{components:a})):n.createElement(N,i({ref:e},d))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[u]="string"==typeof t?t:r,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},9998:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:2},i="UV Transform - Basics",o={unversionedId:"Global-Concept/UV-Transforms-Basic",id:"Global-Concept/UV-Transforms-Basic",title:"UV Transform - Basics",description:"What is a UV Transform ?",source:"@site/docs/01_Global-Concept/02_UV-Transforms-Basic.md",sourceDirName:"01_Global-Concept",slug:"/Global-Concept/UV-Transforms-Basic",permalink:"/KwazyXhaderOwO-Manual/docs/Global-Concept/UV-Transforms-Basic",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/01_Global-Concept/02_UV-Transforms-Basic.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Reading Textures",permalink:"/KwazyXhaderOwO-Manual/docs/Global-Concept/Reading-Textures"},next:{title:"UV Transform - Details",permalink:"/KwazyXhaderOwO-Manual/docs/Global-Concept/UV-Transforms-Details"}},p={},m=[{value:"What is a UV Transform ?",id:"what-is-a-uv-transform-",level:2},{value:"Chained UV Transform",id:"chained-uv-transform",level:2},{value:"UV Transform - Operations",id:"uv-transform---operations",level:2},{value:"Types of UVTransforms",id:"types-of-uvtransforms",level:2},{value:"Regular Operation",id:"regular-operation",level:3},{value:"Collapse Operation",id:"collapse-operation",level:3},{value:"Chaotic Operation",id:"chaotic-operation",level:3}],d={toc:m},u="wrapper";function k(t){let{components:e,...l}=t;return(0,r.kt)(u,(0,n.Z)({},d,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"uv-transform---basics"},"UV Transform - Basics"),(0,r.kt)("h2",{id:"what-is-a-uv-transform-"},"What is a UV Transform ?"),(0,r.kt)("p",null,"a UV Transform is a function that takes a UV coordinate and returns a new UV coordinate."),(0,r.kt)("p",null,"Different operations will cause different effects"),(0,r.kt)("admonition",{title:"In Other Words",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"UVTransform(inUV,Operation) = outUV")),(0,r.kt)("admonition",{title:"Example",type:"note"},(0,r.kt)("p",{parentName:"admonition"},'some examples that we usually see are "Shifting", "Rotation", "Scalling"')),(0,r.kt)("h2",{id:"chained-uv-transform"},"Chained UV Transform"),(0,r.kt)("p",null,"since a single UVTransform can be treated as a function, we can have multiple UVTransform functions chained in a line"),(0,r.kt)("p",null,"Each Operation is associated with an ID,\nthe ID is used to tell the shader what operation it is."),(0,r.kt)("admonition",{title:"Example",type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},'"Shift"'))," has an ID ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},'"12"')),"  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},'"Rotation"'))," has an ID ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},'"13"')),"  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},'"Scalling"'))," has an ID ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},'"14"')),"  "))),(0,r.kt)("p",null,"Here's a screenshot of how a chain of UVTransform might look like on a Unity Inspector"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:a(6908).Z,width:"497",height:"464"})),(0,r.kt)("p",null,"Each Transform Vec Vector ",(0,r.kt)("inlineCode",{parentName:"p"},"(Twansfowm Vec N)")," will hold the parameters of a UV Transform Chain segment, but without defining which Operation it is, a Transform Vector by itself is useless."),(0,r.kt)("p",null,"In this case we will use ",(0,r.kt)("inlineCode",{parentName:"p"},"Transform Mode 0")," Vector and ",(0,r.kt)("inlineCode",{parentName:"p"},"Transform Mode 1")," Vector to tell the shader what are the operations for each Transform Vec Vectors"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"This Column will Control"),(0,r.kt)("th",{parentName:"tr",align:null},"the Transform Vec Vector"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TransformMode0.x")," Vector"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TransformVec0")," Vector")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TransformMode0.y")," Vector"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TransformVec1")," Vector")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TransformMode0.z")," Vector"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TransformVec2")," Vector")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TransformMode0.w")," Vector"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TransformVec3")," Vector")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TransformMode1.x")," Vector"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TransformVec4")," Vector")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TransformMode1.y")," Vector"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TransformVec5")," Vector")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TransformMode1.z")," Vector"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TransformVec6")," Vector")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TransformMode1.w")," Vector"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"TransformVec7")," Vector")))),(0,r.kt)("admonition",{title:"Example",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Let's say you want ",(0,r.kt)("inlineCode",{parentName:"p"},"TransformVec4"),' to have the operation "Rotation" (in KXOwO, the operation "Rotation" has an ID "12"), you will type "12" into ',(0,r.kt)("inlineCode",{parentName:"p"},"TransformMode1.x"))),(0,r.kt)("admonition",{title:"Example 2",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"althougth the screenshot is deprecated, the main concept is the same.\n",(0,r.kt)("inlineCode",{parentName:"p"},"TransformMode0.x"),' , in this case, it holds the ID number "3", tells the shader to treat ',(0,r.kt)("inlineCode",{parentName:"p"},"TransformVec0"),"  as the UVTransformation with the ID# 3 (in this case, Scaling)")),(0,r.kt)("admonition",{title:"Just In Case  ",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"different operation order will cause different effects,",(0,r.kt)("br",{parentName:"p"}),"\n",'"a rotation then a shift" is different from "a shift then a rotation"  '),(0,r.kt)("p",{parentName:"admonition"},"In most other popular shaders, they provide a fixed operation order transform system, like Unity Standard Shader, Poiyomi Shaders, Mochie Shaders, etc")),(0,r.kt)("h2",{id:"uv-transform---operations"},"UV Transform - Operations"),(0,r.kt)("p",null,"Here will have a table that shows the ID# and parameters of each type of UVTransform function."),(0,r.kt)("admonition",{title:"Keep In Mind",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"a UVTransform function will not move a texture around,\ninstead, it moves the UV coordinates around")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Operation"),(0,r.kt)("th",{parentName:"tr",align:null},"Mapping Type"),(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"Vec.X"),(0,r.kt)("th",{parentName:"tr",align:null},"Vec.Y"),(0,r.kt)("th",{parentName:"tr",align:null},"Vec.Z"),(0,r.kt)("th",{parentName:"tr",align:null},"Vec.W"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ignore"),(0,r.kt)("td",{parentName:"tr",align:null},"Regular"),(0,r.kt)("td",{parentName:"tr",align:null},"00"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Fraction Chop"),(0,r.kt)("td",{parentName:"tr",align:null},"Collapse"),(0,r.kt)("td",{parentName:"tr",align:null},"11"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Offset"),(0,r.kt)("td",{parentName:"tr",align:null},"Regular"),(0,r.kt)("td",{parentName:"tr",align:null},"12"),(0,r.kt)("td",{parentName:"tr",align:null},"Shift X"),(0,r.kt)("td",{parentName:"tr",align:null},"Shift Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Scroll X"),(0,r.kt)("td",{parentName:"tr",align:null},"Scroll Y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rotation"),(0,r.kt)("td",{parentName:"tr",align:null},"Regular"),(0,r.kt)("td",{parentName:"tr",align:null},"13"),(0,r.kt)("td",{parentName:"tr",align:null},"Angle"),(0,r.kt)("td",{parentName:"tr",align:null},"Roll"),(0,r.kt)("td",{parentName:"tr",align:null},"Center Point X"),(0,r.kt)("td",{parentName:"tr",align:null},"Center Point Y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Scale Tangent"),(0,r.kt)("td",{parentName:"tr",align:null},"Regular"),(0,r.kt)("td",{parentName:"tr",align:null},"14"),(0,r.kt)("td",{parentName:"tr",align:null},"Scale X"),(0,r.kt)("td",{parentName:"tr",align:null},"Scale Y"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Edge Skew X"),(0,r.kt)("td",{parentName:"tr",align:null},"Regular"),(0,r.kt)("td",{parentName:"tr",align:null},"15"),(0,r.kt)("td",{parentName:"tr",align:null},"Skew Point Down"),(0,r.kt)("td",{parentName:"tr",align:null},"Skew Point Up"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Edge Skew Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Regular"),(0,r.kt)("td",{parentName:"tr",align:null},"16"),(0,r.kt)("td",{parentName:"tr",align:null},"Skew Point Left"),(0,r.kt)("td",{parentName:"tr",align:null},"Skew Point Right"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Circle Projection X"),(0,r.kt)("td",{parentName:"tr",align:null},"Regular"),(0,r.kt)("td",{parentName:"tr",align:null},"17"),(0,r.kt)("td",{parentName:"tr",align:null},"Circle Position"),(0,r.kt)("td",{parentName:"tr",align:null},"Circle Radius"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Circle Projection Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Regular"),(0,r.kt)("td",{parentName:"tr",align:null},"18"),(0,r.kt)("td",{parentName:"tr",align:null},"Circle Position"),(0,r.kt)("td",{parentName:"tr",align:null},"Circle Radius"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Pixelate"),(0,r.kt)("td",{parentName:"tr",align:null},"Collapse"),(0,r.kt)("td",{parentName:"tr",align:null},"21"),(0,r.kt)("td",{parentName:"tr",align:null},"Column Quantity"),(0,r.kt)("td",{parentName:"tr",align:null},"Row Quantity"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Distance Scale"),(0,r.kt)("td",{parentName:"tr",align:null},"Regular"),(0,r.kt)("td",{parentName:"tr",align:null},"22"),(0,r.kt)("td",{parentName:"tr",align:null},"Center Point X"),(0,r.kt)("td",{parentName:"tr",align:null},"Center Point Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Gradient"),(0,r.kt)("td",{parentName:"tr",align:null},"Offset")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Radial Collapse"),(0,r.kt)("td",{parentName:"tr",align:null},"Collapse"),(0,r.kt)("td",{parentName:"tr",align:null},"23"),(0,r.kt)("td",{parentName:"tr",align:null},"Center Point X"),(0,r.kt)("td",{parentName:"tr",align:null},"Center Point Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Angle"),(0,r.kt)("td",{parentName:"tr",align:null},"Roll")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Circle Collapse"),(0,r.kt)("td",{parentName:"tr",align:null},"Collapse"),(0,r.kt)("td",{parentName:"tr",align:null},"24"),(0,r.kt)("td",{parentName:"tr",align:null},"Center Point X"),(0,r.kt)("td",{parentName:"tr",align:null},"Center Point Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Radius"),(0,r.kt)("td",{parentName:"tr",align:null},"Mode")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Line Collapse"),(0,r.kt)("td",{parentName:"tr",align:null},"Collapse"),(0,r.kt)("td",{parentName:"tr",align:null},"25"),(0,r.kt)("td",{parentName:"tr",align:null},"Line Slope"),(0,r.kt)("td",{parentName:"tr",align:null},"Line Y-Intercept"),(0,r.kt)("td",{parentName:"tr",align:null},"Low Region Angle"),(0,r.kt)("td",{parentName:"tr",align:null},"High Region Angle")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Stochastic Ring"),(0,r.kt)("td",{parentName:"tr",align:null},"Chaotic"),(0,r.kt)("td",{parentName:"tr",align:null},"31"),(0,r.kt)("td",{parentName:"tr",align:null},"Radius"),(0,r.kt)("td",{parentName:"tr",align:null},"Iteration"),(0,r.kt)("td",{parentName:"tr",align:null},"Instruction Offset"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h2",{id:"types-of-uvtransforms"},"Types of UVTransforms"),(0,r.kt)("p",null,"in KXOwO, we have 3 types of Operations :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Regular"),(0,r.kt)("li",{parentName:"ul"},"Collapse"),(0,r.kt)("li",{parentName:"ul"},"Chaotic")),(0,r.kt)("h3",{id:"regular-operation"},"Regular Operation"),(0,r.kt)("p",null,"if an operation is Regular,\nthen it maps all inUVs to all outUVs such that\nno outUV will have multiple inUVs\nmeaning you can find a reverse operation to undo the work"),(0,r.kt)("admonition",{title:"Example  ",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"to make things simple, let's build an operation : "),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"Plus(input,amount) = output"),(0,r.kt)("br",{parentName:"p"}),"\n","such that",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"output = input + amount")),(0,r.kt)("p",{parentName:"admonition"},"if amount = 3, then we will have"),(0,r.kt)("table",{parentName:"admonition"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"input"),(0,r.kt)("th",{parentName:"tr",align:null},"0"),(0,r.kt)("th",{parentName:"tr",align:null},"1"),(0,r.kt)("th",{parentName:"tr",align:null},"2"),(0,r.kt)("th",{parentName:"tr",align:null},"3"),(0,r.kt)("th",{parentName:"tr",align:null},"n"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"output"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"n+3")))),(0,r.kt)("p",{parentName:"admonition"},"if we are given an output = 18",(0,r.kt)("br",{parentName:"p"}),"\n","then we can derive that  "),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"output = input + amount\noutput - amount = input\n18 - 3 = input\n15 = input\n")),(0,r.kt)("p",{parentName:"admonition"},"here we can get 15 back from 18, therefore this operation is regular  ")),(0,r.kt)("h3",{id:"collapse-operation"},"Collapse Operation"),(0,r.kt)("p",null,"A Collapse Operation will collapse multiple inUVs onto the same outUVs,\nand thus when given the outUV, we are unable to reconstruct the orignal inUV"),(0,r.kt)("admonition",{title:"Example  ",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"let make a collapse operation",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Remainder(input,divisor) = output"),(0,r.kt)("br",{parentName:"p"}),"\n","such that",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"output = input % divisor"),"  "),(0,r.kt)("p",{parentName:"admonition"},"if ",(0,r.kt)("inlineCode",{parentName:"p"},"divisor")," = 3, then we can have :"),(0,r.kt)("table",{parentName:"admonition"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"input"),(0,r.kt)("th",{parentName:"tr",align:null},"0"),(0,r.kt)("th",{parentName:"tr",align:null},"1"),(0,r.kt)("th",{parentName:"tr",align:null},"2"),(0,r.kt)("th",{parentName:"tr",align:null},"3"),(0,r.kt)("th",{parentName:"tr",align:null},"4"),(0,r.kt)("th",{parentName:"tr",align:null},"5"),(0,r.kt)("th",{parentName:"tr",align:null},"6"),(0,r.kt)("th",{parentName:"tr",align:null},"7"),(0,r.kt)("th",{parentName:"tr",align:null},"8"),(0,r.kt)("th",{parentName:"tr",align:null},"9"),(0,r.kt)("th",{parentName:"tr",align:null},"0"),(0,r.kt)("th",{parentName:"tr",align:null},"11"),(0,r.kt)("th",{parentName:"tr",align:null},"12"),(0,r.kt)("th",{parentName:"tr",align:null},"3n"),(0,r.kt)("th",{parentName:"tr",align:null},"3n+1"),(0,r.kt)("th",{parentName:"tr",align:null},"3n+2"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"output"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"2")))),(0,r.kt)("p",{parentName:"admonition"},"as you can see, ",(0,r.kt)("inlineCode",{parentName:"p"},"0,3,6,9,...,3n")," have been mapped to ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),",\nIf you are given ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," as the output, you are unable to find what is the original input, because it could be ",(0,r.kt)("inlineCode",{parentName:"p"},"0,3,6,9,...,3n"),"  ")),(0,r.kt)("h3",{id:"chaotic-operation"},"Chaotic Operation"),(0,r.kt)("p",null,"an operation is Chaotic if a small change for the input will cause a huge change in the output.",(0,r.kt)("br",{parentName:"p"}),"\n","Also this type of operation is meant to generate patterns/output that looks randomized (but they are actually not randomized)"),(0,r.kt)("admonition",{title:"Example 1",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Usually a pseudo random number generator is a nice example, if the given seed is different, then the results it is going to output will be totally different.")),(0,r.kt)("admonition",{title:"Example 2  ",type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"hashing algorithyms")," take a string as an input, jumbled it up in some way (inputs are passed by value by default), then gives you an output.  "),(0,r.kt)("p",{parentName:"admonition"},"If you give the algorithym the same input again, it will output the same output, but if you change a single bit in the input, the output will be drammatically different.  "),(0,r.kt)("p",{parentName:"admonition"},"say we are using SHA256, and we have 2 inputs ",(0,r.kt)("inlineCode",{parentName:"p"},'"hewo"')," and ",(0,r.kt)("inlineCode",{parentName:"p"},'"newo"'),", you can see how different the outputs are although the inputs only has a 1 letter difference."),(0,r.kt)("table",{parentName:"admonition"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Input"),(0,r.kt)("th",{parentName:"tr",align:null},"Output"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"hewo")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"b36c51f5b78dd8ffa29c0945f2cba276eefcfde340c9494ce503ac40154447f4"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"newo")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"eacac3da159fa7dea8c41136ced322051e0cd2af3f671cbe32240f4371df902c")))))),(0,r.kt)("admonition",{title:"Just In Case  ",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"just because an operation is chaotic, it doesn't mean it is a collapse operation as well, a chaotic operation might can also be regular")))}k.isMDXComponent=!0},6908:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/Interface-UVTransform-Chain-25e7ad9d6c1e93e20bcff184487d59e4.png"}}]);