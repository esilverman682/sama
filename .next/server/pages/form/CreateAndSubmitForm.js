(()=>{var e={};e.id=9163,e.ids=[9163,660,2888],e.modules={1323:(e,t)=>{"use strict";Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},8976:e=>{e.exports={sidebarFixed:"Sidebar_sidebarFixed__DGEHr",sidebarStatic:"Sidebar_sidebarStatic__obGip"}},7655:(e,t,r)=>{"use strict";r.a(e,async(e,i)=>{try{r.r(t),r.d(t,{config:()=>h,default:()=>c,getServerSideProps:()=>f,getStaticPaths:()=>m,getStaticProps:()=>p,reportWebVitals:()=>x,routeModule:()=>y,unstable_getServerProps:()=>j,unstable_getServerSideProps:()=>v,unstable_getStaticParams:()=>S,unstable_getStaticPaths:()=>g,unstable_getStaticProps:()=>b});var s=r(7093),a=r(5244),n=r(1323),l=r(582),d=r(5148),o=r(2772),u=e([d,o]);[d,o]=u.then?(await u)():u;let c=(0,n.l)(o,"default"),p=(0,n.l)(o,"getStaticProps"),m=(0,n.l)(o,"getStaticPaths"),f=(0,n.l)(o,"getServerSideProps"),h=(0,n.l)(o,"config"),x=(0,n.l)(o,"reportWebVitals"),b=(0,n.l)(o,"unstable_getStaticProps"),g=(0,n.l)(o,"unstable_getStaticPaths"),S=(0,n.l)(o,"unstable_getStaticParams"),j=(0,n.l)(o,"unstable_getServerProps"),v=(0,n.l)(o,"unstable_getServerSideProps"),y=new s.PagesRouteModule({definition:{kind:a.x.PAGES,page:"/form/CreateAndSubmitForm",pathname:"/form/CreateAndSubmitForm",bundlePath:"",filename:""},components:{App:d.default,Document:l.default},userland:o});i()}catch(e){i(e)}})},8680:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var i=r(997),s=r(6689),a=r(8976),n=r.n(a),l=r(1664),d=r.n(l);let o=()=>{let[e,t]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{let e=()=>{t(window.innerWidth<768)};return window.addEventListener("resize",e),e(),()=>window.removeEventListener("resize",e)},[]),i.jsx("div",{className:e?n().sidebarStatic:n().sidebarFixed,children:(0,i.jsxs)("ul",{children:[i.jsx("li",{children:i.jsx(d(),{href:"/form/ContactForm",children:"ContactForm"})}),i.jsx("li",{children:i.jsx(d(),{href:"/form/fileupload",children:"File Upload"})}),i.jsx("li",{children:i.jsx(d(),{href:"/form/Hidden",children:"Multiselct"})}),i.jsx("li",{children:i.jsx(d(),{href:"/form/Pagelist",children:"Pagelist"})}),i.jsx("li",{children:i.jsx(d(),{href:"/form/Postlist",children:"PostList"})}),i.jsx("li",{children:i.jsx(d(),{href:"/Business_financing/financing",children:" Business Financing "})}),i.jsx("li",{children:i.jsx(d(),{href:"/Stepper/Createstepper",children:" MultistepForm "})})]})})}},5148:(e,t,r)=>{"use strict";r.a(e,async(e,i)=>{try{r.r(t),r.d(t,{default:()=>o});var s=r(997),a=r(6689),n=r(9915),l=r(1163);r(8680),r(108);var d=e([n]);n=(d.then?(await d)():d)[0];let o=function({Component:e,pageProps:t}){let[r,i]=(0,a.useState)(null),n=(0,l.useRouter)(),d=r&&"/login"!==n.pathname;return null===r?null:(0,s.jsxs)("div",{style:{display:"flex"},children:[d,s.jsx("main",{style:{marginLeft:d?"250px":"0",padding:"20px",width:"100%"},children:s.jsx(e,{...t})})]})};i()}catch(e){i(e)}})},582:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var i=r(997),s=r(6859);function a(){return(0,i.jsxs)(s.Html,{lang:"en",children:[i.jsx(s.Head,{}),(0,i.jsxs)("body",{className:"antialiased",children:[i.jsx(s.Main,{}),i.jsx(s.NextScript,{})]})]})}},2772:(e,t,r)=>{"use strict";r.a(e,async(e,i)=>{try{r.r(t),r.d(t,{default:()=>d});var s=r(997),a=r(6689),n=r(9648),l=e([n]);n=(l.then?(await l)():l)[0];let d=()=>{let[e,t]=(0,a.useState)(null),[r,i]=(0,a.useState)({}),[l,d]=(0,a.useState)(""),[o,u]=(0,a.useState)(null),[c,p]=(0,a.useState)(!1),[m,f]=(0,a.useState)(null),h=`
    mutation CreateGravityForm($title: String!, $description: String, $fields: [GFFieldInput]!) {
      createGravityForm(input: {
        title: $title,
        description: $description,
        fields: $fields
      }) {
        gravityForm {
          id
          title
          fields {
            id
            label
            type
            required
          }
        }
      }
    }
  `,x=`
    mutation SubmitGravityForm($formId: Int!, $fieldValues: [GFFieldValueInput]!) {
      submitGravityForm(input: {
        formId: $formId,
        fieldValues: $fieldValues
      }) {
        isValid
        entry {
          id
        }
      }
    }
  `,b=async()=>{p(!0),f(null);try{let e=await n.default.post(process.env.NEXT_PUBLIC_STAGING_URL,{query:h,variables:{title:l,description:"Form Description",fields:[{type:"text",label:"First Name",id:1,required:!0},{type:"email",label:"Email",id:2,required:!0}]}},{headers:{"Content-Type":"application/json"}}),r=e.data?.data?.createGravityForm?.gravityForm;t(r)}catch(e){console.error("Error creating form:",e.response?.data||e.message),f("Error creating the form.")}finally{p(!1)}},g=e=>{let{name:t,value:r}=e.target;i(e=>({...e,[t]:r}))},S=async t=>{t.preventDefault(),f(null),u(null);try{let t=e.id,s=Object.keys(r).map(e=>({id:parseInt(e.split("_")[1]),value:r[e]})),a={query:x,variables:{formId:parseInt(t),fieldValues:s}},l=await n.default.post("https://kapstaging.com/graphql",a,{headers:{"Content-Type":"application/json"}});l.data?.data?.submitGravityForm?.isValid?(u("Form submitted successfully!"),i({})):f("Form validation failed. Please check the fields.")}catch(e){console.error("Error submitting form:",e.response?.data||e.message),f("Error submitting the form.")}};return(0,s.jsxs)("div",{children:[s.jsx("h1",{children:"Create and Submit Form (GraphQL)"}),!e&&(0,s.jsxs)("div",{children:[s.jsx("input",{type:"text",placeholder:"Enter Form Name",value:l,onChange:e=>d(e.target.value),required:!0}),s.jsx("button",{onClick:b,disabled:c||!l,children:c?"Creating Form...":"Create Form"})]}),e&&(0,s.jsxs)("form",{onSubmit:S,children:[e.fields.map(e=>(0,s.jsxs)("div",{children:[s.jsx("label",{children:e.label}),s.jsx("input",{type:"email"===e.type?"email":"text",name:`input_${e.id}`,value:r[`input_${e.id}`]||"",onChange:g,required:e.required})]},e.id)),m&&s.jsx("div",{style:{color:"red"},children:m}),o&&s.jsx("div",{style:{color:"green"},children:o}),s.jsx("button",{type:"submit",children:"Submit Form"})]})]})};i()}catch(e){i(e)}})},108:()=>{},5244:(e,t)=>{"use strict";var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{"use strict";e.exports=require("react")},6405:e=>{"use strict";e.exports=require("react-dom")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},2048:e=>{"use strict";e.exports=require("fs")},5315:e=>{"use strict";e.exports=require("path")},6162:e=>{"use strict";e.exports=require("stream")},1568:e=>{"use strict";e.exports=require("zlib")},9648:e=>{"use strict";e.exports=import("axios")},9915:e=>{"use strict";e.exports=import("js-cookie")}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),i=t.X(0,[5443,3424,6859],()=>r(7655));module.exports=i})();