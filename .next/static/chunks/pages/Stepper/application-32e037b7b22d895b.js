(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[669],{5458:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Stepper/application",function(){return n(3681)}])},6562:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var i=n(7294);function l(e){let[t,n]=(0,i.useState)(0);return{currentStepIndex:t,step:e[t],steps:e,isFirstStep:0===t,isLastStep:t===e.length-1,goTo:function(e){n(e)},next:function(){n(t=>t>=e.length-1?t:t+1)},back:function(){n(e=>e<=0?e:e-1)}}}},2739:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var i=n(5893);function l(e){let{SurveyName:t,Description:n,updateFields:l}=e;return(0,i.jsxs)("div",{style:s.formContainer,children:[(0,i.jsx)("h2",{children:"Survey Details"}),(0,i.jsxs)("div",{style:s.inputGroup,children:[(0,i.jsx)("label",{style:s.label,children:"Survey Name"}),(0,i.jsx)("input",{autoFocus:!0,required:!0,type:"text",value:t,onChange:e=>l({SurveyName:e.target.value}),style:s.input})]}),(0,i.jsxs)("div",{style:s.inputGroup,children:[(0,i.jsx)("label",{style:s.label,children:"Description"}),(0,i.jsx)("input",{required:!0,type:"text",value:n,onChange:e=>l({Description:e.target.value}),style:s.input})]})]})}n(7294);let s={formContainer:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:"1.5rem",width:"100%",maxWidth:"600px",margin:"0 auto"},inputGroup:{display:"flex",flexDirection:"column",width:"100%"},label:{fontSize:"1rem",fontWeight:"bold",marginBottom:"0.5rem"},input:{width:"100%",padding:"0.8rem",fontSize:"1rem",borderRadius:"4px",border:"1px solid #ccc"}}},3681:function(e,t,n){"use strict";n.r(t);var i=n(5893);n(7294);var l=n(6562),s=n(2739),r=n(8680),u=n(8585);t.default=function(){let{steps:e,currentStepIndex:t,step:n,isFirstStep:a,isLastStep:o,back:c,next:d}=(0,l.useMultistepForm)([(0,i.jsx)(u.default,{}),(0,i.jsx)(s.default,{})]);return(0,i.jsx)("div",{style:{position:"relative",background:"white",border:"1px solid black",padding:"3rem",margin:"1rem",borderRadius:".5rem",fontFamily:"Arial, sans-serif",height:"100vh",width:"100%",maxWidth:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",overflowY:"auto"},children:(0,i.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),!o)return d();alert("Successful Account Creation")},children:[(0,i.jsx)("div",{style:{position:"absolute",top:".5rem",right:".5rem"}}),(0,i.jsx)(r.Z,{}),n,(0,i.jsxs)("div",{style:{marginTop:"1rem",display:"flex",gap:".5rem",justifyContent:"flex-end"},children:[!a&&(0,i.jsx)("button",{type:"button",onClick:c,children:"Back"}),(0,i.jsx)("button",{type:"submit",children:o&&!a?"Finish":"Next"})]})]})})}},8585:function(e,t,n){"use strict";n.r(t);var i=n(5893);n(7294);var l=n(8680),s=n(5675),r=n.n(s);console.log(r()),t.default=function(){return(0,i.jsxs)("div",{className:"flex",children:[(0,i.jsx)(l.Z,{}),(0,i.jsxs)("div",{className:"w-full h-screen flex justify-center items-center p-8 space-x-12 bg-white rounded shadow-md",children:[(0,i.jsxs)("div",{className:"flex flex-col justify-center space-y-6 text-left",children:[(0,i.jsx)("h3",{className:"text-lg font-medium",children:"Business Financing"}),(0,i.jsx)("h1",{className:"text-4xl font-bold",children:"Get Approved Fast!"}),(0,i.jsx)("h3",{className:"text-lg",children:"Applying will have no impact on your credit."}),(0,i.jsx)("button",{type:"button",style:{width:"100%"},className:"apply-button mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 w-full max-w-md",children:"Start  Application"})]}),(0,i.jsx)("div",{className:"w-1/2",children:(0,i.jsx)(r(),{src:"/customizejourney.png",width:100,height:75,alt:"Application",className:"w-full h-auto"})})]})]})}}},function(e){e.O(0,[5675,2888,9774,179],function(){return e(e.s=5458)}),_N_E=e.O()}]);