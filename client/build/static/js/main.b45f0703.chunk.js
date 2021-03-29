(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{25:function(e,t,c){},33:function(e,t,c){},53:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(19),r=c.n(a),l=(c(25),c(26),c(2)),j=(c(33),c(3)),i=c(5),o=c.n(i),d=c(0),h=function(e){var t=Object(s.useState)([]),c=Object(j.a)(t,2),n=c[0],a=c[1],r=Object(s.useState)([]),i=Object(j.a)(r,2),h=i[0],b=i[1];return Object(s.useEffect)((function(){o.a.get("http://localhost:8000/api/pets").then((function(e){console.log("Success! ",e.data),b(e.data)})).catch((function(e){for(var t=e.response.data.errors,c=[],s=0,n=Object.keys(t);s<n.length;s++){var r=n[s];c.push(t[r].message)}a(c)}))}),[]),Object(d.jsxs)("div",{children:[Object(d.jsxs)("header",{className:"App-header d-flex flex-row justify-content-between p-2",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Pet Shelter"}),Object(d.jsx)("h2",{children:"These pets are looking for a good home"})]}),Object(d.jsx)(l.a,{to:"/pets/new",children:"Add a pet to the shelter"})]}),Object(d.jsx)("div",{children:Object(d.jsxs)("table",{className:"table table-bordered col-6 p-2",children:[Object(d.jsx)("thead",{className:"thead-dark",children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Name"}),Object(d.jsx)("th",{children:"Type"}),Object(d.jsx)("th",{children:"Actions"})]})}),Object(d.jsxs)("tbody",{children:[h.map((function(e,t){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.name}),Object(d.jsx)("td",{children:e.type}),Object(d.jsxs)("td",{children:[Object(d.jsx)(l.a,{to:"/pets/".concat(e._id),children:"Details"})," | ",Object(d.jsx)(l.a,{to:"/pets/".concat(e._id,"/edit"),children:"Edit"})]})]},t)})),n.map((function(e,t){return Object(d.jsx)("p",{children:e},t)}))]})]})})]})},b=c(6),O=c(8),p=function(e){var t=e.inputs,c=e.errors,s=e.handleSubmit,n=e.handleChange;return Object(d.jsxs)("form",{className:"p-2 w-100",onSubmit:s,children:[c?c.map((function(e,t){return Object(d.jsx)("p",{children:e},t)})):"",Object(d.jsxs)("div",{className:"d-flex flex-row justify-content-around",children:[Object(d.jsxs)("div",{className:"p-2",children:[Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"name",children:"Name"}),Object(d.jsx)("div",{}),Object(d.jsx)("input",{type:"form-control",name:"name",onChange:n,placeholder:t.name})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"type",children:"Type"}),Object(d.jsx)("div",{}),Object(d.jsx)("input",{type:"form-control",name:"type",onChange:n,placeholder:t.type})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"desc",children:"Description"}),Object(d.jsx)("div",{}),Object(d.jsx)("input",{type:"form-control",name:"desc",onChange:n,placeholder:t.desc})]})]}),Object(d.jsxs)("div",{className:"p-2",children:[Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"skillOne",children:"Skill 1"}),Object(d.jsx)("div",{}),Object(d.jsx)("input",{type:"form-control",name:"skillOne",onChange:n,placeholder:t.skillOne})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"skillTwo",children:"Skill 2"}),Object(d.jsx)("div",{}),Object(d.jsx)("input",{type:"form-control",name:"skillTwo",onChange:n,placeholder:t.skillTwo})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"skillThree",children:"Skill 3"}),Object(d.jsx)("div",{}),Object(d.jsx)("input",{type:"form-control",name:"skillThree",onChange:n,placeholder:t.skillThree})]})]})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("input",{type:"submit",className:"btn btn-success"}),Object(d.jsx)(l.a,{to:"/",children:Object(d.jsx)("button",{className:"btn btn-dark",children:"Cancel"})})]})]})},u=function(e){var t=Object(s.useState)([]),c=Object(j.a)(t,2),n=c[0],a=c[1],r=Object(s.useState)({name:"",type:"",desc:""}),i=Object(j.a)(r,2),h=i[0],u=i[1];return Object(d.jsxs)("div",{children:[Object(d.jsxs)("header",{className:"App-header d-flex flex-row justify-content-between p-2",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Pet Shelter"}),Object(d.jsx)("h2",{children:"Know a pet in need of a home?"})]}),Object(d.jsx)(l.a,{to:"/",children:"Back to Home"})]}),Object(d.jsx)("div",{children:Object(d.jsx)(p,{inputs:h,errors:n,handleChange:function(e){u(Object(O.a)(Object(O.a)({},h),{},Object(b.a)({},e.target.name,e.target.value)))},handleSubmit:function(e){e.preventDefault(),o.a.post("http://localhost:8000/api/pets/new",h).then((function(e){console.log("Success! ",e.data),Object(l.c)("/")})).catch((function(e){for(var t=e.response.data.errors,c=[],s=0,n=Object.keys(t);s<n.length;s++){var r=n[s];c.push(t[r].message)}a(c)}))}})})]})},x=function(e){var t=Object(s.useState)([]),c=Object(j.a)(t,2),n=c[0],a=c[1],r=Object(s.useState)({name:"",type:"",desc:""}),i=Object(j.a)(r,2),h=i[0],u=i[1];Object(s.useEffect)((function(){o.a.get("http://localhost:8000/api/pets/".concat(e.id)).then((function(e){return u(e.data)})).catch((function(e){for(var t=e.response.data.errors,c=[],s=0,n=Object.keys(t);s<n.length;s++){var r=n[s];c.push(t[r].message)}a(c)}))}),[e]);return Object(d.jsxs)("div",{children:[Object(d.jsxs)("header",{className:"App-header d-flex flex-row justify-content-between p-2",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Pet Shelter"}),Object(d.jsx)("h2",{children:"Know a pet in need of a home?"})]}),Object(d.jsx)(l.a,{to:"/",children:"Back to Home"})]}),Object(d.jsx)("div",{children:Object(d.jsx)(p,{inputs:h,errors:n,handleChange:function(e){u(Object(O.a)(Object(O.a)({},h),{},Object(b.a)({},e.target.name,e.target.value)))},handleSubmit:function(t){t.preventDefault(),o.a.put("http://localhost:8000/api/pets/".concat(e.id,"/update"),h).then((function(e){if(e.data.errors){var t=e.data.errors;console.log(t);for(var c=[],s=0,n=Object.keys(t);s<n.length;s++){var r=n[s];c.push(t[r].message)}a(c)}else console.log("Success! ",e.data),Object(l.c)("/")})).catch((function(e){var t=e.response.data.errors;console.log(t);for(var c=[],s=0,n=Object.keys(t);s<n.length;s++){var r=n[s];c.push(t[r].message)}a(c)}))}})})]})},m=function(e){var t=e.name,c=e.id,n=(e.successCallback,Object(s.useState)([])),a=Object(j.a)(n,2),r=a[0],i=a[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("button",{className:"btn btn-danger",onClick:function(e){o.a.delete("http://localhost:8000/api/pets/".concat(c,"/delete")).then((function(e){console.log(e.data),Object(l.c)("/")})).catch((function(e){for(var t=e.data.errors,c=[],s=0,n=Object.keys(t);s<n.length;s++){var a=n[s];c.push(t[a].message)}i(c)}))},children:["Adopt ",t]}),r.map((function(e,t){return Object(d.jsx)("p",{children:e},t)}))]})},f=function(e){var t=Object(s.useState)([]),c=Object(j.a)(t,2),n=c[0],a=c[1],r=Object(s.useState)({name:"",type:"",desc:""}),i=Object(j.a)(r,2),h=i[0],b=i[1];return Object(s.useEffect)((function(){o.a.get("http://localhost:8000/api/pets/".concat(e.id)).then((function(e){console.log(e.data),b(e.data)})).catch((function(e){for(var t=e.data.errors,c=[],s=0,n=Object.keys(t);s<n.length;s++){var r=n[s];c.push(t[r].message)}a(c)}))}),[e]),Object(d.jsxs)("div",{children:[Object(d.jsxs)("header",{className:"App-header d-flex flex-row justify-content-between p-2",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Pet Shelter"}),Object(d.jsxs)("h2",{children:[h.name,"'s Details"]})]}),Object(d.jsxs)("div",{className:"d-flex flex-column align-items-center justify-content-around",children:[Object(d.jsx)(l.a,{to:"/",children:"Back to Home"}),Object(d.jsx)(m,{id:e.id,name:h.name})]})]}),n.length>0?n.map((function(e,t){return Object(d.jsx)("p",{children:e},t)})):Object(d.jsxs)("div",{className:"border-black p-2",children:[Object(d.jsxs)("p",{children:["Pet Type: ",h.type]}),Object(d.jsxs)("p",{children:["Description: ",h.desc]}),h.skillOne?Object(d.jsxs)("p",{children:["Skill One: ",h.skillOne]}):"",h.skillTwo?Object(d.jsxs)("p",{children:["Skill Two: ",h.skillTwo]}):"",h.skillThree?Object(d.jsxs)("p",{children:["Skill Three: ",h.skillThree]}):""]})]})};var v=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(l.b,{children:[Object(d.jsx)(h,{path:"/"}),Object(d.jsx)(u,{path:"/pets/new"}),Object(d.jsx)(f,{path:"/pets/:id"}),Object(d.jsx)(x,{path:"/pets/:id/edit"})]})})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,54)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),s(e),n(e),a(e),r(e)}))};r.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root")),g()}},[[53,1,2]]]);
//# sourceMappingURL=main.b45f0703.chunk.js.map