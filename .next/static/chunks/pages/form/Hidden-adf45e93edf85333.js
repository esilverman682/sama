(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6458],{2263:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/form/Hidden",function(){return n(2513)}])},2513:function(e,t,n){"use strict";n.r(t);var i=n(5893),s=n(7294),l=n(6002),d=n(7066),a=n(8680),o=n(3454);t.default=()=>{let[e,t]=(0,s.useState)([]),[n]=(0,s.useState)("123"),[r,u]=(0,s.useState)(!1),[c,m]=(0,s.useState)(""),[p,h]=(0,s.useState)(""),b=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],f=async t=>{t.preventDefault(),u(!0),h(""),m("");try{let t=(await d.Z.post(o.env.NEXT_PUBLIC_STAGING_URL,{query:"\n    mutation submitForm($selectedOptions: [String], $hiddenField: String!) {\n      submitForm(input: { selectedOptions: $selectedOptions, hiddenField: $hiddenField }) {\n        formEntry {\n          id\n          selectedOptions\n          hiddenField\n        }\n      }\n    }\n  ",variables:{selectedOptions:e,hiddenField:n}})).data;t.errors?h(t.errors[0].message):m("Form submitted with ID: ".concat(t.data.submitForm.formEntry.id))}catch(e){h("Submission failed: "+e.message)}finally{u(!1)}};return(0,i.jsxs)("div",{className:"form-container",children:[(0,i.jsx)(a.Z,{}),(0,i.jsx)("h1",{children:"GraphQL Multi-Select and Hidden Field Form"}),(0,i.jsxs)("form",{onSubmit:f,children:[(0,i.jsxs)("div",{className:"mb-4",children:[(0,i.jsx)("label",{htmlFor:"selectedOptions",children:"Select Options:"}),(0,i.jsx)(l.ZP,{id:"selectedOptions",isMulti:!0,options:b,onChange:e=>{t(e.map(e=>e.value))},value:b.filter(t=>e.includes(t.value))})]}),(0,i.jsx)("input",{type:"hidden",name:"hiddenValue",value:n}),(0,i.jsx)("button",{type:"submit",className:"submit-button",disabled:r,children:r?"Submitting...":"Submit"}),c&&(0,i.jsx)("p",{children:c}),p&&(0,i.jsxs)("p",{children:["Error: ",p]})]})]})}}},function(e){e.O(0,[7066,5610,6002,2888,9774,179],function(){return e(e.s=2263)}),_N_E=e.O()}]);