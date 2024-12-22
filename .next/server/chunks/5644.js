"use strict";exports.id=5644,exports.ids=[5644],exports.modules={4802:(e,t,a)=>{a.a(e,async(e,n)=>{try{a.r(t),a.d(t,{default:()=>m});var r=a(997),s=a(6689),i=a(3314),l=a(8747),o=a(9621),d=a(8202),u=a(7529),c=a(5399),h=a(1485),x=e([l,o,d,u,c,h]);[l,o,d,u,c,h]=x.then?(await x)():x;let m=({handleStepDataChange:e,formData:t})=>{let[a,n]=(0,s.useState)(""),[x,m]=(0,s.useState)({dba:"",legalBusinessName:"",businessPhone:"",website:"",annualRevenue:"",startDate:"",city:"",state:"",Entity:"",Industry_type:"",date:""}),p=a=>{let{name:n,value:r}=a.target;e({...t,[n]:r})},g=e=>e.replace(/[^\d]/g,"").replace(/(\d{3})(\d{3})(\d{4})/,"($1) $2-$3"),y=e=>e.replace(/[^\d]/g,"").replace(/(\d{2})(\d{7})/,"$1-$2");return(0,r.jsxs)(i.Z,{sx:{maxWidth:800,margin:"0 auto",padding:3,backgroundColor:"white",borderRadius:2},children:[r.jsx(l.Z,{label:"DBA (Business Name)*",variant:"outlined",fullWidth:!0,name:"dba",value:t.dba||"",onChange:p,error:!!x.dba,helperText:x.dba,required:!0,margin:"normal"}),r.jsx(l.Z,{label:"Legal Business Name*",variant:"outlined",fullWidth:!0,name:"legalBusinessName",value:t.legalBusinessName||"",onChange:p,error:!!x.legalBusinessName,helperText:x.legalBusinessName,required:!0,margin:"normal"}),r.jsx(l.Z,{label:"Business Address",variant:"outlined",fullWidth:!0,name:"businessAddress",value:t.businessAddress||"",onChange:p,margin:"normal"}),(0,r.jsxs)(o.Z,{fullWidth:!0,margin:"normal",children:[r.jsx(d.Z,{children:"City"}),(0,r.jsxs)(u.Z,{label:"City",name:"city",value:t.city||"",onChange:p,error:!!x.city,required:!0,children:[r.jsx(c.Z,{value:"Milwaukee",children:"Milwaukee"}),r.jsx(c.Z,{value:"Madison",children:"Madison"}),r.jsx(c.Z,{value:"Green Bay",children:"Green Bay"})]}),x.city&&r.jsx(h.Z,{color:"error",children:x.city})]}),(0,r.jsxs)(o.Z,{fullWidth:!0,margin:"normal",children:[r.jsx(d.Z,{children:"State"}),(0,r.jsxs)(u.Z,{label:"State",name:"state",value:t.state||"",onChange:p,error:!!x.state,required:!0,children:[r.jsx(c.Z,{value:"Wisconsin",children:"Wisconsin"}),r.jsx(c.Z,{value:"Washington",children:"Washington"}),r.jsx(c.Z,{value:"Vermont",children:"Vermont"}),r.jsx(c.Z,{value:"Utah",children:"Utah"}),r.jsx(c.Z,{value:"Ohio",children:"Ohio"})]}),x.state&&r.jsx(h.Z,{color:"error",children:x.state})]}),r.jsx(l.Z,{label:"ZIP Code",variant:"outlined",fullWidth:!0,name:"zipCode",value:t.zipCode||"",onChange:p,margin:"normal"}),r.jsx(l.Z,{label:"Business Phone*",variant:"outlined",fullWidth:!0,name:"businessPhone",value:g(t.businessPhone||""),onChange:e=>p({target:{name:e.target.name,value:g(e.target.value)}}),error:!!x.businessPhone,helperText:x.businessPhone,required:!0,margin:"normal"}),r.jsx(l.Z,{label:"Website*",variant:"outlined",fullWidth:!0,name:"website",value:t.website||"",onChange:p,error:!!x.website,helperText:x.website,required:!0,margin:"normal"}),r.jsx(l.Z,{label:"Tax ID*",variant:"outlined",fullWidth:!0,name:"taxId",value:y(t.taxId||""),onChange:e=>p({target:{name:e.target.name,value:y(e.target.value)}}),required:!0,margin:"normal"}),r.jsx(l.Z,{label:"Annual Revenue*",variant:"outlined",fullWidth:!0,name:"annualRevenue",type:"number",value:t.annualRevenue||"",onChange:p,error:!!x.annualRevenue,helperText:x.annualRevenue,required:!0,InputProps:{startAdornment:r.jsx(h.Z,{variant:"h12",children:"$"})},margin:"normal"}),(0,r.jsxs)(o.Z,{fullWidth:!0,margin:"normal",children:[r.jsx(d.Z,{children:"Entity"}),(0,r.jsxs)(u.Z,{label:"Entity",name:"Entity",value:t.Entity||"",onChange:p,error:!!x.Entity,required:!0,children:[r.jsx(c.Z,{value:"LLP",children:"LLP"}),r.jsx(c.Z,{value:"LLC",children:"LLC"}),r.jsx(c.Z,{value:"LLLP",children:"LLLP"})]}),x.Entity&&r.jsx(h.Z,{color:"error",children:x.Entity})]}),(0,r.jsxs)(o.Z,{fullWidth:!0,margin:"normal",children:[r.jsx(d.Z,{children:"Industry Type"}),(0,r.jsxs)(u.Z,{label:"Industry type",name:"Industry_type",value:t.Industry_type||"",onChange:p,error:!!x.Industry_type,required:!0,children:[r.jsx(c.Z,{value:"Transporation",children:"Transporation"}),r.jsx(c.Z,{value:"Technology",children:"Technology"}),r.jsx(c.Z,{value:"Education",children:"Education"})]}),x.Industry_type&&r.jsx(h.Z,{color:"error",children:x.Industry_type})]}),r.jsx(l.Z,{label:"Select a Date",name:"date",type:"date",value:t.date||"",onChange:p,fullWidth:!0,required:!0,sx:{mb:2}})]})};n()}catch(e){n(e)}})},2210:(e,t,a)=>{a.a(e,async(e,n)=>{try{a.r(t),a.d(t,{default:()=>m});var r=a(997),s=a(6689),i=a(3314),l=a(8747),o=a(1292),d=a(1485),u=a(1196),c=a(5326),h=a(1376),x=e([l,o,d,u,c,h]);[l,o,d,u,c,h]=x.then?(await x)():x;let m=({handleStepDataChange:e,formData:t})=>{let[a,n]=(0,s.useState)(t.requestedAmount),[x,m]=(0,s.useState)(t.selectedUses),[p,g]=(0,s.useState)(t.otherUse);(0,s.useEffect)(()=>{e({requestedAmount:a,selectedUses:x,otherUse:p})},[a,x,p,e]);let y=e=>{let{name:t,checked:a}=e.target;m(e=>a?[...e,t]:e.filter(e=>e!==t))};return r.jsx(i.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100vh"},children:(0,r.jsxs)(i.Z,{sx:{width:"100%",maxWidth:800,padding:4,backgroundColor:"white",borderRadius:4},children:[r.jsx(i.Z,{sx:{mb:3},children:r.jsx(l.Z,{label:"Requested Amount",variant:"outlined",fullWidth:!0,value:a,onChange:e=>{let t=e.target.value.replace(/[^0-9.]/g,"");n(t)},required:!0,error:!1,InputProps:{startAdornment:r.jsx(o.Z,{position:"start",children:"$"})}})}),(0,r.jsxs)(i.Z,{sx:{mb:3},children:[r.jsx(d.Z,{variant:"h6",gutterBottom:!0,children:"Use of Funds*"}),(0,r.jsxs)(u.Z,{children:[[{name:"purchaseEquipment",label:"Purchase Equipment"},{name:"hireAdditionalEmployee",label:"Hire Additional Employee"},{name:"expandOrRenovate",label:"Expand or Renovate"},{name:"coverPayroll",label:"Cover Payroll"},{name:"payTaxes",label:"Pay Taxes"},{name:"makeRepairs",label:"Make Repairs"},{name:"stabilizeCashFlow",label:"Stabilize Cash Flow"},{name:"buildUpEmergencyFund",label:"Build Up Emergency Fund"},{name:"consolidateDebt",label:"Consolidate Your Debt"}].map(e=>r.jsx(c.Z,{control:r.jsx(h.Z,{name:e.name,checked:x.includes(e.name),onChange:y}),label:e.label},e.name)),r.jsx(c.Z,{control:r.jsx(h.Z,{name:"other",checked:x.includes("other"),onChange:y}),label:"Other"}),x.includes("other")&&r.jsx(i.Z,{sx:{mt:2},children:r.jsx(l.Z,{label:"Please specify",variant:"outlined",fullWidth:!0,value:p,onChange:e=>{g(e.target.value)},error:!1})})]})]})]})})};n()}catch(e){n(e)}})},5644:(e,t,a)=>{a.a(e,async(e,n)=>{try{a.r(t),a.d(t,{default:()=>$});var r=a(997),s=a(6689),i=a(8442),l=a(9648),o=a(3314),d=a(1485),u=a(8539),c=a(3043),h=a(7834),x=a.n(h),m=a(547),p=a.n(m),g=a(6149),y=a(4876),j=a(8680),b=a(2210),v=a(4802),f=a(1085),Z=a(6461),C=a(7497),w=a(3590),S=a(6571),k=a(1163),D=e([l,y,b,v,f,Z,C,w,S,d,u,c]);[l,y,b,v,f,Z,C,w,S,d,u,c]=D.then?(await D)():D;let $=({steps:e})=>{let t=(0,i.useTheme)(),{currentStepIndex:a,step:n,next:h,back:m,isFirstStep:D,isLastStep:$}=(0,g.useMultistepForm)(e),[A,B]=(0,s.useState)({requestedAmount:"",selectedUses:[],signature:null,agreementChecked:!1,savingsChecked:"0",creditReportsChecked:"0",existingLoan:!1,selectedOptions:"",image:"",imageFile:null}),W=(0,k.useRouter)(),[E,P]=(0,s.useState)(!1),[F,I]=(0,s.useState)(!1),[R,T]=(0,s.useState)(""),L=e=>{B(t=>({...t,...e}))},q=async e=>{if(e.preventDefault(),$){console.log(A),alert("Form submitted!"),e.preventDefault(),I(!1),T("");let t=`
      mutation SubmitFormData {
        submitFormData(
          input: {
            requestedAmount: "${A.requestedAmount}",
            selectedUses: "${A.selectedUses}",
            dba: "${A.dba}",
            legalBusinessName:"${A.legalBusinessName}",
            businessAddress: "${A.businessAddress}",
            city: "${A.city}",
            state: "${A.state}",
            zipCode: "${A.zipCode}",
            businessPhone: "${A.businessPhone}",
            website: "${A.website}",
            taxId: "${A.taxId}",
            annualRevenue: "${A.annualRevenue}",
            firstName: "${A.firstName}",
            lastName: "${A.lastName}",
            email: "${A.email}",
            phone :"${A.phone}",
            loanbusinessAddress:"${A.loanbusinessAddress}",
            loanhomeAddress:"${A.loanhomeAddress}",
            loancity:"${A.loancity}",
            loanstate:"${A.loanstate}",
            loanzipCode:"${A.loanzipCode}",
            creditScore: "${A.creditScore}",
            day:"${A.day}",
            year: "${A.year}",
            month: "${A.month}"
            ssn: "${A.ssn}",
            lenderName:"${A.lenderName}",
            existingLoan:"${A.existingLoan}",
            entity:"${A.Entity}",
            industry_type:"${A.Industry_type}",
              signature: "${A.signature}",
            howDidYouHear:"${A.howDidYouHear}",
            uploadedFile: "${A.file}",

            agreementChecked:${1===A.agreementChecked},
          
            selectedOptions:"${A.selectedOptions}",
            businessStartDate:"${A.date}",
            loanOwnership:"${A.loanOwnership}",
           
          }
        ) {
          formEntry {
            id
            requestedAmount
            selectedUses
            uploadedFile
            signature
            agreementChecked
            annualRevenue
            businessAddress
            businessPhone
            city
            creditReportsChecked
            creditScore
            dba
            email
            firstName
            lastName
            website
            zipCode
            ssn
            state
            taxId
            year
            month
          }
        }
      }
    `;console.log(t);try{(await l.default.post(process.env.NEXT_PUBLIC_STAGING_URL,{query:t})).data&&(I(!0),w.toast.success("Data saved successfully!"),setTimeout(()=>{W.push("./thank_you")},1e4))}catch(e){T("Error creating form. Please try again."),console.error("Error creating form:",e),w.toast.error("Error Submitting Form")}}else h()};return r.jsx("div",{style:{position:"relative",padding:"20px",minHeight:"200vh",width:"100%"},children:r.jsx("form",{onSubmit:q,style:{display:"flex",flexDirection:"column",justifyContent:"space-between",width:"100%"},children:(0,r.jsxs)(o.Z,{sx:{display:"flex",width:"100%"},children:[r.jsx(j.Z,{sx:{flexShrink:0,width:"250px"}})," ",(0,r.jsxs)(o.Z,{sx:{flexGrow:1,paddingLeft:"20px",width:"100%"},children:[r.jsx(d.Z,{variant:"h4",align:"center",gutterBottom:!0,children:"Business Financing"}),0===a&&r.jsx(y.default,{next:h}),1===a&&r.jsx(b.default,{handleStepDataChange:L,formData:A}),2===a&&r.jsx(v.default,{handleStepDataChange:L,formData:A}),3===a&&r.jsx(f.default,{handleStepDataChange:L,setIsFormValid:P,formData:A}),4===a&&r.jsx(Z.default,{handleStepDataChange:L,formData:A}),5===a&&r.jsx(C.default,{handleStepDataChange:L,formData:A}),6===a&&r.jsx(S.default,{handleStepDataChange:L,formData:A}),r.jsx("div",{style:{marginTop:"2rem"}}),(0,r.jsxs)("div",{style:{marginTop:"1rem",display:"flex",gap:".5rem",justifyContent:"flex-end"},children:[!D&&r.jsx(o.Z,{sx:{position:"absolute",top:16,right:16},children:r.jsx(u.Z,{variant:"dots",steps:e.length,position:"static",activeStep:a,sx:{maxWidth:400,flexGrow:1}})}),(0,r.jsxs)(o.Z,{sx:{display:"flex",justifyContent:"space-between",width:"100%"},children:[!D&&(0,r.jsxs)("span",{onClick:m,style:{color:t.palette.primary.main,cursor:"pointer",textDecoration:"underline",fontSize:"16px",alignSelf:"center"},children:["rtl"===t.direction?r.jsx(p(),{}):r.jsx(x(),{}),"Back"]}),!D&&(0,r.jsxs)(c.Z,{type:"submit",variant:"outlined",sx:{borderColor:t.palette.primary.main,color:t.palette.primary.main,"&:hover":{backgroundColor:t.palette.primary.light,borderColor:t.palette.primary.dark},width:"auto",fontWeight:"bold",textTransform:"none",padding:"8px 16px"},children:[$?"Submit":"Continue","rtl"===t.direction?r.jsx(x(),{}):r.jsx(p(),{})]})]})]})]})]})})})};n()}catch(e){n(e)}})},7497:(e,t,a)=>{a.a(e,async(e,n)=>{try{a.r(t),a.d(t,{default:()=>g});var r=a(997),s=a(6689),i=a(8784),l=a.n(i),o=a(3590);a(8819);var d=a(3314),u=a(1485),c=a(1196),h=a(5326),x=a(1376),m=a(3043),p=e([o,u,c,h,x,m]);[o,u,c,h,x,m]=p.then?(await p)():p;let g=({handleStepDataChange:e,formData:t})=>{let[a,n]=(0,s.useState)({signature:null,agreementChecked:t.agreementChecked??!0,savingsChecked:t.savingsChecked||!1,selectedOptions:t.selectedOptions||[]}),i=(0,s.useRef)(null),p=(t,a)=>{n(n=>{let{selectedOptions:r}=n,s=t.target.checked?[...r,a]:r.filter(e=>e!==a),i={...n,selectedOptions:s};return e(i),i})};return r.jsx(d.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100vh"},children:(0,r.jsxs)(d.Z,{sx:{width:"100%",maxWidth:800,padding:4,backgroundColor:"white",borderRadius:2},children:[r.jsx(o.ToastContainer,{}),r.jsx(u.Z,{variant:"h5",gutterBottom:!0,children:"Please scroll down and read through all the following terms to activate the checkbox"}),r.jsx(d.Z,{sx:{mb:4,padding:2,border:"1px solid #ccc",borderRadius:2,maxHeight:300,overflowY:"auto"},children:r.jsx(u.Z,{variant:"body1",children:"The Business and Owner(s) identified above (collectively, the “Applicant”) each represent, acknowledge and agree to the Representations and Acknowledgments set forth below..."})}),r.jsx(d.Z,{sx:{textAlign:"center",my:4},children:r.jsx(c.Z,{children:r.jsx(h.Z,{control:r.jsx(x.Z,{checked:a.agreementChecked,onChange:t=>{let r={...a,agreementChecked:t.target.checked};n(r),e(r)}}),label:r.jsx(u.Z,{variant:"body2",children:"By checking here, I agree that I have read and agree to the above terms and notices."}),required:!0})})}),(0,r.jsxs)(d.Z,{sx:{textAlign:"center",my:4,maxWidth:800},children:[r.jsx(u.Z,{variant:"h6",gutterBottom:!0,children:"Please sign below"}),r.jsx(l(),{ref:i,penColor:"black",required:!0,canvasProps:{width:500,height:200,className:"sigCanvas",style:{border:"1px dashed black"}}}),(0,r.jsxs)(d.Z,{sx:{mt:2},children:[r.jsx(m.Z,{variant:"contained",onClick:()=>{if(i.current){let t=i.current.getTrimmedCanvas().toDataURL("image/png"),r={...a,signature:t};n(r),e(r),o.toast.success("Signature saved successfully!")}},sx:{mr:2},children:"Save Signature"}),r.jsx(m.Z,{variant:"outlined",onClick:()=>{i.current&&i.current.clear()},children:"Clear"})]})]}),(0,r.jsxs)(d.Z,{sx:{textAlign:"left",mb:4},children:[r.jsx(u.Z,{variant:"body1",children:"Select all that apply:"}),r.jsx(c.Z,{children:r.jsx(h.Z,{control:r.jsx(x.Z,{checked:a.selectedOptions.includes("Exclusive savings on business insurance"),onChange:e=>p(e,"Exclusive savings on business insurance")}),label:r.jsx(u.Z,{variant:"body1",children:"Exclusive savings on business insurance"})})}),r.jsx(c.Z,{children:r.jsx(h.Z,{control:r.jsx(x.Z,{checked:a.selectedOptions.includes("Personal and business credit reports"),onChange:e=>p(e,"Personal and business credit reports")}),label:r.jsx(u.Z,{variant:"body1",children:"Personal and business credit reports"})})}),r.jsx(d.Z,{sx:{borderTop:"2px solid #000",my:4}})]})]})})};n()}catch(e){n(e)}})},4876:(e,t,a)=>{a.a(e,async(e,n)=>{try{a.r(t),a.d(t,{default:()=>c});var r=a(997);a(6689);var s=a(3314),i=a(1485),l=a(3043),o=a(5675),d=a.n(o),u=e([i,l]);[i,l]=u.then?(await u)():u;let c=function({next:e}){return r.jsx(s.Z,{sx:{display:"flex",flexDirection:"column",height:"100vh"},children:(0,r.jsxs)(s.Z,{sx:{display:"flex",flexDirection:"row",height:"100%",padding:"16px"},children:[(0,r.jsxs)(s.Z,{sx:{flex:1,display:"flex",flexDirection:"column",justifyContent:"center",textAlign:"left"},children:[(0,r.jsxs)(s.Z,{children:[r.jsx("br",{}),r.jsx("br",{})]}),r.jsx(i.Z,{variant:"h3",sx:{fontWeight:"bold",marginBottom:2},children:"Get Approved Fast!"}),r.jsx(i.Z,{variant:"h6",sx:{marginBottom:3},children:"Applying will have no impact on your credit."}),r.jsx(l.Z,{variant:"contained",onClick:()=>{e&&e()},sx:{width:"100%",maxWidth:"400px",padding:"12px",fontWeight:"bold",backgroundColor:"primary.main","&:hover":{backgroundColor:"primary.dark"}},children:"Start Application"})]}),r.jsx(s.Z,{sx:{width:"50%",display:"flex",justifyContent:"center",alignItems:"center"},children:r.jsx(d(),{src:"/customizejourney.png",width:400,height:300,alt:"Application",style:{objectFit:"contain",width:"100%",height:"auto"}})})]})})};n()}catch(e){n(e)}})},6571:(e,t,a)=>{a.a(e,async(e,n)=>{try{a.r(t),a.d(t,{default:()=>x});var r=a(997),s=a(6358),i=a(6689),l=a(3314),o=a(1485),d=a(3590);a(8819);var u=a(9648),c=a(8680),h=e([d,u,o]);[d,u,o]=h.then?(await h)():h;let x=()=>{let[e,t]=(0,i.useState)(null),[a,n]=(0,i.useState)(null),[h,x]=(0,i.useState)({}),{getRootProps:m,getInputProps:p}=(0,s.useDropzone)({accept:".jpg, .jpeg, .png, .gif",onDrop:e=>{let a=e[0];if(a&&a.type.startsWith("image/")){let e=new FileReader;e.onloadend=()=>{t(e.result)},e.readAsDataURL(a),n(a)}else d.toast.error("Invalid file type. Please upload an image.")}}),g=async t=>{if(t.preventDefault(),!a){d.toast.error("Please upload an image first.");return}let n=`
    mutation SubmitFormData {
      submitFormData(
        input: {
          image: "${e}"
        }
      ) {
        formEntry {
          id
        }
      }
    }`;try{if((await u.default.post(process.env.NEXT_PUBLIC_STAGING_URL,{query:n})).data.errors)d.toast.error("Error submitting image.");else{d.toast.success("Image submitted successfully!");let t={...h,imageUrl:e,imageFile:a};handleStepDataChange(t)}}catch(e){console.error("Error:",e),d.toast.error("An error occurred while submitting the image.")}};return(0,r.jsxs)(l.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",padding:"20px"},children:[r.jsx(c.Z,{}),r.jsx(o.Z,{variant:"h4",gutterBottom:!0,children:"Thank You for Your Submission!"}),r.jsx("form",{onSubmit:g,style:{width:"100%",maxWidth:"600px"}}),r.jsx(d.ToastContainer,{})]})};n()}catch(e){n(e)}})},6461:(e,t,a)=>{a.a(e,async(e,n)=>{try{a.r(t),a.d(t,{default:()=>h});var r=a(997),s=a(6689),i=a(3314),l=a(1485),o=a(3043),d=a(3590);a(8819);var u=a(6358),c=e([d,l,o]);[d,l,o]=c.then?(await c)():c;let h=({handleStepDataChange:e,formData:t})=>{let[a,n]=(0,s.useState)(null),{getRootProps:c,getInputProps:h}=(0,u.useDropzone)({onDrop:a=>{let r=a[0];if(r){n(r.name);let a=new FileReader;a.onloadend=()=>{e({...t,file:a.result}),d.toast.success(`${r.name} uploaded successfully!`,{position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},a.readAsDataURL(r)}},accept:".jpg,.png,.pdf",maxSize:268435456});return(0,r.jsxs)(i.Z,{sx:{p:4,maxWidth:"1200px",margin:"0 auto"},children:[r.jsx(l.Z,{variant:"h3",sx:{fontSize:"25px",color:"#7694FF",fontWeight:800,lineHeight:"40px",marginBottom:2},children:"Upload Documents"}),r.jsx(l.Z,{variant:"h5",sx:{fontWeight:"bold",marginBottom:2},children:"For Faster Approval Upload 3 Months Bank Statements"}),r.jsx(l.Z,{variant:"h6",sx:{marginBottom:3},children:"Estimated Approval 3-4 Hours"}),(0,r.jsxs)(i.Z,{sx:{border:"2px dashed #7694FF",padding:4,borderRadius:2,textAlign:"center",backgroundColor:"#f9f9f9",cursor:"pointer"},...c(),children:[r.jsx("input",{...h(),id:"file-input",style:{display:"none"}}),r.jsx(l.Z,{variant:"h6",sx:{marginBottom:2},children:"Drop files here or Upload File"}),r.jsx(o.Z,{variant:"contained",component:"label",onClick:()=>{a||document.getElementById("file-input").click()},disabled:null!==a,sx:{backgroundColor:"#1976D2 !important","&:hover":{backgroundColor:"#1976D2 !important"}},children:"Select File"}),a&&(0,r.jsxs)(l.Z,{variant:"body2",sx:{mt:2,color:"gray"},children:[r.jsx("strong",{children:"Selected file:"})," ",a]})]}),r.jsx(l.Z,{variant:"body2",sx:{mt:2,color:"gray",textAlign:"center"},children:"Accepted file types: jpg, png, pdf, Max. file size: 256 MB."}),r.jsx(d.ToastContainer,{})]})};n()}catch(e){n(e)}})},6149:(e,t,a)=>{a.r(t),a.d(t,{useMultistepForm:()=>r});var n=a(6689);function r(e){let[t,a]=(0,n.useState)(0);return{currentStepIndex:t,step:e[t],steps:e,isFirstStep:0===t,isLastStep:t===e.length-1,goTo:function(e){a(e)},next:function(){a(t=>t>=e.length-1?t:t+1)},back:function(){a(e=>e<=0?e:e-1)}}}}};