(()=>{var e={};e.id=8984,e.ids=[8984,660,2888],e.modules={1323:(e,t)=>{"use strict";Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},8976:e=>{e.exports={sidebarFixed:"Sidebar_sidebarFixed__DGEHr",sidebarStatic:"Sidebar_sidebarStatic__obGip"}},5441:(e,t,r)=>{"use strict";r.a(e,async(e,i)=>{try{r.r(t),r.d(t,{config:()=>f,default:()=>c,getServerSideProps:()=>h,getStaticPaths:()=>x,getStaticProps:()=>p,reportWebVitals:()=>m,routeModule:()=>v,unstable_getServerProps:()=>j,unstable_getServerSideProps:()=>b,unstable_getStaticParams:()=>S,unstable_getStaticPaths:()=>P,unstable_getStaticProps:()=>g});var s=r(7093),n=r(5244),a=r(1323),l=r(582),u=r(5148),d=r(2739),o=e([u]);u=(o.then?(await o)():o)[0];let c=(0,a.l)(d,"default"),p=(0,a.l)(d,"getStaticProps"),x=(0,a.l)(d,"getStaticPaths"),h=(0,a.l)(d,"getServerSideProps"),f=(0,a.l)(d,"config"),m=(0,a.l)(d,"reportWebVitals"),g=(0,a.l)(d,"unstable_getStaticProps"),P=(0,a.l)(d,"unstable_getStaticPaths"),S=(0,a.l)(d,"unstable_getStaticParams"),j=(0,a.l)(d,"unstable_getServerProps"),b=(0,a.l)(d,"unstable_getServerSideProps"),v=new s.PagesRouteModule({definition:{kind:n.x.PAGES,page:"/Stepper/UserForm",pathname:"/Stepper/UserForm",bundlePath:"",filename:""},components:{App:u.default,Document:l.default},userland:d});i()}catch(e){i(e)}})},8680:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var i=r(997),s=r(6689),n=r(8976),a=r.n(n),l=r(1664),u=r.n(l);let d=()=>{let[e,t]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{let e=()=>{t(window.innerWidth<768)};return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)},[]),i.jsx("div",{className:e?a().sidebarStatic:a().sidebarFixed,children:(0,i.jsxs)("ul",{children:[i.jsx("li",{children:i.jsx(u(),{href:"/form/ContactForm",children:"ContactForm"})}),i.jsx("li",{children:i.jsx(u(),{href:"/form/fileupload",children:"File Upload"})}),i.jsx("li",{children:i.jsx(u(),{href:"/form/Hidden",children:"Multiselct"})}),i.jsx("li",{children:i.jsx(u(),{href:"/form/Pagelist",children:"Pagelist"})}),i.jsx("li",{children:i.jsx(u(),{href:"/form/Postlist",children:"PostList"})}),i.jsx("li",{children:i.jsx(u(),{href:"/Business_financing/financing",children:" Business Financing "})}),i.jsx("li",{children:i.jsx(u(),{href:"/Stepper/Createstepper",children:" MultistepForm "})})]})})}},2739:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var i=r(997);function s({SurveyName:e,Description:t,updateFields:r}){return(0,i.jsxs)("div",{style:n.formContainer,children:[i.jsx("h2",{children:"Survey Details"}),(0,i.jsxs)("div",{style:n.inputGroup,children:[i.jsx("label",{style:n.label,children:"Survey Name"}),i.jsx("input",{autoFocus:!0,required:!0,type:"text",value:e,onChange:e=>r({SurveyName:e.target.value}),style:n.input})]}),(0,i.jsxs)("div",{style:n.inputGroup,children:[i.jsx("label",{style:n.label,children:"Description"}),i.jsx("input",{required:!0,type:"text",value:t,onChange:e=>r({Description:e.target.value}),style:n.input})]})]})}r(6689);let n={formContainer:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:"1.5rem",width:"100%",maxWidth:"600px",margin:"0 auto"},inputGroup:{display:"flex",flexDirection:"column",width:"100%"},label:{fontSize:"1rem",fontWeight:"bold",marginBottom:"0.5rem"},input:{width:"100%",padding:"0.8rem",fontSize:"1rem",borderRadius:"4px",border:"1px solid #ccc"}}},5148:(e,t,r)=>{"use strict";r.a(e,async(e,i)=>{try{r.r(t),r.d(t,{default:()=>d});var s=r(997),n=r(6689),a=r(9915),l=r(1163);r(8680),r(108);var u=e([a]);a=(u.then?(await u)():u)[0];let d=function({Component:e,pageProps:t}){let[r,i]=(0,n.useState)(null),a=(0,l.useRouter)(),u=r&&"/login"!==a.pathname;return null===r?null:(0,s.jsxs)("div",{style:{display:"flex"},children:[u,s.jsx("main",{style:{marginLeft:u?"250px":"0",padding:"20px",width:"100%"},children:s.jsx(e,{...t})})]})};i()}catch(e){i(e)}})},582:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var i=r(997),s=r(6859);function n(){return(0,i.jsxs)(s.Html,{lang:"en",children:[i.jsx(s.Head,{}),(0,i.jsxs)("body",{className:"antialiased",children:[i.jsx(s.Main,{}),i.jsx(s.NextScript,{})]})]})}},108:()=>{},5244:(e,t)=>{"use strict";var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{"use strict";e.exports=require("react")},6405:e=>{"use strict";e.exports=require("react-dom")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},2048:e=>{"use strict";e.exports=require("fs")},5315:e=>{"use strict";e.exports=require("path")},6162:e=>{"use strict";e.exports=require("stream")},1568:e=>{"use strict";e.exports=require("zlib")},9915:e=>{"use strict";e.exports=import("js-cookie")}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),i=t.X(0,[5443,3424,6859],()=>r(5441));module.exports=i})();