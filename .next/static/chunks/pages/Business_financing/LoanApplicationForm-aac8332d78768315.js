(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1158],{1411:function(e,a,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Business_financing/LoanApplicationForm",function(){return r(1085)}])},1529:function(e,a,r){"use strict";r.d(a,{Z:function(){return N}});var n=r(7294),t=r(512),l=r(4780),o=r(8366),i=r(3008),s=r(4853),d=r(2807),c=r(375),u=r(4507),m=r(6323),h=r(7229),p=r(9168),g=r(1588);let v=(0,g.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),x=(0,g.Z)("MuiListItemIcon",["root","alignItemsFlexStart"]),b=(0,g.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);var f=r(4867);function y(e){return(0,f.ZP)("MuiMenuItem",e)}let Z=(0,g.Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]);var j=r(5893);let C=e=>{let{disabled:a,dense:r,divider:n,disableGutters:t,selected:o,classes:i}=e,s=(0,l.Z)({root:["root",r&&"dense",a&&"disabled",!t&&"gutters",n&&"divider",o&&"selected"]},y,i);return{...i,...s}},w=(0,s.ZP)(m.Z,{shouldForwardProp:e=>(0,i.Z)(e)||"classes"===e,name:"MuiMenuItem",slot:"Root",overridesResolver:(e,a)=>{let{ownerState:r}=e;return[a.root,r.dense&&a.dense,r.divider&&a.divider,!r.disableGutters&&a.gutters]}})((0,d.Z)(e=>{let{theme:a}=e;return{...a.typography.body1,display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap","&:hover":{textDecoration:"none",backgroundColor:(a.vars||a).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},["&.".concat(Z.selected)]:{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,o.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity),["&.".concat(Z.focusVisible)]:{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.focusOpacity,"))"):(0,o.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)}},["&.".concat(Z.selected,":hover")]:{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.hoverOpacity,"))"):(0,o.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,o.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity)}},["&.".concat(Z.focusVisible)]:{backgroundColor:(a.vars||a).palette.action.focus},["&.".concat(Z.disabled)]:{opacity:(a.vars||a).palette.action.disabledOpacity},["& + .".concat(v.root)]:{marginTop:a.spacing(1),marginBottom:a.spacing(1)},["& + .".concat(v.inset)]:{marginLeft:52},["& .".concat(b.root)]:{marginTop:0,marginBottom:0},["& .".concat(b.inset)]:{paddingLeft:36},["& .".concat(x.root)]:{minWidth:36},variants:[{props:e=>{let{ownerState:a}=e;return!a.disableGutters},style:{paddingLeft:16,paddingRight:16}},{props:e=>{let{ownerState:a}=e;return a.divider},style:{borderBottom:"1px solid ".concat((a.vars||a).palette.divider),backgroundClip:"padding-box"}},{props:e=>{let{ownerState:a}=e;return!a.dense},style:{[a.breakpoints.up("sm")]:{minHeight:"auto"}}},{props:e=>{let{ownerState:a}=e;return a.dense},style:{minHeight:32,paddingTop:4,paddingBottom:4,...a.typography.body2,["& .".concat(x.root," svg")]:{fontSize:"1.25rem"}}}]}}));var N=n.forwardRef(function(e,a){let r;let l=(0,c.i)({props:e,name:"MuiMenuItem"}),{autoFocus:o=!1,component:i="li",dense:s=!1,divider:d=!1,disableGutters:m=!1,focusVisibleClassName:g,role:v="menuitem",tabIndex:x,className:b,...f}=l,y=n.useContext(u.Z),Z=n.useMemo(()=>({dense:s||y.dense||!1,disableGutters:m}),[y.dense,s,m]),N=n.useRef(null);(0,h.Z)(()=>{o&&N.current&&N.current.focus()},[o]);let q={...l,dense:Z.dense,divider:d,disableGutters:m},O=C(l),W=(0,p.Z)(N,a);return l.disabled||(r=void 0!==x?x:-1),(0,j.jsx)(u.Z.Provider,{value:Z,children:(0,j.jsx)(w,{ref:W,role:v,tabIndex:r,component:i,focusVisibleClassName:(0,t.Z)(O.focusVisible,g),className:(0,t.Z)(O.root,b),...f,ownerState:q,classes:O})})})},1085:function(e,a,r){"use strict";r.r(a);var n=r(5893),t=r(7294),l=r(9729),o=r(6541),i=r(7052),s=r(8649),d=r(7429),c=r(1529),u=r(5806),m=r(607),h=r(566);a.default=e=>{let{handleStepDataChange:a,formData:r}=e,[p,g]=(0,t.useState)({firstName:"",lastName:"",email:"",phone:"",loanbusinessAddress:"",loanhomeAddress:"",loancity:"",loanstate:"",loanzipCode:"",creditScore:"",day:"",month:"",year:"",ssn:"",howDidYouHear:"",lenderName:"",loanOwnership:""}),v=e=>{let{name:n,value:t,type:l,checked:o}=e.target;a({...r,[n]:"checkbox"===l?o:t})};return(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(o.Z,{label:"First Name",name:"firstName",value:r.firstName||"",onChange:v,fullWidth:!0,margin:"normal",error:!!p.firstName,helperText:p.firstName,required:!0}),(0,n.jsx)(o.Z,{label:"Last Name",name:"lastName",value:r.lastName||"",onChange:v,fullWidth:!0,margin:"normal",error:!!p.lastName,helperText:p.lastName,required:!0}),(0,n.jsx)(o.Z,{label:"Email",name:"email",value:r.email||"",onChange:v,fullWidth:!0,margin:"normal",error:!!p.email,helperText:p.email,required:!0}),(0,n.jsx)(o.Z,{label:"Phone",name:"phone",value:r.phone||"",onChange:v,fullWidth:!0,margin:"normal",error:!!p.phone,helperText:p.phone,required:!0}),(0,n.jsx)(o.Z,{label:"Business Address",name:"loanbusinessAddress",value:r.loanbusinessAddress||"",onChange:v,fullWidth:!0,margin:"normal",required:!0}),(0,n.jsx)(o.Z,{label:"Home Address",name:"loanhomeAddress",value:r.loanhomeAddress||"",onChange:v,fullWidth:!0,margin:"normal",required:!0}),(0,n.jsx)(o.Z,{label:"City",name:"loancity",value:r.loancity||"",onChange:v,fullWidth:!0,margin:"normal",required:!0}),(0,n.jsx)(o.Z,{label:"State",name:"loanstate",value:r.loanstate||"",onChange:v,fullWidth:!0,margin:"normal",required:!0}),(0,n.jsx)(o.Z,{label:"ZIP Code",name:"loanzipCode",value:r.loanzipCode||"",onChange:v,fullWidth:!0,margin:"normal",required:!0}),(0,n.jsxs)(i.Z,{fullWidth:!0,margin:"normal",children:[(0,n.jsx)(s.Z,{children:"Credit Score"}),(0,n.jsxs)(d.Z,{name:"creditScore",value:r.creditScore||"",onChange:v,label:"Credit Score",required:!0,error:!!p.creditScore,children:[(0,n.jsx)(c.Z,{value:"less than 599",children:"less than 599"}),(0,n.jsx)(c.Z,{value:"600-649",children:"600-649"}),(0,n.jsx)(c.Z,{value:"650-679",children:"650-679"}),(0,n.jsx)(c.Z,{value:"680-699",children:"680-699"})]}),p.creditScore&&(0,n.jsx)("p",{style:{color:"red"},children:p.creditScore})]}),(0,n.jsx)(o.Z,{label:"Day",name:"day",value:r.day||"",onChange:v,fullWidth:!0,margin:"normal",error:!!p.day,helperText:p.day,required:!0}),(0,n.jsx)(o.Z,{label:"Month",name:"month",value:r.month||"",onChange:v,fullWidth:!0,margin:"normal",error:!!p.month,helperText:p.month,required:!0}),(0,n.jsx)(o.Z,{label:"Year",name:"year",value:r.year||"",onChange:v,fullWidth:!0,margin:"normal",error:!!p.year,helperText:p.year,required:!0}),(0,n.jsx)(u.Z,{control:(0,n.jsx)(m.Z,{name:"existingLoan",checked:r.existingLoan||!1,onChange:v}),label:"Existing Loan?"}),(0,n.jsxs)(i.Z,{fullWidth:!0,margin:"normal",children:[(0,n.jsx)(s.Z,{children:"Loan Ownership?"}),(0,n.jsxs)(d.Z,{name:"loanOwnership",value:r.loanOwnership||"",onChange:v,label:"How did you hear about us?",error:!!p.loanOwnership,required:!0,children:[(0,n.jsx)(c.Z,{value:"50",children:"50"}),(0,n.jsx)(c.Z,{value:"60",children:"60"}),(0,n.jsx)(c.Z,{value:"70",children:"70"}),(0,n.jsx)(c.Z,{value:"80",children:"80"})]}),p.howDidYouHear&&(0,n.jsx)("p",{style:{color:"red"},children:p.howDidYouHear})]}),r.existingLoan&&(0,n.jsx)(o.Z,{label:"Lender Name",name:"lenderName",value:r.lenderName||"",onChange:v,fullWidth:!0,margin:"normal",error:!!p.lenderName,helperText:p.lenderName,required:!0}),(0,n.jsx)(h.default,{name:"ssn",value:r.ssn||"",onChange:v,error:!!p.ssn,helperText:p.ssn,required:!0}),(0,n.jsxs)(i.Z,{fullWidth:!0,margin:"normal",children:[(0,n.jsx)(s.Z,{children:"How did you hear about us?"}),(0,n.jsxs)(d.Z,{name:"howDidYouHear",value:r.howDidYouHear||"",onChange:v,label:"How did you hear about us?",error:!!p.howDidYouHear,required:!0,children:[(0,n.jsx)(c.Z,{value:"Google",children:"Google"}),(0,n.jsx)(c.Z,{value:"Email",children:"Email"}),(0,n.jsx)(c.Z,{value:"Facebook",children:"Facebook"}),(0,n.jsx)(c.Z,{value:"Referral",children:"Referral"})]}),p.howDidYouHear&&(0,n.jsx)("p",{style:{color:"red"},children:p.howDidYouHear})]})]})}},566:function(e,a,r){"use strict";r.r(a);var n=r(5893);r(7294);var t=r(6541);a.default=e=>{let{value:a,onChange:r,name:l}=e,o=e=>{let a=e.replace(/\D/g,"");return a.length<=3?a:a.length<=5?"".concat(a.slice(0,3),"-").concat(a.slice(3)):"".concat(a.slice(0,3),"-").concat(a.slice(3,5),"-").concat(a.slice(5,9))},i=e=>e.replace(/\D/g,"").length<=9?o(e):e.slice(0,9);return(0,n.jsx)(t.Z,{label:"SSN (Tax ID)",name:l,value:a,onChange:e=>{let{value:a}=e.target;r({target:{name:l,value:i(a)}})},fullWidth:!0,margin:"normal",placeholder:"999-99-9999"})}}},function(e){e.O(0,[5610,6125,471,7605,6541,9527,2888,9774,179],function(){return e(e.s=1411)}),_N_E=e.O()}]);