(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{41:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),o=n(16),r=n.n(o),u=(n(7),n(3)),l=n(0),i=function(e){return Object(l.jsxs)("form",{onSubmit:e.addContact,children:[Object(l.jsxs)("div",{children:["name: ",Object(l.jsx)("input",{onChange:e.handleNameChange,value:e.newName}),Object(l.jsxs)("div",{children:["number: ",Object(l.jsx)("input",{onChange:e.handleNumberChange,value:e.newNumber})]})]}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{type:"submit",children:"add"})})]})},s=function(e){return console.log(e),void 0===e?null:Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Numbers"}),void 0!==e.persons?e.persons.filter((function(t){return console.log(e),t.name.toLowerCase().includes(e.filter.toLowerCase())})).map((function(t){return Object(l.jsxs)("p",{children:[t.name," ",t.number," ",Object(l.jsx)("button",{onClick:function(){return e.handleDelete(t.id)},children:"delete"})]},t.name)})):Object(l.jsx)(l.Fragment,{})]})},j=function(e){return Object(l.jsxs)("div",{children:["filter shown with",Object(l.jsx)("input",{onChange:e.handleFilterChange,value:e.filter})]})},d=n(4),b=n.n(d),h="/api/persons",f=function(){return console.log("Getting data from url:",h),b.a.get(h)},O=function(e){return b.a.post(h,e)},g=function(e){return b.a.delete("".concat(h,"/").concat(e))},m=function(e){var t=e.message;return null===t?null:Object(l.jsx)("div",{className:"add",children:t})},v=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)(null),r=Object(u.a)(o,2),d=r[0],b=r[1];Object(c.useEffect)((function(){f().then((function(e){return a(e.data)}))}),[]);var h=Object(c.useState)(""),v=Object(u.a)(h,2),x=v[0],p=v[1],C=Object(c.useState)(""),w=Object(u.a)(C,2),N=w[0],S=w[1],F=Object(c.useState)(""),y=Object(u.a)(F,2),k=y[0],D=y[1],L=Object(c.useState)([]),P=Object(u.a)(L,2),T=P[0],B=P[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Phonebook"}),Object(l.jsx)(m,{message:d}),Object(l.jsx)(j,{handleFilterChange:function(e){console.log(e.target.value),D(e.target.value),B(n.filter((function(t){return t.name===e.target.value}))),console.log(T)},filter:k}),Object(l.jsx)(i,{addContact:function(e){e.preventDefault(),console.log("eip\xe4 l\xf6ytynyt!");var t={name:x,number:N};O(t).then((function(e){a(n.concat(e.data)),b("Added:  ".concat(t.name,", ").concat(t.number)),setTimeout((function(){b(null)}),5e3)})),p(""),S("")},handleNameChange:function(e){console.log(e.target.value),p(e.target.value)},handleNumberChange:function(e){S(e.target.value)},newName:x,newNumber:N}),"...debug: ",x," ",Object(l.jsx)("br",{}),Object(l.jsx)(s,{persons:n,filter:k,handleDelete:function(e){console.log(e),window.confirm("Sure?")&&g(e).then((function(t){return a(n.filter((function(t){return t.id!==e})))}))}})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),o(e),r(e)}))};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root")),x()},7:function(e,t,n){}},[[41,1,2]]]);
//# sourceMappingURL=main.b73d4197.chunk.js.map