(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{5557:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(4742)}])},4742:function(e,n,s){"use strict";s.r(n);var t=s(5893),a=s(7294),i=s(7066),l=s(1955),o=s(1163),r=s(3454);n.default=()=>{let[e,n]=(0,a.useState)(""),[s,u]=(0,a.useState)(""),[c,d]=(0,a.useState)(""),[m,h]=(0,a.useState)(!1),g=(0,o.useRouter)(),x=async n=>{n.preventDefault(),d("");try{console.log("hii"),console.log(r.env.NEXT_PUBLIC_STAGING_URL);let{authToken:n}=(await i.Z.post(r.env.NEXT_PUBLIC_STAGING_URL,{query:'\n          mutation LoginUser {\n            login(input: { username: "'.concat(e,'", password: "').concat(s,'" }) {\n              authToken\n              user {\n                id\n                name\n                email\n              }\n            }\n          }\n        ')})).data.data.login;l.Z.set("token",n),h(!0),g.push("/dashboard")}catch(e){d("Invalid credentials. Please try again."),h(!1)}};return(0,t.jsx)("div",{className:"flex justify-center items-center h-screen bg-gray-100",children:(0,t.jsxs)("div",{className:"w-full max-w-md p-8 space-y-3 bg-white rounded shadow-md",children:[(0,t.jsx)("h1",{className:"text-2xl font-bold text-center",children:"Login"}),(0,t.jsxs)("form",{onSubmit:x,children:[(0,t.jsxs)("div",{className:"mb-4",children:[(0,t.jsx)("label",{className:"block text-gray-700",children:"Email"}),(0,t.jsx)("input",{type:"email",value:e,onChange:e=>n(e.target.value),required:!0,className:"w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-600"})]}),(0,t.jsxs)("div",{className:"mb-4",children:[(0,t.jsx)("label",{className:"block text-gray-700",children:"Password"}),(0,t.jsx)("input",{type:"password",value:s,onChange:e=>u(e.target.value),required:!0,className:"w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-600"})]}),c&&(0,t.jsx)("p",{className:"text-red-500 text-sm",children:c}),(0,t.jsx)("div",{className:"mt-6",children:(0,t.jsx)("button",{type:"submit",className:"w-full px-4 py-2 text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none",children:"Login"})})]})]})})}}},function(e){e.O(0,[7066,2888,9774,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);